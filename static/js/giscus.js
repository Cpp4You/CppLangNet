(function() {

	const calcTheme = v => (v === "dark") ? "dark" : "light";
	let giscusScript = null;


	const stringHash = str => {
		let hash = 0;
		if (str.length == 0) {
			return hash;
		}
		for (var i = 0; i < str.length; i++) {
			var char = str.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	};

  const uniqueSiteId = () => {
    const clearPathName = pathName => {
      const capitalize = x => x[0].toUpperCase() + x.slice(1);

      const removeLastIfNotAlone = pathElems => {
        if(pathElems.length == 1) return pathElems;
        return pathElems.slice(0, -1);
      };

      const capitalizedPathElems = pathName.slice(1, -1).split('/').map(capitalize);

      return removeLastIfNotAlone(capitalizedPathElems).join('/');
    };
    const removeDocusaurusTitle = title => title.split('|')[0].slice(0, -1);

    const clearedPathName = clearPathName(window.location.pathname);
    const titleWithoutDocusaurusTitle = removeDocusaurusTitle(document.title);

    return `${clearedPathName}: ${titleWithoutDocusaurusTitle}`;
  };

	/**
	 * Inserts the Giscus script into the page.
	 */
	function insertGiscusScript()
	{
		const isDarkMode 	= calcTheme(document.documentElement.getAttribute("data-theme"));

		// DON'T EDIT BELOW THIS LINE
		var d = document,
			s = d.createElement("script");
		s.src = "https://giscus.app/client.js";
		s.setAttribute("data-repo",					"Cpp4You/CppLangNet");
		s.setAttribute("data-repo-id",				"R_kgDOGHXK8w");
		s.setAttribute("data-category",				"Site comment section");
		s.setAttribute("data-category-id",			"DIC_kwDOGHXK884B_uFs");
		s.setAttribute("data-mapping",				"specific");
		s.setAttribute("data-term",					uniqueSiteId());
		s.setAttribute("data-reactions-enabled",	"1");
		s.setAttribute("data-emit-metadata",		"0");
		s.setAttribute("data-theme",				isDarkMode ? "dark" : "light");
		s.setAttribute("data-lang",					"en");
		s.setAttribute("crossorigin",				"anonymous");
		s.setAttribute("async",						"true");
		(d.head || d.body).appendChild(s);

		giscusScript = s;
	}

	function sendMessageToGiscusIframe(message)
	{
		const iframe = document.querySelector("iframe.giscus-frame");
		if (!iframe)
			return;
		iframe.contentWindow.postMessage({ giscus: message }, "*");
 }

	function destroyPreviousGiscus() {
		if (giscusScript)
			giscusScript.remove();

		const iframe = document.querySelector("iframe.giscus-frame");
		if (!iframe)
			return;
		iframe.remove();
	}

	function handlePageLoad()
	{
		const postContainer	= document.querySelector(".pagination-nav")?.parentNode;
		
		if (!postContainer)
		{
			console.warn("(Giscus comments) could not find post content.");
			return;
		}

		const validRoutes = [
			"/learn",
			"/docs",
			"/tools",
		];

		const isValidRoute = validRoutes.findIndex(
			route => (window.location.pathname.indexOf(route) !== -1)
		) !== -1;

		if (postContainer && isValidRoute)
		{
			destroyPreviousGiscus();

			const hr				= document.createElement("hr");
			const giscusContainer	= document.createElement("div");
			giscusContainer.className = "giscus";

			postContainer.appendChild(hr);
			postContainer.appendChild(giscusContainer);
			insertGiscusScript();
		}
	}

	function handlePageLoadAsync() {
		setTimeout(handlePageLoad, 500);
	}

	const onLocationChange = () => handlePageLoadAsync();

	document.addEventListener("DOMContentLoaded",
		() => {
			handlePageLoadAsync();
		}
	);

	window.addEventListener("load", () => {
		let prevHref	= window.location.href;
		let bodyList	= document.querySelector("body");

		const updateTheme = () => {
			const currentTheme = document.documentElement.getAttribute("data-theme");
			sendMessageToGiscusIframe({
				setConfig: {
					theme: calcTheme(currentTheme),
				}
			});
		};

		setInterval(updateTheme, 500);

		let observer = new MutationObserver(
			(mutations) => {
				mutations.forEach(() => {
					if (prevHref != document.location.href) {
						onLocationChange(prevHref, document.location.href);
						prevHref = document.location.href;
					}
					else
					{
						updateTheme();
					}
				});
			}
		);

		var config = {
			childList: true,
			subtree: true
		};

		observer.observe(bodyList, config);
	});

})();

let PAGE_IDENTIFIER		= window.location.pathname;
const BASE_URL			= "https://cpp-lang.net";
const PAGE_URL			= BASE_URL + PAGE_IDENTIFIER;

(function() {

	const calcTheme = v => (v === "dark") ? "dark" : "light";

/**
 * Inserts the Giscus script into the page.
 */
function insertGiscusScript()
{
	const isDarkMode = calcTheme(document.documentElement.getAttribute("data-theme"));

	// DON'T EDIT BELOW THIS LINE
	var d = document,
		s = d.createElement("script");
	s.src = "https://giscus.app/client.js";
	s.setAttribute("data-repo",					"PoetaKodu/CppLangNet");
	s.setAttribute("data-repo-id",				"R_kgDOGHXK8w");
	s.setAttribute("data-category",				"Site comment section");
	s.setAttribute("data-category-id",			"DIC_kwDOGHXK884B_uFs");
	s.setAttribute("data-mapping",				"pathname");
	// s.setAttribute("data-term",					"Welcome to giscus!");
	s.setAttribute("data-reactions-enabled",	"1");
	s.setAttribute("data-emit-metadata",		"0");
	s.setAttribute("data-theme",				isDarkMode ? 'dark' : 'light');
	s.setAttribute("data-lang",					"en");
	s.setAttribute("crossorigin",				"anonymous");
	s.setAttribute("async",						"true");
	(d.head || d.body).appendChild(s);
}

function sendMessageToGiscusIframe(message)
{
	const iframe = document.querySelector('iframe.giscus-frame');
	if (!iframe)
		return;
	iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
}

function handlePageLoad()
{
	const postContainer	= document.querySelector(".pagination-nav")?.parentNode;
	
	if (!postContainer)
	{
		console.warn("(Giscus comments) could not find post content.");
		return;
	}

	const hr				= document.createElement("hr");
	const giscusContainer	= document.createElement("div");
	giscusContainer.className = "giscus";

	const validRoutes = [
		"/learn",
		"/docs",
		"/features",
		"/tools",
	];

	const isValidRoute = validRoutes.findIndex(
			route => (PAGE_IDENTIFIER.indexOf(route) !== -1)
		) !== -1;

	if (postContainer && isValidRoute)
	{
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
	let prevTheme	= document.documentElement.getAttribute("data-theme");
	let bodyList	= document.querySelector("body");

	let observer = new MutationObserver(
			(mutations) => {
				mutations.forEach((mutation) => {
					
					if (prevHref != document.location.href) {
						onLocationChange(prevHref, document.location.href);
						/* Changed ! your code here */

						prevHref = document.location.href;
					}
					else
					{
						const currentTheme = document.documentElement.getAttribute("data-theme");
						if (prevTheme != currentTheme)
						{
							sendMessageToGiscusIframe({
									setConfig: {
										theme: calcTheme(currentTheme),
									}
								});
							prevTheme = currentTheme;
						}
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

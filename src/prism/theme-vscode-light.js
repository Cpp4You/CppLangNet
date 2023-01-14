const theme = {
	plain: {
		color: "#000000",
		backgroundColor: "#ffffff"
	},
	styles: [
		{
			types: ["comment"],
			style: {
				color: "rgb(0, 128, 0)"
			}
		},
		{
			types: ["builtin"],
			style: {
				color: "rgb(0, 112, 193)"
			}
		},
		{
			types: ["number", "variable", "inserted"],
			style: {
				color: "rgb(9, 134, 88)"
			}
		},
		{
			types: ["operator"],
			style: {
				color: "rgb(0, 0, 0)"
			}
		},
		{
			types: ["constant", "char"],
			style: {
				color: "rgb(129, 31, 63)"
			}
		},
		{
			types: ["tag"],
			style: {
				color: "rgb(128, 0, 0)"
			}
		},
		{
			types: ["attr-name"],
			style: {
				color: "rgb(255, 0, 0)"
			}
		},
		{
			types: ["deleted", "string"],
			style: {
				color: "rgb(163, 21, 21)"
			}
		},
		{
			types: ["changed", "punctuation"],
			style: {
				color: "rgb(4, 81, 165)"
			}
		},
		{
			types: ["keyword"],
			style: {
				color: "rgb(0, 0, 255)"
			}
		},
		{
			types: ["function"],
			style: {
				color: "rgb(0, 0, 100)"
			}
		},
		{
			types: ["class-name", "namespace"],
			style: {
				color: "rgb(38, 127, 153)"
			}
		},
		{
			types: ["directive", "directive-hash"],
			style: {
				color: "#AF00DB"
			}
		},
	]
};

module.exports = theme;

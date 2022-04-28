module.exports = function(eleventyConfig) {

	let markdownIt = require("markdown-it");
	let options = {
		html: true,
		breaks: true,
		linkify: true
	};

	eleventyConfig.setLibrary("md", markdownIt(options));

	eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false, // warning: don’t do this!
	});

	return {
		htmlTemplateEngine: "njk",
		dir: {
			input: 'src',
			layouts: '_layouts'
		}
	}
};

module.exports = function(eleventyConfig) {
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

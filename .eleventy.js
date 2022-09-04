// lessc src/styles/master.less --clean-css master.css

module.exports = function(eleventyConfig) {
	eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false // warning: don’t do this!
	});
	eleventyConfig.addPassthroughCopy({'src/styles' : 'styles'});
	return {
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: 'src',
			output: '_site',
			layouts: '_layouts'
		}
	}
};

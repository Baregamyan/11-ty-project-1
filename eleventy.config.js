module.exports = function (eleventyConfig) {
  // Copy `assets/` to `_site/assets/`
  eleventyConfig.addPassthroughCopy("assets");

  // Set the source for 11ty to the /src directory 
  // Otherwise, this defaults to the project structure 
  // This provides a cleaner project structure 
  return {
    dir: {
      input: "src",
      output: "_site", // This is the default, but its included here for clarity 
      includes: "_templates",
    }
  }
}
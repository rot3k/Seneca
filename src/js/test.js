(function() {
  /**
   * Helper object for working with countries data and extracting information.
   * See countries-data.js for format of the countries data set.
   */
  let countries = {
    /**
     * Store all countries from countries-data.js on `countries.all` for convenience.
     */
    all: window.countriesData,

    /**
     * Return an array of all countries, with the Name Object replaced by the
     * appropriate translation, or English if not specified (or unknown).  For
     * example, when language="English", you would process the record for Canada into:
     *
     * {
     *     code: "CA",
     *     continent: "Americas",
     *     areaInKm2: 9984670,
     *     population: 36624199,
     *     capital: "Ottawa",
     *     name: "Canada"
     * }
     *
     * Supported languages include:
     *
     * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
     *
     * Uses `countries.all` as the underlying array of countries to be processed.
     *
     * HINT: make sure you don't overwrite the original name object.
     */
    getByLanguage: function(language) {
      language = Object.keys(countries.all[0].name).includes(language) ? language : 'English';
      var getByLanguage = countries.all.map(function(country) {
        var display = {};
        display.code = country.code;
        display.continent = country.continent;
        display.areaInKm2 = country.areaInKm2;
        display.population = country.population;
        display.capital = country.capital;
        display.name = country.name[language];
        return display;
      });
      return getByLanguage;
    }
  };
})();

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
      // if there is no supported language, country name displayed in English
      language = Object.keys(countries.all[0].name).includes(language) ? language : 'English';
      let newArr = [];
      countries.all.map(function(country) {
        let newObj = {};
        newObj.code = country.code;
        newObj.continent = country.continent;
        newObj.areaInKm2 = country.areaInKm2;
        newObj.population = country.population;
        newObj.capital = country.capital;
        newObj.name = country.name[language];
        newArr.push(newObj);
      });
      return newArr;
    },

    /**
     * Return an array of countries with a population greater than or equal to
     * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
     * otherwise allow any number greater than `minPopulation`.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {Number} minPopulation - (Required) minimum population value
     * @param {Number} maxPopulation - (Optional) maximum population value
     */
    getByPopulation: function(minPopulation, maxPopulation) {
      let oldArr = countries.getByLanguage('English');
      let newArr = [];
      oldArr.map(function(country) {
        if (maxPopulation === undefined) {
          if (country.population >= minPopulation) {
            newArr.push(country);
          }
        } else {
          if (country.population >= minPopulation && country.population <= maxPopulation) {
            newArr.push(country);
          }
        }
      });
      return newArr;
    },
    /**
     * Return an array of countries for the given `continent` with an area
     * greater than or equal to the given `area` in square KM.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {String} continent - (Required) name of the continent (e.g., Europe)
     * @param {Number} minArea - (Required) minimum number of KM2 area
     */
    getByAreaAndContinent: function(continent, minArea) {
      let oldArr = countries.getByLanguage('English');
      let newArr = [];
      oldArr.map(function(country) {
        if (country.continent === continent && country.areaInKm2 >= minArea) {
          newArr.push(country);
        }
      });
      return newArr;
    }
  };

  /**
   * Helper functions for building table elements.
   */
  let tableHelper = {
    /**
     * Clears (any) existing rows from the #table-rows table body
     */
    clearTable: function() {
      let table = document.querySelector('#table-rows');
      while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
      }
    },

    /**
     * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img>
     * element with its `src` property set the appropriate flag image URL
     * for this code, e.g., src="flags/ca.png" for Canada.
     */
    countryCodeToFlagImg: function(countryCode) {
      let image = document.createElement('img');
      image.setAttribute('src', 'flags/' + countryCode.toLowerCase() + '.png');
      image.setAttribute('alt', 'flag');
      return image;
    },

    /**
     * Takes a single `country` object and converts it to a <tr> with <td>
     * child elements for every column in the row.  The row should match the
     * expected format of the table (i.e., flag, code, country, continent, etc).
     * Return the new <tr>...</tr> row.
     *
     * Use the DOM methods document.createElement(), element.appendChild(), etc
     * to create your <tr> row.
     */
    countryToRow: function(country) {
      // create getText function for getting country's properties
      function getText(item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item);
        td.appendChild(text);
        return td;
      }

      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      tr.appendChild(td1);
      let img = tableHelper.countryCodeToFlagImg(country.code);
      td1.appendChild(img);
      tr.appendChild(getText(country.code));
      tr.appendChild(getText(country.name));
      tr.appendChild(getText(country.continent));
      tr.appendChild(getText(country.areaInKm2));
      tr.appendChild(getText(country.population));
      tr.appendChild(getText(country.capital));

      return tr;
    },

    /**
     * Takes an array of `country` Objects named `countries`, and passes each
     * `country` in the array  to `tableHelper.countryToRow()`.  The resulting
     * rows are then appended to the #table-rows table body element.  Make sure
     * you use `tableHelper.clear()` to remove any existing rows before you do this.
     */
    countriesToTable: function(countries) {
      let table = document.querySelector(' #table-rows');
      tableHelper.clearTable();
      countries.map(function(country) {
        table.appendChild(tableHelper.countryToRow(country));
      });
    }
  };

  /**
   * Register click handlers for every menu item in the page.  Use the `countries`
   * and `tableHelper` Objects, and their associated methods, to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked.
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it. For example: "List of Countries
   * and Dependencies - Population between 1 and 2 million" or "List of Countries
   * and Dependencies - All countries in Asia" etc.
   */
  function setupMenuHandlers() {
    // Country List By Language

    // Create selectByLanguage for subtitles to get supported languages
    function selectByLanguage(language) {
      tableHelper.countriesToTable(countries.getByLanguage(language));

      language === 'Chinese'
        ? (document.querySelector(
            '#subtitle'
          ).innerHTML = `List of Countries and Dependencies - Country/Dep. Name in ${language} (中文)`)
        : (document.querySelector(
            '#subtitle'
          ).innerHTML = `List of Countries and Dependencies - Country/Dep. Name in ${language} (${language})`);
    }

    document.querySelector('#menu_english').onclick = function() {
      selectByLanguage('English');
    };

    document.querySelector('#menu_arabic').onclick = function() {
      selectByLanguage('Arabic');
    };

    document.querySelector('#menu_chinese').onclick = function() {
      selectByLanguage('Chinese');
    };

    document.querySelector('#menu_french').onclick = function() {
      selectByLanguage('French');
    };

    document.querySelector('#menu_hindi').onclick = function() {
      selectByLanguage('Hindi');
    };

    document.querySelector('#menu_korean').onclick = function() {
      selectByLanguage('Korean');
    };

    document.querySelector('#menu_japanese').onclick = function() {
      selectByLanguage('Japanese');
    };

    document.querySelector('#menu_russian').onclick = function() {
      selectByLanguage('Russian');
    };

    // Country List By Population
    document.querySelector('#menu_population_100_000_000m').onclick = function() {
      tableHelper.countriesToTable(countries.getByPopulation(100000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - By Population > 100,000,000';
    };

    document.querySelector('#menu_population_1m_2m').onclick = function() {
      tableHelper.countriesToTable(countries.getByPopulation(1000000, 2000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - By Population 1 ~ 2 million';
    };

    // Country List by Area & Continent
    document.querySelector('#menu_americas_1mkm').onclick = function() {
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Americas', 1000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - By Area & Continent 1 million Km², Americas';
    };

    document.querySelector('#menu_asia_all').onclick = function() {
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Asia', 0));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - By Area & Continent All Sizes, Asia';
    };
  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
})();

// From https://www.geeksforgeeks.org/how-to-share-code-between-node-js-and-the-browser/
// All the code in this module is enclosed in a closure.
(function(exports) {
  function getByYear(content) {
      //console.log('foo');
      const json = JSON.parse(content);
      //console.log(json);
      let byYear = {};
      //let allC = {};
      let contByCountry = {};
      for (i of json.installations) {
        //console.log(i);
          const year = i.launch_year;
        if (byYear[year] == undefined) {
          byYear[year] = [];
        }
        //byYear[year].push(i.country);
        //if (allC[i.country] == undefined) {
        //  allC[i.country] = {};
        //}
        //allC[i.country][i.continent];
        if (byYear[year][i.country] == undefined) {
            byYear[year][i.country] = 0;
        }
        byYear[year][i.country] +=1;
        //console.log(byYear[year]);
        if (contByCountry[i.country] == undefined) {
          contByCountry[i.country] = i.continent;
        }
      }
      const firstYear = "2008";
      //const firstYear = "2012";
      let date = new Date();
      const currentYear = date.getFullYear() + " ";
      // '2012': [ Canada: 1, India: 1 ],
      //console.log(byYear);
      let baz = {}
      let last = {}
      for (var i = firstYear; i <= currentYear; i++) {
          const year                   = String(i);
          const countriesByYear = byYear[String(i)];
          //console.log(i + " " + countries);
          //console.log(countriesByYear);
          //if (baz[year] == undefined) {
          //  baz[year] = {};
          //}
          //for (j in allC) {
            //process.stdout.write(j);
            //console.log(j);
            //if (countriesByYear[j] == undefined) {
            //}
            //const numAddedThisYear = countriesByYear[j];
          //}
//          let noChangeByCountry = {};
          for (j in countriesByYear) {
/*
[ USA: 2 ]
USA 2
undefined
undefined
undefined
[ Canada: 1, India: 1 ]
Canada 1
India 1
*/
            const numAddedThisYear = countriesByYear[j];
            //console.log(j + " " + countriesByYear[j]);
            //if (baz[year][j] == undefined) {
            //  baz[year][j] = 1;
            //}
            //baz[year][j] += numAddedThisYear;
            if (baz[j] == undefined) {
              baz[j] = 0;
            }
            baz[j] += numAddedThisYear;
            //baz[year][j] countriesByYear);
            // if (this country increased this year)
              // print it
            // else
              // print same year with last total
            //console.log(year + "-01-01," + j + ",Technology," + baz[j]);
            //last[j] = year + "-01-01," + j + ",Technology," + baz[j];
          }
          for (j in baz) {
            //console.log(year + "-01-01," + j + ",Technology," + baz[j]);
            console.log(year + "-01-01," + j + "," + contByCountry[j] + "," + baz[j]);
          }
      }
      if (true) {
          //console.log("baz..");
          //console.log(baz);
          return;
      }
      //console.log(byYear);

      //const tenYearsAgo = currentYear - 10;
      //return firstYear + "-" + currentYear;
      
      //let byCountryAccumulator = {};
      let byCountryCount = {};
      for (var i = firstYear; i <= currentYear; i++) {
          //console.log(i) + byYear[i];
          //console.log(i + " " + byYear[String(i)]);
          //const yearAsString = String(i);
          //console.log(i) + byYear[yearAsString] + " foo";
          //console.log(i + typeof(byYear[yearAsString]) + " foo");
          const countries = byYear[String(i)];
          //console.log(typeof(countries));
          //console.log("zzz" + countries);
          //if (countries == undefined) {
          //    continue;
          //}
          for (j in countries) {
              //console.log(countries[j]);
              const country = countries[j];
              //console.log("");
            if (byCountryCount[country] == undefined) {
              byCountryCount[country] = 1;
            } else {
              byCountryCount[country] += 1;
            }
            console.log(i + " " + country + " " + byCountryCount[country]);
          }
          //for (var j = 0; i < countries.length; i++) {
              //console.log("here");
              //console.log(j);
          //}
//          var country = 999;
          console.log(i)
          //console.log(byCountryCount);
      }
      /*
    for (const [year, movies] of Object.entries(byYear)) {
      let stars = '';
      for (var i = 0; i < movies.length; i++) {
        stars += '*';
      }
      lines += `${year} ${stars} ${movies.length}\n`;
    }
      */
      return firstYear + "-" + currentYear;
  }
  // Export the functions to exports.
  // In node.js this will be the module.exports.
  // In a browser this will be a function in the global object "asciiLib".
  exports.getByYear = getByYear;
})(typeof exports === 'undefined' ? (this['asciiLib'] = {}) : exports);

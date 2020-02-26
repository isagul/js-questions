const request = require('request');
const cheerio = require('cheerio');
const fs      = require('fs');

//konusarakogren.com url
var url = "https://github.com/lydiahallie/javascript-questions";

//words response
var words = [];

//url request
request(url, function (error,response,html) {
  if(!error)
  {
      //cheerio data
      var $ = cheerio.load(html);

      //words push
      $('.highlight-source-js pre').filter(function(){
        words.push({
            code: $(this).text()
        })
      });

      $('.markdown-body ul').filter(function(){
          console.log($(this).text())
        /*words.push({
            code: $(this).text()
        })*/
      });

      //console.log(words);

      //write file is json data
      // writeFile(JSON.stringify(words));
  }
});

/**
* json file write
*/
function writeFile(data) {
  var dataFile = fs.createWriteStream("data.json");
  dataFile.once('open', function functionName(f) {
    dataFile.write(data);
  });
}
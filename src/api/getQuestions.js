const request = require('request');
const cheerio = require('cheerio');
const fs      = require('fs');

let url = "https://github.com/lydiahallie/javascript-questions";

let questions = [];

//url request
request(url, function (error,response,html) {
  if(!error)
  {
      //cheerio data
      var $ = cheerio.load(html);

      $('h6').filter(function(index){
        let obj = {};

        let questionDetail = $(this).text();
        obj["questionDetail"] = questionDetail;

        let options = "";
        let answer = "";
        let solution = "";

        let code = $(this).next('div').children('pre').text();

        if (code.trim().length === 0) {
          obj["code"] = null;
          options = $(this).next('ul').text();
          answer = $(this).next().next('details').children('h4').text();
          solution = $(this).next().next('details').children('h4').nextAll().text();        
        } else {
          obj["code"] = code;                   
          options = $(this).next().next('ul').text();
          answer = $(this).next().next().next('details').children('h4').text();
          solution = $(this).next().next().next('details').children('h4').nextAll().text();
        }

        obj["options"] = options;
        obj["answer"] = answer;
        obj["solution"] = solution;
      
        questions.push(obj);
      });

      writeFile(JSON.stringify(questions));
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
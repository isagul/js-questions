const request = require('request');
const cheerio = require('cheerio');
const fs      = require('fs');

//konusarakogren.com url
var url = "https://github.com/lydiahallie/javascript-questions";

//words response
var questions = [];
//var allQuestions = [];
//var detailQuestions = [];

function compare(arr1, arr2) {
  return arr1.filter(o1 => arr2.filter(o2 => o2.code === o1.code).length === 0);
}

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

        let code = $(this).next('div').children('pre').text();

        if (code.trim().length === 0) {
          obj["code"] = null;
          let options = $(this).next('ul').text();
          obj["options"] = options;

          let answer = $(this).next().next('details').children('h4').text();
          obj["answer"] = answer;

          let solution = $(this).next().next('details').children('h4').nextAll().text();
          obj["solution"] = solution;

        } else {
          obj["code"] = code;
                       
          let options = $(this).next().next('ul').text();
          obj["options"] = options;

          let answer = $(this).next().next().next('details').children('h4').text();
          obj["answer"] = answer;

          let solution = $(this).next().next().next('details').children('h4').nextAll().text();
          obj["solution"] = solution;
        }
      
        questions.push(obj);
        // console.log(index)

      });

      writeFile(JSON.stringify(questions));


      /*$('.highlight-source-js').filter(function(){
        let questionDetail = $(this).prev('h6').text();
        let code = $(this).children('pre').text();
        let options = $(this).next('ul').text();
        let answers = $(this).next('details').text();

        let obj = {
          questionDetail,
          code,
          options,
          answers
        }

        questions.push(obj)
      });

      console.log(questions);
      console.log(questions.length);*/

      //words push
      /*$('.highlight-source-js pre').filter(function(){
        allQuestions.push({
            code: $(this).text()
        })
      });

      $('details .highlight-source-js pre').filter(function(){
        detailQuestions.push({
            code: $(this).text()
        })
      });*/

      /*$('.highlight-source-js').filter(function(index){
        tempArr.push($(this).next('ul').text())
            //questions[index - 1]["options"] = $(this).text()
      });*/

/*
      $('details h4').filter(function(index){
        if (index > 7) {
          questions[index - 8]["answer"] = $(this).text().split(':')[1]
        }
      });*/


      // console.log(words.length);

      //write file is json data
      // writeFile(JSON.stringify(questions));
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
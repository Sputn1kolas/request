var request = require("request");
var fs = require("fs")

request.get('https://sytantris.github.io/http-examples/future.jpg').on('response', function(){response()}).on('data', function(){data()}).on('end', function(){end()}).pipe(fs.createWriteStream('./future.jpeg'));

function response() {
  console.log("Downloading image....")
}

var wait = "*"
function data() {
  wait += "*"
  console.log(wait)
}

function end() {
  console.log("Finished downloading!")
}



//
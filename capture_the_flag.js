var htmlparser = require("htmlparser");

var handler = new htmlparser.DefaultHandler(function (error, dom) {
  if (error) {
    console.log(error);
  }
  if(dom)
  {
    // console.log("I am a thing!!!");
    // console.log(dom[2]["children"][2]["children"]);
    for(let child of dom[2]["children"][2]["children"]){
      console.log(child["children"]);
    }
  }
});

var parser = new htmlparser.Parser(handler);

fetch('https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge')
  .then(response => response.text())
  .then(html => {
    // Step 2: Parse the HTML (if not already in a browser context)
    const doc = parser.parseComplete(html);

    // Step 3: Search for the key information
    console.log(doc);
  });
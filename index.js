const http = require("http");
const fs = require("fs");


fs.writeFile("index.html","<h1> Hello World </h1><p> This is Shweta </p>", (err, data)=>{
    if(err){console.log(err, data);}
});

fs.readFile("./index.html", (err, html)=>{
    if(err){throw err;}
    http.createServer((req, res)=>{
        res.writeHeader(200, {"content-type": "text/html"});
        res.write(html);
        res.end();
    }).listen(3000);
})
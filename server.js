var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articletwo={
    title:'Hello',
    heading:'Article Two',
    content:`
                <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>
                 <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>
                  <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>
`
}
fuction Createtemplet(data){
var title = data.title;
var content = data.content;
var heading = data.heading;

var templet=`
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale-1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <h1>There are Two kind of People in this world</h1>
        <a href='/article-three'>Article three</a>
        <a href='/article-two'>${heading}</a>
        <div class="container">
           ${content}
        </div>
    </body>
</html>`;
return templet;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
});

app.get('/article-two', function(req,res){
    res.send(Createtemplet(articletwo));
});

app.get("/article-three", function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

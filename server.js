var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles={  //function which has set of data consist of the data and which can be reutnr when asked for it
    'article-two': {
        title:'Hello',
        heading:'Article Two',
        content:`
                            <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>
                             <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>
                              <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>
            ` },  //sub  function which works as n array
    'article-one' : {
             title:'Hello',
        heading:'Article One',
        content:`
                            <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>
                             <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>
                              <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>`
        },
    'article-three' :{
              title:'Hello',
        heading:'Article Three',
        content:`
                            <p>There are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this worldThere are Two kind of People in this world</p>`
         }
};

function createTemplet (data){   //data is the variable which will take values from articles the given variable and show tha output
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

app.get('/:articlename', function(req,res){   //using : will help us to match the desired article name after the colon with the function --will                                               try to match with tha part and convert that to variable
    //articlename == article-one which is there in the function
    //articles[articlename] == {} just like switch it will go to that function and use that if reqquired
    var articlename = req.params.articlename;  //used to extract article name using by requesting parameter and will compy that to variable articlename 
    res.send(createTemplet(articles[articlename]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

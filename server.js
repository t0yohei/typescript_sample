const http      = require('http');
const ejs       = require('ejs');
const filSystem = require('fs');
const server    = http.createServer();

let message  = '';

server.on('request', function(request, response) {
    var pokemon = 'ライチュウ';
    function sing(){
       //JavaScriptは関数内のどこでもvarの宣言を書ける
       //これらの変数は関数のどこで定義しても、先頭で定義したものとして見なされる
       //var pokemon;
       console.log(pokemon);
       var pokemon = 'ピカチュウ';
       console.log(pokemon);
    }
    sing();

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end();
});

server.listen(3000);

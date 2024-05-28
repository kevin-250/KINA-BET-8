var http= require('http');
const {join}=require('node:path');
http.createServer(function(req ,res){
    res.sendFile(join(__dirname,'best.html'))
    res.end('ooooooooooooooooogggggggggg');
    console.log('listen on port 8080');
}).listen(8080);
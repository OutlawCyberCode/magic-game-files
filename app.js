var http = require("http")

function onRequest(request, response){
    response.writeHead(200,{"content-type":"text/plain"})
    response.write("hello world :D")
    response.end()
}
http.createServer(onRequest).listen(process.env.PORT || 5000)
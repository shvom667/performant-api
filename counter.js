const http = require("http");
const host = 'localhost';
const port = 8000;

let counter = 0;
const requestListener = function (req, res) {
    res.writeHead(200);
    for(i = 0; i < 20; i++){
        counter++
    }
    res.end(counter.toString())
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

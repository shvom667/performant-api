const http = require("http");
const host = 'localhost';
const port = 8001;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("<b>hello</b>")
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

const http = require("http");
const fs = require("fs");
const os = require("os");

osType = os.type();

// console.log("OS TYPE>>", osType);

htmlContent = `
  <!DOCTYPE html>
  <html>
    <h3>Hello World INDEX 2! Your OS type is ${osType}</h3>
  </html>
`;
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(204, { "content-type": "image/x-icon" });
    res.end();
    return;
  }

  fs.writeFileSync("./index2.html", htmlContent);
  let readFile = fs.readFileSync("index2.html", "utf-8");
  if (readFile) {
    res.setHeader("content-type", "text/html");
    res.end(readFile);
  }
});

server.listen(3000, () => {
  console.log("Server is up, running on port 3000");
});

const http = require("http");
const fs = require("fs");
const os = require("os");

osType = os.type();

// console.log("OS TYPE>>", osType);

htmlContent = `
  <!DOCTYPE html>
  <html>
    <h3>Hello World! Your OS type is ${osType}</h3>
  </html>
`;

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(204, { "content-type": "image/x-icon" });
    res.end();
    return;
  }

  console.log("Αρχικά δημιουργούμε το αρχείο index1.html");
  fs.writeFile("./index1.html", htmlContent, (err) => {
    if (err) {
      console.log("Problem in writing file", err);
    } else {
      console.log("Διάβασε το αρχείο index1.html");
      fs.readFile("index1.html", "utf8", (err, content) => {
        if (err) {
          console.log(err);
        } else {
          res.setHeader("Content-Type", "text/html");
          res.end(content);
        }
      });
    }
  });
});

server.listen(3000, () => {
  console.log("Server is up, running on port 3000");
});

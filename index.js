const http = require('http');
// request data masuk dari luar
// response data keluar dari server
http.createServer(function (request, response){
response.end('Halo pelajar..!')
}).listen(3001)
// jalankan dengan perintah node index.js lalu buka browser localhost:3001
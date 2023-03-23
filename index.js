const http = require('http');
const host = '127.0.0.1'
const port = 3002
// request data masuk dari luar
// response data keluar dari server
const server = http.createServer(function (request, response){
response.end('Halo pelajar..!');
});
// jalankan dengan perintah node index.js lalu buka browser localhost:3001
server.listen(port, host, '', function (){
    console.log(`server berjalan dengan baik di ${host}:${port}`);
})
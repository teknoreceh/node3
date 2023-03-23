const http = require('http');
const host = '127.0.0.1'
const port = 3002
// request data masuk dari luar
// response data keluar dari server
const server = http.createServer(function (request, response){
    response.statusCode = 203;
    response.end('Halo pelajar..! menambahkan status 203 ');
});
// jalankan dengan perintah node index.js lalu buka browser localhost:3001
server.listen(port, host, '', function (){
    console.log(`server berjalan dengan baik di ${host}:${port}`);
})
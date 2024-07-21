
const http = require('http');

const port = 5000;

const server = http.createServer((req , res) => {
    
    const url = req.url;

    if(url === '/' || url === '/index'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>Index sayfasina hosgeldiniz!</h1>');
    }else if(url === '/hakkimda'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>Hakkimda sayfasina hosgeldiniz!</h1>');
    }else if(url === '/iletisim'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>Iletisim sayfasina hosgeldiniz!</h1>');
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write('<h1>SAYFA BULUNAMADI</h1>')
    }
      res.end();
});

server.listen(port, () => {
    console.log(`Sunucu çalışıyor, port: ${port}`);
  });
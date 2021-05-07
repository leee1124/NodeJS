const http = require('http');

http.createServer((req,res)=>{
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie':'mycookie=test'});
    //응답의 헤더에 쿠키를 기록해야 하므로 res.writeHead 메서드 사용
    //Set-Cookie는 브라우저한테 다음과 같은 값의 쿠키를 저장하라는 의미
    //실제로 응답을 받은 브라우저는 mycookie=test라는 쿠키를 저장
    res.end('Hello Cookie');
})
    .listen(8083, ()=>{
        console.log('8083번 포트에서 서버 대기 중입니다!');;
    });
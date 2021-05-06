const http = require('http');

const server = http.createServer((req, res)=>{ 
    //req객체에는 res.wirte, res.end 메서드가 있다.
    //여기에 어떻게 응답할지 적는다.

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    //res.writeHead는 응답에 대한 정보를 기록하는 메서드이다.
    //첫 번째 인수로 성공적인 요청임을 의미하는 200
    //두 번째 인수로 응답에 대한 정보를 보내는데 콘텐츠의 형식이 HTML임을 알리고 있다.
    //한글 표시를 위해 charset을 utf-8로 지정했다.
    //이 정보가 기록되는 부분이 헤더이다.
    
    res.write('<h1>Hello Node!</h1>');
    //res.write 메서드의 첫 번째 인수는 클라이언트로 보낼 데이터이다.
    //지금은 html 모양의 문자열을 보냈지만 버퍼를 보낼 수도 있다.
    //여러 번 호출해서 데이터를 여러 번 보내는 것도 가능하다.
    //데이터가 기록되는 부분을 본문(body)라고 부른다.
    
    res.end('<p>Hello Server!</p>');
    //res.end는 응답을 종료하는 메서드이다.
    //만약 인수가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료한다.
    //따라서 이 코드에서는 res.write에서 <h1>Hello Node!</h1> 문자열을
    //res.end에서 <p>Hello Server!</p> 문자열을 클라이언트로 보낸 후 응답이 종료됐다.
    //브라우저는 응답 내용을 받아서 렌더링
});
server.listen(8080);

server.on('listening', ()=>{
    console.log('8080번 포트에 서버 대기중입니다!');
});
//이런식으로 listen 메서드에 콜백함수 대신 listening 이벤트 리스너를 붙여도 된다.

server.on('error', (error)=>{
    console.log(error);
});

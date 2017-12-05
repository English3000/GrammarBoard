//https://www.w3schools.com/xml/ajax_intro.asp

// export const fetchCards = () => {
//   const ajax = new XMLHttpRequest();
//   ajax.onreadystatechange = () => {
//     debugger;
//     if (ajax.readyState === 4 && ajax.status === 200) return ajax.response;
//   };
//   ajax.open('GET', 'api/cards');
//   ajax.send();
// };
export const fetchCards = () => $.ajax({
  method: 'GET',
  url: 'api/cards',
  // success: () => {
  //   let http = require('http');
  //
  //   http.createServer(function (request, response) {
  //   response.writeHead(200, {
  //       'Content-Type': 'text/plain',
  //       'Access-Control-Allow-Origin' : '*',
  //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  //   });
  //   response.end('Hello World\n');
  //   }).listen(3000);
  // }
});

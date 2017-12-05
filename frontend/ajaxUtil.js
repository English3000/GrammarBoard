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
export const fetchCards = () => $.get('api/cards');

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(button);
//nodeList mili hai uspr hai aaram se forEach loop lga skte hai with call back function

button.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
    }
  });
});

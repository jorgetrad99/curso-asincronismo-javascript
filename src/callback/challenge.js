const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/';

function fetchData(urlAPI, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlAPI, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      // 0: not initialized, 1: loading, 2: excecuted the send value, 3: interacting, 4: completed
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      const error = new Error('Error' + urlAPI);
      return callback(error, null);
    }
  };
  xhttp.send();
}

let btn = document.querySelector('.send');
const xhr = new XMLHttpRequest();
let content;

function parseJSON(jsonObj){
  objectick = JSON.parse(jsonObj);
  const parent = document.querySelector('.result');
  for(i = 0; i < objectick.length; i++){
    let url = objectick[i].download_url;
    parent.insertAdjacentHTML('beforeend',`<div><img src = '${url}' width = '500px'></img></div>`)
    //console.log(url);
    
  }
}

btn.addEventListener( 'click', () =>{
  const value = document.querySelector('input').value;
  if(value > 10 || value < 1 || isNaN(value)){
    alert('Введенное число вне диапазона')
  }
  else{
    xhr.open('get', 'https://picsum.photos/v2/list?limit='+ value, false);
    xhr.send();
    res = xhr.response;
    parseJSON(res);
  }
})
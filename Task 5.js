let btn = document.querySelector('.send');
const parent = document.querySelector('.result');

function requestFetch(url){
    fetch(url)
            .then((response) =>{
                const result = response.json();
                return result;
            })
            .then((data)=>{
                for (i = 0; i < data.length; i++){
                console.log(data[i].download_url);
                src = data[i].download_url;
                elem = `<img src = '${src}' width ='500px'></img>`;
                localStorage.setItem(`elem${i}`, elem);
                parent.insertAdjacentHTML('beforeend', elem);
                }
            })
}

function check(number, limit){
    if(number > 10 || number < 1 || isNaN(number)){
        alert('Номер страницы вне диапазона от 1 до 10')
    }
    else if(limit > 10 || limit < 1 || isNaN(limit)){
        alert('Лимит вне диапазона от 1 до 10')
    }
    else if((number > 10 || number < 1 || isNaN(number)) && (limit > 10 || limit < 1 || isNaN(limit))){
        alert('Номер страницы и лимит вне диапазона от 1 до 10')
    }
    else{
       const  url = `https://picsum.photos/v2/list?page=${number}&limit=${limit}`;
       requestFetch(url);
     }
}

function removeAndClean(){
    childreny = document.querySelectorAll('img');
    for(i = childreny.length-1; i >= 0; i--){
        parent.removeChild(childreny[i]);
    }
    localStorage.clear();
}

for(i = 0; i < localStorage.length; i++){
    oldElem = localStorage.getItem(`elem${i}`);
    parent.insertAdjacentHTML('beforeend', oldElem);
}

btn.addEventListener('click', () => {
    removeAndClean()
    const number = document.querySelector('#first').value;
    const limit = document.querySelector('#second').value;
    check(number,limit);
})
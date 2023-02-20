let btn = document.querySelector('.send');
const parent = document.querySelector('.result');

btn.addEventListener('click', () => {
    const valueFirst = document.querySelector('#first').value;
    const valueSecond = document.querySelector('#second').value;
    if(valueFirst > 300 || valueFirst < 100 || isNaN(valueFirst) || valueSecond > 300 || valueSecond < 100 || isNaN(valueSecond)){
        alert('Введенное число лежит вне диапазона')
    }
    else{
       const  url = "https://picsum.photos/"+valueFirst+"/"+valueSecond;

        fetch(url)
            .then((response) =>{
                const result = response;
                return result;
            })
            .then((data)=>{
                src = data.url;
                parent.insertAdjacentHTML('beforeend',`<img src = '${src}'></img>`)
            })
     }
})
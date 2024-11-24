var ecran = document.querySelector('#ecran');
var btn = document.querySelectorAll('.btn');

for( item of btn){
    item.addEventListener('click' , (e) => {
        btntext = e.target.innerText;
        if(btntext =='÷'){
            btntext = '/';
        }
        if(btntext == '×' ){
            btntext = '*';
        }
        ecran.value += btntext;
    });
}

function clear(){
    ecran.value = ecran.value.substr(0, ecran.value.length -1);
}

/* changement du mode de la page */
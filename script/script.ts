const p= document.querySelector('.ecran');

function clickme(params: any) {
    document.querySelector('.ecran')!.textContent += params;
}

function clear(p) {
    p.textContent = " ";
}

function Result(p){
    p.innerText = eval(p.textContent);
    p.value = eval(p.value);
}
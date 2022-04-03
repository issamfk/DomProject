let total =document.getElementById('total')

let quantité1 =document.getElementById('quantité1')
let price1 =document.getElementById('product1price1')
let part1 =document.getElementById('part1')

let quantité2 =document.getElementById('quantité2')
let price2 =document.getElementById('product1price2')
let part2 =document.getElementById('part2')

let quantité3 =document.getElementById('quantité3')
let price3 =document.getElementById('product1price3')
let part3 =document.getElementById('part3')

let h1 =document.getElementById('heart1')
let h2 =document.getElementById('heart2')
let h3 =document.getElementById('heart3')


function remove1() {
    part1.style.display='none'
    total.innerHTML=+total.innerHTML-price1.innerHTML
}
function heart1(){
    if(h1.style.color=='red'){
        h1.style.color='black'
    }
    else{
        h1.style.color='red'
    }   
}
function inc1(){
    quantité1.innerHTML=+quantité1.innerHTML+1
    price1.innerHTML=+price1.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
}
function dec1(){
    if(quantité1.innerHTML>0){
        quantité1.innerHTML=+quantité1.innerHTML-1
        price1.innerHTML=+price1.innerHTML-250;
    total.innerHTML=+total.innerHTML-250
    }
}



function remove2() {
    part2.style.display='none'
    total.innerHTML=+total.innerHTML-price2.innerHTML
}

function heart2(){
    if(h2.style.color=='red'){
        h2.style.color='black'
    }
    else{
        h2.style.color='red'
    }   
}

function inc2(){
    quantité2.innerHTML=+quantité2.innerHTML+1
    price2.innerHTML=+price2.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
}

function dec2(){
    if(quantité2.innerHTML>0){
        quantité2.innerHTML=+quantité2.innerHTML-1
        price2.innerHTML=+price2.innerHTML-250;
        total.innerHTML=+total.innerHTML-250
    }
}


function remove3() {
    part3.style.display='none'
    total.innerHTML=+total.innerHTML-price3.innerHTML
}

function heart3(){
    if(h3.style.color=='red'){
        h3.style.color='black'
    }
    else{
        h3.style.color='red'
    }   
}

function inc3(){
    quantité3.innerHTML=+quantité3.innerHTML+1
    price3.innerHTML=+price3.innerHTML+250;
    total.innerHTML=+total.innerHTML+250
}

function dec3(){
    if(quantité3.innerHTML>0){
        quantité3.innerHTML=+quantité3.innerHTML-1
        price3.innerHTML=+price3.innerHTML-250;
    total.innerHTML=+total.innerHTML-250
    }
}














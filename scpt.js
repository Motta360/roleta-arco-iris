"use strict";
// Declaração das caixas, variáveis e o botão "all"
let cor, x = 1;
let caixa1 = document.getElementById("caixa1");
let caixa2 = document.getElementById("caixa2");
let caixa3 = document.getElementById("caixa3");
let caixa4 = document.getElementById("caixa4");
let caixa5 = document.getElementById("caixa5");
let caixa6 = document.getElementById("caixa6");
let caixa7 = document.getElementById("caixa7");
let caixa8 = document.getElementById("caixa8");

let btn = document.getElementById("btn");

// Função para trocar a cor
function rodadecor(x) {
    switch (x) {
        case 1:
            cor = "red"
            break;
        case 2:
            cor = "orange"
            break;
        case 3:
            cor = "yellow"
            break;
        case 4:
            cor = "green"
            break;
        case 5:
            cor = "blue"
            break;
        case 6:
            cor = "purple"
            break;
    }
}
// Funções para trocar a cor de cada caixa
function tratar1(event){
    if (x == 7) {
        x = 1;
    } 
    rodadecor(x);
    caixa1.style.backgroundColor = cor; 
    x+=1;
        
    console.log(x);
    

}

function tratar2(){
    if (x == 7) {
        x = 1;
    }
    rodadecor(x);
    caixa2.style.backgroundColor = cor; x+=1;
    

}

function tratar3(){
    if (x == 7) {
        x = 1;
    } 
    rodadecor(x);
    caixa3.style.backgroundColor = cor; x+=1;
    

}

function tratar4(){
    if (x == 7) {
        x = 1;
    } 
    rodadecor(x);
    caixa4.style.backgroundColor = cor; x+=1;


}

function tratar5(){
    if (x == 7) {
        x = 1;
    } 
    rodadecor(x);
    caixa5.style.backgroundColor = cor; x+=1;
    

}

function tratar6(){
    if (x == 7) {
        x = 1;
    } 
    rodadecor(x);
    caixa6.style.backgroundColor = cor; x+=1;
    

}

function tratar7(){
    if (x == 7) {
        x = 1;
    } 
    rodadecor(x);
    caixa7.style.backgroundColor = cor; x+=1;
    

}

function tratar8(){
    if (x == 7) {
        x = 1;
    } 
    rodadecor(x);
    caixa8.style.backgroundColor = cor; x+=1;
    
}
//função do botal all para trocar todas as caixas de uma vez
function tratarall() {
    tratar1();
    tratar2();
    tratar3();
    tratar4();
    tratar5();
    tratar6();
    tratar7();
    tratar8();
    
}

// eventos caso o mouse passe pr cima das caixas
caixa1.addEventListener("mouseover",tratar1);
caixa2.addEventListener("mouseover",tratar2);
caixa3.addEventListener("mouseover",tratar3);
caixa4.addEventListener("mouseover",tratar4);
caixa5.addEventListener("mouseover",tratar5);
caixa6.addEventListener("mouseover",tratar6);
caixa7.addEventListener("mouseover",tratar7);
caixa8.addEventListener("mouseover",tratar8);

// evento do botão all
btn.addEventListener("click",tratarall);
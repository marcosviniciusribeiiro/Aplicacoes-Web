function fatorialFor(numero){
    let fatorial=1;
    for(let i=1;i<=numero;i++){
        fatorial=fatorial*i;
        console.log(i);
    }
    alert(fatorial);
}
function inicio(num){
    alert(fatorial(num));
}
function fatorial(num){
    if(num==0 || num==1){
        return 1;
    }
    return num*fatorial(num-1);
}
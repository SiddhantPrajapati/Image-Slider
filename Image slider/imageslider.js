
function changeImage(n){
    var no = toString(n);
    document.getElementById("no").innerHTML;
}

function forward(){
    var n = 0;
    while(n>-1){
        n=n%4;
        changeImage(n);
        n++;
    }
}

function backward(){
    var n = 0;
    while(n< 1){
        n=n%4;
        changeImage(n);
        n--;
    }
}
function temperature(){
    var c=document.getElementById("c").value;
    if(c==""){
        alert("Please type a value");
        document.getElementById("c").focus();
        return false;
    }
    var f= (c* 9/5)+32;
    document.getElementById("f").value=f;
}
function weight(){
    var k=document.getElementById("k").value;
    if(k==""){
        alert("Please type a value");
        document.getElementById("k").focus();
        return false;
    }
    var p= k*2.2;
    document.getElementById("p").value=p;
}
function distance(){
    var km=document.getElementById("km").value;
    if(km==""){
        alert("Please type a value");
        document.getElementById("km").focus();
        return false;
    }
    var m= km*0.62137;
    document.getElementById("m").value=m;
}
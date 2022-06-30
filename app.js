var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsruvwxyz0123456789!@#$%^&*?";

var q=Math.floor(Math.random()*A.length);
console.log(q);
var passcode="";

for(var i=0;i<8;i++){
    var q=Math.floor(Math.random()*A.length);
    passcode+=A[q];
}
    document.write("<center>"+"New Passcode: " + "<b><h1>"+passcode+"</b></center></h1>");


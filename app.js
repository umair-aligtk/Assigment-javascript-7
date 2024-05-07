
var bakraeid = new Date("june 17, 2024 12:00:00").getTime();
var x = setInterval(function () {
var remainingdays = new Date() .getTime();
var minus =     bakraeid- remainingdays  ;
var days = Math.floor (minus / (1000*60*60 *24 ));
console.log(days)
var hours = Math.floor ((minus % (1000*60*60 *24 )) / (1000 * 60 * 60));
console.log(hours)
var minutes = Math.floor ((minus % (1000*60*60  )) / (1000 * 60 ));
console.log(minutes)
var seconds = Math.floor((minus % (1000*60  )) / 1000 );
console.log(seconds)
document.getElementById("demo").innerHTML = days+","+hours + "Hrs:"+ minutes+ "M:"+ seconds+"S"


    } , 1000);







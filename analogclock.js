
// Declaring the widths of hands with respect to client with

var element = document.getElementById("clock");
const clockWidth = element.clientWidth;

var secondsHandWidth = (clockWidth/3).toString()+"px"
var minutesHandWidth = (clockWidth/3.6).toString()+"px"
var hoursHandWidth = (clockWidth/5).toString()+"px"


document.getElementById("secondHand").style.width = secondsHandWidth
document.getElementById("minuteHand").style.width = minutesHandWidth
document.getElementById("hourHand").style.width = hoursHandWidth




// setting the angles on each seconds of each hand
setInterval(() => {

    let d = new Date()

    let secondsangle = ((d.getSeconds())*6)-90
    let minutesangle = (((d.getMinutes())*6)+ ((d.getSeconds()/60)*6))-90
    let hoursangle = (((d.getHours())*30)+((d.getMinutes()/60)*30))-90



    // calling the function to move the hands according to the angle on each second
    moveHand(secondsangle,"secondHand")
    moveHand(minutesangle, "minuteHand")
    moveHand(hoursangle, "hourHand")



    // adding the dates
    declareDate(d.getUTCDate(),"date")
    declareDate(d.getMonth()+1, "month")
    declareDate(d.getFullYear(), "year")

}, 1000);




// function for moving the hand 
function moveHand(angle,handid){
    var anglestr = "rotate("+angle+'deg)'

    document.getElementById(handid).style.transform = anglestr
}


// function for declaring the date compomonents
function declareDate(value, id){

    if(value<10){
        value = "0"+value
    }
    document.getElementById(id).innerHTML = value
}
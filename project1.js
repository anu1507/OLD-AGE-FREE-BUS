const SeatAvailable=document.getElementById("SeatAvailable");
const ageAbove50=document.getElementById("ageAbove50");
const hasAadhar=document.getElementById("hasAadharCard");
const checkButton=document.getElementById("checkstatus");
const passengerStatus=document.getElementById("status");
checkButton.addEventListener("click",function(){
    let isSeatAvailable=SeatAvailable.checked;
    let isAgeAbove50=ageAbove50.checked;
    let hasAadharCard=hasAadhar.checked;
    console.log(isSeatAvailable,isAgeAbove50,hasAadharCard);
    if (isSeatAvailable){
        console.log("Seat is Available");
        if(isAgeAbove50){
            console.log("Age above50");
        if(hasAadharCard){
            console.log("hasAadharCard");
            alert("please come inside the bus");
        }else{console.log("but you dont have AadharCard");
 passengerStatus.textContent="seat is Available,age above50,but you dont have AadharCard";
document.getElementById('message').innerText="seat is Available,age above50,but you dont have AadharCard"}         }
        else{
    console.log("but your age is below 50 years");
   passengerStatus.textContent="seat is Available,but your age is below 50 years";}}
else {
    console.log("seat is not available");
    passengerStatus.textContent="seat is not Available";}});




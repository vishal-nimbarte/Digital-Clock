
//getting the id 
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("second");
const ampmE1 = document.getElementById("ampm");


function updateClock()
{
    let h = new Date().getHours()//get the hours 
    let m = new Date().getMinutes()//get minutes
    let s = new Date().getSeconds()//get second
    
    //Am and Pm logic
    let ampm = "AM"
    if(h>12)//6>12
    {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h//set text in hours id
    minuteE1.innerText = m//set text in minutes
    secondE1.innerText = s//set text in second
    ampmE1,(innerText = ampm);//

    setTimeout(() => {
       updateClock(); 
    }, 1000);
}

updateClock();
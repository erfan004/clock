const seconds = document.querySelector('.sec')
const min = document.querySelector('.min')
const hour = document.querySelector('.hour')

// seconds codes

secCnt = new Date().getSeconds()*6
    seconds.style.transform = `rotate(${secCnt}deg)`
setInterval(() => {
    secCnt = new Date().getSeconds()*6
    seconds.style.transform = `rotate(${secCnt}deg)`
}, 1000);

//minutes codes

 minCnt = new Date().getMinutes()*6
 min.style.transform = `rotate(${minCnt}deg)`
    setInterval(() => {
        minCnt = new Date().getMinutes()*6
        min.style.transform = `rotate(${minCnt}deg)`
    }, 1000);

 //hour codes

 hourCnt = new Date().getHours()*30
 hour.style.transform = `rotate(${hourCnt}deg)`
 setInterval(() => {
     hourCnt = new Date().getHours()*30
     hour.style.transform = `rotate(${hourCnt}deg)`
 }, 1000);
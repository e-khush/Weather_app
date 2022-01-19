// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const detail={
    key: "68b839fc0ac9001cd1232b3c62115e45",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


let search= document.getElementById('input-box');
search.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        console.log(search.value);
        getreport(search.value);
    }
});

function getreport(city){
fetch(`${detail.baseUrl}?q=${city}&appid=${detail.key}&units=metric`)
.then(weather => {
    return weather.json();
}).then(showreport);
}

function showreport(weather){
console.log(weather);
const place= document.getElementById('place');
place.innerText= `${weather.name}, ${weather.sys.country}`;

let temp= document.getElementById('temp');
temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

let minmax= document.getElementById('min-max');
minmax.innerHTML= `${Math.round(weather.main.temp_min)}&deg;C(min) / ${Math.round(weather.main.temp_max)}&deg;C(max)`;

let type= document.getElementById('type');
type.innerHTML=`${weather.weather[0].main}`;

let date= document.getElementById('date');
date.innerHTML= showdate();
}

function showdate(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     let a=new Date();
      let d= a.getDate();
      let m= month[a.getMonth()];
      let day= weekday[a.getDay()];
      let y= a.getFullYear();
   
   return `${d} ${m} (${day}), ${y}`;
}  
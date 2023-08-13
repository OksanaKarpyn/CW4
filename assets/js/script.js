
// dom elements
const counterDate = document.querySelectorAll('.counter-date');
// const date = document.querySelectorAll('.date');
const days = document.querySelector('.days');
const hours =  document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const second =  document.querySelector('.secondes');
const h1 = document.getElementsByTagName('h1');
const counter = document.querySelector('.counter');

const xmasDate = new Date('December 25 2023');
let time = xmasDate.getTime();
console.log(time);

// currentdate in millesecond
// const currentDate = new Date().getTime();


// diff tra data corrente e natale
// const differenza = xmasDate - currentDate;


// tabella in millesecondi
 const secondInMs = 1000;
 const minutiInMs = secondInMs * 60;
 const hoursInMs =  minutiInMs * 60;
 const daysInMs = hoursInMs * 24;
//  quanto manca per natale

// let rountedDate = Math.round( differenza / daysInMs );
// let rountedHour =  Math.round( differenza % daysInMs / hoursInMs );
// let rountedMinut = Math.round( differenza % hoursInMs / minutiInMs );
// let rountedSecond = Math.round( differenza % minutiInMs / secondInMs );

//console.log(differenza % hoursInMs);

// days.innerHTML = `${ rountedDate }`;
// hours.innerHTML = `${ rountedHour }`;
// minutes.innerHTML = `${ rountedMinut }`;
// second.innerHTML = `${ rountedSecond }`;

function countDate ( ){
     const currentDate = new Date().getTime();

     const differenza = xmasDate - currentDate;
    if(false){

       let rountedDate = Math.round( differenza / daysInMs );
       let rountedHour =  Math.round( differenza % daysInMs / hoursInMs );
       let rountedMinut = Math.round( differenza % hoursInMs / minutiInMs );
       let rountedSecond = Math.round( differenza % minutiInMs / secondInMs );
  
       days.innerHTML = `${ rountedDate }`;
       hours.innerHTML = `${ rountedHour }`;
       minutes.innerHTML = `${ rountedMinut }`;
       second.innerHTML = `${ rountedSecond }`;
    }
    else{
    clearInterval(countertime);
    h1.innerHTML = 'Merry Christmas';
    counter.style.display = "none";
    }
}

// creo var per dopo se lo voglio bloccare set inteterval mi servira 
const countertime = setInterval( countDate, 1000);


function update() {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let hr;
  let min = minute < 10 ? "0" + minute : minute;
  let sec = second < 10 ?  "0" + second : second;

  let ampm = hour >= 12 ? "PM" : "AM";

  let fordate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let formonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currentmonth = formonth[date.getMonth()];
  
  let forday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentday = forday[date.getDay()];
  let foryear = date.getFullYear();

  //Hour
  if (hour >= 12) {
    let realhr = hour - 12;
    hr = "0" + realhr;
    if(hr == 0){
        hr = 12;
    }
  } else if (hour === 0) {
    hr = 12;
  } else if (hour < 12) {
    hr = hour;
    if (hour < 10) {
      hr = "0" + hour;
    }
  }

  document.querySelector(".hms").innerHTML = `<p>${hr} : ${min} : ${sec} <span>${ampm}</span></p>`;
  document.querySelector(".dmy").innerHTML = `<p>${fordate} - ${currentmonth}- ${foryear}  [${currentday}]</p>`;
}
setInterval(update, 1000);

$('.navbar').affix({
  offset: {
    top: 200,
    bottom: 1200
  }
})

function updateClock() {
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  let month = currentTime.getMonth()+1;
  let date = currentTime.getDate();
  let day = currentTime.getDay();
  let dayNames = ["일요일", "월요일", "화요일", "수요일", "T목요일", "금요일", "토요일"];
  let dayName = dayNames[day];
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // 오전인지 오후 인지 선택하기 
  let ampm = (hours < 12) ? "AM" : "PM";

  hours = (hours > 12) ? hours - 12 : hours;
  hours = (hours == 0) ? 12 : hours;

  let clockText = hours + ":" + minutes + ":" + seconds + " " + ampm;
  let timeText = year + "년 " + month+ "월 " + date + "일 " + dayName + " " + clockText;
  document.getElementById("clock").innerHTML = timeText;

  let alarmTime = document.getElementById("alarm-time").value;
  if (clockText == alarmTime) {
    playAlarm();
  }
}
// 내가 설정한 알람시간에 알람 울리도록
function playAlarm() {
  let alarmSound = document.getElementById("alarm-sound");
  alarmSound.currentTime = 0;
  alarmSound.play();
  document.getElementById("warning").style.display = "block";
}

// 알람끄기
function stopAlarm() {
  document.getElementById("alarm-sound").pause();
  document.getElementById("warning").style.display = "none";
}

//1초마다 
setInterval(updateClock, 1000);
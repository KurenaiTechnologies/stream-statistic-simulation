// A variable "x", commonly used for algebra
var x = 1;

// Time variant
let time = -1;

// Some stream components
let sViews = Math.floor(Math.random() * 1000000) + (x * 7500);
let sTime = Math.floor(Math.random() * 15000) + (x * 500);
let sRevenue = Math.floor(Math.random() * 50000) + (x * 150);
let sMessages = Math.floor(Math.random() * 750000) + (x * 300);
let sFollowers = Math.floor(Math.random() * 12500) + (x * 250);

// set a timeout and update the info
setTimeout(updateInfo, 1000);

// set an interval that executes some functions here every second
setInterval(() => {
    
    var uViews = Math.floor(Math.random() * 1000) + (x * 150);
    var uRevenue = Math.floor(Math.random() * 5) + (x * 15);
    var uFollowers = Math.floor(Math.random() * 3) + (x * 7);
    var uMessages = Math.floor(Math.random() * 15) + (x * 5);
    
    sViews+=uViews;
    sRevenue+=uRevenue;
    sFollowers+=uFollowers;
    sMessages+=uMessages;
    sTime+=1;
    x+=1;
    time+=1;
    
    document.getElementById("viewcount").innerHTML = abbreviateNumber(uViews);
    document.getElementById("overallviews").innerHTML = abbreviateNumber(sViews);
    document.getElementById("totaltime").innerHTML = abbreviateNumber(sTime);
    document.getElementById("totalrevenue").innerHTML = abbreviateNumber(sRevenue);
    document.getElementById("totalmessages").innerHTML = abbreviateNumber(sMessages);
    document.getElementById("totalfollowers").innerHTML = abbreviateNumber(sFollowers);
    document.getElementById("overalltime").innerHTML = time;
    
    document.getElementById("viewers").innerHTML = abbreviateNumber(uViews) + " Watching";
    document.getElementById("timedisplay").innerHTML = timeConvert(sTime)

}, 1000)


// function that updates the text in the next second
function updateInfo() {
    document.getElementById("info").innerHTML = "Holy moly confettis in a popper! Currently, there is a channel that raided your channel just now, which made your stream and followers rise up extremely quickly! Keep it up!"
}

// function for abbreviating numbers with suffixes, for example: 1e15 = 1Qd
function abbreviateNumber(value) {
    let abbreviatedValue = value;
    const letters = ["", "K", "M", "B","T", "Qd", "Qn", "Sx", "Sp", "Oc", "No", "De", "UDe", "DDe", "TDe", "QdDe", "QnDe", "SxDe", "SpDe", "OcDe", "NoDe", "Vg", "UVg", "DVg", "TVg", "QdVg", "QnVg", "SxVg", "SpVg", "OcVg", "NoVg", "Tg", "UTg", "DTg", "TTg", "QdTg", "QnTg", "SxTg", "SpTg", "OcTg", "NoTg"];
    let notation = 0;
    
    while (abbreviatedValue >= 1000) {
        abbreviatedValue /= 1000;
        notation++;
  }

    abbreviatedValue = abbreviatedValue.toPrecision(3);

    abbreviatedValue += letters[notation];
    return abbreviatedValue;
}


// function to convert any value to time
function timeConvert(value) {
    var minutes = Math.floor(value / 60);
    var seconds = value % 60;
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    return minutes + ":" + seconds;
}

// function for real-time clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('digital').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1);
}

// add 0 to values below 10 for the clock function
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

// a function that prompts a window where you setup two components; description and title once the page has opened
function streamSetup() {
    let streamName = prompt("Enter stream name please");
    
    if (streamName != null) {
    document.getElementById("stream").innerHTML = streamName;
    }
    
    let shortDesc = prompt("Enter a short description (optional)")
    
    if (shortDesc != null) {
        document.getElementById("streamer").innerHTML = shortDesc
    }
                     }

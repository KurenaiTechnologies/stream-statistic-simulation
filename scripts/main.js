// Time variant
let time = -1;

// variable x
var x = 1;

// Some stream components
let sViews = Math.floor(Math.random() * 10000000) + (x * 7500);
let sTime = Math.floor(Math.random() * 15000) + (x * 500);
let sRevenue = Math.floor(Math.random() * 75000) + (x * 150);
let sMessages = Math.floor(Math.random() * 1000000) + (x * 300);
let sFollowers = Math.floor(Math.random() * 20000) + (x * 250);
let sSubs = Math.floor(Math.random() * 2750) + (x * 100);

// Add the revenue from subs with the total revenue
var subsRevenue = 5;
var totalSubRevenue = sSubs * subsRevenue;
sRevenue+=totalSubRevenue;

// set an interval that executes some functions here every second
setInterval(() => {
    
    // Updated stream components
    var uViews = Math.floor(Math.random() * 1500) + (x * 200);
    var uRevenue = Math.floor(Math.random() * 5) + (x * 20);
    var uFollowers = Math.floor(Math.random() * 3) + (x * 10);
    var uMessages = Math.floor(Math.random() * 15) + (x * 7);
    var uSubs = Math.floor(Math.random() * 5) + (x * 3);
    var uSubRevenue = uSubs * 5;
    
    // Add values
    sViews+=uViews;
    sRevenue+=uRevenue;
    sFollowers+=uFollowers;
    sMessages+=uMessages;
    totalSubRevenue+=uSubRevenue;
    sSubs+=uSubs;
    sTime+=1;
    x+=1;
    time+=1;
    
    // Show the values in html
    document.getElementById("viewcount").innerHTML = abbreviateNumber(uViews) + " people";
    document.getElementById("overallviews").innerHTML = abbreviateNumber(sViews) + " views";
    document.getElementById("totaltime").innerHTML = showMinutes(sTime);
    document.getElementById("totalrevenue").innerHTML = abbreviateNumber(sRevenue);
    document.getElementById("totalmessages").innerHTML = abbreviateNumber(sMessages) + " messages";
    document.getElementById("totalfollowers").innerHTML = abbreviateNumber(sFollowers) + " followers";
    document.getElementById("overalltime").innerHTML = time;
    document.getElementById("totalsubs").innerHTML = abbreviateNumber(sSubs) + " subscribers";
    document.getElementById("totalsubrevenue").innerHTML = abbreviateNumber(uSubRevenue) + " per second";
    
    document.getElementById("viewers").innerHTML = abbreviateNumber(uViews) + " viewers are watching";
    document.getElementById("timedisplay").innerHTML = timeConvert(sTime);
    
    console.log("Value of x: ", x);
    
}, 1000)

// Make a function for abbreviating numbers with suffixes, for example: 1e15 = 1Qd
function abbreviateNumber(value) {
    let abbreviatedValue = value;
    const letters = ["", "K", "M", "B","T", "Qd", "Qn", "Sx", "Sp", "Oc", "No", "De", "UDe", "DDe", "TDe", "QdDe", "QnDe", "SxDe", "SpDe", "OcDe", "NoDe", "Vg", "UVg", "DVg", "TVg", "QdVg", "QnVg", "SxVg", "SpVg", "OcVg", "NoVg", "Tg", "UTg", "DTg", "TTg", "QdTg", "QnTg", "SxTg", "SpTg", "OcTg", "NoTg", "qg", "Uqg", "Dqg", "Tqg", "Qdqg", "Qnqg", "Sxqg", "Spqg", "Ocqg", "Noqg", "Qg", "UQg", "DQg", "TQg", "QdQg", "QnQg", "SxQg", "SpQg", "OcQg", "NoQg", "sg", "Usg", "Dsg", "Tsg", "Qdsg", "Qnsg", "Sxsg", "Spsg", "Ocsg", "Nosg", "Sg", "USg", "DSg", "TSg", "QdSg", "QnSg", "SxSg", "SpSg", "OcSg", "NoSg", "Og", "UOg", "DOg", "TOg", "QdOg", "QnOg", "SxOg", "SpOg", "OcOg", "NoOg", "Ng", "UNg", "DNg", "TNg", "QdNg", "QnNg", "SxNg", "SpNg", "OgNg", "NoNg", "Ce", "UCe", "DCe", "TCe", "QdCe", "QnCe", "SxCe", "SpCe", "OcCe", "NoCe", "DeCe", "UDeCe", "DDeCe", "TDeCe", "QdDeCe", "QnDeCe", "SxDeCe", "SpDeCe", "OcDeCe", "NoDeCe", "VgCe", "UVgCe", "DVgCe", "TVgCe", "QdVgCe", "QnVgCe", "SxVgCe", "SpVgCe", "OcVgCe", "NoVgCe", "TgCe", "UTgCe", "DTgCe", "QdTgCe", "QnTgCe", "SxTgCe", "SpTgCe", "OcTgDe", "NoTgCe", "qgCe", "UqgCe", "DqgCe", "TqgCe", "QdqgCe", "QnqgCe", "SxqgCe", "SpqgCe", "OcqgCe", "NoqgCe", "QgCe", "UQgCe", "DQgCe", "TQgCe", "QdQgCe", "QnQgCe", "SxQgCe", "SpQgCe", "OcQgCe", "NoQgCe", "sgCe", "UsgCe", "DsgCe", "TsgCe", "QdsgCe", "QnsgCe", "SxsgCe", "SpsgCe", "OcsgCe", "NosgCe", "SgCe", "USgCe", "DSgCe", "TSgCe", "QdSgCe", "QnSgCe", "SxSgCe", "SpSgCe", "OcSgCe", "NoSgCe", "NgCe", "UNgCe", "DNgCe", "TNgCe", "QdNgCe", "QnNgCe", "SxNgCe", "SpNgCe", "OcNgCe", "NoNgCe", "Du", "UDu", "DDu", "TDu", "QdDu", "QnDu", "SxDu", "SpDu", "OcDu", "NoDu", "DeDu", "UDeDu", "DDeDu", "TDeDu", "QdDeDu", "QnDeDu", "SxDeDu", "SpDeDu", "OcDeDu", "NoDeDu", "VgDu", "UVgDu", "DVgDu", "TVgDu", "QdVgDu", "QnVgDu", "SxVgDu", "SpVgDu", "OcVgDu", "NoVgDu", "TgDu", "UTgDu", "DTgDu", "QdTgDu", "QnTgDu", "SxTgDu", "SpTgDu", "OcTgDe", "NoTgDu", "qgDu", "UqgDu", "DqgDu", "TqgDu", "QdqgDu", "QnqgDu", "SxqgDu", "SpqgDu", "OcqgDu", "NoqgDu", "QgDu", "UQgDu", "DQgDu", "TQgDu", "QdQgDu", "QnQgDu", "SxQgDu", "SpQgDu", "OcQgDu", "NoQgDu", "sgDu", "UsgDu", "DsgDu", "TsgDu", "QdsgDu", "QnsgDu", "SxsgDu", "SpsgDu", "OcsgDu", "NosgDu", "SgDu", "USgDu", "DSgDu", "TSgDu", "QdSgDu", "QnSgDu", "SxSgDu", "SpSgDu", "OcSgDu", "NoSgDu", "NgDu", "UNgDu", "DNgDu", "TNgDu", "QdNgDu", "QnNgDu", "SxNgDu", "SpNgDu", "OcNgDu", "NoNgDu"];
    let notation = 0;
    
    while (abbreviatedValue >= 1000) {
        abbreviatedValue /= 1000;
        notation++;
}

    abbreviatedValue = abbreviatedValue.toPrecision(3);

    abbreviatedValue += letters[notation];
    return abbreviatedValue;
}

// Make a function to convert any value to time
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

// Same function, but only shows up minutes
function showMinutes(n) {
    var min = Math.floor(n / 60);
    var sec = n % 60;
    
    if (min < 1) {
        min = "0";
    }
    
    return min + " minutes";
}

// Make a function for the real-time clock and the date
function getDateToday() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  
  var time = h + ":" + m + ":" + s;
  var year = today.getFullYear();
  var dayNum = today.getDay();
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let day = days[today.getDay()];
  let month = months[today.getMonth()];
  
  document.getElementById("realtimedate").innerHTML = month + " " + dayNum + ", " + year + ", " + time + ", " + day;
  setTimeout(getDateToday, 1);
}

// Add 0 to values below 10 for the digital clock function
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

// Make a function that prompts a window where you setup three components; description, streamer name and title once the page has been opened
function streamSetup() {
    
    let streamName = prompt("Please enter your stream name (optional)");
    if (streamName != null) {
    document.getElementById("stream").innerHTML = streamName;
    }
    
    let shortDesc = prompt("Enter a short description (optional)")
    if (shortDesc != null) {
        document.getElementById("streamer").innerHTML = shortDesc;
    }
    
    let streamerName = prompt("Please enter your name (optional)")
    if (streamerName != null) {
        document.getElementById("streamerName").innerHTML = streamerName;
    }
    document.getElementById("info").innerHTML = "Good news, <sn>" + streamerName + "</sn>! Seems like someone just raided your channel currently, which made your statistics extremely rise up like a mountain! All i have to say is congratulations! Keep it up!"
}
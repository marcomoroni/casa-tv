window.onload = () =>
{
    setAndUpdateTime();
    setAndUpdateDate();

    inactivityTime();
}

function setAndUpdateTime()
{
    var today = new Date();
    //var time = pad(today.getHours(), 2) + ":" + pad(today.getMinutes(), 2) /*+ ":" + pad(today.getSeconds(), 2)*/;
    var time = today.toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});
    var t = document.getElementsByClassName("time-text");
    for (i = 0; i < t.length; i++)
    {
        t[i].innerHTML = time;
    }
    
    setTimeout(setAndUpdateTime, 500);
}

function setAndUpdateDate()
{
    var today = new Date();
    var date = today.toLocaleDateString('en-GB', { weekday: "long", month: "long", day: "numeric"});
    var d = document.getElementsByClassName("date-text");
    for (i = 0; i < d.length; i++)
    {
        d[i].innerHTML = date;
    }
    
    setTimeout(setAndUpdateDate, 500);
}

function pad(number, length)
{
    var str = '' + number;
    while (str.length < length)
    {
        str = '0' + str;
    }

    return str;
}

// https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript-elegantly
var inactivityTime = () =>
{
    var t;
    window.onload = resetTimer;
    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer; // touchscreen presses
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;     // touchpad clicks
    document.onkeypress = resetTimer;
    document.addEventListener('scroll', resetTimer, true); // improved; see comments

    function onTimeout()
    {
        //alert("You are now logged out.")
    }

    function resetTimer()
    {   
        clearTimeout(t);
        t = setTimeout(onTimeout, 3000)
        // 1000 milisec = 1 sec
    }
};
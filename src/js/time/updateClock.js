// updateClock.js

function updateClock(whichElement)
{
    if (ge(whichElement))
    {
        ge(whichElement).innerHTML = new Date().toLocaleTimeString('en-US');
    }
}

let timeUpdate = setInterval(function()
{
    updateClock('clock');
}, 1000);

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


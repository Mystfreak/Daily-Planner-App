// store current time into a variable using moment
let currentTime = moment().format("dddd, Do MMMM YYYY");
let currentDay = $("#currentDay")

// variable from HTML
let timeBlockCont = $("#timeBlocks");

//Arrays to store events
let blockArr = []
let eventArr = []

// for loop for Time Blocks - Counter starts at 8: meaning 8am
for(let i = 8; i <= 17; i++){

    //create row to create calender
    let hourRow = $('<div>');
    hourRow.addClass('row');
    timeBlockCont.append(hourBar);
    
}

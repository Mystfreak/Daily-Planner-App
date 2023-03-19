// store current time into a variable using moment
let currentTime = moment().format("dddd, Do MMMM YYYY");
let currentDay = $("#currentDay")

// variable from HTML
let timeBlockCont = $("#timeBlocks");

//display current time
currentDay.html(currentTime);

//Arrays to store events
let blockArr = []
let eventArr = []

function createSchedule() {

    // for loop for Time Blocks - Counter starts at 8: meaning 8am
    for(let i = 8; i <= 17; i++){

        //create row to create calender
        let hourRow = $('<div>');
        hourRow.addClass('row');
        timeBlockCont.append(hourRow);

        // hour labels for the row
        let hourLabel = $('<div>');
        hourLabel.text([i] + ':00');
        hourLabel.addClass('col-1 hour');
        hourRow.append(hourLabel);
        



    }
}
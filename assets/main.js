const currentDay = $("#currentDay");
const schedule = $(".container");

// Display current day and time
  let today = moment().format("dddd, MMMM Do HH:mm A ");
  currentDay.text(today);




// variable that holds starting and ending time
let hours = { start: 9, end: 17 };

// Loop to display the hour elements
for (let i = hours.start; i <= hours.end; i++) {
  let textAreaBlock = $("<div>").attr("class", "text-block");
  schedule.append(textAreaBlock);

  //Button
  let saveBtn = $("<button arias-label='save-button'/>");
  saveBtn.addClass("saveBtn");
  saveBtn.attr("data-hour", i);
  saveBtn.html("<i class='fas  fa-save'></i>");
  //Even listener for saveStorage
  saveBtn.on("click", saveStorage);

  //Hour <span> element
  let label = $("<span>");

  //Text area element for accessability
  let textArea = $("<textarea aria-label='event'>");
  textArea.attr("id", i);
  textArea.val(localStorage.getItem(i));

  let hourDisplay = moment(`2023-01-01T${i < 10 ? "0" + i : i}:00:00`).format(
    "hA"
  );
  textAreaBlock.append(label).html(`<span class="hour">${hourDisplay}</span>`);
  textAreaBlock.append(textArea);
  textAreaBlock.append(saveBtn);

  let timeCurrent = moment().format("H");

  // Conditional for color background display
  if (i < timeCurrent) {
    textArea.addClass("past");
  } else if (i <= timeCurrent) {
    textArea.addClass("present");
  } else {
    textArea.addClass("future");
  }
}
// saving to local storage
function saveStorage(e) {
  let button = $(e.currentTarget);
  let hour = button.attr("data-hour");
  let textarea = $(`#${hour}`);

  if (textarea.val().trim() === "") {
    localStorage.removeItem(hour);
  } else {
    localStorage.setItem(hour, textarea.val());
    displaySavedMessage();
  }
}
// display saved message
function displaySavedMessage() {
  const displayMessage = $("#saved-message");
  displayMessage.toggleClass("hideMessage");
  setTimeout(() => {
    displayMessage.toggleClass("hideMessage");
  }, 2000);
}

// clear schedule by clicking on button
$('#clearBtn').click(function(event){

    localStorage.clear();
    location.reload()
    return;
})
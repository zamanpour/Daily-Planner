var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));
let taskArray = JSON.parse(localStorage.getItem('saveTasks'));
if (taskArray === null) { taskArray = [] }
for (let i = 9; i < 18; i++) {
    const newDiv = $('<div>');
    newDiv.addClass("row");
    var hour = moment().hour();
    if (i < hour) {
        newDiv.addClass("past");
    } else if (i == hour) {
        newDiv.addClass("present");
    } else {
        newDiv.addClass("future");
    }

    const leftDiv = $('<div>').text(i);
    leftDiv.addClass('time col-1');
    newDiv.append(leftDiv);

    const inputTextarea = $('<textarea>').attr('data-id', i);
    inputTextarea.val(taskArray[i]);
    inputTextarea.addClass('textarea');
    const centerDiv = $('<div>').append(inputTextarea);
    centerDiv.addClass('btnContainer col-10');
    newDiv.append(centerDiv);

    const saveBtn = $('<button>').text('Save 💾');
    saveBtn.addClass('saveBtn');
    saveBtn.attr('data-hour', i);

    const rightDiv = $('<div>').append(saveBtn);
    rightDiv.addClass('btnContainer col-1');
    newDiv.append(rightDiv);

    $('.container').append(newDiv);
}

// save button click
$("button").click(function (event) {
    var clickedHour = event.target.getAttribute("data-hour");
    var text = $('textarea[data-id=' + clickedHour + ']').val();

    taskArray[clickedHour] = text;

    localStorage.setItem("saveTasks", JSON.stringify(taskArray));

    alert("Plan for time " + clickedHour + " is saved successfull!");
})

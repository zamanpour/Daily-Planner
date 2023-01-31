$('#currentDay').text(moment().format('MMMM Do YYYY'));
for (let i = 9; i < 18; i++) {
    const newDiv = $('<div>').text(i);
    newDiv.addClass("row");
    newDiv.addClass("past");
    const inputTextarea = $('<textarea>');
    inputTextarea.addClass('textarea');
    newDiv.append(inputTextarea);
    const saveBtn = $('<button>').text('Save');
    saveBtn.addClass('saveBtn');
    saveBtn.onclick = function () {
        localStorage.setItem();
    };
    newDiv.append(saveBtn);
    $('.container').append(newDiv);
}

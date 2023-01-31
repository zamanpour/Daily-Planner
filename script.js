$('#currentDay').text(moment().format('MMMM Do YYYY'));
for (let i = 9; i < 18; i++) {
    const newDiv = $('<div>').text(i);
    newDiv.addClass("row");
    newDiv.addClass("past");
    const inputTextarea = $('<textarea>');
    inputTextarea.addClass('textarea');
    newDiv.append(inputTextarea);
    $('.container').append(newDiv);
}

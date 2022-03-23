var now = moment().format('MMMM Do YYYY');
var dateHere = document.getElementById('currentDay');
dateHere.textContent = now;
var timeBlocks = document.getElementsByClassName('time-block');
var skullSave = $("saveBtn");

var todos = {};

/* Function color codes time blocks for past, present, and future */ 
function pastPresentFuture() {
  var presentHour = moment().hours();
  
  $(".time-block").each(function(index) {
    var currentHour = index;
    // present time block should be black
    if (currentHour === presentHour) {
      timeBlocks[index].setAttribute("style", "background-color: #030100;");
    // past time blocks should be greyed out
    } else if (currentHour < presentHour) {
      timeBlocks[index].setAttribute("style", "background-color:#929292;");
    // future time blocks should be brown 
    } else {
      timeBlocks[index].setAttribute("style", "background-color:#52322c");
    }
  });
} 

/* Function allows user to save their todos after closing/refreshing the page */
function ghostTodos(event) {
  var saveClicked = $(event.currentTarget).prev().val(); // the todo text
  var key = $(event.currentTarget).prev().data("set"); // the index of the time block
  localStorage.setItem(key, saveClicked);
  var savedItems = localStorage.getItem(key);

  todos[key] = savedItems;
  localStorage.setItem("todos", JSON.stringify(todos));
}

function summonToDos() {
  var todoList = JSON.parse(localStorage.getItem("todos"));

  for (var key in todoList) {
    var currentItem = todoList[key];
    document.querySelector(`textarea[data-set="${key}"]`).textContent = currentItem;
  } 
}

/* jQuery event listener - listens for the save buttons being clicked */
$('.btn').each(function() {
  $(this).click(function(event) {
    ghostTodos(event)
  })
})

pastPresentFuture();
summonToDos();

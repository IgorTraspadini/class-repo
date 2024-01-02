const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function addToList(e) {
  e.preventDefault();
  let ElemLi = $("<li>").text($('#shopping-input').val());
  $('#shopping-input').val('');
  shoppingListEl.append(ElemLi);
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", addToList);
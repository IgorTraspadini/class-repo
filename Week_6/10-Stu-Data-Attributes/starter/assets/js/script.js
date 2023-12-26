/* It's done when I click on a card and the hidden number is revealed.
   It's done when the number is visible if the card is clicked.
 */

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  const element = e.target;
  if (element.matches('.box')){
    const state = element.dataset.state;
    console.log(state);
    if (state === 'hidden'){
      element.textContent = element.dataset.number;
      element.dataset.state = 'showing';
    }
    else {
      element.textContent = '';
      element.dataset.state = 'hidden';      
    }
  }
  // TODO: Complete function
});

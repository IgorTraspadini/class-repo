const ElemUl = document.querySelectorAll('#songs > li')

for (const key of ElemUl) {
  //key.className = 'red';
  key.classList.add('red');
  //key.classList.add('green');
}

const actionButton = document.getElementById('actionButton');
const messageEl = document.getElementById('message');
let clicked = false;

actionButton.addEventListener('click', () => {
  clicked = !clicked;
  if (clicked) {
    messageEl.textContent = 'Thanks for clicking! JavaScript is working.';
    actionButton.textContent = 'Click Again';
  } else {
    messageEl.textContent = 'Nice to see you again! Keep exploring the page.';
    actionButton.textContent = 'Click Me';
  }
});

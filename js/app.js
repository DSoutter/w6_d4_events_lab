document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);


})


const handleFormSubmit = function(event) {
  event.preventDefault();

  const resultParagraph = document.querySelector('#reading-list')
  resultParagraph.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`
}
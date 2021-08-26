document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const resetForm = document.querySelector('#new-item-form');
  resetForm.addEventListener('submit', handleFormReset);
  
  const deleteReadingList = document.querySelector('#delete');
  deleteReadingList.addEventListener('click', handleDeleteAll)
})


const handleFormSubmit = function(event) {
  event.preventDefault();

  // Previously used but no longer needed: const resultParagraph = document.querySelector('#reading-list')
  const newResultParagraph = document.createElement('li');
  newResultParagraph.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
 
  const list = document.querySelector('ul');
  list.appendChild(newResultParagraph);
}

const handleFormReset = function(event) {
  const resetForm = document.querySelector('#new-item-form');
  resetForm.reset();
}

const handleDeleteAll = function() {
  let deleteList = document.querySelector('#reading-list');
  deleteList.textContent = '';

}


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  // const list = document.querySelector('ul')
  // list.appendChild(handleFormSubmit);

  const resetForm = document.querySelector('#new-item-form')
  resetForm.addEventListener('submit', handleFormReset)
  
})


const handleFormSubmit = function(event) {
  event.preventDefault();

  const resultParagraph = document.querySelector('#reading-list')
  const newResultParagraph = document.createElement('li')
  newResultParagraph.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`
 
  // newResultParagraph.classList.add()
  const list = document.querySelector('ul')
  list.appendChild(newResultParagraph)
}

const handleFormReset = function(event) {
  // event.preventDefault();

  const resetForm = document.querySelector('#new-item-form')
  resetForm.reset()

  // resetForm.textContent.reset(event)
}

    // adding a new element to the list

    // const newListItem = document.createElement('li');
    // newListItem.textContent = "Purple";
    // newListItem.classList.add('purple');

    // const list = document.querySelector('ul');
    // list.appendChild(newListItem);

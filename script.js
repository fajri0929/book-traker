document.getElementById('book-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value || 'Anonim';
  
  if(title) {
    addBookToList(title, author);
    // Reset form
    this.reset();
  }
});

function addBookToList(title, author) {
  const list = document.getElementById('book-list');
  const li = document.createElement('li');
  li.innerHTML = `<strong>${title}</strong> - ${author}`;
  list.appendChild(li);
}
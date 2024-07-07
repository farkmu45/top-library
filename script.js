const library = [
  new Book('Test1', 'Fark', 100, false),
  new Book('Test2', 'Einstein', 100, false),
  new Book('How to be', 'Andy', 20, false),
]

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      !isRead ? 'not read yet' : ''
    }`
  }
}

function addBookToLibrary(book) {
  library.push(book)
}

function listBooks() {
  const container = document.getElementsByClassName('container')[0]
  container.innerHTML = null

  library.forEach((book, index) => {
    container.innerHTML += `<div data-id="${index}"><h1>${book.title}</h2><h5>${book.author}</h5><p>${book.pages}</p></div>`
  })
}

function deleteBook(id) {
  library.splice(id, 1)
}

function readBook(id) {
  library = library.map((book, index) => {
    if (index === id) {
      book.isRead = true
      return
    }
  })
}

const newBookBtn = document.getElementById('newBookBtn')
const closeBtn = document.getElementById('closeBtn')
const submitBtn = document.getElementById('submitBtn')
const dialog = document.getElementById('dialog')

newBookBtn.addEventListener('click', () => {
  dialog.showModal()
})

closeBtn.addEventListener('click', () => {
  dialog.close()
})

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const inputs = document.getElementsByTagName('input')
  const title = inputs[0].value
  const author = inputs[1].value
  const pages = inputs[2].value
  const isRead = inputs[3].value
  addBookToLibrary(new Book(title, author, pages, isRead))
  listBooks()
  dialog.close()
})

listBooks()

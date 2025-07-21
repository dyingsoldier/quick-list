const item = document.getElementById("inputItem")
const button = document.getElementById("button")
const form = document.querySelector("form")

const ul = document.getElementById("ul")

const alert = document.querySelector(".alert")
alert.style.display = "none"

const addItem = document.getElementById("alert-zap")
addItem.style.display = "none"

const h1 = document.querySelector("div div h1")

form.addEventListener("submit", function addItem(e) {
  e.preventDefault()
  try {
    if (item.value.trim().length === 0) {
      setTimeout(() => {
        h1.textContent = "Digita algo bicho"
      }, 100)
      setTimeout(() => {
        h1.textContent = "Compras da semana"
      }, 1000)
      return
    }

    const itemList = document.createElement("li")
    itemList.classList.add("liStyle")

    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")

    const nameItem = document.createElement("span")
    nameItem.textContent = item.value

    const buttonDelete = document.createElement("button")

    const imageDelete = document.createElement("img")
    imageDelete.classList.add("btn-delete")
    imageDelete.setAttribute("src", "assets/icons/trash.svg")

    ul.append(itemList)
    itemList.append(checkbox, nameItem, buttonDelete)
    buttonDelete.append(imageDelete)

    cleanForm()
  } catch (error) {
    console.log(error)
  }
})

function cleanForm() {
  item.value = ""

  item.focus()
}

ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-delete")) {
    const item = e.target.closest(".liStyle")
    
    if (window.confirm(`Você gostaria de remover "${item.textContent}" da lista ?`)) {
      item.remove()
      
      alert.style.display = "flex"
      
      setTimeout(() => {
        alert.style.display = "none"
      }, 2000)
      
      alert.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-delete")) {
          const item = e.target.closest(".alert")
          item.style.display = "none"
        }
      })
    }
  }
})

button.addEventListener("click", function(){
  addItem.style.display = "flex"

  setTimeout(() => {
    addItem.style.display = "none" 
    }, 1500);
  })
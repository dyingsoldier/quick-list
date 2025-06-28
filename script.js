const inputItem = document.getElementById("inputItem")
const button = document.getElementById("button")
const ul = document.getElementById("ul")

const inputCheckBox = document.getElementById("checkbox")
const buttonDelete = document.getElementsByClassName("btn-delete")

button.addEventListener("click", function addItem(e) {
  e.preventDefault()
  const li = document.createElement("li")
  li.classList.add("liStyle")

  const imageDelete = document.createElement("img")
  imageDelete.src = "assets/icons/trash.svg"

  const btnDelete = document.createElement("button")
  btnDelete.classList.add("btn-delete")
  btnDelete.appendChild(imageDelete)

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  const span = document.createElement("span")
  span.textContent = inputItem.value

  ul.appendChild(li)
  li.append(checkbox, span, btnDelete)

  clearForm()
})

function clearForm() {
  inputItem.value = ""
}

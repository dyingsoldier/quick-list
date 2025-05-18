const inputItem = document.getElementById("inputItem")
const button = document.getElementById("button")
const ul = document.getElementById("ul")

const inputCheckBox = document.getElementById("checkbox")
const buttonDelete = document.getElementsByClassName("btn-delete")

button.addEventListener("click", function addItem(e) {
  e.preventDefault()
  let li = document.createElement("li")

  let imageDelete = document.createElement("img")
  imageDelete.src = "assets/icons/trash.svg"

  let btnDelete = document.createElement("button")
  btnDelete.classList.add("btn-delete")
  btnDelete.appendChild(imageDelete)

  let checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  let span = document.createElement("span")
  span.textContent = inputItem.value

  li.classList.add("liStyle")
  li.prepend(checkbox)
  li.append(span)
  li.append(btnDelete)

  ul.appendChild(li)

  inputItem.value = ""
})

btnDelete.addEventListener("click", () => {})

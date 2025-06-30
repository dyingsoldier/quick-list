const item = document.getElementById("inputItem")
const button = document.getElementById("button")

const ul = document.getElementById("ul")

const deleted = document.getElementById("deletedContent")

button.addEventListener("click", function addItem(e) {
  e.preventDefault()
  try {
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
    item.focus()
  } catch (error) {
    console.log(error)
  }
})

function cleanForm() {
  item.value = ""
}

ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-delete")) {
    console.log("teste")

    const item = e.target.closest(".liStyle")
    item.remove()

    deletedContent.style.display = "block"
    setTimeout(() => {
      deletedContent.style.display = "none"
    }, 3000)
  }
})

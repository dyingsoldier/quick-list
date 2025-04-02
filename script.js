console.log("hello world")

const form = document.getElementsByClassName("item")[0]
const input = document.getElementById("item")
const button = document.getElementById("button")

function addList (){
  console.log(input.value);
  input.value = ""
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
})

button.addEventListener("click", addList)
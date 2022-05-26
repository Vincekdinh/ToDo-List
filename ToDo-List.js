fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => showTodo(json));

function showTodo(data) {
  data.forEach((item) => {
    // selectors
    let container = document.querySelector("#container");
    let div = document.createElement("div");
    let list = document.createElement("h3");
    let checkbox = document.createElement("input");
    let completed = document.createElement("span");

    //add tags
    container.append(div);
    div.appendChild(list);
    div.appendChild(checkbox);
    div.appendChild(completed);

    //add content
    list.innerText = item.id + ". " + item.title;
    completed.innerText = "Completed";
    checkbox.setAttribute("type", "checkbox");
  });
}

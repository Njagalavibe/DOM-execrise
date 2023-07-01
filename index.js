let container = document.querySelector("#container");
let content  = document.createElement("div");
content.classList.add("content");
content.textContent = "Learning the Dom";
container.appendChild(content);



let paraGraph = document.createElement("p");
paraGraph.classList.add("text");
paraGraph.textContent = "Hey I’m red!"
paraGraph.style.color = "red"
container.appendChild(paraGraph)

let heading = document.createElement("h3");
heading.classList.add("heading");
heading.textContent = "I’m a blue h3!";
heading.style.color = "blue";
container.appendChild(heading);


let group1 = document.createElement("div");
group1.setAttribute("style","border:2px solid black; background:pink")
container.appendChild(group1);

let heading2 = document.createElement("h1");
heading2.classList.add("heading-2");
heading2.textContent = "I’m in a div"
group1.appendChild(heading2)


let paraGraph2 = document.createElement("p");
paraGraph2.classList.add("text-2");
paraGraph2.textContent = "ME TOO!"
group1.appendChild(paraGraph2)

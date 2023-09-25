let showinput = document.getElementById("btn");
let input = document.getElementById("inputtext");

const show = () => {
    showinput.setAttribute("hidden", "true")
    input.removeAttribute("hidden")
}

let inputvalue = document.getElementById("taskinput");
let list = document.getElementById("listul");

const addtask = () => {
    if (inputvalue.value === "") {
        alert("You should write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputvalue.value + `<button id="btnfinish" class="button btn2" onclick="finish(document.getElementById('btnfinish').parentElement)">Pending...</button>` +
        `<button id="btndel" class="button btn2" onclick="del(document.getElementById('btndel').parentElement)">Delete</button>`;
        list.appendChild(li);
    }
    inputvalue.value = "";
}

let btn1 = document.getElementById("btnfinish");
let btn2 = document.getElementById("btndel");

const finish = (a) =>{
    a.style.textDecoration = "line-through black 3px";
    a.firstElementChild.innerHTML = "Finished";
    a.firstElementChild.setAttribute("disabled","ture");
    a.firstElementChild.classList.remove("btn1")
}
const del = (b) =>{
    b.remove();
}


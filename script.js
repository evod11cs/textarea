var tabs = []
var number = document.getElementById('number0');
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');

var numbers = [number,number1,number2]
let a = document.createElement("span")


// view
let view = document.getElementById('view')
let children = view.children
let tabs_length = children.length
var active = children[0]

function disable(e) {
    for (var i = 0; i < tabs_length; i++) {
		p = children[i]
		p.style.display = "none";
		numbers[i].style.display = "none";
		tabs[i].style.opacity = 0.5
		tabs[i].style.borderBottomColor = "rgb(100,200,40)";
    }
    e.style.opacity = 1;
    e.style.borderBottomColor = "rgb(0,0,160)";
    let a = e.id.substr(3, e.id.length - 2)
    var btn = document.getElementById(`view${a}`)
    btn.style.display = "flex";
    numbers[a].style.display = "block";
    // numberViewer()
}


//tab
let tab = document.getElementById('tabs')
var buttons = ""
for (var i = 0; i < tabs_length; i++) {
	let x
	x = document.createElement("button")
	x.innerHTML = `tab${i}`
	x.id = `tab${i}`
	x.class = `tab${i}`

	x.onclick = (e) =>{
		disable(e.target)

	}

	tabs[i] = x
	tab.appendChild(tabs[i])

}
tabs[0].innerHTML = "index.html"
tabs[1].innerHTML = "style.css"
tabs[2].innerHTML = "script.js"

tabs[0].class = "active"
disable(tabs[0])



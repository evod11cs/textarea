

function q(s) {
	return document.querySelectorAll(s)
}


y = q(".textarea")


let frame = q("iframe")[0]

function numberViewer(x) {
	let values = x.children.length
	if (values == 0){
		values = 1
	}
	let i = x.id.substr(1, 1)
	numbers[i].innerHTML = ""
	for (var j = 1; j < values+1; j++) {
		let a = document.createElement("span")
		a.innerHTML = j
		numbers[i].appendChild(a)
	}
}

for (var i = 0; i < 3; i++) {
	x = y[i]

numberViewer(x)
x.oninput = (e) =>{
	numberViewer(e.target)
	run()
}


x.onpaste = (e) =>{
}
x.onkeydown = (e) =>{
	if (e.keyCode == 9){
		e.preventDefault()
	}
}
x.onscroll = (e) =>{
	console.log("scrolled");
	let tag = e.target
	let scrolled = tag.scrollTop
	let i = e.target.id.substr(1, 1)
	number.scrollTop = scrolled
}
}


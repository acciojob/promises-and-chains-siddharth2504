//your JS code here. If required.
let form = document.querySelector("#form")
let name = document.querySelector("#name")
let age = document.querySelector("#age")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	if(name.value === "" || age.value === ""){
		alert("Please enter valid details.")
		return
	}else{
		let prom = new Promise((res, rej) => {
	        if(Number(age.value) > 18){
	        	setTimeout(() => {
	        		res("Welcome, You can vote.")
	        	}, 4000)
	        }else{
	        	setTimeout(() => {
	        		rej("Oh sorry, You aren't old enough.")
	        	}, 4000)
	        }
        })    
		prom
		.then(data => alert(data))
		.catch(data => alert(data))
	}
})




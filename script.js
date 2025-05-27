//your JS code here. If required.
let form = document.querySelector("#form")
let name = document.querySelector("#name")
let age = document.querySelector("#age")



form.addEventListener("submit",handleSubmit)

function handleSubmit(e){
	e.preventDefault();

		let nameV = name.value.trim();
		let ageV =parseInt(age.value.trim());
	if(nameV==""||ageV==""){
aler("Please enter valid details")
		return
	}

	handlePromise(nameV,ageV)


	

	
}


function handlePromise(name,age){

	let p = new Promise((resolve,reject)=>{
			if(age>18){
				setTimeout(()=>{
					resolve("Welcome, You can vote.")
				},4000)
			}
		else{
			setTimeout(()=>{
				reject("Oh sorry . You aren't old enough")
			},4000)
		}
	})

	p.then((res)=>{
		alert(res)
	})
	
}




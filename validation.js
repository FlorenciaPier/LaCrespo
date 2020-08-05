const form == document.querySelector("#info")
const emailHelp == document.querySelector("#emailHelp")
const consultaHelp == document.querySelector("#consultaHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (email.value === "" || consulta.value === "") {
		if (email.value === "") {
			emailHelp.innerText = "Por favor, completá este dato"
		}
		if (consulta.value === "") {
			consultaHelp.innerText = "Por favor, completá este dato"
		}

	} else {
		console.log("¡Te falta completar algún campo!")		
		// form.submit ();
	}
})

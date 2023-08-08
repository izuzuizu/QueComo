let index = 0;
let data 
const imagen = []
let primeraImagen = ""
const boton = document.getElementById('subir');
const receta = [];
let num = 0;
boton.addEventListener('click', async (e) => {
	e.preventDefault();
	const cantidad = document.getElementById('cantidad').value;
console.log(cantidad)

let ingredientes = "";
do {
	let ing = document.getElementById(`ing${index}`).value +"/";
	ingredientes += ing 

	index+=1
} while (index<cantidad); 
ingredientes = await traducir(ingredientes);
console.log(ingredientes)
const url = `https://edamam-food-and-grocery-database.p.rapidapi.com/auto-complete?q=${ingredientes}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0da5fe62c2msh1ee3f8c081ec628p1b74d6jsnd14d82b9f8e0',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const recetas = await response.json();
	console.log(recetas);
	console.log(encodeURIComponent(recetas[0]))
	index = 0
	async function buscarReceta() {
		try {
			do {
			const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${encodeURIComponent(recetas[index])}`;
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '6c4b6fb945mshda38336cdc12003p1049b1jsn94562655b31d',
					'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
				}
			};
			
			try {
				const response = await fetch(url, options);
				imagen[index] = await response.json();
				console.log(imagen);
					const codigo = document.getElementById('recetas');
					const op = document.createElement('option');
					let traduccion = await traducir2(recetas[index])
					codigo.innerHTML += `
					
					<div class="cards" >
									<div class=nombreComida id="card${index}">
										<label>${traduccion}</label>    
									</div>    
									<div class="imagen">
										<img src="${imagen[index].value[0].contentUrl}" alt="" srcset="">
									</div>
									<div class="comoHacer">
										<a href="https://www.google.com/search?client=opera-gx&q=${traduccion}&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blank"><label>Cómo hacer</label></a>
									</div>     
					</div>           
									`;
			} catch (error) {
				console.error(error);
			}
					index+=1
			} while (index<Object.keys(recetas).length); 
				// Verificar si hay resultados de búsqueda
			if (imagen.value && imagen.value.length > 0) {
				// Obtener el enlace de la primera imagen
				console.log('Enlace de la primera imagen:', primeraImagen);
			} else {
			console.log('No se encontraron resultados de búsqueda');
		  }
 		}catch (error) {
			console.log("error al buscar recetas")
			console.error(error);
		}
	}
	  buscarReceta()

	}catch (error) {
	   console.error(error);
   }
});
// const recetas = document.getElementById('recetas').value;
const boton2 = document.getElementById('eleccion');

boton2.addEventListener('click', async e => {
try {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0da5fe62c2msh1ee3f8c081ec628p1b74d6jsnd14d82b9f8e0',
			'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
		}};
	const url2 = `https://edamam-recipe-search.p.rapidapi.com/search?q=${seleccion}`;
	const response = await fetch(url2, options);
	console.log(url2)
	const result = await response.json();
const receta = document.getElementById(`receta`)

index=0;
let text =""
do {

text = text + '\r\n'+`
- ${result.hits[0].recipe.ingredients[index].text}
`;
index+=1
} while (index<Object.keys(result.hits[0].recipe.ingredients).length); 
let codigo = document.getElementById('receta');
text = await traducir2(text)
codigo.value += text;
console.log(result.hits[0].recipe.ingredients[0]);

} catch (error) {
	console.error(error);
}
});




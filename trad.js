const traducir = async (query) => {
const url = `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=es%7Cen&q=${query}&mt=1&onlyprivate=0&de=a%40b.c`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0da5fe62c2msh1ee3f8c081ec628p1b74d6jsnd14d82b9f8e0',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    let traduccion = result.responseData.translatedText
    console.log(traduccion)
	console.log(result);
    return(traduccion)
} catch (error) {
	console.error(error);
}
}
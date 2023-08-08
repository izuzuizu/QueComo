    
    const foodReco = async () => {

            const data = new FormData();
            const fileInput = document.getElementById('imgs');
            const file = fileInput.files[0];
            data.append('file', file);

            const url = 'https://regim3.p.rapidapi.com/1.1/?opts=segmentation%2Cfacerecognition%2Cresimg%2Cgeodata%2Ccolors';
       
            const options = {
                method: 'POST',
                headers: {
                    'X-RapidAPI-Key': '0da5fe62c2msh1ee3f8c081ec628p1b74d6jsnd14d82b9f8e0',
                    'X-RapidAPI-Host': 'regim3.p.rapidapi.com'
                },
                body: data
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                const objetos=[];
                for (let index = 0; index <= Object.keys(result.data.objects).length; index++) {
                objetos[index] += result.data.objects[index]
                }
                console.log(objetos);
            } catch (error) {
                console.error(error);
            }
            };

    
      
    

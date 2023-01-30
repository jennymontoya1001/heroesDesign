const col = document.querySelector('.col');
const description = document.querySelector('.description');
description.style.display = 'none';

const getData = async() => {
    const endpoint = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json';
    const resp = await fetch(endpoint);
    const {results} = await resp.json();
    return results;
}

const showData = async() =>{
    const datos = await getData();
    datos.forEach(object => {
        const {id,name,image} = object;
        col.innerHTML +=  `
          <img id="${id}" src="${image}"/>
        `
    });
    console.log(datos)
}


document.addEventListener('DOMContentLoaded', showData);

col.addEventListener('click', async(e) => {
     const IdClicked = e.target.id;
     const datos = await getData();
     const search = datos.find(obj => obj.id === Number(IdClicked));
     const {id,name,image,superhero,publisher} = search;
     description.innerHTML = `
       <div class="container">
       <h2>${name}</h2>
       <h3>${superhero}</h3>
       <h4>${publisher}</h4>
       </div>
     `
     description.style.display = 'block';
     console.log(search);
     
})
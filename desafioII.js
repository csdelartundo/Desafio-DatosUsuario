//API https://randomuser.me/api/?results=5000

const datosRandom = (async () => {
    const baseUrl = 'https://randomuser.me/api/?results=10';
    try {
        const results = await fetch(baseUrl);
        const data = await results.json();
        const users = data.results;

        const dataID = document.getElementById('user-data');
        dataID.innerHTML = '';

        users.forEach(user => {
            const lista = document.createElement('p');
            lista.innerHTML = `
                <img src="${user.picture.large}"> <br>
                ${user.name.first} ${user.name.last} <br>
                ${user.email} <br>
                ${user.phone} <br>
                `;
            dataID.appendChild(lista);
        });
    } catch (error) {
        console.error('Error al obtener los usuarios', error);
    }
})();



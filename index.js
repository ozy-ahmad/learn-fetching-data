// testing feching github api

// const apiURL = 'https://api.github.com/users/ozy-ahmad/followers'
// fetch(apiURL)
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);

// })

// using async to get data

const showBreeds = item => {
    const {breed, country, origin, coat, pattern} = item;
    const itemHTML = `
    <tr>
    <td>${breed}</td>
    <td>${country}</td>
    <td>${origin}</td>
    <td>${coat}</td>
    <td>${pattern}</td>
    </tr>`
    document.getElementById('breeds').innerHTML += itemHTML
}
(async () => {
    async function getAll() {

        let response = await fetch('https://catfact.ninja/breeds');
        console.log(response);

        let data = await response.json()
        console.log(data);

        return data;
        
    }
    let data = await getAll()
    console.log(data.data);
    const dataList = data.data
    dataList.forEach(item => {
        showBreeds(item);
    })
})();


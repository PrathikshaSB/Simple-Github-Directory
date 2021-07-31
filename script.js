

fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => showData(data));

function showData(userData){

    let i=1;
    userData.forEach((data) => {
        document.getElementById('table-body').innerHTML += 
    `<tr>
            <td>${i}</td>
            <td>${data.login}</td>
            <td><img src="${data.avatar_url}" alt="${data.login}" width="50"></td>
        </tr>`;
        i++;
    })
}
function loadPosts(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => postDisplay(data))
}

function postDisplay(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
       li.innerText = user.name;
       ul.appendChild(li)
    }
}


function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    // console.log(data);
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user);
        const li = document.createElement('li')
        li.innerText = `
        Name: ${user.name},
        Email: ${user.email},
        Phone: ${user.phone},
        User Name; ${user.username}
        
        `;
        ul.appendChild(li)

    }
    


}



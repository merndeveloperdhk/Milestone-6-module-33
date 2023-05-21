fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}
loadData();


const url = 'https://jsonplaceholder.typicode.com/comments';
function loadData2() {
    
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}
loadData2();
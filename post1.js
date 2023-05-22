function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    console.log(posts);
    const postContainer = document.getElementById('posts-list');
    for(const post of posts){
        console.log(post.id);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>Id = ${post.id}</h4>,
        <h3>Title = ${post.title}</h3>
        
        `;
        postContainer.appendChild(div)


    }
}
// loadPosts()
console.log('Script chargé!');

const images = ["./images/Paysage.jpeg", "images/canyon.jpeg", "images/cascade.jpeg", "images/Eau.jpeg", "images/rose.jpeg","images/Temple.jpeg","images/peniche.jpeg", "images/Violet.jpeg" ];

fetch('https://jsonplaceholder.typicode.com/posts') 
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');
    const searchInput = document.getElementById('search');

    function filterPosts(searchText) {
      container.innerHTML = ''; 

      posts.forEach((post, i) => { 
        if (i < 8) {
    
        if (post.title.includes(searchText) || post.body.includes(searchText)) {
          const div = document.createElement('div');
          div.classList.add('post-container');
          div.innerHTML = `<h2>${post.title}</h2><img src=${images[i]} ><p>${post.body}</p>`;
          container.appendChild(div);
        }
        }
      });
    }


    searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.trim(); 
      filterPosts(searchText); 
    });

   
    filterPosts('');
});




async function getUsers(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();

    const posts=data.map(function(post){

           return `
           <div class="user">
             <h2>${post.name}</h2>
             <p><span>Username:</span> ${post.username}</p>
             <p><span>Email:</span> ${post.email}</p>
             <p><span>Phone:</span> ${post.phone}</p>
             <p><span>Address:</span> ${post.address.city}</p>
             <p><span>Website:</span> ${post.website}</p>
             <p><span>Company:</span>${post.company.name}</p>
           </div>
           `
    }).join('');

    document.querySelector(".users .row").innerHTML=posts;

}
getUsers();
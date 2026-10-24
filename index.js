// Write your code here

function displayPosts(posts) {

  const postList = document.getElementById("post-list");

  if (postList) {
    postList.innerHTML = "";
  }


  posts.forEach((post) => {

    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    
    li.appendChild(h1);
    li.appendChild(p);


    if (postList) {
      postList.appendChild(li);
    }
  });
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();

    // Call displayPosts with the fetched data
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  fetchPosts();
});


if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    displayPosts,
    fetchPosts,
  };
}
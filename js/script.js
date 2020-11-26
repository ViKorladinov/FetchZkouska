let posts = []
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((elements) => elements.forEach((element) => posts.push(element)));

console.log(posts)

let abc = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((arrayOfObjects) =>
    arrayOfObjects.forEach((element) => {
      abc.push(element);
    })
  )
  .catch((error) => console.log(error));

console.log({posts});

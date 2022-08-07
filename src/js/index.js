//first example

const getData = (url) =>
    fetch(url)
        .then(response => response.json())
        .then(data => data.filter((item, idx) => idx < 10));


getData("https://jsonplaceholder.typicode.com/posts")
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

// second example

// async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.filter((item, idx) => idx < 10);
// }

// getData("https://jsonplaceholder.typicode.com/posts")
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));









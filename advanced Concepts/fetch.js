fetch('https://jsonplaceholder.typeicode.com/posts')
.then(res => res.json())
.then(data => console.log(data));
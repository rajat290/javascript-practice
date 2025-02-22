fetch ('https://api.example.com/data')
.then (response => response.json())
.catch(error => console.error('error fetching data:', error));
// Send { name: "Rajat" } to API using fetch POST

const postData = async (URL, data) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};
// Example usage:
postData('https://jsonplaceholder.typicode.com/posts', { name: 'Rajat' });
// Explanation:
// The `postData` function uses async/await to send a POST request to the specified URL with the provided data.
// It sets the request method to 'POST', specifies the content type as 'application/json', and sends the data as a JSON string in the request body.
// The response is then parsed as JSON and logged to the console.
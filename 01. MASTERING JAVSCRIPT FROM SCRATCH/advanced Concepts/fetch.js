fetch('https://api.github.com/users/rajat290')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        
            console.log(data);
        })

    .catch ((error) => console.log(error))
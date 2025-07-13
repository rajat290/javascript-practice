async function fetchdata(url){
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('network response was not ok' + response.statusText);
            const data = await response.json();
            console.log (data);
            catch(console.error();
            )
        }
    }
}
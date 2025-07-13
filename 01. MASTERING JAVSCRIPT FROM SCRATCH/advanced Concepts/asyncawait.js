async function fetchdata(url){
    try{
        const response = await fetch(url);
       try {
         if (!response.ok){
             throw new Error('network response was not ok' + response.statusText);
             const data = await response.json();
             console.log (data);
           
            }
       } catch (error) {
           console.error('There has been a problem with your fetch operation:', error);
       }       
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


async function getData(url){
    var respance = await fetch(url);
    console.log(respance.json);

} 






document.addEventListener('DOMContentLoaded',()=>{

const inputController=document.getElementById('inputController');
const buttonController=document.getElementById('buttonController');
const resultController=document.getElementById('resultController');

buttonController.addEventListener('click',naime)
inputController.addEventListener('keyup',(e)=>{
    if(e.key==="Enter"){
        naime()
    }
})

function naime(){
const query=inputController.value.trim();

if(!query){
    resultController.innerHTML='sorry'
    return
}

fetch(`/api/search?q=${encodeURIComponent(query)}`)

.then(response=>response.json(''))
.then(data=>displayr(data))
.catch(Error=>{
    console.error("Error:",Error)
    resultController.innerHTML="result not found"
})
}


function displayr(result){
    if(result.length===0){
        resultController.innerHTML='iam sorry sir'
        return
    }

    const html=result.map(item=>`<div id="resultitem">
       <h1> ${item.name}</h1>  <p>${item.des}</p></div>`).join()

        resultController.innerHTML=html
    
}






})
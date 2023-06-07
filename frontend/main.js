window.addEventListener('DOMContentLoaded',(event) => {
    getVisitconunt();
} )

const functionApi = "";
const getVisitconunt = ()=>{
    let count = 30;
    fetch (functionApi).then (Response =>{
        return Response.json{}
    }).then(Response => {
        console.log("website called funstion api");
        count =  Response.count;
        document.getElementById("counter").innerText = count; 
    }).catch(function(error){
        console.log(error)
    });
    return count ;

}

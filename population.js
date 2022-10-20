//initialize axml http request.
let xhr=new XMLHttpRequest();

//open a request and pass url to open methods
xhr.open("GET","https://restcountries.com/v2/all");

//Process the request on server side and retrive the data.
xhr.onload=function(){
    //Please provide me data if my request lites in range of status code 200-<300.
    if(xhr.status>=200 && xhr.status<300){
        //provide the data to the server
       let data=JSON.parse(this.response);
    //    console.log(data);

       //Looping to get individual data
       for(let i=0;i<data.length;i++){
        let user=data[i];
        console.log(`
        Country Name: ${user.name}        
        Region      : ${user.region}      
        Sub-region  : ${user.subregion}   
        populations : ${user.population}  
        `);
    }
}
}
//send the request to server
xhr.send();
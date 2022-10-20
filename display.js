//initialize axml http request.
let restcountries=new XMLHttpRequest();

//open a request and pass url to open methods
restcountries.open("GET","https://restcountries.com/v2/all");


//Process the request on server side and retrive the data.
restcountries.onload=function(){
    //Please provide me data if my request lites in range of status code 200-<300.
    if(restcountries.status>=200 && restcountries.status<300){
        //provide the data to the server
        let data=JSON.parse(this.response);
       
       //Looping to get individual data

       for(let i=0;i<data.length;i++){
        let user=data[i];
        console.log(`
        ${user.flags.png}   
        ${user.flags.svg}   

        `);
    }
}
}
//send the request to server
restcountries.send();
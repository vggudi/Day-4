const req = new XMLHttpRequest();

req.open('GET','https://restcountries.com/v3.1/all');
req.send(null);

req.onload=function(){
    const res = JSON.parse(req.responseText);
    //console.log(res);
    res.forEach(({ flag , name:{ common },region,subregion,population})=>{
        console.log("Flag:"+ flag);
        console.log("Name:" + common) ;
        console.log("region:" + region);
        console.log("Sub Region :" + subregion)
        console.log("Population : " + population);
    });
}
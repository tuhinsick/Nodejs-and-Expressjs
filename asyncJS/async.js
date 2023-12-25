setInterval(()=>{
    let d = new Date();
    document.getElementById("demo").innerHTML = 
     d.getHours()+": "+
     d.getMinutes()+": "+
     d.getSeconds();
},1000)


setTimeout(()=>{
    document.getElementById("demo2").innerHTML = `
    I Love You`
},1000);
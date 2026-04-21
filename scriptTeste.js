const loop = function (){
    let i = 0;
    const interval = setInterval(()=>{ 
        document.body.style.transform = `rotate(${i}deg)`;
        i+=90;  
    console.log("ESTOU RODANDO");
    },1000);
    setTimeout(()=>{ clearInterval(interval)},2000);
    }
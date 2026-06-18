function random(min, max){
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, callback){
  setTimeout(()=>{
    console.log(msg); 
    if(callback) callback();
  },tempo);
}

console.log(esperaAi("Frase 1", random(1,3), function(){
  esperaAi("Frase 2", random(1,3), function(){
    esperaAi("Frase 3", random(1,3));
  });
} ))
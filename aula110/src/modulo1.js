const gerador = function (max=10, min=0){
    return Math.floor((Math.random()*max)+min);
}

export {gerador};
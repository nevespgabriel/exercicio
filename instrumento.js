console.log("Você toca algum instrumento?[s/n]");
let inst;

process.stdin.on("data", function(data){
    let resp = data.toString().trim();
    if(resp == "s"){
        console.log("Qual instrumento vc toca?");
        if(!inst){
            inst = data.toString().trim();
        }
    }
});
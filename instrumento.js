console.log("Você toca algum instrumento?[s/n]");
let resp;

process.stdin.on("data", function(data){
    let entrada = data.toString().trim().toLowerCase();
    if(!resp){
        resp = entrada
        if(resp == "s" || resp == "sim"){
            console.log("Qual instrumento você toca?");
        } else if(resp == "n" || resp == "nao"){
            console.log("Que pena!");
            process.exit();
        } else{
            resp = undefined;
            console.log("Resposta inválida. Digite sim ou nao.");
        }
    } else{
        switch(entrada){
            case 'guitarra':
                console.log("Aí sim rockeirão.");
                break;
            case 'piano':
                console.log("Caraca como você é fino(a)");
                break;
            case 'bateria':
                console.log("PA PA e PA");
                break;
            default:
                console.log("Que massa, instrumento legal.");
        }
        process.exit()
    }
});
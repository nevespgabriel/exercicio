console.log("Você toca algum instrumento?[s/n]");

process.stdin.on("data", function(data){
    let resp = data.toString().trim();
});
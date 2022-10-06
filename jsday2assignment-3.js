function arg(...a){
    for (const element of a){
        console.log(element);

    }
    console.log (`Total number of arguments : ${a.length}`)
    
}
console.log(arg(6,4,"kavi",10));
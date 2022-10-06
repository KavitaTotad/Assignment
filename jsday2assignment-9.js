function test(...a){
    for (let i = 0; i< a.length; i++){
        console.log(Math.max(...a[i]));

    }
}
test([3,2,5],[1,2,3],[4,5,6]);
function ass(num){
    var result=0;
    var count=Array(10).fill(0);
    while(num>0){
        var rem=num%10;
        count[rem]++;
        num=Math.floor(num/10);

    }
    for(var i=0;i<0;i++){
        if(count[i]>1){
            result++
        }
    }
    return result;
}
var num=7312140905;
console.log(ass(num));
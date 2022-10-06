let arr = [1,2,3,4];
let myArr = [1,1,1,1];
for(let i=0; i<4; i++){
    for(let j=arr[i]; j>=1; j--){
        myArr[i] = myArr[i]*j;
    }
    
}
console.log(myArr);
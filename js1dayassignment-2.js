num =12345;
rev=0;
while(num>0){
    rem=num%0;
    rev=(rev*10)+rem;
    num=Math.floor(num/10);
}
console.log("reversed number is :"+rev);
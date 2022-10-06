function sum(...a)
{
    s = 0;
    for(const element of a ){
        s+=element;
    }
    console.log(`sum of all arguments are : ${s}`);
}
sum(3,3,3,3);
array = [2,3,4,5,6,7,8,9,10,11]
function question_six(arr1) {
    result=0
    for(let i=0; i <=arr1.length; i++){
        if (arr1[i] % 2 == 0){
            result == arr1[i]
        }
    }
    if(result == 0){
        return 'No Even numbers found'
    }
    return result

}
console.log(question_six(array))
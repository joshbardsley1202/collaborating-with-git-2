var intArray = [1,2,3,4,5]
function findSum(someIntArray){
    return someIntArray.reduce((currSum, currInt) => {
        currSum+=currInt
        return currSum
    })
}
console.log(findSum(intArray))
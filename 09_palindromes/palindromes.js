const palindromes = function (string) {

    let arr = [...string.toLowerCase()]
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="!" || arr[i]==="."||arr[i]===","||arr[i]===" " || typeof(arr[i])==="number"){
            arr.splice(i,1)
        }
    }
    console.log(arr);

    // let reverseArr = arr.reverse();
    // console.log(reverseArr);
    //  console.log(reverseArr.toString());
    //  console.log(arr.toString());

    return arr.toString() === arr.reverse().toString();
};

// Do not edit below this line
module.exports = palindromes;

'use strict'

let arr1 = ['Hello'];
let arr2 = ['AppleSeeds' , 'BootCamp'];
let combinedArr = arr1.concat(arr2);

//*****another way with loops*****//
//Assuming that  according to instruction must be joint under arr1//
//and not to shorten procees//

if (arr1.length < arr2.length){
    for (let i = 0; i < arr2.length ; i++){
        arr1.push(arr2[i]);
    } 
} else {
    for (let i = 0; i < arr2.length ; i++){
        console.log(i);
        arr1.push(arr2[i]);
    }
}
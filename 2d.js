const ages = [25, 31, 42, 77];
//.map function that returns all array items that are greater than 70 
//Multiplies by 2
let d = ages.map((item)=> {
    if(item<70){
        return item*2;
    }
    else {
        return item;
    }
})

console.group(d);
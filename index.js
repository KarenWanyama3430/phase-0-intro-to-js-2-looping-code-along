const gifts =[ "teddy bear","drone" ,"doll"]

const newArray =[]

function writeCards (stringArray,eventName){
    for (let i= 0; < stringArray.length;i ++ ) {
newArray.push ('Thank you,${string Array [i]}, for the wonderful ${eventName} gift!') ; 
    }
    return Array
}

function wrapGifts (gifts) {
    let i = 0;
    while (i < gifts.length){
        console.log ('wrapped ${gifts[i]} and added a bow!');
        i++ ;
    }
    return gifts
}

function countDown (count) {
    let i = count;
    while (i>= 0){
        comsole.log (i);
        i--;
    }
}

countDown(10);

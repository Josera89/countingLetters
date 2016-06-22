function countLetters(words){
    var letterArray = words.split(" ").join("").toLowerCase().split("");
    //console.log(letterArray);
    var count = 0;
    var obj = {};
    for(var i = 0; i < letterArray.length; i++){

        var c = letterArray[i];

        if(obj[c]== undefined){
            var array = [];
            array.push(i);
            obj[c]= array;

            //obj[c] = [i]
        }else{
            obj[c].push(i);
        }
    }
    return obj;
}
console.log(countLetters("lighthouse in the house"));


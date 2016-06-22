function countLetters(words){
    var letterArray = words.split(" ").join("").toLowerCase().split("");
    var count = 0;
    var obj = {};


    for(var i = 0; i < letterArray.length; i++){

        var c = letterArray[i];
        //var d = array.push("jose");
        if(obj[c]== undefined){
            var array = [];

            if(array.length < 2){
                array.push(i);
                obj[c] = array;
            }
        }
        else{
            obj[c].push(i);
        }

    }
    return obj;
}
console.log(countLetters("lighthouse in the house"));

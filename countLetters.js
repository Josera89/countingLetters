function countLetters(words){
    var letterArray = words.split(" ").join("").toLowerCase().split("");
    
    var count = 0;
    var obj = {};
    for(var i = 0; i < letterArray.length; i++){
        
        var c = letterArray[i];
        
        if(obj[c]== undefined){
            obj[c] = 1;
        }else{
            obj[c]+=1;
        }
        /*console.log(letterArray[i]);
        
        count+=1;
        console.log(count);*/
    }
    return obj;
}
console.log(countLetters("lighthouse in the house"));


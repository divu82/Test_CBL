function numberToArray(Input){
    var InputString = Input.toString();//converting number to string
     var Stringarr=InputString.split('');//Sperating each charcater by single qoutes by using Split function 
    sorting(Stringarr);//call sort function to sort stringarr into ascending order
}
function sorting(Stringarr){
    var temp;
    for(i=0;i<Stringarr.length;i++){//using pointer i to check every particular character with other
        for (j=i;j<Stringarr.length;j++){//using pointer j to match i with every single charcater avalaible in array
            if(Stringarr[i]>Stringarr[j+1]){//if condition will check if the ith element is greater than j+1 element it will change its position with that 
                temp= Stringarr[j+1];//using temporary variable to perform replacing of characters
                Stringarr[j+1]=Stringarr[i];
                Stringarr[i]=temp;
            }
        }
    }
    var numberArray = Stringarr.map(Number);
    console.log(numberArray);
}
numberToArray(8046957321);

   
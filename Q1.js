var Positivearray=[];//array to store positive values
function sumOfPositives(values){
    var sum=0;
    for(i=0;i<values.length;i++){//loop for taking positive values
        if(values[i]>0){//this conditon will push positive value to new aray
            Positivearray.push(values[i]);
        }
    }
    for(i=0;i<Positivearray.length;i++){//loop to sum positive value
        sum+=Positivearray[i];
    }
    return sum;
}
const values=[-2,5,3,-8,10,-4];
console.log(sumOfPositives(values));
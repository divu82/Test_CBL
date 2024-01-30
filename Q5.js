// LET                            ||          VAR                           ||         Const
// 1.We cannot redeclare the      ||1. We can redeclare the variable if     ||1.We cannot redecalre a variable as const.
// variable as let if its been    ||its been already defined(it will leads  ||
// already defined.               ||to redundancy in code which make it     ||
//                                ||less readable)and it will not loose its ||
//                                ||value.                                  ||
//2.Variable decalre with Let have||2.Variable decalred with Var have global||2.Variable declared with Const have   
//blocked scope.                  ||scope.                                  ||blocked Scope.
//3.We can intialised Let without ||3.We can intialise Var without declaring||3. We cannot intialise variable with const  
// decalring it.                  ||it.                                     ||without declaring it. 
// 4.We use let  when we want     ||4.We user var when                      ||4.We use Const when if its value should not   
// to change values or type of    ||                                        ||be changed.
// variable.
// .....................................................Examples....................................................
let name="Divyansh";
 /* let name; we cannot redclare name again as its been already declared as let.*/ 
var age="15";
var age="42";   /*we can redeclare age as its been asigned with var  */
var age;/*value is not changed after redeclaring */
console.log(age);
const phone=9034500831;
// const phone; unable to redeclare it.
{
    let subject="JavaScript"
    var test="JavaScript"
    const marks=25;
}
// console.log(subject); it will thrown an error as let have blocked scope
console.log(test);/*It will print JavaScript which show  variable with var are globaly scoped */
// console.log(marks);it will thrown an error as Const have blocked scope

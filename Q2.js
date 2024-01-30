function getHighScores(students,marks){
    var StudentNAmes=[];//array that will stores names of students
    students.forEach(element =>
        { 
            if(element.score>marks)//this push name of those student only whose score is greater than 70
            {
                StudentNAmes.push(element.name);
            }
    });
    return StudentNAmes;//returns an array having students names those who scores marks greater than 70
}
const students=[
    {name:'Alice',score:85},
    {name:'Bob',score:60},
    {name:'Charlie',score:92},
    {name:'David',score:75}];
console.log(getHighScores(students,70));
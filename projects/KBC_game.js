question= [
    "How many continents are there?",  //first           
    "What is the capital of India?",   //second   
    "NG mei kaun se course padhaya jaata hai?" //third   
]

options= [//for first question
    ["Four", "Nine", "Seven", "Eight"],
    //for second questoin
    ["Ch&&igarh", "Bhopal", "Chennai", "Delhi"],
    // for third question
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
var i=0;
var c=0;
var c1=1;
var count=0;
while (i<question.length){
    console.log(question[i]);
    var j=0;
    var op=1;
    const write=require('readline-sync');
    while (j<=options.length){
        console.log(op,options[i][j]);
        op++
        j++
    }
    var solution = [3,4,1];
    var op2 = ["1.Four","3.Seven","3.Chennai","4.Delhi","1.Software Engineering","4.Agriculture"];
    var lifeline = write.question("You want life line 'yes' or 'not' : ");
    if (lifeline=='yes'){
        console.log('50-50');
        if (count==0){
            console.log(op2[i+c]);
            console.log(op2[i+c1]);
            var ans =write.questionInt('select one option : ');
            if (ans==solution[i]){
                console.log('Right');
                console.log('🥳🥳');
                count++
            }
            else{
                console.log('your answer is wrong');
                break
            }
        }
        else{
            console.log('you already used life line');
            var ans=write.questionInt('select a number : ');
            if (ans==solution[i]){
                console.log('🥳🥳');
            }
            else{
                console.log('your answer is wrong');
            }
        }
    }
    else if (lifeline=='no'){
        var ans=write.questionInt('select one option : ');
        if (ans==solution[i]){
            console.log('Right');
            console.log('🥳🥳');
        }
        else{
            console.log('your answer is wrong');
            break
        }
    }
    else{
        console.log('somthing is wrong');
    }
    c++
    c1++
    i++
}   
const fs=require('fs');
const write = require('readline-sync');
const path = './loginSignup.json';
var file_exsist = (fs.existsSync(path));
console.log(file_exsist)
if (file_exsist==false){
    var list1=[];
    var dic1={};
    var dic2={};
    var user1 = write.question('What you want login/signup : ');
    if (user1=='signup'){
        var name1=write.question('Enter your name : ');
        var password1=write.question('Enter a strong password : ');
        if (password1.match(/[a-z]/g) && password1.match(/[0-9]/g) && password1.match(/[A-Z]/g) && password1.match(/[@#$&]/g)){
            var password2 = write.question('Conform your password : ')
            if (password1==password2){
                console.log('successfully verified your password ')
                var Discription = write.question('Write Discription : ');
                var DOB = write.question('Enter your DOB : ');
                var hobbies = write.question('Enter your Hobbies : ');
                var gender = write.question('Enter your Gender F/M : ')
                var li1=['Name','Password','Discription','DOB','Hobbies','Gender'];
                var li2=[name1,password2,Discription,DOB,hobbies,gender];
                for (var i=0; i<li1.length; i++){
                    dic1[li1[i]]=li2[i];
                }
                list1.push(dic1);
                dic2[password2]=list1;
                var senddata_1 = JSON.stringify(dic2);
                fs.writeFileSync('loginSignup.json',senddata_1);
            }
            else{
                console.log('Both passwords are not same');
            }
        }
        else{
            console.log('your password is not strong,try again');
        }
    }
}
else if (file_exsist==true){
    var list2=[];
    var user2= write.question('What you want login/signup : ')
    if (user2=='signup'){
        var name2 = write.question('Enter your name : ');
        var password3 = write.question('Enter your password : ');
        check = fs.readFileSync('loginSignup.json', 'utf8');
        var check_data = JSON.parse(check);
        if (password3.match(/[a-z]/g) && password3.match(/[0-9]/g) && password3.match(/[A-Z]/g) && password3.match(/[@#$&]/g)){
            var password4 = write.question('Conform your password : ')
            if (password3==password4){
                console.log('successfully verified your password ')
                var Discription = write.question('Write Discription : ');
                var DOB = write.question('Enter your DOB : ');
                var hobbies = write.question('Enter your Hobbies : ');
                var gender = write.question('Enter your Gender F/M : ')
                var li3=['Name','Password','Discription','DOB','Hobbies','Gender'];
                var li4=[name2,password4,Discription,DOB,hobbies,gender];
                var dic3={}
                for (var i=0; i<li3.length; i++){
                    dic3[li3[i]]=li4[i];
                }
                list2.push(dic3);
                check_data[password4]=list2;
                var senddata_2 = JSON.stringify(check_data);
                fs.writeFileSync('loginSignup.json',senddata_2);
            }
            else{
                console.log('Both passwords are not same');
            }
        }
        else{
            console.log('your password is not strong,try again');
        }
    }
    else if (user2=='login'){
            var name3=write.question('Enter your name : ');
            var passwords5 = write.question('Enter your password : ');
            var checking = fs.readFileSync('loginSignup.json', 'utf8');
            var check_information = JSON.parse(checking);
            for (var i in check_information){
                if (i==passwords5){
                    console.log('your given information is correct');
                    console.log(check_information[i]);
                    break
                }
            else{
                console.log('Sorry! your password is wrong ')
            }
        }
    }
}
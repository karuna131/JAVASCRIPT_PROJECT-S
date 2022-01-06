const axios = require('axios');
const write = require('readline-sync');
const fs = require('fs');

// async function makeGetRequest(){
//     var url =await axios.get("https://api.merakilearn.org/courses");
//     var data = url.data;
//     var putdata = JSON.stringify(data);
//     fs.writeFileSync('request.json', putdata)
//     // console.log(data);
// }
// makeGetRequest();

// const New = new Promise((resolve)=>{
//     const url = "https://api.merakilearn.org/courses"
//     fetch = axios.get(url)
//     resolve (fetch)
// })
// New.then((data)=>{
//     var putdata = JSON.stringify(data);
//     var data = fs.writeFileSync('request.json', putdata)
// });

const url = "https://api.merakilearn.org/courses"
axios.get(url).then(resp =>{
    var data = resp.data;        //converting into data
    // console.log(data)
    var putdata = JSON.stringify(data, null, 4);
    fs.writeFileSync('whole_data.json', putdata)
    var s_no = 1;
    for (var i of data){
        console.log(s_no , i["name"],i["id"]);                      
        s_no++
    }
    course_no = write.questionInt('Enter your course number which you want to choose : ');
    console.log(data[course_no-1]['name'],data[course_no-1]['id']);

    var url2 = "https://api.merakilearn.org/courses/"+String(data[course_no-1]['id'])+"/exercises"
    axios.get(url2).then(resp2 =>{
        var data2 = resp2.data;
        // console.log(data2)
        var putdata2 = JSON.stringify(data2, null,2);
        var main=fs.writeFileSync('main_data.json', putdata2);
        // console.log(main);
        var l1=[];
        var l2=[];
        var s_No=1;
        for (var k in data2['course']['exercises']){
            // console.log(data2['course']['exercises'][k])
            if (data2['course']['exercises'][k]['parent_exercise_id']==null){
                console.log(s_No, data2['course']['exercises'][k]['name'])
                console.log(' ',s_No, data2['course']['exercises'][k]['slug'])
                l1.push(data2['course']['exercises'][k])
                l2.push(data2['course']['exercises'][k])
                s_No++
                continue
            }
            if (data2['course']['exercises'][k]["parent_exercise_id"]==data2['course']['exercises'][k]["id"]){
                console.log(s_No,data2['course']['exercises'][k]["name"])
                l1.push(data2['course']['exercises'][k])
                s_No++
            }
                var s_No2=1
            for (var i in data2["course"]["exercises"]){
                if (data2['course']['exercises'][i]["parent_exercise_id"]!=data2['course']['exercises'][i]["id"]){
                    console.log(" ",s_No2,data2['course']['exercises'][i]["name"])
                    l2.push(data2['course']['exercises'][i])
                    s_No2++
                    break
                }
            }
        // var putdata3 = JSON.stringify(l1, null,2);
        // var sub=fs.writeFileSync('sub_data.json', putdata3);
        // console.log(sub)
        var choose_course = write.questionInt('Enter a course number : ')
        for (var choice in l1){
            if (choice['id']==choice['parent_exercise_id']){
                console.log(l1[choose_course-1]['name']);
                break;
            }
        }
        var compare = l1[choose_course-1]['parent_exercise_id'];
        t=1
        l3=[]
        l4=[]
        for (var inside of l2){
            if (l2[inside]["parent_exercise_id"]==compare){
                console.log(" ",t,l2[inside]["name"])
                l3.push(l2[inside]["name"])
                l4.push(l2[inside]["content"])
                t++
            }
        }
        var last_choice=write.questionInt("choose a point number from given options : ");
        console.log(l4[last_choice-1])
        }
    })
})
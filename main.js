// Register Page start //

if(!localStorage.getItem("registerDatas")){
    localStorage.setItem("registerDatas",JSON.stringify([]))
};

let register_data =JSON.parse(localStorage.getItem("registerDatas"));

function getRegisterData(){

    let reg_name = document.getElementById('reg_name');
    let reg_email = document.getElementById('reg_email');
    let reg_password = document.getElementById ('reg_password');

    let all_register_data ={};

    all_register_data.name = reg_name.value;
    all_register_data.email = reg_email.value;
    all_register_data.password =reg_password.value;

    register_data.push(all_register_data)
    localStorage.setItem("registerDatas",(JSON.stringify(register_data)));

    reg_name.value = "";
    reg_email.value = "";
    reg_password.value = "";


    alert("Register Successfully");
    window.location = "login.html"
};
// Register Page end //

// login start //
function userLogin(){

    let login_id = document.getElementById("login_id").value;
    let login_pass = document.getElementById("login_pass").value;

    let mail_and_pass = false;
    
    for(let each of register_data){
        if(login_id == each.email && login_pass == each.password){
            mail_and_pass = true
        }
    };
    if(mail_and_pass == true){
        window.location = "resume.html"
    };
    if(mail_and_pass == false){
        alert("Invalid mail or password")
    }
};

// login end //

// create resume start ----------------------------0//



// get single value and multiple object data start ----1

function getSingleData(elements,key,group){
    if(group){
        userResume[group][key] = elements.value
    }else{
        userResume[key] = elements.value
    }

};

// get single value and multiple object data end----1

// get object in array multiple value data start ----2

function getListData(parentGroup,childGroup,id){

    let list_values_data = document.getElementById([id]);

    userResume[parentGroup][childGroup].push(list_values_data.value);
    list_values_data.value= "";
    preview(parentGroup,childGroup)
};
// get object in array multiple value data end ----2

// list Array value Disply Start-----------3
function preview(parentKey,childKey){

    let list =""

    for(let each in userResume[parentKey][childKey]){
         list += `<tr class="mb-2"> <td class="list-group-item w-50 box-2"> ${userResume[parentKey][childKey][each]} </td> <td class="box-2"><button class="btn btn-primary " onclick="deleteList(${each},'${parentKey}','${childKey}')" type="button"> Delete </button> </td> </tr> `
    }
    document.getElementById(childKey).innerHTML = list

};
// list Array value Disply End------------3

// Delete Object----> Object-----> Array in multi value start ---------4
function deleteList(index,pKey,cKey,){

    let re_list=[];
    if(cKey){
        for(let i in userResume[pKey][cKey]){

            if(i != index){
                re_list.push(userResume[pKey][cKey][i])
            }
        }
        userResume[pKey][cKey] = re_list;
        preview(pKey,cKey);

    }
};

// Delete Object----> Object-----> Array in multi value end ---------4

// Delete Object----> Array in multi object in the local storage  start--------5

function deletesTableRow(index,parentKeys,idOneValue,idTwoValue,idThreeValue,idFourValue,idFiveValue,idSixValue){

    let re_list_Value = [];

    for(let each in userResume[parentKeys]){
        if(index != each){
            re_list_Value.push(userResume[parentKeys][each])
        }
    };
    userResume[parentKeys] = re_list_Value
   
        previewTable(parentKeys,idOneValue,idTwoValue,idThreeValue,idFourValue,idFiveValue,idSixValue)

}

// Delete Object----> Array in multi object in the local storage  end--------5

// Add Array list table data in local storage Start---------6

function addTablelist(parentKey,key1,key2,key3,key4,key5,key6){

    let list_table_data={};

    if(key6){
        let keyOne = document.getElementById([key1]);
        let keyTwo = document.getElementById([key2]);
        let keyThree = document.getElementById([key3]);
        let keyFour = document.getElementById([key4]);
        let KeyFive = document.getElementById([key5]);
        let keySix = document.getElementById([key6])

        list_table_data[key1] = keyOne.value;   
        list_table_data[key2] = keyTwo.value;
        list_table_data[key3] = keyThree.value;
        list_table_data[key4] = keyFour.value;
        list_table_data[key5] = KeyFive.value;
        list_table_data[key6] = keySix.value;

        userResume[parentKey].push(list_table_data);

        keyOne.value = "";
        keyTwo.value = "";
        keyThree.value = "";
        keyFour.value = "";
        KeyFive.value = "";
        keySix.value = ""
        
    }else{
        let keyOne = document.getElementById([key1]);
        let keyTwo = document.getElementById([key2]);
        let keyThree = document.getElementById([key3]);
        let keyFour = document.getElementById([key4]);
        let KeyFive = document.getElementById([key5]);

        list_table_data[key1] = keyOne.value;   
        list_table_data[key2] = keyTwo.value;
        list_table_data[key3] = keyThree.value;
        list_table_data[key4] = keyFour.value;
        list_table_data[key5] = KeyFive.value;

        userResume[parentKey].push(list_table_data);

        keyOne.value = "";
        keyTwo.value = "";
        keyThree.value = "";
        keyFour.value = "";
        KeyFive.value = ""
    }

    previewTable(parentKey,key1,key2,key3,key4,key5,key6)
};

// Add  Array list table data in local storage end----------6

// preview  array list table in create resume page (Same Page) data start----------7

function previewTable(parKey,idOne,idTwo,idThree,idFour,idFive,idSix){

    let parentKey = document.getElementById([parKey])
    let list_tables_row = ""

    if(idSix){
        for(let each in userResume[parKey]){
            list_tables_row +=`<tr>
                                    <td>${userResume[parKey][each][idOne]}</td>
                                    <td>${userResume[parKey][each][idTwo]}</td>
                                    <td>${userResume[parKey][each][idThree]}</td>
                                    <td>${userResume[parKey][each][idFour]}</td>
                                    <td>${userResume[parKey][each][idFive]}</td>
                                    <td>${userResume[parKey][each][idSix]}</td>
                                    <td class="tables-button">
                                        <button class="btn btn-primary" type="button" onclick="deletesTableRow(${each},'${parKey}','${idOne}','${idTwo}','${idThree}','${idFour}','${idFive}','${idSix}')">Delete</button>
                                    </td>
                                </tr>`
        }
    }else{
        for(let each in userResume[parKey]){
            list_tables_row +=`<tr>
                                    <td>${userResume[parKey][each][idOne]}</td>
                                    <td>${userResume[parKey][each][idTwo]}</td>
                                    <td>${userResume[parKey][each][idThree]}</td>
                                    <td>${userResume[parKey][each][idFour]}</td>
                                    <td>${userResume[parKey][each][idFive]}</td>
                                    <td class="tables-button">
                                        <button class="btn btn-primary" type="button" onclick="deletesTableRow(${each},'${parKey}','${idOne}','${idTwo}','${idThree}','${idFour}','${idFive}')">Delete</button>
                                    </td>
                                </tr>`
        }
    };

    parentKey.innerHTML = list_tables_row

}

// preview array list table in create resume page (Same Page) data end----------7


// set blank array in  local storage  in the multi resume start ------8

if(!localStorage.getItem("allUserResumes")){
    localStorage.setItem("allUserResumes",JSON.stringify([]))
};

let allUserResumeData = JSON.parse(localStorage.getItem("allUserResumes"));

// set blank array in  local storage  in the multi resume end ------8

let userResume={
    
    personal_details:{
        skills_details:[],
        languages_details:[]
    },
    work_experience:[],
    education_qualification:[],
    projects:[]
    
};


// resume submit data in local storage start--------9

function sumbitResume(){

    allUserResumeData.push(userResume)
    localStorage.setItem("allUserResumes",JSON.stringify(allUserResumeData))  
    
    window.location = "list.html"
    
}

// resume submit data in local storage end---------9



// view the this users's created all resume list page  - get data from local storage start -----10
function viewList(){

    
    let view_allUserResumes = JSON.parse(localStorage.getItem("allUserResumes"));
    let preview_list = document.getElementById("preview_list");

    let get_list = ""

    for(let each in view_allUserResumes){
        get_list += `<tr>
                        <td>${view_allUserResumes[each].resName}</td>
                        <td>${view_allUserResumes[each].resMail}</td>
                        <td>${view_allUserResumes[each].resMobile}</td>
                        <td class="tables-button"><button class="btn btn-primary" type="button" onclick="deleteResume(${each})"> Delete </button></td>
                        <td class="tables-button"><a href="view.html?index=${each}"><button class="btn btn-primary" type="button"> View </button></a></td>
                    </tr>`      
    }

    preview_list.innerHTML = get_list
    
}
// view the this users's created all resume list page  - get data from local storage end -----10


// list page local storage resume  delete and view start-------11

function deleteResume(index){

    let all_users_resume = JSON.parse(localStorage.getItem("allUserResumes"));
    let users_update_data = [];

    for(let each in all_users_resume){

        if(each != index){
            users_update_data.push(all_users_resume[each])
        }
    }
    all_users_resume = users_update_data;

    localStorage.setItem("allUserResumes",JSON.stringify(users_update_data))

viewList()

}

// list page local storage resume  delete and view end-------11

// view the user's created index resume (view single resume) start------12

function viewSingleResume(){
    
    const searchParams = new URLSearchParams(window.location.search); 
    const indexParam = searchParams.get('index'); 
    const ls_data = JSON.parse(localStorage.getItem('allUserResumes'));

    document.getElementById("viewName").innerHTML = ls_data[indexParam].resName;
    document.getElementById("viewMobile").innerHTML= ls_data[indexParam].resMobile;
    document.getElementById("viewMail").innerHTML = ls_data[indexParam].resMail;
    document.getElementById("viewLinkedID").innerHTML = ls_data[indexParam].resLinkedIn;
    document.getElementById("view_father_name").innerHTML = ls_data[indexParam].personal_details.father_name;
    document.getElementById("view_mother_name").innerHTML = ls_data[indexParam].personal_details.mother_name;
    document.getElementById("view_dob").innerHTML = ls_data[indexParam].personal_details.dob;
    document.getElementById("view_gender").innerHTML = ls_data[indexParam].personal_details.gender;
    document.getElementById("view_material_status").innerHTML = ls_data[indexParam].personal_details.material_status;
    document.getElementById("view_address").innerHTML = ls_data[indexParam].personal_details.address;
    document.getElementById("view_state").innerHTML = ls_data[indexParam].personal_details.state;
    document.getElementById("view_pin").innerHTML = ls_data[indexParam].personal_details.pincode;


    let view_skill_detail="";

    for(let each of ls_data[indexParam].personal_details.skills_details){
        view_skill_detail += `<li>${each}</li>`

    };
    document.getElementById("view_skills").innerHTML = view_skill_detail;

    let view_language_detail="";

    for(let each of ls_data[indexParam].personal_details.languages_details){
        view_language_detail += `<li>${each}</li>`
    }
    document.getElementById("view_languages").innerHTML = view_language_detail;

    let view_work_exp =""

    for(let each in ls_data[indexParam].work_experience){
        view_work_exp += `  <div>
                                <div> <lable> Company Name : </lable> <span> ${ls_data[indexParam].work_experience[each].c_name} </span></div>
                                <div> <lable> Designation : </lable> <span> ${ls_data[indexParam].work_experience[each].c_designation}</span></div>
                                <div> <lable> Experience years: </lable> <span> ${ls_data[indexParam].work_experience[each].c_experience}</span></div>
                                <div> <lable> Learned Skills  : </lable> <span> ${ls_data[indexParam].work_experience[each].c_learnSkill}</span></div>
                                <div> <lable> About  : </lable> <span> ${ls_data[indexParam].work_experience[each].c_about}</span></div>
                                <hr>
                            </div>`
    }
    document.getElementById("view_work_experience").innerHTML = view_work_exp; 

    let view_education =""

    for(let each in ls_data[indexParam].education_qualification ){
        view_education += `<div>
                                <div> <lable> Course Name : </lable> <span> ${ls_data[indexParam].education_qualification[each].course_name}</span></div>
                                <div> <lable> PassOut Year : </lable> <span> ${ls_data[indexParam].education_qualification[each].passOut_year}</span></div>
                                <div> <lable> Scored Percentage : </lable> <span> ${ls_data[indexParam].education_qualification[each].scored_percentage}</span></div>
                                <div> <lable> Institute  : </lable> <span> ${ls_data[indexParam].education_qualification[each].institute}</span></div>
                                <div> <lable> University or Board Name  : </lable> <span> ${ls_data[indexParam].education_qualification[each].university_or_board_name}</span></div>
                                <hr>
                            </div>`
    };

    document.getElementById("view_education").innerHTML= view_education;

    let view_project = ""

    for(let each in ls_data[indexParam].projects){
        view_project +=`<div>
                            <div> <lable> Project Name : </lable> <span> ${ls_data[indexParam].projects[each].project_name}</span></div>
                            <div> <lable> Description : </lable> <span> ${ls_data[indexParam].projects[each].p_description}</span></div>
                            <div> <lable> Project link : </lable> <span> ${ls_data[indexParam].projects[each].p_link}</span></div>
                            <div> <lable> Develope Tools  : </lable> <span> ${ls_data[indexParam].projects[each].develope_at}</span></div>
                            <div> <lable> Institude or Company  : </lable> <span> ${ls_data[indexParam].projects[each].institude_or_company}</span></div>
                            <div> <lable> My Contribution  : </lable> <span> ${ls_data[indexParam].projects[each].contribution}</span></div>
                            <hr>
                        </div>`
    }

    document.getElementById("view_projects").innerHTML = view_project

    
}

// view the user's created index resume (view single resume) end------12

// create resume end //

console.log(userResume)




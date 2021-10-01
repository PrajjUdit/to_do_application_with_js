const studentList=[];
const studentListElement =document.querySelector("#studentList-ul");
console.log(studentListElement);
document.querySelector("#add_button").addEventListener("click",add);
function add() {
    console.log("added");
    const NameText =document.querySelector("#studentName_text").value;
    const PhoneText =document.querySelector("#studentPhone_text").value;
    const MailText =document.querySelector("#studentMail_text").value;
    console.log(NameText);
    console.log(PhoneText);
    console.log(MailText);
    if(NameText == "" ||PhoneText == "" ||MailText== "") {
        return;
    }    
    else {
            const stObject = {
              Name: NameText, 
              Number: PhoneText, 
              Email: MailText,
            }
            studentList.unshift(stObject);
            console.log(studentList);
            studentListElement.innerHTML="";
            document.querySelector("#studentName").value="";
            document.querySelector("#studentPhone").value="";
            document.querySelector("#studentMail").value="";
            displayStDetails(); //calling function 
      }
    }
    function displayStDetails() { 
        studentList.forEach((details) =>{   //using forEach loop for taking detalis one by one in array
            const indexElement = document.createElement("li")   //creating child tag for <ul></ul> from  java script
            indexElement.innerHTML="Name:"+details.Name+" ,"+"Number:"+details.Number+","+"Email:"+details.Email;
            studentListElement.appendChild(indexElement)
            })
    }

var nameV,fatherV,motherV,genderV,addressV,mobileV,dobV,emailV,scV,religionV,courseV,yourstateV;
function readForm()
{
  nameV=document.getElementById("name").value;
  fatherV=document.getElementById("fathername").value;
  motherV=document.getElementById("mothername").value;
  genderV=document.getElementById("gender").value;
  addressV=document.getElementById("address").value;
  mobileV=document.getElementById("mobile").value;
  dobV=document.getElementById("dob").value;
  emailV=document.getElementById("email").value;
  scV=document.getElementById("schoolcollege").value;
  religionV=document.getElementById("religion").value;
  courseV=document.getElementById("course").value;
  yourstateV=document.getElementById("yourstate").value;
  console.log(nameV,fatherV,motherV,genderV,addressV,mobileV,dobV,emailV,scV,religionV,courseV,yourstateV);
}

document.getElementById("insert").onclick=function()
{
  readForm();
  firebase.database().ref("student/"+nameV).set({name:nameV,father:fatherV,mother:motherV,gender:genderV,address:addressV,mobile:mobileV,
  dob:dobV,email:emailV,scname:scV,religion:religionV,course:courseV,yourstate:yourstateV,});
  alert("Data Inserted");
  document.getElementById("name").value="";
  document.getElementById("fathername").value="";
  document.getElementById("mothername").value="";
  document.getElementById("gender").value="";
  document.getElementById("address").value="";
  document.getElementById("mobile").value="";
  document.getElementById("dob").value="";
  document.getElementById("email").value="";
  document.getElementById("schoolcollege").value="";
  document.getElementById("religion").value="";
  document.getElementById("course").value="";
  document.getElementById("yourstate").value="";
};

document.getElementById("read").onclick=function()
{
  readForm();
  firebase.database().ref("student/"+nameV).on("value",function(snap){
    document.getElementById("name").value=snap.val().name;
    document.getElementById("fathername").value=snap.val().father;
    document.getElementById("mothername").value=snap.val().mother;
    document.getElementById("gender").value=snap.val().gender;
    document.getElementById("address").value=snap.val().address;
    document.getElementById("mobile").value=snap.val().mobile;
    document.getElementById("dob").value=snap.val().dob;
    document.getElementById("email").value=snap.val().email;
    document.getElementById("schoolcollege").value=snap.val().scname;
    document.getElementById("religion").value=snap.val().religion;
    document.getElementById("course").value=snap.val().course;
    document.getElementById("yourstate").value=snap.val().yourstate;
    console.log(nameV,fatherV,motherV,genderV,addressV,mobileV,dobV,emailV,scV,religionV,courseV,yourstateV,)
  });
};

document.getElementById("update").onclick=function(){
  
  readForm();
  firebase.database().ref("student/"+nameV).update({father:fatherV,mother:motherV,gender:genderV,address:addressV,mobile:mobileV,dob:dobV,
    email:emailV,scname:scV,religion:religionV,course:courseV,yourstate:yourstateV,});
  alert("Data updated");
  document.getElementById("fathername").value="";
  document.getElementById("mothername").value="";
  document.getElementById("gender").value="";
  document.getElementById("address").value="";
  document.getElementById("mobile").value="";
  document.getElementById("dob").value="";
  document.getElementById("email").value="";
  document.getElementById("schoolcollege").value="";
  document.getElementById("religion").value="";
  document.getElementById("course").value="";
  document.getElementById("yourstate").value="";
};

document.getElementById("delete").onclick=function()
{
  readForm();
  firebase.database().ref("student/"+nameV).remove();
  alert("Data Deleted");
  document.getElementById("name").value="";
  document.getElementById("fathername").value="";
  document.getElementById("mothername").value="";
  document.getElementById("gender").value="";
  document.getElementById("address").value="";
  document.getElementById("mobile").value="";
  document.getElementById("dob").value="";
  document.getElementById("email").value="";
  document.getElementById("schoolcollege").value="";
  document.getElementById("religion").value="";
  document.getElementById("course").value="";
  document.getElementById("yourstate").value="";
};
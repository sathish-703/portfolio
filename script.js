function validateform(){
    var fullName=document.getElementById("fullName").value
    var email_id=document.getElementById("email_id").value
    var message=document.getElementById("message").value
    if (fullName==null||fullName=="") {
        alert("name cant be blank");
        return false;
    } else if (!isNaN(fullName)) {
        alert("invalid name");
        return false;
    }
    else if(email_id==""||email_id==null){
      alert("email cant be blank");
      return false;
    }else if(message==""||message==null){
        alert("message null??");
        return false;
    }
}
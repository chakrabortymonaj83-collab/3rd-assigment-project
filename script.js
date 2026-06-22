// form validation
 
const saved_data = ()=>{ 
    // create arrow function function name saved_data

// taking variable connect through id  
// trim () method basically is string method it will be remove space left and right side not in the middle
    let username = document.getElementById("username").value;
 
    let Email = document.getElementById("email").value;
 let phone= document.getElementById("Phone").value
    // let Password = document.getElementById("password").value;
 
    let user_msg = document.getElementById("u-msg");
 
    let email_msg = document.getElementById("e-msg"); 
    let phone_msg=document.getElementById("p-msg");
 
    // flag 
 
    let isvalid = true;
 
    user_msg.style.color="red";
    email_msg.style.color="red"; 
    phone_msg.style.color="red";
 
    // regex
//  username regex
    let username_regex = /^.{3,14}$/;
//  email regex
    let Email_regex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//  phone regex 
    let phone_regex = /^[0-9]{10}$/;

 
 
    // validation
//  username validation
    if(username_regex.test(username)){
 
       user_msg.innerHTML = "Invalid username (3-14 characters required)";

 
        isvalid = false;
    }
//  email validation
    if(!Email_regex.test(Email)){
 
   email_msg.innerHTML = "Invalid email format";

 
        isvalid = false;
    }
// phone validation 
    if (!phone_regex.test(phone)) {
        phone_msg.innerHTML="Invalid phone number (must be 10 digits";
        isvalid = false;
    }

 
    // local storage
 
    if(isvalid){
 
    // setItem() method means what it will be write in from local stroage store it 
        localStorage.setItem("Username", username);
        localStorage.setItem("Email", Email);
        alert("Data Stored Successfully");
    }
 
}
 
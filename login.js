// LOGIN FUNCTION

function login(){

    let role = document.getElementById("role").value;
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    
    // CHECK INPUTS
    if(username === ""){
    alert("Please enter username");
    return;
    }
    
    if(password !== "1234"){
    alert("Wrong password");
    return;
    }
    
    // SAVE USER SESSION
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);
    
    // GO TO DASHBOARD
    window.location.href = "dashboard.html";
    }
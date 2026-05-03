function login(){

    let role = document.getElementById("role").value;
    let cls = document.getElementById("class").value;
    let sec = document.getElementById("section").value;
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    
    /* Username */
    if(username === ""){
    alert("Enter username");
    return;
    }
    
    /* Admin Login */
    if(role === "admin"){
    
    if(password !== "admin123"){
    alert("Wrong admin password");
    return;
    }
    
    localStorage.setItem("role","admin");
    localStorage.setItem("username",username);
    localStorage.setItem("class","ALL");
    localStorage.setItem("section","ALL");
    
    window.location.href = "dashboard.html";
    return;
    }
    
    /* Normal Roles */
    if(cls === "" || sec === ""){
    alert("Select class and section");
    return;
    }
    
    if(password !== "1234"){
    alert("Wrong password");
    return;
    }
    
    localStorage.setItem("role",role);
    localStorage.setItem("username",username);
    localStorage.setItem("class",cls);
    localStorage.setItem("section",sec);
    
    window.location.href = "dashboard.html";
    }
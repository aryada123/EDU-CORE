let role = localStorage.getItem("role") || "";
let username = localStorage.getItem("username") || "";
let userClass = localStorage.getItem("class") || "";
let section = localStorage.getItem("section") || "";

let key = role === "admin"
? "ALL_DATA"
: "CLASS_" + userClass + "_" + section;

let data = JSON.parse(localStorage.getItem(key)) || {
attendance: [],
marks: [],
posts: [],
complaints: []
};

/* INIT */
window.onload = function () {

let info = role === "admin"
? "Role: Admin"
: "Role: " + role + " | Class " + userClass + "-" + section;

document.getElementById("userInfo").innerText = info;

renderAll();
lockUI();
};

/* PAGE SWITCH */
function showPage(id){
document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

/* SAVE */
function saveData(){
localStorage.setItem(key, JSON.stringify(data));
renderAll();
}

/* LOCK UI */
function lockUI(){

if(role === "student"){
document.querySelectorAll(".action").forEach(x=>{
x.style.display = "none";
});
}

if(role === "parent"){
document.querySelectorAll(".action").forEach(x=>{
x.style.display = "none";
});

let btns = document.querySelectorAll(".action");
if(btns[3]) btns[3].style.display = "block";
}
}

/* DASHBOARD */
function renderAll(){

document.getElementById("studentCount").innerText =
data.attendance.length;

document.getElementById("postCount").innerText =
data.posts.length;

document.getElementById("complaintCount").innerText =
data.complaints.length;

/* Attendance */
document.getElementById("attendanceList").innerHTML =
data.attendance.map(x =>
`<div class="item">${x.name} - ${x.value}%</div>`
).join("");

/* Marks */
document.getElementById("marksList").innerHTML =
data.marks.map(x =>
`<div class="item">${x.exam} | ${x.name} - ${x.value}</div>`
).join("");

/* Posts */
document.getElementById("postList").innerHTML =
data.posts.map(x =>
`<div class="item"><b>${x.user}:</b> ${x.text}</div>`
).join("");

/* Complaints */
document.getElementById("complaintList").innerHTML =
data.complaints.map(x =>
`<div class="item"><b>${x.user}:</b> ${x.text}</div>`
).join("");
}

/* Attendance */
function saveAttendance(){

let name = document.getElementById("attName").value;
let value = document.getElementById("attValue").value;

if(name==="" || value===""){
alert("Fill fields");
return;
}

data.attendance.push({
name:name,
value:value
});

saveData();
}

/* Marks */
function saveMarks(){

let exam = document.getElementById("examType").value;
let name = document.getElementById("markName").value;
let value = document.getElementById("markValue").value;

if(name==="" || value===""){
alert("Fill fields");
return;
}

data.marks.push({
exam:exam,
name:name,
value:value
});

saveData();
}

/* Community */
function addPost(){

let text = document.getElementById("postText").value;

if(text===""){
alert("Write something");
return;
}

data.posts.push({
user:username,
text:text
});

saveData();
}

/* Complaints */
function saveComplaint(){

if(role !== "parent"){
alert("Only parents can submit complaints");
return;
}

let text = document.getElementById("complaintText").value;

if(text===""){
alert("Write complaint");
return;
}

data.complaints.push({
user:username,
text:text
});

saveData();
}

/* Logout */
function logout(){
localStorage.removeItem("role");
localStorage.removeItem("username");
localStorage.removeItem("class");
localStorage.removeItem("section");
window.location.href = "login.html";
}
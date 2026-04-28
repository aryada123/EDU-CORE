// =======================
// INIT
// =======================

let role = localStorage.getItem("role");
let username = localStorage.getItem("username");

// show role on dashboard
if(document.getElementById("roleText")){
document.getElementById("roleText").innerText =
"Role: " + role;
}

// default class
let currentClass = "1-A";

// class change
let classSelect = document.getElementById("classSelect");

if(classSelect){
classSelect.addEventListener("change",(e)=>{
currentClass = e.target.value;
renderAll();
});
}

// =======================
// PERMISSION SYSTEM
// =======================

function canEdit(){
return role === "teacher" || role === "staff";
}

// =======================
// DASHBOARD STATS
// =======================

function updateStats(){

let data = schoolData[currentClass] || {
attendance: [],
marks: [],
messages: [],
posts: []
};

document.getElementById("studentsCount").innerText =
data.attendance.length;

document.getElementById("messageCount").innerText =
data.messages.length;

document.getElementById("postCount").innerText =
data.posts.length;
}

// =======================
// SHOW PAGE
// =======================

function showPage(id){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});

document.getElementById(id).classList.add("active");
}

// =======================
// ATTENDANCE
// =======================

function saveAttendance(){

if(!canEdit()){
alert("Only teacher/staff can edit attendance");
return;
}

let name = document.getElementById("studentName").value;
let val = document.getElementById("studentAttendance").value;

if(!name || !val){
alert("Fill all fields");
return;
}

initClass(currentClass);

schoolData[currentClass].attendance.push({
name:name,
value:val
});

saveAll();
renderAll();
}

// =======================
// MARKS
// =======================

function saveMarks(){

if(!canEdit()){
alert("Only teacher/staff can edit marks");
return;
}

let name = document.getElementById("markName").value;
let val = document.getElementById("markValue").value;

if(!name || !val){
alert("Fill all fields");
return;
}

initClass(currentClass);

schoolData[currentClass].marks.push({
name:name,
value:val
});

saveAll();
renderAll();
}

// =======================
// MESSAGES
// =======================

function sendMessage(){

let msg = document.getElementById("msgText").value;

if(!msg){
alert("Write message");
return;
}

initClass(currentClass);

schoolData[currentClass].messages.push({
user:username,
text:msg
});

saveAll();
renderAll();
}

// =======================
// POSTS
// =======================

function addPost(){

let post = document.getElementById("postText").value;

if(!post){
alert("Write post");
return;
}

initClass(currentClass);

schoolData[currentClass].posts.push({
user:username,
text:post
});

saveAll();
renderAll();
}

// =======================
// RENDER ALL
// =======================

function renderAll(){

let data = schoolData[currentClass];

if(!data) return;

// ATTENDANCE
let aBox = document.getElementById("attendanceList");
if(aBox){
aBox.innerHTML = data.attendance.map(x=>
`<div class="item">${x.name} - ${x.value}%</div>`
).join("");
}

// MARKS
let mBox = document.getElementById("marksList");
if(mBox){
mBox.innerHTML = data.marks.map(x=>
`<div class="item">${x.name} - ${x.value}</div>`
).join("");
}

// MESSAGES
let msgBox = document.getElementById("msgList");
if(msgBox){
msgBox.innerHTML = data.messages.map(x=>
`<div class="item"><b>${x.user}:</b> ${x.text}</div>`
).join("");
}

// POSTS
let pBox = document.getElementById("postList");
if(pBox){
pBox.innerHTML = data.posts.map(x=>
`<div class="item"><b>${x.user}:</b> ${x.text}</div>`
).join("");
}

// STATS
updateStats();

// LOCK UI (view only for students/parents)
if(role === "student" || role === "parent"){
document.querySelectorAll("button.action").forEach(b=>{
b.style.display = "none";
});
}
}

// =======================
// LOGOUT
// =======================

function logout(){
localStorage.clear();
window.location.href = "login.html";
}

// =======================
// INIT RUN
// =======================

renderAll();
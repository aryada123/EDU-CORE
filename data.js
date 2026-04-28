// =======================
// SCHOOL DATA (CLASS WISE)
// =======================

let schoolData = JSON.parse(localStorage.getItem("schoolData")) || {};

// current class will come from dashboard
let currentClass = "1-A";

// =======================
// INIT CLASS IF NOT EXISTS
// =======================

function initClass(cls){
if(!schoolData[cls]){
schoolData[cls] = {
attendance: [],
marks: [],
messages: [],
posts: []
};
}
}

// =======================
// SAVE ALL DATA
// =======================

function saveAll(){
localStorage.setItem("schoolData", JSON.stringify(schoolData));
}

// =======================
// GET CLASS DATA
// =======================

function getClassData(){
initClass(currentClass);
return schoolData[currentClass];
}

// =======================
// ADD ATTENDANCE
// =======================

function addAttendanceData(name, value){
initClass(currentClass);

schoolData[currentClass].attendance.push({
name: name,
value: value
});

saveAll();
}

// =======================
// ADD MARKS
// =======================

function addMarksData(name, value){
initClass(currentClass);

schoolData[currentClass].marks.push({
name: name,
value: value
});

saveAll();
}

// =======================
// ADD MESSAGE
// =======================

function addMessageData(msg){
initClass(currentClass);

schoolData[currentClass].messages.push(msg);

saveAll();
}

// =======================
// ADD POST
// =======================

function addPostData(post){
initClass(currentClass);

schoolData[currentClass].posts.push(post);

saveAll();
}

// =======================
// GET TOTALS
// =======================

function getTotals(){

let cls = getClassData();

return {
attendance: cls.attendance.length,
marks: cls.marks.length,
messages: cls.messages.length,
posts: cls.posts.length
};
}

// =======================
// CLEAR CLASS DATA (OPTIONAL)
// =======================

function clearClass(){
schoolData[currentClass] = {
attendance: [],
marks: [],
messages: [],
posts: []
};

saveAll();
}
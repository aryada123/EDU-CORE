/* EduCore Data System */

function getUserRole(){
    return localStorage.getItem("role") || "";
    }
    
    function getUserClass(){
    return localStorage.getItem("class") || "";
    }
    
    function getUserSection(){
    return localStorage.getItem("section") || "";
    }
    
    /* Storage Key */
    function getStorageKey(){
    
    let role = getUserRole();
    
    if(role === "admin"){
    return "ALL_DATA";
    }
    
    return "CLASS_" + getUserClass() + "_" + getUserSection();
    }
    
    /* Default Structure */
    function defaultData(){
    return {
    attendance: [],
    marks: [],
    posts: [],
    complaints: []
    };
    }
    
    /* Get Data */
    function getData(){
    
    let key = getStorageKey();
    
    let saved = localStorage.getItem(key);
    
    if(saved){
    return JSON.parse(saved);
    }
    
    return defaultData();
    }
    
    /* Save Data */
    function saveData(data){
    
    let key = getStorageKey();
    
    localStorage.setItem(key, JSON.stringify(data));
    }
    
    /* Clear Current Class Data */
    function clearCurrentData(){
    
    let key = getStorageKey();
    
    localStorage.removeItem(key);
    }
    
    /* Reset Full System (Admin Use) */
    function resetSystem(){
    
    if(getUserRole() === "admin"){
    localStorage.clear();
    }
    }
    
    /* Count Helpers */
    function totalAttendance(){
    return getData().attendance.length;
    }
    
    function totalMarks(){
    return getData().marks.length;
    }
    
    function totalPosts(){
    return getData().posts.length;
    }
    
    function totalComplaints(){
    return getData().complaints.length;
    }
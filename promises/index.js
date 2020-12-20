console.log("hello");

const student = [{name : "Jovan", lastname : "Jovanovic",name : "MArko", lastname : "Markovic" }];

function listaAllStudents(){
    let output="";
    students.forEach((student, index) => {
        console.log(student,index);
        output +=`<ul>
        <li>Ime : ${student.name}</li>
        <li>Prezime : ${student.lastname}</li>
        </ul>`
    });
    document.getElementById("studentList").innerHTML = output;
};

function addStudent() {
    setTimeout(function() {
        students.push({name: "Ivan", lastname : "Ivanovic"});
    },2000);
}

addStudent();
listaAllStudents();
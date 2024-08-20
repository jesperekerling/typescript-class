// 1. Add a new course to the student object

type Student = {
    fullName: string,
    courses: string[],
    expelled: boolean,
    email: string
}

const student1 = {
    fullName: "Jesper",
    courses: ["Math", "Science"],
    expelled: false,
    email: "j@j.com"
};

const student2 = {
    fullName: "Jonatan W",
    courses: ["History", "Art"],
    expelled: false,
    email: "j2@j.com"
};

const student3 = {
    fullName: "Mark",
    courses: ["Physics", "Chemistry"],
    expelled: false,
    email: ""
};


console.log(student2.fullName)

function addCourse2(student: Student, course: string) {
    student.courses.push(course)
}  

addCourse2(student2, "HTML/CSS")
console.log(student2)


// 2. Function for expel a student

function expelStudent(student: Student, expelled: true) {
    student.expelled = true
    student.courses = []
}

expelStudent(student3, true)
console.log("Expelled: ",student3)


// 3. Change email of student

const students: Student[] = [student1, student2, student3];

function updateStudentEmail(studentName: string, newEmail: string) {
    for (const student of students) {
        if (student.fullName === studentName) {
            if (student.expelled) {
                console.log(`Cannot update email for expelled student: ${studentName}`);
                return;
            }
            student.email = newEmail;
            console.log(`Updated email for ${studentName}: ${newEmail}`);
            return;
        }
    }
    console.log(`Student not found: ${studentName}`);
}

// Test the function
updateStudentEmail("Anna", "anna.new@example.com");
updateStudentEmail("Mark", "mark.new@example.com");
updateStudentEmail("Jesper", "jesper@example.com");

console.log(students);




// Student Admin System
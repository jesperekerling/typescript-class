// 1. Add a new course to the student object

type Student = {
    fullName: string,
    courses: string[],
    expelled: boolean
}

const student1 = {
    fullName: "Jesper",
    courses: ["Math", "Science"],
    expelled: false
};

const student2 = {
    fullName: "Jonatan W",
    courses: ["History", "Art"],
    expelled: false
};

const student3 = {
    fullName: "Mark",
    courses: ["Physics", "Chemistry"],
    expelled: false
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
}

expelStudent(student3, true)
console.log(student3)
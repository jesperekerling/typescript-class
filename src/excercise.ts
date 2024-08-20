// 1.

const fullName3: string  = "Jesper Ekerling";
const age3:number = 38;
const isStudent: boolean = true
const courses: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB']




// 2.
function introduce (name: string, age: number, student: boolean, courses: string[]) {
    return `Hello my name is ${name}, i am ${age} years old and i am a student: ${student}. I am currently studying the following courses: ${courses.join(', ')}.`
}

console.log(introduce("jesper", 38, true, ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "MongoDB"]))


function addCourse(course: string) {
    courses.push(course)
}
console.log(addCourse("Python"))
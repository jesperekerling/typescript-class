"use strict";
// 1.
const fullName3 = "Jesper Ekerling";
const age3 = 38;
const isStudent = true;
const courses = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB'];
// 2.
function introduce(name, age, student, courses) {
    return `Hello my name is ${name}, i am ${age} years old and i am a student: ${student}. I am currently studying the following courses: ${courses.join(', ')}.`;
}
console.log(introduce("jesper", 38, true, ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "MongoDB"]));
function addCourse(course) {
    courses.push(course);
}
console.log(addCourse("Python"));

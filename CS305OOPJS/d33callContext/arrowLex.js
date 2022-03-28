"use strict";
// fix the code using arrow function and bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach(function(student) {
    
    console.log(this.title + ': ' + student)
    });
    }
   };
   group.showList();

   
//   showList:  function() {
//     this.students.forEach(
//       //function(student){console.log(this.title + ': ' + student);}  //error – ‘this’ is undefined (or window)
//       student => console.log(this.title + ': ' + student) 
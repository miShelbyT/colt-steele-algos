class Student {
	constructor(firstName, lastName, year){
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year
		this.tardies = 0
    this.scores = []
/*the code to the left of the = can be anything we want. 
Now the instantiated student will have attribute of grade.
"this" references the instance of the student.
*/
	}
// class method - utility function for class, not used in instantiation
// static is a class keyword
// Static members (properties and methods) are called without instantiating their class 
static enrollStudents(...students){
// do something
}
// you can call this function on the class but not the instance
// Student.enrollStudents() will work but firstStudent.enrollStudents() will throw an error
// you can pass thru arguments for particular instances if the function is written as such. but the function must be called as a class function



  //instance methods: 
fullName(){
  return `Your full name is ${this.firstName} ${this.lastName}`
  }
  
  markLate(){
  this.tardies += 1
  if(this.tardies > 1 && this.tardies < 4) {
   return `${this.firstName} ${this.lastName} has been late ${this.tardies} times` 
  } else if (this.tardies === 1) {
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} time. Please be reminded to be on time.`
  } else return "YOU ARE EXPELLED!"
  }

  addScore(score) {
    this.scores.push(score)
    return this.scores
  }

  calculateAverage(){
    // add up scores using .reduce()
    let sum = this.scores.reduce((a,b) => a + b)
    // average of scores === sum total / number of scores
    return sum / this.scores.length
  }

}

// instantiation
let firstStudent = new Student("Colt", "Steele", 12)
//or: firstStudent.grade = 12




console.log(firstStudent.addScore(85)) 
console.log(firstStudent.addScore(75)) 
console.log(firstStudent.addScore(95)) 
console.log(firstStudent.calculateAverage()) 

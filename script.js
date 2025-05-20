//complete this code
class Person {
	let name;
	let age;
	Person(String name, Number age){
		this.name=name;
		this.age=age;
	}

	get name(name){
		return this.name;
	}
	get age(age){
		return this.age;
	}
	set name(newName){
		this.name = newName;
	}
	set age(newAge){
		this.age = newAge;
	}
}

class Student extends Person {
	function study(){
		console.log(name + " is studying");
	}
}

class Teacher extends Person {
	function teach(){
		console.log(name + " is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

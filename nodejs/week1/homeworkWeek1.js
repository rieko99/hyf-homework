console.log('===Github version===');

class Person {
	// your code here
  constructor(name, age, nr){
    this.name = name;
    this.age = age;
    this.nr = nr;
  }
  addPhone(phoneNr){
    this.nr = phoneNr;
  }
  call(){
    (this.nr) ? console.log(`Calling ${this.name} at ${this.nr}`) : console.log( `${this.name} has no phone number saved.`)
  }
  birthday(){
    console.log(`Wishing ${this.name} a happy 29th birthday`)
  }
};

// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
// should say "Calling Jimmy at 55551234..."

jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();
// should say "Jill has no phone number saved."







console.log('===Slack version===');

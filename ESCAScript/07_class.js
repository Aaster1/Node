//클래스 정의
class Animal{

  //생성자 정의
  constructor(name,sound){
    this.name = name;
    this.sound = sound;
  }


  //메서드 정의
  makeSound(){
    console.log(`${this.name} says ${this.sound}`);
  }
}

//상속을 이용한 서브클래스 정의

class Dog extends Animal{

  constructor(name){
    super(name,`Woof`)
  }

}


const cat = new Animal(`Cat`,`Meow`)
const dog = new Dog(`Dog`)

cat.makeSound();
dog.makeSound();
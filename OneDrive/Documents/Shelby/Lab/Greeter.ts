export class Greeter {
    name: string; 
   constructor(greeting: string) {
      this.name = greeting;
    }
    greet(name: string) {
      return `${this.name}, ${Greeter}!`;
    }
  }

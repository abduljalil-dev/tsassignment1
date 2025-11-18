
// Problem 1
function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  else if (typeof value === "number") {
    return value * 10;
  }

  else if (typeof value === "boolean") {
    return !value;
  }

  return value;
}


// Problem 2
function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}


// Problem 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}







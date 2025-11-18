
// Solution 1
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


// Solution 2
function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}


// Solution 3
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

// Solution 4
interface Item {
  title: string;
  rating: number;
}
function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}

// Solution 5
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}






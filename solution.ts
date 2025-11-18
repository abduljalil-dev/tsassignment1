
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

//Solution 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}


//Solution 7
function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];


  function exists(array: (string | number)[], value: string | number): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(result, arr1[i])) {
      result.push(arr1[i]);
    }
  }


  for (let i = 0; i < arr2.length; i++) {
    if (!exists(result, arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}

//Solution 8
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // optional percentage (0–100)
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      let total = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = (total * product.discount) / 100;
        total -= discountAmount;
      }

      return total;
    })
    .reduce((sum, current) => sum + current, 0);
}


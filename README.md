
# Interview Questions

### TypeScript-এ interface এবং type-এর পার্থক্য

সংক্ষেপে: interface এবং type দুটোই টাইপ ডেফিনিশন করার জন্য ব্যবহার করা হয়, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে

#### প্রধান পার্থক্যগুলো:-
বেসিক কাজ: উভয়ই অবজেক্টের আকার (shape) বা টাইপ ডিফাইন করতে পারে।
interface সাধারণত অবজেক্টের কাঠামো বর্ণনা করার জন্য ব্যবহৃত হয়।

### Declaration merging:-
interface গুলো বারবার ডিক্লেয়ার করলে TypeScript সেগুলো মিলিয়ে এক করে নেয় — এটা declaration merging নামে পরিচিত এবং অনেক সময় লাইব্রেরি ডিকশনারি বা অ্যাগমেন্টেশনে কাজে লাগে।

type দিয়ে একই নাম বারবার ডিক্লেয়ার করা যায় না — এতে error হবে।

### Union / Intersection সমর্থন:
type দিয়ে সরাসরি ইউনিয়ন (A | B) ও ইন্টারসেকশন (A & B) তৈরি করা যায়।

interface ইন্টারসেকশন সমর্থন করে কিন্তু ইউনিয়ন টাইপ ডায়রেক্টলি interface দিয়ে তৈরি করা যায় না (আপনি আলাদা type রেখে ইউনিয়ন করতে পারেন)।

### Extends / Implements:
interface থেকে extends করতে করা সহজ: interface A extends B { ... }
type ইন্টারসেকশন ব্যবহার করে একই কাজ করে: type A = B & { ... }

ক্লাস implements করতে interface ব্যবহার করা সাধারণত স্বচ্ছ ও প্রচলিত। type-ও implements করা যায় যদি এটি অবজেক্ট টাইপ থাকে।

#### টাইপ এক্সপ্রেশন পাওয়ারফুলনেস:
type আরও ফ্লেক্সিবল — যেমন টুপল টাইপ, mapped types, conditional types ইত্যাদি type-এর মাধ্যমে করা হয়।

### কখন কোনটা ব্যবহার করবেন-
যদি আপনি লাইব্রেরি বা বড় কোডবেসে API বা অবজেক্ট শেপ ডিফাইন করছেন এবং ভবিষ্যতে declaration merging বা বর্ধিতকরণ (augmentation) দরকার হতে পারে → interface বেছে নিন।

যদি আপনি ইউনিয়ন/ইন্টারসেকশন, টুপল, অথবা টাইপ অপারেশন (mapped/conditional) করতে চান → type ব্যবহার করুন।

সাধারণ নিয়ম: অবজেক্ট-স্ট্রাকচার হলে interface ও জেনেরিক/কম্পোজেবল টাইপ হলে type — কিন্তু অনেক ক্ষেত্রেই interchangeable।

## উদাহরণ:
```bash
  // interface উদাহরণ
interface User {
  id: number;
  name: string;
}

// interface extends
interface Admin extends User {
  role: string;
}

// type উদাহরণ (union এবং intersection)
type ID = number | string;
type Person = { name: string } & { age: number };

// declaration merging (interface)
interface Config {
  host: string;
}
interface Config {
  port: number;
}
// এখন Config = { host: string; port: number; }

```
### 2. any, unknown, এবং never টাইপের মধ্যে পার্থক্য:
TypeScript এ তিনটি স্পেশাল টাইপ আছে যেগুলো ব্যবহার ও নিরাপত্তার দিক থেকে আলাদা ভূমিকা পালন করে: any, unknown, এবং never।

### any:
- অর্থ: টাইপ চেকিং পুরোপুরি বন্ধ করে দেয় — any মানে হলো কোনো টাইপ সিস্টেমের বাধ্যবাধকতা নেই।
- ব্যবহার: দ্রুত প্রোটোটাইপিং বা legacy কোডে থ্রো করা হয়। তবে এটি টাইপ সেফটি ভেঙে দেয়।
- অপেক্ষাকৃত ঝুঁকি: ভুল ব্যবহার কোডবেসে runtime error বাড়ায় কারণ টাইপ চেকিং নেই।

উদাহরণ:
```bash
let x: any = 10;
x = "hello";
x.toUpperCase(); // কম্পাইলারে চলবে, কিন্তু runtime-এ যদি ভুল অপারেশন হয় তখন সমস্যা হবে
```
### unknown:
- অর্থ: আপনার কাছে কোনো মান আছে কিন্তু আপনি নিশ্চিত নন এর টাইপ সম্পর্কে — unknown হলো নিরাপদ any।
- ব্যবহার: আপনি আগে কোনো মূল্যে পৌঁছেছেন (যেমন external API), কিন্তু কাজ করার আগে টাইপ চেক বা narrow করতে হবে।

- নিয়ম: unknown টাইপের ভেরিয়েবলকে সরাসরি অপারেশন (properties access/call) করা যায় না — আগে টাইপ-ন্যারো করে নিতে হবে।

উদাহরণ:
```bash
let data: unknown = fetchResult();

if (typeof data === "string") {
  console.log(data.toUpperCase()); // এখন নিরাপদ
}
```

### never
- অর্থ: এই টাইপ নির্দেশ করে—এই ভেরিয়েবল কখনোই কোনো মান নিতে পারবে না (অর্থাৎ কখনোই রিটার্ন করবে না)।

- ব্যবহার: সাধারণত ফাংশন যা সবসময় error throw করে অথবা অনন্ত লুপ যেখানে ফাংশন কখনই সাধারণভাবে রিটার্ন করবে না — তাদের return টাইপ never হয়।

উদাহরণ:
```bash
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```
## শেষ কথা

উপরের উত্তরগুলোতে আমি বাস্তব উদাহরণ ও প্রয়োগিক গাইডলাইন দিয়েছি যাতে আপনি কোড লেখার সময় কোন সিচুয়েশনে কোন টুলটি ভালোভাবে ব্যবহার করবেন তা সহজে বেছে নিতে পারেন।
যদি চান, আমি এই README-এ আপনার solution.ts ফাইলের জন্য একটা টেমপ্লেটও তৈরি করে দিতে পারি যাতে আপনি সরাসরি কোড বসিয়ে সাবমিট করতে পারেন।

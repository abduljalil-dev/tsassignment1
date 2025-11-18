
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

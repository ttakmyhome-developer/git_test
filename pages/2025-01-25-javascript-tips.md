---
title: '실무에서 유용한 JavaScript 팁 10가지'
date: 2025-01-25
tags: ['JavaScript', 'Programming', 'Tips']
category: 'Development'
description: '실무에서 자주 사용하는 JavaScript 코딩 팁과 트릭을 소개합니다.'
---

# 실무에서 유용한 JavaScript 팁 10가지

JavaScript를 더 효율적으로 사용할 수 있는 유용한 팁들을 정리해보았습니다.

## 1. Optional Chaining

객체의 중첩된 속성에 안전하게 접근할 수 있습니다.

```javascript
// Before
const name = user && user.profile && user.profile.name;

// After
const name = user?.profile?.name;
```

## 2. Nullish Coalescing

`null` 또는 `undefined`일 때만 기본값을 사용합니다.

```javascript
// || 연산자는 falsy 값 모두에 대해 기본값 반환
const value = 0 || 'default'; // 'default'

// ?? 연산자는 null/undefined만 체크
const value = 0 ?? 'default'; // 0
```

## 3. Array Destructuring

배열의 요소를 쉽게 추출할 수 있습니다.

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// 값 교환
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```

## 4. Object Shorthand

객체 리터럴을 더 간결하게 작성할 수 있습니다.

```javascript
const name = 'John';
const age = 30;

// Before
const user = {
  name: name,
  age: age,
  greet: function() {
    console.log('Hello');
  }
};

// After
const user = {
  name,
  age,
  greet() {
    console.log('Hello');
  }
};
```

## 5. Template Literals

문자열 보간을 쉽게 할 수 있습니다.

```javascript
const name = 'World';
const greeting = `Hello, ${name}!
This is a multi-line
string.`;
```

## 6. Array Methods

배열을 다루는 강력한 메서드들입니다.

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: 변환
const doubled = numbers.map(n => n * 2);

// filter: 필터링
const evens = numbers.filter(n => n % 2 === 0);

// reduce: 축약
const sum = numbers.reduce((acc, n) => acc + n, 0);

// find: 첫 번째 매칭 요소
const found = numbers.find(n => n > 3); // 4
```

## 7. Spread Operator

배열이나 객체를 펼칠 수 있습니다.

```javascript
// 배열 합치기
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// 객체 병합
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
```

## 8. Async/Await

비동기 코드를 동기처럼 작성할 수 있습니다.

```javascript
// Promise chain
fetch('/api/user')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/await
async function getUser() {
  try {
    const res = await fetch('/api/user');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## 9. Object Destructuring with Defaults

기본값과 함께 객체를 구조 분해할 수 있습니다.

```javascript
function greet({ name = 'Guest', age = 0 } = {}) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet({ name: 'John', age: 30 }); // Hello, John! You are 30 years old.
greet({ name: 'Jane' });          // Hello, Jane! You are 0 years old.
greet();                          // Hello, Guest! You are 0 years old.
```

## 10. Dynamic Property Names

동적으로 속성 이름을 지정할 수 있습니다.

```javascript
const key = 'username';
const value = 'john_doe';

const user = {
  [key]: value,
  [`${key}_verified`]: true
};

console.log(user);
// { username: 'john_doe', username_verified: true }
```

## 마치며

이러한 JavaScript 기능들을 활용하면 더 깔끔하고 읽기 쉬운 코드를 작성할 수 있습니다. 실무에서 자주 사용하게 되는 패턴들이니 익혀두시면 좋습니다!


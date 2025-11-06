---
title: '모던 웹 개발 시작하기'
date: 2025-01-24
tags: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Tutorial']
category: 'Development'
description: '모던 웹 개발의 기초부터 배포까지 전체 과정을 알아봅니다.'
---

# 모던 웹 개발 시작하기

웹 개발을 처음 시작하는 분들을 위한 가이드입니다. 기초부터 배포까지 전체 과정을 살펴보겠습니다.

## 웹 개발의 기초

웹 개발은 크게 세 가지 기술로 이루어집니다:

- **HTML**: 구조 (Structure)
- **CSS**: 스타일 (Style)
- **JavaScript**: 동작 (Behavior)

## HTML - 웹의 골격

HTML은 웹 페이지의 구조를 정의합니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <h1>Welcome</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Content goes here...</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
</body>
</html>
```

### 시맨틱 HTML

의미 있는 태그를 사용하면 SEO와 접근성이 향상됩니다:

- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`

## CSS - 스타일링

CSS로 웹 페이지를 아름답게 꾸밀 수 있습니다.

```css
/* CSS 변수 사용 */
:root {
  --primary-color: #3498db;
  --text-color: #333;
  --spacing: 1rem;
}

/* Flexbox 레이아웃 */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

/* 그리드 레이아웃 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### CSS 팁

1. **Flexbox**: 1차원 레이아웃 (행 또는 열)
2. **Grid**: 2차원 레이아웃 (행과 열)
3. **CSS 변수**: 재사용 가능한 값
4. **미디어 쿼리**: 반응형 디자인

## JavaScript - 인터랙티브 기능

JavaScript로 웹 페이지에 동적 기능을 추가합니다.

```javascript
// DOM 조작
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Fetch API로 데이터 가져오기
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// 로컬 스토리지 사용
localStorage.setItem('username', 'john_doe');
const username = localStorage.getItem('username');
```

## 모던 웹 개발 도구

### 1. 버전 관리 - Git

```bash
# 저장소 초기화
git init

# 변경사항 커밋
git add .
git commit -m "Initial commit"

# GitHub에 푸시
git push origin main
```

### 2. 패키지 관리 - npm

```bash
# package.json 생성
npm init -y

# 패키지 설치
npm install package-name

# 개발 의존성 설치
npm install --save-dev package-name
```

### 3. 번들러 - Vite

```bash
# Vite 프로젝트 생성
npm create vite@latest my-app

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 배포하기

### GitHub Pages

1. GitHub 저장소 생성
2. 코드 푸시
3. Settings > Pages에서 배포 설정

### Netlify

1. GitHub 연동
2. 빌드 설정
3. 자동 배포

### Vercel

1. GitHub 연동
2. 프로젝트 import
3. 자동 배포

## 학습 로드맵

### 초급
1. HTML/CSS 기초
2. JavaScript 기본 문법
3. DOM 조작
4. Git 기초

### 중급
1. JavaScript ES6+
2. Async/Await
3. REST API
4. 프레임워크 (React, Vue 등)

### 고급
1. TypeScript
2. 상태 관리 (Redux, Zustand 등)
3. 테스팅 (Jest, Testing Library)
4. 성능 최적화

## 추천 리소스

### 문서
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)

### 연습
- [freeCodeCamp](https://www.freecodecamp.org/)
- [Frontend Mentor](https://www.frontendmentor.io/)

### 커뮤니티
- [Stack Overflow](https://stackoverflow.com/)
- [Dev.to](https://dev.to/)

## 마치며

웹 개발은 지속적인 학습이 필요한 분야입니다. 기초를 탄탄히 하고, 꾸준히 프로젝트를 만들어보면서 실력을 키워나가세요!

Happy coding! 🚀


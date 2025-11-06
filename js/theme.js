// 다크/라이트 모드 토글
(function () {
  const THEME_KEY = 'blog-theme';
  const themeToggle = document.getElementById('theme-toggle');

  // 저장된 테마 또는 시스템 설정 확인
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }

    // 시스템 다크모드 확인
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }

    return 'light';
  }

  // 테마 적용
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    // 버튼 아이콘 업데이트
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  // 테마 토글
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }

  // 초기 테마 적용
  applyTheme(getInitialTheme());

  // 이벤트 리스너
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // 시스템 테마 변경 감지
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();


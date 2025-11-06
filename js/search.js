// 검색 유틸리티 (향후 확장 가능)
// 현재는 app.js에서 기본 검색 기능을 처리합니다.
// 이 파일은 향후 고급 검색 기능 (예: 퍼지 검색, 검색 하이라이팅 등)을 위해 예약되어 있습니다.

(function () {
  // 검색 결과 하이라이팅 (향후 구현)
  function highlightSearchResults(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // 퍼지 검색 스코어 계산 (향후 구현)
  function calculateSearchScore(post, query) {
    let score = 0;
    const lowerQuery = query.toLowerCase();
    
    // 제목 매치 (가중치 높음)
    if (post.title.toLowerCase().includes(lowerQuery)) {
      score += 10;
    }
    
    // 태그 매치
    if (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
      score += 5;
    }
    
    // 내용 매치
    if ((post.excerpt || '').toLowerCase().includes(lowerQuery)) {
      score += 3;
    }
    
    return score;
  }

  // 검색어 제안 (향후 구현)
  function getSuggestions(posts, query) {
    const suggestions = new Set();
    const lowerQuery = query.toLowerCase();
    
    posts.forEach(post => {
      // 제목에서 제안
      const titleWords = post.title.toLowerCase().split(' ');
      titleWords.forEach(word => {
        if (word.startsWith(lowerQuery) && word.length > query.length) {
          suggestions.add(word);
        }
      });
      
      // 태그에서 제안
      if (post.tags) {
        post.tags.forEach(tag => {
          if (tag.toLowerCase().startsWith(lowerQuery)) {
            suggestions.add(tag);
          }
        });
      }
    });
    
    return Array.from(suggestions).slice(0, 5);
  }

  // 전역으로 노출 (필요시 사용)
  window.searchUtils = {
    highlightSearchResults,
    calculateSearchScore,
    getSuggestions
  };
})();


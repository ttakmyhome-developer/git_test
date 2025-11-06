// 메인 애플리케이션 로직
(function () {
  let allPosts = [];
  let filteredPosts = [];
  let selectedTag = null;

  // posts.json 로딩
  async function loadPosts() {
    try {
      const response = await fetch('posts.json');
      if (!response.ok) {
        throw new Error('Failed to load posts');
      }
      allPosts = await response.json();
      filteredPosts = [...allPosts];
      renderPosts();
      renderTags();
    } catch (error) {
      console.error('Error loading posts:', error);
      showEmptyState('게시글을 불러올 수 없습니다.');
    }
  }

  // 게시글 목록 렌더링
  function renderPosts() {
    const postsList = document.getElementById('posts-list');
    if (!postsList) return;

    if (filteredPosts.length === 0) {
      showEmptyState('게시글이 없습니다.');
      return;
    }

    postsList.innerHTML = filteredPosts
      .map(
        (post) => `
      <li class="post-item">
        <h2 class="post-title">
          <a href="post.html?post=${encodeURIComponent(post.file)}">${escapeHtml(post.title)}</a>
        </h2>
        <div class="post-meta">
          <span class="post-date">${formatDate(post.date)}</span>
          ${post.category ? `<span class="post-category">${escapeHtml(post.category)}</span>` : ''}
        </div>
        ${post.description || post.excerpt ? `<p class="post-excerpt">${escapeHtml(post.description || post.excerpt)}</p>` : ''}
        ${post.tags && post.tags.length > 0 ? `<div class="post-tags">${post.tags.map((tag) => `<span class="tag" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
      </li>
    `
      )
      .join('');

    // 태그 클릭 이벤트
    document.querySelectorAll('.post-tags .tag').forEach((tagEl) => {
      tagEl.addEventListener('click', (e) => {
        const tag = e.target.getAttribute('data-tag');
        filterByTag(tag);
      });
    });
  }

  // 태그 필터 렌더링
  function renderTags() {
    const tagFilter = document.getElementById('tag-filter');
    if (!tagFilter) return;

    const tagsSet = new Set();
    allPosts.forEach((post) => {
      if (post.tags) {
        post.tags.forEach((tag) => tagsSet.add(tag));
      }
    });

    const tags = Array.from(tagsSet).sort();

    if (tags.length === 0) {
      tagFilter.style.display = 'none';
      return;
    }

    tagFilter.innerHTML = tags
      .map(
        (tag) =>
          `<span class="tag ${selectedTag === tag ? 'active' : ''}" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>`
      )
      .join('');

    // 태그 클릭 이벤트
    tagFilter.querySelectorAll('.tag').forEach((tagEl) => {
      tagEl.addEventListener('click', (e) => {
        const tag = e.target.getAttribute('data-tag');
        filterByTag(selectedTag === tag ? null : tag);
      });
    });
  }

  // 태그로 필터링
  function filterByTag(tag) {
    selectedTag = tag;
    if (tag) {
      filteredPosts = allPosts.filter((post) => post.tags && post.tags.includes(tag));
    } else {
      filteredPosts = [...allPosts];
    }
    renderPosts();
    renderTags();
  }

  // 검색
  function setupSearch() {
    const searchBox = document.getElementById('search-box');
    if (!searchBox) return;

    searchBox.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (!query) {
        filteredPosts = selectedTag
          ? allPosts.filter((post) => post.tags && post.tags.includes(selectedTag))
          : [...allPosts];
      } else {
        const baseList = selectedTag
          ? allPosts.filter((post) => post.tags && post.tags.includes(selectedTag))
          : allPosts;

        filteredPosts = baseList.filter((post) => {
          const titleMatch = post.title.toLowerCase().includes(query);
          const excerptMatch = (post.excerpt || '').toLowerCase().includes(query);
          const descMatch = (post.description || '').toLowerCase().includes(query);
          const tagsMatch = post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query));
          const categoryMatch = (post.category || '').toLowerCase().includes(query);

          return titleMatch || excerptMatch || descMatch || tagsMatch || categoryMatch;
        });
      }

      renderPosts();
    });
  }

  // 빈 상태 표시
  function showEmptyState(message) {
    const postsList = document.getElementById('posts-list');
    if (postsList) {
      postsList.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📭</div>
          <p>${escapeHtml(message)}</p>
        </div>
      `;
    }
  }

  // 날짜 포맷
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  // HTML 이스케이프
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // 초기화
  if (document.getElementById('posts-list')) {
    loadPosts();
    setupSearch();
  }
})();


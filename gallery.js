const ITEMS_PER_PAGE = 20; // 1ページあたりの表示数
let currentPage = 1;
let loading = false;

// ギャラリーの初期化
function initializeGallery() {
    const galleryContainer = document.querySelector('.gallery');
    
    // 最初のページを読み込み
    loadGalleryPage(currentPage);
    
    // Intersection Observerの設定
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !loading) {
                currentPage++;
                loadGalleryPage(currentPage);
            }
        });
    }, { threshold: 0.1 });
    
    // 監視要素の追加
    const sentinel = document.createElement('div');
    sentinel.id = 'sentinel';
    galleryContainer.appendChild(sentinel);
    observer.observe(sentinel);
}

// ページ単位でギャラリーアイテムを読み込む
function loadGalleryPage(page) {
    loading = true;
    const galleryContainer = document.querySelector('.gallery');
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const items = GALLERY_ITEMS.slice(start, end);
    
    if (items.length === 0) {
        loading = false;
        return;
    }
    
    items.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryContainer.insertBefore(galleryItem, document.getElementById('sentinel'));
    });
    
    loading = false;
}

// ギャラリーアイテムの作成（Lazy Loading対応）
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.onclick = () => openModal(item.src, item.title);
    
    div.innerHTML = `
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
             data-src="${item.src}"
             alt="${item.title}"
             loading="lazy">
        <div class="overlay">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
        <div class="loading-placeholder"></div>
    `;
    
    // 画像の遅延読み込み
    const img = div.querySelector('img');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.src = img.dataset.src;
                observer.unobserve(img);
                img.onload = () => {
                    div.querySelector('.loading-placeholder').style.display = 'none';
                };
            }
        });
    });
    observer.observe(img);
    
    return div;
}

// モーダルを開く
function openModal(imageSrc, title) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const downloadBtn = document.getElementById('downloadBtn');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalImg.alt = title;
    downloadBtn.href = imageSrc;
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', handleEscKey);
}

// モーダルを閉じる
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.removeEventListener('keydown', handleEscKey);
}

// ESCキーのハンドリング
function handleEscKey(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

// モーダル外をクリックして閉じる
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', initializeGallery);

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', initializeGallery);
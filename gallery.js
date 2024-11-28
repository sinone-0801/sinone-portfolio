// ギャラリーの初期化
function initializeGallery() {
    const galleryContainer = document.querySelector('.gallery');
    GALLERY_ITEMS.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryContainer.appendChild(galleryItem);
    });
}

// ギャラリーアイテムの作成
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.onclick = () => openModal(item.src, item.title);
    
    div.innerHTML = `
        <img src="${item.src}" alt="${item.title}">
        <div class="overlay">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
    
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
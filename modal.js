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
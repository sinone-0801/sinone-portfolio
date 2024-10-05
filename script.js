document.addEventListener('DOMContentLoaded', () => {
    // ナビゲーションのスムーズスクロール
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // プロジェクトセクションのホバーエフェクト
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'scale(1.05)';
            project.style.transition = 'transform 0.3s ease';
        });
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'scale(1)';
        });
    });

    // コンタクトフォームの送信処理
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('メッセージが送信されました！（実際の送信処理は実装されていません）');
        contactForm.reset();
    });

    // サイケデリックな背景アニメーション
    const body = document.body;
    let hue = 0;
    function animateBackground() {
        hue = (hue + 1) % 360;
        body.style.filter = `hue-rotate(${hue}deg)`;
        requestAnimationFrame(animateBackground);
    }
    animateBackground();
});
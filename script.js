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

    // Formspreeを使用したフォーム送信
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const status = document.createElement('div');
        status.classList.add('form-status');
        form.appendChild(status);

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "ありがとうございます！メッセージが送信されました。";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "申し訳ありませんが、エラーが発生しました。後でもう一度お試しください。";
                    }
                });
            }
        }).catch(error => {
            status.innerHTML = "申し訳ありませんが、エラーが発生しました。後でもう一度お試しください。";
        });
    });
});
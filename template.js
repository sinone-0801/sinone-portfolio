// アクセスキーの設定
const SPECIAL_KEY = '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069';

// URLパラメータからモードとキーを取得する関数
function getMode() {
    const params = new URLSearchParams(window.location.search);
    const accessKey = params.get('key');
    const requestedMode = params.get('mode');

    // nishinoモードの場合は特別なキーが必要
    if (requestedMode === 'nishino') {
        if (accessKey === SPECIAL_KEY) {
            return 'nishino';
        } else {
            // 無効なキーの場合は自動的にsinonモードにリダイレクト
            redirect('sinon');
            return 'sinon';
        }
    }

    // デフォルトはsinon
    return 'sinon';
}

// リダイレクト関数
function redirect(mode) {
    const url = new URL(window.location);
    url.searchParams.set('mode', mode);
    url.searchParams.delete('key'); // キーを削除
    window.history.replaceState({}, '', url);
}

// コンテンツを動的に更新する関数
function updateDynamicContent(config) {
    // 名前の更新
    document.querySelectorAll('.dynamic-name').forEach(el => {
        el.textContent = config.name;
    });

    // プロフィール画像の更新
    const profileImage = document.querySelector('.dynamic-image');
    if (profileImage) {
        profileImage.src = config.icon_path;
        profileImage.alt = `AI生成による${config.name_short}の肖像画`;
    }

    // ページタイトルとmeta情報の更新
    document.title = `${config.name} のポートフォリオ | 生物学者 × フリーランスエンジニア`;
    
    // metaタグの更新（存在する場合のみ）
    const metaTags = {
        'meta[name="title"]': document.title,
        'meta[property="og:title"]': document.title,
        'meta[property="twitter:title"]': document.title
    };

    Object.entries(metaTags).forEach(([selector, content]) => {
        const element = document.querySelector(selector);
        if (element) element.content = content;
    });
}

// ページ構築関数
function buildPage() {
    const mode = getMode();
    const config = CONFIG[mode];

    if (config) {
        updateDynamicContent(config);
    } else {
        console.error('Invalid mode:', mode);
    }
}

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', () => {
    buildPage();
    
    // 画像読み込みエラーのハンドリング
    const profileImage = document.querySelector('.dynamic-image');
    if (profileImage) {
        profileImage.onerror = function() {
            console.error('Failed to load image:', this.src);
            // フォールバック画像を設定することもできます
            // this.src = 'images/default.jpg';
        };
    }
});

// ブラウザの戻る・進む対応
window.addEventListener('popstate', buildPage);
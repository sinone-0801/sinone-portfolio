// アクセスキーの生成 - SHA-256ハッシュの一部を使用
const SPECIAL_KEY = '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069';

// URLパラメータからモードとキーを取得する関数
function getMode() {
    const params = new URLSearchParams(window.location.search);
    const accessKey = params.get('key');
    const requestedMode = params.get('mode');

    // nishinoモードの場合は特別なキーが必要
    if (requestedMode === 'nishino') {
        if (accessKey === SPECIAL_KEY) {
            // 正しいキーの場合、セッションストレージにアクセス記録を保存
            sessionStorage.setItem('authenticated', 'true');
            return 'nishino';
        } else {
            // 無効なキーの場合は自動的にsinonモードにリダイレクト
            redirect('sinon');
            return 'sinon';
        }
    }

    // セッションストレージに認証記録がある場合はnishinoモードを許可
    if (sessionStorage.getItem('authenticated') === 'true' && requestedMode === 'nishino') {
        return 'nishino';
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

// ページを構築する関数
function buildPage() {
    const mode = getMode();
    const config = CONFIG[mode];
    const contentDiv = document.getElementById('content');

    // 各セクションをテンプレートに適用して順序通りに結合
    const pageContent = [
        TEMPLATE.header,
        TEMPLATE.mainStart,  // mainタグの開始
        TEMPLATE.about,
        TEMPLATE.skills,
        TEMPLATE.projects,
        TEMPLATE.aiGallery,
        TEMPLATE.contact,
        TEMPLATE.mainEnd,    // mainタグの終了
        TEMPLATE.footer
    ].map(template => applyTemplate(template, config)).join('');

    contentDiv.innerHTML = pageContent;
    document.title = `${config.name} のポートフォリオ - 生物学者 & エンジニア`;

    // スクロール位置の復元
    restoreScrollPosition();
}

// スクロール位置を保存
function saveScrollPosition() {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
}

// スクロール位置を復元
function restoreScrollPosition() {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('scrollPosition');
    }
}

// ハッシュ変更時のスクロール処理
function handleHashChange() {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// ページ読み込み時の初期化
function initializePage() {
    buildPage();
    window.addEventListener('hashchange', handleHashChange);
    
    // 初期ハッシュがある場合の処理
    if (window.location.hash) {
        setTimeout(handleHashChange, 100);
    }
}

// モード切替関数
function switchMode(mode) {
    // nishinoモードへの切り替えは認証済みの場合のみ許可
    if (mode === 'nishino' && sessionStorage.getItem('authenticated') !== 'true') {
        return;
    }
    
    // スクロール位置を保存
    saveScrollPosition();
    
    const url = new URL(window.location);
    url.searchParams.set('mode', mode);
    window.history.pushState({}, '', url);
    buildPage();
}

// ブラウザの戻る・進む対応
window.addEventListener('popstate', buildPage);

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', initializePage);

// セッションストレージクリア（ブラウザを閉じた時）
window.addEventListener('unload', () => {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('scrollPosition');
});
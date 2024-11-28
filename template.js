const TEMPLATE = {
    header: `
        <header>
            <h1>{{name}} のポートフォリオ</h1>
            <p class="subtitle">生物学者 × フリーランスエンジニア</p>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#ai-gallery">AI Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    `,
    mainStart: `
        <main>
    `,
    about: `
        <section id="about">
            <h2>About Me</h2>
            <img src="{{icon_path}}" alt="AI生成による{{name_short}}の肖像画" class="profile-image">
            <p>博士（学術）を生物学（進化・共生）の研究で取得し、大学で勤務する傍ら、フリーランスエンジニアとして活動しています。生物学の知見とプログラミングスキルを融合させ、革新的なソリューションを生み出すことに情熱を注いでいます。</p>
            <p>将来の目標は、より良いインターネットコミュニティを形成するシステムの開発です。生物の共生システムから学んだ知見を活かし、人々がより健全に交流できる場を創造したいと考えています。</p>
        </section>
    `,
    skills: `
        <section id="skills">
            <h2>Skills</h2>
            <div class="skills-container">
                <div class="skill-category">
                    <h3>研究スキル</h3>
                    <ul>
                        <li>進化生物学</li>
                        <li>共生生物学</li>
                        <li>データ分析・統計</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>プログラミング</h3>
                    <ul>
                        <li>Web開発（HTML, CSS, JavaScript）</li>
                        <li>Python・C++・C#</li>
                        <li>機械学習・AI実装</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>その他</h3>
                    <ul>
                        <li>SNSボット開発</li>
                        <li>生成AI活用</li>
                        <li>科学コミュニケーション</li>
                    </ul>
                </div>
            </div>
        </section>
    `,
    projects: `
        <section id="projects">
            <h2>Projects</h2>
            <div class="project">
                <h3>AI搭載SNSボット - シノンJr.</h3>
                <img src="sinone_jr_icon.jpg" alt="AI搭載SNSボットのイメージ" class="project-image">
                <p>機械学習を活用して、ユーザーと対話するSNSボット。自然言語処理技術を用いて、ユーザーの興味に合わせた情報提供や対話を行います。</p>
                <a href="https://bsky.app/profile/sinone-jr.bsky.social" target="_blank" class="project-link">シノンJr.をBlueskyで見る</a>
            </div>
            <div class="project">
                <h3>マルチトラックオーディオミキサ</h3>
                <img src="multi-track-player.png" alt="オーディオミキサのインターフェース" class="project-image">
                <p>複数のオーディオファイルを web ブラウザで同時に、独立して再生可能です。さらにループ機能や、再ループまでの待機時間設定なども実装。</p>
                <a href="https://sinone-0801.github.io/multi_track_player" target="_blank" class="project-link">マルチトラックオーディオミキサを使う</a>
            </div>
            <div class="project">
                <h3>ビジュアルWeb辞書</h3>
                <img src="dictionary-ui.png" alt="ぱらぱらめくれるオンライン辞書のインターフェース" class="project-image">
                <p>実際の本をめくるような体験を提供するオンライン辞書UI。アニメーションとインタラクティブな要素を組み合わせ、直感的な操作感を実現しています。</p>
                <a href="https://sinone-0801.github.io/visual-web-dictionary/" target="_blank" class="project-link">ビジュアルWeb辞書を見る</a>
            </div>
            <div class="project">
                <h3>Discord 連携 e-ラーニングシステム</h3>
                <img src="e-learning.png" alt="Discord連携Eラーニングシステムのインターフェース" class="project-image">
                <p>Discord と連携した e-ラーニングのシステム。学習とテストの機能があり、テストに合格すると Discord のロールが付与されます。</p>
            </div>
            <div class="project">
                <h3>その他</h3>
                <p>Line と連携した在庫管理・受注発注システム。</p>
                <p>QR コードを改変して、面積当たりの情報量を増やした QR コード様システム。</p>
                <p>生成 AI と音声読み上げ AI を連携した会話 bot。</p>
                <p>科学的な文章の添削・評価をしてくれる添削 AI。</p>
                <p>BLAST 検索を利用した生物の DNA 配列から生物種の推定を高精度で行うシステム。</p>
                <p>統計・作図システム。</p>
                <p>即時学習によって変化するボードゲーム AI。</p>
            </div>
        </section>
    `,
    aiGallery: `
        <section id="ai-gallery">
            <h2>AI Generated Gallery</h2>
            <p>生成AIを使用して作成した画像ギャラリーです。</p>
            <div class="gallery">
                <div class="gallery-item" onclick="openModal('images/img1.png', 'サンプル画像1')">
                    <img src="images/img1.png" alt="AIで生成したイメージ1">
                    <div class="overlay">
                        <h3>サンプル画像1</h3>
                        <p>クリックして拡大</p>
                    </div>
                </div>
                <div class="gallery-item" onclick="openModal('images/img2.png', 'サンプル画像2')">
                    <img src="images/img2.png" alt="AIで生成したイメージ2">
                    <div class="overlay">
                        <h3>サンプル画像2</h3>
                        <p>クリックして拡大</p>
                    </div>
                </div>
                <div class="gallery-item" onclick="openModal('images/img3.png', 'サンプル画像3')">
                    <img src="images/img3.png" alt="AIで生成したイメージ3">
                    <div class="overlay">
                        <h3>サンプル画像3</h3>
                        <p>クリックして拡大</p>
                    </div>
                </div>
                <div class="gallery-item" onclick="openModal('images/img4.png', 'サンプル画像4')">
                    <img src="images/img4.png" alt="AIで生成したイメージ4">
                    <div class="overlay">
                        <h3>サンプル画像4</h3>
                        <p>クリックして拡大</p>
                    </div>
                </div>
                <div class="gallery-item" onclick="openModal('images/img5.jpg', 'サンプル画像5')">
                    <img src="images/img5.jpg" alt="AIで生成したイメージ5">
                    <div class="overlay">
                        <h3>サンプル画像5</h3>
                        <p>クリックして拡大</p>
                    </div>
                </div>
                <div class="gallery-item" onclick="openModal('images/img6.jpg', 'サンプル画像6')">
                    <img src="images/img6.jpg" alt="AIで生成したイメージ6">
                    <div class="overlay">
                        <h3>サンプル画像6</h3>
                        <p>クリックして拡大</p>
                    </div>
                </div>
            </div>
            <a href="./gallery.html" class="view-all-btn">ギャラリーをすべて見る</a>
        </section>
        
        <!-- Modal -->
        <div id="imageModal" class="modal">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <div class="modal-content">
                <img id="modalImage" src="" alt="">
                <a id="downloadBtn" href="" download class="download-btn">画像をダウンロード</a>
            </div>
        </div>
    `,
    contact: `
        <section id="contact">
            <h2>Contact</h2>
            <p>プロジェクトの依頼や共同研究のご提案など、お気軽にお問い合わせください。</p>
            <div class="google-form-container">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYf77B1bYW2M_j_H7hLSe4MMIZOX8TDa0k-Ok8vv2xPlytPw/viewform?usp=sf_link"
                        width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">
                    読み込んでいます…
                </iframe>
            </div>
        </section>
    `,
    mainEnd: `
        </main>
    `,
    footer: `
        <footer>
            <p>&copy; 2024 {{name}} - 生物学者 & エンジニア</p>
        </footer>
    `
};

// テンプレート適用関数
function applyTemplate(template, config) {
    return template
        .replace(/{{name}}/g, config.name)
        .replace(/{{name_short}}/g, config.name_short)
        .replace(/{{icon_path}}/g, config.icon_path);
}
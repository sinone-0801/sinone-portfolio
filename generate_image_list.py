import os
import json

def generate_image_list():
    # imagesディレクトリ内の画像ファイルを取得
    image_dir = "images"
    image_files = [f for f in os.listdir(image_dir) 
                   if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp'))]
    
    # 画像データを生成
    gallery_items = []
    for i, image in enumerate(sorted(image_files), 1):
        # ファイル名から拡張子を除いたものをタイトルとして使用
        title = os.path.splitext(image)[0].replace('_', ' ').replace('-', ' ').title()
        
        gallery_items.append({
            'id': i,
            'src': f"images/{image}",
            'title': title,
            'description': f"AI生成による作品 {i}"
        })
    
    # JavaScriptファイルとして出力
    js_content = f"const GALLERY_ITEMS = {json.dumps(gallery_items, indent=2, ensure_ascii=False)};"
    
    with open('gallery-data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)

if __name__ == "__main__":
    generate_image_list()
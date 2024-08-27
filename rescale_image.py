from PIL import Image
import os

for root, _, files in os.walk('images'):
    for i, file in enumerate(files):
        if (os.path.splitext(file)[1] == '.jpg') & ('Gallery' in root):
            img = Image.open(os.path.join(root, file))
            width, height = img.size
            max_size = max(width, height)
            
            if width == max_size:
                img = img.resize((1200, int(1200 * height / max_size)))
            else:
                img = img.resize((int(1200 * width / max_size), 1200))
            
            save_dir = root.replace('images', 'images-temp')
            os.makedirs(save_dir, exist_ok=True)
            prefix = os.path.basename(save_dir).lower().replace(" ", "_")
            img.save(os.path.join(save_dir, prefix + '_img' + str(i)) + '.jpg', dpi=(72,72))
from PIL import Image
import os

for root, _, files in os.walk('images_copie'):
    for file in files:
        if (os.path.splitext(file)[1] in ['.jpg', '.png']):
            jpg_image = Image.open(os.path.join(root, file))
            save_dir = root.replace('images', 'images-temp')
            os.makedirs(save_dir, exist_ok=True)
            jpg_image.save(os.path.join(save_dir, os.path.splitext(file)[0]) + '.webp', 'WEBP', quality=95)
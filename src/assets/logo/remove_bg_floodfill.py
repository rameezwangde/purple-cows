from PIL import Image
from collections import deque

def remove_outer_white(image_path, output_path, threshold=220):
    img = Image.open(image_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    q = deque()
    
    # Start flood fill from the corners
    corners = [(0,0), (width-1,0), (0,height-1), (width-1,height-1)]
    for cx, cy in corners:
        r, g, b, a = pixels[cx, cy]
        if r > threshold and g > threshold and b > threshold:
            q.append((cx, cy))
            pixels[cx, cy] = (255, 255, 255, 0)
            
    directions = [(1,0), (-1,0), (0,1), (0,-1)]
    
    # Flood fill
    while q:
        x, y = q.popleft()
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height:
                r, g, b, a = pixels[nx, ny]
                # If it's a non-transparent white-ish pixel
                if a != 0 and r > threshold and g > threshold and b > threshold:
                    pixels[nx, ny] = (255, 255, 255, 0)
                    q.append((nx, ny))
                    
    img.save(output_path, "PNG")

if __name__ == "__main__":
    input_path = r"c:\Users\RAMEEZ\OneDrive\Desktop\purple cow\src\assets\logo\purple-cow-logo-transparent.png"
    remove_outer_white(input_path, input_path)
    print("Flood fill complete!")

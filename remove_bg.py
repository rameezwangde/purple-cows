from PIL import Image

def remove_bg(input_path, output_path):
    img = Image.open(input_path).convert('RGBA')
    pixels = img.load()
    width, height = img.size

    queue = []
    visited = set()

    # Add borders to queue
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    visited.update(queue)

    idx = 0
    while idx < len(queue):
        x, y = queue[idx]
        idx += 1
        c = pixels[x, y]
        
        # If it's a white-ish pixel
        if c[0] > 220 and c[1] > 220 and c[2] > 220:
            pixels[x, y] = (255, 255, 255, 0)
            
            # Check neighbors
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))

    img.save(output_path, 'PNG')
    print("Done")

if __name__ == '__main__':
    remove_bg('src/assets/logo/purple-cow-logo-new.jpg', 'src/assets/logo/purple-cow-logo-transparent.png')

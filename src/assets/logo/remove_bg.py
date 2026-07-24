from PIL import Image

def remove_white_bg(image_path, output_path, threshold=240):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # item is (R, G, B, A)
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # White-ish pixel -> Transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    import sys
    try:
        input_path = r"c:\Users\RAMEEZ\OneDrive\Desktop\purple cow\src\assets\logo\purple-cow-logo-transparent.png"
        remove_white_bg(input_path, input_path)
        print("Successfully removed background!")
    except Exception as e:
        print(f"Error: {e}")

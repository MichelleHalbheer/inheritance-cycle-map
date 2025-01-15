import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

# Load the image
image = np.array(Image.open("src/assets/alagaesia_reimagined.png"))
image_height = image.shape[0]  # Get the image height

def onclick(event):
    if event.xdata is not None and event.ydata is not None:
        # Get original coordinates regardless of zoom/pan
        original_coords = ax.transData.inverted().transform((event.x, event.y))
        original_x, original_y = int(original_coords[0]), int(original_coords[1])

        # Adjust the y-coordinate to count from the bottom-left
        flipped_y = image_height - original_y

        print(f"[{flipped_y}, {original_x}],")

# Display the image
fig, ax = plt.subplots()
ax.imshow(image)
cid = fig.canvas.mpl_connect('button_press_event', onclick)

plt.show()

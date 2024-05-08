const image = document.getElementById('myImage');
const button = document.getElementById('changeButton');

button.addEventListener('click', function() {
    if (image.src === "https://t1z.li/9CXQBe") {
        image.src = "https://t1z.li/p9gA9e";
    } else {
        image.src = "https://t1z.li/3nb9P6";
      }
    });
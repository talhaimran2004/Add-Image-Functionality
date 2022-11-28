const fileInput = document.querySelector("#file-input");
var uploadedImage = ''

fileInput.addEventListener("change", function() {
  const reader = new FileReader();

    var box = document.getElementById('box');
    var li = document.createElement('li');
    li.setAttribute('class', 'w-36')
    var img = document.createElement('img');

  reader.addEventListener("load", () => {
    var uploadedImage = reader.result;
    img.src = uploadedImage;

    box.appendChild(li);
    li.appendChild(img);

  });
  reader.readAsDataURL(this.files[0]);
});
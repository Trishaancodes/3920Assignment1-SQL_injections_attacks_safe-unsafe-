function logout() {
    window.location.href = "/logout";
  }
  
  window.onload = function () {
    const imagePlaceholder = document.querySelector(".image-placeholder");

    const images = ["/images/dog1.jpg", "/images/dog2.jpg", "/images/dog3.jpeg"];;
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const imgElement = document.createElement("img");
    imgElement.src = randomImage;

    imagePlaceholder.appendChild(imgElement);
};
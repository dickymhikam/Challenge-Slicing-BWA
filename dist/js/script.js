// set hamburger button
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#mobile-menu'); // Perbaikan typo

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// set photo 
const photoInput = document.getElementById("photoInput");
  const photoPreview = document.getElementById("photoPreview");
  const addPhotoText = document.getElementById("addPhotoText");
  const deletePhoto = document.getElementById("deletePhoto");

  photoInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        photoPreview.src = e.target.result;
        photoPreview.classList.remove("hidden");
        addPhotoText.classList.add("hidden");
        deletePhoto.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

  deletePhoto.addEventListener("click", function() {
    photoPreview.src = "";
    photoPreview.classList.add("hidden");
    addPhotoText.classList.remove("hidden");
    deletePhoto.classList.add("hidden");
    photoInput.value = ""; 
  });
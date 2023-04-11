// Get the popup, popup content, and close button elements
var popup = document.getElementById("popup");
var popupContent = document.getElementById("popup-content");
var close = document.querySelector(".close");



// Get all photo elements and add a click event listener to each one
var photos = document.querySelectorAll(".photo");
for (var i = 0; i < photos.length; i++) {
  photos[i].addEventListener("click", function() {
    // Set the source of the popup image to the clicked photo's source
    var photoSrc = this.querySelector("img").getAttribute("src");
    document.getElementById("popup-image").setAttribute("src", photoSrc);

    // Show the popup
    popup.style.display = "block";

    // Generate and show preview images
    var previewContainer = document.getElementById("preview-container");
    var previews = "";
    var currentIndex = Array.from(photos).indexOf(this);
    for (var j = 0; j < photos.length; j++) {
      if (j != currentIndex) {
        previews += "<div class='preview' data-index='" + j + "'><img src='" + photos[j].querySelector("img").getAttribute("src") + "'></div>";
      }
    }
    previewContainer.innerHTML = previews;

    // Add click event listeners to preview images
    var previewImages = document.querySelectorAll(".preview");
    for (var k = 0; k < previewImages.length; k++) {
      previewImages[k].addEventListener("click", function() {
        var index = parseInt(this.getAttribute("data-index"));
        var photoSrc = photos[index].querySelector("img").getAttribute("src");
        document.getElementById("popup-image").setAttribute("src", photoSrc);
        currentIndex = index;
        updatePreview(currentIndex);
      });
    }

    // Update the preview images to highlight the current image
    updatePreview(currentIndex);

    // Add click event listeners to arrow buttons
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    prev.addEventListener("click", function() {
      if (currentIndex > 0) {
        currentIndex--;
        var photoSrc = photos[currentIndex].querySelector("img").getAttribute("src");
        document.getElementById("popup-image").setAttribute("src", photoSrc);
        updatePreview(currentIndex);
      }
    });
    next.addEventListener("click", function() {
      if (currentIndex < photos.length - 1) {
        currentIndex++;
        var photoSrc = photos[currentIndex].querySelector("img").getAttribute("src");
        document.getElementById("popup-image").setAttribute("src", photoSrc);
        updatePreview(currentIndex);
      }
    });
  });
}

// Function to update the preview images to highlight the current image
function updatePreview(index) {
  var previewImages = document.querySelectorAll(".preview");
  for (var i = 0; i < previewImages.length; i++) {
    if (i == index) {
      previewImages[i].classList.add("active");
    } else {
      previewImages[i].classList.remove("active");
    }
  }
}

// Add click event listener to close button
close.addEventListener("click", function() {
  // Hide the popup
  popup.style.display = "none";
});

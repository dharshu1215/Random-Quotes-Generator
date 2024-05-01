$(document).ready(function() {
  // Image URLs
  var imagesFirstLine = [
      'a1.jpg',
      'a2.jpeg',
      'a3.jpeg'
  ];

  var imagesSecondLine = [
      'a4.jpeg',
      'a5.jpg'
  ];

  // Function to create an image element and append it to the container
  function appendImage(container, imageUrl) {
      var img = $('<img>', { src: imageUrl, alt: 'Image' });
      container.append(img);
  }

  // Container for the first line
  var firstLineContainer = $('#imageContainer');

  // Append images to the first line
  for (var i = 0; i < imagesFirstLine.length; i++) {
      appendImage(firstLineContainer, imagesFirstLine[i]);
  }

  // Container for the second line
  var secondLineContainer = $('<div>');

  // Append images to the second line
  for (var j = 0; j < imagesSecondLine.length; j++) {
      appendImage(secondLineContainer, imagesSecondLine[j]);
  }

  // Append the second line container to the main container
  firstLineContainer.append(secondLineContainer);
});
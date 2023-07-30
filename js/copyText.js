document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyButton');
  const originalImageSrc = 'assets/discord.svg';
  const checkMarkSrc = 'assets/copied.svg';

  copyButton.addEventListener('click', function() {
    const textToCopy = 'electric_xd';

    // Create a temporary textarea element to hold the text to copy
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select and copy the text
    tempTextArea.select();
    document.execCommand('copy');

    // Remove the temporary textarea from the DOM
    document.body.removeChild(tempTextArea);

    // Change the image to the check mark
    copyButton.querySelector('img').src = checkMarkSrc;

    // Revert the image back to the original Discord icon after 2 seconds
    setTimeout(function() {
      copyButton.querySelector('img').src = originalImageSrc;
    }, 2000);
  });
});

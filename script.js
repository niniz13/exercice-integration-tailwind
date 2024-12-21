document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.song-button');
  const lyricsContainers = document.querySelectorAll('.lyrics-container');

  lyricsContainers.forEach((container, index) => {
    container.style.display = index === 0 ? 'block' : 'none';
  });

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      lyricsContainers.forEach((container) => {
        container.style.display = 'none';
      });

      lyricsContainers[index].style.display = 'block';

      buttons.forEach((btn) => {
        btn.style.color = 'white';
        btn.style.backgroundColor = 'black';
      });

      button.style.color = 'black';
      button.style.backgroundColor = 'white';
    });
  });
});

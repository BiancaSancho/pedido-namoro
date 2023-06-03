document.addEventListener('DOMContentLoaded', function() {
  var root = document.createElement('div');
  root.classList.add('root');
  document.body.appendChild(root);

  var container = document.createElement('div');
  container.classList.add('container');
  root.appendChild(container);

  var h1 = document.createElement('h1');
  h1.textContent = 'Quer namorar comigo?';
  container.appendChild(h1);

  var noButton = document.createElement('button');
  noButton.textContent = 'Não';
  noButton.classList.add('button');
  noButton.id = 'no-button';
  container.appendChild(noButton);

  var yesButton = document.createElement('button');
  yesButton.textContent = 'Sim';
  yesButton.classList.add('button');
  yesButton.id = 'yes-button';
  container.appendChild(yesButton);

  var moveButton = function(e) {
    var button = document.getElementById('no-button');
    var buttonRect = button.getBoundingClientRect();
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var buttonX = buttonRect.x;
    var buttonY = buttonRect.y;

    if (Math.abs(mouseX - buttonX) < 50 && Math.abs(mouseY - buttonY) < 40) {
      var maxWidth = window.innerWidth - buttonRect.width;
      var maxHeight = window.innerHeight - buttonRect.height;
      var newX = Math.floor(Math.random() * maxWidth);
      var newY = Math.floor(Math.random() * maxHeight);
      button.style.left = newX + 'px';
      button.style.top = newY + 'px';
    }
  };

  var accepted = function() {
    alert('TE AMO!');
  };

  var denied = function() {
    var button = document.getElementById('no-button');
    button.parentNode.removeChild(button);
  };

  document.addEventListener('mousemove', moveButton);
  yesButton.addEventListener('click', accepted);
  noButton.addEventListener('click', denied);
});

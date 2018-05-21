(function() {
  'use strict';

  let stopButton = document.getElementById('stopButton');
  let stopLightOn = false;
  let slowButton = document.getElementById('slowButton');
  let slowLightOn = false;
  let goButton = document.getElementById('goButton');
  let goLightOn = false;

  stopButton.addEventListener('click', function() {
    let stopLight = document.getElementById('stopLight');
    if (stopLightOn) {
      stopLightOn = false;
      return stopLight.classList.remove("stop");
    } else {
      stopLightOn = true;
      return stopLight.classList.add("stop");
    }
  });

  slowButton.addEventListener('click', function() {
    let slowLight = document.getElementById('slowLight');
    if (slowLightOn) {
      slowLightOn = false;
      return slowLight.classList.remove("slow");
    } else {
      slowLightOn = true;
      return slowLight.classList.add("slow");
    }
  });

  goButton.addEventListener('click', function() {
    let goLight = document.getElementById('goLight');
    if (goLightOn) {
      goLightOn = false;
      return goLight.classList.remove("go");
    } else {
      goLightOn = true;
      return goLight.classList.add("go");
    }
  });

      stopButton.addEventListener('mouseenter', function() {
        console.log(`Entered ${stopButton.textContent} button`);
      });
      stopButton.addEventListener('mouseleave', function() {
        console.log(`Left ${stopButton.textContent} button`);
      });

      slowButton.addEventListener('mouseenter', function() {
        console.log(`Entered ${slowButton.textContent} button`);
      });
      slowButton.addEventListener('mouseleave', function() {
        console.log(`Left ${slowButton.textContent} button`);
      });

      goButton.addEventListener('mouseenter', function() {
        console.log(`Entered ${goButton.textContent} button`);
      });
      goButton.addEventListener('mouseleave', function() {
        console.log(`Left ${goButton.textContent} button`);
      });

      controls.addEventListener('click', function() {
        if ((stopLightOn === true) || (slowLightOn === true) || (goLightOn === true)) {
          console.log(`${event.target.textContent} bulb on`);
        } else {
          console.log(`${event.target.textContent} bulb off`);
        }
      });

})();

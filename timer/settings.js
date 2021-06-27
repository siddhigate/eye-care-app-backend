document.querySelector(".reset").addEventListener("click", () => {
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;
  });
  
  document.querySelector(".pause").addEventListener("click", () => {
    if (paused === undefined) {
      return;
    }
    if (paused) {
      paused = false;
      initial = setTimeout("decremenT()", 60);
      pauseBtn.textContent = "pause";
      pauseBtn.classList.remove("resume");
    } else {
      clearTimeout(initial);
      pauseBtn.textContent = "resume";
      pauseBtn.classList.add("resume");
      paused = true;
    }
  });
  
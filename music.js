function playAudio(audioId) {

    // Pause currently playing
    const currentAudio = document.getElementById('currentAudio');   
    currentAudio.pause();
  
    // Play new audio
    const newAudio = document.getElementById(audioId);
    newAudio.play();
  
    // Update reference for next time
    currentAudio = newAudio;
  
  }

  document.getElementById('audio1').addEventListener('click', () => {
    playAudio('audio1');  
  });
  
  document.getElementById('audio2').addEventListener('click', () => {
    playAudio('audio2');
  });

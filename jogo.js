document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const cano = document.querySelector('.cano');
    const fimDeJogo = document.querySelector('.fim-de-jogo');
    const reiniciarBtn = document.querySelector('.reiniciar');
  
    let pulando = false;
  
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space' && !pulando) {
        pular();
      }
    });
  
    reiniciarBtn.addEventListener('click', reiniciarJogo);
  
    function pular() {
      pulando = true;
      mario.classList.add('pular');
  
      setTimeout(() => {
        mario.classList.remove('pular');
        pulando = false;
      }, 500);
    }
  
    function reiniciarJogo() {
      fimDeJogo.style.visibility = 'hidden';
    }
  
    setInterval(() => {
      verificarColisao();
    }, 10);
  
    function verificarColisao() {
      const marioRect = mario.getBoundingClientRect();
      const canoRect = cano.getBoundingClientRect();
  
      if (
        marioRect.bottom > canoRect.top &&
        marioRect.top < canoRect.bottom &&
        marioRect.right > canoRect.left &&
        marioRect.left < canoRect.right
      ) {
        fimDeJogo.style.visibility = 'visible';
      }
    }
  });
  
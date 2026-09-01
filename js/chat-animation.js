/*
  CHAT-ANIMATION — anima a conversa do mockup de WhatsApp no hero,
  usando as mensagens definidas em CONTENT.chatDemo (js/content.js).
  Mostra "digitando..." antes de cada resposta do bot, em loop.
*/

(function () {
  const container = document.getElementById('chat-demo');
  if (!container) return;

  const TYPING_DELAY = 900;
  const USER_MESSAGE_DELAY = 600;
  const PAUSE_BEFORE_RESTART = 2600;

  function createBubble(from, text) {
    const bubble = document.createElement('div');
    bubble.className = `bubble bubble--${from}`;
    bubble.textContent = text;
    return bubble;
  }

  function createTypingIndicator() {
    const typing = document.createElement('div');
    typing.className = 'typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    return typing;
  }

  function scrollToBottom() {
    container.scrollTop = container.scrollHeight;
  }

  async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function playSequence() {
    container.innerHTML = '';

    for (const message of CONTENT.chatDemo) {
      if (message.from === 'bot') {
        const typing = createTypingIndicator();
        container.appendChild(typing);
        scrollToBottom();
        await wait(TYPING_DELAY);
        typing.remove();
      } else {
        await wait(USER_MESSAGE_DELAY);
      }

      container.appendChild(createBubble(message.from, message.text));
      scrollToBottom();
    }

    await wait(PAUSE_BEFORE_RESTART);
    playSequence();
  }

  playSequence();
})();

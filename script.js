const prefixCards = document.querySelectorAll('.prefix-card');
const output = document.getElementById('demo-output');

const judgments = {
  a: {
    title: 'Prefer Prefix A',
    text: 'Prefix A reduces the remaining task to a direct calculation: x² + y² = (x + y)² - 2xy = 100 - 42 = 58. It gives the continuation a high-utility path to the answer.'
  },
  b: {
    title: 'Do not prefer Prefix B',
    text: 'Prefix B starts from a tempting guess, but x = 6 and y = 4 violates xy = 21 because 6 × 4 = 24. It is likely to make future continuations confidently wrong.'
  }
};

prefixCards.forEach((card) => {
  card.addEventListener('click', () => {
    prefixCards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    const key = card.dataset.prefix;
    const judgment = judgments[key];
    output.innerHTML = `
      <span class="box-label">PUM-style utility judgment</span>
      <h3>${judgment.title}</h3>
      <p>${judgment.text}</p>
    `;
  });
});

const copyButton = document.getElementById('copy-bibtex');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const bibtex = document.getElementById('bibtex').innerText;
    try {
      await navigator.clipboard.writeText(bibtex);
      copyButton.textContent = 'Copied';
      setTimeout(() => { copyButton.textContent = 'Copy'; }, 1200);
    } catch (error) {
      copyButton.textContent = 'Select manually';
      setTimeout(() => { copyButton.textContent = 'Copy'; }, 1600);
    }
  });
}

const prefixCards = document.querySelectorAll('.prefix-card');
const output = document.getElementById('demo-output');

const judgments = {
  a: {
    title: 'Prefer Prefix A',
    text: 'Prefix A gives a reusable path to the answer: x² + y² = (x + y)² − 2xy = 10² − 2 × 21 = 58. It should increase the probability that a continuation reaches the correct answer.'
  },
  b: {
    title: 'Reject Prefix B',
    text: 'Prefix B is fluent but invalid: x = 6 and y = 4 satisfies x + y = 10, but violates xy = 21 because 6 × 4 = 24. A solver following this prefix is likely to finish with the wrong answer 52.'
  }
};

prefixCards.forEach((card) => {
  card.addEventListener('click', () => {
    prefixCards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    const judgment = judgments[card.dataset.prefix];
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

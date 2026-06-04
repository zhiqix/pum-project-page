const demoData = {
  A: {
    label: "With Prefix A",
    withoutCorrect: 2,
    withCorrect: 5,
    gain: "+3/8"
  },
  B: {
    label: "With Prefix B",
    withoutCorrect: 2,
    withCorrect: 1,
    gain: "-1/8"
  }
};

function renderDots(container, correct, total = 8) {
  container.innerHTML = "";
  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement("span");
    dot.className = i < correct ? "dot correct" : "dot";
    container.appendChild(dot);
  }
}

function updateDemo(prefixKey) {
  const data = demoData[prefixKey];
  document.querySelectorAll(".prefix").forEach((button) => {
    button.classList.toggle("active", button.dataset.prefix === prefixKey);
  });

  document.getElementById("withLabel").textContent = data.label;
  document.getElementById("withoutRate").textContent = `${data.withoutCorrect}/8`;
  document.getElementById("withRate").textContent = `${data.withCorrect}/8`;
  document.getElementById("gainValue").textContent = data.gain;

  renderDots(document.getElementById("withoutDots"), data.withoutCorrect);
  renderDots(document.getElementById("withDots"), data.withCorrect);
}

document.querySelectorAll(".prefix").forEach((button) => {
  button.addEventListener("click", () => updateDemo(button.dataset.prefix));
});

const copyButton = document.getElementById("copyBibtex");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const text = document.getElementById("bibtexText").textContent;
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1300);
    } catch (error) {
      copyButton.textContent = "Select text";
    }
  });
}

updateDemo("A");

const counterButton = document.querySelector("button#counter");
const resetButton = document.querySelector("button#reset");

const initialCounterState = {
  value: 5,
};

const handler = {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, val) {
    target[prop] = val;
    renderCounter();
    return true;
  },
};

const counterState = new Proxy(initialCounterState, handler);

function renderCounter() {
  counterButton.textContent = `counter: ${counterState.value}`;
  counterButton.classList.toggle("red", isCounterTooBig());
}

function isCounterTooBig() {
  return counterState.value > 10;
}

counterButton.addEventListener("click", () => {
  counterState.value += 1;
});

resetButton.addEventListener("click", () => {
  counterState.value = 0;
});

setInterval(() => {
  counterState.value += 1;
}, 1000);

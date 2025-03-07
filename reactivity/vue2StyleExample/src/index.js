const counterButton = document.querySelector("button#counter");
const resetButton = document.querySelector("button#reset");

const counterState = {
  _value: 5,

  get value() {
    return this._value;
  },

  set value(newValue) {
    this._value = newValue;
    renderCounter();
  },
};

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

const counterButton = document.querySelector("button#counter");
const resetButton = document.querySelector("button#reset");

function useCounter() {
  let counter = 5;

  function isCounterTooBig() {
    return counter > 10;
  }

  function renderCounter() {
    counterButton.textContent = `counter: ${counter}`;
    counterButton.classList.toggle("red", isCounterTooBig());
  }

  return {
    getCounter() {
      return counter;
    },

    setCounter(newValue) {
      counter = newValue;
      renderCounter();
    },
  };
}

const { getCounter, setCounter } = useCounter();

counterButton.addEventListener("click", () => {
  setCounter(getCounter() + 1);
});

resetButton.addEventListener("click", () => {
  setCounter(0);
});

setInterval(() => {
  setCounter(getCounter() + 1);
}, 1000);

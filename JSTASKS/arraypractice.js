// step 1
const list = document.querySelector("ul");
const input = document.querySelector("input");
const paragraph = document.querySelector(".summary");
const btn = document.querySelector(".add-btn");
const shoppingList = [];

// step 2
const item_btn = (event) => {
  // step 3
  event.preventDefault();

  //   step 4
  const inputValue = input.value.trim();
  if (!inputValue) return;
  shoppingList.push(inputValue);

  //   step 5
  input.value = "";

  //   step 6
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // step 7
  span.textContent = inputValue;
  button.textContent = "Delete";
  li.append(span, button);

  // step 8
  list.append(li);

  // step 9

  // step 10
  button.addEventListener("click", () => {
    const index = shoppingList.indexOf(span.textContent);
    shoppingList.splice(index, 1);
    li.remove();
    if (shoppingList.length === 0) {
      paragraph.textContent = "shopping list is empty";
    } else {
      paragraph.textContent = `you have ${shoppingList.length} item(s) in list`;
    }
  });
};
btn.addEventListener("click", item_btn);

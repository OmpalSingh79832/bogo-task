const options = document.querySelectorAll(".option");
const totalPrice = document.getElementById("total-price");
const optionPrices = {
  option1: "10.00 USD",
  option2: "18.00 USD",
  option3: "24.00 USD",
};
function handleOptionChange(selectedRadio) {
  const option = selectedRadio.closest(".option");
  const details = option.querySelector(".details");

  document
    .querySelectorAll(".option")
    .forEach((opt) => opt.classList.remove("active-option"));

  option.classList.add("active-option");

  document
    .querySelectorAll(".details")
    .forEach((detail) => detail.classList.remove("active"));

  if (details) details.classList.add("active");

  totalPrice.textContent = optionPrices[selectedRadio.id];
}

options.forEach((option) => {
  const radio = option.querySelector('input[type="radio"]');

  radio.addEventListener("change", () => handleOptionChange(radio));
});
document
  .querySelector('input[type="radio"][id="option2"]')
  .dispatchEvent(new Event("change"));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "☰";
}));
document.querySelector("#year").textContent = new Date().getFullYear();




const copyIcon = document.getElementById("copyEmail");

if (copyIcon) {
  let resetTimer;

  async function copyEmail() {
    if (document.getElementById("copySuccess")) return;

    try {
      await navigator.clipboard.writeText("contact@blacksheep.co.kr");

      const check = document.createElement("span");
      check.id = "copySuccess";
      check.textContent = '✔';

      copyIcon.insertAdjacentElement("afterend", check);
      copyIcon.style.display = "none";

      resetTimer = setTimeout(() => {
        check.remove();
        copyIcon.style.display = "block";
      }, 1200);
    } catch (error) {
      alert("try again!");
    }
  }

  copyIcon.addEventListener("click", copyEmail);

  copyIcon.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      copyEmail();
    }
  });
}

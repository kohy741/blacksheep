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
const originalIcon = copyIcon.src;

async function copyEmail() {
  try {
    await navigator.clipboard.writeText("contact@blacksheep.co.kr");

    copyIcon.style.visibility = "hidden";
    copyIcon.insertAdjacentHTML(
      "afterend",
      '<span id="copySuccess" style="font-size:22px; color:#fff;">✓</span>'
    );

    setTimeout(() => {
      document.getElementById("copySuccess")?.remove();
      copyIcon.style.visibility = "visible";
    }, 1200);
  } catch (error) {
    alert("이메일 복사에 실패했어. 다시 시도해 줘!");
  }
}

copyIcon.addEventListener("click", copyEmail);
copyIcon.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    copyEmail();
  }
});

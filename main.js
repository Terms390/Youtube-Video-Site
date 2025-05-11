document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const countSpan = button.querySelector(".like-count");
      let count = parseInt(countSpan.textContent);

      if (button.classList.contains("liked")) {
        count--;
        button.classList.remove("liked");
      } else {
        count++;
        button.classList.add("liked");
      }

      countSpan.textContent = count;
    });
  });
});
// Sidebar toggle logic
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

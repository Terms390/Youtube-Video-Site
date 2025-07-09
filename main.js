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
const playerLayer = document.querySelector(#'player');
playerLayer.innerHTML = `<iframe width 100% src-"https://www.youtube.com/embed/${DataTransfer.items[0].contentDetails.videoId}" frameborder="0" allow

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

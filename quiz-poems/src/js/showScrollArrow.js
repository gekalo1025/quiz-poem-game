export default function showScrollArrow() {
  const downArrow = document.querySelector(".down-arrow");
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.body.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
  let currentDisplayHeight = document.documentElement.clientHeight;
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollHeight - currentDisplayHeight - scrollTop < 50) {
    downArrow.classList.add("hidden");
  } else {
    downArrow.classList.remove("hidden");
  }
}

export const showButtons = (res) => {
  const $prevButton = document.querySelector("#prev-button");
  const $nextButton = document.querySelector("#next-button");

  $prevButton.href = res.previous;
  $nextButton.href = res.next;

  if (
    $prevButton.href === "http://127.0.0.1:5500/null" ||
    $prevButton.href == "http://127.0.0.1:8080/null"
  ) {
    $prevButton.classList = "hidden";
  } else {
    $prevButton.classList.remove("hidden");
  }
};

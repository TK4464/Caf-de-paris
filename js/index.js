// オブジェクトを作成
const hamburger = document.getElementById("js__hamburger");

// ハンバーガーメニュー
document
  // ハンバーガーメニューボタンがクリックされた時の処理
  .querySelector(".hamburger__menu__btn")
  .addEventListener("click", function () {
    document.querySelector(".hamburger__menu").classList.toggle("is-active");
    hamburger.classList.toggle("active");
  });

// メニュー内のアンカータグがクリックされたときにメニューを閉じる処理
document
  .querySelectorAll(".hamburger__menu__item")
  .forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      document.querySelector(".hamburger__menu").classList.remove("is-active");
      hamburger.classList.remove("active");
    });
  });

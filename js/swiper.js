const swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 2000, //追加（スライドスピード）
  effect: "fade", //追加（フェードエフェクトを適用する）
  autoplay: {
    delay: 2000,
  },
});

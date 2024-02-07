//gsap スクロールに対応した各コンテンツのheader文字の動き
/* spanタグに分割 */
let splitTarget = document.querySelectorAll(".js__split__text"); //ターゲットとなる要素を全取得
splitTarget.forEach((target) => {
  // target = ターゲット
  if (!target.classList.contains("is-active")) {
    //ターゲットが'is-active'クラスを持っていない場合
    newText = ""; //生成する要素を格納するための変数
    spanText = target.innerHTML; //ターゲットの中身を取得
    spanText.split("").forEach((char) => {
      // char = character 文字
      newText += "<span>" + char + "</span>"; //一文字ずつspanタグで囲む
    });
    target.innerHTML = newText; //ターゲットに生成した要素を挿入
  }
});
let textEffect = document.querySelectorAll(".js__text__effect"); //ターゲットとなる要素を全取得
textEffect.forEach((target) => {
  let spans = target.querySelectorAll("span");
  gsap.to(spans, {
    duration: 0.5,
    autoAlpha: 1,
    rotateY: "0deg",
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: target,
      start: "bottom 70%",
    },
  });
});

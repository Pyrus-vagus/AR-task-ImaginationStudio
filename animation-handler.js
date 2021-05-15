const animationPause = function () {
  document.querySelectorAll(".animated").forEach((item) => item.pause());
};
const animationPlay = function () {
  document.querySelectorAll(".animated").forEach((item) => item.play());
};
AFRAME.registerComponent("animhandler", {
  init: function () {
    this.toggle = false;
    animationPause();

    // //reference to the video
  },
  tick: function () {
    if (document.querySelector("a-marker").object3D.visible) {
      if (!this.toggle) {
        this.toggle = true;
        animationPlay();
      }
    } else {
      this.toggle = false;
      animationPause();
    }
  },
});

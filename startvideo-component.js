AFRAME.registerComponent("vidhandler", {
  init: function () {
    this.toggle = false;
    document.querySelector("#intro").pause(); //reference to the video
  },
  tick: function () {
    if (
      document.querySelector("a-marker").object3D.visible == true &&
      document.querySelector("a-video").object3D.visible == true
      // document.querySelector(".animated").object3D.timescale == 0
    ) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#intro").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#intro").pause();
    }
  },
});

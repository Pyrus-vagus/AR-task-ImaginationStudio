AFRAME.registerComponent("animhandler", {
  init: function () {
    this.toggle = false;
    document.querySelector(".animated").pause();
    document.querySelector(".animated1").pause();
    document.querySelector(".animated2").pause();
    // document.querySelector(".animated3").pause();
    // //reference to the video
  },
  tick: function () {
    if (document.querySelector("a-marker").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector(".animated").play();
        document.querySelector(".animated1").play();
        document.querySelector(".animated2").play();
        // document.querySelector(".animated3").play();
      }
    } else {
      this.toggle = false;
      document.querySelector(".animated").pause();
      document.querySelector(".animated1").pause();
      document.querySelector(".animated2").pause();
      // document.querySelector(".animated3").pause();
    }
  },
});

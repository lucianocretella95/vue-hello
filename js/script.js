const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Ciao classe #125",
      // ricordarsi inserire persorso immagine.
      url: "image/dragon_ball.jpg",
    };
  },
}).mount("#app");

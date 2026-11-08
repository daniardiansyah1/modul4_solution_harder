(function (window) {

  // STEP 3: Create an object called helloSpeaker
  var helloSpeaker = {};

  // Define the word to be spoken
  var speakWord = "Hello";

  // STEP 4: Attach speak method to helloSpeaker
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to global scope
  window.helloSpeaker = helloSpeaker;

})(window);

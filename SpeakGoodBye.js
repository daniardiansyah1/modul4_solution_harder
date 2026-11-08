(function (window) {

  // STEP 7: Create an object called byeSpeaker
  var byeSpeaker = {};

  // Define the word to be spoken
  var speakWord = "Good Bye";

  // STEP 8: Attach speak method to byeSpeaker
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose byeSpeaker to global scope
  window.byeSpeaker = byeSpeaker;

})(window);

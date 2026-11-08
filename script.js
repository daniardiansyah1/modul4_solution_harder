(function () {

  // STEP 1: Assign names to the global array
  names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim"
  ];

  // STEP 10: Loop over the names array
  for (var i = 0; i < names.length; i++) {

    // STEP 11: Retrieve the first letter
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Check whether the first letter is j
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }

  }

})();

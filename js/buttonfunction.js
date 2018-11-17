function() {
  var player = embed.getPlayer();
  counter = counter + 1;
  timer = duration;
  if (counter > listOfObjects.length) {
    counter = 0;
  }
  player.setChannel(listOfObjects[counter].value);
}
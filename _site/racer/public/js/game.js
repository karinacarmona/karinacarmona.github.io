$(document).ready(function() {
  // arena = new Arena(600, 1200);
  player1 = new Karina(10, 10);
  player2 = new Stef(10, 300);


  Mousetrap.bind('a', function(event) {
    player1.move();
  });

  Mousetrap.bind('l', function(event) {
    player2.move();
  });

  setInterval(function() {
    if (player1.x == 1200) {
      $(".karinaWins").css("display", "block");
      Mousetrap.unbind('l');
    };
  });

   setInterval(function() {
    if (player2.x == 1200) {
      $(".StephWins").css("display", "block");
      Mousetrap.unbind('a');
      };
  });

  $('.restart').click(function() {
    location.reload(true);
  });
})

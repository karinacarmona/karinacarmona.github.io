function Karina(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = $('#karina');
  this.height = this.sprite.height();
  this.width = this.sprite.width();
  this.sprite.css('top', this.y);
  this.sprite.css('left', this.x)
}


Karina.prototype.updateSpritePosition = function() {
  this.sprite.css('top', this.y);
  this.sprite.css('left', this.x);
}

Karina.prototype.move = function() {
  // var old_x = this.x;
  // var old_y = this.y;
  this.x += 10;

  this.updateSpritePosition();
}

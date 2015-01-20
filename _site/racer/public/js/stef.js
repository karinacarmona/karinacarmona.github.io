function Stef(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = $('#stef');
  this.height = this.sprite.height();
  this.width = this.sprite.width();
  this.sprite.css('top', this.y);
  this.sprite.css('left', this.x)
}


Stef.prototype.updateSpritePosition = function() {
  this.sprite.css('top', this.y);
  this.sprite.css('left', this.x);
}

Stef.prototype.move = function() {
  // var old_x = this.x;
  // var old_y = this.y;
  this.x += 10;

  this.updateSpritePosition();
}

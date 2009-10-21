Screw.Unit( function() {
  describe( "Grapher", function() {
    var g = grapher();
    g.setup( 'canvas_container' );;
    
    it( "draws a circle in the expected x axis", function() {
      expect( $('#canvas_container circle') ).to( have_x_position_of, 50);
    });
    
    it( "draws a circle on the expected y axis", function() {
      expect( $('#canvas_container circle') ).to( have_y_position_of, 50);
    });
    
    it( "changes color when clicked", function() {
      expect( $('#canvas_container circle:first') ).to( have_fill_color_of, "#0000ff");
      $('#canvas_container circle:first').trigger( 'click' );
      expect( $('#canvas_container circle:first') ).to( have_fill_color_of, "#ff0000");
    });
    
  });
});
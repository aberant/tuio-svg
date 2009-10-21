var grapher = function() {
  var paper;
  var circle;
  
return {
  setup: function( container ) {
          paper = new Raphael( container, 500, 500 );
          circle = paper.circle(50, 50, 50);
  
          circle.attr("fill", "blue");
  
          circle.click( 
            function () { circle.attr("fill", "red"); }
          );
  },
        
  draw: function() {
        var points;
        
        $.getJSON( "http://localhost:4567/tuio.js",
              function( data, textStatus) {
                $.each( data, function(index, point) {
                  x_delta = ( point.x * 500 ) - circle.attr("cx")
                  y_delta = ( point.y * 500 ) - circle.attr("cy")
                  
                  circle.translate( x_delta, y_delta )
                });
        });
              
         
        
              
  }
}      
        
};

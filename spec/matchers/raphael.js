Screw.Matchers["have_x_position_of"] = {
  match: function(expected, actual) {

    // seems to always add 0.5 to x any y position, so i roll with it
    return actual.attr('cx').baseVal.valueInSpecifiedUnits == (expected + 0.5);
  },
  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to have an x position of ' + expected;
  }
}

Screw.Matchers["have_y_position_of"] = {
  match: function(expected, actual) {
    
    // seems to always add 0.5 to x any y position, so i roll with it
    return actual.attr('cy').baseVal.valueInSpecifiedUnits == (expected + 0.5);
  },
  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to have a y position of ' + expected;
  }
}

Screw.Matchers["have_fill_color_of"] = {
  match: function(expected, actual) {
    
    return actual.attr('fill') == expected;
  },
  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to have a fill color of ' + expected;
  }
}
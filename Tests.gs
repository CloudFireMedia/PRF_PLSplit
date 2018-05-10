
function TEST_onFormSubmit() {

  //NOTE: This *simulates* a form submission.  Columns that are not part of the form WILL be passed using this method
  //var dataRange = SpreadsheetApp.getActiveSheet().getDataRange();
  
  var dataRange = SpreadsheetApp.openById('1TyM-eFeWQN2Im28kPRx7hzANLGO5xw3VhXUQp5OI81s').getDataRange();
  var data = dataRange.getValues();
  var headers = data[0];
  //  for (var row=1; row < data.length; row++) {//all rows - overkill much?
  var row=4;//0-based
  var e = {};
  e.values = data[row].filter(Boolean);//remove blanks
  e.range = dataRange.offset(row,0,1,data[0].length);
  e.namedValues = {};
  // Loop through headers to create namedValues object
  // NOTE: all namedValues are arrays.
  for (var col=0; col<headers.length; col++)
    e.namedValues[headers[col]] = [data[row][col]];
  // Pass the simulated event to onFormSubmit
  responseForm_onFormSubmit(e);
  //}
}

function TEST_responseForm_updateEventsPromotionCalendarMatchingEvents() {
  responseForm_updateEventsPromotionCalendarMatchingEvents(true); 
}


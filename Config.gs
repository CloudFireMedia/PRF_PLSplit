var SCRIPT_NAME = 'PRF_PLSplit';
var SCRIPT_VERSION = 'v0.dev_ajr';

var CONFIG = {
  TEST_WRITE_TO_CALENDAR : false,
  DATA_SHEET_NAME : 'Incoming_Data',
  FILES : {
    RESPONSES_SPREADSHEET_ID: '1JEqPQJSiBliliqw1y-wrrdP6ikU11DPuIF72l-rN84g', // Live
    // PROMOTION_CALENDAR_SPREADSHEET_URL : 'https://docs.google.com/spreadsheets/d/1d0-hBf96ilIpAO67LR86leEq09jYP2866uWC48bJloc/edit', // Live
    PROMOTION_CALENDAR_SPREADSHEET_URL : 'https://docs.google.com/spreadsheets/d/1rDnEfCZCaYfLsG8ckhNJxANj911H2dzR-hrE6QyyW2k/edit', // Copy of CCN Events Promotion Calendar (andrewr1969)
    PROMOTION_CALENDAR_SHEET_NAME : 'Communications Director Master',
  },
  MATCH_THRESHOLD_PERCENT : 0.75, // fuzzy logic matching
  MAX_EVENT_DATE_DIFF : 10,  
};
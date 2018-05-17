function log_(message) {

  if (typeof message === 'object') {
    message = JSON.stringify(message)
  }

  SpreadsheetApp
    .openById(CONFIG.FILES.RESPONSES_SPREADSHEET_ID)
    .getSheetByName('Log')
    .appendRow([new Date() + ' - ' + message])
}

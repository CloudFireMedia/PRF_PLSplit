//function responseForm_disableAutomation() {
//
//  var owner = SpreadsheetApp.getActive().getOwner().getEmail();
//  var user = Session.getActiveUser().getEmail();
//  
//  if( user != owner){
//    Browser.msgBox('Disable Automation', "Sorry.  Automation can only be disabled by the sheet owner.\\nPlease ask "+owner+" to run this.", Browser.Buttons.OK);
//    return;
//  }
//
//  deleteTriggerByHandlerName('onEdit_Triggered');
////  deleteTriggerByHandlerName('onFormSubmit');//no form linked so can'y use this method 
//
//  Browser.msgBox('Disable Automation', "Automation has been disabled.\\nForm Submissions and notifications will no longer be processed.", Browser.Buttons.OK);
//}
//
//function responseForm_setupAutomation() {////This will need to be called elsewhere - possibly via the form, possibly trigger to run daily against the new for submissions page
//
//  //do NOT run this directly from the library, use a proxy function ala: function function setupAutomation(){PL.responseForm_setupAutomation();}
//  //optFormUrls = []
//  var owner = SpreadsheetApp.getActive().getOwner().getEmail();
//  var user = Session.getActiveUser().getEmail();
//  if( user != owner){
//    Browser.msgBox('Enable Automation', "Sorry.  Automation can only be enabled by the sheet owner.\\nPlease ask "+owner+" to run this.", Browser.Buttons.OK);
//    return;
//  }
//  
//  //setup onEdit trigger
//  deleteTriggerByHandlerName('onEdit_Triggered');//remove any existing triggers so we don't have conflicts
//  ScriptApp.newTrigger('onEdit_Triggered').forSpreadsheet(SpreadsheetApp.getActive()).onEdit().create();
//  
//  var errs = [];
//  
//    if(errs.length){
//      Browser.msgBox('Enable Automation', 'Something went wrong.\\n\\n'+(errs.join('\\n')), Browser.Buttons.OK) 
//    }else{
//      Browser.msgBox('Enable Automation', 'Done!', Browser.Buttons.OK) 
//    }
//}

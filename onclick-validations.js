/* Add to inline Javascript for the view that must be validated on click. The button will on click call ${viewName}.customValidate(); */
/* customValidate() validates field and generates error message when required. The overall validity of the view and error message if applicable is returned. */

// Required. Make sure views are acessible in nested functions.
var view = this;

// Optional. Checkbox Group inputs
function validCheckboxGroup(field) {
	var field = view.ui.get(field);
	if (!field.getSelectedItems()) {
		field.setValid(false, "Field is required");
		return false;
	} else {
		field.setValid(true);
		return true;
	}
}

// Optional. Date inputs.
function validDate(field) {
	var date = view.ui.get(field);
	if (date.getDate() == "") {
		date.setValid(false, "Field is required");
		isValid = false;
		return false;
	} else {
		date.setValid(true);
		return true;
	}	
}

// Optional. Single select
function checkValidSelect(field) {
	var field = view.ui.get(field);
	if (field.getSelectedItem() == undefined) {
		field.setValid(false, "Field is required");
		return false;
	} else {
		field.setValid(true);
	}
	return true;
}

// Optional. Text inputs
function checkValid(field) {
	var field = view.ui.get(field);
	if (!field.getText()) {
		field.setValid(false, "Field is required");
		return false;
	} else {
		field.setValid(true);
		return true;
	}
}

// Optional. Validate checkboxes.
// TODO refactor function

// Required. customValidate() call on helper functions. 
this.customValidate = function() {
	var isValid = true;
	var invalidFields = [];
	var results = {};
	
	// required text inputs
	var textInputs = [
		"concurrence_signature", 
		] 
	textInputs.forEach(function(input) {
		if (checkValid(input) === false) {
			isValid = false;
			invalidFields.push(input);
		}
	});
	
	// required date inputs
	var dateInputs = [
		"concurrence_date",
	]	
	dateInputs.forEach(function(input) {
		if (validDate(input) === false) {
			isValid = false;
			invalidFields.push(input);
		}
	});

  // Strip underscores from control IDs, replace with spaces, to be used in error messaging.
	invalidFields = invalidFields.map(function(field) {
		return field.replace(/_/g, ' ');
	});
	
  // Error message lists all invalid field names. 
	appendMsg = " must be completed prior to submit."
	switch(invalidFields.length) {
	  case 0:
	    message = "";
	    break;
	  case 1:
	    message = invalidFields[0] + appendMsg;
	    break;
	  case 2:
		message = invalidFields[0] + " and " + invalidFields[1] + appendMsg;
	    break;
	  default:
	    message = invalidFields.slice(0, invalidFields.length - 1).join(', ') + ", and " + invalidFields.slice(-1) + appendMsg;
	} 
	message = message[0].toUpperCase() + message.slice(1);
	results = {
		isValid: isValid,
		message: message
	}
	return results;
}

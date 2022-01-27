// validate text input
function checkValid(field) {
	var field = view.ui.get(field);
	if (field.getText() == "") {
		field.setValid(false, "Field is required");
		return false;
	} else {
		field.setValid(true);
	}
	return true;
}

// validate dropdown
function checkSelected(field) {
	var field = view.ui.get(field);
	if (!field.getSelectedItem()) {
		field.setValid(false, "Field is required");
		return false;
	} else {
		field.setValid(true);
	}
}

// Attached to all date inputs to do live validation
this.textValidateOnChange = function(me) {
	// if view is required
	if (me.context.options._metadata.visibility.get("value") === "REQUIRED") {
		if (me.getDate() == false) {
			me.setValid(false, "This field is required.");
		} else {
			me.setValid(true);
		}
	}
}

// Attached to all text fields to do live validation
this.selectValidateOnChange = function(me) {
	// if view is required
	if (me.context.options._metadata.visibility.get("value") === "REQUIRED") {
		if (me.getSelectedItem() === "") {
			me.setValid(false, "This field is required.");
		} else {
			me.setValid(true);
		}
	}
}

// Attached to all single selects to do live validation
this.textValidateOnChange = function(me) {
	// if view is required
	if (me.context.options._metadata.visibility.get("value") === "REQUIRED") {
		if (me.getText() === "") {
			me.setValid(false, "This field is required.");
		} else {
			me.setValid(true);
		}
	}
}

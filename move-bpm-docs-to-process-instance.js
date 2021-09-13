/* Step 1: Create Process Instance Service */
// Inputs: tw.local.newInputVar1 (NewInputVar1), tw.local.newInputVar2 (NewInputVar2), tw.local.processName 
// Outputs: tw.local.processInstance (NewProcessInstance), tw.local.statusCode (Integer), tw.local.status (String), tw.local.errorMessage (String) 
// REF: NewProcessInstance: 

// Script
try {
	var inputs = new tw.object.Map();
	inputs.put("newInputVar1", tw.local.newInputVar1);
  inputs.put("newInputVar2", tw.local.newInputVar2);
	
	try {
		var newPI = tw.system.startProcessByName(tw.local.processName, inputs);
		
		// Map the process instance data
		tw.local.processInstance = new tw.object.NewProcessInstance();
		tw.local.processInstance.container = newPI.processApp.acronym;
		tw.local.processInstance.containerName = newPI.processApp.name;
		tw.local.processInstance.creationTime = newPI.startDate;
		tw.local.processInstance.dueDate = newPI.dueDate;
		tw.local.processInstance.id = newPI.id;
		tw.local.processInstance.name = newPI.processApp.name;
		tw.local.processInstance.modificationTime = newPI.lastModifiedDatetime;
		tw.local.processInstance.version = newPI.snapshot.id;
		tw.local.processInstance.versionName = newPI.snapshot.name;

		// Set the successful status code
		tw.local.statusCode = 201;
		tw.local.status = "OK";
	} catch (err2) {
		tw.local.statusCode = 500;
		tw.local.status = "ERROR";
		tw.local.errorMessage = err2.toString();
	}
} catch (err1) {
	tw.local.statusCode = 500;
	tw.local.status = "ERROR";
	tw.local.errorMessage = err1.toString();
}

/* Step 2 */

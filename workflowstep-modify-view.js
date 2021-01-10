import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMWorkflowStepModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange, selectChange}) {

	let formName = "PM_WORKFLOW_STEP_FORM";
	let formTitle = "Workflow Step";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} 
    	appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} inputChange={inputChange} selectChange={selectChange}/>
    );
}


PMWorkflowStepModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  selectChange: PropTypes.func
};

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMWorkflowStepModifyView({containerState, itemState, item, inputFields, appPrefs, 
	itemPrefForms, onSave, onCancel, inputChange, selectChange, onBlur}) {

	let formName = "PM_WORKFLOW_STEP_FORM";
	let formTitle = "Workflow Step";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder containerState={containerState} itemState={itemState} item={item} formName={formName} formTitle={formTitle} formGroup={formGroup} 
    	inputFields={inputFields} appPrefs={appPrefs} prefForms={itemPrefForms} onSave={onSave} onCancel={onCancel} onChange={inputChange} selectChange={selectChange}/>
    );
}


PMWorkflowStepModifyView.propTypes = {
  containerState: PropTypes.object,
  itemState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object.isRequired,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  selectChange: PropTypes.func,
  onBlur: PropTypes.func
};

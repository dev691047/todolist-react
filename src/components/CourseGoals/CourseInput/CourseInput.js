import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
   const[isvalid,setValid]=useState(false);
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setValid(false)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setValid(true);
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isvalid?'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button style={{backgroundColor:!isvalid?'red':''}} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

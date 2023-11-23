import { useRef } from 'react';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';
import ControlledFormRaw from './components/ControlledFormRaw';
import './App.css'

function App() {
  const formRef = useRef();

  return (
    <>

      {/* <UncontrolledForm /> */}

      {/* <ControlledFormRaw /> */}

      <ControlledForm formRef={formRef} />

      <button type="button" onClick={() => formRef.current.requestSubmit()}>Submit</button>

    </>
  );
};

export default App
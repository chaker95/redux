import './App.css' ;
// import  {useState} from 'react' ;
// import Task from './Task/Task';
import ListTAsk from './component/TaskList/ListTask' ;
import Addtask from './component/AddTAsk/AddTask';



function App() {
  return (
    <div className="App" >
      

      <ListTAsk />
      <Addtask />

    </div>
  );
}

export default App;

import "./App.css";
import Employee from "./component/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App bg-red-400">
      {showEmployees ? (
        <div>
          <Employee name="merta" />
          <Employee />
          <Employee />
          <Employee />
        </div>
      ) : (
        <p>you canot see the employees</p>
      )}
    </div>
  );
}

export default App;

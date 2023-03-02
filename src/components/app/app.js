import './app.css';
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

function App() {

  const data = [
    {name: 'John Smith', salary: 900, increase: false},
    {name: 'Jane Doe', salary: 1200, increase: true},
    {name: 'Alex Shepard', salary: 2100, increase: false},
  ];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        </div>
        <EmployeesList data={data}/>
        <EmployeesAddForm />
    </div>
  )
}

export default App;
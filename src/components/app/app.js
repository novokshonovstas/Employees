import { Component } from 'react';
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John Smith', salary: 900,  id: 1},
        {name: 'Jane Doe', salary: 1200, id: 2},
        {name: 'Alex Shepard', salary: 2100, id: 3},
      ]
    }

    this.maxID = 4;
    
  }


onDeleteEmployee = (id) => {
  this.setState(({ data }) => ({
      data: data.filter(employee => employee.id !== id)
  }))
}
onAddEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      increase: false,
      id: this.maxID++,
    }

  this.setState(({ data }) => {
    const newArr = [...data, newEmployee];
    return {
      data: newArr
    }
  })
}


 render() {
  const { data } = this.state;
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        </div>
        <EmployeesList 
        data={data}
        onDelete={this.onDeleteEmployee}
        />
        <EmployeesAddForm onAdd={this.onAddEmployee} />
    </div>
  )
 }
}

export default App;
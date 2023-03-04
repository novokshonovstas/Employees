import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      favorite: false,
    };
  }

  onIncrease = () => {
    // меняем значение в state, деструктуризируем свойство increase из state и меняем по клику его на противоположное тому которое установленов в state
    this.setState(({increase}) => ({
        increase: !increase,
    }));
  }

  onFavorite = () => {
    this.setState(({favorite}) => ({
        favorite: !favorite,
    }));
  }


  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, favorite } = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }
    if (favorite) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span onClick={this.onFavorite} className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"} />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            // при нажатии на сотрудника - он идет на повышение
            onClick={this.onIncrease} >
            <i className="fas fa-cookie"></i>
          </button>

          <button 
          type="button"
           className="btn-trash btn-sm "
           onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Flexi.css'

class Flexi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: '',
        state: '',
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event, type) => {
    const person = Object.assign({}, this.state.person)
    if (type === 'TextField') {
      person.name = event.target.value
    } else if (type === 'DropDown') {
      person.state = event.target.value
    }
    this.setState({ person })
  }

  render() {
    const { onSubmit, config } = this.props;
    return (
      <form
        onSubmit={(e) => {
          // Prevent form submission.
          e.preventDefault();
          e.stopPropagation();
          onSubmit(this.state.person)
        }
        }
      >
        {config.items && config.items.map((item) => {
          return (
            <div key={item.type}>
              {item.type === 'TextField' &&
                <div className="inputWrapper">
                  <label className={"label"}>{item.label}</label>
                  <input
                    type={'text'}
                    className={"inputText"}
                    placeholder="Person's Name"
                    onChange={event => this.handleInputChange(event, 'TextField')}
                  />
                </div>
              }
              {item.type === 'DropDown' &&
                <div>
                  <label className={"label"}>{item.label}</label>
                  <select
                    onChange={event => this.handleInputChange(event, 'DropDown')}
                  >
                    <option value="" >select state</option>
                    {item.values && item.values.length > 0 && item.values.map((option, index) => {
                      return (<option value={option} key={index + option}>{option}</option>);
                    })}
                  </select>
                </div>
              }
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Flexi.propTypes = {
  name: PropTypes.string,
  state: PropTypes.string,
};

export default Flexi;

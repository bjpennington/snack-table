import React, {Component} from 'react';
import {connect} from 'react-redux';

class SnackForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          newSnack: ''
        }
      }

    handleSnackChange = (event) => {
        this.setState({
            newSnack: event.target.value
        })
      }

    render() {
        return (
            <div>
                <input onChange={this.handleSnackChange} type="text" />
                <button onClick={() => this.props.dispatch({type: 'ADD_SNACK', payload: this.state.newSnack})}>Add your snack to the table!</button>
            </div>
        )
    }
}

export default connect()(SnackForm);
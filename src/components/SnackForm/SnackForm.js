import React, {Component} from 'react';
import {connect} from 'react-redux';

class SnackForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          newSnack: {
              snackType: '',
              snackBringer: ''
          }
        }
      }

    handleSnackChangeFor = (propertyName) => {
        return (event => {
            this.setState({
                newSnack: {
                    ...this.state.newSnack,
                    [propertyName]: event.target.value
                }
             })
        })
    }


    render() {       
        return (
            <div>
                <input onChange={this.handleSnackChangeFor('snackType')} type="text" placeholder="What's the snack?" />
                <input onChange={this.handleSnackChangeFor('snackBringer')} type="text" placeholder="Who's bringing it?" />
                <button onClick={() => this.props.dispatch({type: 'ADD_SNACK', payload: this.state.newSnack})}>Add your snack to the table!</button>
            </div>
        )
    }
}

export default connect()(SnackForm);
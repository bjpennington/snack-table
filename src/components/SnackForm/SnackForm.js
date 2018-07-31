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

    submitSnacks = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_SNACK', payload: this.state.newSnack});
    }


    render() {       
        return (
            <form onSubmit={this.submitSnacks}>
                <input onChange={this.handleSnackChangeFor('snackType')} type="text" placeholder="What's the snack?" />
                <input onChange={this.handleSnackChangeFor('snackBringer')} type="text" placeholder="Who's bringing it?" />
                <input type="submit" value="Add a snack to the table!" />
            </form>
        )
    }
}

export default connect()(SnackForm);
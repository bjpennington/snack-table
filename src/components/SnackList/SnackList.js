import React, {Component} from 'react';
import {connect} from 'react-redux';
import Snack from '../Snack/Snack';

class SnackList extends Component {
    render() {

        let snacksList = this.props.snacks.map((snack, index) => {
            return (<Snack
                        key={index}
                        snack={snack}
                    />)
          })

        return(
            <ul>
                {snacksList}
            </ul>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
      snacks: reduxState.addSnacks
    }
  }

export default connect(mapReduxStateToProps)(SnackList);
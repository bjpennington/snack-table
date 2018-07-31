import React, {Component} from 'react';

class Snack extends Component {
    render() {
        return (
            <li>{this.props.snack.snackBringer}: {this.props.snack.snackType}</li>
        )
    }
}

export default Snack;
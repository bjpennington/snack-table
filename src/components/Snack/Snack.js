import React, {Component} from 'react';

class Snack extends Component {
    render() {
        return (
            <li>{this.props.snack}</li>
        )
    }
}

export default Snack;
import React, { Component } from 'react';

export default class ListRow extends Component {

    render() {
        return (
            <div onClick={this.onClick.bind(this)}>
                {this.props.children}
            </div>
        )
    }

    onClick() {
        this.props.onClick(this.props.rowId);
    }
}
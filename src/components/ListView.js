import React, { Component } from 'react';

export default class ListView extends Component {

    render() {
        return (
            <ul>
                {this.props.rowsIdArray.map(rowId => this.renderRowById(rowId))}
            </ul>
        );
    }

    renderRowById(rowId) {
        return (
            <li key={rowId}>
                {this.props.renderRow(rowId, this.props.rowsById[rowId])}
            </li>
        );
    }
}
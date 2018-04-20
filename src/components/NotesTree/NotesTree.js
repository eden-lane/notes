import React, { Component } from 'react'

export class NotesTree extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.objectId}>{item.title}</li>
                ))}
            </ul>
        )
    }
}

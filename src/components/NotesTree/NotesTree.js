import React, { Component } from 'react'

export class NotesTree extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        )
    }
}

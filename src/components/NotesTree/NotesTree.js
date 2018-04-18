import React, { Component } from 'react'

export class NotesTree extends Component {
    render() {
        return (
            <div>
                notes
                {this.props.items.map(item => <div key={item.id}>{item.title}</div>)}
            </div>
        )
    }
}

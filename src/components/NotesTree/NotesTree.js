import React, { Component } from 'react'

export class NotesTree extends Component {

    render() {
        const items = this.props.items || []
        return (
            <ul>
                {items.map(item => {
                    return <li
                        key={item.objectId}
                        onClick={this.props.onClick}>
                        {item.title}
                        <NotesTree items={item.items} onClick={this.props.onClick}/>
                    </li>
                })}
            </ul>
        )
    }
}

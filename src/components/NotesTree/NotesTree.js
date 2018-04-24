import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class NotesTree extends Component {
    render() {
        const {
            items = [],
            onClick
        } = this.props
        return (
            <ul>
                {items.map(item => {
                    return (
                        <Node
                            key={item.objectId}
                            id={item.objectId}
                            title={item.title}
                            onClick={onClick}>
                            {this.renderItems(item)}
                        </Node>
                    )
                })}
            </ul>
        )
    }

    renderItems(item) {
        const items = item.items && item.items.toJS()
        if (items && items.length) {
            return <NotesTree items={item.items} onClick={this.props.onClick}/>
        }
        return null
    }
}

export class Node extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        onClick: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { id } = this.props
        this.props.onClick(id)
    }

    render() {
        const {
            id,
            title,
            onClick,
            children
        } = this.props;

        return (
            <li
                onClick={this.handleClick}>
                { title }
                { children }
            </li>
        )
    }
}

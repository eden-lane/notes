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
                {items.map((item) => {
                    return (
                        <Node
                            key={item.objectId}
                            id={item.objectId}
                            title={item.title}
                            item={item}
                            onClick={onClick}>
                            {this.renderItems(item)}
                        </Node>
                    )
                })}
            </ul>
        )
    }

    renderItems(item) {
        return null
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
        item: PropTypes.object,
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
            item,
            onClick,
            children
        } = this.props;

        return (
            <li
                onClick={this.handleClick}>
                { item.isSelected ? <b>{title}</b> : title }
                { children }
            </li>
        )
    }
}

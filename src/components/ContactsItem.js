import React, { Component } from 'react';
import './style.css'

class ContactsItem extends Component {
    state = {}
    render() {
        return (
            <div className="items-div" >
                <img src={this.props.url} ></img>
                <h3>{this.props.name}</h3>
                <span>{this.props.pop}</span>
            </div>
        );
    }
}
export default ContactsItem;
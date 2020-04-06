import React, { Component } from 'react';
import './style.css';
import contacts from './contacts.json';
import data from './data.json';
import ContactsItem from './ContactsItem';


class Contacts extends Component {
    state = {
        data: contacts,
        flagName: true,
        flagPop: true,
        addData: data[0],
    }
    sortByName = () => {
        this.setState({
            data:
                this.state.data.sort((a, b) => {
                    this.setState({ flagName: !this.state.flagName });
                    let elA = a.name.toUpperCase();
                    let elB = b.name.toUpperCase();
                    if (this.state.flagName) {
                        if (elA > elB) {
                            return 1
                        } else if (elA < elB) {
                            return -1
                        } else {
                            return 0
                        }
                    } else {
                        if (elA > elB) {
                            return -1
                        } else if (elA < elB) {
                            return 1
                        } else {
                            return 0
                        }
                    }



                })
        });
    }
    sortByPop = () => {
        this.setState({
            data:
                this.state.data.sort((a, b) => {
                    this.setState({ flagPop: !this.state.flagPop });
                    let elA = a.popularity;
                    let elB = b.popularity;
                    if (this.state.flagPop) {
                        if (elA > elB) {
                            return 1
                        } else if (elA < elB) {
                            return -1
                        } else {
                            return 0
                        }
                    } else {
                        if (elA > elB) {
                            return -1
                        } else if (elA < elB) {
                            return 1
                        } else {
                            return 0
                        }
                    }
                })
        });
    }
    add = () => {

    }
    render() {
        const mapArray = this.state.data.map((el, i) => {
            return <ContactsItem name={el.name} pop={el.popularity} url={el.pictureUrl} />
        })

        return (
            <section>
                <section>
                    <button onClick={this.sortByName} >Sort by Name</button>
                    <button onClick={this.sortByPop} >Sort by Pop</button>
                    <button onClick={this.add} >Add</button>
                </section>
                {mapArray}
            </section>
        );
    }
}
export default Contacts;
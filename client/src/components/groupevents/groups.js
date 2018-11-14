import React, { Component } from 'react';
import axios from 'axios';
import './eventstyle.css';

//the api key
const API_KEY = process.env.REACT_APP_API_KEY



class Groups extends Component {

    state = {
        query: 'tech',
        groups: []
    }
    //save button
    saveEvent() {
        // const eventData = {};
        const eventDataContainer = document.getElementsByClassName('eventtitle', [0])
        alert("Saved");
        console.log(eventDataContainer)
    }



    componentWillMount() {
        this.getMeetUps();
    }

    //Save Button


    getMeetUps() {
        //meetup api
        axios.get('https://api.meetup.com/find/groups?text=' + this.state.query + '&sign=true&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=' + API_KEY)
            //https://api.meetup.com/find/upcoming_events?topic_category=34&sign=true&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=
            .then(response => {
                //pull event data
                this.setState({ groups: response.data }, () => {
                    console.log(this.state)
                })

            })
    }
    //Query search groups
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getMeetUps()
                }
            }
        })
    }


    render() {

        //iterate through the array
        const groupItems = this.state.groups.map((group, i) => {

            return (
                //display...
                <div key={i} className="event">
                    <div className="eventcard">
                        <div className="card">
                            <h1 id={group.name} className="card-title eventtitle" >{group.name}</h1>
                            <div className="card-body">
                                <ul>
                                    <p id={group.members} className="card-text">Members: {group.members}</p>
                                    <p className="card-text">Location: {group.localized_location}</p>
                                    <a href={group.link} className="card-link">Link</a>
                                </ul>

                                <button id={group.id} onClick={this.saveEvent}>Save</button>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            //form for query text
            <div className="container">

                <form className="eventsearch">
                    <input className="eventsearchbar"
                        placeholder="Search For Group Events..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    {/* <p>{this.state.query}</p> */}
                </form>
                <div className="eventcontainer">
                    {groupItems}
                </div>
            </div>
        )
    }
}

export default Groups;


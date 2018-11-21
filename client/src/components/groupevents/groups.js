
import axios from "axios";
import React, { Component } from 'react';
import './eventstyle.css';


//the api key
const API_KEY = process.env.REACT_APP_API_KEY

class Groups extends Component {

    state = {
        query: 'tech',
        groups: [],
        savedEvents: [{
            title: "",
            id: "",
            location: "",
            link: "",
        }]

    }

    componentWillMount() {
        this.getMeetUps();
        console.log(this.state.isToggleOn)
    }


    //SAVE GROUP EVENT
    //---------------------------
    onClick(eventId, eventTitle, eventLocation, eventLink) {

        // if (this.isToggleOn === true) {
        //     alert('hello')
        // }

        let saveEvent = ({
            savedEvents: [{
                title: eventTitle,
                id: eventId,
                location: eventLocation,
                link: eventLink,
            }]
        })
        console.log(saveEvent)
        let savedObj = this.savedEvents;
        savedObj.push({ title: eventTitle, id: eventId, location: eventLocation, link: eventLink })
        console.log(savedObj)


        // let saveState = this.saved;
        // console.log(saveState)
        // saveState.updateState({ canSave: 'hidden' })
        // console.log(saveState)
    }




    //DISPLAY GROUP EVENTS
    //---------------------------
    getMeetUps() {
        //meetup api
        axios.get('https://api.meetup.com/find/groups?text=' + this.state.query + '&sign=true&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=' + API_KEY)

            //https://api.meetup.com/find/upcoming_events?topic_category=34&sign=true&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=
            .then(response => {
                //pull event data
                this.setState({ groups: response.data }, () => {
                    // console.log(this.state)
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
                    <img id="logoimage" src="https://files.slack.com/files-pri/TA2JAF9B8-FE0THTC1Z/debuddy.png" width="180px"></img>
                    <div id={group.id} >
                        <div className="card eventcard" >
                            <a href={group.link} target="_blank">
                                <h1 id={group.id} className="card-title eventtitle" >{group.name}</h1>
                            </a>
                            <div className="card-body">
                                <ul>
                                    {/* <p id={group.members} className="card-text">Members: {group.members}</p> */}
                                    <p className="card-text">Location: {group.localized_location}</p>
                                    {/* <a href={group.link} className="card-link">Link</a> */}
                                </ul>

                                <button id={group.id} class="save-eventbtn" onClick={this.onClick.bind(this.state, group.id, group.name, group.localized_location, group.link)}>
                                    Save</button>

                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div >
            )
        })
        return (
            //form for query text
            <div className="container" >

                <form className="eventsearch">
                    <input className="eventsearchbar"
                        placeholder="Search Groups..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    {/* <p>{this.state.query}</p> */}
                </form>
                <div className="eventcontainer">
                    {groupItems}
                </div>

                <div className="savedcontainer">

                </div>
            </div>
        )
    }
}

export default Groups;


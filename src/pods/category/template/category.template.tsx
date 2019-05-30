import * as React from "react"; 
import './styles.css' 
import {SearchBox} from "../../../common/organisms"; 
import {EventsList} from "../organism/events-list.organism"; 
import {connect} from "react-redux"; 
import {Event} from "../../../state/vm/event.vm"; 
 
export interface Props { 
    events: Array<Event> 
} 
 
function mapStateToProps(state) { 
    return { 
        events: state.categoryReducer.events 
    }; 
} 
 
export const CategoryTemplateInner = (props: Props) => { 
    const {events} = props; 
 
    return ( 
        <div className="container"> 
            <SearchBox/> 
            <div className="events-container"> 
                <EventsList events={events}/> 
            </div> 
        </div> 
    ); 
}; 
 
export const CategoryTemplate = connect( 
    mapStateToProps 
)(CategoryTemplateInner); 


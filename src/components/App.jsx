import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder,deleteReminder } from '../actions';
//import { bindActionCreators } from 'redux';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }
    addReminder2(){
        console.log('this.state',this.state);
        this.props.addReminder(this.state.text);
    }
    deleteReminder(id){
        console.log('deletions in application ',id);
        console.log('this.props',this.props);
        this.props.deleteReminder(id);
    }
    renderReminders(){
        const {reminders} = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">{reminder.text}</div>
                                <div
                                    onClick={()=>this.deleteReminder(reminder.id)}
                                    className="list-item delete-button">
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    render(){
        //console.log('this.props',this.props);
        return(
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                       <input
                        className="form-control"
                        placeholder="I have to..."
                        onChange={(event)=>this.setState({text:event.target.value})}
                       />
                    </div>
                    {this.renderReminders()}
                    <button onClick={()=>this.addReminder2()} type="button" className="btn btn-success">Add Reminder</button>
                </div>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addReminder},dispatch)
// }

function mapStateToProps(state){
    console.log('state',state);
    return {
        reminders:state
    }

}
export default connect(mapStateToProps,{addReminder, deleteReminder}) (App);
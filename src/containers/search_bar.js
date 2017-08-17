import React, {Component} from 'react';
import {fetchWeather} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import 'rxjs';
import PropTypes  from 'prop-types';
class SearchBar extends Component {

    state = {
       term: '',
    };

    onInputChange = (evt) => {
       // console.log(evt.target.value);
       this.setState({term: evt.target.value});
    };
    onFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    };
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Get a five-day forecast in your fav cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}
function mapStateToProps(state) {
    return {
        term: state.term ? state.term : ''
    };
}
function mapDispatchToProps (dispatch) {
 return  bindActionCreators({fetchWeather: fetchWeather}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);



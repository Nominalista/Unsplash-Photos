import React, { Component } from 'react';
import * as photoDetailActions from "../store/photoDetail/actions";
import * as photoDetailSelectors from "../store/photoDetail/reducer";
import './PhotoDetailScreen.css';
import { connect } from 'react-redux';


class PhotoDetailScreen extends Component {

    componentDidMount() {
        const photoId = this.props.match.params.id;
        this.props.dispatch(photoDetailActions.retrievePhoto(photoId));
    }

    render() {
        if (!this.props.photo) return this.renderLoading();
        return (
            <div className="PhotoDetailScreen">
                <button
                    className="ClearButton"
                    onClick={this.onBackButtonClick.bind(this)}/>
                <div className="img-container">
                    <img src={this.props.photo.urls.full} alt={this.props.photo.description}/>
                </div>
            </div>
        );
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    onBackButtonClick() {
        this.props.history.push(`/`);
    }
}

function mapStateToProps(state) {
    return {
        photo: photoDetailSelectors.getPhoto(state)
    };
}

export default connect(mapStateToProps)(PhotoDetailScreen);
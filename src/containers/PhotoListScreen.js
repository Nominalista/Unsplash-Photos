import React, { Component } from 'react';
import './PhotoListScreen.css';
import * as photoListActions from '../store/photoList/actions';
import * as photoListSelectors from '../store/photoList/reducer';
import ListView from '../components/ListView';
import ListRow from "../components/ListRow";
import Title from "../components/Title";
import { connect } from 'react-redux';

class PhotoListScreen extends Component {

    componentDidMount() {
        this.props.dispatch(photoListActions.retrievePhotos());
    }

    render() {
        if (!this.props.photosById) return this.renderLoading();
        return (
            <div className="PhotoListScreen">
                <Title/>
                <ListView
                    rowsIdArray={this.props.photosIdArray}
                    rowsById={this.props.photosById}
                    renderRow={this.renderRow.bind(this)}/>
            </div>
        );
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderRow(photoId, photo) {
        return (
            <ListRow
                rowId={photoId}
                onClick={this.onRowClick.bind(this)}>
                <img src={photo.urls.thumb} alt={photo.description}/>
                <p>{photo.user.name}</p>
            </ListRow>
        );
    }

    onRowClick(photoId) {
        this.props.history.push(`/${photoId}`);
    }
}

function mapStateToProps(state) {
    return {
        photosById: photoListSelectors.getPhotosById(state),
        photosIdArray: photoListSelectors.getPhotosIdArray(state)
    };
}

export default connect(mapStateToProps)(PhotoListScreen);
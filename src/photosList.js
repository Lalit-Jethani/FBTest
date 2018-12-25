import React, { Component } from "react";
import { connect } from "react-redux";
import Photos from "./photos"



class PhotosList extends Component {
   
   
    renderPhotos = (photos) =>{
        let pics = [];
        if(photos.length>0) {

             pics = photos.map((pic)=>{
                return (
                   
                    <Photos picture = {pic.picture} />
                  
                )
                   
             })

        }
        
          return pics;
    }

    render() {
        const { photos } = this.props.fbData;
        return (
            <div className="photo">
                {  this.renderPhotos(photos)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fbData: state.fbData
});

export default connect(mapStateToProps)(PhotosList);

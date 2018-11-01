import React, { Component } from 'react';

class Uploader extends Component {
    
    uploadAction(e) {
        e.preventDefault()
        let data = new FormData();
        let imagedata = document.querySelector('input[type="file"]').files[0];
        data.append("uploaded-image", imagedata);
    
        fetch("api/images/img_data", {
          method: "POST",
          body: data
        }).then(function (res) {
          if (res.ok) {
            alert("Perfect! ");
          } else if (res.status === 401) {
            alert("Oops! 401 occured");
          }
        }, 
        function (e) {
          console.log(e);    
          alert("Error submitting form!");
        });
    }    
    
    render() {
        return (
            <form onSubmit={this.uploadAction}>
            <h1>File Upload</h1>
            <input type="file" />
            <button type="submit">Upload</button>
            </form>
        )
    }
}

export default Uploader;
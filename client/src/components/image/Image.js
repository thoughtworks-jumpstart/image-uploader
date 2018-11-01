import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
    };
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    componentDidMount() {
        fetch('/api/images/img_data')
        .then((res) => {
            if(res.status === 404){
                return Promise.reject();
            }else{
                return res.json()
            }
        })
        .then((data) => {
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr =
                this.arrayBufferToBase64(data.img.data.data);
            this.setState({
                img: base64Flag + imageStr
            });
        }).catch(err => {
            console.log("No image in db");
        })
    }
    render() {
        const {img} = this.state;
        if (this.state.img){
            return (
                <img
                    src={img}
                    alt='Helpful alt text'/>
            )    
        }
        else {
            return null;
        }
    }
}

export default Image;
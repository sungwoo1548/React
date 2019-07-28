import React, { Component } from "react";
import $ from "jquery";

class IPAdressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "...",
        };

        this.processRequest = this.processRequest.bind(this);
    }

    processRequest(){
        $.get('http://ip.jsontest.com/',(data,status)=>{
            this.setState({
                ip_address : data.ip,
            });
        });
    }

    componentDidMount(){
        this.processRequest();
    }
    
    render() {
        return (
            <p>{this.state.ip_address}</p>
        );
    }
}

export default IPAdressContainer;
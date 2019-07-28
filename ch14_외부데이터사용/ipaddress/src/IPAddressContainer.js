import React, { Component } from "react";
import $ from "jquery";
import IPAddress from "./IPAddress";

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
            <IPAddress ip={this.state.ip_address}/>
        );
    }
}

export default IPAdressContainer;
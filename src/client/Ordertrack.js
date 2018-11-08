import React, { Component } from 'react';
import LoadingScreen from './order/LoadingScreen'
import Result from './order/Result'
import RecordNot from './order/RecordNot'


export default class Ordertrack extends Component {


  constructor(props) {
    super(props);
      this.state = {
        value: '',
        orderNumber : '',
        isLoading: false,
        isError : false,
      };

  }
  componentDidMount() {
      fetch(`/query/${this.props.match.params.id}/${this.props.match.params.zip}`)
      .then(res => res.json())
      .then(user =>{
        if(typeof(user.data) === "string"){
          this.setState({
            isLoading: true ,
            isError : true
          });

        }else{
          this.setState({
           value: JSON.parse(user.data[0]),
           orderNumber : user.data[1],
           isLoading: true
         })
        }
    });
  }

    render() {
      return (
        <div>
          {!this.state.isLoading ? (
            <LoadingScreen />
          ) : (
            this.state.isError ? (
              <RecordNot marketid={this.props.match.params.id}/>
            ) : (
              <Result tracking={this.state.value.TrackReply.CompletedTrackDetails.TrackDetails} marketid={this.props.match.params.id} ordernumber={this.state.orderNumber}/>
            )
          )}
        </div>
      );
    }
}

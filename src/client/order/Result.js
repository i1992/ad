import React, { Component } from 'react';
import {OrderStatus, Orderdiv,HeaderCard, Orderflex, Pcity, TextDiv, Orderimg,Rewardimage,EstimateDiv, Rewardimag, OrderText,OrderActivity, P} from './Resultcss';
import ActivityMap from './ActivityMap';
import {Div_Header, Headerimg, HeaderFlex, AnchoreDiv} from '../style/First'
import deliverd from '../../../assets/shipping-delivered-02.svg'

export default class Result extends Component {
  constructor(props) {
    super(props);
      this.state = {
        day: "",
        datee:"",
        username: null ,
      };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));

    this.getDay();
  }
  getDay = () => {
    var orderdate = this.props.tracking.DatesOrTimes[0].DateOrTimestamp
    var date = new Date(orderdate);
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var datee = orderdate.substring(0, 10);
    this.setState({ day : days[date.getDay()] });
    this.setState({ datee });
    };

  render() {
      const track = this.props.tracking;
      console.log("order_number", this.props.ordernumber);
    return (
<div>
  	<HeaderFlex>
  		<div>
  			<a href="https://bestchoiceproducts.com"><Headerimg src={require( '../../../assets/logo.png')} alt="header" /></a>
  		</div>
  		<AnchoreDiv> <a href="https://bestchoiceproducts.com" style={{ color: '#282828' }}>Back to bestchoiceproducts.com</a>
  		</AnchoreDiv>
  	</HeaderFlex>
  	<Div_Header>
  		<div>#{this.props.marketid}</div>
  	</Div_Header>
  	<Orderdiv>
  		<div>
  			<div>
  				<OrderStatus>
  					<HeaderCard>ORDER STATUS</HeaderCard>
  					<Orderflex>
  						<EstimateDiv>
  							<TextDiv>Estimated Delivery Date</TextDiv>{this.state.day} {this.state.datee}</EstimateDiv>
  						<EstimateDiv>
  							<TextDiv>Tracking No.</TextDiv>{track.TrackingNumber}
  							<div><a target="_blank" href={ "https://www.fedex.com/apps/fedextrack/?action=track&action=track&tracknumbers="+ this.props.ordernumber}>View More</a>
  							</div>
  						</EstimateDiv>
  					</Orderflex>
  					<OrderText>
            <div>
              {
                track.Events[0].EventDescription == "Delivered" ? (
                  <Orderimg src={deliverd} alt="DShipping" />
                ) : (
                   <Orderimg src={require( './shipping.svg')} alt="Shipping" />
                )
               }
            </div>
  						<P>Your Order Is {track.Events[0].EventDescription}</P>
  						<Pcity>{track.DestinationAddress.City}, {track.DestinationAddress.StateOrProvinceCode}</Pcity>
  					</OrderText>
  				</OrderStatus>
  			</div>
  			<div>
  				<a href="https://bestchoiceproducts.com/pages/rewards" target="_blank">
  					<Rewardimag src={require( '../../../assets/order-status-rewards-banner-d.jpg')} alt="Loading..." />
  				</a>
  			</div>
  		</div>
  		<OrderActivity>
  			<HeaderCard>ACTIVITY</HeaderCard>
  			<ActivityMap activityevent={ track.Events} />
  		</OrderActivity>
  	</Orderdiv>
  	<div>
  		<a href="https://bestchoiceproducts.com/pages/rewards" target="_blank">
  			<Rewardimage src={require( '../../../assets/order-status-rewards-banner-m.jpg')} alt="Loading..." />
  		</a>
  	</div>
</div>

    );
  }
}

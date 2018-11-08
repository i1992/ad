import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {  Label, Input, Button, Div_margin, Div_wrapper, stateOptions,  Div_title , Headerimg,Div_Header, HeaderFlex, AnchoreDiv} from './style/First';
import { Dropdown, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './app.css';
import { Link } from 'react-router-dom';



 class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
        zipcode : '',
        dropdown : '',
        isLoading: false,
        username: null ,
        error :false ,
        errorzip: false,
        droperror:false,
      };
    this.dropChange = this.dropChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.orderChange = this.orderChange.bind(this);
    this.zipChange = this.zipChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }


  handleClick(event) {
    if(this.state.dropdown == ""){
      this.setState({droperror: true});
    }else {
      this.setState({droperror: false});
      if(this.state.zipcode.match(/^[/\d]{5}?$/)){
        this.setState({errorzip: false});
        if (this.state.dropdown == "bestchoiceproducts"){
            if(this.state.value.match(/^[/\d]{6}?$/)){
               let path = `/orderstatus/${this.state.value}/${this.state.zipcode}`;
                this.props.history.push(path);
            }else{
               this.setState({error: true});
            }
        }else if (this.state.dropdown == "walmart"){
          if(this.state.value.match(/^[/\d]{13}?$/)){
             let path = `/orderstatus/${this.state.value}/${this.state.zipcode}`;
              this.props.history.push(path);
          }else{
             this.setState({error: true});
          }
        }else if(this.state.dropdown == "ebay"){
          if(this.state.value.match(/^[/\d]{8}?$/)){
             let path = `/orderstatus/${this.state.value}/${this.state.zipcode}`;
              this.props.history.push(path);
          }else{
             this.setState({error: true});
          }
        }else if(this.state.dropdown == "newegg"){
          if(this.state.value.match(/^[/\d]{9}?$/)){
             let path = `/orderstatus/${this.state.value}/${this.state.zipcode}`;
              this.props.history.push(path);
          }else{
             this.setState({error: true});
          }
        }else if(this.state.dropdown == "amazon"){
          if(this.state.value.match(/^([0-9]-?){17}$/)){
             let path = `/orderstatus/${this.state.value}/${this.state.zipcode}`;
              this.props.history.push(path);
          }else{
             this.setState({error: true});
          }
        }else if(this.state.dropdown == "rakutan"){
          if(this.state.value.match(/^([0-9]-?){23}$/)){
             let path = `/orderstatus/${this.state.value}/${this.state.zipcode}`;
              this.props.history.push(path);
          }else{
             this.setState({error: true});
          }
        }else if(this.state.dropdown == "google"){
          if(this.state.value.substring(0, 2) == "G-"){
             let path = `/orderstatus/${this.state.value}/${this.state.zipcode}`;
              this.props.history.push(path);
          }else{
             this.setState({error: true});
          }
        }
      }else{
        this.setState({errorzip: true});
      }
    }
  }

  orderChange(event) {
    this.setState({value: event.target.value});
  }
  zipChange(event) {
    this.setState({zipcode: event.target.value});
  }
  dropChange = (event, data) => {
      console.log(data.value);
      this.setState({dropdown: data.value});
    }


  render() {
    const { username } = this.state;
    return (
      <div>
      <HeaderFlex>
        <div>
          <a href="https://bestchoiceproducts.com"><Headerimg src={require('../../assets/logo.png')} alt="header" /></a>
        </div>
          <AnchoreDiv>
          <a href="https://bestchoiceproducts.com" style={{ color: '#282828' }}>Back to bestchoiceproducts.com</a>

        </AnchoreDiv>
      </HeaderFlex>
      <Div_Header></Div_Header>
      <Div_wrapper>

        <Div_title>Order Tracking</Div_title>
        <br />
        <Div_margin>Enter your information below to view order status.</Div_margin>
        <div>
            {this.state.droperror  ? (
              <Div_margin>
                <Message color='red'>Please Select Market that you looking For. </Message>
              </Div_margin>
            ) : (
              <div></div>
            )}
            {this.state.error  ? (
              <Div_margin>
                <Message color='red'>Please Enter Valid Order Number</Message>
              </Div_margin>
            ) : (
              <div></div>
            )}
            {this.state.errorzip  ? (
              <Div_margin>
                <Message color='red'>Please Enter Valid Billing Zipcode</Message>
              </Div_margin>
            ) : (
              <div></div>
            )}
         </div>
         <Div_margin>
           <Dropdown placeholder='BCP (bestchoiceproducts.com)' fluid selection options={stateOptions}  onChange={this.dropChange} />
         </Div_margin>
         <Div_margin>
           <Label>Order Number*</Label>
           <Input value={this.state.value} onChange={this.orderChange}/>
         </Div_margin>
         <Div_margin>
           <Label>Billing ZipCode*</Label>
           <Input value={this.state.zipcode} onChange={this.zipChange}/>
         </Div_margin>
        <Button type='submit' value="Submit" onClick={this.handleClick}>View Order Status</Button>
     </Div_wrapper>
     </div>
    );
  }
}

export default withRouter(App);

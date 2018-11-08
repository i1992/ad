import React, { Component } from 'react';
import { Div_Header, Headerimg, HeaderFlex,AnchoreDiv } from '../style/First'
import { HeaderCard, Orderimg } from './Resultcss';
import styled from 'styled-components';
import image from '../../../assets/shipping-page-graphics-05.svg'
export default class RecordNot extends Component {
    render() {
    const Div = styled.div`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 17vh;
          text-align:center;
          padding: 0px 20px;
      `;
      const Imag = styled.img`
            height: auto;
            margin-top:15%;
            margin-left: 15%;
            max-width: 70%;
        `;

        const Divorder = styled.div`
            width: 100%;
            height: 350px;
            border-radius: 2px;
            border: solid 1px #ececec;
        `;
        const Divv = styled.div`
            display:block;
            margin:50px 100px;
            @media (max-width: 731px) {
                margin:50px;
            }
        `;

      return (

      <div>
        <div>
        <HeaderFlex>
          <div>
            <a href="https://bestchoiceproducts.com"><Headerimg src={require('../../../assets/logo.png')} alt="header" /></a>
          </div>
            <AnchoreDiv>
            <a href="https://bestchoiceproducts.com" style={{ color: '#282828' }}>Back to bestchoiceproducts.com</a>

          </AnchoreDiv>
        </HeaderFlex>
          <Div_Header>
            <div>
            #{this.props.marketid}
            </div>
          </Div_Header>
        </div>
        <Divv>
         <Divorder>
            <HeaderCard>ORDER STATUS</HeaderCard>
            <Div>
              <div><Orderimg src={image} alt="Shipping" /> </div>
              <h4>Sorry! Your order is still processing.</h4>
              <p>A Tracking number will be provided as soon as your order is fulfilled.<br/>
                Please check back soon.
              </p>
            </Div>
         </Divorder>
        </Divv>
      </div>
      );
    }
}

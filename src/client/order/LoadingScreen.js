import React, { Component } from 'react';
import styled from 'styled-components';
import imgg from '../../../assets/d_loading-banner.gif';
import mimg from '../../../assets/m_loading-banner.gif'


export default class LoadingScreen extends Component {


  render() {
    const Imgloading = styled.img`
    @media (min-width: 732px) {
      height: auto;
      margin-top:15%;
      margin-left: 15%;
      max-width: 70%;
      display:block;
    }
    @media (max-width: 731px) {display:none;}
    `;
    const Mimgloading = styled.img`
    @media (max-width: 731px) {
      height: auto;
      margin-top:15%;
      margin-left: 15%;
      max-width: 70%;
    }
      @media (min-width: 732px) {display:none;}
    `;
    return (
      <div>
        <Imgloading src ={imgg}  alt="Loading..." />
        <Mimgloading src ={mimg}  alt="Loading..."  />
      </div>
    );
  }
}

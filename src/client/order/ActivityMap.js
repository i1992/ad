import React, { Component } from 'react';
import styled from 'styled-components';

export default class ActivityMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visible: 6,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 4};
    });
  }
  render() {
     const Div = styled.div`
      display : flex;
      margin: 0px 18px;
      justify-content:center;
      border-bottom: solid 0.5px #ececec;
      padding: 15px 0px;
    `;
    const DivIn = styled.div`
        flex:1;
        font-size: 14px;
      `;
    const Divthird = styled.div`
        flex:1;
        font-size: 12px;
        color: #9b9b9b;
        text-align:right;
      `;
      const Button = styled.button`
        display: block;
        margin: 17px auto;
        cursor: pointer;
        border:0;
        font-size: 12px;
        color: #9b9b9b;
      `;

        const P = styled.p`
          font-size: 12px;
          color: #9b9b9b;
        `;


    return (
      <div>
      {this.props.activityevent.slice(0, this.state.visible).map((item, index) => {
            var date = new Date(item.Timestamp);
            var d = date.toDateString().slice(4 , 10);
            var t = date.toLocaleTimeString().replace(/:\d{2}\s/,' ');
            return (
              <Div key={item.id}>
              <DivIn>
                {d}<P>{t}</P>
              </DivIn>
              <DivIn> {item.EventDescription}</DivIn>

              <Divthird>{item.Address.City} {item.Address.StateOrProvinceCode}</Divthird>
              </Div>
            );
        })}
        {this.state.visible < this.props.activityevent.length &&
             <Button onClick={this.loadMore} type="button" >Load Previous Updates</Button>
          }

      </div>
    );
  }
}

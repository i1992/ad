import styled from 'styled-components';

export const OrderStatus = styled.div`
    width: 100%;
    height: 280px;
    border-radius: 2px;
    border: solid 1px #ececec;
    position: relative;
    @media (max-width: 731px) {
      margin-bottom: 20px;
      height: 360px;
    }
`;
export const OrderActivity = styled.div`
      width: 100%;
      height: 515px;
      overflow: auto;
      border-radius: 2px;
      border: solid 1px #ececec;
`;

export const Rewardimag = styled.img`
  @media (min-width: 732px) {
    width : 100%;
    height: 220px;
    margin-top:15px;
    display:block;
  }
  @media (max-width: 731px) {
    display:none;
  }
`;
export const Rewardimage = styled.img`
  @media (min-width: 732px) {
    display:none;
  }
  @media (max-width: 731px) {
    display:block;
    width: 100%;
    padding: 0px 50px;
    margin-top: 20px;
    margin-bottom: 100px;
  }

`;

export const Orderdiv = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  display: grid;
  grid-template-columns: 49% 50%;
  max-width: 1260px;
  margin: 50px auto;
  justify-content: space-between;
  @media (max-width: 731px) {
    grid-row-gap: 10px;
    grid-template-columns: 100%;
  }
`;

export const HeaderCard = styled.p`
  font-family: Gotham-Medium;
  border-bottom: solid 1px #ececec;
  text-align: left;
  font-size: 14px;
  padding: 10px 18px;
  font-weight: 400;
`;

export const Orderflex = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 0px 18px;
  @media (max-width: 731px) {
      display:block;
  }
`;
export const EstimateDiv = styled.div`
    @media (max-width: 731px) {
        margin-bottom: 20px;
    }
`;
export const TextDiv = styled.div`
  font-size: 13px;
  color: #9b9b9b;
`;

export const Orderimg = styled.img`
    display: block;
    width:190px;
    margin-left: auto;
    margin-right: auto;
`;


export const P = styled.p`
  font-family: Gotham-Medium;
  text-align:center;
  padding-top:5px;
  margin:0;
`;
export const Pcity = styled.p`
  text-align:center;
  padding-top:5px;
  margin:0;
  color: #9b9b9b;
  font-size: 12px;
`;

export const OrderText = styled.div`
  position: relative;
  display:block;
  padding-bottom:20px;
`;

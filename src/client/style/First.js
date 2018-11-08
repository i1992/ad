import styled from 'styled-components';



export const Headerimg = styled.img`
    display: block;
    width:50px;
    margin-top:10px;


`;


export const Div_wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    margin-top:20px;
`;

export const Div_Header = styled.div`
    width: 100%;
    margin-top:15px;
    height: 65px;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    font-size:18px;
    text-align:center;
    background-color: #ececec;
`;

export const Label = styled.div`
    font-size: 12px;
`;

export const Div_title = styled.div`
    margin-bottom: 30px;
    width: 181px;
    font-size: 24px;
`;

export const Div_margin = styled.div`
    width:370px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 370px;
    height: 47px;
    border-radius: 3px;
    border: solid 1px #cccccc;
`;


export const Button = styled.button`
    width: 371px;
    height: 45px;
    border-radius: 3px;
    background-color: #282828
    color:#ffffff;
    font-size: 14px;
`;

export const HeaderFlex = styled.div`
    display:flex;
    display: flex;
    justify-content: space-between;
    margin: 0px 100px;
    @media (max-width: 731px) {
      justify-content: center;
        margin: 0px 50px;
    }
`;
export const AnchoreDiv = styled.div`
    display:block;
    margin: auto 0px;
    color: #282828;
    font-size: 15px;
    @media (max-width: 731px) {
        display:none;
    }
`;




export const stateOptions = [
  { key: 'bcp', value: 'bestchoiceproducts', text: 'BCP (bestchoiceproducts.com)' },
  { key: 'wal', value: 'walmart', text: 'Walmart' },
  { key: 'az', value: 'amazon', text: 'Amazon' },
  { key: 'se', value: 'ebay', text: 'eBay' },
  { key: 'rak', value: 'rakutan', text: 'Rakutan' },
  { key: 'new', value: 'newegg', text: 'Newegg' },
  { key: 'ga', value: 'google', text: 'Google Express' },
]

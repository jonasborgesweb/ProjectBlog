import styled from 'styled-components';
import colors from '../../../../styles/colors';


export const Center = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
`;

export const Container = styled.section`

`;

export const SingleBanner = styled.div`
  background-position:center;
  background-size: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  height: calc(100vh - 8.1rem);
  position: relative;

  &:before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.7)
  }
`;

export const Content = styled.div`
  max-width: 70rem;
  width: 100%;

  position: absolute;
  top:45%;
  left:50%;
  transform:translate(-50%,-50%);

  h1,
  p{
    text-align: center;
  }

  h1{
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 5.8rem;
    color:${colors.white};
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  }

  p{
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.8rem;
    color: ${colors.white};
    width:90%;
    margin: 0 auto;
  }
`;
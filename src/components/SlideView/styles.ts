import styled from 'styled-components';
import colors from '../../styles/colors';
import {shade} from 'polished';

export const Center = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
`;


export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 5rem;
`;

export const SliderSingle = styled.div`
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;

  min-width:100%;
  height: 100%;
  transition: .5s ease-in;

  position: relative;

  display:flex;
  align-items:center;

  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
  }
`;

export const SliderContent = styled.div`
  position: relative;
  max-width: 60rem;
  left: calc(5rem + 3%);

  h2{
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: ${colors.white};
    margin-bottom: 1.5rem;
    display: block;
  }

  p{
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: ${colors.white};
    margin-bottom: 3rem;
    display: block;
  }

  a{
    display: block;
    text-decoration: none;
    background-color: ${colors.grayDark};
    padding: 1.3rem 0;
    width: 20rem;
    border-radius: .3rem;
    transition: .3s ease;

    font-size: 1.4rem;
    font-weight: 500;
    color: ${colors.white};
    text-align: center;

    &:hover{
      transform: translateY(-.3rem);
      background-color: ${shade(0.2, colors.blue)}
    }
  }
`;

export const ButtonPrev = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  width: 5.5rem;
  height: 5.5rem;
  background-color: ${colors.blue};
  border:none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0,0,0,.2);
  transition: .3s ease;

  &:hover{
    background-color: ${shade(0.1,colors.blue)};
  }

  svg{
    color: ${colors.white};
    margin-left: -3px
  }
`;
export const ButtonNext = styled.button`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  width: 5.5rem;
  height: 5.5rem;
  background-color: ${colors.blue};
  border:none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0,0,0,.2);
  transition: .3s ease;

  &:hover{
    background-color: ${shade(0.1,colors.blue)};
  }

  svg{
    color: ${colors.white};
    margin-left: -3px
  }
`;
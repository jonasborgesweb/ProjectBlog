import styled from 'styled-components';
import colors from '../../styles/colors';
import {shade} from 'polished';

export const Center = styled.div``;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
`;
export const ContainerContent = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 102%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1000;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: ${colors.grayDark};
  max-width: 50rem;
  width: 90%;
  margin-bottom: 2%;
  padding: 2rem 2rem 5rem;
  border-radius: 1rem;

  @media screen and (max-width: 768px){
    width: 90%;
  }

  header{
    display: flex;
    justify-content: flex-end;

    > button{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -15px;
      margin-right: -15px;
      border: none;
      background-color: transparent;
      border-radius: 50%;
      padding: .5rem;

      &:hover{
        svg{
          color: ${shade(0.2, `${colors.white}`)};
        }
      }
      svg{
        transition: .3s ease;
        color: ${colors.white};
      }
    }
  }

  h2{
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.2rem;
    color: ${colors.white};
    text-align: center;
    margin-bottom: 2.4rem;
  }

  input{
    box-sizing: border-box;
    width: 100%;
    border: none;
    padding: 1.3rem 1.6rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: ${colors.gray};

    text-align: center;
    border-radius: .8rem;
  }

  > button{
    display: block;
    width: 100%;
    border: none;
    background-color: ${colors.blue}!important;
    margin: 1.2rem auto 0;
    padding: 1.3rem 0;
    border-radius: .8rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.4rem;
    color: ${colors.white};
    transition: .3s ease;

    &:hover{
        transform: translateY(-.3rem);
        background-color: ${shade(0.2, colors.blue)}!important;
      }
  }
`;
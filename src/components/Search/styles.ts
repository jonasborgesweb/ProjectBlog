import styled from 'styled-components';
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
    background-color: rgba(0,0,0,.5);
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
  background-color: #fff;
  width: 60%;
  margin-bottom: 2%;
  padding: 2rem 2rem 6rem;
  border-radius: 1rem;
  @media screen and (max-width: 768px){
    width: 90%;
  }
  header{
    display: flex;
    justify-content: flex-end;
    button{
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
          color: ${shade(0.1, '#D93D86')};
        }
      }
      svg{
        transition: .3s ease;
        color: #D93D86;
      }
    }
  }
`;
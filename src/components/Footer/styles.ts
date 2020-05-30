import styled from 'styled-components';
import {shade} from 'polished';
import colors from '../../styles/colors';

export const Center = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
`;
export const Container = styled.footer`
  
`;
export const ContainerContent = styled.div`
  background-color: ${colors.black};
  padding: 5rem 0;
`;

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 2.4rem;
`;

export const Column = styled.div`

`;

export const About = styled.div`
  h2{
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.white};
    margin-bottom: 1rem;
  }
  p{
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    color: ${colors.gray};
    margin-bottom: 2rem;
  }

  a{
    display: block;
    text-decoration: none;
    background-color: ${colors.grayDark};
    padding: .8rem 0;
    width: 11rem;
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

export const Newsletter = styled.div`
    h2{
      font-size: 2rem;
      font-weight: 700;
      color: ${colors.white};
      margin-bottom: 1rem;
    }

    form{
      div{
        &:not(:last-child){
          margin-bottom: 2rem;
        }
      }

      input{
        width: 80%;
        border: 1px solid ${colors.grayDarkTwo};
        background-color:${colors.grayDarkTwo};
        padding: 1.7rem 1.5rem;
        border-radius: .3rem;
        font-size: 1.4rem;
        font-weight: 300;
        color: ${colors.gray};

        @media screen and (max-width: 900px){
          width: 100%;
        }

        &::placeholder{
          opacity: .8;
        }
      }

      button{
        width: 80%;
        border: none;
        background-color:${colors.grayDark};
        padding: 1.7rem 1.5rem;
        border-radius: .3rem;
        font-size: 1.4rem;
        font-weight: 500;
        color: ${colors.white};
        text-align: center;
        transition: .3s ease;

        @media screen and (max-width: 900px){
          width: 100%;
        }

        &:hover{
          transform: translateY(-.3rem);
          background-color: ${shade(0.2, colors.blue)}
        }
      }
    }
`;

export const SocialMedia = styled.div`
  h2{
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.white};
    margin-bottom: 1rem;
  }

  ul{
    display: flex;
    align-items: center;

    list-style: none;

    li{

      &:not(:last-child){
        margin-right: 1rem;
      }
    }
  }
`;

export const SociaMediaButton = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: .3rem;
    background-color: ${colors.grayDark};
    transition: .3s ease;

    &:hover{
      transform: translateY(-.3rem);
      background-color: ${shade(0.2, colors.blue)}
    }

    img{
      width: 1.8rem;
    }
`;

export const Copyright = styled.div`
  background-color: ${colors.blackDark};
  padding: 2rem 0;
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 12rem;

  img{
    width: 100%;
    display: block;
  }
`;

export const Reserved = styled.div`
  p{
    font-size: 1.4rem;
    font-weight: 300;
    color: ${colors.white};
    text-align: center;
  }
`;

export const Create = styled.div`

  p{
    color: ${colors.white};
    font-size: 1.4rem;
    font-weight: 300;
    color: ${colors.white};
  }
`

import styled from 'styled-components';
import {shade} from 'polished';
import colors from '../../styles/colors';

export const Center = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
`;

export const Container = styled.section`
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10rem;
`;

export const Featured = styled.div`
  flex: 1;
  margin-right: 2rem;
`;

export const Post = styled.div`
  max-width: 850px;
  width: 100%;


  &:not(:last-child){
    margin-bottom: 6rem;
  }

  header{

    img{
      width: 100%;
      display: block;
      border-radius: .5rem;
    }
  }
`;

export const Tooltip = styled.div`
  border-radius: .5rem;
  padding: .5rem .3rem;
  background-color: ${colors.blue};
  width: 10rem;
  margin-bottom: 2rem;

  > p{
    color: ${colors.white};
    font-size:1.2rem;
    font-weight:400;
    text-align: center;
  }
`;

export const PostContent = styled.div`
  width: 90%;
  margin: -6rem auto 0;
  border-radius: .5rem;
  background-color: ${colors.white};
  box-shadow: 0 3px 10px rgba(0,0,0,.1);
  padding: 3rem;
  position: relative;

  strong{
    font-size: 2.6rem;
    line-height: 2.8rem;
    color: ${colors.black};
    margin-bottom: 1.5rem;
    display: block;
  }

  > p{
    font-size: 1.4rem;
    font-weight: 300;
    font-style: italic;
    color: ${colors.gray};
  }
`;

export const Bottom = styled.div`
  margin-top: 1.4rem;

  > p{
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${colors.gray};
    margin-bottom: 1.4rem;
  }

  a{
    display: block;
    text-decoration:none;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${colors.blue};
    transition: .3s ease;

    &:hover{
      color:${shade(0.1,colors.blue)}
    }

  }
`;

export const Sidebar = styled.aside`
  max-width: 28rem;
  width: 100%;
  /* background-color: orangered; */
`;

export const SidebarUsers = styled.div`
  margin-bottom: 6rem;
`;

export const User = styled.div`
  &:not(:last-child){
    margin-bottom: 6rem;
  }
  header{
    width: 100%;
    height: 25rem;
    background-position:top;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: .5rem;
  }

  > div{
    width: 90%;
    margin: -4rem auto 0;
    border-radius: .5rem;
    background-color: ${colors.white};
    box-shadow: 0 3px 10px rgba(0,0,0,.1);
    padding: 1rem;
    position: relative;

    strong{
      display:block;
      font-size: 2rem;
      font-weight: 700;
      color: ${colors.black};
      margin-bottom: .5rem;
    }

    p{
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 400;
      color: ${colors.gray};
      margin-bottom: 1.4rem;
    }

    a{
      display: block;
      text-decoration: none;
      background-color: ${colors.grayDark};
      padding: 1.3rem 0;
      width: 100%;
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
  }
`;

export const SidebarPost = styled.div`
  margin-bottom: 6rem;

  h2{
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.black};
    margin-bottom: 3rem;
  }
`;

export const PopularPost = styled.div`
  &:not(:last-child){
    margin-bottom: 3rem;
  }
  header{
    position: relative;
    margin-bottom: 1rem;

    img{
      width: 100%;
      display: block;
      border-radius: .5rem;
    }

    > div{
      position: absolute;
      top: 1rem;
      left: 1rem;
      margin-bottom: 0;
    }
  }

  > div{

    h3{
      font-size: 1.8rem;
      font-weight: 700;
      color: ${colors.black};
      margin-bottom: .2rem;
    }

    p{
      font-size: 1.4rem;
      font-weight: 300;
      font-style: italic;
      color: ${colors.gray};
      margin-bottom: 1rem
    }

    a{
      display: block;
      text-decoration:none;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${colors.blue};
      transition: .3s ease;

      &:hover{
        color:${shade(0.1,colors.blue)}
      }
    }
  }
`;

export const SidebarNewsletter = styled.div`
  header{
    h2{
      font-size: 2rem;
      font-weight: 700;
      color: ${colors.black};
      margin-bottom: 1rem;
    }
    p{
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 400;
      color: ${colors.gray};
      margin-bottom: 2rem;
    }
  }

  form{

    div{
      &:not(:last-child){
        margin-bottom: 1rem;
      }
    }

    input{
      width: 100%;
      border: 1px solid ${colors.grayLight};
      background-color:${colors.white};
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
      width: 100%;
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



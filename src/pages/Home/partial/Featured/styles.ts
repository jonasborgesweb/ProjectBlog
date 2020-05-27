import styled from 'styled-components';
import {shade} from 'polished';
import colors from '../../../../styles/colors';

export const Center = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
`;

export const Container = styled.div`
  flex: 1;
  margin-right: 4rem;
`;

export const Post = styled.div`
  max-width: 770px;
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
    font-weight: bold;
    color: ${colors.blue};
    transition: .3s ease;

    &:hover{
      color:${shade(0.1,colors.blue)}
    }

  }
`;
import styled from 'styled-components';
// import {shade} from 'polished';
import colors from '../../styles/colors';

export const Center = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
`;

export const Container = styled.section`
  margin: 7rem 0;
`;
export const ContainerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Post = styled.div`
  max-width: 770px;
  width: 100%;
  flex: 1;


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

export const PostContent = styled.section`
  margin-top: 2rem;

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
export const Bottom = styled.section`
  margin-top: 1.4rem;

  > p{
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${colors.gray};
    margin-bottom: 1.4rem;
  }
`;


export const Sidebar = styled.aside`
  max-width: 28rem;
  width: 100%;
`;

export const User = styled.div`
  &:not(:last-child){
    margin-bottom: 2rem;
  }
  header{
    img{
      display: block;
      width: 100%;
    }
  }
`;

export const PostRelacionaship = styled.div`
  &:not(:last-child){
    margin-bottom: 2rem;
  }
  header{
    margin-bottom: 2rem;
    
    img{
      display: block;
      width: 100%;
    }
  }

`;
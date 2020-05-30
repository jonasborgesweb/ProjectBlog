import styled from 'styled-components';
import colors from '../../styles/colors'

export const Center = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
`;
export const Container = styled.header`
  background-color: ${colors.blackDark};
  padding: 2rem 0;
`;
export const ContainerWrapper = styled.div`
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
export const Navigation = styled.nav`
  ul{
    display: flex;
    align-items: center;

    list-style: none;

    li{

      a{
        text-decoration: none;
        display: block;
        color: ${colors.white};
        font-size: 1.4rem;
        font-weight: 400;
      }

      &:not(:last-child){
        margin-right: 3.4rem;
      }
    }
  }
`;
export const Search = styled.div`
  position: relative;
  
  form{
    position: absolute
  }
`;


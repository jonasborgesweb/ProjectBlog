import styled from 'styled-components';
import {shade} from 'polished';
import colors from '../../../../styles/colors';


export const Center = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 0 auto;
`;

export const Container = styled.section`
  position: relative;
`;

export const ContainerFeatured = styled.div`
  display: grid;
  grid-template-columns:repeat(4,1fr);
  grid-gap: 3.2rem;

  margin-top: -12rem;
  min-height: 32rem;
`;

export const Card = styled.div`

  &:hover > div{
    transform: rotateY(180deg);
  }
`;

export const CardInner = styled.div`
  position: relative;
  width:100%;
  height: 100%;
  -webkit-transition: -webkit-transform 1.5s;
  transition: -webkit-transform 1.5s;
  -o-transition: transform 1.5s;
  transition: transform 1.5s;
  transition: transform 1.5s, -webkit-transform 1.5s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  box-shadow: 3px 3px 10px rgba(0,0,0,.2);
  border-radius: .8rem;

  background-color: transparent;

`;

export const CardFront = styled.div`
  position: absolute;
  width:100%;
  height:100%;
  padding: 3rem 3rem 4rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  background-color: #ccc;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  border-radius: .8rem;


  header{
    transform: translateZ(4rem);
    -ms-transform: translateZ(4rem);

    img{
      width: 4rem;
      height: 4rem;
    }
  }

  > div{
    transform: translateZ(4rem);
    -ms-transform: translateZ(4rem);

    h2{
      font-size: 2.6rem;
      line-height: 2.8rem;
      color: ${colors.black};
    }
  }
`;
export const CardBack = styled.div`
  position: absolute;
  width:100%;
  height:100%;
  padding: 4rem 3rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transform: rotateY(180deg);

  background-color: #ccc;

  border-radius: .8rem;

  > div{
    transform: translateZ(4rem);
    -ms-transform: translateZ(4rem);

    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h2{
      font-size: 2.6rem;
      line-height: 2.8rem;
      color: ${colors.black};
      margin-bottom: 1rem;
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
      font-size: 1.4rem;
      font-weight: 500;
      color: ${colors.blue};
      transition: .3s ease;

      &:hover{
        color: ${shade(0.2,colors.blue)};
      }
    }
  }

`;
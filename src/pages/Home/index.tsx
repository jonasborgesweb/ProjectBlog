import React from 'react';

import {
  Center,
  Container,
  ContainerWrapper
} from './styles';

import Featured from './partial/Featured';



const Home:React.FC = () => {
  
  return (
  <Container>
    <Center>
      <ContainerWrapper>
        <Featured />
        <h2>Sidebar</h2>
      </ContainerWrapper>
    </Center>
  </Container>
  )
}

export default Home;
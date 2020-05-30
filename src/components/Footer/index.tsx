import React from 'react';
import {Link} from 'react-router-dom';

import {
  Center,
  Container,
  ContainerContent,
  ContainerWrapper,
  Column,
  About,
  Newsletter,
  SocialMedia,
  SociaMediaButton,
  Copyright,
  CopyrightWrapper,
  Logo,
  Reserved,
  Create
} from './styles';

import {about, socialMedia} from '../../services/resources/dbInstitucional';

import logoFooter from '../../images/icons/Logo-branco.svg';

const Footer:React.FC = () => {

  return(
    <Container>
      <ContainerContent>
        <Center>
          <ContainerWrapper>
            <Column>
                {about.map(item=>(
                  <About key={item.title}>
                    <h2>{item.title}</h2>
                    <p>{item.shortDescription}</p>
                    <Link to="/about">Saiba mais</Link>
                  </About>
                ))}
            </Column>
            <Column>
              <Newsletter>
                <h2>Newsletter</h2>
                <form>
                  <div>
                    <input type="text" placeholder="Your name"/>
                  </div>
                  <div>
                    <input type="text" placeholder="Your e-mail address"/>
                  </div>
                  <div>
                    <button type="button">Subscribe to newsletter</button>
                  </div>
                </form>
              </Newsletter>
            </Column>
            <Column>
              <SocialMedia>
                <h2>Redes sociais</h2>
                <ul>
                  {
                    socialMedia.map(item=>(
                      <li key={item.id}>
                        <SociaMediaButton href={item.url} target="blank">
                          <img src={item.icon} alt={item.name}/>
                        </SociaMediaButton>
                      </li>
                    ))
                  }
                </ul>
              </SocialMedia>
            </Column>
          </ContainerWrapper>
        </Center>
      </ContainerContent>
      <Copyright>
        <Center>
          <CopyrightWrapper>
            <Logo>
            <Link to="/">
              <img src={logoFooter} alt="Logomarca Footer"/>
            </Link>
            </Logo>
            <Reserved>
              <p>{new Date().getFullYear()} - Todos os direitos Reservados</p>
            </Reserved>
            <Create>
              <p>Created by: Jonas Borges</p>
            </Create>
          </CopyrightWrapper>
        </Center>
      </Copyright>
    </Container>
  )
}

export default Footer;

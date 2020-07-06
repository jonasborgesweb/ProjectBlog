import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';

import logoWhite from '../../images/icons/Logo-branco.svg';
import ModalSearch from '../../components/Search';

import {
  Center,
  Container,
  ContainerWrapper,
  Logo,
  Navigation,
  Search
} from './styles'

const Header:React.FC = () =>{
  const[isSearchVisible, setIsSearchVisible] = useState(false);

  return(
    <Container>
      <Center>
        <ContainerWrapper>
          <Logo>
            <Link to="/">
              <img src={logoWhite} alt="Logomarca"/>
            </Link>
          </Logo>
          <Navigation>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Serviços</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </Navigation>
          <Search>
            <button type="button" onClick={()=>setIsSearchVisible(true)}>
            <AiOutlineSearch size={28} />
            </button>
            {isSearchVisible &&
              <ModalSearch id="modal" onClose={()=>setIsSearchVisible(false)}>
                <h2>Pesquisar</h2>
                <input type="text" placeholder="Digite aqui o termo da pesquisa . . ."/>
                <button type="button">Buscar</button>
              </ModalSearch>
            }
          </Search>
        </ContainerWrapper>
      </Center>
    </Container>
  )
}

export default Header;
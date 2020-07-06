import React,{useState, useCallback, useEffect} from 'react';

import {
  Center,
  Container,
  SingleBanner,
  Content,

} from './styles';

import {banner} from '../../../../services/resources/dbInstitucional';

interface IBanner{
  id: number;
  title: string;
  shortDescription:string;
  urlImage:string;
}

const Banner:React.FC = () =>{
  const [isBanner,setIsBanner] = useState<IBanner[]>([]);

  const loadingBanner = useCallback(()=>{
    setIsBanner(banner);
  },[]);

  useEffect(()=>{
    loadingBanner();
  },[loadingBanner])

  return(
    <Container>
      {isBanner.map(banner=>(
        <SingleBanner key={banner.id} style={{backgroundImage:`url(${banner.urlImage})`}}>
          <Center>
            <Content>
              <h1>{banner.title}</h1>
              <p>
                {banner.shortDescription}
              </p>
            </Content>
          </Center>
        </SingleBanner>
      ))}
    </Container>
  )
}

export default Banner;
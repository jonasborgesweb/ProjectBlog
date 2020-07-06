import React,{useState, useCallback, useEffect} from 'react';

import {services} from '../../../../services/resources/dbInstitucional';

import {
  Center,
  Container,
  ContainerFeatured,
  Card,
  CardInner,
  CardFront,
  CardBack
} from './styles';


interface IService{
  id: number;
  title: string;
  shortDescription:string;
  icon:string;
}

const Services:React.FC = () =>{
  const [isService, setIsService] = useState<IService[]>([]);

  const loadingService = useCallback(()=>{
    setIsService(services);
  },[])

  useEffect(()=>{
    loadingService();
  },[loadingService])


  return(
    <Container>
      <Center>
        <ContainerFeatured>
          {isService.map(service => (
            <Card key={service.id}>
              <CardInner>
                <CardFront >
                  <header>
                    <img src={service.icon} alt={service.title}/>
                  </header>
                  <div>
                    <h2>
                      {service.title}
                    </h2>
                  </div>
                </CardFront>
                <CardBack>
                  <div>
                    <h2>
                      {service.title}
                    </h2>
                    <p>
                      {service.shortDescription}
                    </p>
                    <a href="#as">Saiba mais</a>
                  </div>
                </CardBack>
              </CardInner>
            </Card>

          ))}
        </ContainerFeatured>
      </Center>
      <h1>Services</h1>
    </Container>
  )
}

export default Services;
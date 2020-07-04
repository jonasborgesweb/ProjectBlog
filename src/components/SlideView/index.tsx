import React,{useState, useCallback, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'

import {posts} from '../../services/resources/database';

import {
  Center,
  Container,
  SliderSingle,
  ButtonNext,
  ButtonPrev,
  SliderContent
} from './styles';

interface IPost {
  id:string,
  urlImage: string;
  title: string,
  shortBody:string;
}

const SlideView:React.FC = () =>{
  const [isPost, setIsPost] = useState<IPost[]>([]);
  const [x,setX] = useState(0);

  const loadingPosts = useCallback(()=>{
    setIsPost(posts);
  },[]);

  const prevSlider = useCallback(()=>{
    x === 0 ? setX(-100 * (isPost.length - 1) ): setX(x + 100)
  },[x,isPost]);

  const nextSlider= useCallback(()=>{
    x === - 100 * (isPost.length - 1) ? setX(0) : setX(x - 100)
  },[x,isPost]);

  useEffect(()=>{
    loadingPosts();
  },[loadingPosts]);

  return(
    <Container>
      {isPost.map((post)=>(
        <SliderSingle key={post.id} style={{transform: `translateX(${x}%)`,backgroundImage:`url(${post.urlImage})`}}>
          <Center>
            <SliderContent>
              <h2>{post.title}</h2>
              <p>{post.shortBody}</p>
              <Link to={'/post/' + post.id} >Saiba mais</Link>
            </SliderContent>
          </Center>
        </SliderSingle>
      ))}
        <ButtonPrev onClick={prevSlider}>
          <AiOutlineLeft size={35}/>
        </ButtonPrev>
        <ButtonNext onClick={nextSlider}>
          <AiOutlineRight size={35}/>
        </ButtonNext>
    </Container>
  );
}

export default SlideView;
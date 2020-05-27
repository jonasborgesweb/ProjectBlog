import React, { useEffect,useState, useCallback } from 'react';
import {Link} from 'react-router-dom';
import api from '../../../../services/api';

import {
  Container,
  Post,
  PostContent,
  Tooltip,
  Bottom
} from './styles';

interface IPost {
  id:number,
  category_id:number,
  user_id: number,
  urlImage: string;
  title: string,
  shortBody: string;
}

interface ICategory {
  id:number;
  name:string;
}

interface IUser{
  id: string;
  name:string;
}

const Featured:React.FC = () => {
  const [isPost, setIsPost] = useState<IPost[]>([]);
  
  const [isCategory, setIsCategory] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory[]>([]);
  
  const [isUser, setIsUser] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser[]>([]);

  useEffect(()=>{
    api.get('/posts').then((response)=>{
      setIsPost(response.data);
    })
    
    api.get('/categories').then((response)=>{
      setIsCategory(response.data);
    })
    
    api.get('/users').then((response)=>{
      setIsUser(response.data);
    })
  },[]);

  const loadingCategory = useCallback((id)=>{
    const cat = isCategory.filter((category)=>category.id === id)
    setSelectedCategory(cat);
  },[isCategory]);

  const loadingUser = useCallback((id)=>{
    const user = isUser.filter((user)=>user.id === id)
    setSelectedUser(user);
  },[isUser]);

  console.log("Categoria",isCategory);

  return(
    <Container>
      {isPost.map(post =>(
        <Post key={post.id}>
          <header>
           <img src={post.urlImage} alt={post.title}/>
          </header>
          <PostContent>
            <Tooltip >
              <p>CategoryID: {post.category_id}</p>
            </Tooltip> 
            <strong>{post.title}</strong> 
            <p>UserID: {post.user_id} + Date</p>
            <Bottom>
              <p>{post.shortBody}</p> 
              <Link to={'/post/' + post.id} >Ler mais . . .</Link>
            </Bottom>
          </PostContent>
        </Post>
      ))
      }
    </Container>
  )
}

export default Featured;
import React, {useState, useEffect,useCallback} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

import {users, categories, posts} from '../../services/resources/database';

import {
  Center,
  Container,
  ContainerWrapper,
  Post,
  PostContent,
  Bottom,
  Tooltip,
  Sidebar,
  User,
  PostRelacionaship
} from './styles';

interface IPostParams {
  id: string;
}

interface IPost {
  id:string,
  category_id:number,
  user_id: number,
  urlImage: string;
  title: string,
  body: string;
}

interface ICategory {
  id:number;
  name:string;
}

interface IUser{
  id: number;
  name:string;
  avatar_url: string;
  email:string;
  description:string;
}

const SinglePosts:React.FC = (id) =>{
  const [isPost, setIsPost] = useState<IPost>();
  const [isUser, setIsUser] = useState<IUser>();
  const [isCategory, setIsCategory] = useState<ICategory>();
  const [isPostRelacionaship, setIsPostRelacionaship] = useState<IPost[]>();

  const {params} = useRouteMatch<IPostParams>();

  const loadingPost = useCallback((id)=>{
    const post = posts.find(post => post.id === params.id);

    setIsPost(post);

  },[params.id]);

  const loadingUser = useCallback(()=>{
    const userFind = users.find(user => user.id === isPost?.user_id);

    setIsUser(userFind);

  },[isPost]);

  const loadingCategory = useCallback(()=>{
    const categoryFind = categories.find(category => category.id === isPost?.category_id);

    setIsCategory(categoryFind);

  },[isPost]);

  const loadingPostsRelacionaship = useCallback(()=>{
    const post = posts.filter((post)=>post.category_id === isPost?.category_id && isPost.id !== post.id)

    setIsPostRelacionaship(post);
  },[isPost])

  useEffect(()=>{
    loadingPost(params.id);
    loadingUser();
    loadingCategory();
    loadingPostsRelacionaship();

  },[loadingPost,params.id,loadingUser,loadingPostsRelacionaship,loadingCategory]);

  return(
    <Container>
      <Center>
        <ContainerWrapper>
          <Post>
            <header>
              <img src={'../../' + isPost?.urlImage} alt={isPost?.title}/>
            </header>
            <PostContent>
              <Tooltip >
                <p>{isCategory?.name}</p>
              </Tooltip>
              <strong>{isPost?.title}</strong>
              <p>Autor: {isUser?.name}</p>
              <Bottom>
                <p>{isPost?.body}</p>
              </Bottom>
            </PostContent>
          </Post>
          <Sidebar>
            <div>
              <h2>Author</h2>
              <User>
                <header>
                  <img src={isUser?.avatar_url} alt={isUser?.name}/>
                </header>
                <strong>{isUser?.name}</strong>
                <p>{isUser?.email}</p>
                <p>{isUser?.description}</p>
              </User>
            </div>
            <div>
              <h3>Post Relacionados</h3>
              {
                isPostRelacionaship?.map(post=>(
                  <PostRelacionaship key={post.id}>
                    <header>
                      <img src={post.urlImage} alt={post.title}/>
                    </header>
                    <Tooltip >
                      <p>{isCategory?.name}</p>
                    </Tooltip>
                    <strong>{post.title}</strong>
                    <Link to={'/blog/post/' + post.id} >Ler mais . . .</Link>
                  </PostRelacionaship>
                ))
              }
            </div>
          </Sidebar>
        </ContainerWrapper>
      </Center>
    </Container>
  )
}

export default SinglePosts;
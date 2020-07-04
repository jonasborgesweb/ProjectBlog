import React, { useEffect,useState, useCallback } from 'react';
import {Link} from 'react-router-dom';

import {users, categories, posts} from '../../services/resources/database';
import SlideView from '../../components/SlideView'

import {
  Center,
  Container,
  ContainerWrapper,
  Featured,
  Post,
  PostContent,
  Tooltip,
  Bottom,
  Sidebar,
  SidebarUsers,
  User,
  SidebarPost,
  PopularPost,
  SidebarNewsletter,
} from './styles';


interface IPost {
  id:string,
  category_id:number,
  user_id: number,
  urlImage: string;
  title: string,
  shortBody:string;
  body: string;
}

interface IUser{
  id: number;
  name:string;
  avatar_url: string;
  email:string;
  description:string;
}

const Home:React.FC = () => {
  const [isPost, setIsPost] = useState<IPost[]>([]);
  const [isUsers, setIsUsers] = useState<IUser[]>([]);

  const loadingPosts = useCallback(()=>{
    setIsPost(posts);
  },[])
  const loadingUsers = useCallback(()=>{
    setIsUsers(users);
  },[])

  const categoryPostName = useCallback((id)=>{
    const categoryName = categories.find((cat)=>cat.id === id);

    return categoryName?.name;
  },[]);

  const userPostName = useCallback((id)=>{
    const userName = users.find((author)=>author.id === id);

    return userName?.name;
  },[]);


  useEffect(()=>{
    loadingPosts();
    loadingUsers();
  },[loadingPosts,loadingUsers])


  return (
  <Container>
    <SlideView />
    <Center>
      <ContainerWrapper>
        <Featured>
          {isPost.map(post =>(
            <Post key={post.id}>
              <header>
                <img src={post.urlImage} alt={post.title}/>
              </header>
              <PostContent>
                <Tooltip >
                  <p>{categoryPostName(post.category_id)}</p>
                </Tooltip>
                <strong>{post.title}</strong>
                <p>Autor: {userPostName(post.user_id)}</p>
                <Bottom>
                  <p>{post.shortBody}</p>
                  <Link to={'/post/' + post.id} >Ler mais . . .</Link>
                </Bottom>
              </PostContent>
            </Post>
          ))
          }
        </Featured>
        <Sidebar>
          <SidebarUsers>
            {isUsers.map(user=>(
              <User key={user.id}>
                <header style={{backgroundImage:`url(${user.avatar_url})`}}>
                  {/* <img src={user.avatar_url} alt={user.name}/> */}
                </header>
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.description}</p>
                  <Link to={'/users/' + user.id} >Saiba mais</Link>
                </div>
              </User>
            ))}
          </SidebarUsers>
          <SidebarPost>
            <h2>Popular Posts</h2>
              {isPost.map(post=>(
                <PopularPost key={post.id}>
                  <header>
                    <img src={post.urlImage} alt={post.title}/>
                    <Tooltip>
                      <p>{categoryPostName(post.category_id)}</p>
                    </Tooltip>
                  </header>
                  <div>
                    <h3>{post.title}</h3>
                    <p>Autor: {userPostName(post.user_id)}</p>
                    <Link to={'/post/' + post.id} >Ler mais . . .</Link>
                  </div>
                </PopularPost>
              ))}
          </SidebarPost>
          <SidebarNewsletter>
            <header>
              <h2>E-mail newsletter</h2>
              <p>Sign up to receive email updates and to hear what's going on.</p>
            </header>
            <form>
              <div>
                <input type="text" placeholder="Your name"/>
              </div>
              <div>
                <input type="text" placeholder="Your e-mail address"/>
              </div>
              <button type="button">Subscribe to newsletter</button>
            </form>
          </SidebarNewsletter>
        </Sidebar>
      </ContainerWrapper>
    </Center>
  </Container>
  )
}

export default Home;
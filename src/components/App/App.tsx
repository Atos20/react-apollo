//libraries
import  React, { useState }  from 'react'
import { Switch, Route } from 'react-router-dom';
import  { gql, useMutation, useQuery } from '@apollo/client'
//pages/compoenents
import Header from '../Header/Header';
import { Home } from '../../Pages/Home/Home'
import { About } from '../../Pages/About/About'
import { Posts } from '../Posts/Posts'
import { IPost } from '../../common/interfaces';
//styles
import './App.css'

interface IForData {
  title: string;
  body: string;
}

interface CreatePostInput {
  variables: {
    input: {
      title: string,
      body: string
    }
  }
}
const App: React.FC = () => {
  const [newPost, setNewPost] = useState<IForData>({});


 
const GET_POSTS = gql`
  query GetPosts($options: PageQueryOptions!) {
    posts(options: $options) {
      data{
        id
        title
        body
      }
    }
  }
`

const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            title
            body
        }
    }
`

const useCreatePost = (): ((
  createPostInput: CreatePostInput,
) => any) => {
  const [createPost] = useMutation(CREATE_POST, {
      update(cache, { data: { createPost } }) {
          cache.modify({
              fields: {
                  posts(existingPosts ) {
                      const newPostRef = cache.writeFragment({
                          data: createPost,
                          fragment: gql`
                              fragment NewPost on Post {
                                id,
                                title,
                                body 
                              }
                          `
                      });
                      return [existingPosts, newPostRef]
                  },
              },
          });
      },
  });
  return createPost
}



const useGetPost =  ()=> {
  const { data } = useQuery(GET_POSTS, {
    variables: {options: { paginate: { page: 1, limit: 10} } }
  })
  const promise = data?.posts?.data

  console.log(promise)
  return  promise
}

const apiPosts = useGetPost()

const updateChange = (e) => {
  setNewPost( {...newPost ,[e.target.name] : e.target.value})
}
const createPost = useCreatePost();

const submitNewPost = async() => {
  const {body, title } = newPost
  createPost({ variables: { input: { title, body } }});
  console.log({...newPost, id: Date.now()})
}


  return (
    <>
    
      
        <Header />
        <div className="form">
          <input type="text" placeholder="body" value={newPost.body} onChange={(e) => updateChange(e)}  name="body"/>
          <input type="text" placeholder="title" value={newPost.title} onChange={(e) =>updateChange (e)}  name="title"/>
          <button className="add" onClick={()=> submitNewPost()}>Add post</button>
        </div>

        <Switch>

          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/posts'>
            <Posts posts={apiPosts}/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>



        </Switch>
    </>
  )
}

export default App

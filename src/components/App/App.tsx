//libraries
import  React, { useState }  from 'react'
import { Switch, Route } from 'react-router-dom';
import  { gql, useQuery } from '@apollo/client'
//pages/compoenents
import Header from '../Header/Header';
import { Home } from '../../Pages/Home/Home'
import { About } from '../../Pages/About/About'
import { Posts } from '../Posts/Posts'
import { IPost } from '../../common/interfaces';
//styles
import './App.css'

const App: React.FC = () => {
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



const useGetPost =  ()=> {
  const { data } = useQuery(GET_POSTS, {
    variables: {options: { paginate: { page: 1, limit: 10} } }
  })
  const promise = data?.posts?.data

  console.log(promise)
  return  promise
}

const apiPosts = useGetPost()




  return (
    <>
    
        
        <Header />

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

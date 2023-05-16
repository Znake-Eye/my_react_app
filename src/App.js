
import { NavLink, Routes,Route,useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import About from "./About"
import Missing from "./Missing"
import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"

function App() {
  const [posts, setPosts] = useState([
    {
      id:1,
      title:"My first post",
      datetime: "July 01,2021",
      body:"Hello world.This is Manh vichhai first post"
    },
    {
      id:2,
      title:"My 2nd post",
      datetime:"july 01,2021",
      body:"Royal university is in phnom penh that have many students are studying there"
    },
    {
      id:3,
      title:"My 3rd post",
      datetime: "july 01,2021",
      body: "The capital of cambodia is Phnom Penh city.It's awesome but I want to live in countryside and work from home."
    },
    {
      id:4,
      title:"My fourth Post",
      datetime:"july 01,2021",
      body:"Royal palace is the place that really famouse in cambodia. I also like to visit there."
    }
  ])
  // console.log(posts)
 
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navicate = useNavigate()

  useEffect(()=>{
    const fillerResult = posts.filter(post => 
      ((post.body.toLowerCase())).includes(search.toLowerCase())
      ||  ((post.title.toLowerCase())).includes(search.toLowerCase())
      )

      setSearchResults(fillerResult.reverse())
  },[posts,search])

  const hanbleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date() , "MMMM dd, yyyy pp");
    const newPost = {id, title:postTitle, datetime, body:postBody}

    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navicate('/')
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    navicate('/')

  }
  return (
    <>
    <Header title="React JS Blog"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home posts={searchResults} setPosts={setPosts} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/post' element={<NewPost hanbleSubmit={hanbleSubmit}
                                               postTitle={postTitle} 
                                               setPostTitle={setPostTitle}
                                               postBody={postBody}
                                               setPostBody={setPostBody}/>} />
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        <Route path='*' element={<Missing/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

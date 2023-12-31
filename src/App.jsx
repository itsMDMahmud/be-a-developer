import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"




function App() {
  const [count, setCount] = useState(0)
  const [readTime, setReadtime] = useState("0")
  const [bmBlog, setBmBlog] = useState([]);


  //reading time--------------------------------------------

  const handleBookmark = (time) => {
    // console.log(time);
    const previousBookmark =JSON.parse(localStorage.getItem("readTime"));
    // console.log(previousBookmark);
    if (previousBookmark) {
      const sum = previousBookmark + time;
      localStorage.setItem("readTime", sum);
      setReadtime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadtime(time);
    }
  }
  // bookmark blogs -------------------------------------------


  const bookMarkBlogs = (blogName) => {
    
    if (bmBlog.find( item => item ==blogName)) {
      toast("Already Bookmarked");
    
    }
    else{
      const newBlogName = [...bmBlog, blogName];
      setBmBlog(newBlogName);
      // console.log(bmBlog);

    }
  }

  return (
    <div className="App">      
      <Header></Header>
      <MainSection readTime={readTime} bmBlog={bmBlog} bookMarkBlogs={bookMarkBlogs} handleBookmark={handleBookmark}></MainSection>
      <ToastContainer></ToastContainer>
      
    </div>
  )
}

export default App

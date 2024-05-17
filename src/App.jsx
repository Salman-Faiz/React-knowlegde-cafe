
import { parse } from 'postcss';
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import './index.css'
import { useState } from "react";


function App() {
  
  const [bookmarks,setBookmarks] = useState([]);

  const handleBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);
    // console.log(newBookmarks);
}
const [readingTime,setReadingTime]=useState(0);

const handleReadingTime = (min) =>{
const time =readingTime + parseInt(min);
setReadingTime(time);
console.log(time);
}


  return (
    <>
     <Header></Header>
   <div className='flex justify-between mx-32 gap-4'>
     <Blogs handleBookmarks={handleBookmarks}
     handleReadingTime={handleReadingTime}
     ></Blogs>
     <Bookmarks bookmarks={bookmarks}
     readingTime={readingTime}
    
     ></Bookmarks>
   </div>
     
   
      
    </>
  )
}

export default App

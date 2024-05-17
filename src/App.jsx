
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import './index.css'


function App() {
  

  return (
    <>
     <Header></Header>
   <div className='flex justify-between mx-32 gap-4'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
   </div>
     
   
      
    </>
  )
}

export default App

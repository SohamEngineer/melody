import { Route, Routes } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"


const Display = () => {

 
  return (
    <div  className="w-[100%] m-2 px-2 md:px-6 pt-4 rounded  text-white overflow-auto lg:w-[100%] lg:ml-0 ">
        <Routes>
            <Route path="/" element={<DisplayHome/>}/>
            <Route path="/album/:id" element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default Display
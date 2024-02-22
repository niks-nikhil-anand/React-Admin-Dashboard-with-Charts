import AdminSideBar from "../component/AdminSideBar"
import { FaSearch , FaBell} from "react-icons/fa";
import userImg from '../assets/person.png'

const dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar/>
      <main className="dashboard">
        
       <div className="bar">
       <FaSearch />
       <input type="text" placeholder="Search for data, users, docs "/>
       <FaBell />
       <img src= {userImg} alt="img" />
        </div>

      </main>
    </div>
  )
}

export default dashboard
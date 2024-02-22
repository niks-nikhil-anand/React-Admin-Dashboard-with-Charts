import { IconType } from "react-icons";
import {Link ,Location , useLocation} from 'react-router-dom'
import { MdDashboard , MdProductionQuantityLimits } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";




const AdminSideBar = () => {
  const location = useLocation()
  return (
    <aside>
      <h2>Logo</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
          url="/admin/dashboard" 
          text="Dashboard"
          Icon={MdDashboard}
          location={location}
          />
          <Li
          url="/admin/product" 
          text="Product"
          Icon={FaShoppingBag}
          location={location}
          />
          <Li
          url="/admin/customer" 
          text="Customer"
          Icon={IoIosPerson}
          location={location}
          />
          <Li
          url="/admin/transaction" 
          text="Transaction"
          Icon={GrTransaction}
          location={location}
          />
        </ul>
      </div>
    </aside>
  )
};

interface LiProps {
  url : string ,
  text : string ,
  location : Location ,
  Icon : IconType

}

const Li = ({url , text , location , Icon}:LiProps) => (
  <li
  style={{
    backgroundColor : location.pathname.includes(url)? "rgba(0 ,115 , 255)": "white" 
  }}
  >
    <Link to={url}>
      <Icon/>
      {text}

    </Link>
  </li>
)

export default AdminSideBar
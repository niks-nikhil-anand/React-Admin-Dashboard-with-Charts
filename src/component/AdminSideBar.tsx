import { IconType } from "react-icons";
import {Link ,Location , useLocation} from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaShoppingBag , FaChartBar , FaChartPie } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { LuLineChart } from "react-icons/lu";
import { IoStopwatch } from "react-icons/io5";
import { RiCoupon5Fill } from "react-icons/ri";
import { LuCoins } from "react-icons/lu";


const AdminSideBar = () => {
  const location = useLocation()
  return (
    <aside>
      <h2>Logo</h2>
      <Dashboard location={location} />
      <Charts location={location} />
      <Apps location={location} />
    </aside>
  )
};


// Dashboard component

const Dashboard = ({location} : {location : Location}) => (
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
) 

// Charts Components 

const Charts = ({location} : {location : Location}) =>(
      <div>
        <h5>Charts</h5>
        <ul>
          <Li
          url="/admin/chart/bar" 
          text="Bar"
          Icon={FaChartBar}
          location={location}
          />
          <Li
          url="/admin/chart/pie" 
          text="Pie"
          Icon={FaChartPie}
          location={location}
          />
          <Li
          url="/admin/chart/line" 
          text="Line"
          Icon={LuLineChart}
          location={location}
          />
         
        </ul>
      </div>
)

// Addons Apps

const Apps = ({location} : {location : Location})=> (
  <div>
        <h5>Apps</h5>
        <ul>
          <Li
          url="/admin/app/stopwatch" 
          text="Stopwatch"
          Icon={IoStopwatch}
          location={location}
          />
          <Li
          url="/admin/app/coupon" 
          text="Coupon"
          Icon={RiCoupon5Fill}
          location={location}
          />
          <Li
          url="/admin/app/toss" 
          text="Toss"
          Icon={LuCoins}
          location={location}
          />
          
        </ul>
      </div>
)

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
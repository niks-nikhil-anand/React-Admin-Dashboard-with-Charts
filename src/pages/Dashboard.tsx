import AdminSideBar from "../component/AdminSideBar"
import { FaSearch , FaBell} from "react-icons/fa";
import userImg from '../assets/person.png'
import { IoMdTrendingUp , IoMdTrendingDown} from "react-icons/io";


const dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar/>
      <main className="dashboard">
        

        {/* Search bar starts here  */}
       <div className="bar">
       <FaSearch />
       <input type="text" placeholder="Search for data, users, docs "/>
       <FaBell />
       <img src= {userImg} alt="img" />
        </div>

        {/* Search bar end here */}



         {/*------ Widget section starts from here----  */}
         <section className="widgetContainer">

         <WidgetItem
         percent={40}
         amount = {true}
         value = {3400}
         heading="Revenue"
         color="rgb(0,115,255)"
         />
         <WidgetItem
         percent={-10}
         value = {400}
         heading="Users"
         color="rgb(0 198 202)"
         />
         <WidgetItem
         percent={80}
         value = {32679}
         heading="Transaction"
         color="rgb(255 196 0)"
         />
         <WidgetItem
         percent={30}
         value = {130}
         heading="Products"
         color="rgb(76 0 255)"
         />

         </section>



      </main>
    </div>
  )
}

interface WidgetItemsProps {
  heading : string ,
  value : number ,
  percent : number ,
  color : string ,
  amount? : boolean
}

const WidgetItem = ({
  heading ,
  value ,
  percent ,
  color ,
  amount = false
}:WidgetItemsProps)=>(
  <article className="widget-item">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4> {amount? `$${value} `: value }</h4>

      { percent>0?(
          <span className="green">
            <IoMdTrendingUp /> 
            + {percent}%{""}
             </span>
        ) : (
        <span className="red">
           <IoMdTrendingDown /> 
            {percent}%{""}
        </span>)  
      }
    </div>
    <div className="widgetCircle" style={{
      background : `conic-gradient(
        ${color} ${Math.abs(percent)/100*360}deg,
        rgb(255,255,255) 0
      )`
    }}>
      <span 
      style={{
        color
      }}
      > {percent}%</span>
    </div>

  </article>
)

export default dashboard
import AdminSideBar from "../component/AdminSideBar"
import { FaSearch , FaBell} from "react-icons/fa";
import userImg from '../assets/person.png'
import { IoMdTrendingUp , IoMdTrendingDown} from "react-icons/io";
import { BiMaleFemale } from "react-icons/bi";

import data from '../assets/data.json'
import { BarChart, DoughnutChart } from "../component/Charts";
import { Doughnut } from "react-chartjs-2";



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

                  {/*------ Widget section ends here----  */}



          {/*------ Graph section starts from here----  */}
          

          <section className="graphContainer">
             <div className="revenueCharts">
                <h2>Revenue Transaction</h2>
                {/* Graph  */}
                <BarChart 
                data_2={[757 , 424 , 424 , 464 , 854 , 785 , 753 ]}
                data_1={[300 , 144 , 493 , 566 , 345 , 542 , 342 ]}
                title_1="Revenue"
                title_2="Transactions"
                bgColor_1="rgb(0 ,115 ,255)"
                bgColor_2="rgba(53 ,162 , 235 ,0.8)"
                />

              </div>
              <div className="dashboardCategories">
                <h2>Inventory</h2>
                { data.categories.map((i) => (
                   <CategoryItems
                   key = {i.heading}  
                heading= {i.heading}
                value= {i.value}
                color= {`hsl(${i.value*10},100%,50%)`}
                />
                ))}
              </div>
  
          </section>

          {/*------ Graph section ends here----  */}
          {/*------ Transaction section starts from here----  */}
          
          <section className="transactionContainer">
            <div className="genderChart">
              <h2>Gender Ratio</h2>
              {/* Charts  */}

              <DoughnutChart
              labels={["Male", "Female"]}
              data={[12, 19]}
              backgroundColor={["hsl(340, 82%, 56%)", "rgba(53, 162, 235, 0.8)"]}
              cutout={90}
            />


              <p>
              <BiMaleFemale />
              </p>
            </div>


            {/* Table  */}
          </section>
         
          {/*------ Transaction section ends  here----  */}




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


// Graph section - Inventory section 
interface CategoryItemsProps {
  color : string ;
  value : number ;
  heading : string
}

const CategoryItems = ({color , value , heading}:CategoryItemsProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor : color ,
        width : `${value}%`
      }}
      ></div>
    </div>
      <span>{value}%</span>

  </div>
)

export default dashboard
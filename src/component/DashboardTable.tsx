import TableHOC from '../component/TableHOC'
import { Column } from 'react-table'


interface DataTypes {
    id :string ,
    quantity :number ,
    discount:string,
    amount:number,
    status:string
}

const columns: Column<DataTypes>[] = [
    {
        Header: "Id" ,
        accessor: "id"
    },
    {
        Header: "Quantity" ,
        accessor: "quantity"
    },
    {
        Header: "Discount" ,
        accessor: "discount"
    },
    {
        Header: "Amount" ,
        accessor: "amount"
    },
    {
        Header: "Status" ,
        accessor: "status"
    }
]



const DashboardTable = ({ data = []} :{data:DataTypes[]}) => {
    return TableHOC<DataTypes>(columns, data, "transactionBox", "Top Transaction")();
  }
  
export default DashboardTable

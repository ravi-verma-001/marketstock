import Frontpage from "./Frontpage";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend 
} from 'chart.js'
import {Bar} from 'react-chartjs-2';

ChartJS.register (
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
const setData = {
    labels : ["10","20","30","40","50","60","70","80","90","100"], 
    datasets : [ {
        lable : '3697945728',
        data : [3,6,9,7,6,4,5,7,2,8,],
        backgroundColor : 'skyblue',
        borderColor : 'red',
        boderWidth : 1,
        
    }]
}
const Data = {
    labels : ["10","20","30","40","50","60","70","80","90","100"], 
    datasets : [ {
        lable : '7644572872',
        data : [7,6,4,4,5,7,9,8,7,2],
        backgroundColor : 'skyblue',
        borderColor : 'black',
        boderWidth : 1,
        
        
    }]
}
const options = {

}

function StockFour() {

    return(
        <>
        <Frontpage/>
        <h1 style={{color: "black", textAlign : "center",backgroundColor: "white"}}>Stock 4 Price Data</h1>
        <p  style={{color: "black", textAlign : "center",backgroundColor: "white"}}>Stock Data Since 30 Days</p>
        <div style={{backgroundColor: "white", width : "80%",margin : "0 10%"}} >
            <Bar data = {setData} options = {options}></Bar>
        </div>
            <h1 style={{color: "black", textAlign : "center",backgroundColor: "white"}}>Stock 4 Social Media Data</h1>
            <p  style={{color: "black", textAlign : "center",backgroundColor: "white"}}>Stock Data Since 10 Days</p>
        <div  style={{backgroundColor: "white", width : "80%",margin : "0 10%",marginTop : "10px"}}>
             <Bar data = {Data} options = {options}></Bar>
        </div>
        </>
    )

}
export default StockFour;
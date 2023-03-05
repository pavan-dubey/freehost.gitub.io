import NewExpens from "./NewExpenses.js/NewExpens";
import Subcomponent from "./Subcomponent/Subcomponent";



let App =(props)=>{
    let Ensen=[
        {
            id:1,
            date:new Date(2022,1,12),
            title:"School Fees",
            Price:2000
        },
        {
            id:1,
            date:new Date(2022,1,12),
            title:"College Fees",
            Price:2000
        },
        {
            id:1,
            date:new Date(2022,1,12),
            title:"Tution Fees",
            Price:2000
        },
        {
            id:1,
            date:new Date(2022,1,12),
            title:"Home Fees",
            Price:2000
        }
    ]
    return(
        <div>
            <NewExpens/>
        <Subcomponent
         Date ={Ensen[0].date}
        Title ={Ensen[0].title}
        Price ={Ensen[0].Price}>
        </Subcomponent>
        <Subcomponent
         Date ={Ensen[1].date}
        Title ={Ensen[1].title}
        Price ={Ensen[1].Price}>
        </Subcomponent>
        <Subcomponent 
        
        Date ={Ensen[2].date}
        Title ={Ensen[2].title}
        Price ={Ensen[2].Price}>
        </Subcomponent>
        <Subcomponent 
        Date ={Ensen[3].date}
        Title ={Ensen[3].title}
        Price ={Ensen[3].Price}>
        </Subcomponent>
        </div>
        
    )
}
export default App;
import '../tabscomponent/tabs.css'
import { useState } from 'react'
const Tabs=()=>
{
const[specifictab,setSpecificTab]=useState({"Wallet":false,"Bank":false,"Global":false})
const handel_tab_selection=(e)=>{
    setSpecificTab({"Wallet":false,"Bank":false,"Global":false});
    setSpecificTab(tab => ({
         ...tab,
         [e.target.value]: !tab[e.target.value]
    }));
    }
return(    <div className='Header_payment_option_holder'>
            <h3>Select Payment Method</h3>
            <div className='tabs'>
                <button value="Wallet" id={specifictab["Wallet"]?'clicked':'tab'} onClick={(event)=>handel_tab_selection(event)}>Wallet</button>
                <button value='Bank' id={specifictab["Bank"]?'clicked':'tab'} onClick={(event)=>handel_tab_selection(event)}>Bank</button>
                <button value='Global' id={specifictab["Global"]?'clicked':'tab'} onClick={(event)=>handel_tab_selection(event)}>Global</button>
            </div>
        </div>
        )

}
export default Tabs

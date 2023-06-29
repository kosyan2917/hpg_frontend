import './field.css'
import gordon from  '../../images/gordon.jpg'
const Board_field = ({num}) => {
    if (1<num && num<11) {
        return <div className={'box'+num+' field'} style={{backgroundImage: gordon}}>
            <div style={{width: '100%', height: '15%', backgroundColor: "blue", border: "1px solid black"}}>

            </div>
            <img src={gordon} style={{border: "1px solid black", height: "85%"}} />

        </div>
    }
    if (11<num && num<21) {
        return <div className={'box'+num+' field'} style={{backgroundImage: gordon}}>
            <img src={gordon} style={{border: "1px solid black", width: "85%"}} />
            <div style={{width: '15%', height: '100%', backgroundColor: "darkred", border: "1px solid black", float: 'right'}}>

            </div>

        </div>
    }
    if (21<num && num<31) {
        return <div className={'box'+num+' field'} style={{backgroundImage: gordon}}>
            <img src={gordon} style={{border: "1px solid black", height: "85%"}} />
            <div style={{width: '100%', height: '15%', backgroundColor: "deeppink", border: "1px solid black"}}>

            </div>

        </div>
    }
    if (31<num) {
        return <div className={'box'+num+' field'} style={{backgroundImage: gordon}}>
            <img src={gordon} style={{border: "1px solid black", width: "85%"}} />
            <div style={{width: '15%', height: '100%', backgroundColor: "green", border: "1px solid black", float: 'left'}}>

            </div>

        </div>
    }
    return <div className={'box'+num+' field'} style={{backgroundImage: gordon}}>
        <img src={gordon} style={{border: "1px solid black"}} />


    </div>

}

export default Board_field
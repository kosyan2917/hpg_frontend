import Board_field from "../board_field/field";
import './board.css'
import Wall from "../wall_of_text/wall";
import gordon from "../../images/gordon.jpg"

const Board = () => {
    let board = []
    for (let i=1; i<41; i++) {
        board.push(<Board_field num={i} style={{backgroundImage: gordon}}/>)
    }
    for (let i = 1; i<4; i++) {
        board.push(<Wall num={i}/>)
    }
    return <div className="wrapper"> {board} </div>
}

export default Board
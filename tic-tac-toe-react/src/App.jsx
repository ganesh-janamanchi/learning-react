import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import Icon from './components/icon'

import { ToastContainer, toast } from 'react-toastify';


const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill('empty', 0, 9);
  }

  const checkIsWinner = () => {
    if (itemArray[0] == itemArray[1] &&
      itemArray[0] == itemArray[2] &&
      itemArray[0] != 'empty') {
      setWinMessage(`${itemArray[0]} Wins!`);
    } else if (itemArray[3] == itemArray[4] &&
      itemArray[3] == itemArray[5] &&
      itemArray[3] != 'empty') {
      setWinMessage(`${itemArray[3]} Wins!`);
    } else if (itemArray[6] == itemArray[7] &&
      itemArray[6] == itemArray[8] &&
      itemArray[6] != 'empty') {
      setWinMessage(`${itemArray[6]} Wins!`);
    } else if (itemArray[0] == itemArray[3] &&
      itemArray[0] == itemArray[6] &&
      itemArray[0] != 'empty') {
      setWinMessage(`${itemArray[0]} Wins!`);
    } else if (itemArray[1] == itemArray[4] &&
      itemArray[1] == itemArray[7] &&
      itemArray[1] != 'empty') {
      setWinMessage(`${itemArray[1]} Wins!`);
    } else if (itemArray[2] == itemArray[5] &&
      itemArray[2] == itemArray[8] &&
      itemArray[2] != 'empty') {
      setWinMessage(`${itemArray[2]} Wins!`);
    } else if (itemArray[0] == itemArray[4] &&
      itemArray[0] == itemArray[8] &&
      itemArray[0] != 'empty') {
      setWinMessage(`${itemArray[0]} Wins!`);
    } else if (itemArray[2] == itemArray[4] &&
      itemArray[2] == itemArray[6] &&
      itemArray[2] != 'empty') {
      setWinMessage(`${itemArray[2]} Wins!`);
    }
  }

  const changeItem = (itemNumber) => {
    if (winMessage)
      return toast(winMessage, { type: 'success' })

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: 'error' })
    }
    
    if(!itemArray.includes('empty')) {
      setWinMessage("Draw, play again?");
      return toast(winMessage, { type: 'success' })
    }
    checkIsWinner();
  }

  return (
    <Container className="p-5">
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-primary text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button color='success' block onClick={reloadGame}>reload the game</Button>
            </div>
          ) : (
            <h1 className='text-center text-warning'>
              {isCross ? "cross" : "circle"} turn
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default App

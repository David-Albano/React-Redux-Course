import {Routes, Route} from 'react-router-dom'
import Practice from "./Practice1/Practice"
import PDAssistant from './Personal-Digital-Assistant/PDAssistant'

function App() {
    return (
        <>
            <Routes>
                <Route path='/practice' element={<Practice />}/>
                
                <Route path='/pda' element={<PDAssistant/>}/>

            </Routes>
        </>
    )
}

export default App
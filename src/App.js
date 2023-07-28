import {Routes, Route} from 'react-router-dom'
import Practice from "./Practice1/Practice"
import PDAssistant from './Personal-Digital-Assistant/PDAssistant'
import Animals from './animals/Animals'
import 'bulma/css/bulma.css'

function App() {
    return (
        <>
            <Routes>
                {/* App 1 */}
                <Route path='/practice' element={<Practice />}/>
                
                {/* App 2 */}
                <Route path='/pda' element={<PDAssistant/>}/>

                {/* App 3 */}
                <Route path='/animals' element={<Animals/>}/>

            </Routes>
        </>
    )
}

export default App
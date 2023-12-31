import {Routes, Route} from 'react-router-dom'
import Practice from "./Practice1/Practice"
import PDAssistant from './Personal-Digital-Assistant/PDAssistant'
import Animals from './animals/Animals'
import PicturesApp from './pictures-app/PicturesApp'
import BookApp from './Books/BookApp'
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

                {/* App 4 */}
                <Route path='/pictures' element={<PicturesApp/>}/>

                {/* App 5 */}
                <Route path='/books' element={<BookApp/>}/>

            </Routes>
        </>
    )
}

export default App
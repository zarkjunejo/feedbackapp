import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Feedbacklist from "./components/Feedbacklist"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from './pages/About'
import AboutIcon from "./components/AboutIcon"
import { FeedbackProvider } from "./Context/FeedbackContext"


const App = () => {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <Feedbacklist />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<About />} />
                    </Routes>
                    <AboutIcon />
                </div>
            </Router>
        </FeedbackProvider>
    )
}
export default App

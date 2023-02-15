import { Route, Routes } from 'react-router-dom'
import Header from './Header'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => {
    return (
        <div>
            <h2>Landing</h2>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path="/surveys" element={<Dashboard />} />
                <Route path="/surveys/new" element={<SurveyNew />} />
            </Routes>
        </div>
    )
}

export default App

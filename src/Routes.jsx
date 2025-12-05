import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import NotFound from './pages/NotFound.jsx';


const AppRouter = () => {

    return(
        <>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Products' element={<Products />}/>
                    <Route path='/About' element={<About />}/>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
        </>
    )
}

export default AppRouter;
import'./App.css';
import {Link} from 'react-router-dom';
import AppRouter from '../Routes';

const App = () => {
  

  // let page;
  // const pathname = window.location.pathname;

  // switch (pathname){
  //     case '/':
  //       page = <Home />;

  //       break;

  //     case '/Products':
  //       page =<Products />
        
  //       break;

  //     case '/About':
  //       page = <About />
        
  //       break;

  //     default:

  //     page = <NotFound />

  //     break;
        
  // }



  return (
    <>
     <header>
        <Link to='/'>Logo</Link>
        <nav>
          <ul>
            <li>
               <Link to='/Products'>Products</Link>
            </li>
            <li>
               <Link to='/About'>About</Link>
            </li>
          </ul>
        </nav>
     </header>
    <AppRouter />
    </>
  );
}

export default App;

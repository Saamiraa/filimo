import logo from './logo.svg';
import './App.css';
import samira from './utils';
import FilmContent from './components/filmContent';
import {freeMovies} from './data'


function App() {
  return (
    <div className='wrapper'>
    <FilmContent list={freeMovies} title="فیلم و سریال های رایگان" subtitle="تماشای بدون اشتراک" description="برای تماشا، فقط ثبت نام کنید و بدون نیاز به خرید اشتراک، رایگان تماشا کنید"/>  
    <p/>
    </div>
  )
}
export default App;

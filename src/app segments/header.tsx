import '../App.css'
import './header.css'
import wysCover from '../assets/wys image 2.png'

export default function Header() {

    return (
        <div className='app-header'>
            <img src={wysCover} alt='Whatever You Say band' className='cover-image'/>
            <div className='title-text'>
                <h1>Whatever You Say</h1>
                <h2>A guelph-based band</h2>
            </div>
        </div>
    )
}
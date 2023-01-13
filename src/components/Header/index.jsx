import { Routes, Route, Link } from 'react-router-dom'
import { Home } from '../../Pages/Home'
import { Home_02 } from '../../Pages/Home_02'
import './styles.css'
export function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li className='link_header' ><Link to='/FTP_Convert/Home'> Home</Link></li>
                    <li className='link_header'><Link to='/FTP_Convert/button '>Link Com Botão</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/FTP_Convert/Home' element={<Home />} />
                <Route path='/FTP_Convert/button' element={<Home_02 />} />
            </Routes>
        </>
    )
}
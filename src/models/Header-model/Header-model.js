import {NavLink} from "react-router-dom";
import './Header-css.css'
const Header = props =>{
    const links = ['News','Profile','Message','About']
    const titles = links.map(m=><NavLink to={'/'+m.toLowerCase()}  className={'act'} ><span data-hover={m}>{m}</span></NavLink>)
    return (
        <div id="#container">
            <section className="items">
                <nav className="main-nav">
                    {titles}
                </nav>
            </section>
        </div>
    )
}
export default Header
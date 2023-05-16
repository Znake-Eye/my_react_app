import { NavLink } from "react-router-dom";
const Nav = ({search, setSearch}) => {
    return (
        <nav className="Nav bg-dark p-3">
            <form className="searchform" onSubmit={(e) => e.preventDefault()}>
                {/* <label htmlFor="search">Search Posts</label> */}
                <input className="form-control"
                    id="search" type="text" placeholder="Search Posts" value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </form>
            <ul className="d-flex mt-3">
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/post" activeclassname="active">Post</NavLink></li>
                <li><NavLink to="about" activeclassname="active">About</NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav;
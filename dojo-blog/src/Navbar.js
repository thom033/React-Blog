const Navbar = () => {
    return ( 
        <>
            <nav className="navbar">
                <div className="container">
                    <h1>Dojo Blog</h1>
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="/create" className="create">New Blog</a>
                    </div>
                </div>
            </nav>
            <div className="navbar-separator"></div>
        </>
    );
}
 
export default Navbar;
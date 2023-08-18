import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <div className={"nav_main_container"}>
                <div className={"logo_container"}><img src="src/assets/logo.png" alt="LOGO"/></div>
                <div className={"nav_container"}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navbar;
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <img className="navbar-image" src={require("./images/CRCS.png")} alt="govt-img"></img>
                <div className="navbar-text">
                    <div className="ministry-of-cooperation">MINISTRY OF COOPERATION</div>
                    <div className="CRCS">Central Registrar of Cooperative Societies</div>
                </div>
                <img className="navbar-image" src={require("./images/G20.png")} alt="govt-img"></img>
                <img className="navbar-image" src={require("./images/gandhi.png")} alt="govt-img"></img>
                <img className="navbar-image" src={require("./images/swach-bharat.png")} alt="govt-img"></img>
                <img className="navbar-image" src={require("./images/AKAM_logo.png")} alt="govt-img"></img>
            </div>
            <div className='navbar-container-links'>
                <div className="navbar-menu">
                    <div className="navbar-item">Home</div>
                    <div className="navbar-item">About Us</div>
                    <div className="navbar-item">Acts and Rules</div>
                    <div className="navbar-item">Notices and Circulars</div>
                    <div className="navbar-item">Schemes, Policy AND Initiatives</div>
                    <div className="navbar-item">Organisations</div>
                    <div className="navbar-item">Publications</div>
                    <div className="navbar-item">International Cooperatives</div>
                    <div className="navbar-item">Media</div>
                    <div className="navbar-item">Citizen Corner</div>
                    <div className="navbar-item">Parliament Questions</div>
                    <div className="navbar-item">Contact Us</div>
                </div>
            </div>
            
        </>
    )
}

export default Navbar;
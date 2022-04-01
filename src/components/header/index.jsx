import './index.css';

const Header = () =>{
    return (
        <div className="header">
                <div className="header-left-container" >
                    <div className="white title">EMPLOYEE</div>
                    <div className="title-medium orange">dashboard</div>
                </div>
                <div className="header-right-container">
                    <div className="white title-small">About</div>
                    <div className="white title-small">Services</div>
                    <div className="white title-small">Contacts</div>
                    <button className='button-two title-small blue'>Logout</button>
                </div>
        </div>
    )
}

export default Header;
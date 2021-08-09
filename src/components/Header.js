
function Header() {
    return (
        <div class="row">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between bg-primary ">
                    <div>
                        <img alt="Logo"/>
                    </div>
                    <div className="light">
                        <h4 className="header-title">
                            Code Conference
                        </h4>
                    </div>
                    <div className="text-dark">
                        Hello Sir or Madam
                        <span>
                            <a href="#">Sign Out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Header;
import React, { Component } from "react";

class Footer extends Component {
    render(){
        return(
        <div className="footer">
            <div className="footer-items">
                <div className="icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fas fa-envelope"></i>
                </div>
              <div className="footer-links">
                <a href="" className="links">Home</a>
                <a href="" className="links">About</a>
                <a href="" className="links">Contact</a>
              </div>
              <p className="copyright">SelfParkingLA.org &copy; 2018-2019</p>
            </div>
        </div>
        )
    }
}

export default Footer;
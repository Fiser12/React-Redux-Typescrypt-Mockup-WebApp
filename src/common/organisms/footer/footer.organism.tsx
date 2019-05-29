import * as React from "react";
import './styles.css'
import {NavLink} from "react-router-dom";

export interface Props {
}

const FooterBar = (props: Props) => {
    return (
        <footer>
            <div className="footer-container">

                <div className="footer-block">
                    <div className="footer-label">About us</div>
                    <div className="footer-list">
                        <ul className="links-list separated">
                            <li>
                                <a href="http://blog.ticketbis.com/" target="_blank">Blog</a>
                            </li>
                            <li>
                                <a href="http://engineering.ticketbis.com" target="_blank">Engineering</a>
                            </li>
                            <li>
                                <a href="http://ticketbis.github.io/" target="_blank">Developers</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-block">
                    <div className="footer-label pull-left">Follow us</div>
                    <div className="footer-list">
                        <ul className="links-list">
                            //TODO Extract icons to atoms
                            <li>
                                <a title="Twitter" href="https://twitter.com/ticketbiseng" rel="me" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a title="Github" href="http://www.github.com/ticketbis" rel="me" target="_blank">
                                    <i className="fa fa-github"></i>
                                    <span>Github</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-block">
                    <div className="footer-list">
                        <ul className="links-list separated">
                            <li>
                                <a href="#">Some cool link</a>
                            </li>
                            <li>
                                <a href="#">Some cool link</a>
                            </li>
                            <li>
                                <a href="#">Some cool link</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default FooterBar

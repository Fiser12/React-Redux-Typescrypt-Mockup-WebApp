import * as React from "react";
import './footer.organism.css'
import {FooterLabel, Position} from "../../atoms/footer-label.atom";
import {FooterBlock} from "../../molecules/footer-block.molecule";
import {FooterList} from "../../molecules/footer-list.molecule";
import {LinksList} from "../../molecules/links-list.molecule";
import {FooterContainer} from "./footer-container.organism";

const FooterBar = () => {
    return (
        <footer>
            <FooterContainer>
                <FooterBlock>
                    <FooterLabel>About us</FooterLabel>
                    <FooterList>
                        <LinksList separated={true}>
                            <li>
                                <a href="http://blog.ticketbis.com/" target="_blank">Blog</a>
                            </li>
                            <li>
                                <a href="http://engineering.ticketbis.com" target="_blank">Engineering</a>
                            </li>
                            <li>
                                <a href="http://ticketbis.github.io/" target="_blank">Developers</a>
                            </li>
                        </LinksList>
                    </FooterList>
                </FooterBlock>

                <FooterBlock>
                    <FooterLabel position={Position.LEFT}>Follow us</FooterLabel>
                    <FooterList>
                        <LinksList separated={false}>
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
                        </LinksList>
                    </FooterList>
                </FooterBlock>

                <FooterBlock>
                    <FooterList>
                        <LinksList separated={true}>
                            <li>
                                <a href="#">Some cool link</a>
                            </li>
                            <li>
                                <a href="#">Some cool link</a>
                            </li>
                            <li>
                                <a href="#">Some cool link</a>
                            </li>
                        </LinksList>
                    </FooterList>
                </FooterBlock>
            </FooterContainer>
        </footer>
    );
};

export default FooterBar

import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
        <footer className="footer has-text-blue">
            <div className="content has-text-centered has-text-blue">
                <div className="container has-text-blue">
                    <div style={{ maxWidth: "100vw" }} className="columns">
                        <div className="column is-6">
                            <section className="menu">
                                <ul className="menu-list">
                                    <li>
                                        <Link
                                            to="https://roboshed.com"
                                            className="navbar-item has-text-blue"
                                        >
                                            Roboshed Home
                                        </Link>
                                    </li>
                                    {/* <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li> */}
                                    <li>
                                        <Link
                                            className="navbar-item has-text-blue"
                                            to="/"
                                        >
                                            Latest Stories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="navbar-item has-text-blue"
                                            to="/contact"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="column is-4 social">
                            <a
                                title="facebook"
                                href="https://www.facebook.com/RoboShed-111702740621810"
                            >
                                <img
                                    src={facebook}
                                    alt="Facebook"
                                    style={{ width: "3em", height: "3em" }}
                                />
                            </a>
                            <a title="twitter" href="https://twitter.com">
                                <img
                                    className="fas fa-lg"
                                    src={twitter}
                                    alt="Twitter"
                                    style={{ width: "3em", height: "3em" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer

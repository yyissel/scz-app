import { LinkContainer } from "react-router-bootstrap";
import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import logo from "../images/Logo.svg";
import { Auth } from "aws-amplify";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      userId:"",
      name:""
    };
  }

  async componentDidMount() {
    try {
      this.setState({
        userId:await(await Auth.currentUserInfo()).attributes.email
      })
     
    } catch(e) {
      if (e !== 'No current user') {
        // alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  render() {
    
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
    };
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fluid collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><img src={logo} alt="SCZ"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav pullRight>
              <LinkContainer to="/about"><NavItem><h4>ABOUT</h4></NavItem>
              </LinkContainer>
              <LinkContainer to="/contact-us">
                <NavItem><h4>CONTACT US</h4></NavItem> 
              </LinkContainer>
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}><h4>LOGOUT</h4></NavItem>
                : <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem><h4>SIGNUP</h4></NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem><h4>LOGIN</h4></NavItem>
                    </LinkContainer>
                  </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
  
}

export default withRouter(App);

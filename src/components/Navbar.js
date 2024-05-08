//always the first letter of a react component must be capital
import React from "react";
import PropTypes from 'prop-types';//to define the datatypes and aohter properties of props


function Navbar(props)//we can also send props(properties) as the parameter of the Navbar
//we cannot change props inside this function
{
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img id="navicon" src="/nav-icon.png" alt="" />{props.title}</a> {/* using props to give title */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href='/' className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>

          {/* mode button */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className={`form-check-label text-${(props.mode==='light')?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">dark mode</label>
              {/* ***write style in double curly baraces {{}} one pair is for js and another is for js object*/}
          </div>

        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,//must be provided
  about: PropTypes.string,
}

// Navbar.defaultProps = {
//   title: 'set title here',
//   about: 'set about here'
// }


export default Navbar;
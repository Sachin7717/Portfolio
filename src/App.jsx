import "./App.css"
import logo from "./bat.jpg"


function App() {

  return (
    <>
      <div className="body">body
        <div className="left">
          {/* <div className="me">
            <img src={logo} alt=""  id="logo"/>
            </div> */}
            
            <div className="info">
              <h1>Sachin</h1>
              <div className="contacts">
              <h2>Contacts</h2>
              <h3>Linkedin</h3>
              <h3>twitter</h3>
              <h3>github</h3>
              <h3>insta</h3>
              </div>

              <div className="button">
                <button>Download CV</button>
              </div>

            </div>

        </div>
        <div className="right">ffas
    <nav>
          <li>ABOUT ME</li>
          <li>skills</li>
          <li>experience</li>
        </nav>
        </div>
      </div>
    </>
  )
}

export default App

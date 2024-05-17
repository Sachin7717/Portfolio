import "./App.css"
// import logo from "./bat.jpg"


function App() {

  return (
    <>
    <div className="main">
      <div className="body">
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
        <div className="right">
    <nav>
          <li>ABOUT ME</li>
          <li>skills</li>
          <li>experience</li>
        </nav>
        <h1>About Me</h1>
        <div className="about">
        Welcome to my portfolio! I'm a passionate web developer with a flair for problem-solving and a deep expertise in HTML, CSS, JavaScript, and the MERN stack (MongoDB, Express.js, React, Node.js).

My journey in web development is driven by a love for crafting elegant and efficient web solutions. With a strong foundation in both front-end and back-end technologies, I excel at creating seamless user experiences and robust web applications. Every challenge is an opportunity for me to turn complex problems into simple, intuitive, and visually stunning solutions.

I am continuously learning and adapting to stay ahead in the ever-evolving world of web development. Dive into my projects to see my skills in action, and feel free to connect if you're interested in collaborating or learning more about my work. Let's build something amazing together!


<div className="box">
  <div className="box1">
  box1
  </div>
  <div className="box2">
    box2
  </div>

</div>
        </div>
        </div>
       
      </div>
      <div className="experience">
          <h1 id="exp">Experience</h1>
          <div className="block">
            <div className="block1">
              <h2>Languages</h2>
            </div>
          </div>
        </div>
        </div>
 
    </>
  )
}

export default App

import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import SideInfo from './src/SideInfo'
import MainBox from './src/MainBox'
import Navigation from './src/Navigation'
import { Contect } from './src/component/contect'
import About from './src/component/About'
import Resume from './src/component/Resume'
import { Projects } from './src/component/Projects'

const App = () => {
  const components=[
  <About />,
  <Resume />,
  <Projects />,
  <Contect /> ];

  const [pages, setPages] = useState(components[0]);

  const handleSelectPage = (selectedPage) =>{
      setPages(selectedPage);
  }

  return (
    <div className="flex justify-between  " >
      <SideInfo />
      <MainBox Pages={pages}/>
      <Navigation onSelectPage={handleSelectPage}/>
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
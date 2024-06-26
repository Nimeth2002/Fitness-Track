import {ThemeProvider,styled} from "styled-components"
import { lightTheme } from "./utils/Themes";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Authentication from "./Pages/Authentication";
import { useState } from "react";
import Navbar from "./components/Navbar"; 
import Dashboard from "./Pages/Dashboard";
import Workout from  "./Pages/Workouts";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { useSelector } from "react-redux";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
background: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text_primary};
overflow-x: hidden;
overflow-y: hidden;
transition: all 0.2s ease;
`; 
const Footer = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 20px;
  text-align: center;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
   <ThemeProvider theme = {lightTheme}>
   <BrowserRouter>
   {currentUser  ? ( 
   <Container>
    <Navbar currentUser = {currentUser} /> 
    <Routes>
      <Route path = "/" exact element ={<Dashboard/>}/> 
      <Route path = "/workouts" exact element ={<Workout/>}/>
      <Route path = "/Contact" exact element ={<Contact/>}/> 
      <Route path = "/About" exact element ={<About/>}/>   
    </Routes> 
   <Footer> © 2024 Fitness Revolution. All rights reserved.</Footer>
   </Container> 
   ):( 
   <Container>
   <Authentication/>
   </Container>
   )}; 
   </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;

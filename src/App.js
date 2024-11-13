import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Ex1 from './Exercicio1/Ex1';
import Ex2 from './Exercicio2/Ex2';
import Ex3 from './Exercicio3/Ex3';
import PropTypes from 'prop-types';

const NavContainer = styled.nav`
  display: flex;
  justify-content: left;
  padding: 20px;
  margin: 20px 0;
`;

const NavButton = styled(Link)`
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => (props.active ? 'red' : 'black')}; // Active color based on prop
  font-weight: bold;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none; // Remove underline from links
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? 'darkred' : '#333')};
  }
`;

NavButton.propTypes = {
  active: PropTypes.bool.isRequired, 
};

function Navigation() {
  const location = useLocation();

  return (
    <NavContainer>
      <NavButton to="/Ex1" active={location.pathname === '/Ex1'}>
        Exercicio 1
      </NavButton>
      <NavButton to="/Ex2" active={location.pathname === '/Ex2'}>
        Exercicio 2
      </NavButton>
      <NavButton to="/Ex3" active={location.pathname === '/Ex3'}>
        Exercicio 3
      </NavButton>
    </NavContainer>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/Ex1" element={<Ex1 />} />
        <Route path="/Ex2" element={<Ex2 />} />
        <Route path="/Ex3" element={<Ex3 />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";


const Header = ({header}) => {
const [name, setName] = React.useState('vybhavi');
setName('praveen')

  return <h1>{header}</h1>;
};


export default Header;

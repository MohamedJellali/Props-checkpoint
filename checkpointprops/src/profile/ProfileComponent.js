import React from 'react'
import PropTypes from "prop-types";
import "../App.css";


export default function ProfileComponent(props) {

    function nameOfUser(props) {
        const {name="Vincent Van-Gogh"} = props;
        alert(`My name is ` + name);
      }

    return (
        <div>
            {console.log(props.children)}
            <h1  style={{color: "red"}}>I am {props.name}</h1>
            <div>{props.children}</div>
            <p>I am a {props.bio}</p>
            <p>I am a {props.profession}</p>
            <button style={{backgroundColor:"#0BEFEC"}} onClick={nameOfUser}>  Display my name </button>
   
        </div>
    )
}

ProfileComponent.defaultProps = {
    name: "Give me a name :,(",
    Bio:"Write my life :,(",
    Profession:"Who is me :,(",
    };

ProfileComponent.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    nameOfUser: PropTypes.func
  };





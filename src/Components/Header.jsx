import "../Resources/Header.css";
import logo from "../Img/blub logo.jpg"
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <div>
      <section>
        <span>
        <TypeAnimation
  sequence={['Blubblobcoin', 1000]}
  speed={50}
  cursor={false} // This removes the blinking cursor
  style={{
    color: '#D35B68',
    textDecoration: 'none', // Ensures no text decoration
    fontSize: '30px'
  }}
  repeat={Infinity}
  id="name"
/>

        <img src={logo} alt="logo" id="logo"/>
        </span>
      </section>
    </div>
  )
}


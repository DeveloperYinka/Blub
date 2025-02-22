import "../Resources/Header.css";
import logo from "../Img/blub logo.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1300); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section>
        <span>
          <TypeAnimation
            sequence={["Blubblobcoin", 1000]}
            speed={2}
            cursor={false}
            style={{
              color: "#D35B68",
              textDecoration: "none",
              fontSize: "30px",
            }}
            repeat={Infinity}
            id="name"
          />

          <motion.img
            src={logo}
            alt="logo"
            id="logo"
            initial={{ x: "100vw", opacity: 0 }}
            animate={startAnimation ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </span>
      </section>
    </div>
  );
}

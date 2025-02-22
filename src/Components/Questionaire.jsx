import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Resources/FunFactCarousel.css";

const data = [
  "Did you know? Blubtheblob is native to Avax blockchain",
  "Question: what would you say blub is, A culture?, A life style?, There're no wrong answers ",
  "Fun Fact: Blub has a community on X",
  "Question: is Avax a blub?",
];

export default function FunFactCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 15000); // 15 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="carousel-item"
          >
            {data[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

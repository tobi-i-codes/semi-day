import { cn } from "../../lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./typewriter.css";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  delayStart = 0,
}) => {
  // Combine all words into a single string with correct formatting
  const fullText = words
    .map((word) => word.text)
    .join(words.some(w => w.text === "\n") ? "" : " "); // join logic

  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    let interval;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev >= fullText.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 100); // typing speed
    }, delayStart * 1000);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [fullText, delayStart]);

  // Construct styled output up to displayedLength
  const renderTypedText = () => {
    let currentLen = 0;
    const elements = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (currentLen >= displayedLength) break;

      const charsRemaining = displayedLength - currentLen;
      const charsToTake = Math.min(charsRemaining, word.text.length);
      const typedPart = word.text.slice(0, charsToTake);

      if (word.text === "\n") {
        elements.push(<br key={`br-${i}`} />);
      } else {
        elements.push(
          <span key={`word-${i}`} className={word.className}>
            {typedPart}
          </span>
        );
      }

      currentLen += word.text.length;
    }
    return elements;
  };

  return (
    <div className={cn("typewriter-container relative", className)}>
      {/* Invisible placeholder to maintain layout size and prevent jumping */}
      <div className="invisible opacity-0" style={{ visibility: 'hidden' }}>
        {words.map((word, i) => (
          word.text === "\n" ? <br key={`hid-${i}`} /> : <span key={`hid-${i}`} className={word.className}>{word.text}</span>
        ))}
      </div>

      {/* Absolute overlay for the actual typing effect */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div>
          {renderTypedText()}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className={cn("typewriter-cursor", cursorClassName)}
          ></motion.span>
        </div>
      </div>
    </div>
  );
};

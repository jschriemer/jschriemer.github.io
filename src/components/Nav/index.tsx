import React, { useEffect, useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import contact from "../../assets/images/contact.svg";
import portfolio from "../../assets/images/portfolio.svg";
import about from "../../assets/images/about.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/Email";
import { gsap } from "gsap";
import { ReactComponent as PortfolioIcon } from "../../assets/images/portfolio.svg";
import { ReactComponent as AboutIcon } from "../../assets/images/about.svg";
import { ReactComponent as ContactIcon } from "../../assets/images/contact.svg";

const icons = [
  { Component: GitHubIcon, alt: "GitHub", x: 0, y: 0, morph: 'M10 80 Q 95 10 180 80', link: 'https://github.com/' },
  { Component: LinkedInIcon, alt: "LinkedIn", x: 0, y: 0, morph: 'M10 80 Q 95 10 180 80', link: 'https://linkedin.com/' },
  { Component: AlternateEmailIcon, alt: "Email", x: 0, y: 0, morph: 'M10 80 Q 95 10 180 80', link: 'mailto:example@example.com' },
];

const Navbar: React.FC = () => {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const iconRefs = icons.map(() => React.createRef<HTMLImageElement>());
  const contactRef = React.createRef<SVGSVGElement>();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const speed = Math.abs(currentScrollY - lastScrollY);
    setScrollSpeed(speed);
    setLastScrollY(currentScrollY);

    // Adjust the animation based on scroll speed
    controls.start({
      rotate: 90,
      x: "100vw",
      transition: { duration: Math.min(0.5, 0.1 + speed / 1000) },
    });
  };

  const shakeAnimation = {
    x: [0, 1, 2, 3, 4, -1, 0],
    y: [0, -1, -2, -3, -4, 1, 0],
    transition: { duration: 0.45 },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollSpeed]);

  return (
    <motion.div
      initial={false}
      style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
    >
      <Grid item sx={{ p: 1, px: 4 }}>
        <Grid
          container
          sx={{ justifyContent: "space-between", color: "#EDE5D8", p: 2, flexWrap: 'nowrap' }}
        >
          <Link
            to="/about"
            data-barba="link"
            style={{ color: "#EDE5D8", textDecoration: "none", border: 1 }}
          >
            <AboutIcon style={{ width: "200px", height: "80px" }} />
          </Link>
          <Link
            to="/portfolio"
            data-barba="link"
            style={{ color: "#EDE5D8", textDecoration: "none", border: 1 }}
          >
            <PortfolioIcon style={{ width: "220px", height: "80px" }} />
          </Link>
          <Grid item>
            {icons.map((icon, index) => (
              <div
                ref={iconRefs[index]}
                style={{
                  position: "absolute",
                  left: icon.x,
                  top: icon.y,

                  opacity: isVisible ? 1 : 0,
                }}
              >
                <icon.Component sx={{ transform: 'scale(1.2)',}} />
              </div>
            ))}


{/* is mobile ? do not render instead render icons already displayed on bottom of screen */}
            <motion.div
              animate={controls}
              onClick={() => {
                setIsVisible(false); // Immediately set isVisible to false when the component is clicked
                controls.start(shakeAnimation);
                setTimeout(() => setIsVisible(true), 400); // Delay the state change to true by 0.4 seconds
              }}
            >
              <ContactIcon
                ref={contactRef}
                style={{
                  width: "200px",
                  height: "80px",
                  border: 3,

                  cursor: "pointer",
                }}
                onClick={() => {
                  if (contactRef.current) {
                    const rect = contactRef.current.getBoundingClientRect();
                    iconRefs.forEach((ref, idx) => {
                      if (ref.current) {
                        gsap.set(ref.current, {
                          x: rect.left + 30,
                          y: rect.top + 50,
                        });
                        gsap.to(ref.current, {
                          x: -50 + rect.left + Math.random() * 200 - 50*idx,
                          y: 150 + rect.top + Math.random() * 100 - 50*idx,
                          duration: 1.2,
                          delay: 0.5,
                        });
                      }
                    });
                  }
                }}
                onMouseEnter={() => {
                  if (contactRef.current) {
                    gsap.to(contactRef.current, {
                      fill: "red",
                      duration: 5,
                    });
                  }
                }}
                onMouseLeave={() => {
                  if (contactRef.current) {
                    gsap.to(contactRef.current, {
                      color: "transparent",
                      duration: 5,
                    });
                  }
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Navbar;

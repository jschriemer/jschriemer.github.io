import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/Email";
import { gsap } from "gsap";
import { ReactComponent as PortfolioIcon } from "../../assets/images/portfolio.svg";
import { ReactComponent as AboutIcon } from "../../assets/images/about.svg";
import { ReactComponent as ContactIcon } from "../../assets/images/contact.svg";
import logoBorder from "../../assets/images/logo-border.svg";
import { NavAnimation } from "../NavAnimation";

const icons = [
  {
    Component: GitHubIcon,
    alt: "GitHub",
    x: 0,
    y: 0,
    morph: "M10 80 Q 95 10 180 80",
    link: "https://github.com/jschriemer",
  },
  {
    Component: LinkedInIcon,
    alt: "LinkedIn",
    x: 0,
    y: 0,
    morph: "M10 80 Q 95 10 180 80",
    link: "https://www.linkedin.com/in/john-schriemer-7955181a1/",
  },
  {
    Component: AlternateEmailIcon,
    alt: "Email",
    x: 0,
    y: 0,
    morph: "M10 80 Q 95 10 180 80",
    link: "mailto:jschriem@gmail.com",
  },
];

function Navbar({
  currentPage,
  focusedElement = null,
  setFocusedElement = () => {},
}: {
  currentPage: "about" | "portfolio" | "home";
  focusedElement?: "logo" | "about" | "contact" | null;
  setFocusedElement?: React.Dispatch<
    React.SetStateAction<"logo" | "about" | "contact" | null>
  >;
}) {
  const controls = useAnimation();
  const iconRefs = icons.map(() => React.createRef<HTMLImageElement>());
  const contactRef = React.createRef<SVGSVGElement>();
  const [isVisible, setIsVisible] = useState(false);
  const [portfolioClicked, setPortfolioClicked] = useState(false);
  const [homeClicked, setHomeClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    navigate("/portfolio");
  };

  useEffect(() => {
    console.log("portfolioClicked: ", portfolioClicked);
    if (portfolioClicked) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        navigate("/portfolio");
      }, 100); // Assuming the animation takes 3 seconds
      return () => clearTimeout(timer);
    }

    if (homeClicked) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000); // Assuming the animation takes 3 seconds
      return () => clearTimeout(timer);
    }
  }, [portfolioClicked, homeClicked, navigate]);

  const shakeAnimation = {
    x: [0, 1, 2, 3, 4, -1, 0],
    y: [0, -1, -2, -3, -4, 1, 0],
    transition: { duration: 0.45 },
  };

  return (
    <>
      <motion.div
        initial={false}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <Grid item sx={{ p: 1, px: 4 }}>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              color: "#EDE5D8",
              p: 2,
              flexWrap: "nowrap",
            }}
          >
            {/* About */}
            <Link
              to={"/"}
              onClick={() => setFocusedElement("about")}
              data-barba="link"
              style={{
                color: "#EDE5D8",
                textDecoration: "none",
                cursor: "pointer",
                //border: 1,
                filter: currentPage === "about" ? "invert(1)" : "invert(0)",
              }}
            >
              {currentPage === "about" ? (
                <img
                  src={logoBorder}
                  alt="Logo"
                  style={{
                    width: "200px",
                    height: "120px",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <AboutIcon style={{ width: "200px", height: "80px" }} />
              )}
            </Link>
            {isAnimating && (
              <NavAnimation onAnimationEnd={handleAnimationEnd} />
            )}

            {/* Portfolio */}
            <Grid
              item
              //to={currentPage === "portfolio" ? "/" : "/portfolio"}
              data-barba="link"
              onClick={() =>
                currentPage === "portfolio"
                  ? setHomeClicked(true)
                  : setPortfolioClicked(true)
              }
              sx={{
                color: "#EDE5D8",
                textDecoration: "none",
                //border: 1,
                filter: currentPage === "about" ? "invert(1)" : "invert(0)",
              }}
            >
              {currentPage === "portfolio" ? (
                <img
                  src={logoBorder}
                  alt="Logo"
                  style={{
                    width: "200px",
                    height: "120px",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <PortfolioIcon style={{ width: "220px", height: "80px" }} />
              )}
            </Grid>

            {/* Contact Icons */}
            {icons.map((icon, index) => (
              <Grid
                item
                ref={iconRefs[index]}
                sx={{
                  position: "absolute",
                  left: icon.x,
                  top: icon.y,
                  opacity: isVisible ? 1 : 0,
                  zIndex: 1000,
                }}
              >
                <icon.Component
                  sx={{
                    transform: "scale(1.2)",
                    cursor: "pointer",
                    zIndex: 1800,
                    //on hover
                    "&:hover": {
                      color: "hotpink",
                      transition: "color 0.5s",
                    },
                  }}
                  onClick={() => {
                    window.open(icon.link, "_blank");
                  }}
                />
              </Grid>
            ))}

            {/* Contact */}
            <Link
              to={currentPage === "home" ? "/" : "/" + currentPage}
              data-barba="link"
              style={{
                color: "#EDE5D8",
                textDecoration: "none" /* border: 1 */,
              }}
            >
              {/* is mobile ? do not render instead render icons already displayed on bottom of screen */}
              <motion.div
                animate={controls}
                onClick={() => {
                  setFocusedElement("contact");
                  setIsVisible(false); // Immediately set isVisible to false when the component is clicked
                  controls.start(shakeAnimation);
                  setTimeout(() => setIsVisible(true), 400); // Delay the state change to true by 0.4 seconds
                }}
              >
                <ContactIcon
                  ref={contactRef}
                  data-barba="link"
                  style={{
                    width: "200px",
                    height: "80px",
                    border: 3,
                    filter: currentPage === "about" ? "invert(1)" : "invert(0)",
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
                            x:
                              -70 * (idx + 1) +
                              rect.left +
                              Math.random() * 200 -
                              50,
                            y: rect.top * (idx + 1) + Math.random() * 1, // Add some randomness to the y position
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
            </Link>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </motion.div>
    </>
  );
}

export default Navbar;

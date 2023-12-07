import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/Email";
import { gsap } from "gsap";
import { ReactComponent as PortfolioIcon } from "../../assets/images/portfolio.svg";
import { ReactComponent as AboutIcon } from "../../assets/images/about.svg";
import { ReactComponent as ContactIcon } from "../../assets/images/contact.svg";
import logoBorder from "../../assets/images/logo-border.svg";
import { NavAnimation } from "../NavAnimation";
import isMobile from "../../utils/transitions/isMobile";

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
  focusedElement = "logo",
  setFocusedElement = () => {},
  setAboutClicked = () => {},
  portfolioClicked = false,
  setPortfolioClicked = () => {},
  setIsAnimating = () => {},
  isAnimating = false,
}: {
  currentPage: "about" | "portfolio" | "home";
  focusedElement?: "logo" | "about";
  setFocusedElement?: React.Dispatch<React.SetStateAction<"logo" | "about">>;
  setAboutClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  portfolioClicked?: boolean;
  setPortfolioClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAnimating?: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimating?: boolean;
}) {
  const controls = useAnimation();
  const portfolioIconRef = React.createRef<HTMLImageElement>();
  const iconRefs = icons.map(() => React.createRef<HTMLImageElement>());
  const contactRef = React.createRef<SVGSVGElement>();
  const [isVisible, setIsVisible] = useState(false);
  const [homeClicked, setHomeClicked] = useState(false);
  const [shouldAnimateContactIcons, setShouldAnimateContactIcons] =
    useState(false);

  const isMobileDevice = isMobile();

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    //navigate("/portfolio");
  };

  useEffect(() => {
    console.log("homeClicked: ");
    if (shouldAnimateContactIcons) {
      setIsVisible(true); // Set the state to false
      // Add a condition to check if animation should occur
      const constantYPosition = 0;
      const viewportWidth = window.innerWidth;

      console.log("viewportWidth: ", viewportWidth);

      iconRefs.forEach((ref, idx) => {
        if (ref.current) {
          const targetX = viewportWidth / 6 - 125 + idx * -60;
          gsap.fromTo(
            ref.current,
            {
              x: 40,
              y: constantYPosition * idx +30,
            },
            {
              x: targetX,
              y: constantYPosition * idx +100,
              duration: 2.2,
            }
          );
        }
      });
    }
  }, [shouldAnimateContactIcons]);

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
        <Grid item sx={{ p: 1, px: isMobileDevice ? 0 : 4 }}>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              color: "#EDE5D8",
              p: isMobileDevice ? 0 : 2,
              flexWrap: "nowrap",
            }}
          >
            {/* About */}
            <Link
              to={"/"}
              onClick={(e) => {
                e.stopPropagation();
                setAboutClicked(true);
                focusedElement === "about"
                  ? setFocusedElement("logo")
                  : setFocusedElement("about");
              }}
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
            {isAnimating && portfolioClicked && (
              <NavAnimation onAnimationEnd={handleAnimationEnd} />
            )}

            {/* Portfolio */}
            {!isMobileDevice && (
              <Grid
                item
                //to={currentPage === "portfolio" ? "/" : "/portfolio"}
                ref={portfolioIconRef}
                data-barba="link"
                onClick={() => {
                  if (currentPage === "portfolio") {
                    setHomeClicked(true);
                  } else {
                    setIsAnimating(false);
                    setPortfolioClicked(true);
                    setIsAnimating(true);
                  }
                }}
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
                  <PortfolioIcon
                    style={{ width: "50px", height: "30px", cursor: "pointer" }}
                  />
                )}
              </Grid>
            )}

           

            {/* Contact */}
            <Link
              to={currentPage === "home" ? "/" : "/" + currentPage}
              data-barba="link"
              style={{
                color: "#EDE5D8",
                textDecoration: "none" /* border: 1 */,
                position: "relative",
              }}
            >
              
              {/* is mobile ? do not render instead render icons already displayed on bottom of screen */}
              <motion.div
                animate={controls}
                onClick={() => {
                  setShouldAnimateContactIcons(true); // Set the state to true
                  //setIsVisible(true); // Delay the state change to true by 0.4 seconds
                }}
              >
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

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Container } from "./Container.js";


function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const containerMaxWidth = 890;
  const maxWidth = useTransform(scrollY, [0, 100], [containerMaxWidth, containerMaxWidth*0.75]);


  useMotionValueEvent(scrollY, "change", (val) => {
    if (val > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        style={{
          y,
          maxWidth,
          borderRadius: scrolled ? "2rem" : "0",
          boxShadow: scrolled ? "0px 0px 10px rgba(0, 0, 0, 0.5)" : "none",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.5)" : "transparent",
        }}
        transition={{ duration: 0.3, ease: "linear" }}
        aria-label="Main navigation"
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between backdrop-blur-lg"
      >
        <Link
          to="/"
          className="m-1.5 rounded-full p-0.5 ring-1 ring-black transition-colors hover:shadow-xl"
        >
          Logo
        </Link>

        <div className="flex items-center px-2">
            <NavLink
              to={'/profile'}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={(({ isActive } : { isActive: boolean }) =>
                `relative px-2 py-1 text-sm ${isActive ? "text-secondary-green" : "text-black"}`)
              }
            >
              {hoveredIndex === 1 && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-200"
                />
              )}
              <span className="relative z-10">Profile</span>
            </NavLink>
        </div>
      </motion.nav>
    </Container>
  );
}

export default Header;
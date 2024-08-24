import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  backgroundColor: string;
}

export const useNavBackground = (navItems: NavItem[], navbarHeight: number) => {
  const [navBg, setNavBg] = useState(navItems[0].backgroundColor);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + navbarHeight;

      for (let i = 0; i < navItems.length; i++) {
        const currentSection = document.getElementById(navItems[i].href);
        const nextSection = navItems[i + 1]
          ? document.getElementById(navItems[i + 1].href)
          : null;

        if (
          currentSection &&
          (!nextSection || scrollPosition < nextSection.offsetTop)
        ) {
          setNavBg(navItems[i].backgroundColor);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems, navbarHeight]);

  return navBg;
};

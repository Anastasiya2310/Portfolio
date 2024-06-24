import React, { useEffect, useState } from 'react';
import * as LayoutStyle from './../styles/layout.module.css'
import * as HeaderStyle from './header.module.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    const yOffset = -headerRef.current.clientHeight - 10;
    const element = document.querySelector(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sections = ['#about', '#projects', '#experience'];
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      let closestEntry = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if(!closestEntry || entry.boundingClientRect.top < closestEntry.boundingClientRect.top) {
            closestEntry = entry;
          }
        }
      })
      if(closestEntry) {
        window.history.replaceState(null, '', `#${closestEntry.target.id}`);
        document.querySelectorAll(`.${HeaderStyle.navLink}`).forEach((link) => {
          if (link.getAttribute('data-id') === closestEntry.target.id) {
            link.classList.add(HeaderStyle.active);
          } else {
            link.classList.remove(HeaderStyle.active);
          }
        });
      }
    }, options);

    sections.forEach((id) => {
      const section = document.querySelector(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.querySelector(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header ref={headerRef} className={`${isSticky ? HeaderStyle.stickyStyle : ''}`}>
      <nav className={`${LayoutStyle.container}`}>
        <ul>
          <li>
            <button
              className={`${HeaderStyle.font16} ${HeaderStyle.textWhite} ${HeaderStyle.navLink}`}
              data-id="about"
              onClick={() => handleScrollTo('#about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`${HeaderStyle.font16} ${HeaderStyle.textWhite} ${HeaderStyle.navLink}`}
              data-id="projects"
              onClick={() => handleScrollTo('#projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`${HeaderStyle.font16} ${HeaderStyle.textWhite} ${HeaderStyle.navLink}`}
              data-id="experience"
              onClick={() => handleScrollTo('#experience')}
            >
              Experience
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

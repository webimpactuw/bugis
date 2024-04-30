import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import menu from '../assets/PopularMenuBugis.png';

const CombosMenu = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('popular');

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <main className='menu'>
        <h1 className='visually-hidden'>Combos</h1>
        <section className='menu__headers'>
          <ul>
            <li>
                <Link to='/popularmenu'>
                    <span>Popular Menu Items</span>
                </Link>
            </li>

            <li>
                <Link to='/entreesmenu'>
                    <span>Entrees</span>
                </Link>
            </li>

            <li>
                <Link to='/bowlsmenu'>
                    <span>Bowls</span>
                </Link>
            </li>

            <li>
              <Link to='/combosmenu'>
                <span
                  className={
                    activeMenu === 'combos' ||
                    location.pathname === '/combosmenu'
                      ? 'white-bg'
                      : ''
                  }
                  onClick={() => handleClick('combos')}
                >
                  Combos
                </span>
                |
              </Link>
            </li>

            <li>
              <Link to='/tteokbokkimenu'>
                <span>Tteokbokki</span>
              </Link>
            </li>

            <li>
              <Link to='/adesmenu'>
                <span>Ades</span>
              </Link>
            </li>

            <li>
              <Link to='/coffeemenu'>
                <span>Coffee</span>
              </Link>
            </li>

            <li>
              <Link to='/noncoffeemenu'>
                <span>Non-Coffee</span>
              </Link>
            </li>
          </ul>
        </section>

        <section className='menu__image'>
          <img src='/img/drinksMenu1.png' alt='' width='654' height='925' />
          <img src='/img/drinksMenu2.png' alt='' width='654' height='925' />
        </section>
      </main>
    </>
  );
};

export default CombosMenu;
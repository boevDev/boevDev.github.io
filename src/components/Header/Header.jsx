import WelbexLogo from './assets/welbex-logo.svg?react';
import TelegramIcon from '../../assets/telegram-icon.svg?react';
import ViberIcon from '../../assets/viber-icon.svg?react';
import WhatsAppIcon from '../../assets/whatsapp-icon.svg?react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <nav className='header__nav'>
          <a href='/' className='header__logo'>
            <img
              src={WelbexLogo}
              alt='welbex-logo'
              className='header__logo__img'
            />
            <div className='header__logo__info'>
              крупный интегратор CRM в России и ещё 8 странах
            </div>
          </a>
          <Link className='header__nav__item' to={'/'}>
            Услуги
          </Link>
          <Link className='header__nav__item' to={'/'}>
            Виджеты
          </Link>
          <Link className='header__nav__item' to={'/'}>
            Интеграции
          </Link>
          <Link className='header__nav__item' to={'/'}>
            Кейсы
          </Link>
          <Link className='header__nav__item nav__item__hidden' to={'/'}>
            Сертификаты
          </Link>
        </nav>
        <div className='header__contacts'>
          <a className='header__contacts__phone' href='tel:+75555555555'>
            +7 555 555-55-55
          </a>
          <div className='header__contacts__messengers'>
            <Link to={'/'} className='header__contacts__messengers__item'>
              <img src={TelegramIcon} alt='tg' className='messengers-img' />
            </Link>
            <Link to={'/'} className='header__contacts__messengers__item'>
              <img src={ViberIcon} alt='vb' className='messengers-img' />
            </Link>
            <Link to={'/'} className='header__contacts__messengers__item'>
              <img src={WhatsAppIcon} alt='wa' className='messengers-img' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

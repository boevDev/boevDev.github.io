import { Link } from 'react-router-dom';
import TelegramIcon from '../../assets/telegram-icon.svg';
import ViberIcon from '../../assets/viber-icon.svg?react';
import WhatsAppIcon from '../../assets/whatsapp-icon.svg';

const Footer = () => {
  return (
    <footer>
      <div className='footer__conteiner'>
        <div className='footer__about-block'>
          <div className='footer__title'>О компании</div>
          <div className='footer__content'>
            <Link to={'/'} className='footer__item'>
              Партнёрская программа
            </Link>
            <Link to={'/'} className='footer__item'>
              Вакансии
            </Link>
          </div>
        </div>
        <div className='footer__menu-block'>
          <div className='footer__title'>Меню</div>
          <div className='footer__content_row'>
            <div className='footer__content'>
              <Link to={'/'} className='footer__item'>
                Расчёт стоимости
              </Link>
              <Link to={'/'} className='footer__item'>
                Услуги
              </Link>
              <Link to={'/'} className='footer__item'>
                Виджеты
              </Link>
              <Link to={'/'} className='footer__item'>
                Интеграции
              </Link>
              <Link to={'/'} className='footer__item'>
                Наши клиенты
              </Link>
            </div>
            <div className='footer__content'>
              <Link to={'/'} className='footer__item'>
                Кейсы
              </Link>
              <Link to={'/'} className='footer__item'>
                Благодарственные письма
              </Link>
              <Link to={'/'} className='footer__item'>
                Сертификаты
              </Link>
              <Link to={'/'} className='footer__item'>
                Блог на Youtube
              </Link>
              <Link to={'/'} className='footer__item'>
                Вопрос / Ответ
              </Link>
            </div>
          </div>
        </div>
        <div className='footer__contacts-block'>
          <div className='footer__title'>Контакты</div>
          <div className='footer__content'>
            <a href='tel:+75555555555' className='footer__tel'>
              +7 555 555-55-55
            </a>
            <div className='footer__item footer__item_messengers'>
              <Link to={'/'}>
                <img src={TelegramIcon} alt='tg' />
              </Link>
              <Link to={'/'}>
                <img src={ViberIcon} alt='tg' />
              </Link>
              <Link to={'/'}>
                <img src={WhatsAppIcon} alt='tg' />
              </Link>
            </div>
            <Link to={'/'} className='footer__item'>
              Москва, Путевой проезд 3с1, к 902
            </Link>
          </div>
        </div>
      </div>
      <div className='privacy-policy_wrapper'></div>
      <div className='privacy-policy_conteiner'>
        <div>©WELBEX 2022. Все права защищены.</div>
        <Link to={'/'} className='privacy-policy__link'>
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

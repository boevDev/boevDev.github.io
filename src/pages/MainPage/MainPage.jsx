import Button from '../../components/Button/Button';

const MainPage = () => {
  return (
    <main className='main-page'>
      <div className='main-page__conteiner'>
        <div className='main-page__block-1'>
          <div className='title_heading'>
            Зарабатывайте
            <br />
            больше
          </div>
          <div className='title_name text-gredient'>c WELBEX</div>
          <div className='title_description'>
            Развиваем и контролируем
            <br />
            продажи за вас
          </div>
        </div>

        <div className='main-page__block-2'>
          <div className='title-2'>
            Вместе c{' '}
            <span className='text-bold'>
              бесплатной
              <br />
              консультацией{' '}
            </span>
            мы дарим:
          </div>

          <div className='grid-conteiner'>
            <div className='grid__item'>
              <div className='grid_item__title'>виджеты</div>
              <div className='grid_item__description'>30 готовых решений</div>
            </div>
            <div className='grid__item'>
              <div className='grid_item__title'>dashboard</div>
              <div className='grid_item__description'>
                c показателями вашего бизнеса
              </div>
            </div>
            <div className='grid__item'>
              <div className='grid_item__title'>skype аудит</div>
              <div className='grid_item__description'>
                отдела продаж и CRM системы
              </div>
            </div>
            <div className='grid__item'>
              <div className='grid_item__title'>35 дней</div>
              <div className='grid_item__description'>использования CRM</div>
            </div>
          </div>

          <div className='grid-conteiner_hidden'>
            <div className='grid__item_hidden'>
              <span className='item__line' />
              Skype аудит
            </div>
            <div className='grid__item_hidden'>
              <span className='item__line' />
              30 виджетов
            </div>
            <div className='grid__item_hidden'>
              <span className='item__line' />
              Dashboard
            </div>
            <div className='grid__item_hidden'>
              <span className='item__line' />
              Месяц аmoCRM
            </div>
          </div>

          <Button
            className={'btn-get-cons'}
            content={'Получить консультацию'}
          />
        </div>
      </div>
    </main>
  );
};

export default MainPage;

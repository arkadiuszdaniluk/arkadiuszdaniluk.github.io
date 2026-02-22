import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('footer.brand')}</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('navigation.contact')}</h4>
            <div className="text-gray-400">
              <p>{t('footer.email')}: {t('footer.email_value')}</p>
              <p>{t('footer.location')}: {t('footer.location_value')}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followme')}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                {t('footer.linkedin')}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                {t('footer.github')}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                {t('footer.twitter')}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

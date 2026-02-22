import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('home.title')}</h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">{t('home.subtitle')}</p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">{t('home.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio" className="btn-primary">
              {t('home.cta')}
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t('home.cta_contact')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('about.skills')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'React & TypeScript', desc: 'Modern frontend development' },
              { title: 'Node.js & Express', desc: 'Powerful backend solutions' },
              { title: 'Full Stack', desc: 'End-to-end application development' },
            ].map((skill, i) => (
              <div key={i} className="p-6 bg-light rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-primary">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home.question')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
           {t('home.inspire')}
          </p>
          <Link to="/contact" className="btn-secondary">
            {t('navigation.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
}

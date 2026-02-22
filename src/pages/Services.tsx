import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  type Service = {
    icon: string;
    title: string;
    description: string;
    features: string[];
  };

  const services: Service[] = [
    {
      icon: '🤖',
      title: t('services.ai_dev'),
      description: t('services.ai_dev_desc'),
      features: t('services.ai_dev_features', { returnObjects: true }) as string[],
    },
    {
      icon: '🌐',
      title: t('services.backend_dev'),
      description: t('services.backend_dev_desc'),
      features: t('services.backend_dev_features', { returnObjects: true }) as string[],
    },
    {
      icon: '📱',
      title: t('services.mobile_dev'),
      description: t('services.mobile_dev_desc'),
      features: t('services.mobile_dev_features', { returnObjects: true }) as string[],
    },
    {
      icon: '💡',
      title: t('services.consulting'),
      description: t('services.consulting_desc'),
      features: t('services.consulting_features', { returnObjects: true }) as string[],
    },
  ];

  const processTitles = t('services.process_titles', { returnObjects: true }) as string[];
  const processDescs = t('services.process_descs', { returnObjects: true }) as string[];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">{t('services.title')}</h1>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-8 bg-light rounded-lg hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature: string, j: number) => (
                    <li key={j} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('services.process_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processTitles.map((title: string, i: number) => {
              const process = {
                step: i + 1,
                title,
                desc: processDescs[i] ?? ''
              };

              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">{t('services.cta_title')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.cta_desc')}
          </p>
          <a
            href="mailto:hello@portfolio.com"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {t('services.cta_button')}
          </a>
        </div>
      </section>
    </div>
  );
}

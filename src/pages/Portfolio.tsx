import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.project1'),
      description: t('portfolio.project1_desc'),
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e11526eb?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: t('portfolio.project2'),
      description: t('portfolio.project2_desc'),
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
      tags: ['React', 'Chart.js', 'Tailwind CSS', 'Real-time'],
    },
    {
      title: t('portfolio.project3'),
      description: t('portfolio.project3_desc'),
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">{t('portfolio.title')}</h1>
          <p className="text-xl opacity-90">{t('portfolio.subtitle')}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs font-medium bg-light text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '100+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

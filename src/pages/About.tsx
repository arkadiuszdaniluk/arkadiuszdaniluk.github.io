import { useTranslation } from 'react-i18next';
import profileImg from '../assets/me.jpg';

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">{t('about.title')}</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={profileImg}
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('about.skills')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
              },
              {
                category: 'Backend',
                skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
              },
              {
                category: 'Tools & DevOps',
                skills: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Webpack'],
              },
              {
                category: 'Soft Skills',
                skills: ['Communication', 'Problem Solving', 'Team Leadership', 'Agile', 'Mentoring'],
              },
            ].map((skillGroup, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 bg-light text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

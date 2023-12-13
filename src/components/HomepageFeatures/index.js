import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Exercises',
    Svg: require('@site/static/img/undraw_content_creator_re_pt5b.svg').default,
    description: (
      <>
        We have gathered a variety of SQL exercises (with answers) for each SQL Chapter.
      </>
    ),
  },
  {
    title: 'Certificates',
    Svg: require('@site/static/img/undraw_certificate_re_yadi.svg').default,
    description: (
      <>
        Gain a personal SQLSite Certificate to prove your skills as a developer and increase your chances of landing developer jobs or projects. 
      </>
    ),
  },
  {
    title: 'Services',
    Svg: require('@site/static/img/undraw_services_re_hu5n.svg').default,
    description: (
      <>
        SQL Site offers a wide range of services and products for beginners and professionals,
      helping millions of people everyday to learn and master new skills.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className='simple-class'>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

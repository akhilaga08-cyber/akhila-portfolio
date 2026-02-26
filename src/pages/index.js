import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <h1 className="hero__title">
          Akhila G A
        </h1>

        <p className="hero__subtitle">
          SRE | DevOps Engineer | Cloud Engineer ☁️🚀
        </p>

        <div style={{marginTop: '30px'}}>

          <a
            className="button button--secondary button--lg"
            href="/docs/projects"
            style={{marginRight: '15px'}}
          >
            View My Projects 🚀
          </a>

          <a
            className="button button--outline button--lg"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume 📄
          </a>

        </div>

      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Akhila Portfolio"
      description="Akhila DevOps Engineer Portfolio">

      <HomepageHeader />

      <main className="container" style={{marginTop: '40px'}}>

        <h2>About Me</h2>
        <p>
          I am a DevOps and Site Reliability Engineer with 3+ years of experience
          managing cloud infrastructure, CI/CD pipelines, and enterprise-scale
          applications across AWS environments.
        </p>

        <p>
          I specialize in automation, reliability engineering, and cloud-native
          technologies to build scalable and highly available systems.
        </p>

        <h2>Technical Skills</h2>
        <ul>
          <li>AWS, Azure</li>
          <li>Terraform (Infrastructure as Code)</li>
          <li>Docker & Kubernetes</li>
          <li>Jenkins, ArgoCD (CI/CD)</li>
          <li>Monitoring: Grafana, Prometheus, Dynatrace</li>
          <li>Git, Bitbucket</li>
        </ul>

      </main>

    </Layout>
  );
}
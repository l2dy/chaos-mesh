/*jshint esversion: 6 */
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import CodeSnippet from "@site/src/theme/CodeSnippet";

const install = `# Install on Kubernetes 
curl -sSL https://raw.githubusercontent.com/pingcap/chaos-mesh/master/install.sh | sh`

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className={classnames(`${styles.pitch} col col--6`)}>
              <h2>Easy to Use</h2>
              <p>
                No special dependencies, Chaos Mesh can be easily deployed directly on Kubernetes
                clusters, including <a href="https://github.com/kubernetes/minikube">Minikube</a> and <a href="https://kind.sigs.k8s.io/docs/user/quick-start/">Kind</a>.
                Require no modification to the deployment logic of the system under test (SUT).
                Easily orchestrate fault injection behaviors in chaos experiments.
                Hide underlying implementation details so that users can focus on orchestrating the chaos experiments.
              </p>
              <CodeSnippet snippet={install} lang="bash"></CodeSnippet>
            </div>
            <div className={classnames(`${styles.pitch} col col--6`)}>
              <h2>Designed for Kubernetes</h2>
              <p>
                Chaos Mesh uses <a href="https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/">CustomResourceDefinitions</a> (CRD) to define chaos objects.
                In the Kubernetes realm, CRD is a mature solution for implementing custom resources,
                with abundant implementation cases and toolsets available.
                Using CRD makes Chaos Mesh naturally integrate with the Kubernetes ecosystem.
              </p>
              <img src="img/chaos-mesh.svg" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;

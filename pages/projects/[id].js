import Head from "next/head";
import { getAllMdIds, getMdData } from "../../lib/markdown";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Carousel from "../../components/carousel";

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        {projectData.images && <Carousel images={projectData.images} />}
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <p className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
        </p>
        <div
          className={utilStyles.articleBody}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = getAllMdIds("projects");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getMdData(params.id, "projects");
  return {
    props: {
      projectData,
    },
  };
}

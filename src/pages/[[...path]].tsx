import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import NotFound from 'src/NotFound';
import Layout from 'src/Layout';
import {
  SitecoreContext,
  ComponentPropsContext,
  handleExperienceEditorFastRefresh,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideSitecoreContextValue } from 'lib/component-props';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { componentFactory } from 'temp/componentFactory';
import { sitemapFetcher } from 'lib/sitemap-fetcher';

export type PageCustomData = {
  RenderedAt: string;
};

export type SitecorePagePropsCustom = {
  CustomData: PageCustomData;
  SCPageData: SitecorePageProps;
};


const SitecorePage = ({CustomData,SCPageData}:SitecorePagePropsCustom): JSX.Element => {
  useEffect(() => {
    // Since Experience Editor does not support Fast Refresh need to refresh EE chromes after Fast Refresh finished
    handleExperienceEditorFastRefresh();
  }, []);

  if (SCPageData.notFound || !SCPageData.layoutData) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return <NotFound />;
  }

  const context: StyleguideSitecoreContextValue = {
    route: SCPageData.layoutData.sitecore.route,
    itemId: SCPageData.layoutData.sitecore.route?.itemId,
    ...SCPageData.layoutData.sitecore.context,
  };

  return (
    <div>
      <ComponentPropsContext value={SCPageData.componentProps}>
        <SitecoreContext<StyleguideSitecoreContextValue>
          componentFactory={componentFactory}
          context={context}
        >
          <Layout layoutData={SCPageData.layoutData} />
        </SitecoreContext>
      </ComponentPropsContext>
      <div className="gray-text">Page Generated at: {CustomData.RenderedAt}</div>
    </div>
  );
};

// This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).
export const getStaticPaths: GetStaticPaths = async (context) => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request (development mode in this example).
  // Alternatively, the entire sitemap could be pre-rendered
  // ahead of time (non-development mode in this example).
  // See https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration

  if (process.env.NODE_ENV !== 'development') {
    // Note: Next.js runs export in production mode
    const paths = await sitemapFetcher.fetch(context);

    return {
      paths,
      fallback: process.env.EXPORT_MODE ? false : 'blocking',
    };
  }

  return {
    paths: [],
    fallback: 'blocking',
  };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getStaticProps: GetStaticProps = async (context) => {
  const scData = await sitecorePagePropsFactory.create(context);

  return {
    props: { 
      SCPageData:scData, 
      CustomData:{
        RenderedAt:new Date().toString(), 
      }
    },
   //renderedAt: new Date().toISOString(),
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
    notFound: scData.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};

export default SitecorePage;

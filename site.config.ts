import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '319597a85c784410addf43ceb8d98e52',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'gbike',
  domain: 'gbike',
  author: 'gbike',

  // open graph metadata (optional)
  description: 'gbike',

  // social usernames (optional)

  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '새소식',
      pageId: '0adf0895b584482688e8d81e415d902b'
    },
    {
      title: '인사이드',
      pageId: '373a8997cfa041059b1aad9150e701ef'
    },
    {
      title: '서비스',
      pageId: 'dd95b6d843f344689266489efa4c337d'
    },
    {
      title: '언론뉴스',
      pageId: 'e7af798c90df42aebc1d6bd18d9d472f'
    },
    {
      title: '창업',
      pageId: '25772071fcdb44328dd1c2d9e3a1f18c'
    },
    {
      title: '보도자료',
      pageId: '478e2a5d829844938e517cbf7a665940'
    }
  ]
})

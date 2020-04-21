export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9f6e2817e36c01eab3d5d3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-he5ii6f2',
                  apiId: '58d305dd-55ed-43e4-a961-486381c0cccb'
                },
                {
                  buildHookId: '5e9f6e281e624301ddedf70d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k2jj4xdp',
                  apiId: '1e801b76-f75c-4ead-8427-b4c5a85f5ba2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Danxil/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k2jj4xdp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

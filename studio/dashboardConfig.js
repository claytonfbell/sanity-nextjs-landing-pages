export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d0e7ac87d4254a1ca07acec',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-th7rtxar',
                  apiId: '5951165a-7541-4f41-8d79-344051ec4502'
                },
                {
                  buildHookId: '5d0e7ac8e67e35f459ed452c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-34ryz117',
                  apiId: 'febccc00-3b9a-4f8a-acc9-f7fe377c76a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/claytonfbell/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-34ryz117.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

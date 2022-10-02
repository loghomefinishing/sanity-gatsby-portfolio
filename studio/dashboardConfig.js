export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '633914138b99a8066ba37e8c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vgn1k96c',
                  apiId: '2059ae27-208b-463c-910a-870bc266723d'
                },
                {
                  buildHookId: '633914148b99a805eda37fdd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i89rr27b',
                  apiId: 'fb523afc-8959-4281-844d-8a90caca09eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/loghomefinishing/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i89rr27b.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

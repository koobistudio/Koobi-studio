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
                  buildHookId: '602d17cfcbd4580131439d7e',
                  title: 'Sanity Studio',
                  name: 'koobi-studio-studio',
                  apiId: '3de0b4c2-6bfa-4beb-a448-e46df3c2ecda'
                },
                {
                  buildHookId: '602d17cfcbd458008e43a18c',
                  title: 'Portfolio Website',
                  name: 'koobi-studio',
                  apiId: 'a768fdab-da28-45e6-aae1-6a18a517c2e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koobistudio/Koobi-studio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://koobi-studio.netlify.app',
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

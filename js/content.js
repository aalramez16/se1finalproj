const information = [
  {
    appName: 'BitBucket',
    appIcon: 'bitbucket-icon.png',
    appUrl: 'https://bitbucket.org/product/',
    appInfo: {
      comprehension: [
        ['h2', 'Comprehension'],

        //Start Repository
        ['div', 0],
        ['h4', 'Starting a Repository'],
        ['p', 'Note: no startup tutorial prompted', 'note'],
        ['ul',
          [
            'Simple, option is presented as the first thing a user sees.',
            'Gives a few options, basics such as naming, including a description and a readme file.',
            'Advanced settings allow for the choice of language, forking options, and others.'
          ]
        ],
        ['img', 'bitbucket-create-repository.jpg'],
        ['div', 1],

        //Connect Repository
        ['div', 0],
        ['h4', 'Connecting to the Repository'],
        ['img', 'bitbucket-connect-repository.jpg'],
        ['p', 'Can choose build based on language picked.'],
        ['ul',
          [
            'Bitdemo1 is in Java',
            'Bitdemo2 is in C#',
            'Bitdemo3 is in C'
          ]
        ],
        ['img', 'bitbucket-choose-language.jpg'],
        ['div', 1],


        ['div', 0],
        ['h4', 'Ready to Go'],
        ['img', 'bitbucket-login.jpg'],
        ['div', 1],
      ],

      privacy: [
        ['h2', 'Privacy'],

        //Privacy Policy
        ['div', 0],
        ['h4', 'Here is a quick look at privacy data for BitBucket'],
        ['a', 'https://tosdr.org/#bitbucket', 'View full Privacy Survey'],
        ['img', 'bitbucket-privacy-1.jpg'],
        ['img', 'bitbucket-privacy-2.jpg'],
        ['div', 1],

        //Pros and Cons
        ['div', 0],
        ['h4', 'Pros:'],
        ['ul',
          [
            'Can opt out of promotional conversations.'
          ]
        ],
        ['h4', 'Neutrals:'],
        ['ul',
          [
            'Must be 16+ to use',
            'User is responsible for maintaining account security',
            'Requires first party cookies'
          ]
        ],
        ['h4', 'Cons:'],
        ['ul',
          [
            'Personal data may still be stored after requested deletion',
            'Blocking cookies hurts service use',
            'Service may use tracking pixels, web beacons etc on users.',
            'Uses third party cookies to track user activity in and out of the site'
          ]
        ],
        ['div', 1],

      ],

      collaborability: [
        ['h2', 'Collaborability'],
        ['ul',
          [
            'Setup seems simple as far as sharing',
            'Networking through GitKraken'
          ]
        ],
        ['img', 'bitbucket-collaborability.jpg']
      ],

      other: [
        ['h2', 'Other Details'],
        ['ul',
          [
            'Sends emails after every test of a build',
            'Can turn off based on repository',
            'Desktop app is through SourceTree',
            'Can use GitKraken'
          ]
        ]
      ]
    }// end BitBucket appInfo
  }, // end BitBucket
  {
    appName: 'GitLab',
    appIcon: 'gitlab-icon.png',
    appUrl: 'https://about.gitlab.com/',
    appInfo: {
      comprehension: [
        ['h2', 'Comprehension'],

        //Getting Started
        ['div', 0],
        ['h4', 'Getting Started'],
        ['p', 'Right after logging in, the first thing you see is a list of your GitLab projects.'],
        ['img', 'gitlab-landing.jpg'],
        ['div', 1],
        //New Project
        ['div', 0],
        ['p', 'When creating a new project, there are a couple of options to pick from. “Blank Project” ' +
        'is a simple page shown in the image below. “Create from Template” offers options including Ruby on Rails, ' +
        'Spring, .NET Core, and Android. “Import Project” allows imports from other git repositories, such as ' +
        'GitHub and BitBucket. “CI/CD for external repo” allows you to connect a repository from another site to GitLab.'],
        ['img', 'gitlab-new-project.jpg'],
        ['div', 1],

        //Repository
        ['div', 0],
        ['h4', 'After Creating a New Project'],
        ['p', 'The page shows the project repository and gives command line instructions for Git - very useful.'],
        ['img', 'gitlab-new-repository.jpg'],
        ['div', 1],
        //Project Page
        ['div', 0],
        ['p', 'Once finished, a project page might look something like this:'],
        ['img', 'gitlab-project-details.jpg'],
        ['p', 'A filled project page is noisy and hard to read.', 'note'],
        ['div', 1],

        //Profile Page
        ['div', 0],
        ['h4', 'Profile Page'],
        ['p', 'The profile page is minimalistic, allows for links to social media in profile' +
        'which is good for linking to potential employers.'],
        ['p', 'Still a bit noisy', 'note'],
        ['img', 'gitlab-profile.jpg'],
        ['div', 1]

      ],
      privacy: [
        ['h2', 'Privacy'],
        //Overall Privacy
        ['div', 0],
        ['p', 'GitLab finds privacy very important and uses it as a main selling point for their platform. <br> A whole overview on it can be found ', 'inline'],
        ['a', 'https://about.gitlab.com/privacy/', 'here'],
        ['div', 1],
        ['div', 0],
        ['p', 'This is an email I received a few months ago about GitLab’s terms of service change that included data analytics on the users. ' +
        'They rolled back the changes and sent the email because they know it is important to their users:'],
        ['img', 'gitlab-email-privacy.jpg'],
        ['div', 1],

        //Custom Privacy
        ['div', 0],
        ['h4', 'Each Project Has a Lot of Options on Privacy and Custom Visibility'],
        ['img', 'gitlab-project-permissions.jpg'],
        ['div', 1],

        //Terms
        ['div', 0],
        ['h4', 'A small Look at their Terms of Service'],
        ['a', 'https://tosdr.org/#gitlab', 'View full Privacy Survey'],
        ['img', 'gitlab-terms.jpg'],
        ['p', 'GitLab is also open source, code can be found  ', 'inline'],
        ['a', 'https://gitlab.com/gitlab-org/gitlab', 'here'],
        ['div', 1],
      ],
      collaborability: [
        ['div', 0],
        ['h2', 'Collaborability'],
        ['p', 'GitLab offers a lot of customizability for project collaboration. There are role permissions and access expiration dates.'],
        ['img', 'gitlab-project-members.jpg'],
        ['div', 1],
        //Groups
        ['div', 0],
        ['p', 'There are also groups, so many people can have the same access to different projects.'],
        ['img', 'gitlab-groups.jpg'],
        ['div', 1],
      ],
      other: [
        ['h2', 'Other Details'],
        ['div', 0],
        ['p', 'There are a lot of analytic options offered for many different use cases throughout the site. ' +
        'For example, analysis and graphing of issues, commits, etc. A cool feature they have is a built in scrum board for issues on big projects.'],
        ['img', 'gitlab-scrum.jpg'],
        ['div', 1],

        ['div', 0],
        ['p', 'GitLab has an explore projects section, but since it is a small site, there are not many projects posted or followed. ' +
        'There also is not a “social media” like aspect, where users can be followed and their activity can be seen. Instead only projects can be starred.'],
        ['div', 1],
      ]
    }
  },
  {
    appName: 'GitHub',
    appIcon: 'github-icon.png',
    appUrl: 'https://github.com/',
    appInfo: {
      comprehension: [
        ['h2', 'Comprehension'],
        ['div', 0],
        ['p', 'The main page when logged in is like a social media platform. You can follow users & see their activity, star projects, their changes, etc.'],
        ['img', 'github-feed.jpg'],
        ['p', 'Existing repositories are linked to the side of the main page for easy access, including ones that are not owned by you but you are a collaborator on.'],
        ['img', 'github-repositories.jpg', 'small'],
        ['div', 1],

        //New Repository
        ['div', 0],
        ['h4', 'Clean Repository Creation'],
        ['img', 'github-new-repository.jpg'],
        ['div', 1],

        //CLI
        ['div', 0],
        ['h4', 'Command Line'],
        ['p', 'Command line instructions appear after a new project is created. There is also an option to upload a file manually, although it is not obvious'],
        ['img', 'github-new-project.jpg'],
        ['p', 'Once the page is filled out, it\'s easy to read:'],
        ['img', 'github-project-page.jpg'],
        ['div', 1],

        ['div', 0],
        ['h4', 'A Sample Profile Page'],
        ['img', 'github-profile.jpg'],
        ['div', 1],

      ],
      privacy: [
        ['div', 0],
        ['h2', 'Privacy'],
        ['h4', 'A Quick Look at Terms:'],
        ['a', 'https://tosdr.org/#github', 'View full Privacy Survey'],
        ['img', 'github-terms.jpg'],
        ['p', 'NOTE: Private project join requests must be done via email, cannot be done on site. ' +
        'Also, there are not many security or privacy options for an individual project.', 'note'],
        ['img', 'github-project-permissions.jpg'],
        ['p', 'GitHub is also owned by Microsoft.'],
        ['div', 1],

      ],
      collaborability: [
        ['h2', 'Collaborability'],
        ['div', 0],
        ['p', 'It\'s easy to collaborate by adding GitHub users to a repository. In a shared repository, ' +
        'you can see a history of commits. Unfortunately, no analytics are offered by GitHub.'],
        ['img', 'github-history.jpg'],
        ['div', 1],
      ],
      other: [
        ['h2', 'Other Details'],
        ['div', 0],
        ['p', 'Being that it\'s the leading Git repo site right now, there are plenty of projects to explore.'],
        ['img', 'github-explore.jpg'],
        ['div', 1],

        ['div', 0],
        ['h4', 'Not Completely Clutter-Free'],
        ['p', 'GitHub advertises more repos on side of the main page:'],
        ['img', 'github-advertize.jpg', 'small'],
        ['div', 1],

        ['div', 0],
        ['h4', 'You can add Scrum Boards Too'],
        ['img', 'github-scrum-board.jpg'],
        ['div', 1],

      ]
    }
  }
]

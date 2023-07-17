module.exports = {
  packagerConfig: {
    executableName: 'reddit-desktop',
    icon: __dirname + '/images/Reddit'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: __dirname + '/images/Reddit.ico',
        setupIcon: './images/Reddit.ico'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb'
    },
    {
      name: '@electron-forge/maker-rpm'
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mikepruett3',
          name: 'reddit-desktop'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}
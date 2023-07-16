module.exports = {
  packagerConfig: {
    exectableName: 'reddit-desktop',
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
      name: '@electron-forge/maker-deb',
      options: {
        name: 'reddit-desktop',
        productName: 'reddit-desktop'
      }
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          name: 'reddit-desktop',
          productName: 'reddit-desktop'
        }
      }
    }
  ]
}
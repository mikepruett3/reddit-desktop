module.exports = {
  packagerConfig: {
    //exectableName: 'reddit-desktop',
    //name: 'reddit-desktop',
    icon: __dirname + '/images/Reddit'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        //productName: 'Reddit Desktop',
        //name: 'Reddit-Desktop',
        //exe: 'Reddit-Desktop',
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
      config: {
        options: {
          name: 'reddit-desktop',
          bin: 'reddit-desktop',
          productName: 'reddit-desktop'
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          name: 'reddit-desktop',
          bin: 'reddit-desktop',
          productName: 'reddit-desktop'
        }
      },
    },
  ],
}
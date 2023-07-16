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
        name: 'reddit-desktop1',
        bin: 'reddit-desktop2',
        productName: 'reddit-desktop3',
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          name: 'reddit-desktop4',
          bin: 'reddit-desktop5',
          productName: 'reddit-desktop6'
        }
      },
    },
  ],
}
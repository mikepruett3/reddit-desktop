module.exports = {
  packagerConfig: {
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
      config: {
        productName: "Reddit-Desktop"
        //exectableName: "reddit-desktop"
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        productName: "Reddit-Desktop"
        //exectableName: "reddit-desktop"
      },
    },
  ],
};

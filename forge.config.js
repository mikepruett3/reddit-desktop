module.exports = {
  packagerConfig: {
    name: "Reddit-Desktop",
    exectableName: "Reddit-Desktop",
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
        options: {
          productName: "Reddit-Desktop"
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          productName: "Reddit-Desktop"
        }
      },
    },
  ],
};

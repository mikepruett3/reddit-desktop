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
        exectableName: "reddit-desktop",
        iconUrl: __dirname + '/images/Reddit.ico'
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        exectableName: "reddit-desktop",
        iconUrl: __dirname + '/images/Reddit.png'
      },
    },
  ],
};

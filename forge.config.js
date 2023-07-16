module.exports = {
  packagerConfig: {
    //name: "reddit-desktop",
    exectableName: "reddit-desktop",
    icon: __dirname + '/images/Reddit'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        exe: "Reddit Desktop",
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
          productName: "reddit-desktop"
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          productName: "reddit-desktop"
        }
      },
    },
  ],
};

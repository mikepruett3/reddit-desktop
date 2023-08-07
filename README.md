# Reddit Desktop

Reddit Desktop is a simple Desktop application, built using [ElectronJS](https://www.electronjs.org).

## Installation

Dowload the lates [release](https://github.com/mikepruett3/reddit-desktop/releases) for Windows. Unfortunatley I am not able to provide packages for Linux or MacOS at this time.

For Windows... a standard Exectuable is provided, as well as a NuGet package.

## Features

- Spell Check
- Control for Hardware Acceleration

## Launching

To run, just launch the executable via the Desktop Shortcut, or the Executable directly.

Hardware Acceleration is disabled at launch

## Building

To build locally, clone the repository and install the dependencies.

```powershell
git clone https://github.com/mikepruett3/reddit-desktop.git
cd reddit-desktop
npm install electron
npm install @electron-forge/cli
```

To run the application locally.

```powershell
npm run start
```

To build the application installer.

```powershell
npm run make
```

## Dependencies

- electron-squirrel-startup
- publisher-github
- electron-forge
- electron-storage
- electron

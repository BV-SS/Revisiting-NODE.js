NPM --> Node Package Manager 
npm stands for Node Package Manager, which is a package manager for Node.js packages or modules. npm is responsible for managing the installation, updating, and removal of packages in a Node.js project. It is the default package manager for Node.js and is included with the installation of Node.js.

When you install Node.js on your computer, npm is also installed. You can use npm to download and install packages from the npm registry, which is a large database of open-source packages. npm creates a folder named “node_modules” in the root directory of your project, where the package will be placed.


Here are some common npm commands:

npm install <package-name>: installs a package globally or locally
npm uninstall <package-name>: uninstalls a package globally or locally
npm update <package-name>: updates a package to the latest version
npm list: lists all installed packages
npm search <package-name>: searches for a package on the npm registry
To install an npm package globally, you can use the following command:

npm install -g <package-name>

To install an npm package locally, you can use the following command:

npm install <package-name>

Note that when you install a package globally, it will be available system-wide, while installing a package locally will make it available only to the current project.

******************************************************************************************************
In this course we are goin to install "nodemon" package globally which is a command-line utility that automatically restarts your Node.js application when any changes are detected in your source code. This is particularly useful for development purposes, as it eliminates the need to manually restart your application every time you make changes to your code.

Global installation: npm install -g nodemon
Local installation: npm install --save-dev nodemon
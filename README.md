# ComicFun

ComicFun is an open source photo app that turns your profile picture into a cartoonified portrait!  The app allows you to take a photo, or upload an existing image and transform it into a professional, while fun image.

<img src="https://i.ibb.co/TM9VL1f/Capture.png" alt="Site preview">

#### Features
-   **Unlimited Images:** Upload and create unlimited cartoonified profile portraits.
-   **Photo Booth, Or Upload:** take a photo in the dashboard, or upload your best image.
-   **Customize Quality:** Choose multiple image qualities in the export settings.
-   **Customize File Type:** Choose what type of file you want to be exported.
-   **Free Forever:** ComicFun is free to use forever on the web, or to host on your own server.

#### How It Works
ComicFun is a fun and easy to use, web based cartoon photo tool.  It works by taking a photo in the photo booth, or uploading an existing photo, and transforming it into a cartoonified portrait.  To try this for yourself, simply go to [comicfun.app/tool](https://www.comicfun.app/tool).  If you are interested in running this software on your own servers, create a fork & clone of the repo.  Continue reading "Getting Started" for details on how to launch the project.  Certain features may be unavailable until you specify enviroment variables.

#### Getting Started
The easiest way to start working with ComicFun locally is to create a fork & clone of the project.  Press the fork button, then type "git clone" and paste the forked link into your terminal.  Run the following commands from your new local directory:
```
  npm install
```
```
  npm run dev
```

#### Environment Variabes
If you want to use certain features like Google Analytics, it requires an environment variable to configure.  Create a file called ".env.local" in development, and set them in your web host during development.  Note that leaving this out will not break the server, it will simply not enable these features.
```
  GOOGLE_ANALYTICS_GID=G-XXXXXXXXXX
  MICROSOFT_CLARITY_ID=XXXXXXXXXX
  SENDINBLUE_API_KEY=XXXXXXXXXX
```

#### Contributing
Everyone is enouradged to contribute to ComicFun!  Create a fork, and open a pull request for a change that you feel is necessary. If you are interested in contributing to this project, and don't know where to start, start with the [Contributing Guide](https://github.com/brandonbyr4/comicfun/blob/main/CONTRIBUTING.md).

#### License
License - [MIT](https://github.com/brandonbyr4/comicfun/blob/main/LICENSE.txt)

# Host App Project
This project is a host application developed using Vite, React, and TypeScript. The goal of this project is to serve as the main app that integrates one or more micro-apps using the module federation approach.

## Technologies Used

- **Vite**: A fast and modern build tool.
- **React**: A popular JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that helps in writing more maintainable and scalable code.
- **@originjs/vite-plugin-federation**: This plugin is used to implement module federation, allowing seamless integration of remote micro-apps into the host application.


## Micro-Apps Architecture

This project consists of 2 independent micro-apps, each developed and deployed separately. These micro-apps are integrated into the host application using module federation.

### Independent Development and Deployment

Each micro-app is fully self-contained, meaning that they are developed and deployed independently from the host app. They do not have any direct dependencies on each other or the host app during development or deployment.

### Exposing Modules from Micro-Apps

Each micro-app exposes specific modules that are made available to the host application. These modules can be used by the host app to access the functionality or components provided by the micro-apps.

### Module Federation with Vite Plugin

We use `@originjs/vite-plugin-federation` to establish the connection between the host app and the remote micro-apps. The host app references each micro-app as a remote and can dynamically load and use the exposed modules.

Here is how the remotes are configured in the host app's `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        remoteApp1: 'remoteApp1@http://localhost:3001/assets/remoteEntry.js',
        remoteApp2: 'remoteApp2@http://localhost:3002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});


## Cloning and Running the Project

### Step 1: Set Up Remote Micro-Apps

After cloning the repository, you need to first set up and build each of the micro-apps individually.

1. Navigate to each remote micro-app directory:
  ```bash
     cd remote-app1
   ```
2. Install dependencies and build the micro-app:
   ```bash
    pnpm install
    pnpm build
```
3. Run the micro-app:
```bash
pnpm dev
```
Repeat these steps for all other micro-apps (e.g., remote-app2, remote-app3), ensuring that each app is running independently.

### Step 2: Host Application Setup

Once you have set up and started the micro-apps, you can move to the host application.

1.Navigate to the host app directory:
```bash
cd host-app
```
2.Install the dependencies:
```bash
pnpm install
```
3.Start the host application in development mode:
```bash
pnpm run dev
```
At this point, the host app will load and connect to the running micro-apps, utilizing the modules they expose.


### Important Notes

Rebuilding Micro-Apps: Whenever you make changes to any of the remote micro-apps, you need to rebuild and restart them using the following commands:
```bash 
pnpm build
pnpm dev
```
After updating and running the micro-apps, you can return to the host app and refresh the application to reflect the latest changes.

By following these steps, you will have the host app running with the micro-apps integrated and functioning properly

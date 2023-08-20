## Microfrontend-demo

![container workflow](https://github.com/mandy8055/microfrontend-demo/actions/workflows/container.yml/badge.svg)
&nbsp;![marketing workflow](https://github.com/mandy8055/microfrontend-demo/actions/workflows/marketing.yml/badge.svg)

Microfrontend-demo is a monorepo containing four sub-applications that together create a micro-frontend architecture. The four sub-applications are:

- Container (React)
- Marketing (React)
- Auth (React)
- Dashboard (Vue)

The Container application serves as the host, while the other sub-applications act as remotes. The Container application is responsible for loading and rendering the other sub-applications.

### Getting Started

To get started with Microfrontend-demo, follow these steps:

1. Clone the repo:<br />
   `https://github.com/mandy8055/microfrontend-demo.git`
2. Install the dependencies for all sub-applications:<br />
   `npm install`

3. Start the Container application:<br />
   `npm run start:container`

4. Start the Marketing application(`port: 8081`):<br />
   `npm run start:marketing`

5. Start the Auth application(`port: 8082`):<br />
   `npm run start:auth`

6. Start the Dashboard application(`port: 8083`):<br />
   `npm run start:dashboard`

7. Open your web browser and go to http://localhost:8080 to see the Container application with the other sub-applications loaded as remotes.

### Contributing

If you would like to contribute to Microfrontend-demo, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Submit a pull request with your changes.

### License

Microfrontend-demo is licensed under the MIT License. See **[LICENSE](https://github.com/mandy8055/microfrontend-demo/blob/main/LICENSE)** for more information.

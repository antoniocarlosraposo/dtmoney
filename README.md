# Dtmoney

Simple application develop just to showcase some uses of React.

Main Functionalities: 
  
  1. List Transactions
  2. Add new transaction

## Screenshots
#### Main Screen (Transaction List)
<img src="https://github.com/antoniocarlosraposo/dtmoney/blob/master/src/assets/Screenshot.png" height="600px" width="1080px" />

## Tech used

### React
  -React was used on version `17.0.2`

### TypeScript

- The app is build using [Typescript](https://www.typescriptlang.org/), it grants bring static typing for javascript, granting us the ability to use the intelisense for our code editor, facilitates the refactoring of code, saves us debuging time and brings more assertiveness when accessing properties of our variables.
- Interfaces were created with payload responsed from the API, so the whole application is aware of it's data structure.

### Main libs:

- [axios](https://github.com/axios/axios) for api access.
- [styled-components](https://styled-components.com/) to simplify separation between code and stylesheets.
- [miragejs](https://miragejs.com/) to create a mock for data, as we do not have a backend running.
  
### Code quality

To ensure the code follow the some pattern and is correctly typed, some libs were used:

- [eslint](https://eslint.org/) to enforce code pattern.
- [prettier](https://prettier.io/) for code formatting.


#### Componentization of reusable code

UI components, like headers, dashboards were created to avoid code duplication. The components were create to be completely reusable and they do not contain any business logic.

#### Separation of concerns

- For this simple application, we use ContextAPI. It provides us a way to create a separation between UI components and business logic and state.





## Run the project

```
yarn && yarn dev
```

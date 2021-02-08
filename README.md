# About this project

Tavern is a Burgerstore website that has been developed as part of my personal portfolio.

I'd be happy if you could provide me with any feedback about the project, structure, code or anything that could make it better. Also, feel free to send as many Pull Requests as you want.

## Check it out!

You can quickly check the project by clicking [here](https://tavern-app.vercel.app/).

I have added the possibility to create, update or delete a menu item by creating an account. However, I ask you to use it carefully.

## Running the project locally

If you want to clone the project to test it locally and make any change to it, you can do so by following the next steps:

### Prerequisites
To run the project, you'll need to have a basic environment to run a React App, which you can find [here](https://reactjs.org/).

### Clonning the repository

````
# Clone the repository
$ git clone https://github.com/ladeira1/tavern.git

# Access the cloned directory
$ cd tavern

# Install the project's dependencies
$ npm install or yarn
````

### Environtment Variables
This project consumes a few services that demand you to configure some environment variables, which are going to be explained next:

#### .env file
First you will need to create a .env file at the root of the repository.

#### Mapbox
Mapbox api is used to locate the informed address and show it on the map. To do so, it requires an [Api Token](https://account.mapbox.com/).
In this project, this token has been named "REACT_APP_MAPBOX_TOKEN". And in order to use it, you'll need to declare it at the .env file you have previously created, like this:
````
REACT_APP_MAPBOX_TOKEN={your_api_token}
````

#### Firebase
[Firebase](https://firebase.google.com/) is used to store the application's data. It needs a few keys in order to work. To do so, you'll have to create a firebase project and declare your variables at the .env file like the following:
````
REACT_APP_MEASUREMENT_ID={your_measurement_id}
REACT_APP_APP_ID={your_app_id}
REACT_APP_MESSAGING_SENDER_ID={your_messaging_sender_id}
REACT_APP_PROJECT_ID={your_project_id}
REACT_APP_AUTH_DOMAIN={your_auth_domain}
REACT_APP_API_KEY={your_api_key}
REACT_APP_STORAGE_BUCKET={your_storage_bucket}
````

### Running the application

````
# Run the application
$ npm start or yarn start
````

# Get in touch!

<div align="center">
  <a href="https://www.linkedin.com/in/ladeira1/">
    <img align="left" alt="João's LinkedIN" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
  </a>

  <a href="mailto:joaoladeirag@gmail.com">
    <img align="left" alt="João's Gmail" height="25px" src="https://img.shields.io/badge/-joaoladeirag@gmail.com-263238?style=flat-square&labelColor=263238&logo=gmail&logoColor=white&link=mailto:joaoladeirag@gmail.com" />
  </a>
  <br/>
  </div>

  <br />

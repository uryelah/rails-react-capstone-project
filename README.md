## [Live project](https://hosting-test-29639.firebaseapp.com/)

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/uryelah/rails-react-capstone-project" styles="overflow: visible">
    <img src="./public/Screenshot_2020-07-28 Circle.png " alt="Logo" height="80">
  </a>

  <h1 align="center">
    <a href="https://github.com/uryelah/rails-react-capstone-project">
    Circle
    </a>
  </h1>

  <p align="center">
    A simple online groups meetup webapp
    <br />
    <a href="https://aqueous-wildwood-18424.herokuapp.com/"><strong>Live API »</strong></a>
    <a href="https://hosting-test-29639.firebaseapp.com/"><strong>Live App »</strong></a>
    <br />
    <br />
    <a href="https://github.com/uryelah/rails-react-capstone-project/issues">Report Bug</a>
    ·
    <a href="https://github.com/uryelah/rails-react-capstone-project/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About](#about)
* [About the App](#about-the-app)
* [Features](#features)
* [Future Features](#future-features)
* [Navigation](#navigation)
* [Characters](#characters)
* [Views](#views)
* [Routes](#routes)
* [Prerequisites](#prerequisites)
* [Built With](#built-with)
* [Commands](#available-commands)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)
* [CopyRight/Attributions](#copyRight/Attributions)


## About

This project is a Meetup-like site for online-only meetings.

<br/>
<img src="./public/circle.gif" width="300px">

## About The App

This project is a SPA remote groups and meetups application with a Rails API and React client.
An user can create a meetup group, schedule the frequency of the meetings, and the attendee limit per meeting. 
They can also browse all the groups, favorite them, and choose to join a group and, upon approval, join a meeting.

-------

## Features

- Client-side routing

- Rails API

- Favorites page

- Token-based authentication and athorizations

## Future Features

- Admin dashboard

- Zoom integration

- O-Auth integration for login and signup

## Navigation

This app is accessible with mouse and/or touch control.

-------

## API Routes

| Route | Verb | Description |
|---------|-------------|-------------|
| `/meets` | GET | Index of Meetups |
| `/meets` | POST | Cretion of new Meetup |
| `/meets/:meet_id` | GET | View Meetup by id |
| `/meets/:meet_id` | PUT | Edit Meetup |
| `/meets/:meet_id` | DELETE | Delete Meetup |
| `/meets/:meet_id/meetings` | GET | Index of Meetings from a Meetup |
| `/meets/:meet_id/meetings` | POST | Cretion of Meetup Meeting |
| `/meets/:meet_id/meetings` | PUT | Edit Meetup Meeting |
| `/meets/:meet_id/meetings` | DELETE | Delete Meetup Meeting |
| `/user_meets` | POST | Creation of new favorited Meetup relation by an User |
| `/user_meets/meets/:user_id` | GET | Index of Meetups favorited by User |
| `/user_meets/meets/:meet_id` | GET | Index of Users that favorited a Meetup |
| `/auth/login` | POST | Authentication of existing User |
| `/auth/signup` | POST | Creation of new User |
| `/users` | GET | Index of Users |
| `/users/:id` | GET | Show spedific User by id |

-------


## Client Routes

| Route | Description |
|---------|-------------|
| `/` | Landing Page |
| `/sign_up` | User Signup |
| `/sign_in` | User Login |
| `/list` | List of Meetups |
| `/details/:id` | Details of Meetup
| `/search/:term` | Search page of Meetups |
| `/favorites` | List of Favorited Meetups
| `/messages` | Chat (Not working)

-------

## Prerequisites

Run the app folder in the port 3000, and api server on port 3001.

For a better review experience run db:seeds beforehand.

-------

### Built With
This project was built using these technologies.
* React
* Rails
* Redux
* CSS3

-------

## Contact

👤 **Sarah Uryelah Silva Chamorro**

- Github: [@uryelah](https://github.com/uryelah)
- Twitter: [@sarah_chamorro](https://twitter.com/sarah_chamorro)
- Linkedin: [Sharah Chamorro](https://www.linkedin.com/in/uryelah/)
- Email: [sarahchamorro@gmail.com](sarahchamorro@gmail.com)

-------

## Acknowledgements
* [Microverse](https://www.microverse.org/)
* [The Odin Project](https://www.theodinproject.com/)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

-------

## CopyRight/Attributions

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

-------

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/uryelah/rails-react-capstone-project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/uryelah/rails-react-capstone-project/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/uryelah/rails-react-capstone-project/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/uryelah/rails-react-capstone-project/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/uryelah/rails-react-capstone-project/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/uryelah/
[product-screenshot]: ./public/aokanji.gif

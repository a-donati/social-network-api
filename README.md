# social-network-api
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project is a social network API using Node.js, Express, and Mongoose to interact with MongoDB. The database includes users and thoughts collections.  

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [References](#Refrences)
- [License](#license)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Installation

* From GitHub, fork or clone the repo. The user must have Node.js and MongoDB installed. Once forked, run `npm i` from the root directory to install required dependencies
* Run `node seeds/seed.js` to seed database
* Run `npm start` or `node index.js` to start the server

## Usage
Access the API from the different routes below
* Users: `http://localhost:3001/api/users`
* Thoughts: `http://localhost:3001/api/thoughts`
* Reactions: `http://localhost:3001/api/:thoughtId/reactions`

To access a single user or thought, add desired id to the end of the API route
* `http://localhost:3001/api/users/:userId`

* [Click here for video demo of application and API usage]()

![Social network API -  GET, POST, PUT, DELETE requests demonstrated on Insomnia]()


## References

* [Express](https://www.npmjs.com/package/express)
* [Mongoose](https://mongoosejs.com)
* [MongoDB](https://www.mongodb.com)
* [Insomnia](https://insomnia.rest/)

## License

This application is covered under MIT License

  <details>
    <summary>
      License Text
    </summary> 
 
  Copyright (c) 2022 a-donati
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
        
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
        
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  </details>


## Contributing

Please contact me to be added as a collaborator to this project.

## Questions

- Contact me via [email](mailto:angeladonati93@gmail.com)
- View my GitHub [profile](http://www.github.com/a-donati)

# Images Upload Application

A ReactJS and NodeJS project to upload images using Amazon S3 :open_file_folder:

<p align="center">
    <img src="https://media.giphy.com/media/Ige1R74p2mbPzxell7/source.gif">
</p>

## Environment Variables

Before start, you must add a <strong>.env</strong> file for back-end and front-end at root folder of each one. For back-end, the .env file should be:

```
  APP_URL=Back-end url, normally http://localhost:3333 as local environment
  APP_DOMAIN=Front-end url, normally http://localhost:3000 as local environment

  MONGO_URL=MongoDB url connection

  STORAGE_TYPE=local or s3. Use local to save files inside temporary folder or s3 for AWS S3 repository.

  AWS_ACCESS_KEY_ID=AWS bucket key
  AWS_SECRET_ACCESS_KEY=AWS bucket secret key
  AWS_DEFAULT_REGION=AWS bucket region
  AWS_BUCKET_NAME=AWS bucket name
```

Front-end .env configuration is just about API url:

```
REACT_APP_API_URL=Back-end url, normally http://localhost:3333 as local environment
```

## Getting Started

To run the back-end, we are using [Docker](https://www.docker.com/) & [Docker compose](https://docs.docker.com/compose/install/) and you can install it and just run the following command in <strong>api</strong> folder:

```
docker-compose up
```

It will download mongodb image for you.

After that you can just run ```yarn start``` at the same folder to run our NodeJS application. It will be available at <strong>http://localhost:3333</strong>

To run the front-end, just run the following command and the page will be open at <strong>http://localhost:3000</strong>:

```
yarn start
```

## Online

This project is not available online because is needed to implement user validation, otherwise the application will show all files from all users. I have been using this project as a private application, but you can create an AWS S3 bucket and publish it on Heroku or Netlify and have your own upload images application :)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/files-upload-app/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/) | [Rocketseat](https://github.com/Rocketseat/)

See also the list of [contributors](https://github.com/gabriel-hahn/files-upload-app/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

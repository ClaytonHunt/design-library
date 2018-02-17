# Introduction 
[//]: # (Write a short introduction to the purpose of)
[//]: # (this application here)

# Getting Started
[//]: # (this should be a user guide for the application)

# Build and Test
## Updating
We like to keep our applications up to date with the current versions
of the libraries that we depend on. For that purpose each project comes
with an update-all script that can be run to update to the latest version
of the packages that the project depends on.

To update the projects packages, execute the following command:
```
npm run update-all
```

## Development
### Testing
Tests in development run continuously, that is to say that every time
you save a file in the project, while the dev tests are running, they will
run again and provide feedback as to the effect your change had on the test run.

Run tests using the command:
```
npm run test:dev
```
Stop the tests by hitting [CTRL]+C on your keyboard.

An output similar to the following is expected:
```
Electron 1.7.6 (Mac OS X 10.12.6): Executed 1 of 1 SUCCESS (0.599 secs / 0.005 secs)
```
The number of tests can vary, but a successful output must include 'SUCCESS'.

A failure would resemble:
```
Electron 1.7.6 (Mac OS X 10.12.6): Executed 1 of 1 (1 FAILED) ERROR (0.583 secs / 0.007 secs)
```
Again, the number of tests can vary but if the output includes 'ERROR' then the test run failed.

### Running
Similar to the continuously running unit tests, the development server also refreshes 
the application for every change that is saved.

To run the development server, execute the following command:
```
npm start
```
Stop the development server by hitting [CTRL]+C on your keyboard.

## Production
### Testing
Run tests using the command:
```
npm test
```
An output similar to the following is expected:
```
Electron 1.7.6 (Mac OS X 10.12.6): Executed 1 of 1 SUCCESS (0.599 secs / 0.005 secs)
```
The number of tests can vary, but a successful output must include 'SUCCESS'.

A failure would resemble:
```
Electron 1.7.6 (Mac OS X 10.12.6): Executed 1 of 1 (1 FAILED) ERROR (0.583 secs / 0.007 secs)
```
Again, the number of tests can vary but if the output includes 'ERROR' then the test run failed.

### The Build
If the tests pass then you are ready to build the deployment package.
To create the deployment package execute the command:
```
npm run build
```

A successful build would resemble:
```
Build completed in 17.665s

  dist/vendor.js
  dist/app.js
  dist/polyfills.js
  dist/app.css
  dist/header.template.html
  dist/body.template.html
  dist/footer.template.html
  dist/index.html
```

If you receive an output similar to the one above then a 'dist'
folder should also have been created at the root of you application.
The 'dist' folder is the code that should be deployed.

# Contribute
When contributing to this project use the following format for your git commits
```
git commit -am "#[User Story Number] [Description of change]

ex. git commit -am "#1234 Initial commit for a new project"
```

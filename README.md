# React-Ocr

## Introduction
This is a react app that connects Boom Cards to Canvas by allowing students to upload score reports from Boom Cards. The app parses the score and uploads the score to canvas and unlocks the next lesson.

### Prerequisites:

- [Nodejs](https://nodejs.org/) version **8.10** or later

### Installation:

````
npx create-react-app react-ocr
cd react-ocr
npm start
npm install --save bootstrap react-dropzone-uploader
```
et importer les fichier de style dans le fichier `src/index.js` 

```
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
``` 

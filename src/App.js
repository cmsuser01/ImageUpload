import logo from './logo.svg';
import './App.css';
import S3 from 'react-aws-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;


const config = {
  bucketName: 'his-images',
  region: 'ap-southeast-1',
  accessKeyId: 'AKIAZQ6F55Z5TDDXHYFO',
  secretAccessKey: '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'
}

const ReactS3Client = new S3(config);

function App() {
  function awsImageUpload(oEvent){
    ReactS3Client
    .uploadFile(oEvent.target.files[0], "App")
    .then(data => console.log(data))
    .catch(err => console.error(err))

  
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Welcome to React Js Kumar</h4>         
         <input type='file' name='upload' onChange={awsImageUpload}/>        
      </header>
    </div>
  );    
}
export default App;

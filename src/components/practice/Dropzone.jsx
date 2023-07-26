import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'

//todo callback, legacy peer deps, root props, input props review
const Dropzone = () => {
  const [document, setDocument] = useState(null); //file
  const [documentName, setDocumentName] = useState(""); //file
  const [loading, setLoading] = useState(false);

  // const [error, setError] = useState(false);
  const [errorString, setErrorString] = useState("");

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    // Do something with the files
    // setDocument(acceptedFiles);
    if (fileRejections.length > 0) {
      console.log(fileRejections)
      setErrorString(fileRejections[0].errors[0].code)
    }
    setDocumentName(acceptedFiles[0].name);
    setDocument(acceptedFiles[0]);
    console.log(acceptedFiles);
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    maxFiles: 1
  })

  // not really used yet...
  if (loading) {
    return (<div>loading...</div>);
  }

  return (
    <div {...getRootProps({className: 'dropzone'})}>
      <input {...getInputProps()} />
      dropzone:
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      {
        documentName && <h4> doc: {documentName}</h4>
      }
      {
        errorString.length > 0 ? <div>{errorString}</div> : <div>no error</div>
      }
    </div>
  )
};
export default Dropzone;
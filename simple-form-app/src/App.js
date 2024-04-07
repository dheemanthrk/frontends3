import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    // You can perform actions here like uploading the image and sending the email
    console.log("Email:", email);
    console.log("Image:", image);
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;

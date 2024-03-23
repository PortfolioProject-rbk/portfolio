import React, { useState } from "react";
import axios from "axios";

const AddCardProfile = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");
  const [fullName, setFullName] = useState("");

  const createProfile = async () => {
    try {
      const formValues = {
        fullName,
        email,
        profession,
        bio,
        city,
        photo,
        backgroundImage,
      };
      const formData = new FormData();
      for (const key in formValues) {
        formData.append(key, formValues[key]);
      }

      const result = await axios.post(
        "http://localhost:3000/api/portfolio",
        formData
      );
      console.log(result);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleBackgroundImageChange = (event) => {
    setBackgroundImage(event.target.files[0]);
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="max-w-md mx-auto my-10 p-6 rounded-lg shadow-md bg-white">
        <div className="mb-4">
          <input
            className="w-32 h-32 rounded-full mx-auto"
            onChange={handlePhotoChange}
            type="file"
            accept="image/*"
          />
        </div>

        <input
          className="w-full px-3 py-2 mb-4 text-gray-700 border rounded"
          type="text"
          placeholder="Full Name"
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />

        <input
          className="w-full px-3 py-2 mb-4 text-gray-700 border rounded"
          type="text"
          placeholder="Profession"
          onChange={(event) => {
            setProfession(event.target.value);
          }}
        />

        <textarea
          className="w-full h-24 px-3 py-2 mb-4 text-gray-700 border rounded"
          type="text"
          placeholder="Bio"
          onChange={(event) => {
            setBio(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          className="w-full px-3 py-2 mb-4 text-gray-700 border rounded"
        />

        <input
          type="text"
          placeholder="City"
          onChange={(event) => {
            setCity(event.target.value);
          }}
          className="w-full px-3 py-2 mb-4 text-gray-700 border rounded"
        />

        <div className="flex justify-between">
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageChange}
            className="w-1/2 px-3 py-2 mb-4 mr-2 text-gray-700 border rounded"
          />
          <button
            className="px-3 py-2 text-white bg-green-500 rounded hover:bg-green-500 focus:outline-none"
            onClick={createProfile}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardProfile;

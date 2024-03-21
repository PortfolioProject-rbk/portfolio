import React, { useState } from "react";
import axios from "axios";
const AddCardProfile = () => {
  const [sucess, setSucess] = useState(false);
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState();
  const [backgroundImage, setImage] = useState();
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");
  const [fullName, setFullName] = useState("");

  const create = async (
    fullName,
    email,
    profession,
    bio,
    city,
    photo,
    backgroundImage
  ) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <div className="relative mx-auto w-36 rounded-full overflow-hidden">
          <input
            className="w-32 h-32 rounded-full mx-auto"
            onChange={(event) => {
              setPhoto(event.target.files[0]);
            }}
            type="file"
            accept="image/*"
          />
        </div>

        <input
          className="text-center text-2xl font-semibold mt-3 outline-none border-b-2 border-gray-300"
          type="text"
          placeholder="username"
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />

        <input
          className="text-center text-gray-600 mt-1 outline-none border-b-2 border-gray-300"
          type="text"
          placeholder="Profession"
          onChange={(event) => {
            setProfession(event.target.value);
          }}
        />
        <textarea
          className="text-gray-600 mt-5 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Bio"
          onChange={(event) => {
            setBio(event.target.value);
          }}
        />
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-3 text-sm">
            <input
              type="text"
              placeholder="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </li>
          <li className="flex items-center py-3 text-sm">
            <input
              type="text"
              placeholder="City"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </li>
        </ul>
        <button
          className="mt-5 btn btn-success  focus:outline-none focus:shadow-outline"
          onClick={() => {
            create(
              fullName,
              email,
              profession,
              bio,
              city,
              photo,
              backgroundImage
            );
          }}
        >
          Add
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
      </div>
    </div>
  );
};

export default AddCardProfile;

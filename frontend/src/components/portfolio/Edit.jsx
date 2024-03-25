import React, { useState, useEffect } from "react";
import imageHolder from "../../assets/images/imageHolder.jpg";
import axios from "axios";
const Edit = () => {
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");
  const [fullName, setFullName] = useState("");

  const [card, setCard] = useState(null);

  const id = localStorage.getItem("userId");
  console.log();

  useEffect(() => {
    fetchOne();
  }, []);

  useEffect(() => {
    if (card) {
      setEmail(card.email);
      setProfession(card.profession);
      setBio(card.bio);
      setCity(card.city);
      setFullName(card.fullName);
    }
  }, [card]);

  const fetchOne = () => {
    axios
      .get(`http://localhost:3000/api/portfolio/user/${id}`)
      .then((response) => {
        console.log(response.data);
        setCard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updated = (
    fullName,
    email,
    profession,
    bio,
    city,
    photo,
    backgroundImage
  ) => {
    const formValues = {
      fullName,
      email,
      profession,
      bio,
      city,
      photo,
      backgroundImage,
    };
    console.log(formValues);
    const formData = new FormData();
    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }
    axios
      .put(`http://localhost:3000/api/portfolio/${id}`, formData)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePhotoChange = (event) => {
    const selectedImage = event.target.files[0];
    setPhoto(selectedImage);
  };

  const handleBackgroundImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setBackgroundImage(selectedImage);
  };

  return (
    <div className="flex justify-center">
      <div className="py-4 px-5 bg-white rounded border-2 shadow-md">
        <div className="grid grid-cols-2 z-1 divide-x-2">
          <div className="max-w-md mx-auto my-10 p-6">
            <div className="mb-4">
              <div className="w-40 h-40 rounded-full shadow mx-auto overflow-hidden">
                {card && (
                  <img
                    className="w-[100%] h-[100%] object-cover"
                    src={card.photo}
                    alt=""
                  />
                )}
              </div>
              <input
                className="form-control mt-3 mx-5 w-[70%]"
                onChange={handlePhotoChange}
                type="file"
                accept="image/*"
              />
            </div>

            <input
              className="w-full px-3 py-2 mb-4 text-gray-700 border rounded"
              type="text"
              value={fullName}
              placeholder="Full Name"
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />

            <input
              className="w-full px-3 py-2 mb-4 text-gray-700 border rounded"
              type="text"
              placeholder="Profession"
              value={profession}
              onChange={(event) => {
                setProfession(event.target.value);
              }}
            />
          </div>
          <div className="max-w-md mx-auto my-10 p-6">
            <textarea
              className="w-full h-24 px-3 py-2 mb-4 text-gray-700 border rounded"
              type="text"
              placeholder="Bio"
              value={bio}
              onChange={(event) => {
                setBio(event.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-full px-3 py-2 mb-4 text-gray-700 border rounded"
            />

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
              className="w-full px-3 py-2 mb-4 text-gray-700 border rounded"
            />

            <div className="flex justify-between">
              <label htmlFor="">Background Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleBackgroundImageChange}
                className="px-3 py-2 mb-4 mr-2 text-gray-700 border rounded form-control"
              />
            </div>
          </div>
        </div>
        <div className="float-end"></div>
        <button
          className="btn btn-success"
          onClick={() => {
            updated(
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
          Edit
        </button>
      </div>
    </div>
  );
};

export default Edit;

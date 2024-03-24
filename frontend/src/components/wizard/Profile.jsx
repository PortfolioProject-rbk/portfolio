import { useState } from "react";
import axios from "axios";
import imageHolder from "../../assets/images/imageHolder.jpg"
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [profession, setProfession] = useState("");
    const [bio, setBio] = useState("");
    const [city, setCity] = useState("");
    const [fullName, setFullName] = useState("");

    const [image, setImage] = useState(imageHolder);
    const [bgImage, setBgImage] = useState();
    
    const navigate = useNavigate()

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
            navigate('/wizard/inter')
        } catch (error) {
            console.log(error);
        }
    };

    const handlePhotoChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        }
        setPhoto(selectedImage);
    };

    const handleBackgroundImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = () => {
                setBgImage(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        }

        setBackgroundImage(selectedImage);
    };

    return (
        <div className="flex justify-center">
            <div className="py-4 px-5 bg-white rounded border-2 shadow-md">
                <div className="grid grid-cols-2 z-1 divide-x-2">
                    <div className="max-w-md mx-auto my-10 p-6">
                        <div className="mb-4">
                            <div className="w-40 h-40 rounded-full shadow mx-auto overflow-hidden">
                                {image && <img className="w-[100%] h-[100%] object-cover" src={image} alt="" />}
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
                    </div>
                    <div className="max-w-md mx-auto my-10 p-6">
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
                <div className="float-end">

                    <button
                        className="primary-button"
                        onClick={createProfile}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;

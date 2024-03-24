import { useState } from "react";

const ContactModal = ({ platform, submitContact }) => {
    const [value, setValue] = useState([]);

    return (
        <div>
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    {platform ?
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add {platform.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body mx-auto">
                                <div className="wizard-social mx-auto">
                                    <img src={`http://127.0.0.1:3000/socials/${platform.icon}`} alt="" />
                                </div>
                                <input onChange={event => setValue(event.target.value)}
                                    className="form-control w-auto" placeholder={platform.name} type="text" />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                <button
                                    onClick={() => submitContact(platform.id, value)}
                                    data-bs-dismiss="modal"
                                    className="primary-button">Save changes</button>
                            </div>
                        </div> :
                        ''
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactModal

const ContactModal = ({ platform }) => {
    return (
        <div>
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    {platform ?
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add {platform.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body mx-auto">
                                <label htmlFor="">{platform.link + '/'}</label>
                                <input className="form-control w-auto" placeholder="platform.name" type="text" />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button className="btn btn-primary">Save changes</button>
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

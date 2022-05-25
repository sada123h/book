import React from 'react'
import { NavLink } from 'react-router-dom'

const about = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="about">About Us</h1>
                        <p className="lead mb-4">
                        Indian publisher of bestselling books, for readers of every stripe. An Amazon Company. The perfect place to talk books with readers, authors and editors! Send review copy requests to publicity-westland@amazon.com
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
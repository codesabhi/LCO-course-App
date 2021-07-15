import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoblock({ heading, img }) {
  return (
    <section className="my-4 py-4 bg-theme">
    <div className="container">
      <Heading title={heading} />
      <div className="row">
        <div className="col-8 mx-auto">
          <p className="lead text-white mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their. It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their.It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their.
          </p>
        </div>
        <div className="col-4">
          <div className="card bg-dark">
            <img src={img} className="card-img-top" alt="image goes here" />
            <div className="card-body">
              <h5 className="card-title text-success">Just click photos</h5>
              <p className="card-text text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.Some quick example text to build
                on the card title and make up the bulk of the card's
                content.Some quick example text to build on.
              </p>
              <Link to="/" className="btn btn-warning btn-block">
                {heading}
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

import React from "react"

export default function TeamPhotosection() {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div className="card-group">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Samartha</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Markus Dupree</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/25756/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Katrina Jade</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

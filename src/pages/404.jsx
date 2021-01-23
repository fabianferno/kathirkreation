import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default class Error404 extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Error 404 | Pattarai</title>
          </Helmet>
          <div className="bg-dark d-flex justify-content-center p-5 m-2">
            <div className="container-fluid">
              <div className=" d-flex align-items-center text-center">
                <div className="row flex-grow">
                  <div className="col-lg-7 mx-auto text-white">
                    <div className="row align-items-center d-flex flex-row">
                      <div className="col-lg-6 text-lg-right pr-lg-4 d-flex justify-content-center justify-content-lg-end">
                        <span
                          className="mb-0 text-white font-weight-bold"
                          style={{ fontSize: "12rem" }}
                        >
                          404
                        </span>
                      </div>
                      <div className="col-lg-6 text-lg-left pl-lg-4">
                        <h2 className="text-white">Uh Oh!</h2>
                        <h3 className="font-weight-light text-white">
                          Looks like the page you requested for doesn't exist :(
                        </h3>
                      </div>
                    </div>

                    <p className="text-white font-weight-medium text-center">
                      Copyright &copy; 2021 Kathir Kreation. All Rights
                      Reserved.
                    </p>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
            </div>
            {/* page-body-wrapper ends */}
          </div>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}

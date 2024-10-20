import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function UsersData() {
  const [posts, setPosts] = useState([]);
  
  const getCustomersData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.data.length > 0) {
          setPosts(response.data);
          // console.log(posts);
        } else {
          console.log("err");
        }
        // setPosts(postss);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCustomersData();
  }, []);

  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header p-0">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-sm-6">
                <h4>Simple Tables</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <NavLink to="/admin">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Simple Tables</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* /.row */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Fixed Header Table</h3>
                    <div className="card-tools">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: 150 }}
                      >
                        <input
                          type="text"
                          name="table_search"
                          className="form-control float-right"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: 500 }}
                  >
                    <table className="table table-head-fixed table-hover table-bordered  text-center">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>
                                <Link to="/admin/userstable">{item.id}</Link>
                              </td>
                              <td>{item.body}</td>
                              <td>{item.title}</td>
                              <td>
                                <span className="tag tag-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                Bacon ipsum dolor sit amet salami venison
                                chicken flank fatback doner.
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          «
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          »
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}

export default UsersData;

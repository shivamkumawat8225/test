import React from 'react'
import { NavLink } from 'react-router-dom'

function UsersTable() {
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Simple Tables</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/admin" >Home</NavLink></li>
                                    <li className="breadcrumb-item active">Simple Tables</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
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
                                            <div className="input-group input-group-sm" style={{ width: 150 }}>
                                                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body table-responsive p-0" style={{ height: 550 }}>
                                        <table className="table table-head-fixed table-hover table-bordered text-nowrap text-center">
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
                                                <tr>
                                                    <td>183</td>
                                                    <td>John Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-success">Approved</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>184</td>
                                                    <td>John Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-success">Approved</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>185</td>
                                                    <td>John Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-success">Approved</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>219</td>
                                                    <td>Alexander Pierce</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-warning">Pending</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>657</td>
                                                    <td>Bob Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-primary">Approved</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>175</td>
                                                    <td>Mike Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-danger">Denied</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>134</td>
                                                    <td>Jim Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-success">Approved</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>494</td>
                                                    <td>Victoria Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-warning">Pending</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>832</td>
                                                    <td>Michael Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-primary">Approved</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                                <tr>
                                                    <td>982</td>
                                                    <td>Rocky Doe</td>
                                                    <td>11-7-2014</td>
                                                    <td><span className="tag tag-danger">Denied</span></td>
                                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer clearfix">
                                        <ul className="pagination pagination-sm m-0 float-right">
                                            <li className="page-item"><a className="page-link" href="#">«</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">»</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* /.card */}
                            </div>
                        </div>
                        
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>



        </div>
    )
}

export default UsersTable

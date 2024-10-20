import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import API from "../../api";
// import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import Pagination from "../Pagination";

function State_familySurvey() {
  let { stateId } = useParams();
  // alert(stateId);
  const [t, i18n] = useTranslation("global");
  var language = i18n.language;
  // console.log("language is ", language);
  const [posts, setPosts] = useState([]);
  const [pageCount, setpageCount] = useState(50);

  const [offset, setoffset] = useState(0);
  const [perPage, setperPage] = useState(10);
  const [level_type, setlevel_type] = useState();
  const objdata = {
    username: "9399211053",
    stateid: stateId,
    lang: language,
    limit: perPage,
    skip: offset,
  };

  const getCustomersData = async () => {
    await API.post("statics/levelList", objdata)
      .then((response) => {
        console.log(response);
        if (response.data.status == "success") {
          if (level_type == "loksabha") {
            // console.log(response.data.data.loksabha.data);
            setPosts(response.data.data.loksabha.data);
            setpageCount(
              Math.ceil(response.data.data.loksabha.count / perPage)
            );
          } else {
            setPosts(response.data.data.jila.data);
            setpageCount(Math.ceil(response.data.data.jila.count / perPage));
          }
        } else {
          console.log("err");
        }
        // setPosts(postss);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setlevel_type(window.localStorage.getItem("level_type"));
    getCustomersData();
  }, [language, offset, level_type]);

  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header p-0">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-sm-6">
                <h4>Select State</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <NavLink to="">{t("header.home")}</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Simple Tables</li>
                  <li className="breadcrumb-item">
                    <input
                      type="radio"
                      key={"loksabha"}
                      id={"loksabha"}
                      name="radioGroup"
                      label={"loksabha"}
                      checked={level_type === "loksabha"}
                      onChange={() => {
                        setlevel_type("loksabha");
                        setoffset(0);
                        localStorage.setItem("level_type", "loksabha");
                      }}
                    />
                    Loksabha
                    <input
                      type="radio"
                      key={"jila"}
                      id={"jila"}
                      name="radioGroup"
                      label={"jila"}
                      checked={level_type === "jila"}
                      onChange={() => {
                        setlevel_type("jila");
                        setoffset(0);
                        localStorage.setItem("level_type", "jila");
                      }}
                    />
                    Jila
                  </li>
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
                {level_type == "loksabha" ? (
                  <div className="card">
                    {/* /.card-header */}
                    <div
                      className="card-body table-responsive p-0"
                      style={{ height: 500 }}
                    >
                      <table className="table table-head-fixed table-hover table-bordered  text-center">
                        <thead>
                          <tr>
                            {/*<th>ID</th>*/}
                            <th>{t("common.sr_no")}</th>
                            <th>{t("common.loksabha")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts.map((item) => {
                            return (
                              <tr key={item.id}>
                                {/*<td>
                                <Link to="/admin/userstable">{item._id}</Link>
                              </td>*/}
                                <td>{item.id}</td>
                                <td>
                                  <Link
                                    to={`/admin/loksabha_familysurvey/${stateId}/${item.id}`}
                                  >
                                    {item.loksabha}
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                    <Pagination
                      pageCount={pageCount}
                      offset={offset}
                      perPage={perPage}
                      onPageChange={(page) => setoffset(page)}
                    />
                  </div>
                ) : (
                  <div className="card">
                    {/* /.card-header */}
                    <div
                      className="card-body table-responsive p-0"
                      style={{ height: 500 }}
                    >
                      <table className="table table-head-fixed table-hover table-bordered  text-center">
                        <thead>
                          <tr>
                            {/*<th>ID</th>*/}
                            <th>{t("common.sr_no")}</th>
                            <th>{t("common.jila")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts.map((item) => {
                            return (
                              <tr key={item.id}>
                                {/*<td>
                                <Link to="/admin/userstable">{item._id}</Link>
                              </td>*/}
                                <td>{item.id}</td>
                                <td>
                                  <Link
                                    to={`/admin/loksabha_familysurvey/${stateId}/${item.id}`}
                                  >
                                    {item.jila}
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                    <Pagination
                      pageCount={pageCount}
                      offset={offset}
                      perPage={perPage}
                      onPageChange={(page) => setoffset(page)}
                    />
                  </div>
                )}
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

export default State_familySurvey;
// <Link
// to={{
//   pathname: `/admin/Loksabha_lowerwarroomfamilySurvey/${items.id}`,
// }}
// >
// <span className="border border-2xl rounded p-1 m-1">
//   {items.state}
// </span>
// </Link>

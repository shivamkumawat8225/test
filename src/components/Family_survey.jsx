import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import API from "../api";
// import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import Pagination from "./Pagination";

function Family_survey() {
  const [t, i18n] = useTranslation("global");
  var language = i18n.language;
  // console.log("language is ", language);
  const [posts, setPosts] = useState([]);
  const [pageCount, setpageCount] = useState(50);
  const [stateid, setstateid] = useState(0);
  const [loksabhaid, setloksabhaid] = useState(0);
  const [vidhansabhaid, setvidhansabhaid] = useState(0);
  const [jilaid, setjilaid] = useState(0);
  const [blockid, setblockid] = useState(0);
  const [boothid, setboothid] = useState(0);

  const [offset, setoffset] = useState(0);
  const [perPage, setperPage] = useState(10);
  const objdata = {
    username: "9399211053",
    stateid: stateid,
    loksabha: loksabhaid,
    jila: jilaid,
    vidhansabha: vidhansabhaid,
    block: blockid,
    booth: "",
    lang: language,
    limit: perPage,
    skip: offset,
  };

  const getCustomersData = async () => {
    await API.post("statics/levelList", objdata)
      .then((response) => {
        console.log(response);
        if (response.data.status == "success") {
          console.log(response.data);
          setPosts(response.data.data);
          setpageCount(Math.ceil(response.data.count / perPage));
        } else {
          console.log("err");
        }
        // setPosts(postss);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCustomersData();
  }, [language, offset]);

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
                    <NavLink
                      to=""
                      onClick={() => {
                        setstateid(0);
                        setloksabhaid(0);
                        setjilaid(0);
                        setvidhansabhaid(0);
                        setblockid(0);
                        setboothid(0);
                      }}
                    >
                      {t("common.reset")}
                    </NavLink>
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
                          <th>{t("common.states")}</th>
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
                                  to={`/admin/state_familysurvey/${item.id}`}
                                >
                                  {item.state}
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

export default Family_survey;
// <Link
// to={{
//   pathname: `/admin/lowerwarroomFamily_survey/${items.id}`,
// }}
// >
// <span className="border border-2xl rounded p-1 m-1">
//   {items.state}
// </span>
// </Link>

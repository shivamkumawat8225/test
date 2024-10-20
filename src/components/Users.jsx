import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import API from "../api";
import { useTranslation } from "react-i18next";
import Pagination from "./Pagination";
import { message } from "antd";

function Users() {
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
  const currentPage = Math.round(offset / perPage);
  const getCustomersData = async () => {
    await API.post("v1/user/lowerwarroomusers", objdata)
      .then((response) => {
        console.log(response);
        if (response.data.status == "success") {
          console.log(response.data);
          if (response.data.counts) {
            setPosts(response.data.user);
            setpageCount(Math.ceil(response.data.counts / perPage));
          } else {
            if (boothid <= 0) {
              setblockid(0);
            }
            if (blockid <= 0) {
              setvidhansabhaid(0);
            }
            if (vidhansabhaid <= 0) {
              setjilaid(0);
              setloksabhaid(0);
            }
            if (loksabhaid <= 0 && jilaid <= 0) {
              setstateid(0);
            }

            message.error(response.data.message);
            // alert("!Message : ", response.data.message);
            console.log("!Message : ", response.data.message);
          }
        } else {
          console.log("err");
        }
        // setPosts(postss);
      })
      .catch((err) => console.log(err));
  };

  const handlePageClick = (data) => {
    // console.log(data);
    console.log("onPageChange", data);
    let selected = data.selected;
    console.log(selected);
    let offset = setoffset(Math.ceil(selected * perPage));

    getCustomersData();
  };

  useEffect(() => {
    getCustomersData();
  }, [language, offset, stateid, jilaid, loksabhaid, vidhansabhaid, blockid]);

  const handlestateclick = (id) => {
    setstateid(id);
    setloksabhaid(0);
    setjilaid(0);
    setvidhansabhaid(0);
    setblockid(0);
    setboothid(0);
  };
  const handleloksabhaclick = (id) => {
    setloksabhaid(id);
    setjilaid(0);
    setvidhansabhaid(0);
    setblockid(0);
    setboothid(0);
  };
  const handlejilaclick = (id) => {
    setjilaid(id);
    setvidhansabhaid(0);
    setblockid(0);
    setboothid(0);
  };
  const handlevidhanasbhaclick = (id) => {
    setvidhansabhaid(id);
    setblockid(0);
    setboothid(0);
  };
  const handleblockclick = (id) => {
    setblockid(id);
    setboothid(0);
  };
  const handleboothclick = (id) => {
    setboothid(id);
  };
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
                          placeholder={t("common.search")}
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
                          {/*<th>ID</th>*/}
                          <th>{t("common.name")}</th>
                          <th>{t("common.father")}</th>
                          <th>{t("common.mobile")}</th>
                          <th>{t("common.gender")}</th>
                          <th>{t("common.role")}</th>
                          <th>{t("common.states")}</th>
                          {stateid != 0 ? (
                            <>
                              <th>{t("common.loksabha")}</th>
                              <th>{t("common.jila")}</th>
                            </>
                          ) : (
                            ""
                          )}
                          {loksabhaid != 0 ? (
                            <th>{t("common.vidhansabha")}</th>
                          ) : (
                            ""
                          )}
                          {jilaid != 0 ? (
                            <th>{t("common.vidhansabha")}</th>
                          ) : (
                            ""
                          )}
                          {vidhansabhaid != 0 ? (
                            <th>{t("common.block")}</th>
                          ) : (
                            ""
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((item) => {
                          return (
                            <tr key={item._id}>
                              {/*<td>
                                <Link to="/admin/userstable">{item._id}</Link>
                              </td>*/}
                              <td>{item.name}</td>
                              <td>{item.father_name}</td>
                              <td>{item.mobile}</td>
                              <td>{item.gender}</td>
                              <td>
                                {item.postData.map((items) => {
                                  return <span>{items.role}</span>;
                                })}
                              </td>
                              <td>
                                {item.stateData.map((items) => {
                                  return (
                                    <Link
                                      to=""
                                      onClick={() => {
                                        handlestateclick(items.id);
                                      }}
                                    >
                                      <span className="border border-2xl rounded p-1 m-1">
                                        {items.state}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </td>
                              {stateid != 0 ? (
                                <>
                                  <td>
                                    {item.loksabhaData.map((items) => {
                                      return (
                                        <Link
                                          to=""
                                          onClick={() => {
                                            handleloksabhaclick(items.id);
                                          }}
                                        >
                                          <span className="border border-2xl rounded p-1 m-1">
                                            {items.loksabha}
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </td>
                                  <td>
                                    {item.jilaData.map((items) => {
                                      return (
                                        <Link
                                          to=""
                                          onClick={() => {
                                            handlejilaclick(items.id);
                                          }}
                                        >
                                          <span className="border border-2xl rounded p-1 m-1">
                                            {items.jila}
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </td>
                                </>
                              ) : (
                                ""
                              )}
                              {loksabhaid != 0 ? (
                                <td>
                                  {item.vidhansabhaData.map((items) => {
                                    return (
                                      <Link
                                        to=""
                                        onClick={() => {
                                          handlevidhanasbhaclick(items.id);
                                        }}
                                      >
                                        <span className="border border-2xl rounded p-1 m-1">
                                          {items.vidhansabha}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </td>
                              ) : (
                                ""
                              )}
                              {jilaid != 0 ? (
                                <td>
                                  {item.vidhansabhaData.map((items) => {
                                    return (
                                      <Link
                                        to=""
                                        onClick={() => {
                                          handlevidhanasbhaclick(items.id);
                                        }}
                                      >
                                        <span className="border border-2xl rounded p-1 m-1">
                                          {items.vidhansabha}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </td>
                              ) : (
                                ""
                              )}
                              {vidhansabhaid != 0 ? (
                                <td>
                                  {item.blockData.map((items) => {
                                    return (
                                      <Link
                                        to=""
                                        onClick={() => {
                                          handleblockclick(items.id);
                                        }}
                                      >
                                        <span className="border border-2xl rounded p-1 m-1">
                                          {items.block}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </td>
                              ) : (
                                ""
                              )}
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

export default Users;
// <Link
// to={{
//   pathname: `/admin/lowerwarroomusers/${items.id}`,
// }}
// >
// <span className="border border-2xl rounded p-1 m-1">
//   {items.state}
// </span>
// </Link>

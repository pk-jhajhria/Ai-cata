import React from "react";
import watch_ from "../assets/img/png/Watch (1).png";
import Greenlines from "../assets/img/png/GreenLines (1).png";
import Usericon from "../assets/img/png/Usericon (1).png";
import threelines from "../assets/img/png/threelines.png";
import Line1 from "../assets/img/png/Line_1 (1).png";
import Line2 from "../assets/img/png/line_2 (1).png";
import Line3 from "../assets/img/png/Line_3 (1).png";
import DropeArow from "../assets/img/png/DownArrow (1).png";
import BlackNextarrow from "../assets/img/png/NextArrowblack.png";
import right_arrow from "../assets/img/png/right_arrow.png";
import hero_bg from "../assets/img/png/hero_bg.png";

function Header() {
  return (
    <>
      <section className="position-relative overflow-hidden py-sm-5">
        <img
          className=" position-absolute start-0 z_index_1 d-none d-md-block"
          src={hero_bg}
          alt="hero_bg"
        />
        <div className=" container z_index_3 position-relative">
          <div className="row justify-content-between mt-5">
            <div className="col-lg-5">
              <div>
                <div className="d-flex justify-content-end">
                  <div className="boxAnimation1">
                    <img
                      style={{ maxWidth: "163px", minHeight: "105px" }}
                      src={Greenlines}
                      alt=""
                    />
                  </div>
                  <div
                    style={{ width: "130px", borderRadius: "6px" }}
                    className="bg-white p-2 boxAnimation2 "
                  >
                    <div className="d-flex justify-content-end gap-1 align-items-center mb-2">
                      <img style={{ width: "15px" }} src={watch_} alt="" />
                      <h4 className="fs_md fw-normal ff_Seoge text_Black mb-0 ">
                        2 days ago
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between w-100">
                      <h3 className=" fs_md fw-normal ff_Seoge text_black">
                        Mihail Lacusta
                      </h3>
                    </div>
                    <h3 className="fs_md fw-normal ff_Seoge  text_green py-1 mb-0">
                      $1,293,200
                    </h3>
                    <h5 className="fs_sm fw-normal ff_Seoge text_lightBlack py-1 mb-0">
                      Business Sale
                    </h5>
                    <div className="d-flex gap-3 align-items-center mt-4">
                      <div
                        style={{
                          height: "14px",
                          width: "14px",
                          border: "1px solid #808080",
                        }}
                        className="rounded-1"
                      ></div>
                      <h3 className="fs_sm fw-normal ff_Seoge text_black mb-0 ">
                        Contacted
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <div
                    className="boxAnimation3 bg-white px-2 py-2 d-flex flex-column justify-content-between d-none d-md-flex"
                    style={{ maxWidth: "160px", borderRadius: "8px" }}
                  >
                    <div className="d-flex justify-content-between w-100">
                      <h3 className=" fs_lg fw-semibold ff_Seoge text_black">
                        Jordan Wentworth
                      </h3>
                      <div>
                        <h4
                          className="fs_md fw-semibold ff_Seoge p-1 d-inline-block rounded-1"
                          style={{ background: "#D4EAF2" }}
                        >
                          New
                        </h4>
                      </div>
                    </div>
                    <h3 className="fs_lg fw-semibold ff_Seoge  text_green py-1 mb-0">
                      $1,293,200
                    </h3>
                    <p
                      className="fs_md fw-normal ff_Seoge text_lightBlack "
                      style={{ maxWidth: "60px" }}
                    >
                      Boston, MA Inheritance
                    </p>
                    <div className="d-flex gap-3 align-items-center">
                      <div
                        style={{
                          height: "18px",
                          width: "18px",
                          border: "2px solid #808080",
                        }}
                        className="rounded-1"
                      ></div>
                      <h3 className="fs_md fw-semibold ff_Seoge text_black mb-0 ">
                        Contacted
                      </h3>
                    </div>
                  </div>
                  <div
                    className="bg-white p-3 boxAnimation4"
                    style={{ width: "228px", borderRadius: "8px" }}
                  >
                    <div
                      className="d-flex justify-content-between align-items-center pb-2 mb-2"
                      style={{ borderBottom: "1px solid #CCCCCC" }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <img style={{ width: "30px" }} src={Usericon} alt="" />
                        <div>
                          <h3 className=" ff_Seoge fs_md fw-semibold text_black mb-0">
                            Ciera Thomas
                          </h3>
                          <h6 className=" text_grey  ff_Seoge fs_sm fw-semibold text_black">
                            Edit
                          </h6>
                        </div>
                      </div>
                      <img style={{ height: "16px" }} src={threelines} alt="" />
                    </div>
                    <div className="d-flex gap-3 flex-column">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">1.</span>{" "}
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={Line1}
                          alt=""
                        />
                        <img style={{ width: "10px" }} src={DropeArow} alt="" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">2.</span>{" "}
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={Line2}
                          alt=""
                        />
                        <img style={{ width: "10px" }} src={DropeArow} alt="" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">3.</span>{" "}
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={Line3}
                          alt=""
                        />
                        <img style={{ width: "10px" }} src={DropeArow} alt="" />
                      </div>
                    </div>
                    <div
                      className="boxAnimation5 p-2 position-absolute rounded-2"
                      style={{ maxWidth: "100px" }}
                    >
                      {" "}
                      <h3 className=" fs_sm fw-normal ff_Seoge text-black">
                        5500 72nd Ave N
                      </h3>
                      <h4 className=" fs_sm fw-normal ff_Seoge text_green">
                        $150,000
                      </h4>
                      <p className=" fs_xsm fw-normal ff_Seoge text_lightBlack opacity-75 mb-0">
                        Pinellas Park, FL inheritance
                      </p>
                      <div className="d-flex justify-content-center">
                        <a href="">
                          <img
                            style={{ width: "10px" }}
                            src={BlackNextarrow}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className=" ff_Seoge fs_5xl fw-semibold text_black mt-4">
                Grow your business with Event-Driven Predictive Analytics
              </h2>
              <p
                className=" ff_Seoge fs_xl fw-notrmal text_black"
                style={{ color: "#4C4C4C" }}
              >
                It is a long established fact that a reader will be distracted
                by the using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it the look at you.
              </p>
            </div>
          </div>
          <div className="row justify-content-between align-items-center mt-sm-5 py-sm-5">
            <div className="col-md-5">
              <div className="row mt-sm-5 mt-3">
                <div className="col-sm-4">
                  <div className="text-center">
                    <h2 className=" fw-semibold fs_2xl text-black mb-0">
                      400mm+
                    </h2>
                    <p className=" fw-normal fs_xl text_darkgrey mt-4">
                      Data point used for analytics
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="text-center">
                    <h2 className=" fw-semibold fs_2xl text-black mb-0">
                      $3Tn
                    </h2>
                    <p className=" fw-normal fs_xl text_darkgrey mt-4">
                      Investable assets predicted per year
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="text-center">
                    <h2 className=" fw-semibold fs_2xl text-black mb-0">
                      $77Bn
                    </h2>
                    <p className=" fw-normal fs_xl text_darkgrey mt-4">
                      Predicted home value transacted per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-md-flex h-100">
                <div className="hover_box_services bg_green px-5 py-4 rounded-2 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <p className=" fw-semibold fs_xl text_white mb-0 d-inline-block">
                      boost your
                    </p>
                    <h2 className=" fw-semibold fs_2xl text-white mb-0 mt-1">
                      Financial <br /> Services
                    </h2>
                  </div>
                  <div className="d-flex mt-4 pt-1 justify-content-between align-items-center">
                    <a className=" fw-semibold fs_xl text-white" href="#">
                      Learn more
                    </a>
                    <img
                      className=" ps-5"
                      src={right_arrow}
                      alt="right_arrow"
                    />
                  </div>
                </div>
                <div className="hover_box_real bg_Blue px-5 py-4 rounded-2 ms-md-2 mt-3 mt-md-0 d-flex flex-column justify-content-between">
                  <div>
                    <p className=" fw-semibold fs_xl text_grey mb-0">
                      boost your
                    </p>
                    <h2 className=" fw-semibold fs_2xl text-white mb-0 mt-1">
                      Real Estate
                    </h2>
                  </div>
                  <div className="d-flex mt-4 pt-1 justify-content-between align-items-center">
                    <a className=" fw-semibold fs_xl text-white" href="#">
                      Learn more
                    </a>
                    <img
                      className=" ps-5"
                      src={right_arrow}
                      alt="right_arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdLocalAirport } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import axiosClient from "../axios/axiosClient";
import Subtitle from "../components/Subtitle/Subtitle";
import { Button, Col, Form, Input, Pagination, Row, Space } from "antd";
import TourCard from "../components/TourCard/TourCard";

const Tours = () => {
   const [tours, setTours] = useState([]);

   useEffect(() => {
      (async function () {
         const response = await axiosClient.get("/tours");
         console.log(response.data.data);
         setTours(response.data.data);
      })();
   }, []);

   return (
      <>
         {/* ---- banner ----  */}
         <section className="banner-section">
            <h2 className="banner-title">All Tours</h2>
         </section>

         {/* ---- search bar ----  */}
         <section>
            <div className="container">
               <div className="search-bar">
                  <form className="search-bar-form">
                     <div className="form-group">
                        <span>
                           <HiOutlineLocationMarker className="form-icon" />
                        </span>
                        <div className="form-input">
                           <h4>Location</h4>
                           <input type="text" placeholder="Where are you going?" />
                        </div>
                     </div>
                     <div className="form-group">
                        <span>
                           <MdLocalAirport className="form-icon" />
                        </span>
                        <div className="form-input">
                           <h4>Distance</h4>
                           <input type="number" placeholder="Distance k/m" />
                        </div>
                     </div>
                     <div className="form-group">
                        <span>
                           <AiOutlineUsergroupAdd className="form-icon" />
                        </span>
                        <div className="form-input">
                           <h4>Max people</h4>
                           <input type="number" placeholder="0" />
                        </div>
                     </div>

                     <button type="submit" className="btn-search-submit">
                        <BsSearch />
                     </button>
                  </form>
               </div>
            </div>
         </section>

         {/* ---- Tours ---- */}
         <section className="tours-section" style={{ paddingTop: 0 }}>
            <div className="container">
               <Row gutter={[24, 24]}>
                  {tours.length > 0 ? (
                     tours.map((tour) => (
                        <Col span={6} key={tour._id}>
                           <TourCard tourData={tour} />
                        </Col>
                     ))
                  ) : (
                     <h2>Error</h2>
                  )}
               </Row>
               <Pagination
                  className="pagination-tour"
                  total={15}
                  defaultCurrent={1}
                  defaultPageSize={8}
                  // onChange={handlePaginationChange}
               />
            </div>
         </section>

         {/* ---- News lLetter ---- */}
         <section className="newsletter-section">
            <div className="container">
               <Row gutter={24}>
                  <Col span={12}>
                     <h2 className="experience-title" style={{ marginTop: 0 }}>
                        Subcribe DUONG now to get <br /> useful traveling information
                     </h2>
                     <Form className="subscribe-form" layout="inline">
                        <Form.Item className="subscribe-form-input">
                           <Input placeholder="Enter your email" />
                        </Form.Item>
                        <Form.Item className="subscribe-form-button">
                           <Button type="primary" htmlType="submit">
                              Submit
                           </Button>
                        </Form.Item>
                     </Form>
                     <p style={{ fontSize: "16px", lineHeight: 1.5, fontWeight: 400 }}>
                        WE SO <br /> CHIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
                     </p>
                  </Col>
                  <Col span={12}>
                     <div className="newsletter-image">
                        <img src="images/male-tourist.png" alt="" />
                     </div>
                  </Col>
               </Row>
            </div>
         </section>
      </>
   );
};

export default Tours;

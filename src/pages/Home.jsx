import React, { useEffect, useState } from "react";
import { Col, Row, Form, Input, Button } from "antd";

import axiosClient from "../axios/axiosClient";
import Subtitle from "../components/Subtitle/Subtitle";
import TourCard from "../components/TourCard/TourCard";
import Carousel from "../components/Slick/Carousel";

import { BsSearch } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdLocalAirport } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Home = () => {
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
         {/* ---- Hero ---- */}
         <section className="hero-section">
            <div className="container">
               <Row gutter={24}>
                  <Col span={12} className="hero-content">
                     <div className="hero-subtitle">
                        <Subtitle>Know Before You Go</Subtitle>
                        <img src="/images/world.png" alt="" />
                     </div>
                     <h1>
                        Traveling opens the door to creating <span>memories with duong</span>
                     </h1>
                     <p>
                        Our Vietnam is a beautiful country. We have a variety of landscapes which
                        are widely well-known such as Ha Long Bay, Hoi An Old quarter and Phong Nha
                        Ke Bang cave. A long coast with many attractive beaches is also our
                        recognized reputation. Although Vietnam was a rich traditional culture
                        country, it has undergone a great change since 1945 due to the war. But you
                        can still find spiritual values in traditional arts performances such as
                        singing Tru, Cheo, Tuong, water puppet, ancient artifacts at the museums at
                        the cultural centers in Hanoi and Saigon.
                     </p>
                  </Col>
                  <Col span={4}>
                     <div className="hero-image" style={{ marginTop: 16 }}>
                        <img src="/images/hero-img01.jpg" alt="" />
                     </div>
                  </Col>
                  <Col span={4}>
                     <div className="hero-image" style={{ marginTop: 56 }}>
                        <video src="/images/hero-video.mp4" alt="" controls />
                     </div>
                  </Col>
                  <Col span={4}>
                     <div className="hero-image" style={{ marginTop: 80 }}>
                        <img src="/images/hero-img01.jpg" alt="" />
                     </div>
                  </Col>
               </Row>
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

         {/* ---- Service ---- */}
         <section className="service-section">
            <div className="container">
               <Row gutter={24}>
                  <Col span={6}>
                     <h5 className="service-subtitle">What we serve</h5>
                     <h2 className="service-title">We offer our best services</h2>
                  </Col>

                  <Col span={6}>
                     <div className="service-card">
                        <div className="service-image">
                           <img src="images/service-item-1.png" alt="" />
                        </div>
                        <h4>Calculate Weather</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                     </div>
                  </Col>

                  <Col span={6}>
                     <div className="service-card">
                        <div className="service-image">
                           <img src="images/service-item-1.png" alt="" />
                        </div>
                        <h4>Calculate Weather</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                     </div>
                  </Col>

                  <Col span={6}>
                     <div className="service-card">
                        <div className="service-image">
                           <img src="images/service-item-1.png" alt="" />
                        </div>
                        <h4>Calculate Weather</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                     </div>
                  </Col>
               </Row>
            </div>
         </section>

         {/* ---- Tours ---- */}
         <section className="tours-section">
            <div className="container">
               <div className="tours-header">
                  <Subtitle>Explore</Subtitle>
                  <h2 className="tours-title">Our featured tours</h2>
               </div>

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
            </div>
         </section>

         {/* ---- Experience ---- */}
         <section className="experience-section">
            <div className="container">
               <Row gutter={24}>
                  <Col span={12}>
                     <div className="experience-content">
                        <Subtitle>Experience</Subtitle>
                        <h2 className="experience-title">
                           With Duong our all experience <br /> we will serve you
                        </h2>
                        <p>
                           Duong ipsum dolor sit consectetur. <br /> tempppppppppppppppppppppppppp
                        </p>
                     </div>
                     <div className="experience-counter">
                        <div className="experience-counter-item">
                           <span>12k+</span>
                           <h4>Successful trip</h4>
                        </div>
                        <div className="experience-counter-item">
                           <span>2k+</span>
                           <h4>Regular clients</h4>
                        </div>
                        <div className="experience-counter-item">
                           <span>15</span>
                           <h4>Year experience</h4>
                        </div>
                     </div>
                  </Col>
                  <Col span={12}>
                     <div className="experience-img">
                        <img src="images/experience.png" alt="" />
                     </div>
                  </Col>
               </Row>
            </div>
         </section>

         {/* ---- Gallery ---- */}
         <section className="gallery-section">
            <div className="container">
               <div className="section-header gallery-header">
                  <Subtitle>Gallery</Subtitle>
                  <h2>Visit our customers tour gallery</h2>
               </div>
               <Row gutter={16}>
                  <Col span={6}>
                     <Row gutter={[16, 16]}>
                        <Col span={24}>
                           <div className="gallery-item">
                              <img src="images/gallery-01.jpg" alt="" />
                           </div>
                        </Col>
                        <Col span={24}>
                           <div className="gallery-item">
                              <img src="images/gallery-05.jpg" alt="" />
                           </div>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={6}>
                     <Row gutter={[16, 16]}>
                        <Col span={24}>
                           <div className="gallery-item">
                              <img src="images/gallery-02.jpg" alt="" />
                           </div>
                        </Col>
                        <Col span={24}>
                           <div className="gallery-item">
                              <img src="images/gallery-06.jpg" alt="" />
                           </div>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={6}>
                     <Row gutter={[16, 16]}>
                        <Col span={24}>
                           <div className="gallery-item">
                              <img src="images/gallery-03.jpg" alt="" />
                           </div>
                        </Col>
                        <Col span={24}>
                           <div className="gallery-item">
                              <img src="images/gallery-07.jpg" alt="" />
                           </div>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={6}>
                     <Row gutter={[16, 16]}>
                        <Col span={24}>
                           <div className="gallery-item">
                              <img src="images/gallery-04.jpg" alt="" />
                           </div>
                        </Col>
                        <Col span={24}>
                           <div className="gallery-item">
                              <img src="images/gallery-02.jpg" alt="" />
                           </div>
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </div>
         </section>

         {/* ---- FanLove ---- */}
         <section>
            <div className="container">
               <div className="section-header">
                  <Subtitle>Fans Love</Subtitle>
                  <h2>What our fans say about us</h2>
               </div>
               <Carousel />
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

export default Home;

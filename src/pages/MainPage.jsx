import React from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";

import icon1 from "../assets/icons/Group 174.svg";
import icon2 from "../assets/icons/funds.svg";
import icon3 from "../assets/icons/Path 188.svg";
import icon4 from "../assets/icons/history.svg";
import icon5 from "../assets/icons/verification-window-button.svg";
import icon6 from "../assets/icons/locked-padlock (1).svg";
import { DogNutOptions, DogNutSeries } from "../helper/dognut";
import { FirstSeries, FirstOptions } from "../helper/area";
import { SecondSeries, SecondOptions } from "../helper/area2";

import ReactApexChart from "react-apexcharts";
const MainPage = () => {
  return (
    <div className="MainPage">
      <header className="mainheader">
        <div className="content_area common_width">
          <img src={logo} alt="" className="logo" />

          <nav>
            <span></span>
            <li>
              <a href="#">account</a>
            </li>
            <li>
              <a href="#">charts</a>
            </li>
            <li>
              <a href="#">help</a>
            </li>

            <li className="avatar_wrapper">
              <img src={avatar} alt="" />
              <p>Soheil Sammimi</p>
            </li>

            <li className="date_wrapper">
              <p className="date">17-02-2022</p>
              <p className="time">2:45 PM</p>
            </li>
          </nav>
        </div>
      </header>
      <header className="subheader">
        <div className="boxes common_width">
          <div className="box">
            <h1>Overview</h1>
          </div>
          <div className="box">
            <h1>Total signups</h1>
            <p>648</p>
          </div>
          <div className="box">
            <h1>Last Week</h1>
            <p>12</p>
          </div>
          <div className="box">
            <h1>Total Investments</h1>
            <p>102</p>
          </div>
          <div className="box">
            <h1>Average Investment</h1>
            <p>
              <span>NOK</span> 345,565
            </p>
          </div>
          <div className="box">
            <h1>Total exits</h1>
            <p>23</p>
          </div>
        </div>
      </header>

      <div className="body_area common_width">
        <div className="sidebar_area">
          <div className="image_wrapper active">
            <img src={icon1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={icon2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={icon3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={icon4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={icon5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={icon6} alt="" />
          </div>
        </div>

        <div className="content_area_body">
          <nav>
            <li>
              <a href="#" className="active">
                Signups
              </a>
            </li>
            <li>
              <a href="#">Investments</a>
            </li>
            <li>
              <a href="#">Revenue</a>
            </li>
            <li>
              <a href="#">Exits</a>
            </li>
            <li>
              <a href="#">Trades</a>
            </li>
          </nav>

          <div className="bottom_area">
            <div className="left_area">
              <div className="chart_wrapper">
                <h1>Individual</h1>
                <div className="chart_roudner">
                  <ReactApexChart
                    options={FirstOptions}
                    series={FirstSeries}
                    type="area"
                    height={250}
                  />
                </div>
              </div>

              <div className="chart_wrapper">
                <h1>Companies</h1>
                <div className="chart_roudner second_chart">
                  <ReactApexChart
                    options={SecondOptions}
                    series={SecondSeries}
                    type="area"
                    height={250}
                  />
                </div>
              </div>
            </div>
            <div className="right_area">
              <div className="pie_chart_container">
                <div className="left_side">
                  <ReactApexChart
                    options={DogNutOptions}
                    series={DogNutSeries}
                    type="donut"
                    height={220}
                  />
                </div>
                <div className="right_side">
                  <h1>Total Signups</h1>
                  <ul>
                    <li>
                      <p>Inviduals</p>
                      <p>284</p>
                    </li>
                    <li>
                      <p>Companies</p>
                      <p>364</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row_gender_division">
                <p className="by_gender">By Gender</p>
                <p className="gender">Male</p>
                <p className="gender">Female</p>
                <p className="value">102</p>
              </div>
              <div className="last_signs">
                <div className="top_area_wrapper">
                  <div className="top_area">
                    <h1>Latest Signups</h1>
                    <div className="heading_area">
                      <h1>Name</h1>
                      <h1>Scheduled Meeting</h1>
                    </div>
                  </div>
                </div>

                <div className="rows_wrapper">
                  <div className="row">
                    <p>David Hansen</p>
                    <p>02-03-2020 - 2PM</p>
                  </div>
                  <div className="row">
                    <p>Shopify</p>
                    <p>05-03-2020 - 10:30AM</p>
                  </div>
                  <div className="row">
                    <p>Arvid, Realtree AB</p>
                    <p>05-03-2020 - 3PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;

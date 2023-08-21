import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import PieChartContainer from "../PieChartContainer";
import { ListItem, PieChartContainerStyle } from "./styledComponents";
import UserContext from "../../context/UserContext";
import ClientReports from "../ClientReports";
import BarChartReports from "../BarChartReports";

import "./index.css";

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  const [submits, setSubmits] = useState(0);
  const [success, setSuccess] = useState(0);
  const [failure, setFailure] = useState(0);

  const pending = submits - success - failure;
  const successPercentage = `(${((success / submits) * 100).toFixed(2)}%)`;
  const failurePercentage = `(${((failure / submits) * 100).toFixed(2)}%)`;
  const pendingPercentage = `(${((pending / submits) * 100).toFixed(2)}%)`;
  const getSubmits = async () => {
    try {
      const url = "http://localhost:4000/submits";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setSubmits(data.submits);
      } else {
        console.log("fetch error");
        setSubmits(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getSuccess = async () => {
    try {
      const url = "http://localhost:4000/success";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setSuccess(data.success);
      } else {
        console.log("fetch error");
        setSuccess(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getFailure = async () => {
    try {
      const url = "http://localhost:4000/failure";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setFailure(data.failure);
      } else {
        console.log("fetch error");
        setFailure(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSubmits();
    getSuccess();
    getFailure();
  }, []);

  //fetching submits

  const navigate = useNavigate();
  if (jwtToken === undefined) {
    return navigate("/login", { replace: true });
  }
  return (
    <UserContext.Consumer>
      {(value) => {
        const { isDark } = value;
        return (
          <div className="home-container ">
            <ul className="list-container">
              <ListItem isdarktheme={isDark} hover>
                <img
                  src="http://smsc2.tesync.net//assets/images/sum.png"
                  alt="submit"
                  width={50}
                />
                <h5>Submits</h5>
                <h2>{submits}</h2>
              </ListItem>
              <ListItem isdarktheme={isDark} hover="true">
                <img
                  src="http://smsc2.tesync.net//assets/images/success_new.png"
                  alt="success"
                />
                <h5>Success</h5>
                <h2>{success}</h2>
                <h6>{successPercentage}</h6>
              </ListItem>
              <ListItem isdarktheme={isDark} hover="true">
                <img
                  src="http://smsc2.tesync.net//assets/images/failed_new.png"
                  alt="failure"
                />
                <h5>Failure</h5>
                <h2>{failure}</h2>
                <h6>{failurePercentage}</h6>
              </ListItem>
              <ListItem isdarktheme={isDark} hover="true">
                <img
                  src="http://smsc2.tesync.net//assets/images/pending.gif"
                  alt="failure"
                />
                <h5>Pending</h5>
                <h2>{pending}</h2>
                <h6>{pendingPercentage}</h6>
              </ListItem>
            </ul>
            <div className="bottom-part">
              <ul className="bottom-list-container">
                <ListItem isdarktheme={isDark} hover="true">
                  <AiOutlineMail className="sms-logo" />
                </ListItem>
                <ListItem isdarktheme={isDark} hover="true">
                  <AiOutlineMail className="sms-logo" />
                </ListItem>
                <ListItem isdarktheme={isDark} hover="true">
                  <AiOutlineMail className="sms-logo" />
                </ListItem>
                <ListItem isdarktheme={isDark} hover="true">
                  <AiOutlineMail className="sms-logo" />
                </ListItem>
                <ListItem isdarktheme={isDark} hover="true">
                  <AiOutlineMail className="sms-logo" />
                </ListItem>
                <ListItem isdarktheme={isDark} hover="true">
                  <AiOutlineMail className="sms-logo" />
                </ListItem>
              </ul>
              <PieChartContainerStyle isdarktheme={isDark} hover="true">
                <PieChartContainer
                  submits={submits}
                  success={success}
                  failure={failure}
                  pending={pending}
                />
              </PieChartContainerStyle>
            </div>
            <ClientReports />
            <BarChartReports />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Home;

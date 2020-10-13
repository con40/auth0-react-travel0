import React from "react";
import { Container, Row, Col } from "reactstrap";
import ReactCountryFlag from "react-country-flag";
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();

//const { getCode, getName } = require ('country-list');

  /*
////////////////// Get mgmt api token*
  var request = require("request");
  var JWTresponse;
  var options;

  var country = user[0];

  options = { method: 'POST',
  url: 'https://con40-travel0.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"*****","client_secret":"***"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  JWTresponse = body;

  console.log(body);
  }); 
  */
/*
  options = { method: 'GET',
  url: 'http://path_to_your_api/',
  headers: { authorization: 'Bearer ****' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


*/////////////////////
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
          <p className="lead text-muted">{user["https://example.com/country_code"]}
          &nbsp;
           {<ReactCountryFlag countryCode={user["https://example.com/country_code"]} svg />}
          </p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>

    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});

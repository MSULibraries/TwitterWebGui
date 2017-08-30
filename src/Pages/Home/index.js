import React, { Component } from "react";
import Twitter from "twitter";

class Home extends Component {
  componentDidMount() {
    //fetch("https://api.twitter.com");
    var client = new Twitter({
      consumer_key: "wWzomuV5SP7SHbLq48bZSQjXE",
      consumer_secret: "i3AFMjZ1fRU4gG92jKT4iLZQ5rES9cvPZx3EKnUccF309fdCJ8",
      access_token_key: "804707166-lbjwrHNHhqkH67XSh9HcyrcIC53riQHz015L9x7I",
      access_token_secret: "0DftjYCusHrdLDU4CRUvYte1QPCuZGj1fCpRXsvgKsBM4"
    });

    var params = { screen_name: "nodejs" };
    client.get("statuses/user_timeline", params, function(
      error,
      tweets,
      response
    ) {
      if (!error) {
        console.log(tweets);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

/* import "./Social.css"; */

import twitterIcon2 from "../../assets/images/twitterIcon2.png";
import twitterIcon from "../../assets/images/twitterIcon.png";
import playIcon from "../../assets/images/playIcon.png";
import lifeatvideo1 from "../../assets/images/lifeatvideo1.jpg";

export default class Social extends Component {
  constructor() {
    super();
    this.state = {
      social_data: [
        {
          id: 1,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        },
        {
          id: 2,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        },
        {
          id: 3,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        },
        {
          id: 4,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        },
        {
          id: 5,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        },
        {
          id: 6,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        },
        {
          id: 7,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        },
        {
          id: 8,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        },
        {
          id: 9,
          img_src: twitterIcon2,
          tweet_name: "@ANAROCKProperty",
          tweet_time: "55 minutes ago",
          tweet: `"Just like mutual funds, REITs are investment vehicles that own, operate and manage a portfolio of income-generating properties for regular returns," says Shobhit Agarwal, MD &amp; CEO, ANAROCK Capital.`
        }
      ]
    };
  }

  render() {
    const social_data = this.state.social_data;
    return (
      <section className="wrapper socialFeed_LifeAt marginTopBottom80">
        <div className="socialFeeds">
          <h2 className="h2 side-bar">Social feeds</h2>
          <div className="wrapper twitterIcon_FollowBtn">
            <span className="iconTwit">
              <img src={twitterIcon} alt="" />
            </span>
            <a href="javascript:void(0)" className="followBtn">
              Follow
            </a>
          </div>

          <Scrollbars style={{ height: 320 }} className="tweetBox">
            <div className="wrapper twitData">
              {social_data.map(sd => {
                return (
                  <div className="wrapper colWrap" key={sd.id}>
                    <span className="imgWrap">
                      <img src={sd.img_src} alt="" />
                    </span>
                    <p>
                      <strong className="twitName">{sd.tweet_name}</strong>
                      <span className="twitTime">{sd.tweet_time}</span>
                      <abbr>{sd.tweet}</abbr>
                    </p>
                  </div>
                );
              })}
            </div>
          </Scrollbars>
        </div>
        <div className="lifeAt">
          <h2 className="h2 side-bar">Life at anarock</h2>
          <div className="video_Main">
            <img src={lifeatvideo1} alt="" className="videoBg" />
            <a
              href="javascript:void(0)"
              className="playIcon"
              onClick={this.playVideo.bind(this, "vG-3fpLqFaw")}
            >
              <img src={playIcon} alt="" />
            </a>
            <a href="javascript:void(0)" className="knowmore_Btn" tabIndex="0">
              <span>View</span>
              <span>All</span>
              <span>
                <abbr className="plusWrap" />
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
  playVideo = hrefval => {
    document.querySelector(".videoPopupWrapper").classList.add("active");
    var videoUrl = hrefval;
    const aaa = `https://www.youtube.com/embed/${videoUrl}?autoplay=1&rel=0`;
    document.getElementById("anarock_video").setAttribute("src", aaa);
  };
}

import { useState } from "react";
import Link from "next/link";
import styleCookie from "../styles/CookieBanner.module.scss";
import YouTube from "react-youtube";

export default function CookieBanner() {
  /* function onPlayerReady(event) {
    document.querySelector("#player").style.display = "block";
    event.target.playVideo();
  }
  function play() {
    eval("https://www.youtube.com/iframe_api");
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("player", {
        videoId: "dQw4w9WgXcQ",
        playerVars: {
          playsinline: 1,
          controls: 0,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    }
  } */
  /* let toPlay = false;
  document
    .querySelector(".cookie-banner-overlay")
    .addEventListener("click", () => {
      toPlay = true;
    });

  function onPlayerReady(event) {
    if (toPlay) {
      play(event);
    }
    document
      .querySelector(".cookie-banner-overlay")
      .addEventListener("click", () => {
        play(event);
      });
  } */

  /* function play(event) {
    document.querySelector("#player").style.display = "block";
    event.target.playVideo();
  }
 */
  const [shouldPlay, playVid] = useState(false);
  const [visibility, setVisibility] = useState(true);
  return (
    <div
      className={`${styleCookie.container} ${
        visibility ? "" : styleCookie.hidden
      }`}
    >
      <div className={styleCookie.text}>
        Can i get your{" "}
        <Link target="_blank" href="/cookies">
          <a className={styleCookie.link}>cookies</a>
        </Link>
        ?
      </div>
      <button
        type="button"
        className={styleCookie.buttonNo}
        onClick={() => {
          alert(":(");
          setVisibility(false);
        }}
      >
        No
      </button>
      <button
        type="button"
        className={styleCookie.buttonYes}
        onClick={() => {
          playVid(true);
        }}
      >
        Yes
      </button>
      {shouldPlay && (
        <YouTube
          videoId="dQw4w9WgXcQ" // defaults -> ''
          className={CookieBanner.youtube} // defaults -> ''
          opts={{
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }}
          onReady={(event) => {
            //event.target.playVideo();
          }} // defaults -> noop
          onPlay={() => {
            document.querySelector("html").style.overflow = "hidden";
          }}
        />
      )}
    </div>
  );
}

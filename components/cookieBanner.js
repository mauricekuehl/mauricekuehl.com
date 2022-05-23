import { useState } from "react";
import Link from "next/link";
import YouTube from "react-youtube";
import styleCookie from "../styles/CookieBanner.module.scss";

export default function CookieBanner() {
  const [shouldPlay, playVid] = useState(false);
  const [visibility, setVisibility] = useState(true);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!shouldPlay ? (
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
          <div className={styleCookie.buttonWrapper}>
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
          </div>
        </div>
      ) : (
        <YouTube
          videoId="dQw4w9WgXcQ"
          className={styleCookie.youtube}
          opts={{
            playerVars: {
              autoplay: 1,
              controls: 0,
              playsinline: 1,
              loop: 1,
              playlist: "dQw4w9WgXcQ",
            },
          }}
          onReady={(event) => {
            document.querySelector("html").style.overflow = "hidden";
            event.target.setVolume(100);
            event.target.playVideo();
          }}
        />
      )}
    </>
  );
}

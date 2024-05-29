import classes from "./AllMenu.module.css";
import { Gaming } from "../../svg";
import { create } from "../../data/allMenu";
import "../../styles/icons/icons.css";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export default function AllMenu() {
  return (
    <div className={classes.allMenu_wrapper}>
      <div className={`${classes.allMenu_container} ${classes.search_scroll}`}>
        <h2>Menu</h2>
        <div className={classes.allMenu_wrap}>
          <div
            className={`${classes.allMenu_units_divider} ${classes.allMenu_units_divider_left}`}
          >
            <div className={classes.allMenu_units_block}>
              <h3>Entertainment</h3>
              <ul>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468053/icons/wr2rickk0k59z1nikcuc.png"
                    alt="Gaming"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Gaming Video</h5>
                    <p>
                      Watch and connect with your favorite games and streamers.
                    </p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468055/icons/k3pou2etxcepardho8yj.png"
                    alt="Play games"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Play Games</h5>
                    <p>Play your favorite games.</p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468055/icons/kgzbyavl8vmm8blna6ew.png"
                    alt="watch"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Watch</h5>
                    <p>
                      A video destination personalized to your interests and
                      connections.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classes.allMenu_units_block}>
              <h3>Shopping</h3>
              <ul>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468055/icons/wgdngijwglu58wmx02zw.png"
                    alt="Facebook pay"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Facebook Pay</h5>
                    <p>
                      A seamless, secure way to pay on the apps you already use.
                    </p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468054/icons/ywy6tzrppxzb2clwb5pe.png"
                    alt="Marketplace"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Marketplace</h5>
                    <p>Buy and sell in your community</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classes.allMenu_units_block}>
              <h3></h3>
              <ul>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468055/icons/tkzgaf8bzr44dpu0er0i.png"
                    alt="Recent Ad Activity"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Recent Ad Activity</h5>
                    <p>See all the ads you interacted with on Facebook.</p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468054/icons/eegtt02mp4xozuwlc9dw.png"
                    alt="Memories"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Memories</h5>
                    <p>Browse your old photos, videos and posts on Facebook.</p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468055/icons/biwbop39k4sbiut8mtto.png"
                    alt="Saved"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Saved</h5>
                    <p>
                      Find posts, photos and videos that you saved for later.
                    </p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468055/icons/zubdytmay66e40qzgkfa.png"
                    alt="Weather"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Weather</h5>
                    <p>
                      Check your local forecast and sign up for daily weather
                      notifications.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classes.allMenu_units_block}>
              <h3>Professional</h3>
              <ul>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468051/icons/frprcvniovtefmhuqrrz.png"
                    alt="Ads"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Ads</h5>
                    <p>Create, manage and track the performance of your ads.</p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468053/icons/vljnyiw7di5vh8wcrpo9.png"
                    alt="Jobs"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5></h5>
                    <p></p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classes.allMenu_units_block}>
              <h3>Community Resources</h3>
              <ul>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468051/icons/qldmzg68y69plaqctegi.png"
                    alt="climate science center"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Climate science center</h5>
                    <p>Learn about climate change and its effects.</p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468051/icons/mpqyytbl6tm6zw6slsqk.png"
                    alt="COVID-19 Information Center"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>COVID-19 Information Center</h5>
                    <p>
                      See the latest information about COVID-19, including
                      resources and updates from health organizations
                    </p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468051/icons/a95eqhjzvtzaemgrugax.png"
                    alt="Community Help"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Community Help</h5>
                    <p>
                      Get involved in your community by creating a drive,
                      requesting or offering help or volunteering.
                    </p>
                  </div>
                </li>
                <li className={classes.allMenu_unit_item}>
                  <img
                    src="https://res.cloudinary.com/dtduj3zbo/image/upload/v1716468053/icons/fkxyzddviioeqqm8e496.png"
                    alt="Fundraisers"
                  />
                  <div className={classes.allMenu_unit_item_desc}>
                    <h5>Fundraisers</h5>
                    <p>
                      Donate and raise money for nonprofits and personal causes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${classes.allMenu_units_divider} ${classes.allMenu_units_divider_right}`}
          >
            <h3>Create</h3>
            <ul>
              {create.map((item) => {
                return (
                  <li className={classes.allMenu_unit_item} key={item.id}>
                    <i className={item.icon} />
                    <div className={classes.allMenu_unit_item_desc}>
                      <h5>{item.name}</h5>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

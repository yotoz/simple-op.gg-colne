import React from "react";
import "./styles.scss";
import Flash from "./SummonerFlash.png";
import Teleport from "./SummonerTeleport.png";

import Item_1 from "./1054.png";
import Item_2 from "./3020.png";
import Item_3 from "./3146.png";
import Item_4 from "./3157.png";
import Item_5 from "./3340.png";

const AboutList = ({ players }) => {
  return (
    <div className="contents">
      <table className="list_item">
        <thead>
          <tr>
            <th className="item_header" colspan="4">
              <span className="game_result">승리</span>
              (레드팀)
            </th>
            <th className="item_header">티어</th>
            <th className="item_header">KDA</th>
            <th className="item_header">피해량</th>
            <th className="item_header">와드</th>
            <th className="item_header">CS</th>
            <th className="item_header">아이템</th>
          </tr>
        </thead>

        <tbody className="item_body">
          <tr className="body_row">
            <td className="championImage">
              <div className="championIcon">
                <span className="tooltip-content">아칼리</span>
              </div>
              <div className="level">15</div>
            </td>
            <td className="summonerSpell">
              <img src={Flash} className="image" />
              <img src={Teleport} className="image" />
            </td>
            <td className="rune">
              <img src={Flash} className="image" />
              <img src={Teleport} className="image" />
            </td>
            <td width="77.18" className="summonerName">
              SEONW
            </td>
            <td width="64.44" className="tier">
              Silver 4
            </td>
            <td width="75.56" className="KDAItem">
              <span className="KDARatio">7.34:1</span>
              <div className="KDA">
                <span className="kill">7</span>/<span className="death">1</span>
                /<span className="assist">1</span>/
                <span className="CKRate">(30%)</span>
              </div>
            </td>
            <td width="65.56" className="damage">
              <div className="championDamage">18,153</div>
              <div className="progress">
                <div class="fill" style={{ width: "87%" }}></div>
              </div>
            </td>
            <td width="47.78" className="ward">
              <div className="buy">
                <span class="SightWard">1</span>
              </div>
              <div className="stats">
                <span>6</span>/<span>0</span>
              </div>
            </td>
            <td width="54.44" className="CS">
              <div class="CSs">174</div>
              <div class="CSPerMinute">분당 7.5</div>
            </td>
            <td width="170" className="myItems">
              <div className="myItem">
                <img className="myImage" src={Item_1} />
              </div>
              <div className="myItem">
                <img className="myImage" src={Item_2} />
              </div>
              <div className="myItem">
                <img className="myImage" src={Item_3} />
              </div>
              <div className="myItem">
                <div class="myImage noItem"></div>
              </div>
              <div className="myItem">
                <img className="myImage" src={Item_4} />
              </div>
              <div className="myItem">
                <div class="myImage noItem"></div>
              </div>
              <div className="myItem">
                <img className="myImage" src={Item_5} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="summay"></div>
    </div>
  );
};

export default AboutList;

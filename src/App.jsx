import { useEffect, useState } from "react";
import { fetchData } from "./api";

function Header() {
  return (
    <header className="hero is-info is-bold">
      <div className="hero-body ">
        <div className="container">
          <h1 className="title is-1 has-text-centered">世界の天気情報</h1>
        </div>
      </div>
    </header>
  );
}


function Main() {
  const [data, setData]=useState(null)
  const handleClick=()=>{
    fetchData(lat,lon).then(setData)
  }
  console.log(data)
  const contrynames=['日本:東京','アメリカ:ニューヨーク','ロシア:モスクワ','中国:上海','イギリス:ロンドン','イタリア:ローマ']
  const lats=['35.69', '40.71','55.75','31.22','51.51','41.89']
  const lons=['139.69','-74.01','37.62','121.46','-0.13','12.51']
  const displaytext={0:'快晴',1:'晴れ',2:'部分的に曇り',3:'曇り',45:'霧',48:'堆積霧',51:'軽度の霧雨',53:'中程度の霧雨',55:'密度の高い霧雨',56:'氷点下の霧雨',57:'氷点下の密度の高い霧雨',61:'軽度の雨',63:'中程度の雨',65:'激しい雨',66:'氷点下での軽度の雨',67:'氷点下での重度の雨',71:'軽度の雪',73:'中程度の雪',75:'大雪',77:'雪粒',80:'軽度のにわか雨',81:'中程度のにわか雨',82:'激しいにわか雨',85:'わずかなスノーシャワー',86:'激しいスノーシャワー',94:'中程度の雷雨',96:'僅かに雹をともなう雷雨',99:'僅かに雹をともなう雷雨'}

  const comment={0:'とても良い天気ですね！こんな日は外にでて遊びましょう！',1:'良い天気ですね。気分があがりますね。',2:'ちょっと曇っていますね。元気出していきましょう。',3:'気分が上がらないですね。こんな日は趣味に没頭しましょう。',45:'運転の際は気をつけてください。',48:'視界が悪くなっているので気をつけてください。',51:'視界が悪くなっているので気をつけてください。',53:'視界が悪くなっているので気をつけてください',55:'外出は控えましょう。',56:'体調に気をつけて下さい。',57:'気をつけてください。',61:'このくらいの雨ならなんてことないですよね。',63:'傘さえあれば大丈夫です。',65:'外出の際は気をつけてください。',66:'体調と移動に気をつけてください。',67:'体調と移動に気をつけてください。',71:'雪が少し降っています。',73:'雪が降っています。積雪に備えましょう。',75:'外出は控えましょう。食料の備蓄はありますか。',77:'視界に気をつけてください。',80:'傘をさしますか？',81:'傘をさすか迷いますね。',82:'そろそろ傘をさしましょう。',85:'急に雪が降ってきました。',86:'急にこの雪は最悪ですね。',95:'カミナリに気をつけてください、',96:'カミナリに気をつけてください。',99:'カミナリに気をつけてください。'}


  const [lat, setLat]=useState(lats[0])
  const [lon, setLon]=useState(lons[0])
  const handleChange=(e)=>{
    setLat(lats[e.target.value])
    setLon(lons[e.target.value])
  }

  console.log(lat,lon)
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>

    <div className="con"  style={{
       backgroundColor: "rgb(236, 233, 233)",
       borderRadius: "10px",
       boxShadow: `0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)`,
       padding: "50px 20px",
       textAlign: "center",
       maxwidth: "100%",
       width: "800px"
    }}>

            <h1>世界の天気の情報を知りたいですか？</h1>
            <h2>以下から知りたい地名を選択して下さい。</h2>
            <div>
            <div className="select">
              <select onChange={handleChange}>
                {contrynames.map((name,idx)=><option key={name} value={idx}>{name}</option>)}
              </select>
            </div>
            {/* <input className="input is-primary" type="text" placeholder="where" onChange={(e)=>setText(e.target.value)}></input> */}
            <button className="button is-info" onClick={handleClick}>Reserch</button>
            </div>
            <p id="msg"></p>
        </div>
        <div className="has-text-centered m-5">
          <div className="container">
            {data&&(<div className="$light">{displaytext[data.current_weather.weathercode]}</div>)}
            {data&&(<div>{data.current_weather.temperature}℃</div>)}
            {data&&(<div>{comment[data.current_weather.weathercode]}</div>)}
          </div>
        </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>World Weather Forecast</p>
        <p>
          <a href="https://open-meteo.com/en/docs">Weather Forecast API</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
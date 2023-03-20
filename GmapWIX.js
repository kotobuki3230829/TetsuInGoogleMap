<div id="map"></div>
<style>
  #map {
   width: 100%;
   height: 400px;
   background-color: grey;
 }
</style>
<script>
    function initMap() {
var MyLatLng = new google.maps.LatLng(35.698333, 139.773056);
var Options = {
 zoom: 8,      //地図の縮尺値
 center: MyLatLng,    //地図の中心座標
 mapTypeId: 'roadmap'   //地図の種類
};
var map = new google.maps.Map(document.getElementById('map'), Options);
  const tourStops = [
    [ {lat: 41.773709, lng: 140.726413 }, "函館駅","道南いさりび鉄道","JR函館本線","北海道","https://www.shr-isaribi.jp/","コメント","#FF0000"],
    [ {lat: 41.803557, lng: 140.733539 }, "五稜郭駅","道南いさりび鉄道","道南いさりび鉄道線","北海道","https://www.shr-isaribi.jp/","コメント","#FF0000"],
    [ {lat: 39.640287, lng: 141.946454 }, "宮古駅","三陸鉄道","三陸鉄道リアス線","岩手県","https://www.sanrikutetsudou.com/","コメント","#FF0000"],
    [ {lat: 39.725029, lng: 141.118462 }, "青山駅","ＩＧＲいわて銀河鉄道","いわて銀河鉄道線","岩手県","https://igr.jp/","コメント","#FF0000"],
    [ {lat: 40.000782, lng: 140.401538 }, "阿仁合駅","秋田内陸縦貫鉄道","秋田内陸縦貫鉄道","秋田県","https://www.akita-nairiku.com/","コメント","#FF0000"],
    [ {lat: 39.230305, lng: 140.13897 }, "矢島駅","由利高原鉄道","由利高原鉄道鳥海山ろく線","秋田県","http://www.obako5.com/","コメント","#FF0000"],
    [ {lat: 38.106505, lng: 140.033486 }, "長井駅","山形鉄道","山形鉄道フラワー長井線","山形県","https://flower-liner.jp/","コメント","#FF0000"],
    [ {lat: 37.755388, lng: 140.460055 }, "福島駅","阿武隈急行","阿武隈急行","福島県","http://www.abukyu.co.jp/","コメント","#FF0000"],
    [ {lat: 37.203261, lng: 139.774279 }, "会津田島駅","会津鉄道","会津鉄道会津線","福島県","http://www.aizutetsudo.jp/","コメント","#FF0000"],
    [ {lat: 36.852505, lng: 139.732963 }, "新藤原駅","野岩鉄道","野岩鉄道会津鬼怒川線","栃木県","http://www.yagan.co.jp/","コメント","#FF0000"],
    [ {lat: 36.929482, lng: 139.68824 }, "湯西川温泉駅","野岩鉄道","野岩鉄道会津鬼怒川線","栃木県","http://www.yagan.co.jp/","コメント","#FF0000"],
    [ {lat: 36.434617, lng: 139.277559 }, "大間々駅","わたらせ渓谷鐵道","わたらせ渓谷鐵道線","群馬県","https://watetsu.com/","コメント","#FF0000"],
    [ {lat: 36.439144, lng: 140.002632 }, "真岡駅","真岡鐵道","真岡鐵道","栃木県","https://www.moka-railway.co.jp/","コメント","#FF0000"],
    [ {lat: 36.315342, lng: 140.562675 }, "大洗駅","鹿島臨海鉄道","鹿島臨海鉄道線","茨城県","https://www.rintetsu.co.jp/","コメント","#FF0000"],
    [ {lat: 35.286466, lng: 140.243833 }, "大多喜駅","いすみ鉄道","いすみ鉄道","千葉県","https://www.isumirail.co.jp/","コメント","#FF0000"],
    [ {lat: 37.134562, lng: 138.756188 }, "十日町駅","北越急行","北越急行ほくほく線","新潟県","https://hokuhoku.co.jp/","コメント","#FF0000"],
    [ {lat: 36.326903, lng: 138.421715 }, "小諸駅","しなの鉄道","しなの鉄道線","長野県","https://www.shinanorailway.co.jp/","コメント","#FF0000"],
    [ {lat: 36.710642, lng: 138.274458 }, "豊野駅","しなの鉄道","北しなの線","長野県","https://www.shinanorailway.co.jp/","コメント","#FF0000"],
    [ {lat: 37.170251, lng: 138.242265 }, "直江津駅","えちごトキめき鉄道","JR信越本線","新潟県","https://www.echigo-tokimeki.co.jp/","コメント","#FF0000"],
    [ {lat: 37.043631, lng: 137.861311 }, "糸魚川駅","えちごトキめき鉄道","JR大糸線","新潟県","https://www.echigo-tokimeki.co.jp/","コメント","#FF0000"],
    [ {lat: 36.701384, lng: 137.213091 }, "富山駅","あいの風とやま鉄道","あいの風とやま鉄道線","富山県","https://ainokaze.co.jp/","コメント","#FF0000"],
    [ {lat: 36.740948, lng: 137.015274 }, "高岡駅","あいの風とやま鉄道","あいの風とやま鉄道線","富山県","https://ainokaze.co.jp/","コメント","#FF0000"],
    [ {lat: 36.578117, lng: 136.648166 }, "金沢駅","ＩＲいしかわ鉄道","IRいしかわ鉄道線","石川県","http://www.ishikawa-railway.jp/","コメント","#FF0000"],
    [ {lat: 36.657895, lng: 136.730759 }, "津幡駅","ＩＲいしかわ鉄道","IRいしかわ鉄道線","石川県","http://www.ishikawa-railway.jp/","コメント","#FF0000"],
    [ {lat: 37.228015, lng: 136.904592 }, "穴水駅","のと鉄道","のと鉄道七尾線","石川県","http://nototetsu.co.jp/","コメント","#FF0000"],
    [ {lat: 35.455313, lng: 137.408463 }, "恵那駅","明知鉄道","明知鉄道","岐阜県","https://www.aketetsu.co.jp/","コメント","#FF0000"],
    [ {lat: 35.306169, lng: 137.387359 }, "明智駅","明知鉄道","明知鉄道","岐阜県","https://www.aketetsu.co.jp/","コメント","#FF0000"],
    [ {lat: 35.490027, lng: 136.912758 }, "関駅","長良川鉄道","長良川鉄道越美南線","岐阜県","http://www.nagatetsu.co.jp/","コメント","#FF0000"],
    [ {lat: 35.741877, lng: 136.947363 }, "郡上八幡駅","長良川鉄道","長良川鉄道越美南線","岐阜県","http://www.nagatetsu.co.jp/","コメント","#FF0000"],
    [ {lat: 35.487599, lng: 136.670072 }, "本巣駅","樽見鉄道","樽見鉄道樽見","岐阜県","https://www.tarumi-railway.com/","コメント","#FF0000"],
    [ {lat: 34.859118, lng: 137.820045 }, "天竜二俣駅","天竜浜名湖鉄道","天竜浜名湖鉄道","静岡県","https://www.tenhama.co.jp/","コメント","#FF0000"],
    [ {lat: 35.088041, lng: 137.153524 }, "新豊田駅","愛知環状鉄道","愛知環状鉄道線","愛知県","https://www.aikanrailway.co.jp/","コメント","#FF0000"],
    [ {lat: 35.0554, lng: 137.150934 }, "三河豊田駅","愛知環状鉄道","愛知環状鉄道線","愛知県","https://www.aikanrailway.co.jp/","コメント","#FF0000"],
    [ {lat: 34.878513, lng: 136.589009 }, "鈴鹿駅","伊勢鉄道","伊勢鉄伊勢線","三重県","http://www.isetetu.co.jp/","コメント","#FF0000"],
    [ {lat: 34.87713, lng: 136.061317 }, "信楽駅","信楽高原鐵道","信楽高原鐵道","滋賀県","https://koka-skr.co.jp/","コメント","#FF0000"],
    [ {lat: 35.557729, lng: 135.182456 }, "天橋立駅","京都丹後鉄道","京都丹後鉄道宮豊線","京都府","http://trains.willer.co.jp/","コメント","#FF0000"],
    [ {lat: 34.929664, lng: 134.832617 }, "北条町駅","北条鉄道","北条鉄道","兵庫県","http://www.hojorailway.jp/","コメント","#FF0000"],
    [ {lat: 35.345253, lng: 134.398289 }, "若桜駅","若桜鉄道","若桜鉄道若桜線","鳥取県","https://wakatetsu.co.jp/","コメント","#FF0000"],
    [ {lat: 35.264992, lng: 134.22559 }, "智頭駅","智頭急行","智頭急行智頭線","鳥取県","http://www.chizukyu.co.jp/","コメント","#FF0000"],
    [ {lat: 34.866413, lng: 134.353083 }, "上郡駅","智頭急行","智頭急行智頭線","兵庫県","http://www.chizukyu.co.jp/","コメント","#FF0000"],
    [ {lat: 34.592947, lng: 133.468906 }, "井原駅","井原鉄道","井原鉄道","岡山県","https://www.ibara-railway.co.jp/","コメント","#FF0000"],
    [ {lat: 34.26475, lng: 131.962944 }, "錦町駅","錦川鉄道","錦川鉄道錦川清流線","山口県","http://nishikigawa.com/","コメント","#FF0000"],
    [ {lat: 33.566949, lng: 134.300741 }, "宍喰駅","阿佐海岸鉄道","阿佐海岸鉄道","徳島県","http://asatetu.com/","コメント","#FF0000"],
    [ {lat: 32.984641, lng: 132.943927 }, "中村駅","土佐くろしお鉄道","土佐くろしお鉄道中村線","高知県","https://www.tosakuro.com/","コメント","#FF0000"],
    [ {lat: 33.504738, lng: 133.906538 }, "安芸駅","土佐くろしお鉄道","土佐くろしお鉄道阿佐線","高知県","https://www.tosakuro.com/","コメント","#FF0000"],
    [ {lat: 33.682805, lng: 130.776491 }, "金田駅","平成筑豊鉄道","平成筑豊鉄道伊田線","福岡県","http://www.heichiku.net/","コメント","#FF0000"],
    [ {lat: 33.419295, lng: 130.653325 }, "甘木駅","甘木鉄道","甘木鉄道甘木線","福岡県","http://www.amatetsu.jp/","コメント","#FF0000"],
    [ {lat: 33.362532, lng: 129.582595 }, "たびら平戸口駅","松浦鉄道","松浦鉄道","長崎県","http://matutetu.com/","コメント","#FF0000"],
    [ {lat: 33.163868, lng: 129.725667 }, "佐世保駅","松浦鉄道","松浦鉄道","長崎県","http://matutetu.com/","コメント","#FF0000"],
    [ {lat: 32.81954, lng: 131.122561 }, "高森駅","南阿蘇鉄道","南阿蘇鉄道","熊本県","http://www.mt-torokko.com/","コメント","#FF0000"],
    [ {lat: 32.216142, lng: 130.753797 }, "人吉駅","くま川鉄道","JR肥薩線","熊本県","https://www.kumagawa-rail.com/","コメント","#FF0000"],
    [ {lat: 32.503805, lng: 130.621609 }, "八代駅","肥薩おれんじ鉄道","肥薩おれんじ鉄道線","熊本県","https://www.hs-orange.com/","コメント","#FF0000"],
    [ {lat: 31.813726, lng: 130.31213 }, "川内駅","肥薩おれんじ鉄道","肥薩おれんじ鉄道線","鹿児島県","https://www.hs-orange.com/","コメント","#FF0000"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
    // Create the markers.
  tourStops.forEach(([position, eki, sen, lsen,ken,url,com, col], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${eki}:${lsen}`,
      optimized: false,
      icon: {path: google.maps.SymbolPath.CIRCLE,scale: 7,fillColor: `${col}`,fillOpacity: 0.7,strokeColor:`${col}`,strokeWeight: 0.8}
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(`<p>${eki}：${ken}<br>${com}<br><a href="${url}" target="_blank">${sen}</a></p>`);
      infoWindow.open(marker.getMap(), marker);
    });
  });
      }
</script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=[APIキー]&callback=initMap"></script>

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

// 道南いさりび鉄道線
var LineCoordinates1 = [
new google.maps.LatLng(41.803557, 140.733539)
,new google.maps.LatLng(41.817643, 140.707957)
,new google.maps.LatLng(41.826005, 140.679731)
,new google.maps.LatLng(41.826727, 140.666468)
,new google.maps.LatLng(41.824615, 140.652906)
,new google.maps.LatLng(41.81956, 140.640599)
,new google.maps.LatLng(41.766604, 140.600561)
,new google.maps.LatLng(41.737309, 140.579109)
,new google.maps.LatLng(41.712153, 140.53718)
,new google.maps.LatLng(41.700867, 140.506797)
,new google.maps.LatLng(41.699271, 140.468097)
,new google.maps.LatLng(41.677642, 140.434004)
];
var line1 = new google.maps.Polyline({path: LineCoordinates1,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line1.setMap(map);
// 三陸鉄道リアス線
var LineCoordinates2 = [
new google.maps.LatLng(39.086372, 141.710734)
,new google.maps.LatLng(39.068623, 141.741086)
,new google.maps.LatLng(39.054318, 141.799012)
,new google.maps.LatLng(39.07453, 141.816365)
,new google.maps.LatLng(39.093394, 141.806571)
,new google.maps.LatLng(39.117194, 141.809836)
,new google.maps.LatLng(39.151122, 141.836382)
,new google.maps.LatLng(39.201816, 141.86123)
,new google.maps.LatLng(39.245686, 141.885923)
,new google.maps.LatLng(39.273321, 141.87267)
,new google.maps.LatLng(39.308062, 141.889112)
,new google.maps.LatLng(39.32694, 141.887976)
,new google.maps.LatLng(39.356734, 141.902894)
,new google.maps.LatLng(39.36957, 141.938648)
,new google.maps.LatLng(39.383537, 141.935104)
,new google.maps.LatLng(39.431369, 141.974033)
,new google.maps.LatLng(39.447187, 141.959497)
,new google.maps.LatLng(39.463449, 141.951533)
,new google.maps.LatLng(39.534274, 141.924739)
,new google.maps.LatLng(39.564423, 141.932843)
,new google.maps.LatLng(39.581507, 141.937594)
,new google.maps.LatLng(39.620372, 141.948084)
,new google.maps.LatLng(39.629883, 141.960984)
,new google.maps.LatLng(39.640287, 141.946454)
,new google.maps.LatLng(39.648464, 141.93284)
,new google.maps.LatLng(39.686895, 141.94264)
,new google.maps.LatLng(39.711131, 141.935868)
,new google.maps.LatLng(39.731848, 141.964556)
,new google.maps.LatLng(39.73551, 141.96728)
,new google.maps.LatLng(39.809453, 141.962182)
,new google.maps.LatLng(39.842724, 141.958453)
,new google.maps.LatLng(39.915737, 141.93968)
,new google.maps.LatLng(39.934276, 141.933847)
,new google.maps.LatLng(40.002492, 141.886269)
,new google.maps.LatLng(40.032628, 141.883121)
,new google.maps.LatLng(40.051895, 141.859481)
,new google.maps.LatLng(40.082728, 141.828874)
,new google.maps.LatLng(40.100778, 141.823694)
,new google.maps.LatLng(40.116115, 141.81899)
,new google.maps.LatLng(40.132441, 141.785904)
,new google.maps.LatLng(40.190391, 141.770891)
];
var line2 = new google.maps.Polyline({path: LineCoordinates2,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line2.setMap(map);
// いわて銀河鉄道線
var LineCoordinates3 = [
new google.maps.LatLng(39.701547, 141.136599)
,new google.maps.LatLng(39.725029, 141.118462)
,new google.maps.LatLng(39.744637, 141.129354)
,new google.maps.LatLng(39.783345, 141.148674)
,new google.maps.LatLng(39.798953, 141.149362)
,new google.maps.LatLng(39.834806, 141.15449)
,new google.maps.LatLng(39.874037, 141.173685)
,new google.maps.LatLng(39.918696, 141.199337)
,new google.maps.LatLng(39.960155, 141.216955)
,new google.maps.LatLng(40.004412, 141.23703)
,new google.maps.LatLng(40.066235, 141.22844)
,new google.maps.LatLng(40.123173, 141.260437)
,new google.maps.LatLng(40.171061, 141.307735)
,new google.maps.LatLng(40.210092, 141.297419)
,new google.maps.LatLng(40.25997, 141.286211)
,new google.maps.LatLng(40.285158, 141.291123)
,new google.maps.LatLng(40.323503, 141.303943)
,new google.maps.LatLng(40.351908, 141.289504)
];
var line3 = new google.maps.Polyline({path: LineCoordinates3,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line3.setMap(map);
// 秋田内陸縦貫鉄道
var LineCoordinates4 = [
new google.maps.LatLng(40.232059, 140.369816)
,new google.maps.LatLng(40.224615, 140.357918)
,new google.maps.LatLng(40.204973, 140.349206)
,new google.maps.LatLng(40.186975, 140.340777)
,new google.maps.LatLng(40.161033, 140.330148)
,new google.maps.LatLng(40.146533, 140.349495)
,new google.maps.LatLng(40.128199, 140.373477)
,new google.maps.LatLng(40.101634, 140.417854)
,new google.maps.LatLng(40.061322, 140.417731)
,new google.maps.LatLng(40.050604, 140.40227)
,new google.maps.LatLng(40.033817, 140.40117)
,new google.maps.LatLng(40.000782, 140.401538)
,new google.maps.LatLng(39.980085, 140.402486)
,new google.maps.LatLng(39.95846, 140.412528)
,new google.maps.LatLng(39.935151, 140.413071)
,new google.maps.LatLng(39.921248, 140.430639)
,new google.maps.LatLng(39.905078, 140.452643)
,new google.maps.LatLng(39.911567, 140.48946)
,new google.maps.LatLng(39.91952, 140.515793)
,new google.maps.LatLng(39.859084, 140.581208)
,new google.maps.LatLng(39.815858, 140.584937)
,new google.maps.LatLng(39.801867, 140.586118)
,new google.maps.LatLng(39.771049, 140.602775)
,new google.maps.LatLng(39.744107, 140.590288)
,new google.maps.LatLng(39.727689, 140.565383)
,new google.maps.LatLng(39.687701, 140.552805)
,new google.maps.LatLng(39.653175, 140.563191)
,new google.maps.LatLng(39.627304, 140.574249)
,new google.maps.LatLng(39.591716, 140.570988)
];
var line4 = new google.maps.Polyline({path: LineCoordinates4,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line4.setMap(map);
// 由利高原鉄道鳥海山ろく線
var LineCoordinates5 = [
new google.maps.LatLng(39.386877, 140.057632)
,new google.maps.LatLng(39.368008, 140.048788)
,new google.maps.LatLng(39.350399, 140.059913)
,new google.maps.LatLng(39.328693, 140.071254)
,new google.maps.LatLng(39.320388, 140.093365)
,new google.maps.LatLng(39.321081, 140.102178)
,new google.maps.LatLng(39.312649, 140.112727)
,new google.maps.LatLng(39.296231, 140.111067)
,new google.maps.LatLng(39.278319, 140.116448)
,new google.maps.LatLng(39.268145, 140.116323)
,new google.maps.LatLng(39.248842, 140.12036)
,new google.maps.LatLng(39.230305, 140.13897)
];
var line5 = new google.maps.Polyline({path: LineCoordinates5,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line5.setMap(map);
// 山形鉄道フラワー長井線
var LineCoordinates6 = [
new google.maps.LatLng(38.047081, 140.148978)
,new google.maps.LatLng(38.056138, 140.148569)
,new google.maps.LatLng(38.070849, 140.135293)
,new google.maps.LatLng(38.066359, 140.12239)
,new google.maps.LatLng(38.057307, 140.098051)
,new google.maps.LatLng(38.055489, 140.064644)
,new google.maps.LatLng(38.056697, 140.04412)
,new google.maps.LatLng(38.076727, 140.029498)
,new google.maps.LatLng(38.097592, 140.034541)
,new google.maps.LatLng(38.106505, 140.033486)
,new google.maps.LatLng(38.113971, 140.032749)
,new google.maps.LatLng(38.131038, 140.034987)
,new google.maps.LatLng(38.149984, 140.041013)
,new google.maps.LatLng(38.161588, 140.046757)
,new google.maps.LatLng(38.182517, 140.071095)
,new google.maps.LatLng(38.185763, 140.077561)
,new google.maps.LatLng(38.188, 140.097401)
];
var line6 = new google.maps.Polyline({path: LineCoordinates6,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line6.setMap(map);
// 阿武隈急行
var LineCoordinates7 = [
new google.maps.LatLng(37.755388, 140.460055)
,new google.maps.LatLng(37.795472, 140.479463)
,new google.maps.LatLng(37.798994, 140.489095)
,new google.maps.LatLng(37.802303, 140.498397)
,new google.maps.LatLng(37.806683, 140.510532)
,new google.maps.LatLng(37.808561, 140.52755)
,new google.maps.LatLng(37.809628, 140.542749)
,new google.maps.LatLng(37.81463, 140.556651)
,new google.maps.LatLng(37.819966, 140.566805)
,new google.maps.LatLng(37.828424, 140.581151)
,new google.maps.LatLng(37.83776, 140.592986)
,new google.maps.LatLng(37.845815, 140.603279)
,new google.maps.LatLng(37.857867, 140.615552)
,new google.maps.LatLng(37.874788, 140.62737)
,new google.maps.LatLng(37.895375, 140.646466)
,new google.maps.LatLng(37.913443, 140.68576)
,new google.maps.LatLng(37.930641, 140.761606)
,new google.maps.LatLng(37.943103, 140.771832)
,new google.maps.LatLng(37.964895, 140.769578)
,new google.maps.LatLng(37.979282, 140.772388)
,new google.maps.LatLng(37.996999, 140.776045)
,new google.maps.LatLng(38.019246, 140.782755)
,new google.maps.LatLng(38.050095, 140.789824)
,new google.maps.LatLng(38.07864, 140.809992)
];
var line7 = new google.maps.Polyline({path: LineCoordinates7,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line7.setMap(map);
// 会津鉄道会津線
var LineCoordinates8 = [
new google.maps.LatLng(37.486034, 139.914172)
,new google.maps.LatLng(37.458876, 139.914479)
,new google.maps.LatLng(37.442616, 139.913769)
,new google.maps.LatLng(37.416736, 139.917661)
,new google.maps.LatLng(37.395456, 139.932277)
,new google.maps.LatLng(37.34685, 139.920806)
,new google.maps.LatLng(37.334573, 139.918668)
,new google.maps.LatLng(37.304056, 139.895169)
,new google.maps.LatLng(37.274695, 139.901636)
,new google.maps.LatLng(37.26629, 139.889924)
,new google.maps.LatLng(37.255166, 139.864937)
,new google.maps.LatLng(37.243051, 139.858958)
,new google.maps.LatLng(37.224499, 139.841794)
,new google.maps.LatLng(37.21525, 139.823887)
,new google.maps.LatLng(37.209525, 139.800776)
,new google.maps.LatLng(37.203261, 139.774279)
,new google.maps.LatLng(37.180289, 139.75096)
,new google.maps.LatLng(37.153317, 139.733683)
,new google.maps.LatLng(37.144787, 139.732114)
,new google.maps.LatLng(37.124184, 139.717388)
,new google.maps.LatLng(37.090026, 139.705153)
];
var line8 = new google.maps.Polyline({path: LineCoordinates8,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line8.setMap(map);
// 野岩鉄道会津鬼怒川線
var LineCoordinates9 = [
new google.maps.LatLng(36.852505, 139.732963)
,new google.maps.LatLng(36.860909, 139.718542)
,new google.maps.LatLng(36.884036, 139.703775)
,new google.maps.LatLng(36.895126, 139.702772)
,new google.maps.LatLng(36.929482, 139.68824)
,new google.maps.LatLng(36.985843, 139.69614)
,new google.maps.LatLng(37.014461, 139.727168)
,new google.maps.LatLng(37.04784, 139.723845)
,new google.maps.LatLng(37.089949, 139.705067)
];
var line9 = new google.maps.Polyline({path: LineCoordinates9,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line9.setMap(map);
// わたらせ渓谷鐵道線
var LineCoordinates10 = [
new google.maps.LatLng(36.41109, 139.33319)
,new google.maps.LatLng(36.407776, 139.315085)
,new google.maps.LatLng(36.410216, 139.304449)
,new google.maps.LatLng(36.42038, 139.300852)
,new google.maps.LatLng(36.434617, 139.277559)
,new google.maps.LatLng(36.470053, 139.257696)
,new google.maps.LatLng(36.481391, 139.259306)
,new google.maps.LatLng(36.499866, 139.277579)
,new google.maps.LatLng(36.520809, 139.30769)
,new google.maps.LatLng(36.524243, 139.317219)
,new google.maps.LatLng(36.535644, 139.337842)
,new google.maps.LatLng(36.537467, 139.35653)
,new google.maps.LatLng(36.58064, 139.396314)
,new google.maps.LatLng(36.617284, 139.420593)
,new google.maps.LatLng(36.636837, 139.439671)
,new google.maps.LatLng(36.641853, 139.447773)
,new google.maps.LatLng(36.653507, 139.450078)
];
var line10 = new google.maps.Polyline({path: LineCoordinates10,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line10.setMap(map);
// 真岡鐵道
var LineCoordinates11 = [
new google.maps.LatLng(36.304275, 139.978582)
,new google.maps.LatLng(36.319137, 139.972193)
,new google.maps.LatLng(36.340684, 139.971232)
,new google.maps.LatLng(36.357882, 139.970057)
,new google.maps.LatLng(36.37606, 139.971756)
,new google.maps.LatLng(36.410876, 139.980077)
,new google.maps.LatLng(36.439144, 140.002632)
,new google.maps.LatLng(36.44909, 140.014061)
,new google.maps.LatLng(36.453407, 140.04876)
,new google.maps.LatLng(36.455665, 140.067708)
,new google.maps.LatLng(36.462965, 140.088526)
,new google.maps.LatLng(36.491814, 140.09439)
,new google.maps.LatLng(36.515922, 140.089795)
,new google.maps.LatLng(36.538029, 140.110218)
,new google.maps.LatLng(36.533911, 140.144837)
,new google.maps.LatLng(36.529292, 140.156109)
,new google.maps.LatLng(36.530851, 140.181382)
];
var line11 = new google.maps.Polyline({path: LineCoordinates11,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line11.setMap(map);
// 鹿島臨海鉄道線
var LineCoordinates12 = [
new google.maps.LatLng(36.370911, 140.47676)
,new google.maps.LatLng(36.361746, 140.516012)
,new google.maps.LatLng(36.340683, 140.558997)
,new google.maps.LatLng(36.315342, 140.562675)
,new google.maps.LatLng(36.266054, 140.527356)
,new google.maps.LatLng(36.224658, 140.512601)
,new google.maps.LatLng(36.190356, 140.514441)
,new google.maps.LatLng(36.152697, 140.520408)
,new google.maps.LatLng(36.120453, 140.536841)
,new google.maps.LatLng(36.108341, 140.576413)
,new google.maps.LatLng(36.075568, 140.596789)
,new google.maps.LatLng(36.050674, 140.609855)
,new google.maps.LatLng(36.031336, 140.618849)
,new google.maps.LatLng(36.016804, 140.625194)
,new google.maps.LatLng(35.992707, 140.63606)
];
var line12 = new google.maps.Polyline({path: LineCoordinates12,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line12.setMap(map);
// いすみ鉄道
var LineCoordinates13 = [
new google.maps.LatLng(35.251097, 140.390864)
,new google.maps.LatLng(35.260407, 140.378029)
,new google.maps.LatLng(35.263313, 140.344974)
,new google.maps.LatLng(35.276408, 140.328081)
,new google.maps.LatLng(35.280497, 140.314046)
,new google.maps.LatLng(35.282763, 140.280636)
,new google.maps.LatLng(35.291741, 140.252693)
,new google.maps.LatLng(35.286466, 140.243833)
,new google.maps.LatLng(35.268938, 140.251142)
,new google.maps.LatLng(35.259314, 140.247381)
,new google.maps.LatLng(35.250265, 140.247718)
,new google.maps.LatLng(35.240588, 140.240413)
,new google.maps.LatLng(35.25051, 140.215176)
,new google.maps.LatLng(35.250051, 140.199571)
];
var line13 = new google.maps.Polyline({path: LineCoordinates13,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line13.setMap(map);
// 北越急行ほくほく線
var LineCoordinates14 = [
new google.maps.LatLng(37.067065, 138.875872)
,new google.maps.LatLng(37.09614, 138.877619)
,new google.maps.LatLng(37.130996, 138.789774)
,new google.maps.LatLng(37.139675, 138.768339)
,new google.maps.LatLng(37.134562, 138.756188)
,new google.maps.LatLng(37.132209, 138.613884)
,new google.maps.LatLng(37.146997, 138.509551)
,new google.maps.LatLng(37.154896, 138.441409)
,new google.maps.LatLng(37.159285, 138.419047)
,new google.maps.LatLng(37.18442, 138.373406)
,new google.maps.LatLng(37.198168, 138.361689)
,new google.maps.LatLng(37.210345, 138.305154)
];
var line14 = new google.maps.Polyline({path: LineCoordinates14,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line14.setMap(map);
// しなの鉄道線
var LineCoordinates15 = [
new google.maps.LatLng(36.342889, 138.635096)
,new google.maps.LatLng(36.347576, 138.593147)
,new google.maps.LatLng(36.335538, 138.558582)
,new google.maps.LatLng(36.318986, 138.50619)
,new google.maps.LatLng(36.308606, 138.453926)
,new google.maps.LatLng(36.326903, 138.421715)
,new google.maps.LatLng(36.342586, 138.363543)
,new google.maps.LatLng(36.354433, 138.329414)
,new google.maps.LatLng(36.369566, 138.297109)
,new google.maps.LatLng(36.378592, 138.273385)
,new google.maps.LatLng(36.396579, 138.249298)
,new google.maps.LatLng(36.417318, 138.20855)
,new google.maps.LatLng(36.440584, 138.188203)
,new google.maps.LatLng(36.46195, 138.181315)
,new google.maps.LatLng(36.492913, 138.153017)
,new google.maps.LatLng(36.509039, 138.141661)
,new google.maps.LatLng(36.532062, 138.128191)
,new google.maps.LatLng(36.547853, 138.132489)
,new google.maps.LatLng(36.5771, 138.138046)
];
var line15 = new google.maps.Polyline({path: LineCoordinates15,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line15.setMap(map);
// 北しなの線
var LineCoordinates16 = [
new google.maps.LatLng(36.643307, 138.189101)
,new google.maps.LatLng(36.665123, 138.222534)
,new google.maps.LatLng(36.686674, 138.244079)
,new google.maps.LatLng(36.710642, 138.274458)
,new google.maps.LatLng(36.753239, 138.247121)
,new google.maps.LatLng(36.792295, 138.230461)
,new google.maps.LatLng(36.807214, 138.197195)
,new google.maps.LatLng(36.872175, 138.211953)
];
var line16 = new google.maps.Polyline({path: LineCoordinates16,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line16.setMap(map);
// 妙高はねうまライン
var LineCoordinates17 = [
new google.maps.LatLng(36.872175, 138.211953)
,new google.maps.LatLng(36.933048, 138.226415)
,new google.maps.LatLng(36.989608, 138.232765)
,new google.maps.LatLng(37.026738, 138.255614)
,new google.maps.LatLng(37.05296, 138.257699)
,new google.maps.LatLng(37.081813, 138.249476)
,new google.maps.LatLng(37.096766, 138.242973)
,new google.maps.LatLng(37.115226, 138.242018)
,new google.maps.LatLng(37.148042, 138.234922)
,new google.maps.LatLng(37.170251, 138.242265)
];
var line17 = new google.maps.Polyline({path: LineCoordinates17,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line17.setMap(map);
// 日本海ひすいライン
var LineCoordinates18 = [
new google.maps.LatLng(37.170251, 138.242265)
,new google.maps.LatLng(37.162399, 138.173867)
,new google.maps.LatLng(37.163323, 138.136553)
,new google.maps.LatLng(37.15584, 138.092649)
,new google.maps.LatLng(37.127473, 138.060768)
,new google.maps.LatLng(37.096049, 137.988405)
,new google.maps.LatLng(37.073935, 137.939659)
,new google.maps.LatLng(37.056577, 137.905738)
,new google.maps.LatLng(37.048209, 137.878394)
,new google.maps.LatLng(37.043631, 137.861311)
,new google.maps.LatLng(37.022469, 137.795622)
,new google.maps.LatLng(37.006818, 137.738104)
,new google.maps.LatLng(36.980448, 137.650373)
];
var line18 = new google.maps.Polyline({path: LineCoordinates18,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line18.setMap(map);
// あいの風とやま鉄道線
var LineCoordinates19 = [
new google.maps.LatLng(36.980448, 137.650373)
,new google.maps.LatLng(36.973863, 137.599423)
,new google.maps.LatLng(36.951897, 137.556179)
,new google.maps.LatLng(36.941296, 137.499)
,new google.maps.LatLng(36.930124, 137.459298)
,new google.maps.LatLng(36.906031, 137.426534)
,new google.maps.LatLng(36.869322, 137.434393)
,new google.maps.LatLng(36.82642, 137.405693)
,new google.maps.LatLng(36.787987, 137.37805)
,new google.maps.LatLng(36.769318, 137.348666)
,new google.maps.LatLng(36.743454, 137.298404)
,new google.maps.LatLng(36.741589, 137.248953)
,new google.maps.LatLng(36.719155, 137.240256)
,new google.maps.LatLng(36.701384, 137.213091)
,new google.maps.LatLng(36.718845, 137.164874)
,new google.maps.LatLng(36.720947, 137.092767)
,new google.maps.LatLng(36.733818, 137.055904)
,new google.maps.LatLng(36.740948, 137.015274)
,new google.maps.LatLng(36.737246, 136.988638)
,new google.maps.LatLng(36.724295, 136.965295)
,new google.maps.LatLng(36.708239, 136.932079)
,new google.maps.LatLng(36.672492, 136.865859)
,new google.maps.LatLng(36.672489, 136.791604)
];
var line19 = new google.maps.Polyline({path: LineCoordinates19,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line19.setMap(map);
// IRいしかわ鉄道線
var LineCoordinates20 = [
new google.maps.LatLng(36.672489, 136.791604)
,new google.maps.LatLng(36.657895, 136.730759)
,new google.maps.LatLng(36.612144, 136.689489)
,new google.maps.LatLng(36.593652, 136.669806)
,new google.maps.LatLng(36.578117, 136.648166)
];
var line20 = new google.maps.Polyline({path: LineCoordinates20,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line20.setMap(map);
// のと鉄道七尾線
var LineCoordinates21 = [
new google.maps.LatLng(37.041613, 136.964501)
,new google.maps.LatLng(37.074663, 136.925884)
,new google.maps.LatLng(37.065719, 136.891193)
,new google.maps.LatLng(37.079288, 136.857587)
,new google.maps.LatLng(37.109174, 136.853339)
,new google.maps.LatLng(37.147604, 136.87443)
,new google.maps.LatLng(37.179723, 136.897879)
,new google.maps.LatLng(37.228015, 136.904592)
];
var line21 = new google.maps.Polyline({path: LineCoordinates21,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line21.setMap(map);
// 明知鉄道
var LineCoordinates22 = [
new google.maps.LatLng(35.455313, 137.408463)
,new google.maps.LatLng(35.446315, 137.428788)
,new google.maps.LatLng(35.418529, 137.461257)
,new google.maps.LatLng(35.399759, 137.458962)
,new google.maps.LatLng(35.387222, 137.437468)
,new google.maps.LatLng(35.379944, 137.432619)
,new google.maps.LatLng(35.368864, 137.43434)
,new google.maps.LatLng(35.355071, 137.407207)
,new google.maps.LatLng(35.350132, 137.395679)
,new google.maps.LatLng(35.321962, 137.389516)
,new google.maps.LatLng(35.306169, 137.387359)
];
var line22 = new google.maps.Polyline({path: LineCoordinates22,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line22.setMap(map);
// 長良川鉄道越美南線
var LineCoordinates23 = [
new google.maps.LatLng(35.445617, 137.019467)
,new google.maps.LatLng(35.449771, 137.001652)
,new google.maps.LatLng(35.460927, 136.985062)
,new google.maps.LatLng(35.475144, 136.969658)
,new google.maps.LatLng(35.478588, 136.944923)
,new google.maps.LatLng(35.479976, 136.928872)
,new google.maps.LatLng(35.483434, 136.914195)
,new google.maps.LatLng(35.490027, 136.912758)
,new google.maps.LatLng(35.499004, 136.912787)
,new google.maps.LatLng(35.513679, 136.914582)
,new google.maps.LatLng(35.526808, 136.915367)
,new google.maps.LatLng(35.539618, 136.915525)
,new google.maps.LatLng(35.548981, 136.918025)
,new google.maps.LatLng(35.571281, 136.931192)
,new google.maps.LatLng(35.588954, 136.944848)
,new google.maps.LatLng(35.59875, 136.942009)
,new google.maps.LatLng(35.606394, 136.938467)
,new google.maps.LatLng(35.620186, 136.944966)
,new google.maps.LatLng(35.627308, 136.950618)
,new google.maps.LatLng(35.637327, 136.95024)
,new google.maps.LatLng(35.646726, 136.95172)
,new google.maps.LatLng(35.660686, 136.955047)
,new google.maps.LatLng(35.671021, 136.960613)
,new google.maps.LatLng(35.686445, 136.962498)
,new google.maps.LatLng(35.715114, 136.95042)
,new google.maps.LatLng(35.741877, 136.947363)
,new google.maps.LatLng(35.7702, 136.931354)
,new google.maps.LatLng(35.789003, 136.911709)
,new google.maps.LatLng(35.805087, 136.903546)
,new google.maps.LatLng(35.815224, 136.894872)
,new google.maps.LatLng(35.833702, 136.883093)
,new google.maps.LatLng(35.844429, 136.876707)
,new google.maps.LatLng(35.853775, 136.868405)
,new google.maps.LatLng(35.868426, 136.859039)
,new google.maps.LatLng(35.884946, 136.860602)
,new google.maps.LatLng(35.912617, 136.843028)
,new google.maps.LatLng(35.919722, 136.832312)
,new google.maps.LatLng(35.92994, 136.829793)
];
var line23 = new google.maps.Polyline({path: LineCoordinates23,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line23.setMap(map);
// 樽見鉄道樽見
var LineCoordinates24 = [
new google.maps.LatLng(35.367096, 136.618288)
,new google.maps.LatLng(35.375338, 136.646671)
,new google.maps.LatLng(35.386996, 136.659479)
,new google.maps.LatLng(35.395737, 136.660945)
,new google.maps.LatLng(35.413387, 136.661378)
,new google.maps.LatLng(35.439567, 136.674271)
,new google.maps.LatLng(35.455112, 136.669729)
,new google.maps.LatLng(35.462891, 136.669704)
,new google.maps.LatLng(35.487599, 136.670072)
,new google.maps.LatLng(35.499017, 136.667241)
,new google.maps.LatLng(35.517759, 136.650153)
,new google.maps.LatLng(35.527552, 136.642187)
,new google.maps.LatLng(35.542487, 136.641739)
,new google.maps.LatLng(35.555099, 136.641017)
,new google.maps.LatLng(35.5659, 136.636606)
,new google.maps.LatLng(35.582304, 136.631456)
,new google.maps.LatLng(35.601806, 136.625819)
,new google.maps.LatLng(35.617813, 136.620771)
,new google.maps.LatLng(35.635119, 136.615827)
];
var line24 = new google.maps.Polyline({path: LineCoordinates24,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line24.setMap(map);
// 天竜浜名湖鉄道
var LineCoordinates25 = [
new google.maps.LatLng(34.769568, 138.014256)
,new google.maps.LatLng(34.770289, 138.000143)
,new google.maps.LatLng(34.771952, 137.99501)
,new google.maps.LatLng(34.778216, 137.972764)
,new google.maps.LatLng(34.788103, 137.963773)
,new google.maps.LatLng(34.792705, 137.961606)
,new google.maps.LatLng(34.808434, 137.955023)
,new google.maps.LatLng(34.820183, 137.952911)
,new google.maps.LatLng(34.831311, 137.931038)
,new google.maps.LatLng(34.8311, 137.924297)
,new google.maps.LatLng(34.826389, 137.917944)
,new google.maps.LatLng(34.820793, 137.907573)
,new google.maps.LatLng(34.818045, 137.889145)
,new google.maps.LatLng(34.826218, 137.864355)
,new google.maps.LatLng(34.837105, 137.839758)
,new google.maps.LatLng(34.847442, 137.830058)
,new google.maps.LatLng(34.859118, 137.820045)
,new google.maps.LatLng(34.859504, 137.813015)
,new google.maps.LatLng(34.846758, 137.807988)
,new google.maps.LatLng(34.837705, 137.792537)
,new google.maps.LatLng(34.830389, 137.773731)
,new google.maps.LatLng(34.834406, 137.731976)
,new google.maps.LatLng(34.828223, 137.718272)
,new google.maps.LatLng(34.81989, 137.709231)
,new google.maps.LatLng(34.816951, 137.681103)
,new google.maps.LatLng(34.812295, 137.665686)
,new google.maps.LatLng(34.80722, 137.651937)
,new google.maps.LatLng(34.802323, 137.621523)
,new google.maps.LatLng(34.790102, 137.612523)
,new google.maps.LatLng(34.789146, 137.599286)
,new google.maps.LatLng(34.790412, 137.586571)
,new google.maps.LatLng(34.79585, 137.574516)
,new google.maps.LatLng(34.802565, 137.551705)
,new google.maps.LatLng(34.795068, 137.545934)
,new google.maps.LatLng(34.783958, 137.541755)
,new google.maps.LatLng(34.753069, 137.511873)
,new google.maps.LatLng(34.737865, 137.509636)
,new google.maps.LatLng(34.727685, 137.49405)
,new google.maps.LatLng(34.723343, 137.485002)
];
var line25 = new google.maps.Polyline({path: LineCoordinates25,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line25.setMap(map);
// 愛知環状鉄道線
var LineCoordinates26 = [
new google.maps.LatLng(34.925417, 137.157243)
,new google.maps.LatLng(34.941132, 137.152004)
,new google.maps.LatLng(34.956231, 137.152723)
,new google.maps.LatLng(34.972301, 137.157736)
,new google.maps.LatLng(34.982411, 137.154883)
,new google.maps.LatLng(34.996289, 137.139457)
,new google.maps.LatLng(35.012384, 137.132756)
,new google.maps.LatLng(35.027361, 137.138983)
,new google.maps.LatLng(35.03949, 137.146866)
,new google.maps.LatLng(35.0554, 137.150934)
,new google.maps.LatLng(35.071732, 137.151206)
,new google.maps.LatLng(35.088041, 137.153524)
,new google.maps.LatLng(35.105056, 137.160781)
,new google.maps.LatLng(35.12211, 137.162635)
,new google.maps.LatLng(35.133089, 137.148091)
,new google.maps.LatLng(35.136665, 137.134363)
,new google.maps.LatLng(35.155171, 137.120592)
,new google.maps.LatLng(35.175404, 137.106945)
,new google.maps.LatLng(35.197656, 137.102089)
,new google.maps.LatLng(35.206679, 137.081866)
,new google.maps.LatLng(35.225921, 137.078452)
,new google.maps.LatLng(35.250399, 137.071947)
,new google.maps.LatLng(35.26434, 137.043766)
];
var line26 = new google.maps.Polyline({path: LineCoordinates26,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line26.setMap(map);
// 伊勢鉄伊勢線
var LineCoordinates27 = [
new google.maps.LatLng(34.962721, 136.630168)
,new google.maps.LatLng(34.941514, 136.609662)
,new google.maps.LatLng(34.910952, 136.599031)
,new google.maps.LatLng(34.878513, 136.589009)
,new google.maps.LatLng(34.855104, 136.570038)
,new google.maps.LatLng(34.841053, 136.555154)
,new google.maps.LatLng(34.826288, 136.544077)
,new google.maps.LatLng(34.812167, 136.543033)
,new google.maps.LatLng(34.800444, 136.542492)
,new google.maps.LatLng(34.781015, 136.53099)
,new google.maps.LatLng(34.758717, 136.512126)
,new google.maps.LatLng(34.733995, 136.510242)
];
var line27 = new google.maps.Polyline({path: LineCoordinates27,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line27.setMap(map);
// 信楽高原鐵道
var LineCoordinates28 = [
new google.maps.LatLng(34.952033, 136.154026)
,new google.maps.LatLng(34.915741, 136.087967)
,new google.maps.LatLng(34.911249, 136.084317)
,new google.maps.LatLng(34.893681, 136.073102)
,new google.maps.LatLng(34.885257, 136.06938)
,new google.maps.LatLng(34.87713, 136.061317)
];
var line28 = new google.maps.Polyline({path: LineCoordinates28,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line28.setMap(map);
// 京都丹後鉄道宮豊線
var LineCoordinates29 = [
new google.maps.LatLng(35.53441, 135.199875)
,new google.maps.LatLng(35.557729, 135.182456)
,new google.maps.LatLng(35.55038, 135.151297)
,new google.maps.LatLng(35.543516, 135.126469)
,new google.maps.LatLng(35.579324, 135.093977)
,new google.maps.LatLng(35.625928, 135.07214)
,new google.maps.LatLng(35.667342, 135.025599)
,new google.maps.LatLng(35.650061, 134.972332)
,new google.maps.LatLng(35.630067, 134.928425)
,new google.maps.LatLng(35.60685, 134.919769)
,new google.maps.LatLng(35.60235, 134.894997)
,new google.maps.LatLng(35.552816, 134.835391)
,new google.maps.LatLng(35.544593, 134.813426)
];
var line29 = new google.maps.Polyline({path: LineCoordinates29,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line29.setMap(map);
// 北条鉄道
var LineCoordinates30 = [
new google.maps.LatLng(34.857577, 134.909435)
,new google.maps.LatLng(34.862022, 134.877982)
,new google.maps.LatLng(34.865485, 134.866744)
,new google.maps.LatLng(34.875262, 134.856384)
,new google.maps.LatLng(34.886258, 134.840114)
,new google.maps.LatLng(34.896484, 134.82566)
,new google.maps.LatLng(34.91048, 134.825246)
,new google.maps.LatLng(34.929664, 134.832617)
];
var line30 = new google.maps.Polyline({path: LineCoordinates30,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line30.setMap(map);
// 若桜鉄道若桜線
var LineCoordinates31 = [
new google.maps.LatLng(35.412824, 134.250807)
,new google.maps.LatLng(35.405799, 134.246254)
,new google.maps.LatLng(35.395187, 134.249174)
,new google.maps.LatLng(35.388707, 134.270503)
,new google.maps.LatLng(35.374526, 134.291682)
,new google.maps.LatLng(35.363572, 134.316496)
,new google.maps.LatLng(35.364323, 134.335719)
,new google.maps.LatLng(35.360734, 134.356175)
,new google.maps.LatLng(35.345253, 134.398289)
];
var line31 = new google.maps.Polyline({path: LineCoordinates31,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line31.setMap(map);
// 智頭急行智頭線
var LineCoordinates32 = [
new google.maps.LatLng(34.866413, 134.353083)
,new google.maps.LatLng(34.896828, 134.354083)
,new google.maps.LatLng(34.919603, 134.352516)
,new google.maps.LatLng(34.960153, 134.344237)
,new google.maps.LatLng(35.003579, 134.356538)
,new google.maps.LatLng(35.044206, 134.372079)
,new google.maps.LatLng(35.082257, 134.357271)
,new google.maps.LatLng(35.101685, 134.330389)
,new google.maps.LatLng(35.123827, 134.327553)
,new google.maps.LatLng(35.16094, 134.335754)
,new google.maps.LatLng(35.188901, 134.337011)
,new google.maps.LatLng(35.232581, 134.288644)
,new google.maps.LatLng(35.255641, 134.279083)
,new google.maps.LatLng(35.264992, 134.22559)
];
var line32 = new google.maps.Polyline({path: LineCoordinates32,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line32.setMap(map);
// 井原鉄道
var LineCoordinates33 = [
new google.maps.LatLng(34.673534, 133.738007)
,new google.maps.LatLng(34.643671, 133.733461)
,new google.maps.LatLng(34.632339, 133.715068)
,new google.maps.LatLng(34.626784, 133.692013)
,new google.maps.LatLng(34.621587, 133.661888)
,new google.maps.LatLng(34.61627, 133.61964)
,new google.maps.LatLng(34.629337, 133.590057)
,new google.maps.LatLng(34.60606, 133.542558)
,new google.maps.LatLng(34.596694, 133.507816)
,new google.maps.LatLng(34.592947, 133.468906)
,new google.maps.LatLng(34.587934, 133.450677)
,new google.maps.LatLng(34.581726, 133.433182)
,new google.maps.LatLng(34.564822, 133.402319)
,new google.maps.LatLng(34.552754, 133.38681)
,new google.maps.LatLng(34.537484, 133.378771)
];
var line33 = new google.maps.Polyline({path: LineCoordinates33,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line33.setMap(map);
// 錦川鉄道錦川清流線
var LineCoordinates34 = [
new google.maps.LatLng(34.156612, 132.177321)
,new google.maps.LatLng(34.162639, 132.14764)
,new google.maps.LatLng(34.170107, 132.135704)
,new google.maps.LatLng(34.165957, 132.103363)
,new google.maps.LatLng(34.163368, 132.087084)
,new google.maps.LatLng(34.176011, 132.064519)
,new google.maps.LatLng(34.193637, 132.033385)
,new google.maps.LatLng(34.20961, 132.020852)
,new google.maps.LatLng(34.211028, 132.006289)
,new google.maps.LatLng(34.210487, 131.998656)
,new google.maps.LatLng(34.236368, 131.983923)
,new google.maps.LatLng(34.25714, 131.97669)
,new google.maps.LatLng(34.26475, 131.962944)
];
var line34 = new google.maps.Polyline({path: LineCoordinates34,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line34.setMap(map);
// 阿佐海岸鉄道
var LineCoordinates35 = [
new google.maps.LatLng(33.606379, 134.350805)
,new google.maps.LatLng(33.593453, 134.351999)
,new google.maps.LatLng(33.566949, 134.300741)
,new google.maps.LatLng(33.547238, 134.288242)
];
var line35 = new google.maps.Polyline({path: LineCoordinates35,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line35.setMap(map);
// 土佐くろしお鉄道中村線
var LineCoordinates36 = [
new google.maps.LatLng(33.212656, 133.137285)
,new google.maps.LatLng(33.18807, 133.105937)
,new google.maps.LatLng(33.132961, 133.116316)
,new google.maps.LatLng(33.105169, 133.098519)
,new google.maps.LatLng(33.080905, 133.101517)
,new google.maps.LatLng(33.064604, 133.106582)
,new google.maps.LatLng(33.05643, 133.097452)
,new google.maps.LatLng(33.038914, 133.071258)
,new google.maps.LatLng(33.043013, 133.056112)
,new google.maps.LatLng(33.040407, 133.046482)
,new google.maps.LatLng(33.039516, 133.029856)
,new google.maps.LatLng(33.023866, 133.011636)
,new google.maps.LatLng(33.008912, 132.986967)
,new google.maps.LatLng(32.985744, 132.962036)
,new google.maps.LatLng(32.984641, 132.943927)
];
var line36 = new google.maps.Polyline({path: LineCoordinates36,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line36.setMap(map);
// 土佐くろしお鉄道阿佐線
var LineCoordinates37 = [
new google.maps.LatLng(33.579245, 133.645479)
,new google.maps.LatLng(33.57454, 133.651415)
,new google.maps.LatLng(33.57073, 133.670627)
,new google.maps.LatLng(33.561649, 133.698366)
,new google.maps.LatLng(33.546089, 133.710352)
,new google.maps.LatLng(33.539893, 133.721859)
,new google.maps.LatLng(33.539152, 133.73723)
,new google.maps.LatLng(33.534347, 133.754506)
,new google.maps.LatLng(33.518015, 133.790772)
,new google.maps.LatLng(33.51784, 133.809739)
,new google.maps.LatLng(33.516, 133.825026)
,new google.maps.LatLng(33.506069, 133.864204)
,new google.maps.LatLng(33.502635, 133.891265)
,new google.maps.LatLng(33.504363, 133.897671)
,new google.maps.LatLng(33.504738, 133.906538)
,new google.maps.LatLng(33.490952, 133.929158)
,new google.maps.LatLng(33.458267, 133.94837)
,new google.maps.LatLng(33.446036, 133.966263)
,new google.maps.LatLng(33.443359, 133.984151)
,new google.maps.LatLng(33.4303, 134.008207)
,new google.maps.LatLng(33.425187, 134.018269)
];
var line37 = new google.maps.Polyline({path: LineCoordinates37,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line37.setMap(map);
// 平成筑豊鉄道伊田線
var LineCoordinates38 = [
new google.maps.LatLng(33.747461, 130.725015)
,new google.maps.LatLng(33.738729, 130.724903)
,new google.maps.LatLng(33.727366, 130.72455)
,new google.maps.LatLng(33.722017, 130.735291)
,new google.maps.LatLng(33.720992, 130.742871)
,new google.maps.LatLng(33.708074, 130.759328)
,new google.maps.LatLng(33.700112, 130.765567)
,new google.maps.LatLng(33.69206, 130.768675)
,new google.maps.LatLng(33.687316, 130.771105)
,new google.maps.LatLng(33.682805, 130.776491)
,new google.maps.LatLng(33.672435, 130.789172)
,new google.maps.LatLng(33.664744, 130.799177)
,new google.maps.LatLng(33.660436, 130.802697)
,new google.maps.LatLng(33.651965, 130.807016)
,new google.maps.LatLng(33.642046, 130.817688)
];
var line38 = new google.maps.Polyline({path: LineCoordinates38,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line38.setMap(map);
// 甘木鉄道甘木線
var LineCoordinates39 = [
new google.maps.LatLng(33.420815, 130.532537)
,new google.maps.LatLng(33.412412, 130.539573)
,new google.maps.LatLng(33.397555, 130.552994)
,new google.maps.LatLng(33.398452, 130.560727)
,new google.maps.LatLng(33.399654, 130.582047)
,new google.maps.LatLng(33.404237, 130.594426)
,new google.maps.LatLng(33.40774, 130.599153)
,new google.maps.LatLng(33.414076, 130.609964)
,new google.maps.LatLng(33.413868, 130.618768)
,new google.maps.LatLng(33.414218, 130.634019)
,new google.maps.LatLng(33.419295, 130.653325)
];
var line39 = new google.maps.Polyline({path: LineCoordinates39,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line39.setMap(map);
// 松浦鉄道
var LineCoordinates40 = [
new google.maps.LatLng(33.183779, 129.881787)
,new google.maps.LatLng(33.188949, 129.866336)
,new google.maps.LatLng(33.195093, 129.85542)
,new google.maps.LatLng(33.201898, 129.850559)
,new google.maps.LatLng(33.208839, 129.8502)
,new google.maps.LatLng(33.221615, 129.850119)
,new google.maps.LatLng(33.2293, 129.849353)
,new google.maps.LatLng(33.236927, 129.850502)
,new google.maps.LatLng(33.251856, 129.854519)
,new google.maps.LatLng(33.267329, 129.863812)
,new google.maps.LatLng(33.271862, 129.876344)
,new google.maps.LatLng(33.277964, 129.846041)
,new google.maps.LatLng(33.284513, 129.835906)
,new google.maps.LatLng(33.291426, 129.826696)
,new google.maps.LatLng(33.299447, 129.816699)
,new google.maps.LatLng(33.313973, 129.811763)
,new google.maps.LatLng(33.323013, 129.807296)
,new google.maps.LatLng(33.335287, 129.792524)
,new google.maps.LatLng(33.338083, 129.790271)
,new google.maps.LatLng(33.348357, 129.771909)
,new google.maps.LatLng(33.353784, 129.761685)
,new google.maps.LatLng(33.358819, 129.736192)
,new google.maps.LatLng(33.352223, 129.727507)
,new google.maps.LatLng(33.344273, 129.707906)
,new google.maps.LatLng(33.347361, 129.68607)
,new google.maps.LatLng(33.365947, 129.662502)
,new google.maps.LatLng(33.355798, 129.638657)
,new google.maps.LatLng(33.357706, 129.623148)
,new google.maps.LatLng(33.355647, 129.61104)
,new google.maps.LatLng(33.362532, 129.582595)
,new google.maps.LatLng(33.34514, 129.590475)
,new google.maps.LatLng(33.316738, 129.613788)
,new google.maps.LatLng(33.306809, 129.627081)
,new google.maps.LatLng(33.297507, 129.63723)
,new google.maps.LatLng(33.282623, 129.667286)
,new google.maps.LatLng(33.280808, 129.683509)
,new google.maps.LatLng(33.266395, 129.685271)
,new google.maps.LatLng(33.261198, 129.671059)
,new google.maps.LatLng(33.247775, 129.656536)
,new google.maps.LatLng(33.236701, 129.646859)
,new google.maps.LatLng(33.222005, 129.641643)
,new google.maps.LatLng(33.206498, 129.65146)
,new google.maps.LatLng(33.201565, 129.651796)
,new google.maps.LatLng(33.192577, 129.65714)
,new google.maps.LatLng(33.189461, 129.667187)
,new google.maps.LatLng(33.195205, 129.670453)
,new google.maps.LatLng(33.207029, 129.682099)
,new google.maps.LatLng(33.20821, 129.687448)
,new google.maps.LatLng(33.213348, 129.701741)
,new google.maps.LatLng(33.211712, 129.708527)
,new google.maps.LatLng(33.208896, 129.721992)
,new google.maps.LatLng(33.205816, 129.727028)
,new google.maps.LatLng(33.196575, 129.722898)
,new google.maps.LatLng(33.18717, 129.720446)
,new google.maps.LatLng(33.172297, 129.722668)
,new google.maps.LatLng(33.170902, 129.720596)
,new google.maps.LatLng(33.163868, 129.725667)
];
var line40 = new google.maps.Polyline({path: LineCoordinates40,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line40.setMap(map);
// 南阿蘇鉄道
var LineCoordinates41 = [
new google.maps.LatLng(32.87757, 130.965403)
,new google.maps.LatLng(32.854287, 131.003945)
,new google.maps.LatLng(32.847818, 131.010139)
,new google.maps.LatLng(32.844413, 131.024654)
,new google.maps.LatLng(32.83407, 131.040264)
,new google.maps.LatLng(32.827381, 131.053594)
,new google.maps.LatLng(32.822368, 131.084345)
,new google.maps.LatLng(32.822222, 131.091667)
,new google.maps.LatLng(32.817613, 131.109621)
,new google.maps.LatLng(32.81954, 131.122561)
];
var line41 = new google.maps.Polyline({path: LineCoordinates41,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line41.setMap(map);
// 肥薩おれんじ鉄道線
var LineCoordinates42 = [
new google.maps.LatLng(32.503805, 130.621609)
,new google.maps.LatLng(32.475546, 130.612588)
,new google.maps.LatLng(32.436163, 130.581635)
,new google.maps.LatLng(32.420111, 130.550019)
,new google.maps.LatLng(32.392952, 130.5186)
,new google.maps.LatLng(32.363202, 130.506705)
,new google.maps.LatLng(32.350698, 130.504778)
,new google.maps.LatLng(32.327997, 130.488766)
,new google.maps.LatLng(32.302447, 130.497277)
,new google.maps.LatLng(32.271231, 130.504667)
,new google.maps.LatLng(32.232417, 130.450165)
,new google.maps.LatLng(32.210825, 130.428893)
,new google.maps.LatLng(32.204919, 130.395763)
,new google.maps.LatLng(32.165517, 130.374391)
,new google.maps.LatLng(32.122269, 130.342139)
,new google.maps.LatLng(32.089275, 130.357803)
,new google.maps.LatLng(32.075398, 130.339286)
,new google.maps.LatLng(32.062536, 130.301632)
,new google.maps.LatLng(32.063238, 130.267214)
,new google.maps.LatLng(32.060949, 130.217485)
,new google.maps.LatLng(32.022969, 130.196276)
,new google.maps.LatLng(31.973962, 130.207038)
,new google.maps.LatLng(31.949414, 130.219072)
,new google.maps.LatLng(31.916153, 130.223658)
,new google.maps.LatLng(31.892545, 130.220649)
,new google.maps.LatLng(31.854556, 130.233533)
,new google.maps.LatLng(31.83537, 130.292406)
,new google.maps.LatLng(31.813726, 130.31213)
];
var line42 = new google.maps.Polyline({path: LineCoordinates42,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line42.setMap(map);
// くま川鉄道線
var LineCoordinates43 = [
new google.maps.LatLng(32.216142, 130.753797)
,new google.maps.LatLng(32.218429, 130.769626)
,new google.maps.LatLng(32.207284, 130.795307)
,new google.maps.LatLng(32.202271, 130.808839)
,new google.maps.LatLng(32.214551, 130.839915)
,new google.maps.LatLng(32.224256, 130.858888)
,new google.maps.LatLng(32.231011, 130.873629)
,new google.maps.LatLng(32.236191, 130.893783)
,new google.maps.LatLng(32.250095, 130.912947)
,new google.maps.LatLng(32.255906, 130.921768)
,new google.maps.LatLng(32.262903, 130.933362)
,new google.maps.LatLng(32.272211, 130.950765)
,new google.maps.LatLng(32.275372, 130.966275)
,new google.maps.LatLng(32.281389, 130.980094)
];
var line43 = new google.maps.Polyline({path: LineCoordinates43,
strokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2});
line43.setMap(map);


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

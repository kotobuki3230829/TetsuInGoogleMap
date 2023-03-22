from bs4 import BeautifulSoup
from urllib.request import urlopen
import urllib.parse
from difflib import SequenceMatcher


lineList=[
     "道南いさりび鉄道線"      ,"三陸鉄道リアス線"      ,"いわて銀河鉄道線"    ,"秋田内陸縦貫鉄道",
     "由利高原鉄道鳥海山ろく線","山形鉄道フラワー長井線","阿武隈急行"          ,"会津鉄道会津線",
     "野岩鉄道会津鬼怒川線"    ,"わたらせ渓谷鐵道線"    ,"真岡鐵道"            ,"鹿島臨海鉄道線",
     "いすみ鉄道"              ,"北越急行ほくほく線"    ,"しなの鉄道線"        ,"北しなの線",
     "妙高はねうまライン"      ,"日本海ひすいライン"    ,"あいの風とやま鉄道線","IRいしかわ鉄道線",
     "のと鉄道七尾線"          ,"明知鉄道"              ,"長良川鉄道越美南線"  ,"樽見鉄道樽見",
     "天竜浜名湖鉄道"          ,"愛知環状鉄道線"        ,"伊勢鉄伊勢線"        ,"信楽高原鐵道",
     "京都丹後鉄道宮豊線"      ,"北条鉄道"              ,"若桜鉄道若桜線"      ,"智頭急行智頭線",
     "井原鉄道"                ,"錦川鉄道錦川清流線"    ,"阿佐海岸鉄道"        ,"土佐くろしお鉄道中村線",
     "土佐くろしお鉄道阿佐線"  ,"平成筑豊鉄道伊田線"    ,"甘木鉄道甘木線"      ,"松浦鉄道",
     "南阿蘇鉄道"              ,"肥薩おれんじ鉄道線"    ,"くま川鉄道線"
     ]
# たびよみ　に記載の線名・駅名から駅の緯度・経度を求める
def getPlace(line,no):
  h_line = urllib.parse.quote(line)
  query="http://express.heartrails.com/api/xml?method=getStations&line="+h_line
  html = urlopen(query)
  data = html.read()
  html = data.decode('utf-8')
  soup = BeautifulSoup(html, 'html.parser')
  stnList=soup.find_all("station")
  stnLlist=[]
  for stn in stnList:
    xx=stn.text.split('\n')
    stnLlist.append(xx)
    #print(xx)
  startIndex=0
  for stn in stnLlist:
    if stn[7]=="":
      break
    startIndex+=1
  idx=startIndex

  rlist=[]
  while True:
    #print(stnLlist[idx][1],stnLlist[idx][3],stnLlist[idx][4],stnLlist[idx][5],stnLlist[idx][7],stnLlist[idx][8])
    rlist.append(f'new google.maps.LatLng({stnLlist[idx][5]}, {stnLlist[idx][4]})')
    if stnLlist[idx][8]=="":
      break
    nidx=0
    for nst in stnLlist:
      if stnLlist[idx][8]==nst[1]:
        break
      nidx+=1
    idx=nidx
  return rlist
##########
#  main()
##########
file=open('Line.js','w',encoding='UTF-8')
ii=1
for line in lineList:
    file.write(f'// {line}\n')
    file.write(f'var LineCoordinates{ii} = [\n')
    co=getPlace(line,ii)
    i=0
    for pnt in co:
      if i>0:
        file.write(',')
      file.write(f'{pnt}\n')
      i+=1
    file.write('];\n')
    file.write(f'var line{ii} = new google.maps.Polyline({{path: LineCoordinates{ii},\nstrokeColor: "#FF0000",strokeOpacity: 1.0,strokeWeight: 2}});\n')
    file.write(f'line{ii}.setMap(map);\n')
    ii+=1
file.close()

        

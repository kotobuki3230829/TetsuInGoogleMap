from bs4 import BeautifulSoup
from urllib.request import urlopen
import urllib.parse
from difflib import SequenceMatcher

# たびよみ　に記載の線名・駅名から駅の緯度・経度を求める
def getPlace(line,station):
  h_station = urllib.parse.quote(station.strip('駅'))
  query="http://express.heartrails.com/api/xml?method=getStations&name="+h_station
  html = urlopen(query)
  data = html.read()
  html = data.decode('utf-8')
  soup = BeautifulSoup(html, 'html.parser')
  x=soup.find_all("x")
  y=soup.find_all("y")
  xline=soup.find_all("line")
  pref=soup.find_all("prefecture")
  idx=0
  for ix in x:
    # 線名は類似度の高いものを選択
    rt=SequenceMatcher(None, line, xline[idx].text).ratio()
    if idx==0:
      rx=x[idx]
      ry=y[idx]
      rl=xline[idx]
      rp=pref[idx]
    else:
      if rt>prt:
        rx=x[idx]
        ry=y[idx]
        rl=xline[idx]
        rp=pref[idx]
    prt=rt
    idx+=1
  return rx.text,ry.text,rl.text,rp.text
##########
# たびよみ　のこのページを起点にスクレイピング
##########
html = urlopen("https://tabiyomi.yomiuri-ryokou.co.jp/news/000548.html")
data = html.read()
html = data.decode('utf-8')
# HTMLを解析
soup = BeautifulSoup(html, 'html.parser')
# 解析したHTMLから任意の部分のみを抽出
links = soup.find_all("p")
ii=0
print("const TIStn = [")
for a in links:
    text = a.text
    if '駅' in text and text[0]=='【' :
      elm=text.split()
      line=elm[0].strip('【】')
      stns=elm[1].replace('駅（','駅')
      stns=stns.replace('デンタルサポート','')
      stns2=[xx[xx.find('（')+1:xx.find('駅')+1] for xx in stns.split('、')]
      url=str(a.a)
      url=url[url.find("http"):url.find("/\"")+1]
      for station in stns2:
        x,y,l,p=getPlace(line,station)
        print(f'    [ {{lat: {y}, lng: {x} }}, "{station}","{line}","{l}","{p}","{url}","コメント","#FF0000"],')
        #print(f'    [{{ lat: {y}, lng: {x} }}, "{station}","{line}","{l}","{p}","コメント","#FF0000"],')
print("];")
        

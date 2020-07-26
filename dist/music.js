const ap = new APlayer({
	    container: document.getElementById('aplayer'),
	    fixed: true,
	    autoplay: false,
	    audio: [
		    	  {
				          name: '少年の夜',
				          artist: 'Bassy',
				          url: 'http://music.163.com/song/media/outer/url?id=699916.mp3',
				          cover: 'http://p2.music.126.net/67mTmtrtN1rIdsiAV_YfvA==/923589767332111.jpg',
				        },
		          {
				          name: "Lazy Afternoon",
				          artist: 'ElyouBeats',
				          url: 'http://music.163.com/song/media/outer/url?id=29049489.mp3',
				          cover: 'http://p2.music.126.net/C_I6JDY4WQItRxlAuUyA2g==/3228166139854203.jpg',
				        },
		          {
				          name: 'Neonland',
				          artist: 'Detektivbyrån',
				          url: 'http://music.163.com/song/media/outer/url?id=19648867.mp3',
				          cover: 'http://p2.music.126.net/IHKpTJ1z0SDahH2kChYz8g==/109951163110397875.jpg',
				        },
		          {
				          name: 'Late Night Bus Rlde',
				          artist: 'ElyouBeats',
				          url: 'http://music.163.com/song/media/outer/url?id=27707271.mp3',
				          cover: 'http://p1.music.126.net/HN65W22aJd-6zieATKLiVA==/5754843859868039.jpg',
				        },
		    	  {
				          name: '蝉鸣之夏',
				          artist: '清风至Verse',
				          url: 'http://music.163.com/song/media/outer/url?id=864634875.mp3',
				          cover: 'http://p2.music.126.net/8Fx2oXWF0nYlE5l9QWRRTw==/109951163393561441.jpg',
				        },
		    	  {
				          name: 'Upon My Soul',
				          artist: 'Organic Stereo',
				          url: 'http://music.163.com/song/media/outer/url?id=486302.mp3',
				          cover: 'http://p1.music.126.net/7Z-KzV2Rtfb5RX-lBrIUWQ==/109951164075810813.jpg',
				        },
		    	  {
				          name: 'いのちの名前',
				          artist: '広橋真紀子',
				          url: 'http://music.163.com/song/media/outer/url?id=578090.mp3',
				          cover: 'http://p2.music.126.net/EjmtoVVacC8hpP2Tnpeqiw==/109951163338317773.jpg',
				        },
   				  {
				          name: 'key Rewrite op-Philosophyz',
				          artist: '同人音乐',
				          url: '/music/【钢琴】key Rewrite op-Philosophyz 哲♂学.m4a',
				          cover: 'https://y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000',
				        },
				  {
				          name: 'Twinkle Train Take Us Home',
				          artist: '麗美 (れいみぃ)',
				          url: 'http://music.163.com/song/media/outer/url?id=4924847',
				          cover: 'http://p1.music.126.net/U9gT1rPyWBnKKC49SN_eRQ==/5771336534393877.jpg',
				        },
				  {
				   		  name: 'Bad Apple!! (弦楽合奏モノクロ版)',
				   		  artist: '最新热歌慢摇114',
				   		  url: 'http://music.163.com/song/media/outer/url?id=409941020',
				   		  cover: 'http://p2.music.126.net/xXXsTafARePvyQUDb6q9HQ==/3386495814644488.jpg',
				  		
				   		},
				  {
				   		  name: 'V.A.-樱花祭',
				   		  artist: '樱花祭',
				   		  url: 'http://music.163.com/song/media/outer/url?id=1435247742.mp3',
				   		  cover: 'http://p2.music.126.net/Iq046W9ZRZRLdk0-hRzSoA==/109951164852202041.jpg',
				   		},
				  {
				   		  name: '红叶【从晴朗的朝色泛起之际开始】by Piano',
				   		  artist: '演奏曲',
				   		  url: 'https://raw.githubusercontent.com/whitedays2007/music_share/master/list_music/%E6%BC%94%E5%A5%8F%E6%9B%B2%20-%20%E7%BA%A2%E5%8F%B6%E3%80%90%E4%BB%8E%E6%99%B4%E6%9C%97%E7%9A%84%E6%9C%9D%E8%89%B2%E6%B3%9B%E8%B5%B7%E4%B9%8B%E9%99%85%E5%BC%80%E5%A7%8B%E3%80%91by%20Piano.mp3',
				   		  cover: 'https://y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000',
						},
				  {
						  name: "[推广] dimeman 后期ACG曲目钢琴演奏 全收录",
						  artist: "演奏曲",
						  url: "https://raw.githubusercontent.com/whitedays2007/music_share/master/list_music/%E6%BC%94%E5%A5%8F%E6%9B%B2%20-%20%5B%E6%8E%A8%E5%B9%BF%5D%20dimeman%20%E5%90%8E%E6%9C%9FACG%E6%9B%B2%E7%9B%AE%E9%92%A2%E7%90%B4%E6%BC%94%E5%A5%8F%20%E5%85%A8%E6%94%B6%E5%BD%95.mp3",
						  cover: "https://y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000",
						},
				  {
						  name: "Restoration_～沈黙の空～_【Baldr_Sky】Piano_ver",
						  artist: "同人音乐",
						  url: 'https://raw.githubusercontent.com/whitedays2007/music_share/master/list_music/Restoration_%EF%BD%9E%E6%B2%88%E9%BB%99%E3%81%AE%E7%A9%BA%EF%BD%9E_%E3%80%90Baldr_Sky%E3%80%91Piano_ver.mp3',
						  cover: "https://i0.hdslb.com/bfs/archive/020e62b47483930c9c6f8f65dba7f575ae0a4ef5.jpg",
				 		}, 
		        ]
});



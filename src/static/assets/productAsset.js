/*
[TEMPLATE]
  {
    title: '',
    description: '',
    categorys: [],
    tags: [],
    author: [],
    quality: 1,
    // ADDITION
    imgUrl: '',
    date: '',
    url: '',
    githubUrl: '',
    attention: '',
  },

[PARAMETER]
quality:
  1.low, 2.middle, 3.high

author:
  1.rias-z, 2.atsuo1203
*/


export const productAsset = [
  {
    title: 'dbshive.com',
    description: 'ポートフォリオサイト第一弾',
    categorys: ['web'],
    tags: ['react'],
    author: [1],
    quality: 2,
    imgUrl: 'dbshive.com.jpg',
    date: '2018/05',
    githubUrl: 'https://github.com/rias-z/dbshive.com',
  },
  {
    title: 'TearChat',
    description:
      'クトゥルフTRPG用の専用マルチチャット\n'
      + '(旧CoCRevolution)\n'
      + 'オンラインセッションTRPG中にチャット(discord)、ダイスツール、キャラクターシートと別々の'
      + 'サイトのものを見るのは大変'
      + 'なので、それらを一括にまとめたwebサービスを作成した\n'
      + 'カラム（チャットのチャンネル、キャラクターの情報）を表示/非表示、移動したりすることができる\n'
      + 'react/redux漬けの3ヶ月',
    categorys: ['web'],
    tags: ['react', 'redux', 'express', 'socket.io', 'mongoDB'],
    author: [1],
    quality: 3,
    imgUrl: 'tearchat.jpg',
    date: '2018/05',
    url: 'http://tearchat.dbshive.com',
    attention:
      '※ ログインには管理者の承認が必要',
  },
  {
    title: '万丈ジェネレーター',
    description: '万丈構文を作成',
    categorys: ['web'],
    tags: ['react'],
    author: [2],
    quality: 1,
    imgUrl: 'banjo_generator.jpg',
    date: '2018/05',
    url: 'https://atsuo1203.github.io/my_generator/',
    githubUrl: 'https://github.com/atsuo1203/my_generator',
  },
  {
    title: '輝夜月ちゃん追跡bot',
    description: '任意のコメントに対して任意の返信',
    categorys: ['sns'],
    tags: ['python'],
    author: [2],
    quality: 1,
    date: '2018/03',
  },
  {
    title: 'AnimalSearch',
    description: '動物の学名を検索できます！',
    categorys: ['web'],
    tags: ['react', 'flask'],
    author: [2],
    quality: 2,
    imgUrl: 'animal_search.jpg',
    date: '2017/12',
    url: 'https://atsuo1203.github.io/AnimalSearch-front/',
    githubUrl: 'https://github.com/atsuo1203/AnimalSearch-front',
  },
  {
    title: '性格診断メーカー',
    description:
      '@atsuo1203のpython+django勉強で作成したwebアプリ\n'
      + '回答者の質問にいくつか答えて、その結果から性格を診断するのサービス\n'
      + 'ツイートもできる',
    categorys: ['web'],
    tags: ['python', 'django'],
    author: [1, 2],
    quality: 1,
    imgUrl: 'cymatic_scan_app.jpg',
    date: '2017/11',
    githubUrl: 'https://github.com/MuslePainBrothers/CymaticScanApp',
  },
  {
    title: 'SSConnect',
    description:
      'SSにタグをつけて管理\n'
      + 'サーバ側を担当',
    categorys: ['web', 'ios'],
    tags: ['rails'],
    author: [2],
    quality: 3,
    imgUrl: 'ssconnect.jpg',
    date: '2017/11',
    githubUrl: 'https://github.com/SSconnect/SSConnectAPI',
  },
  {
    title: 'キズナアイちゃん目覚ましアラーム',
    description: 'キズナアイちゃんが朝起こしてくれます',
    categorys: ['ios'],
    tags: ['swift'],
    author: [2],
    quality: 2,
    imgUrl: 'kizunaai_alerm.jpg',
    date: '2017/10',
  },
  {
    title: '良性ページ分類.py',
    description:
      'htmlを形態素解析+機械学習でいい感じのページを予測するスクリプト\n'
      + '「いい感じ」とは，情報が分散していない，特定の分野のページと設定して，pythonでスクリプト作成\n'
      + 'ex) まとめサイトなどは除外され、サッカーショップなどのある特定分野のサイトが該当する\n'
      + '機械学習インターンで，色々機械学習についてのノウハウを学ぶことのできるいい機会だった',
    categorys: ['machine-learning'],
    tags: ['python'],
    author: [1],
    quality: 3,
    date: '2017/07',
  },
  {
    title: 'WordResearcher',
    description:
      'テスト対策用検索Webサービス\n'
      + '大学の授業内容(紙媒体)の内容を事前にこのサービスに入力して，検索によって素早くしりたい'
      + '情報を知ることが目的のサービス'
      + 'しかし、DBにデータを入れなければいけない面倒臭さから頓挫',
    categorys: ['web'],
    tags: ['django', 'python'],
    author: [1],
    quality: 1,
    date: '2017/07',
    githubUrl: 'https://github.com/rias-z/WordResearcher',
  },
  {
    title: '北千住飲食店閉店情報',
    description: '北千住の飲食店情報を取得できる',
    categorys: ['web'],
    tags: ['react'],
    author: [2],
    quality: 1,
    imgUrl: 'kitasennju_shop.jpg',
    date: '2017/06',
    githubUrl: 'https://github.com/atsuo1203/eat_info',
  },
  {
    title: 'atsuoのgithub.io',
    description: 'atsuo1203のホームページ',
    categorys: ['web'],
    tags: ['react'],
    author: [2],
    quality: 1,
    imgUrl: 'atsuo1203_homepage.jpg',
    date: '2017/06',
    url: 'https://atsuo1203.github.io/',
    githubUrl: 'https://github.com/atsuo1203/atsuo1203.github.io',
  },
  {
    title: '† WhiteAbyss †',
    description:
      '白い深淵〜WhiteAbyss\n'
      + 'ふざけた名前は置いておいて、ブラウザの脆弱性を診断してくれるWebサービスと内容は割とまとも\n'
      + 'webサービスにアクセスして診断ボタンを押すだけの超初心者仕様\n'
      + '大学のセキュリティ研究室メンバー(3人)で作成した\n'
      + '自分はフロントとバックを主に担当\nExploit-DBという脆弱性情報ライブラリを利用\n',
    categorys: ['web', 'security'],
    tags: ['python', 'django', 'exploit-db'],
    author: [1],
    quality: 2,
    imgUrl: 'white_abyss.jpg',
    date: '2017/05',
  },
  {
    title: 'TwitterGeoGraph',
    description:
      'twitterを用いた位置情報Webアプリ\n'
      + 'twiterで「I\'m at ~」とかの位置情報を含んだツイートでなんかできないかと思って'
      + '作ったwebサービス\n'
      + 'GoogleMapAPIとtwitterAPI辺りを勉強して利用した\n'
      + 'まだ未完成なので、いつか続きを作るつもり',
    categorys: ['web', 'sns'],
    tags: ['python', 'django', 'twitter'],
    author: [1],
    quality: 1,
    imgUrl: 'twitter_geo_graph.jpg',
    date: '2017/04',
    githubUrl: 'https://github.com/MuslePainBrothers/TwitterGeoGraph',
  },
  {
    title: 'StudyRounder',
    description:
      'みんなで楽しく勉強サイト\n'
      + '管理者がいくつかの課題を作成して、参加者が課題をこなしていく形式\n'
      + '課題にポイントがついており、参加者同士で競いながら作業できる\n'
      + '参加者は、全員の全体/カテゴリーごとの達成率、課題の達成/わからない/未着手状態がわかる\n'
      + 'セキュリティのCTFスコアサーバを勉強版にした感じ',
    categorys: ['web'],
    tags: ['python', 'django'],
    author: [1],
    quality: 2,
    imgUrl: 'study_rounder.jpg',
    date: '2017/03',
    githubUrl: 'https://github.com/rias-z/StudyRounder',
  },
  {
    title: 'CoCRevolution',
    description:
      'electron + node.js + socket.ioで作るリアルタイムチャットアプリ\n'
      + 'TearChatの原点のwebアプリ\n'
      + 'なぜかelectronでやろうということになった',
    categorys: ['web'],
    tags: ['electron', 'node.js', 'socket.io'],
    author: [1],
    imgUrl: 'crevo.jpg',
    quality: 1,
    date: '2017/01',
  },
  {
    title: 'IllustPedia',
    description:
      'イラスト検索Webサービス\n'
      + 'よく「ビル　夕日　俯瞰」などでgoogleやpixivで画像検索してもいい資料が見つからないことが多い\n'
      + 'ユーザが画像に対してタグをつけてサイトに投稿することにより、ワード検索とタグ検索で資料にしたい画像を効率的に'
      + '集めることができる',
    categorys: ['web'],
    tags: ['python', 'django'],
    author: [1],
    quality: 2,
    date: '2017/01',
    githubUrl: 'https://github.com/rias-z/illustpedia',
  },
  {
    title: '進撃の車',
    description: '車を使って原始人から逃げろ！',
    categorys: ['game'],
    tags: ['unity'],
    author: [2],
    quality: 1,
    imgUrl: 'singeki_car.jpg',
    date: '2016',
  },
  {
    title: 'Prabo',
    description: '研究室タスク管理',
    categorys: ['ios'],
    tags: ['swift'],
    author: [2],
    quality: 2,
    imgUrl: 'prabo.jpg',
    date: '2016',
    githubUrl: 'https://github.com/prabo/init-iOS',
  },
  {
    title: 'ぐるマッチ',
    description:
      '大学のグループ課題(5人)で作ったwebサービス\n'
      + 'イベントを企画する際の集客や出欠、予算、お知らせなどを管理する支援システム\n'
      + 'この制作を通じて、gitなどの集団開発のノウハウを学ぶことができた\n'
      + '自分はサーバサイド(django)を担当した',
    categorys: ['web'],
    tags: ['django', 'python'],
    author: [1],
    quality: 3,
    imgUrl: 'gurumatti.jpg',
    date: '2016/07',
    url: 'https://gurumatti.herokuapp.com/',
    attention:
      '※ 現在は店舗検索機能が利用できない\n'
      + '※ 現在、公開されているサイトはデモ用なので完全には利用できない',
  },
  {
    title: '8lect',
    description:
      'レーザを反射で超エキサイティン！！\n'
      + '指で反射オブジェクトを移動させて、レーザを赤い球に当てればクリアというスマホゲーム\n'
      + 'unityで作った\n'
      + 'タイトルは8回しか反射(reflect)できないから、という安易なネーミング',
    categorys: ['game'],
    tags: ['unity'],
    author: [1],
    quality: 2,
    imgUrl: '8lect.jpg',
    date: '2015/10',
  },
]

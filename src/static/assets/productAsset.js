/*
[TEMPLATE]
  {
    title: '',
    description: '',
    categorys: [],
    tags: [],
    collaborator: [],
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

  collaborator:
    1. atsuo1203
*/


export const productAsset = [
  {
    title: '学生限定掲示板',
    description:
      '学生限定の掲示板\n'
      + '学生のメールアドレスを使用することによって本サービスに登録することができる\n'
      + '学生のみの2chあったら面白そう(by @atsuo1203)という発想の元，'
      + '開発期間は1ヶ月と設定して作業を分担して作成した\n'
      + '@atsuo1203が企画，フロント側を担当\n'
      + '自分はサーバ側を担当\n'
      + 'RestAPIとしてのテストを初めてしっかり作成した',
    categorys: ['web', 'sns'],
    tags: ['react', 'redux', 'redux-saga', 'flask', 'mysql'],
    collaborator: [2],
    quality: 2,
    imgUrl: 'student_2ch.jpg',
    date: '2018/06',
    attention:
      '※ 現在公開準備中',
  },
  {
    title: 'dbshive.com',
    description: 'ポートフォリオサイト第一弾',
    categorys: ['web'],
    tags: ['react'],
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
    quality: 3,
    imgUrl: 'tearchat.jpg',
    date: '2018/05',
    url: 'http://tearchat.dbshive.com',
    attention:
      '※ ログインには管理者の承認が必要',
  },
  {
    title: '性格診断メーカー',
    description:
      '@atsuo1203のpython+django勉強で作成したwebアプリ\n'
      + '回答者の質問にいくつか答えて、その結果から性格を診断するのサービス\n'
      + 'ツイートもできる',
    categorys: ['web'],
    tags: ['python', 'django'],
    collaborator: [2],
    quality: 1,
    imgUrl: 'cymatic_scan_app.jpg',
    date: '2017/11',
    githubUrl: 'https://github.com/MuslePainBrothers/CymaticScanApp',
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
    quality: 1,
    date: '2017/07',
    githubUrl: 'https://github.com/rias-z/WordResearcher',
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
    quality: 2,
    date: '2017/01',
    githubUrl: 'https://github.com/rias-z/illustpedia',
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
    quality: 2,
    imgUrl: '8lect.jpg',
    date: '2015/10',
  },
]

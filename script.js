// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "kannsei",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "kannsei",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実行します。準備ができたら, 下の[フルスクリーンを許可する]を押してください。",
          "hint": "フルスクリーンを許可する",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "title": "本実験の内容",
              "content": "本実験の目的は, 物事を瞬時に判断するスピードを測定することです。"
            },
            {
              "required": true,
              "type": "text",
              "title": "参加にあたって",
              "content": "実験内容は, 記事を1ページ読んで頂いた後, 画面に提示された刺激のカテゴリー分け課題を行って頂きます。最後に簡単なアンケートに答えて頂き、実験は終了します。\n所要時間は20分程度です。"
            },
            {
              "required": true,
              "type": "text",
              "content": "今回の実験によって得られたデータは全て統計的に処理すること, 本実験以外の目的には使用しないこと, プライバシーの保護には十分配慮することを厳守いたします。"
            },
            {
              "required": true,
              "type": "text",
              "content": "万が一, 回答をやめたくなった場合は回答を中断することができ, またそれにより不利益が発生することもございません。その時点までに収集されたデータは本実験の終了後, 速やかに破棄いたします。"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "上記の説明をよく読み，理解した上で，実験への参加に同意します。",
                  "coding": "informedConsent"
                }
              ],
              "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをして頂き、「次へ」ボタンを押してください。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
              "name": "esc"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "imformedConsent"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "事前に送られた実験依頼メールに記載してあります”割り当て番号”を入力してください。",
              "content": ""
            },
            {
              "required": true,
              "type": "input",
              "attributes": {
                "type": "number",
                "min": "1000",
                "max": "10000"
              },
              "help": "”割り当て番号”を半角数字で入力してください",
              "label": "割り当て番号",
              "name": "number"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "number"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "年齢を入力してください。"
            },
            {
              "required": true,
              "type": "input",
              "label": "年齢",
              "attributes": {
                "type": "number",
                "min": "18",
                "max": "99"
              },
              "help": "年齢を半角数字で入力してください",
              "name": "age"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "age"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "男性",
                  "coding": "3"
                },
                {
                  "label": "女性",
                  "coding": "2"
                },
                {
                  "label": "どちらでもない",
                  "coding": "1"
                }
              ],
              "label": "性別についてあてはまるものをクリックしてください。",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "gender"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "はじめに",
              "content": "はじめに,  次の画面に表示される短い記事を読んで頂きます。\n実験の最後に, 記事の内容について簡単なアンケートを実施しますので, 書かれている内容をイメージしながらよく読んでください。（「次へ」ボタン）"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {
            "intro1.PNG": "embedded\u002F223a7b2761516948e0e2414339a4d3d073182f30bbdaaa2a7746a4324772ba33.PNG"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "instruction_prime"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -213,
              "angle": 0,
              "width": 682,
              "height": 82.54,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "文部科学省および厚生労働省が発表した就職内定状況調査によると、\n大学生の2021年2月1日時点の就職内定率は、前年の同じ時期と比べ\n大幅に減少し、89.5%となりました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "22",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 25,
              "top": -25,
              "angle": 0,
              "width": 2,
              "height": 24.86,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "22",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 300,
              "top": 762,
              "angle": 0,
              "width": 60.5,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "text",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 275,
              "top": 625,
              "angle": 0,
              "width": 232.47,
              "height": 34.17,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "読み終えたらEnterを押してください\n※元のページには戻れません",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "14",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 250,
              "top": 238,
              "angle": 0,
              "width": 218.47,
              "height": 34.17,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "読み終えたらEnterで次に進みます\n※元のページには戻れません",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "14",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 10,
              "top": -114,
              "angle": 0,
              "width": 770,
              "height": 82.54,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "新型コロナウイルス感染症対策により、大学時代に海外留学やサークル活動、\n一部の実習などが制限された結果、十分な自己PRの材料を持たないまま\n就職活動に臨むことを余儀なくされています。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "22",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": -25,
              "angle": 0,
              "width": 704,
              "height": 53.7,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "実質ＧＤＰ成長率が戦後最悪レベルの落ち込みとなった今、\n従来の就職活動では内定が貰えないという厳しい状況が続いています。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "22",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "image",
              "left": "-62",
              "top": "161",
              "angle": 0,
              "width": "301.5",
              "height": "250.6",
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"大卒就職内定率　図.jpg\"] }"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "大卒就職内定率　図.jpg": "embedded\u002F2f06ad83a895f565bb504bb3e1912a6cae68e13ece8eca282fb1d428aaf6ae3a.jpg",
            "統制プライム条件.png": "embedded\u002F97494ecedbd1159e89d7915e6e4cd418f46a94f5c9727b5d66fac9983b31cdf2.png"
          },
          "responses": {
            "keypress(Enter)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Prime-D"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "課題の説明（1\u002F8）",
              "content": "ではこれから行う課題の説明をします。まず，この課題ではキーボードを使用します。\n実験中は, 下の例のように，左手の人差し指をキーボードの「Fキー」，右手の人差し指を「Jキー」の上に置いて課題を進めてください。（「次へ」ボタン）"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"introduction F J.png\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {
            "intro1.PNG": "embedded\u002F223a7b2761516948e0e2414339a4d3d073182f30bbdaaa2a7746a4324772ba33.PNG",
            "introduction F J.png": "embedded\u002F1f95975ddc6b4ca8e7bfd93cfc83c4bd879601fae0a279849cf5691462de6726.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "instruction_1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "課題の説明（2\u002F8）",
              "content": "この課題では, 画面の中央に画像が表示され, 画面上側の左右にはカテゴリー名が表示されます。（「次へ」ボタン）"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"introduction1.png\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {
            "intro2.PNG": "embedded\u002F3d8f93f7deac3815d79e83044af75c2b0016fc30f1996a47cba0cb5226bb2ab7.PNG",
            "introduction1.png": "embedded\u002Fdf63e6b93a939537a7c733386048f21e85126059d8904a363cb252d95131ace2.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst_2"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "課題の説明（3\u002F8）",
              "content": "下の例のように, 中央に表示された画像が, 左上のカテゴリーに当てはまる場合は, 左手の人差し指で「Fキー」を押してください。（「次へ」ボタン）"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"introduction Ex lip.png\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {
            "intro3.PNG": "embedded\u002Fff56601c0a204dbe2de8e42d249eac45e929d73c2ecca516b03426285f84ef53.PNG",
            "introduction F J.png": "embedded\u002F1f95975ddc6b4ca8e7bfd93cfc83c4bd879601fae0a279849cf5691462de6726.png",
            "introduction Ex lip.png": "embedded\u002Ff89e398f025433fe0c89f1d7b3baf43a778032529dfbdc3f3503cb1de0dd836f.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst_3"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "課題の説明（4\u002F8）",
              "content": "下の例のように，中央に表示された画像が, 右上のカテゴリーに当てはまる場合は, 右手の人差し指で「Jキー」を押してください。（「次へ」ボタン）"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"introduction Ex chair.png\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {
            "intro42.gif": "embedded\u002Fd70d5cf8d5ae44379da89d01f3ecd3482f8153646f5a5657e8d117eee6c0b007.gif",
            "introduction Ex chair.png": "embedded\u002Ff6c1981ce93c8874dcb7d0c14dc3966aa856978b6a42818af39f1c1de61679b6.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst_4"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "課題の説明（5\u002F8）",
              "content": "問題の提示手順について説明します。\n課題が始まると, 画面中央に「＋（プラスマーク）」が表示されるので, この「＋（プラスマーク）」をよく見てください。"
            },
            {
              "required": true,
              "type": "text",
              "content": "その後, 画面の中央に画像が提示されるので,  それぞれ当てはまるカテゴリーに分けてください（左上のカテゴリー：Fキー, 右上のカテゴリー：Jキー）。\nキーを押して頂くと, 自動的に次の課題に進みますので, 同様に判断してください。（「次へ」ボタン）"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"スライド9.PNG\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {
            "スライド1.JPG": "embedded\u002F209e5286d13e6edaba0bacb707d3f96f64260b93a50c2cd3a62d70bfafa15aa7.JPG",
            "introduction +.png": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.png",
            "スライド9.PNG": "embedded\u002F451bc98b40e21b5cf81468af1ac935ed15c529335ee975e68b9d5ce7e90f8bf0.PNG"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst_5"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "なお, 「オシャレ」カテゴリーとして提示される写真は以下の通りです。",
              "title": "課題の説明（6\u002F8）"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"オシャレ　一覧.png\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {
            "オシャレ　一覧.png": "embedded\u002Fabcccd04e02e34b8c3f53ccc4e86d12920197aba8a02680b4af335ec961df594.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst_6"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "「日用品」カテゴリーとして提示される写真は以下の通りです。",
              "title": "課題の説明（7\u002F8）"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"日用品　一覧.png\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {
            "オシャレ　一覧.png": "embedded\u002F5062ba4c3c162d18e7bac7a1d3efb2a4143c153da05bd4922890016e9e08d700.png",
            "日用品　一覧.png": "embedded\u002Fafbaf8523b183e4547b463703fb5e08ff5cc17a214dd2ca8c268690917e6368d.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst_7"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "課題の説明（8\u002F8）",
              "content": "できる限り「速く」「正確に」反応するようにしてください。\n実験内容をご理解頂けましたら, 次ページから始まります。（カウントダウンのち、すぐに始まります。）"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "実験開始 →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst_8 "
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 480,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#5f5f5f",
              "text": "反応はできるだけ速くかつ正確に",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "※",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 67.68,
              "height": 113,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "3",
              "fontStyle": "normal",
              "fontWeight": "bold",
              "fontSize": "100",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "count 3",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 67.68,
              "height": 113,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "2",
              "fontStyle": "normal",
              "fontWeight": "bold",
              "fontSize": "100",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "count 2",
          "timeout": "1000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 67.68,
              "height": 113,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "1",
              "fontStyle": "normal",
              "fontWeight": "bold",
              "fontSize": "100",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "count 1",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "set1": "02.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "03.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "05.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "06.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "07.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "スライド1.PNG",
              "resp": "日用品"
            },
            {
              "set1": "スライド4.PNG",
              "resp": "日用品"
            },
            {
              "set1": "スライド6.PNG",
              "resp": "日用品"
            },
            {
              "set1": "スライド7.PNG",
              "resp": "日用品"
            },
            {
              "set1": "02.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "03.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "05.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "06.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "07.PNG",
              "resp": "オシャレ"
            },
            {
              "set1": "スライド1.PNG",
              "resp": "日用品"
            },
            {
              "set1": "スライド4.PNG",
              "resp": "日用品"
            },
            {
              "set1": "スライド6.PNG",
              "resp": "日用品"
            },
            {
              "set1": "スライド7.PNG",
              "resp": "日用品"
            },
            {
              "set1": "スライド2.png",
              "resp": "日用品"
            },
            {
              "set1": "スライド2.png",
              "resp": "日用品"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Task1",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
            },
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 64,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "＋",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "＋",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 200,
                    "top": -200,
                    "angle": 0,
                    "width": 192,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "日用品",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": -200,
                    "angle": 0,
                    "width": 256,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "オシャレ",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "image",
                    "left": -13,
                    "top": 100,
                    "angle": 0,
                    "width": 348,
                    "height": 372,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.set1] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "02.PNG": "embedded\u002F0eb80704ffde75b8cad056020a51969e4698010cb1b226b357099329402dd5ff.PNG",
                  "03.PNG": "embedded\u002F0ce8a3f68757e6c87634371b426fbc2ac2a0ce86a3f48c94b1bc4c5a2f2496d8.PNG",
                  "05.PNG": "embedded\u002F7383642bad5c350b424db60dcdf95a34bce77b084c9a9c0c48213f84ee0658a3.PNG",
                  "06.PNG": "embedded\u002F5b30d98df0056aca6473d004b7a04057f811d60daad259879e3ed5d246c9141a.PNG",
                  "07.PNG": "embedded\u002Feb67eed816200df84652c60fc16f2d8aebef093d1dd7d08668cc29ad87028303.PNG",
                  "スライド1.PNG": "embedded\u002Fa568b625a05be11d78612fa229e6353d9d972ccf9ba9c31ba57208dc00854983.PNG",
                  "スライド4.PNG": "embedded\u002Feddb544b7214005b8b7ad9a7be95a19055e7d4ff9d9dd5b47fd843a2b5cebbf8.PNG",
                  "スライド6.PNG": "embedded\u002Ffb106d0d9cca9d838d5d920d95bea1b4b5b6c21b460adf1d5f78a77907d3f678.PNG",
                  "スライド7.PNG": "embedded\u002Fab1cf86310fcdf0e5881d8ff20083dacd4a09b614ccb0448f781f4aa11627508.PNG",
                  "スライド2.png": "embedded\u002Fb939a1d30563c5c4112008c1d2b407fdc6b525e560c64243e35a9b8cd3e89d20.png"
                },
                "responses": {
                  "keypress(f)": "オシャレ",
                  "keypress(j)": "日用品"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "刺激",
                "correctResponse": "${ parameters.resp }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "空白",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（1\u002F7）",
                  "content": "次の課題では, 画面の中央に単語が表示され, 画面上側の左右にはカテゴリー名が表示されます。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド6.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro2.PNG": "embedded\u002F3d8f93f7deac3815d79e83044af75c2b0016fc30f1996a47cba0cb5226bb2ab7.PNG",
                "introduction1.png": "embedded\u002Fdf63e6b93a939537a7c733386048f21e85126059d8904a363cb252d95131ace2.png",
                "スライド3.PNG": "embedded\u002F07b538d3c71c32b632f853277734dc8d787671b812c65b375186d6a50d839d3b.PNG",
                "スライド6.PNG": "embedded\u002Fe2311dfb295162026c5d6a2b268d2ce72c23b5f3e0a7bd4abe9e69a054606a93.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（2\u002F7）",
                  "content": "下の例のように, 中央に表示された単語が, 左上のカテゴリーに当てはまる場合は, 左手の人差し指で「Fキー」を押してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド16.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro3.PNG": "embedded\u002Fff56601c0a204dbe2de8e42d249eac45e929d73c2ecca516b03426285f84ef53.PNG",
                "introduction F J.png": "embedded\u002F1f95975ddc6b4ca8e7bfd93cfc83c4bd879601fae0a279849cf5691462de6726.png",
                "introduction Ex lip.png": "embedded\u002Ff89e398f025433fe0c89f1d7b3baf43a778032529dfbdc3f3503cb1de0dd836f.png",
                "スライド5.PNG": "embedded\u002Fa9fea0f21a886b3379fa9e8324e25414ce32679c5554e1485d3b95e504fcc27c.PNG",
                "スライド8.PNG": "embedded\u002Fd20ea8557021c9d58c4c62672ec3cdae25472ac998f069e72d610f4917e851a8.PNG",
                "スライド16.PNG": "embedded\u002F719bfa3754e57cb71a581b1da2be140bbb1836b7f8ce22492cce641220edfca2.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（3\u002F7）",
                  "content": "下の例のように，中央に表示された単語が, 右上のカテゴリーに当てはまる場合は,  右手の人差し指で「Jキー」を押してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド11.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro42.gif": "embedded\u002Fd70d5cf8d5ae44379da89d01f3ecd3482f8153646f5a5657e8d117eee6c0b007.gif",
                "introduction Ex chair.png": "embedded\u002Ff6c1981ce93c8874dcb7d0c14dc3966aa856978b6a42818af39f1c1de61679b6.png",
                "スライド7.PNG": "embedded\u002F70a3382993752be8f643cfb18e9956a2abeda4357bff64041f4865450ec814b2.PNG",
                "スライド13.PNG": "embedded\u002Fa436d05b4b7bf4b536422a3203361688d66ec1069f015d50b62a655358682b0c.PNG",
                "スライド11.PNG": "embedded\u002F99f88db4d6bf46c25f0ddda95b8554c09a0006df6f39ae78c6652260835afb4b.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（4\u002F7）",
                  "content": "先程と同様,  課題が始まると, 画面中央に「＋（プラスマーク）」が表示されるので, この「＋（プラスマーク）」をよく見てください。"
                },
                {
                  "required": true,
                  "type": "text",
                  "content": "その後, 画面の中央に単語が提示されるので,  それぞれ当てはまるカテゴリーに分けてください（左上のカテゴリー：Fキー, 右上のカテゴリー：Jキー）。\nキーを押して頂くと, 自動的に次の課題に進みますので, 同様に判断してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド18.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "スライド1.JPG": "embedded\u002F209e5286d13e6edaba0bacb707d3f96f64260b93a50c2cd3a62d70bfafa15aa7.JPG",
                "introduction +.png": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.png",
                "スライド8.PNG": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.PNG",
                "スライド20.PNG": "embedded\u002Ffc8a6d3ece661fd94af7c716431216064e74224f98f95f8d4d45c0ac4bf7a5f5.PNG",
                "スライド18.PNG": "embedded\u002F1dc0786682bb3f7b355352f8cd0b514cce50f98fff0f50112cf47a15ecbafd6e.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_4"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "「接近」カテゴリーとして提示される単語は以下の通りです。",
                  "title": "課題の説明（5\u002F7）"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"接近一覧.png\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "オシャレ　一覧.png": "embedded\u002F5062ba4c3c162d18e7bac7a1d3efb2a4143c153da05bd4922890016e9e08d700.png",
                "日用品　一覧.png": "embedded\u002Fc57a26b695b899653e3a39c3400e7724c9f9e809b84667f567b1a8cbc78d01da.png",
                "接近一覧.png": "embedded\u002F613554e1653f56c838ed0b948aaea3d1557cc53e838d902ca2af6567ec9925f3.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_5"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "「回避」カテゴリーとして提示される単語は以下の通りです。",
                  "title": "課題の説明（6\u002F7）"
                },
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"回避一覧.png\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "オシャレ　一覧.png": "embedded\u002F5062ba4c3c162d18e7bac7a1d3efb2a4143c153da05bd4922890016e9e08d700.png",
                "日用品　一覧.png": "embedded\u002Fc57a26b695b899653e3a39c3400e7724c9f9e809b84667f567b1a8cbc78d01da.png",
                "接近一覧.png": "embedded\u002Fe9f5b0763ec38e868c68ddaded095311ee2282b617638be1e50cf97804844bc5.png",
                "回避一覧.png": "embedded\u002F8a2c0336c9c8fad9399411a8e99e790485b1c9bb142bcd8b7cb0b75ae8544105.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_6"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（7\u002F7）",
                  "content": "できる限り「速く」「正確に」反応するようにしてください。\n実験内容をご理解頂けましたら, 次ページから始まります。（カウントダウンのち、すぐに始まります。）"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "実験開始 →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_7"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 480,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#5f5f5f",
                  "text": "反応はできるだけ速くかつ正確に",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "30",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "※",
              "timeout": "2000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "3",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 3",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "2",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 2",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "1",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 1",
              "timeout": "1000"
            }
          ]
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "set4": "k2.PNG",
              "resp": "回避"
            },
            {
              "set4": "k4.PNG",
              "resp": "回避"
            },
            {
              "set4": "k5.PNG",
              "resp": "回避"
            },
            {
              "set4": "k6.PNG",
              "resp": "回避"
            },
            {
              "set4": "k7.PNG",
              "resp": "回避"
            },
            {
              "set4": "s2.PNG",
              "resp": "接近"
            },
            {
              "set4": "s4.PNG",
              "resp": "接近"
            },
            {
              "set4": "s5.PNG",
              "resp": "接近"
            },
            {
              "set4": "s6.PNG",
              "resp": "接近"
            },
            {
              "set4": "s7.PNG",
              "resp": "接近"
            },
            {
              "set4": "k7.PNG",
              "resp": "回避"
            },
            {
              "set4": "k6.PNG",
              "resp": "回避"
            },
            {
              "set4": "k5.PNG",
              "resp": "回避"
            },
            {
              "set4": "k4.PNG",
              "resp": "回避"
            },
            {
              "set4": "k2.PNG",
              "resp": "回避"
            },
            {
              "set4": "s7.PNG",
              "resp": "接近"
            },
            {
              "set4": "s6.PNG",
              "resp": "接近"
            },
            {
              "set4": "s5.PNG",
              "resp": "接近"
            },
            {
              "set4": "s4.PNG",
              "resp": "接近"
            },
            {
              "set4": "s2.PNG",
              "resp": "接近"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Task4",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
            },
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 64,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "＋",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "＋",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 200,
                    "top": -200,
                    "angle": 0,
                    "width": 128,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "接近",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": -200,
                    "angle": 0,
                    "width": 128,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "回避",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "image",
                    "left": 0,
                    "top": 75,
                    "angle": 0,
                    "width": 428.84,
                    "height": 428.84,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.set4] }",
                    "autoScale": "width"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "k2.PNG": "embedded\u002F192442f1c49cacdd1976c06d0ce86240d5d47aa8bc32c15e1ce9ddccf0d05cd3.PNG",
                  "k4.PNG": "embedded\u002F3ad4b7911471b677205a1ef84a8c20b7a89e800ea4822ad8c035e5c910edea46.PNG",
                  "k5.PNG": "embedded\u002F30784af769365e30210e1b0a4f531353452dfbd34287fb8e7b6f256d1b56cb8f.PNG",
                  "k6.PNG": "embedded\u002F54d402879afd597d7973bb845e576916eea95899a58d7cf09600ea3aedaed38f.PNG",
                  "k7.PNG": "embedded\u002Fbd51ec73f0d4b92db7c9fcfc29fe23726f6108f109037c765c4119127e30f248.PNG",
                  "s2.PNG": "embedded\u002F443a135d846192af013b158408adbefc24471a5137a96814e4f80dd1636dfa92.PNG",
                  "s4.PNG": "embedded\u002F9e3b0b37943e63b416dfa1f0e2349074e28106923e5d4814769a685c5052a4aa.PNG",
                  "s5.PNG": "embedded\u002F611cba8f8a01f85c1370f6837a73fa0c466136150c0669fd6b6d3966116f5b12.PNG",
                  "s6.PNG": "embedded\u002F9ec944697306e8f757b28c71e44ffdda96279e3d0f267ca86ad309818b666c6b.PNG",
                  "s7.PNG": "embedded\u002F60288e7e43b41d6de89bc7929fd43645163424e2fb712f1f9855412d847edc74.PNG"
                },
                "responses": {
                  "keypress(j)": "接近",
                  "keypress(f)": "回避"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "刺激",
                "correctResponse": "${ parameters.resp }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "空白",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（1\u002F5）",
                  "content": "次の課題では, 画面の中央に画像や単語が表示され, 画面上側の左右にはカテゴリー名が表示されます。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド4.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro2.PNG": "embedded\u002F3d8f93f7deac3815d79e83044af75c2b0016fc30f1996a47cba0cb5226bb2ab7.PNG",
                "introduction1.png": "embedded\u002Fdf63e6b93a939537a7c733386048f21e85126059d8904a363cb252d95131ace2.png",
                "スライド3.PNG": "embedded\u002F07b538d3c71c32b632f853277734dc8d787671b812c65b375186d6a50d839d3b.PNG",
                "スライド6.PNG": "embedded\u002Fe2311dfb295162026c5d6a2b268d2ce72c23b5f3e0a7bd4abe9e69a054606a93.PNG",
                "スライド4.PNG": "embedded\u002Fb94bde5b14ed3c18cf58817f80d7765fc31b96f427bf070dc04b33981f0b260e.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（2\u002F5）",
                  "content": "下の例のように, 中央に表示された画像や単語が, 左上のカテゴリーに当てはまる場合は, 左手の人差し指で「Fキー」を押してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド9.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro3.PNG": "embedded\u002Fff56601c0a204dbe2de8e42d249eac45e929d73c2ecca516b03426285f84ef53.PNG",
                "introduction F J.png": "embedded\u002F1f95975ddc6b4ca8e7bfd93cfc83c4bd879601fae0a279849cf5691462de6726.png",
                "introduction Ex lip.png": "embedded\u002Ff89e398f025433fe0c89f1d7b3baf43a778032529dfbdc3f3503cb1de0dd836f.png",
                "スライド5.PNG": "embedded\u002Fa9fea0f21a886b3379fa9e8324e25414ce32679c5554e1485d3b95e504fcc27c.PNG",
                "スライド8.PNG": "embedded\u002Fd20ea8557021c9d58c4c62672ec3cdae25472ac998f069e72d610f4917e851a8.PNG",
                "スライド16.PNG": "embedded\u002F719bfa3754e57cb71a581b1da2be140bbb1836b7f8ce22492cce641220edfca2.PNG",
                "スライド9.PNG": "embedded\u002Fd988e41233e6e2c7a5e23dc959fbb443b68a2e429f0eba8a631b430baaf6222b.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（3\u002F5）",
                  "content": "下の例のように，中央に表示された画像や単語が, 右上のカテゴリーに当てはまる場合は,  右手の人差し指で「Jキー」を押してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"lab.js 図　オシャレ回避.png\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro42.gif": "embedded\u002Fd70d5cf8d5ae44379da89d01f3ecd3482f8153646f5a5657e8d117eee6c0b007.gif",
                "introduction Ex chair.png": "embedded\u002Ff6c1981ce93c8874dcb7d0c14dc3966aa856978b6a42818af39f1c1de61679b6.png",
                "スライド7.PNG": "embedded\u002F70a3382993752be8f643cfb18e9956a2abeda4357bff64041f4865450ec814b2.PNG",
                "スライド13.PNG": "embedded\u002Fa436d05b4b7bf4b536422a3203361688d66ec1069f015d50b62a655358682b0c.PNG",
                "スライド11.PNG": "embedded\u002F99f88db4d6bf46c25f0ddda95b8554c09a0006df6f39ae78c6652260835afb4b.PNG",
                "lab.js 図　オシャレ回避.png": "embedded\u002Fce3e31a0895a9e16e4a33be293590d9790530c22aa550f2689cbc0082c4d75c7.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（4\u002F5）",
                  "content": "先程と同様,  課題が始まると, 画面中央に「＋（プラスマーク）」が表示されるので, この「＋（プラスマーク）」をよく見てください。"
                },
                {
                  "required": true,
                  "type": "text",
                  "content": "その後, 画面の中央に画像や単語が提示されるので,  それぞれ当てはまるカテゴリーに分けてください（左上のカテゴリー：Fキー, 右上のカテゴリー：Jキー）。\nキーを押して頂くと, 自動的に次の課題に進みますので, 同様に判断してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド21.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "スライド1.JPG": "embedded\u002F209e5286d13e6edaba0bacb707d3f96f64260b93a50c2cd3a62d70bfafa15aa7.JPG",
                "introduction +.png": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.png",
                "スライド8.PNG": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.PNG",
                "スライド20.PNG": "embedded\u002Ffc8a6d3ece661fd94af7c716431216064e74224f98f95f8d4d45c0ac4bf7a5f5.PNG",
                "スライド18.PNG": "embedded\u002F1dc0786682bb3f7b355352f8cd0b514cce50f98fff0f50112cf47a15ecbafd6e.PNG",
                "スライド21.PNG": "embedded\u002F229909439f2a503963b465a2672a6f2132e1c2683d5232be923e50ea4944440f.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_4"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（5\u002F5）",
                  "content": "できる限り「速く」「正確に」反応するようにしてください。\n実験内容をご理解頂けましたら, 次ページから始まります。（カウントダウンのち、すぐに始まります。）"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "実験開始 →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_5"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 480,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#5f5f5f",
                  "text": "反応はできるだけ速くかつ正確に",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "30",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "※",
              "timeout": "2000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "3",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 3",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "2",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 2",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "1",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 1",
              "timeout": "1000"
            }
          ]
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "set5": "k2.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "k4.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "k5.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "k6.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "k7.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "s2.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "s4.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "s5.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "s6.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "s7.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "02.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "03.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "05.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "06.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "07.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "スライド1.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "スライド4.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "スライド6.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "スライド7.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "スライド1.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "スライド4.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "スライド6.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "スライド7.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "07.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "06.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "05.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "03.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "02.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "s7.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "s6.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "s5.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "s4.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "s2.PNG",
              "resp": "日用品接近"
            },
            {
              "set5": "k7.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "k6.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "k5.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "k4.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "k2.PNG",
              "resp": "オシャレ回避"
            },
            {
              "set5": "スライド2.png",
              "resp": "日用品接近"
            },
            {
              "set5": "スライド2.png",
              "resp": "日用品接近"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Task5",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
            },
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 64,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "＋",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "＋",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 200,
                    "top": -200,
                    "angle": 0,
                    "width": 192,
                    "height": 156.21,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "日用品\n接近",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -250,
                    "top": -200,
                    "angle": 0,
                    "width": 256,
                    "height": 156.21,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "オシャレ\n回避",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "image",
                    "left": 0,
                    "top": 89,
                    "angle": 0,
                    "width": 426,
                    "height": 378,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.set5] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "k2.PNG": "embedded\u002F192442f1c49cacdd1976c06d0ce86240d5d47aa8bc32c15e1ce9ddccf0d05cd3.PNG",
                  "k4.PNG": "embedded\u002F3ad4b7911471b677205a1ef84a8c20b7a89e800ea4822ad8c035e5c910edea46.PNG",
                  "k5.PNG": "embedded\u002F30784af769365e30210e1b0a4f531353452dfbd34287fb8e7b6f256d1b56cb8f.PNG",
                  "k6.PNG": "embedded\u002F54d402879afd597d7973bb845e576916eea95899a58d7cf09600ea3aedaed38f.PNG",
                  "k7.PNG": "embedded\u002Fbd51ec73f0d4b92db7c9fcfc29fe23726f6108f109037c765c4119127e30f248.PNG",
                  "s2.PNG": "embedded\u002F443a135d846192af013b158408adbefc24471a5137a96814e4f80dd1636dfa92.PNG",
                  "s4.PNG": "embedded\u002F9e3b0b37943e63b416dfa1f0e2349074e28106923e5d4814769a685c5052a4aa.PNG",
                  "s5.PNG": "embedded\u002F611cba8f8a01f85c1370f6837a73fa0c466136150c0669fd6b6d3966116f5b12.PNG",
                  "s6.PNG": "embedded\u002F9ec944697306e8f757b28c71e44ffdda96279e3d0f267ca86ad309818b666c6b.PNG",
                  "s7.PNG": "embedded\u002F60288e7e43b41d6de89bc7929fd43645163424e2fb712f1f9855412d847edc74.PNG",
                  "02.PNG": "embedded\u002F0eb80704ffde75b8cad056020a51969e4698010cb1b226b357099329402dd5ff.PNG",
                  "03.PNG": "embedded\u002F0ce8a3f68757e6c87634371b426fbc2ac2a0ce86a3f48c94b1bc4c5a2f2496d8.PNG",
                  "05.PNG": "embedded\u002F7383642bad5c350b424db60dcdf95a34bce77b084c9a9c0c48213f84ee0658a3.PNG",
                  "06.PNG": "embedded\u002F5b30d98df0056aca6473d004b7a04057f811d60daad259879e3ed5d246c9141a.PNG",
                  "07.PNG": "embedded\u002Feb67eed816200df84652c60fc16f2d8aebef093d1dd7d08668cc29ad87028303.PNG",
                  "スライド4.PNG": "embedded\u002Feddb544b7214005b8b7ad9a7be95a19055e7d4ff9d9dd5b47fd843a2b5cebbf8.PNG",
                  "スライド6.PNG": "embedded\u002Ffb106d0d9cca9d838d5d920d95bea1b4b5b6c21b460adf1d5f78a77907d3f678.PNG",
                  "スライド7.PNG": "embedded\u002Fab1cf86310fcdf0e5881d8ff20083dacd4a09b614ccb0448f781f4aa11627508.PNG",
                  "スライド1.PNG": "embedded\u002Fa568b625a05be11d78612fa229e6353d9d972ccf9ba9c31ba57208dc00854983.PNG",
                  "スライド2.png": "embedded\u002Fb939a1d30563c5c4112008c1d2b407fdc6b525e560c64243e35a9b8cd3e89d20.png"
                },
                "responses": {
                  "keypress(f)": "オシャレ回避",
                  "keypress(j)": "日用品接近"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "刺激",
                "correctResponse": "${ parameters.resp }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "空白",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（1\u002F5）",
                  "content": "次の課題では, 画面の中央に単語が表示され, 画面上側の左右にはカテゴリー名が表示されます。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド3.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro2.PNG": "embedded\u002F3d8f93f7deac3815d79e83044af75c2b0016fc30f1996a47cba0cb5226bb2ab7.PNG",
                "introduction1.png": "embedded\u002Fdf63e6b93a939537a7c733386048f21e85126059d8904a363cb252d95131ace2.png",
                "スライド3.PNG": "embedded\u002F895adac57f9bbacf89914c1d06ecad84886bb0888dfa513c54e0dd75cb87ef63.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（2\u002F5）",
                  "content": "下の例のように, 中央に表示された単語が, 左上のカテゴリーに当てはまる場合は, 左手の人差し指で「Fキー」を押してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド5.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro3.PNG": "embedded\u002Fff56601c0a204dbe2de8e42d249eac45e929d73c2ecca516b03426285f84ef53.PNG",
                "introduction F J.png": "embedded\u002F1f95975ddc6b4ca8e7bfd93cfc83c4bd879601fae0a279849cf5691462de6726.png",
                "introduction Ex lip.png": "embedded\u002Ff89e398f025433fe0c89f1d7b3baf43a778032529dfbdc3f3503cb1de0dd836f.png",
                "スライド5.PNG": "embedded\u002Fa9fea0f21a886b3379fa9e8324e25414ce32679c5554e1485d3b95e504fcc27c.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（3\u002F5）",
                  "content": "下の例のように，中央に表示された単語が, 右上のカテゴリーに当てはまる場合は,  右手の人差し指で「Jキー」を押してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド7.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro42.gif": "embedded\u002Fd70d5cf8d5ae44379da89d01f3ecd3482f8153646f5a5657e8d117eee6c0b007.gif",
                "introduction Ex chair.png": "embedded\u002Ff6c1981ce93c8874dcb7d0c14dc3966aa856978b6a42818af39f1c1de61679b6.png",
                "スライド7.PNG": "embedded\u002F70a3382993752be8f643cfb18e9956a2abeda4357bff64041f4865450ec814b2.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（4\u002F5）",
                  "content": "先程と同様,  課題が始まると, 画面中央に「＋（プラスマーク）」が表示されるので, この「＋（プラスマーク）」をよく見てください。"
                },
                {
                  "required": true,
                  "type": "text",
                  "content": "その後, 画面の中央に単語が提示されるので,  それぞれ当てはまるカテゴリーに分けてください（左上のカテゴリー：Fキー, 右上のカテゴリー：Jキー）。\nキーを押して頂くと, 自動的に次の課題に進みますので, 同様に判断してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド8.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "スライド1.JPG": "embedded\u002F209e5286d13e6edaba0bacb707d3f96f64260b93a50c2cd3a62d70bfafa15aa7.JPG",
                "introduction +.png": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.png",
                "スライド8.PNG": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_4"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（5\u002F5）",
                  "content": "できる限り「速く」「正確に」反応するようにしてください。\n実験内容をご理解頂けましたら, 次ページから始まります。（カウントダウンのち、すぐに始まります。）"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "実験開始 →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_5"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 480,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#5f5f5f",
                  "text": "反応はできるだけ速くかつ正確に",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "30",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "※",
              "timeout": "2000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "3",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 3",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "2",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 2",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "1",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 1",
              "timeout": "1000"
            }
          ]
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "set2": "k2.PNG",
              "resp": "回避"
            },
            {
              "set2": "k4.PNG",
              "resp": "回避"
            },
            {
              "set2": "k5.PNG",
              "resp": "回避"
            },
            {
              "set2": "k6.PNG",
              "resp": "回避"
            },
            {
              "set2": "k7.PNG",
              "resp": "回避"
            },
            {
              "set2": "s4.PNG",
              "resp": "接近"
            },
            {
              "set2": "s5.PNG",
              "resp": "接近"
            },
            {
              "set2": "s6.PNG",
              "resp": "接近"
            },
            {
              "set2": "s7.PNG",
              "resp": "接近"
            },
            {
              "set2": "k2.PNG",
              "resp": "回避"
            },
            {
              "set2": "k4.PNG",
              "resp": "回避"
            },
            {
              "set2": "k5.PNG",
              "resp": "回避"
            },
            {
              "set2": "k6.PNG",
              "resp": "回避"
            },
            {
              "set2": "k7.PNG",
              "resp": "回避"
            },
            {
              "set2": "s7.PNG",
              "resp": "接近"
            },
            {
              "set2": "s6.PNG",
              "resp": "接近"
            },
            {
              "set2": "s5.PNG",
              "resp": "接近"
            },
            {
              "set2": "s4.PNG",
              "resp": "接近"
            },
            {
              "set2": "s2.PNG",
              "resp": "接近"
            },
            {
              "set2": "s2.PNG",
              "resp": "接近"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Task2",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
            },
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 64,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "＋",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "＋",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 200,
                    "top": -200,
                    "angle": 0,
                    "width": 128,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "回避",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": -200,
                    "angle": 0,
                    "width": 128,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "接近",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "image",
                    "left": 0,
                    "top": 75,
                    "angle": 0,
                    "width": 428.84,
                    "height": 428.84,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.set2] }",
                    "autoScale": "width"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "k2.PNG": "embedded\u002F192442f1c49cacdd1976c06d0ce86240d5d47aa8bc32c15e1ce9ddccf0d05cd3.PNG",
                  "k4.PNG": "embedded\u002F3ad4b7911471b677205a1ef84a8c20b7a89e800ea4822ad8c035e5c910edea46.PNG",
                  "k5.PNG": "embedded\u002F30784af769365e30210e1b0a4f531353452dfbd34287fb8e7b6f256d1b56cb8f.PNG",
                  "k6.PNG": "embedded\u002F54d402879afd597d7973bb845e576916eea95899a58d7cf09600ea3aedaed38f.PNG",
                  "k7.PNG": "embedded\u002Fbd51ec73f0d4b92db7c9fcfc29fe23726f6108f109037c765c4119127e30f248.PNG",
                  "s2.PNG": "embedded\u002F443a135d846192af013b158408adbefc24471a5137a96814e4f80dd1636dfa92.PNG",
                  "s4.PNG": "embedded\u002F9e3b0b37943e63b416dfa1f0e2349074e28106923e5d4814769a685c5052a4aa.PNG",
                  "s5.PNG": "embedded\u002F611cba8f8a01f85c1370f6837a73fa0c466136150c0669fd6b6d3966116f5b12.PNG",
                  "s6.PNG": "embedded\u002F9ec944697306e8f757b28c71e44ffdda96279e3d0f267ca86ad309818b666c6b.PNG",
                  "s7.PNG": "embedded\u002F60288e7e43b41d6de89bc7929fd43645163424e2fb712f1f9855412d847edc74.PNG"
                },
                "responses": {
                  "keypress(f)": "接近",
                  "keypress(j)": "回避"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "刺激",
                "correctResponse": "${ parameters.resp }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "空白",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（1\u002F5）",
                  "content": "最後の課題では, 画面の中央に画像や単語が表示され, 画面上側の左右にはカテゴリー名が表示されます。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド3.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro2.PNG": "embedded\u002F3d8f93f7deac3815d79e83044af75c2b0016fc30f1996a47cba0cb5226bb2ab7.PNG",
                "introduction1.png": "embedded\u002Fdf63e6b93a939537a7c733386048f21e85126059d8904a363cb252d95131ace2.png",
                "スライド3.PNG": "embedded\u002F07b538d3c71c32b632f853277734dc8d787671b812c65b375186d6a50d839d3b.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（2\u002F5）",
                  "content": "下の例のように, 中央に表示された画像や単語が, 左上のカテゴリーに当てはまる場合は, 左手の人差し指で「Fキー」を押してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド8.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro3.PNG": "embedded\u002Fff56601c0a204dbe2de8e42d249eac45e929d73c2ecca516b03426285f84ef53.PNG",
                "introduction F J.png": "embedded\u002F1f95975ddc6b4ca8e7bfd93cfc83c4bd879601fae0a279849cf5691462de6726.png",
                "introduction Ex lip.png": "embedded\u002Ff89e398f025433fe0c89f1d7b3baf43a778032529dfbdc3f3503cb1de0dd836f.png",
                "スライド5.PNG": "embedded\u002Fa9fea0f21a886b3379fa9e8324e25414ce32679c5554e1485d3b95e504fcc27c.PNG",
                "スライド8.PNG": "embedded\u002Fd20ea8557021c9d58c4c62672ec3cdae25472ac998f069e72d610f4917e851a8.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（3\u002F5）",
                  "content": "下の例のように，中央に表示された画像や単語が, 右上のカテゴリーに当てはまる場合は,  右手の人差し指で「Jキー」を押してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド13.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro42.gif": "embedded\u002Fd70d5cf8d5ae44379da89d01f3ecd3482f8153646f5a5657e8d117eee6c0b007.gif",
                "introduction Ex chair.png": "embedded\u002Ff6c1981ce93c8874dcb7d0c14dc3966aa856978b6a42818af39f1c1de61679b6.png",
                "スライド7.PNG": "embedded\u002F70a3382993752be8f643cfb18e9956a2abeda4357bff64041f4865450ec814b2.PNG",
                "スライド13.PNG": "embedded\u002Fa436d05b4b7bf4b536422a3203361688d66ec1069f015d50b62a655358682b0c.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（4\u002F5）",
                  "content": "先程と同様,  課題が始まると, 画面中央に「＋（プラスマーク）」が表示されるので, この「＋（プラスマーク）」をよく見てください。"
                },
                {
                  "required": true,
                  "type": "text",
                  "content": "その後, 画面の中央に画像や単語が提示されるので,  それぞれ当てはまるカテゴリーに分けてください（左上のカテゴリー：Fキー, 右上のカテゴリー：Jキー）。\nキーを押して頂くと, 自動的に次の課題に進みますので, 同様に判断してください。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "${ this.files[\"スライド20.PNG\"] }",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "スライド1.JPG": "embedded\u002F209e5286d13e6edaba0bacb707d3f96f64260b93a50c2cd3a62d70bfafa15aa7.JPG",
                "introduction +.png": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.png",
                "スライド8.PNG": "embedded\u002Fbf0c91fc8744b412996a7308ce6cab4bcc51c125b831d0bdbcca17e4906b22c2.PNG",
                "スライド20.PNG": "embedded\u002Ffc8a6d3ece661fd94af7c716431216064e74224f98f95f8d4d45c0ac4bf7a5f5.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_4"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題の説明（5\u002F5）",
                  "content": "できる限り「速く」「正確に」反応するようにしてください。\n実験内容をご理解頂けましたら, 次ページから始まります。（カウントダウンのち、すぐに始まります。）"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "実験開始 →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "Inst_5"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 480,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#5f5f5f",
                  "text": "反応はできるだけ速くかつ正確に",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "30",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "※",
              "timeout": "2000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "3",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 3",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "2",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 2",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 67.68,
                  "height": 113,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "1",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "100",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
              },
              "title": "count 1",
              "timeout": "1000"
            }
          ]
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "set3": "k2.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "k4.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "k5.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "k6.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "k7.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "s2.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s4.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s5.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s6.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s7.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "02.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "03.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "05.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "06.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "07.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "スライド1.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド4.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド6.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド7.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド7.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド6.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド1.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド4.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "07.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "06.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "05.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "03.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "02.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s7.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s6.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s5.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s4.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "s2.PNG",
              "resp": "オシャレ接近"
            },
            {
              "set3": "k2.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "k4.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "k5.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "k6.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "k7.PNG",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド2.png",
              "resp": "日用品回避"
            },
            {
              "set3": "スライド2.png",
              "resp": "日用品回避"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Task3",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
            },
            "title": "Sequence",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 64,
                    "height": 72.32,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "＋",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "＋",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 200,
                    "top": -200,
                    "angle": 0,
                    "width": 192,
                    "height": 156.21,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "日用品\n回避",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -250,
                    "top": -200,
                    "angle": 0,
                    "width": 256,
                    "height": 156.21,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "オシャレ\n接近",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "64",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "image",
                    "left": 0,
                    "top": 89,
                    "angle": 0,
                    "width": 426,
                    "height": 378,
                    "stroke": null,
                    "strokeWidth": 0,
                    "fill": "black",
                    "src": "${ this.files[parameters.set3] }"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {
                  "k2.PNG": "embedded\u002F192442f1c49cacdd1976c06d0ce86240d5d47aa8bc32c15e1ce9ddccf0d05cd3.PNG",
                  "k4.PNG": "embedded\u002F3ad4b7911471b677205a1ef84a8c20b7a89e800ea4822ad8c035e5c910edea46.PNG",
                  "k5.PNG": "embedded\u002F30784af769365e30210e1b0a4f531353452dfbd34287fb8e7b6f256d1b56cb8f.PNG",
                  "k6.PNG": "embedded\u002F54d402879afd597d7973bb845e576916eea95899a58d7cf09600ea3aedaed38f.PNG",
                  "k7.PNG": "embedded\u002Fbd51ec73f0d4b92db7c9fcfc29fe23726f6108f109037c765c4119127e30f248.PNG",
                  "s2.PNG": "embedded\u002F443a135d846192af013b158408adbefc24471a5137a96814e4f80dd1636dfa92.PNG",
                  "s4.PNG": "embedded\u002F9e3b0b37943e63b416dfa1f0e2349074e28106923e5d4814769a685c5052a4aa.PNG",
                  "s5.PNG": "embedded\u002F611cba8f8a01f85c1370f6837a73fa0c466136150c0669fd6b6d3966116f5b12.PNG",
                  "s6.PNG": "embedded\u002F9ec944697306e8f757b28c71e44ffdda96279e3d0f267ca86ad309818b666c6b.PNG",
                  "s7.PNG": "embedded\u002F60288e7e43b41d6de89bc7929fd43645163424e2fb712f1f9855412d847edc74.PNG",
                  "02.PNG": "embedded\u002F0eb80704ffde75b8cad056020a51969e4698010cb1b226b357099329402dd5ff.PNG",
                  "03.PNG": "embedded\u002F0ce8a3f68757e6c87634371b426fbc2ac2a0ce86a3f48c94b1bc4c5a2f2496d8.PNG",
                  "05.PNG": "embedded\u002F7383642bad5c350b424db60dcdf95a34bce77b084c9a9c0c48213f84ee0658a3.PNG",
                  "06.PNG": "embedded\u002F5b30d98df0056aca6473d004b7a04057f811d60daad259879e3ed5d246c9141a.PNG",
                  "07.PNG": "embedded\u002Feb67eed816200df84652c60fc16f2d8aebef093d1dd7d08668cc29ad87028303.PNG",
                  "スライド1.PNG": "embedded\u002Fa568b625a05be11d78612fa229e6353d9d972ccf9ba9c31ba57208dc00854983.PNG",
                  "スライド4.PNG": "embedded\u002Feddb544b7214005b8b7ad9a7be95a19055e7d4ff9d9dd5b47fd843a2b5cebbf8.PNG",
                  "スライド6.PNG": "embedded\u002Ffb106d0d9cca9d838d5d920d95bea1b4b5b6c21b460adf1d5f78a77907d3f678.PNG",
                  "スライド7.PNG": "embedded\u002Fab1cf86310fcdf0e5881d8ff20083dacd4a09b614ccb0448f781f4aa11627508.PNG",
                  "スライド2.png": "embedded\u002Fb939a1d30563c5c4112008c1d2b407fdc6b525e560c64243e35a9b8cd3e89d20.png"
                },
                "responses": {
                  "keypress(f)": "オシャレ接近",
                  "keypress(j)": "日用品回避"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "刺激",
                "correctResponse": "${ parameters.resp }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
                },
                "title": "空白",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "お疲れさまでした。カテゴリー分け課題は以上になります。\n最後に簡単なアンケートに答えて頂き、本実験は終了となります。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Inst_11"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "以下の質問文を読んでいただき，もっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
                },
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "はい",
                      "coding": "1"
                    },
                    {
                      "label": "いいえ",
                      "coding": "0"
                    }
                  ],
                  "label": "1．最初に読んだ記事は、不景気について書かれていた。",
                  "name": "1"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "よく当てはまる",
                      "coding": "5"
                    },
                    {
                      "label": "まあまあ当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "まったく当てはまらない",
                      "coding": "1"
                    }
                  ],
                  "label": "2．自分は将来、教員になろうと考えている。",
                  "name": "2"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"スライド1.PNG\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "よく当てはまる",
                      "coding": "5"
                    },
                    {
                      "label": "まあまあ当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "まったく当てはまらない",
                      "coding": "1"
                    }
                  ],
                  "label": "3．私は口紅を買いたいと思う。",
                  "name": "3"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "s2.PNG": "embedded\u002F0603af046cf0d9f7b2aaa38e7e7f251fcc9a1c2bf1ff2db1fac3a793fa89af9d.PNG",
                "アンケート　リップ.png": "embedded\u002F99f33f8802cc6b932cf0779704571b53c17daabc7e9d8449f65542e6ca752228.png",
                "スライド1.PNG": "embedded\u002F89019ba947a7bdf922a7587ea34aef878a0d3c5c91c0fb8b709ac7f68aff5045.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"スライド2.PNG\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "よく当てはまる",
                      "coding": "5"
                    },
                    {
                      "coding": "4",
                      "label": "まあまあ当てはまる"
                    },
                    {
                      "coding": "3",
                      "label": "どちらでもない"
                    },
                    {
                      "coding": "2",
                      "label": "あまり当てはまらない"
                    },
                    {
                      "coding": "1",
                      "label": "まったく当てはまらない"
                    }
                  ],
                  "label": "4．私はアイシャドウを買いたいと思う。",
                  "name": "4"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "s2.PNG": "embedded\u002F0603af046cf0d9f7b2aaa38e7e7f251fcc9a1c2bf1ff2db1fac3a793fa89af9d.PNG",
                "s6.PNG": "embedded\u002F44bb0960bcab9f67ae73ee7c3b951e1d8a99bf3afd9a1e63c14b0e78812fadb6.PNG",
                "アイシャドウ.png": "embedded\u002F2b067fcd1b5a0ee7944a287b07874b07ff608b37dc5f186884b424b351aeddfa.png",
                "スライド2.PNG": "embedded\u002F51e89ad3893355dc190d929a5b69c4f45f9f83578130777fbfb165be2585159d.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K4"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"スライド3.PNG\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": "5．私はコップを買いたいと思う。",
                  "options": [
                    {
                      "label": "よく当てはまる",
                      "coding": "5"
                    },
                    {
                      "label": "まあまあ当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "まったく当てはまらない",
                      "coding": "1"
                    }
                  ],
                  "name": "5"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "s2.PNG": "embedded\u002F0603af046cf0d9f7b2aaa38e7e7f251fcc9a1c2bf1ff2db1fac3a793fa89af9d.PNG",
                "s6.PNG": "embedded\u002F44bb0960bcab9f67ae73ee7c3b951e1d8a99bf3afd9a1e63c14b0e78812fadb6.PNG",
                "s4.PNG": "embedded\u002F0bb3d253e999d6acf1d28051b0e266396d4ae5ea30d70bce19bfafb417f20e5c.PNG",
                "非魅力アップアイテム３.png": "embedded\u002F47281e6bb08209d62c74cc998d413d8a1482ee384fe762387f76105f81818ee1.png",
                "スライド3.PNG": "embedded\u002Fb8ee5aa55caf995555789aacb1b506b893c79e05559c86c6b8e378ce01419866.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K5"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "image",
                  "src": "${ this.files[\"スライド4.PNG\"] }",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": "6．私は除菌シートを買いたいと思う。",
                  "options": [
                    {
                      "label": "よく当てはまる",
                      "coding": "5"
                    },
                    {
                      "label": "まあまあ当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "まったく当てはまらない",
                      "coding": "1"
                    }
                  ],
                  "name": "6"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "s2.PNG": "embedded\u002F0603af046cf0d9f7b2aaa38e7e7f251fcc9a1c2bf1ff2db1fac3a793fa89af9d.PNG",
                "s6.PNG": "embedded\u002F44bb0960bcab9f67ae73ee7c3b951e1d8a99bf3afd9a1e63c14b0e78812fadb6.PNG",
                "s4.PNG": "embedded\u002F0bb3d253e999d6acf1d28051b0e266396d4ae5ea30d70bce19bfafb417f20e5c.PNG",
                "非魅力アップアイテム３.png": "embedded\u002F47281e6bb08209d62c74cc998d413d8a1482ee384fe762387f76105f81818ee1.png",
                "非魅力アップアイテム７.png": "embedded\u002F6d4a15a0e131ade04802f04c32125ecc848d690113f6f02d6f12f8967c68f395.png",
                "アンケート　洗剤.png": "embedded\u002Fbc728e62be88d505a093c324c6af2e555eb4c031413fd8df1227b265a2ae9574.png",
                "スライド4.PNG": "embedded\u002F0df175eceb715fa89ea7b9fc4fc6eb5b5e316541101bf0c008856adb115f56a9.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K6"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "image",
                  "src": "",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": "7.　私の家族は, 自分たちが欲しいものを自由に買うことができる。",
                  "options": [
                    {
                      "label": "よく当てはまる",
                      "coding": "5"
                    },
                    {
                      "label": "まあまあ当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "まったく当てはまらない",
                      "coding": "1"
                    }
                  ],
                  "name": "7."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "s2.PNG": "embedded\u002F0603af046cf0d9f7b2aaa38e7e7f251fcc9a1c2bf1ff2db1fac3a793fa89af9d.PNG",
                "s6.PNG": "embedded\u002F44bb0960bcab9f67ae73ee7c3b951e1d8a99bf3afd9a1e63c14b0e78812fadb6.PNG",
                "s4.PNG": "embedded\u002F0bb3d253e999d6acf1d28051b0e266396d4ae5ea30d70bce19bfafb417f20e5c.PNG",
                "非魅力アップアイテム３.png": "embedded\u002F47281e6bb08209d62c74cc998d413d8a1482ee384fe762387f76105f81818ee1.png",
                "非魅力アップアイテム７.png": "embedded\u002F6d4a15a0e131ade04802f04c32125ecc848d690113f6f02d6f12f8967c68f395.png",
                "アンケート　洗剤.png": "embedded\u002Fbc728e62be88d505a093c324c6af2e555eb4c031413fd8df1227b265a2ae9574.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K7"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "image",
                  "src": "",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": "8.　自分が欲しいものを買うお金について, これまで心配したことがない。",
                  "options": [
                    {
                      "label": "よく当てはまる",
                      "coding": "5"
                    },
                    {
                      "label": "まあまあ当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "まったく当てはまらない",
                      "coding": "1"
                    }
                  ],
                  "name": "8."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "s2.PNG": "embedded\u002F0603af046cf0d9f7b2aaa38e7e7f251fcc9a1c2bf1ff2db1fac3a793fa89af9d.PNG",
                "s6.PNG": "embedded\u002F44bb0960bcab9f67ae73ee7c3b951e1d8a99bf3afd9a1e63c14b0e78812fadb6.PNG",
                "s4.PNG": "embedded\u002F0bb3d253e999d6acf1d28051b0e266396d4ae5ea30d70bce19bfafb417f20e5c.PNG",
                "非魅力アップアイテム３.png": "embedded\u002F47281e6bb08209d62c74cc998d413d8a1482ee384fe762387f76105f81818ee1.png",
                "非魅力アップアイテム７.png": "embedded\u002F6d4a15a0e131ade04802f04c32125ecc848d690113f6f02d6f12f8967c68f395.png",
                "アンケート　洗剤.png": "embedded\u002Fbc728e62be88d505a093c324c6af2e555eb4c031413fd8df1227b265a2ae9574.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K8"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "image",
                  "src": "",
                  "name": ""
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": "9.　私はお金に関して, 心配事がある。",
                  "options": [
                    {
                      "label": "よく当てはまる",
                      "coding": "5"
                    },
                    {
                      "label": "まあまあ当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "3"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "まったく当てはまらない",
                      "coding": "1"
                    }
                  ],
                  "name": "9."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "s2.PNG": "embedded\u002F0603af046cf0d9f7b2aaa38e7e7f251fcc9a1c2bf1ff2db1fac3a793fa89af9d.PNG",
                "s6.PNG": "embedded\u002F44bb0960bcab9f67ae73ee7c3b951e1d8a99bf3afd9a1e63c14b0e78812fadb6.PNG",
                "s4.PNG": "embedded\u002F0bb3d253e999d6acf1d28051b0e266396d4ae5ea30d70bce19bfafb417f20e5c.PNG",
                "非魅力アップアイテム３.png": "embedded\u002F47281e6bb08209d62c74cc998d413d8a1482ee384fe762387f76105f81818ee1.png",
                "非魅力アップアイテム７.png": "embedded\u002F6d4a15a0e131ade04802f04c32125ecc848d690113f6f02d6f12f8967c68f395.png",
                "アンケート　洗剤.png": "embedded\u002Fbc728e62be88d505a093c324c6af2e555eb4c031413fd8df1227b265a2ae9574.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　K9"
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "title": "",
              "content": "お疲れさまでした。本実験では，データをダウンロードし，メールにて提出していただいて，完了となります。\n次のページに，提出方法を記載しています。「提出方法へ」をクリックしてください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "提出方法へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Fin"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "本実験では, データをダウンロードし, 実験実施者のメールアドレスまで添付・送信していただいて, 完了となります。\n",
              "title": "調査の完了"
            },
            {
              "required": true,
              "type": "text",
              "title": "提出方法について",
              "content": "ファイルの提出方法・データの保存に関する注意事項については, 実験依頼メール（本実験URL記載メール）に記載してあります。お手数ですが, そちらをご参照の上, ファイルの提出をお願いいたします。"
            },
            {
              "required": true,
              "type": "text",
              "title": "ダウンロード方法",
              "content": "次のページにて, ダウンロードをすることができます。画面下にある「ダウンロードページへ」をクリックしてください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "ダウンロードページへ →",
          "submitButtonPosition": "right",
          "files": {
            "S-inst.jpg": "embedded\u002F6514cc2d1bd65fc82862042d3e049ff7700c33ad5bf3a4c78c7321619790c355.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Download1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "画面下にある「ダウンロードする」をクリックすると，画面上方に「Download data」というタグが表示されます。この「Download data」をクリックすると，csvファイルを保存できるようになりますので，保存してください。",
              "title": "ダウンロード方法"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"プレゼンテーション1.jpg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "データのダウンロードが完了しましたら，×印をクリックし，本実験ページを終了してください。ご協力ありがとうございました。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "ダウンロードする →",
          "submitButtonPosition": "right",
          "files": {
            "プレゼンテーション1.jpg": "embedded\u002F869eb43127f5bb9b5fb4966f6047b6b4f4b6db4d4e201df7dce5b171f8939299.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.options.datacommit = false
}
          },
          "title": "Download"
        }
      ]
    }
  ]
})

// Let's go!
study.run()
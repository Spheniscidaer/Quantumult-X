/*
京东全民开红包
活动入口：京东APP首页-领券-锦鲤红包。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)
未实现功能：领3张券功能

脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
*/
const $ = new Env("京东全民开红包");
const notify = $.isNode() ? require("./sendNotify") : "";
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
  cookie = "";
$.redPacketId = [];

if ($["isNode"]()) {
  Object["keys"](jdCookieNode)["forEach"]((_0x54e7d2) => {
    cookiesArr["push"](jdCookieNode[_0x54e7d2]);
  });
  if (process["env"]["JD_DEBUG"] && process["env"]["JD_DEBUG"] === "false")
    console["log"] = () => {};
  if (JSON["stringify"](process["env"])["indexOf"]("GITHUB") > -0x1)
    process["exit"](0x0);
} else {
  cookiesArr = [
    $["getdata"]("CookieJD"),
    $["getdata"]("CookieJD2"),
    ...jsonParse($["getdata"]("CookiesJD") || "[]")["map"](
      (_0x442041) => _0x442041["cookie"]
    ),
  ]["filter"]((_0x4422d6) => !!_0x4422d6);
}
const JD_API_HOST = "https://api.m.jd.com/api";
!(async () => {
  var _0x49f8ad = {
    UfTrk: "【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取",
    JfINh: "https://bean.m.jd.com/bean/signIndex.action",
    sFyik: function (_0x11b4c9, _0x525fe8) {
      return _0x11b4c9(_0x525fe8);
    },
    YYhcW: function (_0x816c77, _0x59bf24) {
      return _0x816c77(_0x59bf24);
    },
    JwoCg: "https://a.nz.lu/red.json",
    diVGV: function (_0xc5d282) {
      return _0xc5d282();
    },
    OTTal: function (_0x2b3e16, _0x421d23) {
      return _0x2b3e16 < _0x421d23;
    },
    qQVsA: function (_0x211e30, _0x5a4c12) {
      return _0x211e30 === _0x5a4c12;
    },
    LbDvc: "kqTPj",
    avTWh: function (_0x48abe4, _0x147edf) {
      return _0x48abe4 === _0x147edf;
    },
    sHZNa: "fjPGI",
    MjdPt: function (_0x5d607d, _0x4d2c9c) {
      return _0x5d607d + _0x4d2c9c;
    },
    WMddA: function (_0x5ced41) {
      return _0x5ced41();
    },
    DRUDr: function (_0x5ca182, _0x508340) {
      return _0x5ca182 < _0x508340;
    },
    QUVRL: function (_0xff282d, _0x1cd1ea) {
      return _0xff282d + _0x1cd1ea;
    },
    saJmu: function (_0x539a49, _0x591f0f) {
      return _0x539a49 === _0x591f0f;
    },
    alQpw: "mCmWX",
  };
  if (!cookiesArr[0x0]) {
    $["msg"]($["name"], _0x49f8ad["UfTrk"], _0x49f8ad["JfINh"], {
      "open-url": _0x49f8ad["JfINh"],
    });
    return;
  }
  let _0x49837a = await _0x49f8ad["sFyik"](
      getAuthorShareCode,
      ""
    ),
    _0x248e6f = await _0x49f8ad["YYhcW"](
      getAuthorShareCode,
      _0x49f8ad["JwoCg"]
    );
  if (!_0x49837a) _0x49837a = await _0x49f8ad["diVGV"](getAuthorShareCode);
  $["authorMyShareIds"] = [...(_0x49837a || []), ...(_0x248e6f || [])];
  for (
    let _0x40aaa2 = 0x0;
    _0x49f8ad["OTTal"](_0x40aaa2, cookiesArr["length"]);
    _0x40aaa2++
  ) {
    if (_0x49f8ad["qQVsA"]("kqTPj", _0x49f8ad["LbDvc"])) {
      if (cookiesArr[_0x40aaa2]) {
        if (_0x49f8ad["avTWh"](_0x49f8ad["sHZNa"], _0x49f8ad["sHZNa"])) {
          cookie = cookiesArr[_0x40aaa2];
          $["UserName"] = _0x49f8ad["YYhcW"](
            decodeURIComponent,
            cookie["match"](/pt_pin=([^; ]+)(?=;?)/) &&
              cookie["match"](/pt_pin=([^; ]+)(?=;?)/)[0x1]
          );
          $["index"] = _0x49f8ad["MjdPt"](_0x40aaa2, 0x1);
          $["isLogin"] = !![];
          $["nickName"] = "";
          await _0x49f8ad["diVGV"](TotalBean);
          console["log"](
            "\x0a****开始【京东账号" +
              $["index"] +
              "】" +
              ($["nickName"] || $["UserName"]) +
              "****\n"
          );
          if (!$["isLogin"]) {
            $["msg"](
              $["name"],
              "【提示】cookie已失效",
              "京东账号" +
                $["index"] +
                " " +
                ($["nickName"] || $["UserName"]) +
                "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action",
              {
                "open-url": _0x49f8ad["JfINh"],
              }
            );
            if ($["isNode"]()) {
              await notify["sendNotify"](
                $["name"] + "cookie已失效 - " + $["UserName"],
                "京东账号" +
                  $["index"] +
                  " " +
                  $["UserName"] +
                  "\n请重新登录获取cookie"
              );
            }
            continue;
          }
          $["discount"] = 0x0;
          await _0x49f8ad["diVGV"](redPacket);
          await _0x49f8ad["WMddA"](showMsg);
        } else {
          url =
            "https://api.m.jd.com/client.action?functionId=" +
            functionId +
            "&body=" +
            escape(JSON["stringify"](body)) +
            "&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100";
        }
      }
    } else {
      $["taskHomePageData"] = JSON["parse"](data);
    }
  }
  for (
    let _0x27cf3e = 0x0;
    _0x49f8ad["DRUDr"](_0x27cf3e, cookiesArr["length"]);
    _0x27cf3e++
  ) {
    cookie = cookiesArr[_0x27cf3e];
    $["index"] = _0x49f8ad["QUVRL"](_0x27cf3e, 0x1);
    $["UserName"] = _0x49f8ad["YYhcW"](
      decodeURIComponent,
      cookie["match"](/pt_pin=([^; ]+)(?=;?)/) &&
        cookie["match"](/pt_pin=([^; ]+)(?=;?)/)[0x1]
    );
    $["canHelp"] = !![];
    $["redPacketId"] = [...new Set($["redPacketId"])];
    if (cookiesArr && cookiesArr["length"] > 0x2) {
      console["log"]("\n\n自己账号内部互助");
      for (let _0x187101 of $["redPacketId"]) {
        console["log"](
          "账号 " +
            $["index"] +
            " " +
            $["UserName"] +
            " 开始给 " +
            _0x187101 +
            " 进行助力"
        );
        await _0x49f8ad["YYhcW"](jinli_h5assist, _0x187101);
        if (!$["canHelp"]) {
          if (_0x49f8ad["saJmu"](_0x49f8ad["alQpw"], _0x49f8ad["alQpw"])) {
            console["log"]("次数已用完或活动火爆，跳出助力");
            break;
          } else {
            console["log"](
              "---具体任务详情---" + JSON["stringify"](getTaskDetailForColorRes)
            );
          }
        }
      }
    }
    if ($["canHelp"]) {
      console["log"]("\n\n有剩余助力机会则给作者lxk0301进行助力");
      for (let _0x21bfd4 of $["authorMyShareIds"] || []) {
        console["log"](
          "\n账号 " +
            $["index"] +
            " " +
            $["UserName"] +
            " 开始给作者lxk0301 " +
            _0x21bfd4 +
            " 进行助力"
        );
        await _0x49f8ad["YYhcW"](jinli_h5assist, _0x21bfd4);
        if (!$["canHelp"]) {
          console["log"]("次数已用完，跳出助力");
          break;
        }
      }
    }
  }
})()
  ["catch"]((_0xd7bd0d) => {
    $["log"]("", "❌ " + $["name"] + ", 失败! 原因: " + _0xd7bd0d + "!", "");
  })
  ["finally"](() => {
    $["done"]();
  });
async function redPacket() {
  var _0x5e68f5 = {
    TzhGP: function (_0xcbb22a) {
      return _0xcbb22a();
    },
    NmynA: function (_0x5f525b) {
      return _0x5f525b();
    },
  };
  try {
    var _0x132f95 = "2|4|3|0|1"["split"]("|"),
      _0x1fc110 = 0x0;
    while (!![]) {
      switch (_0x132f95[_0x1fc110++]) {
        case "0":
          await _0x5e68f5["TzhGP"](red);
          continue;
        case "1":
          await h5activityIndex();
          continue;
        case "2":
          await _0x5e68f5["NmynA"](taskHomePage);
          continue;
        case "3":
          await h5activityIndex();
          continue;
        case "4":
          await _0x5e68f5["NmynA"](doTask);
          continue;
      }
      break;
    }
  } catch (_0x2c0f) {
    $["logErr"](_0x2c0f);
  }
}

function showMsg() {
  console["log"](
    "\x0a\x0a" + $["name"] + "获得红包：" + $["discount"] + "元\n\n"
  );
}
async function doTask() {
  var _0x49a796 = {
    gqVgf: function (_0x3dbabf) {
      return _0x3dbabf();
    },
    yVPJS: function (_0x4526c2, _0x542e6a) {
      return _0x4526c2 === _0x542e6a;
    },
    IhqGM: "biz_code",
    GAKAy: "data",
    FzBDa: "result",
    vSzVS: "statusDesc",
    hALNA: function (_0x442a3b, _0x37439e) {
      return _0x442a3b === _0x37439e;
    },
    WAdCF: "status",
    QouIY: "redPacketId",
    RCtSz: "BwMrE",
    wldns: function (_0x4605fe, _0x34e0b6) {
      return _0x4605fe > _0x34e0b6;
    },
    LyzFg: "sPrVl",
    oRKOx: "bgfqB",
    ZSlyL: function (_0x8b5f19, _0x468ab9) {
      return _0x8b5f19(_0x468ab9);
    },
    nzWAa: function (_0x4b4bc2, _0x5d0bce) {
      return _0x4b4bc2 === _0x5d0bce;
    },
    LQTbp: function (_0x2e4f2c, _0x3caefa) {
      return _0x2e4f2c !== _0x3caefa;
    },
    vMzjf: function (_0x583615, _0xd692ad) {
      return _0x583615 === _0xd692ad;
    },
    vEijT: "sREYa",
    ydgou: function (_0xcc0c26, _0x5f1dfd) {
      return _0xcc0c26 !== _0x5f1dfd;
    },
    dKqRI: function (_0xc6c3ce, _0x266bfd) {
      return _0xc6c3ce(_0x266bfd);
    },
    awlAW: function (_0x16ac93, _0x32b68b) {
      return _0x16ac93 !== _0x32b68b;
    },
    TiBsI: function (_0x1cadd9, _0x56e35e) {
      return _0x1cadd9(_0x56e35e);
    },
    oOYPx: "VpZcH",
    jIoOR: function (_0x50875b, _0x49e335) {
      return _0x50875b === _0x49e335;
    },
    zyILI: "UYCwS",
  };
  if (
    $["taskHomePageData"] &&
    _0x49a796["hALNA"]($["taskHomePageData"]["code"], 0x0)
  ) {
    if (_0x49a796["RCtSz"] === "BwMrE") {
      $["taskInfo"] = $["taskHomePageData"]["data"]["result"]["taskInfos"];
      if ($["taskInfo"] && _0x49a796["wldns"]($["taskInfo"]["length"], 0x0)) {
        console["log"]("    任务     状态  红包是否领取");
        for (let _0x469212 of $["taskInfo"]) {
          console["log"](
            _0x469212["title"]["slice"](-0x6) +
              "   " +
              (_0x469212["alreadyReceivedCount"]
                ? _0x469212["alreadyReceivedCount"]
                : 0x0) +
              "/" +
              _0x469212["requireCount"] +
              "      " +
              (_0x49a796["hALNA"](_0x469212["innerStatus"], 0x4) ? "是" : "否")
          );
        }
        for (let _0xd2cf2c of $["taskInfo"]) {
          if (_0xd2cf2c["innerStatus"] === 0x4) {
            console["log"]("[" + _0xd2cf2c["title"] + "] 已经领取奖励");
          } else if (_0x49a796["hALNA"](_0xd2cf2c["innerStatus"], 0x3)) {
            if (_0x49a796["LyzFg"] === _0x49a796["oRKOx"]) {
              _0x49a796["gqVgf"](resolve);
            } else {
              await _0x49a796["ZSlyL"](
                receiveTaskRedpacket,
                _0xd2cf2c["taskType"]
              );
            }
          } else if (_0x49a796["nzWAa"](_0xd2cf2c["innerStatus"], 0x2)) {
            if (
              _0xd2cf2c["taskType"] !== 0x0 &&
              _0x49a796["LQTbp"](_0xd2cf2c["taskType"], 0x1)
            ) {
              console["log"]("开始做【" + _0xd2cf2c["title"] + "】任务");
              await active(_0xd2cf2c["taskType"]);
              console["log"](
                "开始领取【" + _0xd2cf2c["title"] + "】任务所得红包奖励"
              );
              await receiveTaskRedpacket(_0xd2cf2c["taskType"]);
            } else if (_0x49a796["vMzjf"](_0xd2cf2c["taskType"], 0x1)) {
              if (_0x49a796["vMzjf"](_0x49a796["vEijT"], _0x49a796["vEijT"])) {
                console["log"]("开始做【" + _0xd2cf2c["title"] + "】任务");
                await doAppTask();
              } else {
                data = JSON["parse"](data);
                if (
                  data &&
                  data["data"] &&
                  _0x49a796["yVPJS"](data["data"][_0x49a796["IhqGM"]], 0x0)
                ) {
                  console["log"](
                    "助力结果：" +
                      data[_0x49a796["GAKAy"]][_0x49a796["FzBDa"]][
                        _0x49a796["vSzVS"]
                      ]
                  );
                  if (
                    _0x49a796["hALNA"](
                      data[_0x49a796["GAKAy"]]["result"][_0x49a796["WAdCF"]],
                      0x3
                    )
                  )
                    $["canHelp"] = ![];
                  if (
                    _0x49a796["hALNA"](
                      data[_0x49a796["GAKAy"]][_0x49a796["FzBDa"]][
                        _0x49a796["WAdCF"]
                      ],
                      0x9
                    )
                  )
                    $["canHelp"] = ![];
                } else {
                  console["log"]("助力异常：" + JSON["stringify"](data));
                }
              }
            } else {
              console["log"]("[" + _0xd2cf2c["title"] + "] 功能未开发");
            }
          } else if (_0x49a796["ydgou"](_0xd2cf2c["innerStatus"], 0x4)) {
            console["log"]("\x0a开始领取【" + _0xd2cf2c["title"] + "】任务");
            await _0x49a796["dKqRI"](startTask, _0xd2cf2c["taskType"]);
            if (
              _0xd2cf2c["taskType"] !== 0x0 &&
              _0x49a796["awlAW"](_0xd2cf2c["taskType"], 0x1)
            ) {
              console["log"]("开始做【" + _0xd2cf2c["title"] + "】任务");
              await _0x49a796["TiBsI"](active, _0xd2cf2c["taskType"]);
              console["log"](
                "开始领取【" + _0xd2cf2c["title"] + "】任务所得红包奖励"
              );
              await receiveTaskRedpacket(_0xd2cf2c["taskType"]);
            } else if (_0xd2cf2c["taskType"] === 0x1) {
              if (_0x49a796["oOYPx"] === _0x49a796["oOYPx"]) {
                console["log"]("开始做【" + _0xd2cf2c["title"] + "】任务");
                await doAppTask();
              } else {
                console["log"](
                  "\n\n发起助力红包 成功：红包ID " +
                    data["data"]["result"][_0x49a796["QouIY"]]
                );
                $["redPacketId"]["push"](
                  data[_0x49a796["GAKAy"]]["result"][_0x49a796["QouIY"]]
                );
              }
            } else {
              console["log"]("[" + _0xd2cf2c["title"] + "] 功能未开发");
            }
          }
        }
      }
    } else {
      console["log"]("助力异常：" + JSON["stringify"](data));
    }
  } else {
    if (_0x49a796["jIoOR"](_0x49a796["zyILI"], "UYCwS")) {
      console["log"](
        "\n获取任务列表异常：" +
          JSON["stringify"]($["taskHomePageData"]) +
          "\x0a"
      );
    } else {
      resolve(data);
    }
  }
}
async function red() {
  var _0x1d1871 = {
    dwXfg: "data",
    OngFm: "redPacketId",
    iRMfq: "result",
    XtRtn: "statusDesc",
    ZcHzK: function (_0x2c5923, _0x2396d8) {
      return _0x2c5923(_0x2396d8);
    },
    rErOf: "rewards",
    janlU: "hasSendNumber",
    VZLCF: "assistants",
    Jimqf: function (_0x485412, _0xda020b) {
      return _0x485412 !== _0xda020b;
    },
    zXPas: "XlSqB",
    NvBAs: "biz_code",
    pNyct: "nTOlj",
    cCLFf: "redpacketInfo",
    cIIxP: "requireAssistNum",
    XbhOd: "remainRedpacketNumber",
    jVrHg: "waitOpenTimes",
    wrkMT: function (_0x5e94bc, _0x2fffe6) {
      return _0x5e94bc > _0x2fffe6;
    },
    pbMpl: function (_0x348676, _0x45b9ab) {
      return _0x348676 === _0x45b9ab;
    },
    SZimB: "WjvPC",
  };
  $["hasSendNumber"] = 0x0;
  $["assistants"] = 0x0;
  if (
    $["h5activityIndex"] &&
    $["h5activityIndex"]["data"] &&
    $["h5activityIndex"]["data"][_0x1d1871["iRMfq"]]
  ) {
    const _0x2682ed =
      $["h5activityIndex"][_0x1d1871["dwXfg"]][_0x1d1871["iRMfq"]][
        _0x1d1871["rErOf"]
      ] || [];
    $["hasSendNumber"] =
      $["h5activityIndex"][_0x1d1871["dwXfg"]][_0x1d1871["iRMfq"]][
        _0x1d1871["janlU"]
      ];
    if (
      $["h5activityIndex"][_0x1d1871["dwXfg"]][_0x1d1871["iRMfq"]][
        _0x1d1871["VZLCF"]
      ]
    ) {
      $["assistants"] =
        $["h5activityIndex"][_0x1d1871["dwXfg"]]["result"]["assistants"][
          "length"
        ] || 0x0;
    }
  }
  if (
    $["h5activityIndex"] &&
    $["h5activityIndex"]["data"] &&
    $["h5activityIndex"]["data"]["biz_code"] === 0x2712
  ) {
    if (_0x1d1871["Jimqf"](_0x1d1871["zXPas"], "XlSqB")) {
      if (data[_0x1d1871["dwXfg"]]["result"][_0x1d1871["OngFm"]]) {
        console["log"](
          "\n\n发起助力红包 成功：红包ID " +
            data[_0x1d1871["dwXfg"]]["result"][_0x1d1871["OngFm"]]
        );
        $["redPacketId"]["push"](
          data["data"][_0x1d1871["iRMfq"]][_0x1d1871["OngFm"]]
        );
      } else {
        console["log"](
          "\n\n发起助力红包 失败：" + data["data"]["result"][_0x1d1871["XtRtn"]]
        );
      }
    } else {
      await h5launch();
    }
  } else if (
    $["h5activityIndex"] &&
    $["h5activityIndex"]["data"] &&
    $["h5activityIndex"]["data"][_0x1d1871["NvBAs"]] === 0x4e21
  ) {
    if (_0x1d1871["pNyct"] !== "CpJlf") {
      const _0x5e21c4 =
        $["h5activityIndex"][_0x1d1871["dwXfg"]][_0x1d1871["iRMfq"]][
          _0x1d1871["cCLFf"]
        ]["id"];
      if (_0x5e21c4) $["redPacketId"]["push"](_0x5e21c4);
      console["log"](
        "\n\n当前待拆红包ID:" +
          $["h5activityIndex"][_0x1d1871["dwXfg"]][_0x1d1871["iRMfq"]][
            _0x1d1871["cCLFf"]
          ]["id"] +
          "，进度：再邀" +
          $["h5activityIndex"][_0x1d1871["dwXfg"]]["result"][
            _0x1d1871["cIIxP"]
          ] +
          "个好友，开第" +
          ($["hasSendNumber"] + 0x1) +
          "个红包。当前已拆红包：" +
          $["hasSendNumber"] +
          "个，剩余" +
          $["h5activityIndex"]["data"]["result"][_0x1d1871["XbhOd"]] +
          "个红包待开，已有" +
          $["assistants"] +
          "好友助力\n\n"
      );
      const _0x383395 =
        $["h5activityIndex"]["data"]["result"]["redpacketInfo"][
          _0x1d1871["jVrHg"]
        ] || 0x0;
      console["log"]("当前可拆红包个数：" + _0x383395);
      if (_0x1d1871["wrkMT"](_0x383395, 0x0)) {
        for (
          let _0x49c724 = 0x0;
          _0x49c724 < new Array(_0x383395)["fill"]("")["length"];
          _0x49c724++
        ) {
          if (!_0x5e21c4) break;
          await h5receiveRedpacket(_0x5e21c4);
          await $["wait"](0x1f4);
        }
      }
    } else {
      console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
      console["log"](JSON["stringify"](err));
    }
  } else if (
    $["h5activityIndex"] &&
    $["h5activityIndex"]["data"] &&
    _0x1d1871["pbMpl"]($["h5activityIndex"]["data"]["biz_code"], 0x4e22)
  ) {
    if (_0x1d1871["pbMpl"]("WOsKC", _0x1d1871["SZimB"])) {
      _0x1d1871["ZcHzK"](resolve, data);
    } else {
      console["log"]("\x0a" + $["h5activityIndex"]["data"]["biz_msg"] + "\x0a");
    }
  }
}

function taskHomePage() {
  var _0x4adb1b = {
    ryGjY: "npCBh",
    TPKtX: "IyHMQ",
    jKzTj: function (_0x3e449f, _0x597490, _0x2ee37b) {
      return _0x3e449f(_0x597490, _0x2ee37b);
    },
  };
  return new Promise((_0x2d69f6) => {
    var _0x524f03 = {
      lPaiD: function (_0x2d1244, _0x38ba84) {
        return _0x2d1244(_0x38ba84);
      },
      QHhoo: _0x4adb1b["ryGjY"],
      aZmYi: _0x4adb1b["TPKtX"],
    };
    $["post"](
      _0x4adb1b["jKzTj"](taskUrl, arguments["callee"]["name"]["toString"](), {
        clientInfo: {},
      }),
      (_0x2fca3c, _0x5bedfc, _0x4efc65) => {
        try {
          if ("ouoSt" !== _0x524f03["QHhoo"]) {
            if (_0x2fca3c) {
              console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
              console["log"](JSON["stringify"](_0x2fca3c));
            } else {
              if (_0x524f03["aZmYi"] !== "LdKko") {
                $["taskHomePageData"] = JSON["parse"](_0x4efc65);
              } else {
                $["logErr"](e);
              }
            }
          } else {
            _0x524f03["lPaiD"](_0x2d69f6, _0x4efc65);
          }
        } catch (_0x16bc2b) {
          $["logErr"](_0x16bc2b, _0x5bedfc);
        } finally {
          _0x2d69f6(_0x4efc65);
        }
      }
    );
  });
}

function startTask(_0x1011ca) {
  var _0x5ff117 = {
    KyjEF: "https://bean.m.jd.com/bean/signIndex.action",
    peCCk: "bihqE",
    PMhFP: "MwPKY",
    CMjHE: "sOiER",
    qUXRa: "oJymi",
    yiyyu: function (_0x3b7879, _0xb67521) {
      return _0x3b7879 !== _0xb67521;
    },
    HGtzK: "OdDes",
    ccdAU: "ExRup",
    uGqww: function (_0x3885aa, _0x5e6cf6, _0x423ce4) {
      return _0x3885aa(_0x5e6cf6, _0x423ce4);
    },
    rdHsk: "token",
    nGLUC: function (_0x17cc92, _0x69d37b) {
      return _0x17cc92 + _0x69d37b;
    },
    ebToy: function (_0x2076fd, _0x398f27) {
      return _0x2076fd + _0x398f27;
    },
  };
  let _0x107c24 = {
    taskType: _0x1011ca,
  };
  _0x107c24[_0x5ff117["rdHsk"]] = $["md5"](
    $["md5"](
      _0x5ff117["nGLUC"](
        _0x5ff117["ebToy"]("j", JSON["stringify"](_0x107c24)),
        "D"
      )
    )
  );
  return new Promise((_0x25e666) => {
    var _0x207c39 = {
      WiJyd: _0x5ff117["KyjEF"],
      GYbEt: function (_0x5cf125, _0x7ce952) {
        return _0x5cf125 !== _0x7ce952;
      },
      dveNa: "EoPMz",
      zowCx: _0x5ff117["peCCk"],
      QjMsz: function (_0x1e3153, _0x1731ee) {
        return _0x1e3153 === _0x1731ee;
      },
      kuBTv: _0x5ff117["PMhFP"],
      xaaIg: _0x5ff117["CMjHE"],
      pDwvS: _0x5ff117["qUXRa"],
      lclTq: function (_0x5d98c4, _0x2062f5) {
        return _0x5d98c4(_0x2062f5);
      },
    };
    if (_0x5ff117["yiyyu"](_0x5ff117["HGtzK"], _0x5ff117["ccdAU"])) {
      $["post"](
        _0x5ff117["uGqww"](
          taskUrl,
          arguments["callee"]["name"]["toString"](),
          _0x107c24
        ),
        (_0x43ac62, _0x5897c7, _0x107c24) => {
          try {
            if (_0x207c39["GYbEt"](_0x207c39["dveNa"], _0x207c39["zowCx"])) {
              if (_0x43ac62) {
                console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
                console["log"](JSON["stringify"](_0x43ac62));
              } else {
                if (
                  _0x207c39["QjMsz"](_0x207c39["kuBTv"], _0x207c39["xaaIg"])
                ) {
                  console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
                  console["log"](JSON["stringify"](_0x43ac62));
                } else {
                  console["log"]("领取任务：" + _0x107c24);
                  _0x107c24 = JSON["parse"](_0x107c24);
                }
              }
            } else {
              $["msg"](
                $["name"],
                "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
                _0x207c39["WiJyd"],
                {
                  "open-url": "https://bean.m.jd.com/bean/signIndex.action",
                }
              );
              return;
            }
          } catch (_0x13297a) {
            $["logErr"](_0x13297a, _0x5897c7);
          } finally {
            if (_0x207c39["GYbEt"](_0x207c39["pDwvS"], "oJymi")) {
              $["logErr"](e, _0x5897c7);
            } else {
              _0x207c39["lclTq"](_0x25e666, _0x107c24);
            }
          }
        }
      );
    } else {
      $["logErr"](e, resp);
    }
  });
}
async function active(_0x5e3a86) {
  var _0x4a8245 = {
    EYluA: function (_0x5eca56, _0x24cf44) {
      return _0x5eca56(_0x24cf44);
    },
    zOfRX: function (_0x43fd02, _0x421ed6) {
      return _0x43fd02 === _0x421ed6;
    },
    stEcM: "SmDxe",
    jtFEO: function (_0x272a03, _0x569a14) {
      return _0x272a03 !== _0x569a14;
    },
    CDDte: function (_0x4c4596, _0x4cb3e3) {
      return _0x4c4596 === _0x4cb3e3;
    },
  };
  const _0x4c7885 = await _0x4a8245["EYluA"](getTaskDetailForColor, _0x5e3a86);
  if (_0x4c7885 && _0x4a8245["zOfRX"](_0x4c7885["code"], 0x0)) {
    if (_0x4a8245["stEcM"] === _0x4a8245["stEcM"]) {
      if (_0x4c7885["data"] && _0x4c7885["data"]["result"]) {
        if (_0x4a8245["jtFEO"]("odfjg", "SpVBq")) {
          const { advertDetails } = _0x4c7885["data"]["result"];
          for (let _0x27ddcc of advertDetails) {
            await $["wait"](0x3e8);
            if (
              _0x27ddcc["id"] &&
              _0x4a8245["CDDte"](_0x27ddcc["status"], 0x0)
            ) {
              await taskReportForColor(_0x5e3a86, _0x27ddcc["id"]);
            }
          }
        } else {
          console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
          console["log"](JSON["stringify"](err));
        }
      } else {
        console["log"](
          "任务列表为空,手动进入app内检查 是否存在[从京豆首页进领券中心逛30秒]的任务,如存在,请手动完成再运行脚本"
        );
        $["msg"](
          "" + $["name"],
          "",
          "手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本"
        );
        if ($["isNode"]())
          await notify["sendNotify"](
            $["name"] + " - 账号" + $["index"] + " - " + $["nickName"],
            "执行脚本出现异常\n请手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本"
          );
      }
    } else {
      console["log"]("[" + item["title"] + "] 功能未开发");
    }
  } else {
    console["log"]("---具体任务详情---" + JSON["stringify"](_0x4c7885));
  }
}

function getTaskDetailForColor(_0x2b6e60) {
  var _0x330245 = {
    HkJPe: "false",
    YpLrV: "GITHUB",
    uGDhK: function (_0x4af631, _0x4a2285) {
      return _0x4af631 === _0x4a2285;
    },
    ETzke: "kZVqB",
    BiMqF: function (_0x35413c, _0x3647b0) {
      return _0x35413c(_0x3647b0);
    },
    vqOCN: function (_0x227fdd, _0xca2725, _0x4acbe7) {
      return _0x227fdd(_0xca2725, _0x4acbe7);
    },
  };
  const _0x69f643 = {
    clientInfo: {},
    taskType: _0x2b6e60,
  };
  return new Promise((_0x438277) => {
    var _0x1a7ba5 = {
      cWtHm: _0x330245["HkJPe"],
      ofOZt: _0x330245["YpLrV"],
      lBOAp: "MmvNN",
      QdkXW: function (_0x2f271e, _0x557e01) {
        return _0x330245["uGDhK"](_0x2f271e, _0x557e01);
      },
      NWCGh: "kFNXQ",
      nqdaK: _0x330245["ETzke"],
      KBVOZ: function (_0x3002df, _0xd39a1c) {
        return _0x330245["BiMqF"](_0x3002df, _0xd39a1c);
      },
    };
    $["post"](
      _0x330245["vqOCN"](
        taskUrl,
        arguments["callee"]["name"]["toString"](),
        _0x69f643
      ),
      (_0x3242c0, _0x527399, _0x69f643) => {
        var _0x58eccc = {
          YSbIH: function (_0x588bcc, _0x28bd91) {
            return _0x588bcc === _0x28bd91;
          },
          uPiOj: _0x1a7ba5["cWtHm"],
          ncbny: _0x1a7ba5["ofOZt"],
        };
        try {
          if ("MmvNN" !== _0x1a7ba5["lBOAp"]) {
            if (_0x3242c0) {
              console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
              console["log"](JSON["stringify"](_0x3242c0));
            } else {
              _0x69f643 = JSON["parse"](_0x69f643);
            }
          } else {
            if (_0x3242c0) {
              console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
              console["log"](JSON["stringify"](_0x3242c0));
            } else {
              _0x69f643 = JSON["parse"](_0x69f643);
            }
          }
        } catch (_0x4bd6de) {
          if (_0x1a7ba5["QdkXW"](_0x1a7ba5["NWCGh"], _0x1a7ba5["nqdaK"])) {
            Object["keys"](jdCookieNode)["forEach"]((_0x2b962c) => {
              cookiesArr["push"](jdCookieNode[_0x2b962c]);
            });
            if (
              process["env"]["JD_DEBUG"] &&
              _0x58eccc["YSbIH"](process["env"]["JD_DEBUG"], _0x58eccc["uPiOj"])
            )
              console["log"] = () => {};
            if (
              JSON["stringify"](process["env"])["indexOf"](_0x58eccc["ncbny"]) >
              -0x1
            )
              process["exit"](0x0);
          } else {
            $["logErr"](_0x4bd6de, _0x527399);
          }
        } finally {
          _0x1a7ba5["KBVOZ"](_0x438277, _0x69f643);
        }
      }
    );
  });
}

function taskReportForColor(_0x28cb8b, _0x552e91) {
  var _0x5c9ccd = {
    Konpg: function (_0x2e9e80, _0x1673cd) {
      return _0x2e9e80 === _0x1673cd;
    },
    rlbOg: "Uscpc",
    lsORI: function (_0x56c000, _0x544195) {
      return _0x56c000 === _0x544195;
    },
    OTeeW: "VcQze",
    zuPSX: "GMgPf",
    TQnLx: function (_0x34fa67, _0x539516) {
      return _0x34fa67(_0x539516);
    },
    gMTtV: "tunnel",
    MvXTi: function (_0xd6f520, _0x2b840b) {
      return _0xd6f520 * _0x2b840b;
    },
    rTwod: "packetSum",
    BaUth: function (_0x342f3d, _0xef93df, _0x260ae9) {
      return _0x342f3d(_0xef93df, _0x260ae9);
    },
    FAEWh: "token",
    cHwKw: function (_0x1a95c6, _0x1f4b79) {
      return _0x1a95c6 + _0x1f4b79;
    },
  };
  const _0x472009 = {
    taskType: _0x28cb8b,
    detailId: _0x552e91,
  };
  _0x472009[_0x5c9ccd["FAEWh"]] = $["md5"](
    $["md5"](
      _0x5c9ccd["cHwKw"](
        _0x5c9ccd["cHwKw"]("j", JSON["stringify"](_0x472009)),
        "D"
      )
    )
  );
  return new Promise((_0x2461dd) => {
    var _0x3d5ec9 = {
      VfHZz: _0x5c9ccd["gMTtV"],
      oGBke: function (_0x243e68, _0x2dca10) {
        return _0x5c9ccd["MvXTi"](_0x243e68, _0x2dca10);
      },
      aNJcr: "result",
      UdfnA: "data",
      KfYcR: _0x5c9ccd["rTwod"],
    };
    $["post"](
      _0x5c9ccd["BaUth"](
        taskUrl,
        arguments["callee"]["name"]["toString"](),
        _0x472009
      ),
      (_0x4b178a, _0x35a442, _0x472009) => {
        var _0x4fc19c = {
          YexRy: "reportCcTask",
        };
        if (_0x5c9ccd["Konpg"]("Uscpc", _0x5c9ccd["rlbOg"])) {
          try {
            if (_0x4b178a) {
              if (_0x5c9ccd["lsORI"](_0x5c9ccd["OTeeW"], _0x5c9ccd["OTeeW"])) {
                console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
                console["log"](JSON["stringify"](_0x4b178a));
              } else {
                const _0x21c234 = require(_0x3d5ec9["VfHZz"]);
                const _0x50712b = {
                  https: _0x21c234["httpsOverHttp"]({
                    proxy: {
                      host: process["env"]["TG_PROXY_HOST"],
                      port: _0x3d5ec9["oGBke"](
                        process["env"]["TG_PROXY_PORT"],
                        0x1
                      ),
                    },
                  }),
                };
                Object["assign"](options, {
                  agent: _0x50712b,
                });
              }
            } else {
              if (_0x5c9ccd["lsORI"](_0x5c9ccd["zuPSX"], _0x5c9ccd["zuPSX"])) {
                _0x472009 = JSON["parse"](_0x472009);
              } else {
                if (_0x472009) {
                  if (type === "1" && functionId === _0x4fc19c["YexRy"])
                    console["log"]("京东首页点击“领券”逛10s任务:" + _0x472009);
                }
              }
            }
          } catch (_0x27f7f0) {
            $["logErr"](_0x27f7f0, _0x35a442);
          } finally {
            _0x5c9ccd["TQnLx"](_0x2461dd, _0x472009);
          }
        } else {
          _0x472009 = JSON["parse"](_0x472009);
          $["h5activityIndex"] = _0x472009;
          $["discount"] = 0x0;
          if (
            $["h5activityIndex"] &&
            $["h5activityIndex"]["data"] &&
            $["h5activityIndex"]["data"][_0x3d5ec9["aNJcr"]]
          ) {
            const _0x31bfcc =
              $["h5activityIndex"][_0x3d5ec9["UdfnA"]][_0x3d5ec9["aNJcr"]][
                "rewards"
              ] || [];
            for (let _0x26d8af of _0x31bfcc) {
              $["discount"] += _0x26d8af[_0x3d5ec9["KfYcR"]];
            }
            if ($["discount"]) $["discount"] = $["discount"]["toFixed"](0x2);
          }
        }
      }
    );
  });
}

function receiveTaskRedpacket(_0x2ef42e) {
  var _0x3236f6 = {
    NzIcg: "SNmCE",
    lKPco: function (_0x66b5c9, _0x2b357e) {
      return _0x66b5c9 !== _0x2b357e;
    },
    EscPu: "AiEjh",
    sNuKx: "dHmZQ",
    xtDyw: function (_0x3bc897, _0x2bdd5e) {
      return _0x3bc897(_0x2bdd5e);
    },
    ePaDZ: function (_0x279a70, _0x270ed0) {
      return _0x279a70 === _0x270ed0;
    },
    Oiwuc: "xanOz",
    pyJjO: "LYITQ",
    rPkRJ: "reportCcTask",
    zItNe: function (_0x3a6a85, _0x5a83a7) {
      return _0x3a6a85 === _0x5a83a7;
    },
    Ofpog: "HSoJu",
    OeHUg: "udYwn",
    RrFWJ: function (_0x26eebe, _0x2fffd5, _0x574665) {
      return _0x26eebe(_0x2fffd5, _0x574665);
    },
  };
  const _0xf643ac = {
    clientInfo: {},
    taskType: _0x2ef42e,
  };
  return new Promise((_0x251acf) => {
    var _0x48437e = {
      lqerr: function (_0x44cd15, _0x58133a) {
        return _0x3236f6["ePaDZ"](_0x44cd15, _0x58133a);
      },
      EPsUI: _0x3236f6["rPkRJ"],
      KjbxA: function (_0x159ded) {
        return _0x159ded();
      },
    };
    if (_0x3236f6["zItNe"](_0x3236f6["Ofpog"], _0x3236f6["OeHUg"])) {
      if (
        _0x48437e["lqerr"](type, "1") &&
        _0x48437e["lqerr"](functionId, _0x48437e["EPsUI"])
      )
        console["log"]("京东首页点击“领券”逛10s任务:" + data);
    } else {
      $["post"](
        _0x3236f6["RrFWJ"](
          taskUrl,
          arguments["callee"]["name"]["toString"](),
          _0xf643ac
        ),
        (_0x5cd32a, _0x30292f, _0x598b9f) => {
          var _0x347bdb = {
            iIzuX: "biz_msg",
          };
          if (_0x3236f6["NzIcg"] === "dgebv") {
            _0x48437e["KjbxA"](_0x251acf);
          } else {
            try {
              if (_0x3236f6["lKPco"]("IMhvF", _0x3236f6["EscPu"])) {
                if (_0x5cd32a) {
                  console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
                  console["log"](JSON["stringify"](_0x5cd32a));
                } else {
                  if (_0x3236f6["lKPco"]("dHmZQ", _0x3236f6["sNuKx"])) {
                    console["log"](
                      "\x0a" + $["name"] + ": API查询请求失败 ‼️‼️"
                    );
                    console["log"](JSON["stringify"](_0x5cd32a));
                  } else {
                    _0x598b9f = JSON["parse"](_0x598b9f);
                    if (
                      _0x598b9f["data"]["success"] &&
                      _0x598b9f["data"]["biz_code"] === 0x0
                    ) {
                      console["log"](
                        "红包领取成功，获得" +
                          _0x598b9f["data"]["result"]["discount"] +
                          "元\x0a"
                      );
                      $["discount"] += _0x3236f6["xtDyw"](
                        Number,
                        _0x598b9f["data"]["result"]["discount"]
                      );
                    }
                  }
                }
              } else {
                _0x251acf();
              }
            } catch (_0x516275) {
              if (_0x3236f6["ePaDZ"](_0x3236f6["Oiwuc"], _0x3236f6["pyJjO"])) {
                console["log"](
                  "\x0a" +
                    $["h5activityIndex"]["data"][_0x347bdb["iIzuX"]] +
                    "\x0a"
                );
              } else {
                $["logErr"](_0x516275, _0x30292f);
              }
            } finally {
              _0x3236f6["xtDyw"](_0x251acf, _0x598b9f);
            }
          }
        }
      );
    }
  });
}

function jinli_h5assist(_0x4b5d1b) {
  var _0x165ba8 = {
    XqPtm: function (_0x2872ce, _0x5216ee) {
      return _0x2872ce(_0x5216ee);
    },
    aNuzg: "MlGzI",
    NLLAz: function (_0x58924e, _0x38770b) {
      return _0x58924e === _0x38770b;
    },
    OrTAw: "biz_code",
    TxuHg: "data",
    IVNZG: "result",
    zRnvu: "status",
    NHCzl: function (_0x393e14, _0x48ad98) {
      return _0x393e14 === _0x48ad98;
    },
    fKqAH: function (_0x1bed69, _0x490f15) {
      return _0x1bed69 !== _0x490f15;
    },
    axhGc: function (_0x444d14) {
      return _0x444d14();
    },
    CYVtZ: "siMFG",
  };
  const _0x10d6cb = {
    clientInfo: {},
    redPacketId: _0x4b5d1b,
    followShop: 0x0,
    promUserState: "",
  };
  const _0x50a206 = taskUrl(
    arguments["callee"]["name"]["toString"](),
    _0x10d6cb
  );
  return new Promise((_0x122925) => {
    if (_0x165ba8["CYVtZ"] === "eFYWN") {
      if (err) {
      } else {
        if (data) data = JSON["parse"](data);
      }
    } else {
      $["post"](_0x50a206, (_0xb5e67e, _0x2afa1b, _0x382f58) => {
        var _0x2b642e = {
          GnyPo: function (_0x520125, _0x5a5afc) {
            return _0x165ba8["XqPtm"](_0x520125, _0x5a5afc);
          },
        };
        try {
          if (_0x165ba8["aNuzg"] !== _0x165ba8["aNuzg"]) {
            _0x122925(_0x382f58);
          } else {
            if (_0xb5e67e) {
              console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
              console["log"](JSON["stringify"](_0xb5e67e));
            } else {
              _0x382f58 = JSON["parse"](_0x382f58);
              if (
                _0x382f58 &&
                _0x382f58["data"] &&
                _0x165ba8["NLLAz"](_0x382f58["data"][_0x165ba8["OrTAw"]], 0x0)
              ) {
                if (_0x165ba8["NLLAz"]("xVHjo", "mWYXj")) {
                  console["log"](
                    "红包领取成功，获得" +
                      _0x382f58["data"]["result"]["discount"] +
                      "元\x0a"
                  );
                  $["discount"] += _0x2b642e["GnyPo"](
                    Number,
                    _0x382f58["data"]["result"]["discount"]
                  );
                } else {
                  console["log"](
                    "助力结果：" +
                      _0x382f58[_0x165ba8["TxuHg"]][_0x165ba8["IVNZG"]][
                        "statusDesc"
                      ]
                  );
                  if (
                    _0x165ba8["NLLAz"](
                      _0x382f58[_0x165ba8["TxuHg"]]["result"][
                        _0x165ba8["zRnvu"]
                      ],
                      0x3
                    )
                  )
                    $["canHelp"] = ![];
                  if (
                    _0x165ba8["NHCzl"](
                      _0x382f58["data"]["result"][_0x165ba8["zRnvu"]],
                      0x9
                    )
                  )
                    $["canHelp"] = ![];
                }
              } else {
                if (_0x165ba8["fKqAH"]("ZFVra", "HNIll")) {
                  console["log"]("助力异常：" + JSON["stringify"](_0x382f58));
                } else {
                  _0x382f58 = JSON["parse"](_0x382f58);
                }
              }
            }
          }
        } catch (_0x4a4368) {
          $["logErr"](_0x4a4368, _0x2afa1b);
        } finally {
          _0x165ba8["axhGc"](_0x122925);
        }
      });
    }
  });
}

function h5receiveRedpacket(_0x1efd06) {
  var _0x5b80ef = {
    hoNTm: function (_0x1ea3fd, _0x4987ed) {
      return _0x1ea3fd === _0x4987ed;
    },
    hfTWQ: "biz_code",
    XsxAH: "data",
    ubpcU: "discount",
    jwcUD: "PWDbH",
    ndWyY: function (_0xb22474, _0x3f59e4) {
      return _0xb22474 !== _0x3f59e4;
    },
    YuqLY: "QBgon",
    oUmrG: "fEflR",
    knFoi: "token",
    hjazB: function (_0x34fec1, _0x59af54) {
      return _0x34fec1 + _0x59af54;
    },
    nfBsy: function (_0xc5c416, _0x2ab183, _0x48e972) {
      return _0xc5c416(_0x2ab183, _0x48e972);
    },
  };
  const _0x9c72bc = {
    redPacketId: _0x1efd06,
  };
  _0x9c72bc[_0x5b80ef["knFoi"]] = $["md5"](
    $["md5"](
      _0x5b80ef["hjazB"](
        _0x5b80ef["hjazB"]("j", JSON["stringify"](_0x9c72bc)),
        "D"
      )
    )
  );
  const _0x258f12 = _0x5b80ef["nfBsy"](
    taskUrl,
    arguments["callee"]["name"]["toString"](),
    _0x9c72bc
  );
  return new Promise((_0xb89799) => {
    var _0x1b9f90 = {
      aOjsm: function (_0xba428a, _0x48ee04) {
        return _0x5b80ef["hoNTm"](_0xba428a, _0x48ee04);
      },
      cXhpg: _0x5b80ef["hfTWQ"],
      eAjxG: _0x5b80ef["XsxAH"],
      KdqyQ: "result",
      NGSdi: _0x5b80ef["ubpcU"],
      LplqB: _0x5b80ef["jwcUD"],
      ihVvS: function (_0x27a1c2, _0x38b9a1) {
        return _0x5b80ef["ndWyY"](_0x27a1c2, _0x38b9a1);
      },
      QStpM: "FfSsX",
      QSztg: "AAOCR",
      wRqfa: _0x5b80ef["YuqLY"],
      Rybdw: _0x5b80ef["oUmrG"],
      fhgyV: function (_0x461810, _0x1ef64e) {
        return _0x461810(_0x1ef64e);
      },
    };
    $["post"](_0x258f12, (_0x4d180c, _0x5ba522, _0x9c72bc) => {
      if (_0x1b9f90["aOjsm"]("XLNUu", _0x1b9f90["LplqB"])) {
        $["logErr"](e, _0x5ba522);
      } else {
        try {
          if (_0x4d180c) {
            console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
            console["log"](JSON["stringify"](_0x4d180c));
          } else {
            if (_0x1b9f90["ihVvS"](_0x1b9f90["QStpM"], _0x1b9f90["QSztg"])) {
              _0x9c72bc = JSON["parse"](_0x9c72bc);
              if (
                _0x9c72bc &&
                _0x9c72bc["data"] &&
                _0x1b9f90["aOjsm"](_0x9c72bc["data"]["biz_code"], 0x0)
              ) {
                if (_0x1b9f90["ihVvS"]("XEknl", "PvaMQ")) {
                  console["log"](
                    "拆红包获得：" +
                      _0x9c72bc[_0x1b9f90["eAjxG"]][_0x1b9f90["KdqyQ"]][
                        _0x1b9f90["NGSdi"]
                      ] +
                      "元"
                  );
                } else {
                  url =
                    "https://api.m.jd.com/client.action?functionId=" +
                    functionId +
                    "&body=" +
                    escape(JSON["stringify"](body)) +
                    "&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120";
                }
              } else {
                console["log"]("领红包失败：" + JSON["stringify"](_0x9c72bc));
              }
            } else {
              $["logErr"](e, _0x5ba522);
            }
          }
        } catch (_0x2b2ae9) {
          if (_0x1b9f90["wRqfa"] === _0x1b9f90["Rybdw"]) {
            _0x9c72bc = JSON["parse"](_0x9c72bc);
            if (
              _0x9c72bc &&
              _0x9c72bc["data"] &&
              _0x1b9f90["aOjsm"](_0x9c72bc["data"][_0x1b9f90["cXhpg"]], 0x0)
            ) {
              console["log"](
                "拆红包获得：" +
                  _0x9c72bc[_0x1b9f90["eAjxG"]][_0x1b9f90["KdqyQ"]][
                    _0x1b9f90["NGSdi"]
                  ] +
                  "元"
              );
            } else {
              console["log"]("领红包失败：" + JSON["stringify"](_0x9c72bc));
            }
          } else {
            $["logErr"](_0x2b2ae9, _0x5ba522);
          }
        } finally {
          _0x1b9f90["fhgyV"](_0xb89799, _0x9c72bc);
        }
      }
    });
  });
}

function h5launch() {
  var _0x38b723 = {
    tEmuQ: function (_0x13977e, _0x228a74) {
      return _0x13977e === _0x228a74;
    },
    rcoLG: "reportCcTask",
    lDWxl: function (_0x200d33, _0x48467e) {
      return _0x200d33(_0x48467e);
    },
    UeYse: "ZchZf",
    phjxq: "biz_code",
    AYBbP: "result",
    sqtud: function (_0x33fdaf, _0x573a84) {
      return _0x33fdaf !== _0x573a84;
    },
    rkTtx: "oBSvV",
    ETKhH: "JxqhD",
    oqjun: "redPacketId",
    kSauB: "data",
    VsYog: "statusDesc",
    DvfJM: "dbmkp",
    BLTtU: function (_0x18bc7f, _0x261afd) {
      return _0x18bc7f !== _0x261afd;
    },
    lSqjx: "PZdPr",
    zzcjz: "JSJYp",
    uUIbj: function (_0x553da9, _0x36fa78, _0x552062) {
      return _0x553da9(_0x36fa78, _0x552062);
    },
  };
  const _0x5b3c83 = {
    clientInfo: {},
    followShop: 0x0,
    promUserState: "",
  };
  const _0x26fe67 = _0x38b723["uUIbj"](
    taskUrl,
    arguments["callee"]["name"]["toString"](),
    _0x5b3c83
  );
  return new Promise((_0xaae0cf) => {
    var _0x5b943c = {
      hluar: function (_0x4caf44, _0x422caa) {
        return _0x38b723["lDWxl"](_0x4caf44, _0x422caa);
      },
    };
    if ("YlCRg" === _0x38b723["zzcjz"]) {
      _0xaae0cf(data);
    } else {
      $["post"](_0x26fe67, (_0x542d6e, _0x134b4a, _0x4ed5af) => {
        var _0x5be4d3 = {
          oVZMH: function (_0x23f60f, _0x39907d) {
            return _0x38b723["tEmuQ"](_0x23f60f, _0x39907d);
          },
          wacyJ: _0x38b723["rcoLG"],
          txsyx: function (_0x2fdb17, _0xea106d) {
            return _0x38b723["lDWxl"](_0x2fdb17, _0xea106d);
          },
        };
        if ("ZchZf" === _0x38b723["UeYse"]) {
          try {
            if (_0x542d6e) {
              console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
              console["log"](JSON["stringify"](_0x542d6e));
            } else {
              _0x4ed5af = JSON["parse"](_0x4ed5af);
              if (
                _0x4ed5af &&
                _0x4ed5af["data"] &&
                _0x4ed5af["data"][_0x38b723["phjxq"]] === 0x0
              ) {
                if (_0x4ed5af["data"][_0x38b723["AYBbP"]]["redPacketId"]) {
                  if (
                    _0x38b723["sqtud"](_0x38b723["rkTtx"], _0x38b723["ETKhH"])
                  ) {
                    console["log"](
                      "\n\n发起助力红包 成功：红包ID " +
                        _0x4ed5af["data"][_0x38b723["AYBbP"]][
                          _0x38b723["oqjun"]
                        ]
                    );
                    $["redPacketId"]["push"](
                      _0x4ed5af[_0x38b723["kSauB"]][_0x38b723["AYBbP"]][
                        _0x38b723["oqjun"]
                      ]
                    );
                  } else {
                    _0x4ed5af = JSON["parse"](_0x4ed5af);
                    if (
                      _0x4ed5af["data"]["success"] &&
                      _0x4ed5af["data"]["biz_code"] === 0x0
                    ) {
                      console["log"](
                        "红包领取成功，获得" +
                          _0x4ed5af["data"]["result"]["discount"] +
                          "元\x0a"
                      );
                      $["discount"] += _0x5b943c["hluar"](
                        Number,
                        _0x4ed5af["data"]["result"]["discount"]
                      );
                    }
                  }
                } else {
                  console["log"](
                    "\n\n发起助力红包 失败：" +
                      _0x4ed5af[_0x38b723["kSauB"]][_0x38b723["AYBbP"]][
                        _0x38b723["VsYog"]
                      ]
                  );
                }
              } else {
                if (_0x38b723["tEmuQ"]("dbmkp", _0x38b723["DvfJM"])) {
                  console["log"](
                    "发起助力红包 失败：" + JSON["stringify"](_0x4ed5af)
                  );
                } else {
                  if (_0x542d6e) {
                    console["log"]("" + JSON["stringify"](_0x542d6e));
                    console["log"]($["name"] + " API请求失败，请检查网路重试");
                  } else {
                    if (_0x4ed5af) {
                      if (
                        _0x5be4d3["oVZMH"](type, "1") &&
                        _0x5be4d3["oVZMH"](functionId, _0x5be4d3["wacyJ"])
                      )
                        console["log"](
                          "京东首页点击“领券”逛10s任务:" + _0x4ed5af
                        );
                    }
                  }
                }
              }
            }
          } catch (_0x14548e) {
            if (_0x38b723["BLTtU"]("iJhxY", _0x38b723["lSqjx"])) {
              $["logErr"](_0x14548e, _0x134b4a);
            } else {
              $["logErr"](_0x14548e, _0x134b4a);
            }
          } finally {
            _0xaae0cf(_0x4ed5af);
          }
        } else {
          _0x5be4d3["txsyx"](_0xaae0cf, _0x4ed5af);
        }
      });
    }
  });
}

function h5activityIndex() {
  var _0x5716b6 = {
    bNDPZ: "UXKle",
    Uimsh: "result",
    mImNB: function (_0xaca5d5) {
      return _0xaca5d5();
    },
    NqEHZ: function (_0x4a8c91, _0x53452f, _0x2ab2c7) {
      return _0x4a8c91(_0x53452f, _0x2ab2c7);
    },
  };
  const _0x567165 = {
    clientInfo: {},
    isjdapp: 0x1,
  };
  const _0x3c59bb = _0x5716b6["NqEHZ"](
    taskUrl,
    arguments["callee"]["name"]["toString"](),
    _0x567165
  );
  return new Promise((_0x162ac4) => {
    var _0x254375 = {
      wIgxc: _0x5716b6["bNDPZ"],
      rIrSG: _0x5716b6["Uimsh"],
      BxaRz: "data",
      xagwQ: function (_0x14e96f) {
        return _0x5716b6["mImNB"](_0x14e96f);
      },
    };
    $["post"](_0x3c59bb, async (_0x25fc35, _0x584d47, _0x22fd85) => {
      if (_0x254375["wIgxc"] === _0x254375["wIgxc"]) {
        try {
          if (_0x25fc35) {
            console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
            console["log"](JSON["stringify"](_0x25fc35));
          } else {
            _0x22fd85 = JSON["parse"](_0x22fd85);
            $["h5activityIndex"] = _0x22fd85;
            $["discount"] = 0x0;
            if (
              $["h5activityIndex"] &&
              $["h5activityIndex"]["data"] &&
              $["h5activityIndex"]["data"][_0x254375["rIrSG"]]
            ) {
              const _0x1dcbda =
                $["h5activityIndex"][_0x254375["BxaRz"]][_0x254375["rIrSG"]][
                  "rewards"
                ] || [];
              for (let _0x4b0fbb of _0x1dcbda) {
                $["discount"] += _0x4b0fbb["packetSum"];
              }
              if ($["discount"]) $["discount"] = $["discount"]["toFixed"](0x2);
            }
          }
        } catch (_0x41ceac) {
          $["logErr"](_0x41ceac, _0x584d47);
        } finally {
          _0x254375["xagwQ"](_0x162ac4);
        }
      } else {
        _0x22fd85 = JSON["parse"](_0x22fd85);
      }
    });
  });
}
async function doAppTask(_0x814d4f = "1") {
  var _0x5c3952 = {
    SVuSQ: "CouponCenter",
    xjPBs: function (_0x271e8f, _0x1397b3, _0x3c916c, _0x467810) {
      return _0x271e8f(_0x1397b3, _0x3c916c, _0x467810);
    },
    IRNvz:
      "openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d",
    AWZqw: "727",
  };
  let _0xcff22e = {
    pageClickKey: _0x5c3952["SVuSQ"],
    childActivityUrl:
      "openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d",
    lat: "",
    globalLat: "",
    lng: "",
    globalLng: "",
  };
  await _0x5c3952["xjPBs"](
    getCcTaskList,
    "getCcTaskList",
    _0xcff22e,
    _0x814d4f
  );
  _0xcff22e = {
    globalLng: "",
    globalLat: "",
    monitorSource: "ccgroup_ios_index_task",
    monitorRefer: "",
    taskType: "1",
    childActivityUrl: _0x5c3952["IRNvz"],
    pageClickKey: _0x5c3952["SVuSQ"],
    lat: "",
    taskId: _0x5c3952["AWZqw"],
    lng: "",
  };
  await $["wait"](0x2904);
  await _0x5c3952["xjPBs"](getCcTaskList, "reportCcTask", _0xcff22e, _0x814d4f);
}

function getCcTaskList(_0x24374a, _0x401bb4, _0x468468 = "1") {
  var _0x2647fb = {
    MQahz: function (_0x5154ee, _0x1dfc06) {
      return _0x5154ee !== _0x1dfc06;
    },
    wDqVt: function (_0x7836e4, _0x39779c) {
      return _0x7836e4 === _0x39779c;
    },
    EIgVP: function (_0x21bb22) {
      return _0x21bb22();
    },
    HIxTD: "VCYVG",
    WBFUg: "hzqBw",
    OEJMn: "getCcTaskList",
    kPObY: "PmjwI",
    gwMvg: function (_0x58b4c6, _0x1587ba) {
      return _0x58b4c6(_0x1587ba);
    },
    Ywtsm: "reportCcTask",
    zLboz: "application/json, text/plain, */*",
    jrNNN:
      "https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html",
    niNvQ: "JDUA",
  };
  let _0x22e4ad = "";
  return new Promise((_0x566f63) => {
    var _0x2fd017 = {
      RVcpT: function (_0x57bbe1, _0x8520b8) {
        return _0x2647fb["MQahz"](_0x57bbe1, _0x8520b8);
      },
      CMCIk: function (_0xd6eb32, _0x540853) {
        return _0x2647fb["wDqVt"](_0xd6eb32, _0x540853);
      },
      LGBEI: function (_0x35e8e8) {
        return _0x2647fb["EIgVP"](_0x35e8e8);
      },
    };
    if (_0x2647fb["HIxTD"] === _0x2647fb["WBFUg"]) {
      $["logErr"](e, resp);
    } else {
      if (_0x24374a === _0x2647fb["OEJMn"]) {
        if (_0x2647fb["kPObY"] !== "PmjwI") {
          console["log"]("发起助力红包 失败：" + JSON["stringify"](data));
        } else {
          _0x22e4ad =
            "https://api.m.jd.com/client.action?functionId=" +
            _0x24374a +
            "&body=" +
            _0x2647fb["gwMvg"](escape, JSON["stringify"](_0x401bb4)) +
            "&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100";
        }
      } else if (_0x24374a === _0x2647fb["Ywtsm"]) {
        _0x22e4ad =
          "https://api.m.jd.com/client.action?functionId=" +
          _0x24374a +
          "&body=" +
          _0x2647fb["gwMvg"](escape, JSON["stringify"](_0x401bb4)) +
          "&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120";
      }
      const _0x41b156 = {
        url: _0x22e4ad,
        body:
          "body=" + _0x2647fb["gwMvg"](escape, JSON["stringify"](_0x401bb4)),
        headers: {
          Accept: _0x2647fb["zLboz"],
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-cn",
          Connection: "keep-alive",
          "Content-Length": "63",
          "Content-Type": "application/x-www-form-urlencoded",
          Host: "api.m.jd.com",
          Origin: "https://h5.m.jd.com",
          Cookie: cookie,
          Referer: _0x2647fb["jrNNN"],
          "User-Agent": $["isNode"]()
            ? process["env"]["JD_USER_AGENT"]
              ? process["env"]["JD_USER_AGENT"]
              : _0x2647fb["gwMvg"](require, "./USER_AGENTS")["USER_AGENT"]
            : $["getdata"](_0x2647fb["niNvQ"])
            ? $["getdata"]("JDUA")
            : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        },
      };
      $["post"](_0x41b156, async (_0x38d167, _0x955143, _0x8e7e24) => {
        try {
          if (_0x2fd017["RVcpT"]("DQXGX", "DQXGX")) {
            if (_0x38d167) {
              console["log"]("\x0a" + $["name"] + ": API查询请求失败 ‼️‼️");
              console["log"](JSON["stringify"](_0x38d167));
            } else {
              _0x8e7e24 = JSON["parse"](_0x8e7e24);
            }
          } else {
            if (_0x38d167) {
              console["log"]("" + JSON["stringify"](_0x38d167));
              console["log"]($["name"] + " API请求失败，请检查网路重试");
            } else {
              if (_0x8e7e24) {
                if (
                  _0x2fd017["CMCIk"](_0x468468, "1") &&
                  _0x24374a === "reportCcTask"
                )
                  console["log"]("京东首页点击“领券”逛10s任务:" + _0x8e7e24);
              }
            }
          }
        } catch (_0x4ce254) {
          $["logErr"](_0x4ce254, _0x955143);
        } finally {
          _0x2fd017["LGBEI"](_0x566f63);
        }
      });
    }
  });
}

function getAuthorShareCode(
  _0x737506 = ""
) {
  var _0x2ce9bd = {
    nTxXv: "packetSum",
    jwavh: "hWrMb",
    vQtik: function (_0x425af2, _0x435e3a) {
      return _0x425af2 !== _0x435e3a;
    },
    wmEcc: "YgYxV",
    dYMTZ: "VdjzO",
    hLHFr: "zhDnE",
    ncxBR: function (_0x256f96, _0x67dd6) {
      return _0x256f96(_0x67dd6);
    },
    nAEED: function (_0x3899e9, _0x82e41b) {
      return _0x3899e9 * _0x82e41b;
    },
  };
  return new Promise((_0x5e3f69) => {
    var _0x5c6927 = {
      iFfhF: _0x2ce9bd["nTxXv"],
      ncrnP: _0x2ce9bd["jwavh"],
      YIZPK: function (_0x1573d0, _0x28d4db) {
        return _0x1573d0(_0x28d4db);
      },
    };
    if (_0x2ce9bd["vQtik"](_0x2ce9bd["wmEcc"], _0x2ce9bd["wmEcc"])) {
      console["log"]("领红包失败：" + JSON["stringify"](data));
    } else {
      const _0x2bfc59 = {
        url: _0x737506 + "?" + new Date(),
        timeout: 0x2710,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88",
        },
      };
      if (
        $["isNode"]() &&
        process["env"]["TG_PROXY_HOST"] &&
        process["env"]["TG_PROXY_PORT"]
      ) {
        if (_0x2ce9bd["vQtik"](_0x2ce9bd["dYMTZ"], _0x2ce9bd["hLHFr"])) {
          const _0x2d11c8 = _0x2ce9bd["ncxBR"](require, "tunnel");
          const _0x1a5755 = {
            https: _0x2d11c8["httpsOverHttp"]({
              proxy: {
                host: process["env"]["TG_PROXY_HOST"],
                port: _0x2ce9bd["nAEED"](process["env"]["TG_PROXY_PORT"], 0x1),
              },
            }),
          };
          Object["assign"](_0x2bfc59, {
            agent: _0x1a5755,
          });
        } else {
          $["discount"] += item[_0x5c6927["iFfhF"]];
        }
      }
      $["get"](_0x2bfc59, async (_0x33c481, _0x27f22d, _0x496a38) => {
        if (_0x5c6927["ncrnP"] !== "hWrMb") {
          console["log"]("领取任务：" + _0x496a38);
          _0x496a38 = JSON["parse"](_0x496a38);
        } else {
          try {
            if (_0x33c481) {
            } else {
              if (_0x496a38) _0x496a38 = JSON["parse"](_0x496a38);
            }
          } catch (_0x497d30) {
          } finally {
            _0x5c6927["YIZPK"](_0x5e3f69, _0x496a38);
          }
        }
      });
    }
  });
}

function taskUrl(_0x515b36, _0x314580) {
  var _0x13e303 = {
    KgNOU: function (_0xbc2dd1, _0x1ae555) {
      return _0xbc2dd1 * _0x1ae555;
    },
    jOqMF: "api.m.jd.com",
    flaRH: "application/x-www-form-urlencoded",
    NSCyg: "https://happy.m.jd.com",
    NZiUC: "gzip, deflate, br",
    ECXyB: "keep-alive",
    fYxzx: "*/*",
    ExqUp: function (_0x7dbe25, _0x2e9497) {
      return _0x7dbe25(_0x2e9497);
    },
    CLQnL: "./USER_AGENTS",
    hrRhK: "JDUA",
    fHhCm:
      "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
    moEMt:
      "https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html",
  };
  return {
    url:
      JD_API_HOST +
      "?appid=jd_mp_h5&functionId=" +
      _0x515b36 +
      "&loginType=2&client=jd_mp_h5&t=" +
      _0x13e303["KgNOU"](new Date()["getTime"](), 0x3e8),
    body: "body=" + JSON["stringify"](_0x314580),
    headers: {
      Host: _0x13e303["jOqMF"],
      "Content-Type": _0x13e303["flaRH"],
      Origin: _0x13e303["NSCyg"],
      "Accept-Encoding": _0x13e303["NZiUC"],
      Cookie: cookie,
      Connection: _0x13e303["ECXyB"],
      Accept: _0x13e303["fYxzx"],
      "User-Agent": $["isNode"]()
        ? process["env"]["JD_USER_AGENT"]
          ? process["env"]["JD_USER_AGENT"]
          : _0x13e303["ExqUp"](require, _0x13e303["CLQnL"])["USER_AGENT"]
        : $["getdata"](_0x13e303["hrRhK"])
        ? $["getdata"](_0x13e303["hrRhK"])
        : _0x13e303["fHhCm"],
      Referer: _0x13e303["moEMt"],
      "Content-Length": "36",
      "Accept-Language": "zh-cn",
    },
  };
}
_0xodT = "jsjiami.com.v6";

function TotalBean() {
  return new Promise(async (resolve) => {
    const options = {
      url: `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      headers: {
        Accept: "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: cookie,
        Referer: "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode()
          ? process.env.JD_USER_AGENT
            ? process.env.JD_USER_AGENT
            : require("./USER_AGENTS").USER_AGENT
          : $.getdata("JDUA")
          ? $.getdata("JDUA")
          : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      },
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data["retcode"] === 13) {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data["retcode"] === 0) {
              $.nickName =
                (data["base"] && data["base"].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName;
            }
          } else {
            console.log(`京东服务器返回空数据`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg(
        $.name,
        "",
        "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"
      );
      return [];
    }
  }
}
// prettier-ignore
// md5
!function(n){function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16){i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h)}return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8){r+=String.fromCharCode(n[t>>5]>>>t%32&255)}return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1){r[t]=0}var e=8*n.length;for(t=0;t<e;t+=8){r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32}return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1){u[r]=909522486^o[r],c[r]=1549556828^o[r]}return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1){t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t)}return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
function Env(t, e) {
  "undefined" != typeof process &&
    JSON.stringify(process.env).indexOf("GITHUB") > -1 &&
    process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? { url: t } : t;
      let s = this.get;
      return (
        "POST" === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new (class {
    constructor(t, e) {
      (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = "box.dat"),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = "\n"),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i)
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise((e) => {
        this.get({ url: t }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise((s) => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: { script_text: t, mock_type: "cron", timeout: r },
            headers: { "X-Key": o, Accept: "*/*" },
          };
        this.post(n, (t, e, i) => s(i));
      }).catch((t) => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s
          ? this.fs.writeFileSync(t, r)
          : i
          ? this.fs.writeFileSync(e, r)
          : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) =>
                Object(t[s]) === t[s]
                  ? t[s]
                  : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
              t
            )[e[e.length - 1]] = s),
          t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r)
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? ("null" === o ? null : o || "{}") : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, e)
        : this.isNode()
        ? ((this.data = this.loaddata()),
          (this.data[e] = t),
          this.writedata(),
          !0)
        : (this.data && this.data[e]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require("got")),
        (this.cktough = this.cktough ? this.cktough : require("tough-cookie")),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie &&
            void 0 === t.cookieJar &&
            (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers &&
        (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
        this.isSurge() || this.isLoon()
          ? (this.isSurge() &&
              this.isNeedRewrite &&
              ((t.headers = t.headers || {}),
              Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
            $httpClient.get(t, (t, s, i) => {
              !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
            }))
          : this.isQuanX()
          ? (this.isNeedRewrite &&
              ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
            $task.fetch(t).then(
              (t) => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o);
              },
              (t) => e(t)
            ))
          : this.isNode() &&
            (this.initGotEnv(t),
            this.got(t)
              .on("redirect", (t, e) => {
                try {
                  if (t.headers["set-cookie"]) {
                    const s = t.headers["set-cookie"]
                      .map(this.cktough.Cookie.parse)
                      .toString();
                    s && this.ckjar.setCookieSync(s, null),
                      (e.cookieJar = this.ckjar);
                  }
                } catch (t) {
                  this.logErr(t);
                }
              })
              .then(
                (t) => {
                  const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o,
                  } = t;
                  e(null, { status: s, statusCode: i, headers: r, body: o }, o);
                },
                (t) => {
                  const { message: s, response: i } = t;
                  e(s, i, i && i.body);
                }
              ));
    }
    post(t, e = () => {}) {
      if (
        (t.body &&
          t.headers &&
          !t.headers["Content-Type"] &&
          (t.headers["Content-Type"] = "application/x-www-form-urlencoded"),
        t.headers && delete t.headers["Content-Length"],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
          $httpClient.post(t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        (t.method = "POST"),
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            (t) => e(t)
          );
      else if (this.isNode()) {
        this.initGotEnv(t);
        const { url: s, ...i } = t;
        this.got.post(s, i).then(
          (t) => {
            const { statusCode: s, statusCode: i, headers: r, body: o } = t;
            e(null, { status: s, statusCode: i, headers: r, body: o }, o);
          },
          (t) => {
            const { message: s, response: i } = t;
            e(s, i, i && i.body);
          }
        );
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds(),
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (s.getFullYear() + "").substr(4 - RegExp.$1.length)
        ));
      for (let e in i)
        new RegExp("(" + e + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? i[e]
              : ("00" + i[e]).substr(("" + i[e]).length)
          ));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = (t) => {
        if (!t) return t;
        if ("string" == typeof t)
          return this.isLoon()
            ? t
            : this.isQuanX()
            ? { "open-url": t }
            : this.isSurge()
            ? { url: t }
            : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return { openUrl: e, mediaUrl: s };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return { "open-url": e, "media-url": s };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return { url: e };
          }
        }
      };
      if (
        (this.isMute ||
          (this.isSurge() || this.isLoon()
            ? $notification.post(e, s, i, o(r))
            : this.isQuanX() && $notify(e, s, i, o(r))),
        !this.isMuteLog)
      ) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e),
          s && t.push(s),
          i && t.push(i),
          console.log(t.join("\n")),
          (this.logs = this.logs.concat(t));
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]),
        console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s
        ? this.log("", `❗️${this.name}, 错误!`, t.stack)
        : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`),
        this.log(),
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  })(t, e);
}

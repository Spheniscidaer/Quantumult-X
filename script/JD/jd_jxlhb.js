/*
京喜领88元红包
活动入口：京喜app-》我的-》京喜领88元红包
助力逻辑：先自己京东账号相互助力，如有剩余助力机会，则助力作者
温馨提示：如提示助力火爆，可尝试寻找京东客服
脚本兼容: Quantumult X, Surge, Loon, JSBox, Node.js
*/
const $ = new Env('京喜领88元红包');
const notify = $.isNode() ? require('./sendNotify') : {};
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : {};
let cookiesArr = [], cookie = '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  cookiesArr = [
    $.getdata("CookieJD"),
    $.getdata("CookieJD2"),
    ...$.toObj($.getdata("CookiesJD") || "[]").map((item) => item.cookie)].filter((item) => !!item);
}
$.packetIdArr = [];
const BASE_URL = 'https://wq.jd.com/cubeactive/steprewardv3'

 !(async () => {
    var _0xb477a4 = {
        'SRWao': function(_0x88ea4f, _0x88dbbf) {
            return _0x88ea4f(_0x88dbbf);
        },
        'jXzEi': function(_0x6b8e4c, _0x4de107) {
            return _0x6b8e4c === _0x4de107;
        },
        'nZEbv': 'https://bean.m.jd.com/bean/signIndex.action',
        'aEqgN': function(_0x262171, _0x28c473) {
            return _0x262171 + _0x28c473;
        },
        'unbLa': function(_0x3f941e, _0x5e02fe) {
            return _0x3f941e + _0x5e02fe;
        },
        'WxXFR': function(_0xb2aba1, _0x4408ea) {
            return _0xb2aba1 + _0x4408ea;
        },
        'URclt': '京喜领88元红包\n',
        'OpXCR': '活动入口：京喜app-》我的-》京喜领88元红包\n',
        'NZMdM': '助力逻辑：先自己京东账号相互助力，如有剩余助力机会，则助力作者\x0a',
        'VAuON': '温馨提示：如提示助力火爆，可尝试寻找京东客服',
        'DEyQx': function(_0x5b42c9, _0x1be7c1) {
            return _0x5b42c9(_0x1be7c1);
        },
        'GiWZg': 'https://cdn.jsdelivr.net/gh/gitupdate/updateTeam@master/shareCodes/jxhb.json',
        'CJOxf': 'http://cdn.annnibb.me/cf79ae6addba60ad018347359bd144d2.json',
        'SrNDE': '2|5|0|3|4|1',
        'DTtgd': function(_0x180741) {
            return _0x180741();
        },
        'fSXSE': function(_0x3906e0, _0x5eda0c) {
            return _0x3906e0 < _0x5eda0c;
        },
        'tKFLZ': 'userName',
        'aNWnP': 'strUserPin',
        'jZXSZ': function(_0x2e4d51, _0x5c8343) {
            return _0x2e4d51(_0x5c8343);
        },
        'UngXz': function(_0x3ebcff, _0x5d0cc4) {
            return _0x3ebcff < _0x5d0cc4;
        },
        'xGyod': function(_0x25fb08, _0x46938c) {
            return _0x25fb08 !== _0x46938c;
        },
        'SuWlD': 'FUKKB',
        'LFziv': function(_0xf5aaf3, _0x42d106, _0x21e5c4) {
            return _0xf5aaf3(_0x42d106, _0x21e5c4);
        }
    };
    if (!cookiesArr[0x0]) {
        if (_0xb477a4['jXzEi']('SJDNC', 'UFSmb')) {
            console['log']('活动开启成功,助力邀请码为:' + data['Data']['strUserPin'] + '\x0a');
        } else {
            $['msg']($['name'], '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {
                'open-url': _0xb477a4['nZEbv']
            });
            return;
        }
    }
    console['log'](_0xb477a4['aEqgN'](_0xb477a4['unbLa'](_0xb477a4['WxXFR'](_0xb477a4['URclt'], _0xb477a4['OpXCR']), _0xb477a4['NZMdM']), _0xb477a4['VAuON']));
    let _0x2132c2 = (await _0xb477a4['DEyQx'](getAuthorShareCode, _0xb477a4['GiWZg'])) || [];
    let _0x35efe4 = (await _0xb477a4['DEyQx'](getAuthorShareCode, _0xb477a4['CJOxf'])) || [];
    $['authorMyShareIds'] = [..._0x2132c2, ..._0x35efe4];
    for (let _0x27e0ca = 0x0; _0x27e0ca < cookiesArr['length']; _0x27e0ca++) {
        var _0x4c5602 = _0xb477a4['SrNDE']['split']('|'),
            _0x3ea339 = 0x0;
        while (!![]) {
            switch (_0x4c5602[_0x3ea339++]) {
                case '0':
                    $['UserName'] = _0xb477a4['DEyQx'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                    continue;
                case '1':
                    await _0xb477a4['DTtgd'](main);
                    continue;
                case '2':
                    $['index'] = _0xb477a4['WxXFR'](_0x27e0ca, 0x1);
                    continue;
                case '3':
                    await TotalBean();
                    continue;
                case '4':
                    console['log']('\n*****开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*****\n');
                    continue;
                case '5':
                    cookie = cookiesArr[_0x27e0ca];
                    continue;
            }
            break;
        }
    }
    let _0x427674 = ['VCI3epKBsR1NADvIHY5ADMv2GlAA_Vu1fDJ13HIUw0JgjiicONgtCPIOZJTDEMzv'];
    $['packetIdArr']['map'](_0xa280ff => _0x427674['push'](_0xa280ff['strUserPin']));
    console['log']('\x0a\x0a自己京东账号助力码：\x0a' + JSON['stringify'](_0x427674) + '\x0a\x0a');
    console['log']('\n开始助力：助力逻辑 先自己京东相互助力，如有剩余助力机会，则助力作者\n');
    for (let _0x334391 = 0x0; _0xb477a4['fSXSE'](_0x334391, cookiesArr['length']); _0x334391++) {
        cookie = cookiesArr[_0x334391];
        $['canHelp'] = !![];
        $['max'] = ![];
        $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        for (let _0x312506 of $['packetIdArr']) {
            if (!_0x312506) continue;
            if (_0xb477a4['jXzEi']($['UserName'], _0x312506[_0xb477a4['tKFLZ']])) continue;
            if (!$['canHelp']) break;
            if ($['max']) break;
            console['log']('【' + $['UserName'] + '】去助力【' + _0x312506[_0xb477a4['tKFLZ']] + '】邀请码：' + _0x312506['strUserPin']);
            await _0xb477a4['DEyQx'](enrollFriend, _0x312506[_0xb477a4['aNWnP']]);
            await $['wait'](0x9c4);
        }
        if ($['canHelp']) {
            console['log']('\x0a【' + $['UserName'] + '】有剩余助力机会，开始助力作者\n');
            for (let _0x2d0792 of $['authorMyShareIds']) {
                if (!_0x2d0792) continue;
                if (!$['canHelp']) break;
                console['log']('【' + $['UserName'] + '】去助力作者的邀请码：' + _0x2d0792);
                await _0xb477a4['jZXSZ'](enrollFriend, _0x2d0792);
                await $['wait'](0x9c4);
            }
        }
    }
    console['log']('\x0a【' + $['UserName'] + '】开始拆红包\n');
    for (let _0x673681 = 0x0; _0xb477a4['UngXz'](_0x673681, cookiesArr['length']); _0x673681++) {
        if (_0xb477a4['xGyod'](_0xb477a4['SuWlD'], _0xb477a4['SuWlD'])) {
            url += '&_stk=' + _0xb477a4['SRWao'](encodeURIComponent, stk);
        } else {
            cookie = cookiesArr[_0x673681];
            $['canOpenGrade'] = !![];
            $['UserName'] = _0xb477a4['jZXSZ'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            const _0xbc3135 = [0x1, 0x2, 0x3, 0x4, 0x5, 0x6];
            for (let _0x28390c of _0xbc3135) {
                if (!$['canOpenGrade']) break;
                console['log']('\x0a【' + $['UserName'] + '】去拆第' + _0x28390c + '个红包');
                await _0xb477a4['LFziv'](openRedPack, $['packetIdArr'][_0x673681][_0xb477a4['aNWnP']], _0x28390c);
                await $['wait'](0x3e8);
            }
        }
    }
})()['catch'](_0x45d2eb => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x45d2eb + '!', '');
})['finally'](() => {
    $['done']();
});
async function main() {
    var _0x4483bb = {
        'TzNju': function(_0x36031f) {
            return _0x36031f();
        },
        'wzIva': function(_0x173d77) {
            return _0x173d77();
        }
    };
    await _0x4483bb['TzNju'](joinActive);
    await _0x4483bb['wzIva'](getUserInfo);
}

function joinActive() {
    var _0x3c7416 = {
        'onTrV': function(_0x3ea109, _0x29a6d9) {
            return _0x3ea109 === _0x29a6d9;
        },
        'UCgbE': 'MBhff',
        'RhtyJ': 'nMOcr',
        'FblLE': 'NLpuN',
        'HcfCr': 'yZHYL',
        'mzWwd': 'wCmMl',
        'ISyRJ': function(_0x5c8207) {
            return _0x5c8207();
        },
        'JGVYU': function(_0x105bdf, _0x71c8c0, _0x67e2c9, _0x301b23) {
            return _0x105bdf(_0x71c8c0, _0x67e2c9, _0x301b23);
        },
        'piLzB': 'JoinActive'
    };
    return new Promise(_0x2f85b1 => {
        const _0x1c1d5f = '';
        const _0x24a643 = _0x3c7416['JGVYU'](taskurl, _0x3c7416['piLzB'], _0x1c1d5f, 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp');
        $['get'](_0x24a643, (_0x417606, _0x5b7e8f, _0x5a3783) => {
            try {
                if (_0x417606) {
                    console['log']('\x0a' + $['name'] + ':  API查询请求失败 ‼️‼️');
                    $['logErr'](_0x417606);
                } else {
                    if (_0x3c7416['onTrV'](_0x3c7416['UCgbE'], _0x3c7416['RhtyJ'])) {
                        console['log']('获取助力码成功：' + _0x5a3783['Data']['strUserPin'] + '\x0a');
                        if (_0x5a3783['Data']['strUserPin']) {
                            $['packetIdArr']['push']({
                                'strUserPin': _0x5a3783['Data']['strUserPin'],
                                'userName': $['UserName']
                            });
                        }
                    } else {
                        _0x5a3783 = JSON['parse'](_0x5a3783);
                        if (_0x5a3783['iRet'] === 0x0) {
                            if (_0x3c7416['onTrV']('NLpuN', _0x3c7416['FblLE'])) {
                                console['log']('活动开启成功,助力邀请码为:' + _0x5a3783['Data']['strUserPin'] + '\x0a');
                            } else {
                                $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
                            }
                        } else {
                            if (_0x3c7416['onTrV'](_0x3c7416['HcfCr'], _0x3c7416['mzWwd'])) {
                                if (_0x5a3783) _0x5a3783 = JSON['parse'](_0x5a3783);
                            } else {
                                console['log']('活动开启失败：' + _0x5a3783['sErrMsg'] + '\x0a');
                            }
                        }
                    }
                }
            } catch (_0x1a9ca3) {
                $['logErr'](_0x1a9ca3, _0x5b7e8f);
            } finally {
                _0x3c7416['ISyRJ'](_0x2f85b1);
            }
        });
    });
}

function getUserInfo() {
    var _0x25357a = {
        'SzzZW': function(_0x5b5547, _0x3c3500) {
            return _0x5b5547 !== _0x3c3500;
        },
        'VAdqJ': 'wdnGx',
        'uLifC': 'ibgdT',
        'DlAZL': function(_0x5a17ed, _0x46c11f) {
            return _0x5a17ed !== _0x46c11f;
        },
        'xoDLh': 'csRYW',
        'YggkR': function(_0x3693af, _0x7bd60f) {
            return _0x3693af === _0x7bd60f;
        },
        'dfQYk': 'fQatq',
        'SasdX': 'nraTT',
        'QHWDZ': 'ogEet',
        'lCFnZ': 'xTifK',
        'NCBmv': function(_0x77e2e2, _0x471b5e) {
            return _0x77e2e2(_0x471b5e);
        },
        'DOMXr': 'yyyyMMdd',
        'RsJMH': function(_0xebc4d3, _0x4a0175, _0x9ed1e8, _0x11cd99) {
            return _0xebc4d3(_0x4a0175, _0x9ed1e8, _0x11cd99);
        },
        'DGoRp': 'GetUserInfo',
        'YTxwe': 'activeId,channel,joinDate,phoneid,publishFlag,timestamp'
    };
    return new Promise(_0x55e401 => {
        const _0x61cd6a = 'joinDate=' + $['time'](_0x25357a['DOMXr']);
        const _0x5e80d5 = _0x25357a['RsJMH'](taskurl, _0x25357a['DGoRp'], _0x61cd6a, _0x25357a['YTxwe']);
        $['get'](_0x5e80d5, (_0x1727f3, _0x4acdda, _0x23035f) => {
            if (_0x25357a['SzzZW'](_0x25357a['VAdqJ'], _0x25357a['uLifC'])) {
                try {
                    if (_0x25357a['DlAZL'](_0x25357a['xoDLh'], 'csRYW')) {
                        _0x55e401(_0x23035f);
                    } else {
                        if (_0x1727f3) {
                            if (_0x25357a['YggkR'](_0x25357a['dfQYk'], _0x25357a['SasdX'])) {
                                _0x23035f = JSON['parse'](_0x23035f);
                                if (_0x23035f['iRet'] === 0x0) {
                                    console['log']('获取助力码成功：' + _0x23035f['Data']['strUserPin'] + '\x0a');
                                    if (_0x23035f['Data']['strUserPin']) {
                                        $['packetIdArr']['push']({
                                            'strUserPin': _0x23035f['Data']['strUserPin'],
                                            'userName': $['UserName']
                                        });
                                    }
                                } else {
                                    console['log']('获取助力码失败：' + _0x23035f['sErrMsg'] + '\x0a');
                                }
                            } else {
                                console['log']('\x0a' + $['name'] + ':  API查询请求失败 ‼️‼️');
                                $['logErr'](_0x1727f3);
                            }
                        } else {
                            _0x23035f = JSON['parse'](_0x23035f);
                            if (_0x25357a['YggkR'](_0x23035f['iRet'], 0x0)) {
                                console['log']('获取助力码成功：' + _0x23035f['Data']['strUserPin'] + '\x0a');
                                if (_0x23035f['Data']['strUserPin']) {
                                    $['packetIdArr']['push']({
                                        'strUserPin': _0x23035f['Data']['strUserPin'],
                                        'userName': $['UserName']
                                    });
                                }
                            } else {
                                if (_0x25357a['QHWDZ'] !== _0x25357a['lCFnZ']) {
                                    console['log']('获取助力码失败：' + _0x23035f['sErrMsg'] + '\x0a');
                                } else {
                                    console['log']('获取助力码失败：' + _0x23035f['sErrMsg'] + '\x0a');
                                }
                            }
                        }
                    }
                } catch (_0x316aa3) {
                    $['logErr'](_0x316aa3, _0x4acdda);
                } finally {
                    _0x25357a['NCBmv'](_0x55e401, _0x23035f);
                }
            } else {
                console['log']('\x0a' + $['name'] + ':  API查询请求失败 ‼️‼️');
                $['logErr'](_0x1727f3);
            }
        });
    });
}

function enrollFriend(_0x41f0cf) {
    var _0x5e531a = {
        'FHplu': function(_0x239712, _0x53c327) {
            return _0x239712 === _0x53c327;
        },
        'DbHMl': 'OyAZy',
        'bvYqc': function(_0x735f27, _0x1bc409) {
            return _0x735f27 !== _0x1bc409;
        },
        'xNHYr': 'XrKam',
        'gQXsL': 'ybUxC',
        'DvMJM': function(_0x686221, _0x358bb5) {
            return _0x686221 === _0x358bb5;
        },
        'klfLJ': 'zgquh',
        'bMHtd': function(_0xb83b6f) {
            return _0xb83b6f();
        },
        'Dhzgc': 'wMSZK',
        'YGYCQ': 'yyyyMMdd',
        'kPsqM': function(_0x4966ae, _0x593177, _0x293c8f, _0x4183de) {
            return _0x4966ae(_0x593177, _0x293c8f, _0x4183de);
        },
        'AsgbV': 'activeId,channel,joinDate,phoneid,publishFlag,strPin,timestamp'
    };
    return new Promise(_0x3de866 => {
        var _0x53bca9 = {
            'xgigP': function(_0x1b849e, _0x49d553) {
                return _0x1b849e === _0x49d553;
            }
        };
        if (_0x5e531a['DvMJM'](_0x5e531a['Dhzgc'], _0x5e531a['Dhzgc'])) {
            const _0x30dd1e = 'strPin=' + _0x41f0cf + '&joinDate=' + $['time'](_0x5e531a['YGYCQ']);
            const _0x5258fc = _0x5e531a['kPsqM'](taskurl, 'EnrollFriend', _0x30dd1e, _0x5e531a['AsgbV']);
            $['get'](_0x5258fc, (_0x4e4f02, _0x233771, _0x1195ee) => {
                try {
                    if (_0x5e531a['FHplu']('ndxom', _0x5e531a['DbHMl'])) {
                        $['logErr'](e, _0x233771);
                    } else {
                        if (_0x4e4f02) {
                            if (_0x5e531a['bvYqc'](_0x5e531a['xNHYr'], _0x5e531a['gQXsL'])) {
                                console['log']('\x0a' + $['name'] + ':  API查询请求失败 ‼️‼️');
                                $['logErr'](_0x4e4f02);
                            } else {
                                $['packetIdArr']['push']({
                                    'strUserPin': _0x1195ee['Data']['strUserPin'],
                                    'userName': $['UserName']
                                });
                            }
                        } else {
                            _0x1195ee = JSON['parse'](_0x1195ee);
                            if (_0x1195ee['iRet'] === 0x0) {
                                console['log']('助力成功🎉:' + _0x1195ee['sErrMsg'] + '\x0a');
                            } else {
                                if (_0x5e531a['bvYqc']('ssRhf', 'HdUuG')) {
                                    if (_0x5e531a['DvMJM'](_0x1195ee['iRet'], 0x7df)) $['canHelp'] = ![];
                                    if (_0x5e531a['DvMJM'](_0x1195ee['iRet'], 0x7e0)) {
                                        $['canHelp'] = ![];
                                        console['log']('温馨提示：如提示助力火爆，可尝试寻找京东客服');
                                    }
                                    if (_0x1195ee['iRet'] === 0x7dd) $['max'] = !![];
                                    console['log']('助力失败:' + _0x1195ee['sErrMsg'] + '\x0a');
                                } else {
                                    _0x1195ee = JSON['parse'](_0x1195ee);
                                    if (_0x53bca9['xgigP'](_0x1195ee['iRet'], 0x0)) {
                                        console['log']('活动开启成功,助力邀请码为:' + _0x1195ee['Data']['strUserPin'] + '\x0a');
                                    } else {
                                        console['log']('活动开启失败：' + _0x1195ee['sErrMsg'] + '\x0a');
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x3d85e8) {
                    $['logErr'](_0x3d85e8, _0x233771);
                } finally {
                    if (_0x5e531a['klfLJ'] !== 'zgquh') {
                        console['log']('\x0a' + $['name'] + ':  API查询请求失败 ‼️‼️');
                        $['logErr'](_0x4e4f02);
                    } else {
                        _0x5e531a['bMHtd'](_0x3de866);
                    }
                }
            });
        } else {
            console['log']('\x0a' + $['name'] + ':  API查询请求失败 ‼️‼️');
            $['logErr'](err);
        }
    });
}

function openRedPack(_0x41dfd2, _0x4c5783) {
    var _0x4eac23 = {
        'kiSIS': function(_0x2c0e73) {
            return _0x2c0e73();
        },
        'NREfZ': function(_0x451a60, _0x2a7205) {
            return _0x451a60(_0x2a7205);
        },
        'NPois': 'KXssB',
        'ASIvU': function(_0xb968b6, _0x25f78b) {
            return _0xb968b6 !== _0x25f78b;
        },
        'DompT': 'AhKVi',
        'tRClU': 'wxcLb',
        'nZSVD': function(_0x2c9e20, _0x17a48c) {
            return _0x2c9e20 === _0x17a48c;
        },
        'SaYCM': 'UbZAy',
        'IOsnt': 'sNLCr',
        'OcEvp': 'ewZQh',
        'DyKJk': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'iyvmL': function(_0x3d7b12, _0x2dccb5) {
            return _0x3d7b12 !== _0x2dccb5;
        },
        'IFFCG': 'PFbNL',
        'VHqQH': 'pUMRP',
        'sGWdI': 'DoGradeDraw'
    };
    return new Promise(_0x3e8407 => {
        var _0x38522e = {
            'SpLRX': _0x4eac23['DyKJk'],
            'QCnfx': 'https://bean.m.jd.com/bean/signIndex.action'
        };
        if (_0x4eac23['iyvmL'](_0x4eac23['IFFCG'], _0x4eac23['VHqQH'])) {
            const _0x6cb973 = 'strPin=' + _0x41dfd2 + '&grade=' + _0x4c5783;
            const _0x41a4e0 = taskurl(_0x4eac23['sGWdI'], _0x6cb973, 'activeId,channel,grade,phoneid,publishFlag,stepreward_jstoken,strPin,timestamp');
            $['get'](_0x41a4e0, (_0xd0c3eb, _0x10d94c, _0xeb01ef) => {
                var _0x14c09f = {
                    'BVXgm': function(_0x3ced57) {
                        return _0x4eac23['kiSIS'](_0x3ced57);
                    },
                    'uweBE': function(_0x369740, _0x543d58) {
                        return _0x4eac23['NREfZ'](_0x369740, _0x543d58);
                    }
                };
                if (_0x4eac23['NPois'] !== _0x4eac23['NPois']) {
                    $['logErr'](e, _0x10d94c);
                } else {
                    try {
                        if (_0xd0c3eb) {
                            if (_0x4eac23['ASIvU'](_0x4eac23['DompT'], _0x4eac23['tRClU'])) {
                                console['log']('\x0a' + $['name'] + ':  API查询请求失败 ‼️‼️');
                                $['logErr'](_0xd0c3eb);
                            } else {
                                _0x14c09f['BVXgm'](_0x3e8407);
                            }
                        } else {
                            if (_0x4eac23['nZSVD'](_0x4eac23['SaYCM'], _0x4eac23['SaYCM'])) {
                                _0xeb01ef = JSON['parse'](_0xeb01ef);
                                if (_0x4eac23['nZSVD'](_0xeb01ef['iRet'], 0x0)) {
                                    if ('RqAdg' === _0x4eac23['IOsnt']) {
                                        $['msg']($['name'], _0x38522e['SpLRX'], 'https://bean.m.jd.com/bean/signIndex.action', {
                                            'open-url': _0x38522e['QCnfx']
                                        });
                                        return;
                                    } else {
                                        console['log']('拆红包成功:' + _0xeb01ef['sErrMsg'] + '\x0a');
                                    }
                                } else {
                                    if (_0x4eac23['nZSVD'](_0x4eac23['OcEvp'], _0x4eac23['OcEvp'])) {
                                        if (_0xeb01ef['iRet'] === 0x7e1) $['canOpenGrade'] = ![];
                                        console['log']('拆红包失败:' + _0xeb01ef['sErrMsg'] + '\x0a');
                                    } else {
                                        _0x14c09f['uweBE'](_0x3e8407, _0xeb01ef);
                                    }
                                }
                            } else {
                                console['log']('助力成功🎉:' + _0xeb01ef['sErrMsg'] + '\x0a');
                            }
                        }
                    } catch (_0x367477) {
                        $['logErr'](_0x367477, _0x10d94c);
                    } finally {
                        _0x4eac23['kiSIS'](_0x3e8407);
                    }
                }
            });
        } else {
            $['done']();
        }
    });
}

function getAuthorShareCode(_0x233ee7 = 'https://cdn.jsdelivr.net/gh/gitupdate/updateTeam@master/shareCodes/jxhb.json') {
    var _0x31492b = {
        'UdoHl': function(_0x597560) {
            return _0x597560();
        },
        'caOkC': function(_0x3dcb28, _0x1dbc5c) {
            return _0x3dcb28 === _0x1dbc5c;
        },
        'jaoQS': function(_0x25888b, _0x50eae3) {
            return _0x25888b === _0x50eae3;
        },
        'mFhfy': function(_0x835b0f, _0x2c7982) {
            return _0x835b0f === _0x2c7982;
        },
        'jZAee': function(_0x3bc2d4, _0x1c3dd2) {
            return _0x3bc2d4 === _0x1c3dd2;
        },
        'zdCqm': 'lBWDi',
        'yayjM': 'mznQU',
        'hFJTh': function(_0x188daf, _0x457b2c) {
            return _0x188daf(_0x457b2c);
        },
        'Qgjsg': function(_0x2f476c, _0x36f4ab) {
            return _0x2f476c !== _0x36f4ab;
        },
        'LwBUM': 'xMaeY',
        'kBMCK': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'uHwjp': function(_0x5c7063, _0x1e3153) {
            return _0x5c7063 === _0x1e3153;
        },
        'WoFkz': 'EXVDt',
        'XImvH': 'HCYdc',
        'htabD': 'tunnel'
    };
    return new Promise(_0x370578 => {
        if (_0x31492b['Qgjsg'](_0x31492b['LwBUM'], 'xMaeY')) {
            _0x31492b['UdoHl'](_0x370578);
        } else {
            const _0x4ef9a9 = {
                'url': _0x233ee7 + '?' + new Date(),
                'timeout': 0x2710,
                'headers': {
                    'User-Agent': _0x31492b['kBMCK']
                }
            };
            if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
                if (_0x31492b['uHwjp'](_0x31492b['WoFkz'], _0x31492b['XImvH'])) {
                    data = JSON['parse'](data);
                    if (_0x31492b['caOkC'](data['iRet'], 0x0)) {
                        console['log']('助力成功🎉:' + data['sErrMsg'] + '\x0a');
                    } else {
                        if (data['iRet'] === 0x7df) $['canHelp'] = ![];
                        if (_0x31492b['jaoQS'](data['iRet'], 0x7e0)) {
                            $['canHelp'] = ![];
                            console['log']('温馨提示：如提示助力火爆，可尝试寻找京东客服');
                        }
                        if (_0x31492b['mFhfy'](data['iRet'], 0x7dd)) $['max'] = !![];
                        console['log']('助力失败:' + data['sErrMsg'] + '\x0a');
                    }
                } else {
                    const _0x2457e7 = _0x31492b['hFJTh'](require, _0x31492b['htabD']);
                    const _0x4184ee = {
                        'https': _0x2457e7['httpsOverHttp']({
                            'proxy': {
                                'host': process['env']['TG_PROXY_HOST'],
                                'port': process['env']['TG_PROXY_PORT'] * 0x1
                            }
                        })
                    };
                    Object['assign'](_0x4ef9a9, {
                        'agent': _0x4184ee
                    });
                }
            }
            $['get'](_0x4ef9a9, async (_0x304108, _0x36aee8, _0x44dadb) => {
                var _0x11dd84 = {
                    'ksiCc': function(_0x5ce92c, _0x3c0fdd) {
                        return _0x5ce92c * _0x3c0fdd;
                    },
                    'icOiZ': function(_0x5e37ca, _0x5b7870) {
                        return _0x5e37ca === _0x5b7870;
                    },
                    'gfFlc': function(_0x1402e7, _0x1c7d37) {
                        return _0x31492b['jZAee'](_0x1402e7, _0x1c7d37);
                    }
                };
                try {
                    if (_0x304108) {} else {
                        if (_0x31492b['jZAee']('lBWDi', _0x31492b['zdCqm'])) {
                            if (_0x44dadb) _0x44dadb = JSON['parse'](_0x44dadb);
                        } else {
                            const _0x4d3aef = require('tunnel');
                            const _0x4c0f1c = {
                                'https': _0x4d3aef['httpsOverHttp']({
                                    'proxy': {
                                        'host': process['env']['TG_PROXY_HOST'],
                                        'port': _0x11dd84['ksiCc'](process['env']['TG_PROXY_PORT'], 0x1)
                                    }
                                })
                            };
                            Object['assign'](_0x4ef9a9, {
                                'agent': _0x4c0f1c
                            });
                        }
                    }
                } catch (_0x210ca1) {} finally {
                    if (_0x31492b['jZAee'](_0x31492b['yayjM'], 'mznQU')) {
                        _0x31492b['hFJTh'](_0x370578, _0x44dadb);
                    } else {
                        if (_0x11dd84['icOiZ'](_0x44dadb['iRet'], 0x7df)) $['canHelp'] = ![];
                        if (_0x11dd84['gfFlc'](_0x44dadb['iRet'], 0x7e0)) {
                            $['canHelp'] = ![];
                            console['log']('温馨提示：如提示助力火爆，可尝试寻找京东客服');
                        }
                        if (_0x44dadb['iRet'] === 0x7dd) $['max'] = !![];
                        console['log']('助力失败:' + _0x44dadb['sErrMsg'] + '\x0a');
                    }
                }
            });
        }
    });
}

function taskurl(_0x5c376d, _0x5cfc5a = '', _0xd225c6) {
    var _0x4804a7 = {
        'yKmpn': function(_0x21a66c, _0x3c6e54) {
            return _0x21a66c + _0x3c6e54;
        },
        'JWYpJ': function(_0x580a53, _0x281d50) {
            return _0x580a53 + _0x281d50;
        },
        'nvzGk': function(_0x405c1c, _0xaaf48) {
            return _0x405c1c + _0xaaf48;
        },
        'TTTFv': function(_0x5bf78a, _0x1ed703) {
            return _0x5bf78a + _0x1ed703;
        },
        'blTeB': function(_0x442956, _0x59bc18) {
            return _0x442956(_0x59bc18);
        },
        'pwhbx': 'wq.jd.com',
        'hgtgE': 'zh-cn',
        'zEIYu': 'https://wqactive.jd.com/cube/front/activePublish/step_reward/489177.html?aid=489177'
    };
    let _0x3ff6db = BASE_URL + '/' + _0x5c376d + '?activeId=489177&publishFlag=1&channel=7&' + _0x5cfc5a + '&sceneval=2&g_login_type=1&timestamp=' + Date['now']() + '&_=' + _0x4804a7['yKmpn'](Date['now'](), 0x2) + '&_ste=1';
    const _0x152394 = _0x4804a7['JWYpJ'](_0x4804a7['JWYpJ'](_0x4804a7['nvzGk'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa));
    _0x3ff6db += '&phoneid=' + _0x152394;
    _0x3ff6db += '&stepreward_jstoken=' + (_0x4804a7['nvzGk'](_0x4804a7['TTTFv'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa));
    if (_0xd225c6) {
        _0x3ff6db += '&_stk=' + _0x4804a7['blTeB'](encodeURIComponent, _0xd225c6);
    }
    return {
        'url': _0x3ff6db,
        'headers': {
            'Host': _0x4804a7['pwhbx'],
            'Cookie': cookie,
            'accept': '*/*',
            'user-agent': 'jdpingou;iPhone;4.8.2;14.5.1;' + _0x152394 + ';network/wifi;model/iPhone13,4;appBuild/100546;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/318;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'accept-language': _0x4804a7['hgtgE'],
            'referer': _0x4804a7['zEIYu']
        }
    };
};
_0xodC = 'jsjiami.com.v6'


function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === "1001") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            $.log('京东服务器返回空数据');
          }
        }
      } catch (e) {
        $.logErr(e)
      } finally {
        resolve();
      }
    })
  })
}
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
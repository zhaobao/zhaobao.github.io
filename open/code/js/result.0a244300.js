(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["result"], {
    "1b4e": function(t, e, s) {
        t.exports = s.p + "img/gif_green.a6a9b9f2.gif"
    },
    "49b8": function(t, e, s) {
        t.exports = s.p + "img/img_yellow.34666cb4.gif"
    },
    "8f88": function(t, e, s) {
        "use strict";
        s.r(e);
        var a = function() {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return s("div", {
                staticClass: "result-wrap"
            }, [s("div", {
                staticClass: "bg-pic1",
                class: ["green" === t.type ? "greenBg" : "red" === t.type ? "redBg" : "yellow" === t.type ? "yellowBg" : "nodata" === t.type ? "noBg" : ""]
            }, [s("div", {
                staticClass: "banner-img-holder"
            }), t.showData ? s("div", {
                staticClass: "div-main"
            }, [s("div", {
                staticClass: "top",
                class: ["green" === t.type ? "green" : "red" === t.type ? "red" : "yellow" === t.type ? "yellow" : ""]
            }), s("p", {
                staticClass: "hidden-tel"
            }, [t._v(t._s(t.info.phone ? t.info.phone.replace(/^(\d{3})\d{4}(\d+)/, "$1****$2") : "") + "的动态行程卡")]), s("p", {
                staticClass: "update"
            }, [t._v("更新于：" + t._s(t.info.time))]), s("div", {
                staticClass: "info"
            }, [s("div", {
                staticClass: "img-holder",
                class: ["green" === t.type ? "green-bg" : "red" === t.type ? "red-bg" : ""]
            }, [s("img", {
                staticClass: "qr-img",
                attrs: {
                    src: t.imgSrc,
                    alt: ""
                }
            })])]), s("div", {
                staticClass: "bott"
            }, [s("p", {
                staticClass: "title"
            }, [t._v("您于前14天内到达或途经："), s("a", {
                staticClass: "addr",
                domProps: {
                    innerHTML: t._s(t.info.message)
                }
            })])])]) : t._e(), t.showNoData ? s("div", {
                staticClass: "div-main"
            }, [s("div", {
                staticClass: "error-img"
            }), s("div", {
                staticClass: "error-info"
            }, [t._v("抱歉！没有找到您的行程数据")]), t._m(0)]) : t._e(), t.isLoading ? s("div", {
                staticClass: "div-main"
            }, [s("div", {
                staticClass: "loading"
            }, [s("svg", {
                attrs: {
                    version: "1.1",
                    id: "loader-1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "60px",
                    height: "60px",
                    viewBox: "0 0 40 40",
                    "enable-background": "new 0 0 40 40",
                    "xml:space": "preserve"
                }
            }, [s("path", {
                attrs: {
                    opacity: "0.2",
                    fill: "#000",
                    d: "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n  s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n  c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                }
            }), s("path", {
                attrs: {
                    fill: "#000",
                    opacity: "0.6",
                    d: "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n  C22.32,8.481,24.301,9.057,26.013,10.047z"
                }
            }, [s("animateTransform", {
                attrs: {
                    attributeType: "xml",
                    attributeName: "transform",
                    type: "rotate",
                    from: "0 20 20",
                    to: "360 20 20",
                    dur: "0.5s",
                    repeatCount: "indefinite"
                }
            })], 1)])])]) : t._e(), t._m(1), "nodata" === t.type ? s("div", {
                staticClass: "foot-box1"
            }, [s("footer-comp-nodata"), s("a", {
                staticStyle: {
                    "font-size": "0.24rem"
                }
            }, [t._v("客服热线：")]), s("a", {
                staticStyle: {
                    color: "#007aff",
                    "font-size": "0.24rem"
                },
                attrs: {
                    href: "tel:10000"
                }
            }, [t._v("10000")]), t._v(" "), s("a", {
                staticStyle: {
                    color: "#007aff",
                    "font-size": "0.24rem"
                }
            }, [t._v("/")]), t._v(" "), s("a", {
                staticStyle: {
                    color: "#007aff",
                    "font-size": "0.24rem"
                },
                attrs: {
                    href: "tel:10086"
                }
            }, [t._v("10086")]), s("a", {
                staticStyle: {
                    color: "#007aff",
                    "font-size": "0.24rem"
                }
            }, [t._v(" /")]), s("a", {
                staticStyle: {
                    color: "#007aff",
                    "font-size": "0.24rem"
                },
                attrs: {
                    href: "tel:10010"
                }
            }, [t._v(" 10010")])], 1) : s("div", {
                staticClass: "foot-box"
            }, [s("footer-comp")], 1)])])
        }
            , i = [function() {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return s("ul", {
                staticClass: "error-tip"
            }, [s("li", {
                staticClass: "error-tip-item"
            }, [t._v("您可以编写“CXMYD”发送到")]), s("li", {
                staticClass: "error-tip-item"
            }, [t._v("10001（电信）、10086（移动）、10010（联通）")]), s("li", {
                staticClass: "error-tip-item"
            }, [t._v("进行短信查询")])])
        }
            , function() {
                var t = this
                    , e = t.$createElement
                    , s = t._self._c || e;
                return s("div", {
                    staticClass: "tip"
                }, [t._v("结果包含您在前14天内到访的国家(地区)与停留4小时以上的国内城市"), s("br"), s("br"), t._v(" 色卡仅对到访地作提醒，不关联健康状况 ")])
            }
        ]
            , o = (s("ac1f"),
                s("5319"),
                s("159b"),
                function() {
                    var t = this
                        , e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }
        )
            , r = [function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("footer", {
                staticClass: "footer-comp"
            }, [a("div", [a("p", {
                staticStyle: {
                    "font-size": "0.24rem",
                    color: "white"
                }
            }, [t._v("————————— 本服务联合提供 —————————")])]), a("div", {
                staticClass: "caict"
            }, [a("img", {
                attrs: {
                    src: s("f1a1"),
                    alt: "caict"
                }
            })]), a("div", [a("a", {
                staticStyle: {
                    "font-size": "0.24rem",
                    color: "white"
                }
            }, [a("br"), t._v("客服热线：")]), a("a", {
                staticStyle: {
                    "font-size": "0.24rem",
                    color: "white"
                },
                attrs: {
                    href: "tel:10000"
                }
            }, [t._v("10000")]), t._v(" "), a("a", {
                staticStyle: {
                    "font-size": "0.24rem",
                    color: "white"
                }
            }, [t._v("/")]), a("a", {
                staticStyle: {
                    "font-size": "0.24rem",
                    color: "white"
                },
                attrs: {
                    href: "tel:10086"
                }
            }, [t._v(" 10086")]), a("a", {
                staticStyle: {
                    "font-size": "0.24rem",
                    color: "white"
                }
            }, [t._v(" / ")]), t._v(" "), a("a", {
                staticStyle: {
                    "font-size": "0.24rem",
                    color: "white"
                },
                attrs: {
                    href: "tel:10010"
                }
            }, [t._v("10010")])])])
        }
        ]
            , n = {
            name: "FooterCompBak",
            components: {},
            model: {},
            props: {},
            data: function() {
                return {}
            },
            computed: {},
            watch: {},
            created: function() {},
            mounted: function() {},
            beforeDestroy: function() {},
            methods: {}
        }
            , l = n
            , c = (s("9bf7"),
            s("2877"))
            , f = Object(c["a"])(l, o, r, !1, null, "075eaec1", null)
            , d = f.exports
            , p = s("0a25")
            , m = s("1b4e")
            , u = s("c4fe")
            , v = s("49b8")
            , g = {
            name: "result",
            components: {
                FooterComp: d,
                FooterCompNodata: p["a"]
            },
            data: function() {
                return {
                    yellowAddr: ["日本", "韩国", "意大利", "伊朗", "法国", "德国", "西班牙", "美国", "瑞士", "英国", "荷兰", "挪威", "瑞典", "比利时", "丹麦", "奥地利", "澳大利亚", "马来西亚", "希腊", "捷克", "芬兰", "卡塔尔", "加拿大", "沙特阿拉伯", "葡萄牙", "斯洛文尼亚", "以色列", "爱尔兰", "爱沙尼亚", "波兰", "冰岛", "泰国", "匈牙利", "巴西", "智利", "卢森堡", "埃及", "印度尼西亚", "新加坡", "巴林", "印度", "罗马尼亚", "土耳其", "圣马力诺", "斯洛伐克", "塞尔维亚", "保加利亚", "亚美尼亚", "克罗地亚", "阿尔巴尼亚", "塞浦路斯", "白俄罗斯", "波黑", "北马其顿", "摩尔多瓦", "乌克兰", "柬埔寨", "科威特", "布基纳法索", "刚果（金）", "科特迪瓦", "安哥拉", "尼日利亚", "毛里求斯", "埃塞俄比亚"],
                    greenqr: m,
                    redqr: u,
                    yellowqr: v,
                    showNoData: !1,
                    showData: !1,
                    type: "",
                    info: {
                        message: "",
                        color: "",
                        phone: "",
                        time: ""
                    },
                    isLoading: !0
                }
            },
            computed: {
                title: function() {
                    var t = ["", ""];
                    return "red" === this.type ? t[0] : "green" === this.type ? t[1] : ""
                },
                imgSrc: function() {
                    return "red" === this.type ? this.redqr : "green" === this.type ? this.greenqr : "yellow" === this.type ? this.yellowqr : ""
                }
            },
            mounted: function() {
                this.getInfo()
            },
            methods: {
                getInfo: function() {
                    var t = this
                        , e = JSON.parse(localStorage.getItem("resMsg"));
                    "00" == e.code ? setTimeout((function() {
                            t.isLoading = !1,
                                t.showData = !0,
                                t.showNoData = !1,
                                t.type = e.result.color,
                                t.info = e.result,
                            e.result.message && e.result.message.length > 0 && "yellow" === t.type && t.yellowAddr.forEach((function(t) {
                                    e.result.message = e.result.message.replace(t, "<font color='red'>" + t + "</font>")
                                }
                            ))
                        }
                    ), 300) : setTimeout((function() {
                            t.isLoading = !1,
                                t.showData = !1,
                                t.showNoData = !0,
                                t.type = e.result.color,
                                t.info = e.result
                        }
                    ), 300)
                }
            }
        }
            , h = g
            , y = (s("be0e"),
            Object(c["a"])(h, a, i, !1, null, "663b4370", null));
        e["default"] = y.exports
    },
    "934c": function(t, e, s) {},
    "9bf7": function(t, e, s) {
        "use strict";
        var a = s("934c")
            , i = s.n(a);
        i.a
    },
    be0e: function(t, e, s) {
        "use strict";
        var a = s("d334")
            , i = s.n(a);
        i.a
    },
    c4fe: function(t, e, s) {
        t.exports = s.p + "img/gif_red.5e4f684c.gif"
    },
    d334: function(t, e, s) {},
    f1a1: function(t, e, s) {
        t.exports = s.p + "img/icons_white@3x.8f846249.png"
    }
}]);
//# sourceMappingURL=result.0a244300.js.map

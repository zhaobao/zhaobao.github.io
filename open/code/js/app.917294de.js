(function (e) {
        function t(t) {
            for (var a, o, s = t[0], c = t[1], l = t[2], u = 0, d = []; u < s.length; u++)
                o = s[u],
                Object.prototype.hasOwnProperty.call(r, o) && r[o] && d.push(r[o][0]),
                    r[o] = 0;
            for (a in c)
                Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
            p && p(t);
            while (d.length)
                d.shift()();
            return i.push.apply(i, l || []),
                n()
        }

        function n() {
            for (var e, t = 0; t < i.length; t++) {
                for (var n = i[t], a = !0, o = 1; o < n.length; o++) {
                    var s = n[o];
                    0 !== r[s] && (a = !1)
                }
                a && (i.splice(t--, 1),
                    e = c(c.s = n[0]))
            }
            return e
        }

        var a = {}
            , o = {
            app: 0
        }
            , r = {
            app: 0
        }
            , i = [];

        function s(e) {
            return c.p + "js/" + ({
                result: "result"
            }[e] || e) + "." + {
                result: "0a244300"
            }[e] + ".js"
        }

        function c(t) {
            if (a[t])
                return a[t].exports;
            var n = a[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, c),
                n.l = !0,
                n.exports
        }

        c.e = function (e) {
            var t = []
                , n = {
                result: 1
            };
            o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function (t, n) {
                    for (var a = "css/" + ({
                        result: "result"
                    }[e] || e) + "." + {
                        result: "5c73961c"
                    }[e] + ".css", r = c.p + a, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                        var l = i[s]
                            , u = l.getAttribute("data-href") || l.getAttribute("href");
                        if ("stylesheet" === l.rel && (u === a || u === r))
                            return t()
                    }
                    var d = document.getElementsByTagName("style");
                    for (s = 0; s < d.length; s++) {
                        l = d[s],
                            u = l.getAttribute("data-href");
                        if (u === a || u === r)
                            return t()
                    }
                    var p = document.createElement("link");
                    p.rel = "stylesheet",
                        p.type = "text/css",
                        p.onload = t,
                        p.onerror = function (t) {
                            var a = t && t.target && t.target.src || r
                                , i = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                            i.code = "CSS_CHUNK_LOAD_FAILED",
                                i.request = a,
                                delete o[e],
                                p.parentNode.removeChild(p),
                                n(i)
                        }
                        ,
                        p.href = r;
                    var f = document.getElementsByTagName("head")[0];
                    f.appendChild(p)
                }
            )).then((function () {
                    o[e] = 0
                }
            )));
            var a = r[e];
            if (0 !== a)
                if (a)
                    t.push(a[2]);
                else {
                    var i = new Promise((function (t, n) {
                            a = r[e] = [t, n]
                        }
                    ));
                    t.push(a[2] = i);
                    var l, u = document.createElement("script");
                    u.charset = "utf-8",
                        u.timeout = 120,
                    c.nc && u.setAttribute("nonce", c.nc),
                        u.src = s(e);
                    var d = new Error;
                    l = function (t) {
                        u.onerror = u.onload = null,
                            clearTimeout(p);
                        var n = r[e];
                        if (0 !== n) {
                            if (n) {
                                var a = t && ("load" === t.type ? "missing" : t.type)
                                    , o = t && t.target && t.target.src;
                                d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")",
                                    d.name = "ChunkLoadError",
                                    d.type = a,
                                    d.request = o,
                                    n[1](d)
                            }
                            r[e] = void 0
                        }
                    }
                    ;
                    var p = setTimeout((function () {
                            l({
                                type: "timeout",
                                target: u
                            })
                        }
                    ), 12e4);
                    u.onerror = u.onload = l,
                        document.head.appendChild(u)
                }
            return Promise.all(t)
        }
            ,
            c.m = e,
            c.c = a,
            c.d = function (e, t, n) {
                c.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            c.r = function (e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            c.t = function (e, t) {
                if (1 & t && (e = c(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (c.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & t && "string" != typeof e)
                    for (var a in e)
                        c.d(n, a, function (t) {
                            return e[t]
                        }
                            .bind(null, a));
                return n
            }
            ,
            c.n = function (e) {
                var t = e && e.__esModule ? function () {
                        return e["default"]
                    }
                    : function () {
                        return e
                    }
                ;
                return c.d(t, "a", t),
                    t
            }
            ,
            c.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            c.p = "",
            c.oe = function (e) {
                throw console.error(e),
                    e
            }
        ;
        var l = window["webpackJsonp"] = window["webpackJsonp"] || []
            , u = l.push.bind(l);
        l.push = t,
            l = l.slice();
        for (var d = 0; d < l.length; d++)
            t(l[d]);
        var p = u;
        i.push([0, "chunk-vendors"]),
            n()
    }
)({
    0: function (e, t, n) {
        e.exports = n("56d7")
    },
    "097e": function (e, t) {
        function n(e, t) {
            var n = document.getElementsByTagName("html")[0]
                , a = document.body.clientWidth || document.documentElement.clientWidth;
            n.style.fontSize = a / e * t + "px"
        }

        window.onload = function () {
        }
            ,
            window.onresize = function () {
                n(750, 100)
            }
            ,
            n(750, 100)
    },
    "0a25": function (e, t, n) {
        "use strict";
        var a = function () {
            var e = this
                , t = e.$createElement;
            e._self._c;
            return e._m(0)
        }
            , o = [function () {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("footer", {
                staticClass: "footer-comp"
            }, [a("div", {
                staticClass: "powered-by-title"
            }, [a("div", {
                staticClass: "split-line"
            }), a("p", {
                staticClass: "split-text"
            }, [e._v("本服务联合提供")])]), a("div", {
                staticClass: "caict"
            }, [a("img", {
                attrs: {
                    src: n("d557"),
                    alt: "caict"
                }
            })])])
        }
        ]
            , r = {
            name: "FooterComp",
            components: {},
            model: {},
            props: {},
            data: function () {
                return {}
            },
            computed: {},
            watch: {},
            created: function () {
            },
            mounted: function () {
            },
            beforeDestroy: function () {
            },
            methods: {}
        }
            , i = r
            , s = (n("df98"),
            n("2877"))
            , c = Object(s["a"])(i, a, o, !1, null, "4de3a9eb", null);
        t["a"] = c.exports
    },
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"),
            n("e6cf"),
            n("cca6"),
            n("a79d");
        var a = n("2b0e")
            , o = function () {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("router-view")], 1)
        }
            , r = []
            , i = (n("5c0b"),
            n("2877"))
            , s = {}
            , c = Object(i["a"])(s, o, r, !1, null, null, null)
            , l = c.exports
            , u = (n("aa35"),
            n("da01"),
            n("c740"),
            n("b0c0"),
            n("d3b7"),
            n("8c4f"))
            , d = function () {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "login-wrap"
            }, [n("div", {
                staticClass: "bg-pic"
            }, [n("div", {
                staticClass: "img-holder"
            }), n("div", {
                staticClass: "div-main"
            }, [n("ul", {
                staticClass: "form-list"
            }, [n("li", {
                staticClass: "form-item"
            }, [n("i", {
                staticClass: "icon phone"
            }), n("input", {
                directives: [{
                    name: "rpage",
                    rawName: "v-rpage"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: e.loginForm.phone,
                    expression: "loginForm.phone"
                }],
                staticStyle: {
                    width: "60%"
                },
                attrs: {
                    maxlength: "11",
                    type: "tel",
                    placeholder: "手机号"
                },
                domProps: {
                    value: e.loginForm.phone
                },
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.loginForm, "phone", t.target.value)
                    }
                }
            }), n("button", {
                staticClass: "close close-tel",
                on: {
                    click: e.clearphone
                }
            }), n("button", {
                staticClass: "phonebtn",
                class: e.isDisable ? "phonebtn-s" : "",
                attrs: {
                    disabled: e.isDisable
                },
                on: {
                    click: e.sendCode
                }
            }, [e._v(e._s(e.phBtnTxt))])]), n("li", {
                staticClass: "form-item"
            }, [n("i", {
                staticClass: "icon pwd"
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.veryCode,
                    expression: "veryCode"
                }, {
                    name: "rpage",
                    rawName: "v-rpage"
                }],
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    maxlength: "6",
                    placeholder: "请输入验证码"
                },
                domProps: {
                    value: e.veryCode
                },
                on: {
                    input: function (t) {
                        t.target.composing || (e.veryCode = t.target.value)
                    }
                }
            }), n("button", {
                staticClass: "close",
                on: {
                    click: e.clearverify
                }
            })]), n("li", {
                staticClass: "form-item"
            }, [n("div", {
                staticClass: "div-ck",
                staticStyle: {
                    "margin-left": "0.11rem"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.ckValue,
                    expression: "ckValue"
                }],
                staticClass: "check_box tui-checkbox",
                staticStyle: {
                    width: "0.28rem",
                    height: "0.26rem",
                    "margin-top": "0.02rem"
                },
                attrs: {
                    type: "checkbox",
                    name: "hobby",
                    value: ""
                },
                domProps: {
                    checked: Array.isArray(e.ckValue) ? e._i(e.ckValue, "") > -1 : e.ckValue
                },
                on: {
                    change: function (t) {
                        var n = e.ckValue
                            , a = t.target
                            , o = !!a.checked;
                        if (Array.isArray(n)) {
                            var r = ""
                                , i = e._i(n, r);
                            a.checked ? i < 0 && (e.ckValue = n.concat([r])) : i > -1 && (e.ckValue = n.slice(0, i).concat(n.slice(i + 1)))
                        } else
                            e.ckValue = o
                    }
                }
            }), n("div", {
                staticClass: "cl-title",
                staticStyle: {
                    "margin-left": "0.12rem"
                },
                on: {
                    click: e.setCheck
                }
            }, [e._v("同意并授权运营商查询本人在疫情期间14天内到访地信息")])])])]), n("mt-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLoginBtn,
                    expression: "isLoginBtn"
                }],
                attrs: {
                    disabled: 0 == e.ckValue,
                    type: "primary"
                },
                nativeOn: {
                    click: function (t) {
                        return e.login(t)
                    }
                }
            }, [e._v("查询")]), n("mt-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isLoginBtn,
                    expression: "!isLoginBtn"
                }],
                attrs: {
                    disabled: 0 == e.ckValue,
                    type: "primary"
                }
            }, [e._v("确认中...")]), e._m(0)], 1), n("div", {
                staticClass: "foot-box"
            }, [n("footer-comp-nodata"), n("a", [e._v("客服热线：")]), n("a", {
                staticStyle: {
                    color: "#007aff",
                    "text-decoration": "none"
                },
                attrs: {
                    href: "tel:10000"
                }
            }, [e._v("10000")]), e._v(" "), n("a", {
                staticStyle: {
                    color: "#007aff",
                    "text-decoration": "none"
                }
            }, [e._v("/")]), e._v(" "), n("a", {
                staticStyle: {
                    color: "#007aff",
                    "text-decoration": "none"
                },
                attrs: {
                    href: "tel:10086"
                }
            }, [e._v("10086")]), e._v(" "), n("a", {
                staticStyle: {
                    color: "#007aff",
                    "text-decoration": "none"
                }
            }, [e._v("/")]), n("a", {
                staticStyle: {
                    color: "#007aff",
                    "text-decoration": "none"
                },
                attrs: {
                    href: "tel:10010"
                }
            }, [e._v(" 10010")])], 1), 0 == e.ad ? n("div", {
                staticClass: "swiper3",
                staticStyle: {
                    "padding-left": "0.5rem",
                    width: "6.9rem",
                    "padding-bottom": "0.1rem"
                }
            }, [e.giftType.length > 1 ? n("swiper", {
                attrs: {
                    options: e.swiperOption
                }
            }, [e._l(e.giftType, (function (t, a) {
                    return n("swiper-slide", {
                        key: a
                    }, [n("div", {
                        staticClass: "gift-type",
                        staticStyle: {
                            display: "flex"
                        },
                        attrs: {
                            "data-id": t.id
                        }
                    }, [n("div", {
                        staticStyle: {
                            padding: "0.1rem",
                            width: "1rem"
                        }
                    }, [n("img", {
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        },
                        attrs: {
                            src: t.img,
                            alt: ""
                        }
                    })]), n("div", {
                        staticStyle: {
                            color: "#444444",
                            "text-align": "left",
                            "padding-top": "0.20rem",
                            width: "4rem"
                        }
                    }, [n("div", [e._v(e._s(t.detail1))]), n("div", {
                        staticStyle: {
                            "padding-top": "0.15rem"
                        }
                    }, [e._v(e._s(t.detail2))])])])])
                }
            )), n("div", {
                staticClass: "swiper-pagination",
                attrs: {
                    slot: "pagination"
                },
                slot: "pagination"
            })], 2) : e._e(), e._m(1)], 1) : e._e()])])
        }
            , p = [function () {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticStyle: {
                    "text-align": "right",
                    "padding-top": "0.3rem",
                    "padding-right": "0.1rem"
                }
            }, [n("a", {
                staticStyle: {
                    color: "rgb(0, 122, 255)",
                    "text-decoration": "underline"
                },
                attrs: {
                    href: "https://xc.caict.ac.cn/help.html",
                    target: "_blank"
                }
            }, [e._v("行程卡使用说明")])])
        }
            , function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticStyle: {
                        "font-size": "8px",
                        "padding-top": "0.5rem"
                    }
                }, [n("p", [e._v("Copyright © 2018-2023 中国信息通信研究院版权所有")]), n("p", {
                    staticStyle: {
                        "padding-top": "0.03rem"
                    }
                }, [n("a", {
                    staticStyle: {
                        color: "rgb(0, 122, 255)",
                        "text-decoration": "none"
                    },
                    attrs: {
                        href: "http://www.beian.miit.gov.cn"
                    }
                }, [e._v("京ICP备09013372号-13")]), e._v("京公网安备11010802027721号")]), n("p", {
                    staticStyle: {
                        "padding-top": "0.03rem"
                    }
                }, [e._v("网站声明 联系我们 ")])])
            }
        ]
            , f = (n("a4d3"),
            n("4de4"),
            n("a15b"),
            n("4e82"),
            n("e439"),
            n("dbb4"),
            n("b64b"),
            n("e25e"),
            n("4d63"),
            n("ac1f"),
            n("25f0"),
            n("5319"),
            n("159b"),
            n("ade3"))
            , h = n("2f62")
            , m = n("4328")
            , g = n.n(m)
            , v = n("76a0")
            , y = n.n(v);
        n("e01a"),
            n("d28b"),
            n("c975"),
            n("baa5"),
            n("fb6a"),
            n("a9e3"),
            n("c35a"),
            n("b680"),
            n("3ca3"),
            n("ddb0"),
            n("2b3d"),
            n("53ca");

        function b(e, t) {
            var n = !0
                , a = new RegExp(e);
            return n = a.test(t),
                n
        }

        var w = "^1[3|4|5|6|7|8|9][0-9]{9}$";
        var x = n("0a25")
            , C = (n("dfa4"),
            n("7212"));

        function S(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }

        function _(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(n), !0).forEach((function (t) {
                        Object(f["a"])(e, t, n[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                ))
            }
            return e
        }

        var k = {
            name: "login",
            data: function () {
                return {
                    swiperOption: Object(f["a"])({
                        observer: !0,
                        observeParents: !0,
                        loop: !0,
                        autoplay: {
                            delay: 3e3
                        },
                        pagination: {
                            el: ".swiper-pagination"
                        }
                    }, "loop", !0),
                    giftType: [],
                    loginForm: {
                        phone: "",
                        veryCode: "",
                        sysCode: "xty"
                    },
                    uuid: "",
                    phBtnTxt: "获取验证码",
                    phinterval: null,
                    snum: 60,
                    timeStap: 0,
                    isCount: !1,
                    disablebtn: !0,
                    testmsg: "",
                    isLoginBtn: !0,
                    ad: 0,
                    options: [{
                        label: "同意并授权运营商查询本人在疫情期间14天内到访地信息",
                        value: "1"
                    }],
                    ckValue: 0,
                    code: ""
                }
            },
            computed: {
                isDisable: function () {
                    return this.isCount || this.disablebtn
                },
                veryCode: {
                    get: function () {
                        var e = this.code.replace(/[^\d]+/g, "");
                        return e
                    },
                    set: function (e) {
                        this.code = e
                    }
                }
            },
            watch: {
                "loginForm.phone": {
                    handler: function (e) {
                        var t = b(w, e);
                        this.disablebtn = !t
                    }
                }
            },
            mounted: function () {
                var e = this.getUrlKey("ad", window.location.href);
                e && null != e && 1 == e && (this.ad = 1),
                    this.initChange();
                var t = this.getUrlKey("phone", window.location.href);
                t && null != t && "" != t && (this.loginForm.phone = t),
                    this.initLunbo()
            },
            beforeDestroy: function () {
                clearInterval(this.phinterval),
                    document.removeEventListener("visibilitychange", this.listen)
            },
            methods: _({}, Object(h["b"])(["SET_USER_INFO"]), {
                setCheck: function () {
                    1 == this.ckValue ? this.ckValue = 0 : this.ckValue = 1
                },
                initLunbo: function () {
                    var e = this
                        , t = [1, 2, 3];
                    t = t.sort((function () {
                            return Math.random() > .5 ? -1 : 1
                        }
                    ));
                    var a = [{
                        img: n("b2a5"),
                        detail1: "中国信通院",
                        detail2: "国家高端专业智库·产业创新发展平台",
                        id: 1
                    }, {
                        img: n("6e3d"),
                        detail1: "下载中国移动App",
                        detail2: "更多服务办理",
                        id: 2
                    }, {
                        img: n("ecd2"),
                        detail1: "关注联通大数据公众号，随需查询",
                        detail2: "更多大数据服务与您共抗疫情",
                        id: 3
                    }];
                    t.forEach((function (t) {
                            e.giftType.push(a[t - 1])
                        }
                    ))
                },
                login: function () {
                    var e = this
                        , t = this.checkPhoneValue();
                    if (t)
                        if (this.code) {
                            this.SET_USER_INFO(""),
                                localStorage.setItem("token", this.code),
                                localStorage.setItem("phone", this.loginForm.phone),
                            "" == this.uuid && (this.uuid = this.getUUid()),
                                localStorage.setItem("uuid", this.uuid),
                                localStorage.setItem("loginkey", "1");
                            var n = this.getUrlKey("code", window.location.href);
                            null == n && (n = "");
                            var a = {
                                phone: localStorage.getItem("phone"),
                                queryId: localStorage.getItem("uuid"),
                                verification: localStorage.getItem("token"),
                                code: n
                            };
                            var now = new Date();
                            var ddd = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
                            var mmm = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
                            var time = now.getFullYear() + "." + mmm + "." + ddd + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                            var ret = '{"status":"1","code":"00","errorDesc":"请求成功","result":{"color":"green","phone":"136****4036","time":"' + time + '","message":"北京市"},"queryId":"96eecdb3f2e92f4487f8654f689fa0cc"}';
                            this.isLoginBtn = !1;
                            e.isLoginBtn = !0;
                            localStorage.setItem("resMsg", ret);
                            e.$router.push({
                                path: "/result"
                            })

                        } else
                            this.$MessageBox("提示", "请输入验证码！")
                },
                checkPhoneValue: function () {
                    if (!this.loginForm.phone)
                        return this.$MessageBox("提示", "请输入手机号码！"),
                            !1;
                    var e = b(w, this.loginForm.phone);
                    return !!e || (this.$MessageBox("提示", "请输入正确的手机号码！"),
                        !1)
                },
                sendCode: function () {
                    this.setTimeNum()
                },
                getUrlKey: function (e, t) {
                    return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(t) || [, ""])[1].replace(/\+/g, "%20")) || null
                },
                setTimeNum: function () {
                    var e = this
                        , t = this.checkPhoneValue();
                    if (t && "获取验证码" == this.phBtnTxt) {
                        var n = this;
                        this.snum;
                        this.isCount = !0,
                            this.uuid = this.getUUid();
                        var a = {
                            phone: this.loginForm.phone,
                            queryId: this.uuid,
                            sysCode: "xty"
                        };
                        e.timeStap = (new Date).getTime(),
                            e.phinterval = setInterval((function () {
                                    var e = (new Date).getTime()
                                        , t = (e - n.timeStap) / 1e3;
                                    t = parseInt(t);
                                    var a = 60 - t > 0 ? 60 - t : 0;
                                    0 === a ? (n.phBtnTxt = "获取验证码",
                                        n.isCount = !1,
                                        clearInterval(n.phinterval)) : n.phBtnTxt = "".concat(a, "s后重试")
                                }
                            ), 1e3)

                    }
                },
                clearuser: function () {
                    this.loginForm.name = ""
                },
                getUUid: function () {
                    for (var e = [], t = "0123456789abcdef", n = 0; n < 32; n++)
                        e[n] = t.substr(Math.floor(16 * Math.random()), 1);
                    e[14] = "4",
                        e[19] = t.substr(3 & e[19] | 8, 1),
                        e[8] = e[13] = e[18] = e[23];
                    var a = e.join("");
                    return a
                },
                clearphone: function () {
                    this.loginForm.phone = ""
                },
                clearverify: function () {
                    this.code = ""
                },
                initChange: function () {
                    document.addEventListener("visibilitychange", this.listen)
                },
                listen: function () {
                    if (!document.hidden) {
                        var e = (new Date).getTime()
                            , t = (e - this.timeStap) / 1e3;
                        t = parseInt(t);
                        var n = 60 - t > 0 ? 60 - t : 0;
                        0 === n && (self.phBtnTxt = "获取验证码",
                            self.isCount = !1)
                    }
                }
            }),
            components: {
                FooterCompNodata: x["a"],
                swiper: C["swiper"],
                swiperSlide: C["swiperSlide"]
            }
        }
            , T = k
            , j = (n("8b72"),
            Object(i["a"])(T, d, p, !1, null, null, null))
            , P = j.exports;
        a["default"].use(u["a"]);
        var O = [{
            path: "/",
            redirect: "login"
        }, {
            path: "/login",
            name: "login",
            component: P
        }, {
            path: "/result",
            name: "result",
            component: function () {
                return n.e("result").then(n.bind(null, "8f88"))
            }
        }, {
            path: "*",
            redirect: "login"
        }]
            , B = new u["a"]({
            routes: O
        })
            , E = ["login"];
        B.beforeEach((function (e, t, n) {
                if (E.findIndex((function (t) {
                        return t === e.name
                    }
                )) < 0) {
                    var a = localStorage.getItem("loginkey");
                    1 == a ? n() : n({
                        path: "/login"
                    })
                } else
                    n()
            }
        ));
        var $ = B
            , I = n("2ef0")
            , U = n.n(I)
            , F = function (e) {
            var t = localStorage.getItem("_userinfo")
                , n = {};
            try {
                n = JSON.parse(t)
            } catch (a) {
            }
            e.replaceState(U.a.defaultsDeep(n, e.state)),
                e.subscribe((function (e, t) {
                        "SET_USER_INFO" === e.type && localStorage.setItem("_userinfo", JSON.stringify(t))
                    }
                ))
        };
        a["default"].use(h["a"]);
        var M = new h["a"].Store({
            state: {
                userInfo: {}
            },
            mutations: {
                SET_USER_INFO: function (e, t) {
                    e.userInfo = t
                }
            },
            getters: {
                unicom: function (e) {
                    return "01" === e.userInfo.operator
                }
            },
            actions: {},
            modules: {},
            plugins: [F]
        });
        a["default"].directive("rpage", {
            inserted: function (e) {
                document.body.addEventListener("focusout", (function () {
                        /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && setTimeout((function () {
                                var e = document.documentElement.scrollTop || document.body.scrollTop || 0;
                                window.scrollTo(0, Math.max(e - 1, 0))
                            }
                        ), 100)
                    }
                ))
            }
        });
        var L = 200
            , N = 3e4
            , V = "code"
            , D = "/"
            , R = n("bc3a")
            , q = n.n(R);
        q.a.defaults.withCredentials = !0;
        var A = q.a.create({
            baseURL: D,
            timeout: N,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            withCredentials: !0
        })
            , J = q.a.CancelToken
            , K = J.source();
        A.interceptors.request.use((function (e) {
                return e.cancelToken = K.token,
                    "post" === e.method ? (e.headers["Content-Type"] = "application/json; charset=UTF-8",
                        e) : "get" === e.method ? e : void 0
            }
        ), (function (e) {
                return Promise.reject(e)
            }
        )),
            A.interceptors.response.use((function (e) {
                    return e.data[V] == L ? e.data : 1003 == e.data[V] ? (K.cancel(),
                        K = J.source(),
                        a["default"].prototype.$MessageBox({
                            title: "提示",
                            message: e.data.msg
                        }),
                        $.replace({
                            path: "/login",
                            query: {
                                redirect: $.currentRoute.fullPath
                            }
                        }),
                        Promise.reject(e.data)) : (a["default"].prototype.$MessageBox({
                        title: "提示",
                        message: e.data.msg
                    }),
                        Promise.reject(e.data))
                }
            ), (function (e) {
                    return q.a.isCancel(e) ? new Promise((function () {
                        }
                    )) : (a["default"].prototype.$MessageBox({
                        title: "提示",
                        message: e.msg
                    }),
                        Promise.reject(e))
                }
            ));
        var z = A;
        q.a.defaults.withCredentials = !0;
        var W = q.a.create({
            baseURL: D,
            timeout: N,
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            withCredentials: !0
        });
        W.interceptors.request.use((function (e) {
                return "post" === e.method || "put" === e.method ? (e.headers["Content-Type"] = "application/json;charset=UTF-8",
                    e) : "get" === e.method && e.data && Object.keys(e.data).length ? (e.params = g.a.parse(e.data),
                    e) : "get" === e.method ? (e.url = encodeURI(e.url),
                    e) : void 0
            }
        ), (function (e) {
                return Promise.reject(e)
            }
        ));
        // W.interceptors.response.use((function(e) {
        //         return "1" === e.data.status ? e.data : (a["default"].prototype.$MessageBox({
        //             title: "提示",
        //             message: e.data.errorDesc
        //         }),
        //             Promise.reject(e.data))
        //     }
        // ), (function(e) {
        //         return a["default"].prototype.$MessageBox({
        //             title: "提示",
        //             message: e.msg || "网络错误！"
        //         }),
        //             Promise.reject(e)
        //     }
        // ));
        var H = W
            , G = q.a.create({
            baseURL: D,
            timeout: N,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            withCredentials: !1
        });
        G.interceptors.request.use((function (e) {
                return "post" === e.method || "put" === e.method ? (e.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8",
                    e) : "get" === e.method && e.data && Object.keys(e.data).length ? (e.params = g.a.parse(e.data),
                    e) : "get" === e.method ? (e.url = encodeURI(e.url),
                    e) : void 0
            }
        ), (function (e) {
                return Promise.reject(e)
            }
        )),
            G.interceptors.response.use((function (e) {
                    return e.data[V] === L ? e.data : (a["default"].prototype.$MessageBox({
                        title: "提示",
                        message: e.data.msg
                    }),
                        Promise.reject(e.data))
                }
            ), (function (e) {
                    return a["default"].prototype.$MessageBox({
                        title: "提示",
                        message: e.msg
                    }),
                        Promise.reject(e)
                }
            ));
        var Q = G
            , X = q.a.create({
            baseURL: D,
            timeout: N,
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            withCredentials: !1
        })
            , Y = q.a.CancelToken
            , Z = Y.source();
        X.interceptors.request.use((function (e) {
                return e.cancelToken = Z.token,
                    e.headers.common["Authorization"] = "Bearer " + window.localStorage["token"],
                    "post" === e.method ? (e.headers["Content-Type"] = "application/json; charset=UTF-8",
                        e) : "get" === e.method ? e : void 0
            }
        ), (function (e) {
                return Promise.reject(e)
            }
        )),
            X.interceptors.response.use((function (e) {
                    return "1" === e.data.status ? e.data : (a["default"].prototype.$MessageBox({
                        title: "提示",
                        message: e.data.errorDesc
                    }),
                        Promise.reject(e.data))
                }
            ), (function (e) {
                    if (e.response && e.response.status) {
                        var t = e.response.status;
                        switch (t) {
                            case 403:
                                localStorage.removeItem("loginkey"),
                                    localStorage.removeItem("token"),
                                    $.replace({
                                        name: "login"
                                    });
                                break
                        }
                    }
                    return q.a.isCancel(e) ? new Promise((function () {
                        }
                    )) : (403 !== e.response.status && a["default"].prototype.$MessageBox({
                        title: "提示",
                        message: e.message || "网络错误！"
                    }),
                        Promise.reject(e))
                }
            ));
        var ee = X;
        q.a.defaults.withCredentials = !0;
        var te = q.a.create({
            baseURL: D,
            timeout: N,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            withCredentials: !0
        })
            , ne = q.a.CancelToken
            , ae = ne.source();
        te.interceptors.request.use((function (e) {
                return e.cancelToken = ae.token,
                    "post" === e.method ? (e.headers["Content-Type"] = "application/json; charset=UTF-8",
                        e) : "get" === e.method ? e : void 0
            }
        ), (function (e) {
                return Promise.reject(e)
            }
        )),
            te.interceptors.response.use((function (e) {
                    return e.data[V] == L ? e.data : 1003 == e.data[V] ? (ae.cancel(),
                        ae = ne.source(),
                        a["default"].prototype.$MessageBox({
                            title: "提示",
                            message: e.data.msg
                        }),
                        $.replace({
                            path: "/login",
                            query: {
                                redirect: $.currentRoute.fullPath
                            }
                        }),
                        Promise.reject(e.data)) : (a["default"].prototype.$MessageBox({
                        title: "提示",
                        message: e.data.msg
                    }),
                        Promise.reject(e.data))
                }
            ), (function (e) {
                    return q.a.isCancel(e) ? new Promise((function () {
                        }
                    )) : (a["default"].prototype.$MessageBox({
                        title: "提示",
                        message: e.msg || "网络错误！"
                    }),
                        Promise.reject(e))
                }
            ));
        var oe = te;
        n("097e");
        a["default"].config.productionTip = !1,
            a["default"].prototype.$MessageBox = v["MessageBox"],
            a["default"].prototype.$xhr = z,
            a["default"].prototype.$xhrlogin = H,
            a["default"].prototype.$xhrcode = Q,
            a["default"].prototype.$xhrquery = ee,
            a["default"].prototype.$xhrlog = oe,
            a["default"].use(y.a),
            new a["default"]({
                router: $,
                store: M,
                render: function (e) {
                    return e(l)
                }
            }).$mount("#app")
    },
    "5c0b": function (e, t, n) {
        "use strict";
        var a = n("9c0c")
            , o = n.n(a);
        o.a
    },
    "6e3d": function (e, t, n) {
        e.exports = n.p + "img/2.1a9c1a3d.png"
    },
    "82e6": function (e, t, n) {
    },
    "8b72": function (e, t, n) {
        "use strict";
        var a = n("d503")
            , o = n.n(a);
        o.a
    },
    "9c0c": function (e, t, n) {
    },
    b2a5: function (e, t, n) {
        e.exports = n.p + "img/1.0f6d595a.png"
    },
    d503: function (e, t, n) {
    },
    d557: function (e, t, n) {
        e.exports = n.p + "img/icons@3x.6bf20458.png"
    },
    da01: function (e, t, n) {
    },
    df98: function (e, t, n) {
        "use strict";
        var a = n("82e6")
            , o = n.n(a);
        o.a
    },
    ecd2: function (e, t, n) {
        e.exports = n.p + "img/3.2f03471e.png"
    }
});
//# sourceMappingURL=app.917294de.js.map

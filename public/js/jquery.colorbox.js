$(document).ready(function() {
        $(".ajax").colorbox(), $(".connect").colorbox({
            iframe: !0,
            innerWidth: 800,
            innerHeight: 850
        }), $(".download").colorbox({
            iframe: !0,
            innerWidth: 750,
            innerHeight: 600
        }), $(".feedback").colorbox({
            photo: !0,
            photo: !0
        }), $(".punecontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 490
        }), $(".bangcontact").colorbox({
            iframe: !0,
            width: 400,
            height: 450
        }), $(".checontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 180
        }), $(".delcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 182
        }), $(".hydcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 340
        }), $(".kolcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 180
        }), $(".mohcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 180
        }), $(".mumcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 350
        }), $(".noicontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 350
        }), $(".tricontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 310
        }), $(".hi-punecontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 540
        }), $(".hi-bangcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 328
        }), $(".hi-checontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 200
        }), $(".hi-delcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 198
        }), $(".hi-hydcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 370
        }), $(".hi-kolcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 200
        }), $(".hi-mohcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 200
        }), $(".hi-mumcontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 390
        }), $(".hi-noicontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 370
        }), $(".hi-tricontact").colorbox({
            iframe: !0,
            innerWidth: 400,
            innerHeight: 306
        }), $(".video").colorbox({
            iframe: !0,
            innerWidth: 680,
            innerHeight: 555
        }), $(".fdv").colorbox({
            iframe: !0,
            innerWidth: 450,
            innerHeight: 400
        }), $(".gallery").colorbox({
            rel: "gallery"
        }), $(".av").colorbox({
            iframe: !0,
            innerWidth: 807,
            innerHeight: 500
        }), $(".mail").colorbox({
            iframe: !0,
            innerWidth: 600,
            innerHeight: 306
        }), $("#click").click(function() {
            return $("#click").css({
                "background-color": "#f00",
                color: "#fff",
                cursor: "inherit"
            }).text("Open this window again and this message will still be here."), !1
        })
    }),
    function(e, t, i) {
        function n(i, n, o) {
            var r = t.createElement(i);
            return n && (r.id = Z + n), o && (r.style.cssText = o), e(r)
        }

        function o() {
            return i.innerHeight ? i.innerHeight : e(i).height()
        }

        function r(t, i) {
            i !== Object(i) && (i = {}), this.cache = {}, this.el = t, this.value = function(t) {
                var n;
                return void 0 === this.cache[t] && (n = e(this.el).attr("data-cbox-" + t), void 0 !== n ? this.cache[t] = n : void 0 !== i[t] ? this.cache[t] = i[t] : void 0 !== X[t] && (this.cache[t] = X[t])), this.cache[t]
            }, this.get = function(t) {
                var i = this.value(t);
                return e.isFunction(i) ? i.call(this.el, this) : i
            }
        }

        function h(e) {
            var t = C.length,
                i = (z + e) % t;
            return 0 > i ? t + i : i
        }

        function a(e, t) {
            return Math.round((/%/.test(e) ? ("x" === t ? k.width() : o()) / 100 : 1) * parseInt(e, 10))
        }

        function c(e, t) {
            return e.get("photo") || e.get("photoRegex").test(t)
        }

        function l(e, t) {
            return e.get("retinaUrl") && i.devicePixelRatio > 1 ? t.replace(e.get("photoRegex"), e.get("retinaSuffix")) : t
        }

        function s(e) {
            "contains" in v[0] && !v[0].contains(e.target) && e.target !== x[0] && (e.stopPropagation(), v.focus())
        }

        function d(e) {
            d.str !== e && (v.add(x).removeClass(d.str).addClass(e), d.str = e)
        }

        function g(t) {
            z = 0, t && t !== !1 && "nofollow" !== t ? (C = e("." + ee).filter(function() {
                var i = e.data(this, Y),
                    n = new r(this, i);
                return n.get("rel") === t
            }), z = C.index(B.el), -1 === z && (C = C.add(B.el), z = C.length - 1)) : C = e(B.el)
        }

        function f(i) {
            e(t).trigger(i), ae.triggerHandler(i)
        }

        function u(i) {
            var o;
            if (!G) {
                if (o = e(i).data(Y), B = new r(i, o), g(B.get("rel")), !U) {
                    U = q = !0, d(B.get("className")), v.css({
                        visibility: "hidden",
                        display: "block",
                        opacity: ""
                    }), E = n(ce, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), y.css({
                        width: "",
                        height: ""
                    }).append(E), _ = H.height() + T.height() + y.outerHeight(!0) - y.height(), j = W.width() + $.width() + y.outerWidth(!0) - y.width(), D = E.outerHeight(!0), N = E.outerWidth(!0);
                    var h = a(B.get("initialWidth"), "x"),
                        c = a(B.get("initialHeight"), "y"),
                        l = B.get("maxWidth"),
                        u = B.get("maxHeight");
                    B.w = (l !== !1 ? Math.min(h, a(l, "x")) : h) - N - j, B.h = (u !== !1 ? Math.min(c, a(u, "y")) : c) - D - _, E.css({
                        width: "",
                        height: B.h
                    }), J.position(), f(te), B.get("onOpen"), P.add(M).hide(), v.focus(), B.get("trapFocus") && t.addEventListener && (t.addEventListener("focus", s, !0), ae.one(re, function() {
                        t.removeEventListener("focus", s, !0)
                    })), B.get("returnFocus") && ae.one(re, function() {
                        e(B.el).focus()
                    })
                }
                var p = parseFloat(B.get("opacity"));
                x.css({
                    opacity: p === p ? p : "",
                    cursor: B.get("overlayClose") ? "pointer" : "",
                    visibility: "visible"
                }).show(), B.get("closeButton") ? O.html(B.get("close")).appendTo(y) : O.appendTo("<div/>"), w()
            }
        }

        function p() {
            v || (V = !1, k = e(i), v = n(ce).attr({
                id: Y,
                "class": e.support.opacity === !1 ? Z + "IE" : "",
                role: "dialog",
                tabindex: "-1"
            }).hide(), x = n(ce, "Overlay").hide(), L = e([n(ce, "LoadingOverlay")[0], n(ce, "LoadingGraphic")[0]]), b = n(ce, "Wrapper"), y = n(ce, "Content").append(M = n(ce, "Title"), S = n(ce, "Current"), K = e('<button type="button"/>').attr({
                id: Z + "Previous"
            }), R = e('<button type="button"/>').attr({
                id: Z + "Next"
            }), F = n("button", "Slideshow"), L), O = e('<button type="button"/>').attr({
                id: Z + "Close"
            }), b.append(n(ce).append(n(ce, "TopLeft"), H = n(ce, "TopCenter"), n(ce, "TopRight")), n(ce, !1, "clear:left").append(W = n(ce, "MiddleLeft"), y, $ = n(ce, "MiddleRight")), n(ce, !1, "clear:left").append(n(ce, "BottomLeft"), T = n(ce, "BottomCenter"), n(ce, "BottomRight"))).find("div div").css({
                "float": "left"
            }), I = n(ce, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), P = R.add(K).add(S).add(F)), t.body && !v.parent().length && e(t.body).append(x, v.append(b, I))
        }

        function m() {
            function i(e) {
                e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), u(this))
            }
            return v ? (V || (V = !0, R.click(function() {
                J.next()
            }), K.click(function() {
                J.prev()
            }), O.click(function() {
                J.close()
            }), x.click(function() {
                B.get("overlayClose") && J.close()
            }), e(t).bind("keydown." + Z, function(e) {
                var t = e.keyCode;
                U && B.get("escKey") && 27 === t && (e.preventDefault(), J.close()), U && B.get("arrowKey") && C[1] && !e.altKey && (37 === t ? (e.preventDefault(), K.click()) : 39 === t && (e.preventDefault(), R.click()))
            }), e.isFunction(e.fn.on) ? e(t).on("click." + Z, "." + ee, i) : e("." + ee).live("click." + Z, i)), !0) : !1
        }

        function w() {
            var t, o, r, h = J.prep,
                s = ++le;
            if (q = !0, A = !1, f(he), f(ie), B.get("onLoad"), B.h = B.get("height") ? a(B.get("height"), "y") - D - _ : B.get("innerHeight") && a(B.get("innerHeight"), "y"), B.w = B.get("width") ? a(B.get("width"), "x") - N - j : B.get("innerWidth") && a(B.get("innerWidth"), "x"), B.mw = B.w, B.mh = B.h, B.get("maxWidth") && (B.mw = a(B.get("maxWidth"), "x") - N - j, B.mw = B.w && B.w < B.mw ? B.w : B.mw), B.get("maxHeight") && (B.mh = a(B.get("maxHeight"), "y") - D - _, B.mh = B.h && B.h < B.mh ? B.h : B.mh), t = B.get("href"), Q = setTimeout(function() {
                    L.show()
                }, 100), B.get("inline")) {
                var d = e(t);
                r = e("<div>").hide().insertBefore(d), ae.one(he, function() {
                    r.replaceWith(d)
                }), h(d)
            } else B.get("iframe") ? h(" ") : B.get("html") ? h(B.get("html")) : c(B, t) ? (t = l(B, t), A = B.get("createImg"), e(A).addClass(Z + "Photo").bind("error." + Z, function() {
                h(n(ce, "Error").html(B.get("imgError")))
            }).one("load", function() {
                s === le && setTimeout(function() {
                    var t;
                    B.get("retinaImage") && i.devicePixelRatio > 1 && (A.height = A.height / i.devicePixelRatio, A.width = A.width / i.devicePixelRatio), B.get("scalePhotos") && (o = function() {
                        A.height -= A.height * t, A.width -= A.width * t
                    }, B.mw && A.width > B.mw && (t = (A.width - B.mw) / A.width, o()), B.mh && A.height > B.mh && (t = (A.height - B.mh) / A.height, o())), B.h && (A.style.marginTop = Math.max(B.mh - A.height, 0) / 2 + "px"), C[1] && (B.get("loop") || C[z + 1]) && (A.style.cursor = "pointer", e(A).bind("click." + Z, function() {
                        J.next()
                    })), A.style.width = A.width + "px", A.style.height = A.height + "px", h(A)
                }, 1)
            }), A.src = t) : t && I.load(t, B.get("data"), function(t, i) {
                s === le && h("error" === i ? n(ce, "Error").html(B.get("xhrError")) : e(this).contents())
            })
        }
        var x, v, b, y, H, W, $, T, C, k, E, I, L, M, S, F, R, K, O, P, B, _, j, D, N, z, A, U, q, G, Q, J, V, X = {
                html: !1,
                photo: !1,
                iframe: !1,
                inline: !1,
                transition: "elastic",
                speed: 300,
                fadeOut: 300,
                width: !1,
                initialWidth: "600",
                innerWidth: !1,
                maxWidth: !1,
                height: !1,
                initialHeight: "450",
                innerHeight: !1,
                maxHeight: !1,
                scalePhotos: !0,
                scrolling: !0,
                opacity: .9,
                preloading: !0,
                className: !1,
                overlayClose: !0,
                escKey: !0,
                arrowKey: !0,
                top: !1,
                bottom: !1,
                left: !1,
                right: !1,
                fixed: !1,
                data: void 0,
                closeButton: !0,
                fastIframe: !0,
                open: !1,
                reposition: !0,
                loop: !0,
                slideshow: !1,
                slideshowAuto: !0,
                slideshowSpeed: 2500,
                slideshowStart: "start slideshow",
                slideshowStop: "stop slideshow",
                photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
                retinaImage: !1,
                retinaUrl: !1,
                retinaSuffix: "@2x.$1",
                current: "image {current} of {total}",
                previous: "previous",
                next: "next",
                close: "close",
                xhrError: "This content failed to load.",
                imgError: "This image failed to load.",
                returnFocus: !0,
                trapFocus: !0,
                onOpen: !1,
                onLoad: !1,
                onComplete: !1,
                onCleanup: !1,
                onClosed: !1,
                rel: function() {
                    return this.rel
                },
                href: function() {
                    return e(this).attr("href")
                },
                title: function() {
                    return this.title
                },
                createImg: function() {
                    var t = new Image,
                        i = e(this).data("cbox-img-attrs");
                    return "object" == typeof i && e.each(i, function(e, i) {
                        t[e] = i
                    }), t
                },
                createIframe: function() {
                    var i = t.createElement("iframe"),
                        n = e(this).data("cbox-iframe-attrs");
                    return "object" == typeof n && e.each(n, function(e, t) {
                        i[e] = t
                    }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullScreen = !0, i
                }
            },
            Y = "colorbox",
            Z = "cbox",
            ee = Z + "Element",
            te = Z + "_open",
            ie = Z + "_load",
            ne = Z + "_complete",
            oe = Z + "_cleanup",
            re = Z + "_closed",
            he = Z + "_purge",
            ae = e("<a/>"),
            ce = "div",
            le = 0,
            se = {},
            de = function() {
                function e() {
                    clearTimeout(h)
                }

                function t() {
                    (B.get("loop") || C[z + 1]) && (e(), h = setTimeout(J.next, B.get("slideshowSpeed")))
                }

                function i() {
                    F.html(B.get("slideshowStop")).unbind(c).one(c, n), ae.bind(ne, t).bind(ie, e), v.removeClass(a + "off").addClass(a + "on")
                }

                function n() {
                    e(), ae.unbind(ne, t).unbind(ie, e), F.html(B.get("slideshowStart")).unbind(c).one(c, function() {
                        J.next(), i()
                    }), v.removeClass(a + "on").addClass(a + "off")
                }

                function o() {
                    r = !1, F.hide(), e(), ae.unbind(ne, t).unbind(ie, e), v.removeClass(a + "off " + a + "on")
                }
                var r, h, a = Z + "Slideshow_",
                    c = "click." + Z;
                return function() {
                    r ? B.get("slideshow") || (ae.unbind(oe, o), o()) : B.get("slideshow") && C[1] && (r = !0, ae.one(oe, o), B.get("slideshowAuto") ? i() : n(), F.show())
                }
            }();
        e[Y] || (e(p), J = e.fn[Y] = e[Y] = function(t, i) {
            var n, o = this;
            return t = t || {}, e.isFunction(o) && (o = e("<a/>"), t.open = !0), o[0] ? (p(), m() && (i && (t.onComplete = i), o.each(function() {
                var i = e.data(this, Y) || {};
                e.data(this, Y, e.extend(i, t))
            }).addClass(ee), n = new r(o[0], t), n.get("open") && u(o[0])), o) : o
        }, J.position = function(t, i) {
            function n() {
                H[0].style.width = T[0].style.width = y[0].style.width = parseInt(v[0].style.width, 10) - j + "px", y[0].style.height = W[0].style.height = $[0].style.height = parseInt(v[0].style.height, 10) - _ + "px"
            }
            var r, h, c, l = 0,
                s = 0,
                d = v.offset();
            if (k.unbind("resize." + Z), v.css({
                    top: -9e4,
                    left: -9e4
                }), h = k.scrollTop(), c = k.scrollLeft(), B.get("fixed") ? (d.top -= h, d.left -= c, v.css({
                    position: "fixed"
                })) : (l = h, s = c, v.css({
                    position: "absolute"
                })), s += B.get("right") !== !1 ? Math.max(k.width() - B.w - N - j - a(B.get("right"), "x"), 0) : B.get("left") !== !1 ? a(B.get("left"), "x") : Math.round(Math.max(k.width() - B.w - N - j, 0) / 2), l += B.get("bottom") !== !1 ? Math.max(o() - B.h - D - _ - a(B.get("bottom"), "y"), 0) : B.get("top") !== !1 ? a(B.get("top"), "y") : Math.round(Math.max(o() - B.h - D - _, 0) / 2), v.css({
                    top: d.top,
                    left: d.left,
                    visibility: "visible"
                }), b[0].style.width = b[0].style.height = "9999px", r = {
                    width: B.w + N + j,
                    height: B.h + D + _,
                    top: l,
                    left: s
                }, t) {
                var g = 0;
                e.each(r, function(e) {
                    return r[e] !== se[e] ? void(g = t) : void 0
                }), t = g
            }
            se = r, t || v.css(r), v.dequeue().animate(r, {
                duration: t || 0,
                complete: function() {
                    n(), q = !1, b[0].style.width = B.w + N + j + "px", b[0].style.height = B.h + D + _ + "px", B.get("reposition") && setTimeout(function() {
                        k.bind("resize." + Z, J.position)
                    }, 1), e.isFunction(i) && i()
                },
                step: n
            })
        }, J.resize = function(e) {
            var t;
            U && (e = e || {}, e.width && (B.w = a(e.width, "x") - N - j), e.innerWidth && (B.w = a(e.innerWidth, "x")), E.css({
                width: B.w
            }), e.height && (B.h = a(e.height, "y") - D - _), e.innerHeight && (B.h = a(e.innerHeight, "y")), e.innerHeight || e.height || (t = E.scrollTop(), E.css({
                height: "auto"
            }), B.h = E.height()), E.css({
                height: B.h
            }), t && E.scrollTop(t), J.position("none" === B.get("transition") ? 0 : B.get("speed")))
        }, J.prep = function(i) {
            function o() {
                return B.w = B.w || E.width(), B.w = B.mw && B.mw < B.w ? B.mw : B.w, B.w
            }

            function a() {
                return B.h = B.h || E.height(), B.h = B.mh && B.mh < B.h ? B.mh : B.h, B.h
            }
            if (U) {
                var s, g = "none" === B.get("transition") ? 0 : B.get("speed");
                E.remove(), E = n(ce, "LoadedContent").append(i), E.hide().appendTo(I.show()).css({
                    width: o(),
                    overflow: B.get("scrolling") ? "auto" : "hidden"
                }).css({
                    height: a()
                }).prependTo(y), I.hide(), e(A).css({
                    "float": "none"
                }), d(B.get("className")), s = function() {
                    function i() {
                        e.support.opacity === !1 && v[0].style.removeAttribute("filter")
                    }
                    var n, o, a = C.length;
                    U && (o = function() {
                        clearTimeout(Q), L.hide(), f(ne), B.get("onComplete")
                    }, M.html(B.get("title")).show(), E.show(), a > 1 ? ("string" == typeof B.get("current") && S.html(B.get("current").replace("{current}", z + 1).replace("{total}", a)).show(), R[B.get("loop") || a - 1 > z ? "show" : "hide"]().html(B.get("next")), K[B.get("loop") || z ? "show" : "hide"]().html(B.get("previous")), de(), B.get("preloading") && e.each([h(-1), h(1)], function() {
                        var i, n = C[this],
                            o = new r(n, e.data(n, Y)),
                            h = o.get("href");
                        h && c(o, h) && (h = l(o, h), i = t.createElement("img"), i.src = h)
                    })) : P.hide(), B.get("iframe") ? (n = B.get("createIframe"), B.get("scrolling") || (n.scrolling = "no"), e(n).attr({
                        src: B.get("href"),
                        "class": Z + "Iframe"
                    }).one("load", o).appendTo(E), ae.one(he, function() {
                        n.src = "//about:blank"
                    }), B.get("fastIframe") && e(n).trigger("load")) : o(), "fade" === B.get("transition") ? v.fadeTo(g, 1, i) : i())
                }, "fade" === B.get("transition") ? v.fadeTo(g, 0, function() {
                    J.position(0, s)
                }) : J.position(g, s)
            }
        }, J.next = function() {
            !q && C[1] && (B.get("loop") || C[z + 1]) && (z = h(1), u(C[z]))
        }, J.prev = function() {
            !q && C[1] && (B.get("loop") || z) && (z = h(-1), u(C[z]))
        }, J.close = function() {
            U && !G && (G = !0, U = !1, f(oe), B.get("onCleanup"), k.unbind("." + Z), x.fadeTo(B.get("fadeOut") || 0, 0), v.stop().fadeTo(B.get("fadeOut") || 0, 0, function() {
                v.hide(), x.hide(), f(he), E.remove(), setTimeout(function() {
                    G = !1, f(re), B.get("onClosed")
                }, 1)
            }))
        }, J.remove = function() {
            v && (v.stop(), e[Y].close(), v.stop(!1, !0).remove(), x.remove(), G = !1, v = null, e("." + ee).removeData(Y).removeClass(ee), e(t).unbind("click." + Z).unbind("keydown." + Z))
        }, J.element = function() {
            return e(B.el)
        }, J.settings = X)
    }(jQuery, document, window);
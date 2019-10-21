var e, t;
e = "undefined" != typeof window ? window : this, t = function(C, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var n = [],
        k = C.document,
        c = n.slice,
        g = n.concat,
        a = n.push,
        i = n.indexOf,
        r = {},
        o = r.toString,
        h = r.hasOwnProperty,
        m = {},
        s = "2.2.5-pre b14ce54334a568eaaa107be4c441660a57c3db24",
        S = function(e, t) {
            return new S.fn.init(e, t)
        },
        l = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^-ms-/,
        f = /-([\da-z])/gi;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = S.type(e);
        return "function" !== n && !S.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: s,
        constructor: S,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, S.extend = S.fn.extend = function(e) {
        var t, n, r, i, o, s, a = e || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" == typeof a || S.isFunction(a) || (a = {}), l === u && (a = this, l--); l < u; l++)
            if (null != (t = arguments[l]))
                for (n in t) r = a[n], a !== (i = t[n]) && (c && i && (S.isPlainObject(i) || (o = S.isArray(i))) ? (s = o ? (o = !1, r && S.isArray(r) ? r : []) : r && S.isPlainObject(r) ? r : {}, a[n] = S.extend(c, s, i)) : void 0 !== i && (a[n] = i));
        return a
    }, S.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === S.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !S.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== S.type(e) || e.nodeType || S.isWindow(e)) return !1;
            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || h.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = S.trim(e)) && (1 === e.indexOf("use strict") ? ((t = k.createElement("script")).text = e, k.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(u, "ms-").replace(f, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(l, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), S.isFunction(e)) return r = c.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || S.guid++, i
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = n[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        r["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }

        function i() {
            T()
        }
        var e, h, x, o, s, g, d, m, w, l, u, T, C, a, k, v, c, p, y, S = "sizzle" + 1 * new Date,
            b = n.document,
            A = 0,
            r = 0,
            E = ie(),
            N = ie(),
            q = ie(),
            D = function(e, t) {
                return e === t && (u = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            L = t.pop,
            H = t.push,
            F = t.push,
            O = t.slice,
            R = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            _ = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            $ = "\\[" + _ + "*(" + M + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + _ + "*\\]",
            W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            I = new RegExp(_ + "+", "g"),
            B = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
            z = new RegExp("^" + _ + "*," + _ + "*"),
            X = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
            U = new RegExp("=" + _ + "*([^\\]'\"]*?)" + _ + "*\\]", "g"),
            V = new RegExp(W),
            Y = new RegExp("^" + M + "$"),
            G = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig");
        try {
            F.apply(t = O.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
            F = {
                apply: t.length ? function(e, t) {
                    H.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, n, r) {
            var i, o, s, a, l, u, c, f, d = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : b) !== C && T(t), t = t || C, k)) {
                if (11 !== p && (u = Z.exec(e)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (d && (s = d.getElementById(i)) && y(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (u[2]) return F.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && h.getElementsByClassName && t.getElementsByClassName) return F.apply(n, t.getElementsByClassName(i)), n
                    } if (h.qsa && !q[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) d = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, "\\$&") : t.setAttribute("id", a = S), o = (c = g(e)).length, l = Y.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = l + " " + he(c[o]);
                        f = c.join(","), d = ee.test(e) && de(t.parentNode) || t
                    }
                    if (f) try {
                        return F.apply(n, d.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        a === S && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(B, "$1"), t, n, r)
        }

        function ie() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function oe(e) {
            return e[S] = !0, e
        }

        function se(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ae(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function le(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ue(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ce(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function fe(s) {
            return oe(function(o) {
                return o = +o, oe(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function de(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = re.support = {}, s = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = re.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : b;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, k = !s(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), h.attributes = se(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = se(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = K.test(C.getElementsByClassName), h.getById = se(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), h.getById ? (x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, x.filter.ID = function(e) {
                    var t = e.replace(ne, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function(e) {
                    var n = e.replace(ne, f);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), x.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, x.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e)
                }, c = [], v = [], (h.qsa = K.test(C.querySelectorAll)) && (se(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + _ + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
                }), se(function(e) {
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + _ + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (h.matchesSelector = K.test(p = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && se(function(e) {
                    h.disconnectedMatch = p.call(e, "div"), p.call(e, "[s!='']:x"), c.push("!=", W)
                }), v = v.length && new RegExp(v.join("|")), c = c.length && new RegExp(c.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === b && y(b, e) ? -1 : t === C || t.ownerDocument === b && y(b, t) ? 1 : l ? R(l, e) - R(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : l ? R(l, e) - R(l, t) : 0;
                    if (i === o) return le(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? le(s[r], a[r]) : s[r] === b ? -1 : a[r] === b ? 1 : 0
                }), C
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(U, "='$1']"), h.matchesSelector && k && !q[t + " "] && (!c || !c.test(t)) && (!v || !v.test(t))) try {
                    var n = p.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < re(t, C, null, [e]).length
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== r ? r : h.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(D), u) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return l = null, e
            }, o = re.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (x = re.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && E(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = re.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(I, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, s, a, l, u = v != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (s = e; s = s[u];)
                                            if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        l = u = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && d) {
                                    for (p = (a = (r = (i = (o = (s = c)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === A && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (p = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++p && s === e) {
                                            i[h] = [A, a, p];
                                            break
                                        }
                                } else if (d && (p = a = (r = (i = (o = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === A && r[1]), !1 === p)
                                    for (;
                                        (s = ++a && s && s[u] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++p || (d && ((i = (o = s[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [A, p]), s !== e)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[S] ? s(o) : 1 < s.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                            for (var n, r = s(e, o), i = r.length; i--;) e[n = R(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var r = [],
                            i = [],
                            a = d(e.replace(B, "$1"));
                        return a[S] ? oe(function(e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: oe(function(t) {
                        return t = t.replace(ne, f),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function(n) {
                        return Y.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ne, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: fe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: fe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = ue(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = ce(e);

        function pe() {}

        function he(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ge(a, e, t) {
            var l = e.dir,
                u = t && "parentNode" === l,
                c = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || u) return a(e, t, n)
            } : function(e, t, n) {
                var r, i, o, s = [A, c];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || u) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || u) {
                            if ((r = (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[l]) && r[0] === A && r[1] === c) return s[2] = r[2];
                            if ((i[l] = s)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function me(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function ve(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
            return s
        }

        function ye(p, h, g, m, v, e) {
            return m && !m[S] && (m = ye(m)), v && !v[S] && (v = ye(v, e)), oe(function(e, t, n, r) {
                var i, o, s, a = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !p || !e && h ? c : ve(c, a, p, n, r),
                    d = g ? v || (e ? p : u || m) ? [] : t : f;
                if (g && g(f, d, n, r), m)
                    for (i = ve(d, l), m(i, [], n, r), o = i.length; o--;)(s = i[o]) && (d[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [], o = d.length; o--;)(s = d[o]) && i.push(f[o] = s);
                            v(null, d = [], i, r)
                        }
                        for (o = d.length; o--;)(s = d[o]) && -1 < (i = v ? R(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else d = ve(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, r) : F.apply(t, d)
            })
        }

        function be(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = ge(function(e) {
                    return e === i
                }, s, !0), u = ge(function(e) {
                    return -1 < R(i, e)
                }, s, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                    return i = null, r
                }]; a < r; a++)
                if (t = x.relative[e[a].type]) c = [ge(me(c), t)];
                else {
                    if ((t = x.filter[e[a].type].apply(null, e[a].matches))[S]) {
                        for (n = ++a; n < r && !x.relative[e[n].type]; n++);
                        return ye(1 < a && me(c), 1 < a && he(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, a < n && be(e.slice(a, n)), n < r && be(e = e.slice(n)), n < r && he(e))
                    }
                    c.push(t)
                } return me(c)
        }
        return pe.prototype = x.filters = x.pseudos, x.setFilters = new pe, g = re.tokenize = function(e, t) {
            var n, r, i, o, s, a, l, u = N[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, a = [], l = x.preFilter; s;) {
                for (o in n && !(r = z.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = X.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), s = s.slice(n.length)), x.filter) !(r = G[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : N(e, a).slice(0)
        }, d = re.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = q[e + " "];
            if (!o) {
                for (t || (t = g(e)), n = t.length; n--;)(o = be(t[n]))[S] ? r.push(o) : i.push(o);
                (o = q(e, function(m, v) {
                    function e(e, t, n, r, i) {
                        var o, s, a, l = 0,
                            u = "0",
                            c = e && [],
                            f = [],
                            d = w,
                            p = e || b && x.find.TAG("*", i),
                            h = A += null == d ? 1 : Math.random() || .1,
                            g = p.length;
                        for (i && (w = t === C || t || i); u !== g && null != (o = p[u]); u++) {
                            if (b && o) {
                                for (s = 0, t || o.ownerDocument === C || (T(o), n = !k); a = m[s++];)
                                    if (a(o, t || C, n)) {
                                        r.push(o);
                                        break
                                    } i && (A = h)
                            }
                            y && ((o = !a && o) && l--, e && c.push(o))
                        }
                        if (l += u, y && u !== l) {
                            for (s = 0; a = v[s++];) a(c, f, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; u--;) c[u] || f[u] || (f[u] = L.call(r));
                                f = ve(f)
                            }
                            F.apply(r, f), i && !e && 0 < f.length && 1 < l + v.length && re.uniqueSort(r)
                        }
                        return i && (A = h, w = d), c
                    }
                    var y = 0 < v.length,
                        b = 0 < m.length;
                    return y ? oe(e) : e
                }(i, r))).selector = e
            }
            return o
        }, m = re.select = function(e, t, n, r) {
            var i, o, s, a, l, u = "function" == typeof e && e,
                c = !r && g(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && k && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(ne, f), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = G.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (r = l(s.matches[0].replace(ne, f), ee.test(o[0].type) && de(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && he(o))) return F.apply(n, r), n;
                        break
                    }
            }
            return (u || d(e, c))(r, t, !k, n, !t || ee.test(e) && de(t.parentNode) || t), n
        }, h.sortStable = S.split("").sort(D).join("") === S, h.detectDuplicates = !!u, T(), h.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), se(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ae("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && se(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ae("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), se(function(e) {
            return null == e.getAttribute("disabled")
        }) || ae(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), re
    }(C);
    S.find = p, S.expr = p.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = p.uniqueSort, S.text = p.getText, S.isXMLDoc = p.isXML, S.contains = p.contains;

    function v(e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && S(e).is(n)) break;
                r.push(e)
            } return r
    }

    function y(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var b = S.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function T(e, n, r) {
        if (S.isFunction(n)) return S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return S.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (w.test(n)) return S.filter(n, e, r);
            n = S.filter(n, e)
        }
        return S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        })
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) S.find(e, i[t], r);
            return (r = this.pushStack(1 < n ? S.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && b.test(e) ? S(e) : e || [], !1).length
        }
    });
    var A, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || A, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : S.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), S.makeArray(e, this));
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : E.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), x.test(r[1]) && S.isPlainObject(t))
                for (r in t) S.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = k.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = k, this.selector = e, this
    }).prototype = S.fn, A = S(k);
    var N = /^(?:parents|prev(?:Until|All))/,
        q = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = b.test(e) || "string" != typeof e ? S(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return v(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v(e, "parentNode", n)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return v(e, "nextSibling")
        },
        prevAll: function(e) {
            return v(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v(e, "previousSibling", n)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || S.merge([], e.childNodes)
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (q[r] || S.uniqueSort(n), N.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var j, L = /\S+/g;

    function H() {
        k.removeEventListener("DOMContentLoaded", H), C.removeEventListener("load", H), S.ready()
    }
    S.Callbacks = function(r) {
        r = "string" == typeof r ? function(e) {
            var n = {};
            return S.each(e.match(L) || [], function(e, t) {
                n[t] = !0
            }), n
        }(r) : S.extend({}, r);

        function n() {
            for (o = r.once, t = i = !0; a.length; l = -1)
                for (e = a.shift(); ++l < s.length;) !1 === s[l].apply(e[0], e[1]) && r.stopOnFalse && (l = s.length, e = !1);
            r.memory || (e = !1), i = !1, o && (s = e ? [] : "")
        }
        var i, e, t, o, s = [],
            a = [],
            l = -1,
            u = {
                add: function() {
                    return s && (e && !i && (l = s.length - 1, a.push(e)), function n(e) {
                        S.each(e, function(e, t) {
                            S.isFunction(t) ? r.unique && u.has(t) || s.push(t) : t && t.length && "string" !== S.type(t) && n(t)
                        })
                    }(arguments), e && !i && n()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = S.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = e = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], e || (s = e = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), i || n()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return u
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["resolve", "done", S.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", S.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = S.isFunction(i[e]) && i[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && S.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, S.each(o, function(e, t) {
                var n = t[2],
                    r = t[3];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t, n, r) {
                return function(e) {
                    n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u.notifyWith(n, r) : --l || u.resolveWith(n, r)
                }
            }
            var i, n, r, o = 0,
                s = c.call(arguments),
                a = s.length,
                l = 1 !== a || e && S.isFunction(e.promise) ? a : 0,
                u = 1 === l ? e : S.Deferred();
            if (1 < a)
                for (i = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) s[o] && S.isFunction(s[o].promise) ? s[o].promise().progress(t(o, n, i)).done(t(o, r, s)).fail(u.reject) : --l;
            return l || u.resolveWith(r, s), u.promise()
        }
    }), S.fn.ready = function(e) {
        return S.ready.promise().done(e), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? S.readyWait++ : S.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait || (j.resolveWith(k, [S]), S.fn.triggerHandler && (S(k).triggerHandler("ready"), S(k).off("ready"))))
        }
    }), S.ready.promise = function(e) {
        return j || (j = S.Deferred(), "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", H), C.addEventListener("load", H))), j.promise(e)
    }, S.ready.promise();

    function F(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    var O = function(e, t, n, r, i, o, s) {
        var a = 0,
            l = e.length,
            u = null == n;
        if ("object" === S.type(n))
            for (a in i = !0, n) O(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, S.isFunction(r) || (s = !0), u && (t = s ? (t.call(e, r), null) : (u = t, function(e, t, n) {
                return u.call(S(e), n)
            })), t))
            for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
    };

    function R() {
        this.expando = S.expando + R.uid++
    }
    R.uid = 1, R.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!F(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, S.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    n = (r = S.isArray(t) ? t.concat(t.map(S.camelCase)) : (i = S.camelCase(t), t in o ? [t, i] : (r = i) in o ? [r] : r.match(L) || [])).length;
                    for (; n--;) delete o[r[n]]
                }
                void 0 !== t && !S.isEmptyObject(o) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var P = new R,
        _ = new R,
        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $ = /[A-Z]/g;

    function W(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace($, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? S.parseJSON(n) : n)
                } catch (e) {}
                _.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return _.hasData(e) || P.hasData(e)
        },
        data: function(e, t, n) {
            return _.access(e, t, n)
        },
        removeData: function(e, t) {
            _.remove(e, t)
        },
        _data: function(e, t, n) {
            return P.access(e, t, n)
        },
        _removeData: function(e, t) {
            P.remove(e, t)
        }
    }), S.fn.extend({
        data: function(r, e) {
            var t, n, i, o = this[0],
                s = o && o.attributes;
            if (void 0 !== r) return "object" == typeof r ? this.each(function() {
                _.set(this, r)
            }) : O(this, function(t) {
                var e, n;
                if (o && void 0 === t) {
                    if (void 0 !== (e = _.get(o, r) || _.get(o, r.replace($, "-$&").toLowerCase()))) return e;
                    if (n = S.camelCase(r), void 0 !== (e = _.get(o, n))) return e;
                    if (void 0 !== (e = W(o, n, void 0))) return e
                } else n = S.camelCase(r), this.each(function() {
                    var e = _.get(this, n);
                    _.set(this, n, t), -1 < r.indexOf("-") && void 0 !== e && _.set(this, r, t)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = _.get(o), 1 === o.nodeType && !P.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = S.camelCase(n.slice(5)), W(o, n, i[n])));
                P.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                _.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = P.get(e, t), n && (!r || S.isArray(n) ? r = P.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return P.get(e, n) || P.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    P.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1,
                o = S.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(r = P.get(s[a], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(t)
        }
    });

    function I(e, t) {
        return e = t || e, "none" === S.css(e, "display") || !S.contains(e.ownerDocument, e)
    }
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        z = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
        X = ["Top", "Right", "Bottom", "Left"];

    function U(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = (S.cssNumber[t] || "px" !== u && +l) && z.exec(S.css(e, t));
        if (c && c[3] !== u)
            for (u = u || c[3], n = n || [], c = +l || 1; c /= o = o || ".5", S.style(e, t, c + u), o !== (o = a() / l) && 1 !== o && --s;);
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var V = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        G = /^$|\/(?:java|ecma)script/i,
        J = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Q(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && S.nodeName(e, t) ? S.merge([e], n) : n
    }

    function K(e, t) {
        for (var n = 0, r = e.length; n < r; n++) P.set(e[n], "globalEval", !t || P.get(t[n], "globalEval"))
    }
    J.optgroup = J.option, J.tbody = J.tfoot = J.colgroup = J.caption = J.thead, J.th = J.td;
    var Z, ee, te = /<|&#?\w+;/;

    function ne(e, t, n, r, i) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === S.type(o)) S.merge(d, o.nodeType ? [o] : o);
                else if (te.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Y.exec(o) || ["", ""])[1].toLowerCase(), l = J[a] || J._default, s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            S.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (u = S.contains(o.ownerDocument, o), s = Q(f.appendChild(o), "script"), u && K(s), n)
            for (c = 0; o = s[c++];) G.test(o.type || "") && n.push(o);
        return f
    }
    Z = k.createDocumentFragment().appendChild(k.createElement("div")), (ee = k.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), m.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var re = /^key/,
        ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        oe = /^([^.]*)(?:\.(.+)|)/;

    function se() {
        return !0
    }

    function ae() {
        return !1
    }

    function le() {
        try {
            return k.activeElement
        } catch (e) {}
    }

    function ue(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) ue(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ae;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return S().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, l, u, c, f, d, p, h, g, m = P.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = S.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(L) || [""]).length; u--;) p = g = (a = oe.exec(e[u]) || [])[1], h = (a[2] || "").split(".").sort(), p && (f = S.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = S.event.special[p] || {}, c = S.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(p, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), S.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, l, u, c, f, d, p, h, g, m = P.hasData(e) && P.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(L) || [""]).length; u--;)
                    if (p = g = (a = oe.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = S.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || S.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) S.event.remove(e, p + t[u], n, r, !0);
                S.isEmptyObject(l) && P.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = S.event.fix(e);
            var t, n, r, i, o, s = [],
                a = c.call(arguments),
                l = (P.get(this, "events") || {})[e.type] || [],
                u = S.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (s = S.event.handlers.call(this, e, l), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || k).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[S.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = ie.test(i) ? this.mouseHooks : re.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new S.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = k), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== le() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === le() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && S.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return S.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        return this instanceof S.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se : ae) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || S.now(), void(this[S.expando] = !0)) : new S.Event(e, t)
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return ue(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ue(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each(function() {
                S.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        fe = /<script|<style|<link/i,
        de = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pe = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ge(e, t) {
        return S.nodeName(e, "table") && S.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ve(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ye(e, t) {
        var n, r, i, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (P.hasData(e) && (o = P.access(e), s = P.set(t, o), u = o.events))
                for (i in delete s.handle, s.events = {}, u)
                    for (n = 0, r = u[i].length; n < r; n++) S.event.add(t, i, u[i][n]);
            _.hasData(e) && (a = _.access(e), l = S.extend({}, a), _.set(t, l))
        }
    }

    function be(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, l, u, c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = S.isFunction(p);
        if (h || 1 < f && "string" == typeof p && !m.checkClone && de.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), be(t, r, i, o)
        });
        if (f && (t = (e = ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = S.map(Q(e, "script"), me)).length; c < f; c++) l = e, c !== d && (l = S.clone(l, !0, !0), a && S.merge(s, Q(l, "script"))), i.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, S.map(s, ve), c = 0; c < a; c++) l = s[c], G.test(l.type || "") && !P.access(l, "globalEval") && S.contains(u, l) && (l.src ? S._evalUrl && S._evalUrl(l.src) : S.globalEval(l.textContent.replace(he, "")))
        }
        return n
    }

    function xe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(Q(r)), r.parentNode && (n && S.contains(r.ownerDocument, r) && K(Q(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, l, u, c = e.cloneNode(!0),
                f = S.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = Q(c), r = 0, i = (o = Q(e)).length; r < i; r++) a = o[r], l = s[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && V.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || Q(e), s = s || Q(c), r = 0, i = o.length; r < i; r++) ye(o[r], s[r]);
                else ye(e, c);
            return 0 < (s = Q(c, "script")).length && K(s, !f && Q(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (F(n)) {
                    if (t = n[P.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[P.expando] = void 0
                    }
                    n[_.expando] && (n[_.expando] = void 0)
                }
        }
    }), S.fn.extend({
        domManip: be,
        detach: function(e) {
            return xe(this, e, !0)
        },
        remove: function(e) {
            return xe(this, e)
        },
        text: function(e) {
            return O(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return be(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return be(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(Q(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return O(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !fe.test(e) && !J[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(Q(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return be(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(Q(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[s](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var we, Te = {
        HTML: "block",
        BODY: "block"
    };

    function Ce(e, t) {
        var n = S(t.createElement(e)).appendTo(t.body),
            r = S.css(n[0], "display");
        return n.detach(), r
    }

    function ke(e) {
        var t = k,
            n = Te[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || S("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), we.detach()), Te[e] = n), n
    }

    function Se(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
    }
    var Ae, Ee, Ne, qe, De, je, Le = /^margin/,
        He = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Oe = k.documentElement;

    function Re() {
        je.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", je.innerHTML = "", Oe.appendChild(De);
        var e = C.getComputedStyle(je);
        Ae = "1%" !== e.top, qe = "2px" === e.marginLeft, Ee = "4px" === e.width, je.style.marginRight = "50%", Ne = "4px" === e.marginRight, Oe.removeChild(De)
    }

    function Pe(e, t, n) {
        var r, i, o, s, a = e.style;
        return "" !== (s = (n = n || Fe(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || S.contains(e.ownerDocument, e) || (s = S.style(e, t)), n && !m.pixelMarginRight() && He.test(s) && Le.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function _e(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    De = k.createElement("div"), (je = k.createElement("div")).style && (je.style.backgroundClip = "content-box", je.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === je.style.backgroundClip, De.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", De.appendChild(je), S.extend(m, {
        pixelPosition: function() {
            return Re(), Ae
        },
        boxSizingReliable: function() {
            return null == Ee && Re(), Ee
        },
        pixelMarginRight: function() {
            return null == Ee && Re(), Ne
        },
        reliableMarginLeft: function() {
            return null == Ee && Re(), qe
        },
        reliableMarginRight: function() {
            var e, t = je.appendChild(k.createElement("div"));
            return t.style.cssText = je.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", je.style.width = "1px", Oe.appendChild(De), e = !parseFloat(C.getComputedStyle(t).marginRight), Oe.removeChild(De), je.removeChild(t), e
        }
    }));
    var Me = /^(none|table(?!-c[ea]).+)/,
        $e = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        We = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ie = ["Webkit", "O", "Moz", "ms"],
        Be = k.createElement("div").style;

    function ze(e) {
        if (e in Be) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ie.length; n--;)
            if ((e = Ie[n] + t) in Be) return e
    }

    function Xe(e, t, n) {
        var r = z.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ue(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += S.css(e, n + X[o], !0, i)), r ? ("content" === n && (s -= S.css(e, "padding" + X[o], !0, i)), "margin" !== n && (s -= S.css(e, "border" + X[o] + "Width", !0, i))) : (s += S.css(e, "padding" + X[o], !0, i), "padding" !== n && (s += S.css(e, "border" + X[o] + "Width", !0, i)));
        return s
    }

    function Ve(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Fe(e),
            s = "border-box" === S.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Pe(e, t, o)) < 0 || null == i) && (i = e.style[t]), He.test(i)) return i;
            r = s && (m.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ue(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function Ye(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = P.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && I(r) && (o[s] = P.access(r, "olddisplay", ke(r.nodeName)))) : (i = I(r), "none" === n && i || P.set(r, "olddisplay", i ? n : S.css(r, "display"))));
        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function Ge(e, t, n, r, i) {
        return new Ge.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Pe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = S.camelCase(t),
                    l = e.style;
                return t = S.cssProps[a] || (S.cssProps[a] = ze(a) || a), s = S.cssHooks[t] || S.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = z.exec(n)) && i[1] && (n = U(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (S.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = S.camelCase(t);
            return t = S.cssProps[a] || (S.cssProps[a] = ze(a) || a), (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Pe(e, t, r)), "normal" === i && t in We && (i = We[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, s) {
        S.cssHooks[s] = {
            get: function(e, t, n) {
                if (t) return Me.test(S.css(e, "display")) && 0 === e.offsetWidth ? Se(e, $e, function() {
                    return Ve(e, s, n)
                }) : Ve(e, s, n)
            },
            set: function(e, t, n) {
                var r, i = n && Fe(e),
                    o = n && Ue(e, s, n, "border-box" === S.css(e, "boxSizing", !1, i), i);
                return o && (r = z.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = S.css(e, s)), Xe(0, t, o)
            }
        }
    }), S.cssHooks.marginLeft = _e(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - Se(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.cssHooks.marginRight = _e(m.reliableMarginRight, function(e, t) {
        if (t) return Se(e, {
            display: "inline-block"
        }, Pe, [e, "marginRight"])
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + X[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, Le.test(i) || (S.cssHooks[i + o].set = Xe)
    }), S.fn.extend({
        css: function(e, t) {
            return O(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (S.isArray(t)) {
                    for (r = Fe(e), i = t.length; s < i; s++) o[t[s]] = S.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return Ye(this, !0)
        },
        hide: function() {
            return Ye(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                I(this) ? S(this).show() : S(this).hide()
            })
        }
    }), ((S.Tween = Ge).prototype = {
        constructor: Ge,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
        }
    }).init.prototype = Ge.prototype, (Ge.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ge.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ge.prototype.init, S.fx.step = {};
    var Je, Qe, Ke, Ze, et, tt = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;

    function rt() {
        return C.setTimeout(function() {
            Je = void 0
        }), Je = S.now()
    }

    function it(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = X[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ot(e, t, n) {
        for (var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function st(o, e, t) {
        var n, s, r = 0,
            i = st.prefilters.length,
            a = S.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Je || rt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
                return a.notifyWith(o, [u, n, t]), n < 1 && i ? t : (a.resolveWith(o, [u]), !1)
            },
            u = a.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Je || rt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = S.camelCase(n)], o = e[n], S.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = S.cssHooks[r]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, u.opts.specialEasing); r < i; r++)
            if (n = st.prefilters[r].call(u, o, c, u.opts)) return S.isFunction(n.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = S.proxy(n.stop, n)), n;
        return S.map(c, ot, u), S.isFunction(u.opts.start) && u.opts.start.call(o, u), S.fx.timer(S.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    S.Animation = S.extend(st, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return U(n.elem, e, z.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = S.isFunction(e) ? (t = e, ["*"]) : e.match(L)).length; r < i; r++) n = e[r], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, s, a, l, u, c = this,
                f = {},
                d = t.style,
                p = t.nodeType && I(t),
                h = P.get(t, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, S.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (u = S.css(t, "display")) ? P.get(t, "olddisplay") || ke(t.nodeName) : u) && "none" === S.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", c.always(function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                })), e)
                if (i = e[r], tt.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        p = !0
                    }
                    f[r] = h && h[r] || S.style(t, r)
                } else u = void 0;
            if (S.isEmptyObject(f)) "inline" === ("none" === u ? ke(t.nodeName) : u) && (d.display = u);
            else
                for (r in h ? "hidden" in h && (p = h.hidden) : h = P.access(t, "fxshow", {}), o && (h.hidden = !p), p ? S(t).show() : c.done(function() {
                        S(t).hide()
                    }), c.done(function() {
                        var e;
                        for (e in P.remove(t, "fxshow"), f) S.style(t, e, f[e])
                    }), f) s = ot(p ? h[r] : 0, r, c), r in h || (h[r] = s.start, p && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || S.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !S.isFunction(t) && t
        };
        return r.duration = S.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in S.fx.speeds ? S.fx.speeds[r.duration] : S.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            S.isFunction(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(I).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function i() {
                var e = st(this, S.extend({}, t), s);
                (o || P.get(this, "finish")) && e.stop(!0)
            }
            var o = S.isEmptyObject(t),
                s = S.speed(e, n, r);
            return i.finish = i, o || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
        },
        stop: function(i, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = P.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && nt.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = P.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(it(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (Je = S.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Je = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), e() ? S.fx.start() : S.timers.pop()
    }, S.fx.interval = 13, S.fx.start = function() {
        Qe || (Qe = C.setInterval(S.fx.tick, S.fx.interval))
    }, S.fx.stop = function() {
        C.clearInterval(Qe), Qe = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, Ke = k.createElement("input"), Ze = k.createElement("select"), et = Ze.appendChild(k.createElement("option")), Ke.type = "checkbox", m.checkOn = "" !== Ke.value, m.optSelected = et.selected, Ze.disabled = !0, m.optDisabled = !et.disabled, (Ke = k.createElement("input")).value = "t", Ke.type = "radio", m.radioValue = "t" === Ke.value;
    var at, lt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return O(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (t = t.toLowerCase(), i = S.attrHooks[t] || (S.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && S.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = S.propFix[n] || n, S.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), at = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = lt[t] || S.find.attr;
        lt[t] = function(e, t, n) {
            var r, i;
            return n || (i = lt[t], lt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, lt[t] = i), r
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    S.fn.extend({
        prop: function(e, t) {
            return O(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    });
    var ft = /[\t\r\n\f]/g;

    function dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, l = 0;
            if (S.isFunction(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, dt(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[l++];)
                    if (i = dt(n), r = 1 === n.nodeType && (" " + i + " ").replace(ft, " ")) {
                        for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = S.trim(r)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, l = 0;
            if (S.isFunction(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, dt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[l++];)
                    if (i = dt(n), r = 1 === n.nodeType && (" " + i + " ").replace(ft, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (a = S.trim(r)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : S.isFunction(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, dt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" == o)
                    for (t = 0, n = S(this), r = i.match(L) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" != o || ((e = dt(this)) && P.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : P.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + dt(n) + " ").replace(ft, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var pt = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = S.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : S.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(pt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : S.trim(S.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, l = i < 0 ? a : o ? i : 0; l < a; l++)
                        if (((n = r[l]).selected || l === i) && (m.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !S.nodeName(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = S.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (S.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, m.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, l, u, c, f = [n || k],
                d = h.call(e, "type") ? e.type : e,
                p = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = s = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !gt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !S.isWindow(n)) {
                    for (a = c.delegateType || d, gt.test(a + d) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (n.ownerDocument || k) && f.push(s.defaultView || s.parentWindow || C)
                }
                for (i = 0;
                    (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? a : c.bindType || d, (u = (P.get(o, "events") || {})[e.type] && P.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && F(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !F(n) || l && S.isFunction(n[d]) && !S.isWindow(n) && ((s = n[l]) && (n[l] = null), n[S.event.triggered = d](), S.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), S.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), m.focusin = "onfocusin" in C, m.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        }
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = P.access(e, r);
                t || e.addEventListener(n, i, !0), P.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = P.access(e, r) - 1;
                t ? P.access(e, r, t) : (e.removeEventListener(n, i, !0), P.remove(e, r))
            }
        }
    });
    var mt = C.location,
        vt = S.now(),
        yt = /\?/;
    S.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var bt = /#.*$/,
        xt = /([?&])_=[^&]*/,
        wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Tt = /^(?:GET|HEAD)$/,
        Ct = /^\/\//,
        kt = {},
        St = {},
        At = "*/".concat("*"),
        Et = k.createElement("a");

    function Nt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(L) || [];
            if (S.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function qt(t, i, o, s) {
        var a = {},
            l = t === St;

        function u(e) {
            var r;
            return a[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1)
            }), r
        }
        return u(i.dataTypes[0]) || !a["*"] && u("*")
    }

    function Dt(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Et.href = mt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": S.parseJSON,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Dt(Dt(e, S.ajaxSettings), t) : Dt(S.ajaxSettings, e)
        },
        ajaxPrefilter: Nt(kt),
        ajaxTransport: Nt(St),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, d, n, p, r, h, i, g = S.ajaxSetup({}, t),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                y = S.Deferred(),
                b = S.Callbacks("once memory"),
                x = g.statusCode || {},
                o = {},
                s = {},
                w = 0,
                a = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!n)
                                for (n = {}; t = wt.exec(d);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || mt.href) + "").replace(bt, "").replace(Ct, mt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = S.trim(g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain) {
                r = k.createElement("a");
                try {
                    r.href = g.url, r.href = r.href, g.crossDomain = Et.protocol + "//" + Et.host != r.protocol + "//" + r.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), qt(kt, g, t, T), 2 === w) return T;
            for (i in (h = S.event && g.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Tt.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (yt.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = xt.test(f) ? f.replace(xt, "$1_=" + vt++) : f + (yt.test(f) ? "&" : "?") + "_=" + vt++)), g.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + At + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, T, g) || 2 === w)) return T.abort();
            for (i in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](g[i]);
            if (c = qt(St, g, t, T)) {
                if (T.readyState = 1, h && v.trigger("ajaxSend", [T, g]), 2 === w) return T;
                g.async && 0 < g.timeout && (p = C.setTimeout(function() {
                    T.abort("timeout")
                }, g.timeout));
                try {
                    w = 1, c.send(o, l)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, s, a, l, u = t;
                2 !== w && (w = 2, p && C.clearTimeout(p), c = void 0, d = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                l.unshift(i);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(g, T, n)), a = function(e, t, n, r) {
                    var i, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, T, i), i ? (g.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = l), (l = T.getResponseHeader("etag")) && (S.etag[f] = l)), 204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, i = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || u) + "", i ? y.resolveWith(m, [o, u, T]) : y.rejectWith(m, [T, u, s]), T.statusCode(x), x = void 0, h && v.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : s]), b.fireWith(m, [T, u]), h && (v.trigger("ajaxComplete", [T, g]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return S.isFunction(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S._evalUrl = function(e) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function(t) {
            var e;
            return S.isFunction(t) ? this.each(function(e) {
                S(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return S.isFunction(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = S.isFunction(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
            }).end()
        }
    }), S.expr.filters.hidden = function(e) {
        return !S.expr.filters.visible(e)
    }, S.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var jt = /%20/g,
        Lt = /\[\]$/,
        Ht = /\r?\n/g,
        Ft = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;

    function Rt(n, e, r, i) {
        var t;
        if (S.isArray(e)) S.each(e, function(e, t) {
            r || Lt.test(n) ? i(n, t) : Rt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== S.type(e)) i(n, e);
        else
            for (t in e) Rt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        function n(e, t) {
            t = S.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var r, i = [];
        if (void 0 === t && (t = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) Rt(r, e[r], t, n);
        return i.join("&").replace(jt, "+")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Ot.test(this.nodeName) && !Ft.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : S.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ht, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ht, "\r\n")
                }
            }).get()
        }
    }), S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Pt = {
            0: 200,
            1223: 204
        },
        _t = S.ajaxSettings.xhr();
    m.cors = !!_t && "withCredentials" in _t, m.ajax = _t = !!_t, S.ajaxTransport(function(i) {
        var o, s;
        if (m.cors || _t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Pt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), s = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = S("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), k.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Mt = [],
        $t = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mt.pop() || S.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace($t, "$1" + r) : !1 !== e.jsonp && (e.url += (yt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Mt.push(r)), o && S.isFunction(i) && i(o[0]), o = i = void 0
        }), "script"
    }), S.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || k;
        var r = x.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ne([e], t, i), i && i.length && S(i).remove(), S.merge([], r.childNodes))
    };
    var Wt = S.fn.load;

    function It(e) {
        return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    S.fn.load = function(e, t, n) {
        if ("string" != typeof e && Wt) return Wt.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (r = S.trim(e.slice(a)), e = e.slice(0, a)), S.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.expr.filters.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, l, u = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = S.css(e, "top"), l = S.css(e, "left"), i = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (r = c.position()).top, r.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), S.isFunction(t) && (t = t.call(e, n, S.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (e = o.documentElement, S.contains(e, r) ? (i = r.getBoundingClientRect(), n = It(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === S.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S.nodeName(e[0], "html") || (r = e.offset()), r.top += S.css(e[0], "borderTopWidth", !0), r.left += S.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - S.css(n, "marginTop", !0),
                    left: t.left - r.left - S.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || Oe
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return O(this, function(e, t, n) {
                var r = It(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = _e(m.pixelPosition, function(e, t) {
            if (t) return t = Pe(e, n), He.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        S.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(r, e) {
            S.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return O(this, function(e, t, n) {
                    var r;
                    return S.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), S.fn.andSelf = S.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Bt = C.jQuery,
        zt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = zt), e && C.jQuery === S && (C.jQuery = Bt), S
    }, e || (C.jQuery = C.$ = S), S
}, "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
} : t(e);
var s, a, l, u, c, f, d, p, n = document.querySelector(".row-all"),
    h = n.querySelectorAll(".sl"),
    g = [],
    m = 0,
    v = [];

function y() {
    if (m -= 1, a <= 0) {
        var e = "margin-left:-" + (a = f * c - c * s) + "px";
        u.setAttribute("style", e)
    } else {
        e = "margin-left:-" + (a -= c) + "px";
        u.setAttribute("style", e)
    }
    T()
}

function b() {
    if (m += 1, a < f * c - c * s) {
        var e = "margin-left:-" + (a += c) + "px";
        u.setAttribute("style", e)
    } else {
        e = "margin-left:-" + (a = 0) + "px";
        u.setAttribute("style", e)
    }
    T()
}

function x(e) {
    var t = document.createElement("div"),
        n = document.createElement("span"),
        r = document.createElement("span");
    t.classList.add("block-button"), n.classList.add("leftButton"), n.setAttribute("style", "display: none"), r.classList.add("rightButton"), t.appendChild(n), t.appendChild(r), e.appendChild(t)
}

function w(e, t, n) {
    var r = document.createElement("div");
    r.classList.add("block-circle");
    for (var i = 0; i < t - n + 1; i++) {
        var o = document.createElement("span");
        0 == i && o.classList.add("active-circle"), o.classList.add("circle"), o.setAttribute("data-index", i), r.appendChild(o)
    }
    e.appendChild(r)
}

function T() {
    m >= cirCol.length ? m = 0 : m < 0 && (m = cirCol.length - 1);
    var e = row_block.querySelector(".leftButton"),
        t = row_block.querySelector(".rightButton"),
        n = row_block.querySelector(".block-circle"),
        r = n.querySelectorAll("span");
    m === cirCol.length - 1 ? (t.setAttribute("style", "display: none"), e.setAttribute("style", "display: block")) : 0 === m ? (t.setAttribute("style", "display: block"), e.setAttribute("style", "display: none")) : (0 < m || m < cirCol.length - 1) && (t.setAttribute("style", "display: block"), e.setAttribute("style", "display: block")), r.length < 2 && (t.setAttribute("style", "display: none"), e.setAttribute("style", "display: none"), n.setAttribute("style", "height:13px"), n.innerHTML = "");
    for (var i = 0; i < cirCol.length; i += 1) i == m ? cirCol[i].classList.add("active-circle") : cirCol[i].classList.remove("active-circle");
    v[p] = m
}
n.addEventListener("click", function(e) {
        if (row_block = e.target.closest(".sl"), null !== row_block && void 0 !== row_block) {
            var t;
            if (row_block.hasAttribute("data-number") && (p = row_block.dataset.number), a = g[p], cirCol = row_block.querySelectorAll(".circle"), row_block.querySelector(".active-link") ? block = row_block.querySelector(row_block.querySelector(".active-link").getAttribute("href")) : block = row_block.querySelector(".slider"), u = block.querySelector(".row-slider"), s = window.innerWidth < 767 ? 1 : function() {
                    s = (u.dataset.col != s && (a = 0), u.dataset.col);
                    return s
                }(), c = function(e) {
                    return e.querySelectorAll(".myslide")[0].offsetWidth
                }(block), f = function(e) {
                    return e.querySelectorAll(".myslide").length
                }(block), m = v[p], t = window.innerWidth < 767 ? e.target.getAttribute("class") : e.target.parentNode.getAttribute("class"), "rightButton" === e.target.getAttribute("class")) b(row_block);
            else if ("leftButton" === e.target.getAttribute("class")) y(row_block);
            else if ("buttons-navigations" === t) d = row_block.querySelectorAll(".block-circle"), a = 0, u.style = "margin-left: 0px", 0 < d.length && d[0].parentNode.removeChild(d[0]), w(row_block, f, s), v[p] = 0, m = 0, T();
            else if ("block-circle" === e.target.parentNode.getAttribute("class")) {
                var n = +e.target.dataset.index;
                if (m <= n)
                    for (var r = n - m, i = 0; i < r; i++) b();
                else {
                    var o = m - n;
                    for (i = 0; i < o; i++) y()
                }
                m = n, T()
            }
            g[p] = a
        }
    }),
    function() {
        for (var e = 0; e < h.length; e += 1) {
            var t = h[e].querySelector(".row-slider"),
                n = t.querySelectorAll(".myslide");
            f = n.length;
            var r = window.innerWidth < 767 ? 1 : +t.dataset.col;
            x(h[e], n), w(h[e], f, r), h[e].setAttribute("data-number", e), g.push(0), v.push(0);
            var i = h[e],
                o = i.querySelector(".leftButton"),
                s = i.querySelector(".rightButton"),
                a = i.querySelector(".block-circle");
            a.querySelectorAll("span").length < 2 && (s.setAttribute("style", "display: none"), o.setAttribute("style", "display: none"), a.setAttribute("style", "height:13px"), a.innerHTML = "")
        }
    }(), window.onload = function() {
        ! function() {
            var s = document.querySelectorAll(".row-slider");
            l = [],
                function() {
                    ! function() {
                        for (var e = 0; e < s.length; e++) {
                            for (var t = s[e].querySelectorAll(".sliders-hotels"), n = {
                                    block: [],
                                    length: 0,
                                    height_price: 0,
                                    max_height: 0
                                }, r = 0; r < t.length; r++) {
                                var i = t[r].clientHeight,
                                    o = t[r].querySelector(".price");
                                console.log(i), o && (t[r].classList.contains("label-hotel") ? n.height_price = 0 : n.height_price = o.clientHeight), n.max_height < i && (n.max_height = i), n.block.push(t[r]), n.length = r + 1
                            }
                            l.push(n)
                        }
                    }();
                    for (var e = 0; e < l.length; e++)
                        for (var t = 0; t < l[e].block.length; t++) {
                            var n = "min-height:" + (l[e].max_height + l[e].height_price) + "px!important;" + l[e].block[t].getAttribute("style");
                            l[e].block[t].style.height ? l[e].block[t].style.height = n : l[e].block[t].setAttribute("style", n)
                        }
                }(), console.log("finish")
        }(), setTimeout(function() {
            $(".n").css({
                display: "none"
            })
        }, 1e3)
    };
var r = document.createElement("link");
r.href = "https://www.tui.ru/getmedia/eec19a87-cf5a-40c7-8442-09183e60e372/all", r.rel = "stylesheet", document.head.appendChild(r);
var i;
location.pathname;
if (window.addEventListener("change", function(e) {
        var t = e.target.options[e.target.options.selectedIndex],
            n = $(t).attr("href"),
            r = $(t).attr("data-block");
        $('[data-block="' + r + '"]').removeClass("active-link"), $(t).addClass("active-link"), $(r).not(n).css({
            display: "none"
        }), $(n).fadeIn(400)
    }), $(document).ready(function() {
        $(".buttons-navigations a").click(function(e) {
            e.preventDefault();
            var t = $(this).attr("href"),
                n = $(this).attr("data-block");
            $('[data-block="' + n + '"]').removeClass("active-link"), $(this).addClass("active-link"), $(n).not(t).css({
                display: "none"
            }), $(t).fadeIn(400)
        })
    }), window.innerWidth < 767 && function() {
        for (var e = document.querySelectorAll(".buttons-navigations"), t = 0; t < e.length; t += 1) {
            for (var n = document.createElement("select"), r = e[t].querySelectorAll(".button-navigatin"), i = e[t].parentNode, o = 0; o < r.length; o += 1) {
                var s = document.createElement("option");
                0 == o ? s.classList.add("active-link") : s.classList.add("s"), s.setAttribute("href", r[o].getAttribute("href")), s.setAttribute("data-block", r[o].dataset.block), s.innerText = r[o].innerText, n.appendChild(s)
            }
            n.classList.add("buttons-navigations"), i.replaceChild(n, e[t])
        }
    }(), "agent.tui.ru" === location.hostname || "agent.tui.ua" === location.hostname) {
    var o = document.querySelector(".menu-top");
    if (window.innerWidth < 767) o.addEventListener("click", function(e) {
        var t = o.querySelector(".mobile_agent");
        e.target === o.querySelector(".but-menu-mobile") ? t.style = "right: 0" : e.target === document.querySelector("#exit_menu") && (t.style = "")
    });
    else {
        var C = document.querySelector(".menu-telephone");
        document.querySelector(".mobile_agent").appendChild(C)
    }
}
if ((i = document.createElement("script")).src = "https://www.tui.ru/getmedia/6313a4ad-c578-45aa-a371-a4a959ccc340/video/", document.head.appendChild(i), i.onload = function() {
        var e = document.createElement("script");
        e.src = "https://www.youtube.com/iframe_api", document.head.appendChild(e)
    }, "www.tui.ru" !== location.hostname && "www.tui.ua" !== location.hostname && "tui.ru" !== location.hostname && "tui.ua" !== location.hostname || function() {
        var e, t;
        "/concepts/tui-fun-sun" === location.pathname || "/concepts/tui-fun-sun/" === location.pathname ? (e = "6959119596", t = "6959119596.632758c.fa44c3b2729842d38dfdc99788edf60c") : "/concepts/tui-toucan" === location.pathname || "/concepts/tui-toucan/" === location.pathname || "/" === location.pathname ? (e = "5573309906", t = "5573309906.b2a9e72.f87ccc8c273443a7bf530fa7881f32fa") : "/concepts/concepts/tui-day-night" !== location.pathname && "/concepts/tui-day-night/" !== location.pathname || (e = "7022372695", t = "7022372695.96e3a35.bf5f02bb79e24b07973fe1558c7dfde3");
        var l = 75,
            n = "https://api.instagram.com/v1/users/" + e + "/media/recent?access_token=" + t + "&count=" + 10 + "&callback=?",
            r = new XMLHttpRequest;
        (r.open("GET", n, !1), r.send(), 200 != r.status) ? console.log(r.status + ": " + r.statusText): function(e) {
            var t = document.querySelector("#instagram");
            t.innerHTML = "";
            for (var n = 0; n < 4; n += 1) {
                var r, i = document.createElement("div"),
                    o = e[n].caption.text,
                    s = "";
                i.className = "col-md-3 col-6";
                for (var a = 0; a < l; a += 1) null != o[a] && (s += o[a]);
                img = document.createElement("img"), s += "...", console.log(e[n]), r = e[n].images.hasOwnProperty("low_resolution") ? '<div style="width:100%;height:280px;overflow: hidden;cursor:pointer"><img src="' + e[n].images.low_resolution.url + '"/></div><p>' + s + "</p>" : '<div style="width:100%;height:280px;overflow: hidden"><img src="' + e[n].carousel_media[0].images.low_resolution.url + '"/></div><p>' + s + "</p>", i.innerHTML = r, i.setAttribute("onclick", "window.open('" + e[n].link + "')"), t.appendChild(i), s = ""
            }
        }(JSON.parse(r.response).data)
    }(), 767 <= window.innerWidth) {
    var k = document.querySelector(".video");
    setTimeout(function() {
        k.addEventListener("click", function(e) {
            var t = document.querySelector(".play"),
                n = k.querySelector("#player");
            e.target !== n && e.target.parentNode !== t || (t.setAttribute("style", "display: none")(n.requestFullscreen) ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullscreen ? n.webkitRequestFullscreen() : n.msRequestFullscreen && n.msRequestFullscreen(), player.playVideo())
        })
    }, 1e3)
}
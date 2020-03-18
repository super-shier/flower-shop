// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",
            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [], []
        ]
    };

    var aa = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.ie = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Vd = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var g = function (a, b) {
        this.s = a;
        this.Jc = b
    };
    g.prototype.Wc = function () {
        return this.s
    };
    g.prototype.getType = g.prototype.Wc;
    g.prototype.getData = function () {
        return this.Jc
    };
    g.prototype.getData = g.prototype.getData;
    var ba = function (a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }, ca = function () {
        this.Z = {};
        this.oa = !1
    };
    ca.prototype.get = function (a) {
        return this.Z["dust." + a]
    };
    ca.prototype.set = function (a, b) {
        !this.oa && (this.Z["dust." + a] = b)
    };
    ca.prototype.has = function (a) {
        return this.Z.hasOwnProperty("dust." + a)
    };
    var da = function (a) {
        var b = [], c;
        for (c in a.Z) a.Z.hasOwnProperty(c) && b.push(c.substr(5));
        return b
    };
    ca.prototype.remove = function (a) {
        !this.oa && delete this.Z["dust." + a]
    };
    ca.prototype.D = function () {
        this.oa = !0
    };
    var t = function (a) {
        this.ca = new ca;
        this.h = [];
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ba(b) ? this.h[Number(b)] = a[Number(b)] : this.ca.set(b, a[b]))
    };
    t.prototype.toString = function () {
        for (var a = [], b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            null === c || void 0 === c ? a.push("") : a.push(c.toString())
        }
        return a.join(",")
    };
    t.prototype.set = function (a, b) {
        if ("length" == a) {
            if (!ba(b)) throw"RangeError: Length property must be a valid integer.";
            this.h.length = Number(b)
        } else ba(a) ? this.h[Number(a)] = b : this.ca.set(a, b)
    };
    t.prototype.set = t.prototype.set;
    t.prototype.get = function (a) {
        return "length" == a ? this.length() : ba(a) ? this.h[Number(a)] : this.ca.get(a)
    };
    t.prototype.get = t.prototype.get;
    t.prototype.length = function () {
        return this.h.length
    };
    t.prototype.L = function () {
        for (var a = da(this.ca), b = 0; b < this.h.length; b++) a.push(b + "");
        return new t(a)
    };
    t.prototype.getKeys = t.prototype.L;
    t.prototype.remove = function (a) {
        ba(a) ? delete this.h[Number(a)] : this.ca.remove(a)
    };
    t.prototype.remove = t.prototype.remove;
    t.prototype.pop = function () {
        return this.h.pop()
    };
    t.prototype.pop = t.prototype.pop;
    t.prototype.push = function (a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    t.prototype.push = t.prototype.push;
    t.prototype.shift = function () {
        return this.h.shift()
    };
    t.prototype.shift = t.prototype.shift;
    t.prototype.splice = function (a, b, c) {
        return new t(this.h.splice.apply(this.h, arguments))
    };
    t.prototype.splice = t.prototype.splice;
    t.prototype.unshift = function (a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    t.prototype.unshift = t.prototype.unshift;
    t.prototype.has = function (a) {
        return ba(a) && this.h.hasOwnProperty(a) || this.ca.has(a)
    };
    var ea = function () {
        function a(a, b) {
            c[a] = b
        }

        function b() {
            c = {}
        }

        var c = {}, d = {
            add: a, reset: b, create: function (d) {
                var e = {
                    add: a, request: function (a, b) {
                        return c[a] ? c[a].apply(d, Array.prototype.slice.call(arguments, 1)) : !1
                    }, reset: b
                };
                e.add = e.add;
                e.request = e.request;
                e.reset = e.reset;
                return e
            }
        };
        d.add = d.add;
        d.reset = d.reset;
        return d
    };
    var fa = function () {
        function a(a, c) {
            if (b[a]) {
                if (b[a].Da + c > b[a].max) throw Error("Quota exceeded");
                b[a].Da += c
            }
        }

        var b = {}, c = void 0, d = void 0, e = {
            rd: function (a) {
                c = a
            }, zb: function () {
                c && a(c, 1)
            }, sd: function (a) {
                d = a
            }, O: function (b) {
                d && a(d, b)
            }, Hd: function (a, c) {
                b[a] = b[a] || {Da: 0};
                b[a].max = c
            }, Vc: function (a) {
                return b[a] && b[a].Da || 0
            }, reset: function () {
                b = {}
            }, Ec: a
        };
        e.onFnConsume = e.rd;
        e.consumeFn = e.zb;
        e.onStorageConsume = e.sd;
        e.consumeStorage = e.O;
        e.setMax = e.Hd;
        e.getConsumed = e.Vc;
        e.reset = e.reset;
        e.consume = e.Ec;
        return e
    };
    var ha = function (a, b, c) {
        this.F = a;
        this.T = b;
        this.S = c;
        this.h = new ca
    };
    ha.prototype.add = function (a, b) {
        this.h.oa || (this.F.O(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.h.set(a, b))
    };
    ha.prototype.add = ha.prototype.add;
    ha.prototype.set = function (a, b) {
        this.h.oa || (this.S && this.S.has(a) ? this.S.set(a, b) : (this.F.O(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.h.set(a, b)))
    };
    ha.prototype.set = ha.prototype.set;
    ha.prototype.get = function (a) {
        return this.h.has(a) ? this.h.get(a) : this.S ? this.S.get(a) : void 0
    };
    ha.prototype.get = ha.prototype.get;
    ha.prototype.has = function (a) {
        return !!this.h.has(a) || !(!this.S || !this.S.has(a))
    };
    ha.prototype.has = ha.prototype.has;
    ha.prototype.C = function () {
        return this.F
    };
    ha.prototype.D = function () {
        this.h.D()
    };
    var ia = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, ja = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1
    };
    var u = function (a, b) {
        ca.call(this);
        this.Lb = a;
        this.Tc = b
    };
    aa(u, ca);
    var la = function (a, b) {
        for (var c, d = 0; d < b.length && !(c = ka(a, b[d]), c instanceof g); d++) ;
        return c
    }, ka = function (a, b) {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof u)) throw"Attempting to execute non-function " + b[0] + ".";
        return c.i.apply(c, [a].concat(b.slice(1)))
    };
    u.prototype.toString = function () {
        return this.Lb
    };
    u.prototype.getName = function () {
        return this.Lb
    };
    u.prototype.getName = u.prototype.getName;
    u.prototype.L = function () {
        return new t(da(this))
    };
    u.prototype.getKeys = u.prototype.L;
    u.prototype.i = function (a, b) {
        var c, d = {
            A: function () {
                return a
            }, evaluate: function (b) {
                var c = a;
                return ia(b) ? ka(c, b) : b
            }, ja: function (b) {
                return la(a, b)
            }, C: function () {
                return a.C()
            }, Zd: function () {
                c || (c = a.T.create(d));
                return c
            }
        };
        a.C().zb();
        return this.Tc.apply(d, Array.prototype.slice.call(arguments, 1))
    };
    u.prototype.invoke = u.prototype.i;
    var w = function () {
        ca.call(this)
    };
    aa(w, ca);
    w.prototype.L = function () {
        return new t(da(this))
    };
    w.prototype.getKeys = w.prototype.L;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var na = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, oa = function (a) {
        if (null == a) return String(a);
        var b = na.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, pa = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, qa = function (a) {
        if (!a || "object" != oa(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !pa(a, "constructor") && !pa(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || pa(a, b)
    }, ra = function (a, b) {
        var c = b || ("array" == oa(a) ? [] : {}), d;
        for (d in a) if (pa(a, d)) {
            var e = a[d];
            "array" == oa(e) ? ("array" != oa(c[d]) && (c[d] = []), c[d] = ra(e, c[d])) : qa(e) ? (qa(c[d]) || (c[d] = {}), c[d] = ra(e, c[d])) : c[d] = e
        }
        return c
    };
    var sa = function (a) {
        if (a instanceof t) {
            for (var b = [], c = a.length(), d = 0; d < c; d++) a.has(d) && (b[d] = sa(a.get(d)));
            return b
        }
        if (a instanceof w) {
            for (var e = {}, f = a.L(), h = f.length(), k = 0; k < h; k++) e[f.get(k)] = sa(a.get(f.get(k)));
            return e
        }
        return a instanceof u ? function () {
            for (var b = Array.prototype.slice.call(arguments, 0), c = 0; c < b.length; c++) b[c] = ta(b[c]);
            var d = new ha(fa(), ea());
            return sa(a.i.apply(a, [d].concat(b)))
        } : a
    }, ta = function (a) {
        if (ia(a)) {
            for (var b = [], c = 0; c < a.length; c++) a.hasOwnProperty(c) && (b[c] = ta(a[c]));
            return new t(b)
        }
        if (qa(a)) {
            var d =
                new w, e;
            for (e in a) a.hasOwnProperty(e) && d.set(e, ta(a[e]));
            return d
        }
        if ("function" === typeof a) return new u("", function (b) {
            for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; d++) c[d] = sa(this.evaluate(c[d]));
            return ta(a.apply(a, c))
        });
        var f = typeof a;
        if (null === a || "string" === f || "number" === f || "boolean" === f) return a
    };
    var ua = {
        control: function (a, b) {
            return new g(a, this.evaluate(b))
        }, fn: function (a, b, c) {
            var d = this.A(), e = this.evaluate(b);
            if (!(e instanceof t)) throw"Error: non-List value given for Fn argument names.";
            var f = Array.prototype.slice.call(arguments, 2);
            this.C().O(a.length + f.length);
            return new u(a, function () {
                return function (a) {
                    for (var b = new ha(d.F, d.T, d), c = Array.prototype.slice.call(arguments, 0), h = 0; h < c.length; h++) if (c[h] = this.evaluate(c[h]), c[h] instanceof g) return c[h];
                    for (var n = e.get("length"), p = 0; p < n; p++) p <
                    c.length ? b.set(e.get(p), c[p]) : b.set(e.get(p), void 0);
                    b.set("arguments", new t(c));
                    var q = la(b, f);
                    if (q instanceof g) return "return" === q.s ? q.getData() : q
                }
            }())
        }, list: function (a) {
            var b = this.C();
            b.O(arguments.length);
            for (var c = new t, d = 0; d < arguments.length; d++) {
                var e = this.evaluate(arguments[d]);
                "string" === typeof e && b.O(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        }, map: function (a) {
            for (var b = this.C(), c = new w, d = 0; d < arguments.length - 1; d += 2) {
                var e = this.evaluate(arguments[d]) + "", f = this.evaluate(arguments[d + 1]), h = e.length;
                h += "string" === typeof f ? f.length : 1;
                b.O(h);
                c.set(e, f)
            }
            return c
        }, undefined: function () {
        }
    };
    var y = function () {
        this.F = fa();
        this.T = ea();
        this.la = new ha(this.F, this.T)
    };
    y.prototype.N = function (a, b) {
        var c = new u(a, b);
        c.D();
        this.la.set(a, c)
    };
    y.prototype.addInstruction = y.prototype.N;
    y.prototype.yb = function (a, b) {
        ua.hasOwnProperty(a) && this.N(b || a, ua[a])
    };
    y.prototype.addNativeInstruction = y.prototype.yb;
    y.prototype.C = function () {
        return this.F
    };
    y.prototype.getQuota = y.prototype.C;
    y.prototype.Ka = function () {
        this.F = fa();
        this.la.F = this.F
    };
    y.prototype.resetQuota = y.prototype.Ka;
    y.prototype.Dd = function () {
        this.T = ea();
        this.la.T = this.T
    };
    y.prototype.resetPermissions = y.prototype.Dd;
    y.prototype.I = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.ib(c)
    };
    y.prototype.execute = y.prototype.I;
    y.prototype.ib = function (a) {
        for (var b, c = 0; c < arguments.length; c++) {
            var d = ka(this.la, arguments[c]);
            b = d instanceof g || d instanceof u || d instanceof t || d instanceof w || null === d || void 0 === d || "string" === typeof d || "number" === typeof d || "boolean" === typeof d ? d : void 0
        }
        return b
    };
    y.prototype.run = y.prototype.ib;
    y.prototype.D = function () {
        this.la.D()
    };
    y.prototype.makeImmutable = y.prototype.D;
    var va = function (a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var xa = {
        Kd: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (d = 1; d < arguments.length; d++) if (arguments[d] instanceof t) for (var e = arguments[d], f = 0; f < e.length(); f++) c.push(e.get(f)); else c.push(arguments[d]);
            return new t(c)
        },
        every: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) &&
                !b.i(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.i(a, this.get(e), e, this) && d.push(this.get(e));
            return new t(d)
        },
        forEach: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.i(a, this.get(d), d, this)
        },
        hasOwnProperty: function (a, b) {
            return this.has(b)
        },
        indexOf: function (a, b, c) {
            var d = this.length(), e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++) if (this.has(f) && this.get(f) ===
                b) return f;
            return -1
        },
        join: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function (a, b, c) {
            var d = this.length(), e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.i(a, this.get(e), e, this));
            return new t(d)
        },
        pop: function () {
            return this.pop()
        },
        push: function (a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments,
                1))
        },
        reduce: function (a, b, c) {
            var d = this.length(), e, f;
            if (void 0 !== c) e = c, f = 0; else {
                if (0 == d) throw"TypeError: Reduce on List with no elements.";
                for (var h = 0; h < d; h++) if (this.has(h)) {
                    e = this.get(h);
                    f = h + 1;
                    break
                }
                if (h == d) throw"TypeError: Reduce on List with no elements.";
            }
            for (h = f; h < d; h++) this.has(h) && (e = b.i(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function (a, b, c) {
            var d = this.length(), e, f;
            if (void 0 !== c) e = c, f = d - 1; else {
                if (0 == d) throw"TypeError: ReduceRight on List with no elements.";
                for (var h = 1; h <= d; h++) if (this.has(d -
                    h)) {
                    e = this.get(d - h);
                    f = d - (h + 1);
                    break
                }
                if (h > d) throw"TypeError: ReduceRight on List with no elements.";
            }
            for (h = f; 0 <= h; h--) this.has(h) && (e = b.i(a, e, this.get(h), h, this));
            return e
        },
        reverse: function () {
            for (var a = va(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function () {
            return this.shift()
        },
        slice: function (a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b,
                c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new t(e)
        },
        some: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.i(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function (a, b) {
            var c = va(this);
            void 0 === b ? c.sort() : c.sort(function (c, d) {
                return Number(b.i(a, c, d))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d)
        },
        splice: function (a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function () {
            return this.toString()
        },
        unshift: function (a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var z = {
            Jb: {
                ADD: 0,
                AND: 1,
                APPLY: 2,
                ASSIGN: 3,
                BREAK: 4,
                CASE: 5,
                CONTINUE: 6,
                CONTROL: 49,
                CREATE_ARRAY: 7,
                CREATE_OBJECT: 8,
                DEFAULT: 9,
                DEFN: 50,
                DIVIDE: 10,
                DO: 11,
                EQUALS: 12,
                EXPRESSION_LIST: 13,
                FN: 51,
                FOR: 14,
                FOR_IN: 47,
                GET: 15,
                GET_CONTAINER_VARIABLE: 48,
                GET_INDEX: 16,
                GET_PROPERTY: 17,
                GREATER_THAN: 18,
                GREATER_THAN_EQUALS: 19,
                IDENTITY_EQUALS: 20,
                IDENTITY_NOT_EQUALS: 21,
                IF: 22,
                LESS_THAN: 23,
                LESS_THAN_EQUALS: 24,
                MODULUS: 25,
                MULTIPLY: 26,
                NEGATE: 27,
                NOT: 28,
                NOT_EQUALS: 29,
                NULL: 45,
                OR: 30,
                PLUS_EQUALS: 31,
                POST_DECREMENT: 32,
                POST_INCREMENT: 33,
                PRE_DECREMENT: 34,
                PRE_INCREMENT: 35,
                QUOTE: 46,
                RETURN: 36,
                SET_PROPERTY: 43,
                SUBTRACT: 37,
                SWITCH: 38,
                TERNARY: 39,
                TYPEOF: 40,
                UNDEFINED: 44,
                VAR: 41,
                WHILE: 42
            }
        },
        ya = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        za = new g("break"), Aa = new g("continue");
    z.add = function (a, b) {
        return this.evaluate(a) + this.evaluate(b)
    };
    z.and = function (a, b) {
        return this.evaluate(a) && this.evaluate(b)
    };
    z.apply = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof t)) throw"Error: Non-List argument given to Apply instruction.";
        if (null === a || void 0 === a) throw"TypeError: Can't read property " + b + " of " + a + ".";
        if ("boolean" == typeof a || "number" == typeof a) {
            if ("toString" == b) return a.toString();
            throw"TypeError: " + a + "." + b + " is not a function.";
        }
        if ("string" == typeof a) {
            if (0 <= ja(ya, b)) return ta(a[b].apply(a, va(c)));
            throw"TypeError: " + b + " is not a function";
        }
        if (a instanceof t) {
            if (a.has(b)) {
                var d =
                    a.get(b);
                if (d instanceof u) {
                    var e = va(c);
                    e.unshift(this.A());
                    return d.i.apply(d, e)
                }
                throw"TypeError: " + b + " is not a function";
            }
            if (0 <= ja(xa.Kd, b)) return e = va(c), e.unshift(this.A()), xa[b].apply(a, e)
        }
        if (a instanceof u || a instanceof w) {
            if (a.has(b)) {
                d = a.get(b);
                if (d instanceof u) return e = va(c), e.unshift(this.A()), d.i.apply(d, e);
                throw"TypeError: " + b + " is not a function";
            }
            if ("toString" == b) return a instanceof u ? a.getName() : a.toString();
            if ("hasOwnProperty" == b) return a.has.apply(a, va(c))
        }
        throw"TypeError: Object has no '" +
        b + "' property.";
    };
    z.assign = function (a, b) {
        a = this.evaluate(a);
        if ("string" != typeof a) throw"Invalid key name given for assignment.";
        var c = this.A();
        if (!c.has(a)) throw"Attempting to assign to undefined value " + b;
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    };
    z["break"] = function () {
        return za
    };
    z["case"] = function (a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof g) return d
        }
    };
    z["continue"] = function () {
        return Aa
    };
    z.Kc = function (a, b, c) {
        var d = new t;
        b = this.evaluate(b);
        for (var e = 0; e < b.length; e++) d.push(b[e]);
        var f = [z.Jb.FN, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.A().set(a, this.evaluate(f))
    };
    z.Nc = function (a, b) {
        return this.evaluate(a) / this.evaluate(b)
    };
    z.Pc = function (a, b) {
        return this.evaluate(a) == this.evaluate(b)
    };
    z.Rc = function (a) {
        for (var b, c = 0; c < arguments.length; c++) b = this.evaluate(arguments[c]);
        return b
    };
    z.Uc = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.A();
        if ("string" == typeof b) for (var e = 0; e < b.length; e++) {
            d.set(a, e);
            var f = this.ja(c);
            if (f instanceof g) {
                if ("break" == f.s) break;
                if ("return" == f.s) return f
            }
        } else if (b instanceof w || b instanceof t || b instanceof u) {
            var h = b.L(), k = h.length();
            for (e = 0; e < k; e++) if (d.set(a, h.get(e)), f = this.ja(c), f instanceof g) {
                if ("break" == f.s) break;
                if ("return" == f.s) return f
            }
        }
    };
    z.get = function (a) {
        return this.A().get(this.evaluate(a))
    };
    z.Hb = function (a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (void 0 === a || null === a) throw"TypeError: cannot access property of " + a + ".";
        a instanceof w || a instanceof t || a instanceof u ? c = a.get(b) : "string" == typeof a && ("length" == b ? c = a.length : ba(b) && (c = a[b]));
        return c
    };
    z.Xc = function (a, b) {
        return this.evaluate(a) > this.evaluate(b)
    };
    z.Yc = function (a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    };
    z.bd = function (a, b) {
        return this.evaluate(a) === this.evaluate(b)
    };
    z.cd = function (a, b) {
        return this.evaluate(a) !== this.evaluate(b)
    };
    z["if"] = function (a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = this.ja(d);
        if (e instanceof g) return e
    };
    z.kd = function (a, b) {
        return this.evaluate(a) < this.evaluate(b)
    };
    z.ld = function (a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    };
    z.md = function (a, b) {
        return this.evaluate(a) % this.evaluate(b)
    };
    z.multiply = function (a, b) {
        return this.evaluate(a) * this.evaluate(b)
    };
    z.nd = function (a) {
        return -this.evaluate(a)
    };
    z.od = function (a) {
        return !this.evaluate(a)
    };
    z.pd = function (a, b) {
        return this.evaluate(a) != this.evaluate(b)
    };
    z["null"] = function () {
        return null
    };
    z.or = function (a, b) {
        return this.evaluate(a) || this.evaluate(b)
    };
    z.Rb = function (a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    };
    z.Sb = function (a) {
        return this.evaluate(a)
    };
    z.quote = function (a) {
        return Array.prototype.slice.apply(arguments)
    };
    z["return"] = function (a) {
        return new g("return", this.evaluate(a))
    };
    z.setProperty = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (null === a || void 0 === a) throw"TypeError: Can't set property " + b + " of " + a + ".";
        (a instanceof u || a instanceof t || a instanceof w) && a.set(b, c);
        return c
    };
    z.Jd = function (a, b) {
        return this.evaluate(a) - this.evaluate(b)
    };
    z["switch"] = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!ia(b) || !ia(c)) throw"Error: Malformed switch instruction.";
        for (var d, e = !1, f = 0; f < b.length; f++) if (e || a === this.evaluate(b[f])) if (d = this.evaluate(c[f]), d instanceof g) {
            var h = d.s;
            if ("break" == h) return;
            if ("return" == h || "continue" == h) return d
        } else e = !0;
        if (c.length == b.length + 1 && (d = this.evaluate(c[c.length - 1]), d instanceof g && ("return" == d.s || "continue" == d.s))) return d
    };
    z.Ld = function (a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    };
    z["typeof"] = function (a) {
        a = this.evaluate(a);
        return a instanceof u ? "function" : typeof a
    };
    z.undefined = function () {
    };
    z["var"] = function (a) {
        for (var b = this.A(), c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" != typeof d || b.add(d, void 0)
        }
    };
    z["while"] = function (a, b, c, d) {
        var e, f = this.evaluate(d);
        if (this.evaluate(c) && (e = this.ja(f), e instanceof g)) {
            if ("break" == e.s) return;
            if ("return" == e.s) return e
        }
        for (; this.evaluate(a);) {
            e = this.ja(f);
            if (e instanceof g) {
                if ("break" == e.s) break;
                if ("return" == e.s) return e
            }
            this.evaluate(b)
        }
    };
    var B = function () {
        this.Ib = !1;
        this.P = new y;
        Ba(this);
        this.Ib = !0
    };
    B.prototype.hd = function () {
        return this.Ib
    };
    B.prototype.isInitialized = B.prototype.hd;
    B.prototype.I = function (a) {
        return this.P.ib(a)
    };
    B.prototype.execute = B.prototype.I;
    B.prototype.D = function () {
        this.P.D()
    };
    B.prototype.makeImmutable = B.prototype.D;
    var Ba = function (a) {
        function b(a, b) {
            e.P.yb(a, String(b))
        }

        function c(a, b) {
            e.P.N(String(d[a]), b)
        }

        var d = z.Jb, e = a;
        b("control", d.CONTROL);
        b("fn", d.FN);
        b("list", d.CREATE_ARRAY);
        b("map", d.CREATE_OBJECT);
        b("undefined", d.UNDEFINED);
        c("ADD", z.add);
        c("AND", z.and);
        c("APPLY", z.apply);
        c("ASSIGN", z.assign);
        c("BREAK", z["break"]);
        c("CASE", z["case"]);
        c("CONTINUE", z["continue"]);
        c("DEFAULT", z["case"]);
        c("DEFN", z.Kc);
        c("DIVIDE", z.Nc);
        c("EQUALS", z.Pc);
        c("EXPRESSION_LIST", z.Rc);
        c("FOR_IN", z.Uc);
        c("GET", z.get);
        c("GET_INDEX",
            z.Hb);
        c("GET_PROPERTY", z.Hb);
        c("GREATER_THAN", z.Xc);
        c("GREATER_THAN_EQUALS", z.Yc);
        c("IDENTITY_EQUALS", z.bd);
        c("IDENTITY_NOT_EQUALS", z.cd);
        c("IF", z["if"]);
        c("LESS_THAN", z.kd);
        c("LESS_THAN_EQUALS", z.ld);
        c("MODULUS", z.md);
        c("MULTIPLY", z.multiply);
        c("NEGATE", z.nd);
        c("NOT", z.od);
        c("NOT_EQUALS", z.pd);
        c("NULL", z["null"]);
        c("OR", z.or);
        c("POST_DECREMENT", z.Rb);
        c("POST_INCREMENT", z.Rb);
        c("PRE_DECREMENT", z.Sb);
        c("PRE_INCREMENT", z.Sb);
        c("QUOTE", z.quote);
        c("RETURN", z["return"]);
        c("SET_PROPERTY", z.setProperty);
        c("SUBTRACT", z.Jd);
        c("SWITCH", z["switch"]);
        c("TERNARY", z.Ld);
        c("TYPEOF", z["typeof"]);
        c("VAR", z["var"]);
        c("WHILE", z["while"])
    };
    B.prototype.N = function (a, b) {
        this.P.N(a, b)
    };
    B.prototype.addInstruction = B.prototype.N;
    B.prototype.C = function () {
        return this.P.C()
    };
    B.prototype.getQuota = B.prototype.C;
    B.prototype.Ka = function () {
        this.P.Ka()
    };
    B.prototype.resetQuota = B.prototype.Ka;
    var Ca = function () {
        this.Ha = {}
    };
    Ca.prototype.get = function (a) {
        return this.Ha.hasOwnProperty(a) ? this.Ha[a] : void 0
    };
    Ca.prototype.add = function (a, b) {
        if (this.Ha.hasOwnProperty(a)) throw"Attempting to add a function which already exists: " + a + ".";
        var c = new u(a, function () {
            for (var a = Array.prototype.slice.call(arguments, 0), c = 0; c < a.length; c++) a[c] = this.evaluate(a[c]);
            return b.apply(this, a)
        });
        c.D();
        this.Ha[a] = c
    };
    Ca.prototype.addAll = function (a) {
        for (var b in a) a.hasOwnProperty(b) && this.add(b, a[b])
    };
    var C = window, F = document, Da = function (a, b) {
            var c = C[a];
            C[a] = void 0 === c ? b : c;
            return C[a]
        }, Ea = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, J = function (a, b, c) {
            var d = F.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Ea(d, b);
            c && (d.onerror = c);
            var e = F.getElementsByTagName("script")[0] || F.body || F.head;
            e.parentNode.insertBefore(d, e);
            return d
        }, Fa = function (a, b) {
            var c = F.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = F.body && F.body.lastChild || F.body || F.head;
            d.parentNode.insertBefore(c, d);
            Ea(c, b);
            void 0 !== a && (c.src = a);
            return c
        }, O = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a
        }, Ga = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, Ha = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b,
                c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        }, P = function (a) {
            C.setTimeout(a, 0)
        }, Ja = function (a) {
            var b = F.getElementById(a);
            if (b && Ia(b, "id") != a) for (var c = 1; c < document.all[a].length; c++) if (Ia(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        }, Ia = function (a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        }, Ka = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        La = function (a) {
            var b = F.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        };
    var Ma = function (a, b) {
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (decodeURIComponent(e[0]).replace(/\+/g, " ") == b) return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g, " ")
        }
    }, R = function (a, b, c, d, e) {
        var f, h = a.protocol || C.location.protocol;
        h = h.replace(":", "").toLowerCase();
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "protocol":
                f = h;
                break;
            case "host":
                f = (a.hostname || C.location.hostname).split(":")[0].toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substr(k[0].length))
                }
                break;
            case "port":
                f = String(1 * (a.hostname ? a.port : C.location.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
                break;
            case "path":
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var l = f.split("/");
                0 <= ja(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                f = l.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Ma(f, e));
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, Na = function (a) {
        var b = "";
        a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
        return b
    }, S = function (a) {
        var b =
            F.createElement("a");
        a && (b.href = a);
        return b
    };
    var Qa = function () {
        this.Qb = new B;
        var a = new Ca;
        a.addAll(Oa());
        Pa(this, function (b) {
            return a.get(b)
        })
    }, Oa = function () {
        return {
            callInWindow: Ra,
            getCurrentUrl: Sa,
            getInWindow: Ta,
            getReferrer: Ua,
            getUrlComponent: Va,
            getUrlFragment: Wa,
            isPlainObject: Xa,
            loadIframe: Ya,
            loadJavaScript: Za,
            removeUrlFragment: ab,
            replaceAll: bb,
            sendTrackingBeacon: cb,
            setInWindow: db
        }
    };
    Qa.prototype.I = function (a) {
        return this.Qb.I(a)
    };
    Qa.prototype.execute = Qa.prototype.I;
    var Pa = function (a, b) {
        a.Qb.N("require", b)
    };

    function Ra(a, b) {
        for (var c = a.split("."), d = C, e = d[c[0]], f = 1; e && f < c.length; f++) d = e, e = e[c[f]];
        if ("function" == oa(e)) {
            var h = [];
            for (f = 1; f < arguments.length; f++) h.push(sa(arguments[f]));
            e.apply(d, h)
        }
    }

    function Sa() {
        return C.location.href
    }

    function Ta(a, b, c) {
        for (var d = a.split("."), e = C, f = 0; f < d.length - 1; f++) if (e = e[d[f]], void 0 === e || null === e) return;
        b && (void 0 === e[d[f]] || c && !e[d[f]]) && (e[d[f]] = sa(b));
        return ta(e[d[f]])
    }

    function Ua() {
        return F.referrer
    }

    function Va(a, b, c, d, e) {
        var f;
        if (d && d instanceof t) {
            f = [];
            for (var h = 0; h < d.length(); h++) {
                var k = d.get(h);
                "string" == typeof k && f.push(k)
            }
        }
        return R(S(a), b, c, f, e)
    }

    function Wa(a) {
        return R(S(a), "fragment")
    }

    function Xa(a) {
        return a instanceof w
    }

    function Ya(a, b) {
        var c = this.A();
        Fa(a, function () {
            b instanceof u && b.i(c)
        })
    }

    var eb = {};

    function Za(a, b, c, d) {
        var e = this.A(), f = function () {
            b instanceof u && b.i(e)
        }, h = function () {
            c instanceof u && c.i(e)
        };
        d ? eb[d] ? (eb[d].onSuccess.push(f), eb[d].onFailure.push(h)) : (eb[d] = {
            onSuccess: [f],
            onFailure: [h]
        }, f = function () {
            for (var a = eb[d].onSuccess, b = 0; b < a.length; b++) P(a[b]);
            a.push = function (a) {
                P(a);
                return 0
            }
        }, h = function () {
            for (var a = eb[d].onFailure, b = 0; b < a.length; b++) P(a[b]);
            eb[d] = null
        }, J(a, f, h)) : J(a, f, h)
    }

    function ab(a) {
        return Na(S(a))
    }

    function bb(a, b, c) {
        return a.replace(new RegExp(b, "g"), c)
    }

    function cb(a, b, c) {
        var d = this.A();
        O(a, function () {
            b instanceof u && b.i(d)
        }, function () {
            c instanceof u && c.i(d)
        })
    }

    function db(a, b, c) {
        for (var d = a.split("."), e = C, f = 0; f < d.length - 1; f++) if (e = e[d[f]], void 0 === e) return !1;
        return void 0 === e[d[f]] || c ? (e[d[f]] = sa(b), !0) : !1
    };var Db, Eb = [], Fb = [], Gb = [], Hb = [], Ib = [], Jb = {}, Kb, Lb, Mb = function (a) {
        var b = a["function"];
        if (!b) throw"Error: No function name given for function call.";
        if (Jb[b]) {
            var c = {}, d;
            for (d in a) a.hasOwnProperty(d) && 0 === d.indexOf("vtp_") && (c[d] = a[d]);
            return Jb[b](c)
        }
        var e = new w, f;
        for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && e.set(f.substr(4), ta(a[f]));
        var h = Db([b, e]);
        h instanceof g && "return" === h.s && (h = h.getData());
        return sa(h)
    }, Sb = function (a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] =
            Nb(a[e], b, c));
        return d
    }, Nb = function (a, b, c) {
        if (ia(a)) {
            var d;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(Nb(a[e], b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                    var h = Eb[f];
                    if (!h || b(h)) return;
                    c[f] = !0;
                    try {
                        d = Mb(Sb(h, b, c))
                    } catch (r) {
                        d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var k = 1; k < a.length; k += 2) d[Nb(a[k], b, c)] = Nb(a[k + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var l = !1, m = 1; m < a.length; m++) {
                        var n = Nb(a[m], b, c);
                        Lb && (l = l || n === Lb.xa);
                        d.push(n)
                    }
                    return Lb &&
                    l ? Lb.Gc(d) : d.join("");
                case "escape":
                    d = Nb(a[1], b, c);
                    if (Lb && ia(a[1]) && "macro" === a[1][0] && Lb.jd(a)) return Lb.vd(d);
                    d = String(d);
                    for (var p = 2; p < a.length; p++) fb[a[p]] && (d = fb[a[p]](d));
                    return d;
                case "tag":
                    var q = a[1];
                    if (!Hb[q]) throw Error("Unable to resolve tag reference " + q + ".");
                    return d = {Eb: a[2], index: q};
                case "zb":
                    var v = Tb({"function": a[1], arg0: a[2], arg1: a[3], ignore_case: a[5]}, b, c);
                    a[4] && (v = !v);
                    return v;
                default:
                    throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Tb = function (a, b,
                      c) {
        if (b(a)) return !1;
        try {
            return Kb(Sb(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return null
    };
    var Ub = null, Xb = function (a) {
        function b(a) {
            for (var b = 0; b < a.length; b++) d[a[b]] = !0
        }

        var c = [], d = [];
        Ub = Vb(a);
        for (var e = 0; e < Fb.length; e++) {
            var f = Fb[e], h = Wb(f);
            if (h) {
                for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                b(f.block || [])
            } else null === h && b(f.block || [])
        }
        var m = [];
        for (e = 0; e < Hb.length; e++) c[e] && !d[e] && (m[e] = !0);
        return m
    }, Wb = function (a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = Ub(b[c]);
            if (!d) return null === d ? null : !1
        }
        var e = a.unless || [];
        for (c = 0; c < e.length; c++) {
            d = Ub(e[c]);
            if (null === d) return null;
            if (d) return !1
        }
        return !0
    };
    var Vb = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = Tb(Gb[c], a));
            return b[c]
        }
    };/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var $b = {}, ac = null;
    $b.m = "UA-1701714-3";
    var bc = null, cc = "//www.googletagmanager.com/a?id=" + $b.m + "&cv=1", dc = {}, ec = {};
    var fc = function () {
    }, gc = function (a) {
        return "function" == typeof a
    }, hc = function (a) {
        return "string" == oa(a)
    }, ic = function (a) {
        return "number" == oa(a) && !isNaN(a)
    }, jc = function (a) {
        return Math.round(Number(a)) || 0
    }, kc = function (a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }, lc = function (a) {
        var b = [];
        if (ia(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }, mc = function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }, nc = function (a, b) {
        if (!ic(a) || !ic(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) +
            a)
    }, oc = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    oc.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    oc.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    oc.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var pc = function () {
        var a = ac.sequence || 0;
        ac.sequence = a + 1;
        return a
    }, qc = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, rc = function (a) {
        var b = !1;
        return function () {
            if (!b) try {
                a()
            } catch (c) {
            }
            b = !0
        }
    };
    var sc = function () {
        var a = function (a) {
            return {
                toString: function () {
                    return a
                }
            }
        };
        return {
            G: a("function"),
            Yb: a("instance_name"),
            Zb: a("live_only"),
            $b: a("malware_disabled"),
            ac: a("once_per_event"),
            tb: a("once_per_load"),
            ub: a("setup_tags"),
            bc: a("tag_id"),
            vb: a("teardown_tags")
        }
    }();
    var tc = new oc, uc = {}, xc = {
        set: function (a, b) {
            ra(vc(a, b), uc)
        }, get: function (a) {
            return wc(a, 2)
        }, reset: function () {
            tc = new oc;
            uc = {}
        }
    }, wc = function (a, b) {
        return 2 != b ? tc.get(a) : yc(a)
    }, yc = function (a, b, c) {
        var d = a.split(".");
        var e = function (a, b) {
            for (var c = 0; void 0 !== a && c < d.length; c++) {
                if (null === a) return !1;
                a = a[d[c]]
            }
            return void 0 !== a || 1 < c ? a : b.length ? e(zc(b.pop()), b) : Ac(d)
        };
        return e(uc.eventModel, [b, c]);
        return Ac(d)
    }, Ac = function (a) {
        for (var b = uc, c = 0; c < a.length; c++) {
            if (null ===
                b) return !1;
            if (void 0 === b) break;
            b = b[a[c]]
        }
        return b
    };
    var zc = function (a) {
        if (a) {
            var b = Ac(["gtag", "targets", a]);
            return qa(b) ? b : void 0
        }
    }, Dc = function (a, b) {
        function c(a) {
            if (a) for (var b in a) a.hasOwnProperty(b) && (d[b] = null)
        }

        var d = {};
        c(uc);
        delete d.eventModel;
        c(zc(a));
        c(zc(b));
        c(uc.eventModel);
        var e = [], f;
        for (f in d) d.hasOwnProperty(f) && e.push(f);
        return e
    };
    var Ec = function (a, b) {
        tc.set(a, b);
        ra(vc(a, b), uc)
    }, vc = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    };
    var Fc = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Gc = {
        customPixels: ["nonGooglePixels"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, Hc = {
        customPixels: ["customScripts", "html"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels",
            "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, Ic = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    };
    var Jc = function (a) {
        var b = wc("gtm.whitelist");
        b = "gtagua gtagaw gtagfl e v oid op cn css ew eq ge gt lc le lt re sw um".split(" ");
        var c = b && Ic(lc(b), Gc), d = wc("gtm.blacklist") ||
            wc("tagTypeBlacklist") || [];
        Fc.test(C.location && C.location.hostname) && (d = lc(d), d.push("nonGooglePixels", "nonGoogleScripts"));
        var e = d && Ic(lc(d), Hc), f = {};
        return function (h) {
            var k = h && h[sc.G];
            if (!k || "string" != typeof k) return !0;
            k = k.replace(/_/g, "");
            if (void 0 !== f[k]) return f[k];
            var l = ec[k] || [], m = a(k);
            if (b) {
                var n;
                if (n = m) a:{
                    if (0 > ja(c, k)) if (l && 0 < l.length) for (var p = 0; p < l.length; p++) {
                        if (0 >
                            ja(c, l[p])) {
                            n = !1;
                            break a
                        }
                    } else {
                        n = !1;
                        break a
                    }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (d) {
                var v;
                if (!(v = 0 <= ja(e, k))) a:{
                    for (var r = l || [], x = new oc, E = 0; E < e.length; E++) x.set(e[E], !0);
                    for (E = 0; E < r.length; E++) if (x.get(r[E])) {
                        v = !0;
                        break a
                    }
                    v = !1
                }
                q = v
            }
            return f[k] = !m || q
        }
    };
    var Kc = function (a) {
        var b = ac.zones;
        !b && a && (b = ac.zones = a());
        return b
    }, Lc = {
        active: !0, isWhitelisted: function () {
            return !0
        }
    };
    var Mc = !1, Nc = 0, Oc = [];

    function Pc(a) {
        if (!Mc) {
            var b = F.createEventObject, c = "complete" == F.readyState, d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Mc = !0;
                for (var e = 0; e < Oc.length; e++) P(Oc[e])
            }
            Oc.push = function () {
                for (var a = 0; a < arguments.length; a++) P(arguments[a]);
                return 0
            }
        }
    }

    function Qc() {
        if (!Mc && 140 > Nc) {
            Nc++;
            try {
                F.documentElement.doScroll("left"), Pc()
            } catch (a) {
                C.setTimeout(Qc, 50)
            }
        }
    }

    var Rc = function (a) {
        Mc ? a() : Oc.push(a)
    };
    var Sc = !1;
    var Tc = function (a) {
        C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
        var b = C.GoogleAnalyticsObject;
        if (!C[b]) {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            C[b] = c
        }
        return C[b]
    }, Uc = function () {
        return C.GoogleAnalyticsObject && C[C.GoogleAnalyticsObject]
    }, Vc = function (a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = Uc();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    };
    var Zc = function () {
        return "&tc=" + Hb.filter(function (a) {
            return a
        }).length
    }, $c = "0.005000" > Math.random(), ad = "", bd = function () {
        ad = [cc, "&v=3&t=t", "&pid=" + nc(), "&rv=46"].join("")
    }, cd = {}, dd = "", ed = void 0, fd = {}, gd = {}, hd = void 0, id = 2, jd = 1E3, kd = function () {
        id = 2
    }, ld = function () {
        var a = ed;
        return void 0 === a ? "" : [ad, cd[a] ? "" : "&es=1", fd[a], Zc(), dd, "&z=0"].join("")
    }, md = function () {
        hd && (C.clearTimeout(hd), hd = void 0);
        void 0 === ed || cd[ed] && !dd || (gd[ed] || 0 >= id-- || 0 >= jd-- ? gd[ed] = !0 : (O(ld()), cd[ed] =
            !0, dd = ""))
    }, nd = function (a, b, c) {
        if ($c && !gd[a] && b) {
            a !== ed && (md(), ed = a);
            var d = c + String(b[sc.G] || "").replace(/_/g, "");
            dd = dd ? dd + "." + d : "&tr=" + d;
            hd || (hd = C.setTimeout(md, 500));
            2022 <= ld().length && md()
        }
    };

    function od(a, b, c, d, e, f) {
        var h = Hb[a], k = pd(a, b, c, d, e, f);
        if (!k) return null;
        var l = Nb(h[sc.ub], f.R, []);
        if (l && l.length) {
            var m = l[0];
            k = od(m.index, b, k, 1 === m.Eb ? e : k, e, f)
        }
        return k
    }

    function pd(a, b, c, d, e, f) {
        function h() {
            var b = Sb(k, f.R);
            b.vtp_gtmOnSuccess = function () {
                nd(f.id, Hb[a], "5");
                c()
            };
            b.vtp_gtmOnFailure = function () {
                nd(f.id, Hb[a], "6");
                d()
            };
            b.vtp_gtmTagId = k.tag_id;
            if (k[sc.$b]) d(); else {
                nd(f.id, k, "1");
                try {
                    Mb(b)
                } catch (E) {
                    nd(f.id,
                        k, "7");
                    e()
                }
            }
        }

        var k = Hb[a];
        if (f.R(k)) return null;
        var l = Nb(k[sc.vb], f.R, []);
        if (l && l.length) {
            var m = l[0], n = od(m.index, b, c, d, e, f);
            if (!n) return null;
            c = n;
            d = 2 === m.Eb ? e : n
        }
        if (k[sc.tb] || k[sc.ac]) {
            var p = k[sc.tb] ? Ib : b, q = c, v = d;
            if (!p[a]) {
                h = rc(h);
                var r = qd(a, p, h);
                c = r.M;
                d = r.aa
            }
            return function () {
                p[a](q, v)
            }
        }
        return h
    }

    function qd(a, b, c) {
        var d = [], e = [];
        b[a] = rd(d, e, c);
        return {
            M: function () {
                b[a] = sd;
                for (var c = 0; c < d.length; c++) d[c]()
            }, aa: function () {
                b[a] = td;
                for (var c = 0; c < e.length; c++) e[c]()
            }
        }
    }

    function rd(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function sd(a) {
        a()
    }

    function td(a, b) {
        b()
    };

    function ud(a) {
        var b = 0, c = 0, d = !1;
        return {
            add: function () {
                c++;
                return rc(function () {
                    b++;
                    d && b >= c && a()
                })
            }, mc: function () {
                d = !0;
                b >= c && a()
            }
        }
    }

    function vd(a, b) {
        if (!$c) return;
        var c = function (a) {
            var d = b.R(Hb[a]) ? "3" : "4", f = Nb(Hb[a][sc.ub], b.R, []);
            f && f.length && c(f[0].index);
            nd(b.id, Hb[a], d);
            var h = Nb(Hb[a][sc.vb], b.R, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }

    var wd = !1;
    var xd = function (a, b) {
        var c = {};
        c[sc.G] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        for (d in void 0) (void 0).hasOwnProperty(d) && (c[d] = (void 0)[d]);
        Hb.push(c);
        return Hb.length - 1
    };
    var yd = /[A-Z]+/, zd = /\s/, Ad = function (a) {
        if (hc(a) && (a = a.trim(), !zd.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (yd.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], na: d}
                }
            }
        }
    };
    var Bd = null, Cd = {}, Dd = {}, Ed;

    function Fd() {
        Bd = Bd || !ac.gtagRegistered;
        ac.gtagRegistered = !0;
        return Bd
    }

    var Gd = function (a, b) {
        var c = {event: a};
        b && (c.eventModel = ra(b, void 0), b.event_callback && (c.eventCallback = b.event_callback), b.event_timeout && (c.eventTimeout = b.event_timeout));
        return c
    };

    function Hd(a) {
        if (void 0 === Dd[a.id]) {
            var b;
            if ("UA" == a.prefix) b = xd("gtagua", {trackingId: a.id}); else if ("AW" == a.prefix) b = xd("gtagaw", {conversionId: a}); else if ("DC" == a.prefix) b = xd("gtagfl", {targetId: a.id}); else return;
            if (!Ed) {
                var c = {name: "send_to", dataLayerVersion: 2}, d = {};
                d[sc.G] = "__v";
                for (var e in c) c.hasOwnProperty(e) && (d["vtp_" + e] = c[e]);
                Eb.push(d);
                Ed = ["macro", Eb.length - 1]
            }
            var f = {arg0: Ed, arg1: a.id, ignore_case: !1};
            f[sc.G] = "_lc";
            Gb.push(f);
            var h = {"if": [Gb.length - 1], add: [b]};
            h["if"] && (h.add || h.block) &&
            Fb.push(h);
            Dd[a.id] = b
        }
    }

    var Qd = {
        event: function (a) {
            var b = a[1];
            if (hc(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!qa(a[2])) return;
                    c = a[2]
                }
                var d = Gd(b, c);
                var e;
                var f = c, h = wc("gtag.fields.send_to", 2);
                hc(h) || (h = "send_to");
                var k = f && f[h];
                void 0 === k && (k = wc(h, 2), void 0 === k && (k = "default"));
                if (hc(k) || ia(k)) {
                    for (var l, m = k.toString().replace(/\s+/g, "").split(","), n = [], p = 0; p < m.length; p++) 0 <= m[p].indexOf("-") ? n.push(m[p]) : n = n.concat(Cd[m[p]] || []);
                    l = n;
                    for (var q = {}, v = 0; v < l.length; ++v) {
                        var r = Ad(l[v]);
                        r && (q[r.id] =
                            r)
                    }
                    var x = [], E;
                    for (E in q) if (q.hasOwnProperty(E)) {
                        var T = q[E];
                        "AW" === T.prefix && T.na[1] && x.push(T.containerId)
                    }
                    for (var A = 0; A < x.length; ++A) delete q[x[A]];
                    var M = [], D;
                    for (D in q) q.hasOwnProperty(D) && M.push(q[D]);
                    e = M
                } else e = void 0;
                if (!e) return;
                var N = Fd();
                N || Id();
                for (var I = [], K = 0; N && K < e.length; K++) {
                    var G = e[K];
                    I.push(G.id);
                    Hd(G)
                }
                d.eventModel = d.eventModel || {};
                0 < e.length ? d.eventModel.send_to = I.join() : delete d.eventModel.send_to;
                return d
            }
        }, set: function (a) {
            var b;
            2 == a.length && qa(a[1]) ?
                b = ra(a[1], void 0) : 3 == a.length && hc(a[1]) && (b = {}, b[a[1]] = a[2]);
            if (b) return b.eventModel = ra(b, void 0), b.event = "gtag.set", b._clear = !0, b
        }, js: function (a) {
            if (2 == a.length && a[1].getTime) return {event: "gtm.js", "gtm.start": a[1].getTime()}
        }, config: function (a) {
            var b = a[2] || {};
            if (2 > a.length || !hc(a[1]) || !qa(b)) return;
            var c = Ad(a[1]);
            if (!c) return;
            Fd() ? Hd(c) : Id();
            var d = c.id, e;
            for (e in Cd) if (Cd.hasOwnProperty(e)) {
                var f = ja(Cd[e], d);
                0 <= f && Cd[e].splice(f, 1)
            }
            var h = c.id, k = b.groups || "default";
            k = k.toString().split(",");
            for (var l = 0; l < k.length; l++) Cd[k[l]] = Cd[k[l]] || [], Cd[k[l]].push(h);
            delete b.groups;
            Ec("gtag.targets." + c.id, void 0);
            Ec("gtag.targets." + c.id, ra(b, void 0));
            return Gd("gtag.config", {send_to: c.id});
        }
    }, Id = rc(function () {
    });
    var Rd = !1, Sd = [];

    function Td() {
        if (!Rd) {
            Rd = !0;
            for (var a = 0; a < Sd.length; a++) P(Sd[a])
        }
    };var Ud = [], Vd = !1, Wd = function (a) {
        var b = a.eventCallback, c = rc(function () {
            gc(b) && P(function () {
                b($b.m)
            })
        }), d = a.eventTimeout;
        d && C.setTimeout(c, Number(d));
        return c
    }, Xd = function () {
        for (var a = !1; !Vd && 0 < Ud.length;) {
            Vd = !0;
            delete uc.eventModel;
            var b = Ud.shift();
            if (gc(b)) try {
                b.call(xc)
            } catch (Jd) {
            } else if (ia(b)) {
                var c = b;
                if (hc(c[0])) {
                    var d = c[0].split("."), e = d.pop(), f = c.slice(1), h = wc(d.join("."), 2);
                    if (void 0 !== h && null !== h) try {
                        h[e].apply(h, f)
                    } catch (Jd) {
                    }
                }
            } else {
                var k = b;
                if (k && ("[object Arguments]" == Object.prototype.toString.call(k) ||
                    Object.prototype.hasOwnProperty.call(k, "callee"))) {
                    a:{
                        var l = b;
                        if (l.length && hc(l[0])) {
                            var m = Qd[l[0]];
                            if (m) {
                                b = m(l);
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) {
                        Vd = !1;
                        continue
                    }
                }
                var n;
                var p = void 0, q = b, v = q._clear;
                for (p in q) q.hasOwnProperty(p) && "_clear" !== p && (v && Ec(p, void 0), Ec(p, q[p]));
                var r = q.event;
                if (r) {
                    var x = q["gtm.uniqueEventId"];
                    x || (x = pc(), q["gtm.uniqueEventId"] = x, Ec("gtm.uniqueEventId", x));
                    bc = r;
                    var E;
                    var T, A, M = q, D = M.event, N = M["gtm.uniqueEventId"], I = ac.zones;
                    A = I ? I.checkState($b.m, N) : Lc;
                    if (A.active) {
                        var K = Wd(M);
                        c:{
                            var G =
                                A.isWhitelisted;
                            if ("gtm.js" == D) {
                                if (wd) {
                                    T = !1;
                                    break c
                                }
                                wd = !0
                            }
                            var L = N, H = D;
                            if ($c && !(0 >= jd) && ed !== L) {
                                md();
                                ed = L;
                                dd = "";
                                var Q = fd, Y = L, ma, wa = H;
                                ma = 0 === wa.indexOf("gtm.") ? encodeURIComponent(wa) : "*";
                                Q[Y] = "&e=" + ma + "&eid=" + L;
                                hd || (hd = C.setTimeout(md, 500))
                            }
                            var gb = Jc(G), $a = {id: N, name: D, Ac: K || fc, R: gb, La: Xb(gb)};
                            for (var Bc, Pb = $a, Md = ud(Pb.Ac), hf = [], Qb = [], hb = 0; hb < Hb.length; hb++) if (Pb.La[hb]) {
                                var jf = Hb[hb];
                                var ub = Md.add();
                                try {
                                    var Nd = od(hb, hf, ub, ub, ub, Pb);
                                    Nd ? Qb.push(Nd) : (vd(hb, Pb), ub())
                                } catch (Jd) {
                                    ub()
                                }
                            }
                            Md.mc();
                            for (var Cc = 0; Cc < Qb.length; Cc++) Qb[Cc]();
                            Bc = 0 < Qb.length;
                            if ("gtm.js" === D || "gtm.sync" === D) d:{
                            }
                            if (Bc) {
                                for (var kf = {
                                    __cl: !0,
                                    __evl: !0,
                                    __fsl: !0,
                                    __hl: !0,
                                    __jel: !0,
                                    __lcl: !0,
                                    __sdl: !0,
                                    __tl: !0,
                                    __ytl: !0
                                }, Rb = 0; Rb < $a.La.length; Rb++) if ($a.La[Rb]) {
                                    var Pd = Hb[Rb];
                                    if (Pd && !kf[Pd[sc.G]]) {
                                        T = !0;
                                        break c
                                    }
                                }
                                T = !1
                            } else T = Bc
                        }
                        E = T ? !0 : !1
                    } else E = !1;
                    bc = null;
                    n = E
                } else n = !1;
                a = n || a
            }
            Vd = !1
        }
        return !a
    }, Yd = function () {
        var a = Xd();
        try {
            var b = C["dataLayer"].hide;
            if (b && void 0 !== b[$b.m] && b.end) {
                b[$b.m] = !1;
                var c = !0, d;
                for (d in b) if (b.hasOwnProperty(d) &&
                    !0 === b[d]) {
                    c = !1;
                    break
                }
                c && (b.end(), b.end = null)
            }
        } catch (e) {
        }
        return a
    }, Zd = function () {
        var a = Da("dataLayer", []), b = Da("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Oc.push(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        Sd.push(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        var c = a.push;
        a.push = function () {
            var b = [].slice.call(arguments, 0);
            c.apply(a, b);
            for (Ud.push.apply(Ud, b); 300 < this.length;) this.shift();
            return Xd()
        };
        Ud.push.apply(Ud, a.slice(0));
        P(Yd)
    };
    var $d = {};
    $d.xa = new String("undefined");
    $d.Pa = {};
    var ae = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === $d.xa ? b : a[d]);
            return c.join("")
        }
    };
    ae.prototype.toString = function () {
        return this.resolve("undefined")
    };
    ae.prototype.valueOf = ae.prototype.toString;
    $d.Gc = function (a) {
        return new ae(a)
    };
    var be = {};
    $d.Bd = function (a, b) {
        var c = pc();
        be[c] = [a, b];
        return c
    };
    $d.Ab = function (a) {
        var b = a ? 0 : 1;
        return function (a) {
            var c = be[a];
            if (c && "function" === typeof c[b]) c[b]();
            be[a] = void 0
        }
    };
    $d.jd = function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    $d.vd = function (a) {
        if (a === $d.xa) return a;
        var b = pc();
        $d.Pa[b] = a;
        return 'google_tag_manager["' + $b.m + '"].macro(' + b + ")"
    };
    $d.cc = ae;
    var ce = new oc, de = function (a, b) {
        function c(a) {
            var b = S(a), c = R(b, "protocol"), d = R(b, "host", !0), e = R(b, "port"),
                f = R(b, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === c || "http" == c && "80" == e || "https" == c && "443" == e) c = "web", e = "default";
            return [c, d, e, f]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    };

    function ee(a) {
        var b = a.arg0, c = a.arg1;
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var d;
                a:{
                    if (b) {
                        var e = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var f = 0; f < e.length; f++) if (b[e[f]]) {
                                d = b[e[f]](c);
                                break a
                            }
                        } catch (r) {
                        }
                    }
                    d = !1
                }
                return d;
            case "_ew":
                var h, k;
                h = String(b);
                k = String(c);
                var l = h.length - k.length;
                return 0 <= l && h.indexOf(k, l) == l;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var m;
                m = b.toString().split(",");
                return 0 <= ja(m, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var n;
                var p = a.ignore_case ? "i" : void 0;
                try {
                    var q = String(c) + p, v = ce.get(q);
                    v || (v = new RegExp(c, p), ce.set(q, v));
                    n = v.test(b)
                } catch (r) {
                    n = !1
                }
                return n;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return de(b, c)
        }
        return !1
    };

    function fe(a, b, c, d) {
        return (d || "https:" == C.location.protocol ? a : b) + c
    }

    function ge(a, b) {
        for (var c = b || (a instanceof t ? new t : new w), d = a.L(), e = 0; e < d.length(); e++) {
            var f = d.get(e);
            if (a.has(f)) {
                var h = a.get(f);
                h instanceof t ? (c.get(f) instanceof t || c.set(f, new t), ge(h, c.get(f))) : h instanceof w ? (c.get(f) instanceof w || c.set(f, new w), ge(h, c.get(f))) : c.set(f, h)
            }
        }
        return c
    }

    function he() {
        return $b.m
    }

    function ie() {
        return (new Date).getTime()
    }

    function je(a, b) {
        return ta(wc(a, b || 2))
    }

    function ke() {
        return bc
    }

    function le(a) {
        return La('<a href="' + a + '"></a>')[0].href
    }

    function me(a) {
        return jc(sa(a))
    }

    function ne(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    }

    function oe(a, b) {
        return nc(a, b)
    }

    function pe(a, b, c) {
        if (!(a instanceof t)) return null;
        for (var d = new w, e = !1, f = 0; f < a.length(); f++) {
            var h = a.get(f);
            h instanceof w && h.has(b) && h.has(c) && (d.set(h.get(b), h.get(c)), e = !0)
        }
        return e ? d : null
    }

    var qe = function () {
        var a = new Ca;
        a.addAll(Oa());
        a.addAll({
            buildSafeUrl: fe,
            decodeHtmlUrl: le,
            copy: ge,
            generateUniqueNumber: pc,
            getContainerId: he,
            getCurrentTime: ie,
            getDataLayerValue: je,
            getEventName: ke,
            makeInteger: me,
            makeString: ne,
            randomInteger: oe,
            tableToMap: pe
        });
        return function (b) {
            return a.get(b)
        }
    };
    var re = new Qa, se = function () {
        var a = data.runtime || [];
        Db = function (a) {
            return re.I(a)
        };
        Kb = ee;
        Pa(re, qe());
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (!ia(c) || 3 > c.length) {
                if (0 == c.length) continue;
                break
            }
            re.I(c)
        }
    };
    var te = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var ue = function (a) {
        return encodeURIComponent(a)
    }, ve = function (a) {
        var b = ["veinteractive.com", "ve-interactive.cn"];
        if (!a) return !1;
        var c = R(S(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var U = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }, we = function (a, b) {
        ra(a, b)
    }, xe = function (a) {
        return jc(a)
    }, ye = function (a, b) {
        return ja(a, b)
    };
    var ze = function (a) {
        var b = {
            "gtm.element": a,
            "gtm.elementClasses": a.className,
            "gtm.elementId": a["for"] || Ia(a, "id") || "",
            "gtm.elementTarget": a.formTarget || a.target || ""
        };
        b["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
        return b
    }, Ae = function (a) {
        ac.hasOwnProperty("autoEventsSettings") || (ac.autoEventsSettings = {});
        var b = ac.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }, Be = function (a, b, c, d) {
        var e = Ae(a), f = qc(e, b, d);
        e[b] =
            c(f)
    }, Ce = function (a, b, c) {
        var d = Ae(a);
        return qc(d, b, c)
    };
    var De = /(^|\.)doubleclick\.net$/i, Ee = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Fe = function (a, b, c) {
        for (var d = String(b || F.cookie).split(";"), e = [], f = 0; f < d.length; f++) {
            var h = d[f].split("="), k = mc(h[0]);
            if (k && k == a) {
                var l = mc(h.slice(1).join("="));
                l && !1 !== c && (l = decodeURIComponent(l));
                e.push(l)
            }
        }
        return e
    }, Ge = function (a, b, c, d, e, f) {
        f && (b = encodeURIComponent(b));
        var h = a + "=" + b + "; ";
        c && (h += "path=" + c + "; ");
        e && (h += "expires=" + e.toGMTString() + "; ");
        var k, l;
        if ("auto" == d) {
            var m = R(C.location, "host", !0).split(".");
            if (4 ==
                m.length && /^[0-9]*$/.exec(m[3])) l = ["none"]; else {
                for (var n = [], p = m.length - 2; 0 <= p; p--) n.push(m.slice(p).join("."));
                n.push("none");
                l = n
            }
        } else l = [d || "none"];
        k = l;
        for (var q = F.cookie, v = 0; v < k.length; v++) {
            var r = h, x = k[v], E = c;
            if (De.test(C.location.hostname) || "/" == E && Ee.test(x)) break;
            "none" != k[v] && (r += "domain=" + k[v] + ";");
            F.cookie = r;
            if (q != F.cookie || 0 <= ja(Fe(a), b)) break
        }
    };
    var He = !1;
    if (F.querySelectorAll) try {
        var Ie = F.querySelectorAll(":root");
        Ie && 1 == Ie.length && Ie[0] == F.documentElement && (He = !0)
    } catch (a) {
    }
    var Je = He;
    var Ke = function (a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push(f[1])
        }
        var h = [];
        if (!b || 0 == b.length) return h;
        for (var k = 0; k < b.length; k++) {
            var l = b[k].split(".");
            3 == l.length && "GCL" == l[0] && l[1] && h.push(l[2])
        }
        return h
    };
    var Le = /^\w+$/, Me = /^[\w-]+$/, Ne = /^\d+\.fls\.doubleclick\.net$/;

    function Oe(a) {
        return a && "string" == typeof a && a.match(Le) ? a : "_gcl"
    }

    function Pe(a) {
        if (a) {
            if ("string" == typeof a) {
                var b = Oe(a);
                return {ia: b, ha: b}
            }
            if (a && "object" == typeof a) return {ia: Oe(a.dc), ha: Oe(a.aw)}
        }
        return {ia: "_gcl", ha: "_gcl"}
    }

    function Qe(a) {
        var b = S(C.location.href), c = R(b, "host", !1);
        if (c && c.match(Ne)) {
            var d = R(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Re(a) {
        return a.filter(function (a) {
            return Me.test(a)
        })
    }

    var Te = function (a) {
        var b = Qe("gclaw");
        if (b) return b.split(".");
        var c = Pe(a);
        if ("_gcl" == c.ha) {
            var d = Se();
            if (d && (null == d.K || "aw.ds" == d.K)) return [d.ka]
        }
        return Re(Ke(c.ha + "_aw"))
    }, Ue = function (a) {
        var b = Qe("gcldc");
        if (b) return b.split(".");
        var c = Pe(a);
        if ("_gcl" == c.ia) {
            var d = Se();
            if (d && ("ds" == d.K || "aw.ds" == d.K)) return [d.ka]
        }
        return Re(Ke(c.ia + "_dc"))
    };

    function Se() {
        var a = S(C.location.href), b = R(a, "query", !1, void 0, "gclid"), c = R(a, "query", !1, void 0, "gclsrc");
        if (!b || !c) {
            var d = R(a, "fragment");
            b = b || Ma(d, "gclid");
            c = c || Ma(d, "gclsrc")
        }
        return void 0 !== b && b.match(Me) ? {ka: b, K: c} : null
    }

    var Ve = function (a, b, c) {
        var d = Pe(a);
        c = c || "auto";
        b = b || "/";
        var e = Se();
        if (null != e) {
            var f = (new Date).getTime(), h = new Date(f + 7776E6), k = ["GCL", Math.round(f / 1E3), e.ka].join(".");
            e.K && "aw.ds" != e.K || Ge(d.ha + "_aw", k, b, c, h, !0);
            "aw.ds" != e.K && "ds" != e.K || Ge(d.ia + "_dc", k, b, c, h, !0)
        }
    }, We = function () {
        var a = Qe("gac");
        if (a) return decodeURIComponent(a);
        for (var b = [], c = F.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({lb: f[1], value: f[2]})
        }
        var h = {};
        if (b && b.length) for (var k =
            0; k < b.length; k++) {
            var l = b[k].value.split(".");
            "1" == l[0] && 3 == l.length && l[1] && (h[b[k].lb] || (h[b[k].lb] = []), h[b[k].lb].push({
                timestamp: l[1],
                ka: l[2]
            }))
        }
        var m = [], n;
        for (n in h) if (h.hasOwnProperty(n)) {
            for (var p = [], q = h[n], v = 0; v < q.length; v++) p.push(q[v].ka);
            p = Re(p);
            p.length && m.push(n + ":" + p.join(","))
        }
        return m.join(";")
    };
    var Xe;
    a:{
        Xe = "g";
        break a;
        Xe = "G"
    }
    var Ye = {"": "n", UA: "u", AW: "a", DC: "d", GTM: Xe}, Ze = function (a) {
        var b = $b.m.split("-"), c = b[0].toUpperCase();
        return (Ye[c] || "i") + "46" + (a && "GTM" === c ? b[1] : "")
    };
    var $e = function (a) {
        return !(void 0 === a || null === a || 0 === (a + "").length)
    }, af = function (a, b) {
        var c;
        if (2 === b.B) return a("ord", nc(1E11, 1E13)), !0;
        if (3 === b.B) return a("ord", "1"), a("num", nc(1E11, 1E13)), !0;
        if (4 === b.B) return $e(b.sessionId) && a("ord", b.sessionId), !0;
        if (5 === b.B) c = "1"; else if (6 === b.B) c = b.Tb; else return !1;
        $e(c) && a("qty", c);
        $e(b.Ta) && a("cost", b.Ta);
        $e(b.mb) && a("ord", b.mb);
        return !0
    }, bf = encodeURIComponent, cf = function (a, b) {
        function c(a, b, c) {
            f.hasOwnProperty(a) || (b += "", e += ";" + a + "=" + (c ? b : bf(b)))
        }

        var d = a.Va,
            e = a.protocol;
        e += a.Ma ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
        e += ";src=" + bf(d) + (";type=" + bf(a.Wa)) + (";cat=" + bf(a.fa));
        var f = a.Ic || {}, h;
        for (h in f) f.hasOwnProperty(h) && (e += ";" + bf(h) + "=" + bf(f[h] + ""));
        if (af(c, a)) {
            $e(a.ob) && c("u", a.ob);
            $e(a.tran) && c("tran", a.tran);
            c("gtm", Ze());
            if (a.Sa) {
                var k = Ue(a.Ea);
                k && k.length && c("gcldc", k.join("."));
                var l = Te(a.Ea);
                l && l.length && c("gclaw", l.join("."));
                var m = We();
                m && c("gac", m)
            }
            $e(a.eb) && c("prd", a.eb, !0);
            for (var n in a.sa) a.sa.hasOwnProperty(n) &&
            c(n, a.sa[n]);
            e += b || "";
            $e(a.Ia) && c("~oref", a.Ia);
            a.Ma ? Fa(e + "?", a.M) : O(e + "?", a.M, a.aa)
        } else P(a.aa)
    };
    var rf = "www.googletagmanager.com/gtm.js";
    rf = "www.googletagmanager.com/gtag/js";
    var sf = rf, tf = function (a, b, c, d) {
            Ga(a, b, c, d)
        }, uf = function (a, b) {
            return C.setTimeout(a, b)
        }, vf = function (a, b, c) {
            J(a, b, c)
        }, wf = {}, xf = function (a, b, c) {
            var d = wf[a];
            if (void 0 === d) {
                var e = function (a, b) {
                    return function () {
                        a.status = b;
                        for (var c = 2 == b ? a.Wb : a.Db, d = 0; d < c.length; d++) C.setTimeout(c[d], 0)
                    }
                };
                d = {status: 1, Wb: [], Db: [], Fd: void 0};
                d.fe = J(a, e(d, 2), e(d, 3));
                wf[a] = d
            }
            0 === d.status && (d.Fd(), d.status = 2);
            2 === d.status ? b && b() : 3 === d.status ? c && c() : 1 === d.status && (b && d.Wb.push(b), c && d.Db.push(c))
        }, yf = function () {
            return C.location.href
        },
        zf = function (a) {
            return R(S(a), "fragment")
        }, V = function (a, b) {
            return wc(a, b || 2)
        }, Af = function (a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return C["dataLayer"].push(a)
        }, Bf = function (a, b) {
            C[a] = b
        }, W = function (a, b, c) {
            b && (void 0 === C[a] || c && !C[a]) && (C[a] = b);
            return C[a]
        }, Cf = function (a, b) {
            var c;
            a:{
                var d;
                d = 100;
                for (var e = {}, f = 0; f < b.length; f++) e[b[f]] = !0;
                for (var h = a, k = 0; h && k <= d; k++) {
                    if (e[String(h.tagName).toLowerCase()]) {
                        c = h;
                        break a
                    }
                    h = h.parentElement
                }
                c = null
            }
            return c
        }, X = function (a, b, c, d) {
            var e = !d && "http:" ==
                C.location.protocol;
            e && (e = 2 !== Df());
            return (e ? b : a) + c
        };
    var Ef = function (a) {
        var b = 0;
        return b
    }, Ff = function (a) {
    }, Gf = function (a) {
        var b = !1;
        return b
    }, Hf = function (a, b) {
        var c;
        a:{
            if (a &&
                ia(a)) for (var d = 0; d < a.length; d++) if (a[d] && b(a[d])) {
                c = a[d];
                break a
            }
            c = void 0
        }
        return c
    }, If = function (a, b, c, d) {
        Be(a, b, c, d)
    }, Jf = function (a, b, c) {
        return Ce(a, b, c)
    }, Kf = function (a) {
        return !!Ce(a, "init", !1)
    }, Lf = function (a) {
        Ae(a).init = !0
    };
    var Nf = void 0, Of = function (a) {
        if (!Nf) {
            var b = function () {
                var a = F.body;
                if (a) if (W("MutationObserver")) (new MutationObserver(function () {
                    for (var a = 0; a < Nf.length; a++) P(Nf[a])
                })).observe(a, {childList: !0, subtree: !0}); else {
                    var b = !1;
                    tf(a, "DOMNodeInserted", function () {
                        b || (b = !0, P(function () {
                            b = !1;
                            for (var a = 0; a < Nf.length; a++) P(Nf[a])
                        }))
                    })
                }
            };
            Nf = [];
            F.body ? b() : P(b)
        }
        Nf.push(a)
    }, Df = function () {
        var a = sf;
        a = a.toLowerCase();
        for (var b = "https://" + a, c = "http://" + a, d = 1, e = F.getElementsByTagName("script"), f = 0; f < e.length && 100 > f; f++) {
            var h =
                e[f].src;
            if (h) {
                h = h.toLowerCase();
                if (0 === h.indexOf(c)) return 3;
                1 === d && 0 === h.indexOf(b) && (d = 2)
            }
        }
        return d
    };
    var Pf = function (a, b) {
        return yc(a, b, void 0)
    };
    var Qf = function (a) {
        var b = sf + "?id=" + encodeURIComponent(a) + "&l=dataLayer", c = X("https://", "http://", b);
        J(c, void 0, void 0)
    };
    var Sf = function (a, b, c) {
        a instanceof $d.cc && (a = a.resolve($d.Bd(b, c)), b = fc);
        return {Xa: a, M: b}
    };
    var Z = {a: {}};

    Z.a.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.b = "e";
            Z.__e.g = !0
        })(function () {
            return bc
        })
    }();
    Z.a.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.b = "v";
            Z.__v.g = !0
        })(function (a) {
            var b = V(a.vtp_name.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== b ? b : a.vtp_defaultValue
        })
    }();
    Z.a.gtagaw = ["google"], function () {
        var a = !1, b = !1, c = [],
            d = "send_to aw_remarketing aw_remarketing_only custom_params send_page_view language value currency transaction_id user_id conversion_linker conversion_cookie_prefix page_location page_referrer phone_conversion_number phone_conversion_callback phone_conversion_css_class items aw_merchant_id aw_feed_country aw_feed_language discount disable_merchant_reported_purchases".split(" "),
            e = function (a) {
                var b = W("google_trackConversion"), c = a.gtm_onFailure;
                "function" ==
                typeof b ? b(a) || c() : c()
            }, f = function () {
                for (; 0 < c.length;) e(c.shift())
            }, h = function () {
                a || (a = !0, vf(X("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function () {
                    f();
                    c = {push: e}
                }, function () {
                    f();
                    a = !1
                }))
            }, k = function (a, c, d, e) {
                if (c) {
                    var f = a.na[0], h = a.na[1], k = W("_googWcmImpl", function () {
                        k.q = k.q || [];
                        k.q.push(arguments)
                    });
                    W("_googWcmAk", f);
                    b || (b = !0, vf(X("https://", "http://", "www.gstatic.com/wcm/loader.js")));
                    var l = {ak: f, cl: h};
                    void 0 === d && (l.autoreplace = c);
                    k(2, d, l, c, e, new Date, e)
                }
            }, l = function (a) {
                if (a) {
                    for (var b =
                        [], c = 0; c < a.length; ++c) {
                        var d = a[c];
                        d && b.push({item_id: d.id, quantity: d.quantity, value: d.price})
                    }
                    return b
                }
            };
        (function (a) {
            Z.__gtagaw = a;
            Z.__gtagaw.b = "gtagaw";
            Z.__gtagaw.g = !0
        })(function (a) {
            var b = a.vtp_conversionId, e = bc, f = "gtag.config" == e, m = b.na[0], r = b.na[1], x = void 0 !== r,
                E = b.containerId, T = x ? b.id : void 0, A = function (a) {
                    return yc(a, E, T)
                }, M = !1 !== A("conversion_linker"), D = A("conversion_cookie_prefix");
            f && M && Ve(D, void 0, void 0);
            if (f && x) {
                var N = A("phone_conversion_number"), I = A("phone_conversion_callback"),
                    K = A("phone_conversion_css_class"),
                    G = A("phone_conversion_options");
                k(b, N, I || K, G)
            }
            var L = !1 === A("aw_remarketing") || !1 === A("send_page_view");
            if (!f || !x && !L) {
                !0 === A("aw_remarketing_only") && (x = !1);
                var H = {
                    google_conversion_id: m,
                    google_remarketing_only: !x,
                    onload_callback: a.vtp_gtmOnSuccess,
                    gtm_onFailure: a.vtp_gtmOnFailure,
                    google_conversion_format: "3",
                    google_conversion_color: "ffffff",
                    google_conversion_domain: "",
                    google_conversion_label: r,
                    google_conversion_language: A("language"),
                    google_conversion_value: A("value"),
                    google_conversion_currency: A("currency"),
                    google_conversion_order_id: A("transaction_id"),
                    google_user_id: A("user_id"),
                    google_conversion_page_url: A("page_location"),
                    google_conversion_referrer_url: A("page_referrer"),
                    google_gtm: Ze(void 0),
                    google_read_gcl_cookie_opt_out: !M
                };
                M && D && (qa(D) ? H.google_gcl_cookie_prefix = D.aw : H.google_gcl_cookie_prefix = D);
                var Q = function () {
                    var a = A("custom_params"), b = {event: e};
                    if (ia(a)) {
                        for (var c = 0; c < a.length; ++c) {
                            var f = a[c], h = A(f);
                            void 0 !== h && (b[f] = h)
                        }
                        return b
                    }
                    var k = A("eventModel");
                    if (!k) return null;
                    ra(k, b);
                    for (var l =
                        0; l < d.length; ++l) delete b[d[l]];
                    return b
                }();
                Q && (H.google_custom_params = Q);
                if (x && "purchase" == e && A("aw_merchant_id")) {
                    H.google_conversion_merchant_id = A("aw_merchant_id");
                    H.google_basket_feed_country = A("aw_feed_country");
                    H.google_basket_feed_language = A("aw_feed_language");
                    H.google_basket_discount = A("discount");
                    H.google_basket_transaction_type = e;
                    H.google_disable_merchant_reported_conversions = !1 !== A("disable_merchant_reported_purchases");
                    var Y = l(A("items"));
                    Y && (H.google_conversion_items = Y)
                }
                c.push(H)
            }
            h()
        })
    }();


    Z.a.gtagfl = [], function () {
        function a(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) {
                var c = {
                    standard: 2,
                    unique: 3,
                    per_session: 4,
                    transactions: 5,
                    items_sold: 6,
                    "": 1
                }[(b[5] || "").toLowerCase()];
                if (c) return {
                    containerId: "DC-" + b[1],
                    Xb: b[3] ? a : "",
                    gc: b[1],
                    fc: b[3] || "",
                    fa: b[4] || "",
                    B: c
                }
            }
        }

        function b(a, b) {
            function c(b, c, e) {
                void 0 !== e && 0 !== (e + "").length && d.push(b + c + ":" + a(e + ""))
            }

            var d = [], e = b("items") || [];
            if (ia(e)) for (var l = 0; l < e.length; l++) {
                var m = e[l], n = l + 1;
                c("i", n, m.id);
                c("p", n, m.price);
                c("q", n, m.quantity);
                c("c", n, b("country"));
                c("l", n, b("language"))
            }
            return d.join("|")
        }

        function c(a, b, c) {
            var d = /^u([1-9]\d?|100)$/, e = a("custom_map") || {}, f = Dc(b, c), m = {}, n = {};
            if (qa(e)) for (var p in e) if (e.hasOwnProperty(p) && d.test(p)) {
                var q = e[p];
                hc(q) && (m[p] = q)
            }
            for (var v = 0; v < f.length; v++) {
                var r = f[v];
                d.test(r) && (m[r] = r)
            }
            for (var x in m) m.hasOwnProperty(x) && (n[x] = a(m[x]));
            return n
        }

        (function (a) {
            Z.__gtagfl = a;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0
        })(function (d) {
            var e = d.vtp_gtmOnSuccess, f = d.vtp_gtmOnFailure, h = a(d.vtp_targetId);
            if (h) {
                var k =
                    function (a) {
                        return yc(a, h.containerId, h.Xb || void 0)
                    }, l = !1 !== k("conversion_linker"), m = k("conversion_cookie_prefix");
                if ("gtag.config" === bc) l && Ve(m, void 0, void 0), P(e); else {
                    var n = {}, p = k("dc_custom_params");
                    if (qa(p)) for (var q in p) if (p.hasOwnProperty(q)) {
                        var v = p[q];
                        void 0 !== v && null !== v && (n[q] = v)
                    }
                    var r = "";
                    if (5 === h.B || 6 === h.B) r = b(ue, k);
                    var x = c(k, h.containerId, h.Xb), E = 3 === Df(), T = !0 === k("allow_custom_scripts"), A = {
                        fa: h.fa,
                        Sa: l,
                        Ea: m,
                        Ta: k("value"),
                        B: h.B,
                        Ic: n,
                        Va: h.gc,
                        Wa: h.fc,
                        aa: f,
                        M: e,
                        Ia: Na(S(yf())),
                        eb: r,
                        protocol: E ?
                            "http:" : "https:",
                        Tb: k("quantity"),
                        Ma: T,
                        sessionId: k("session_id"),
                        mb: k("transaction_id"),
                        sa: x
                    };
                    cf(A, void 0)
                }
            } else P(f)
        })
    }();


    Z.a.gtagua = ["google"], function () {
        var a, b = {
                client_id: 1,
                client_storage: "storage",
                cookie_name: 1,
                cookie_domain: 1,
                cookie_expires: 1,
                cookie_update: 1,
                sample_rate: 1,
                site_speed_sample_rate: 1,
                use_amp_client_id: 1,
                store_gac: 1,
                conversion_linker: "storeGac"
            }, c = {
                anonymize_ip: 1,
                app_id: 1,
                app_installer_id: 1,
                app_name: 1,
                app_version: 1,
                campaign: {
                    name: "campaignName",
                    source: "campaignSource",
                    medium: "campaignMedium",
                    term: "campaignTerm",
                    content: "campaignContent",
                    id: "campaignId"
                },
                currency: "currencyCode",
                description: "exDescription",
                fatal: "exFatal",
                language: 1,
                non_interaction: 1,
                page_hostname: "hostname",
                page_referrer: "referrer",
                page_path: "page",
                page_location: "location",
                page_title: "title",
                screen_name: 1,
                transport_type: "transport",
                user_id: 1
            }, d = {
                content_id: 1,
                event_category: 1,
                event_action: 1,
                event_label: 1,
                link_attribution: 1,
                linker: 1,
                method: 1,
                name: 1,
                send_page_view: 1,
                value: 1
            }, e = {cookie_name: 1, cookie_expires: "duration", levels: 1}, f = {
                anonymize_ip: 1,
                fatal: 1,
                non_interaction: 1,
                use_amp_client_id: 1,
                send_page_view: 1,
                store_gac: 1,
                conversion_linker: 1
            },
            h = function (a, b, c, d) {
                if (void 0 !== c) if (f[b] && (c = kc(c)), "anonymize_ip" != b || c || (c = void 0), 1 === a) d[k(b)] = c; else if (hc(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
            }, k = function (a) {
                return a && hc(a) ? a.replace(/(_[a-z])/g, function (a) {
                    return a[1].toUpperCase()
                }) : a
            }, l = function (a, b, c) {
                a.hasOwnProperty(b) || (a[b] = c)
            }, m = function (a, e, f) {
                var k = {}, m = {}, n = {}, p = Pf("custom_map", a);
                if (qa(p)) for (var q in p) if (p.hasOwnProperty(q) && /^(dimension|metric)\d+$/.test(q)) {
                    var r = Pf(p[q], a);
                    void 0 !==
                    r && l(m, q, r)
                }
                for (var x = Dc(a, void 0), v = 0; v < x.length; ++v) {
                    var G = x[v], L = Pf(G, a);
                    d.hasOwnProperty(G) ? h(d[G], G, L, k) : c.hasOwnProperty(G) ? h(c[G], G, L, m) : b.hasOwnProperty(G) ? h(b[G], G, L, n) : /^(dimension|metric|content_group)\d+$/.test(G) && h(1, G, L, m)
                }
                var H = String(bc);
                l(n, "cookieDomain", "auto");
                l(m, "forceSSL", !0);
                var Q = "general";
                0 <= ye("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), H) ? Q = "ecommerce" : 0 <= ye("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "),
                    H) ? Q = "engagement" : "exception" == H && (Q = "error");
                l(k, "eventCategory", Q);
                0 <= ye(["view_item", "view_item_list", "view_promotion", "view_search_results"], H) && l(m, "nonInteraction", !0);
                "login" == H || "sign_up" == H || "share" == H ? l(k, "eventLabel", Pf("method", a)) : "search" == H || "view_search_results" == H ? l(k, "eventLabel", Pf("search_term", a)) : "select_content" == H && l(k, "eventLabel", Pf("content_type", a));
                var Y = k.linker || {};
                if (Y.accept_incoming || 0 != Y.accept_incoming && Y.domains) n.allowLinker = !0;
                !1 === Pf("allow_display_features",
                    a) && (m.displayFeaturesTask = null);
                n.name = e;
                m["&gtm"] = Ze(!0);
                m.hitCallback = f;
                k.J = m;
                k.Bb = n;
                return k
            }, n = function (a) {
                function b(a) {
                    var b = ra(a, void 0);
                    b.list = a.list_name;
                    b.listPosition = a.list_position;
                    b.position = a.list_position || a.creative_slot;
                    b.creative = a.creative_name;
                    return b
                }

                function c(a) {
                    for (var c = [], d = 0; a && d < a.length; d++) a[d] && c.push(b(a[d]));
                    return c.length ? c : void 0
                }

                function d() {
                    return {
                        id: e("transaction_id"),
                        affiliation: e("affiliation"),
                        revenue: e("value"),
                        tax: e("tax"),
                        shipping: e("shipping"),
                        coupon: e("coupon"),
                        list: e("list_name")
                    }
                }

                var e = function (b) {
                    return yc(b, a, void 0)
                }, f = e("items"), h = e("custom_map");
                if (qa(h)) for (var k = 0; f && k < f.length; ++k) {
                    var m = f[k], n;
                    for (n in h) h.hasOwnProperty(n) && /^(dimension|metric)\d+$/.test(n) && l(m, n, m[h[n]])
                }
                var p = null, q = bc, v = e("promotions");
                "purchase" == q || "refund" == q ? p = {
                    action: q,
                    ea: d(),
                    ba: c(f)
                } : "add_to_cart" == q ? p = {action: "add", ba: c(f)} : "remove_from_cart" == q ? p = {
                    action: "remove",
                    ba: c(f)
                } : "view_item" == q ? p = {action: "detail", ea: d(), ba: c(f)} : "view_item_list" == q ? p = {
                    action: "impressions",
                    dd: c(f)
                } : "view_promotion" == q ? p = {
                    action: "promo_view",
                    fb: c(v)
                } : "select_content" == q && v && 0 < v.length ? p = {
                    action: "promo_click",
                    fb: c(v)
                } : "select_content" == q ? p = {
                    action: "click",
                    ea: {list: e("list_name")},
                    ba: c(f)
                } : "begin_checkout" == q || "checkout_progress" == q ? p = {
                    action: "checkout",
                    ba: c(f),
                    ea: {step: "begin_checkout" == q ? 1 : e("checkout_step"), option: e("checkout_option")}
                } : "set_checkout_option" == q && (p = {
                    action: "checkout_option",
                    ea: {step: e("checkout_step"), option: e("checkout_option")}
                });
                p && (p.Wd = e("currency"));
                return p
            },
            p = {}, q = function (a, b) {
                var c = p[a];
                p[a] = ra(b, void 0);
                if (!c) return !1;
                for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
                for (d in c) if (c.hasOwnProperty(d) && c[d] !== b[d]) return !0;
                return !1
            };
        (function (a) {
            Z.__gtagua = a;
            Z.__gtagua.b = "gtagua";
            Z.__gtagua.g = !0
        })(function (b) {
            var c = b.vtp_trackingId, d = Tc(void 0), f = "gtag_" + c.split("-").join("_"), p = function (a) {
                var b = [].slice.call(arguments, 0);
                b[0] = f + "." + b[0];
                d.apply(window, b)
            }, v = function () {
                var a = function (a, b) {
                    for (var c = 0; b && c < b.length; c++) p(a, b[c])
                }, b = n(c);
                if (b) {
                    var d = b.action;
                    if ("impressions" == d) a("ec:addImpression", b.dd); else if ("promo_click" == d || "promo_view" == d) {
                        var e = b.fb;
                        a("ec:addPromo", b.fb);
                        e && 0 < e.length && "promo_click" == d && p("ec:setAction", d)
                    } else a("ec:addProduct", b.ba), p("ec:setAction", d, b.ea)
                }
            }, M = function () {
                var a = Pf("optimize_id", c);
                a && (p("require", a, {dataLayer: "dataLayer"}), p("require", "render"))
            }, D = m(c, f, b.vtp_gtmOnSuccess);
            q(f, D.Bb) && d(function () {
                Uc() && Uc().remove(f)
            });
            d("create", c, D.Bb);
            (function () {
                var a = Pf("custom_map", c);
                d(function () {
                    if (qa(a)) {
                        var b =
                            D.J, c = Uc().getByName(f), d;
                        for (d in a) if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d)) {
                            var e = c.get(k(a[d]));
                            l(b, d, e)
                        }
                    }
                })
            })();
            (function (a) {
                if (a) {
                    var b = {};
                    if (qa(a)) for (var c in e) e.hasOwnProperty(c) && h(e[c], c, a[c], b);
                    p("require", "linkid", b)
                }
            })(D.linkAttribution);
            var N = D.linker;
            N && N.domains && Vc(f + ".", N.domains, !!N.use_anchor, !!N.decorate_forms);
            var I = function (a, b, c) {
                c && (b = "" + b);
                D.J[a] = b
            }, K = bc;
            "page_view" == K ? (M(), p("send", "pageview", D.J)) : "gtag.config" == K ? (M(), 0 != D.sendPageView && p("send", "pageview",
                D.J)) : "screen_view" == K ? p("send", "screenview", D.J) : "timing_complete" == K ? (I("timingCategory", D.eventCategory, !0), I("timingVar", D.name, !0), I("timingValue", jc(D.value)), void 0 !== D.eventLabel && I("timingLabel", D.eventLabel, !0), p("send", "timing", D.J)) : "exception" == K ? p("send", "exception", D.J) : (0 <= ye("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), K) && (p("require", "ec", "ec.js"), v()), I("eventCategory",
                D.eventCategory, !0), I("eventAction", D.eventAction || K, !0), void 0 !== D.eventLabel && I("eventLabel", D.eventLabel, !0), void 0 !== D.value && I("eventValue", jc(D.value)), p("send", "event", D.J));
            a || (a = !0, vf("https://www.google-analytics.com/analytics.js", function () {
                Uc().loaded || b.vtp_gtmOnFailure()
            }, b.vtp_gtmOnFailure))
        })
    }();

    var Tf = {
        macro: function (a) {
            if ($d.Pa.hasOwnProperty(a)) return $d.Pa[a]
        }
    };
    Tf.dataLayer = xc;
    Tf.onHtmlSuccess = $d.Ab(!0);
    Tf.onHtmlFailure = $d.Ab(!1);
    Tf.callback = function (a) {
        dc.hasOwnProperty(a) && gc(dc[a]) && dc[a]();
        delete dc[a]
    };
    Tf.sc = function () {
        ac[$b.m] = Tf;
        ec = Z.a;
        Lb = Lb || $d
    };
    Tf.ed = function () {
        ac = C.google_tag_manager = C.google_tag_manager || {};
        if (ac[$b.m]) {
            var a = ac.zones;
            a && a.unregisterChild($b.m)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Eb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) Hb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) Gb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, q = 0; q < n.length; q++) p[n[q][0]] = Array.prototype.slice.call(n[q], 1);
                Fb.push(p)
            }
            Jb = Z;
            se();
            Tf.sc();
            Zd();
            Mc = !1;
            Nc = 0;
            if ("interactive" ==
                F.readyState && !F.createEventObject || "complete" == F.readyState) Pc(); else {
                Ga(F, "DOMContentLoaded", Pc);
                Ga(F, "readystatechange", Pc);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !C.frameElement
                    } catch (x) {
                    }
                    v && Qc()
                }
                Ga(C, "load", Pc)
            }
            Rd = !1;
            "complete" === F.readyState ? Td() : Ga(C, "load", Td);
            a:{
                if (!$c) break a;
                bd();
                id = 2;
                ed = void 0;
                fd = {};
                cd = {};
                hd = void 0;
                gd = {};
                dd = "";
                C.setInterval(bd, 864E5);
                C.setInterval(kd, 1E3);
            }
        }
    };
    Tf.ed();

})()

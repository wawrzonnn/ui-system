try {
  var Cy = Object.create;
  var ya = Object.defineProperty;
  var xy = Object.getOwnPropertyDescriptor;
  var Fy = Object.getOwnPropertyNames;
  var Sy = Object.getPrototypeOf,
    wy = Object.prototype.hasOwnProperty;
  var yr = ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var tt = (e, t) => () => (e && (t = e((e = 0))), t);
  var F = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    su = (e, t) => {
      for (var r in t) ya(e, r, { get: t[r], enumerable: !0 });
    },
    By = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of Fy(t))
          !wy.call(e, a) &&
            a !== r &&
            ya(e, a, {
              get: () => t[a],
              enumerable: !(n = xy(t, a)) || n.enumerable,
            });
      return e;
    };
  var se = (e, t, r) => (
    (r = e != null ? Cy(Sy(e)) : {}),
    By(
      t || !e || !e.__esModule
        ? ya(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var l = tt(() => {});
  var c = tt(() => {});
  var p = tt(() => {});
  var h,
    br,
    Ge,
    lu,
    rI,
    nI,
    aI,
    cu,
    oI,
    De,
    vt,
    Ea,
    iI,
    uI,
    sI,
    lI,
    pu,
    cI,
    de,
    Ae,
    pI,
    oe,
    dI,
    du,
    rt,
    fI,
    xe,
    Z,
    hI,
    G = tt(() => {
      l();
      c();
      p();
      (h = __REACT__),
        ({
          Children: br,
          Component: Ge,
          Fragment: lu,
          Profiler: rI,
          PureComponent: nI,
          StrictMode: aI,
          Suspense: cu,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: oI,
          cloneElement: De,
          createContext: vt,
          createElement: Ea,
          createFactory: iI,
          createRef: uI,
          forwardRef: sI,
          isValidElement: lI,
          lazy: pu,
          memo: cI,
          useCallback: de,
          useContext: Ae,
          useDebugValue: pI,
          useEffect: oe,
          useImperativeHandle: dI,
          useLayoutEffect: du,
          useMemo: rt,
          useReducer: fI,
          useRef: xe,
          useState: Z,
          version: hI,
        } = __REACT__);
    });
  var yu = {};
  su(yu, {
    A: () => Oy,
    ActionBar: () => Ca,
    AddonPanel: () => xa,
    Badge: () => Ry,
    Bar: () => Py,
    Blockquote: () => Iy,
    Button: () => ky,
    Code: () => Fa,
    DL: () => Ny,
    Div: () => jy,
    DocumentWrapper: () => My,
    ErrorFormatter: () => Sa,
    FlexBar: () => wa,
    Form: () => Se,
    H1: () => qy,
    H2: () => Ba,
    H3: () => Ta,
    H4: () => Ly,
    H5: () => $y,
    H6: () => Uy,
    HR: () => zy,
    IconButton: () => nt,
    IconButtonSkeleton: () => _a,
    Icons: () => Fe,
    Img: () => Hy,
    LI: () => Gy,
    Link: () => Nt,
    ListItem: () => Wy,
    Loader: () => Oa,
    OL: () => Vy,
    P: () => Ky,
    Placeholder: () => Yy,
    Pre: () => Xy,
    ResetWrapper: () => Ar,
    ScrollArea: () => Jy,
    Separator: () => Qy,
    Spaced: () => Zy,
    Span: () => e2,
    StorybookIcon: () => t2,
    StorybookLogo: () => r2,
    Symbols: () => n2,
    SyntaxHighlighter: () => Er,
    TT: () => a2,
    TabBar: () => o2,
    TabButton: () => i2,
    TabWrapper: () => u2,
    Table: () => s2,
    Tabs: () => l2,
    TabsState: () => Ra,
    TooltipLinkList: () => c2,
    TooltipMessage: () => p2,
    TooltipNote: () => Pa,
    UL: () => d2,
    WithTooltip: () => on,
    WithTooltipPure: () => Ia,
    Zoom: () => ka,
    codeCommon: () => lt,
    components: () => Na,
    createCopyToClipboardFunction: () => f2,
    default: () => _y,
    getStoryHref: () => ja,
    icons: () => h2,
    interleaveSeparators: () => m2,
    nameSpaceClassNames: () => Ma,
    resetComponents: () => g2,
    withReset: () => ct,
  });
  var _y,
    Oy,
    Ca,
    xa,
    Ry,
    Py,
    Iy,
    ky,
    Fa,
    Ny,
    jy,
    My,
    Sa,
    wa,
    Se,
    qy,
    Ba,
    Ta,
    Ly,
    $y,
    Uy,
    zy,
    nt,
    _a,
    Fe,
    Hy,
    Gy,
    Nt,
    Wy,
    Oa,
    Vy,
    Ky,
    Yy,
    Xy,
    Ar,
    Jy,
    Qy,
    Zy,
    e2,
    t2,
    r2,
    n2,
    Er,
    a2,
    o2,
    i2,
    u2,
    s2,
    l2,
    Ra,
    c2,
    p2,
    Pa,
    d2,
    on,
    Ia,
    ka,
    lt,
    Na,
    f2,
    ja,
    h2,
    m2,
    Ma,
    g2,
    ct,
    le = tt(() => {
      l();
      c();
      p();
      (_y = __STORYBOOKCOMPONENTS__),
        ({
          A: Oy,
          ActionBar: Ca,
          AddonPanel: xa,
          Badge: Ry,
          Bar: Py,
          Blockquote: Iy,
          Button: ky,
          Code: Fa,
          DL: Ny,
          Div: jy,
          DocumentWrapper: My,
          ErrorFormatter: Sa,
          FlexBar: wa,
          Form: Se,
          H1: qy,
          H2: Ba,
          H3: Ta,
          H4: Ly,
          H5: $y,
          H6: Uy,
          HR: zy,
          IconButton: nt,
          IconButtonSkeleton: _a,
          Icons: Fe,
          Img: Hy,
          LI: Gy,
          Link: Nt,
          ListItem: Wy,
          Loader: Oa,
          OL: Vy,
          P: Ky,
          Placeholder: Yy,
          Pre: Xy,
          ResetWrapper: Ar,
          ScrollArea: Jy,
          Separator: Qy,
          Spaced: Zy,
          Span: e2,
          StorybookIcon: t2,
          StorybookLogo: r2,
          Symbols: n2,
          SyntaxHighlighter: Er,
          TT: a2,
          TabBar: o2,
          TabButton: i2,
          TabWrapper: u2,
          Table: s2,
          Tabs: l2,
          TabsState: Ra,
          TooltipLinkList: c2,
          TooltipMessage: p2,
          TooltipNote: Pa,
          UL: d2,
          WithTooltip: on,
          WithTooltipPure: Ia,
          Zoom: ka,
          codeCommon: lt,
          components: Na,
          createCopyToClipboardFunction: f2,
          getStoryHref: ja,
          icons: h2,
          interleaveSeparators: m2,
          nameSpaceClassNames: Ma,
          resetComponents: g2,
          withReset: ct,
        } = __STORYBOOKCOMPONENTS__);
    });
  var ke,
    Dr,
    qa = tt(() => {
      l();
      c();
      p();
      (ke = (e) => `control-${e.replace(/\s+/g, "-")}`),
        (Dr = (e) => `set-${e.replace(/\s+/g, "-")}`);
    });
  var ZI,
    e7,
    t7,
    r7,
    un,
    n7,
    a7,
    bu,
    o7,
    i7,
    u7,
    s7,
    l7,
    c7,
    Au,
    Eu,
    p7,
    d7,
    f7,
    h7,
    N,
    sn,
    m7,
    Du,
    g7,
    ce = tt(() => {
      l();
      c();
      p();
      (ZI = __STORYBOOKTHEMING__),
        ({
          CacheProvider: e7,
          ClassNames: t7,
          Global: r7,
          ThemeProvider: un,
          background: n7,
          color: a7,
          convert: bu,
          create: o7,
          createCache: i7,
          createGlobal: u7,
          createReset: s7,
          css: l7,
          darken: c7,
          ensure: Au,
          ignoreSsrWarning: Eu,
          isPropValid: p7,
          jsx: d7,
          keyframes: f7,
          lighten: h7,
          styled: N,
          themes: sn,
          typography: m7,
          useTheme: Du,
          withTheme: g7,
        } = __STORYBOOKTHEMING__);
    });
  var Ya = F((Mk, Bu) => {
    l();
    c();
    p();
    function t1(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e);
      return a;
    }
    Bu.exports = t1;
  });
  var _u = F((Uk, Tu) => {
    l();
    c();
    p();
    function r1() {
      (this.__data__ = []), (this.size = 0);
    }
    Tu.exports = r1;
  });
  var cn = F((Wk, Ou) => {
    l();
    c();
    p();
    function n1(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Ou.exports = n1;
  });
  var Sr = F((Xk, Ru) => {
    l();
    c();
    p();
    var a1 = cn();
    function o1(e, t) {
      for (var r = e.length; r--; ) if (a1(e[r][0], t)) return r;
      return -1;
    }
    Ru.exports = o1;
  });
  var Iu = F((eN, Pu) => {
    l();
    c();
    p();
    var i1 = Sr(),
      u1 = Array.prototype,
      s1 = u1.splice;
    function l1(e) {
      var t = this.__data__,
        r = i1(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : s1.call(t, r, 1), --this.size, !0;
    }
    Pu.exports = l1;
  });
  var Nu = F((aN, ku) => {
    l();
    c();
    p();
    var c1 = Sr();
    function p1(e) {
      var t = this.__data__,
        r = c1(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ku.exports = p1;
  });
  var Mu = F((sN, ju) => {
    l();
    c();
    p();
    var d1 = Sr();
    function f1(e) {
      return d1(this.__data__, e) > -1;
    }
    ju.exports = f1;
  });
  var Lu = F((dN, qu) => {
    l();
    c();
    p();
    var h1 = Sr();
    function m1(e, t) {
      var r = this.__data__,
        n = h1(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    qu.exports = m1;
  });
  var wr = F((gN, $u) => {
    l();
    c();
    p();
    var g1 = _u(),
      y1 = Iu(),
      b1 = Nu(),
      A1 = Mu(),
      E1 = Lu();
    function Lt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Lt.prototype.clear = g1;
    Lt.prototype.delete = y1;
    Lt.prototype.get = b1;
    Lt.prototype.has = A1;
    Lt.prototype.set = E1;
    $u.exports = Lt;
  });
  var zu = F((EN, Uu) => {
    l();
    c();
    p();
    var D1 = wr();
    function v1() {
      (this.__data__ = new D1()), (this.size = 0);
    }
    Uu.exports = v1;
  });
  var Gu = F((xN, Hu) => {
    l();
    c();
    p();
    function C1(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Hu.exports = C1;
  });
  var Vu = F((BN, Wu) => {
    l();
    c();
    p();
    function x1(e) {
      return this.__data__.get(e);
    }
    Wu.exports = x1;
  });
  var Yu = F((RN, Ku) => {
    l();
    c();
    p();
    function F1(e) {
      return this.__data__.has(e);
    }
    Ku.exports = F1;
  });
  var Xa = F((NN, Xu) => {
    l();
    c();
    p();
    var S1 =
      typeof window == "object" && window && window.Object === Object && window;
    Xu.exports = S1;
  });
  var ze = F((LN, Ju) => {
    l();
    c();
    p();
    var w1 = Xa(),
      B1 = typeof self == "object" && self && self.Object === Object && self,
      T1 = w1 || B1 || Function("return this")();
    Ju.exports = T1;
  });
  var xt = F((HN, Qu) => {
    l();
    c();
    p();
    var _1 = ze(),
      O1 = _1.Symbol;
    Qu.exports = O1;
  });
  var rs = F((KN, ts) => {
    l();
    c();
    p();
    var Zu = xt(),
      es = Object.prototype,
      R1 = es.hasOwnProperty,
      P1 = es.toString,
      Br = Zu ? Zu.toStringTag : void 0;
    function I1(e) {
      var t = R1.call(e, Br),
        r = e[Br];
      try {
        e[Br] = void 0;
        var n = !0;
      } catch {}
      var a = P1.call(e);
      return n && (t ? (e[Br] = r) : delete e[Br]), a;
    }
    ts.exports = I1;
  });
  var as = F((QN, ns) => {
    l();
    c();
    p();
    var k1 = Object.prototype,
      N1 = k1.toString;
    function j1(e) {
      return N1.call(e);
    }
    ns.exports = j1;
  });
  var Ft = F((rj, us) => {
    l();
    c();
    p();
    var os = xt(),
      M1 = rs(),
      q1 = as(),
      L1 = "[object Null]",
      $1 = "[object Undefined]",
      is = os ? os.toStringTag : void 0;
    function U1(e) {
      return e == null
        ? e === void 0
          ? $1
          : L1
        : is && is in Object(e)
        ? M1(e)
        : q1(e);
    }
    us.exports = U1;
  });
  var Ve = F((ij, ss) => {
    l();
    c();
    p();
    function z1(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    ss.exports = z1;
  });
  var Ja = F((cj, ls) => {
    l();
    c();
    p();
    var H1 = Ft(),
      G1 = Ve(),
      W1 = "[object AsyncFunction]",
      V1 = "[object Function]",
      K1 = "[object GeneratorFunction]",
      Y1 = "[object Proxy]";
    function X1(e) {
      if (!G1(e)) return !1;
      var t = H1(e);
      return t == V1 || t == K1 || t == W1 || t == Y1;
    }
    ls.exports = X1;
  });
  var ps = F((hj, cs) => {
    l();
    c();
    p();
    var J1 = ze(),
      Q1 = J1["__core-js_shared__"];
    cs.exports = Q1;
  });
  var hs = F((bj, fs) => {
    l();
    c();
    p();
    var Qa = ps(),
      ds = (function () {
        var e = /[^.]+$/.exec((Qa && Qa.keys && Qa.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Z1(e) {
      return !!ds && ds in e;
    }
    fs.exports = Z1;
  });
  var Za = F((vj, ms) => {
    l();
    c();
    p();
    var eb = Function.prototype,
      tb = eb.toString;
    function rb(e) {
      if (e != null) {
        try {
          return tb.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    ms.exports = rb;
  });
  var ys = F((Sj, gs) => {
    l();
    c();
    p();
    var nb = Ja(),
      ab = hs(),
      ob = Ve(),
      ib = Za(),
      ub = /[\\^$.*+?()[\]{}|]/g,
      sb = /^\[object .+?Constructor\]$/,
      lb = Function.prototype,
      cb = Object.prototype,
      pb = lb.toString,
      db = cb.hasOwnProperty,
      fb = RegExp(
        "^" +
          pb
            .call(db)
            .replace(ub, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function hb(e) {
      if (!ob(e) || ab(e)) return !1;
      var t = nb(e) ? fb : sb;
      return t.test(ib(e));
    }
    gs.exports = hb;
  });
  var As = F((_j, bs) => {
    l();
    c();
    p();
    function mb(e, t) {
      return e?.[t];
    }
    bs.exports = mb;
  });
  var ft = F((Ij, Es) => {
    l();
    c();
    p();
    var gb = ys(),
      yb = As();
    function bb(e, t) {
      var r = yb(e, t);
      return gb(r) ? r : void 0;
    }
    Es.exports = bb;
  });
  var pn = F((Mj, Ds) => {
    l();
    c();
    p();
    var Ab = ft(),
      Eb = ze(),
      Db = Ab(Eb, "Map");
    Ds.exports = Db;
  });
  var Tr = F((Uj, vs) => {
    l();
    c();
    p();
    var vb = ft(),
      Cb = vb(Object, "create");
    vs.exports = Cb;
  });
  var Fs = F((Wj, xs) => {
    l();
    c();
    p();
    var Cs = Tr();
    function xb() {
      (this.__data__ = Cs ? Cs(null) : {}), (this.size = 0);
    }
    xs.exports = xb;
  });
  var ws = F((Xj, Ss) => {
    l();
    c();
    p();
    function Fb(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Ss.exports = Fb;
  });
  var Ts = F((eM, Bs) => {
    l();
    c();
    p();
    var Sb = Tr(),
      wb = "__lodash_hash_undefined__",
      Bb = Object.prototype,
      Tb = Bb.hasOwnProperty;
    function _b(e) {
      var t = this.__data__;
      if (Sb) {
        var r = t[e];
        return r === wb ? void 0 : r;
      }
      return Tb.call(t, e) ? t[e] : void 0;
    }
    Bs.exports = _b;
  });
  var Os = F((aM, _s) => {
    l();
    c();
    p();
    var Ob = Tr(),
      Rb = Object.prototype,
      Pb = Rb.hasOwnProperty;
    function Ib(e) {
      var t = this.__data__;
      return Ob ? t[e] !== void 0 : Pb.call(t, e);
    }
    _s.exports = Ib;
  });
  var Ps = F((sM, Rs) => {
    l();
    c();
    p();
    var kb = Tr(),
      Nb = "__lodash_hash_undefined__";
    function jb(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = kb && t === void 0 ? Nb : t),
        this
      );
    }
    Rs.exports = jb;
  });
  var ks = F((dM, Is) => {
    l();
    c();
    p();
    var Mb = Fs(),
      qb = ws(),
      Lb = Ts(),
      $b = Os(),
      Ub = Ps();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = Mb;
    $t.prototype.delete = qb;
    $t.prototype.get = Lb;
    $t.prototype.has = $b;
    $t.prototype.set = Ub;
    Is.exports = $t;
  });
  var Ms = F((gM, js) => {
    l();
    c();
    p();
    var Ns = ks(),
      zb = wr(),
      Hb = pn();
    function Gb() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Ns(),
          map: new (Hb || zb)(),
          string: new Ns(),
        });
    }
    js.exports = Gb;
  });
  var Ls = F((EM, qs) => {
    l();
    c();
    p();
    function Wb(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    qs.exports = Wb;
  });
  var _r = F((xM, $s) => {
    l();
    c();
    p();
    var Vb = Ls();
    function Kb(e, t) {
      var r = e.__data__;
      return Vb(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    $s.exports = Kb;
  });
  var zs = F((BM, Us) => {
    l();
    c();
    p();
    var Yb = _r();
    function Xb(e) {
      var t = Yb(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Us.exports = Xb;
  });
  var Gs = F((RM, Hs) => {
    l();
    c();
    p();
    var Jb = _r();
    function Qb(e) {
      return Jb(this, e).get(e);
    }
    Hs.exports = Qb;
  });
  var Vs = F((NM, Ws) => {
    l();
    c();
    p();
    var Zb = _r();
    function eA(e) {
      return Zb(this, e).has(e);
    }
    Ws.exports = eA;
  });
  var Ys = F((LM, Ks) => {
    l();
    c();
    p();
    var tA = _r();
    function rA(e, t) {
      var r = tA(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Ks.exports = rA;
  });
  var dn = F((HM, Xs) => {
    l();
    c();
    p();
    var nA = Ms(),
      aA = zs(),
      oA = Gs(),
      iA = Vs(),
      uA = Ys();
    function Ut(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ut.prototype.clear = nA;
    Ut.prototype.delete = aA;
    Ut.prototype.get = oA;
    Ut.prototype.has = iA;
    Ut.prototype.set = uA;
    Xs.exports = Ut;
  });
  var Qs = F((KM, Js) => {
    l();
    c();
    p();
    var sA = wr(),
      lA = pn(),
      cA = dn(),
      pA = 200;
    function dA(e, t) {
      var r = this.__data__;
      if (r instanceof sA) {
        var n = r.__data__;
        if (!lA || n.length < pA - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new cA(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Js.exports = dA;
  });
  var fn = F((QM, Zs) => {
    l();
    c();
    p();
    var fA = wr(),
      hA = zu(),
      mA = Gu(),
      gA = Vu(),
      yA = Yu(),
      bA = Qs();
    function zt(e) {
      var t = (this.__data__ = new fA(e));
      this.size = t.size;
    }
    zt.prototype.clear = hA;
    zt.prototype.delete = mA;
    zt.prototype.get = gA;
    zt.prototype.has = yA;
    zt.prototype.set = bA;
    Zs.exports = zt;
  });
  var tl = F((rq, el) => {
    l();
    c();
    p();
    var AA = "__lodash_hash_undefined__";
    function EA(e) {
      return this.__data__.set(e, AA), this;
    }
    el.exports = EA;
  });
  var nl = F((iq, rl) => {
    l();
    c();
    p();
    function DA(e) {
      return this.__data__.has(e);
    }
    rl.exports = DA;
  });
  var eo = F((cq, al) => {
    l();
    c();
    p();
    var vA = dn(),
      CA = tl(),
      xA = nl();
    function hn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new vA(); ++t < r; ) this.add(e[t]);
    }
    hn.prototype.add = hn.prototype.push = CA;
    hn.prototype.has = xA;
    al.exports = hn;
  });
  var il = F((hq, ol) => {
    l();
    c();
    p();
    function FA(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    ol.exports = FA;
  });
  var to = F((bq, ul) => {
    l();
    c();
    p();
    function SA(e, t) {
      return e.has(t);
    }
    ul.exports = SA;
  });
  var ro = F((vq, sl) => {
    l();
    c();
    p();
    var wA = eo(),
      BA = il(),
      TA = to(),
      _A = 1,
      OA = 2;
    function RA(e, t, r, n, a, o) {
      var i = r & _A,
        u = e.length,
        s = t.length;
      if (u != s && !(i && s > u)) return !1;
      var d = o.get(e),
        y = o.get(t);
      if (d && y) return d == t && y == e;
      var A = -1,
        g = !0,
        m = r & OA ? new wA() : void 0;
      for (o.set(e, t), o.set(t, e); ++A < u; ) {
        var E = e[A],
          b = t[A];
        if (n) var x = i ? n(b, E, A, t, e, o) : n(E, b, A, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          g = !1;
          break;
        }
        if (m) {
          if (
            !BA(t, function (S, P) {
              if (!TA(m, P) && (E === S || a(E, S, r, n, o))) return m.push(P);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(E === b || a(E, b, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    sl.exports = RA;
  });
  var no = F((Sq, ll) => {
    l();
    c();
    p();
    var PA = ze(),
      IA = PA.Uint8Array;
    ll.exports = IA;
  });
  var pl = F((_q, cl) => {
    l();
    c();
    p();
    function kA(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n];
        }),
        r
      );
    }
    cl.exports = kA;
  });
  var mn = F((Iq, dl) => {
    l();
    c();
    p();
    function NA(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    dl.exports = NA;
  });
  var yl = F((Mq, gl) => {
    l();
    c();
    p();
    var fl = xt(),
      hl = no(),
      jA = cn(),
      MA = ro(),
      qA = pl(),
      LA = mn(),
      $A = 1,
      UA = 2,
      zA = "[object Boolean]",
      HA = "[object Date]",
      GA = "[object Error]",
      WA = "[object Map]",
      VA = "[object Number]",
      KA = "[object RegExp]",
      YA = "[object Set]",
      XA = "[object String]",
      JA = "[object Symbol]",
      QA = "[object ArrayBuffer]",
      ZA = "[object DataView]",
      ml = fl ? fl.prototype : void 0,
      ao = ml ? ml.valueOf : void 0;
    function eE(e, t, r, n, a, o, i) {
      switch (r) {
        case ZA:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case QA:
          return !(e.byteLength != t.byteLength || !o(new hl(e), new hl(t)));
        case zA:
        case HA:
        case VA:
          return jA(+e, +t);
        case GA:
          return e.name == t.name && e.message == t.message;
        case KA:
        case XA:
          return e == t + "";
        case WA:
          var u = qA;
        case YA:
          var s = n & $A;
          if ((u || (u = LA), e.size != t.size && !s)) return !1;
          var d = i.get(e);
          if (d) return d == t;
          (n |= UA), i.set(e, t);
          var y = MA(u(e), u(t), n, a, o, i);
          return i.delete(e), y;
        case JA:
          if (ao) return ao.call(e) == ao.call(t);
      }
      return !1;
    }
    gl.exports = eE;
  });
  var gn = F((Uq, bl) => {
    l();
    c();
    p();
    function tE(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
      return e;
    }
    bl.exports = tE;
  });
  var Ke = F((Wq, Al) => {
    l();
    c();
    p();
    var rE = Array.isArray;
    Al.exports = rE;
  });
  var oo = F((Xq, El) => {
    l();
    c();
    p();
    var nE = gn(),
      aE = Ke();
    function oE(e, t, r) {
      var n = t(e);
      return aE(e) ? n : nE(n, r(e));
    }
    El.exports = oE;
  });
  var vl = F((eL, Dl) => {
    l();
    c();
    p();
    function iE(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
        var i = e[r];
        t(i, r, e) && (o[a++] = i);
      }
      return o;
    }
    Dl.exports = iE;
  });
  var io = F((aL, Cl) => {
    l();
    c();
    p();
    function uE() {
      return [];
    }
    Cl.exports = uE;
  });
  var yn = F((sL, Fl) => {
    l();
    c();
    p();
    var sE = vl(),
      lE = io(),
      cE = Object.prototype,
      pE = cE.propertyIsEnumerable,
      xl = Object.getOwnPropertySymbols,
      dE = xl
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                sE(xl(e), function (t) {
                  return pE.call(e, t);
                }));
          }
        : lE;
    Fl.exports = dE;
  });
  var wl = F((dL, Sl) => {
    l();
    c();
    p();
    function fE(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Sl.exports = fE;
  });
  var it = F((gL, Bl) => {
    l();
    c();
    p();
    function hE(e) {
      return e != null && typeof e == "object";
    }
    Bl.exports = hE;
  });
  var _l = F((EL, Tl) => {
    l();
    c();
    p();
    var mE = Ft(),
      gE = it(),
      yE = "[object Arguments]";
    function bE(e) {
      return gE(e) && mE(e) == yE;
    }
    Tl.exports = bE;
  });
  var bn = F((xL, Pl) => {
    l();
    c();
    p();
    var Ol = _l(),
      AE = it(),
      Rl = Object.prototype,
      EE = Rl.hasOwnProperty,
      DE = Rl.propertyIsEnumerable,
      vE = Ol(
        (function () {
          return arguments;
        })()
      )
        ? Ol
        : function (e) {
            return AE(e) && EE.call(e, "callee") && !DE.call(e, "callee");
          };
    Pl.exports = vE;
  });
  var kl = F((BL, Il) => {
    l();
    c();
    p();
    function CE() {
      return !1;
    }
    Il.exports = CE;
  });
  var An = F((Or, Ht) => {
    l();
    c();
    p();
    var xE = ze(),
      FE = kl(),
      Ml = typeof Or == "object" && Or && !Or.nodeType && Or,
      Nl = Ml && typeof Ht == "object" && Ht && !Ht.nodeType && Ht,
      SE = Nl && Nl.exports === Ml,
      jl = SE ? xE.Buffer : void 0,
      wE = jl ? jl.isBuffer : void 0,
      BE = wE || FE;
    Ht.exports = BE;
  });
  var En = F((kL, ql) => {
    l();
    c();
    p();
    var TE = 9007199254740991,
      _E = /^(?:0|[1-9]\d*)$/;
    function OE(e, t) {
      var r = typeof e;
      return (
        (t = t ?? TE),
        !!t &&
          (r == "number" || (r != "symbol" && _E.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    ql.exports = OE;
  });
  var Dn = F((qL, Ll) => {
    l();
    c();
    p();
    var RE = 9007199254740991;
    function PE(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= RE;
    }
    Ll.exports = PE;
  });
  var Ul = F((zL, $l) => {
    l();
    c();
    p();
    var IE = Ft(),
      kE = Dn(),
      NE = it(),
      jE = "[object Arguments]",
      ME = "[object Array]",
      qE = "[object Boolean]",
      LE = "[object Date]",
      $E = "[object Error]",
      UE = "[object Function]",
      zE = "[object Map]",
      HE = "[object Number]",
      GE = "[object Object]",
      WE = "[object RegExp]",
      VE = "[object Set]",
      KE = "[object String]",
      YE = "[object WeakMap]",
      XE = "[object ArrayBuffer]",
      JE = "[object DataView]",
      QE = "[object Float32Array]",
      ZE = "[object Float64Array]",
      eD = "[object Int8Array]",
      tD = "[object Int16Array]",
      rD = "[object Int32Array]",
      nD = "[object Uint8Array]",
      aD = "[object Uint8ClampedArray]",
      oD = "[object Uint16Array]",
      iD = "[object Uint32Array]",
      ye = {};
    ye[QE] =
      ye[ZE] =
      ye[eD] =
      ye[tD] =
      ye[rD] =
      ye[nD] =
      ye[aD] =
      ye[oD] =
      ye[iD] =
        !0;
    ye[jE] =
      ye[ME] =
      ye[XE] =
      ye[qE] =
      ye[JE] =
      ye[LE] =
      ye[$E] =
      ye[UE] =
      ye[zE] =
      ye[HE] =
      ye[GE] =
      ye[WE] =
      ye[VE] =
      ye[KE] =
      ye[YE] =
        !1;
    function uD(e) {
      return NE(e) && kE(e.length) && !!ye[IE(e)];
    }
    $l.exports = uD;
  });
  var vn = F((VL, zl) => {
    l();
    c();
    p();
    function sD(e) {
      return function (t) {
        return e(t);
      };
    }
    zl.exports = sD;
  });
  var Cn = F((Rr, Gt) => {
    l();
    c();
    p();
    var lD = Xa(),
      Hl = typeof Rr == "object" && Rr && !Rr.nodeType && Rr,
      Pr = Hl && typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
      cD = Pr && Pr.exports === Hl,
      uo = cD && lD.process,
      pD = (function () {
        try {
          var e = Pr && Pr.require && Pr.require("util").types;
          return e || (uo && uo.binding && uo.binding("util"));
        } catch {}
      })();
    Gt.exports = pD;
  });
  var so = F((e$, Vl) => {
    l();
    c();
    p();
    var dD = Ul(),
      fD = vn(),
      Gl = Cn(),
      Wl = Gl && Gl.isTypedArray,
      hD = Wl ? fD(Wl) : dD;
    Vl.exports = hD;
  });
  var lo = F((a$, Kl) => {
    l();
    c();
    p();
    var mD = wl(),
      gD = bn(),
      yD = Ke(),
      bD = An(),
      AD = En(),
      ED = so(),
      DD = Object.prototype,
      vD = DD.hasOwnProperty;
    function CD(e, t) {
      var r = yD(e),
        n = !r && gD(e),
        a = !r && !n && bD(e),
        o = !r && !n && !a && ED(e),
        i = r || n || a || o,
        u = i ? mD(e.length, String) : [],
        s = u.length;
      for (var d in e)
        (t || vD.call(e, d)) &&
          !(
            i &&
            (d == "length" ||
              (a && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              AD(d, s))
          ) &&
          u.push(d);
      return u;
    }
    Kl.exports = CD;
  });
  var xn = F((s$, Yl) => {
    l();
    c();
    p();
    var xD = Object.prototype;
    function FD(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || xD;
      return e === r;
    }
    Yl.exports = FD;
  });
  var co = F((d$, Xl) => {
    l();
    c();
    p();
    function SD(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Xl.exports = SD;
  });
  var Ql = F((g$, Jl) => {
    l();
    c();
    p();
    var wD = co(),
      BD = wD(Object.keys, Object);
    Jl.exports = BD;
  });
  var ec = F((E$, Zl) => {
    l();
    c();
    p();
    var TD = xn(),
      _D = Ql(),
      OD = Object.prototype,
      RD = OD.hasOwnProperty;
    function PD(e) {
      if (!TD(e)) return _D(e);
      var t = [];
      for (var r in Object(e)) RD.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Zl.exports = PD;
  });
  var po = F((x$, tc) => {
    l();
    c();
    p();
    var ID = Ja(),
      kD = Dn();
    function ND(e) {
      return e != null && kD(e.length) && !ID(e);
    }
    tc.exports = ND;
  });
  var Wt = F((B$, rc) => {
    l();
    c();
    p();
    var jD = lo(),
      MD = ec(),
      qD = po();
    function LD(e) {
      return qD(e) ? jD(e) : MD(e);
    }
    rc.exports = LD;
  });
  var fo = F((R$, nc) => {
    l();
    c();
    p();
    var $D = oo(),
      UD = yn(),
      zD = Wt();
    function HD(e) {
      return $D(e, zD, UD);
    }
    nc.exports = HD;
  });
  var ic = F((N$, oc) => {
    l();
    c();
    p();
    var ac = fo(),
      GD = 1,
      WD = Object.prototype,
      VD = WD.hasOwnProperty;
    function KD(e, t, r, n, a, o) {
      var i = r & GD,
        u = ac(e),
        s = u.length,
        d = ac(t),
        y = d.length;
      if (s != y && !i) return !1;
      for (var A = s; A--; ) {
        var g = u[A];
        if (!(i ? g in t : VD.call(t, g))) return !1;
      }
      var m = o.get(e),
        E = o.get(t);
      if (m && E) return m == t && E == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var x = i; ++A < s; ) {
        g = u[A];
        var S = e[g],
          P = t[g];
        if (n) var j = i ? n(P, S, g, t, e, o) : n(S, P, g, e, t, o);
        if (!(j === void 0 ? S === P || a(S, P, r, n, o) : j)) {
          b = !1;
          break;
        }
        x || (x = g == "constructor");
      }
      if (b && !x) {
        var $ = e.constructor,
          w = t.constructor;
        $ != w &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof $ == "function" &&
            $ instanceof $ &&
            typeof w == "function" &&
            w instanceof w
          ) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    oc.exports = KD;
  });
  var sc = F((L$, uc) => {
    l();
    c();
    p();
    var YD = ft(),
      XD = ze(),
      JD = YD(XD, "DataView");
    uc.exports = JD;
  });
  var cc = F((H$, lc) => {
    l();
    c();
    p();
    var QD = ft(),
      ZD = ze(),
      ev = QD(ZD, "Promise");
    lc.exports = ev;
  });
  var ho = F((K$, pc) => {
    l();
    c();
    p();
    var tv = ft(),
      rv = ze(),
      nv = tv(rv, "Set");
    pc.exports = nv;
  });
  var fc = F((Q$, dc) => {
    l();
    c();
    p();
    var av = ft(),
      ov = ze(),
      iv = av(ov, "WeakMap");
    dc.exports = iv;
  });
  var Ir = F((rU, Ec) => {
    l();
    c();
    p();
    var mo = sc(),
      go = pn(),
      yo = cc(),
      bo = ho(),
      Ao = fc(),
      Ac = Ft(),
      Vt = Za(),
      hc = "[object Map]",
      uv = "[object Object]",
      mc = "[object Promise]",
      gc = "[object Set]",
      yc = "[object WeakMap]",
      bc = "[object DataView]",
      sv = Vt(mo),
      lv = Vt(go),
      cv = Vt(yo),
      pv = Vt(bo),
      dv = Vt(Ao),
      St = Ac;
    ((mo && St(new mo(new ArrayBuffer(1))) != bc) ||
      (go && St(new go()) != hc) ||
      (yo && St(yo.resolve()) != mc) ||
      (bo && St(new bo()) != gc) ||
      (Ao && St(new Ao()) != yc)) &&
      (St = function (e) {
        var t = Ac(e),
          r = t == uv ? e.constructor : void 0,
          n = r ? Vt(r) : "";
        if (n)
          switch (n) {
            case sv:
              return bc;
            case lv:
              return hc;
            case cv:
              return mc;
            case pv:
              return gc;
            case dv:
              return yc;
          }
        return t;
      });
    Ec.exports = St;
  });
  var Bc = F((iU, wc) => {
    l();
    c();
    p();
    var Eo = fn(),
      fv = ro(),
      hv = yl(),
      mv = ic(),
      Dc = Ir(),
      vc = Ke(),
      Cc = An(),
      gv = so(),
      yv = 1,
      xc = "[object Arguments]",
      Fc = "[object Array]",
      Fn = "[object Object]",
      bv = Object.prototype,
      Sc = bv.hasOwnProperty;
    function Av(e, t, r, n, a, o) {
      var i = vc(e),
        u = vc(t),
        s = i ? Fc : Dc(e),
        d = u ? Fc : Dc(t);
      (s = s == xc ? Fn : s), (d = d == xc ? Fn : d);
      var y = s == Fn,
        A = d == Fn,
        g = s == d;
      if (g && Cc(e)) {
        if (!Cc(t)) return !1;
        (i = !0), (y = !1);
      }
      if (g && !y)
        return (
          o || (o = new Eo()),
          i || gv(e) ? fv(e, t, r, n, a, o) : hv(e, t, s, r, n, a, o)
        );
      if (!(r & yv)) {
        var m = y && Sc.call(e, "__wrapped__"),
          E = A && Sc.call(t, "__wrapped__");
        if (m || E) {
          var b = m ? e.value() : e,
            x = E ? t.value() : t;
          return o || (o = new Eo()), a(b, x, r, n, o);
        }
      }
      return g ? (o || (o = new Eo()), mv(e, t, r, n, a, o)) : !1;
    }
    wc.exports = Av;
  });
  var Do = F((cU, Oc) => {
    l();
    c();
    p();
    var Ev = Bc(),
      Tc = it();
    function _c(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!Tc(e) && !Tc(t))
        ? e !== e && t !== t
        : Ev(e, t, r, n, _c, a);
    }
    Oc.exports = _c;
  });
  var Pc = F((hU, Rc) => {
    l();
    c();
    p();
    var Dv = fn(),
      vv = Do(),
      Cv = 1,
      xv = 2;
    function Fv(e, t, r, n) {
      var a = r.length,
        o = a,
        i = !n;
      if (e == null) return !o;
      for (e = Object(e); a--; ) {
        var u = r[a];
        if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++a < o; ) {
        u = r[a];
        var s = u[0],
          d = e[s],
          y = u[1];
        if (i && u[2]) {
          if (d === void 0 && !(s in e)) return !1;
        } else {
          var A = new Dv();
          if (n) var g = n(d, y, s, e, t, A);
          if (!(g === void 0 ? vv(y, d, Cv | xv, n, A) : g)) return !1;
        }
      }
      return !0;
    }
    Rc.exports = Fv;
  });
  var vo = F((bU, Ic) => {
    l();
    c();
    p();
    var Sv = Ve();
    function wv(e) {
      return e === e && !Sv(e);
    }
    Ic.exports = wv;
  });
  var Nc = F((vU, kc) => {
    l();
    c();
    p();
    var Bv = vo(),
      Tv = Wt();
    function _v(e) {
      for (var t = Tv(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n];
        t[r] = [n, a, Bv(a)];
      }
      return t;
    }
    kc.exports = _v;
  });
  var Co = F((SU, jc) => {
    l();
    c();
    p();
    function Ov(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    jc.exports = Ov;
  });
  var qc = F((_U, Mc) => {
    l();
    c();
    p();
    var Rv = Pc(),
      Pv = Nc(),
      Iv = Co();
    function kv(e) {
      var t = Pv(e);
      return t.length == 1 && t[0][2]
        ? Iv(t[0][0], t[0][1])
        : function (r) {
            return r === e || Rv(r, e, t);
          };
    }
    Mc.exports = kv;
  });
  var kr = F((IU, Lc) => {
    l();
    c();
    p();
    var Nv = Ft(),
      jv = it(),
      Mv = "[object Symbol]";
    function qv(e) {
      return typeof e == "symbol" || (jv(e) && Nv(e) == Mv);
    }
    Lc.exports = qv;
  });
  var Sn = F((MU, $c) => {
    l();
    c();
    p();
    var Lv = Ke(),
      $v = kr(),
      Uv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      zv = /^\w*$/;
    function Hv(e, t) {
      if (Lv(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        $v(e)
        ? !0
        : zv.test(e) || !Uv.test(e) || (t != null && e in Object(t));
    }
    $c.exports = Hv;
  });
  var Hc = F((UU, zc) => {
    l();
    c();
    p();
    var Uc = dn(),
      Gv = "Expected a function";
    function xo(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Gv);
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return (r.cache = o.set(a, i) || o), i;
      };
      return (r.cache = new (xo.Cache || Uc)()), r;
    }
    xo.Cache = Uc;
    zc.exports = xo;
  });
  var Wc = F((WU, Gc) => {
    l();
    c();
    p();
    var Wv = Hc(),
      Vv = 500;
    function Kv(e) {
      var t = Wv(e, function (n) {
          return r.size === Vv && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Gc.exports = Kv;
  });
  var Kc = F((XU, Vc) => {
    l();
    c();
    p();
    var Yv = Wc(),
      Xv =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Jv = /\\(\\)?/g,
      Qv = Yv(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Xv, function (r, n, a, o) {
            t.push(a ? o.replace(Jv, "$1") : n || r);
          }),
          t
        );
      });
    Vc.exports = Qv;
  });
  var ep = F((ez, Zc) => {
    l();
    c();
    p();
    var Yc = xt(),
      Zv = Ya(),
      eC = Ke(),
      tC = kr(),
      rC = 1 / 0,
      Xc = Yc ? Yc.prototype : void 0,
      Jc = Xc ? Xc.toString : void 0;
    function Qc(e) {
      if (typeof e == "string") return e;
      if (eC(e)) return Zv(e, Qc) + "";
      if (tC(e)) return Jc ? Jc.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -rC ? "-0" : t;
    }
    Zc.exports = Qc;
  });
  var rp = F((az, tp) => {
    l();
    c();
    p();
    var nC = ep();
    function aC(e) {
      return e == null ? "" : nC(e);
    }
    tp.exports = aC;
  });
  var Nr = F((sz, np) => {
    l();
    c();
    p();
    var oC = Ke(),
      iC = Sn(),
      uC = Kc(),
      sC = rp();
    function lC(e, t) {
      return oC(e) ? e : iC(e, t) ? [e] : uC(sC(e));
    }
    np.exports = lC;
  });
  var Kt = F((dz, ap) => {
    l();
    c();
    p();
    var cC = kr(),
      pC = 1 / 0;
    function dC(e) {
      if (typeof e == "string" || cC(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -pC ? "-0" : t;
    }
    ap.exports = dC;
  });
  var wn = F((gz, op) => {
    l();
    c();
    p();
    var fC = Nr(),
      hC = Kt();
    function mC(e, t) {
      t = fC(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[hC(t[r++])];
      return r && r == n ? e : void 0;
    }
    op.exports = mC;
  });
  var up = F((Ez, ip) => {
    l();
    c();
    p();
    var gC = wn();
    function yC(e, t, r) {
      var n = e == null ? void 0 : gC(e, t);
      return n === void 0 ? r : n;
    }
    ip.exports = yC;
  });
  var lp = F((xz, sp) => {
    l();
    c();
    p();
    function bC(e, t) {
      return e != null && t in Object(e);
    }
    sp.exports = bC;
  });
  var pp = F((Bz, cp) => {
    l();
    c();
    p();
    var AC = Nr(),
      EC = bn(),
      DC = Ke(),
      vC = En(),
      CC = Dn(),
      xC = Kt();
    function FC(e, t, r) {
      t = AC(t, e);
      for (var n = -1, a = t.length, o = !1; ++n < a; ) {
        var i = xC(t[n]);
        if (!(o = e != null && r(e, i))) break;
        e = e[i];
      }
      return o || ++n != a
        ? o
        : ((a = e == null ? 0 : e.length),
          !!a && CC(a) && vC(i, a) && (DC(e) || EC(e)));
    }
    cp.exports = FC;
  });
  var Fo = F((Rz, dp) => {
    l();
    c();
    p();
    var SC = lp(),
      wC = pp();
    function BC(e, t) {
      return e != null && wC(e, t, SC);
    }
    dp.exports = BC;
  });
  var hp = F((Nz, fp) => {
    l();
    c();
    p();
    var TC = Do(),
      _C = up(),
      OC = Fo(),
      RC = Sn(),
      PC = vo(),
      IC = Co(),
      kC = Kt(),
      NC = 1,
      jC = 2;
    function MC(e, t) {
      return RC(e) && PC(t)
        ? IC(kC(e), t)
        : function (r) {
            var n = _C(r, e);
            return n === void 0 && n === t ? OC(r, e) : TC(t, n, NC | jC);
          };
    }
    fp.exports = MC;
  });
  var So = F((Lz, mp) => {
    l();
    c();
    p();
    function qC(e) {
      return e;
    }
    mp.exports = qC;
  });
  var yp = F((Hz, gp) => {
    l();
    c();
    p();
    function LC(e) {
      return function (t) {
        return t?.[e];
      };
    }
    gp.exports = LC;
  });
  var Ap = F((Kz, bp) => {
    l();
    c();
    p();
    var $C = wn();
    function UC(e) {
      return function (t) {
        return $C(t, e);
      };
    }
    bp.exports = UC;
  });
  var Dp = F((Qz, Ep) => {
    l();
    c();
    p();
    var zC = yp(),
      HC = Ap(),
      GC = Sn(),
      WC = Kt();
    function VC(e) {
      return GC(e) ? zC(WC(e)) : HC(e);
    }
    Ep.exports = VC;
  });
  var wo = F((rH, vp) => {
    l();
    c();
    p();
    var KC = qc(),
      YC = hp(),
      XC = So(),
      JC = Ke(),
      QC = Dp();
    function ZC(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? XC
        : typeof e == "object"
        ? JC(e)
          ? YC(e[0], e[1])
          : KC(e)
        : QC(e);
    }
    vp.exports = ZC;
  });
  var Bo = F((iH, Cp) => {
    l();
    c();
    p();
    var ex = ft(),
      tx = (function () {
        try {
          var e = ex(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Cp.exports = tx;
  });
  var Bn = F((cH, Fp) => {
    l();
    c();
    p();
    var xp = Bo();
    function rx(e, t, r) {
      t == "__proto__" && xp
        ? xp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Fp.exports = rx;
  });
  var Tn = F((hH, Sp) => {
    l();
    c();
    p();
    var nx = Bn(),
      ax = cn(),
      ox = Object.prototype,
      ix = ox.hasOwnProperty;
    function ux(e, t, r) {
      var n = e[t];
      (!(ix.call(e, t) && ax(n, r)) || (r === void 0 && !(t in e))) &&
        nx(e, t, r);
    }
    Sp.exports = ux;
  });
  var Tp = F((bH, Bp) => {
    l();
    c();
    p();
    var sx = Tn(),
      lx = Nr(),
      cx = En(),
      wp = Ve(),
      px = Kt();
    function dx(e, t, r, n) {
      if (!wp(e)) return e;
      t = lx(t, e);
      for (var a = -1, o = t.length, i = o - 1, u = e; u != null && ++a < o; ) {
        var s = px(t[a]),
          d = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (a != i) {
          var y = u[s];
          (d = n ? n(y, s, u) : void 0),
            d === void 0 && (d = wp(y) ? y : cx(t[a + 1]) ? [] : {});
        }
        sx(u, s, d), (u = u[s]);
      }
      return e;
    }
    Bp.exports = dx;
  });
  var To = F((vH, _p) => {
    l();
    c();
    p();
    var fx = wn(),
      hx = Tp(),
      mx = Nr();
    function gx(e, t, r) {
      for (var n = -1, a = t.length, o = {}; ++n < a; ) {
        var i = t[n],
          u = fx(e, i);
        r(u, i) && hx(o, mx(i, e), u);
      }
      return o;
    }
    _p.exports = gx;
  });
  var _n = F((SH, Op) => {
    l();
    c();
    p();
    var yx = co(),
      bx = yx(Object.getPrototypeOf, Object);
    Op.exports = bx;
  });
  var _o = F((_H, Rp) => {
    l();
    c();
    p();
    var Ax = gn(),
      Ex = _n(),
      Dx = yn(),
      vx = io(),
      Cx = Object.getOwnPropertySymbols,
      xx = Cx
        ? function (e) {
            for (var t = []; e; ) Ax(t, Dx(e)), (e = Ex(e));
            return t;
          }
        : vx;
    Rp.exports = xx;
  });
  var Ip = F((IH, Pp) => {
    l();
    c();
    p();
    function Fx(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Pp.exports = Fx;
  });
  var Np = F((MH, kp) => {
    l();
    c();
    p();
    var Sx = Ve(),
      wx = xn(),
      Bx = Ip(),
      Tx = Object.prototype,
      _x = Tx.hasOwnProperty;
    function Ox(e) {
      if (!Sx(e)) return Bx(e);
      var t = wx(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !_x.call(e, n))) || r.push(n);
      return r;
    }
    kp.exports = Ox;
  });
  var On = F((UH, jp) => {
    l();
    c();
    p();
    var Rx = lo(),
      Px = Np(),
      Ix = po();
    function kx(e) {
      return Ix(e) ? Rx(e, !0) : Px(e);
    }
    jp.exports = kx;
  });
  var Oo = F((WH, Mp) => {
    l();
    c();
    p();
    var Nx = oo(),
      jx = _o(),
      Mx = On();
    function qx(e) {
      return Nx(e, Mx, jx);
    }
    Mp.exports = qx;
  });
  var Ro = F((XH, qp) => {
    l();
    c();
    p();
    var Lx = Ya(),
      $x = wo(),
      Ux = To(),
      zx = Oo();
    function Hx(e, t) {
      if (e == null) return {};
      var r = Lx(zx(e), function (n) {
        return [n];
      });
      return (
        (t = $x(t)),
        Ux(e, r, function (n, a) {
          return t(n, a[0]);
        })
      );
    }
    qp.exports = Hx;
  });
  var qr = F((hd, Uo) => {
    l();
    c();
    p();
    (function (e) {
      if (typeof hd == "object" && typeof Uo < "u") Uo.exports = e();
      else if (typeof define == "function" && define.amd) define([], e);
      else {
        var t;
        typeof window < "u" || typeof window < "u"
          ? (t = window)
          : typeof self < "u"
          ? (t = self)
          : (t = this),
          (t.memoizerific = e());
      }
    })(function () {
      var e, t, r;
      return (function n(a, o, i) {
        function u(y, A) {
          if (!o[y]) {
            if (!a[y]) {
              var g = typeof yr == "function" && yr;
              if (!A && g) return g(y, !0);
              if (s) return s(y, !0);
              var m = new Error("Cannot find module '" + y + "'");
              throw ((m.code = "MODULE_NOT_FOUND"), m);
            }
            var E = (o[y] = { exports: {} });
            a[y][0].call(
              E.exports,
              function (b) {
                var x = a[y][1][b];
                return u(x || b);
              },
              E,
              E.exports,
              n,
              a,
              o,
              i
            );
          }
          return o[y].exports;
        }
        for (var s = typeof yr == "function" && yr, d = 0; d < i.length; d++)
          u(i[d]);
        return u;
      })(
        {
          1: [
            function (n, a, o) {
              a.exports = function (i) {
                if (typeof Map != "function" || i) {
                  var u = n("./similar");
                  return new u();
                } else return new Map();
              };
            },
            { "./similar": 2 },
          ],
          2: [
            function (n, a, o) {
              function i() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (i.prototype.get = function (u) {
                var s;
                if (this.lastItem && this.isEqual(this.lastItem.key, u))
                  return this.lastItem.val;
                if (((s = this.indexOf(u)), s >= 0))
                  return (this.lastItem = this.list[s]), this.list[s].val;
              }),
                (i.prototype.set = function (u, s) {
                  var d;
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? ((this.lastItem.val = s), this)
                    : ((d = this.indexOf(u)),
                      d >= 0
                        ? ((this.lastItem = this.list[d]),
                          (this.list[d].val = s),
                          this)
                        : ((this.lastItem = { key: u, val: s }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (i.prototype.delete = function (u) {
                  var s;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, u) &&
                      (this.lastItem = void 0),
                    (s = this.indexOf(u)),
                    s >= 0)
                  )
                    return this.size--, this.list.splice(s, 1)[0];
                }),
                (i.prototype.has = function (u) {
                  var s;
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? !0
                    : ((s = this.indexOf(u)),
                      s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
                }),
                (i.prototype.forEach = function (u, s) {
                  var d;
                  for (d = 0; d < this.size; d++)
                    u.call(s || this, this.list[d].val, this.list[d].key, this);
                }),
                (i.prototype.indexOf = function (u) {
                  var s;
                  for (s = 0; s < this.size; s++)
                    if (this.isEqual(this.list[s].key, u)) return s;
                  return -1;
                }),
                (i.prototype.isEqual = function (u, s) {
                  return u === s || (u !== u && s !== s);
                }),
                (a.exports = i);
            },
            {},
          ],
          3: [
            function (n, a, o) {
              var i = n("map-or-similar");
              a.exports = function (y) {
                var A = new i(!1),
                  g = [];
                return function (m) {
                  var E = function () {
                    var b = A,
                      x,
                      S,
                      P = arguments.length - 1,
                      j = Array(P + 1),
                      $ = !0,
                      w;
                    if ((E.numArgs || E.numArgs === 0) && E.numArgs !== P + 1)
                      throw new Error(
                        "Memoizerific functions should always be called with the same number of arguments"
                      );
                    for (w = 0; w < P; w++) {
                      if (
                        ((j[w] = { cacheItem: b, arg: arguments[w] }),
                        b.has(arguments[w]))
                      ) {
                        b = b.get(arguments[w]);
                        continue;
                      }
                      ($ = !1),
                        (x = new i(!1)),
                        b.set(arguments[w], x),
                        (b = x);
                    }
                    return (
                      $ &&
                        (b.has(arguments[P])
                          ? (S = b.get(arguments[P]))
                          : ($ = !1)),
                      $ ||
                        ((S = m.apply(null, arguments)),
                        b.set(arguments[P], S)),
                      y > 0 &&
                        ((j[P] = { cacheItem: b, arg: arguments[P] }),
                        $ ? u(g, j) : g.push(j),
                        g.length > y && s(g.shift())),
                      (E.wasMemoized = $),
                      (E.numArgs = P + 1),
                      S
                    );
                  };
                  return (
                    (E.limit = y),
                    (E.wasMemoized = !1),
                    (E.cache = A),
                    (E.lru = g),
                    E
                  );
                };
              };
              function u(y, A) {
                var g = y.length,
                  m = A.length,
                  E,
                  b,
                  x;
                for (b = 0; b < g; b++) {
                  for (E = !0, x = 0; x < m; x++)
                    if (!d(y[b][x].arg, A[x].arg)) {
                      E = !1;
                      break;
                    }
                  if (E) break;
                }
                y.push(y.splice(b, 1)[0]);
              }
              function s(y) {
                var A = y.length,
                  g = y[A - 1],
                  m,
                  E;
                for (
                  g.cacheItem.delete(g.arg), E = A - 2;
                  E >= 0 &&
                  ((g = y[E]), (m = g.cacheItem.get(g.arg)), !m || !m.size);
                  E--
                )
                  g.cacheItem.delete(g.arg);
              }
              function d(y, A) {
                return y === A || (y !== y && A !== A);
              }
            },
            { "map-or-similar": 1 },
          ],
        },
        {},
        [3]
      )(3);
    });
  });
  var gd = F((yG, md) => {
    l();
    c();
    p();
    function oS(e, t, r, n) {
      for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    md.exports = oS;
  });
  var bd = F((DG, yd) => {
    l();
    c();
    p();
    function iS(e) {
      return e !== e;
    }
    yd.exports = iS;
  });
  var Ed = F((FG, Ad) => {
    l();
    c();
    p();
    function uS(e, t, r) {
      for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
      return -1;
    }
    Ad.exports = uS;
  });
  var vd = F((TG, Dd) => {
    l();
    c();
    p();
    var sS = gd(),
      lS = bd(),
      cS = Ed();
    function pS(e, t, r) {
      return t === t ? cS(e, t, r) : sS(e, lS, r);
    }
    Dd.exports = pS;
  });
  var xd = F((PG, Cd) => {
    l();
    c();
    p();
    var dS = vd();
    function fS(e, t) {
      var r = e == null ? 0 : e.length;
      return !!r && dS(e, t, 0) > -1;
    }
    Cd.exports = fS;
  });
  var Sd = F((jG, Fd) => {
    l();
    c();
    p();
    function hS(e, t, r) {
      for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
        if (r(t, e[n])) return !0;
      return !1;
    }
    Fd.exports = hS;
  });
  var Bd = F(($G, wd) => {
    l();
    c();
    p();
    function mS() {}
    wd.exports = mS;
  });
  var _d = F((GG, Td) => {
    l();
    c();
    p();
    var zo = ho(),
      gS = Bd(),
      yS = mn(),
      bS = 1 / 0,
      AS =
        zo && 1 / yS(new zo([, -0]))[1] == bS
          ? function (e) {
              return new zo(e);
            }
          : gS;
    Td.exports = AS;
  });
  var Rd = F((YG, Od) => {
    l();
    c();
    p();
    var ES = eo(),
      DS = xd(),
      vS = Sd(),
      CS = to(),
      xS = _d(),
      FS = mn(),
      SS = 200;
    function wS(e, t, r) {
      var n = -1,
        a = DS,
        o = e.length,
        i = !0,
        u = [],
        s = u;
      if (r) (i = !1), (a = vS);
      else if (o >= SS) {
        var d = t ? null : xS(e);
        if (d) return FS(d);
        (i = !1), (a = CS), (s = new ES());
      } else s = t ? [] : u;
      e: for (; ++n < o; ) {
        var y = e[n],
          A = t ? t(y) : y;
        if (((y = r || y !== 0 ? y : 0), i && A === A)) {
          for (var g = s.length; g--; ) if (s[g] === A) continue e;
          t && s.push(A), u.push(y);
        } else a(s, A, r) || (s !== u && s.push(A), u.push(y));
      }
      return u;
    }
    Od.exports = wS;
  });
  var Id = F((ZG, Pd) => {
    l();
    c();
    p();
    var BS = Rd();
    function TS(e) {
      return e && e.length ? BS(e) : [];
    }
    Pd.exports = TS;
  });
  var Nd = F((nW, kd) => {
    l();
    c();
    p();
    function _S(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    kd.exports = _S;
  });
  var Lr = F((uW, jd) => {
    l();
    c();
    p();
    var OS = Tn(),
      RS = Bn();
    function PS(e, t, r, n) {
      var a = !r;
      r || (r = {});
      for (var o = -1, i = t.length; ++o < i; ) {
        var u = t[o],
          s = n ? n(r[u], e[u], u, r, e) : void 0;
        s === void 0 && (s = e[u]), a ? RS(r, u, s) : OS(r, u, s);
      }
      return r;
    }
    jd.exports = PS;
  });
  var qd = F((pW, Md) => {
    l();
    c();
    p();
    var IS = Lr(),
      kS = Wt();
    function NS(e, t) {
      return e && IS(t, kS(t), e);
    }
    Md.exports = NS;
  });
  var $d = F((mW, Ld) => {
    l();
    c();
    p();
    var jS = Lr(),
      MS = On();
    function qS(e, t) {
      return e && jS(t, MS(t), e);
    }
    Ld.exports = qS;
  });
  var Wd = F(($r, Xt) => {
    l();
    c();
    p();
    var LS = ze(),
      Gd = typeof $r == "object" && $r && !$r.nodeType && $r,
      Ud = Gd && typeof Xt == "object" && Xt && !Xt.nodeType && Xt,
      $S = Ud && Ud.exports === Gd,
      zd = $S ? LS.Buffer : void 0,
      Hd = zd ? zd.allocUnsafe : void 0;
    function US(e, t) {
      if (t) return e.slice();
      var r = e.length,
        n = Hd ? Hd(r) : new e.constructor(r);
      return e.copy(n), n;
    }
    Xt.exports = US;
  });
  var Kd = F((vW, Vd) => {
    l();
    c();
    p();
    function zS(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Vd.exports = zS;
  });
  var Xd = F((SW, Yd) => {
    l();
    c();
    p();
    var HS = Lr(),
      GS = yn();
    function WS(e, t) {
      return HS(e, GS(e), t);
    }
    Yd.exports = WS;
  });
  var Qd = F((_W, Jd) => {
    l();
    c();
    p();
    var VS = Lr(),
      KS = _o();
    function YS(e, t) {
      return VS(e, KS(e), t);
    }
    Jd.exports = YS;
  });
  var ef = F((IW, Zd) => {
    l();
    c();
    p();
    var XS = Object.prototype,
      JS = XS.hasOwnProperty;
    function QS(e) {
      var t = e.length,
        r = new e.constructor(t);
      return (
        t &&
          typeof e[0] == "string" &&
          JS.call(e, "index") &&
          ((r.index = e.index), (r.input = e.input)),
        r
      );
    }
    Zd.exports = QS;
  });
  var In = F((MW, rf) => {
    l();
    c();
    p();
    var tf = no();
    function ZS(e) {
      var t = new e.constructor(e.byteLength);
      return new tf(t).set(new tf(e)), t;
    }
    rf.exports = ZS;
  });
  var af = F((UW, nf) => {
    l();
    c();
    p();
    var ew = In();
    function tw(e, t) {
      var r = t ? ew(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.byteLength);
    }
    nf.exports = tw;
  });
  var uf = F((WW, of) => {
    l();
    c();
    p();
    var rw = /\w*$/;
    function nw(e) {
      var t = new e.constructor(e.source, rw.exec(e));
      return (t.lastIndex = e.lastIndex), t;
    }
    of.exports = nw;
  });
  var df = F((XW, pf) => {
    l();
    c();
    p();
    var sf = xt(),
      lf = sf ? sf.prototype : void 0,
      cf = lf ? lf.valueOf : void 0;
    function aw(e) {
      return cf ? Object(cf.call(e)) : {};
    }
    pf.exports = aw;
  });
  var hf = F((eV, ff) => {
    l();
    c();
    p();
    var ow = In();
    function iw(e, t) {
      var r = t ? ow(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.length);
    }
    ff.exports = iw;
  });
  var gf = F((aV, mf) => {
    l();
    c();
    p();
    var uw = In(),
      sw = af(),
      lw = uf(),
      cw = df(),
      pw = hf(),
      dw = "[object Boolean]",
      fw = "[object Date]",
      hw = "[object Map]",
      mw = "[object Number]",
      gw = "[object RegExp]",
      yw = "[object Set]",
      bw = "[object String]",
      Aw = "[object Symbol]",
      Ew = "[object ArrayBuffer]",
      Dw = "[object DataView]",
      vw = "[object Float32Array]",
      Cw = "[object Float64Array]",
      xw = "[object Int8Array]",
      Fw = "[object Int16Array]",
      Sw = "[object Int32Array]",
      ww = "[object Uint8Array]",
      Bw = "[object Uint8ClampedArray]",
      Tw = "[object Uint16Array]",
      _w = "[object Uint32Array]";
    function Ow(e, t, r) {
      var n = e.constructor;
      switch (t) {
        case Ew:
          return uw(e);
        case dw:
        case fw:
          return new n(+e);
        case Dw:
          return sw(e, r);
        case vw:
        case Cw:
        case xw:
        case Fw:
        case Sw:
        case ww:
        case Bw:
        case Tw:
        case _w:
          return pw(e, r);
        case hw:
          return new n();
        case mw:
        case bw:
          return new n(e);
        case gw:
          return lw(e);
        case yw:
          return new n();
        case Aw:
          return cw(e);
      }
    }
    mf.exports = Ow;
  });
  var Af = F((sV, bf) => {
    l();
    c();
    p();
    var Rw = Ve(),
      yf = Object.create,
      Pw = (function () {
        function e() {}
        return function (t) {
          if (!Rw(t)) return {};
          if (yf) return yf(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    bf.exports = Pw;
  });
  var Df = F((dV, Ef) => {
    l();
    c();
    p();
    var Iw = Af(),
      kw = _n(),
      Nw = xn();
    function jw(e) {
      return typeof e.constructor == "function" && !Nw(e) ? Iw(kw(e)) : {};
    }
    Ef.exports = jw;
  });
  var Cf = F((gV, vf) => {
    l();
    c();
    p();
    var Mw = Ir(),
      qw = it(),
      Lw = "[object Map]";
    function $w(e) {
      return qw(e) && Mw(e) == Lw;
    }
    vf.exports = $w;
  });
  var wf = F((EV, Sf) => {
    l();
    c();
    p();
    var Uw = Cf(),
      zw = vn(),
      xf = Cn(),
      Ff = xf && xf.isMap,
      Hw = Ff ? zw(Ff) : Uw;
    Sf.exports = Hw;
  });
  var Tf = F((xV, Bf) => {
    l();
    c();
    p();
    var Gw = Ir(),
      Ww = it(),
      Vw = "[object Set]";
    function Kw(e) {
      return Ww(e) && Gw(e) == Vw;
    }
    Bf.exports = Kw;
  });
  var Pf = F((BV, Rf) => {
    l();
    c();
    p();
    var Yw = Tf(),
      Xw = vn(),
      _f = Cn(),
      Of = _f && _f.isSet,
      Jw = Of ? Xw(Of) : Yw;
    Rf.exports = Jw;
  });
  var Mf = F((RV, jf) => {
    l();
    c();
    p();
    var Qw = fn(),
      Zw = Nd(),
      e5 = Tn(),
      t5 = qd(),
      r5 = $d(),
      n5 = Wd(),
      a5 = Kd(),
      o5 = Xd(),
      i5 = Qd(),
      u5 = fo(),
      s5 = Oo(),
      l5 = Ir(),
      c5 = ef(),
      p5 = gf(),
      d5 = Df(),
      f5 = Ke(),
      h5 = An(),
      m5 = wf(),
      g5 = Ve(),
      y5 = Pf(),
      b5 = Wt(),
      A5 = On(),
      E5 = 1,
      D5 = 2,
      v5 = 4,
      If = "[object Arguments]",
      C5 = "[object Array]",
      x5 = "[object Boolean]",
      F5 = "[object Date]",
      S5 = "[object Error]",
      kf = "[object Function]",
      w5 = "[object GeneratorFunction]",
      B5 = "[object Map]",
      T5 = "[object Number]",
      Nf = "[object Object]",
      _5 = "[object RegExp]",
      O5 = "[object Set]",
      R5 = "[object String]",
      P5 = "[object Symbol]",
      I5 = "[object WeakMap]",
      k5 = "[object ArrayBuffer]",
      N5 = "[object DataView]",
      j5 = "[object Float32Array]",
      M5 = "[object Float64Array]",
      q5 = "[object Int8Array]",
      L5 = "[object Int16Array]",
      $5 = "[object Int32Array]",
      U5 = "[object Uint8Array]",
      z5 = "[object Uint8ClampedArray]",
      H5 = "[object Uint16Array]",
      G5 = "[object Uint32Array]",
      ge = {};
    ge[If] =
      ge[C5] =
      ge[k5] =
      ge[N5] =
      ge[x5] =
      ge[F5] =
      ge[j5] =
      ge[M5] =
      ge[q5] =
      ge[L5] =
      ge[$5] =
      ge[B5] =
      ge[T5] =
      ge[Nf] =
      ge[_5] =
      ge[O5] =
      ge[R5] =
      ge[P5] =
      ge[U5] =
      ge[z5] =
      ge[H5] =
      ge[G5] =
        !0;
    ge[S5] = ge[kf] = ge[I5] = !1;
    function kn(e, t, r, n, a, o) {
      var i,
        u = t & E5,
        s = t & D5,
        d = t & v5;
      if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i;
      if (!g5(e)) return e;
      var y = f5(e);
      if (y) {
        if (((i = c5(e)), !u)) return a5(e, i);
      } else {
        var A = l5(e),
          g = A == kf || A == w5;
        if (h5(e)) return n5(e, u);
        if (A == Nf || A == If || (g && !a)) {
          if (((i = s || g ? {} : d5(e)), !u))
            return s ? i5(e, r5(i, e)) : o5(e, t5(i, e));
        } else {
          if (!ge[A]) return a ? e : {};
          i = p5(e, A, u);
        }
      }
      o || (o = new Qw());
      var m = o.get(e);
      if (m) return m;
      o.set(e, i),
        y5(e)
          ? e.forEach(function (x) {
              i.add(kn(x, t, r, x, e, o));
            })
          : m5(e) &&
            e.forEach(function (x, S) {
              i.set(S, kn(x, t, r, S, e, o));
            });
      var E = d ? (s ? s5 : u5) : s ? A5 : b5,
        b = y ? void 0 : E(e);
      return (
        Zw(b || e, function (x, S) {
          b && ((S = x), (x = e[S])), e5(i, S, kn(x, t, r, S, e, o));
        }),
        i
      );
    }
    jf.exports = kn;
  });
  var Lf = F((NV, qf) => {
    l();
    c();
    p();
    var W5 = Mf(),
      V5 = 1,
      K5 = 4;
    function Y5(e) {
      return W5(e, V5 | K5);
    }
    qf.exports = Y5;
  });
  var Jf = F((hK, Xf) => {
    l();
    c();
    p();
    function F3(e) {
      return function (t, r, n) {
        for (var a = -1, o = Object(t), i = n(t), u = i.length; u--; ) {
          var s = i[e ? u : ++a];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Xf.exports = F3;
  });
  var Zf = F((bK, Qf) => {
    l();
    c();
    p();
    var S3 = Jf(),
      w3 = S3();
    Qf.exports = w3;
  });
  var t0 = F((vK, e0) => {
    l();
    c();
    p();
    var B3 = Zf(),
      T3 = Wt();
    function _3(e, t) {
      return e && B3(e, t, T3);
    }
    e0.exports = _3;
  });
  var Bt = F((SK, r0) => {
    l();
    c();
    p();
    var O3 = Bn(),
      R3 = t0(),
      P3 = wo();
    function I3(e, t) {
      var r = {};
      return (
        (t = P3(t, 3)),
        R3(e, function (n, a, o) {
          O3(r, a, t(n, a, o));
        }),
        r
      );
    }
    r0.exports = I3;
  });
  var a0 = F((_K, n0) => {
    l();
    c();
    p();
    var k3 = To(),
      N3 = Fo();
    function j3(e, t) {
      return k3(e, t, function (r, n) {
        return N3(e, n);
      });
    }
    n0.exports = j3;
  });
  var s0 = F((IK, u0) => {
    l();
    c();
    p();
    var o0 = xt(),
      M3 = bn(),
      q3 = Ke(),
      i0 = o0 ? o0.isConcatSpreadable : void 0;
    function L3(e) {
      return q3(e) || M3(e) || !!(i0 && e && e[i0]);
    }
    u0.exports = L3;
  });
  var p0 = F((MK, c0) => {
    l();
    c();
    p();
    var $3 = gn(),
      U3 = s0();
    function l0(e, t, r, n, a) {
      var o = -1,
        i = e.length;
      for (r || (r = U3), a || (a = []); ++o < i; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? l0(u, t - 1, r, n, a)
            : $3(a, u)
          : n || (a[a.length] = u);
      }
      return a;
    }
    c0.exports = l0;
  });
  var f0 = F((UK, d0) => {
    l();
    c();
    p();
    var z3 = p0();
    function H3(e) {
      var t = e == null ? 0 : e.length;
      return t ? z3(e, 1) : [];
    }
    d0.exports = H3;
  });
  var m0 = F((WK, h0) => {
    l();
    c();
    p();
    function G3(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    h0.exports = G3;
  });
  var b0 = F((XK, y0) => {
    l();
    c();
    p();
    var W3 = m0(),
      g0 = Math.max;
    function V3(e, t, r) {
      return (
        (t = g0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, a = -1, o = g0(n.length - t, 0), i = Array(o);
            ++a < o;

          )
            i[a] = n[t + a];
          a = -1;
          for (var u = Array(t + 1); ++a < t; ) u[a] = n[a];
          return (u[t] = r(i)), W3(e, this, u);
        }
      );
    }
    y0.exports = V3;
  });
  var E0 = F((eY, A0) => {
    l();
    c();
    p();
    function K3(e) {
      return function () {
        return e;
      };
    }
    A0.exports = K3;
  });
  var C0 = F((aY, v0) => {
    l();
    c();
    p();
    var Y3 = E0(),
      D0 = Bo(),
      X3 = So(),
      J3 = D0
        ? function (e, t) {
            return D0(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: Y3(t),
              writable: !0,
            });
          }
        : X3;
    v0.exports = J3;
  });
  var F0 = F((sY, x0) => {
    l();
    c();
    p();
    var Q3 = 800,
      Z3 = 16,
      eB = Date.now;
    function tB(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = eB(),
          a = Z3 - (n - r);
        if (((r = n), a > 0)) {
          if (++t >= Q3) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    x0.exports = tB;
  });
  var w0 = F((dY, S0) => {
    l();
    c();
    p();
    var rB = C0(),
      nB = F0(),
      aB = nB(rB);
    S0.exports = aB;
  });
  var T0 = F((gY, B0) => {
    l();
    c();
    p();
    var oB = f0(),
      iB = b0(),
      uB = w0();
    function sB(e) {
      return uB(iB(e, void 0, oB), e + "");
    }
    B0.exports = sB;
  });
  var O0 = F((EY, _0) => {
    l();
    c();
    p();
    var lB = a0(),
      cB = T0(),
      pB = cB(function (e, t) {
        return e == null ? {} : lB(e, t);
      });
    _0.exports = pB;
  });
  var qn = F((xY, j0) => {
    "use strict";
    l();
    c();
    p();
    function Mn(e) {
      return Array.prototype.slice.apply(e);
    }
    var k0 = "pending",
      R0 = "resolved",
      P0 = "rejected";
    function ie(e) {
      (this.status = k0),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e &&
          e.call(
            this,
            this._continueWith.bind(this),
            this._failWith.bind(this)
          );
    }
    function zr(e) {
      return e && typeof e.then == "function";
    }
    function dB(e) {
      return e;
    }
    ie.prototype = {
      then: function (e, t) {
        var r = ie.unresolved()._setParent(this);
        if (this._isRejected()) {
          if (this._paused)
            return (
              this._continuations.push({ promise: r, nextFn: e, catchFn: t }), r
            );
          if (t)
            try {
              var n = t(this._error);
              return zr(n)
                ? (this._chainPromiseData(n, r), r)
                : ie.resolve(n)._setParent(this);
            } catch (a) {
              return ie.reject(a)._setParent(this);
            }
          return ie.reject(this._error)._setParent(this);
        }
        return (
          this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
          this._runResolutions(),
          r
        );
      },
      catch: function (e) {
        if (this._isResolved()) return ie.resolve(this._data)._setParent(this);
        var t = ie.unresolved()._setParent(this);
        return (
          this._continuations.push({ promise: t, catchFn: e }),
          this._runRejections(),
          t
        );
      },
      finally: function (e) {
        var t = !1;
        function r(n, a) {
          if (!t) {
            (t = !0), e || (e = dB);
            var o = e(n);
            return zr(o)
              ? o.then(function () {
                  if (a) throw a;
                  return n;
                })
              : n;
          }
        }
        return this.then(function (n) {
          return r(n);
        }).catch(function (n) {
          return r(null, n);
        });
      },
      pause: function () {
        return (this._paused = !0), this;
      },
      resume: function () {
        var e = this._findFirstPaused();
        return (
          e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
        );
      },
      _findAncestry: function () {
        return this._continuations.reduce(function (e, t) {
          if (t.promise) {
            var r = { promise: t.promise, children: t.promise._findAncestry() };
            e.push(r);
          }
          return e;
        }, []);
      },
      _setParent: function (e) {
        if (this._parent) throw new Error("parent already set");
        return (this._parent = e), this;
      },
      _continueWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._data = e), t._setResolved());
      },
      _findFirstPending: function () {
        return this._findFirstAncestor(function (e) {
          return e._isPending && e._isPending();
        });
      },
      _findFirstPaused: function () {
        return this._findFirstAncestor(function (e) {
          return e._paused;
        });
      },
      _findFirstAncestor: function (e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent);
        return r;
      },
      _failWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._error = e), t._setRejected());
      },
      _takeContinuations: function () {
        return this._continuations.splice(0, this._continuations.length);
      },
      _runRejections: function () {
        if (!(this._paused || !this._isRejected())) {
          var e = this._error,
            t = this._takeContinuations(),
            r = this;
          t.forEach(function (n) {
            if (n.catchFn)
              try {
                var a = n.catchFn(e);
                r._handleUserFunctionResult(a, n.promise);
              } catch (o) {
                n.promise.reject(o);
              }
            else n.promise.reject(e);
          });
        }
      },
      _runResolutions: function () {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          var e = this._takeContinuations(),
            t = this._data,
            r = this;
          if (
            (e.forEach(function (n) {
              if (n.nextFn)
                try {
                  var a = n.nextFn(t);
                  r._handleUserFunctionResult(a, n.promise);
                } catch (o) {
                  r._handleResolutionError(o, n);
                }
              else n.promise && n.promise.resolve(t);
            }),
            zr(this._data))
          )
            return this._handleWhenResolvedDataIsPromise(this._data);
        }
      },
      _handleResolutionError: function (e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e);
            return;
          } catch (r) {
            e = r;
          }
        t.promise && t.promise.reject(e);
      },
      _handleWhenResolvedDataIsPromise: function (e) {
        var t = this;
        return e
          .then(function (r) {
            (t._data = r), t._runResolutions();
          })
          .catch(function (r) {
            (t._error = r), t._setRejected(), t._runRejections();
          });
      },
      _handleUserFunctionResult: function (e, t) {
        zr(e) ? this._chainPromiseData(e, t) : t.resolve(e);
      },
      _chainPromiseData: function (e, t) {
        e.then(function (r) {
          t.resolve(r);
        }).catch(function (r) {
          t.reject(r);
        });
      },
      _setResolved: function () {
        (this.status = R0), this._paused || this._runResolutions();
      },
      _setRejected: function () {
        (this.status = P0), this._paused || this._runRejections();
      },
      _isPending: function () {
        return this.status === k0;
      },
      _isResolved: function () {
        return this.status === R0;
      },
      _isRejected: function () {
        return this.status === P0;
      },
    };
    ie.resolve = function (e) {
      return new ie(function (t, r) {
        zr(e)
          ? e
              .then(function (n) {
                t(n);
              })
              .catch(function (n) {
                r(n);
              })
          : t(e);
      });
    };
    ie.reject = function (e) {
      return new ie(function (t, r) {
        r(e);
      });
    };
    ie.unresolved = function () {
      return new ie(function (e, t) {
        (this.resolve = e), (this.reject = t);
      });
    };
    ie.all = function () {
      var e = Mn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ie(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && t(n);
                },
                i = !1,
                u = function (s) {
                  i || ((i = !0), r(s));
                };
              e.forEach(function (s, d) {
                ie.resolve(s)
                  .then(function (y) {
                    (n[d] = y), (a += 1), o();
                  })
                  .catch(function (y) {
                    u(y);
                  });
              });
            })
          : ie.resolve([])
      );
    };
    function I0(e) {
      return typeof window < "u" && "AggregateError" in window
        ? new window.AggregateError(e)
        : { errors: e };
    }
    ie.any = function () {
      var e = Mn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ie(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && r(I0(n));
                },
                i = !1,
                u = function (s) {
                  i || ((i = !0), t(s));
                };
              e.forEach(function (s, d) {
                ie.resolve(s)
                  .then(function (y) {
                    u(y);
                  })
                  .catch(function (y) {
                    (n[d] = y), (a += 1), o();
                  });
              });
            })
          : ie.reject(I0([]))
      );
    };
    ie.allSettled = function () {
      var e = Mn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ie(function (t) {
              var r = [],
                n = 0,
                a = function () {
                  (n += 1), n === e.length && t(r);
                };
              e.forEach(function (o, i) {
                ie.resolve(o)
                  .then(function (u) {
                    (r[i] = { status: "fulfilled", value: u }), a();
                  })
                  .catch(function (u) {
                    (r[i] = { status: "rejected", reason: u }), a();
                  });
              });
            })
          : ie.resolve([])
      );
    };
    if (Promise === ie)
      throw new Error(
        "Please use SynchronousPromise.installGlobally() to install globally"
      );
    var N0 = Promise;
    ie.installGlobally = function (e) {
      if (Promise === ie) return e;
      var t = fB(e);
      return (Promise = ie), t;
    };
    ie.uninstallGlobally = function () {
      Promise === ie && (Promise = N0);
    };
    function fB(e) {
      if (typeof e > "u" || e.__patched) return e;
      var t = e;
      return (
        (e = function () {
          var r = N0;
          t.apply(this, Mn(arguments));
        }),
        (e.__patched = !0),
        e
      );
    }
    j0.exports = { SynchronousPromise: ie };
  });
  var Ln = F((NY, q0) => {
    l();
    c();
    p();
    var hB = Ft(),
      mB = _n(),
      gB = it(),
      yB = "[object Object]",
      bB = Function.prototype,
      AB = Object.prototype,
      M0 = bB.toString,
      EB = AB.hasOwnProperty,
      DB = M0.call(Object);
    function vB(e) {
      if (!gB(e) || hB(e) != yB) return !1;
      var t = mB(e);
      if (t === null) return !0;
      var r = EB.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && M0.call(r) == DB;
    }
    q0.exports = vB;
  });
  var $0 = F((LY, L0) => {
    l();
    c();
    p();
    L0.exports = CB;
    function CB(e, t) {
      if (Wo("noDeprecation")) return e;
      var r = !1;
      function n() {
        if (!r) {
          if (Wo("throwDeprecation")) throw new Error(t);
          Wo("traceDeprecation") ? console.trace(t) : console.warn(t), (r = !0);
        }
        return e.apply(this, arguments);
      }
      return n;
    }
    function Wo(e) {
      try {
        if (!window.localStorage) return !1;
      } catch {
        return !1;
      }
      var t = window.localStorage[e];
      return t == null ? !1 : String(t).toLowerCase() === "true";
    }
  });
  var J0 = F((vX, X0) => {
    "use strict";
    l();
    c();
    p();
    X0.exports = function () {
      if (
        typeof Symbol != "function" ||
        typeof Object.getOwnPropertySymbols != "function"
      )
        return !1;
      if (typeof Symbol.iterator == "symbol") return !0;
      var t = {},
        r = Symbol("test"),
        n = Object(r);
      if (
        typeof r == "string" ||
        Object.prototype.toString.call(r) !== "[object Symbol]" ||
        Object.prototype.toString.call(n) !== "[object Symbol]"
      )
        return !1;
      var a = 42;
      t[r] = a;
      for (r in t) return !1;
      if (
        (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
        (typeof Object.getOwnPropertyNames == "function" &&
          Object.getOwnPropertyNames(t).length !== 0)
      )
        return !1;
      var o = Object.getOwnPropertySymbols(t);
      if (
        o.length !== 1 ||
        o[0] !== r ||
        !Object.prototype.propertyIsEnumerable.call(t, r)
      )
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var i = Object.getOwnPropertyDescriptor(t, r);
        if (i.value !== a || i.enumerable !== !0) return !1;
      }
      return !0;
    };
  });
  var eh = F((SX, Z0) => {
    "use strict";
    l();
    c();
    p();
    var Q0 = typeof Symbol < "u" && Symbol,
      UB = J0();
    Z0.exports = function () {
      return typeof Q0 != "function" ||
        typeof Symbol != "function" ||
        typeof Q0("foo") != "symbol" ||
        typeof Symbol("bar") != "symbol"
        ? !1
        : UB();
    };
  });
  var rh = F((_X, th) => {
    "use strict";
    l();
    c();
    p();
    var zB = "Function.prototype.bind called on incompatible ",
      Ko = Array.prototype.slice,
      HB = Object.prototype.toString,
      GB = "[object Function]";
    th.exports = function (t) {
      var r = this;
      if (typeof r != "function" || HB.call(r) !== GB)
        throw new TypeError(zB + r);
      for (
        var n = Ko.call(arguments, 1),
          a,
          o = function () {
            if (this instanceof a) {
              var y = r.apply(this, n.concat(Ko.call(arguments)));
              return Object(y) === y ? y : this;
            } else return r.apply(t, n.concat(Ko.call(arguments)));
          },
          i = Math.max(0, r.length - n.length),
          u = [],
          s = 0;
        s < i;
        s++
      )
        u.push("$" + s);
      if (
        ((a = Function(
          "binder",
          "return function (" +
            u.join(",") +
            "){ return binder.apply(this,arguments); }"
        )(o)),
        r.prototype)
      ) {
        var d = function () {};
        (d.prototype = r.prototype),
          (a.prototype = new d()),
          (d.prototype = null);
      }
      return a;
    };
  });
  var zn = F((IX, nh) => {
    "use strict";
    l();
    c();
    p();
    var WB = rh();
    nh.exports = Function.prototype.bind || WB;
  });
  var oh = F((MX, ah) => {
    "use strict";
    l();
    c();
    p();
    var VB = zn();
    ah.exports = VB.call(Function.call, Object.prototype.hasOwnProperty);
  });
  var Wn = F((UX, ch) => {
    "use strict";
    l();
    c();
    p();
    var ne,
      nr = SyntaxError,
      lh = Function,
      rr = TypeError,
      Yo = function (e) {
        try {
          return lh('"use strict"; return (' + e + ").constructor;")();
        } catch {}
      },
      _t = Object.getOwnPropertyDescriptor;
    if (_t)
      try {
        _t({}, "");
      } catch {
        _t = null;
      }
    var Xo = function () {
        throw new rr();
      },
      KB = _t
        ? (function () {
            try {
              return arguments.callee, Xo;
            } catch {
              try {
                return _t(arguments, "callee").get;
              } catch {
                return Xo;
              }
            }
          })()
        : Xo,
      er = eh()(),
      Xe =
        Object.getPrototypeOf ||
        function (e) {
          return e.__proto__;
        },
      tr = {},
      YB = typeof Uint8Array > "u" ? ne : Xe(Uint8Array),
      Ot = {
        "%AggregateError%": typeof AggregateError > "u" ? ne : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ne : ArrayBuffer,
        "%ArrayIteratorPrototype%": er ? Xe([][Symbol.iterator]()) : ne,
        "%AsyncFromSyncIteratorPrototype%": ne,
        "%AsyncFunction%": tr,
        "%AsyncGenerator%": tr,
        "%AsyncGeneratorFunction%": tr,
        "%AsyncIteratorPrototype%": tr,
        "%Atomics%": typeof Atomics > "u" ? ne : Atomics,
        "%BigInt%": typeof BigInt > "u" ? ne : BigInt,
        "%BigInt64Array%": typeof BigInt64Array > "u" ? ne : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array > "u" ? ne : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? ne : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? ne : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? ne : Float64Array,
        "%FinalizationRegistry%":
          typeof FinalizationRegistry > "u" ? ne : FinalizationRegistry,
        "%Function%": lh,
        "%GeneratorFunction%": tr,
        "%Int8Array%": typeof Int8Array > "u" ? ne : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? ne : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? ne : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": er ? Xe(Xe([][Symbol.iterator]())) : ne,
        "%JSON%": typeof JSON == "object" ? JSON : ne,
        "%Map%": typeof Map > "u" ? ne : Map,
        "%MapIteratorPrototype%":
          typeof Map > "u" || !er ? ne : Xe(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? ne : Promise,
        "%Proxy%": typeof Proxy > "u" ? ne : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? ne : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? ne : Set,
        "%SetIteratorPrototype%":
          typeof Set > "u" || !er ? ne : Xe(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%":
          typeof SharedArrayBuffer > "u" ? ne : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": er ? Xe(""[Symbol.iterator]()) : ne,
        "%Symbol%": er ? Symbol : ne,
        "%SyntaxError%": nr,
        "%ThrowTypeError%": KB,
        "%TypedArray%": YB,
        "%TypeError%": rr,
        "%Uint8Array%": typeof Uint8Array > "u" ? ne : Uint8Array,
        "%Uint8ClampedArray%":
          typeof Uint8ClampedArray > "u" ? ne : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? ne : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? ne : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? ne : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? ne : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? ne : WeakSet,
      };
    try {
      null.error;
    } catch (e) {
      (ih = Xe(Xe(e))), (Ot["%Error.prototype%"] = ih);
    }
    var ih,
      XB = function e(t) {
        var r;
        if (t === "%AsyncFunction%") r = Yo("async function () {}");
        else if (t === "%GeneratorFunction%") r = Yo("function* () {}");
        else if (t === "%AsyncGeneratorFunction%")
          r = Yo("async function* () {}");
        else if (t === "%AsyncGenerator%") {
          var n = e("%AsyncGeneratorFunction%");
          n && (r = n.prototype);
        } else if (t === "%AsyncIteratorPrototype%") {
          var a = e("%AsyncGenerator%");
          a && (r = Xe(a.prototype));
        }
        return (Ot[t] = r), r;
      },
      uh = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": [
          "AsyncGeneratorFunction",
          "prototype",
          "prototype",
        ],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"],
      },
      Hr = zn(),
      Hn = oh(),
      JB = Hr.call(Function.call, Array.prototype.concat),
      QB = Hr.call(Function.apply, Array.prototype.splice),
      sh = Hr.call(Function.call, String.prototype.replace),
      Gn = Hr.call(Function.call, String.prototype.slice),
      ZB = Hr.call(Function.call, RegExp.prototype.exec),
      eT =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      tT = /\\(\\)?/g,
      rT = function (t) {
        var r = Gn(t, 0, 1),
          n = Gn(t, -1);
        if (r === "%" && n !== "%")
          throw new nr("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%")
          throw new nr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return (
          sh(t, eT, function (o, i, u, s) {
            a[a.length] = u ? sh(s, tT, "$1") : i || o;
          }),
          a
        );
      },
      nT = function (t, r) {
        var n = t,
          a;
        if ((Hn(uh, n) && ((a = uh[n]), (n = "%" + a[0] + "%")), Hn(Ot, n))) {
          var o = Ot[n];
          if ((o === tr && (o = XB(n)), typeof o > "u" && !r))
            throw new rr(
              "intrinsic " +
                t +
                " exists, but is not available. Please file an issue!"
            );
          return { alias: a, name: n, value: o };
        }
        throw new nr("intrinsic " + t + " does not exist!");
      };
    ch.exports = function (t, r) {
      if (typeof t != "string" || t.length === 0)
        throw new rr("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof r != "boolean")
        throw new rr('"allowMissing" argument must be a boolean');
      if (ZB(/^%?[^%]*%?$/, t) === null)
        throw new nr(
          "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
        );
      var n = rT(t),
        a = n.length > 0 ? n[0] : "",
        o = nT("%" + a + "%", r),
        i = o.name,
        u = o.value,
        s = !1,
        d = o.alias;
      d && ((a = d[0]), QB(n, JB([0, 1], d)));
      for (var y = 1, A = !0; y < n.length; y += 1) {
        var g = n[y],
          m = Gn(g, 0, 1),
          E = Gn(g, -1);
        if (
          (m === '"' ||
            m === "'" ||
            m === "`" ||
            E === '"' ||
            E === "'" ||
            E === "`") &&
          m !== E
        )
          throw new nr("property names with quotes must have matching quotes");
        if (
          ((g === "constructor" || !A) && (s = !0),
          (a += "." + g),
          (i = "%" + a + "%"),
          Hn(Ot, i))
        )
          u = Ot[i];
        else if (u != null) {
          if (!(g in u)) {
            if (!r)
              throw new rr(
                "base intrinsic for " +
                  t +
                  " exists, but the property is not available."
              );
            return;
          }
          if (_t && y + 1 >= n.length) {
            var b = _t(u, g);
            (A = !!b),
              A && "get" in b && !("originalValue" in b.get)
                ? (u = b.get)
                : (u = u[g]);
          } else (A = Hn(u, g)), (u = u[g]);
          A && !s && (Ot[i] = u);
        }
      }
      return u;
    };
  });
  var gh = F((WX, Vn) => {
    "use strict";
    l();
    c();
    p();
    var Jo = zn(),
      ar = Wn(),
      fh = ar("%Function.prototype.apply%"),
      hh = ar("%Function.prototype.call%"),
      mh = ar("%Reflect.apply%", !0) || Jo.call(hh, fh),
      ph = ar("%Object.getOwnPropertyDescriptor%", !0),
      Rt = ar("%Object.defineProperty%", !0),
      aT = ar("%Math.max%");
    if (Rt)
      try {
        Rt({}, "a", { value: 1 });
      } catch {
        Rt = null;
      }
    Vn.exports = function (t) {
      var r = mh(Jo, hh, arguments);
      if (ph && Rt) {
        var n = ph(r, "length");
        n.configurable &&
          Rt(r, "length", {
            value: 1 + aT(0, t.length - (arguments.length - 1)),
          });
      }
      return r;
    };
    var dh = function () {
      return mh(Jo, fh, arguments);
    };
    Rt ? Rt(Vn.exports, "apply", { value: dh }) : (Vn.exports.apply = dh);
  });
  var Eh = F((XX, Ah) => {
    "use strict";
    l();
    c();
    p();
    var yh = Wn(),
      bh = gh(),
      oT = bh(yh("String.prototype.indexOf"));
    Ah.exports = function (t, r) {
      var n = yh(t, !!r);
      return typeof n == "function" && oT(t, ".prototype.") > -1 ? bh(n) : n;
    };
  });
  var Dh = F(() => {
    l();
    c();
    p();
  });
  var $h = F((oJ, Lh) => {
    l();
    c();
    p();
    var ui = typeof Map == "function" && Map.prototype,
      Qo =
        Object.getOwnPropertyDescriptor && ui
          ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
          : null,
      Yn = ui && Qo && typeof Qo.get == "function" ? Qo.get : null,
      vh = ui && Map.prototype.forEach,
      si = typeof Set == "function" && Set.prototype,
      Zo =
        Object.getOwnPropertyDescriptor && si
          ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
          : null,
      Xn = si && Zo && typeof Zo.get == "function" ? Zo.get : null,
      Ch = si && Set.prototype.forEach,
      iT = typeof WeakMap == "function" && WeakMap.prototype,
      Wr = iT ? WeakMap.prototype.has : null,
      uT = typeof WeakSet == "function" && WeakSet.prototype,
      Vr = uT ? WeakSet.prototype.has : null,
      sT = typeof WeakRef == "function" && WeakRef.prototype,
      xh = sT ? WeakRef.prototype.deref : null,
      lT = Boolean.prototype.valueOf,
      cT = Object.prototype.toString,
      pT = Function.prototype.toString,
      dT = String.prototype.match,
      li = String.prototype.slice,
      bt = String.prototype.replace,
      fT = String.prototype.toUpperCase,
      Fh = String.prototype.toLowerCase,
      Ih = RegExp.prototype.test,
      Sh = Array.prototype.concat,
      Je = Array.prototype.join,
      hT = Array.prototype.slice,
      wh = Math.floor,
      ri = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
      ei = Object.getOwnPropertySymbols,
      ni =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? Symbol.prototype.toString
          : null,
      or = typeof Symbol == "function" && typeof Symbol.iterator == "object",
      Re =
        typeof Symbol == "function" &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === or || "symbol")
          ? Symbol.toStringTag
          : null,
      kh = Object.prototype.propertyIsEnumerable,
      Bh =
        (typeof Reflect == "function"
          ? Reflect.getPrototypeOf
          : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (e) {
              return e.__proto__;
            }
          : null);
    function Th(e, t) {
      if (
        e === 1 / 0 ||
        e === -1 / 0 ||
        e !== e ||
        (e && e > -1e3 && e < 1e3) ||
        Ih.call(/e/, t)
      )
        return t;
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof e == "number") {
        var n = e < 0 ? -wh(-e) : wh(e);
        if (n !== e) {
          var a = String(n),
            o = li.call(t, a.length + 1);
          return (
            bt.call(a, r, "$&_") +
            "." +
            bt.call(bt.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
          );
        }
      }
      return bt.call(t, r, "$&_");
    }
    var ai = Dh(),
      _h = ai.custom,
      Oh = jh(_h) ? _h : null;
    Lh.exports = function e(t, r, n, a) {
      var o = r || {};
      if (
        yt(o, "quoteStyle") &&
        o.quoteStyle !== "single" &&
        o.quoteStyle !== "double"
      )
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        yt(o, "maxStringLength") &&
        (typeof o.maxStringLength == "number"
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : o.maxStringLength !== null)
      )
        throw new TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
        );
      var i = yt(o, "customInspect") ? o.customInspect : !0;
      if (typeof i != "boolean" && i !== "symbol")
        throw new TypeError(
          "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
        );
      if (
        yt(o, "indent") &&
        o.indent !== null &&
        o.indent !== "	" &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw new TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`'
        );
      if (yt(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
        throw new TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`'
        );
      var u = o.numericSeparator;
      if (typeof t > "u") return "undefined";
      if (t === null) return "null";
      if (typeof t == "boolean") return t ? "true" : "false";
      if (typeof t == "string") return qh(t, o);
      if (typeof t == "number") {
        if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
        var s = String(t);
        return u ? Th(t, s) : s;
      }
      if (typeof t == "bigint") {
        var d = String(t) + "n";
        return u ? Th(t, d) : d;
      }
      var y = typeof o.depth > "u" ? 5 : o.depth;
      if ((typeof n > "u" && (n = 0), n >= y && y > 0 && typeof t == "object"))
        return oi(t) ? "[Array]" : "[Object]";
      var A = RT(o, n);
      if (typeof a > "u") a = [];
      else if (Mh(a, t) >= 0) return "[Circular]";
      function g(J, O, T) {
        if ((O && ((a = hT.call(a)), a.push(O)), T)) {
          var q = { depth: o.depth };
          return (
            yt(o, "quoteStyle") && (q.quoteStyle = o.quoteStyle),
            e(J, q, n + 1, a)
          );
        }
        return e(J, o, n + 1, a);
      }
      if (typeof t == "function" && !Rh(t)) {
        var m = CT(t),
          E = Kn(t, g);
        return (
          "[Function" +
          (m ? ": " + m : " (anonymous)") +
          "]" +
          (E.length > 0 ? " { " + Je.call(E, ", ") + " }" : "")
        );
      }
      if (jh(t)) {
        var b = or
          ? bt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
          : ni.call(t);
        return typeof t == "object" && !or ? Gr(b) : b;
      }
      if (TT(t)) {
        for (
          var x = "<" + Fh.call(String(t.nodeName)),
            S = t.attributes || [],
            P = 0;
          P < S.length;
          P++
        )
          x += " " + S[P].name + "=" + Nh(mT(S[P].value), "double", o);
        return (
          (x += ">"),
          t.childNodes && t.childNodes.length && (x += "..."),
          (x += "</" + Fh.call(String(t.nodeName)) + ">"),
          x
        );
      }
      if (oi(t)) {
        if (t.length === 0) return "[]";
        var j = Kn(t, g);
        return A && !OT(j)
          ? "[" + ii(j, A) + "]"
          : "[ " + Je.call(j, ", ") + " ]";
      }
      if (yT(t)) {
        var $ = Kn(t, g);
        return !("cause" in Error.prototype) &&
          "cause" in t &&
          !kh.call(t, "cause")
          ? "{ [" +
              String(t) +
              "] " +
              Je.call(Sh.call("[cause]: " + g(t.cause), $), ", ") +
              " }"
          : $.length === 0
          ? "[" + String(t) + "]"
          : "{ [" + String(t) + "] " + Je.call($, ", ") + " }";
      }
      if (typeof t == "object" && i) {
        if (Oh && typeof t[Oh] == "function" && ai)
          return ai(t, { depth: y - n });
        if (i !== "symbol" && typeof t.inspect == "function")
          return t.inspect();
      }
      if (xT(t)) {
        var w = [];
        return (
          vh &&
            vh.call(t, function (J, O) {
              w.push(g(O, t, !0) + " => " + g(J, t));
            }),
          Ph("Map", Yn.call(t), w, A)
        );
      }
      if (wT(t)) {
        var M = [];
        return (
          Ch &&
            Ch.call(t, function (J) {
              M.push(g(J, t));
            }),
          Ph("Set", Xn.call(t), M, A)
        );
      }
      if (FT(t)) return ti("WeakMap");
      if (BT(t)) return ti("WeakSet");
      if (ST(t)) return ti("WeakRef");
      if (AT(t)) return Gr(g(Number(t)));
      if (DT(t)) return Gr(g(ri.call(t)));
      if (ET(t)) return Gr(lT.call(t));
      if (bT(t)) return Gr(g(String(t)));
      if (!gT(t) && !Rh(t)) {
        var I = Kn(t, g),
          U = Bh
            ? Bh(t) === Object.prototype
            : t instanceof Object || t.constructor === Object,
          K = t instanceof Object ? "" : "null prototype",
          z =
            !U && Re && Object(t) === t && Re in t
              ? li.call(At(t), 8, -1)
              : K
              ? "Object"
              : "",
          he =
            U || typeof t.constructor != "function"
              ? ""
              : t.constructor.name
              ? t.constructor.name + " "
              : "",
          re =
            he +
            (z || K
              ? "[" + Je.call(Sh.call([], z || [], K || []), ": ") + "] "
              : "");
        return I.length === 0
          ? re + "{}"
          : A
          ? re + "{" + ii(I, A) + "}"
          : re + "{ " + Je.call(I, ", ") + " }";
      }
      return String(t);
    };
    function Nh(e, t, r) {
      var n = (r.quoteStyle || t) === "double" ? '"' : "'";
      return n + e + n;
    }
    function mT(e) {
      return bt.call(String(e), /"/g, "&quot;");
    }
    function oi(e) {
      return (
        At(e) === "[object Array]" &&
        (!Re || !(typeof e == "object" && Re in e))
      );
    }
    function gT(e) {
      return (
        At(e) === "[object Date]" && (!Re || !(typeof e == "object" && Re in e))
      );
    }
    function Rh(e) {
      return (
        At(e) === "[object RegExp]" &&
        (!Re || !(typeof e == "object" && Re in e))
      );
    }
    function yT(e) {
      return (
        At(e) === "[object Error]" &&
        (!Re || !(typeof e == "object" && Re in e))
      );
    }
    function bT(e) {
      return (
        At(e) === "[object String]" &&
        (!Re || !(typeof e == "object" && Re in e))
      );
    }
    function AT(e) {
      return (
        At(e) === "[object Number]" &&
        (!Re || !(typeof e == "object" && Re in e))
      );
    }
    function ET(e) {
      return (
        At(e) === "[object Boolean]" &&
        (!Re || !(typeof e == "object" && Re in e))
      );
    }
    function jh(e) {
      if (or) return e && typeof e == "object" && e instanceof Symbol;
      if (typeof e == "symbol") return !0;
      if (!e || typeof e != "object" || !ni) return !1;
      try {
        return ni.call(e), !0;
      } catch {}
      return !1;
    }
    function DT(e) {
      if (!e || typeof e != "object" || !ri) return !1;
      try {
        return ri.call(e), !0;
      } catch {}
      return !1;
    }
    var vT =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this;
      };
    function yt(e, t) {
      return vT.call(e, t);
    }
    function At(e) {
      return cT.call(e);
    }
    function CT(e) {
      if (e.name) return e.name;
      var t = dT.call(pT.call(e), /^function\s*([\w$]+)/);
      return t ? t[1] : null;
    }
    function Mh(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
      return -1;
    }
    function xT(e) {
      if (!Yn || !e || typeof e != "object") return !1;
      try {
        Yn.call(e);
        try {
          Xn.call(e);
        } catch {
          return !0;
        }
        return e instanceof Map;
      } catch {}
      return !1;
    }
    function FT(e) {
      if (!Wr || !e || typeof e != "object") return !1;
      try {
        Wr.call(e, Wr);
        try {
          Vr.call(e, Vr);
        } catch {
          return !0;
        }
        return e instanceof WeakMap;
      } catch {}
      return !1;
    }
    function ST(e) {
      if (!xh || !e || typeof e != "object") return !1;
      try {
        return xh.call(e), !0;
      } catch {}
      return !1;
    }
    function wT(e) {
      if (!Xn || !e || typeof e != "object") return !1;
      try {
        Xn.call(e);
        try {
          Yn.call(e);
        } catch {
          return !0;
        }
        return e instanceof Set;
      } catch {}
      return !1;
    }
    function BT(e) {
      if (!Vr || !e || typeof e != "object") return !1;
      try {
        Vr.call(e, Vr);
        try {
          Wr.call(e, Wr);
        } catch {
          return !0;
        }
        return e instanceof WeakSet;
      } catch {}
      return !1;
    }
    function TT(e) {
      return !e || typeof e != "object"
        ? !1
        : typeof HTMLElement < "u" && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
    }
    function qh(e, t) {
      if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength,
          n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return qh(li.call(e, 0, t.maxStringLength), t) + n;
      }
      var a = bt.call(bt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, _T);
      return Nh(a, "single", t);
    }
    function _T(e) {
      var t = e.charCodeAt(0),
        r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
      return r
        ? "\\" + r
        : "\\x" + (t < 16 ? "0" : "") + fT.call(t.toString(16));
    }
    function Gr(e) {
      return "Object(" + e + ")";
    }
    function ti(e) {
      return e + " { ? }";
    }
    function Ph(e, t, r, n) {
      var a = n ? ii(r, n) : Je.call(r, ", ");
      return e + " (" + t + ") {" + a + "}";
    }
    function OT(e) {
      for (var t = 0; t < e.length; t++)
        if (
          Mh(
            e[t],
            `
`
          ) >= 0
        )
          return !1;
      return !0;
    }
    function RT(e, t) {
      var r;
      if (e.indent === "	") r = "	";
      else if (typeof e.indent == "number" && e.indent > 0)
        r = Je.call(Array(e.indent + 1), " ");
      else return null;
      return { base: r, prev: Je.call(Array(t + 1), r) };
    }
    function ii(e, t) {
      if (e.length === 0) return "";
      var r =
        `
` +
        t.prev +
        t.base;
      return (
        r +
        Je.call(e, "," + r) +
        `
` +
        t.prev
      );
    }
    function Kn(e, t) {
      var r = oi(e),
        n = [];
      if (r) {
        n.length = e.length;
        for (var a = 0; a < e.length; a++) n[a] = yt(e, a) ? t(e[a], e) : "";
      }
      var o = typeof ei == "function" ? ei(e) : [],
        i;
      if (or) {
        i = {};
        for (var u = 0; u < o.length; u++) i["$" + o[u]] = o[u];
      }
      for (var s in e)
        yt(e, s) &&
          ((r && String(Number(s)) === s && s < e.length) ||
            (or && i["$" + s] instanceof Symbol) ||
            (Ih.call(/[^\w$]/, s)
              ? n.push(t(s, e) + ": " + t(e[s], e))
              : n.push(s + ": " + t(e[s], e))));
      if (typeof ei == "function")
        for (var d = 0; d < o.length; d++)
          kh.call(e, o[d]) && n.push("[" + t(o[d]) + "]: " + t(e[o[d]], e));
      return n;
    }
  });
  var zh = F((lJ, Uh) => {
    "use strict";
    l();
    c();
    p();
    var ci = Wn(),
      ir = Eh(),
      PT = $h(),
      IT = ci("%TypeError%"),
      Jn = ci("%WeakMap%", !0),
      Qn = ci("%Map%", !0),
      kT = ir("WeakMap.prototype.get", !0),
      NT = ir("WeakMap.prototype.set", !0),
      jT = ir("WeakMap.prototype.has", !0),
      MT = ir("Map.prototype.get", !0),
      qT = ir("Map.prototype.set", !0),
      LT = ir("Map.prototype.has", !0),
      pi = function (e, t) {
        for (var r = e, n; (n = r.next) !== null; r = n)
          if (n.key === t)
            return (r.next = n.next), (n.next = e.next), (e.next = n), n;
      },
      $T = function (e, t) {
        var r = pi(e, t);
        return r && r.value;
      },
      UT = function (e, t, r) {
        var n = pi(e, t);
        n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
      },
      zT = function (e, t) {
        return !!pi(e, t);
      };
    Uh.exports = function () {
      var t,
        r,
        n,
        a = {
          assert: function (o) {
            if (!a.has(o))
              throw new IT("Side channel does not contain " + PT(o));
          },
          get: function (o) {
            if (Jn && o && (typeof o == "object" || typeof o == "function")) {
              if (t) return kT(t, o);
            } else if (Qn) {
              if (r) return MT(r, o);
            } else if (n) return $T(n, o);
          },
          has: function (o) {
            if (Jn && o && (typeof o == "object" || typeof o == "function")) {
              if (t) return jT(t, o);
            } else if (Qn) {
              if (r) return LT(r, o);
            } else if (n) return zT(n, o);
            return !1;
          },
          set: function (o, i) {
            Jn && o && (typeof o == "object" || typeof o == "function")
              ? (t || (t = new Jn()), NT(t, o, i))
              : Qn
              ? (r || (r = new Qn()), qT(r, o, i))
              : (n || (n = { key: {}, next: null }), UT(n, o, i));
          },
        };
      return a;
    };
  });
  var Zn = F((fJ, Hh) => {
    "use strict";
    l();
    c();
    p();
    var HT = String.prototype.replace,
      GT = /%20/g,
      di = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
    Hh.exports = {
      default: di.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return HT.call(e, GT, "+");
        },
        RFC3986: function (e) {
          return String(e);
        },
      },
      RFC1738: di.RFC1738,
      RFC3986: di.RFC3986,
    };
  });
  var hi = F((yJ, Wh) => {
    "use strict";
    l();
    c();
    p();
    var WT = Zn(),
      fi = Object.prototype.hasOwnProperty,
      Pt = Array.isArray,
      Qe = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
      })(),
      VT = function (t) {
        for (; t.length > 1; ) {
          var r = t.pop(),
            n = r.obj[r.prop];
          if (Pt(n)) {
            for (var a = [], o = 0; o < n.length; ++o)
              typeof n[o] < "u" && a.push(n[o]);
            r.obj[r.prop] = a;
          }
        }
      },
      Gh = function (t, r) {
        for (
          var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
          a < t.length;
          ++a
        )
          typeof t[a] < "u" && (n[a] = t[a]);
        return n;
      },
      KT = function e(t, r, n) {
        if (!r) return t;
        if (typeof r != "object") {
          if (Pt(t)) t.push(r);
          else if (t && typeof t == "object")
            ((n && (n.plainObjects || n.allowPrototypes)) ||
              !fi.call(Object.prototype, r)) &&
              (t[r] = !0);
          else return [t, r];
          return t;
        }
        if (!t || typeof t != "object") return [t].concat(r);
        var a = t;
        return (
          Pt(t) && !Pt(r) && (a = Gh(t, n)),
          Pt(t) && Pt(r)
            ? (r.forEach(function (o, i) {
                if (fi.call(t, i)) {
                  var u = t[i];
                  u && typeof u == "object" && o && typeof o == "object"
                    ? (t[i] = e(u, o, n))
                    : t.push(o);
                } else t[i] = o;
              }),
              t)
            : Object.keys(r).reduce(function (o, i) {
                var u = r[i];
                return fi.call(o, i) ? (o[i] = e(o[i], u, n)) : (o[i] = u), o;
              }, a)
        );
      },
      YT = function (t, r) {
        return Object.keys(r).reduce(function (n, a) {
          return (n[a] = r[a]), n;
        }, t);
      },
      XT = function (e, t, r) {
        var n = e.replace(/\+/g, " ");
        if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(n);
        } catch {
          return n;
        }
      },
      JT = function (t, r, n, a, o) {
        if (t.length === 0) return t;
        var i = t;
        if (
          (typeof t == "symbol"
            ? (i = Symbol.prototype.toString.call(t))
            : typeof t != "string" && (i = String(t)),
          n === "iso-8859-1")
        )
          return escape(i).replace(/%u[0-9a-f]{4}/gi, function (y) {
            return "%26%23" + parseInt(y.slice(2), 16) + "%3B";
          });
        for (var u = "", s = 0; s < i.length; ++s) {
          var d = i.charCodeAt(s);
          if (
            d === 45 ||
            d === 46 ||
            d === 95 ||
            d === 126 ||
            (d >= 48 && d <= 57) ||
            (d >= 65 && d <= 90) ||
            (d >= 97 && d <= 122) ||
            (o === WT.RFC1738 && (d === 40 || d === 41))
          ) {
            u += i.charAt(s);
            continue;
          }
          if (d < 128) {
            u = u + Qe[d];
            continue;
          }
          if (d < 2048) {
            u = u + (Qe[192 | (d >> 6)] + Qe[128 | (d & 63)]);
            continue;
          }
          if (d < 55296 || d >= 57344) {
            u =
              u +
              (Qe[224 | (d >> 12)] +
                Qe[128 | ((d >> 6) & 63)] +
                Qe[128 | (d & 63)]);
            continue;
          }
          (s += 1),
            (d = 65536 + (((d & 1023) << 10) | (i.charCodeAt(s) & 1023))),
            (u +=
              Qe[240 | (d >> 18)] +
              Qe[128 | ((d >> 12) & 63)] +
              Qe[128 | ((d >> 6) & 63)] +
              Qe[128 | (d & 63)]);
        }
        return u;
      },
      QT = function (t) {
        for (
          var r = [{ obj: { o: t }, prop: "o" }], n = [], a = 0;
          a < r.length;
          ++a
        )
          for (
            var o = r[a], i = o.obj[o.prop], u = Object.keys(i), s = 0;
            s < u.length;
            ++s
          ) {
            var d = u[s],
              y = i[d];
            typeof y == "object" &&
              y !== null &&
              n.indexOf(y) === -1 &&
              (r.push({ obj: i, prop: d }), n.push(y));
          }
        return VT(r), t;
      },
      ZT = function (t) {
        return Object.prototype.toString.call(t) === "[object RegExp]";
      },
      e8 = function (t) {
        return !t || typeof t != "object"
          ? !1
          : !!(
              t.constructor &&
              t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            );
      },
      t8 = function (t, r) {
        return [].concat(t, r);
      },
      r8 = function (t, r) {
        if (Pt(t)) {
          for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]));
          return n;
        }
        return r(t);
      };
    Wh.exports = {
      arrayToObject: Gh,
      assign: YT,
      combine: t8,
      compact: QT,
      decode: XT,
      encode: JT,
      isBuffer: e8,
      isRegExp: ZT,
      maybeMap: r8,
      merge: KT,
    };
  });
  var Qh = F((DJ, Jh) => {
    "use strict";
    l();
    c();
    p();
    var Yh = zh(),
      ea = hi(),
      Kr = Zn(),
      n8 = Object.prototype.hasOwnProperty,
      Vh = {
        brackets: function (t) {
          return t + "[]";
        },
        comma: "comma",
        indices: function (t, r) {
          return t + "[" + r + "]";
        },
        repeat: function (t) {
          return t;
        },
      },
      st = Array.isArray,
      a8 = Array.prototype.push,
      Xh = function (e, t) {
        a8.apply(e, st(t) ? t : [t]);
      },
      o8 = Date.prototype.toISOString,
      Kh = Kr.default,
      Pe = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: ea.encode,
        encodeValuesOnly: !1,
        format: Kh,
        formatter: Kr.formatters[Kh],
        indices: !1,
        serializeDate: function (t) {
          return o8.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      i8 = function (t) {
        return (
          typeof t == "string" ||
          typeof t == "number" ||
          typeof t == "boolean" ||
          typeof t == "symbol" ||
          typeof t == "bigint"
        );
      },
      mi = {},
      u8 = function e(t, r, n, a, o, i, u, s, d, y, A, g, m, E, b, x) {
        for (
          var S = t, P = x, j = 0, $ = !1;
          (P = P.get(mi)) !== void 0 && !$;

        ) {
          var w = P.get(t);
          if (((j += 1), typeof w < "u")) {
            if (w === j) throw new RangeError("Cyclic object value");
            $ = !0;
          }
          typeof P.get(mi) > "u" && (j = 0);
        }
        if (
          (typeof s == "function"
            ? (S = s(r, S))
            : S instanceof Date
            ? (S = A(S))
            : n === "comma" &&
              st(S) &&
              (S = ea.maybeMap(S, function (q) {
                return q instanceof Date ? A(q) : q;
              })),
          S === null)
        ) {
          if (o) return u && !E ? u(r, Pe.encoder, b, "key", g) : r;
          S = "";
        }
        if (i8(S) || ea.isBuffer(S)) {
          if (u) {
            var M = E ? r : u(r, Pe.encoder, b, "key", g);
            return [m(M) + "=" + m(u(S, Pe.encoder, b, "value", g))];
          }
          return [m(r) + "=" + m(String(S))];
        }
        var I = [];
        if (typeof S > "u") return I;
        var U;
        if (n === "comma" && st(S))
          E && u && (S = ea.maybeMap(S, u)),
            (U = [{ value: S.length > 0 ? S.join(",") || null : void 0 }]);
        else if (st(s)) U = s;
        else {
          var K = Object.keys(S);
          U = d ? K.sort(d) : K;
        }
        for (
          var z = a && st(S) && S.length === 1 ? r + "[]" : r, he = 0;
          he < U.length;
          ++he
        ) {
          var re = U[he],
            J =
              typeof re == "object" && typeof re.value < "u" ? re.value : S[re];
          if (!(i && J === null)) {
            var O = st(S)
              ? typeof n == "function"
                ? n(z, re)
                : z
              : z + (y ? "." + re : "[" + re + "]");
            x.set(t, j);
            var T = Yh();
            T.set(mi, x),
              Xh(
                I,
                e(
                  J,
                  O,
                  n,
                  a,
                  o,
                  i,
                  n === "comma" && E && st(S) ? null : u,
                  s,
                  d,
                  y,
                  A,
                  g,
                  m,
                  E,
                  b,
                  T
                )
              );
          }
        }
        return I;
      },
      s8 = function (t) {
        if (!t) return Pe;
        if (
          t.encoder !== null &&
          typeof t.encoder < "u" &&
          typeof t.encoder != "function"
        )
          throw new TypeError("Encoder has to be a function.");
        var r = t.charset || Pe.charset;
        if (
          typeof t.charset < "u" &&
          t.charset !== "utf-8" &&
          t.charset !== "iso-8859-1"
        )
          throw new TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var n = Kr.default;
        if (typeof t.format < "u") {
          if (!n8.call(Kr.formatters, t.format))
            throw new TypeError("Unknown format option provided.");
          n = t.format;
        }
        var a = Kr.formatters[n],
          o = Pe.filter;
        return (
          (typeof t.filter == "function" || st(t.filter)) && (o = t.filter),
          {
            addQueryPrefix:
              typeof t.addQueryPrefix == "boolean"
                ? t.addQueryPrefix
                : Pe.addQueryPrefix,
            allowDots: typeof t.allowDots > "u" ? Pe.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == "boolean"
                ? t.charsetSentinel
                : Pe.charsetSentinel,
            delimiter: typeof t.delimiter > "u" ? Pe.delimiter : t.delimiter,
            encode: typeof t.encode == "boolean" ? t.encode : Pe.encode,
            encoder: typeof t.encoder == "function" ? t.encoder : Pe.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly == "boolean"
                ? t.encodeValuesOnly
                : Pe.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate:
              typeof t.serializeDate == "function"
                ? t.serializeDate
                : Pe.serializeDate,
            skipNulls:
              typeof t.skipNulls == "boolean" ? t.skipNulls : Pe.skipNulls,
            sort: typeof t.sort == "function" ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling == "boolean"
                ? t.strictNullHandling
                : Pe.strictNullHandling,
          }
        );
      };
    Jh.exports = function (e, t) {
      var r = e,
        n = s8(t),
        a,
        o;
      typeof n.filter == "function"
        ? ((o = n.filter), (r = o("", r)))
        : st(n.filter) && ((o = n.filter), (a = o));
      var i = [];
      if (typeof r != "object" || r === null) return "";
      var u;
      t && t.arrayFormat in Vh
        ? (u = t.arrayFormat)
        : t && "indices" in t
        ? (u = t.indices ? "indices" : "repeat")
        : (u = "indices");
      var s = Vh[u];
      if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      var d = s === "comma" && t && t.commaRoundTrip;
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
      for (var y = Yh(), A = 0; A < a.length; ++A) {
        var g = a[A];
        (n.skipNulls && r[g] === null) ||
          Xh(
            i,
            u8(
              r[g],
              g,
              s,
              d,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              y
            )
          );
      }
      var m = i.join(n.delimiter),
        E = n.addQueryPrefix === !0 ? "?" : "";
      return (
        n.charsetSentinel &&
          (n.charset === "iso-8859-1"
            ? (E += "utf8=%26%2310003%3B&")
            : (E += "utf8=%E2%9C%93&")),
        m.length > 0 ? E + m : ""
      );
    };
  });
  var tm = F((FJ, em) => {
    "use strict";
    l();
    c();
    p();
    var ur = hi(),
      gi = Object.prototype.hasOwnProperty,
      l8 = Array.isArray,
      Te = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: ur.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      c8 = function (e) {
        return e.replace(/&#(\d+);/g, function (t, r) {
          return String.fromCharCode(parseInt(r, 10));
        });
      },
      Zh = function (e, t) {
        return e && typeof e == "string" && t.comma && e.indexOf(",") > -1
          ? e.split(",")
          : e;
      },
      p8 = "utf8=%26%2310003%3B",
      d8 = "utf8=%E2%9C%93",
      f8 = function (t, r) {
        var n = {},
          a = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
          o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
          i = a.split(r.delimiter, o),
          u = -1,
          s,
          d = r.charset;
        if (r.charsetSentinel)
          for (s = 0; s < i.length; ++s)
            i[s].indexOf("utf8=") === 0 &&
              (i[s] === d8 ? (d = "utf-8") : i[s] === p8 && (d = "iso-8859-1"),
              (u = s),
              (s = i.length));
        for (s = 0; s < i.length; ++s)
          if (s !== u) {
            var y = i[s],
              A = y.indexOf("]="),
              g = A === -1 ? y.indexOf("=") : A + 1,
              m,
              E;
            g === -1
              ? ((m = r.decoder(y, Te.decoder, d, "key")),
                (E = r.strictNullHandling ? null : ""))
              : ((m = r.decoder(y.slice(0, g), Te.decoder, d, "key")),
                (E = ur.maybeMap(Zh(y.slice(g + 1), r), function (b) {
                  return r.decoder(b, Te.decoder, d, "value");
                }))),
              E &&
                r.interpretNumericEntities &&
                d === "iso-8859-1" &&
                (E = c8(E)),
              y.indexOf("[]=") > -1 && (E = l8(E) ? [E] : E),
              gi.call(n, m) ? (n[m] = ur.combine(n[m], E)) : (n[m] = E);
          }
        return n;
      },
      h8 = function (e, t, r, n) {
        for (var a = n ? t : Zh(t, r), o = e.length - 1; o >= 0; --o) {
          var i,
            u = e[o];
          if (u === "[]" && r.parseArrays) i = [].concat(a);
          else {
            i = r.plainObjects ? Object.create(null) : {};
            var s =
                u.charAt(0) === "[" && u.charAt(u.length - 1) === "]"
                  ? u.slice(1, -1)
                  : u,
              d = parseInt(s, 10);
            !r.parseArrays && s === ""
              ? (i = { 0: a })
              : !isNaN(d) &&
                u !== s &&
                String(d) === s &&
                d >= 0 &&
                r.parseArrays &&
                d <= r.arrayLimit
              ? ((i = []), (i[d] = a))
              : s !== "__proto__" && (i[s] = a);
          }
          a = i;
        }
        return a;
      },
      m8 = function (t, r, n, a) {
        if (t) {
          var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
            i = /(\[[^[\]]*])/,
            u = /(\[[^[\]]*])/g,
            s = n.depth > 0 && i.exec(o),
            d = s ? o.slice(0, s.index) : o,
            y = [];
          if (d) {
            if (
              !n.plainObjects &&
              gi.call(Object.prototype, d) &&
              !n.allowPrototypes
            )
              return;
            y.push(d);
          }
          for (
            var A = 0;
            n.depth > 0 && (s = u.exec(o)) !== null && A < n.depth;

          ) {
            if (
              ((A += 1),
              !n.plainObjects &&
                gi.call(Object.prototype, s[1].slice(1, -1)) &&
                !n.allowPrototypes)
            )
              return;
            y.push(s[1]);
          }
          return s && y.push("[" + o.slice(s.index) + "]"), h8(y, r, n, a);
        }
      },
      g8 = function (t) {
        if (!t) return Te;
        if (
          t.decoder !== null &&
          t.decoder !== void 0 &&
          typeof t.decoder != "function"
        )
          throw new TypeError("Decoder has to be a function.");
        if (
          typeof t.charset < "u" &&
          t.charset !== "utf-8" &&
          t.charset !== "iso-8859-1"
        )
          throw new TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var r = typeof t.charset > "u" ? Te.charset : t.charset;
        return {
          allowDots: typeof t.allowDots > "u" ? Te.allowDots : !!t.allowDots,
          allowPrototypes:
            typeof t.allowPrototypes == "boolean"
              ? t.allowPrototypes
              : Te.allowPrototypes,
          allowSparse:
            typeof t.allowSparse == "boolean" ? t.allowSparse : Te.allowSparse,
          arrayLimit:
            typeof t.arrayLimit == "number" ? t.arrayLimit : Te.arrayLimit,
          charset: r,
          charsetSentinel:
            typeof t.charsetSentinel == "boolean"
              ? t.charsetSentinel
              : Te.charsetSentinel,
          comma: typeof t.comma == "boolean" ? t.comma : Te.comma,
          decoder: typeof t.decoder == "function" ? t.decoder : Te.decoder,
          delimiter:
            typeof t.delimiter == "string" || ur.isRegExp(t.delimiter)
              ? t.delimiter
              : Te.delimiter,
          depth:
            typeof t.depth == "number" || t.depth === !1 ? +t.depth : Te.depth,
          ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
          interpretNumericEntities:
            typeof t.interpretNumericEntities == "boolean"
              ? t.interpretNumericEntities
              : Te.interpretNumericEntities,
          parameterLimit:
            typeof t.parameterLimit == "number"
              ? t.parameterLimit
              : Te.parameterLimit,
          parseArrays: t.parseArrays !== !1,
          plainObjects:
            typeof t.plainObjects == "boolean"
              ? t.plainObjects
              : Te.plainObjects,
          strictNullHandling:
            typeof t.strictNullHandling == "boolean"
              ? t.strictNullHandling
              : Te.strictNullHandling,
        };
      };
    em.exports = function (e, t) {
      var r = g8(t);
      if (e === "" || e === null || typeof e > "u")
        return r.plainObjects ? Object.create(null) : {};
      for (
        var n = typeof e == "string" ? f8(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          i = 0;
        i < o.length;
        ++i
      ) {
        var u = o[i],
          s = m8(u, n[u], r, typeof e == "string");
        a = ur.merge(a, s, r);
      }
      return r.allowSparse === !0 ? a : ur.compact(a);
    };
  });
  var sr = F((TJ, rm) => {
    "use strict";
    l();
    c();
    p();
    var y8 = Qh(),
      b8 = tm(),
      A8 = Zn();
    rm.exports = { formats: A8, parse: b8, stringify: y8 };
  });
  var _m = F((ree, Tm) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      function e(i) {
        if (i == null) return !1;
        switch (i.type) {
          case "ArrayExpression":
          case "AssignmentExpression":
          case "BinaryExpression":
          case "CallExpression":
          case "ConditionalExpression":
          case "FunctionExpression":
          case "Identifier":
          case "Literal":
          case "LogicalExpression":
          case "MemberExpression":
          case "NewExpression":
          case "ObjectExpression":
          case "SequenceExpression":
          case "ThisExpression":
          case "UnaryExpression":
          case "UpdateExpression":
            return !0;
        }
        return !1;
      }
      function t(i) {
        if (i == null) return !1;
        switch (i.type) {
          case "DoWhileStatement":
          case "ForInStatement":
          case "ForStatement":
          case "WhileStatement":
            return !0;
        }
        return !1;
      }
      function r(i) {
        if (i == null) return !1;
        switch (i.type) {
          case "BlockStatement":
          case "BreakStatement":
          case "ContinueStatement":
          case "DebuggerStatement":
          case "DoWhileStatement":
          case "EmptyStatement":
          case "ExpressionStatement":
          case "ForInStatement":
          case "ForStatement":
          case "IfStatement":
          case "LabeledStatement":
          case "ReturnStatement":
          case "SwitchStatement":
          case "ThrowStatement":
          case "TryStatement":
          case "VariableDeclaration":
          case "WhileStatement":
          case "WithStatement":
            return !0;
        }
        return !1;
      }
      function n(i) {
        return r(i) || (i != null && i.type === "FunctionDeclaration");
      }
      function a(i) {
        switch (i.type) {
          case "IfStatement":
            return i.alternate != null ? i.alternate : i.consequent;
          case "LabeledStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "WithStatement":
            return i.body;
        }
        return null;
      }
      function o(i) {
        var u;
        if (i.type !== "IfStatement" || i.alternate == null) return !1;
        u = i.consequent;
        do {
          if (u.type === "IfStatement" && u.alternate == null) return !0;
          u = a(u);
        } while (u);
        return !1;
      }
      Tm.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: o,
        trailingStatement: a,
      };
    })();
  });
  var Fi = F((iee, Om) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a, o;
      (t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        });
      function i(x) {
        return 48 <= x && x <= 57;
      }
      function u(x) {
        return (
          (48 <= x && x <= 57) || (97 <= x && x <= 102) || (65 <= x && x <= 70)
        );
      }
      function s(x) {
        return x >= 48 && x <= 55;
      }
      r = [
        5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
        8239, 8287, 12288, 65279,
      ];
      function d(x) {
        return (
          x === 32 ||
          x === 9 ||
          x === 11 ||
          x === 12 ||
          x === 160 ||
          (x >= 5760 && r.indexOf(x) >= 0)
        );
      }
      function y(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233;
      }
      function A(x) {
        if (x <= 65535) return String.fromCharCode(x);
        var S = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
          P = String.fromCharCode(((x - 65536) % 1024) + 56320);
        return S + P;
      }
      for (n = new Array(128), o = 0; o < 128; ++o)
        n[o] =
          (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 36 || o === 95;
      for (a = new Array(128), o = 0; o < 128; ++o)
        a[o] =
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          o === 36 ||
          o === 95;
      function g(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(A(x));
      }
      function m(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(A(x));
      }
      function E(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(A(x));
      }
      function b(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(A(x));
      }
      Om.exports = {
        isDecimalDigit: i,
        isHexDigit: u,
        isOctalDigit: s,
        isWhiteSpace: d,
        isLineTerminator: y,
        isIdentifierStartES5: g,
        isIdentifierPartES5: m,
        isIdentifierStartES6: E,
        isIdentifierPartES6: b,
      };
    })();
  });
  var Pm = F((cee, Rm) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e = Fi();
      function t(g) {
        switch (g) {
          case "implements":
          case "interface":
          case "package":
          case "private":
          case "protected":
          case "public":
          case "static":
          case "let":
            return !0;
          default:
            return !1;
        }
      }
      function r(g, m) {
        return !m && g === "yield" ? !1 : n(g, m);
      }
      function n(g, m) {
        if (m && t(g)) return !0;
        switch (g.length) {
          case 2:
            return g === "if" || g === "in" || g === "do";
          case 3:
            return g === "var" || g === "for" || g === "new" || g === "try";
          case 4:
            return (
              g === "this" ||
              g === "else" ||
              g === "case" ||
              g === "void" ||
              g === "with" ||
              g === "enum"
            );
          case 5:
            return (
              g === "while" ||
              g === "break" ||
              g === "catch" ||
              g === "throw" ||
              g === "const" ||
              g === "yield" ||
              g === "class" ||
              g === "super"
            );
          case 6:
            return (
              g === "return" ||
              g === "typeof" ||
              g === "delete" ||
              g === "switch" ||
              g === "export" ||
              g === "import"
            );
          case 7:
            return g === "default" || g === "finally" || g === "extends";
          case 8:
            return g === "function" || g === "continue" || g === "debugger";
          case 10:
            return g === "instanceof";
          default:
            return !1;
        }
      }
      function a(g, m) {
        return g === "null" || g === "true" || g === "false" || r(g, m);
      }
      function o(g, m) {
        return g === "null" || g === "true" || g === "false" || n(g, m);
      }
      function i(g) {
        return g === "eval" || g === "arguments";
      }
      function u(g) {
        var m, E, b;
        if (
          g.length === 0 ||
          ((b = g.charCodeAt(0)), !e.isIdentifierStartES5(b))
        )
          return !1;
        for (m = 1, E = g.length; m < E; ++m)
          if (((b = g.charCodeAt(m)), !e.isIdentifierPartES5(b))) return !1;
        return !0;
      }
      function s(g, m) {
        return (g - 55296) * 1024 + (m - 56320) + 65536;
      }
      function d(g) {
        var m, E, b, x, S;
        if (g.length === 0) return !1;
        for (S = e.isIdentifierStartES6, m = 0, E = g.length; m < E; ++m) {
          if (((b = g.charCodeAt(m)), 55296 <= b && b <= 56319)) {
            if (
              (++m,
              m >= E || ((x = g.charCodeAt(m)), !(56320 <= x && x <= 57343)))
            )
              return !1;
            b = s(b, x);
          }
          if (!S(b)) return !1;
          S = e.isIdentifierPartES6;
        }
        return !0;
      }
      function y(g, m) {
        return u(g) && !a(g, m);
      }
      function A(g, m) {
        return d(g) && !o(g, m);
      }
      Rm.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: o,
        isRestrictedWord: i,
        isIdentifierNameES5: u,
        isIdentifierNameES6: d,
        isIdentifierES5: y,
        isIdentifierES6: A,
      };
    })();
  });
  var Si = F((aa) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      (aa.ast = _m()), (aa.code = Fi()), (aa.keyword = Pm());
    })();
  });
  var Im = F((bee, _O) => {
    _O.exports = {
      name: "doctrine",
      description: "JSDoc parser",
      homepage: "https://github.com/eslint/doctrine",
      main: "lib/doctrine.js",
      version: "3.0.0",
      engines: { node: ">=6.0.0" },
      directories: { lib: "./lib" },
      files: ["lib"],
      maintainers: [
        {
          name: "Nicholas C. Zakas",
          email: "nicholas+npm@nczconsulting.com",
          web: "https://www.nczonline.net",
        },
        {
          name: "Yusuke Suzuki",
          email: "utatane.tea@gmail.com",
          web: "https://github.com/Constellation",
        },
      ],
      repository: "eslint/doctrine",
      devDependencies: {
        coveralls: "^3.0.1",
        dateformat: "^1.0.11",
        eslint: "^1.10.3",
        "eslint-release": "^1.0.0",
        linefix: "^0.1.1",
        mocha: "^3.4.2",
        "npm-license": "^0.3.1",
        nyc: "^10.3.2",
        semver: "^5.0.3",
        shelljs: "^0.5.3",
        "shelljs-nodecli": "^0.1.1",
        should: "^5.0.1",
      },
      license: "Apache-2.0",
      scripts: {
        pretest: "npm run lint",
        test: "nyc mocha",
        coveralls: "nyc report --reporter=text-lcov | coveralls",
        lint: "eslint lib/",
        "generate-release": "eslint-generate-release",
        "generate-alpharelease": "eslint-generate-prerelease alpha",
        "generate-betarelease": "eslint-generate-prerelease beta",
        "generate-rcrelease": "eslint-generate-prerelease rc",
        "publish-release": "eslint-publish-release",
      },
      dependencies: { esutils: "^2.0.2" },
    };
  });
  var Nm = F((Aee, km) => {
    l();
    c();
    p();
    function OO(e, t) {
      if (!e) throw new Error(t || "unknown assertion error");
    }
    km.exports = OO;
  });
  var wi = F((Jr) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e;
      (e = Im().version), (Jr.VERSION = e);
      function t(n) {
        (this.name = "DoctrineError"), (this.message = n);
      }
      (t.prototype = (function () {
        var n = function () {};
        return (n.prototype = Error.prototype), new n();
      })()),
        (t.prototype.constructor = t),
        (Jr.DoctrineError = t);
      function r(n) {
        throw new t(n);
      }
      (Jr.throwError = r), (Jr.assert = Nm());
    })();
  });
  var jm = F((Qr) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a, o, i, u, s, d, y, A;
      (s = Si()),
        (d = wi()),
        (e = {
          NullableLiteral: "NullableLiteral",
          AllLiteral: "AllLiteral",
          NullLiteral: "NullLiteral",
          UndefinedLiteral: "UndefinedLiteral",
          VoidLiteral: "VoidLiteral",
          UnionType: "UnionType",
          ArrayType: "ArrayType",
          RecordType: "RecordType",
          FieldType: "FieldType",
          FunctionType: "FunctionType",
          ParameterType: "ParameterType",
          RestType: "RestType",
          NonNullableType: "NonNullableType",
          OptionalType: "OptionalType",
          NullableType: "NullableType",
          NameExpression: "NameExpression",
          TypeApplication: "TypeApplication",
          StringLiteralType: "StringLiteralType",
          NumericLiteralType: "NumericLiteralType",
          BooleanLiteralType: "BooleanLiteralType",
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        });
      function g(B) {
        return (
          "><(){}[],:*|?!=".indexOf(String.fromCharCode(B)) === -1 &&
          !s.code.isWhiteSpace(B) &&
          !s.code.isLineTerminator(B)
        );
      }
      function m(B, R, k, _) {
        (this._previous = B),
          (this._index = R),
          (this._token = k),
          (this._value = _);
      }
      (m.prototype.restore = function () {
        (o = this._previous),
          (a = this._index),
          (i = this._token),
          (u = this._value);
      }),
        (m.save = function () {
          return new m(o, a, i, u);
        });
      function E(B, R) {
        return A && (B.range = [R[0] + y, R[1] + y]), B;
      }
      function b() {
        var B = r.charAt(a);
        return (a += 1), B;
      }
      function x(B) {
        var R,
          k,
          _,
          L = 0;
        for (k = B === "u" ? 4 : 2, R = 0; R < k; ++R)
          if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
            (_ = b()),
              (L = L * 16 + "0123456789abcdef".indexOf(_.toLowerCase()));
          else return "";
        return String.fromCharCode(L);
      }
      function S() {
        var B = "",
          R,
          k,
          _,
          L,
          H;
        for (R = r.charAt(a), ++a; a < n; )
          if (((k = b()), k === R)) {
            R = "";
            break;
          } else if (k === "\\")
            if (((k = b()), s.code.isLineTerminator(k.charCodeAt(0))))
              k === "\r" && r.charCodeAt(a) === 10 && ++a;
            else
              switch (k) {
                case "n":
                  B += `
`;
                  break;
                case "r":
                  B += "\r";
                  break;
                case "t":
                  B += "	";
                  break;
                case "u":
                case "x":
                  (H = a), (L = x(k)), L ? (B += L) : ((a = H), (B += k));
                  break;
                case "b":
                  B += "\b";
                  break;
                case "f":
                  B += "\f";
                  break;
                case "v":
                  B += "\v";
                  break;
                default:
                  s.code.isOctalDigit(k.charCodeAt(0))
                    ? ((_ = "01234567".indexOf(k)),
                      a < n &&
                        s.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((_ = _ * 8 + "01234567".indexOf(b())),
                        "0123".indexOf(k) >= 0 &&
                          a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          (_ = _ * 8 + "01234567".indexOf(b()))),
                      (B += String.fromCharCode(_)))
                    : (B += k);
                  break;
              }
          else {
            if (s.code.isLineTerminator(k.charCodeAt(0))) break;
            B += k;
          }
        return R !== "" && d.throwError("unexpected quote"), (u = B), t.STRING;
      }
      function P() {
        var B, R;
        if (((B = ""), (R = r.charCodeAt(a)), R !== 46)) {
          if (((B = b()), (R = r.charCodeAt(a)), B === "0")) {
            if (R === 120 || R === 88) {
              for (
                B += b();
                a < n && ((R = r.charCodeAt(a)), !!s.code.isHexDigit(R));

              )
                B += b();
              return (
                B.length <= 2 && d.throwError("unexpected token"),
                a < n &&
                  ((R = r.charCodeAt(a)),
                  s.code.isIdentifierStartES5(R) &&
                    d.throwError("unexpected token")),
                (u = parseInt(B, 16)),
                t.NUMBER
              );
            }
            if (s.code.isOctalDigit(R)) {
              for (
                B += b();
                a < n && ((R = r.charCodeAt(a)), !!s.code.isOctalDigit(R));

              )
                B += b();
              return (
                a < n &&
                  ((R = r.charCodeAt(a)),
                  (s.code.isIdentifierStartES5(R) ||
                    s.code.isDecimalDigit(R)) &&
                    d.throwError("unexpected token")),
                (u = parseInt(B, 8)),
                t.NUMBER
              );
            }
            s.code.isDecimalDigit(R) && d.throwError("unexpected token");
          }
          for (; a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R)); )
            B += b();
        }
        if (R === 46)
          for (
            B += b();
            a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R));

          )
            B += b();
        if (R === 101 || R === 69)
          if (
            ((B += b()),
            (R = r.charCodeAt(a)),
            (R === 43 || R === 45) && (B += b()),
            (R = r.charCodeAt(a)),
            s.code.isDecimalDigit(R))
          )
            for (
              B += b();
              a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R));

            )
              B += b();
          else d.throwError("unexpected token");
        return (
          a < n &&
            ((R = r.charCodeAt(a)),
            s.code.isIdentifierStartES5(R) && d.throwError("unexpected token")),
          (u = parseFloat(B)),
          t.NUMBER
        );
      }
      function j() {
        var B, R;
        for (u = b(); a < n && g(r.charCodeAt(a)); ) {
          if (((B = r.charCodeAt(a)), B === 46)) {
            if (a + 1 >= n) return t.ILLEGAL;
            if (((R = r.charCodeAt(a + 1)), R === 60)) break;
          }
          u += b();
        }
        return t.NAME;
      }
      function $() {
        var B;
        for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) b();
        if (a >= n) return (i = t.EOF), i;
        switch (((B = r.charCodeAt(a)), B)) {
          case 39:
          case 34:
            return (i = S()), i;
          case 58:
            return b(), (i = t.COLON), i;
          case 44:
            return b(), (i = t.COMMA), i;
          case 40:
            return b(), (i = t.LPAREN), i;
          case 41:
            return b(), (i = t.RPAREN), i;
          case 91:
            return b(), (i = t.LBRACK), i;
          case 93:
            return b(), (i = t.RBRACK), i;
          case 123:
            return b(), (i = t.LBRACE), i;
          case 125:
            return b(), (i = t.RBRACE), i;
          case 46:
            if (a + 1 < n) {
              if (((B = r.charCodeAt(a + 1)), B === 60))
                return b(), b(), (i = t.DOT_LT), i;
              if (B === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                return b(), b(), b(), (i = t.REST), i;
              if (s.code.isDecimalDigit(B)) return (i = P()), i;
            }
            return (i = t.ILLEGAL), i;
          case 60:
            return b(), (i = t.LT), i;
          case 62:
            return b(), (i = t.GT), i;
          case 42:
            return b(), (i = t.STAR), i;
          case 124:
            return b(), (i = t.PIPE), i;
          case 63:
            return b(), (i = t.QUESTION), i;
          case 33:
            return b(), (i = t.BANG), i;
          case 61:
            return b(), (i = t.EQUAL), i;
          case 45:
            return (i = P()), i;
          default:
            return s.code.isDecimalDigit(B)
              ? ((i = P()), i)
              : (d.assert(g(B)), (i = j()), i);
        }
      }
      function w(B, R) {
        d.assert(i === B, R || "consumed token not matched"), $();
      }
      function M(B, R) {
        i !== B && d.throwError(R || "unexpected token"), $();
      }
      function I() {
        var B,
          R = a - 1;
        if (
          (w(t.LPAREN, "UnionType should start with ("),
          (B = []),
          i !== t.RPAREN)
        )
          for (; B.push(Y()), i !== t.RPAREN; ) M(t.PIPE);
        return (
          w(t.RPAREN, "UnionType should end with )"),
          E({ type: e.UnionType, elements: B }, [R, o])
        );
      }
      function U() {
        var B,
          R = a - 1,
          k;
        for (
          w(t.LBRACK, "ArrayType should start with ["), B = [];
          i !== t.RBRACK;

        ) {
          if (i === t.REST) {
            (k = a - 3),
              w(t.REST),
              B.push(E({ type: e.RestType, expression: Y() }, [k, o]));
            break;
          } else B.push(Y());
          i !== t.RBRACK && M(t.COMMA);
        }
        return M(t.RBRACK), E({ type: e.ArrayType, elements: B }, [R, o]);
      }
      function K() {
        var B = u;
        if (i === t.NAME || i === t.STRING) return $(), B;
        if (i === t.NUMBER) return w(t.NUMBER), String(B);
        d.throwError("unexpected token");
      }
      function z() {
        var B,
          R = o;
        return (
          (B = K()),
          i === t.COLON
            ? (w(t.COLON), E({ type: e.FieldType, key: B, value: Y() }, [R, o]))
            : E({ type: e.FieldType, key: B, value: null }, [R, o])
        );
      }
      function he() {
        var B,
          R = a - 1,
          k;
        if (
          (w(t.LBRACE, "RecordType should start with {"),
          (B = []),
          i === t.COMMA)
        )
          w(t.COMMA);
        else for (; i !== t.RBRACE; ) B.push(z()), i !== t.RBRACE && M(t.COMMA);
        return (
          (k = a), M(t.RBRACE), E({ type: e.RecordType, fields: B }, [R, k])
        );
      }
      function re() {
        var B = u,
          R = a - B.length;
        return (
          M(t.NAME),
          i === t.COLON &&
            (B === "module" || B === "external" || B === "event") &&
            (w(t.COLON), (B += ":" + u), M(t.NAME)),
          E({ type: e.NameExpression, name: B }, [R, o])
        );
      }
      function J() {
        var B = [];
        for (B.push(te()); i === t.COMMA; ) w(t.COMMA), B.push(te());
        return B;
      }
      function O() {
        var B,
          R,
          k = a - u.length;
        return (
          (B = re()),
          i === t.DOT_LT || i === t.LT
            ? ($(),
              (R = J()),
              M(t.GT),
              E({ type: e.TypeApplication, expression: B, applications: R }, [
                k,
                o,
              ]))
            : B
        );
      }
      function T() {
        return (
          w(t.COLON, "ResultType should start with :"),
          i === t.NAME && u === "void"
            ? (w(t.NAME), { type: e.VoidLiteral })
            : Y()
        );
      }
      function q() {
        for (var B = [], R = !1, k, _ = !1, L, H = a - 3, Ee; i !== t.RPAREN; )
          i === t.REST && (w(t.REST), (_ = !0)),
            (L = o),
            (k = Y()),
            k.type === e.NameExpression &&
              i === t.COLON &&
              ((Ee = o - k.name.length),
              w(t.COLON),
              (k = E({ type: e.ParameterType, name: k.name, expression: Y() }, [
                Ee,
                o,
              ]))),
            i === t.EQUAL
              ? (w(t.EQUAL),
                (k = E({ type: e.OptionalType, expression: k }, [L, o])),
                (R = !0))
              : R && d.throwError("unexpected token"),
            _ && (k = E({ type: e.RestType, expression: k }, [H, o])),
            B.push(k),
            i !== t.RPAREN && M(t.COMMA);
        return B;
      }
      function W() {
        var B,
          R,
          k,
          _,
          L,
          H = a - u.length;
        return (
          d.assert(
            i === t.NAME && u === "function",
            "FunctionType should start with 'function'"
          ),
          w(t.NAME),
          M(t.LPAREN),
          (B = !1),
          (k = []),
          (R = null),
          i !== t.RPAREN &&
            (i === t.NAME && (u === "this" || u === "new")
              ? ((B = u === "new"),
                w(t.NAME),
                M(t.COLON),
                (R = O()),
                i === t.COMMA && (w(t.COMMA), (k = q())))
              : (k = q())),
          M(t.RPAREN),
          (_ = null),
          i === t.COLON && (_ = T()),
          (L = E({ type: e.FunctionType, params: k, result: _ }, [H, o])),
          R && ((L.this = R), B && (L.new = !0)),
          L
        );
      }
      function X() {
        var B, R;
        switch (i) {
          case t.STAR:
            return w(t.STAR), E({ type: e.AllLiteral }, [o - 1, o]);
          case t.LPAREN:
            return I();
          case t.LBRACK:
            return U();
          case t.LBRACE:
            return he();
          case t.NAME:
            if (((R = a - u.length), u === "null"))
              return w(t.NAME), E({ type: e.NullLiteral }, [R, o]);
            if (u === "undefined")
              return w(t.NAME), E({ type: e.UndefinedLiteral }, [R, o]);
            if (u === "true" || u === "false")
              return (
                w(t.NAME),
                E({ type: e.BooleanLiteralType, value: u === "true" }, [R, o])
              );
            if (((B = m.save()), u === "function"))
              try {
                return W();
              } catch {
                B.restore();
              }
            return O();
          case t.STRING:
            return (
              $(),
              E({ type: e.StringLiteralType, value: u }, [o - u.length - 2, o])
            );
          case t.NUMBER:
            return (
              $(),
              E({ type: e.NumericLiteralType, value: u }, [
                o - String(u).length,
                o,
              ])
            );
          default:
            d.throwError("unexpected token");
        }
      }
      function Y() {
        var B, R;
        return i === t.QUESTION
          ? ((R = a - 1),
            w(t.QUESTION),
            i === t.COMMA ||
            i === t.EQUAL ||
            i === t.RBRACE ||
            i === t.RPAREN ||
            i === t.PIPE ||
            i === t.EOF ||
            i === t.RBRACK ||
            i === t.GT
              ? E({ type: e.NullableLiteral }, [R, o])
              : E({ type: e.NullableType, expression: X(), prefix: !0 }, [
                  R,
                  o,
                ]))
          : i === t.BANG
          ? ((R = a - 1),
            w(t.BANG),
            E({ type: e.NonNullableType, expression: X(), prefix: !0 }, [R, o]))
          : ((R = o),
            (B = X()),
            i === t.BANG
              ? (w(t.BANG),
                E({ type: e.NonNullableType, expression: B, prefix: !1 }, [
                  R,
                  o,
                ]))
              : i === t.QUESTION
              ? (w(t.QUESTION),
                E({ type: e.NullableType, expression: B, prefix: !1 }, [R, o]))
              : i === t.LBRACK
              ? (w(t.LBRACK),
                M(
                  t.RBRACK,
                  "expected an array-style type declaration (" + u + "[])"
                ),
                E(
                  {
                    type: e.TypeApplication,
                    expression: E({ type: e.NameExpression, name: "Array" }, [
                      R,
                      o,
                    ]),
                    applications: [B],
                  },
                  [R, o]
                ))
              : B);
      }
      function te() {
        var B, R;
        if (((B = Y()), i !== t.PIPE)) return B;
        for (R = [B], w(t.PIPE); R.push(Y()), i === t.PIPE; ) w(t.PIPE);
        return E({ type: e.UnionType, elements: R }, [0, a]);
      }
      function me() {
        var B;
        return i === t.REST
          ? (w(t.REST), E({ type: e.RestType, expression: te() }, [0, a]))
          : ((B = te()),
            i === t.EQUAL
              ? (w(t.EQUAL), E({ type: e.OptionalType, expression: B }, [0, a]))
              : B);
      }
      function je(B, R) {
        var k;
        return (
          (r = B),
          (n = r.length),
          (a = 0),
          (o = 0),
          (A = R && R.range),
          (y = (R && R.startIndex) || 0),
          $(),
          (k = te()),
          R && R.midstream
            ? { expression: k, index: o }
            : (i !== t.EOF && d.throwError("not reach to EOF"), k)
        );
      }
      function Me(B, R) {
        var k;
        return (
          (r = B),
          (n = r.length),
          (a = 0),
          (o = 0),
          (A = R && R.range),
          (y = (R && R.startIndex) || 0),
          $(),
          (k = me()),
          R && R.midstream
            ? { expression: k, index: o }
            : (i !== t.EOF && d.throwError("not reach to EOF"), k)
        );
      }
      function Q(B, R, k) {
        var _, L, H;
        switch (B.type) {
          case e.NullableLiteral:
            _ = "?";
            break;
          case e.AllLiteral:
            _ = "*";
            break;
          case e.NullLiteral:
            _ = "null";
            break;
          case e.UndefinedLiteral:
            _ = "undefined";
            break;
          case e.VoidLiteral:
            _ = "void";
            break;
          case e.UnionType:
            for (
              k ? (_ = "") : (_ = "("), L = 0, H = B.elements.length;
              L < H;
              ++L
            )
              (_ += Q(B.elements[L], R)), L + 1 !== H && (_ += R ? "|" : " | ");
            k || (_ += ")");
            break;
          case e.ArrayType:
            for (_ = "[", L = 0, H = B.elements.length; L < H; ++L)
              (_ += Q(B.elements[L], R)), L + 1 !== H && (_ += R ? "," : ", ");
            _ += "]";
            break;
          case e.RecordType:
            for (_ = "{", L = 0, H = B.fields.length; L < H; ++L)
              (_ += Q(B.fields[L], R)), L + 1 !== H && (_ += R ? "," : ", ");
            _ += "}";
            break;
          case e.FieldType:
            B.value
              ? (_ = B.key + (R ? ":" : ": ") + Q(B.value, R))
              : (_ = B.key);
            break;
          case e.FunctionType:
            for (
              _ = R ? "function(" : "function (",
                B.this &&
                  (B.new
                    ? (_ += R ? "new:" : "new: ")
                    : (_ += R ? "this:" : "this: "),
                  (_ += Q(B.this, R)),
                  B.params.length !== 0 && (_ += R ? "," : ", ")),
                L = 0,
                H = B.params.length;
              L < H;
              ++L
            )
              (_ += Q(B.params[L], R)), L + 1 !== H && (_ += R ? "," : ", ");
            (_ += ")"), B.result && (_ += (R ? ":" : ": ") + Q(B.result, R));
            break;
          case e.ParameterType:
            _ = B.name + (R ? ":" : ": ") + Q(B.expression, R);
            break;
          case e.RestType:
            (_ = "..."), B.expression && (_ += Q(B.expression, R));
            break;
          case e.NonNullableType:
            B.prefix
              ? (_ = "!" + Q(B.expression, R))
              : (_ = Q(B.expression, R) + "!");
            break;
          case e.OptionalType:
            _ = Q(B.expression, R) + "=";
            break;
          case e.NullableType:
            B.prefix
              ? (_ = "?" + Q(B.expression, R))
              : (_ = Q(B.expression, R) + "?");
            break;
          case e.NameExpression:
            _ = B.name;
            break;
          case e.TypeApplication:
            for (
              _ = Q(B.expression, R) + ".<", L = 0, H = B.applications.length;
              L < H;
              ++L
            )
              (_ += Q(B.applications[L], R)),
                L + 1 !== H && (_ += R ? "," : ", ");
            _ += ">";
            break;
          case e.StringLiteralType:
            _ = '"' + B.value + '"';
            break;
          case e.NumericLiteralType:
            _ = String(B.value);
            break;
          case e.BooleanLiteralType:
            _ = String(B.value);
            break;
          default:
            d.throwError("Unknown type " + B.type);
        }
        return _;
      }
      function He(B, R) {
        return R == null && (R = {}), Q(B, R.compact, R.topLevel);
      }
      (Qr.parseType = je),
        (Qr.parseParamType = Me),
        (Qr.stringify = He),
        (Qr.Syntax = e);
    })();
  });
  var Mm = F((Ze) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a;
      (n = Si()), (e = jm()), (t = wi());
      function o(w, M, I) {
        return w.slice(M, I);
      }
      a = (function () {
        var w = Object.prototype.hasOwnProperty;
        return function (I, U) {
          return w.call(I, U);
        };
      })();
      function i(w) {
        var M = {},
          I;
        for (I in w) w.hasOwnProperty(I) && (M[I] = w[I]);
        return M;
      }
      function u(w) {
        return (
          (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57)
        );
      }
      function s(w) {
        return w === "param" || w === "argument" || w === "arg";
      }
      function d(w) {
        return w === "return" || w === "returns";
      }
      function y(w) {
        return w === "property" || w === "prop";
      }
      function A(w) {
        return (
          s(w) ||
          y(w) ||
          w === "alias" ||
          w === "this" ||
          w === "mixes" ||
          w === "requires"
        );
      }
      function g(w) {
        return A(w) || w === "const" || w === "constant";
      }
      function m(w) {
        return y(w) || s(w);
      }
      function E(w) {
        return y(w) || s(w);
      }
      function b(w) {
        return (
          s(w) ||
          d(w) ||
          w === "define" ||
          w === "enum" ||
          w === "implements" ||
          w === "this" ||
          w === "type" ||
          w === "typedef" ||
          y(w)
        );
      }
      function x(w) {
        return (
          b(w) ||
          w === "throws" ||
          w === "const" ||
          w === "constant" ||
          w === "namespace" ||
          w === "member" ||
          w === "var" ||
          w === "module" ||
          w === "constructor" ||
          w === "class" ||
          w === "extends" ||
          w === "augments" ||
          w === "public" ||
          w === "private" ||
          w === "protected"
        );
      }
      var S =
          "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]",
        P =
          "(" +
          S +
          "*(?:\\*" +
          S +
          `?)?)(.+|[\r
\u2028\u2029])`;
      function j(w) {
        return w
          .replace(/^\/\*\*?/, "")
          .replace(/\*\/$/, "")
          .replace(new RegExp(P, "g"), "$2")
          .replace(/\s*$/, "");
      }
      function $(w, M) {
        for (
          var I = w.replace(/^\/\*\*?/, ""), U = 0, K = new RegExp(P, "g"), z;
          (z = K.exec(I));

        )
          if (((U += z[1].length), z.index + z[0].length > M + U))
            return M + U + w.length - I.length;
        return w.replace(/\*\/$/, "").replace(/\s*$/, "").length;
      }
      (function (w) {
        var M, I, U, K, z, he, re, J, O;
        function T() {
          var k = z.charCodeAt(I);
          return (
            (I += 1),
            n.code.isLineTerminator(k) &&
              !(k === 13 && z.charCodeAt(I) === 10) &&
              (U += 1),
            String.fromCharCode(k)
          );
        }
        function q() {
          var k = "";
          for (T(); I < K && u(z.charCodeAt(I)); ) k += T();
          return k;
        }
        function W() {
          var k,
            _,
            L = I;
          for (_ = !1; L < K; ) {
            if (
              ((k = z.charCodeAt(L)),
              n.code.isLineTerminator(k) &&
                !(k === 13 && z.charCodeAt(L + 1) === 10))
            )
              _ = !0;
            else if (_) {
              if (k === 64) break;
              n.code.isWhiteSpace(k) || (_ = !1);
            }
            L += 1;
          }
          return L;
        }
        function X(k, _, L) {
          for (var H, Ee, pe, fe, Be = !1; I < _; )
            if (((H = z.charCodeAt(I)), n.code.isWhiteSpace(H))) T();
            else if (H === 123) {
              T();
              break;
            } else {
              Be = !0;
              break;
            }
          if (Be) return null;
          for (Ee = 1, pe = ""; I < _; )
            if (((H = z.charCodeAt(I)), n.code.isLineTerminator(H))) T();
            else {
              if (H === 125) {
                if (((Ee -= 1), Ee === 0)) {
                  T();
                  break;
                }
              } else H === 123 && (Ee += 1);
              pe === "" && (fe = I), (pe += T());
            }
          return Ee !== 0
            ? t.throwError("Braces are not balanced")
            : E(k)
            ? e.parseParamType(pe, { startIndex: Me(fe), range: L })
            : e.parseType(pe, { startIndex: Me(fe), range: L });
        }
        function Y(k) {
          var _;
          if (
            !n.code.isIdentifierStartES5(z.charCodeAt(I)) &&
            !z[I].match(/[0-9]/)
          )
            return null;
          for (_ = T(); I < k && n.code.isIdentifierPartES5(z.charCodeAt(I)); )
            _ += T();
          return _;
        }
        function te(k) {
          for (
            ;
            I < k &&
            (n.code.isWhiteSpace(z.charCodeAt(I)) ||
              n.code.isLineTerminator(z.charCodeAt(I)));

          )
            T();
        }
        function me(k, _, L) {
          var H = "",
            Ee,
            pe;
          if ((te(k), I >= k)) return null;
          if (z.charCodeAt(I) === 91)
            if (_) (Ee = !0), (H = T());
            else return null;
          if (((H += Y(k)), L))
            for (
              z.charCodeAt(I) === 58 &&
                (H === "module" || H === "external" || H === "event") &&
                ((H += T()), (H += Y(k))),
                z.charCodeAt(I) === 91 &&
                  z.charCodeAt(I + 1) === 93 &&
                  ((H += T()), (H += T()));
              z.charCodeAt(I) === 46 ||
              z.charCodeAt(I) === 47 ||
              z.charCodeAt(I) === 35 ||
              z.charCodeAt(I) === 45 ||
              z.charCodeAt(I) === 126;

            )
              (H += T()), (H += Y(k));
          if (Ee) {
            if ((te(k), z.charCodeAt(I) === 61)) {
              (H += T()), te(k);
              for (var fe, Be = 1; I < k; ) {
                if (
                  ((fe = z.charCodeAt(I)),
                  n.code.isWhiteSpace(fe) &&
                    (pe || (te(k), (fe = z.charCodeAt(I)))),
                  fe === 39 && (pe ? pe === "'" && (pe = "") : (pe = "'")),
                  fe === 34 && (pe ? pe === '"' && (pe = "") : (pe = '"')),
                  fe === 91)
                )
                  Be++;
                else if (fe === 93 && --Be === 0) break;
                H += T();
              }
            }
            if ((te(k), I >= k || z.charCodeAt(I) !== 93)) return null;
            H += T();
          }
          return H;
        }
        function je() {
          for (; I < K && z.charCodeAt(I) !== 64; ) T();
          return I >= K ? !1 : (t.assert(z.charCodeAt(I) === 64), !0);
        }
        function Me(k) {
          return z === he ? k : $(he, k);
        }
        function Q(k, _) {
          (this._options = k),
            (this._title = _.toLowerCase()),
            (this._tag = { title: _, description: null }),
            this._options.lineNumbers && (this._tag.lineNumber = U),
            (this._first = I - _.length - 1),
            (this._last = 0),
            (this._extra = {});
        }
        (Q.prototype.addError = function (_) {
          var L = Array.prototype.slice.call(arguments, 1),
            H = _.replace(/%(\d)/g, function (Ee, pe) {
              return (
                t.assert(pe < L.length, "Message reference must be in range"),
                L[pe]
              );
            });
          return (
            this._tag.errors || (this._tag.errors = []),
            O && t.throwError(H),
            this._tag.errors.push(H),
            re
          );
        }),
          (Q.prototype.parseType = function () {
            if (b(this._title))
              try {
                if (
                  ((this._tag.type = X(
                    this._title,
                    this._last,
                    this._options.range
                  )),
                  !this._tag.type &&
                    !s(this._title) &&
                    !d(this._title) &&
                    !this.addError("Missing or invalid tag type"))
                )
                  return !1;
              } catch (k) {
                if (((this._tag.type = null), !this.addError(k.message)))
                  return !1;
              }
            else if (x(this._title))
              try {
                this._tag.type = X(
                  this._title,
                  this._last,
                  this._options.range
                );
              } catch {}
            return !0;
          }),
          (Q.prototype._parseNamePath = function (k) {
            var _;
            return (
              (_ = me(this._last, J && E(this._title), !0)),
              !_ && !k && !this.addError("Missing or invalid tag name")
                ? !1
                : ((this._tag.name = _), !0)
            );
          }),
          (Q.prototype.parseNamePath = function () {
            return this._parseNamePath(!1);
          }),
          (Q.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0);
          }),
          (Q.prototype.parseName = function () {
            var k, _;
            if (g(this._title))
              if (
                ((this._tag.name = me(
                  this._last,
                  J && E(this._title),
                  m(this._title)
                )),
                this._tag.name)
              )
                (_ = this._tag.name),
                  _.charAt(0) === "[" &&
                    _.charAt(_.length - 1) === "]" &&
                    ((k = _.substring(1, _.length - 1).split("=")),
                    k.length > 1 && (this._tag.default = k.slice(1).join("=")),
                    (this._tag.name = k[0]),
                    this._tag.type &&
                      this._tag.type.type !== "OptionalType" &&
                      (this._tag.type = {
                        type: "OptionalType",
                        expression: this._tag.type,
                      }));
              else {
                if (!A(this._title)) return !0;
                if (s(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type),
                    (this._tag.name = this._tag.type.name),
                    (this._tag.type = null);
                else if (!this.addError("Missing or invalid tag name"))
                  return !1;
              }
            return !0;
          }),
          (Q.prototype.parseDescription = function () {
            var _ = o(z, I, this._last).trim();
            return (
              _ &&
                (/^-\s+/.test(_) && (_ = _.substring(2)),
                (this._tag.description = _)),
              !0
            );
          }),
          (Q.prototype.parseCaption = function () {
            var _ = o(z, I, this._last).trim(),
              L = "<caption>",
              H = "</caption>",
              Ee = _.indexOf(L),
              pe = _.indexOf(H);
            return (
              Ee >= 0 && pe >= 0
                ? ((this._tag.caption = _.substring(Ee + L.length, pe).trim()),
                  (this._tag.description = _.substring(pe + H.length).trim()))
                : (this._tag.description = _),
              !0
            );
          }),
          (Q.prototype.parseKind = function () {
            var _, L;
            return (
              (L = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (_ = o(z, I, this._last).trim()),
              (this._tag.kind = _),
              !(!a(L, _) && !this.addError("Invalid kind name '%0'", _))
            );
          }),
          (Q.prototype.parseAccess = function () {
            var _;
            return (
              (_ = o(z, I, this._last).trim()),
              (this._tag.access = _),
              !(
                _ !== "private" &&
                _ !== "protected" &&
                _ !== "public" &&
                !this.addError("Invalid access name '%0'", _)
              )
            );
          }),
          (Q.prototype.parseThis = function () {
            var _ = o(z, I, this._last).trim();
            if (_ && _.charAt(0) === "{") {
              var L = this.parseType();
              return (L && this._tag.type.type === "NameExpression") ||
                this._tag.type.type === "UnionType"
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError("Invalid name for this");
            } else return this.parseNamePath();
          }),
          (Q.prototype.parseVariation = function () {
            var _, L;
            return (
              (L = o(z, I, this._last).trim()),
              (_ = parseFloat(L, 10)),
              (this._tag.variation = _),
              !(isNaN(_) && !this.addError("Invalid variation '%0'", L))
            );
          }),
          (Q.prototype.ensureEnd = function () {
            var k = o(z, I, this._last).trim();
            return !(k && !this.addError("Unknown content '%0'", k));
          }),
          (Q.prototype.epilogue = function () {
            var _;
            return (
              (_ = this._tag.description),
              !(
                E(this._title) &&
                !this._tag.type &&
                _ &&
                _.charAt(0) === "[" &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !J && !this.addError("Missing or invalid tag name"))
              )
            );
          }),
          (M = {
            access: ["parseAccess"],
            alias: ["parseNamePath", "ensureEnd"],
            augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
            constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
            class: ["parseType", "parseNamePathOptional", "ensureEnd"],
            extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
            example: ["parseCaption"],
            deprecated: ["parseDescription"],
            global: ["ensureEnd"],
            inner: ["ensureEnd"],
            instance: ["ensureEnd"],
            kind: ["parseKind"],
            mixes: ["parseNamePath", "ensureEnd"],
            mixin: ["parseNamePathOptional", "ensureEnd"],
            member: ["parseType", "parseNamePathOptional", "ensureEnd"],
            method: ["parseNamePathOptional", "ensureEnd"],
            module: ["parseType", "parseNamePathOptional", "ensureEnd"],
            func: ["parseNamePathOptional", "ensureEnd"],
            function: ["parseNamePathOptional", "ensureEnd"],
            var: ["parseType", "parseNamePathOptional", "ensureEnd"],
            name: ["parseNamePath", "ensureEnd"],
            namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
            private: ["parseType", "parseDescription"],
            protected: ["parseType", "parseDescription"],
            public: ["parseType", "parseDescription"],
            readonly: ["ensureEnd"],
            requires: ["parseNamePath", "ensureEnd"],
            since: ["parseDescription"],
            static: ["ensureEnd"],
            summary: ["parseDescription"],
            this: ["parseThis", "ensureEnd"],
            todo: ["parseDescription"],
            typedef: ["parseType", "parseNamePathOptional"],
            variation: ["parseVariation"],
            version: ["parseDescription"],
          }),
          (Q.prototype.parse = function () {
            var _, L, H, Ee;
            if (!this._title && !this.addError("Missing or invalid title"))
              return null;
            for (
              this._last = W(this._title),
                this._options.range &&
                  (this._tag.range = [
                    this._first,
                    z.slice(0, this._last).replace(/\s*$/, "").length,
                  ].map(Me)),
                a(M, this._title)
                  ? (H = M[this._title])
                  : (H = [
                      "parseType",
                      "parseName",
                      "parseDescription",
                      "epilogue",
                    ]),
                _ = 0,
                L = H.length;
              _ < L;
              ++_
            )
              if (((Ee = H[_]), !this[Ee]())) return null;
            return this._tag;
          });
        function He(k) {
          var _, L, H;
          if (!je()) return null;
          for (_ = q(), L = new Q(k, _), H = L.parse(); I < L._last; ) T();
          return H;
        }
        function B(k) {
          var _ = "",
            L,
            H;
          for (H = !0; I < K && ((L = z.charCodeAt(I)), !(H && L === 64)); )
            n.code.isLineTerminator(L)
              ? (H = !0)
              : H && !n.code.isWhiteSpace(L) && (H = !1),
              (_ += T());
          return k ? _ : _.trim();
        }
        function R(k, _) {
          var L = [],
            H,
            Ee,
            pe,
            fe,
            Be;
          if (
            (_ === void 0 && (_ = {}),
            typeof _.unwrap == "boolean" && _.unwrap ? (z = j(k)) : (z = k),
            (he = k),
            _.tags)
          )
            if (Array.isArray(_.tags))
              for (pe = {}, fe = 0, Be = _.tags.length; fe < Be; fe++)
                typeof _.tags[fe] == "string"
                  ? (pe[_.tags[fe]] = !0)
                  : t.throwError('Invalid "tags" parameter: ' + _.tags);
            else t.throwError('Invalid "tags" parameter: ' + _.tags);
          for (
            K = z.length,
              I = 0,
              U = 0,
              re = _.recoverable,
              J = _.sloppy,
              O = _.strict,
              Ee = B(_.preserveWhitespace);
            (H = He(_)), !!H;

          )
            (!pe || pe.hasOwnProperty(H.title)) && L.push(H);
          return { description: Ee, tags: L };
        }
        w.parse = R;
      })((r = {})),
        (Ze.version = t.VERSION),
        (Ze.parse = r.parse),
        (Ze.parseType = e.parseType),
        (Ze.parseParamType = e.parseParamType),
        (Ze.unwrapComment = j),
        (Ze.Syntax = i(e.Syntax)),
        (Ze.Error = t.DoctrineError),
        (Ze.type = {
          Syntax: Ze.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        });
    })();
  });
  function It() {
    return (It =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function Ri(e, t) {
    if (e == null) return {};
    var r,
      n,
      a = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (a[r] = e[r]);
    return a;
  }
  function Bi(e) {
    var t = xe(e),
      r = xe(function (n) {
        t.current && t.current(n);
      });
    return (t.current = e), r.current;
  }
  function Xm(e, t, r) {
    var n = Bi(r),
      a = Z(function () {
        return e.toHsva(t);
      }),
      o = a[0],
      i = a[1],
      u = xe({ color: t, hsva: o });
    oe(
      function () {
        if (!e.equal(t, u.current.color)) {
          var d = e.toHsva(t);
          (u.current = { hsva: d, color: t }), i(d);
        }
      },
      [t, e]
    ),
      oe(
        function () {
          var d;
          Km(o, u.current.hsva) ||
            e.equal((d = e.fromHsva(o)), u.current.color) ||
            ((u.current = { hsva: o, color: d }), n(d));
        },
        [o, e, n]
      );
    var s = de(function (d) {
      i(function (y) {
        return Object.assign({}, y, d);
      });
    }, []);
    return [o, s];
  }
  var fr,
    en,
    Ti,
    Lm,
    $m,
    Pi,
    tn,
    Ii,
    _e,
    NO,
    jO,
    _i,
    MO,
    qO,
    LO,
    $O,
    zm,
    Oi,
    ua,
    Hm,
    UO,
    ia,
    zO,
    Gm,
    Wm,
    Vm,
    Km,
    Ym,
    HO,
    GO,
    WO,
    VO,
    Um,
    Jm,
    KO,
    YO,
    Qm,
    XO,
    Zm,
    JO,
    eg,
    QO,
    tg,
    rg = tt(() => {
      l();
      c();
      p();
      G();
      (fr = function (e, t, r) {
        return (
          t === void 0 && (t = 0),
          r === void 0 && (r = 1),
          e > r ? r : e < t ? t : e
        );
      }),
        (en = function (e) {
          return "touches" in e;
        }),
        (Ti = function (e) {
          return (e && e.ownerDocument.defaultView) || self;
        }),
        (Lm = function (e, t, r) {
          var n = e.getBoundingClientRect(),
            a = en(t)
              ? (function (o, i) {
                  for (var u = 0; u < o.length; u++)
                    if (o[u].identifier === i) return o[u];
                  return o[0];
                })(t.touches, r)
              : t;
          return {
            left: fr((a.pageX - (n.left + Ti(e).pageXOffset)) / n.width),
            top: fr((a.pageY - (n.top + Ti(e).pageYOffset)) / n.height),
          };
        }),
        ($m = function (e) {
          !en(e) && e.preventDefault();
        }),
        (Pi = h.memo(function (e) {
          var t = e.onMove,
            r = e.onKey,
            n = Ri(e, ["onMove", "onKey"]),
            a = xe(null),
            o = Bi(t),
            i = Bi(r),
            u = xe(null),
            s = xe(!1),
            d = rt(
              function () {
                var m = function (x) {
                    $m(x),
                      (en(x) ? x.touches.length > 0 : x.buttons > 0) &&
                      a.current
                        ? o(Lm(a.current, x, u.current))
                        : b(!1);
                  },
                  E = function () {
                    return b(!1);
                  };
                function b(x) {
                  var S = s.current,
                    P = Ti(a.current),
                    j = x ? P.addEventListener : P.removeEventListener;
                  j(S ? "touchmove" : "mousemove", m),
                    j(S ? "touchend" : "mouseup", E);
                }
                return [
                  function (x) {
                    var S = x.nativeEvent,
                      P = a.current;
                    if (
                      P &&
                      ($m(S),
                      !(function ($, w) {
                        return w && !en($);
                      })(S, s.current) && P)
                    ) {
                      if (en(S)) {
                        s.current = !0;
                        var j = S.changedTouches || [];
                        j.length && (u.current = j[0].identifier);
                      }
                      P.focus(), o(Lm(P, S, u.current)), b(!0);
                    }
                  },
                  function (x) {
                    var S = x.which || x.keyCode;
                    S < 37 ||
                      S > 40 ||
                      (x.preventDefault(),
                      i({
                        left: S === 39 ? 0.05 : S === 37 ? -0.05 : 0,
                        top: S === 40 ? 0.05 : S === 38 ? -0.05 : 0,
                      }));
                  },
                  b,
                ];
              },
              [i, o]
            ),
            y = d[0],
            A = d[1],
            g = d[2];
          return (
            oe(
              function () {
                return g;
              },
              [g]
            ),
            h.createElement(
              "div",
              It({}, n, {
                onTouchStart: y,
                onMouseDown: y,
                className: "react-colorful__interactive",
                ref: a,
                onKeyDown: A,
                tabIndex: 0,
                role: "slider",
              })
            )
          );
        })),
        (tn = function (e) {
          return e.filter(Boolean).join(" ");
        }),
        (Ii = function (e) {
          var t = e.color,
            r = e.left,
            n = e.top,
            a = n === void 0 ? 0.5 : n,
            o = tn(["react-colorful__pointer", e.className]);
          return h.createElement(
            "div",
            {
              className: o,
              style: { top: 100 * a + "%", left: 100 * r + "%" },
            },
            h.createElement("div", {
              className: "react-colorful__pointer-fill",
              style: { backgroundColor: t },
            })
          );
        }),
        (_e = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = Math.pow(10, t)),
            Math.round(r * e) / r
          );
        }),
        (NO = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
        (jO = function (e) {
          return Gm(_i(e));
        }),
        (_i = function (e) {
          return (
            e[0] === "#" && (e = e.substring(1)),
            e.length < 6
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a:
                    e.length === 4 ? _e(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : {
                  r: parseInt(e.substring(0, 2), 16),
                  g: parseInt(e.substring(2, 4), 16),
                  b: parseInt(e.substring(4, 6), 16),
                  a:
                    e.length === 8
                      ? _e(parseInt(e.substring(6, 8), 16) / 255, 2)
                      : 1,
                }
          );
        }),
        (MO = function (e, t) {
          return t === void 0 && (t = "deg"), Number(e) * (NO[t] || 1);
        }),
        (qO = function (e) {
          var t =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            );
          return t
            ? LO({
                h: MO(t[1], t[2]),
                s: Number(t[3]),
                l: Number(t[4]),
                a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (LO = function (e) {
          var t = e.s,
            r = e.l;
          return {
            h: e.h,
            s:
              (t *= (r < 50 ? r : 100 - r) / 100) > 0
                ? ((2 * t) / (r + t)) * 100
                : 0,
            v: r + t,
            a: e.a,
          };
        }),
        ($O = function (e) {
          return zO(Hm(e));
        }),
        (zm = function (e) {
          var t = e.s,
            r = e.v,
            n = e.a,
            a = ((200 - t) * r) / 100;
          return {
            h: _e(e.h),
            s: _e(
              a > 0 && a < 200
                ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
                : 0
            ),
            l: _e(a / 2),
            a: _e(n, 2),
          };
        }),
        (Oi = function (e) {
          var t = zm(e);
          return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
        }),
        (ua = function (e) {
          var t = zm(e);
          return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
        }),
        (Hm = function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            a = e.a;
          (t = (t / 360) * 6), (r /= 100), (n /= 100);
          var o = Math.floor(t),
            i = n * (1 - r),
            u = n * (1 - (t - o) * r),
            s = n * (1 - (1 - t + o) * r),
            d = o % 6;
          return {
            r: _e(255 * [n, u, i, i, s, n][d]),
            g: _e(255 * [s, n, n, u, i, i][d]),
            b: _e(255 * [i, i, s, n, n, u][d]),
            a: _e(a, 2),
          };
        }),
        (UO = function (e) {
          var t =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            );
          return t
            ? Gm({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (ia = function (e) {
          var t = e.toString(16);
          return t.length < 2 ? "0" + t : t;
        }),
        (zO = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = a < 1 ? ia(_e(255 * a)) : "";
          return "#" + ia(t) + ia(r) + ia(n) + o;
        }),
        (Gm = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = Math.max(t, r, n),
            i = o - Math.min(t, r, n),
            u = i
              ? o === t
                ? (r - n) / i
                : o === r
                ? 2 + (n - t) / i
                : 4 + (t - r) / i
              : 0;
          return {
            h: _e(60 * (u < 0 ? u + 6 : u)),
            s: _e(o ? (i / o) * 100 : 0),
            v: _e((o / 255) * 100),
            a,
          };
        }),
        (Wm = h.memo(function (e) {
          var t = e.hue,
            r = e.onChange,
            n = tn(["react-colorful__hue", e.className]);
          return h.createElement(
            "div",
            { className: n },
            h.createElement(
              Pi,
              {
                onMove: function (a) {
                  r({ h: 360 * a.left });
                },
                onKey: function (a) {
                  r({ h: fr(t + 360 * a.left, 0, 360) });
                },
                "aria-label": "Hue",
                "aria-valuenow": _e(t),
                "aria-valuemax": "360",
                "aria-valuemin": "0",
              },
              h.createElement(Ii, {
                className: "react-colorful__hue-pointer",
                left: t / 360,
                color: Oi({ h: t, s: 100, v: 100, a: 1 }),
              })
            )
          );
        })),
        (Vm = h.memo(function (e) {
          var t = e.hsva,
            r = e.onChange,
            n = { backgroundColor: Oi({ h: t.h, s: 100, v: 100, a: 1 }) };
          return h.createElement(
            "div",
            { className: "react-colorful__saturation", style: n },
            h.createElement(
              Pi,
              {
                onMove: function (a) {
                  r({ s: 100 * a.left, v: 100 - 100 * a.top });
                },
                onKey: function (a) {
                  r({
                    s: fr(t.s + 100 * a.left, 0, 100),
                    v: fr(t.v - 100 * a.top, 0, 100),
                  });
                },
                "aria-label": "Color",
                "aria-valuetext":
                  "Saturation " + _e(t.s) + "%, Brightness " + _e(t.v) + "%",
              },
              h.createElement(Ii, {
                className: "react-colorful__saturation-pointer",
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: Oi(t),
              })
            )
          );
        })),
        (Km = function (e, t) {
          if (e === t) return !0;
          for (var r in e) if (e[r] !== t[r]) return !1;
          return !0;
        }),
        (Ym = function (e, t) {
          return e.replace(/\s/g, "") === t.replace(/\s/g, "");
        }),
        (HO = function (e, t) {
          return e.toLowerCase() === t.toLowerCase() || Km(_i(e), _i(t));
        });
      (WO = typeof window < "u" ? du : oe),
        (VO = function () {
          return (
            GO || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0)
          );
        }),
        (Um = new Map()),
        (Jm = function (e) {
          WO(function () {
            var t = e.current ? e.current.ownerDocument : document;
            if (t !== void 0 && !Um.has(t)) {
              var r = t.createElement("style");
              (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                Um.set(t, r);
              var n = VO();
              n && r.setAttribute("nonce", n), t.head.appendChild(r);
            }
          }, []);
        }),
        (KO = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = Ri(e, ["className", "colorModel", "color", "onChange"]),
            u = xe(null);
          Jm(u);
          var s = Xm(r, a, o),
            d = s[0],
            y = s[1],
            A = tn(["react-colorful", t]);
          return h.createElement(
            "div",
            It({}, i, { ref: u, className: A }),
            h.createElement(Vm, { hsva: d, onChange: y }),
            h.createElement(Wm, {
              hue: d.h,
              onChange: y,
              className: "react-colorful__last-control",
            })
          );
        }),
        (YO = {
          defaultColor: "000",
          toHsva: jO,
          fromHsva: function (e) {
            return $O({ h: e.h, s: e.s, v: e.v, a: 1 });
          },
          equal: HO,
        }),
        (Qm = function (e) {
          return h.createElement(KO, It({}, e, { colorModel: YO }));
        }),
        (XO = function (e) {
          var t = e.className,
            r = e.hsva,
            n = e.onChange,
            a = {
              backgroundImage:
                "linear-gradient(90deg, " +
                ua(Object.assign({}, r, { a: 0 })) +
                ", " +
                ua(Object.assign({}, r, { a: 1 })) +
                ")",
            },
            o = tn(["react-colorful__alpha", t]),
            i = _e(100 * r.a);
          return h.createElement(
            "div",
            { className: o },
            h.createElement("div", {
              className: "react-colorful__alpha-gradient",
              style: a,
            }),
            h.createElement(
              Pi,
              {
                onMove: function (u) {
                  n({ a: u.left });
                },
                onKey: function (u) {
                  n({ a: fr(r.a + u.left) });
                },
                "aria-label": "Alpha",
                "aria-valuetext": i + "%",
                "aria-valuenow": i,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
              },
              h.createElement(Ii, {
                className: "react-colorful__alpha-pointer",
                left: r.a,
                color: ua(r),
              })
            )
          );
        }),
        (Zm = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = Ri(e, ["className", "colorModel", "color", "onChange"]),
            u = xe(null);
          Jm(u);
          var s = Xm(r, a, o),
            d = s[0],
            y = s[1],
            A = tn(["react-colorful", t]);
          return h.createElement(
            "div",
            It({}, i, { ref: u, className: A }),
            h.createElement(Vm, { hsva: d, onChange: y }),
            h.createElement(Wm, { hue: d.h, onChange: y }),
            h.createElement(XO, {
              hsva: d,
              onChange: y,
              className: "react-colorful__last-control",
            })
          );
        }),
        (JO = {
          defaultColor: "hsla(0, 0%, 0%, 1)",
          toHsva: qO,
          fromHsva: ua,
          equal: Ym,
        }),
        (eg = function (e) {
          return h.createElement(Zm, It({}, e, { colorModel: JO }));
        }),
        (QO = {
          defaultColor: "rgba(0, 0, 0, 1)",
          toHsva: UO,
          fromHsva: function (e) {
            var t = Hm(e);
            return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
          },
          equal: Ym,
        }),
        (tg = function (e) {
          return h.createElement(Zm, It({}, e, { colorModel: QO }));
        });
    });
  var ag = F((Wee, ng) => {
    "use strict";
    l();
    c();
    p();
    ng.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    };
  });
  var ki = F((Xee, ig) => {
    l();
    c();
    p();
    var rn = ag(),
      og = {};
    for (let e of Object.keys(rn)) og[rn[e]] = e;
    var V = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] },
    };
    ig.exports = V;
    for (let e of Object.keys(V)) {
      if (!("channels" in V[e]))
        throw new Error("missing channels property: " + e);
      if (!("labels" in V[e]))
        throw new Error("missing channel labels property: " + e);
      if (V[e].labels.length !== V[e].channels)
        throw new Error("channel and label counts mismatch: " + e);
      let { channels: t, labels: r } = V[e];
      delete V[e].channels,
        delete V[e].labels,
        Object.defineProperty(V[e], "channels", { value: t }),
        Object.defineProperty(V[e], "labels", { value: r });
    }
    V.rgb.hsl = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(t, r, n),
        o = Math.max(t, r, n),
        i = o - a,
        u,
        s;
      o === a
        ? (u = 0)
        : t === o
        ? (u = (r - n) / i)
        : r === o
        ? (u = 2 + (n - t) / i)
        : n === o && (u = 4 + (t - r) / i),
        (u = Math.min(u * 60, 360)),
        u < 0 && (u += 360);
      let d = (a + o) / 2;
      return (
        o === a
          ? (s = 0)
          : d <= 0.5
          ? (s = i / (o + a))
          : (s = i / (2 - o - a)),
        [u, s * 100, d * 100]
      );
    };
    V.rgb.hsv = function (e) {
      let t,
        r,
        n,
        a,
        o,
        i = e[0] / 255,
        u = e[1] / 255,
        s = e[2] / 255,
        d = Math.max(i, u, s),
        y = d - Math.min(i, u, s),
        A = function (g) {
          return (d - g) / 6 / y + 1 / 2;
        };
      return (
        y === 0
          ? ((a = 0), (o = 0))
          : ((o = y / d),
            (t = A(i)),
            (r = A(u)),
            (n = A(s)),
            i === d
              ? (a = n - r)
              : u === d
              ? (a = 1 / 3 + t - n)
              : s === d && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, o * 100, d * 100]
      );
    };
    V.rgb.hwb = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a = V.rgb.hsl(e)[0],
        o = (1 / 255) * Math.min(t, Math.min(r, n));
      return (
        (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, o * 100, n * 100]
      );
    };
    V.rgb.cmyk = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(1 - t, 1 - r, 1 - n),
        o = (1 - t - a) / (1 - a) || 0,
        i = (1 - r - a) / (1 - a) || 0,
        u = (1 - n - a) / (1 - a) || 0;
      return [o * 100, i * 100, u * 100, a * 100];
    };
    function ZO(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
    }
    V.rgb.keyword = function (e) {
      let t = og[e];
      if (t) return t;
      let r = 1 / 0,
        n;
      for (let a of Object.keys(rn)) {
        let o = rn[a],
          i = ZO(e, o);
        i < r && ((r = i), (n = a));
      }
      return n;
    };
    V.keyword.rgb = function (e) {
      return rn[e];
    };
    V.rgb.xyz = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255;
      (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
      let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
        o = t * 0.2126 + r * 0.7152 + n * 0.0722,
        i = t * 0.0193 + r * 0.1192 + n * 0.9505;
      return [a * 100, o * 100, i * 100];
    };
    V.rgb.lab = function (e) {
      let t = V.rgb.xyz(e),
        r = t[0],
        n = t[1],
        a = t[2];
      (r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
      let o = 116 * n - 16,
        i = 500 * (r - n),
        u = 200 * (n - a);
      return [o, i, u];
    };
    V.hsl.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i;
      if (r === 0) return (i = n * 255), [i, i, i];
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r);
      let u = 2 * n - a,
        s = [0, 0, 0];
      for (let d = 0; d < 3; d++)
        (o = t + (1 / 3) * -(d - 1)),
          o < 0 && o++,
          o > 1 && o--,
          6 * o < 1
            ? (i = u + (a - u) * 6 * o)
            : 2 * o < 1
            ? (i = a)
            : 3 * o < 2
            ? (i = u + (a - u) * (2 / 3 - o) * 6)
            : (i = u),
          (s[d] = i * 255);
      return s;
    };
    V.hsl.hsv = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = r,
        o = Math.max(n, 0.01);
      (n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o);
      let i = (n + r) / 2,
        u = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r);
      return [t, u * 100, i * 100];
    };
    V.hsv.rgb = function (e) {
      let t = e[0] / 60,
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.floor(t) % 6,
        o = t - Math.floor(t),
        i = 255 * n * (1 - r),
        u = 255 * n * (1 - r * o),
        s = 255 * n * (1 - r * (1 - o));
      switch (((n *= 255), a)) {
        case 0:
          return [n, s, i];
        case 1:
          return [u, n, i];
        case 2:
          return [i, n, s];
        case 3:
          return [i, u, n];
        case 4:
          return [s, i, n];
        case 5:
          return [n, i, u];
      }
    };
    V.hsv.hsl = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.max(n, 0.01),
        o,
        i;
      i = (2 - r) * n;
      let u = (2 - r) * a;
      return (
        (o = r * a),
        (o /= u <= 1 ? u : 2 - u),
        (o = o || 0),
        (i /= 2),
        [t, o * 100, i * 100]
      );
    };
    V.hwb.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a = r + n,
        o;
      a > 1 && ((r /= a), (n /= a));
      let i = Math.floor(6 * t),
        u = 1 - n;
      (o = 6 * t - i), i & 1 && (o = 1 - o);
      let s = r + o * (u - r),
        d,
        y,
        A;
      switch (i) {
        default:
        case 6:
        case 0:
          (d = u), (y = s), (A = r);
          break;
        case 1:
          (d = s), (y = u), (A = r);
          break;
        case 2:
          (d = r), (y = u), (A = s);
          break;
        case 3:
          (d = r), (y = s), (A = u);
          break;
        case 4:
          (d = s), (y = r), (A = u);
          break;
        case 5:
          (d = u), (y = r), (A = s);
          break;
      }
      return [d * 255, y * 255, A * 255];
    };
    V.cmyk.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a = e[3] / 100,
        o = 1 - Math.min(1, t * (1 - a) + a),
        i = 1 - Math.min(1, r * (1 - a) + a),
        u = 1 - Math.min(1, n * (1 - a) + a);
      return [o * 255, i * 255, u * 255];
    };
    V.xyz.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i;
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (i = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        (i = Math.min(Math.max(0, i), 1)),
        [a * 255, o * 255, i * 255]
      );
    };
    V.xyz.lab = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      (t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
      let a = 116 * r - 16,
        o = 500 * (t - r),
        i = 200 * (r - n);
      return [a, o, i];
    };
    V.lab.xyz = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a,
        o,
        i;
      (o = (t + 16) / 116), (a = r / 500 + o), (i = o - n / 200);
      let u = o ** 3,
        s = a ** 3,
        d = i ** 3;
      return (
        (o = u > 0.008856 ? u : (o - 16 / 116) / 7.787),
        (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
        (i = d > 0.008856 ? d : (i - 16 / 116) / 7.787),
        (a *= 95.047),
        (o *= 100),
        (i *= 108.883),
        [a, o, i]
      );
    };
    V.lab.lch = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a;
      (a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360);
      let i = Math.sqrt(r * r + n * n);
      return [t, i, a];
    };
    V.lch.lab = function (e) {
      let t = e[0],
        r = e[1],
        a = (e[2] / 360) * 2 * Math.PI,
        o = r * Math.cos(a),
        i = r * Math.sin(a);
      return [t, o, i];
    };
    V.rgb.ansi16 = function (e, t = null) {
      let [r, n, a] = e,
        o = t === null ? V.rgb.hsv(e)[2] : t;
      if (((o = Math.round(o / 50)), o === 0)) return 30;
      let i =
        30 +
        ((Math.round(a / 255) << 2) |
          (Math.round(n / 255) << 1) |
          Math.round(r / 255));
      return o === 2 && (i += 60), i;
    };
    V.hsv.ansi16 = function (e) {
      return V.rgb.ansi16(V.hsv.rgb(e), e[2]);
    };
    V.rgb.ansi256 = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5);
    };
    V.ansi16.rgb = function (e) {
      let t = e % 10;
      if (t === 0 || t === 7)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
      let r = (~~(e > 50) + 1) * 0.5,
        n = (t & 1) * r * 255,
        a = ((t >> 1) & 1) * r * 255,
        o = ((t >> 2) & 1) * r * 255;
      return [n, a, o];
    };
    V.ansi256.rgb = function (e) {
      if (e >= 232) {
        let o = (e - 232) * 10 + 8;
        return [o, o, o];
      }
      e -= 16;
      let t,
        r = (Math.floor(e / 36) / 5) * 255,
        n = (Math.floor((t = e % 36) / 6) / 5) * 255,
        a = ((t % 6) / 5) * 255;
      return [r, n, a];
    };
    V.rgb.hex = function (e) {
      let r = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
      )
        .toString(16)
        .toUpperCase();
      return "000000".substring(r.length) + r;
    };
    V.hex.rgb = function (e) {
      let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      let r = t[0];
      t[0].length === 3 &&
        (r = r
          .split("")
          .map((u) => u + u)
          .join(""));
      let n = parseInt(r, 16),
        a = (n >> 16) & 255,
        o = (n >> 8) & 255,
        i = n & 255;
      return [a, o, i];
    };
    V.rgb.hcg = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.max(Math.max(t, r), n),
        o = Math.min(Math.min(t, r), n),
        i = a - o,
        u,
        s;
      return (
        i < 1 ? (u = o / (1 - i)) : (u = 0),
        i <= 0
          ? (s = 0)
          : a === t
          ? (s = ((r - n) / i) % 6)
          : a === r
          ? (s = 2 + (n - t) / i)
          : (s = 4 + (t - r) / i),
        (s /= 6),
        (s %= 1),
        [s * 360, i * 100, u * 100]
      );
    };
    V.hsl.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
        a = 0;
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    V.hsv.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t * r,
        a = 0;
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    V.hcg.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100;
      if (r === 0) return [n * 255, n * 255, n * 255];
      let a = [0, 0, 0],
        o = (t % 1) * 6,
        i = o % 1,
        u = 1 - i,
        s = 0;
      switch (Math.floor(o)) {
        case 0:
          (a[0] = 1), (a[1] = i), (a[2] = 0);
          break;
        case 1:
          (a[0] = u), (a[1] = 1), (a[2] = 0);
          break;
        case 2:
          (a[0] = 0), (a[1] = 1), (a[2] = i);
          break;
        case 3:
          (a[0] = 0), (a[1] = u), (a[2] = 1);
          break;
        case 4:
          (a[0] = i), (a[1] = 0), (a[2] = 1);
          break;
        default:
          (a[0] = 1), (a[1] = 0), (a[2] = u);
      }
      return (
        (s = (1 - r) * n),
        [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255]
      );
    };
    V.hcg.hsv = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t),
        a = 0;
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100];
    };
    V.hcg.hsl = function (e) {
      let t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t,
        a = 0;
      return (
        n > 0 && n < 0.5
          ? (a = t / (2 * n))
          : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
        [e[0], a * 100, n * 100]
      );
    };
    V.hcg.hwb = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t);
      return [e[0], (n - t) * 100, (1 - n) * 100];
    };
    V.hwb.hcg = function (e) {
      let t = e[1] / 100,
        n = 1 - e[2] / 100,
        a = n - t,
        o = 0;
      return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100];
    };
    V.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
    };
    V.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
    };
    V.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
    };
    V.gray.hsl = function (e) {
      return [0, 0, e[0]];
    };
    V.gray.hsv = V.gray.hsl;
    V.gray.hwb = function (e) {
      return [0, 100, e[0]];
    };
    V.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    };
    V.gray.lab = function (e) {
      return [e[0], 0, 0];
    };
    V.gray.hex = function (e) {
      let t = Math.round((e[0] / 100) * 255) & 255,
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(n.length) + n;
    };
    V.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
    };
  });
  var sg = F((ete, ug) => {
    l();
    c();
    p();
    var sa = ki();
    function e4() {
      let e = {},
        t = Object.keys(sa);
      for (let r = t.length, n = 0; n < r; n++)
        e[t[n]] = { distance: -1, parent: null };
      return e;
    }
    function t4(e) {
      let t = e4(),
        r = [e];
      for (t[e].distance = 0; r.length; ) {
        let n = r.pop(),
          a = Object.keys(sa[n]);
        for (let o = a.length, i = 0; i < o; i++) {
          let u = a[i],
            s = t[u];
          s.distance === -1 &&
            ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(u));
        }
      }
      return t;
    }
    function r4(e, t) {
      return function (r) {
        return t(e(r));
      };
    }
    function n4(e, t) {
      let r = [t[e].parent, e],
        n = sa[t[e].parent][e],
        a = t[e].parent;
      for (; t[a].parent; )
        r.unshift(t[a].parent),
          (n = r4(sa[t[a].parent][a], n)),
          (a = t[a].parent);
      return (n.conversion = r), n;
    }
    ug.exports = function (e) {
      let t = t4(e),
        r = {},
        n = Object.keys(t);
      for (let a = n.length, o = 0; o < a; o++) {
        let i = n[o];
        t[i].parent !== null && (r[i] = n4(i, t));
      }
      return r;
    };
  });
  var cg = F((ate, lg) => {
    l();
    c();
    p();
    var Ni = ki(),
      a4 = sg(),
      hr = {},
      o4 = Object.keys(Ni);
    function i4(e) {
      let t = function (...r) {
        let n = r[0];
        return n == null ? n : (n.length > 1 && (r = n), e(r));
      };
      return "conversion" in e && (t.conversion = e.conversion), t;
    }
    function u4(e) {
      let t = function (...r) {
        let n = r[0];
        if (n == null) return n;
        n.length > 1 && (r = n);
        let a = e(r);
        if (typeof a == "object")
          for (let o = a.length, i = 0; i < o; i++) a[i] = Math.round(a[i]);
        return a;
      };
      return "conversion" in e && (t.conversion = e.conversion), t;
    }
    o4.forEach((e) => {
      (hr[e] = {}),
        Object.defineProperty(hr[e], "channels", { value: Ni[e].channels }),
        Object.defineProperty(hr[e], "labels", { value: Ni[e].labels });
      let t = a4(e);
      Object.keys(t).forEach((n) => {
        let a = t[n];
        (hr[e][n] = u4(a)), (hr[e][n].raw = i4(a));
      });
    });
    lg.exports = hr;
  });
  var dg = F((ste, pg) => {
    l();
    c();
    p();
    var s4 = ze(),
      l4 = function () {
        return s4.Date.now();
      };
    pg.exports = l4;
  });
  var hg = F((dte, fg) => {
    l();
    c();
    p();
    var c4 = /\s/;
    function p4(e) {
      for (var t = e.length; t-- && c4.test(e.charAt(t)); );
      return t;
    }
    fg.exports = p4;
  });
  var gg = F((gte, mg) => {
    l();
    c();
    p();
    var d4 = hg(),
      f4 = /^\s+/;
    function h4(e) {
      return e && e.slice(0, d4(e) + 1).replace(f4, "");
    }
    mg.exports = h4;
  });
  var Eg = F((Ete, Ag) => {
    l();
    c();
    p();
    var m4 = gg(),
      yg = Ve(),
      g4 = kr(),
      bg = 0 / 0,
      y4 = /^[-+]0x[0-9a-f]+$/i,
      b4 = /^0b[01]+$/i,
      A4 = /^0o[0-7]+$/i,
      E4 = parseInt;
    function D4(e) {
      if (typeof e == "number") return e;
      if (g4(e)) return bg;
      if (yg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = yg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = m4(e);
      var r = b4.test(e);
      return r || A4.test(e) ? E4(e.slice(2), r ? 2 : 8) : y4.test(e) ? bg : +e;
    }
    Ag.exports = D4;
  });
  var Cg = F((xte, vg) => {
    l();
    c();
    p();
    var v4 = Ve(),
      ji = dg(),
      Dg = Eg(),
      C4 = "Expected a function",
      x4 = Math.max,
      F4 = Math.min;
    function S4(e, t, r) {
      var n,
        a,
        o,
        i,
        u,
        s,
        d = 0,
        y = !1,
        A = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(C4);
      (t = Dg(t) || 0),
        v4(r) &&
          ((y = !!r.leading),
          (A = "maxWait" in r),
          (o = A ? x4(Dg(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function m(M) {
        var I = n,
          U = a;
        return (n = a = void 0), (d = M), (i = e.apply(U, I)), i;
      }
      function E(M) {
        return (d = M), (u = setTimeout(S, t)), y ? m(M) : i;
      }
      function b(M) {
        var I = M - s,
          U = M - d,
          K = t - I;
        return A ? F4(K, o - U) : K;
      }
      function x(M) {
        var I = M - s,
          U = M - d;
        return s === void 0 || I >= t || I < 0 || (A && U >= o);
      }
      function S() {
        var M = ji();
        if (x(M)) return P(M);
        u = setTimeout(S, b(M));
      }
      function P(M) {
        return (u = void 0), g && n ? m(M) : ((n = a = void 0), i);
      }
      function j() {
        u !== void 0 && clearTimeout(u), (d = 0), (n = s = a = u = void 0);
      }
      function $() {
        return u === void 0 ? i : P(ji());
      }
      function w() {
        var M = ji(),
          I = x(M);
        if (((n = arguments), (a = this), (s = M), I)) {
          if (u === void 0) return E(s);
          if (A) return clearTimeout(u), (u = setTimeout(S, t)), m(s);
        }
        return u === void 0 && (u = setTimeout(S, t)), i;
      }
      return (w.cancel = j), (w.flush = $), w;
    }
    vg.exports = S4;
  });
  var Fg = F((Bte, xg) => {
    l();
    c();
    p();
    var w4 = Cg(),
      B4 = Ve(),
      T4 = "Expected a function";
    function _4(e, t, r) {
      var n = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(T4);
      return (
        B4(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (a = "trailing" in r ? !!r.trailing : a)),
        w4(e, t, { leading: n, maxWait: t, trailing: a })
      );
    }
    xg.exports = _4;
  });
  var Og = {};
  su(Og, { ColorControl: () => _g, default: () => K4 });
  var $e,
    Bg,
    O4,
    R4,
    P4,
    I4,
    k4,
    N4,
    j4,
    Sg,
    M4,
    q4,
    Tg,
    la,
    L4,
    $4,
    U4,
    Mi,
    z4,
    H4,
    ca,
    wg,
    mr,
    G4,
    W4,
    pa,
    V4,
    _g,
    K4,
    Rg = tt(() => {
      l();
      c();
      p();
      qa();
      G();
      rg();
      ($e = se(cg(), 1)), (Bg = se(Fg(), 1));
      ce();
      le();
      (O4 = N.div({ position: "relative", maxWidth: 250 })),
        (R4 = N(on)({ position: "absolute", zIndex: 1, top: 4, left: 4 })),
        (P4 = N.div({
          width: 200,
          margin: 5,
          ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" },
          ".react-colorful__hue": {
            boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)",
          },
          ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" },
        })),
        (I4 = N(Pa)(({ theme: e }) => ({
          fontFamily: e.typography.fonts.base,
        }))),
        (k4 = N.div({
          display: "grid",
          gridTemplateColumns: "repeat(9, 16px)",
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        })),
        (N4 = N.div(({ theme: e, active: t }) => ({
          width: 16,
          height: 16,
          boxShadow: t
            ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
            : `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: e.appBorderRadius,
        }))),
        (j4 = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
        (Sg = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
          let o = `linear-gradient(${e}, ${e}), ${j4}, linear-gradient(#fff, #fff)`;
          return h.createElement(N4, {
            ...a,
            active: t,
            onClick: r,
            style: { ...n, backgroundImage: o },
          });
        }),
        (M4 = N(Se.Input)(({ theme: e }) => ({
          width: "100%",
          paddingLeft: 30,
          paddingRight: 30,
          boxSizing: "border-box",
          fontFamily: e.typography.fonts.base,
        }))),
        (q4 = N(Fe)(({ theme: e }) => ({
          position: "absolute",
          zIndex: 1,
          top: 6,
          right: 7,
          width: 20,
          height: 20,
          padding: 4,
          boxSizing: "border-box",
          cursor: "pointer",
          color: e.input.color,
        }))),
        (Tg = ((e) => ((e.RGB = "rgb"), (e.HSL = "hsl"), (e.HEX = "hex"), e))(
          Tg || {}
        )),
        (la = Object.values(Tg)),
        (L4 = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
        ($4 =
          /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
        (U4 =
          /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
        (Mi = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
        (z4 = /^\s*#?([0-9a-f]{3})\s*$/i),
        (H4 = { hex: Qm, rgb: tg, hsl: eg }),
        (ca = {
          hex: "transparent",
          rgb: "rgba(0, 0, 0, 0)",
          hsl: "hsla(0, 0%, 0%, 0)",
        }),
        (wg = (e) => {
          let t = e?.match(L4);
          if (!t) return [0, 0, 0, 1];
          let [, r, n, a, o = 1] = t;
          return [r, n, a, o].map(Number);
        }),
        (mr = (e) => {
          if (!e) return;
          let t = !0;
          if ($4.test(e)) {
            let [i, u, s, d] = wg(e),
              [y, A, g] = $e.default.rgb.hsl([i, u, s]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: $e.default.rgb.keyword([i, u, s]),
              colorSpace: "rgb",
              rgb: e,
              hsl: `hsla(${y}, ${A}%, ${g}%, ${d})`,
              hex: `#${$e.default.rgb.hex([i, u, s]).toLowerCase()}`,
            };
          }
          if (U4.test(e)) {
            let [i, u, s, d] = wg(e),
              [y, A, g] = $e.default.hsl.rgb([i, u, s]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: $e.default.hsl.keyword([i, u, s]),
              colorSpace: "hsl",
              rgb: `rgba(${y}, ${A}, ${g}, ${d})`,
              hsl: e,
              hex: `#${$e.default.hsl.hex([i, u, s]).toLowerCase()}`,
            };
          }
          let r = e.replace("#", ""),
            n = $e.default.keyword.rgb(r) || $e.default.hex.rgb(r),
            a = $e.default.rgb.hsl(n),
            o = e;
          if (
            (/[^#a-f0-9]/i.test(e) ? (o = r) : Mi.test(e) && (o = `#${r}`),
            o.startsWith("#"))
          )
            t = Mi.test(o);
          else
            try {
              $e.default.keyword.hex(o);
            } catch {
              t = !1;
            }
          return {
            valid: t,
            value: o,
            keyword: $e.default.rgb.keyword(n),
            colorSpace: "hex",
            rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
            hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
            hex: o,
          };
        }),
        (G4 = (e, t, r) => {
          if (!e || !t?.valid) return ca[r];
          if (r !== "hex") return t?.[r] || ca[r];
          if (!t.hex.startsWith("#"))
            try {
              return `#${$e.default.keyword.hex(t.hex)}`;
            } catch {
              return ca.hex;
            }
          let n = t.hex.match(z4);
          if (!n) return Mi.test(t.hex) ? t.hex : ca.hex;
          let [a, o, i] = n[1].split("");
          return `#${a}${a}${o}${o}${i}${i}`;
        }),
        (W4 = (e, t) => {
          let [r, n] = Z(e || ""),
            [a, o] = Z(() => mr(r)),
            [i, u] = Z(a?.colorSpace || "hex");
          oe(() => {
            let A = e || "",
              g = mr(A);
            n(A), o(g), u(g?.colorSpace || "hex");
          }, [e]);
          let s = rt(() => G4(r, a, i).toLowerCase(), [r, a, i]),
            d = de(
              (A) => {
                let g = mr(A),
                  m = g?.value || A || "";
                n(m),
                  m === "" && (o(void 0), t(void 0)),
                  g && (o(g), u(g.colorSpace), t(g.value));
              },
              [t]
            ),
            y = de(() => {
              let A = la.indexOf(i) + 1;
              A >= la.length && (A = 0), u(la[A]);
              let g = a?.[la[A]] || "";
              n(g), t(g);
            }, [a, i, t]);
          return {
            value: r,
            realValue: s,
            updateValue: d,
            color: a,
            colorSpace: i,
            cycleColorSpace: y,
          };
        }),
        (pa = (e) => e.replace(/\s*/, "").toLowerCase()),
        (V4 = (e, t, r) => {
          let [n, a] = Z(t?.valid ? [t] : []);
          oe(() => {
            t === void 0 && a([]);
          }, [t]);
          let o = rt(
              () =>
                (e || [])
                  .map((u) =>
                    typeof u == "string"
                      ? mr(u)
                      : u.title
                      ? { ...mr(u.color), keyword: u.title }
                      : mr(u.color)
                  )
                  .concat(n)
                  .filter(Boolean)
                  .slice(-27),
              [e, n]
            ),
            i = de(
              (u) => {
                u?.valid &&
                  (o.some((s) => pa(s[r]) === pa(u[r])) ||
                    a((s) => s.concat(u)));
              },
              [r, o]
            );
          return { presets: o, addPreset: i };
        }),
        (_g = ({
          name: e,
          value: t,
          onChange: r,
          onFocus: n,
          onBlur: a,
          presetColors: o,
          startOpen: i = !1,
        }) => {
          let u = de((0, Bg.default)(r, 200), [r]),
            {
              value: s,
              realValue: d,
              updateValue: y,
              color: A,
              colorSpace: g,
              cycleColorSpace: m,
            } = W4(t, u),
            { presets: E, addPreset: b } = V4(o, A, g),
            x = H4[g];
          return h.createElement(
            O4,
            null,
            h.createElement(
              R4,
              {
                startOpen: i,
                closeOnOutsideClick: !0,
                onVisibleChange: () => b(A),
                tooltip: h.createElement(
                  P4,
                  null,
                  h.createElement(x, {
                    color: d === "transparent" ? "#000000" : d,
                    onChange: y,
                    onFocus: n,
                    onBlur: a,
                  }),
                  E.length > 0 &&
                    h.createElement(
                      k4,
                      null,
                      E.map((S, P) =>
                        h.createElement(
                          on,
                          {
                            key: `${S.value}-${P}`,
                            hasChrome: !1,
                            tooltip: h.createElement(I4, {
                              note: S.keyword || S.value,
                            }),
                          },
                          h.createElement(Sg, {
                            value: S[g],
                            active: A && pa(S[g]) === pa(A[g]),
                            onClick: () => y(S.value),
                          })
                        )
                      )
                    )
                ),
              },
              h.createElement(Sg, { value: d, style: { margin: 4 } })
            ),
            h.createElement(M4, {
              id: ke(e),
              value: s,
              onChange: (S) => y(S.target.value),
              onFocus: (S) => S.target.select(),
              placeholder: "Choose color...",
            }),
            s ? h.createElement(q4, { icon: "markup", onClick: m }) : null
          );
        }),
        (K4 = _g);
    });
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var ba = "addon-controls",
    Aa = "controls";
  G();
  l();
  c();
  p();
  var bI = __STORYBOOKAPI__,
    {
      ActiveTabs: AI,
      Consumer: EI,
      ManagerContext: DI,
      Provider: vI,
      addons: Da,
      combineParameters: CI,
      controlOrMetaKey: xI,
      controlOrMetaSymbol: FI,
      eventMatchesShortcut: SI,
      eventToShortcut: wI,
      isMacLike: BI,
      isShortcutTaken: TI,
      keyToSymbol: _I,
      merge: OI,
      mockChannel: RI,
      optionOrAltSymbol: PI,
      shortcutMatchesShortcut: II,
      shortcutToHumanString: kI,
      types: fu,
      useAddonState: NI,
      useArgTypes: an,
      useArgs: hu,
      useChannel: jI,
      useGlobalTypes: MI,
      useGlobals: mu,
      useParameter: va,
      useSharedState: qI,
      useStoryPrepared: LI,
      useStorybookApi: $I,
      useStorybookState: gu,
    } = __STORYBOOKAPI__;
  le();
  G();
  l();
  c();
  p();
  qa();
  G();
  ce();
  le();
  G();
  l();
  c();
  p();
  l();
  c();
  p();
  function Oe() {
    return (
      (Oe = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Oe.apply(this, arguments)
    );
  }
  l();
  c();
  p();
  function La(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function at(e, t) {
    return (
      (at = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n;
          }),
      at(e, t)
    );
  }
  function $a(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      at(e, t);
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function vr(e) {
    return (
      (vr = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      vr(e)
    );
  }
  l();
  c();
  p();
  function Ua(e) {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function za() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function jt(e, t, r) {
    return (
      za()
        ? (jt = Reflect.construct.bind())
        : (jt = function (a, o, i) {
            var u = [null];
            u.push.apply(u, o);
            var s = Function.bind.apply(a, u),
              d = new s();
            return i && at(d, i.prototype), d;
          }),
      jt.apply(null, arguments)
    );
  }
  function Cr(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (Cr = function (n) {
        if (n === null || !Ua(n)) return n;
        if (typeof n != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof t < "u") {
          if (t.has(n)) return t.get(n);
          t.set(n, a);
        }
        function a() {
          return jt(n, arguments, vr(this).constructor);
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          at(a, n)
        );
      }),
      Cr(e)
    );
  }
  l();
  c();
  p();
  var Ne = (function (e) {
    $a(t, e);
    function t(r) {
      var n;
      if (!0)
        n =
          e.call(
            this,
            "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
              r +
              " for more information."
          ) || this;
      else for (var a, o, i; i < a; i++);
      return La(n);
    }
    return t;
  })(Cr(Error));
  function vu(e, t) {
    return e.substr(-t.length) === t;
  }
  var y2 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function Cu(e) {
    if (typeof e != "string") return e;
    var t = e.match(y2);
    return t ? parseFloat(e) : e;
  }
  var b2 = function (t) {
      return function (r, n) {
        n === void 0 && (n = "16px");
        var a = r,
          o = n;
        if (typeof r == "string") {
          if (!vu(r, "px")) throw new Ne(69, t, r);
          a = Cu(r);
        }
        if (typeof n == "string") {
          if (!vu(n, "px")) throw new Ne(70, t, n);
          o = Cu(n);
        }
        if (typeof a == "string") throw new Ne(71, r, t);
        if (typeof o == "string") throw new Ne(72, n, t);
        return "" + a / o + t;
      };
    },
    Fu = b2,
    Ek = Fu("em");
  var Dk = Fu("rem");
  function Ha(e) {
    return Math.round(e * 255);
  }
  function A2(e, t, r) {
    return Ha(e) + "," + Ha(t) + "," + Ha(r);
  }
  function xr(e, t, r, n) {
    if ((n === void 0 && (n = A2), t === 0)) return n(r, r, r);
    var a = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * r - 1)) * t,
      i = o * (1 - Math.abs((a % 2) - 1)),
      u = 0,
      s = 0,
      d = 0;
    a >= 0 && a < 1
      ? ((u = o), (s = i))
      : a >= 1 && a < 2
      ? ((u = i), (s = o))
      : a >= 2 && a < 3
      ? ((s = o), (d = i))
      : a >= 3 && a < 4
      ? ((s = i), (d = o))
      : a >= 4 && a < 5
      ? ((u = i), (d = o))
      : a >= 5 && a < 6 && ((u = o), (d = i));
    var y = r - o / 2,
      A = u + y,
      g = s + y,
      m = d + y;
    return n(A, g, m);
  }
  var xu = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32",
  };
  function E2(e) {
    if (typeof e != "string") return e;
    var t = e.toLowerCase();
    return xu[t] ? "#" + xu[t] : e;
  }
  var D2 = /^#[a-fA-F0-9]{6}$/,
    v2 = /^#[a-fA-F0-9]{8}$/,
    C2 = /^#[a-fA-F0-9]{3}$/,
    x2 = /^#[a-fA-F0-9]{4}$/,
    Ga = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    F2 =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    S2 =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    w2 =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function Mt(e) {
    if (typeof e != "string") throw new Ne(3);
    var t = E2(e);
    if (t.match(D2))
      return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16),
      };
    if (t.match(v2)) {
      var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16),
        alpha: r,
      };
    }
    if (t.match(C2))
      return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16),
      };
    if (t.match(x2)) {
      var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16),
        alpha: n,
      };
    }
    var a = Ga.exec(t);
    if (a)
      return {
        red: parseInt("" + a[1], 10),
        green: parseInt("" + a[2], 10),
        blue: parseInt("" + a[3], 10),
      };
    var o = F2.exec(t.substring(0, 50));
    if (o)
      return {
        red: parseInt("" + o[1], 10),
        green: parseInt("" + o[2], 10),
        blue: parseInt("" + o[3], 10),
        alpha:
          parseFloat("" + o[4]) > 1
            ? parseFloat("" + o[4]) / 100
            : parseFloat("" + o[4]),
      };
    var i = S2.exec(t);
    if (i) {
      var u = parseInt("" + i[1], 10),
        s = parseInt("" + i[2], 10) / 100,
        d = parseInt("" + i[3], 10) / 100,
        y = "rgb(" + xr(u, s, d) + ")",
        A = Ga.exec(y);
      if (!A) throw new Ne(4, t, y);
      return {
        red: parseInt("" + A[1], 10),
        green: parseInt("" + A[2], 10),
        blue: parseInt("" + A[3], 10),
      };
    }
    var g = w2.exec(t.substring(0, 50));
    if (g) {
      var m = parseInt("" + g[1], 10),
        E = parseInt("" + g[2], 10) / 100,
        b = parseInt("" + g[3], 10) / 100,
        x = "rgb(" + xr(m, E, b) + ")",
        S = Ga.exec(x);
      if (!S) throw new Ne(4, t, x);
      return {
        red: parseInt("" + S[1], 10),
        green: parseInt("" + S[2], 10),
        blue: parseInt("" + S[3], 10),
        alpha:
          parseFloat("" + g[4]) > 1
            ? parseFloat("" + g[4]) / 100
            : parseFloat("" + g[4]),
      };
    }
    throw new Ne(5);
  }
  function B2(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      a = Math.max(t, r, n),
      o = Math.min(t, r, n),
      i = (a + o) / 2;
    if (a === o)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: i };
    var u,
      s = a - o,
      d = i > 0.5 ? s / (2 - a - o) : s / (a + o);
    switch (a) {
      case t:
        u = (r - n) / s + (r < n ? 6 : 0);
        break;
      case r:
        u = (n - t) / s + 2;
        break;
      default:
        u = (t - r) / s + 4;
        break;
    }
    return (
      (u *= 60),
      e.alpha !== void 0
        ? { hue: u, saturation: d, lightness: i, alpha: e.alpha }
        : { hue: u, saturation: d, lightness: i }
    );
  }
  function pt(e) {
    return B2(Mt(e));
  }
  var T2 = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? "#" + t[1] + t[3] + t[5]
        : t;
    },
    Va = T2;
  function Ct(e) {
    var t = e.toString(16);
    return t.length === 1 ? "0" + t : t;
  }
  function Wa(e) {
    return Ct(Math.round(e * 255));
  }
  function _2(e, t, r) {
    return Va("#" + Wa(e) + Wa(t) + Wa(r));
  }
  function ln(e, t, r) {
    return xr(e, t, r, _2);
  }
  function O2(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number")
      return ln(e, t, r);
    if (typeof e == "object" && t === void 0 && r === void 0)
      return ln(e.hue, e.saturation, e.lightness);
    throw new Ne(1);
  }
  function R2(e, t, r, n) {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof n == "number"
    )
      return n >= 1 ? ln(e, t, r) : "rgba(" + xr(e, t, r) + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? ln(e.hue, e.saturation, e.lightness)
        : "rgba(" + xr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
    throw new Ne(2);
  }
  function Ka(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number")
      return Va("#" + Ct(e) + Ct(t) + Ct(r));
    if (typeof e == "object" && t === void 0 && r === void 0)
      return Va("#" + Ct(e.red) + Ct(e.green) + Ct(e.blue));
    throw new Ne(6);
  }
  function We(e, t, r, n) {
    if (typeof e == "string" && typeof t == "number") {
      var a = Mt(e);
      return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
    } else {
      if (
        typeof e == "number" &&
        typeof t == "number" &&
        typeof r == "number" &&
        typeof n == "number"
      )
        return n >= 1
          ? Ka(e, t, r)
          : "rgba(" + e + "," + t + "," + r + "," + n + ")";
      if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Ka(e.red, e.green, e.blue)
          : "rgba(" +
              e.red +
              "," +
              e.green +
              "," +
              e.blue +
              "," +
              e.alpha +
              ")";
    }
    throw new Ne(7);
  }
  var P2 = function (t) {
      return (
        typeof t.red == "number" &&
        typeof t.green == "number" &&
        typeof t.blue == "number" &&
        (typeof t.alpha != "number" || typeof t.alpha > "u")
      );
    },
    I2 = function (t) {
      return (
        typeof t.red == "number" &&
        typeof t.green == "number" &&
        typeof t.blue == "number" &&
        typeof t.alpha == "number"
      );
    },
    k2 = function (t) {
      return (
        typeof t.hue == "number" &&
        typeof t.saturation == "number" &&
        typeof t.lightness == "number" &&
        (typeof t.alpha != "number" || typeof t.alpha > "u")
      );
    },
    N2 = function (t) {
      return (
        typeof t.hue == "number" &&
        typeof t.saturation == "number" &&
        typeof t.lightness == "number" &&
        typeof t.alpha == "number"
      );
    };
  function dt(e) {
    if (typeof e != "object") throw new Ne(8);
    if (I2(e)) return We(e);
    if (P2(e)) return Ka(e);
    if (N2(e)) return R2(e);
    if (k2(e)) return O2(e);
    throw new Ne(8);
  }
  function Su(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments));
      return a.length >= t ? e.apply(this, a) : Su(e, t, a);
    };
  }
  function qe(e) {
    return Su(e, e.length, []);
  }
  function j2(e, t) {
    if (t === "transparent") return t;
    var r = pt(t);
    return dt(Oe({}, r, { hue: r.hue + parseFloat(e) }));
  }
  var vk = qe(j2);
  function qt(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  function M2(e, t) {
    if (t === "transparent") return t;
    var r = pt(t);
    return dt(Oe({}, r, { lightness: qt(0, 1, r.lightness - parseFloat(e)) }));
  }
  var q2 = qe(M2),
    Ue = q2;
  function L2(e, t) {
    if (t === "transparent") return t;
    var r = pt(t);
    return dt(
      Oe({}, r, { saturation: qt(0, 1, r.saturation - parseFloat(e)) })
    );
  }
  var Ck = qe(L2);
  function $2(e, t) {
    if (t === "transparent") return t;
    var r = pt(t);
    return dt(Oe({}, r, { lightness: qt(0, 1, r.lightness + parseFloat(e)) }));
  }
  var U2 = qe($2),
    ot = U2;
  function z2(e, t, r) {
    if (t === "transparent") return r;
    if (r === "transparent") return t;
    if (e === 0) return r;
    var n = Mt(t),
      a = Oe({}, n, { alpha: typeof n.alpha == "number" ? n.alpha : 1 }),
      o = Mt(r),
      i = Oe({}, o, { alpha: typeof o.alpha == "number" ? o.alpha : 1 }),
      u = a.alpha - i.alpha,
      s = parseFloat(e) * 2 - 1,
      d = s * u === -1 ? s : s + u,
      y = 1 + s * u,
      A = (d / y + 1) / 2,
      g = 1 - A,
      m = {
        red: Math.floor(a.red * A + i.red * g),
        green: Math.floor(a.green * A + i.green * g),
        blue: Math.floor(a.blue * A + i.blue * g),
        alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
      };
    return We(m);
  }
  var H2 = qe(z2),
    wu = H2;
  function G2(e, t) {
    if (t === "transparent") return t;
    var r = Mt(t),
      n = typeof r.alpha == "number" ? r.alpha : 1,
      a = Oe({}, r, { alpha: qt(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
    return We(a);
  }
  var W2 = qe(G2),
    Fr = W2;
  function V2(e, t) {
    if (t === "transparent") return t;
    var r = pt(t);
    return dt(
      Oe({}, r, { saturation: qt(0, 1, r.saturation + parseFloat(e)) })
    );
  }
  var xk = qe(V2);
  function K2(e, t) {
    return t === "transparent" ? t : dt(Oe({}, pt(t), { hue: parseFloat(e) }));
  }
  var Fk = qe(K2);
  function Y2(e, t) {
    return t === "transparent"
      ? t
      : dt(Oe({}, pt(t), { lightness: parseFloat(e) }));
  }
  var Sk = qe(Y2);
  function X2(e, t) {
    return t === "transparent"
      ? t
      : dt(Oe({}, pt(t), { saturation: parseFloat(e) }));
  }
  var wk = qe(X2);
  function J2(e, t) {
    return t === "transparent" ? t : wu(parseFloat(e), "rgb(0, 0, 0)", t);
  }
  var Bk = qe(J2);
  function Q2(e, t) {
    return t === "transparent" ? t : wu(parseFloat(e), "rgb(255, 255, 255)", t);
  }
  var Tk = qe(Q2);
  function Z2(e, t) {
    if (t === "transparent") return t;
    var r = Mt(t),
      n = typeof r.alpha == "number" ? r.alpha : 1,
      a = Oe({}, r, {
        alpha: qt(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
      });
    return We(a);
  }
  var e1 = qe(Z2),
    ue = e1;
  ce();
  le();
  le();
  ce();
  G();
  G();
  ce();
  l();
  c();
  p();
  var ee = (() => {
    let e;
    return (
      typeof window < "u"
        ? (e = window)
        : typeof globalThis < "u"
        ? (e = globalThis)
        : typeof window < "u"
        ? (e = window)
        : typeof self < "u"
        ? (e = self)
        : (e = {}),
      e
    );
  })();
  le();
  G();
  ce();
  le();
  G();
  G();
  le();
  G();
  G();
  var Kg = se(Ro(), 1);
  ce();
  l();
  c();
  p();
  var Gx = Object.create,
    $p = Object.defineProperty,
    Wx = Object.getOwnPropertyDescriptor,
    Vx = Object.getOwnPropertyNames,
    Kx = Object.getPrototypeOf,
    Yx = Object.prototype.hasOwnProperty,
    Xx = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Jx = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of Vx(t))
          !Yx.call(e, a) &&
            a !== r &&
            $p(e, a, {
              get: () => t[a],
              enumerable: !(n = Wx(t, a)) || n.enumerable,
            });
      return e;
    },
    Qx = (e, t, r) => (
      (r = e != null ? Gx(Kx(e)) : {}),
      Jx(
        t || !e || !e.__esModule
          ? $p(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Zx = Xx((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isEqual = (function () {
          var t = Object.prototype.toString,
            r = Object.getPrototypeOf,
            n = Object.getOwnPropertySymbols
              ? function (a) {
                  return Object.keys(a).concat(Object.getOwnPropertySymbols(a));
                }
              : Object.keys;
          return function (a, o) {
            return (function i(u, s, d) {
              var y,
                A,
                g,
                m = t.call(u),
                E = t.call(s);
              if (u === s) return !0;
              if (u == null || s == null) return !1;
              if (d.indexOf(u) > -1 && d.indexOf(s) > -1) return !0;
              if (
                (d.push(u, s),
                m != E ||
                  ((y = n(u)),
                  (A = n(s)),
                  y.length != A.length ||
                    y.some(function (b) {
                      return !i(u[b], s[b], d);
                    })))
              )
                return !1;
              switch (m.slice(8, -1)) {
                case "Symbol":
                  return u.valueOf() == s.valueOf();
                case "Date":
                case "Number":
                  return +u == +s || (+u != +u && +s != +s);
                case "RegExp":
                case "Function":
                case "String":
                case "Boolean":
                  return "" + u == "" + s;
                case "Set":
                case "Map":
                  (y = u.entries()), (A = s.entries());
                  do if (!i((g = y.next()).value, A.next().value, d)) return !1;
                  while (!g.done);
                  return !0;
                case "ArrayBuffer":
                  (u = new Uint8Array(u)), (s = new Uint8Array(s));
                case "DataView":
                  (u = new Uint8Array(u.buffer)),
                    (s = new Uint8Array(s.buffer));
                case "Float32Array":
                case "Float64Array":
                case "Int8Array":
                case "Int16Array":
                case "Int32Array":
                case "Uint8Array":
                case "Uint16Array":
                case "Uint32Array":
                case "Uint8ClampedArray":
                case "Arguments":
                case "Array":
                  if (u.length != s.length) return !1;
                  for (g = 0; g < u.length; g++)
                    if (
                      (g in u || g in s) &&
                      (g in u != g in s || !i(u[g], s[g], d))
                    )
                      return !1;
                  return !0;
                case "Object":
                  return i(r(u), r(s), d);
                default:
                  return !1;
              }
            })(a, o, []);
          };
        })());
    });
  var Lp = Qx(Zx()),
    Up = (e) => e.map((t) => typeof t < "u").filter(Boolean).length,
    eF = (e, t) => {
      let { exists: r, eq: n, neq: a, truthy: o } = e;
      if (Up([r, n, a, o]) > 1)
        throw new Error(
          `Invalid conditional test ${JSON.stringify({
            exists: r,
            eq: n,
            neq: a,
          })}`
        );
      if (typeof n < "u") return (0, Lp.isEqual)(t, n);
      if (typeof a < "u") return !(0, Lp.isEqual)(t, a);
      if (typeof r < "u") {
        let i = typeof t < "u";
        return r ? i : !i;
      }
      return typeof o > "u" || o ? !!t : !t;
    },
    Po = (e, t, r) => {
      if (!e.if) return !0;
      let { arg: n, global: a } = e.if;
      if (Up([n, a]) !== 1)
        throw new Error(
          `Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`
        );
      let o = n ? t[n] : r[a];
      return eF(e.if, o);
    };
  l();
  c();
  p();
  var aG = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: be,
      logger: ve,
      once: jr,
      pretty: tF,
    } = __STORYBOOKCLIENTLOGGER__;
  le();
  G();
  l();
  c();
  p();
  G();
  function wt() {
    return (
      (wt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      wt.apply(this, arguments)
    );
  }
  var rF = ["children", "options"],
    zp = [
      "allowFullScreen",
      "allowTransparency",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "cellPadding",
      "cellSpacing",
      "charSet",
      "className",
      "classId",
      "colSpan",
      "contentEditable",
      "contextMenu",
      "crossOrigin",
      "encType",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "hrefLang",
      "inputMode",
      "keyParams",
      "keyType",
      "marginHeight",
      "marginWidth",
      "maxLength",
      "mediaGroup",
      "minLength",
      "noValidate",
      "radioGroup",
      "readOnly",
      "rowSpan",
      "spellCheck",
      "srcDoc",
      "srcLang",
      "srcSet",
      "tabIndex",
      "useMap",
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: "htmlFor" }),
    Hp = {
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      nbsp: "\xA0",
      quot: "\u201C",
    },
    nF = ["style", "script"],
    aF =
      /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    oF = /mailto:/i,
    iF = /\n{2,}$/,
    Xp = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
    uF = /^ *> ?/gm,
    sF = /^ {2,}\n/,
    lF = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    Jp = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    Qp = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    cF = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    pF = /^(?:\n *)*\n/,
    dF = /\r\n?/g,
    fF = /^\[\^([^\]]+)](:.*)\n/,
    hF = /^\[\^([^\]]+)]/,
    mF = /\f/g,
    gF = /^\s*?\[(x|\s)\]/,
    Zp = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    ed = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    Mo =
      /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
    yF = /&([a-zA-Z]+);/g,
    td = /^<!--[\s\S]*?(?:-->)/,
    bF = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    qo =
      /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    AF = /^\{.*\}$/,
    EF = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    DF = /^<([^ >]+@[^ >]+)>/,
    vF = /^<([^ >]+:\/[^ >]+)>/,
    CF = /-([a-z])?/gi,
    rd = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
    xF = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    FF = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    SF = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    wF = /(\[|\])/g,
    BF = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    TF = /\t/g,
    _F = /^ *\| */,
    OF = /(^ *\||\| *$)/g,
    RF = / *$/,
    PF = /^ *:-+: *$/,
    IF = /^ *:-+ *$/,
    kF = /^ *-+: *$/,
    NF =
      /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
    jF =
      /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
    MF = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
    qF = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
    LF = /^\\([^0-9A-Za-z\s])/,
    $F =
      /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    UF = /^\n+/,
    zF = /^([ \t]*)/,
    HF = /\\([^\\])/g,
    Gp = / *\n+$/,
    GF = /(?:^|\n)( *)$/,
    Lo = "(?:\\d+\\.)",
    $o = "(?:[*+-])";
  function nd(e) {
    return "( *)(" + (e === 1 ? Lo : $o) + ") +";
  }
  var ad = nd(1),
    od = nd(2);
  function id(e) {
    return new RegExp("^" + (e === 1 ? ad : od));
  }
  var WF = id(1),
    VF = id(2);
  function ud(e) {
    return new RegExp(
      "^" +
        (e === 1 ? ad : od) +
        "[^\\n]*(?:\\n(?!\\1" +
        (e === 1 ? Lo : $o) +
        " )[^\\n]*)*(\\n|$)",
      "gm"
    );
  }
  var sd = ud(1),
    ld = ud(2);
  function cd(e) {
    let t = e === 1 ? Lo : $o;
    return new RegExp(
      "^( *)(" +
        t +
        ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
        t +
        " (?!" +
        t +
        " ))\\n*|\\s*\\n*$)"
    );
  }
  var pd = cd(1),
    dd = cd(2);
  function Wp(e, t) {
    let r = t === 1,
      n = r ? pd : dd,
      a = r ? sd : ld,
      o = r ? WF : VF;
    return {
      t(i, u, s) {
        let d = GF.exec(s);
        return d && (u.o || (!u._ && !u.u)) ? n.exec((i = d[1] + i)) : null;
      },
      i: ae.HIGH,
      l(i, u, s) {
        let d = r ? +i[2] : void 0,
          y = i[0]
            .replace(
              iF,
              `
`
            )
            .match(a),
          A = !1;
        return {
          p: y.map(function (g, m) {
            let E = o.exec(g)[0].length,
              b = new RegExp("^ {1," + E + "}", "gm"),
              x = g.replace(b, "").replace(o, ""),
              S = m === y.length - 1,
              P =
                x.indexOf(`

`) !== -1 ||
                (S && A);
            A = P;
            let j = s._,
              $ = s.o,
              w;
            (s.o = !0),
              P
                ? ((s._ = !1),
                  (w = x.replace(
                    Gp,
                    `

`
                  )))
                : ((s._ = !0), (w = x.replace(Gp, "")));
            let M = u(w, s);
            return (s._ = j), (s.o = $), M;
          }),
          m: r,
          g: d,
        };
      },
      h: (i, u, s) =>
        e(
          i.m ? "ol" : "ul",
          { key: s.k, start: i.g },
          i.p.map(function (d, y) {
            return e("li", { key: y }, u(d, s));
          })
        ),
    };
  }
  var KF = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    YF = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    fd = [Xp, Jp, Qp, Zp, ed, td, rd, sd, pd, ld, dd],
    XF = [...fd, /^[^\n]+(?:  \n|\n{2,})/, Mo, qo];
  function JF(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
      .replace(/[çÇ]/g, "c")
      .replace(/[ðÐ]/g, "d")
      .replace(/[ÈÉÊËéèêë]/g, "e")
      .replace(/[ÏïÎîÍíÌì]/g, "i")
      .replace(/[Ññ]/g, "n")
      .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
      .replace(/[ÜüÛûÚúÙù]/g, "u")
      .replace(/[ŸÿÝý]/g, "y")
      .replace(/[^a-z0-9- ]/gi, "")
      .replace(/ /gi, "-")
      .toLowerCase();
  }
  function QF(e) {
    return kF.test(e)
      ? "right"
      : PF.test(e)
      ? "center"
      : IF.test(e)
      ? "left"
      : null;
  }
  function Vp(e, t, r) {
    let n = r.v;
    r.v = !0;
    let a = t(e.trim(), r);
    r.v = n;
    let o = [[]];
    return (
      a.forEach(function (i, u) {
        i.type === "tableSeparator"
          ? u !== 0 && u !== a.length - 1 && o.push([])
          : (i.type !== "text" ||
              (a[u + 1] != null && a[u + 1].type !== "tableSeparator") ||
              (i.$ = i.$.replace(RF, "")),
            o[o.length - 1].push(i));
      }),
      o
    );
  }
  function ZF(e, t, r) {
    r._ = !0;
    let n = Vp(e[1], t, r),
      a = e[2].replace(OF, "").split("|").map(QF),
      o = (function (i, u, s) {
        return i
          .trim()
          .split(
            `
`
          )
          .map(function (d) {
            return Vp(d, u, s);
          });
      })(e[3], t, r);
    return (r._ = !1), { S: a, A: o, L: n, type: "table" };
  }
  function Kp(e, t) {
    return e.S[t] == null ? {} : { textAlign: e.S[t] };
  }
  function ht(e) {
    return function (t, r) {
      return r._ ? e.exec(t) : null;
    };
  }
  function mt(e) {
    return function (t, r) {
      return r._ || r.u ? e.exec(t) : null;
    };
  }
  function ut(e) {
    return function (t, r) {
      return r._ || r.u ? null : e.exec(t);
    };
  }
  function Mr(e) {
    return function (t) {
      return e.exec(t);
    };
  }
  function eS(e, t, r) {
    if (
      t._ ||
      t.u ||
      (r &&
        !r.endsWith(`
`))
    )
      return null;
    let n = "";
    e.split(
      `
`
    ).every(
      (o) =>
        !fd.some((i) => i.test(o)) &&
        ((n +=
          o +
          `
`),
        o.trim())
    );
    let a = n.trimEnd();
    return a == "" ? null : [n, a];
  }
  function Yt(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, "")
          .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
      )
        return null;
    } catch {
      return null;
    }
    return e;
  }
  function Yp(e) {
    return e.replace(HF, "$1");
  }
  function Rn(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1;
    (r._ = !0), (r.u = !0);
    let o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function tS(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1;
    (r._ = !1), (r.u = !0);
    let o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function rS(e, t, r) {
    return (
      (r._ = !1),
      e(
        t +
          `

`,
        r
      )
    );
  }
  var Io = (e, t, r) => ({ $: Rn(t, e[1], r) });
  function ko() {
    return {};
  }
  function No() {
    return null;
  }
  function nS(...e) {
    return e.filter(Boolean).join(" ");
  }
  function jo(e, t, r) {
    let n = e,
      a = t.split(".");
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
    return n || r;
  }
  var ae;
  function aS(e, t = {}) {
    (t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || JF),
      (t.namedCodesToUnicode = t.namedCodesToUnicode
        ? wt({}, Hp, t.namedCodesToUnicode)
        : Hp);
    let r = t.createElement || Ea;
    function n(m, E, ...b) {
      let x = jo(t.overrides, `${m}.props`, {});
      return r(
        (function (S, P) {
          let j = jo(P, S);
          return j
            ? typeof j == "function" || (typeof j == "object" && "render" in j)
              ? j
              : jo(P, `${S}.component`, S)
            : S;
        })(m, t.overrides),
        wt({}, E, x, { className: nS(E?.className, x.className) || void 0 }),
        ...b
      );
    }
    function a(m) {
      let E = !1;
      t.forceInline ? (E = !0) : t.forceBlock || (E = BF.test(m) === !1);
      let b = y(
        d(
          E
            ? m
            : `${m.trimEnd().replace(UF, "")}

`,
          { _: E }
        )
      );
      for (; typeof b[b.length - 1] == "string" && !b[b.length - 1].trim(); )
        b.pop();
      if (t.wrapper === null) return b;
      let x = t.wrapper || (E ? "span" : "div"),
        S;
      if (b.length > 1 || t.forceWrapper) S = b;
      else {
        if (b.length === 1)
          return (
            (S = b[0]),
            typeof S == "string" ? n("span", { key: "outer" }, S) : S
          );
        S = null;
      }
      return Ea(x, { key: "outer" }, S);
    }
    function o(m) {
      let E = m.match(aF);
      return E
        ? E.reduce(function (b, x, S) {
            let P = x.indexOf("=");
            if (P !== -1) {
              let j = (function (I) {
                  return (
                    I.indexOf("-") !== -1 &&
                      I.match(bF) === null &&
                      (I = I.replace(CF, function (U, K) {
                        return K.toUpperCase();
                      })),
                    I
                  );
                })(x.slice(0, P)).trim(),
                $ = (function (I) {
                  let U = I[0];
                  return (U === '"' || U === "'") &&
                    I.length >= 2 &&
                    I[I.length - 1] === U
                    ? I.slice(1, -1)
                    : I;
                })(x.slice(P + 1).trim()),
                w = zp[j] || j,
                M = (b[w] = (function (I, U) {
                  return I === "style"
                    ? U.split(/;\s?/).reduce(function (K, z) {
                        let he = z.slice(0, z.indexOf(":"));
                        return (
                          (K[
                            he.replace(/(-[a-z])/g, (re) => re[1].toUpperCase())
                          ] = z.slice(he.length + 1).trim()),
                          K
                        );
                      }, {})
                    : I === "href"
                    ? Yt(U)
                    : (U.match(AF) && (U = U.slice(1, U.length - 1)),
                      U === "true" || (U !== "false" && U));
                })(j, $));
              typeof M == "string" &&
                (Mo.test(M) || qo.test(M)) &&
                (b[w] = De(a(M.trim()), { key: S }));
            } else x !== "style" && (b[zp[x] || x] = !0);
            return b;
          }, {})
        : null;
    }
    let i = [],
      u = {},
      s = {
        blockQuote: {
          t: ut(Xp),
          i: ae.HIGH,
          l: (m, E, b) => ({ $: E(m[0].replace(uF, ""), b) }),
          h: (m, E, b) => n("blockquote", { key: b.k }, E(m.$, b)),
        },
        breakLine: {
          t: Mr(sF),
          i: ae.HIGH,
          l: ko,
          h: (m, E, b) => n("br", { key: b.k }),
        },
        breakThematic: {
          t: ut(lF),
          i: ae.HIGH,
          l: ko,
          h: (m, E, b) => n("hr", { key: b.k }),
        },
        codeBlock: {
          t: ut(Qp),
          i: ae.MAX,
          l: (m) => ({
            $: m[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
            M: void 0,
          }),
          h: (m, E, b) =>
            n(
              "pre",
              { key: b.k },
              n(
                "code",
                wt({}, m.I, { className: m.M ? `lang-${m.M}` : "" }),
                m.$
              )
            ),
        },
        codeFenced: {
          t: ut(Jp),
          i: ae.MAX,
          l: (m) => ({
            I: o(m[3] || ""),
            $: m[4],
            M: m[2] || void 0,
            type: "codeBlock",
          }),
        },
        codeInline: {
          t: mt(cF),
          i: ae.LOW,
          l: (m) => ({ $: m[2] }),
          h: (m, E, b) => n("code", { key: b.k }, m.$),
        },
        footnote: {
          t: ut(fF),
          i: ae.MAX,
          l: (m) => (i.push({ O: m[2], B: m[1] }), {}),
          h: No,
        },
        footnoteReference: {
          t: ht(hF),
          i: ae.HIGH,
          l: (m) => ({ $: m[1], R: `#${t.slugify(m[1])}` }),
          h: (m, E, b) =>
            n("a", { key: b.k, href: Yt(m.R) }, n("sup", { key: b.k }, m.$)),
        },
        gfmTask: {
          t: ht(gF),
          i: ae.HIGH,
          l: (m) => ({ T: m[1].toLowerCase() === "x" }),
          h: (m, E, b) =>
            n("input", {
              checked: m.T,
              key: b.k,
              readOnly: !0,
              type: "checkbox",
            }),
        },
        heading: {
          t: ut(Zp),
          i: ae.HIGH,
          l: (m, E, b) => ({
            $: Rn(E, m[2], b),
            j: t.slugify(m[2]),
            C: m[1].length,
          }),
          h: (m, E, b) => n(`h${m.C}`, { id: m.j, key: b.k }, E(m.$, b)),
        },
        headingSetext: {
          t: ut(ed),
          i: ae.MAX,
          l: (m, E, b) => ({
            $: Rn(E, m[1], b),
            C: m[2] === "=" ? 1 : 2,
            type: "heading",
          }),
        },
        htmlComment: { t: Mr(td), i: ae.HIGH, l: () => ({}), h: No },
        image: {
          t: mt(YF),
          i: ae.HIGH,
          l: (m) => ({ D: m[1], R: Yp(m[2]), N: m[3] }),
          h: (m, E, b) =>
            n("img", {
              key: b.k,
              alt: m.D || void 0,
              title: m.N || void 0,
              src: Yt(m.R),
            }),
        },
        link: {
          t: ht(KF),
          i: ae.LOW,
          l: (m, E, b) => ({ $: tS(E, m[1], b), R: Yp(m[2]), N: m[3] }),
          h: (m, E, b) =>
            n("a", { key: b.k, href: Yt(m.R), title: m.N }, E(m.$, b)),
        },
        linkAngleBraceStyleDetector: {
          t: ht(vF),
          i: ae.MAX,
          l: (m) => ({ $: [{ $: m[1], type: "text" }], R: m[1], type: "link" }),
        },
        linkBareUrlDetector: {
          t: (m, E) => (E.Z ? null : ht(EF)(m, E)),
          i: ae.MAX,
          l: (m) => ({
            $: [{ $: m[1], type: "text" }],
            R: m[1],
            N: void 0,
            type: "link",
          }),
        },
        linkMailtoDetector: {
          t: ht(DF),
          i: ae.MAX,
          l(m) {
            let E = m[1],
              b = m[1];
            return (
              oF.test(b) || (b = "mailto:" + b),
              {
                $: [{ $: E.replace("mailto:", ""), type: "text" }],
                R: b,
                type: "link",
              }
            );
          },
        },
        orderedList: Wp(n, 1),
        unorderedList: Wp(n, 2),
        newlineCoalescer: {
          t: ut(pF),
          i: ae.LOW,
          l: ko,
          h: () => `
`,
        },
        paragraph: {
          t: eS,
          i: ae.LOW,
          l: Io,
          h: (m, E, b) => n("p", { key: b.k }, E(m.$, b)),
        },
        ref: {
          t: ht(xF),
          i: ae.MAX,
          l: (m) => ((u[m[1]] = { R: m[2], N: m[4] }), {}),
          h: No,
        },
        refImage: {
          t: mt(FF),
          i: ae.MAX,
          l: (m) => ({ D: m[1] || void 0, F: m[2] }),
          h: (m, E, b) =>
            n("img", {
              key: b.k,
              alt: m.D,
              src: Yt(u[m.F].R),
              title: u[m.F].N,
            }),
        },
        refLink: {
          t: ht(SF),
          i: ae.MAX,
          l: (m, E, b) => ({
            $: E(m[1], b),
            P: E(m[0].replace(wF, "\\$1"), b),
            F: m[2],
          }),
          h: (m, E, b) =>
            u[m.F]
              ? n(
                  "a",
                  { key: b.k, href: Yt(u[m.F].R), title: u[m.F].N },
                  E(m.$, b)
                )
              : n("span", { key: b.k }, E(m.P, b)),
        },
        table: {
          t: ut(rd),
          i: ae.HIGH,
          l: ZF,
          h: (m, E, b) =>
            n(
              "table",
              { key: b.k },
              n(
                "thead",
                null,
                n(
                  "tr",
                  null,
                  m.L.map(function (x, S) {
                    return n("th", { key: S, style: Kp(m, S) }, E(x, b));
                  })
                )
              ),
              n(
                "tbody",
                null,
                m.A.map(function (x, S) {
                  return n(
                    "tr",
                    { key: S },
                    x.map(function (P, j) {
                      return n("td", { key: j, style: Kp(m, j) }, E(P, b));
                    })
                  );
                })
              )
            ),
        },
        tableSeparator: {
          t: function (m, E) {
            return E.v ? _F.exec(m) : null;
          },
          i: ae.HIGH,
          l: function () {
            return { type: "tableSeparator" };
          },
          h: () => " | ",
        },
        text: {
          t: Mr($F),
          i: ae.MIN,
          l: (m) => ({
            $: m[0].replace(yF, (E, b) =>
              t.namedCodesToUnicode[b] ? t.namedCodesToUnicode[b] : E
            ),
          }),
          h: (m) => m.$,
        },
        textBolded: {
          t: mt(NF),
          i: ae.MED,
          l: (m, E, b) => ({ $: E(m[2], b) }),
          h: (m, E, b) => n("strong", { key: b.k }, E(m.$, b)),
        },
        textEmphasized: {
          t: mt(jF),
          i: ae.LOW,
          l: (m, E, b) => ({ $: E(m[2], b) }),
          h: (m, E, b) => n("em", { key: b.k }, E(m.$, b)),
        },
        textEscaped: {
          t: mt(LF),
          i: ae.HIGH,
          l: (m) => ({ $: m[1], type: "text" }),
        },
        textMarked: {
          t: mt(MF),
          i: ae.LOW,
          l: Io,
          h: (m, E, b) => n("mark", { key: b.k }, E(m.$, b)),
        },
        textStrikethroughed: {
          t: mt(qF),
          i: ae.LOW,
          l: Io,
          h: (m, E, b) => n("del", { key: b.k }, E(m.$, b)),
        },
      };
    t.disableParsingRawHTML !== !0 &&
      ((s.htmlBlock = {
        t: Mr(Mo),
        i: ae.HIGH,
        l(m, E, b) {
          let [, x] = m[3].match(zF),
            S = new RegExp(`^${x}`, "gm"),
            P = m[3].replace(S, ""),
            j = (($ = P), XF.some((U) => U.test($)) ? rS : Rn);
          var $;
          let w = m[1].toLowerCase(),
            M = nF.indexOf(w) !== -1;
          b.Z = b.Z || w === "a";
          let I = M ? m[3] : j(E, P, b);
          return (b.Z = !1), { I: o(m[2]), $: I, G: M, H: M ? w : m[1] };
        },
        h: (m, E, b) => n(m.H, wt({ key: b.k }, m.I), m.G ? m.$ : E(m.$, b)),
      }),
      (s.htmlSelfClosing = {
        t: Mr(qo),
        i: ae.HIGH,
        l: (m) => ({ I: o(m[2] || ""), H: m[1] }),
        h: (m, E, b) => n(m.H, wt({}, m.I, { key: b.k })),
      }));
    let d = (function (m) {
        let E = Object.keys(m);
        function b(x, S) {
          let P = [],
            j = "";
          for (; x; ) {
            let $ = 0;
            for (; $ < E.length; ) {
              let w = E[$],
                M = m[w],
                I = M.t(x, S, j);
              if (I) {
                let U = I[0];
                x = x.substring(U.length);
                let K = M.l(I, b, S);
                K.type == null && (K.type = w), P.push(K), (j = U);
                break;
              }
              $++;
            }
          }
          return P;
        }
        return (
          E.sort(function (x, S) {
            let P = m[x].i,
              j = m[S].i;
            return P !== j ? P - j : x < S ? -1 : 1;
          }),
          function (x, S) {
            return b(
              (function (P) {
                return P.replace(
                  dF,
                  `
`
                )
                  .replace(mF, "")
                  .replace(TF, "    ");
              })(x),
              S
            );
          }
        );
      })(s),
      y =
        ((A = (function (m) {
          return function (E, b, x) {
            return m[E.type].h(E, b, x);
          };
        })(s)),
        function m(E, b = {}) {
          if (Array.isArray(E)) {
            let x = b.k,
              S = [],
              P = !1;
            for (let j = 0; j < E.length; j++) {
              b.k = j;
              let $ = m(E[j], b),
                w = typeof $ == "string";
              w && P ? (S[S.length - 1] += $) : $ !== null && S.push($),
                (P = w);
            }
            return (b.k = x), S;
          }
          return A(E, m, b);
        });
    var A;
    let g = a(e);
    return i.length
      ? n(
          "div",
          null,
          g,
          n(
            "footer",
            { key: "footer" },
            i.map(function (m) {
              return n(
                "div",
                { id: t.slugify(m.B), key: m.B },
                m.B,
                y(d(m.O, { _: !0 }))
              );
            })
          )
        )
      : g;
  }
  (function (e) {
    (e[(e.MAX = 0)] = "MAX"),
      (e[(e.HIGH = 1)] = "HIGH"),
      (e[(e.MED = 2)] = "MED"),
      (e[(e.LOW = 3)] = "LOW"),
      (e[(e.MIN = 4)] = "MIN");
  })(ae || (ae = {}));
  var Pn = (e) => {
    let { children: t, options: r } = e,
      n = (function (a, o) {
        if (a == null) return {};
        var i,
          u,
          s = {},
          d = Object.keys(a);
        for (u = 0; u < d.length; u++)
          o.indexOf((i = d[u])) >= 0 || (s[i] = a[i]);
        return s;
      })(e, rF);
    return De(aS(t, r), n);
  };
  ce();
  le();
  G();
  ce();
  le();
  G();
  var Yg = se(qr(), 1),
    Xg = se(Id(), 1);
  ce();
  le();
  G();
  G();
  G();
  ce();
  le();
  G();
  ce();
  le();
  G();
  ce();
  le();
  G();
  G();
  ce();
  G();
  ce();
  G();
  ce();
  le();
  var ry = se(Lf(), 1);
  G();
  ce();
  le();
  G();
  G();
  G();
  ce();
  G();
  ce();
  le();
  G();
  ce();
  le();
  G();
  ce();
  le();
  G();
  le();
  G();
  ce();
  le();
  G();
  ce();
  le();
  G();
  ce();
  le();
  G();
  ce();
  le();
  G();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var LV = __STORYBOOKCHANNELS__,
    { Channel: Nn } = __STORYBOOKCHANNELS__;
  l();
  c();
  p();
  var GV = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: WV,
      CONFIG_ERROR: X5,
      CURRENT_STORY_WAS_SET: J5,
      DOCS_PREPARED: Q5,
      DOCS_RENDERED: $f,
      FORCE_REMOUNT: Z5,
      FORCE_RE_RENDER: Ho,
      GLOBALS_UPDATED: Ur,
      IGNORED_EXCEPTION: VV,
      NAVIGATE_URL: Uf,
      PLAY_FUNCTION_THREW_EXCEPTION: e3,
      PRELOAD_ENTRIES: t3,
      PREVIEW_BUILDER_PROGRESS: KV,
      PREVIEW_KEYDOWN: r3,
      REGISTER_SUBSCRIPTION: YV,
      RESET_STORY_ARGS: Jt,
      SELECT_STORY: XV,
      SET_CONFIG: JV,
      SET_CURRENT_STORY: n3,
      SET_GLOBALS: a3,
      SET_INDEX: o3,
      SET_STORIES: QV,
      SHARED_STATE_CHANGED: i3,
      SHARED_STATE_SET: u3,
      STORIES_COLLAPSE_ALL: ZV,
      STORIES_EXPAND_ALL: eK,
      STORY_ARGS_UPDATED: gt,
      STORY_CHANGED: s3,
      STORY_ERRORED: l3,
      STORY_INDEX_INVALIDATED: c3,
      STORY_MISSING: p3,
      STORY_PREPARED: d3,
      STORY_RENDERED: zf,
      STORY_RENDER_PHASE_CHANGED: Hf,
      STORY_SPECIFIED: f3,
      STORY_THREW_EXCEPTION: h3,
      STORY_UNCHANGED: m3,
      UPDATE_GLOBALS: Gf,
      UPDATE_QUERY_PARAMS: g3,
      UPDATE_STORY_ARGS: Qt,
    } = __STORYBOOKCOREEVENTS__;
  var b3 = Object.create,
    Wf = Object.defineProperty,
    A3 = Object.getOwnPropertyDescriptor,
    Vf = Object.getOwnPropertyNames,
    E3 = Object.getPrototypeOf,
    D3 = Object.prototype.hasOwnProperty,
    Ye = (e, t) =>
      function () {
        return (
          t || (0, e[Vf(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    v3 = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of Vf(t))
          !D3.call(e, a) &&
            a !== r &&
            Wf(e, a, {
              get: () => t[a],
              enumerable: !(n = A3(t, a)) || n.enumerable,
            });
      return e;
    },
    Kf = (e, t, r) => (
      (r = e != null ? b3(E3(e)) : {}),
      v3(
        t || !e || !e.__esModule
          ? Wf(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    );
  function Yf() {
    let e = { setHandler: () => {}, send: () => {} };
    return new Nn({ transport: e });
  }
  var C3 = class {
      constructor() {
        (this.getChannel = () => {
          if (!this.channel) {
            let e = Yf();
            return this.setChannel(e), e;
          }
          return this.channel;
        }),
          (this.getServerChannel = () => {
            if (!this.serverChannel)
              throw new Error("Accessing non-existent serverChannel");
            return this.serverChannel;
          }),
          (this.ready = () => this.promise),
          (this.hasChannel = () => !!this.channel),
          (this.hasServerChannel = () => !!this.serverChannel),
          (this.setChannel = (e) => {
            (this.channel = e), this.resolve();
          }),
          (this.setServerChannel = (e) => {
            this.serverChannel = e;
          }),
          (this.promise = new Promise((e) => {
            this.resolve = () => e(this.getChannel());
          }));
      }
    },
    Go = "__STORYBOOK_ADDONS_PREVIEW";
  function x3() {
    return ee[Go] || (ee[Go] = new C3()), ee[Go];
  }
  var jn = x3();
  var PB = se(qr(), 1),
    IB = se(Bt(), 1),
    kB = se(O0(), 1),
    NB = se(qn(), 1);
  l();
  c();
  p();
  function Ie(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    var n = Array.from(typeof e == "string" ? [e] : e);
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var a = n.reduce(function (u, s) {
      var d = s.match(/\n([\t ]+|(?!\s).)/g);
      return d
        ? u.concat(
            d.map(function (y) {
              var A, g;
              return (g =
                (A = y.match(/[\t ]/g)) === null || A === void 0
                  ? void 0
                  : A.length) !== null && g !== void 0
                ? g
                : 0;
            })
          )
        : u;
    }, []);
    if (a.length) {
      var o = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, a) +
          "}",
        "g"
      );
      n = n.map(function (u) {
        return u.replace(
          o,
          `
`
        );
      });
    }
    n[0] = n[0].replace(/^\r?\n/, "");
    var i = n[0];
    return (
      t.forEach(function (u, s) {
        var d = i.match(/(?:^|\n)( *)$/),
          y = d ? d[1] : "",
          A = u;
        typeof u == "string" &&
          u.includes(`
`) &&
          (A = String(u)
            .split(
              `
`
            )
            .map(function (g, m) {
              return m === 0 ? g : "" + y + g;
            }).join(`
`)),
          (i += A + n[s + 1]);
      }),
      i
    );
  }
  var Ce = Ie;
  var G0 = se(qr(), 1);
  l();
  c();
  p();
  var jB = se(Ln(), 1);
  var MB = se(Bt(), 1);
  var W0 = se($0(), 1);
  var $n = se(Ln(), 1),
    Un = se(Bt(), 1);
  var V0 = se(Bt(), 1);
  var K0 = se(Ro(), 1);
  var WY = (0, G0.default)(1)((e) =>
    Object.values(e).reduce(
      (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
      {}
    )
  );
  var XY = Symbol("incompatible");
  var JY = Symbol("Deeply equal");
  var qB = Ie`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
    rX = (0, W0.default)(() => {}, qB);
  var Zt = (...e) => {
    let t = {},
      r = e.filter(Boolean),
      n = r.reduce(
        (a, o) => (
          Object.entries(o).forEach(([i, u]) => {
            let s = a[i];
            Array.isArray(u) || typeof s > "u"
              ? (a[i] = u)
              : (0, $n.default)(u) && (0, $n.default)(s)
              ? (t[i] = !0)
              : typeof u < "u" && (a[i] = u);
          }),
          a
        ),
        {}
      );
    return (
      Object.keys(t).forEach((a) => {
        let o = r
          .filter(Boolean)
          .map((i) => i[a])
          .filter((i) => typeof i < "u");
        o.every((i) => (0, $n.default)(i))
          ? (n[a] = Zt(...o))
          : (n[a] = o[o.length - 1]);
      }),
      n
    );
  };
  var Vo = (e, t, r) => {
      let n = typeof e;
      switch (n) {
        case "boolean":
        case "string":
        case "number":
        case "function":
        case "symbol":
          return { name: n };
        default:
          break;
      }
      return e
        ? r.has(e)
          ? (ve.warn(Ie`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
            { name: "other", value: "cyclic object" })
          : (r.add(e),
            Array.isArray(e)
              ? {
                  name: "array",
                  value:
                    e.length > 0
                      ? Vo(e[0], t, new Set(r))
                      : { name: "other", value: "unknown" },
                }
              : {
                  name: "object",
                  value: (0, Un.default)(e, (a) => Vo(a, t, new Set(r))),
                })
        : { name: "object", value: {} };
    },
    LB = (e) => {
      let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
        a = (0, Un.default)(n, (i, u) => ({
          name: u,
          type: Vo(i, `${t}.${u}`, new Set()),
        })),
        o = (0, Un.default)(r, (i, u) => ({ name: u }));
      return Zt(a, o, r);
    };
  LB.secondPass = !0;
  var U0 = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
    Tt = (e, t, r) =>
      !t && !r
        ? e
        : e &&
          (0, K0.default)(e, (n, a) => {
            let o = n.name || a;
            return (!t || U0(o, t)) && (!r || !U0(o, r));
          }),
    $B = (e, t, r) => {
      let { type: n, options: a } = e;
      if (n) {
        if (r.color && r.color.test(t)) {
          let o = n.name;
          if (o === "string") return { control: { type: "color" } };
          o !== "enum" &&
            ve.warn(
              `Addon controls: Control of type color only supports string, received "${o}" instead`
            );
        }
        if (r.date && r.date.test(t)) return { control: { type: "date" } };
        switch (n.name) {
          case "array":
            return { control: { type: "object" } };
          case "boolean":
            return { control: { type: "boolean" } };
          case "string":
            return { control: { type: "text" } };
          case "number":
            return { control: { type: "number" } };
          case "enum": {
            let { value: o } = n;
            return {
              control: { type: o?.length <= 5 ? "radio" : "select" },
              options: o,
            };
          }
          case "function":
          case "symbol":
            return null;
          default:
            return { control: { type: a ? "select" : "object" } };
        }
      }
    },
    Y0 = (e) => {
      let {
        argTypes: t,
        parameters: {
          __isArgsStory: r,
          controls: {
            include: n = null,
            exclude: a = null,
            matchers: o = {},
          } = {},
        },
      } = e;
      if (!r) return t;
      let i = Tt(t, n, a),
        u = (0, V0.default)(i, (s, d) => s?.type && $B(s, d, o));
      return Zt(u, i);
    };
  Y0.secondPass = !0;
  var v8 = se(qn(), 1);
  var C8 = se(sr(), 1);
  l();
  c();
  p();
  var _8 = se(qn(), 1);
  var O8 = se(sr(), 1),
    R8 = se(sr(), 1);
  var P8 = se(Ln(), 1);
  var k8 = se(sr(), 1);
  var om = Ye({
      "../../node_modules/entities/lib/maps/entities.json"(e, t) {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Abreve: "\u0102",
          abreve: "\u0103",
          ac: "\u223E",
          acd: "\u223F",
          acE: "\u223E\u0333",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          Acy: "\u0410",
          acy: "\u0430",
          AElig: "\xC6",
          aelig: "\xE6",
          af: "\u2061",
          Afr: "\u{1D504}",
          afr: "\u{1D51E}",
          Agrave: "\xC0",
          agrave: "\xE0",
          alefsym: "\u2135",
          aleph: "\u2135",
          Alpha: "\u0391",
          alpha: "\u03B1",
          Amacr: "\u0100",
          amacr: "\u0101",
          amalg: "\u2A3F",
          amp: "&",
          AMP: "&",
          andand: "\u2A55",
          And: "\u2A53",
          and: "\u2227",
          andd: "\u2A5C",
          andslope: "\u2A58",
          andv: "\u2A5A",
          ang: "\u2220",
          ange: "\u29A4",
          angle: "\u2220",
          angmsdaa: "\u29A8",
          angmsdab: "\u29A9",
          angmsdac: "\u29AA",
          angmsdad: "\u29AB",
          angmsdae: "\u29AC",
          angmsdaf: "\u29AD",
          angmsdag: "\u29AE",
          angmsdah: "\u29AF",
          angmsd: "\u2221",
          angrt: "\u221F",
          angrtvb: "\u22BE",
          angrtvbd: "\u299D",
          angsph: "\u2222",
          angst: "\xC5",
          angzarr: "\u237C",
          Aogon: "\u0104",
          aogon: "\u0105",
          Aopf: "\u{1D538}",
          aopf: "\u{1D552}",
          apacir: "\u2A6F",
          ap: "\u2248",
          apE: "\u2A70",
          ape: "\u224A",
          apid: "\u224B",
          apos: "'",
          ApplyFunction: "\u2061",
          approx: "\u2248",
          approxeq: "\u224A",
          Aring: "\xC5",
          aring: "\xE5",
          Ascr: "\u{1D49C}",
          ascr: "\u{1D4B6}",
          Assign: "\u2254",
          ast: "*",
          asymp: "\u2248",
          asympeq: "\u224D",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          awconint: "\u2233",
          awint: "\u2A11",
          backcong: "\u224C",
          backepsilon: "\u03F6",
          backprime: "\u2035",
          backsim: "\u223D",
          backsimeq: "\u22CD",
          Backslash: "\u2216",
          Barv: "\u2AE7",
          barvee: "\u22BD",
          barwed: "\u2305",
          Barwed: "\u2306",
          barwedge: "\u2305",
          bbrk: "\u23B5",
          bbrktbrk: "\u23B6",
          bcong: "\u224C",
          Bcy: "\u0411",
          bcy: "\u0431",
          bdquo: "\u201E",
          becaus: "\u2235",
          because: "\u2235",
          Because: "\u2235",
          bemptyv: "\u29B0",
          bepsi: "\u03F6",
          bernou: "\u212C",
          Bernoullis: "\u212C",
          Beta: "\u0392",
          beta: "\u03B2",
          beth: "\u2136",
          between: "\u226C",
          Bfr: "\u{1D505}",
          bfr: "\u{1D51F}",
          bigcap: "\u22C2",
          bigcirc: "\u25EF",
          bigcup: "\u22C3",
          bigodot: "\u2A00",
          bigoplus: "\u2A01",
          bigotimes: "\u2A02",
          bigsqcup: "\u2A06",
          bigstar: "\u2605",
          bigtriangledown: "\u25BD",
          bigtriangleup: "\u25B3",
          biguplus: "\u2A04",
          bigvee: "\u22C1",
          bigwedge: "\u22C0",
          bkarow: "\u290D",
          blacklozenge: "\u29EB",
          blacksquare: "\u25AA",
          blacktriangle: "\u25B4",
          blacktriangledown: "\u25BE",
          blacktriangleleft: "\u25C2",
          blacktriangleright: "\u25B8",
          blank: "\u2423",
          blk12: "\u2592",
          blk14: "\u2591",
          blk34: "\u2593",
          block: "\u2588",
          bne: "=\u20E5",
          bnequiv: "\u2261\u20E5",
          bNot: "\u2AED",
          bnot: "\u2310",
          Bopf: "\u{1D539}",
          bopf: "\u{1D553}",
          bot: "\u22A5",
          bottom: "\u22A5",
          bowtie: "\u22C8",
          boxbox: "\u29C9",
          boxdl: "\u2510",
          boxdL: "\u2555",
          boxDl: "\u2556",
          boxDL: "\u2557",
          boxdr: "\u250C",
          boxdR: "\u2552",
          boxDr: "\u2553",
          boxDR: "\u2554",
          boxh: "\u2500",
          boxH: "\u2550",
          boxhd: "\u252C",
          boxHd: "\u2564",
          boxhD: "\u2565",
          boxHD: "\u2566",
          boxhu: "\u2534",
          boxHu: "\u2567",
          boxhU: "\u2568",
          boxHU: "\u2569",
          boxminus: "\u229F",
          boxplus: "\u229E",
          boxtimes: "\u22A0",
          boxul: "\u2518",
          boxuL: "\u255B",
          boxUl: "\u255C",
          boxUL: "\u255D",
          boxur: "\u2514",
          boxuR: "\u2558",
          boxUr: "\u2559",
          boxUR: "\u255A",
          boxv: "\u2502",
          boxV: "\u2551",
          boxvh: "\u253C",
          boxvH: "\u256A",
          boxVh: "\u256B",
          boxVH: "\u256C",
          boxvl: "\u2524",
          boxvL: "\u2561",
          boxVl: "\u2562",
          boxVL: "\u2563",
          boxvr: "\u251C",
          boxvR: "\u255E",
          boxVr: "\u255F",
          boxVR: "\u2560",
          bprime: "\u2035",
          breve: "\u02D8",
          Breve: "\u02D8",
          brvbar: "\xA6",
          bscr: "\u{1D4B7}",
          Bscr: "\u212C",
          bsemi: "\u204F",
          bsim: "\u223D",
          bsime: "\u22CD",
          bsolb: "\u29C5",
          bsol: "\\",
          bsolhsub: "\u27C8",
          bull: "\u2022",
          bullet: "\u2022",
          bump: "\u224E",
          bumpE: "\u2AAE",
          bumpe: "\u224F",
          Bumpeq: "\u224E",
          bumpeq: "\u224F",
          Cacute: "\u0106",
          cacute: "\u0107",
          capand: "\u2A44",
          capbrcup: "\u2A49",
          capcap: "\u2A4B",
          cap: "\u2229",
          Cap: "\u22D2",
          capcup: "\u2A47",
          capdot: "\u2A40",
          CapitalDifferentialD: "\u2145",
          caps: "\u2229\uFE00",
          caret: "\u2041",
          caron: "\u02C7",
          Cayleys: "\u212D",
          ccaps: "\u2A4D",
          Ccaron: "\u010C",
          ccaron: "\u010D",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          Ccirc: "\u0108",
          ccirc: "\u0109",
          Cconint: "\u2230",
          ccups: "\u2A4C",
          ccupssm: "\u2A50",
          Cdot: "\u010A",
          cdot: "\u010B",
          cedil: "\xB8",
          Cedilla: "\xB8",
          cemptyv: "\u29B2",
          cent: "\xA2",
          centerdot: "\xB7",
          CenterDot: "\xB7",
          cfr: "\u{1D520}",
          Cfr: "\u212D",
          CHcy: "\u0427",
          chcy: "\u0447",
          check: "\u2713",
          checkmark: "\u2713",
          Chi: "\u03A7",
          chi: "\u03C7",
          circ: "\u02C6",
          circeq: "\u2257",
          circlearrowleft: "\u21BA",
          circlearrowright: "\u21BB",
          circledast: "\u229B",
          circledcirc: "\u229A",
          circleddash: "\u229D",
          CircleDot: "\u2299",
          circledR: "\xAE",
          circledS: "\u24C8",
          CircleMinus: "\u2296",
          CirclePlus: "\u2295",
          CircleTimes: "\u2297",
          cir: "\u25CB",
          cirE: "\u29C3",
          cire: "\u2257",
          cirfnint: "\u2A10",
          cirmid: "\u2AEF",
          cirscir: "\u29C2",
          ClockwiseContourIntegral: "\u2232",
          CloseCurlyDoubleQuote: "\u201D",
          CloseCurlyQuote: "\u2019",
          clubs: "\u2663",
          clubsuit: "\u2663",
          colon: ":",
          Colon: "\u2237",
          Colone: "\u2A74",
          colone: "\u2254",
          coloneq: "\u2254",
          comma: ",",
          commat: "@",
          comp: "\u2201",
          compfn: "\u2218",
          complement: "\u2201",
          complexes: "\u2102",
          cong: "\u2245",
          congdot: "\u2A6D",
          Congruent: "\u2261",
          conint: "\u222E",
          Conint: "\u222F",
          ContourIntegral: "\u222E",
          copf: "\u{1D554}",
          Copf: "\u2102",
          coprod: "\u2210",
          Coproduct: "\u2210",
          copy: "\xA9",
          COPY: "\xA9",
          copysr: "\u2117",
          CounterClockwiseContourIntegral: "\u2233",
          crarr: "\u21B5",
          cross: "\u2717",
          Cross: "\u2A2F",
          Cscr: "\u{1D49E}",
          cscr: "\u{1D4B8}",
          csub: "\u2ACF",
          csube: "\u2AD1",
          csup: "\u2AD0",
          csupe: "\u2AD2",
          ctdot: "\u22EF",
          cudarrl: "\u2938",
          cudarrr: "\u2935",
          cuepr: "\u22DE",
          cuesc: "\u22DF",
          cularr: "\u21B6",
          cularrp: "\u293D",
          cupbrcap: "\u2A48",
          cupcap: "\u2A46",
          CupCap: "\u224D",
          cup: "\u222A",
          Cup: "\u22D3",
          cupcup: "\u2A4A",
          cupdot: "\u228D",
          cupor: "\u2A45",
          cups: "\u222A\uFE00",
          curarr: "\u21B7",
          curarrm: "\u293C",
          curlyeqprec: "\u22DE",
          curlyeqsucc: "\u22DF",
          curlyvee: "\u22CE",
          curlywedge: "\u22CF",
          curren: "\xA4",
          curvearrowleft: "\u21B6",
          curvearrowright: "\u21B7",
          cuvee: "\u22CE",
          cuwed: "\u22CF",
          cwconint: "\u2232",
          cwint: "\u2231",
          cylcty: "\u232D",
          dagger: "\u2020",
          Dagger: "\u2021",
          daleth: "\u2138",
          darr: "\u2193",
          Darr: "\u21A1",
          dArr: "\u21D3",
          dash: "\u2010",
          Dashv: "\u2AE4",
          dashv: "\u22A3",
          dbkarow: "\u290F",
          dblac: "\u02DD",
          Dcaron: "\u010E",
          dcaron: "\u010F",
          Dcy: "\u0414",
          dcy: "\u0434",
          ddagger: "\u2021",
          ddarr: "\u21CA",
          DD: "\u2145",
          dd: "\u2146",
          DDotrahd: "\u2911",
          ddotseq: "\u2A77",
          deg: "\xB0",
          Del: "\u2207",
          Delta: "\u0394",
          delta: "\u03B4",
          demptyv: "\u29B1",
          dfisht: "\u297F",
          Dfr: "\u{1D507}",
          dfr: "\u{1D521}",
          dHar: "\u2965",
          dharl: "\u21C3",
          dharr: "\u21C2",
          DiacriticalAcute: "\xB4",
          DiacriticalDot: "\u02D9",
          DiacriticalDoubleAcute: "\u02DD",
          DiacriticalGrave: "`",
          DiacriticalTilde: "\u02DC",
          diam: "\u22C4",
          diamond: "\u22C4",
          Diamond: "\u22C4",
          diamondsuit: "\u2666",
          diams: "\u2666",
          die: "\xA8",
          DifferentialD: "\u2146",
          digamma: "\u03DD",
          disin: "\u22F2",
          div: "\xF7",
          divide: "\xF7",
          divideontimes: "\u22C7",
          divonx: "\u22C7",
          DJcy: "\u0402",
          djcy: "\u0452",
          dlcorn: "\u231E",
          dlcrop: "\u230D",
          dollar: "$",
          Dopf: "\u{1D53B}",
          dopf: "\u{1D555}",
          Dot: "\xA8",
          dot: "\u02D9",
          DotDot: "\u20DC",
          doteq: "\u2250",
          doteqdot: "\u2251",
          DotEqual: "\u2250",
          dotminus: "\u2238",
          dotplus: "\u2214",
          dotsquare: "\u22A1",
          doublebarwedge: "\u2306",
          DoubleContourIntegral: "\u222F",
          DoubleDot: "\xA8",
          DoubleDownArrow: "\u21D3",
          DoubleLeftArrow: "\u21D0",
          DoubleLeftRightArrow: "\u21D4",
          DoubleLeftTee: "\u2AE4",
          DoubleLongLeftArrow: "\u27F8",
          DoubleLongLeftRightArrow: "\u27FA",
          DoubleLongRightArrow: "\u27F9",
          DoubleRightArrow: "\u21D2",
          DoubleRightTee: "\u22A8",
          DoubleUpArrow: "\u21D1",
          DoubleUpDownArrow: "\u21D5",
          DoubleVerticalBar: "\u2225",
          DownArrowBar: "\u2913",
          downarrow: "\u2193",
          DownArrow: "\u2193",
          Downarrow: "\u21D3",
          DownArrowUpArrow: "\u21F5",
          DownBreve: "\u0311",
          downdownarrows: "\u21CA",
          downharpoonleft: "\u21C3",
          downharpoonright: "\u21C2",
          DownLeftRightVector: "\u2950",
          DownLeftTeeVector: "\u295E",
          DownLeftVectorBar: "\u2956",
          DownLeftVector: "\u21BD",
          DownRightTeeVector: "\u295F",
          DownRightVectorBar: "\u2957",
          DownRightVector: "\u21C1",
          DownTeeArrow: "\u21A7",
          DownTee: "\u22A4",
          drbkarow: "\u2910",
          drcorn: "\u231F",
          drcrop: "\u230C",
          Dscr: "\u{1D49F}",
          dscr: "\u{1D4B9}",
          DScy: "\u0405",
          dscy: "\u0455",
          dsol: "\u29F6",
          Dstrok: "\u0110",
          dstrok: "\u0111",
          dtdot: "\u22F1",
          dtri: "\u25BF",
          dtrif: "\u25BE",
          duarr: "\u21F5",
          duhar: "\u296F",
          dwangle: "\u29A6",
          DZcy: "\u040F",
          dzcy: "\u045F",
          dzigrarr: "\u27FF",
          Eacute: "\xC9",
          eacute: "\xE9",
          easter: "\u2A6E",
          Ecaron: "\u011A",
          ecaron: "\u011B",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          ecir: "\u2256",
          ecolon: "\u2255",
          Ecy: "\u042D",
          ecy: "\u044D",
          eDDot: "\u2A77",
          Edot: "\u0116",
          edot: "\u0117",
          eDot: "\u2251",
          ee: "\u2147",
          efDot: "\u2252",
          Efr: "\u{1D508}",
          efr: "\u{1D522}",
          eg: "\u2A9A",
          Egrave: "\xC8",
          egrave: "\xE8",
          egs: "\u2A96",
          egsdot: "\u2A98",
          el: "\u2A99",
          Element: "\u2208",
          elinters: "\u23E7",
          ell: "\u2113",
          els: "\u2A95",
          elsdot: "\u2A97",
          Emacr: "\u0112",
          emacr: "\u0113",
          empty: "\u2205",
          emptyset: "\u2205",
          EmptySmallSquare: "\u25FB",
          emptyv: "\u2205",
          EmptyVerySmallSquare: "\u25AB",
          emsp13: "\u2004",
          emsp14: "\u2005",
          emsp: "\u2003",
          ENG: "\u014A",
          eng: "\u014B",
          ensp: "\u2002",
          Eogon: "\u0118",
          eogon: "\u0119",
          Eopf: "\u{1D53C}",
          eopf: "\u{1D556}",
          epar: "\u22D5",
          eparsl: "\u29E3",
          eplus: "\u2A71",
          epsi: "\u03B5",
          Epsilon: "\u0395",
          epsilon: "\u03B5",
          epsiv: "\u03F5",
          eqcirc: "\u2256",
          eqcolon: "\u2255",
          eqsim: "\u2242",
          eqslantgtr: "\u2A96",
          eqslantless: "\u2A95",
          Equal: "\u2A75",
          equals: "=",
          EqualTilde: "\u2242",
          equest: "\u225F",
          Equilibrium: "\u21CC",
          equiv: "\u2261",
          equivDD: "\u2A78",
          eqvparsl: "\u29E5",
          erarr: "\u2971",
          erDot: "\u2253",
          escr: "\u212F",
          Escr: "\u2130",
          esdot: "\u2250",
          Esim: "\u2A73",
          esim: "\u2242",
          Eta: "\u0397",
          eta: "\u03B7",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          euro: "\u20AC",
          excl: "!",
          exist: "\u2203",
          Exists: "\u2203",
          expectation: "\u2130",
          exponentiale: "\u2147",
          ExponentialE: "\u2147",
          fallingdotseq: "\u2252",
          Fcy: "\u0424",
          fcy: "\u0444",
          female: "\u2640",
          ffilig: "\uFB03",
          fflig: "\uFB00",
          ffllig: "\uFB04",
          Ffr: "\u{1D509}",
          ffr: "\u{1D523}",
          filig: "\uFB01",
          FilledSmallSquare: "\u25FC",
          FilledVerySmallSquare: "\u25AA",
          fjlig: "fj",
          flat: "\u266D",
          fllig: "\uFB02",
          fltns: "\u25B1",
          fnof: "\u0192",
          Fopf: "\u{1D53D}",
          fopf: "\u{1D557}",
          forall: "\u2200",
          ForAll: "\u2200",
          fork: "\u22D4",
          forkv: "\u2AD9",
          Fouriertrf: "\u2131",
          fpartint: "\u2A0D",
          frac12: "\xBD",
          frac13: "\u2153",
          frac14: "\xBC",
          frac15: "\u2155",
          frac16: "\u2159",
          frac18: "\u215B",
          frac23: "\u2154",
          frac25: "\u2156",
          frac34: "\xBE",
          frac35: "\u2157",
          frac38: "\u215C",
          frac45: "\u2158",
          frac56: "\u215A",
          frac58: "\u215D",
          frac78: "\u215E",
          frasl: "\u2044",
          frown: "\u2322",
          fscr: "\u{1D4BB}",
          Fscr: "\u2131",
          gacute: "\u01F5",
          Gamma: "\u0393",
          gamma: "\u03B3",
          Gammad: "\u03DC",
          gammad: "\u03DD",
          gap: "\u2A86",
          Gbreve: "\u011E",
          gbreve: "\u011F",
          Gcedil: "\u0122",
          Gcirc: "\u011C",
          gcirc: "\u011D",
          Gcy: "\u0413",
          gcy: "\u0433",
          Gdot: "\u0120",
          gdot: "\u0121",
          ge: "\u2265",
          gE: "\u2267",
          gEl: "\u2A8C",
          gel: "\u22DB",
          geq: "\u2265",
          geqq: "\u2267",
          geqslant: "\u2A7E",
          gescc: "\u2AA9",
          ges: "\u2A7E",
          gesdot: "\u2A80",
          gesdoto: "\u2A82",
          gesdotol: "\u2A84",
          gesl: "\u22DB\uFE00",
          gesles: "\u2A94",
          Gfr: "\u{1D50A}",
          gfr: "\u{1D524}",
          gg: "\u226B",
          Gg: "\u22D9",
          ggg: "\u22D9",
          gimel: "\u2137",
          GJcy: "\u0403",
          gjcy: "\u0453",
          gla: "\u2AA5",
          gl: "\u2277",
          glE: "\u2A92",
          glj: "\u2AA4",
          gnap: "\u2A8A",
          gnapprox: "\u2A8A",
          gne: "\u2A88",
          gnE: "\u2269",
          gneq: "\u2A88",
          gneqq: "\u2269",
          gnsim: "\u22E7",
          Gopf: "\u{1D53E}",
          gopf: "\u{1D558}",
          grave: "`",
          GreaterEqual: "\u2265",
          GreaterEqualLess: "\u22DB",
          GreaterFullEqual: "\u2267",
          GreaterGreater: "\u2AA2",
          GreaterLess: "\u2277",
          GreaterSlantEqual: "\u2A7E",
          GreaterTilde: "\u2273",
          Gscr: "\u{1D4A2}",
          gscr: "\u210A",
          gsim: "\u2273",
          gsime: "\u2A8E",
          gsiml: "\u2A90",
          gtcc: "\u2AA7",
          gtcir: "\u2A7A",
          gt: ">",
          GT: ">",
          Gt: "\u226B",
          gtdot: "\u22D7",
          gtlPar: "\u2995",
          gtquest: "\u2A7C",
          gtrapprox: "\u2A86",
          gtrarr: "\u2978",
          gtrdot: "\u22D7",
          gtreqless: "\u22DB",
          gtreqqless: "\u2A8C",
          gtrless: "\u2277",
          gtrsim: "\u2273",
          gvertneqq: "\u2269\uFE00",
          gvnE: "\u2269\uFE00",
          Hacek: "\u02C7",
          hairsp: "\u200A",
          half: "\xBD",
          hamilt: "\u210B",
          HARDcy: "\u042A",
          hardcy: "\u044A",
          harrcir: "\u2948",
          harr: "\u2194",
          hArr: "\u21D4",
          harrw: "\u21AD",
          Hat: "^",
          hbar: "\u210F",
          Hcirc: "\u0124",
          hcirc: "\u0125",
          hearts: "\u2665",
          heartsuit: "\u2665",
          hellip: "\u2026",
          hercon: "\u22B9",
          hfr: "\u{1D525}",
          Hfr: "\u210C",
          HilbertSpace: "\u210B",
          hksearow: "\u2925",
          hkswarow: "\u2926",
          hoarr: "\u21FF",
          homtht: "\u223B",
          hookleftarrow: "\u21A9",
          hookrightarrow: "\u21AA",
          hopf: "\u{1D559}",
          Hopf: "\u210D",
          horbar: "\u2015",
          HorizontalLine: "\u2500",
          hscr: "\u{1D4BD}",
          Hscr: "\u210B",
          hslash: "\u210F",
          Hstrok: "\u0126",
          hstrok: "\u0127",
          HumpDownHump: "\u224E",
          HumpEqual: "\u224F",
          hybull: "\u2043",
          hyphen: "\u2010",
          Iacute: "\xCD",
          iacute: "\xED",
          ic: "\u2063",
          Icirc: "\xCE",
          icirc: "\xEE",
          Icy: "\u0418",
          icy: "\u0438",
          Idot: "\u0130",
          IEcy: "\u0415",
          iecy: "\u0435",
          iexcl: "\xA1",
          iff: "\u21D4",
          ifr: "\u{1D526}",
          Ifr: "\u2111",
          Igrave: "\xCC",
          igrave: "\xEC",
          ii: "\u2148",
          iiiint: "\u2A0C",
          iiint: "\u222D",
          iinfin: "\u29DC",
          iiota: "\u2129",
          IJlig: "\u0132",
          ijlig: "\u0133",
          Imacr: "\u012A",
          imacr: "\u012B",
          image: "\u2111",
          ImaginaryI: "\u2148",
          imagline: "\u2110",
          imagpart: "\u2111",
          imath: "\u0131",
          Im: "\u2111",
          imof: "\u22B7",
          imped: "\u01B5",
          Implies: "\u21D2",
          incare: "\u2105",
          in: "\u2208",
          infin: "\u221E",
          infintie: "\u29DD",
          inodot: "\u0131",
          intcal: "\u22BA",
          int: "\u222B",
          Int: "\u222C",
          integers: "\u2124",
          Integral: "\u222B",
          intercal: "\u22BA",
          Intersection: "\u22C2",
          intlarhk: "\u2A17",
          intprod: "\u2A3C",
          InvisibleComma: "\u2063",
          InvisibleTimes: "\u2062",
          IOcy: "\u0401",
          iocy: "\u0451",
          Iogon: "\u012E",
          iogon: "\u012F",
          Iopf: "\u{1D540}",
          iopf: "\u{1D55A}",
          Iota: "\u0399",
          iota: "\u03B9",
          iprod: "\u2A3C",
          iquest: "\xBF",
          iscr: "\u{1D4BE}",
          Iscr: "\u2110",
          isin: "\u2208",
          isindot: "\u22F5",
          isinE: "\u22F9",
          isins: "\u22F4",
          isinsv: "\u22F3",
          isinv: "\u2208",
          it: "\u2062",
          Itilde: "\u0128",
          itilde: "\u0129",
          Iukcy: "\u0406",
          iukcy: "\u0456",
          Iuml: "\xCF",
          iuml: "\xEF",
          Jcirc: "\u0134",
          jcirc: "\u0135",
          Jcy: "\u0419",
          jcy: "\u0439",
          Jfr: "\u{1D50D}",
          jfr: "\u{1D527}",
          jmath: "\u0237",
          Jopf: "\u{1D541}",
          jopf: "\u{1D55B}",
          Jscr: "\u{1D4A5}",
          jscr: "\u{1D4BF}",
          Jsercy: "\u0408",
          jsercy: "\u0458",
          Jukcy: "\u0404",
          jukcy: "\u0454",
          Kappa: "\u039A",
          kappa: "\u03BA",
          kappav: "\u03F0",
          Kcedil: "\u0136",
          kcedil: "\u0137",
          Kcy: "\u041A",
          kcy: "\u043A",
          Kfr: "\u{1D50E}",
          kfr: "\u{1D528}",
          kgreen: "\u0138",
          KHcy: "\u0425",
          khcy: "\u0445",
          KJcy: "\u040C",
          kjcy: "\u045C",
          Kopf: "\u{1D542}",
          kopf: "\u{1D55C}",
          Kscr: "\u{1D4A6}",
          kscr: "\u{1D4C0}",
          lAarr: "\u21DA",
          Lacute: "\u0139",
          lacute: "\u013A",
          laemptyv: "\u29B4",
          lagran: "\u2112",
          Lambda: "\u039B",
          lambda: "\u03BB",
          lang: "\u27E8",
          Lang: "\u27EA",
          langd: "\u2991",
          langle: "\u27E8",
          lap: "\u2A85",
          Laplacetrf: "\u2112",
          laquo: "\xAB",
          larrb: "\u21E4",
          larrbfs: "\u291F",
          larr: "\u2190",
          Larr: "\u219E",
          lArr: "\u21D0",
          larrfs: "\u291D",
          larrhk: "\u21A9",
          larrlp: "\u21AB",
          larrpl: "\u2939",
          larrsim: "\u2973",
          larrtl: "\u21A2",
          latail: "\u2919",
          lAtail: "\u291B",
          lat: "\u2AAB",
          late: "\u2AAD",
          lates: "\u2AAD\uFE00",
          lbarr: "\u290C",
          lBarr: "\u290E",
          lbbrk: "\u2772",
          lbrace: "{",
          lbrack: "[",
          lbrke: "\u298B",
          lbrksld: "\u298F",
          lbrkslu: "\u298D",
          Lcaron: "\u013D",
          lcaron: "\u013E",
          Lcedil: "\u013B",
          lcedil: "\u013C",
          lceil: "\u2308",
          lcub: "{",
          Lcy: "\u041B",
          lcy: "\u043B",
          ldca: "\u2936",
          ldquo: "\u201C",
          ldquor: "\u201E",
          ldrdhar: "\u2967",
          ldrushar: "\u294B",
          ldsh: "\u21B2",
          le: "\u2264",
          lE: "\u2266",
          LeftAngleBracket: "\u27E8",
          LeftArrowBar: "\u21E4",
          leftarrow: "\u2190",
          LeftArrow: "\u2190",
          Leftarrow: "\u21D0",
          LeftArrowRightArrow: "\u21C6",
          leftarrowtail: "\u21A2",
          LeftCeiling: "\u2308",
          LeftDoubleBracket: "\u27E6",
          LeftDownTeeVector: "\u2961",
          LeftDownVectorBar: "\u2959",
          LeftDownVector: "\u21C3",
          LeftFloor: "\u230A",
          leftharpoondown: "\u21BD",
          leftharpoonup: "\u21BC",
          leftleftarrows: "\u21C7",
          leftrightarrow: "\u2194",
          LeftRightArrow: "\u2194",
          Leftrightarrow: "\u21D4",
          leftrightarrows: "\u21C6",
          leftrightharpoons: "\u21CB",
          leftrightsquigarrow: "\u21AD",
          LeftRightVector: "\u294E",
          LeftTeeArrow: "\u21A4",
          LeftTee: "\u22A3",
          LeftTeeVector: "\u295A",
          leftthreetimes: "\u22CB",
          LeftTriangleBar: "\u29CF",
          LeftTriangle: "\u22B2",
          LeftTriangleEqual: "\u22B4",
          LeftUpDownVector: "\u2951",
          LeftUpTeeVector: "\u2960",
          LeftUpVectorBar: "\u2958",
          LeftUpVector: "\u21BF",
          LeftVectorBar: "\u2952",
          LeftVector: "\u21BC",
          lEg: "\u2A8B",
          leg: "\u22DA",
          leq: "\u2264",
          leqq: "\u2266",
          leqslant: "\u2A7D",
          lescc: "\u2AA8",
          les: "\u2A7D",
          lesdot: "\u2A7F",
          lesdoto: "\u2A81",
          lesdotor: "\u2A83",
          lesg: "\u22DA\uFE00",
          lesges: "\u2A93",
          lessapprox: "\u2A85",
          lessdot: "\u22D6",
          lesseqgtr: "\u22DA",
          lesseqqgtr: "\u2A8B",
          LessEqualGreater: "\u22DA",
          LessFullEqual: "\u2266",
          LessGreater: "\u2276",
          lessgtr: "\u2276",
          LessLess: "\u2AA1",
          lesssim: "\u2272",
          LessSlantEqual: "\u2A7D",
          LessTilde: "\u2272",
          lfisht: "\u297C",
          lfloor: "\u230A",
          Lfr: "\u{1D50F}",
          lfr: "\u{1D529}",
          lg: "\u2276",
          lgE: "\u2A91",
          lHar: "\u2962",
          lhard: "\u21BD",
          lharu: "\u21BC",
          lharul: "\u296A",
          lhblk: "\u2584",
          LJcy: "\u0409",
          ljcy: "\u0459",
          llarr: "\u21C7",
          ll: "\u226A",
          Ll: "\u22D8",
          llcorner: "\u231E",
          Lleftarrow: "\u21DA",
          llhard: "\u296B",
          lltri: "\u25FA",
          Lmidot: "\u013F",
          lmidot: "\u0140",
          lmoustache: "\u23B0",
          lmoust: "\u23B0",
          lnap: "\u2A89",
          lnapprox: "\u2A89",
          lne: "\u2A87",
          lnE: "\u2268",
          lneq: "\u2A87",
          lneqq: "\u2268",
          lnsim: "\u22E6",
          loang: "\u27EC",
          loarr: "\u21FD",
          lobrk: "\u27E6",
          longleftarrow: "\u27F5",
          LongLeftArrow: "\u27F5",
          Longleftarrow: "\u27F8",
          longleftrightarrow: "\u27F7",
          LongLeftRightArrow: "\u27F7",
          Longleftrightarrow: "\u27FA",
          longmapsto: "\u27FC",
          longrightarrow: "\u27F6",
          LongRightArrow: "\u27F6",
          Longrightarrow: "\u27F9",
          looparrowleft: "\u21AB",
          looparrowright: "\u21AC",
          lopar: "\u2985",
          Lopf: "\u{1D543}",
          lopf: "\u{1D55D}",
          loplus: "\u2A2D",
          lotimes: "\u2A34",
          lowast: "\u2217",
          lowbar: "_",
          LowerLeftArrow: "\u2199",
          LowerRightArrow: "\u2198",
          loz: "\u25CA",
          lozenge: "\u25CA",
          lozf: "\u29EB",
          lpar: "(",
          lparlt: "\u2993",
          lrarr: "\u21C6",
          lrcorner: "\u231F",
          lrhar: "\u21CB",
          lrhard: "\u296D",
          lrm: "\u200E",
          lrtri: "\u22BF",
          lsaquo: "\u2039",
          lscr: "\u{1D4C1}",
          Lscr: "\u2112",
          lsh: "\u21B0",
          Lsh: "\u21B0",
          lsim: "\u2272",
          lsime: "\u2A8D",
          lsimg: "\u2A8F",
          lsqb: "[",
          lsquo: "\u2018",
          lsquor: "\u201A",
          Lstrok: "\u0141",
          lstrok: "\u0142",
          ltcc: "\u2AA6",
          ltcir: "\u2A79",
          lt: "<",
          LT: "<",
          Lt: "\u226A",
          ltdot: "\u22D6",
          lthree: "\u22CB",
          ltimes: "\u22C9",
          ltlarr: "\u2976",
          ltquest: "\u2A7B",
          ltri: "\u25C3",
          ltrie: "\u22B4",
          ltrif: "\u25C2",
          ltrPar: "\u2996",
          lurdshar: "\u294A",
          luruhar: "\u2966",
          lvertneqq: "\u2268\uFE00",
          lvnE: "\u2268\uFE00",
          macr: "\xAF",
          male: "\u2642",
          malt: "\u2720",
          maltese: "\u2720",
          Map: "\u2905",
          map: "\u21A6",
          mapsto: "\u21A6",
          mapstodown: "\u21A7",
          mapstoleft: "\u21A4",
          mapstoup: "\u21A5",
          marker: "\u25AE",
          mcomma: "\u2A29",
          Mcy: "\u041C",
          mcy: "\u043C",
          mdash: "\u2014",
          mDDot: "\u223A",
          measuredangle: "\u2221",
          MediumSpace: "\u205F",
          Mellintrf: "\u2133",
          Mfr: "\u{1D510}",
          mfr: "\u{1D52A}",
          mho: "\u2127",
          micro: "\xB5",
          midast: "*",
          midcir: "\u2AF0",
          mid: "\u2223",
          middot: "\xB7",
          minusb: "\u229F",
          minus: "\u2212",
          minusd: "\u2238",
          minusdu: "\u2A2A",
          MinusPlus: "\u2213",
          mlcp: "\u2ADB",
          mldr: "\u2026",
          mnplus: "\u2213",
          models: "\u22A7",
          Mopf: "\u{1D544}",
          mopf: "\u{1D55E}",
          mp: "\u2213",
          mscr: "\u{1D4C2}",
          Mscr: "\u2133",
          mstpos: "\u223E",
          Mu: "\u039C",
          mu: "\u03BC",
          multimap: "\u22B8",
          mumap: "\u22B8",
          nabla: "\u2207",
          Nacute: "\u0143",
          nacute: "\u0144",
          nang: "\u2220\u20D2",
          nap: "\u2249",
          napE: "\u2A70\u0338",
          napid: "\u224B\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natural: "\u266E",
          naturals: "\u2115",
          natur: "\u266E",
          nbsp: "\xA0",
          nbump: "\u224E\u0338",
          nbumpe: "\u224F\u0338",
          ncap: "\u2A43",
          Ncaron: "\u0147",
          ncaron: "\u0148",
          Ncedil: "\u0145",
          ncedil: "\u0146",
          ncong: "\u2247",
          ncongdot: "\u2A6D\u0338",
          ncup: "\u2A42",
          Ncy: "\u041D",
          ncy: "\u043D",
          ndash: "\u2013",
          nearhk: "\u2924",
          nearr: "\u2197",
          neArr: "\u21D7",
          nearrow: "\u2197",
          ne: "\u2260",
          nedot: "\u2250\u0338",
          NegativeMediumSpace: "\u200B",
          NegativeThickSpace: "\u200B",
          NegativeThinSpace: "\u200B",
          NegativeVeryThinSpace: "\u200B",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          NestedGreaterGreater: "\u226B",
          NestedLessLess: "\u226A",
          NewLine: `
`,
          nexist: "\u2204",
          nexists: "\u2204",
          Nfr: "\u{1D511}",
          nfr: "\u{1D52B}",
          ngE: "\u2267\u0338",
          nge: "\u2271",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2A7E\u0338",
          nges: "\u2A7E\u0338",
          nGg: "\u22D9\u0338",
          ngsim: "\u2275",
          nGt: "\u226B\u20D2",
          ngt: "\u226F",
          ngtr: "\u226F",
          nGtv: "\u226B\u0338",
          nharr: "\u21AE",
          nhArr: "\u21CE",
          nhpar: "\u2AF2",
          ni: "\u220B",
          nis: "\u22FC",
          nisd: "\u22FA",
          niv: "\u220B",
          NJcy: "\u040A",
          njcy: "\u045A",
          nlarr: "\u219A",
          nlArr: "\u21CD",
          nldr: "\u2025",
          nlE: "\u2266\u0338",
          nle: "\u2270",
          nleftarrow: "\u219A",
          nLeftarrow: "\u21CD",
          nleftrightarrow: "\u21AE",
          nLeftrightarrow: "\u21CE",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2A7D\u0338",
          nles: "\u2A7D\u0338",
          nless: "\u226E",
          nLl: "\u22D8\u0338",
          nlsim: "\u2274",
          nLt: "\u226A\u20D2",
          nlt: "\u226E",
          nltri: "\u22EA",
          nltrie: "\u22EC",
          nLtv: "\u226A\u0338",
          nmid: "\u2224",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xA0",
          nopf: "\u{1D55F}",
          Nopf: "\u2115",
          Not: "\u2AEC",
          not: "\xAC",
          NotCongruent: "\u2262",
          NotCupCap: "\u226D",
          NotDoubleVerticalBar: "\u2226",
          NotElement: "\u2209",
          NotEqual: "\u2260",
          NotEqualTilde: "\u2242\u0338",
          NotExists: "\u2204",
          NotGreater: "\u226F",
          NotGreaterEqual: "\u2271",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226B\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2A7E\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224E\u0338",
          NotHumpEqual: "\u224F\u0338",
          notin: "\u2209",
          notindot: "\u22F5\u0338",
          notinE: "\u22F9\u0338",
          notinva: "\u2209",
          notinvb: "\u22F7",
          notinvc: "\u22F6",
          NotLeftTriangleBar: "\u29CF\u0338",
          NotLeftTriangle: "\u22EA",
          NotLeftTriangleEqual: "\u22EC",
          NotLess: "\u226E",
          NotLessEqual: "\u2270",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226A\u0338",
          NotLessSlantEqual: "\u2A7D\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2AA2\u0338",
          NotNestedLessLess: "\u2AA1\u0338",
          notni: "\u220C",
          notniva: "\u220C",
          notnivb: "\u22FE",
          notnivc: "\u22FD",
          NotPrecedes: "\u2280",
          NotPrecedesEqual: "\u2AAF\u0338",
          NotPrecedesSlantEqual: "\u22E0",
          NotReverseElement: "\u220C",
          NotRightTriangleBar: "\u29D0\u0338",
          NotRightTriangle: "\u22EB",
          NotRightTriangleEqual: "\u22ED",
          NotSquareSubset: "\u228F\u0338",
          NotSquareSubsetEqual: "\u22E2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22E3",
          NotSubset: "\u2282\u20D2",
          NotSubsetEqual: "\u2288",
          NotSucceeds: "\u2281",
          NotSucceedsEqual: "\u2AB0\u0338",
          NotSucceedsSlantEqual: "\u22E1",
          NotSucceedsTilde: "\u227F\u0338",
          NotSuperset: "\u2283\u20D2",
          NotSupersetEqual: "\u2289",
          NotTilde: "\u2241",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          NotVerticalBar: "\u2224",
          nparallel: "\u2226",
          npar: "\u2226",
          nparsl: "\u2AFD\u20E5",
          npart: "\u2202\u0338",
          npolint: "\u2A14",
          npr: "\u2280",
          nprcue: "\u22E0",
          nprec: "\u2280",
          npreceq: "\u2AAF\u0338",
          npre: "\u2AAF\u0338",
          nrarrc: "\u2933\u0338",
          nrarr: "\u219B",
          nrArr: "\u21CF",
          nrarrw: "\u219D\u0338",
          nrightarrow: "\u219B",
          nRightarrow: "\u21CF",
          nrtri: "\u22EB",
          nrtrie: "\u22ED",
          nsc: "\u2281",
          nsccue: "\u22E1",
          nsce: "\u2AB0\u0338",
          Nscr: "\u{1D4A9}",
          nscr: "\u{1D4C3}",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22E2",
          nsqsupe: "\u22E3",
          nsub: "\u2284",
          nsubE: "\u2AC5\u0338",
          nsube: "\u2288",
          nsubset: "\u2282\u20D2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2AC5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2AB0\u0338",
          nsup: "\u2285",
          nsupE: "\u2AC6\u0338",
          nsupe: "\u2289",
          nsupset: "\u2283\u20D2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2AC6\u0338",
          ntgl: "\u2279",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          ntlg: "\u2278",
          ntriangleleft: "\u22EA",
          ntrianglelefteq: "\u22EC",
          ntriangleright: "\u22EB",
          ntrianglerighteq: "\u22ED",
          Nu: "\u039D",
          nu: "\u03BD",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvap: "\u224D\u20D2",
          nvdash: "\u22AC",
          nvDash: "\u22AD",
          nVdash: "\u22AE",
          nVDash: "\u22AF",
          nvge: "\u2265\u20D2",
          nvgt: ">\u20D2",
          nvHarr: "\u2904",
          nvinfin: "\u29DE",
          nvlArr: "\u2902",
          nvle: "\u2264\u20D2",
          nvlt: "<\u20D2",
          nvltrie: "\u22B4\u20D2",
          nvrArr: "\u2903",
          nvrtrie: "\u22B5\u20D2",
          nvsim: "\u223C\u20D2",
          nwarhk: "\u2923",
          nwarr: "\u2196",
          nwArr: "\u21D6",
          nwarrow: "\u2196",
          nwnear: "\u2927",
          Oacute: "\xD3",
          oacute: "\xF3",
          oast: "\u229B",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          ocir: "\u229A",
          Ocy: "\u041E",
          ocy: "\u043E",
          odash: "\u229D",
          Odblac: "\u0150",
          odblac: "\u0151",
          odiv: "\u2A38",
          odot: "\u2299",
          odsold: "\u29BC",
          OElig: "\u0152",
          oelig: "\u0153",
          ofcir: "\u29BF",
          Ofr: "\u{1D512}",
          ofr: "\u{1D52C}",
          ogon: "\u02DB",
          Ograve: "\xD2",
          ograve: "\xF2",
          ogt: "\u29C1",
          ohbar: "\u29B5",
          ohm: "\u03A9",
          oint: "\u222E",
          olarr: "\u21BA",
          olcir: "\u29BE",
          olcross: "\u29BB",
          oline: "\u203E",
          olt: "\u29C0",
          Omacr: "\u014C",
          omacr: "\u014D",
          Omega: "\u03A9",
          omega: "\u03C9",
          Omicron: "\u039F",
          omicron: "\u03BF",
          omid: "\u29B6",
          ominus: "\u2296",
          Oopf: "\u{1D546}",
          oopf: "\u{1D560}",
          opar: "\u29B7",
          OpenCurlyDoubleQuote: "\u201C",
          OpenCurlyQuote: "\u2018",
          operp: "\u29B9",
          oplus: "\u2295",
          orarr: "\u21BB",
          Or: "\u2A54",
          or: "\u2228",
          ord: "\u2A5D",
          order: "\u2134",
          orderof: "\u2134",
          ordf: "\xAA",
          ordm: "\xBA",
          origof: "\u22B6",
          oror: "\u2A56",
          orslope: "\u2A57",
          orv: "\u2A5B",
          oS: "\u24C8",
          Oscr: "\u{1D4AA}",
          oscr: "\u2134",
          Oslash: "\xD8",
          oslash: "\xF8",
          osol: "\u2298",
          Otilde: "\xD5",
          otilde: "\xF5",
          otimesas: "\u2A36",
          Otimes: "\u2A37",
          otimes: "\u2297",
          Ouml: "\xD6",
          ouml: "\xF6",
          ovbar: "\u233D",
          OverBar: "\u203E",
          OverBrace: "\u23DE",
          OverBracket: "\u23B4",
          OverParenthesis: "\u23DC",
          para: "\xB6",
          parallel: "\u2225",
          par: "\u2225",
          parsim: "\u2AF3",
          parsl: "\u2AFD",
          part: "\u2202",
          PartialD: "\u2202",
          Pcy: "\u041F",
          pcy: "\u043F",
          percnt: "%",
          period: ".",
          permil: "\u2030",
          perp: "\u22A5",
          pertenk: "\u2031",
          Pfr: "\u{1D513}",
          pfr: "\u{1D52D}",
          Phi: "\u03A6",
          phi: "\u03C6",
          phiv: "\u03D5",
          phmmat: "\u2133",
          phone: "\u260E",
          Pi: "\u03A0",
          pi: "\u03C0",
          pitchfork: "\u22D4",
          piv: "\u03D6",
          planck: "\u210F",
          planckh: "\u210E",
          plankv: "\u210F",
          plusacir: "\u2A23",
          plusb: "\u229E",
          pluscir: "\u2A22",
          plus: "+",
          plusdo: "\u2214",
          plusdu: "\u2A25",
          pluse: "\u2A72",
          PlusMinus: "\xB1",
          plusmn: "\xB1",
          plussim: "\u2A26",
          plustwo: "\u2A27",
          pm: "\xB1",
          Poincareplane: "\u210C",
          pointint: "\u2A15",
          popf: "\u{1D561}",
          Popf: "\u2119",
          pound: "\xA3",
          prap: "\u2AB7",
          Pr: "\u2ABB",
          pr: "\u227A",
          prcue: "\u227C",
          precapprox: "\u2AB7",
          prec: "\u227A",
          preccurlyeq: "\u227C",
          Precedes: "\u227A",
          PrecedesEqual: "\u2AAF",
          PrecedesSlantEqual: "\u227C",
          PrecedesTilde: "\u227E",
          preceq: "\u2AAF",
          precnapprox: "\u2AB9",
          precneqq: "\u2AB5",
          precnsim: "\u22E8",
          pre: "\u2AAF",
          prE: "\u2AB3",
          precsim: "\u227E",
          prime: "\u2032",
          Prime: "\u2033",
          primes: "\u2119",
          prnap: "\u2AB9",
          prnE: "\u2AB5",
          prnsim: "\u22E8",
          prod: "\u220F",
          Product: "\u220F",
          profalar: "\u232E",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221D",
          Proportional: "\u221D",
          Proportion: "\u2237",
          propto: "\u221D",
          prsim: "\u227E",
          prurel: "\u22B0",
          Pscr: "\u{1D4AB}",
          pscr: "\u{1D4C5}",
          Psi: "\u03A8",
          psi: "\u03C8",
          puncsp: "\u2008",
          Qfr: "\u{1D514}",
          qfr: "\u{1D52E}",
          qint: "\u2A0C",
          qopf: "\u{1D562}",
          Qopf: "\u211A",
          qprime: "\u2057",
          Qscr: "\u{1D4AC}",
          qscr: "\u{1D4C6}",
          quaternions: "\u210D",
          quatint: "\u2A16",
          quest: "?",
          questeq: "\u225F",
          quot: '"',
          QUOT: '"',
          rAarr: "\u21DB",
          race: "\u223D\u0331",
          Racute: "\u0154",
          racute: "\u0155",
          radic: "\u221A",
          raemptyv: "\u29B3",
          rang: "\u27E9",
          Rang: "\u27EB",
          rangd: "\u2992",
          range: "\u29A5",
          rangle: "\u27E9",
          raquo: "\xBB",
          rarrap: "\u2975",
          rarrb: "\u21E5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarr: "\u2192",
          Rarr: "\u21A0",
          rArr: "\u21D2",
          rarrfs: "\u291E",
          rarrhk: "\u21AA",
          rarrlp: "\u21AC",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          Rarrtl: "\u2916",
          rarrtl: "\u21A3",
          rarrw: "\u219D",
          ratail: "\u291A",
          rAtail: "\u291C",
          ratio: "\u2236",
          rationals: "\u211A",
          rbarr: "\u290D",
          rBarr: "\u290F",
          RBarr: "\u2910",
          rbbrk: "\u2773",
          rbrace: "}",
          rbrack: "]",
          rbrke: "\u298C",
          rbrksld: "\u298E",
          rbrkslu: "\u2990",
          Rcaron: "\u0158",
          rcaron: "\u0159",
          Rcedil: "\u0156",
          rcedil: "\u0157",
          rceil: "\u2309",
          rcub: "}",
          Rcy: "\u0420",
          rcy: "\u0440",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201D",
          rdquor: "\u201D",
          rdsh: "\u21B3",
          real: "\u211C",
          realine: "\u211B",
          realpart: "\u211C",
          reals: "\u211D",
          Re: "\u211C",
          rect: "\u25AD",
          reg: "\xAE",
          REG: "\xAE",
          ReverseElement: "\u220B",
          ReverseEquilibrium: "\u21CB",
          ReverseUpEquilibrium: "\u296F",
          rfisht: "\u297D",
          rfloor: "\u230B",
          rfr: "\u{1D52F}",
          Rfr: "\u211C",
          rHar: "\u2964",
          rhard: "\u21C1",
          rharu: "\u21C0",
          rharul: "\u296C",
          Rho: "\u03A1",
          rho: "\u03C1",
          rhov: "\u03F1",
          RightAngleBracket: "\u27E9",
          RightArrowBar: "\u21E5",
          rightarrow: "\u2192",
          RightArrow: "\u2192",
          Rightarrow: "\u21D2",
          RightArrowLeftArrow: "\u21C4",
          rightarrowtail: "\u21A3",
          RightCeiling: "\u2309",
          RightDoubleBracket: "\u27E7",
          RightDownTeeVector: "\u295D",
          RightDownVectorBar: "\u2955",
          RightDownVector: "\u21C2",
          RightFloor: "\u230B",
          rightharpoondown: "\u21C1",
          rightharpoonup: "\u21C0",
          rightleftarrows: "\u21C4",
          rightleftharpoons: "\u21CC",
          rightrightarrows: "\u21C9",
          rightsquigarrow: "\u219D",
          RightTeeArrow: "\u21A6",
          RightTee: "\u22A2",
          RightTeeVector: "\u295B",
          rightthreetimes: "\u22CC",
          RightTriangleBar: "\u29D0",
          RightTriangle: "\u22B3",
          RightTriangleEqual: "\u22B5",
          RightUpDownVector: "\u294F",
          RightUpTeeVector: "\u295C",
          RightUpVectorBar: "\u2954",
          RightUpVector: "\u21BE",
          RightVectorBar: "\u2953",
          RightVector: "\u21C0",
          ring: "\u02DA",
          risingdotseq: "\u2253",
          rlarr: "\u21C4",
          rlhar: "\u21CC",
          rlm: "\u200F",
          rmoustache: "\u23B1",
          rmoust: "\u23B1",
          rnmid: "\u2AEE",
          roang: "\u27ED",
          roarr: "\u21FE",
          robrk: "\u27E7",
          ropar: "\u2986",
          ropf: "\u{1D563}",
          Ropf: "\u211D",
          roplus: "\u2A2E",
          rotimes: "\u2A35",
          RoundImplies: "\u2970",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2A12",
          rrarr: "\u21C9",
          Rrightarrow: "\u21DB",
          rsaquo: "\u203A",
          rscr: "\u{1D4C7}",
          Rscr: "\u211B",
          rsh: "\u21B1",
          Rsh: "\u21B1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22CC",
          rtimes: "\u22CA",
          rtri: "\u25B9",
          rtrie: "\u22B5",
          rtrif: "\u25B8",
          rtriltri: "\u29CE",
          RuleDelayed: "\u29F4",
          ruluhar: "\u2968",
          rx: "\u211E",
          Sacute: "\u015A",
          sacute: "\u015B",
          sbquo: "\u201A",
          scap: "\u2AB8",
          Scaron: "\u0160",
          scaron: "\u0161",
          Sc: "\u2ABC",
          sc: "\u227B",
          sccue: "\u227D",
          sce: "\u2AB0",
          scE: "\u2AB4",
          Scedil: "\u015E",
          scedil: "\u015F",
          Scirc: "\u015C",
          scirc: "\u015D",
          scnap: "\u2ABA",
          scnE: "\u2AB6",
          scnsim: "\u22E9",
          scpolint: "\u2A13",
          scsim: "\u227F",
          Scy: "\u0421",
          scy: "\u0441",
          sdotb: "\u22A1",
          sdot: "\u22C5",
          sdote: "\u2A66",
          searhk: "\u2925",
          searr: "\u2198",
          seArr: "\u21D8",
          searrow: "\u2198",
          sect: "\xA7",
          semi: ";",
          seswar: "\u2929",
          setminus: "\u2216",
          setmn: "\u2216",
          sext: "\u2736",
          Sfr: "\u{1D516}",
          sfr: "\u{1D530}",
          sfrown: "\u2322",
          sharp: "\u266F",
          SHCHcy: "\u0429",
          shchcy: "\u0449",
          SHcy: "\u0428",
          shcy: "\u0448",
          ShortDownArrow: "\u2193",
          ShortLeftArrow: "\u2190",
          shortmid: "\u2223",
          shortparallel: "\u2225",
          ShortRightArrow: "\u2192",
          ShortUpArrow: "\u2191",
          shy: "\xAD",
          Sigma: "\u03A3",
          sigma: "\u03C3",
          sigmaf: "\u03C2",
          sigmav: "\u03C2",
          sim: "\u223C",
          simdot: "\u2A6A",
          sime: "\u2243",
          simeq: "\u2243",
          simg: "\u2A9E",
          simgE: "\u2AA0",
          siml: "\u2A9D",
          simlE: "\u2A9F",
          simne: "\u2246",
          simplus: "\u2A24",
          simrarr: "\u2972",
          slarr: "\u2190",
          SmallCircle: "\u2218",
          smallsetminus: "\u2216",
          smashp: "\u2A33",
          smeparsl: "\u29E4",
          smid: "\u2223",
          smile: "\u2323",
          smt: "\u2AAA",
          smte: "\u2AAC",
          smtes: "\u2AAC\uFE00",
          SOFTcy: "\u042C",
          softcy: "\u044C",
          solbar: "\u233F",
          solb: "\u29C4",
          sol: "/",
          Sopf: "\u{1D54A}",
          sopf: "\u{1D564}",
          spades: "\u2660",
          spadesuit: "\u2660",
          spar: "\u2225",
          sqcap: "\u2293",
          sqcaps: "\u2293\uFE00",
          sqcup: "\u2294",
          sqcups: "\u2294\uFE00",
          Sqrt: "\u221A",
          sqsub: "\u228F",
          sqsube: "\u2291",
          sqsubset: "\u228F",
          sqsubseteq: "\u2291",
          sqsup: "\u2290",
          sqsupe: "\u2292",
          sqsupset: "\u2290",
          sqsupseteq: "\u2292",
          square: "\u25A1",
          Square: "\u25A1",
          SquareIntersection: "\u2293",
          SquareSubset: "\u228F",
          SquareSubsetEqual: "\u2291",
          SquareSuperset: "\u2290",
          SquareSupersetEqual: "\u2292",
          SquareUnion: "\u2294",
          squarf: "\u25AA",
          squ: "\u25A1",
          squf: "\u25AA",
          srarr: "\u2192",
          Sscr: "\u{1D4AE}",
          sscr: "\u{1D4C8}",
          ssetmn: "\u2216",
          ssmile: "\u2323",
          sstarf: "\u22C6",
          Star: "\u22C6",
          star: "\u2606",
          starf: "\u2605",
          straightepsilon: "\u03F5",
          straightphi: "\u03D5",
          strns: "\xAF",
          sub: "\u2282",
          Sub: "\u22D0",
          subdot: "\u2ABD",
          subE: "\u2AC5",
          sube: "\u2286",
          subedot: "\u2AC3",
          submult: "\u2AC1",
          subnE: "\u2ACB",
          subne: "\u228A",
          subplus: "\u2ABF",
          subrarr: "\u2979",
          subset: "\u2282",
          Subset: "\u22D0",
          subseteq: "\u2286",
          subseteqq: "\u2AC5",
          SubsetEqual: "\u2286",
          subsetneq: "\u228A",
          subsetneqq: "\u2ACB",
          subsim: "\u2AC7",
          subsub: "\u2AD5",
          subsup: "\u2AD3",
          succapprox: "\u2AB8",
          succ: "\u227B",
          succcurlyeq: "\u227D",
          Succeeds: "\u227B",
          SucceedsEqual: "\u2AB0",
          SucceedsSlantEqual: "\u227D",
          SucceedsTilde: "\u227F",
          succeq: "\u2AB0",
          succnapprox: "\u2ABA",
          succneqq: "\u2AB6",
          succnsim: "\u22E9",
          succsim: "\u227F",
          SuchThat: "\u220B",
          sum: "\u2211",
          Sum: "\u2211",
          sung: "\u266A",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          sup: "\u2283",
          Sup: "\u22D1",
          supdot: "\u2ABE",
          supdsub: "\u2AD8",
          supE: "\u2AC6",
          supe: "\u2287",
          supedot: "\u2AC4",
          Superset: "\u2283",
          SupersetEqual: "\u2287",
          suphsol: "\u27C9",
          suphsub: "\u2AD7",
          suplarr: "\u297B",
          supmult: "\u2AC2",
          supnE: "\u2ACC",
          supne: "\u228B",
          supplus: "\u2AC0",
          supset: "\u2283",
          Supset: "\u22D1",
          supseteq: "\u2287",
          supseteqq: "\u2AC6",
          supsetneq: "\u228B",
          supsetneqq: "\u2ACC",
          supsim: "\u2AC8",
          supsub: "\u2AD4",
          supsup: "\u2AD6",
          swarhk: "\u2926",
          swarr: "\u2199",
          swArr: "\u21D9",
          swarrow: "\u2199",
          swnwar: "\u292A",
          szlig: "\xDF",
          Tab: "	",
          target: "\u2316",
          Tau: "\u03A4",
          tau: "\u03C4",
          tbrk: "\u23B4",
          Tcaron: "\u0164",
          tcaron: "\u0165",
          Tcedil: "\u0162",
          tcedil: "\u0163",
          Tcy: "\u0422",
          tcy: "\u0442",
          tdot: "\u20DB",
          telrec: "\u2315",
          Tfr: "\u{1D517}",
          tfr: "\u{1D531}",
          there4: "\u2234",
          therefore: "\u2234",
          Therefore: "\u2234",
          Theta: "\u0398",
          theta: "\u03B8",
          thetasym: "\u03D1",
          thetav: "\u03D1",
          thickapprox: "\u2248",
          thicksim: "\u223C",
          ThickSpace: "\u205F\u200A",
          ThinSpace: "\u2009",
          thinsp: "\u2009",
          thkap: "\u2248",
          thksim: "\u223C",
          THORN: "\xDE",
          thorn: "\xFE",
          tilde: "\u02DC",
          Tilde: "\u223C",
          TildeEqual: "\u2243",
          TildeFullEqual: "\u2245",
          TildeTilde: "\u2248",
          timesbar: "\u2A31",
          timesb: "\u22A0",
          times: "\xD7",
          timesd: "\u2A30",
          tint: "\u222D",
          toea: "\u2928",
          topbot: "\u2336",
          topcir: "\u2AF1",
          top: "\u22A4",
          Topf: "\u{1D54B}",
          topf: "\u{1D565}",
          topfork: "\u2ADA",
          tosa: "\u2929",
          tprime: "\u2034",
          trade: "\u2122",
          TRADE: "\u2122",
          triangle: "\u25B5",
          triangledown: "\u25BF",
          triangleleft: "\u25C3",
          trianglelefteq: "\u22B4",
          triangleq: "\u225C",
          triangleright: "\u25B9",
          trianglerighteq: "\u22B5",
          tridot: "\u25EC",
          trie: "\u225C",
          triminus: "\u2A3A",
          TripleDot: "\u20DB",
          triplus: "\u2A39",
          trisb: "\u29CD",
          tritime: "\u2A3B",
          trpezium: "\u23E2",
          Tscr: "\u{1D4AF}",
          tscr: "\u{1D4C9}",
          TScy: "\u0426",
          tscy: "\u0446",
          TSHcy: "\u040B",
          tshcy: "\u045B",
          Tstrok: "\u0166",
          tstrok: "\u0167",
          twixt: "\u226C",
          twoheadleftarrow: "\u219E",
          twoheadrightarrow: "\u21A0",
          Uacute: "\xDA",
          uacute: "\xFA",
          uarr: "\u2191",
          Uarr: "\u219F",
          uArr: "\u21D1",
          Uarrocir: "\u2949",
          Ubrcy: "\u040E",
          ubrcy: "\u045E",
          Ubreve: "\u016C",
          ubreve: "\u016D",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ucy: "\u0423",
          ucy: "\u0443",
          udarr: "\u21C5",
          Udblac: "\u0170",
          udblac: "\u0171",
          udhar: "\u296E",
          ufisht: "\u297E",
          Ufr: "\u{1D518}",
          ufr: "\u{1D532}",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uHar: "\u2963",
          uharl: "\u21BF",
          uharr: "\u21BE",
          uhblk: "\u2580",
          ulcorn: "\u231C",
          ulcorner: "\u231C",
          ulcrop: "\u230F",
          ultri: "\u25F8",
          Umacr: "\u016A",
          umacr: "\u016B",
          uml: "\xA8",
          UnderBar: "_",
          UnderBrace: "\u23DF",
          UnderBracket: "\u23B5",
          UnderParenthesis: "\u23DD",
          Union: "\u22C3",
          UnionPlus: "\u228E",
          Uogon: "\u0172",
          uogon: "\u0173",
          Uopf: "\u{1D54C}",
          uopf: "\u{1D566}",
          UpArrowBar: "\u2912",
          uparrow: "\u2191",
          UpArrow: "\u2191",
          Uparrow: "\u21D1",
          UpArrowDownArrow: "\u21C5",
          updownarrow: "\u2195",
          UpDownArrow: "\u2195",
          Updownarrow: "\u21D5",
          UpEquilibrium: "\u296E",
          upharpoonleft: "\u21BF",
          upharpoonright: "\u21BE",
          uplus: "\u228E",
          UpperLeftArrow: "\u2196",
          UpperRightArrow: "\u2197",
          upsi: "\u03C5",
          Upsi: "\u03D2",
          upsih: "\u03D2",
          Upsilon: "\u03A5",
          upsilon: "\u03C5",
          UpTeeArrow: "\u21A5",
          UpTee: "\u22A5",
          upuparrows: "\u21C8",
          urcorn: "\u231D",
          urcorner: "\u231D",
          urcrop: "\u230E",
          Uring: "\u016E",
          uring: "\u016F",
          urtri: "\u25F9",
          Uscr: "\u{1D4B0}",
          uscr: "\u{1D4CA}",
          utdot: "\u22F0",
          Utilde: "\u0168",
          utilde: "\u0169",
          utri: "\u25B5",
          utrif: "\u25B4",
          uuarr: "\u21C8",
          Uuml: "\xDC",
          uuml: "\xFC",
          uwangle: "\u29A7",
          vangrt: "\u299C",
          varepsilon: "\u03F5",
          varkappa: "\u03F0",
          varnothing: "\u2205",
          varphi: "\u03D5",
          varpi: "\u03D6",
          varpropto: "\u221D",
          varr: "\u2195",
          vArr: "\u21D5",
          varrho: "\u03F1",
          varsigma: "\u03C2",
          varsubsetneq: "\u228A\uFE00",
          varsubsetneqq: "\u2ACB\uFE00",
          varsupsetneq: "\u228B\uFE00",
          varsupsetneqq: "\u2ACC\uFE00",
          vartheta: "\u03D1",
          vartriangleleft: "\u22B2",
          vartriangleright: "\u22B3",
          vBar: "\u2AE8",
          Vbar: "\u2AEB",
          vBarv: "\u2AE9",
          Vcy: "\u0412",
          vcy: "\u0432",
          vdash: "\u22A2",
          vDash: "\u22A8",
          Vdash: "\u22A9",
          VDash: "\u22AB",
          Vdashl: "\u2AE6",
          veebar: "\u22BB",
          vee: "\u2228",
          Vee: "\u22C1",
          veeeq: "\u225A",
          vellip: "\u22EE",
          verbar: "|",
          Verbar: "\u2016",
          vert: "|",
          Vert: "\u2016",
          VerticalBar: "\u2223",
          VerticalLine: "|",
          VerticalSeparator: "\u2758",
          VerticalTilde: "\u2240",
          VeryThinSpace: "\u200A",
          Vfr: "\u{1D519}",
          vfr: "\u{1D533}",
          vltri: "\u22B2",
          vnsub: "\u2282\u20D2",
          vnsup: "\u2283\u20D2",
          Vopf: "\u{1D54D}",
          vopf: "\u{1D567}",
          vprop: "\u221D",
          vrtri: "\u22B3",
          Vscr: "\u{1D4B1}",
          vscr: "\u{1D4CB}",
          vsubnE: "\u2ACB\uFE00",
          vsubne: "\u228A\uFE00",
          vsupnE: "\u2ACC\uFE00",
          vsupne: "\u228B\uFE00",
          Vvdash: "\u22AA",
          vzigzag: "\u299A",
          Wcirc: "\u0174",
          wcirc: "\u0175",
          wedbar: "\u2A5F",
          wedge: "\u2227",
          Wedge: "\u22C0",
          wedgeq: "\u2259",
          weierp: "\u2118",
          Wfr: "\u{1D51A}",
          wfr: "\u{1D534}",
          Wopf: "\u{1D54E}",
          wopf: "\u{1D568}",
          wp: "\u2118",
          wr: "\u2240",
          wreath: "\u2240",
          Wscr: "\u{1D4B2}",
          wscr: "\u{1D4CC}",
          xcap: "\u22C2",
          xcirc: "\u25EF",
          xcup: "\u22C3",
          xdtri: "\u25BD",
          Xfr: "\u{1D51B}",
          xfr: "\u{1D535}",
          xharr: "\u27F7",
          xhArr: "\u27FA",
          Xi: "\u039E",
          xi: "\u03BE",
          xlarr: "\u27F5",
          xlArr: "\u27F8",
          xmap: "\u27FC",
          xnis: "\u22FB",
          xodot: "\u2A00",
          Xopf: "\u{1D54F}",
          xopf: "\u{1D569}",
          xoplus: "\u2A01",
          xotime: "\u2A02",
          xrarr: "\u27F6",
          xrArr: "\u27F9",
          Xscr: "\u{1D4B3}",
          xscr: "\u{1D4CD}",
          xsqcup: "\u2A06",
          xuplus: "\u2A04",
          xutri: "\u25B3",
          xvee: "\u22C1",
          xwedge: "\u22C0",
          Yacute: "\xDD",
          yacute: "\xFD",
          YAcy: "\u042F",
          yacy: "\u044F",
          Ycirc: "\u0176",
          ycirc: "\u0177",
          Ycy: "\u042B",
          ycy: "\u044B",
          yen: "\xA5",
          Yfr: "\u{1D51C}",
          yfr: "\u{1D536}",
          YIcy: "\u0407",
          yicy: "\u0457",
          Yopf: "\u{1D550}",
          yopf: "\u{1D56A}",
          Yscr: "\u{1D4B4}",
          yscr: "\u{1D4CE}",
          YUcy: "\u042E",
          yucy: "\u044E",
          yuml: "\xFF",
          Yuml: "\u0178",
          Zacute: "\u0179",
          zacute: "\u017A",
          Zcaron: "\u017D",
          zcaron: "\u017E",
          Zcy: "\u0417",
          zcy: "\u0437",
          Zdot: "\u017B",
          zdot: "\u017C",
          zeetrf: "\u2128",
          ZeroWidthSpace: "\u200B",
          Zeta: "\u0396",
          zeta: "\u03B6",
          zfr: "\u{1D537}",
          Zfr: "\u2128",
          ZHcy: "\u0416",
          zhcy: "\u0436",
          zigrarr: "\u21DD",
          zopf: "\u{1D56B}",
          Zopf: "\u2124",
          Zscr: "\u{1D4B5}",
          zscr: "\u{1D4CF}",
          zwj: "\u200D",
          zwnj: "\u200C",
        };
      },
    }),
    F8 = Ye({
      "../../node_modules/entities/lib/maps/legacy.json"(e, t) {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          AElig: "\xC6",
          aelig: "\xE6",
          Agrave: "\xC0",
          agrave: "\xE0",
          amp: "&",
          AMP: "&",
          Aring: "\xC5",
          aring: "\xE5",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          brvbar: "\xA6",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          cedil: "\xB8",
          cent: "\xA2",
          copy: "\xA9",
          COPY: "\xA9",
          curren: "\xA4",
          deg: "\xB0",
          divide: "\xF7",
          Eacute: "\xC9",
          eacute: "\xE9",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          Egrave: "\xC8",
          egrave: "\xE8",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          frac12: "\xBD",
          frac14: "\xBC",
          frac34: "\xBE",
          gt: ">",
          GT: ">",
          Iacute: "\xCD",
          iacute: "\xED",
          Icirc: "\xCE",
          icirc: "\xEE",
          iexcl: "\xA1",
          Igrave: "\xCC",
          igrave: "\xEC",
          iquest: "\xBF",
          Iuml: "\xCF",
          iuml: "\xEF",
          laquo: "\xAB",
          lt: "<",
          LT: "<",
          macr: "\xAF",
          micro: "\xB5",
          middot: "\xB7",
          nbsp: "\xA0",
          not: "\xAC",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          Oacute: "\xD3",
          oacute: "\xF3",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          Ograve: "\xD2",
          ograve: "\xF2",
          ordf: "\xAA",
          ordm: "\xBA",
          Oslash: "\xD8",
          oslash: "\xF8",
          Otilde: "\xD5",
          otilde: "\xF5",
          Ouml: "\xD6",
          ouml: "\xF6",
          para: "\xB6",
          plusmn: "\xB1",
          pound: "\xA3",
          quot: '"',
          QUOT: '"',
          raquo: "\xBB",
          reg: "\xAE",
          REG: "\xAE",
          sect: "\xA7",
          shy: "\xAD",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          szlig: "\xDF",
          THORN: "\xDE",
          thorn: "\xFE",
          times: "\xD7",
          Uacute: "\xDA",
          uacute: "\xFA",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uml: "\xA8",
          Uuml: "\xDC",
          uuml: "\xFC",
          Yacute: "\xDD",
          yacute: "\xFD",
          yen: "\xA5",
          yuml: "\xFF",
        };
      },
    }),
    im = Ye({
      "../../node_modules/entities/lib/maps/xml.json"(e, t) {
        t.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
      },
    }),
    S8 = Ye({
      "../../node_modules/entities/lib/maps/decode.json"(e, t) {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      },
    }),
    w8 = Ye({
      "../../node_modules/entities/lib/decode_codepoint.js"(e) {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (o) {
            return o && o.__esModule ? o : { default: o };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = t(S8()),
          n =
            String.fromCodePoint ||
            function (o) {
              var i = "";
              return (
                o > 65535 &&
                  ((o -= 65536),
                  (i += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                  (o = 56320 | (o & 1023))),
                (i += String.fromCharCode(o)),
                i
              );
            };
        function a(o) {
          return (o >= 55296 && o <= 57343) || o > 1114111
            ? "\uFFFD"
            : (o in r.default && (o = r.default[o]), n(o));
        }
        e.default = a;
      },
    }),
    nm = Ye({
      "../../node_modules/entities/lib/decode.js"(e) {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (y) {
            return y && y.__esModule ? y : { default: y };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
        var r = t(om()),
          n = t(F8()),
          a = t(im()),
          o = t(w8()),
          i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        (e.decodeXML = u(a.default)), (e.decodeHTMLStrict = u(r.default));
        function u(y) {
          var A = d(y);
          return function (g) {
            return String(g).replace(i, A);
          };
        }
        var s = function (y, A) {
          return y < A ? 1 : -1;
        };
        e.decodeHTML = (function () {
          for (
            var y = Object.keys(n.default).sort(s),
              A = Object.keys(r.default).sort(s),
              g = 0,
              m = 0;
            g < A.length;
            g++
          )
            y[m] === A[g] ? ((A[g] += ";?"), m++) : (A[g] += ";");
          var E = new RegExp(
              "&(?:" + A.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)",
              "g"
            ),
            b = d(r.default);
          function x(S) {
            return S.substr(-1) !== ";" && (S += ";"), b(S);
          }
          return function (S) {
            return String(S).replace(E, x);
          };
        })();
        function d(y) {
          return function (A) {
            if (A.charAt(1) === "#") {
              var g = A.charAt(2);
              return g === "X" || g === "x"
                ? o.default(parseInt(A.substr(3), 16))
                : o.default(parseInt(A.substr(2), 10));
            }
            return y[A.slice(1, -1)] || A;
          };
        }
      },
    }),
    am = Ye({
      "../../node_modules/entities/lib/encode.js"(e) {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (P) {
            return P && P.__esModule ? P : { default: P };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0);
        var r = t(im()),
          n = s(r.default),
          a = d(n);
        e.encodeXML = S(n);
        var o = t(om()),
          i = s(o.default),
          u = d(i);
        (e.encodeHTML = m(i, u)), (e.encodeNonAsciiHTML = S(i));
        function s(P) {
          return Object.keys(P)
            .sort()
            .reduce(function (j, $) {
              return (j[P[$]] = "&" + $ + ";"), j;
            }, {});
        }
        function d(P) {
          for (
            var j = [], $ = [], w = 0, M = Object.keys(P);
            w < M.length;
            w++
          ) {
            var I = M[w];
            I.length === 1 ? j.push("\\" + I) : $.push(I);
          }
          j.sort();
          for (var U = 0; U < j.length - 1; U++) {
            for (
              var K = U;
              K < j.length - 1 &&
              j[K].charCodeAt(1) + 1 === j[K + 1].charCodeAt(1);

            )
              K += 1;
            var z = 1 + K - U;
            z < 3 || j.splice(U, z, j[U] + "-" + j[K]);
          }
          return (
            $.unshift("[" + j.join("") + "]"), new RegExp($.join("|"), "g")
          );
        }
        var y =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          A =
            String.prototype.codePointAt != null
              ? function (P) {
                  return P.codePointAt(0);
                }
              : function (P) {
                  return (
                    (P.charCodeAt(0) - 55296) * 1024 +
                    P.charCodeAt(1) -
                    56320 +
                    65536
                  );
                };
        function g(P) {
          return (
            "&#x" +
            (P.length > 1 ? A(P) : P.charCodeAt(0)).toString(16).toUpperCase() +
            ";"
          );
        }
        function m(P, j) {
          return function ($) {
            return $.replace(j, function (w) {
              return P[w];
            }).replace(y, g);
          };
        }
        var E = new RegExp(a.source + "|" + y.source, "g");
        function b(P) {
          return P.replace(E, g);
        }
        e.escape = b;
        function x(P) {
          return P.replace(a, g);
        }
        e.escapeUTF8 = x;
        function S(P) {
          return function (j) {
            return j.replace(E, function ($) {
              return P[$] || g($);
            });
          };
        }
      },
    }),
    B8 = Ye({
      "../../node_modules/entities/lib/index.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0);
        var t = nm(),
          r = am();
        function n(s, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTML)(s);
        }
        e.decode = n;
        function a(s, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
        }
        e.decodeStrict = a;
        function o(s, d) {
          return (!d || d <= 0 ? r.encodeXML : r.encodeHTML)(s);
        }
        e.encode = o;
        var i = am();
        Object.defineProperty(e, "encodeXML", {
          enumerable: !0,
          get: function () {
            return i.encodeXML;
          },
        }),
          Object.defineProperty(e, "encodeHTML", {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          }),
          Object.defineProperty(e, "encodeNonAsciiHTML", {
            enumerable: !0,
            get: function () {
              return i.encodeNonAsciiHTML;
            },
          }),
          Object.defineProperty(e, "escape", {
            enumerable: !0,
            get: function () {
              return i.escape;
            },
          }),
          Object.defineProperty(e, "escapeUTF8", {
            enumerable: !0,
            get: function () {
              return i.escapeUTF8;
            },
          }),
          Object.defineProperty(e, "encodeHTML4", {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          }),
          Object.defineProperty(e, "encodeHTML5", {
            enumerable: !0,
            get: function () {
              return i.encodeHTML;
            },
          });
        var u = nm();
        Object.defineProperty(e, "decodeXML", {
          enumerable: !0,
          get: function () {
            return u.decodeXML;
          },
        }),
          Object.defineProperty(e, "decodeHTML", {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTMLStrict", {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeHTML4", {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTML5", {
            enumerable: !0,
            get: function () {
              return u.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTML4Strict", {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeHTML5Strict", {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeXMLStrict", {
            enumerable: !0,
            get: function () {
              return u.decodeXML;
            },
          });
      },
    }),
    T8 = Ye({
      "../../node_modules/ansi-to-html/lib/ansi_to_html.js"(e, t) {
        "use strict";
        function r(O, T) {
          if (!(O instanceof T))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(O, T) {
          for (var q = 0; q < T.length; q++) {
            var W = T[q];
            (W.enumerable = W.enumerable || !1),
              (W.configurable = !0),
              "value" in W && (W.writable = !0),
              Object.defineProperty(O, W.key, W);
          }
        }
        function a(O, T, q) {
          return T && n(O.prototype, T), q && n(O, q), O;
        }
        function o(O) {
          if (typeof Symbol > "u" || O[Symbol.iterator] == null) {
            if (Array.isArray(O) || (O = i(O))) {
              var T = 0,
                q = function () {};
              return {
                s: q,
                n: function () {
                  return T >= O.length
                    ? { done: !0 }
                    : { done: !1, value: O[T++] };
                },
                e: function (me) {
                  throw me;
                },
                f: q,
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var W,
            X = !0,
            Y = !1,
            te;
          return {
            s: function () {
              W = O[Symbol.iterator]();
            },
            n: function () {
              var me = W.next();
              return (X = me.done), me;
            },
            e: function (me) {
              (Y = !0), (te = me);
            },
            f: function () {
              try {
                !X && W.return != null && W.return();
              } finally {
                if (Y) throw te;
              }
            },
          };
        }
        function i(O, T) {
          if (O) {
            if (typeof O == "string") return u(O, T);
            var q = Object.prototype.toString.call(O).slice(8, -1);
            if (
              (q === "Object" && O.constructor && (q = O.constructor.name),
              q === "Map" || q === "Set")
            )
              return Array.from(q);
            if (
              q === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)
            )
              return u(O, T);
          }
        }
        function u(O, T) {
          (T == null || T > O.length) && (T = O.length);
          for (var q = 0, W = new Array(T); q < T; q++) W[q] = O[q];
          return W;
        }
        var s = B8(),
          d = {
            fg: "#FFF",
            bg: "#000",
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: y(),
          };
        function y() {
          var O = {
            0: "#000",
            1: "#A00",
            2: "#0A0",
            3: "#A50",
            4: "#00A",
            5: "#A0A",
            6: "#0AA",
            7: "#AAA",
            8: "#555",
            9: "#F55",
            10: "#5F5",
            11: "#FF5",
            12: "#55F",
            13: "#F5F",
            14: "#5FF",
            15: "#FFF",
          };
          return (
            P(0, 5).forEach(function (T) {
              P(0, 5).forEach(function (q) {
                P(0, 5).forEach(function (W) {
                  return A(T, q, W, O);
                });
              });
            }),
            P(0, 23).forEach(function (T) {
              var q = T + 232,
                W = g(T * 10 + 8);
              O[q] = "#" + W + W + W;
            }),
            O
          );
        }
        function A(O, T, q, W) {
          var X = 16 + O * 36 + T * 6 + q,
            Y = O > 0 ? O * 40 + 55 : 0,
            te = T > 0 ? T * 40 + 55 : 0,
            me = q > 0 ? q * 40 + 55 : 0;
          W[X] = m([Y, te, me]);
        }
        function g(O) {
          for (var T = O.toString(16); T.length < 2; ) T = "0" + T;
          return T;
        }
        function m(O) {
          var T = [],
            q = o(O),
            W;
          try {
            for (q.s(); !(W = q.n()).done; ) {
              var X = W.value;
              T.push(g(X));
            }
          } catch (Y) {
            q.e(Y);
          } finally {
            q.f();
          }
          return "#" + T.join("");
        }
        function E(O, T, q, W) {
          var X;
          return (
            T === "text"
              ? (X = w(q, W))
              : T === "display"
              ? (X = x(O, q, W))
              : T === "xterm256"
              ? (X = U(O, W.colors[q]))
              : T === "rgb" && (X = b(O, q)),
            X
          );
        }
        function b(O, T) {
          T = T.substring(2).slice(0, -1);
          var q = +T.substr(0, 2),
            W = T.substring(5).split(";"),
            X = W.map(function (Y) {
              return ("0" + Number(Y).toString(16)).substr(-2);
            }).join("");
          return I(O, (q === 38 ? "color:#" : "background-color:#") + X);
        }
        function x(O, T, q) {
          T = parseInt(T, 10);
          var W = {
              "-1": function () {
                return "<br/>";
              },
              0: function () {
                return O.length && S(O);
              },
              1: function () {
                return M(O, "b");
              },
              3: function () {
                return M(O, "i");
              },
              4: function () {
                return M(O, "u");
              },
              8: function () {
                return I(O, "display:none");
              },
              9: function () {
                return M(O, "strike");
              },
              22: function () {
                return I(
                  O,
                  "font-weight:normal;text-decoration:none;font-style:normal"
                );
              },
              23: function () {
                return z(O, "i");
              },
              24: function () {
                return z(O, "u");
              },
              39: function () {
                return U(O, q.fg);
              },
              49: function () {
                return K(O, q.bg);
              },
              53: function () {
                return I(O, "text-decoration:overline");
              },
            },
            X;
          return (
            W[T]
              ? (X = W[T]())
              : 4 < T && T < 7
              ? (X = M(O, "blink"))
              : 29 < T && T < 38
              ? (X = U(O, q.colors[T - 30]))
              : 39 < T && T < 48
              ? (X = K(O, q.colors[T - 40]))
              : 89 < T && T < 98
              ? (X = U(O, q.colors[8 + (T - 90)]))
              : 99 < T && T < 108 && (X = K(O, q.colors[8 + (T - 100)])),
            X
          );
        }
        function S(O) {
          var T = O.slice(0);
          return (
            (O.length = 0),
            T.reverse()
              .map(function (q) {
                return "</" + q + ">";
              })
              .join("")
          );
        }
        function P(O, T) {
          for (var q = [], W = O; W <= T; W++) q.push(W);
          return q;
        }
        function j(O) {
          return function (T) {
            return (O === null || T.category !== O) && O !== "all";
          };
        }
        function $(O) {
          O = parseInt(O, 10);
          var T = null;
          return (
            O === 0
              ? (T = "all")
              : O === 1
              ? (T = "bold")
              : 2 < O && O < 5
              ? (T = "underline")
              : 4 < O && O < 7
              ? (T = "blink")
              : O === 8
              ? (T = "hide")
              : O === 9
              ? (T = "strike")
              : (29 < O && O < 38) || O === 39 || (89 < O && O < 98)
              ? (T = "foreground-color")
              : ((39 < O && O < 48) || O === 49 || (99 < O && O < 108)) &&
                (T = "background-color"),
            T
          );
        }
        function w(O, T) {
          return T.escapeXML ? s.encodeXML(O) : O;
        }
        function M(O, T, q) {
          return (
            q || (q = ""),
            O.push(T),
            "<".concat(T).concat(q ? ' style="'.concat(q, '"') : "", ">")
          );
        }
        function I(O, T) {
          return M(O, "span", T);
        }
        function U(O, T) {
          return M(O, "span", "color:" + T);
        }
        function K(O, T) {
          return M(O, "span", "background-color:" + T);
        }
        function z(O, T) {
          var q;
          if ((O.slice(-1)[0] === T && (q = O.pop()), q)) return "</" + T + ">";
        }
        function he(O, T, q) {
          var W = !1,
            X = 3;
          function Y() {
            return "";
          }
          function te(fe, Be) {
            return q("xterm256", Be), "";
          }
          function me(fe) {
            return T.newline ? q("display", -1) : q("text", fe), "";
          }
          function je(fe, Be) {
            (W = !0),
              Be.trim().length === 0 && (Be = "0"),
              (Be = Be.trimRight(";").split(";"));
            var nn = o(Be),
              uu;
            try {
              for (nn.s(); !(uu = nn.n()).done; ) {
                var Dy = uu.value;
                q("display", Dy);
              }
            } catch (vy) {
              nn.e(vy);
            } finally {
              nn.f();
            }
            return "";
          }
          function Me(fe) {
            return q("text", fe), "";
          }
          function Q(fe) {
            return q("rgb", fe), "";
          }
          var He = [
            { pattern: /^\x08+/, sub: Y },
            { pattern: /^\x1b\[[012]?K/, sub: Y },
            { pattern: /^\x1b\[\(B/, sub: Y },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: Q },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: te },
            { pattern: /^\n/, sub: me },
            { pattern: /^\r+\n/, sub: me },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: je },
            { pattern: /^\x1b\[\d?J/, sub: Y },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: Y },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: Y },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: Me },
          ];
          function B(fe, Be) {
            (Be > X && W) || ((W = !1), (O = O.replace(fe.pattern, fe.sub)));
          }
          var R = [],
            k = O,
            _ = k.length;
          e: for (; _ > 0; ) {
            for (var L = 0, H = 0, Ee = He.length; H < Ee; L = ++H) {
              var pe = He[L];
              if ((B(pe, L), O.length !== _)) {
                _ = O.length;
                continue e;
              }
            }
            if (O.length === _) break;
            R.push(0), (_ = O.length);
          }
          return R;
        }
        function re(O, T, q) {
          return (
            T !== "text" &&
              ((O = O.filter(j($(q)))),
              O.push({ token: T, data: q, category: $(q) })),
            O
          );
        }
        var J = (function () {
          function O(T) {
            r(this, O),
              (T = T || {}),
              T.colors && (T.colors = Object.assign({}, d.colors, T.colors)),
              (this.options = Object.assign({}, d, T)),
              (this.stack = []),
              (this.stickyStack = []);
          }
          return (
            a(O, [
              {
                key: "toHtml",
                value: function (T) {
                  var q = this;
                  T = typeof T == "string" ? [T] : T;
                  var W = this.stack,
                    X = this.options,
                    Y = [];
                  return (
                    this.stickyStack.forEach(function (te) {
                      var me = E(W, te.token, te.data, X);
                      me && Y.push(me);
                    }),
                    he(T.join(""), X, function (te, me) {
                      var je = E(W, te, me, X);
                      je && Y.push(je),
                        X.stream && (q.stickyStack = re(q.stickyStack, te, me));
                    }),
                    W.length && Y.push(S(W)),
                    Y.join("")
                  );
                },
              },
            ]),
            O
          );
        })();
        t.exports = J;
      },
    }),
    nQ = new Error("prepareAborted"),
    { AbortController: aQ } = globalThis;
  var { fetch: oQ } = ee;
  var { history: yQ, document: bQ } = ee;
  var I8 = Kf(T8()),
    { document: vQ } = ee;
  var N8 = ((e) => (
    (e.MAIN = "MAIN"),
    (e.NOPREVIEW = "NOPREVIEW"),
    (e.PREPARING_STORY = "PREPARING_STORY"),
    (e.PREPARING_DOCS = "PREPARING_DOCS"),
    (e.ERROR = "ERROR"),
    e
  ))(N8 || {});
  var CQ = new I8.default({ escapeXML: !0 });
  var { document: FQ } = ee;
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var j8 = Object.create,
    um = Object.defineProperty,
    M8 = Object.getOwnPropertyDescriptor,
    sm = Object.getOwnPropertyNames,
    q8 = Object.getPrototypeOf,
    L8 = Object.prototype.hasOwnProperty,
    Le = (e, t) =>
      function () {
        return (
          t || (0, e[sm(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    $8 = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of sm(t))
          !L8.call(e, a) &&
            a !== r &&
            um(e, a, {
              get: () => t[a],
              enumerable: !(n = M8(t, a)) || n.enumerable,
            });
      return e;
    },
    ta = (e, t, r) => (
      (r = e != null ? j8(q8(e)) : {}),
      $8(
        t || !e || !e.__esModule
          ? um(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    U8 = [
      "bubbles",
      "cancelBubble",
      "cancelable",
      "composed",
      "currentTarget",
      "defaultPrevented",
      "eventPhase",
      "isTrusted",
      "returnValue",
      "srcElement",
      "target",
      "timeStamp",
      "type",
    ],
    z8 = ["detail"];
  function lm(e) {
    let t = U8.filter((r) => e[r] !== void 0).reduce(
      (r, n) => ({ ...r, [n]: e[n] }),
      {}
    );
    return (
      e instanceof CustomEvent &&
        z8
          .filter((r) => e[r] !== void 0)
          .forEach((r) => {
            t[r] = e[r];
          }),
      t
    );
  }
  var xm = se(qr(), 1),
    mm = Le({
      "node_modules/has-symbols/shams.js"(e, t) {
        "use strict";
        t.exports = function () {
          if (
            typeof Symbol != "function" ||
            typeof Object.getOwnPropertySymbols != "function"
          )
            return !1;
          if (typeof Symbol.iterator == "symbol") return !0;
          var n = {},
            a = Symbol("test"),
            o = Object(a);
          if (
            typeof a == "string" ||
            Object.prototype.toString.call(a) !== "[object Symbol]" ||
            Object.prototype.toString.call(o) !== "[object Symbol]"
          )
            return !1;
          var i = 42;
          n[a] = i;
          for (a in n) return !1;
          if (
            (typeof Object.keys == "function" && Object.keys(n).length !== 0) ||
            (typeof Object.getOwnPropertyNames == "function" &&
              Object.getOwnPropertyNames(n).length !== 0)
          )
            return !1;
          var u = Object.getOwnPropertySymbols(n);
          if (
            u.length !== 1 ||
            u[0] !== a ||
            !Object.prototype.propertyIsEnumerable.call(n, a)
          )
            return !1;
          if (typeof Object.getOwnPropertyDescriptor == "function") {
            var s = Object.getOwnPropertyDescriptor(n, a);
            if (s.value !== i || s.enumerable !== !0) return !1;
          }
          return !0;
        };
      },
    }),
    gm = Le({
      "node_modules/has-symbols/index.js"(e, t) {
        "use strict";
        var r = typeof Symbol < "u" && Symbol,
          n = mm();
        t.exports = function () {
          return typeof r != "function" ||
            typeof Symbol != "function" ||
            typeof r("foo") != "symbol" ||
            typeof Symbol("bar") != "symbol"
            ? !1
            : n();
        };
      },
    }),
    H8 = Le({
      "node_modules/function-bind/implementation.js"(e, t) {
        "use strict";
        var r = "Function.prototype.bind called on incompatible ",
          n = Array.prototype.slice,
          a = Object.prototype.toString,
          o = "[object Function]";
        t.exports = function (u) {
          var s = this;
          if (typeof s != "function" || a.call(s) !== o)
            throw new TypeError(r + s);
          for (
            var d = n.call(arguments, 1),
              y,
              A = function () {
                if (this instanceof y) {
                  var x = s.apply(this, d.concat(n.call(arguments)));
                  return Object(x) === x ? x : this;
                } else return s.apply(u, d.concat(n.call(arguments)));
              },
              g = Math.max(0, s.length - d.length),
              m = [],
              E = 0;
            E < g;
            E++
          )
            m.push("$" + E);
          if (
            ((y = Function(
              "binder",
              "return function (" +
                m.join(",") +
                "){ return binder.apply(this,arguments); }"
            )(A)),
            s.prototype)
          ) {
            var b = function () {};
            (b.prototype = s.prototype),
              (y.prototype = new b()),
              (b.prototype = null);
          }
          return y;
        };
      },
    }),
    bi = Le({
      "node_modules/function-bind/index.js"(e, t) {
        "use strict";
        var r = H8();
        t.exports = Function.prototype.bind || r;
      },
    }),
    G8 = Le({
      "node_modules/has/src/index.js"(e, t) {
        "use strict";
        var r = bi();
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
      },
    }),
    ym = Le({
      "node_modules/get-intrinsic/index.js"(e, t) {
        "use strict";
        var r,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          i = function (re) {
            try {
              return a('"use strict"; return (' + re + ").constructor;")();
            } catch {}
          },
          u = Object.getOwnPropertyDescriptor;
        if (u)
          try {
            u({}, "");
          } catch {
            u = null;
          }
        var s = function () {
            throw new o();
          },
          d = u
            ? (function () {
                try {
                  return arguments.callee, s;
                } catch {
                  try {
                    return u(arguments, "callee").get;
                  } catch {
                    return s;
                  }
                }
              })()
            : s,
          y = gm()(),
          A =
            Object.getPrototypeOf ||
            function (re) {
              return re.__proto__;
            },
          g = {},
          m = typeof Uint8Array > "u" ? r : A(Uint8Array),
          E = {
            "%AggregateError%":
              typeof AggregateError > "u" ? r : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
            "%ArrayIteratorPrototype%": y ? A([][Symbol.iterator]()) : r,
            "%AsyncFromSyncIteratorPrototype%": r,
            "%AsyncFunction%": g,
            "%AsyncGenerator%": g,
            "%AsyncGeneratorFunction%": g,
            "%AsyncIteratorPrototype%": g,
            "%Atomics%": typeof Atomics > "u" ? r : Atomics,
            "%BigInt%": typeof BigInt > "u" ? r : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? r : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
            "%FinalizationRegistry%":
              typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
            "%Function%": a,
            "%GeneratorFunction%": g,
            "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": y ? A(A([][Symbol.iterator]())) : r,
            "%JSON%": typeof JSON == "object" ? JSON : r,
            "%Map%": typeof Map > "u" ? r : Map,
            "%MapIteratorPrototype%":
              typeof Map > "u" || !y ? r : A(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? r : Promise,
            "%Proxy%": typeof Proxy > "u" ? r : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? r : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? r : Set,
            "%SetIteratorPrototype%":
              typeof Set > "u" || !y ? r : A(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%":
              typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": y ? A(""[Symbol.iterator]()) : r,
            "%Symbol%": y ? Symbol : r,
            "%SyntaxError%": n,
            "%ThrowTypeError%": d,
            "%TypedArray%": m,
            "%TypeError%": o,
            "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
            "%Uint8ClampedArray%":
              typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
          },
          b = function re(J) {
            var O;
            if (J === "%AsyncFunction%") O = i("async function () {}");
            else if (J === "%GeneratorFunction%") O = i("function* () {}");
            else if (J === "%AsyncGeneratorFunction%")
              O = i("async function* () {}");
            else if (J === "%AsyncGenerator%") {
              var T = re("%AsyncGeneratorFunction%");
              T && (O = T.prototype);
            } else if (J === "%AsyncIteratorPrototype%") {
              var q = re("%AsyncGenerator%");
              q && (O = A(q.prototype));
            }
            return (E[J] = O), O;
          },
          x = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": [
              "AsyncGeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": [
              "GeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          S = bi(),
          P = G8(),
          j = S.call(Function.call, Array.prototype.concat),
          $ = S.call(Function.apply, Array.prototype.splice),
          w = S.call(Function.call, String.prototype.replace),
          M = S.call(Function.call, String.prototype.slice),
          I = S.call(Function.call, RegExp.prototype.exec),
          U =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          K = /\\(\\)?/g,
          z = function (J) {
            var O = M(J, 0, 1),
              T = M(J, -1);
            if (O === "%" && T !== "%")
              throw new n("invalid intrinsic syntax, expected closing `%`");
            if (T === "%" && O !== "%")
              throw new n("invalid intrinsic syntax, expected opening `%`");
            var q = [];
            return (
              w(J, U, function (W, X, Y, te) {
                q[q.length] = Y ? w(te, K, "$1") : X || W;
              }),
              q
            );
          },
          he = function (J, O) {
            var T = J,
              q;
            if ((P(x, T) && ((q = x[T]), (T = "%" + q[0] + "%")), P(E, T))) {
              var W = E[T];
              if ((W === g && (W = b(T)), typeof W > "u" && !O))
                throw new o(
                  "intrinsic " +
                    J +
                    " exists, but is not available. Please file an issue!"
                );
              return { alias: q, name: T, value: W };
            }
            throw new n("intrinsic " + J + " does not exist!");
          };
        t.exports = function (J, O) {
          if (typeof J != "string" || J.length === 0)
            throw new o("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && typeof O != "boolean")
            throw new o('"allowMissing" argument must be a boolean');
          if (I(/^%?[^%]*%?$/, J) === null)
            throw new n(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
            );
          var T = z(J),
            q = T.length > 0 ? T[0] : "",
            W = he("%" + q + "%", O),
            X = W.name,
            Y = W.value,
            te = !1,
            me = W.alias;
          me && ((q = me[0]), $(T, j([0, 1], me)));
          for (var je = 1, Me = !0; je < T.length; je += 1) {
            var Q = T[je],
              He = M(Q, 0, 1),
              B = M(Q, -1);
            if (
              (He === '"' ||
                He === "'" ||
                He === "`" ||
                B === '"' ||
                B === "'" ||
                B === "`") &&
              He !== B
            )
              throw new n(
                "property names with quotes must have matching quotes"
              );
            if (
              ((Q === "constructor" || !Me) && (te = !0),
              (q += "." + Q),
              (X = "%" + q + "%"),
              P(E, X))
            )
              Y = E[X];
            else if (Y != null) {
              if (!(Q in Y)) {
                if (!O)
                  throw new o(
                    "base intrinsic for " +
                      J +
                      " exists, but the property is not available."
                  );
                return;
              }
              if (u && je + 1 >= T.length) {
                var R = u(Y, Q);
                (Me = !!R),
                  Me && "get" in R && !("originalValue" in R.get)
                    ? (Y = R.get)
                    : (Y = Y[Q]);
              } else (Me = P(Y, Q)), (Y = Y[Q]);
              Me && !te && (E[X] = Y);
            }
          }
          return Y;
        };
      },
    }),
    W8 = Le({
      "node_modules/call-bind/index.js"(e, t) {
        "use strict";
        var r = bi(),
          n = ym(),
          a = n("%Function.prototype.apply%"),
          o = n("%Function.prototype.call%"),
          i = n("%Reflect.apply%", !0) || r.call(o, a),
          u = n("%Object.getOwnPropertyDescriptor%", !0),
          s = n("%Object.defineProperty%", !0),
          d = n("%Math.max%");
        if (s)
          try {
            s({}, "a", { value: 1 });
          } catch {
            s = null;
          }
        t.exports = function (g) {
          var m = i(r, o, arguments);
          if (u && s) {
            var E = u(m, "length");
            E.configurable &&
              s(m, "length", {
                value: 1 + d(0, g.length - (arguments.length - 1)),
              });
          }
          return m;
        };
        var y = function () {
          return i(r, a, arguments);
        };
        s ? s(t.exports, "apply", { value: y }) : (t.exports.apply = y);
      },
    }),
    V8 = Le({
      "node_modules/call-bind/callBound.js"(e, t) {
        "use strict";
        var r = ym(),
          n = W8(),
          a = n(r("String.prototype.indexOf"));
        t.exports = function (i, u) {
          var s = r(i, !!u);
          return typeof s == "function" && a(i, ".prototype.") > -1 ? n(s) : s;
        };
      },
    }),
    K8 = Le({
      "node_modules/has-tostringtag/shams.js"(e, t) {
        "use strict";
        var r = mm();
        t.exports = function () {
          return r() && !!Symbol.toStringTag;
        };
      },
    }),
    Y8 = Le({
      "node_modules/is-regex/index.js"(e, t) {
        "use strict";
        var r = V8(),
          n = K8()(),
          a,
          o,
          i,
          u;
        n &&
          ((a = r("Object.prototype.hasOwnProperty")),
          (o = r("RegExp.prototype.exec")),
          (i = {}),
          (s = function () {
            throw i;
          }),
          (u = { toString: s, valueOf: s }),
          typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = s));
        var s,
          d = r("Object.prototype.toString"),
          y = Object.getOwnPropertyDescriptor,
          A = "[object RegExp]";
        t.exports = n
          ? function (m) {
              if (!m || typeof m != "object") return !1;
              var E = y(m, "lastIndex"),
                b = E && a(E, "value");
              if (!b) return !1;
              try {
                o(m, u);
              } catch (x) {
                return x === i;
              }
            }
          : function (m) {
              return !m || (typeof m != "object" && typeof m != "function")
                ? !1
                : d(m) === A;
            };
      },
    }),
    X8 = Le({
      "node_modules/is-function/index.js"(e, t) {
        t.exports = n;
        var r = Object.prototype.toString;
        function n(a) {
          if (!a) return !1;
          var o = r.call(a);
          return (
            o === "[object Function]" ||
            (typeof a == "function" && o !== "[object RegExp]") ||
            (typeof window < "u" &&
              (a === window.setTimeout ||
                a === window.alert ||
                a === window.confirm ||
                a === window.prompt))
          );
        }
      },
    }),
    J8 = Le({
      "node_modules/is-symbol/index.js"(e, t) {
        "use strict";
        var r = Object.prototype.toString,
          n = gm()();
        n
          ? ((a = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (i = function (s) {
              return typeof s.valueOf() != "symbol" ? !1 : o.test(a.call(s));
            }),
            (t.exports = function (s) {
              if (typeof s == "symbol") return !0;
              if (r.call(s) !== "[object Symbol]") return !1;
              try {
                return i(s);
              } catch {
                return !1;
              }
            }))
          : (t.exports = function (s) {
              return !1;
            });
        var a, o, i;
      },
    }),
    Q8 = ta(Y8()),
    Z8 = ta(X8()),
    e_ = ta(J8());
  function t_(e) {
    return e != null && typeof e == "object" && Array.isArray(e) === !1;
  }
  var r_ =
      typeof window == "object" && window && window.Object === Object && window,
    n_ = r_,
    a_ = typeof self == "object" && self && self.Object === Object && self,
    o_ = n_ || a_ || Function("return this")(),
    Ai = o_,
    i_ = Ai.Symbol,
    lr = i_,
    bm = Object.prototype,
    u_ = bm.hasOwnProperty,
    s_ = bm.toString,
    Yr = lr ? lr.toStringTag : void 0;
  function l_(e) {
    var t = u_.call(e, Yr),
      r = e[Yr];
    try {
      e[Yr] = void 0;
      var n = !0;
    } catch {}
    var a = s_.call(e);
    return n && (t ? (e[Yr] = r) : delete e[Yr]), a;
  }
  var c_ = l_,
    p_ = Object.prototype,
    d_ = p_.toString;
  function f_(e) {
    return d_.call(e);
  }
  var h_ = f_,
    m_ = "[object Null]",
    g_ = "[object Undefined]",
    cm = lr ? lr.toStringTag : void 0;
  function y_(e) {
    return e == null
      ? e === void 0
        ? g_
        : m_
      : cm && cm in Object(e)
      ? c_(e)
      : h_(e);
  }
  var Am = y_;
  function b_(e) {
    return e != null && typeof e == "object";
  }
  var A_ = b_,
    E_ = "[object Symbol]";
  function D_(e) {
    return typeof e == "symbol" || (A_(e) && Am(e) == E_);
  }
  var Ei = D_;
  function v_(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e);
    return a;
  }
  var C_ = v_,
    x_ = Array.isArray,
    Di = x_,
    F_ = 1 / 0,
    pm = lr ? lr.prototype : void 0,
    dm = pm ? pm.toString : void 0;
  function Em(e) {
    if (typeof e == "string") return e;
    if (Di(e)) return C_(e, Em) + "";
    if (Ei(e)) return dm ? dm.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -F_ ? "-0" : t;
  }
  var S_ = Em;
  function w_(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Dm = w_,
    B_ = "[object AsyncFunction]",
    T_ = "[object Function]",
    __ = "[object GeneratorFunction]",
    O_ = "[object Proxy]";
  function R_(e) {
    if (!Dm(e)) return !1;
    var t = Am(e);
    return t == T_ || t == __ || t == B_ || t == O_;
  }
  var P_ = R_,
    I_ = Ai["__core-js_shared__"],
    yi = I_,
    fm = (function () {
      var e = /[^.]+$/.exec((yi && yi.keys && yi.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function k_(e) {
    return !!fm && fm in e;
  }
  var N_ = k_,
    j_ = Function.prototype,
    M_ = j_.toString;
  function q_(e) {
    if (e != null) {
      try {
        return M_.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var L_ = q_,
    $_ = /[\\^$.*+?()[\]{}|]/g,
    U_ = /^\[object .+?Constructor\]$/,
    z_ = Function.prototype,
    H_ = Object.prototype,
    G_ = z_.toString,
    W_ = H_.hasOwnProperty,
    V_ = RegExp(
      "^" +
        G_.call(W_)
          .replace($_, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function K_(e) {
    if (!Dm(e) || N_(e)) return !1;
    var t = P_(e) ? V_ : U_;
    return t.test(L_(e));
  }
  var Y_ = K_;
  function X_(e, t) {
    return e?.[t];
  }
  var J_ = X_;
  function Q_(e, t) {
    var r = J_(e, t);
    return Y_(r) ? r : void 0;
  }
  var vm = Q_;
  function Z_(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var e6 = Z_,
    t6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    r6 = /^\w*$/;
  function n6(e, t) {
    if (Di(e)) return !1;
    var r = typeof e;
    return r == "number" ||
      r == "symbol" ||
      r == "boolean" ||
      e == null ||
      Ei(e)
      ? !0
      : r6.test(e) || !t6.test(e) || (t != null && e in Object(t));
  }
  var a6 = n6,
    o6 = vm(Object, "create"),
    Xr = o6;
  function i6() {
    (this.__data__ = Xr ? Xr(null) : {}), (this.size = 0);
  }
  var u6 = i6;
  function s6(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var l6 = s6,
    c6 = "__lodash_hash_undefined__",
    p6 = Object.prototype,
    d6 = p6.hasOwnProperty;
  function f6(e) {
    var t = this.__data__;
    if (Xr) {
      var r = t[e];
      return r === c6 ? void 0 : r;
    }
    return d6.call(t, e) ? t[e] : void 0;
  }
  var h6 = f6,
    m6 = Object.prototype,
    g6 = m6.hasOwnProperty;
  function y6(e) {
    var t = this.__data__;
    return Xr ? t[e] !== void 0 : g6.call(t, e);
  }
  var b6 = y6,
    A6 = "__lodash_hash_undefined__";
  function E6(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = Xr && t === void 0 ? A6 : t),
      this
    );
  }
  var D6 = E6;
  function cr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  cr.prototype.clear = u6;
  cr.prototype.delete = l6;
  cr.prototype.get = h6;
  cr.prototype.has = b6;
  cr.prototype.set = D6;
  var hm = cr;
  function v6() {
    (this.__data__ = []), (this.size = 0);
  }
  var C6 = v6;
  function x6(e, t) {
    for (var r = e.length; r--; ) if (e6(e[r][0], t)) return r;
    return -1;
  }
  var ra = x6,
    F6 = Array.prototype,
    S6 = F6.splice;
  function w6(e) {
    var t = this.__data__,
      r = ra(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : S6.call(t, r, 1), --this.size, !0;
  }
  var B6 = w6;
  function T6(e) {
    var t = this.__data__,
      r = ra(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var _6 = T6;
  function O6(e) {
    return ra(this.__data__, e) > -1;
  }
  var R6 = O6;
  function P6(e, t) {
    var r = this.__data__,
      n = ra(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  var I6 = P6;
  function pr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  pr.prototype.clear = C6;
  pr.prototype.delete = B6;
  pr.prototype.get = _6;
  pr.prototype.has = R6;
  pr.prototype.set = I6;
  var k6 = pr,
    N6 = vm(Ai, "Map"),
    j6 = N6;
  function M6() {
    (this.size = 0),
      (this.__data__ = {
        hash: new hm(),
        map: new (j6 || k6)(),
        string: new hm(),
      });
  }
  var q6 = M6;
  function L6(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  var $6 = L6;
  function U6(e, t) {
    var r = e.__data__;
    return $6(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  var na = U6;
  function z6(e) {
    var t = na(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var H6 = z6;
  function G6(e) {
    return na(this, e).get(e);
  }
  var W6 = G6;
  function V6(e) {
    return na(this, e).has(e);
  }
  var K6 = V6;
  function Y6(e, t) {
    var r = na(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  var X6 = Y6;
  function dr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  dr.prototype.clear = q6;
  dr.prototype.delete = H6;
  dr.prototype.get = W6;
  dr.prototype.has = K6;
  dr.prototype.set = X6;
  var Cm = dr,
    J6 = "Expected a function";
  function vi(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
      throw new TypeError(J6);
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(a)) return o.get(a);
      var i = e.apply(this, n);
      return (r.cache = o.set(a, i) || o), i;
    };
    return (r.cache = new (vi.Cache || Cm)()), r;
  }
  vi.Cache = Cm;
  var Q6 = vi,
    Z6 = 500;
  function eO(e) {
    var t = Q6(e, function (n) {
        return r.size === Z6 && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var tO = eO,
    rO =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    nO = /\\(\\)?/g,
    aO = tO(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(rO, function (r, n, a, o) {
          t.push(a ? o.replace(nO, "$1") : n || r);
        }),
        t
      );
    }),
    oO = aO;
  function iO(e) {
    return e == null ? "" : S_(e);
  }
  var uO = iO;
  function sO(e, t) {
    return Di(e) ? e : a6(e, t) ? [e] : oO(uO(e));
  }
  var lO = sO,
    cO = 1 / 0;
  function pO(e) {
    if (typeof e == "string" || Ei(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -cO ? "-0" : t;
  }
  var dO = pO;
  function fO(e, t) {
    t = lO(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[dO(t[r++])];
    return r && r == n ? e : void 0;
  }
  var hO = fO;
  function mO(e, t, r) {
    var n = e == null ? void 0 : hO(e, t);
    return n === void 0 ? r : n;
  }
  var gO = mO,
    Ci = t_,
    yO = (e) => {
      let t = null,
        r = !1,
        n = !1,
        a = !1,
        o = "";
      if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
        for (let i = 0; i < e.length; i += 1)
          !t && !r && !n && !a
            ? e[i] === '"' || e[i] === "'" || e[i] === "`"
              ? (t = e[i])
              : e[i] === "/" && e[i + 1] === "*"
              ? (r = !0)
              : e[i] === "/" && e[i + 1] === "/"
              ? (n = !0)
              : e[i] === "/" && e[i + 1] !== "/" && (a = !0)
            : (t &&
                ((e[i] === t && e[i - 1] !== "\\") ||
                  (e[i] ===
                    `
` &&
                    t !== "`")) &&
                (t = null),
              a &&
                ((e[i] === "/" && e[i - 1] !== "\\") ||
                  e[i] ===
                    `
`) &&
                (a = !1),
              r && e[i - 1] === "/" && e[i - 2] === "*" && (r = !1),
              n &&
                e[i] ===
                  `
` &&
                (n = !1)),
            !r && !n && (o += e[i]);
      else o = e;
      return o;
    },
    bO = (0, xm.default)(1e4)((e) => yO(e).replace(/\n\s*/g, "").trim()),
    AO = function (t, r) {
      let n = r.slice(0, r.indexOf("{")),
        a = r.slice(r.indexOf("{"));
      if (n.includes("=>") || n.includes("function")) return r;
      let o = n;
      return (o = o.replace(t, "function")), o + a;
    },
    EO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
    Fm = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/);
  function Sm(e) {
    if (!Ci(e)) return e;
    let t = e,
      r = !1;
    return (
      typeof Event < "u" && e instanceof Event && ((t = lm(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a]);
        } catch {
          r = !0;
        }
        return n;
      }, {})),
      r ? t : e
    );
  }
  var DO = function (t) {
      let r, n, a, o;
      return function (u, s) {
        try {
          if (u === "")
            return (
              (o = []), (r = new Map([[s, "[]"]])), (n = new Map()), (a = []), s
            );
          let d = n.get(this) || this;
          for (; a.length && d !== a[0]; ) a.shift(), o.pop();
          if (typeof s == "boolean") return s;
          if (s === void 0) return t.allowUndefined ? "_undefined_" : void 0;
          if (s === null) return null;
          if (typeof s == "number")
            return s === -1 / 0
              ? "_-Infinity_"
              : s === 1 / 0
              ? "_Infinity_"
              : Number.isNaN(s)
              ? "_NaN_"
              : s;
          if (typeof s == "bigint") return `_bigint_${s.toString()}`;
          if (typeof s == "string")
            return EO.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
          if ((0, Q8.default)(s))
            return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
          if ((0, Z8.default)(s)) {
            if (!t.allowFunction) return;
            let { name: A } = s,
              g = s.toString();
            return g.match(
              /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
            )
              ? `_function_${A}|${(() => {}).toString()}`
              : `_function_${A}|${bO(AO(u, g))}`;
          }
          if ((0, e_.default)(s)) {
            if (!t.allowSymbol) return;
            let A = Symbol.keyFor(s);
            return A !== void 0
              ? `_gsymbol_${A}`
              : `_symbol_${s.toString().slice(7, -1)}`;
          }
          if (a.length >= t.maxDepth)
            return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
          if (s === this) return `_duplicate_${JSON.stringify(o)}`;
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== "Object" &&
            !Array.isArray(s) &&
            !t.allowClass
          )
            return;
          let y = r.get(s);
          if (!y) {
            let A = Array.isArray(s) ? s : Sm(s);
            if (
              s.constructor &&
              s.constructor.name &&
              s.constructor.name !== "Object" &&
              !Array.isArray(s) &&
              t.allowClass
            )
              try {
                Object.assign(A, { "_constructor-name_": s.constructor.name });
              } catch {}
            return (
              o.push(u),
              a.unshift(A),
              r.set(s, JSON.stringify(o)),
              s !== A && n.set(s, A),
              A
            );
          }
          return `_duplicate_${y}`;
        } catch {
          return;
        }
      };
    },
    vO = function reviver(options) {
      let refs = [],
        root;
      return function revive(key, value) {
        if (
          (key === "" &&
            ((root = value),
            refs.forEach(({ target: e, container: t, replacement: r }) => {
              let n = Fm(r) ? JSON.parse(r) : r.split(".");
              n.length === 0 ? (t[e] = root) : (t[e] = gO(root, n));
            })),
          key === "_constructor-name_")
        )
          return value;
        if (Ci(value) && value["_constructor-name_"] && options.allowFunction) {
          let e = value["_constructor-name_"];
          if (e !== "Object") {
            let t = new Function(
              `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`
            )();
            Object.setPrototypeOf(value, new t());
          }
          return delete value["_constructor-name_"], value;
        }
        if (
          typeof value == "string" &&
          value.startsWith("_function_") &&
          options.allowFunction
        ) {
          let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
            sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
          if (!options.lazyEval) return eval(`(${sourceSanitized})`);
          let result = (...args) => {
            let f = eval(`(${sourceSanitized})`);
            return f(...args);
          };
          return (
            Object.defineProperty(result, "toString", {
              value: () => sourceSanitized,
            }),
            Object.defineProperty(result, "name", { value: name }),
            result
          );
        }
        if (
          typeof value == "string" &&
          value.startsWith("_regexp_") &&
          options.allowRegExp
        ) {
          let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
          return new RegExp(t, e);
        }
        return typeof value == "string" &&
          value.startsWith("_date_") &&
          options.allowDate
          ? new Date(value.replace("_date_", ""))
          : typeof value == "string" && value.startsWith("_duplicate_")
          ? (refs.push({
              target: key,
              container: this,
              replacement: value.replace(/^_duplicate_/, ""),
            }),
            null)
          : typeof value == "string" &&
            value.startsWith("_symbol_") &&
            options.allowSymbol
          ? Symbol(value.replace("_symbol_", ""))
          : typeof value == "string" &&
            value.startsWith("_gsymbol_") &&
            options.allowSymbol
          ? Symbol.for(value.replace("_gsymbol_", ""))
          : typeof value == "string" && value === "_-Infinity_"
          ? -1 / 0
          : typeof value == "string" && value === "_Infinity_"
          ? 1 / 0
          : typeof value == "string" && value === "_NaN_"
          ? NaN
          : typeof value == "string" &&
            value.startsWith("_bigint_") &&
            typeof BigInt == "function"
          ? BigInt(value.replace("_bigint_", ""))
          : value;
      };
    },
    wm = {
      maxDepth: 10,
      space: void 0,
      allowFunction: !0,
      allowRegExp: !0,
      allowDate: !0,
      allowClass: !0,
      allowUndefined: !0,
      allowSymbol: !0,
      lazyEval: !0,
    },
    xi = (e, t = {}) => {
      let r = { ...wm, ...t };
      return JSON.stringify(Sm(e), DO(r), t.space);
    },
    CO = () => {
      let e = new Map();
      return function t(r) {
        Ci(r) &&
          Object.entries(r).forEach(([n, a]) => {
            a === "_undefined_"
              ? (r[n] = void 0)
              : e.get(a) || (e.set(a, !0), t(a));
          }),
          Array.isArray(r) &&
            r.forEach((n, a) => {
              n === "_undefined_"
                ? (e.set(n, !0), (r[a] = void 0))
                : e.get(n) || (e.set(n, !0), t(n));
            });
      };
    },
    xO = (e, t = {}) => {
      let r = { ...wm, ...t },
        n = JSON.parse(e, vO(r));
      return CO()(n), n;
    };
  var FO = se(sr(), 1),
    { document: zQ, location: HQ } = ee;
  var { FEATURES: nZ } = ee;
  l();
  c();
  p();
  G();
  G();
  G();
  G();
  var fy = se(Bt(), 1);
  G();
  G();
  G();
  l();
  c();
  p();
  var RO = se(Bt(), 1),
    IO = se(Mm(), 1);
  var PO = ((e) => (
    (e.JAVASCRIPT = "JavaScript"),
    (e.FLOW = "Flow"),
    (e.TYPESCRIPT = "TypeScript"),
    (e.UNKNOWN = "Unknown"),
    e
  ))(PO || {});
  var oa = (e) => {
    if (!e) return "";
    if (typeof e == "string") return e;
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
  };
  var qm = "storybook/docs",
    Nee = `${qm}/panel`;
  var kO = `${qm}/snippet-rendered`,
    Zr = ((e) => (
      (e.AUTO = "auto"), (e.CODE = "code"), (e.DYNAMIC = "dynamic"), e
    ))(Zr || {});
  G();
  G();
  G();
  G();
  G();
  G();
  G();
  G();
  le();
  ce();
  G();
  G();
  ce();
  G();
  G();
  G();
  G();
  G();
  G();
  le();
  G();
  ce();
  G();
  le();
  G();
  G();
  ce();
  G();
  G();
  G();
  var Y4 = N.div(ct, ({ theme: e }) => ({
      backgroundColor:
        e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
      borderRadius: e.appBorderRadius,
      border: `1px dashed ${e.appBorderColor}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      margin: "25px 0 40px",
      color: ue(0.3, e.color.defaultText),
      fontSize: e.typography.size.s2,
    })),
    zi = (e) =>
      h.createElement(Y4, {
        ...e,
        className: "docblock-emptyblock sb-unstyled",
      }),
    X4 = N(Er)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      lineHeight: "19px",
      margin: "25px 0 40px",
      borderRadius: e.appBorderRadius,
      boxShadow:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
          : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      "pre.prismjs": { padding: 20, background: "inherit" },
    })),
    J4 = N.div(({ theme: e }) => ({
      background: e.background.content,
      borderRadius: e.appBorderRadius,
      border: `1px solid ${e.appBorderColor}`,
      boxShadow:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
          : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      margin: "25px 0 40px",
      padding: "20px 20px 20px 22px",
    })),
    da = N.div(({ theme: e }) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      height: 17,
      marginTop: 1,
      width: "60%",
      [`&:first-child${Eu}`]: { margin: 0 },
    })),
    Q4 = () =>
      h.createElement(
        J4,
        null,
        h.createElement(da, null),
        h.createElement(da, { style: { width: "80%" } }),
        h.createElement(da, { style: { width: "30%" } }),
        h.createElement(da, { style: { width: "80%" } })
      ),
    Ji = ({
      isLoading: e,
      error: t,
      language: r,
      code: n,
      dark: a,
      format: o,
      ...i
    }) => {
      if (e) return h.createElement(Q4, null);
      if (t) return h.createElement(zi, null, t);
      let u = h.createElement(
        X4,
        {
          bordered: !0,
          copyable: !0,
          format: o,
          language: r,
          className: "docblock-source sb-unstyled",
          ...i,
        },
        n
      );
      if (typeof a > "u") return u;
      let s = a ? sn.dark : sn.light;
      return h.createElement(un, { theme: bu(s) }, u);
    };
  Ji.defaultProps = { format: !1 };
  var we = (e) =>
      `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
    Qi = 600,
    Qte = N.h1(ct, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: "32px",
      [`@media (min-width: ${Qi}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: "36px",
        marginBottom: "16px",
      },
    })),
    Zte = N.h2(ct, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: "20px",
      borderBottom: "none",
      marginBottom: 15,
      [`@media (min-width: ${Qi}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: "28px",
        marginBottom: 24,
      },
      color: ue(0.25, e.color.defaultText),
    })),
    ere = N.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          WebkitOverflowScrolling: "touch",
        },
        r = {
          margin: "20px 0 8px",
          padding: 0,
          cursor: "text",
          position: "relative",
          color: e.color.defaultText,
          "&:first-of-type": { marginTop: 0, paddingTop: 0 },
          "&:hover a.anchor": { textDecoration: "none" },
          "& code": { fontSize: "inherit" },
        },
        n = {
          lineHeight: 1,
          margin: "0 2px",
          padding: "3px 5px",
          whiteSpace: "nowrap",
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === "light"
              ? `1px solid ${e.color.mediumlight}`
              : `1px solid ${e.color.darker}`,
          color:
            e.base === "light"
              ? ue(0.1, e.color.defaultText)
              : ue(0.3, e.color.defaultText),
          backgroundColor:
            e.base === "light" ? e.color.lighter : e.color.border,
        };
      return {
        maxWidth: 1e3,
        width: "100%",
        [we("a")]: {
          ...t,
          fontSize: "inherit",
          lineHeight: "24px",
          color: e.color.secondary,
          textDecoration: "none",
          "&.absent": { color: "#cc0000" },
          "&.anchor": {
            display: "block",
            paddingLeft: 30,
            marginLeft: -30,
            cursor: "pointer",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [we("blockquote")]: {
          ...t,
          margin: "16px 0",
          borderLeft: `4px solid ${e.color.medium}`,
          padding: "0 15px",
          color: e.color.dark,
          "& > :first-of-type": { marginTop: 0 },
          "& > :last-child": { marginBottom: 0 },
        },
        [we("div")]: t,
        [we("dl")]: {
          ...t,
          margin: "16px 0",
          padding: 0,
          "& dt": {
            fontSize: "14px",
            fontWeight: "bold",
            fontStyle: "italic",
            padding: 0,
            margin: "16px 0 4px",
          },
          "& dt:first-of-type": { padding: 0 },
          "& dt > :first-of-type": { marginTop: 0 },
          "& dt > :last-child": { marginBottom: 0 },
          "& dd": { margin: "0 0 16px", padding: "0 15px" },
          "& dd > :first-of-type": { marginTop: 0 },
          "& dd > :last-child": { marginBottom: 0 },
        },
        [we("h1")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [we("h2")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [we("h3")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [we("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [we("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [we("h6")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.s2}px`,
          color: e.color.dark,
        },
        [we("hr")]: {
          border: "0 none",
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [we("img")]: { maxWidth: "100%" },
        [we("li")]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: "24px",
          "& + li": { marginTop: ".25em" },
          "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
          "& code": n,
        },
        [we("ol")]: {
          ...t,
          margin: "16px 0",
          paddingLeft: 30,
          "& :first-of-type": { marginTop: 0 },
          "& :last-child": { marginBottom: 0 },
        },
        [we("p")]: {
          ...t,
          margin: "16px 0",
          fontSize: e.typography.size.s2,
          lineHeight: "24px",
          color: e.color.defaultText,
          "& code": n,
        },
        [we("pre")]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          lineHeight: "18px",
          padding: "11px 1rem",
          whiteSpace: "pre-wrap",
          color: "inherit",
          borderRadius: 3,
          margin: "1rem 0",
          "&:not(.prismjs)": {
            background: "transparent",
            border: "none",
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          "& pre, &.prismjs": {
            padding: 15,
            margin: 0,
            whiteSpace: "pre-wrap",
            color: "inherit",
            fontSize: "13px",
            lineHeight: "19px",
            code: { color: "inherit", fontSize: "inherit" },
          },
          "& code": { whiteSpace: "pre" },
          "& code, & tt": { border: "none" },
        },
        [we("span")]: {
          ...t,
          "&.frame": {
            display: "block",
            overflow: "hidden",
            "& > span": {
              border: `1px solid ${e.color.medium}`,
              display: "block",
              float: "left",
              overflow: "hidden",
              margin: "13px 0 0",
              padding: 7,
              width: "auto",
            },
            "& span img": { display: "block", float: "left" },
            "& span span": {
              clear: "both",
              color: e.color.darkest,
              display: "block",
              padding: "5px 0 0",
            },
          },
          "&.align-center": {
            display: "block",
            overflow: "hidden",
            clear: "both",
            "& > span": {
              display: "block",
              overflow: "hidden",
              margin: "13px auto 0",
              textAlign: "center",
            },
            "& span img": { margin: "0 auto", textAlign: "center" },
          },
          "&.align-right": {
            display: "block",
            overflow: "hidden",
            clear: "both",
            "& > span": {
              display: "block",
              overflow: "hidden",
              margin: "13px 0 0",
              textAlign: "right",
            },
            "& span img": { margin: 0, textAlign: "right" },
          },
          "&.float-left": {
            display: "block",
            marginRight: 13,
            overflow: "hidden",
            float: "left",
            "& span": { margin: "13px 0 0" },
          },
          "&.float-right": {
            display: "block",
            marginLeft: 13,
            overflow: "hidden",
            float: "right",
            "& > span": {
              display: "block",
              overflow: "hidden",
              margin: "13px auto 0",
              textAlign: "right",
            },
          },
        },
        [we("table")]: {
          ...t,
          margin: "16px 0",
          fontSize: e.typography.size.s2,
          lineHeight: "24px",
          padding: 0,
          borderCollapse: "collapse",
          "& tr": {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          "& tr:nth-of-type(2n)": {
            backgroundColor:
              e.base === "dark" ? e.color.darker : e.color.lighter,
          },
          "& tr th": {
            fontWeight: "bold",
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: "6px 13px",
          },
          "& tr td": {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: "6px 13px",
          },
          "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
          "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
        },
        [we("ul")]: {
          ...t,
          margin: "16px 0",
          paddingLeft: 30,
          "& :first-of-type": { marginTop: 0 },
          "& :last-child": { marginBottom: 0 },
          listStyle: "disc",
        },
      };
    }),
    tre = N.div(({ theme: e }) => ({
      background: e.background.content,
      display: "flex",
      justifyContent: "center",
      padding: "4rem 20px",
      minHeight: "100vh",
      boxSizing: "border-box",
      [`@media (min-width: ${Qi}px)`]: {},
    }));
  var ma = (e) => ({
      borderRadius: e.appBorderRadius,
      background: e.background.content,
      boxShadow:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
          : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      border: `1px solid ${e.appBorderColor}`,
    }),
    Z4 = ({ zoom: e, resetZoom: t }) =>
      h.createElement(
        h.Fragment,
        null,
        h.createElement(
          nt,
          {
            key: "zoomin",
            onClick: (r) => {
              r.preventDefault(), e(0.8);
            },
            title: "Zoom in",
          },
          h.createElement(Fe, { icon: "zoom" })
        ),
        h.createElement(
          nt,
          {
            key: "zoomout",
            onClick: (r) => {
              r.preventDefault(), e(1.25);
            },
            title: "Zoom out",
          },
          h.createElement(Fe, { icon: "zoomout" })
        ),
        h.createElement(
          nt,
          {
            key: "zoomreset",
            onClick: (r) => {
              r.preventDefault(), t();
            },
            title: "Reset zoom",
          },
          h.createElement(Fe, { icon: "zoomreset" })
        )
      ),
    eR = N(wa)({
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      transition: "transform .2s linear",
    }),
    tR = ({
      isLoading: e,
      storyId: t,
      baseUrl: r,
      zoom: n,
      resetZoom: a,
      ...o
    }) =>
      h.createElement(
        eR,
        { ...o },
        h.createElement(
          lu,
          { key: "left" },
          e
            ? [1, 2, 3].map((i) => h.createElement(_a, { key: i }))
            : h.createElement(Z4, { zoom: n, resetZoom: a })
        )
      ),
    Vg = vt({ scale: 1 }),
    { window: rR } = ee,
    nR = class extends Ge {
      constructor() {
        super(...arguments), (this.iframe = null);
      }
      componentDidMount() {
        let { id: e } = this.props;
        this.iframe = rR.document.getElementById(e);
      }
      shouldComponentUpdate(e) {
        let { scale: t } = e;
        return (
          t !== this.props.scale &&
            this.setIframeBodyStyle({
              width: `${t * 100}%`,
              height: `${t * 100}%`,
              transform: `scale(${1 / t})`,
              transformOrigin: "top left",
            }),
          !1
        );
      }
      setIframeBodyStyle(e) {
        return Object.assign(this.iframe.contentDocument.body.style, e);
      }
      render() {
        let {
          id: e,
          title: t,
          src: r,
          allowFullScreen: n,
          scale: a,
          ...o
        } = this.props;
        return h.createElement("iframe", {
          id: e,
          title: t,
          src: r,
          ...(n ? { allow: "fullscreen" } : {}),
          loading: "lazy",
          ...o,
        });
      }
    },
    { PREVIEW_URL: aR } = ee,
    oR = aR || "iframe.html",
    Hi = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`,
    iR = (e) => {
      let t = xe(),
        [r, n] = Z(!0),
        [a, o] = Z(),
        {
          story: i,
          height: u,
          autoplay: s,
          forceInitialArgs: d,
          renderStoryToElement: y,
        } = e;
      oe(() => {
        if (!(i && t.current)) return () => {};
        let g = t.current,
          m = y(
            i,
            g,
            {
              showMain: () => {},
              showError: ({ title: E, description: b }) =>
                o(new Error(`${E} - ${b}`)),
              showException: (E) => o(E),
            },
            { autoplay: s, forceInitialArgs: d }
          );
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => m());
          }
        );
      }, [s, y, i]);
      let A = "<span></span>";
      return a
        ? h.createElement("pre", null, h.createElement(Sa, { error: a }))
        : h.createElement(
            h.Fragment,
            null,
            u
              ? h.createElement(
                  "style",
                  null,
                  `${Hi(
                    e
                  )} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && h.createElement(Zi, null),
            h.createElement("div", {
              ref: t,
              id: `${Hi(e)}-inner`,
              "data-name": i.name,
              dangerouslySetInnerHTML: { __html: A },
            })
          );
    },
    uR = ({ story: e, height: t = "500px" }) =>
      h.createElement(
        "div",
        { style: { width: "100%", height: t } },
        h.createElement(Vg.Consumer, null, ({ scale: r }) =>
          h.createElement(nR, {
            key: "iframe",
            id: `iframe--${e.id}`,
            title: e.name,
            src: ja(oR, e.id, { viewMode: "story" }),
            allowFullScreen: !0,
            scale: r,
            style: { width: "100%", height: "100%", border: "0 none" },
          })
        )
      ),
    sR = (e) => {
      let { inline: t } = e;
      return h.createElement(
        "div",
        { id: Hi(e), className: "sb-story sb-unstyled" },
        t ? h.createElement(iR, { ...e }) : h.createElement(uR, { ...e })
      );
    },
    Zi = () => h.createElement(Oa, null),
    lR = N.div(
      ({ isColumn: e, columns: t, layout: r }) => ({
        display: e || !t ? "block" : "flex",
        position: "relative",
        flexWrap: "wrap",
        overflow: "auto",
        flexDirection: e ? "column" : "row",
        "& .innerZoomElementWrapper > *": e
          ? {
              width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
              display: "block",
            }
          : {
              maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
              display: "inline-block",
            },
      }),
      ({ layout: e = "padded" }) =>
        e === "centered" || e === "padded"
          ? {
              padding: "30px 20px",
              margin: -10,
              "& .innerZoomElementWrapper > *": {
                width: "auto",
                border: "10px solid transparent!important",
              },
            }
          : {},
      ({ layout: e = "padded" }) =>
        e === "centered"
          ? {
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
            }
          : {},
      ({ columns: e }) =>
        e && e > 1
          ? {
              ".innerZoomElementWrapper > *": {
                minWidth: `calc(100% / ${e} - 20px)`,
              },
            }
          : {}
    ),
    Pg = N(Ji)(({ theme: e }) => ({
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: e.appBorderRadius,
      borderBottomRightRadius: e.appBorderRadius,
      border: "none",
      background:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.85)"
          : Ue(0.05, e.background.content),
      color: e.color.lightest,
      button: {
        background:
          e.base === "light"
            ? "rgba(0, 0, 0, 0.85)"
            : Ue(0.05, e.background.content),
      },
    })),
    cR = N.div(
      ({ theme: e, withSource: t, isExpanded: r }) => ({
        position: "relative",
        overflow: "hidden",
        margin: "25px 0 40px",
        ...ma(e),
        borderBottomLeftRadius: t && r && 0,
        borderBottomRightRadius: t && r && 0,
        borderBottomWidth: r && 0,
        "h3 + &": { marginTop: "16px" },
      }),
      ({ withToolbar: e }) => e && { paddingTop: 40 }
    ),
    pR = (e, t, r) => {
      switch (!0) {
        case !!(e && e.error):
          return {
            source: null,
            actionItem: {
              title: "No code available",
              className: "docblock-code-toggle docblock-code-toggle--disabled",
              disabled: !0,
              onClick: () => r(!1),
            },
          };
        case t:
          return {
            source: h.createElement(Pg, { ...e, dark: !0 }),
            actionItem: {
              title: "Hide code",
              className: "docblock-code-toggle docblock-code-toggle--expanded",
              onClick: () => r(!1),
            },
          };
        default:
          return {
            source: h.createElement(Pg, { ...e, dark: !0 }),
            actionItem: {
              title: "Show code",
              className: "docblock-code-toggle",
              onClick: () => r(!0),
            },
          };
      }
    };
  function dR(e) {
    if (br.count(e) === 1) {
      let t = e;
      if (t.props) return t.props.id;
    }
    return null;
  }
  var fR = N(tR)({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 40,
    }),
    hR = N.div({ overflow: "hidden", position: "relative" }),
    Gi = ({
      isLoading: e,
      isColumn: t,
      columns: r,
      children: n,
      withSource: a,
      withToolbar: o = !1,
      isExpanded: i = !1,
      additionalActions: u,
      className: s,
      layout: d = "padded",
      ...y
    }) => {
      let [A, g] = Z(i),
        { source: m, actionItem: E } = pR(a, A, g),
        [b, x] = Z(1),
        S = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
        P = a ? [E] : [],
        [j, $] = Z(u ? [...u] : []),
        w = [...P, ...j],
        { window: M } = ee,
        I = de(async (K) => {
          let { createCopyToClipboardFunction: z } =
            await Promise.resolve().then(() => (le(), yu));
          z();
        }, []),
        U = (K) => {
          let z = M.getSelection();
          (z && z.type === "Range") ||
            (K.preventDefault(),
            j.filter((he) => he.title === "Copied").length === 0 &&
              I(m.props.code).then(() => {
                $([...j, { title: "Copied", onClick: () => {} }]),
                  M.setTimeout(
                    () => $(j.filter((he) => he.title !== "Copied")),
                    1500
                  );
              }));
        };
      return h.createElement(
        cR,
        { withSource: a, withToolbar: o, ...y, className: S.join(" ") },
        o &&
          h.createElement(fR, {
            isLoading: e,
            border: !0,
            zoom: (K) => x(b * K),
            resetZoom: () => x(1),
            storyId: dR(n),
            baseUrl: "./iframe.html",
          }),
        h.createElement(
          Vg.Provider,
          { value: { scale: b } },
          h.createElement(
            hR,
            { className: "docs-story", onCopyCapture: a && U },
            h.createElement(
              lR,
              { isColumn: t || !Array.isArray(n), columns: r, layout: d },
              h.createElement(
                ka.Element,
                { scale: b },
                Array.isArray(n)
                  ? n.map((K, z) => h.createElement("div", { key: z }, K))
                  : h.createElement("div", null, n)
              )
            ),
            h.createElement(Ca, { actionItems: w })
          )
        ),
        a && A && m
      );
    },
    mR = N(Gi)(() => ({
      ".docs-story": { paddingTop: 32, paddingBottom: 40 },
    })),
    gR = () =>
      h.createElement(
        mR,
        { isLoading: !0, withToolbar: !0 },
        h.createElement(Zi, null)
      ),
    yR = N.table(({ theme: e }) => ({
      "&&": {
        borderCollapse: "collapse",
        borderSpacing: 0,
        border: "none",
        tr: { border: "none !important", background: "none" },
        "td, th": { padding: 0, border: "none", width: "auto!important" },
        marginTop: 0,
        marginBottom: 0,
        "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
        "th:last-of-type, td:last-of-type": { paddingRight: 0 },
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 },
        },
        tbody: { boxShadow: "none", border: "none" },
        code: lt({ theme: e }),
        div: { span: { fontWeight: "bold" } },
        "& code": {
          margin: 0,
          display: "inline-block",
          fontSize: e.typography.size.s1,
        },
      },
    })),
    bR = ({ tags: e }) => {
      let t = (e.params || []).filter((o) => o.description),
        r = t.length !== 0,
        n = e.deprecated != null,
        a = e.returns != null && e.returns.description != null;
      return !r && !a && !n
        ? null
        : h.createElement(
            h.Fragment,
            null,
            h.createElement(
              yR,
              null,
              h.createElement(
                "tbody",
                null,
                n &&
                  h.createElement(
                    "tr",
                    { key: "deprecated" },
                    h.createElement(
                      "td",
                      { colSpan: 2 },
                      h.createElement("strong", null, "Deprecated"),
                      ": ",
                      e.deprecated
                    )
                  ),
                r &&
                  t.map((o) =>
                    h.createElement(
                      "tr",
                      { key: o.name },
                      h.createElement(
                        "td",
                        null,
                        h.createElement("code", null, o.name)
                      ),
                      h.createElement("td", null, o.description)
                    )
                  ),
                a &&
                  h.createElement(
                    "tr",
                    { key: "returns" },
                    h.createElement(
                      "td",
                      null,
                      h.createElement("code", null, "Returns")
                    ),
                    h.createElement("td", null, e.returns.description)
                  )
              )
            )
          );
    },
    Wi = 8,
    Ig = N.div(({ isExpanded: e }) => ({
      display: "flex",
      flexDirection: e ? "column" : "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      marginBottom: "-4px",
      minWidth: 100,
    })),
    AR = N.span(lt, ({ theme: e, simple: t = !1 }) => ({
      flex: "0 0 auto",
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      wordBreak: "break-word",
      whiteSpace: "normal",
      maxWidth: "100%",
      margin: 0,
      marginRight: "4px",
      marginBottom: "4px",
      paddingTop: "2px",
      paddingBottom: "2px",
      lineHeight: "13px",
      ...(t && { background: "transparent", border: "0 none", paddingLeft: 0 }),
    })),
    ER = N.button(({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      marginBottom: "4px",
      background: "none",
      border: "none",
    })),
    DR = N.div(lt, ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      fontSize: e.typography.size.s1,
      margin: 0,
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
    })),
    vR = N.div(({ theme: e, width: t }) => ({
      width: t,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      boxSizing: "content-box",
      "& code": { padding: "0 !important" },
    })),
    CR = N(Fe)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
    xR = () => h.createElement("span", null, "-"),
    Jg = ({ text: e, simple: t }) => h.createElement(AR, { simple: t }, e),
    FR = (0, Yg.default)(1e3)((e) => {
      let t = e.split(/\r?\n/);
      return `${Math.max(...t.map((r) => r.length))}ch`;
    }),
    SR = (e) => {
      if (!e) return [e];
      let t = e.split("|").map((r) => r.trim());
      return (0, Xg.default)(t);
    },
    kg = (e, t = !0) => {
      let r = e;
      return (
        t || (r = e.slice(0, Wi)),
        r.map((n) => h.createElement(Jg, { key: n, text: n === "" ? '""' : n }))
      );
    },
    wR = ({ value: e, initialExpandedArgs: t }) => {
      let { summary: r, detail: n } = e,
        [a, o] = Z(!1),
        [i, u] = Z(t || !1);
      if (r == null) return null;
      let s = typeof r.toString == "function" ? r.toString() : r;
      if (n == null) {
        if (/[(){}[\]<>]/.test(s)) return h.createElement(Jg, { text: s });
        let d = SR(s),
          y = d.length;
        return y > Wi
          ? h.createElement(
              Ig,
              { isExpanded: i },
              kg(d, i),
              h.createElement(
                ER,
                { onClick: () => u(!i) },
                i ? "Show less..." : `Show ${y - Wi} more...`
              )
            )
          : h.createElement(Ig, null, kg(d));
      }
      return h.createElement(
        Ia,
        {
          closeOnOutsideClick: !0,
          placement: "bottom",
          visible: a,
          onVisibleChange: (d) => {
            o(d);
          },
          tooltip: h.createElement(
            vR,
            { width: FR(n) },
            h.createElement(Er, { language: "jsx", format: !1 }, n)
          ),
        },
        h.createElement(
          DR,
          { className: "sbdocs-expandable" },
          h.createElement("span", null, s),
          h.createElement(CR, { icon: a ? "arrowup" : "arrowdown" })
        )
      );
    },
    qi = ({ value: e, initialExpandedArgs: t }) =>
      e == null
        ? h.createElement(xR, null)
        : h.createElement(wR, { value: e, initialExpandedArgs: t }),
    BR = N.label(({ theme: e }) => ({
      lineHeight: "18px",
      alignItems: "center",
      marginBottom: 8,
      display: "inline-block",
      position: "relative",
      whiteSpace: "nowrap",
      background: e.boolean.background,
      borderRadius: "3em",
      padding: 1,
      input: {
        appearance: "none",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: "3em",
        "&:focus": {
          outline: "none",
          boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
        },
      },
      span: {
        textAlign: "center",
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: "1",
        cursor: "pointer",
        display: "inline-block",
        padding: "7px 15px",
        transition: "all 100ms ease-out",
        userSelect: "none",
        borderRadius: "3em",
        color: ue(0.5, e.color.defaultText),
        background: "transparent",
        "&:hover": {
          boxShadow: `${Fr(0.3, e.appBorderColor)} 0 0 0 1px inset`,
        },
        "&:active": {
          boxShadow: `${Fr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
          color: Fr(1, e.appBorderColor),
        },
        "&:first-of-type": { paddingRight: 8 },
        "&:last-of-type": { paddingLeft: 8 },
      },
      "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":
        {
          background: e.boolean.selectedBackground,
          boxShadow:
            e.base === "light"
              ? `${Fr(0.1, e.appBorderColor)} 0 0 2px`
              : `${e.appBorderColor} 0 0 0 1px`,
          color: e.color.defaultText,
          padding: "7px 15px",
        },
    })),
    TR = (e) => e === "true",
    _R = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
      let o = de(() => r(!1), [r]);
      if (t === void 0)
        return h.createElement(
          Se.Button,
          { id: Dr(e), onClick: o },
          "Set boolean"
        );
      let i = ke(e),
        u = typeof t == "string" ? TR(t) : t;
      return h.createElement(
        BR,
        { htmlFor: i, title: u ? "Change to false" : "Change to true" },
        h.createElement("input", {
          id: i,
          type: "checkbox",
          onChange: (s) => r(s.target.checked),
          checked: u,
          name: e,
          onBlur: n,
          onFocus: a,
        }),
        h.createElement("span", null, "False"),
        h.createElement("span", null, "True")
      );
    },
    OR = (e) => {
      let [t, r, n] = e.split("-"),
        a = new Date();
      return (
        a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
      );
    },
    RR = (e) => {
      let [t, r] = e.split(":"),
        n = new Date();
      return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
    },
    PR = (e) => {
      let t = new Date(e),
        r = `000${t.getFullYear()}`.slice(-4),
        n = `0${t.getMonth() + 1}`.slice(-2),
        a = `0${t.getDate()}`.slice(-2);
      return `${r}-${n}-${a}`;
    },
    IR = (e) => {
      let t = new Date(e),
        r = `0${t.getHours()}`.slice(-2),
        n = `0${t.getMinutes()}`.slice(-2);
      return `${r}:${n}`;
    },
    kR = N.div(({ theme: e }) => ({
      flex: 1,
      display: "flex",
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        "&::-webkit-calendar-picker-indicator": {
          opacity: 0.5,
          height: 12,
          filter: e.base === "light" ? void 0 : "invert(1)",
        },
      },
      "input:first-of-type": { marginLeft: 0, flexGrow: 4 },
      "input:last-of-type": { flexGrow: 3 },
    })),
    NR = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
      let [o, i] = Z(!0),
        u = xe(),
        s = xe();
      oe(() => {
        o !== !1 &&
          (u && u.current && (u.current.value = PR(t)),
          s && s.current && (s.current.value = IR(t)));
      }, [t]);
      let d = (g) => {
          let m = OR(g.target.value),
            E = new Date(t);
          E.setFullYear(m.getFullYear(), m.getMonth(), m.getDate());
          let b = E.getTime();
          b && r(b), i(!!b);
        },
        y = (g) => {
          let m = RR(g.target.value),
            E = new Date(t);
          E.setHours(m.getHours()), E.setMinutes(m.getMinutes());
          let b = E.getTime();
          b && r(b), i(!!b);
        },
        A = ke(e);
      return h.createElement(
        kR,
        null,
        h.createElement(Se.Input, {
          type: "date",
          max: "9999-12-31",
          ref: u,
          id: `${A}-date`,
          name: `${A}-date`,
          onChange: d,
          onFocus: n,
          onBlur: a,
        }),
        h.createElement(Se.Input, {
          type: "time",
          id: `${A}-time`,
          name: `${A}-time`,
          ref: s,
          onChange: y,
          onFocus: n,
          onBlur: a,
        }),
        o ? null : h.createElement("div", null, "invalid")
      );
    },
    jR = N.label({ display: "flex" }),
    MR = (e) => {
      let t = parseFloat(e);
      return Number.isNaN(t) ? void 0 : t;
    };
  var qR = ({
      name: e,
      value: t,
      onChange: r,
      min: n,
      max: a,
      step: o,
      onBlur: i,
      onFocus: u,
    }) => {
      let [s, d] = Z(typeof t == "number" ? t : ""),
        [y, A] = Z(!1),
        [g, m] = Z(null),
        E = de(
          (S) => {
            d(S.target.value);
            let P = parseFloat(S.target.value);
            Number.isNaN(P)
              ? m(new Error(`'${S.target.value}' is not a number`))
              : (r(P), m(null));
          },
          [r, m]
        ),
        b = de(() => {
          d("0"), r(0), A(!0);
        }, [A]),
        x = xe(null);
      return (
        oe(() => {
          y && x.current && x.current.select();
        }, [y]),
        oe(() => {
          s !== (typeof t == "number" ? t : "") && d(t);
        }, [t]),
        !y && t === void 0
          ? h.createElement(Se.Button, { id: Dr(e), onClick: b }, "Set number")
          : h.createElement(
              jR,
              null,
              h.createElement(Se.Input, {
                ref: x,
                id: ke(e),
                type: "number",
                onChange: E,
                size: "flex",
                placeholder: "Edit number...",
                value: s,
                valid: g ? "error" : null,
                autoFocus: y,
                name: e,
                min: n,
                max: a,
                step: o,
                onFocus: u,
                onBlur: i,
              })
            )
      );
    },
    Qg = (e, t) => {
      let r = t && Object.entries(t).find(([n, a]) => a === e);
      return r ? r[0] : void 0;
    },
    Vi = (e, t) =>
      e && t
        ? Object.entries(t)
            .filter((r) => e.includes(r[1]))
            .map((r) => r[0])
        : [],
    Zg = (e, t) => e && t && e.map((r) => t[r]),
    LR = N.div(({ isInline: e }) =>
      e
        ? {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            label: { display: "inline-flex", marginRight: 15 },
          }
        : { label: { display: "flex" } }
    ),
    $R = N.span({}),
    UR = N.label({
      lineHeight: "20px",
      alignItems: "center",
      marginBottom: 8,
      "&:last-child": { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Ng = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          ve.warn(`Checkbox with no options: ${e}`),
          h.createElement(h.Fragment, null, "-")
        );
      let o = Vi(r, t),
        [i, u] = Z(o),
        s = (y) => {
          let A = y.target.value,
            g = [...i];
          g.includes(A) ? g.splice(g.indexOf(A), 1) : g.push(A),
            n(Zg(g, t)),
            u(g);
        };
      oe(() => {
        u(Vi(r, t));
      }, [r]);
      let d = ke(e);
      return h.createElement(
        LR,
        { isInline: a },
        Object.keys(t).map((y, A) => {
          let g = `${d}-${A}`;
          return h.createElement(
            UR,
            { key: g, htmlFor: g },
            h.createElement("input", {
              type: "checkbox",
              id: g,
              name: g,
              value: y,
              onChange: s,
              checked: i?.includes(y),
            }),
            h.createElement($R, null, y)
          );
        })
      );
    },
    zR = N.div(({ isInline: e }) =>
      e
        ? {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            label: { display: "inline-flex", marginRight: 15 },
          }
        : { label: { display: "flex" } }
    ),
    HR = N.span({}),
    GR = N.label({
      lineHeight: "20px",
      alignItems: "center",
      marginBottom: 8,
      "&:last-child": { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    jg = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          ve.warn(`Radio with no options: ${e}`),
          h.createElement(h.Fragment, null, "-")
        );
      let o = Qg(r, t),
        i = ke(e);
      return h.createElement(
        zR,
        { isInline: a },
        Object.keys(t).map((u, s) => {
          let d = `${i}-${s}`;
          return h.createElement(
            GR,
            { key: d, htmlFor: d },
            h.createElement("input", {
              type: "radio",
              id: d,
              name: d,
              value: u,
              onChange: (y) => n(t[y.currentTarget.value]),
              checked: u === o,
            }),
            h.createElement(HR, null, u)
          );
        })
      );
    },
    WR = {
      appearance: "none",
      border: "0 none",
      boxSizing: "inherit",
      display: " block",
      margin: " 0",
      background: "transparent",
      padding: 0,
      fontSize: "inherit",
      position: "relative",
    },
    ey = N.select(({ theme: e }) => ({
      ...WR,
      boxSizing: "border-box",
      position: "relative",
      padding: "6px 10px",
      width: "100%",
      color: e.input.color || "inherit",
      background: e.input.background,
      borderRadius: e.input.borderRadius,
      boxShadow: `${e.input.border} 0 0 0 1px inset`,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: "20px",
      "&:focus": {
        boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
        outline: "none",
      },
      "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
      "::placeholder": { color: e.textMutedColor },
      "&[multiple]": {
        overflow: "auto",
        padding: 0,
        option: {
          display: "block",
          padding: "6px 10px",
          marginLeft: 1,
          marginRight: 1,
        },
      },
    })),
    ty = N.span(({ theme: e }) => ({
      display: "inline-block",
      lineHeight: "normal",
      overflow: "hidden",
      position: "relative",
      verticalAlign: "top",
      width: "100%",
      svg: {
        position: "absolute",
        zIndex: 1,
        pointerEvents: "none",
        height: "12px",
        marginTop: "-6px",
        right: "12px",
        top: "50%",
        fill: e.textMutedColor,
        path: { fill: e.textMutedColor },
      },
    })),
    Mg = "Choose option...",
    VR = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (u) => {
          n(r[u.currentTarget.value]);
        },
        o = Qg(t, r) || Mg,
        i = ke(e);
      return h.createElement(
        ty,
        null,
        h.createElement(Fe, { icon: "arrowdown" }),
        h.createElement(
          ey,
          { id: i, value: o, onChange: a },
          h.createElement("option", { key: "no-selection", disabled: !0 }, Mg),
          Object.keys(r).map((u) => h.createElement("option", { key: u }, u))
        )
      );
    },
    KR = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (u) => {
          let s = Array.from(u.currentTarget.options)
            .filter((d) => d.selected)
            .map((d) => d.value);
          n(Zg(s, r));
        },
        o = Vi(t, r),
        i = ke(e);
      return h.createElement(
        ty,
        null,
        h.createElement(
          ey,
          { id: i, multiple: !0, value: o, onChange: a },
          Object.keys(r).map((u) => h.createElement("option", { key: u }, u))
        )
      );
    },
    qg = (e) => {
      let { name: t, options: r } = e;
      return r
        ? e.isMulti
          ? h.createElement(KR, { ...e })
          : h.createElement(VR, { ...e })
        : (ve.warn(`Select with no options: ${t}`),
          h.createElement(h.Fragment, null, "-"));
    },
    YR = (e, t) =>
      Array.isArray(e)
        ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
        : e,
    XR = {
      check: Ng,
      "inline-check": Ng,
      radio: jg,
      "inline-radio": jg,
      select: qg,
      "multi-select": qg,
    },
    gr = (e) => {
      let { type: t = "select", labels: r, argType: n } = e,
        a = {
          ...e,
          options: n ? YR(n.options, r) : {},
          isInline: t.includes("inline"),
          isMulti: t.includes("multi"),
        },
        o = XR[t];
      if (o) return h.createElement(o, { ...a });
      throw new Error(`Unknown options type: ${t}`);
    },
    eu = "value",
    JR = "key",
    QR = "Error",
    ZR = "Object",
    e9 = "Array",
    t9 = "String",
    r9 = "Number",
    n9 = "Boolean",
    a9 = "Date",
    o9 = "Null",
    i9 = "Undefined",
    u9 = "Function",
    s9 = "Symbol",
    ny = "ADD_DELTA_TYPE",
    ay = "REMOVE_DELTA_TYPE",
    oy = "UPDATE_DELTA_TYPE";
  function Dt(e) {
    return e !== null &&
      typeof e == "object" &&
      !Array.isArray(e) &&
      typeof e[Symbol.iterator] == "function"
      ? "Iterable"
      : Object.prototype.toString.call(e).slice(8, -1);
  }
  function iy(e, t) {
    let r = Dt(e),
      n = Dt(t);
    return (r === "Function" || n === "Function") && n !== r;
  }
  var tu = class extends Ge {
    constructor(e) {
      super(e),
        (this.state = { inputRefKey: null, inputRefValue: null }),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this));
    }
    componentDidMount() {
      let { inputRefKey: e, inputRefValue: t } = this.state,
        { onlyValue: r } = this.props;
      e && typeof e.focus == "function" && e.focus(),
        r && t && typeof t.focus == "function" && t.focus(),
        document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") &&
          (e.preventDefault(), this.onSubmit()),
        (e.code === "Escape" || e.key === "Escape") &&
          (e.preventDefault(), this.props.handleCancel()));
    }
    onSubmit() {
      let {
          handleAdd: e,
          onlyValue: t,
          onSubmitValueParser: r,
          keyPath: n,
          deep: a,
        } = this.props,
        { inputRefKey: o, inputRefValue: i } = this.state,
        u = {};
      if (!t) {
        if (!o.value) return;
        u.key = o.value;
      }
      (u.newValue = r(!1, n, a, u.key, i.value)), e(u);
    }
    refInputKey(e) {
      this.state.inputRefKey = e;
    }
    refInputValue(e) {
      this.state.inputRefValue = e;
    }
    render() {
      let {
          handleCancel: e,
          onlyValue: t,
          addButtonElement: r,
          cancelButtonElement: n,
          inputElementGenerator: a,
          keyPath: o,
          deep: i,
        } = this.props,
        u = De(r, { onClick: this.onSubmit }),
        s = De(n, { onClick: e }),
        d = a(eu, o, i),
        y = De(d, { placeholder: "Value", ref: this.refInputValue }),
        A = null;
      if (!t) {
        let g = a(JR, o, i);
        A = De(g, { placeholder: "Key", ref: this.refInputKey });
      }
      return h.createElement(
        "span",
        { className: "rejt-add-value-node" },
        A,
        y,
        s,
        u
      );
    }
  };
  tu.defaultProps = {
    onlyValue: !1,
    addButtonElement: h.createElement("button", null, "+"),
    cancelButtonElement: h.createElement("button", null, "c"),
  };
  var uy = class extends Ge {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        o = n.length;
      a(n[o - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleRemoveItem(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e];
        t(e, a, o, i)
          .then(() => {
            let u = { keyPath: a, deep: o, key: e, oldValue: i, type: ay };
            n.splice(e, 1), this.setState({ data: n });
            let { onUpdate: s, onDeltaUpdate: d } = this.props;
            s(a[a.length - 1], n), d(u);
          })
          .catch(r.error);
      };
    }
    handleAddValueAdd({ newValue: e }) {
      let { data: t, keyPath: r, nextDeep: n } = this.state,
        { beforeAddAction: a, logger: o } = this.props;
      a(t.length, r, n, e)
        .then(() => {
          let i = [...t, e];
          this.setState({ data: i }), this.handleAddValueCancel();
          let { onUpdate: u, onDeltaUpdate: s } = this.props;
          u(r[r.length - 1], i),
            s({
              type: ny,
              keyPath: r,
              deep: n,
              key: i.length - 1,
              newValue: e,
            });
        })
        .catch(o.error);
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: u } = this.state,
          s = o[e];
        a(e, i, u, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            let { onUpdate: d, onDeltaUpdate: y } = this.props;
            d(i[i.length - 1], o),
              y({
                type: oy,
                keyPath: i,
                deep: u,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r(void 0);
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          getStyle: i,
          dataType: u,
          minusMenuElement: s,
        } = this.props,
        { minus: d, collapsed: y } = i(e, t, r, n, u),
        A = o(e, t, r, n, u),
        g = De(s, { onClick: a, className: "rejt-minus-menu", style: d });
      return h.createElement(
        "span",
        { className: "rejt-collapsed" },
        h.createElement(
          "span",
          {
            className: "rejt-collapsed-text",
            style: y,
            onClick: this.handleCollapseMode,
          },
          "[...] ",
          t.length,
          " ",
          t.length === 1 ? "item" : "items"
        ),
        !A && g
      );
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          addFormVisible: a,
          nextDeep: o,
        } = this.state,
        {
          isCollapsed: i,
          handleRemove: u,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          dataType: A,
          addButtonElement: g,
          cancelButtonElement: m,
          editButtonElement: E,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: S,
          plusMenuElement: P,
          beforeRemoveAction: j,
          beforeAddAction: $,
          beforeUpdateAction: w,
          logger: M,
          onSubmitValueParser: I,
        } = this.props,
        {
          minus: U,
          plus: K,
          delimiter: z,
          ul: he,
          addForm: re,
        } = y(e, t, r, n, A),
        J = d(e, t, r, n, A),
        O = De(P, {
          onClick: this.handleAddMode,
          className: "rejt-plus-menu",
          style: K,
        }),
        T = De(S, { onClick: u, className: "rejt-minus-menu", style: U }),
        q = !0,
        W = "[",
        X = "]";
      return h.createElement(
        "span",
        { className: "rejt-not-collapsed" },
        h.createElement(
          "span",
          { className: "rejt-not-collapsed-delimiter", style: z },
          W
        ),
        !a && O,
        h.createElement(
          "ul",
          { className: "rejt-not-collapsed-list", style: he },
          t.map((Y, te) =>
            h.createElement(ga, {
              key: te,
              name: `${te}`,
              data: Y,
              keyPath: r,
              deep: o,
              isCollapsed: i,
              handleRemove: this.handleRemoveItem(te),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: d,
              getStyle: y,
              addButtonElement: g,
              cancelButtonElement: m,
              editButtonElement: E,
              inputElementGenerator: b,
              textareaElementGenerator: x,
              minusMenuElement: S,
              plusMenuElement: P,
              beforeRemoveAction: j,
              beforeAddAction: $,
              beforeUpdateAction: w,
              logger: M,
              onSubmitValueParser: I,
            })
          )
        ),
        !J &&
          a &&
          h.createElement(
            "div",
            { className: "rejt-add-form", style: re },
            h.createElement(tu, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: q,
              addButtonElement: g,
              cancelButtonElement: m,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        h.createElement(
          "span",
          { className: "rejt-not-collapsed-delimiter", style: z },
          X
        ),
        !J && T
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { dataType: o, getStyle: i } = this.props,
        u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = i(e, r, n, a, o);
      return h.createElement(
        "div",
        { className: "rejt-array-node" },
        h.createElement(
          "span",
          { onClick: this.handleCollapseMode },
          h.createElement(
            "span",
            { className: "rejt-name", style: s.name },
            e,
            " :",
            " "
          )
        ),
        u
      );
    }
  };
  uy.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: h.createElement("span", null, " - "),
    plusMenuElement: h.createElement("span", null, " + "),
  };
  var sy = class extends Ge {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        { readOnly: i, dataType: u } = this.props,
        s = i(r, n, a, o, u);
      e && !s && typeof t.focus == "function" && t.focus();
    }
    componentDidMount() {
      document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === "Escape" || e.key === "Escape") &&
          (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: u } = this.state;
      if (!o) return;
      let s = n(!0, a, u, i, o.value);
      e({ value: s, key: i })
        .then(() => {
          iy(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: u,
          dataType: s,
          getStyle: d,
          editButtonElement: y,
          cancelButtonElement: A,
          textareaElementGenerator: g,
          minusMenuElement: m,
          keyPath: E,
        } = this.props,
        b = d(e, i, n, a, s),
        x = null,
        S = null,
        P = u(e, i, n, a, s);
      if (r && !P) {
        let j = g(eu, E, a, e, i, s),
          $ = De(y, { onClick: this.handleEdit }),
          w = De(A, { onClick: this.handleCancelEdit }),
          M = De(j, { ref: this.refInput, defaultValue: i });
        (x = h.createElement(
          "span",
          { className: "rejt-edit-form", style: b.editForm },
          M,
          " ",
          w,
          $
        )),
          (S = null);
      } else {
        x = h.createElement(
          "span",
          {
            className: "rejt-value",
            style: b.value,
            onClick: P ? null : this.handleEditMode,
          },
          t
        );
        let j = De(m, {
          onClick: o,
          className: "rejt-minus-menu",
          style: b.minus,
        });
        S = P ? null : j;
      }
      return h.createElement(
        "li",
        { className: "rejt-function-value-node", style: b.li },
        h.createElement(
          "span",
          { className: "rejt-name", style: b.name },
          e,
          " :",
          " "
        ),
        x,
        S
      );
    }
  };
  sy.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: h.createElement("button", null, "e"),
    cancelButtonElement: h.createElement("button", null, "c"),
    minusMenuElement: h.createElement("span", null, " - "),
  };
  var ga = class extends Ge {
    constructor(e) {
      super(e),
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: e.keyPath,
          deep: e.deep,
        });
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    render() {
      let { data: e, name: t, keyPath: r, deep: n } = this.state,
        {
          isCollapsed: a,
          handleRemove: o,
          handleUpdateValue: i,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          addButtonElement: A,
          cancelButtonElement: g,
          editButtonElement: m,
          inputElementGenerator: E,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: S,
          beforeRemoveAction: P,
          beforeAddAction: j,
          beforeUpdateAction: $,
          logger: w,
          onSubmitValueParser: M,
        } = this.props,
        I = () => !0,
        U = Dt(e);
      switch (U) {
        case QR:
          return h.createElement(Ki, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: I,
            dataType: U,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: j,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: M,
          });
        case ZR:
          return h.createElement(Ki, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: d,
            dataType: U,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: j,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: M,
          });
        case e9:
          return h.createElement(uy, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: d,
            dataType: U,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: j,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: M,
          });
        case t9:
          return h.createElement(Et, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case r9:
          return h.createElement(Et, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case n9:
          return h.createElement(Et, {
            name: t,
            value: e ? "true" : "false",
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case a9:
          return h.createElement(Et, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: I,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case o9:
          return h.createElement(Et, {
            name: t,
            value: "null",
            originalValue: "null",
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case i9:
          return h.createElement(Et, {
            name: t,
            value: "undefined",
            originalValue: "undefined",
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case u9:
          return h.createElement(sy, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: m,
            textareaElementGenerator: b,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        case s9:
          return h.createElement(Et, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: I,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: m,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: M,
          });
        default:
          return null;
      }
    }
  };
  ga.defaultProps = { keyPath: [], deep: 0 };
  var Ki = class extends Ge {
    constructor(e) {
      super(e);
      let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
      (this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        o = n.length;
      a(n[o - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleAddValueAdd({ key: e, newValue: t }) {
      let { data: r, keyPath: n, nextDeep: a } = this.state,
        { beforeAddAction: o, logger: i } = this.props;
      o(e, n, a, t)
        .then(() => {
          (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
          let { onUpdate: u, onDeltaUpdate: s } = this.props;
          u(n[n.length - 1], r),
            s({ type: ny, keyPath: n, deep: a, key: e, newValue: t });
        })
        .catch(i.error);
    }
    handleRemoveValue(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e];
        t(e, a, o, i)
          .then(() => {
            let u = { keyPath: a, deep: o, key: e, oldValue: i, type: ay };
            delete n[e], this.setState({ data: n });
            let { onUpdate: s, onDeltaUpdate: d } = this.props;
            s(a[a.length - 1], n), d(u);
          })
          .catch(r.error);
      };
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: u } = this.state,
          s = o[e];
        a(e, i, u, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            let { onUpdate: d, onDeltaUpdate: y } = this.props;
            d(i[i.length - 1], o),
              y({
                type: oy,
                keyPath: i,
                deep: u,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r();
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, keyPath: t, deep: r, data: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          dataType: i,
          getStyle: u,
          minusMenuElement: s,
        } = this.props,
        { minus: d, collapsed: y } = u(e, n, t, r, i),
        A = Object.getOwnPropertyNames(n),
        g = o(e, n, t, r, i),
        m = De(s, { onClick: a, className: "rejt-minus-menu", style: d });
      return h.createElement(
        "span",
        { className: "rejt-collapsed" },
        h.createElement(
          "span",
          {
            className: "rejt-collapsed-text",
            style: y,
            onClick: this.handleCollapseMode,
          },
          "{...}",
          " ",
          A.length,
          " ",
          A.length === 1 ? "key" : "keys"
        ),
        !g && m
      );
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          nextDeep: a,
          addFormVisible: o,
        } = this.state,
        {
          isCollapsed: i,
          handleRemove: u,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          dataType: A,
          addButtonElement: g,
          cancelButtonElement: m,
          editButtonElement: E,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: S,
          plusMenuElement: P,
          beforeRemoveAction: j,
          beforeAddAction: $,
          beforeUpdateAction: w,
          logger: M,
          onSubmitValueParser: I,
        } = this.props,
        {
          minus: U,
          plus: K,
          addForm: z,
          ul: he,
          delimiter: re,
        } = y(e, t, r, n, A),
        J = Object.getOwnPropertyNames(t),
        O = d(e, t, r, n, A),
        T = De(P, {
          onClick: this.handleAddMode,
          className: "rejt-plus-menu",
          style: K,
        }),
        q = De(S, { onClick: u, className: "rejt-minus-menu", style: U }),
        W = J.map((te) =>
          h.createElement(ga, {
            key: te,
            name: te,
            data: t[te],
            keyPath: r,
            deep: a,
            isCollapsed: i,
            handleRemove: this.handleRemoveValue(te),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: d,
            getStyle: y,
            addButtonElement: g,
            cancelButtonElement: m,
            editButtonElement: E,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: S,
            plusMenuElement: P,
            beforeRemoveAction: j,
            beforeAddAction: $,
            beforeUpdateAction: w,
            logger: M,
            onSubmitValueParser: I,
          })
        ),
        X = "{",
        Y = "}";
      return h.createElement(
        "span",
        { className: "rejt-not-collapsed" },
        h.createElement(
          "span",
          { className: "rejt-not-collapsed-delimiter", style: re },
          X
        ),
        !O && T,
        h.createElement(
          "ul",
          { className: "rejt-not-collapsed-list", style: he },
          W
        ),
        !O &&
          o &&
          h.createElement(
            "div",
            { className: "rejt-add-form", style: z },
            h.createElement(tu, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: g,
              cancelButtonElement: m,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        h.createElement(
          "span",
          { className: "rejt-not-collapsed-delimiter", style: re },
          Y
        ),
        !O && q
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { getStyle: o, dataType: i } = this.props,
        u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = o(e, r, n, a, i);
      return h.createElement(
        "div",
        { className: "rejt-object-node" },
        h.createElement(
          "span",
          { onClick: this.handleCollapseMode },
          h.createElement(
            "span",
            { className: "rejt-name", style: s.name },
            e,
            " :",
            " "
          )
        ),
        u
      );
    }
  };
  Ki.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: h.createElement("span", null, " - "),
    plusMenuElement: h.createElement("span", null, " + "),
  };
  var Et = class extends Ge {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        { readOnly: i, dataType: u } = this.props,
        s = i(r, n, a, o, u);
      e && !s && typeof t.focus == "function" && t.focus();
    }
    componentDidMount() {
      document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === "Escape" || e.key === "Escape") &&
          (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: u } = this.state;
      if (!o) return;
      let s = n(!0, a, u, i, o.value);
      e({ value: s, key: i })
        .then(() => {
          iy(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: u,
          dataType: s,
          getStyle: d,
          editButtonElement: y,
          cancelButtonElement: A,
          inputElementGenerator: g,
          minusMenuElement: m,
          keyPath: E,
        } = this.props,
        b = d(e, i, n, a, s),
        x = u(e, i, n, a, s),
        S = r && !x,
        P = g(eu, E, a, e, i, s),
        j = De(y, { onClick: this.handleEdit }),
        $ = De(A, { onClick: this.handleCancelEdit }),
        w = De(P, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
        M = De(m, { onClick: o, className: "rejt-minus-menu", style: b.minus });
      return h.createElement(
        "li",
        { className: "rejt-value-node", style: b.li },
        h.createElement(
          "span",
          { className: "rejt-name", style: b.name },
          e,
          " : "
        ),
        S
          ? h.createElement(
              "span",
              { className: "rejt-edit-form", style: b.editForm },
              w,
              " ",
              $,
              j
            )
          : h.createElement(
              "span",
              {
                className: "rejt-value",
                style: b.value,
                onClick: x ? null : this.handleEditMode,
              },
              String(t)
            ),
        !x && !S && M
      );
    }
  };
  Et.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: h.createElement("button", null, "e"),
    cancelButtonElement: h.createElement("button", null, "c"),
    minusMenuElement: h.createElement("span", null, " - "),
  };
  var l9 = {
      minus: { color: "red" },
      plus: { color: "green" },
      collapsed: { color: "grey" },
      delimiter: {},
      ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
      name: { color: "#2287CD" },
      addForm: {},
    },
    c9 = {
      minus: { color: "red" },
      plus: { color: "green" },
      collapsed: { color: "grey" },
      delimiter: {},
      ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
      name: { color: "#2287CD" },
      addForm: {},
    },
    p9 = {
      minus: { color: "red" },
      editForm: {},
      value: { color: "#7bba3d" },
      li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
      name: { color: "#2287CD" },
    };
  function d9(e) {
    let t = e;
    if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
    try {
      t = JSON.parse(e);
    } catch {}
    return t;
  }
  var ly = class extends Ge {
    constructor(e) {
      super(e),
        (this.state = { data: e.data, rootName: e.rootName }),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName
        ? { data: e.data, rootName: e.rootName }
        : null;
    }
    onUpdate(e, t) {
      this.setState({ data: t }), this.props.onFullyUpdate(t);
    }
    removeRoot() {
      this.onUpdate(null, null);
    }
    render() {
      let { data: e, rootName: t } = this.state,
        {
          isCollapsed: r,
          onDeltaUpdate: n,
          readOnly: a,
          getStyle: o,
          addButtonElement: i,
          cancelButtonElement: u,
          editButtonElement: s,
          inputElement: d,
          textareaElement: y,
          minusMenuElement: A,
          plusMenuElement: g,
          beforeRemoveAction: m,
          beforeAddAction: E,
          beforeUpdateAction: b,
          logger: x,
          onSubmitValueParser: S,
          fallback: P = null,
        } = this.props,
        j = Dt(e),
        $ = a;
      Dt(a) === "Boolean" && ($ = () => a);
      let w = d;
      d && Dt(d) !== "Function" && (w = () => d);
      let M = y;
      return (
        y && Dt(y) !== "Function" && (M = () => y),
        j === "Object" || j === "Array"
          ? h.createElement(
              "div",
              { className: "rejt-tree" },
              h.createElement(ga, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: $,
                getStyle: o,
                addButtonElement: i,
                cancelButtonElement: u,
                editButtonElement: s,
                inputElementGenerator: w,
                textareaElementGenerator: M,
                minusMenuElement: A,
                plusMenuElement: g,
                handleRemove: this.removeRoot,
                beforeRemoveAction: m,
                beforeAddAction: E,
                beforeUpdateAction: b,
                logger: x,
                onSubmitValueParser: S,
              })
            )
          : P
      );
    }
  };
  ly.defaultProps = {
    rootName: "root",
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case "Object":
        case "Error":
          return l9;
        case "Array":
          return c9;
        default:
          return p9;
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: { error: () => {} },
    onSubmitValueParser: (e, t, r, n, a) => d9(a),
    inputElement: () => h.createElement("input", null),
    textareaElement: () => h.createElement("textarea", null),
    fallback: null,
  };
  var { window: f9 } = ee,
    h9 = N.div(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" },
      ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed":
        { "& > svg": { opacity: 0, transition: "opacity 0.2s" } },
      ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed":
        { "& > svg": { opacity: 1 } },
      ".rejt-edit-form button": { display: "none" },
      ".rejt-add-form": { marginLeft: 10 },
      ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" },
      ".rejt-name": { lineHeight: "22px" },
      ".rejt-not-collapsed-delimiter": { lineHeight: "22px" },
      ".rejt-plus-menu": { marginLeft: 5 },
      ".rejt-object-node > span > *": { position: "relative", zIndex: 2 },
      ".rejt-object-node, .rejt-array-node": { position: "relative" },
      ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before":
        {
          content: '""',
          position: "absolute",
          top: 0,
          display: "block",
          width: "100%",
          marginLeft: "-1rem",
          padding: "0 4px 0 1rem",
          height: 22,
        },
      ".rejt-collapsed::before, .rejt-not-collapsed::before": {
        zIndex: 1,
        background: "transparent",
        borderRadius: 4,
        transition: "background 0.2s",
        pointerEvents: "none",
        opacity: 0.1,
      },
      ".rejt-object-node:hover, .rejt-array-node:hover": {
        "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": {
          background: e.color.secondary,
        },
      },
      ".rejt-collapsed::after, .rejt-not-collapsed::after": {
        content: '""',
        position: "absolute",
        display: "inline-block",
        pointerEvents: "none",
        width: 0,
        height: 0,
      },
      ".rejt-collapsed::after": {
        left: -8,
        top: 8,
        borderTop: "3px solid transparent",
        borderBottom: "3px solid transparent",
        borderLeft: "3px solid rgba(153,153,153,0.6)",
      },
      ".rejt-not-collapsed::after": {
        left: -10,
        top: 10,
        borderTop: "3px solid rgba(153,153,153,0.6)",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
      },
      ".rejt-value": {
        display: "inline-block",
        border: "1px solid transparent",
        borderRadius: 4,
        margin: "1px 0",
        padding: "0 4px",
        cursor: "text",
        color: e.color.defaultText,
      },
      ".rejt-value-node:hover > .rejt-value": {
        background: e.color.lighter,
        borderColor: e.appBorderColor,
      },
    })),
    Li = N.button(({ theme: e, primary: t }) => ({
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: t ? e.color.secondary : "transparent",
      color: t ? e.color.lightest : e.color.dark,
      fontWeight: t ? "bold" : "normal",
      cursor: "pointer",
      order: t ? "initial" : 9,
    })),
    Lg = N(Fe)(({ theme: e, icon: t, disabled: r }) => ({
      display: "inline-block",
      verticalAlign: "middle",
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: r ? "not-allowed" : "pointer",
      color: e.textMutedColor,
      "&:hover": r
        ? {}
        : { color: t === "subtract" ? e.color.negative : e.color.ancillary },
      "svg + &": { marginLeft: 0 },
    })),
    $g = N.input(({ theme: e, placeholder: t }) => ({
      outline: 0,
      margin: t ? 1 : "1px 0",
      padding: "3px 4px",
      color: e.color.defaultText,
      background: e.background.app,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 4,
      lineHeight: "14px",
      width: t === "Key" ? 80 : 120,
      "&:focus": { border: `1px solid ${e.color.secondary}` },
    })),
    m9 = N(nt)(({ theme: e }) => ({
      position: "absolute",
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: "0 3px",
      background: e.background.bar,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 3,
      color: e.textMutedColor,
      fontSize: "9px",
      fontWeight: "bold",
      textDecoration: "none",
      span: { marginLeft: 3, marginTop: 1 },
    })),
    g9 = N(Se.Textarea)(({ theme: e }) => ({
      flex: 1,
      padding: "7px 6px",
      fontFamily: e.typography.fonts.mono,
      fontSize: "12px",
      lineHeight: "18px",
      "&::placeholder": {
        fontFamily: e.typography.fonts.base,
        fontSize: "13px",
      },
      "&:placeholder-shown": { padding: "7px 10px" },
    })),
    y9 = {
      bubbles: !0,
      cancelable: !0,
      key: "Enter",
      code: "Enter",
      keyCode: 13,
    },
    b9 = (e) => {
      e.currentTarget.dispatchEvent(new f9.KeyboardEvent("keydown", y9));
    },
    A9 = (e) => {
      e.currentTarget.select();
    },
    E9 = (e) => () => ({
      name: { color: e.color.secondary },
      collapsed: { color: e.color.dark },
      ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 },
      li: { outline: 0 },
    }),
    Ug = ({ name: e, value: t, onChange: r }) => {
      let n = Du(),
        a = rt(() => t && (0, ry.default)(t), [t]),
        o = a != null,
        [i, u] = Z(!o),
        [s, d] = Z(null),
        y = de(
          (x) => {
            try {
              x && r(JSON.parse(x)), d(void 0);
            } catch (S) {
              d(S);
            }
          },
          [r]
        ),
        [A, g] = Z(!1),
        m = de(() => {
          r({}), g(!0);
        }, [g]),
        E = xe(null);
      if (
        (oe(() => {
          A && E.current && E.current.select();
        }, [A]),
        !o)
      )
        return h.createElement(
          Se.Button,
          { id: Dr(e), onClick: m },
          "Set object"
        );
      let b = h.createElement(g9, {
        ref: E,
        id: ke(e),
        name: e,
        defaultValue: t === null ? "" : JSON.stringify(t, null, 2),
        onBlur: (x) => y(x.target.value),
        placeholder: "Edit JSON string...",
        autoFocus: A,
        valid: s ? "error" : null,
      });
      return h.createElement(
        h9,
        null,
        ["Object", "Array"].includes(Dt(a)) &&
          h.createElement(
            m9,
            {
              href: "#",
              onClick: (x) => {
                x.preventDefault(), u((S) => !S);
              },
            },
            h.createElement(Fe, { icon: i ? "eyeclose" : "eye" }),
            h.createElement("span", null, "RAW")
          ),
        i
          ? b
          : h.createElement(ly, {
              data: a,
              rootName: e,
              onFullyUpdate: r,
              getStyle: E9(n),
              cancelButtonElement: h.createElement(
                Li,
                { type: "button" },
                "Cancel"
              ),
              editButtonElement: h.createElement(
                Li,
                { type: "submit" },
                "Save"
              ),
              addButtonElement: h.createElement(
                Li,
                { type: "submit", primary: !0 },
                "Save"
              ),
              plusMenuElement: h.createElement(Lg, { icon: "add" }),
              minusMenuElement: h.createElement(Lg, { icon: "subtract" }),
              inputElement: (x, S, P, j) =>
                j
                  ? h.createElement($g, { onFocus: A9, onBlur: b9 })
                  : h.createElement($g, null),
              fallback: b,
            })
      );
    },
    D9 = N.input(({ theme: e, min: t, max: r, value: n }) => ({
      "&": {
        width: "100%",
        backgroundColor: "transparent",
        appearance: "none",
      },
      "&::-webkit-slider-runnable-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: "100%",
        height: 6,
        cursor: "pointer",
      },
      "&::-webkit-slider-thumb": {
        marginTop: "-6px",
        width: 16,
        height: 16,
        border: `1px solid ${We(e.appBorderColor, 0.2)}`,
        borderRadius: "50px",
        boxShadow: `0 1px 3px 0px ${We(e.appBorderColor, 0.2)}`,
        cursor: "grab",
        appearance: "none",
        background: `${e.input.background}`,
        transition: "all 150ms ease-out",
        "&:hover": {
          background: `${Ue(0.05, e.input.background)}`,
          transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
          transition: "all 50ms ease-out",
        },
        "&:active": {
          background: `${e.input.background}`,
          transform: "scale3d(1, 1, 1) translateY(0px)",
          cursor: "grabbing",
        },
      },
      "&:focus": {
        outline: "none",
        "&::-webkit-slider-runnable-track": {
          borderColor: We(e.color.secondary, 0.4),
        },
        "&::-webkit-slider-thumb": {
          borderColor: e.color.secondary,
          boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
        },
      },
      "&::-moz-range-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: "100%",
        height: 6,
        cursor: "pointer",
        outline: "none",
      },
      "&::-moz-range-thumb": {
        width: 16,
        height: 16,
        border: `1px solid ${We(e.appBorderColor, 0.2)}`,
        borderRadius: "50px",
        boxShadow: `0 1px 3px 0px ${We(e.appBorderColor, 0.2)}`,
        cursor: "grab",
        background: `${e.input.background}`,
        transition: "all 150ms ease-out",
        "&:hover": {
          background: `${Ue(0.05, e.input.background)}`,
          transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
          transition: "all 50ms ease-out",
        },
        "&:active": {
          background: `${e.input.background}`,
          transform: "scale3d(1, 1, 1) translateY(0px)",
          cursor: "grabbing",
        },
      },
      "&::-ms-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        color: "transparent",
        width: "100%",
        height: "6px",
        cursor: "pointer",
      },
      "&::-ms-fill-lower": { borderRadius: 6 },
      "&::-ms-fill-upper": { borderRadius: 6 },
      "&::-ms-thumb": {
        width: 16,
        height: 16,
        background: `${e.input.background}`,
        border: `1px solid ${We(e.appBorderColor, 0.2)}`,
        borderRadius: 50,
        cursor: "grab",
        marginTop: 0,
      },
      "@supports (-ms-ime-align:auto)": {
        "input[type=range]": { margin: "0" },
      },
    })),
    cy = N.span({
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: "nowrap",
      fontFeatureSettings: "tnum",
      fontVariantNumeric: "tabular-nums",
    }),
    v9 = N(cy)(({ numberOFDecimalsPlaces: e, max: t }) => ({
      width: `${e + t.toString().length * 2 + 3}ch`,
      textAlign: "right",
      flexShrink: 0,
    })),
    C9 = N.div({ display: "flex", alignItems: "center", width: "100%" });
  function x9(e) {
    let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }
  var F9 = ({
      name: e,
      value: t,
      onChange: r,
      min: n = 0,
      max: a = 100,
      step: o = 1,
      onBlur: i,
      onFocus: u,
    }) => {
      let s = (A) => {
          r(MR(A.target.value));
        },
        d = t !== void 0,
        y = rt(() => x9(o), [o]);
      return h.createElement(
        C9,
        null,
        h.createElement(cy, null, n),
        h.createElement(D9, {
          id: ke(e),
          type: "range",
          onChange: s,
          name: e,
          value: t,
          min: n,
          max: a,
          step: o,
          onFocus: u,
          onBlur: i,
        }),
        h.createElement(
          v9,
          { numberOFDecimalsPlaces: y, max: a },
          `${d ? t.toFixed(y) : "--"}`,
          " / ",
          a
        )
      );
    },
    S9 = N.label({ display: "flex" }),
    w9 = N.div(({ isMaxed: e }) => ({
      marginLeft: "0.75rem",
      paddingTop: "0.35rem",
      color: e ? "red" : void 0,
    })),
    B9 = ({
      name: e,
      value: t,
      onChange: r,
      onFocus: n,
      onBlur: a,
      maxLength: o,
    }) => {
      let i = (A) => {
          r(A.target.value);
        },
        [u, s] = Z(!1),
        d = de(() => {
          r(""), s(!0);
        }, [s]);
      if (t === void 0)
        return h.createElement(
          Se.Button,
          { id: Dr(e), onClick: d },
          "Set string"
        );
      let y = typeof t == "string";
      return h.createElement(
        S9,
        null,
        h.createElement(Se.Textarea, {
          id: ke(e),
          maxLength: o,
          onChange: i,
          size: "flex",
          placeholder: "Edit string...",
          autoFocus: u,
          valid: y ? null : "error",
          name: e,
          value: y ? t : "",
          onFocus: n,
          onBlur: a,
        }),
        o &&
          h.createElement(
            w9,
            { isMaxed: t?.length === o },
            t?.length ?? 0,
            " / ",
            o
          )
      );
    },
    T9 = N(Se.Input)({ padding: 10 });
  function _9(e) {
    e.forEach((t) => {
      t.startsWith("blob:") && URL.revokeObjectURL(t);
    });
  }
  var O9 = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
      let a = xe(null);
      function o(i) {
        if (!i.target.files) return;
        let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
        e(u), _9(n);
      }
      return (
        oe(() => {
          n == null && a.current && (a.current.value = null);
        }, [n, t]),
        h.createElement(T9, {
          ref: a,
          id: ke(t),
          type: "file",
          name: t,
          multiple: !0,
          onChange: o,
          accept: r,
          size: "flex",
        })
      );
    },
    R9 = pu(() => Promise.resolve().then(() => (Rg(), Og))),
    P9 = (e) =>
      h.createElement(
        cu,
        { fallback: h.createElement("div", null) },
        h.createElement(R9, { ...e })
      ),
    I9 = {
      array: Ug,
      object: Ug,
      boolean: _R,
      color: P9,
      date: NR,
      number: qR,
      check: gr,
      "inline-check": gr,
      radio: gr,
      "inline-radio": gr,
      select: gr,
      "multi-select": gr,
      range: F9,
      text: B9,
      file: O9,
    },
    zg = () => h.createElement(h.Fragment, null, "-"),
    k9 = ({ row: e, arg: t, updateArgs: r }) => {
      let { key: n, control: a } = e,
        [o, i] = Z(!1),
        [u, s] = Z({ value: t });
      oe(() => {
        o || s({ value: t });
      }, [o, t]);
      let d = de((E) => (s({ value: E }), r({ [n]: E }), E), [r, n]),
        y = de(() => i(!1), []),
        A = de(() => i(!0), []);
      if (!a || a.disable) return h.createElement(zg, null);
      let g = {
          name: n,
          argType: e,
          value: u.value,
          onChange: d,
          onBlur: y,
          onFocus: A,
        },
        m = I9[a.type] || zg;
      return h.createElement(m, { ...g, ...a, controlType: a.type });
    },
    N9 = N.span({ fontWeight: "bold" }),
    j9 = N.span(({ theme: e }) => ({
      color: e.color.negative,
      fontFamily: e.typography.fonts.mono,
      cursor: "help",
    })),
    M9 = N.div(({ theme: e }) => ({
      "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
      code: {
        ...lt({ theme: e }),
        fontSize: 12,
        fontFamily: e.typography.fonts.mono,
      },
      "& code": { margin: 0, display: "inline-block" },
      "& pre > code": { whiteSpace: "pre-wrap" },
    })),
    q9 = N.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === "light"
          ? ue(0.1, e.color.defaultText)
          : ue(0.2, e.color.defaultText),
      marginTop: t ? 4 : 0,
    })),
    L9 = N.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === "light"
          ? ue(0.1, e.color.defaultText)
          : ue(0.2, e.color.defaultText),
      marginTop: t ? 12 : 0,
      marginBottom: 12,
    })),
    $9 = N.td(({ theme: e, expandable: t }) => ({
      paddingLeft: t ? "40px !important" : "20px !important",
    })),
    fa = (e) => {
      let {
          row: t,
          updateArgs: r,
          compact: n,
          expandable: a,
          initialExpandedArgs: o,
        } = e,
        { name: i, description: u } = t,
        s = t.table || {},
        d = s.type || t.type,
        y = s.defaultValue || t.defaultValue,
        A = t.type?.required,
        g = u != null && u !== "";
      return h.createElement(
        "tr",
        null,
        h.createElement(
          $9,
          { expandable: a },
          h.createElement(N9, null, i),
          A ? h.createElement(j9, { title: "Required" }, "*") : null
        ),
        n
          ? null
          : h.createElement(
              "td",
              null,
              g && h.createElement(M9, null, h.createElement(Pn, null, u)),
              s.jsDocTags != null
                ? h.createElement(
                    h.Fragment,
                    null,
                    h.createElement(
                      L9,
                      { hasDescription: g },
                      h.createElement(qi, { value: d, initialExpandedArgs: o })
                    ),
                    h.createElement(bR, { tags: s.jsDocTags })
                  )
                : h.createElement(
                    q9,
                    { hasDescription: g },
                    h.createElement(qi, { value: d, initialExpandedArgs: o })
                  )
            ),
        n
          ? null
          : h.createElement(
              "td",
              null,
              h.createElement(qi, { value: y, initialExpandedArgs: o })
            ),
        r ? h.createElement("td", null, h.createElement(k9, { ...e })) : null
      );
    },
    U9 = N(Fe)(({ theme: e }) => ({
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color:
        e.base === "light"
          ? ue(0.25, e.color.defaultText)
          : ue(0.3, e.color.defaultText),
      border: "none",
      display: "inline-block",
    })),
    z9 = N.span(({ theme: e }) => ({
      display: "flex",
      lineHeight: "20px",
      alignItems: "center",
    })),
    H9 = N.td(({ theme: e }) => ({
      position: "relative",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s1 - 1,
      color:
        e.base === "light"
          ? ue(0.4, e.color.defaultText)
          : ue(0.6, e.color.defaultText),
      background: `${e.background.app} !important`,
      "& ~ td": { background: `${e.background.app} !important` },
    })),
    G9 = N.td(({ theme: e }) => ({
      position: "relative",
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      background: e.background.app,
    })),
    W9 = N.td(() => ({ position: "relative" })),
    V9 = N.tr(({ theme: e }) => ({
      "&:hover > td": {
        backgroundColor: `${ot(0.005, e.background.app)} !important`,
        boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
        cursor: "row-resize",
      },
    })),
    Hg = N.button(() => ({
      background: "none",
      border: "none",
      padding: "0",
      font: "inherit",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      color: "transparent",
      cursor: "row-resize !important",
    })),
    $i = ({
      level: e = "section",
      label: t,
      children: r,
      initialExpanded: n = !0,
      colSpan: a = 3,
    }) => {
      let [o, i] = Z(n),
        u = e === "subsection" ? G9 : H9,
        s = r?.length || 0,
        d = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "",
        y = o ? "arrowdown" : "arrowright",
        A = `${o ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${
          s !== 1 ? "s" : ""
        }`;
      return h.createElement(
        h.Fragment,
        null,
        h.createElement(
          V9,
          { title: A },
          h.createElement(
            u,
            { colSpan: 1 },
            h.createElement(Hg, { onClick: (g) => i(!o), tabIndex: 0 }, A),
            h.createElement(z9, null, h.createElement(U9, { icon: y }), t)
          ),
          h.createElement(
            W9,
            { colSpan: a - 1 },
            h.createElement(
              Hg,
              {
                onClick: (g) => i(!o),
                tabIndex: -1,
                style: { outline: "none" },
              },
              A
            ),
            o ? null : d
          )
        ),
        o ? r : null
      );
    },
    K9 = N.table(
      ({ theme: e, compact: t, inAddonPanel: r }) => ({
        "&&": {
          borderSpacing: 0,
          color: e.color.defaultText,
          "td, th": {
            padding: 0,
            border: "none",
            verticalAlign: "top",
            textOverflow: "ellipsis",
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: "20px",
          textAlign: "left",
          width: "100%",
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          "thead th:first-of-type, td:first-of-type": { width: "25%" },
          "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
          "th:nth-of-type(2), td:nth-of-type(2)": {
            ...(t ? null : { width: "35%" }),
          },
          "td:nth-of-type(3)": { ...(t ? null : { width: "15%" }) },
          "th:last-of-type, td:last-of-type": {
            paddingRight: 20,
            ...(t ? null : { width: "25%" }),
          },
          th: {
            color:
              e.base === "light"
                ? ue(0.25, e.color.defaultText)
                : ue(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 },
            "&:last-of-type": { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === "light"
                      ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))"
                      : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))",
                }),
            "> tr > *": {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  "> tr:first-of-type > *": {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr:last-of-type > *": {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr > *:first-of-type": {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr > *:last-of-type": {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr:first-of-type > td:first-of-type": {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  "> tr:first-of-type > td:last-of-type": {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  "> tr:last-of-type > td:first-of-type": {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  "> tr:last-of-type > td:last-of-type": {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      }),
      ({ isLoading: e, theme: t }) =>
        e
          ? {
              "th span, td span, td button": {
                display: "inline",
                backgroundColor: t.appBorderColor,
                animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
                color: "transparent",
                boxShadow: "none",
                borderRadius: 0,
              },
            }
          : {}
    ),
    Y9 = N(nt)(({ theme: e }) => ({
      color: e.barTextColor,
      margin: "-4px -12px -4px 0",
    })),
    X9 = N.span({ display: "flex", justifyContent: "space-between" }),
    J9 = {
      alpha: (e, t) => e.name.localeCompare(t.name),
      requiredFirst: (e, t) =>
        +!!t.type?.required - +!!e.type?.required ||
        e.name.localeCompare(t.name),
      none: void 0,
    },
    Ui = (e) => ({
      key: e,
      name: "propertyName",
      description: "This is a short description",
      control: { type: "text" },
      table: {
        type: { summary: "summary" },
        defaultValue: { summary: "defaultValue" },
      },
    }),
    Q9 = { rows: { row1: Ui("row1"), row2: Ui("row2"), row3: Ui("row3") } },
    Z9 = (e, t) => {
      let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
      if (!e) return r;
      Object.entries(e).forEach(([o, i]) => {
        let { category: u, subcategory: s } = i?.table || {};
        if (u) {
          let d = r.sections[u] || { ungrouped: [], subsections: {} };
          if (!s) d.ungrouped.push({ key: o, ...i });
          else {
            let y = d.subsections[s] || [];
            y.push({ key: o, ...i }), (d.subsections[s] = y);
          }
          r.sections[u] = d;
        } else if (s) {
          let d = r.ungroupedSubsections[s] || [];
          d.push({ key: o, ...i }), (r.ungroupedSubsections[s] = d);
        } else r.ungrouped.push({ key: o, ...i });
      });
      let n = J9[t],
        a = (o) =>
          n
            ? Object.keys(o).reduce((i, u) => ({ ...i, [u]: o[u].sort(n) }), {})
            : o;
      return {
        ungrouped: r.ungrouped.sort(n),
        ungroupedSubsections: a(r.ungroupedSubsections),
        sections: Object.keys(r.sections).reduce(
          (o, i) => ({
            ...o,
            [i]: {
              ungrouped: r.sections[i].ungrouped.sort(n),
              subsections: a(r.sections[i].subsections),
            },
          }),
          {}
        ),
      };
    },
    eP = (e, t, r) => {
      try {
        return Po(e, t, r);
      } catch (n) {
        return jr.warn(n.message), !1;
      }
    },
    kt = (e) => {
      if ("error" in e)
        return h.createElement(
          zi,
          null,
          e.error,
          "\xA0",
          h.createElement(
            Nt,
            {
              href: "http://storybook.js.org/docs/",
              target: "_blank",
              withArrow: !0,
            },
            "Read the docs"
          )
        );
      let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
          sort: i = "none",
        } = e,
        u = "isLoading" in e,
        { rows: s, args: d, globals: y } = "rows" in e ? e : Q9,
        A = Z9(
          (0, Kg.default)(
            s,
            (b) => !b?.table?.disable && eP(b, d || {}, y || {})
          ),
          i
        );
      if (
        A.ungrouped.length === 0 &&
        Object.entries(A.sections).length === 0 &&
        Object.entries(A.ungroupedSubsections).length === 0
      )
        return h.createElement(
          zi,
          null,
          "No inputs found for this component.\xA0",
          h.createElement(
            Nt,
            {
              href: "http://storybook.js.org/docs/",
              target: "_blank",
              withArrow: !0,
            },
            "Read the docs"
          )
        );
      let g = 1;
      t && (g += 1), n || (g += 2);
      let m = Object.keys(A.sections).length > 0,
        E = {
          updateArgs: t,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
        };
      return h.createElement(
        Ar,
        null,
        h.createElement(
          K9,
          {
            "aria-hidden": u,
            compact: n,
            inAddonPanel: a,
            isLoading: u,
            className: "docblock-argstable sb-unstyled",
          },
          h.createElement(
            "thead",
            { className: "docblock-argstable-head" },
            h.createElement(
              "tr",
              null,
              h.createElement(
                "th",
                null,
                h.createElement("span", null, "Name")
              ),
              n
                ? null
                : h.createElement(
                    "th",
                    null,
                    h.createElement("span", null, "Description")
                  ),
              n
                ? null
                : h.createElement(
                    "th",
                    null,
                    h.createElement("span", null, "Default")
                  ),
              t
                ? h.createElement(
                    "th",
                    null,
                    h.createElement(
                      X9,
                      null,
                      "Control",
                      " ",
                      !u &&
                        r &&
                        h.createElement(
                          Y9,
                          { onClick: () => r(), title: "Reset controls" },
                          h.createElement(Fe, {
                            icon: "undo",
                            "aria-hidden": !0,
                          })
                        )
                    )
                  )
                : null
            )
          ),
          h.createElement(
            "tbody",
            { className: "docblock-argstable-body" },
            A.ungrouped.map((b) =>
              h.createElement(fa, {
                key: b.key,
                row: b,
                arg: d && d[b.key],
                ...E,
              })
            ),
            Object.entries(A.ungroupedSubsections).map(([b, x]) =>
              h.createElement(
                $i,
                { key: b, label: b, level: "subsection", colSpan: g },
                x.map((S) =>
                  h.createElement(fa, {
                    key: S.key,
                    row: S,
                    arg: d && d[S.key],
                    expandable: m,
                    ...E,
                  })
                )
              )
            ),
            Object.entries(A.sections).map(([b, x]) =>
              h.createElement(
                $i,
                { key: b, label: b, level: "section", colSpan: g },
                x.ungrouped.map((S) =>
                  h.createElement(fa, {
                    key: S.key,
                    row: S,
                    arg: d && d[S.key],
                    ...E,
                  })
                ),
                Object.entries(x.subsections).map(([S, P]) =>
                  h.createElement(
                    $i,
                    { key: S, label: S, level: "subsection", colSpan: g },
                    P.map((j) =>
                      h.createElement(fa, {
                        key: j.key,
                        row: j,
                        arg: d && d[j.key],
                        expandable: m,
                        ...E,
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    },
    py = ({ tabs: e, ...t }) => {
      let r = Object.entries(e);
      return r.length === 1
        ? h.createElement(kt, { ...r[0][1], ...t })
        : h.createElement(
            Ra,
            null,
            r.map((n) => {
              let [a, o] = n,
                i = `prop_table_div_${a}`;
              return h.createElement(
                "div",
                { key: i, id: i, title: a },
                ({ active: u }) =>
                  u
                    ? h.createElement(kt, {
                        key: `prop_table_${a}`,
                        ...o,
                        ...t,
                      })
                    : null
              );
            })
          );
    },
    tP = N.div(({ theme: e }) => ({
      background: e.background.warning,
      color: e.color.darkest,
      padding: "10px 15px",
      lineHeight: "20px",
      boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
    })),
    dy = () =>
      h.createElement(
        tP,
        null,
        "This story is not configured to handle controls.",
        " ",
        h.createElement(
          Nt,
          {
            href: "https://storybook.js.org/docs/react/essentials/controls",
            target: "_blank",
            cancel: !1,
            withArrow: !0,
          },
          "Learn how to add controls"
        )
      ),
    _ne = N.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color:
        e.base === "light"
          ? ue(0.4, e.color.defaultText)
          : ue(0.6, e.color.defaultText),
    })),
    One = N.div({
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    }),
    Rne = N.div({
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      "&:not(:last-child)": { marginBottom: "1rem" },
    }),
    Pne = N.div(ct, ({ theme: e }) => ({
      ...ma(e),
      margin: "25px 0 40px",
      padding: "30px 20px",
    }));
  var Mne = N.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    })),
    qne = N.div(({ theme: e }) => ({
      color:
        e.base === "light"
          ? ue(0.2, e.color.defaultText)
          : ue(0.6, e.color.defaultText),
    })),
    Lne = N.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 }),
    $ne = N.div(({ theme: e }) => ({
      flex: 1,
      textAlign: "center",
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: "hidden",
      color:
        e.base === "light"
          ? ue(0.4, e.color.defaultText)
          : ue(0.6, e.color.defaultText),
      "> div": {
        display: "inline-block",
        overflow: "hidden",
        maxWidth: "100%",
        textOverflow: "ellipsis",
      },
      span: { display: "block", marginTop: 2 },
    })),
    Une = N.div({ display: "flex", flexDirection: "row" }),
    zne = N.div(({ background: e }) => ({
      position: "relative",
      flex: 1,
      "&::before": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: e,
        content: '""',
      },
    })),
    Hne = N.div(({ theme: e }) => ({
      ...ma(e),
      display: "flex",
      flexDirection: "row",
      height: 50,
      marginBottom: 5,
      overflow: "hidden",
      backgroundColor: "white",
      backgroundImage:
        "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
      backgroundClip: "padding-box",
    })),
    Gne = N.div({
      display: "flex",
      flexDirection: "column",
      flex: 1,
      position: "relative",
      marginBottom: 30,
    }),
    Wne = N.div({ flex: 1, display: "flex", flexDirection: "row" }),
    Vne = N.div({ display: "flex", alignItems: "flex-start" }),
    Kne = N.div({ flex: "0 0 30%" }),
    Yne = N.div({ flex: 1 }),
    Xne = N.div(({ theme: e }) => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === "light"
          ? ue(0.4, e.color.defaultText)
          : ue(0.6, e.color.defaultText),
    })),
    Jne = N.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: "20px",
      display: "flex",
      flexDirection: "column",
    }));
  var tae = N.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    })),
    rae = N.div(({ theme: e }) => ({
      ...ma(e),
      overflow: "hidden",
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      "> img, > svg": { width: 20, height: 20 },
    })),
    nae = N.div({
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      flex: "0 1 calc(20% - 10px)",
      minWidth: 120,
      margin: "0px 10px 30px 0",
    }),
    aae = N.div({ display: "flex", flexFlow: "row wrap" });
  var rP = (e) => `anchor--${e}`,
    nP = ({ storyId: e, children: t }) =>
      h.createElement("div", { id: rP(e), className: "sb-anchor" }, t);
  ee &&
    ee.__DOCS_CONTEXT__ === void 0 &&
    ((ee.__DOCS_CONTEXT__ = vt(null)),
    (ee.__DOCS_CONTEXT__.displayName = "DocsContext"));
  var et = ee ? ee.__DOCS_CONTEXT__ : vt(null),
    ru = (e, t) => Ae(et).resolveOf(e, t);
  var nu = "^",
    aP = (e) =>
      e
        .split("-")
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(""),
    hy = (e) => {
      if (e)
        return typeof e == "string"
          ? e.includes("-")
            ? aP(e)
            : e
          : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name;
    };
  function my(e, t) {
    let r = au([e], t);
    return r && r[0];
  }
  function au(e, t) {
    let [r, n] = Z({});
    return (
      oe(() => {
        Promise.all(
          e.map(async (a) => {
            let o = await t.loadStory(a);
            n((i) => (i[a] === o ? i : { ...i, [a]: o }));
          })
        );
      }),
      e.map((a) => {
        if (r[a]) return r[a];
        try {
          return t.storyById(a);
        } catch {
          return null;
        }
      })
    );
  }
  var oP = (e, t) => {
      let r = t.getStoryContext(t.storyById()),
        [n, a] = Z(r.args);
      oe(() => {
        let u = (s) => {
          s.storyId === e && a(s.args);
        };
        return t.channel.on(gt, u), () => t.channel.off(gt, u);
      }, [e]);
      let o = de(
          (u) => t.channel.emit(Qt, { storyId: e, updatedArgs: u }),
          [e]
        ),
        i = de((u) => t.channel.emit(Jt, { storyId: e, argNames: u }), [e]);
      return [n, o, i];
    },
    iP = (e) => {
      let t = e.getStoryContext(e.storyById()),
        [r, n] = Z(t.globals);
      return (
        oe(() => {
          let a = (o) => {
            n(o.globals);
          };
          return e.channel.on(Ur, a), () => e.channel.off(Ur, a);
        }, []),
        [r]
      );
    },
    gy = (e, t, r, n) => {
      let { extractArgTypes: a } = t.docs || {};
      if (!a)
        throw new Error(
          "Args unsupported. See Args documentation for your framework."
        );
      let o = a(e);
      return (o = Tt(o, r, n)), o;
    },
    Gg = (e) => e && [nu].includes(e),
    uP = (e = {}, t) => {
      let { of: r } = e,
        { story: n } = e;
      if (Gg(r) || Gg(n)) return t || null;
      if (!r) throw new Error("No component found.");
      return r;
    },
    Yi = (e, t, r, n, a, o) => ({
      ...e,
      ...(0, fy.default)(t, (i) => ({ rows: gy(i, r, n, a), sort: o })),
    }),
    sP = (e) => {
      let t = Ae(et),
        {
          story: r,
          component: n,
          subcomponents: a,
          showComponent: o,
          include: i,
          exclude: u,
          sort: s,
        } = e;
      try {
        let d;
        switch (r) {
          case nu: {
            d = t.storyById().id;
            break;
          }
          default:
            d = t.storyIdByName(r);
        }
        let y = my(d, t),
          [A, g, m] = oP(d, t),
          [E] = iP(t);
        if (!y)
          return h.createElement(kt, {
            isLoading: !0,
            updateArgs: g,
            resetArgs: m,
          });
        let b = Tt(y.argTypes, i, u),
          x = hy(n) || "Story",
          S = {
            [x]: { rows: b, args: A, globals: E, updateArgs: g, resetArgs: m },
          },
          P = b && Object.values(b).find((j) => !!j?.control);
        if (
          (P || ((g = null), (m = null), (S = {})),
          n && (!P || o) && (S = Yi(S, { [x]: n }, y.parameters, i, u)),
          a)
        ) {
          if (Array.isArray(a))
            throw new Error(
              "Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components."
            );
          S = Yi(S, a, y.parameters, i, u);
        }
        return h.createElement(py, { tabs: S, sort: s });
      } catch (d) {
        return h.createElement(kt, { error: d.message });
      }
    },
    Wg = (e) => {
      let { components: t, include: r, exclude: n, sort: a, parameters: o } = e,
        i = Yi({}, t, o, r, n);
      return h.createElement(py, { tabs: i, sort: a });
    },
    lP = (e) => {
      be(Ce`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `);
      let t = Ae(et),
        r,
        n,
        a;
      try {
        ({ parameters: r, component: n, subcomponents: a } = t.storyById());
      } catch {
        let { of: m } = e;
        if ("of" in e && m === void 0)
          throw new Error(
            "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
          );
        ({
          projectAnnotations: { parameters: r },
        } = t.resolveOf(m, ["component"]));
      }
      let { include: o, exclude: i, components: u, sort: s } = e,
        { story: d } = e,
        y = s || r.controls?.sort,
        A = uP(e, n);
      if (d)
        return h.createElement(sP, {
          ...e,
          component: A,
          subcomponents: a,
          sort: y,
        });
      if (!u && !a) {
        let m;
        try {
          m = { rows: gy(A, r, o, i) };
        } catch (E) {
          m = { error: E.message };
        }
        return h.createElement(kt, { ...m, sort: y });
      }
      if (u)
        return h.createElement(Wg, {
          ...e,
          components: u,
          sort: y,
          parameters: r,
        });
      let g = hy(A);
      return h.createElement(Wg, {
        ...e,
        components: { [g]: A, ...a },
        sort: y,
        parameters: r,
      });
    };
  lP.defaultProps = { of: nu };
  function cP(e) {
    return xi(e);
  }
  var pP = vt({ sources: {} }),
    dP = "--unknown--";
  var fP = (e, t) => {
    let r = e ? t.getStoryContext(e) : { args: {} },
      { id: n } = e || { id: "none" },
      [a, o] = Z(r.args);
    oe(() => {
      let s = (d) => {
        d.storyId === n && o(d.args);
      };
      return t.channel.on(gt, s), () => t.channel.off(gt, s);
    }, [n, t.channel]);
    let i = de(
        (s) => t.channel.emit(Qt, { storyId: n, updatedArgs: s }),
        [n, t.channel]
      ),
      u = de(
        (s) => t.channel.emit(Jt, { storyId: n, argNames: s }),
        [n, t.channel]
      );
    return e && [a, i, u];
  };
  function hP(e, t) {
    return e.map((r) => fP(r, t));
  }
  var mP = ((e) => (
      (e.OPEN = "open"), (e.CLOSED = "closed"), (e.NONE = "none"), e
    ))(mP || {}),
    gP = (e) => {
      let t = e.map((r) => r.parameters.docs?.source?.state).filter(Boolean);
      return t.length === 0 ? "closed" : t[0];
    },
    yP = (e, t, r) => {
      let { sources: n } = r,
        a = n?.[e];
      return a?.[cP(t)] || a?.[dP] || { code: "" };
    },
    bP = ({
      snippet: e,
      storyContext: t,
      typeFromProps: r,
      transformFromProps: n,
    }) => {
      let { __isArgsStory: a } = t.parameters,
        o = t.parameters.docs?.source || {},
        i = r || o.type || Zr.AUTO;
      if (o.code !== void 0) return o.code;
      let u =
        i === Zr.DYNAMIC || (i === Zr.AUTO && e && a)
          ? e
          : o.originalSource || "";
      return (
        o.transformSource &&
          be(Ce`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.docs?.transformSource &&
          be(Ce`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.jsx?.transformSource &&
          be(Ce`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        (
          n ??
          o.transform ??
          o.transformSource ??
          t.parameters.docs?.transformSource ??
          t.parameters.jsx?.transformSource
        )?.(u, t) || u
      );
    },
    yy = (e, t, r) => {
      let n = e.ids || (e.id ? [e.id] : []),
        a = au(n, t),
        o = a,
        { of: i } = e;
      if ("of" in e && i === void 0)
        throw new Error(
          "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
        );
      if (i) o = [t.resolveOf(i, ["story"]).story];
      else if (o.length === 0)
        try {
          o = [t.storyById()];
        } catch {}
      let u = hP(o, t);
      if (!a.every(Boolean))
        return { error: "Oh no! The source is not available.", state: "none" };
      let s = o[0]?.parameters?.docs?.source || {},
        { code: d } = e,
        y = e.format ?? s.format,
        A = e.language ?? s.language ?? "jsx",
        g = e.dark ?? s.dark ?? !1;
      d ||
        (d = o.map((E, b) => {
          if (!E) return "";
          let [x] = u[b] || [],
            S = t.getStoryContext(E),
            P = e.__forceInitialArgs ? S.initialArgs : x,
            j = yP(E.id, P, r);
          return (
            b === 0 &&
              (y = j.format ?? E.parameters.docs?.source?.format ?? !1),
            bP({
              snippet: j.code,
              storyContext: { ...S, args: P },
              typeFromProps: e.type,
              transformFromProps: e.transform,
            })
          );
        }).join(`

`));
      let m = gP(o);
      return d
        ? { code: d, format: y, language: A, dark: g, state: m }
        : { error: "Oh no! The source is not available.", state: m };
    };
  var by = (e, t) => {
      let { id: r, of: n, meta: a, story: o } = e;
      if ("of" in e && n === void 0)
        throw new Error(
          "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
        );
      if (r)
        return (
          be(Ce`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          r
        );
      let { name: i } = e;
      return i
        ? (be(Ce`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          t.storyIdByName(i))
        : (o &&
            be(Ce`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          a && t.referenceMeta(a, !1),
          t.resolveOf(n || o || "story", ["story"]).story.id);
    },
    AP = (e, t, r) => {
      let { parameters: n = {} } = t || {},
        { docs: a = {} } = n,
        o = a.story || {};
      if (a.disable) return null;
      let { inlineStories: i, iframeHeight: u } = a;
      typeof i < "u" &&
        be(Ce`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
      let s = e.inline ?? o.inline ?? i ?? !1;
      if (
        (typeof u < "u" &&
          be(Ce`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
        s)
      ) {
        let y = e.height ?? o.height,
          A = e.autoplay ?? o.autoplay ?? !1;
        return {
          story: t,
          inline: !0,
          height: y,
          autoplay: A,
          forceInitialArgs: !!e.__forceInitialArgs,
          primary: !!e.__primary,
          renderStoryToElement: r.renderStoryToElement,
        };
      }
      let d = e.height ?? o.height ?? o.iframeHeight ?? u ?? "100px";
      return { story: t, inline: !1, height: d, primary: !!e.__primary };
    },
    EP = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
      let t = Ae(et),
        r = by(e, t),
        n = my(r, t);
      if (!n) return h.createElement(Zi, null);
      let a = AP(e, n, t);
      return a ? h.createElement(sR, { ...a }) : null;
    },
    DP = (
      { withSource: e, mdxSource: t, children: r, layout: n, ...a },
      o,
      i
    ) => {
      let u = br
          .toArray(r)
          .filter((g) => g.props && (g.props.id || g.props.name || g.props.of))
          .map((g) => by(g.props, o)),
        s = au(u, o),
        d = s.some((g) => !g),
        y = yy(
          {
            ...(t ? { code: decodeURI(t) } : { ids: u }),
            ...(a.of && { of: a.of }),
          },
          o,
          i
        );
      if (e === "none") return { isLoading: d, previewProps: a };
      let A = n;
      return (
        br.forEach(r, (g) => {
          A || (A = g?.props?.parameters?.layout);
        }),
        s.forEach((g) => {
          A ||
            !g ||
            (A = g?.parameters.layout ?? g.parameters.docs?.canvas?.layout);
        }),
        {
          isLoading: d,
          previewProps: {
            ...a,
            layout: A ?? "padded",
            withSource: y,
            isExpanded: (e || y.state) === "open",
          },
        }
      );
    },
    vP = (e) => {
      let t = Ae(et),
        r = Ae(pP),
        { children: n, of: a, source: o } = e;
      if ("of" in e && a === void 0)
        throw new Error(
          "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
        );
      let { isLoading: i, previewProps: u } = DP(e, t, r),
        s,
        d,
        y;
      try {
        ({ story: s } = ru(a || "story", ["story"]));
      } catch (x) {
        n || (y = x);
      }
      try {
        d = yy({ ...o, ...(a && { of: a }) }, t, r);
      } catch (x) {
        n || (y = x);
      }
      if (y) throw y;
      if (
        (e.withSource &&
          be(Ce`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        e.mdxSource &&
          be(Ce`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        (e.isColumn !== void 0 || e.columns !== void 0) &&
          be(Ce`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        n)
      )
        return (
          be(Ce`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
          i ? h.createElement(gR, null) : h.createElement(Gi, { ...u }, n)
        );
      let A =
          e.layout ??
          s.parameters.layout ??
          s.parameters.docs?.canvas?.layout ??
          "padded",
        g = e.withToolbar ?? s.parameters.docs?.canvas?.withToolbar ?? !1,
        m = e.additionalActions ?? s.parameters.docs?.canvas?.additionalActions,
        E = e.sourceState ?? s.parameters.docs?.canvas?.sourceState ?? "hidden",
        b = e.className ?? s.parameters.docs?.canvas?.className;
      return h.createElement(
        Gi,
        {
          withSource: E === "none" ? void 0 : d,
          isExpanded: E === "shown",
          withToolbar: g,
          additionalActions: m,
          className: b,
          layout: A,
        },
        h.createElement(EP, {
          of: a || s.moduleExport,
          meta: e.meta,
          ...e.story,
        })
      );
    };
  var { document: Ay } = ee;
  var CP = ({ className: e, children: t, ...r }) => {
    if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
      return h.createElement(Fa, null, t);
    let n = e && e.split("-");
    return h.createElement(Ji, {
      language: (n && n[1]) || "plaintext",
      format: !1,
      code: t,
      ...r,
    });
  };
  function ou(e, t) {
    e.channel.emit(Uf, t);
  }
  var Xi = Na.a,
    xP = ({ hash: e, children: t }) => {
      let r = Ae(et);
      return h.createElement(
        Xi,
        {
          href: e,
          target: "_self",
          onClick: (n) => {
            let a = e.substring(1);
            Ay.getElementById(a) && ou(r, e);
          },
        },
        t
      );
    },
    FP = (e) => {
      let { href: t, target: r, children: n, ...a } = e,
        o = Ae(et);
      if (t) {
        if (t.startsWith("#")) return h.createElement(xP, { hash: t }, n);
        if (r !== "_blank" && !t.startsWith("https://"))
          return h.createElement(
            Xi,
            {
              href: t,
              onClick: (i) => {
                i.button === 0 &&
                  !i.altKey &&
                  !i.ctrlKey &&
                  !i.metaKey &&
                  !i.shiftKey &&
                  (i.preventDefault(),
                  ou(o, i.currentTarget.getAttribute("href")));
              },
              target: r,
              ...a,
            },
            n
          );
      }
      return h.createElement(Xi, { ...e });
    },
    Ey = ["h1", "h2", "h3", "h4", "h5", "h6"],
    SP = Ey.reduce(
      (e, t) => ({
        ...e,
        [t]: N(t)({
          "& svg": {
            position: "relative",
            top: "-0.1em",
            visibility: "hidden",
          },
          "&:hover svg": { visibility: "visible" },
        }),
      }),
      {}
    ),
    wP = N.a(() => ({
      float: "left",
      lineHeight: "inherit",
      paddingRight: "10px",
      marginLeft: "-24px",
      color: "inherit",
    })),
    BP = ({ as: e, id: t, children: r, ...n }) => {
      let a = Ae(et),
        o = SP[e],
        i = `#${t}`;
      return h.createElement(
        o,
        { id: t, ...n },
        h.createElement(
          wP,
          {
            "aria-hidden": "true",
            href: i,
            tabIndex: -1,
            target: "_self",
            onClick: (u) => {
              Ay.getElementById(t) && ou(a, i);
            },
          },
          h.createElement(Fe, { icon: "link" })
        ),
        r
      );
    },
    iu = (e) => {
      let { as: t, id: r, children: n, ...a } = e;
      if (r) return h.createElement(BP, { as: t, id: r, ...a }, n);
      let o = t,
        { as: i, ...u } = e;
      return h.createElement(o, { ...Ma(u, t) });
    },
    TP = Ey.reduce(
      (e, t) => ({ ...e, [t]: (r) => h.createElement(iu, { as: t, ...r }) }),
      {}
    ),
    _P = (e) => {
      if (!e.children) return null;
      if (typeof e.children != "string")
        throw new Error(Ce`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
      return h.createElement(Pn, {
        ...e,
        options: {
          forceBlock: !0,
          overrides: { code: CP, a: FP, ...TP, ...e?.options?.overrides },
          ...e?.options,
        },
      });
    },
    OP = ((e) => (
      (e.INFO = "info"),
      (e.NOTES = "notes"),
      (e.DOCGEN = "docgen"),
      (e.AUTO = "auto"),
      e
    ))(OP || {}),
    ha =
      "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo",
    RP = (e) => e && (typeof e == "string" ? e : oa(e.markdown) || oa(e.text)),
    PP = (e) => e && (typeof e == "string" ? e : oa(e.text)),
    IP = (e) => null,
    kP = (e) => {
      switch (e.type) {
        case "story":
          return e.story.parameters.docs?.description?.story || null;
        case "meta": {
          let { parameters: t, component: r } = e.preparedMeta;
          return (
            t.docs?.description?.component ||
            t.docs?.extractComponentDescription?.(r, {
              component: r,
              parameters: t,
            }) ||
            null
          );
        }
        case "component": {
          let {
            component: t,
            projectAnnotations: { parameters: r },
          } = e;
          return (
            r.docs?.extractComponentDescription?.(t, {
              component: t,
              parameters: r,
            }) || null
          );
        }
        default:
          throw new Error(
            `Unrecognized module type resolved from 'useOf', got: ${e.type}`
          );
      }
    },
    NP = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
      let { component: a, parameters: o } = n();
      if (r || t) return r || t;
      let { notes: i, info: u, docs: s } = o;
      (i || u) &&
        be(
          `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${ha}`
        );
      let { extractComponentDescription: d = IP, description: y } = s || {},
        A = y?.component;
      if (A) return A;
      switch (e) {
        case "info":
          return PP(u);
        case "notes":
          return RP(i);
        case "docgen":
        case "auto":
        default:
          return d(a, { component: a, ...o });
      }
    },
    jP = (e) => {
      let { of: t, type: r, markdown: n, children: a } = e;
      if ("of" in e && t === void 0)
        throw new Error(
          "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
        );
      let o = Ae(et),
        i = ru(t || "meta"),
        u;
      return (
        r || n || a ? (u = NP(e, o)) : (u = kP(i)),
        r &&
          be(`Manually specifying description type is deprecated. See ${ha}`),
        n &&
          be(
            `The 'markdown' prop on the Description block is deprecated. See ${ha}`
          ),
        a &&
          be(
            `The 'children' prop on the Description block is deprecated. See ${ha}`
          ),
        u ? h.createElement(_P, null, u) : null
      );
    },
    { document: Qae, window: Zae } = ee;
  var MP = ({ children: e, disableAnchor: t }) => {
      if (t || typeof e != "string") return h.createElement(Ta, null, e);
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
      return h.createElement(iu, { as: "h3", id: r }, e);
    },
    qP = ({
      of: e,
      expanded: t = !0,
      withToolbar: r = !1,
      __forceInitialArgs: n = !1,
      __primary: a = !1,
    }) => {
      let { story: o } = ru(e || "story", ["story"]),
        i = o.parameters.docs?.canvas?.withToolbar ?? r;
      return h.createElement(
        nP,
        { storyId: o.id },
        t &&
          h.createElement(
            h.Fragment,
            null,
            h.createElement(MP, null, o.name),
            h.createElement(jP, { of: e })
          ),
        h.createElement(vP, {
          of: e,
          withToolbar: i,
          story: { __forceInitialArgs: n, __primary: a },
          source: { __forceInitialArgs: n },
        })
      );
    };
  var LP = ({ children: e, disableAnchor: t, ...r }) => {
      if (t || typeof e != "string") return h.createElement(Ba, null, e);
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
      return h.createElement(iu, { as: "h2", id: n, ...r }, e);
    },
    $P = N(LP)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: "16px",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      color: e.textMutedColor,
      border: 0,
      marginBottom: "12px",
      "&:first-of-type": { marginTop: "56px" },
    })),
    UP = ({ title: e, includePrimary: t = !0 }) => {
      let { componentStories: r } = Ae(et),
        n = r().filter((a) => !a.parameters?.docs?.disable);
      return (
        t || (n = n.slice(1)),
        !n || n.length === 0
          ? null
          : h.createElement(
              h.Fragment,
              null,
              h.createElement($P, null, e),
              n.map(
                (a) =>
                  a &&
                  h.createElement(qP, {
                    key: a.id,
                    of: a.moduleExport,
                    expanded: !0,
                    __forceInitialArgs: !0,
                  })
              )
            )
      );
    };
  UP.defaultProps = { title: "Stories" };
  var zP = () => {
    let [e, t, r] = hu(),
      [n] = mu(),
      a = an(),
      o = va("__isArgsStory", !1),
      {
        expanded: i,
        sort: u,
        presetColors: s,
        hideNoControlsWarning: d = !1,
      } = va(Aa, {}),
      { path: y } = gu(),
      A = Object.values(a).some((E) => E?.control),
      g = !(A && o) && !d,
      m = Object.entries(a).reduce(
        (E, [b, x]) => (
          x?.control?.type !== "color" || x?.control?.presetColors
            ? (E[b] = x)
            : (E[b] = { ...x, control: { ...x.control, presetColors: s } }),
          E
        ),
        {}
      );
    return h.createElement(
      h.Fragment,
      null,
      g && h.createElement(dy, null),
      h.createElement(kt, {
        key: y,
        compact: !i && A,
        rows: m,
        args: e,
        globals: n,
        updateArgs: t,
        resetArgs: r,
        inAddonPanel: !0,
        sort: u,
      })
    );
  };
  function HP() {
    let e = an(),
      t = Object.values(e).filter(
        (n) => n?.control && !n?.table?.disable
      ).length,
      r = t === 0 ? "" : ` (${t})`;
    return h.createElement(h.Fragment, null, "Controls", r);
  }
  Da.register(ba, (e) => {
    Da.addPanel(ba, {
      title: h.createElement(HP, null),
      id: "controls",
      type: fu.PANEL,
      paramKey: Aa,
      render: ({ key: t, active: r }) =>
        !r || !e.getCurrentStoryData()
          ? null
          : h.createElement(
              xa,
              { key: t, active: r },
              h.createElement(zP, null)
            ),
    });
  });
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.mjs.map
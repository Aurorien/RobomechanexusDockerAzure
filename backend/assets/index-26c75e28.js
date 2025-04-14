function qp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Zp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Hc = { exports: {} },
  Oo = {},
  Vc = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hl = Symbol.for("react.element"),
  bp = Symbol.for("react.portal"),
  eh = Symbol.for("react.fragment"),
  th = Symbol.for("react.strict_mode"),
  nh = Symbol.for("react.profiler"),
  rh = Symbol.for("react.provider"),
  lh = Symbol.for("react.context"),
  oh = Symbol.for("react.forward_ref"),
  ih = Symbol.for("react.suspense"),
  uh = Symbol.for("react.memo"),
  ah = Symbol.for("react.lazy"),
  ls = Symbol.iterator;
function sh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ls && e[ls]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qc = Object.assign,
  Kc = {};
function sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kc),
    (this.updater = n || Wc);
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jc() {}
Jc.prototype = sr.prototype;
function Wu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kc),
    (this.updater = n || Wc);
}
var Qu = (Wu.prototype = new Jc());
Qu.constructor = Wu;
Qc(Qu, sr.prototype);
Qu.isPureReactComponent = !0;
var os = Array.isArray,
  Yc = Object.prototype.hasOwnProperty,
  Ku = { current: null },
  Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Yc.call(t, r) && !Xc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: hl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ku.current,
  };
}
function ch(e, t) {
  return {
    $$typeof: hl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ju(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hl;
}
function fh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var is = /\/+/g;
function ai(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fh("" + e.key)
    : t.toString(36);
}
function Hl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hl:
          case bp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + ai(i, 0) : r),
      os(l)
        ? ((n = ""),
          e != null && (n = e.replace(is, "$&/") + "/"),
          Hl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Ju(l) &&
            (l = ch(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(is, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), os(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + ai(o, u);
      i += Hl(o, t, n, a, l);
    }
  else if (((a = sh(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + ai(o, u++)), (i += Hl(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Rl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Hl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function dh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Vl = { transition: null },
  ph = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Vl,
    ReactCurrentOwner: Ku,
  };
Q.Children = {
  map: Rl,
  forEach: function (e, t, n) {
    Rl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Rl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Rl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ju(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = sr;
Q.Fragment = eh;
Q.Profiler = nh;
Q.PureComponent = Wu;
Q.StrictMode = th;
Q.Suspense = ih;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ph;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Qc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ku.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Yc.call(t, a) &&
        !Xc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: hl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: lh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rh, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = Gc;
Q.createFactory = function (e) {
  var t = Gc.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: oh, render: e };
};
Q.isValidElement = Ju;
Q.lazy = function (e) {
  return { $$typeof: ah, _payload: { _status: -1, _result: e }, _init: dh };
};
Q.memo = function (e, t) {
  return { $$typeof: uh, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Vl.transition;
  Vl.transition = {};
  try {
    e();
  } finally {
    Vl.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Fe.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
Q.useId = function () {
  return Fe.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Fe.current.useRef(e);
};
Q.useState = function (e) {
  return Fe.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Fe.current.useTransition();
};
Q.version = "18.2.0";
Vc.exports = Q;
var P = Vc.exports;
const qc = Zp(P),
  hh = qp({ __proto__: null, default: qc }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mh = P,
  yh = Symbol.for("react.element"),
  vh = Symbol.for("react.fragment"),
  gh = Object.prototype.hasOwnProperty,
  wh = mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) gh.call(t, r) && !Sh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: yh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: wh.current,
  };
}
Oo.Fragment = vh;
Oo.jsx = Zc;
Oo.jsxs = Zc;
Hc.exports = Oo;
var j = Hc.exports,
  $i = {},
  bc = { exports: {} },
  Je = {},
  ef = { exports: {} },
  tf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, U) {
    var $ = O.length;
    O.push(U);
    e: for (; 0 < $; ) {
      var q = ($ - 1) >>> 1,
        ee = O[q];
      if (0 < l(ee, U)) (O[q] = U), (O[$] = ee), ($ = q);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var U = O[0],
      $ = O.pop();
    if ($ !== U) {
      O[0] = $;
      e: for (var q = 0, ee = O.length, Xe = ee >>> 1; q < Xe; ) {
        var Me = 2 * (q + 1) - 1,
          pn = O[Me],
          kt = Me + 1,
          Mn = O[kt];
        if (0 > l(pn, $))
          kt < ee && 0 > l(Mn, pn)
            ? ((O[q] = Mn), (O[kt] = $), (q = kt))
            : ((O[q] = pn), (O[Me] = $), (q = Me));
        else if (kt < ee && 0 > l(Mn, $)) (O[q] = Mn), (O[kt] = $), (q = kt);
        else break e;
      }
    }
    return U;
  }
  function l(O, U) {
    var $ = O.sortIndex - U.sortIndex;
    return $ !== 0 ? $ : O.id - U.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    c = 1,
    p = null,
    m = 3,
    S = !1,
    y = !1,
    g = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(O) {
    for (var U = n(s); U !== null; ) {
      if (U.callback === null) r(s);
      else if (U.startTime <= O)
        r(s), (U.sortIndex = U.expirationTime), t(a, U);
      else break;
      U = n(s);
    }
  }
  function f(O) {
    if (((g = !1), v(O), !y))
      if (n(a) !== null) (y = !0), At(C);
      else {
        var U = n(s);
        U !== null && xt(f, U.startTime - O);
      }
  }
  function C(O, U) {
    (y = !1), g && ((g = !1), h(L), (L = -1)), (S = !0);
    var $ = m;
    try {
      for (
        v(U), p = n(a);
        p !== null && (!(p.expirationTime > U) || (O && !oe()));

      ) {
        var q = p.callback;
        if (typeof q == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var ee = q(p.expirationTime <= U);
          (U = e.unstable_now()),
            typeof ee == "function" ? (p.callback = ee) : p === n(a) && r(a),
            v(U);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Xe = !0;
      else {
        var Me = n(s);
        Me !== null && xt(f, Me.startTime - U), (Xe = !1);
      }
      return Xe;
    } finally {
      (p = null), (m = $), (S = !1);
    }
  }
  var N = !1,
    R = null,
    L = -1,
    H = 5,
    A = -1;
  function oe() {
    return !(e.unstable_now() - A < H);
  }
  function De() {
    if (R !== null) {
      var O = e.unstable_now();
      A = O;
      var U = !0;
      try {
        U = R(!0, O);
      } finally {
        U ? pt() : ((N = !1), (R = null));
      }
    } else N = !1;
  }
  var pt;
  if (typeof d == "function")
    pt = function () {
      d(De);
    };
  else if (typeof MessageChannel < "u") {
    var dn = new MessageChannel(),
      ce = dn.port2;
    (dn.port1.onmessage = De),
      (pt = function () {
        ce.postMessage(null);
      });
  } else
    pt = function () {
      _(De, 0);
    };
  function At(O) {
    (R = O), N || ((N = !0), pt());
  }
  function xt(O, U) {
    L = _(function () {
      O(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || S || ((y = !0), At(C));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = m;
      }
      var $ = m;
      m = U;
      try {
        return O();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, U) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var $ = m;
      m = O;
      try {
        return U();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (O, U, $) {
      var q = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? q + $ : q))
          : ($ = q),
        O)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = $ + ee),
        (O = {
          id: c++,
          callback: U,
          priorityLevel: O,
          startTime: $,
          expirationTime: ee,
          sortIndex: -1,
        }),
        $ > q
          ? ((O.sortIndex = $),
            t(s, O),
            n(a) === null &&
              O === n(s) &&
              (g ? (h(L), (L = -1)) : (g = !0), xt(f, $ - q)))
          : ((O.sortIndex = ee), t(a, O), y || S || ((y = !0), At(C))),
        O
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (O) {
      var U = m;
      return function () {
        var $ = m;
        m = U;
        try {
          return O.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(tf);
ef.exports = tf;
var Eh = ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf = P,
  Ke = Eh;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var rf = new Set(),
  Yr = {};
function On(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Yr[e] = t, e = 0; e < t.length; e++) rf.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Hi = Object.prototype.hasOwnProperty,
  xh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  us = {},
  as = {};
function kh(e) {
  return Hi.call(as, e)
    ? !0
    : Hi.call(us, e)
    ? !1
    : xh.test(e)
    ? (as[e] = !0)
    : ((us[e] = !0), !1);
}
function Ch(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rh(e, t, n, r) {
  if (t === null || typeof t > "u" || Ch(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yu = /[\-:]([a-z])/g;
function Xu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    _e[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    _e[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yu, Xu);
  _e[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gu(e, t, n, r) {
  var l = _e.hasOwnProperty(t) ? _e[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rh(t, n, l, r) && (n = null),
    r || l === null
      ? kh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pl = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  qu = Symbol.for("react.strict_mode"),
  Vi = Symbol.for("react.profiler"),
  lf = Symbol.for("react.provider"),
  of = Symbol.for("react.context"),
  Zu = Symbol.for("react.forward_ref"),
  Wi = Symbol.for("react.suspense"),
  Qi = Symbol.for("react.suspense_list"),
  bu = Symbol.for("react.memo"),
  Wt = Symbol.for("react.lazy"),
  uf = Symbol.for("react.offscreen"),
  ss = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ss && e[ss]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  si;
function Mr(e) {
  if (si === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      si = (t && t[1]) || "";
    }
  return (
    `
` +
    si +
    e
  );
}
var ci = !1;
function fi(e, t) {
  if (!e || ci) return "";
  ci = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (ci = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mr(e) : "";
}
function Ph(e) {
  switch (e.tag) {
    case 5:
      return Mr(e.type);
    case 16:
      return Mr("Lazy");
    case 13:
      return Mr("Suspense");
    case 19:
      return Mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = fi(e.type, !1)), e;
    case 11:
      return (e = fi(e.type.render, !1)), e;
    case 1:
      return (e = fi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ki(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case zn:
      return "Portal";
    case Vi:
      return "Profiler";
    case qu:
      return "StrictMode";
    case Wi:
      return "Suspense";
    case Qi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case of:
        return (e.displayName || "Context") + ".Consumer";
      case lf:
        return (e._context.displayName || "Context") + ".Provider";
      case Zu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bu:
        return (
          (t = e.displayName || null), t !== null ? t : Ki(e.type) || "Memo"
        );
      case Wt:
        (t = e._payload), (e = e._init);
        try {
          return Ki(e(t));
        } catch {}
    }
  return null;
}
function _h(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ki(t);
    case 8:
      return t === qu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function af(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Th(e) {
  var t = af(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _l(e) {
  e._valueTracker || (e._valueTracker = Th(e));
}
function sf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = af(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ro(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ji(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cf(e, t) {
  (t = t.checked), t != null && Gu(e, "checked", t, !1);
}
function Yi(e, t) {
  cf(e, t);
  var n = ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xi(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function fs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xi(e, t, n) {
  (t !== "number" || ro(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ds(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (jr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ln(n) };
}
function ff(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ps(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function df(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? df(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Tl,
  pf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Tl = Tl || document.createElement("div"),
          Tl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ar = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Nh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ar).forEach(function (e) {
  Nh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ar[t] = Ar[e]);
  });
});
function hf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ar.hasOwnProperty(e) && Ar[e])
    ? ("" + t).trim()
    : t + "px";
}
function mf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = hf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Lh = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Zi(e, t) {
  if (t) {
    if (Lh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function bi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var eu = null;
function ea(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var tu = null,
  Xn = null,
  Gn = null;
function hs(e) {
  if ((e = vl(e))) {
    if (typeof tu != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Fo(t)), tu(e.stateNode, e.type, t));
  }
}
function yf(e) {
  Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function vf() {
  if (Xn) {
    var e = Xn,
      t = Gn;
    if (((Gn = Xn = null), hs(e), t)) for (e = 0; e < t.length; e++) hs(t[e]);
  }
}
function gf(e, t) {
  return e(t);
}
function wf() {}
var di = !1;
function Sf(e, t, n) {
  if (di) return e(t, n);
  di = !0;
  try {
    return gf(e, t, n);
  } finally {
    (di = !1), (Xn !== null || Gn !== null) && (wf(), vf());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var nu = !1;
if (Dt)
  try {
    var Er = {};
    Object.defineProperty(Er, "passive", {
      get: function () {
        nu = !0;
      },
    }),
      window.addEventListener("test", Er, Er),
      window.removeEventListener("test", Er, Er);
  } catch {
    nu = !1;
  }
function Oh(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Ur = !1,
  lo = null,
  oo = !1,
  ru = null,
  Dh = {
    onError: function (e) {
      (Ur = !0), (lo = e);
    },
  };
function Mh(e, t, n, r, l, o, i, u, a) {
  (Ur = !1), (lo = null), Oh.apply(Dh, arguments);
}
function jh(e, t, n, r, l, o, i, u, a) {
  if ((Mh.apply(this, arguments), Ur)) {
    if (Ur) {
      var s = lo;
      (Ur = !1), (lo = null);
    } else throw Error(T(198));
    oo || ((oo = !0), (ru = s));
  }
}
function Dn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ef(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ms(e) {
  if (Dn(e) !== e) throw Error(T(188));
}
function zh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ms(l), e;
        if (o === r) return ms(l), t;
        o = o.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function xf(e) {
  return (e = zh(e)), e !== null ? kf(e) : null;
}
function kf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cf = Ke.unstable_scheduleCallback,
  ys = Ke.unstable_cancelCallback,
  Fh = Ke.unstable_shouldYield,
  Ah = Ke.unstable_requestPaint,
  ye = Ke.unstable_now,
  Uh = Ke.unstable_getCurrentPriorityLevel,
  ta = Ke.unstable_ImmediatePriority,
  Rf = Ke.unstable_UserBlockingPriority,
  io = Ke.unstable_NormalPriority,
  Ih = Ke.unstable_LowPriority,
  Pf = Ke.unstable_IdlePriority,
  Do = null,
  gt = null;
function Bh(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot(Do, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : Vh,
  $h = Math.log,
  Hh = Math.LN2;
function Vh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($h(e) / Hh) | 0)) | 0;
}
var Nl = 64,
  Ll = 4194304;
function zr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function uo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = zr(u)) : ((o &= i), o !== 0 && (r = zr(o)));
  } else (i = n & ~l), i !== 0 ? (r = zr(i)) : o !== 0 && (r = zr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Wh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ct(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Wh(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function lu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _f() {
  var e = Nl;
  return (Nl <<= 1), !(Nl & 4194240) && (Nl = 64), e;
}
function pi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ml(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ct(t)),
    (e[t] = n);
}
function Kh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ct(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function na(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var X = 0;
function Tf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Nf,
  ra,
  Lf,
  Of,
  Df,
  ou = !1,
  Ol = [],
  Gt = null,
  qt = null,
  Zt = null,
  qr = new Map(),
  Zr = new Map(),
  Kt = [],
  Jh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function vs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = vl(t)), t !== null && ra(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Yh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Gt = xr(Gt, e, t, n, r, l)), !0;
    case "dragenter":
      return (qt = xr(qt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Zt = xr(Zt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return qr.set(o, xr(qr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Zr.set(o, xr(Zr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Mf(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ef(n)), t !== null)) {
          (e.blockedOn = t),
            Df(e.priority, function () {
              Lf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (eu = r), n.target.dispatchEvent(r), (eu = null);
    } else return (t = vl(n)), t !== null && ra(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function gs(e, t, n) {
  Wl(e) && n.delete(t);
}
function Xh() {
  (ou = !1),
    Gt !== null && Wl(Gt) && (Gt = null),
    qt !== null && Wl(qt) && (qt = null),
    Zt !== null && Wl(Zt) && (Zt = null),
    qr.forEach(gs),
    Zr.forEach(gs);
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ou ||
      ((ou = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Xh)));
}
function br(e) {
  function t(l) {
    return kr(l, e);
  }
  if (0 < Ol.length) {
    kr(Ol[0], e);
    for (var n = 1; n < Ol.length; n++) {
      var r = Ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gt !== null && kr(Gt, e),
      qt !== null && kr(qt, e),
      Zt !== null && kr(Zt, e),
      qr.forEach(t),
      Zr.forEach(t),
      n = 0;
    n < Kt.length;
    n++
  )
    (r = Kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
    Mf(n), n.blockedOn === null && Kt.shift();
}
var qn = Ft.ReactCurrentBatchConfig,
  ao = !0;
function Gh(e, t, n, r) {
  var l = X,
    o = qn.transition;
  qn.transition = null;
  try {
    (X = 1), la(e, t, n, r);
  } finally {
    (X = l), (qn.transition = o);
  }
}
function qh(e, t, n, r) {
  var l = X,
    o = qn.transition;
  qn.transition = null;
  try {
    (X = 4), la(e, t, n, r);
  } finally {
    (X = l), (qn.transition = o);
  }
}
function la(e, t, n, r) {
  if (ao) {
    var l = iu(e, t, n, r);
    if (l === null) ki(e, t, r, so, n), vs(e, r);
    else if (Yh(l, e, t, n, r)) r.stopPropagation();
    else if ((vs(e, r), t & 4 && -1 < Jh.indexOf(e))) {
      for (; l !== null; ) {
        var o = vl(l);
        if (
          (o !== null && Nf(o),
          (o = iu(e, t, n, r)),
          o === null && ki(e, t, r, so, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ki(e, t, r, null, n);
  }
}
var so = null;
function iu(e, t, n, r) {
  if (((so = null), (e = ea(r)), (e = wn(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ef(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (so = e), null;
}
function jf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Uh()) {
        case ta:
          return 1;
        case Rf:
          return 4;
        case io:
        case Ih:
          return 16;
        case Pf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  oa = null,
  Ql = null;
function zf() {
  if (Ql) return Ql;
  var e,
    t = oa,
    n = t.length,
    r,
    l = "value" in Yt ? Yt.value : Yt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ql = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Kl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Dl() {
  return !0;
}
function ws() {
  return !1;
}
function Ye(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Dl
        : ws),
      (this.isPropagationStopped = ws),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Dl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Dl));
      },
      persist: function () {},
      isPersistent: Dl,
    }),
    t
  );
}
var cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ia = Ye(cr),
  yl = se({}, cr, { view: 0, detail: 0 }),
  Zh = Ye(yl),
  hi,
  mi,
  Cr,
  Mo = se({}, yl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ua,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Cr &&
            (Cr && e.type === "mousemove"
              ? ((hi = e.screenX - Cr.screenX), (mi = e.screenY - Cr.screenY))
              : (mi = hi = 0),
            (Cr = e)),
          hi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : mi;
    },
  }),
  Ss = Ye(Mo),
  bh = se({}, Mo, { dataTransfer: 0 }),
  em = Ye(bh),
  tm = se({}, yl, { relatedTarget: 0 }),
  yi = Ye(tm),
  nm = se({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rm = Ye(nm),
  lm = se({}, cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  om = Ye(lm),
  im = se({}, cr, { data: 0 }),
  Es = Ye(im),
  um = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  am = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  sm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sm[e]) ? !!t[e] : !1;
}
function ua() {
  return cm;
}
var fm = se({}, yl, {
    key: function (e) {
      if (e.key) {
        var t = um[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Kl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? am[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ua,
    charCode: function (e) {
      return e.type === "keypress" ? Kl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Kl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dm = Ye(fm),
  pm = se({}, Mo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xs = Ye(pm),
  hm = se({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ua,
  }),
  mm = Ye(hm),
  ym = se({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vm = Ye(ym),
  gm = se({}, Mo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wm = Ye(gm),
  Sm = [9, 13, 27, 32],
  aa = Dt && "CompositionEvent" in window,
  Ir = null;
Dt && "documentMode" in document && (Ir = document.documentMode);
var Em = Dt && "TextEvent" in window && !Ir,
  Ff = Dt && (!aa || (Ir && 8 < Ir && 11 >= Ir)),
  ks = String.fromCharCode(32),
  Cs = !1;
function Af(e, t) {
  switch (e) {
    case "keyup":
      return Sm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Uf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var An = !1;
function xm(e, t) {
  switch (e) {
    case "compositionend":
      return Uf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Cs = !0), ks);
    case "textInput":
      return (e = t.data), e === ks && Cs ? null : e;
    default:
      return null;
  }
}
function km(e, t) {
  if (An)
    return e === "compositionend" || (!aa && Af(e, t))
      ? ((e = zf()), (Ql = oa = Yt = null), (An = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ff && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cm[e.type] : t === "textarea";
}
function If(e, t, n, r) {
  yf(r),
    (t = co(t, "onChange")),
    0 < t.length &&
      ((n = new ia("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Br = null,
  el = null;
function Rm(e) {
  Gf(e, 0);
}
function jo(e) {
  var t = Bn(e);
  if (sf(t)) return e;
}
function Pm(e, t) {
  if (e === "change") return t;
}
var Bf = !1;
if (Dt) {
  var vi;
  if (Dt) {
    var gi = "oninput" in document;
    if (!gi) {
      var Ps = document.createElement("div");
      Ps.setAttribute("oninput", "return;"),
        (gi = typeof Ps.oninput == "function");
    }
    vi = gi;
  } else vi = !1;
  Bf = vi && (!document.documentMode || 9 < document.documentMode);
}
function _s() {
  Br && (Br.detachEvent("onpropertychange", $f), (el = Br = null));
}
function $f(e) {
  if (e.propertyName === "value" && jo(el)) {
    var t = [];
    If(t, el, e, ea(e)), Sf(Rm, t);
  }
}
function _m(e, t, n) {
  e === "focusin"
    ? (_s(), (Br = t), (el = n), Br.attachEvent("onpropertychange", $f))
    : e === "focusout" && _s();
}
function Tm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return jo(el);
}
function Nm(e, t) {
  if (e === "click") return jo(t);
}
function Lm(e, t) {
  if (e === "input" || e === "change") return jo(t);
}
function Om(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : Om;
function tl(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Hi.call(t, l) || !dt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ns(e, t) {
  var n = Ts(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ts(n);
  }
}
function Hf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vf() {
  for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ro(e.document);
  }
  return t;
}
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dm(e) {
  var t = Vf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && sa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ns(n, o));
        var i = Ns(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mm = Dt && "documentMode" in document && 11 >= document.documentMode,
  Un = null,
  uu = null,
  $r = null,
  au = !1;
function Ls(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  au ||
    Un == null ||
    Un !== ro(r) ||
    ((r = Un),
    "selectionStart" in r && sa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($r && tl($r, r)) ||
      (($r = r),
      (r = co(uu, "onSelect")),
      0 < r.length &&
        ((t = new ia("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Un))));
}
function Ml(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var In = {
    animationend: Ml("Animation", "AnimationEnd"),
    animationiteration: Ml("Animation", "AnimationIteration"),
    animationstart: Ml("Animation", "AnimationStart"),
    transitionend: Ml("Transition", "TransitionEnd"),
  },
  wi = {},
  Wf = {};
Dt &&
  ((Wf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  "TransitionEvent" in window || delete In.transitionend.transition);
function zo(e) {
  if (wi[e]) return wi[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wf) return (wi[e] = t[n]);
  return e;
}
var Qf = zo("animationend"),
  Kf = zo("animationiteration"),
  Jf = zo("animationstart"),
  Yf = zo("transitionend"),
  Xf = new Map(),
  Os =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function an(e, t) {
  Xf.set(e, t), On(t, [e]);
}
for (var Si = 0; Si < Os.length; Si++) {
  var Ei = Os[Si],
    jm = Ei.toLowerCase(),
    zm = Ei[0].toUpperCase() + Ei.slice(1);
  an(jm, "on" + zm);
}
an(Qf, "onAnimationEnd");
an(Kf, "onAnimationIteration");
an(Jf, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(Yf, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
On(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
On(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Fm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
function Ds(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), jh(r, t, void 0, e), (e.currentTarget = null);
}
function Gf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Ds(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Ds(l, u, s), (o = a);
        }
    }
  }
  if (oo) throw ((e = ru), (oo = !1), (ru = null), e);
}
function ne(e, t) {
  var n = t[pu];
  n === void 0 && (n = t[pu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (qf(t, e, 2, !1), n.add(r));
}
function xi(e, t, n) {
  var r = 0;
  t && (r |= 4), qf(n, e, r, t);
}
var jl = "_reactListening" + Math.random().toString(36).slice(2);
function nl(e) {
  if (!e[jl]) {
    (e[jl] = !0),
      rf.forEach(function (n) {
        n !== "selectionchange" && (Fm.has(n) || xi(n, !1, e), xi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jl] || ((t[jl] = !0), xi("selectionchange", !1, t));
  }
}
function qf(e, t, n, r) {
  switch (jf(t)) {
    case 1:
      var l = Gh;
      break;
    case 4:
      l = qh;
      break;
    default:
      l = la;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !nu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ki(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = wn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Sf(function () {
    var s = o,
      c = ea(n),
      p = [];
    e: {
      var m = Xf.get(e);
      if (m !== void 0) {
        var S = ia,
          y = e;
        switch (e) {
          case "keypress":
            if (Kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = dm;
            break;
          case "focusin":
            (y = "focus"), (S = yi);
            break;
          case "focusout":
            (y = "blur"), (S = yi);
            break;
          case "beforeblur":
          case "afterblur":
            S = yi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Ss;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = em;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = mm;
            break;
          case Qf:
          case Kf:
          case Jf:
            S = rm;
            break;
          case Yf:
            S = vm;
            break;
          case "scroll":
            S = Zh;
            break;
          case "wheel":
            S = wm;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = xs;
        }
        var g = (t & 4) !== 0,
          _ = !g && e === "scroll",
          h = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var d = s, v; d !== null; ) {
          v = d;
          var f = v.stateNode;
          if (
            (v.tag === 5 &&
              f !== null &&
              ((v = f),
              h !== null && ((f = Gr(d, h)), f != null && g.push(rl(d, f, v)))),
            _)
          )
            break;
          d = d.return;
        }
        0 < g.length &&
          ((m = new S(m, y, null, n, c)), p.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== eu &&
            (y = n.relatedTarget || n.fromElement) &&
            (wn(y) || y[Mt]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((y = n.relatedTarget || n.toElement),
              (S = s),
              (y = y ? wn(y) : null),
              y !== null &&
                ((_ = Dn(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((S = null), (y = s)),
          S !== y)
        ) {
          if (
            ((g = Ss),
            (f = "onMouseLeave"),
            (h = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = xs),
              (f = "onPointerLeave"),
              (h = "onPointerEnter"),
              (d = "pointer")),
            (_ = S == null ? m : Bn(S)),
            (v = y == null ? m : Bn(y)),
            (m = new g(f, d + "leave", S, n, c)),
            (m.target = _),
            (m.relatedTarget = v),
            (f = null),
            wn(c) === s &&
              ((g = new g(h, d + "enter", y, n, c)),
              (g.target = v),
              (g.relatedTarget = _),
              (f = g)),
            (_ = f),
            S && y)
          )
            t: {
              for (g = S, h = y, d = 0, v = g; v; v = jn(v)) d++;
              for (v = 0, f = h; f; f = jn(f)) v++;
              for (; 0 < d - v; ) (g = jn(g)), d--;
              for (; 0 < v - d; ) (h = jn(h)), v--;
              for (; d--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = jn(g)), (h = jn(h));
              }
              g = null;
            }
          else g = null;
          S !== null && Ms(p, m, S, g, !1),
            y !== null && _ !== null && Ms(p, _, y, g, !0);
        }
      }
      e: {
        if (
          ((m = s ? Bn(s) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var C = Pm;
        else if (Rs(m))
          if (Bf) C = Lm;
          else {
            C = Tm;
            var N = _m;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Nm);
        if (C && (C = C(e, s))) {
          If(p, C, n, c);
          break e;
        }
        N && N(e, m, s),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            Xi(m, "number", m.value);
      }
      switch (((N = s ? Bn(s) : window), e)) {
        case "focusin":
          (Rs(N) || N.contentEditable === "true") &&
            ((Un = N), (uu = s), ($r = null));
          break;
        case "focusout":
          $r = uu = Un = null;
          break;
        case "mousedown":
          au = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (au = !1), Ls(p, n, c);
          break;
        case "selectionchange":
          if (Mm) break;
        case "keydown":
        case "keyup":
          Ls(p, n, c);
      }
      var R;
      if (aa)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        An
          ? Af(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Ff &&
          n.locale !== "ko" &&
          (An || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && An && (R = zf())
            : ((Yt = c),
              (oa = "value" in Yt ? Yt.value : Yt.textContent),
              (An = !0))),
        (N = co(s, L)),
        0 < N.length &&
          ((L = new Es(L, e, null, n, c)),
          p.push({ event: L, listeners: N }),
          R ? (L.data = R) : ((R = Uf(n)), R !== null && (L.data = R)))),
        (R = Em ? xm(e, n) : km(e, n)) &&
          ((s = co(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Es("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = R)));
    }
    Gf(p, t);
  });
}
function rl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function co(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Gr(e, n)),
      o != null && r.unshift(rl(e, o, l)),
      (o = Gr(e, t)),
      o != null && r.push(rl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ms(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Gr(n, o)), a != null && i.unshift(rl(n, a, u)))
        : l || ((a = Gr(n, o)), a != null && i.push(rl(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Am = /\r\n?/g,
  Um = /\u0000|\uFFFD/g;
function js(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Am,
      `
`
    )
    .replace(Um, "");
}
function zl(e, t, n) {
  if (((t = js(t)), js(e) !== t && n)) throw Error(T(425));
}
function fo() {}
var su = null,
  cu = null;
function fu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var du = typeof setTimeout == "function" ? setTimeout : void 0,
  Im = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zs = typeof Promise == "function" ? Promise : void 0,
  Bm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zs < "u"
      ? function (e) {
          return zs.resolve(null).then(e).catch($m);
        }
      : du;
function $m(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ci(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  br(t);
}
function bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Fs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + fr,
  ll = "__reactProps$" + fr,
  Mt = "__reactContainer$" + fr,
  pu = "__reactEvents$" + fr,
  Hm = "__reactListeners$" + fr,
  Vm = "__reactHandles$" + fr;
function wn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fs(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = Fs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vl(e) {
  return (
    (e = e[yt] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Fo(e) {
  return e[ll] || null;
}
var hu = [],
  $n = -1;
function sn(e) {
  return { current: e };
}
function re(e) {
  0 > $n || ((e.current = hu[$n]), (hu[$n] = null), $n--);
}
function te(e, t) {
  $n++, (hu[$n] = e.current), (e.current = t);
}
var on = {},
  Oe = sn(on),
  Be = sn(!1),
  Rn = on;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function po() {
  re(Be), re(Oe);
}
function As(e, t, n) {
  if (Oe.current !== on) throw Error(T(168));
  te(Oe, t), te(Be, n);
}
function Zf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(T(108, _h(e) || "Unknown", l));
  return se({}, n, r);
}
function ho(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
    (Rn = Oe.current),
    te(Oe, e),
    te(Be, Be.current),
    !0
  );
}
function Us(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Zf(e, t, Rn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Be),
      re(Oe),
      te(Oe, e))
    : re(Be),
    te(Be, n);
}
var Pt = null,
  Ao = !1,
  Ri = !1;
function bf(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Wm(e) {
  (Ao = !0), bf(e);
}
function cn() {
  if (!Ri && Pt !== null) {
    Ri = !0;
    var e = 0,
      t = X;
    try {
      var n = Pt;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (Ao = !1);
    } catch (l) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Cf(ta, cn), l);
    } finally {
      (X = t), (Ri = !1);
    }
  }
  return null;
}
var Hn = [],
  Vn = 0,
  mo = null,
  yo = 0,
  qe = [],
  Ze = 0,
  Pn = null,
  _t = 1,
  Tt = "";
function vn(e, t) {
  (Hn[Vn++] = yo), (Hn[Vn++] = mo), (mo = e), (yo = t);
}
function ed(e, t, n) {
  (qe[Ze++] = _t), (qe[Ze++] = Tt), (qe[Ze++] = Pn), (Pn = e);
  var r = _t;
  e = Tt;
  var l = 32 - ct(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ct(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (_t = (1 << (32 - ct(t) + l)) | (n << l) | r),
      (Tt = o + e);
  } else (_t = (1 << o) | (n << l) | r), (Tt = e);
}
function ca(e) {
  e.return !== null && (vn(e, 1), ed(e, 1, 0));
}
function fa(e) {
  for (; e === mo; )
    (mo = Hn[--Vn]), (Hn[Vn] = null), (yo = Hn[--Vn]), (Hn[Vn] = null);
  for (; e === Pn; )
    (Pn = qe[--Ze]),
      (qe[Ze] = null),
      (Tt = qe[--Ze]),
      (qe[Ze] = null),
      (_t = qe[--Ze]),
      (qe[Ze] = null);
}
var Qe = null,
  We = null,
  le = !1,
  st = null;
function td(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Is(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Qe = e), (We = bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Qe = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pn !== null ? { id: _t, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Qe = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function mu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yu(e) {
  if (le) {
    var t = We;
    if (t) {
      var n = t;
      if (!Is(e, t)) {
        if (mu(e)) throw Error(T(418));
        t = bt(n.nextSibling);
        var r = Qe;
        t && Is(e, t)
          ? td(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Qe = e));
      }
    } else {
      if (mu(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Qe = e);
    }
  }
}
function Bs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Qe = e;
}
function Fl(e) {
  if (e !== Qe) return !1;
  if (!le) return Bs(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !fu(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (mu(e)) throw (nd(), Error(T(418)));
    for (; t; ) td(e, t), (t = bt(t.nextSibling));
  }
  if ((Bs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Qe ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function nd() {
  for (var e = We; e; ) e = bt(e.nextSibling);
}
function rr() {
  (We = Qe = null), (le = !1);
}
function da(e) {
  st === null ? (st = [e]) : st.push(e);
}
var Qm = Ft.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var vo = sn(null),
  go = null,
  Wn = null,
  pa = null;
function ha() {
  pa = Wn = go = null;
}
function ma(e) {
  var t = vo.current;
  re(vo), (e._currentValue = t);
}
function vu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (go = e),
    (pa = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (pa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (go === null) throw Error(T(308));
      (Wn = e), (go.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return t;
}
var Sn = null;
function ya(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function rd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ya(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function va(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ld(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ya(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function Jl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), na(e, n);
  }
}
function $s(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function wo(e, t, n, r) {
  var l = e.updateQueue;
  Qt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== i &&
        (u === null ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (c = s = a = null), (u = o);
    do {
      var m = u.lane,
        S = u.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            g = u;
          switch (((m = t), (S = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                p = y.call(S, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (m = typeof y == "function" ? y.call(S, p, m) : y),
                m == null)
              )
                break e;
              p = se({}, p, m);
              break e;
            case 2:
              Qt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((s = c = S), (a = p)) : (c = c.next = S),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = p),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Tn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Hs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(T(191, l));
        l.call(r);
      }
    }
}
var od = new nf.Component().refs;
function gu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Uo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = nn(e),
      o = Nt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = en(e, o, l)),
      t !== null && (ft(t, e, l, r), Jl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = nn(e),
      o = Nt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = en(e, o, l)),
      t !== null && (ft(t, e, l, r), Jl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = nn(e),
      l = Nt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = en(e, l, r)),
      t !== null && (ft(t, e, r, n), Jl(t, e, r));
  },
};
function Vs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !tl(n, r) || !tl(l, o)
      : !0
  );
}
function id(e, t, n) {
  var r = !1,
    l = on,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = nt(o))
      : ((l = $e(t) ? Rn : Oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nr(e, l) : on)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Uo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ws(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Uo.enqueueReplaceState(t, t.state, null);
}
function wu(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = od), va(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = nt(o))
    : ((o = $e(t) ? Rn : Oe.current), (l.context = nr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (gu(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Uo.enqueueReplaceState(l, l.state, null),
      wo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === od && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Al(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Qs(e) {
  var t = e._init;
  return t(e._payload);
}
function ud(e) {
  function t(h, d) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [d]), (h.flags |= 16)) : v.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), (d = d.sibling);
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
    return h;
  }
  function l(h, d) {
    return (h = rn(h, d)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, d, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < d ? ((h.flags |= 2), d) : v)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, d, v, f) {
    return d === null || d.tag !== 6
      ? ((d = Di(v, h.mode, f)), (d.return = h), d)
      : ((d = l(d, v)), (d.return = h), d);
  }
  function a(h, d, v, f) {
    var C = v.type;
    return C === Fn
      ? c(h, d, v.props.children, f, v.key)
      : d !== null &&
        (d.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Wt &&
            Qs(C) === d.type))
      ? ((f = l(d, v.props)), (f.ref = Rr(h, d, v)), (f.return = h), f)
      : ((f = bl(v.type, v.key, v.props, null, h.mode, f)),
        (f.ref = Rr(h, d, v)),
        (f.return = h),
        f);
  }
  function s(h, d, v, f) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = Mi(v, h.mode, f)), (d.return = h), d)
      : ((d = l(d, v.children || [])), (d.return = h), d);
  }
  function c(h, d, v, f, C) {
    return d === null || d.tag !== 7
      ? ((d = Cn(v, h.mode, f, C)), (d.return = h), d)
      : ((d = l(d, v)), (d.return = h), d);
  }
  function p(h, d, v) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Di("" + d, h.mode, v)), (d.return = h), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Pl:
          return (
            (v = bl(d.type, d.key, d.props, null, h.mode, v)),
            (v.ref = Rr(h, null, d)),
            (v.return = h),
            v
          );
        case zn:
          return (d = Mi(d, h.mode, v)), (d.return = h), d;
        case Wt:
          var f = d._init;
          return p(h, f(d._payload), v);
      }
      if (jr(d) || Sr(d))
        return (d = Cn(d, h.mode, v, null)), (d.return = h), d;
      Al(h, d);
    }
    return null;
  }
  function m(h, d, v, f) {
    var C = d !== null ? d.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : u(h, d, "" + v, f);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Pl:
          return v.key === C ? a(h, d, v, f) : null;
        case zn:
          return v.key === C ? s(h, d, v, f) : null;
        case Wt:
          return (C = v._init), m(h, d, C(v._payload), f);
      }
      if (jr(v) || Sr(v)) return C !== null ? null : c(h, d, v, f, null);
      Al(h, v);
    }
    return null;
  }
  function S(h, d, v, f, C) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (h = h.get(v) || null), u(d, h, "" + f, C);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Pl:
          return (h = h.get(f.key === null ? v : f.key) || null), a(d, h, f, C);
        case zn:
          return (h = h.get(f.key === null ? v : f.key) || null), s(d, h, f, C);
        case Wt:
          var N = f._init;
          return S(h, d, v, N(f._payload), C);
      }
      if (jr(f) || Sr(f)) return (h = h.get(v) || null), c(d, h, f, C, null);
      Al(d, f);
    }
    return null;
  }
  function y(h, d, v, f) {
    for (
      var C = null, N = null, R = d, L = (d = 0), H = null;
      R !== null && L < v.length;
      L++
    ) {
      R.index > L ? ((H = R), (R = null)) : (H = R.sibling);
      var A = m(h, R, v[L], f);
      if (A === null) {
        R === null && (R = H);
        break;
      }
      e && R && A.alternate === null && t(h, R),
        (d = o(A, d, L)),
        N === null ? (C = A) : (N.sibling = A),
        (N = A),
        (R = H);
    }
    if (L === v.length) return n(h, R), le && vn(h, L), C;
    if (R === null) {
      for (; L < v.length; L++)
        (R = p(h, v[L], f)),
          R !== null &&
            ((d = o(R, d, L)), N === null ? (C = R) : (N.sibling = R), (N = R));
      return le && vn(h, L), C;
    }
    for (R = r(h, R); L < v.length; L++)
      (H = S(R, h, L, v[L], f)),
        H !== null &&
          (e && H.alternate !== null && R.delete(H.key === null ? L : H.key),
          (d = o(H, d, L)),
          N === null ? (C = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        R.forEach(function (oe) {
          return t(h, oe);
        }),
      le && vn(h, L),
      C
    );
  }
  function g(h, d, v, f) {
    var C = Sr(v);
    if (typeof C != "function") throw Error(T(150));
    if (((v = C.call(v)), v == null)) throw Error(T(151));
    for (
      var N = (C = null), R = d, L = (d = 0), H = null, A = v.next();
      R !== null && !A.done;
      L++, A = v.next()
    ) {
      R.index > L ? ((H = R), (R = null)) : (H = R.sibling);
      var oe = m(h, R, A.value, f);
      if (oe === null) {
        R === null && (R = H);
        break;
      }
      e && R && oe.alternate === null && t(h, R),
        (d = o(oe, d, L)),
        N === null ? (C = oe) : (N.sibling = oe),
        (N = oe),
        (R = H);
    }
    if (A.done) return n(h, R), le && vn(h, L), C;
    if (R === null) {
      for (; !A.done; L++, A = v.next())
        (A = p(h, A.value, f)),
          A !== null &&
            ((d = o(A, d, L)), N === null ? (C = A) : (N.sibling = A), (N = A));
      return le && vn(h, L), C;
    }
    for (R = r(h, R); !A.done; L++, A = v.next())
      (A = S(R, h, L, A.value, f)),
        A !== null &&
          (e && A.alternate !== null && R.delete(A.key === null ? L : A.key),
          (d = o(A, d, L)),
          N === null ? (C = A) : (N.sibling = A),
          (N = A));
    return (
      e &&
        R.forEach(function (De) {
          return t(h, De);
        }),
      le && vn(h, L),
      C
    );
  }
  function _(h, d, v, f) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Fn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Pl:
          e: {
            for (var C = v.key, N = d; N !== null; ) {
              if (N.key === C) {
                if (((C = v.type), C === Fn)) {
                  if (N.tag === 7) {
                    n(h, N.sibling),
                      (d = l(N, v.props.children)),
                      (d.return = h),
                      (h = d);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Wt &&
                    Qs(C) === N.type)
                ) {
                  n(h, N.sibling),
                    (d = l(N, v.props)),
                    (d.ref = Rr(h, N, v)),
                    (d.return = h),
                    (h = d);
                  break e;
                }
                n(h, N);
                break;
              } else t(h, N);
              N = N.sibling;
            }
            v.type === Fn
              ? ((d = Cn(v.props.children, h.mode, f, v.key)),
                (d.return = h),
                (h = d))
              : ((f = bl(v.type, v.key, v.props, null, h.mode, f)),
                (f.ref = Rr(h, d, v)),
                (f.return = h),
                (h = f));
          }
          return i(h);
        case zn:
          e: {
            for (N = v.key; d !== null; ) {
              if (d.key === N)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  n(h, d.sibling),
                    (d = l(d, v.children || [])),
                    (d.return = h),
                    (h = d);
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            (d = Mi(v, h.mode, f)), (d.return = h), (h = d);
          }
          return i(h);
        case Wt:
          return (N = v._init), _(h, d, N(v._payload), f);
      }
      if (jr(v)) return y(h, d, v, f);
      if (Sr(v)) return g(h, d, v, f);
      Al(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = l(d, v)), (d.return = h), (h = d))
          : (n(h, d), (d = Di(v, h.mode, f)), (d.return = h), (h = d)),
        i(h))
      : n(h, d);
  }
  return _;
}
var lr = ud(!0),
  ad = ud(!1),
  gl = {},
  wt = sn(gl),
  ol = sn(gl),
  il = sn(gl);
function En(e) {
  if (e === gl) throw Error(T(174));
  return e;
}
function ga(e, t) {
  switch ((te(il, t), te(ol, e), te(wt, gl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = qi(t, e));
  }
  re(wt), te(wt, t);
}
function or() {
  re(wt), re(ol), re(il);
}
function sd(e) {
  En(il.current);
  var t = En(wt.current),
    n = qi(t, e.type);
  t !== n && (te(ol, e), te(wt, n));
}
function wa(e) {
  ol.current === e && (re(wt), re(ol));
}
var ue = sn(0);
function So(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pi = [];
function Sa() {
  for (var e = 0; e < Pi.length; e++)
    Pi[e]._workInProgressVersionPrimary = null;
  Pi.length = 0;
}
var Yl = Ft.ReactCurrentDispatcher,
  _i = Ft.ReactCurrentBatchConfig,
  _n = 0,
  ae = null,
  Ee = null,
  ke = null,
  Eo = !1,
  Hr = !1,
  ul = 0,
  Km = 0;
function Te() {
  throw Error(T(321));
}
function Ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function xa(e, t, n, r, l, o) {
  if (
    ((_n = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yl.current = e === null || e.memoizedState === null ? Gm : qm),
    (e = n(r, l)),
    Hr)
  ) {
    o = 0;
    do {
      if (((Hr = !1), (ul = 0), 25 <= o)) throw Error(T(301));
      (o += 1),
        (ke = Ee = null),
        (t.updateQueue = null),
        (Yl.current = Zm),
        (e = n(r, l));
    } while (Hr);
  }
  if (
    ((Yl.current = xo),
    (t = Ee !== null && Ee.next !== null),
    (_n = 0),
    (ke = Ee = ae = null),
    (Eo = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function ka() {
  var e = ul !== 0;
  return (ul = 0), e;
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ae.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function rt() {
  if (Ee === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = ke === null ? ae.memoizedState : ke.next;
  if (t !== null) (ke = t), (Ee = e);
  else {
    if (e === null) throw Error(T(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      ke === null ? (ae.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function al(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ti(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var c = s.lane;
      if ((_n & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = p), (i = r)) : (a = a.next = p),
          (ae.lanes |= c),
          (Tn |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      dt(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ae.lanes |= o), (Tn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ni(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    dt(o, t.memoizedState) || (Ie = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function cd() {}
function fd(e, t) {
  var n = ae,
    r = rt(),
    l = t(),
    o = !dt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ie = !0)),
    (r = r.queue),
    Ca(hd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sl(9, pd.bind(null, n, r, l, t), void 0, null),
      Ce === null)
    )
      throw Error(T(349));
    _n & 30 || dd(n, t, l);
  }
  return l;
}
function dd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function pd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), md(t) && yd(e);
}
function hd(e, t, n) {
  return n(function () {
    md(t) && yd(e);
  });
}
function md(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function yd(e) {
  var t = jt(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function Ks(e) {
  var t = mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: al,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xm.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function sl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vd() {
  return rt().memoizedState;
}
function Xl(e, t, n, r) {
  var l = mt();
  (ae.flags |= e),
    (l.memoizedState = sl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Io(e, t, n, r) {
  var l = rt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ee !== null) {
    var i = Ee.memoizedState;
    if (((o = i.destroy), r !== null && Ea(r, i.deps))) {
      l.memoizedState = sl(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = sl(1 | t, n, o, r));
}
function Js(e, t) {
  return Xl(8390656, 8, e, t);
}
function Ca(e, t) {
  return Io(2048, 8, e, t);
}
function gd(e, t) {
  return Io(4, 2, e, t);
}
function wd(e, t) {
  return Io(4, 4, e, t);
}
function Sd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ed(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Io(4, 4, Sd.bind(null, t, e), n)
  );
}
function Ra() {}
function xd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function kd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cd(e, t, n) {
  return _n & 21
    ? (dt(n, t) || ((n = _f()), (ae.lanes |= n), (Tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function Jm(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _i.transition;
  _i.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (_i.transition = r);
  }
}
function Rd() {
  return rt().memoizedState;
}
function Ym(e, t, n) {
  var r = nn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pd(e))
  )
    _d(t, n);
  else if (((n = rd(e, t, n, r)), n !== null)) {
    var l = ze();
    ft(n, e, r, l), Td(n, t, r);
  }
}
function Xm(e, t, n) {
  var r = nn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pd(e)) _d(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), dt(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), ya(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = rd(e, t, l, r)),
      n !== null && ((l = ze()), ft(n, e, r, l), Td(n, t, r));
  }
}
function Pd(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function _d(e, t) {
  Hr = Eo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Td(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), na(e, n);
  }
}
var xo = {
    readContext: nt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  Gm = {
    readContext: nt,
    useCallback: function (e, t) {
      return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: Js,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xl(4194308, 4, Sd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ym.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ks,
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ks(!1),
        t = e[0];
      return (e = Jm.bind(null, e[1])), (mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = mt();
      if (le) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(T(349));
        _n & 30 || dd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Js(hd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        sl(9, pd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = Ce.identifierPrefix;
      if (le) {
        var n = Tt,
          r = _t;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ul++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Km++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qm = {
    readContext: nt,
    useCallback: xd,
    useContext: nt,
    useEffect: Ca,
    useImperativeHandle: Ed,
    useInsertionEffect: gd,
    useLayoutEffect: wd,
    useMemo: kd,
    useReducer: Ti,
    useRef: vd,
    useState: function () {
      return Ti(al);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = rt();
      return Cd(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ti(al)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: cd,
    useSyncExternalStore: fd,
    useId: Rd,
    unstable_isNewReconciler: !1,
  },
  Zm = {
    readContext: nt,
    useCallback: xd,
    useContext: nt,
    useEffect: Ca,
    useImperativeHandle: Ed,
    useInsertionEffect: gd,
    useLayoutEffect: wd,
    useMemo: kd,
    useReducer: Ni,
    useRef: vd,
    useState: function () {
      return Ni(al);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = rt();
      return Ee === null ? (t.memoizedState = e) : Cd(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ni(al)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: cd,
    useSyncExternalStore: fd,
    useId: Rd,
    unstable_isNewReconciler: !1,
  };
function ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ph(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Li(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Su(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var bm = typeof WeakMap == "function" ? WeakMap : Map;
function Nd(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Co || ((Co = !0), (Lu = r)), Su(e, t);
    }),
    n
  );
}
function Ld(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Su(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Su(e, t),
          typeof r != "function" &&
            (tn === null ? (tn = new Set([this])) : tn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ys(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = py.bind(null, e, t, n)), t.then(e, e));
}
function Xs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Nt(-1, 1)), (t.tag = 2), en(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ey = Ft.ReactCurrentOwner,
  Ie = !1;
function je(e, t, n, r) {
  t.child = e === null ? ad(t, null, n, r) : lr(t, e.child, n, r);
}
function qs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Zn(t, l),
    (r = xa(e, t, n, r, o, l)),
    (n = ka()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        zt(e, t, l))
      : (le && n && ca(t), (t.flags |= 1), je(e, t, r, l), t.child)
  );
}
function Zs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ma(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Od(e, t, o, r, l))
      : ((e = bl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : tl), n(i, r) && e.ref === t.ref)
    )
      return zt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = rn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Od(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (tl(o, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), zt(e, t, l);
  }
  return Eu(e, t, n, r, l);
}
function Dd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Kn, Ve),
        (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Kn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        te(Kn, Ve),
        (Ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Kn, Ve),
      (Ve |= r);
  return je(e, t, l, n), t.child;
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Eu(e, t, n, r, l) {
  var o = $e(n) ? Rn : Oe.current;
  return (
    (o = nr(t, o)),
    Zn(t, l),
    (n = xa(e, t, n, r, o, l)),
    (r = ka()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        zt(e, t, l))
      : (le && r && ca(t), (t.flags |= 1), je(e, t, n, l), t.child)
  );
}
function bs(e, t, n, r, l) {
  if ($e(n)) {
    var o = !0;
    ho(t);
  } else o = !1;
  if ((Zn(t, l), t.stateNode === null))
    Gl(e, t), id(t, n, r), wu(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = nt(s))
      : ((s = $e(n) ? Rn : Oe.current), (s = nr(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && Ws(t, i, r, s)),
      (Qt = !1);
    var m = t.memoizedState;
    (i.state = m),
      wo(t, r, i, l),
      (a = t.memoizedState),
      u !== r || m !== a || Be.current || Qt
        ? (typeof c == "function" && (gu(t, n, c, r), (a = t.memoizedState)),
          (u = Qt || Vs(t, n, u, r, m, a, s))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ld(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : it(t.type, u)),
      (i.props = s),
      (p = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = nt(a))
        : ((a = $e(n) ? Rn : Oe.current), (a = nr(t, a)));
    var S = n.getDerivedStateFromProps;
    (c =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || m !== a) && Ws(t, i, r, a)),
      (Qt = !1),
      (m = t.memoizedState),
      (i.state = m),
      wo(t, r, i, l);
    var y = t.memoizedState;
    u !== p || m !== y || Be.current || Qt
      ? (typeof S == "function" && (gu(t, n, S, r), (y = t.memoizedState)),
        (s = Qt || Vs(t, n, s, r, m, y, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xu(e, t, n, r, o, l);
}
function xu(e, t, n, r, l, o) {
  Md(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Us(t, n, !1), zt(e, t, o);
  (r = t.stateNode), (ey.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = lr(t, e.child, null, o)), (t.child = lr(t, null, u, o)))
      : je(e, t, u, o),
    (t.memoizedState = r.state),
    l && Us(t, n, !0),
    t.child
  );
}
function jd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? As(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && As(e, t.context, !1),
    ga(e, t.containerInfo);
}
function ec(e, t, n, r, l) {
  return rr(), da(l), (t.flags |= 256), je(e, t, n, r), t.child;
}
var ku = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zd(e, t, n) {
  var r = t.pendingProps,
    l = ue.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    te(ue, l & 1),
    e === null)
  )
    return (
      yu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ho(i, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Cu(n)),
              (t.memoizedState = ku),
              e)
            : Pa(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ty(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = rn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = rn(u, o)) : ((o = Cn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Cu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ku),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = rn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Pa(e, t) {
  return (
    (t = Ho({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ul(e, t, n, r) {
  return (
    r !== null && da(r),
    lr(t, e.child, null, n),
    (e = Pa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ty(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Li(Error(T(422)))), Ul(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ho({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Cn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && lr(t, e.child, null, i),
        (t.child.memoizedState = Cu(i)),
        (t.memoizedState = ku),
        o);
  if (!(t.mode & 1)) return Ul(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(T(419))), (r = Li(o, r, void 0)), Ul(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ie || u)) {
    if (((r = Ce), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), jt(e, l), ft(r, e, l, -1));
    }
    return Da(), (r = Li(Error(T(421)))), Ul(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hy.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (We = bt(l.nextSibling)),
      (Qe = t),
      (le = !0),
      (st = null),
      e !== null &&
        ((qe[Ze++] = _t),
        (qe[Ze++] = Tt),
        (qe[Ze++] = Pn),
        (_t = e.id),
        (Tt = e.overflow),
        (Pn = t)),
      (t = Pa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function tc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vu(e.return, t, n);
}
function Oi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Fd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((je(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tc(e, n, t);
        else if (e.tag === 19) tc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((te(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && So(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Oi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && So(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Oi(t, !0, n, null, o);
        break;
      case "together":
        Oi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ny(e, t, n) {
  switch (t.tag) {
    case 3:
      jd(t), rr();
      break;
    case 5:
      sd(t);
      break;
    case 1:
      $e(t.type) && ho(t);
      break;
    case 4:
      ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      te(vo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? zd(e, t, n)
          : (te(ue, ue.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        te(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Dd(e, t, n);
  }
  return zt(e, t, n);
}
var Ad, Ru, Ud, Id;
Ad = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ru = function () {};
Ud = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), En(wt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ji(e, l)), (r = Ji(e, r)), (o = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Gi(e, l)), (r = Gi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = fo);
    }
    Zi(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Yr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Yr.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && ne("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Id = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ry(e, t, n) {
  var r = t.pendingProps;
  switch ((fa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return $e(t.type) && po(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        or(),
        re(Be),
        re(Oe),
        Sa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (Mu(st), (st = null)))),
        Ru(e, t),
        Ne(t),
        null
      );
    case 5:
      wa(t);
      var l = En(il.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ud(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Ne(t), null;
        }
        if (((e = En(wt.current)), Fl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[yt] = t), (r[ll] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Fr.length; l++) ne(Fr[l], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              cs(r, o), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              ds(r, o), ne("invalid", r);
          }
          Zi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      zl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      zl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Yr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              _l(r), fs(r, o, !0);
              break;
            case "textarea":
              _l(r), ps(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = fo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = df(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[yt] = t),
            (e[ll] = r),
            Ad(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = bi(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fr.length; l++) ne(Fr[l], e);
                l = r;
                break;
              case "source":
                ne("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (l = r);
                break;
              case "details":
                ne("toggle", e), (l = r);
                break;
              case "input":
                cs(e, r), (l = Ji(e, r)), ne("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  ne("invalid", e);
                break;
              case "textarea":
                ds(e, r), (l = Gi(e, r)), ne("invalid", e);
                break;
              default:
                l = r;
            }
            Zi(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? mf(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && pf(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Xr(e, a)
                    : typeof a == "number" && Xr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Yr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && ne("scroll", e)
                      : a != null && Gu(e, o, a, i));
              }
            switch (n) {
              case "input":
                _l(e), fs(e, r, !1);
                break;
              case "textarea":
                _l(e), ps(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = fo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) Id(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = En(il.current)), En(wt.current), Fl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (o = r.nodeValue !== n) && ((e = Qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                zl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (re(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && We !== null && t.mode & 1 && !(t.flags & 128))
          nd(), rr(), (t.flags |= 98560), (o = !1);
        else if (((o = Fl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(T(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(T(317));
            o[yt] = t;
          } else
            rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (o = !1);
        } else st !== null && (Mu(st), (st = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : Da())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        or(), Ru(e, t), e === null && nl(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return ma(t.type._context), Ne(t), null;
    case 17:
      return $e(t.type) && po(), Ne(t), null;
    case 19:
      if ((re(ue), (o = t.memoizedState), o === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Pr(o, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = So(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ye() > ur &&
            ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = So(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !le)
            )
              return Ne(t), null;
          } else
            2 * ye() - o.renderingStartTime > ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = ue.current),
          te(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Oa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function ly(e, t) {
  switch ((fa(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && po(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        or(),
        re(Be),
        re(Oe),
        Sa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return wa(t), null;
    case 13:
      if (
        (re(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(ue), null;
    case 4:
      return or(), null;
    case 10:
      return ma(t.type._context), null;
    case 22:
    case 23:
      return Oa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Il = !1,
  Le = !1,
  oy = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function Pu(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var nc = !1;
function iy(e, t) {
  if (((su = ao), (e = Vf()), sa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            c = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (S = p.firstChild) !== null;

            )
              (m = p), (p = S);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++s === l && (u = i),
                m === o && ++c === r && (a = i),
                (S = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = S;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (cu = { focusedElem: e, selectionRange: n }, ao = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    _ = y.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : it(t.type, g),
                      _
                    );
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (f) {
          fe(t, t.return, f);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = nc), (nc = !1), y;
}
function Vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Pu(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Bo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _u(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[ll], delete t[pu], delete t[Hm], delete t[Vm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $d(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $d(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tu(e, t, n), e = e.sibling; e !== null; ) Tu(e, t, n), (e = e.sibling);
}
function Nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Nu(e, t, n), e = e.sibling; e !== null; ) Nu(e, t, n), (e = e.sibling);
}
var Re = null,
  ut = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) Hd(e, t, n), (n = n.sibling);
}
function Hd(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount(Do, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Qn(n, t);
    case 6:
      var r = Re,
        l = ut;
      (Re = null),
        $t(e, t, n),
        (Re = r),
        (ut = l),
        Re !== null &&
          (ut
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (ut
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ci(e.parentNode, n)
              : e.nodeType === 1 && Ci(e, n),
            br(e))
          : Ci(Re, n.stateNode));
      break;
    case 4:
      (r = Re),
        (l = ut),
        (Re = n.stateNode.containerInfo),
        (ut = !0),
        $t(e, t, n),
        (Re = r),
        (ut = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Pu(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (Qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          fe(n, t, u);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), $t(e, t, n), (Le = r))
        : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function lc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new oy()),
      t.forEach(function (r) {
        var l = my.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Re = u.stateNode), (ut = !1);
              break e;
            case 3:
              (Re = u.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (Re = u.stateNode.containerInfo), (ut = !0);
              break e;
          }
          u = u.return;
        }
        if (Re === null) throw Error(T(160));
        Hd(o, i, l), (Re = null), (ut = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        fe(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vd(t, e), (t = t.sibling);
}
function Vd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), ht(e), r & 4)) {
        try {
          Vr(3, e, e.return), Bo(3, e);
        } catch (g) {
          fe(e, e.return, g);
        }
        try {
          Vr(5, e, e.return);
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 1:
      ot(t, e), ht(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        ht(e),
        r & 512 && n !== null && Qn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Xr(l, "");
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && cf(l, o),
              bi(u, i);
            var s = bi(u, o);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                p = a[i + 1];
              c === "style"
                ? mf(l, p)
                : c === "dangerouslySetInnerHTML"
                ? pf(l, p)
                : c === "children"
                ? Xr(l, p)
                : Gu(l, c, p, s);
            }
            switch (u) {
              case "input":
                Yi(l, o);
                break;
              case "textarea":
                ff(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Yn(l, !!o.multiple, S, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yn(l, !!o.multiple, o.defaultValue, !0)
                      : Yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[ll] = o;
          } catch (g) {
            fe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ot(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          br(t.containerInfo);
        } catch (g) {
          fe(e, e.return, g);
        }
      break;
    case 4:
      ot(t, e), ht(e);
      break;
    case 13:
      ot(t, e),
        ht(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Na = ye())),
        r & 4 && lc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (s = Le) || c), ot(t, e), (Le = s)) : ot(t, e),
        ht(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (p = M = c; M !== null; ) {
              switch (((m = M), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, m, m.return);
                  break;
                case 1:
                  Qn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      fe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Qn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ic(p);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (M = S)) : ic(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (l = p.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = hf("display", i)));
              } catch (g) {
                fe(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (g) {
                fe(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), ht(e), r & 4 && lc(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($d(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Xr(l, ""), (r.flags &= -33));
          var o = rc(e);
          Nu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = rc(e);
          Tu(e, u, i);
          break;
        default:
          throw Error(T(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function uy(e, t, n) {
  (M = e), Wd(e);
}
function Wd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Il;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Le;
        u = Il;
        var s = Le;
        if (((Il = i), (Le = a) && !s))
          for (M = l; M !== null; )
            (i = M),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? uc(l)
                : a !== null
                ? ((a.return = i), (M = a))
                : uc(l);
        for (; o !== null; ) (M = o), Wd(o), (o = o.sibling);
        (M = l), (Il = u), (Le = s);
      }
      oc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (M = o)) : oc(e);
  }
}
function oc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || Bo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Hs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && br(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Le || (t.flags & 512 && _u(t));
      } catch (m) {
        fe(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function ic(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function uc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bo(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, l, a);
            }
          }
          var o = t.return;
          try {
            _u(t);
          } catch (a) {
            fe(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            _u(t);
          } catch (a) {
            fe(t, i, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (M = u);
      break;
    }
    M = t.return;
  }
}
var ay = Math.ceil,
  ko = Ft.ReactCurrentDispatcher,
  _a = Ft.ReactCurrentOwner,
  et = Ft.ReactCurrentBatchConfig,
  Y = 0,
  Ce = null,
  ge = null,
  Pe = 0,
  Ve = 0,
  Kn = sn(0),
  xe = 0,
  cl = null,
  Tn = 0,
  $o = 0,
  Ta = 0,
  Wr = null,
  Ue = null,
  Na = 0,
  ur = 1 / 0,
  Rt = null,
  Co = !1,
  Lu = null,
  tn = null,
  Bl = !1,
  Xt = null,
  Ro = 0,
  Qr = 0,
  Ou = null,
  ql = -1,
  Zl = 0;
function ze() {
  return Y & 6 ? ye() : ql !== -1 ? ql : (ql = ye());
}
function nn(e) {
  return e.mode & 1
    ? Y & 2 && Pe !== 0
      ? Pe & -Pe
      : Qm.transition !== null
      ? (Zl === 0 && (Zl = _f()), Zl)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jf(e.type))),
        e)
    : 1;
}
function ft(e, t, n, r) {
  if (50 < Qr) throw ((Qr = 0), (Ou = null), Error(T(185)));
  ml(e, n, r),
    (!(Y & 2) || e !== Ce) &&
      (e === Ce && (!(Y & 2) && ($o |= n), xe === 4 && Jt(e, Pe)),
      He(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((ur = ye() + 500), Ao && cn()));
}
function He(e, t) {
  var n = e.callbackNode;
  Qh(e, t);
  var r = uo(e, e === Ce ? Pe : 0);
  if (r === 0)
    n !== null && ys(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ys(n), t === 1))
      e.tag === 0 ? Wm(ac.bind(null, e)) : bf(ac.bind(null, e)),
        Bm(function () {
          !(Y & 6) && cn();
        }),
        (n = null);
    else {
      switch (Tf(r)) {
        case 1:
          n = ta;
          break;
        case 4:
          n = Rf;
          break;
        case 16:
          n = io;
          break;
        case 536870912:
          n = Pf;
          break;
        default:
          n = io;
      }
      n = Zd(n, Qd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qd(e, t) {
  if (((ql = -1), (Zl = 0), Y & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = uo(e, e === Ce ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Po(e, r);
  else {
    t = r;
    var l = Y;
    Y |= 2;
    var o = Jd();
    (Ce !== e || Pe !== t) && ((Rt = null), (ur = ye() + 500), kn(e, t));
    do
      try {
        fy();
        break;
      } catch (u) {
        Kd(e, u);
      }
    while (1);
    ha(),
      (ko.current = o),
      (Y = l),
      ge !== null ? (t = 0) : ((Ce = null), (Pe = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = lu(e)), l !== 0 && ((r = l), (t = Du(e, l)))), t === 1)
    )
      throw ((n = cl), kn(e, 0), Jt(e, r), He(e, ye()), n);
    if (t === 6) Jt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !sy(l) &&
          ((t = Po(e, r)),
          t === 2 && ((o = lu(e)), o !== 0 && ((r = o), (t = Du(e, o)))),
          t === 1))
      )
        throw ((n = cl), kn(e, 0), Jt(e, r), He(e, ye()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          gn(e, Ue, Rt);
          break;
        case 3:
          if (
            (Jt(e, r), (r & 130023424) === r && ((t = Na + 500 - ye()), 10 < t))
          ) {
            if (uo(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = du(gn.bind(null, e, Ue, Rt), t);
            break;
          }
          gn(e, Ue, Rt);
          break;
        case 4:
          if ((Jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ct(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ay(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = du(gn.bind(null, e, Ue, Rt), r);
            break;
          }
          gn(e, Ue, Rt);
          break;
        case 5:
          gn(e, Ue, Rt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return He(e, ye()), e.callbackNode === n ? Qd.bind(null, e) : null;
}
function Du(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = Po(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Mu(t)),
    e
  );
}
function Mu(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function sy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!dt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Jt(e, t) {
  for (
    t &= ~Ta,
      t &= ~$o,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ac(e) {
  if (Y & 6) throw Error(T(327));
  bn();
  var t = uo(e, 0);
  if (!(t & 1)) return He(e, ye()), null;
  var n = Po(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lu(e);
    r !== 0 && ((t = r), (n = Du(e, r)));
  }
  if (n === 1) throw ((n = cl), kn(e, 0), Jt(e, t), He(e, ye()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gn(e, Ue, Rt),
    He(e, ye()),
    null
  );
}
function La(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((ur = ye() + 500), Ao && cn());
  }
}
function Nn(e) {
  Xt !== null && Xt.tag === 0 && !(Y & 6) && bn();
  var t = Y;
  Y |= 1;
  var n = et.transition,
    r = X;
  try {
    if (((et.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (et.transition = n), (Y = t), !(Y & 6) && cn();
  }
}
function Oa() {
  (Ve = Kn.current), re(Kn);
}
function kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Im(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((fa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && po();
          break;
        case 3:
          or(), re(Be), re(Oe), Sa();
          break;
        case 5:
          wa(r);
          break;
        case 4:
          or();
          break;
        case 13:
          re(ue);
          break;
        case 19:
          re(ue);
          break;
        case 10:
          ma(r.type._context);
          break;
        case 22:
        case 23:
          Oa();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ge = e = rn(e.current, null)),
    (Pe = Ve = t),
    (xe = 0),
    (cl = null),
    (Ta = $o = Tn = 0),
    (Ue = Wr = null),
    Sn !== null)
  ) {
    for (t = 0; t < Sn.length; t++)
      if (((n = Sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Sn = null;
  }
  return e;
}
function Kd(e, t) {
  do {
    var n = ge;
    try {
      if ((ha(), (Yl.current = xo), Eo)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Eo = !1;
      }
      if (
        ((_n = 0),
        (ke = Ee = ae = null),
        (Hr = !1),
        (ul = 0),
        (_a.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (cl = t), (ge = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = Pe),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            c = u,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var S = Xs(i);
          if (S !== null) {
            (S.flags &= -257),
              Gs(S, i, u, o, t),
              S.mode & 1 && Ys(o, s, t),
              (t = S),
              (a = s);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ys(o, s, t), Da();
              break e;
            }
            a = Error(T(426));
          }
        } else if (le && u.mode & 1) {
          var _ = Xs(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Gs(_, i, u, o, t),
              da(ir(a, u));
            break e;
          }
        }
        (o = a = ir(a, u)),
          xe !== 4 && (xe = 2),
          Wr === null ? (Wr = [o]) : Wr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Nd(o, a, t);
              $s(o, h);
              break e;
            case 1:
              u = a;
              var d = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (tn === null || !tn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var f = Ld(o, u, t);
                $s(o, f);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xd(n);
    } catch (C) {
      (t = C), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Jd() {
  var e = ko.current;
  return (ko.current = xo), e === null ? xo : e;
}
function Da() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ce === null || (!(Tn & 268435455) && !($o & 268435455)) || Jt(Ce, Pe);
}
function Po(e, t) {
  var n = Y;
  Y |= 2;
  var r = Jd();
  (Ce !== e || Pe !== t) && ((Rt = null), kn(e, t));
  do
    try {
      cy();
      break;
    } catch (l) {
      Kd(e, l);
    }
  while (1);
  if ((ha(), (Y = n), (ko.current = r), ge !== null)) throw Error(T(261));
  return (Ce = null), (Pe = 0), xe;
}
function cy() {
  for (; ge !== null; ) Yd(ge);
}
function fy() {
  for (; ge !== null && !Fh(); ) Yd(ge);
}
function Yd(e) {
  var t = qd(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xd(e) : (ge = t),
    (_a.current = null);
}
function Xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ly(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ge = null);
        return;
      }
    } else if (((n = ry(n, t, Ve)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function gn(e, t, n) {
  var r = X,
    l = et.transition;
  try {
    (et.transition = null), (X = 1), dy(e, t, n, r);
  } finally {
    (et.transition = l), (X = r);
  }
  return null;
}
function dy(e, t, n, r) {
  do bn();
  while (Xt !== null);
  if (Y & 6) throw Error(T(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Kh(e, o),
    e === Ce && ((ge = Ce = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bl ||
      ((Bl = !0),
      Zd(io, function () {
        return bn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = et.transition), (et.transition = null);
    var i = X;
    X = 1;
    var u = Y;
    (Y |= 4),
      (_a.current = null),
      iy(e, n),
      Vd(n, e),
      Dm(cu),
      (ao = !!su),
      (cu = su = null),
      (e.current = n),
      uy(n),
      Ah(),
      (Y = u),
      (X = i),
      (et.transition = o);
  } else e.current = n;
  if (
    (Bl && ((Bl = !1), (Xt = e), (Ro = l)),
    (o = e.pendingLanes),
    o === 0 && (tn = null),
    Bh(n.stateNode),
    He(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Co) throw ((Co = !1), (e = Lu), (Lu = null), e);
  return (
    Ro & 1 && e.tag !== 0 && bn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ou ? Qr++ : ((Qr = 0), (Ou = e))) : (Qr = 0),
    cn(),
    null
  );
}
function bn() {
  if (Xt !== null) {
    var e = Tf(Ro),
      t = et.transition,
      n = X;
    try {
      if (((et.transition = null), (X = 16 > e ? 16 : e), Xt === null))
        var r = !1;
      else {
        if (((e = Xt), (Xt = null), (Ro = 0), Y & 6)) throw Error(T(331));
        var l = Y;
        for (Y |= 4, M = e.current; M !== null; ) {
          var o = M,
            i = o.child;
          if (M.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (M = s; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vr(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (M = p);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var m = c.sibling,
                        S = c.return;
                      if ((Bd(c), c === s)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (M = m);
                        break;
                      }
                      M = S;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var _ = g.sibling;
                    (g.sibling = null), (g = _);
                  } while (g !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (M = i);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vr(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (M = h);
                break e;
              }
              M = o.return;
            }
        }
        var d = e.current;
        for (M = d; M !== null; ) {
          i = M;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (M = v);
          else
            e: for (i = d; M !== null; ) {
              if (((u = M), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bo(9, u);
                  }
                } catch (C) {
                  fe(u, u.return, C);
                }
              if (u === i) {
                M = null;
                break e;
              }
              var f = u.sibling;
              if (f !== null) {
                (f.return = u.return), (M = f);
                break e;
              }
              M = u.return;
            }
        }
        if (
          ((Y = l), cn(), gt && typeof gt.onPostCommitFiberRoot == "function")
        )
          try {
            gt.onPostCommitFiberRoot(Do, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (et.transition = t);
    }
  }
  return !1;
}
function sc(e, t, n) {
  (t = ir(n, t)),
    (t = Nd(e, t, 1)),
    (e = en(e, t, 1)),
    (t = ze()),
    e !== null && (ml(e, 1, t), He(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) sc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (tn === null || !tn.has(r)))
        ) {
          (e = ir(n, e)),
            (e = Ld(t, e, 1)),
            (t = en(t, e, 1)),
            (e = ze()),
            t !== null && (ml(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function py(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Pe & n) === n &&
      (xe === 4 || (xe === 3 && (Pe & 130023424) === Pe && 500 > ye() - Na)
        ? kn(e, 0)
        : (Ta |= n)),
    He(e, t);
}
function Gd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ll), (Ll <<= 1), !(Ll & 130023424) && (Ll = 4194304))
      : (t = 1));
  var n = ze();
  (e = jt(e, t)), e !== null && (ml(e, t, n), He(e, n));
}
function hy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Gd(e, n);
}
function my(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Gd(e, n);
}
var qd;
qd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), ny(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), le && t.flags & 1048576 && ed(t, yo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Gl(e, t), (e = t.pendingProps);
      var l = nr(t, Oe.current);
      Zn(t, n), (l = xa(null, t, r, e, l, n));
      var o = ka();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((o = !0), ho(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            va(t),
            (l.updater = Uo),
            (t.stateNode = l),
            (l._reactInternals = t),
            wu(t, r, e, n),
            (t = xu(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && ca(t), je(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Gl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = vy(r)),
          (e = it(r, e)),
          l)
        ) {
          case 0:
            t = Eu(null, t, r, e, n);
            break e;
          case 1:
            t = bs(null, t, r, e, n);
            break e;
          case 11:
            t = qs(null, t, r, e, n);
            break e;
          case 14:
            t = Zs(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        Eu(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        bs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((jd(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ld(e, t),
          wo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = ir(Error(T(423)), t)), (t = ec(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ir(Error(T(424)), t)), (t = ec(e, t, r, n, l));
            break e;
          } else
            for (
              We = bt(t.stateNode.containerInfo.firstChild),
                Qe = t,
                le = !0,
                st = null,
                n = ad(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rr(), r === l)) {
            t = zt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sd(t),
        e === null && yu(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        fu(r, l) ? (i = null) : o !== null && fu(r, o) && (t.flags |= 32),
        Md(e, t),
        je(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && yu(t), null;
    case 13:
      return zd(e, t, n);
    case 4:
      return (
        ga(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = lr(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        qs(e, t, r, l, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          te(vo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (dt(o.value, i)) {
            if (o.children === l.children && !Be.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Nt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      vu(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(T(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  vu(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        je(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (l = nt(l)),
        (r = r(l)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = it(r, t.pendingProps)),
        (l = it(r.type, l)),
        Zs(e, t, r, l, n)
      );
    case 15:
      return Od(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        Gl(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), ho(t)) : (e = !1),
        Zn(t, n),
        id(t, r, l),
        wu(t, r, l, n),
        xu(null, t, r, !0, e, n)
      );
    case 19:
      return Fd(e, t, n);
    case 22:
      return Dd(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Zd(e, t) {
  return Cf(e, t);
}
function yy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new yy(e, t, n, r);
}
function Ma(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vy(e) {
  if (typeof e == "function") return Ma(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zu)) return 11;
    if (e === bu) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function bl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ma(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Fn:
        return Cn(n.children, l, o, t);
      case qu:
        (i = 8), (l |= 8);
        break;
      case Vi:
        return (
          (e = be(12, n, t, l | 2)), (e.elementType = Vi), (e.lanes = o), e
        );
      case Wi:
        return (e = be(13, n, t, l)), (e.elementType = Wi), (e.lanes = o), e;
      case Qi:
        return (e = be(19, n, t, l)), (e.elementType = Qi), (e.lanes = o), e;
      case uf:
        return Ho(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case lf:
              i = 10;
              break e;
            case of:
              i = 9;
              break e;
            case Zu:
              i = 11;
              break e;
            case bu:
              i = 14;
              break e;
            case Wt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = be(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Cn(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Ho(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = uf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Di(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function Mi(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gy(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = pi(0)),
    (this.expirationTimes = pi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = pi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ja(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new gy(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    va(o),
    e
  );
}
function wy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bd(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return Zf(e, n, t);
  }
  return t;
}
function ep(e, t, n, r, l, o, i, u, a) {
  return (
    (e = ja(n, r, !0, e, l, o, i, u, a)),
    (e.context = bd(null)),
    (n = e.current),
    (r = ze()),
    (l = nn(n)),
    (o = Nt(r, l)),
    (o.callback = t ?? null),
    en(n, o, l),
    (e.current.lanes = l),
    ml(e, l, r),
    He(e, r),
    e
  );
}
function Vo(e, t, n, r) {
  var l = t.current,
    o = ze(),
    i = nn(l);
  return (
    (n = bd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = en(l, t, i)),
    e !== null && (ft(e, l, i, o), Jl(e, l, i)),
    i
  );
}
function _o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function za(e, t) {
  cc(e, t), (e = e.alternate) && cc(e, t);
}
function Sy() {
  return null;
}
var tp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fa(e) {
  this._internalRoot = e;
}
Wo.prototype.render = Fa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Vo(e, t, null, null);
};
Wo.prototype.unmount = Fa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function () {
      Vo(null, e, null, null);
    }),
      (t[Mt] = null);
  }
};
function Wo(e) {
  this._internalRoot = e;
}
Wo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Of();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), n === 0 && Mf(e);
  }
};
function Aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fc() {}
function Ey(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = _o(i);
        o.call(s);
      };
    }
    var i = ep(t, r, e, 0, null, !1, !1, "", fc);
    return (
      (e._reactRootContainer = i),
      (e[Mt] = i.current),
      nl(e.nodeType === 8 ? e.parentNode : e),
      Nn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = _o(a);
      u.call(s);
    };
  }
  var a = ja(e, 0, !1, null, null, !1, !1, "", fc);
  return (
    (e._reactRootContainer = a),
    (e[Mt] = a.current),
    nl(e.nodeType === 8 ? e.parentNode : e),
    Nn(function () {
      Vo(t, a, n, r);
    }),
    a
  );
}
function Ko(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = _o(i);
        u.call(a);
      };
    }
    Vo(t, i, e, l);
  } else i = Ey(n, t, e, l, r);
  return _o(i);
}
Nf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zr(t.pendingLanes);
        n !== 0 &&
          (na(t, n | 1), He(t, ye()), !(Y & 6) && ((ur = ye() + 500), cn()));
      }
      break;
    case 13:
      Nn(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var l = ze();
          ft(r, e, 1, l);
        }
      }),
        za(e, 1);
  }
};
ra = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = ze();
      ft(t, e, 134217728, n);
    }
    za(e, 134217728);
  }
};
Lf = function (e) {
  if (e.tag === 13) {
    var t = nn(e),
      n = jt(e, t);
    if (n !== null) {
      var r = ze();
      ft(n, e, t, r);
    }
    za(e, t);
  }
};
Of = function () {
  return X;
};
Df = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
tu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Yi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Fo(r);
            if (!l) throw Error(T(90));
            sf(r), Yi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ff(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
gf = La;
wf = Nn;
var xy = { usingClientEntryPoint: !1, Events: [vl, Bn, Fo, yf, vf, La] },
  _r = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ky = {
    bundleType: _r.bundleType,
    version: _r.version,
    rendererPackageName: _r.rendererPackageName,
    rendererConfig: _r.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _r.findFiberByHostInstance || Sy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$l.isDisabled && $l.supportsFiber)
    try {
      (Do = $l.inject(ky)), (gt = $l);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Aa(t)) throw Error(T(200));
  return wy(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!Aa(e)) throw Error(T(299));
  var n = !1,
    r = "",
    l = tp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ja(e, 1, !1, null, null, n, !1, r, l)),
    (e[Mt] = t.current),
    nl(e.nodeType === 8 ? e.parentNode : e),
    new Fa(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = xf(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return Nn(e);
};
Je.hydrate = function (e, t, n) {
  if (!Qo(t)) throw Error(T(200));
  return Ko(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!Aa(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = tp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ep(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Mt] = t.current),
    nl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Wo(t);
};
Je.render = function (e, t, n) {
  if (!Qo(t)) throw Error(T(200));
  return Ko(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Qo(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Nn(function () {
        Ko(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mt] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = La;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qo(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Ko(e, t, n, !1, r);
};
Je.version = "18.2.0-next-9e3b772b8-20220608";
function np() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np);
    } catch (e) {
      console.error(e);
    }
}
np(), (bc.exports = Je);
var Cy = bc.exports,
  dc = Cy;
($i.createRoot = dc.createRoot), ($i.hydrateRoot = dc.hydrateRoot);
function rp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Ry } = Object.prototype,
  { getPrototypeOf: Ua } = Object,
  Jo = ((e) => (t) => {
    const n = Ry.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  St = (e) => ((e = e.toLowerCase()), (t) => Jo(t) === e),
  Yo = (e) => (t) => typeof t === e,
  { isArray: dr } = Array,
  fl = Yo("undefined");
function Py(e) {
  return (
    e !== null &&
    !fl(e) &&
    e.constructor !== null &&
    !fl(e.constructor) &&
    tt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const lp = St("ArrayBuffer");
function _y(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && lp(e.buffer)),
    t
  );
}
const Ty = Yo("string"),
  tt = Yo("function"),
  op = Yo("number"),
  Xo = (e) => e !== null && typeof e == "object",
  Ny = (e) => e === !0 || e === !1,
  eo = (e) => {
    if (Jo(e) !== "object") return !1;
    const t = Ua(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Ly = St("Date"),
  Oy = St("File"),
  Dy = St("Blob"),
  My = St("FileList"),
  jy = (e) => Xo(e) && tt(e.pipe),
  zy = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (tt(e.append) &&
          ((t = Jo(e)) === "formdata" ||
            (t === "object" &&
              tt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Fy = St("URLSearchParams"),
  Ay = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), dr(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let u;
    for (r = 0; r < i; r++) (u = o[r]), t.call(null, e[u], u, e);
  }
}
function ip(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const up = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  ap = (e) => !fl(e) && e !== up;
function ju() {
  const { caseless: e } = (ap(this) && this) || {},
    t = {},
    n = (r, l) => {
      const o = (e && ip(t, l)) || l;
      eo(t[o]) && eo(r)
        ? (t[o] = ju(t[o], r))
        : eo(r)
        ? (t[o] = ju({}, r))
        : dr(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && wl(arguments[r], n);
  return t;
}
const Uy = (e, t, n, { allOwnKeys: r } = {}) => (
    wl(
      t,
      (l, o) => {
        n && tt(l) ? (e[o] = rp(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Iy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  By = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  $y = (e, t, n, r) => {
    let l, o, i;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0));
      e = n !== !1 && Ua(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Hy = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Vy = (e) => {
    if (!e) return null;
    if (dr(e)) return e;
    let t = e.length;
    if (!op(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Wy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ua(Uint8Array)),
  Qy = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  Ky = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Jy = St("HTMLFormElement"),
  Yy = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  pc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Xy = St("RegExp"),
  sp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    wl(n, (l, o) => {
      let i;
      (i = t(l, o, e)) !== !1 && (r[o] = i || l);
    }),
      Object.defineProperties(e, r);
  },
  Gy = (e) => {
    sp(e, (t, n) => {
      if (tt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (tt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  qy = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return dr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Zy = () => {},
  by = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  ji = "abcdefghijklmnopqrstuvwxyz",
  hc = "0123456789",
  cp = { DIGIT: hc, ALPHA: ji, ALPHA_DIGIT: ji + ji.toUpperCase() + hc },
  ev = (e = 16, t = cp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function tv(e) {
  return !!(
    e &&
    tt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const nv = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Xo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const o = dr(r) ? [] : {};
            return (
              wl(r, (i, u) => {
                const a = n(i, l + 1);
                !fl(a) && (o[u] = a);
              }),
              (t[l] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  rv = St("AsyncFunction"),
  lv = (e) => e && (Xo(e) || tt(e)) && tt(e.then) && tt(e.catch),
  x = {
    isArray: dr,
    isArrayBuffer: lp,
    isBuffer: Py,
    isFormData: zy,
    isArrayBufferView: _y,
    isString: Ty,
    isNumber: op,
    isBoolean: Ny,
    isObject: Xo,
    isPlainObject: eo,
    isUndefined: fl,
    isDate: Ly,
    isFile: Oy,
    isBlob: Dy,
    isRegExp: Xy,
    isFunction: tt,
    isStream: jy,
    isURLSearchParams: Fy,
    isTypedArray: Wy,
    isFileList: My,
    forEach: wl,
    merge: ju,
    extend: Uy,
    trim: Ay,
    stripBOM: Iy,
    inherits: By,
    toFlatObject: $y,
    kindOf: Jo,
    kindOfTest: St,
    endsWith: Hy,
    toArray: Vy,
    forEachEntry: Qy,
    matchAll: Ky,
    isHTMLForm: Jy,
    hasOwnProperty: pc,
    hasOwnProp: pc,
    reduceDescriptors: sp,
    freezeMethods: Gy,
    toObjectSet: qy,
    toCamelCase: Yy,
    noop: Zy,
    toFiniteNumber: by,
    findKey: ip,
    global: up,
    isContextDefined: ap,
    ALPHABET: cp,
    generateString: ev,
    isSpecCompliantForm: tv,
    toJSONObject: nv,
    isAsyncFn: rv,
    isThenable: lv,
  };
function J(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && (this.response = l);
}
x.inherits(J, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const fp = J.prototype,
  dp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  dp[e] = { value: e };
});
Object.defineProperties(J, dp);
Object.defineProperty(fp, "isAxiosError", { value: !0 });
J.from = (e, t, n, r, l, o) => {
  const i = Object.create(fp);
  return (
    x.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (u) => u !== "isAxiosError"
    ),
    J.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const ov = null;
function zu(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function pp(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function mc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = pp(l)), !n && o ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function iv(e) {
  return x.isArray(e) && !e.some(zu);
}
const uv = x.toFlatObject(x, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Go(e, t, n) {
  if (!x.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = x.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, _) {
        return !x.isUndefined(_[g]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || c,
    o = n.dots,
    i = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(t);
  if (!x.isFunction(l)) throw new TypeError("visitor must be a function");
  function s(y) {
    if (y === null) return "";
    if (x.isDate(y)) return y.toISOString();
    if (!a && x.isBlob(y))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(y) || x.isTypedArray(y)
      ? a && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, g, _) {
    let h = y;
    if (y && !_ && typeof y == "object") {
      if (x.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (x.isArray(y) && iv(y)) ||
        ((x.isFileList(y) || x.endsWith(g, "[]")) && (h = x.toArray(y)))
      )
        return (
          (g = pp(g)),
          h.forEach(function (v, f) {
            !(x.isUndefined(v) || v === null) &&
              t.append(
                i === !0 ? mc([g], f, o) : i === null ? g : g + "[]",
                s(v)
              );
          }),
          !1
        );
    }
    return zu(y) ? !0 : (t.append(mc(_, g, o), s(y)), !1);
  }
  const p = [],
    m = Object.assign(uv, {
      defaultVisitor: c,
      convertValue: s,
      isVisitable: zu,
    });
  function S(y, g) {
    if (!x.isUndefined(y)) {
      if (p.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      p.push(y),
        x.forEach(y, function (h, d) {
          (!(x.isUndefined(h) || h === null) &&
            l.call(t, h, x.isString(d) ? d.trim() : d, g, m)) === !0 &&
            S(h, g ? g.concat(d) : [d]);
        }),
        p.pop();
    }
  }
  if (!x.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function yc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ia(e, t) {
  (this._pairs = []), e && Go(e, this, t);
}
const hp = Ia.prototype;
hp.append = function (t, n) {
  this._pairs.push([t, n]);
};
hp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, yc);
      }
    : yc;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function av(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function mp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || av,
    l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = x.isURLSearchParams(t) ? t.toString() : new Ia(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class sv {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    x.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const vc = sv,
  yp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  cv = typeof URLSearchParams < "u" ? URLSearchParams : Ia,
  fv = typeof FormData < "u" ? FormData : null,
  dv = typeof Blob < "u" ? Blob : null,
  pv = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  hv = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  vt = {
    isBrowser: !0,
    classes: { URLSearchParams: cv, FormData: fv, Blob: dv },
    isStandardBrowserEnv: pv,
    isStandardBrowserWebWorkerEnv: hv,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function mv(e, t) {
  return Go(
    e,
    new vt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return vt.isNode && x.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function yv(e) {
  return x
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function vv(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function vp(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    const u = Number.isFinite(+i),
      a = o >= n.length;
    return (
      (i = !i && x.isArray(l) ? l.length : i),
      a
        ? (x.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !u)
        : ((!l[i] || !x.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && x.isArray(l[i]) && (l[i] = vv(l[i])),
          !u)
    );
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return (
      x.forEachEntry(e, (r, l) => {
        t(yv(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function gv(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ba = {
  transitional: yp,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        o = x.isObject(t);
      if ((o && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t)))
        return l && l ? JSON.stringify(vp(t)) : t;
      if (
        x.isArrayBuffer(t) ||
        x.isBuffer(t) ||
        x.isStream(t) ||
        x.isFile(t) ||
        x.isBlob(t)
      )
        return t;
      if (x.isArrayBufferView(t)) return t.buffer;
      if (x.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let u;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return mv(t, this.formSerializer).toString();
        if ((u = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Go(
            u ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return o || l ? (n.setContentType("application/json", !1), gv(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ba.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (t && x.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (i)
            throw u.name === "SyntaxError"
              ? J.from(u, J.ERR_BAD_RESPONSE, this, null, this.response)
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vt.classes.FormData, Blob: vt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ba.headers[e] = {};
});
const $a = Ba,
  wv = x.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Sv = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (l = i.indexOf(":")),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && wv[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  gc = Symbol("internals");
function Tr(e) {
  return e && String(e).trim().toLowerCase();
}
function to(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(to) : String(e);
}
function Ev(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const xv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function zi(e, t, n, r, l) {
  if (x.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!x.isString(t))) {
    if (x.isString(r)) return t.indexOf(r) !== -1;
    if (x.isRegExp(r)) return r.test(t);
  }
}
function kv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Cv(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
class qo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function o(u, a, s) {
      const c = Tr(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const p = x.findKey(l, c);
      (!p || l[p] === void 0 || s === !0 || (s === void 0 && l[p] !== !1)) &&
        (l[p || a] = to(u));
    }
    const i = (u, a) => x.forEach(u, (s, c) => o(s, c, a));
    return (
      x.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : x.isString(t) && (t = t.trim()) && !xv(t)
        ? i(Sv(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Tr(t)), t)) {
      const r = x.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return Ev(l);
        if (x.isFunction(n)) return n.call(this, l, r);
        if (x.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Tr(t)), t)) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || zi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function o(i) {
      if (((i = Tr(i)), i)) {
        const u = x.findKey(r, i);
        u && (!n || zi(r, r[u], u, n)) && (delete r[u], (l = !0));
      }
    }
    return x.isArray(t) ? t.forEach(o) : o(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || zi(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      x.forEach(this, (l, o) => {
        const i = x.findKey(r, o);
        if (i) {
          (n[i] = to(l)), delete n[o];
          return;
        }
        const u = t ? kv(o) : String(o).trim();
        u !== o && delete n[o], (n[u] = to(l)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      x.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && x.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[gc] = this[gc] = { accessors: {} }).accessors,
      l = this.prototype;
    function o(i) {
      const u = Tr(i);
      r[u] || (Cv(l, i), (r[u] = !0));
    }
    return x.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
qo.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
x.reduceDescriptors(qo.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
x.freezeMethods(qo);
const Lt = qo;
function Fi(e, t) {
  const n = this || $a,
    r = t || n,
    l = Lt.from(r.headers);
  let o = r.data;
  return (
    x.forEach(e, function (u) {
      o = u.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function gp(e) {
  return !!(e && e.__CANCEL__);
}
function Sl(e, t, n) {
  J.call(this, e ?? "canceled", J.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
x.inherits(Sl, J, { __CANCEL__: !0 });
function Rv(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new J(
          "Request failed with status code " + n.status,
          [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Pv = vt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, l, o, i, u) {
          const a = [];
          a.push(n + "=" + encodeURIComponent(r)),
            x.isNumber(l) && a.push("expires=" + new Date(l).toGMTString()),
            x.isString(o) && a.push("path=" + o),
            x.isString(i) && a.push("domain=" + i),
            u === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function _v(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tv(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wp(e, t) {
  return e && !_v(t) ? Tv(e, t) : t;
}
const Nv = vt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function l(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = l(window.location.href)),
        function (i) {
          const u = x.isString(i) ? l(i) : i;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Lv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Ov(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const s = Date.now(),
        c = r[o];
      i || (i = s), (n[l] = a), (r[l] = s);
      let p = o,
        m = 0;
      for (; p !== l; ) (m += n[p++]), (p = p % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), s - i < t)) return;
      const S = c && s - c;
      return S ? Math.round((m * 1e3) / S) : void 0;
    }
  );
}
function wc(e, t) {
  let n = 0;
  const r = Ov(50, 250);
  return (l) => {
    const o = l.loaded,
      i = l.lengthComputable ? l.total : void 0,
      u = o - n,
      a = r(u),
      s = o <= i;
    n = o;
    const c = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: a || void 0,
      estimated: a && i && s ? (i - o) / a : void 0,
      event: l,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const Dv = typeof XMLHttpRequest < "u",
  Mv =
    Dv &&
    function (e) {
      return new Promise(function (n, r) {
        let l = e.data;
        const o = Lt.from(e.headers).normalize(),
          i = e.responseType;
        let u;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u);
        }
        let s;
        x.isFormData(l) &&
          (vt.isStandardBrowserEnv || vt.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.getContentType(/^\s*multipart\/form-data/)
            ? x.isString((s = o.getContentType())) &&
              o.setContentType(s.replace(/^\s*(multipart\/form-data);+/, "$1"))
            : o.setContentType("multipart/form-data"));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(y + ":" + g));
        }
        const p = wp(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), mp(p, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function m() {
          if (!c) return;
          const y = Lt.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            _ = {
              data:
                !i || i === "text" || i === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          Rv(
            function (d) {
              n(d), a();
            },
            function (d) {
              r(d), a();
            },
            _
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = m)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(m);
              }),
          (c.onabort = function () {
            c &&
              (r(new J("Request aborted", J.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new J("Network Error", J.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let g = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const _ = e.transitional || yp;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
              r(
                new J(
                  g,
                  _.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          vt.isStandardBrowserEnv)
        ) {
          const y = Nv(p) && e.xsrfCookieName && Pv.read(e.xsrfCookieName);
          y && o.set(e.xsrfHeaderName, y);
        }
        l === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            x.forEach(o.toJSON(), function (g, _) {
              c.setRequestHeader(_, g);
            }),
          x.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", wc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", wc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (y) => {
              c &&
                (r(!y || y.type ? new Sl(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const S = Lv(p);
        if (S && vt.protocols.indexOf(S) === -1) {
          r(new J("Unsupported protocol " + S + ":", J.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(l || null);
      });
    },
  Fu = { http: ov, xhr: Mv };
x.forEach(Fu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Sc = (e) => `- ${e}`,
  jv = (e) => x.isFunction(e) || e === null || e === !1,
  Sp = {
    getAdapter: (e) => {
      e = x.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const l = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !jv(n) && ((r = Fu[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new J(`Unknown adapter '${i}'`);
        if (r) break;
        l[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(l).map(
          ([u, a]) =>
            `adapter ${u} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Sc).join(`
`)
            : " " + Sc(o[0])
          : "as no adapter specified";
        throw new J(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Fu,
  };
function Ai(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Sl(null, e);
}
function Ec(e) {
  return (
    Ai(e),
    (e.headers = Lt.from(e.headers)),
    (e.data = Fi.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Sp.getAdapter(e.adapter || $a.adapter)(e).then(
      function (r) {
        return (
          Ai(e),
          (r.data = Fi.call(e, e.transformResponse, r)),
          (r.headers = Lt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          gp(r) ||
            (Ai(e),
            r &&
              r.response &&
              ((r.response.data = Fi.call(e, e.transformResponse, r.response)),
              (r.response.headers = Lt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const xc = (e) => (e instanceof Lt ? e.toJSON() : e);
function ar(e, t) {
  t = t || {};
  const n = {};
  function r(s, c, p) {
    return x.isPlainObject(s) && x.isPlainObject(c)
      ? x.merge.call({ caseless: p }, s, c)
      : x.isPlainObject(c)
      ? x.merge({}, c)
      : x.isArray(c)
      ? c.slice()
      : c;
  }
  function l(s, c, p) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(s)) return r(void 0, s, p);
    } else return r(s, c, p);
  }
  function o(s, c) {
    if (!x.isUndefined(c)) return r(void 0, c);
  }
  function i(s, c) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(s)) return r(void 0, s);
    } else return r(void 0, c);
  }
  function u(s, c, p) {
    if (p in t) return r(s, c);
    if (p in e) return r(void 0, s);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (s, c) => l(xc(s), xc(c), !0),
  };
  return (
    x.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const p = a[c] || l,
        m = p(e[c], t[c], c);
      (x.isUndefined(m) && p !== u) || (n[c] = m);
    }),
    n
  );
}
const Ep = "1.6.0",
  Ha = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ha[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const kc = {};
Ha.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      "[Axios v" +
      Ep +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, u) => {
    if (t === !1)
      throw new J(
        l(i, " has been removed" + (n ? " in " + n : "")),
        J.ERR_DEPRECATED
      );
    return (
      n &&
        !kc[i] &&
        ((kc[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, u) : !0
    );
  };
};
function zv(e, t, n) {
  if (typeof e != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const u = e[o],
        a = u === void 0 || i(u, o, e);
      if (a !== !0)
        throw new J("option " + o + " must be " + a, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J("Unknown option " + o, J.ERR_BAD_OPTION);
  }
}
const Au = { assertOptions: zv, validators: Ha },
  Ht = Au.validators;
class To {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new vc(), response: new vc() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ar(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: o } = n;
    r !== void 0 &&
      Au.assertOptions(
        r,
        {
          silentJSONParsing: Ht.transitional(Ht.boolean),
          forcedJSONParsing: Ht.transitional(Ht.boolean),
          clarifyTimeoutError: Ht.transitional(Ht.boolean),
        },
        !1
      ),
      l != null &&
        (x.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : Au.assertOptions(
              l,
              { encode: Ht.function, serialize: Ht.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && x.merge(o.common, o[n.method]);
    o &&
      x.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete o[y];
        }
      ),
      (n.headers = Lt.concat(i, o));
    const u = [];
    let a = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((a = a && g.synchronous), u.unshift(g.fulfilled, g.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function (g) {
      s.push(g.fulfilled, g.rejected);
    });
    let c,
      p = 0,
      m;
    if (!a) {
      const y = [Ec.bind(this), void 0];
      for (
        y.unshift.apply(y, u),
          y.push.apply(y, s),
          m = y.length,
          c = Promise.resolve(n);
        p < m;

      )
        c = c.then(y[p++], y[p++]);
      return c;
    }
    m = u.length;
    let S = n;
    for (p = 0; p < m; ) {
      const y = u[p++],
        g = u[p++];
      try {
        S = y(S);
      } catch (_) {
        g.call(this, _);
        break;
      }
    }
    try {
      c = Ec.call(this, S);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, m = s.length; p < m; ) c = c.then(s[p++], s[p++]);
    return c;
  }
  getUri(t) {
    t = ar(this.defaults, t);
    const n = wp(t.baseURL, t.url);
    return mp(n, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function (t) {
  To.prototype[t] = function (n, r) {
    return this.request(
      ar(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
x.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, u) {
      return this.request(
        ar(u || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (To.prototype[t] = n()), (To.prototype[t + "Form"] = n(!0));
});
const no = To;
class Va {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((u) => {
          r.subscribe(u), (o = u);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, u) {
        r.reason || ((r.reason = new Sl(o, i, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Va(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
const Fv = Va;
function Av(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Uv(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const Uu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Uu).forEach(([e, t]) => {
  Uu[t] = e;
});
const Iv = Uu;
function xp(e) {
  const t = new no(e),
    n = rp(no.prototype.request, t);
  return (
    x.extend(n, no.prototype, t, { allOwnKeys: !0 }),
    x.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return xp(ar(e, l));
    }),
    n
  );
}
const we = xp($a);
we.Axios = no;
we.CanceledError = Sl;
we.CancelToken = Fv;
we.isCancel = gp;
we.VERSION = Ep;
we.toFormData = Go;
we.AxiosError = J;
we.Cancel = we.CanceledError;
we.all = function (t) {
  return Promise.all(t);
};
we.spread = Av;
we.isAxiosError = Uv;
we.mergeConfig = ar;
we.AxiosHeaders = Lt;
we.formToJSON = (e) => vp(x.isHTMLForm(e) ? new FormData(e) : e);
we.getAdapter = Sp.getAdapter;
we.HttpStatusCode = Iv;
we.default = we;
const Iu = we;
function Bv() {
  const [e, t] = P.useState(null),
    [n, r] = P.useState(!0),
    l = P.useCallback((o) => {
      t(o), console.log("data", o);
    }, []);
  return (
    P.useEffect(() => {
      Iu.get("/api")
        .then((o) => {
          l(o.data), r(!1);
        })
        .catch((o) => {
          console.error("Error fetching data:", o), r(!1);
        });
    }, [l]),
    j.jsxs(j.Fragment, {
      children: [
        j.jsx("div", {
          className: "home-wrapper",
          children: j.jsxs("div", {
            className: "home-title",
            children: [
              j.jsx("h1", { children: "Robomechanexus" }),
              j.jsx("p", { children: "Robot mechatronics workshop" }),
            ],
          }),
        }),
        j.jsx("div", {
          className: "home-wrapper",
          children: j.jsx("div", {
            className: "chip-of-the-day",
            children: n
              ? j.jsx("p", { children: "Loading..." })
              : e &&
                j.jsxs("div", {
                  children: [
                    j.jsx("h2", { children: "Chip of the day:" }),
                    j.jsxs("p", { children: ["Name: ", e[2].chip_name] }),
                    j.jsxs("p", { children: ["Use: ", e[2].chip_use] }),
                  ],
                }),
          }),
        }),
      ],
    })
  );
}
const $v = "/assets/RobotAtMechanexus-7caf8df1.png";
function Hv() {
  const [e, t] = P.useState(null),
    [n, r] = P.useState(!0),
    [l, o] = P.useState({ name: "", use: "", type: "" }),
    i = (p) => {
      const { name: m, value: S } = p.target;
      o({ ...l, [m]: S });
    };
  function u(p) {
    p.preventDefault();
    const m = JSON.stringify(l);
    console.log("jsonData", m),
      fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: m,
      })
        .then((S) => S.text())
        .then((S) => {
          console.log(S), c();
        })
        .catch((S) => {
          console.error(S);
        });
  }
  const a = !(l.name && l.use && l.type),
    s = P.useCallback((p) => {
      t(p), console.log("Registry data", p);
    }, []);
  P.useEffect(() => {
    Iu.get("/api")
      .then((p) => {
        s(p.data), r(!1);
      })
      .catch((p) => {
        console.error("Error fetching data:", p), r(!1);
      });
  }, [s]);
  function c() {
    Iu.get("/api")
      .then((p) => {
        s(p.data), r(!1);
      })
      .catch((p) => {
        console.error("Error fetching data:", p), r(!1);
      });
  }
  return j.jsxs(j.Fragment, {
    children: [
      j.jsx("h1", { children: "Registry" }),
      j.jsx("div", {
        children: n
          ? j.jsx("p", { children: "Loading..." })
          : e &&
            j.jsx("div", {
              className: "reg-list-wrapper",
              children: j.jsxs("div", {
                className: "reg-list",
                children: [
                  j.jsx("h2", { children: "Registered chips:" }),
                  j.jsx("ol", {
                    className: "reg-ol",
                    children: e.map((p) =>
                      j.jsxs(
                        "li",
                        {
                          children: [
                            j.jsx("span", {
                              className: "reg-li-label",
                              children: "Name:",
                            }),
                            " ",
                            p.chip_name,
                            " ",
                            j.jsxs("span", {
                              children: [
                                j.jsx("span", {
                                  className: "reg-li-label",
                                  children: "Use:",
                                }),
                                " ",
                                p.chip_use,
                              ],
                            }),
                            j.jsxs("span", {
                              children: [
                                j.jsx("span", {
                                  className: "reg-li-label",
                                  children: "Type:",
                                }),
                                " ",
                                p.item_type_name,
                              ],
                            }),
                          ],
                        },
                        p.chip_id
                      )
                    ),
                  }),
                ],
              }),
            }),
      }),
      j.jsxs("div", {
        children: [
          j.jsx("div", {
            className: "add-chip-wrapper",
            children: j.jsx("h2", {
              className: "add-chip",
              children: "Add chip",
            }),
          }),
          j.jsxs("form", {
            onSubmit: u,
            children: [
              j.jsxs("label", {
                children: [
                  "Name:",
                  j.jsx("input", { name: "name", onChange: i, value: l.name }),
                ],
              }),
              j.jsxs("label", {
                children: [
                  "Use:",
                  j.jsx("input", { name: "use", onChange: i, value: l.use }),
                ],
              }),
              j.jsxs("label", {
                children: [
                  "Type:",
                  j.jsx("input", { name: "type", onChange: i, value: l.type }),
                ],
              }),
              j.jsx("button", { type: "submit", disabled: a, children: "Add" }),
            ],
          }),
        ],
      }),
      j.jsx("img", { src: $v, alt: "Robot" }),
    ],
  });
}
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
var he;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(he || (he = {}));
const Cc = "popstate";
function Vv(e) {
  e === void 0 && (e = {});
  function t(l, o) {
    let {
      pathname: i = "/",
      search: u = "",
      hash: a = "",
    } = Et(l.location.hash.substr(1));
    return (
      !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
      dl(
        "",
        { pathname: i, search: u, hash: a },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(l, o) {
    let i = l.document.querySelector("base"),
      u = "";
    if (i && i.getAttribute("href")) {
      let a = l.location.href,
        s = a.indexOf("#");
      u = s === -1 ? a : a.slice(0, s);
    }
    return u + "#" + (typeof o == "string" ? o : Ln(o));
  }
  function r(l, o) {
    un(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return Qv(t, n, r, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function un(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Wv() {
  return Math.random().toString(36).substr(2, 8);
}
function Rc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function dl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Et(t) : t,
      { state: n, key: (t && t.key) || r || Wv() }
    )
  );
}
function Ln(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Et(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Qv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = he.Pop,
    a = null,
    s = c();
  s == null && ((s = 0), i.replaceState(de({}, i.state, { idx: s }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    u = he.Pop;
    let _ = c(),
      h = _ == null ? null : _ - s;
    (s = _), a && a({ action: u, location: g.location, delta: h });
  }
  function m(_, h) {
    u = he.Push;
    let d = dl(g.location, _, h);
    n && n(d, _), (s = c() + 1);
    let v = Rc(d, s),
      f = g.createHref(d);
    try {
      i.pushState(v, "", f);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(f);
    }
    o && a && a({ action: u, location: g.location, delta: 1 });
  }
  function S(_, h) {
    u = he.Replace;
    let d = dl(g.location, _, h);
    n && n(d, _), (s = c());
    let v = Rc(d, s),
      f = g.createHref(d);
    i.replaceState(v, "", f),
      o && a && a({ action: u, location: g.location, delta: 0 });
  }
  function y(_) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof _ == "string" ? _ : Ln(_);
    return (
      W(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, h)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(_) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Cc, p),
        (a = _),
        () => {
          l.removeEventListener(Cc, p), (a = null);
        }
      );
    },
    createHref(_) {
      return t(l, _);
    },
    createURL: y,
    encodeLocation(_) {
      let h = y(_);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: S,
    go(_) {
      return i.go(_);
    },
  };
  return g;
}
var me;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(me || (me = {}));
const Kv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Jv(e) {
  return e.index === !0;
}
function Bu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        u = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (W(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        W(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Jv(l))
      ) {
        let a = de({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = de({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = Bu(l.children, t, i, r)), a
        );
      }
    })
  );
}
function Jn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Et(t) : t,
    l = pr(r.pathname || "/", n);
  if (l == null) return null;
  let o = kp(e);
  Xv(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = lg(o[u], ug(l));
  return i;
}
function Yv(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function kp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (W(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Ot([r, a.relativePath]),
      c = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      kp(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: ng(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of Cp(o.path)) l(o, i, a);
    }),
    t
  );
}
function Cp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Cp(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Xv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : rg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Gv = /^:\w+$/,
  qv = 3,
  Zv = 2,
  bv = 1,
  eg = 10,
  tg = -2,
  Pc = (e) => e === "*";
function ng(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Pc) && (r += tg),
    t && (r += Zv),
    n
      .filter((l) => !Pc(l))
      .reduce((l, o) => l + (Gv.test(o) ? qv : o === "" ? bv : eg), r)
  );
}
function rg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function lg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = og(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let p = u.route;
    o.push({
      params: r,
      pathname: Ot([l, c.pathname]),
      pathnameBase: fg(Ot([l, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== "/" && (l = Ot([l, c.pathnameBase]));
  }
  return o;
}
function og(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ig(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, c, p) => {
      let { paramName: m, isOptional: S } = c;
      if (m === "*") {
        let g = u[p] || "";
        i = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const y = u[p];
      return S && !y ? (s[m] = void 0) : (s[m] = ag(y || "", m)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function ig(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    un(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function ug(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      un(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ag(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      un(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function pr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function sg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Et(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : cg(n, t)) : t,
    search: dg(r),
    hash: pg(l),
  };
}
function cg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ui(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Zo(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Wa(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Et(e))
    : ((l = de({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        Ui("?", "pathname", "search", l)
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        Ui("#", "pathname", "hash", l)
      ),
      W(!l.search || !l.search.includes("#"), Ui("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let p = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let a = sg(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || c) && (a.pathname += "/"), a;
}
const Ot = (e) => e.join("/").replace(/\/\/+/g, "/"),
  fg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  dg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  pg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Qa {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Rp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Pp = ["post", "put", "patch", "delete"],
  hg = new Set(Pp),
  mg = ["get", ...Pp],
  yg = new Set(mg),
  vg = new Set([301, 302, 303, 307, 308]),
  gg = new Set([307, 308]),
  Ii = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  wg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Nr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  _p = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Tp = "remix-router-transitions";
function Eg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    l = (E) => ({ hasErrorBoundary: w(E) });
  } else l = Sg;
  let o = {},
    i = Bu(e.routes, l, void 0, o),
    u,
    a = e.basename || "/",
    s = de(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    c = null,
    p = new Set(),
    m = null,
    S = null,
    y = null,
    g = e.hydrationData != null,
    _ = Jn(i, e.history.location, a),
    h = null;
  if (_ == null) {
    let w = Ge(404, { pathname: e.history.location.pathname }),
      { matches: E, route: k } = jc(i);
    (_ = E), (h = { [k.id]: w });
  }
  let d =
      !_.some((w) => w.route.lazy) &&
      (!_.some((w) => w.route.loader) || e.hydrationData != null),
    v,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: _,
      initialized: d,
      navigation: Ii,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = he.Pop,
    N = !1,
    R,
    L = !1,
    H = new Map(),
    A = null,
    oe = !1,
    De = !1,
    pt = [],
    dn = [],
    ce = new Map(),
    At = 0,
    xt = -1,
    O = new Map(),
    U = new Set(),
    $ = new Map(),
    q = new Map(),
    ee = new Set(),
    Xe = new Map(),
    Me = new Map(),
    pn = !1;
  function kt() {
    if (
      ((c = e.history.listen((w) => {
        let { action: E, location: k, delta: D } = w;
        if (pn) {
          pn = !1;
          return;
        }
        un(
          Me.size === 0 || D != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let F = es({
          currentLocation: f.location,
          nextLocation: k,
          historyAction: E,
        });
        if (F && D != null) {
          (pn = !0),
            e.history.go(D * -1),
            kl(F, {
              state: "blocked",
              location: k,
              proceed() {
                kl(F, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(D);
              },
              reset() {
                let I = new Map(f.blockers);
                I.set(F, Nr), ve({ blockers: I });
              },
            });
          return;
        }
        return hn(E, k);
      })),
      n)
    ) {
      Dg(t, H);
      let w = () => Mg(t, H);
      t.addEventListener("pagehide", w),
        (A = () => t.removeEventListener("pagehide", w));
    }
    return f.initialized || hn(he.Pop, f.location), v;
  }
  function Mn() {
    c && c(),
      A && A(),
      p.clear(),
      R && R.abort(),
      f.fetchers.forEach((w, E) => xl(E)),
      f.blockers.forEach((w, E) => ba(E));
  }
  function Up(w) {
    return p.add(w), () => p.delete(w);
  }
  function ve(w, E) {
    f = de({}, f, w);
    let k = [],
      D = [];
    s.v7_fetcherPersist &&
      f.fetchers.forEach((F, I) => {
        F.state === "idle" && (ee.has(I) ? D.push(I) : k.push(I));
      }),
      p.forEach((F) =>
        F(f, { deletedFetchers: D, unstable_viewTransitionOpts: E })
      ),
      s.v7_fetcherPersist &&
        (k.forEach((F) => f.fetchers.delete(F)), D.forEach((F) => xl(F)));
  }
  function mr(w, E) {
    var k, D;
    let F =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        at(f.navigation.formMethod) &&
        f.navigation.state === "loading" &&
        ((k = w.state) == null ? void 0 : k._isRedirect) !== !0,
      I;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (I = E.actionData)
        : (I = null)
      : F
      ? (I = f.actionData)
      : (I = null);
    let V = E.loaderData
        ? Mc(f.loaderData, E.loaderData, E.matches || [], E.errors)
        : f.loaderData,
      B = f.blockers;
    B.size > 0 && ((B = new Map(B)), B.forEach((ie, K) => B.set(K, Nr)));
    let z =
      N === !0 ||
      (f.navigation.formMethod != null &&
        at(f.navigation.formMethod) &&
        ((D = w.state) == null ? void 0 : D._isRedirect) !== !0);
    u && ((i = u), (u = void 0)),
      oe ||
        C === he.Pop ||
        (C === he.Push
          ? e.history.push(w, w.state)
          : C === he.Replace && e.history.replace(w, w.state));
    let Z;
    if (C === he.Pop) {
      let ie = H.get(f.location.pathname);
      ie && ie.has(w.pathname)
        ? (Z = { currentLocation: f.location, nextLocation: w })
        : H.has(w.pathname) &&
          (Z = { currentLocation: w, nextLocation: f.location });
    } else if (L) {
      let ie = H.get(f.location.pathname);
      ie
        ? ie.add(w.pathname)
        : ((ie = new Set([w.pathname])), H.set(f.location.pathname, ie)),
        (Z = { currentLocation: f.location, nextLocation: w });
    }
    ve(
      de({}, E, {
        actionData: I,
        loaderData: V,
        historyAction: C,
        location: w,
        initialized: !0,
        navigation: Ii,
        revalidation: "idle",
        restoreScrollPosition: ns(w, E.matches || f.matches),
        preventScrollReset: z,
        blockers: B,
      }),
      Z
    ),
      (C = he.Pop),
      (N = !1),
      (L = !1),
      (oe = !1),
      (De = !1),
      (pt = []),
      (dn = []);
  }
  async function Ja(w, E) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let k = $u(
        f.location,
        f.matches,
        a,
        s.v7_prependBasename,
        w,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      {
        path: D,
        submission: F,
        error: I,
      } = _c(s.v7_normalizeFormMethod, !1, k, E),
      V = f.location,
      B = dl(f.location, D, E && E.state);
    B = de({}, B, e.history.encodeLocation(B));
    let z = E && E.replace != null ? E.replace : void 0,
      Z = he.Push;
    z === !0
      ? (Z = he.Replace)
      : z === !1 ||
        (F != null &&
          at(F.formMethod) &&
          F.formAction === f.location.pathname + f.location.search &&
          (Z = he.Replace));
    let ie =
        E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
      K = es({ currentLocation: V, nextLocation: B, historyAction: Z });
    if (K) {
      kl(K, {
        state: "blocked",
        location: B,
        proceed() {
          kl(K, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: B,
          }),
            Ja(w, E);
        },
        reset() {
          let b = new Map(f.blockers);
          b.set(K, Nr), ve({ blockers: b });
        },
      });
      return;
    }
    return await hn(Z, B, {
      submission: F,
      pendingError: I,
      preventScrollReset: ie,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition,
    });
  }
  function Ip() {
    if (
      (ni(),
      ve({ revalidation: "loading" }),
      f.navigation.state !== "submitting")
    ) {
      if (f.navigation.state === "idle") {
        hn(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      hn(C || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function hn(w, E, k) {
    R && R.abort(),
      (R = null),
      (C = w),
      (oe = (k && k.startUninterruptedRevalidation) === !0),
      Yp(f.location, f.matches),
      (N = (k && k.preventScrollReset) === !0),
      (L = (k && k.enableViewTransition) === !0);
    let D = u || i,
      F = k && k.overrideNavigation,
      I = Jn(D, E, a);
    if (!I) {
      let b = Ge(404, { pathname: E.pathname }),
        { matches: Se, route: mn } = jc(D);
      ri(), mr(E, { matches: Se, loaderData: {}, errors: { [mn.id]: b } });
      return;
    }
    if (
      f.initialized &&
      !De &&
      Pg(f.location, E) &&
      !(k && k.submission && at(k.submission.formMethod))
    ) {
      mr(E, { matches: I });
      return;
    }
    R = new AbortController();
    let V = Or(e.history, E, R.signal, k && k.submission),
      B,
      z;
    if (k && k.pendingError) z = { [Kr(I).route.id]: k.pendingError };
    else if (k && k.submission && at(k.submission.formMethod)) {
      let b = await Bp(V, E, k.submission, I, { replace: k.replace });
      if (b.shortCircuited) return;
      (B = b.pendingActionData),
        (z = b.pendingActionError),
        (F = Bi(E, k.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: Z,
      loaderData: ie,
      errors: K,
    } = await $p(
      V,
      E,
      I,
      F,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      B,
      z
    );
    Z ||
      ((R = null),
      mr(
        E,
        de({ matches: I }, B ? { actionData: B } : {}, {
          loaderData: ie,
          errors: K,
        })
      ));
  }
  async function Bp(w, E, k, D, F) {
    F === void 0 && (F = {}), ni();
    let I = Lg(E, k);
    ve({ navigation: I });
    let V,
      B = Vu(D, E);
    if (!B.route.action && !B.route.lazy)
      V = {
        type: me.error,
        error: Ge(405, {
          method: w.method,
          pathname: E.pathname,
          routeId: B.route.id,
        }),
      };
    else if (((V = await Lr("action", w, B, D, o, l, a)), w.signal.aborted))
      return { shortCircuited: !0 };
    if (er(V)) {
      let z;
      return (
        F && F.replace != null
          ? (z = F.replace)
          : (z = V.location === f.location.pathname + f.location.search),
        await yr(f, V, { submission: k, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (Jr(V)) {
      let z = Kr(D, B.route.id);
      return (
        (F && F.replace) !== !0 && (C = he.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: V.error } }
      );
    }
    if (xn(V)) throw Ge(400, { type: "defer-action" });
    return { pendingActionData: { [B.route.id]: V.data } };
  }
  async function $p(w, E, k, D, F, I, V, B, z) {
    let Z = D || Bi(E, F),
      ie = F || I || Ac(Z),
      K = u || i,
      [b, Se] = Tc(e.history, f, k, ie, E, De, pt, dn, $, U, K, a, B, z);
    if (
      (ri(
        (G) =>
          !(k && k.some((lt) => lt.route.id === G)) ||
          (b && b.some((lt) => lt.route.id === G))
      ),
      (xt = ++At),
      b.length === 0 && Se.length === 0)
    ) {
      let G = qa();
      return (
        mr(
          E,
          de(
            { matches: k, loaderData: {}, errors: z || null },
            B ? { actionData: B } : {},
            G ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!oe) {
      Se.forEach((lt) => {
        let Bt = f.fetchers.get(lt.key),
          pe = Dr(void 0, Bt ? Bt.data : void 0);
        f.fetchers.set(lt.key, pe);
      });
      let G = B || f.actionData;
      ve(
        de(
          { navigation: Z },
          G
            ? Object.keys(G).length === 0
              ? { actionData: null }
              : { actionData: G }
            : {},
          Se.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
        )
      );
    }
    Se.forEach((G) => {
      ce.has(G.key) && Ut(G.key), G.controller && ce.set(G.key, G.controller);
    });
    let mn = () => Se.forEach((G) => Ut(G.key));
    R && R.signal.addEventListener("abort", mn);
    let {
      results: yn,
      loaderResults: gr,
      fetcherResults: li,
    } = await Xa(f.matches, k, b, Se, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener("abort", mn),
      Se.forEach((G) => ce.delete(G.key));
    let Ct = zc(yn);
    if (Ct) {
      if (Ct.idx >= b.length) {
        let G = Se[Ct.idx - b.length].key;
        U.add(G);
      }
      return await yr(f, Ct.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: It, errors: Cl } = Dc(f, k, b, gr, z, Se, li, Xe);
    Xe.forEach((G, lt) => {
      G.subscribe((Bt) => {
        (Bt || G.done) && Xe.delete(lt);
      });
    });
    let oi = qa(),
      ii = Za(xt),
      ui = oi || ii || Se.length > 0;
    return de(
      { loaderData: It, errors: Cl },
      ui ? { fetchers: new Map(f.fetchers) } : {}
    );
  }
  function Ya(w) {
    return (
      s.v7_fetcherPersist &&
        (q.set(w, (q.get(w) || 0) + 1), ee.has(w) && ee.delete(w)),
      f.fetchers.get(w) || wg
    );
  }
  function Hp(w, E, k, D) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ce.has(w) && Ut(w);
    let F = u || i,
      I = $u(
        f.location,
        f.matches,
        a,
        s.v7_prependBasename,
        k,
        E,
        D == null ? void 0 : D.relative
      ),
      V = Jn(F, I, a);
    if (!V) {
      vr(w, E, Ge(404, { pathname: I }));
      return;
    }
    let {
      path: B,
      submission: z,
      error: Z,
    } = _c(s.v7_normalizeFormMethod, !0, I, D);
    if (Z) {
      vr(w, E, Z);
      return;
    }
    let ie = Vu(V, B);
    if (((N = (D && D.preventScrollReset) === !0), z && at(z.formMethod))) {
      Vp(w, E, B, ie, V, z);
      return;
    }
    $.set(w, { routeId: E, path: B }), Wp(w, E, B, ie, V, z);
  }
  async function Vp(w, E, k, D, F, I) {
    if ((ni(), $.delete(w), !D.route.action && !D.route.lazy)) {
      let pe = Ge(405, { method: I.formMethod, pathname: k, routeId: E });
      vr(w, E, pe);
      return;
    }
    let V = f.fetchers.get(w),
      B = Og(I, V);
    f.fetchers.set(w, B), ve({ fetchers: new Map(f.fetchers) });
    let z = new AbortController(),
      Z = Or(e.history, k, z.signal, I);
    ce.set(w, z);
    let ie = At,
      K = await Lr("action", Z, D, F, o, l, a);
    if (Z.signal.aborted) {
      ce.get(w) === z && ce.delete(w);
      return;
    }
    if (ee.has(w)) {
      f.fetchers.set(w, Vt(void 0)), ve({ fetchers: new Map(f.fetchers) });
      return;
    }
    if (er(K))
      if ((ce.delete(w), xt > ie)) {
        let pe = Vt(void 0);
        f.fetchers.set(w, pe), ve({ fetchers: new Map(f.fetchers) });
        return;
      } else {
        U.add(w);
        let pe = Dr(I);
        return (
          f.fetchers.set(w, pe),
          ve({ fetchers: new Map(f.fetchers) }),
          yr(f, K, { fetcherSubmission: I })
        );
      }
    if (Jr(K)) {
      vr(w, E, K.error);
      return;
    }
    if (xn(K)) throw Ge(400, { type: "defer-action" });
    let b = f.navigation.location || f.location,
      Se = Or(e.history, b, z.signal),
      mn = u || i,
      yn =
        f.navigation.state !== "idle"
          ? Jn(mn, f.navigation.location, a)
          : f.matches;
    W(yn, "Didn't find any matches after fetcher action");
    let gr = ++At;
    O.set(w, gr);
    let li = Dr(I, K.data);
    f.fetchers.set(w, li);
    let [Ct, It] = Tc(
      e.history,
      f,
      yn,
      I,
      b,
      De,
      pt,
      dn,
      $,
      U,
      mn,
      a,
      { [D.route.id]: K.data },
      void 0
    );
    It.filter((pe) => pe.key !== w).forEach((pe) => {
      let wr = pe.key,
        rs = f.fetchers.get(wr),
        Gp = Dr(void 0, rs ? rs.data : void 0);
      f.fetchers.set(wr, Gp),
        ce.has(wr) && Ut(wr),
        pe.controller && ce.set(wr, pe.controller);
    }),
      ve({ fetchers: new Map(f.fetchers) });
    let Cl = () => It.forEach((pe) => Ut(pe.key));
    z.signal.addEventListener("abort", Cl);
    let {
      results: oi,
      loaderResults: ii,
      fetcherResults: ui,
    } = await Xa(f.matches, yn, Ct, It, Se);
    if (z.signal.aborted) return;
    z.signal.removeEventListener("abort", Cl),
      O.delete(w),
      ce.delete(w),
      It.forEach((pe) => ce.delete(pe.key));
    let G = zc(oi);
    if (G) {
      if (G.idx >= Ct.length) {
        let pe = It[G.idx - Ct.length].key;
        U.add(pe);
      }
      return yr(f, G.result);
    }
    let { loaderData: lt, errors: Bt } = Dc(
      f,
      f.matches,
      Ct,
      ii,
      void 0,
      It,
      ui,
      Xe
    );
    if (f.fetchers.has(w)) {
      let pe = Vt(K.data);
      f.fetchers.set(w, pe);
    }
    Za(gr),
      f.navigation.state === "loading" && gr > xt
        ? (W(C, "Expected pending action"),
          R && R.abort(),
          mr(f.navigation.location, {
            matches: yn,
            loaderData: lt,
            errors: Bt,
            fetchers: new Map(f.fetchers),
          }))
        : (ve({
            errors: Bt,
            loaderData: Mc(f.loaderData, lt, yn, Bt),
            fetchers: new Map(f.fetchers),
          }),
          (De = !1));
  }
  async function Wp(w, E, k, D, F, I) {
    let V = f.fetchers.get(w),
      B = Dr(I, V ? V.data : void 0);
    f.fetchers.set(w, B), ve({ fetchers: new Map(f.fetchers) });
    let z = new AbortController(),
      Z = Or(e.history, k, z.signal);
    ce.set(w, z);
    let ie = At,
      K = await Lr("loader", Z, D, F, o, l, a);
    if (
      (xn(K) && (K = (await Op(K, Z.signal, !0)) || K),
      ce.get(w) === z && ce.delete(w),
      Z.signal.aborted)
    )
      return;
    if (ee.has(w)) {
      f.fetchers.set(w, Vt(void 0)), ve({ fetchers: new Map(f.fetchers) });
      return;
    }
    if (er(K))
      if (xt > ie) {
        let Se = Vt(void 0);
        f.fetchers.set(w, Se), ve({ fetchers: new Map(f.fetchers) });
        return;
      } else {
        U.add(w), await yr(f, K);
        return;
      }
    if (Jr(K)) {
      vr(w, E, K.error);
      return;
    }
    W(!xn(K), "Unhandled fetcher deferred data");
    let b = Vt(K.data);
    f.fetchers.set(w, b), ve({ fetchers: new Map(f.fetchers) });
  }
  async function yr(w, E, k) {
    let {
      submission: D,
      fetcherSubmission: F,
      replace: I,
    } = k === void 0 ? {} : k;
    E.revalidate && (De = !0);
    let V = dl(w.location, E.location, { _isRedirect: !0 });
    if ((W(V, "Expected a location on the redirect navigation"), n)) {
      let b = !1;
      if (E.reloadDocument) b = !0;
      else if (_p.test(E.location)) {
        const Se = e.history.createURL(E.location);
        b = Se.origin !== t.location.origin || pr(Se.pathname, a) == null;
      }
      if (b) {
        I ? t.location.replace(E.location) : t.location.assign(E.location);
        return;
      }
    }
    R = null;
    let B = I === !0 ? he.Replace : he.Push,
      { formMethod: z, formAction: Z, formEncType: ie } = w.navigation;
    !D && !F && z && Z && ie && (D = Ac(w.navigation));
    let K = D || F;
    if (gg.has(E.status) && K && at(K.formMethod))
      await hn(B, V, {
        submission: de({}, K, { formAction: E.location }),
        preventScrollReset: N,
      });
    else {
      let b = Bi(V, D);
      await hn(B, V, {
        overrideNavigation: b,
        fetcherSubmission: F,
        preventScrollReset: N,
      });
    }
  }
  async function Xa(w, E, k, D, F) {
    let I = await Promise.all([
        ...k.map((z) => Lr("loader", F, z, E, o, l, a)),
        ...D.map((z) =>
          z.matches && z.match && z.controller
            ? Lr(
                "loader",
                Or(e.history, z.path, z.controller.signal),
                z.match,
                z.matches,
                o,
                l,
                a
              )
            : { type: me.error, error: Ge(404, { pathname: z.path }) }
        ),
      ]),
      V = I.slice(0, k.length),
      B = I.slice(k.length);
    return (
      await Promise.all([
        Fc(
          w,
          k,
          V,
          V.map(() => F.signal),
          !1,
          f.loaderData
        ),
        Fc(
          w,
          D.map((z) => z.match),
          B,
          D.map((z) => (z.controller ? z.controller.signal : null)),
          !0
        ),
      ]),
      { results: I, loaderResults: V, fetcherResults: B }
    );
  }
  function ni() {
    (De = !0),
      pt.push(...ri()),
      $.forEach((w, E) => {
        ce.has(E) && (dn.push(E), Ut(E));
      });
  }
  function vr(w, E, k) {
    let D = Kr(f.matches, E);
    xl(w), ve({ errors: { [D.route.id]: k }, fetchers: new Map(f.fetchers) });
  }
  function xl(w) {
    let E = f.fetchers.get(w);
    ce.has(w) && !(E && E.state === "loading" && O.has(w)) && Ut(w),
      $.delete(w),
      O.delete(w),
      U.delete(w),
      ee.delete(w),
      f.fetchers.delete(w);
  }
  function Qp(w) {
    if (s.v7_fetcherPersist) {
      let E = (q.get(w) || 0) - 1;
      E <= 0 ? (q.delete(w), ee.add(w)) : q.set(w, E);
    } else xl(w);
    ve({ fetchers: new Map(f.fetchers) });
  }
  function Ut(w) {
    let E = ce.get(w);
    W(E, "Expected fetch controller: " + w), E.abort(), ce.delete(w);
  }
  function Ga(w) {
    for (let E of w) {
      let k = Ya(E),
        D = Vt(k.data);
      f.fetchers.set(E, D);
    }
  }
  function qa() {
    let w = [],
      E = !1;
    for (let k of U) {
      let D = f.fetchers.get(k);
      W(D, "Expected fetcher: " + k),
        D.state === "loading" && (U.delete(k), w.push(k), (E = !0));
    }
    return Ga(w), E;
  }
  function Za(w) {
    let E = [];
    for (let [k, D] of O)
      if (D < w) {
        let F = f.fetchers.get(k);
        W(F, "Expected fetcher: " + k),
          F.state === "loading" && (Ut(k), O.delete(k), E.push(k));
      }
    return Ga(E), E.length > 0;
  }
  function Kp(w, E) {
    let k = f.blockers.get(w) || Nr;
    return Me.get(w) !== E && Me.set(w, E), k;
  }
  function ba(w) {
    f.blockers.delete(w), Me.delete(w);
  }
  function kl(w, E) {
    let k = f.blockers.get(w) || Nr;
    W(
      (k.state === "unblocked" && E.state === "blocked") ||
        (k.state === "blocked" && E.state === "blocked") ||
        (k.state === "blocked" && E.state === "proceeding") ||
        (k.state === "blocked" && E.state === "unblocked") ||
        (k.state === "proceeding" && E.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + E.state
    );
    let D = new Map(f.blockers);
    D.set(w, E), ve({ blockers: D });
  }
  function es(w) {
    let { currentLocation: E, nextLocation: k, historyAction: D } = w;
    if (Me.size === 0) return;
    Me.size > 1 && un(!1, "A router only supports one blocker at a time");
    let F = Array.from(Me.entries()),
      [I, V] = F[F.length - 1],
      B = f.blockers.get(I);
    if (
      !(B && B.state === "proceeding") &&
      V({ currentLocation: E, nextLocation: k, historyAction: D })
    )
      return I;
  }
  function ri(w) {
    let E = [];
    return (
      Xe.forEach((k, D) => {
        (!w || w(D)) && (k.cancel(), E.push(D), Xe.delete(D));
      }),
      E
    );
  }
  function Jp(w, E, k) {
    if (((m = w), (y = E), (S = k || null), !g && f.navigation === Ii)) {
      g = !0;
      let D = ns(f.location, f.matches);
      D != null && ve({ restoreScrollPosition: D });
    }
    return () => {
      (m = null), (y = null), (S = null);
    };
  }
  function ts(w, E) {
    return (
      (S &&
        S(
          w,
          E.map((D) => Yv(D, f.loaderData))
        )) ||
      w.key
    );
  }
  function Yp(w, E) {
    if (m && y) {
      let k = ts(w, E);
      m[k] = y();
    }
  }
  function ns(w, E) {
    if (m) {
      let k = ts(w, E),
        D = m[k];
      if (typeof D == "number") return D;
    }
    return null;
  }
  function Xp(w) {
    (o = {}), (u = Bu(w, l, void 0, o));
  }
  return (
    (v = {
      get basename() {
        return a;
      },
      get state() {
        return f;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: kt,
      subscribe: Up,
      enableScrollRestoration: Jp,
      navigate: Ja,
      fetch: Hp,
      revalidate: Ip,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: Ya,
      deleteFetcher: Qp,
      dispose: Mn,
      getBlocker: Kp,
      deleteBlocker: ba,
      _internalFetchControllers: ce,
      _internalActiveDeferreds: Xe,
      _internalSetRoutes: Xp,
    }),
    v
  );
}
function xg(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function $u(e, t, n, r, l, o, i) {
  let u, a;
  if (o != null && i !== "path") {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === o)) {
        a = c;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = Wa(
    l || ".",
    Zo(u).map((c) => c.pathnameBase),
    pr(e.pathname, n) || e.pathname,
    i === "path"
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      a &&
      a.route.index &&
      !Ka(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : Ot([n, s.pathname])),
    Ln(s)
  );
}
function _c(e, t, n, r) {
  if (!r || !xg(r)) return { path: n };
  if (r.formMethod && !Ng(r.formMethod))
    return { path: n, error: Ge(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ge(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    u = Lp(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!at(i)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, y) => {
              let [g, _] = y;
              return (
                "" +
                S +
                g +
                "=" +
                _ +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!at(i)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, s;
  if (r.formData) (a = Hu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = Hu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Oc(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Oc(a));
    } catch {
      return l();
    }
  let c = {
    formMethod: i,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (at(c.formMethod)) return { path: n, submission: c };
  let p = Et(n);
  return (
    t && p.search && Ka(p.search) && a.append("index", ""),
    (p.search = "?" + a),
    { path: Ln(p), submission: c }
  );
}
function kg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Tc(e, t, n, r, l, o, i, u, a, s, c, p, m, S) {
  let y = S ? Object.values(S)[0] : m ? Object.values(m)[0] : void 0,
    g = e.createURL(t.location),
    _ = e.createURL(l),
    h = S ? Object.keys(S)[0] : void 0,
    v = kg(n, h).filter((C, N) => {
      if (C.route.lazy) return !0;
      if (C.route.loader == null) return !1;
      if (Cg(t.loaderData, t.matches[N], C) || i.some((H) => H === C.route.id))
        return !0;
      let R = t.matches[N],
        L = C;
      return Nc(
        C,
        de(
          {
            currentUrl: g,
            currentParams: R.params,
            nextUrl: _,
            nextParams: L.params,
          },
          r,
          {
            actionResult: y,
            defaultShouldRevalidate:
              o ||
              g.pathname + g.search === _.pathname + _.search ||
              g.search !== _.search ||
              Np(R, L),
          }
        )
      );
    }),
    f = [];
  return (
    a.forEach((C, N) => {
      if (!n.some((oe) => oe.route.id === C.routeId)) return;
      let R = Jn(c, C.path, p);
      if (!R) {
        f.push({
          key: N,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let L = t.fetchers.get(N),
        H = Vu(R, C.path),
        A = !1;
      s.has(N)
        ? (A = !1)
        : u.includes(N)
        ? (A = !0)
        : L && L.state !== "idle" && L.data === void 0
        ? (A = o)
        : (A = Nc(
            H,
            de(
              {
                currentUrl: g,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: _,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: y, defaultShouldRevalidate: o }
            )
          )),
        A &&
          f.push({
            key: N,
            routeId: C.routeId,
            path: C.path,
            matches: R,
            match: H,
            controller: new AbortController(),
          });
    }),
    [v, f]
  );
}
function Cg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Np(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Nc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Lc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let a = l[i] !== void 0 && i !== "hasErrorBoundary";
    un(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !a && !Kv.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, de({}, t(l), { lazy: void 0 }));
}
async function Lr(e, t, n, r, l, o, i, u) {
  u === void 0 && (u = {});
  let a,
    s,
    c,
    p = (y) => {
      let g,
        _ = new Promise((h, d) => (g = d));
      return (
        (c = () => g()),
        t.signal.addEventListener("abort", c),
        Promise.race([
          y({ request: t, params: n.params, context: u.requestContext }),
          _,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let g,
          _ = await Promise.all([
            p(y).catch((h) => {
              g = h;
            }),
            Lc(n.route, o, l),
          ]);
        if (g) throw g;
        s = _[0];
      } else if ((await Lc(n.route, o, l), (y = n.route[e]), y)) s = await p(y);
      else if (e === "action") {
        let g = new URL(t.url),
          _ = g.pathname + g.search;
        throw Ge(405, { method: t.method, pathname: _, routeId: n.route.id });
      } else return { type: me.data, data: void 0 };
    else if (y) s = await p(y);
    else {
      let g = new URL(t.url),
        _ = g.pathname + g.search;
      throw Ge(404, { pathname: _ });
    }
    W(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (y) {
    (a = me.error), (s = y);
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  if (Tg(s)) {
    let y = s.status;
    if (vg.has(y)) {
      let h = s.headers.get("Location");
      if (
        (W(
          h,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !_p.test(h))
      )
        h = $u(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, h);
      else if (!u.isStaticRequest) {
        let d = new URL(t.url),
          v = h.startsWith("//") ? new URL(d.protocol + h) : new URL(h),
          f = pr(v.pathname, i) != null;
        v.origin === d.origin && f && (h = v.pathname + v.search + v.hash);
      }
      if (u.isStaticRequest) throw (s.headers.set("Location", h), s);
      return {
        type: me.redirect,
        status: y,
        location: h,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: a === me.error ? me.error : me.data, response: s };
    let g,
      _ = s.headers.get("Content-Type");
    return (
      _ && /\bapplication\/json\b/.test(_)
        ? (g = await s.json())
        : (g = await s.text()),
      a === me.error
        ? { type: a, error: new Qa(y, s.statusText, g), headers: s.headers }
        : { type: me.data, data: g, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === me.error) return { type: a, error: s };
  if (_g(s)) {
    var m, S;
    return {
      type: me.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((S = s.init) == null ? void 0 : S.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: me.data, data: s };
}
function Or(e, t, n, r) {
  let l = e.createURL(Lp(t)).toString(),
    o = { signal: n };
  if (r && at(r.formMethod)) {
    let { formMethod: i, formEncType: u } = r;
    (o.method = i.toUpperCase()),
      u === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": u })),
          (o.body = JSON.stringify(r.json)))
        : u === "text/plain"
        ? (o.body = r.text)
        : u === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Hu(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Hu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Oc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Rg(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((c, p) => {
      let m = t[p].route.id;
      if (
        (W(!er(c), "Cannot handle redirect results in processLoaderData"),
        Jr(c))
      ) {
        let S = Kr(e, m),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[S.route.id] == null && (i[S.route.id] = y),
          (o[m] = void 0),
          a || ((a = !0), (u = Rp(c.error) ? c.error.status : 500)),
          c.headers && (s[m] = c.headers);
      } else
        xn(c)
          ? (l.set(m, c.deferredData), (o[m] = c.deferredData.data))
          : (o[m] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !a &&
            (u = c.statusCode),
          c.headers && (s[m] = c.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function Dc(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = Rg(t, n, r, l, u);
  for (let c = 0; c < o.length; c++) {
    let { key: p, match: m, controller: S } = o[c];
    W(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = i[c];
    if (!(S && S.signal.aborted))
      if (Jr(y)) {
        let g = Kr(e.matches, m == null ? void 0 : m.route.id);
        (s && s[g.route.id]) || (s = de({}, s, { [g.route.id]: y.error })),
          e.fetchers.delete(p);
      } else if (er(y)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (xn(y)) W(!1, "Unhandled fetcher deferred data");
      else {
        let g = Vt(y.data);
        e.fetchers.set(p, g);
      }
  }
  return { loaderData: a, errors: s };
}
function Mc(e, t, n, r) {
  let l = de({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Kr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function jc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ge(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (u = "defer() is not supported in actions")
          : o === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (u =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Qa(e || 500, i, new Error(u), !0)
  );
}
function zc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (er(n)) return { result: n, idx: t };
  }
}
function Lp(e) {
  let t = typeof e == "string" ? Et(e) : e;
  return Ln(de({}, t, { hash: "" }));
}
function Pg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function xn(e) {
  return e.type === me.deferred;
}
function Jr(e) {
  return e.type === me.error;
}
function er(e) {
  return (e && e.type) === me.redirect;
}
function _g(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Tg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Ng(e) {
  return yg.has(e.toLowerCase());
}
function at(e) {
  return hg.has(e.toLowerCase());
}
async function Fc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((p) => p.route.id === a.route.id),
      c = s != null && !Np(s, a) && (o && o[a.route.id]) !== void 0;
    if (xn(u) && (l || c)) {
      let p = r[i];
      W(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Op(u, p, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function Op(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: me.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: me.error, error: l };
      }
    return { type: me.data, data: e.deferredData.data };
  }
}
function Ka(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Vu(e, t) {
  let n = typeof t == "string" ? Et(t).search : t.search;
  if (e[e.length - 1].route.index && Ka(n || "")) return e[e.length - 1];
  let r = Zo(e);
  return r[r.length - 1];
}
function Ac(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Bi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Lg(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Dr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Og(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Vt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Dg(e, t) {
  try {
    let n = e.sessionStorage.getItem(Tp);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function Mg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Tp, JSON.stringify(n));
    } catch (r) {
      un(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function No() {
  return (
    (No = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    No.apply(this, arguments)
  );
}
const bo = P.createContext(null),
  Dp = P.createContext(null),
  hr = P.createContext(null),
  ei = P.createContext(null),
  fn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Mp = P.createContext(null);
function jg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  El() || W(!1);
  let { basename: r, navigator: l } = P.useContext(hr),
    { hash: o, pathname: i, search: u } = zp(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : Ot([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function El() {
  return P.useContext(ei) != null;
}
function ti() {
  return El() || W(!1), P.useContext(ei).location;
}
function jp(e) {
  P.useContext(hr).static || P.useLayoutEffect(e);
}
function zg() {
  let { isDataRoute: e } = P.useContext(fn);
  return e ? Xg() : Fg();
}
function Fg() {
  El() || W(!1);
  let e = P.useContext(bo),
    { basename: t, navigator: n } = P.useContext(hr),
    { matches: r } = P.useContext(fn),
    { pathname: l } = ti(),
    o = JSON.stringify(Zo(r).map((a) => a.pathnameBase)),
    i = P.useRef(!1);
  return (
    jp(() => {
      i.current = !0;
    }),
    P.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = Wa(a, JSON.parse(o), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Ot([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
const Ag = P.createContext(null);
function Ug(e) {
  let t = P.useContext(fn).outlet;
  return t && P.createElement(Ag.Provider, { value: e }, t);
}
function zp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = P.useContext(fn),
    { pathname: l } = ti(),
    o = JSON.stringify(Zo(r).map((i) => i.pathnameBase));
  return P.useMemo(() => Wa(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Ig(e, t, n) {
  El() || W(!1);
  let { navigator: r } = P.useContext(hr),
    { matches: l } = P.useContext(fn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = ti(),
    s;
  if (t) {
    var c;
    let g = typeof t == "string" ? Et(t) : t;
    u === "/" || ((c = g.pathname) != null && c.startsWith(u)) || W(!1),
      (s = g);
  } else s = a;
  let p = s.pathname || "/",
    m = u === "/" ? p : p.slice(u.length) || "/",
    S = Jn(e, { pathname: m }),
    y = Wg(
      S &&
        S.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: Ot([
              u,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? u
                : Ot([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && y
    ? P.createElement(
        ei.Provider,
        {
          value: {
            location: No(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: he.Pop,
          },
        },
        y
      )
    : y;
}
function Bg() {
  let e = Yg(),
    t = Rp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: l }, n) : null,
    o
  );
}
const $g = P.createElement(Bg, null);
class Hg extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? P.createElement(
          fn.Provider,
          { value: this.props.routeContext },
          P.createElement(Mp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Vg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = P.useContext(bo);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(fn.Provider, { value: t }, r)
  );
}
function Wg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    u >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, a, s) => {
    let c = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      p = null;
    n && (p = a.route.errorElement || $g);
    let m = t.concat(o.slice(0, s + 1)),
      S = () => {
        let y;
        return (
          c
            ? (y = p)
            : a.route.Component
            ? (y = P.createElement(a.route.Component, null))
            : a.route.element
            ? (y = a.route.element)
            : (y = u),
          P.createElement(Vg, {
            match: a,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? P.createElement(Hg, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: c,
          children: S(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var Fp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Fp || {}),
  Lo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Lo || {});
function Qg(e) {
  let t = P.useContext(bo);
  return t || W(!1), t;
}
function Kg(e) {
  let t = P.useContext(Dp);
  return t || W(!1), t;
}
function Jg(e) {
  let t = P.useContext(fn);
  return t || W(!1), t;
}
function Ap(e) {
  let t = Jg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Yg() {
  var e;
  let t = P.useContext(Mp),
    n = Kg(Lo.UseRouteError),
    r = Ap(Lo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Xg() {
  let { router: e } = Qg(Fp.UseNavigateStable),
    t = Ap(Lo.UseNavigateStable),
    n = P.useRef(!1);
  return (
    jp(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, No({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Gg(e) {
  return Ug(e.context);
}
function qg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = he.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  El() && W(!1);
  let u = t.replace(/^\/*/, "/"),
    a = P.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = Et(r));
  let {
      pathname: s = "/",
      search: c = "",
      hash: p = "",
      state: m = null,
      key: S = "default",
    } = r,
    y = P.useMemo(() => {
      let g = pr(s, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: p, state: m, key: S },
            navigationType: l,
          };
    }, [u, s, c, p, m, S, l]);
  return y == null
    ? null
    : P.createElement(
        hr.Provider,
        { value: a },
        P.createElement(ei.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function Zg(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
function bg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function e0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function t0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !e0(e);
}
const n0 = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
function r0(e, t) {
  return Eg({
    basename: t == null ? void 0 : t.basename,
    future: pl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Vv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || l0(),
    routes: e,
    mapRouteProperties: Zg,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function l0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = pl({}, t, { errors: o0(t.errors) })), t;
}
function o0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Qa(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const i0 = P.createContext({ isTransitioning: !1 }),
  u0 = P.createContext(new Map()),
  a0 = "startTransition",
  Uc = hh[a0];
function s0(e) {
  Uc ? Uc(e) : e();
}
class c0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function f0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = P.useState(n.state),
    [i, u] = P.useState(),
    [a, s] = P.useState({ isTransitioning: !1 }),
    [c, p] = P.useState(),
    [m, S] = P.useState(),
    [y, g] = P.useState(),
    _ = P.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    d = P.useCallback(
      (R) => {
        h ? s0(R) : R();
      },
      [h]
    ),
    v = P.useCallback(
      (R, L) => {
        let { deletedFetchers: H, unstable_viewTransitionOpts: A } = L;
        H.forEach((oe) => _.current.delete(oe)),
          R.fetchers.forEach((oe, De) => {
            oe.data !== void 0 && _.current.set(De, oe.data);
          }),
          !A ||
          n.window == null ||
          typeof n.window.document.startViewTransition != "function"
            ? d(() => o(R))
            : m && c
            ? (c.resolve(),
              m.skipTransition(),
              g({
                state: R,
                currentLocation: A.currentLocation,
                nextLocation: A.nextLocation,
              }))
            : (u(R),
              s({
                isTransitioning: !0,
                currentLocation: A.currentLocation,
                nextLocation: A.nextLocation,
              }));
      },
      [n.window, m, c, _, d]
    );
  P.useLayoutEffect(() => n.subscribe(v), [n, v]),
    P.useEffect(() => {
      a.isTransitioning && p(new c0());
    }, [a.isTransitioning]),
    P.useEffect(() => {
      if (c && i && n.window) {
        let R = i,
          L = c.promise,
          H = n.window.document.startViewTransition(async () => {
            d(() => o(R)), await L;
          });
        H.finished.finally(() => {
          p(void 0), S(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          S(H);
      }
    }, [d, i, c, n.window]),
    P.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve();
    }, [c, m, l.location, i]),
    P.useEffect(() => {
      !a.isTransitioning &&
        y &&
        (u(y.state),
        s({
          isTransitioning: !0,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        g(void 0));
    }, [a.isTransitioning, y]);
  let f = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, L, H) =>
          n.navigate(R, {
            state: L,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
        replace: (R, L, H) =>
          n.navigate(R, {
            replace: !0,
            state: L,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
      }),
      [n]
    ),
    C = n.basename || "/",
    N = P.useMemo(
      () => ({ router: n, navigator: f, static: !1, basename: C }),
      [n, f, C]
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      bo.Provider,
      { value: N },
      P.createElement(
        Dp.Provider,
        { value: l },
        P.createElement(
          u0.Provider,
          { value: _.current },
          P.createElement(
            i0.Provider,
            { value: a },
            P.createElement(
              qg,
              {
                basename: C,
                location: l.location,
                navigationType: l.historyAction,
                navigator: f,
              },
              l.initialized
                ? P.createElement(d0, { routes: n.routes, state: l })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function d0(e) {
  let { routes: t, state: n } = e;
  return Ig(t, void 0, n);
}
const p0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  h0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ic = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: p,
      } = t,
      m = bg(t, n0),
      { basename: S } = P.useContext(hr),
      y,
      g = !1;
    if (typeof s == "string" && h0.test(s) && ((y = s), p0))
      try {
        let v = new URL(window.location.href),
          f = s.startsWith("//") ? new URL(v.protocol + s) : new URL(s),
          C = pr(f.pathname, S);
        f.origin === v.origin && C != null
          ? (s = C + f.search + f.hash)
          : (g = !0);
      } catch {}
    let _ = jg(s, { relative: l }),
      h = m0(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: p,
      });
    function d(v) {
      r && r(v), v.defaultPrevented || h(v);
    }
    return P.createElement(
      "a",
      pl({}, m, { href: y || _, onClick: g || o ? r : d, ref: n, target: a })
    );
  });
var Bc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Bc || (Bc = {}));
var $c;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})($c || ($c = {}));
function m0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = zg(),
    s = ti(),
    c = zp(e, { relative: i });
  return P.useCallback(
    (p) => {
      if (t0(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : Ln(s) === Ln(c);
        a(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, c, r, l, n, e, o, i, u]
  );
}
function y0() {
  return j.jsxs(j.Fragment, {
    children: [
      j.jsx("nav", {
        children: j.jsxs("ul", {
          className: "nav-ul",
          children: [
            j.jsx("li", {
              className: "nav-li",
              children: j.jsx(Ic, { to: "/", children: "Home" }),
            }),
            j.jsx("li", {
              className: "nav-li",
              children: j.jsx(Ic, { to: "/registry", children: "Registry" }),
            }),
          ],
        }),
      }),
      j.jsx("main", { children: j.jsx(Gg, {}) }),
    ],
  });
}
function v0() {
  const e = r0([
    {
      children: [
        { element: j.jsx(Bv, {}), path: "/" },
        { element: j.jsx(Hv, {}), path: "/registry" },
      ],
      element: j.jsx(y0, {}),
    },
  ]);
  return j.jsx(f0, { router: e });
}
$i.createRoot(document.getElementById("root")).render(
  j.jsx(qc.StrictMode, { children: j.jsx(v0, {}) })
);

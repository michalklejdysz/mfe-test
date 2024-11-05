var Wu = { exports: {} }, nl = {}, Hu = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt = Symbol.for("react.element"), lc = Symbol.for("react.portal"), oc = Symbol.for("react.fragment"), ic = Symbol.for("react.strict_mode"), uc = Symbol.for("react.profiler"), sc = Symbol.for("react.provider"), ac = Symbol.for("react.context"), cc = Symbol.for("react.forward_ref"), fc = Symbol.for("react.suspense"), dc = Symbol.for("react.memo"), pc = Symbol.for("react.lazy"), Oi = Symbol.iterator;
function hc(e) {
  return e === null || typeof e != "object" ? null : (e = Oi && e[Oi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Qu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ku = Object.assign, Yu = {};
function it(e, n, t) {
  this.props = e, this.context = n, this.refs = Yu, this.updater = t || Qu;
}
it.prototype.isReactComponent = {};
it.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
it.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xu() {
}
Xu.prototype = it.prototype;
function $o(e, n, t) {
  this.props = e, this.context = n, this.refs = Yu, this.updater = t || Qu;
}
var Ao = $o.prototype = new Xu();
Ao.constructor = $o;
Ku(Ao, it.prototype);
Ao.isPureReactComponent = !0;
var Ii = Array.isArray, Gu = Object.prototype.hasOwnProperty, Vo = { current: null }, Zu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ju(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) Gu.call(n, r) && !Zu.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Gt, type: e, key: o, ref: i, props: l, _owner: Vo.current };
}
function mc(e, n) {
  return { $$typeof: Gt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Bo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function vc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Di = /\/+/g;
function kl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? vc("" + e.key) : n.toString(36);
}
function wr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Gt:
        case lc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + kl(i, 0) : r, Ii(l) ? (t = "", e != null && (t = e.replace(Di, "$&/") + "/"), wr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (Bo(l) && (l = mc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Di, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ii(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + kl(o, u);
    i += wr(o, n, t, s, l);
  }
  else if (s = hc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + kl(o, u++), i += wr(o, n, t, s, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function tr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return wr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function gc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null }, kr = { transition: null }, yc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: kr, ReactCurrentOwner: Vo };
function qu() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: tr, forEach: function(e, n, t) {
  tr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return tr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return tr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Bo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = it;
L.Fragment = oc;
L.Profiler = uc;
L.PureComponent = $o;
L.StrictMode = ic;
L.Suspense = fc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yc;
L.act = qu;
L.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ku({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Vo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in n) Gu.call(n, s) && !Zu.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Gt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: ac, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: sc, _context: e }, e.Consumer = e;
};
L.createElement = Ju;
L.createFactory = function(e) {
  var n = Ju.bind(null, e);
  return n.type = e, n;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: cc, render: e };
};
L.isValidElement = Bo;
L.lazy = function(e) {
  return { $$typeof: pc, _payload: { _status: -1, _result: e }, _init: gc };
};
L.memo = function(e, n) {
  return { $$typeof: dc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function(e) {
  var n = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = n;
  }
};
L.unstable_act = qu;
L.useCallback = function(e, n) {
  return ue.current.useCallback(e, n);
};
L.useContext = function(e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function(e, n) {
  return ue.current.useEffect(e, n);
};
L.useId = function() {
  return ue.current.useId();
};
L.useImperativeHandle = function(e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function(e, n) {
  return ue.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function(e, n) {
  return ue.current.useLayoutEffect(e, n);
};
L.useMemo = function(e, n) {
  return ue.current.useMemo(e, n);
};
L.useReducer = function(e, n, t) {
  return ue.current.useReducer(e, n, t);
};
L.useRef = function(e) {
  return ue.current.useRef(e);
};
L.useState = function(e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function(e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function() {
  return ue.current.useTransition();
};
L.version = "18.3.1";
Hu.exports = L;
var Ze = Hu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wc = Ze, kc = Symbol.for("react.element"), Sc = Symbol.for("react.fragment"), xc = Object.prototype.hasOwnProperty, Ec = wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) xc.call(n, r) && !Cc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: kc, type: e, key: o, ref: i, props: l, _owner: Ec.current };
}
nl.Fragment = Sc;
nl.jsx = bu;
nl.jsxs = bu;
Wu.exports = nl;
var H = Wu.exports, es = { exports: {} }, ye = {}, ns = { exports: {} }, ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(E, N) {
    var P = E.length;
    E.push(N);
    e: for (; 0 < P; ) {
      var W = P - 1 >>> 1, G = E[W];
      if (0 < l(G, N)) E[W] = N, E[P] = G, P = W;
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var N = E[0], P = E.pop();
    if (P !== N) {
      E[0] = P;
      e: for (var W = 0, G = E.length, er = G >>> 1; W < er; ) {
        var gn = 2 * (W + 1) - 1, wl = E[gn], yn = gn + 1, nr = E[yn];
        if (0 > l(wl, P)) yn < G && 0 > l(nr, wl) ? (E[W] = nr, E[yn] = P, W = yn) : (E[W] = wl, E[gn] = P, W = gn);
        else if (yn < G && 0 > l(nr, P)) E[W] = nr, E[yn] = P, W = yn;
        else break e;
      }
    }
    return N;
  }
  function l(E, N) {
    var P = E.sortIndex - N.sortIndex;
    return P !== 0 ? P : E.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], m = 1, h = null, p = 3, y = !1, w = !1, k = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= E) r(c), N.sortIndex = N.expirationTime, n(s, N);
      else break;
      N = t(c);
    }
  }
  function v(E) {
    if (k = !1, d(E), !w) if (t(s) !== null) w = !0, gl(x);
    else {
      var N = t(c);
      N !== null && yl(v, N.startTime - E);
    }
  }
  function x(E, N) {
    w = !1, k && (k = !1, f(z), z = -1), y = !0;
    var P = p;
    try {
      for (d(N), h = t(s); h !== null && (!(h.expirationTime > N) || E && !ze()); ) {
        var W = h.callback;
        if (typeof W == "function") {
          h.callback = null, p = h.priorityLevel;
          var G = W(h.expirationTime <= N);
          N = e.unstable_now(), typeof G == "function" ? h.callback = G : h === t(s) && r(s), d(N);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var er = !0;
      else {
        var gn = t(c);
        gn !== null && yl(v, gn.startTime - N), er = !1;
      }
      return er;
    } finally {
      h = null, p = P, y = !1;
    }
  }
  var C = !1, _ = null, z = -1, B = 5, T = -1;
  function ze() {
    return !(e.unstable_now() - T < B);
  }
  function at() {
    if (_ !== null) {
      var E = e.unstable_now();
      T = E;
      var N = !0;
      try {
        N = _(!0, E);
      } finally {
        N ? ct() : (C = !1, _ = null);
      }
    } else C = !1;
  }
  var ct;
  if (typeof a == "function") ct = function() {
    a(at);
  };
  else if (typeof MessageChannel < "u") {
    var ji = new MessageChannel(), rc = ji.port2;
    ji.port1.onmessage = at, ct = function() {
      rc.postMessage(null);
    };
  } else ct = function() {
    D(at, 0);
  };
  function gl(E) {
    _ = E, C || (C = !0, ct());
  }
  function yl(E, N) {
    z = D(function() {
      E(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, gl(x));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(E) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var P = p;
    p = N;
    try {
      return E();
    } finally {
      p = P;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, N) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var P = p;
    p = E;
    try {
      return N();
    } finally {
      p = P;
    }
  }, e.unstable_scheduleCallback = function(E, N, P) {
    var W = e.unstable_now();
    switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? W + P : W) : P = W, E) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = P + G, E = { id: m++, callback: N, priorityLevel: E, startTime: P, expirationTime: G, sortIndex: -1 }, P > W ? (E.sortIndex = P, n(c, E), t(s) === null && E === t(c) && (k ? (f(z), z = -1) : k = !0, yl(v, P - W))) : (E.sortIndex = G, n(s, E), w || y || (w = !0, gl(x))), E;
  }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(E) {
    var N = p;
    return function() {
      var P = p;
      p = N;
      try {
        return E.apply(this, arguments);
      } finally {
        p = P;
      }
    };
  };
})(ts);
ns.exports = ts;
var _c = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc = Ze, ge = _c;
function g(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var rs = /* @__PURE__ */ new Set(), Mt = {};
function Rn(e, n) {
  bn(e, n), bn(e + "Capture", n);
}
function bn(e, n) {
  for (Mt[e] = n, e = 0; e < n.length; e++) rs.add(n[e]);
}
var He = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kl = Object.prototype.hasOwnProperty, Nc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fi = {}, Ui = {};
function Pc(e) {
  return Kl.call(Ui, e) ? !0 : Kl.call(Fi, e) ? !1 : Nc.test(e) ? Ui[e] = !0 : (Fi[e] = !0, !1);
}
function Lc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Tc(e, n, t, r) {
  if (n === null || typeof n > "u" || Lc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null) switch (t.type) {
    case 3:
      return !n;
    case 4:
      return n === !1;
    case 5:
      return isNaN(n);
    case 6:
      return isNaN(n) || 1 > n;
  }
  return !1;
}
function se(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ee[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wo = /[\-:]([a-z])/g;
function Ho(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Wo,
    Ho
  );
  ee[n] = new se(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Wo, Ho);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Wo, Ho);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qo(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Tc(n, t, l, r) && (t = null), r || l === null ? Pc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, rr = Symbol.for("react.element"), In = Symbol.for("react.portal"), Dn = Symbol.for("react.fragment"), Ko = Symbol.for("react.strict_mode"), Yl = Symbol.for("react.profiler"), ls = Symbol.for("react.provider"), os = Symbol.for("react.context"), Yo = Symbol.for("react.forward_ref"), Xl = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), Xo = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), is = Symbol.for("react.offscreen"), $i = Symbol.iterator;
function ft(e) {
  return e === null || typeof e != "object" ? null : (e = $i && e[$i] || e["@@iterator"], typeof e == "function" ? e : null);
}
var A = Object.assign, Sl;
function wt(e) {
  if (Sl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    Sl = n && n[1] || "";
  }
  return `
` + Sl + e;
}
var xl = !1;
function El(e, n) {
  if (!e || xl) return "";
  xl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n) if (n = function() {
      throw Error();
    }, Object.defineProperty(n.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(n, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], n);
    } else {
      try {
        n.call();
      } catch (c) {
        r = c;
      }
      e.call(n.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    xl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function Rc(e) {
  switch (e.tag) {
    case 5:
      return wt(e.type);
    case 16:
      return wt("Lazy");
    case 13:
      return wt("Suspense");
    case 19:
      return wt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = El(e.type, !1), e;
    case 11:
      return e = El(e.type.render, !1), e;
    case 1:
      return e = El(e.type, !0), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case In:
      return "Portal";
    case Yl:
      return "Profiler";
    case Ko:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Gl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case os:
      return (e.displayName || "Context") + ".Consumer";
    case ls:
      return (e._context.displayName || "Context") + ".Provider";
    case Yo:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Xo:
      return n = e.displayName || null, n !== null ? n : Zl(e.type) || "Memo";
    case Je:
      n = e._payload, e = e._init;
      try {
        return Zl(e(n));
      } catch {
      }
  }
  return null;
}
function Mc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(n);
    case 8:
      return n === Ko ? "StrictMode" : "Mode";
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
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function dn(e) {
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
function us(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function jc(e) {
  var n = us(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, o = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = jc(e));
}
function ss(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = us(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Rr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, n) {
  var t = n.checked;
  return A({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Ai(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = dn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function as(e, n) {
  n = n.checked, n != null && Qo(e, "checked", n, !1);
}
function ql(e, n) {
  as(e, n);
  var t = dn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? bl(e, n.type, t) : n.hasOwnProperty("defaultValue") && bl(e, n.type, dn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Vi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function bl(e, n, t) {
  (n !== "number" || Rr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var kt = Array.isArray;
function Yn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function eo(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
  return A({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Bi(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(g(92));
      if (kt(t)) {
        if (1 < t.length) throw Error(g(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: dn(t) };
}
function cs(e, n) {
  var t = dn(n.value), r = dn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Wi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function fs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function no(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? fs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var or, ds = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (or = or || document.createElement("div"), or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = or.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function jt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Et = {
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
  strokeWidth: !0
}, Oc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function(e) {
  Oc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Et[n] = Et[e];
  });
});
function ps(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Et.hasOwnProperty(e) && Et[e] ? ("" + n).trim() : n + "px";
}
function hs(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = ps(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var Ic = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function to(e, n) {
  if (n) {
    if (Ic[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(g(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(g(62));
  }
}
function ro(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
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
var lo = null;
function Go(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var oo = null, Xn = null, Gn = null;
function Hi(e) {
  if (e = qt(e)) {
    if (typeof oo != "function") throw Error(g(280));
    var n = e.stateNode;
    n && (n = il(n), oo(e.stateNode, e.type, n));
  }
}
function ms(e) {
  Xn ? Gn ? Gn.push(e) : Gn = [e] : Xn = e;
}
function vs() {
  if (Xn) {
    var e = Xn, n = Gn;
    if (Gn = Xn = null, Hi(e), n) for (e = 0; e < n.length; e++) Hi(n[e]);
  }
}
function gs(e, n) {
  return e(n);
}
function ys() {
}
var Cl = !1;
function ws(e, n, t) {
  if (Cl) return e(n, t);
  Cl = !0;
  try {
    return gs(e, n, t);
  } finally {
    Cl = !1, (Xn !== null || Gn !== null) && (ys(), vs());
  }
}
function Ot(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = il(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(g(231, n, typeof t));
  return t;
}
var io = !1;
if (He) try {
  var dt = {};
  Object.defineProperty(dt, "passive", { get: function() {
    io = !0;
  } }), window.addEventListener("test", dt, dt), window.removeEventListener("test", dt, dt);
} catch {
  io = !1;
}
function Dc(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (m) {
    this.onError(m);
  }
}
var Ct = !1, Mr = null, jr = !1, uo = null, Fc = { onError: function(e) {
  Ct = !0, Mr = e;
} };
function Uc(e, n, t, r, l, o, i, u, s) {
  Ct = !1, Mr = null, Dc.apply(Fc, arguments);
}
function $c(e, n, t, r, l, o, i, u, s) {
  if (Uc.apply(this, arguments), Ct) {
    if (Ct) {
      var c = Mr;
      Ct = !1, Mr = null;
    } else throw Error(g(198));
    jr || (jr = !0, uo = c);
  }
}
function Mn(e) {
  var n = e, t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function ks(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function Qi(e) {
  if (Mn(e) !== e) throw Error(g(188));
}
function Ac(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Mn(e), n === null) throw Error(g(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return Qi(l), e;
        if (o === r) return Qi(l), n;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (t.return !== r.return) t = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          i = !0, t = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, t = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            i = !0, t = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (t.alternate !== r) throw Error(g(190));
  }
  if (t.tag !== 3) throw Error(g(188));
  return t.stateNode.current === t ? e : n;
}
function Ss(e) {
  return e = Ac(e), e !== null ? xs(e) : null;
}
function xs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = xs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Es = ge.unstable_scheduleCallback, Ki = ge.unstable_cancelCallback, Vc = ge.unstable_shouldYield, Bc = ge.unstable_requestPaint, Q = ge.unstable_now, Wc = ge.unstable_getCurrentPriorityLevel, Zo = ge.unstable_ImmediatePriority, Cs = ge.unstable_UserBlockingPriority, Or = ge.unstable_NormalPriority, Hc = ge.unstable_LowPriority, _s = ge.unstable_IdlePriority, tl = null, Fe = null;
function Qc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function") try {
    Fe.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Re = Math.clz32 ? Math.clz32 : Xc, Kc = Math.log, Yc = Math.LN2;
function Xc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Kc(e) / Yc | 0) | 0;
}
var ir = 64, ur = 4194304;
function St(e) {
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
function Ir(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = St(u) : (o &= i, o !== 0 && (r = St(o)));
  } else i = t & ~l, i !== 0 ? r = St(i) : o !== 0 && (r = St(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Re(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Gc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function Zc(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Re(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & t) || u & r) && (l[i] = Gc(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function so(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function zs() {
  var e = ir;
  return ir <<= 1, !(ir & 4194240) && (ir = 64), e;
}
function _l(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Zt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Re(n), e[n] = t;
}
function Jc(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Re(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function Jo(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var M = 0;
function Ns(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ps, qo, Ls, Ts, Rs, ao = !1, sr = [], rn = null, ln = null, on = null, It = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), be = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Yi(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      It.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dt.delete(n.pointerId);
  }
}
function pt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = qt(n), n !== null && qo(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function bc(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return rn = pt(rn, e, n, t, r, l), !0;
    case "dragenter":
      return ln = pt(ln, e, n, t, r, l), !0;
    case "mouseover":
      return on = pt(on, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return It.set(o, pt(It.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Dt.set(o, pt(Dt.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Ms(e) {
  var n = Sn(e.target);
  if (n !== null) {
    var t = Mn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = ks(t), n !== null) {
          e.blockedOn = n, Rs(e.priority, function() {
            Ls(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = co(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      lo = r, t.target.dispatchEvent(r), lo = null;
    } else return n = qt(t), n !== null && qo(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function Xi(e, n, t) {
  Sr(e) && t.delete(n);
}
function ef() {
  ao = !1, rn !== null && Sr(rn) && (rn = null), ln !== null && Sr(ln) && (ln = null), on !== null && Sr(on) && (on = null), It.forEach(Xi), Dt.forEach(Xi);
}
function ht(e, n) {
  e.blockedOn === n && (e.blockedOn = null, ao || (ao = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, ef)));
}
function Ft(e) {
  function n(l) {
    return ht(l, e);
  }
  if (0 < sr.length) {
    ht(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rn !== null && ht(rn, e), ln !== null && ht(ln, e), on !== null && ht(on, e), It.forEach(n), Dt.forEach(n), t = 0; t < be.length; t++) r = be[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && (t = be[0], t.blockedOn === null); ) Ms(t), t.blockedOn === null && be.shift();
}
var Zn = Xe.ReactCurrentBatchConfig, Dr = !0;
function nf(e, n, t, r) {
  var l = M, o = Zn.transition;
  Zn.transition = null;
  try {
    M = 1, bo(e, n, t, r);
  } finally {
    M = l, Zn.transition = o;
  }
}
function tf(e, n, t, r) {
  var l = M, o = Zn.transition;
  Zn.transition = null;
  try {
    M = 4, bo(e, n, t, r);
  } finally {
    M = l, Zn.transition = o;
  }
}
function bo(e, n, t, r) {
  if (Dr) {
    var l = co(e, n, t, r);
    if (l === null) Il(e, n, r, Fr, t), Yi(e, r);
    else if (bc(l, e, n, t, r)) r.stopPropagation();
    else if (Yi(e, r), n & 4 && -1 < qc.indexOf(e)) {
      for (; l !== null; ) {
        var o = qt(l);
        if (o !== null && Ps(o), o = co(e, n, t, r), o === null && Il(e, n, r, Fr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Il(e, n, r, null, t);
  }
}
var Fr = null;
function co(e, n, t, r) {
  if (Fr = null, e = Go(r), e = Sn(e), e !== null) if (n = Mn(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = ks(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Fr = e, null;
}
function js(e) {
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
      switch (Wc()) {
        case Zo:
          return 1;
        case Cs:
          return 4;
        case Or:
        case Hc:
          return 16;
        case _s:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null, ei = null, xr = null;
function Os() {
  if (xr) return xr;
  var e, n = ei, t = n.length, r, l = "value" in nn ? nn.value : nn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return xr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Er(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ar() {
  return !0;
}
function Gi() {
  return !1;
}
function we(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ar : Gi, this.isPropagationStopped = Gi, this;
  }
  return A(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = ar);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = ar);
  }, persist: function() {
  }, isPersistent: ar }), n;
}
var ut = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ni = we(ut), Jt = A({}, ut, { view: 0, detail: 0 }), rf = we(Jt), zl, Nl, mt, rl = A({}, Jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ti, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== mt && (mt && e.type === "mousemove" ? (zl = e.screenX - mt.screenX, Nl = e.screenY - mt.screenY) : Nl = zl = 0, mt = e), zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Nl;
} }), Zi = we(rl), lf = A({}, rl, { dataTransfer: 0 }), of = we(lf), uf = A({}, Jt, { relatedTarget: 0 }), Pl = we(uf), sf = A({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), af = we(sf), cf = A({}, ut, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ff = we(cf), df = A({}, ut, { data: 0 }), Ji = we(df), pf = {
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
  MozPrintableKey: "Unidentified"
}, hf = {
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
  224: "Meta"
}, mf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = mf[e]) ? !!n[e] : !1;
}
function ti() {
  return vf;
}
var gf = A({}, Jt, { key: function(e) {
  if (e.key) {
    var n = pf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Er(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ti, charCode: function(e) {
  return e.type === "keypress" ? Er(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Er(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), yf = we(gf), wf = A({}, rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qi = we(wf), kf = A({}, Jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ti }), Sf = we(kf), xf = A({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = we(xf), Cf = A({}, rl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _f = we(Cf), zf = [9, 13, 27, 32], ri = He && "CompositionEvent" in window, _t = null;
He && "documentMode" in document && (_t = document.documentMode);
var Nf = He && "TextEvent" in window && !_t, Is = He && (!ri || _t && 8 < _t && 11 >= _t), bi = " ", eu = !1;
function Ds(e, n) {
  switch (e) {
    case "keyup":
      return zf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Fs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function Pf(e, n) {
  switch (e) {
    case "compositionend":
      return Fs(n);
    case "keypress":
      return n.which !== 32 ? null : (eu = !0, bi);
    case "textInput":
      return e = n.data, e === bi && eu ? null : e;
    default:
      return null;
  }
}
function Lf(e, n) {
  if (Fn) return e === "compositionend" || !ri && Ds(e, n) ? (e = Os(), xr = ei = nn = null, Fn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Is && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Tf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function nu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Tf[e.type] : n === "textarea";
}
function Us(e, n, t, r) {
  ms(r), n = Ur(n, "onChange"), 0 < n.length && (t = new ni("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var zt = null, Ut = null;
function Rf(e) {
  Gs(e, 0);
}
function ll(e) {
  var n = An(e);
  if (ss(n)) return e;
}
function Mf(e, n) {
  if (e === "change") return n;
}
var $s = !1;
if (He) {
  var Ll;
  if (He) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var tu = document.createElement("div");
      tu.setAttribute("oninput", "return;"), Tl = typeof tu.oninput == "function";
    }
    Ll = Tl;
  } else Ll = !1;
  $s = Ll && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  zt && (zt.detachEvent("onpropertychange", As), Ut = zt = null);
}
function As(e) {
  if (e.propertyName === "value" && ll(Ut)) {
    var n = [];
    Us(n, Ut, e, Go(e)), ws(Rf, n);
  }
}
function jf(e, n, t) {
  e === "focusin" ? (ru(), zt = n, Ut = t, zt.attachEvent("onpropertychange", As)) : e === "focusout" && ru();
}
function Of(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ll(Ut);
}
function If(e, n) {
  if (e === "click") return ll(n);
}
function Df(e, n) {
  if (e === "input" || e === "change") return ll(n);
}
function Ff(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var je = typeof Object.is == "function" ? Object.is : Ff;
function $t(e, n) {
  if (je(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Kl.call(n, l) || !je(e[l], n[l])) return !1;
  }
  return !0;
}
function lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ou(e, n) {
  var t = lu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = lu(t);
  }
}
function Vs(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Vs(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Bs() {
  for (var e = window, n = Rr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Rr(e.document);
  }
  return n;
}
function li(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Uf(e) {
  var n = Bs(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Vs(t.ownerDocument.documentElement, t)) {
    if (r !== null && li(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ou(t, o);
        var i = ou(
          t,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var $f = He && "documentMode" in document && 11 >= document.documentMode, Un = null, fo = null, Nt = null, po = !1;
function iu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  po || Un == null || Un !== Rr(r) || (r = Un, "selectionStart" in r && li(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nt && $t(Nt, r) || (Nt = r, r = Ur(fo, "onSelect"), 0 < r.length && (n = new ni("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Un)));
}
function cr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var $n = { animationend: cr("Animation", "AnimationEnd"), animationiteration: cr("Animation", "AnimationIteration"), animationstart: cr("Animation", "AnimationStart"), transitionend: cr("Transition", "TransitionEnd") }, Rl = {}, Ws = {};
He && (Ws = document.createElement("div").style, "AnimationEvent" in window || (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation), "TransitionEvent" in window || delete $n.transitionend.transition);
function ol(e) {
  if (Rl[e]) return Rl[e];
  if (!$n[e]) return e;
  var n = $n[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ws) return Rl[e] = n[t];
  return e;
}
var Hs = ol("animationend"), Qs = ol("animationiteration"), Ks = ol("animationstart"), Ys = ol("transitionend"), Xs = /* @__PURE__ */ new Map(), uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hn(e, n) {
  Xs.set(e, n), Rn(n, [e]);
}
for (var Ml = 0; Ml < uu.length; Ml++) {
  var jl = uu[Ml], Af = jl.toLowerCase(), Vf = jl[0].toUpperCase() + jl.slice(1);
  hn(Af, "on" + Vf);
}
hn(Hs, "onAnimationEnd");
hn(Qs, "onAnimationIteration");
hn(Ks, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Ys, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));
function su(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, $c(r, n, void 0, e), e.currentTarget = null;
}
function Gs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        su(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        su(l, u, c), o = s;
      }
    }
  }
  if (jr) throw e = uo, jr = !1, uo = null, e;
}
function O(e, n) {
  var t = n[yo];
  t === void 0 && (t = n[yo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (Zs(n, e, 2, !1), t.add(r));
}
function Ol(e, n, t) {
  var r = 0;
  n && (r |= 4), Zs(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function At(e) {
  if (!e[fr]) {
    e[fr] = !0, rs.forEach(function(t) {
      t !== "selectionchange" && (Bf.has(t) || Ol(t, !1, e), Ol(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || (n[fr] = !0, Ol("selectionchange", !1, n));
  }
}
function Zs(e, n, t, r) {
  switch (js(n)) {
    case 1:
      var l = nf;
      break;
    case 4:
      l = tf;
      break;
    default:
      l = bo;
  }
  t = l.bind(null, n, t, e), l = void 0, !io || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Il(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Sn(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  ws(function() {
    var c = o, m = Go(t), h = [];
    e: {
      var p = Xs.get(e);
      if (p !== void 0) {
        var y = ni, w = e;
        switch (e) {
          case "keypress":
            if (Er(t) === 0) break e;
          case "keydown":
          case "keyup":
            y = yf;
            break;
          case "focusin":
            w = "focus", y = Pl;
            break;
          case "focusout":
            w = "blur", y = Pl;
            break;
          case "beforeblur":
          case "afterblur":
            y = Pl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Zi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = of;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Sf;
            break;
          case Hs:
          case Qs:
          case Ks:
            y = af;
            break;
          case Ys:
            y = Ef;
            break;
          case "scroll":
            y = rf;
            break;
          case "wheel":
            y = _f;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = qi;
        }
        var k = (n & 4) !== 0, D = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Ot(a, f), v != null && k.push(Vt(a, v, d)))), D) break;
          a = a.return;
        }
        0 < k.length && (p = new y(p, w, null, t, m), h.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && t !== lo && (w = t.relatedTarget || t.fromElement) && (Sn(w) || w[Qe])) break e;
        if ((y || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (w = t.relatedTarget || t.toElement, y = c, w = w ? Sn(w) : null, w !== null && (D = Mn(w), w !== D || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = c), y !== w)) {
          if (k = Zi, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = qi, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), D = y == null ? p : An(y), d = w == null ? p : An(w), p = new k(v, a + "leave", y, t, m), p.target = D, p.relatedTarget = d, v = null, Sn(m) === c && (k = new k(f, a + "enter", w, t, m), k.target = d, k.relatedTarget = D, v = k), D = v, y && w) n: {
            for (k = y, f = w, a = 0, d = k; d; d = jn(d)) a++;
            for (d = 0, v = f; v; v = jn(v)) d++;
            for (; 0 < a - d; ) k = jn(k), a--;
            for (; 0 < d - a; ) f = jn(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break n;
              k = jn(k), f = jn(f);
            }
            k = null;
          }
          else k = null;
          y !== null && au(h, p, y, k, !1), w !== null && D !== null && au(h, D, w, k, !0);
        }
      }
      e: {
        if (p = c ? An(c) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var x = Mf;
        else if (nu(p)) if ($s) x = Df;
        else {
          x = Of;
          var C = jf;
        }
        else (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = If);
        if (x && (x = x(e, c))) {
          Us(h, x, t, m);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && bl(p, "number", p.value);
      }
      switch (C = c ? An(c) : window, e) {
        case "focusin":
          (nu(C) || C.contentEditable === "true") && (Un = C, fo = c, Nt = null);
          break;
        case "focusout":
          Nt = fo = Un = null;
          break;
        case "mousedown":
          po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          po = !1, iu(h, t, m);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          iu(h, t, m);
      }
      var _;
      if (ri) e: {
        switch (e) {
          case "compositionstart":
            var z = "onCompositionStart";
            break e;
          case "compositionend":
            z = "onCompositionEnd";
            break e;
          case "compositionupdate":
            z = "onCompositionUpdate";
            break e;
        }
        z = void 0;
      }
      else Fn ? Ds(e, t) && (z = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (z = "onCompositionStart");
      z && (Is && t.locale !== "ko" && (Fn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Fn && (_ = Os()) : (nn = m, ei = "value" in nn ? nn.value : nn.textContent, Fn = !0)), C = Ur(c, z), 0 < C.length && (z = new Ji(z, e, null, t, m), h.push({ event: z, listeners: C }), _ ? z.data = _ : (_ = Fs(t), _ !== null && (z.data = _)))), (_ = Nf ? Pf(e, t) : Lf(e, t)) && (c = Ur(c, "onBeforeInput"), 0 < c.length && (m = new Ji("onBeforeInput", "beforeinput", null, t, m), h.push({ event: m, listeners: c }), m.data = _));
    }
    Gs(h, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Ot(e, t), o != null && r.unshift(Vt(e, o, l)), o = Ot(e, n), o != null && r.push(Vt(e, o, l))), e = e.return;
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Ot(t, o), s != null && i.unshift(Vt(t, s, u))) : l || (s = Ot(t, o), s != null && i.push(Vt(t, s, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Wf = /\r\n?/g, Hf = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Wf, `
`).replace(Hf, "");
}
function dr(e, n, t) {
  if (n = cu(n), cu(e) !== n && t) throw Error(g(425));
}
function $r() {
}
var ho = null, mo = null;
function vo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var go = typeof setTimeout == "function" ? setTimeout : void 0, Qf = typeof clearTimeout == "function" ? clearTimeout : void 0, fu = typeof Promise == "function" ? Promise : void 0, Kf = typeof queueMicrotask == "function" ? queueMicrotask : typeof fu < "u" ? function(e) {
  return fu.resolve(null).then(e).catch(Yf);
} : go;
function Yf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Dl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), Ft(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Ft(n);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function du(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var st = Math.random().toString(36).slice(2), De = "__reactFiber$" + st, Bt = "__reactProps$" + st, Qe = "__reactContainer$" + st, yo = "__reactEvents$" + st, Xf = "__reactListeners$" + st, Gf = "__reactHandles$" + st;
function Sn(e) {
  var n = e[De];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Qe] || t[De]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = du(e); e !== null; ) {
        if (t = e[De]) return t;
        e = du(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function qt(e) {
  return e = e[De] || e[Qe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function il(e) {
  return e[Bt] || null;
}
var wo = [], Vn = -1;
function mn(e) {
  return { current: e };
}
function I(e) {
  0 > Vn || (e.current = wo[Vn], wo[Vn] = null, Vn--);
}
function j(e, n) {
  Vn++, wo[Vn] = e.current, e.current = n;
}
var pn = {}, le = mn(pn), fe = mn(!1), zn = pn;
function et(e, n) {
  var t = e.type.contextTypes;
  if (!t) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function Ar() {
  I(fe), I(le);
}
function pu(e, n, t) {
  if (le.current !== pn) throw Error(g(168));
  j(le, n), j(fe, t);
}
function Js(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(g(108, Mc(e) || "Unknown", l));
  return A({}, t, r);
}
function Vr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, zn = le.current, j(le, e), j(fe, fe.current), !0;
}
function hu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  t ? (e = Js(e, n, zn), r.__reactInternalMemoizedMergedChildContext = e, I(fe), I(le), j(le, e)) : I(fe), j(fe, t);
}
var Ae = null, ul = !1, Fl = !1;
function qs(e) {
  Ae === null ? Ae = [e] : Ae.push(e);
}
function Zf(e) {
  ul = !0, qs(e);
}
function vn() {
  if (!Fl && Ae !== null) {
    Fl = !0;
    var e = 0, n = M;
    try {
      var t = Ae;
      for (M = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ae = null, ul = !1;
    } catch (l) {
      throw Ae !== null && (Ae = Ae.slice(e + 1)), Es(Zo, vn), l;
    } finally {
      M = n, Fl = !1;
    }
  }
  return null;
}
var Bn = [], Wn = 0, Br = null, Wr = 0, ke = [], Se = 0, Nn = null, Ve = 1, Be = "";
function wn(e, n) {
  Bn[Wn++] = Wr, Bn[Wn++] = Br, Br = e, Wr = n;
}
function bs(e, n, t) {
  ke[Se++] = Ve, ke[Se++] = Be, ke[Se++] = Nn, Nn = e;
  var r = Ve;
  e = Be;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Re(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Re(n) + l | t << l | r, Be = o + e;
  } else Ve = 1 << o | t << l | r, Be = e;
}
function oi(e) {
  e.return !== null && (wn(e, 1), bs(e, 1, 0));
}
function ii(e) {
  for (; e === Br; ) Br = Bn[--Wn], Bn[Wn] = null, Wr = Bn[--Wn], Bn[Wn] = null;
  for (; e === Nn; ) Nn = ke[--Se], ke[Se] = null, Be = ke[--Se], ke[Se] = null, Ve = ke[--Se], ke[Se] = null;
}
var ve = null, me = null, F = !1, Te = null;
function ea(e, n) {
  var t = xe(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function mu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ve = e, me = un(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ve = e, me = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Nn !== null ? { id: Ve, overflow: Be } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = xe(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ve = e, me = null, !0) : !1;
    default:
      return !1;
  }
}
function ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function So(e) {
  if (F) {
    var n = me;
    if (n) {
      var t = n;
      if (!mu(e, n)) {
        if (ko(e)) throw Error(g(418));
        n = un(t.nextSibling);
        var r = ve;
        n && mu(e, n) ? ea(r, t) : (e.flags = e.flags & -4097 | 2, F = !1, ve = e);
      }
    } else {
      if (ko(e)) throw Error(g(418));
      e.flags = e.flags & -4097 | 2, F = !1, ve = e;
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve) return !1;
  if (!F) return vu(e), F = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !vo(e.type, e.memoizedProps)), n && (n = me)) {
    if (ko(e)) throw na(), Error(g(418));
    for (; n; ) ea(e, n), n = un(n.nextSibling);
  }
  if (vu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              me = un(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else me = ve ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function na() {
  for (var e = me; e; ) e = un(e.nextSibling);
}
function nt() {
  me = ve = null, F = !1;
}
function ui(e) {
  Te === null ? Te = [e] : Te.push(e);
}
var Jf = Xe.ReactCurrentBatchConfig;
function vt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(g(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!t._owner) throw Error(g(290, e));
  }
  return e;
}
function hr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function gu(e) {
  var n = e._init;
  return n(e._payload);
}
function ta(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = fn(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Hl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var x = d.type;
    return x === Dn ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Je && gu(x) === a.type) ? (v = l(a, d.props), v.ref = vt(f, a, d), v.return = f, v) : (v = Tr(d.type, d.key, d.props, null, f.mode, v), v.ref = vt(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Ql(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, x) {
    return a === null || a.tag !== 7 ? (a = _n(d, f.mode, v, x), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Hl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return d = Tr(a.type, a.key, a.props, null, f.mode, d), d.ref = vt(f, null, a), d.return = f, d;
        case In:
          return a = Ql(a, f.mode, d), a.return = f, a;
        case Je:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (kt(a) || ft(a)) return a = _n(a, f.mode, d, null), a.return = f, a;
      hr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var x = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return x !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === x ? s(f, a, d, v) : null;
        case In:
          return d.key === x ? c(f, a, d, v) : null;
        case Je:
          return x = d._init, p(
            f,
            a,
            x(d._payload),
            v
          );
      }
      if (kt(d) || ft(d)) return x !== null ? null : m(f, a, d, v, null);
      hr(f, d);
    }
    return null;
  }
  function y(f, a, d, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, x);
        case In:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, x);
        case Je:
          var C = v._init;
          return y(f, a, d, C(v._payload), x);
      }
      if (kt(v) || ft(v)) return f = f.get(d) || null, m(a, f, v, x, null);
      hr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var x = null, C = null, _ = a, z = a = 0, B = null; _ !== null && z < d.length; z++) {
      _.index > z ? (B = _, _ = null) : B = _.sibling;
      var T = p(f, _, d[z], v);
      if (T === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && T.alternate === null && n(f, _), a = o(T, a, z), C === null ? x = T : C.sibling = T, C = T, _ = B;
    }
    if (z === d.length) return t(f, _), F && wn(f, z), x;
    if (_ === null) {
      for (; z < d.length; z++) _ = h(f, d[z], v), _ !== null && (a = o(_, a, z), C === null ? x = _ : C.sibling = _, C = _);
      return F && wn(f, z), x;
    }
    for (_ = r(f, _); z < d.length; z++) B = y(_, f, z, d[z], v), B !== null && (e && B.alternate !== null && _.delete(B.key === null ? z : B.key), a = o(B, a, z), C === null ? x = B : C.sibling = B, C = B);
    return e && _.forEach(function(ze) {
      return n(f, ze);
    }), F && wn(f, z), x;
  }
  function k(f, a, d, v) {
    var x = ft(d);
    if (typeof x != "function") throw Error(g(150));
    if (d = x.call(d), d == null) throw Error(g(151));
    for (var C = x = null, _ = a, z = a = 0, B = null, T = d.next(); _ !== null && !T.done; z++, T = d.next()) {
      _.index > z ? (B = _, _ = null) : B = _.sibling;
      var ze = p(f, _, T.value, v);
      if (ze === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && ze.alternate === null && n(f, _), a = o(ze, a, z), C === null ? x = ze : C.sibling = ze, C = ze, _ = B;
    }
    if (T.done) return t(
      f,
      _
    ), F && wn(f, z), x;
    if (_ === null) {
      for (; !T.done; z++, T = d.next()) T = h(f, T.value, v), T !== null && (a = o(T, a, z), C === null ? x = T : C.sibling = T, C = T);
      return F && wn(f, z), x;
    }
    for (_ = r(f, _); !T.done; z++, T = d.next()) T = y(_, f, z, T.value, v), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? z : T.key), a = o(T, a, z), C === null ? x = T : C.sibling = T, C = T);
    return e && _.forEach(function(at) {
      return n(f, at);
    }), F && wn(f, z), x;
  }
  function D(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Dn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var x = d.key, C = a; C !== null; ) {
              if (C.key === x) {
                if (x = d.type, x === Dn) {
                  if (C.tag === 7) {
                    t(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Je && gu(x) === C.type) {
                  t(f, C.sibling), a = l(C, d.props), a.ref = vt(f, C, d), a.return = f, f = a;
                  break e;
                }
                t(f, C);
                break;
              } else n(f, C);
              C = C.sibling;
            }
            d.type === Dn ? (a = _n(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Tr(d.type, d.key, d.props, null, f.mode, v), v.ref = vt(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case In:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                t(f, a);
                break;
              }
              else n(f, a);
              a = a.sibling;
            }
            a = Ql(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case Je:
          return C = d._init, D(f, a, C(d._payload), v);
      }
      if (kt(d)) return w(f, a, d, v);
      if (ft(d)) return k(f, a, d, v);
      hr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Hl(d, f.mode, v), a.return = f, f = a), i(f)) : t(f, a);
  }
  return D;
}
var tt = ta(!0), ra = ta(!1), Hr = mn(null), Qr = null, Hn = null, si = null;
function ai() {
  si = Hn = Qr = null;
}
function ci(e) {
  var n = Hr.current;
  I(Hr), e._currentValue = n;
}
function xo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function Jn(e, n) {
  Qr = e, si = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ce = !0), e.firstContext = null);
}
function Ce(e) {
  var n = e._currentValue;
  if (si !== e) if (e = { context: e, memoizedValue: n, next: null }, Hn === null) {
    if (Qr === null) throw Error(g(308));
    Hn = e, Qr.dependencies = { lanes: 0, firstContext: e };
  } else Hn = Hn.next = e;
  return n;
}
var xn = null;
function fi(e) {
  xn === null ? xn = [e] : xn.push(e);
}
function la(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, fi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ke(e, r);
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var qe = !1;
function di(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function oa(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function We(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ke(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, fi(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ke(e, t);
}
function Cr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, Jo(e, t);
  }
}
function yu(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = i : o = o.next = i, t = t.next;
      } while (t !== null);
      o === null ? l = o = n : o = o.next = n;
    } else l = o = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function Kr(e, n, t, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== i && (u === null ? m.firstBaseUpdate = c : u.next = c, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, m = c = s = null, u = o;
    do {
      var p = u.lane, y = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (p = n, y = t, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                h = w.call(y, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(y, h, p) : w, p == null) break e;
              h = A({}, h, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else y = { eventTime: y, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = y, s = h) : m = m.next = y, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    Ln |= i, e.lanes = i, e.memoizedState = h;
  }
}
function wu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(g(191, l));
      l.call(r);
    }
  }
}
var bt = {}, Ue = mn(bt), Wt = mn(bt), Ht = mn(bt);
function En(e) {
  if (e === bt) throw Error(g(174));
  return e;
}
function pi(e, n) {
  switch (j(Ht, n), j(Wt, e), j(Ue, bt), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : no(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = no(n, e);
  }
  I(Ue), j(Ue, n);
}
function rt() {
  I(Ue), I(Wt), I(Ht);
}
function ia(e) {
  En(Ht.current);
  var n = En(Ue.current), t = no(n, e.type);
  n !== t && (j(Wt, e), j(Ue, t));
}
function hi(e) {
  Wt.current === e && (I(Ue), I(Wt));
}
var U = mn(0);
function Yr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Ul = [];
function mi() {
  for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var _r = Xe.ReactCurrentDispatcher, $l = Xe.ReactCurrentBatchConfig, Pn = 0, $ = null, Y = null, Z = null, Xr = !1, Pt = !1, Qt = 0, qf = 0;
function ne() {
  throw Error(g(321));
}
function vi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!je(e[t], n[t])) return !1;
  return !0;
}
function gi(e, n, t, r, l, o) {
  if (Pn = o, $ = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _r.current = e === null || e.memoizedState === null ? td : rd, e = t(r, l), Pt) {
    o = 0;
    do {
      if (Pt = !1, Qt = 0, 25 <= o) throw Error(g(301));
      o += 1, Z = Y = null, n.updateQueue = null, _r.current = ld, e = t(r, l);
    } while (Pt);
  }
  if (_r.current = Gr, n = Y !== null && Y.next !== null, Pn = 0, Z = Y = $ = null, Xr = !1, n) throw Error(g(300));
  return e;
}
function yi() {
  var e = Qt !== 0;
  return Qt = 0, e;
}
function Ie() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? $.memoizedState = Z = e : Z = Z.next = e, Z;
}
function _e() {
  if (Y === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? $.memoizedState : Z.next;
  if (n !== null) Z = n, Y = e;
  else {
    if (e === null) throw Error(g(310));
    Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, Z === null ? $.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Kt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Al(e) {
  var n = _e(), t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = Y, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var m = c.lane;
      if ((Pn & m) === m) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, $.lanes |= m, Ln |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, je(r, n.memoizedState) || (ce = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, $.lanes |= o, Ln |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Vl(e) {
  var n = _e(), t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    je(o, n.memoizedState) || (ce = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function ua() {
}
function sa(e, n) {
  var t = $, r = _e(), l = n(), o = !je(r.memoizedState, l);
  if (o && (r.memoizedState = l, ce = !0), r = r.queue, wi(fa.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || Z !== null && Z.memoizedState.tag & 1) {
    if (t.flags |= 2048, Yt(9, ca.bind(null, t, r, l, n), void 0, null), J === null) throw Error(g(349));
    Pn & 30 || aa(t, n, l);
  }
  return l;
}
function aa(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function ca(e, n, t, r) {
  n.value = t, n.getSnapshot = r, da(n) && pa(e);
}
function fa(e, n, t) {
  return t(function() {
    da(n) && pa(e);
  });
}
function da(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !je(e, t);
  } catch {
    return !0;
  }
}
function pa(e) {
  var n = Ke(e, 1);
  n !== null && Me(n, e, 1, -1);
}
function ku(e) {
  var n = Ie();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kt, lastRenderedState: e }, n.queue = e, e = e.dispatch = nd.bind(null, $, e), [n.memoizedState, e];
}
function Yt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function ha() {
  return _e().memoizedState;
}
function zr(e, n, t, r) {
  var l = Ie();
  $.flags |= e, l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r);
}
function sl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (o = i.destroy, r !== null && vi(r, i.deps)) {
      l.memoizedState = Yt(n, t, o, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Yt(1 | n, t, o, r);
}
function Su(e, n) {
  return zr(8390656, 8, e, n);
}
function wi(e, n) {
  return sl(2048, 8, e, n);
}
function ma(e, n) {
  return sl(4, 2, e, n);
}
function va(e, n) {
  return sl(4, 4, e, n);
}
function ga(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function ya(e, n, t) {
  return t = t != null ? t.concat([e]) : null, sl(4, 4, ga.bind(null, n, e), t);
}
function ki() {
}
function wa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && vi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function ka(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && vi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Sa(e, n, t) {
  return Pn & 21 ? (je(t, n) || (t = zs(), $.lanes |= t, Ln |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = t);
}
function bf(e, n) {
  var t = M;
  M = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), n();
  } finally {
    M = t, $l.transition = r;
  }
}
function xa() {
  return _e().memoizedState;
}
function ed(e, n, t) {
  var r = cn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ea(e)) Ca(n, t);
  else if (t = la(e, n, t, r), t !== null) {
    var l = ie();
    Me(t, e, r, l), _a(t, n, r);
  }
}
function nd(e, n, t) {
  var r = cn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ea(e)) Ca(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, je(u, i)) {
        var s = n.interleaved;
        s === null ? (l.next = l, fi(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = la(e, n, l, r), t !== null && (l = ie(), Me(t, e, r, l), _a(t, n, r));
  }
}
function Ea(e) {
  var n = e.alternate;
  return e === $ || n !== null && n === $;
}
function Ca(e, n) {
  Pt = Xr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function _a(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, Jo(e, t);
  }
}
var Gr = { readContext: Ce, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, td = { readContext: Ce, useCallback: function(e, n) {
  return Ie().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Ce, useEffect: Su, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, zr(
    4194308,
    4,
    ga.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return zr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return zr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = Ie();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = Ie();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = ed.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = Ie();
  return e = { current: e }, n.memoizedState = e;
}, useState: ku, useDebugValue: ki, useDeferredValue: function(e) {
  return Ie().memoizedState = e;
}, useTransition: function() {
  var e = ku(!1), n = e[0];
  return e = bf.bind(null, e[1]), Ie().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = $, l = Ie();
  if (F) {
    if (t === void 0) throw Error(g(407));
    t = t();
  } else {
    if (t = n(), J === null) throw Error(g(349));
    Pn & 30 || aa(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Su(fa.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Yt(9, ca.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = Ie(), n = J.identifierPrefix;
  if (F) {
    var t = Be, r = Ve;
    t = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Qt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = qf++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, rd = {
  readContext: Ce,
  useCallback: wa,
  useContext: Ce,
  useEffect: wi,
  useImperativeHandle: ya,
  useInsertionEffect: ma,
  useLayoutEffect: va,
  useMemo: ka,
  useReducer: Al,
  useRef: ha,
  useState: function() {
    return Al(Kt);
  },
  useDebugValue: ki,
  useDeferredValue: function(e) {
    var n = _e();
    return Sa(n, Y.memoizedState, e);
  },
  useTransition: function() {
    var e = Al(Kt)[0], n = _e().memoizedState;
    return [e, n];
  },
  useMutableSource: ua,
  useSyncExternalStore: sa,
  useId: xa,
  unstable_isNewReconciler: !1
}, ld = { readContext: Ce, useCallback: wa, useContext: Ce, useEffect: wi, useImperativeHandle: ya, useInsertionEffect: ma, useLayoutEffect: va, useMemo: ka, useReducer: Vl, useRef: ha, useState: function() {
  return Vl(Kt);
}, useDebugValue: ki, useDeferredValue: function(e) {
  var n = _e();
  return Y === null ? n.memoizedState = e : Sa(n, Y.memoizedState, e);
}, useTransition: function() {
  var e = Vl(Kt)[0], n = _e().memoizedState;
  return [e, n];
}, useMutableSource: ua, useSyncExternalStore: sa, useId: xa, unstable_isNewReconciler: !1 };
function Pe(e, n) {
  if (e && e.defaultProps) {
    n = A({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Eo(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : A({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var al = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = ie(), l = cn(e), o = We(r, l);
  o.payload = n, t != null && (o.callback = t), n = sn(e, o, l), n !== null && (Me(n, e, l, r), Cr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = ie(), l = cn(e), o = We(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = sn(e, o, l), n !== null && (Me(n, e, l, r), Cr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = ie(), r = cn(e), l = We(t, r);
  l.tag = 2, n != null && (l.callback = n), n = sn(e, l, r), n !== null && (Me(n, e, r, t), Cr(n, e, r));
} };
function xu(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !$t(t, r) || !$t(l, o) : !0;
}
function za(e, n, t) {
  var r = !1, l = pn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Ce(o) : (l = de(n) ? zn : le.current, r = n.contextTypes, o = (r = r != null) ? et(e, l) : pn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = al, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Eu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && al.enqueueReplaceState(n, n.state, null);
}
function Co(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, di(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Ce(o) : (o = de(n) ? zn : le.current, l.context = et(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Eo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && al.enqueueReplaceState(l, l.state, null), Kr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function lt(e, n) {
  try {
    var t = "", r = n;
    do
      t += Rc(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Bl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function _o(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var od = typeof WeakMap == "function" ? WeakMap : Map;
function Na(e, n, t) {
  t = We(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    Jr || (Jr = !0, Io = r), _o(e, n);
  }, t;
}
function Pa(e, n, t) {
  t = We(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      _o(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    _o(e, n), typeof r != "function" && (an === null ? an = /* @__PURE__ */ new Set([this]) : an.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Cu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new od();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = wd.bind(null, e, n, t), n.then(e, e));
}
function _u(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = We(-1, 1), n.tag = 2, sn(t, n, 1))), t.lanes |= 1), e);
}
var id = Xe.ReactCurrentOwner, ce = !1;
function oe(e, n, t, r) {
  n.child = e === null ? ra(n, null, t, r) : tt(n, e.child, t, r);
}
function Nu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return Jn(n, l), r = gi(e, n, t, r, o, l), t = yi(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (F && t && oi(n), n.flags |= 1, oe(e, n, r, l), n.child);
}
function Pu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Pi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, La(e, n, o, r, l)) : (e = Tr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : $t, t(i, r) && e.ref === n.ref) return Ye(e, n, l);
  }
  return n.flags |= 1, e = fn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function La(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($t(o, r) && e.ref === n.ref) if (ce = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ce = !0);
    else return n.lanes = e.lanes, Ye(e, n, l);
  }
  return zo(e, n, t, r, l);
}
function Ta(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(Kn, he), he |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, j(Kn, he), he |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, j(Kn, he), he |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, j(Kn, he), he |= r;
  return oe(e, n, l, t), n.child;
}
function Ra(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function zo(e, n, t, r, l) {
  var o = de(t) ? zn : le.current;
  return o = et(n, o), Jn(n, l), t = gi(e, n, t, r, o, l), r = yi(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (F && r && oi(n), n.flags |= 1, oe(e, n, t, l), n.child);
}
function Lu(e, n, t, r, l) {
  if (de(t)) {
    var o = !0;
    Vr(n);
  } else o = !1;
  if (Jn(n, l), n.stateNode === null) Nr(e, n), za(n, t, r), Co(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var s = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = de(t) ? zn : le.current, c = et(n, c));
    var m = t.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Eu(n, i, r, c), qe = !1;
    var p = n.memoizedState;
    i.state = p, Kr(n, r, i, l), s = n.memoizedState, u !== r || p !== s || fe.current || qe ? (typeof m == "function" && (Eo(n, t, m, r), s = n.memoizedState), (u = qe || xu(n, t, u, r, p, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, oa(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Pe(n.type, u), i.props = c, h = n.pendingProps, p = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = de(t) ? zn : le.current, s = et(n, s));
    var y = t.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || p !== s) && Eu(n, i, r, s), qe = !1, p = n.memoizedState, i.state = p, Kr(n, r, i, l);
    var w = n.memoizedState;
    u !== h || p !== w || fe.current || qe ? (typeof y == "function" && (Eo(n, t, y, r), w = n.memoizedState), (c = qe || xu(n, t, c, r, p, w, s) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return No(e, n, t, r, o, l);
}
function No(e, n, t, r, l, o) {
  Ra(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && hu(n, t, !1), Ye(e, n, o);
  r = n.stateNode, id.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = tt(n, e.child, null, o), n.child = tt(n, null, u, o)) : oe(e, n, u, o), n.memoizedState = r.state, l && hu(n, t, !0), n.child;
}
function Ma(e) {
  var n = e.stateNode;
  n.pendingContext ? pu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && pu(e, n.context, !1), pi(e, n.containerInfo);
}
function Tu(e, n, t, r, l) {
  return nt(), ui(l), n.flags |= 256, oe(e, n, t, r), n.child;
}
var Po = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ja(e, n, t) {
  var r = n.pendingProps, l = U.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(U, l & 1), e === null)
    return So(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = dl(i, r, 0, null), e = _n(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Lo(t), n.memoizedState = Po, e) : Si(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return ud(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = fn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = fn(u, o) : (o = _n(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Lo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Po, r;
  }
  return o = e.child, e = o.sibling, r = fn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Si(e, n) {
  return n = dl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function mr(e, n, t, r) {
  return r !== null && ui(r), tt(n, e.child, null, t), e = Si(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function ud(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Bl(Error(g(422))), mr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = dl({ mode: "visible", children: r.children }, l, 0, null), o = _n(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && tt(n, e.child, null, i), n.child.memoizedState = Lo(i), n.memoizedState = Po, o);
  if (!(n.mode & 1)) return mr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(g(419)), r = Bl(o, r, void 0), mr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ce || u) {
    if (r = J, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ke(e, l), Me(r, e, l, -1));
    }
    return Ni(), r = Bl(Error(g(421))), mr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = kd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, me = un(l.nextSibling), ve = n, F = !0, Te = null, e !== null && (ke[Se++] = Ve, ke[Se++] = Be, ke[Se++] = Nn, Ve = e.id, Be = e.overflow, Nn = n), n = Si(n, r.children), n.flags |= 4096, n);
}
function Ru(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), xo(e.return, n, t);
}
function Wl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Oa(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (oe(e, n, r.children, t), r = U.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ru(e, t, n);
      else if (e.tag === 19) Ru(e, t, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (j(U, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && Yr(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Wl(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Yr(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      Wl(n, !0, t, null, o);
      break;
    case "together":
      Wl(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function Nr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Ye(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Ln |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(g(153));
  if (n.child !== null) {
    for (e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = fn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function sd(e, n, t) {
  switch (n.tag) {
    case 3:
      Ma(n), nt();
      break;
    case 5:
      ia(n);
      break;
    case 1:
      de(n.type) && Vr(n);
      break;
    case 4:
      pi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      j(Hr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (j(U, U.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? ja(e, n, t) : (j(U, U.current & 1), e = Ye(e, n, t), e !== null ? e.sibling : null);
      j(U, U.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return Oa(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), j(U, U.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Ta(e, n, t);
  }
  return Ye(e, n, t);
}
var Ia, To, Da, Fa;
Ia = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
To = function() {
};
Da = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, En(Ue.current);
    var o = null;
    switch (t) {
      case "input":
        l = Jl(e, l), r = Jl(e, r), o = [];
        break;
      case "select":
        l = A({}, l, { value: void 0 }), r = A({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = eo(e, l), r = eo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
    }
    to(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Mt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Mt.hasOwnProperty(c) ? (s != null && c === "onScroll" && O("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Fa = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function gt(e, n) {
  if (!F) switch (e.tailMode) {
    case "hidden":
      n = e.tail;
      for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
      t === null ? e.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function ad(e, n, t) {
  var r = n.pendingProps;
  switch (ii(n), n.tag) {
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
      return te(n), null;
    case 1:
      return de(n.type) && Ar(), te(n), null;
    case 3:
      return r = n.stateNode, rt(), I(fe), I(le), mi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Te !== null && (Uo(Te), Te = null))), To(e, n), te(n), null;
    case 5:
      hi(n);
      var l = En(Ht.current);
      if (t = n.type, e !== null && n.stateNode != null) Da(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(g(166));
          return te(n), null;
        }
        if (e = En(Ue.current), pr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[De] = n, r[Bt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xt.length; l++) O(xt[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O(
                "error",
                r
              ), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Ai(r, o), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, O("invalid", r);
              break;
            case "textarea":
              Bi(r, o), O("invalid", r);
          }
          to(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && dr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && dr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Mt.hasOwnProperty(i) && u != null && i === "onScroll" && O("scroll", r);
          }
          switch (t) {
            case "input":
              lr(r), Vi(r, o, !0);
              break;
            case "textarea":
              lr(r), Wi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $r);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fs(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[De] = n, e[Bt] = r, Ia(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = ro(t, r), t) {
              case "dialog":
                O("cancel", e), O("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < xt.length; l++) O(xt[l], e);
                l = r;
                break;
              case "source":
                O("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                O(
                  "error",
                  e
                ), O("load", e), l = r;
                break;
              case "details":
                O("toggle", e), l = r;
                break;
              case "input":
                Ai(e, r), l = Jl(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = A({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                Bi(e, r), l = eo(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            to(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? hs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ds(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && jt(e, s) : typeof s == "number" && jt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mt.hasOwnProperty(o) ? s != null && o === "onScroll" && O("scroll", e) : s != null && Qo(e, o, s, i));
            }
            switch (t) {
              case "input":
                lr(e), Vi(e, r, !1);
                break;
              case "textarea":
                lr(e), Wi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Yn(e, !!r.multiple, o, !1) : r.defaultValue != null && Yn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (t) {
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
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Fa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(g(166));
        if (t = En(Ht.current), En(Ue.current), pr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[De] = n, (o = r.nodeValue !== t) && (e = ve, e !== null)) switch (e.tag) {
            case 3:
              dr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && dr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[De] = n, n.stateNode = r;
      }
      return te(n), null;
    case 13:
      if (I(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (F && me !== null && n.mode & 1 && !(n.flags & 128)) na(), nt(), n.flags |= 98560, o = !1;
        else if (o = pr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(g(317));
            o[De] = n;
          } else nt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          te(n), o = !1;
        } else Te !== null && (Uo(Te), Te = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || U.current & 1 ? X === 0 && (X = 3) : Ni())), n.updateQueue !== null && (n.flags |= 4), te(n), null);
    case 4:
      return rt(), To(e, n), e === null && At(n.stateNode.containerInfo), te(n), null;
    case 10:
      return ci(n.type._context), te(n), null;
    case 17:
      return de(n.type) && Ar(), te(n), null;
    case 19:
      if (I(U), o = n.memoizedState, o === null) return te(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) gt(o, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = Yr(e), i !== null) {
            for (n.flags |= 128, gt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return j(U, U.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Q() > ot && (n.flags |= 128, r = !0, gt(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = Yr(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), gt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !F) return te(n), null;
        } else 2 * Q() - o.renderingStartTime > ot && t !== 1073741824 && (n.flags |= 128, r = !0, gt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Q(), n.sibling = null, t = U.current, j(U, r ? t & 1 | 2 : t & 1), n) : (te(n), null);
    case 22:
    case 23:
      return zi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? he & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : te(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, n.tag));
}
function cd(e, n) {
  switch (ii(n), n.tag) {
    case 1:
      return de(n.type) && Ar(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return rt(), I(fe), I(le), mi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return hi(n), null;
    case 13:
      if (I(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(g(340));
        nt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return I(U), null;
    case 4:
      return rt(), null;
    case 10:
      return ci(n.type._context), null;
    case 22:
    case 23:
      return zi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1, re = !1, fd = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Qn(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    V(e, n, r);
  }
  else t.current = null;
}
function Ro(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Mu = !1;
function dd(e, n) {
  if (ho = Dr, e = Bs(), li(e)) {
    if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      t = (t = e.ownerDocument) && t.defaultView || window;
      var r = t.getSelection && t.getSelection();
      if (r && r.rangeCount !== 0) {
        t = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          t.nodeType, o.nodeType;
        } catch {
          t = null;
          break e;
        }
        var i = 0, u = -1, s = -1, c = 0, m = 0, h = e, p = null;
        n: for (; ; ) {
          for (var y; h !== t || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (y = h.firstChild) !== null; )
            p = h, h = y;
          for (; ; ) {
            if (h === e) break n;
            if (p === t && ++c === l && (u = i), p === o && ++m === r && (s = i), (y = h.nextSibling) !== null) break;
            h = p, p = h.parentNode;
          }
          h = y;
        }
        t = u === -1 || s === -1 ? null : { start: u, end: s };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (mo = { focusedElem: e, selectionRange: t }, Dr = !1, S = n; S !== null; ) if (n = S, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, S = e;
  else for (; S !== null; ) {
    n = S;
    try {
      var w = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, D = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Pe(n.type, k), D);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = n.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(g(163));
      }
    } catch (v) {
      V(n, n.return, v);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, S = e;
      break;
    }
    S = n.return;
  }
  return w = Mu, Mu = !1, w;
}
function Lt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ro(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Mo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function Ua(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Ua(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[De], delete n[Bt], delete n[yo], delete n[Xf], delete n[Gf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $a(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ju(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || $a(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = $r));
  else if (r !== 4 && (e = e.child, e !== null)) for (jo(e, n, t), e = e.sibling; e !== null; ) jo(e, n, t), e = e.sibling;
}
function Oo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Oo(e, n, t), e = e.sibling; e !== null; ) Oo(e, n, t), e = e.sibling;
}
var q = null, Le = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; ) Aa(e, n, t), t = t.sibling;
}
function Aa(e, n, t) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function") try {
    Fe.onCommitFiberUnmount(tl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      re || Qn(t, n);
    case 6:
      var r = q, l = Le;
      q = null, Ge(e, n, t), q = r, Le = l, q !== null && (Le ? (e = q, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null && (Le ? (e = q, t = t.stateNode, e.nodeType === 8 ? Dl(e.parentNode, t) : e.nodeType === 1 && Dl(e, t), Ft(e)) : Dl(q, t.stateNode));
      break;
    case 4:
      r = q, l = Le, q = t.stateNode.containerInfo, Le = !0, Ge(e, n, t), q = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ro(t, n, i), l = l.next;
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (!re && (Qn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        V(t, n, u);
      }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (re = (r = re) || t.memoizedState !== null, Ge(e, n, t), re = r) : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Ou(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new fd()), n.forEach(function(r) {
      var l = Sd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Ne(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var o = e, i = n, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            q = u.stateNode, Le = !1;
            break e;
          case 3:
            q = u.stateNode.containerInfo, Le = !0;
            break e;
          case 4:
            q = u.stateNode.containerInfo, Le = !0;
            break e;
        }
        u = u.return;
      }
      if (q === null) throw Error(g(160));
      Aa(o, i, l), q = null, Le = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      V(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Va(n, e), n = n.sibling;
}
function Va(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(n, e), Oe(e), r & 4) {
        try {
          Lt(3, e, e.return), cl(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          Lt(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      Ne(n, e), Oe(e), r & 512 && t !== null && Qn(t, t.return);
      break;
    case 5:
      if (Ne(n, e), Oe(e), r & 512 && t !== null && Qn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          jt(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && as(l, o), ro(u, i);
          var c = ro(u, o);
          for (i = 0; i < s.length; i += 2) {
            var m = s[i], h = s[i + 1];
            m === "style" ? hs(l, h) : m === "dangerouslySetInnerHTML" ? ds(l, h) : m === "children" ? jt(l, h) : Qo(l, m, h, c);
          }
          switch (u) {
            case "input":
              ql(l, o);
              break;
            case "textarea":
              cs(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var y = o.value;
              y != null ? Yn(l, !!o.multiple, y, !1) : p !== !!o.multiple && (o.defaultValue != null ? Yn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Yn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Bt] = o;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Ne(n, e), Oe(e), r & 4) {
        if (e.stateNode === null) throw Error(g(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Ne(n, e), Oe(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Ft(n.containerInfo);
      } catch (k) {
        V(e, e.return, k);
      }
      break;
    case 4:
      Ne(n, e), Oe(e);
      break;
    case 13:
      Ne(n, e), Oe(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ci = Q())), r & 4 && Ou(e);
      break;
    case 22:
      if (m = t !== null && t.memoizedState !== null, e.mode & 1 ? (re = (c = re) || m, Ne(n, e), re = c) : Ne(n, e), Oe(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (S = e, m = e.child; m !== null; ) {
          for (h = S = m; S !== null; ) {
            switch (p = S, y = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Lt(4, p, p.return);
                break;
              case 1:
                Qn(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, t = p.return;
                  try {
                    n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    V(r, t, k);
                  }
                }
                break;
              case 5:
                Qn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Du(h);
                  continue;
                }
            }
            y !== null ? (y.return = p, S = y) : Du(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ps("display", i));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (k) {
              V(e, e.return, k);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), h = h.return;
          }
          m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Ne(n, e), Oe(e), r & 4 && Ou(e);
      break;
    case 21:
      break;
    default:
      Ne(
        n,
        e
      ), Oe(e);
  }
}
function Oe(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if ($a(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (jt(l, ""), r.flags &= -33);
          var o = ju(e);
          Oo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ju(e);
          jo(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function pd(e, n, t) {
  S = e, Ba(e);
}
function Ba(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || re;
        u = vr;
        var c = re;
        if (vr = i, (re = s) && !c) for (S = l; S !== null; ) i = S, s = i.child, i.tag === 22 && i.memoizedState !== null ? Fu(l) : s !== null ? (s.return = i, S = s) : Fu(l);
        for (; o !== null; ) S = o, Ba(o), o = o.sibling;
        S = l, vr = u, re = c;
      }
      Iu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, S = o) : Iu(e);
  }
}
function Iu(e) {
  for (; S !== null; ) {
    var n = S;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            re || cl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !re) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : Pe(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && wu(n, o, r);
            break;
          case 3:
            var i = n.updateQueue;
            if (i !== null) {
              if (t = null, n.child !== null) switch (n.child.tag) {
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
              wu(n, i, t);
            }
            break;
          case 5:
            var u = n.stateNode;
            if (t === null && n.flags & 4) {
              t = u;
              var s = n.memoizedProps;
              switch (n.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && t.focus();
                  break;
                case "img":
                  s.src && (t.src = s.src);
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
            if (n.memoizedState === null) {
              var c = n.alternate;
              if (c !== null) {
                var m = c.memoizedState;
                if (m !== null) {
                  var h = m.dehydrated;
                  h !== null && Ft(h);
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
            throw Error(g(163));
        }
        re || n.flags & 512 && Mo(n);
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function Du(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            cl(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var o = n.return;
          try {
            Mo(n);
          } catch (s) {
            V(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Mo(n);
          } catch (s) {
            V(n, i, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, S = u;
      break;
    }
    S = n.return;
  }
}
var hd = Math.ceil, Zr = Xe.ReactCurrentDispatcher, xi = Xe.ReactCurrentOwner, Ee = Xe.ReactCurrentBatchConfig, R = 0, J = null, K = null, b = 0, he = 0, Kn = mn(0), X = 0, Xt = null, Ln = 0, fl = 0, Ei = 0, Tt = null, ae = null, Ci = 0, ot = 1 / 0, $e = null, Jr = !1, Io = null, an = null, gr = !1, tn = null, qr = 0, Rt = 0, Do = null, Pr = -1, Lr = 0;
function ie() {
  return R & 6 ? Q() : Pr !== -1 ? Pr : Pr = Q();
}
function cn(e) {
  return e.mode & 1 ? R & 2 && b !== 0 ? b & -b : Jf.transition !== null ? (Lr === 0 && (Lr = zs()), Lr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : js(e.type)), e) : 1;
}
function Me(e, n, t, r) {
  if (50 < Rt) throw Rt = 0, Do = null, Error(g(185));
  Zt(e, t, r), (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (fl |= t), X === 4 && en(e, b)), pe(e, r), t === 1 && R === 0 && !(n.mode & 1) && (ot = Q() + 500, ul && vn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  Zc(e, n);
  var r = Ir(e, e === J ? b : 0);
  if (r === 0) t !== null && Ki(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Ki(t), n === 1) e.tag === 0 ? Zf(Uu.bind(null, e)) : qs(Uu.bind(null, e)), Kf(function() {
      !(R & 6) && vn();
    }), t = null;
    else {
      switch (Ns(r)) {
        case 1:
          t = Zo;
          break;
        case 4:
          t = Cs;
          break;
        case 16:
          t = Or;
          break;
        case 536870912:
          t = _s;
          break;
        default:
          t = Or;
      }
      t = Za(t, Wa.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Wa(e, n) {
  if (Pr = -1, Lr = 0, R & 6) throw Error(g(327));
  var t = e.callbackNode;
  if (qn() && e.callbackNode !== t) return null;
  var r = Ir(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = br(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var o = Qa();
    (J !== e || b !== n) && ($e = null, ot = Q() + 500, Cn(e, n));
    do
      try {
        gd();
        break;
      } catch (u) {
        Ha(e, u);
      }
    while (!0);
    ai(), Zr.current = o, R = l, K !== null ? n = 0 : (J = null, b = 0, n = X);
  }
  if (n !== 0) {
    if (n === 2 && (l = so(e), l !== 0 && (r = l, n = Fo(e, l))), n === 1) throw t = Xt, Cn(e, 0), en(e, r), pe(e, Q()), t;
    if (n === 6) en(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !md(l) && (n = br(e, r), n === 2 && (o = so(e), o !== 0 && (r = o, n = Fo(e, o))), n === 1)) throw t = Xt, Cn(e, 0), en(e, r), pe(e, Q()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          kn(e, ae, $e);
          break;
        case 3:
          if (en(e, r), (r & 130023424) === r && (n = Ci + 500 - Q(), 10 < n)) {
            if (Ir(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = go(kn.bind(null, e, ae, $e), n);
            break;
          }
          kn(e, ae, $e);
          break;
        case 4:
          if (en(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = go(kn.bind(null, e, ae, $e), r);
            break;
          }
          kn(e, ae, $e);
          break;
        case 5:
          kn(e, ae, $e);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === t ? Wa.bind(null, e) : null;
}
function Fo(e, n) {
  var t = Tt;
  return e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256), e = br(e, n), e !== 2 && (n = ae, ae = t, n !== null && Uo(n)), e;
}
function Uo(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function md(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!je(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function en(e, n) {
  for (n &= ~Ei, n &= ~fl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Re(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Uu(e) {
  if (R & 6) throw Error(g(327));
  qn();
  var n = Ir(e, 0);
  if (!(n & 1)) return pe(e, Q()), null;
  var t = br(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = so(e);
    r !== 0 && (n = r, t = Fo(e, r));
  }
  if (t === 1) throw t = Xt, Cn(e, 0), en(e, n), pe(e, Q()), t;
  if (t === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, kn(e, ae, $e), pe(e, Q()), null;
}
function _i(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    R = t, R === 0 && (ot = Q() + 500, ul && vn());
  }
}
function Tn(e) {
  tn !== null && tn.tag === 0 && !(R & 6) && qn();
  var n = R;
  R |= 1;
  var t = Ee.transition, r = M;
  try {
    if (Ee.transition = null, M = 1, e) return e();
  } finally {
    M = r, Ee.transition = t, R = n, !(R & 6) && vn();
  }
}
function zi() {
  he = Kn.current, I(Kn);
}
function Cn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Qf(t)), K !== null) for (t = K.return; t !== null; ) {
    var r = t;
    switch (ii(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ar();
        break;
      case 3:
        rt(), I(fe), I(le), mi();
        break;
      case 5:
        hi(r);
        break;
      case 4:
        rt();
        break;
      case 13:
        I(U);
        break;
      case 19:
        I(U);
        break;
      case 10:
        ci(r.type._context);
        break;
      case 22:
      case 23:
        zi();
    }
    t = t.return;
  }
  if (J = e, K = e = fn(e.current, null), b = he = n, X = 0, Xt = null, Ei = fl = Ln = 0, ae = Tt = null, xn !== null) {
    for (n = 0; n < xn.length; n++) if (t = xn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    xn = null;
  }
  return e;
}
function Ha(e, n) {
  do {
    var t = K;
    try {
      if (ai(), _r.current = Gr, Xr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Xr = !1;
      }
      if (Pn = 0, Z = Y = $ = null, Pt = !1, Qt = 0, xi.current = null, t === null || t.return === null) {
        X = 1, Xt = n, K = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, s = n;
        if (n = b, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = _u(i);
          if (y !== null) {
            y.flags &= -257, zu(y, i, u, o, n), y.mode & 1 && Cu(o, c, n), n = y, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), n.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Cu(o, c, n), Ni();
              break e;
            }
            s = Error(g(426));
          }
        } else if (F && u.mode & 1) {
          var D = _u(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), zu(D, i, u, o, n), ui(lt(s, u));
            break e;
          }
        }
        o = s = lt(s, u), X !== 4 && (X = 2), Tt === null ? Tt = [o] : Tt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Na(o, s, n);
              yu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (an === null || !an.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Pa(o, u, n);
                yu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ya(t);
    } catch (x) {
      n = x, K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Qa() {
  var e = Zr.current;
  return Zr.current = Gr, e === null ? Gr : e;
}
function Ni() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || !(Ln & 268435455) && !(fl & 268435455) || en(J, b);
}
function br(e, n) {
  var t = R;
  R |= 2;
  var r = Qa();
  (J !== e || b !== n) && ($e = null, Cn(e, n));
  do
    try {
      vd();
      break;
    } catch (l) {
      Ha(e, l);
    }
  while (!0);
  if (ai(), R = t, Zr.current = r, K !== null) throw Error(g(261));
  return J = null, b = 0, X;
}
function vd() {
  for (; K !== null; ) Ka(K);
}
function gd() {
  for (; K !== null && !Vc(); ) Ka(K);
}
function Ka(e) {
  var n = Ga(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, n === null ? Ya(e) : K = n, xi.current = null;
}
function Ya(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = cd(t, n), t !== null) {
        t.flags &= 32767, K = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (t = ad(t, n, he), t !== null) {
      K = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function kn(e, n, t) {
  var r = M, l = Ee.transition;
  try {
    Ee.transition = null, M = 1, yd(e, n, t, r);
  } finally {
    Ee.transition = l, M = r;
  }
  return null;
}
function yd(e, n, t, r) {
  do
    qn();
  while (tn !== null);
  if (R & 6) throw Error(g(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (Jc(e, o), e === J && (K = J = null, b = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || gr || (gr = !0, Za(Or, function() {
    return qn(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Ee.transition, Ee.transition = null;
    var i = M;
    M = 1;
    var u = R;
    R |= 4, xi.current = null, dd(e, t), Va(t, e), Uf(mo), Dr = !!ho, mo = ho = null, e.current = t, pd(t), Bc(), R = u, M = i, Ee.transition = o;
  } else e.current = t;
  if (gr && (gr = !1, tn = e, qr = l), o = e.pendingLanes, o === 0 && (an = null), Qc(t.stateNode), pe(e, Q()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw Jr = !1, e = Io, Io = null, e;
  return qr & 1 && e.tag !== 0 && qn(), o = e.pendingLanes, o & 1 ? e === Do ? Rt++ : (Rt = 0, Do = e) : Rt = 0, vn(), null;
}
function qn() {
  if (tn !== null) {
    var e = Ns(qr), n = Ee.transition, t = M;
    try {
      if (Ee.transition = null, M = 16 > e ? 16 : e, tn === null) var r = !1;
      else {
        if (e = tn, tn = null, qr = 0, R & 6) throw Error(g(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var o = S, i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var m = S;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lt(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, S = h;
                  else for (; S !== null; ) {
                    m = S;
                    var p = m.sibling, y = m.return;
                    if (Ua(m), m === c) {
                      S = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = y, S = p;
                      break;
                    }
                    S = y;
                  }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    k.sibling = null, k = D;
                  } while (k !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, S = i;
          else e: for (; S !== null; ) {
            if (o = S, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Lt(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, S = f;
              break e;
            }
            S = o.return;
          }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, S = d;
          else e: for (i = a; S !== null; ) {
            if (u = S, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  cl(9, u);
              }
            } catch (x) {
              V(u, u.return, x);
            }
            if (u === i) {
              S = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, S = v;
              break e;
            }
            S = u.return;
          }
        }
        if (R = l, vn(), Fe && typeof Fe.onPostCommitFiberRoot == "function") try {
          Fe.onPostCommitFiberRoot(tl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      M = t, Ee.transition = n;
    }
  }
  return !1;
}
function $u(e, n, t) {
  n = lt(t, n), n = Na(e, n, 1), e = sn(e, n, 1), n = ie(), e !== null && (Zt(e, 1, n), pe(e, n));
}
function V(e, n, t) {
  if (e.tag === 3) $u(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      $u(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) {
        e = lt(t, e), e = Pa(n, e, 1), n = sn(n, e, 1), e = ie(), n !== null && (Zt(n, 1, e), pe(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function wd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = ie(), e.pingedLanes |= e.suspendedLanes & t, J === e && (b & t) === t && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - Ci ? Cn(e, 0) : Ei |= t), pe(e, n);
}
function Xa(e, n) {
  n === 0 && (e.mode & 1 ? (n = ur, ur <<= 1, !(ur & 130023424) && (ur = 4194304)) : n = 1);
  var t = ie();
  e = Ke(e, n), e !== null && (Zt(e, n, t), pe(e, t));
}
function kd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), Xa(e, t);
}
function Sd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(n), Xa(e, t);
}
var Ga;
Ga = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return ce = !1, sd(e, n, t);
    ce = !!(e.flags & 131072);
  }
  else ce = !1, F && n.flags & 1048576 && bs(n, Wr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Nr(e, n), e = n.pendingProps;
      var l = et(n, le.current);
      Jn(n, t), l = gi(null, n, r, e, l, t);
      var o = yi();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, de(r) ? (o = !0, Vr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, di(n), l.updater = al, n.stateNode = l, l._reactInternals = n, Co(n, r, e, t), n = No(null, n, r, !0, o, t)) : (n.tag = 0, F && o && oi(n), oe(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Nr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Ed(r), e = Pe(r, e), l) {
          case 0:
            n = zo(null, n, r, e, t);
            break e;
          case 1:
            n = Lu(null, n, r, e, t);
            break e;
          case 11:
            n = Nu(null, n, r, e, t);
            break e;
          case 14:
            n = Pu(null, n, r, Pe(r.type, e), t);
            break e;
        }
        throw Error(g(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Pe(r, l), zo(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Pe(r, l), Lu(e, n, r, l, t);
    case 3:
      e: {
        if (Ma(n), e === null) throw Error(g(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, oa(e, n), Kr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = lt(Error(g(423)), n), n = Tu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = lt(Error(g(424)), n), n = Tu(e, n, r, t, l);
          break e;
        } else for (me = un(n.stateNode.containerInfo.firstChild), ve = n, F = !0, Te = null, t = ra(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (nt(), r === l) {
            n = Ye(e, n, t);
            break e;
          }
          oe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return ia(n), e === null && So(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, vo(r, l) ? i = null : o !== null && vo(r, o) && (n.flags |= 32), Ra(e, n), oe(e, n, i, t), n.child;
    case 6:
      return e === null && So(n), null;
    case 13:
      return ja(e, n, t);
    case 4:
      return pi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = tt(n, null, r, t) : oe(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Pe(r, l), Nu(e, n, r, l, t);
    case 7:
      return oe(e, n, n.pendingProps, t), n.child;
    case 8:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, j(Hr, r._currentValue), r._currentValue = i, o !== null) if (je(o.value, i)) {
          if (o.children === l.children && !fe.current) {
            n = Ye(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = We(-1, t & -t), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var m = c.pending;
                    m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                  }
                }
                o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), xo(
                  o.return,
                  t,
                  n
                ), u.lanes |= t;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(g(341));
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), xo(i, t, n), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === n) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        oe(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, Jn(n, t), l = Ce(l), r = r(l), n.flags |= 1, oe(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Pe(r, n.pendingProps), l = Pe(r.type, l), Pu(e, n, r, l, t);
    case 15:
      return La(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Pe(r, l), Nr(e, n), n.tag = 1, de(r) ? (e = !0, Vr(n)) : e = !1, Jn(n, t), za(n, r, l), Co(n, r, l, t), No(null, n, r, !0, e, t);
    case 19:
      return Oa(e, n, t);
    case 22:
      return Ta(e, n, t);
  }
  throw Error(g(156, n.tag));
};
function Za(e, n) {
  return Es(e, n);
}
function xd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, n, t, r) {
  return new xd(e, n, t, r);
}
function Pi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ed(e) {
  if (typeof e == "function") return Pi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yo) return 11;
    if (e === Xo) return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return t === null ? (t = xe(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Tr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Pi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Dn:
      return _n(t.children, l, o, n);
    case Ko:
      i = 8, l |= 8;
      break;
    case Yl:
      return e = xe(12, t, n, l | 2), e.elementType = Yl, e.lanes = o, e;
    case Xl:
      return e = xe(13, t, n, l), e.elementType = Xl, e.lanes = o, e;
    case Gl:
      return e = xe(19, t, n, l), e.elementType = Gl, e.lanes = o, e;
    case is:
      return dl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ls:
          i = 10;
          break e;
        case os:
          i = 9;
          break e;
        case Yo:
          i = 11;
          break e;
        case Xo:
          i = 14;
          break e;
        case Je:
          i = 16, r = null;
          break e;
      }
      throw Error(g(130, e == null ? e : typeof e, ""));
  }
  return n = xe(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function _n(e, n, t, r) {
  return e = xe(7, e, r, n), e.lanes = t, e;
}
function dl(e, n, t, r) {
  return e = xe(22, e, r, n), e.elementType = is, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Hl(e, n, t) {
  return e = xe(6, e, null, n), e.lanes = t, e;
}
function Ql(e, n, t) {
  return n = xe(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Cd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Li(e, n, t, r, l, o, i, u, s) {
  return e = new Cd(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = xe(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, di(o), e;
}
function _d(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: In, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function Ja(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(g(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) return Js(e, t, n);
  }
  return n;
}
function qa(e, n, t, r, l, o, i, u, s) {
  return e = Li(t, r, !0, e, l, o, i, u, s), e.context = Ja(null), t = e.current, r = ie(), l = cn(t), o = We(r, l), o.callback = n ?? null, sn(t, o, l), e.current.lanes = l, Zt(e, l, r), pe(e, r), e;
}
function pl(e, n, t, r) {
  var l = n.current, o = ie(), i = cn(l);
  return t = Ja(t), n.context === null ? n.context = t : n.pendingContext = t, n = We(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = sn(l, n, i), e !== null && (Me(e, l, i, o), Cr(e, l, i)), i;
}
function el(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Au(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ti(e, n) {
  Au(e, n), (e = e.alternate) && Au(e, n);
}
function zd() {
  return null;
}
var ba = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ri(e) {
  this._internalRoot = e;
}
hl.prototype.render = Ri.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(g(409));
  pl(e, n, null, null);
};
hl.prototype.unmount = Ri.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Tn(function() {
      pl(null, e, null, null);
    }), n[Qe] = null;
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ts();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < be.length && n !== 0 && n < be[t].priority; t++) ;
    be.splice(t, 0, e), t === 0 && Ms(e);
  }
};
function Mi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ml(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vu() {
}
function Nd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = el(i);
        o.call(c);
      };
    }
    var i = qa(n, r, e, 0, null, !1, !1, "", Vu);
    return e._reactRootContainer = i, e[Qe] = i.current, At(e.nodeType === 8 ? e.parentNode : e), Tn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Li(e, 0, !1, null, null, !1, !1, "", Vu);
  return e._reactRootContainer = s, e[Qe] = s.current, At(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    pl(n, s, t, r);
  }), s;
}
function vl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = el(i);
        u.call(s);
      };
    }
    pl(n, i, e, l);
  } else i = Nd(t, n, e, l, r);
  return el(i);
}
Ps = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = St(n.pendingLanes);
        t !== 0 && (Jo(n, t | 1), pe(n, Q()), !(R & 6) && (ot = Q() + 500, vn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = ie();
          Me(r, e, 1, l);
        }
      }), Ti(e, 1);
  }
};
qo = function(e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = ie();
      Me(n, e, 134217728, t);
    }
    Ti(e, 134217728);
  }
};
Ls = function(e) {
  if (e.tag === 13) {
    var n = cn(e), t = Ke(e, n);
    if (t !== null) {
      var r = ie();
      Me(t, e, n, r);
    }
    Ti(e, n);
  }
};
Ts = function() {
  return M;
};
Rs = function(e, n) {
  var t = M;
  try {
    return M = e, n();
  } finally {
    M = t;
  }
};
oo = function(e, n, t) {
  switch (n) {
    case "input":
      if (ql(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(g(90));
            ss(r), ql(r, l);
          }
        }
      }
      break;
    case "textarea":
      cs(e, t);
      break;
    case "select":
      n = t.value, n != null && Yn(e, !!t.multiple, n, !1);
  }
};
gs = _i;
ys = Tn;
var Pd = { usingClientEntryPoint: !1, Events: [qt, An, il, ms, vs, _i] }, yt = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ld = { bundleType: yt.bundleType, version: yt.version, rendererPackageName: yt.rendererPackageName, rendererConfig: yt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Xe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ss(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: yt.findFiberByHostInstance || zd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber) try {
    tl = yr.inject(Ld), Fe = yr;
  } catch {
  }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pd;
ye.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(n)) throw Error(g(200));
  return _d(e, n, null, t);
};
ye.createRoot = function(e, n) {
  if (!Mi(e)) throw Error(g(299));
  var t = !1, r = "", l = ba;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Li(e, 1, !1, null, null, t, !1, r, l), e[Qe] = n.current, At(e.nodeType === 8 ? e.parentNode : e), new Ri(n);
};
ye.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Ss(n), e = e === null ? null : e.stateNode, e;
};
ye.flushSync = function(e) {
  return Tn(e);
};
ye.hydrate = function(e, n, t) {
  if (!ml(n)) throw Error(g(200));
  return vl(null, e, n, !0, t);
};
ye.hydrateRoot = function(e, n, t) {
  if (!Mi(e)) throw Error(g(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = ba;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = qa(n, null, e, 1, t ?? null, l, !1, o, i), e[Qe] = n.current, At(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new hl(n);
};
ye.render = function(e, n, t) {
  if (!ml(n)) throw Error(g(200));
  return vl(null, e, n, !1, t);
};
ye.unmountComponentAtNode = function(e) {
  if (!ml(e)) throw Error(g(40));
  return e._reactRootContainer ? (Tn(function() {
    vl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Qe] = null;
    });
  }), !0) : !1;
};
ye.unstable_batchedUpdates = _i;
ye.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!ml(t)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return vl(e, n, t, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function ec() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec);
    } catch (e) {
      console.error(e);
    }
}
ec(), es.exports = ye;
var Td = es.exports, nc, Bu = Td;
nc = Bu.createRoot, Bu.hydrateRoot;
function tc(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (n = 0; n < l; n++) e[n] && (t = tc(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function On() {
  for (var e, n, t = 0, r = "", l = arguments.length; t < l; t++) (e = arguments[t]) && (n = tc(e)) && (r && (r += " "), r += n);
  return r;
}
const Rd = () => {
  const [e, n] = Ze.useState(!1), [t, r] = Ze.useState(!1), [l, o] = Ze.useState(null), i = Ze.useRef(null);
  Ze.useEffect(() => {
    const s = document.getElementById("container-app");
    s && (o(s), getComputedStyle(s).position === "static" && (s.style.position = "relative"));
  }, []);
  const u = Ze.useMemo(() => l ? t ? {
    position: "absolute",
    inset: 0,
    margin: "0",
    width: "100%",
    height: "100%",
    zIndex: 50
  } : {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    zIndex: 50
  } : { display: "none" }, [t, l]);
  return l ? /* @__PURE__ */ H.jsx(
    "div",
    {
      ref: i,
      style: u,
      className: On(
        "ar-transition-all ar-duration-300",
        "ar-origin-bottom-right"
      ),
      children: e ? /* @__PURE__ */ H.jsxs(
        "div",
        {
          className: On(
            "ar-rounded-lg ar-bg-white ar-shadow-lg",
            "ar-origin-bottom-right ar-transition-all ar-duration-300",
            t ? "ar-h-full ar-w-full ar-scale-100" : "ar-w-80 ar-scale-100",
            "ar-animate-in ar-zoom-in-90 ar-duration-200"
          ),
          children: [
            /* @__PURE__ */ H.jsxs("div", { className: "ar-flex ar-items-center ar-justify-between ar-rounded-tl-lg ar-rounded-tr-lg ar-border ar-border-[#E2E2E2] ar-p-4", children: [
              /* @__PURE__ */ H.jsx("h3", { className: "ar-font-semibold", children: "ARIES" }),
              /* @__PURE__ */ H.jsxs("div", { className: "ar-flex ar-gap-2", children: [
                /* @__PURE__ */ H.jsx(
                  "button",
                  {
                    onClick: () => r(!t),
                    className: On(
                      "ar-rounded-full ar-p-1 ar-transition-colors",
                      "ar-hover:bg-gray-100"
                    ),
                    "aria-label": t ? "Collapse chat" : "Expand chat",
                    children: t ? /* @__PURE__ */ H.jsx(
                      "svg",
                      {
                        className: "ar-h-5 ar-w-5 ar-text-amber-500 ar-text-gray-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ H.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 14h16M4 10h16"
                          }
                        )
                      }
                    ) : /* @__PURE__ */ H.jsx(
                      "svg",
                      {
                        className: "ar-h-5 ar-w-5 ar-text-amber-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ H.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ H.jsx(
                  "button",
                  {
                    onClick: () => {
                      n(!1), r(!1);
                    },
                    className: On(
                      "ar-rounded-full ar-p-1 ar-transition-colors",
                      "ar-hover:bg-gray-100"
                    ),
                    "aria-label": "Close chat",
                    children: /* @__PURE__ */ H.jsx(
                      "svg",
                      {
                        className: "ar-h-5 ar-w-5 ar-text-amber-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ H.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                          }
                        )
                      }
                    )
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ H.jsx(
              "div",
              {
                className: On(
                  "ar-border ar-border-[#E2E2E2] ar-bg-gray-100 ar-p-4 ar-transition-all ar-duration-300",
                  t ? "ar-h-[calc(100%-4rem)]" : "ar-h-96"
                ),
                children: /* @__PURE__ */ H.jsx("p", { className: "ar-text-center ar-text-gray-500", children: "Chat content will be available here" })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ H.jsx(
        "button",
        {
          onClick: () => n(!0),
          className: On(
            "ar-rounded-full ar-bg-blue-500 ar-p-3 ar-text-white ar-shadow-lg",
            "ar-transition-all ar-duration-200",
            "ar-hover:bg-blue-600",
            "ar-animate-in ar-zoom-in-90"
          ),
          "aria-label": "Open chat",
          children: /* @__PURE__ */ H.jsx(
            "svg",
            {
              className: "ar-h-6 ar-w-6 ar-text-amber-500",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ H.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                }
              )
            }
          )
        }
      )
    }
  ) : null;
}, Md = ({ title: e = "Micro Frontend", onAction: n, options: t }) => (console.log("options", t), /* @__PURE__ */ H.jsx("div", { className: "ar-p-6", children: /* @__PURE__ */ H.jsx(Rd, {}) })), jd = `*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.14 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.ar-flex {
  display: flex;
}
.ar-h-5 {
  height: 1.25rem;
}
.ar-h-6 {
  height: 1.5rem;
}
.ar-h-96 {
  height: 24rem;
}
.ar-h-\\[calc\\(100\\%-4rem\\)\\] {
  height: calc(100% - 4rem);
}
.ar-h-full {
  height: 100%;
}
.ar-w-5 {
  width: 1.25rem;
}
.ar-w-6 {
  width: 1.5rem;
}
.ar-w-80 {
  width: 20rem;
}
.ar-w-full {
  width: 100%;
}
.ar-origin-bottom-right {
  transform-origin: bottom right;
}
.ar-scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.ar-items-center {
  align-items: center;
}
.ar-justify-between {
  justify-content: space-between;
}
.ar-gap-2 {
  gap: 0.5rem;
}
.ar-rounded-full {
  border-radius: 9999px;
}
.ar-rounded-lg {
  border-radius: 0.5rem;
}
.ar-rounded-tl-lg {
  border-top-left-radius: 0.5rem;
}
.ar-rounded-tr-lg {
  border-top-right-radius: 0.5rem;
}
.ar-border {
  border-width: 1px;
}
.ar-border-\\[\\#E2E2E2\\] {
  --tw-border-opacity: 1;
  border-color: rgb(226 226 226 / var(--tw-border-opacity));
}
.ar-bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.ar-bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.ar-bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.ar-p-1 {
  padding: 0.25rem;
}
.ar-p-3 {
  padding: 0.75rem;
}
.ar-p-4 {
  padding: 1rem;
}
.ar-p-6 {
  padding: 1.5rem;
}
.ar-text-center {
  text-align: center;
}
.ar-font-semibold {
  font-weight: 600;
}
.ar-text-amber-500 {
  --tw-text-opacity: 1;
  color: rgb(245 158 11 / var(--tw-text-opacity));
}
.ar-text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.ar-text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.ar-shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.ar-transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.ar-transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.ar-duration-200 {
  transition-duration: 200ms;
}
.ar-duration-300 {
  transition-duration: 300ms;
}
`;
function Od(e, n) {
  const t = document.createElement("style");
  t.textContent = jd, document.head.appendChild(t);
  const r = nc(e);
  return r.render(/* @__PURE__ */ H.jsx(Md, { ...n })), () => {
    r.unmount(), t.remove();
  };
}
export {
  Od as mount
};

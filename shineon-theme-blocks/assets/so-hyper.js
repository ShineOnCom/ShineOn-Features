function Ff(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var xi = { exports: {} }, gr = {}, Ni = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Uf() {
  if (Ra) return A;
  Ra = 1;
  var g = Symbol.for("react.element"), L = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), Ce = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), W = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), fe = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), J = Symbol.iterator;
  function X(c) {
    return c === null || typeof c != "object" ? null : (c = J && c[J] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var le = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $ = Object.assign, z = {};
  function I(c, v, U) {
    this.props = c, this.context = v, this.refs = z, this.updater = U || le;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, I.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function b() {
  }
  b.prototype = I.prototype;
  function oe(c, v, U) {
    this.props = c, this.context = v, this.refs = z, this.updater = U || le;
  }
  var M = oe.prototype = new b();
  M.constructor = oe, $(M, I.prototype), M.isPureReactComponent = !0;
  var D = Array.isArray, Q = Object.prototype.hasOwnProperty, H = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ge(c, v, U) {
    var V, q = {}, G = null, ie = null;
    if (v != null) for (V in v.ref !== void 0 && (ie = v.ref), v.key !== void 0 && (G = "" + v.key), v) Q.call(v, V) && !te.hasOwnProperty(V) && (q[V] = v[V]);
    var ee = arguments.length - 2;
    if (ee === 1) q.children = U;
    else if (1 < ee) {
      for (var de = Array(ee), qe = 0; qe < ee; qe++) de[qe] = arguments[qe + 2];
      q.children = de;
    }
    if (c && c.defaultProps) for (V in ee = c.defaultProps, ee) q[V] === void 0 && (q[V] = ee[V]);
    return { $$typeof: g, type: c, key: G, ref: ie, props: q, _owner: H.current };
  }
  function he(c, v) {
    return { $$typeof: g, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function $e(c) {
    return typeof c == "object" && c !== null && c.$$typeof === g;
  }
  function kn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(U) {
      return v[U];
    });
  }
  var Ye = /\/+/g;
  function Xe(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? kn("" + c.key) : v.toString(36);
  }
  function un(c, v, U, V, q) {
    var G = typeof c;
    (G === "undefined" || G === "boolean") && (c = null);
    var ie = !1;
    if (c === null) ie = !0;
    else switch (G) {
      case "string":
      case "number":
        ie = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case g:
          case L:
            ie = !0;
        }
    }
    if (ie) return ie = c, q = q(ie), c = V === "" ? "." + Xe(ie, 0) : V, D(q) ? (U = "", c != null && (U = c.replace(Ye, "$&/") + "/"), un(q, v, U, "", function(qe) {
      return qe;
    })) : q != null && ($e(q) && (q = he(q, U + (!q.key || ie && ie.key === q.key ? "" : ("" + q.key).replace(Ye, "$&/") + "/") + c)), v.push(q)), 1;
    if (ie = 0, V = V === "" ? "." : V + ":", D(c)) for (var ee = 0; ee < c.length; ee++) {
      G = c[ee];
      var de = V + Xe(G, ee);
      ie += un(G, v, U, de, q);
    }
    else if (de = X(c), typeof de == "function") for (c = de.call(c), ee = 0; !(G = c.next()).done; ) G = G.value, de = V + Xe(G, ee++), ie += un(G, v, U, de, q);
    else if (G === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return ie;
  }
  function hn(c, v, U) {
    if (c == null) return c;
    var V = [], q = 0;
    return un(c, V, "", "", function(G) {
      return v.call(U, G, q++);
    }), V;
  }
  function Ae(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(U) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = U);
      }, function(U) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = U);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var we = { current: null }, k = { transition: null }, O = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: k, ReactCurrentOwner: H };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return A.Children = { map: hn, forEach: function(c, v, U) {
    hn(c, function() {
      v.apply(this, arguments);
    }, U);
  }, count: function(c) {
    var v = 0;
    return hn(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return hn(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!$e(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, A.Component = I, A.Fragment = m, A.Profiler = F, A.PureComponent = oe, A.StrictMode = Ce, A.Suspense = B, A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, A.act = C, A.cloneElement = function(c, v, U) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var V = $({}, c.props), q = c.key, G = c.ref, ie = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (G = v.ref, ie = H.current), v.key !== void 0 && (q = "" + v.key), c.type && c.type.defaultProps) var ee = c.type.defaultProps;
      for (de in v) Q.call(v, de) && !te.hasOwnProperty(de) && (V[de] = v[de] === void 0 && ee !== void 0 ? ee[de] : v[de]);
    }
    var de = arguments.length - 2;
    if (de === 1) V.children = U;
    else if (1 < de) {
      ee = Array(de);
      for (var qe = 0; qe < de; qe++) ee[qe] = arguments[qe + 2];
      V.children = ee;
    }
    return { $$typeof: g, type: c.type, key: q, ref: G, props: V, _owner: ie };
  }, A.createContext = function(c) {
    return c = { $$typeof: W, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: ce, _context: c }, c.Consumer = c;
  }, A.createElement = ge, A.createFactory = function(c) {
    var v = ge.bind(null, c);
    return v.type = c, v;
  }, A.createRef = function() {
    return { current: null };
  }, A.forwardRef = function(c) {
    return { $$typeof: re, render: c };
  }, A.isValidElement = $e, A.lazy = function(c) {
    return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Ae };
  }, A.memo = function(c, v) {
    return { $$typeof: fe, type: c, compare: v === void 0 ? null : v };
  }, A.startTransition = function(c) {
    var v = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = v;
    }
  }, A.unstable_act = C, A.useCallback = function(c, v) {
    return we.current.useCallback(c, v);
  }, A.useContext = function(c) {
    return we.current.useContext(c);
  }, A.useDebugValue = function() {
  }, A.useDeferredValue = function(c) {
    return we.current.useDeferredValue(c);
  }, A.useEffect = function(c, v) {
    return we.current.useEffect(c, v);
  }, A.useId = function() {
    return we.current.useId();
  }, A.useImperativeHandle = function(c, v, U) {
    return we.current.useImperativeHandle(c, v, U);
  }, A.useInsertionEffect = function(c, v) {
    return we.current.useInsertionEffect(c, v);
  }, A.useLayoutEffect = function(c, v) {
    return we.current.useLayoutEffect(c, v);
  }, A.useMemo = function(c, v) {
    return we.current.useMemo(c, v);
  }, A.useReducer = function(c, v, U) {
    return we.current.useReducer(c, v, U);
  }, A.useRef = function(c) {
    return we.current.useRef(c);
  }, A.useState = function(c) {
    return we.current.useState(c);
  }, A.useSyncExternalStore = function(c, v, U) {
    return we.current.useSyncExternalStore(c, v, U);
  }, A.useTransition = function() {
    return we.current.useTransition();
  }, A.version = "18.3.1", A;
}
var Ia;
function ji() {
  return Ia || (Ia = 1, Ni.exports = Uf()), Ni.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function $f() {
  if (Oa) return gr;
  Oa = 1;
  var g = ji(), L = Symbol.for("react.element"), m = Symbol.for("react.fragment"), Ce = Object.prototype.hasOwnProperty, F = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(re, B, fe) {
    var me, J = {}, X = null, le = null;
    fe !== void 0 && (X = "" + fe), B.key !== void 0 && (X = "" + B.key), B.ref !== void 0 && (le = B.ref);
    for (me in B) Ce.call(B, me) && !ce.hasOwnProperty(me) && (J[me] = B[me]);
    if (re && re.defaultProps) for (me in B = re.defaultProps, B) J[me] === void 0 && (J[me] = B[me]);
    return { $$typeof: L, type: re, key: X, ref: le, props: J, _owner: F.current };
  }
  return gr.Fragment = m, gr.jsx = W, gr.jsxs = W, gr;
}
var ja;
function Af() {
  return ja || (ja = 1, xi.exports = $f()), xi.exports;
}
var Y = Af(), Te = ji(), Ll = {}, Pi = { exports: {} }, Ke = {}, zi = { exports: {} }, Li = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function Vf() {
  return Ma || (Ma = 1, function(g) {
    function L(k, O) {
      var C = k.length;
      k.push(O);
      e: for (; 0 < C; ) {
        var c = C - 1 >>> 1, v = k[c];
        if (0 < F(v, O)) k[c] = O, k[C] = v, C = c;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function Ce(k) {
      if (k.length === 0) return null;
      var O = k[0], C = k.pop();
      if (C !== O) {
        k[0] = C;
        e: for (var c = 0, v = k.length, U = v >>> 1; c < U; ) {
          var V = 2 * (c + 1) - 1, q = k[V], G = V + 1, ie = k[G];
          if (0 > F(q, C)) G < v && 0 > F(ie, q) ? (k[c] = ie, k[G] = C, c = G) : (k[c] = q, k[V] = C, c = V);
          else if (G < v && 0 > F(ie, C)) k[c] = ie, k[G] = C, c = G;
          else break e;
        }
      }
      return O;
    }
    function F(k, O) {
      var C = k.sortIndex - O.sortIndex;
      return C !== 0 ? C : k.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ce = performance;
      g.unstable_now = function() {
        return ce.now();
      };
    } else {
      var W = Date, re = W.now();
      g.unstable_now = function() {
        return W.now() - re;
      };
    }
    var B = [], fe = [], me = 1, J = null, X = 3, le = !1, $ = !1, z = !1, I = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function M(k) {
      for (var O = m(fe); O !== null; ) {
        if (O.callback === null) Ce(fe);
        else if (O.startTime <= k) Ce(fe), O.sortIndex = O.expirationTime, L(B, O);
        else break;
        O = m(fe);
      }
    }
    function D(k) {
      if (z = !1, M(k), !$) if (m(B) !== null) $ = !0, Ae(Q);
      else {
        var O = m(fe);
        O !== null && we(D, O.startTime - k);
      }
    }
    function Q(k, O) {
      $ = !1, z && (z = !1, b(ge), ge = -1), le = !0;
      var C = X;
      try {
        for (M(O), J = m(B); J !== null && (!(J.expirationTime > O) || k && !kn()); ) {
          var c = J.callback;
          if (typeof c == "function") {
            J.callback = null, X = J.priorityLevel;
            var v = c(J.expirationTime <= O);
            O = g.unstable_now(), typeof v == "function" ? J.callback = v : J === m(B) && Ce(B), M(O);
          } else Ce(B);
          J = m(B);
        }
        if (J !== null) var U = !0;
        else {
          var V = m(fe);
          V !== null && we(D, V.startTime - O), U = !1;
        }
        return U;
      } finally {
        J = null, X = C, le = !1;
      }
    }
    var H = !1, te = null, ge = -1, he = 5, $e = -1;
    function kn() {
      return !(g.unstable_now() - $e < he);
    }
    function Ye() {
      if (te !== null) {
        var k = g.unstable_now();
        $e = k;
        var O = !0;
        try {
          O = te(!0, k);
        } finally {
          O ? Xe() : (H = !1, te = null);
        }
      } else H = !1;
    }
    var Xe;
    if (typeof oe == "function") Xe = function() {
      oe(Ye);
    };
    else if (typeof MessageChannel < "u") {
      var un = new MessageChannel(), hn = un.port2;
      un.port1.onmessage = Ye, Xe = function() {
        hn.postMessage(null);
      };
    } else Xe = function() {
      I(Ye, 0);
    };
    function Ae(k) {
      te = k, H || (H = !0, Xe());
    }
    function we(k, O) {
      ge = I(function() {
        k(g.unstable_now());
      }, O);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, g.unstable_continueExecution = function() {
      $ || le || ($ = !0, Ae(Q));
    }, g.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < k ? Math.floor(1e3 / k) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, g.unstable_getFirstCallbackNode = function() {
      return m(B);
    }, g.unstable_next = function(k) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = X;
      }
      var C = X;
      X = O;
      try {
        return k();
      } finally {
        X = C;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(k, O) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var C = X;
      X = k;
      try {
        return O();
      } finally {
        X = C;
      }
    }, g.unstable_scheduleCallback = function(k, O, C) {
      var c = g.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? c + C : c) : C = c, k) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = C + v, k = { id: me++, callback: O, priorityLevel: k, startTime: C, expirationTime: v, sortIndex: -1 }, C > c ? (k.sortIndex = C, L(fe, k), m(B) === null && k === m(fe) && (z ? (b(ge), ge = -1) : z = !0, we(D, C - c))) : (k.sortIndex = v, L(B, k), $ || le || ($ = !0, Ae(Q))), k;
    }, g.unstable_shouldYield = kn, g.unstable_wrapCallback = function(k) {
      var O = X;
      return function() {
        var C = X;
        X = O;
        try {
          return k.apply(this, arguments);
        } finally {
          X = C;
        }
      };
    };
  }(Li)), Li;
}
var Da;
function Bf() {
  return Da || (Da = 1, zi.exports = Vf()), zi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Hf() {
  if (Fa) return Ke;
  Fa = 1;
  var g = ji(), L = Bf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ce = /* @__PURE__ */ new Set(), F = {};
  function ce(e, n) {
    W(e, n), W(e + "Capture", n);
  }
  function W(e, n) {
    for (F[e] = n, e = 0; e < n.length; e++) Ce.add(n[e]);
  }
  var re = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), B = Object.prototype.hasOwnProperty, fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, me = {}, J = {};
  function X(e) {
    return B.call(J, e) ? !0 : B.call(me, e) ? !1 : fe.test(e) ? J[e] = !0 : (me[e] = !0, !1);
  }
  function le(e, n, t, r) {
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
  function $(e, n, t, r) {
    if (n === null || typeof n > "u" || le(e, n, t, r)) return !0;
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
  function z(e, n, t, r, l, o, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    I[e] = new z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    I[n] = new z(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    I[e] = new z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    I[e] = new z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    I[e] = new z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    I[e] = new z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    I[e] = new z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    I[e] = new z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    I[e] = new z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var b = /[\-:]([a-z])/g;
  function oe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      b,
      oe
    );
    I[n] = new z(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(b, oe);
    I[n] = new z(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(b, oe);
    I[n] = new z(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    I[e] = new z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), I.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    I[e] = new z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function M(e, n, t, r) {
    var l = I.hasOwnProperty(n) ? I[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && ($(n, t, l, r) && (t = null), r || l === null ? X(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var D = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = Symbol.for("react.element"), H = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), ge = Symbol.for("react.strict_mode"), he = Symbol.for("react.profiler"), $e = Symbol.for("react.provider"), kn = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), un = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var C = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      c = n && n[1] || "";
    }
    return `
` + c + e;
  }
  var U = !1;
  function V(e, n) {
    if (!e || U) return "";
    U = !0;
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
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (p) {
          r = p;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
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
      U = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function q(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = V(e.type, !1), e;
      case 11:
        return e = V(e.type.render, !1), e;
      case 1:
        return e = V(e.type, !0), e;
      default:
        return "";
    }
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case te:
        return "Fragment";
      case H:
        return "Portal";
      case he:
        return "Profiler";
      case ge:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case un:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case kn:
        return (e.displayName || "Context") + ".Consumer";
      case $e:
        return (e._context.displayName || "Context") + ".Provider";
      case Ye:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case hn:
        return n = e.displayName || null, n !== null ? n : G(e.type) || "Memo";
      case Ae:
        n = e._payload, e = e._init;
        try {
          return G(e(n));
        } catch {
        }
    }
    return null;
  }
  function ie(e) {
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
        return G(n);
      case 8:
        return n === ge ? "StrictMode" : "Mode";
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
  function ee(e) {
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
  function de(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function qe(e) {
    var n = de(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
  function wr(e) {
    e._valueTracker || (e._valueTracker = qe(e));
  }
  function Fi(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = de(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, n) {
    var t = n.checked;
    return C({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Ui(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = ee(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function $i(e, n) {
    n = n.checked, n != null && M(e, "checked", n, !1);
  }
  function Il(e, n) {
    $i(e, n);
    var t = ee(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Ol(e, n.type, t) : n.hasOwnProperty("defaultValue") && Ol(e, n.type, ee(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Ai(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Ol(e, n, t) {
    (n !== "number" || Sr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function st(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + ee(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function jl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return C({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Vi(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: ee(t) };
  }
  function Bi(e, n) {
    var t = ee(n.value), r = ee(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Hi(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Wi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Wi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Qi = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  var Mt = {
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
  }, Va = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mt).forEach(function(e) {
    Va.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Mt[n] = Mt[e];
    });
  });
  function Ki(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Mt.hasOwnProperty(e) && Mt[e] ? ("" + n).trim() : n + "px";
  }
  function Yi(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = Ki(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var Ba = C({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dl(e, n) {
    if (n) {
      if (Ba[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, n) {
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
  var Ul = null;
  function $l(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Al = null, at = null, ct = null;
  function Xi(e) {
    if (e = rr(e)) {
      if (typeof Al != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), Al(e.stateNode, e.type, n));
    }
  }
  function qi(e) {
    at ? ct ? ct.push(e) : ct = [e] : at = e;
  }
  function Gi() {
    if (at) {
      var e = at, n = ct;
      if (ct = at = null, Xi(e), n) for (e = 0; e < n.length; e++) Xi(n[e]);
    }
  }
  function Zi(e, n) {
    return e(n);
  }
  function Ji() {
  }
  var Vl = !1;
  function bi(e, n, t) {
    if (Vl) return e(n, t);
    Vl = !0;
    try {
      return Zi(e, n, t);
    } finally {
      Vl = !1, (at !== null || ct !== null) && (Ji(), Gi());
    }
  }
  function Dt(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Wr(t);
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
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Bl = !1;
  if (re) try {
    var Ft = {};
    Object.defineProperty(Ft, "passive", { get: function() {
      Bl = !0;
    } }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
  } catch {
    Bl = !1;
  }
  function Ha(e, n, t, r, l, o, i, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Ut = !1, Er = null, _r = !1, Hl = null, Wa = { onError: function(e) {
    Ut = !0, Er = e;
  } };
  function Qa(e, n, t, r, l, o, i, u, s) {
    Ut = !1, Er = null, Ha.apply(Wa, arguments);
  }
  function Ka(e, n, t, r, l, o, i, u, s) {
    if (Qa.apply(this, arguments), Ut) {
      if (Ut) {
        var p = Er;
        Ut = !1, Er = null;
      } else throw Error(m(198));
      _r || (_r = !0, Hl = p);
    }
  }
  function qn(e) {
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
  function eu(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function nu(e) {
    if (qn(e) !== e) throw Error(m(188));
  }
  function Ya(e) {
    var n = e.alternate;
    if (!n) {
      if (n = qn(e), n === null) throw Error(m(188));
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
          if (o === t) return nu(l), e;
          if (o === r) return nu(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
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
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function tu(e) {
    return e = Ya(e), e !== null ? ru(e) : null;
  }
  function ru(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = ru(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var lu = L.unstable_scheduleCallback, ou = L.unstable_cancelCallback, Xa = L.unstable_shouldYield, qa = L.unstable_requestPaint, ke = L.unstable_now, Ga = L.unstable_getCurrentPriorityLevel, Wl = L.unstable_ImmediatePriority, iu = L.unstable_UserBlockingPriority, Cr = L.unstable_NormalPriority, Za = L.unstable_LowPriority, uu = L.unstable_IdlePriority, xr = null, vn = null;
  function Ja(e) {
    if (vn && typeof vn.onCommitFiberRoot == "function") try {
      vn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var sn = Math.clz32 ? Math.clz32 : nc, ba = Math.log, ec = Math.LN2;
  function nc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ba(e) / ec | 0) | 0;
  }
  var Nr = 64, Pr = 4194304;
  function $t(e) {
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
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = $t(u) : (o &= i, o !== 0 && (r = $t(o)));
    } else i = t & ~l, i !== 0 ? r = $t(i) : o !== 0 && (r = $t(o));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - sn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function tc(e, n) {
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
  function rc(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - sn(o), u = 1 << i, s = l[i];
      s === -1 ? (!(u & t) || u & r) && (l[i] = tc(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function Ql(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function su() {
    var e = Nr;
    return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
  }
  function Kl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function At(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - sn(n), e[n] = t;
  }
  function lc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - sn(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Yl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - sn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var ne = 0;
  function au(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cu, Xl, fu, du, pu, ql = !1, Lr = [], Tn = null, Rn = null, In = null, Vt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), On = [], oc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function mu(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Rn = null;
        break;
      case "mouseover":
      case "mouseout":
        In = null;
        break;
      case "pointerover":
      case "pointerout":
        Vt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bt.delete(n.pointerId);
    }
  }
  function Ht(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = rr(n), n !== null && Xl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function ic(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return Tn = Ht(Tn, e, n, t, r, l), !0;
      case "dragenter":
        return Rn = Ht(Rn, e, n, t, r, l), !0;
      case "mouseover":
        return In = Ht(In, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Vt.set(o, Ht(Vt.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Bt.set(o, Ht(Bt.get(o) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function hu(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = qn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = eu(t), n !== null) {
            e.blockedOn = n, pu(e.priority, function() {
              fu(t);
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
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Ul = r, t.target.dispatchEvent(r), Ul = null;
      } else return n = rr(t), n !== null && Xl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function vu(e, n, t) {
    Tr(e) && t.delete(n);
  }
  function uc() {
    ql = !1, Tn !== null && Tr(Tn) && (Tn = null), Rn !== null && Tr(Rn) && (Rn = null), In !== null && Tr(In) && (In = null), Vt.forEach(vu), Bt.forEach(vu);
  }
  function Wt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ql || (ql = !0, L.unstable_scheduleCallback(L.unstable_NormalPriority, uc)));
  }
  function Qt(e) {
    function n(l) {
      return Wt(l, e);
    }
    if (0 < Lr.length) {
      Wt(Lr[0], e);
      for (var t = 1; t < Lr.length; t++) {
        var r = Lr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tn !== null && Wt(Tn, e), Rn !== null && Wt(Rn, e), In !== null && Wt(In, e), Vt.forEach(n), Bt.forEach(n), t = 0; t < On.length; t++) r = On[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < On.length && (t = On[0], t.blockedOn === null); ) hu(t), t.blockedOn === null && On.shift();
  }
  var ft = D.ReactCurrentBatchConfig, Rr = !0;
  function sc(e, n, t, r) {
    var l = ne, o = ft.transition;
    ft.transition = null;
    try {
      ne = 1, Gl(e, n, t, r);
    } finally {
      ne = l, ft.transition = o;
    }
  }
  function ac(e, n, t, r) {
    var l = ne, o = ft.transition;
    ft.transition = null;
    try {
      ne = 4, Gl(e, n, t, r);
    } finally {
      ne = l, ft.transition = o;
    }
  }
  function Gl(e, n, t, r) {
    if (Rr) {
      var l = Zl(e, n, t, r);
      if (l === null) ho(e, n, r, Ir, t), mu(e, r);
      else if (ic(l, e, n, t, r)) r.stopPropagation();
      else if (mu(e, r), n & 4 && -1 < oc.indexOf(e)) {
        for (; l !== null; ) {
          var o = rr(l);
          if (o !== null && cu(o), o = Zl(e, n, t, r), o === null && ho(e, n, r, Ir, t), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else ho(e, n, r, null, t);
    }
  }
  var Ir = null;
  function Zl(e, n, t, r) {
    if (Ir = null, e = $l(r), e = Gn(e), e !== null) if (n = qn(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = eu(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Ir = e, null;
  }
  function yu(e) {
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
        switch (Ga()) {
          case Wl:
            return 1;
          case iu:
            return 4;
          case Cr:
          case Za:
            return 16;
          case uu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jn = null, Jl = null, Or = null;
  function gu() {
    if (Or) return Or;
    var e, n = Jl, t = n.length, r, l = "value" in jn ? jn.value : jn.textContent, o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function jr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mr() {
    return !0;
  }
  function wu() {
    return !1;
  }
  function Ge(e) {
    function n(t, r, l, o, i) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Mr : wu, this.isPropagationStopped = wu, this;
    }
    return C(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Mr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Mr);
    }, persist: function() {
    }, isPersistent: Mr }), n;
  }
  var dt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bl = Ge(dt), Kt = C({}, dt, { view: 0, detail: 0 }), cc = Ge(Kt), eo, no, Yt, Dr = C({}, Kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ro, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yt && (Yt && e.type === "mousemove" ? (eo = e.screenX - Yt.screenX, no = e.screenY - Yt.screenY) : no = eo = 0, Yt = e), eo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : no;
  } }), Su = Ge(Dr), fc = C({}, Dr, { dataTransfer: 0 }), dc = Ge(fc), pc = C({}, Kt, { relatedTarget: 0 }), to = Ge(pc), mc = C({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hc = Ge(mc), vc = C({}, dt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), yc = Ge(vc), gc = C({}, dt, { data: 0 }), ku = Ge(gc), wc = {
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
  }, Sc = {
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
  }, kc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ec(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = kc[e]) ? !!n[e] : !1;
  }
  function ro() {
    return Ec;
  }
  var _c = C({}, Kt, { key: function(e) {
    if (e.key) {
      var n = wc[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = jr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ro, charCode: function(e) {
    return e.type === "keypress" ? jr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? jr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Cc = Ge(_c), xc = C({}, Dr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Eu = Ge(xc), Nc = C({}, Kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ro }), Pc = Ge(Nc), zc = C({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lc = Ge(zc), Tc = C({}, Dr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rc = Ge(Tc), Ic = [9, 13, 27, 32], lo = re && "CompositionEvent" in window, Xt = null;
  re && "documentMode" in document && (Xt = document.documentMode);
  var Oc = re && "TextEvent" in window && !Xt, _u = re && (!lo || Xt && 8 < Xt && 11 >= Xt), Cu = " ", xu = !1;
  function Nu(e, n) {
    switch (e) {
      case "keyup":
        return Ic.indexOf(n.keyCode) !== -1;
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
  function Pu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pt = !1;
  function jc(e, n) {
    switch (e) {
      case "compositionend":
        return Pu(n);
      case "keypress":
        return n.which !== 32 ? null : (xu = !0, Cu);
      case "textInput":
        return e = n.data, e === Cu && xu ? null : e;
      default:
        return null;
    }
  }
  function Mc(e, n) {
    if (pt) return e === "compositionend" || !lo && Nu(e, n) ? (e = gu(), Or = Jl = jn = null, pt = !1, e) : null;
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
        return _u && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Dc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function zu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Dc[e.type] : n === "textarea";
  }
  function Lu(e, n, t, r) {
    qi(r), n = Vr(n, "onChange"), 0 < n.length && (t = new bl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var qt = null, Gt = null;
  function Fc(e) {
    Yu(e, 0);
  }
  function Fr(e) {
    var n = gt(e);
    if (Fi(n)) return e;
  }
  function Uc(e, n) {
    if (e === "change") return n;
  }
  var Tu = !1;
  if (re) {
    var oo;
    if (re) {
      var io = "oninput" in document;
      if (!io) {
        var Ru = document.createElement("div");
        Ru.setAttribute("oninput", "return;"), io = typeof Ru.oninput == "function";
      }
      oo = io;
    } else oo = !1;
    Tu = oo && (!document.documentMode || 9 < document.documentMode);
  }
  function Iu() {
    qt && (qt.detachEvent("onpropertychange", Ou), Gt = qt = null);
  }
  function Ou(e) {
    if (e.propertyName === "value" && Fr(Gt)) {
      var n = [];
      Lu(n, Gt, e, $l(e)), bi(Fc, n);
    }
  }
  function $c(e, n, t) {
    e === "focusin" ? (Iu(), qt = n, Gt = t, qt.attachEvent("onpropertychange", Ou)) : e === "focusout" && Iu();
  }
  function Ac(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fr(Gt);
  }
  function Vc(e, n) {
    if (e === "click") return Fr(n);
  }
  function Bc(e, n) {
    if (e === "input" || e === "change") return Fr(n);
  }
  function Hc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var an = typeof Object.is == "function" ? Object.is : Hc;
  function Zt(e, n) {
    if (an(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!B.call(n, l) || !an(e[l], n[l])) return !1;
    }
    return !0;
  }
  function ju(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mu(e, n) {
    var t = ju(e);
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
      t = ju(t);
    }
  }
  function Du(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Du(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Fu() {
    for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = Sr(e.document);
    }
    return n;
  }
  function uo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Wc(e) {
    var n = Fu(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Du(t.ownerDocument.documentElement, t)) {
      if (r !== null && uo(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Mu(t, o);
          var i = Mu(
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
  var Qc = re && "documentMode" in document && 11 >= document.documentMode, mt = null, so = null, Jt = null, ao = !1;
  function Uu(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ao || mt == null || mt !== Sr(r) || (r = mt, "selectionStart" in r && uo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Vr(so, "onSelect"), 0 < r.length && (n = new bl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = mt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var ht = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, co = {}, $u = {};
  re && ($u = document.createElement("div").style, "AnimationEvent" in window || (delete ht.animationend.animation, delete ht.animationiteration.animation, delete ht.animationstart.animation), "TransitionEvent" in window || delete ht.transitionend.transition);
  function $r(e) {
    if (co[e]) return co[e];
    if (!ht[e]) return e;
    var n = ht[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in $u) return co[e] = n[t];
    return e;
  }
  var Au = $r("animationend"), Vu = $r("animationiteration"), Bu = $r("animationstart"), Hu = $r("transitionend"), Wu = /* @__PURE__ */ new Map(), Qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Mn(e, n) {
    Wu.set(e, n), ce(n, [e]);
  }
  for (var fo = 0; fo < Qu.length; fo++) {
    var po = Qu[fo], Kc = po.toLowerCase(), Yc = po[0].toUpperCase() + po.slice(1);
    Mn(Kc, "on" + Yc);
  }
  Mn(Au, "onAnimationEnd"), Mn(Vu, "onAnimationIteration"), Mn(Bu, "onAnimationStart"), Mn("dblclick", "onDoubleClick"), Mn("focusin", "onFocus"), Mn("focusout", "onBlur"), Mn(Hu, "onTransitionEnd"), W("onMouseEnter", ["mouseout", "mouseover"]), W("onMouseLeave", ["mouseout", "mouseover"]), W("onPointerEnter", ["pointerout", "pointerover"]), W("onPointerLeave", ["pointerout", "pointerover"]), ce("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ce("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ce("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ce("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ce("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ce("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bt));
  function Ku(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Ka(r, n, void 0, e), e.currentTarget = null;
  }
  function Yu(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, p = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
          Ku(l, u, p), o = s;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, p = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
          Ku(l, u, p), o = s;
        }
      }
    }
    if (_r) throw e = Hl, _r = !1, Hl = null, e;
  }
  function se(e, n) {
    var t = n[ko];
    t === void 0 && (t = n[ko] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Xu(n, e, 2, !1), t.add(r));
  }
  function mo(e, n, t) {
    var r = 0;
    n && (r |= 4), Xu(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Ar]) {
      e[Ar] = !0, Ce.forEach(function(t) {
        t !== "selectionchange" && (Xc.has(t) || mo(t, !1, e), mo(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || (n[Ar] = !0, mo("selectionchange", !1, n));
    }
  }
  function Xu(e, n, t, r) {
    switch (yu(n)) {
      case 1:
        var l = sc;
        break;
      case 4:
        l = ac;
        break;
      default:
        l = Gl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Bl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function ho(e, n, t, r, l) {
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
          if (i = Gn(u), i === null) return;
          if (s = i.tag, s === 5 || s === 6) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    bi(function() {
      var p = o, y = $l(t), w = [];
      e: {
        var h = Wu.get(e);
        if (h !== void 0) {
          var E = bl, x = e;
          switch (e) {
            case "keypress":
              if (jr(t) === 0) break e;
            case "keydown":
            case "keyup":
              E = Cc;
              break;
            case "focusin":
              x = "focus", E = to;
              break;
            case "focusout":
              x = "blur", E = to;
              break;
            case "beforeblur":
            case "afterblur":
              E = to;
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
              E = Su;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = dc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Pc;
              break;
            case Au:
            case Vu:
            case Bu:
              E = hc;
              break;
            case Hu:
              E = Lc;
              break;
            case "scroll":
              E = cc;
              break;
            case "wheel":
              E = Rc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = yc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Eu;
          }
          var N = (n & 4) !== 0, Ee = !N && e === "scroll", f = N ? h !== null ? h + "Capture" : null : h;
          N = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var S = d.stateNode;
            if (d.tag === 5 && S !== null && (d = S, f !== null && (S = Dt(a, f), S != null && N.push(nr(a, S, d)))), Ee) break;
            a = a.return;
          }
          0 < N.length && (h = new E(h, x, null, t, y), w.push({ event: h, listeners: N }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && t !== Ul && (x = t.relatedTarget || t.fromElement) && (Gn(x) || x[En])) break e;
          if ((E || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (x = t.relatedTarget || t.toElement, E = p, x = x ? Gn(x) : null, x !== null && (Ee = qn(x), x !== Ee || x.tag !== 5 && x.tag !== 6) && (x = null)) : (E = null, x = p), E !== x)) {
            if (N = Su, S = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (N = Eu, S = "onPointerLeave", f = "onPointerEnter", a = "pointer"), Ee = E == null ? h : gt(E), d = x == null ? h : gt(x), h = new N(S, a + "leave", E, t, y), h.target = Ee, h.relatedTarget = d, S = null, Gn(y) === p && (N = new N(f, a + "enter", x, t, y), N.target = d, N.relatedTarget = Ee, S = N), Ee = S, E && x) n: {
              for (N = E, f = x, a = 0, d = N; d; d = vt(d)) a++;
              for (d = 0, S = f; S; S = vt(S)) d++;
              for (; 0 < a - d; ) N = vt(N), a--;
              for (; 0 < d - a; ) f = vt(f), d--;
              for (; a--; ) {
                if (N === f || f !== null && N === f.alternate) break n;
                N = vt(N), f = vt(f);
              }
              N = null;
            }
            else N = null;
            E !== null && qu(w, h, E, N, !1), x !== null && Ee !== null && qu(w, Ee, x, N, !0);
          }
        }
        e: {
          if (h = p ? gt(p) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var P = Uc;
          else if (zu(h)) if (Tu) P = Bc;
          else {
            P = Ac;
            var T = $c;
          }
          else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Vc);
          if (P && (P = P(e, p))) {
            Lu(w, P, t, y);
            break e;
          }
          T && T(e, h, p), e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && Ol(h, "number", h.value);
        }
        switch (T = p ? gt(p) : window, e) {
          case "focusin":
            (zu(T) || T.contentEditable === "true") && (mt = T, so = p, Jt = null);
            break;
          case "focusout":
            Jt = so = mt = null;
            break;
          case "mousedown":
            ao = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ao = !1, Uu(w, t, y);
            break;
          case "selectionchange":
            if (Qc) break;
          case "keydown":
          case "keyup":
            Uu(w, t, y);
        }
        var R;
        if (lo) e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
        else pt ? Nu(e, t) && (j = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (j = "onCompositionStart");
        j && (_u && t.locale !== "ko" && (pt || j !== "onCompositionStart" ? j === "onCompositionEnd" && pt && (R = gu()) : (jn = y, Jl = "value" in jn ? jn.value : jn.textContent, pt = !0)), T = Vr(p, j), 0 < T.length && (j = new ku(j, e, null, t, y), w.push({ event: j, listeners: T }), R ? j.data = R : (R = Pu(t), R !== null && (j.data = R)))), (R = Oc ? jc(e, t) : Mc(e, t)) && (p = Vr(p, "onBeforeInput"), 0 < p.length && (y = new ku("onBeforeInput", "beforeinput", null, t, y), w.push({ event: y, listeners: p }), y.data = R));
      }
      Yu(w, n);
    });
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Vr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Dt(e, t), o != null && r.unshift(nr(e, o, l)), o = Dt(e, n), o != null && r.push(nr(e, o, l))), e = e.return;
    }
    return r;
  }
  function vt(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function qu(e, n, t, r, l) {
    for (var o = n._reactName, i = []; t !== null && t !== r; ) {
      var u = t, s = u.alternate, p = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && p !== null && (u = p, l ? (s = Dt(t, o), s != null && i.unshift(nr(t, s, u))) : l || (s = Dt(t, o), s != null && i.push(nr(t, s, u)))), t = t.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var qc = /\r\n?/g, Gc = /\u0000|\uFFFD/g;
  function Gu(e) {
    return (typeof e == "string" ? e : "" + e).replace(qc, `
`).replace(Gc, "");
  }
  function Br(e, n, t) {
    if (n = Gu(n), Gu(e) !== n && t) throw Error(m(425));
  }
  function Hr() {
  }
  var vo = null, yo = null;
  function go(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var wo = typeof setTimeout == "function" ? setTimeout : void 0, Zc = typeof clearTimeout == "function" ? clearTimeout : void 0, Zu = typeof Promise == "function" ? Promise : void 0, Jc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zu < "u" ? function(e) {
    return Zu.resolve(null).then(e).catch(bc);
  } : wo;
  function bc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function So(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Qt(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Qt(n);
  }
  function Dn(e) {
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
  function Ju(e) {
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
  var yt = Math.random().toString(36).slice(2), yn = "__reactFiber$" + yt, tr = "__reactProps$" + yt, En = "__reactContainer$" + yt, ko = "__reactEvents$" + yt, ef = "__reactListeners$" + yt, nf = "__reactHandles$" + yt;
  function Gn(e) {
    var n = e[yn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[En] || t[yn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Ju(e); e !== null; ) {
          if (t = e[yn]) return t;
          e = Ju(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[yn] || e[En], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[tr] || null;
  }
  var Eo = [], wt = -1;
  function Fn(e) {
    return { current: e };
  }
  function ae(e) {
    0 > wt || (e.current = Eo[wt], Eo[wt] = null, wt--);
  }
  function ue(e, n) {
    wt++, Eo[wt] = e.current, e.current = n;
  }
  var Un = {}, Oe = Fn(Un), Ve = Fn(!1), Zn = Un;
  function St(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Un;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t) l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Be(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    ae(Ve), ae(Oe);
  }
  function bu(e, n, t) {
    if (Oe.current !== Un) throw Error(m(168));
    ue(Oe, n), ue(Ve, t);
  }
  function es(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, ie(e) || "Unknown", l));
    return C({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Un, Zn = Oe.current, ue(Oe, e), ue(Ve, Ve.current), !0;
  }
  function ns(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = es(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, ae(Ve), ae(Oe), ue(Oe, e)) : ae(Ve), ue(Ve, t);
  }
  var _n = null, Yr = !1, _o = !1;
  function ts(e) {
    _n === null ? _n = [e] : _n.push(e);
  }
  function tf(e) {
    Yr = !0, ts(e);
  }
  function $n() {
    if (!_o && _n !== null) {
      _o = !0;
      var e = 0, n = ne;
      try {
        var t = _n;
        for (ne = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        _n = null, Yr = !1;
      } catch (l) {
        throw _n !== null && (_n = _n.slice(e + 1)), lu(Wl, $n), l;
      } finally {
        ne = n, _o = !1;
      }
    }
    return null;
  }
  var kt = [], Et = 0, Xr = null, qr = 0, en = [], nn = 0, Jn = null, Cn = 1, xn = "";
  function bn(e, n) {
    kt[Et++] = qr, kt[Et++] = Xr, Xr = e, qr = n;
  }
  function rs(e, n, t) {
    en[nn++] = Cn, en[nn++] = xn, en[nn++] = Jn, Jn = e;
    var r = Cn;
    e = xn;
    var l = 32 - sn(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - sn(n) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Cn = 1 << 32 - sn(n) + l | t << l | r, xn = o + e;
    } else Cn = 1 << o | t << l | r, xn = e;
  }
  function Co(e) {
    e.return !== null && (bn(e, 1), rs(e, 1, 0));
  }
  function xo(e) {
    for (; e === Xr; ) Xr = kt[--Et], kt[Et] = null, qr = kt[--Et], kt[Et] = null;
    for (; e === Jn; ) Jn = en[--nn], en[nn] = null, xn = en[--nn], en[nn] = null, Cn = en[--nn], en[nn] = null;
  }
  var Ze = null, Je = null, pe = !1, cn = null;
  function ls(e, n) {
    var t = on(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function os(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ze = e, Je = Dn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ze = e, Je = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: Cn, overflow: xn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = on(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ze = e, Je = null, !0) : !1;
      default:
        return !1;
    }
  }
  function No(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Po(e) {
    if (pe) {
      var n = Je;
      if (n) {
        var t = n;
        if (!os(e, n)) {
          if (No(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = Ze;
          n && os(e, n) ? ls(r, t) : (e.flags = e.flags & -4097 | 2, pe = !1, Ze = e);
        }
      } else {
        if (No(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, pe = !1, Ze = e;
      }
    }
  }
  function is(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ze = e;
  }
  function Gr(e) {
    if (e !== Ze) return !1;
    if (!pe) return is(e), pe = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !go(e.type, e.memoizedProps)), n && (n = Je)) {
      if (No(e)) throw us(), Error(m(418));
      for (; n; ) ls(e, n), n = Dn(n.nextSibling);
    }
    if (is(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Je = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Je = null;
      }
    } else Je = Ze ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = Je; e; ) e = Dn(e.nextSibling);
  }
  function _t() {
    Je = Ze = null, pe = !1;
  }
  function zo(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var rf = D.ReactCurrentBatchConfig;
  function lr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, o = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
          var u = l.refs;
          i === null ? delete u[o] : u[o] = i;
        }, n._stringRef = o, n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function ss(e) {
    var n = e._init;
    return n(e._payload);
  }
  function as(e) {
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
      return f = Yn(f, a), f.index = 0, f.sibling = null, f;
    }
    function o(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, S) {
      return a === null || a.tag !== 6 ? (a = wi(d, f.mode, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, S) {
      var P = d.type;
      return P === te ? y(f, a, d.props.children, S, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Ae && ss(P) === a.type) ? (S = l(a, d.props), S.ref = lr(f, a, d), S.return = f, S) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, S);
    }
    function p(f, a, d, S) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Si(d, f.mode, S), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, S, P) {
      return a === null || a.tag !== 7 ? (a = ut(d, f.mode, S, P), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function w(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = wi("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Q:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = lr(f, null, a), d.return = f, d;
          case H:
            return a = Si(a, f.mode, d), a.return = f, a;
          case Ae:
            var S = a._init;
            return w(f, S(a._payload), d);
        }
        if (Ot(a) || O(a)) return a = ut(a, f.mode, d, null), a.return = f, a;
        Zr(f, a);
      }
      return null;
    }
    function h(f, a, d, S) {
      var P = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : u(f, a, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Q:
            return d.key === P ? s(f, a, d, S) : null;
          case H:
            return d.key === P ? p(f, a, d, S) : null;
          case Ae:
            return P = d._init, h(
              f,
              a,
              P(d._payload),
              S
            );
        }
        if (Ot(d) || O(d)) return P !== null ? null : y(f, a, d, S, null);
        Zr(f, d);
      }
      return null;
    }
    function E(f, a, d, S, P) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(d) || null, u(a, f, "" + S, P);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Q:
            return f = f.get(S.key === null ? d : S.key) || null, s(a, f, S, P);
          case H:
            return f = f.get(S.key === null ? d : S.key) || null, p(a, f, S, P);
          case Ae:
            var T = S._init;
            return E(f, a, d, T(S._payload), P);
        }
        if (Ot(S) || O(S)) return f = f.get(d) || null, y(a, f, S, P, null);
        Zr(a, S);
      }
      return null;
    }
    function x(f, a, d, S) {
      for (var P = null, T = null, R = a, j = a = 0, Le = null; R !== null && j < d.length; j++) {
        R.index > j ? (Le = R, R = null) : Le = R.sibling;
        var Z = h(f, R, d[j], S);
        if (Z === null) {
          R === null && (R = Le);
          break;
        }
        e && R && Z.alternate === null && n(f, R), a = o(Z, a, j), T === null ? P = Z : T.sibling = Z, T = Z, R = Le;
      }
      if (j === d.length) return t(f, R), pe && bn(f, j), P;
      if (R === null) {
        for (; j < d.length; j++) R = w(f, d[j], S), R !== null && (a = o(R, a, j), T === null ? P = R : T.sibling = R, T = R);
        return pe && bn(f, j), P;
      }
      for (R = r(f, R); j < d.length; j++) Le = E(R, f, j, d[j], S), Le !== null && (e && Le.alternate !== null && R.delete(Le.key === null ? j : Le.key), a = o(Le, a, j), T === null ? P = Le : T.sibling = Le, T = Le);
      return e && R.forEach(function(Xn) {
        return n(f, Xn);
      }), pe && bn(f, j), P;
    }
    function N(f, a, d, S) {
      var P = O(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var T = P = null, R = a, j = a = 0, Le = null, Z = d.next(); R !== null && !Z.done; j++, Z = d.next()) {
        R.index > j ? (Le = R, R = null) : Le = R.sibling;
        var Xn = h(f, R, Z.value, S);
        if (Xn === null) {
          R === null && (R = Le);
          break;
        }
        e && R && Xn.alternate === null && n(f, R), a = o(Xn, a, j), T === null ? P = Xn : T.sibling = Xn, T = Xn, R = Le;
      }
      if (Z.done) return t(
        f,
        R
      ), pe && bn(f, j), P;
      if (R === null) {
        for (; !Z.done; j++, Z = d.next()) Z = w(f, Z.value, S), Z !== null && (a = o(Z, a, j), T === null ? P = Z : T.sibling = Z, T = Z);
        return pe && bn(f, j), P;
      }
      for (R = r(f, R); !Z.done; j++, Z = d.next()) Z = E(R, f, j, Z.value, S), Z !== null && (e && Z.alternate !== null && R.delete(Z.key === null ? j : Z.key), a = o(Z, a, j), T === null ? P = Z : T.sibling = Z, T = Z);
      return e && R.forEach(function(Df) {
        return n(f, Df);
      }), pe && bn(f, j), P;
    }
    function Ee(f, a, d, S) {
      if (typeof d == "object" && d !== null && d.type === te && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Q:
            e: {
              for (var P = d.key, T = a; T !== null; ) {
                if (T.key === P) {
                  if (P = d.type, P === te) {
                    if (T.tag === 7) {
                      t(f, T.sibling), a = l(T, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (T.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Ae && ss(P) === T.type) {
                    t(f, T.sibling), a = l(T, d.props), a.ref = lr(f, T, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, T);
                  break;
                } else n(f, T);
                T = T.sibling;
              }
              d.type === te ? (a = ut(d.props.children, f.mode, S, d.key), a.return = f, f = a) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, f = S);
            }
            return i(f);
          case H:
            e: {
              for (T = d.key; a !== null; ) {
                if (a.key === T) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
                else n(f, a);
                a = a.sibling;
              }
              a = Si(d, f.mode, S), a.return = f, f = a;
            }
            return i(f);
          case Ae:
            return T = d._init, Ee(f, a, T(d._payload), S);
        }
        if (Ot(d)) return x(f, a, d, S);
        if (O(d)) return N(f, a, d, S);
        Zr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = wi(d, f.mode, S), a.return = f, f = a), i(f)) : t(f, a);
    }
    return Ee;
  }
  var Ct = as(!0), cs = as(!1), Jr = Fn(null), br = null, xt = null, Lo = null;
  function To() {
    Lo = xt = br = null;
  }
  function Ro(e) {
    var n = Jr.current;
    ae(Jr), e._currentValue = n;
  }
  function Io(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Nt(e, n) {
    br = e, Lo = xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (He = !0), e.firstContext = null);
  }
  function tn(e) {
    var n = e._currentValue;
    if (Lo !== e) if (e = { context: e, memoizedValue: n, next: null }, xt === null) {
      if (br === null) throw Error(m(308));
      xt = e, br.dependencies = { lanes: 0, firstContext: e };
    } else xt = xt.next = e;
    return n;
  }
  var et = null;
  function Oo(e) {
    et === null ? et = [e] : et.push(e);
  }
  function fs(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Oo(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Nn(e, r);
  }
  function Nn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var An = !1;
  function jo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ds(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Pn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, K & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Nn(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Oo(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Nn(e, t);
  }
  function el(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Yl(e, t);
    }
  }
  function ps(e, n) {
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
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    An = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, p = s.next;
      s.next = null, i === null ? o = p : i.next = p, i = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== i && (u === null ? y.firstBaseUpdate = p : u.next = p, y.lastBaseUpdate = s));
    }
    if (o !== null) {
      var w = l.baseState;
      i = 0, y = p = s = null, u = o;
      do {
        var h = u.lane, E = u.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: E,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var x = e, N = u;
            switch (h = n, E = t, N.tag) {
              case 1:
                if (x = N.payload, typeof x == "function") {
                  w = x.call(E, w, h);
                  break e;
                }
                w = x;
                break e;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = N.payload, h = typeof x == "function" ? x.call(E, w, h) : x, h == null) break e;
                w = C({}, w, h);
                break e;
              case 2:
                An = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
        } else E = { eventTime: E, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (p = y = E, s = w) : y = y.next = E, i |= h;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = w), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          i |= l.lane, l = l.next;
        while (l !== n);
      } else o === null && (l.shared.lanes = 0);
      rt |= i, e.lanes = i, e.memoizedState = w;
    }
  }
  function ms(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var or = {}, gn = Fn(or), ir = Fn(or), ur = Fn(or);
  function nt(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Mo(e, n) {
    switch (ue(ur, n), ue(ir, e), ue(gn, or), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ml(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ml(n, e);
    }
    ae(gn), ue(gn, n);
  }
  function Pt() {
    ae(gn), ae(ir), ae(ur);
  }
  function hs(e) {
    nt(ur.current);
    var n = nt(gn.current), t = Ml(n, e.type);
    n !== t && (ue(ir, e), ue(gn, t));
  }
  function Do(e) {
    ir.current === e && (ae(gn), ae(ir));
  }
  var ve = Fn(0);
  function tl(e) {
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
  var Fo = [];
  function Uo() {
    for (var e = 0; e < Fo.length; e++) Fo[e]._workInProgressVersionPrimary = null;
    Fo.length = 0;
  }
  var rl = D.ReactCurrentDispatcher, $o = D.ReactCurrentBatchConfig, tt = 0, ye = null, xe = null, Pe = null, ll = !1, sr = !1, ar = 0, lf = 0;
  function je() {
    throw Error(m(321));
  }
  function Ao(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!an(e[t], n[t])) return !1;
    return !0;
  }
  function Vo(e, n, t, r, l, o) {
    if (tt = o, ye = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, rl.current = e === null || e.memoizedState === null ? af : cf, e = t(r, l), sr) {
      o = 0;
      do {
        if (sr = !1, ar = 0, 25 <= o) throw Error(m(301));
        o += 1, Pe = xe = null, n.updateQueue = null, rl.current = ff, e = t(r, l);
      } while (sr);
    }
    if (rl.current = ul, n = xe !== null && xe.next !== null, tt = 0, Pe = xe = ye = null, ll = !1, n) throw Error(m(300));
    return e;
  }
  function Bo() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Pe === null ? ye.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function rn() {
    if (xe === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var n = Pe === null ? ye.memoizedState : Pe.next;
    if (n !== null) Pe = n, xe = e;
    else {
      if (e === null) throw Error(m(310));
      xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Pe === null ? ye.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = rn(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = xe, l = r.baseQueue, o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, t.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null, s = null, p = o;
      do {
        var y = p.lane;
        if ((tt & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var w = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (u = s = w, i = r) : s = s.next = w, ye.lanes |= y, rt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? i = r : s.next = u, an(r, n.memoizedState) || (He = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, ye.lanes |= o, rt |= o, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Wo(e) {
    var n = rn(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      an(o, n.memoizedState) || (He = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function vs() {
  }
  function ys(e, n) {
    var t = ye, r = rn(), l = n(), o = !an(r.memoizedState, l);
    if (o && (r.memoizedState = l, He = !0), r = r.queue, Qo(Ss.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || Pe !== null && Pe.memoizedState.tag & 1) {
      if (t.flags |= 2048, fr(9, ws.bind(null, t, r, l, n), void 0, null), ze === null) throw Error(m(349));
      tt & 30 || gs(t, n, l);
    }
    return l;
  }
  function gs(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ye.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ye.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function ws(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ks(n) && Es(e);
  }
  function Ss(e, n, t) {
    return t(function() {
      ks(n) && Es(e);
    });
  }
  function ks(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !an(e, t);
    } catch {
      return !0;
    }
  }
  function Es(e) {
    var n = Nn(e, 1);
    n !== null && mn(n, e, 1, -1);
  }
  function _s(e) {
    var n = wn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, n.queue = e, e = e.dispatch = sf.bind(null, ye, e), [n.memoizedState, e];
  }
  function fr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ye.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ye.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function Cs() {
    return rn().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = wn();
    ye.flags |= e, l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function il(e, n, t, r) {
    var l = rn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (xe !== null) {
      var i = xe.memoizedState;
      if (o = i.destroy, r !== null && Ao(r, i.deps)) {
        l.memoizedState = fr(n, t, o, r);
        return;
      }
    }
    ye.flags |= e, l.memoizedState = fr(1 | n, t, o, r);
  }
  function xs(e, n) {
    return ol(8390656, 8, e, n);
  }
  function Qo(e, n) {
    return il(2048, 8, e, n);
  }
  function Ns(e, n) {
    return il(4, 2, e, n);
  }
  function Ps(e, n) {
    return il(4, 4, e, n);
  }
  function zs(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function Ls(e, n, t) {
    return t = t != null ? t.concat([e]) : null, il(4, 4, zs.bind(null, n, e), t);
  }
  function Ko() {
  }
  function Ts(e, n) {
    var t = rn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Ao(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Rs(e, n) {
    var t = rn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Ao(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Is(e, n, t) {
    return tt & 21 ? (an(t, n) || (t = su(), ye.lanes |= t, rt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = t);
  }
  function of(e, n) {
    var t = ne;
    ne = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = $o.transition;
    $o.transition = {};
    try {
      e(!1), n();
    } finally {
      ne = t, $o.transition = r;
    }
  }
  function Os() {
    return rn().memoizedState;
  }
  function uf(e, n, t) {
    var r = Qn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, js(e)) Ms(n, t);
    else if (t = fs(e, n, t, r), t !== null) {
      var l = Ue();
      mn(t, e, r, l), Ds(t, n, r);
    }
  }
  function sf(e, n, t) {
    var r = Qn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (js(e)) Ms(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var i = n.lastRenderedState, u = o(i, t);
        if (l.hasEagerState = !0, l.eagerState = u, an(u, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Oo(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = fs(e, n, l, r), t !== null && (l = Ue(), mn(t, e, r, l), Ds(t, n, r));
    }
  }
  function js(e) {
    var n = e.alternate;
    return e === ye || n !== null && n === ye;
  }
  function Ms(e, n) {
    sr = ll = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Ds(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Yl(e, t);
    }
  }
  var ul = { readContext: tn, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 }, af = { readContext: tn, useCallback: function(e, n) {
    return wn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: tn, useEffect: xs, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ol(
      4194308,
      4,
      zs.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ol(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ol(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = wn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = wn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = uf.bind(null, ye, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = wn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: _s, useDebugValue: Ko, useDeferredValue: function(e) {
    return wn().memoizedState = e;
  }, useTransition: function() {
    var e = _s(!1), n = e[0];
    return e = of.bind(null, e[1]), wn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ye, l = wn();
    if (pe) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), ze === null) throw Error(m(349));
      tt & 30 || gs(r, n, t);
    }
    l.memoizedState = t;
    var o = { value: t, getSnapshot: n };
    return l.queue = o, xs(Ss.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, fr(9, ws.bind(null, r, o, t, n), void 0, null), t;
  }, useId: function() {
    var e = wn(), n = ze.identifierPrefix;
    if (pe) {
      var t = xn, r = Cn;
      t = (r & ~(1 << 32 - sn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ar++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = lf++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, cf = {
    readContext: tn,
    useCallback: Ts,
    useContext: tn,
    useEffect: Qo,
    useImperativeHandle: Ls,
    useInsertionEffect: Ns,
    useLayoutEffect: Ps,
    useMemo: Rs,
    useReducer: Ho,
    useRef: Cs,
    useState: function() {
      return Ho(cr);
    },
    useDebugValue: Ko,
    useDeferredValue: function(e) {
      var n = rn();
      return Is(n, xe.memoizedState, e);
    },
    useTransition: function() {
      var e = Ho(cr)[0], n = rn().memoizedState;
      return [e, n];
    },
    useMutableSource: vs,
    useSyncExternalStore: ys,
    useId: Os,
    unstable_isNewReconciler: !1
  }, ff = { readContext: tn, useCallback: Ts, useContext: tn, useEffect: Qo, useImperativeHandle: Ls, useInsertionEffect: Ns, useLayoutEffect: Ps, useMemo: Rs, useReducer: Wo, useRef: Cs, useState: function() {
    return Wo(cr);
  }, useDebugValue: Ko, useDeferredValue: function(e) {
    var n = rn();
    return xe === null ? n.memoizedState = e : Is(n, xe.memoizedState, e);
  }, useTransition: function() {
    var e = Wo(cr)[0], n = rn().memoizedState;
    return [e, n];
  }, useMutableSource: vs, useSyncExternalStore: ys, useId: Os, unstable_isNewReconciler: !1 };
  function fn(e, n) {
    if (e && e.defaultProps) {
      n = C({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Yo(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : C({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ue(), l = Qn(e), o = Pn(r, l);
    o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (mn(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ue(), l = Qn(e), o = Pn(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (mn(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Ue(), r = Qn(e), l = Pn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Vn(e, l, r), n !== null && (mn(n, e, r, t), el(n, e, r));
  } };
  function Fs(e, n, t, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, o) : !0;
  }
  function Us(e, n, t) {
    var r = !1, l = Un, o = n.contextType;
    return typeof o == "object" && o !== null ? o = tn(o) : (l = Be(n) ? Zn : Oe.current, r = n.contextTypes, o = (r = r != null) ? St(e, l) : Un), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function $s(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Xo(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, jo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = tn(o) : (o = Be(n) ? Zn : Oe.current, l.context = St(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Yo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zt(e, n) {
    try {
      var t = "", r = n;
      do
        t += q(r), r = r.return;
      while (r);
      var l = t;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function qo(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Go(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var df = typeof WeakMap == "function" ? WeakMap : Map;
  function As(e, n, t) {
    t = Pn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, fi = r), Go(e, n);
    }, t;
  }
  function Vs(e, n, t) {
    t = Pn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Go(e, n);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      Go(e, n), typeof r != "function" && (Hn === null ? Hn = /* @__PURE__ */ new Set([this]) : Hn.add(this));
      var i = n.stack;
      this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
    }), t;
  }
  function Bs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new df();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = Nf.bind(null, e, n, t), n.then(e, e));
  }
  function Hs(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ws(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Pn(-1, 1), n.tag = 2, Vn(t, n, 1))), t.lanes |= 1), e);
  }
  var pf = D.ReactCurrentOwner, He = !1;
  function Fe(e, n, t, r) {
    n.child = e === null ? cs(n, null, t, r) : Ct(n, e.child, t, r);
  }
  function Qs(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return Nt(n, l), r = Vo(e, n, t, r, o, l), t = Bo(), e !== null && !He ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, zn(e, n, l)) : (pe && t && Co(n), n.flags |= 1, Fe(e, n, r, l), n.child);
  }
  function Ks(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !gi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ys(e, n, o, r, l)) : (e = kl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(i, r) && e.ref === n.ref) return zn(e, n, l);
    }
    return n.flags |= 1, e = Yn(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Ys(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zt(o, r) && e.ref === n.ref) if (He = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (He = !0);
      else return n.lanes = e.lanes, zn(e, n, l);
    }
    return Zo(e, n, t, r, l);
  }
  function Xs(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(Tt, be), be |= t;
    else {
      if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, ue(Tt, be), be |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, ue(Tt, be), be |= r;
    }
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, ue(Tt, be), be |= r;
    return Fe(e, n, l, t), n.child;
  }
  function qs(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Zo(e, n, t, r, l) {
    var o = Be(t) ? Zn : Oe.current;
    return o = St(n, o), Nt(n, l), t = Vo(e, n, t, r, o, l), r = Bo(), e !== null && !He ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, zn(e, n, l)) : (pe && r && Co(n), n.flags |= 1, Fe(e, n, t, l), n.child);
  }
  function Gs(e, n, t, r, l) {
    if (Be(t)) {
      var o = !0;
      Kr(n);
    } else o = !1;
    if (Nt(n, l), n.stateNode === null) cl(e, n), Us(n, t, r), Xo(n, t, r, l), r = !0;
    else if (e === null) {
      var i = n.stateNode, u = n.memoizedProps;
      i.props = u;
      var s = i.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = tn(p) : (p = Be(t) ? Zn : Oe.current, p = St(n, p));
      var y = t.getDerivedStateFromProps, w = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== p) && $s(n, i, r, p), An = !1;
      var h = n.memoizedState;
      i.state = h, nl(n, r, i, l), s = n.memoizedState, u !== r || h !== s || Ve.current || An ? (typeof y == "function" && (Yo(n, t, y, r), s = n.memoizedState), (u = An || Fs(n, t, u, r, h, s, p)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, ds(e, n), u = n.memoizedProps, p = n.type === n.elementType ? u : fn(n.type, u), i.props = p, w = n.pendingProps, h = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = tn(s) : (s = Be(t) ? Zn : Oe.current, s = St(n, s));
      var E = t.getDerivedStateFromProps;
      (y = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || h !== s) && $s(n, i, r, s), An = !1, h = n.memoizedState, i.state = h, nl(n, r, i, l);
      var x = n.memoizedState;
      u !== w || h !== x || Ve.current || An ? (typeof E == "function" && (Yo(n, t, E, r), x = n.memoizedState), (p = An || Fs(n, t, p, r, h, x, s) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = x), i.props = r, i.state = x, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Jo(e, n, t, r, o, l);
  }
  function Jo(e, n, t, r, l, o) {
    qs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && ns(n, t, !1), zn(e, n, o);
    r = n.stateNode, pf.current = n;
    var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = Ct(n, e.child, null, o), n.child = Ct(n, null, u, o)) : Fe(e, n, u, o), n.memoizedState = r.state, l && ns(n, t, !0), n.child;
  }
  function Zs(e) {
    var n = e.stateNode;
    n.pendingContext ? bu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && bu(e, n.context, !1), Mo(e, n.containerInfo);
  }
  function Js(e, n, t, r, l) {
    return _t(), zo(l), n.flags |= 256, Fe(e, n, t, r), n.child;
  }
  var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function bs(e, n, t) {
    var r = n.pendingProps, l = ve.current, o = !1, i = (n.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ue(ve, l & 1), e === null)
      return Po(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = El(i, r, 0, null), e = ut(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = ei(t), n.memoizedState = bo, e) : ni(n, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return mf(e, n, i, r, u, l, t);
    if (o) {
      o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Yn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Yn(u, o) : (o = ut(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? ei(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = bo, r;
    }
    return o = e.child, e = o.sibling, r = Yn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function ni(e, n) {
    return n = El({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function al(e, n, t, r) {
    return r !== null && zo(r), Ct(n, e.child, null, t), e = ni(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function mf(e, n, t, r, l, o, i) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = qo(Error(m(422))), al(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), o = ut(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && Ct(n, e.child, null, i), n.child.memoizedState = ei(i), n.memoizedState = bo, o);
    if (!(n.mode & 1)) return al(e, n, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(m(419)), r = qo(o, r, void 0), al(e, n, i, r);
    }
    if (u = (i & e.childLanes) !== 0, He || u) {
      if (r = ze, r !== null) {
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Nn(e, l), mn(r, e, l, -1));
      }
      return yi(), r = qo(Error(m(421))), al(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Pf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Je = Dn(l.nextSibling), Ze = n, pe = !0, cn = null, e !== null && (en[nn++] = Cn, en[nn++] = xn, en[nn++] = Jn, Cn = e.id, xn = e.overflow, Jn = n), n = ni(n, r.children), n.flags |= 4096, n);
  }
  function ea(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Io(e.return, n, t);
  }
  function ti(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
  }
  function na(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, o = r.tail;
    if (Fe(e, n, r.children, t), r = ve.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ea(e, t, n);
        else if (e.tag === 19) ea(e, t, n);
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
    if (ue(ve, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && tl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), ti(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && tl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        ti(n, !0, t, null, o);
        break;
      case "together":
        ti(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function zn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), rt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Yn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Yn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function hf(e, n, t) {
    switch (n.tag) {
      case 3:
        Zs(n), _t();
        break;
      case 5:
        hs(n);
        break;
      case 1:
        Be(n.type) && Kr(n);
        break;
      case 4:
        Mo(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        ue(Jr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (ue(ve, ve.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? bs(e, n, t) : (ue(ve, ve.current & 1), e = zn(e, n, t), e !== null ? e.sibling : null);
        ue(ve, ve.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return na(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ue(ve, ve.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Xs(e, n, t);
    }
    return zn(e, n, t);
  }
  var ta, ri, ra, la;
  ta = function(e, n) {
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
  }, ri = function() {
  }, ra = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, nt(gn.current);
      var o = null;
      switch (t) {
        case "input":
          l = Rl(e, l), r = Rl(e, r), o = [];
          break;
        case "select":
          l = C({}, l, { value: void 0 }), r = C({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = jl(e, l), r = jl(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Dl(t, r);
      var i;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var u = l[p];
        for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (F.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (u = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== u && (s != null || u != null)) if (p === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
          for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
        } else t || (o || (o = []), o.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (F.hasOwnProperty(p) ? (s != null && p === "onScroll" && se("scroll", e), o || u === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, la = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function dr(e, n) {
    if (!pe) switch (e.tailMode) {
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
  function Me(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function vf(e, n, t) {
    var r = n.pendingProps;
    switch (xo(n), n.tag) {
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
        return Me(n), null;
      case 1:
        return Be(n.type) && Qr(), Me(n), null;
      case 3:
        return r = n.stateNode, Pt(), ae(Ve), ae(Oe), Uo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, cn !== null && (mi(cn), cn = null))), ri(e, n), Me(n), null;
      case 5:
        Do(n);
        var l = nt(ur.current);
        if (t = n.type, e !== null && n.stateNode != null) ra(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return Me(n), null;
          }
          if (e = nt(gn.current), Gr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[yn] = n, r[tr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                se("cancel", r), se("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++) se(bt[l], r);
                break;
              case "source":
                se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  r
                ), se("load", r);
                break;
              case "details":
                se("toggle", r);
                break;
              case "input":
                Ui(r, o), se("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, se("invalid", r);
                break;
              case "textarea":
                Vi(r, o), se("invalid", r);
            }
            Dl(t, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Br(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : F.hasOwnProperty(i) && u != null && i === "onScroll" && se("scroll", r);
            }
            switch (t) {
              case "input":
                wr(r), Ai(r, o, !0);
                break;
              case "textarea":
                wr(r), Hi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Hr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Wi(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[yn] = n, e[tr] = r, ta(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (i = Fl(t, r), t) {
                case "dialog":
                  se("cancel", e), se("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  se("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++) se(bt[l], e);
                  l = r;
                  break;
                case "source":
                  se("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  se(
                    "error",
                    e
                  ), se("load", e), l = r;
                  break;
                case "details":
                  se("toggle", e), l = r;
                  break;
                case "input":
                  Ui(e, r), l = Rl(e, r), se("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), se("invalid", e);
                  break;
                case "textarea":
                  Vi(e, r), l = jl(e, r), se("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(t, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Yi(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Qi(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && jt(e, s) : typeof s == "number" && jt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (F.hasOwnProperty(o) ? s != null && o === "onScroll" && se("scroll", e) : s != null && M(e, o, s, i));
              }
              switch (t) {
                case "input":
                  wr(e), Ai(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Hi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? st(e, !!r.multiple, o, !1) : r.defaultValue != null && st(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
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
        return Me(n), null;
      case 6:
        if (e && n.stateNode != null) la(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = nt(ur.current), nt(gn.current), Gr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[yn] = n, (o = r.nodeValue !== t) && (e = Ze, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            o && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[yn] = n, n.stateNode = r;
        }
        return Me(n), null;
      case 13:
        if (ae(ve), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (pe && Je !== null && n.mode & 1 && !(n.flags & 128)) us(), _t(), n.flags |= 98560, o = !1;
          else if (o = Gr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(m(317));
              o[yn] = n;
            } else _t(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Me(n), o = !1;
          } else cn !== null && (mi(cn), cn = null), o = !0;
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || ve.current & 1 ? Ne === 0 && (Ne = 3) : yi())), n.updateQueue !== null && (n.flags |= 4), Me(n), null);
      case 4:
        return Pt(), ri(e, n), e === null && er(n.stateNode.containerInfo), Me(n), null;
      case 10:
        return Ro(n.type._context), Me(n), null;
      case 17:
        return Be(n.type) && Qr(), Me(n), null;
      case 19:
        if (ae(ve), o = n.memoizedState, o === null) return Me(n), null;
        if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) dr(o, !1);
        else {
          if (Ne !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (i = tl(e), i !== null) {
              for (n.flags |= 128, dr(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return ue(ve, ve.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ke() > Rt && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = tl(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), dr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !pe) return Me(n), null;
          } else 2 * ke() - o.renderingStartTime > Rt && t !== 1073741824 && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = ke(), n.sibling = null, t = ve.current, ue(ve, r ? t & 1 | 2 : t & 1), n) : (Me(n), null);
      case 22:
      case 23:
        return vi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? be & 1073741824 && (Me(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Me(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function yf(e, n) {
    switch (xo(n), n.tag) {
      case 1:
        return Be(n.type) && Qr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Pt(), ae(Ve), ae(Oe), Uo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Do(n), null;
      case 13:
        if (ae(ve), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          _t();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ae(ve), null;
      case 4:
        return Pt(), null;
      case 10:
        return Ro(n.type._context), null;
      case 22:
      case 23:
        return vi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, De = !1, gf = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function Lt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      Se(e, n, r);
    }
    else t.current = null;
  }
  function li(e, n, t) {
    try {
      t();
    } catch (r) {
      Se(e, n, r);
    }
  }
  var oa = !1;
  function wf(e, n) {
    if (vo = Rr, e = Fu(), uo(e)) {
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
          var i = 0, u = -1, s = -1, p = 0, y = 0, w = e, h = null;
          n: for (; ; ) {
            for (var E; w !== t || l !== 0 && w.nodeType !== 3 || (u = i + l), w !== o || r !== 0 && w.nodeType !== 3 || (s = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (E = w.firstChild) !== null; )
              h = w, w = E;
            for (; ; ) {
              if (w === e) break n;
              if (h === t && ++p === l && (u = i), h === o && ++y === r && (s = i), (E = w.nextSibling) !== null) break;
              w = h, h = w.parentNode;
            }
            w = E;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (yo = { focusedElem: e, selectionRange: t }, Rr = !1, _ = n; _ !== null; ) if (n = _, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, _ = e;
    else for (; _ !== null; ) {
      n = _;
      try {
        var x = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (x !== null) {
              var N = x.memoizedProps, Ee = x.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? N : fn(n.type, N), Ee);
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
            throw Error(m(163));
        }
      } catch (S) {
        Se(n, n.return, S);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, _ = e;
        break;
      }
      _ = n.return;
    }
    return x = oa, oa = !1, x;
  }
  function pr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && li(n, t, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
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
  function oi(e) {
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
  function ia(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, ia(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[yn], delete n[tr], delete n[ko], delete n[ef], delete n[nf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ua(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function sa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ua(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ii(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (ii(e, n, t), e = e.sibling; e !== null; ) ii(e, n, t), e = e.sibling;
  }
  function ui(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ui(e, n, t), e = e.sibling; e !== null; ) ui(e, n, t), e = e.sibling;
  }
  var Re = null, dn = !1;
  function Bn(e, n, t) {
    for (t = t.child; t !== null; ) aa(e, n, t), t = t.sibling;
  }
  function aa(e, n, t) {
    if (vn && typeof vn.onCommitFiberUnmount == "function") try {
      vn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        De || Lt(t, n);
      case 6:
        var r = Re, l = dn;
        Re = null, Bn(e, n, t), Re = r, dn = l, Re !== null && (dn ? (e = Re, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Re.removeChild(t.stateNode));
        break;
      case 18:
        Re !== null && (dn ? (e = Re, t = t.stateNode, e.nodeType === 8 ? So(e.parentNode, t) : e.nodeType === 1 && So(e, t), Qt(e)) : So(Re, t.stateNode));
        break;
      case 4:
        r = Re, l = dn, Re = t.stateNode.containerInfo, dn = !0, Bn(e, n, t), Re = r, dn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!De && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && li(t, n, i), l = l.next;
          } while (l !== r);
        }
        Bn(e, n, t);
        break;
      case 1:
        if (!De && (Lt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          Se(t, n, u);
        }
        Bn(e, n, t);
        break;
      case 21:
        Bn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (De = (r = De) || t.memoizedState !== null, Bn(e, n, t), De = r) : Bn(e, n, t);
        break;
      default:
        Bn(e, n, t);
    }
  }
  function ca(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new gf()), n.forEach(function(r) {
        var l = zf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function pn(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, i = n, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              Re = u.stateNode, dn = !1;
              break e;
            case 3:
              Re = u.stateNode.containerInfo, dn = !0;
              break e;
            case 4:
              Re = u.stateNode.containerInfo, dn = !0;
              break e;
          }
          u = u.return;
        }
        if (Re === null) throw Error(m(160));
        aa(o, i, l), Re = null, dn = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        Se(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) fa(n, e), n = n.sibling;
  }
  function fa(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(n, e), Sn(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (N) {
            Se(e, e.return, N);
          }
          try {
            pr(5, e, e.return);
          } catch (N) {
            Se(e, e.return, N);
          }
        }
        break;
      case 1:
        pn(n, e), Sn(e), r & 512 && t !== null && Lt(t, t.return);
        break;
      case 5:
        if (pn(n, e), Sn(e), r & 512 && t !== null && Lt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            jt(l, "");
          } catch (N) {
            Se(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && o.type === "radio" && o.name != null && $i(l, o), Fl(u, i);
            var p = Fl(u, o);
            for (i = 0; i < s.length; i += 2) {
              var y = s[i], w = s[i + 1];
              y === "style" ? Yi(l, w) : y === "dangerouslySetInnerHTML" ? Qi(l, w) : y === "children" ? jt(l, w) : M(l, y, w, p);
            }
            switch (u) {
              case "input":
                Il(l, o);
                break;
              case "textarea":
                Bi(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null ? st(l, !!o.multiple, E, !1) : h !== !!o.multiple && (o.defaultValue != null ? st(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : st(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[tr] = o;
          } catch (N) {
            Se(e, e.return, N);
          }
        }
        break;
      case 6:
        if (pn(n, e), Sn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (N) {
            Se(e, e.return, N);
          }
        }
        break;
      case 3:
        if (pn(n, e), Sn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Qt(n.containerInfo);
        } catch (N) {
          Se(e, e.return, N);
        }
        break;
      case 4:
        pn(n, e), Sn(e);
        break;
      case 13:
        pn(n, e), Sn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ci = ke())), r & 4 && ca(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (De = (p = De) || y, pn(n, e), De = p) : pn(n, e), Sn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (_ = e, y = e.child; y !== null; ) {
            for (w = _ = y; _ !== null; ) {
              switch (h = _, E = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, h, h.return);
                  break;
                case 1:
                  Lt(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    r = h, t = h.return;
                    try {
                      n = r, x.props = n.memoizedProps, x.state = n.memoizedState, x.componentWillUnmount();
                    } catch (N) {
                      Se(r, t, N);
                    }
                  }
                  break;
                case 5:
                  Lt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ma(w);
                    continue;
                  }
              }
              E !== null ? (E.return = h, _ = E) : ma(w);
            }
            y = y.sibling;
          }
          e: for (y = null, w = e; ; ) {
            if (w.tag === 5) {
              if (y === null) {
                y = w;
                try {
                  l = w.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = w.stateNode, s = w.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ki("display", i));
                } catch (N) {
                  Se(e, e.return, N);
                }
              }
            } else if (w.tag === 6) {
              if (y === null) try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps;
              } catch (N) {
                Se(e, e.return, N);
              }
            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
              w.child.return = w, w = w.child;
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              y === w && (y = null), w = w.return;
            }
            y === w && (y = null), w.sibling.return = w.return, w = w.sibling;
          }
        }
        break;
      case 19:
        pn(n, e), Sn(e), r & 4 && ca(e);
        break;
      case 21:
        break;
      default:
        pn(
          n,
          e
        ), Sn(e);
    }
  }
  function Sn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ua(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (jt(l, ""), r.flags &= -33);
            var o = sa(e);
            ui(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = sa(e);
            ii(e, u, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        Se(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Sf(e, n, t) {
    _ = e, da(e);
  }
  function da(e, n, t) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var l = _, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || De;
          u = fl;
          var p = De;
          if (fl = i, (De = s) && !p) for (_ = l; _ !== null; ) i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? ha(l) : s !== null ? (s.return = i, _ = s) : ha(l);
          for (; o !== null; ) _ = o, da(o), o = o.sibling;
          _ = l, fl = u, De = p;
        }
        pa(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : pa(e);
    }
  }
  function pa(e) {
    for (; _ !== null; ) {
      var n = _;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              De || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !De) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : fn(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = n.updateQueue;
              o !== null && ms(n, o, r);
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
                ms(n, i, t);
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
                var p = n.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var w = y.dehydrated;
                    w !== null && Qt(w);
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
              throw Error(m(163));
          }
          De || n.flags & 512 && oi(n);
        } catch (h) {
          Se(n, n.return, h);
        }
      }
      if (n === e) {
        _ = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, _ = t;
        break;
      }
      _ = n.return;
    }
  }
  function ma(e) {
    for (; _ !== null; ) {
      var n = _;
      if (n === e) {
        _ = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, _ = t;
        break;
      }
      _ = n.return;
    }
  }
  function ha(e) {
    for (; _ !== null; ) {
      var n = _;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              Se(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                Se(n, l, s);
              }
            }
            var o = n.return;
            try {
              oi(n);
            } catch (s) {
              Se(n, o, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              oi(n);
            } catch (s) {
              Se(n, i, s);
            }
        }
      } catch (s) {
        Se(n, n.return, s);
      }
      if (n === e) {
        _ = null;
        break;
      }
      var u = n.sibling;
      if (u !== null) {
        u.return = n.return, _ = u;
        break;
      }
      _ = n.return;
    }
  }
  var kf = Math.ceil, pl = D.ReactCurrentDispatcher, si = D.ReactCurrentOwner, ln = D.ReactCurrentBatchConfig, K = 0, ze = null, _e = null, Ie = 0, be = 0, Tt = Fn(0), Ne = 0, mr = null, rt = 0, ml = 0, ai = 0, hr = null, We = null, ci = 0, Rt = 1 / 0, Ln = null, hl = !1, fi = null, Hn = null, vl = !1, Wn = null, yl = 0, vr = 0, di = null, gl = -1, wl = 0;
  function Ue() {
    return K & 6 ? ke() : gl !== -1 ? gl : gl = ke();
  }
  function Qn(e) {
    return e.mode & 1 ? K & 2 && Ie !== 0 ? Ie & -Ie : rf.transition !== null ? (wl === 0 && (wl = su()), wl) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yu(e.type)), e) : 1;
  }
  function mn(e, n, t, r) {
    if (50 < vr) throw vr = 0, di = null, Error(m(185));
    At(e, t, r), (!(K & 2) || e !== ze) && (e === ze && (!(K & 2) && (ml |= t), Ne === 4 && Kn(e, Ie)), Qe(e, r), t === 1 && K === 0 && !(n.mode & 1) && (Rt = ke() + 500, Yr && $n()));
  }
  function Qe(e, n) {
    var t = e.callbackNode;
    rc(e, n);
    var r = zr(e, e === ze ? Ie : 0);
    if (r === 0) t !== null && ou(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && ou(t), n === 1) e.tag === 0 ? tf(ya.bind(null, e)) : ts(ya.bind(null, e)), Jc(function() {
        !(K & 6) && $n();
      }), t = null;
      else {
        switch (au(r)) {
          case 1:
            t = Wl;
            break;
          case 4:
            t = iu;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = uu;
            break;
          default:
            t = Cr;
        }
        t = xa(t, va.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function va(e, n) {
    if (gl = -1, wl = 0, K & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (It() && e.callbackNode !== t) return null;
    var r = zr(e, e === ze ? Ie : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
    else {
      n = r;
      var l = K;
      K |= 2;
      var o = wa();
      (ze !== e || Ie !== n) && (Ln = null, Rt = ke() + 500, ot(e, n));
      do
        try {
          Cf();
          break;
        } catch (u) {
          ga(e, u);
        }
      while (!0);
      To(), pl.current = o, K = l, _e !== null ? n = 0 : (ze = null, Ie = 0, n = Ne);
    }
    if (n !== 0) {
      if (n === 2 && (l = Ql(e), l !== 0 && (r = l, n = pi(e, l))), n === 1) throw t = mr, ot(e, 0), Kn(e, r), Qe(e, ke()), t;
      if (n === 6) Kn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Ef(l) && (n = Sl(e, r), n === 2 && (o = Ql(e), o !== 0 && (r = o, n = pi(e, o))), n === 1)) throw t = mr, ot(e, 0), Kn(e, r), Qe(e, ke()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            it(e, We, Ln);
            break;
          case 3:
            if (Kn(e, r), (r & 130023424) === r && (n = ci + 500 - ke(), 10 < n)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ue(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = wo(it.bind(null, e, We, Ln), n);
              break;
            }
            it(e, We, Ln);
            break;
          case 4:
            if (Kn(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - sn(r);
              o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = wo(it.bind(null, e, We, Ln), r);
              break;
            }
            it(e, We, Ln);
            break;
          case 5:
            it(e, We, Ln);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Qe(e, ke()), e.callbackNode === t ? va.bind(null, e) : null;
  }
  function pi(e, n) {
    var t = hr;
    return e.current.memoizedState.isDehydrated && (ot(e, n).flags |= 256), e = Sl(e, n), e !== 2 && (n = We, We = t, n !== null && mi(n)), e;
  }
  function mi(e) {
    We === null ? We = e : We.push.apply(We, e);
  }
  function Ef(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!an(o(), l)) return !1;
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
  function Kn(e, n) {
    for (n &= ~ai, n &= ~ml, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - sn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ya(e) {
    if (K & 6) throw Error(m(327));
    It();
    var n = zr(e, 0);
    if (!(n & 1)) return Qe(e, ke()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Ql(e);
      r !== 0 && (n = r, t = pi(e, r));
    }
    if (t === 1) throw t = mr, ot(e, 0), Kn(e, n), Qe(e, ke()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, it(e, We, Ln), Qe(e, ke()), null;
  }
  function hi(e, n) {
    var t = K;
    K |= 1;
    try {
      return e(n);
    } finally {
      K = t, K === 0 && (Rt = ke() + 500, Yr && $n());
    }
  }
  function lt(e) {
    Wn !== null && Wn.tag === 0 && !(K & 6) && It();
    var n = K;
    K |= 1;
    var t = ln.transition, r = ne;
    try {
      if (ln.transition = null, ne = 1, e) return e();
    } finally {
      ne = r, ln.transition = t, K = n, !(K & 6) && $n();
    }
  }
  function vi() {
    be = Tt.current, ae(Tt);
  }
  function ot(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Zc(t)), _e !== null) for (t = _e.return; t !== null; ) {
      var r = t;
      switch (xo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Pt(), ae(Ve), ae(Oe), Uo();
          break;
        case 5:
          Do(r);
          break;
        case 4:
          Pt();
          break;
        case 13:
          ae(ve);
          break;
        case 19:
          ae(ve);
          break;
        case 10:
          Ro(r.type._context);
          break;
        case 22:
        case 23:
          vi();
      }
      t = t.return;
    }
    if (ze = e, _e = e = Yn(e.current, null), Ie = be = n, Ne = 0, mr = null, ai = ml = rt = 0, We = hr = null, et !== null) {
      for (n = 0; n < et.length; n++) if (t = et[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        t.pending = r;
      }
      et = null;
    }
    return e;
  }
  function ga(e, n) {
    do {
      var t = _e;
      try {
        if (To(), rl.current = ul, ll) {
          for (var r = ye.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (tt = 0, Pe = xe = ye = null, sr = !1, ar = 0, si.current = null, t === null || t.return === null) {
          Ne = 1, mr = n, _e = null;
          break;
        }
        e: {
          var o = e, i = t.return, u = t, s = n;
          if (n = Ie, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = u, w = y.tag;
            if (!(y.mode & 1) && (w === 0 || w === 11 || w === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var E = Hs(i);
            if (E !== null) {
              E.flags &= -257, Ws(E, i, u, o, n), E.mode & 1 && Bs(o, p, n), n = E, s = p;
              var x = n.updateQueue;
              if (x === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(s), n.updateQueue = N;
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Bs(o, p, n), yi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (pe && u.mode & 1) {
            var Ee = Hs(i);
            if (Ee !== null) {
              !(Ee.flags & 65536) && (Ee.flags |= 256), Ws(Ee, i, u, o, n), zo(zt(s, u));
              break e;
            }
          }
          o = s = zt(s, u), Ne !== 4 && (Ne = 2), hr === null ? hr = [o] : hr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = As(o, s, n);
                ps(o, f);
                break e;
              case 1:
                u = s;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Hn === null || !Hn.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var S = Vs(o, u, n);
                  ps(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ka(t);
      } catch (P) {
        n = P, _e === t && t !== null && (_e = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function wa() {
    var e = pl.current;
    return pl.current = ul, e === null ? ul : e;
  }
  function yi() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4), ze === null || !(rt & 268435455) && !(ml & 268435455) || Kn(ze, Ie);
  }
  function Sl(e, n) {
    var t = K;
    K |= 2;
    var r = wa();
    (ze !== e || Ie !== n) && (Ln = null, ot(e, n));
    do
      try {
        _f();
        break;
      } catch (l) {
        ga(e, l);
      }
    while (!0);
    if (To(), K = t, pl.current = r, _e !== null) throw Error(m(261));
    return ze = null, Ie = 0, Ne;
  }
  function _f() {
    for (; _e !== null; ) Sa(_e);
  }
  function Cf() {
    for (; _e !== null && !Xa(); ) Sa(_e);
  }
  function Sa(e) {
    var n = Ca(e.alternate, e, be);
    e.memoizedProps = e.pendingProps, n === null ? ka(e) : _e = n, si.current = null;
  }
  function ka(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = yf(t, n), t !== null) {
          t.flags &= 32767, _e = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ne = 6, _e = null;
          return;
        }
      } else if (t = vf(t, n, be), t !== null) {
        _e = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        _e = n;
        return;
      }
      _e = n = e;
    } while (n !== null);
    Ne === 0 && (Ne = 5);
  }
  function it(e, n, t) {
    var r = ne, l = ln.transition;
    try {
      ln.transition = null, ne = 1, xf(e, n, t, r);
    } finally {
      ln.transition = l, ne = r;
    }
    return null;
  }
  function xf(e, n, t, r) {
    do
      It();
    while (Wn !== null);
    if (K & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (lc(e, o), e === ze && (_e = ze = null, Ie = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, xa(Cr, function() {
      return It(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = ln.transition, ln.transition = null;
      var i = ne;
      ne = 1;
      var u = K;
      K |= 4, si.current = null, wf(e, t), fa(t, e), Wc(yo), Rr = !!vo, yo = vo = null, e.current = t, Sf(t), qa(), K = u, ne = i, ln.transition = o;
    } else e.current = t;
    if (vl && (vl = !1, Wn = e, yl = l), o = e.pendingLanes, o === 0 && (Hn = null), Ja(t.stateNode), Qe(e, ke()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = fi, fi = null, e;
    return yl & 1 && e.tag !== 0 && It(), o = e.pendingLanes, o & 1 ? e === di ? vr++ : (vr = 0, di = e) : vr = 0, $n(), null;
  }
  function It() {
    if (Wn !== null) {
      var e = au(yl), n = ln.transition, t = ne;
      try {
        if (ln.transition = null, ne = 16 > e ? 16 : e, Wn === null) var r = !1;
        else {
          if (e = Wn, Wn = null, yl = 0, K & 6) throw Error(m(331));
          var l = K;
          for (K |= 4, _ = e.current; _ !== null; ) {
            var o = _, i = o.child;
            if (_.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (_ = p; _ !== null; ) {
                    var y = _;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, o);
                    }
                    var w = y.child;
                    if (w !== null) w.return = y, _ = w;
                    else for (; _ !== null; ) {
                      y = _;
                      var h = y.sibling, E = y.return;
                      if (ia(y), y === p) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = E, _ = h;
                        break;
                      }
                      _ = E;
                    }
                  }
                }
                var x = o.alternate;
                if (x !== null) {
                  var N = x.child;
                  if (N !== null) {
                    x.child = null;
                    do {
                      var Ee = N.sibling;
                      N.sibling = null, N = Ee;
                    } while (N !== null);
                  }
                }
                _ = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, _ = i;
            else e: for (; _ !== null; ) {
              if (o = _, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  pr(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, _ = f;
                break e;
              }
              _ = o.return;
            }
          }
          var a = e.current;
          for (_ = a; _ !== null; ) {
            i = _;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) d.return = i, _ = d;
            else e: for (i = a; _ !== null; ) {
              if (u = _, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, u);
                }
              } catch (P) {
                Se(u, u.return, P);
              }
              if (u === i) {
                _ = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                S.return = u.return, _ = S;
                break e;
              }
              _ = u.return;
            }
          }
          if (K = l, $n(), vn && typeof vn.onPostCommitFiberRoot == "function") try {
            vn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ne = t, ln.transition = n;
      }
    }
    return !1;
  }
  function Ea(e, n, t) {
    n = zt(t, n), n = As(e, n, 1), e = Vn(e, n, 1), n = Ue(), e !== null && (At(e, 1, n), Qe(e, n));
  }
  function Se(e, n, t) {
    if (e.tag === 3) Ea(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        Ea(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Hn === null || !Hn.has(r))) {
          e = zt(t, e), e = Vs(n, e, 1), n = Vn(n, e, 1), e = Ue(), n !== null && (At(n, 1, e), Qe(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function Nf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Ue(), e.pingedLanes |= e.suspendedLanes & t, ze === e && (Ie & t) === t && (Ne === 4 || Ne === 3 && (Ie & 130023424) === Ie && 500 > ke() - ci ? ot(e, 0) : ai |= t), Qe(e, n);
  }
  function _a(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = Ue();
    e = Nn(e, n), e !== null && (At(e, n, t), Qe(e, t));
  }
  function Pf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), _a(e, t);
  }
  function zf(e, n) {
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
        throw Error(m(314));
    }
    r !== null && r.delete(n), _a(e, t);
  }
  var Ca;
  Ca = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Ve.current) He = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return He = !1, hf(e, n, t);
      He = !!(e.flags & 131072);
    }
    else He = !1, pe && n.flags & 1048576 && rs(n, qr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = St(n, Oe.current);
        Nt(n, t), l = Vo(null, n, r, e, l, t);
        var o = Bo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Be(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, jo(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Xo(n, r, e, t), n = Jo(null, n, r, !0, o, t)) : (n.tag = 0, pe && o && Co(n), Fe(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Tf(r), e = fn(r, e), l) {
            case 0:
              n = Zo(null, n, r, e, t);
              break e;
            case 1:
              n = Gs(null, n, r, e, t);
              break e;
            case 11:
              n = Qs(null, n, r, e, t);
              break e;
            case 14:
              n = Ks(null, n, r, fn(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : fn(r, l), Zo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : fn(r, l), Gs(e, n, r, l, t);
      case 3:
        e: {
          if (Zs(n), e === null) throw Error(m(387));
          r = n.pendingProps, o = n.memoizedState, l = o.element, ds(e, n), nl(n, r, null, t);
          var i = n.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = zt(Error(m(423)), n), n = Js(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = zt(Error(m(424)), n), n = Js(e, n, r, t, l);
            break e;
          } else for (Je = Dn(n.stateNode.containerInfo.firstChild), Ze = n, pe = !0, cn = null, t = cs(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (_t(), r === l) {
              n = zn(e, n, t);
              break e;
            }
            Fe(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return hs(n), e === null && Po(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, go(r, l) ? i = null : o !== null && go(r, o) && (n.flags |= 32), qs(e, n), Fe(e, n, i, t), n.child;
      case 6:
        return e === null && Po(n), null;
      case 13:
        return bs(e, n, t);
      case 4:
        return Mo(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Ct(n, null, r, t) : Fe(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : fn(r, l), Qs(e, n, r, l, t);
      case 7:
        return Fe(e, n, n.pendingProps, t), n.child;
      case 8:
        return Fe(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Fe(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, ue(Jr, r._currentValue), r._currentValue = i, o !== null) if (an(o.value, i)) {
            if (o.children === l.children && !Ve.current) {
              n = zn(e, n, t);
              break e;
            }
          } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = Pn(-1, t & -t), s.tag = 2;
                    var p = o.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), Io(
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
              if (i = o.return, i === null) throw Error(m(341));
              i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Io(i, t, n), i = o.sibling;
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
          Fe(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Nt(n, t), l = tn(l), r = r(l), n.flags |= 1, Fe(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = fn(r, n.pendingProps), l = fn(r.type, l), Ks(e, n, r, l, t);
      case 15:
        return Ys(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : fn(r, l), cl(e, n), n.tag = 1, Be(r) ? (e = !0, Kr(n)) : e = !1, Nt(n, t), Us(n, r, l), Xo(n, r, l, t), Jo(null, n, r, !0, e, t);
      case 19:
        return na(e, n, t);
      case 22:
        return Xs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function xa(e, n) {
    return lu(e, n);
  }
  function Lf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function on(e, n, t, r) {
    return new Lf(e, n, t, r);
  }
  function gi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tf(e) {
    if (typeof e == "function") return gi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ye) return 11;
      if (e === hn) return 14;
    }
    return 2;
  }
  function Yn(e, n) {
    var t = e.alternate;
    return t === null ? (t = on(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") gi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case te:
        return ut(t.children, l, o, n);
      case ge:
        i = 8, l |= 8;
        break;
      case he:
        return e = on(12, t, n, l | 2), e.elementType = he, e.lanes = o, e;
      case Xe:
        return e = on(13, t, n, l), e.elementType = Xe, e.lanes = o, e;
      case un:
        return e = on(19, t, n, l), e.elementType = un, e.lanes = o, e;
      case we:
        return El(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case $e:
            i = 10;
            break e;
          case kn:
            i = 9;
            break e;
          case Ye:
            i = 11;
            break e;
          case hn:
            i = 14;
            break e;
          case Ae:
            i = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = on(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function ut(e, n, t, r) {
    return e = on(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = on(22, e, r, n), e.elementType = we, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function wi(e, n, t) {
    return e = on(6, e, null, n), e.lanes = t, e;
  }
  function Si(e, n, t) {
    return n = on(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Rf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ki(e, n, t, r, l, o, i, u, s) {
    return e = new Rf(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = on(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jo(o), e;
  }
  function If(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: H, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function Na(e) {
    if (!e) return Un;
    e = e._reactInternals;
    e: {
      if (qn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Be(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Be(t)) return es(e, t, n);
    }
    return n;
  }
  function Pa(e, n, t, r, l, o, i, u, s) {
    return e = ki(t, r, !0, e, l, o, i, u, s), e.context = Na(null), t = e.current, r = Ue(), l = Qn(t), o = Pn(r, l), o.callback = n ?? null, Vn(t, o, l), e.current.lanes = l, At(e, l, r), Qe(e, r), e;
  }
  function _l(e, n, t, r) {
    var l = n.current, o = Ue(), i = Qn(l);
    return t = Na(t), n.context === null ? n.context = t : n.pendingContext = t, n = Pn(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Vn(l, n, i), e !== null && (mn(e, l, i, o), el(e, l, i)), i;
  }
  function Cl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function za(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function Ei(e, n) {
    za(e, n), (e = e.alternate) && za(e, n);
  }
  var La = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function _i(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = _i.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    _l(e, n, null, null);
  }, xl.prototype.unmount = _i.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      lt(function() {
        _l(null, e, null, null);
      }), n[En] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = du();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < On.length && n !== 0 && n < On[t].priority; t++) ;
      On.splice(t, 0, e), t === 0 && hu(e);
    }
  };
  function Ci(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ta() {
  }
  function Of(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var p = Cl(i);
          o.call(p);
        };
      }
      var i = Pa(n, r, e, 0, null, !1, !1, "", Ta);
      return e._reactRootContainer = i, e[En] = i.current, er(e.nodeType === 8 ? e.parentNode : e), lt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var p = Cl(s);
        u.call(p);
      };
    }
    var s = ki(e, 0, !1, null, null, !1, !1, "", Ta);
    return e._reactRootContainer = s, e[En] = s.current, er(e.nodeType === 8 ? e.parentNode : e), lt(function() {
      _l(n, s, t, r);
    }), s;
  }
  function Pl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = Cl(i);
          u.call(s);
        };
      }
      _l(n, i, e, l);
    } else i = Of(t, n, e, l, r);
    return Cl(i);
  }
  cu = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = $t(n.pendingLanes);
          t !== 0 && (Yl(n, t | 1), Qe(n, ke()), !(K & 6) && (Rt = ke() + 500, $n()));
        }
        break;
      case 13:
        lt(function() {
          var r = Nn(e, 1);
          if (r !== null) {
            var l = Ue();
            mn(r, e, 1, l);
          }
        }), Ei(e, 1);
    }
  }, Xl = function(e) {
    if (e.tag === 13) {
      var n = Nn(e, 134217728);
      if (n !== null) {
        var t = Ue();
        mn(n, e, 134217728, t);
      }
      Ei(e, 134217728);
    }
  }, fu = function(e) {
    if (e.tag === 13) {
      var n = Qn(e), t = Nn(e, n);
      if (t !== null) {
        var r = Ue();
        mn(t, e, n, r);
      }
      Ei(e, n);
    }
  }, du = function() {
    return ne;
  }, pu = function(e, n) {
    var t = ne;
    try {
      return ne = e, n();
    } finally {
      ne = t;
    }
  }, Al = function(e, n, t) {
    switch (n) {
      case "input":
        if (Il(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              Fi(r), Il(r, l);
            }
          }
        }
        break;
      case "textarea":
        Bi(e, t);
        break;
      case "select":
        n = t.value, n != null && st(e, !!t.multiple, n, !1);
    }
  }, Zi = hi, Ji = lt;
  var jf = { usingClientEntryPoint: !1, Events: [rr, gt, Wr, qi, Gi, hi] }, yr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: D.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = tu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      xr = zl.inject(Mf), vn = zl;
    } catch {
    }
  }
  return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf, Ke.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ci(n)) throw Error(m(200));
    return If(e, n, null, t);
  }, Ke.createRoot = function(e, n) {
    if (!Ci(e)) throw Error(m(299));
    var t = !1, r = "", l = La;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = ki(e, 1, !1, null, null, t, !1, r, l), e[En] = n.current, er(e.nodeType === 8 ? e.parentNode : e), new _i(n);
  }, Ke.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = tu(n), e = e === null ? null : e.stateNode, e;
  }, Ke.flushSync = function(e) {
    return lt(e);
  }, Ke.hydrate = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, Ke.hydrateRoot = function(e, n, t) {
    if (!Ci(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", i = La;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = Pa(n, null, e, 1, t ?? null, l, !1, o, i), e[En] = n.current, er(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new xl(n);
  }, Ke.render = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, Ke.unmountComponentAtNode = function(e) {
    if (!Nl(e)) throw Error(m(40));
    return e._reactRootContainer ? (lt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[En] = null;
      });
    }), !0) : !1;
  }, Ke.unstable_batchedUpdates = hi, Ke.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Nl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, Ke.version = "18.3.1-next-f1338f8080-20240426", Ke;
}
var Ua;
function Wf() {
  if (Ua) return Pi.exports;
  Ua = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (L) {
        console.error(L);
      }
  }
  return g(), Pi.exports = Hf(), Pi.exports;
}
var $a;
function Qf() {
  if ($a) return Ll;
  $a = 1;
  var g = Wf();
  return Ll.createRoot = g.createRoot, Ll.hydrateRoot = g.hydrateRoot, Ll;
}
var Kf = Qf();
const Yf = /* @__PURE__ */ Ff(Kf), Tl = () => {
  const g = document.getElementById("product-info"), L = JSON.parse((g == null ? void 0 : g.textContent) || "{}");
  return window.shineon = window.shineon || {}, window.shineon.product_info = L, L;
}, Aa = () => {
  const g = Tl();
  return Xf(g);
}, Xf = (g) => {
  var L;
  return !g.shop_cf || !((L = g.shop_pt_id_obj) != null && L.custom_fields) ? [] : g.shop_pt_id_obj.custom_fields.map((m) => ({
    ...g.shop_cf[m.key],
    id: m
  }));
}, qf = {
  en: {
    errors: {
      invalid_character: " isn't available"
    }
  },
  fr: {
    errors: {
      invalid_character: " n'est pas disponible"
    }
  },
  es: {
    errors: {
      invalid_character: " no está disponible"
    }
  },
  de: {
    errors: {
      invalid_character: " ist nicht verfügbar"
    }
  },
  it: {
    errors: {
      invalid_character: " non è disponibile"
    }
  },
  pt: {
    errors: {
      invalid_character: " não está disponível"
    }
  },
  ua: {
    errors: {
      invalid_character: " недоступний"
    }
  },
  pl: {
    errors: {
      invalid_character: " jest niedostępny"
    }
  }
}, Mi = Tl();
let Ti = Mi.selected_variant;
const Oi = {
  get variantInputs() {
    return document.querySelectorAll(Mi.variant_id_input);
  }
}, Gf = () => {
  const g = document.querySelectorAll('form[action="/cart/add"]');
  return Array.from(g).map((L) => L.getAttribute("id"));
}, Zf = () => (Ti || Oi.variantInputs.forEach((g) => {
  if (g) {
    const L = parseInt(g.value);
    Ti = Mi.product.variants.find((m) => m.id === L);
  }
}), Ti), Jf = (g) => {
  clearTimeout(window.variantChangeTimeout), window.variantChangeTimeout = setTimeout(() => {
    g();
  }, 300);
}, bf = (g) => (Oi.variantInputs.forEach((L) => {
  L.addEventListener("change", g);
}), () => {
  Oi.variantInputs.forEach((L) => {
    L.removeEventListener("change", g);
  });
}), ed = ({ product_cf: g, required: L, formId: m, onBeforeInput: Ce, onChange: F }) => {
  const ce = (W, re) => ({
    type: "text",
    id: W.id.key,
    name: `properties[${W.name}]`,
    autoComplete: "off",
    placeholder: W.placeholder,
    form: re,
    required: L,
    className: `so-field__input field__input ${W.class || ""}`,
    minLength: W.minlength > 0 ? W.minlength : void 0,
    maxLength: W.maxlength > 0 ? W.maxlength : 20,
    onBeforeInput: Ce,
    onChange: F
  });
  return /* @__PURE__ */ Y.jsx("input", { ...ce(g, m) });
}, Ri = [
  {
    type: "birthstone"
  },
  {
    type: "heart"
  }
], nd = ({
  formId: g,
  availableAccessories: L,
  currentVariant: m,
  InputField: Ce,
  selectedAccessories: F,
  setSelectedAccessories: ce,
  accessoriesCF: W
}) => {
  const { state: re, dispatch: B } = Te.useContext(Di), fe = Tl(), me = Aa(), [J, X] = Te.useState([]), le = Te.useMemo(
    () => {
      var M;
      return ((M = fe.variant_metafields[m.id]) == null ? void 0 : M.engravings) || 0;
    },
    [m.id, fe.variant_metafields]
  ), $ = Te.useMemo(
    () => me.filter(
      (M) => M.field_type === "engraving" && F.some((D) => {
        var Q;
        return (Q = M.class) == null ? void 0 : Q.includes(D.type);
      })
    ),
    [me, F]
  ), z = (M, D) => {
    if (F.length >= le) return;
    const Q = { type: M, option: D };
    ce([...F, Q]), oe(!1);
    const H = F.length;
    document.querySelectorAll('form[action="/cart/add"]').forEach((ge) => {
      const he = document.createElement("input");
      he.type = "hidden", he.name = `properties[${W[H].name}]`, he.value = D, ge.appendChild(he);
    });
  }, I = (M, D) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((te) => {
      const ge = te.querySelector(`input[name="properties[${D}]"]`);
      ge && ge.type === "hidden" && ge.remove();
      const he = te.querySelector(`input[name="properties[${W[M].name}]"]`);
      he && he.remove(), Array.from(te.querySelectorAll('input[name^="properties[Birthstone"]')).forEach((kn, Ye) => {
        Ye >= M && (kn.name = `properties[${W[Ye].name}]`);
      });
    });
    const H = [];
    $.slice(0, F.length).map((te, ge) => {
      const he = te.name;
      D !== he && H.push(he);
    }), X(H), ce((te) => te.filter((ge, he) => he !== M));
  };
  Te.useEffect(() => bf(() => {
    var H;
    const Q = ((H = fe.variant_metafields[m.id]) == null ? void 0 : H.engravings) || 0;
    F.length > Q && ce((te) => te.slice(0, Q));
  }), []), Te.useEffect(() => {
    var D;
    const M = ((D = fe.variant_metafields[m.id]) == null ? void 0 : D.engravings) || 0;
    ce((Q) => Q.slice(0, M));
  }, [m]);
  const [b, oe] = Te.useState(!1);
  return Te.useEffect(() => {
    const M = document.querySelectorAll('form[action="/cart/add"]');
    $.slice(0, F.length).map((Q, H) => {
      const te = Q.name, ge = document.querySelector(`input[name="properties[${te}]"]`);
      M.forEach((he) => {
        const $e = he.querySelector(`input[name="properties[${J[H]}]"]`);
        $e && ($e.name = `properties[${te}]`, ge.value = $e.value);
      }), X([]);
    });
    const D = (Q) => {
      F.length < le && (Q.preventDefault(), oe(!0));
    };
    return M.forEach((Q) => {
      const H = Q.querySelector('button[type="submit"]');
      H && H.addEventListener("click", D);
    }), () => {
      M.forEach((Q) => {
        const H = Q.querySelector('button[type="submit"]');
        H && H.removeEventListener("click", D);
      });
    };
  }, [F, le]), /* @__PURE__ */ Y.jsxs("div", { className: "so-accessories", children: [
    L.map((M) => /* @__PURE__ */ Y.jsxs(
      "div",
      {
        className: `so-${M.field_type}-container ${b && F.length < le ? "so-validation-error" : ""}`,
        children: [
          /* @__PURE__ */ Y.jsx("div", { className: "so-counter-wrap", children: /* @__PURE__ */ Y.jsxs("span", { children: [
            "Selected: ",
            F.length,
            " of ",
            le
          ] }) }),
          /* @__PURE__ */ Y.jsx("div", { className: "so-options-grid", children: /* @__PURE__ */ Y.jsx("ul", { className: "so-accessories-list", children: M.options.map((D) => {
            var Q;
            return /* @__PURE__ */ Y.jsxs("li", { children: [
              /* @__PURE__ */ Y.jsx(
                "input",
                {
                  type: "radio",
                  name: M.name,
                  value: D,
                  required: F.length < le,
                  style: { position: "absolute", opacity: 0 },
                  checked: F.some((H) => H.option === D),
                  onChange: () => z(M.field_type, D)
                }
              ),
              /* @__PURE__ */ Y.jsxs(
                "label",
                {
                  className: "so-accessory-option",
                  onClick: () => z(M.field_type, D),
                  "aria-disabled": F.length >= le,
                  children: [
                    M.field_type === "birthstone" && /* @__PURE__ */ Y.jsx(
                      "div",
                      {
                        className: `so-custom-field-birthstone-circle ${D} no-loop ${(Q = M.class) != null && Q.includes("engraving") ? "no-loop" : ""}`,
                        children: /* @__PURE__ */ Y.jsx("span", { class: "visually-hidden", children: D })
                      }
                    ),
                    /* @__PURE__ */ Y.jsx("span", { children: D })
                  ]
                }
              )
            ] }, D);
          }) }) })
        ]
      },
      M.field_type
    )),
    F.length > 0 && /* @__PURE__ */ Y.jsx("div", { className: "so-engraving-fields-container", children: $.slice(0, F.length).map((M, D) => {
      const Q = F[D], H = M.name;
      return /* @__PURE__ */ Y.jsxs("div", { className: "so-input-with-remove", children: [
        /* @__PURE__ */ Y.jsx(
          "button",
          {
            type: "button",
            className: "so-remove-acc",
            onClick: () => I(D, H),
            children: /* @__PURE__ */ Y.jsx(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ Y.jsx(
                  "path",
                  {
                    d: "M13 1L1 13M1 1L13 13",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ Y.jsx(
          Ce,
          {
            product_cf: {
              ...M,
              name: H,
              placeholder: `${M.label} ${Q.option}`
            },
            required: M.required,
            formId: g,
            dispatch: B,
            index: D,
            selectedAccessories: F,
            setSelectedAccessories: ce
          }
        )
      ] });
    }) })
  ] });
}, Di = Te.createContext(), td = (g, L) => {
  switch (L.type) {
    case "UPDATE_SYMBOL_COUNT":
      return {
        ...g,
        symbolCounts: {
          ...g.symbolCounts,
          [L.payload.id]: L.payload.count
        }
      };
    case "SET_ERROR":
      return {
        ...g,
        showNotification: L.payload.show,
        errorSymbol: L.payload.symbol
      };
    case "RESET_SYMBOL_COUNTS":
      return {
        ...g,
        symbolCounts: {}
      };
    default:
      return g;
  }
}, Ii = Te.memo(({ product_cf: g, required: L, formId: m, index: Ce, selectedAccessories: F, setSelectedAccessories: ce }) => {
  const { state: W, dispatch: re } = Te.useContext(Di), B = window.Shopify.locale, fe = (z) => {
    const I = g.pattern;
    I && (new RegExp(I).test(z.data) ? re({
      type: "SET_ERROR",
      payload: { show: !1, symbol: "" }
    }) : (z.preventDefault(), re({
      type: "SET_ERROR",
      payload: { show: !0, symbol: z.data }
    })));
  }, me = (z) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((b) => {
      let oe = b.querySelector(`input[name="${z.name}"]`);
      oe || (oe = document.createElement("input"), oe.type = "hidden", oe.name = z.name, b.appendChild(oe)), oe.value = z.value;
    });
  }, [J, X] = Te.useState({}), le = (z) => {
    const I = document.querySelectorAll('.so-hyper input[type="text"]'), b = {};
    I.forEach((oe) => {
      oe.required && !oe.value.length && (b[oe.name] = !0);
    }), X(b);
  }, $ = (z) => {
    X((I) => ({
      ...I,
      [z.target.name]: !1
    })), re({
      type: "UPDATE_SYMBOL_COUNT",
      payload: { id: g.id.key, count: z.target.value.length }
    }), Jf(() => {
      me(z.target);
    });
  };
  return Te.useEffect(() => {
    const z = document.querySelectorAll('form[action="/cart/add"]');
    return z.forEach((I) => {
      const b = I.querySelector('button[type="submit"]');
      b && b.addEventListener("click", le);
    }), () => {
      z.forEach((I) => {
        const b = I.querySelector('button[type="submit"]');
        b && b.removeEventListener("click", le);
      });
    };
  }, []), /* @__PURE__ */ Y.jsxs("div", { className: `so-field-wrapper ${J[`properties[${g.name}]`] ? "error" : ""}`, children: [
    /* @__PURE__ */ Y.jsx("label", { className: "so-form__label", children: g.name }),
    /* @__PURE__ */ Y.jsxs("div", { className: "so-field", children: [
      /* @__PURE__ */ Y.jsxs("div", { className: "so-input-counter-w", children: [
        /* @__PURE__ */ Y.jsx(
          ed,
          {
            product_cf: g,
            required: L,
            formId: m,
            onBeforeInput: fe,
            onChange: $
          }
        ),
        !W.showNotification && /* @__PURE__ */ Y.jsxs(
          "span",
          {
            className: `so-counter ${W.symbolCounts[g.id.key] ? "so-input-filled" : ""}`,
            children: [
              W.symbolCounts[g.id.key] || 0,
              "/",
              g.maxlength || 20
            ]
          }
        )
      ] }),
      W.showNotification && /* @__PURE__ */ Y.jsx("span", { className: "so-wrong-input-notification", children: `"${W.errorSymbol}"${qf[B].errors.invalid_character}` })
    ] })
  ] });
}), rd = () => {
  var le;
  const g = Tl(), L = Aa(), m = g.shop_info.sectionID ? "product-form-" + g.shop_info.sectionID : Gf(), [Ce, F] = Te.useState(Zf()), [ce, W] = Te.useState([]), [re, B] = Te.useReducer(td, {
    symbolCounts: {},
    showNotification: !1,
    errorSymbol: ""
  });
  Te.useEffect(() => {
    const $ = (b) => {
      F(
        g.product.variants.filter(
          (oe) => oe.id === parseInt(document.querySelector('[name="id"]').value)
        )[0]
      );
    }, z = g.trigger_selector ? g.trigger_selector : g.variant_id_input, I = document.querySelectorAll(z);
    return I.forEach((b) => b.addEventListener("change", $)), () => {
      I.forEach((b) => b.removeEventListener("change", $));
    };
  }, []);
  const fe = L.filter(
    ($) => $.field_type === "engraving" && $.required && !Ri.some((z) => {
      var I;
      return (I = $.class) == null ? void 0 : I.includes(z.type);
    })
  ), me = L.filter(
    ($) => $.field_type === "engraving" && !$.required && !Ri.some((z) => {
      var I;
      return (I = $.class) == null ? void 0 : I.includes(z.type);
    })
  ).slice(0, ((le = g.variant_metafields[Ce.id]) == null ? void 0 : le.engravings) || 0), J = L.filter(($) => Ri.some((z) => $.field_type === z.type)), X = L.filter(($) => $.field_type === "custom" && $.type != "none");
  return /* @__PURE__ */ Y.jsx(Di.Provider, { value: { state: re, dispatch: B }, children: /* @__PURE__ */ Y.jsxs("div", { className: "so-hyper so-tw", children: [
    fe.map(($, z) => /* @__PURE__ */ Y.jsx(
      Ii,
      {
        product_cf: $,
        required: !0,
        formId: m,
        dispatch: B
      },
      `required-${z}`
    )),
    me.map(($, z) => /* @__PURE__ */ Y.jsx(
      Ii,
      {
        product_cf: $,
        required: !0,
        formId: m,
        dispatch: B
      },
      `optional-${z}`
    )),
    J.length > 0 && /* @__PURE__ */ Y.jsx(
      nd,
      {
        formId: m,
        availableAccessories: J,
        currentVariant: Ce,
        InputField: Ii,
        selectedAccessories: ce,
        setSelectedAccessories: W,
        accessoriesCF: X
      }
    )
  ] }) });
};
document.addEventListener("DOMContentLoaded", () => {
  const g = document.getElementById("so-hyper");
  g && Yf.createRoot(g).render(
    /* @__PURE__ */ Y.jsx(Te.StrictMode, { children: /* @__PURE__ */ Y.jsx(rd, {}) })
  );
});

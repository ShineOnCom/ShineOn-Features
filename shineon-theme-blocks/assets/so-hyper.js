function Ff(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var xi = { exports: {} }, gr = {}, Ni = { exports: {} }, B = {};
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
  if (Ra) return B;
  Ra = 1;
  var g = Symbol.for("react.element"), z = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), _e = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), K = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), he = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function V(c) {
    return c === null || typeof c != "object" ? null : (c = Z && c[Z] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var W = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, I = {};
  function M(c, v, $) {
    this.props = c, this.context = v, this.refs = I, this.updater = $ || W;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, M.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function re() {
  }
  re.prototype = M.prototype;
  function L(c, v, $) {
    this.props = c, this.context = v, this.refs = I, this.updater = $ || W;
  }
  var A = L.prototype = new re();
  A.constructor = L, b(A, M.prototype), A.isPureReactComponent = !0;
  var D = Array.isArray, J = Object.prototype.hasOwnProperty, le = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ke(c, v, $) {
    var H, Y = {}, X = null, oe = null;
    if (v != null) for (H in v.ref !== void 0 && (oe = v.ref), v.key !== void 0 && (X = "" + v.key), v) J.call(v, H) && !ce.hasOwnProperty(H) && (Y[H] = v[H]);
    var ee = arguments.length - 2;
    if (ee === 1) Y.children = $;
    else if (1 < ee) {
      for (var fe = Array(ee), Ye = 0; Ye < ee; Ye++) fe[Ye] = arguments[Ye + 2];
      Y.children = fe;
    }
    if (c && c.defaultProps) for (H in ee = c.defaultProps, ee) Y[H] === void 0 && (Y[H] = ee[H]);
    return { $$typeof: g, type: c, key: X, ref: oe, props: Y, _owner: le.current };
  }
  function Qe(c, v) {
    return { $$typeof: g, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function Je(c) {
    return typeof c == "object" && c !== null && c.$$typeof === g;
  }
  function Xn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function($) {
      return v[$];
    });
  }
  var mn = /\/+/g;
  function Ke(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Xn("" + c.key) : v.toString(36);
  }
  function on(c, v, $, H, Y) {
    var X = typeof c;
    (X === "undefined" || X === "boolean") && (c = null);
    var oe = !1;
    if (c === null) oe = !0;
    else switch (X) {
      case "string":
      case "number":
        oe = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case g:
          case z:
            oe = !0;
        }
    }
    if (oe) return oe = c, Y = Y(oe), c = H === "" ? "." + Ke(oe, 0) : H, D(Y) ? ($ = "", c != null && ($ = c.replace(mn, "$&/") + "/"), on(Y, v, $, "", function(Ye) {
      return Ye;
    })) : Y != null && (Je(Y) && (Y = Qe(Y, $ + (!Y.key || oe && oe.key === Y.key ? "" : ("" + Y.key).replace(mn, "$&/") + "/") + c)), v.push(Y)), 1;
    if (oe = 0, H = H === "" ? "." : H + ":", D(c)) for (var ee = 0; ee < c.length; ee++) {
      X = c[ee];
      var fe = H + Ke(X, ee);
      oe += on(X, v, $, fe, Y);
    }
    else if (fe = V(c), typeof fe == "function") for (c = fe.call(c), ee = 0; !(X = c.next()).done; ) X = X.value, fe = H + Ke(X, ee++), oe += on(X, v, $, fe, Y);
    else if (X === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return oe;
  }
  function hn(c, v, $) {
    if (c == null) return c;
    var H = [], Y = 0;
    return on(c, H, "", "", function(X) {
      return v.call($, X, Y++);
    }), H;
  }
  function Ue(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function($) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = $);
      }, function($) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = $);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ye = { current: null }, k = { transition: null }, O = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: k, ReactCurrentOwner: le };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return B.Children = { map: hn, forEach: function(c, v, $) {
    hn(c, function() {
      v.apply(this, arguments);
    }, $);
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
    if (!Je(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, B.Component = M, B.Fragment = m, B.Profiler = F, B.PureComponent = L, B.StrictMode = _e, B.Suspense = U, B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, B.act = C, B.cloneElement = function(c, v, $) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var H = b({}, c.props), Y = c.key, X = c.ref, oe = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (X = v.ref, oe = le.current), v.key !== void 0 && (Y = "" + v.key), c.type && c.type.defaultProps) var ee = c.type.defaultProps;
      for (fe in v) J.call(v, fe) && !ce.hasOwnProperty(fe) && (H[fe] = v[fe] === void 0 && ee !== void 0 ? ee[fe] : v[fe]);
    }
    var fe = arguments.length - 2;
    if (fe === 1) H.children = $;
    else if (1 < fe) {
      ee = Array(fe);
      for (var Ye = 0; Ye < fe; Ye++) ee[Ye] = arguments[Ye + 2];
      H.children = ee;
    }
    return { $$typeof: g, type: c.type, key: Y, ref: X, props: H, _owner: oe };
  }, B.createContext = function(c) {
    return c = { $$typeof: K, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: ae, _context: c }, c.Consumer = c;
  }, B.createElement = ke, B.createFactory = function(c) {
    var v = ke.bind(null, c);
    return v.type = c, v;
  }, B.createRef = function() {
    return { current: null };
  }, B.forwardRef = function(c) {
    return { $$typeof: te, render: c };
  }, B.isValidElement = Je, B.lazy = function(c) {
    return { $$typeof: ve, _payload: { _status: -1, _result: c }, _init: Ue };
  }, B.memo = function(c, v) {
    return { $$typeof: he, type: c, compare: v === void 0 ? null : v };
  }, B.startTransition = function(c) {
    var v = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = v;
    }
  }, B.unstable_act = C, B.useCallback = function(c, v) {
    return ye.current.useCallback(c, v);
  }, B.useContext = function(c) {
    return ye.current.useContext(c);
  }, B.useDebugValue = function() {
  }, B.useDeferredValue = function(c) {
    return ye.current.useDeferredValue(c);
  }, B.useEffect = function(c, v) {
    return ye.current.useEffect(c, v);
  }, B.useId = function() {
    return ye.current.useId();
  }, B.useImperativeHandle = function(c, v, $) {
    return ye.current.useImperativeHandle(c, v, $);
  }, B.useInsertionEffect = function(c, v) {
    return ye.current.useInsertionEffect(c, v);
  }, B.useLayoutEffect = function(c, v) {
    return ye.current.useLayoutEffect(c, v);
  }, B.useMemo = function(c, v) {
    return ye.current.useMemo(c, v);
  }, B.useReducer = function(c, v, $) {
    return ye.current.useReducer(c, v, $);
  }, B.useRef = function(c) {
    return ye.current.useRef(c);
  }, B.useState = function(c) {
    return ye.current.useState(c);
  }, B.useSyncExternalStore = function(c, v, $) {
    return ye.current.useSyncExternalStore(c, v, $);
  }, B.useTransition = function() {
    return ye.current.useTransition();
  }, B.version = "18.3.1", B;
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
  var g = ji(), z = Symbol.for("react.element"), m = Symbol.for("react.fragment"), _e = Object.prototype.hasOwnProperty, F = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(te, U, he) {
    var ve, Z = {}, V = null, W = null;
    he !== void 0 && (V = "" + he), U.key !== void 0 && (V = "" + U.key), U.ref !== void 0 && (W = U.ref);
    for (ve in U) _e.call(U, ve) && !ae.hasOwnProperty(ve) && (Z[ve] = U[ve]);
    if (te && te.defaultProps) for (ve in U = te.defaultProps, U) Z[ve] === void 0 && (Z[ve] = U[ve]);
    return { $$typeof: z, type: te, key: V, ref: W, props: Z, _owner: F.current };
  }
  return gr.Fragment = m, gr.jsx = K, gr.jsxs = K, gr;
}
var ja;
function Vf() {
  return ja || (ja = 1, xi.exports = $f()), xi.exports;
}
var G = Vf(), Le = ji(), Ll = {}, Pi = { exports: {} }, We = {}, zi = { exports: {} }, Li = {};
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
function Af() {
  return Ma || (Ma = 1, function(g) {
    function z(k, O) {
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
    function _e(k) {
      if (k.length === 0) return null;
      var O = k[0], C = k.pop();
      if (C !== O) {
        k[0] = C;
        e: for (var c = 0, v = k.length, $ = v >>> 1; c < $; ) {
          var H = 2 * (c + 1) - 1, Y = k[H], X = H + 1, oe = k[X];
          if (0 > F(Y, C)) X < v && 0 > F(oe, Y) ? (k[c] = oe, k[X] = C, c = X) : (k[c] = Y, k[H] = C, c = H);
          else if (X < v && 0 > F(oe, C)) k[c] = oe, k[X] = C, c = X;
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
      var ae = performance;
      g.unstable_now = function() {
        return ae.now();
      };
    } else {
      var K = Date, te = K.now();
      g.unstable_now = function() {
        return K.now() - te;
      };
    }
    var U = [], he = [], ve = 1, Z = null, V = 3, W = !1, b = !1, I = !1, M = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function A(k) {
      for (var O = m(he); O !== null; ) {
        if (O.callback === null) _e(he);
        else if (O.startTime <= k) _e(he), O.sortIndex = O.expirationTime, z(U, O);
        else break;
        O = m(he);
      }
    }
    function D(k) {
      if (I = !1, A(k), !b) if (m(U) !== null) b = !0, Ue(J);
      else {
        var O = m(he);
        O !== null && ye(D, O.startTime - k);
      }
    }
    function J(k, O) {
      b = !1, I && (I = !1, re(ke), ke = -1), W = !0;
      var C = V;
      try {
        for (A(O), Z = m(U); Z !== null && (!(Z.expirationTime > O) || k && !Xn()); ) {
          var c = Z.callback;
          if (typeof c == "function") {
            Z.callback = null, V = Z.priorityLevel;
            var v = c(Z.expirationTime <= O);
            O = g.unstable_now(), typeof v == "function" ? Z.callback = v : Z === m(U) && _e(U), A(O);
          } else _e(U);
          Z = m(U);
        }
        if (Z !== null) var $ = !0;
        else {
          var H = m(he);
          H !== null && ye(D, H.startTime - O), $ = !1;
        }
        return $;
      } finally {
        Z = null, V = C, W = !1;
      }
    }
    var le = !1, ce = null, ke = -1, Qe = 5, Je = -1;
    function Xn() {
      return !(g.unstable_now() - Je < Qe);
    }
    function mn() {
      if (ce !== null) {
        var k = g.unstable_now();
        Je = k;
        var O = !0;
        try {
          O = ce(!0, k);
        } finally {
          O ? Ke() : (le = !1, ce = null);
        }
      } else le = !1;
    }
    var Ke;
    if (typeof L == "function") Ke = function() {
      L(mn);
    };
    else if (typeof MessageChannel < "u") {
      var on = new MessageChannel(), hn = on.port2;
      on.port1.onmessage = mn, Ke = function() {
        hn.postMessage(null);
      };
    } else Ke = function() {
      M(mn, 0);
    };
    function Ue(k) {
      ce = k, le || (le = !0, Ke());
    }
    function ye(k, O) {
      ke = M(function() {
        k(g.unstable_now());
      }, O);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, g.unstable_continueExecution = function() {
      b || W || (b = !0, Ue(J));
    }, g.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Qe = 0 < k ? Math.floor(1e3 / k) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, g.unstable_getFirstCallbackNode = function() {
      return m(U);
    }, g.unstable_next = function(k) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = V;
      }
      var C = V;
      V = O;
      try {
        return k();
      } finally {
        V = C;
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
      var C = V;
      V = k;
      try {
        return O();
      } finally {
        V = C;
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
      return v = C + v, k = { id: ve++, callback: O, priorityLevel: k, startTime: C, expirationTime: v, sortIndex: -1 }, C > c ? (k.sortIndex = C, z(he, k), m(U) === null && k === m(he) && (I ? (re(ke), ke = -1) : I = !0, ye(D, C - c))) : (k.sortIndex = v, z(U, k), b || W || (b = !0, Ue(J))), k;
    }, g.unstable_shouldYield = Xn, g.unstable_wrapCallback = function(k) {
      var O = V;
      return function() {
        var C = V;
        V = O;
        try {
          return k.apply(this, arguments);
        } finally {
          V = C;
        }
      };
    };
  }(Li)), Li;
}
var Da;
function Bf() {
  return Da || (Da = 1, zi.exports = Af()), zi.exports;
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
  if (Fa) return We;
  Fa = 1;
  var g = ji(), z = Bf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _e = /* @__PURE__ */ new Set(), F = {};
  function ae(e, n) {
    K(e, n), K(e + "Capture", n);
  }
  function K(e, n) {
    for (F[e] = n, e = 0; e < n.length; e++) _e.add(n[e]);
  }
  var te = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, he = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, Z = {};
  function V(e) {
    return U.call(Z, e) ? !0 : U.call(ve, e) ? !1 : he.test(e) ? Z[e] = !0 : (ve[e] = !0, !1);
  }
  function W(e, n, t, r) {
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
  function b(e, n, t, r) {
    if (n === null || typeof n > "u" || W(e, n, t, r)) return !0;
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
  function I(e, n, t, r, l, o, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    M[e] = new I(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    M[n] = new I(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    M[e] = new I(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    M[e] = new I(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    M[e] = new I(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    M[e] = new I(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    M[e] = new I(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    M[e] = new I(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    M[e] = new I(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var re = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      re,
      L
    );
    M[n] = new I(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(re, L);
    M[n] = new I(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(re, L);
    M[n] = new I(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    M[e] = new I(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    M[e] = new I(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function A(e, n, t, r) {
    var l = M.hasOwnProperty(n) ? M[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (b(n, t, l, r) && (t = null), r || l === null ? V(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var D = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = Symbol.for("react.element"), le = Symbol.for("react.portal"), ce = Symbol.for("react.fragment"), ke = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), Je = Symbol.for("react.provider"), Xn = Symbol.for("react.context"), mn = Symbol.for("react.forward_ref"), Ke = Symbol.for("react.suspense"), on = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), k = Symbol.iterator;
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
  var $ = !1;
  function H(e, n) {
    if (!e || $) return "";
    $ = !0;
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
      $ = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function Y(e) {
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
        return e = H(e.type, !1), e;
      case 11:
        return e = H(e.type.render, !1), e;
      case 1:
        return e = H(e.type, !0), e;
      default:
        return "";
    }
  }
  function X(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ce:
        return "Fragment";
      case le:
        return "Portal";
      case Qe:
        return "Profiler";
      case ke:
        return "StrictMode";
      case Ke:
        return "Suspense";
      case on:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Xn:
        return (e.displayName || "Context") + ".Consumer";
      case Je:
        return (e._context.displayName || "Context") + ".Provider";
      case mn:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case hn:
        return n = e.displayName || null, n !== null ? n : X(e.type) || "Memo";
      case Ue:
        n = e._payload, e = e._init;
        try {
          return X(e(n));
        } catch {
        }
    }
    return null;
  }
  function oe(e) {
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
        return X(n);
      case 8:
        return n === ke ? "StrictMode" : "Mode";
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
  function fe(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ye(e) {
    var n = fe(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
    e._valueTracker || (e._valueTracker = Ye(e));
  }
  function Fi(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = fe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
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
    n = n.checked, n != null && A(e, "checked", n, !1);
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
  function Vi(e, n, t) {
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
  function Ai(e, n) {
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
  }, Aa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mt).forEach(function(e) {
    Aa.forEach(function(n) {
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
  var Vl = null, at = null, ct = null;
  function Xi(e) {
    if (e = rr(e)) {
      if (typeof Vl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), Vl(e.stateNode, e.type, n));
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
  var Al = !1;
  function bi(e, n, t) {
    if (Al) return e(n, t);
    Al = !0;
    try {
      return Zi(e, n, t);
    } finally {
      Al = !1, (at !== null || ct !== null) && (Ji(), Gi());
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
  if (te) try {
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
  var lu = z.unstable_scheduleCallback, ou = z.unstable_cancelCallback, Xa = z.unstable_shouldYield, qa = z.unstable_requestPaint, we = z.unstable_now, Ga = z.unstable_getCurrentPriorityLevel, Wl = z.unstable_ImmediatePriority, iu = z.unstable_UserBlockingPriority, Cr = z.unstable_NormalPriority, Za = z.unstable_LowPriority, uu = z.unstable_IdlePriority, xr = null, vn = null;
  function Ja(e) {
    if (vn && typeof vn.onCommitFiberRoot == "function") try {
      vn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var un = Math.clz32 ? Math.clz32 : nc, ba = Math.log, ec = Math.LN2;
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
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - un(n), l = 1 << t, r |= e[t], n &= ~l;
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
      var i = 31 - un(o), u = 1 << i, s = l[i];
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
  function Vt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - un(n), e[n] = t;
  }
  function lc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - un(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Yl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - un(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var ne = 0;
  function au(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cu, Xl, fu, du, pu, ql = !1, Lr = [], Ln = null, Tn = null, Rn = null, At = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), In = [], oc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function mu(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ln = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Rn = null;
        break;
      case "pointerover":
      case "pointerout":
        At.delete(n.pointerId);
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
        return Ln = Ht(Ln, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = Ht(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return Rn = Ht(Rn, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return At.set(o, Ht(At.get(o) || null, e, n, t, r, l)), !0;
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
    ql = !1, Ln !== null && Tr(Ln) && (Ln = null), Tn !== null && Tr(Tn) && (Tn = null), Rn !== null && Tr(Rn) && (Rn = null), At.forEach(vu), Bt.forEach(vu);
  }
  function Wt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ql || (ql = !0, z.unstable_scheduleCallback(z.unstable_NormalPriority, uc)));
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
    for (Ln !== null && Wt(Ln, e), Tn !== null && Wt(Tn, e), Rn !== null && Wt(Rn, e), At.forEach(n), Bt.forEach(n), t = 0; t < In.length; t++) r = In[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < In.length && (t = In[0], t.blockedOn === null); ) hu(t), t.blockedOn === null && In.shift();
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
  var On = null, Jl = null, Or = null;
  function gu() {
    if (Or) return Or;
    var e, n = Jl, t = n.length, r, l = "value" in On ? On.value : On.textContent, o = l.length;
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
  function Xe(e) {
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
  }, defaultPrevented: 0, isTrusted: 0 }, bl = Xe(dt), Kt = C({}, dt, { view: 0, detail: 0 }), cc = Xe(Kt), eo, no, Yt, Dr = C({}, Kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ro, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yt && (Yt && e.type === "mousemove" ? (eo = e.screenX - Yt.screenX, no = e.screenY - Yt.screenY) : no = eo = 0, Yt = e), eo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : no;
  } }), Su = Xe(Dr), fc = C({}, Dr, { dataTransfer: 0 }), dc = Xe(fc), pc = C({}, Kt, { relatedTarget: 0 }), to = Xe(pc), mc = C({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hc = Xe(mc), vc = C({}, dt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), yc = Xe(vc), gc = C({}, dt, { data: 0 }), ku = Xe(gc), wc = {
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
  } }), Cc = Xe(_c), xc = C({}, Dr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Eu = Xe(xc), Nc = C({}, Kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ro }), Pc = Xe(Nc), zc = C({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lc = Xe(zc), Tc = C({}, Dr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rc = Xe(Tc), Ic = [9, 13, 27, 32], lo = te && "CompositionEvent" in window, Xt = null;
  te && "documentMode" in document && (Xt = document.documentMode);
  var Oc = te && "TextEvent" in window && !Xt, _u = te && (!lo || Xt && 8 < Xt && 11 >= Xt), Cu = " ", xu = !1;
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
    if (pt) return e === "compositionend" || !lo && Nu(e, n) ? (e = gu(), Or = Jl = On = null, pt = !1, e) : null;
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
    qi(r), n = Ar(n, "onChange"), 0 < n.length && (t = new bl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
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
  if (te) {
    var oo;
    if (te) {
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
  function Vc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fr(Gt);
  }
  function Ac(e, n) {
    if (e === "click") return Fr(n);
  }
  function Bc(e, n) {
    if (e === "input" || e === "change") return Fr(n);
  }
  function Hc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var sn = typeof Object.is == "function" ? Object.is : Hc;
  function Zt(e, n) {
    if (sn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!U.call(n, l) || !sn(e[l], n[l])) return !1;
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
  var Qc = te && "documentMode" in document && 11 >= document.documentMode, mt = null, so = null, Jt = null, ao = !1;
  function Uu(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ao || mt == null || mt !== Sr(r) || (r = mt, "selectionStart" in r && uo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Ar(so, "onSelect"), 0 < r.length && (n = new bl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = mt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var ht = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, co = {}, $u = {};
  te && ($u = document.createElement("div").style, "AnimationEvent" in window || (delete ht.animationend.animation, delete ht.animationiteration.animation, delete ht.animationstart.animation), "TransitionEvent" in window || delete ht.transitionend.transition);
  function $r(e) {
    if (co[e]) return co[e];
    if (!ht[e]) return e;
    var n = ht[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in $u) return co[e] = n[t];
    return e;
  }
  var Vu = $r("animationend"), Au = $r("animationiteration"), Bu = $r("animationstart"), Hu = $r("transitionend"), Wu = /* @__PURE__ */ new Map(), Qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function jn(e, n) {
    Wu.set(e, n), ae(n, [e]);
  }
  for (var fo = 0; fo < Qu.length; fo++) {
    var po = Qu[fo], Kc = po.toLowerCase(), Yc = po[0].toUpperCase() + po.slice(1);
    jn(Kc, "on" + Yc);
  }
  jn(Vu, "onAnimationEnd"), jn(Au, "onAnimationIteration"), jn(Bu, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(Hu, "onTransitionEnd"), K("onMouseEnter", ["mouseout", "mouseover"]), K("onMouseLeave", ["mouseout", "mouseover"]), K("onPointerEnter", ["pointerout", "pointerover"]), K("onPointerLeave", ["pointerout", "pointerover"]), ae("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ae("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ae("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
  function ue(e, n) {
    var t = n[ko];
    t === void 0 && (t = n[ko] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Xu(n, e, 2, !1), t.add(r));
  }
  function mo(e, n, t) {
    var r = 0;
    n && (r |= 4), Xu(t, e, r, n);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      e[Vr] = !0, _e.forEach(function(t) {
        t !== "selectionchange" && (Xc.has(t) || mo(t, !1, e), mo(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Vr] || (n[Vr] = !0, mo("selectionchange", !1, n));
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
            case Vu:
            case Au:
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
          var N = (n & 4) !== 0, Se = !N && e === "scroll", f = N ? h !== null ? h + "Capture" : null : h;
          N = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var S = d.stateNode;
            if (d.tag === 5 && S !== null && (d = S, f !== null && (S = Dt(a, f), S != null && N.push(nr(a, S, d)))), Se) break;
            a = a.return;
          }
          0 < N.length && (h = new E(h, x, null, t, y), w.push({ event: h, listeners: N }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && t !== Ul && (x = t.relatedTarget || t.fromElement) && (Gn(x) || x[kn])) break e;
          if ((E || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (x = t.relatedTarget || t.toElement, E = p, x = x ? Gn(x) : null, x !== null && (Se = qn(x), x !== Se || x.tag !== 5 && x.tag !== 6) && (x = null)) : (E = null, x = p), E !== x)) {
            if (N = Su, S = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (N = Eu, S = "onPointerLeave", f = "onPointerEnter", a = "pointer"), Se = E == null ? h : gt(E), d = x == null ? h : gt(x), h = new N(S, a + "leave", E, t, y), h.target = Se, h.relatedTarget = d, S = null, Gn(y) === p && (N = new N(f, a + "enter", x, t, y), N.target = d, N.relatedTarget = Se, S = N), Se = S, E && x) n: {
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
            E !== null && qu(w, h, E, N, !1), x !== null && Se !== null && qu(w, Se, x, N, !0);
          }
        }
        e: {
          if (h = p ? gt(p) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var P = Uc;
          else if (zu(h)) if (Tu) P = Bc;
          else {
            P = Vc;
            var T = $c;
          }
          else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Ac);
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
        j && (_u && t.locale !== "ko" && (pt || j !== "onCompositionStart" ? j === "onCompositionEnd" && pt && (R = gu()) : (On = y, Jl = "value" in On ? On.value : On.textContent, pt = !0)), T = Ar(p, j), 0 < T.length && (j = new ku(j, e, null, t, y), w.push({ event: j, listeners: T }), R ? j.data = R : (R = Pu(t), R !== null && (j.data = R)))), (R = Oc ? jc(e, t) : Mc(e, t)) && (p = Ar(p, "onBeforeInput"), 0 < p.length && (y = new ku("onBeforeInput", "beforeinput", null, t, y), w.push({ event: y, listeners: p }), y.data = R));
      }
      Yu(w, n);
    });
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Ar(e, n) {
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
  function Mn(e) {
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
  var yt = Math.random().toString(36).slice(2), yn = "__reactFiber$" + yt, tr = "__reactProps$" + yt, kn = "__reactContainer$" + yt, ko = "__reactEvents$" + yt, ef = "__reactListeners$" + yt, nf = "__reactHandles$" + yt;
  function Gn(e) {
    var n = e[yn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[kn] || t[yn]) {
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
    return e = e[yn] || e[kn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[tr] || null;
  }
  var Eo = [], wt = -1;
  function Dn(e) {
    return { current: e };
  }
  function se(e) {
    0 > wt || (e.current = Eo[wt], Eo[wt] = null, wt--);
  }
  function ie(e, n) {
    wt++, Eo[wt] = e.current, e.current = n;
  }
  var Fn = {}, Ie = Dn(Fn), $e = Dn(!1), Zn = Fn;
  function St(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t) l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ve(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    se($e), se(Ie);
  }
  function bu(e, n, t) {
    if (Ie.current !== Fn) throw Error(m(168));
    ie(Ie, n), ie($e, t);
  }
  function es(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, oe(e) || "Unknown", l));
    return C({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Zn = Ie.current, ie(Ie, e), ie($e, $e.current), !0;
  }
  function ns(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = es(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, se($e), se(Ie), ie(Ie, e)) : se($e), ie($e, t);
  }
  var En = null, Yr = !1, _o = !1;
  function ts(e) {
    En === null ? En = [e] : En.push(e);
  }
  function tf(e) {
    Yr = !0, ts(e);
  }
  function Un() {
    if (!_o && En !== null) {
      _o = !0;
      var e = 0, n = ne;
      try {
        var t = En;
        for (ne = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        En = null, Yr = !1;
      } catch (l) {
        throw En !== null && (En = En.slice(e + 1)), lu(Wl, Un), l;
      } finally {
        ne = n, _o = !1;
      }
    }
    return null;
  }
  var kt = [], Et = 0, Xr = null, qr = 0, be = [], en = 0, Jn = null, _n = 1, Cn = "";
  function bn(e, n) {
    kt[Et++] = qr, kt[Et++] = Xr, Xr = e, qr = n;
  }
  function rs(e, n, t) {
    be[en++] = _n, be[en++] = Cn, be[en++] = Jn, Jn = e;
    var r = _n;
    e = Cn;
    var l = 32 - un(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - un(n) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, _n = 1 << 32 - un(n) + l | t << l | r, Cn = o + e;
    } else _n = 1 << o | t << l | r, Cn = e;
  }
  function Co(e) {
    e.return !== null && (bn(e, 1), rs(e, 1, 0));
  }
  function xo(e) {
    for (; e === Xr; ) Xr = kt[--Et], kt[Et] = null, qr = kt[--Et], kt[Et] = null;
    for (; e === Jn; ) Jn = be[--en], be[en] = null, Cn = be[--en], be[en] = null, _n = be[--en], be[en] = null;
  }
  var qe = null, Ge = null, de = !1, an = null;
  function ls(e, n) {
    var t = ln(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function os(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, qe = e, Ge = Mn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, qe = e, Ge = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: _n, overflow: Cn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = ln(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, qe = e, Ge = null, !0) : !1;
      default:
        return !1;
    }
  }
  function No(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Po(e) {
    if (de) {
      var n = Ge;
      if (n) {
        var t = n;
        if (!os(e, n)) {
          if (No(e)) throw Error(m(418));
          n = Mn(t.nextSibling);
          var r = qe;
          n && os(e, n) ? ls(r, t) : (e.flags = e.flags & -4097 | 2, de = !1, qe = e);
        }
      } else {
        if (No(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, de = !1, qe = e;
      }
    }
  }
  function is(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    qe = e;
  }
  function Gr(e) {
    if (e !== qe) return !1;
    if (!de) return is(e), de = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !go(e.type, e.memoizedProps)), n && (n = Ge)) {
      if (No(e)) throw us(), Error(m(418));
      for (; n; ) ls(e, n), n = Mn(n.nextSibling);
    }
    if (is(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ge = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Ge = null;
      }
    } else Ge = qe ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = Ge; e; ) e = Mn(e.nextSibling);
  }
  function _t() {
    Ge = qe = null, de = !1;
  }
  function zo(e) {
    an === null ? an = [e] : an.push(e);
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
      return f = Kn(f, a), f.index = 0, f.sibling = null, f;
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
      return P === ce ? y(f, a, d.props.children, S, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Ue && ss(P) === a.type) ? (S = l(a, d.props), S.ref = lr(f, a, d), S.return = f, S) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, S);
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
          case J:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = lr(f, null, a), d.return = f, d;
          case le:
            return a = Si(a, f.mode, d), a.return = f, a;
          case Ue:
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
          case J:
            return d.key === P ? s(f, a, d, S) : null;
          case le:
            return d.key === P ? p(f, a, d, S) : null;
          case Ue:
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
          case J:
            return f = f.get(S.key === null ? d : S.key) || null, s(a, f, S, P);
          case le:
            return f = f.get(S.key === null ? d : S.key) || null, p(a, f, S, P);
          case Ue:
            var T = S._init;
            return E(f, a, d, T(S._payload), P);
        }
        if (Ot(S) || O(S)) return f = f.get(d) || null, y(a, f, S, P, null);
        Zr(a, S);
      }
      return null;
    }
    function x(f, a, d, S) {
      for (var P = null, T = null, R = a, j = a = 0, ze = null; R !== null && j < d.length; j++) {
        R.index > j ? (ze = R, R = null) : ze = R.sibling;
        var q = h(f, R, d[j], S);
        if (q === null) {
          R === null && (R = ze);
          break;
        }
        e && R && q.alternate === null && n(f, R), a = o(q, a, j), T === null ? P = q : T.sibling = q, T = q, R = ze;
      }
      if (j === d.length) return t(f, R), de && bn(f, j), P;
      if (R === null) {
        for (; j < d.length; j++) R = w(f, d[j], S), R !== null && (a = o(R, a, j), T === null ? P = R : T.sibling = R, T = R);
        return de && bn(f, j), P;
      }
      for (R = r(f, R); j < d.length; j++) ze = E(R, f, j, d[j], S), ze !== null && (e && ze.alternate !== null && R.delete(ze.key === null ? j : ze.key), a = o(ze, a, j), T === null ? P = ze : T.sibling = ze, T = ze);
      return e && R.forEach(function(Yn) {
        return n(f, Yn);
      }), de && bn(f, j), P;
    }
    function N(f, a, d, S) {
      var P = O(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var T = P = null, R = a, j = a = 0, ze = null, q = d.next(); R !== null && !q.done; j++, q = d.next()) {
        R.index > j ? (ze = R, R = null) : ze = R.sibling;
        var Yn = h(f, R, q.value, S);
        if (Yn === null) {
          R === null && (R = ze);
          break;
        }
        e && R && Yn.alternate === null && n(f, R), a = o(Yn, a, j), T === null ? P = Yn : T.sibling = Yn, T = Yn, R = ze;
      }
      if (q.done) return t(
        f,
        R
      ), de && bn(f, j), P;
      if (R === null) {
        for (; !q.done; j++, q = d.next()) q = w(f, q.value, S), q !== null && (a = o(q, a, j), T === null ? P = q : T.sibling = q, T = q);
        return de && bn(f, j), P;
      }
      for (R = r(f, R); !q.done; j++, q = d.next()) q = E(R, f, j, q.value, S), q !== null && (e && q.alternate !== null && R.delete(q.key === null ? j : q.key), a = o(q, a, j), T === null ? P = q : T.sibling = q, T = q);
      return e && R.forEach(function(Df) {
        return n(f, Df);
      }), de && bn(f, j), P;
    }
    function Se(f, a, d, S) {
      if (typeof d == "object" && d !== null && d.type === ce && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case J:
            e: {
              for (var P = d.key, T = a; T !== null; ) {
                if (T.key === P) {
                  if (P = d.type, P === ce) {
                    if (T.tag === 7) {
                      t(f, T.sibling), a = l(T, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (T.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Ue && ss(P) === T.type) {
                    t(f, T.sibling), a = l(T, d.props), a.ref = lr(f, T, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, T);
                  break;
                } else n(f, T);
                T = T.sibling;
              }
              d.type === ce ? (a = ut(d.props.children, f.mode, S, d.key), a.return = f, f = a) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, f = S);
            }
            return i(f);
          case le:
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
          case Ue:
            return T = d._init, Se(f, a, T(d._payload), S);
        }
        if (Ot(d)) return x(f, a, d, S);
        if (O(d)) return N(f, a, d, S);
        Zr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = wi(d, f.mode, S), a.return = f, f = a), i(f)) : t(f, a);
    }
    return Se;
  }
  var Ct = as(!0), cs = as(!1), Jr = Dn(null), br = null, xt = null, Lo = null;
  function To() {
    Lo = xt = br = null;
  }
  function Ro(e) {
    var n = Jr.current;
    se(Jr), e._currentValue = n;
  }
  function Io(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Nt(e, n) {
    br = e, Lo = xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Ae = !0), e.firstContext = null);
  }
  function nn(e) {
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
    return l === null ? (t.next = t, Oo(n)) : (t.next = l.next, l.next = t), n.interleaved = t, xn(e, r);
  }
  function xn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var $n = !1;
  function jo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ds(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Nn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Q & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, xn(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Oo(r)) : (n.next = l.next, l.next = n), r.interleaved = n, xn(e, t);
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
    $n = !1;
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
                $n = !0;
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
  var or = {}, gn = Dn(or), ir = Dn(or), ur = Dn(or);
  function nt(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Mo(e, n) {
    switch (ie(ur, n), ie(ir, e), ie(gn, or), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ml(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ml(n, e);
    }
    se(gn), ie(gn, n);
  }
  function Pt() {
    se(gn), se(ir), se(ur);
  }
  function hs(e) {
    nt(ur.current);
    var n = nt(gn.current), t = Ml(n, e.type);
    n !== t && (ie(ir, e), ie(gn, t));
  }
  function Do(e) {
    ir.current === e && (se(gn), se(ir));
  }
  var pe = Dn(0);
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
  var rl = D.ReactCurrentDispatcher, $o = D.ReactCurrentBatchConfig, tt = 0, me = null, Ce = null, Ne = null, ll = !1, sr = !1, ar = 0, lf = 0;
  function Oe() {
    throw Error(m(321));
  }
  function Vo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!sn(e[t], n[t])) return !1;
    return !0;
  }
  function Ao(e, n, t, r, l, o) {
    if (tt = o, me = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, rl.current = e === null || e.memoizedState === null ? af : cf, e = t(r, l), sr) {
      o = 0;
      do {
        if (sr = !1, ar = 0, 25 <= o) throw Error(m(301));
        o += 1, Ne = Ce = null, n.updateQueue = null, rl.current = ff, e = t(r, l);
      } while (sr);
    }
    if (rl.current = ul, n = Ce !== null && Ce.next !== null, tt = 0, Ne = Ce = me = null, ll = !1, n) throw Error(m(300));
    return e;
  }
  function Bo() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ne === null ? me.memoizedState = Ne = e : Ne = Ne.next = e, Ne;
  }
  function tn() {
    if (Ce === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var n = Ne === null ? me.memoizedState : Ne.next;
    if (n !== null) Ne = n, Ce = e;
    else {
      if (e === null) throw Error(m(310));
      Ce = e, e = { memoizedState: Ce.memoizedState, baseState: Ce.baseState, baseQueue: Ce.baseQueue, queue: Ce.queue, next: null }, Ne === null ? me.memoizedState = Ne = e : Ne = Ne.next = e;
    }
    return Ne;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = tn(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = Ce, l = r.baseQueue, o = t.pending;
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
          s === null ? (u = s = w, i = r) : s = s.next = w, me.lanes |= y, rt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? i = r : s.next = u, sn(r, n.memoizedState) || (Ae = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, me.lanes |= o, rt |= o, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Wo(e) {
    var n = tn(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      sn(o, n.memoizedState) || (Ae = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function vs() {
  }
  function ys(e, n) {
    var t = me, r = tn(), l = n(), o = !sn(r.memoizedState, l);
    if (o && (r.memoizedState = l, Ae = !0), r = r.queue, Qo(Ss.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || Ne !== null && Ne.memoizedState.tag & 1) {
      if (t.flags |= 2048, fr(9, ws.bind(null, t, r, l, n), void 0, null), Pe === null) throw Error(m(349));
      tt & 30 || gs(t, n, l);
    }
    return l;
  }
  function gs(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = me.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, me.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
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
      return !sn(e, t);
    } catch {
      return !0;
    }
  }
  function Es(e) {
    var n = xn(e, 1);
    n !== null && pn(n, e, 1, -1);
  }
  function _s(e) {
    var n = wn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, n.queue = e, e = e.dispatch = sf.bind(null, me, e), [n.memoizedState, e];
  }
  function fr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = me.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, me.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function Cs() {
    return tn().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = wn();
    me.flags |= e, l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function il(e, n, t, r) {
    var l = tn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ce !== null) {
      var i = Ce.memoizedState;
      if (o = i.destroy, r !== null && Vo(r, i.deps)) {
        l.memoizedState = fr(n, t, o, r);
        return;
      }
    }
    me.flags |= e, l.memoizedState = fr(1 | n, t, o, r);
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
    var t = tn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Rs(e, n) {
    var t = tn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Is(e, n, t) {
    return tt & 21 ? (sn(t, n) || (t = su(), me.lanes |= t, rt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Ae = !0), e.memoizedState = t);
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
    return tn().memoizedState;
  }
  function uf(e, n, t) {
    var r = Wn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, js(e)) Ms(n, t);
    else if (t = fs(e, n, t, r), t !== null) {
      var l = Fe();
      pn(t, e, r, l), Ds(t, n, r);
    }
  }
  function sf(e, n, t) {
    var r = Wn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (js(e)) Ms(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var i = n.lastRenderedState, u = o(i, t);
        if (l.hasEagerState = !0, l.eagerState = u, sn(u, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Oo(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = fs(e, n, l, r), t !== null && (l = Fe(), pn(t, e, r, l), Ds(t, n, r));
    }
  }
  function js(e) {
    var n = e.alternate;
    return e === me || n !== null && n === me;
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
  var ul = { readContext: nn, useCallback: Oe, useContext: Oe, useEffect: Oe, useImperativeHandle: Oe, useInsertionEffect: Oe, useLayoutEffect: Oe, useMemo: Oe, useReducer: Oe, useRef: Oe, useState: Oe, useDebugValue: Oe, useDeferredValue: Oe, useTransition: Oe, useMutableSource: Oe, useSyncExternalStore: Oe, useId: Oe, unstable_isNewReconciler: !1 }, af = { readContext: nn, useCallback: function(e, n) {
    return wn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: nn, useEffect: xs, useImperativeHandle: function(e, n, t) {
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
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = uf.bind(null, me, e), [r.memoizedState, e];
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
    var r = me, l = wn();
    if (de) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), Pe === null) throw Error(m(349));
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
    var e = wn(), n = Pe.identifierPrefix;
    if (de) {
      var t = Cn, r = _n;
      t = (r & ~(1 << 32 - un(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ar++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = lf++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, cf = {
    readContext: nn,
    useCallback: Ts,
    useContext: nn,
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
      var n = tn();
      return Is(n, Ce.memoizedState, e);
    },
    useTransition: function() {
      var e = Ho(cr)[0], n = tn().memoizedState;
      return [e, n];
    },
    useMutableSource: vs,
    useSyncExternalStore: ys,
    useId: Os,
    unstable_isNewReconciler: !1
  }, ff = { readContext: nn, useCallback: Ts, useContext: nn, useEffect: Qo, useImperativeHandle: Ls, useInsertionEffect: Ns, useLayoutEffect: Ps, useMemo: Rs, useReducer: Wo, useRef: Cs, useState: function() {
    return Wo(cr);
  }, useDebugValue: Ko, useDeferredValue: function(e) {
    var n = tn();
    return Ce === null ? n.memoizedState = e : Is(n, Ce.memoizedState, e);
  }, useTransition: function() {
    var e = Wo(cr)[0], n = tn().memoizedState;
    return [e, n];
  }, useMutableSource: vs, useSyncExternalStore: ys, useId: Os, unstable_isNewReconciler: !1 };
  function cn(e, n) {
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
    var r = Fe(), l = Wn(e), o = Nn(r, l);
    o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (pn(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Fe(), l = Wn(e), o = Nn(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (pn(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Fe(), r = Wn(e), l = Nn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Vn(e, l, r), n !== null && (pn(n, e, r, t), el(n, e, r));
  } };
  function Fs(e, n, t, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, o) : !0;
  }
  function Us(e, n, t) {
    var r = !1, l = Fn, o = n.contextType;
    return typeof o == "object" && o !== null ? o = nn(o) : (l = Ve(n) ? Zn : Ie.current, r = n.contextTypes, o = (r = r != null) ? St(e, l) : Fn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function $s(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Xo(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, jo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = nn(o) : (o = Ve(n) ? Zn : Ie.current, l.context = St(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Yo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zt(e, n) {
    try {
      var t = "", r = n;
      do
        t += Y(r), r = r.return;
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
  function Vs(e, n, t) {
    t = Nn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, fi = r), Go(e, n);
    }, t;
  }
  function As(e, n, t) {
    t = Nn(-1, t), t.tag = 3;
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
      Go(e, n), typeof r != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
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
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Nn(-1, 1), n.tag = 2, Vn(t, n, 1))), t.lanes |= 1), e);
  }
  var pf = D.ReactCurrentOwner, Ae = !1;
  function De(e, n, t, r) {
    n.child = e === null ? cs(n, null, t, r) : Ct(n, e.child, t, r);
  }
  function Qs(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return Nt(n, l), r = Ao(e, n, t, r, o, l), t = Bo(), e !== null && !Ae ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Pn(e, n, l)) : (de && t && Co(n), n.flags |= 1, De(e, n, r, l), n.child);
  }
  function Ks(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !gi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ys(e, n, o, r, l)) : (e = kl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(i, r) && e.ref === n.ref) return Pn(e, n, l);
    }
    return n.flags |= 1, e = Kn(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Ys(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zt(o, r) && e.ref === n.ref) if (Ae = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Ae = !0);
      else return n.lanes = e.lanes, Pn(e, n, l);
    }
    return Zo(e, n, t, r, l);
  }
  function Xs(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(Tt, Ze), Ze |= t;
    else {
      if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, ie(Tt, Ze), Ze |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, ie(Tt, Ze), Ze |= r;
    }
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, ie(Tt, Ze), Ze |= r;
    return De(e, n, l, t), n.child;
  }
  function qs(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Zo(e, n, t, r, l) {
    var o = Ve(t) ? Zn : Ie.current;
    return o = St(n, o), Nt(n, l), t = Ao(e, n, t, r, o, l), r = Bo(), e !== null && !Ae ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Pn(e, n, l)) : (de && r && Co(n), n.flags |= 1, De(e, n, t, l), n.child);
  }
  function Gs(e, n, t, r, l) {
    if (Ve(t)) {
      var o = !0;
      Kr(n);
    } else o = !1;
    if (Nt(n, l), n.stateNode === null) cl(e, n), Us(n, t, r), Xo(n, t, r, l), r = !0;
    else if (e === null) {
      var i = n.stateNode, u = n.memoizedProps;
      i.props = u;
      var s = i.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = nn(p) : (p = Ve(t) ? Zn : Ie.current, p = St(n, p));
      var y = t.getDerivedStateFromProps, w = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== p) && $s(n, i, r, p), $n = !1;
      var h = n.memoizedState;
      i.state = h, nl(n, r, i, l), s = n.memoizedState, u !== r || h !== s || $e.current || $n ? (typeof y == "function" && (Yo(n, t, y, r), s = n.memoizedState), (u = $n || Fs(n, t, u, r, h, s, p)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, ds(e, n), u = n.memoizedProps, p = n.type === n.elementType ? u : cn(n.type, u), i.props = p, w = n.pendingProps, h = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = nn(s) : (s = Ve(t) ? Zn : Ie.current, s = St(n, s));
      var E = t.getDerivedStateFromProps;
      (y = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || h !== s) && $s(n, i, r, s), $n = !1, h = n.memoizedState, i.state = h, nl(n, r, i, l);
      var x = n.memoizedState;
      u !== w || h !== x || $e.current || $n ? (typeof E == "function" && (Yo(n, t, E, r), x = n.memoizedState), (p = $n || Fs(n, t, p, r, h, x, s) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = x), i.props = r, i.state = x, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Jo(e, n, t, r, o, l);
  }
  function Jo(e, n, t, r, l, o) {
    qs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && ns(n, t, !1), Pn(e, n, o);
    r = n.stateNode, pf.current = n;
    var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = Ct(n, e.child, null, o), n.child = Ct(n, null, u, o)) : De(e, n, u, o), n.memoizedState = r.state, l && ns(n, t, !0), n.child;
  }
  function Zs(e) {
    var n = e.stateNode;
    n.pendingContext ? bu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && bu(e, n.context, !1), Mo(e, n.containerInfo);
  }
  function Js(e, n, t, r, l) {
    return _t(), zo(l), n.flags |= 256, De(e, n, t, r), n.child;
  }
  var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function bs(e, n, t) {
    var r = n.pendingProps, l = pe.current, o = !1, i = (n.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ie(pe, l & 1), e === null)
      return Po(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = El(i, r, 0, null), e = ut(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = ei(t), n.memoizedState = bo, e) : ni(n, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return mf(e, n, i, r, u, l, t);
    if (o) {
      o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Kn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Kn(u, o) : (o = ut(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? ei(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = bo, r;
    }
    return o = e.child, e = o.sibling, r = Kn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
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
    if (u = (i & e.childLanes) !== 0, Ae || u) {
      if (r = Pe, r !== null) {
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, xn(e, l), pn(r, e, l, -1));
      }
      return yi(), r = qo(Error(m(421))), al(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Pf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Ge = Mn(l.nextSibling), qe = n, de = !0, an = null, e !== null && (be[en++] = _n, be[en++] = Cn, be[en++] = Jn, _n = e.id, Cn = e.overflow, Jn = n), n = ni(n, r.children), n.flags |= 4096, n);
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
    if (De(e, n, r.children, t), r = pe.current, r & 2) r = r & 1 | 2, n.flags |= 128;
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
    if (ie(pe, r), !(n.mode & 1)) n.memoizedState = null;
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
  function Pn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), rt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Kn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Kn(e, e.pendingProps), t.return = n;
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
        Ve(n.type) && Kr(n);
        break;
      case 4:
        Mo(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        ie(Jr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (ie(pe, pe.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? bs(e, n, t) : (ie(pe, pe.current & 1), e = Pn(e, n, t), e !== null ? e.sibling : null);
        ie(pe, pe.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return na(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ie(pe, pe.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Xs(e, n, t);
    }
    return Pn(e, n, t);
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
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (F.hasOwnProperty(p) ? (s != null && p === "onScroll" && ue("scroll", e), o || u === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, la = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function dr(e, n) {
    if (!de) switch (e.tailMode) {
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
  function je(e) {
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
        return je(n), null;
      case 1:
        return Ve(n.type) && Qr(), je(n), null;
      case 3:
        return r = n.stateNode, Pt(), se($e), se(Ie), Uo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, an !== null && (mi(an), an = null))), ri(e, n), je(n), null;
      case 5:
        Do(n);
        var l = nt(ur.current);
        if (t = n.type, e !== null && n.stateNode != null) ra(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return je(n), null;
          }
          if (e = nt(gn.current), Gr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[yn] = n, r[tr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                ue("cancel", r), ue("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++) ue(bt[l], r);
                break;
              case "source":
                ue("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ue(
                  "error",
                  r
                ), ue("load", r);
                break;
              case "details":
                ue("toggle", r);
                break;
              case "input":
                Ui(r, o), ue("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ue("invalid", r);
                break;
              case "textarea":
                Ai(r, o), ue("invalid", r);
            }
            Dl(t, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Br(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : F.hasOwnProperty(i) && u != null && i === "onScroll" && ue("scroll", r);
            }
            switch (t) {
              case "input":
                wr(r), Vi(r, o, !0);
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
                  ue("cancel", e), ue("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ue("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++) ue(bt[l], e);
                  l = r;
                  break;
                case "source":
                  ue("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ue(
                    "error",
                    e
                  ), ue("load", e), l = r;
                  break;
                case "details":
                  ue("toggle", e), l = r;
                  break;
                case "input":
                  Ui(e, r), l = Rl(e, r), ue("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), ue("invalid", e);
                  break;
                case "textarea":
                  Ai(e, r), l = jl(e, r), ue("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(t, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Yi(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Qi(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && jt(e, s) : typeof s == "number" && jt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (F.hasOwnProperty(o) ? s != null && o === "onScroll" && ue("scroll", e) : s != null && A(e, o, s, i));
              }
              switch (t) {
                case "input":
                  wr(e), Vi(e, r, !1);
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
        return je(n), null;
      case 6:
        if (e && n.stateNode != null) la(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = nt(ur.current), nt(gn.current), Gr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[yn] = n, (o = r.nodeValue !== t) && (e = qe, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            o && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[yn] = n, n.stateNode = r;
        }
        return je(n), null;
      case 13:
        if (se(pe), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (de && Ge !== null && n.mode & 1 && !(n.flags & 128)) us(), _t(), n.flags |= 98560, o = !1;
          else if (o = Gr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(m(317));
              o[yn] = n;
            } else _t(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            je(n), o = !1;
          } else an !== null && (mi(an), an = null), o = !0;
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || pe.current & 1 ? xe === 0 && (xe = 3) : yi())), n.updateQueue !== null && (n.flags |= 4), je(n), null);
      case 4:
        return Pt(), ri(e, n), e === null && er(n.stateNode.containerInfo), je(n), null;
      case 10:
        return Ro(n.type._context), je(n), null;
      case 17:
        return Ve(n.type) && Qr(), je(n), null;
      case 19:
        if (se(pe), o = n.memoizedState, o === null) return je(n), null;
        if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) dr(o, !1);
        else {
          if (xe !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (i = tl(e), i !== null) {
              for (n.flags |= 128, dr(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return ie(pe, pe.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          o.tail !== null && we() > Rt && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = tl(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), dr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !de) return je(n), null;
          } else 2 * we() - o.renderingStartTime > Rt && t !== 1073741824 && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = we(), n.sibling = null, t = pe.current, ie(pe, r ? t & 1 | 2 : t & 1), n) : (je(n), null);
      case 22:
      case 23:
        return vi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Ze & 1073741824 && (je(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : je(n), null;
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
        return Ve(n.type) && Qr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Pt(), se($e), se(Ie), Uo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Do(n), null;
      case 13:
        if (se(pe), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          _t();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return se(pe), null;
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
  var fl = !1, Me = !1, gf = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function Lt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      ge(e, n, r);
    }
    else t.current = null;
  }
  function li(e, n, t) {
    try {
      t();
    } catch (r) {
      ge(e, n, r);
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
              var N = x.memoizedProps, Se = x.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? N : cn(n.type, N), Se);
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
        ge(n, n.return, S);
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
  var Te = null, fn = !1;
  function An(e, n, t) {
    for (t = t.child; t !== null; ) aa(e, n, t), t = t.sibling;
  }
  function aa(e, n, t) {
    if (vn && typeof vn.onCommitFiberUnmount == "function") try {
      vn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Me || Lt(t, n);
      case 6:
        var r = Te, l = fn;
        Te = null, An(e, n, t), Te = r, fn = l, Te !== null && (fn ? (e = Te, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Te.removeChild(t.stateNode));
        break;
      case 18:
        Te !== null && (fn ? (e = Te, t = t.stateNode, e.nodeType === 8 ? So(e.parentNode, t) : e.nodeType === 1 && So(e, t), Qt(e)) : So(Te, t.stateNode));
        break;
      case 4:
        r = Te, l = fn, Te = t.stateNode.containerInfo, fn = !0, An(e, n, t), Te = r, fn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Me && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && li(t, n, i), l = l.next;
          } while (l !== r);
        }
        An(e, n, t);
        break;
      case 1:
        if (!Me && (Lt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ge(t, n, u);
        }
        An(e, n, t);
        break;
      case 21:
        An(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Me = (r = Me) || t.memoizedState !== null, An(e, n, t), Me = r) : An(e, n, t);
        break;
      default:
        An(e, n, t);
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
  function dn(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, i = n, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              Te = u.stateNode, fn = !1;
              break e;
            case 3:
              Te = u.stateNode.containerInfo, fn = !0;
              break e;
            case 4:
              Te = u.stateNode.containerInfo, fn = !0;
              break e;
          }
          u = u.return;
        }
        if (Te === null) throw Error(m(160));
        aa(o, i, l), Te = null, fn = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        ge(l, n, p);
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
        if (dn(n, e), Sn(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (N) {
            ge(e, e.return, N);
          }
          try {
            pr(5, e, e.return);
          } catch (N) {
            ge(e, e.return, N);
          }
        }
        break;
      case 1:
        dn(n, e), Sn(e), r & 512 && t !== null && Lt(t, t.return);
        break;
      case 5:
        if (dn(n, e), Sn(e), r & 512 && t !== null && Lt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            jt(l, "");
          } catch (N) {
            ge(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && o.type === "radio" && o.name != null && $i(l, o), Fl(u, i);
            var p = Fl(u, o);
            for (i = 0; i < s.length; i += 2) {
              var y = s[i], w = s[i + 1];
              y === "style" ? Yi(l, w) : y === "dangerouslySetInnerHTML" ? Qi(l, w) : y === "children" ? jt(l, w) : A(l, y, w, p);
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
            ge(e, e.return, N);
          }
        }
        break;
      case 6:
        if (dn(n, e), Sn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (N) {
            ge(e, e.return, N);
          }
        }
        break;
      case 3:
        if (dn(n, e), Sn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Qt(n.containerInfo);
        } catch (N) {
          ge(e, e.return, N);
        }
        break;
      case 4:
        dn(n, e), Sn(e);
        break;
      case 13:
        dn(n, e), Sn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ci = we())), r & 4 && ca(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Me = (p = Me) || y, dn(n, e), Me = p) : dn(n, e), Sn(e), r & 8192) {
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
                      ge(r, t, N);
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
                  ge(e, e.return, N);
                }
              }
            } else if (w.tag === 6) {
              if (y === null) try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps;
              } catch (N) {
                ge(e, e.return, N);
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
        dn(n, e), Sn(e), r & 4 && ca(e);
        break;
      case 21:
        break;
      default:
        dn(
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
        ge(e, e.return, s);
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
          var u = l.alternate, s = u !== null && u.memoizedState !== null || Me;
          u = fl;
          var p = Me;
          if (fl = i, (Me = s) && !p) for (_ = l; _ !== null; ) i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? ha(l) : s !== null ? (s.return = i, _ = s) : ha(l);
          for (; o !== null; ) _ = o, da(o), o = o.sibling;
          _ = l, fl = u, Me = p;
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
              Me || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !Me) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : cn(n.type, t.memoizedProps);
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
          Me || n.flags & 512 && oi(n);
        } catch (h) {
          ge(n, n.return, h);
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
              ge(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ge(n, l, s);
              }
            }
            var o = n.return;
            try {
              oi(n);
            } catch (s) {
              ge(n, o, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              oi(n);
            } catch (s) {
              ge(n, i, s);
            }
        }
      } catch (s) {
        ge(n, n.return, s);
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
  var kf = Math.ceil, pl = D.ReactCurrentDispatcher, si = D.ReactCurrentOwner, rn = D.ReactCurrentBatchConfig, Q = 0, Pe = null, Ee = null, Re = 0, Ze = 0, Tt = Dn(0), xe = 0, mr = null, rt = 0, ml = 0, ai = 0, hr = null, Be = null, ci = 0, Rt = 1 / 0, zn = null, hl = !1, fi = null, Bn = null, vl = !1, Hn = null, yl = 0, vr = 0, di = null, gl = -1, wl = 0;
  function Fe() {
    return Q & 6 ? we() : gl !== -1 ? gl : gl = we();
  }
  function Wn(e) {
    return e.mode & 1 ? Q & 2 && Re !== 0 ? Re & -Re : rf.transition !== null ? (wl === 0 && (wl = su()), wl) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yu(e.type)), e) : 1;
  }
  function pn(e, n, t, r) {
    if (50 < vr) throw vr = 0, di = null, Error(m(185));
    Vt(e, t, r), (!(Q & 2) || e !== Pe) && (e === Pe && (!(Q & 2) && (ml |= t), xe === 4 && Qn(e, Re)), He(e, r), t === 1 && Q === 0 && !(n.mode & 1) && (Rt = we() + 500, Yr && Un()));
  }
  function He(e, n) {
    var t = e.callbackNode;
    rc(e, n);
    var r = zr(e, e === Pe ? Re : 0);
    if (r === 0) t !== null && ou(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && ou(t), n === 1) e.tag === 0 ? tf(ya.bind(null, e)) : ts(ya.bind(null, e)), Jc(function() {
        !(Q & 6) && Un();
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
    if (gl = -1, wl = 0, Q & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (It() && e.callbackNode !== t) return null;
    var r = zr(e, e === Pe ? Re : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
    else {
      n = r;
      var l = Q;
      Q |= 2;
      var o = wa();
      (Pe !== e || Re !== n) && (zn = null, Rt = we() + 500, ot(e, n));
      do
        try {
          Cf();
          break;
        } catch (u) {
          ga(e, u);
        }
      while (!0);
      To(), pl.current = o, Q = l, Ee !== null ? n = 0 : (Pe = null, Re = 0, n = xe);
    }
    if (n !== 0) {
      if (n === 2 && (l = Ql(e), l !== 0 && (r = l, n = pi(e, l))), n === 1) throw t = mr, ot(e, 0), Qn(e, r), He(e, we()), t;
      if (n === 6) Qn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Ef(l) && (n = Sl(e, r), n === 2 && (o = Ql(e), o !== 0 && (r = o, n = pi(e, o))), n === 1)) throw t = mr, ot(e, 0), Qn(e, r), He(e, we()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            it(e, Be, zn);
            break;
          case 3:
            if (Qn(e, r), (r & 130023424) === r && (n = ci + 500 - we(), 10 < n)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Fe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = wo(it.bind(null, e, Be, zn), n);
              break;
            }
            it(e, Be, zn);
            break;
          case 4:
            if (Qn(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - un(r);
              o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = we() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = wo(it.bind(null, e, Be, zn), r);
              break;
            }
            it(e, Be, zn);
            break;
          case 5:
            it(e, Be, zn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return He(e, we()), e.callbackNode === t ? va.bind(null, e) : null;
  }
  function pi(e, n) {
    var t = hr;
    return e.current.memoizedState.isDehydrated && (ot(e, n).flags |= 256), e = Sl(e, n), e !== 2 && (n = Be, Be = t, n !== null && mi(n)), e;
  }
  function mi(e) {
    Be === null ? Be = e : Be.push.apply(Be, e);
  }
  function Ef(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!sn(o(), l)) return !1;
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
  function Qn(e, n) {
    for (n &= ~ai, n &= ~ml, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - un(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ya(e) {
    if (Q & 6) throw Error(m(327));
    It();
    var n = zr(e, 0);
    if (!(n & 1)) return He(e, we()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Ql(e);
      r !== 0 && (n = r, t = pi(e, r));
    }
    if (t === 1) throw t = mr, ot(e, 0), Qn(e, n), He(e, we()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, it(e, Be, zn), He(e, we()), null;
  }
  function hi(e, n) {
    var t = Q;
    Q |= 1;
    try {
      return e(n);
    } finally {
      Q = t, Q === 0 && (Rt = we() + 500, Yr && Un());
    }
  }
  function lt(e) {
    Hn !== null && Hn.tag === 0 && !(Q & 6) && It();
    var n = Q;
    Q |= 1;
    var t = rn.transition, r = ne;
    try {
      if (rn.transition = null, ne = 1, e) return e();
    } finally {
      ne = r, rn.transition = t, Q = n, !(Q & 6) && Un();
    }
  }
  function vi() {
    Ze = Tt.current, se(Tt);
  }
  function ot(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Zc(t)), Ee !== null) for (t = Ee.return; t !== null; ) {
      var r = t;
      switch (xo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Pt(), se($e), se(Ie), Uo();
          break;
        case 5:
          Do(r);
          break;
        case 4:
          Pt();
          break;
        case 13:
          se(pe);
          break;
        case 19:
          se(pe);
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
    if (Pe = e, Ee = e = Kn(e.current, null), Re = Ze = n, xe = 0, mr = null, ai = ml = rt = 0, Be = hr = null, et !== null) {
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
      var t = Ee;
      try {
        if (To(), rl.current = ul, ll) {
          for (var r = me.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (tt = 0, Ne = Ce = me = null, sr = !1, ar = 0, si.current = null, t === null || t.return === null) {
          xe = 1, mr = n, Ee = null;
          break;
        }
        e: {
          var o = e, i = t.return, u = t, s = n;
          if (n = Re, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
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
          } else if (de && u.mode & 1) {
            var Se = Hs(i);
            if (Se !== null) {
              !(Se.flags & 65536) && (Se.flags |= 256), Ws(Se, i, u, o, n), zo(zt(s, u));
              break e;
            }
          }
          o = s = zt(s, u), xe !== 4 && (xe = 2), hr === null ? hr = [o] : hr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = Vs(o, s, n);
                ps(o, f);
                break e;
              case 1:
                u = s;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bn === null || !Bn.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var S = As(o, u, n);
                  ps(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ka(t);
      } catch (P) {
        n = P, Ee === t && t !== null && (Ee = t = t.return);
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
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Pe === null || !(rt & 268435455) && !(ml & 268435455) || Qn(Pe, Re);
  }
  function Sl(e, n) {
    var t = Q;
    Q |= 2;
    var r = wa();
    (Pe !== e || Re !== n) && (zn = null, ot(e, n));
    do
      try {
        _f();
        break;
      } catch (l) {
        ga(e, l);
      }
    while (!0);
    if (To(), Q = t, pl.current = r, Ee !== null) throw Error(m(261));
    return Pe = null, Re = 0, xe;
  }
  function _f() {
    for (; Ee !== null; ) Sa(Ee);
  }
  function Cf() {
    for (; Ee !== null && !Xa(); ) Sa(Ee);
  }
  function Sa(e) {
    var n = Ca(e.alternate, e, Ze);
    e.memoizedProps = e.pendingProps, n === null ? ka(e) : Ee = n, si.current = null;
  }
  function ka(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = yf(t, n), t !== null) {
          t.flags &= 32767, Ee = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          xe = 6, Ee = null;
          return;
        }
      } else if (t = vf(t, n, Ze), t !== null) {
        Ee = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ee = n;
        return;
      }
      Ee = n = e;
    } while (n !== null);
    xe === 0 && (xe = 5);
  }
  function it(e, n, t) {
    var r = ne, l = rn.transition;
    try {
      rn.transition = null, ne = 1, xf(e, n, t, r);
    } finally {
      rn.transition = l, ne = r;
    }
    return null;
  }
  function xf(e, n, t, r) {
    do
      It();
    while (Hn !== null);
    if (Q & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (lc(e, o), e === Pe && (Ee = Pe = null, Re = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, xa(Cr, function() {
      return It(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = rn.transition, rn.transition = null;
      var i = ne;
      ne = 1;
      var u = Q;
      Q |= 4, si.current = null, wf(e, t), fa(t, e), Wc(yo), Rr = !!vo, yo = vo = null, e.current = t, Sf(t), qa(), Q = u, ne = i, rn.transition = o;
    } else e.current = t;
    if (vl && (vl = !1, Hn = e, yl = l), o = e.pendingLanes, o === 0 && (Bn = null), Ja(t.stateNode), He(e, we()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = fi, fi = null, e;
    return yl & 1 && e.tag !== 0 && It(), o = e.pendingLanes, o & 1 ? e === di ? vr++ : (vr = 0, di = e) : vr = 0, Un(), null;
  }
  function It() {
    if (Hn !== null) {
      var e = au(yl), n = rn.transition, t = ne;
      try {
        if (rn.transition = null, ne = 16 > e ? 16 : e, Hn === null) var r = !1;
        else {
          if (e = Hn, Hn = null, yl = 0, Q & 6) throw Error(m(331));
          var l = Q;
          for (Q |= 4, _ = e.current; _ !== null; ) {
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
                      var Se = N.sibling;
                      N.sibling = null, N = Se;
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
                ge(u, u.return, P);
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
          if (Q = l, Un(), vn && typeof vn.onPostCommitFiberRoot == "function") try {
            vn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ne = t, rn.transition = n;
      }
    }
    return !1;
  }
  function Ea(e, n, t) {
    n = zt(t, n), n = Vs(e, n, 1), e = Vn(e, n, 1), n = Fe(), e !== null && (Vt(e, 1, n), He(e, n));
  }
  function ge(e, n, t) {
    if (e.tag === 3) Ea(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        Ea(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
          e = zt(t, e), e = As(n, e, 1), n = Vn(n, e, 1), e = Fe(), n !== null && (Vt(n, 1, e), He(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function Nf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Fe(), e.pingedLanes |= e.suspendedLanes & t, Pe === e && (Re & t) === t && (xe === 4 || xe === 3 && (Re & 130023424) === Re && 500 > we() - ci ? ot(e, 0) : ai |= t), He(e, n);
  }
  function _a(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = Fe();
    e = xn(e, n), e !== null && (Vt(e, n, t), He(e, t));
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
    if (e !== null) if (e.memoizedProps !== n.pendingProps || $e.current) Ae = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return Ae = !1, hf(e, n, t);
      Ae = !!(e.flags & 131072);
    }
    else Ae = !1, de && n.flags & 1048576 && rs(n, qr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = St(n, Ie.current);
        Nt(n, t), l = Ao(null, n, r, e, l, t);
        var o = Bo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Ve(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, jo(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Xo(n, r, e, t), n = Jo(null, n, r, !0, o, t)) : (n.tag = 0, de && o && Co(n), De(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Tf(r), e = cn(r, e), l) {
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
              n = Ks(null, n, r, cn(r.type, e), t);
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
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : cn(r, l), Zo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : cn(r, l), Gs(e, n, r, l, t);
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
          } else for (Ge = Mn(n.stateNode.containerInfo.firstChild), qe = n, de = !0, an = null, t = cs(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (_t(), r === l) {
              n = Pn(e, n, t);
              break e;
            }
            De(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return hs(n), e === null && Po(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, go(r, l) ? i = null : o !== null && go(r, o) && (n.flags |= 32), qs(e, n), De(e, n, i, t), n.child;
      case 6:
        return e === null && Po(n), null;
      case 13:
        return bs(e, n, t);
      case 4:
        return Mo(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Ct(n, null, r, t) : De(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : cn(r, l), Qs(e, n, r, l, t);
      case 7:
        return De(e, n, n.pendingProps, t), n.child;
      case 8:
        return De(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return De(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, ie(Jr, r._currentValue), r._currentValue = i, o !== null) if (sn(o.value, i)) {
            if (o.children === l.children && !$e.current) {
              n = Pn(e, n, t);
              break e;
            }
          } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = Nn(-1, t & -t), s.tag = 2;
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
          De(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Nt(n, t), l = nn(l), r = r(l), n.flags |= 1, De(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = cn(r, n.pendingProps), l = cn(r.type, l), Ks(e, n, r, l, t);
      case 15:
        return Ys(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : cn(r, l), cl(e, n), n.tag = 1, Ve(r) ? (e = !0, Kr(n)) : e = !1, Nt(n, t), Us(n, r, l), Xo(n, r, l, t), Jo(null, n, r, !0, e, t);
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
  function ln(e, n, t, r) {
    return new Lf(e, n, t, r);
  }
  function gi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tf(e) {
    if (typeof e == "function") return gi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === mn) return 11;
      if (e === hn) return 14;
    }
    return 2;
  }
  function Kn(e, n) {
    var t = e.alternate;
    return t === null ? (t = ln(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") gi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case ce:
        return ut(t.children, l, o, n);
      case ke:
        i = 8, l |= 8;
        break;
      case Qe:
        return e = ln(12, t, n, l | 2), e.elementType = Qe, e.lanes = o, e;
      case Ke:
        return e = ln(13, t, n, l), e.elementType = Ke, e.lanes = o, e;
      case on:
        return e = ln(19, t, n, l), e.elementType = on, e.lanes = o, e;
      case ye:
        return El(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Je:
            i = 10;
            break e;
          case Xn:
            i = 9;
            break e;
          case mn:
            i = 11;
            break e;
          case hn:
            i = 14;
            break e;
          case Ue:
            i = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = ln(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function ut(e, n, t, r) {
    return e = ln(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = ln(22, e, r, n), e.elementType = ye, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function wi(e, n, t) {
    return e = ln(6, e, null, n), e.lanes = t, e;
  }
  function Si(e, n, t) {
    return n = ln(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Rf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ki(e, n, t, r, l, o, i, u, s) {
    return e = new Rf(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = ln(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jo(o), e;
  }
  function If(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function Na(e) {
    if (!e) return Fn;
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
            if (Ve(n.type)) {
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
      if (Ve(t)) return es(e, t, n);
    }
    return n;
  }
  function Pa(e, n, t, r, l, o, i, u, s) {
    return e = ki(t, r, !0, e, l, o, i, u, s), e.context = Na(null), t = e.current, r = Fe(), l = Wn(t), o = Nn(r, l), o.callback = n ?? null, Vn(t, o, l), e.current.lanes = l, Vt(e, l, r), He(e, r), e;
  }
  function _l(e, n, t, r) {
    var l = n.current, o = Fe(), i = Wn(l);
    return t = Na(t), n.context === null ? n.context = t : n.pendingContext = t, n = Nn(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Vn(l, n, i), e !== null && (pn(e, l, i, o), el(e, l, i)), i;
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
      }), n[kn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = du();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < In.length && n !== 0 && n < In[t].priority; t++) ;
      In.splice(t, 0, e), t === 0 && hu(e);
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
      return e._reactRootContainer = i, e[kn] = i.current, er(e.nodeType === 8 ? e.parentNode : e), lt(), i;
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
    return e._reactRootContainer = s, e[kn] = s.current, er(e.nodeType === 8 ? e.parentNode : e), lt(function() {
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
          t !== 0 && (Yl(n, t | 1), He(n, we()), !(Q & 6) && (Rt = we() + 500, Un()));
        }
        break;
      case 13:
        lt(function() {
          var r = xn(e, 1);
          if (r !== null) {
            var l = Fe();
            pn(r, e, 1, l);
          }
        }), Ei(e, 1);
    }
  }, Xl = function(e) {
    if (e.tag === 13) {
      var n = xn(e, 134217728);
      if (n !== null) {
        var t = Fe();
        pn(n, e, 134217728, t);
      }
      Ei(e, 134217728);
    }
  }, fu = function(e) {
    if (e.tag === 13) {
      var n = Wn(e), t = xn(e, n);
      if (t !== null) {
        var r = Fe();
        pn(t, e, n, r);
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
  }, Vl = function(e, n, t) {
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
  return We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf, We.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ci(n)) throw Error(m(200));
    return If(e, n, null, t);
  }, We.createRoot = function(e, n) {
    if (!Ci(e)) throw Error(m(299));
    var t = !1, r = "", l = La;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = ki(e, 1, !1, null, null, t, !1, r, l), e[kn] = n.current, er(e.nodeType === 8 ? e.parentNode : e), new _i(n);
  }, We.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = tu(n), e = e === null ? null : e.stateNode, e;
  }, We.flushSync = function(e) {
    return lt(e);
  }, We.hydrate = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, We.hydrateRoot = function(e, n, t) {
    if (!Ci(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", i = La;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = Pa(n, null, e, 1, t ?? null, l, !1, o, i), e[kn] = n.current, er(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new xl(n);
  }, We.render = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, We.unmountComponentAtNode = function(e) {
    if (!Nl(e)) throw Error(m(40));
    return e._reactRootContainer ? (lt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[kn] = null;
      });
    }), !0) : !1;
  }, We.unstable_batchedUpdates = hi, We.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Nl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, We.version = "18.3.1-next-f1338f8080-20240426", We;
}
var Ua;
function Wf() {
  if (Ua) return Pi.exports;
  Ua = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (z) {
        console.error(z);
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
  const g = document.getElementById("product-info"), z = JSON.parse((g == null ? void 0 : g.textContent) || "{}");
  return window.shineon = window.shineon || {}, window.shineon.product_info = z, z;
}, Va = () => {
  const g = Tl();
  return Xf(g);
}, Xf = (g) => {
  var z;
  return !g.shop_cf || !((z = g.shop_pt_id_obj) != null && z.custom_fields) ? [] : g.shop_pt_id_obj.custom_fields.map((m) => ({
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
  return Array.from(g).map((z) => z.getAttribute("id"));
}, Zf = () => (Ti || Oi.variantInputs.forEach((g) => {
  if (g) {
    const z = parseInt(g.value);
    Ti = Mi.product.variants.find((m) => m.id === z);
  }
}), Ti), Jf = (g) => {
  clearTimeout(window.variantChangeTimeout), window.variantChangeTimeout = setTimeout(() => {
    g();
  }, 300);
}, bf = (g) => (Oi.variantInputs.forEach((z) => {
  z.addEventListener("change", g);
}), () => {
  Oi.variantInputs.forEach((z) => {
    z.removeEventListener("change", g);
  });
}), ed = ({ product_cf: g, required: z, formId: m, onBeforeInput: _e, onChange: F }) => {
  const ae = (K, te) => ({
    type: "text",
    id: K.id.key,
    name: `properties[${K.name}]`,
    autoComplete: "off",
    placeholder: K.placeholder,
    form: te,
    required: z,
    className: `so-field__input field__input ${K.class || ""}`,
    minLength: K.minlength > 0 ? K.minlength : void 0,
    maxLength: K.maxlength > 0 ? K.maxlength : 20,
    onBeforeInput: _e,
    onChange: F
  });
  return /* @__PURE__ */ G.jsx("input", { ...ae(g, m) });
}, Ri = [
  {
    type: "birthstone"
  },
  {
    type: "heart"
  }
], nd = ({
  formId: g,
  availableAccessories: z,
  currentVariant: m,
  InputField: _e,
  selectedAccessories: F,
  setSelectedAccessories: ae
}) => {
  const { state: K, dispatch: te } = Le.useContext(Di), U = Tl(), he = Va(), [ve, Z] = Le.useState([]), V = Le.useMemo(
    () => {
      var L;
      return ((L = U.variant_metafields[m.id]) == null ? void 0 : L.engravings) || 0;
    },
    [m.id, U.variant_metafields]
  ), W = Le.useMemo(
    () => he.filter(
      (L) => L.field_type === "engraving" && F.some((A) => {
        var D;
        return (D = L.class) == null ? void 0 : D.includes(A.type);
      })
    ),
    [he, F]
  ), b = (L, A) => {
    if (F.length >= V) return;
    const D = { type: L, option: A };
    ae([...F, D]), re(!1);
  }, I = (L, A) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((le) => {
      const ce = le.querySelector(`input[name="properties[${A}]"]`);
      ce && ce.type === "hidden" && ce.remove();
    });
    const J = [];
    W.slice(0, F.length).map((le, ce) => {
      const ke = F[ce], Qe = `${le.label} ${ke.option}`;
      A !== Qe && J.push(Qe);
    }), Z(J), ae((le) => le.filter((ce, ke) => ke !== L));
  };
  Le.useEffect(() => bf(() => {
    var J;
    const D = ((J = U.variant_metafields[m.id]) == null ? void 0 : J.engravings) || 0;
    F.length > D && ae((le) => le.slice(0, D));
  }), []), Le.useEffect(() => {
    var A;
    const L = ((A = U.variant_metafields[m.id]) == null ? void 0 : A.engravings) || 0;
    ae((D) => D.slice(0, L));
  }, [m]);
  const [M, re] = Le.useState(!1);
  return Le.useEffect(() => {
    const L = document.querySelectorAll('form[action="/cart/add"]');
    W.slice(0, F.length).map((D, J) => {
      const le = F[J], ce = `${D.label} ${le.option}`, ke = document.querySelector(`input[name="properties[${ce}]"]`);
      ke && ke.type === "hidden" && (ke.value = le.value || ""), L.forEach((Qe) => {
        const Je = Qe.querySelector(`input[name="properties[${ve[J]}]"]`);
        Je && (Je.name = `properties[${ce}]`);
      });
    });
    const A = (D) => {
      F.length < V && (D.preventDefault(), re(!0));
    };
    return L.forEach((D) => {
      const J = D.querySelector('button[type="submit"]');
      J && J.addEventListener("click", A);
    }), () => {
      L.forEach((D) => {
        const J = D.querySelector('button[type="submit"]');
        J && J.removeEventListener("click", A);
      });
    };
  }, [F, V]), /* @__PURE__ */ G.jsxs("div", { className: "so-accessories", children: [
    z.map((L) => /* @__PURE__ */ G.jsxs(
      "div",
      {
        className: `so-${L.field_type}-container ${M && F.length < V ? "so-validation-error" : ""}`,
        children: [
          /* @__PURE__ */ G.jsx("div", { className: "so-counter-wrap", children: /* @__PURE__ */ G.jsxs("span", { children: [
            "Selected: ",
            F.length,
            " of ",
            V
          ] }) }),
          /* @__PURE__ */ G.jsx("div", { className: "so-options-grid", children: /* @__PURE__ */ G.jsx("ul", { className: "so-accessories-list", children: L.options.map((A) => {
            var D;
            return /* @__PURE__ */ G.jsxs("li", { children: [
              /* @__PURE__ */ G.jsx(
                "input",
                {
                  type: "radio",
                  name: `accessory-${L.field_type}-${A}`,
                  value: A,
                  required: F.length < V,
                  style: { position: "absolute", opacity: 0 },
                  checked: F.some((J) => J.option === A),
                  onChange: () => b(L.field_type, A)
                }
              ),
              /* @__PURE__ */ G.jsxs(
                "label",
                {
                  className: "so-accessory-option",
                  onClick: () => b(L.field_type, A),
                  "aria-disabled": F.length >= V,
                  children: [
                    L.field_type === "birthstone" && /* @__PURE__ */ G.jsx(
                      "div",
                      {
                        className: `so-custom-field-birthstone-circle ${A} no-loop ${(D = L.class) != null && D.includes("engraving") ? "no-loop" : ""}`
                      }
                    ),
                    /* @__PURE__ */ G.jsx("span", { children: A })
                  ]
                }
              )
            ] }, A);
          }) }) })
        ]
      },
      L.field_type
    )),
    F.length > 0 && /* @__PURE__ */ G.jsx("div", { className: "so-engraving-fields-container", children: W.slice(0, F.length).map((L, A) => {
      const D = F[A], J = `${L.label} ${D.option}`;
      return /* @__PURE__ */ G.jsxs("div", { className: "so-input-with-remove", children: [
        /* @__PURE__ */ G.jsx(
          "button",
          {
            type: "button",
            className: "so-remove-acc",
            onClick: () => I(A, J),
            children: /* @__PURE__ */ G.jsx(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ G.jsx(
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
        /* @__PURE__ */ G.jsx(
          _e,
          {
            product_cf: {
              ...L,
              name: `${L.label} ${D.option}`,
              placeholder: L.name
            },
            required: L.required,
            formId: g,
            dispatch: te,
            index: A,
            selectedAccessories: F,
            setSelectedAccessories: ae
          }
        )
      ] });
    }) })
  ] });
}, Di = Le.createContext(), td = (g, z) => {
  switch (z.type) {
    case "UPDATE_SYMBOL_COUNT":
      return {
        ...g,
        symbolCounts: {
          ...g.symbolCounts,
          [z.payload.id]: z.payload.count
        }
      };
    case "SET_ERROR":
      return {
        ...g,
        showNotification: z.payload.show,
        errorSymbol: z.payload.symbol
      };
    case "RESET_SYMBOL_COUNTS":
      return {
        ...g,
        symbolCounts: {}
      };
    default:
      return g;
  }
}, Ii = Le.memo(({ product_cf: g, required: z, formId: m, index: _e, selectedAccessories: F, setSelectedAccessories: ae }) => {
  const { state: K, dispatch: te } = Le.useContext(Di), U = window.Shopify.locale, he = (I) => {
    const M = g.pattern;
    M && (new RegExp(M).test(I.data) ? te({
      type: "SET_ERROR",
      payload: { show: !1, symbol: "" }
    }) : (I.preventDefault(), te({
      type: "SET_ERROR",
      payload: { show: !0, symbol: I.data }
    })));
  }, ve = (I) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((re) => {
      let L = re.querySelector(`input[name="${I.name}"]`);
      L || (L = document.createElement("input"), L.type = "hidden", L.name = I.name, re.appendChild(L)), L.value = I.value;
    });
  }, [Z, V] = Le.useState({}), W = (I) => {
    const M = document.querySelectorAll('.so-hyper input[type="text"]'), re = {};
    M.forEach((L) => {
      L.required && !L.value.length && (re[L.name] = !0);
    }), V(re);
  }, b = (I) => {
    V((M) => ({
      ...M,
      [I.target.name]: !1
    })), te({
      type: "UPDATE_SYMBOL_COUNT",
      payload: { id: g.id.key, count: I.target.value.length }
    }), Jf(() => {
      ve(I.target);
    });
  };
  return Le.useEffect(() => {
    const I = document.querySelectorAll('form[action="/cart/add"]');
    return I.forEach((M) => {
      const re = M.querySelector('button[type="submit"]');
      re && re.addEventListener("click", W);
    }), () => {
      I.forEach((M) => {
        const re = M.querySelector('button[type="submit"]');
        re && re.removeEventListener("click", W);
      });
    };
  }, []), /* @__PURE__ */ G.jsxs("div", { className: `so-field-wrapper ${Z[`properties[${g.name}]`] ? "error" : ""}`, children: [
    /* @__PURE__ */ G.jsx("label", { className: "so-form__label", children: g.name }),
    /* @__PURE__ */ G.jsxs("div", { className: "so-field", children: [
      /* @__PURE__ */ G.jsxs("div", { className: "so-input-counter-w", children: [
        /* @__PURE__ */ G.jsx(
          ed,
          {
            product_cf: g,
            required: z,
            formId: m,
            onBeforeInput: he,
            onChange: b
          }
        ),
        !K.showNotification && /* @__PURE__ */ G.jsxs(
          "span",
          {
            className: `so-counter ${K.symbolCounts[g.id.key] ? "so-input-filled" : ""}`,
            children: [
              K.symbolCounts[g.id.key] || 0,
              "/",
              g.maxlength || 20
            ]
          }
        )
      ] }),
      K.showNotification && /* @__PURE__ */ G.jsx("span", { className: "so-wrong-input-notification", children: `"${K.errorSymbol}"${qf[U].errors.invalid_character}` })
    ] })
  ] });
}), rd = () => {
  var V;
  const g = Tl(), z = Va(), m = g.shop_info.sectionID ? "product-form-" + g.shop_info.sectionID : Gf(), [_e, F] = Le.useState(Zf()), [ae, K] = Le.useState([]), [te, U] = Le.useReducer(td, {
    symbolCounts: {},
    showNotification: !1,
    errorSymbol: ""
  });
  Le.useEffect(() => {
    const W = (M) => {
      F(
        g.product.variants.filter(
          (re) => re.id === parseInt(document.querySelector('[name="id"]').value)
        )[0]
      );
    }, b = g.trigger_selector ? g.trigger_selector : g.variant_id_input, I = document.querySelectorAll(b);
    return I.forEach((M) => M.addEventListener("change", W)), () => {
      I.forEach((M) => M.removeEventListener("change", W));
    };
  }, []);
  const he = z.filter(
    (W) => W.field_type === "engraving" && W.required && !Ri.some((b) => {
      var I;
      return (I = W.class) == null ? void 0 : I.includes(b.type);
    })
  ), ve = z.filter(
    (W) => W.field_type === "engraving" && !W.required && !Ri.some((b) => {
      var I;
      return (I = W.class) == null ? void 0 : I.includes(b.type);
    })
  ).slice(0, ((V = g.variant_metafields[_e.id]) == null ? void 0 : V.engravings) || 0), Z = z.filter((W) => Ri.some((b) => W.field_type === b.type));
  return /* @__PURE__ */ G.jsx(Di.Provider, { value: { state: te, dispatch: U }, children: /* @__PURE__ */ G.jsxs("div", { className: "so-hyper so-tw", children: [
    he.map((W, b) => /* @__PURE__ */ G.jsx(
      Ii,
      {
        product_cf: W,
        required: !0,
        formId: m,
        dispatch: U
      },
      `required-${b}`
    )),
    ve.map((W, b) => /* @__PURE__ */ G.jsx(
      Ii,
      {
        product_cf: W,
        required: !0,
        formId: m,
        dispatch: U
      },
      `optional-${b}`
    )),
    Z.length > 0 && /* @__PURE__ */ G.jsx(
      nd,
      {
        formId: m,
        availableAccessories: Z,
        currentVariant: _e,
        InputField: Ii,
        selectedAccessories: ae,
        setSelectedAccessories: K
      }
    )
  ] }) });
};
document.addEventListener("DOMContentLoaded", () => {
  const g = document.getElementById("so-hyper");
  g && Yf.createRoot(g).render(
    /* @__PURE__ */ G.jsx(Le.StrictMode, { children: /* @__PURE__ */ G.jsx(rd, {}) })
  );
});

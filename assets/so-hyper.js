function Df(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var Cu = { exports: {} }, yr = {}, xu = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function Mf() {
  if (za) return M;
  za = 1;
  var S = Symbol.for("react.element"), I = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), Ee = Symbol.for("react.strict_mode"), fe = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), se = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), me = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function K(c) {
    return c === null || typeof c != "object" ? null : (c = Z && c[Z] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var Pe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, F = Object.assign, U = {};
  function O(c, v, D) {
    this.props = c, this.context = v, this.refs = U, this.updater = D || Pe;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, O.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function we() {
  }
  we.prototype = O.prototype;
  function Ae(c, v, D) {
    this.props = c, this.context = v, this.refs = U, this.updater = D || Pe;
  }
  var Ye = Ae.prototype = new we();
  Ye.constructor = Ae, F(Ye, O.prototype), Ye.isPureReactComponent = !0;
  var he = Array.isArray, nn = Object.prototype.hasOwnProperty, ze = { current: null }, Ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(c, v, D) {
    var j, A = {}, B = null, Y = null;
    if (v != null) for (j in v.ref !== void 0 && (Y = v.ref), v.key !== void 0 && (B = "" + v.key), v) nn.call(v, j) && !Ie.hasOwnProperty(j) && (A[j] = v[j]);
    var W = arguments.length - 2;
    if (W === 1) A.children = D;
    else if (1 < W) {
      for (var b = Array(W), $e = 0; $e < W; $e++) b[$e] = arguments[$e + 2];
      A.children = b;
    }
    if (c && c.defaultProps) for (j in W = c.defaultProps, W) A[j] === void 0 && (A[j] = W[j]);
    return { $$typeof: S, type: c, key: B, ref: Y, props: A, _owner: ze.current };
  }
  function Pn(c, v) {
    return { $$typeof: S, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === S;
  }
  function Yn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(D) {
      return v[D];
    });
  }
  var fn = /\/+/g;
  function Be(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yn("" + c.key) : v.toString(36);
  }
  function tn(c, v, D, j, A) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var Y = !1;
    if (c === null) Y = !0;
    else switch (B) {
      case "string":
      case "number":
        Y = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case S:
          case I:
            Y = !0;
        }
    }
    if (Y) return Y = c, A = A(Y), c = j === "" ? "." + Be(Y, 0) : j, he(A) ? (D = "", c != null && (D = c.replace(fn, "$&/") + "/"), tn(A, v, D, "", function($e) {
      return $e;
    })) : A != null && (gn(A) && (A = Pn(A, D + (!A.key || Y && Y.key === A.key ? "" : ("" + A.key).replace(fn, "$&/") + "/") + c)), v.push(A)), 1;
    if (Y = 0, j = j === "" ? "." : j + ":", he(c)) for (var W = 0; W < c.length; W++) {
      B = c[W];
      var b = j + Be(B, W);
      Y += tn(B, v, D, b, A);
    }
    else if (b = K(c), typeof b == "function") for (c = b.call(c), W = 0; !(B = c.next()).done; ) B = B.value, b = j + Be(B, W++), Y += tn(B, v, D, b, A);
    else if (B === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return Y;
  }
  function dn(c, v, D) {
    if (c == null) return c;
    var j = [], A = 0;
    return tn(c, j, "", "", function(B) {
      return v.call(D, B, A++);
    }), j;
  }
  function Oe(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(D) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = D);
      }, function(D) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = D);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var re = { current: null }, k = { transition: null }, L = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: k, ReactCurrentOwner: ze };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: dn, forEach: function(c, v, D) {
    dn(c, function() {
      v.apply(this, arguments);
    }, D);
  }, count: function(c) {
    var v = 0;
    return dn(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return dn(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!gn(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, M.Component = O, M.Fragment = m, M.Profiler = fe, M.PureComponent = Ae, M.StrictMode = Ee, M.Suspense = H, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, M.act = C, M.cloneElement = function(c, v, D) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var j = F({}, c.props), A = c.key, B = c.ref, Y = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (B = v.ref, Y = ze.current), v.key !== void 0 && (A = "" + v.key), c.type && c.type.defaultProps) var W = c.type.defaultProps;
      for (b in v) nn.call(v, b) && !Ie.hasOwnProperty(b) && (j[b] = v[b] === void 0 && W !== void 0 ? W[b] : v[b]);
    }
    var b = arguments.length - 2;
    if (b === 1) j.children = D;
    else if (1 < b) {
      W = Array(b);
      for (var $e = 0; $e < b; $e++) W[$e] = arguments[$e + 2];
      j.children = W;
    }
    return { $$typeof: S, type: c.type, key: A, ref: B, props: j, _owner: Y };
  }, M.createContext = function(c) {
    return c = { $$typeof: se, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: G, _context: c }, c.Consumer = c;
  }, M.createElement = Xe, M.createFactory = function(c) {
    var v = Xe.bind(null, c);
    return v.type = c, v;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(c) {
    return { $$typeof: oe, render: c };
  }, M.isValidElement = gn, M.lazy = function(c) {
    return { $$typeof: ae, _payload: { _status: -1, _result: c }, _init: Oe };
  }, M.memo = function(c, v) {
    return { $$typeof: me, type: c, compare: v === void 0 ? null : v };
  }, M.startTransition = function(c) {
    var v = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = v;
    }
  }, M.unstable_act = C, M.useCallback = function(c, v) {
    return re.current.useCallback(c, v);
  }, M.useContext = function(c) {
    return re.current.useContext(c);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(c) {
    return re.current.useDeferredValue(c);
  }, M.useEffect = function(c, v) {
    return re.current.useEffect(c, v);
  }, M.useId = function() {
    return re.current.useId();
  }, M.useImperativeHandle = function(c, v, D) {
    return re.current.useImperativeHandle(c, v, D);
  }, M.useInsertionEffect = function(c, v) {
    return re.current.useInsertionEffect(c, v);
  }, M.useLayoutEffect = function(c, v) {
    return re.current.useLayoutEffect(c, v);
  }, M.useMemo = function(c, v) {
    return re.current.useMemo(c, v);
  }, M.useReducer = function(c, v, D) {
    return re.current.useReducer(c, v, D);
  }, M.useRef = function(c) {
    return re.current.useRef(c);
  }, M.useState = function(c) {
    return re.current.useState(c);
  }, M.useSyncExternalStore = function(c, v, D) {
    return re.current.useSyncExternalStore(c, v, D);
  }, M.useTransition = function() {
    return re.current.useTransition();
  }, M.version = "18.3.1", M;
}
var Ta;
function Ru() {
  return Ta || (Ta = 1, xu.exports = Mf()), xu.exports;
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
var La;
function Ff() {
  if (La) return yr;
  La = 1;
  var S = Ru(), I = Symbol.for("react.element"), m = Symbol.for("react.fragment"), Ee = Object.prototype.hasOwnProperty, fe = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function se(oe, H, me) {
    var ae, Z = {}, K = null, Pe = null;
    me !== void 0 && (K = "" + me), H.key !== void 0 && (K = "" + H.key), H.ref !== void 0 && (Pe = H.ref);
    for (ae in H) Ee.call(H, ae) && !G.hasOwnProperty(ae) && (Z[ae] = H[ae]);
    if (oe && oe.defaultProps) for (ae in H = oe.defaultProps, H) Z[ae] === void 0 && (Z[ae] = H[ae]);
    return { $$typeof: I, type: oe, key: K, ref: Pe, props: Z, _owner: fe.current };
  }
  return yr.Fragment = m, yr.jsx = se, yr.jsxs = se, yr;
}
var Ra;
function jf() {
  return Ra || (Ra = 1, Cu.exports = Ff()), Cu.exports;
}
var Re = jf(), gr = Ru(), Tl = {}, Nu = { exports: {} }, Ve = {}, Pu = { exports: {} }, zu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Uf() {
  return Ia || (Ia = 1, function(S) {
    function I(k, L) {
      var C = k.length;
      k.push(L);
      e: for (; 0 < C; ) {
        var c = C - 1 >>> 1, v = k[c];
        if (0 < fe(v, L)) k[c] = L, k[C] = v, C = c;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function Ee(k) {
      if (k.length === 0) return null;
      var L = k[0], C = k.pop();
      if (C !== L) {
        k[0] = C;
        e: for (var c = 0, v = k.length, D = v >>> 1; c < D; ) {
          var j = 2 * (c + 1) - 1, A = k[j], B = j + 1, Y = k[B];
          if (0 > fe(A, C)) B < v && 0 > fe(Y, A) ? (k[c] = Y, k[B] = C, c = B) : (k[c] = A, k[j] = C, c = j);
          else if (B < v && 0 > fe(Y, C)) k[c] = Y, k[B] = C, c = B;
          else break e;
        }
      }
      return L;
    }
    function fe(k, L) {
      var C = k.sortIndex - L.sortIndex;
      return C !== 0 ? C : k.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var G = performance;
      S.unstable_now = function() {
        return G.now();
      };
    } else {
      var se = Date, oe = se.now();
      S.unstable_now = function() {
        return se.now() - oe;
      };
    }
    var H = [], me = [], ae = 1, Z = null, K = 3, Pe = !1, F = !1, U = !1, O = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, Ae = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ye(k) {
      for (var L = m(me); L !== null; ) {
        if (L.callback === null) Ee(me);
        else if (L.startTime <= k) Ee(me), L.sortIndex = L.expirationTime, I(H, L);
        else break;
        L = m(me);
      }
    }
    function he(k) {
      if (U = !1, Ye(k), !F) if (m(H) !== null) F = !0, Oe(nn);
      else {
        var L = m(me);
        L !== null && re(he, L.startTime - k);
      }
    }
    function nn(k, L) {
      F = !1, U && (U = !1, we(Xe), Xe = -1), Pe = !0;
      var C = K;
      try {
        for (Ye(L), Z = m(H); Z !== null && (!(Z.expirationTime > L) || k && !Yn()); ) {
          var c = Z.callback;
          if (typeof c == "function") {
            Z.callback = null, K = Z.priorityLevel;
            var v = c(Z.expirationTime <= L);
            L = S.unstable_now(), typeof v == "function" ? Z.callback = v : Z === m(H) && Ee(H), Ye(L);
          } else Ee(H);
          Z = m(H);
        }
        if (Z !== null) var D = !0;
        else {
          var j = m(me);
          j !== null && re(he, j.startTime - L), D = !1;
        }
        return D;
      } finally {
        Z = null, K = C, Pe = !1;
      }
    }
    var ze = !1, Ie = null, Xe = -1, Pn = 5, gn = -1;
    function Yn() {
      return !(S.unstable_now() - gn < Pn);
    }
    function fn() {
      if (Ie !== null) {
        var k = S.unstable_now();
        gn = k;
        var L = !0;
        try {
          L = Ie(!0, k);
        } finally {
          L ? Be() : (ze = !1, Ie = null);
        }
      } else ze = !1;
    }
    var Be;
    if (typeof Ae == "function") Be = function() {
      Ae(fn);
    };
    else if (typeof MessageChannel < "u") {
      var tn = new MessageChannel(), dn = tn.port2;
      tn.port1.onmessage = fn, Be = function() {
        dn.postMessage(null);
      };
    } else Be = function() {
      O(fn, 0);
    };
    function Oe(k) {
      Ie = k, ze || (ze = !0, Be());
    }
    function re(k, L) {
      Xe = O(function() {
        k(S.unstable_now());
      }, L);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, S.unstable_continueExecution = function() {
      F || Pe || (F = !0, Oe(nn));
    }, S.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < k ? Math.floor(1e3 / k) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, S.unstable_getFirstCallbackNode = function() {
      return m(H);
    }, S.unstable_next = function(k) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = K;
      }
      var C = K;
      K = L;
      try {
        return k();
      } finally {
        K = C;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(k, L) {
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
      var C = K;
      K = k;
      try {
        return L();
      } finally {
        K = C;
      }
    }, S.unstable_scheduleCallback = function(k, L, C) {
      var c = S.unstable_now();
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
      return v = C + v, k = { id: ae++, callback: L, priorityLevel: k, startTime: C, expirationTime: v, sortIndex: -1 }, C > c ? (k.sortIndex = C, I(me, k), m(H) === null && k === m(me) && (U ? (we(Xe), Xe = -1) : U = !0, re(he, C - c))) : (k.sortIndex = v, I(H, k), F || Pe || (F = !0, Oe(nn))), k;
    }, S.unstable_shouldYield = Yn, S.unstable_wrapCallback = function(k) {
      var L = K;
      return function() {
        var C = K;
        K = L;
        try {
          return k.apply(this, arguments);
        } finally {
          K = C;
        }
      };
    };
  }(zu)), zu;
}
var Oa;
function Vf() {
  return Oa || (Oa = 1, Pu.exports = Uf()), Pu.exports;
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
var Da;
function Af() {
  if (Da) return Ve;
  Da = 1;
  var S = Ru(), I = Vf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ee = /* @__PURE__ */ new Set(), fe = {};
  function G(e, n) {
    se(e, n), se(e + "Capture", n);
  }
  function se(e, n) {
    for (fe[e] = n, e = 0; e < n.length; e++) Ee.add(n[e]);
  }
  var oe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), H = Object.prototype.hasOwnProperty, me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ae = {}, Z = {};
  function K(e) {
    return H.call(Z, e) ? !0 : H.call(ae, e) ? !1 : me.test(e) ? Z[e] = !0 : (ae[e] = !0, !1);
  }
  function Pe(e, n, t, r) {
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
  function F(e, n, t, r) {
    if (n === null || typeof n > "u" || Pe(e, n, t, r)) return !0;
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
  function U(e, n, t, r, l, o, u) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = u;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    O[e] = new U(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    O[n] = new U(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    O[e] = new U(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    O[e] = new U(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    O[e] = new U(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    O[e] = new U(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    O[e] = new U(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    O[e] = new U(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    O[e] = new U(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var we = /[\-:]([a-z])/g;
  function Ae(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      we,
      Ae
    );
    O[n] = new U(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(we, Ae);
    O[n] = new U(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(we, Ae);
    O[n] = new U(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    O[e] = new U(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new U("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    O[e] = new U(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Ye(e, n, t, r) {
    var l = O.hasOwnProperty(n) ? O[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (F(n, t, l, r) && (t = null), r || l === null ? K(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var he = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, nn = Symbol.for("react.element"), ze = Symbol.for("react.portal"), Ie = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), fn = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), tn = Symbol.for("react.suspense_list"), dn = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function L(e) {
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
  var D = !1;
  function j(e, n) {
    if (!e || D) return "";
    D = !0;
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
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
        for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if (u--, i--, 0 > i || l[u] !== o[i]) {
                var s = `
` + l[u].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= u && 0 <= i);
          break;
        }
      }
    } finally {
      D = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function A(e) {
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
        return e = j(e.type, !1), e;
      case 11:
        return e = j(e.type.render, !1), e;
      case 1:
        return e = j(e.type, !0), e;
      default:
        return "";
    }
  }
  function B(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ie:
        return "Fragment";
      case ze:
        return "Portal";
      case Pn:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case Be:
        return "Suspense";
      case tn:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yn:
        return (e.displayName || "Context") + ".Consumer";
      case gn:
        return (e._context.displayName || "Context") + ".Provider";
      case fn:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case dn:
        return n = e.displayName || null, n !== null ? n : B(e.type) || "Memo";
      case Oe:
        n = e._payload, e = e._init;
        try {
          return B(e(n));
        } catch {
        }
    }
    return null;
  }
  function Y(e) {
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
        return B(n);
      case 8:
        return n === Xe ? "StrictMode" : "Mode";
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
  function W(e) {
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
  function b(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function $e(e) {
    var n = b(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, o = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(u) {
        r = "" + u, o.call(this, u);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = $e(e));
  }
  function Du(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = b(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ll(e, n) {
    var t = n.checked;
    return C({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Mu(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = W(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Fu(e, n) {
    n = n.checked, n != null && Ye(e, "checked", n, !1);
  }
  function Rl(e, n) {
    Fu(e, n);
    var t = W(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Il(e, n.type, t) : n.hasOwnProperty("defaultValue") && Il(e, n.type, W(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function ju(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Il(e, n, t) {
    (n !== "number" || Sr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var It = Array.isArray;
  function it(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + W(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ol(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return C({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Uu(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (It(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: W(t) };
  }
  function Vu(e, n) {
    var t = W(n.value), r = W(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Au(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Bu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bu(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, $u = function(e) {
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
  function Ot(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Dt = {
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
  }, Ua = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dt).forEach(function(e) {
    Ua.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Dt[n] = Dt[e];
    });
  });
  function Hu(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Dt.hasOwnProperty(e) && Dt[e] ? ("" + n).trim() : n + "px";
  }
  function Wu(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = Hu(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var Va = C({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ml(e, n) {
    if (n) {
      if (Va[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
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
  var jl = null;
  function Ul(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vl = null, st = null, at = null;
  function Qu(e) {
    if (e = tr(e)) {
      if (typeof Vl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), Vl(e.stateNode, e.type, n));
    }
  }
  function Ku(e) {
    st ? at ? at.push(e) : at = [e] : st = e;
  }
  function Yu() {
    if (st) {
      var e = st, n = at;
      if (at = st = null, Qu(e), n) for (e = 0; e < n.length; e++) Qu(n[e]);
    }
  }
  function Xu(e, n) {
    return e(n);
  }
  function Gu() {
  }
  var Al = !1;
  function Zu(e, n, t) {
    if (Al) return e(n, t);
    Al = !0;
    try {
      return Xu(e, n, t);
    } finally {
      Al = !1, (st !== null || at !== null) && (Gu(), Yu());
    }
  }
  function Mt(e, n) {
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
  if (oe) try {
    var Ft = {};
    Object.defineProperty(Ft, "passive", { get: function() {
      Bl = !0;
    } }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
  } catch {
    Bl = !1;
  }
  function Aa(e, n, t, r, l, o, u, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var jt = !1, Er = null, _r = !1, $l = null, Ba = { onError: function(e) {
    jt = !0, Er = e;
  } };
  function $a(e, n, t, r, l, o, u, i, s) {
    jt = !1, Er = null, Aa.apply(Ba, arguments);
  }
  function Ha(e, n, t, r, l, o, u, i, s) {
    if ($a.apply(this, arguments), jt) {
      if (jt) {
        var p = Er;
        jt = !1, Er = null;
      } else throw Error(m(198));
      _r || (_r = !0, $l = p);
    }
  }
  function Xn(e) {
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
  function Ju(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function qu(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Wa(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Xn(e), n === null) throw Error(m(188));
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
          if (o === t) return qu(l), e;
          if (o === r) return qu(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) t = l, r = o;
      else {
        for (var u = !1, i = l.child; i; ) {
          if (i === t) {
            u = !0, t = l, r = o;
            break;
          }
          if (i === r) {
            u = !0, r = l, t = o;
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === t) {
              u = !0, t = o, r = l;
              break;
            }
            if (i === r) {
              u = !0, r = o, t = l;
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function bu(e) {
    return e = Wa(e), e !== null ? ei(e) : null;
  }
  function ei(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = ei(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var ni = I.unstable_scheduleCallback, ti = I.unstable_cancelCallback, Qa = I.unstable_shouldYield, Ka = I.unstable_requestPaint, ue = I.unstable_now, Ya = I.unstable_getCurrentPriorityLevel, Hl = I.unstable_ImmediatePriority, ri = I.unstable_UserBlockingPriority, Cr = I.unstable_NormalPriority, Xa = I.unstable_LowPriority, li = I.unstable_IdlePriority, xr = null, pn = null;
  function Ga(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function") try {
      pn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var rn = Math.clz32 ? Math.clz32 : qa, Za = Math.log, Ja = Math.LN2;
  function qa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Za(e) / Ja | 0) | 0;
  }
  var Nr = 64, Pr = 4194304;
  function Ut(e) {
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
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = t & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? r = Ut(i) : (o &= u, o !== 0 && (r = Ut(o)));
    } else u = t & ~l, u !== 0 ? r = Ut(u) : o !== 0 && (r = Ut(o));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - rn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function ba(e, n) {
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
  function ec(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var u = 31 - rn(o), i = 1 << u, s = l[u];
      s === -1 ? (!(i & t) || i & r) && (l[u] = ba(i, n)) : s <= n && (e.expiredLanes |= i), o &= ~i;
    }
  }
  function Wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function oi() {
    var e = Nr;
    return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
  }
  function Ql(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - rn(n), e[n] = t;
  }
  function nc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - rn(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Kl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - rn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var Q = 0;
  function ui(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ii, Yl, si, ai, ci, Xl = !1, Tr = [], zn = null, Tn = null, Ln = null, At = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Rn = [], tc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fi(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
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
  function $t(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && Yl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function rc(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return zn = $t(zn, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = $t(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return Ln = $t(Ln, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return At.set(o, $t(At.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Bt.set(o, $t(Bt.get(o) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function di(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Ju(t), n !== null) {
            e.blockedOn = n, ci(e.priority, function() {
              si(t);
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
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        jl = r, t.target.dispatchEvent(r), jl = null;
      } else return n = tr(t), n !== null && Yl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function pi(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function lc() {
    Xl = !1, zn !== null && Lr(zn) && (zn = null), Tn !== null && Lr(Tn) && (Tn = null), Ln !== null && Lr(Ln) && (Ln = null), At.forEach(pi), Bt.forEach(pi);
  }
  function Ht(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Xl || (Xl = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, lc)));
  }
  function Wt(e) {
    function n(l) {
      return Ht(l, e);
    }
    if (0 < Tr.length) {
      Ht(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && Ht(zn, e), Tn !== null && Ht(Tn, e), Ln !== null && Ht(Ln, e), At.forEach(n), Bt.forEach(n), t = 0; t < Rn.length; t++) r = Rn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && (t = Rn[0], t.blockedOn === null); ) di(t), t.blockedOn === null && Rn.shift();
  }
  var ct = he.ReactCurrentBatchConfig, Rr = !0;
  function oc(e, n, t, r) {
    var l = Q, o = ct.transition;
    ct.transition = null;
    try {
      Q = 1, Gl(e, n, t, r);
    } finally {
      Q = l, ct.transition = o;
    }
  }
  function uc(e, n, t, r) {
    var l = Q, o = ct.transition;
    ct.transition = null;
    try {
      Q = 4, Gl(e, n, t, r);
    } finally {
      Q = l, ct.transition = o;
    }
  }
  function Gl(e, n, t, r) {
    if (Rr) {
      var l = Zl(e, n, t, r);
      if (l === null) mo(e, n, r, Ir, t), fi(e, r);
      else if (rc(l, e, n, t, r)) r.stopPropagation();
      else if (fi(e, r), n & 4 && -1 < tc.indexOf(e)) {
        for (; l !== null; ) {
          var o = tr(l);
          if (o !== null && ii(o), o = Zl(e, n, t, r), o === null && mo(e, n, r, Ir, t), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else mo(e, n, r, null, t);
    }
  }
  var Ir = null;
  function Zl(e, n, t, r) {
    if (Ir = null, e = Ul(r), e = Gn(e), e !== null) if (n = Xn(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Ju(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Ir = e, null;
  }
  function mi(e) {
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
        switch (Ya()) {
          case Hl:
            return 1;
          case ri:
            return 4;
          case Cr:
          case Xa:
            return 16;
          case li:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var In = null, Jl = null, Or = null;
  function hi() {
    if (Or) return Or;
    var e, n = Jl, t = n.length, r, l = "value" in In ? In.value : In.textContent, o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var u = t - e;
    for (r = 1; r <= u && n[t - r] === l[o - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Dr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mr() {
    return !0;
  }
  function vi() {
    return !1;
  }
  function He(e) {
    function n(t, r, l, o, u) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Mr : vi, this.isPropagationStopped = vi, this;
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
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ql = He(ft), Qt = C({}, ft, { view: 0, detail: 0 }), ic = He(Qt), bl, eo, Kt, Fr = C({}, Qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: to, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Kt && (Kt && e.type === "mousemove" ? (bl = e.screenX - Kt.screenX, eo = e.screenY - Kt.screenY) : eo = bl = 0, Kt = e), bl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : eo;
  } }), yi = He(Fr), sc = C({}, Fr, { dataTransfer: 0 }), ac = He(sc), cc = C({}, Qt, { relatedTarget: 0 }), no = He(cc), fc = C({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), dc = He(fc), pc = C({}, ft, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), mc = He(pc), hc = C({}, ft, { data: 0 }), gi = He(hc), vc = {
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
  }, yc = {
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
  }, gc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function wc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = gc[e]) ? !!n[e] : !1;
  }
  function to() {
    return wc;
  }
  var Sc = C({}, Qt, { key: function(e) {
    if (e.key) {
      var n = vc[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: to, charCode: function(e) {
    return e.type === "keypress" ? Dr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), kc = He(Sc), Ec = C({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wi = He(Ec), _c = C({}, Qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: to }), Cc = He(_c), xc = C({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nc = He(xc), Pc = C({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zc = He(Pc), Tc = [9, 13, 27, 32], ro = oe && "CompositionEvent" in window, Yt = null;
  oe && "documentMode" in document && (Yt = document.documentMode);
  var Lc = oe && "TextEvent" in window && !Yt, Si = oe && (!ro || Yt && 8 < Yt && 11 >= Yt), ki = " ", Ei = !1;
  function _i(e, n) {
    switch (e) {
      case "keyup":
        return Tc.indexOf(n.keyCode) !== -1;
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
  function Ci(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function Rc(e, n) {
    switch (e) {
      case "compositionend":
        return Ci(n);
      case "keypress":
        return n.which !== 32 ? null : (Ei = !0, ki);
      case "textInput":
        return e = n.data, e === ki && Ei ? null : e;
      default:
        return null;
    }
  }
  function Ic(e, n) {
    if (dt) return e === "compositionend" || !ro && _i(e, n) ? (e = hi(), Or = Jl = In = null, dt = !1, e) : null;
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
        return Si && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Oc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function xi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Oc[e.type] : n === "textarea";
  }
  function Ni(e, n, t, r) {
    Ku(r), n = Br(n, "onChange"), 0 < n.length && (t = new ql("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Xt = null, Gt = null;
  function Dc(e) {
    Wi(e, 0);
  }
  function jr(e) {
    var n = yt(e);
    if (Du(n)) return e;
  }
  function Mc(e, n) {
    if (e === "change") return n;
  }
  var Pi = !1;
  if (oe) {
    var lo;
    if (oe) {
      var oo = "oninput" in document;
      if (!oo) {
        var zi = document.createElement("div");
        zi.setAttribute("oninput", "return;"), oo = typeof zi.oninput == "function";
      }
      lo = oo;
    } else lo = !1;
    Pi = lo && (!document.documentMode || 9 < document.documentMode);
  }
  function Ti() {
    Xt && (Xt.detachEvent("onpropertychange", Li), Gt = Xt = null);
  }
  function Li(e) {
    if (e.propertyName === "value" && jr(Gt)) {
      var n = [];
      Ni(n, Gt, e, Ul(e)), Zu(Dc, n);
    }
  }
  function Fc(e, n, t) {
    e === "focusin" ? (Ti(), Xt = n, Gt = t, Xt.attachEvent("onpropertychange", Li)) : e === "focusout" && Ti();
  }
  function jc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(Gt);
  }
  function Uc(e, n) {
    if (e === "click") return jr(n);
  }
  function Vc(e, n) {
    if (e === "input" || e === "change") return jr(n);
  }
  function Ac(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var ln = typeof Object.is == "function" ? Object.is : Ac;
  function Zt(e, n) {
    if (ln(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!H.call(n, l) || !ln(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Ri(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ii(e, n) {
    var t = Ri(e);
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
      t = Ri(t);
    }
  }
  function Oi(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Oi(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Di() {
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
  function Bc(e) {
    var n = Di(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Oi(t.ownerDocument.documentElement, t)) {
      if (r !== null && uo(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ii(t, o);
          var u = Ii(
            t,
            r
          );
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(u.node, u.offset)) : (n.setEnd(u.node, u.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var $c = oe && "documentMode" in document && 11 >= document.documentMode, pt = null, io = null, Jt = null, so = !1;
  function Mi(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    so || pt == null || pt !== Sr(r) || (r = pt, "selectionStart" in r && uo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Br(io, "onSelect"), 0 < r.length && (n = new ql("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var mt = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, ao = {}, Fi = {};
  oe && (Fi = document.createElement("div").style, "AnimationEvent" in window || (delete mt.animationend.animation, delete mt.animationiteration.animation, delete mt.animationstart.animation), "TransitionEvent" in window || delete mt.transitionend.transition);
  function Vr(e) {
    if (ao[e]) return ao[e];
    if (!mt[e]) return e;
    var n = mt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in Fi) return ao[e] = n[t];
    return e;
  }
  var ji = Vr("animationend"), Ui = Vr("animationiteration"), Vi = Vr("animationstart"), Ai = Vr("transitionend"), Bi = /* @__PURE__ */ new Map(), $i = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(e, n) {
    Bi.set(e, n), G(n, [e]);
  }
  for (var co = 0; co < $i.length; co++) {
    var fo = $i[co], Hc = fo.toLowerCase(), Wc = fo[0].toUpperCase() + fo.slice(1);
    On(Hc, "on" + Wc);
  }
  On(ji, "onAnimationEnd"), On(Ui, "onAnimationIteration"), On(Vi, "onAnimationStart"), On("dblclick", "onDoubleClick"), On("focusin", "onFocus"), On("focusout", "onBlur"), On(Ai, "onTransitionEnd"), se("onMouseEnter", ["mouseout", "mouseover"]), se("onMouseLeave", ["mouseout", "mouseover"]), se("onPointerEnter", ["pointerout", "pointerover"]), se("onPointerLeave", ["pointerout", "pointerover"]), G("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), G("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), G("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), G("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), G("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), G("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qc = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
  function Hi(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Ha(r, n, void 0, e), e.currentTarget = null;
  }
  function Wi(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n) for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== o && l.isPropagationStopped()) break e;
          Hi(l, i, p), o = s;
        }
        else for (u = 0; u < r.length; u++) {
          if (i = r[u], s = i.instance, p = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped()) break e;
          Hi(l, i, p), o = s;
        }
      }
    }
    if (_r) throw e = $l, _r = !1, $l = null, e;
  }
  function J(e, n) {
    var t = n[So];
    t === void 0 && (t = n[So] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Qi(n, e, 2, !1), t.add(r));
  }
  function po(e, n, t) {
    var r = 0;
    n && (r |= 4), Qi(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Ar]) {
      e[Ar] = !0, Ee.forEach(function(t) {
        t !== "selectionchange" && (Qc.has(t) || po(t, !1, e), po(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || (n[Ar] = !0, po("selectionchange", !1, n));
    }
  }
  function Qi(e, n, t, r) {
    switch (mi(n)) {
      case 1:
        var l = oc;
        break;
      case 4:
        l = uc;
        break;
      default:
        l = Gl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Bl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function mo(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var s = u.tag;
          if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          u = u.return;
        }
        for (; i !== null; ) {
          if (u = Gn(i), u === null) return;
          if (s = u.tag, s === 5 || s === 6) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Zu(function() {
      var p = o, y = Ul(t), g = [];
      e: {
        var h = Bi.get(e);
        if (h !== void 0) {
          var E = ql, x = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0) break e;
            case "keydown":
            case "keyup":
              E = kc;
              break;
            case "focusin":
              x = "focus", E = no;
              break;
            case "focusout":
              x = "blur", E = no;
              break;
            case "beforeblur":
            case "afterblur":
              E = no;
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
              E = yi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = ac;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Cc;
              break;
            case ji:
            case Ui:
            case Vi:
              E = dc;
              break;
            case Ai:
              E = Nc;
              break;
            case "scroll":
              E = ic;
              break;
            case "wheel":
              E = zc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = mc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = wi;
          }
          var N = (n & 4) !== 0, ie = !N && e === "scroll", f = N ? h !== null ? h + "Capture" : null : h;
          N = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Mt(a, f), w != null && N.push(er(a, w, d)))), ie) break;
            a = a.return;
          }
          0 < N.length && (h = new E(h, x, null, t, y), g.push({ event: h, listeners: N }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && t !== jl && (x = t.relatedTarget || t.fromElement) && (Gn(x) || x[wn])) break e;
          if ((E || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (x = t.relatedTarget || t.toElement, E = p, x = x ? Gn(x) : null, x !== null && (ie = Xn(x), x !== ie || x.tag !== 5 && x.tag !== 6) && (x = null)) : (E = null, x = p), E !== x)) {
            if (N = yi, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (N = wi, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), ie = E == null ? h : yt(E), d = x == null ? h : yt(x), h = new N(w, a + "leave", E, t, y), h.target = ie, h.relatedTarget = d, w = null, Gn(y) === p && (N = new N(f, a + "enter", x, t, y), N.target = d, N.relatedTarget = ie, w = N), ie = w, E && x) n: {
              for (N = E, f = x, a = 0, d = N; d; d = ht(d)) a++;
              for (d = 0, w = f; w; w = ht(w)) d++;
              for (; 0 < a - d; ) N = ht(N), a--;
              for (; 0 < d - a; ) f = ht(f), d--;
              for (; a--; ) {
                if (N === f || f !== null && N === f.alternate) break n;
                N = ht(N), f = ht(f);
              }
              N = null;
            }
            else N = null;
            E !== null && Ki(g, h, E, N, !1), x !== null && ie !== null && Ki(g, ie, x, N, !0);
          }
        }
        e: {
          if (h = p ? yt(p) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var P = Mc;
          else if (xi(h)) if (Pi) P = Vc;
          else {
            P = jc;
            var z = Fc;
          }
          else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Uc);
          if (P && (P = P(e, p))) {
            Ni(g, P, t, y);
            break e;
          }
          z && z(e, h, p), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Il(h, "number", h.value);
        }
        switch (z = p ? yt(p) : window, e) {
          case "focusin":
            (xi(z) || z.contentEditable === "true") && (pt = z, io = p, Jt = null);
            break;
          case "focusout":
            Jt = io = pt = null;
            break;
          case "mousedown":
            so = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            so = !1, Mi(g, t, y);
            break;
          case "selectionchange":
            if ($c) break;
          case "keydown":
          case "keyup":
            Mi(g, t, y);
        }
        var T;
        if (ro) e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
        else dt ? _i(e, t) && (R = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (R = "onCompositionStart");
        R && (Si && t.locale !== "ko" && (dt || R !== "onCompositionStart" ? R === "onCompositionEnd" && dt && (T = hi()) : (In = y, Jl = "value" in In ? In.value : In.textContent, dt = !0)), z = Br(p, R), 0 < z.length && (R = new gi(R, e, null, t, y), g.push({ event: R, listeners: z }), T ? R.data = T : (T = Ci(t), T !== null && (R.data = T)))), (T = Lc ? Rc(e, t) : Ic(e, t)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new gi("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = T));
      }
      Wi(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Mt(e, t), o != null && r.unshift(er(e, o, l)), o = Mt(e, n), o != null && r.push(er(e, o, l))), e = e.return;
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ki(e, n, t, r, l) {
    for (var o = n._reactName, u = []; t !== null && t !== r; ) {
      var i = t, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Mt(t, o), s != null && u.unshift(er(t, s, i))) : l || (s = Mt(t, o), s != null && u.push(er(t, s, i)))), t = t.return;
    }
    u.length !== 0 && e.push({ event: n, listeners: u });
  }
  var Kc = /\r\n?/g, Yc = /\u0000|\uFFFD/g;
  function Yi(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kc, `
`).replace(Yc, "");
  }
  function $r(e, n, t) {
    if (n = Yi(n), Yi(e) !== n && t) throw Error(m(425));
  }
  function Hr() {
  }
  var ho = null, vo = null;
  function yo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var go = typeof setTimeout == "function" ? setTimeout : void 0, Xc = typeof clearTimeout == "function" ? clearTimeout : void 0, Xi = typeof Promise == "function" ? Promise : void 0, Gc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xi < "u" ? function(e) {
    return Xi.resolve(null).then(e).catch(Zc);
  } : go;
  function Zc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wo(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Wt(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Wt(n);
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
  function Gi(e) {
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
  var vt = Math.random().toString(36).slice(2), mn = "__reactFiber$" + vt, nr = "__reactProps$" + vt, wn = "__reactContainer$" + vt, So = "__reactEvents$" + vt, Jc = "__reactListeners$" + vt, qc = "__reactHandles$" + vt;
  function Gn(e) {
    var n = e[mn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[wn] || t[mn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Gi(e); e !== null; ) {
          if (t = e[mn]) return t;
          e = Gi(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function tr(e) {
    return e = e[mn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var ko = [], gt = -1;
  function Mn(e) {
    return { current: e };
  }
  function q(e) {
    0 > gt || (e.current = ko[gt], ko[gt] = null, gt--);
  }
  function X(e, n) {
    gt++, ko[gt] = e.current, e.current = n;
  }
  var Fn = {}, _e = Mn(Fn), De = Mn(!1), Zn = Fn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t) l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Me(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    q(De), q(_e);
  }
  function Zi(e, n, t) {
    if (_e.current !== Fn) throw Error(m(168));
    X(_e, n), X(De, t);
  }
  function Ji(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, Y(e) || "Unknown", l));
    return C({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Zn = _e.current, X(_e, e), X(De, De.current), !0;
  }
  function qi(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = Ji(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, q(De), q(_e), X(_e, e)) : q(De), X(De, t);
  }
  var Sn = null, Yr = !1, Eo = !1;
  function bi(e) {
    Sn === null ? Sn = [e] : Sn.push(e);
  }
  function bc(e) {
    Yr = !0, bi(e);
  }
  function jn() {
    if (!Eo && Sn !== null) {
      Eo = !0;
      var e = 0, n = Q;
      try {
        var t = Sn;
        for (Q = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Sn = null, Yr = !1;
      } catch (l) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), ni(Hl, jn), l;
      } finally {
        Q = n, Eo = !1;
      }
    }
    return null;
  }
  var St = [], kt = 0, Xr = null, Gr = 0, Ge = [], Ze = 0, Jn = null, kn = 1, En = "";
  function qn(e, n) {
    St[kt++] = Gr, St[kt++] = Xr, Xr = e, Gr = n;
  }
  function es(e, n, t) {
    Ge[Ze++] = kn, Ge[Ze++] = En, Ge[Ze++] = Jn, Jn = e;
    var r = kn;
    e = En;
    var l = 32 - rn(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - rn(n) + l;
    if (30 < o) {
      var u = l - l % 5;
      o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, kn = 1 << 32 - rn(n) + l | t << l | r, En = o + e;
    } else kn = 1 << o | t << l | r, En = e;
  }
  function _o(e) {
    e.return !== null && (qn(e, 1), es(e, 1, 0));
  }
  function Co(e) {
    for (; e === Xr; ) Xr = St[--kt], St[kt] = null, Gr = St[--kt], St[kt] = null;
    for (; e === Jn; ) Jn = Ge[--Ze], Ge[Ze] = null, En = Ge[--Ze], Ge[Ze] = null, kn = Ge[--Ze], Ge[Ze] = null;
  }
  var We = null, Qe = null, ee = !1, on = null;
  function ns(e, n) {
    var t = en(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function ts(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, We = e, Qe = Dn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, We = e, Qe = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: kn, overflow: En } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = en(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, We = e, Qe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function No(e) {
    if (ee) {
      var n = Qe;
      if (n) {
        var t = n;
        if (!ts(e, n)) {
          if (xo(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = We;
          n && ts(e, n) ? ns(r, t) : (e.flags = e.flags & -4097 | 2, ee = !1, We = e);
        }
      } else {
        if (xo(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, ee = !1, We = e;
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    We = e;
  }
  function Zr(e) {
    if (e !== We) return !1;
    if (!ee) return rs(e), ee = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !yo(e.type, e.memoizedProps)), n && (n = Qe)) {
      if (xo(e)) throw ls(), Error(m(418));
      for (; n; ) ns(e, n), n = Dn(n.nextSibling);
    }
    if (rs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Qe = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else Qe = We ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = Qe; e; ) e = Dn(e.nextSibling);
  }
  function Et() {
    Qe = We = null, ee = !1;
  }
  function Po(e) {
    on === null ? on = [e] : on.push(e);
  }
  var ef = he.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, o = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(u) {
          var i = l.refs;
          u === null ? delete i[o] : i[o] = u;
        }, n._stringRef = o, n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function os(e) {
    var n = e._init;
    return n(e._payload);
  }
  function us(e) {
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
      return f = Qn(f, a), f.index = 0, f.sibling = null, f;
    }
    function o(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function u(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = gu(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === Ie ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Oe && os(P) === a.type) ? (w = l(a, d.props), w.ref = rr(f, a, d), w.return = f, w) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = wu(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7 ? (a = ut(d, f.mode, w, P), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = gu("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case nn:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = rr(f, null, a), d.return = f, d;
          case ze:
            return a = wu(a, f.mode, d), a.return = f, a;
          case Oe:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (It(a) || L(a)) return a = ut(a, f.mode, d, null), a.return = f, a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nn:
            return d.key === P ? s(f, a, d, w) : null;
          case ze:
            return d.key === P ? p(f, a, d, w) : null;
          case Oe:
            return P = d._init, h(
              f,
              a,
              P(d._payload),
              w
            );
        }
        if (It(d) || L(d)) return P !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function E(f, a, d, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case nn:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, P);
          case ze:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, P);
          case Oe:
            var z = w._init;
            return E(f, a, d, z(w._payload), P);
        }
        if (It(w) || L(w)) return f = f.get(d) || null, y(a, f, w, P, null);
        Jr(a, w);
      }
      return null;
    }
    function x(f, a, d, w) {
      for (var P = null, z = null, T = a, R = a = 0, ge = null; T !== null && R < d.length; R++) {
        T.index > R ? (ge = T, T = null) : ge = T.sibling;
        var $ = h(f, T, d[R], w);
        if ($ === null) {
          T === null && (T = ge);
          break;
        }
        e && T && $.alternate === null && n(f, T), a = o($, a, R), z === null ? P = $ : z.sibling = $, z = $, T = ge;
      }
      if (R === d.length) return t(f, T), ee && qn(f, R), P;
      if (T === null) {
        for (; R < d.length; R++) T = g(f, d[R], w), T !== null && (a = o(T, a, R), z === null ? P = T : z.sibling = T, z = T);
        return ee && qn(f, R), P;
      }
      for (T = r(f, T); R < d.length; R++) ge = E(T, f, R, d[R], w), ge !== null && (e && ge.alternate !== null && T.delete(ge.key === null ? R : ge.key), a = o(ge, a, R), z === null ? P = ge : z.sibling = ge, z = ge);
      return e && T.forEach(function(Kn) {
        return n(f, Kn);
      }), ee && qn(f, R), P;
    }
    function N(f, a, d, w) {
      var P = L(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var z = P = null, T = a, R = a = 0, ge = null, $ = d.next(); T !== null && !$.done; R++, $ = d.next()) {
        T.index > R ? (ge = T, T = null) : ge = T.sibling;
        var Kn = h(f, T, $.value, w);
        if (Kn === null) {
          T === null && (T = ge);
          break;
        }
        e && T && Kn.alternate === null && n(f, T), a = o(Kn, a, R), z === null ? P = Kn : z.sibling = Kn, z = Kn, T = ge;
      }
      if ($.done) return t(
        f,
        T
      ), ee && qn(f, R), P;
      if (T === null) {
        for (; !$.done; R++, $ = d.next()) $ = g(f, $.value, w), $ !== null && (a = o($, a, R), z === null ? P = $ : z.sibling = $, z = $);
        return ee && qn(f, R), P;
      }
      for (T = r(f, T); !$.done; R++, $ = d.next()) $ = E(T, f, R, $.value, w), $ !== null && (e && $.alternate !== null && T.delete($.key === null ? R : $.key), a = o($, a, R), z === null ? P = $ : z.sibling = $, z = $);
      return e && T.forEach(function(Of) {
        return n(f, Of);
      }), ee && qn(f, R), P;
    }
    function ie(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Ie && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nn:
            e: {
              for (var P = d.key, z = a; z !== null; ) {
                if (z.key === P) {
                  if (P = d.type, P === Ie) {
                    if (z.tag === 7) {
                      t(f, z.sibling), a = l(z, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (z.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Oe && os(P) === z.type) {
                    t(f, z.sibling), a = l(z, d.props), a.ref = rr(f, z, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, z);
                  break;
                } else n(f, z);
                z = z.sibling;
              }
              d.type === Ie ? (a = ut(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, f = w);
            }
            return u(f);
          case ze:
            e: {
              for (z = d.key; a !== null; ) {
                if (a.key === z) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
                else n(f, a);
                a = a.sibling;
              }
              a = wu(d, f.mode, w), a.return = f, f = a;
            }
            return u(f);
          case Oe:
            return z = d._init, ie(f, a, z(d._payload), w);
        }
        if (It(d)) return x(f, a, d, w);
        if (L(d)) return N(f, a, d, w);
        Jr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = gu(d, f.mode, w), a.return = f, f = a), u(f)) : t(f, a);
    }
    return ie;
  }
  var _t = us(!0), is = us(!1), qr = Mn(null), br = null, Ct = null, zo = null;
  function To() {
    zo = Ct = br = null;
  }
  function Lo(e) {
    var n = qr.current;
    q(qr), e._currentValue = n;
  }
  function Ro(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function xt(e, n) {
    br = e, zo = Ct = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Fe = !0), e.firstContext = null);
  }
  function Je(e) {
    var n = e._currentValue;
    if (zo !== e) if (e = { context: e, memoizedValue: n, next: null }, Ct === null) {
      if (br === null) throw Error(m(308));
      Ct = e, br.dependencies = { lanes: 0, firstContext: e };
    } else Ct = Ct.next = e;
    return n;
  }
  var bn = null;
  function Io(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function ss(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Io(n)) : (t.next = l.next, l.next = t), n.interleaved = t, _n(e, r);
  }
  function _n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Oo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function as(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Cn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, V & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, _n(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Io(r)) : (n.next = l.next, l.next = n), r.interleaved = n, _n(e, t);
  }
  function el(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Kl(e, t);
    }
  }
  function cs(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, o = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var u = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          o === null ? l = o = u : o = o.next = u, t = t.next;
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
    Un = !1;
    var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, u === null ? o = p : u.next = p, u = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== u && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (o !== null) {
      var g = l.baseState;
      u = 0, y = p = s = null, i = o;
      do {
        var h = i.lane, E = i.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: E,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var x = e, N = i;
            switch (h = n, E = t, N.tag) {
              case 1:
                if (x = N.payload, typeof x == "function") {
                  g = x.call(E, g, h);
                  break e;
                }
                g = x;
                break e;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = N.payload, h = typeof x == "function" ? x.call(E, g, h) : x, h == null) break e;
                g = C({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
        } else E = { eventTime: E, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = E, s = g) : y = y.next = E, u |= h;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          u |= l.lane, l = l.next;
        while (l !== n);
      } else o === null && (l.shared.lanes = 0);
      tt |= u, e.lanes = u, e.memoizedState = g;
    }
  }
  function fs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var lr = {}, hn = Mn(lr), or = Mn(lr), ur = Mn(lr);
  function et(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function Do(e, n) {
    switch (X(ur, n), X(or, e), X(hn, lr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Dl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Dl(n, e);
    }
    q(hn), X(hn, n);
  }
  function Nt() {
    q(hn), q(or), q(ur);
  }
  function ds(e) {
    et(ur.current);
    var n = et(hn.current), t = Dl(n, e.type);
    n !== t && (X(or, e), X(hn, t));
  }
  function Mo(e) {
    or.current === e && (q(hn), q(or));
  }
  var ne = Mn(0);
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
  function jo() {
    for (var e = 0; e < Fo.length; e++) Fo[e]._workInProgressVersionPrimary = null;
    Fo.length = 0;
  }
  var rl = he.ReactCurrentDispatcher, Uo = he.ReactCurrentBatchConfig, nt = 0, te = null, de = null, ve = null, ll = !1, ir = !1, sr = 0, nf = 0;
  function Ce() {
    throw Error(m(321));
  }
  function Vo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!ln(e[t], n[t])) return !1;
    return !0;
  }
  function Ao(e, n, t, r, l, o) {
    if (nt = o, te = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, rl.current = e === null || e.memoizedState === null ? of : uf, e = t(r, l), ir) {
      o = 0;
      do {
        if (ir = !1, sr = 0, 25 <= o) throw Error(m(301));
        o += 1, ve = de = null, n.updateQueue = null, rl.current = sf, e = t(r, l);
      } while (ir);
    }
    if (rl.current = il, n = de !== null && de.next !== null, nt = 0, ve = de = te = null, ll = !1, n) throw Error(m(300));
    return e;
  }
  function Bo() {
    var e = sr !== 0;
    return sr = 0, e;
  }
  function vn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ve === null ? te.memoizedState = ve = e : ve = ve.next = e, ve;
  }
  function qe() {
    if (de === null) {
      var e = te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var n = ve === null ? te.memoizedState : ve.next;
    if (n !== null) ve = n, de = e;
    else {
      if (e === null) throw Error(m(310));
      de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, ve === null ? te.memoizedState = ve = e : ve = ve.next = e;
    }
    return ve;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function $o(e) {
    var n = qe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = de, l = r.baseQueue, o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = o.next, o.next = u;
      }
      r.baseQueue = l = o, t.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var i = u = null, s = null, p = o;
      do {
        var y = p.lane;
        if ((nt & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, u = r) : s = s.next = g, te.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? u = r : s.next = i, ln(r, n.memoizedState) || (Fe = !0), n.memoizedState = r, n.baseState = u, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, te.lanes |= o, tt |= o, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Ho(e) {
    var n = qe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var u = l = l.next;
      do
        o = e(o, u.action), u = u.next;
      while (u !== l);
      ln(o, n.memoizedState) || (Fe = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function ps() {
  }
  function ms(e, n) {
    var t = te, r = qe(), l = n(), o = !ln(r.memoizedState, l);
    if (o && (r.memoizedState = l, Fe = !0), r = r.queue, Wo(ys.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ve !== null && ve.memoizedState.tag & 1) {
      if (t.flags |= 2048, cr(9, vs.bind(null, t, r, l, n), void 0, null), ye === null) throw Error(m(349));
      nt & 30 || hs(t, n, l);
    }
    return l;
  }
  function hs(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = te.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, te.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function vs(e, n, t, r) {
    n.value = t, n.getSnapshot = r, gs(n) && ws(e);
  }
  function ys(e, n, t) {
    return t(function() {
      gs(n) && ws(e);
    });
  }
  function gs(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !ln(e, t);
    } catch {
      return !0;
    }
  }
  function ws(e) {
    var n = _n(e, 1);
    n !== null && cn(n, e, 1, -1);
  }
  function Ss(e) {
    var n = vn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = lf.bind(null, te, e), [n.memoizedState, e];
  }
  function cr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = te.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, te.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ks() {
    return qe().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = vn();
    te.flags |= e, l.memoizedState = cr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ul(e, n, t, r) {
    var l = qe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (de !== null) {
      var u = de.memoizedState;
      if (o = u.destroy, r !== null && Vo(r, u.deps)) {
        l.memoizedState = cr(n, t, o, r);
        return;
      }
    }
    te.flags |= e, l.memoizedState = cr(1 | n, t, o, r);
  }
  function Es(e, n) {
    return ol(8390656, 8, e, n);
  }
  function Wo(e, n) {
    return ul(2048, 8, e, n);
  }
  function _s(e, n) {
    return ul(4, 2, e, n);
  }
  function Cs(e, n) {
    return ul(4, 4, e, n);
  }
  function xs(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function Ns(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(4, 4, xs.bind(null, n, e), t);
  }
  function Qo() {
  }
  function Ps(e, n) {
    var t = qe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function zs(e, n) {
    var t = qe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Ts(e, n, t) {
    return nt & 21 ? (ln(t, n) || (t = oi(), te.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = t);
  }
  function tf(e, n) {
    var t = Q;
    Q = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Uo.transition;
    Uo.transition = {};
    try {
      e(!1), n();
    } finally {
      Q = t, Uo.transition = r;
    }
  }
  function Ls() {
    return qe().memoizedState;
  }
  function rf(e, n, t) {
    var r = Hn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Rs(e)) Is(n, t);
    else if (t = ss(e, n, t, r), t !== null) {
      var l = Le();
      cn(t, e, r, l), Os(t, n, r);
    }
  }
  function lf(e, n, t) {
    var r = Hn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Is(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var u = n.lastRenderedState, i = o(u, t);
        if (l.hasEagerState = !0, l.eagerState = i, ln(i, u)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Io(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = ss(e, n, l, r), t !== null && (l = Le(), cn(t, e, r, l), Os(t, n, r));
    }
  }
  function Rs(e) {
    var n = e.alternate;
    return e === te || n !== null && n === te;
  }
  function Is(e, n) {
    ir = ll = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Os(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Kl(e, t);
    }
  }
  var il = { readContext: Je, useCallback: Ce, useContext: Ce, useEffect: Ce, useImperativeHandle: Ce, useInsertionEffect: Ce, useLayoutEffect: Ce, useMemo: Ce, useReducer: Ce, useRef: Ce, useState: Ce, useDebugValue: Ce, useDeferredValue: Ce, useTransition: Ce, useMutableSource: Ce, useSyncExternalStore: Ce, useId: Ce, unstable_isNewReconciler: !1 }, of = { readContext: Je, useCallback: function(e, n) {
    return vn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Je, useEffect: Es, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ol(
      4194308,
      4,
      xs.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ol(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ol(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = vn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = vn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = rf.bind(null, te, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = vn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: Ss, useDebugValue: Qo, useDeferredValue: function(e) {
    return vn().memoizedState = e;
  }, useTransition: function() {
    var e = Ss(!1), n = e[0];
    return e = tf.bind(null, e[1]), vn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = te, l = vn();
    if (ee) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), ye === null) throw Error(m(349));
      nt & 30 || hs(r, n, t);
    }
    l.memoizedState = t;
    var o = { value: t, getSnapshot: n };
    return l.queue = o, Es(ys.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, cr(9, vs.bind(null, r, o, t, n), void 0, null), t;
  }, useId: function() {
    var e = vn(), n = ye.identifierPrefix;
    if (ee) {
      var t = En, r = kn;
      t = (r & ~(1 << 32 - rn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = sr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = nf++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, uf = {
    readContext: Je,
    useCallback: Ps,
    useContext: Je,
    useEffect: Wo,
    useImperativeHandle: Ns,
    useInsertionEffect: _s,
    useLayoutEffect: Cs,
    useMemo: zs,
    useReducer: $o,
    useRef: ks,
    useState: function() {
      return $o(ar);
    },
    useDebugValue: Qo,
    useDeferredValue: function(e) {
      var n = qe();
      return Ts(n, de.memoizedState, e);
    },
    useTransition: function() {
      var e = $o(ar)[0], n = qe().memoizedState;
      return [e, n];
    },
    useMutableSource: ps,
    useSyncExternalStore: ms,
    useId: Ls,
    unstable_isNewReconciler: !1
  }, sf = { readContext: Je, useCallback: Ps, useContext: Je, useEffect: Wo, useImperativeHandle: Ns, useInsertionEffect: _s, useLayoutEffect: Cs, useMemo: zs, useReducer: Ho, useRef: ks, useState: function() {
    return Ho(ar);
  }, useDebugValue: Qo, useDeferredValue: function(e) {
    var n = qe();
    return de === null ? n.memoizedState = e : Ts(n, de.memoizedState, e);
  }, useTransition: function() {
    var e = Ho(ar)[0], n = qe().memoizedState;
    return [e, n];
  }, useMutableSource: ps, useSyncExternalStore: ms, useId: Ls, unstable_isNewReconciler: !1 };
  function un(e, n) {
    if (e && e.defaultProps) {
      n = C({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Ko(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : C({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Le(), l = Hn(e), o = Cn(r, l);
    o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (cn(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Le(), l = Hn(e), o = Cn(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (cn(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Le(), r = Hn(e), l = Cn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Vn(e, l, r), n !== null && (cn(n, e, r, t), el(n, e, r));
  } };
  function Ds(e, n, t, r, l, o, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, o) : !0;
  }
  function Ms(e, n, t) {
    var r = !1, l = Fn, o = n.contextType;
    return typeof o == "object" && o !== null ? o = Je(o) : (l = Me(n) ? Zn : _e.current, r = n.contextTypes, o = (r = r != null) ? wt(e, l) : Fn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function Fs(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Yo(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Oo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = Je(o) : (o = Me(n) ? Zn : _e.current, l.context = wt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Ko(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pt(e, n) {
    try {
      var t = "", r = n;
      do
        t += A(r), r = r.return;
      while (r);
      var l = t;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Xo(e, n, t) {
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
  var af = typeof WeakMap == "function" ? WeakMap : Map;
  function js(e, n, t) {
    t = Cn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, cu = r), Go(e, n);
    }, t;
  }
  function Us(e, n, t) {
    t = Cn(-1, t), t.tag = 3;
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
      var u = n.stack;
      this.componentDidCatch(n.value, { componentStack: u !== null ? u : "" });
    }), t;
  }
  function Vs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new af();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = _f.bind(null, e, n, t), n.then(e, e));
  }
  function As(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Bs(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Cn(-1, 1), n.tag = 2, Vn(t, n, 1))), t.lanes |= 1), e);
  }
  var cf = he.ReactCurrentOwner, Fe = !1;
  function Te(e, n, t, r) {
    n.child = e === null ? is(n, null, t, r) : _t(n, e.child, t, r);
  }
  function $s(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return xt(n, l), r = Ao(e, n, t, r, o, l), t = Bo(), e !== null && !Fe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, xn(e, n, l)) : (ee && t && _o(n), n.flags |= 1, Te(e, n, r, l), n.child);
  }
  function Hs(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !yu(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ws(e, n, o, r, l)) : (e = kl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var u = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(u, r) && e.ref === n.ref) return xn(e, n, l);
    }
    return n.flags |= 1, e = Qn(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Ws(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zt(o, r) && e.ref === n.ref) if (Fe = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Fe = !0);
      else return n.lanes = e.lanes, xn(e, n, l);
    }
    return Zo(e, n, t, r, l);
  }
  function Qs(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(Tt, Ke), Ke |= t;
    else {
      if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, X(Tt, Ke), Ke |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, X(Tt, Ke), Ke |= r;
    }
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, X(Tt, Ke), Ke |= r;
    return Te(e, n, l, t), n.child;
  }
  function Ks(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Zo(e, n, t, r, l) {
    var o = Me(t) ? Zn : _e.current;
    return o = wt(n, o), xt(n, l), t = Ao(e, n, t, r, o, l), r = Bo(), e !== null && !Fe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, xn(e, n, l)) : (ee && r && _o(n), n.flags |= 1, Te(e, n, t, l), n.child);
  }
  function Ys(e, n, t, r, l) {
    if (Me(t)) {
      var o = !0;
      Kr(n);
    } else o = !1;
    if (xt(n, l), n.stateNode === null) cl(e, n), Ms(n, t, r), Yo(n, t, r, l), r = !0;
    else if (e === null) {
      var u = n.stateNode, i = n.memoizedProps;
      u.props = i;
      var s = u.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Je(p) : (p = Me(t) ? Zn : _e.current, p = wt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      g || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== p) && Fs(n, u, r, p), Un = !1;
      var h = n.memoizedState;
      u.state = h, nl(n, r, u, l), s = n.memoizedState, i !== r || h !== s || De.current || Un ? (typeof y == "function" && (Ko(n, t, y, r), s = n.memoizedState), (i = Un || Ds(n, t, i, r, h, s, p)) ? (g || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), u.props = r, u.state = s, u.context = p, r = i) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      u = n.stateNode, as(e, n), i = n.memoizedProps, p = n.type === n.elementType ? i : un(n.type, i), u.props = p, g = n.pendingProps, h = u.context, s = t.contextType, typeof s == "object" && s !== null ? s = Je(s) : (s = Me(t) ? Zn : _e.current, s = wt(n, s));
      var E = t.getDerivedStateFromProps;
      (y = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== g || h !== s) && Fs(n, u, r, s), Un = !1, h = n.memoizedState, u.state = h, nl(n, r, u, l);
      var x = n.memoizedState;
      i !== g || h !== x || De.current || Un ? (typeof E == "function" && (Ko(n, t, E, r), x = n.memoizedState), (p = Un || Ds(n, t, p, r, h, x, s) || !1) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, x, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, x, s)), typeof u.componentDidUpdate == "function" && (n.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = x), u.props = r, u.state = x, u.context = s, r = p) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Jo(e, n, t, r, o, l);
  }
  function Jo(e, n, t, r, l, o) {
    Ks(e, n);
    var u = (n.flags & 128) !== 0;
    if (!r && !u) return l && qi(n, t, !1), xn(e, n, o);
    r = n.stateNode, cf.current = n;
    var i = u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && u ? (n.child = _t(n, e.child, null, o), n.child = _t(n, null, i, o)) : Te(e, n, i, o), n.memoizedState = r.state, l && qi(n, t, !0), n.child;
  }
  function Xs(e) {
    var n = e.stateNode;
    n.pendingContext ? Zi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Zi(e, n.context, !1), Do(e, n.containerInfo);
  }
  function Gs(e, n, t, r, l) {
    return Et(), Po(l), n.flags |= 256, Te(e, n, t, r), n.child;
  }
  var qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, n, t) {
    var r = n.pendingProps, l = ne.current, o = !1, u = (n.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), X(ne, l & 1), e === null)
      return No(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = El(u, r, 0, null), e = ut(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = bo(t), n.memoizedState = qo, e) : eu(n, u));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return ff(e, n, u, r, i, l, t);
    if (o) {
      o = r.fallback, u = n.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(u & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Qn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = Qn(i, o) : (o = ut(o, u, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, u = e.child.memoizedState, u = u === null ? bo(t) : { baseLanes: u.baseLanes | t, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~t, n.memoizedState = qo, r;
    }
    return o = e.child, e = o.sibling, r = Qn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function eu(e, n) {
    return n = El({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function al(e, n, t, r) {
    return r !== null && Po(r), _t(n, e.child, null, t), e = eu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function ff(e, n, t, r, l, o, u) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Xo(Error(m(422))), al(e, n, u, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), o = ut(o, l, u, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && _t(n, e.child, null, u), n.child.memoizedState = bo(u), n.memoizedState = qo, o);
    if (!(n.mode & 1)) return al(e, n, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, o = Error(m(419)), r = Xo(o, r, void 0), al(e, n, u, r);
    }
    if (i = (u & e.childLanes) !== 0, Fe || i) {
      if (r = ye, r !== null) {
        switch (u & -u) {
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
        l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, _n(e, l), cn(r, e, l, -1));
      }
      return vu(), r = Xo(Error(m(421))), al(e, n, u, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Cf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Qe = Dn(l.nextSibling), We = n, ee = !0, on = null, e !== null && (Ge[Ze++] = kn, Ge[Ze++] = En, Ge[Ze++] = Jn, kn = e.id, En = e.overflow, Jn = n), n = eu(n, r.children), n.flags |= 4096, n);
  }
  function Js(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Ro(e.return, n, t);
  }
  function nu(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
  }
  function qs(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, o = r.tail;
    if (Te(e, n, r.children, t), r = ne.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Js(e, t, n);
        else if (e.tag === 19) Js(e, t, n);
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
    if (X(ne, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && tl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), nu(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && tl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        nu(n, !0, t, null, o);
        break;
      case "together":
        nu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function xn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), tt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Qn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function df(e, n, t) {
    switch (n.tag) {
      case 3:
        Xs(n), Et();
        break;
      case 5:
        ds(n);
        break;
      case 1:
        Me(n.type) && Kr(n);
        break;
      case 4:
        Do(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        X(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (X(ne, ne.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Zs(e, n, t) : (X(ne, ne.current & 1), e = xn(e, n, t), e !== null ? e.sibling : null);
        X(ne, ne.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return qs(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), X(ne, ne.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Qs(e, n, t);
    }
    return xn(e, n, t);
  }
  var bs, tu, ea, na;
  bs = function(e, n) {
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
  }, tu = function() {
  }, ea = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(hn.current);
      var o = null;
      switch (t) {
        case "input":
          l = Ll(e, l), r = Ll(e, r), o = [];
          break;
        case "select":
          l = C({}, l, { value: void 0 }), r = C({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Ml(t, r);
      var u;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (u in i) i.hasOwnProperty(u) && (t || (t = {}), t[u] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (fe.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (u in i) !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (t || (t = {}), t[u] = "");
          for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (t || (t = {}), t[u] = s[u]);
        } else t || (o || (o = []), o.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (fe.hasOwnProperty(p) ? (s != null && p === "onScroll" && J("scroll", e), o || i === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, na = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function fr(e, n) {
    if (!ee) switch (e.tailMode) {
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
  function xe(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function pf(e, n, t) {
    var r = n.pendingProps;
    switch (Co(n), n.tag) {
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
        return xe(n), null;
      case 1:
        return Me(n.type) && Qr(), xe(n), null;
      case 3:
        return r = n.stateNode, Nt(), q(De), q(_e), jo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, on !== null && (pu(on), on = null))), tu(e, n), xe(n), null;
      case 5:
        Mo(n);
        var l = et(ur.current);
        if (t = n.type, e !== null && n.stateNode != null) ea(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return xe(n), null;
          }
          if (e = et(hn.current), Zr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[mn] = n, r[nr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                J("cancel", r), J("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++) J(qt[l], r);
                break;
              case "source":
                J("error", r);
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  r
                ), J("load", r);
                break;
              case "details":
                J("toggle", r);
                break;
              case "input":
                Mu(r, o), J("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, J("invalid", r);
                break;
              case "textarea":
                Uu(r, o), J("invalid", r);
            }
            Ml(t, o), l = null;
            for (var u in o) if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && $r(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && $r(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : fe.hasOwnProperty(u) && i != null && u === "onScroll" && J("scroll", r);
            }
            switch (t) {
              case "input":
                wr(r), ju(r, o, !0);
                break;
              case "textarea":
                wr(r), Au(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Hr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bu(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(t, { is: r.is }) : (e = u.createElement(t), t === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, t), e[mn] = n, e[nr] = r, bs(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (u = Fl(t, r), t) {
                case "dialog":
                  J("cancel", e), J("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  J("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++) J(qt[l], e);
                  l = r;
                  break;
                case "source":
                  J("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  J(
                    "error",
                    e
                  ), J("load", e), l = r;
                  break;
                case "details":
                  J("toggle", e), l = r;
                  break;
                case "input":
                  Mu(e, r), l = Ll(e, r), J("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), J("invalid", e);
                  break;
                case "textarea":
                  Uu(e, r), l = Ol(e, r), J("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ml(t, l), i = l;
              for (o in i) if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style" ? Wu(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $u(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Ot(e, s) : typeof s == "number" && Ot(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (fe.hasOwnProperty(o) ? s != null && o === "onScroll" && J("scroll", e) : s != null && Ye(e, o, s, u));
              }
              switch (t) {
                case "input":
                  wr(e), ju(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Au(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + W(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? it(e, !!r.multiple, o, !1) : r.defaultValue != null && it(
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
        return xe(n), null;
      case 6:
        if (e && n.stateNode != null) na(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = et(ur.current), et(hn.current), Zr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[mn] = n, (o = r.nodeValue !== t) && (e = We, e !== null)) switch (e.tag) {
              case 3:
                $r(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && $r(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            o && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[mn] = n, n.stateNode = r;
        }
        return xe(n), null;
      case 13:
        if (q(ne), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ee && Qe !== null && n.mode & 1 && !(n.flags & 128)) ls(), Et(), n.flags |= 98560, o = !1;
          else if (o = Zr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(m(317));
              o[mn] = n;
            } else Et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            xe(n), o = !1;
          } else on !== null && (pu(on), on = null), o = !0;
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || ne.current & 1 ? pe === 0 && (pe = 3) : vu())), n.updateQueue !== null && (n.flags |= 4), xe(n), null);
      case 4:
        return Nt(), tu(e, n), e === null && bt(n.stateNode.containerInfo), xe(n), null;
      case 10:
        return Lo(n.type._context), xe(n), null;
      case 17:
        return Me(n.type) && Qr(), xe(n), null;
      case 19:
        if (q(ne), o = n.memoizedState, o === null) return xe(n), null;
        if (r = (n.flags & 128) !== 0, u = o.rendering, u === null) if (r) fr(o, !1);
        else {
          if (pe !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (u = tl(e), u !== null) {
              for (n.flags |= 128, fr(o, !1), r = u.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return X(ne, ne.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ue() > Lt && (n.flags |= 128, r = !0, fr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = tl(u), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), fr(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !ee) return xe(n), null;
          } else 2 * ue() - o.renderingStartTime > Lt && t !== 1073741824 && (n.flags |= 128, r = !0, fr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (u.sibling = n.child, n.child = u) : (t = o.last, t !== null ? t.sibling = u : n.child = u, o.last = u);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = ue(), n.sibling = null, t = ne.current, X(ne, r ? t & 1 | 2 : t & 1), n) : (xe(n), null);
      case 22:
      case 23:
        return hu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Ke & 1073741824 && (xe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : xe(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function mf(e, n) {
    switch (Co(n), n.tag) {
      case 1:
        return Me(n.type) && Qr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Nt(), q(De), q(_e), jo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Mo(n), null;
      case 13:
        if (q(ne), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return q(ne), null;
      case 4:
        return Nt(), null;
      case 10:
        return Lo(n.type._context), null;
      case 22:
      case 23:
        return hu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, Ne = !1, hf = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      le(e, n, r);
    }
    else t.current = null;
  }
  function ru(e, n, t) {
    try {
      t();
    } catch (r) {
      le(e, n, r);
    }
  }
  var ta = !1;
  function vf(e, n) {
    if (ho = Rr, e = Di(), uo(e)) {
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
          var u = 0, i = -1, s = -1, p = 0, y = 0, g = e, h = null;
          n: for (; ; ) {
            for (var E; g !== t || l !== 0 && g.nodeType !== 3 || (i = u + l), g !== o || r !== 0 && g.nodeType !== 3 || (s = u + r), g.nodeType === 3 && (u += g.nodeValue.length), (E = g.firstChild) !== null; )
              h = g, g = E;
            for (; ; ) {
              if (g === e) break n;
              if (h === t && ++p === l && (i = u), h === o && ++y === r && (s = u), (E = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = E;
          }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (vo = { focusedElem: e, selectionRange: t }, Rr = !1, _ = n; _ !== null; ) if (n = _, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, _ = e;
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
              var N = x.memoizedProps, ie = x.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? N : un(n.type, N), ie);
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
      } catch (w) {
        le(n, n.return, w);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, _ = e;
        break;
      }
      _ = n.return;
    }
    return x = ta, ta = !1, x;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && ru(n, t, o);
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
  function lu(e) {
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
  function ra(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, ra(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[mn], delete n[nr], delete n[So], delete n[Jc], delete n[qc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || la(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ou(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (ou(e, n, t), e = e.sibling; e !== null; ) ou(e, n, t), e = e.sibling;
  }
  function uu(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (uu(e, n, t), e = e.sibling; e !== null; ) uu(e, n, t), e = e.sibling;
  }
  var Se = null, sn = !1;
  function An(e, n, t) {
    for (t = t.child; t !== null; ) ua(e, n, t), t = t.sibling;
  }
  function ua(e, n, t) {
    if (pn && typeof pn.onCommitFiberUnmount == "function") try {
      pn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Ne || zt(t, n);
      case 6:
        var r = Se, l = sn;
        Se = null, An(e, n, t), Se = r, sn = l, Se !== null && (sn ? (e = Se, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Se.removeChild(t.stateNode));
        break;
      case 18:
        Se !== null && (sn ? (e = Se, t = t.stateNode, e.nodeType === 8 ? wo(e.parentNode, t) : e.nodeType === 1 && wo(e, t), Wt(e)) : wo(Se, t.stateNode));
        break;
      case 4:
        r = Se, l = sn, Se = t.stateNode.containerInfo, sn = !0, An(e, n, t), Se = r, sn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ne && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, u = o.destroy;
            o = o.tag, u !== void 0 && (o & 2 || o & 4) && ru(t, n, u), l = l.next;
          } while (l !== r);
        }
        An(e, n, t);
        break;
      case 1:
        if (!Ne && (zt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (i) {
          le(t, n, i);
        }
        An(e, n, t);
        break;
      case 21:
        An(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Ne = (r = Ne) || t.memoizedState !== null, An(e, n, t), Ne = r) : An(e, n, t);
        break;
      default:
        An(e, n, t);
    }
  }
  function ia(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new hf()), n.forEach(function(r) {
        var l = xf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function an(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, u = n, i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              Se = i.stateNode, sn = !1;
              break e;
            case 3:
              Se = i.stateNode.containerInfo, sn = !0;
              break e;
            case 4:
              Se = i.stateNode.containerInfo, sn = !0;
              break e;
          }
          i = i.return;
        }
        if (Se === null) throw Error(m(160));
        ua(o, u, l), Se = null, sn = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        le(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) sa(n, e), n = n.sibling;
  }
  function sa(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(n, e), yn(e), r & 4) {
          try {
            dr(3, e, e.return), dl(3, e);
          } catch (N) {
            le(e, e.return, N);
          }
          try {
            dr(5, e, e.return);
          } catch (N) {
            le(e, e.return, N);
          }
        }
        break;
      case 1:
        an(n, e), yn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (an(n, e), yn(e), r & 512 && t !== null && zt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Ot(l, "");
          } catch (N) {
            le(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, u = t !== null ? t.memoizedProps : o, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && o.type === "radio" && o.name != null && Fu(l, o), Fl(i, u);
            var p = Fl(i, o);
            for (u = 0; u < s.length; u += 2) {
              var y = s[u], g = s[u + 1];
              y === "style" ? Wu(l, g) : y === "dangerouslySetInnerHTML" ? $u(l, g) : y === "children" ? Ot(l, g) : Ye(l, y, g, p);
            }
            switch (i) {
              case "input":
                Rl(l, o);
                break;
              case "textarea":
                Vu(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null ? it(l, !!o.multiple, E, !1) : h !== !!o.multiple && (o.defaultValue != null ? it(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : it(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (N) {
            le(e, e.return, N);
          }
        }
        break;
      case 6:
        if (an(n, e), yn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (N) {
            le(e, e.return, N);
          }
        }
        break;
      case 3:
        if (an(n, e), yn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Wt(n.containerInfo);
        } catch (N) {
          le(e, e.return, N);
        }
        break;
      case 4:
        an(n, e), yn(e);
        break;
      case 13:
        an(n, e), yn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (au = ue())), r & 4 && ia(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Ne = (p = Ne) || y, an(n, e), Ne = p) : an(n, e), yn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (_ = e, y = e.child; y !== null; ) {
            for (g = _ = y; _ !== null; ) {
              switch (h = _, E = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, h, h.return);
                  break;
                case 1:
                  zt(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    r = h, t = h.return;
                    try {
                      n = r, x.props = n.memoizedProps, x.state = n.memoizedState, x.componentWillUnmount();
                    } catch (N) {
                      le(r, t, N);
                    }
                  }
                  break;
                case 5:
                  zt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    fa(g);
                    continue;
                  }
              }
              E !== null ? (E.return = h, _ = E) : fa(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Hu("display", u));
                } catch (N) {
                  le(e, e.return, N);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (N) {
                le(e, e.return, N);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        an(n, e), yn(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        an(
          n,
          e
        ), yn(e);
    }
  }
  function yn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (la(t)) {
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
            r.flags & 32 && (Ot(l, ""), r.flags &= -33);
            var o = oa(e);
            uu(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, i = oa(e);
            ou(e, i, u);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        le(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function yf(e, n, t) {
    _ = e, aa(e);
  }
  function aa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var l = _, o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || fl;
        if (!u) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Ne;
          i = fl;
          var p = Ne;
          if (fl = u, (Ne = s) && !p) for (_ = l; _ !== null; ) u = _, s = u.child, u.tag === 22 && u.memoizedState !== null ? da(l) : s !== null ? (s.return = u, _ = s) : da(l);
          for (; o !== null; ) _ = o, aa(o), o = o.sibling;
          _ = l, fl = i, Ne = p;
        }
        ca(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : ca(e);
    }
  }
  function ca(e) {
    for (; _ !== null; ) {
      var n = _;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Ne || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !Ne) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : un(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = n.updateQueue;
              o !== null && fs(n, o, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                fs(n, u, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
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
                    var g = y.dehydrated;
                    g !== null && Wt(g);
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
          Ne || n.flags & 512 && lu(n);
        } catch (h) {
          le(n, n.return, h);
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
  function fa(e) {
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
  function da(e) {
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
              le(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                le(n, l, s);
              }
            }
            var o = n.return;
            try {
              lu(n);
            } catch (s) {
              le(n, o, s);
            }
            break;
          case 5:
            var u = n.return;
            try {
              lu(n);
            } catch (s) {
              le(n, u, s);
            }
        }
      } catch (s) {
        le(n, n.return, s);
      }
      if (n === e) {
        _ = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return, _ = i;
        break;
      }
      _ = n.return;
    }
  }
  var gf = Math.ceil, pl = he.ReactCurrentDispatcher, iu = he.ReactCurrentOwner, be = he.ReactCurrentBatchConfig, V = 0, ye = null, ce = null, ke = 0, Ke = 0, Tt = Mn(0), pe = 0, pr = null, tt = 0, ml = 0, su = 0, mr = null, je = null, au = 0, Lt = 1 / 0, Nn = null, hl = !1, cu = null, Bn = null, vl = !1, $n = null, yl = 0, hr = 0, fu = null, gl = -1, wl = 0;
  function Le() {
    return V & 6 ? ue() : gl !== -1 ? gl : gl = ue();
  }
  function Hn(e) {
    return e.mode & 1 ? V & 2 && ke !== 0 ? ke & -ke : ef.transition !== null ? (wl === 0 && (wl = oi()), wl) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mi(e.type)), e) : 1;
  }
  function cn(e, n, t, r) {
    if (50 < hr) throw hr = 0, fu = null, Error(m(185));
    Vt(e, t, r), (!(V & 2) || e !== ye) && (e === ye && (!(V & 2) && (ml |= t), pe === 4 && Wn(e, ke)), Ue(e, r), t === 1 && V === 0 && !(n.mode & 1) && (Lt = ue() + 500, Yr && jn()));
  }
  function Ue(e, n) {
    var t = e.callbackNode;
    ec(e, n);
    var r = zr(e, e === ye ? ke : 0);
    if (r === 0) t !== null && ti(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && ti(t), n === 1) e.tag === 0 ? bc(ma.bind(null, e)) : bi(ma.bind(null, e)), Gc(function() {
        !(V & 6) && jn();
      }), t = null;
      else {
        switch (ui(r)) {
          case 1:
            t = Hl;
            break;
          case 4:
            t = ri;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = li;
            break;
          default:
            t = Cr;
        }
        t = Ea(t, pa.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function pa(e, n) {
    if (gl = -1, wl = 0, V & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = zr(e, e === ye ? ke : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
    else {
      n = r;
      var l = V;
      V |= 2;
      var o = va();
      (ye !== e || ke !== n) && (Nn = null, Lt = ue() + 500, lt(e, n));
      do
        try {
          kf();
          break;
        } catch (i) {
          ha(e, i);
        }
      while (!0);
      To(), pl.current = o, V = l, ce !== null ? n = 0 : (ye = null, ke = 0, n = pe);
    }
    if (n !== 0) {
      if (n === 2 && (l = Wl(e), l !== 0 && (r = l, n = du(e, l))), n === 1) throw t = pr, lt(e, 0), Wn(e, r), Ue(e, ue()), t;
      if (n === 6) Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !wf(l) && (n = Sl(e, r), n === 2 && (o = Wl(e), o !== 0 && (r = o, n = du(e, o))), n === 1)) throw t = pr, lt(e, 0), Wn(e, r), Ue(e, ue()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ot(e, je, Nn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = au + 500 - ue(), 10 < n)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Le(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = go(ot.bind(null, e, je, Nn), n);
              break;
            }
            ot(e, je, Nn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - rn(r);
              o = 1 << u, u = n[u], u > l && (l = u), r &= ~o;
            }
            if (r = l, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = go(ot.bind(null, e, je, Nn), r);
              break;
            }
            ot(e, je, Nn);
            break;
          case 5:
            ot(e, je, Nn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ue(e, ue()), e.callbackNode === t ? pa.bind(null, e) : null;
  }
  function du(e, n) {
    var t = mr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = Sl(e, n), e !== 2 && (n = je, je = t, n !== null && pu(n)), e;
  }
  function pu(e) {
    je === null ? je = e : je.push.apply(je, e);
  }
  function wf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!ln(o(), l)) return !1;
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
  function Wn(e, n) {
    for (n &= ~su, n &= ~ml, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - rn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ma(e) {
    if (V & 6) throw Error(m(327));
    Rt();
    var n = zr(e, 0);
    if (!(n & 1)) return Ue(e, ue()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Wl(e);
      r !== 0 && (n = r, t = du(e, r));
    }
    if (t === 1) throw t = pr, lt(e, 0), Wn(e, n), Ue(e, ue()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ot(e, je, Nn), Ue(e, ue()), null;
  }
  function mu(e, n) {
    var t = V;
    V |= 1;
    try {
      return e(n);
    } finally {
      V = t, V === 0 && (Lt = ue() + 500, Yr && jn());
    }
  }
  function rt(e) {
    $n !== null && $n.tag === 0 && !(V & 6) && Rt();
    var n = V;
    V |= 1;
    var t = be.transition, r = Q;
    try {
      if (be.transition = null, Q = 1, e) return e();
    } finally {
      Q = r, be.transition = t, V = n, !(V & 6) && jn();
    }
  }
  function hu() {
    Ke = Tt.current, q(Tt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Xc(t)), ce !== null) for (t = ce.return; t !== null; ) {
      var r = t;
      switch (Co(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Nt(), q(De), q(_e), jo();
          break;
        case 5:
          Mo(r);
          break;
        case 4:
          Nt();
          break;
        case 13:
          q(ne);
          break;
        case 19:
          q(ne);
          break;
        case 10:
          Lo(r.type._context);
          break;
        case 22:
        case 23:
          hu();
      }
      t = t.return;
    }
    if (ye = e, ce = e = Qn(e.current, null), ke = Ke = n, pe = 0, pr = null, su = ml = tt = 0, je = mr = null, bn !== null) {
      for (n = 0; n < bn.length; n++) if (t = bn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var u = o.next;
          o.next = l, r.next = u;
        }
        t.pending = r;
      }
      bn = null;
    }
    return e;
  }
  function ha(e, n) {
    do {
      var t = ce;
      try {
        if (To(), rl.current = il, ll) {
          for (var r = te.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (nt = 0, ve = de = te = null, ir = !1, sr = 0, iu.current = null, t === null || t.return === null) {
          pe = 1, pr = n, ce = null;
          break;
        }
        e: {
          var o = e, u = t.return, i = t, s = n;
          if (n = ke, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var E = As(u);
            if (E !== null) {
              E.flags &= -257, Bs(E, u, i, o, n), E.mode & 1 && Vs(o, p, n), n = E, s = p;
              var x = n.updateQueue;
              if (x === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(s), n.updateQueue = N;
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Vs(o, p, n), vu();
                break e;
              }
              s = Error(m(426));
            }
          } else if (ee && i.mode & 1) {
            var ie = As(u);
            if (ie !== null) {
              !(ie.flags & 65536) && (ie.flags |= 256), Bs(ie, u, i, o, n), Po(Pt(s, i));
              break e;
            }
          }
          o = s = Pt(s, i), pe !== 4 && (pe = 2), mr === null ? mr = [o] : mr.push(o), o = u;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = js(o, s, n);
                cs(o, f);
                break e;
              case 1:
                i = s;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bn === null || !Bn.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var w = Us(o, i, n);
                  cs(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ga(t);
      } catch (P) {
        n = P, ce === t && t !== null && (ce = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function va() {
    var e = pl.current;
    return pl.current = il, e === null ? il : e;
  }
  function vu() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4), ye === null || !(tt & 268435455) && !(ml & 268435455) || Wn(ye, ke);
  }
  function Sl(e, n) {
    var t = V;
    V |= 2;
    var r = va();
    (ye !== e || ke !== n) && (Nn = null, lt(e, n));
    do
      try {
        Sf();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if (To(), V = t, pl.current = r, ce !== null) throw Error(m(261));
    return ye = null, ke = 0, pe;
  }
  function Sf() {
    for (; ce !== null; ) ya(ce);
  }
  function kf() {
    for (; ce !== null && !Qa(); ) ya(ce);
  }
  function ya(e) {
    var n = ka(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps, n === null ? ga(e) : ce = n, iu.current = null;
  }
  function ga(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = mf(t, n), t !== null) {
          t.flags &= 32767, ce = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pe = 6, ce = null;
          return;
        }
      } else if (t = pf(t, n, Ke), t !== null) {
        ce = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ce = n;
        return;
      }
      ce = n = e;
    } while (n !== null);
    pe === 0 && (pe = 5);
  }
  function ot(e, n, t) {
    var r = Q, l = be.transition;
    try {
      be.transition = null, Q = 1, Ef(e, n, t, r);
    } finally {
      be.transition = l, Q = r;
    }
    return null;
  }
  function Ef(e, n, t, r) {
    do
      Rt();
    while ($n !== null);
    if (V & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (nc(e, o), e === ye && (ce = ye = null, ke = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, Ea(Cr, function() {
      return Rt(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = be.transition, be.transition = null;
      var u = Q;
      Q = 1;
      var i = V;
      V |= 4, iu.current = null, vf(e, t), sa(t, e), Bc(vo), Rr = !!ho, vo = ho = null, e.current = t, yf(t), Ka(), V = i, Q = u, be.transition = o;
    } else e.current = t;
    if (vl && (vl = !1, $n = e, yl = l), o = e.pendingLanes, o === 0 && (Bn = null), Ga(t.stateNode), Ue(e, ue()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = cu, cu = null, e;
    return yl & 1 && e.tag !== 0 && Rt(), o = e.pendingLanes, o & 1 ? e === fu ? hr++ : (hr = 0, fu = e) : hr = 0, jn(), null;
  }
  function Rt() {
    if ($n !== null) {
      var e = ui(yl), n = be.transition, t = Q;
      try {
        if (be.transition = null, Q = 16 > e ? 16 : e, $n === null) var r = !1;
        else {
          if (e = $n, $n = null, yl = 0, V & 6) throw Error(m(331));
          var l = V;
          for (V |= 4, _ = e.current; _ !== null; ) {
            var o = _, u = o.child;
            if (_.flags & 16) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (_ = p; _ !== null; ) {
                    var y = _;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, o);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, _ = g;
                    else for (; _ !== null; ) {
                      y = _;
                      var h = y.sibling, E = y.return;
                      if (ra(y), y === p) {
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
                      var ie = N.sibling;
                      N.sibling = null, N = ie;
                    } while (N !== null);
                  }
                }
                _ = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) u.return = o, _ = u;
            else e: for (; _ !== null; ) {
              if (o = _, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  dr(9, o, o.return);
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
            u = _;
            var d = u.child;
            if (u.subtreeFlags & 2064 && d !== null) d.return = u, _ = d;
            else e: for (u = a; _ !== null; ) {
              if (i = _, i.flags & 2048) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, i);
                }
              } catch (P) {
                le(i, i.return, P);
              }
              if (i === u) {
                _ = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                w.return = i.return, _ = w;
                break e;
              }
              _ = i.return;
            }
          }
          if (V = l, jn(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
            pn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Q = t, be.transition = n;
      }
    }
    return !1;
  }
  function wa(e, n, t) {
    n = Pt(t, n), n = js(e, n, 1), e = Vn(e, n, 1), n = Le(), e !== null && (Vt(e, 1, n), Ue(e, n));
  }
  function le(e, n, t) {
    if (e.tag === 3) wa(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        wa(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
          e = Pt(t, e), e = Us(n, e, 1), n = Vn(n, e, 1), e = Le(), n !== null && (Vt(n, 1, e), Ue(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function _f(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Le(), e.pingedLanes |= e.suspendedLanes & t, ye === e && (ke & t) === t && (pe === 4 || pe === 3 && (ke & 130023424) === ke && 500 > ue() - au ? lt(e, 0) : su |= t), Ue(e, n);
  }
  function Sa(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = Le();
    e = _n(e, n), e !== null && (Vt(e, n, t), Ue(e, t));
  }
  function Cf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), Sa(e, t);
  }
  function xf(e, n) {
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
    r !== null && r.delete(n), Sa(e, t);
  }
  var ka;
  ka = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || De.current) Fe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return Fe = !1, df(e, n, t);
      Fe = !!(e.flags & 131072);
    }
    else Fe = !1, ee && n.flags & 1048576 && es(n, Gr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = wt(n, _e.current);
        xt(n, t), l = Ao(null, n, r, e, l, t);
        var o = Bo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Me(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Oo(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Yo(n, r, e, t), n = Jo(null, n, r, !0, o, t)) : (n.tag = 0, ee && o && _o(n), Te(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Pf(r), e = un(r, e), l) {
            case 0:
              n = Zo(null, n, r, e, t);
              break e;
            case 1:
              n = Ys(null, n, r, e, t);
              break e;
            case 11:
              n = $s(null, n, r, e, t);
              break e;
            case 14:
              n = Hs(null, n, r, un(r.type, e), t);
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
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : un(r, l), Zo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : un(r, l), Ys(e, n, r, l, t);
      case 3:
        e: {
          if (Xs(n), e === null) throw Error(m(387));
          r = n.pendingProps, o = n.memoizedState, l = o.element, as(e, n), nl(n, r, null, t);
          var u = n.memoizedState;
          if (r = u.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = Pt(Error(m(423)), n), n = Gs(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = Pt(Error(m(424)), n), n = Gs(e, n, r, t, l);
            break e;
          } else for (Qe = Dn(n.stateNode.containerInfo.firstChild), We = n, ee = !0, on = null, t = is(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Et(), r === l) {
              n = xn(e, n, t);
              break e;
            }
            Te(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ds(n), e === null && No(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, yo(r, l) ? u = null : o !== null && yo(r, o) && (n.flags |= 32), Ks(e, n), Te(e, n, u, t), n.child;
      case 6:
        return e === null && No(n), null;
      case 13:
        return Zs(e, n, t);
      case 4:
        return Do(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = _t(n, null, r, t) : Te(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : un(r, l), $s(e, n, r, l, t);
      case 7:
        return Te(e, n, n.pendingProps, t), n.child;
      case 8:
        return Te(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Te(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, u = l.value, X(qr, r._currentValue), r._currentValue = u, o !== null) if (ln(o.value, u)) {
            if (o.children === l.children && !De.current) {
              n = xn(e, n, t);
              break e;
            }
          } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
            var i = o.dependencies;
            if (i !== null) {
              u = o.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = Cn(-1, t & -t), s.tag = 2;
                    var p = o.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), Ro(
                    o.return,
                    t,
                    n
                  ), i.lanes |= t;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) u = o.type === n.type ? null : o.child;
            else if (o.tag === 18) {
              if (u = o.return, u === null) throw Error(m(341));
              u.lanes |= t, i = u.alternate, i !== null && (i.lanes |= t), Ro(u, t, n), u = o.sibling;
            } else u = o.child;
            if (u !== null) u.return = o;
            else for (u = o; u !== null; ) {
              if (u === n) {
                u = null;
                break;
              }
              if (o = u.sibling, o !== null) {
                o.return = u.return, u = o;
                break;
              }
              u = u.return;
            }
            o = u;
          }
          Te(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, xt(n, t), l = Je(l), r = r(l), n.flags |= 1, Te(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = un(r, n.pendingProps), l = un(r.type, l), Hs(e, n, r, l, t);
      case 15:
        return Ws(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : un(r, l), cl(e, n), n.tag = 1, Me(r) ? (e = !0, Kr(n)) : e = !1, xt(n, t), Ms(n, r, l), Yo(n, r, l, t), Jo(null, n, r, !0, e, t);
      case 19:
        return qs(e, n, t);
      case 22:
        return Qs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function Ea(e, n) {
    return ni(e, n);
  }
  function Nf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(e, n, t, r) {
    return new Nf(e, n, t, r);
  }
  function yu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Pf(e) {
    if (typeof e == "function") return yu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === fn) return 11;
      if (e === dn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return t === null ? (t = en(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, o) {
    var u = 2;
    if (r = e, typeof e == "function") yu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case Ie:
        return ut(t.children, l, o, n);
      case Xe:
        u = 8, l |= 8;
        break;
      case Pn:
        return e = en(12, t, n, l | 2), e.elementType = Pn, e.lanes = o, e;
      case Be:
        return e = en(13, t, n, l), e.elementType = Be, e.lanes = o, e;
      case tn:
        return e = en(19, t, n, l), e.elementType = tn, e.lanes = o, e;
      case re:
        return El(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case gn:
            u = 10;
            break e;
          case Yn:
            u = 9;
            break e;
          case fn:
            u = 11;
            break e;
          case dn:
            u = 14;
            break e;
          case Oe:
            u = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = en(u, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function ut(e, n, t, r) {
    return e = en(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = en(22, e, r, n), e.elementType = re, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function gu(e, n, t) {
    return e = en(6, e, null, n), e.lanes = t, e;
  }
  function wu(e, n, t) {
    return n = en(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function zf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ql(0), this.expirationTimes = Ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ql(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Su(e, n, t, r, l, o, u, i, s) {
    return e = new zf(e, n, t, i, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = en(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oo(o), e;
  }
  function Tf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ze, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function _a(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Me(n.type)) {
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
      if (Me(t)) return Ji(e, t, n);
    }
    return n;
  }
  function Ca(e, n, t, r, l, o, u, i, s) {
    return e = Su(t, r, !0, e, l, o, u, i, s), e.context = _a(null), t = e.current, r = Le(), l = Hn(t), o = Cn(r, l), o.callback = n ?? null, Vn(t, o, l), e.current.lanes = l, Vt(e, l, r), Ue(e, r), e;
  }
  function _l(e, n, t, r) {
    var l = n.current, o = Le(), u = Hn(l);
    return t = _a(t), n.context === null ? n.context = t : n.pendingContext = t, n = Cn(o, u), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Vn(l, n, u), e !== null && (cn(e, l, u, o), el(e, l, u)), u;
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
  function xa(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function ku(e, n) {
    xa(e, n), (e = e.alternate) && xa(e, n);
  }
  var Na = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Eu(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = Eu.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    _l(e, n, null, null);
  }, xl.prototype.unmount = Eu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        _l(null, e, null, null);
      }), n[wn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ai();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++) ;
      Rn.splice(t, 0, e), t === 0 && di(e);
    }
  };
  function _u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Pa() {
  }
  function Lf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var p = Cl(u);
          o.call(p);
        };
      }
      var u = Ca(n, r, e, 0, null, !1, !1, "", Pa);
      return e._reactRootContainer = u, e[wn] = u.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(), u;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Cl(s);
        i.call(p);
      };
    }
    var s = Su(e, 0, !1, null, null, !1, !1, "", Pa);
    return e._reactRootContainer = s, e[wn] = s.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      _l(n, s, t, r);
    }), s;
  }
  function Pl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = Cl(u);
          i.call(s);
        };
      }
      _l(n, u, e, l);
    } else u = Lf(t, n, e, l, r);
    return Cl(u);
  }
  ii = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 && (Kl(n, t | 1), Ue(n, ue()), !(V & 6) && (Lt = ue() + 500, jn()));
        }
        break;
      case 13:
        rt(function() {
          var r = _n(e, 1);
          if (r !== null) {
            var l = Le();
            cn(r, e, 1, l);
          }
        }), ku(e, 1);
    }
  }, Yl = function(e) {
    if (e.tag === 13) {
      var n = _n(e, 134217728);
      if (n !== null) {
        var t = Le();
        cn(n, e, 134217728, t);
      }
      ku(e, 134217728);
    }
  }, si = function(e) {
    if (e.tag === 13) {
      var n = Hn(e), t = _n(e, n);
      if (t !== null) {
        var r = Le();
        cn(t, e, n, r);
      }
      ku(e, n);
    }
  }, ai = function() {
    return Q;
  }, ci = function(e, n) {
    var t = Q;
    try {
      return Q = e, n();
    } finally {
      Q = t;
    }
  }, Vl = function(e, n, t) {
    switch (n) {
      case "input":
        if (Rl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              Du(r), Rl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Vu(e, t);
        break;
      case "select":
        n = t.value, n != null && it(e, !!t.multiple, n, !1);
    }
  }, Xu = mu, Gu = rt;
  var Rf = { usingClientEntryPoint: !1, Events: [tr, yt, Wr, Ku, Yu, mu] }, vr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, If = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = bu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: vr.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      xr = zl.inject(If), pn = zl;
    } catch {
    }
  }
  return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf, Ve.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_u(n)) throw Error(m(200));
    return Tf(e, n, null, t);
  }, Ve.createRoot = function(e, n) {
    if (!_u(e)) throw Error(m(299));
    var t = !1, r = "", l = Na;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Su(e, 1, !1, null, null, t, !1, r, l), e[wn] = n.current, bt(e.nodeType === 8 ? e.parentNode : e), new Eu(n);
  }, Ve.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = bu(n), e = e === null ? null : e.stateNode, e;
  }, Ve.flushSync = function(e) {
    return rt(e);
  }, Ve.hydrate = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, Ve.hydrateRoot = function(e, n, t) {
    if (!_u(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", u = Na;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), n = Ca(n, null, e, 1, t ?? null, l, !1, o, u), e[wn] = n.current, bt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new xl(n);
  }, Ve.render = function(e, n, t) {
    if (!Nl(n)) throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, Ve.unmountComponentAtNode = function(e) {
    if (!Nl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wn] = null;
      });
    }), !0) : !1;
  }, Ve.unstable_batchedUpdates = mu, Ve.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Nl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, Ve.version = "18.3.1-next-f1338f8080-20240426", Ve;
}
var Ma;
function Bf() {
  if (Ma) return Nu.exports;
  Ma = 1;
  function S() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (I) {
        console.error(I);
      }
  }
  return S(), Nu.exports = Af(), Nu.exports;
}
var Fa;
function $f() {
  if (Fa) return Tl;
  Fa = 1;
  var S = Bf();
  return Tl.createRoot = S.createRoot, Tl.hydrateRoot = S.hydrateRoot, Tl;
}
var Hf = $f();
const Wf = /* @__PURE__ */ Df(Hf), Qf = () => {
  const S = document.getElementById("shop-info");
  return JSON.parse((S == null ? void 0 : S.textContent) || "{}");
}, Iu = () => {
  const S = document.getElementById("product-info"), I = JSON.parse((S == null ? void 0 : S.textContent) || "{}");
  return window.shineon = window.shineon || {}, window.shineon.product_info = I, I;
}, Kf = () => {
  const S = Iu();
  return Yf(S);
}, Yf = (S) => {
  var I;
  return !S.shop_cf || !((I = S.shop_pt_id_obj) != null && I.custom_fields) ? [] : S.shop_pt_id_obj.custom_fields.map((m) => ({
    ...S.shop_cf[m.key],
    id: m
  }));
}, Ou = Iu();
let Tu = Ou.selected_variant;
const Lu = {
  get variantInputs() {
    return document.querySelectorAll(Ou.trigger_selector);
  }
}, Xf = () => {
  const S = document.querySelectorAll('form[action="/cart/add"]');
  return Array.from(S).map((I) => I.getAttribute("id"));
}, ja = () => (Tu || Lu.variantInputs.forEach((S) => {
  if (S) {
    const I = parseInt(S.value);
    Tu = Ou.product.variants.find((m) => m.id === I);
  }
}), Tu), Gf = (S) => {
  clearTimeout(window.variantChangeTimeout), window.variantChangeTimeout = setTimeout(() => {
    S();
  }, 300);
}, Zf = (S) => (Lu.variantInputs.forEach((I) => {
  I.addEventListener("change", S);
}), () => {
  Lu.variantInputs.forEach((I) => {
    I.removeEventListener("change", S);
  });
}), Jf = ({ product_cf: S, required: I, formId: m, onChange: Ee }) => {
  const fe = (G, se) => ({
    type: "text",
    id: G.id.key,
    name: `properties[${G.name}]`,
    autoComplete: "off",
    placeholder: G.placeholder,
    form: se,
    required: I,
    className: `field__input ${G.class || ""}`,
    minLength: G.minlength > 0 ? G.minlength : void 0,
    maxLength: G.maxlength > 0 ? G.maxlength : 20,
    onChange: Ee
  });
  return /* @__PURE__ */ Re.jsx("input", { ...fe(S, m) });
}, qf = () => {
  var Pe;
  const S = Iu(), I = Qf(), m = I.sectionID ? "product-form-" + I.sectionID : Xf(), Ee = Kf(), [fe, G] = gr.useState({}), [se, oe] = gr.useState(ja()), H = Ee.filter((F) => F.field_type === "engraving"), me = Ee.filter((F) => F.required && F.field_type === "engraving").length > 0;
  let ae = ((Pe = S.variant_metafields[se.id]) == null ? void 0 : Pe.engravings) > 0;
  console.log(H), gr.useEffect(() => {
    const F = () => {
      var O;
      const U = ja();
      ((O = S.variant_metafields[U.id]) == null ? void 0 : O.engravings) === 0 && (document.querySelectorAll('.so-hyper input[type="text"]').forEach((Ae) => {
        Ae.value = "", document.querySelectorAll(`input[type="hidden"][name="${Ae.name}"]`).forEach((he) => {
          he.remove();
        });
      }), G({}));
    };
    return document.querySelectorAll("[name='id']").forEach((U) => {
      U.addEventListener("change", function() {
        oe(
          S.product.variants.filter(
            (O) => O.id === parseInt(document.querySelector('[name="id"]').value)
          )[0]
        );
      });
    }), Zf(F);
  }, []), gr.useEffect(() => {
    var F;
    ae = ((F = S.variant_metafields[se.id]) == null ? void 0 : F.engravings) > 0;
  }, [se]);
  const Z = (F, U) => {
    G((O) => ({
      ...O,
      [F]: U.value.length
    })), Gf(() => {
      K(U);
    });
  }, K = (F) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((O) => {
      let we = O.querySelector(`input[name="${F.name}"]`);
      we || (we = document.createElement("input"), we.type = "hidden", we.name = F.name, O.appendChild(we)), we.value = F.value;
    });
  };
  return /* @__PURE__ */ Re.jsx(Re.Fragment, { children: (me || ae) && /* @__PURE__ */ Re.jsx("div", { className: "so-hyper", children: H.map((F, U) => /* @__PURE__ */ Re.jsxs("div", { className: "field-wrapper", children: [
    /* @__PURE__ */ Re.jsx("label", { className: "form__label", children: F.name }),
    /* @__PURE__ */ Re.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ Re.jsx(
        Jf,
        {
          product_cf: F,
          required: me || ae && U === 0,
          formId: m,
          onChange: (O) => Z(F.id.key, O.target)
        }
      ),
      /* @__PURE__ */ Re.jsx("span", { className: "so-wrong-input-notification", "data-text": " isn't available" }),
      /* @__PURE__ */ Re.jsx("span", { className: "so-empty-input-notification" }),
      /* @__PURE__ */ Re.jsxs("label", { htmlFor: F.id.key, className: "field__label", children: [
        /* @__PURE__ */ Re.jsx("span", { className: "placeholder", children: F.placeholder }),
        /* @__PURE__ */ Re.jsxs(
          "span",
          {
            className: `so-input-counter-w ${fe[F.id.key] ? "so-input-filled" : ""}`,
            children: [
              fe[F.id.key] || 0,
              "/",
              F.maxlength || 20
            ]
          }
        )
      ] })
    ] })
  ] }, U)) }) });
};
document.addEventListener("DOMContentLoaded", () => {
  const S = document.getElementById("so-hyper");
  S && Wf.createRoot(S).render(
    /* @__PURE__ */ Re.jsx(gr.StrictMode, { children: /* @__PURE__ */ Re.jsx(qf, {}) })
  );
});

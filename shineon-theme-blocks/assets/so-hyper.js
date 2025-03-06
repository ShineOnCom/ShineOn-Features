function Ff(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
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
  var h = Symbol.for("react.element"), T = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), Q = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), se = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function Z(c) {
    return c === null || typeof c != "object" ? null : (c = Y && c[Y] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Se = Object.assign, R = {};
  function F(c, y, V) {
    this.props = c, this.context = y, this.refs = R, this.updater = V || ae;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(c, y) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, y, "setState");
  }, F.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function ye() {
  }
  ye.prototype = F.prototype;
  function ke(c, y, V) {
    this.props = c, this.context = y, this.refs = R, this.updater = V || ae;
  }
  var _ = ke.prototype = new ye();
  _.constructor = ke, Se(_, F.prototype), _.isPureReactComponent = !0;
  var L = Array.isArray, j = Object.prototype.hasOwnProperty, M = { current: null }, J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(c, y, V) {
    var B, X = {}, q = null, te = null;
    if (y != null) for (B in y.ref !== void 0 && (te = y.ref), y.key !== void 0 && (q = "" + y.key), y) j.call(y, B) && !J.hasOwnProperty(B) && (X[B] = y[B]);
    var b = arguments.length - 2;
    if (b === 1) X.children = V;
    else if (1 < b) {
      for (var ce = Array(b), qe = 0; qe < b; qe++) ce[qe] = arguments[qe + 2];
      X.children = ce;
    }
    if (c && c.defaultProps) for (B in b = c.defaultProps, b) X[B] === void 0 && (X[B] = b[B]);
    return { $$typeof: h, type: c, key: q, ref: te, props: X, _owner: M.current };
  }
  function oe(c, y) {
    return { $$typeof: h, type: c.type, key: y, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function Oe(c) {
    return typeof c == "object" && c !== null && c.$$typeof === h;
  }
  function en(c) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(V) {
      return y[V];
    });
  }
  var Ye = /\/+/g;
  function Xe(c, y) {
    return typeof c == "object" && c !== null && c.key != null ? en("" + c.key) : y.toString(36);
  }
  function sn(c, y, V, B, X) {
    var q = typeof c;
    (q === "undefined" || q === "boolean") && (c = null);
    var te = !1;
    if (c === null) te = !0;
    else switch (q) {
      case "string":
      case "number":
        te = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case h:
          case T:
            te = !0;
        }
    }
    if (te) return te = c, X = X(te), c = B === "" ? "." + Xe(te, 0) : B, L(X) ? (V = "", c != null && (V = c.replace(Ye, "$&/") + "/"), sn(X, y, V, "", function(qe) {
      return qe;
    })) : X != null && (Oe(X) && (X = oe(X, V + (!X.key || te && te.key === X.key ? "" : ("" + X.key).replace(Ye, "$&/") + "/") + c)), y.push(X)), 1;
    if (te = 0, B = B === "" ? "." : B + ":", L(c)) for (var b = 0; b < c.length; b++) {
      q = c[b];
      var ce = B + Xe(q, b);
      te += sn(q, y, V, ce, X);
    }
    else if (ce = Z(c), typeof ce == "function") for (c = ce.call(c), b = 0; !(q = c.next()).done; ) q = q.value, ce = B + Xe(q, b++), te += sn(q, y, V, ce, X);
    else if (q === "object") throw y = String(c), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return te;
  }
  function vn(c, y, V) {
    if (c == null) return c;
    var B = [], X = 0;
    return sn(c, B, "", "", function(q) {
      return y.call(V, q, X++);
    }), B;
  }
  function Ve(c) {
    if (c._status === -1) {
      var y = c._result;
      y = y(), y.then(function(V) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = V);
      }, function(V) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = V);
      }), c._status === -1 && (c._status = 0, c._result = y);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ge = { current: null }, k = { transition: null }, D = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: k, ReactCurrentOwner: M };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return A.Children = { map: vn, forEach: function(c, y, V) {
    vn(c, function() {
      y.apply(this, arguments);
    }, V);
  }, count: function(c) {
    var y = 0;
    return vn(c, function() {
      y++;
    }), y;
  }, toArray: function(c) {
    return vn(c, function(y) {
      return y;
    }) || [];
  }, only: function(c) {
    if (!Oe(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, A.Component = F, A.Fragment = m, A.Profiler = $, A.PureComponent = ke, A.StrictMode = de, A.Suspense = H, A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, A.act = x, A.cloneElement = function(c, y, V) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var B = Se({}, c.props), X = c.key, q = c.ref, te = c._owner;
    if (y != null) {
      if (y.ref !== void 0 && (q = y.ref, te = M.current), y.key !== void 0 && (X = "" + y.key), c.type && c.type.defaultProps) var b = c.type.defaultProps;
      for (ce in y) j.call(y, ce) && !J.hasOwnProperty(ce) && (B[ce] = y[ce] === void 0 && b !== void 0 ? b[ce] : y[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1) B.children = V;
    else if (1 < ce) {
      b = Array(ce);
      for (var qe = 0; qe < ce; qe++) b[qe] = arguments[qe + 2];
      B.children = b;
    }
    return { $$typeof: h, type: c.type, key: X, ref: q, props: B, _owner: te };
  }, A.createContext = function(c) {
    return c = { $$typeof: Q, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: le, _context: c }, c.Consumer = c;
  }, A.createElement = me, A.createFactory = function(c) {
    var y = me.bind(null, c);
    return y.type = c, y;
  }, A.createRef = function() {
    return { current: null };
  }, A.forwardRef = function(c) {
    return { $$typeof: ne, render: c };
  }, A.isValidElement = Oe, A.lazy = function(c) {
    return { $$typeof: pe, _payload: { _status: -1, _result: c }, _init: Ve };
  }, A.memo = function(c, y) {
    return { $$typeof: se, type: c, compare: y === void 0 ? null : y };
  }, A.startTransition = function(c) {
    var y = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = y;
    }
  }, A.unstable_act = x, A.useCallback = function(c, y) {
    return ge.current.useCallback(c, y);
  }, A.useContext = function(c) {
    return ge.current.useContext(c);
  }, A.useDebugValue = function() {
  }, A.useDeferredValue = function(c) {
    return ge.current.useDeferredValue(c);
  }, A.useEffect = function(c, y) {
    return ge.current.useEffect(c, y);
  }, A.useId = function() {
    return ge.current.useId();
  }, A.useImperativeHandle = function(c, y, V) {
    return ge.current.useImperativeHandle(c, y, V);
  }, A.useInsertionEffect = function(c, y) {
    return ge.current.useInsertionEffect(c, y);
  }, A.useLayoutEffect = function(c, y) {
    return ge.current.useLayoutEffect(c, y);
  }, A.useMemo = function(c, y) {
    return ge.current.useMemo(c, y);
  }, A.useReducer = function(c, y, V) {
    return ge.current.useReducer(c, y, V);
  }, A.useRef = function(c) {
    return ge.current.useRef(c);
  }, A.useState = function(c) {
    return ge.current.useState(c);
  }, A.useSyncExternalStore = function(c, y, V) {
    return ge.current.useSyncExternalStore(c, y, V);
  }, A.useTransition = function() {
    return ge.current.useTransition();
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
  var h = ji(), T = Symbol.for("react.element"), m = Symbol.for("react.fragment"), de = Object.prototype.hasOwnProperty, $ = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Q(ne, H, se) {
    var pe, Y = {}, Z = null, ae = null;
    se !== void 0 && (Z = "" + se), H.key !== void 0 && (Z = "" + H.key), H.ref !== void 0 && (ae = H.ref);
    for (pe in H) de.call(H, pe) && !le.hasOwnProperty(pe) && (Y[pe] = H[pe]);
    if (ne && ne.defaultProps) for (pe in H = ne.defaultProps, H) Y[pe] === void 0 && (Y[pe] = H[pe]);
    return { $$typeof: T, type: ne, key: Z, ref: ae, props: Y, _owner: $.current };
  }
  return gr.Fragment = m, gr.jsx = Q, gr.jsxs = Q, gr;
}
var ja;
function Vf() {
  return ja || (ja = 1, xi.exports = $f()), xi.exports;
}
var W = Vf(), Pe = ji(), Ll = {}, Pi = { exports: {} }, Ke = {}, zi = { exports: {} }, Li = {};
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
  return Ma || (Ma = 1, function(h) {
    function T(k, D) {
      var x = k.length;
      k.push(D);
      e: for (; 0 < x; ) {
        var c = x - 1 >>> 1, y = k[c];
        if (0 < $(y, D)) k[c] = D, k[x] = y, x = c;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function de(k) {
      if (k.length === 0) return null;
      var D = k[0], x = k.pop();
      if (x !== D) {
        k[0] = x;
        e: for (var c = 0, y = k.length, V = y >>> 1; c < V; ) {
          var B = 2 * (c + 1) - 1, X = k[B], q = B + 1, te = k[q];
          if (0 > $(X, x)) q < y && 0 > $(te, X) ? (k[c] = te, k[q] = x, c = q) : (k[c] = X, k[B] = x, c = B);
          else if (q < y && 0 > $(te, x)) k[c] = te, k[q] = x, c = q;
          else break e;
        }
      }
      return D;
    }
    function $(k, D) {
      var x = k.sortIndex - D.sortIndex;
      return x !== 0 ? x : k.id - D.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var le = performance;
      h.unstable_now = function() {
        return le.now();
      };
    } else {
      var Q = Date, ne = Q.now();
      h.unstable_now = function() {
        return Q.now() - ne;
      };
    }
    var H = [], se = [], pe = 1, Y = null, Z = 3, ae = !1, Se = !1, R = !1, F = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(k) {
      for (var D = m(se); D !== null; ) {
        if (D.callback === null) de(se);
        else if (D.startTime <= k) de(se), D.sortIndex = D.expirationTime, T(H, D);
        else break;
        D = m(se);
      }
    }
    function L(k) {
      if (R = !1, _(k), !Se) if (m(H) !== null) Se = !0, Ve(j);
      else {
        var D = m(se);
        D !== null && ge(L, D.startTime - k);
      }
    }
    function j(k, D) {
      Se = !1, R && (R = !1, ye(me), me = -1), ae = !0;
      var x = Z;
      try {
        for (_(D), Y = m(H); Y !== null && (!(Y.expirationTime > D) || k && !en()); ) {
          var c = Y.callback;
          if (typeof c == "function") {
            Y.callback = null, Z = Y.priorityLevel;
            var y = c(Y.expirationTime <= D);
            D = h.unstable_now(), typeof y == "function" ? Y.callback = y : Y === m(H) && de(H), _(D);
          } else de(H);
          Y = m(H);
        }
        if (Y !== null) var V = !0;
        else {
          var B = m(se);
          B !== null && ge(L, B.startTime - D), V = !1;
        }
        return V;
      } finally {
        Y = null, Z = x, ae = !1;
      }
    }
    var M = !1, J = null, me = -1, oe = 5, Oe = -1;
    function en() {
      return !(h.unstable_now() - Oe < oe);
    }
    function Ye() {
      if (J !== null) {
        var k = h.unstable_now();
        Oe = k;
        var D = !0;
        try {
          D = J(!0, k);
        } finally {
          D ? Xe() : (M = !1, J = null);
        }
      } else M = !1;
    }
    var Xe;
    if (typeof ke == "function") Xe = function() {
      ke(Ye);
    };
    else if (typeof MessageChannel < "u") {
      var sn = new MessageChannel(), vn = sn.port2;
      sn.port1.onmessage = Ye, Xe = function() {
        vn.postMessage(null);
      };
    } else Xe = function() {
      F(Ye, 0);
    };
    function Ve(k) {
      J = k, M || (M = !0, Xe());
    }
    function ge(k, D) {
      me = F(function() {
        k(h.unstable_now());
      }, D);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, h.unstable_continueExecution = function() {
      Se || ae || (Se = !0, Ve(j));
    }, h.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : oe = 0 < k ? Math.floor(1e3 / k) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, h.unstable_getFirstCallbackNode = function() {
      return m(H);
    }, h.unstable_next = function(k) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = Z;
      }
      var x = Z;
      Z = D;
      try {
        return k();
      } finally {
        Z = x;
      }
    }, h.unstable_pauseExecution = function() {
    }, h.unstable_requestPaint = function() {
    }, h.unstable_runWithPriority = function(k, D) {
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
      var x = Z;
      Z = k;
      try {
        return D();
      } finally {
        Z = x;
      }
    }, h.unstable_scheduleCallback = function(k, D, x) {
      var c = h.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? c + x : c) : x = c, k) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = x + y, k = { id: pe++, callback: D, priorityLevel: k, startTime: x, expirationTime: y, sortIndex: -1 }, x > c ? (k.sortIndex = x, T(se, k), m(H) === null && k === m(se) && (R ? (ye(me), me = -1) : R = !0, ge(L, x - c))) : (k.sortIndex = y, T(H, k), Se || ae || (Se = !0, Ve(j))), k;
    }, h.unstable_shouldYield = en, h.unstable_wrapCallback = function(k) {
      var D = Z;
      return function() {
        var x = Z;
        Z = D;
        try {
          return k.apply(this, arguments);
        } finally {
          Z = x;
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
  if (Fa) return Ke;
  Fa = 1;
  var h = ji(), T = Bf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var de = /* @__PURE__ */ new Set(), $ = {};
  function le(e, n) {
    Q(e, n), Q(e + "Capture", n);
  }
  function Q(e, n) {
    for ($[e] = n, e = 0; e < n.length; e++) de.add(n[e]);
  }
  var ne = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), H = Object.prototype.hasOwnProperty, se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, Y = {};
  function Z(e) {
    return H.call(Y, e) ? !0 : H.call(pe, e) ? !1 : se.test(e) ? Y[e] = !0 : (pe[e] = !0, !1);
  }
  function ae(e, n, t, r) {
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
  function Se(e, n, t, r) {
    if (n === null || typeof n > "u" || ae(e, n, t, r)) return !0;
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
  function R(e, n, t, r, l, o, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    F[e] = new R(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    F[n] = new R(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    F[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    F[e] = new R(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    F[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    F[e] = new R(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    F[e] = new R(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    F[e] = new R(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    F[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ye = /[\-:]([a-z])/g;
  function ke(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      ye,
      ke
    );
    F[n] = new R(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(ye, ke);
    F[n] = new R(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(ye, ke);
    F[n] = new R(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    F[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    F[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function _(e, n, t, r) {
    var l = F.hasOwnProperty(n) ? F[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Se(n, t, l, r) && (t = null), r || l === null ? Z(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var L = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, j = Symbol.for("react.element"), M = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), me = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), en = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), sn = Symbol.for("react.suspense_list"), vn = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var x = Object.assign, c;
  function y(e) {
    if (c === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      c = n && n[1] || "";
    }
    return `
` + c + e;
  }
  var V = !1;
  function B(e, n) {
    if (!e || V) return "";
    V = !0;
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
      V = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function X(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = B(e.type, !1), e;
      case 11:
        return e = B(e.type.render, !1), e;
      case 1:
        return e = B(e.type, !0), e;
      default:
        return "";
    }
  }
  function q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case J:
        return "Fragment";
      case M:
        return "Portal";
      case oe:
        return "Profiler";
      case me:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case sn:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case en:
        return (e.displayName || "Context") + ".Consumer";
      case Oe:
        return (e._context.displayName || "Context") + ".Provider";
      case Ye:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case vn:
        return n = e.displayName || null, n !== null ? n : q(e.type) || "Memo";
      case Ve:
        n = e._payload, e = e._init;
        try {
          return q(e(n));
        } catch {
        }
    }
    return null;
  }
  function te(e) {
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
        return q(n);
      case 8:
        return n === me ? "StrictMode" : "Mode";
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
  function b(e) {
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
  function ce(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function qe(e) {
    var n = ce(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
    return e && (r = ce(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
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
    return x({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Ui(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = b(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function $i(e, n) {
    n = n.checked, n != null && _(e, "checked", n, !1);
  }
  function Il(e, n) {
    $i(e, n);
    var t = b(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Ol(e, n.type, t) : n.hasOwnProperty("defaultValue") && Ol(e, n.type, b(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
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
      for (t = "" + b(t), n = null, l = 0; l < e.length; l++) {
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
    return x({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
    e._wrapperState = { initialValue: b(t) };
  }
  function Bi(e, n) {
    var t = b(n.value), r = b(n.defaultValue);
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
  var Ba = x({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  if (ne) try {
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
    } catch (g) {
      this.onError(g);
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
  var lu = T.unstable_scheduleCallback, ou = T.unstable_cancelCallback, Xa = T.unstable_shouldYield, qa = T.unstable_requestPaint, Ee = T.unstable_now, Ga = T.unstable_getCurrentPriorityLevel, Wl = T.unstable_ImmediatePriority, iu = T.unstable_UserBlockingPriority, Cr = T.unstable_NormalPriority, Za = T.unstable_LowPriority, uu = T.unstable_IdlePriority, xr = null, yn = null;
  function Ja(e) {
    if (yn && typeof yn.onCommitFiberRoot == "function") try {
      yn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : nc, ba = Math.log, ec = Math.LN2;
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
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - an(n), l = 1 << t, r |= e[t], n &= ~l;
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
      var i = 31 - an(o), u = 1 << i, s = l[i];
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
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - an(n), e[n] = t;
  }
  function lc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - an(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Yl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - an(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var ee = 0;
  function au(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cu, Xl, fu, du, pu, ql = !1, Lr = [], Tn = null, Rn = null, In = null, At = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), On = [], oc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        return Tn = Ht(Tn, e, n, t, r, l), !0;
      case "dragenter":
        return Rn = Ht(Rn, e, n, t, r, l), !0;
      case "mouseover":
        return In = Ht(In, e, n, t, r, l), !0;
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
    ql = !1, Tn !== null && Tr(Tn) && (Tn = null), Rn !== null && Tr(Rn) && (Rn = null), In !== null && Tr(In) && (In = null), At.forEach(vu), Bt.forEach(vu);
  }
  function Wt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ql || (ql = !0, T.unstable_scheduleCallback(T.unstable_NormalPriority, uc)));
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
    for (Tn !== null && Wt(Tn, e), Rn !== null && Wt(Rn, e), In !== null && Wt(In, e), At.forEach(n), Bt.forEach(n), t = 0; t < On.length; t++) r = On[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < On.length && (t = On[0], t.blockedOn === null); ) hu(t), t.blockedOn === null && On.shift();
  }
  var ft = L.ReactCurrentBatchConfig, Rr = !0;
  function sc(e, n, t, r) {
    var l = ee, o = ft.transition;
    ft.transition = null;
    try {
      ee = 1, Gl(e, n, t, r);
    } finally {
      ee = l, ft.transition = o;
    }
  }
  function ac(e, n, t, r) {
    var l = ee, o = ft.transition;
    ft.transition = null;
    try {
      ee = 4, Gl(e, n, t, r);
    } finally {
      ee = l, ft.transition = o;
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
    return x(n.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, bl = Ge(dt), Kt = x({}, dt, { view: 0, detail: 0 }), cc = Ge(Kt), eo, no, Yt, Dr = x({}, Kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ro, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yt && (Yt && e.type === "mousemove" ? (eo = e.screenX - Yt.screenX, no = e.screenY - Yt.screenY) : no = eo = 0, Yt = e), eo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : no;
  } }), Su = Ge(Dr), fc = x({}, Dr, { dataTransfer: 0 }), dc = Ge(fc), pc = x({}, Kt, { relatedTarget: 0 }), to = Ge(pc), mc = x({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hc = Ge(mc), vc = x({}, dt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), yc = Ge(vc), gc = x({}, dt, { data: 0 }), ku = Ge(gc), wc = {
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
  var _c = x({}, Kt, { key: function(e) {
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
  } }), Cc = Ge(_c), xc = x({}, Dr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Eu = Ge(xc), Nc = x({}, Kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ro }), Pc = Ge(Nc), zc = x({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lc = Ge(zc), Tc = x({}, Dr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rc = Ge(Tc), Ic = [9, 13, 27, 32], lo = ne && "CompositionEvent" in window, Xt = null;
  ne && "documentMode" in document && (Xt = document.documentMode);
  var Oc = ne && "TextEvent" in window && !Xt, _u = ne && (!lo || Xt && 8 < Xt && 11 >= Xt), Cu = " ", xu = !1;
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
  if (ne) {
    var oo;
    if (ne) {
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
  var cn = typeof Object.is == "function" ? Object.is : Hc;
  function Zt(e, n) {
    if (cn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!H.call(n, l) || !cn(e[l], n[l])) return !1;
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
  var Qc = ne && "documentMode" in document && 11 >= document.documentMode, mt = null, so = null, Jt = null, ao = !1;
  function Uu(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ao || mt == null || mt !== Sr(r) || (r = mt, "selectionStart" in r && uo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Ar(so, "onSelect"), 0 < r.length && (n = new bl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = mt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var ht = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, co = {}, $u = {};
  ne && ($u = document.createElement("div").style, "AnimationEvent" in window || (delete ht.animationend.animation, delete ht.animationiteration.animation, delete ht.animationstart.animation), "TransitionEvent" in window || delete ht.transitionend.transition);
  function $r(e) {
    if (co[e]) return co[e];
    if (!ht[e]) return e;
    var n = ht[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in $u) return co[e] = n[t];
    return e;
  }
  var Vu = $r("animationend"), Au = $r("animationiteration"), Bu = $r("animationstart"), Hu = $r("transitionend"), Wu = /* @__PURE__ */ new Map(), Qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Mn(e, n) {
    Wu.set(e, n), le(n, [e]);
  }
  for (var fo = 0; fo < Qu.length; fo++) {
    var po = Qu[fo], Kc = po.toLowerCase(), Yc = po[0].toUpperCase() + po.slice(1);
    Mn(Kc, "on" + Yc);
  }
  Mn(Vu, "onAnimationEnd"), Mn(Au, "onAnimationIteration"), Mn(Bu, "onAnimationStart"), Mn("dblclick", "onDoubleClick"), Mn("focusin", "onFocus"), Mn("focusout", "onBlur"), Mn(Hu, "onTransitionEnd"), Q("onMouseEnter", ["mouseout", "mouseover"]), Q("onMouseLeave", ["mouseout", "mouseover"]), Q("onPointerEnter", ["pointerout", "pointerover"]), Q("onPointerLeave", ["pointerout", "pointerover"]), le("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), le("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), le("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), le("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), le("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), le("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
  function ie(e, n) {
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
      e[Vr] = !0, de.forEach(function(t) {
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
      var p = o, g = $l(t), w = [];
      e: {
        var v = Wu.get(e);
        if (v !== void 0) {
          var E = bl, N = e;
          switch (e) {
            case "keypress":
              if (jr(t) === 0) break e;
            case "keydown":
            case "keyup":
              E = Cc;
              break;
            case "focusin":
              N = "focus", E = to;
              break;
            case "focusout":
              N = "blur", E = to;
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
          var P = (n & 4) !== 0, _e = !P && e === "scroll", f = P ? v !== null ? v + "Capture" : null : v;
          P = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var S = d.stateNode;
            if (d.tag === 5 && S !== null && (d = S, f !== null && (S = Dt(a, f), S != null && P.push(nr(a, S, d)))), _e) break;
            a = a.return;
          }
          0 < P.length && (v = new E(v, N, null, t, g), w.push({ event: v, listeners: P }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", v && t !== Ul && (N = t.relatedTarget || t.fromElement) && (Gn(N) || N[En])) break e;
          if ((E || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, E ? (N = t.relatedTarget || t.toElement, E = p, N = N ? Gn(N) : null, N !== null && (_e = qn(N), N !== _e || N.tag !== 5 && N.tag !== 6) && (N = null)) : (E = null, N = p), E !== N)) {
            if (P = Su, S = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (P = Eu, S = "onPointerLeave", f = "onPointerEnter", a = "pointer"), _e = E == null ? v : gt(E), d = N == null ? v : gt(N), v = new P(S, a + "leave", E, t, g), v.target = _e, v.relatedTarget = d, S = null, Gn(g) === p && (P = new P(f, a + "enter", N, t, g), P.target = d, P.relatedTarget = _e, S = P), _e = S, E && N) n: {
              for (P = E, f = N, a = 0, d = P; d; d = vt(d)) a++;
              for (d = 0, S = f; S; S = vt(S)) d++;
              for (; 0 < a - d; ) P = vt(P), a--;
              for (; 0 < d - a; ) f = vt(f), d--;
              for (; a--; ) {
                if (P === f || f !== null && P === f.alternate) break n;
                P = vt(P), f = vt(f);
              }
              P = null;
            }
            else P = null;
            E !== null && qu(w, v, E, P, !1), N !== null && _e !== null && qu(w, _e, N, P, !0);
          }
        }
        e: {
          if (v = p ? gt(p) : window, E = v.nodeName && v.nodeName.toLowerCase(), E === "select" || E === "input" && v.type === "file") var z = Uc;
          else if (zu(v)) if (Tu) z = Bc;
          else {
            z = Vc;
            var I = $c;
          }
          else (E = v.nodeName) && E.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (z = Ac);
          if (z && (z = z(e, p))) {
            Lu(w, z, t, g);
            break e;
          }
          I && I(e, v, p), e === "focusout" && (I = v._wrapperState) && I.controlled && v.type === "number" && Ol(v, "number", v.value);
        }
        switch (I = p ? gt(p) : window, e) {
          case "focusin":
            (zu(I) || I.contentEditable === "true") && (mt = I, so = p, Jt = null);
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
            ao = !1, Uu(w, t, g);
            break;
          case "selectionchange":
            if (Qc) break;
          case "keydown":
          case "keyup":
            Uu(w, t, g);
        }
        var O;
        if (lo) e: {
          switch (e) {
            case "compositionstart":
              var U = "onCompositionStart";
              break e;
            case "compositionend":
              U = "onCompositionEnd";
              break e;
            case "compositionupdate":
              U = "onCompositionUpdate";
              break e;
          }
          U = void 0;
        }
        else pt ? Nu(e, t) && (U = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (U = "onCompositionStart");
        U && (_u && t.locale !== "ko" && (pt || U !== "onCompositionStart" ? U === "onCompositionEnd" && pt && (O = gu()) : (jn = g, Jl = "value" in jn ? jn.value : jn.textContent, pt = !0)), I = Ar(p, U), 0 < I.length && (U = new ku(U, e, null, t, g), w.push({ event: U, listeners: I }), O ? U.data = O : (O = Pu(t), O !== null && (U.data = O)))), (O = Oc ? jc(e, t) : Mc(e, t)) && (p = Ar(p, "onBeforeInput"), 0 < p.length && (g = new ku("onBeforeInput", "beforeinput", null, t, g), w.push({ event: g, listeners: p }), g.data = O));
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
  var yt = Math.random().toString(36).slice(2), gn = "__reactFiber$" + yt, tr = "__reactProps$" + yt, En = "__reactContainer$" + yt, ko = "__reactEvents$" + yt, ef = "__reactListeners$" + yt, nf = "__reactHandles$" + yt;
  function Gn(e) {
    var n = e[gn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[En] || t[gn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Ju(e); e !== null; ) {
          if (t = e[gn]) return t;
          e = Ju(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[gn] || e[En], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
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
  function ue(e) {
    0 > wt || (e.current = Eo[wt], Eo[wt] = null, wt--);
  }
  function re(e, n) {
    wt++, Eo[wt] = e.current, e.current = n;
  }
  var Un = {}, je = Fn(Un), Ae = Fn(!1), Zn = Un;
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
    ue(Ae), ue(je);
  }
  function bu(e, n, t) {
    if (je.current !== Un) throw Error(m(168));
    re(je, n), re(Ae, t);
  }
  function es(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, te(e) || "Unknown", l));
    return x({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Un, Zn = je.current, re(je, e), re(Ae, Ae.current), !0;
  }
  function ns(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = es(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, ue(Ae), ue(je), re(je, e)) : ue(Ae), re(Ae, t);
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
      var e = 0, n = ee;
      try {
        var t = _n;
        for (ee = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        _n = null, Yr = !1;
      } catch (l) {
        throw _n !== null && (_n = _n.slice(e + 1)), lu(Wl, $n), l;
      } finally {
        ee = n, _o = !1;
      }
    }
    return null;
  }
  var kt = [], Et = 0, Xr = null, qr = 0, nn = [], tn = 0, Jn = null, Cn = 1, xn = "";
  function bn(e, n) {
    kt[Et++] = qr, kt[Et++] = Xr, Xr = e, qr = n;
  }
  function rs(e, n, t) {
    nn[tn++] = Cn, nn[tn++] = xn, nn[tn++] = Jn, Jn = e;
    var r = Cn;
    e = xn;
    var l = 32 - an(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - an(n) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Cn = 1 << 32 - an(n) + l | t << l | r, xn = o + e;
    } else Cn = 1 << o | t << l | r, xn = e;
  }
  function Co(e) {
    e.return !== null && (bn(e, 1), rs(e, 1, 0));
  }
  function xo(e) {
    for (; e === Xr; ) Xr = kt[--Et], kt[Et] = null, qr = kt[--Et], kt[Et] = null;
    for (; e === Jn; ) Jn = nn[--tn], nn[tn] = null, xn = nn[--tn], nn[tn] = null, Cn = nn[--tn], nn[tn] = null;
  }
  var Ze = null, Je = null, fe = !1, fn = null;
  function ls(e, n) {
    var t = un(5, null, null, 0);
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
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: Cn, overflow: xn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = un(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ze = e, Je = null, !0) : !1;
      default:
        return !1;
    }
  }
  function No(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Po(e) {
    if (fe) {
      var n = Je;
      if (n) {
        var t = n;
        if (!os(e, n)) {
          if (No(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = Ze;
          n && os(e, n) ? ls(r, t) : (e.flags = e.flags & -4097 | 2, fe = !1, Ze = e);
        }
      } else {
        if (No(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, fe = !1, Ze = e;
      }
    }
  }
  function is(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ze = e;
  }
  function Gr(e) {
    if (e !== Ze) return !1;
    if (!fe) return is(e), fe = !0, !1;
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
    Je = Ze = null, fe = !1;
  }
  function zo(e) {
    fn === null ? fn = [e] : fn.push(e);
  }
  var rf = L.ReactCurrentBatchConfig;
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
      var z = d.type;
      return z === J ? g(f, a, d.props.children, S, d.key) : a !== null && (a.elementType === z || typeof z == "object" && z !== null && z.$$typeof === Ve && ss(z) === a.type) ? (S = l(a, d.props), S.ref = lr(f, a, d), S.return = f, S) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, S);
    }
    function p(f, a, d, S) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Si(d, f.mode, S), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function g(f, a, d, S, z) {
      return a === null || a.tag !== 7 ? (a = ut(d, f.mode, S, z), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function w(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = wi("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case j:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = lr(f, null, a), d.return = f, d;
          case M:
            return a = Si(a, f.mode, d), a.return = f, a;
          case Ve:
            var S = a._init;
            return w(f, S(a._payload), d);
        }
        if (Ot(a) || D(a)) return a = ut(a, f.mode, d, null), a.return = f, a;
        Zr(f, a);
      }
      return null;
    }
    function v(f, a, d, S) {
      var z = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return z !== null ? null : u(f, a, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case j:
            return d.key === z ? s(f, a, d, S) : null;
          case M:
            return d.key === z ? p(f, a, d, S) : null;
          case Ve:
            return z = d._init, v(
              f,
              a,
              z(d._payload),
              S
            );
        }
        if (Ot(d) || D(d)) return z !== null ? null : g(f, a, d, S, null);
        Zr(f, d);
      }
      return null;
    }
    function E(f, a, d, S, z) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(d) || null, u(a, f, "" + S, z);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case j:
            return f = f.get(S.key === null ? d : S.key) || null, s(a, f, S, z);
          case M:
            return f = f.get(S.key === null ? d : S.key) || null, p(a, f, S, z);
          case Ve:
            var I = S._init;
            return E(f, a, d, I(S._payload), z);
        }
        if (Ot(S) || D(S)) return f = f.get(d) || null, g(a, f, S, z, null);
        Zr(a, S);
      }
      return null;
    }
    function N(f, a, d, S) {
      for (var z = null, I = null, O = a, U = a = 0, Te = null; O !== null && U < d.length; U++) {
        O.index > U ? (Te = O, O = null) : Te = O.sibling;
        var G = v(f, O, d[U], S);
        if (G === null) {
          O === null && (O = Te);
          break;
        }
        e && O && G.alternate === null && n(f, O), a = o(G, a, U), I === null ? z = G : I.sibling = G, I = G, O = Te;
      }
      if (U === d.length) return t(f, O), fe && bn(f, U), z;
      if (O === null) {
        for (; U < d.length; U++) O = w(f, d[U], S), O !== null && (a = o(O, a, U), I === null ? z = O : I.sibling = O, I = O);
        return fe && bn(f, U), z;
      }
      for (O = r(f, O); U < d.length; U++) Te = E(O, f, U, d[U], S), Te !== null && (e && Te.alternate !== null && O.delete(Te.key === null ? U : Te.key), a = o(Te, a, U), I === null ? z = Te : I.sibling = Te, I = Te);
      return e && O.forEach(function(Xn) {
        return n(f, Xn);
      }), fe && bn(f, U), z;
    }
    function P(f, a, d, S) {
      var z = D(d);
      if (typeof z != "function") throw Error(m(150));
      if (d = z.call(d), d == null) throw Error(m(151));
      for (var I = z = null, O = a, U = a = 0, Te = null, G = d.next(); O !== null && !G.done; U++, G = d.next()) {
        O.index > U ? (Te = O, O = null) : Te = O.sibling;
        var Xn = v(f, O, G.value, S);
        if (Xn === null) {
          O === null && (O = Te);
          break;
        }
        e && O && Xn.alternate === null && n(f, O), a = o(Xn, a, U), I === null ? z = Xn : I.sibling = Xn, I = Xn, O = Te;
      }
      if (G.done) return t(
        f,
        O
      ), fe && bn(f, U), z;
      if (O === null) {
        for (; !G.done; U++, G = d.next()) G = w(f, G.value, S), G !== null && (a = o(G, a, U), I === null ? z = G : I.sibling = G, I = G);
        return fe && bn(f, U), z;
      }
      for (O = r(f, O); !G.done; U++, G = d.next()) G = E(O, f, U, G.value, S), G !== null && (e && G.alternate !== null && O.delete(G.key === null ? U : G.key), a = o(G, a, U), I === null ? z = G : I.sibling = G, I = G);
      return e && O.forEach(function(Df) {
        return n(f, Df);
      }), fe && bn(f, U), z;
    }
    function _e(f, a, d, S) {
      if (typeof d == "object" && d !== null && d.type === J && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case j:
            e: {
              for (var z = d.key, I = a; I !== null; ) {
                if (I.key === z) {
                  if (z = d.type, z === J) {
                    if (I.tag === 7) {
                      t(f, I.sibling), a = l(I, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (I.elementType === z || typeof z == "object" && z !== null && z.$$typeof === Ve && ss(z) === I.type) {
                    t(f, I.sibling), a = l(I, d.props), a.ref = lr(f, I, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, I);
                  break;
                } else n(f, I);
                I = I.sibling;
              }
              d.type === J ? (a = ut(d.props.children, f.mode, S, d.key), a.return = f, f = a) : (S = kl(d.type, d.key, d.props, null, f.mode, S), S.ref = lr(f, a, d), S.return = f, f = S);
            }
            return i(f);
          case M:
            e: {
              for (I = d.key; a !== null; ) {
                if (a.key === I) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
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
          case Ve:
            return I = d._init, _e(f, a, I(d._payload), S);
        }
        if (Ot(d)) return N(f, a, d, S);
        if (D(d)) return P(f, a, d, S);
        Zr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = wi(d, f.mode, S), a.return = f, f = a), i(f)) : t(f, a);
    }
    return _e;
  }
  var Ct = as(!0), cs = as(!1), Jr = Fn(null), br = null, xt = null, Lo = null;
  function To() {
    Lo = xt = br = null;
  }
  function Ro(e) {
    var n = Jr.current;
    ue(Jr), e._currentValue = n;
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
  function rn(e) {
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
  var Vn = !1;
  function jo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ds(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Pn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function An(e, n, t) {
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
    Vn = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, p = s.next;
      s.next = null, i === null ? o = p : i.next = p, i = s;
      var g = e.alternate;
      g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== i && (u === null ? g.firstBaseUpdate = p : u.next = p, g.lastBaseUpdate = s));
    }
    if (o !== null) {
      var w = l.baseState;
      i = 0, g = p = s = null, u = o;
      do {
        var v = u.lane, E = u.eventTime;
        if ((r & v) === v) {
          g !== null && (g = g.next = {
            eventTime: E,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var N = e, P = u;
            switch (v = n, E = t, P.tag) {
              case 1:
                if (N = P.payload, typeof N == "function") {
                  w = N.call(E, w, v);
                  break e;
                }
                w = N;
                break e;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = P.payload, v = typeof N == "function" ? N.call(E, w, v) : N, v == null) break e;
                w = x({}, w, v);
                break e;
              case 2:
                Vn = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [u] : v.push(u));
        } else E = { eventTime: E, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (p = g = E, s = w) : g = g.next = E, i |= v;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          v = u, u = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (!0);
      if (g === null && (s = w), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = g, n = l.shared.interleaved, n !== null) {
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
  var or = {}, wn = Fn(or), ir = Fn(or), ur = Fn(or);
  function nt(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Mo(e, n) {
    switch (re(ur, n), re(ir, e), re(wn, or), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ml(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ml(n, e);
    }
    ue(wn), re(wn, n);
  }
  function Pt() {
    ue(wn), ue(ir), ue(ur);
  }
  function hs(e) {
    nt(ur.current);
    var n = nt(wn.current), t = Ml(n, e.type);
    n !== t && (re(ir, e), re(wn, t));
  }
  function Do(e) {
    ir.current === e && (ue(wn), ue(ir));
  }
  var he = Fn(0);
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
  var rl = L.ReactCurrentDispatcher, $o = L.ReactCurrentBatchConfig, tt = 0, ve = null, xe = null, ze = null, ll = !1, sr = !1, ar = 0, lf = 0;
  function Me() {
    throw Error(m(321));
  }
  function Vo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!cn(e[t], n[t])) return !1;
    return !0;
  }
  function Ao(e, n, t, r, l, o) {
    if (tt = o, ve = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, rl.current = e === null || e.memoizedState === null ? af : cf, e = t(r, l), sr) {
      o = 0;
      do {
        if (sr = !1, ar = 0, 25 <= o) throw Error(m(301));
        o += 1, ze = xe = null, n.updateQueue = null, rl.current = ff, e = t(r, l);
      } while (sr);
    }
    if (rl.current = ul, n = xe !== null && xe.next !== null, tt = 0, ze = xe = ve = null, ll = !1, n) throw Error(m(300));
    return e;
  }
  function Bo() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function Sn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ze === null ? ve.memoizedState = ze = e : ze = ze.next = e, ze;
  }
  function ln() {
    if (xe === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var n = ze === null ? ve.memoizedState : ze.next;
    if (n !== null) ze = n, xe = e;
    else {
      if (e === null) throw Error(m(310));
      xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, ze === null ? ve.memoizedState = ze = e : ze = ze.next = e;
    }
    return ze;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = ln(), t = n.queue;
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
        var g = p.lane;
        if ((tt & g) === g) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var w = {
            lane: g,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (u = s = w, i = r) : s = s.next = w, ve.lanes |= g, rt |= g;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? i = r : s.next = u, cn(r, n.memoizedState) || (He = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, ve.lanes |= o, rt |= o, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Wo(e) {
    var n = ln(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      cn(o, n.memoizedState) || (He = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function vs() {
  }
  function ys(e, n) {
    var t = ve, r = ln(), l = n(), o = !cn(r.memoizedState, l);
    if (o && (r.memoizedState = l, He = !0), r = r.queue, Qo(Ss.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ze !== null && ze.memoizedState.tag & 1) {
      if (t.flags |= 2048, fr(9, ws.bind(null, t, r, l, n), void 0, null), Le === null) throw Error(m(349));
      tt & 30 || gs(t, n, l);
    }
    return l;
  }
  function gs(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ve.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ve.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
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
      return !cn(e, t);
    } catch {
      return !0;
    }
  }
  function Es(e) {
    var n = Nn(e, 1);
    n !== null && hn(n, e, 1, -1);
  }
  function _s(e) {
    var n = Sn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, n.queue = e, e = e.dispatch = sf.bind(null, ve, e), [n.memoizedState, e];
  }
  function fr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ve.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ve.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function Cs() {
    return ln().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = Sn();
    ve.flags |= e, l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function il(e, n, t, r) {
    var l = ln();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (xe !== null) {
      var i = xe.memoizedState;
      if (o = i.destroy, r !== null && Vo(r, i.deps)) {
        l.memoizedState = fr(n, t, o, r);
        return;
      }
    }
    ve.flags |= e, l.memoizedState = fr(1 | n, t, o, r);
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
    var t = ln();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Rs(e, n) {
    var t = ln();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Is(e, n, t) {
    return tt & 21 ? (cn(t, n) || (t = su(), ve.lanes |= t, rt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = t);
  }
  function of(e, n) {
    var t = ee;
    ee = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = $o.transition;
    $o.transition = {};
    try {
      e(!1), n();
    } finally {
      ee = t, $o.transition = r;
    }
  }
  function Os() {
    return ln().memoizedState;
  }
  function uf(e, n, t) {
    var r = Qn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, js(e)) Ms(n, t);
    else if (t = fs(e, n, t, r), t !== null) {
      var l = $e();
      hn(t, e, r, l), Ds(t, n, r);
    }
  }
  function sf(e, n, t) {
    var r = Qn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (js(e)) Ms(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var i = n.lastRenderedState, u = o(i, t);
        if (l.hasEagerState = !0, l.eagerState = u, cn(u, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Oo(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = fs(e, n, l, r), t !== null && (l = $e(), hn(t, e, r, l), Ds(t, n, r));
    }
  }
  function js(e) {
    var n = e.alternate;
    return e === ve || n !== null && n === ve;
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
  var ul = { readContext: rn, useCallback: Me, useContext: Me, useEffect: Me, useImperativeHandle: Me, useInsertionEffect: Me, useLayoutEffect: Me, useMemo: Me, useReducer: Me, useRef: Me, useState: Me, useDebugValue: Me, useDeferredValue: Me, useTransition: Me, useMutableSource: Me, useSyncExternalStore: Me, useId: Me, unstable_isNewReconciler: !1 }, af = { readContext: rn, useCallback: function(e, n) {
    return Sn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: rn, useEffect: xs, useImperativeHandle: function(e, n, t) {
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
    var t = Sn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = Sn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = uf.bind(null, ve, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = Sn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: _s, useDebugValue: Ko, useDeferredValue: function(e) {
    return Sn().memoizedState = e;
  }, useTransition: function() {
    var e = _s(!1), n = e[0];
    return e = of.bind(null, e[1]), Sn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ve, l = Sn();
    if (fe) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), Le === null) throw Error(m(349));
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
    var e = Sn(), n = Le.identifierPrefix;
    if (fe) {
      var t = xn, r = Cn;
      t = (r & ~(1 << 32 - an(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ar++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = lf++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, cf = {
    readContext: rn,
    useCallback: Ts,
    useContext: rn,
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
      var n = ln();
      return Is(n, xe.memoizedState, e);
    },
    useTransition: function() {
      var e = Ho(cr)[0], n = ln().memoizedState;
      return [e, n];
    },
    useMutableSource: vs,
    useSyncExternalStore: ys,
    useId: Os,
    unstable_isNewReconciler: !1
  }, ff = { readContext: rn, useCallback: Ts, useContext: rn, useEffect: Qo, useImperativeHandle: Ls, useInsertionEffect: Ns, useLayoutEffect: Ps, useMemo: Rs, useReducer: Wo, useRef: Cs, useState: function() {
    return Wo(cr);
  }, useDebugValue: Ko, useDeferredValue: function(e) {
    var n = ln();
    return xe === null ? n.memoizedState = e : Is(n, xe.memoizedState, e);
  }, useTransition: function() {
    var e = Wo(cr)[0], n = ln().memoizedState;
    return [e, n];
  }, useMutableSource: vs, useSyncExternalStore: ys, useId: Os, unstable_isNewReconciler: !1 };
  function dn(e, n) {
    if (e && e.defaultProps) {
      n = x({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Yo(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : x({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = $e(), l = Qn(e), o = Pn(r, l);
    o.payload = n, t != null && (o.callback = t), n = An(e, o, l), n !== null && (hn(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = $e(), l = Qn(e), o = Pn(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = An(e, o, l), n !== null && (hn(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = $e(), r = Qn(e), l = Pn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = An(e, l, r), n !== null && (hn(n, e, r, t), el(n, e, r));
  } };
  function Fs(e, n, t, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, o) : !0;
  }
  function Us(e, n, t) {
    var r = !1, l = Un, o = n.contextType;
    return typeof o == "object" && o !== null ? o = rn(o) : (l = Be(n) ? Zn : je.current, r = n.contextTypes, o = (r = r != null) ? St(e, l) : Un), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function $s(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Xo(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, jo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = rn(o) : (o = Be(n) ? Zn : je.current, l.context = St(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Yo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zt(e, n) {
    try {
      var t = "", r = n;
      do
        t += X(r), r = r.return;
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
    t = Pn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, fi = r), Go(e, n);
    }, t;
  }
  function As(e, n, t) {
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
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Pn(-1, 1), n.tag = 2, An(t, n, 1))), t.lanes |= 1), e);
  }
  var pf = L.ReactCurrentOwner, He = !1;
  function Ue(e, n, t, r) {
    n.child = e === null ? cs(n, null, t, r) : Ct(n, e.child, t, r);
  }
  function Qs(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return Nt(n, l), r = Ao(e, n, t, r, o, l), t = Bo(), e !== null && !He ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, zn(e, n, l)) : (fe && t && Co(n), n.flags |= 1, Ue(e, n, r, l), n.child);
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
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(Tt, be), be |= t;
    else {
      if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, re(Tt, be), be |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, re(Tt, be), be |= r;
    }
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, re(Tt, be), be |= r;
    return Ue(e, n, l, t), n.child;
  }
  function qs(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Zo(e, n, t, r, l) {
    var o = Be(t) ? Zn : je.current;
    return o = St(n, o), Nt(n, l), t = Ao(e, n, t, r, o, l), r = Bo(), e !== null && !He ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, zn(e, n, l)) : (fe && r && Co(n), n.flags |= 1, Ue(e, n, t, l), n.child);
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
      typeof p == "object" && p !== null ? p = rn(p) : (p = Be(t) ? Zn : je.current, p = St(n, p));
      var g = t.getDerivedStateFromProps, w = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== p) && $s(n, i, r, p), Vn = !1;
      var v = n.memoizedState;
      i.state = v, nl(n, r, i, l), s = n.memoizedState, u !== r || v !== s || Ae.current || Vn ? (typeof g == "function" && (Yo(n, t, g, r), s = n.memoizedState), (u = Vn || Fs(n, t, u, r, v, s, p)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, ds(e, n), u = n.memoizedProps, p = n.type === n.elementType ? u : dn(n.type, u), i.props = p, w = n.pendingProps, v = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = rn(s) : (s = Be(t) ? Zn : je.current, s = St(n, s));
      var E = t.getDerivedStateFromProps;
      (g = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || v !== s) && $s(n, i, r, s), Vn = !1, v = n.memoizedState, i.state = v, nl(n, r, i, l);
      var N = n.memoizedState;
      u !== w || v !== N || Ae.current || Vn ? (typeof E == "function" && (Yo(n, t, E, r), N = n.memoizedState), (p = Vn || Fs(n, t, p, r, v, N, s) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, N, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = N), i.props = r, i.state = N, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Jo(e, n, t, r, o, l);
  }
  function Jo(e, n, t, r, l, o) {
    qs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && ns(n, t, !1), zn(e, n, o);
    r = n.stateNode, pf.current = n;
    var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = Ct(n, e.child, null, o), n.child = Ct(n, null, u, o)) : Ue(e, n, u, o), n.memoizedState = r.state, l && ns(n, t, !0), n.child;
  }
  function Zs(e) {
    var n = e.stateNode;
    n.pendingContext ? bu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && bu(e, n.context, !1), Mo(e, n.containerInfo);
  }
  function Js(e, n, t, r, l) {
    return _t(), zo(l), n.flags |= 256, Ue(e, n, t, r), n.child;
  }
  var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function bs(e, n, t) {
    var r = n.pendingProps, l = he.current, o = !1, i = (n.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), re(he, l & 1), e === null)
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
      if (r = Le, r !== null) {
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Nn(e, l), hn(r, e, l, -1));
      }
      return yi(), r = qo(Error(m(421))), al(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Pf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Je = Dn(l.nextSibling), Ze = n, fe = !0, fn = null, e !== null && (nn[tn++] = Cn, nn[tn++] = xn, nn[tn++] = Jn, Cn = e.id, xn = e.overflow, Jn = n), n = ni(n, r.children), n.flags |= 4096, n);
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
    if (Ue(e, n, r.children, t), r = he.current, r & 2) r = r & 1 | 2, n.flags |= 128;
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
    if (re(he, r), !(n.mode & 1)) n.memoizedState = null;
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
        re(Jr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (re(he, he.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? bs(e, n, t) : (re(he, he.current & 1), e = zn(e, n, t), e !== null ? e.sibling : null);
        re(he, he.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return na(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), re(he, he.current), r) break;
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
      e = n.stateNode, nt(wn.current);
      var o = null;
      switch (t) {
        case "input":
          l = Rl(e, l), r = Rl(e, r), o = [];
          break;
        case "select":
          l = x({}, l, { value: void 0 }), r = x({}, r, { value: void 0 }), o = [];
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
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && ($.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (u = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== u && (s != null || u != null)) if (p === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
          for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
        } else t || (o || (o = []), o.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && ($.hasOwnProperty(p) ? (s != null && p === "onScroll" && ie("scroll", e), o || u === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, la = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function dr(e, n) {
    if (!fe) switch (e.tailMode) {
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
  function De(e) {
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
        return De(n), null;
      case 1:
        return Be(n.type) && Qr(), De(n), null;
      case 3:
        return r = n.stateNode, Pt(), ue(Ae), ue(je), Uo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, fn !== null && (mi(fn), fn = null))), ri(e, n), De(n), null;
      case 5:
        Do(n);
        var l = nt(ur.current);
        if (t = n.type, e !== null && n.stateNode != null) ra(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return De(n), null;
          }
          if (e = nt(wn.current), Gr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[gn] = n, r[tr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                ie("cancel", r), ie("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++) ie(bt[l], r);
                break;
              case "source":
                ie("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ie(
                  "error",
                  r
                ), ie("load", r);
                break;
              case "details":
                ie("toggle", r);
                break;
              case "input":
                Ui(r, o), ie("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ie("invalid", r);
                break;
              case "textarea":
                Ai(r, o), ie("invalid", r);
            }
            Dl(t, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Br(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : $.hasOwnProperty(i) && u != null && i === "onScroll" && ie("scroll", r);
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
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Wi(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[gn] = n, e[tr] = r, ta(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (i = Fl(t, r), t) {
                case "dialog":
                  ie("cancel", e), ie("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ie("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++) ie(bt[l], e);
                  l = r;
                  break;
                case "source":
                  ie("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ie(
                    "error",
                    e
                  ), ie("load", e), l = r;
                  break;
                case "details":
                  ie("toggle", e), l = r;
                  break;
                case "input":
                  Ui(e, r), l = Rl(e, r), ie("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = x({}, r, { value: void 0 }), ie("invalid", e);
                  break;
                case "textarea":
                  Ai(e, r), l = jl(e, r), ie("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(t, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Yi(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Qi(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && jt(e, s) : typeof s == "number" && jt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && ($.hasOwnProperty(o) ? s != null && o === "onScroll" && ie("scroll", e) : s != null && _(e, o, s, i));
              }
              switch (t) {
                case "input":
                  wr(e), Vi(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Hi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + b(r.value));
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
        return De(n), null;
      case 6:
        if (e && n.stateNode != null) la(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = nt(ur.current), nt(wn.current), Gr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[gn] = n, (o = r.nodeValue !== t) && (e = Ze, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            o && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[gn] = n, n.stateNode = r;
        }
        return De(n), null;
      case 13:
        if (ue(he), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (fe && Je !== null && n.mode & 1 && !(n.flags & 128)) us(), _t(), n.flags |= 98560, o = !1;
          else if (o = Gr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(m(317));
              o[gn] = n;
            } else _t(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            De(n), o = !1;
          } else fn !== null && (mi(fn), fn = null), o = !0;
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || he.current & 1 ? Ne === 0 && (Ne = 3) : yi())), n.updateQueue !== null && (n.flags |= 4), De(n), null);
      case 4:
        return Pt(), ri(e, n), e === null && er(n.stateNode.containerInfo), De(n), null;
      case 10:
        return Ro(n.type._context), De(n), null;
      case 17:
        return Be(n.type) && Qr(), De(n), null;
      case 19:
        if (ue(he), o = n.memoizedState, o === null) return De(n), null;
        if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) dr(o, !1);
        else {
          if (Ne !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (i = tl(e), i !== null) {
              for (n.flags |= 128, dr(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return re(he, he.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Ee() > Rt && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = tl(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), dr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !fe) return De(n), null;
          } else 2 * Ee() - o.renderingStartTime > Rt && t !== 1073741824 && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Ee(), n.sibling = null, t = he.current, re(he, r ? t & 1 | 2 : t & 1), n) : (De(n), null);
      case 22:
      case 23:
        return vi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? be & 1073741824 && (De(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : De(n), null;
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
        return Pt(), ue(Ae), ue(je), Uo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Do(n), null;
      case 13:
        if (ue(he), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          _t();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ue(he), null;
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
  var fl = !1, Fe = !1, gf = typeof WeakSet == "function" ? WeakSet : Set, C = null;
  function Lt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      we(e, n, r);
    }
    else t.current = null;
  }
  function li(e, n, t) {
    try {
      t();
    } catch (r) {
      we(e, n, r);
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
          var i = 0, u = -1, s = -1, p = 0, g = 0, w = e, v = null;
          n: for (; ; ) {
            for (var E; w !== t || l !== 0 && w.nodeType !== 3 || (u = i + l), w !== o || r !== 0 && w.nodeType !== 3 || (s = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (E = w.firstChild) !== null; )
              v = w, w = E;
            for (; ; ) {
              if (w === e) break n;
              if (v === t && ++p === l && (u = i), v === o && ++g === r && (s = i), (E = w.nextSibling) !== null) break;
              w = v, v = w.parentNode;
            }
            w = E;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (yo = { focusedElem: e, selectionRange: t }, Rr = !1, C = n; C !== null; ) if (n = C, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, C = e;
    else for (; C !== null; ) {
      n = C;
      try {
        var N = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (N !== null) {
              var P = N.memoizedProps, _e = N.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? P : dn(n.type, P), _e);
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
        we(n, n.return, S);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, C = e;
        break;
      }
      C = n.return;
    }
    return N = oa, oa = !1, N;
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
    n !== null && (e.alternate = null, ia(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[gn], delete n[tr], delete n[ko], delete n[ef], delete n[nf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  var Re = null, pn = !1;
  function Bn(e, n, t) {
    for (t = t.child; t !== null; ) aa(e, n, t), t = t.sibling;
  }
  function aa(e, n, t) {
    if (yn && typeof yn.onCommitFiberUnmount == "function") try {
      yn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Fe || Lt(t, n);
      case 6:
        var r = Re, l = pn;
        Re = null, Bn(e, n, t), Re = r, pn = l, Re !== null && (pn ? (e = Re, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Re.removeChild(t.stateNode));
        break;
      case 18:
        Re !== null && (pn ? (e = Re, t = t.stateNode, e.nodeType === 8 ? So(e.parentNode, t) : e.nodeType === 1 && So(e, t), Qt(e)) : So(Re, t.stateNode));
        break;
      case 4:
        r = Re, l = pn, Re = t.stateNode.containerInfo, pn = !0, Bn(e, n, t), Re = r, pn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Fe && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && li(t, n, i), l = l.next;
          } while (l !== r);
        }
        Bn(e, n, t);
        break;
      case 1:
        if (!Fe && (Lt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          we(t, n, u);
        }
        Bn(e, n, t);
        break;
      case 21:
        Bn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Fe = (r = Fe) || t.memoizedState !== null, Bn(e, n, t), Fe = r) : Bn(e, n, t);
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
  function mn(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, i = n, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              Re = u.stateNode, pn = !1;
              break e;
            case 3:
              Re = u.stateNode.containerInfo, pn = !0;
              break e;
            case 4:
              Re = u.stateNode.containerInfo, pn = !0;
              break e;
          }
          u = u.return;
        }
        if (Re === null) throw Error(m(160));
        aa(o, i, l), Re = null, pn = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        we(l, n, p);
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
        if (mn(n, e), kn(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (P) {
            we(e, e.return, P);
          }
          try {
            pr(5, e, e.return);
          } catch (P) {
            we(e, e.return, P);
          }
        }
        break;
      case 1:
        mn(n, e), kn(e), r & 512 && t !== null && Lt(t, t.return);
        break;
      case 5:
        if (mn(n, e), kn(e), r & 512 && t !== null && Lt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            jt(l, "");
          } catch (P) {
            we(e, e.return, P);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && o.type === "radio" && o.name != null && $i(l, o), Fl(u, i);
            var p = Fl(u, o);
            for (i = 0; i < s.length; i += 2) {
              var g = s[i], w = s[i + 1];
              g === "style" ? Yi(l, w) : g === "dangerouslySetInnerHTML" ? Qi(l, w) : g === "children" ? jt(l, w) : _(l, g, w, p);
            }
            switch (u) {
              case "input":
                Il(l, o);
                break;
              case "textarea":
                Bi(l, o);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null ? st(l, !!o.multiple, E, !1) : v !== !!o.multiple && (o.defaultValue != null ? st(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : st(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[tr] = o;
          } catch (P) {
            we(e, e.return, P);
          }
        }
        break;
      case 6:
        if (mn(n, e), kn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (P) {
            we(e, e.return, P);
          }
        }
        break;
      case 3:
        if (mn(n, e), kn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Qt(n.containerInfo);
        } catch (P) {
          we(e, e.return, P);
        }
        break;
      case 4:
        mn(n, e), kn(e);
        break;
      case 13:
        mn(n, e), kn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ci = Ee())), r & 4 && ca(e);
        break;
      case 22:
        if (g = t !== null && t.memoizedState !== null, e.mode & 1 ? (Fe = (p = Fe) || g, mn(n, e), Fe = p) : mn(n, e), kn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !g && e.mode & 1) for (C = e, g = e.child; g !== null; ) {
            for (w = C = g; C !== null; ) {
              switch (v = C, E = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, v, v.return);
                  break;
                case 1:
                  Lt(v, v.return);
                  var N = v.stateNode;
                  if (typeof N.componentWillUnmount == "function") {
                    r = v, t = v.return;
                    try {
                      n = r, N.props = n.memoizedProps, N.state = n.memoizedState, N.componentWillUnmount();
                    } catch (P) {
                      we(r, t, P);
                    }
                  }
                  break;
                case 5:
                  Lt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ma(w);
                    continue;
                  }
              }
              E !== null ? (E.return = v, C = E) : ma(w);
            }
            g = g.sibling;
          }
          e: for (g = null, w = e; ; ) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  l = w.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = w.stateNode, s = w.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ki("display", i));
                } catch (P) {
                  we(e, e.return, P);
                }
              }
            } else if (w.tag === 6) {
              if (g === null) try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps;
              } catch (P) {
                we(e, e.return, P);
              }
            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
              w.child.return = w, w = w.child;
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              g === w && (g = null), w = w.return;
            }
            g === w && (g = null), w.sibling.return = w.return, w = w.sibling;
          }
        }
        break;
      case 19:
        mn(n, e), kn(e), r & 4 && ca(e);
        break;
      case 21:
        break;
      default:
        mn(
          n,
          e
        ), kn(e);
    }
  }
  function kn(e) {
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
        we(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Sf(e, n, t) {
    C = e, da(e);
  }
  function da(e, n, t) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || Fe;
          u = fl;
          var p = Fe;
          if (fl = i, (Fe = s) && !p) for (C = l; C !== null; ) i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? ha(l) : s !== null ? (s.return = i, C = s) : ha(l);
          for (; o !== null; ) C = o, da(o), o = o.sibling;
          C = l, fl = u, Fe = p;
        }
        pa(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : pa(e);
    }
  }
  function pa(e) {
    for (; C !== null; ) {
      var n = C;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Fe || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !Fe) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : dn(n.type, t.memoizedProps);
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
                  var g = p.memoizedState;
                  if (g !== null) {
                    var w = g.dehydrated;
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
          Fe || n.flags & 512 && oi(n);
        } catch (v) {
          we(n, n.return, v);
        }
      }
      if (n === e) {
        C = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, C = t;
        break;
      }
      C = n.return;
    }
  }
  function ma(e) {
    for (; C !== null; ) {
      var n = C;
      if (n === e) {
        C = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, C = t;
        break;
      }
      C = n.return;
    }
  }
  function ha(e) {
    for (; C !== null; ) {
      var n = C;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              we(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                we(n, l, s);
              }
            }
            var o = n.return;
            try {
              oi(n);
            } catch (s) {
              we(n, o, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              oi(n);
            } catch (s) {
              we(n, i, s);
            }
        }
      } catch (s) {
        we(n, n.return, s);
      }
      if (n === e) {
        C = null;
        break;
      }
      var u = n.sibling;
      if (u !== null) {
        u.return = n.return, C = u;
        break;
      }
      C = n.return;
    }
  }
  var kf = Math.ceil, pl = L.ReactCurrentDispatcher, si = L.ReactCurrentOwner, on = L.ReactCurrentBatchConfig, K = 0, Le = null, Ce = null, Ie = 0, be = 0, Tt = Fn(0), Ne = 0, mr = null, rt = 0, ml = 0, ai = 0, hr = null, We = null, ci = 0, Rt = 1 / 0, Ln = null, hl = !1, fi = null, Hn = null, vl = !1, Wn = null, yl = 0, vr = 0, di = null, gl = -1, wl = 0;
  function $e() {
    return K & 6 ? Ee() : gl !== -1 ? gl : gl = Ee();
  }
  function Qn(e) {
    return e.mode & 1 ? K & 2 && Ie !== 0 ? Ie & -Ie : rf.transition !== null ? (wl === 0 && (wl = su()), wl) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yu(e.type)), e) : 1;
  }
  function hn(e, n, t, r) {
    if (50 < vr) throw vr = 0, di = null, Error(m(185));
    Vt(e, t, r), (!(K & 2) || e !== Le) && (e === Le && (!(K & 2) && (ml |= t), Ne === 4 && Kn(e, Ie)), Qe(e, r), t === 1 && K === 0 && !(n.mode & 1) && (Rt = Ee() + 500, Yr && $n()));
  }
  function Qe(e, n) {
    var t = e.callbackNode;
    rc(e, n);
    var r = zr(e, e === Le ? Ie : 0);
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
    var r = zr(e, e === Le ? Ie : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
    else {
      n = r;
      var l = K;
      K |= 2;
      var o = wa();
      (Le !== e || Ie !== n) && (Ln = null, Rt = Ee() + 500, ot(e, n));
      do
        try {
          Cf();
          break;
        } catch (u) {
          ga(e, u);
        }
      while (!0);
      To(), pl.current = o, K = l, Ce !== null ? n = 0 : (Le = null, Ie = 0, n = Ne);
    }
    if (n !== 0) {
      if (n === 2 && (l = Ql(e), l !== 0 && (r = l, n = pi(e, l))), n === 1) throw t = mr, ot(e, 0), Kn(e, r), Qe(e, Ee()), t;
      if (n === 6) Kn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Ef(l) && (n = Sl(e, r), n === 2 && (o = Ql(e), o !== 0 && (r = o, n = pi(e, o))), n === 1)) throw t = mr, ot(e, 0), Kn(e, r), Qe(e, Ee()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            it(e, We, Ln);
            break;
          case 3:
            if (Kn(e, r), (r & 130023424) === r && (n = ci + 500 - Ee(), 10 < n)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                $e(), e.pingedLanes |= e.suspendedLanes & l;
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
              var i = 31 - an(r);
              o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kf(r / 1960)) - r, 10 < r) {
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
    return Qe(e, Ee()), e.callbackNode === t ? va.bind(null, e) : null;
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
            if (!cn(o(), l)) return !1;
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
      var t = 31 - an(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ya(e) {
    if (K & 6) throw Error(m(327));
    It();
    var n = zr(e, 0);
    if (!(n & 1)) return Qe(e, Ee()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Ql(e);
      r !== 0 && (n = r, t = pi(e, r));
    }
    if (t === 1) throw t = mr, ot(e, 0), Kn(e, n), Qe(e, Ee()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, it(e, We, Ln), Qe(e, Ee()), null;
  }
  function hi(e, n) {
    var t = K;
    K |= 1;
    try {
      return e(n);
    } finally {
      K = t, K === 0 && (Rt = Ee() + 500, Yr && $n());
    }
  }
  function lt(e) {
    Wn !== null && Wn.tag === 0 && !(K & 6) && It();
    var n = K;
    K |= 1;
    var t = on.transition, r = ee;
    try {
      if (on.transition = null, ee = 1, e) return e();
    } finally {
      ee = r, on.transition = t, K = n, !(K & 6) && $n();
    }
  }
  function vi() {
    be = Tt.current, ue(Tt);
  }
  function ot(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Zc(t)), Ce !== null) for (t = Ce.return; t !== null; ) {
      var r = t;
      switch (xo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Pt(), ue(Ae), ue(je), Uo();
          break;
        case 5:
          Do(r);
          break;
        case 4:
          Pt();
          break;
        case 13:
          ue(he);
          break;
        case 19:
          ue(he);
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
    if (Le = e, Ce = e = Yn(e.current, null), Ie = be = n, Ne = 0, mr = null, ai = ml = rt = 0, We = hr = null, et !== null) {
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
      var t = Ce;
      try {
        if (To(), rl.current = ul, ll) {
          for (var r = ve.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (tt = 0, ze = xe = ve = null, sr = !1, ar = 0, si.current = null, t === null || t.return === null) {
          Ne = 1, mr = n, Ce = null;
          break;
        }
        e: {
          var o = e, i = t.return, u = t, s = n;
          if (n = Ie, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, g = u, w = g.tag;
            if (!(g.mode & 1) && (w === 0 || w === 11 || w === 15)) {
              var v = g.alternate;
              v ? (g.updateQueue = v.updateQueue, g.memoizedState = v.memoizedState, g.lanes = v.lanes) : (g.updateQueue = null, g.memoizedState = null);
            }
            var E = Hs(i);
            if (E !== null) {
              E.flags &= -257, Ws(E, i, u, o, n), E.mode & 1 && Bs(o, p, n), n = E, s = p;
              var N = n.updateQueue;
              if (N === null) {
                var P = /* @__PURE__ */ new Set();
                P.add(s), n.updateQueue = P;
              } else N.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Bs(o, p, n), yi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (fe && u.mode & 1) {
            var _e = Hs(i);
            if (_e !== null) {
              !(_e.flags & 65536) && (_e.flags |= 256), Ws(_e, i, u, o, n), zo(zt(s, u));
              break e;
            }
          }
          o = s = zt(s, u), Ne !== 4 && (Ne = 2), hr === null ? hr = [o] : hr.push(o), o = i;
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
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Hn === null || !Hn.has(d)))) {
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
      } catch (z) {
        n = z, Ce === t && t !== null && (Ce = t = t.return);
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
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4), Le === null || !(rt & 268435455) && !(ml & 268435455) || Kn(Le, Ie);
  }
  function Sl(e, n) {
    var t = K;
    K |= 2;
    var r = wa();
    (Le !== e || Ie !== n) && (Ln = null, ot(e, n));
    do
      try {
        _f();
        break;
      } catch (l) {
        ga(e, l);
      }
    while (!0);
    if (To(), K = t, pl.current = r, Ce !== null) throw Error(m(261));
    return Le = null, Ie = 0, Ne;
  }
  function _f() {
    for (; Ce !== null; ) Sa(Ce);
  }
  function Cf() {
    for (; Ce !== null && !Xa(); ) Sa(Ce);
  }
  function Sa(e) {
    var n = Ca(e.alternate, e, be);
    e.memoizedProps = e.pendingProps, n === null ? ka(e) : Ce = n, si.current = null;
  }
  function ka(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = yf(t, n), t !== null) {
          t.flags &= 32767, Ce = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ne = 6, Ce = null;
          return;
        }
      } else if (t = vf(t, n, be), t !== null) {
        Ce = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ce = n;
        return;
      }
      Ce = n = e;
    } while (n !== null);
    Ne === 0 && (Ne = 5);
  }
  function it(e, n, t) {
    var r = ee, l = on.transition;
    try {
      on.transition = null, ee = 1, xf(e, n, t, r);
    } finally {
      on.transition = l, ee = r;
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
    if (lc(e, o), e === Le && (Ce = Le = null, Ie = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, xa(Cr, function() {
      return It(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = on.transition, on.transition = null;
      var i = ee;
      ee = 1;
      var u = K;
      K |= 4, si.current = null, wf(e, t), fa(t, e), Wc(yo), Rr = !!vo, yo = vo = null, e.current = t, Sf(t), qa(), K = u, ee = i, on.transition = o;
    } else e.current = t;
    if (vl && (vl = !1, Wn = e, yl = l), o = e.pendingLanes, o === 0 && (Hn = null), Ja(t.stateNode), Qe(e, Ee()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = fi, fi = null, e;
    return yl & 1 && e.tag !== 0 && It(), o = e.pendingLanes, o & 1 ? e === di ? vr++ : (vr = 0, di = e) : vr = 0, $n(), null;
  }
  function It() {
    if (Wn !== null) {
      var e = au(yl), n = on.transition, t = ee;
      try {
        if (on.transition = null, ee = 16 > e ? 16 : e, Wn === null) var r = !1;
        else {
          if (e = Wn, Wn = null, yl = 0, K & 6) throw Error(m(331));
          var l = K;
          for (K |= 4, C = e.current; C !== null; ) {
            var o = C, i = o.child;
            if (C.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (C = p; C !== null; ) {
                    var g = C;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, g, o);
                    }
                    var w = g.child;
                    if (w !== null) w.return = g, C = w;
                    else for (; C !== null; ) {
                      g = C;
                      var v = g.sibling, E = g.return;
                      if (ia(g), g === p) {
                        C = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = E, C = v;
                        break;
                      }
                      C = E;
                    }
                  }
                }
                var N = o.alternate;
                if (N !== null) {
                  var P = N.child;
                  if (P !== null) {
                    N.child = null;
                    do {
                      var _e = P.sibling;
                      P.sibling = null, P = _e;
                    } while (P !== null);
                  }
                }
                C = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
            else e: for (; C !== null; ) {
              if (o = C, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  pr(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, C = f;
                break e;
              }
              C = o.return;
            }
          }
          var a = e.current;
          for (C = a; C !== null; ) {
            i = C;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) d.return = i, C = d;
            else e: for (i = a; C !== null; ) {
              if (u = C, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, u);
                }
              } catch (z) {
                we(u, u.return, z);
              }
              if (u === i) {
                C = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                S.return = u.return, C = S;
                break e;
              }
              C = u.return;
            }
          }
          if (K = l, $n(), yn && typeof yn.onPostCommitFiberRoot == "function") try {
            yn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ee = t, on.transition = n;
      }
    }
    return !1;
  }
  function Ea(e, n, t) {
    n = zt(t, n), n = Vs(e, n, 1), e = An(e, n, 1), n = $e(), e !== null && (Vt(e, 1, n), Qe(e, n));
  }
  function we(e, n, t) {
    if (e.tag === 3) Ea(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        Ea(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Hn === null || !Hn.has(r))) {
          e = zt(t, e), e = As(n, e, 1), n = An(n, e, 1), e = $e(), n !== null && (Vt(n, 1, e), Qe(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function Nf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = $e(), e.pingedLanes |= e.suspendedLanes & t, Le === e && (Ie & t) === t && (Ne === 4 || Ne === 3 && (Ie & 130023424) === Ie && 500 > Ee() - ci ? ot(e, 0) : ai |= t), Qe(e, n);
  }
  function _a(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = $e();
    e = Nn(e, n), e !== null && (Vt(e, n, t), Qe(e, t));
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
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Ae.current) He = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return He = !1, hf(e, n, t);
      He = !!(e.flags & 131072);
    }
    else He = !1, fe && n.flags & 1048576 && rs(n, qr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = St(n, je.current);
        Nt(n, t), l = Ao(null, n, r, e, l, t);
        var o = Bo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Be(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, jo(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Xo(n, r, e, t), n = Jo(null, n, r, !0, o, t)) : (n.tag = 0, fe && o && Co(n), Ue(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Tf(r), e = dn(r, e), l) {
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
              n = Ks(null, n, r, dn(r.type, e), t);
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
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : dn(r, l), Zo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : dn(r, l), Gs(e, n, r, l, t);
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
          } else for (Je = Dn(n.stateNode.containerInfo.firstChild), Ze = n, fe = !0, fn = null, t = cs(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (_t(), r === l) {
              n = zn(e, n, t);
              break e;
            }
            Ue(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return hs(n), e === null && Po(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, go(r, l) ? i = null : o !== null && go(r, o) && (n.flags |= 32), qs(e, n), Ue(e, n, i, t), n.child;
      case 6:
        return e === null && Po(n), null;
      case 13:
        return bs(e, n, t);
      case 4:
        return Mo(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Ct(n, null, r, t) : Ue(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : dn(r, l), Qs(e, n, r, l, t);
      case 7:
        return Ue(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ue(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ue(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, re(Jr, r._currentValue), r._currentValue = i, o !== null) if (cn(o.value, i)) {
            if (o.children === l.children && !Ae.current) {
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
                      var g = p.pending;
                      g === null ? s.next = s : (s.next = g.next, g.next = s), p.pending = s;
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
          Ue(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Nt(n, t), l = rn(l), r = r(l), n.flags |= 1, Ue(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = dn(r, n.pendingProps), l = dn(r.type, l), Ks(e, n, r, l, t);
      case 15:
        return Ys(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : dn(r, l), cl(e, n), n.tag = 1, Be(r) ? (e = !0, Kr(n)) : e = !1, Nt(n, t), Us(n, r, l), Xo(n, r, l, t), Jo(null, n, r, !0, e, t);
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
  function un(e, n, t, r) {
    return new Lf(e, n, t, r);
  }
  function gi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tf(e) {
    if (typeof e == "function") return gi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ye) return 11;
      if (e === vn) return 14;
    }
    return 2;
  }
  function Yn(e, n) {
    var t = e.alternate;
    return t === null ? (t = un(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") gi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case J:
        return ut(t.children, l, o, n);
      case me:
        i = 8, l |= 8;
        break;
      case oe:
        return e = un(12, t, n, l | 2), e.elementType = oe, e.lanes = o, e;
      case Xe:
        return e = un(13, t, n, l), e.elementType = Xe, e.lanes = o, e;
      case sn:
        return e = un(19, t, n, l), e.elementType = sn, e.lanes = o, e;
      case ge:
        return El(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Oe:
            i = 10;
            break e;
          case en:
            i = 9;
            break e;
          case Ye:
            i = 11;
            break e;
          case vn:
            i = 14;
            break e;
          case Ve:
            i = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = un(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function ut(e, n, t, r) {
    return e = un(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = un(22, e, r, n), e.elementType = ge, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function wi(e, n, t) {
    return e = un(6, e, null, n), e.lanes = t, e;
  }
  function Si(e, n, t) {
    return n = un(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Rf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ki(e, n, t, r, l, o, i, u, s) {
    return e = new Rf(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = un(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jo(o), e;
  }
  function If(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: M, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
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
    return e = ki(t, r, !0, e, l, o, i, u, s), e.context = Na(null), t = e.current, r = $e(), l = Qn(t), o = Pn(r, l), o.callback = n ?? null, An(t, o, l), e.current.lanes = l, Vt(e, l, r), Qe(e, r), e;
  }
  function _l(e, n, t, r) {
    var l = n.current, o = $e(), i = Qn(l);
    return t = Na(t), n.context === null ? n.context = t : n.pendingContext = t, n = Pn(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = An(l, n, i), e !== null && (hn(e, l, i, o), el(e, l, i)), i;
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
          t !== 0 && (Yl(n, t | 1), Qe(n, Ee()), !(K & 6) && (Rt = Ee() + 500, $n()));
        }
        break;
      case 13:
        lt(function() {
          var r = Nn(e, 1);
          if (r !== null) {
            var l = $e();
            hn(r, e, 1, l);
          }
        }), Ei(e, 1);
    }
  }, Xl = function(e) {
    if (e.tag === 13) {
      var n = Nn(e, 134217728);
      if (n !== null) {
        var t = $e();
        hn(n, e, 134217728, t);
      }
      Ei(e, 134217728);
    }
  }, fu = function(e) {
    if (e.tag === 13) {
      var n = Qn(e), t = Nn(e, n);
      if (t !== null) {
        var r = $e();
        hn(t, e, n, r);
      }
      Ei(e, n);
    }
  }, du = function() {
    return ee;
  }, pu = function(e, n) {
    var t = ee;
    try {
      return ee = e, n();
    } finally {
      ee = t;
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
  var jf = { usingClientEntryPoint: !1, Events: [rr, gt, Wr, qi, Gi, hi] }, yr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: L.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = tu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      xr = zl.inject(Mf), yn = zl;
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
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (T) {
        console.error(T);
      }
  }
  return h(), Pi.exports = Hf(), Pi.exports;
}
var $a;
function Qf() {
  if ($a) return Ll;
  $a = 1;
  var h = Wf();
  return Ll.createRoot = h.createRoot, Ll.hydrateRoot = h.hydrateRoot, Ll;
}
var Kf = Qf();
const Yf = /* @__PURE__ */ Ff(Kf), Tl = () => {
  const h = document.getElementById("product-info"), T = JSON.parse((h == null ? void 0 : h.textContent) || "{}");
  return window.shineon = window.shineon || {}, window.shineon.product_info = T, T;
}, Va = () => {
  const h = Tl();
  return Xf(h);
}, Xf = (h) => {
  var T;
  return !h.shop_cf || !((T = h.shop_pt_id_obj) != null && T.custom_fields) ? [] : h.shop_pt_id_obj.custom_fields.map((m) => ({
    ...h.shop_cf[m.key],
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
  const h = document.querySelectorAll('form[action="/cart/add"]');
  return Array.from(h).map((T) => T.getAttribute("id"));
}, Zf = () => (Ti || Oi.variantInputs.forEach((h) => {
  if (h) {
    const T = parseInt(h.value);
    Ti = Mi.product.variants.find((m) => m.id === T);
  }
}), Ti), Jf = (h) => {
  clearTimeout(window.variantChangeTimeout), window.variantChangeTimeout = setTimeout(() => {
    h();
  }, 300);
}, bf = (h) => (Oi.variantInputs.forEach((T) => {
  T.addEventListener("change", h);
}), () => {
  Oi.variantInputs.forEach((T) => {
    T.removeEventListener("change", h);
  });
}), ed = ({ product_cf: h, required: T, formId: m, onBeforeInput: de, onChange: $ }) => {
  const le = (Q, ne) => ({
    type: "text",
    id: Q.id.key,
    name: `properties[${Q.name}]`,
    autoComplete: "off",
    placeholder: Q.placeholder,
    form: ne,
    required: T,
    className: `so-field__input ${Q.class || ""}`,
    minLength: Q.minlength > 0 ? Q.minlength : void 0,
    maxLength: Q.maxlength > 0 ? Q.maxlength : 20,
    onBeforeInput: de,
    onChange: $
  });
  return /* @__PURE__ */ W.jsx("input", { ...le(h, m) });
}, Ri = [
  {
    type: "birthstone"
  },
  {
    type: "heart"
  }
], nd = ({
  formId: h,
  availableAccessories: T,
  currentVariant: m,
  InputField: de,
  selectedAccessories: $,
  setSelectedAccessories: le,
  accessoriesCF: Q
}) => {
  const { state: ne, dispatch: H } = Pe.useContext(Di), se = Tl(), pe = Va(), [Y, Z] = Pe.useState([]), ae = Pe.useMemo(
    () => {
      var _;
      return ((_ = se.variant_metafields[m.id]) == null ? void 0 : _.engravings) || 0;
    },
    [m.id, se.variant_metafields]
  ), Se = Pe.useMemo(
    () => pe.filter(
      (_) => _.field_type === "engraving" && $.some((L) => {
        var j;
        return (j = _.class) == null ? void 0 : j.includes(L.type);
      })
    ),
    [pe, $]
  ), R = (_, L) => {
    if ($.length >= ae) return;
    const j = { type: _, option: L };
    le([...$, j]), ke(!1);
    const M = $.length;
    document.querySelectorAll('form[action="/cart/add"]').forEach((me) => {
      const oe = document.createElement("input");
      oe.type = "hidden", oe.name = `properties[${Q[M].name}]`, oe.value = L, me.appendChild(oe);
    });
  }, F = (_, L) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((J) => {
      const me = J.querySelector(`input[name="properties[${L}]"]`);
      me && me.type === "hidden" && me.remove();
      const oe = J.querySelector(`input[name="properties[${Q[_].name}]"]`);
      oe && oe.remove(), Array.from(J.querySelectorAll('input[name^="properties[Birthstone"]')).forEach((en, Ye) => {
        Ye >= _ && (en.name = `properties[${Q[Ye].name}]`);
      });
    });
    const M = [];
    Se.slice(0, $.length).map((J, me) => {
      const oe = J.name, Oe = document.querySelector(`input[name="properties[${oe}]"]`);
      L !== oe && M.push({
        name: oe,
        value: Oe.value
      });
    }), Z(M), le((J) => J.filter((me, oe) => oe !== _));
  };
  Pe.useEffect(() => bf(() => {
    var M;
    const j = ((M = se.variant_metafields[m.id]) == null ? void 0 : M.engravings) || 0;
    $.length > j && le((J) => J.slice(0, j));
  }), []), Pe.useEffect(() => {
    var L;
    const _ = ((L = se.variant_metafields[m.id]) == null ? void 0 : L.engravings) || 0;
    le((j) => j.slice(0, _));
  }, [m]);
  const [ye, ke] = Pe.useState(!1);
  return Pe.useEffect(() => {
    const _ = document.querySelectorAll('form[action="/cart/add"]');
    Se.slice(0, $.length).map((j, M) => {
      const J = j.name, me = document.querySelector(`input[name="properties[${J}]"]`);
      Y[M] && (me && (me.value = Y[M].value), _.forEach((oe) => {
        const Oe = oe.querySelector(`input[name="properties[${J}]"]`), en = oe.querySelector(
          `input[name="properties[${Y[M].name}]"]`
        );
        en && (Oe == null ? void 0 : Oe.type) === "hidden" && (en.name = `properties[${J}]`);
      }), Z([]));
    });
    const L = (j) => {
      $.length < ae && (j.preventDefault(), ke(!0));
    };
    return _.forEach((j) => {
      const M = j.querySelector('button[type="submit"]');
      M && M.addEventListener("click", L);
    }), () => {
      _.forEach((j) => {
        const M = j.querySelector('button[type="submit"]');
        M && M.removeEventListener("click", L);
      });
    };
  }, [$, ae]), /* @__PURE__ */ W.jsxs("div", { className: "so-accessories", children: [
    T.map((_) => /* @__PURE__ */ W.jsxs(
      "div",
      {
        className: `so-${_.field_type}-container ${ye && $.length < ae ? "so-validation-error" : ""}`,
        children: [
          /* @__PURE__ */ W.jsx("div", { className: "so-counter-wrap", children: /* @__PURE__ */ W.jsxs("span", { children: [
            "Selected: ",
            $.length,
            " of ",
            ae
          ] }) }),
          /* @__PURE__ */ W.jsx("div", { className: "so-options-grid", children: /* @__PURE__ */ W.jsx("ul", { className: "so-accessories-list", children: _.options.map((L) => {
            var j;
            return /* @__PURE__ */ W.jsxs("li", { children: [
              /* @__PURE__ */ W.jsx(
                "input",
                {
                  type: "radio",
                  name: _.name,
                  value: L,
                  required: $.length < ae,
                  style: { position: "absolute", opacity: 0 },
                  checked: $.some((M) => M.option === L),
                  onChange: () => R(_.field_type, L)
                }
              ),
              /* @__PURE__ */ W.jsxs(
                "label",
                {
                  className: "so-accessory-option",
                  onClick: () => R(_.field_type, L),
                  "aria-disabled": $.length >= ae,
                  children: [
                    _.field_type === "birthstone" && /* @__PURE__ */ W.jsx(
                      "div",
                      {
                        className: `so-custom-field-birthstone-circle ${L} no-loop ${(j = _.class) != null && j.includes("engraving") ? "no-loop" : ""}`,
                        children: /* @__PURE__ */ W.jsx("span", { class: "visually-hidden", children: L })
                      }
                    ),
                    /* @__PURE__ */ W.jsx("span", { children: L })
                  ]
                }
              )
            ] }, L);
          }) }) })
        ]
      },
      _.field_type
    )),
    $.length > 0 && /* @__PURE__ */ W.jsx("div", { className: "so-engraving-fields-container", children: Se.slice(0, $.length).map((_, L) => {
      const j = $[L], M = _.name;
      return /* @__PURE__ */ W.jsxs("div", { className: "so-input-with-remove", children: [
        /* @__PURE__ */ W.jsx(
          "button",
          {
            type: "button",
            className: "so-remove-acc",
            onClick: () => F(L, M),
            children: /* @__PURE__ */ W.jsx(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ W.jsx(
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
        /* @__PURE__ */ W.jsx(
          de,
          {
            product_cf: {
              ..._,
              name: M,
              placeholder: `${_.label} ${j.option}`
            },
            required: _.required,
            formId: h,
            dispatch: H,
            index: L,
            selectedAccessories: $,
            setSelectedAccessories: le
          }
        )
      ] });
    }) })
  ] });
}, Di = Pe.createContext(), td = (h, T) => {
  switch (T.type) {
    case "UPDATE_SYMBOL_COUNT":
      return {
        ...h,
        symbolCounts: {
          ...h.symbolCounts,
          [T.payload.id]: T.payload.count
        }
      };
    case "SET_ERROR":
      return {
        ...h,
        showNotification: T.payload.show,
        errorSymbol: T.payload.symbol
      };
    case "RESET_SYMBOL_COUNTS":
      return {
        ...h,
        symbolCounts: {}
      };
    default:
      return h;
  }
}, Ii = Pe.memo(({ product_cf: h, required: T, formId: m, fontPreviewFields: de, currentVariant: $, productInfo: le }) => {
  var ke;
  const { state: Q, dispatch: ne } = Pe.useContext(Di), [H, se] = Pe.useState(""), pe = window.Shopify.locale, Y = ((ke = le.variant_metafields[$.id]) == null ? void 0 : ke.metal) || "silver", Z = (_) => {
    const L = h.pattern;
    L && (new RegExp(L).test(_.data) ? ne({
      type: "SET_ERROR",
      payload: { show: !1, symbol: "" }
    }) : (_.preventDefault(), ne({
      type: "SET_ERROR",
      payload: { show: !0, symbol: _.data }
    })));
  }, ae = (_) => {
    document.querySelectorAll('form[action="/cart/add"]').forEach((j) => {
      let M = j.querySelector(`input[name="${_.name}"]`);
      M || (M = document.createElement("input"), M.type = "hidden", M.name = _.name, j.appendChild(M)), M.value = _.value;
    });
  }, [Se, R] = Pe.useState({}), F = (_) => {
    const L = document.querySelectorAll('.so-hyper input[type="text"]'), j = {};
    L.forEach((M) => {
      M.required && !M.value.length && (j[M.name] = !0);
    }), R(j);
  }, ye = (_) => {
    R((j) => ({
      ...j,
      [_.target.name]: !1
    }));
    const L = _.target.value.charAt(0).toUpperCase() + _.target.value.slice(1);
    _.target.value = L, se(L), ne({
      type: "UPDATE_SYMBOL_COUNT",
      payload: { id: h.id.key, count: _.target.value.length }
    }), ne({
      type: "UPDATE_SYMBOL_COUNT",
      payload: { id: h.id.key, count: _.target.value.length }
    }), Jf(() => {
      ae(_.target);
    });
  };
  return Pe.useEffect(() => {
    const _ = document.querySelectorAll('form[action="/cart/add"]');
    return _.forEach((L) => {
      const j = L.querySelector('button[type="submit"]');
      j && j.addEventListener("click", F);
    }), () => {
      _.forEach((L) => {
        const j = L.querySelector('button[type="submit"]');
        j && j.removeEventListener("click", F);
      });
    };
  }, []), /* @__PURE__ */ W.jsxs("div", { className: `so-field-wrapper ${Se[`properties[${h.name}]`] ? "error" : ""}`, children: [
    /* @__PURE__ */ W.jsx("label", { className: "so-form__label", children: h.name }),
    /* @__PURE__ */ W.jsxs("div", { className: "so-field", children: [
      /* @__PURE__ */ W.jsxs("div", { className: "so-input-counter-w", children: [
        /* @__PURE__ */ W.jsx(
          ed,
          {
            product_cf: h,
            required: T,
            formId: m,
            onBeforeInput: Z,
            onChange: ye
          }
        ),
        !Q.showNotification && /* @__PURE__ */ W.jsxs(
          "span",
          {
            className: `so-counter ${Q.symbolCounts[h.id.key] ? "so-input-filled" : ""}`,
            children: [
              Q.symbolCounts[h.id.key] || 0,
              "/",
              h.maxlength || 20
            ]
          }
        )
      ] }),
      de.length > 0 && /* @__PURE__ */ W.jsx("div", { className: "font-preview-w", "data-metal": Y, children: /* @__PURE__ */ W.jsx("div", { className: `preview ${de[0].class}`, children: /* @__PURE__ */ W.jsx("span", { className: "colored-with-gradient", children: H || h.name }) }) }),
      Q.showNotification && /* @__PURE__ */ W.jsx("span", { className: "so-wrong-input-notification", children: `"${Q.errorSymbol}"${qf[pe].errors.invalid_character}` })
    ] })
  ] });
}), rd = () => {
  var Se;
  const h = Tl(), T = Va(), m = h.shop_info.sectionID ? "product-form-" + h.shop_info.sectionID : Gf(), [de, $] = Pe.useState(Zf()), [le, Q] = Pe.useState([]), [ne, H] = Pe.useReducer(td, {
    symbolCounts: {},
    showNotification: !1,
    errorSymbol: ""
  });
  Pe.useEffect(() => {
    const R = (ke) => {
      $(
        h.product.variants.filter(
          (_) => _.id === parseInt(document.querySelector('[name="id"]').value)
        )[0]
      );
    }, F = h.trigger_selector ? h.trigger_selector : h.variant_id_input, ye = document.querySelectorAll(F);
    return ye.forEach((ke) => ke.addEventListener("change", R)), () => {
      ye.forEach((ke) => ke.removeEventListener("change", R));
    };
  }, []);
  const se = T.filter(
    (R) => R.field_type === "engraving" && R.required && !Ri.some((F) => {
      var ye;
      return (ye = R.class) == null ? void 0 : ye.includes(F.type);
    })
  ), pe = T.filter(
    (R) => R.field_type === "engraving" && !R.required && !Ri.some((F) => {
      var ye;
      return (ye = R.class) == null ? void 0 : ye.includes(F.type);
    })
  ).slice(0, ((Se = h.variant_metafields[de.id]) == null ? void 0 : Se.engravings) || 0), Y = T.filter((R) => Ri.some((F) => R.field_type === F.type)), Z = T.filter((R) => R.field_type === "custom" && R.type != "none"), ae = T.filter(
    (R) => {
      var F;
      return R.field_type === "custom" && ((F = R.slug) == null ? void 0 : F.includes("font-family-preview"));
    }
  );
  return /* @__PURE__ */ W.jsx(Di.Provider, { value: { state: ne, dispatch: H }, children: /* @__PURE__ */ W.jsxs("div", { className: "so-hyper so-tw", children: [
    se.map((R, F) => /* @__PURE__ */ W.jsx(
      Ii,
      {
        product_cf: R,
        required: !0,
        formId: m,
        dispatch: H,
        fontPreviewFields: ae,
        currentVariant: de,
        productInfo: h
      },
      `required-${F}`
    )),
    pe.map((R, F) => /* @__PURE__ */ W.jsx(
      Ii,
      {
        product_cf: R,
        required: !0,
        formId: m,
        dispatch: H,
        currentVariant: de,
        productInfo: h
      },
      `optional-${F}`
    )),
    Y.length > 0 && /* @__PURE__ */ W.jsx(
      nd,
      {
        formId: m,
        availableAccessories: Y,
        currentVariant: de,
        InputField: Ii,
        selectedAccessories: le,
        setSelectedAccessories: Q,
        accessoriesCF: Z,
        productInfo: h
      }
    )
  ] }) });
};
document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("so-hyper");
  h && Yf.createRoot(h).render(
    /* @__PURE__ */ W.jsx(Pe.StrictMode, { children: /* @__PURE__ */ W.jsx(rd, {}) })
  );
});

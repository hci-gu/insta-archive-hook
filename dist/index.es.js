import React, { Fragment, createContext, useContext, useState, useRef, useEffect, useLayoutEffect, useCallback, useId, forwardRef, Children, createElement, useImperativeHandle, useMemo, useReducer, cloneElement } from "react";
import ReactDOM, { createPortal } from "react-dom";
function getDefaultExportFromCjs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var t = React, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, d) {
    var f, h = {}, T = null, p = null;
    d !== void 0 && (T = "" + d), l.key !== void 0 && (T = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (f in l) a.call(l, f) && !o.hasOwnProperty(f) && (h[f] = l[f]);
    if (c && c.defaultProps) for (f in l = c.defaultProps, l) h[f] === void 0 && (h[f] = l[f]);
    return { $$typeof: n, type: c, key: T, ref: p, props: h, _owner: i.current };
  }
  return reactJsxRuntime_production_min.Fragment = s, reactJsxRuntime_production_min.jsx = u, reactJsxRuntime_production_min.jsxs = u, reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var t = React, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), I = Symbol.iterator, E = "@@iterator";
    function _(A) {
      if (A === null || typeof A != "object")
        return null;
      var M = I && A[I] || A[E];
      return typeof M == "function" ? M : null;
    }
    var m = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(A) {
      {
        for (var M = arguments.length, V = new Array(M > 1 ? M - 1 : 0), ie = 1; ie < M; ie++)
          V[ie - 1] = arguments[ie];
        S("error", A, V);
      }
    }
    function S(A, M, V) {
      {
        var ie = m.ReactDebugCurrentFrame, he = ie.getStackAddendum();
        he !== "" && (M += "%s", V = V.concat([he]));
        var Ee = V.map(function(le) {
          return String(le);
        });
        Ee.unshift("Warning: " + M), Function.prototype.apply.call(console[A], console, Ee);
      }
    }
    var C = !1, g = !1, D = !1, N = !1, R = !1, P;
    P = Symbol.for("react.module.reference");
    function v(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === a || A === o || R || A === i || A === d || A === f || N || A === p || C || g || D || typeof A == "object" && A !== null && (A.$$typeof === T || A.$$typeof === h || A.$$typeof === u || A.$$typeof === c || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === P || A.getModuleId !== void 0));
    }
    function x(A, M, V) {
      var ie = A.displayName;
      if (ie)
        return ie;
      var he = M.displayName || M.name || "";
      return he !== "" ? V + "(" + he + ")" : V;
    }
    function Y(A) {
      return A.displayName || "Context";
    }
    function w(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case c:
            var M = A;
            return Y(M) + ".Consumer";
          case u:
            var V = A;
            return Y(V._context) + ".Provider";
          case l:
            return x(A, A.render, "ForwardRef");
          case h:
            var ie = A.displayName || null;
            return ie !== null ? ie : w(A.type) || "Memo";
          case T: {
            var he = A, Ee = he._payload, le = he._init;
            try {
              return w(le(Ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, K = 0, U, J, ee, _e, y, F, H;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function Q() {
      {
        if (K === 0) {
          U = console.log, J = console.info, ee = console.warn, _e = console.error, y = console.group, F = console.groupCollapsed, H = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        K++;
      }
    }
    function z() {
      {
        if (K--, K === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, A, {
              value: U
            }),
            info: q({}, A, {
              value: J
            }),
            warn: q({}, A, {
              value: ee
            }),
            error: q({}, A, {
              value: _e
            }),
            group: q({}, A, {
              value: y
            }),
            groupCollapsed: q({}, A, {
              value: F
            }),
            groupEnd: q({}, A, {
              value: H
            })
          });
        }
        K < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = m.ReactCurrentDispatcher, te;
    function re(A, M, V) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (he) {
            var ie = he.stack.trim().match(/\n( *(at )?)/);
            te = ie && ie[1] || "";
          }
        return `
` + te + A;
      }
    }
    var ae = !1, ne;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new de();
    }
    function G(A, M) {
      if (!A || ae)
        return "";
      {
        var V = ne.get(A);
        if (V !== void 0)
          return V;
      }
      var ie;
      ae = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ee;
      Ee = X.current, X.current = null, Q();
      try {
        if (M) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (Re) {
              ie = Re;
            }
            Reflect.construct(A, [], le);
          } else {
            try {
              le.call();
            } catch (Re) {
              ie = Re;
            }
            A.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            ie = Re;
          }
          A();
        }
      } catch (Re) {
        if (Re && ie && typeof Re.stack == "string") {
          for (var ce = Re.stack.split(`
`), ye = ie.stack.split(`
`), Ie = ce.length - 1, De = ye.length - 1; Ie >= 1 && De >= 0 && ce[Ie] !== ye[De]; )
            De--;
          for (; Ie >= 1 && De >= 0; Ie--, De--)
            if (ce[Ie] !== ye[De]) {
              if (Ie !== 1 || De !== 1)
                do
                  if (Ie--, De--, De < 0 || ce[Ie] !== ye[De]) {
                    var Oe = `
` + ce[Ie].replace(" at new ", " at ");
                    return A.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", A.displayName)), typeof A == "function" && ne.set(A, Oe), Oe;
                  }
                while (Ie >= 1 && De >= 0);
              break;
            }
        }
      } finally {
        ae = !1, X.current = Ee, z(), Error.prepareStackTrace = he;
      }
      var $e = A ? A.displayName || A.name : "", Ue = $e ? re($e) : "";
      return typeof A == "function" && ne.set(A, Ue), Ue;
    }
    function Te(A, M, V) {
      return G(A, !1);
    }
    function ge(A) {
      var M = A.prototype;
      return !!(M && M.isReactComponent);
    }
    function fe(A, M, V) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return G(A, ge(A));
      if (typeof A == "string")
        return re(A);
      switch (A) {
        case d:
          return re("Suspense");
        case f:
          return re("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            return Te(A.render);
          case h:
            return fe(A.type, M, V);
          case T: {
            var ie = A, he = ie._payload, Ee = ie._init;
            try {
              return fe(Ee(he), M, V);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, xe = {}, ke = m.ReactDebugCurrentFrame;
    function ve(A) {
      if (A) {
        var M = A._owner, V = fe(A.type, A._source, M ? M.type : null);
        ke.setExtraStackFrame(V);
      } else
        ke.setExtraStackFrame(null);
    }
    function He(A, M, V, ie, he) {
      {
        var Ee = Function.call.bind(pe);
        for (var le in A)
          if (Ee(A, le)) {
            var ce = void 0;
            try {
              if (typeof A[le] != "function") {
                var ye = Error((ie || "React class") + ": " + V + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              ce = A[le](M, le, ie, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ie) {
              ce = Ie;
            }
            ce && !(ce instanceof Error) && (ve(he), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", V, le, typeof ce), ve(null)), ce instanceof Error && !(ce.message in xe) && (xe[ce.message] = !0, ve(he), b("Failed %s type: %s", V, ce.message), ve(null));
          }
      }
    }
    var W = Array.isArray;
    function oe(A) {
      return W(A);
    }
    function me(A) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, V = M && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return V;
      }
    }
    function be(A) {
      try {
        return Ce(A), !1;
      } catch {
        return !0;
      }
    }
    function Ce(A) {
      return "" + A;
    }
    function Le(A) {
      if (be(A))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", me(A)), Ce(A);
    }
    var Se = m.ReactCurrentOwner, Me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Pe, we;
    we = {};
    function Be(A) {
      if (pe.call(A, "ref")) {
        var M = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function je(A) {
      if (pe.call(A, "key")) {
        var M = Object.getOwnPropertyDescriptor(A, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function O(A, M) {
      if (typeof A.ref == "string" && Se.current && M && Se.current.stateNode !== M) {
        var V = w(Se.current.type);
        we[V] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(Se.current.type), A.ref), we[V] = !0);
      }
    }
    function k(A, M) {
      {
        var V = function() {
          Fe || (Fe = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        V.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: V,
          configurable: !0
        });
      }
    }
    function L(A, M) {
      {
        var V = function() {
          Pe || (Pe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        V.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: V,
          configurable: !0
        });
      }
    }
    var B = function(A, M, V, ie, he, Ee, le) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: A,
        key: M,
        ref: V,
        props: le,
        // Record the component responsible for creating this element.
        _owner: Ee
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function Z(A, M, V, ie, he) {
      {
        var Ee, le = {}, ce = null, ye = null;
        V !== void 0 && (Le(V), ce = "" + V), je(M) && (Le(M.key), ce = "" + M.key), Be(M) && (ye = M.ref, O(M, he));
        for (Ee in M)
          pe.call(M, Ee) && !Me.hasOwnProperty(Ee) && (le[Ee] = M[Ee]);
        if (A && A.defaultProps) {
          var Ie = A.defaultProps;
          for (Ee in Ie)
            le[Ee] === void 0 && (le[Ee] = Ie[Ee]);
        }
        if (ce || ye) {
          var De = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          ce && k(le, De), ye && L(le, De);
        }
        return B(A, ce, ye, he, ie, Se.current, le);
      }
    }
    var se = m.ReactCurrentOwner, ue = m.ReactDebugCurrentFrame;
    function Ae(A) {
      if (A) {
        var M = A._owner, V = fe(A.type, A._source, M ? M.type : null);
        ue.setExtraStackFrame(V);
      } else
        ue.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function Ge(A) {
      return typeof A == "object" && A !== null && A.$$typeof === n;
    }
    function Ye() {
      {
        if (se.current) {
          var A = w(se.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function qe(A) {
      return "";
    }
    var Ve = {};
    function ze(A) {
      {
        var M = Ye();
        if (!M) {
          var V = typeof A == "string" ? A : A.displayName || A.name;
          V && (M = `

Check the top-level render call using <` + V + ">.");
        }
        return M;
      }
    }
    function Ke(A, M) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var V = ze(M);
        if (Ve[V])
          return;
        Ve[V] = !0;
        var ie = "";
        A && A._owner && A._owner !== se.current && (ie = " It was passed a child from " + w(A._owner.type) + "."), Ae(A), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, ie), Ae(null);
      }
    }
    function Ze(A, M) {
      {
        if (typeof A != "object")
          return;
        if (oe(A))
          for (var V = 0; V < A.length; V++) {
            var ie = A[V];
            Ge(ie) && Ke(ie, M);
          }
        else if (Ge(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var he = _(A);
          if (typeof he == "function" && he !== A.entries)
            for (var Ee = he.call(A), le; !(le = Ee.next()).done; )
              Ge(le.value) && Ke(le.value, M);
        }
      }
    }
    function Je(A) {
      {
        var M = A.type;
        if (M == null || typeof M == "string")
          return;
        var V;
        if (typeof M == "function")
          V = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === h))
          V = M.propTypes;
        else
          return;
        if (V) {
          var ie = w(M);
          He(V, A.props, "prop", ie, A);
        } else if (M.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var he = w(M);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function et(A) {
      {
        for (var M = Object.keys(A.props), V = 0; V < M.length; V++) {
          var ie = M[V];
          if (ie !== "children" && ie !== "key") {
            Ae(A), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Ae(null);
            break;
          }
        }
        A.ref !== null && (Ae(A), b("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    var Xe = {};
    function Qe(A, M, V, ie, he, Ee) {
      {
        var le = v(A);
        if (!le) {
          var ce = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = qe();
          ye ? ce += ye : ce += Ye();
          var Ie;
          A === null ? Ie = "null" : oe(A) ? Ie = "array" : A !== void 0 && A.$$typeof === n ? (Ie = "<" + (w(A.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Ie = typeof A, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ie, ce);
        }
        var De = Z(A, M, V, he, Ee);
        if (De == null)
          return De;
        if (le) {
          var Oe = M.children;
          if (Oe !== void 0)
            if (ie)
              if (oe(Oe)) {
                for (var $e = 0; $e < Oe.length; $e++)
                  Ze(Oe[$e], A);
                Object.freeze && Object.freeze(Oe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ze(Oe, A);
        }
        if (pe.call(M, "key")) {
          var Ue = w(A), Re = Object.keys(M).filter(function(it) {
            return it !== "key";
          }), We = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xe[Ue + We]) {
            var at = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, We, Ue, at, Ue), Xe[Ue + We] = !0;
          }
        }
        return A === a ? et(De) : Je(De), De;
      }
    }
    function tt(A, M, V) {
      return Qe(A, M, V, !0);
    }
    function nt(A, M, V) {
      return Qe(A, M, V, !1);
    }
    var rt = nt, st = tt;
    reactJsxRuntime_development.Fragment = a, reactJsxRuntime_development.jsx = rt, reactJsxRuntime_development.jsxs = st;
  }()), reactJsxRuntime_development;
}
process.env.NODE_ENV === "production" ? jsxRuntime.exports = requireReactJsxRuntime_production_min() : jsxRuntime.exports = requireReactJsxRuntime_development();
var jsxRuntimeExports = jsxRuntime.exports;
function keys(t) {
  return Object.keys(t);
}
function camelToKebabCase(t) {
  return t.replace(/[A-Z]/g, (n) => `-${n.toLowerCase()}`);
}
function scaleRem(t) {
  return t === "0rem" ? "0rem" : `calc(${t} * var(--mantine-scale))`;
}
function createConverter(t, { shouldScale: n = !1 } = {}) {
  function s(a) {
    if (a === 0 || a === "0")
      return `0${t}`;
    if (typeof a == "number") {
      const i = `${a / 16}${t}`;
      return n ? scaleRem(i) : i;
    }
    if (typeof a == "string") {
      if (a === "" || a.startsWith("calc(") || a.startsWith("clamp(") || a.includes("rgba("))
        return a;
      if (a.includes(","))
        return a.split(",").map((o) => s(o)).join(",");
      if (a.includes(" "))
        return a.split(" ").map((o) => s(o)).join(" ");
      if (a.includes(t))
        return n ? scaleRem(a) : a;
      const i = a.replace("px", "");
      if (!Number.isNaN(Number(i))) {
        const o = `${Number(i) / 16}${t}`;
        return n ? scaleRem(o) : o;
      }
    }
    return a;
  }
  return s;
}
const rem = createConverter("rem", { shouldScale: !0 });
function filterProps(t) {
  return Object.keys(t).reduce((n, s) => (t[s] !== void 0 && (n[s] = t[s]), n), {});
}
function isNumberLike(t) {
  return typeof t == "number" ? !0 : typeof t == "string" ? t.startsWith("calc(") || t.startsWith("var(") || t.includes(" ") && t.trim() !== "" ? !0 : /[0-9]/.test(t.trim().replace("-", "")[0]) : !1;
}
function isElement(t) {
  return Array.isArray(t) || t === null ? !1 : typeof t == "object" ? t.type !== Fragment : !1;
}
function createSafeContext(t) {
  const n = createContext(null);
  return [({ children: i, value: o }) => /* @__PURE__ */ jsxRuntimeExports.jsx(n.Provider, { value: o, children: i }), () => {
    const i = useContext(n);
    if (i === null)
      throw new Error(t);
    return i;
  }];
}
const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(t) {
  return elevations[t];
}
function getSize(t, n = "size", s = !0) {
  if (t !== void 0)
    return isNumberLike(t) ? s ? rem(t) : t : `var(--${n}-${t})`;
}
function getSpacing(t) {
  return getSize(t, "mantine-spacing");
}
function getRadius(t) {
  return t === void 0 ? "var(--mantine-radius-default)" : getSize(t, "mantine-radius");
}
function getFontSize(t) {
  return getSize(t, "mantine-font-size");
}
function getLineHeight(t) {
  return getSize(t, "mantine-line-height", !1);
}
function upperFirst(t) {
  return typeof t != "string" ? "" : t.charAt(0).toUpperCase() + t.slice(1);
}
function attachMediaListener(t, n) {
  try {
    return t.addEventListener("change", n), () => t.removeEventListener("change", n);
  } catch {
    return t.addListener(n), () => t.removeListener(n);
  }
}
function getInitialValue(t, n) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(t).matches : !1;
}
function useMediaQuery(t, n, { getInitialValueInEffect: s } = {
  getInitialValueInEffect: !0
}) {
  const [a, i] = useState(
    s ? n : getInitialValue(t)
  ), o = useRef();
  return useEffect(() => {
    if ("matchMedia" in window)
      return o.current = window.matchMedia(t), i(o.current.matches), attachMediaListener(o.current, (u) => i(u.matches));
  }, [t]), a;
}
const useIsomorphicEffect = typeof document < "u" ? useLayoutEffect : useEffect;
function useDidUpdate(t, n) {
  const s = useRef(!1);
  useEffect(
    () => () => {
      s.current = !1;
    },
    []
  ), useEffect(() => {
    if (s.current)
      return t();
    s.current = !0;
  }, n);
}
function assignRef(t, n) {
  typeof t == "function" ? t(n) : typeof t == "object" && t !== null && "current" in t && (t.current = n);
}
function useReducedMotion(t, n) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", t, n);
}
function useDisclosure(t = !1, n) {
  const { onOpen: s, onClose: a } = {}, [i, o] = useState(t), u = useCallback(() => {
    o((d) => d || (s == null || s(), !0));
  }, [s]), c = useCallback(() => {
    o((d) => d && (a == null || a(), !1));
  }, [a]), l = useCallback(() => {
    i ? c() : u();
  }, [c, u, i]);
  return [i, { open: u, close: c, toggle: l }];
}
function createVarsResolver(t) {
  return t;
}
function r(t) {
  var n, s, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (n = 0; n < i; n++) t[n] && (s = r(t[n])) && (a && (a += " "), a += s);
  } else for (s in t) t[s] && (a && (a += " "), a += s);
  return a;
}
function clsx() {
  for (var t, n, s = 0, a = "", i = arguments.length; s < i; s++) (t = arguments[s]) && (n = r(t)) && (a && (a += " "), a += n);
  return a;
}
const EMPTY_CLASS_NAMES = {};
function mergeClassNames(t) {
  const n = {};
  return t.forEach((s) => {
    Object.entries(s).forEach(([a, i]) => {
      n[a] ? n[a] = clsx(n[a], i) : n[a] = i;
    });
  }), n;
}
function resolveClassNames({ theme: t, classNames: n, props: s, stylesCtx: a }) {
  const o = (Array.isArray(n) ? n : [n]).map(
    (u) => typeof u == "function" ? u(t, s, a) : u || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(o);
}
function resolveStyles({ theme: t, styles: n, props: s, stylesCtx: a }) {
  return (Array.isArray(n) ? n : [n]).reduce((o, u) => typeof u == "function" ? { ...o, ...u(t, s, a) } : { ...o, ...u }, {});
}
const MantineContext = createContext(null);
function useMantineContext() {
  const t = useContext(MantineContext);
  if (!t)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return t;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}
function useMantineWithStaticClasses() {
  return useMantineContext().withStaticClasses;
}
function useMantineIsHeadless() {
  return useMantineContext().headless;
}
function useMantineSxTransform() {
  var t;
  return (t = useMantineContext().stylesTransform) == null ? void 0 : t.sx;
}
function useMantineStylesTransform() {
  var t;
  return (t = useMantineContext().stylesTransform) == null ? void 0 : t.styles;
}
function isHexColor(t) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(t);
}
function hexToRgba(t) {
  let n = t.replace("#", "");
  if (n.length === 3) {
    const u = n.split("");
    n = [
      u[0],
      u[0],
      u[1],
      u[1],
      u[2],
      u[2]
    ].join("");
  }
  if (n.length === 8) {
    const u = parseInt(n.slice(6, 8), 16) / 255;
    return {
      r: parseInt(n.slice(0, 2), 16),
      g: parseInt(n.slice(2, 4), 16),
      b: parseInt(n.slice(4, 6), 16),
      a: u
    };
  }
  const s = parseInt(n, 16), a = s >> 16 & 255, i = s >> 8 & 255, o = s & 255;
  return {
    r: a,
    g: i,
    b: o,
    a: 1
  };
}
function rgbStringToRgba(t) {
  const [n, s, a, i] = t.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: n, g: s, b: a, a: i || 1 };
}
function hslStringToRgba(t) {
  const n = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, s = t.match(n);
  if (!s)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const a = parseInt(s[1], 10), i = parseInt(s[2], 10) / 100, o = parseInt(s[3], 10) / 100, u = s[5] ? parseFloat(s[5]) : void 0, c = (1 - Math.abs(2 * o - 1)) * i, l = a / 60, d = c * (1 - Math.abs(l % 2 - 1)), f = o - c / 2;
  let h, T, p;
  return l >= 0 && l < 1 ? (h = c, T = d, p = 0) : l >= 1 && l < 2 ? (h = d, T = c, p = 0) : l >= 2 && l < 3 ? (h = 0, T = c, p = d) : l >= 3 && l < 4 ? (h = 0, T = d, p = c) : l >= 4 && l < 5 ? (h = d, T = 0, p = c) : (h = c, T = 0, p = d), {
    r: Math.round((h + f) * 255),
    g: Math.round((T + f) * 255),
    b: Math.round((p + f) * 255),
    a: u || 1
  };
}
function toRgba(t) {
  return isHexColor(t) ? hexToRgba(t) : t.startsWith("rgb") ? rgbStringToRgba(t) : t.startsWith("hsl") ? hslStringToRgba(t) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function getPrimaryShade(t, n) {
  return typeof t.primaryShade == "number" ? t.primaryShade : n === "dark" ? t.primaryShade.dark : t.primaryShade.light;
}
function gammaCorrect(t) {
  return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
}
function getLightnessFromOklch(t) {
  const n = t.match(/oklch\((.*?)%\s/);
  return n ? parseFloat(n[1]) : null;
}
function luminance(t) {
  if (t.startsWith("oklch("))
    return (getLightnessFromOklch(t) || 0) / 100;
  const { r: n, g: s, b: a } = toRgba(t), i = n / 255, o = s / 255, u = a / 255, c = gammaCorrect(i), l = gammaCorrect(o), d = gammaCorrect(u);
  return 0.2126 * c + 0.7152 * l + 0.0722 * d;
}
function isLightColor(t, n = 0.179) {
  return t.startsWith("var(") ? !1 : luminance(t) > n;
}
function parseThemeColor({
  color: t,
  theme: n,
  colorScheme: s
}) {
  if (typeof t != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof t}`
    );
  if (t === "bright")
    return {
      color: t,
      value: s === "dark" ? n.white : n.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: isLightColor(
        s === "dark" ? n.white : n.black,
        n.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (t === "dimmed")
    return {
      color: t,
      value: s === "dark" ? n.colors.dark[2] : n.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: isLightColor(
        s === "dark" ? n.colors.dark[2] : n.colors.gray[6],
        n.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (t === "white" || t === "black")
    return {
      color: t,
      value: t === "white" ? n.white : n.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: isLightColor(
        t === "white" ? n.white : n.black,
        n.luminanceThreshold
      ),
      variable: `--mantine-color-${t}`
    };
  const [a, i] = t.split("."), o = i ? Number(i) : void 0, u = a in n.colors;
  if (u) {
    const c = o !== void 0 ? n.colors[a][o] : n.colors[a][getPrimaryShade(n, s || "light")];
    return {
      color: a,
      value: c,
      shade: o,
      isThemeColor: u,
      isLight: isLightColor(c, n.luminanceThreshold),
      variable: i ? `--mantine-color-${a}-${o}` : `--mantine-color-${a}-filled`
    };
  }
  return {
    color: t,
    value: t,
    isThemeColor: u,
    isLight: isLightColor(t, n.luminanceThreshold),
    shade: o,
    variable: void 0
  };
}
function getThemeColor(t, n) {
  const s = parseThemeColor({ color: t || n.primaryColor, theme: n });
  return s.variable ? `var(${s.variable})` : t;
}
function getGradient(t, n) {
  const s = {
    from: (t == null ? void 0 : t.from) || n.defaultGradient.from,
    to: (t == null ? void 0 : t.to) || n.defaultGradient.to,
    deg: (t == null ? void 0 : t.deg) || n.defaultGradient.deg || 0
  }, a = getThemeColor(s.from, n), i = getThemeColor(s.to, n);
  return `linear-gradient(${s.deg}deg, ${a} 0%, ${i} 100%)`;
}
function rgba(t, n) {
  if (typeof t != "string" || n > 1 || n < 0)
    return "rgba(0, 0, 0, 1)";
  if (t.startsWith("var(")) {
    const o = (1 - n) * 100;
    return `color-mix(in srgb, ${t}, transparent ${o}%)`;
  }
  if (t.startsWith("oklch"))
    return t.includes("/") ? t.replace(/\/\s*[\d.]+\s*\)/, `/ ${n})`) : t.replace(")", ` / ${n})`);
  const { r: s, g: a, b: i } = toRgba(t);
  return `rgba(${s}, ${a}, ${i}, ${n})`;
}
const MantineThemeContext = createContext(null);
function useMantineTheme() {
  const t = useContext(MantineThemeContext);
  if (!t)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return t;
}
function useResolvedStylesApi({
  classNames: t,
  styles: n,
  props: s,
  stylesCtx: a
}) {
  const i = useMantineTheme();
  return {
    resolvedClassNames: resolveClassNames({
      theme: i,
      classNames: t,
      props: s,
      stylesCtx: a || void 0
    }),
    resolvedStyles: resolveStyles({
      theme: i,
      styles: n,
      props: s,
      stylesCtx: a || void 0
    })
  };
}
const FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme: t, options: n, unstyled: s }) {
  return clsx(
    (n == null ? void 0 : n.focusable) && !s && (t.focusClassName || FOCUS_CLASS_NAMES[t.focusRing]),
    (n == null ? void 0 : n.active) && !s && t.activeClassName
  );
}
function getOptionsClassNames({
  selector: t,
  stylesCtx: n,
  options: s,
  props: a,
  theme: i
}) {
  return resolveClassNames({
    theme: i,
    classNames: s == null ? void 0 : s.classNames,
    props: (s == null ? void 0 : s.props) || a,
    stylesCtx: n
  })[t];
}
function getResolvedClassNames({
  selector: t,
  stylesCtx: n,
  theme: s,
  classNames: a,
  props: i
}) {
  return resolveClassNames({ theme: s, classNames: a, props: i, stylesCtx: n })[t];
}
function getRootClassName({ rootSelector: t, selector: n, className: s }) {
  return t === n ? s : void 0;
}
function getSelectorClassName({ selector: t, classes: n, unstyled: s }) {
  return s ? void 0 : n[t];
}
function getStaticClassNames({
  themeName: t,
  classNamesPrefix: n,
  selector: s,
  withStaticClass: a
}) {
  return a === !1 ? [] : t.map((i) => `${n}-${i}-${s}`);
}
function getThemeClassNames({
  themeName: t,
  theme: n,
  selector: s,
  props: a,
  stylesCtx: i
}) {
  return t.map(
    (o) => {
      var u, c;
      return (c = resolveClassNames({
        theme: n,
        classNames: (u = n.components[o]) == null ? void 0 : u.classNames,
        props: a,
        stylesCtx: i
      })) == null ? void 0 : c[s];
    }
  );
}
function getVariantClassName({
  options: t,
  classes: n,
  selector: s,
  unstyled: a
}) {
  return t != null && t.variant && !a ? n[`${s}--${t.variant}`] : void 0;
}
function getClassName({
  theme: t,
  options: n,
  themeName: s,
  selector: a,
  classNamesPrefix: i,
  classNames: o,
  classes: u,
  unstyled: c,
  className: l,
  rootSelector: d,
  props: f,
  stylesCtx: h,
  withStaticClasses: T,
  headless: p,
  transformedStyles: I
}) {
  return clsx(
    getGlobalClassNames({ theme: t, options: n, unstyled: c || p }),
    getThemeClassNames({ theme: t, themeName: s, selector: a, props: f, stylesCtx: h }),
    getVariantClassName({ options: n, classes: u, selector: a, unstyled: c }),
    getResolvedClassNames({ selector: a, stylesCtx: h, theme: t, classNames: o, props: f }),
    getResolvedClassNames({ selector: a, stylesCtx: h, theme: t, classNames: I, props: f }),
    getOptionsClassNames({ selector: a, stylesCtx: h, options: n, props: f, theme: t }),
    getRootClassName({ rootSelector: d, selector: a, className: l }),
    getSelectorClassName({ selector: a, classes: u, unstyled: c || p }),
    T && !p && getStaticClassNames({
      themeName: s,
      classNamesPrefix: i,
      selector: a,
      withStaticClass: n == null ? void 0 : n.withStaticClass
    }),
    n == null ? void 0 : n.className
  );
}
function getThemeStyles({
  theme: t,
  themeName: n,
  props: s,
  stylesCtx: a,
  selector: i
}) {
  return n.map(
    (o) => {
      var u;
      return resolveStyles({
        theme: t,
        styles: (u = t.components[o]) == null ? void 0 : u.styles,
        props: s,
        stylesCtx: a
      })[i];
    }
  ).reduce((o, u) => ({ ...o, ...u }), {});
}
function resolveStyle({ style: t, theme: n }) {
  return Array.isArray(t) ? [...t].reduce(
    (s, a) => ({ ...s, ...resolveStyle({ style: a, theme: n }) }),
    {}
  ) : typeof t == "function" ? t(n) : t ?? {};
}
function mergeVars(t) {
  return t.reduce((n, s) => (s && Object.keys(s).forEach((a) => {
    n[a] = { ...n[a], ...filterProps(s[a]) };
  }), n), {});
}
function resolveVars({
  vars: t,
  varsResolver: n,
  theme: s,
  props: a,
  stylesCtx: i,
  selector: o,
  themeName: u,
  headless: c
}) {
  var l;
  return (l = mergeVars([
    c ? {} : n == null ? void 0 : n(s, a, i),
    ...u.map((d) => {
      var f, h, T;
      return (T = (h = (f = s.components) == null ? void 0 : f[d]) == null ? void 0 : h.vars) == null ? void 0 : T.call(h, s, a, i);
    }),
    t == null ? void 0 : t(s, a, i)
  ])) == null ? void 0 : l[o];
}
function getStyle({
  theme: t,
  themeName: n,
  selector: s,
  options: a,
  props: i,
  stylesCtx: o,
  rootSelector: u,
  styles: c,
  style: l,
  vars: d,
  varsResolver: f,
  headless: h,
  withStylesTransform: T
}) {
  return {
    ...!T && getThemeStyles({ theme: t, themeName: n, props: i, stylesCtx: o, selector: s }),
    ...!T && resolveStyles({ theme: t, styles: c, props: i, stylesCtx: o })[s],
    ...!T && resolveStyles({ theme: t, styles: a == null ? void 0 : a.styles, props: (a == null ? void 0 : a.props) || i, stylesCtx: o })[s],
    ...resolveVars({ theme: t, props: i, stylesCtx: o, vars: d, varsResolver: f, selector: s, themeName: n, headless: h }),
    ...u === s ? resolveStyle({ style: l, theme: t }) : null,
    ...resolveStyle({ style: a == null ? void 0 : a.style, theme: t })
  };
}
function useStylesTransform({ props: t, stylesCtx: n, themeName: s }) {
  var u;
  const a = useMantineTheme(), i = (u = useMantineStylesTransform()) == null ? void 0 : u();
  return {
    getTransformedStyles: (c) => i ? [
      ...c.map(
        (d) => i(d, { props: t, theme: a, ctx: n })
      ),
      ...s.map(
        (d) => {
          var f;
          return i((f = a.components[d]) == null ? void 0 : f.styles, { props: t, theme: a, ctx: n });
        }
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!i
  };
}
function useStyles({
  name: t,
  classes: n,
  props: s,
  stylesCtx: a,
  className: i,
  style: o,
  rootSelector: u = "root",
  unstyled: c,
  classNames: l,
  styles: d,
  vars: f,
  varsResolver: h
}) {
  const T = useMantineTheme(), p = useMantineClassNamesPrefix(), I = useMantineWithStaticClasses(), E = useMantineIsHeadless(), _ = (Array.isArray(t) ? t : [t]).filter((S) => S), { withStylesTransform: m, getTransformedStyles: b } = useStylesTransform({
    props: s,
    stylesCtx: a,
    themeName: _
  });
  return (S, C) => ({
    className: getClassName({
      theme: T,
      options: C,
      themeName: _,
      selector: S,
      classNamesPrefix: p,
      classNames: l,
      classes: n,
      unstyled: c,
      className: i,
      rootSelector: u,
      props: s,
      stylesCtx: a,
      withStaticClasses: I,
      headless: E,
      transformedStyles: b([C == null ? void 0 : C.styles, d])
    }),
    style: getStyle({
      theme: T,
      themeName: _,
      selector: S,
      options: C,
      props: s,
      stylesCtx: a,
      rootSelector: u,
      styles: d,
      style: o,
      vars: f,
      varsResolver: h,
      headless: E,
      withStylesTransform: m
    })
  });
}
function useProps(t, n, s) {
  var u;
  const a = useMantineTheme(), i = (u = a.components[t]) == null ? void 0 : u.defaultProps, o = typeof i == "function" ? i(a) : i;
  return { ...n, ...o, ...filterProps(s) };
}
function cssObjectToString(t) {
  return keys(t).reduce(
    (n, s) => t[s] !== void 0 ? `${n}${camelToKebabCase(s)}:${t[s]};` : n,
    ""
  ).trim();
}
function stylesToString({ selector: t, styles: n, media: s, container: a }) {
  const i = n ? cssObjectToString(n) : "", o = Array.isArray(s) ? s.map((c) => `@media${c.query}{${t}{${cssObjectToString(c.styles)}}}`) : [], u = Array.isArray(a) ? a.map(
    (c) => `@container ${c.query}{${t}{${cssObjectToString(c.styles)}}}`
  ) : [];
  return `${i ? `${t}{${i}}` : ""}${o.join("")}${u.join("")}`.trim();
}
function InlineStyles(t) {
  const n = useMantineStyleNonce();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: stylesToString(t) }
    }
  );
}
function extractStyleProps(t) {
  const {
    m: n,
    mx: s,
    my: a,
    mt: i,
    mb: o,
    ml: u,
    mr: c,
    me: l,
    ms: d,
    p: f,
    px: h,
    py: T,
    pt: p,
    pb: I,
    pl: E,
    pr: _,
    pe: m,
    ps: b,
    bd: S,
    bg: C,
    c: g,
    opacity: D,
    ff: N,
    fz: R,
    fw: P,
    lts: v,
    ta: x,
    lh: Y,
    fs: w,
    tt: q,
    td: K,
    w: U,
    miw: J,
    maw: ee,
    h: _e,
    mih: y,
    mah: F,
    bgsz: H,
    bgp: j,
    bgr: Q,
    bga: z,
    pos: X,
    top: te,
    left: re,
    bottom: ae,
    right: ne,
    inset: de,
    display: G,
    flex: Te,
    hiddenFrom: ge,
    visibleFrom: fe,
    lightHidden: pe,
    darkHidden: xe,
    sx: ke,
    ...ve
  } = t;
  return { styleProps: filterProps({
    m: n,
    mx: s,
    my: a,
    mt: i,
    mb: o,
    ml: u,
    mr: c,
    me: l,
    ms: d,
    p: f,
    px: h,
    py: T,
    pt: p,
    pb: I,
    pl: E,
    pr: _,
    pe: m,
    ps: b,
    bd: S,
    bg: C,
    c: g,
    opacity: D,
    ff: N,
    fz: R,
    fw: P,
    lts: v,
    ta: x,
    lh: Y,
    fs: w,
    tt: q,
    td: K,
    w: U,
    miw: J,
    maw: ee,
    h: _e,
    mih: y,
    mah: F,
    bgsz: H,
    bgp: j,
    bgr: Q,
    bga: z,
    pos: X,
    top: te,
    left: re,
    bottom: ae,
    right: ne,
    inset: de,
    display: G,
    flex: Te,
    hiddenFrom: ge,
    visibleFrom: fe,
    lightHidden: pe,
    darkHidden: xe,
    sx: ke
  }), rest: ve };
}
const STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};
function colorResolver(t, n) {
  const s = parseThemeColor({ color: t, theme: n });
  return s.color === "dimmed" ? "var(--mantine-color-dimmed)" : s.color === "bright" ? "var(--mantine-color-bright)" : s.variable ? `var(${s.variable})` : s.color;
}
function textColorResolver(t, n) {
  const s = parseThemeColor({ color: t, theme: n });
  return s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-text)` : colorResolver(t, n);
}
function borderResolver(t, n) {
  if (typeof t == "number")
    return rem(t);
  if (typeof t == "string") {
    const [s, a, ...i] = t.split(" ").filter((u) => u.trim() !== "");
    let o = `${rem(s)}`;
    return a && (o += ` ${a}`), i.length > 0 && (o += ` ${colorResolver(i.join(" "), n)}`), o.trim();
  }
  return t;
}
const values = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(t) {
  return typeof t == "string" && t in values ? values[t] : t;
}
const headings$1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function fontSizeResolver(t, n) {
  return typeof t == "string" && t in n.fontSizes ? `var(--mantine-font-size-${t})` : typeof t == "string" && headings$1.includes(t) ? `var(--mantine-${t}-font-size)` : typeof t == "number" || typeof t == "string" ? rem(t) : t;
}
function identityResolver(t) {
  return t;
}
const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function lineHeightResolver(t, n) {
  return typeof t == "string" && t in n.lineHeights ? `var(--mantine-line-height-${t})` : typeof t == "string" && headings.includes(t) ? `var(--mantine-${t}-line-height)` : t;
}
function sizeResolver(t) {
  return typeof t == "number" ? rem(t) : t;
}
function spacingResolver(t, n) {
  if (typeof t == "number")
    return rem(t);
  if (typeof t == "string") {
    const s = t.replace("-", "");
    if (!(s in n.spacing))
      return rem(t);
    const a = `--mantine-spacing-${s}`;
    return t.startsWith("-") ? `calc(var(${a}) * -1)` : `var(${a})`;
  }
  return t;
}
const resolvers = {
  color: colorResolver,
  textColor: textColorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver,
  fontFamily: fontFamilyResolver,
  border: borderResolver
};
function replaceMediaQuery(t) {
  return t.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({
  media: t,
  ...n
}) {
  const a = Object.keys(t).sort((i, o) => Number(replaceMediaQuery(i)) - Number(replaceMediaQuery(o))).map((i) => ({ query: i, styles: t[i] }));
  return { ...n, media: a };
}
function hasResponsiveStyles(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(t);
  return !(n.length === 1 && n[0] === "base");
}
function getBaseValue(t) {
  return typeof t == "object" && t !== null ? "base" in t ? t.base : void 0 : t;
}
function getBreakpointKeys(t) {
  return typeof t == "object" && t !== null ? keys(t).filter((n) => n !== "base") : [];
}
function getBreakpointValue(t, n) {
  return typeof t == "object" && t !== null && n in t ? t[n] : t;
}
function parseStyleProps({
  styleProps: t,
  data: n,
  theme: s
}) {
  return sortMediaQueries(
    keys(t).reduce(
      (a, i) => {
        if (i === "hiddenFrom" || i === "visibleFrom" || i === "sx")
          return a;
        const o = n[i], u = Array.isArray(o.property) ? o.property : [o.property], c = getBaseValue(t[i]);
        if (!hasResponsiveStyles(t[i]))
          return u.forEach((d) => {
            a.inlineStyles[d] = resolvers[o.type](c, s);
          }), a;
        a.hasResponsiveStyles = !0;
        const l = getBreakpointKeys(t[i]);
        return u.forEach((d) => {
          c && (a.styles[d] = resolvers[o.type](c, s)), l.forEach((f) => {
            const h = `(min-width: ${s.breakpoints[f]})`;
            a.media[h] = {
              ...a.media[h],
              [d]: resolvers[o.type](
                getBreakpointValue(t[i], f),
                s
              )
            };
          });
        }), a;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
function useRandomClassName() {
  return `__m__-${useId().replace(/:/g, "")}`;
}
function createPolymorphicComponent(t) {
  return t;
}
function transformModKey(t) {
  return t.startsWith("data-") ? t : `data-${t}`;
}
function getMod(t) {
  return Object.keys(t).reduce((n, s) => {
    const a = t[s];
    return a === void 0 || a === "" || a === !1 || a === null || (n[transformModKey(s)] = t[s]), n;
  }, {});
}
function getBoxMod(t) {
  return t ? typeof t == "string" ? { [transformModKey(t)]: !0 } : Array.isArray(t) ? [...t].reduce(
    (n, s) => ({ ...n, ...getBoxMod(s) }),
    {}
  ) : getMod(t) : null;
}
function mergeStyles(t, n) {
  return Array.isArray(t) ? [...t].reduce(
    (s, a) => ({ ...s, ...mergeStyles(a, n) }),
    {}
  ) : typeof t == "function" ? t(n) : t ?? {};
}
function getBoxStyle({
  theme: t,
  style: n,
  vars: s,
  styleProps: a
}) {
  const i = mergeStyles(n, t), o = mergeStyles(s, t);
  return { ...i, ...o, ...a };
}
const _Box = forwardRef(
  ({
    component: t,
    style: n,
    __vars: s,
    className: a,
    variant: i,
    mod: o,
    size: u,
    hiddenFrom: c,
    visibleFrom: l,
    lightHidden: d,
    darkHidden: f,
    renderRoot: h,
    __size: T,
    ...p
  }, I) => {
    var R;
    const E = useMantineTheme(), _ = t || "div", { styleProps: m, rest: b } = extractStyleProps(p), S = useMantineSxTransform(), C = (R = S == null ? void 0 : S()) == null ? void 0 : R(m.sx), g = useRandomClassName(), D = parseStyleProps({
      styleProps: m,
      theme: E,
      data: STYlE_PROPS_DATA
    }), N = {
      ref: I,
      style: getBoxStyle({
        theme: E,
        style: n,
        vars: s,
        styleProps: D.inlineStyles
      }),
      className: clsx(a, C, {
        [g]: D.hasResponsiveStyles,
        "mantine-light-hidden": d,
        "mantine-dark-hidden": f,
        [`mantine-hidden-from-${c}`]: c,
        [`mantine-visible-from-${l}`]: l
      }),
      "data-variant": i,
      "data-size": isNumberLike(u) ? void 0 : u || void 0,
      size: T,
      ...getBoxMod(o),
      ...b
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      D.hasResponsiveStyles && /* @__PURE__ */ jsxRuntimeExports.jsx(
        InlineStyles,
        {
          selector: `.${g}`,
          styles: D.styles,
          media: D.media
        }
      ),
      typeof h == "function" ? h(N) : /* @__PURE__ */ jsxRuntimeExports.jsx(_, { ...N })
    ] });
  }
);
_Box.displayName = "@mantine/core/Box";
const Box = _Box;
function identity(t) {
  return t;
}
function factory(t) {
  const n = forwardRef(t);
  return n.extend = identity, n;
}
function polymorphicFactory(t) {
  const n = forwardRef(t);
  return n.extend = identity, n;
}
function createPortalNode(t) {
  const n = document.createElement("div");
  return n.setAttribute("data-portal", "true"), typeof t.className == "string" && n.classList.add(...t.className.split(" ").filter(Boolean)), typeof t.style == "object" && Object.assign(n.style, t.style), typeof t.id == "string" && n.setAttribute("id", t.id), n;
}
const defaultProps$8 = {}, Portal = forwardRef((t, n) => {
  const { children: s, target: a, ...i } = useProps("Portal", defaultProps$8, t), [o, u] = useState(!1), c = useRef(null);
  return useIsomorphicEffect(() => (u(!0), c.current = a ? typeof a == "string" ? document.querySelector(a) : a : createPortalNode(i), assignRef(n, c.current), !a && c.current && document.body.appendChild(c.current), () => {
    !a && c.current && document.body.removeChild(c.current);
  }), [a]), !o || !c.current ? null : createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: s }), c.current);
});
Portal.displayName = "@mantine/core/Portal";
function OptionalPortal({ withinPortal: t = !0, children: n, ...s }) {
  return t ? /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...s, children: n }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: n });
}
OptionalPortal.displayName = "@mantine/core/OptionalPortal";
const popIn = (t) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem(t === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${rem(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${rem(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${rem(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${rem(-30)}` },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...popIn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...popIn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...popIn("top"),
    common: { transformOrigin: "top right" }
  }
}, transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition: t,
  state: n,
  duration: s,
  timingFunction: a
}) {
  const i = {
    transitionDuration: `${s}ms`,
    transitionTimingFunction: a
  };
  return typeof t == "string" ? t in transitions ? {
    transitionProperty: transitions[t].transitionProperty,
    ...i,
    ...transitions[t].common,
    ...transitions[t][transitionStatuses[n]]
  } : {} : {
    transitionProperty: t.transitionProperty,
    ...i,
    ...t.common,
    ...t[transitionStatuses[n]]
  };
}
function useTransition({
  duration: t,
  exitDuration: n,
  timingFunction: s,
  mounted: a,
  onEnter: i,
  onExit: o,
  onEntered: u,
  onExited: c
}) {
  const l = useMantineTheme(), d = useReducedMotion(), f = l.respectReducedMotion ? d : !1, [h, T] = useState(f ? 0 : t), [p, I] = useState(a ? "entered" : "exited"), E = useRef(-1), _ = useRef(-1), m = (b) => {
    const S = b ? i : o, C = b ? u : c;
    window.clearTimeout(E.current);
    const g = f ? 0 : b ? t : n;
    T(g), g === 0 ? (typeof S == "function" && S(), typeof C == "function" && C(), I(b ? "entered" : "exited")) : _.current = requestAnimationFrame(() => {
      ReactDOM.flushSync(() => {
        I(b ? "pre-entering" : "pre-exiting");
      }), _.current = requestAnimationFrame(() => {
        typeof S == "function" && S(), I(b ? "entering" : "exiting"), E.current = window.setTimeout(() => {
          typeof C == "function" && C(), I(b ? "entered" : "exited");
        }, g);
      });
    });
  };
  return useDidUpdate(() => {
    m(a);
  }, [a]), useEffect(
    () => () => {
      window.clearTimeout(E.current), cancelAnimationFrame(_.current);
    },
    []
  ), {
    transitionDuration: h,
    transitionStatus: p,
    transitionTimingFunction: s || "ease"
  };
}
function Transition({
  keepMounted: t,
  transition: n = "fade",
  duration: s = 250,
  exitDuration: a = s,
  mounted: i,
  children: o,
  timingFunction: u = "ease",
  onExit: c,
  onEntered: l,
  onEnter: d,
  onExited: f
}) {
  const { transitionDuration: h, transitionStatus: T, transitionTimingFunction: p } = useTransition({
    mounted: i,
    exitDuration: a,
    duration: s,
    timingFunction: u,
    onExit: c,
    onEntered: l,
    onEnter: d,
    onExited: f
  });
  return h === 0 ? i ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: o({}) }) : t ? o({ display: "none" }) : null : T === "exited" ? t ? o({ display: "none" }) : null : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: o(
    getTransitionStyles({
      transition: n,
      duration: h,
      state: T,
      timingFunction: p
    })
  ) });
}
Transition.displayName = "@mantine/core/Transition";
var classes$5 = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const Bars = forwardRef(({ className: t, ...n }, s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", className: clsx(classes$5.barsLoader, t), ...n, ref: s, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$5.bar }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$5.bar }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$5.bar })
] })), Dots = forwardRef(({ className: t, ...n }, s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", className: clsx(classes$5.dotsLoader, t), ...n, ref: s, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$5.dot }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$5.dot }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$5.dot })
] })), Oval = forwardRef(({ className: t, ...n }, s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", className: clsx(classes$5.ovalLoader, t), ...n, ref: s })), defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
}, defaultProps$7 = {
  loaders: defaultLoaders,
  type: "oval"
}, varsResolver$5 = (t, { size: n, color: s }) => ({
  root: {
    "--loader-size": getSize(n, "loader-size"),
    "--loader-color": s ? getThemeColor(s, t) : void 0
  }
}), Loader = factory((t, n) => {
  const s = useProps("Loader", defaultProps$7, t), {
    size: a,
    color: i,
    type: o,
    vars: u,
    className: c,
    style: l,
    classNames: d,
    styles: f,
    unstyled: h,
    loaders: T,
    variant: p,
    children: I,
    ...E
  } = s, _ = useStyles({
    name: "Loader",
    props: s,
    classes: classes$5,
    className: c,
    style: l,
    classNames: d,
    styles: f,
    unstyled: h,
    vars: u,
    varsResolver: varsResolver$5
  });
  return I ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ..._("root"), ref: n, ...E, children: I }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ..._("root"),
      ref: n,
      component: T[o],
      variant: p,
      size: a,
      ...E
    }
  );
});
Loader.defaultLoaders = defaultLoaders;
Loader.classes = classes$5;
Loader.displayName = "@mantine/core/Loader";
function filterFalsyChildren(t) {
  return Children.toArray(t).filter(Boolean);
}
var classes$4 = { root: "m_4081bf90" };
const defaultProps$6 = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, varsResolver$4 = (t, { grow: n, preventGrowOverflow: s, gap: a, align: i, justify: o, wrap: u }, { childWidth: c }) => ({
  root: {
    "--group-child-width": n && s ? c : void 0,
    "--group-gap": getSpacing(a),
    "--group-align": i,
    "--group-justify": o,
    "--group-wrap": u
  }
}), Group = factory((t, n) => {
  const s = useProps("Group", defaultProps$6, t), {
    classNames: a,
    className: i,
    style: o,
    styles: u,
    unstyled: c,
    children: l,
    gap: d,
    align: f,
    justify: h,
    wrap: T,
    grow: p,
    preventGrowOverflow: I,
    vars: E,
    variant: _,
    __size: m,
    mod: b,
    ...S
  } = s, C = filterFalsyChildren(l), g = C.length, D = getSpacing(d ?? "md"), R = { childWidth: `calc(${100 / g}% - (${D} - ${D} / ${g}))` }, P = useStyles({
    name: "Group",
    props: s,
    stylesCtx: R,
    className: i,
    style: o,
    classes: classes$4,
    classNames: a,
    styles: u,
    unstyled: c,
    vars: E,
    varsResolver: varsResolver$4
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...P("root"),
      ref: n,
      variant: _,
      mod: [{ grow: p }, b],
      size: m,
      ...S,
      children: C
    }
  );
});
Group.classes = classes$4;
Group.displayName = "@mantine/core/Group";
var classes$3 = { root: "m_9814e45f" };
const defaultProps$5 = {
  zIndex: getDefaultZIndex("modal")
}, varsResolver$3 = (t, { gradient: n, color: s, backgroundOpacity: a, blur: i, radius: o, zIndex: u }) => ({
  root: {
    "--overlay-bg": n || (s !== void 0 || a !== void 0) && rgba(s || "#000", a ?? 0.6) || void 0,
    "--overlay-filter": i ? `blur(${rem(i)})` : void 0,
    "--overlay-radius": o === void 0 ? void 0 : getRadius(o),
    "--overlay-z-index": u == null ? void 0 : u.toString()
  }
}), Overlay = polymorphicFactory((t, n) => {
  const s = useProps("Overlay", defaultProps$5, t), {
    classNames: a,
    className: i,
    style: o,
    styles: u,
    unstyled: c,
    vars: l,
    fixed: d,
    center: f,
    children: h,
    radius: T,
    zIndex: p,
    gradient: I,
    blur: E,
    color: _,
    backgroundOpacity: m,
    mod: b,
    ...S
  } = s, C = useStyles({
    name: "Overlay",
    props: s,
    classes: classes$3,
    className: i,
    style: o,
    classNames: a,
    styles: u,
    unstyled: c,
    vars: l,
    varsResolver: varsResolver$3
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ref: n, ...C("root"), mod: [{ center: f, fixed: d }, b], ...S, children: h });
});
Overlay.classes = classes$3;
Overlay.displayName = "@mantine/core/Overlay";
var classes$2 = { root: "m_b6d8b162" };
function getTextTruncate(t) {
  if (t === "start")
    return "start";
  if (t === "end" || t)
    return "end";
}
const defaultProps$4 = {
  inherit: !1
}, varsResolver$2 = (t, { variant: n, lineClamp: s, gradient: a, size: i, color: o }) => ({
  root: {
    "--text-fz": getFontSize(i),
    "--text-lh": getLineHeight(i),
    "--text-gradient": n === "gradient" ? getGradient(a, t) : void 0,
    "--text-line-clamp": typeof s == "number" ? s.toString() : void 0,
    "--text-color": o ? getThemeColor(o, t) : void 0
  }
}), Text$2 = polymorphicFactory((t, n) => {
  const s = useProps("Text", defaultProps$4, t), {
    lineClamp: a,
    truncate: i,
    inline: o,
    inherit: u,
    gradient: c,
    span: l,
    __staticSelector: d,
    vars: f,
    className: h,
    style: T,
    classNames: p,
    styles: I,
    unstyled: E,
    variant: _,
    mod: m,
    size: b,
    ...S
  } = s, C = useStyles({
    name: ["Text", d],
    props: s,
    classes: classes$2,
    className: h,
    style: T,
    classNames: p,
    styles: I,
    unstyled: E,
    vars: f,
    varsResolver: varsResolver$2
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...C("root", { focusable: !0 }),
      ref: n,
      component: l ? "span" : "p",
      variant: _,
      mod: [
        {
          "data-truncate": getTextTruncate(i),
          "data-line-clamp": typeof a == "number",
          "data-inline": o,
          "data-inherit": u
        },
        m
      ],
      size: b,
      ...S
    }
  );
});
Text$2.classes = classes$2;
Text$2.displayName = "@mantine/core/Text";
var classes$1 = { root: "m_6e45937b", loader: "m_e8eb006c", overlay: "m_df587f17" };
const defaultProps$3 = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: getDefaultZIndex("overlay")
}, varsResolver$1 = (t, { zIndex: n }) => ({
  root: {
    "--lo-z-index": n == null ? void 0 : n.toString()
  }
}), LoadingOverlay = factory((t, n) => {
  const s = useProps("LoadingOverlay", defaultProps$3, t), {
    classNames: a,
    className: i,
    style: o,
    styles: u,
    unstyled: c,
    vars: l,
    transitionProps: d,
    loaderProps: f,
    overlayProps: h,
    visible: T,
    zIndex: p,
    ...I
  } = s, E = useMantineTheme(), _ = useStyles({
    name: "LoadingOverlay",
    classes: classes$1,
    props: s,
    className: i,
    style: o,
    classNames: a,
    styles: u,
    unstyled: c,
    vars: l,
    varsResolver: varsResolver$1
  }), m = { ...defaultProps$3.overlayProps, ...h };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Transition, { transition: "fade", ...d, mounted: !!T, children: (b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { ..._("root", { style: b }), ref: n, ...I, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { ..._("loader"), unstyled: c, ...f }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Overlay,
      {
        ...m,
        ..._("overlay"),
        darkHidden: !0,
        unstyled: c,
        color: (h == null ? void 0 : h.color) || E.white
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Overlay,
      {
        ...m,
        ..._("overlay"),
        lightHidden: !0,
        unstyled: c,
        color: (h == null ? void 0 : h.color) || E.colors.dark[5]
      }
    )
  ] }) });
});
LoadingOverlay.classes = classes$1;
LoadingOverlay.displayName = "@mantine/core/LoadingOverlay";
/**
 * @license @tabler/icons-react v3.6.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.6.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createReactComponent = (t, n, s, a) => {
  const i = forwardRef(
    ({ color: o = "currentColor", size: u = 24, stroke: c = 2, title: l, className: d, children: f, ...h }, T) => createElement(
      "svg",
      {
        ref: T,
        ...defaultAttributes[t],
        width: u,
        height: u,
        className: ["tabler-icon", `tabler-icon-${n}`, d].join(" "),
        strokeWidth: c,
        stroke: o,
        ...h
      },
      [
        l && createElement("title", { key: "svg-title" }, l),
        ...a.map(([p, I]) => createElement(p, I)),
        ...Array.isArray(f) ? f : [f]
      ]
    )
  );
  return i.displayName = `${s}`, i;
};
/**
 * @license @tabler/icons-react v3.6.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconArchive = createReactComponent("outline", "archive", "IconArchive", [["path", { d: "M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10", key: "svg-1" }], ["path", { d: "M10 12l4 0", key: "svg-2" }]]);
/**
 * @license @tabler/icons-react v3.6.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconUpload = createReactComponent("outline", "upload", "IconUpload", [["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M7 9l5 -5l5 5", key: "svg-1" }], ["path", { d: "M12 4l0 12", key: "svg-2" }]]);
/**
 * @license @tabler/icons-react v3.6.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconX = createReactComponent("outline", "x", "IconX", [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]]), propTypes = { exports: {} }, reactIs = { exports: {} }, reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, s = t ? Symbol.for("react.portal") : 60106, a = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, d = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, h = t ? Symbol.for("react.suspense") : 60113, T = t ? Symbol.for("react.suspense_list") : 60120, p = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, E = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, m = t ? Symbol.for("react.responder") : 60118, b = t ? Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var D = g.$$typeof;
      switch (D) {
        case n:
          switch (g = g.type, g) {
            case l:
            case d:
            case a:
            case o:
            case i:
            case h:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case f:
                case I:
                case p:
                case u:
                  return g;
                default:
                  return D;
              }
          }
        case s:
          return D;
      }
    }
  }
  function C(g) {
    return S(g) === d;
  }
  return reactIs_production_min.AsyncMode = l, reactIs_production_min.ConcurrentMode = d, reactIs_production_min.ContextConsumer = c, reactIs_production_min.ContextProvider = u, reactIs_production_min.Element = n, reactIs_production_min.ForwardRef = f, reactIs_production_min.Fragment = a, reactIs_production_min.Lazy = I, reactIs_production_min.Memo = p, reactIs_production_min.Portal = s, reactIs_production_min.Profiler = o, reactIs_production_min.StrictMode = i, reactIs_production_min.Suspense = h, reactIs_production_min.isAsyncMode = function(g) {
    return C(g) || S(g) === l;
  }, reactIs_production_min.isConcurrentMode = C, reactIs_production_min.isContextConsumer = function(g) {
    return S(g) === c;
  }, reactIs_production_min.isContextProvider = function(g) {
    return S(g) === u;
  }, reactIs_production_min.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === n;
  }, reactIs_production_min.isForwardRef = function(g) {
    return S(g) === f;
  }, reactIs_production_min.isFragment = function(g) {
    return S(g) === a;
  }, reactIs_production_min.isLazy = function(g) {
    return S(g) === I;
  }, reactIs_production_min.isMemo = function(g) {
    return S(g) === p;
  }, reactIs_production_min.isPortal = function(g) {
    return S(g) === s;
  }, reactIs_production_min.isProfiler = function(g) {
    return S(g) === o;
  }, reactIs_production_min.isStrictMode = function(g) {
    return S(g) === i;
  }, reactIs_production_min.isSuspense = function(g) {
    return S(g) === h;
  }, reactIs_production_min.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === a || g === d || g === o || g === i || g === h || g === T || typeof g == "object" && g !== null && (g.$$typeof === I || g.$$typeof === p || g.$$typeof === u || g.$$typeof === c || g.$$typeof === f || g.$$typeof === _ || g.$$typeof === m || g.$$typeof === b || g.$$typeof === E);
  }, reactIs_production_min.typeOf = S, reactIs_production_min;
}
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  return hasRequiredReactIs_development || (hasRequiredReactIs_development = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, s = t ? Symbol.for("react.portal") : 60106, a = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, d = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, h = t ? Symbol.for("react.suspense") : 60113, T = t ? Symbol.for("react.suspense_list") : 60120, p = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, E = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, m = t ? Symbol.for("react.responder") : 60118, b = t ? Symbol.for("react.scope") : 60119;
    function S(G) {
      return typeof G == "string" || typeof G == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      G === a || G === d || G === o || G === i || G === h || G === T || typeof G == "object" && G !== null && (G.$$typeof === I || G.$$typeof === p || G.$$typeof === u || G.$$typeof === c || G.$$typeof === f || G.$$typeof === _ || G.$$typeof === m || G.$$typeof === b || G.$$typeof === E);
    }
    function C(G) {
      if (typeof G == "object" && G !== null) {
        var Te = G.$$typeof;
        switch (Te) {
          case n:
            var ge = G.type;
            switch (ge) {
              case l:
              case d:
              case a:
              case o:
              case i:
              case h:
                return ge;
              default:
                var fe = ge && ge.$$typeof;
                switch (fe) {
                  case c:
                  case f:
                  case I:
                  case p:
                  case u:
                    return fe;
                  default:
                    return Te;
                }
            }
          case s:
            return Te;
        }
      }
    }
    var g = l, D = d, N = c, R = u, P = n, v = f, x = a, Y = I, w = p, q = s, K = o, U = i, J = h, ee = !1;
    function _e(G) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(G) || C(G) === l;
    }
    function y(G) {
      return C(G) === d;
    }
    function F(G) {
      return C(G) === c;
    }
    function H(G) {
      return C(G) === u;
    }
    function j(G) {
      return typeof G == "object" && G !== null && G.$$typeof === n;
    }
    function Q(G) {
      return C(G) === f;
    }
    function z(G) {
      return C(G) === a;
    }
    function X(G) {
      return C(G) === I;
    }
    function te(G) {
      return C(G) === p;
    }
    function re(G) {
      return C(G) === s;
    }
    function ae(G) {
      return C(G) === o;
    }
    function ne(G) {
      return C(G) === i;
    }
    function de(G) {
      return C(G) === h;
    }
    reactIs_development.AsyncMode = g, reactIs_development.ConcurrentMode = D, reactIs_development.ContextConsumer = N, reactIs_development.ContextProvider = R, reactIs_development.Element = P, reactIs_development.ForwardRef = v, reactIs_development.Fragment = x, reactIs_development.Lazy = Y, reactIs_development.Memo = w, reactIs_development.Portal = q, reactIs_development.Profiler = K, reactIs_development.StrictMode = U, reactIs_development.Suspense = J, reactIs_development.isAsyncMode = _e, reactIs_development.isConcurrentMode = y, reactIs_development.isContextConsumer = F, reactIs_development.isContextProvider = H, reactIs_development.isElement = j, reactIs_development.isForwardRef = Q, reactIs_development.isFragment = z, reactIs_development.isLazy = X, reactIs_development.isMemo = te, reactIs_development.isPortal = re, reactIs_development.isProfiler = ae, reactIs_development.isStrictMode = ne, reactIs_development.isSuspense = de, reactIs_development.isValidElementType = S, reactIs_development.typeOf = C;
  }()), reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
  return hasRequiredReactIs || (hasRequiredReactIs = 1, process.env.NODE_ENV === "production" ? reactIs.exports = requireReactIs_production_min() : reactIs.exports = requireReactIs_development()), reactIs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign, hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
  function a(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var u = {}, c = 0; c < 10; c++)
        u["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(u).map(function(f) {
        return u[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return objectAssign = i() ? Object.assign : function(o, u) {
    for (var c, l = a(o), d, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var h in c)
        n.call(c, h) && (l[h] = c[h]);
      if (t) {
        d = t(c);
        for (var T = 0; T < d.length; T++)
          s.call(c, d[T]) && (l[d[T]] = c[d[T]]);
      }
    }
    return l;
  }, objectAssign;
}
var ReactPropTypesSecret_1, hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ReactPropTypesSecret_1 = t, ReactPropTypesSecret_1;
}
var has$1, hasRequiredHas;
function requireHas() {
  return hasRequiredHas || (hasRequiredHas = 1, has$1 = Function.call.bind(Object.prototype.hasOwnProperty)), has$1;
}
var checkPropTypes_1, hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = requireReactPropTypesSecret(), s = {}, a = requireHas();
    t = function(o) {
      var u = "Warning: " + o;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function i(o, u, c, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (a(o, f)) {
          var h;
          try {
            if (typeof o[f] != "function") {
              var T = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw T.name = "Invariant Violation", T;
            }
            h = o[f](u, f, l, c, null, n);
          } catch (I) {
            h = I;
          }
          if (h && !(h instanceof Error) && t(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in s)) {
            s[h.message] = !0;
            var p = d ? d() : "";
            t(
              "Failed " + c + " type: " + h.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (s = {});
  }, checkPropTypes_1 = i, checkPropTypes_1;
}
var factoryWithTypeCheckers, hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var t = requireReactIs(), n = requireObjectAssign(), s = requireReactPropTypesSecret(), a = requireHas(), i = requireCheckPropTypes(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return factoryWithTypeCheckers = function(c, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(y) {
      var F = y && (d && y[d] || y[f]);
      if (typeof F == "function")
        return F;
    }
    var T = "<<anonymous>>", p = {
      array: m("array"),
      bigint: m("bigint"),
      bool: m("boolean"),
      func: m("function"),
      number: m("number"),
      object: m("object"),
      string: m("string"),
      symbol: m("symbol"),
      any: b(),
      arrayOf: S,
      element: C(),
      elementType: g(),
      instanceOf: D,
      node: v(),
      objectOf: R,
      oneOf: N,
      oneOfType: P,
      shape: Y,
      exact: w
    };
    function I(y, F) {
      return y === F ? y !== 0 || 1 / y === 1 / F : y !== y && F !== F;
    }
    function E(y, F) {
      this.message = y, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function _(y) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, H = 0;
      function j(z, X, te, re, ae, ne, de) {
        if (re = re || T, ne = ne || te, de !== s) {
          if (l) {
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Te = re + ":" + te;
            !F[Te] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[Te] = !0, H++);
          }
        }
        return X[te] == null ? z ? X[te] === null ? new E("The " + ae + " `" + ne + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new E("The " + ae + " `" + ne + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : y(X, te, re, ae, ne);
      }
      var Q = j.bind(null, !1);
      return Q.isRequired = j.bind(null, !0), Q;
    }
    function m(y) {
      function F(H, j, Q, z, X, te) {
        var re = H[j], ae = U(re);
        if (ae !== y) {
          var ne = J(re);
          return new E(
            "Invalid " + z + " `" + X + "` of type " + ("`" + ne + "` supplied to `" + Q + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return _(F);
    }
    function b() {
      return _(u);
    }
    function S(y) {
      function F(H, j, Q, z, X) {
        if (typeof y != "function")
          return new E("Property `" + X + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var te = H[j];
        if (!Array.isArray(te)) {
          var re = U(te);
          return new E("Invalid " + z + " `" + X + "` of type " + ("`" + re + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var ae = 0; ae < te.length; ae++) {
          var ne = y(te, ae, Q, z, X + "[" + ae + "]", s);
          if (ne instanceof Error)
            return ne;
        }
        return null;
      }
      return _(F);
    }
    function C() {
      function y(F, H, j, Q, z) {
        var X = F[H];
        if (!c(X)) {
          var te = U(X);
          return new E("Invalid " + Q + " `" + z + "` of type " + ("`" + te + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(y);
    }
    function g() {
      function y(F, H, j, Q, z) {
        var X = F[H];
        if (!t.isValidElementType(X)) {
          var te = U(X);
          return new E("Invalid " + Q + " `" + z + "` of type " + ("`" + te + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(y);
    }
    function D(y) {
      function F(H, j, Q, z, X) {
        if (!(H[j] instanceof y)) {
          var te = y.name || T, re = _e(H[j]);
          return new E("Invalid " + z + " `" + X + "` of type " + ("`" + re + "` supplied to `" + Q + "`, expected ") + ("instance of `" + te + "`."));
        }
        return null;
      }
      return _(F);
    }
    function N(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), u;
      function F(H, j, Q, z, X) {
        for (var te = H[j], re = 0; re < y.length; re++)
          if (I(te, y[re]))
            return null;
        var ae = JSON.stringify(y, function(de, G) {
          var Te = J(G);
          return Te === "symbol" ? String(G) : G;
        });
        return new E("Invalid " + z + " `" + X + "` of value `" + String(te) + "` " + ("supplied to `" + Q + "`, expected one of " + ae + "."));
      }
      return _(F);
    }
    function R(y) {
      function F(H, j, Q, z, X) {
        if (typeof y != "function")
          return new E("Property `" + X + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var te = H[j], re = U(te);
        if (re !== "object")
          return new E("Invalid " + z + " `" + X + "` of type " + ("`" + re + "` supplied to `" + Q + "`, expected an object."));
        for (var ae in te)
          if (a(te, ae)) {
            var ne = y(te, ae, Q, z, X + "." + ae, s);
            if (ne instanceof Error)
              return ne;
          }
        return null;
      }
      return _(F);
    }
    function P(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var F = 0; F < y.length; F++) {
        var H = y[F];
        if (typeof H != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(H) + " at index " + F + "."
          ), u;
      }
      function j(Q, z, X, te, re) {
        for (var ae = [], ne = 0; ne < y.length; ne++) {
          var de = y[ne], G = de(Q, z, X, te, re, s);
          if (G == null)
            return null;
          G.data && a(G.data, "expectedType") && ae.push(G.data.expectedType);
        }
        var Te = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new E("Invalid " + te + " `" + re + "` supplied to " + ("`" + X + "`" + Te + "."));
      }
      return _(j);
    }
    function v() {
      function y(F, H, j, Q, z) {
        return q(F[H]) ? null : new E("Invalid " + Q + " `" + z + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return _(y);
    }
    function x(y, F, H, j, Q) {
      return new E(
        (y || "React class") + ": " + F + " type `" + H + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function Y(y) {
      function F(H, j, Q, z, X) {
        var te = H[j], re = U(te);
        if (re !== "object")
          return new E("Invalid " + z + " `" + X + "` of type `" + re + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var ae in y) {
          var ne = y[ae];
          if (typeof ne != "function")
            return x(Q, z, X, ae, J(ne));
          var de = ne(te, ae, Q, z, X + "." + ae, s);
          if (de)
            return de;
        }
        return null;
      }
      return _(F);
    }
    function w(y) {
      function F(H, j, Q, z, X) {
        var te = H[j], re = U(te);
        if (re !== "object")
          return new E("Invalid " + z + " `" + X + "` of type `" + re + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var ae = n({}, H[j], y);
        for (var ne in ae) {
          var de = y[ne];
          if (a(y, ne) && typeof de != "function")
            return x(Q, z, X, ne, J(de));
          if (!de)
            return new E(
              "Invalid " + z + " `" + X + "` key `" + ne + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(H[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var G = de(te, ne, Q, z, X + "." + ne, s);
          if (G)
            return G;
        }
        return null;
      }
      return _(F);
    }
    function q(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(q);
          if (y === null || c(y))
            return !0;
          var F = h(y);
          if (F) {
            var H = F.call(y), j;
            if (F !== y.entries) {
              for (; !(j = H.next()).done; )
                if (!q(j.value))
                  return !1;
            } else
              for (; !(j = H.next()).done; ) {
                var Q = j.value;
                if (Q && !q(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(y, F) {
      return y === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function U(y) {
      var F = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : K(F, y) ? "symbol" : F;
    }
    function J(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var F = U(y);
      if (F === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function ee(y) {
      var F = J(y);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function _e(y) {
      return !y.constructor || !y.constructor.name ? T : y.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, factoryWithTypeCheckers;
}
var factoryWithThrowingShims, hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var t = requireReactPropTypesSecret();
  function n() {
  }
  function s() {
  }
  return s.resetWarningCache = n, factoryWithThrowingShims = function() {
    function a(u, c, l, d, f, h) {
      if (h !== t) {
        var T = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw T.name = "Invariant Violation", T;
      }
    }
    a.isRequired = a;
    function i() {
      return a;
    }
    var o = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: i,
      element: a,
      elementType: a,
      instanceOf: i,
      node: a,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: s,
      resetWarningCache: n
    };
    return o.PropTypes = o, o;
  }, factoryWithThrowingShims;
}
if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs(), throwOnDirectAccess = !0;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else
  propTypes.exports = requireFactoryWithThrowingShims()();
var propTypesExports = propTypes.exports;
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports), COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(t, n) {
  const s = withMimeType(t);
  if (typeof s.path != "string") {
    const { webkitRelativePath: a } = t;
    Object.defineProperty(s, "path", {
      value: typeof n == "string" ? n : (
        // If <input webkitdirectory> is set,
        // the File will have a {webkitRelativePath} property
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
        typeof a == "string" && a.length > 0 ? a : t.name
      ),
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return s;
}
function withMimeType(t) {
  const { name: n } = t;
  if (n && n.lastIndexOf(".") !== -1 && !t.type) {
    const a = n.split(".").pop().toLowerCase(), i = COMMON_MIME_TYPES.get(a);
    i && Object.defineProperty(t, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var __async = (t, n, s) => new Promise((a, i) => {
  var o = (l) => {
    try {
      c(s.next(l));
    } catch (d) {
      i(d);
    }
  }, u = (l) => {
    try {
      c(s.throw(l));
    } catch (d) {
      i(d);
    }
  }, c = (l) => l.done ? a(l.value) : Promise.resolve(l.value).then(o, u);
  c((s = s.apply(t, n)).next());
});
const FILES_TO_IGNORE = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function fromEvent(t) {
  return __async(this, null, function* () {
    return isObject(t) && isDataTransfer(t.dataTransfer) ? getDataTransferFiles(t.dataTransfer, t.type) : isChangeEvt(t) ? getInputFiles(t) : Array.isArray(t) && t.every((n) => "getFile" in n && typeof n.getFile == "function") ? getFsHandleFiles(t) : [];
  });
}
function isDataTransfer(t) {
  return isObject(t);
}
function isChangeEvt(t) {
  return isObject(t) && isObject(t.target);
}
function isObject(t) {
  return typeof t == "object" && t !== null;
}
function getInputFiles(t) {
  return fromList(t.target.files).map((n) => toFileWithPath(n));
}
function getFsHandleFiles(t) {
  return __async(this, null, function* () {
    return (yield Promise.all(t.map((s) => s.getFile()))).map((s) => toFileWithPath(s));
  });
}
function getDataTransferFiles(t, n) {
  return __async(this, null, function* () {
    if (t.items) {
      const s = fromList(t.items).filter((i) => i.kind === "file");
      if (n !== "drop")
        return s;
      const a = yield Promise.all(s.map(toFilePromises));
      return noIgnoredFiles(flatten$1(a));
    }
    return noIgnoredFiles(fromList(t.files).map((s) => toFileWithPath(s)));
  });
}
function noIgnoredFiles(t) {
  return t.filter((n) => FILES_TO_IGNORE.indexOf(n.name) === -1);
}
function fromList(t) {
  if (t === null)
    return [];
  const n = [];
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    n.push(a);
  }
  return n;
}
function toFilePromises(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return fromDataTransferItem(t);
  const n = t.webkitGetAsEntry();
  return n && n.isDirectory ? fromDirEntry(n) : fromDataTransferItem(t);
}
function flatten$1(t) {
  return t.reduce(
    (n, s) => [
      ...n,
      ...Array.isArray(s) ? flatten$1(s) : [s]
    ],
    []
  );
}
function fromDataTransferItem(t) {
  const n = t.getAsFile();
  if (!n)
    return Promise.reject(`${t} is not a File`);
  const s = toFileWithPath(n);
  return Promise.resolve(s);
}
function fromEntry(t) {
  return __async(this, null, function* () {
    return t.isDirectory ? fromDirEntry(t) : fromFileEntry(t);
  });
}
function fromDirEntry(t) {
  const n = t.createReader();
  return new Promise((s, a) => {
    const i = [];
    function o() {
      n.readEntries(
        (u) => __async(this, null, function* () {
          if (u.length) {
            const c = Promise.all(u.map(fromEntry));
            i.push(c), o();
          } else
            try {
              const c = yield Promise.all(i);
              s(c);
            } catch (c) {
              a(c);
            }
        }),
        (u) => {
          a(u);
        }
      );
    }
    o();
  });
}
function fromFileEntry(t) {
  return __async(this, null, function* () {
    return new Promise((n, s) => {
      t.file(
        (a) => {
          const i = toFileWithPath(a, t.fullPath);
          n(i);
        },
        (a) => {
          s(a);
        }
      );
    });
  });
}
function accepts(t, n) {
  if (t && n) {
    const s = Array.isArray(n) ? n : n.split(","), a = t.name || "", i = (t.type || "").toLowerCase(), o = i.replace(/\/.*$/, "");
    return s.some((u) => {
      const c = u.trim().toLowerCase();
      return c.charAt(0) === "." ? a.toLowerCase().endsWith(c) : c.endsWith("/*") ? o === c.replace(/\/.*$/, "") : i === c;
    });
  }
  return !0;
}
var __defProp$1 = Object.defineProperty, __defProps$1 = Object.defineProperties, __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __defNormalProp$1 = (t, n, s) => n in t ? __defProp$1(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[n] = s, __spreadValues$1 = (t, n) => {
  for (var s in n || (n = {}))
    __hasOwnProp$1.call(n, s) && __defNormalProp$1(t, s, n[s]);
  if (__getOwnPropSymbols$1)
    for (var s of __getOwnPropSymbols$1(n))
      __propIsEnum$1.call(n, s) && __defNormalProp$1(t, s, n[s]);
  return t;
}, __spreadProps$1 = (t, n) => __defProps$1(t, __getOwnPropDescs$1(n));
const FILE_INVALID_TYPE = "file-invalid-type", FILE_TOO_LARGE = "file-too-large", FILE_TOO_SMALL = "file-too-small", TOO_MANY_FILES = "too-many-files", getInvalidTypeRejectionErr = (t) => {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  const n = Array.isArray(t) ? `one of ${t.join(", ")}` : t;
  return {
    code: FILE_INVALID_TYPE,
    message: `File type must be ${n}`
  };
}, getTooLargeRejectionErr = (t) => ({
  code: FILE_TOO_LARGE,
  message: `File is larger than ${t} ${t === 1 ? "byte" : "bytes"}`
}), getTooSmallRejectionErr = (t) => ({
  code: FILE_TOO_SMALL,
  message: `File is smaller than ${t} ${t === 1 ? "byte" : "bytes"}`
}), TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(t, n) {
  const s = t.type === "application/x-moz-file" || accepts(t, n);
  return [
    s,
    s ? null : getInvalidTypeRejectionErr(n)
  ];
}
function fileMatchSize(t, n, s) {
  if (isDefined(t.size))
    if (isDefined(n) && isDefined(s)) {
      if (t.size > s)
        return [!1, getTooLargeRejectionErr(s)];
      if (t.size < n)
        return [!1, getTooSmallRejectionErr(n)];
    } else {
      if (isDefined(n) && t.size < n)
        return [!1, getTooSmallRejectionErr(n)];
      if (isDefined(s) && t.size > s)
        return [!1, getTooLargeRejectionErr(s)];
    }
  return [!0, null];
}
function isDefined(t) {
  return t != null;
}
function allFilesAccepted({
  files: t,
  accept: n,
  minSize: s,
  maxSize: a,
  multiple: i,
  maxFiles: o,
  validator: u
}) {
  return !i && t.length > 1 || i && o >= 1 && t.length > o ? !1 : t.every((c) => {
    const [l] = fileAccepted(c, n), [d] = fileMatchSize(c, s, a), f = u ? u(c) : null;
    return l && d && !f;
  });
}
function isPropagationStopped(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
function isEvtWithFiles(t) {
  return t.dataTransfer ? Array.prototype.some.call(
    t.dataTransfer.types,
    (n) => n === "Files" || n === "application/x-moz-file"
  ) : !!t.target && !!t.target.files;
}
function onDocumentDragOver(t) {
  t.preventDefault();
}
function isIe(t) {
  return t.indexOf("MSIE") !== -1 || t.indexOf("Trident/") !== -1;
}
function isEdge(t) {
  return t.indexOf("Edge/") !== -1;
}
function isIeOrEdge(t = window.navigator.userAgent) {
  return isIe(t) || isEdge(t);
}
function composeEventHandlers(...t) {
  return (n, ...s) => t.some((a) => (!isPropagationStopped(n) && a && a(n, ...s), isPropagationStopped(n)));
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function pickerOptionsFromAccept(t) {
  return isDefined(t) ? [
    {
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: Object.entries(t).filter(([s, a]) => {
        let i = !0;
        return isMIMEType(s) || (console.warn(
          `Skipped "${s}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`
        ), i = !1), (!Array.isArray(a) || !a.every(isExt)) && (console.warn(
          `Skipped "${s}" because an invalid file extension was provided.`
        ), i = !1), i;
      }).reduce(
        (s, [a, i]) => __spreadProps$1(__spreadValues$1({}, s), {
          [a]: i
        }),
        {}
      )
    }
  ] : t;
}
function acceptPropAsAcceptAttr(t) {
  if (isDefined(t))
    return Object.entries(t).reduce((n, [s, a]) => [...n, s, ...a], []).filter((n) => isMIMEType(n) || isExt(n)).join(",");
}
function isAbort(t) {
  return t instanceof DOMException && (t.name === "AbortError" || t.code === t.ABORT_ERR);
}
function isSecurityError(t) {
  return t instanceof DOMException && (t.name === "SecurityError" || t.code === t.SECURITY_ERR);
}
function isMIMEType(t) {
  return t === "audio/*" || t === "video/*" || t === "image/*" || t === "text/*" || /\w+\/[-+.\w]+/g.test(t);
}
function isExt(t) {
  return /^.*\.[\w]+$/.test(t);
}
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (t, n, s) => n in t ? __defProp(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[n] = s, __spreadValues = (t, n) => {
  for (var s in n || (n = {}))
    __hasOwnProp.call(n, s) && __defNormalProp(t, s, n[s]);
  if (__getOwnPropSymbols)
    for (var s of __getOwnPropSymbols(n))
      __propIsEnum.call(n, s) && __defNormalProp(t, s, n[s]);
  return t;
}, __spreadProps = (t, n) => __defProps(t, __getOwnPropDescs(n)), __objRest = (t, n) => {
  var s = {};
  for (var a in t)
    __hasOwnProp.call(t, a) && n.indexOf(a) < 0 && (s[a] = t[a]);
  if (t != null && __getOwnPropSymbols)
    for (var a of __getOwnPropSymbols(t))
      n.indexOf(a) < 0 && __propIsEnum.call(t, a) && (s[a] = t[a]);
  return s;
};
const Dropzone$2 = forwardRef((t, n) => {
  var s = t, { children: a } = s, i = __objRest(s, ["children"]);
  const o = useDropzone(i), { open: u } = o, c = __objRest(o, ["open"]);
  return useImperativeHandle(n, () => ({ open: u }), [u]), /* @__PURE__ */ React.createElement(Fragment, null, a(__spreadProps(__spreadValues({}, c), { open: u })));
});
Dropzone$2.displayName = "Dropzone";
const defaultProps$2 = {
  disabled: !1,
  getFilesFromEvent: fromEvent,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
  autoFocus: !1
};
Dropzone$2.defaultProps = defaultProps$2;
Dropzone$2.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: PropTypes.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: PropTypes.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: PropTypes.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: PropTypes.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: PropTypes.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: PropTypes.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: PropTypes.func
};
const initialState = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone(t = {}) {
  const {
    accept: n,
    disabled: s,
    getFilesFromEvent: a,
    maxSize: i,
    minSize: o,
    multiple: u,
    maxFiles: c,
    onDragEnter: l,
    onDragLeave: d,
    onDragOver: f,
    onDrop: h,
    onDropAccepted: T,
    onDropRejected: p,
    onFileDialogCancel: I,
    onFileDialogOpen: E,
    useFsAccessApi: _,
    autoFocus: m,
    preventDropOnDocument: b,
    noClick: S,
    noKeyboard: C,
    noDrag: g,
    noDragEventsBubbling: D,
    onError: N,
    validator: R
  } = __spreadValues(__spreadValues({}, defaultProps$2), t), P = useMemo(() => acceptPropAsAcceptAttr(n), [n]), v = useMemo(() => pickerOptionsFromAccept(n), [n]), x = useMemo(
    () => typeof E == "function" ? E : noop,
    [E]
  ), Y = useMemo(
    () => typeof I == "function" ? I : noop,
    [I]
  ), w = useRef(null), q = useRef(null), [K, U] = useReducer(reducer, initialState), { isFocused: J, isFileDialogActive: ee } = K, _e = useRef(
    typeof window < "u" && window.isSecureContext && _ && canUseFileSystemAccessAPI()
  ), y = () => {
    !_e.current && ee && setTimeout(() => {
      if (q.current) {
        const { files: W } = q.current;
        W.length || (U({ type: "closeDialog" }), Y());
      }
    }, 300);
  };
  useEffect(() => (window.addEventListener("focus", y, !1), () => {
    window.removeEventListener("focus", y, !1);
  }), [q, ee, Y, _e]);
  const F = useRef([]), H = (W) => {
    w.current && w.current.contains(W.target) || (W.preventDefault(), F.current = []);
  };
  useEffect(() => (b && (document.addEventListener("dragover", onDocumentDragOver, !1), document.addEventListener("drop", H, !1)), () => {
    b && (document.removeEventListener("dragover", onDocumentDragOver), document.removeEventListener("drop", H));
  }), [w, b]), useEffect(() => (!s && m && w.current && w.current.focus(), () => {
  }), [w, m, s]);
  const j = useCallback(
    (W) => {
      N ? N(W) : console.error(W);
    },
    [N]
  ), Q = useCallback(
    (W) => {
      W.preventDefault(), W.persist(), xe(W), F.current = [...F.current, W.target], isEvtWithFiles(W) && Promise.resolve(a(W)).then((oe) => {
        if (isPropagationStopped(W) && !D)
          return;
        const me = oe.length, be = me > 0 && allFilesAccepted({
          files: oe,
          accept: P,
          minSize: o,
          maxSize: i,
          multiple: u,
          maxFiles: c,
          validator: R
        }), Ce = me > 0 && !be;
        U({
          isDragAccept: be,
          isDragReject: Ce,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(W);
      }).catch((oe) => j(oe));
    },
    [
      a,
      l,
      j,
      D,
      P,
      o,
      i,
      u,
      c,
      R
    ]
  ), z = useCallback(
    (W) => {
      W.preventDefault(), W.persist(), xe(W);
      const oe = isEvtWithFiles(W);
      if (oe && W.dataTransfer)
        try {
          W.dataTransfer.dropEffect = "copy";
        } catch {
        }
      return oe && f && f(W), !1;
    },
    [f, D]
  ), X = useCallback(
    (W) => {
      W.preventDefault(), W.persist(), xe(W);
      const oe = F.current.filter(
        (be) => w.current && w.current.contains(be)
      ), me = oe.indexOf(W.target);
      me !== -1 && oe.splice(me, 1), F.current = oe, !(oe.length > 0) && (U({
        type: "setDraggedFiles",
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1
      }), isEvtWithFiles(W) && d && d(W));
    },
    [w, d, D]
  ), te = useCallback(
    (W, oe) => {
      const me = [], be = [];
      W.forEach((Ce) => {
        const [Le, Se] = fileAccepted(Ce, P), [Me, Fe] = fileMatchSize(Ce, o, i), Pe = R ? R(Ce) : null;
        if (Le && Me && !Pe)
          me.push(Ce);
        else {
          let we = [Se, Fe];
          Pe && (we = we.concat(Pe)), be.push({ file: Ce, errors: we.filter((Be) => Be) });
        }
      }), (!u && me.length > 1 || u && c >= 1 && me.length > c) && (me.forEach((Ce) => {
        be.push({ file: Ce, errors: [TOO_MANY_FILES_REJECTION] });
      }), me.splice(0)), U({
        acceptedFiles: me,
        fileRejections: be,
        type: "setFiles"
      }), h && h(me, be, oe), be.length > 0 && p && p(be, oe), me.length > 0 && T && T(me, oe);
    },
    [
      U,
      u,
      P,
      o,
      i,
      c,
      h,
      T,
      p,
      R
    ]
  ), re = useCallback(
    (W) => {
      W.preventDefault(), W.persist(), xe(W), F.current = [], isEvtWithFiles(W) && Promise.resolve(a(W)).then((oe) => {
        isPropagationStopped(W) && !D || te(oe, W);
      }).catch((oe) => j(oe)), U({ type: "reset" });
    },
    [a, te, j, D]
  ), ae = useCallback(() => {
    if (_e.current) {
      U({ type: "openDialog" }), x();
      const W = {
        multiple: u,
        types: v
      };
      window.showOpenFilePicker(W).then((oe) => a(oe)).then((oe) => {
        te(oe, null), U({ type: "closeDialog" });
      }).catch((oe) => {
        isAbort(oe) ? (Y(oe), U({ type: "closeDialog" })) : isSecurityError(oe) ? (_e.current = !1, q.current ? (q.current.value = null, q.current.click()) : j(
          new Error(
            "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."
          )
        )) : j(oe);
      });
      return;
    }
    q.current && (U({ type: "openDialog" }), x(), q.current.value = null, q.current.click());
  }, [
    U,
    x,
    Y,
    _,
    te,
    j,
    v,
    u
  ]), ne = useCallback(
    (W) => {
      !w.current || !w.current.isEqualNode(W.target) || (W.key === " " || W.key === "Enter" || W.keyCode === 32 || W.keyCode === 13) && (W.preventDefault(), ae());
    },
    [w, ae]
  ), de = useCallback(() => {
    U({ type: "focus" });
  }, []), G = useCallback(() => {
    U({ type: "blur" });
  }, []), Te = useCallback(() => {
    S || (isIeOrEdge() ? setTimeout(ae, 0) : ae());
  }, [S, ae]), ge = (W) => s ? null : W, fe = (W) => C ? null : ge(W), pe = (W) => g ? null : ge(W), xe = (W) => {
    D && W.stopPropagation();
  }, ke = useMemo(
    () => (W = {}) => {
      var oe = W, {
        refKey: me = "ref",
        role: be,
        onKeyDown: Ce,
        onFocus: Le,
        onBlur: Se,
        onClick: Me,
        onDragEnter: Fe,
        onDragOver: Pe,
        onDragLeave: we,
        onDrop: Be
      } = oe, je = __objRest(oe, [
        "refKey",
        "role",
        "onKeyDown",
        "onFocus",
        "onBlur",
        "onClick",
        "onDragEnter",
        "onDragOver",
        "onDragLeave",
        "onDrop"
      ]);
      return __spreadValues(__spreadValues({
        onKeyDown: fe(
          composeEventHandlers(Ce, ne)
        ),
        onFocus: fe(
          composeEventHandlers(Le, de)
        ),
        onBlur: fe(composeEventHandlers(Se, G)),
        onClick: ge(composeEventHandlers(Me, Te)),
        onDragEnter: pe(
          composeEventHandlers(Fe, Q)
        ),
        onDragOver: pe(
          composeEventHandlers(Pe, z)
        ),
        onDragLeave: pe(
          composeEventHandlers(we, X)
        ),
        onDrop: pe(composeEventHandlers(Be, re)),
        role: typeof be == "string" && be !== "" ? be : "presentation",
        [me]: w
      }, !s && !C ? { tabIndex: 0 } : {}), je);
    },
    [
      w,
      ne,
      de,
      G,
      Te,
      Q,
      z,
      X,
      re,
      C,
      g,
      s
    ]
  ), ve = useCallback((W) => {
    W.stopPropagation();
  }, []), He = useMemo(
    () => (W = {}) => {
      var oe = W, { refKey: me = "ref", onChange: be, onClick: Ce } = oe, Le = __objRest(oe, ["refKey", "onChange", "onClick"]);
      const Se = {
        accept: P,
        multiple: u,
        type: "file",
        style: { display: "none" },
        onChange: ge(composeEventHandlers(be, re)),
        onClick: ge(
          composeEventHandlers(Ce, ve)
        ),
        tabIndex: -1,
        [me]: q
      };
      return __spreadValues(__spreadValues({}, Se), Le);
    },
    [q, n, u, re, s]
  );
  return __spreadProps(__spreadValues({}, K), {
    isFocused: J && !s,
    getRootProps: ke,
    getInputProps: He,
    rootRef: w,
    inputRef: q,
    open: ge(ae)
  });
}
function reducer(t, n) {
  switch (n.type) {
    case "focus":
      return __spreadProps(__spreadValues({}, t), {
        isFocused: !0
      });
    case "blur":
      return __spreadProps(__spreadValues({}, t), {
        isFocused: !1
      });
    case "openDialog":
      return __spreadProps(__spreadValues({}, initialState), {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return __spreadProps(__spreadValues({}, t), {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return __spreadProps(__spreadValues({}, t), {
        isDragActive: n.isDragActive,
        isDragAccept: n.isDragAccept,
        isDragReject: n.isDragReject
      });
    case "setFiles":
      return __spreadProps(__spreadValues({}, t), {
        acceptedFiles: n.acceptedFiles,
        fileRejections: n.fileRejections
      });
    case "reset":
      return __spreadValues({}, initialState);
    default:
      return t;
  }
}
function noop() {
}
const [DropzoneProvider, useDropzoneContext] = createSafeContext(
  "Dropzone component was not found in tree"
);
function createDropzoneStatus(t) {
  const n = (s) => {
    const { children: a, ...i } = useProps(`Dropzone${upperFirst(t)}`, {}, s), o = useDropzoneContext(), u = isElement(a) ? a : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a });
    return o[t] ? cloneElement(u, i) : null;
  };
  return n.displayName = `@mantine/dropzone/${upperFirst(t)}`, n;
}
const DropzoneAccept = createDropzoneStatus("accept"), DropzoneReject = createDropzoneStatus("reject"), DropzoneIdle = createDropzoneStatus("idle");
var classes = { root: "m_d46a4834", inner: "m_b85f7144", fullScreen: "m_96f6e9ad", dropzone: "m_7946116d" };
const defaultProps$1 = {
  loading: !1,
  multiple: !0,
  maxSize: 1 / 0,
  autoFocus: !1,
  activateOnClick: !0,
  activateOnDrag: !0,
  dragEventsBubbling: !0,
  activateOnKeyboard: !0,
  useFsAccessApi: !0,
  variant: "light",
  rejectColor: "red"
}, varsResolver = (t, { radius: n, variant: s, acceptColor: a, rejectColor: i }) => {
  const o = t.variantColorResolver({
    color: a || t.primaryColor,
    theme: t,
    variant: s
  }), u = t.variantColorResolver({
    color: i || "red",
    theme: t,
    variant: s
  });
  return {
    root: {
      "--dropzone-radius": getRadius(n),
      "--dropzone-accept-color": o.color,
      "--dropzone-accept-bg": o.background,
      "--dropzone-reject-color": u.color,
      "--dropzone-reject-bg": u.background
    }
  };
}, Dropzone$1 = factory((t, n) => {
  const s = useProps("Dropzone", defaultProps$1, t), {
    classNames: a,
    className: i,
    style: o,
    styles: u,
    unstyled: c,
    vars: l,
    radius: d,
    disabled: f,
    loading: h,
    multiple: T,
    maxSize: p,
    accept: I,
    children: E,
    onDropAny: _,
    onDrop: m,
    onReject: b,
    openRef: S,
    name: C,
    maxFiles: g,
    autoFocus: D,
    activateOnClick: N,
    activateOnDrag: R,
    dragEventsBubbling: P,
    activateOnKeyboard: v,
    onDragEnter: x,
    onDragLeave: Y,
    onDragOver: w,
    onFileDialogCancel: q,
    onFileDialogOpen: K,
    preventDropOnDocument: U,
    useFsAccessApi: J,
    getFilesFromEvent: ee,
    validator: _e,
    rejectColor: y,
    acceptColor: F,
    enablePointerEvents: H,
    loaderProps: j,
    inputProps: Q,
    mod: z,
    ...X
  } = s, te = useStyles({
    name: "Dropzone",
    classes,
    props: s,
    className: i,
    style: o,
    classNames: a,
    styles: u,
    unstyled: c,
    vars: l,
    varsResolver
  }), { getRootProps: re, getInputProps: ae, isDragAccept: ne, isDragReject: de, open: G } = useDropzone({
    onDrop: _,
    onDropAccepted: m,
    onDropRejected: b,
    disabled: f || h,
    accept: Array.isArray(I) ? I.reduce((ge, fe) => ({ ...ge, [fe]: [] }), {}) : I,
    multiple: T,
    maxSize: p,
    maxFiles: g,
    autoFocus: D,
    noClick: !N,
    noDrag: !R,
    noDragEventsBubbling: !P,
    noKeyboard: !v,
    onDragEnter: x,
    onDragLeave: Y,
    onDragOver: w,
    onFileDialogCancel: q,
    onFileDialogOpen: K,
    preventDropOnDocument: U,
    useFsAccessApi: J,
    validator: _e,
    ...ee ? { getFilesFromEvent: ee } : null
  });
  assignRef(S, G);
  const Te = !ne && !de;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DropzoneProvider, { value: { accept: ne, reject: de, idle: Te }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      ...re(),
      ...te("root", { focusable: !0 }),
      ...X,
      mod: [
        {
          accept: ne,
          reject: de,
          idle: Te,
          loading: h,
          "activate-on-click": N
        },
        z
      ],
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingOverlay,
          {
            visible: h,
            overlayProps: { radius: d },
            unstyled: c,
            loaderProps: j
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...ae(Q), name: C }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ...te("inner"),
            ref: n,
            "data-enable-pointer-events": H || void 0,
            children: E
          }
        )
      ]
    }
  ) });
});
Dropzone$1.classes = classes;
Dropzone$1.displayName = "@mantine/dropzone/Dropzone";
Dropzone$1.Accept = DropzoneAccept;
Dropzone$1.Idle = DropzoneIdle;
Dropzone$1.Reject = DropzoneReject;
const defaultProps = {
  loading: !1,
  maxSize: 1 / 0,
  activateOnClick: !1,
  activateOnDrag: !0,
  dragEventsBubbling: !0,
  activateOnKeyboard: !0,
  active: !0,
  zIndex: getDefaultZIndex("max"),
  withinPortal: !0
}, DropzoneFullScreen = factory((t, n) => {
  const s = useProps("DropzoneFullScreen", defaultProps, t), {
    classNames: a,
    className: i,
    style: o,
    styles: u,
    unstyled: c,
    vars: l,
    active: d,
    onDrop: f,
    onReject: h,
    zIndex: T,
    withinPortal: p,
    portalProps: I,
    ...E
  } = s, _ = useStyles({
    name: "DropzoneFullScreen",
    classes,
    props: s,
    className: i,
    style: o,
    classNames: a,
    styles: u,
    unstyled: c,
    rootSelector: "fullScreen"
  }), { resolvedClassNames: m, resolvedStyles: b } = useResolvedStylesApi({
    classNames: a,
    styles: u,
    props: s
  }), [S, C] = useState(0), [g, { open: D, close: N }] = useDisclosure(!1), R = (v) => {
    var x;
    (x = v.dataTransfer) != null && x.types.includes("Files") && (C((Y) => Y + 1), D());
  }, P = () => {
    C((v) => v - 1);
  };
  return useEffect(() => {
    S === 0 && N();
  }, [S]), useEffect(() => {
    if (d)
      return document.addEventListener("dragenter", R, !1), document.addEventListener("dragleave", P, !1), () => {
        document.removeEventListener("dragenter", R, !1), document.removeEventListener("dragleave", P, !1);
      };
  }, [d]), /* @__PURE__ */ jsxRuntimeExports.jsx(OptionalPortal, { ...I, withinPortal: p, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ..._("fullScreen", {
        style: { opacity: g ? 1 : 0, pointerEvents: g ? "all" : "none", zIndex: T }
      }),
      ref: n,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Dropzone$1,
        {
          ...E,
          classNames: m,
          styles: b,
          unstyled: c,
          className: classes.dropzone,
          onDrop: (v) => {
            f == null || f(v), N(), C(0);
          },
          onReject: (v) => {
            h == null || h(v), N(), C(0);
          }
        }
      )
    }
  ) });
});
DropzoneFullScreen.classes = classes;
DropzoneFullScreen.displayName = "@mantine/dropzone/DropzoneFullScreen";
Dropzone$1.FullScreen = DropzoneFullScreen;
const Dropzone = Dropzone$1, UploadInstagramArchive = ({
  setFile: t
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Dropzone,
  {
    onDrop: (n) => t(n[0]),
    maxSize: 500 * 1024 * 1024 ** 2,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Group,
      {
        justify: "center",
        gap: "xl",
        mih: 220,
        style: { pointerEvents: "none" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropzone.Accept, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconUpload,
            {
              style: {
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-blue-6)"
              },
              stroke: 1.5
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropzone.Reject, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconX,
            {
              style: {
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-red-6)"
              },
              stroke: 1.5
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropzone.Idle, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconArchive,
            {
              style: {
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-dimmed)"
              },
              stroke: 1.5
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Text$2, { size: "xl", inline: !0, children: "Drop your archive here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Text$2, { size: "sm", c: "dimmed", inline: !0, mt: 7, children: "Make sure its a zip file" })
          ] })
        ]
      }
    )
  }
), MAX_BITS$1 = 15, D_CODES = 30, BL_CODES = 19, LENGTH_CODES = 29, LITERALS = 256, L_CODES = LITERALS + 1 + LENGTH_CODES, HEAP_SIZE = 2 * L_CODES + 1, END_BLOCK = 256, MAX_BL_BITS = 7, REP_3_6 = 16, REPZ_3_10 = 17, REPZ_11_138 = 18, Buf_size = 8 * 2, Z_DEFAULT_COMPRESSION = -1, Z_FILTERED = 1, Z_HUFFMAN_ONLY = 2, Z_DEFAULT_STRATEGY = 0, Z_NO_FLUSH$1 = 0, Z_PARTIAL_FLUSH = 1, Z_FULL_FLUSH = 3, Z_FINISH$1 = 4, Z_OK$1 = 0, Z_STREAM_END$1 = 1, Z_NEED_DICT$1 = 2, Z_STREAM_ERROR$1 = -2, Z_DATA_ERROR$1 = -3, Z_BUF_ERROR$1 = -5;
function extractArray(t) {
  return flatArray(t.map(([n, s]) => new Array(n).fill(s, 0, n)));
}
function flatArray(t) {
  return t.reduce((n, s) => n.concat(Array.isArray(s) ? flatArray(s) : s), []);
}
const _dist_code = [0, 1, 2, 3].concat(...extractArray([
  [2, 4],
  [2, 5],
  [4, 6],
  [4, 7],
  [8, 8],
  [8, 9],
  [16, 10],
  [16, 11],
  [32, 12],
  [32, 13],
  [64, 14],
  [64, 15],
  [2, 0],
  [1, 16],
  [1, 17],
  [2, 18],
  [2, 19],
  [4, 20],
  [4, 21],
  [8, 22],
  [8, 23],
  [16, 24],
  [16, 25],
  [32, 26],
  [32, 27],
  [64, 28],
  [64, 29]
]));
function Tree() {
  const t = this;
  function n(i) {
    const o = t.dyn_tree, u = t.stat_desc.static_tree, c = t.stat_desc.extra_bits, l = t.stat_desc.extra_base, d = t.stat_desc.max_length;
    let f, h, T, p, I, E, _ = 0;
    for (p = 0; p <= MAX_BITS$1; p++)
      i.bl_count[p] = 0;
    for (o[i.heap[i.heap_max] * 2 + 1] = 0, f = i.heap_max + 1; f < HEAP_SIZE; f++)
      h = i.heap[f], p = o[o[h * 2 + 1] * 2 + 1] + 1, p > d && (p = d, _++), o[h * 2 + 1] = p, !(h > t.max_code) && (i.bl_count[p]++, I = 0, h >= l && (I = c[h - l]), E = o[h * 2], i.opt_len += E * (p + I), u && (i.static_len += E * (u[h * 2 + 1] + I)));
    if (_ !== 0) {
      do {
        for (p = d - 1; i.bl_count[p] === 0; )
          p--;
        i.bl_count[p]--, i.bl_count[p + 1] += 2, i.bl_count[d]--, _ -= 2;
      } while (_ > 0);
      for (p = d; p !== 0; p--)
        for (h = i.bl_count[p]; h !== 0; )
          T = i.heap[--f], !(T > t.max_code) && (o[T * 2 + 1] != p && (i.opt_len += (p - o[T * 2 + 1]) * o[T * 2], o[T * 2 + 1] = p), h--);
    }
  }
  function s(i, o) {
    let u = 0;
    do
      u |= i & 1, i >>>= 1, u <<= 1;
    while (--o > 0);
    return u >>> 1;
  }
  function a(i, o, u) {
    const c = [];
    let l = 0, d, f, h;
    for (d = 1; d <= MAX_BITS$1; d++)
      c[d] = l = l + u[d - 1] << 1;
    for (f = 0; f <= o; f++)
      h = i[f * 2 + 1], h !== 0 && (i[f * 2] = s(c[h]++, h));
  }
  t.build_tree = function(i) {
    const o = t.dyn_tree, u = t.stat_desc.static_tree, c = t.stat_desc.elems;
    let l, d, f = -1, h;
    for (i.heap_len = 0, i.heap_max = HEAP_SIZE, l = 0; l < c; l++)
      o[l * 2] !== 0 ? (i.heap[++i.heap_len] = f = l, i.depth[l] = 0) : o[l * 2 + 1] = 0;
    for (; i.heap_len < 2; )
      h = i.heap[++i.heap_len] = f < 2 ? ++f : 0, o[h * 2] = 1, i.depth[h] = 0, i.opt_len--, u && (i.static_len -= u[h * 2 + 1]);
    for (t.max_code = f, l = Math.floor(i.heap_len / 2); l >= 1; l--)
      i.pqdownheap(o, l);
    h = c;
    do
      l = i.heap[1], i.heap[1] = i.heap[i.heap_len--], i.pqdownheap(o, 1), d = i.heap[1], i.heap[--i.heap_max] = l, i.heap[--i.heap_max] = d, o[h * 2] = o[l * 2] + o[d * 2], i.depth[h] = Math.max(i.depth[l], i.depth[d]) + 1, o[l * 2 + 1] = o[d * 2 + 1] = h, i.heap[1] = h++, i.pqdownheap(o, 1);
    while (i.heap_len >= 2);
    i.heap[--i.heap_max] = i.heap[1], n(i), a(o, t.max_code, i.bl_count);
  };
}
Tree._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...extractArray([
  [2, 8],
  [2, 9],
  [2, 10],
  [2, 11],
  [4, 12],
  [4, 13],
  [4, 14],
  [4, 15],
  [8, 16],
  [8, 17],
  [8, 18],
  [8, 19],
  [16, 20],
  [16, 21],
  [16, 22],
  [16, 23],
  [32, 24],
  [32, 25],
  [32, 26],
  [31, 27],
  [1, 28]
]));
Tree.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
Tree.base_dist = [
  0,
  1,
  2,
  3,
  4,
  6,
  8,
  12,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  192,
  256,
  384,
  512,
  768,
  1024,
  1536,
  2048,
  3072,
  4096,
  6144,
  8192,
  12288,
  16384,
  24576
];
Tree.d_code = function(t) {
  return t < 256 ? _dist_code[t] : _dist_code[256 + (t >>> 7)];
};
Tree.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
Tree.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
Tree.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
Tree.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
function StaticTree(t, n, s, a, i) {
  const o = this;
  o.static_tree = t, o.extra_bits = n, o.extra_base = s, o.elems = a, o.max_length = i;
}
const static_ltree2_first_part = [
  12,
  140,
  76,
  204,
  44,
  172,
  108,
  236,
  28,
  156,
  92,
  220,
  60,
  188,
  124,
  252,
  2,
  130,
  66,
  194,
  34,
  162,
  98,
  226,
  18,
  146,
  82,
  210,
  50,
  178,
  114,
  242,
  10,
  138,
  74,
  202,
  42,
  170,
  106,
  234,
  26,
  154,
  90,
  218,
  58,
  186,
  122,
  250,
  6,
  134,
  70,
  198,
  38,
  166,
  102,
  230,
  22,
  150,
  86,
  214,
  54,
  182,
  118,
  246,
  14,
  142,
  78,
  206,
  46,
  174,
  110,
  238,
  30,
  158,
  94,
  222,
  62,
  190,
  126,
  254,
  1,
  129,
  65,
  193,
  33,
  161,
  97,
  225,
  17,
  145,
  81,
  209,
  49,
  177,
  113,
  241,
  9,
  137,
  73,
  201,
  41,
  169,
  105,
  233,
  25,
  153,
  89,
  217,
  57,
  185,
  121,
  249,
  5,
  133,
  69,
  197,
  37,
  165,
  101,
  229,
  21,
  149,
  85,
  213,
  53,
  181,
  117,
  245,
  13,
  141,
  77,
  205,
  45,
  173,
  109,
  237,
  29,
  157,
  93,
  221,
  61,
  189,
  125,
  253,
  19,
  275,
  147,
  403,
  83,
  339,
  211,
  467,
  51,
  307,
  179,
  435,
  115,
  371,
  243,
  499,
  11,
  267,
  139,
  395,
  75,
  331,
  203,
  459,
  43,
  299,
  171,
  427,
  107,
  363,
  235,
  491,
  27,
  283,
  155,
  411,
  91,
  347,
  219,
  475,
  59,
  315,
  187,
  443,
  123,
  379,
  251,
  507,
  7,
  263,
  135,
  391,
  71,
  327,
  199,
  455,
  39,
  295,
  167,
  423,
  103,
  359,
  231,
  487,
  23,
  279,
  151,
  407,
  87,
  343,
  215,
  471,
  55,
  311,
  183,
  439,
  119,
  375,
  247,
  503,
  15,
  271,
  143,
  399,
  79,
  335,
  207,
  463,
  47,
  303,
  175,
  431,
  111,
  367,
  239,
  495,
  31,
  287,
  159,
  415,
  95,
  351,
  223,
  479,
  63,
  319,
  191,
  447,
  127,
  383,
  255,
  511,
  0,
  64,
  32,
  96,
  16,
  80,
  48,
  112,
  8,
  72,
  40,
  104,
  24,
  88,
  56,
  120,
  4,
  68,
  36,
  100,
  20,
  84,
  52,
  116,
  3,
  131,
  67,
  195,
  35,
  163,
  99,
  227
], static_ltree2_second_part = extractArray([[144, 8], [112, 9], [24, 7], [8, 8]]);
StaticTree.static_ltree = flatArray(static_ltree2_first_part.map((t, n) => [t, static_ltree2_second_part[n]]));
const static_dtree_first_part = [0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9, 25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23], static_dtree_second_part = extractArray([[30, 5]]);
StaticTree.static_dtree = flatArray(static_dtree_first_part.map((t, n) => [t, static_dtree_second_part[n]]));
StaticTree.static_l_desc = new StaticTree(StaticTree.static_ltree, Tree.extra_lbits, LITERALS + 1, L_CODES, MAX_BITS$1);
StaticTree.static_d_desc = new StaticTree(StaticTree.static_dtree, Tree.extra_dbits, 0, D_CODES, MAX_BITS$1);
StaticTree.static_bl_desc = new StaticTree(null, Tree.extra_blbits, 0, BL_CODES, MAX_BL_BITS);
const MAX_MEM_LEVEL = 9, DEF_MEM_LEVEL = 8;
function Config(t, n, s, a, i) {
  const o = this;
  o.good_length = t, o.max_lazy = n, o.nice_length = s, o.max_chain = a, o.func = i;
}
const STORED$1 = 0, FAST = 1, SLOW = 2, config_table = [
  new Config(0, 0, 0, 0, STORED$1),
  new Config(4, 4, 8, 4, FAST),
  new Config(4, 5, 16, 8, FAST),
  new Config(4, 6, 32, 32, FAST),
  new Config(4, 4, 16, 16, SLOW),
  new Config(8, 16, 32, 32, SLOW),
  new Config(8, 16, 128, 128, SLOW),
  new Config(8, 32, 128, 256, SLOW),
  new Config(32, 128, 258, 1024, SLOW),
  new Config(32, 258, 258, 4096, SLOW)
], z_errmsg = [
  "need dictionary",
  // Z_NEED_DICT
  // 2
  "stream end",
  // Z_STREAM_END 1
  "",
  // Z_OK 0
  "",
  // Z_ERRNO (-1)
  "stream error",
  // Z_STREAM_ERROR (-2)
  "data error",
  // Z_DATA_ERROR (-3)
  "",
  // Z_MEM_ERROR (-4)
  "buffer error",
  // Z_BUF_ERROR (-5)
  "",
  // Z_VERSION_ERROR (-6)
  ""
], NeedMore = 0, BlockDone = 1, FinishStarted = 2, FinishDone = 3, PRESET_DICT$1 = 32, INIT_STATE = 42, BUSY_STATE = 113, FINISH_STATE = 666, Z_DEFLATED$1 = 8, STORED_BLOCK = 0, STATIC_TREES = 1, DYN_TREES = 2, MIN_MATCH = 3, MAX_MATCH = 258, MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
function smaller(t, n, s, a) {
  const i = t[n * 2], o = t[s * 2];
  return i < o || i == o && a[n] <= a[s];
}
function Deflate() {
  const t = this;
  let n, s, a, i, o, u, c, l, d, f, h, T, p, I, E, _, m, b, S, C, g, D, N, R, P, v, x, Y, w, q, K, U, J;
  const ee = new Tree(), _e = new Tree(), y = new Tree();
  t.depth = [];
  let F, H, j, Q, z, X;
  t.bl_count = [], t.heap = [], K = [], U = [], J = [];
  function te() {
    d = 2 * o, h[p - 1] = 0;
    for (let O = 0; O < p - 1; O++)
      h[O] = 0;
    v = config_table[x].max_lazy, w = config_table[x].good_length, q = config_table[x].nice_length, P = config_table[x].max_chain, g = 0, m = 0, N = 0, b = R = MIN_MATCH - 1, C = 0, T = 0;
  }
  function re() {
    let O;
    for (O = 0; O < L_CODES; O++)
      K[O * 2] = 0;
    for (O = 0; O < D_CODES; O++)
      U[O * 2] = 0;
    for (O = 0; O < BL_CODES; O++)
      J[O * 2] = 0;
    K[END_BLOCK * 2] = 1, t.opt_len = t.static_len = 0, H = j = 0;
  }
  function ae() {
    ee.dyn_tree = K, ee.stat_desc = StaticTree.static_l_desc, _e.dyn_tree = U, _e.stat_desc = StaticTree.static_d_desc, y.dyn_tree = J, y.stat_desc = StaticTree.static_bl_desc, z = 0, X = 0, Q = 8, re();
  }
  t.pqdownheap = function(O, k) {
    const L = t.heap, B = L[k];
    let Z = k << 1;
    for (; Z <= t.heap_len && (Z < t.heap_len && smaller(O, L[Z + 1], L[Z], t.depth) && Z++, !smaller(O, B, L[Z], t.depth)); )
      L[k] = L[Z], k = Z, Z <<= 1;
    L[k] = B;
  };
  function ne(O, k) {
    let L = -1, B, Z = O[0 * 2 + 1], se = 0, ue = 7, Ae = 4;
    Z === 0 && (ue = 138, Ae = 3), O[(k + 1) * 2 + 1] = 65535;
    for (let Ne = 0; Ne <= k; Ne++)
      B = Z, Z = O[(Ne + 1) * 2 + 1], !(++se < ue && B == Z) && (se < Ae ? J[B * 2] += se : B !== 0 ? (B != L && J[B * 2]++, J[REP_3_6 * 2]++) : se <= 10 ? J[REPZ_3_10 * 2]++ : J[REPZ_11_138 * 2]++, se = 0, L = B, Z === 0 ? (ue = 138, Ae = 3) : B == Z ? (ue = 6, Ae = 3) : (ue = 7, Ae = 4));
  }
  function de() {
    let O;
    for (ne(K, ee.max_code), ne(U, _e.max_code), y.build_tree(t), O = BL_CODES - 1; O >= 3 && J[Tree.bl_order[O] * 2 + 1] === 0; O--)
      ;
    return t.opt_len += 3 * (O + 1) + 5 + 5 + 4, O;
  }
  function G(O) {
    t.pending_buf[t.pending++] = O;
  }
  function Te(O) {
    G(O & 255), G(O >>> 8 & 255);
  }
  function ge(O) {
    G(O >> 8 & 255), G(O & 255 & 255);
  }
  function fe(O, k) {
    let L;
    const B = k;
    X > Buf_size - B ? (L = O, z |= L << X & 65535, Te(z), z = L >>> Buf_size - X, X += B - Buf_size) : (z |= O << X & 65535, X += B);
  }
  function pe(O, k) {
    const L = O * 2;
    fe(k[L] & 65535, k[L + 1] & 65535);
  }
  function xe(O, k) {
    let L, B = -1, Z, se = O[0 * 2 + 1], ue = 0, Ae = 7, Ne = 4;
    for (se === 0 && (Ae = 138, Ne = 3), L = 0; L <= k; L++)
      if (Z = se, se = O[(L + 1) * 2 + 1], !(++ue < Ae && Z == se)) {
        if (ue < Ne)
          do
            pe(Z, J);
          while (--ue !== 0);
        else Z !== 0 ? (Z != B && (pe(Z, J), ue--), pe(REP_3_6, J), fe(ue - 3, 2)) : ue <= 10 ? (pe(REPZ_3_10, J), fe(ue - 3, 3)) : (pe(REPZ_11_138, J), fe(ue - 11, 7));
        ue = 0, B = Z, se === 0 ? (Ae = 138, Ne = 3) : Z == se ? (Ae = 6, Ne = 3) : (Ae = 7, Ne = 4);
      }
  }
  function ke(O, k, L) {
    let B;
    for (fe(O - 257, 5), fe(k - 1, 5), fe(L - 4, 4), B = 0; B < L; B++)
      fe(J[Tree.bl_order[B] * 2 + 1], 3);
    xe(K, O - 1), xe(U, k - 1);
  }
  function ve() {
    X == 16 ? (Te(z), z = 0, X = 0) : X >= 8 && (G(z & 255), z >>>= 8, X -= 8);
  }
  function He() {
    fe(STATIC_TREES << 1, 3), pe(END_BLOCK, StaticTree.static_ltree), ve(), 1 + Q + 10 - X < 9 && (fe(STATIC_TREES << 1, 3), pe(END_BLOCK, StaticTree.static_ltree), ve()), Q = 7;
  }
  function W(O, k) {
    let L, B, Z;
    if (t.dist_buf[H] = O, t.lc_buf[H] = k & 255, H++, O === 0 ? K[k * 2]++ : (j++, O--, K[(Tree._length_code[k] + LITERALS + 1) * 2]++, U[Tree.d_code(O) * 2]++), !(H & 8191) && x > 2) {
      for (L = H * 8, B = g - m, Z = 0; Z < D_CODES; Z++)
        L += U[Z * 2] * (5 + Tree.extra_dbits[Z]);
      if (L >>>= 3, j < Math.floor(H / 2) && L < Math.floor(B / 2))
        return !0;
    }
    return H == F - 1;
  }
  function oe(O, k) {
    let L, B, Z = 0, se, ue;
    if (H !== 0)
      do
        L = t.dist_buf[Z], B = t.lc_buf[Z], Z++, L === 0 ? pe(B, O) : (se = Tree._length_code[B], pe(se + LITERALS + 1, O), ue = Tree.extra_lbits[se], ue !== 0 && (B -= Tree.base_length[se], fe(B, ue)), L--, se = Tree.d_code(L), pe(se, k), ue = Tree.extra_dbits[se], ue !== 0 && (L -= Tree.base_dist[se], fe(L, ue)));
      while (Z < H);
    pe(END_BLOCK, O), Q = O[END_BLOCK * 2 + 1];
  }
  function me() {
    X > 8 ? Te(z) : X > 0 && G(z & 255), z = 0, X = 0;
  }
  function be(O, k, L) {
    me(), Q = 8, Te(k), Te(~k), t.pending_buf.set(l.subarray(O, O + k), t.pending), t.pending += k;
  }
  function Ce(O, k, L) {
    fe((STORED_BLOCK << 1) + (L ? 1 : 0), 3), be(O, k);
  }
  function Le(O, k, L) {
    let B, Z, se = 0;
    x > 0 ? (ee.build_tree(t), _e.build_tree(t), se = de(), B = t.opt_len + 3 + 7 >>> 3, Z = t.static_len + 3 + 7 >>> 3, Z <= B && (B = Z)) : B = Z = k + 5, k + 4 <= B && O != -1 ? Ce(O, k, L) : Z == B ? (fe((STATIC_TREES << 1) + (L ? 1 : 0), 3), oe(StaticTree.static_ltree, StaticTree.static_dtree)) : (fe((DYN_TREES << 1) + (L ? 1 : 0), 3), ke(ee.max_code + 1, _e.max_code + 1, se + 1), oe(K, U)), re(), L && me();
  }
  function Se(O) {
    Le(m >= 0 ? m : -1, g - m, O), m = g, n.flush_pending();
  }
  function Me() {
    let O, k, L, B;
    do {
      if (B = d - N - g, B === 0 && g === 0 && N === 0)
        B = o;
      else if (B == -1)
        B--;
      else if (g >= o + o - MIN_LOOKAHEAD) {
        l.set(l.subarray(o, o + o), 0), D -= o, g -= o, m -= o, O = p, L = O;
        do
          k = h[--L] & 65535, h[L] = k >= o ? k - o : 0;
        while (--O !== 0);
        O = o, L = O;
        do
          k = f[--L] & 65535, f[L] = k >= o ? k - o : 0;
        while (--O !== 0);
        B += o;
      }
      if (n.avail_in === 0)
        return;
      O = n.read_buf(l, g + N, B), N += O, N >= MIN_MATCH && (T = l[g] & 255, T = (T << _ ^ l[g + 1] & 255) & E);
    } while (N < MIN_LOOKAHEAD && n.avail_in !== 0);
  }
  function Fe(O) {
    let k = 65535, L;
    for (k > a - 5 && (k = a - 5); ; ) {
      if (N <= 1) {
        if (Me(), N === 0 && O == Z_NO_FLUSH$1)
          return NeedMore;
        if (N === 0)
          break;
      }
      if (g += N, N = 0, L = m + k, (g === 0 || g >= L) && (N = g - L, g = L, Se(!1), n.avail_out === 0) || g - m >= o - MIN_LOOKAHEAD && (Se(!1), n.avail_out === 0))
        return NeedMore;
    }
    return Se(O == Z_FINISH$1), n.avail_out === 0 ? O == Z_FINISH$1 ? FinishStarted : NeedMore : O == Z_FINISH$1 ? FinishDone : BlockDone;
  }
  function Pe(O) {
    let k = P, L = g, B, Z, se = R;
    const ue = g > o - MIN_LOOKAHEAD ? g - (o - MIN_LOOKAHEAD) : 0;
    let Ae = q;
    const Ne = c, Ge = g + MAX_MATCH;
    let Ye = l[L + se - 1], qe = l[L + se];
    R >= w && (k >>= 2), Ae > N && (Ae = N);
    do
      if (B = O, !(l[B + se] != qe || l[B + se - 1] != Ye || l[B] != l[L] || l[++B] != l[L + 1])) {
        L += 2, B++;
        do
          ;
        while (l[++L] == l[++B] && l[++L] == l[++B] && l[++L] == l[++B] && l[++L] == l[++B] && l[++L] == l[++B] && l[++L] == l[++B] && l[++L] == l[++B] && l[++L] == l[++B] && L < Ge);
        if (Z = MAX_MATCH - (Ge - L), L = Ge - MAX_MATCH, Z > se) {
          if (D = O, se = Z, Z >= Ae)
            break;
          Ye = l[L + se - 1], qe = l[L + se];
        }
      }
    while ((O = f[O & Ne] & 65535) > ue && --k !== 0);
    return se <= N ? se : N;
  }
  function we(O) {
    let k = 0, L;
    for (; ; ) {
      if (N < MIN_LOOKAHEAD) {
        if (Me(), N < MIN_LOOKAHEAD && O == Z_NO_FLUSH$1)
          return NeedMore;
        if (N === 0)
          break;
      }
      if (N >= MIN_MATCH && (T = (T << _ ^ l[g + (MIN_MATCH - 1)] & 255) & E, k = h[T] & 65535, f[g & c] = h[T], h[T] = g), k !== 0 && (g - k & 65535) <= o - MIN_LOOKAHEAD && Y != Z_HUFFMAN_ONLY && (b = Pe(k)), b >= MIN_MATCH)
        if (L = W(g - D, b - MIN_MATCH), N -= b, b <= v && N >= MIN_MATCH) {
          b--;
          do
            g++, T = (T << _ ^ l[g + (MIN_MATCH - 1)] & 255) & E, k = h[T] & 65535, f[g & c] = h[T], h[T] = g;
          while (--b !== 0);
          g++;
        } else
          g += b, b = 0, T = l[g] & 255, T = (T << _ ^ l[g + 1] & 255) & E;
      else
        L = W(0, l[g] & 255), N--, g++;
      if (L && (Se(!1), n.avail_out === 0))
        return NeedMore;
    }
    return Se(O == Z_FINISH$1), n.avail_out === 0 ? O == Z_FINISH$1 ? FinishStarted : NeedMore : O == Z_FINISH$1 ? FinishDone : BlockDone;
  }
  function Be(O) {
    let k = 0, L, B;
    for (; ; ) {
      if (N < MIN_LOOKAHEAD) {
        if (Me(), N < MIN_LOOKAHEAD && O == Z_NO_FLUSH$1)
          return NeedMore;
        if (N === 0)
          break;
      }
      if (N >= MIN_MATCH && (T = (T << _ ^ l[g + (MIN_MATCH - 1)] & 255) & E, k = h[T] & 65535, f[g & c] = h[T], h[T] = g), R = b, S = D, b = MIN_MATCH - 1, k !== 0 && R < v && (g - k & 65535) <= o - MIN_LOOKAHEAD && (Y != Z_HUFFMAN_ONLY && (b = Pe(k)), b <= 5 && (Y == Z_FILTERED || b == MIN_MATCH && g - D > 4096) && (b = MIN_MATCH - 1)), R >= MIN_MATCH && b <= R) {
        B = g + N - MIN_MATCH, L = W(g - 1 - S, R - MIN_MATCH), N -= R - 1, R -= 2;
        do
          ++g <= B && (T = (T << _ ^ l[g + (MIN_MATCH - 1)] & 255) & E, k = h[T] & 65535, f[g & c] = h[T], h[T] = g);
        while (--R !== 0);
        if (C = 0, b = MIN_MATCH - 1, g++, L && (Se(!1), n.avail_out === 0))
          return NeedMore;
      } else if (C !== 0) {
        if (L = W(0, l[g - 1] & 255), L && Se(!1), g++, N--, n.avail_out === 0)
          return NeedMore;
      } else
        C = 1, g++, N--;
    }
    return C !== 0 && (L = W(0, l[g - 1] & 255), C = 0), Se(O == Z_FINISH$1), n.avail_out === 0 ? O == Z_FINISH$1 ? FinishStarted : NeedMore : O == Z_FINISH$1 ? FinishDone : BlockDone;
  }
  function je(O) {
    return O.total_in = O.total_out = 0, O.msg = null, t.pending = 0, t.pending_out = 0, s = BUSY_STATE, i = Z_NO_FLUSH$1, ae(), te(), Z_OK$1;
  }
  t.deflateInit = function(O, k, L, B, Z, se) {
    return B || (B = Z_DEFLATED$1), Z || (Z = DEF_MEM_LEVEL), se || (se = Z_DEFAULT_STRATEGY), O.msg = null, k == Z_DEFAULT_COMPRESSION && (k = 6), Z < 1 || Z > MAX_MEM_LEVEL || B != Z_DEFLATED$1 || L < 9 || L > 15 || k < 0 || k > 9 || se < 0 || se > Z_HUFFMAN_ONLY ? Z_STREAM_ERROR$1 : (O.dstate = t, u = L, o = 1 << u, c = o - 1, I = Z + 7, p = 1 << I, E = p - 1, _ = Math.floor((I + MIN_MATCH - 1) / MIN_MATCH), l = new Uint8Array(o * 2), f = [], h = [], F = 1 << Z + 6, t.pending_buf = new Uint8Array(F * 4), a = F * 4, t.dist_buf = new Uint16Array(F), t.lc_buf = new Uint8Array(F), x = k, Y = se, je(O));
  }, t.deflateEnd = function() {
    return s != INIT_STATE && s != BUSY_STATE && s != FINISH_STATE ? Z_STREAM_ERROR$1 : (t.lc_buf = null, t.dist_buf = null, t.pending_buf = null, h = null, f = null, l = null, t.dstate = null, s == BUSY_STATE ? Z_DATA_ERROR$1 : Z_OK$1);
  }, t.deflateParams = function(O, k, L) {
    let B = Z_OK$1;
    return k == Z_DEFAULT_COMPRESSION && (k = 6), k < 0 || k > 9 || L < 0 || L > Z_HUFFMAN_ONLY ? Z_STREAM_ERROR$1 : (config_table[x].func != config_table[k].func && O.total_in !== 0 && (B = O.deflate(Z_PARTIAL_FLUSH)), x != k && (x = k, v = config_table[x].max_lazy, w = config_table[x].good_length, q = config_table[x].nice_length, P = config_table[x].max_chain), Y = L, B);
  }, t.deflateSetDictionary = function(O, k, L) {
    let B = L, Z, se = 0;
    if (!k || s != INIT_STATE)
      return Z_STREAM_ERROR$1;
    if (B < MIN_MATCH)
      return Z_OK$1;
    for (B > o - MIN_LOOKAHEAD && (B = o - MIN_LOOKAHEAD, se = L - B), l.set(k.subarray(se, se + B), 0), g = B, m = B, T = l[0] & 255, T = (T << _ ^ l[1] & 255) & E, Z = 0; Z <= B - MIN_MATCH; Z++)
      T = (T << _ ^ l[Z + (MIN_MATCH - 1)] & 255) & E, f[Z & c] = h[T], h[T] = Z;
    return Z_OK$1;
  }, t.deflate = function(O, k) {
    let L, B, Z, se, ue;
    if (k > Z_FINISH$1 || k < 0)
      return Z_STREAM_ERROR$1;
    if (!O.next_out || !O.next_in && O.avail_in !== 0 || s == FINISH_STATE && k != Z_FINISH$1)
      return O.msg = z_errmsg[Z_NEED_DICT$1 - Z_STREAM_ERROR$1], Z_STREAM_ERROR$1;
    if (O.avail_out === 0)
      return O.msg = z_errmsg[Z_NEED_DICT$1 - Z_BUF_ERROR$1], Z_BUF_ERROR$1;
    if (n = O, se = i, i = k, s == INIT_STATE && (B = Z_DEFLATED$1 + (u - 8 << 4) << 8, Z = (x - 1 & 255) >> 1, Z > 3 && (Z = 3), B |= Z << 6, g !== 0 && (B |= PRESET_DICT$1), B += 31 - B % 31, s = BUSY_STATE, ge(B)), t.pending !== 0) {
      if (n.flush_pending(), n.avail_out === 0)
        return i = -1, Z_OK$1;
    } else if (n.avail_in === 0 && k <= se && k != Z_FINISH$1)
      return n.msg = z_errmsg[Z_NEED_DICT$1 - Z_BUF_ERROR$1], Z_BUF_ERROR$1;
    if (s == FINISH_STATE && n.avail_in !== 0)
      return O.msg = z_errmsg[Z_NEED_DICT$1 - Z_BUF_ERROR$1], Z_BUF_ERROR$1;
    if (n.avail_in !== 0 || N !== 0 || k != Z_NO_FLUSH$1 && s != FINISH_STATE) {
      switch (ue = -1, config_table[x].func) {
        case STORED$1:
          ue = Fe(k);
          break;
        case FAST:
          ue = we(k);
          break;
        case SLOW:
          ue = Be(k);
          break;
      }
      if ((ue == FinishStarted || ue == FinishDone) && (s = FINISH_STATE), ue == NeedMore || ue == FinishStarted)
        return n.avail_out === 0 && (i = -1), Z_OK$1;
      if (ue == BlockDone) {
        if (k == Z_PARTIAL_FLUSH)
          He();
        else if (Ce(0, 0, !1), k == Z_FULL_FLUSH)
          for (L = 0; L < p; L++)
            h[L] = 0;
        if (n.flush_pending(), n.avail_out === 0)
          return i = -1, Z_OK$1;
      }
    }
    return k != Z_FINISH$1 ? Z_OK$1 : Z_STREAM_END$1;
  };
}
function ZStream$1() {
  const t = this;
  t.next_in_index = 0, t.next_out_index = 0, t.avail_in = 0, t.total_in = 0, t.avail_out = 0, t.total_out = 0;
}
ZStream$1.prototype = {
  deflateInit(t, n) {
    const s = this;
    return s.dstate = new Deflate(), n || (n = MAX_BITS$1), s.dstate.deflateInit(s, t, n);
  },
  deflate(t) {
    const n = this;
    return n.dstate ? n.dstate.deflate(n, t) : Z_STREAM_ERROR$1;
  },
  deflateEnd() {
    const t = this;
    if (!t.dstate)
      return Z_STREAM_ERROR$1;
    const n = t.dstate.deflateEnd();
    return t.dstate = null, n;
  },
  deflateParams(t, n) {
    const s = this;
    return s.dstate ? s.dstate.deflateParams(s, t, n) : Z_STREAM_ERROR$1;
  },
  deflateSetDictionary(t, n) {
    const s = this;
    return s.dstate ? s.dstate.deflateSetDictionary(s, t, n) : Z_STREAM_ERROR$1;
  },
  // Read a new buffer from the current input stream, update the
  // total number of bytes read. All deflate() input goes through
  // this function so some applications may wish to modify it to avoid
  // allocating a large strm->next_in buffer and copying from it.
  // (See also flush_pending()).
  read_buf(t, n, s) {
    const a = this;
    let i = a.avail_in;
    return i > s && (i = s), i === 0 ? 0 : (a.avail_in -= i, t.set(a.next_in.subarray(a.next_in_index, a.next_in_index + i), n), a.next_in_index += i, a.total_in += i, i);
  },
  // Flush as much pending output as possible. All deflate() output goes
  // through this function so some applications may wish to modify it
  // to avoid allocating a large strm->next_out buffer and copying into it.
  // (See also read_buf()).
  flush_pending() {
    const t = this;
    let n = t.dstate.pending;
    n > t.avail_out && (n = t.avail_out), n !== 0 && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + n), t.next_out_index), t.next_out_index += n, t.dstate.pending_out += n, t.total_out += n, t.avail_out -= n, t.dstate.pending -= n, t.dstate.pending === 0 && (t.dstate.pending_out = 0));
  }
};
function ZipDeflate(t) {
  const n = this, s = new ZStream$1(), a = getMaximumCompressedSize(t && t.chunkSize ? t.chunkSize : 64 * 1024), i = Z_NO_FLUSH$1, o = new Uint8Array(a);
  let u = t ? t.level : Z_DEFAULT_COMPRESSION;
  typeof u > "u" && (u = Z_DEFAULT_COMPRESSION), s.deflateInit(u), s.next_out = o, n.append = function(c, l) {
    let d, f, h = 0, T = 0, p = 0;
    const I = [];
    if (c.length) {
      s.next_in_index = 0, s.next_in = c, s.avail_in = c.length;
      do {
        if (s.next_out_index = 0, s.avail_out = a, d = s.deflate(i), d != Z_OK$1)
          throw new Error("deflating: " + s.msg);
        s.next_out_index && (s.next_out_index == a ? I.push(new Uint8Array(o)) : I.push(o.subarray(0, s.next_out_index))), p += s.next_out_index, l && s.next_in_index > 0 && s.next_in_index != h && (l(s.next_in_index), h = s.next_in_index);
      } while (s.avail_in > 0 || s.avail_out === 0);
      return I.length > 1 ? (f = new Uint8Array(p), I.forEach(function(E) {
        f.set(E, T), T += E.length;
      })) : f = I[0] ? new Uint8Array(I[0]) : new Uint8Array(), f;
    }
  }, n.flush = function() {
    let c, l, d = 0, f = 0;
    const h = [];
    do {
      if (s.next_out_index = 0, s.avail_out = a, c = s.deflate(Z_FINISH$1), c != Z_STREAM_END$1 && c != Z_OK$1)
        throw new Error("deflating: " + s.msg);
      a - s.avail_out > 0 && h.push(o.slice(0, s.next_out_index)), f += s.next_out_index;
    } while (s.avail_in > 0 || s.avail_out === 0);
    return s.deflateEnd(), l = new Uint8Array(f), h.forEach(function(T) {
      l.set(T, d), d += T.length;
    }), l;
  };
}
function getMaximumCompressedSize(t) {
  return t + 5 * (Math.floor(t / 16383) + 1);
}
const MAX_BITS = 15, Z_OK = 0, Z_STREAM_END = 1, Z_NEED_DICT = 2, Z_STREAM_ERROR = -2, Z_DATA_ERROR = -3, Z_MEM_ERROR = -4, Z_BUF_ERROR = -5, inflate_mask = [
  0,
  1,
  3,
  7,
  15,
  31,
  63,
  127,
  255,
  511,
  1023,
  2047,
  4095,
  8191,
  16383,
  32767,
  65535
], MANY = 1440, Z_NO_FLUSH = 0, Z_FINISH = 4, fixed_bl = 9, fixed_bd = 5, fixed_tl = [
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  192,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  160,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  224,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  144,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  208,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  176,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  240,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  200,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  168,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  232,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  152,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  216,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  184,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  248,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  196,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  164,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  228,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  148,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  212,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  180,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  244,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  204,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  172,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  236,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  156,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  220,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  188,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  252,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  194,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  162,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  226,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  146,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  210,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  178,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  242,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  202,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  170,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  234,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  154,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  218,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  186,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  250,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  198,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  166,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  230,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  150,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  214,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  182,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  246,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  206,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  174,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  238,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  158,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  222,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  190,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  254,
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  193,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  161,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  225,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  145,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  209,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  177,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  241,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  201,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  169,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  233,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  153,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  217,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  185,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  249,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  197,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  165,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  229,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  149,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  213,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  181,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  245,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  205,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  173,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  237,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  157,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  221,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  189,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  253,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  195,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  163,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  227,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  147,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  211,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  179,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  243,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  203,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  171,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  235,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  155,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  219,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  187,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  251,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  199,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  167,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  231,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  151,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  215,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  183,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  247,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  207,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  175,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  239,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  159,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  223,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  191,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  255
], fixed_td = [
  80,
  5,
  1,
  87,
  5,
  257,
  83,
  5,
  17,
  91,
  5,
  4097,
  81,
  5,
  5,
  89,
  5,
  1025,
  85,
  5,
  65,
  93,
  5,
  16385,
  80,
  5,
  3,
  88,
  5,
  513,
  84,
  5,
  33,
  92,
  5,
  8193,
  82,
  5,
  9,
  90,
  5,
  2049,
  86,
  5,
  129,
  192,
  5,
  24577,
  80,
  5,
  2,
  87,
  5,
  385,
  83,
  5,
  25,
  91,
  5,
  6145,
  81,
  5,
  7,
  89,
  5,
  1537,
  85,
  5,
  97,
  93,
  5,
  24577,
  80,
  5,
  4,
  88,
  5,
  769,
  84,
  5,
  49,
  92,
  5,
  12289,
  82,
  5,
  13,
  90,
  5,
  3073,
  86,
  5,
  193,
  192,
  5,
  24577
], cplens = [
  // Copy lengths for literal codes 257..285
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
], cplext = [
  // Extra bits for literal codes 257..285
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  112,
  112
  // 112==invalid
], cpdist = [
  // Copy offsets for distance codes 0..29
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577
], cpdext = [
  // Extra bits for distance codes
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13
], BMAX = 15;
function InfTree() {
  const t = this;
  let n, s, a, i, o, u;
  function c(d, f, h, T, p, I, E, _, m, b, S) {
    let C, g, D, N, R, P, v, x, Y, w, q, K, U, J, ee;
    w = 0, R = h;
    do
      a[d[f + w]]++, w++, R--;
    while (R !== 0);
    if (a[0] == h)
      return E[0] = -1, _[0] = 0, Z_OK;
    for (x = _[0], P = 1; P <= BMAX && a[P] === 0; P++)
      ;
    for (v = P, x < P && (x = P), R = BMAX; R !== 0 && a[R] === 0; R--)
      ;
    for (D = R, x > R && (x = R), _[0] = x, J = 1 << P; P < R; P++, J <<= 1)
      if ((J -= a[P]) < 0)
        return Z_DATA_ERROR;
    if ((J -= a[R]) < 0)
      return Z_DATA_ERROR;
    for (a[R] += J, u[1] = P = 0, w = 1, U = 2; --R !== 0; )
      u[U] = P += a[w], U++, w++;
    R = 0, w = 0;
    do
      (P = d[f + w]) !== 0 && (S[u[P]++] = R), w++;
    while (++R < h);
    for (h = u[D], u[0] = R = 0, w = 0, N = -1, K = -x, o[0] = 0, q = 0, ee = 0; v <= D; v++)
      for (C = a[v]; C-- !== 0; ) {
        for (; v > K + x; ) {
          if (N++, K += x, ee = D - K, ee = ee > x ? x : ee, (g = 1 << (P = v - K)) > C + 1 && (g -= C + 1, U = v, P < ee))
            for (; ++P < ee && !((g <<= 1) <= a[++U]); )
              g -= a[U];
          if (ee = 1 << P, b[0] + ee > MANY)
            return Z_DATA_ERROR;
          o[N] = q = /* hp+ */
          b[0], b[0] += ee, N !== 0 ? (u[N] = R, i[0] = /* (byte) */
          P, i[1] = /* (byte) */
          x, P = R >>> K - x, i[2] = /* (int) */
          q - o[N - 1] - P, m.set(i, (o[N - 1] + P) * 3)) : E[0] = q;
        }
        for (i[1] = /* (byte) */
        v - K, w >= h ? i[0] = 192 : S[w] < T ? (i[0] = /* (byte) */
        S[w] < 256 ? 0 : 96, i[2] = S[w++]) : (i[0] = /* (byte) */
        I[S[w] - T] + 16 + 64, i[2] = p[S[w++] - T]), g = 1 << v - K, P = R >>> K; P < ee; P += g)
          m.set(i, (q + P) * 3);
        for (P = 1 << v - 1; R & P; P >>>= 1)
          R ^= P;
        for (R ^= P, Y = (1 << K) - 1; (R & Y) != u[N]; )
          N--, K -= x, Y = (1 << K) - 1;
      }
    return J !== 0 && D != 1 ? Z_BUF_ERROR : Z_OK;
  }
  function l(d) {
    let f;
    for (n || (n = [], s = [], a = new Int32Array(BMAX + 1), i = [], o = new Int32Array(BMAX), u = new Int32Array(BMAX + 1)), s.length < d && (s = []), f = 0; f < d; f++)
      s[f] = 0;
    for (f = 0; f < BMAX + 1; f++)
      a[f] = 0;
    for (f = 0; f < 3; f++)
      i[f] = 0;
    o.set(a.subarray(0, BMAX), 0), u.set(a.subarray(0, BMAX + 1), 0);
  }
  t.inflate_trees_bits = function(d, f, h, T, p) {
    let I;
    return l(19), n[0] = 0, I = c(d, 0, 19, 19, null, null, h, f, T, n, s), I == Z_DATA_ERROR ? p.msg = "oversubscribed dynamic bit lengths tree" : (I == Z_BUF_ERROR || f[0] === 0) && (p.msg = "incomplete dynamic bit lengths tree", I = Z_DATA_ERROR), I;
  }, t.inflate_trees_dynamic = function(d, f, h, T, p, I, E, _, m) {
    let b;
    return l(288), n[0] = 0, b = c(h, 0, d, 257, cplens, cplext, I, T, _, n, s), b != Z_OK || T[0] === 0 ? (b == Z_DATA_ERROR ? m.msg = "oversubscribed literal/length tree" : b != Z_MEM_ERROR && (m.msg = "incomplete literal/length tree", b = Z_DATA_ERROR), b) : (l(288), b = c(h, d, f, 0, cpdist, cpdext, E, p, _, n, s), b != Z_OK || p[0] === 0 && d > 257 ? (b == Z_DATA_ERROR ? m.msg = "oversubscribed distance tree" : b == Z_BUF_ERROR ? (m.msg = "incomplete distance tree", b = Z_DATA_ERROR) : b != Z_MEM_ERROR && (m.msg = "empty distance tree with lengths", b = Z_DATA_ERROR), b) : Z_OK);
  };
}
InfTree.inflate_trees_fixed = function(t, n, s, a) {
  return t[0] = fixed_bl, n[0] = fixed_bd, s[0] = fixed_tl, a[0] = fixed_td, Z_OK;
};
const START = 0, LEN = 1, LENEXT = 2, DIST = 3, DISTEXT = 4, COPY = 5, LIT = 6, WASH = 7, END = 8, BADCODE = 9;
function InfCodes() {
  const t = this;
  let n, s = 0, a, i = 0, o = 0, u = 0, c = 0, l = 0, d = 0, f = 0, h, T = 0, p, I = 0;
  function E(_, m, b, S, C, g, D, N) {
    let R, P, v, x, Y, w, q, K, U, J, ee, _e, y, F, H, j;
    q = N.next_in_index, K = N.avail_in, Y = D.bitb, w = D.bitk, U = D.write, J = U < D.read ? D.read - U - 1 : D.end - U, ee = inflate_mask[_], _e = inflate_mask[m];
    do {
      for (; w < 20; )
        K--, Y |= (N.read_byte(q++) & 255) << w, w += 8;
      if (R = Y & ee, P = b, v = S, j = (v + R) * 3, (x = P[j]) === 0) {
        Y >>= P[j + 1], w -= P[j + 1], D.win[U++] = /* (byte) */
        P[j + 2], J--;
        continue;
      }
      do {
        if (Y >>= P[j + 1], w -= P[j + 1], x & 16) {
          for (x &= 15, y = P[j + 2] + /* (int) */
          (Y & inflate_mask[x]), Y >>= x, w -= x; w < 15; )
            K--, Y |= (N.read_byte(q++) & 255) << w, w += 8;
          R = Y & _e, P = C, v = g, j = (v + R) * 3, x = P[j];
          do
            if (Y >>= P[j + 1], w -= P[j + 1], x & 16) {
              for (x &= 15; w < x; )
                K--, Y |= (N.read_byte(q++) & 255) << w, w += 8;
              if (F = P[j + 2] + (Y & inflate_mask[x]), Y >>= x, w -= x, J -= y, U >= F)
                H = U - F, U - H > 0 && 2 > U - H ? (D.win[U++] = D.win[H++], D.win[U++] = D.win[H++], y -= 2) : (D.win.set(D.win.subarray(H, H + 2), U), U += 2, H += 2, y -= 2);
              else {
                H = U - F;
                do
                  H += D.end;
                while (H < 0);
                if (x = D.end - H, y > x) {
                  if (y -= x, U - H > 0 && x > U - H)
                    do
                      D.win[U++] = D.win[H++];
                    while (--x !== 0);
                  else
                    D.win.set(D.win.subarray(H, H + x), U), U += x, H += x, x = 0;
                  H = 0;
                }
              }
              if (U - H > 0 && y > U - H)
                do
                  D.win[U++] = D.win[H++];
                while (--y !== 0);
              else
                D.win.set(D.win.subarray(H, H + y), U), U += y, H += y, y = 0;
              break;
            } else if (!(x & 64))
              R += P[j + 2], R += Y & inflate_mask[x], j = (v + R) * 3, x = P[j];
            else
              return N.msg = "invalid distance code", y = N.avail_in - K, y = w >> 3 < y ? w >> 3 : y, K += y, q -= y, w -= y << 3, D.bitb = Y, D.bitk = w, N.avail_in = K, N.total_in += q - N.next_in_index, N.next_in_index = q, D.write = U, Z_DATA_ERROR;
          while (!0);
          break;
        }
        if (x & 64)
          return x & 32 ? (y = N.avail_in - K, y = w >> 3 < y ? w >> 3 : y, K += y, q -= y, w -= y << 3, D.bitb = Y, D.bitk = w, N.avail_in = K, N.total_in += q - N.next_in_index, N.next_in_index = q, D.write = U, Z_STREAM_END) : (N.msg = "invalid literal/length code", y = N.avail_in - K, y = w >> 3 < y ? w >> 3 : y, K += y, q -= y, w -= y << 3, D.bitb = Y, D.bitk = w, N.avail_in = K, N.total_in += q - N.next_in_index, N.next_in_index = q, D.write = U, Z_DATA_ERROR);
        if (R += P[j + 2], R += Y & inflate_mask[x], j = (v + R) * 3, (x = P[j]) === 0) {
          Y >>= P[j + 1], w -= P[j + 1], D.win[U++] = /* (byte) */
          P[j + 2], J--;
          break;
        }
      } while (!0);
    } while (J >= 258 && K >= 10);
    return y = N.avail_in - K, y = w >> 3 < y ? w >> 3 : y, K += y, q -= y, w -= y << 3, D.bitb = Y, D.bitk = w, N.avail_in = K, N.total_in += q - N.next_in_index, N.next_in_index = q, D.write = U, Z_OK;
  }
  t.init = function(_, m, b, S, C, g) {
    n = START, d = /* (byte) */
    _, f = /* (byte) */
    m, h = b, T = S, p = C, I = g, a = null;
  }, t.proc = function(_, m, b) {
    let S, C, g, D = 0, N = 0, R = 0, P, v, x, Y;
    for (R = m.next_in_index, P = m.avail_in, D = _.bitb, N = _.bitk, v = _.write, x = v < _.read ? _.read - v - 1 : _.end - v; ; )
      switch (n) {
        case START:
          if (x >= 258 && P >= 10 && (_.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, b = E(d, f, h, T, p, I, _, m), R = m.next_in_index, P = m.avail_in, D = _.bitb, N = _.bitk, v = _.write, x = v < _.read ? _.read - v - 1 : _.end - v, b != Z_OK)) {
            n = b == Z_STREAM_END ? WASH : BADCODE;
            break;
          }
          o = d, a = h, i = T, n = LEN;
        case LEN:
          for (S = o; N < S; ) {
            if (P !== 0)
              b = Z_OK;
            else
              return _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
            P--, D |= (m.read_byte(R++) & 255) << N, N += 8;
          }
          if (C = (i + (D & inflate_mask[S])) * 3, D >>>= a[C + 1], N -= a[C + 1], g = a[C], g === 0) {
            u = a[C + 2], n = LIT;
            break;
          }
          if (g & 16) {
            c = g & 15, s = a[C + 2], n = LENEXT;
            break;
          }
          if (!(g & 64)) {
            o = g, i = C / 3 + a[C + 2];
            break;
          }
          if (g & 32) {
            n = WASH;
            break;
          }
          return n = BADCODE, m.msg = "invalid literal/length code", b = Z_DATA_ERROR, _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
        case LENEXT:
          for (S = c; N < S; ) {
            if (P !== 0)
              b = Z_OK;
            else
              return _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
            P--, D |= (m.read_byte(R++) & 255) << N, N += 8;
          }
          s += D & inflate_mask[S], D >>= S, N -= S, o = f, a = p, i = I, n = DIST;
        case DIST:
          for (S = o; N < S; ) {
            if (P !== 0)
              b = Z_OK;
            else
              return _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
            P--, D |= (m.read_byte(R++) & 255) << N, N += 8;
          }
          if (C = (i + (D & inflate_mask[S])) * 3, D >>= a[C + 1], N -= a[C + 1], g = a[C], g & 16) {
            c = g & 15, l = a[C + 2], n = DISTEXT;
            break;
          }
          if (!(g & 64)) {
            o = g, i = C / 3 + a[C + 2];
            break;
          }
          return n = BADCODE, m.msg = "invalid distance code", b = Z_DATA_ERROR, _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
        case DISTEXT:
          for (S = c; N < S; ) {
            if (P !== 0)
              b = Z_OK;
            else
              return _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
            P--, D |= (m.read_byte(R++) & 255) << N, N += 8;
          }
          l += D & inflate_mask[S], D >>= S, N -= S, n = COPY;
        case COPY:
          for (Y = v - l; Y < 0; )
            Y += _.end;
          for (; s !== 0; ) {
            if (x === 0 && (v == _.end && _.read !== 0 && (v = 0, x = v < _.read ? _.read - v - 1 : _.end - v), x === 0 && (_.write = v, b = _.inflate_flush(m, b), v = _.write, x = v < _.read ? _.read - v - 1 : _.end - v, v == _.end && _.read !== 0 && (v = 0, x = v < _.read ? _.read - v - 1 : _.end - v), x === 0)))
              return _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
            _.win[v++] = _.win[Y++], x--, Y == _.end && (Y = 0), s--;
          }
          n = START;
          break;
        case LIT:
          if (x === 0 && (v == _.end && _.read !== 0 && (v = 0, x = v < _.read ? _.read - v - 1 : _.end - v), x === 0 && (_.write = v, b = _.inflate_flush(m, b), v = _.write, x = v < _.read ? _.read - v - 1 : _.end - v, v == _.end && _.read !== 0 && (v = 0, x = v < _.read ? _.read - v - 1 : _.end - v), x === 0)))
            return _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
          b = Z_OK, _.win[v++] = /* (byte) */
          u, x--, n = START;
          break;
        case WASH:
          if (N > 7 && (N -= 8, P++, R--), _.write = v, b = _.inflate_flush(m, b), v = _.write, x = v < _.read ? _.read - v - 1 : _.end - v, _.read != _.write)
            return _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
          n = END;
        case END:
          return b = Z_STREAM_END, _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
        case BADCODE:
          return b = Z_DATA_ERROR, _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
        default:
          return b = Z_STREAM_ERROR, _.bitb = D, _.bitk = N, m.avail_in = P, m.total_in += R - m.next_in_index, m.next_in_index = R, _.write = v, _.inflate_flush(m, b);
      }
  }, t.free = function() {
  };
}
const border = [
  // Order of the bit length code lengths
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
], TYPE = 0, LENS = 1, STORED = 2, TABLE = 3, BTREE = 4, DTREE = 5, CODES = 6, DRY = 7, DONELOCKS = 8, BADBLOCKS = 9;
function InfBlocks(t, n) {
  const s = this;
  let a = TYPE, i = 0, o = 0, u = 0, c;
  const l = [0], d = [0], f = new InfCodes();
  let h = 0, T = new Int32Array(MANY * 3);
  const p = 0, I = new InfTree();
  s.bitk = 0, s.bitb = 0, s.win = new Uint8Array(n), s.end = n, s.read = 0, s.write = 0, s.reset = function(E, _) {
    _ && (_[0] = p), a == CODES && f.free(E), a = TYPE, s.bitk = 0, s.bitb = 0, s.read = s.write = 0;
  }, s.reset(t, null), s.inflate_flush = function(E, _) {
    let m, b, S;
    return b = E.next_out_index, S = s.read, m = /* (int) */
    (S <= s.write ? s.write : s.end) - S, m > E.avail_out && (m = E.avail_out), m !== 0 && _ == Z_BUF_ERROR && (_ = Z_OK), E.avail_out -= m, E.total_out += m, E.next_out.set(s.win.subarray(S, S + m), b), b += m, S += m, S == s.end && (S = 0, s.write == s.end && (s.write = 0), m = s.write - S, m > E.avail_out && (m = E.avail_out), m !== 0 && _ == Z_BUF_ERROR && (_ = Z_OK), E.avail_out -= m, E.total_out += m, E.next_out.set(s.win.subarray(S, S + m), b), b += m, S += m), E.next_out_index = b, s.read = S, _;
  }, s.proc = function(E, _) {
    let m, b, S, C, g, D, N, R;
    for (C = E.next_in_index, g = E.avail_in, b = s.bitb, S = s.bitk, D = s.write, N = /* (int) */
    D < s.read ? s.read - D - 1 : s.end - D; ; ) {
      let P, v, x, Y, w, q, K, U;
      switch (a) {
        case TYPE:
          for (; S < 3; ) {
            if (g !== 0)
              _ = Z_OK;
            else
              return s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
            g--, b |= (E.read_byte(C++) & 255) << S, S += 8;
          }
          switch (m = /* (int) */
          b & 7, h = m & 1, m >>> 1) {
            case 0:
              b >>>= 3, S -= 3, m = S & 7, b >>>= m, S -= m, a = LENS;
              break;
            case 1:
              P = [], v = [], x = [[]], Y = [[]], InfTree.inflate_trees_fixed(P, v, x, Y), f.init(P[0], v[0], x[0], 0, Y[0], 0), b >>>= 3, S -= 3, a = CODES;
              break;
            case 2:
              b >>>= 3, S -= 3, a = TABLE;
              break;
            case 3:
              return b >>>= 3, S -= 3, a = BADBLOCKS, E.msg = "invalid block type", _ = Z_DATA_ERROR, s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
          }
          break;
        case LENS:
          for (; S < 32; ) {
            if (g !== 0)
              _ = Z_OK;
            else
              return s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
            g--, b |= (E.read_byte(C++) & 255) << S, S += 8;
          }
          if ((~b >>> 16 & 65535) != (b & 65535))
            return a = BADBLOCKS, E.msg = "invalid stored block lengths", _ = Z_DATA_ERROR, s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
          i = b & 65535, b = S = 0, a = i !== 0 ? STORED : h !== 0 ? DRY : TYPE;
          break;
        case STORED:
          if (g === 0 || N === 0 && (D == s.end && s.read !== 0 && (D = 0, N = /* (int) */
          D < s.read ? s.read - D - 1 : s.end - D), N === 0 && (s.write = D, _ = s.inflate_flush(E, _), D = s.write, N = /* (int) */
          D < s.read ? s.read - D - 1 : s.end - D, D == s.end && s.read !== 0 && (D = 0, N = /* (int) */
          D < s.read ? s.read - D - 1 : s.end - D), N === 0)))
            return s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
          if (_ = Z_OK, m = i, m > g && (m = g), m > N && (m = N), s.win.set(E.read_buf(C, m), D), C += m, g -= m, D += m, N -= m, (i -= m) !== 0)
            break;
          a = h !== 0 ? DRY : TYPE;
          break;
        case TABLE:
          for (; S < 14; ) {
            if (g !== 0)
              _ = Z_OK;
            else
              return s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
            g--, b |= (E.read_byte(C++) & 255) << S, S += 8;
          }
          if (o = m = b & 16383, (m & 31) > 29 || (m >> 5 & 31) > 29)
            return a = BADBLOCKS, E.msg = "too many length or distance symbols", _ = Z_DATA_ERROR, s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
          if (m = 258 + (m & 31) + (m >> 5 & 31), !c || c.length < m)
            c = [];
          else
            for (R = 0; R < m; R++)
              c[R] = 0;
          b >>>= 14, S -= 14, u = 0, a = BTREE;
        case BTREE:
          for (; u < 4 + (o >>> 10); ) {
            for (; S < 3; ) {
              if (g !== 0)
                _ = Z_OK;
              else
                return s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
              g--, b |= (E.read_byte(C++) & 255) << S, S += 8;
            }
            c[border[u++]] = b & 7, b >>>= 3, S -= 3;
          }
          for (; u < 19; )
            c[border[u++]] = 0;
          if (l[0] = 7, m = I.inflate_trees_bits(c, l, d, T, E), m != Z_OK)
            return _ = m, _ == Z_DATA_ERROR && (c = null, a = BADBLOCKS), s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
          u = 0, a = DTREE;
        case DTREE:
          for (; m = o, !(u >= 258 + (m & 31) + (m >> 5 & 31)); ) {
            let J, ee;
            for (m = l[0]; S < m; ) {
              if (g !== 0)
                _ = Z_OK;
              else
                return s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
              g--, b |= (E.read_byte(C++) & 255) << S, S += 8;
            }
            if (m = T[(d[0] + (b & inflate_mask[m])) * 3 + 1], ee = T[(d[0] + (b & inflate_mask[m])) * 3 + 2], ee < 16)
              b >>>= m, S -= m, c[u++] = ee;
            else {
              for (R = ee == 18 ? 7 : ee - 14, J = ee == 18 ? 11 : 3; S < m + R; ) {
                if (g !== 0)
                  _ = Z_OK;
                else
                  return s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
                g--, b |= (E.read_byte(C++) & 255) << S, S += 8;
              }
              if (b >>>= m, S -= m, J += b & inflate_mask[R], b >>>= R, S -= R, R = u, m = o, R + J > 258 + (m & 31) + (m >> 5 & 31) || ee == 16 && R < 1)
                return c = null, a = BADBLOCKS, E.msg = "invalid bit length repeat", _ = Z_DATA_ERROR, s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
              ee = ee == 16 ? c[R - 1] : 0;
              do
                c[R++] = ee;
              while (--J !== 0);
              u = R;
            }
          }
          if (d[0] = -1, w = [], q = [], K = [], U = [], w[0] = 9, q[0] = 6, m = o, m = I.inflate_trees_dynamic(257 + (m & 31), 1 + (m >> 5 & 31), c, w, q, K, U, T, E), m != Z_OK)
            return m == Z_DATA_ERROR && (c = null, a = BADBLOCKS), _ = m, s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
          f.init(w[0], q[0], T, K[0], T, U[0]), a = CODES;
        case CODES:
          if (s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, (_ = f.proc(s, E, _)) != Z_STREAM_END)
            return s.inflate_flush(E, _);
          if (_ = Z_OK, f.free(E), C = E.next_in_index, g = E.avail_in, b = s.bitb, S = s.bitk, D = s.write, N = /* (int) */
          D < s.read ? s.read - D - 1 : s.end - D, h === 0) {
            a = TYPE;
            break;
          }
          a = DRY;
        case DRY:
          if (s.write = D, _ = s.inflate_flush(E, _), D = s.write, N = /* (int) */
          D < s.read ? s.read - D - 1 : s.end - D, s.read != s.write)
            return s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
          a = DONELOCKS;
        case DONELOCKS:
          return _ = Z_STREAM_END, s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
        case BADBLOCKS:
          return _ = Z_DATA_ERROR, s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
        default:
          return _ = Z_STREAM_ERROR, s.bitb = b, s.bitk = S, E.avail_in = g, E.total_in += C - E.next_in_index, E.next_in_index = C, s.write = D, s.inflate_flush(E, _);
      }
    }
  }, s.free = function(E) {
    s.reset(E, null), s.win = null, T = null;
  }, s.set_dictionary = function(E, _, m) {
    s.win.set(E.subarray(_, _ + m), 0), s.read = s.write = m;
  }, s.sync_point = function() {
    return a == LENS ? 1 : 0;
  };
}
const PRESET_DICT = 32, Z_DEFLATED = 8, METHOD = 0, FLAG = 1, DICT4 = 2, DICT3 = 3, DICT2 = 4, DICT1 = 5, DICT0 = 6, BLOCKS = 7, DONE = 12, BAD = 13, mark = [0, 0, 255, 255];
function Inflate() {
  const t = this;
  t.mode = 0, t.method = 0, t.was = [0], t.need = 0, t.marker = 0, t.wbits = 0;
  function n(s) {
    return !s || !s.istate ? Z_STREAM_ERROR : (s.total_in = s.total_out = 0, s.msg = null, s.istate.mode = BLOCKS, s.istate.blocks.reset(s, null), Z_OK);
  }
  t.inflateEnd = function(s) {
    return t.blocks && t.blocks.free(s), t.blocks = null, Z_OK;
  }, t.inflateInit = function(s, a) {
    return s.msg = null, t.blocks = null, a < 8 || a > 15 ? (t.inflateEnd(s), Z_STREAM_ERROR) : (t.wbits = a, s.istate.blocks = new InfBlocks(s, 1 << a), n(s), Z_OK);
  }, t.inflate = function(s, a) {
    let i, o;
    if (!s || !s.istate || !s.next_in)
      return Z_STREAM_ERROR;
    const u = s.istate;
    for (a = a == Z_FINISH ? Z_BUF_ERROR : Z_OK, i = Z_BUF_ERROR; ; )
      switch (u.mode) {
        case METHOD:
          if (s.avail_in === 0)
            return i;
          if (i = a, s.avail_in--, s.total_in++, ((u.method = s.read_byte(s.next_in_index++)) & 15) != Z_DEFLATED) {
            u.mode = BAD, s.msg = "unknown compression method", u.marker = 5;
            break;
          }
          if ((u.method >> 4) + 8 > u.wbits) {
            u.mode = BAD, s.msg = "invalid win size", u.marker = 5;
            break;
          }
          u.mode = FLAG;
        case FLAG:
          if (s.avail_in === 0)
            return i;
          if (i = a, s.avail_in--, s.total_in++, o = s.read_byte(s.next_in_index++) & 255, ((u.method << 8) + o) % 31 !== 0) {
            u.mode = BAD, s.msg = "incorrect header check", u.marker = 5;
            break;
          }
          if (!(o & PRESET_DICT)) {
            u.mode = BLOCKS;
            break;
          }
          u.mode = DICT4;
        case DICT4:
          if (s.avail_in === 0)
            return i;
          i = a, s.avail_in--, s.total_in++, u.need = (s.read_byte(s.next_in_index++) & 255) << 24 & 4278190080, u.mode = DICT3;
        case DICT3:
          if (s.avail_in === 0)
            return i;
          i = a, s.avail_in--, s.total_in++, u.need += (s.read_byte(s.next_in_index++) & 255) << 16 & 16711680, u.mode = DICT2;
        case DICT2:
          if (s.avail_in === 0)
            return i;
          i = a, s.avail_in--, s.total_in++, u.need += (s.read_byte(s.next_in_index++) & 255) << 8 & 65280, u.mode = DICT1;
        case DICT1:
          return s.avail_in === 0 ? i : (i = a, s.avail_in--, s.total_in++, u.need += s.read_byte(s.next_in_index++) & 255, u.mode = DICT0, Z_NEED_DICT);
        case DICT0:
          return u.mode = BAD, s.msg = "need dictionary", u.marker = 0, Z_STREAM_ERROR;
        case BLOCKS:
          if (i = u.blocks.proc(s, i), i == Z_DATA_ERROR) {
            u.mode = BAD, u.marker = 0;
            break;
          }
          if (i == Z_OK && (i = a), i != Z_STREAM_END)
            return i;
          i = a, u.blocks.reset(s, u.was), u.mode = DONE;
        case DONE:
          return s.avail_in = 0, Z_STREAM_END;
        case BAD:
          return Z_DATA_ERROR;
        default:
          return Z_STREAM_ERROR;
      }
  }, t.inflateSetDictionary = function(s, a, i) {
    let o = 0, u = i;
    if (!s || !s.istate || s.istate.mode != DICT0)
      return Z_STREAM_ERROR;
    const c = s.istate;
    return u >= 1 << c.wbits && (u = (1 << c.wbits) - 1, o = i - u), c.blocks.set_dictionary(a, o, u), c.mode = BLOCKS, Z_OK;
  }, t.inflateSync = function(s) {
    let a, i, o, u, c;
    if (!s || !s.istate)
      return Z_STREAM_ERROR;
    const l = s.istate;
    if (l.mode != BAD && (l.mode = BAD, l.marker = 0), (a = s.avail_in) === 0)
      return Z_BUF_ERROR;
    for (i = s.next_in_index, o = l.marker; a !== 0 && o < 4; )
      s.read_byte(i) == mark[o] ? o++ : s.read_byte(i) !== 0 ? o = 0 : o = 4 - o, i++, a--;
    return s.total_in += i - s.next_in_index, s.next_in_index = i, s.avail_in = a, l.marker = o, o != 4 ? Z_DATA_ERROR : (u = s.total_in, c = s.total_out, n(s), s.total_in = u, s.total_out = c, l.mode = BLOCKS, Z_OK);
  }, t.inflateSyncPoint = function(s) {
    return !s || !s.istate || !s.istate.blocks ? Z_STREAM_ERROR : s.istate.blocks.sync_point();
  };
}
function ZStream() {
}
ZStream.prototype = {
  inflateInit(t) {
    const n = this;
    return n.istate = new Inflate(), t || (t = MAX_BITS), n.istate.inflateInit(n, t);
  },
  inflate(t) {
    const n = this;
    return n.istate ? n.istate.inflate(n, t) : Z_STREAM_ERROR;
  },
  inflateEnd() {
    const t = this;
    if (!t.istate)
      return Z_STREAM_ERROR;
    const n = t.istate.inflateEnd(t);
    return t.istate = null, n;
  },
  inflateSync() {
    const t = this;
    return t.istate ? t.istate.inflateSync(t) : Z_STREAM_ERROR;
  },
  inflateSetDictionary(t, n) {
    const s = this;
    return s.istate ? s.istate.inflateSetDictionary(s, t, n) : Z_STREAM_ERROR;
  },
  read_byte(t) {
    return this.next_in[t];
  },
  read_buf(t, n) {
    return this.next_in.subarray(t, t + n);
  }
};
function ZipInflate(t) {
  const n = this, s = new ZStream(), a = t && t.chunkSize ? Math.floor(t.chunkSize * 2) : 128 * 1024, i = Z_NO_FLUSH, o = new Uint8Array(a);
  let u = !1;
  s.inflateInit(), s.next_out = o, n.append = function(c, l) {
    const d = [];
    let f, h, T = 0, p = 0, I = 0;
    if (c.length !== 0) {
      s.next_in_index = 0, s.next_in = c, s.avail_in = c.length;
      do {
        if (s.next_out_index = 0, s.avail_out = a, s.avail_in === 0 && !u && (s.next_in_index = 0, u = !0), f = s.inflate(i), u && f === Z_BUF_ERROR) {
          if (s.avail_in !== 0)
            throw new Error("inflating: bad input");
        } else if (f !== Z_OK && f !== Z_STREAM_END)
          throw new Error("inflating: " + s.msg);
        if ((u || f === Z_STREAM_END) && s.avail_in === c.length)
          throw new Error("inflating: bad input");
        s.next_out_index && (s.next_out_index === a ? d.push(new Uint8Array(o)) : d.push(o.subarray(0, s.next_out_index))), I += s.next_out_index, l && s.next_in_index > 0 && s.next_in_index != T && (l(s.next_in_index), T = s.next_in_index);
      } while (s.avail_in > 0 || s.avail_out === 0);
      return d.length > 1 ? (h = new Uint8Array(I), d.forEach(function(E) {
        h.set(E, p), p += E.length;
      })) : h = d[0] ? new Uint8Array(d[0]) : new Uint8Array(), h;
    }
  }, n.flush = function() {
    s.inflateEnd();
  };
}
const MAX_32_BITS = 4294967295, MAX_16_BITS = 65535, COMPRESSION_METHOD_DEFLATE = 8, COMPRESSION_METHOD_STORE = 0, COMPRESSION_METHOD_AES = 99, LOCAL_FILE_HEADER_SIGNATURE = 67324752, SPLIT_ZIP_FILE_SIGNATURE = 134695760, CENTRAL_FILE_HEADER_SIGNATURE = 33639248, END_OF_CENTRAL_DIR_SIGNATURE = 101010256, ZIP64_END_OF_CENTRAL_DIR_SIGNATURE = 101075792, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE = 117853008, END_OF_CENTRAL_DIR_LENGTH = 22, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH = 20, ZIP64_END_OF_CENTRAL_DIR_LENGTH = 56, EXTRAFIELD_TYPE_ZIP64 = 1, EXTRAFIELD_TYPE_AES = 39169, EXTRAFIELD_TYPE_NTFS = 10, EXTRAFIELD_TYPE_NTFS_TAG1 = 1, EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP = 21589, EXTRAFIELD_TYPE_UNICODE_PATH = 28789, EXTRAFIELD_TYPE_UNICODE_COMMENT = 25461, EXTRAFIELD_TYPE_USDZ = 6534, BITFLAG_ENCRYPTED = 1, BITFLAG_LEVEL = 6, BITFLAG_DATA_DESCRIPTOR = 8, BITFLAG_LANG_ENCODING_FLAG = 2048, FILE_ATTR_MSDOS_DIR_MASK = 16, DIRECTORY_SIGNATURE = "/", UNDEFINED_VALUE = void 0, UNDEFINED_TYPE = "undefined", FUNCTION_TYPE = "function";
class StreamAdapter {
  constructor(n) {
    return class extends TransformStream {
      constructor(s, a) {
        const i = new n(a);
        super({
          transform(o, u) {
            u.enqueue(i.append(o));
          },
          flush(o) {
            const u = i.flush();
            u && o.enqueue(u);
          }
        });
      }
    };
  }
}
const MINIMUM_CHUNK_SIZE = 64;
let maxWorkers = 2;
try {
  typeof navigator != UNDEFINED_TYPE && navigator.hardwareConcurrency && (maxWorkers = navigator.hardwareConcurrency);
} catch {
}
const DEFAULT_CONFIGURATION = {
  chunkSize: 512 * 1024,
  maxWorkers,
  terminateWorkerTimeout: 5e3,
  useWebWorkers: !0,
  useCompressionStream: !0,
  workerScripts: UNDEFINED_VALUE,
  CompressionStreamNative: typeof CompressionStream != UNDEFINED_TYPE && CompressionStream,
  DecompressionStreamNative: typeof DecompressionStream != UNDEFINED_TYPE && DecompressionStream
}, config = Object.assign({}, DEFAULT_CONFIGURATION);
function getConfiguration() {
  return config;
}
function getChunkSize(t) {
  return Math.max(t.chunkSize, MINIMUM_CHUNK_SIZE);
}
function configure(t) {
  const {
    baseURL: n,
    chunkSize: s,
    maxWorkers: a,
    terminateWorkerTimeout: i,
    useCompressionStream: o,
    useWebWorkers: u,
    Deflate: c,
    Inflate: l,
    CompressionStream: d,
    DecompressionStream: f,
    workerScripts: h
  } = t;
  if (setIfDefined("baseURL", n), setIfDefined("chunkSize", s), setIfDefined("maxWorkers", a), setIfDefined("terminateWorkerTimeout", i), setIfDefined("useCompressionStream", o), setIfDefined("useWebWorkers", u), c && (config.CompressionStream = new StreamAdapter(c)), l && (config.DecompressionStream = new StreamAdapter(l)), setIfDefined("CompressionStream", d), setIfDefined("DecompressionStream", f), h !== UNDEFINED_VALUE) {
    const { deflate: T, inflate: p } = h;
    if ((T || p) && (config.workerScripts || (config.workerScripts = {})), T) {
      if (!Array.isArray(T))
        throw new Error("workerScripts.deflate must be an array");
      config.workerScripts.deflate = T;
    }
    if (p) {
      if (!Array.isArray(p))
        throw new Error("workerScripts.inflate must be an array");
      config.workerScripts.inflate = p;
    }
  }
}
function setIfDefined(t, n) {
  n !== UNDEFINED_VALUE && (config[t] = n);
}
const table$1 = {
  application: {
    "andrew-inset": "ez",
    annodex: "anx",
    "atom+xml": "atom",
    "atomcat+xml": "atomcat",
    "atomserv+xml": "atomsrv",
    bbolin: "lin",
    "cu-seeme": "cu",
    "davmount+xml": "davmount",
    dsptype: "tsp",
    ecmascript: [
      "es",
      "ecma"
    ],
    futuresplash: "spl",
    hta: "hta",
    "java-archive": "jar",
    "java-serialized-object": "ser",
    "java-vm": "class",
    m3g: "m3g",
    "mac-binhex40": "hqx",
    mathematica: [
      "nb",
      "ma",
      "mb"
    ],
    msaccess: "mdb",
    msword: [
      "doc",
      "dot",
      "wiz"
    ],
    mxf: "mxf",
    oda: "oda",
    ogg: "ogx",
    pdf: "pdf",
    "pgp-keys": "key",
    "pgp-signature": [
      "asc",
      "sig"
    ],
    "pics-rules": "prf",
    postscript: [
      "ps",
      "ai",
      "eps",
      "epsi",
      "epsf",
      "eps2",
      "eps3"
    ],
    rar: "rar",
    "rdf+xml": "rdf",
    "rss+xml": "rss",
    rtf: "rtf",
    "xhtml+xml": [
      "xhtml",
      "xht"
    ],
    xml: [
      "xml",
      "xsl",
      "xsd",
      "xpdl"
    ],
    "xspf+xml": "xspf",
    zip: "zip",
    "vnd.android.package-archive": "apk",
    "vnd.cinderella": "cdy",
    "vnd.google-earth.kml+xml": "kml",
    "vnd.google-earth.kmz": "kmz",
    "vnd.mozilla.xul+xml": "xul",
    "vnd.ms-excel": [
      "xls",
      "xlb",
      "xlt",
      "xlm",
      "xla",
      "xlc",
      "xlw"
    ],
    "vnd.ms-pki.seccat": "cat",
    "vnd.ms-pki.stl": "stl",
    "vnd.ms-powerpoint": [
      "ppt",
      "pps",
      "pot",
      "ppa",
      "pwz"
    ],
    "vnd.oasis.opendocument.chart": "odc",
    "vnd.oasis.opendocument.database": "odb",
    "vnd.oasis.opendocument.formula": "odf",
    "vnd.oasis.opendocument.graphics": "odg",
    "vnd.oasis.opendocument.graphics-template": "otg",
    "vnd.oasis.opendocument.image": "odi",
    "vnd.oasis.opendocument.presentation": "odp",
    "vnd.oasis.opendocument.presentation-template": "otp",
    "vnd.oasis.opendocument.spreadsheet": "ods",
    "vnd.oasis.opendocument.spreadsheet-template": "ots",
    "vnd.oasis.opendocument.text": "odt",
    "vnd.oasis.opendocument.text-master": [
      "odm",
      "otm"
    ],
    "vnd.oasis.opendocument.text-template": "ott",
    "vnd.oasis.opendocument.text-web": "oth",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
    "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
    "vnd.openxmlformats-officedocument.presentationml.template": "potx",
    "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
    "vnd.smaf": "mmf",
    "vnd.stardivision.calc": "sdc",
    "vnd.stardivision.chart": "sds",
    "vnd.stardivision.draw": "sda",
    "vnd.stardivision.impress": "sdd",
    "vnd.stardivision.math": [
      "sdf",
      "smf"
    ],
    "vnd.stardivision.writer": [
      "sdw",
      "vor"
    ],
    "vnd.stardivision.writer-global": "sgl",
    "vnd.sun.xml.calc": "sxc",
    "vnd.sun.xml.calc.template": "stc",
    "vnd.sun.xml.draw": "sxd",
    "vnd.sun.xml.draw.template": "std",
    "vnd.sun.xml.impress": "sxi",
    "vnd.sun.xml.impress.template": "sti",
    "vnd.sun.xml.math": "sxm",
    "vnd.sun.xml.writer": "sxw",
    "vnd.sun.xml.writer.global": "sxg",
    "vnd.sun.xml.writer.template": "stw",
    "vnd.symbian.install": [
      "sis",
      "sisx"
    ],
    "vnd.visio": [
      "vsd",
      "vst",
      "vss",
      "vsw",
      "vsdx",
      "vssx",
      "vstx",
      "vssm",
      "vstm"
    ],
    "vnd.wap.wbxml": "wbxml",
    "vnd.wap.wmlc": "wmlc",
    "vnd.wap.wmlscriptc": "wmlsc",
    "vnd.wordperfect": "wpd",
    "vnd.wordperfect5.1": "wp5",
    "x-123": "wk",
    "x-7z-compressed": "7z",
    "x-abiword": "abw",
    "x-apple-diskimage": "dmg",
    "x-bcpio": "bcpio",
    "x-bittorrent": "torrent",
    "x-cbr": [
      "cbr",
      "cba",
      "cbt",
      "cb7"
    ],
    "x-cbz": "cbz",
    "x-cdf": [
      "cdf",
      "cda"
    ],
    "x-cdlink": "vcd",
    "x-chess-pgn": "pgn",
    "x-cpio": "cpio",
    "x-csh": "csh",
    "x-director": [
      "dir",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ],
    "x-dms": "dms",
    "x-doom": "wad",
    "x-dvi": "dvi",
    "x-httpd-eruby": "rhtml",
    "x-font": "pcf.Z",
    "x-freemind": "mm",
    "x-gnumeric": "gnumeric",
    "x-go-sgf": "sgf",
    "x-graphing-calculator": "gcf",
    "x-gtar": [
      "gtar",
      "taz"
    ],
    "x-hdf": "hdf",
    "x-httpd-php": [
      "phtml",
      "pht",
      "php"
    ],
    "x-httpd-php-source": "phps",
    "x-httpd-php3": "php3",
    "x-httpd-php3-preprocessed": "php3p",
    "x-httpd-php4": "php4",
    "x-httpd-php5": "php5",
    "x-ica": "ica",
    "x-info": "info",
    "x-internet-signup": [
      "ins",
      "isp"
    ],
    "x-iphone": "iii",
    "x-iso9660-image": "iso",
    "x-java-jnlp-file": "jnlp",
    "x-jmol": "jmz",
    "x-killustrator": "kil",
    "x-latex": "latex",
    "x-lyx": "lyx",
    "x-lzx": "lzx",
    "x-maker": [
      "frm",
      "fb",
      "fbdoc"
    ],
    "x-ms-wmd": "wmd",
    "x-msdos-program": [
      "com",
      "exe",
      "bat",
      "dll"
    ],
    "x-netcdf": [
      "nc"
    ],
    "x-ns-proxy-autoconfig": [
      "pac",
      "dat"
    ],
    "x-nwc": "nwc",
    "x-object": "o",
    "x-oz-application": "oza",
    "x-pkcs7-certreqresp": "p7r",
    "x-python-code": [
      "pyc",
      "pyo"
    ],
    "x-qgis": [
      "qgs",
      "shp",
      "shx"
    ],
    "x-quicktimeplayer": "qtl",
    "x-redhat-package-manager": [
      "rpm",
      "rpa"
    ],
    "x-ruby": "rb",
    "x-sh": "sh",
    "x-shar": "shar",
    "x-shockwave-flash": [
      "swf",
      "swfl"
    ],
    "x-silverlight": "scr",
    "x-stuffit": "sit",
    "x-sv4cpio": "sv4cpio",
    "x-sv4crc": "sv4crc",
    "x-tar": "tar",
    "x-tex-gf": "gf",
    "x-tex-pk": "pk",
    "x-texinfo": [
      "texinfo",
      "texi"
    ],
    "x-trash": [
      "~",
      "%",
      "bak",
      "old",
      "sik"
    ],
    "x-ustar": "ustar",
    "x-wais-source": "src",
    "x-wingz": "wz",
    "x-x509-ca-cert": [
      "crt",
      "der",
      "cer"
    ],
    "x-xcf": "xcf",
    "x-xfig": "fig",
    "x-xpinstall": "xpi",
    applixware: "aw",
    "atomsvc+xml": "atomsvc",
    "ccxml+xml": "ccxml",
    "cdmi-capability": "cdmia",
    "cdmi-container": "cdmic",
    "cdmi-domain": "cdmid",
    "cdmi-object": "cdmio",
    "cdmi-queue": "cdmiq",
    "docbook+xml": "dbk",
    "dssc+der": "dssc",
    "dssc+xml": "xdssc",
    "emma+xml": "emma",
    "epub+zip": "epub",
    exi: "exi",
    "font-tdpfr": "pfr",
    "gml+xml": "gml",
    "gpx+xml": "gpx",
    gxf: "gxf",
    hyperstudio: "stk",
    "inkml+xml": [
      "ink",
      "inkml"
    ],
    ipfix: "ipfix",
    "jsonml+json": "jsonml",
    "lost+xml": "lostxml",
    "mads+xml": "mads",
    marc: "mrc",
    "marcxml+xml": "mrcx",
    "mathml+xml": [
      "mathml",
      "mml"
    ],
    mbox: "mbox",
    "mediaservercontrol+xml": "mscml",
    "metalink+xml": "metalink",
    "metalink4+xml": "meta4",
    "mets+xml": "mets",
    "mods+xml": "mods",
    mp21: [
      "m21",
      "mp21"
    ],
    mp4: "mp4s",
    "oebps-package+xml": "opf",
    "omdoc+xml": "omdoc",
    onenote: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ],
    oxps: "oxps",
    "patch-ops-error+xml": "xer",
    "pgp-encrypted": "pgp",
    pkcs10: "p10",
    "pkcs7-mime": [
      "p7m",
      "p7c"
    ],
    "pkcs7-signature": "p7s",
    pkcs8: "p8",
    "pkix-attr-cert": "ac",
    "pkix-crl": "crl",
    "pkix-pkipath": "pkipath",
    pkixcmp: "pki",
    "pls+xml": "pls",
    "prs.cww": "cww",
    "pskc+xml": "pskcxml",
    "reginfo+xml": "rif",
    "relax-ng-compact-syntax": "rnc",
    "resource-lists+xml": "rl",
    "resource-lists-diff+xml": "rld",
    "rls-services+xml": "rs",
    "rpki-ghostbusters": "gbr",
    "rpki-manifest": "mft",
    "rpki-roa": "roa",
    "rsd+xml": "rsd",
    "sbml+xml": "sbml",
    "scvp-cv-request": "scq",
    "scvp-cv-response": "scs",
    "scvp-vp-request": "spq",
    "scvp-vp-response": "spp",
    sdp: "sdp",
    "set-payment-initiation": "setpay",
    "set-registration-initiation": "setreg",
    "shf+xml": "shf",
    "sparql-query": "rq",
    "sparql-results+xml": "srx",
    srgs: "gram",
    "srgs+xml": "grxml",
    "sru+xml": "sru",
    "ssdl+xml": "ssdl",
    "ssml+xml": "ssml",
    "tei+xml": [
      "tei",
      "teicorpus"
    ],
    "thraud+xml": "tfi",
    "timestamped-data": "tsd",
    "vnd.3gpp.pic-bw-large": "plb",
    "vnd.3gpp.pic-bw-small": "psb",
    "vnd.3gpp.pic-bw-var": "pvb",
    "vnd.3gpp2.tcap": "tcap",
    "vnd.3m.post-it-notes": "pwn",
    "vnd.accpac.simply.aso": "aso",
    "vnd.accpac.simply.imp": "imp",
    "vnd.acucobol": "acu",
    "vnd.acucorp": [
      "atc",
      "acutc"
    ],
    "vnd.adobe.air-application-installer-package+zip": "air",
    "vnd.adobe.formscentral.fcdt": "fcdt",
    "vnd.adobe.fxp": [
      "fxp",
      "fxpl"
    ],
    "vnd.adobe.xdp+xml": "xdp",
    "vnd.adobe.xfdf": "xfdf",
    "vnd.ahead.space": "ahead",
    "vnd.airzip.filesecure.azf": "azf",
    "vnd.airzip.filesecure.azs": "azs",
    "vnd.amazon.ebook": "azw",
    "vnd.americandynamics.acc": "acc",
    "vnd.amiga.ami": "ami",
    "vnd.anser-web-certificate-issue-initiation": "cii",
    "vnd.anser-web-funds-transfer-initiation": "fti",
    "vnd.antix.game-component": "atx",
    "vnd.apple.installer+xml": "mpkg",
    "vnd.apple.mpegurl": "m3u8",
    "vnd.aristanetworks.swi": "swi",
    "vnd.astraea-software.iota": "iota",
    "vnd.audiograph": "aep",
    "vnd.blueice.multipass": "mpm",
    "vnd.bmi": "bmi",
    "vnd.businessobjects": "rep",
    "vnd.chemdraw+xml": "cdxml",
    "vnd.chipnuts.karaoke-mmd": "mmd",
    "vnd.claymore": "cla",
    "vnd.cloanto.rp9": "rp9",
    "vnd.clonk.c4group": [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ],
    "vnd.cluetrust.cartomobile-config": "c11amc",
    "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
    "vnd.commonspace": "csp",
    "vnd.contact.cmsg": "cdbcmsg",
    "vnd.cosmocaller": "cmc",
    "vnd.crick.clicker": "clkx",
    "vnd.crick.clicker.keyboard": "clkk",
    "vnd.crick.clicker.palette": "clkp",
    "vnd.crick.clicker.template": "clkt",
    "vnd.crick.clicker.wordbank": "clkw",
    "vnd.criticaltools.wbs+xml": "wbs",
    "vnd.ctc-posml": "pml",
    "vnd.cups-ppd": "ppd",
    "vnd.curl.car": "car",
    "vnd.curl.pcurl": "pcurl",
    "vnd.dart": "dart",
    "vnd.data-vision.rdz": "rdz",
    "vnd.dece.data": [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ],
    "vnd.dece.ttml+xml": [
      "uvt",
      "uvvt"
    ],
    "vnd.dece.unspecified": [
      "uvx",
      "uvvx"
    ],
    "vnd.dece.zip": [
      "uvz",
      "uvvz"
    ],
    "vnd.denovo.fcselayout-link": "fe_launch",
    "vnd.dna": "dna",
    "vnd.dolby.mlp": "mlp",
    "vnd.dpgraph": "dpg",
    "vnd.dreamfactory": "dfac",
    "vnd.ds-keypoint": "kpxx",
    "vnd.dvb.ait": "ait",
    "vnd.dvb.service": "svc",
    "vnd.dynageo": "geo",
    "vnd.ecowin.chart": "mag",
    "vnd.enliven": "nml",
    "vnd.epson.esf": "esf",
    "vnd.epson.msf": "msf",
    "vnd.epson.quickanime": "qam",
    "vnd.epson.salt": "slt",
    "vnd.epson.ssf": "ssf",
    "vnd.eszigno3+xml": [
      "es3",
      "et3"
    ],
    "vnd.ezpix-album": "ez2",
    "vnd.ezpix-package": "ez3",
    "vnd.fdf": "fdf",
    "vnd.fdsn.mseed": "mseed",
    "vnd.fdsn.seed": [
      "seed",
      "dataless"
    ],
    "vnd.flographit": "gph",
    "vnd.fluxtime.clip": "ftc",
    "vnd.framemaker": [
      "fm",
      "frame",
      "maker",
      "book"
    ],
    "vnd.frogans.fnc": "fnc",
    "vnd.frogans.ltf": "ltf",
    "vnd.fsc.weblaunch": "fsc",
    "vnd.fujitsu.oasys": "oas",
    "vnd.fujitsu.oasys2": "oa2",
    "vnd.fujitsu.oasys3": "oa3",
    "vnd.fujitsu.oasysgp": "fg5",
    "vnd.fujitsu.oasysprs": "bh2",
    "vnd.fujixerox.ddd": "ddd",
    "vnd.fujixerox.docuworks": "xdw",
    "vnd.fujixerox.docuworks.binder": "xbd",
    "vnd.fuzzysheet": "fzs",
    "vnd.genomatix.tuxedo": "txd",
    "vnd.geogebra.file": "ggb",
    "vnd.geogebra.tool": "ggt",
    "vnd.geometry-explorer": [
      "gex",
      "gre"
    ],
    "vnd.geonext": "gxt",
    "vnd.geoplan": "g2w",
    "vnd.geospace": "g3w",
    "vnd.gmx": "gmx",
    "vnd.grafeq": [
      "gqf",
      "gqs"
    ],
    "vnd.groove-account": "gac",
    "vnd.groove-help": "ghf",
    "vnd.groove-identity-message": "gim",
    "vnd.groove-injector": "grv",
    "vnd.groove-tool-message": "gtm",
    "vnd.groove-tool-template": "tpl",
    "vnd.groove-vcard": "vcg",
    "vnd.hal+xml": "hal",
    "vnd.handheld-entertainment+xml": "zmm",
    "vnd.hbci": "hbci",
    "vnd.hhe.lesson-player": "les",
    "vnd.hp-hpgl": "hpgl",
    "vnd.hp-hpid": "hpid",
    "vnd.hp-hps": "hps",
    "vnd.hp-jlyt": "jlt",
    "vnd.hp-pcl": "pcl",
    "vnd.hp-pclxl": "pclxl",
    "vnd.hydrostatix.sof-data": "sfd-hdstx",
    "vnd.ibm.minipay": "mpy",
    "vnd.ibm.modcap": [
      "afp",
      "listafp",
      "list3820"
    ],
    "vnd.ibm.rights-management": "irm",
    "vnd.ibm.secure-container": "sc",
    "vnd.iccprofile": [
      "icc",
      "icm"
    ],
    "vnd.igloader": "igl",
    "vnd.immervision-ivp": "ivp",
    "vnd.immervision-ivu": "ivu",
    "vnd.insors.igm": "igm",
    "vnd.intercon.formnet": [
      "xpw",
      "xpx"
    ],
    "vnd.intergeo": "i2g",
    "vnd.intu.qbo": "qbo",
    "vnd.intu.qfx": "qfx",
    "vnd.ipunplugged.rcprofile": "rcprofile",
    "vnd.irepository.package+xml": "irp",
    "vnd.is-xpr": "xpr",
    "vnd.isac.fcs": "fcs",
    "vnd.jam": "jam",
    "vnd.jcp.javame.midlet-rms": "rms",
    "vnd.jisp": "jisp",
    "vnd.joost.joda-archive": "joda",
    "vnd.kahootz": [
      "ktz",
      "ktr"
    ],
    "vnd.kde.karbon": "karbon",
    "vnd.kde.kchart": "chrt",
    "vnd.kde.kformula": "kfo",
    "vnd.kde.kivio": "flw",
    "vnd.kde.kontour": "kon",
    "vnd.kde.kpresenter": [
      "kpr",
      "kpt"
    ],
    "vnd.kde.kspread": "ksp",
    "vnd.kde.kword": [
      "kwd",
      "kwt"
    ],
    "vnd.kenameaapp": "htke",
    "vnd.kidspiration": "kia",
    "vnd.kinar": [
      "kne",
      "knp"
    ],
    "vnd.koan": [
      "skp",
      "skd",
      "skt",
      "skm"
    ],
    "vnd.kodak-descriptor": "sse",
    "vnd.las.las+xml": "lasxml",
    "vnd.llamagraphics.life-balance.desktop": "lbd",
    "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
    "vnd.lotus-1-2-3": "123",
    "vnd.lotus-approach": "apr",
    "vnd.lotus-freelance": "pre",
    "vnd.lotus-notes": "nsf",
    "vnd.lotus-organizer": "org",
    "vnd.lotus-screencam": "scm",
    "vnd.lotus-wordpro": "lwp",
    "vnd.macports.portpkg": "portpkg",
    "vnd.mcd": "mcd",
    "vnd.medcalcdata": "mc1",
    "vnd.mediastation.cdkey": "cdkey",
    "vnd.mfer": "mwf",
    "vnd.mfmp": "mfm",
    "vnd.micrografx.flo": "flo",
    "vnd.micrografx.igx": "igx",
    "vnd.mif": "mif",
    "vnd.mobius.daf": "daf",
    "vnd.mobius.dis": "dis",
    "vnd.mobius.mbk": "mbk",
    "vnd.mobius.mqy": "mqy",
    "vnd.mobius.msl": "msl",
    "vnd.mobius.plc": "plc",
    "vnd.mobius.txf": "txf",
    "vnd.mophun.application": "mpn",
    "vnd.mophun.certificate": "mpc",
    "vnd.ms-artgalry": "cil",
    "vnd.ms-cab-compressed": "cab",
    "vnd.ms-excel.addin.macroenabled.12": "xlam",
    "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
    "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
    "vnd.ms-excel.template.macroenabled.12": "xltm",
    "vnd.ms-fontobject": "eot",
    "vnd.ms-htmlhelp": "chm",
    "vnd.ms-ims": "ims",
    "vnd.ms-lrm": "lrm",
    "vnd.ms-officetheme": "thmx",
    "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
    "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
    "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
    "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
    "vnd.ms-powerpoint.template.macroenabled.12": "potm",
    "vnd.ms-project": [
      "mpp",
      "mpt"
    ],
    "vnd.ms-word.document.macroenabled.12": "docm",
    "vnd.ms-word.template.macroenabled.12": "dotm",
    "vnd.ms-works": [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ],
    "vnd.ms-wpl": "wpl",
    "vnd.ms-xpsdocument": "xps",
    "vnd.mseq": "mseq",
    "vnd.musician": "mus",
    "vnd.muvee.style": "msty",
    "vnd.mynfc": "taglet",
    "vnd.neurolanguage.nlu": "nlu",
    "vnd.nitf": [
      "ntf",
      "nitf"
    ],
    "vnd.noblenet-directory": "nnd",
    "vnd.noblenet-sealer": "nns",
    "vnd.noblenet-web": "nnw",
    "vnd.nokia.n-gage.data": "ngdat",
    "vnd.nokia.n-gage.symbian.install": "n-gage",
    "vnd.nokia.radio-preset": "rpst",
    "vnd.nokia.radio-presets": "rpss",
    "vnd.novadigm.edm": "edm",
    "vnd.novadigm.edx": "edx",
    "vnd.novadigm.ext": "ext",
    "vnd.oasis.opendocument.chart-template": "otc",
    "vnd.oasis.opendocument.formula-template": "odft",
    "vnd.oasis.opendocument.image-template": "oti",
    "vnd.olpc-sugar": "xo",
    "vnd.oma.dd2+xml": "dd2",
    "vnd.openofficeorg.extension": "oxt",
    "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
    "vnd.osgeo.mapguide.package": "mgp",
    "vnd.osgi.dp": "dp",
    "vnd.osgi.subsystem": "esa",
    "vnd.palm": [
      "pdb",
      "pqa",
      "oprc"
    ],
    "vnd.pawaafile": "paw",
    "vnd.pg.format": "str",
    "vnd.pg.osasli": "ei6",
    "vnd.picsel": "efif",
    "vnd.pmi.widget": "wg",
    "vnd.pocketlearn": "plf",
    "vnd.powerbuilder6": "pbd",
    "vnd.previewsystems.box": "box",
    "vnd.proteus.magazine": "mgz",
    "vnd.publishare-delta-tree": "qps",
    "vnd.pvi.ptid1": "ptid",
    "vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ],
    "vnd.realvnc.bed": "bed",
    "vnd.recordare.musicxml": "mxl",
    "vnd.recordare.musicxml+xml": "musicxml",
    "vnd.rig.cryptonote": "cryptonote",
    "vnd.rn-realmedia": "rm",
    "vnd.rn-realmedia-vbr": "rmvb",
    "vnd.route66.link66+xml": "link66",
    "vnd.sailingtracker.track": "st",
    "vnd.seemail": "see",
    "vnd.sema": "sema",
    "vnd.semd": "semd",
    "vnd.semf": "semf",
    "vnd.shana.informed.formdata": "ifm",
    "vnd.shana.informed.formtemplate": "itp",
    "vnd.shana.informed.interchange": "iif",
    "vnd.shana.informed.package": "ipk",
    "vnd.simtech-mindmapper": [
      "twd",
      "twds"
    ],
    "vnd.smart.teacher": "teacher",
    "vnd.solent.sdkm+xml": [
      "sdkm",
      "sdkd"
    ],
    "vnd.spotfire.dxp": "dxp",
    "vnd.spotfire.sfs": "sfs",
    "vnd.stepmania.package": "smzip",
    "vnd.stepmania.stepchart": "sm",
    "vnd.sus-calendar": [
      "sus",
      "susp"
    ],
    "vnd.svd": "svd",
    "vnd.syncml+xml": "xsm",
    "vnd.syncml.dm+wbxml": "bdm",
    "vnd.syncml.dm+xml": "xdm",
    "vnd.tao.intent-module-archive": "tao",
    "vnd.tcpdump.pcap": [
      "pcap",
      "cap",
      "dmp"
    ],
    "vnd.tmobile-livetv": "tmo",
    "vnd.trid.tpt": "tpt",
    "vnd.triscape.mxs": "mxs",
    "vnd.trueapp": "tra",
    "vnd.ufdl": [
      "ufd",
      "ufdl"
    ],
    "vnd.uiq.theme": "utz",
    "vnd.umajin": "umj",
    "vnd.unity": "unityweb",
    "vnd.uoml+xml": "uoml",
    "vnd.vcx": "vcx",
    "vnd.visionary": "vis",
    "vnd.vsf": "vsf",
    "vnd.webturbo": "wtb",
    "vnd.wolfram.player": "nbp",
    "vnd.wqd": "wqd",
    "vnd.wt.stf": "stf",
    "vnd.xara": "xar",
    "vnd.xfdl": "xfdl",
    "vnd.yamaha.hv-dic": "hvd",
    "vnd.yamaha.hv-script": "hvs",
    "vnd.yamaha.hv-voice": "hvp",
    "vnd.yamaha.openscoreformat": "osf",
    "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
    "vnd.yamaha.smaf-audio": "saf",
    "vnd.yamaha.smaf-phrase": "spf",
    "vnd.yellowriver-custom-menu": "cmp",
    "vnd.zul": [
      "zir",
      "zirz"
    ],
    "vnd.zzazz.deck+xml": "zaz",
    "voicexml+xml": "vxml",
    widget: "wgt",
    winhlp: "hlp",
    "wsdl+xml": "wsdl",
    "wspolicy+xml": "wspolicy",
    "x-ace-compressed": "ace",
    "x-authorware-bin": [
      "aab",
      "x32",
      "u32",
      "vox"
    ],
    "x-authorware-map": "aam",
    "x-authorware-seg": "aas",
    "x-blorb": [
      "blb",
      "blorb"
    ],
    "x-bzip": "bz",
    "x-bzip2": [
      "bz2",
      "boz"
    ],
    "x-cfs-compressed": "cfs",
    "x-chat": "chat",
    "x-conference": "nsc",
    "x-dgc-compressed": "dgc",
    "x-dtbncx+xml": "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-eva": "eva",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": [
      "ttf",
      "ttc"
    ],
    "x-font-type1": [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ],
    "x-freearc": "arc",
    "x-gca-compressed": "gca",
    "x-glulx": "ulx",
    "x-gramps-xml": "gramps",
    "x-install-instructions": "install",
    "x-lzh-compressed": [
      "lzh",
      "lha"
    ],
    "x-mie": "mie",
    "x-mobipocket-ebook": [
      "prc",
      "mobi"
    ],
    "x-ms-application": "application",
    "x-ms-shortcut": "lnk",
    "x-ms-xbap": "xbap",
    "x-msbinder": "obd",
    "x-mscardfile": "crd",
    "x-msclip": "clp",
    "application/x-ms-installer": "msi",
    "x-msmediaview": [
      "mvb",
      "m13",
      "m14"
    ],
    "x-msmetafile": [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ],
    "x-msmoney": "mny",
    "x-mspublisher": "pub",
    "x-msschedule": "scd",
    "x-msterminal": "trm",
    "x-mswrite": "wri",
    "x-nzb": "nzb",
    "x-pkcs12": [
      "p12",
      "pfx"
    ],
    "x-pkcs7-certificates": [
      "p7b",
      "spc"
    ],
    "x-research-info-systems": "ris",
    "x-silverlight-app": "xap",
    "x-sql": "sql",
    "x-stuffitx": "sitx",
    "x-subrip": "srt",
    "x-t3vm-image": "t3",
    "x-tex-tfm": "tfm",
    "x-tgif": "obj",
    "x-xliff+xml": "xlf",
    "x-xz": "xz",
    "x-zmachine": [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ],
    "xaml+xml": "xaml",
    "xcap-diff+xml": "xdf",
    "xenc+xml": "xenc",
    "xml-dtd": "dtd",
    "xop+xml": "xop",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "xv+xml": [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ],
    yang: "yang",
    "yin+xml": "yin",
    envoy: "evy",
    fractals: "fif",
    "internet-property-stream": "acx",
    olescript: "axs",
    "vnd.ms-outlook": "msg",
    "vnd.ms-pkicertstore": "sst",
    "x-compress": "z",
    "x-perfmon": [
      "pma",
      "pmc",
      "pmr",
      "pmw"
    ],
    "ynd.ms-pkipko": "pko",
    gzip: [
      "gz",
      "tgz"
    ],
    "smil+xml": [
      "smi",
      "smil"
    ],
    "vnd.debian.binary-package": [
      "deb",
      "udeb"
    ],
    "vnd.hzn-3d-crossword": "x3d",
    "vnd.sqlite3": [
      "db",
      "sqlite",
      "sqlite3",
      "db-wal",
      "sqlite-wal",
      "db-shm",
      "sqlite-shm"
    ],
    "vnd.wap.sic": "sic",
    "vnd.wap.slc": "slc",
    "x-krita": [
      "kra",
      "krz"
    ],
    "x-perl": [
      "pm",
      "pl"
    ],
    yaml: [
      "yaml",
      "yml"
    ]
  },
  audio: {
    amr: "amr",
    "amr-wb": "awb",
    annodex: "axa",
    basic: [
      "au",
      "snd"
    ],
    flac: "flac",
    midi: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ],
    mpeg: [
      "mpga",
      "mpega",
      "mp3",
      "m4a",
      "mp2a",
      "m2a",
      "m3a"
    ],
    mpegurl: "m3u",
    ogg: [
      "oga",
      "ogg",
      "spx"
    ],
    "prs.sid": "sid",
    "x-aiff": "aifc",
    "x-gsm": "gsm",
    "x-ms-wma": "wma",
    "x-ms-wax": "wax",
    "x-pn-realaudio": "ram",
    "x-realaudio": "ra",
    "x-sd2": "sd2",
    adpcm: "adp",
    mp4: "mp4a",
    s3m: "s3m",
    silk: "sil",
    "vnd.dece.audio": [
      "uva",
      "uvva"
    ],
    "vnd.digital-winds": "eol",
    "vnd.dra": "dra",
    "vnd.dts": "dts",
    "vnd.dts.hd": "dtshd",
    "vnd.lucent.voice": "lvp",
    "vnd.ms-playready.media.pya": "pya",
    "vnd.nuera.ecelp4800": "ecelp4800",
    "vnd.nuera.ecelp7470": "ecelp7470",
    "vnd.nuera.ecelp9600": "ecelp9600",
    "vnd.rip": "rip",
    webm: "weba",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    xm: "xm",
    aac: "aac",
    aiff: [
      "aiff",
      "aif",
      "aff"
    ],
    opus: "opus",
    wav: "wav"
  },
  chemical: {
    "x-alchemy": "alc",
    "x-cache": [
      "cac",
      "cache"
    ],
    "x-cache-csf": "csf",
    "x-cactvs-binary": [
      "cbin",
      "cascii",
      "ctab"
    ],
    "x-cdx": "cdx",
    "x-chem3d": "c3d",
    "x-cif": "cif",
    "x-cmdf": "cmdf",
    "x-cml": "cml",
    "x-compass": "cpa",
    "x-crossfire": "bsd",
    "x-csml": [
      "csml",
      "csm"
    ],
    "x-ctx": "ctx",
    "x-cxf": [
      "cxf",
      "cef"
    ],
    "x-embl-dl-nucleotide": [
      "emb",
      "embl"
    ],
    "x-gamess-input": [
      "inp",
      "gam",
      "gamin"
    ],
    "x-gaussian-checkpoint": [
      "fch",
      "fchk"
    ],
    "x-gaussian-cube": "cub",
    "x-gaussian-input": [
      "gau",
      "gjc",
      "gjf"
    ],
    "x-gaussian-log": "gal",
    "x-gcg8-sequence": "gcg",
    "x-genbank": "gen",
    "x-hin": "hin",
    "x-isostar": [
      "istr",
      "ist"
    ],
    "x-jcamp-dx": [
      "jdx",
      "dx"
    ],
    "x-kinemage": "kin",
    "x-macmolecule": "mcm",
    "x-macromodel-input": "mmod",
    "x-mdl-molfile": "mol",
    "x-mdl-rdfile": "rd",
    "x-mdl-rxnfile": "rxn",
    "x-mdl-sdfile": "sd",
    "x-mdl-tgf": "tgf",
    "x-mmcif": "mcif",
    "x-mol2": "mol2",
    "x-molconn-Z": "b",
    "x-mopac-graph": "gpt",
    "x-mopac-input": [
      "mop",
      "mopcrt",
      "zmt"
    ],
    "x-mopac-out": "moo",
    "x-ncbi-asn1": "asn",
    "x-ncbi-asn1-ascii": [
      "prt",
      "ent"
    ],
    "x-ncbi-asn1-binary": "val",
    "x-rosdal": "ros",
    "x-swissprot": "sw",
    "x-vamas-iso14976": "vms",
    "x-vmd": "vmd",
    "x-xtel": "xtel",
    "x-xyz": "xyz"
  },
  font: {
    otf: "otf",
    woff: "woff",
    woff2: "woff2"
  },
  image: {
    gif: "gif",
    ief: "ief",
    jpeg: [
      "jpeg",
      "jpg",
      "jpe",
      "jfif",
      "jfif-tbnl",
      "jif"
    ],
    pcx: "pcx",
    png: "png",
    "svg+xml": [
      "svg",
      "svgz"
    ],
    tiff: [
      "tiff",
      "tif"
    ],
    "vnd.djvu": [
      "djvu",
      "djv"
    ],
    "vnd.wap.wbmp": "wbmp",
    "x-canon-cr2": "cr2",
    "x-canon-crw": "crw",
    "x-cmu-raster": "ras",
    "x-coreldraw": "cdr",
    "x-coreldrawpattern": "pat",
    "x-coreldrawtemplate": "cdt",
    "x-corelphotopaint": "cpt",
    "x-epson-erf": "erf",
    "x-icon": "ico",
    "x-jg": "art",
    "x-jng": "jng",
    "x-nikon-nef": "nef",
    "x-olympus-orf": "orf",
    "x-portable-anymap": "pnm",
    "x-portable-bitmap": "pbm",
    "x-portable-graymap": "pgm",
    "x-portable-pixmap": "ppm",
    "x-rgb": "rgb",
    "x-xbitmap": "xbm",
    "x-xpixmap": "xpm",
    "x-xwindowdump": "xwd",
    bmp: "bmp",
    cgm: "cgm",
    g3fax: "g3",
    ktx: "ktx",
    "prs.btif": "btif",
    sgi: "sgi",
    "vnd.dece.graphic": [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ],
    "vnd.dwg": "dwg",
    "vnd.dxf": "dxf",
    "vnd.fastbidsheet": "fbs",
    "vnd.fpx": "fpx",
    "vnd.fst": "fst",
    "vnd.fujixerox.edmics-mmr": "mmr",
    "vnd.fujixerox.edmics-rlc": "rlc",
    "vnd.ms-modi": "mdi",
    "vnd.ms-photo": "wdp",
    "vnd.net-fpx": "npx",
    "vnd.xiff": "xif",
    webp: "webp",
    "x-3ds": "3ds",
    "x-cmx": "cmx",
    "x-freehand": [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ],
    "x-pict": [
      "pic",
      "pct"
    ],
    "x-tga": "tga",
    "cis-cod": "cod",
    avif: "avifs",
    heic: [
      "heif",
      "heic"
    ],
    pjpeg: [
      "pjpg"
    ],
    "vnd.adobe.photoshop": "psd",
    "x-adobe-dng": "dng",
    "x-fuji-raf": "raf",
    "x-icns": "icns",
    "x-kodak-dcr": "dcr",
    "x-kodak-k25": "k25",
    "x-kodak-kdc": "kdc",
    "x-minolta-mrw": "mrw",
    "x-panasonic-raw": [
      "raw",
      "rw2",
      "rwl"
    ],
    "x-pentax-pef": [
      "pef",
      "ptx"
    ],
    "x-sigma-x3f": "x3f",
    "x-sony-arw": "arw",
    "x-sony-sr2": "sr2",
    "x-sony-srf": "srf"
  },
  message: {
    rfc822: [
      "eml",
      "mime",
      "mht",
      "mhtml",
      "nws"
    ]
  },
  model: {
    iges: [
      "igs",
      "iges"
    ],
    mesh: [
      "msh",
      "mesh",
      "silo"
    ],
    vrml: [
      "wrl",
      "vrml"
    ],
    "x3d+vrml": [
      "x3dv",
      "x3dvz"
    ],
    "x3d+xml": "x3dz",
    "x3d+binary": [
      "x3db",
      "x3dbz"
    ],
    "vnd.collada+xml": "dae",
    "vnd.dwf": "dwf",
    "vnd.gdl": "gdl",
    "vnd.gtw": "gtw",
    "vnd.mts": "mts",
    "vnd.usdz+zip": "usdz",
    "vnd.vtu": "vtu"
  },
  text: {
    "cache-manifest": [
      "manifest",
      "appcache"
    ],
    calendar: [
      "ics",
      "icz",
      "ifb"
    ],
    css: "css",
    csv: "csv",
    h323: "323",
    html: [
      "html",
      "htm",
      "shtml",
      "stm"
    ],
    iuls: "uls",
    plain: [
      "txt",
      "text",
      "brf",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "bas",
      "diff",
      "ksh"
    ],
    richtext: "rtx",
    scriptlet: [
      "sct",
      "wsc"
    ],
    texmacs: "tm",
    "tab-separated-values": "tsv",
    "vnd.sun.j2me.app-descriptor": "jad",
    "vnd.wap.wml": "wml",
    "vnd.wap.wmlscript": "wmls",
    "x-bibtex": "bib",
    "x-boo": "boo",
    "x-c++hdr": [
      "h++",
      "hpp",
      "hxx",
      "hh"
    ],
    "x-c++src": [
      "c++",
      "cpp",
      "cxx",
      "cc"
    ],
    "x-component": "htc",
    "x-dsrc": "d",
    "x-diff": "patch",
    "x-haskell": "hs",
    "x-java": "java",
    "x-literate-haskell": "lhs",
    "x-moc": "moc",
    "x-pascal": [
      "p",
      "pas",
      "pp",
      "inc"
    ],
    "x-pcs-gcd": "gcd",
    "x-python": "py",
    "x-scala": "scala",
    "x-setext": "etx",
    "x-tcl": [
      "tcl",
      "tk"
    ],
    "x-tex": [
      "tex",
      "ltx",
      "sty",
      "cls"
    ],
    "x-vcalendar": "vcs",
    "x-vcard": "vcf",
    n3: "n3",
    "prs.lines.tag": "dsc",
    sgml: [
      "sgml",
      "sgm"
    ],
    troff: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ],
    turtle: "ttl",
    "uri-list": [
      "uri",
      "uris",
      "urls"
    ],
    vcard: "vcard",
    "vnd.curl": "curl",
    "vnd.curl.dcurl": "dcurl",
    "vnd.curl.scurl": "scurl",
    "vnd.curl.mcurl": "mcurl",
    "vnd.dvb.subtitle": "sub",
    "vnd.fly": "fly",
    "vnd.fmi.flexstor": "flx",
    "vnd.graphviz": "gv",
    "vnd.in3d.3dml": "3dml",
    "vnd.in3d.spot": "spot",
    "x-asm": [
      "s",
      "asm"
    ],
    "x-c": [
      "c",
      "h",
      "dic"
    ],
    "x-fortran": [
      "f",
      "for",
      "f77",
      "f90"
    ],
    "x-opml": "opml",
    "x-nfo": "nfo",
    "x-sfv": "sfv",
    "x-uuencode": "uu",
    webviewhtml: "htt",
    javascript: "js",
    json: "json",
    markdown: [
      "md",
      "markdown",
      "mdown",
      "markdn"
    ],
    "vnd.wap.si": "si",
    "vnd.wap.sl": "sl"
  },
  video: {
    avif: "avif",
    "3gpp": "3gp",
    annodex: "axv",
    dl: "dl",
    dv: [
      "dif",
      "dv"
    ],
    fli: "fli",
    gl: "gl",
    mpeg: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v",
      "mp2",
      "mpa",
      "mpv2"
    ],
    mp4: [
      "mp4",
      "mp4v",
      "mpg4"
    ],
    quicktime: [
      "qt",
      "mov"
    ],
    ogg: "ogv",
    "vnd.mpegurl": [
      "mxu",
      "m4u"
    ],
    "x-flv": "flv",
    "x-la-asf": [
      "lsf",
      "lsx"
    ],
    "x-mng": "mng",
    "x-ms-asf": [
      "asf",
      "asx",
      "asr"
    ],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": [
      "mpv",
      "mkv",
      "mk3d",
      "mks"
    ],
    "3gpp2": "3g2",
    h261: "h261",
    h263: "h263",
    h264: "h264",
    jpeg: "jpgv",
    jpm: [
      "jpm",
      "jpgm"
    ],
    mj2: [
      "mj2",
      "mjp2"
    ],
    "vnd.dece.hd": [
      "uvh",
      "uvvh"
    ],
    "vnd.dece.mobile": [
      "uvm",
      "uvvm"
    ],
    "vnd.dece.pd": [
      "uvp",
      "uvvp"
    ],
    "vnd.dece.sd": [
      "uvs",
      "uvvs"
    ],
    "vnd.dece.video": [
      "uvv",
      "uvvv"
    ],
    "vnd.dvb.file": "dvb",
    "vnd.fvt": "fvt",
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": [
      "uvu",
      "uvvu"
    ],
    "vnd.vivo": "viv",
    webm: "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv",
    mp2t: "ts"
  },
  "x-conference": {
    "x-cooltalk": "ice"
  },
  "x-world": {
    "x-vrml": [
      "vrm",
      "flr",
      "wrz",
      "xaf",
      "xof"
    ]
  }
};
(() => {
  const t = {};
  for (const n of Object.keys(table$1))
    for (const s of Object.keys(table$1[n])) {
      const a = table$1[n][s];
      if (typeof a == "string")
        t[a] = n + "/" + s;
      else
        for (let i = 0; i < a.length; i++)
          t[a[i]] = n + "/" + s;
    }
  return t;
})();
const table = [];
for (let t = 0; t < 256; t++) {
  let n = t;
  for (let s = 0; s < 8; s++)
    n & 1 ? n = n >>> 1 ^ 3988292384 : n = n >>> 1;
  table[t] = n;
}
class Crc32 {
  constructor(n) {
    this.crc = n || -1;
  }
  append(n) {
    let s = this.crc | 0;
    for (let a = 0, i = n.length | 0; a < i; a++)
      s = s >>> 8 ^ table[(s ^ n[a]) & 255];
    this.crc = s;
  }
  get() {
    return ~this.crc;
  }
}
class Crc32Stream extends TransformStream {
  constructor() {
    let n;
    const s = new Crc32();
    super({
      transform(a, i) {
        s.append(a), i.enqueue(a);
      },
      flush() {
        const a = new Uint8Array(4);
        new DataView(a.buffer).setUint32(0, s.get()), n.value = a;
      }
    }), n = this;
  }
}
function encodeText(t) {
  if (typeof TextEncoder == UNDEFINED_TYPE) {
    t = unescape(encodeURIComponent(t));
    const n = new Uint8Array(t.length);
    for (let s = 0; s < n.length; s++)
      n[s] = t.charCodeAt(s);
    return n;
  } else
    return new TextEncoder().encode(t);
}
const bitArray = {
  /**
   * Concatenate two bit arrays.
   * @param {bitArray} a1 The first array.
   * @param {bitArray} a2 The second array.
   * @return {bitArray} The concatenation of a1 and a2.
   */
  concat(t, n) {
    if (t.length === 0 || n.length === 0)
      return t.concat(n);
    const s = t[t.length - 1], a = bitArray.getPartial(s);
    return a === 32 ? t.concat(n) : bitArray._shiftRight(n, a, s | 0, t.slice(0, t.length - 1));
  },
  /**
   * Find the length of an array of bits.
   * @param {bitArray} a The array.
   * @return {Number} The length of a, in bits.
   */
  bitLength(t) {
    const n = t.length;
    if (n === 0)
      return 0;
    const s = t[n - 1];
    return (n - 1) * 32 + bitArray.getPartial(s);
  },
  /**
   * Truncate an array.
   * @param {bitArray} a The array.
   * @param {Number} len The length to truncate to, in bits.
   * @return {bitArray} A new array, truncated to len bits.
   */
  clamp(t, n) {
    if (t.length * 32 < n)
      return t;
    t = t.slice(0, Math.ceil(n / 32));
    const s = t.length;
    return n = n & 31, s > 0 && n && (t[s - 1] = bitArray.partial(n, t[s - 1] & 2147483648 >> n - 1, 1)), t;
  },
  /**
   * Make a partial word for a bit array.
   * @param {Number} len The number of bits in the word.
   * @param {Number} x The bits.
   * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
   * @return {Number} The partial word.
   */
  partial(t, n, s) {
    return t === 32 ? n : (s ? n | 0 : n << 32 - t) + t * 1099511627776;
  },
  /**
   * Get the number of bits used by a partial word.
   * @param {Number} x The partial word.
   * @return {Number} The number of bits used by the partial word.
   */
  getPartial(t) {
    return Math.round(t / 1099511627776) || 32;
  },
  /** Shift an array right.
   * @param {bitArray} a The array to shift.
   * @param {Number} shift The number of bits to shift.
   * @param {Number} [carry=0] A byte to carry in
   * @param {bitArray} [out=[]] An array to prepend to the output.
   * @private
   */
  _shiftRight(t, n, s, a) {
    for (a === void 0 && (a = []); n >= 32; n -= 32)
      a.push(s), s = 0;
    if (n === 0)
      return a.concat(t);
    for (let u = 0; u < t.length; u++)
      a.push(s | t[u] >>> n), s = t[u] << 32 - n;
    const i = t.length ? t[t.length - 1] : 0, o = bitArray.getPartial(i);
    return a.push(bitArray.partial(n + o & 31, n + o > 32 ? s : a.pop(), 1)), a;
  }
}, codec = {
  bytes: {
    /** Convert from a bitArray to an array of bytes. */
    fromBits(t) {
      const s = bitArray.bitLength(t) / 8, a = new Uint8Array(s);
      let i;
      for (let o = 0; o < s; o++)
        o & 3 || (i = t[o / 4]), a[o] = i >>> 24, i <<= 8;
      return a;
    },
    /** Convert from an array of bytes to a bitArray. */
    toBits(t) {
      const n = [];
      let s, a = 0;
      for (s = 0; s < t.length; s++)
        a = a << 8 | t[s], (s & 3) === 3 && (n.push(a), a = 0);
      return s & 3 && n.push(bitArray.partial(8 * (s & 3), a)), n;
    }
  }
}, hash = {};
hash.sha1 = class {
  constructor(t) {
    const n = this;
    n.blockSize = 512, n._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], n._key = [1518500249, 1859775393, 2400959708, 3395469782], t ? (n._h = t._h.slice(0), n._buffer = t._buffer.slice(0), n._length = t._length) : n.reset();
  }
  /**
   * Reset the hash state.
   * @return this
   */
  reset() {
    const t = this;
    return t._h = t._init.slice(0), t._buffer = [], t._length = 0, t;
  }
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update(t) {
    const n = this;
    typeof t == "string" && (t = codec.utf8String.toBits(t));
    const s = n._buffer = bitArray.concat(n._buffer, t), a = n._length, i = n._length = a + bitArray.bitLength(t);
    if (i > 9007199254740991)
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    const o = new Uint32Array(s);
    let u = 0;
    for (let c = n.blockSize + a - (n.blockSize + a & n.blockSize - 1); c <= i; c += n.blockSize)
      n._block(o.subarray(16 * u, 16 * (u + 1))), u += 1;
    return s.splice(0, 16 * u), n;
  }
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
   */
  finalize() {
    const t = this;
    let n = t._buffer;
    const s = t._h;
    n = bitArray.concat(n, [bitArray.partial(1, 1)]);
    for (let a = n.length + 2; a & 15; a++)
      n.push(0);
    for (n.push(Math.floor(t._length / 4294967296)), n.push(t._length | 0); n.length; )
      t._block(n.splice(0, 16));
    return t.reset(), s;
  }
  /**
   * The SHA-1 logical functions f(0), f(1), ..., f(79).
   * @private
   */
  _f(t, n, s, a) {
    if (t <= 19)
      return n & s | ~n & a;
    if (t <= 39)
      return n ^ s ^ a;
    if (t <= 59)
      return n & s | n & a | s & a;
    if (t <= 79)
      return n ^ s ^ a;
  }
  /**
   * Circular left-shift operator.
   * @private
   */
  _S(t, n) {
    return n << t | n >>> 32 - t;
  }
  /**
   * Perform one cycle of SHA-1.
   * @param {Uint32Array|bitArray} words one block of words.
   * @private
   */
  _block(t) {
    const n = this, s = n._h, a = Array(80);
    for (let d = 0; d < 16; d++)
      a[d] = t[d];
    let i = s[0], o = s[1], u = s[2], c = s[3], l = s[4];
    for (let d = 0; d <= 79; d++) {
      d >= 16 && (a[d] = n._S(1, a[d - 3] ^ a[d - 8] ^ a[d - 14] ^ a[d - 16]));
      const f = n._S(5, i) + n._f(d, o, u, c) + l + a[d] + n._key[Math.floor(d / 20)] | 0;
      l = c, c = u, u = n._S(30, o), o = i, i = f;
    }
    s[0] = s[0] + i | 0, s[1] = s[1] + o | 0, s[2] = s[2] + u | 0, s[3] = s[3] + c | 0, s[4] = s[4] + l | 0;
  }
};
const cipher = {};
cipher.aes = class {
  constructor(t) {
    const n = this;
    n._tables = [[[], [], [], [], []], [[], [], [], [], []]], n._tables[0][0][0] || n._precompute();
    const s = n._tables[0][4], a = n._tables[1], i = t.length;
    let o, u, c, l = 1;
    if (i !== 4 && i !== 6 && i !== 8)
      throw new Error("invalid aes key size");
    for (n._key = [u = t.slice(0), c = []], o = i; o < 4 * i + 28; o++) {
      let d = u[o - 1];
      (o % i === 0 || i === 8 && o % i === 4) && (d = s[d >>> 24] << 24 ^ s[d >> 16 & 255] << 16 ^ s[d >> 8 & 255] << 8 ^ s[d & 255], o % i === 0 && (d = d << 8 ^ d >>> 24 ^ l << 24, l = l << 1 ^ (l >> 7) * 283)), u[o] = u[o - i] ^ d;
    }
    for (let d = 0; o; d++, o--) {
      const f = u[d & 3 ? o : o - 4];
      o <= 4 || d < 4 ? c[d] = f : c[d] = a[0][s[f >>> 24]] ^ a[1][s[f >> 16 & 255]] ^ a[2][s[f >> 8 & 255]] ^ a[3][s[f & 255]];
    }
  }
  // public
  /* Something like this might appear here eventually
  name: "AES",
  blockSize: 4,
  keySizes: [4,6,8],
  */
  /**
   * Encrypt an array of 4 big-endian words.
   * @param {Array} data The plaintext.
   * @return {Array} The ciphertext.
   */
  encrypt(t) {
    return this._crypt(t, 0);
  }
  /**
   * Decrypt an array of 4 big-endian words.
   * @param {Array} data The ciphertext.
   * @return {Array} The plaintext.
   */
  decrypt(t) {
    return this._crypt(t, 1);
  }
  /**
   * Expand the S-box tables.
   *
   * @private
   */
  _precompute() {
    const t = this._tables[0], n = this._tables[1], s = t[4], a = n[4], i = [], o = [];
    let u, c, l, d;
    for (let f = 0; f < 256; f++)
      o[(i[f] = f << 1 ^ (f >> 7) * 283) ^ f] = f;
    for (let f = u = 0; !s[f]; f ^= c || 1, u = o[u] || 1) {
      let h = u ^ u << 1 ^ u << 2 ^ u << 3 ^ u << 4;
      h = h >> 8 ^ h & 255 ^ 99, s[f] = h, a[h] = f, d = i[l = i[c = i[f]]];
      let T = d * 16843009 ^ l * 65537 ^ c * 257 ^ f * 16843008, p = i[h] * 257 ^ h * 16843008;
      for (let I = 0; I < 4; I++)
        t[I][f] = p = p << 24 ^ p >>> 8, n[I][h] = T = T << 24 ^ T >>> 8;
    }
    for (let f = 0; f < 5; f++)
      t[f] = t[f].slice(0), n[f] = n[f].slice(0);
  }
  /**
   * Encryption and decryption core.
   * @param {Array} input Four words to be encrypted or decrypted.
   * @param dir The direction, 0 for encrypt and 1 for decrypt.
   * @return {Array} The four encrypted or decrypted words.
   * @private
   */
  _crypt(t, n) {
    if (t.length !== 4)
      throw new Error("invalid aes block size");
    const s = this._key[n], a = s.length / 4 - 2, i = [0, 0, 0, 0], o = this._tables[n], u = o[0], c = o[1], l = o[2], d = o[3], f = o[4];
    let h = t[0] ^ s[0], T = t[n ? 3 : 1] ^ s[1], p = t[2] ^ s[2], I = t[n ? 1 : 3] ^ s[3], E = 4, _, m, b;
    for (let S = 0; S < a; S++)
      _ = u[h >>> 24] ^ c[T >> 16 & 255] ^ l[p >> 8 & 255] ^ d[I & 255] ^ s[E], m = u[T >>> 24] ^ c[p >> 16 & 255] ^ l[I >> 8 & 255] ^ d[h & 255] ^ s[E + 1], b = u[p >>> 24] ^ c[I >> 16 & 255] ^ l[h >> 8 & 255] ^ d[T & 255] ^ s[E + 2], I = u[I >>> 24] ^ c[h >> 16 & 255] ^ l[T >> 8 & 255] ^ d[p & 255] ^ s[E + 3], E += 4, h = _, T = m, p = b;
    for (let S = 0; S < 4; S++)
      i[n ? 3 & -S : S] = f[h >>> 24] << 24 ^ f[T >> 16 & 255] << 16 ^ f[p >> 8 & 255] << 8 ^ f[I & 255] ^ s[E++], _ = h, h = T, T = p, p = I, I = _;
    return i;
  }
};
const random = {
  /** 
   * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
   * @param {TypedArray} typedArray The array to fill.
   * @return {TypedArray} The random values.
   */
  getRandomValues(t) {
    const n = new Uint32Array(t.buffer), s = (a) => {
      let i = 987654321;
      const o = 4294967295;
      return function() {
        return i = 36969 * (i & 65535) + (i >> 16) & o, a = 18e3 * (a & 65535) + (a >> 16) & o, (((i << 16) + a & o) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let a = 0, i; a < t.length; a += 4) {
      const o = s((i || Math.random()) * 4294967296);
      i = o() * 987654071, n[a / 4] = o() * 4294967296 | 0;
    }
    return t;
  }
}, mode = {};
mode.ctrGladman = class {
  constructor(t, n) {
    this._prf = t, this._initIv = n, this._iv = n;
  }
  reset() {
    this._iv = this._initIv;
  }
  /** Input some data to calculate.
   * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
   */
  update(t) {
    return this.calculate(this._prf, t, this._iv);
  }
  incWord(t) {
    if ((t >> 24 & 255) === 255) {
      let n = t >> 16 & 255, s = t >> 8 & 255, a = t & 255;
      n === 255 ? (n = 0, s === 255 ? (s = 0, a === 255 ? a = 0 : ++a) : ++s) : ++n, t = 0, t += n << 16, t += s << 8, t += a;
    } else
      t += 1 << 24;
    return t;
  }
  incCounter(t) {
    (t[0] = this.incWord(t[0])) === 0 && (t[1] = this.incWord(t[1]));
  }
  calculate(t, n, s) {
    let a;
    if (!(a = n.length))
      return [];
    const i = bitArray.bitLength(n);
    for (let o = 0; o < a; o += 4) {
      this.incCounter(s);
      const u = t.encrypt(s);
      n[o] ^= u[0], n[o + 1] ^= u[1], n[o + 2] ^= u[2], n[o + 3] ^= u[3];
    }
    return bitArray.clamp(n, i);
  }
};
const misc = {
  importKey(t) {
    return new misc.hmacSha1(codec.bytes.toBits(t));
  },
  pbkdf2(t, n, s, a) {
    if (s = s || 1e4, a < 0 || s < 0)
      throw new Error("invalid params to pbkdf2");
    const i = (a >> 5) + 1 << 2;
    let o, u, c, l, d;
    const f = new ArrayBuffer(i), h = new DataView(f);
    let T = 0;
    const p = bitArray;
    for (n = codec.bytes.toBits(n), d = 1; T < (i || 1); d++) {
      for (o = u = t.encrypt(p.concat(n, [d])), c = 1; c < s; c++)
        for (u = t.encrypt(u), l = 0; l < u.length; l++)
          o[l] ^= u[l];
      for (c = 0; T < (i || 1) && c < o.length; c++)
        h.setInt32(T, o[c]), T += 4;
    }
    return f.slice(0, a / 8);
  }
};
misc.hmacSha1 = class {
  constructor(t) {
    const n = this, s = n._hash = hash.sha1, a = [[], []];
    n._baseHash = [new s(), new s()];
    const i = n._baseHash[0].blockSize / 32;
    t.length > i && (t = new s().update(t).finalize());
    for (let o = 0; o < i; o++)
      a[0][o] = t[o] ^ 909522486, a[1][o] = t[o] ^ 1549556828;
    n._baseHash[0].update(a[0]), n._baseHash[1].update(a[1]), n._resultHash = new s(n._baseHash[0]);
  }
  reset() {
    const t = this;
    t._resultHash = new t._hash(t._baseHash[0]), t._updated = !1;
  }
  update(t) {
    const n = this;
    n._updated = !0, n._resultHash.update(t);
  }
  digest() {
    const t = this, n = t._resultHash.finalize(), s = new t._hash(t._baseHash[1]).update(n).finalize();
    return t.reset(), s;
  }
  encrypt(t) {
    if (this._updated)
      throw new Error("encrypt on already updated hmac called!");
    return this.update(t), this.digest(t);
  }
};
const GET_RANDOM_VALUES_SUPPORTED = typeof crypto != UNDEFINED_TYPE && typeof crypto.getRandomValues == FUNCTION_TYPE, ERR_INVALID_PASSWORD = "Invalid password", ERR_INVALID_SIGNATURE = "Invalid signature", ERR_ABORT_CHECK_PASSWORD = "zipjs-abort-check-password";
function getRandomValues(t) {
  return GET_RANDOM_VALUES_SUPPORTED ? crypto.getRandomValues(t) : random.getRandomValues(t);
}
const BLOCK_LENGTH = 16, RAW_FORMAT = "raw", PBKDF2_ALGORITHM = { name: "PBKDF2" }, HASH_ALGORITHM = { name: "HMAC" }, HASH_FUNCTION = "SHA-1", BASE_KEY_ALGORITHM = Object.assign({ hash: HASH_ALGORITHM }, PBKDF2_ALGORITHM), DERIVED_BITS_ALGORITHM = Object.assign({ iterations: 1e3, hash: { name: HASH_FUNCTION } }, PBKDF2_ALGORITHM), DERIVED_BITS_USAGE = ["deriveBits"], SALT_LENGTH = [8, 12, 16], KEY_LENGTH = [16, 24, 32], SIGNATURE_LENGTH = 10, COUNTER_DEFAULT_VALUE = [0, 0, 0, 0], CRYPTO_API_SUPPORTED = typeof crypto != UNDEFINED_TYPE, subtle = CRYPTO_API_SUPPORTED && crypto.subtle, SUBTLE_API_SUPPORTED = CRYPTO_API_SUPPORTED && typeof subtle != UNDEFINED_TYPE, codecBytes = codec.bytes, Aes = cipher.aes, CtrGladman = mode.ctrGladman, HmacSha1 = misc.hmacSha1;
let IMPORT_KEY_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.importKey == FUNCTION_TYPE, DERIVE_BITS_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.deriveBits == FUNCTION_TYPE;
class AESDecryptionStream extends TransformStream {
  constructor({ password: n, rawPassword: s, signed: a, encryptionStrength: i, checkPasswordOnly: o }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((u) => this.resolveReady = u),
          password: encodePassword(n, s),
          signed: a,
          strength: i - 1,
          pending: new Uint8Array()
        });
      },
      async transform(u, c) {
        const l = this, {
          password: d,
          strength: f,
          resolveReady: h,
          ready: T
        } = l;
        d ? (await createDecryptionKeys(l, f, d, subarray(u, 0, SALT_LENGTH[f] + 2)), u = subarray(u, SALT_LENGTH[f] + 2), o ? c.error(new Error(ERR_ABORT_CHECK_PASSWORD)) : h()) : await T;
        const p = new Uint8Array(u.length - SIGNATURE_LENGTH - (u.length - SIGNATURE_LENGTH) % BLOCK_LENGTH);
        c.enqueue(append$2(l, u, p, 0, SIGNATURE_LENGTH, !0));
      },
      async flush(u) {
        const {
          signed: c,
          ctr: l,
          hmac: d,
          pending: f,
          ready: h
        } = this;
        if (d && l) {
          await h;
          const T = subarray(f, 0, f.length - SIGNATURE_LENGTH), p = subarray(f, f.length - SIGNATURE_LENGTH);
          let I = new Uint8Array();
          if (T.length) {
            const E = toBits(codecBytes, T);
            d.update(E);
            const _ = l.update(E);
            I = fromBits(codecBytes, _);
          }
          if (c) {
            const E = subarray(fromBits(codecBytes, d.digest()), 0, SIGNATURE_LENGTH);
            for (let _ = 0; _ < SIGNATURE_LENGTH; _++)
              if (E[_] != p[_])
                throw new Error(ERR_INVALID_SIGNATURE);
          }
          u.enqueue(I);
        }
      }
    });
  }
}
class AESEncryptionStream extends TransformStream {
  constructor({ password: n, rawPassword: s, encryptionStrength: a }) {
    let i;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((o) => this.resolveReady = o),
          password: encodePassword(n, s),
          strength: a - 1,
          pending: new Uint8Array()
        });
      },
      async transform(o, u) {
        const c = this, {
          password: l,
          strength: d,
          resolveReady: f,
          ready: h
        } = c;
        let T = new Uint8Array();
        l ? (T = await createEncryptionKeys(c, d, l), f()) : await h;
        const p = new Uint8Array(T.length + o.length - o.length % BLOCK_LENGTH);
        p.set(T, 0), u.enqueue(append$2(c, o, p, T.length, 0));
      },
      async flush(o) {
        const {
          ctr: u,
          hmac: c,
          pending: l,
          ready: d
        } = this;
        if (c && u) {
          await d;
          let f = new Uint8Array();
          if (l.length) {
            const h = u.update(toBits(codecBytes, l));
            c.update(h), f = fromBits(codecBytes, h);
          }
          i.signature = fromBits(codecBytes, c.digest()).slice(0, SIGNATURE_LENGTH), o.enqueue(concat(f, i.signature));
        }
      }
    }), i = this;
  }
}
function append$2(t, n, s, a, i, o) {
  const {
    ctr: u,
    hmac: c,
    pending: l
  } = t, d = n.length - i;
  l.length && (n = concat(l, n), s = expand(s, d - d % BLOCK_LENGTH));
  let f;
  for (f = 0; f <= d - BLOCK_LENGTH; f += BLOCK_LENGTH) {
    const h = toBits(codecBytes, subarray(n, f, f + BLOCK_LENGTH));
    o && c.update(h);
    const T = u.update(h);
    o || c.update(T), s.set(fromBits(codecBytes, T), f + a);
  }
  return t.pending = subarray(n, f), s;
}
async function createDecryptionKeys(t, n, s, a) {
  const i = await createKeys$1(t, n, s, subarray(a, 0, SALT_LENGTH[n])), o = subarray(a, SALT_LENGTH[n]);
  if (i[0] != o[0] || i[1] != o[1])
    throw new Error(ERR_INVALID_PASSWORD);
}
async function createEncryptionKeys(t, n, s) {
  const a = getRandomValues(new Uint8Array(SALT_LENGTH[n])), i = await createKeys$1(t, n, s, a);
  return concat(a, i);
}
async function createKeys$1(t, n, s, a) {
  t.password = null;
  const i = await importKey(RAW_FORMAT, s, BASE_KEY_ALGORITHM, !1, DERIVED_BITS_USAGE), o = await deriveBits(Object.assign({ salt: a }, DERIVED_BITS_ALGORITHM), i, 8 * (KEY_LENGTH[n] * 2 + 2)), u = new Uint8Array(o), c = toBits(codecBytes, subarray(u, 0, KEY_LENGTH[n])), l = toBits(codecBytes, subarray(u, KEY_LENGTH[n], KEY_LENGTH[n] * 2)), d = subarray(u, KEY_LENGTH[n] * 2);
  return Object.assign(t, {
    keys: {
      key: c,
      authentication: l,
      passwordVerification: d
    },
    ctr: new CtrGladman(new Aes(c), Array.from(COUNTER_DEFAULT_VALUE)),
    hmac: new HmacSha1(l)
  }), d;
}
async function importKey(t, n, s, a, i) {
  if (IMPORT_KEY_SUPPORTED)
    try {
      return await subtle.importKey(t, n, s, a, i);
    } catch {
      return IMPORT_KEY_SUPPORTED = !1, misc.importKey(n);
    }
  else
    return misc.importKey(n);
}
async function deriveBits(t, n, s) {
  if (DERIVE_BITS_SUPPORTED)
    try {
      return await subtle.deriveBits(t, n, s);
    } catch {
      return DERIVE_BITS_SUPPORTED = !1, misc.pbkdf2(n, t.salt, DERIVED_BITS_ALGORITHM.iterations, s);
    }
  else
    return misc.pbkdf2(n, t.salt, DERIVED_BITS_ALGORITHM.iterations, s);
}
function encodePassword(t, n) {
  return n === UNDEFINED_VALUE ? encodeText(t) : n;
}
function concat(t, n) {
  let s = t;
  return t.length + n.length && (s = new Uint8Array(t.length + n.length), s.set(t, 0), s.set(n, t.length)), s;
}
function expand(t, n) {
  if (n && n > t.length) {
    const s = t;
    t = new Uint8Array(n), t.set(s, 0);
  }
  return t;
}
function subarray(t, n, s) {
  return t.subarray(n, s);
}
function fromBits(t, n) {
  return t.fromBits(n);
}
function toBits(t, n) {
  return t.toBits(n);
}
const HEADER_LENGTH = 12;
class ZipCryptoDecryptionStream extends TransformStream {
  constructor({ password: n, passwordVerification: s, checkPasswordOnly: a }) {
    super({
      start() {
        Object.assign(this, {
          password: n,
          passwordVerification: s
        }), createKeys(this, n);
      },
      transform(i, o) {
        const u = this;
        if (u.password) {
          const c = decrypt(u, i.subarray(0, HEADER_LENGTH));
          if (u.password = null, c[HEADER_LENGTH - 1] != u.passwordVerification)
            throw new Error(ERR_INVALID_PASSWORD);
          i = i.subarray(HEADER_LENGTH);
        }
        a ? o.error(new Error(ERR_ABORT_CHECK_PASSWORD)) : o.enqueue(decrypt(u, i));
      }
    });
  }
}
class ZipCryptoEncryptionStream extends TransformStream {
  constructor({ password: n, passwordVerification: s }) {
    super({
      start() {
        Object.assign(this, {
          password: n,
          passwordVerification: s
        }), createKeys(this, n);
      },
      transform(a, i) {
        const o = this;
        let u, c;
        if (o.password) {
          o.password = null;
          const l = getRandomValues(new Uint8Array(HEADER_LENGTH));
          l[HEADER_LENGTH - 1] = o.passwordVerification, u = new Uint8Array(a.length + l.length), u.set(encrypt(o, l), 0), c = HEADER_LENGTH;
        } else
          u = new Uint8Array(a.length), c = 0;
        u.set(encrypt(o, a), c), i.enqueue(u);
      }
    });
  }
}
function decrypt(t, n) {
  const s = new Uint8Array(n.length);
  for (let a = 0; a < n.length; a++)
    s[a] = getByte(t) ^ n[a], updateKeys(t, s[a]);
  return s;
}
function encrypt(t, n) {
  const s = new Uint8Array(n.length);
  for (let a = 0; a < n.length; a++)
    s[a] = getByte(t) ^ n[a], updateKeys(t, n[a]);
  return s;
}
function createKeys(t, n) {
  const s = [305419896, 591751049, 878082192];
  Object.assign(t, {
    keys: s,
    crcKey0: new Crc32(s[0]),
    crcKey2: new Crc32(s[2])
  });
  for (let a = 0; a < n.length; a++)
    updateKeys(t, n.charCodeAt(a));
}
function updateKeys(t, n) {
  let [s, a, i] = t.keys;
  t.crcKey0.append([n]), s = ~t.crcKey0.get(), a = getInt32(Math.imul(getInt32(a + getInt8(s)), 134775813) + 1), t.crcKey2.append([a >>> 24]), i = ~t.crcKey2.get(), t.keys = [s, a, i];
}
function getByte(t) {
  const n = t.keys[2] | 2;
  return getInt8(Math.imul(n, n ^ 1) >>> 8);
}
function getInt8(t) {
  return t & 255;
}
function getInt32(t) {
  return t & 4294967295;
}
const COMPRESSION_FORMAT = "deflate-raw";
class DeflateStream extends TransformStream {
  constructor(n, { chunkSize: s, CompressionStream: a, CompressionStreamNative: i }) {
    super({});
    const { compressed: o, encrypted: u, useCompressionStream: c, zipCrypto: l, signed: d, level: f } = n, h = this;
    let T, p, I = filterEmptyChunks(super.readable);
    (!u || l) && d && (T = new Crc32Stream(), I = pipeThrough(I, T)), o && (I = pipeThroughCommpressionStream(I, c, { level: f, chunkSize: s }, i, a)), u && (l ? I = pipeThrough(I, new ZipCryptoEncryptionStream(n)) : (p = new AESEncryptionStream(n), I = pipeThrough(I, p))), setReadable(h, I, () => {
      let E;
      u && !l && (E = p.signature), (!u || l) && d && (E = new DataView(T.value.buffer).getUint32(0)), h.signature = E;
    });
  }
}
class InflateStream extends TransformStream {
  constructor(n, { chunkSize: s, DecompressionStream: a, DecompressionStreamNative: i }) {
    super({});
    const { zipCrypto: o, encrypted: u, signed: c, signature: l, compressed: d, useCompressionStream: f } = n;
    let h, T, p = filterEmptyChunks(super.readable);
    u && (o ? p = pipeThrough(p, new ZipCryptoDecryptionStream(n)) : (T = new AESDecryptionStream(n), p = pipeThrough(p, T))), d && (p = pipeThroughCommpressionStream(p, f, { chunkSize: s }, i, a)), (!u || o) && c && (h = new Crc32Stream(), p = pipeThrough(p, h)), setReadable(this, p, () => {
      if ((!u || o) && c) {
        const I = new DataView(h.value.buffer);
        if (l != I.getUint32(0, !1))
          throw new Error(ERR_INVALID_SIGNATURE);
      }
    });
  }
}
function filterEmptyChunks(t) {
  return pipeThrough(t, new TransformStream({
    transform(n, s) {
      n && n.length && s.enqueue(n);
    }
  }));
}
function setReadable(t, n, s) {
  n = pipeThrough(n, new TransformStream({ flush: s })), Object.defineProperty(t, "readable", {
    get() {
      return n;
    }
  });
}
function pipeThroughCommpressionStream(t, n, s, a, i) {
  try {
    const o = n && a ? a : i;
    t = pipeThrough(t, new o(COMPRESSION_FORMAT, s));
  } catch {
    if (n)
      try {
        t = pipeThrough(t, new i(COMPRESSION_FORMAT, s));
      } catch {
        return t;
      }
    else
      return t;
  }
  return t;
}
function pipeThrough(t, n) {
  return t.pipeThrough(n);
}
const MESSAGE_EVENT_TYPE = "message", MESSAGE_START = "start", MESSAGE_PULL = "pull", MESSAGE_DATA = "data", MESSAGE_ACK_DATA = "ack", MESSAGE_CLOSE = "close", CODEC_DEFLATE = "deflate", CODEC_INFLATE = "inflate";
class CodecStream extends TransformStream {
  constructor(n, s) {
    super({});
    const a = this, { codecType: i } = n;
    let o;
    i.startsWith(CODEC_DEFLATE) ? o = DeflateStream : i.startsWith(CODEC_INFLATE) && (o = InflateStream);
    let u = 0, c = 0;
    const l = new o(n, s), d = super.readable, f = new TransformStream({
      transform(T, p) {
        T && T.length && (c += T.length, p.enqueue(T));
      },
      flush() {
        Object.assign(a, {
          inputSize: c
        });
      }
    }), h = new TransformStream({
      transform(T, p) {
        T && T.length && (u += T.length, p.enqueue(T));
      },
      flush() {
        const { signature: T } = l;
        Object.assign(a, {
          signature: T,
          outputSize: u,
          inputSize: c
        });
      }
    });
    Object.defineProperty(a, "readable", {
      get() {
        return d.pipeThrough(f).pipeThrough(l).pipeThrough(h);
      }
    });
  }
}
class ChunkStream extends TransformStream {
  constructor(n) {
    let s;
    super({
      transform: a,
      flush(i) {
        s && s.length && i.enqueue(s);
      }
    });
    function a(i, o) {
      if (s) {
        const u = new Uint8Array(s.length + i.length);
        u.set(s), u.set(i, s.length), i = u, s = null;
      }
      i.length > n ? (o.enqueue(i.slice(0, n)), a(i.slice(n), o)) : s = i;
    }
  }
}
let WEB_WORKERS_SUPPORTED = typeof Worker != UNDEFINED_TYPE;
class CodecWorker {
  constructor(n, { readable: s, writable: a }, { options: i, config: o, streamOptions: u, useWebWorkers: c, transferStreams: l, scripts: d }, f) {
    const { signal: h } = u;
    return Object.assign(n, {
      busy: !0,
      readable: s.pipeThrough(new ChunkStream(o.chunkSize)).pipeThrough(new ProgressWatcherStream(s, u), { signal: h }),
      writable: a,
      options: Object.assign({}, i),
      scripts: d,
      transferStreams: l,
      terminate() {
        return new Promise((T) => {
          const { worker: p, busy: I } = n;
          p ? (I ? n.resolveTerminated = T : (p.terminate(), T()), n.interface = null) : T();
        });
      },
      onTaskFinished() {
        const { resolveTerminated: T } = n;
        T && (n.resolveTerminated = null, n.terminated = !0, n.worker.terminate(), T()), n.busy = !1, f(n);
      }
    }), (c && WEB_WORKERS_SUPPORTED ? createWebWorkerInterface : createWorkerInterface)(n, o);
  }
}
class ProgressWatcherStream extends TransformStream {
  constructor(n, { onstart: s, onprogress: a, size: i, onend: o }) {
    let u = 0;
    super({
      async start() {
        s && await callHandler(s, i);
      },
      async transform(c, l) {
        u += c.length, a && await callHandler(a, u, i), l.enqueue(c);
      },
      async flush() {
        n.size = u, o && await callHandler(o, u);
      }
    });
  }
}
async function callHandler(t, ...n) {
  try {
    await t(...n);
  } catch {
  }
}
function createWorkerInterface(t, n) {
  return {
    run: () => runWorker$1(t, n)
  };
}
function createWebWorkerInterface(t, n) {
  const { baseURL: s, chunkSize: a } = n;
  if (!t.interface) {
    let i;
    try {
      i = getWebWorker(t.scripts[0], s, t);
    } catch {
      return WEB_WORKERS_SUPPORTED = !1, createWorkerInterface(t, n);
    }
    Object.assign(t, {
      worker: i,
      interface: {
        run: () => runWebWorker(t, { chunkSize: a })
      }
    });
  }
  return t.interface;
}
async function runWorker$1({ options: t, readable: n, writable: s, onTaskFinished: a }, i) {
  try {
    const o = new CodecStream(t, i);
    await n.pipeThrough(o).pipeTo(s, { preventClose: !0, preventAbort: !0 });
    const {
      signature: u,
      inputSize: c,
      outputSize: l
    } = o;
    return {
      signature: u,
      inputSize: c,
      outputSize: l
    };
  } finally {
    a();
  }
}
async function runWebWorker(t, n) {
  let s, a;
  const i = new Promise((T, p) => {
    s = T, a = p;
  });
  Object.assign(t, {
    reader: null,
    writer: null,
    resolveResult: s,
    rejectResult: a,
    result: i
  });
  const { readable: o, options: u, scripts: c } = t, { writable: l, closed: d } = watchClosedStream(t.writable), f = sendMessage({
    type: MESSAGE_START,
    scripts: c.slice(1),
    options: u,
    config: n,
    readable: o,
    writable: l
  }, t);
  f || Object.assign(t, {
    reader: o.getReader(),
    writer: l.getWriter()
  });
  const h = await i;
  return f || await l.getWriter().close(), await d, h;
}
function watchClosedStream(t) {
  let n;
  const s = new Promise((i) => n = i);
  return { writable: new WritableStream({
    async write(i) {
      const o = t.getWriter();
      await o.ready, await o.write(i), o.releaseLock();
    },
    close() {
      n();
    },
    abort(i) {
      return t.getWriter().abort(i);
    }
  }), closed: s };
}
let classicWorkersSupported = !0, transferStreamsSupported = !0;
function getWebWorker(t, n, s) {
  const a = { type: "module" };
  let i, o;
  typeof t == FUNCTION_TYPE && (t = t());
  try {
    i = new URL(t, n);
  } catch {
    i = t;
  }
  if (classicWorkersSupported)
    try {
      o = new Worker(i);
    } catch {
      classicWorkersSupported = !1, o = new Worker(i, a);
    }
  else
    o = new Worker(i, a);
  return o.addEventListener(MESSAGE_EVENT_TYPE, (u) => onMessage(u, s)), o;
}
function sendMessage(t, { worker: n, writer: s, onTaskFinished: a, transferStreams: i }) {
  try {
    let { value: o, readable: u, writable: c } = t;
    const l = [];
    if (o && (o.byteLength < o.buffer.byteLength ? t.value = o.buffer.slice(0, o.byteLength) : t.value = o.buffer, l.push(t.value)), i && transferStreamsSupported ? (u && l.push(u), c && l.push(c)) : t.readable = t.writable = null, l.length)
      try {
        return n.postMessage(t, l), !0;
      } catch {
        transferStreamsSupported = !1, t.readable = t.writable = null, n.postMessage(t);
      }
    else
      n.postMessage(t);
  } catch (o) {
    throw s && s.releaseLock(), a(), o;
  }
}
async function onMessage({ data: t }, n) {
  const { type: s, value: a, messageId: i, result: o, error: u } = t, { reader: c, writer: l, resolveResult: d, rejectResult: f, onTaskFinished: h } = n;
  try {
    if (u) {
      const { message: p, stack: I, code: E, name: _ } = u, m = new Error(p);
      Object.assign(m, { stack: I, code: E, name: _ }), T(m);
    } else {
      if (s == MESSAGE_PULL) {
        const { value: p, done: I } = await c.read();
        sendMessage({ type: MESSAGE_DATA, value: p, done: I, messageId: i }, n);
      }
      s == MESSAGE_DATA && (await l.ready, await l.write(new Uint8Array(a)), sendMessage({ type: MESSAGE_ACK_DATA, messageId: i }, n)), s == MESSAGE_CLOSE && T(null, o);
    }
  } catch (p) {
    sendMessage({ type: MESSAGE_CLOSE, messageId: i }, n), T(p);
  }
  function T(p, I) {
    p ? f(p) : d(I), l && l.releaseLock(), h();
  }
}
let pool = [];
const pendingRequests = [];
let indexWorker = 0;
async function runWorker(t, n) {
  const { options: s, config: a } = n, { transferStreams: i, useWebWorkers: o, useCompressionStream: u, codecType: c, compressed: l, signed: d, encrypted: f } = s, { workerScripts: h, maxWorkers: T } = a;
  n.transferStreams = i || i === UNDEFINED_VALUE;
  const p = !l && !d && !f && !n.transferStreams;
  return n.useWebWorkers = !p && (o || o === UNDEFINED_VALUE && a.useWebWorkers), n.scripts = n.useWebWorkers && h ? h[c] : [], s.useCompressionStream = u || u === UNDEFINED_VALUE && a.useCompressionStream, (await I()).run();
  async function I() {
    const _ = pool.find((m) => !m.busy);
    if (_)
      return clearTerminateTimeout(_), new CodecWorker(_, t, n, E);
    if (pool.length < T) {
      const m = { indexWorker };
      return indexWorker++, pool.push(m), new CodecWorker(m, t, n, E);
    } else
      return new Promise((m) => pendingRequests.push({ resolve: m, stream: t, workerOptions: n }));
  }
  function E(_) {
    if (pendingRequests.length) {
      const [{ resolve: m, stream: b, workerOptions: S }] = pendingRequests.splice(0, 1);
      m(new CodecWorker(_, b, S, E));
    } else _.worker ? (clearTerminateTimeout(_), terminateWorker(_, n)) : pool = pool.filter((m) => m != _);
  }
}
function terminateWorker(t, n) {
  const { config: s } = n, { terminateWorkerTimeout: a } = s;
  Number.isFinite(a) && a >= 0 && (t.terminated ? t.terminated = !1 : t.terminateTimeout = setTimeout(async () => {
    pool = pool.filter((i) => i != t);
    try {
      await t.terminate();
    } catch {
    }
  }, a));
}
function clearTerminateTimeout(t) {
  const { terminateTimeout: n } = t;
  n && (clearTimeout(n), t.terminateTimeout = null);
}
function e(t) {
  const n = () => URL.createObjectURL(new Blob([`const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self,k=void 0,v="undefined",S="function";class z{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const C=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;C[e]=t}class x{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^C[255&(t^e[n])];this.t=t}get(){return~this.t}}class A extends p{constructor(){let e;const t=new x;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new i(4);new l(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const _={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=_.i(n);return 32===r?e.concat(t):_.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+_.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=_.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=_.i(s);return r.push(_.h(t+i&31,t+i>32?n:r.pop(),1)),r}},I={p:{m(e){const t=_.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)3&s||(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},k(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3&~n||(t.push(r),r=0);return 3&n&&t.push(_.h(8*(3&n),r)),t}}},P=class{constructor(e){const t=this;t.blockSize=512,t.v=[1732584193,4023233417,2562383102,271733878,3285377520],t.S=[1518500249,1859775393,2400959708,3395469782],e?(t.C=e.C.slice(0),t.A=e.A.slice(0),t._=e._):t.reset()}reset(){const e=this;return e.C=e.v.slice(0),e.A=[],e._=0,e}update(e){const t=this;"string"==typeof e&&(e=I.I.k(e));const n=t.A=_.concat(t.A,e),r=t._,i=t._=r+_.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.P(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}D(){const e=this;let t=e.A;const n=e.C;t=_.concat(t,[_.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e._/4294967296)),t.push(0|e._);t.length;)e.P(t.splice(0,16));return e.reset(),n}V(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}R(e,t){return t<<e|t>>>32-e}P(t){const n=this,s=n.C,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.R(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.R(5,o)+n.V(e,c,f,a)+l+i[e]+n.S[r.floor(e/20)]|0;l=a,a=f,f=n.R(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},D={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},V={importKey:e=>new V.B(I.p.k(e)),M(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=_;for(t=I.p.k(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},B:class{constructor(e){const t=this,n=t.U=P,r=[[],[]];t.K=[new n,new n];const s=t.K[0].blockSize/32;e.length>s&&(e=(new n).update(e).D());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.K[0].update(r[0]),t.K[1].update(r[1]),t.N=new n(t.K[0])}reset(){const e=this;e.N=new e.U(e.K[0]),e.O=!1}update(e){this.O=!0,this.N.update(e)}digest(){const e=this,t=e.N.D(),n=new e.U(e.K[1]).update(t).D();return e.reset(),n}encrypt(e){if(this.O)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},R=typeof h!=v&&typeof h.getRandomValues==S,B="Invalid password",E="Invalid signature",M="zipjs-abort-check-password";function U(e){return R?h.getRandomValues(e):D.getRandomValues(e)}const K=16,N={name:"PBKDF2"},O=t.assign({hash:{name:"HMAC"}},N),T=t.assign({iterations:1e3,hash:{name:"SHA-1"}},N),W=["deriveBits"],j=[8,12,16],H=[16,24,32],L=10,F=[0,0,0,0],q=typeof h!=v,G=q&&h.subtle,J=q&&typeof G!=v,Q=I.p,X=class{constructor(e){const t=this;t.T=[[[],[],[],[],[]],[[],[],[],[],[]]],t.T[0][0][0]||t.W();const n=t.T[0][4],r=t.T[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.S=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.j(e,0)}decrypt(e){return this.j(e,1)}W(){const e=this.T[0],t=this.T[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}j(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.S[t],r=n.length/4-2,i=[0,0,0,0],o=this.T[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},Y=class{constructor(e,t){this.H=e,this.L=t,this.F=t}reset(){this.F=this.L}update(e){return this.q(this.H,e,this.F)}G(e){if(255&~(e>>24))e+=1<<24;else{let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}return e}J(e){0===(e[0]=this.G(e[0]))&&(e[1]=this.G(e[1]))}q(e,t,n){let r;if(!(r=t.length))return[];const s=_.l(t);for(let s=0;r>s;s+=4){this.J(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return _.u(t,s)}},Z=V.B;let $=q&&J&&typeof G.importKey==S,ee=q&&J&&typeof G.deriveBits==S;class te extends p{constructor({password:e,rawPassword:n,signed:r,encryptionStrength:o,checkPasswordOnly:c}){super({start(){t.assign(this,{ready:new u((e=>this.X=e)),password:ie(e,n),signed:r,Y:o-1,pending:new i})},async transform(e,t){const n=this,{password:r,Y:o,X:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await se(e,t,n,ce(r,0,j[t])),o=ce(r,j[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(B)})(n,o,r,ce(e,0,j[o]+2)),e=ce(e,j[o]+2),c?t.error(new s(M)):f()):await a;const l=new i(e.length-L-(e.length-L)%K);t.enqueue(re(n,e,l,0,L,!0))},async flush(e){const{signed:t,Z:n,$:r,pending:o,ready:c}=this;if(r&&n){await c;const f=ce(o,0,o.length-L),a=ce(o,o.length-L);let l=new i;if(f.length){const e=ae(Q,f);r.update(e);const t=n.update(e);l=fe(Q,t)}if(t){const e=ce(fe(Q,r.digest()),0,L);for(let t=0;L>t;t++)if(e[t]!=a[t])throw new s(E)}e.enqueue(l)}}})}}class ne extends p{constructor({password:e,rawPassword:n,encryptionStrength:r}){let s;super({start(){t.assign(this,{ready:new u((e=>this.X=e)),password:ie(e,n),Y:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,Y:s,X:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=U(new i(j[t]));return oe(r,await se(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%K);a.set(f,0),t.enqueue(re(n,e,a,f.length,0))},async flush(e){const{Z:t,$:n,pending:r,ready:o}=this;if(n&&t){await o;let c=new i;if(r.length){const e=t.update(ae(Q,r));n.update(e),c=fe(Q,e)}s.signature=fe(Q,n.digest()).slice(0,L),e.enqueue(oe(c,s.signature))}}}),s=this}}function re(e,t,n,r,s,o){const{Z:c,$:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=oe(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%K)),u=0;l-K>=u;u+=K){const e=ae(Q,ce(t,u,u+K));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(fe(Q,s),u+r)}return e.pending=ce(t,u),n}async function se(n,r,s,o){n.password=null;const c=await(async(e,t,n,r,s)=>{if(!$)return V.importKey(t);try{return await G.importKey("raw",t,n,!1,s)}catch(e){return $=!1,V.importKey(t)}})(0,s,O,0,W),f=await(async(e,t,n)=>{if(!ee)return V.M(t,e.salt,T.iterations,n);try{return await G.deriveBits(e,t,n)}catch(r){return ee=!1,V.M(t,e.salt,T.iterations,n)}})(t.assign({salt:o},T),c,8*(2*H[r]+2)),a=new i(f),l=ae(Q,ce(a,0,H[r])),u=ae(Q,ce(a,H[r],2*H[r])),w=ce(a,2*H[r]);return t.assign(n,{keys:{key:l,ee:u,passwordVerification:w},Z:new Y(new X(l),e.from(F)),$:new Z(u)}),w}function ie(e,t){return t===k?(e=>{if(typeof w==v){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(e):t}function oe(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ce(e,t,n){return e.subarray(t,n)}function fe(e,t){return e.m(t)}function ae(e,t){return e.k(t)}class le extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;if(n.password){const t=we(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(B);e=e.subarray(12)}r?t.error(new s(M)):t.enqueue(we(n,e))}})}}class ue extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=U(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(he(n,t),0),s=12}else r=new i(e.length),s=0;r.set(he(n,e),s),t.enqueue(r)}})}}function we(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,n[r]);return n}function he(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,t[r]);return n}function de(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,te:new x(r[0]),ne:new x(r[2])});for(let t=0;t<n.length;t++)pe(e,n.charCodeAt(t))}function pe(e,t){let[n,s,i]=e.keys;e.te.append([t]),n=~e.te.get(),s=be(r.imul(be(s+me(n)),134775813)+1),e.ne.append([s>>>24]),i=~e.ne.get(),e.keys=[n,s,i]}function ye(e){const t=2|e.keys[2];return me(r.imul(t,1^t)>>>8)}function me(e){return 255&e}function be(e){return 4294967295&e}const ge="deflate-raw";class ke extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=Se(super.readable);i&&!c||!f||(w=new A,d=xe(d,w)),s&&(d=Ce(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=xe(d,new ue(e)):(h=new ne(e),d=xe(d,h))),ze(u,d,(()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=new l(w.value.buffer).getUint32(0)),u.signature=e}))}}class ve extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=Se(super.readable);o&&(i?d=xe(d,new le(e)):(h=new te(e),d=xe(d,h))),a&&(d=Ce(d,u,{chunkSize:t},r,n)),o&&!i||!c||(w=new A,d=xe(d,w)),ze(this,d,(()=>{if((!o||i)&&c){const e=new l(w.value.buffer);if(f!=e.getUint32(0,!1))throw new s(E)}}))}}function Se(e){return xe(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ze(e,n,r){n=xe(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Ce(e,t,n,r,s){try{e=xe(e,new(t&&r?r:s)(ge,n))}catch(r){if(!t)return e;try{e=xe(e,new s(ge,n))}catch(t){return e}}return e}function xe(e,t){return e.pipeThrough(t)}const Ae="data",_e="close";class Ie extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=ke:s.startsWith("inflate")&&(i=ve);let o=0,c=0;const f=new i(e,n),a=super.readable,l=new p({transform(e,t){e&&e.length&&(c+=e.length,t.enqueue(e))},flush(){t.assign(r,{inputSize:c})}}),u=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=f;t.assign(r,{signature:e,outputSize:o,inputSize:c})}});t.defineProperty(r,"readable",{get:()=>a.pipeThrough(l).pipeThrough(f).pipeThrough(u)})}}class Pe extends p{constructor(e){let t;super({transform:function n(r,s){if(t){const e=new i(t.length+r.length);e.set(t),e.set(r,t.length),r=e,t=null}r.length>e?(s.enqueue(r.slice(0,e)),n(r.slice(e),s)):t=r},flush(e){t&&t.length&&e.enqueue(t)}})}}const De=new a,Ve=new a;let Re,Be=0,Ee=!0;async function Me(e){try{const{options:t,scripts:r,config:s}=e;if(r&&r.length)try{Ee?importScripts.apply(k,r):await Ue(r)}catch(e){Ee=!1,await Ue(r)}self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new z(self.Deflate)),self.Inflate&&(s.DecompressionStream=new z(self.Inflate));const i={highWaterMark:1},o=e.readable||new y({async pull(e){const t=new u((e=>De.set(Be,e)));Ke({type:"pull",messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ve.set(Be,t),Ke({type:Ae,value:e,messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new Ie(t,s);Re=new AbortController;const{signal:a}=Re;await o.pipeThrough(f).pipeThrough(new Pe(s.chunkSize)).pipeTo(c,{signal:a,preventClose:!0,preventAbort:!0}),await c.getWriter().close();const{signature:l,inputSize:w,outputSize:h}=f;Ke({type:_e,result:{signature:l,inputSize:w,outputSize:h}})}catch(e){Ne(e)}}async function Ue(e){for(const t of e)await import(t)}function Ke(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Ne(e=new s("Unknown error")){const{message:t,stack:n,code:r,name:i}=e;d({error:{message:t,stack:n,code:r,name:i}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&Me(e),t==Ae){const e=De.get(n);De.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ve.get(n);Ve.delete(n),e()}t==_e&&Re.abort()}catch(e){Ne(e)}}));const Oe=15,Te=573,We=-2;function je(t){return He(t.map((([t,n])=>new e(t).fill(n,0,t))))}function He(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?He(n):n)),[])}const Le=[0,1,2,3].concat(...je([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Fe(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.re=n=>{const s=e.se,i=e.oe.ie,o=e.oe.ce;let c,f,a,l=-1;for(n.fe=0,n.ae=Te,c=0;o>c;c++)0!==s[2*c]?(n.le[++n.fe]=l=c,n.ue[c]=0):s[2*c+1]=0;for(;2>n.fe;)a=n.le[++n.fe]=2>l?++l:0,s[2*a]=1,n.ue[a]=0,n.we--,i&&(n.he-=i[2*a+1]);for(e.de=l,c=r.floor(n.fe/2);c>=1;c--)n.pe(s,c);a=o;do{c=n.le[1],n.le[1]=n.le[n.fe--],n.pe(s,1),f=n.le[1],n.le[--n.ae]=c,n.le[--n.ae]=f,s[2*a]=s[2*c]+s[2*f],n.ue[a]=r.max(n.ue[c],n.ue[f])+1,s[2*c+1]=s[2*f+1]=a,n.le[1]=a++,n.pe(s,1)}while(n.fe>=2);n.le[--n.ae]=n.le[1],(t=>{const n=e.se,r=e.oe.ie,s=e.oe.ye,i=e.oe.me,o=e.oe.be;let c,f,a,l,u,w,h=0;for(l=0;Oe>=l;l++)t.ge[l]=0;for(n[2*t.le[t.ae]+1]=0,c=t.ae+1;Te>c;c++)f=t.le[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.de||(t.ge[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.we+=w*(l+u),r&&(t.he+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.ge[l];)l--;t.ge[l]--,t.ge[l+1]+=2,t.ge[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.ge[l];0!==f;)a=t.le[--c],a>e.de||(n[2*a+1]!=l&&(t.we+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;Oe>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.de,n.ge)}}function qe(e,t,n,r,s){const i=this;i.ie=e,i.ye=t,i.me=n,i.ce=r,i.be=s}Fe.ke=[0,1,2,3,4,5,6,7].concat(...je([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),Fe.ve=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],Fe.Se=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],Fe.ze=e=>256>e?Le[e]:Le[256+(e>>>7)],Fe.Ce=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Fe.xe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Fe.Ae=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Fe._e=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Ge=je([[144,8],[112,9],[24,7],[8,8]]);qe.Ie=He([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Ge[t]])));const Je=je([[30,5]]);function Qe(e,t,n,r,s){const i=this;i.Pe=e,i.De=t,i.Ve=n,i.Re=r,i.Be=s}qe.Ee=He([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,Je[t]]))),qe.Me=new qe(qe.Ie,Fe.Ce,257,286,Oe),qe.Ue=new qe(qe.Ee,Fe.xe,0,30,Oe),qe.Ke=new qe(null,Fe.Ae,0,19,7);const Xe=[new Qe(0,0,0,0,0),new Qe(4,4,8,4,1),new Qe(4,5,16,8,1),new Qe(4,6,32,32,1),new Qe(4,4,16,16,2),new Qe(8,16,32,32,2),new Qe(8,16,128,128,2),new Qe(8,32,128,256,2),new Qe(32,128,258,1024,2),new Qe(32,258,258,4096,2)],Ye=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Ze=113,$e=666,et=262;function tt(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function nt(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,A,_,I,P,D,V,R,B,E,M,U;const K=new Fe,N=new Fe,O=new Fe;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)U[2*t]=0;E[512]=1,e.we=e.he=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?U[2*n]+=i:0!==n?(n!=r&&U[2*n]++,U[32]++):i>10?U[36]++:U[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ne[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,U)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,U),o--),Y(16,U),X(o-3,2)):o>10?(Y(18,U),X(o-11,7)):(Y(17,U),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Oe[W]=t,e.Te[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(Fe.ke[n]+256+1)]++,M[2*Fe.ze(t)]++),!(8191&W)&&D>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+Fe.xe[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Oe[c],s=e.Te[c],c++,0===r?Y(s,t):(i=Fe.ke[s],Y(i+256+1,t),o=Fe.Ce[i],0!==o&&(s-=Fe.ve[i],X(s,o)),r--,i=Fe.ze(r),Y(i,n),o=Fe.xe[i],0!==o&&(r-=Fe.Se[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ne.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;D>0?(K.re(e),N.re(e),o=(()=>{let t;for(G(E,K.de),G(M,N.de),O.re(e),t=18;t>=3&&0===U[2*Fe._e[t]+1];t--);return e.we+=14+3*(t+1),t})(),s=e.we+3+7>>>3,i=e.he+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(qe.Ie,qe.Ee)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(U[2*Fe._e[r]+1],3);Z(E,e-1),Z(M,t-1)})(K.de+1,N.de+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.We()}function ie(){let e,n,r,s;do{if(s=w-A-C,0===s&&0===C&&0===A)s=f;else if(-1==s)s--;else if(C>=f+f-et){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.je)return;e=t.He(u,C+A,s),A+=e,3>A||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(et>A&&0!==t.je)}function oe(e){let t,n,r=I,s=C,i=_;const o=C>f-et?C-(f-et):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>_||(r>>=2),c>A&&(c=A);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>A?A:i}e.ue=[],e.ge=[],e.le=[],E=[],M=[],U=[],e.pe=(t,n)=>{const r=e.le,s=r[n];let i=n<<1;for(;i<=e.fe&&(i<e.fe&&tt(t,r[i+1],r[i],e.ue)&&i++,!tt(t,s,r[i],e.ue));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.Le=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Fe=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?We:(t.qe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ne=new i(4*T),s=4*T,e.Oe=new o(T),e.Te=new i(T),D=S,V=G,(t=>(t.Ge=t.Je=0,t.Fe=null,e.pending=0,e.Qe=0,n=Ze,c=0,K.se=E,K.oe=qe.Me,N.se=M,N.oe=qe.Ue,O.se=U,O.oe=qe.Ke,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;P=Xe[D].De,R=Xe[D].Pe,B=Xe[D].Ve,I=Xe[D].Re,C=0,k=0,A=0,v=_=2,z=0,p=0})(),0))(t))),e.Xe=()=>42!=n&&n!=Ze&&n!=$e?We:(e.Te=null,e.Oe=null,e.Ne=null,d=null,h=null,u=null,e.qe=null,n==Ze?-3:0),e.Ye=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?We:(Xe[D].Be!=Xe[t].Be&&0!==e.Ge&&(r=e.Ze(1)),D!=t&&(D=t,P=Xe[D].De,R=Xe[D].Pe,B=Xe[D].Ve,I=Xe[D].Re),V=n,r)},e.$e=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return We;if(3>i)return 0;for(i>f-et&&(i=f-et,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ze=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return We;if(!r.et||!r.tt&&0!==r.je||n==$e&&4!=i)return r.Fe=Ye[4],We;if(0===r.nt)return r.Fe=Ye[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(D-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=Ze,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.We(),0===t.nt)return c=-1,0}else if(0===t.je&&I>=i&&4!=i)return t.Fe=Ye[7],-5;if(n==$e&&0!==t.je)return r.Fe=Ye[7],-5;if(0!==t.je||0!==A||0!=i&&n!=$e){switch(R=-1,Xe[D].Be){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=A){if(ie(),0===A&&0==e)return 0;if(0===A)break}if(C+=A,A=0,n=k+r,(0===C||C>=n)&&(A=C-n,C=n,se(!1),0===t.nt))return 0;if(C-k>=f-et&&(se(!1),0===t.nt))return 0}return se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(et>A){if(ie(),et>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-et||2!=V&&(v=oe(r)),3>v)n=ee(0,255&u[C]),A--,C++;else if(n=ee(C-x,v-3),A-=v,v>P||3>A)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.nt))return 0}return se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(et>A){if(ie(),et>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),_=v,S=x,v=2,0!==s&&P>_&&f-et>=(C-s&65535)&&(2!=V&&(v=oe(s)),5>=v&&(1==V||3==v&&C-x>4096)&&(v=2)),3>_||v>_)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,A--,0===t.nt)return 0}else z=1,C++,A--;else{r=C+A-3,n=ee(C-1-S,_-3),A-=_-1,_-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--_);if(z=0,v=2,C++,n&&(se(!1),0===t.nt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=$e),0==R||2==R)return 0===t.nt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,qe.Ie),$(),9>1+H+10-F&&(X(2,3),Y(256,qe.Ie),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.We(),0===t.nt)return c=-1,0}}return 4!=i?0:1}}function rt(){const e=this;e.rt=0,e.st=0,e.je=0,e.Ge=0,e.nt=0,e.Je=0}function st(e){const t=new rt,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.Le(f),t.et=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.rt=0,t.tt=e,t.je=e.length;do{if(t.st=0,t.nt=n,o=t.Ze(0),0!=o)throw new s("deflating: "+t.Fe);t.st&&(t.st==n?w.push(new i(c)):w.push(c.subarray(0,t.st))),u+=t.st,r&&t.rt>0&&t.rt!=a&&(r(t.rt),a=t.rt)}while(t.je>0||0===t.nt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]?new i(w[0]):new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.st=0,t.nt=n,e=t.Ze(4),1!=e&&0!=e)throw new s("deflating: "+t.Fe);n-t.nt>0&&a.push(c.slice(0,t.st)),f+=t.st}while(t.je>0||0===t.nt);return t.Xe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}rt.prototype={Le(e,t){const n=this;return n.qe=new nt,t||(t=Oe),n.qe.Le(n,e,t)},Ze(e){const t=this;return t.qe?t.qe.Ze(t,e):We},Xe(){const e=this;if(!e.qe)return We;const t=e.qe.Xe();return e.qe=null,t},Ye(e,t){const n=this;return n.qe?n.qe.Ye(n,e,t):We},$e(e,t){const n=this;return n.qe?n.qe.$e(n,e,t):We},He(e,t,n){const r=this;let s=r.je;return s>n&&(s=n),0===s?0:(r.je-=s,e.set(r.tt.subarray(r.rt,r.rt+s),t),r.rt+=s,r.Ge+=s,s)},We(){const e=this;let t=e.qe.pending;t>e.nt&&(t=e.nt),0!==t&&(e.et.set(e.qe.Ne.subarray(e.qe.Qe,e.qe.Qe+t),e.st),e.st+=t,e.qe.Qe+=t,e.Je+=t,e.nt-=t,e.qe.pending-=t,0===e.qe.pending&&(e.qe.Qe=0))}};const it=0,ot=1,ct=-2,ft=-3,at=-4,lt=-5,ut=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],wt=1440,ht=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],dt=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],pt=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],yt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],mt=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],bt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],gt=15;function kt(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,A,_,I,P;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,it;for(S=u[0],k=1;gt>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=gt;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return ft;if(0>(I-=n[g]))return ft;for(n[g]+=I,i[1]=k=0,C=1,_=2;0!=--g;)i[_]=k+=n[C],_++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,A=-S,s[0]=0,x=0,P=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>A+S;){if(b++,A+=S,P=m-A,P=P>S?S:P,(y=1<<(k=v-A))>p+1&&(y-=p+1,_=v,P>k))for(;++k<P&&(y<<=1)>n[++_];)y-=n[_];if(P=1<<k,h[0]+P>wt)return ft;s[b]=x=h[0],h[0]+=P,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>A-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-A,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-A,k=g>>>A;P>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;g&k;k>>>=1)g^=k;for(g^=k,z=(1<<A)-1;(g&z)!=i[b];)b--,A-=S,z=(1<<A)-1}return 0!==I&&1!=m?lt:it}function c(o){let c;for(e||(e=[],t=[],n=new f(gt+1),r=[],s=new f(gt),i=new f(gt+1)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;gt+1>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,gt),0),i.set(n.subarray(0,gt+1),0)}this.it=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==ft?f.Fe="oversubscribed dynamic bit lengths tree":a!=lt&&0!==r[0]||(f.Fe="incomplete dynamic bit lengths tree",a=ft),a},this.ot=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,pt,yt,a,i,u,e,t),h!=it||0===i[0]?(h==ft?w.Fe="oversubscribed literal/length tree":h!=at&&(w.Fe="incomplete literal/length tree",h=ft),h):(c(288),h=o(s,n,r,0,mt,bt,l,f,u,e,t),h!=it||0===f[0]&&n>257?(h==ft?w.Fe="oversubscribed distance tree":h==lt?(w.Fe="incomplete distance tree",h=ft):h!=at&&(w.Fe="empty distance tree with lengths",h=ft),h):it)}}kt.ct=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=ht,r[0]=dt,it);const vt=0,St=1,zt=2,Ct=3,xt=4,At=5,_t=6,It=7,Pt=8,Dt=9;function Vt(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.rt,p=c.je,w=o.ft,h=o.lt,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=ut[e],g=ut[t];do{for(;20>h;)p--,w|=(255&c.ut(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15,k=a[z+2]+(w&ut[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ut(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15;u>h;)p--,w|=(255&c.ut(d++))<<h,h+=8;if(v=a[z+2]+(w&ut[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.wt[y++]=o.wt[S++]}while(0!=--u);else o.wt.set(o.wt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.wt[y++]=o.wt[S++],o.wt[y++]=o.wt[S++],k-=2):(o.wt.set(o.wt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.wt[y++]=o.wt[S++]}while(0!=--k);else o.wt.set(o.wt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(64&u)return c.Fe="invalid distance code",k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ft=w,o.lt=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,ft;f+=a[z+2],f+=w&ut[u],z=3*(l+f),u=a[z]}break}if(64&u)return 32&u?(k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ft=w,o.lt=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,ot):(c.Fe="invalid literal/length code",k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ft=w,o.lt=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,ft);if(f+=a[z+2],f+=w&ut[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.wt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.wt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ft=w,o.lt=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,it}e.init=(e,i,o,c,f,a)=>{t=vt,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ht=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,A=0,_=0;for(_=y.rt,v=y.je,x=e.ft,A=e.lt,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case vt:if(z>=258&&v>=10&&(e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,m=p(u,w,r,h,s,d,e,y),_=y.rt,v=y.je,x=e.ft,A=e.lt,S=e.write,z=S<e.read?e.read-S-1:e.end-S,m!=it)){t=m==ot?It:Dt;break}c=u,n=r,o=h,t=St;case St:for(b=c;b>A;){if(0===v)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,v--,x|=(255&y.ut(_++))<<A,A+=8}if(g=3*(o+(x&ut[b])),x>>>=n[g+1],A-=n[g+1],k=n[g],0===k){f=n[g+2],t=_t;break}if(16&k){a=15&k,i=n[g+2],t=zt;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}if(32&k){t=It;break}return t=Dt,y.Fe="invalid literal/length code",m=ft,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);case zt:for(b=a;b>A;){if(0===v)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,v--,x|=(255&y.ut(_++))<<A,A+=8}i+=x&ut[b],x>>=b,A-=b,c=w,n=s,o=d,t=Ct;case Ct:for(b=c;b>A;){if(0===v)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,v--,x|=(255&y.ut(_++))<<A,A+=8}if(g=3*(o+(x&ut[b])),x>>=n[g+1],A-=n[g+1],k=n[g],16&k){a=15&k,l=n[g+2],t=xt;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}return t=Dt,y.Fe="invalid distance code",m=ft,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);case xt:for(b=a;b>A;){if(0===v)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,v--,x|=(255&y.ut(_++))<<A,A+=8}l+=x&ut[b],x>>=b,A-=b,t=At;case At:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.dt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);e.wt[S++]=e.wt[C++],z--,C==e.end&&(C=0),i--}t=vt;break;case _t:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.dt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,e.wt[S++]=f,z--,t=vt;break;case It:if(A>7&&(A-=8,v++,_--),e.write=S,m=e.dt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);t=Pt;case Pt:return m=ot,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);case Dt:return m=ft,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);default:return m=ct,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m)}},e.yt=()=>{}}const Rt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Bt=0,Et=1,Mt=2,Ut=3,Kt=4,Nt=5,Ot=6,Tt=7,Wt=8,jt=9;function Ht(e,t){const n=this;let r,s=Bt,o=0,c=0,a=0;const l=[0],u=[0],w=new Vt;let h=0,d=new f(3*wt);const p=new kt;n.lt=0,n.ft=0,n.wt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),s==Ot&&w.yt(e),s=Bt,n.lt=0,n.ft=0,n.read=n.write=0},n.reset(e,null),n.dt=(e,t)=>{let r,s,i;return s=e.st,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.nt&&(r=e.nt),0!==r&&t==lt&&(t=it),e.nt-=r,e.Je+=r,e.et.set(n.wt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.nt&&(r=e.nt),0!==r&&t==lt&&(t=it),e.nt-=r,e.Je+=r,e.et.set(n.wt.subarray(i,i+r),s),s+=r,i+=r),e.st=s,n.read=i,t},n.ht=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.rt,b=e.je,f=n.ft,y=n.lt,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,A,_,I,P;switch(s){case Bt:for(;3>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=Et;break;case 1:S=[],z=[],C=[[]],x=[[]],kt.ct(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=Ot;break;case 2:f>>>=3,y-=3,s=Ut;break;case 3:return f>>>=3,y-=3,s=jt,e.Fe="invalid block type",t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t)}break;case Et:for(;32>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=jt,e.Fe="invalid stored block lengths",t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);o=65535&f,f=y=0,s=0!==o?Mt:0!==h?Tt:Bt;break;case Mt:if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.dt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);if(t=it,i=o,i>b&&(i=b),i>k&&(i=k),n.wt.set(e.He(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?Tt:Bt;break;case Ut:for(;14>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=jt,e.Fe="too many length or distance symbols",t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=Kt;case Kt:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}r[Rt[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[Rt[a++]]=0;if(l[0]=7,i=p.it(r,l,u,d,e),i!=it)return(t=i)==ft&&(r=null,s=jt),n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);a=0,s=Nt;case Nt:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&ut[i]))+1],w=d[3*(u[0]+(f&ut[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&ut[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=jt,e.Fe="invalid bit length repeat",t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,A=[],_=[],I=[],P=[],A[0]=9,_[0]=6,i=c,i=p.ot(257+(31&i),1+(i>>5&31),r,A,_,I,P,d,e),i!=it)return i==ft&&(r=null,s=jt),t=i,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);w.init(A[0],_[0],d,I[0],d,P[0]),s=Ot;case Ot:if(n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,(t=w.ht(n,e,t))!=ot)return n.dt(e,t);if(t=it,w.yt(e),m=e.rt,b=e.je,f=n.ft,y=n.lt,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=Bt;break}s=Tt;case Tt:if(n.write=g,t=n.dt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);s=Wt;case Wt:return t=ot,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);case jt:return t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);default:return t=ct,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t)}}},n.yt=e=>{n.reset(e,null),n.wt=null,d=null},n.bt=(e,t,r)=>{n.wt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.gt=()=>s==Et?1:0}const Lt=13,Ft=[0,0,255,255];function qt(){const e=this;function t(e){return e&&e.kt?(e.Ge=e.Je=0,e.Fe=null,e.kt.mode=7,e.kt.vt.reset(e,null),it):ct}e.mode=0,e.method=0,e.St=[0],e.zt=0,e.marker=0,e.Ct=0,e.xt=t=>(e.vt&&e.vt.yt(t),e.vt=null,it),e.At=(n,r)=>(n.Fe=null,e.vt=null,8>r||r>15?(e.xt(n),ct):(e.Ct=r,n.kt.vt=new Ht(n,1<<r),t(n),it)),e._t=(e,t)=>{let n,r;if(!e||!e.kt||!e.tt)return ct;const s=e.kt;for(t=4==t?lt:it,n=lt;;)switch(s.mode){case 0:if(0===e.je)return n;if(n=t,e.je--,e.Ge++,8!=(15&(s.method=e.ut(e.rt++)))){s.mode=Lt,e.Fe="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.Ct){s.mode=Lt,e.Fe="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.je)return n;if(n=t,e.je--,e.Ge++,r=255&e.ut(e.rt++),((s.method<<8)+r)%31!=0){s.mode=Lt,e.Fe="incorrect header check",s.marker=5;break}if(!(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt=(255&e.ut(e.rt++))<<24&4278190080,s.mode=3;case 3:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt+=(255&e.ut(e.rt++))<<16&16711680,s.mode=4;case 4:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt+=(255&e.ut(e.rt++))<<8&65280,s.mode=5;case 5:return 0===e.je?n:(n=t,e.je--,e.Ge++,s.zt+=255&e.ut(e.rt++),s.mode=6,2);case 6:return s.mode=Lt,e.Fe="need dictionary",s.marker=0,ct;case 7:if(n=s.vt.ht(e,n),n==ft){s.mode=Lt,s.marker=0;break}if(n==it&&(n=t),n!=ot)return n;n=t,s.vt.reset(e,s.St),s.mode=12;case 12:return e.je=0,ot;case Lt:return ft;default:return ct}},e.It=(e,t,n)=>{let r=0,s=n;if(!e||!e.kt||6!=e.kt.mode)return ct;const i=e.kt;return s<1<<i.Ct||(s=(1<<i.Ct)-1,r=n-s),i.vt.bt(t,r,s),i.mode=7,it},e.Pt=e=>{let n,r,s,i,o;if(!e||!e.kt)return ct;const c=e.kt;if(c.mode!=Lt&&(c.mode=Lt,c.marker=0),0===(n=e.je))return lt;for(r=e.rt,s=c.marker;0!==n&&4>s;)e.ut(r)==Ft[s]?s++:s=0!==e.ut(r)?0:4-s,r++,n--;return e.Ge+=r-e.rt,e.rt=r,e.je=n,c.marker=s,4!=s?ft:(i=e.Ge,o=e.Je,t(e),e.Ge=i,e.Je=o,c.mode=7,it)},e.Dt=e=>e&&e.kt&&e.kt.vt?e.kt.vt.gt():ct}function Gt(){}function Jt(e){const t=new Gt,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.At(),t.et=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.rt=0,t.tt=e,t.je=e.length;do{if(t.st=0,t.nt=n,0!==t.je||c||(t.rt=0,c=!0),a=t._t(0),c&&a===lt){if(0!==t.je)throw new s("inflating: bad input")}else if(a!==it&&a!==ot)throw new s("inflating: "+t.Fe);if((c||a===ot)&&t.je===e.length)throw new s("inflating: bad input");t.st&&(t.st===n?f.push(new i(o)):f.push(o.subarray(0,t.st))),h+=t.st,r&&t.rt>0&&t.rt!=u&&(r(t.rt),u=t.rt)}while(t.je>0||0===t.nt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]?new i(f[0]):new i,l}},this.flush=()=>{t.xt()}}Gt.prototype={At(e){const t=this;return t.kt=new qt,e||(e=15),t.kt.At(t,e)},_t(e){const t=this;return t.kt?t.kt._t(t,e):ct},xt(){const e=this;if(!e.kt)return ct;const t=e.kt.xt(e);return e.kt=null,t},Pt(){const e=this;return e.kt?e.kt.Pt(e):ct},It(e,t){const n=this;return n.kt?n.kt.It(n,e,t):ct},ut(e){return this.tt[e]},He(e,t){return this.tt.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=st,self.Inflate=Jt};
`], { type: "text/javascript" }));
  t({ workerScripts: { inflate: [n], deflate: [n] } });
}
const ERR_ITERATOR_COMPLETED_TOO_SOON = "Writer iterator completed too soon", HTTP_HEADER_CONTENT_TYPE = "Content-Type", DEFAULT_CHUNK_SIZE = 64 * 1024, PROPERTY_NAME_WRITABLE = "writable";
class Stream {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
class Reader extends Stream {
  get readable() {
    const n = this, { chunkSize: s = DEFAULT_CHUNK_SIZE } = n, a = new ReadableStream({
      start() {
        this.chunkOffset = 0;
      },
      async pull(i) {
        const { offset: o = 0, size: u, diskNumberStart: c } = a, { chunkOffset: l } = this;
        i.enqueue(await readUint8Array(n, o + l, Math.min(s, u - l), c)), l + s > u ? i.close() : this.chunkOffset += s;
      }
    });
    return a;
  }
}
class BlobReader extends Reader {
  constructor(n) {
    super(), Object.assign(this, {
      blob: n,
      size: n.size
    });
  }
  async readUint8Array(n, s) {
    const a = this, i = n + s;
    let u = await (n || i < a.size ? a.blob.slice(n, i) : a.blob).arrayBuffer();
    return u.byteLength > s && (u = u.slice(n, i)), new Uint8Array(u);
  }
}
class BlobWriter extends Stream {
  constructor(n) {
    super();
    const s = this, a = new TransformStream(), i = [];
    n && i.push([HTTP_HEADER_CONTENT_TYPE, n]), Object.defineProperty(s, PROPERTY_NAME_WRITABLE, {
      get() {
        return a.writable;
      }
    }), s.blob = new Response(a.readable, { headers: i }).blob();
  }
  getData() {
    return this.blob;
  }
}
class TextWriter extends BlobWriter {
  constructor(n) {
    super(n), Object.assign(this, {
      encoding: n,
      utf8: !n || n.toLowerCase() == "utf-8"
    });
  }
  async getData() {
    const {
      encoding: n,
      utf8: s
    } = this, a = await super.getData();
    if (a.text && s)
      return a.text();
    {
      const i = new FileReader();
      return new Promise((o, u) => {
        Object.assign(i, {
          onload: ({ target: c }) => o(c.result),
          onerror: () => u(i.error)
        }), i.readAsText(a, n);
      });
    }
  }
}
class SplitDataReader extends Reader {
  constructor(n) {
    super(), this.readers = n;
  }
  async init() {
    const n = this, { readers: s } = n;
    n.lastDiskNumber = 0, n.lastDiskOffset = 0, await Promise.all(s.map(async (a, i) => {
      await a.init(), i != s.length - 1 && (n.lastDiskOffset += a.size), n.size += a.size;
    })), super.init();
  }
  async readUint8Array(n, s, a = 0) {
    const i = this, { readers: o } = this;
    let u, c = a;
    c == -1 && (c = o.length - 1);
    let l = n;
    for (; l >= o[c].size; )
      l -= o[c].size, c++;
    const d = o[c], f = d.size;
    if (l + s <= f)
      u = await readUint8Array(d, l, s);
    else {
      const h = f - l;
      u = new Uint8Array(s), u.set(await readUint8Array(d, l, h)), u.set(await i.readUint8Array(n + h, s - h, a), h);
    }
    return i.lastDiskNumber = Math.max(c, i.lastDiskNumber), u;
  }
}
class SplitDataWriter extends Stream {
  constructor(n, s = 4294967295) {
    super();
    const a = this;
    Object.assign(a, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize: s,
      availableSize: s
    });
    let i, o, u;
    const c = new WritableStream({
      async write(f) {
        const { availableSize: h } = a;
        if (u)
          f.length >= h ? (await l(f.slice(0, h)), await d(), a.diskOffset += i.size, a.diskNumber++, u = null, await this.write(f.slice(h))) : await l(f);
        else {
          const { value: T, done: p } = await n.next();
          if (p && !T)
            throw new Error(ERR_ITERATOR_COMPLETED_TOO_SOON);
          i = T, i.size = 0, i.maxSize && (a.maxSize = i.maxSize), a.availableSize = a.maxSize, await initStream(i), o = T.writable, u = o.getWriter(), await this.write(f);
        }
      },
      async close() {
        await u.ready, await d();
      }
    });
    Object.defineProperty(a, PROPERTY_NAME_WRITABLE, {
      get() {
        return c;
      }
    });
    async function l(f) {
      const h = f.length;
      h && (await u.ready, await u.write(f), i.size += h, a.size += h, a.availableSize -= h);
    }
    async function d() {
      o.size = i.size, await u.close();
    }
  }
}
async function initStream(t, n) {
  if (t.init && !t.initialized)
    await t.init(n);
  else
    return Promise.resolve();
}
function initReader(t) {
  return Array.isArray(t) && (t = new SplitDataReader(t)), t instanceof ReadableStream && (t = {
    readable: t
  }), t;
}
function initWriter(t) {
  t.writable === UNDEFINED_VALUE && typeof t.next == FUNCTION_TYPE && (t = new SplitDataWriter(t)), t instanceof WritableStream && (t = {
    writable: t
  });
  const { writable: n } = t;
  return n.size === UNDEFINED_VALUE && (n.size = 0), t instanceof SplitDataWriter || Object.assign(t, {
    diskNumber: 0,
    diskOffset: 0,
    availableSize: 1 / 0,
    maxSize: 1 / 0
  }), t;
}
function readUint8Array(t, n, s, a) {
  return t.readUint8Array(n, s, a);
}
const CP437 = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""), VALID_CP437 = CP437.length == 256;
function decodeCP437(t) {
  if (VALID_CP437) {
    let n = "";
    for (let s = 0; s < t.length; s++)
      n += CP437[t[s]];
    return n;
  } else
    return new TextDecoder().decode(t);
}
function decodeText(t, n) {
  return n && n.trim().toLowerCase() == "cp437" ? decodeCP437(t) : new TextDecoder(n).decode(t);
}
const PROPERTY_NAME_FILENAME = "filename", PROPERTY_NAME_RAW_FILENAME = "rawFilename", PROPERTY_NAME_COMMENT = "comment", PROPERTY_NAME_RAW_COMMENT = "rawComment", PROPERTY_NAME_UNCOMPPRESSED_SIZE = "uncompressedSize", PROPERTY_NAME_COMPPRESSED_SIZE = "compressedSize", PROPERTY_NAME_OFFSET = "offset", PROPERTY_NAME_DISK_NUMBER_START = "diskNumberStart", PROPERTY_NAME_LAST_MODIFICATION_DATE = "lastModDate", PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE = "rawLastModDate", PROPERTY_NAME_LAST_ACCESS_DATE = "lastAccessDate", PROPERTY_NAME_RAW_LAST_ACCESS_DATE = "rawLastAccessDate", PROPERTY_NAME_CREATION_DATE = "creationDate", PROPERTY_NAME_RAW_CREATION_DATE = "rawCreationDate", PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE = "internalFileAttribute", PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE = "externalFileAttribute", PROPERTY_NAME_MS_DOS_COMPATIBLE = "msDosCompatible", PROPERTY_NAME_ZIP64 = "zip64", PROPERTY_NAMES = [
  PROPERTY_NAME_FILENAME,
  PROPERTY_NAME_RAW_FILENAME,
  PROPERTY_NAME_COMPPRESSED_SIZE,
  PROPERTY_NAME_UNCOMPPRESSED_SIZE,
  PROPERTY_NAME_LAST_MODIFICATION_DATE,
  PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE,
  PROPERTY_NAME_COMMENT,
  PROPERTY_NAME_RAW_COMMENT,
  PROPERTY_NAME_LAST_ACCESS_DATE,
  PROPERTY_NAME_CREATION_DATE,
  PROPERTY_NAME_OFFSET,
  PROPERTY_NAME_DISK_NUMBER_START,
  PROPERTY_NAME_DISK_NUMBER_START,
  PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE,
  PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE,
  PROPERTY_NAME_MS_DOS_COMPATIBLE,
  PROPERTY_NAME_ZIP64,
  "directory",
  "bitFlag",
  "encrypted",
  "signature",
  "filenameUTF8",
  "commentUTF8",
  "compressionMethod",
  "version",
  "versionMadeBy",
  "extraField",
  "rawExtraField",
  "extraFieldZip64",
  "extraFieldUnicodePath",
  "extraFieldUnicodeComment",
  "extraFieldAES",
  "extraFieldNTFS",
  "extraFieldExtendedTimestamp"
];
class Entry {
  constructor(n) {
    PROPERTY_NAMES.forEach((s) => this[s] = n[s]);
  }
}
const ERR_BAD_FORMAT = "File format is not recognized", ERR_EOCDR_NOT_FOUND = "End of central directory not found", ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = "End of Zip64 central directory locator not found", ERR_CENTRAL_DIRECTORY_NOT_FOUND = "Central directory header not found", ERR_LOCAL_FILE_HEADER_NOT_FOUND = "Local file header not found", ERR_EXTRAFIELD_ZIP64_NOT_FOUND = "Zip64 extra field not found", ERR_ENCRYPTED = "File contains encrypted entry", ERR_UNSUPPORTED_ENCRYPTION = "Encryption method not supported", ERR_UNSUPPORTED_COMPRESSION = "Compression method not supported", ERR_SPLIT_ZIP_FILE = "Split zip file", CHARSET_UTF8 = "utf-8", CHARSET_CP437 = "cp437", ZIP64_PROPERTIES = [
  [PROPERTY_NAME_UNCOMPPRESSED_SIZE, MAX_32_BITS],
  [PROPERTY_NAME_COMPPRESSED_SIZE, MAX_32_BITS],
  [PROPERTY_NAME_OFFSET, MAX_32_BITS],
  [PROPERTY_NAME_DISK_NUMBER_START, MAX_16_BITS]
], ZIP64_EXTRACTION = {
  [MAX_16_BITS]: {
    getValue: getUint32,
    bytes: 4
  },
  [MAX_32_BITS]: {
    getValue: getBigUint64,
    bytes: 8
  }
};
class ZipReader {
  constructor(n, s = {}) {
    Object.assign(this, {
      reader: initReader(n),
      options: s,
      config: getConfiguration()
    });
  }
  async *getEntriesGenerator(n = {}) {
    const s = this;
    let { reader: a } = s;
    const { config: i } = s;
    if (await initStream(a), (a.size === UNDEFINED_VALUE || !a.readUint8Array) && (a = new BlobReader(await new Response(a.readable).blob()), await initStream(a)), a.size < END_OF_CENTRAL_DIR_LENGTH)
      throw new Error(ERR_BAD_FORMAT);
    a.chunkSize = getChunkSize(i);
    const o = await seekSignature(a, END_OF_CENTRAL_DIR_SIGNATURE, a.size, END_OF_CENTRAL_DIR_LENGTH, MAX_16_BITS * 16);
    if (!o) {
      const v = await readUint8Array(a, 0, 4), x = getDataView(v);
      throw getUint32(x) == SPLIT_ZIP_FILE_SIGNATURE ? new Error(ERR_SPLIT_ZIP_FILE) : new Error(ERR_EOCDR_NOT_FOUND);
    }
    const u = getDataView(o);
    let c = getUint32(u, 12), l = getUint32(u, 16);
    const d = o.offset, f = getUint16(u, 20), h = d + END_OF_CENTRAL_DIR_LENGTH + f;
    let T = getUint16(u, 4);
    const p = a.lastDiskNumber || 0;
    let I = getUint16(u, 6), E = getUint16(u, 8), _ = 0, m = 0;
    if (l == MAX_32_BITS || c == MAX_32_BITS || E == MAX_16_BITS || I == MAX_16_BITS) {
      const v = await readUint8Array(a, o.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH), x = getDataView(v);
      if (getUint32(x, 0) == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE) {
        l = getBigUint64(x, 8);
        let Y = await readUint8Array(a, l, ZIP64_END_OF_CENTRAL_DIR_LENGTH, -1), w = getDataView(Y);
        const q = o.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH - ZIP64_END_OF_CENTRAL_DIR_LENGTH;
        if (getUint32(w, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE && l != q) {
          const K = l;
          l = q, _ = l - K, Y = await readUint8Array(a, l, ZIP64_END_OF_CENTRAL_DIR_LENGTH, -1), w = getDataView(Y);
        }
        if (getUint32(w, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE)
          throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
        T == MAX_16_BITS && (T = getUint32(w, 16)), I == MAX_16_BITS && (I = getUint32(w, 20)), E == MAX_16_BITS && (E = getBigUint64(w, 32)), c == MAX_32_BITS && (c = getBigUint64(w, 40)), l -= c;
      }
    }
    if (l >= a.size && (_ = a.size - l - c - END_OF_CENTRAL_DIR_LENGTH, l = a.size - c - END_OF_CENTRAL_DIR_LENGTH), p != T)
      throw new Error(ERR_SPLIT_ZIP_FILE);
    if (l < 0)
      throw new Error(ERR_BAD_FORMAT);
    let b = 0, S = await readUint8Array(a, l, c, I), C = getDataView(S);
    if (c) {
      const v = o.offset - c;
      if (getUint32(C, b) != CENTRAL_FILE_HEADER_SIGNATURE && l != v) {
        const x = l;
        l = v, _ += l - x, S = await readUint8Array(a, l, c, I), C = getDataView(S);
      }
    }
    const g = o.offset - l - (a.lastDiskOffset || 0);
    if (c != g && g >= 0 && (c = g, S = await readUint8Array(a, l, c, I), C = getDataView(S)), l < 0 || l >= a.size)
      throw new Error(ERR_BAD_FORMAT);
    const D = getOptionValue(s, n, "filenameEncoding"), N = getOptionValue(s, n, "commentEncoding");
    for (let v = 0; v < E; v++) {
      const x = new ZipEntry(a, i, s.options);
      if (getUint32(C, b) != CENTRAL_FILE_HEADER_SIGNATURE)
        throw new Error(ERR_CENTRAL_DIRECTORY_NOT_FOUND);
      readCommonHeader(x, C, b + 6);
      const Y = !!x.bitFlag.languageEncodingFlag, w = b + 46, q = w + x.filenameLength, K = q + x.extraFieldLength, U = getUint16(C, b + 4), J = (U & 0) == 0, ee = S.subarray(w, q), _e = getUint16(C, b + 32), y = K + _e, F = S.subarray(K, y), H = Y, j = Y, Q = J && (getUint8(C, b + 38) & FILE_ATTR_MSDOS_DIR_MASK) == FILE_ATTR_MSDOS_DIR_MASK, z = getUint32(C, b + 42) + _;
      Object.assign(x, {
        versionMadeBy: U,
        msDosCompatible: J,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: _e,
        directory: Q,
        offset: z,
        diskNumberStart: getUint16(C, b + 34),
        internalFileAttribute: getUint16(C, b + 36),
        externalFileAttribute: getUint32(C, b + 38),
        rawFilename: ee,
        filenameUTF8: H,
        commentUTF8: j,
        rawExtraField: S.subarray(q, K)
      });
      const X = getOptionValue(s, n, "decodeText") || decodeText, te = H ? CHARSET_UTF8 : D || CHARSET_CP437, re = j ? CHARSET_UTF8 : N || CHARSET_CP437;
      let ae = X(ee, te);
      ae === UNDEFINED_VALUE && (ae = decodeText(ee, te));
      let ne = X(F, re);
      ne === UNDEFINED_VALUE && (ne = decodeText(F, re)), Object.assign(x, {
        rawComment: F,
        filename: ae,
        comment: ne,
        directory: Q || ae.endsWith(DIRECTORY_SIGNATURE)
      }), m = Math.max(z, m), await readCommonFooter(x, x, C, b + 6);
      const de = new Entry(x);
      de.getData = (Te, ge) => x.getData(Te, de, ge), b = y;
      const { onprogress: G } = n;
      if (G)
        try {
          await G(v + 1, E, new Entry(x));
        } catch {
        }
      yield de;
    }
    const R = getOptionValue(s, n, "extractPrependedData"), P = getOptionValue(s, n, "extractAppendedData");
    return R && (s.prependedData = m > 0 ? await readUint8Array(a, 0, m) : new Uint8Array()), s.comment = f ? await readUint8Array(a, d + END_OF_CENTRAL_DIR_LENGTH, f) : new Uint8Array(), P && (s.appendedData = h < a.size ? await readUint8Array(a, h, a.size - h) : new Uint8Array()), !0;
  }
  async getEntries(n = {}) {
    const s = [];
    for await (const a of this.getEntriesGenerator(n))
      s.push(a);
    return s;
  }
  async close() {
  }
}
class ZipEntry {
  constructor(n, s, a) {
    Object.assign(this, {
      reader: n,
      config: s,
      options: a
    });
  }
  async getData(n, s, a = {}) {
    const i = this, {
      reader: o,
      offset: u,
      diskNumberStart: c,
      extraFieldAES: l,
      compressionMethod: d,
      config: f,
      bitFlag: h,
      signature: T,
      rawLastModDate: p,
      uncompressedSize: I,
      compressedSize: E
    } = i, _ = s.localDirectory = {}, m = await readUint8Array(o, u, 30, c), b = getDataView(m);
    let S = getOptionValue(i, a, "password"), C = getOptionValue(i, a, "rawPassword");
    if (S = S && S.length && S, C = C && C.length && C, l && l.originalCompressionMethod != COMPRESSION_METHOD_AES)
      throw new Error(ERR_UNSUPPORTED_COMPRESSION);
    if (d != COMPRESSION_METHOD_STORE && d != COMPRESSION_METHOD_DEFLATE)
      throw new Error(ERR_UNSUPPORTED_COMPRESSION);
    if (getUint32(b, 0) != LOCAL_FILE_HEADER_SIGNATURE)
      throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);
    readCommonHeader(_, b, 4), _.rawExtraField = _.extraFieldLength ? await readUint8Array(o, u + 30 + _.filenameLength, _.extraFieldLength, c) : new Uint8Array(), await readCommonFooter(i, _, b, 4, !0), Object.assign(s, {
      lastAccessDate: _.lastAccessDate,
      creationDate: _.creationDate
    });
    const g = i.encrypted && _.encrypted, D = g && !l;
    if (g) {
      if (!D && l.strength === UNDEFINED_VALUE)
        throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
      if (!S && !C)
        throw new Error(ERR_ENCRYPTED);
    }
    const N = u + 30 + _.filenameLength + _.extraFieldLength, R = E, P = o.readable;
    Object.assign(P, {
      diskNumberStart: c,
      offset: N,
      size: R
    });
    const v = getOptionValue(i, a, "signal"), x = getOptionValue(i, a, "checkPasswordOnly");
    x && (n = new WritableStream()), n = initWriter(n), await initStream(n, I);
    const { writable: Y } = n, { onstart: w, onprogress: q, onend: K } = a, U = {
      options: {
        codecType: CODEC_INFLATE,
        password: S,
        rawPassword: C,
        zipCrypto: D,
        encryptionStrength: l && l.strength,
        signed: getOptionValue(i, a, "checkSignature"),
        passwordVerification: D && (h.dataDescriptor ? p >>> 8 & 255 : T >>> 24 & 255),
        signature: T,
        compressed: d != 0,
        encrypted: g,
        useWebWorkers: getOptionValue(i, a, "useWebWorkers"),
        useCompressionStream: getOptionValue(i, a, "useCompressionStream"),
        transferStreams: getOptionValue(i, a, "transferStreams"),
        checkPasswordOnly: x
      },
      config: f,
      streamOptions: { signal: v, size: R, onstart: w, onprogress: q, onend: K }
    };
    let J = 0;
    try {
      ({ outputSize: J } = await runWorker({ readable: P, writable: Y }, U));
    } catch (ee) {
      if (!x || ee.message != ERR_ABORT_CHECK_PASSWORD)
        throw ee;
    } finally {
      const ee = getOptionValue(i, a, "preventClose");
      Y.size += J, !ee && !Y.locked && await Y.getWriter().close();
    }
    return x ? UNDEFINED_VALUE : n.getData ? n.getData() : Y;
  }
}
function readCommonHeader(t, n, s) {
  const a = t.rawBitFlag = getUint16(n, s + 2), i = (a & BITFLAG_ENCRYPTED) == BITFLAG_ENCRYPTED, o = getUint32(n, s + 6);
  Object.assign(t, {
    encrypted: i,
    version: getUint16(n, s),
    bitFlag: {
      level: (a & BITFLAG_LEVEL) >> 1,
      dataDescriptor: (a & BITFLAG_DATA_DESCRIPTOR) == BITFLAG_DATA_DESCRIPTOR,
      languageEncodingFlag: (a & BITFLAG_LANG_ENCODING_FLAG) == BITFLAG_LANG_ENCODING_FLAG
    },
    rawLastModDate: o,
    lastModDate: getDate(o),
    filenameLength: getUint16(n, s + 22),
    extraFieldLength: getUint16(n, s + 24)
  });
}
async function readCommonFooter(t, n, s, a, i) {
  const { rawExtraField: o } = n, u = n.extraField = /* @__PURE__ */ new Map(), c = getDataView(new Uint8Array(o));
  let l = 0;
  try {
    for (; l < o.length; ) {
      const m = getUint16(c, l), b = getUint16(c, l + 2);
      u.set(m, {
        type: m,
        data: o.slice(l + 4, l + 4 + b)
      }), l += 4 + b;
    }
  } catch {
  }
  const d = getUint16(s, a + 4);
  Object.assign(n, {
    signature: getUint32(s, a + 10),
    uncompressedSize: getUint32(s, a + 18),
    compressedSize: getUint32(s, a + 14)
  });
  const f = u.get(EXTRAFIELD_TYPE_ZIP64);
  f && (readExtraFieldZip64(f, n), n.extraFieldZip64 = f);
  const h = u.get(EXTRAFIELD_TYPE_UNICODE_PATH);
  h && (await readExtraFieldUnicode(h, PROPERTY_NAME_FILENAME, PROPERTY_NAME_RAW_FILENAME, n, t), n.extraFieldUnicodePath = h);
  const T = u.get(EXTRAFIELD_TYPE_UNICODE_COMMENT);
  T && (await readExtraFieldUnicode(T, PROPERTY_NAME_COMMENT, PROPERTY_NAME_RAW_COMMENT, n, t), n.extraFieldUnicodeComment = T);
  const p = u.get(EXTRAFIELD_TYPE_AES);
  p ? (readExtraFieldAES(p, n, d), n.extraFieldAES = p) : n.compressionMethod = d;
  const I = u.get(EXTRAFIELD_TYPE_NTFS);
  I && (readExtraFieldNTFS(I, n), n.extraFieldNTFS = I);
  const E = u.get(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
  E && (readExtraFieldExtendedTimestamp(E, n, i), n.extraFieldExtendedTimestamp = E);
  const _ = u.get(EXTRAFIELD_TYPE_USDZ);
  _ && (n.extraFieldUSDZ = _);
}
function readExtraFieldZip64(t, n) {
  n.zip64 = !0;
  const s = getDataView(t.data), a = ZIP64_PROPERTIES.filter(([i, o]) => n[i] == o);
  for (let i = 0, o = 0; i < a.length; i++) {
    const [u, c] = a[i];
    if (n[u] == c) {
      const l = ZIP64_EXTRACTION[c];
      n[u] = t[u] = l.getValue(s, o), o += l.bytes;
    } else if (t[u])
      throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
  }
}
async function readExtraFieldUnicode(t, n, s, a, i) {
  const o = getDataView(t.data), u = new Crc32();
  u.append(i[s]);
  const c = getDataView(new Uint8Array(4));
  c.setUint32(0, u.get(), !0);
  const l = getUint32(o, 1);
  Object.assign(t, {
    version: getUint8(o, 0),
    [n]: decodeText(t.data.subarray(5)),
    valid: !i.bitFlag.languageEncodingFlag && l == getUint32(c, 0)
  }), t.valid && (a[n] = t[n], a[n + "UTF8"] = !0);
}
function readExtraFieldAES(t, n, s) {
  const a = getDataView(t.data), i = getUint8(a, 4);
  Object.assign(t, {
    vendorVersion: getUint8(a, 0),
    vendorId: getUint8(a, 2),
    strength: i,
    originalCompressionMethod: s,
    compressionMethod: getUint16(a, 5)
  }), n.compressionMethod = t.compressionMethod;
}
function readExtraFieldNTFS(t, n) {
  const s = getDataView(t.data);
  let a = 4, i;
  try {
    for (; a < t.data.length && !i; ) {
      const o = getUint16(s, a), u = getUint16(s, a + 2);
      o == EXTRAFIELD_TYPE_NTFS_TAG1 && (i = t.data.slice(a + 4, a + 4 + u)), a += 4 + u;
    }
  } catch {
  }
  try {
    if (i && i.length == 24) {
      const o = getDataView(i), u = o.getBigUint64(0, !0), c = o.getBigUint64(8, !0), l = o.getBigUint64(16, !0);
      Object.assign(t, {
        rawLastModDate: u,
        rawLastAccessDate: c,
        rawCreationDate: l
      });
      const d = getDateNTFS(u), f = getDateNTFS(c), h = getDateNTFS(l), T = { lastModDate: d, lastAccessDate: f, creationDate: h };
      Object.assign(t, T), Object.assign(n, T);
    }
  } catch {
  }
}
function readExtraFieldExtendedTimestamp(t, n, s) {
  const a = getDataView(t.data), i = getUint8(a, 0), o = [], u = [];
  s ? ((i & 1) == 1 && (o.push(PROPERTY_NAME_LAST_MODIFICATION_DATE), u.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE)), (i & 2) == 2 && (o.push(PROPERTY_NAME_LAST_ACCESS_DATE), u.push(PROPERTY_NAME_RAW_LAST_ACCESS_DATE)), (i & 4) == 4 && (o.push(PROPERTY_NAME_CREATION_DATE), u.push(PROPERTY_NAME_RAW_CREATION_DATE))) : t.data.length >= 5 && (o.push(PROPERTY_NAME_LAST_MODIFICATION_DATE), u.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE));
  let c = 1;
  o.forEach((l, d) => {
    if (t.data.length >= c + 4) {
      const f = getUint32(a, c);
      n[l] = t[l] = new Date(f * 1e3);
      const h = u[d];
      t[h] = f;
    }
    c += 4;
  });
}
async function seekSignature(t, n, s, a, i) {
  const o = new Uint8Array(4), u = getDataView(o);
  setUint32(u, 0, n);
  const c = a + i;
  return await l(a) || await l(Math.min(c, s));
  async function l(d) {
    const f = s - d, h = await readUint8Array(t, f, d);
    for (let T = h.length - a; T >= 0; T--)
      if (h[T] == o[0] && h[T + 1] == o[1] && h[T + 2] == o[2] && h[T + 3] == o[3])
        return {
          offset: f + T,
          buffer: h.slice(T, T + a).buffer
        };
  }
}
function getOptionValue(t, n, s) {
  return n[s] === UNDEFINED_VALUE ? t.options[s] : n[s];
}
function getDate(t) {
  const n = (t & 4294901760) >> 16, s = t & 65535;
  try {
    return new Date(1980 + ((n & 65024) >> 9), ((n & 480) >> 5) - 1, n & 31, (s & 63488) >> 11, (s & 2016) >> 5, (s & 31) * 2, 0);
  } catch {
  }
}
function getDateNTFS(t) {
  return new Date(Number(t / BigInt(1e4) - BigInt(116444736e5)));
}
function getUint8(t, n) {
  return t.getUint8(n);
}
function getUint16(t, n) {
  return t.getUint16(n, !0);
}
function getUint32(t, n) {
  return t.getUint32(n, !0);
}
function getBigUint64(t, n) {
  return Number(t.getBigUint64(n, !0));
}
function setUint32(t, n, s) {
  t.setUint32(n, s, !0);
}
function getDataView(t) {
  return new DataView(t.buffer);
}
let baseURL;
try {
  baseURL = import.meta.url;
} catch {
}
configure({ baseURL });
e(configure);
configure({ Deflate: ZipDeflate, Inflate: ZipInflate });
const defaultOpts$2 = {
  xml: !1,
  decodeEntities: !0
}, xmlModeDefault = {
  _useHtmlParser2: !0,
  xmlMode: !0
};
function flatten(t) {
  return t != null && t.xml ? typeof t.xml == "boolean" ? xmlModeDefault : { ...xmlModeDefault, ...t.xml } : t ?? void 0;
}
var ElementType;
(function(t) {
  t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype";
})(ElementType || (ElementType = {}));
function isTag$1(t) {
  return t.type === ElementType.Tag || t.type === ElementType.Script || t.type === ElementType.Style;
}
const Root = ElementType.Root, Text$1 = ElementType.Text, Directive = ElementType.Directive, Comment$1 = ElementType.Comment, Script = ElementType.Script, Style = ElementType.Style, Tag = ElementType.Tag, CDATA$1 = ElementType.CDATA, Doctype = ElementType.Doctype;
class Node {
  constructor() {
    this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
  }
  // Read-write aliases for properties
  /**
   * Same as {@link parent}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get parentNode() {
    return this.parent;
  }
  set parentNode(n) {
    this.parent = n;
  }
  /**
   * Same as {@link prev}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(n) {
    this.prev = n;
  }
  /**
   * Same as {@link next}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nextSibling() {
    return this.next;
  }
  set nextSibling(n) {
    this.next = n;
  }
  /**
   * Clone this node, and optionally its children.
   *
   * @param recursive Clone child nodes as well.
   * @returns A clone of the node.
   */
  cloneNode(n = !1) {
    return cloneNode(this, n);
  }
}
class DataNode extends Node {
  /**
   * @param data The content of the data node
   */
  constructor(n) {
    super(), this.data = n;
  }
  /**
   * Same as {@link data}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nodeValue() {
    return this.data;
  }
  set nodeValue(n) {
    this.data = n;
  }
}
class Text extends DataNode {
  constructor() {
    super(...arguments), this.type = ElementType.Text;
  }
  get nodeType() {
    return 3;
  }
}
class Comment extends DataNode {
  constructor() {
    super(...arguments), this.type = ElementType.Comment;
  }
  get nodeType() {
    return 8;
  }
}
class ProcessingInstruction extends DataNode {
  constructor(n, s) {
    super(s), this.name = n, this.type = ElementType.Directive;
  }
  get nodeType() {
    return 1;
  }
}
class NodeWithChildren extends Node {
  /**
   * @param children Children of the node. Only certain node types can have children.
   */
  constructor(n) {
    super(), this.children = n;
  }
  // Aliases
  /** First child of the node. */
  get firstChild() {
    var n;
    return (n = this.children[0]) !== null && n !== void 0 ? n : null;
  }
  /** Last child of the node. */
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  /**
   * Same as {@link children}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get childNodes() {
    return this.children;
  }
  set childNodes(n) {
    this.children = n;
  }
}
class CDATA extends NodeWithChildren {
  constructor() {
    super(...arguments), this.type = ElementType.CDATA;
  }
  get nodeType() {
    return 4;
  }
}
class Document extends NodeWithChildren {
  constructor() {
    super(...arguments), this.type = ElementType.Root;
  }
  get nodeType() {
    return 9;
  }
}
class Element extends NodeWithChildren {
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */
  constructor(n, s, a = [], i = n === "script" ? ElementType.Script : n === "style" ? ElementType.Style : ElementType.Tag) {
    super(a), this.name = n, this.attribs = s, this.type = i;
  }
  get nodeType() {
    return 1;
  }
  // DOM Level 1 aliases
  /**
   * Same as {@link name}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get tagName() {
    return this.name;
  }
  set tagName(n) {
    this.name = n;
  }
  get attributes() {
    return Object.keys(this.attribs).map((n) => {
      var s, a;
      return {
        name: n,
        value: this.attribs[n],
        namespace: (s = this["x-attribsNamespace"]) === null || s === void 0 ? void 0 : s[n],
        prefix: (a = this["x-attribsPrefix"]) === null || a === void 0 ? void 0 : a[n]
      };
    });
  }
}
function isTag(t) {
  return isTag$1(t);
}
function isCDATA(t) {
  return t.type === ElementType.CDATA;
}
function isText(t) {
  return t.type === ElementType.Text;
}
function isComment(t) {
  return t.type === ElementType.Comment;
}
function isDirective(t) {
  return t.type === ElementType.Directive;
}
function isDocument(t) {
  return t.type === ElementType.Root;
}
function hasChildren(t) {
  return Object.prototype.hasOwnProperty.call(t, "children");
}
function cloneNode(t, n = !1) {
  let s;
  if (isText(t))
    s = new Text(t.data);
  else if (isComment(t))
    s = new Comment(t.data);
  else if (isTag(t)) {
    const a = n ? cloneChildren(t.children) : [], i = new Element(t.name, { ...t.attribs }, a);
    a.forEach((o) => o.parent = i), t.namespace != null && (i.namespace = t.namespace), t["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...t["x-attribsNamespace"] }), t["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...t["x-attribsPrefix"] }), s = i;
  } else if (isCDATA(t)) {
    const a = n ? cloneChildren(t.children) : [], i = new CDATA(a);
    a.forEach((o) => o.parent = i), s = i;
  } else if (isDocument(t)) {
    const a = n ? cloneChildren(t.children) : [], i = new Document(a);
    a.forEach((o) => o.parent = i), t["x-mode"] && (i["x-mode"] = t["x-mode"]), s = i;
  } else if (isDirective(t)) {
    const a = new ProcessingInstruction(t.name, t.data);
    t["x-name"] != null && (a["x-name"] = t["x-name"], a["x-publicId"] = t["x-publicId"], a["x-systemId"] = t["x-systemId"]), s = a;
  } else
    throw new Error(`Not implemented yet: ${t.type}`);
  return s.startIndex = t.startIndex, s.endIndex = t.endIndex, t.sourceCodeLocation != null && (s.sourceCodeLocation = t.sourceCodeLocation), s;
}
function cloneChildren(t) {
  const n = t.map((s) => cloneNode(s, !0));
  for (let s = 1; s < n.length; s++)
    n[s].prev = n[s - 1], n[s - 1].next = n[s];
  return n;
}
const defaultOpts$1 = {
  withStartIndices: !1,
  withEndIndices: !1,
  xmlMode: !1
};
class DomHandler {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  constructor(n, s, a) {
    this.dom = [], this.root = new Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof s == "function" && (a = s, s = defaultOpts$1), typeof n == "object" && (s = n, n = void 0), this.callback = n ?? null, this.options = s ?? defaultOpts$1, this.elementCB = a ?? null;
  }
  onparserinit(n) {
    this.parser = n;
  }
  // Resets the handler back to starting state
  onreset() {
    this.dom = [], this.root = new Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
  }
  // Signals the handler that parsing is done
  onend() {
    this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
  }
  onerror(n) {
    this.handleCallback(n);
  }
  onclosetag() {
    this.lastNode = null;
    const n = this.tagStack.pop();
    this.options.withEndIndices && (n.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(n);
  }
  onopentag(n, s) {
    const a = this.options.xmlMode ? ElementType.Tag : void 0, i = new Element(n, s, void 0, a);
    this.addNode(i), this.tagStack.push(i);
  }
  ontext(n) {
    const { lastNode: s } = this;
    if (s && s.type === ElementType.Text)
      s.data += n, this.options.withEndIndices && (s.endIndex = this.parser.endIndex);
    else {
      const a = new Text(n);
      this.addNode(a), this.lastNode = a;
    }
  }
  oncomment(n) {
    if (this.lastNode && this.lastNode.type === ElementType.Comment) {
      this.lastNode.data += n;
      return;
    }
    const s = new Comment(n);
    this.addNode(s), this.lastNode = s;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const n = new Text(""), s = new CDATA([n]);
    this.addNode(s), n.parent = s, this.lastNode = n;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(n, s) {
    const a = new ProcessingInstruction(n, s);
    this.addNode(a);
  }
  handleCallback(n) {
    if (typeof this.callback == "function")
      this.callback(n, this.dom);
    else if (n)
      throw n;
  }
  addNode(n) {
    const s = this.tagStack[this.tagStack.length - 1], a = s.children[s.children.length - 1];
    this.options.withStartIndices && (n.startIndex = this.parser.startIndex), this.options.withEndIndices && (n.endIndex = this.parser.endIndex), s.children.push(n), a && (n.prev = a, a.next = n), n.parent = s, this.lastNode = null;
  }
}
const htmlDecodeTree = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((t) => t.charCodeAt(0))
), xmlDecodeTree = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((t) => t.charCodeAt(0))
);
var _a;
const decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), fromCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(t) {
    let n = "";
    return t > 65535 && (t -= 65536, n += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), n += String.fromCharCode(t), n;
  }
);
function replaceCodePoint(t) {
  var n;
  return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (n = decodeMap.get(t)) !== null && n !== void 0 ? n : t;
}
var CharCodes$1;
(function(t) {
  t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z";
})(CharCodes$1 || (CharCodes$1 = {}));
const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(t) {
  t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber$1(t) {
  return t >= CharCodes$1.ZERO && t <= CharCodes$1.NINE;
}
function isHexadecimalCharacter(t) {
  return t >= CharCodes$1.UPPER_A && t <= CharCodes$1.UPPER_F || t >= CharCodes$1.LOWER_A && t <= CharCodes$1.LOWER_F;
}
function isAsciiAlphaNumeric$1(t) {
  return t >= CharCodes$1.UPPER_A && t <= CharCodes$1.UPPER_Z || t >= CharCodes$1.LOWER_A && t <= CharCodes$1.LOWER_Z || isNumber$1(t);
}
function isEntityInAttributeInvalidEnd$1(t) {
  return t === CharCodes$1.EQUALS || isAsciiAlphaNumeric$1(t);
}
var EntityDecoderState;
(function(t) {
  t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(t) {
  t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
  constructor(n, s, a) {
    this.decodeTree = n, this.emitCodePoint = s, this.errors = a, this.state = EntityDecoderState.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(n) {
    this.decodeMode = n, this.state = EntityDecoderState.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(n, s) {
    switch (this.state) {
      case EntityDecoderState.EntityStart:
        return n.charCodeAt(s) === CharCodes$1.NUM ? (this.state = EntityDecoderState.NumericStart, this.consumed += 1, this.stateNumericStart(n, s + 1)) : (this.state = EntityDecoderState.NamedEntity, this.stateNamedEntity(n, s));
      case EntityDecoderState.NumericStart:
        return this.stateNumericStart(n, s);
      case EntityDecoderState.NumericDecimal:
        return this.stateNumericDecimal(n, s);
      case EntityDecoderState.NumericHex:
        return this.stateNumericHex(n, s);
      case EntityDecoderState.NamedEntity:
        return this.stateNamedEntity(n, s);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(n, s) {
    return s >= n.length ? -1 : (n.charCodeAt(s) | TO_LOWER_BIT) === CharCodes$1.LOWER_X ? (this.state = EntityDecoderState.NumericHex, this.consumed += 1, this.stateNumericHex(n, s + 1)) : (this.state = EntityDecoderState.NumericDecimal, this.stateNumericDecimal(n, s));
  }
  addToNumericResult(n, s, a, i) {
    if (s !== a) {
      const o = a - s;
      this.result = this.result * Math.pow(i, o) + parseInt(n.substr(s, o), i), this.consumed += o;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(n, s) {
    const a = s;
    for (; s < n.length; ) {
      const i = n.charCodeAt(s);
      if (isNumber$1(i) || isHexadecimalCharacter(i))
        s += 1;
      else
        return this.addToNumericResult(n, a, s, 16), this.emitNumericEntity(i, 3);
    }
    return this.addToNumericResult(n, a, s, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(n, s) {
    const a = s;
    for (; s < n.length; ) {
      const i = n.charCodeAt(s);
      if (isNumber$1(i))
        s += 1;
      else
        return this.addToNumericResult(n, a, s, 10), this.emitNumericEntity(i, 2);
    }
    return this.addToNumericResult(n, a, s, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(n, s) {
    var a;
    if (this.consumed <= s)
      return (a = this.errors) === null || a === void 0 || a.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (n === CharCodes$1.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === DecodingMode.Strict)
      return 0;
    return this.emitCodePoint(replaceCodePoint(this.result), this.consumed), this.errors && (n !== CharCodes$1.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(n, s) {
    const { decodeTree: a } = this;
    let i = a[this.treeIndex], o = (i & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; s < n.length; s++, this.excess++) {
      const u = n.charCodeAt(s);
      if (this.treeIndex = determineBranch(a, i, this.treeIndex + Math.max(1, o), u), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd$1(u)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (i = a[this.treeIndex], o = (i & BinTrieFlags.VALUE_LENGTH) >> 14, o !== 0) {
        if (u === CharCodes$1.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== DecodingMode.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var n;
    const { result: s, decodeTree: a } = this, i = (a[s] & BinTrieFlags.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(s, i, this.consumed), (n = this.errors) === null || n === void 0 || n.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(n, s, a) {
    const { decodeTree: i } = this;
    return this.emitCodePoint(s === 1 ? i[n] & ~BinTrieFlags.VALUE_LENGTH : i[n + 1], a), s === 3 && this.emitCodePoint(i[n + 2], a), a;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var n;
    switch (this.state) {
      case EntityDecoderState.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case EntityDecoderState.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case EntityDecoderState.NumericHex:
        return this.emitNumericEntity(0, 3);
      case EntityDecoderState.NumericStart:
        return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case EntityDecoderState.EntityStart:
        return 0;
    }
  }
}
function getDecoder(t) {
  let n = "";
  const s = new EntityDecoder(t, (a) => n += fromCodePoint(a));
  return function(i, o) {
    let u = 0, c = 0;
    for (; (c = i.indexOf("&", c)) >= 0; ) {
      n += i.slice(u, c), s.startEntity(o);
      const d = s.write(
        i,
        // Skip the "&"
        c + 1
      );
      if (d < 0) {
        u = c + s.end();
        break;
      }
      u = c + d, c = d === 0 ? u + 1 : u;
    }
    const l = n + i.slice(u);
    return n = "", l;
  };
}
function determineBranch(t, n, s, a) {
  const i = (n & BinTrieFlags.BRANCH_LENGTH) >> 7, o = n & BinTrieFlags.JUMP_TABLE;
  if (i === 0)
    return o !== 0 && a === o ? s : -1;
  if (o) {
    const l = a - o;
    return l < 0 || l >= i ? -1 : t[s + l] - 1;
  }
  let u = s, c = u + i - 1;
  for (; u <= c; ) {
    const l = u + c >>> 1, d = t[l];
    if (d < a)
      u = l + 1;
    else if (d > a)
      c = l - 1;
    else
      return t[l + i];
  }
  return -1;
}
getDecoder(htmlDecodeTree);
getDecoder(xmlDecodeTree);
const xmlReplacer = /["&'<>$\x80-\uFFFF]/g, xmlCodeMap = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]), getCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (t, n) => t.codePointAt(n) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (t, n) => (t.charCodeAt(n) & 64512) === 55296 ? (t.charCodeAt(n) - 55296) * 1024 + t.charCodeAt(n + 1) - 56320 + 65536 : t.charCodeAt(n)
  )
);
function encodeXML(t) {
  let n = "", s = 0, a;
  for (; (a = xmlReplacer.exec(t)) !== null; ) {
    const i = a.index, o = t.charCodeAt(i), u = xmlCodeMap.get(o);
    u !== void 0 ? (n += t.substring(s, i) + u, s = i + 1) : (n += `${t.substring(s, i)}&#x${getCodePoint(t, i).toString(16)};`, s = xmlReplacer.lastIndex += +((o & 64512) === 55296));
  }
  return n + t.substr(s);
}
function getEscaper(t, n) {
  return function(a) {
    let i, o = 0, u = "";
    for (; i = t.exec(a); )
      o !== i.index && (u += a.substring(o, i.index)), u += n.get(i[0].charCodeAt(0)), o = i.index + 1;
    return u + a.substring(o);
  };
}
const escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
])), escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
])), elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((t) => [t.toLowerCase(), t])), attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((t) => [t.toLowerCase(), t])), unencodedElements = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function replaceQuotes(t) {
  return t.replace(/"/g, "&quot;");
}
function formatAttributes(t, n) {
  var s;
  if (!t)
    return;
  const a = ((s = n.encodeEntities) !== null && s !== void 0 ? s : n.decodeEntities) === !1 ? replaceQuotes : n.xmlMode || n.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
  return Object.keys(t).map((i) => {
    var o, u;
    const c = (o = t[i]) !== null && o !== void 0 ? o : "";
    return n.xmlMode === "foreign" && (i = (u = attributeNames.get(i)) !== null && u !== void 0 ? u : i), !n.emptyAttrs && !n.xmlMode && c === "" ? i : `${i}="${a(c)}"`;
  }).join(" ");
}
const singleTag = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render$1(t, n = {}) {
  const s = "length" in t ? t : [t];
  let a = "";
  for (let i = 0; i < s.length; i++)
    a += renderNode(s[i], n);
  return a;
}
function renderNode(t, n) {
  switch (t.type) {
    case Root:
      return render$1(t.children, n);
    case Doctype:
    case Directive:
      return renderDirective(t);
    case Comment$1:
      return renderComment(t);
    case CDATA$1:
      return renderCdata(t);
    case Script:
    case Style:
    case Tag:
      return renderTag(t, n);
    case Text$1:
      return renderText(t, n);
  }
}
const foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
function renderTag(t, n) {
  var s;
  n.xmlMode === "foreign" && (t.name = (s = elementNames.get(t.name)) !== null && s !== void 0 ? s : t.name, t.parent && foreignModeIntegrationPoints.has(t.parent.name) && (n = { ...n, xmlMode: !1 })), !n.xmlMode && foreignElements.has(t.name) && (n = { ...n, xmlMode: "foreign" });
  let a = `<${t.name}`;
  const i = formatAttributes(t.attribs, n);
  return i && (a += ` ${i}`), t.children.length === 0 && (n.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    n.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    n.selfClosingTags && singleTag.has(t.name)
  )) ? (n.xmlMode || (a += " "), a += "/>") : (a += ">", t.children.length > 0 && (a += render$1(t.children, n)), (n.xmlMode || !singleTag.has(t.name)) && (a += `</${t.name}>`)), a;
}
function renderDirective(t) {
  return `<${t.data}>`;
}
function renderText(t, n) {
  var s;
  let a = t.data || "";
  return ((s = n.encodeEntities) !== null && s !== void 0 ? s : n.decodeEntities) !== !1 && !(!n.xmlMode && t.parent && unencodedElements.has(t.parent.name)) && (a = n.xmlMode || n.encodeEntities !== "utf8" ? encodeXML(a) : escapeText(a)), a;
}
function renderCdata(t) {
  return `<![CDATA[${t.children[0].data}]]>`;
}
function renderComment(t) {
  return `<!--${t.data}-->`;
}
function getOuterHTML(t, n) {
  return render$1(t, n);
}
function getInnerHTML(t, n) {
  return hasChildren(t) ? t.children.map((s) => getOuterHTML(s, n)).join("") : "";
}
function getText(t) {
  return Array.isArray(t) ? t.map(getText).join("") : isTag(t) ? t.name === "br" ? `
` : getText(t.children) : isCDATA(t) ? getText(t.children) : isText(t) ? t.data : "";
}
function textContent(t) {
  return Array.isArray(t) ? t.map(textContent).join("") : hasChildren(t) && !isComment(t) ? textContent(t.children) : isText(t) ? t.data : "";
}
function innerText(t) {
  return Array.isArray(t) ? t.map(innerText).join("") : hasChildren(t) && (t.type === ElementType.Tag || isCDATA(t)) ? innerText(t.children) : isText(t) ? t.data : "";
}
function getChildren(t) {
  return hasChildren(t) ? t.children : [];
}
function getParent(t) {
  return t.parent || null;
}
function getSiblings(t) {
  const n = getParent(t);
  if (n != null)
    return getChildren(n);
  const s = [t];
  let { prev: a, next: i } = t;
  for (; a != null; )
    s.unshift(a), { prev: a } = a;
  for (; i != null; )
    s.push(i), { next: i } = i;
  return s;
}
function getAttributeValue(t, n) {
  var s;
  return (s = t.attribs) === null || s === void 0 ? void 0 : s[n];
}
function hasAttrib(t, n) {
  return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, n) && t.attribs[n] != null;
}
function getName(t) {
  return t.name;
}
function nextElementSibling(t) {
  let { next: n } = t;
  for (; n !== null && !isTag(n); )
    ({ next: n } = n);
  return n;
}
function prevElementSibling(t) {
  let { prev: n } = t;
  for (; n !== null && !isTag(n); )
    ({ prev: n } = n);
  return n;
}
function removeElement(t) {
  if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
    const n = t.parent.children, s = n.lastIndexOf(t);
    s >= 0 && n.splice(s, 1);
  }
  t.next = null, t.prev = null, t.parent = null;
}
function replaceElement(t, n) {
  const s = n.prev = t.prev;
  s && (s.next = n);
  const a = n.next = t.next;
  a && (a.prev = n);
  const i = n.parent = t.parent;
  if (i) {
    const o = i.children;
    o[o.lastIndexOf(t)] = n, t.parent = null;
  }
}
function appendChild(t, n) {
  if (removeElement(n), n.next = null, n.parent = t, t.children.push(n) > 1) {
    const s = t.children[t.children.length - 2];
    s.next = n, n.prev = s;
  } else
    n.prev = null;
}
function append$1(t, n) {
  removeElement(n);
  const { parent: s } = t, a = t.next;
  if (n.next = a, n.prev = t, t.next = n, n.parent = s, a) {
    if (a.prev = n, s) {
      const i = s.children;
      i.splice(i.lastIndexOf(a), 0, n);
    }
  } else s && s.children.push(n);
}
function prependChild(t, n) {
  if (removeElement(n), n.parent = t, n.prev = null, t.children.unshift(n) !== 1) {
    const s = t.children[1];
    s.prev = n, n.next = s;
  } else
    n.next = null;
}
function prepend$1(t, n) {
  removeElement(n);
  const { parent: s } = t;
  if (s) {
    const a = s.children;
    a.splice(a.indexOf(t), 0, n);
  }
  t.prev && (t.prev.next = n), n.parent = s, n.prev = t.prev, n.next = t, t.prev = n;
}
function filter$2(t, n, s = !0, a = 1 / 0) {
  return find$2(t, Array.isArray(n) ? n : [n], s, a);
}
function find$2(t, n, s, a) {
  const i = [], o = [n], u = [0];
  for (; ; ) {
    if (u[0] >= o[0].length) {
      if (u.length === 1)
        return i;
      o.shift(), u.shift();
      continue;
    }
    const c = o[0][u[0]++];
    if (t(c) && (i.push(c), --a <= 0))
      return i;
    s && hasChildren(c) && c.children.length > 0 && (u.unshift(0), o.unshift(c.children));
  }
}
function findOneChild(t, n) {
  return n.find(t);
}
function findOne(t, n, s = !0) {
  let a = null;
  for (let i = 0; i < n.length && !a; i++) {
    const o = n[i];
    if (isTag(o))
      t(o) ? a = o : s && o.children.length > 0 && (a = findOne(t, o.children, !0));
    else continue;
  }
  return a;
}
function existsOne(t, n) {
  return n.some((s) => isTag(s) && (t(s) || existsOne(t, s.children)));
}
function findAll(t, n) {
  const s = [], a = [n], i = [0];
  for (; ; ) {
    if (i[0] >= a[0].length) {
      if (a.length === 1)
        return s;
      a.shift(), i.shift();
      continue;
    }
    const o = a[0][i[0]++];
    isTag(o) && (t(o) && s.push(o), o.children.length > 0 && (i.unshift(0), a.unshift(o.children)));
  }
}
const Checks = {
  tag_name(t) {
    return typeof t == "function" ? (n) => isTag(n) && t(n.name) : t === "*" ? isTag : (n) => isTag(n) && n.name === t;
  },
  tag_type(t) {
    return typeof t == "function" ? (n) => t(n.type) : (n) => n.type === t;
  },
  tag_contains(t) {
    return typeof t == "function" ? (n) => isText(n) && t(n.data) : (n) => isText(n) && n.data === t;
  }
};
function getAttribCheck(t, n) {
  return typeof n == "function" ? (s) => isTag(s) && n(s.attribs[t]) : (s) => isTag(s) && s.attribs[t] === n;
}
function combineFuncs(t, n) {
  return (s) => t(s) || n(s);
}
function compileTest(t) {
  const n = Object.keys(t).map((s) => {
    const a = t[s];
    return Object.prototype.hasOwnProperty.call(Checks, s) ? Checks[s](a) : getAttribCheck(s, a);
  });
  return n.length === 0 ? null : n.reduce(combineFuncs);
}
function testElement(t, n) {
  const s = compileTest(t);
  return s ? s(n) : !0;
}
function getElements(t, n, s, a = 1 / 0) {
  const i = compileTest(t);
  return i ? filter$2(i, n, s, a) : [];
}
function getElementById(t, n, s = !0) {
  return Array.isArray(n) || (n = [n]), findOne(getAttribCheck("id", t), n, s);
}
function getElementsByTagName(t, n, s = !0, a = 1 / 0) {
  return filter$2(Checks.tag_name(t), n, s, a);
}
function getElementsByTagType(t, n, s = !0, a = 1 / 0) {
  return filter$2(Checks.tag_type(t), n, s, a);
}
function removeSubsets(t) {
  let n = t.length;
  for (; --n >= 0; ) {
    const s = t[n];
    if (n > 0 && t.lastIndexOf(s, n - 1) >= 0) {
      t.splice(n, 1);
      continue;
    }
    for (let a = s.parent; a; a = a.parent)
      if (t.includes(a)) {
        t.splice(n, 1);
        break;
      }
  }
  return t;
}
var DocumentPosition;
(function(t) {
  t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
function compareDocumentPosition(t, n) {
  const s = [], a = [];
  if (t === n)
    return 0;
  let i = hasChildren(t) ? t : t.parent;
  for (; i; )
    s.unshift(i), i = i.parent;
  for (i = hasChildren(n) ? n : n.parent; i; )
    a.unshift(i), i = i.parent;
  const o = Math.min(s.length, a.length);
  let u = 0;
  for (; u < o && s[u] === a[u]; )
    u++;
  if (u === 0)
    return DocumentPosition.DISCONNECTED;
  const c = s[u - 1], l = c.children, d = s[u], f = a[u];
  return l.indexOf(d) > l.indexOf(f) ? c === n ? DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY : DocumentPosition.FOLLOWING : c === t ? DocumentPosition.PRECEDING | DocumentPosition.CONTAINS : DocumentPosition.PRECEDING;
}
function uniqueSort(t) {
  return t = t.filter((n, s, a) => !a.includes(n, s + 1)), t.sort((n, s) => {
    const a = compareDocumentPosition(n, s);
    return a & DocumentPosition.PRECEDING ? -1 : a & DocumentPosition.FOLLOWING ? 1 : 0;
  }), t;
}
function getFeed(t) {
  const n = getOneElement(isValidFeed, t);
  return n ? n.name === "feed" ? getAtomFeed(n) : getRssFeed(n) : null;
}
function getAtomFeed(t) {
  var n;
  const s = t.children, a = {
    type: "atom",
    items: getElementsByTagName("entry", s).map((u) => {
      var c;
      const { children: l } = u, d = { media: getMediaElements(l) };
      addConditionally(d, "id", "id", l), addConditionally(d, "title", "title", l);
      const f = (c = getOneElement("link", l)) === null || c === void 0 ? void 0 : c.attribs.href;
      f && (d.link = f);
      const h = fetch("summary", l) || fetch("content", l);
      h && (d.description = h);
      const T = fetch("updated", l);
      return T && (d.pubDate = new Date(T)), d;
    })
  };
  addConditionally(a, "id", "id", s), addConditionally(a, "title", "title", s);
  const i = (n = getOneElement("link", s)) === null || n === void 0 ? void 0 : n.attribs.href;
  i && (a.link = i), addConditionally(a, "description", "subtitle", s);
  const o = fetch("updated", s);
  return o && (a.updated = new Date(o)), addConditionally(a, "author", "email", s, !0), a;
}
function getRssFeed(t) {
  var n, s;
  const a = (s = (n = getOneElement("channel", t.children)) === null || n === void 0 ? void 0 : n.children) !== null && s !== void 0 ? s : [], i = {
    type: t.name.substr(0, 3),
    id: "",
    items: getElementsByTagName("item", t.children).map((u) => {
      const { children: c } = u, l = { media: getMediaElements(c) };
      addConditionally(l, "id", "guid", c), addConditionally(l, "title", "title", c), addConditionally(l, "link", "link", c), addConditionally(l, "description", "description", c);
      const d = fetch("pubDate", c) || fetch("dc:date", c);
      return d && (l.pubDate = new Date(d)), l;
    })
  };
  addConditionally(i, "title", "title", a), addConditionally(i, "link", "link", a), addConditionally(i, "description", "description", a);
  const o = fetch("lastBuildDate", a);
  return o && (i.updated = new Date(o)), addConditionally(i, "author", "managingEditor", a, !0), i;
}
const MEDIA_KEYS_STRING = ["url", "type", "lang"], MEDIA_KEYS_INT = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function getMediaElements(t) {
  return getElementsByTagName("media:content", t).map((n) => {
    const { attribs: s } = n, a = {
      medium: s.medium,
      isDefault: !!s.isDefault
    };
    for (const i of MEDIA_KEYS_STRING)
      s[i] && (a[i] = s[i]);
    for (const i of MEDIA_KEYS_INT)
      s[i] && (a[i] = parseInt(s[i], 10));
    return s.expression && (a.expression = s.expression), a;
  });
}
function getOneElement(t, n) {
  return getElementsByTagName(t, n, !0, 1)[0];
}
function fetch(t, n, s = !1) {
  return textContent(getElementsByTagName(t, n, s, 1)).trim();
}
function addConditionally(t, n, s, a, i = !1) {
  const o = fetch(s, a, i);
  o && (t[n] = o);
}
function isValidFeed(t) {
  return t === "rss" || t === "feed" || t === "rdf:RDF";
}
const DomUtils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get DocumentPosition() {
    return DocumentPosition;
  },
  append: append$1,
  appendChild,
  compareDocumentPosition,
  existsOne,
  filter: filter$2,
  find: find$2,
  findAll,
  findOne,
  findOneChild,
  getAttributeValue,
  getChildren,
  getElementById,
  getElements,
  getElementsByTagName,
  getElementsByTagType,
  getFeed,
  getInnerHTML,
  getName,
  getOuterHTML,
  getParent,
  getSiblings,
  getText,
  hasAttrib,
  hasChildren,
  innerText,
  isCDATA,
  isComment,
  isDocument,
  isTag,
  isText,
  nextElementSibling,
  prepend: prepend$1,
  prependChild,
  prevElementSibling,
  removeElement,
  removeSubsets,
  replaceElement,
  testElement,
  textContent,
  uniqueSort
}, Symbol.toStringTag, { value: "Module" }));
function render(t, n, s) {
  return t ? t(n ?? t._root.children, null, void 0, s).toString() : "";
}
function isOptions(t, n) {
  return typeof t == "object" && t != null && !("length" in t) && !("type" in t);
}
function html$1(t, n) {
  const s = isOptions(t) ? (n = t, void 0) : t, a = {
    ...defaultOpts$2,
    ...this === null || this === void 0 ? void 0 : this._options,
    ...flatten(n ?? {})
  };
  return render(this, s, a);
}
function xml(t) {
  const n = { ...this._options, xmlMode: !0 };
  return render(this, t, n);
}
function text$1(t) {
  const n = t || (this ? this.root() : []);
  let s = "";
  for (let a = 0; a < n.length; a++)
    s += textContent(n[a]);
  return s;
}
function parseHTML(t, n, s = typeof n == "boolean" ? n : !1) {
  if (!t || typeof t != "string")
    return null;
  typeof n == "boolean" && (s = n);
  const a = this.load(t, defaultOpts$2, !1);
  return s || a("script").remove(), a.root()[0].children.slice();
}
function root() {
  return this(this._root);
}
function contains(t, n) {
  if (n === t)
    return !1;
  let s = n;
  for (; s && s !== s.parent; )
    if (s = s.parent, s === t)
      return !0;
  return !1;
}
function merge(t, n) {
  if (!isArrayLike(t) || !isArrayLike(n))
    return;
  let s = t.length;
  const a = +n.length;
  for (let i = 0; i < a; i++)
    t[s++] = n[i];
  return t.length = s, t;
}
function isArrayLike(t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t != "object" || !Object.prototype.hasOwnProperty.call(t, "length") || typeof t.length != "number" || t.length < 0)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!(n in t))
      return !1;
  return !0;
}
const staticMethods = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contains,
  html: html$1,
  merge,
  parseHTML,
  root,
  text: text$1,
  xml
}, Symbol.toStringTag, { value: "Module" }));
function isCheerio(t) {
  return t.cheerio != null;
}
function camelCase(t) {
  return t.replace(/[_.-](\w|$)/g, (n, s) => s.toUpperCase());
}
function cssCase(t) {
  return t.replace(/[A-Z]/g, "-$&").toLowerCase();
}
function domEach(t, n) {
  const s = t.length;
  for (let a = 0; a < s; a++)
    n(t[a], a);
  return t;
}
function cloneDom(t) {
  const n = "length" in t ? Array.prototype.map.call(t, (a) => cloneNode(a, !0)) : [cloneNode(t, !0)], s = new Document(n);
  return n.forEach((a) => {
    a.parent = s;
  }), n;
}
var CharacterCodes;
(function(t) {
  t[t.LowerA = 97] = "LowerA", t[t.LowerZ = 122] = "LowerZ", t[t.UpperA = 65] = "UpperA", t[t.UpperZ = 90] = "UpperZ", t[t.Exclamation = 33] = "Exclamation";
})(CharacterCodes || (CharacterCodes = {}));
function isHtml(t) {
  const n = t.indexOf("<");
  if (n < 0 || n > t.length - 3)
    return !1;
  const s = t.charCodeAt(n + 1);
  return (s >= CharacterCodes.LowerA && s <= CharacterCodes.LowerZ || s >= CharacterCodes.UpperA && s <= CharacterCodes.UpperZ || s === CharacterCodes.Exclamation) && t.includes(">", n + 2);
}
const hasOwn = Object.prototype.hasOwnProperty, rspace = /\s+/, dataAttrPrefix = "data-", primitives = {
  null: null,
  true: !0,
  false: !1
}, rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, rbrace = /^{[^]*}$|^\[[^]*]$/;
function getAttr(t, n, s) {
  var a;
  if (!(!t || !isTag(t))) {
    if ((a = t.attribs) !== null && a !== void 0 || (t.attribs = {}), !n)
      return t.attribs;
    if (hasOwn.call(t.attribs, n))
      return !s && rboolean.test(n) ? n : t.attribs[n];
    if (t.name === "option" && n === "value")
      return text$1(t.children);
    if (t.name === "input" && (t.attribs.type === "radio" || t.attribs.type === "checkbox") && n === "value")
      return "on";
  }
}
function setAttr(t, n, s) {
  s === null ? removeAttribute(t, n) : t.attribs[n] = `${s}`;
}
function attr(t, n) {
  if (typeof t == "object" || n !== void 0) {
    if (typeof n == "function") {
      if (typeof t != "string")
        throw new Error("Bad combination of arguments.");
      return domEach(this, (s, a) => {
        isTag(s) && setAttr(s, t, n.call(s, a, s.attribs[t]));
      });
    }
    return domEach(this, (s) => {
      isTag(s) && (typeof t == "object" ? Object.keys(t).forEach((a) => {
        const i = t[a];
        setAttr(s, a, i);
      }) : setAttr(s, t, n));
    });
  }
  return arguments.length > 1 ? this : getAttr(this[0], t, this.options.xmlMode);
}
function getProp(t, n, s) {
  return n in t ? (
    // @ts-expect-error TS doesn't like us accessing the value directly here.
    t[n]
  ) : !s && rboolean.test(n) ? getAttr(t, n, !1) !== void 0 : getAttr(t, n, s);
}
function setProp(t, n, s, a) {
  n in t ? t[n] = s : setAttr(t, n, !a && rboolean.test(n) ? s ? "" : null : `${s}`);
}
function prop(t, n) {
  var s;
  if (typeof t == "string" && n === void 0) {
    const a = this[0];
    if (!a || !isTag(a))
      return;
    switch (t) {
      case "style": {
        const i = this.css(), o = Object.keys(i);
        return o.forEach((u, c) => {
          i[c] = u;
        }), i.length = o.length, i;
      }
      case "tagName":
      case "nodeName":
        return a.name.toUpperCase();
      case "href":
      case "src": {
        const i = (s = a.attribs) === null || s === void 0 ? void 0 : s[t];
        return typeof URL < "u" && (t === "href" && (a.tagName === "a" || a.name === "link") || t === "src" && (a.tagName === "img" || a.tagName === "iframe" || a.tagName === "audio" || a.tagName === "video" || a.tagName === "source")) && i !== void 0 && this.options.baseURI ? new URL(i, this.options.baseURI).href : i;
      }
      case "innerText":
        return innerText(a);
      case "textContent":
        return textContent(a);
      case "outerHTML":
        return this.clone().wrap("<container />").parent().html();
      case "innerHTML":
        return this.html();
      default:
        return getProp(a, t, this.options.xmlMode);
    }
  }
  if (typeof t == "object" || n !== void 0) {
    if (typeof n == "function") {
      if (typeof t == "object")
        throw new Error("Bad combination of arguments.");
      return domEach(this, (a, i) => {
        isTag(a) && setProp(a, t, n.call(a, i, getProp(a, t, this.options.xmlMode)), this.options.xmlMode);
      });
    }
    return domEach(this, (a) => {
      isTag(a) && (typeof t == "object" ? Object.keys(t).forEach((i) => {
        const o = t[i];
        setProp(a, i, o, this.options.xmlMode);
      }) : setProp(a, t, n, this.options.xmlMode));
    });
  }
}
function setData(t, n, s) {
  var a;
  const i = t;
  (a = i.data) !== null && a !== void 0 || (i.data = {}), typeof n == "object" ? Object.assign(i.data, n) : typeof n == "string" && s !== void 0 && (i.data[n] = s);
}
function readData(t, n) {
  let s, a, i;
  n == null ? (s = Object.keys(t.attribs).filter((o) => o.startsWith(dataAttrPrefix)), a = s.map((o) => camelCase(o.slice(dataAttrPrefix.length)))) : (s = [dataAttrPrefix + cssCase(n)], a = [n]);
  for (let o = 0; o < s.length; ++o) {
    const u = s[o], c = a[o];
    if (hasOwn.call(t.attribs, u) && !hasOwn.call(t.data, c)) {
      if (i = t.attribs[u], hasOwn.call(primitives, i))
        i = primitives[i];
      else if (i === String(Number(i)))
        i = Number(i);
      else if (rbrace.test(i))
        try {
          i = JSON.parse(i);
        } catch {
        }
      t.data[c] = i;
    }
  }
  return n == null ? t.data : i;
}
function data(t, n) {
  var s;
  const a = this[0];
  if (!a || !isTag(a))
    return;
  const i = a;
  return (s = i.data) !== null && s !== void 0 || (i.data = {}), t ? typeof t == "object" || n !== void 0 ? (domEach(this, (o) => {
    isTag(o) && (typeof t == "object" ? setData(o, t) : setData(o, t, n));
  }), this) : hasOwn.call(i.data, t) ? i.data[t] : readData(i, t) : readData(i);
}
function val(t) {
  const n = arguments.length === 0, s = this[0];
  if (!s || !isTag(s))
    return n ? void 0 : this;
  switch (s.name) {
    case "textarea":
      return this.text(t);
    case "select": {
      const a = this.find("option:selected");
      if (!n) {
        if (this.attr("multiple") == null && typeof t == "object")
          return this;
        this.find("option").removeAttr("selected");
        const i = typeof t != "object" ? [t] : t;
        for (let o = 0; o < i.length; o++)
          this.find(`option[value="${i[o]}"]`).attr("selected", "");
        return this;
      }
      return this.attr("multiple") ? a.toArray().map((i) => text$1(i.children)) : a.attr("value");
    }
    case "input":
    case "option":
      return n ? this.attr("value") : this.attr("value", t);
  }
}
function removeAttribute(t, n) {
  !t.attribs || !hasOwn.call(t.attribs, n) || delete t.attribs[n];
}
function splitNames(t) {
  return t ? t.trim().split(rspace) : [];
}
function removeAttr(t) {
  const n = splitNames(t);
  for (let s = 0; s < n.length; s++)
    domEach(this, (a) => {
      isTag(a) && removeAttribute(a, n[s]);
    });
  return this;
}
function hasClass(t) {
  return this.toArray().some((n) => {
    const s = isTag(n) && n.attribs.class;
    let a = -1;
    if (s && t.length)
      for (; (a = s.indexOf(t, a + 1)) > -1; ) {
        const i = a + t.length;
        if ((a === 0 || rspace.test(s[a - 1])) && (i === s.length || rspace.test(s[i])))
          return !0;
      }
    return !1;
  });
}
function addClass(t) {
  if (typeof t == "function")
    return domEach(this, (a, i) => {
      if (isTag(a)) {
        const o = a.attribs.class || "";
        addClass.call([a], t.call(a, i, o));
      }
    });
  if (!t || typeof t != "string")
    return this;
  const n = t.split(rspace), s = this.length;
  for (let a = 0; a < s; a++) {
    const i = this[a];
    if (!isTag(i))
      continue;
    const o = getAttr(i, "class", !1);
    if (!o)
      setAttr(i, "class", n.join(" ").trim());
    else {
      let u = ` ${o} `;
      for (let c = 0; c < n.length; c++) {
        const l = `${n[c]} `;
        u.includes(` ${l}`) || (u += l);
      }
      setAttr(i, "class", u.trim());
    }
  }
  return this;
}
function removeClass(t) {
  if (typeof t == "function")
    return domEach(this, (i, o) => {
      isTag(i) && removeClass.call([i], t.call(i, o, i.attribs.class || ""));
    });
  const n = splitNames(t), s = n.length, a = arguments.length === 0;
  return domEach(this, (i) => {
    if (isTag(i))
      if (a)
        i.attribs.class = "";
      else {
        const o = splitNames(i.attribs.class);
        let u = !1;
        for (let c = 0; c < s; c++) {
          const l = o.indexOf(n[c]);
          l >= 0 && (o.splice(l, 1), u = !0, c--);
        }
        u && (i.attribs.class = o.join(" "));
      }
  });
}
function toggleClass(t, n) {
  if (typeof t == "function")
    return domEach(this, (u, c) => {
      isTag(u) && toggleClass.call([u], t.call(u, c, u.attribs.class || "", n), n);
    });
  if (!t || typeof t != "string")
    return this;
  const s = t.split(rspace), a = s.length, i = typeof n == "boolean" ? n ? 1 : -1 : 0, o = this.length;
  for (let u = 0; u < o; u++) {
    const c = this[u];
    if (!isTag(c))
      continue;
    const l = splitNames(c.attribs.class);
    for (let d = 0; d < a; d++) {
      const f = l.indexOf(s[d]);
      i >= 0 && f < 0 ? l.push(s[d]) : i <= 0 && f >= 0 && l.splice(f, 1);
    }
    c.attribs.class = l.join(" ");
  }
  return this;
}
const Attributes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addClass,
  attr,
  data,
  hasClass,
  prop,
  removeAttr,
  removeClass,
  toggleClass,
  val
}, Symbol.toStringTag, { value: "Module" }));
var SelectorType;
(function(t) {
  t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator";
})(SelectorType || (SelectorType = {}));
var AttributeAction;
(function(t) {
  t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start";
})(AttributeAction || (AttributeAction = {}));
const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, actionTypes = /* @__PURE__ */ new Map([
  [126, AttributeAction.Element],
  [94, AttributeAction.Start],
  [36, AttributeAction.End],
  [42, AttributeAction.Any],
  [33, AttributeAction.Not],
  [124, AttributeAction.Hyphen]
]), unpackPseudos = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function isTraversal$1(t) {
  switch (t.type) {
    case SelectorType.Adjacent:
    case SelectorType.Child:
    case SelectorType.Descendant:
    case SelectorType.Parent:
    case SelectorType.Sibling:
    case SelectorType.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
const stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
function funescape(t, n, s) {
  const a = parseInt(n, 16) - 65536;
  return a !== a || s ? n : a < 0 ? (
    // BMP codepoint
    String.fromCharCode(a + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
  );
}
function unescapeCSS(t) {
  return t.replace(reEscape, funescape);
}
function isQuote(t) {
  return t === 39 || t === 34;
}
function isWhitespace$2(t) {
  return t === 32 || t === 9 || t === 10 || t === 12 || t === 13;
}
function parse$4(t) {
  const n = [], s = parseSelector(n, `${t}`, 0);
  if (s < t.length)
    throw new Error(`Unmatched selector: ${t.slice(s)}`);
  return n;
}
function parseSelector(t, n, s) {
  let a = [];
  function i(T) {
    const p = n.slice(s + T).match(reName);
    if (!p)
      throw new Error(`Expected name, found ${n.slice(s)}`);
    const [I] = p;
    return s += T + I.length, unescapeCSS(I);
  }
  function o(T) {
    for (s += T; s < n.length && isWhitespace$2(n.charCodeAt(s)); )
      s++;
  }
  function u() {
    s += 1;
    const T = s;
    let p = 1;
    for (; p > 0 && s < n.length; s++)
      n.charCodeAt(s) === 40 && !c(s) ? p++ : n.charCodeAt(s) === 41 && !c(s) && p--;
    if (p)
      throw new Error("Parenthesis not matched");
    return unescapeCSS(n.slice(T, s - 1));
  }
  function c(T) {
    let p = 0;
    for (; n.charCodeAt(--T) === 92; )
      p++;
    return (p & 1) === 1;
  }
  function l() {
    if (a.length > 0 && isTraversal$1(a[a.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function d(T) {
    if (a.length > 0 && a[a.length - 1].type === SelectorType.Descendant) {
      a[a.length - 1].type = T;
      return;
    }
    l(), a.push({ type: T });
  }
  function f(T, p) {
    a.push({
      type: SelectorType.Attribute,
      name: T,
      action: p,
      value: i(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function h() {
    if (a.length && a[a.length - 1].type === SelectorType.Descendant && a.pop(), a.length === 0)
      throw new Error("Empty sub-selector");
    t.push(a);
  }
  if (o(0), n.length === s)
    return s;
  e: for (; s < n.length; ) {
    const T = n.charCodeAt(s);
    switch (T) {
      case 32:
      case 9:
      case 10:
      case 12:
      case 13: {
        (a.length === 0 || a[0].type !== SelectorType.Descendant) && (l(), a.push({ type: SelectorType.Descendant })), o(1);
        break;
      }
      case 62: {
        d(SelectorType.Child), o(1);
        break;
      }
      case 60: {
        d(SelectorType.Parent), o(1);
        break;
      }
      case 126: {
        d(SelectorType.Sibling), o(1);
        break;
      }
      case 43: {
        d(SelectorType.Adjacent), o(1);
        break;
      }
      case 46: {
        f("class", AttributeAction.Element);
        break;
      }
      case 35: {
        f("id", AttributeAction.Equals);
        break;
      }
      case 91: {
        o(1);
        let p, I = null;
        n.charCodeAt(s) === 124 ? p = i(1) : n.startsWith("*|", s) ? (I = "*", p = i(2)) : (p = i(0), n.charCodeAt(s) === 124 && n.charCodeAt(s + 1) !== 61 && (I = p, p = i(1))), o(0);
        let E = AttributeAction.Exists;
        const _ = actionTypes.get(n.charCodeAt(s));
        if (_) {
          if (E = _, n.charCodeAt(s + 1) !== 61)
            throw new Error("Expected `=`");
          o(2);
        } else n.charCodeAt(s) === 61 && (E = AttributeAction.Equals, o(1));
        let m = "", b = null;
        if (E !== "exists") {
          if (isQuote(n.charCodeAt(s))) {
            const g = n.charCodeAt(s);
            let D = s + 1;
            for (; D < n.length && (n.charCodeAt(D) !== g || c(D)); )
              D += 1;
            if (n.charCodeAt(D) !== g)
              throw new Error("Attribute value didn't end");
            m = unescapeCSS(n.slice(s + 1, D)), s = D + 1;
          } else {
            const g = s;
            for (; s < n.length && (!isWhitespace$2(n.charCodeAt(s)) && n.charCodeAt(s) !== 93 || c(s)); )
              s += 1;
            m = unescapeCSS(n.slice(g, s));
          }
          o(0);
          const C = n.charCodeAt(s) | 32;
          C === 115 ? (b = !1, o(1)) : C === 105 && (b = !0, o(1));
        }
        if (n.charCodeAt(s) !== 93)
          throw new Error("Attribute selector didn't terminate");
        s += 1;
        const S = {
          type: SelectorType.Attribute,
          name: p,
          action: E,
          value: m,
          namespace: I,
          ignoreCase: b
        };
        a.push(S);
        break;
      }
      case 58: {
        if (n.charCodeAt(s + 1) === 58) {
          a.push({
            type: SelectorType.PseudoElement,
            name: i(2).toLowerCase(),
            data: n.charCodeAt(s) === 40 ? u() : null
          });
          continue;
        }
        const p = i(1).toLowerCase();
        let I = null;
        if (n.charCodeAt(s) === 40)
          if (unpackPseudos.has(p)) {
            if (isQuote(n.charCodeAt(s + 1)))
              throw new Error(`Pseudo-selector ${p} cannot be quoted`);
            if (I = [], s = parseSelector(I, n, s + 1), n.charCodeAt(s) !== 41)
              throw new Error(`Missing closing parenthesis in :${p} (${n})`);
            s += 1;
          } else {
            if (I = u(), stripQuotesFromPseudos.has(p)) {
              const E = I.charCodeAt(0);
              E === I.charCodeAt(I.length - 1) && isQuote(E) && (I = I.slice(1, -1));
            }
            I = unescapeCSS(I);
          }
        a.push({ type: SelectorType.Pseudo, name: p, data: I });
        break;
      }
      case 44: {
        h(), a = [], o(1);
        break;
      }
      default: {
        if (n.startsWith("/*", s)) {
          const E = n.indexOf("*/", s + 2);
          if (E < 0)
            throw new Error("Comment was not terminated");
          s = E + 2, a.length === 0 && o(0);
          break;
        }
        let p = null, I;
        if (T === 42)
          s += 1, I = "*";
        else if (T === 124) {
          if (I = "", n.charCodeAt(s + 1) === 124) {
            d(SelectorType.ColumnCombinator), o(2);
            break;
          }
        } else if (reName.test(n.slice(s)))
          I = i(0);
        else
          break e;
        n.charCodeAt(s) === 124 && n.charCodeAt(s + 1) !== 124 && (p = I, n.charCodeAt(s + 1) === 42 ? (I = "*", s += 2) : I = i(1)), a.push(I === "*" ? { type: SelectorType.Universal, namespace: p } : { type: SelectorType.Tag, name: I, namespace: p });
      }
    }
  }
  return h(), s;
}
var boolbase = {
  trueFunc: function() {
    return !0;
  },
  falseFunc: function() {
    return !1;
  }
};
const boolbase$1 = /* @__PURE__ */ getDefaultExportFromCjs(boolbase), procedure = /* @__PURE__ */ new Map([
  [SelectorType.Universal, 50],
  [SelectorType.Tag, 30],
  [SelectorType.Attribute, 1],
  [SelectorType.Pseudo, 0]
]);
function isTraversal(t) {
  return !procedure.has(t.type);
}
const attributes = /* @__PURE__ */ new Map([
  [AttributeAction.Exists, 10],
  [AttributeAction.Equals, 8],
  [AttributeAction.Not, 7],
  [AttributeAction.Start, 6],
  [AttributeAction.End, 6],
  [AttributeAction.Any, 5]
]);
function sortByProcedure(t) {
  const n = t.map(getProcedure);
  for (let s = 1; s < t.length; s++) {
    const a = n[s];
    if (!(a < 0))
      for (let i = s - 1; i >= 0 && a < n[i]; i--) {
        const o = t[i + 1];
        t[i + 1] = t[i], t[i] = o, n[i + 1] = n[i], n[i] = a;
      }
  }
}
function getProcedure(t) {
  var n, s;
  let a = (n = procedure.get(t.type)) !== null && n !== void 0 ? n : -1;
  return t.type === SelectorType.Attribute ? (a = (s = attributes.get(t.action)) !== null && s !== void 0 ? s : 4, t.action === AttributeAction.Equals && t.name === "id" && (a = 9), t.ignoreCase && (a >>= 1)) : t.type === SelectorType.Pseudo && (t.data ? t.name === "has" || t.name === "contains" ? a = 0 : Array.isArray(t.data) ? (a = Math.min(...t.data.map((i) => Math.min(...i.map(getProcedure)))), a < 0 && (a = 0)) : a = 2 : a = 3), a;
}
const reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(t) {
  return t.replace(reChars, "\\$&");
}
const caseInsensitiveAttributes = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function shouldIgnoreCase(t, n) {
  return typeof t.ignoreCase == "boolean" ? t.ignoreCase : t.ignoreCase === "quirks" ? !!n.quirksMode : !n.xmlMode && caseInsensitiveAttributes.has(t.name);
}
const attributeRules = {
  equals(t, n, s) {
    const { adapter: a } = s, { name: i } = n;
    let { value: o } = n;
    return shouldIgnoreCase(n, s) ? (o = o.toLowerCase(), (u) => {
      const c = a.getAttributeValue(u, i);
      return c != null && c.length === o.length && c.toLowerCase() === o && t(u);
    }) : (u) => a.getAttributeValue(u, i) === o && t(u);
  },
  hyphen(t, n, s) {
    const { adapter: a } = s, { name: i } = n;
    let { value: o } = n;
    const u = o.length;
    return shouldIgnoreCase(n, s) ? (o = o.toLowerCase(), function(l) {
      const d = a.getAttributeValue(l, i);
      return d != null && (d.length === u || d.charAt(u) === "-") && d.substr(0, u).toLowerCase() === o && t(l);
    }) : function(l) {
      const d = a.getAttributeValue(l, i);
      return d != null && (d.length === u || d.charAt(u) === "-") && d.substr(0, u) === o && t(l);
    };
  },
  element(t, n, s) {
    const { adapter: a } = s, { name: i, value: o } = n;
    if (/\s/.test(o))
      return boolbase$1.falseFunc;
    const u = new RegExp(`(?:^|\\s)${escapeRegex(o)}(?:$|\\s)`, shouldIgnoreCase(n, s) ? "i" : "");
    return function(l) {
      const d = a.getAttributeValue(l, i);
      return d != null && d.length >= o.length && u.test(d) && t(l);
    };
  },
  exists(t, { name: n }, { adapter: s }) {
    return (a) => s.hasAttrib(a, n) && t(a);
  },
  start(t, n, s) {
    const { adapter: a } = s, { name: i } = n;
    let { value: o } = n;
    const u = o.length;
    return u === 0 ? boolbase$1.falseFunc : shouldIgnoreCase(n, s) ? (o = o.toLowerCase(), (c) => {
      const l = a.getAttributeValue(c, i);
      return l != null && l.length >= u && l.substr(0, u).toLowerCase() === o && t(c);
    }) : (c) => {
      var l;
      return !!(!((l = a.getAttributeValue(c, i)) === null || l === void 0) && l.startsWith(o)) && t(c);
    };
  },
  end(t, n, s) {
    const { adapter: a } = s, { name: i } = n;
    let { value: o } = n;
    const u = -o.length;
    return u === 0 ? boolbase$1.falseFunc : shouldIgnoreCase(n, s) ? (o = o.toLowerCase(), (c) => {
      var l;
      return ((l = a.getAttributeValue(c, i)) === null || l === void 0 ? void 0 : l.substr(u).toLowerCase()) === o && t(c);
    }) : (c) => {
      var l;
      return !!(!((l = a.getAttributeValue(c, i)) === null || l === void 0) && l.endsWith(o)) && t(c);
    };
  },
  any(t, n, s) {
    const { adapter: a } = s, { name: i, value: o } = n;
    if (o === "")
      return boolbase$1.falseFunc;
    if (shouldIgnoreCase(n, s)) {
      const u = new RegExp(escapeRegex(o), "i");
      return function(l) {
        const d = a.getAttributeValue(l, i);
        return d != null && d.length >= o.length && u.test(d) && t(l);
      };
    }
    return (u) => {
      var c;
      return !!(!((c = a.getAttributeValue(u, i)) === null || c === void 0) && c.includes(o)) && t(u);
    };
  },
  not(t, n, s) {
    const { adapter: a } = s, { name: i } = n;
    let { value: o } = n;
    return o === "" ? (u) => !!a.getAttributeValue(u, i) && t(u) : shouldIgnoreCase(n, s) ? (o = o.toLowerCase(), (u) => {
      const c = a.getAttributeValue(u, i);
      return (c == null || c.length !== o.length || c.toLowerCase() !== o) && t(u);
    }) : (u) => a.getAttributeValue(u, i) !== o && t(u);
  }
}, whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), ZERO = 48, NINE = 57;
function parse$3(t) {
  if (t = t.trim().toLowerCase(), t === "even")
    return [2, 0];
  if (t === "odd")
    return [2, 1];
  let n = 0, s = 0, a = o(), i = u();
  if (n < t.length && t.charAt(n) === "n" && (n++, s = a * (i ?? 1), c(), n < t.length ? (a = o(), c(), i = u()) : a = i = 0), i === null || n < t.length)
    throw new Error(`n-th rule couldn't be parsed ('${t}')`);
  return [s, a * i];
  function o() {
    return t.charAt(n) === "-" ? (n++, -1) : (t.charAt(n) === "+" && n++, 1);
  }
  function u() {
    const l = n;
    let d = 0;
    for (; n < t.length && t.charCodeAt(n) >= ZERO && t.charCodeAt(n) <= NINE; )
      d = d * 10 + (t.charCodeAt(n) - ZERO), n++;
    return n === l ? null : d;
  }
  function c() {
    for (; n < t.length && whitespace.has(t.charCodeAt(n)); )
      n++;
  }
}
function compile(t) {
  const n = t[0], s = t[1] - 1;
  if (s < 0 && n <= 0)
    return boolbase$1.falseFunc;
  if (n === -1)
    return (o) => o <= s;
  if (n === 0)
    return (o) => o === s;
  if (n === 1)
    return s < 0 ? boolbase$1.trueFunc : (o) => o >= s;
  const a = Math.abs(n), i = (s % a + a) % a;
  return n > 1 ? (o) => o >= s && o % a === i : (o) => o <= s && o % a === i;
}
function nthCheck(t) {
  return compile(parse$3(t));
}
function getChildFunc(t, n) {
  return (s) => {
    const a = n.getParent(s);
    return a != null && n.isTag(a) && t(s);
  };
}
const filters = {
  contains(t, n, { adapter: s }) {
    return function(i) {
      return t(i) && s.getText(i).includes(n);
    };
  },
  icontains(t, n, { adapter: s }) {
    const a = n.toLowerCase();
    return function(o) {
      return t(o) && s.getText(o).toLowerCase().includes(a);
    };
  },
  // Location specific methods
  "nth-child"(t, n, { adapter: s, equals: a }) {
    const i = nthCheck(n);
    return i === boolbase$1.falseFunc ? boolbase$1.falseFunc : i === boolbase$1.trueFunc ? getChildFunc(t, s) : function(u) {
      const c = s.getSiblings(u);
      let l = 0;
      for (let d = 0; d < c.length && !a(u, c[d]); d++)
        s.isTag(c[d]) && l++;
      return i(l) && t(u);
    };
  },
  "nth-last-child"(t, n, { adapter: s, equals: a }) {
    const i = nthCheck(n);
    return i === boolbase$1.falseFunc ? boolbase$1.falseFunc : i === boolbase$1.trueFunc ? getChildFunc(t, s) : function(u) {
      const c = s.getSiblings(u);
      let l = 0;
      for (let d = c.length - 1; d >= 0 && !a(u, c[d]); d--)
        s.isTag(c[d]) && l++;
      return i(l) && t(u);
    };
  },
  "nth-of-type"(t, n, { adapter: s, equals: a }) {
    const i = nthCheck(n);
    return i === boolbase$1.falseFunc ? boolbase$1.falseFunc : i === boolbase$1.trueFunc ? getChildFunc(t, s) : function(u) {
      const c = s.getSiblings(u);
      let l = 0;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (a(u, f))
          break;
        s.isTag(f) && s.getName(f) === s.getName(u) && l++;
      }
      return i(l) && t(u);
    };
  },
  "nth-last-of-type"(t, n, { adapter: s, equals: a }) {
    const i = nthCheck(n);
    return i === boolbase$1.falseFunc ? boolbase$1.falseFunc : i === boolbase$1.trueFunc ? getChildFunc(t, s) : function(u) {
      const c = s.getSiblings(u);
      let l = 0;
      for (let d = c.length - 1; d >= 0; d--) {
        const f = c[d];
        if (a(u, f))
          break;
        s.isTag(f) && s.getName(f) === s.getName(u) && l++;
      }
      return i(l) && t(u);
    };
  },
  // TODO determine the actual root element
  root(t, n, { adapter: s }) {
    return (a) => {
      const i = s.getParent(a);
      return (i == null || !s.isTag(i)) && t(a);
    };
  },
  scope(t, n, s, a) {
    const { equals: i } = s;
    return !a || a.length === 0 ? filters.root(t, n, s) : a.length === 1 ? (o) => i(a[0], o) && t(o) : (o) => a.includes(o) && t(o);
  },
  hover: dynamicStatePseudo("isHovered"),
  visited: dynamicStatePseudo("isVisited"),
  active: dynamicStatePseudo("isActive")
};
function dynamicStatePseudo(t) {
  return function(s, a, { adapter: i }) {
    const o = i[t];
    return typeof o != "function" ? boolbase$1.falseFunc : function(c) {
      return o(c) && s(c);
    };
  };
}
const pseudos = {
  empty(t, { adapter: n }) {
    return !n.getChildren(t).some((s) => (
      // FIXME: `getText` call is potentially expensive.
      n.isTag(s) || n.getText(s) !== ""
    ));
  },
  "first-child"(t, { adapter: n, equals: s }) {
    if (n.prevElementSibling)
      return n.prevElementSibling(t) == null;
    const a = n.getSiblings(t).find((i) => n.isTag(i));
    return a != null && s(t, a);
  },
  "last-child"(t, { adapter: n, equals: s }) {
    const a = n.getSiblings(t);
    for (let i = a.length - 1; i >= 0; i--) {
      if (s(t, a[i]))
        return !0;
      if (n.isTag(a[i]))
        break;
    }
    return !1;
  },
  "first-of-type"(t, { adapter: n, equals: s }) {
    const a = n.getSiblings(t), i = n.getName(t);
    for (let o = 0; o < a.length; o++) {
      const u = a[o];
      if (s(t, u))
        return !0;
      if (n.isTag(u) && n.getName(u) === i)
        break;
    }
    return !1;
  },
  "last-of-type"(t, { adapter: n, equals: s }) {
    const a = n.getSiblings(t), i = n.getName(t);
    for (let o = a.length - 1; o >= 0; o--) {
      const u = a[o];
      if (s(t, u))
        return !0;
      if (n.isTag(u) && n.getName(u) === i)
        break;
    }
    return !1;
  },
  "only-of-type"(t, { adapter: n, equals: s }) {
    const a = n.getName(t);
    return n.getSiblings(t).every((i) => s(t, i) || !n.isTag(i) || n.getName(i) !== a);
  },
  "only-child"(t, { adapter: n, equals: s }) {
    return n.getSiblings(t).every((a) => s(t, a) || !n.isTag(a));
  }
};
function verifyPseudoArgs(t, n, s, a) {
  if (s === null) {
    if (t.length > a)
      throw new Error(`Pseudo-class :${n} requires an argument`);
  } else if (t.length === a)
    throw new Error(`Pseudo-class :${n} doesn't have any arguments`);
}
const aliases = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
}, PLACEHOLDER_ELEMENT = {};
function ensureIsTag(t, n) {
  return t === boolbase$1.falseFunc ? boolbase$1.falseFunc : (s) => n.isTag(s) && t(s);
}
function getNextSiblings(t, n) {
  const s = n.getSiblings(t);
  if (s.length <= 1)
    return [];
  const a = s.indexOf(t);
  return a < 0 || a === s.length - 1 ? [] : s.slice(a + 1).filter(n.isTag);
}
function copyOptions(t) {
  return {
    xmlMode: !!t.xmlMode,
    lowerCaseAttributeNames: !!t.lowerCaseAttributeNames,
    lowerCaseTags: !!t.lowerCaseTags,
    quirksMode: !!t.quirksMode,
    cacheResults: !!t.cacheResults,
    pseudos: t.pseudos,
    adapter: t.adapter,
    equals: t.equals
  };
}
const is$2 = (t, n, s, a, i) => {
  const o = i(n, copyOptions(s), a);
  return o === boolbase$1.trueFunc ? t : o === boolbase$1.falseFunc ? boolbase$1.falseFunc : (u) => o(u) && t(u);
}, subselects = {
  is: is$2,
  /**
   * `:matches` and `:where` are aliases for `:is`.
   */
  matches: is$2,
  where: is$2,
  not(t, n, s, a, i) {
    const o = i(n, copyOptions(s), a);
    return o === boolbase$1.falseFunc ? t : o === boolbase$1.trueFunc ? boolbase$1.falseFunc : (u) => !o(u) && t(u);
  },
  has(t, n, s, a, i) {
    const { adapter: o } = s, u = copyOptions(s);
    u.relativeSelector = !0;
    const c = n.some((f) => f.some(isTraversal)) ? (
      // Used as a placeholder. Will be replaced with the actual element.
      [PLACEHOLDER_ELEMENT]
    ) : void 0, l = i(n, u, c);
    if (l === boolbase$1.falseFunc)
      return boolbase$1.falseFunc;
    const d = ensureIsTag(l, o);
    if (c && l !== boolbase$1.trueFunc) {
      const { shouldTestNextSiblings: f = !1 } = l;
      return (h) => {
        if (!t(h))
          return !1;
        c[0] = h;
        const T = o.getChildren(h), p = f ? [...T, ...getNextSiblings(h, o)] : T;
        return o.existsOne(d, p);
      };
    }
    return (f) => t(f) && o.existsOne(d, o.getChildren(f));
  }
};
function compilePseudoSelector(t, n, s, a, i) {
  var o;
  const { name: u, data: c } = n;
  if (Array.isArray(c)) {
    if (!(u in subselects))
      throw new Error(`Unknown pseudo-class :${u}(${c})`);
    return subselects[u](t, c, s, a, i);
  }
  const l = (o = s.pseudos) === null || o === void 0 ? void 0 : o[u], d = typeof l == "string" ? l : aliases[u];
  if (typeof d == "string") {
    if (c != null)
      throw new Error(`Pseudo ${u} doesn't have any arguments`);
    const f = parse$4(d);
    return subselects.is(t, f, s, a, i);
  }
  if (typeof l == "function")
    return verifyPseudoArgs(l, u, c, 1), (f) => l(f, c) && t(f);
  if (u in filters)
    return filters[u](t, c, s, a);
  if (u in pseudos) {
    const f = pseudos[u];
    return verifyPseudoArgs(f, u, c, 2), (h) => f(h, s, c) && t(h);
  }
  throw new Error(`Unknown pseudo-class :${u}`);
}
function getElementParent(t, n) {
  const s = n.getParent(t);
  return s && n.isTag(s) ? s : null;
}
function compileGeneralSelector(t, n, s, a, i) {
  const { adapter: o, equals: u } = s;
  switch (n.type) {
    case SelectorType.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case SelectorType.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case SelectorType.Attribute: {
      if (n.namespace != null)
        throw new Error("Namespaced attributes are not yet supported by css-select");
      return (!s.xmlMode || s.lowerCaseAttributeNames) && (n.name = n.name.toLowerCase()), attributeRules[n.action](t, n, s);
    }
    case SelectorType.Pseudo:
      return compilePseudoSelector(t, n, s, a, i);
    case SelectorType.Tag: {
      if (n.namespace != null)
        throw new Error("Namespaced tag names are not yet supported by css-select");
      let { name: c } = n;
      return (!s.xmlMode || s.lowerCaseTags) && (c = c.toLowerCase()), function(d) {
        return o.getName(d) === c && t(d);
      };
    }
    case SelectorType.Descendant: {
      if (s.cacheResults === !1 || typeof WeakSet > "u")
        return function(d) {
          let f = d;
          for (; f = getElementParent(f, o); )
            if (t(f))
              return !0;
          return !1;
        };
      const c = /* @__PURE__ */ new WeakSet();
      return function(d) {
        let f = d;
        for (; f = getElementParent(f, o); )
          if (!c.has(f)) {
            if (o.isTag(f) && t(f))
              return !0;
            c.add(f);
          }
        return !1;
      };
    }
    case "_flexibleDescendant":
      return function(l) {
        let d = l;
        do
          if (t(d))
            return !0;
        while (d = getElementParent(d, o));
        return !1;
      };
    case SelectorType.Parent:
      return function(l) {
        return o.getChildren(l).some((d) => o.isTag(d) && t(d));
      };
    case SelectorType.Child:
      return function(l) {
        const d = o.getParent(l);
        return d != null && o.isTag(d) && t(d);
      };
    case SelectorType.Sibling:
      return function(l) {
        const d = o.getSiblings(l);
        for (let f = 0; f < d.length; f++) {
          const h = d[f];
          if (u(l, h))
            break;
          if (o.isTag(h) && t(h))
            return !0;
        }
        return !1;
      };
    case SelectorType.Adjacent:
      return o.prevElementSibling ? function(l) {
        const d = o.prevElementSibling(l);
        return d != null && t(d);
      } : function(l) {
        const d = o.getSiblings(l);
        let f;
        for (let h = 0; h < d.length; h++) {
          const T = d[h];
          if (u(l, T))
            break;
          o.isTag(T) && (f = T);
        }
        return !!f && t(f);
      };
    case SelectorType.Universal: {
      if (n.namespace != null && n.namespace !== "*")
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      return t;
    }
  }
}
function includesScopePseudo(t) {
  return t.type === SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((n) => n.some(includesScopePseudo)));
}
const DESCENDANT_TOKEN = { type: SelectorType.Descendant }, FLEXIBLE_DESCENDANT_TOKEN = {
  type: "_flexibleDescendant"
}, SCOPE_TOKEN = {
  type: SelectorType.Pseudo,
  name: "scope",
  data: null
};
function absolutize(t, { adapter: n }, s) {
  const a = !!(s != null && s.every((i) => {
    const o = n.isTag(i) && n.getParent(i);
    return i === PLACEHOLDER_ELEMENT || o && n.isTag(o);
  }));
  for (const i of t) {
    if (!(i.length > 0 && isTraversal(i[0]) && i[0].type !== SelectorType.Descendant)) if (a && !i.some(includesScopePseudo))
      i.unshift(DESCENDANT_TOKEN);
    else
      continue;
    i.unshift(SCOPE_TOKEN);
  }
}
function compileToken(t, n, s) {
  var a;
  t.forEach(sortByProcedure), s = (a = n.context) !== null && a !== void 0 ? a : s;
  const i = Array.isArray(s), o = s && (Array.isArray(s) ? s : [s]);
  if (n.relativeSelector !== !1)
    absolutize(t, n, o);
  else if (t.some((l) => l.length > 0 && isTraversal(l[0])))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  let u = !1;
  const c = t.map((l) => {
    if (l.length >= 2) {
      const [d, f] = l;
      d.type !== SelectorType.Pseudo || d.name !== "scope" || (i && f.type === SelectorType.Descendant ? l[1] = FLEXIBLE_DESCENDANT_TOKEN : (f.type === SelectorType.Adjacent || f.type === SelectorType.Sibling) && (u = !0));
    }
    return compileRules(l, n, o);
  }).reduce(reduceRules, boolbase$1.falseFunc);
  return c.shouldTestNextSiblings = u, c;
}
function compileRules(t, n, s) {
  var a;
  return t.reduce((i, o) => i === boolbase$1.falseFunc ? boolbase$1.falseFunc : compileGeneralSelector(i, o, n, s, compileToken), (a = n.rootFunc) !== null && a !== void 0 ? a : boolbase$1.trueFunc);
}
function reduceRules(t, n) {
  return n === boolbase$1.falseFunc || t === boolbase$1.trueFunc ? t : t === boolbase$1.falseFunc || n === boolbase$1.trueFunc ? n : function(a) {
    return t(a) || n(a);
  };
}
const defaultEquals = (t, n) => t === n, defaultOptions = {
  adapter: DomUtils,
  equals: defaultEquals
};
function convertOptionFormats(t) {
  var n, s, a, i;
  const o = t ?? defaultOptions;
  return (n = o.adapter) !== null && n !== void 0 || (o.adapter = DomUtils), (s = o.equals) !== null && s !== void 0 || (o.equals = (i = (a = o.adapter) === null || a === void 0 ? void 0 : a.equals) !== null && i !== void 0 ? i : defaultEquals), o;
}
function wrapCompile(t) {
  return function(s, a, i) {
    const o = convertOptionFormats(a);
    return t(s, o, i);
  };
}
const _compileToken = wrapCompile(compileToken);
function prepareContext(t, n, s = !1) {
  return s && (t = appendNextSiblings(t, n)), Array.isArray(t) ? n.removeSubsets(t) : n.getChildren(t);
}
function appendNextSiblings(t, n) {
  const s = Array.isArray(t) ? t.slice(0) : [t], a = s.length;
  for (let i = 0; i < a; i++) {
    const o = getNextSiblings(s[i], n);
    s.push(...o);
  }
  return s;
}
const filterNames = /* @__PURE__ */ new Set([
  "first",
  "last",
  "eq",
  "gt",
  "nth",
  "lt",
  "even",
  "odd"
]);
function isFilter(t) {
  return t.type !== "pseudo" ? !1 : filterNames.has(t.name) ? !0 : t.name === "not" && Array.isArray(t.data) ? t.data.some((n) => n.some(isFilter)) : !1;
}
function getLimit(t, n, s) {
  const a = n != null ? parseInt(n, 10) : NaN;
  switch (t) {
    case "first":
      return 1;
    case "nth":
    case "eq":
      return isFinite(a) ? a >= 0 ? a + 1 : 1 / 0 : 0;
    case "lt":
      return isFinite(a) ? a >= 0 ? Math.min(a, s) : 1 / 0 : 0;
    case "gt":
      return isFinite(a) ? 1 / 0 : 0;
    case "odd":
      return 2 * s;
    case "even":
      return 2 * s - 1;
    case "last":
    case "not":
      return 1 / 0;
  }
}
function getDocumentRoot(t) {
  for (; t.parent; )
    t = t.parent;
  return t;
}
function groupSelectors(t) {
  const n = [], s = [];
  for (const a of t)
    a.some(isFilter) ? n.push(a) : s.push(a);
  return [s, n];
}
const UNIVERSAL_SELECTOR = {
  type: SelectorType.Universal,
  namespace: null
}, SCOPE_PSEUDO = {
  type: SelectorType.Pseudo,
  name: "scope",
  data: null
};
function is$1(t, n, s = {}) {
  return some([t], n, s);
}
function some(t, n, s = {}) {
  if (typeof n == "function")
    return t.some(n);
  const [a, i] = groupSelectors(parse$4(n));
  return a.length > 0 && t.some(_compileToken(a, s)) || i.some((o) => filterBySelector(o, t, s).length > 0);
}
function filterByPosition(t, n, s, a) {
  const i = typeof s == "string" ? parseInt(s, 10) : NaN;
  switch (t) {
    case "first":
    case "lt":
      return n;
    case "last":
      return n.length > 0 ? [n[n.length - 1]] : n;
    case "nth":
    case "eq":
      return isFinite(i) && Math.abs(i) < n.length ? [i < 0 ? n[n.length + i] : n[i]] : [];
    case "gt":
      return isFinite(i) ? n.slice(i + 1) : [];
    case "even":
      return n.filter((o, u) => u % 2 === 0);
    case "odd":
      return n.filter((o, u) => u % 2 === 1);
    case "not": {
      const o = new Set(filterParsed(s, n, a));
      return n.filter((u) => !o.has(u));
    }
  }
}
function filter$1(t, n, s = {}) {
  return filterParsed(parse$4(t), n, s);
}
function filterParsed(t, n, s) {
  if (n.length === 0)
    return [];
  const [a, i] = groupSelectors(t);
  let o;
  if (a.length) {
    const u = filterElements(n, a, s);
    if (i.length === 0)
      return u;
    u.length && (o = new Set(u));
  }
  for (let u = 0; u < i.length && (o == null ? void 0 : o.size) !== n.length; u++) {
    const c = i[u];
    if ((o ? n.filter((f) => isTag(f) && !o.has(f)) : n).length === 0)
      break;
    const d = filterBySelector(c, n, s);
    if (d.length)
      if (o)
        d.forEach((f) => o.add(f));
      else {
        if (u === i.length - 1)
          return d;
        o = new Set(d);
      }
  }
  return typeof o < "u" ? o.size === n.length ? n : (
    // Filter elements to preserve order
    n.filter((u) => o.has(u))
  ) : [];
}
function filterBySelector(t, n, s) {
  var a;
  if (t.some(isTraversal$1)) {
    const i = (a = s.root) !== null && a !== void 0 ? a : getDocumentRoot(n[0]), o = { ...s, context: n, relativeSelector: !1 };
    return t.push(SCOPE_PSEUDO), findFilterElements(i, t, o, !0, n.length);
  }
  return findFilterElements(n, t, s, !1, n.length);
}
function select(t, n, s = {}, a = 1 / 0) {
  if (typeof t == "function")
    return find$1(n, t);
  const [i, o] = groupSelectors(parse$4(t)), u = o.map((c) => findFilterElements(n, c, s, !0, a));
  return i.length && u.push(findElements(n, i, s, a)), u.length === 0 ? [] : u.length === 1 ? u[0] : uniqueSort(u.reduce((c, l) => [...c, ...l]));
}
function findFilterElements(t, n, s, a, i) {
  const o = n.findIndex(isFilter), u = n.slice(0, o), c = n[o], l = n.length - 1 === o ? i : 1 / 0, d = getLimit(c.name, c.data, l);
  if (d === 0)
    return [];
  const h = (u.length === 0 && !Array.isArray(t) ? getChildren(t).filter(isTag) : u.length === 0 ? (Array.isArray(t) ? t : [t]).filter(isTag) : a || u.some(isTraversal$1) ? findElements(t, [u], s, d) : filterElements(t, [u], s)).slice(0, d);
  let T = filterByPosition(c.name, h, c.data, s);
  if (T.length === 0 || n.length === o + 1)
    return T;
  const p = n.slice(o + 1), I = p.some(isTraversal$1);
  if (I) {
    if (isTraversal$1(p[0])) {
      const { type: E } = p[0];
      (E === SelectorType.Sibling || E === SelectorType.Adjacent) && (T = prepareContext(T, DomUtils, !0)), p.unshift(UNIVERSAL_SELECTOR);
    }
    s = {
      ...s,
      // Avoid absolutizing the selector
      relativeSelector: !1,
      /*
       * Add a custom root func, to make sure traversals don't match elements
       * that aren't a part of the considered tree.
       */
      rootFunc: (E) => T.includes(E)
    };
  } else s.rootFunc && s.rootFunc !== boolbase.trueFunc && (s = { ...s, rootFunc: boolbase.trueFunc });
  return p.some(isFilter) ? findFilterElements(T, p, s, !1, i) : I ? (
    // Query existing elements to resolve traversal.
    findElements(T, [p], s, i)
  ) : (
    // If we don't have any more traversals, simply filter elements.
    filterElements(T, [p], s)
  );
}
function findElements(t, n, s, a) {
  const i = _compileToken(n, s, t);
  return find$1(t, i, a);
}
function find$1(t, n, s = 1 / 0) {
  const a = prepareContext(t, DomUtils, n.shouldTestNextSiblings);
  return find$2((i) => isTag(i) && n(i), a, !0, s);
}
function filterElements(t, n, s) {
  const a = (Array.isArray(t) ? t : [t]).filter(isTag);
  if (a.length === 0)
    return a;
  const i = _compileToken(n, s);
  return i === boolbase.trueFunc ? a : a.filter(i);
}
const reSiblingSelector = /^\s*[~+]/;
function find(t) {
  var n;
  if (!t)
    return this._make([]);
  const s = this.toArray();
  if (typeof t != "string") {
    const o = isCheerio(t) ? t.toArray() : [t];
    return this._make(o.filter((u) => s.some((c) => contains(c, u))));
  }
  const a = reSiblingSelector.test(t) ? s : this.children().toArray(), i = {
    context: s,
    root: (n = this._root) === null || n === void 0 ? void 0 : n[0],
    // Pass options that are recognized by `cheerio-select`
    xmlMode: this.options.xmlMode,
    lowerCaseTags: this.options.lowerCaseTags,
    lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
    pseudos: this.options.pseudos,
    quirksMode: this.options.quirksMode
  };
  return this._make(select(t, a, i));
}
function _getMatcher(t) {
  return function(n, ...s) {
    return function(a) {
      var i;
      let o = t(n, this);
      return a && (o = filterArray(o, a, this.options.xmlMode, (i = this._root) === null || i === void 0 ? void 0 : i[0])), this._make(
        // Post processing is only necessary if there is more than one element.
        this.length > 1 && o.length > 1 ? s.reduce((u, c) => c(u), o) : o
      );
    };
  };
}
const _matcher = _getMatcher((t, n) => {
  const s = [];
  for (let a = 0; a < n.length; a++) {
    const i = t(n[a]);
    s.push(i);
  }
  return new Array().concat(...s);
}), _singleMatcher = _getMatcher((t, n) => {
  const s = [];
  for (let a = 0; a < n.length; a++) {
    const i = t(n[a]);
    i !== null && s.push(i);
  }
  return s;
});
function _matchUntil(t, ...n) {
  let s = null;
  const a = _getMatcher((i, o) => {
    const u = [];
    return domEach(o, (c) => {
      for (let l; (l = i(c)) && !(s != null && s(l, u.length)); c = l)
        u.push(l);
    }), u;
  })(t, ...n);
  return function(i, o) {
    s = typeof i == "string" ? (c) => is$1(c, i, this.options) : i ? getFilterFn(i) : null;
    const u = a.call(this, o);
    return s = null, u;
  };
}
function _removeDuplicates(t) {
  return Array.from(new Set(t));
}
const parent = _singleMatcher(({ parent: t }) => t && !isDocument(t) ? t : null, _removeDuplicates), parents = _matcher((t) => {
  const n = [];
  for (; t.parent && !isDocument(t.parent); )
    n.push(t.parent), t = t.parent;
  return n;
}, uniqueSort, (t) => t.reverse()), parentsUntil = _matchUntil(({ parent: t }) => t && !isDocument(t) ? t : null, uniqueSort, (t) => t.reverse());
function closest(t) {
  var n;
  const s = [];
  if (!t)
    return this._make(s);
  const a = {
    xmlMode: this.options.xmlMode,
    root: (n = this._root) === null || n === void 0 ? void 0 : n[0]
  }, i = typeof t == "string" ? (o) => is$1(o, t, a) : getFilterFn(t);
  return domEach(this, (o) => {
    for (; o && isTag(o); ) {
      if (i(o, 0)) {
        s.includes(o) || s.push(o);
        break;
      }
      o = o.parent;
    }
  }), this._make(s);
}
const next = _singleMatcher((t) => nextElementSibling(t)), nextAll = _matcher((t) => {
  const n = [];
  for (; t.next; )
    t = t.next, isTag(t) && n.push(t);
  return n;
}, _removeDuplicates), nextUntil = _matchUntil((t) => nextElementSibling(t), _removeDuplicates), prev = _singleMatcher((t) => prevElementSibling(t)), prevAll = _matcher((t) => {
  const n = [];
  for (; t.prev; )
    t = t.prev, isTag(t) && n.push(t);
  return n;
}, _removeDuplicates), prevUntil = _matchUntil((t) => prevElementSibling(t), _removeDuplicates), siblings = _matcher((t) => getSiblings(t).filter((n) => isTag(n) && n !== t), uniqueSort), children = _matcher((t) => getChildren(t).filter(isTag), _removeDuplicates);
function contents() {
  const t = this.toArray().reduce((n, s) => hasChildren(s) ? n.concat(s.children) : n, []);
  return this._make(t);
}
function each(t) {
  let n = 0;
  const s = this.length;
  for (; n < s && t.call(this[n], n, this[n]) !== !1; )
    ++n;
  return this;
}
function map(t) {
  let n = [];
  for (let s = 0; s < this.length; s++) {
    const a = this[s], i = t.call(a, s, a);
    i != null && (n = n.concat(i));
  }
  return this._make(n);
}
function getFilterFn(t) {
  return typeof t == "function" ? (n, s) => t.call(n, s, n) : isCheerio(t) ? (n) => Array.prototype.includes.call(t, n) : function(n) {
    return t === n;
  };
}
function filter(t) {
  var n;
  return this._make(filterArray(this.toArray(), t, this.options.xmlMode, (n = this._root) === null || n === void 0 ? void 0 : n[0]));
}
function filterArray(t, n, s, a) {
  return typeof n == "string" ? filter$1(n, t, { xmlMode: s, root: a }) : t.filter(getFilterFn(n));
}
function is(t) {
  const n = this.toArray();
  return typeof t == "string" ? some(n.filter(isTag), t, this.options) : t ? n.some(getFilterFn(t)) : !1;
}
function not(t) {
  let n = this.toArray();
  if (typeof t == "string") {
    const s = new Set(filter$1(t, n, this.options));
    n = n.filter((a) => !s.has(a));
  } else {
    const s = getFilterFn(t);
    n = n.filter((a, i) => !s(a, i));
  }
  return this._make(n);
}
function has(t) {
  return this.filter(typeof t == "string" ? (
    // Using the `:has` selector here short-circuits searches.
    `:has(${t})`
  ) : (n, s) => this._make(s).find(t).length > 0);
}
function first() {
  return this.length > 1 ? this._make(this[0]) : this;
}
function last() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
function eq(t) {
  var n;
  return t = +t, t === 0 && this.length <= 1 ? this : (t < 0 && (t = this.length + t), this._make((n = this[t]) !== null && n !== void 0 ? n : []));
}
function get(t) {
  return t == null ? this.toArray() : this[t < 0 ? this.length + t : t];
}
function toArray() {
  return Array.prototype.slice.call(this);
}
function index(t) {
  let n, s;
  return t == null ? (n = this.parent().children(), s = this[0]) : typeof t == "string" ? (n = this._make(t), s = this[0]) : (n = this, s = isCheerio(t) ? t[0] : t), Array.prototype.indexOf.call(n, s);
}
function slice(t, n) {
  return this._make(Array.prototype.slice.call(this, t, n));
}
function end() {
  var t;
  return (t = this.prevObject) !== null && t !== void 0 ? t : this._make([]);
}
function add(t, n) {
  const s = this._make(t, n), a = uniqueSort([...this.get(), ...s.get()]);
  return this._make(a);
}
function addBack(t) {
  return this.prevObject ? this.add(t ? this.prevObject.filter(t) : this.prevObject) : this;
}
const Traversing = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add,
  addBack,
  children,
  closest,
  contents,
  each,
  end,
  eq,
  filter,
  filterArray,
  find,
  first,
  get,
  has,
  index,
  is,
  last,
  map,
  next,
  nextAll,
  nextUntil,
  not,
  parent,
  parents,
  parentsUntil,
  prev,
  prevAll,
  prevUntil,
  siblings,
  slice,
  toArray
}, Symbol.toStringTag, { value: "Module" }));
function getParse(t) {
  return function(s, a, i, o) {
    if (typeof Buffer < "u" && Buffer.isBuffer(s) && (s = s.toString()), typeof s == "string")
      return t(s, a, i, o);
    const u = s;
    if (!Array.isArray(u) && isDocument(u))
      return u;
    const c = new Document([]);
    return update(u, c), c;
  };
}
function update(t, n) {
  const s = Array.isArray(t) ? t : [t];
  n ? n.children = s : n = null;
  for (let a = 0; a < s.length; a++) {
    const i = s[a];
    i.parent && i.parent.children !== s && removeElement(i), n ? (i.prev = s[a - 1] || null, i.next = s[a + 1] || null) : i.prev = i.next = null, i.parent = n;
  }
  return n;
}
function _makeDomArray(t, n) {
  return t == null ? [] : isCheerio(t) ? n ? cloneDom(t.get()) : t.get() : Array.isArray(t) ? t.reduce((s, a) => s.concat(this._makeDomArray(a, n)), []) : typeof t == "string" ? this._parse(t, this.options, !1, null).children : n ? cloneDom([t]) : [t];
}
function _insert(t) {
  return function(...n) {
    const s = this.length - 1;
    return domEach(this, (a, i) => {
      if (!hasChildren(a))
        return;
      const o = typeof n[0] == "function" ? n[0].call(a, i, this._render(a.children)) : n, u = this._makeDomArray(o, i < s);
      t(u, a.children, a);
    });
  };
}
function uniqueSplice(t, n, s, a, i) {
  var o, u;
  const c = [
    n,
    s,
    ...a
  ], l = n === 0 ? null : t[n - 1], d = n + s >= t.length ? null : t[n + s];
  for (let f = 0; f < a.length; ++f) {
    const h = a[f], T = h.parent;
    if (T) {
      const I = T.children.indexOf(h);
      I > -1 && (T.children.splice(I, 1), i === T && n > I && c[0]--);
    }
    h.parent = i, h.prev && (h.prev.next = (o = h.next) !== null && o !== void 0 ? o : null), h.next && (h.next.prev = (u = h.prev) !== null && u !== void 0 ? u : null), h.prev = f === 0 ? l : a[f - 1], h.next = f === a.length - 1 ? d : a[f + 1];
  }
  return l && (l.next = a[0]), d && (d.prev = a[a.length - 1]), t.splice(...c);
}
function appendTo(t) {
  return (isCheerio(t) ? t : this._make(t)).append(this), this;
}
function prependTo(t) {
  return (isCheerio(t) ? t : this._make(t)).prepend(this), this;
}
const append = _insert((t, n, s) => {
  uniqueSplice(n, n.length, 0, t, s);
}), prepend = _insert((t, n, s) => {
  uniqueSplice(n, 0, 0, t, s);
});
function _wrap(t) {
  return function(n) {
    const s = this.length - 1, a = this.parents().last();
    for (let i = 0; i < this.length; i++) {
      const o = this[i], u = typeof n == "function" ? n.call(o, i, o) : typeof n == "string" && !isHtml(n) ? a.find(n).clone() : n, [c] = this._makeDomArray(u, i < s);
      if (!c || !hasChildren(c))
        continue;
      let l = c, d = 0;
      for (; d < l.children.length; ) {
        const f = l.children[d];
        isTag(f) ? (l = f, d = 0) : d++;
      }
      t(o, l, [c]);
    }
    return this;
  };
}
const wrap = _wrap((t, n, s) => {
  const { parent: a } = t;
  if (!a)
    return;
  const i = a.children, o = i.indexOf(t);
  update([t], n), uniqueSplice(i, o, 0, s, a);
}), wrapInner = _wrap((t, n, s) => {
  hasChildren(t) && (update(t.children, n), update(s, t));
});
function unwrap(t) {
  return this.parent(t).not("body").each((n, s) => {
    this._make(s).replaceWith(s.children);
  }), this;
}
function wrapAll(t) {
  const n = this[0];
  if (n) {
    const s = this._make(typeof t == "function" ? t.call(n, 0, n) : t).insertBefore(n);
    let a;
    for (let o = 0; o < s.length; o++)
      s[o].type === "tag" && (a = s[o]);
    let i = 0;
    for (; a && i < a.children.length; ) {
      const o = a.children[i];
      o.type === "tag" ? (a = o, i = 0) : i++;
    }
    a && this._make(a).append(this);
  }
  return this;
}
function after(...t) {
  const n = this.length - 1;
  return domEach(this, (s, a) => {
    const { parent: i } = s;
    if (!hasChildren(s) || !i)
      return;
    const o = i.children, u = o.indexOf(s);
    if (u < 0)
      return;
    const c = typeof t[0] == "function" ? t[0].call(s, a, this._render(s.children)) : t, l = this._makeDomArray(c, a < n);
    uniqueSplice(o, u + 1, 0, l, i);
  });
}
function insertAfter(t) {
  typeof t == "string" && (t = this._make(t)), this.remove();
  const n = [];
  return this._makeDomArray(t).forEach((s) => {
    const a = this.clone().toArray(), { parent: i } = s;
    if (!i)
      return;
    const o = i.children, u = o.indexOf(s);
    u < 0 || (uniqueSplice(o, u + 1, 0, a, i), n.push(...a));
  }), this._make(n);
}
function before(...t) {
  const n = this.length - 1;
  return domEach(this, (s, a) => {
    const { parent: i } = s;
    if (!hasChildren(s) || !i)
      return;
    const o = i.children, u = o.indexOf(s);
    if (u < 0)
      return;
    const c = typeof t[0] == "function" ? t[0].call(s, a, this._render(s.children)) : t, l = this._makeDomArray(c, a < n);
    uniqueSplice(o, u, 0, l, i);
  });
}
function insertBefore(t) {
  const n = this._make(t);
  this.remove();
  const s = [];
  return domEach(n, (a) => {
    const i = this.clone().toArray(), { parent: o } = a;
    if (!o)
      return;
    const u = o.children, c = u.indexOf(a);
    c < 0 || (uniqueSplice(u, c, 0, i, o), s.push(...i));
  }), this._make(s);
}
function remove(t) {
  const n = t ? this.filter(t) : this;
  return domEach(n, (s) => {
    removeElement(s), s.prev = s.next = s.parent = null;
  }), this;
}
function replaceWith(t) {
  return domEach(this, (n, s) => {
    const { parent: a } = n;
    if (!a)
      return;
    const i = a.children, o = typeof t == "function" ? t.call(n, s, n) : t, u = this._makeDomArray(o);
    update(u, null);
    const c = i.indexOf(n);
    uniqueSplice(i, c, 1, u, a), u.includes(n) || (n.parent = n.prev = n.next = null);
  });
}
function empty() {
  return domEach(this, (t) => {
    hasChildren(t) && (t.children.forEach((n) => {
      n.next = n.prev = n.parent = null;
    }), t.children.length = 0);
  });
}
function html(t) {
  if (t === void 0) {
    const n = this[0];
    return !n || !hasChildren(n) ? null : this._render(n.children);
  }
  return domEach(this, (n) => {
    if (!hasChildren(n))
      return;
    n.children.forEach((a) => {
      a.next = a.prev = a.parent = null;
    });
    const s = isCheerio(t) ? t.toArray() : this._parse(`${t}`, this.options, !1, n).children;
    update(s, n);
  });
}
function toString() {
  return this._render(this);
}
function text(t) {
  return t === void 0 ? text$1(this) : typeof t == "function" ? domEach(this, (n, s) => this._make(n).text(t.call(n, s, text$1([n])))) : domEach(this, (n) => {
    if (!hasChildren(n))
      return;
    n.children.forEach((a) => {
      a.next = a.prev = a.parent = null;
    });
    const s = new Text(`${t}`);
    update(s, n);
  });
}
function clone() {
  return this._make(cloneDom(this.get()));
}
const Manipulation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _makeDomArray,
  after,
  append,
  appendTo,
  before,
  clone,
  empty,
  html,
  insertAfter,
  insertBefore,
  prepend,
  prependTo,
  remove,
  replaceWith,
  text,
  toString,
  unwrap,
  wrap,
  wrapAll,
  wrapInner
}, Symbol.toStringTag, { value: "Module" }));
function css(t, n) {
  if (t != null && n != null || // When `prop` is a "plain" object
  typeof t == "object" && !Array.isArray(t))
    return domEach(this, (s, a) => {
      isTag(s) && setCss(s, t, n, a);
    });
  if (this.length !== 0)
    return getCss(this[0], t);
}
function setCss(t, n, s, a) {
  if (typeof n == "string") {
    const i = getCss(t), o = typeof s == "function" ? s.call(t, a, i[n]) : s;
    o === "" ? delete i[n] : o != null && (i[n] = o), t.attribs.style = stringify(i);
  } else typeof n == "object" && Object.keys(n).forEach((i, o) => {
    setCss(t, i, n[i], o);
  });
}
function getCss(t, n) {
  if (!t || !isTag(t))
    return;
  const s = parse$2(t.attribs.style);
  if (typeof n == "string")
    return s[n];
  if (Array.isArray(n)) {
    const a = {};
    return n.forEach((i) => {
      s[i] != null && (a[i] = s[i]);
    }), a;
  }
  return s;
}
function stringify(t) {
  return Object.keys(t).reduce((n, s) => `${n}${n ? " " : ""}${s}: ${t[s]};`, "");
}
function parse$2(t) {
  if (t = (t || "").trim(), !t)
    return {};
  const n = {};
  let s;
  for (const a of t.split(";")) {
    const i = a.indexOf(":");
    if (i < 1 || i === a.length - 1) {
      const o = a.trimEnd();
      o.length > 0 && s !== void 0 && (n[s] += `;${o}`);
    } else
      s = a.slice(0, i).trim(), n[s] = a.slice(i + 1).trim();
  }
  return n;
}
const Css = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css
}, Symbol.toStringTag, { value: "Module" })), submittableSelector = "input,select,textarea,keygen", r20 = /%20/g, rCRLF = /\r?\n/g;
function serialize() {
  return this.serializeArray().map((s) => `${encodeURIComponent(s.name)}=${encodeURIComponent(s.value)}`).join("&").replace(r20, "+");
}
function serializeArray() {
  return this.map((t, n) => {
    const s = this._make(n);
    return isTag(n) && n.name === "form" ? s.find(submittableSelector).toArray() : s.filter(submittableSelector).toArray();
  }).filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
    // Convert each of the elements to its value(s)
  ).map((t, n) => {
    var s;
    const a = this._make(n), i = a.attr("name"), o = (s = a.val()) !== null && s !== void 0 ? s : "";
    return Array.isArray(o) ? o.map((u) => (
      /*
       * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
       * These can occur inside of `<textarea>'s`
       */
      { name: i, value: u.replace(rCRLF, `\r
`) }
    )) : { name: i, value: o.replace(rCRLF, `\r
`) };
  }).toArray();
}
const Forms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  serialize,
  serializeArray
}, Symbol.toStringTag, { value: "Module" }));
class Cheerio {
  /**
   * Instance of cheerio. Methods are specified in the modules. Usage of this
   * constructor is not recommended. Please use `$.load` instead.
   *
   * @private
   * @param elements - The new selection.
   * @param root - Sets the root node.
   * @param options - Options for the instance.
   */
  constructor(n, s, a) {
    if (this.length = 0, this.options = a, this._root = s, n) {
      for (let i = 0; i < n.length; i++)
        this[i] = n[i];
      this.length = n.length;
    }
  }
}
Cheerio.prototype.cheerio = "[cheerio object]";
Cheerio.prototype.splice = Array.prototype.splice;
Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(Cheerio.prototype, Attributes, Traversing, Manipulation, Css, Forms);
function getLoad(t, n) {
  return function s(a, i, o = !0) {
    if (a == null)
      throw new Error("cheerio.load() expects a string");
    const u = { ...defaultOpts$2, ...flatten(i) }, c = t(a, u, o, null);
    class l extends Cheerio {
      _make(h, T) {
        const p = d(h, T);
        return p.prevObject = this, p;
      }
      _parse(h, T, p, I) {
        return t(h, T, p, I);
      }
      _render(h) {
        return n(h, this.options);
      }
    }
    function d(f, h, T = c, p) {
      if (f && isCheerio(f))
        return f;
      const I = {
        ...u,
        ...flatten(p)
      }, E = typeof T == "string" ? [t(T, I, !1, null)] : "length" in T ? T : [T], _ = isCheerio(E) ? E : new l(E, null, I);
      if (_._root = _, !f)
        return new l(void 0, _, I);
      const m = typeof f == "string" && isHtml(f) ? (
        // $(<html>)
        t(f, I, !1, null).children
      ) : isNode(f) ? (
        // $(dom)
        [f]
      ) : Array.isArray(f) ? (
        // $([dom])
        f
      ) : void 0, b = new l(m, _, I);
      if (m)
        return b;
      if (typeof f != "string")
        throw new Error("Unexpected type of selector");
      let S = f;
      const C = h ? typeof h == "string" ? isHtml(h) ? (
        // $('li', '<ul>...</ul>')
        new l([t(h, I, !1, null)], _, I)
      ) : (
        // $('li', 'ul')
        (S = `${h} ${S}`, _)
      ) : isCheerio(h) ? (
        // $('li', $)
        h
      ) : (
        // $('li', node), $('li', [nodes])
        new l(Array.isArray(h) ? h : [h], _, I)
      ) : (
        // If we don't have a context, maybe we have a root, from loading
        _
      );
      return C ? C.find(S) : b;
    }
    return Object.assign(d, staticMethods, {
      load: s,
      // `_root` and `_options` are used in static methods.
      _root: c,
      _options: u,
      // Add `fn` for plugins
      fn: l.prototype,
      // Add the prototype here to maintain `instanceof` behavior.
      prototype: l.prototype
    }), d;
  };
}
function isNode(t) {
  return !!t.name || t.type === "root" || t.type === "text" || t.type === "comment";
}
const UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
  65534,
  65535,
  131070,
  131071,
  196606,
  196607,
  262142,
  262143,
  327678,
  327679,
  393214,
  393215,
  458750,
  458751,
  524286,
  524287,
  589822,
  589823,
  655358,
  655359,
  720894,
  720895,
  786430,
  786431,
  851966,
  851967,
  917502,
  917503,
  983038,
  983039,
  1048574,
  1048575,
  1114110,
  1114111
]), REPLACEMENT_CHARACTER = "�";
var CODE_POINTS;
(function(t) {
  t[t.EOF = -1] = "EOF", t[t.NULL = 0] = "NULL", t[t.TABULATION = 9] = "TABULATION", t[t.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", t[t.LINE_FEED = 10] = "LINE_FEED", t[t.FORM_FEED = 12] = "FORM_FEED", t[t.SPACE = 32] = "SPACE", t[t.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", t[t.QUOTATION_MARK = 34] = "QUOTATION_MARK", t[t.NUMBER_SIGN = 35] = "NUMBER_SIGN", t[t.AMPERSAND = 38] = "AMPERSAND", t[t.APOSTROPHE = 39] = "APOSTROPHE", t[t.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", t[t.SOLIDUS = 47] = "SOLIDUS", t[t.DIGIT_0 = 48] = "DIGIT_0", t[t.DIGIT_9 = 57] = "DIGIT_9", t[t.SEMICOLON = 59] = "SEMICOLON", t[t.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", t[t.EQUALS_SIGN = 61] = "EQUALS_SIGN", t[t.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", t[t.QUESTION_MARK = 63] = "QUESTION_MARK", t[t.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", t[t.LATIN_CAPITAL_F = 70] = "LATIN_CAPITAL_F", t[t.LATIN_CAPITAL_X = 88] = "LATIN_CAPITAL_X", t[t.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", t[t.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", t[t.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", t[t.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", t[t.LATIN_SMALL_F = 102] = "LATIN_SMALL_F", t[t.LATIN_SMALL_X = 120] = "LATIN_SMALL_X", t[t.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z", t[t.REPLACEMENT_CHARACTER = 65533] = "REPLACEMENT_CHARACTER";
})(CODE_POINTS = CODE_POINTS || (CODE_POINTS = {}));
const SEQUENCES = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function isSurrogate(t) {
  return t >= 55296 && t <= 57343;
}
function isSurrogatePair(t) {
  return t >= 56320 && t <= 57343;
}
function getSurrogatePairCodePoint(t, n) {
  return (t - 55296) * 1024 + 9216 + n;
}
function isControlCodePoint(t) {
  return t !== 32 && t !== 10 && t !== 13 && t !== 9 && t !== 12 && t >= 1 && t <= 31 || t >= 127 && t <= 159;
}
function isUndefinedCodePoint(t) {
  return t >= 64976 && t <= 65007 || UNDEFINED_CODE_POINTS.has(t);
}
var ERR;
(function(t) {
  t.controlCharacterInInputStream = "control-character-in-input-stream", t.noncharacterInInputStream = "noncharacter-in-input-stream", t.surrogateInInputStream = "surrogate-in-input-stream", t.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", t.endTagWithAttributes = "end-tag-with-attributes", t.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", t.unexpectedSolidusInTag = "unexpected-solidus-in-tag", t.unexpectedNullCharacter = "unexpected-null-character", t.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", t.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", t.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", t.missingEndTagName = "missing-end-tag-name", t.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", t.unknownNamedCharacterReference = "unknown-named-character-reference", t.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", t.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", t.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", t.eofBeforeTagName = "eof-before-tag-name", t.eofInTag = "eof-in-tag", t.missingAttributeValue = "missing-attribute-value", t.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", t.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", t.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", t.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", t.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", t.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", t.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", t.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", t.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", t.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", t.cdataInHtmlContent = "cdata-in-html-content", t.incorrectlyOpenedComment = "incorrectly-opened-comment", t.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", t.eofInDoctype = "eof-in-doctype", t.nestedComment = "nested-comment", t.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", t.eofInComment = "eof-in-comment", t.incorrectlyClosedComment = "incorrectly-closed-comment", t.eofInCdata = "eof-in-cdata", t.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", t.nullCharacterReference = "null-character-reference", t.surrogateCharacterReference = "surrogate-character-reference", t.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", t.controlCharacterReference = "control-character-reference", t.noncharacterCharacterReference = "noncharacter-character-reference", t.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", t.missingDoctypeName = "missing-doctype-name", t.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", t.duplicateAttribute = "duplicate-attribute", t.nonConformingDoctype = "non-conforming-doctype", t.missingDoctype = "missing-doctype", t.misplacedDoctype = "misplaced-doctype", t.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", t.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", t.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", t.openElementsLeftAfterEof = "open-elements-left-after-eof", t.abandonedHeadElementChild = "abandoned-head-element-child", t.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", t.nestedNoscriptInHead = "nested-noscript-in-head", t.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(ERR = ERR || (ERR = {}));
const DEFAULT_BUFFER_WATERLINE = 65536;
class Preprocessor {
  constructor(n) {
    this.handler = n, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = DEFAULT_BUFFER_WATERLINE, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(n) {
    const { line: s, col: a, offset: i } = this;
    return {
      code: n,
      startLine: s,
      endLine: s,
      startCol: a,
      endCol: a,
      startOffset: i,
      endOffset: i
    };
  }
  _err(n) {
    this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(n)));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
  }
  _processSurrogate(n) {
    if (this.pos !== this.html.length - 1) {
      const s = this.html.charCodeAt(this.pos + 1);
      if (isSurrogatePair(s))
        return this.pos++, this._addGap(), getSurrogatePairCodePoint(n, s);
    } else if (!this.lastChunkWritten)
      return this.endOfChunkHit = !0, CODE_POINTS.EOF;
    return this._err(ERR.surrogateInInputStream), n;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
  }
  write(n, s) {
    this.html.length > 0 ? this.html += n : this.html = n, this.endOfChunkHit = !1, this.lastChunkWritten = s;
  }
  insertHtmlAtCurrentPos(n) {
    this.html = this.html.substring(0, this.pos + 1) + n + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
  }
  startsWith(n, s) {
    if (this.pos + n.length > this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, !1;
    if (s)
      return this.html.startsWith(n, this.pos);
    for (let a = 0; a < n.length; a++)
      if ((this.html.charCodeAt(this.pos + a) | 32) !== n.charCodeAt(a))
        return !1;
    return !0;
  }
  peek(n) {
    const s = this.pos + n;
    if (s >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, CODE_POINTS.EOF;
    const a = this.html.charCodeAt(s);
    return a === CODE_POINTS.CARRIAGE_RETURN ? CODE_POINTS.LINE_FEED : a;
  }
  advance() {
    if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, CODE_POINTS.EOF;
    let n = this.html.charCodeAt(this.pos);
    return n === CODE_POINTS.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, CODE_POINTS.LINE_FEED) : n === CODE_POINTS.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, isSurrogate(n) && (n = this._processSurrogate(n)), this.handler.onParseError === null || n > 31 && n < 127 || n === CODE_POINTS.LINE_FEED || n === CODE_POINTS.CARRIAGE_RETURN || n > 159 && n < 64976 || this._checkForProblematicCharacters(n), n);
  }
  _checkForProblematicCharacters(n) {
    isControlCodePoint(n) ? this._err(ERR.controlCharacterInInputStream) : isUndefinedCodePoint(n) && this._err(ERR.noncharacterInInputStream);
  }
  retreat(n) {
    for (this.pos -= n; this.pos < this.lastGapPos; )
      this.lastGapPos = this.gapStack.pop(), this.pos--;
    this.isEol = !1;
  }
}
var TokenType;
(function(t) {
  t[t.CHARACTER = 0] = "CHARACTER", t[t.NULL_CHARACTER = 1] = "NULL_CHARACTER", t[t.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", t[t.START_TAG = 3] = "START_TAG", t[t.END_TAG = 4] = "END_TAG", t[t.COMMENT = 5] = "COMMENT", t[t.DOCTYPE = 6] = "DOCTYPE", t[t.EOF = 7] = "EOF", t[t.HIBERNATION = 8] = "HIBERNATION";
})(TokenType = TokenType || (TokenType = {}));
function getTokenAttr(t, n) {
  for (let s = t.attrs.length - 1; s >= 0; s--)
    if (t.attrs[s].name === n)
      return t.attrs[s].value;
  return null;
}
var NS;
(function(t) {
  t.HTML = "http://www.w3.org/1999/xhtml", t.MATHML = "http://www.w3.org/1998/Math/MathML", t.SVG = "http://www.w3.org/2000/svg", t.XLINK = "http://www.w3.org/1999/xlink", t.XML = "http://www.w3.org/XML/1998/namespace", t.XMLNS = "http://www.w3.org/2000/xmlns/";
})(NS = NS || (NS = {}));
var ATTRS;
(function(t) {
  t.TYPE = "type", t.ACTION = "action", t.ENCODING = "encoding", t.PROMPT = "prompt", t.NAME = "name", t.COLOR = "color", t.FACE = "face", t.SIZE = "size";
})(ATTRS = ATTRS || (ATTRS = {}));
var DOCUMENT_MODE;
(function(t) {
  t.NO_QUIRKS = "no-quirks", t.QUIRKS = "quirks", t.LIMITED_QUIRKS = "limited-quirks";
})(DOCUMENT_MODE = DOCUMENT_MODE || (DOCUMENT_MODE = {}));
var TAG_NAMES;
(function(t) {
  t.A = "a", t.ADDRESS = "address", t.ANNOTATION_XML = "annotation-xml", t.APPLET = "applet", t.AREA = "area", t.ARTICLE = "article", t.ASIDE = "aside", t.B = "b", t.BASE = "base", t.BASEFONT = "basefont", t.BGSOUND = "bgsound", t.BIG = "big", t.BLOCKQUOTE = "blockquote", t.BODY = "body", t.BR = "br", t.BUTTON = "button", t.CAPTION = "caption", t.CENTER = "center", t.CODE = "code", t.COL = "col", t.COLGROUP = "colgroup", t.DD = "dd", t.DESC = "desc", t.DETAILS = "details", t.DIALOG = "dialog", t.DIR = "dir", t.DIV = "div", t.DL = "dl", t.DT = "dt", t.EM = "em", t.EMBED = "embed", t.FIELDSET = "fieldset", t.FIGCAPTION = "figcaption", t.FIGURE = "figure", t.FONT = "font", t.FOOTER = "footer", t.FOREIGN_OBJECT = "foreignObject", t.FORM = "form", t.FRAME = "frame", t.FRAMESET = "frameset", t.H1 = "h1", t.H2 = "h2", t.H3 = "h3", t.H4 = "h4", t.H5 = "h5", t.H6 = "h6", t.HEAD = "head", t.HEADER = "header", t.HGROUP = "hgroup", t.HR = "hr", t.HTML = "html", t.I = "i", t.IMG = "img", t.IMAGE = "image", t.INPUT = "input", t.IFRAME = "iframe", t.KEYGEN = "keygen", t.LABEL = "label", t.LI = "li", t.LINK = "link", t.LISTING = "listing", t.MAIN = "main", t.MALIGNMARK = "malignmark", t.MARQUEE = "marquee", t.MATH = "math", t.MENU = "menu", t.META = "meta", t.MGLYPH = "mglyph", t.MI = "mi", t.MO = "mo", t.MN = "mn", t.MS = "ms", t.MTEXT = "mtext", t.NAV = "nav", t.NOBR = "nobr", t.NOFRAMES = "noframes", t.NOEMBED = "noembed", t.NOSCRIPT = "noscript", t.OBJECT = "object", t.OL = "ol", t.OPTGROUP = "optgroup", t.OPTION = "option", t.P = "p", t.PARAM = "param", t.PLAINTEXT = "plaintext", t.PRE = "pre", t.RB = "rb", t.RP = "rp", t.RT = "rt", t.RTC = "rtc", t.RUBY = "ruby", t.S = "s", t.SCRIPT = "script", t.SECTION = "section", t.SELECT = "select", t.SOURCE = "source", t.SMALL = "small", t.SPAN = "span", t.STRIKE = "strike", t.STRONG = "strong", t.STYLE = "style", t.SUB = "sub", t.SUMMARY = "summary", t.SUP = "sup", t.TABLE = "table", t.TBODY = "tbody", t.TEMPLATE = "template", t.TEXTAREA = "textarea", t.TFOOT = "tfoot", t.TD = "td", t.TH = "th", t.THEAD = "thead", t.TITLE = "title", t.TR = "tr", t.TRACK = "track", t.TT = "tt", t.U = "u", t.UL = "ul", t.SVG = "svg", t.VAR = "var", t.WBR = "wbr", t.XMP = "xmp";
})(TAG_NAMES = TAG_NAMES || (TAG_NAMES = {}));
var TAG_ID;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.A = 1] = "A", t[t.ADDRESS = 2] = "ADDRESS", t[t.ANNOTATION_XML = 3] = "ANNOTATION_XML", t[t.APPLET = 4] = "APPLET", t[t.AREA = 5] = "AREA", t[t.ARTICLE = 6] = "ARTICLE", t[t.ASIDE = 7] = "ASIDE", t[t.B = 8] = "B", t[t.BASE = 9] = "BASE", t[t.BASEFONT = 10] = "BASEFONT", t[t.BGSOUND = 11] = "BGSOUND", t[t.BIG = 12] = "BIG", t[t.BLOCKQUOTE = 13] = "BLOCKQUOTE", t[t.BODY = 14] = "BODY", t[t.BR = 15] = "BR", t[t.BUTTON = 16] = "BUTTON", t[t.CAPTION = 17] = "CAPTION", t[t.CENTER = 18] = "CENTER", t[t.CODE = 19] = "CODE", t[t.COL = 20] = "COL", t[t.COLGROUP = 21] = "COLGROUP", t[t.DD = 22] = "DD", t[t.DESC = 23] = "DESC", t[t.DETAILS = 24] = "DETAILS", t[t.DIALOG = 25] = "DIALOG", t[t.DIR = 26] = "DIR", t[t.DIV = 27] = "DIV", t[t.DL = 28] = "DL", t[t.DT = 29] = "DT", t[t.EM = 30] = "EM", t[t.EMBED = 31] = "EMBED", t[t.FIELDSET = 32] = "FIELDSET", t[t.FIGCAPTION = 33] = "FIGCAPTION", t[t.FIGURE = 34] = "FIGURE", t[t.FONT = 35] = "FONT", t[t.FOOTER = 36] = "FOOTER", t[t.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", t[t.FORM = 38] = "FORM", t[t.FRAME = 39] = "FRAME", t[t.FRAMESET = 40] = "FRAMESET", t[t.H1 = 41] = "H1", t[t.H2 = 42] = "H2", t[t.H3 = 43] = "H3", t[t.H4 = 44] = "H4", t[t.H5 = 45] = "H5", t[t.H6 = 46] = "H6", t[t.HEAD = 47] = "HEAD", t[t.HEADER = 48] = "HEADER", t[t.HGROUP = 49] = "HGROUP", t[t.HR = 50] = "HR", t[t.HTML = 51] = "HTML", t[t.I = 52] = "I", t[t.IMG = 53] = "IMG", t[t.IMAGE = 54] = "IMAGE", t[t.INPUT = 55] = "INPUT", t[t.IFRAME = 56] = "IFRAME", t[t.KEYGEN = 57] = "KEYGEN", t[t.LABEL = 58] = "LABEL", t[t.LI = 59] = "LI", t[t.LINK = 60] = "LINK", t[t.LISTING = 61] = "LISTING", t[t.MAIN = 62] = "MAIN", t[t.MALIGNMARK = 63] = "MALIGNMARK", t[t.MARQUEE = 64] = "MARQUEE", t[t.MATH = 65] = "MATH", t[t.MENU = 66] = "MENU", t[t.META = 67] = "META", t[t.MGLYPH = 68] = "MGLYPH", t[t.MI = 69] = "MI", t[t.MO = 70] = "MO", t[t.MN = 71] = "MN", t[t.MS = 72] = "MS", t[t.MTEXT = 73] = "MTEXT", t[t.NAV = 74] = "NAV", t[t.NOBR = 75] = "NOBR", t[t.NOFRAMES = 76] = "NOFRAMES", t[t.NOEMBED = 77] = "NOEMBED", t[t.NOSCRIPT = 78] = "NOSCRIPT", t[t.OBJECT = 79] = "OBJECT", t[t.OL = 80] = "OL", t[t.OPTGROUP = 81] = "OPTGROUP", t[t.OPTION = 82] = "OPTION", t[t.P = 83] = "P", t[t.PARAM = 84] = "PARAM", t[t.PLAINTEXT = 85] = "PLAINTEXT", t[t.PRE = 86] = "PRE", t[t.RB = 87] = "RB", t[t.RP = 88] = "RP", t[t.RT = 89] = "RT", t[t.RTC = 90] = "RTC", t[t.RUBY = 91] = "RUBY", t[t.S = 92] = "S", t[t.SCRIPT = 93] = "SCRIPT", t[t.SECTION = 94] = "SECTION", t[t.SELECT = 95] = "SELECT", t[t.SOURCE = 96] = "SOURCE", t[t.SMALL = 97] = "SMALL", t[t.SPAN = 98] = "SPAN", t[t.STRIKE = 99] = "STRIKE", t[t.STRONG = 100] = "STRONG", t[t.STYLE = 101] = "STYLE", t[t.SUB = 102] = "SUB", t[t.SUMMARY = 103] = "SUMMARY", t[t.SUP = 104] = "SUP", t[t.TABLE = 105] = "TABLE", t[t.TBODY = 106] = "TBODY", t[t.TEMPLATE = 107] = "TEMPLATE", t[t.TEXTAREA = 108] = "TEXTAREA", t[t.TFOOT = 109] = "TFOOT", t[t.TD = 110] = "TD", t[t.TH = 111] = "TH", t[t.THEAD = 112] = "THEAD", t[t.TITLE = 113] = "TITLE", t[t.TR = 114] = "TR", t[t.TRACK = 115] = "TRACK", t[t.TT = 116] = "TT", t[t.U = 117] = "U", t[t.UL = 118] = "UL", t[t.SVG = 119] = "SVG", t[t.VAR = 120] = "VAR", t[t.WBR = 121] = "WBR", t[t.XMP = 122] = "XMP";
})(TAG_ID = TAG_ID || (TAG_ID = {}));
const TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
  [TAG_NAMES.A, TAG_ID.A],
  [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
  [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
  [TAG_NAMES.APPLET, TAG_ID.APPLET],
  [TAG_NAMES.AREA, TAG_ID.AREA],
  [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
  [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
  [TAG_NAMES.B, TAG_ID.B],
  [TAG_NAMES.BASE, TAG_ID.BASE],
  [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
  [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
  [TAG_NAMES.BIG, TAG_ID.BIG],
  [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
  [TAG_NAMES.BODY, TAG_ID.BODY],
  [TAG_NAMES.BR, TAG_ID.BR],
  [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
  [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
  [TAG_NAMES.CENTER, TAG_ID.CENTER],
  [TAG_NAMES.CODE, TAG_ID.CODE],
  [TAG_NAMES.COL, TAG_ID.COL],
  [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
  [TAG_NAMES.DD, TAG_ID.DD],
  [TAG_NAMES.DESC, TAG_ID.DESC],
  [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
  [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
  [TAG_NAMES.DIR, TAG_ID.DIR],
  [TAG_NAMES.DIV, TAG_ID.DIV],
  [TAG_NAMES.DL, TAG_ID.DL],
  [TAG_NAMES.DT, TAG_ID.DT],
  [TAG_NAMES.EM, TAG_ID.EM],
  [TAG_NAMES.EMBED, TAG_ID.EMBED],
  [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
  [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
  [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
  [TAG_NAMES.FONT, TAG_ID.FONT],
  [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
  [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
  [TAG_NAMES.FORM, TAG_ID.FORM],
  [TAG_NAMES.FRAME, TAG_ID.FRAME],
  [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
  [TAG_NAMES.H1, TAG_ID.H1],
  [TAG_NAMES.H2, TAG_ID.H2],
  [TAG_NAMES.H3, TAG_ID.H3],
  [TAG_NAMES.H4, TAG_ID.H4],
  [TAG_NAMES.H5, TAG_ID.H5],
  [TAG_NAMES.H6, TAG_ID.H6],
  [TAG_NAMES.HEAD, TAG_ID.HEAD],
  [TAG_NAMES.HEADER, TAG_ID.HEADER],
  [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
  [TAG_NAMES.HR, TAG_ID.HR],
  [TAG_NAMES.HTML, TAG_ID.HTML],
  [TAG_NAMES.I, TAG_ID.I],
  [TAG_NAMES.IMG, TAG_ID.IMG],
  [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
  [TAG_NAMES.INPUT, TAG_ID.INPUT],
  [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
  [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
  [TAG_NAMES.LABEL, TAG_ID.LABEL],
  [TAG_NAMES.LI, TAG_ID.LI],
  [TAG_NAMES.LINK, TAG_ID.LINK],
  [TAG_NAMES.LISTING, TAG_ID.LISTING],
  [TAG_NAMES.MAIN, TAG_ID.MAIN],
  [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
  [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
  [TAG_NAMES.MATH, TAG_ID.MATH],
  [TAG_NAMES.MENU, TAG_ID.MENU],
  [TAG_NAMES.META, TAG_ID.META],
  [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
  [TAG_NAMES.MI, TAG_ID.MI],
  [TAG_NAMES.MO, TAG_ID.MO],
  [TAG_NAMES.MN, TAG_ID.MN],
  [TAG_NAMES.MS, TAG_ID.MS],
  [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
  [TAG_NAMES.NAV, TAG_ID.NAV],
  [TAG_NAMES.NOBR, TAG_ID.NOBR],
  [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
  [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
  [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
  [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
  [TAG_NAMES.OL, TAG_ID.OL],
  [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
  [TAG_NAMES.OPTION, TAG_ID.OPTION],
  [TAG_NAMES.P, TAG_ID.P],
  [TAG_NAMES.PARAM, TAG_ID.PARAM],
  [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
  [TAG_NAMES.PRE, TAG_ID.PRE],
  [TAG_NAMES.RB, TAG_ID.RB],
  [TAG_NAMES.RP, TAG_ID.RP],
  [TAG_NAMES.RT, TAG_ID.RT],
  [TAG_NAMES.RTC, TAG_ID.RTC],
  [TAG_NAMES.RUBY, TAG_ID.RUBY],
  [TAG_NAMES.S, TAG_ID.S],
  [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
  [TAG_NAMES.SECTION, TAG_ID.SECTION],
  [TAG_NAMES.SELECT, TAG_ID.SELECT],
  [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
  [TAG_NAMES.SMALL, TAG_ID.SMALL],
  [TAG_NAMES.SPAN, TAG_ID.SPAN],
  [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
  [TAG_NAMES.STRONG, TAG_ID.STRONG],
  [TAG_NAMES.STYLE, TAG_ID.STYLE],
  [TAG_NAMES.SUB, TAG_ID.SUB],
  [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
  [TAG_NAMES.SUP, TAG_ID.SUP],
  [TAG_NAMES.TABLE, TAG_ID.TABLE],
  [TAG_NAMES.TBODY, TAG_ID.TBODY],
  [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
  [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
  [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
  [TAG_NAMES.TD, TAG_ID.TD],
  [TAG_NAMES.TH, TAG_ID.TH],
  [TAG_NAMES.THEAD, TAG_ID.THEAD],
  [TAG_NAMES.TITLE, TAG_ID.TITLE],
  [TAG_NAMES.TR, TAG_ID.TR],
  [TAG_NAMES.TRACK, TAG_ID.TRACK],
  [TAG_NAMES.TT, TAG_ID.TT],
  [TAG_NAMES.U, TAG_ID.U],
  [TAG_NAMES.UL, TAG_ID.UL],
  [TAG_NAMES.SVG, TAG_ID.SVG],
  [TAG_NAMES.VAR, TAG_ID.VAR],
  [TAG_NAMES.WBR, TAG_ID.WBR],
  [TAG_NAMES.XMP, TAG_ID.XMP]
]);
function getTagID(t) {
  var n;
  return (n = TAG_NAME_TO_ID.get(t)) !== null && n !== void 0 ? n : TAG_ID.UNKNOWN;
}
const $ = TAG_ID, SPECIAL_ELEMENTS = {
  [NS.HTML]: /* @__PURE__ */ new Set([
    $.ADDRESS,
    $.APPLET,
    $.AREA,
    $.ARTICLE,
    $.ASIDE,
    $.BASE,
    $.BASEFONT,
    $.BGSOUND,
    $.BLOCKQUOTE,
    $.BODY,
    $.BR,
    $.BUTTON,
    $.CAPTION,
    $.CENTER,
    $.COL,
    $.COLGROUP,
    $.DD,
    $.DETAILS,
    $.DIR,
    $.DIV,
    $.DL,
    $.DT,
    $.EMBED,
    $.FIELDSET,
    $.FIGCAPTION,
    $.FIGURE,
    $.FOOTER,
    $.FORM,
    $.FRAME,
    $.FRAMESET,
    $.H1,
    $.H2,
    $.H3,
    $.H4,
    $.H5,
    $.H6,
    $.HEAD,
    $.HEADER,
    $.HGROUP,
    $.HR,
    $.HTML,
    $.IFRAME,
    $.IMG,
    $.INPUT,
    $.LI,
    $.LINK,
    $.LISTING,
    $.MAIN,
    $.MARQUEE,
    $.MENU,
    $.META,
    $.NAV,
    $.NOEMBED,
    $.NOFRAMES,
    $.NOSCRIPT,
    $.OBJECT,
    $.OL,
    $.P,
    $.PARAM,
    $.PLAINTEXT,
    $.PRE,
    $.SCRIPT,
    $.SECTION,
    $.SELECT,
    $.SOURCE,
    $.STYLE,
    $.SUMMARY,
    $.TABLE,
    $.TBODY,
    $.TD,
    $.TEMPLATE,
    $.TEXTAREA,
    $.TFOOT,
    $.TH,
    $.THEAD,
    $.TITLE,
    $.TR,
    $.TRACK,
    $.UL,
    $.WBR,
    $.XMP
  ]),
  [NS.MATHML]: /* @__PURE__ */ new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
  [NS.SVG]: /* @__PURE__ */ new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
  [NS.XLINK]: /* @__PURE__ */ new Set(),
  [NS.XML]: /* @__PURE__ */ new Set(),
  [NS.XMLNS]: /* @__PURE__ */ new Set()
};
function isNumberedHeader(t) {
  return t === $.H1 || t === $.H2 || t === $.H3 || t === $.H4 || t === $.H5 || t === $.H6;
}
const UNESCAPED_TEXT = /* @__PURE__ */ new Set([
  TAG_NAMES.STYLE,
  TAG_NAMES.SCRIPT,
  TAG_NAMES.XMP,
  TAG_NAMES.IFRAME,
  TAG_NAMES.NOEMBED,
  TAG_NAMES.NOFRAMES,
  TAG_NAMES.PLAINTEXT
]);
function hasUnescapedText(t, n) {
  return UNESCAPED_TEXT.has(t) || n && t === TAG_NAMES.NOSCRIPT;
}
const C1_CONTROLS_REFERENCE_REPLACEMENTS = /* @__PURE__ */ new Map([
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var State$1;
(function(t) {
  t[t.DATA = 0] = "DATA", t[t.RCDATA = 1] = "RCDATA", t[t.RAWTEXT = 2] = "RAWTEXT", t[t.SCRIPT_DATA = 3] = "SCRIPT_DATA", t[t.PLAINTEXT = 4] = "PLAINTEXT", t[t.TAG_OPEN = 5] = "TAG_OPEN", t[t.END_TAG_OPEN = 6] = "END_TAG_OPEN", t[t.TAG_NAME = 7] = "TAG_NAME", t[t.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", t[t.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", t[t.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", t[t.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", t[t.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", t[t.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", t[t.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", t[t.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", t[t.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", t[t.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", t[t.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", t[t.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", t[t.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", t[t.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", t[t.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", t[t.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", t[t.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", t[t.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", t[t.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", t[t.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", t[t.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", t[t.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", t[t.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", t[t.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", t[t.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", t[t.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", t[t.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", t[t.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", t[t.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", t[t.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", t[t.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", t[t.COMMENT_START = 42] = "COMMENT_START", t[t.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", t[t.COMMENT = 44] = "COMMENT", t[t.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", t[t.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", t[t.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", t[t.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", t[t.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", t[t.COMMENT_END = 50] = "COMMENT_END", t[t.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", t[t.DOCTYPE = 52] = "DOCTYPE", t[t.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", t[t.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", t[t.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", t[t.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", t[t.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", t[t.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", t[t.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", t[t.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", t[t.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", t[t.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", t[t.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", t[t.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", t[t.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", t[t.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", t[t.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", t[t.CDATA_SECTION = 68] = "CDATA_SECTION", t[t.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", t[t.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", t[t.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", t[t.NAMED_CHARACTER_REFERENCE = 72] = "NAMED_CHARACTER_REFERENCE", t[t.AMBIGUOUS_AMPERSAND = 73] = "AMBIGUOUS_AMPERSAND", t[t.NUMERIC_CHARACTER_REFERENCE = 74] = "NUMERIC_CHARACTER_REFERENCE", t[t.HEXADEMICAL_CHARACTER_REFERENCE_START = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START", t[t.HEXADEMICAL_CHARACTER_REFERENCE = 76] = "HEXADEMICAL_CHARACTER_REFERENCE", t[t.DECIMAL_CHARACTER_REFERENCE = 77] = "DECIMAL_CHARACTER_REFERENCE", t[t.NUMERIC_CHARACTER_REFERENCE_END = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
})(State$1 || (State$1 = {}));
const TokenizerMode = {
  DATA: State$1.DATA,
  RCDATA: State$1.RCDATA,
  RAWTEXT: State$1.RAWTEXT,
  SCRIPT_DATA: State$1.SCRIPT_DATA,
  PLAINTEXT: State$1.PLAINTEXT,
  CDATA_SECTION: State$1.CDATA_SECTION
};
function isAsciiDigit(t) {
  return t >= CODE_POINTS.DIGIT_0 && t <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(t) {
  return t >= CODE_POINTS.LATIN_CAPITAL_A && t <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(t) {
  return t >= CODE_POINTS.LATIN_SMALL_A && t <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(t) {
  return isAsciiLower(t) || isAsciiUpper(t);
}
function isAsciiAlphaNumeric(t) {
  return isAsciiLetter(t) || isAsciiDigit(t);
}
function isAsciiUpperHexDigit(t) {
  return t >= CODE_POINTS.LATIN_CAPITAL_A && t <= CODE_POINTS.LATIN_CAPITAL_F;
}
function isAsciiLowerHexDigit(t) {
  return t >= CODE_POINTS.LATIN_SMALL_A && t <= CODE_POINTS.LATIN_SMALL_F;
}
function isAsciiHexDigit(t) {
  return isAsciiDigit(t) || isAsciiUpperHexDigit(t) || isAsciiLowerHexDigit(t);
}
function toAsciiLower(t) {
  return t + 32;
}
function isWhitespace$1(t) {
  return t === CODE_POINTS.SPACE || t === CODE_POINTS.LINE_FEED || t === CODE_POINTS.TABULATION || t === CODE_POINTS.FORM_FEED;
}
function isEntityInAttributeInvalidEnd(t) {
  return t === CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric(t);
}
function isScriptDataDoubleEscapeSequenceEnd(t) {
  return isWhitespace$1(t) || t === CODE_POINTS.SOLIDUS || t === CODE_POINTS.GREATER_THAN_SIGN;
}
let Tokenizer$1 = class {
  constructor(n, s) {
    this.options = n, this.handler = s, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = State$1.DATA, this.returnState = State$1.DATA, this.charRefCode = -1, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new Preprocessor(s), this.currentLocation = this.getCurrentLocation(-1);
  }
  //Errors
  _err(n) {
    var s, a;
    (a = (s = this.handler).onParseError) === null || a === void 0 || a.call(s, this.preprocessor.getError(n));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(n) {
    return this.options.sourceCodeLocationInfo ? {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - n,
      startOffset: this.preprocessor.offset - n,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    } : null;
  }
  _runParsingLoop() {
    if (!this.inLoop) {
      for (this.inLoop = !0; this.active && !this.paused; ) {
        this.consumedAfterSnapshot = 0;
        const n = this._consume();
        this._ensureHibernation() || this._callState(n);
      }
      this.inLoop = !1;
    }
  }
  //API
  pause() {
    this.paused = !0;
  }
  resume(n) {
    if (!this.paused)
      throw new Error("Parser was already resumed");
    this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || n == null || n());
  }
  write(n, s, a) {
    this.active = !0, this.preprocessor.write(n, s), this._runParsingLoop(), this.paused || a == null || a();
  }
  insertHtmlAtCurrentPos(n) {
    this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(n), this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    return this.preprocessor.endOfChunkHit ? (this._unconsume(this.consumedAfterSnapshot), this.active = !1, !0) : !1;
  }
  //Consumption
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _unconsume(n) {
    this.consumedAfterSnapshot -= n, this.preprocessor.retreat(n);
  }
  _reconsumeInState(n, s) {
    this.state = n, this._callState(s);
  }
  _advanceBy(n) {
    this.consumedAfterSnapshot += n;
    for (let s = 0; s < n; s++)
      this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(n, s) {
    return this.preprocessor.startsWith(n, s) ? (this._advanceBy(n.length - 1), !0) : !1;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: TokenType.START_TAG,
      tagName: "",
      tagID: TAG_ID.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: TokenType.END_TAG,
      tagName: "",
      tagID: TAG_ID.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(n) {
    this.currentToken = {
      type: TokenType.COMMENT,
      data: "",
      location: this.getCurrentLocation(n)
    };
  }
  _createDoctypeToken(n) {
    this.currentToken = {
      type: TokenType.DOCTYPE,
      name: n,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(n, s) {
    this.currentCharacterToken = {
      type: n,
      chars: s,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(n) {
    this.currentAttr = {
      name: n,
      value: ""
    }, this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var n, s;
    const a = this.currentToken;
    if (getTokenAttr(a, this.currentAttr.name) === null) {
      if (a.attrs.push(this.currentAttr), a.location && this.currentLocation) {
        const i = (n = (s = a.location).attrs) !== null && n !== void 0 ? n : s.attrs = /* @__PURE__ */ Object.create(null);
        i[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
      }
    } else
      this._err(ERR.duplicateAttribute);
  }
  _leaveAttrValue() {
    this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
  }
  //Token emission
  prepareToken(n) {
    this._emitCurrentCharacterToken(n.location), this.currentToken = null, n.location && (n.location.endLine = this.preprocessor.line, n.location.endCol = this.preprocessor.col + 1, n.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const n = this.currentToken;
    this.prepareToken(n), n.tagID = getTagID(n.tagName), n.type === TokenType.START_TAG ? (this.lastStartTagName = n.tagName, this.handler.onStartTag(n)) : (n.attrs.length > 0 && this._err(ERR.endTagWithAttributes), n.selfClosing && this._err(ERR.endTagWithTrailingSolidus), this.handler.onEndTag(n)), this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(n) {
    this.prepareToken(n), this.handler.onComment(n), this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(n) {
    this.prepareToken(n), this.handler.onDoctype(n), this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(n) {
    if (this.currentCharacterToken) {
      switch (n && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = n.startLine, this.currentCharacterToken.location.endCol = n.startCol, this.currentCharacterToken.location.endOffset = n.startOffset), this.currentCharacterToken.type) {
        case TokenType.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case TokenType.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case TokenType.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const n = this.getCurrentLocation(0);
    n && (n.endLine = n.startLine, n.endCol = n.startCol, n.endOffset = n.startOffset), this._emitCurrentCharacterToken(n), this.handler.onEof({ type: TokenType.EOF, location: n }), this.active = !1;
  }
  //Characters emission
  //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(n, s) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type !== n)
        this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
      else {
        this.currentCharacterToken.chars += s;
        return;
      }
    this._createCharacterToken(n, s);
  }
  _emitCodePoint(n) {
    const s = isWhitespace$1(n) ? TokenType.WHITESPACE_CHARACTER : n === CODE_POINTS.NULL ? TokenType.NULL_CHARACTER : TokenType.CHARACTER;
    this._appendCharToCurrentCharacterToken(s, String.fromCodePoint(n));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(n) {
    this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, n);
  }
  // Character reference helpers
  _matchNamedCharacterReference(n) {
    let s = null, a = 0, i = !1;
    for (let o = 0, u = htmlDecodeTree[0]; o >= 0 && (o = determineBranch(htmlDecodeTree, u, o + 1, n), !(o < 0)); n = this._consume()) {
      a += 1, u = htmlDecodeTree[o];
      const c = u & BinTrieFlags.VALUE_LENGTH;
      if (c) {
        const l = (c >> 14) - 1;
        if (n !== CODE_POINTS.SEMICOLON && this._isCharacterReferenceInAttribute() && isEntityInAttributeInvalidEnd(this.preprocessor.peek(1)) ? (s = [CODE_POINTS.AMPERSAND], o += l) : (s = l === 0 ? [htmlDecodeTree[o] & ~BinTrieFlags.VALUE_LENGTH] : l === 1 ? [htmlDecodeTree[++o]] : [htmlDecodeTree[++o], htmlDecodeTree[++o]], a = 0, i = n !== CODE_POINTS.SEMICOLON), l === 0) {
          this._consume();
          break;
        }
      }
    }
    return this._unconsume(a), i && !this.preprocessor.endOfChunkHit && this._err(ERR.missingSemicolonAfterCharacterReference), this._unconsume(1), s;
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === State$1.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State$1.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State$1.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(n) {
    this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(n) : this._emitCodePoint(n);
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(n) {
    switch (this.state) {
      case State$1.DATA: {
        this._stateData(n);
        break;
      }
      case State$1.RCDATA: {
        this._stateRcdata(n);
        break;
      }
      case State$1.RAWTEXT: {
        this._stateRawtext(n);
        break;
      }
      case State$1.SCRIPT_DATA: {
        this._stateScriptData(n);
        break;
      }
      case State$1.PLAINTEXT: {
        this._statePlaintext(n);
        break;
      }
      case State$1.TAG_OPEN: {
        this._stateTagOpen(n);
        break;
      }
      case State$1.END_TAG_OPEN: {
        this._stateEndTagOpen(n);
        break;
      }
      case State$1.TAG_NAME: {
        this._stateTagName(n);
        break;
      }
      case State$1.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(n);
        break;
      }
      case State$1.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(n);
        break;
      }
      case State$1.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(n);
        break;
      }
      case State$1.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(n);
        break;
      }
      case State$1.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(n);
        break;
      }
      case State$1.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(n);
        break;
      }
      case State$1.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(n);
        break;
      }
      case State$1.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(n);
        break;
      }
      case State$1.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(n);
        break;
      }
      case State$1.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(n);
        break;
      }
      case State$1.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(n);
        break;
      }
      case State$1.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(n);
        break;
      }
      case State$1.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(n);
        break;
      }
      case State$1.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(n);
        break;
      }
      case State$1.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(n);
        break;
      }
      case State$1.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(n);
        break;
      }
      case State$1.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(n);
        break;
      }
      case State$1.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(n);
        break;
      }
      case State$1.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(n);
        break;
      }
      case State$1.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(n);
        break;
      }
      case State$1.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(n);
        break;
      }
      case State$1.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(n);
        break;
      }
      case State$1.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(n);
        break;
      }
      case State$1.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(n);
        break;
      }
      case State$1.ATTRIBUTE_NAME: {
        this._stateAttributeName(n);
        break;
      }
      case State$1.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(n);
        break;
      }
      case State$1.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(n);
        break;
      }
      case State$1.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(n);
        break;
      }
      case State$1.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(n);
        break;
      }
      case State$1.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(n);
        break;
      }
      case State$1.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(n);
        break;
      }
      case State$1.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(n);
        break;
      }
      case State$1.BOGUS_COMMENT: {
        this._stateBogusComment(n);
        break;
      }
      case State$1.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(n);
        break;
      }
      case State$1.COMMENT_START: {
        this._stateCommentStart(n);
        break;
      }
      case State$1.COMMENT_START_DASH: {
        this._stateCommentStartDash(n);
        break;
      }
      case State$1.COMMENT: {
        this._stateComment(n);
        break;
      }
      case State$1.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(n);
        break;
      }
      case State$1.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(n);
        break;
      }
      case State$1.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(n);
        break;
      }
      case State$1.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(n);
        break;
      }
      case State$1.COMMENT_END_DASH: {
        this._stateCommentEndDash(n);
        break;
      }
      case State$1.COMMENT_END: {
        this._stateCommentEnd(n);
        break;
      }
      case State$1.COMMENT_END_BANG: {
        this._stateCommentEndBang(n);
        break;
      }
      case State$1.DOCTYPE: {
        this._stateDoctype(n);
        break;
      }
      case State$1.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(n);
        break;
      }
      case State$1.DOCTYPE_NAME: {
        this._stateDoctypeName(n);
        break;
      }
      case State$1.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(n);
        break;
      }
      case State$1.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(n);
        break;
      }
      case State$1.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(n);
        break;
      }
      case State$1.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(n);
        break;
      }
      case State$1.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(n);
        break;
      }
      case State$1.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(n);
        break;
      }
      case State$1.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(n);
        break;
      }
      case State$1.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(n);
        break;
      }
      case State$1.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(n);
        break;
      }
      case State$1.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(n);
        break;
      }
      case State$1.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(n);
        break;
      }
      case State$1.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(n);
        break;
      }
      case State$1.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(n);
        break;
      }
      case State$1.CDATA_SECTION: {
        this._stateCdataSection(n);
        break;
      }
      case State$1.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(n);
        break;
      }
      case State$1.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(n);
        break;
      }
      case State$1.CHARACTER_REFERENCE: {
        this._stateCharacterReference(n);
        break;
      }
      case State$1.NAMED_CHARACTER_REFERENCE: {
        this._stateNamedCharacterReference(n);
        break;
      }
      case State$1.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(n);
        break;
      }
      case State$1.NUMERIC_CHARACTER_REFERENCE: {
        this._stateNumericCharacterReference(n);
        break;
      }
      case State$1.HEXADEMICAL_CHARACTER_REFERENCE_START: {
        this._stateHexademicalCharacterReferenceStart(n);
        break;
      }
      case State$1.HEXADEMICAL_CHARACTER_REFERENCE: {
        this._stateHexademicalCharacterReference(n);
        break;
      }
      case State$1.DECIMAL_CHARACTER_REFERENCE: {
        this._stateDecimalCharacterReference(n);
        break;
      }
      case State$1.NUMERIC_CHARACTER_REFERENCE_END: {
        this._stateNumericCharacterReferenceEnd(n);
        break;
      }
      default:
        throw new Error("Unknown state");
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(n) {
    switch (n) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.TAG_OPEN;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State$1.DATA, this.state = State$1.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this._emitCodePoint(n);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(n);
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(n) {
    switch (n) {
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State$1.RCDATA, this.state = State$1.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(n);
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(n) {
    switch (n) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(n);
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(n) {
    switch (n) {
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(n);
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(n) {
    switch (n) {
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(n);
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(n) {
    if (isAsciiLetter(n))
      this._createStartTagToken(), this.state = State$1.TAG_NAME, this._stateTagName(n);
    else
      switch (n) {
        case CODE_POINTS.EXCLAMATION_MARK: {
          this.state = State$1.MARKUP_DECLARATION_OPEN;
          break;
        }
        case CODE_POINTS.SOLIDUS: {
          this.state = State$1.END_TAG_OPEN;
          break;
        }
        case CODE_POINTS.QUESTION_MARK: {
          this._err(ERR.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = State$1.BOGUS_COMMENT, this._stateBogusComment(n);
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
          break;
        }
        default:
          this._err(ERR.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = State$1.DATA, this._stateData(n);
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(n) {
    if (isAsciiLetter(n))
      this._createEndTagToken(), this.state = State$1.TAG_NAME, this._stateTagName(n);
    else
      switch (n) {
        case CODE_POINTS.GREATER_THAN_SIGN: {
          this._err(ERR.missingEndTagName), this.state = State$1.DATA;
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
          break;
        }
        default:
          this._err(ERR.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = State$1.BOGUS_COMMENT, this._stateBogusComment(n);
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State$1.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.SOLIDUS: {
        this.state = State$1.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.DATA, this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), s.tagName += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        s.tagName += String.fromCodePoint(isAsciiUpper(n) ? toAsciiLower(n) : n);
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(n) {
    n === CODE_POINTS.SOLIDUS ? this.state = State$1.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = State$1.RCDATA, this._stateRcdata(n));
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(n) {
    isAsciiLetter(n) ? (this.state = State$1.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(n)) : (this._emitChars("</"), this.state = State$1.RCDATA, this._stateRcdata(n));
  }
  handleSpecialEndTag(n) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
      return !this._ensureHibernation();
    this._createEndTagToken();
    const s = this.currentToken;
    switch (s.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        return this._advanceBy(this.lastStartTagName.length), this.state = State$1.BEFORE_ATTRIBUTE_NAME, !1;
      case CODE_POINTS.SOLIDUS:
        return this._advanceBy(this.lastStartTagName.length), this.state = State$1.SELF_CLOSING_START_TAG, !1;
      case CODE_POINTS.GREATER_THAN_SIGN:
        return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = State$1.DATA, !1;
      default:
        return !this._ensureHibernation();
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(n) {
    this.handleSpecialEndTag(n) && (this._emitChars("</"), this.state = State$1.RCDATA, this._stateRcdata(n));
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(n) {
    n === CODE_POINTS.SOLIDUS ? this.state = State$1.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = State$1.RAWTEXT, this._stateRawtext(n));
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(n) {
    isAsciiLetter(n) ? (this.state = State$1.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(n)) : (this._emitChars("</"), this.state = State$1.RAWTEXT, this._stateRawtext(n));
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(n) {
    this.handleSpecialEndTag(n) && (this._emitChars("</"), this.state = State$1.RAWTEXT, this._stateRawtext(n));
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(n) {
    switch (n) {
      case CODE_POINTS.SOLIDUS: {
        this.state = State$1.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case CODE_POINTS.EXCLAMATION_MARK: {
        this.state = State$1.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"), this.state = State$1.SCRIPT_DATA, this._stateScriptData(n);
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(n) {
    isAsciiLetter(n) ? (this.state = State$1.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(n)) : (this._emitChars("</"), this.state = State$1.SCRIPT_DATA, this._stateScriptData(n));
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(n) {
    this.handleSpecialEndTag(n) && (this._emitChars("</"), this.state = State$1.SCRIPT_DATA, this._stateScriptData(n));
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(n) {
    n === CODE_POINTS.HYPHEN_MINUS ? (this.state = State$1.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = State$1.SCRIPT_DATA, this._stateScriptData(n));
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(n) {
    n === CODE_POINTS.HYPHEN_MINUS ? (this.state = State$1.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = State$1.SCRIPT_DATA, this._stateScriptData(n));
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(n) {
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State$1.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(n);
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(n) {
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State$1.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this.state = State$1.SCRIPT_DATA_ESCAPED, this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = State$1.SCRIPT_DATA_ESCAPED, this._emitCodePoint(n);
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(n) {
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this.state = State$1.SCRIPT_DATA_ESCAPED, this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = State$1.SCRIPT_DATA_ESCAPED, this._emitCodePoint(n);
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(n) {
    n === CODE_POINTS.SOLIDUS ? this.state = State$1.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : isAsciiLetter(n) ? (this._emitChars("<"), this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(n)) : (this._emitChars("<"), this.state = State$1.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(n));
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(n) {
    isAsciiLetter(n) ? (this.state = State$1.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(n)) : (this._emitChars("</"), this.state = State$1.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(n));
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(n) {
    this.handleSpecialEndTag(n) && (this._emitChars("</"), this.state = State$1.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(n));
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(n) {
    if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, !1) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
      this._emitCodePoint(n);
      for (let s = 0; s < SEQUENCES.SCRIPT.length; s++)
        this._emitCodePoint(this._consume());
      this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else this._ensureHibernation() || (this.state = State$1.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(n));
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(n) {
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(n);
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(n) {
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(n);
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(n) {
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(REPLACEMENT_CHARACTER);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(n);
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(n) {
    n === CODE_POINTS.SOLIDUS ? (this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(n));
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(n) {
    if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, !1) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
      this._emitCodePoint(n);
      for (let s = 0; s < SEQUENCES.SCRIPT.length; s++)
        this._emitCodePoint(this._consume());
      this.state = State$1.SCRIPT_DATA_ESCAPED;
    } else this._ensureHibernation() || (this.state = State$1.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(n));
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(n) {
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        break;
      case CODE_POINTS.SOLIDUS:
      case CODE_POINTS.GREATER_THAN_SIGN:
      case CODE_POINTS.EOF: {
        this.state = State$1.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(n);
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this._err(ERR.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = State$1.ATTRIBUTE_NAME;
        break;
      }
      default:
        this._createAttr(""), this.state = State$1.ATTRIBUTE_NAME, this._stateAttributeName(n);
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(n) {
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
      case CODE_POINTS.SOLIDUS:
      case CODE_POINTS.GREATER_THAN_SIGN:
      case CODE_POINTS.EOF: {
        this._leaveAttrName(), this.state = State$1.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(n);
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this._leaveAttrName(), this.state = State$1.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK:
      case CODE_POINTS.APOSTROPHE:
      case CODE_POINTS.LESS_THAN_SIGN: {
        this._err(ERR.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(n);
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this.currentAttr.name += REPLACEMENT_CHARACTER;
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(isAsciiUpper(n) ? toAsciiLower(n) : n);
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(n) {
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        break;
      case CODE_POINTS.SOLIDUS: {
        this.state = State$1.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.EQUALS_SIGN: {
        this.state = State$1.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.DATA, this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""), this.state = State$1.ATTRIBUTE_NAME, this._stateAttributeName(n);
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(n) {
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        break;
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State$1.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this.state = State$1.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingAttributeValue), this.state = State$1.DATA, this.emitCurrentTagToken();
        break;
      }
      default:
        this.state = State$1.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(n);
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(n) {
    switch (n) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State$1.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State$1.ATTRIBUTE_VALUE_DOUBLE_QUOTED, this.state = State$1.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(n);
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(n) {
    switch (n) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State$1.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State$1.ATTRIBUTE_VALUE_SINGLE_QUOTED, this.state = State$1.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(n);
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(n) {
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this._leaveAttrValue(), this.state = State$1.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.AMPERSAND: {
        this.returnState = State$1.ATTRIBUTE_VALUE_UNQUOTED, this.state = State$1.CHARACTER_REFERENCE;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = State$1.DATA, this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK:
      case CODE_POINTS.APOSTROPHE:
      case CODE_POINTS.LESS_THAN_SIGN:
      case CODE_POINTS.EQUALS_SIGN:
      case CODE_POINTS.GRAVE_ACCENT: {
        this._err(ERR.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(n);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(n);
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(n) {
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this._leaveAttrValue(), this.state = State$1.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case CODE_POINTS.SOLIDUS: {
        this._leaveAttrValue(), this.state = State$1.SELF_CLOSING_START_TAG;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = State$1.DATA, this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.missingWhitespaceBetweenAttributes), this.state = State$1.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(n);
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(n) {
    switch (n) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        const s = this.currentToken;
        s.selfClosing = !0, this.state = State$1.DATA, this.emitCurrentTagToken();
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.unexpectedSolidusInTag), this.state = State$1.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(n);
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.DATA, this.emitCurrentComment(s);
        break;
      }
      case CODE_POINTS.EOF: {
        this.emitCurrentComment(s), this._emitEOFToken();
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), s.data += REPLACEMENT_CHARACTER;
        break;
      }
      default:
        s.data += String.fromCodePoint(n);
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(n) {
    this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, !0) ? (this._createCommentToken(SEQUENCES.DASH_DASH.length + 1), this.state = State$1.COMMENT_START) : this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1), this.state = State$1.DOCTYPE) : this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, !0) ? this.inForeignNode ? this.state = State$1.CDATA_SECTION : (this._err(ERR.cdataInHtmlContent), this._createCommentToken(SEQUENCES.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = State$1.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(ERR.incorrectlyOpenedComment), this._createCommentToken(2), this.state = State$1.BOGUS_COMMENT, this._stateBogusComment(n));
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(n) {
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State$1.COMMENT_START_DASH;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptClosingOfEmptyComment), this.state = State$1.DATA;
        const s = this.currentToken;
        this.emitCurrentComment(s);
        break;
      }
      default:
        this.state = State$1.COMMENT, this._stateComment(n);
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State$1.COMMENT_END;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptClosingOfEmptyComment), this.state = State$1.DATA, this.emitCurrentComment(s);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment), this.emitCurrentComment(s), this._emitEOFToken();
        break;
      }
      default:
        s.data += "-", this.state = State$1.COMMENT, this._stateComment(n);
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State$1.COMMENT_END_DASH;
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        s.data += "<", this.state = State$1.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), s.data += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment), this.emitCurrentComment(s), this._emitEOFToken();
        break;
      }
      default:
        s.data += String.fromCodePoint(n);
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.EXCLAMATION_MARK: {
        s.data += "!", this.state = State$1.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case CODE_POINTS.LESS_THAN_SIGN: {
        s.data += "<";
        break;
      }
      default:
        this.state = State$1.COMMENT, this._stateComment(n);
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(n) {
    n === CODE_POINTS.HYPHEN_MINUS ? this.state = State$1.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = State$1.COMMENT, this._stateComment(n));
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(n) {
    n === CODE_POINTS.HYPHEN_MINUS ? this.state = State$1.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = State$1.COMMENT_END_DASH, this._stateCommentEndDash(n));
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(n) {
    n !== CODE_POINTS.GREATER_THAN_SIGN && n !== CODE_POINTS.EOF && this._err(ERR.nestedComment), this.state = State$1.COMMENT_END, this._stateCommentEnd(n);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        this.state = State$1.COMMENT_END;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment), this.emitCurrentComment(s), this._emitEOFToken();
        break;
      }
      default:
        s.data += "-", this.state = State$1.COMMENT, this._stateComment(n);
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.DATA, this.emitCurrentComment(s);
        break;
      }
      case CODE_POINTS.EXCLAMATION_MARK: {
        this.state = State$1.COMMENT_END_BANG;
        break;
      }
      case CODE_POINTS.HYPHEN_MINUS: {
        s.data += "-";
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment), this.emitCurrentComment(s), this._emitEOFToken();
        break;
      }
      default:
        s.data += "--", this.state = State$1.COMMENT, this._stateComment(n);
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.HYPHEN_MINUS: {
        s.data += "--!", this.state = State$1.COMMENT_END_DASH;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.incorrectlyClosedComment), this.state = State$1.DATA, this.emitCurrentComment(s);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInComment), this.emitCurrentComment(s), this._emitEOFToken();
        break;
      }
      default:
        s.data += "--!", this.state = State$1.COMMENT, this._stateComment(n);
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(n) {
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State$1.BEFORE_DOCTYPE_NAME;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(n);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), this._createDoctypeToken(null);
        const s = this.currentToken;
        s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.missingWhitespaceBeforeDoctypeName), this.state = State$1.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(n);
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(n) {
    if (isAsciiUpper(n))
      this._createDoctypeToken(String.fromCharCode(toAsciiLower(n))), this.state = State$1.DOCTYPE_NAME;
    else
      switch (n) {
        case CODE_POINTS.SPACE:
        case CODE_POINTS.LINE_FEED:
        case CODE_POINTS.TABULATION:
        case CODE_POINTS.FORM_FEED:
          break;
        case CODE_POINTS.NULL: {
          this._err(ERR.unexpectedNullCharacter), this._createDoctypeToken(REPLACEMENT_CHARACTER), this.state = State$1.DOCTYPE_NAME;
          break;
        }
        case CODE_POINTS.GREATER_THAN_SIGN: {
          this._err(ERR.missingDoctypeName), this._createDoctypeToken(null);
          const s = this.currentToken;
          s.forceQuirks = !0, this.emitCurrentDoctype(s), this.state = State$1.DATA;
          break;
        }
        case CODE_POINTS.EOF: {
          this._err(ERR.eofInDoctype), this._createDoctypeToken(null);
          const s = this.currentToken;
          s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(n)), this.state = State$1.DOCTYPE_NAME;
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State$1.AFTER_DOCTYPE_NAME;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.DATA, this.emitCurrentDoctype(s);
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), s.name += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        s.name += String.fromCodePoint(isAsciiUpper(n) ? toAsciiLower(n) : n);
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        break;
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.DATA, this.emitCurrentDoctype(s);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, !1) ? this.state = State$1.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, !1) ? this.state = State$1.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(ERR.invalidCharacterSequenceAfterDoctypeName), s.forceQuirks = !0, this.state = State$1.BOGUS_DOCTYPE, this._stateBogusDoctype(n));
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State$1.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword), s.publicId = "", this.state = State$1.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword), s.publicId = "", this.state = State$1.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypePublicIdentifier), s.forceQuirks = !0, this.state = State$1.DATA, this.emitCurrentDoctype(s);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier), s.forceQuirks = !0, this.state = State$1.BOGUS_DOCTYPE, this._stateBogusDoctype(n);
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        break;
      case CODE_POINTS.QUOTATION_MARK: {
        s.publicId = "", this.state = State$1.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        s.publicId = "", this.state = State$1.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypePublicIdentifier), s.forceQuirks = !0, this.state = State$1.DATA, this.emitCurrentDoctype(s);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier), s.forceQuirks = !0, this.state = State$1.BOGUS_DOCTYPE, this._stateBogusDoctype(n);
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State$1.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), s.publicId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypePublicIdentifier), s.forceQuirks = !0, this.emitCurrentDoctype(s), this.state = State$1.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        s.publicId += String.fromCodePoint(n);
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State$1.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), s.publicId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypePublicIdentifier), s.forceQuirks = !0, this.emitCurrentDoctype(s), this.state = State$1.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        s.publicId += String.fromCodePoint(n);
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State$1.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.DATA, this.emitCurrentDoctype(s);
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), s.systemId = "", this.state = State$1.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), s.systemId = "", this.state = State$1.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), s.forceQuirks = !0, this.state = State$1.BOGUS_DOCTYPE, this._stateBogusDoctype(n);
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        break;
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(s), this.state = State$1.DATA;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        s.systemId = "", this.state = State$1.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        s.systemId = "", this.state = State$1.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), s.forceQuirks = !0, this.state = State$1.BOGUS_DOCTYPE, this._stateBogusDoctype(n);
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED: {
        this.state = State$1.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.QUOTATION_MARK: {
        this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword), s.systemId = "", this.state = State$1.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword), s.systemId = "", this.state = State$1.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypeSystemIdentifier), s.forceQuirks = !0, this.state = State$1.DATA, this.emitCurrentDoctype(s);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), s.forceQuirks = !0, this.state = State$1.BOGUS_DOCTYPE, this._stateBogusDoctype(n);
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        break;
      case CODE_POINTS.QUOTATION_MARK: {
        s.systemId = "", this.state = State$1.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case CODE_POINTS.APOSTROPHE: {
        s.systemId = "", this.state = State$1.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.missingDoctypeSystemIdentifier), s.forceQuirks = !0, this.state = State$1.DATA, this.emitCurrentDoctype(s);
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), s.forceQuirks = !0, this.state = State$1.BOGUS_DOCTYPE, this._stateBogusDoctype(n);
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.QUOTATION_MARK: {
        this.state = State$1.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), s.systemId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypeSystemIdentifier), s.forceQuirks = !0, this.emitCurrentDoctype(s), this.state = State$1.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        s.systemId += String.fromCodePoint(n);
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.APOSTROPHE: {
        this.state = State$1.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter), s.systemId += REPLACEMENT_CHARACTER;
        break;
      }
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(ERR.abruptDoctypeSystemIdentifier), s.forceQuirks = !0, this.emitCurrentDoctype(s), this.state = State$1.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        s.systemId += String.fromCodePoint(n);
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.SPACE:
      case CODE_POINTS.LINE_FEED:
      case CODE_POINTS.TABULATION:
      case CODE_POINTS.FORM_FEED:
        break;
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(s), this.state = State$1.DATA;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInDoctype), s.forceQuirks = !0, this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
      default:
        this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = State$1.BOGUS_DOCTYPE, this._stateBogusDoctype(n);
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(n) {
    const s = this.currentToken;
    switch (n) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(s), this.state = State$1.DATA;
        break;
      }
      case CODE_POINTS.NULL: {
        this._err(ERR.unexpectedNullCharacter);
        break;
      }
      case CODE_POINTS.EOF: {
        this.emitCurrentDoctype(s), this._emitEOFToken();
        break;
      }
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(n) {
    switch (n) {
      case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
        this.state = State$1.CDATA_SECTION_BRACKET;
        break;
      }
      case CODE_POINTS.EOF: {
        this._err(ERR.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(n);
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(n) {
    n === CODE_POINTS.RIGHT_SQUARE_BRACKET ? this.state = State$1.CDATA_SECTION_END : (this._emitChars("]"), this.state = State$1.CDATA_SECTION, this._stateCdataSection(n));
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(n) {
    switch (n) {
      case CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = State$1.DATA;
        break;
      }
      case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"), this.state = State$1.CDATA_SECTION, this._stateCdataSection(n);
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference(n) {
    n === CODE_POINTS.NUMBER_SIGN ? this.state = State$1.NUMERIC_CHARACTER_REFERENCE : isAsciiAlphaNumeric(n) ? (this.state = State$1.NAMED_CHARACTER_REFERENCE, this._stateNamedCharacterReference(n)) : (this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND), this._reconsumeInState(this.returnState, n));
  }
  // Named character reference state
  //------------------------------------------------------------------
  _stateNamedCharacterReference(n) {
    const s = this._matchNamedCharacterReference(n);
    if (!this._ensureHibernation()) if (s) {
      for (let a = 0; a < s.length; a++)
        this._flushCodePointConsumedAsCharacterReference(s[a]);
      this.state = this.returnState;
    } else
      this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND), this.state = State$1.AMBIGUOUS_AMPERSAND;
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(n) {
    isAsciiAlphaNumeric(n) ? this._flushCodePointConsumedAsCharacterReference(n) : (n === CODE_POINTS.SEMICOLON && this._err(ERR.unknownNamedCharacterReference), this._reconsumeInState(this.returnState, n));
  }
  // Numeric character reference state
  //------------------------------------------------------------------
  _stateNumericCharacterReference(n) {
    this.charRefCode = 0, n === CODE_POINTS.LATIN_SMALL_X || n === CODE_POINTS.LATIN_CAPITAL_X ? this.state = State$1.HEXADEMICAL_CHARACTER_REFERENCE_START : isAsciiDigit(n) ? (this.state = State$1.DECIMAL_CHARACTER_REFERENCE, this._stateDecimalCharacterReference(n)) : (this._err(ERR.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.NUMBER_SIGN), this._reconsumeInState(this.returnState, n));
  }
  // Hexademical character reference start state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReferenceStart(n) {
    isAsciiHexDigit(n) ? (this.state = State$1.HEXADEMICAL_CHARACTER_REFERENCE, this._stateHexademicalCharacterReference(n)) : (this._err(ERR.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.NUMBER_SIGN), this._unconsume(2), this.state = this.returnState);
  }
  // Hexademical character reference state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReference(n) {
    isAsciiUpperHexDigit(n) ? this.charRefCode = this.charRefCode * 16 + n - 55 : isAsciiLowerHexDigit(n) ? this.charRefCode = this.charRefCode * 16 + n - 87 : isAsciiDigit(n) ? this.charRefCode = this.charRefCode * 16 + n - 48 : n === CODE_POINTS.SEMICOLON ? this.state = State$1.NUMERIC_CHARACTER_REFERENCE_END : (this._err(ERR.missingSemicolonAfterCharacterReference), this.state = State$1.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(n));
  }
  // Decimal character reference state
  //------------------------------------------------------------------
  _stateDecimalCharacterReference(n) {
    isAsciiDigit(n) ? this.charRefCode = this.charRefCode * 10 + n - 48 : n === CODE_POINTS.SEMICOLON ? this.state = State$1.NUMERIC_CHARACTER_REFERENCE_END : (this._err(ERR.missingSemicolonAfterCharacterReference), this.state = State$1.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(n));
  }
  // Numeric character reference end state
  //------------------------------------------------------------------
  _stateNumericCharacterReferenceEnd(n) {
    if (this.charRefCode === CODE_POINTS.NULL)
      this._err(ERR.nullCharacterReference), this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
    else if (this.charRefCode > 1114111)
      this._err(ERR.characterReferenceOutsideUnicodeRange), this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
    else if (isSurrogate(this.charRefCode))
      this._err(ERR.surrogateCharacterReference), this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
    else if (isUndefinedCodePoint(this.charRefCode))
      this._err(ERR.noncharacterCharacterReference);
    else if (isControlCodePoint(this.charRefCode) || this.charRefCode === CODE_POINTS.CARRIAGE_RETURN) {
      this._err(ERR.controlCharacterReference);
      const s = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
      s !== void 0 && (this.charRefCode = s);
    }
    this._flushCodePointConsumedAsCharacterReference(this.charRefCode), this._reconsumeInState(this.returnState, n);
  }
};
const IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([TAG_ID.DD, TAG_ID.DT, TAG_ID.LI, TAG_ID.OPTGROUP, TAG_ID.OPTION, TAG_ID.P, TAG_ID.RB, TAG_ID.RP, TAG_ID.RT, TAG_ID.RTC]), IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
  ...IMPLICIT_END_TAG_REQUIRED,
  TAG_ID.CAPTION,
  TAG_ID.COLGROUP,
  TAG_ID.TBODY,
  TAG_ID.TD,
  TAG_ID.TFOOT,
  TAG_ID.TH,
  TAG_ID.THEAD,
  TAG_ID.TR
]), SCOPING_ELEMENT_NS = /* @__PURE__ */ new Map([
  [TAG_ID.APPLET, NS.HTML],
  [TAG_ID.CAPTION, NS.HTML],
  [TAG_ID.HTML, NS.HTML],
  [TAG_ID.MARQUEE, NS.HTML],
  [TAG_ID.OBJECT, NS.HTML],
  [TAG_ID.TABLE, NS.HTML],
  [TAG_ID.TD, NS.HTML],
  [TAG_ID.TEMPLATE, NS.HTML],
  [TAG_ID.TH, NS.HTML],
  [TAG_ID.ANNOTATION_XML, NS.MATHML],
  [TAG_ID.MI, NS.MATHML],
  [TAG_ID.MN, NS.MATHML],
  [TAG_ID.MO, NS.MATHML],
  [TAG_ID.MS, NS.MATHML],
  [TAG_ID.MTEXT, NS.MATHML],
  [TAG_ID.DESC, NS.SVG],
  [TAG_ID.FOREIGN_OBJECT, NS.SVG],
  [TAG_ID.TITLE, NS.SVG]
]), NAMED_HEADERS = [TAG_ID.H1, TAG_ID.H2, TAG_ID.H3, TAG_ID.H4, TAG_ID.H5, TAG_ID.H6], TABLE_ROW_CONTEXT = [TAG_ID.TR, TAG_ID.TEMPLATE, TAG_ID.HTML], TABLE_BODY_CONTEXT = [TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TEMPLATE, TAG_ID.HTML], TABLE_CONTEXT = [TAG_ID.TABLE, TAG_ID.TEMPLATE, TAG_ID.HTML], TABLE_CELLS = [TAG_ID.TD, TAG_ID.TH];
class OpenElementStack {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(n, s, a) {
    this.treeAdapter = s, this.handler = a, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = TAG_ID.UNKNOWN, this.current = n;
  }
  //Index of element
  _indexOf(n) {
    return this.items.lastIndexOf(n, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(n, s) {
    this.stackTop++, this.items[this.stackTop] = n, this.current = n, this.tagIDs[this.stackTop] = s, this.currentTagId = s, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(n, s, !0);
  }
  pop() {
    const n = this.current;
    this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(n, !0);
  }
  replace(n, s) {
    const a = this._indexOf(n);
    this.items[a] = s, a === this.stackTop && (this.current = s);
  }
  insertAfter(n, s, a) {
    const i = this._indexOf(n) + 1;
    this.items.splice(i, 0, s), this.tagIDs.splice(i, 0, a), this.stackTop++, i === this.stackTop && this._updateCurrentElement(), this.handler.onItemPush(this.current, this.currentTagId, i === this.stackTop);
  }
  popUntilTagNamePopped(n) {
    let s = this.stackTop + 1;
    do
      s = this.tagIDs.lastIndexOf(n, s - 1);
    while (s > 0 && this.treeAdapter.getNamespaceURI(this.items[s]) !== NS.HTML);
    this.shortenToLength(s < 0 ? 0 : s);
  }
  shortenToLength(n) {
    for (; this.stackTop >= n; ) {
      const s = this.current;
      this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(s, this.stackTop < n);
    }
  }
  popUntilElementPopped(n) {
    const s = this._indexOf(n);
    this.shortenToLength(s < 0 ? 0 : s);
  }
  popUntilPopped(n, s) {
    const a = this._indexOfTagNames(n, s);
    this.shortenToLength(a < 0 ? 0 : a);
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(NAMED_HEADERS, NS.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(TABLE_CELLS, NS.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0, this.shortenToLength(1);
  }
  _indexOfTagNames(n, s) {
    for (let a = this.stackTop; a >= 0; a--)
      if (n.includes(this.tagIDs[a]) && this.treeAdapter.getNamespaceURI(this.items[a]) === s)
        return a;
    return -1;
  }
  clearBackTo(n, s) {
    const a = this._indexOfTagNames(n, s);
    this.shortenToLength(a + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(TABLE_CONTEXT, NS.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
  }
  remove(n) {
    const s = this._indexOf(n);
    s >= 0 && (s === this.stackTop ? this.pop() : (this.items.splice(s, 1), this.tagIDs.splice(s, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(n, !1)));
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
  }
  contains(n) {
    return this._indexOf(n) > -1;
  }
  getCommonAncestor(n) {
    const s = this._indexOf(n) - 1;
    return s >= 0 ? this.items[s] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
  }
  //Element in scope
  hasInScope(n) {
    for (let s = this.stackTop; s >= 0; s--) {
      const a = this.tagIDs[s], i = this.treeAdapter.getNamespaceURI(this.items[s]);
      if (a === n && i === NS.HTML)
        return !0;
      if (SCOPING_ELEMENT_NS.get(a) === i)
        return !1;
    }
    return !0;
  }
  hasNumberedHeaderInScope() {
    for (let n = this.stackTop; n >= 0; n--) {
      const s = this.tagIDs[n], a = this.treeAdapter.getNamespaceURI(this.items[n]);
      if (isNumberedHeader(s) && a === NS.HTML)
        return !0;
      if (SCOPING_ELEMENT_NS.get(s) === a)
        return !1;
    }
    return !0;
  }
  hasInListItemScope(n) {
    for (let s = this.stackTop; s >= 0; s--) {
      const a = this.tagIDs[s], i = this.treeAdapter.getNamespaceURI(this.items[s]);
      if (a === n && i === NS.HTML)
        return !0;
      if ((a === TAG_ID.UL || a === TAG_ID.OL) && i === NS.HTML || SCOPING_ELEMENT_NS.get(a) === i)
        return !1;
    }
    return !0;
  }
  hasInButtonScope(n) {
    for (let s = this.stackTop; s >= 0; s--) {
      const a = this.tagIDs[s], i = this.treeAdapter.getNamespaceURI(this.items[s]);
      if (a === n && i === NS.HTML)
        return !0;
      if (a === TAG_ID.BUTTON && i === NS.HTML || SCOPING_ELEMENT_NS.get(a) === i)
        return !1;
    }
    return !0;
  }
  hasInTableScope(n) {
    for (let s = this.stackTop; s >= 0; s--) {
      const a = this.tagIDs[s];
      if (this.treeAdapter.getNamespaceURI(this.items[s]) === NS.HTML) {
        if (a === n)
          return !0;
        if (a === TAG_ID.TABLE || a === TAG_ID.TEMPLATE || a === TAG_ID.HTML)
          return !1;
      }
    }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let n = this.stackTop; n >= 0; n--) {
      const s = this.tagIDs[n];
      if (this.treeAdapter.getNamespaceURI(this.items[n]) === NS.HTML) {
        if (s === TAG_ID.TBODY || s === TAG_ID.THEAD || s === TAG_ID.TFOOT)
          return !0;
        if (s === TAG_ID.TABLE || s === TAG_ID.HTML)
          return !1;
      }
    }
    return !0;
  }
  hasInSelectScope(n) {
    for (let s = this.stackTop; s >= 0; s--) {
      const a = this.tagIDs[s];
      if (this.treeAdapter.getNamespaceURI(this.items[s]) === NS.HTML) {
        if (a === n)
          return !0;
        if (a !== TAG_ID.OPTION && a !== TAG_ID.OPTGROUP)
          return !1;
      }
    }
    return !0;
  }
  //Implied end tags
  generateImpliedEndTags() {
    for (; IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    for (; IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsWithExclusion(n) {
    for (; this.currentTagId !== n && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId); )
      this.pop();
  }
}
const NOAH_ARK_CAPACITY = 3;
var EntryType;
(function(t) {
  t[t.Marker = 0] = "Marker", t[t.Element = 1] = "Element";
})(EntryType = EntryType || (EntryType = {}));
const MARKER = { type: EntryType.Marker };
class FormattingElementList {
  constructor(n) {
    this.treeAdapter = n, this.entries = [], this.bookmark = null;
  }
  //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.
  _getNoahArkConditionCandidates(n, s) {
    const a = [], i = s.length, o = this.treeAdapter.getTagName(n), u = this.treeAdapter.getNamespaceURI(n);
    for (let c = 0; c < this.entries.length; c++) {
      const l = this.entries[c];
      if (l.type === EntryType.Marker)
        break;
      const { element: d } = l;
      if (this.treeAdapter.getTagName(d) === o && this.treeAdapter.getNamespaceURI(d) === u) {
        const f = this.treeAdapter.getAttrList(d);
        f.length === i && a.push({ idx: c, attrs: f });
      }
    }
    return a;
  }
  _ensureNoahArkCondition(n) {
    if (this.entries.length < NOAH_ARK_CAPACITY)
      return;
    const s = this.treeAdapter.getAttrList(n), a = this._getNoahArkConditionCandidates(n, s);
    if (a.length < NOAH_ARK_CAPACITY)
      return;
    const i = new Map(s.map((u) => [u.name, u.value]));
    let o = 0;
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      c.attrs.every((l) => i.get(l.name) === l.value) && (o += 1, o >= NOAH_ARK_CAPACITY && this.entries.splice(c.idx, 1));
    }
  }
  //Mutations
  insertMarker() {
    this.entries.unshift(MARKER);
  }
  pushElement(n, s) {
    this._ensureNoahArkCondition(n), this.entries.unshift({
      type: EntryType.Element,
      element: n,
      token: s
    });
  }
  insertElementAfterBookmark(n, s) {
    const a = this.entries.indexOf(this.bookmark);
    this.entries.splice(a, 0, {
      type: EntryType.Element,
      element: n,
      token: s
    });
  }
  removeEntry(n) {
    const s = this.entries.indexOf(n);
    s >= 0 && this.entries.splice(s, 1);
  }
  /**
   * Clears the list of formatting elements up to the last marker.
   *
   * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
   */
  clearToLastMarker() {
    const n = this.entries.indexOf(MARKER);
    n >= 0 ? this.entries.splice(0, n + 1) : this.entries.length = 0;
  }
  //Search
  getElementEntryInScopeWithTagName(n) {
    const s = this.entries.find((a) => a.type === EntryType.Marker || this.treeAdapter.getTagName(a.element) === n);
    return s && s.type === EntryType.Element ? s : null;
  }
  getElementEntry(n) {
    return this.entries.find((s) => s.type === EntryType.Element && s.element === n);
  }
}
function createTextNode$1(t) {
  return {
    nodeName: "#text",
    value: t,
    parentNode: null
  };
}
const defaultTreeAdapter = {
  //Node construction
  createDocument() {
    return {
      nodeName: "#document",
      mode: DOCUMENT_MODE.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement(t, n, s) {
    return {
      nodeName: t,
      tagName: t,
      attrs: s,
      namespaceURI: n,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode(t) {
    return {
      nodeName: "#comment",
      data: t,
      parentNode: null
    };
  },
  //Tree mutation
  appendChild(t, n) {
    t.childNodes.push(n), n.parentNode = t;
  },
  insertBefore(t, n, s) {
    const a = t.childNodes.indexOf(s);
    t.childNodes.splice(a, 0, n), n.parentNode = t;
  },
  setTemplateContent(t, n) {
    t.content = n;
  },
  getTemplateContent(t) {
    return t.content;
  },
  setDocumentType(t, n, s, a) {
    const i = t.childNodes.find((o) => o.nodeName === "#documentType");
    if (i)
      i.name = n, i.publicId = s, i.systemId = a;
    else {
      const o = {
        nodeName: "#documentType",
        name: n,
        publicId: s,
        systemId: a,
        parentNode: null
      };
      defaultTreeAdapter.appendChild(t, o);
    }
  },
  setDocumentMode(t, n) {
    t.mode = n;
  },
  getDocumentMode(t) {
    return t.mode;
  },
  detachNode(t) {
    if (t.parentNode) {
      const n = t.parentNode.childNodes.indexOf(t);
      t.parentNode.childNodes.splice(n, 1), t.parentNode = null;
    }
  },
  insertText(t, n) {
    if (t.childNodes.length > 0) {
      const s = t.childNodes[t.childNodes.length - 1];
      if (defaultTreeAdapter.isTextNode(s)) {
        s.value += n;
        return;
      }
    }
    defaultTreeAdapter.appendChild(t, createTextNode$1(n));
  },
  insertTextBefore(t, n, s) {
    const a = t.childNodes[t.childNodes.indexOf(s) - 1];
    a && defaultTreeAdapter.isTextNode(a) ? a.value += n : defaultTreeAdapter.insertBefore(t, createTextNode$1(n), s);
  },
  adoptAttributes(t, n) {
    const s = new Set(t.attrs.map((a) => a.name));
    for (let a = 0; a < n.length; a++)
      s.has(n[a].name) || t.attrs.push(n[a]);
  },
  //Tree traversing
  getFirstChild(t) {
    return t.childNodes[0];
  },
  getChildNodes(t) {
    return t.childNodes;
  },
  getParentNode(t) {
    return t.parentNode;
  },
  getAttrList(t) {
    return t.attrs;
  },
  //Node data
  getTagName(t) {
    return t.tagName;
  },
  getNamespaceURI(t) {
    return t.namespaceURI;
  },
  getTextNodeContent(t) {
    return t.value;
  },
  getCommentNodeContent(t) {
    return t.data;
  },
  getDocumentTypeNodeName(t) {
    return t.name;
  },
  getDocumentTypeNodePublicId(t) {
    return t.publicId;
  },
  getDocumentTypeNodeSystemId(t) {
    return t.systemId;
  },
  //Node types
  isTextNode(t) {
    return t.nodeName === "#text";
  },
  isCommentNode(t) {
    return t.nodeName === "#comment";
  },
  isDocumentTypeNode(t) {
    return t.nodeName === "#documentType";
  },
  isElementNode(t) {
    return Object.prototype.hasOwnProperty.call(t, "tagName");
  },
  // Source code location
  setNodeSourceCodeLocation(t, n) {
    t.sourceCodeLocation = n;
  },
  getNodeSourceCodeLocation(t) {
    return t.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(t, n) {
    t.sourceCodeLocation = { ...t.sourceCodeLocation, ...n };
  }
}, VALID_DOCTYPE_NAME = "html", VALID_SYSTEM_ID = "about:legacy-compat", QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
], QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
  ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
], QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]), LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
  ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function hasPrefix(t, n) {
  return n.some((s) => t.startsWith(s));
}
function isConforming(t) {
  return t.name === VALID_DOCTYPE_NAME && t.publicId === null && (t.systemId === null || t.systemId === VALID_SYSTEM_ID);
}
function getDocumentMode(t) {
  if (t.name !== VALID_DOCTYPE_NAME)
    return DOCUMENT_MODE.QUIRKS;
  const { systemId: n } = t;
  if (n && n.toLowerCase() === QUIRKS_MODE_SYSTEM_ID)
    return DOCUMENT_MODE.QUIRKS;
  let { publicId: s } = t;
  if (s !== null) {
    if (s = s.toLowerCase(), QUIRKS_MODE_PUBLIC_IDS.has(s))
      return DOCUMENT_MODE.QUIRKS;
    let a = n === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
    if (hasPrefix(s, a))
      return DOCUMENT_MODE.QUIRKS;
    if (a = n === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES, hasPrefix(s, a))
      return DOCUMENT_MODE.LIMITED_QUIRKS;
  }
  return DOCUMENT_MODE.NO_QUIRKS;
}
const MIME_TYPES = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
}, DEFINITION_URL_ATTR = "definitionurl", ADJUSTED_DEFINITION_URL_ATTR = "definitionURL", SVG_ATTRS_ADJUSTMENT_MAP = new Map([
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((t) => [t.toLowerCase(), t])), XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
  ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: NS.XLINK }],
  ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: NS.XLINK }],
  ["xlink:href", { prefix: "xlink", name: "href", namespace: NS.XLINK }],
  ["xlink:role", { prefix: "xlink", name: "role", namespace: NS.XLINK }],
  ["xlink:show", { prefix: "xlink", name: "show", namespace: NS.XLINK }],
  ["xlink:title", { prefix: "xlink", name: "title", namespace: NS.XLINK }],
  ["xlink:type", { prefix: "xlink", name: "type", namespace: NS.XLINK }],
  ["xml:base", { prefix: "xml", name: "base", namespace: NS.XML }],
  ["xml:lang", { prefix: "xml", name: "lang", namespace: NS.XML }],
  ["xml:space", { prefix: "xml", name: "space", namespace: NS.XML }],
  ["xmlns", { prefix: "", name: "xmlns", namespace: NS.XMLNS }],
  ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: NS.XMLNS }]
]), SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((t) => [t.toLowerCase(), t])), EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
  TAG_ID.B,
  TAG_ID.BIG,
  TAG_ID.BLOCKQUOTE,
  TAG_ID.BODY,
  TAG_ID.BR,
  TAG_ID.CENTER,
  TAG_ID.CODE,
  TAG_ID.DD,
  TAG_ID.DIV,
  TAG_ID.DL,
  TAG_ID.DT,
  TAG_ID.EM,
  TAG_ID.EMBED,
  TAG_ID.H1,
  TAG_ID.H2,
  TAG_ID.H3,
  TAG_ID.H4,
  TAG_ID.H5,
  TAG_ID.H6,
  TAG_ID.HEAD,
  TAG_ID.HR,
  TAG_ID.I,
  TAG_ID.IMG,
  TAG_ID.LI,
  TAG_ID.LISTING,
  TAG_ID.MENU,
  TAG_ID.META,
  TAG_ID.NOBR,
  TAG_ID.OL,
  TAG_ID.P,
  TAG_ID.PRE,
  TAG_ID.RUBY,
  TAG_ID.S,
  TAG_ID.SMALL,
  TAG_ID.SPAN,
  TAG_ID.STRONG,
  TAG_ID.STRIKE,
  TAG_ID.SUB,
  TAG_ID.SUP,
  TAG_ID.TABLE,
  TAG_ID.TT,
  TAG_ID.U,
  TAG_ID.UL,
  TAG_ID.VAR
]);
function causesExit(t) {
  const n = t.tagID;
  return n === TAG_ID.FONT && t.attrs.some(({ name: a }) => a === ATTRS.COLOR || a === ATTRS.SIZE || a === ATTRS.FACE) || EXITS_FOREIGN_CONTENT.has(n);
}
function adjustTokenMathMLAttrs(t) {
  for (let n = 0; n < t.attrs.length; n++)
    if (t.attrs[n].name === DEFINITION_URL_ATTR) {
      t.attrs[n].name = ADJUSTED_DEFINITION_URL_ATTR;
      break;
    }
}
function adjustTokenSVGAttrs(t) {
  for (let n = 0; n < t.attrs.length; n++) {
    const s = SVG_ATTRS_ADJUSTMENT_MAP.get(t.attrs[n].name);
    s != null && (t.attrs[n].name = s);
  }
}
function adjustTokenXMLAttrs(t) {
  for (let n = 0; n < t.attrs.length; n++) {
    const s = XML_ATTRS_ADJUSTMENT_MAP.get(t.attrs[n].name);
    s && (t.attrs[n].prefix = s.prefix, t.attrs[n].name = s.name, t.attrs[n].namespace = s.namespace);
  }
}
function adjustTokenSVGTagName(t) {
  const n = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(t.tagName);
  n != null && (t.tagName = n, t.tagID = getTagID(t.tagName));
}
function isMathMLTextIntegrationPoint(t, n) {
  return n === NS.MATHML && (t === TAG_ID.MI || t === TAG_ID.MO || t === TAG_ID.MN || t === TAG_ID.MS || t === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(t, n, s) {
  if (n === NS.MATHML && t === TAG_ID.ANNOTATION_XML) {
    for (let a = 0; a < s.length; a++)
      if (s[a].name === ATTRS.ENCODING) {
        const i = s[a].value.toLowerCase();
        return i === MIME_TYPES.TEXT_HTML || i === MIME_TYPES.APPLICATION_XML;
      }
  }
  return n === NS.SVG && (t === TAG_ID.FOREIGN_OBJECT || t === TAG_ID.DESC || t === TAG_ID.TITLE);
}
function isIntegrationPoint(t, n, s, a) {
  return (!a || a === NS.HTML) && isHtmlIntegrationPoint(t, n, s) || (!a || a === NS.MATHML) && isMathMLTextIntegrationPoint(t, n);
}
const HIDDEN_INPUT_TYPE = "hidden", AA_OUTER_LOOP_ITER = 8, AA_INNER_LOOP_ITER = 3;
var InsertionMode;
(function(t) {
  t[t.INITIAL = 0] = "INITIAL", t[t.BEFORE_HTML = 1] = "BEFORE_HTML", t[t.BEFORE_HEAD = 2] = "BEFORE_HEAD", t[t.IN_HEAD = 3] = "IN_HEAD", t[t.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", t[t.AFTER_HEAD = 5] = "AFTER_HEAD", t[t.IN_BODY = 6] = "IN_BODY", t[t.TEXT = 7] = "TEXT", t[t.IN_TABLE = 8] = "IN_TABLE", t[t.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", t[t.IN_CAPTION = 10] = "IN_CAPTION", t[t.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", t[t.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", t[t.IN_ROW = 13] = "IN_ROW", t[t.IN_CELL = 14] = "IN_CELL", t[t.IN_SELECT = 15] = "IN_SELECT", t[t.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", t[t.IN_TEMPLATE = 17] = "IN_TEMPLATE", t[t.AFTER_BODY = 18] = "AFTER_BODY", t[t.IN_FRAMESET = 19] = "IN_FRAMESET", t[t.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", t[t.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", t[t.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode || (InsertionMode = {}));
const BASE_LOC = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
}, TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([TAG_ID.TABLE, TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TR]), defaultParserOptions = {
  scriptingEnabled: !0,
  sourceCodeLocationInfo: !1,
  treeAdapter: defaultTreeAdapter,
  onParseError: null
};
let Parser$1 = class {
  constructor(n, s, a = null, i = null) {
    this.fragmentContext = a, this.scriptHandler = i, this.currentToken = null, this.stopped = !1, this.insertionMode = InsertionMode.INITIAL, this.originalInsertionMode = InsertionMode.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
      ...defaultParserOptions,
      ...n
    }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = s ?? this.treeAdapter.createDocument(), this.tokenizer = new Tokenizer$1(this.options, this), this.activeFormattingElements = new FormattingElementList(this.treeAdapter), this.fragmentContextID = a ? getTagID(this.treeAdapter.getTagName(a)) : TAG_ID.UNKNOWN, this._setContextModes(a ?? this.document, this.fragmentContextID), this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
  }
  // API
  static parse(n, s) {
    const a = new this(s);
    return a.tokenizer.write(n, !0), a.document;
  }
  static getFragmentParser(n, s) {
    const a = {
      ...defaultParserOptions,
      ...s
    };
    n ?? (n = a.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []));
    const i = a.treeAdapter.createElement("documentmock", NS.HTML, []), o = new this(a, i, n);
    return o.fragmentContextID === TAG_ID.TEMPLATE && o.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE), o._initTokenizerForFragmentParsing(), o._insertFakeRootElement(), o._resetInsertionMode(), o._findFormInFragmentContext(), o;
  }
  getFragment() {
    const n = this.treeAdapter.getFirstChild(this.document), s = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(n, s), s;
  }
  //Errors
  _err(n, s, a) {
    var i;
    if (!this.onParseError)
      return;
    const o = (i = n.location) !== null && i !== void 0 ? i : BASE_LOC, u = {
      code: s,
      startLine: o.startLine,
      startCol: o.startCol,
      startOffset: o.startOffset,
      endLine: a ? o.startLine : o.endLine,
      endCol: a ? o.startCol : o.endCol,
      endOffset: a ? o.startOffset : o.endOffset
    };
    this.onParseError(u);
  }
  //Stack events
  onItemPush(n, s, a) {
    var i, o;
    (o = (i = this.treeAdapter).onItemPush) === null || o === void 0 || o.call(i, n), a && this.openElements.stackTop > 0 && this._setContextModes(n, s);
  }
  onItemPop(n, s) {
    var a, i;
    if (this.options.sourceCodeLocationInfo && this._setEndLocation(n, this.currentToken), (i = (a = this.treeAdapter).onItemPop) === null || i === void 0 || i.call(a, n, this.openElements.current), s) {
      let o, u;
      this.openElements.stackTop === 0 && this.fragmentContext ? (o = this.fragmentContext, u = this.fragmentContextID) : { current: o, currentTagId: u } = this.openElements, this._setContextModes(o, u);
    }
  }
  _setContextModes(n, s) {
    const a = n === this.document || this.treeAdapter.getNamespaceURI(n) === NS.HTML;
    this.currentNotInHTML = !a, this.tokenizer.inForeignNode = !a && !this._isIntegrationPoint(s, n);
  }
  _switchToTextParsing(n, s) {
    this._insertElement(n, NS.HTML), this.tokenizer.state = s, this.originalInsertionMode = this.insertionMode, this.insertionMode = InsertionMode.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = InsertionMode.TEXT, this.originalInsertionMode = InsertionMode.IN_BODY, this.tokenizer.state = TokenizerMode.PLAINTEXT;
  }
  //Fragment parsing
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  _findFormInFragmentContext() {
    let n = this.fragmentContext;
    for (; n; ) {
      if (this.treeAdapter.getTagName(n) === TAG_NAMES.FORM) {
        this.formElement = n;
        break;
      }
      n = this.treeAdapter.getParentNode(n);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML))
      switch (this.fragmentContextID) {
        case TAG_ID.TITLE:
        case TAG_ID.TEXTAREA: {
          this.tokenizer.state = TokenizerMode.RCDATA;
          break;
        }
        case TAG_ID.STYLE:
        case TAG_ID.XMP:
        case TAG_ID.IFRAME:
        case TAG_ID.NOEMBED:
        case TAG_ID.NOFRAMES:
        case TAG_ID.NOSCRIPT: {
          this.tokenizer.state = TokenizerMode.RAWTEXT;
          break;
        }
        case TAG_ID.SCRIPT: {
          this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
          break;
        }
        case TAG_ID.PLAINTEXT: {
          this.tokenizer.state = TokenizerMode.PLAINTEXT;
          break;
        }
      }
  }
  //Tree mutation
  _setDocumentType(n) {
    const s = n.name || "", a = n.publicId || "", i = n.systemId || "";
    if (this.treeAdapter.setDocumentType(this.document, s, a, i), n.location) {
      const u = this.treeAdapter.getChildNodes(this.document).find((c) => this.treeAdapter.isDocumentTypeNode(c));
      u && this.treeAdapter.setNodeSourceCodeLocation(u, n.location);
    }
  }
  _attachElementToTree(n, s) {
    if (this.options.sourceCodeLocationInfo) {
      const a = s && {
        ...s,
        startTag: s
      };
      this.treeAdapter.setNodeSourceCodeLocation(n, a);
    }
    if (this._shouldFosterParentOnInsertion())
      this._fosterParentElement(n);
    else {
      const a = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(a, n);
    }
  }
  _appendElement(n, s) {
    const a = this.treeAdapter.createElement(n.tagName, s, n.attrs);
    this._attachElementToTree(a, n.location);
  }
  _insertElement(n, s) {
    const a = this.treeAdapter.createElement(n.tagName, s, n.attrs);
    this._attachElementToTree(a, n.location), this.openElements.push(a, n.tagID);
  }
  _insertFakeElement(n, s) {
    const a = this.treeAdapter.createElement(n, NS.HTML, []);
    this._attachElementToTree(a, null), this.openElements.push(a, s);
  }
  _insertTemplate(n) {
    const s = this.treeAdapter.createElement(n.tagName, NS.HTML, n.attrs), a = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(s, a), this._attachElementToTree(s, n.location), this.openElements.push(s, n.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(a, null);
  }
  _insertFakeRootElement() {
    const n = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null), this.treeAdapter.appendChild(this.openElements.current, n), this.openElements.push(n, TAG_ID.HTML);
  }
  _appendCommentNode(n, s) {
    const a = this.treeAdapter.createCommentNode(n.data);
    this.treeAdapter.appendChild(s, a), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(a, n.location);
  }
  _insertCharacters(n) {
    let s, a;
    if (this._shouldFosterParentOnInsertion() ? ({ parent: s, beforeElement: a } = this._findFosterParentingLocation(), a ? this.treeAdapter.insertTextBefore(s, n.chars, a) : this.treeAdapter.insertText(s, n.chars)) : (s = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(s, n.chars)), !n.location)
      return;
    const i = this.treeAdapter.getChildNodes(s), o = a ? i.lastIndexOf(a) : i.length, u = i[o - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(u)) {
      const { endLine: l, endCol: d, endOffset: f } = n.location;
      this.treeAdapter.updateNodeSourceCodeLocation(u, { endLine: l, endCol: d, endOffset: f });
    } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(u, n.location);
  }
  _adoptNodes(n, s) {
    for (let a = this.treeAdapter.getFirstChild(n); a; a = this.treeAdapter.getFirstChild(n))
      this.treeAdapter.detachNode(a), this.treeAdapter.appendChild(s, a);
  }
  _setEndLocation(n, s) {
    if (this.treeAdapter.getNodeSourceCodeLocation(n) && s.location) {
      const a = s.location, i = this.treeAdapter.getTagName(n), o = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        s.type === TokenType.END_TAG && i === s.tagName ? {
          endTag: { ...a },
          endLine: a.endLine,
          endCol: a.endCol,
          endOffset: a.endOffset
        } : {
          endLine: a.startLine,
          endCol: a.startCol,
          endOffset: a.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(n, o);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(n) {
    if (!this.currentNotInHTML)
      return !1;
    let s, a;
    return this.openElements.stackTop === 0 && this.fragmentContext ? (s = this.fragmentContext, a = this.fragmentContextID) : { current: s, currentTagId: a } = this.openElements, n.tagID === TAG_ID.SVG && this.treeAdapter.getTagName(s) === TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(s) === NS.MATHML ? !1 : (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (n.tagID === TAG_ID.MGLYPH || n.tagID === TAG_ID.MALIGNMARK) && !this._isIntegrationPoint(a, s, NS.HTML)
    );
  }
  _processToken(n) {
    switch (n.type) {
      case TokenType.CHARACTER: {
        this.onCharacter(n);
        break;
      }
      case TokenType.NULL_CHARACTER: {
        this.onNullCharacter(n);
        break;
      }
      case TokenType.COMMENT: {
        this.onComment(n);
        break;
      }
      case TokenType.DOCTYPE: {
        this.onDoctype(n);
        break;
      }
      case TokenType.START_TAG: {
        this._processStartTag(n);
        break;
      }
      case TokenType.END_TAG: {
        this.onEndTag(n);
        break;
      }
      case TokenType.EOF: {
        this.onEof(n);
        break;
      }
      case TokenType.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(n);
        break;
      }
    }
  }
  //Integration points
  _isIntegrationPoint(n, s, a) {
    const i = this.treeAdapter.getNamespaceURI(s), o = this.treeAdapter.getAttrList(s);
    return isIntegrationPoint(n, i, o, a);
  }
  //Active formatting elements reconstruction
  _reconstructActiveFormattingElements() {
    const n = this.activeFormattingElements.entries.length;
    if (n) {
      const s = this.activeFormattingElements.entries.findIndex((i) => i.type === EntryType.Marker || this.openElements.contains(i.element)), a = s < 0 ? n - 1 : s - 1;
      for (let i = a; i >= 0; i--) {
        const o = this.activeFormattingElements.entries[i];
        this._insertElement(o.token, this.treeAdapter.getNamespaceURI(o.element)), o.element = this.openElements.current;
      }
    }
  }
  //Close elements
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = InsertionMode.IN_ROW;
  }
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P), this.openElements.popUntilTagNamePopped(TAG_ID.P);
  }
  //Insertion modes
  _resetInsertionMode() {
    for (let n = this.openElements.stackTop; n >= 0; n--)
      switch (n === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[n]) {
        case TAG_ID.TR: {
          this.insertionMode = InsertionMode.IN_ROW;
          return;
        }
        case TAG_ID.TBODY:
        case TAG_ID.THEAD:
        case TAG_ID.TFOOT: {
          this.insertionMode = InsertionMode.IN_TABLE_BODY;
          return;
        }
        case TAG_ID.CAPTION: {
          this.insertionMode = InsertionMode.IN_CAPTION;
          return;
        }
        case TAG_ID.COLGROUP: {
          this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
          return;
        }
        case TAG_ID.TABLE: {
          this.insertionMode = InsertionMode.IN_TABLE;
          return;
        }
        case TAG_ID.BODY: {
          this.insertionMode = InsertionMode.IN_BODY;
          return;
        }
        case TAG_ID.FRAMESET: {
          this.insertionMode = InsertionMode.IN_FRAMESET;
          return;
        }
        case TAG_ID.SELECT: {
          this._resetInsertionModeForSelect(n);
          return;
        }
        case TAG_ID.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case TAG_ID.HTML: {
          this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
          return;
        }
        case TAG_ID.TD:
        case TAG_ID.TH: {
          if (n > 0) {
            this.insertionMode = InsertionMode.IN_CELL;
            return;
          }
          break;
        }
        case TAG_ID.HEAD: {
          if (n > 0) {
            this.insertionMode = InsertionMode.IN_HEAD;
            return;
          }
          break;
        }
      }
    this.insertionMode = InsertionMode.IN_BODY;
  }
  _resetInsertionModeForSelect(n) {
    if (n > 0)
      for (let s = n - 1; s > 0; s--) {
        const a = this.openElements.tagIDs[s];
        if (a === TAG_ID.TEMPLATE)
          break;
        if (a === TAG_ID.TABLE) {
          this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
          return;
        }
      }
    this.insertionMode = InsertionMode.IN_SELECT;
  }
  //Foster parenting
  _isElementCausesFosterParenting(n) {
    return TABLE_STRUCTURE_TAGS.has(n);
  }
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  _findFosterParentingLocation() {
    for (let n = this.openElements.stackTop; n >= 0; n--) {
      const s = this.openElements.items[n];
      switch (this.openElements.tagIDs[n]) {
        case TAG_ID.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(s) === NS.HTML)
            return { parent: this.treeAdapter.getTemplateContent(s), beforeElement: null };
          break;
        }
        case TAG_ID.TABLE: {
          const a = this.treeAdapter.getParentNode(s);
          return a ? { parent: a, beforeElement: s } : { parent: this.openElements.items[n - 1], beforeElement: null };
        }
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  _fosterParentElement(n) {
    const s = this._findFosterParentingLocation();
    s.beforeElement ? this.treeAdapter.insertBefore(s.parent, n, s.beforeElement) : this.treeAdapter.appendChild(s.parent, n);
  }
  //Special elements
  _isSpecialElement(n, s) {
    const a = this.treeAdapter.getNamespaceURI(n);
    return SPECIAL_ELEMENTS[a].has(s);
  }
  onCharacter(n) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      characterInForeignContent(this, n);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, n);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, n);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, n);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, n);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_TEMPLATE: {
        characterInBody(this, n);
        break;
      }
      case InsertionMode.TEXT:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE: {
        this._insertCharacters(n);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, n);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        characterInTableText(this, n);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        tokenInColumnGroup(this, n);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        tokenAfterBody(this, n);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, n);
        break;
      }
    }
  }
  onNullCharacter(n) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      nullCharacterInForeignContent(this, n);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, n);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, n);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, n);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, n);
        break;
      }
      case InsertionMode.TEXT: {
        this._insertCharacters(n);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, n);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        tokenInColumnGroup(this, n);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        tokenAfterBody(this, n);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, n);
        break;
      }
    }
  }
  onComment(n) {
    if (this.skipNextNewLine = !1, this.currentNotInHTML) {
      appendComment(this, n);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.INITIAL:
      case InsertionMode.BEFORE_HTML:
      case InsertionMode.BEFORE_HEAD:
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD:
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE:
      case InsertionMode.IN_TEMPLATE:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET: {
        appendComment(this, n);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, n);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        appendCommentToRootHtmlElement(this, n);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        appendCommentToDocument(this, n);
        break;
      }
    }
  }
  onDoctype(n) {
    switch (this.skipNextNewLine = !1, this.insertionMode) {
      case InsertionMode.INITIAL: {
        doctypeInInitialMode(this, n);
        break;
      }
      case InsertionMode.BEFORE_HEAD:
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD: {
        this._err(n, ERR.misplacedDoctype);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, n);
        break;
      }
    }
  }
  onStartTag(n) {
    this.skipNextNewLine = !1, this.currentToken = n, this._processStartTag(n), n.selfClosing && !n.ackSelfClosing && this._err(n, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   */
  _processStartTag(n) {
    this.shouldProcessStartTagTokenInForeignContent(n) ? startTagInForeignContent(this, n) : this._startTagOutsideForeignContent(n);
  }
  _startTagOutsideForeignContent(n) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, n);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        startTagBeforeHtml(this, n);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        startTagBeforeHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD: {
        startTagInHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        startTagInHeadNoScript(this, n);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        startTagAfterHead(this, n);
        break;
      }
      case InsertionMode.IN_BODY: {
        startTagInBody(this, n);
        break;
      }
      case InsertionMode.IN_TABLE: {
        startTagInTable(this, n);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, n);
        break;
      }
      case InsertionMode.IN_CAPTION: {
        startTagInCaption(this, n);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        startTagInColumnGroup(this, n);
        break;
      }
      case InsertionMode.IN_TABLE_BODY: {
        startTagInTableBody(this, n);
        break;
      }
      case InsertionMode.IN_ROW: {
        startTagInRow(this, n);
        break;
      }
      case InsertionMode.IN_CELL: {
        startTagInCell(this, n);
        break;
      }
      case InsertionMode.IN_SELECT: {
        startTagInSelect(this, n);
        break;
      }
      case InsertionMode.IN_SELECT_IN_TABLE: {
        startTagInSelectInTable(this, n);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        startTagInTemplate(this, n);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        startTagAfterBody(this, n);
        break;
      }
      case InsertionMode.IN_FRAMESET: {
        startTagInFrameset(this, n);
        break;
      }
      case InsertionMode.AFTER_FRAMESET: {
        startTagAfterFrameset(this, n);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        startTagAfterAfterBody(this, n);
        break;
      }
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        startTagAfterAfterFrameset(this, n);
        break;
      }
    }
  }
  onEndTag(n) {
    this.skipNextNewLine = !1, this.currentToken = n, this.currentNotInHTML ? endTagInForeignContent(this, n) : this._endTagOutsideForeignContent(n);
  }
  _endTagOutsideForeignContent(n) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, n);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        endTagBeforeHtml(this, n);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        endTagBeforeHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD: {
        endTagInHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        endTagInHeadNoScript(this, n);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        endTagAfterHead(this, n);
        break;
      }
      case InsertionMode.IN_BODY: {
        endTagInBody(this, n);
        break;
      }
      case InsertionMode.TEXT: {
        endTagInText(this, n);
        break;
      }
      case InsertionMode.IN_TABLE: {
        endTagInTable(this, n);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, n);
        break;
      }
      case InsertionMode.IN_CAPTION: {
        endTagInCaption(this, n);
        break;
      }
      case InsertionMode.IN_COLUMN_GROUP: {
        endTagInColumnGroup(this, n);
        break;
      }
      case InsertionMode.IN_TABLE_BODY: {
        endTagInTableBody(this, n);
        break;
      }
      case InsertionMode.IN_ROW: {
        endTagInRow(this, n);
        break;
      }
      case InsertionMode.IN_CELL: {
        endTagInCell(this, n);
        break;
      }
      case InsertionMode.IN_SELECT: {
        endTagInSelect(this, n);
        break;
      }
      case InsertionMode.IN_SELECT_IN_TABLE: {
        endTagInSelectInTable(this, n);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        endTagInTemplate(this, n);
        break;
      }
      case InsertionMode.AFTER_BODY: {
        endTagAfterBody(this, n);
        break;
      }
      case InsertionMode.IN_FRAMESET: {
        endTagInFrameset(this, n);
        break;
      }
      case InsertionMode.AFTER_FRAMESET: {
        endTagAfterFrameset(this, n);
        break;
      }
      case InsertionMode.AFTER_AFTER_BODY: {
        tokenAfterAfterBody(this, n);
        break;
      }
    }
  }
  onEof(n) {
    switch (this.insertionMode) {
      case InsertionMode.INITIAL: {
        tokenInInitialMode(this, n);
        break;
      }
      case InsertionMode.BEFORE_HTML: {
        tokenBeforeHtml(this, n);
        break;
      }
      case InsertionMode.BEFORE_HEAD: {
        tokenBeforeHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD: {
        tokenInHead(this, n);
        break;
      }
      case InsertionMode.IN_HEAD_NO_SCRIPT: {
        tokenInHeadNoScript(this, n);
        break;
      }
      case InsertionMode.AFTER_HEAD: {
        tokenAfterHead(this, n);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE: {
        eofInBody(this, n);
        break;
      }
      case InsertionMode.TEXT: {
        eofInText(this, n);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        tokenInTableText(this, n);
        break;
      }
      case InsertionMode.IN_TEMPLATE: {
        eofInTemplate(this, n);
        break;
      }
      case InsertionMode.AFTER_BODY:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET:
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        stopParsing(this, n);
        break;
      }
    }
  }
  onWhitespaceCharacter(n) {
    if (this.skipNextNewLine && (this.skipNextNewLine = !1, n.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED)) {
      if (n.chars.length === 1)
        return;
      n.chars = n.chars.substr(1);
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(n);
      return;
    }
    switch (this.insertionMode) {
      case InsertionMode.IN_HEAD:
      case InsertionMode.IN_HEAD_NO_SCRIPT:
      case InsertionMode.AFTER_HEAD:
      case InsertionMode.TEXT:
      case InsertionMode.IN_COLUMN_GROUP:
      case InsertionMode.IN_SELECT:
      case InsertionMode.IN_SELECT_IN_TABLE:
      case InsertionMode.IN_FRAMESET:
      case InsertionMode.AFTER_FRAMESET: {
        this._insertCharacters(n);
        break;
      }
      case InsertionMode.IN_BODY:
      case InsertionMode.IN_CAPTION:
      case InsertionMode.IN_CELL:
      case InsertionMode.IN_TEMPLATE:
      case InsertionMode.AFTER_BODY:
      case InsertionMode.AFTER_AFTER_BODY:
      case InsertionMode.AFTER_AFTER_FRAMESET: {
        whitespaceCharacterInBody(this, n);
        break;
      }
      case InsertionMode.IN_TABLE:
      case InsertionMode.IN_TABLE_BODY:
      case InsertionMode.IN_ROW: {
        characterInTable(this, n);
        break;
      }
      case InsertionMode.IN_TABLE_TEXT: {
        whitespaceCharacterInTableText(this, n);
        break;
      }
    }
  }
};
function aaObtainFormattingElementEntry(t, n) {
  let s = t.activeFormattingElements.getElementEntryInScopeWithTagName(n.tagName);
  return s ? t.openElements.contains(s.element) ? t.openElements.hasInScope(n.tagID) || (s = null) : (t.activeFormattingElements.removeEntry(s), s = null) : genericEndTagInBody(t, n), s;
}
function aaObtainFurthestBlock(t, n) {
  let s = null, a = t.openElements.stackTop;
  for (; a >= 0; a--) {
    const i = t.openElements.items[a];
    if (i === n.element)
      break;
    t._isSpecialElement(i, t.openElements.tagIDs[a]) && (s = i);
  }
  return s || (t.openElements.shortenToLength(a < 0 ? 0 : a), t.activeFormattingElements.removeEntry(n)), s;
}
function aaInnerLoop(t, n, s) {
  let a = n, i = t.openElements.getCommonAncestor(n);
  for (let o = 0, u = i; u !== s; o++, u = i) {
    i = t.openElements.getCommonAncestor(u);
    const c = t.activeFormattingElements.getElementEntry(u), l = c && o >= AA_INNER_LOOP_ITER;
    !c || l ? (l && t.activeFormattingElements.removeEntry(c), t.openElements.remove(u)) : (u = aaRecreateElementFromEntry(t, c), a === n && (t.activeFormattingElements.bookmark = c), t.treeAdapter.detachNode(a), t.treeAdapter.appendChild(u, a), a = u);
  }
  return a;
}
function aaRecreateElementFromEntry(t, n) {
  const s = t.treeAdapter.getNamespaceURI(n.element), a = t.treeAdapter.createElement(n.token.tagName, s, n.token.attrs);
  return t.openElements.replace(n.element, a), n.element = a, a;
}
function aaInsertLastNodeInCommonAncestor(t, n, s) {
  const a = t.treeAdapter.getTagName(n), i = getTagID(a);
  if (t._isElementCausesFosterParenting(i))
    t._fosterParentElement(s);
  else {
    const o = t.treeAdapter.getNamespaceURI(n);
    i === TAG_ID.TEMPLATE && o === NS.HTML && (n = t.treeAdapter.getTemplateContent(n)), t.treeAdapter.appendChild(n, s);
  }
}
function aaReplaceFormattingElement(t, n, s) {
  const a = t.treeAdapter.getNamespaceURI(s.element), { token: i } = s, o = t.treeAdapter.createElement(i.tagName, a, i.attrs);
  t._adoptNodes(n, o), t.treeAdapter.appendChild(n, o), t.activeFormattingElements.insertElementAfterBookmark(o, i), t.activeFormattingElements.removeEntry(s), t.openElements.remove(s.element), t.openElements.insertAfter(n, o, i.tagID);
}
function callAdoptionAgency(t, n) {
  for (let s = 0; s < AA_OUTER_LOOP_ITER; s++) {
    const a = aaObtainFormattingElementEntry(t, n);
    if (!a)
      break;
    const i = aaObtainFurthestBlock(t, a);
    if (!i)
      break;
    t.activeFormattingElements.bookmark = a;
    const o = aaInnerLoop(t, i, a.element), u = t.openElements.getCommonAncestor(a.element);
    t.treeAdapter.detachNode(o), u && aaInsertLastNodeInCommonAncestor(t, u, o), aaReplaceFormattingElement(t, i, a);
  }
}
function appendComment(t, n) {
  t._appendCommentNode(n, t.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(t, n) {
  t._appendCommentNode(n, t.openElements.items[0]);
}
function appendCommentToDocument(t, n) {
  t._appendCommentNode(n, t.document);
}
function stopParsing(t, n) {
  if (t.stopped = !0, n.location) {
    const s = t.fragmentContext ? 0 : 2;
    for (let a = t.openElements.stackTop; a >= s; a--)
      t._setEndLocation(t.openElements.items[a], n);
    if (!t.fragmentContext && t.openElements.stackTop >= 0) {
      const a = t.openElements.items[0], i = t.treeAdapter.getNodeSourceCodeLocation(a);
      if (i && !i.endTag && (t._setEndLocation(a, n), t.openElements.stackTop >= 1)) {
        const o = t.openElements.items[1], u = t.treeAdapter.getNodeSourceCodeLocation(o);
        u && !u.endTag && t._setEndLocation(o, n);
      }
    }
  }
}
function doctypeInInitialMode(t, n) {
  t._setDocumentType(n);
  const s = n.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(n);
  isConforming(n) || t._err(n, ERR.nonConformingDoctype), t.treeAdapter.setDocumentMode(t.document, s), t.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(t, n) {
  t._err(n, ERR.missingDoctype, !0), t.treeAdapter.setDocumentMode(t.document, DOCUMENT_MODE.QUIRKS), t.insertionMode = InsertionMode.BEFORE_HTML, t._processToken(n);
}
function startTagBeforeHtml(t, n) {
  n.tagID === TAG_ID.HTML ? (t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.BEFORE_HEAD) : tokenBeforeHtml(t, n);
}
function endTagBeforeHtml(t, n) {
  const s = n.tagID;
  (s === TAG_ID.HTML || s === TAG_ID.HEAD || s === TAG_ID.BODY || s === TAG_ID.BR) && tokenBeforeHtml(t, n);
}
function tokenBeforeHtml(t, n) {
  t._insertFakeRootElement(), t.insertionMode = InsertionMode.BEFORE_HEAD, t._processToken(n);
}
function startTagBeforeHead(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.HEAD: {
      t._insertElement(n, NS.HTML), t.headElement = t.openElements.current, t.insertionMode = InsertionMode.IN_HEAD;
      break;
    }
    default:
      tokenBeforeHead(t, n);
  }
}
function endTagBeforeHead(t, n) {
  const s = n.tagID;
  s === TAG_ID.HEAD || s === TAG_ID.BODY || s === TAG_ID.HTML || s === TAG_ID.BR ? tokenBeforeHead(t, n) : t._err(n, ERR.endTagWithoutMatchingOpenElement);
}
function tokenBeforeHead(t, n) {
  t._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD), t.headElement = t.openElements.current, t.insertionMode = InsertionMode.IN_HEAD, t._processToken(n);
}
function startTagInHead(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META: {
      t._appendElement(n, NS.HTML), n.ackSelfClosing = !0;
      break;
    }
    case TAG_ID.TITLE: {
      t._switchToTextParsing(n, TokenizerMode.RCDATA);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      t.options.scriptingEnabled ? t._switchToTextParsing(n, TokenizerMode.RAWTEXT) : (t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT);
      break;
    }
    case TAG_ID.NOFRAMES:
    case TAG_ID.STYLE: {
      t._switchToTextParsing(n, TokenizerMode.RAWTEXT);
      break;
    }
    case TAG_ID.SCRIPT: {
      t._switchToTextParsing(n, TokenizerMode.SCRIPT_DATA);
      break;
    }
    case TAG_ID.TEMPLATE: {
      t._insertTemplate(n), t.activeFormattingElements.insertMarker(), t.framesetOk = !1, t.insertionMode = InsertionMode.IN_TEMPLATE, t.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
      break;
    }
    case TAG_ID.HEAD: {
      t._err(n, ERR.misplacedStartTagForHeadElement);
      break;
    }
    default:
      tokenInHead(t, n);
  }
}
function endTagInHead(t, n) {
  switch (n.tagID) {
    case TAG_ID.HEAD: {
      t.openElements.pop(), t.insertionMode = InsertionMode.AFTER_HEAD;
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.BR:
    case TAG_ID.HTML: {
      tokenInHead(t, n);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(t, n);
      break;
    }
    default:
      t._err(n, ERR.endTagWithoutMatchingOpenElement);
  }
}
function templateEndTagInHead(t, n) {
  t.openElements.tmplCount > 0 ? (t.openElements.generateImpliedEndTagsThoroughly(), t.openElements.currentTagId !== TAG_ID.TEMPLATE && t._err(n, ERR.closingOfElementWithOpenChildElements), t.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE), t.activeFormattingElements.clearToLastMarker(), t.tmplInsertionModeStack.shift(), t._resetInsertionMode()) : t._err(n, ERR.endTagWithoutMatchingOpenElement);
}
function tokenInHead(t, n) {
  t.openElements.pop(), t.insertionMode = InsertionMode.AFTER_HEAD, t._processToken(n);
}
function startTagInHeadNoScript(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.HEAD:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.STYLE: {
      startTagInHead(t, n);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      t._err(n, ERR.nestedNoscriptInHead);
      break;
    }
    default:
      tokenInHeadNoScript(t, n);
  }
}
function endTagInHeadNoScript(t, n) {
  switch (n.tagID) {
    case TAG_ID.NOSCRIPT: {
      t.openElements.pop(), t.insertionMode = InsertionMode.IN_HEAD;
      break;
    }
    case TAG_ID.BR: {
      tokenInHeadNoScript(t, n);
      break;
    }
    default:
      t._err(n, ERR.endTagWithoutMatchingOpenElement);
  }
}
function tokenInHeadNoScript(t, n) {
  const s = n.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
  t._err(n, s), t.openElements.pop(), t.insertionMode = InsertionMode.IN_HEAD, t._processToken(n);
}
function startTagAfterHead(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.BODY: {
      t._insertElement(n, NS.HTML), t.framesetOk = !1, t.insertionMode = InsertionMode.IN_BODY;
      break;
    }
    case TAG_ID.FRAMESET: {
      t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.IN_FRAMESET;
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.SCRIPT:
    case TAG_ID.STYLE:
    case TAG_ID.TEMPLATE:
    case TAG_ID.TITLE: {
      t._err(n, ERR.abandonedHeadElementChild), t.openElements.push(t.headElement, TAG_ID.HEAD), startTagInHead(t, n), t.openElements.remove(t.headElement);
      break;
    }
    case TAG_ID.HEAD: {
      t._err(n, ERR.misplacedStartTagForHeadElement);
      break;
    }
    default:
      tokenAfterHead(t, n);
  }
}
function endTagAfterHead(t, n) {
  switch (n.tagID) {
    case TAG_ID.BODY:
    case TAG_ID.HTML:
    case TAG_ID.BR: {
      tokenAfterHead(t, n);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(t, n);
      break;
    }
    default:
      t._err(n, ERR.endTagWithoutMatchingOpenElement);
  }
}
function tokenAfterHead(t, n) {
  t._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY), t.insertionMode = InsertionMode.IN_BODY, modeInBody(t, n);
}
function modeInBody(t, n) {
  switch (n.type) {
    case TokenType.CHARACTER: {
      characterInBody(t, n);
      break;
    }
    case TokenType.WHITESPACE_CHARACTER: {
      whitespaceCharacterInBody(t, n);
      break;
    }
    case TokenType.COMMENT: {
      appendComment(t, n);
      break;
    }
    case TokenType.START_TAG: {
      startTagInBody(t, n);
      break;
    }
    case TokenType.END_TAG: {
      endTagInBody(t, n);
      break;
    }
    case TokenType.EOF: {
      eofInBody(t, n);
      break;
    }
  }
}
function whitespaceCharacterInBody(t, n) {
  t._reconstructActiveFormattingElements(), t._insertCharacters(n);
}
function characterInBody(t, n) {
  t._reconstructActiveFormattingElements(), t._insertCharacters(n), t.framesetOk = !1;
}
function htmlStartTagInBody(t, n) {
  t.openElements.tmplCount === 0 && t.treeAdapter.adoptAttributes(t.openElements.items[0], n.attrs);
}
function bodyStartTagInBody(t, n) {
  const s = t.openElements.tryPeekProperlyNestedBodyElement();
  s && t.openElements.tmplCount === 0 && (t.framesetOk = !1, t.treeAdapter.adoptAttributes(s, n.attrs));
}
function framesetStartTagInBody(t, n) {
  const s = t.openElements.tryPeekProperlyNestedBodyElement();
  t.framesetOk && s && (t.treeAdapter.detachNode(s), t.openElements.popAllUpToHtmlElement(), t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.IN_FRAMESET);
}
function addressStartTagInBody(t, n) {
  t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), t._insertElement(n, NS.HTML);
}
function numberedHeaderStartTagInBody(t, n) {
  t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), isNumberedHeader(t.openElements.currentTagId) && t.openElements.pop(), t._insertElement(n, NS.HTML);
}
function preStartTagInBody(t, n) {
  t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), t._insertElement(n, NS.HTML), t.skipNextNewLine = !0, t.framesetOk = !1;
}
function formStartTagInBody(t, n) {
  const s = t.openElements.tmplCount > 0;
  (!t.formElement || s) && (t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), t._insertElement(n, NS.HTML), s || (t.formElement = t.openElements.current));
}
function listItemStartTagInBody(t, n) {
  t.framesetOk = !1;
  const s = n.tagID;
  for (let a = t.openElements.stackTop; a >= 0; a--) {
    const i = t.openElements.tagIDs[a];
    if (s === TAG_ID.LI && i === TAG_ID.LI || (s === TAG_ID.DD || s === TAG_ID.DT) && (i === TAG_ID.DD || i === TAG_ID.DT)) {
      t.openElements.generateImpliedEndTagsWithExclusion(i), t.openElements.popUntilTagNamePopped(i);
      break;
    }
    if (i !== TAG_ID.ADDRESS && i !== TAG_ID.DIV && i !== TAG_ID.P && t._isSpecialElement(t.openElements.items[a], i))
      break;
  }
  t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), t._insertElement(n, NS.HTML);
}
function plaintextStartTagInBody(t, n) {
  t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), t._insertElement(n, NS.HTML), t.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(t, n) {
  t.openElements.hasInScope(TAG_ID.BUTTON) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(TAG_ID.BUTTON)), t._reconstructActiveFormattingElements(), t._insertElement(n, NS.HTML), t.framesetOk = !1;
}
function aStartTagInBody(t, n) {
  const s = t.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
  s && (callAdoptionAgency(t, n), t.openElements.remove(s.element), t.activeFormattingElements.removeEntry(s)), t._reconstructActiveFormattingElements(), t._insertElement(n, NS.HTML), t.activeFormattingElements.pushElement(t.openElements.current, n);
}
function bStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), t._insertElement(n, NS.HTML), t.activeFormattingElements.pushElement(t.openElements.current, n);
}
function nobrStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), t.openElements.hasInScope(TAG_ID.NOBR) && (callAdoptionAgency(t, n), t._reconstructActiveFormattingElements()), t._insertElement(n, NS.HTML), t.activeFormattingElements.pushElement(t.openElements.current, n);
}
function appletStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), t._insertElement(n, NS.HTML), t.activeFormattingElements.insertMarker(), t.framesetOk = !1;
}
function tableStartTagInBody(t, n) {
  t.treeAdapter.getDocumentMode(t.document) !== DOCUMENT_MODE.QUIRKS && t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), t._insertElement(n, NS.HTML), t.framesetOk = !1, t.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), t._appendElement(n, NS.HTML), t.framesetOk = !1, n.ackSelfClosing = !0;
}
function isHiddenInput(t) {
  const n = getTokenAttr(t, ATTRS.TYPE);
  return n != null && n.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), t._appendElement(n, NS.HTML), isHiddenInput(n) || (t.framesetOk = !1), n.ackSelfClosing = !0;
}
function paramStartTagInBody(t, n) {
  t._appendElement(n, NS.HTML), n.ackSelfClosing = !0;
}
function hrStartTagInBody(t, n) {
  t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), t._appendElement(n, NS.HTML), t.framesetOk = !1, n.ackSelfClosing = !0;
}
function imageStartTagInBody(t, n) {
  n.tagName = TAG_NAMES.IMG, n.tagID = TAG_ID.IMG, areaStartTagInBody(t, n);
}
function textareaStartTagInBody(t, n) {
  t._insertElement(n, NS.HTML), t.skipNextNewLine = !0, t.tokenizer.state = TokenizerMode.RCDATA, t.originalInsertionMode = t.insertionMode, t.framesetOk = !1, t.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(t, n) {
  t.openElements.hasInButtonScope(TAG_ID.P) && t._closePElement(), t._reconstructActiveFormattingElements(), t.framesetOk = !1, t._switchToTextParsing(n, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(t, n) {
  t.framesetOk = !1, t._switchToTextParsing(n, TokenizerMode.RAWTEXT);
}
function noembedStartTagInBody(t, n) {
  t._switchToTextParsing(n, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), t._insertElement(n, NS.HTML), t.framesetOk = !1, t.insertionMode = t.insertionMode === InsertionMode.IN_TABLE || t.insertionMode === InsertionMode.IN_CAPTION || t.insertionMode === InsertionMode.IN_TABLE_BODY || t.insertionMode === InsertionMode.IN_ROW || t.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(t, n) {
  t.openElements.currentTagId === TAG_ID.OPTION && t.openElements.pop(), t._reconstructActiveFormattingElements(), t._insertElement(n, NS.HTML);
}
function rbStartTagInBody(t, n) {
  t.openElements.hasInScope(TAG_ID.RUBY) && t.openElements.generateImpliedEndTags(), t._insertElement(n, NS.HTML);
}
function rtStartTagInBody(t, n) {
  t.openElements.hasInScope(TAG_ID.RUBY) && t.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC), t._insertElement(n, NS.HTML);
}
function mathStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), adjustTokenMathMLAttrs(n), adjustTokenXMLAttrs(n), n.selfClosing ? t._appendElement(n, NS.MATHML) : t._insertElement(n, NS.MATHML), n.ackSelfClosing = !0;
}
function svgStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), adjustTokenSVGAttrs(n), adjustTokenXMLAttrs(n), n.selfClosing ? t._appendElement(n, NS.SVG) : t._insertElement(n, NS.SVG), n.ackSelfClosing = !0;
}
function genericStartTagInBody(t, n) {
  t._reconstructActiveFormattingElements(), t._insertElement(n, NS.HTML);
}
function startTagInBody(t, n) {
  switch (n.tagID) {
    case TAG_ID.I:
    case TAG_ID.S:
    case TAG_ID.B:
    case TAG_ID.U:
    case TAG_ID.EM:
    case TAG_ID.TT:
    case TAG_ID.BIG:
    case TAG_ID.CODE:
    case TAG_ID.FONT:
    case TAG_ID.SMALL:
    case TAG_ID.STRIKE:
    case TAG_ID.STRONG: {
      bStartTagInBody(t, n);
      break;
    }
    case TAG_ID.A: {
      aStartTagInBody(t, n);
      break;
    }
    case TAG_ID.H1:
    case TAG_ID.H2:
    case TAG_ID.H3:
    case TAG_ID.H4:
    case TAG_ID.H5:
    case TAG_ID.H6: {
      numberedHeaderStartTagInBody(t, n);
      break;
    }
    case TAG_ID.P:
    case TAG_ID.DL:
    case TAG_ID.OL:
    case TAG_ID.UL:
    case TAG_ID.DIV:
    case TAG_ID.DIR:
    case TAG_ID.NAV:
    case TAG_ID.MAIN:
    case TAG_ID.MENU:
    case TAG_ID.ASIDE:
    case TAG_ID.CENTER:
    case TAG_ID.FIGURE:
    case TAG_ID.FOOTER:
    case TAG_ID.HEADER:
    case TAG_ID.HGROUP:
    case TAG_ID.DIALOG:
    case TAG_ID.DETAILS:
    case TAG_ID.ADDRESS:
    case TAG_ID.ARTICLE:
    case TAG_ID.SECTION:
    case TAG_ID.SUMMARY:
    case TAG_ID.FIELDSET:
    case TAG_ID.BLOCKQUOTE:
    case TAG_ID.FIGCAPTION: {
      addressStartTagInBody(t, n);
      break;
    }
    case TAG_ID.LI:
    case TAG_ID.DD:
    case TAG_ID.DT: {
      listItemStartTagInBody(t, n);
      break;
    }
    case TAG_ID.BR:
    case TAG_ID.IMG:
    case TAG_ID.WBR:
    case TAG_ID.AREA:
    case TAG_ID.EMBED:
    case TAG_ID.KEYGEN: {
      areaStartTagInBody(t, n);
      break;
    }
    case TAG_ID.HR: {
      hrStartTagInBody(t, n);
      break;
    }
    case TAG_ID.RB:
    case TAG_ID.RTC: {
      rbStartTagInBody(t, n);
      break;
    }
    case TAG_ID.RT:
    case TAG_ID.RP: {
      rtStartTagInBody(t, n);
      break;
    }
    case TAG_ID.PRE:
    case TAG_ID.LISTING: {
      preStartTagInBody(t, n);
      break;
    }
    case TAG_ID.XMP: {
      xmpStartTagInBody(t, n);
      break;
    }
    case TAG_ID.SVG: {
      svgStartTagInBody(t, n);
      break;
    }
    case TAG_ID.HTML: {
      htmlStartTagInBody(t, n);
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.STYLE:
    case TAG_ID.TITLE:
    case TAG_ID.SCRIPT:
    case TAG_ID.BGSOUND:
    case TAG_ID.BASEFONT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(t, n);
      break;
    }
    case TAG_ID.BODY: {
      bodyStartTagInBody(t, n);
      break;
    }
    case TAG_ID.FORM: {
      formStartTagInBody(t, n);
      break;
    }
    case TAG_ID.NOBR: {
      nobrStartTagInBody(t, n);
      break;
    }
    case TAG_ID.MATH: {
      mathStartTagInBody(t, n);
      break;
    }
    case TAG_ID.TABLE: {
      tableStartTagInBody(t, n);
      break;
    }
    case TAG_ID.INPUT: {
      inputStartTagInBody(t, n);
      break;
    }
    case TAG_ID.PARAM:
    case TAG_ID.TRACK:
    case TAG_ID.SOURCE: {
      paramStartTagInBody(t, n);
      break;
    }
    case TAG_ID.IMAGE: {
      imageStartTagInBody(t, n);
      break;
    }
    case TAG_ID.BUTTON: {
      buttonStartTagInBody(t, n);
      break;
    }
    case TAG_ID.APPLET:
    case TAG_ID.OBJECT:
    case TAG_ID.MARQUEE: {
      appletStartTagInBody(t, n);
      break;
    }
    case TAG_ID.IFRAME: {
      iframeStartTagInBody(t, n);
      break;
    }
    case TAG_ID.SELECT: {
      selectStartTagInBody(t, n);
      break;
    }
    case TAG_ID.OPTION:
    case TAG_ID.OPTGROUP: {
      optgroupStartTagInBody(t, n);
      break;
    }
    case TAG_ID.NOEMBED: {
      noembedStartTagInBody(t, n);
      break;
    }
    case TAG_ID.FRAMESET: {
      framesetStartTagInBody(t, n);
      break;
    }
    case TAG_ID.TEXTAREA: {
      textareaStartTagInBody(t, n);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      t.options.scriptingEnabled ? noembedStartTagInBody(t, n) : genericStartTagInBody(t, n);
      break;
    }
    case TAG_ID.PLAINTEXT: {
      plaintextStartTagInBody(t, n);
      break;
    }
    case TAG_ID.COL:
    case TAG_ID.TH:
    case TAG_ID.TD:
    case TAG_ID.TR:
    case TAG_ID.HEAD:
    case TAG_ID.FRAME:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.CAPTION:
    case TAG_ID.COLGROUP:
      break;
    default:
      genericStartTagInBody(t, n);
  }
}
function bodyEndTagInBody(t, n) {
  if (t.openElements.hasInScope(TAG_ID.BODY) && (t.insertionMode = InsertionMode.AFTER_BODY, t.options.sourceCodeLocationInfo)) {
    const s = t.openElements.tryPeekProperlyNestedBodyElement();
    s && t._setEndLocation(s, n);
  }
}
function htmlEndTagInBody(t, n) {
  t.openElements.hasInScope(TAG_ID.BODY) && (t.insertionMode = InsertionMode.AFTER_BODY, endTagAfterBody(t, n));
}
function addressEndTagInBody(t, n) {
  const s = n.tagID;
  t.openElements.hasInScope(s) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(s));
}
function formEndTagInBody(t) {
  const n = t.openElements.tmplCount > 0, { formElement: s } = t;
  n || (t.formElement = null), (s || n) && t.openElements.hasInScope(TAG_ID.FORM) && (t.openElements.generateImpliedEndTags(), n ? t.openElements.popUntilTagNamePopped(TAG_ID.FORM) : s && t.openElements.remove(s));
}
function pEndTagInBody(t) {
  t.openElements.hasInButtonScope(TAG_ID.P) || t._insertFakeElement(TAG_NAMES.P, TAG_ID.P), t._closePElement();
}
function liEndTagInBody(t) {
  t.openElements.hasInListItemScope(TAG_ID.LI) && (t.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI), t.openElements.popUntilTagNamePopped(TAG_ID.LI));
}
function ddEndTagInBody(t, n) {
  const s = n.tagID;
  t.openElements.hasInScope(s) && (t.openElements.generateImpliedEndTagsWithExclusion(s), t.openElements.popUntilTagNamePopped(s));
}
function numberedHeaderEndTagInBody(t) {
  t.openElements.hasNumberedHeaderInScope() && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilNumberedHeaderPopped());
}
function appletEndTagInBody(t, n) {
  const s = n.tagID;
  t.openElements.hasInScope(s) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(s), t.activeFormattingElements.clearToLastMarker());
}
function brEndTagInBody(t) {
  t._reconstructActiveFormattingElements(), t._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR), t.openElements.pop(), t.framesetOk = !1;
}
function genericEndTagInBody(t, n) {
  const s = n.tagName, a = n.tagID;
  for (let i = t.openElements.stackTop; i > 0; i--) {
    const o = t.openElements.items[i], u = t.openElements.tagIDs[i];
    if (a === u && (a !== TAG_ID.UNKNOWN || t.treeAdapter.getTagName(o) === s)) {
      t.openElements.generateImpliedEndTagsWithExclusion(a), t.openElements.stackTop >= i && t.openElements.shortenToLength(i);
      break;
    }
    if (t._isSpecialElement(o, u))
      break;
  }
}
function endTagInBody(t, n) {
  switch (n.tagID) {
    case TAG_ID.A:
    case TAG_ID.B:
    case TAG_ID.I:
    case TAG_ID.S:
    case TAG_ID.U:
    case TAG_ID.EM:
    case TAG_ID.TT:
    case TAG_ID.BIG:
    case TAG_ID.CODE:
    case TAG_ID.FONT:
    case TAG_ID.NOBR:
    case TAG_ID.SMALL:
    case TAG_ID.STRIKE:
    case TAG_ID.STRONG: {
      callAdoptionAgency(t, n);
      break;
    }
    case TAG_ID.P: {
      pEndTagInBody(t);
      break;
    }
    case TAG_ID.DL:
    case TAG_ID.UL:
    case TAG_ID.OL:
    case TAG_ID.DIR:
    case TAG_ID.DIV:
    case TAG_ID.NAV:
    case TAG_ID.PRE:
    case TAG_ID.MAIN:
    case TAG_ID.MENU:
    case TAG_ID.ASIDE:
    case TAG_ID.BUTTON:
    case TAG_ID.CENTER:
    case TAG_ID.FIGURE:
    case TAG_ID.FOOTER:
    case TAG_ID.HEADER:
    case TAG_ID.HGROUP:
    case TAG_ID.DIALOG:
    case TAG_ID.ADDRESS:
    case TAG_ID.ARTICLE:
    case TAG_ID.DETAILS:
    case TAG_ID.SECTION:
    case TAG_ID.SUMMARY:
    case TAG_ID.LISTING:
    case TAG_ID.FIELDSET:
    case TAG_ID.BLOCKQUOTE:
    case TAG_ID.FIGCAPTION: {
      addressEndTagInBody(t, n);
      break;
    }
    case TAG_ID.LI: {
      liEndTagInBody(t);
      break;
    }
    case TAG_ID.DD:
    case TAG_ID.DT: {
      ddEndTagInBody(t, n);
      break;
    }
    case TAG_ID.H1:
    case TAG_ID.H2:
    case TAG_ID.H3:
    case TAG_ID.H4:
    case TAG_ID.H5:
    case TAG_ID.H6: {
      numberedHeaderEndTagInBody(t);
      break;
    }
    case TAG_ID.BR: {
      brEndTagInBody(t);
      break;
    }
    case TAG_ID.BODY: {
      bodyEndTagInBody(t, n);
      break;
    }
    case TAG_ID.HTML: {
      htmlEndTagInBody(t, n);
      break;
    }
    case TAG_ID.FORM: {
      formEndTagInBody(t);
      break;
    }
    case TAG_ID.APPLET:
    case TAG_ID.OBJECT:
    case TAG_ID.MARQUEE: {
      appletEndTagInBody(t, n);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(t, n);
      break;
    }
    default:
      genericEndTagInBody(t, n);
  }
}
function eofInBody(t, n) {
  t.tmplInsertionModeStack.length > 0 ? eofInTemplate(t, n) : stopParsing(t, n);
}
function endTagInText(t, n) {
  var s;
  n.tagID === TAG_ID.SCRIPT && ((s = t.scriptHandler) === null || s === void 0 || s.call(t, t.openElements.current)), t.openElements.pop(), t.insertionMode = t.originalInsertionMode;
}
function eofInText(t, n) {
  t._err(n, ERR.eofInElementThatCanContainOnlyText), t.openElements.pop(), t.insertionMode = t.originalInsertionMode, t.onEof(n);
}
function characterInTable(t, n) {
  if (TABLE_STRUCTURE_TAGS.has(t.openElements.currentTagId))
    switch (t.pendingCharacterTokens.length = 0, t.hasNonWhitespacePendingCharacterToken = !1, t.originalInsertionMode = t.insertionMode, t.insertionMode = InsertionMode.IN_TABLE_TEXT, n.type) {
      case TokenType.CHARACTER: {
        characterInTableText(t, n);
        break;
      }
      case TokenType.WHITESPACE_CHARACTER: {
        whitespaceCharacterInTableText(t, n);
        break;
      }
    }
  else
    tokenInTable(t, n);
}
function captionStartTagInTable(t, n) {
  t.openElements.clearBackToTableContext(), t.activeFormattingElements.insertMarker(), t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(t, n) {
  t.openElements.clearBackToTableContext(), t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(t, n) {
  t.openElements.clearBackToTableContext(), t._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP), t.insertionMode = InsertionMode.IN_COLUMN_GROUP, startTagInColumnGroup(t, n);
}
function tbodyStartTagInTable(t, n) {
  t.openElements.clearBackToTableContext(), t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(t, n) {
  t.openElements.clearBackToTableContext(), t._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY), t.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(t, n);
}
function tableStartTagInTable(t, n) {
  t.openElements.hasInTableScope(TAG_ID.TABLE) && (t.openElements.popUntilTagNamePopped(TAG_ID.TABLE), t._resetInsertionMode(), t._processStartTag(n));
}
function inputStartTagInTable(t, n) {
  isHiddenInput(n) ? t._appendElement(n, NS.HTML) : tokenInTable(t, n), n.ackSelfClosing = !0;
}
function formStartTagInTable(t, n) {
  !t.formElement && t.openElements.tmplCount === 0 && (t._insertElement(n, NS.HTML), t.formElement = t.openElements.current, t.openElements.pop());
}
function startTagInTable(t, n) {
  switch (n.tagID) {
    case TAG_ID.TD:
    case TAG_ID.TH:
    case TAG_ID.TR: {
      tdStartTagInTable(t, n);
      break;
    }
    case TAG_ID.STYLE:
    case TAG_ID.SCRIPT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(t, n);
      break;
    }
    case TAG_ID.COL: {
      colStartTagInTable(t, n);
      break;
    }
    case TAG_ID.FORM: {
      formStartTagInTable(t, n);
      break;
    }
    case TAG_ID.TABLE: {
      tableStartTagInTable(t, n);
      break;
    }
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      tbodyStartTagInTable(t, n);
      break;
    }
    case TAG_ID.INPUT: {
      inputStartTagInTable(t, n);
      break;
    }
    case TAG_ID.CAPTION: {
      captionStartTagInTable(t, n);
      break;
    }
    case TAG_ID.COLGROUP: {
      colgroupStartTagInTable(t, n);
      break;
    }
    default:
      tokenInTable(t, n);
  }
}
function endTagInTable(t, n) {
  switch (n.tagID) {
    case TAG_ID.TABLE: {
      t.openElements.hasInTableScope(TAG_ID.TABLE) && (t.openElements.popUntilTagNamePopped(TAG_ID.TABLE), t._resetInsertionMode());
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(t, n);
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TBODY:
    case TAG_ID.TD:
    case TAG_ID.TFOOT:
    case TAG_ID.TH:
    case TAG_ID.THEAD:
    case TAG_ID.TR:
      break;
    default:
      tokenInTable(t, n);
  }
}
function tokenInTable(t, n) {
  const s = t.fosterParentingEnabled;
  t.fosterParentingEnabled = !0, modeInBody(t, n), t.fosterParentingEnabled = s;
}
function whitespaceCharacterInTableText(t, n) {
  t.pendingCharacterTokens.push(n);
}
function characterInTableText(t, n) {
  t.pendingCharacterTokens.push(n), t.hasNonWhitespacePendingCharacterToken = !0;
}
function tokenInTableText(t, n) {
  let s = 0;
  if (t.hasNonWhitespacePendingCharacterToken)
    for (; s < t.pendingCharacterTokens.length; s++)
      tokenInTable(t, t.pendingCharacterTokens[s]);
  else
    for (; s < t.pendingCharacterTokens.length; s++)
      t._insertCharacters(t.pendingCharacterTokens[s]);
  t.insertionMode = t.originalInsertionMode, t._processToken(n);
}
const TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([TAG_ID.CAPTION, TAG_ID.COL, TAG_ID.COLGROUP, TAG_ID.TBODY, TAG_ID.TD, TAG_ID.TFOOT, TAG_ID.TH, TAG_ID.THEAD, TAG_ID.TR]);
function startTagInCaption(t, n) {
  const s = n.tagID;
  TABLE_VOID_ELEMENTS.has(s) ? t.openElements.hasInTableScope(TAG_ID.CAPTION) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(TAG_ID.CAPTION), t.activeFormattingElements.clearToLastMarker(), t.insertionMode = InsertionMode.IN_TABLE, startTagInTable(t, n)) : startTagInBody(t, n);
}
function endTagInCaption(t, n) {
  const s = n.tagID;
  switch (s) {
    case TAG_ID.CAPTION:
    case TAG_ID.TABLE: {
      t.openElements.hasInTableScope(TAG_ID.CAPTION) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(TAG_ID.CAPTION), t.activeFormattingElements.clearToLastMarker(), t.insertionMode = InsertionMode.IN_TABLE, s === TAG_ID.TABLE && endTagInTable(t, n));
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TBODY:
    case TAG_ID.TD:
    case TAG_ID.TFOOT:
    case TAG_ID.TH:
    case TAG_ID.THEAD:
    case TAG_ID.TR:
      break;
    default:
      endTagInBody(t, n);
  }
}
function startTagInColumnGroup(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.COL: {
      t._appendElement(n, NS.HTML), n.ackSelfClosing = !0;
      break;
    }
    case TAG_ID.TEMPLATE: {
      startTagInHead(t, n);
      break;
    }
    default:
      tokenInColumnGroup(t, n);
  }
}
function endTagInColumnGroup(t, n) {
  switch (n.tagID) {
    case TAG_ID.COLGROUP: {
      t.openElements.currentTagId === TAG_ID.COLGROUP && (t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(t, n);
      break;
    }
    case TAG_ID.COL:
      break;
    default:
      tokenInColumnGroup(t, n);
  }
}
function tokenInColumnGroup(t, n) {
  t.openElements.currentTagId === TAG_ID.COLGROUP && (t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE, t._processToken(n));
}
function startTagInTableBody(t, n) {
  switch (n.tagID) {
    case TAG_ID.TR: {
      t.openElements.clearBackToTableBodyContext(), t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.IN_ROW;
      break;
    }
    case TAG_ID.TH:
    case TAG_ID.TD: {
      t.openElements.clearBackToTableBodyContext(), t._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR), t.insertionMode = InsertionMode.IN_ROW, startTagInRow(t, n);
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      t.openElements.hasTableBodyContextInTableScope() && (t.openElements.clearBackToTableBodyContext(), t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE, startTagInTable(t, n));
      break;
    }
    default:
      startTagInTable(t, n);
  }
}
function endTagInTableBody(t, n) {
  const s = n.tagID;
  switch (n.tagID) {
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      t.openElements.hasInTableScope(s) && (t.openElements.clearBackToTableBodyContext(), t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE);
      break;
    }
    case TAG_ID.TABLE: {
      t.openElements.hasTableBodyContextInTableScope() && (t.openElements.clearBackToTableBodyContext(), t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE, endTagInTable(t, n));
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TD:
    case TAG_ID.TH:
    case TAG_ID.TR:
      break;
    default:
      endTagInTable(t, n);
  }
}
function startTagInRow(t, n) {
  switch (n.tagID) {
    case TAG_ID.TH:
    case TAG_ID.TD: {
      t.openElements.clearBackToTableRowContext(), t._insertElement(n, NS.HTML), t.insertionMode = InsertionMode.IN_CELL, t.activeFormattingElements.insertMarker();
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      t.openElements.hasInTableScope(TAG_ID.TR) && (t.openElements.clearBackToTableRowContext(), t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(t, n));
      break;
    }
    default:
      startTagInTable(t, n);
  }
}
function endTagInRow(t, n) {
  switch (n.tagID) {
    case TAG_ID.TR: {
      t.openElements.hasInTableScope(TAG_ID.TR) && (t.openElements.clearBackToTableRowContext(), t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE_BODY);
      break;
    }
    case TAG_ID.TABLE: {
      t.openElements.hasInTableScope(TAG_ID.TR) && (t.openElements.clearBackToTableRowContext(), t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE_BODY, endTagInTableBody(t, n));
      break;
    }
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      (t.openElements.hasInTableScope(n.tagID) || t.openElements.hasInTableScope(TAG_ID.TR)) && (t.openElements.clearBackToTableRowContext(), t.openElements.pop(), t.insertionMode = InsertionMode.IN_TABLE_BODY, endTagInTableBody(t, n));
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TD:
    case TAG_ID.TH:
      break;
    default:
      endTagInTable(t, n);
  }
}
function startTagInCell(t, n) {
  const s = n.tagID;
  TABLE_VOID_ELEMENTS.has(s) ? (t.openElements.hasInTableScope(TAG_ID.TD) || t.openElements.hasInTableScope(TAG_ID.TH)) && (t._closeTableCell(), startTagInRow(t, n)) : startTagInBody(t, n);
}
function endTagInCell(t, n) {
  const s = n.tagID;
  switch (s) {
    case TAG_ID.TD:
    case TAG_ID.TH: {
      t.openElements.hasInTableScope(s) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(s), t.activeFormattingElements.clearToLastMarker(), t.insertionMode = InsertionMode.IN_ROW);
      break;
    }
    case TAG_ID.TABLE:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      t.openElements.hasInTableScope(s) && (t._closeTableCell(), endTagInRow(t, n));
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
      break;
    default:
      endTagInBody(t, n);
  }
}
function startTagInSelect(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.OPTION: {
      t.openElements.currentTagId === TAG_ID.OPTION && t.openElements.pop(), t._insertElement(n, NS.HTML);
      break;
    }
    case TAG_ID.OPTGROUP: {
      t.openElements.currentTagId === TAG_ID.OPTION && t.openElements.pop(), t.openElements.currentTagId === TAG_ID.OPTGROUP && t.openElements.pop(), t._insertElement(n, NS.HTML);
      break;
    }
    case TAG_ID.INPUT:
    case TAG_ID.KEYGEN:
    case TAG_ID.TEXTAREA:
    case TAG_ID.SELECT: {
      t.openElements.hasInSelectScope(TAG_ID.SELECT) && (t.openElements.popUntilTagNamePopped(TAG_ID.SELECT), t._resetInsertionMode(), n.tagID !== TAG_ID.SELECT && t._processStartTag(n));
      break;
    }
    case TAG_ID.SCRIPT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(t, n);
      break;
    }
  }
}
function endTagInSelect(t, n) {
  switch (n.tagID) {
    case TAG_ID.OPTGROUP: {
      t.openElements.stackTop > 0 && t.openElements.currentTagId === TAG_ID.OPTION && t.openElements.tagIDs[t.openElements.stackTop - 1] === TAG_ID.OPTGROUP && t.openElements.pop(), t.openElements.currentTagId === TAG_ID.OPTGROUP && t.openElements.pop();
      break;
    }
    case TAG_ID.OPTION: {
      t.openElements.currentTagId === TAG_ID.OPTION && t.openElements.pop();
      break;
    }
    case TAG_ID.SELECT: {
      t.openElements.hasInSelectScope(TAG_ID.SELECT) && (t.openElements.popUntilTagNamePopped(TAG_ID.SELECT), t._resetInsertionMode());
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(t, n);
      break;
    }
  }
}
function startTagInSelectInTable(t, n) {
  const s = n.tagID;
  s === TAG_ID.CAPTION || s === TAG_ID.TABLE || s === TAG_ID.TBODY || s === TAG_ID.TFOOT || s === TAG_ID.THEAD || s === TAG_ID.TR || s === TAG_ID.TD || s === TAG_ID.TH ? (t.openElements.popUntilTagNamePopped(TAG_ID.SELECT), t._resetInsertionMode(), t._processStartTag(n)) : startTagInSelect(t, n);
}
function endTagInSelectInTable(t, n) {
  const s = n.tagID;
  s === TAG_ID.CAPTION || s === TAG_ID.TABLE || s === TAG_ID.TBODY || s === TAG_ID.TFOOT || s === TAG_ID.THEAD || s === TAG_ID.TR || s === TAG_ID.TD || s === TAG_ID.TH ? t.openElements.hasInTableScope(s) && (t.openElements.popUntilTagNamePopped(TAG_ID.SELECT), t._resetInsertionMode(), t.onEndTag(n)) : endTagInSelect(t, n);
}
function startTagInTemplate(t, n) {
  switch (n.tagID) {
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.SCRIPT:
    case TAG_ID.STYLE:
    case TAG_ID.TEMPLATE:
    case TAG_ID.TITLE: {
      startTagInHead(t, n);
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      t.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE, t.insertionMode = InsertionMode.IN_TABLE, startTagInTable(t, n);
      break;
    }
    case TAG_ID.COL: {
      t.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP, t.insertionMode = InsertionMode.IN_COLUMN_GROUP, startTagInColumnGroup(t, n);
      break;
    }
    case TAG_ID.TR: {
      t.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY, t.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(t, n);
      break;
    }
    case TAG_ID.TD:
    case TAG_ID.TH: {
      t.tmplInsertionModeStack[0] = InsertionMode.IN_ROW, t.insertionMode = InsertionMode.IN_ROW, startTagInRow(t, n);
      break;
    }
    default:
      t.tmplInsertionModeStack[0] = InsertionMode.IN_BODY, t.insertionMode = InsertionMode.IN_BODY, startTagInBody(t, n);
  }
}
function endTagInTemplate(t, n) {
  n.tagID === TAG_ID.TEMPLATE && templateEndTagInHead(t, n);
}
function eofInTemplate(t, n) {
  t.openElements.tmplCount > 0 ? (t.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE), t.activeFormattingElements.clearToLastMarker(), t.tmplInsertionModeStack.shift(), t._resetInsertionMode(), t.onEof(n)) : stopParsing(t, n);
}
function startTagAfterBody(t, n) {
  n.tagID === TAG_ID.HTML ? startTagInBody(t, n) : tokenAfterBody(t, n);
}
function endTagAfterBody(t, n) {
  var s;
  if (n.tagID === TAG_ID.HTML) {
    if (t.fragmentContext || (t.insertionMode = InsertionMode.AFTER_AFTER_BODY), t.options.sourceCodeLocationInfo && t.openElements.tagIDs[0] === TAG_ID.HTML) {
      t._setEndLocation(t.openElements.items[0], n);
      const a = t.openElements.items[1];
      a && !(!((s = t.treeAdapter.getNodeSourceCodeLocation(a)) === null || s === void 0) && s.endTag) && t._setEndLocation(a, n);
    }
  } else
    tokenAfterBody(t, n);
}
function tokenAfterBody(t, n) {
  t.insertionMode = InsertionMode.IN_BODY, modeInBody(t, n);
}
function startTagInFrameset(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.FRAMESET: {
      t._insertElement(n, NS.HTML);
      break;
    }
    case TAG_ID.FRAME: {
      t._appendElement(n, NS.HTML), n.ackSelfClosing = !0;
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(t, n);
      break;
    }
  }
}
function endTagInFrameset(t, n) {
  n.tagID === TAG_ID.FRAMESET && !t.openElements.isRootHtmlElementCurrent() && (t.openElements.pop(), !t.fragmentContext && t.openElements.currentTagId !== TAG_ID.FRAMESET && (t.insertionMode = InsertionMode.AFTER_FRAMESET));
}
function startTagAfterFrameset(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(t, n);
      break;
    }
  }
}
function endTagAfterFrameset(t, n) {
  n.tagID === TAG_ID.HTML && (t.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET);
}
function startTagAfterAfterBody(t, n) {
  n.tagID === TAG_ID.HTML ? startTagInBody(t, n) : tokenAfterAfterBody(t, n);
}
function tokenAfterAfterBody(t, n) {
  t.insertionMode = InsertionMode.IN_BODY, modeInBody(t, n);
}
function startTagAfterAfterFrameset(t, n) {
  switch (n.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(t, n);
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(t, n);
      break;
    }
  }
}
function nullCharacterInForeignContent(t, n) {
  n.chars = REPLACEMENT_CHARACTER, t._insertCharacters(n);
}
function characterInForeignContent(t, n) {
  t._insertCharacters(n), t.framesetOk = !1;
}
function popUntilHtmlOrIntegrationPoint(t) {
  for (; t.treeAdapter.getNamespaceURI(t.openElements.current) !== NS.HTML && !t._isIntegrationPoint(t.openElements.currentTagId, t.openElements.current); )
    t.openElements.pop();
}
function startTagInForeignContent(t, n) {
  if (causesExit(n))
    popUntilHtmlOrIntegrationPoint(t), t._startTagOutsideForeignContent(n);
  else {
    const s = t._getAdjustedCurrentElement(), a = t.treeAdapter.getNamespaceURI(s);
    a === NS.MATHML ? adjustTokenMathMLAttrs(n) : a === NS.SVG && (adjustTokenSVGTagName(n), adjustTokenSVGAttrs(n)), adjustTokenXMLAttrs(n), n.selfClosing ? t._appendElement(n, a) : t._insertElement(n, a), n.ackSelfClosing = !0;
  }
}
function endTagInForeignContent(t, n) {
  if (n.tagID === TAG_ID.P || n.tagID === TAG_ID.BR) {
    popUntilHtmlOrIntegrationPoint(t), t._endTagOutsideForeignContent(n);
    return;
  }
  for (let s = t.openElements.stackTop; s > 0; s--) {
    const a = t.openElements.items[s];
    if (t.treeAdapter.getNamespaceURI(a) === NS.HTML) {
      t._endTagOutsideForeignContent(n);
      break;
    }
    const i = t.treeAdapter.getTagName(a);
    if (i.toLowerCase() === n.tagName) {
      n.tagName = i, t.openElements.shortenToLength(s);
      break;
    }
  }
}
const VOID_ELEMENTS = /* @__PURE__ */ new Set([
  TAG_NAMES.AREA,
  TAG_NAMES.BASE,
  TAG_NAMES.BASEFONT,
  TAG_NAMES.BGSOUND,
  TAG_NAMES.BR,
  TAG_NAMES.COL,
  TAG_NAMES.EMBED,
  TAG_NAMES.FRAME,
  TAG_NAMES.HR,
  TAG_NAMES.IMG,
  TAG_NAMES.INPUT,
  TAG_NAMES.KEYGEN,
  TAG_NAMES.LINK,
  TAG_NAMES.META,
  TAG_NAMES.PARAM,
  TAG_NAMES.SOURCE,
  TAG_NAMES.TRACK,
  TAG_NAMES.WBR
]);
function isVoidElement(t, n) {
  return n.treeAdapter.isElementNode(t) && n.treeAdapter.getNamespaceURI(t) === NS.HTML && VOID_ELEMENTS.has(n.treeAdapter.getTagName(t));
}
const defaultOpts = { treeAdapter: defaultTreeAdapter, scriptingEnabled: !0 };
function serializeOuter(t, n) {
  const s = { ...defaultOpts, ...n };
  return serializeNode(t, s);
}
function serializeChildNodes(t, n) {
  let s = "";
  const a = n.treeAdapter.isElementNode(t) && n.treeAdapter.getTagName(t) === TAG_NAMES.TEMPLATE && n.treeAdapter.getNamespaceURI(t) === NS.HTML ? n.treeAdapter.getTemplateContent(t) : t, i = n.treeAdapter.getChildNodes(a);
  if (i)
    for (const o of i)
      s += serializeNode(o, n);
  return s;
}
function serializeNode(t, n) {
  return n.treeAdapter.isElementNode(t) ? serializeElement(t, n) : n.treeAdapter.isTextNode(t) ? serializeTextNode(t, n) : n.treeAdapter.isCommentNode(t) ? serializeCommentNode(t, n) : n.treeAdapter.isDocumentTypeNode(t) ? serializeDocumentTypeNode(t, n) : "";
}
function serializeElement(t, n) {
  const s = n.treeAdapter.getTagName(t);
  return `<${s}${serializeAttributes(t, n)}>${isVoidElement(t, n) ? "" : `${serializeChildNodes(t, n)}</${s}>`}`;
}
function serializeAttributes(t, { treeAdapter: n }) {
  let s = "";
  for (const a of n.getAttrList(t)) {
    if (s += " ", !a.namespace)
      s += a.name;
    else
      switch (a.namespace) {
        case NS.XML: {
          s += `xml:${a.name}`;
          break;
        }
        case NS.XMLNS: {
          a.name !== "xmlns" && (s += "xmlns:"), s += a.name;
          break;
        }
        case NS.XLINK: {
          s += `xlink:${a.name}`;
          break;
        }
        default:
          s += `${a.prefix}:${a.name}`;
      }
    s += `="${escapeAttribute(a.value)}"`;
  }
  return s;
}
function serializeTextNode(t, n) {
  const { treeAdapter: s } = n, a = s.getTextNodeContent(t), i = s.getParentNode(t), o = i && s.isElementNode(i) && s.getTagName(i);
  return o && s.getNamespaceURI(i) === NS.HTML && hasUnescapedText(o, n.scriptingEnabled) ? a : escapeText(a);
}
function serializeCommentNode(t, { treeAdapter: n }) {
  return `<!--${n.getCommentNodeContent(t)}-->`;
}
function serializeDocumentTypeNode(t, { treeAdapter: n }) {
  return `<!DOCTYPE ${n.getDocumentTypeNodeName(t)}>`;
}
function parse$1(t, n) {
  return Parser$1.parse(t, n);
}
function parseFragment(t, n, s) {
  typeof t == "string" && (s = n, n = t, t = null);
  const a = Parser$1.getFragmentParser(t, s);
  return a.tokenizer.write(n, !0), a.getFragment();
}
function createTextNode(t) {
  return new Text(t);
}
function enquoteDoctypeId(t) {
  const n = t.includes('"') ? "'" : '"';
  return n + t + n;
}
function serializeDoctypeContent(t, n, s) {
  let a = "!DOCTYPE ";
  return t && (a += t), n ? a += ` PUBLIC ${enquoteDoctypeId(n)}` : s && (a += " SYSTEM"), s && (a += ` ${enquoteDoctypeId(s)}`), a;
}
const adapter = {
  // Re-exports from domhandler
  isCommentNode: isComment,
  isElementNode: isTag,
  isTextNode: isText,
  //Node construction
  createDocument() {
    const t = new Document([]);
    return t["x-mode"] = DOCUMENT_MODE.NO_QUIRKS, t;
  },
  createDocumentFragment() {
    return new Document([]);
  },
  createElement(t, n, s) {
    const a = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
    for (let c = 0; c < s.length; c++) {
      const l = s[c].name;
      a[l] = s[c].value, i[l] = s[c].namespace, o[l] = s[c].prefix;
    }
    const u = new Element(t, a, []);
    return u.namespace = n, u["x-attribsNamespace"] = i, u["x-attribsPrefix"] = o, u;
  },
  createCommentNode(t) {
    return new Comment(t);
  },
  //Tree mutation
  appendChild(t, n) {
    const s = t.children[t.children.length - 1];
    s && (s.next = n, n.prev = s), t.children.push(n), n.parent = t;
  },
  insertBefore(t, n, s) {
    const a = t.children.indexOf(s), { prev: i } = s;
    i && (i.next = n, n.prev = i), s.prev = n, n.next = s, t.children.splice(a, 0, n), n.parent = t;
  },
  setTemplateContent(t, n) {
    adapter.appendChild(t, n);
  },
  getTemplateContent(t) {
    return t.children[0];
  },
  setDocumentType(t, n, s, a) {
    const i = serializeDoctypeContent(n, s, a);
    let o = t.children.find((u) => isDirective(u) && u.name === "!doctype");
    o ? o.data = i ?? null : (o = new ProcessingInstruction("!doctype", i), adapter.appendChild(t, o)), o["x-name"] = n ?? void 0, o["x-publicId"] = s ?? void 0, o["x-systemId"] = a ?? void 0;
  },
  setDocumentMode(t, n) {
    t["x-mode"] = n;
  },
  getDocumentMode(t) {
    return t["x-mode"];
  },
  detachNode(t) {
    if (t.parent) {
      const n = t.parent.children.indexOf(t), { prev: s, next: a } = t;
      t.prev = null, t.next = null, s && (s.next = a), a && (a.prev = s), t.parent.children.splice(n, 1), t.parent = null;
    }
  },
  insertText(t, n) {
    const s = t.children[t.children.length - 1];
    s && isText(s) ? s.data += n : adapter.appendChild(t, createTextNode(n));
  },
  insertTextBefore(t, n, s) {
    const a = t.children[t.children.indexOf(s) - 1];
    a && isText(a) ? a.data += n : adapter.insertBefore(t, createTextNode(n), s);
  },
  adoptAttributes(t, n) {
    for (let s = 0; s < n.length; s++) {
      const a = n[s].name;
      typeof t.attribs[a] > "u" && (t.attribs[a] = n[s].value, t["x-attribsNamespace"][a] = n[s].namespace, t["x-attribsPrefix"][a] = n[s].prefix);
    }
  },
  //Tree traversing
  getFirstChild(t) {
    return t.children[0];
  },
  getChildNodes(t) {
    return t.children;
  },
  getParentNode(t) {
    return t.parent;
  },
  getAttrList(t) {
    return t.attributes;
  },
  //Node data
  getTagName(t) {
    return t.name;
  },
  getNamespaceURI(t) {
    return t.namespace;
  },
  getTextNodeContent(t) {
    return t.data;
  },
  getCommentNodeContent(t) {
    return t.data;
  },
  getDocumentTypeNodeName(t) {
    var n;
    return (n = t["x-name"]) !== null && n !== void 0 ? n : "";
  },
  getDocumentTypeNodePublicId(t) {
    var n;
    return (n = t["x-publicId"]) !== null && n !== void 0 ? n : "";
  },
  getDocumentTypeNodeSystemId(t) {
    var n;
    return (n = t["x-systemId"]) !== null && n !== void 0 ? n : "";
  },
  //Node types
  isDocumentTypeNode(t) {
    return isDirective(t) && t.name === "!doctype";
  },
  // Source code location
  setNodeSourceCodeLocation(t, n) {
    n && (t.startIndex = n.startOffset, t.endIndex = n.endOffset), t.sourceCodeLocation = n;
  },
  getNodeSourceCodeLocation(t) {
    return t.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(t, n) {
    n.endOffset != null && (t.endIndex = n.endOffset), t.sourceCodeLocation = {
      ...t.sourceCodeLocation,
      ...n
    };
  }
};
function parseWithParse5(t, n, s, a) {
  const i = {
    scriptingEnabled: typeof n.scriptingEnabled == "boolean" ? n.scriptingEnabled : !0,
    treeAdapter: adapter,
    sourceCodeLocationInfo: n.sourceCodeLocationInfo
  };
  return s ? parse$1(t, i) : parseFragment(a, t, i);
}
const renderOpts = { treeAdapter: adapter };
function renderWithParse5(t) {
  const n = "length" in t ? t : [t];
  for (let a = 0; a < n.length; a += 1) {
    const i = n[a];
    isDocument(i) && Array.prototype.splice.call(n, a, 1, ...i.children);
  }
  let s = "";
  for (let a = 0; a < n.length; a += 1) {
    const i = n[a];
    s += serializeOuter(i, renderOpts);
  }
  return s;
}
var CharCodes;
(function(t) {
  t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Number = 35] = "Number", t[t.Amp = 38] = "Amp", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Dash = 45] = "Dash", t[t.Slash = 47] = "Slash", t[t.Zero = 48] = "Zero", t[t.Nine = 57] = "Nine", t[t.Semi = 59] = "Semi", t[t.Lt = 60] = "Lt", t[t.Eq = 61] = "Eq", t[t.Gt = 62] = "Gt", t[t.Questionmark = 63] = "Questionmark", t[t.UpperA = 65] = "UpperA", t[t.LowerA = 97] = "LowerA", t[t.UpperF = 70] = "UpperF", t[t.LowerF = 102] = "LowerF", t[t.UpperZ = 90] = "UpperZ", t[t.LowerZ = 122] = "LowerZ", t[t.LowerX = 120] = "LowerX", t[t.OpeningSquareBracket = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
var State;
(function(t) {
  t[t.Text = 1] = "Text", t[t.BeforeTagName = 2] = "BeforeTagName", t[t.InTagName = 3] = "InTagName", t[t.InSelfClosingTag = 4] = "InSelfClosingTag", t[t.BeforeClosingTagName = 5] = "BeforeClosingTagName", t[t.InClosingTagName = 6] = "InClosingTagName", t[t.AfterClosingTagName = 7] = "AfterClosingTagName", t[t.BeforeAttributeName = 8] = "BeforeAttributeName", t[t.InAttributeName = 9] = "InAttributeName", t[t.AfterAttributeName = 10] = "AfterAttributeName", t[t.BeforeAttributeValue = 11] = "BeforeAttributeValue", t[t.InAttributeValueDq = 12] = "InAttributeValueDq", t[t.InAttributeValueSq = 13] = "InAttributeValueSq", t[t.InAttributeValueNq = 14] = "InAttributeValueNq", t[t.BeforeDeclaration = 15] = "BeforeDeclaration", t[t.InDeclaration = 16] = "InDeclaration", t[t.InProcessingInstruction = 17] = "InProcessingInstruction", t[t.BeforeComment = 18] = "BeforeComment", t[t.CDATASequence = 19] = "CDATASequence", t[t.InSpecialComment = 20] = "InSpecialComment", t[t.InCommentLike = 21] = "InCommentLike", t[t.BeforeSpecialS = 22] = "BeforeSpecialS", t[t.SpecialStartSequence = 23] = "SpecialStartSequence", t[t.InSpecialTag = 24] = "InSpecialTag", t[t.BeforeEntity = 25] = "BeforeEntity", t[t.BeforeNumericEntity = 26] = "BeforeNumericEntity", t[t.InNamedEntity = 27] = "InNamedEntity", t[t.InNumericEntity = 28] = "InNumericEntity", t[t.InHexEntity = 29] = "InHexEntity";
})(State || (State = {}));
function isWhitespace(t) {
  return t === CharCodes.Space || t === CharCodes.NewLine || t === CharCodes.Tab || t === CharCodes.FormFeed || t === CharCodes.CarriageReturn;
}
function isEndOfTagSection(t) {
  return t === CharCodes.Slash || t === CharCodes.Gt || isWhitespace(t);
}
function isNumber(t) {
  return t >= CharCodes.Zero && t <= CharCodes.Nine;
}
function isASCIIAlpha(t) {
  return t >= CharCodes.LowerA && t <= CharCodes.LowerZ || t >= CharCodes.UpperA && t <= CharCodes.UpperZ;
}
function isHexDigit(t) {
  return t >= CharCodes.UpperA && t <= CharCodes.UpperF || t >= CharCodes.LowerA && t <= CharCodes.LowerF;
}
var QuoteType;
(function(t) {
  t[t.NoValue = 0] = "NoValue", t[t.Unquoted = 1] = "Unquoted", t[t.Single = 2] = "Single", t[t.Double = 3] = "Double";
})(QuoteType || (QuoteType = {}));
const Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
  // `</title`
};
class Tokenizer {
  constructor({ xmlMode: n = !1, decodeEntities: s = !0 }, a) {
    this.cbs = a, this.state = State.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = State.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = n, this.decodeEntities = s, this.entityTrie = n ? xmlDecodeTree : htmlDecodeTree;
  }
  reset() {
    this.state = State.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = State.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
  }
  write(n) {
    this.offset += this.buffer.length, this.buffer = n, this.parse();
  }
  end() {
    this.running && this.finish();
  }
  pause() {
    this.running = !1;
  }
  resume() {
    this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
  }
  /**
   * The current index within all of the written data.
   */
  getIndex() {
    return this.index;
  }
  /**
   * The start of the current section.
   */
  getSectionStart() {
    return this.sectionStart;
  }
  stateText(n) {
    n === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = State.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && n === CharCodes.Amp && (this.state = State.BeforeEntity);
  }
  stateSpecialStartSequence(n) {
    const s = this.sequenceIndex === this.currentSequence.length;
    if (!(s ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(n)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (n | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.isSpecial = !1;
    else if (!s) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = State.InTagName, this.stateInTagName(n);
  }
  /** Look for an end tag. For <title> tags, also decode entities. */
  stateInSpecialTag(n) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (n === CharCodes.Gt || isWhitespace(n)) {
        const s = this.index - this.currentSequence.length;
        if (this.sectionStart < s) {
          const a = this.index;
          this.index = s, this.cbs.ontext(this.sectionStart, s), this.index = a;
        }
        this.isSpecial = !1, this.sectionStart = s + 2, this.stateInClosingTagName(n);
        return;
      }
      this.sequenceIndex = 0;
    }
    (n | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Sequences.TitleEnd ? this.decodeEntities && n === CharCodes.Amp && (this.state = State.BeforeEntity) : this.fastForwardTo(CharCodes.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(n === CharCodes.Lt);
  }
  stateCDATASequence(n) {
    n === Sequences.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Sequences.Cdata.length && (this.state = State.InCommentLike, this.currentSequence = Sequences.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = State.InDeclaration, this.stateInDeclaration(n));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(n) {
    for (; ++this.index < this.buffer.length + this.offset; )
      if (this.buffer.charCodeAt(this.index - this.offset) === n)
        return !0;
    return this.index = this.buffer.length + this.offset - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(n) {
    n === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Sequences.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = State.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : n !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */
  isTagStartChar(n) {
    return this.xmlMode ? !isEndOfTagSection(n) : isASCIIAlpha(n);
  }
  startSpecial(n, s) {
    this.isSpecial = !0, this.currentSequence = n, this.sequenceIndex = s, this.state = State.SpecialStartSequence;
  }
  stateBeforeTagName(n) {
    if (n === CharCodes.ExclamationMark)
      this.state = State.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (n === CharCodes.Questionmark)
      this.state = State.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(n)) {
      const s = n | 32;
      this.sectionStart = this.index, !this.xmlMode && s === Sequences.TitleEnd[2] ? this.startSpecial(Sequences.TitleEnd, 3) : this.state = !this.xmlMode && s === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
    } else n === CharCodes.Slash ? this.state = State.BeforeClosingTagName : (this.state = State.Text, this.stateText(n));
  }
  stateInTagName(n) {
    isEndOfTagSection(n) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = State.BeforeAttributeName, this.stateBeforeAttributeName(n));
  }
  stateBeforeClosingTagName(n) {
    isWhitespace(n) || (n === CharCodes.Gt ? this.state = State.Text : (this.state = this.isTagStartChar(n) ? State.InClosingTagName : State.InSpecialComment, this.sectionStart = this.index));
  }
  stateInClosingTagName(n) {
    (n === CharCodes.Gt || isWhitespace(n)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = State.AfterClosingTagName, this.stateAfterClosingTagName(n));
  }
  stateAfterClosingTagName(n) {
    (n === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) && (this.state = State.Text, this.baseState = State.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeAttributeName(n) {
    n === CharCodes.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = State.InSpecialTag, this.sequenceIndex = 0) : this.state = State.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : n === CharCodes.Slash ? this.state = State.InSelfClosingTag : isWhitespace(n) || (this.state = State.InAttributeName, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(n) {
    n === CharCodes.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = State.Text, this.baseState = State.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : isWhitespace(n) || (this.state = State.BeforeAttributeName, this.stateBeforeAttributeName(n));
  }
  stateInAttributeName(n) {
    (n === CharCodes.Eq || isEndOfTagSection(n)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = State.AfterAttributeName, this.stateAfterAttributeName(n));
  }
  stateAfterAttributeName(n) {
    n === CharCodes.Eq ? this.state = State.BeforeAttributeValue : n === CharCodes.Slash || n === CharCodes.Gt ? (this.cbs.onattribend(QuoteType.NoValue, this.index), this.state = State.BeforeAttributeName, this.stateBeforeAttributeName(n)) : isWhitespace(n) || (this.cbs.onattribend(QuoteType.NoValue, this.index), this.state = State.InAttributeName, this.sectionStart = this.index);
  }
  stateBeforeAttributeValue(n) {
    n === CharCodes.DoubleQuote ? (this.state = State.InAttributeValueDq, this.sectionStart = this.index + 1) : n === CharCodes.SingleQuote ? (this.state = State.InAttributeValueSq, this.sectionStart = this.index + 1) : isWhitespace(n) || (this.sectionStart = this.index, this.state = State.InAttributeValueNq, this.stateInAttributeValueNoQuotes(n));
  }
  handleInAttributeValue(n, s) {
    n === s || !this.decodeEntities && this.fastForwardTo(s) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(s === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index), this.state = State.BeforeAttributeName) : this.decodeEntities && n === CharCodes.Amp && (this.baseState = this.state, this.state = State.BeforeEntity);
  }
  stateInAttributeValueDoubleQuotes(n) {
    this.handleInAttributeValue(n, CharCodes.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(n) {
    this.handleInAttributeValue(n, CharCodes.SingleQuote);
  }
  stateInAttributeValueNoQuotes(n) {
    isWhitespace(n) || n === CharCodes.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(QuoteType.Unquoted, this.index), this.state = State.BeforeAttributeName, this.stateBeforeAttributeName(n)) : this.decodeEntities && n === CharCodes.Amp && (this.baseState = this.state, this.state = State.BeforeEntity);
  }
  stateBeforeDeclaration(n) {
    n === CharCodes.OpeningSquareBracket ? (this.state = State.CDATASequence, this.sequenceIndex = 0) : this.state = n === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
  }
  stateInDeclaration(n) {
    (n === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = State.Text, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(n) {
    (n === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = State.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(n) {
    n === CharCodes.Dash ? (this.state = State.InCommentLike, this.currentSequence = Sequences.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = State.InDeclaration;
  }
  stateInSpecialComment(n) {
    (n === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = State.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(n) {
    const s = n | 32;
    s === Sequences.ScriptEnd[3] ? this.startSpecial(Sequences.ScriptEnd, 4) : s === Sequences.StyleEnd[3] ? this.startSpecial(Sequences.StyleEnd, 4) : (this.state = State.InTagName, this.stateInTagName(n));
  }
  stateBeforeEntity(n) {
    this.entityExcess = 1, this.entityResult = 0, n === CharCodes.Number ? this.state = State.BeforeNumericEntity : n === CharCodes.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = State.InNamedEntity, this.stateInNamedEntity(n));
  }
  stateInNamedEntity(n) {
    if (this.entityExcess += 1, this.trieIndex = determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, n), this.trieIndex < 0) {
      this.emitNamedEntity(), this.index--;
      return;
    }
    this.trieCurrent = this.entityTrie[this.trieIndex];
    const s = this.trieCurrent & BinTrieFlags.VALUE_LENGTH;
    if (s) {
      const a = (s >> 14) - 1;
      if (!this.allowLegacyEntity() && n !== CharCodes.Semi)
        this.trieIndex += a;
      else {
        const i = this.index - this.entityExcess + 1;
        i > this.sectionStart && this.emitPartial(this.sectionStart, i), this.entityResult = this.trieIndex, this.trieIndex += a, this.entityExcess = 0, this.sectionStart = this.index + 1, a === 0 && this.emitNamedEntity();
      }
    }
  }
  emitNamedEntity() {
    if (this.state = this.baseState, this.entityResult === 0)
      return;
    switch ((this.entityTrie[this.entityResult] & BinTrieFlags.VALUE_LENGTH) >> 14) {
      case 1: {
        this.emitCodePoint(this.entityTrie[this.entityResult] & ~BinTrieFlags.VALUE_LENGTH);
        break;
      }
      case 2: {
        this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
        break;
      }
      case 3:
        this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
    }
  }
  stateBeforeNumericEntity(n) {
    (n | 32) === CharCodes.LowerX ? (this.entityExcess++, this.state = State.InHexEntity) : (this.state = State.InNumericEntity, this.stateInNumericEntity(n));
  }
  emitNumericEntity(n) {
    const s = this.index - this.entityExcess - 1;
    s + 2 + +(this.state === State.InHexEntity) !== this.index && (s > this.sectionStart && this.emitPartial(this.sectionStart, s), this.sectionStart = this.index + Number(n), this.emitCodePoint(replaceCodePoint(this.entityResult))), this.state = this.baseState;
  }
  stateInNumericEntity(n) {
    n === CharCodes.Semi ? this.emitNumericEntity(!0) : isNumber(n) ? (this.entityResult = this.entityResult * 10 + (n - CharCodes.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
  }
  stateInHexEntity(n) {
    n === CharCodes.Semi ? this.emitNumericEntity(!0) : isNumber(n) ? (this.entityResult = this.entityResult * 16 + (n - CharCodes.Zero), this.entityExcess++) : isHexDigit(n) ? (this.entityResult = this.entityResult * 16 + ((n | 32) - CharCodes.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
  }
  allowLegacyEntity() {
    return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.running && this.sectionStart !== this.index && (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse() {
    for (; this.shouldContinue(); ) {
      const n = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case State.Text: {
          this.stateText(n);
          break;
        }
        case State.SpecialStartSequence: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case State.InSpecialTag: {
          this.stateInSpecialTag(n);
          break;
        }
        case State.CDATASequence: {
          this.stateCDATASequence(n);
          break;
        }
        case State.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(n);
          break;
        }
        case State.InAttributeName: {
          this.stateInAttributeName(n);
          break;
        }
        case State.InCommentLike: {
          this.stateInCommentLike(n);
          break;
        }
        case State.InSpecialComment: {
          this.stateInSpecialComment(n);
          break;
        }
        case State.BeforeAttributeName: {
          this.stateBeforeAttributeName(n);
          break;
        }
        case State.InTagName: {
          this.stateInTagName(n);
          break;
        }
        case State.InClosingTagName: {
          this.stateInClosingTagName(n);
          break;
        }
        case State.BeforeTagName: {
          this.stateBeforeTagName(n);
          break;
        }
        case State.AfterAttributeName: {
          this.stateAfterAttributeName(n);
          break;
        }
        case State.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(n);
          break;
        }
        case State.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(n);
          break;
        }
        case State.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case State.AfterClosingTagName: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case State.BeforeSpecialS: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case State.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(n);
          break;
        }
        case State.InSelfClosingTag: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case State.InDeclaration: {
          this.stateInDeclaration(n);
          break;
        }
        case State.BeforeDeclaration: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case State.BeforeComment: {
          this.stateBeforeComment(n);
          break;
        }
        case State.InProcessingInstruction: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case State.InNamedEntity: {
          this.stateInNamedEntity(n);
          break;
        }
        case State.BeforeEntity: {
          this.stateBeforeEntity(n);
          break;
        }
        case State.InHexEntity: {
          this.stateInHexEntity(n);
          break;
        }
        case State.InNumericEntity: {
          this.stateInNumericEntity(n);
          break;
        }
        default:
          this.stateBeforeNumericEntity(n);
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    this.state === State.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const n = this.buffer.length + this.offset;
    this.state === State.InCommentLike ? this.currentSequence === Sequences.CdataEnd ? this.cbs.oncdata(this.sectionStart, n, 0) : this.cbs.oncomment(this.sectionStart, n, 0) : this.state === State.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === State.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName || this.cbs.ontext(this.sectionStart, n);
  }
  emitPartial(n, s) {
    this.baseState !== State.Text && this.baseState !== State.InSpecialTag ? this.cbs.onattribdata(n, s) : this.cbs.ontext(n, s);
  }
  emitCodePoint(n) {
    this.baseState !== State.Text && this.baseState !== State.InSpecialTag ? this.cbs.onattribentity(n) : this.cbs.ontextentity(n);
  }
}
const formTags = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), pTag = /* @__PURE__ */ new Set(["p"]), tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]), ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]), rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]), openImpliesClose = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", pTag],
  ["h1", pTag],
  ["h2", pTag],
  ["h3", pTag],
  ["h4", pTag],
  ["h5", pTag],
  ["h6", pTag],
  ["select", formTags],
  ["input", formTags],
  ["output", formTags],
  ["button", formTags],
  ["datalist", formTags],
  ["textarea", formTags],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", ddtTags],
  ["dt", ddtTags],
  ["address", pTag],
  ["article", pTag],
  ["aside", pTag],
  ["blockquote", pTag],
  ["details", pTag],
  ["div", pTag],
  ["dl", pTag],
  ["fieldset", pTag],
  ["figcaption", pTag],
  ["figure", pTag],
  ["footer", pTag],
  ["form", pTag],
  ["header", pTag],
  ["hr", pTag],
  ["main", pTag],
  ["nav", pTag],
  ["ol", pTag],
  ["pre", pTag],
  ["section", pTag],
  ["table", pTag],
  ["ul", pTag],
  ["rt", rtpTags],
  ["rp", rtpTags],
  ["tbody", tableSectionTags],
  ["tfoot", tableSectionTags]
]), voidElements = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]), htmlIntegrationElements = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), reNameEnd = /\s|\//;
class Parser {
  constructor(n, s = {}) {
    var a, i, o, u, c;
    this.options = s, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = n ?? {}, this.lowerCaseTagNames = (a = s.lowerCaseTags) !== null && a !== void 0 ? a : !s.xmlMode, this.lowerCaseAttributeNames = (i = s.lowerCaseAttributeNames) !== null && i !== void 0 ? i : !s.xmlMode, this.tokenizer = new ((o = s.Tokenizer) !== null && o !== void 0 ? o : Tokenizer)(this.options, this), (c = (u = this.cbs).onparserinit) === null || c === void 0 || c.call(u, this);
  }
  // Tokenizer event handlers
  /** @internal */
  ontext(n, s) {
    var a, i;
    const o = this.getSlice(n, s);
    this.endIndex = s - 1, (i = (a = this.cbs).ontext) === null || i === void 0 || i.call(a, o), this.startIndex = s;
  }
  /** @internal */
  ontextentity(n) {
    var s, a;
    const i = this.tokenizer.getSectionStart();
    this.endIndex = i - 1, (a = (s = this.cbs).ontext) === null || a === void 0 || a.call(s, fromCodePoint(n)), this.startIndex = i;
  }
  isVoidElement(n) {
    return !this.options.xmlMode && voidElements.has(n);
  }
  /** @internal */
  onopentagname(n, s) {
    this.endIndex = s;
    let a = this.getSlice(n, s);
    this.lowerCaseTagNames && (a = a.toLowerCase()), this.emitOpenTag(a);
  }
  emitOpenTag(n) {
    var s, a, i, o;
    this.openTagStart = this.startIndex, this.tagname = n;
    const u = !this.options.xmlMode && openImpliesClose.get(n);
    if (u)
      for (; this.stack.length > 0 && u.has(this.stack[this.stack.length - 1]); ) {
        const c = this.stack.pop();
        (a = (s = this.cbs).onclosetag) === null || a === void 0 || a.call(s, c, !0);
      }
    this.isVoidElement(n) || (this.stack.push(n), foreignContextElements.has(n) ? this.foreignContext.push(!0) : htmlIntegrationElements.has(n) && this.foreignContext.push(!1)), (o = (i = this.cbs).onopentagname) === null || o === void 0 || o.call(i, n), this.cbs.onopentag && (this.attribs = {});
  }
  endOpenTag(n) {
    var s, a;
    this.startIndex = this.openTagStart, this.attribs && ((a = (s = this.cbs).onopentag) === null || a === void 0 || a.call(s, this.tagname, this.attribs, n), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
  }
  /** @internal */
  onopentagend(n) {
    this.endIndex = n, this.endOpenTag(!1), this.startIndex = n + 1;
  }
  /** @internal */
  onclosetag(n, s) {
    var a, i, o, u, c, l;
    this.endIndex = s;
    let d = this.getSlice(n, s);
    if (this.lowerCaseTagNames && (d = d.toLowerCase()), (foreignContextElements.has(d) || htmlIntegrationElements.has(d)) && this.foreignContext.pop(), this.isVoidElement(d))
      !this.options.xmlMode && d === "br" && ((i = (a = this.cbs).onopentagname) === null || i === void 0 || i.call(a, "br"), (u = (o = this.cbs).onopentag) === null || u === void 0 || u.call(o, "br", {}, !0), (l = (c = this.cbs).onclosetag) === null || l === void 0 || l.call(c, "br", !1));
    else {
      const f = this.stack.lastIndexOf(d);
      if (f !== -1)
        if (this.cbs.onclosetag) {
          let h = this.stack.length - f;
          for (; h--; )
            this.cbs.onclosetag(this.stack.pop(), h !== 0);
        } else
          this.stack.length = f;
      else !this.options.xmlMode && d === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    }
    this.startIndex = s + 1;
  }
  /** @internal */
  onselfclosingtag(n) {
    this.endIndex = n, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = n + 1) : this.onopentagend(n);
  }
  closeCurrentTag(n) {
    var s, a;
    const i = this.tagname;
    this.endOpenTag(n), this.stack[this.stack.length - 1] === i && ((a = (s = this.cbs).onclosetag) === null || a === void 0 || a.call(s, i, !n), this.stack.pop());
  }
  /** @internal */
  onattribname(n, s) {
    this.startIndex = n;
    const a = this.getSlice(n, s);
    this.attribname = this.lowerCaseAttributeNames ? a.toLowerCase() : a;
  }
  /** @internal */
  onattribdata(n, s) {
    this.attribvalue += this.getSlice(n, s);
  }
  /** @internal */
  onattribentity(n) {
    this.attribvalue += fromCodePoint(n);
  }
  /** @internal */
  onattribend(n, s) {
    var a, i;
    this.endIndex = s, (i = (a = this.cbs).onattribute) === null || i === void 0 || i.call(a, this.attribname, this.attribvalue, n === QuoteType.Double ? '"' : n === QuoteType.Single ? "'" : n === QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
  }
  getInstructionName(n) {
    const s = n.search(reNameEnd);
    let a = s < 0 ? n : n.substr(0, s);
    return this.lowerCaseTagNames && (a = a.toLowerCase()), a;
  }
  /** @internal */
  ondeclaration(n, s) {
    this.endIndex = s;
    const a = this.getSlice(n, s);
    if (this.cbs.onprocessinginstruction) {
      const i = this.getInstructionName(a);
      this.cbs.onprocessinginstruction(`!${i}`, `!${a}`);
    }
    this.startIndex = s + 1;
  }
  /** @internal */
  onprocessinginstruction(n, s) {
    this.endIndex = s;
    const a = this.getSlice(n, s);
    if (this.cbs.onprocessinginstruction) {
      const i = this.getInstructionName(a);
      this.cbs.onprocessinginstruction(`?${i}`, `?${a}`);
    }
    this.startIndex = s + 1;
  }
  /** @internal */
  oncomment(n, s, a) {
    var i, o, u, c;
    this.endIndex = s, (o = (i = this.cbs).oncomment) === null || o === void 0 || o.call(i, this.getSlice(n, s - a)), (c = (u = this.cbs).oncommentend) === null || c === void 0 || c.call(u), this.startIndex = s + 1;
  }
  /** @internal */
  oncdata(n, s, a) {
    var i, o, u, c, l, d, f, h, T, p;
    this.endIndex = s;
    const I = this.getSlice(n, s - a);
    this.options.xmlMode || this.options.recognizeCDATA ? ((o = (i = this.cbs).oncdatastart) === null || o === void 0 || o.call(i), (c = (u = this.cbs).ontext) === null || c === void 0 || c.call(u, I), (d = (l = this.cbs).oncdataend) === null || d === void 0 || d.call(l)) : ((h = (f = this.cbs).oncomment) === null || h === void 0 || h.call(f, `[CDATA[${I}]]`), (p = (T = this.cbs).oncommentend) === null || p === void 0 || p.call(T)), this.startIndex = s + 1;
  }
  /** @internal */
  onend() {
    var n, s;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let a = this.stack.length; a > 0; this.cbs.onclosetag(this.stack[--a], !0))
        ;
    }
    (s = (n = this.cbs).onend) === null || s === void 0 || s.call(n);
  }
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */
  reset() {
    var n, s, a, i;
    (s = (n = this.cbs).onreset) === null || s === void 0 || s.call(n), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (i = (a = this.cbs).onparserinit) === null || i === void 0 || i.call(a, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
  }
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */
  parseComplete(n) {
    this.reset(), this.end(n);
  }
  getSlice(n, s) {
    for (; n - this.bufferOffset >= this.buffers[0].length; )
      this.shiftBuffer();
    let a = this.buffers[0].slice(n - this.bufferOffset, s - this.bufferOffset);
    for (; s - this.bufferOffset > this.buffers[0].length; )
      this.shiftBuffer(), a += this.buffers[0].slice(0, s - this.bufferOffset);
    return a;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
  }
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */
  write(n) {
    var s, a;
    if (this.ended) {
      (a = (s = this.cbs).onerror) === null || a === void 0 || a.call(s, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(n), this.tokenizer.running && (this.tokenizer.write(n), this.writeIndex++);
  }
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */
  end(n) {
    var s, a;
    if (this.ended) {
      (a = (s = this.cbs).onerror) === null || a === void 0 || a.call(s, new Error(".end() after done!"));
      return;
    }
    n && this.write(n), this.ended = !0, this.tokenizer.end();
  }
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */
  pause() {
    this.tokenizer.pause();
  }
  /**
   * Resumes parsing after `pause` was called.
   */
  resume() {
    for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    this.ended && this.tokenizer.end();
  }
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */
  parseChunk(n) {
    this.write(n);
  }
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */
  done(n) {
    this.end(n);
  }
}
function parseDocument(t, n) {
  const s = new DomHandler(void 0, n);
  return new Parser(s, n).end(t), s.root;
}
const parse = getParse((t, n, s, a) => n.xmlMode || n._useHtmlParser2 ? parseDocument(t, n) : parseWithParse5(t, n, s, a)), load = getLoad(parse, (t, n) => n.xmlMode || n._useHtmlParser2 ? render$1(t, n) : renderWithParse5(t));
load([]);
const ignorePathsPrefixes = ["__", "._", ".DS_Store"], shouldIgnorePath = (t) => ignorePathsPrefixes.some((n) => t.startsWith(n)), fileTreeFromZip = async (t) => {
  const s = await new ZipReader(new BlobReader(t)).getEntries();
  let a = {};
  for (const i of s) {
    const o = i.filename.split("/");
    let u = a;
    for (let c = 0; c < o.length; c++) {
      const l = o[c];
      shouldIgnorePath(l) || (c === o.length - 1 ? u[l] = i : (u[l] || (u[l] = {}), u = u[l]));
    }
  }
  return Object.keys(a).length === 1 && (a = a[Object.keys(a)[0]]), a;
}, htmlForPath = async (fileTree, path) => {
  try {
    const data = eval(`fileTree.${path}`), writer = new TextWriter(), html = await data.getData(writer), $html = load(html);
    return $html;
  } catch (t) {
    return console.error(`Something went wrong reading path: ${path}`), null;
  }
}, mediaForPath = async (t, n) => {
  try {
    const s = n.split("/");
    let a = t;
    for (const f of s)
      a = a[f];
    if (!a)
      return null;
    const i = new BlobWriter(), u = a.filename.split(".").pop();
    let c = "image", l = "image/jpeg";
    u === "mp4" && (l = "video/mp4", c = "video");
    const d = await a.getData(i);
    return {
      url: URL.createObjectURL(new Blob([d], { type: l })),
      type: c
    };
  } catch {
  }
}, swedishToEnglishMonths = {
  jan: "Jan",
  feb: "Feb",
  mar: "Mar",
  apr: "Apr",
  maj: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Aug",
  sep: "Sep",
  okt: "Oct",
  nov: "Nov",
  dec: "Dec"
}, swedishAmPm = {
  fm: "AM",
  em: "PM"
};
function normalizeDateString(t) {
  t = t.replace("Tid", "");
  let n = t.replace(
    /\b(?:jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\b/gi,
    (s) => swedishToEnglishMonths[s.toLowerCase()]
  );
  return n = n.replace(
    /\b(?:fm|em)\b/gi,
    (s) => swedishAmPm[s.toLowerCase()]
  ), n = n.replace(/,/g, ""), n;
}
const extractTimestamp = (t) => {
  const n = normalizeDateString(t), s = new Date(n);
  isNaN(s.getTime()) && console.log("Invalid date string:", t);
  let a = s.getTime(), i = -8 * 60 * 60 * 1e3, u = 2 * 60 * 60 * 1e3 - i;
  return new Date(a + u);
}, getHtmlForAccountCreation = async (t) => {
  let n = await htmlForPath(
    t,
    'security_and_login_information.login_and_account_creation["signup_information.html"]'
  );
  return n || (n = await htmlForPath(
    t,
    'security_and_login_information.login_and_profile_creation["instagram_signup_details.html"]'
  ), n);
}, getAccountCreationDate = async (t) => {
  try {
    const n = await getHtmlForAccountCreation(t);
    if (!n)
      return /* @__PURE__ */ new Date(0);
    let s = n("table").text();
    return s = s.replace("Time", ""), extractTimestamp(s);
  } catch {
    return /* @__PURE__ */ new Date(0);
  }
}, captionAndTimeStampFromElement = (t) => {
  let n = "", s;
  const a = t.children[0];
  a && (n = a.children[0].data);
  const i = t.children.length == 2 ? t.children[1] : t.children[2];
  return i && (s = extractTimestamp(i.children[0].data)), { caption: n, timestamp: s };
}, usernameAndTimestampFromElement = (t) => {
  let n = "", s;
  const a = t.children[0];
  a && (n = a.children[0].data);
  const i = t.children[1];
  if (i) {
    const o = i.children[0].children[1].children[0];
    s = extractTimestamp(o.data);
  }
  return { username: n, timestamp: s };
}, usernameAndTimestampFromStoryLikeElement = (t) => {
  let n = "", s;
  const a = t.children[0];
  a && (n = a.children[0].data);
  const i = t.children[1];
  if (i) {
    const o = i.children[0].children[0].children[0];
    s = extractTimestamp(o.data);
  }
  return { username: n, timestamp: s };
}, commentFromElement = (t) => {
  try {
    const n = t.children[0].children[1];
    if (!n)
      return null;
    const s = n.children[0];
    let a = "", i = "", o = /* @__PURE__ */ new Date();
    const u = s.children[0];
    u && (a = u.children[0].children[1].children[0].children[0].data);
    let c = s.children.length === 3;
    if (c) {
      const d = s.children[1];
      d && (i = d.children[0].children[1].children[0].data);
    }
    const l = s.children[c ? 2 : 1];
    if (l) {
      const d = l.children[1].children[0];
      o = extractTimestamp(d.data);
    }
    return { username: i, timestamp: o, content: a };
  } catch {
    return null;
  }
}, directMessageFromElement = (t) => {
  const n = t.children[0], s = t.children[2];
  let a = "", i = /* @__PURE__ */ new Date();
  return n && (a = n.children[0].data), s && (i = extractTimestamp(s.children[0].data)), { sender: a, timestamp: i };
}, postElementToPost = async (t, n) => {
  const { caption: s, timestamp: a } = captionAndTimeStampFromElement(n);
  if (!a)
    return null;
  let i = [];
  const o = n.children.length == 2 ? n.children[0] : n.children[1];
  if (o) {
    const u = load(o);
    i = await Promise.all(
      u("a").toArray().map((c) => mediaForPath(t, c.attribs.href)).filter((c) => !!c)
    );
  }
  return {
    type: "Post",
    timestamp: a,
    caption: s ?? "",
    media: i
  };
}, storyElementToStory = async (t, n) => {
  const { caption: s, timestamp: a } = captionAndTimeStampFromElement(n);
  if (!a)
    return null;
  let i = [];
  const o = n.children[1];
  if (o) {
    const u = load(o);
    i = await Promise.all(
      u("a").toArray().map((c) => mediaForPath(t, c.attribs.href)).filter((c) => !!c)
    );
  }
  return {
    type: "Story",
    timestamp: a,
    caption: s ?? "",
    media: i
  };
}, postsFromTree = async (t) => {
  const n = await htmlForPath(
    t,
    'your_instagram_activity.content["posts_1.html"]'
  );
  if (!n)
    return [];
  const a = (await Promise.all(
    n(".uiBoxWhite").toArray().map((i) => postElementToPost(t, i))
  )).filter((i) => i !== null);
  return a.sort((i, o) => o.timestamp.getTime() - i.timestamp.getTime()), a;
}, storiesFromTree = async (t) => {
  const n = await htmlForPath(
    t,
    'your_instagram_activity.content["stories.html"]'
  );
  if (!n)
    return [];
  const s = n(".uiBoxWhite").toArray();
  return (await Promise.all(
    s.map((o) => storyElementToStory(t, o))
  )).filter((o) => o !== null);
}, profilefromTree = async (t) => {
  var c;
  const n = await htmlForPath(
    t,
    'personal_information.personal_information["personal_information.html"]'
  );
  if (!n)
    return {
      profilePictures: [],
      bio: [],
      username: "",
      name: ""
    };
  let s = "", a = "", i = [];
  const o = n("tr").toArray();
  for (const l of o) {
    const f = n(l).find("td").text();
    f.includes("Username") && (s = f.replace("Username", "")), f.includes("Användarnamn") && (s = f.replace("Användarnamn", "")), f.includes("Name") && (a = f.replace("Name", "")), f.includes("Namn") && (a = f.replace("Namn", ""));
  }
  const u = n("a > img").toArray();
  for (const l of u) {
    const d = l.attribs.src;
    d && i.push({
      timestamp: /* @__PURE__ */ new Date(0),
      media: ((c = await mediaForPath(t, d)) == null ? void 0 : c.url) ?? ""
    });
  }
  return {
    profilePictures: i,
    bio: [],
    username: s,
    name: a
  };
}, likedPostsFromTree = async (t) => {
  const n = await htmlForPath(
    t,
    'your_instagram_activity.likes["liked_posts.html"]'
  );
  return n ? n(".uiBoxWhite").toArray().map((a) => {
    const { username: i, timestamp: o } = usernameAndTimestampFromElement(a);
    return {
      type: "Like",
      timestamp: o,
      mediaOwner: i,
      onType: "Post"
      /* Post */
    };
  }) : [];
}, likedStoriesFromTree = async (t) => {
  const n = await htmlForPath(
    t,
    'your_instagram_activity.story_sticker_interactions["story_likes.html"]'
  );
  return n ? n(".uiBoxWhite").toArray().map((a) => {
    const { username: i, timestamp: o } = usernameAndTimestampFromStoryLikeElement(a);
    return {
      type: "Like",
      timestamp: o,
      mediaOwner: i,
      onType: "Story"
      /* Story */
    };
  }) : [];
}, likedCommentsFromTree = async (t) => {
  const n = await htmlForPath(
    t,
    'your_instagram_activity.likes["liked_comments.html"]'
  );
  return n ? n(".uiBoxWhite").toArray().map((a) => {
    const { username: i, timestamp: o } = usernameAndTimestampFromElement(a);
    return {
      type: "Like",
      timestamp: o,
      mediaOwner: i,
      onType: "Comment"
      /* Comment */
    };
  }) : [];
}, commentsFromTree = async (t) => {
  const n = t.your_instagram_activity.comments;
  let s = [];
  for (const a in n) {
    const i = await htmlForPath(
      t,
      `your_instagram_activity.comments["${a}"]`
    );
    if (!i)
      continue;
    const o = i(".uiBoxWhite").toArray().map((u) => {
      const c = commentFromElement(u);
      return c ? {
        type: "Comment",
        timestamp: c.timestamp,
        mediaOwner: c.username,
        onType: "Comment",
        content: c.content
      } : null;
    }).filter((u) => u !== null);
    s = s.concat(o);
  }
  return s;
}, directMessagesFromTree = async (t, n) => {
  const s = t.your_instagram_activity.messages.inbox;
  let a = [];
  for (const i in s) {
    if (!s[i]["message_1.html"])
      continue;
    const u = await htmlForPath(
      t,
      `your_instagram_activity.messages.inbox["${i}"]["message_1.html"]`
    );
    if (!u)
      continue;
    const c = u(".uiBoxWhite").toArray().map((l) => {
      const d = directMessageFromElement(l), f = d.sender === n;
      return {
        timestamp: d.timestamp,
        sentByMe: f
      };
    });
    a = a.concat(c);
  }
  return a.sort((i, o) => o.timestamp.getTime() - i.timestamp.getTime()), a;
}, interactionsFromTree = async (t) => {
  const [n, s, a, i] = await Promise.all(
    [
      likedPostsFromTree(t),
      likedStoriesFromTree(t),
      likedCommentsFromTree(t),
      commentsFromTree(t)
    ]
  ), o = [
    ...a,
    ...s,
    ...n,
    ...i
  ].filter((u) => u.timestamp);
  return o.sort((u, c) => c.timestamp.getTime() - u.timestamp.getTime()), o;
}, archiveFromTree = async (t) => {
  let n;
  try {
    n = await profilefromTree(t);
  } catch (l) {
    console.error("Error getting profile", l), n = {
      profilePictures: [],
      bio: [],
      username: "",
      name: ""
    };
  }
  const [s, a, i, o, u] = await Promise.all([
    getAccountCreationDate(t),
    postsFromTree(t),
    storiesFromTree(t),
    directMessagesFromTree(t, n.name),
    interactionsFromTree(t)
  ]), c = [...a, ...i];
  return c.sort((l, d) => d.timestamp.getTime() - l.timestamp.getTime()), {
    startDate: s,
    profile: n,
    interactions: u,
    activities: c,
    directMessages: o
  };
};
function useInstagramArchive() {
  const [t, n] = useState(null), [s, a] = useState();
  return useEffect(() => {
    t && fileTreeFromZip(t).then(async (i) => {
      const o = await archiveFromTree(i);
      a(o);
    });
  }, [t, a]), [s, n];
}
function stripArchive(t) {
  return t ? {
    startDate: t.startDate,
    activities: t.activities.map((n) => ({
      timestamp: n.timestamp,
      type: n.type
    })),
    interactions: t.interactions.map((n) => ({
      timestamp: n.timestamp,
      type: n.type
    })),
    directMessages: t.directMessages.map((n) => ({
      ...n
    }))
  } : {};
}
export {
  UploadInstagramArchive,
  stripArchive,
  useInstagramArchive
};

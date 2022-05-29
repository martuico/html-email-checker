/*
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */
(function (aE, A) {
  var aa = aE.document;
  var a = (function () {
    var a4 = function (bp, bq) {
        return new a4.fn.init(bp, bq);
      },
      bk = aE.jQuery,
      a6 = aE.$,
      a2,
      bo = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
      aX = /^.[^:#\[\.,]*$/,
      bc = /\S/,
      aZ = /\s/,
      a8 = /^\s+/,
      a3 = /\s+$/,
      aU = /\W/,
      a7 = /\d/,
      a0 = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
      bd = /^[\],:{}\s]*$/,
      bm = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      bf = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      a9 = /(?:^|:|,)(?:\s*\[)+/g,
      aW = /(webkit)[ \/]([\w.]+)/,
      bh = /(opera)(?:.*version)?[ \/]([\w.]+)/,
      bg = /(msie) ([\w.]+)/,
      bi = /(mozilla)(?:.*? rv:([\w.]+))?/,
      bn = navigator.userAgent,
      bl,
      bj = false,
      a1 = [],
      aR,
      bb = Object.prototype.toString,
      a5 = Object.prototype.hasOwnProperty,
      aY = Array.prototype.push,
      ba = Array.prototype.slice,
      be = String.prototype.trim,
      aS = Array.prototype.indexOf,
      aV = {};
    a4.fn = a4.prototype = {
      init: function (bp, bs) {
        var br, bt, bq, bu;
        if (!bp) {
          return this;
        }
        if (bp.nodeType) {
          this.context = this[0] = bp;
          this.length = 1;
          return this;
        }
        if (bp === "body" && !bs && aa.body) {
          this.context = aa;
          this[0] = aa.body;
          this.selector = "body";
          this.length = 1;
          return this;
        }
        if (typeof bp === "string") {
          br = bo.exec(bp);
          if (br && (br[1] || !bs)) {
            if (br[1]) {
              bu = bs ? bs.ownerDocument || bs : aa;
              bq = a0.exec(bp);
              if (bq) {
                if (a4.isPlainObject(bs)) {
                  bp = [aa.createElement(bq[1])];
                  a4.fn.attr.call(bp, bs, true);
                } else {
                  bp = [bu.createElement(bq[1])];
                }
              } else {
                bq = a4.buildFragment([br[1]], [bu]);
                bp = (bq.cacheable ? bq.fragment.cloneNode(true) : bq.fragment)
                  .childNodes;
              }
              return a4.merge(this, bp);
            } else {
              bt = aa.getElementById(br[2]);
              if (bt && bt.parentNode) {
                if (bt.id !== br[2]) {
                  return a2.find(bp);
                }
                this.length = 1;
                this[0] = bt;
              }
              this.context = aa;
              this.selector = bp;
              return this;
            }
          } else {
            if (!bs && !aU.test(bp)) {
              this.selector = bp;
              this.context = aa;
              bp = aa.getElementsByTagName(bp);
              return a4.merge(this, bp);
            } else {
              if (!bs || bs.jquery) {
                return (bs || a2).find(bp);
              } else {
                return a4(bs).find(bp);
              }
            }
          }
        } else {
          if (a4.isFunction(bp)) {
            return a2.ready(bp);
          }
        }
        if (bp.selector !== A) {
          this.selector = bp.selector;
          this.context = bp.context;
        }
        return a4.makeArray(bp, this);
      },
      selector: "",
      jquery: "1.4.4",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return ba.call(this, 0);
      },
      get: function (bp) {
        return bp == null
          ? this.toArray()
          : bp < 0
          ? this.slice(bp)[0]
          : this[bp];
      },
      pushStack: function (bq, bs, bp) {
        var br = a4();
        if (a4.isArray(bq)) {
          aY.apply(br, bq);
        } else {
          a4.merge(br, bq);
        }
        br.prevObject = this;
        br.context = this.context;
        if (bs === "find") {
          br.selector = this.selector + (this.selector ? " " : "") + bp;
        } else {
          if (bs) {
            br.selector = this.selector + "." + bs + "(" + bp + ")";
          }
        }
        return br;
      },
      each: function (bq, bp) {
        return a4.each(this, bq, bp);
      },
      ready: function (bp) {
        a4.bindReady();
        if (a4.isReady) {
          bp.call(aa, a4);
        } else {
          if (a1) {
            a1.push(bp);
          }
        }
        return this;
      },
      eq: function (bp) {
        return bp === -1 ? this.slice(bp) : this.slice(bp, +bp + 1);
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      slice: function () {
        return this.pushStack(
          ba.apply(this, arguments),
          "slice",
          ba.call(arguments).join(",")
        );
      },
      map: function (bp) {
        return this.pushStack(
          a4.map(this, function (br, bq) {
            return bp.call(br, bq, br);
          })
        );
      },
      end: function () {
        return this.prevObject || a4(null);
      },
      push: aY,
      sort: [].sort,
      splice: [].splice,
    };
    a4.fn.init.prototype = a4.fn;
    a4.extend = a4.fn.extend = function () {
      var by,
        br,
        bp,
        bq,
        bv,
        bw,
        bu = arguments[0] || {},
        bt = 1,
        bs = arguments.length,
        bx = false;
      if (typeof bu === "boolean") {
        bx = bu;
        bu = arguments[1] || {};
        bt = 2;
      }
      if (typeof bu !== "object" && !a4.isFunction(bu)) {
        bu = {};
      }
      if (bs === bt) {
        bu = this;
        --bt;
      }
      for (; bt < bs; bt++) {
        if ((by = arguments[bt]) != null) {
          for (br in by) {
            bp = bu[br];
            bq = by[br];
            if (bu === bq) {
              continue;
            }
            if (bx && bq && (a4.isPlainObject(bq) || (bv = a4.isArray(bq)))) {
              if (bv) {
                bv = false;
                bw = bp && a4.isArray(bp) ? bp : [];
              } else {
                bw = bp && a4.isPlainObject(bp) ? bp : {};
              }
              bu[br] = a4.extend(bx, bw, bq);
            } else {
              if (bq !== A) {
                bu[br] = bq;
              }
            }
          }
        }
      }
      return bu;
    };
    a4.extend({
      noConflict: function (bp) {
        aE.$ = a6;
        if (bp) {
          aE.jQuery = bk;
        }
        return a4;
      },
      isReady: false,
      readyWait: 1,
      ready: function (bs) {
        if (bs === true) {
          a4.readyWait--;
        }
        if (!a4.readyWait || (bs !== true && !a4.isReady)) {
          if (!aa.body) {
            return setTimeout(a4.ready, 1);
          }
          a4.isReady = true;
          if (bs !== true && --a4.readyWait > 0) {
            return;
          }
          if (a1) {
            var br,
              bp = 0,
              bq = a1;
            a1 = null;
            while ((br = bq[bp++])) {
              br.call(aa, a4);
            }
            if (a4.fn.trigger) {
              a4(aa).trigger("ready").unbind("ready");
            }
          }
        }
      },
      bindReady: function () {
        if (bj) {
          return;
        }
        bj = true;
        if (aa.readyState === "complete") {
          return setTimeout(a4.ready, 1);
        }
        if (aa.addEventListener) {
          aa.addEventListener("DOMContentLoaded", aR, false);
          aE.addEventListener("load", a4.ready, false);
        } else {
          if (aa.attachEvent) {
            aa.attachEvent("onreadystatechange", aR);
            aE.attachEvent("onload", a4.ready);
            var bp = false;
            try {
              bp = aE.frameElement == null;
            } catch (bq) {}
            if (aa.documentElement.doScroll && bp) {
              aT();
            }
          }
        }
      },
      isFunction: function (bp) {
        return a4.type(bp) === "function";
      },
      isArray:
        Array.isArray ||
        function (bp) {
          return a4.type(bp) === "array";
        },
      isWindow: function (bp) {
        return bp && typeof bp === "object" && "setInterval" in bp;
      },
      isNaN: function (bp) {
        return bp == null || !a7.test(bp) || isNaN(bp);
      },
      type: function (bp) {
        return bp == null ? String(bp) : aV[bb.call(bp)] || "object";
      },
      isPlainObject: function (bq) {
        if (!bq || a4.type(bq) !== "object" || bq.nodeType || a4.isWindow(bq)) {
          return false;
        }
        if (
          bq.constructor &&
          !a5.call(bq, "constructor") &&
          !a5.call(bq.constructor.prototype, "isPrototypeOf")
        ) {
          return false;
        }
        var bp;
        for (bp in bq) {
        }
        return bp === A || a5.call(bq, bp);
      },
      isEmptyObject: function (bq) {
        for (var bp in bq) {
          return false;
        }
        return true;
      },
      error: function (bp) {
        throw bp;
      },
      parseJSON: function (bp) {
        if (typeof bp !== "string" || !bp) {
          return null;
        }
        bp = a4.trim(bp);
        if (bd.test(bp.replace(bm, "@").replace(bf, "]").replace(a9, ""))) {
          return aE.JSON && aE.JSON.parse
            ? aE.JSON.parse(bp)
            : new Function("return " + bp)();
        } else {
          a4.error("Invalid JSON: " + bp);
        }
      },
      noop: function () {},
      globalEval: function (br) {
        if (br && bc.test(br)) {
          var bq = aa.getElementsByTagName("head")[0] || aa.documentElement,
            bp = aa.createElement("script");
          bp.type = "text/javascript";
          if (a4.support.scriptEval) {
            bp.appendChild(aa.createTextNode(br));
          } else {
            bp.text = br;
          }
          bq.insertBefore(bp, bq.firstChild);
          bq.removeChild(bp);
        }
      },
      nodeName: function (bq, bp) {
        return bq.nodeName && bq.nodeName.toUpperCase() === bp.toUpperCase();
      },
      each: function (bs, bw, br) {
        var bq,
          bt = 0,
          bu = bs.length,
          bp = bu === A || a4.isFunction(bs);
        if (br) {
          if (bp) {
            for (bq in bs) {
              if (bw.apply(bs[bq], br) === false) {
                break;
              }
            }
          } else {
            for (; bt < bu; ) {
              if (bw.apply(bs[bt++], br) === false) {
                break;
              }
            }
          }
        } else {
          if (bp) {
            for (bq in bs) {
              if (bw.call(bs[bq], bq, bs[bq]) === false) {
                break;
              }
            }
          } else {
            for (
              var bv = bs[0];
              bt < bu && bw.call(bv, bt, bv) !== false;
              bv = bs[++bt]
            ) {}
          }
        }
        return bs;
      },
      trim: be
        ? function (bp) {
            return bp == null ? "" : be.call(bp);
          }
        : function (bp) {
            return bp == null
              ? ""
              : bp.toString().replace(a8, "").replace(a3, "");
          },
      makeArray: function (bs, bq) {
        var bp = bq || [];
        if (bs != null) {
          var br = a4.type(bs);
          if (
            bs.length == null ||
            br === "string" ||
            br === "function" ||
            br === "regexp" ||
            a4.isWindow(bs)
          ) {
            aY.call(bp, bs);
          } else {
            a4.merge(bp, bs);
          }
        }
        return bp;
      },
      inArray: function (br, bs) {
        if (bs.indexOf) {
          return bs.indexOf(br);
        }
        for (var bp = 0, bq = bs.length; bp < bq; bp++) {
          if (bs[bp] === br) {
            return bp;
          }
        }
        return -1;
      },
      merge: function (bt, br) {
        var bs = bt.length,
          bq = 0;
        if (typeof br.length === "number") {
          for (var bp = br.length; bq < bp; bq++) {
            bt[bs++] = br[bq];
          }
        } else {
          while (br[bq] !== A) {
            bt[bs++] = br[bq++];
          }
        }
        bt.length = bs;
        return bt;
      },
      grep: function (bq, bv, bp) {
        var br = [],
          bu;
        bp = !!bp;
        for (var bs = 0, bt = bq.length; bs < bt; bs++) {
          bu = !!bv(bq[bs], bs);
          if (bp !== bu) {
            br.push(bq[bs]);
          }
        }
        return br;
      },
      map: function (bq, bv, bp) {
        var br = [],
          bu;
        for (var bs = 0, bt = bq.length; bs < bt; bs++) {
          bu = bv(bq[bs], bs, bp);
          if (bu != null) {
            br[br.length] = bu;
          }
        }
        return br.concat.apply([], br);
      },
      guid: 1,
      proxy: function (br, bq, bp) {
        if (arguments.length === 2) {
          if (typeof bq === "string") {
            bp = br;
            br = bp[bq];
            bq = A;
          } else {
            if (bq && !a4.isFunction(bq)) {
              bp = bq;
              bq = A;
            }
          }
        }
        if (!bq && br) {
          bq = function () {
            return br.apply(bp || this, arguments);
          };
        }
        if (br) {
          bq.guid = br.guid = br.guid || bq.guid || a4.guid++;
        }
        return bq;
      },
      access: function (bp, bx, bv, br, bu, bw) {
        var bq = bp.length;
        if (typeof bx === "object") {
          for (var bs in bx) {
            a4.access(bp, bs, bx[bs], br, bu, bv);
          }
          return bp;
        }
        if (bv !== A) {
          br = !bw && br && a4.isFunction(bv);
          for (var bt = 0; bt < bq; bt++) {
            bu(bp[bt], bx, br ? bv.call(bp[bt], bt, bu(bp[bt], bx)) : bv, bw);
          }
          return bp;
        }
        return bq ? bu(bp[0], bx) : A;
      },
      now: function () {
        return new Date().getTime();
      },
      uaMatch: function (bq) {
        bq = bq.toLowerCase();
        var bp =
          aW.exec(bq) ||
          bh.exec(bq) ||
          bg.exec(bq) ||
          (bq.indexOf("compatible") < 0 && bi.exec(bq)) ||
          [];
        return { browser: bp[1] || "", version: bp[2] || "0" };
      },
      browser: {},
    });
    a4.each(
      "Boolean Number String Function Array Date RegExp Object".split(" "),
      function (bq, bp) {
        aV["[object " + bp + "]"] = bp.toLowerCase();
      }
    );
    bl = a4.uaMatch(bn);
    if (bl.browser) {
      a4.browser[bl.browser] = true;
      a4.browser.version = bl.version;
    }
    if (a4.browser.webkit) {
      a4.browser.safari = true;
    }
    if (aS) {
      a4.inArray = function (bp, bq) {
        return aS.call(bq, bp);
      };
    }
    if (!aZ.test("\xA0")) {
      a8 = /^[\s\xA0]+/;
      a3 = /[\s\xA0]+$/;
    }
    a2 = a4(aa);
    if (aa.addEventListener) {
      aR = function () {
        aa.removeEventListener("DOMContentLoaded", aR, false);
        a4.ready();
      };
    } else {
      if (aa.attachEvent) {
        aR = function () {
          if (aa.readyState === "complete") {
            aa.detachEvent("onreadystatechange", aR);
            a4.ready();
          }
        };
      }
    }
    function aT() {
      if (a4.isReady) {
        return;
      }
      try {
        aa.documentElement.doScroll("left");
      } catch (bp) {
        setTimeout(aT, 1);
        return;
      }
      a4.ready();
    }
    return (aE.jQuery = aE.$ = a4);
  })();
  (function () {
    a.support = {};
    var aY = aa.documentElement,
      aX = aa.createElement("script"),
      aR = aa.createElement("div"),
      aS = "script" + a.now();
    aR.style.display = "none";
    aR.innerHTML =
      "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    var a1 = aR.getElementsByTagName("*"),
      aZ = aR.getElementsByTagName("a")[0],
      a0 = aa.createElement("select"),
      aT = a0.appendChild(aa.createElement("option"));
    if (!a1 || !a1.length || !aZ) {
      return;
    }
    a.support = {
      leadingWhitespace: aR.firstChild.nodeType === 3,
      tbody: !aR.getElementsByTagName("tbody").length,
      htmlSerialize: !!aR.getElementsByTagName("link").length,
      style: /red/.test(aZ.getAttribute("style")),
      hrefNormalized: aZ.getAttribute("href") === "/a",
      opacity: /^0.55$/.test(aZ.style.opacity),
      cssFloat: !!aZ.style.cssFloat,
      checkOn: aR.getElementsByTagName("input")[0].value === "on",
      optSelected: aT.selected,
      deleteExpando: true,
      optDisabled: false,
      checkClone: false,
      scriptEval: false,
      noCloneEvent: true,
      boxModel: null,
      inlineBlockNeedsLayout: false,
      shrinkWrapBlocks: false,
      reliableHiddenOffsets: true,
    };
    a0.disabled = true;
    a.support.optDisabled = !aT.disabled;
    aX.type = "text/javascript";
    try {
      aX.appendChild(aa.createTextNode("window." + aS + "=1;"));
    } catch (aV) {}
    aY.insertBefore(aX, aY.firstChild);
    if (aE[aS]) {
      a.support.scriptEval = true;
      delete aE[aS];
    }
    try {
      delete aX.test;
    } catch (aV) {
      a.support.deleteExpando = false;
    }
    aY.removeChild(aX);
    if (aR.attachEvent && aR.fireEvent) {
      aR.attachEvent("onclick", function a2() {
        a.support.noCloneEvent = false;
        aR.detachEvent("onclick", a2);
      });
      aR.cloneNode(true).fireEvent("onclick");
    }
    aR = aa.createElement("div");
    aR.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
    var aU = aa.createDocumentFragment();
    aU.appendChild(aR.firstChild);
    a.support.checkClone = aU.cloneNode(true).cloneNode(true).lastChild.checked;
    a(function () {
      var a4 = aa.createElement("div");
      a4.style.width = a4.style.paddingLeft = "1px";
      aa.body.appendChild(a4);
      a.boxModel = a.support.boxModel = a4.offsetWidth === 2;
      if ("zoom" in a4.style) {
        a4.style.display = "inline";
        a4.style.zoom = 1;
        a.support.inlineBlockNeedsLayout = a4.offsetWidth === 2;
        a4.style.display = "";
        a4.innerHTML = "<div style='width:4px;'></div>";
        a.support.shrinkWrapBlocks = a4.offsetWidth !== 2;
      }
      a4.innerHTML =
        "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
      var a3 = a4.getElementsByTagName("td");
      a.support.reliableHiddenOffsets = a3[0].offsetHeight === 0;
      a3[0].style.display = "";
      a3[1].style.display = "none";
      a.support.reliableHiddenOffsets =
        a.support.reliableHiddenOffsets && a3[0].offsetHeight === 0;
      a4.innerHTML = "";
      aa.body.removeChild(a4).style.display = "none";
      a4 = a3 = null;
    });
    var aW = function (a3) {
      var a5 = aa.createElement("div");
      a3 = "on" + a3;
      var a4 = a3 in a5;
      if (!a4) {
        a5.setAttribute(a3, "return;");
        a4 = typeof a5[a3] === "function";
      }
      a5 = null;
      return a4;
    };
    a.support.submitBubbles = aW("submit");
    a.support.changeBubbles = aW("change");
    aY = aX = aR = a1 = aZ = null;
  })();
  var aL = {},
    al = /^(?:\{.*\}|\[.*\])$/;
  a.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + a.now(),
    noData: {
      embed: true,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: true,
    },
    data: function (aT, aS, aW) {
      if (!a.acceptData(aT)) {
        return;
      }
      aT = aT == aE ? aL : aT;
      var aV = aT.nodeType,
        aX = aV ? aT[a.expando] : null,
        aR = a.cache,
        aU;
      if (aV && !aX && typeof aS === "string" && aW === A) {
        return;
      }
      if (!aV) {
        aR = aT;
      } else {
        if (!aX) {
          aT[a.expando] = aX = ++a.uuid;
        }
      }
      if (typeof aS === "object") {
        if (aV) {
          aR[aX] = a.extend(aR[aX], aS);
        } else {
          a.extend(aR, aS);
        }
      } else {
        if (aV && !aR[aX]) {
          aR[aX] = {};
        }
      }
      aU = aV ? aR[aX] : aR;
      if (aW !== A) {
        aU[aS] = aW;
      }
      return typeof aS === "string" ? aU[aS] : aU;
    },
    removeData: function (aT, aS) {
      if (!a.acceptData(aT)) {
        return;
      }
      aT = aT == aE ? aL : aT;
      var aV = aT.nodeType,
        aX = aV ? aT[a.expando] : aT,
        aR = a.cache,
        aU = aV ? aR[aX] : aX;
      if (aS) {
        if (aU) {
          delete aU[aS];
          if (aV && a.isEmptyObject(aU)) {
            a.removeData(aT);
          }
        }
      } else {
        if (aV && a.support.deleteExpando) {
          delete aT[a.expando];
        } else {
          if (aT.removeAttribute) {
            aT.removeAttribute(a.expando);
          } else {
            if (aV) {
              delete aR[aX];
            } else {
              for (var aW in aT) {
                delete aT[aW];
              }
            }
          }
        }
      }
    },
    acceptData: function (aS) {
      if (aS.nodeName) {
        var aR = a.noData[aS.nodeName.toLowerCase()];
        if (aR) {
          return !(aR === true || aS.getAttribute("classid") !== aR);
        }
      }
      return true;
    },
  });
  a.fn.extend({
    data: function (aV, aX) {
      var aW = null;
      if (typeof aV === "undefined") {
        if (this.length) {
          var aR = this[0].attributes,
            aT;
          aW = a.data(this[0]);
          for (var aU = 0, aS = aR.length; aU < aS; aU++) {
            aT = aR[aU].name;
            if (aT.indexOf("data-") === 0) {
              aT = aT.substr(5);
              az(this[0], aT, aW[aT]);
            }
          }
        }
        return aW;
      } else {
        if (typeof aV === "object") {
          return this.each(function () {
            a.data(this, aV);
          });
        }
      }
      var aY = aV.split(".");
      aY[1] = aY[1] ? "." + aY[1] : "";
      if (aX === A) {
        aW = this.triggerHandler("getData" + aY[1] + "!", [aY[0]]);
        if (aW === A && this.length) {
          aW = a.data(this[0], aV);
          aW = az(this[0], aV, aW);
        }
        return aW === A && aY[1] ? this.data(aY[0]) : aW;
      } else {
        return this.each(function () {
          var a0 = a(this),
            aZ = [aY[0], aX];
          a0.triggerHandler("setData" + aY[1] + "!", aZ);
          a.data(this, aV, aX);
          a0.triggerHandler("changeData" + aY[1] + "!", aZ);
        });
      }
    },
    removeData: function (aR) {
      return this.each(function () {
        a.removeData(this, aR);
      });
    },
  });
  function az(aS, aR, aT) {
    if (aT === A && aS.nodeType === 1) {
      aT = aS.getAttribute("data-" + aR);
      if (typeof aT === "string") {
        try {
          aT =
            aT === "true"
              ? true
              : aT === "false"
              ? false
              : aT === "null"
              ? null
              : !a.isNaN(aT)
              ? parseFloat(aT)
              : al.test(aT)
              ? a.parseJSON(aT)
              : aT;
        } catch (aU) {}
        a.data(aS, aR, aT);
      } else {
        aT = A;
      }
    }
    return aT;
  }
  a.extend({
    queue: function (aS, aR, aU) {
      if (!aS) {
        return;
      }
      aR = (aR || "fx") + "queue";
      var aT = a.data(aS, aR);
      if (!aU) {
        return aT || [];
      }
      if (!aT || a.isArray(aU)) {
        aT = a.data(aS, aR, a.makeArray(aU));
      } else {
        aT.push(aU);
      }
      return aT;
    },
    dequeue: function (aU, aT) {
      aT = aT || "fx";
      var aR = a.queue(aU, aT),
        aS = aR.shift();
      if (aS === "inprogress") {
        aS = aR.shift();
      }
      if (aS) {
        if (aT === "fx") {
          aR.unshift("inprogress");
        }
        aS.call(aU, function () {
          a.dequeue(aU, aT);
        });
      }
    },
  });
  a.fn.extend({
    queue: function (aR, aS) {
      if (typeof aR !== "string") {
        aS = aR;
        aR = "fx";
      }
      if (aS === A) {
        return a.queue(this[0], aR);
      }
      return this.each(function (aU) {
        var aT = a.queue(this, aR, aS);
        if (aR === "fx" && aT[0] !== "inprogress") {
          a.dequeue(this, aR);
        }
      });
    },
    dequeue: function (aR) {
      return this.each(function () {
        a.dequeue(this, aR);
      });
    },
    delay: function (aS, aR) {
      aS = a.fx ? a.fx.speeds[aS] || aS : aS;
      aR = aR || "fx";
      return this.queue(aR, function () {
        var aT = this;
        setTimeout(function () {
          a.dequeue(aT, aR);
        }, aS);
      });
    },
    clearQueue: function (aR) {
      return this.queue(aR || "fx", []);
    },
  });
  var aj = /[\n\t]/g,
    aI = /\s+/,
    an = /\r/g,
    aH = /^(?:href|src|style)$/,
    c = /^(?:button|input)$/i,
    v = /^(?:button|input|object|select|textarea)$/i,
    g = /^a(?:rea)?$/i,
    J = /^(?:radio|checkbox)$/i;
  a.props = {
    for: "htmlFor",
    class: "className",
    readonly: "readOnly",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    rowspan: "rowSpan",
    colspan: "colSpan",
    tabindex: "tabIndex",
    usemap: "useMap",
    frameborder: "frameBorder",
  };
  a.fn.extend({
    attr: function (aR, aS) {
      return a.access(this, aR, aS, true, a.attr);
    },
    removeAttr: function (aR, aS) {
      return this.each(function () {
        a.attr(this, aR, "");
        if (this.nodeType === 1) {
          this.removeAttribute(aR);
        }
      });
    },
    addClass: function (aY) {
      if (a.isFunction(aY)) {
        return this.each(function (a1) {
          var a0 = a(this);
          a0.addClass(aY.call(this, a1, a0.attr("class")));
        });
      }
      if (aY && typeof aY === "string") {
        var aR = (aY || "").split(aI);
        for (var aU = 0, aT = this.length; aU < aT; aU++) {
          var aS = this[aU];
          if (aS.nodeType === 1) {
            if (!aS.className) {
              aS.className = aY;
            } else {
              var aV = " " + aS.className + " ",
                aX = aS.className;
              for (var aW = 0, aZ = aR.length; aW < aZ; aW++) {
                if (aV.indexOf(" " + aR[aW] + " ") < 0) {
                  aX += " " + aR[aW];
                }
              }
              aS.className = a.trim(aX);
            }
          }
        }
      }
      return this;
    },
    removeClass: function (aW) {
      if (a.isFunction(aW)) {
        return this.each(function (a0) {
          var aZ = a(this);
          aZ.removeClass(aW.call(this, a0, aZ.attr("class")));
        });
      }
      if ((aW && typeof aW === "string") || aW === A) {
        var aX = (aW || "").split(aI);
        for (var aT = 0, aS = this.length; aT < aS; aT++) {
          var aV = this[aT];
          if (aV.nodeType === 1 && aV.className) {
            if (aW) {
              var aU = (" " + aV.className + " ").replace(aj, " ");
              for (var aY = 0, aR = aX.length; aY < aR; aY++) {
                aU = aU.replace(" " + aX[aY] + " ", " ");
              }
              aV.className = a.trim(aU);
            } else {
              aV.className = "";
            }
          }
        }
      }
      return this;
    },
    toggleClass: function (aU, aS) {
      var aT = typeof aU,
        aR = typeof aS === "boolean";
      if (a.isFunction(aU)) {
        return this.each(function (aW) {
          var aV = a(this);
          aV.toggleClass(aU.call(this, aW, aV.attr("class"), aS), aS);
        });
      }
      return this.each(function () {
        if (aT === "string") {
          var aX,
            aW = 0,
            aV = a(this),
            aY = aS,
            aZ = aU.split(aI);
          while ((aX = aZ[aW++])) {
            aY = aR ? aY : !aV.hasClass(aX);
            aV[aY ? "addClass" : "removeClass"](aX);
          }
        } else {
          if (aT === "undefined" || aT === "boolean") {
            if (this.className) {
              a.data(this, "__className__", this.className);
            }
            this.className =
              this.className || aU === false
                ? ""
                : a.data(this, "__className__") || "";
          }
        }
      });
    },
    hasClass: function (aR) {
      var aU = " " + aR + " ";
      for (var aT = 0, aS = this.length; aT < aS; aT++) {
        if (
          (" " + this[aT].className + " ").replace(aj, " ").indexOf(aU) > -1
        ) {
          return true;
        }
      }
      return false;
    },
    val: function (aZ) {
      if (!arguments.length) {
        var aT = this[0];
        if (aT) {
          if (a.nodeName(aT, "option")) {
            var aS = aT.attributes.value;
            return !aS || aS.specified ? aT.value : aT.text;
          }
          if (a.nodeName(aT, "select")) {
            var aX = aT.selectedIndex,
              a0 = [],
              a1 = aT.options,
              aW = aT.type === "select-one";
            if (aX < 0) {
              return null;
            }
            for (
              var aU = aW ? aX : 0, aY = aW ? aX + 1 : a1.length;
              aU < aY;
              aU++
            ) {
              var aV = a1[aU];
              if (
                aV.selected &&
                (a.support.optDisabled
                  ? !aV.disabled
                  : aV.getAttribute("disabled") === null) &&
                (!aV.parentNode.disabled ||
                  !a.nodeName(aV.parentNode, "optgroup"))
              ) {
                aZ = a(aV).val();
                if (aW) {
                  return aZ;
                }
                a0.push(aZ);
              }
            }
            return a0;
          }
          if (J.test(aT.type) && !a.support.checkOn) {
            return aT.getAttribute("value") === null ? "on" : aT.value;
          }
          return (aT.value || "").replace(an, "");
        }
        return A;
      }
      var aR = a.isFunction(aZ);
      return this.each(function (a4) {
        var a3 = a(this),
          a5 = aZ;
        if (this.nodeType !== 1) {
          return;
        }
        if (aR) {
          a5 = aZ.call(this, a4, a3.val());
        }
        if (a5 == null) {
          a5 = "";
        } else {
          if (typeof a5 === "number") {
            a5 += "";
          } else {
            if (a.isArray(a5)) {
              a5 = a.map(a5, function (a6) {
                return a6 == null ? "" : a6 + "";
              });
            }
          }
        }
        if (a.isArray(a5) && J.test(this.type)) {
          this.checked = a.inArray(a3.val(), a5) >= 0;
        } else {
          if (a.nodeName(this, "select")) {
            var a2 = a.makeArray(a5);
            a("option", this).each(function () {
              this.selected = a.inArray(a(this).val(), a2) >= 0;
            });
            if (!a2.length) {
              this.selectedIndex = -1;
            }
          } else {
            this.value = a5;
          }
        }
      });
    },
  });
  a.extend({
    attrFn: {
      val: true,
      css: true,
      html: true,
      text: true,
      data: true,
      width: true,
      height: true,
      offset: true,
    },
    attr: function (aS, aR, aX, a0) {
      if (!aS || aS.nodeType === 3 || aS.nodeType === 8) {
        return A;
      }
      if (a0 && aR in a.attrFn) {
        return a(aS)[aR](aX);
      }
      var aT = aS.nodeType !== 1 || !a.isXMLDoc(aS),
        aW = aX !== A;
      aR = (aT && a.props[aR]) || aR;
      var aV = aH.test(aR);
      if (aR === "selected" && !a.support.optSelected) {
        var aY = aS.parentNode;
        if (aY) {
          aY.selectedIndex;
          if (aY.parentNode) {
            aY.parentNode.selectedIndex;
          }
        }
      }
      if ((aR in aS || aS[aR] !== A) && aT && !aV) {
        if (aW) {
          if (aR === "type" && c.test(aS.nodeName) && aS.parentNode) {
            a.error("type property can't be changed");
          }
          if (aX === null) {
            if (aS.nodeType === 1) {
              aS.removeAttribute(aR);
            }
          } else {
            aS[aR] = aX;
          }
        }
        if (a.nodeName(aS, "form") && aS.getAttributeNode(aR)) {
          return aS.getAttributeNode(aR).nodeValue;
        }
        if (aR === "tabIndex") {
          var aZ = aS.getAttributeNode("tabIndex");
          return aZ && aZ.specified
            ? aZ.value
            : v.test(aS.nodeName) || (g.test(aS.nodeName) && aS.href)
            ? 0
            : A;
        }
        return aS[aR];
      }
      if (!a.support.style && aT && aR === "style") {
        if (aW) {
          aS.style.cssText = "" + aX;
        }
        return aS.style.cssText;
      }
      if (aW) {
        aS.setAttribute(aR, "" + aX);
      }
      if (!aS.attributes[aR] && aS.hasAttribute && !aS.hasAttribute(aR)) {
        return A;
      }
      var aU =
        !a.support.hrefNormalized && aT && aV
          ? aS.getAttribute(aR, 2)
          : aS.getAttribute(aR);
      return aU === null ? A : aU;
    },
  });
  var av = /\.(.*)$/,
    aG = /^(?:textarea|input|select)$/i,
    C = /\./g,
    R = / /g,
    af = /[^\w\s.|`]/g,
    x = function (aR) {
      return aR.replace(af, "\\$&");
    },
    w = { focusin: 0, focusout: 0 };
  a.event = {
    add: function (aV, aZ, a5, aX) {
      if (aV.nodeType === 3 || aV.nodeType === 8) {
        return;
      }
      if (a.isWindow(aV) && aV !== aE && !aV.frameElement) {
        aV = aE;
      }
      if (a5 === false) {
        a5 = aJ;
      } else {
        if (!a5) {
          return;
        }
      }
      var aT, a3;
      if (a5.handler) {
        aT = a5;
        a5 = aT.handler;
      }
      if (!a5.guid) {
        a5.guid = a.guid++;
      }
      var a0 = a.data(aV);
      if (!a0) {
        return;
      }
      var aR = aV.nodeType ? "events" : "__events__",
        a4 = a0[aR],
        aY = a0.handle;
      if (typeof a4 === "function") {
        aY = a4.handle;
        a4 = a4.events;
      } else {
        if (!a4) {
          if (!aV.nodeType) {
            a0[aR] = a0 = function () {};
          }
          a0.events = a4 = {};
        }
      }
      if (!aY) {
        a0.handle = aY = function () {
          return typeof a !== "undefined" && !a.event.triggered
            ? a.event.handle.apply(aY.elem, arguments)
            : A;
        };
      }
      aY.elem = aV;
      aZ = aZ.split(" ");
      var a2,
        aW = 0,
        aS;
      while ((a2 = aZ[aW++])) {
        a3 = aT ? a.extend({}, aT) : { handler: a5, data: aX };
        if (a2.indexOf(".") > -1) {
          aS = a2.split(".");
          a2 = aS.shift();
          a3.namespace = aS.slice(0).sort().join(".");
        } else {
          aS = [];
          a3.namespace = "";
        }
        a3.type = a2;
        if (!a3.guid) {
          a3.guid = a5.guid;
        }
        var aU = a4[a2],
          a1 = a.event.special[a2] || {};
        if (!aU) {
          aU = a4[a2] = [];
          if (!a1.setup || a1.setup.call(aV, aX, aS, aY) === false) {
            if (aV.addEventListener) {
              aV.addEventListener(a2, aY, false);
            } else {
              if (aV.attachEvent) {
                aV.attachEvent("on" + a2, aY);
              }
            }
          }
        }
        if (a1.add) {
          a1.add.call(aV, a3);
          if (!a3.handler.guid) {
            a3.handler.guid = a5.guid;
          }
        }
        aU.push(a3);
        a.event.global[a2] = true;
      }
      aV = null;
    },
    global: {},
    remove: function (a7, a1, aT, aX) {
      if (a7.nodeType === 3 || a7.nodeType === 8) {
        return;
      }
      if (aT === false) {
        aT = aJ;
      }
      var ba,
        aW,
        aY,
        a4,
        a5 = 0,
        aU,
        aZ,
        a2,
        aV,
        a0,
        aR,
        a9,
        a3 = a7.nodeType ? "events" : "__events__",
        a6 = a.data(a7),
        aS = a6 && a6[a3];
      if (!a6 || !aS) {
        return;
      }
      if (typeof aS === "function") {
        a6 = aS;
        aS = aS.events;
      }
      if (a1 && a1.type) {
        aT = a1.handler;
        a1 = a1.type;
      }
      if (!a1 || (typeof a1 === "string" && a1.charAt(0) === ".")) {
        a1 = a1 || "";
        for (aW in aS) {
          a.event.remove(a7, aW + a1);
        }
        return;
      }
      a1 = a1.split(" ");
      while ((aW = a1[a5++])) {
        a9 = aW;
        aR = null;
        aU = aW.indexOf(".") < 0;
        aZ = [];
        if (!aU) {
          aZ = aW.split(".");
          aW = aZ.shift();
          a2 = new RegExp(
            "(^|\\.)" +
              a.map(aZ.slice(0).sort(), x).join("\\.(?:.*\\.)?") +
              "(\\.|$)"
          );
        }
        a0 = aS[aW];
        if (!a0) {
          continue;
        }
        if (!aT) {
          for (a4 = 0; a4 < a0.length; a4++) {
            aR = a0[a4];
            if (aU || a2.test(aR.namespace)) {
              a.event.remove(a7, a9, aR.handler, a4);
              a0.splice(a4--, 1);
            }
          }
          continue;
        }
        aV = a.event.special[aW] || {};
        for (a4 = aX || 0; a4 < a0.length; a4++) {
          aR = a0[a4];
          if (aT.guid === aR.guid) {
            if (aU || a2.test(aR.namespace)) {
              if (aX == null) {
                a0.splice(a4--, 1);
              }
              if (aV.remove) {
                aV.remove.call(a7, aR);
              }
            }
            if (aX != null) {
              break;
            }
          }
        }
        if (a0.length === 0 || (aX != null && a0.length === 1)) {
          if (!aV.teardown || aV.teardown.call(a7, aZ) === false) {
            a.removeEvent(a7, aW, a6.handle);
          }
          ba = null;
          delete aS[aW];
        }
      }
      if (a.isEmptyObject(aS)) {
        var a8 = a6.handle;
        if (a8) {
          a8.elem = null;
        }
        delete a6.events;
        delete a6.handle;
        if (typeof a6 === "function") {
          a.removeData(a7, a3);
        } else {
          if (a.isEmptyObject(a6)) {
            a.removeData(a7);
          }
        }
      }
    },
    trigger: function (aS, aX, aU) {
      var a1 = aS.type || aS,
        aW = arguments[3];
      if (!aW) {
        aS =
          typeof aS === "object"
            ? aS[a.expando]
              ? aS
              : a.extend(a.Event(a1), aS)
            : a.Event(a1);
        if (a1.indexOf("!") >= 0) {
          aS.type = a1 = a1.slice(0, -1);
          aS.exclusive = true;
        }
        if (!aU) {
          aS.stopPropagation();
          if (a.event.global[a1]) {
            a.each(a.cache, function () {
              if (this.events && this.events[a1]) {
                a.event.trigger(aS, aX, this.handle.elem);
              }
            });
          }
        }
        if (!aU || aU.nodeType === 3 || aU.nodeType === 8) {
          return A;
        }
        aS.result = A;
        aS.target = aU;
        aX = a.makeArray(aX);
        aX.unshift(aS);
      }
      aS.currentTarget = aU;
      var aY = aU.nodeType
        ? a.data(aU, "handle")
        : (a.data(aU, "__events__") || {}).handle;
      if (aY) {
        aY.apply(aU, aX);
      }
      var a3 = aU.parentNode || aU.ownerDocument;
      try {
        if (!(aU && aU.nodeName && a.noData[aU.nodeName.toLowerCase()])) {
          if (aU["on" + a1] && aU["on" + a1].apply(aU, aX) === false) {
            aS.result = false;
            aS.preventDefault();
          }
        }
      } catch (a2) {}
      if (!aS.isPropagationStopped() && a3) {
        a.event.trigger(aS, aX, a3, true);
      } else {
        if (!aS.isDefaultPrevented()) {
          var aT,
            aZ = aS.target,
            aR = a1.replace(av, ""),
            a4 = a.nodeName(aZ, "a") && aR === "click",
            a0 = a.event.special[aR] || {};
          if (
            (!a0._default || a0._default.call(aU, aS) === false) &&
            !a4 &&
            !(aZ && aZ.nodeName && a.noData[aZ.nodeName.toLowerCase()])
          ) {
            try {
              if (aZ[aR]) {
                aT = aZ["on" + aR];
                if (aT) {
                  aZ["on" + aR] = null;
                }
                a.event.triggered = true;
                aZ[aR]();
              }
            } catch (aV) {}
            if (aT) {
              aZ["on" + aR] = aT;
            }
            a.event.triggered = false;
          }
        }
      }
    },
    handle: function (aR) {
      var a0,
        aT,
        aS,
        a2,
        a1,
        aW = [],
        aY = a.makeArray(arguments);
      aR = aY[0] = a.event.fix(aR || aE.event);
      aR.currentTarget = this;
      a0 = aR.type.indexOf(".") < 0 && !aR.exclusive;
      if (!a0) {
        aS = aR.type.split(".");
        aR.type = aS.shift();
        aW = aS.slice(0).sort();
        a2 = new RegExp("(^|\\.)" + aW.join("\\.(?:.*\\.)?") + "(\\.|$)");
      }
      aR.namespace = aR.namespace || aW.join(".");
      a1 = a.data(this, this.nodeType ? "events" : "__events__");
      if (typeof a1 === "function") {
        a1 = a1.events;
      }
      aT = (a1 || {})[aR.type];
      if (a1 && aT) {
        aT = aT.slice(0);
        for (var aV = 0, aU = aT.length; aV < aU; aV++) {
          var aZ = aT[aV];
          if (a0 || a2.test(aZ.namespace)) {
            aR.handler = aZ.handler;
            aR.data = aZ.data;
            aR.handleObj = aZ;
            var aX = aZ.handler.apply(this, aY);
            if (aX !== A) {
              aR.result = aX;
              if (aX === false) {
                aR.preventDefault();
                aR.stopPropagation();
              }
            }
            if (aR.isImmediatePropagationStopped()) {
              break;
            }
          }
        }
      }
      return aR.result;
    },
    props:
      "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(
        " "
      ),
    fix: function (aU) {
      if (aU[a.expando]) {
        return aU;
      }
      var aS = aU;
      aU = a.Event(aS);
      for (var aT = this.props.length, aW; aT; ) {
        aW = this.props[--aT];
        aU[aW] = aS[aW];
      }
      if (!aU.target) {
        aU.target = aU.srcElement || aa;
      }
      if (aU.target.nodeType === 3) {
        aU.target = aU.target.parentNode;
      }
      if (!aU.relatedTarget && aU.fromElement) {
        aU.relatedTarget =
          aU.fromElement === aU.target ? aU.toElement : aU.fromElement;
      }
      if (aU.pageX == null && aU.clientX != null) {
        var aV = aa.documentElement,
          aR = aa.body;
        aU.pageX =
          aU.clientX +
          ((aV && aV.scrollLeft) || (aR && aR.scrollLeft) || 0) -
          ((aV && aV.clientLeft) || (aR && aR.clientLeft) || 0);
        aU.pageY =
          aU.clientY +
          ((aV && aV.scrollTop) || (aR && aR.scrollTop) || 0) -
          ((aV && aV.clientTop) || (aR && aR.clientTop) || 0);
      }
      if (aU.which == null && (aU.charCode != null || aU.keyCode != null)) {
        aU.which = aU.charCode != null ? aU.charCode : aU.keyCode;
      }
      if (!aU.metaKey && aU.ctrlKey) {
        aU.metaKey = aU.ctrlKey;
      }
      if (!aU.which && aU.button !== A) {
        aU.which =
          aU.button & 1 ? 1 : aU.button & 2 ? 3 : aU.button & 4 ? 2 : 0;
      }
      return aU;
    },
    guid: 100000000,
    proxy: a.proxy,
    special: {
      ready: { setup: a.bindReady, teardown: a.noop },
      live: {
        add: function (aR) {
          a.event.add(
            this,
            j(aR.origType, aR.selector),
            a.extend({}, aR, { handler: U, guid: aR.handler.guid })
          );
        },
        remove: function (aR) {
          a.event.remove(this, j(aR.origType, aR.selector), aR);
        },
      },
      beforeunload: {
        setup: function (aT, aS, aR) {
          if (a.isWindow(this)) {
            this.onbeforeunload = aR;
          }
        },
        teardown: function (aS, aR) {
          if (this.onbeforeunload === aR) {
            this.onbeforeunload = null;
          }
        },
      },
    },
  };
  a.removeEvent = aa.removeEventListener
    ? function (aS, aR, aT) {
        if (aS.removeEventListener) {
          aS.removeEventListener(aR, aT, false);
        }
      }
    : function (aS, aR, aT) {
        if (aS.detachEvent) {
          aS.detachEvent("on" + aR, aT);
        }
      };
  a.Event = function (aR) {
    if (!this.preventDefault) {
      return new a.Event(aR);
    }
    if (aR && aR.type) {
      this.originalEvent = aR;
      this.type = aR.type;
    } else {
      this.type = aR;
    }
    this.timeStamp = a.now();
    this[a.expando] = true;
  };
  function aJ() {
    return false;
  }
  function d() {
    return true;
  }
  a.Event.prototype = {
    preventDefault: function () {
      this.isDefaultPrevented = d;
      var aR = this.originalEvent;
      if (!aR) {
        return;
      }
      if (aR.preventDefault) {
        aR.preventDefault();
      } else {
        aR.returnValue = false;
      }
    },
    stopPropagation: function () {
      this.isPropagationStopped = d;
      var aR = this.originalEvent;
      if (!aR) {
        return;
      }
      if (aR.stopPropagation) {
        aR.stopPropagation();
      }
      aR.cancelBubble = true;
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = d;
      this.stopPropagation();
    },
    isDefaultPrevented: aJ,
    isPropagationStopped: aJ,
    isImmediatePropagationStopped: aJ,
  };
  var Q = function (aS) {
      var aR = aS.relatedTarget;
      try {
        while (aR && aR !== this) {
          aR = aR.parentNode;
        }
        if (aR !== this) {
          aS.type = aS.data;
          a.event.handle.apply(this, arguments);
        }
      } catch (aT) {}
    },
    ap = function (aR) {
      aR.type = aR.data;
      a.event.handle.apply(this, arguments);
    };
  a.each(
    { mouseenter: "mouseover", mouseleave: "mouseout" },
    function (aS, aR) {
      a.event.special[aS] = {
        setup: function (aT) {
          a.event.add(this, aR, aT && aT.selector ? ap : Q, aS);
        },
        teardown: function (aT) {
          a.event.remove(this, aR, aT && aT.selector ? ap : Q);
        },
      };
    }
  );
  if (!a.support.submitBubbles) {
    a.event.special.submit = {
      setup: function (aS, aR) {
        if (this.nodeName.toLowerCase() !== "form") {
          a.event.add(this, "click.specialSubmit", function (aV) {
            var aU = aV.target,
              aT = aU.type;
            if (
              (aT === "submit" || aT === "image") &&
              a(aU).closest("form").length
            ) {
              aV.liveFired = A;
              return at("submit", this, arguments);
            }
          });
          a.event.add(this, "keypress.specialSubmit", function (aV) {
            var aU = aV.target,
              aT = aU.type;
            if (
              (aT === "text" || aT === "password") &&
              a(aU).closest("form").length &&
              aV.keyCode === 13
            ) {
              aV.liveFired = A;
              return at("submit", this, arguments);
            }
          });
        } else {
          return false;
        }
      },
      teardown: function (aR) {
        a.event.remove(this, ".specialSubmit");
      },
    };
  }
  if (!a.support.changeBubbles) {
    var aK,
      f = function (aS) {
        var aR = aS.type,
          aT = aS.value;
        if (aR === "radio" || aR === "checkbox") {
          aT = aS.checked;
        } else {
          if (aR === "select-multiple") {
            aT =
              aS.selectedIndex > -1
                ? a
                    .map(aS.options, function (aU) {
                      return aU.selected;
                    })
                    .join("-")
                : "";
          } else {
            if (aS.nodeName.toLowerCase() === "select") {
              aT = aS.selectedIndex;
            }
          }
        }
        return aT;
      },
      O = function O(aT) {
        var aR = aT.target,
          aS,
          aU;
        if (!aG.test(aR.nodeName) || aR.readOnly) {
          return;
        }
        aS = a.data(aR, "_change_data");
        aU = f(aR);
        if (aT.type !== "focusout" || aR.type !== "radio") {
          a.data(aR, "_change_data", aU);
        }
        if (aS === A || aU === aS) {
          return;
        }
        if (aS != null || aU) {
          aT.type = "change";
          aT.liveFired = A;
          return a.event.trigger(aT, arguments[1], aR);
        }
      };
    a.event.special.change = {
      filters: {
        focusout: O,
        beforedeactivate: O,
        click: function (aT) {
          var aS = aT.target,
            aR = aS.type;
          if (
            aR === "radio" ||
            aR === "checkbox" ||
            aS.nodeName.toLowerCase() === "select"
          ) {
            return O.call(this, aT);
          }
        },
        keydown: function (aT) {
          var aS = aT.target,
            aR = aS.type;
          if (
            (aT.keyCode === 13 && aS.nodeName.toLowerCase() !== "textarea") ||
            (aT.keyCode === 32 && (aR === "checkbox" || aR === "radio")) ||
            aR === "select-multiple"
          ) {
            return O.call(this, aT);
          }
        },
        beforeactivate: function (aS) {
          var aR = aS.target;
          a.data(aR, "_change_data", f(aR));
        },
      },
      setup: function (aT, aS) {
        if (this.type === "file") {
          return false;
        }
        for (var aR in aK) {
          a.event.add(this, aR + ".specialChange", aK[aR]);
        }
        return aG.test(this.nodeName);
      },
      teardown: function (aR) {
        a.event.remove(this, ".specialChange");
        return aG.test(this.nodeName);
      },
    };
    aK = a.event.special.change.filters;
    aK.focus = aK.beforeactivate;
  }
  function at(aS, aT, aR) {
    aR[0].type = aS;
    return a.event.handle.apply(aT, aR);
  }
  if (aa.addEventListener) {
    a.each({ focus: "focusin", blur: "focusout" }, function (aT, aR) {
      a.event.special[aR] = {
        setup: function () {
          if (w[aR]++ === 0) {
            aa.addEventListener(aT, aS, true);
          }
        },
        teardown: function () {
          if (--w[aR] === 0) {
            aa.removeEventListener(aT, aS, true);
          }
        },
      };
      function aS(aU) {
        aU = a.event.fix(aU);
        aU.type = aR;
        return a.event.trigger(aU, null, aU.target);
      }
    });
  }
  a.each(["bind", "one"], function (aS, aR) {
    a.fn[aR] = function (aY, aZ, aX) {
      if (typeof aY === "object") {
        for (var aV in aY) {
          this[aR](aV, aZ, aY[aV], aX);
        }
        return this;
      }
      if (a.isFunction(aZ) || aZ === false) {
        aX = aZ;
        aZ = A;
      }
      var aW =
        aR === "one"
          ? a.proxy(aX, function (a0) {
              a(this).unbind(a0, aW);
              return aX.apply(this, arguments);
            })
          : aX;
      if (aY === "unload" && aR !== "one") {
        this.one(aY, aZ, aX);
      } else {
        for (var aU = 0, aT = this.length; aU < aT; aU++) {
          a.event.add(this[aU], aY, aW, aZ);
        }
      }
      return this;
    };
  });
  a.fn.extend({
    unbind: function (aV, aU) {
      if (typeof aV === "object" && !aV.preventDefault) {
        for (var aT in aV) {
          this.unbind(aT, aV[aT]);
        }
      } else {
        for (var aS = 0, aR = this.length; aS < aR; aS++) {
          a.event.remove(this[aS], aV, aU);
        }
      }
      return this;
    },
    delegate: function (aR, aS, aU, aT) {
      return this.live(aS, aU, aT, aR);
    },
    undelegate: function (aR, aS, aT) {
      if (arguments.length === 0) {
        return this.unbind("live");
      } else {
        return this.die(aS, null, aT, aR);
      }
    },
    trigger: function (aR, aS) {
      return this.each(function () {
        a.event.trigger(aR, aS, this);
      });
    },
    triggerHandler: function (aR, aT) {
      if (this[0]) {
        var aS = a.Event(aR);
        aS.preventDefault();
        aS.stopPropagation();
        a.event.trigger(aS, aT, this[0]);
        return aS.result;
      }
    },
    toggle: function (aT) {
      var aR = arguments,
        aS = 1;
      while (aS < aR.length) {
        a.proxy(aT, aR[aS++]);
      }
      return this.click(
        a.proxy(aT, function (aU) {
          var aV = (a.data(this, "lastToggle" + aT.guid) || 0) % aS;
          a.data(this, "lastToggle" + aT.guid, aV + 1);
          aU.preventDefault();
          return aR[aV].apply(this, arguments) || false;
        })
      );
    },
    hover: function (aR, aS) {
      return this.mouseenter(aR).mouseleave(aS || aR);
    },
  });
  var ao = {
    focus: "focusin",
    blur: "focusout",
    mouseenter: "mouseover",
    mouseleave: "mouseout",
  };
  a.each(["live", "die"], function (aS, aR) {
    a.fn[aR] = function (a2, aZ, a4, aV) {
      var a3,
        a0 = 0,
        a1,
        aU,
        a6,
        aX = aV || this.selector,
        aT = aV ? this : a(this.context);
      if (typeof a2 === "object" && !a2.preventDefault) {
        for (var a5 in a2) {
          aT[aR](a5, aZ, a2[a5], aX);
        }
        return this;
      }
      if (a.isFunction(aZ)) {
        a4 = aZ;
        aZ = A;
      }
      a2 = (a2 || "").split(" ");
      while ((a3 = a2[a0++]) != null) {
        a1 = av.exec(a3);
        aU = "";
        if (a1) {
          aU = a1[0];
          a3 = a3.replace(av, "");
        }
        if (a3 === "hover") {
          a2.push("mouseenter" + aU, "mouseleave" + aU);
          continue;
        }
        a6 = a3;
        if (a3 === "focus" || a3 === "blur") {
          a2.push(ao[a3] + aU);
          a3 = a3 + aU;
        } else {
          a3 = (ao[a3] || a3) + aU;
        }
        if (aR === "live") {
          for (var aY = 0, aW = aT.length; aY < aW; aY++) {
            a.event.add(aT[aY], "live." + j(a3, aX), {
              data: aZ,
              selector: aX,
              handler: a4,
              origType: a3,
              origHandler: a4,
              preType: a6,
            });
          }
        } else {
          aT.unbind("live." + j(a3, aX), a4);
        }
      }
      return this;
    };
  });
  function U(a2) {
    var aZ,
      aU,
      a8,
      aW,
      aR,
      a4,
      a1,
      a3,
      a0,
      a7,
      aY,
      aX,
      a6,
      a5 = [],
      aV = [],
      aS = a.data(this, this.nodeType ? "events" : "__events__");
    if (typeof aS === "function") {
      aS = aS.events;
    }
    if (
      a2.liveFired === this ||
      !aS ||
      !aS.live ||
      (a2.button && a2.type === "click")
    ) {
      return;
    }
    if (a2.namespace) {
      aX = new RegExp(
        "(^|\\.)" + a2.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"
      );
    }
    a2.liveFired = this;
    var aT = aS.live.slice(0);
    for (a1 = 0; a1 < aT.length; a1++) {
      aR = aT[a1];
      if (aR.origType.replace(av, "") === a2.type) {
        aV.push(aR.selector);
      } else {
        aT.splice(a1--, 1);
      }
    }
    aW = a(a2.target).closest(aV, a2.currentTarget);
    for (a3 = 0, a0 = aW.length; a3 < a0; a3++) {
      aY = aW[a3];
      for (a1 = 0; a1 < aT.length; a1++) {
        aR = aT[a1];
        if (aY.selector === aR.selector && (!aX || aX.test(aR.namespace))) {
          a4 = aY.elem;
          a8 = null;
          if (aR.preType === "mouseenter" || aR.preType === "mouseleave") {
            a2.type = aR.preType;
            a8 = a(a2.relatedTarget).closest(aR.selector)[0];
          }
          if (!a8 || a8 !== a4) {
            a5.push({ elem: a4, handleObj: aR, level: aY.level });
          }
        }
      }
    }
    for (a3 = 0, a0 = a5.length; a3 < a0; a3++) {
      aW = a5[a3];
      if (aU && aW.level > aU) {
        break;
      }
      a2.currentTarget = aW.elem;
      a2.data = aW.handleObj.data;
      a2.handleObj = aW.handleObj;
      a6 = aW.handleObj.origHandler.apply(aW.elem, arguments);
      if (a6 === false || a2.isPropagationStopped()) {
        aU = aW.level;
        if (a6 === false) {
          aZ = false;
        }
        if (a2.isImmediatePropagationStopped()) {
          break;
        }
      }
    }
    return aZ;
  }
  function j(aS, aR) {
    return (
      (aS && aS !== "*" ? aS + "." : "") + aR.replace(C, "`").replace(R, "&")
    );
  }
  a.each(
    "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(
      " "
    ),
    function (aS, aR) {
      a.fn[aR] = function (aU, aT) {
        if (aT == null) {
          aT = aU;
          aU = null;
        }
        return arguments.length > 0 ? this.bind(aR, aU, aT) : this.trigger(aR);
      };
      if (a.attrFn) {
        a.attrFn[aR] = true;
      }
    }
  );
  if (aE.attachEvent && !aE.addEventListener) {
    a(aE).bind("unload", function () {
      for (var aS in a.cache) {
        if (a.cache[aS].handle) {
          try {
            a.event.remove(a.cache[aS].handle.elem);
          } catch (aR) {}
        }
      }
    });
    /*
     * Sizzle CSS Selector Engine - v1.0
     *  Copyright 2009, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */
  }
  (function () {
    var a6 =
        /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
      aZ = 0,
      aU = Object.prototype.toString,
      a5 = false,
      aY = true;
    [0, 0].sort(function () {
      aY = false;
      return 0;
    });
    var aS = function (bd, a8, bg, bh) {
      bg = bg || [];
      a8 = a8 || aa;
      var bj = a8;
      if (a8.nodeType !== 1 && a8.nodeType !== 9) {
        return [];
      }
      if (!bd || typeof bd !== "string") {
        return bg;
      }
      var ba,
        bl,
        bo,
        a9,
        bk,
        bn,
        bm,
        bf,
        bc = true,
        bb = aS.isXML(a8),
        be = [],
        bi = bd;
      do {
        a6.exec("");
        ba = a6.exec(bi);
        if (ba) {
          bi = ba[3];
          be.push(ba[1]);
          if (ba[2]) {
            a9 = ba[3];
            break;
          }
        }
      } while (ba);
      if (be.length > 1 && a0.exec(bd)) {
        if (be.length === 2 && aV.relative[be[0]]) {
          bl = aX(be[0] + be[1], a8);
        } else {
          bl = aV.relative[be[0]] ? [a8] : aS(be.shift(), a8);
          while (be.length) {
            bd = be.shift();
            if (aV.relative[bd]) {
              bd += be.shift();
            }
            bl = aX(bd, bl);
          }
        }
      } else {
        if (
          !bh &&
          be.length > 1 &&
          a8.nodeType === 9 &&
          !bb &&
          aV.match.ID.test(be[0]) &&
          !aV.match.ID.test(be[be.length - 1])
        ) {
          bk = aS.find(be.shift(), a8, bb);
          a8 = bk.expr ? aS.filter(bk.expr, bk.set)[0] : bk.set[0];
        }
        if (a8) {
          bk = bh
            ? { expr: be.pop(), set: aR(bh) }
            : aS.find(
                be.pop(),
                be.length === 1 &&
                  (be[0] === "~" || be[0] === "+") &&
                  a8.parentNode
                  ? a8.parentNode
                  : a8,
                bb
              );
          bl = bk.expr ? aS.filter(bk.expr, bk.set) : bk.set;
          if (be.length > 0) {
            bo = aR(bl);
          } else {
            bc = false;
          }
          while (be.length) {
            bn = be.pop();
            bm = bn;
            if (!aV.relative[bn]) {
              bn = "";
            } else {
              bm = be.pop();
            }
            if (bm == null) {
              bm = a8;
            }
            aV.relative[bn](bo, bm, bb);
          }
        } else {
          bo = be = [];
        }
      }
      if (!bo) {
        bo = bl;
      }
      if (!bo) {
        aS.error(bn || bd);
      }
      if (aU.call(bo) === "[object Array]") {
        if (!bc) {
          bg.push.apply(bg, bo);
        } else {
          if (a8 && a8.nodeType === 1) {
            for (bf = 0; bo[bf] != null; bf++) {
              if (
                bo[bf] &&
                (bo[bf] === true ||
                  (bo[bf].nodeType === 1 && aS.contains(a8, bo[bf])))
              ) {
                bg.push(bl[bf]);
              }
            }
          } else {
            for (bf = 0; bo[bf] != null; bf++) {
              if (bo[bf] && bo[bf].nodeType === 1) {
                bg.push(bl[bf]);
              }
            }
          }
        }
      } else {
        aR(bo, bg);
      }
      if (a9) {
        aS(a9, bj, bg, bh);
        aS.uniqueSort(bg);
      }
      return bg;
    };
    aS.uniqueSort = function (a9) {
      if (aT) {
        a5 = aY;
        a9.sort(aT);
        if (a5) {
          for (var a8 = 1; a8 < a9.length; a8++) {
            if (a9[a8] === a9[a8 - 1]) {
              a9.splice(a8--, 1);
            }
          }
        }
      }
      return a9;
    };
    aS.matches = function (a8, a9) {
      return aS(a8, null, null, a9);
    };
    aS.matchesSelector = function (a8, a9) {
      return aS(a9, null, null, [a8]).length > 0;
    };
    aS.find = function (bf, a8, bg) {
      var be;
      if (!bf) {
        return [];
      }
      for (var bb = 0, ba = aV.order.length; bb < ba; bb++) {
        var bc,
          bd = aV.order[bb];
        if ((bc = aV.leftMatch[bd].exec(bf))) {
          var a9 = bc[1];
          bc.splice(1, 1);
          if (a9.substr(a9.length - 1) !== "\\") {
            bc[1] = (bc[1] || "").replace(/\\/g, "");
            be = aV.find[bd](bc, a8, bg);
            if (be != null) {
              bf = bf.replace(aV.match[bd], "");
              break;
            }
          }
        }
      }
      if (!be) {
        be = a8.getElementsByTagName("*");
      }
      return { set: be, expr: bf };
    };
    aS.filter = function (bj, bi, bm, bc) {
      var be,
        a8,
        ba = bj,
        bo = [],
        bg = bi,
        bf = bi && bi[0] && aS.isXML(bi[0]);
      while (bj && bi.length) {
        for (var bh in aV.filter) {
          if ((be = aV.leftMatch[bh].exec(bj)) != null && be[2]) {
            var bn,
              bl,
              a9 = aV.filter[bh],
              bb = be[1];
            a8 = false;
            be.splice(1, 1);
            if (bb.substr(bb.length - 1) === "\\") {
              continue;
            }
            if (bg === bo) {
              bo = [];
            }
            if (aV.preFilter[bh]) {
              be = aV.preFilter[bh](be, bg, bm, bo, bc, bf);
              if (!be) {
                a8 = bn = true;
              } else {
                if (be === true) {
                  continue;
                }
              }
            }
            if (be) {
              for (var bd = 0; (bl = bg[bd]) != null; bd++) {
                if (bl) {
                  bn = a9(bl, be, bd, bg);
                  var bk = bc ^ !!bn;
                  if (bm && bn != null) {
                    if (bk) {
                      a8 = true;
                    } else {
                      bg[bd] = false;
                    }
                  } else {
                    if (bk) {
                      bo.push(bl);
                      a8 = true;
                    }
                  }
                }
              }
            }
            if (bn !== A) {
              if (!bm) {
                bg = bo;
              }
              bj = bj.replace(aV.match[bh], "");
              if (!a8) {
                return [];
              }
              break;
            }
          }
        }
        if (bj === ba) {
          if (a8 == null) {
            aS.error(bj);
          } else {
            break;
          }
        }
        ba = bj;
      }
      return bg;
    };
    aS.error = function (a8) {
      throw "Syntax error, unrecognized expression: " + a8;
    };
    var aV = (aS.selectors = {
      order: ["ID", "NAME", "TAG"],
      match: {
        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
        CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        PSEUDO:
          /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
      },
      leftMatch: {},
      attrMap: { class: "className", for: "htmlFor" },
      attrHandle: {
        href: function (a8) {
          return a8.getAttribute("href");
        },
      },
      relative: {
        "+": function (be, a9) {
          var bb = typeof a9 === "string",
            bd = bb && !/\W/.test(a9),
            bf = bb && !bd;
          if (bd) {
            a9 = a9.toLowerCase();
          }
          for (var ba = 0, a8 = be.length, bc; ba < a8; ba++) {
            if ((bc = be[ba])) {
              while ((bc = bc.previousSibling) && bc.nodeType !== 1) {}
              be[ba] =
                bf || (bc && bc.nodeName.toLowerCase() === a9)
                  ? bc || false
                  : bc === a9;
            }
          }
          if (bf) {
            aS.filter(a9, be, true);
          }
        },
        ">": function (be, a9) {
          var bd,
            bc = typeof a9 === "string",
            ba = 0,
            a8 = be.length;
          if (bc && !/\W/.test(a9)) {
            a9 = a9.toLowerCase();
            for (; ba < a8; ba++) {
              bd = be[ba];
              if (bd) {
                var bb = bd.parentNode;
                be[ba] = bb.nodeName.toLowerCase() === a9 ? bb : false;
              }
            }
          } else {
            for (; ba < a8; ba++) {
              bd = be[ba];
              if (bd) {
                be[ba] = bc ? bd.parentNode : bd.parentNode === a9;
              }
            }
            if (bc) {
              aS.filter(a9, be, true);
            }
          }
        },
        "": function (bb, a9, bd) {
          var bc,
            ba = aZ++,
            a8 = a7;
          if (typeof a9 === "string" && !/\W/.test(a9)) {
            a9 = a9.toLowerCase();
            bc = a9;
            a8 = a4;
          }
          a8("parentNode", a9, ba, bb, bc, bd);
        },
        "~": function (bb, a9, bd) {
          var bc,
            ba = aZ++,
            a8 = a7;
          if (typeof a9 === "string" && !/\W/.test(a9)) {
            a9 = a9.toLowerCase();
            bc = a9;
            a8 = a4;
          }
          a8("previousSibling", a9, ba, bb, bc, bd);
        },
      },
      find: {
        ID: function (a9, ba, bb) {
          if (typeof ba.getElementById !== "undefined" && !bb) {
            var a8 = ba.getElementById(a9[1]);
            return a8 && a8.parentNode ? [a8] : [];
          }
        },
        NAME: function (ba, bd) {
          if (typeof bd.getElementsByName !== "undefined") {
            var a9 = [],
              bc = bd.getElementsByName(ba[1]);
            for (var bb = 0, a8 = bc.length; bb < a8; bb++) {
              if (bc[bb].getAttribute("name") === ba[1]) {
                a9.push(bc[bb]);
              }
            }
            return a9.length === 0 ? null : a9;
          }
        },
        TAG: function (a8, a9) {
          return a9.getElementsByTagName(a8[1]);
        },
      },
      preFilter: {
        CLASS: function (bb, a9, ba, a8, be, bf) {
          bb = " " + bb[1].replace(/\\/g, "") + " ";
          if (bf) {
            return bb;
          }
          for (var bc = 0, bd; (bd = a9[bc]) != null; bc++) {
            if (bd) {
              if (
                be ^
                (bd.className &&
                  (" " + bd.className + " ")
                    .replace(/[\t\n]/g, " ")
                    .indexOf(bb) >= 0)
              ) {
                if (!ba) {
                  a8.push(bd);
                }
              } else {
                if (ba) {
                  a9[bc] = false;
                }
              }
            }
          }
          return false;
        },
        ID: function (a8) {
          return a8[1].replace(/\\/g, "");
        },
        TAG: function (a9, a8) {
          return a9[1].toLowerCase();
        },
        CHILD: function (a8) {
          if (a8[1] === "nth") {
            var a9 = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
              (a8[2] === "even" && "2n") ||
                (a8[2] === "odd" && "2n+1") ||
                (!/\D/.test(a8[2]) && "0n+" + a8[2]) ||
                a8[2]
            );
            a8[2] = a9[1] + (a9[2] || 1) - 0;
            a8[3] = a9[3] - 0;
          }
          a8[0] = aZ++;
          return a8;
        },
        ATTR: function (bc, a9, ba, a8, bd, be) {
          var bb = bc[1].replace(/\\/g, "");
          if (!be && aV.attrMap[bb]) {
            bc[1] = aV.attrMap[bb];
          }
          if (bc[2] === "~=") {
            bc[4] = " " + bc[4] + " ";
          }
          return bc;
        },
        PSEUDO: function (bc, a9, ba, a8, bd) {
          if (bc[1] === "not") {
            if ((a6.exec(bc[3]) || "").length > 1 || /^\w/.test(bc[3])) {
              bc[3] = aS(bc[3], null, null, a9);
            } else {
              var bb = aS.filter(bc[3], a9, ba, true ^ bd);
              if (!ba) {
                a8.push.apply(a8, bb);
              }
              return false;
            }
          } else {
            if (aV.match.POS.test(bc[0]) || aV.match.CHILD.test(bc[0])) {
              return true;
            }
          }
          return bc;
        },
        POS: function (a8) {
          a8.unshift(true);
          return a8;
        },
      },
      filters: {
        enabled: function (a8) {
          return a8.disabled === false && a8.type !== "hidden";
        },
        disabled: function (a8) {
          return a8.disabled === true;
        },
        checked: function (a8) {
          return a8.checked === true;
        },
        selected: function (a8) {
          a8.parentNode.selectedIndex;
          return a8.selected === true;
        },
        parent: function (a8) {
          return !!a8.firstChild;
        },
        empty: function (a8) {
          return !a8.firstChild;
        },
        has: function (ba, a9, a8) {
          return !!aS(a8[3], ba).length;
        },
        header: function (a8) {
          return /h\d/i.test(a8.nodeName);
        },
        text: function (a8) {
          return "text" === a8.type;
        },
        radio: function (a8) {
          return "radio" === a8.type;
        },
        checkbox: function (a8) {
          return "checkbox" === a8.type;
        },
        file: function (a8) {
          return "file" === a8.type;
        },
        password: function (a8) {
          return "password" === a8.type;
        },
        submit: function (a8) {
          return "submit" === a8.type;
        },
        image: function (a8) {
          return "image" === a8.type;
        },
        reset: function (a8) {
          return "reset" === a8.type;
        },
        button: function (a8) {
          return "button" === a8.type || a8.nodeName.toLowerCase() === "button";
        },
        input: function (a8) {
          return /input|select|textarea|button/i.test(a8.nodeName);
        },
      },
      setFilters: {
        first: function (a9, a8) {
          return a8 === 0;
        },
        last: function (ba, a9, a8, bb) {
          return a9 === bb.length - 1;
        },
        even: function (a9, a8) {
          return a8 % 2 === 0;
        },
        odd: function (a9, a8) {
          return a8 % 2 === 1;
        },
        lt: function (ba, a9, a8) {
          return a9 < a8[3] - 0;
        },
        gt: function (ba, a9, a8) {
          return a9 > a8[3] - 0;
        },
        nth: function (ba, a9, a8) {
          return a8[3] - 0 === a9;
        },
        eq: function (ba, a9, a8) {
          return a8[3] - 0 === a9;
        },
      },
      filter: {
        PSEUDO: function (ba, bf, be, bg) {
          var a8 = bf[1],
            a9 = aV.filters[a8];
          if (a9) {
            return a9(ba, be, bf, bg);
          } else {
            if (a8 === "contains") {
              return (
                (
                  ba.textContent ||
                  ba.innerText ||
                  aS.getText([ba]) ||
                  ""
                ).indexOf(bf[3]) >= 0
              );
            } else {
              if (a8 === "not") {
                var bb = bf[3];
                for (var bd = 0, bc = bb.length; bd < bc; bd++) {
                  if (bb[bd] === ba) {
                    return false;
                  }
                }
                return true;
              } else {
                aS.error("Syntax error, unrecognized expression: " + a8);
              }
            }
          }
        },
        CHILD: function (a8, bb) {
          var be = bb[1],
            a9 = a8;
          switch (be) {
            case "only":
            case "first":
              while ((a9 = a9.previousSibling)) {
                if (a9.nodeType === 1) {
                  return false;
                }
              }
              if (be === "first") {
                return true;
              }
              a9 = a8;
            case "last":
              while ((a9 = a9.nextSibling)) {
                if (a9.nodeType === 1) {
                  return false;
                }
              }
              return true;
            case "nth":
              var ba = bb[2],
                bh = bb[3];
              if (ba === 1 && bh === 0) {
                return true;
              }
              var bd = bb[0],
                bg = a8.parentNode;
              if (bg && (bg.sizcache !== bd || !a8.nodeIndex)) {
                var bc = 0;
                for (a9 = bg.firstChild; a9; a9 = a9.nextSibling) {
                  if (a9.nodeType === 1) {
                    a9.nodeIndex = ++bc;
                  }
                }
                bg.sizcache = bd;
              }
              var bf = a8.nodeIndex - bh;
              if (ba === 0) {
                return bf === 0;
              } else {
                return bf % ba === 0 && bf / ba >= 0;
              }
          }
        },
        ID: function (a9, a8) {
          return a9.nodeType === 1 && a9.getAttribute("id") === a8;
        },
        TAG: function (a9, a8) {
          return (
            (a8 === "*" && a9.nodeType === 1) ||
            a9.nodeName.toLowerCase() === a8
          );
        },
        CLASS: function (a9, a8) {
          return (
            (" " + (a9.className || a9.getAttribute("class")) + " ").indexOf(
              a8
            ) > -1
          );
        },
        ATTR: function (bd, bb) {
          var ba = bb[1],
            a8 = aV.attrHandle[ba]
              ? aV.attrHandle[ba](bd)
              : bd[ba] != null
              ? bd[ba]
              : bd.getAttribute(ba),
            be = a8 + "",
            bc = bb[2],
            a9 = bb[4];
          return a8 == null
            ? bc === "!="
            : bc === "="
            ? be === a9
            : bc === "*="
            ? be.indexOf(a9) >= 0
            : bc === "~="
            ? (" " + be + " ").indexOf(a9) >= 0
            : !a9
            ? be && a8 !== false
            : bc === "!="
            ? be !== a9
            : bc === "^="
            ? be.indexOf(a9) === 0
            : bc === "$="
            ? be.substr(be.length - a9.length) === a9
            : bc === "|="
            ? be === a9 || be.substr(0, a9.length + 1) === a9 + "-"
            : false;
        },
        POS: function (bc, a9, ba, bd) {
          var a8 = a9[2],
            bb = aV.setFilters[a8];
          if (bb) {
            return bb(bc, ba, a9, bd);
          }
        },
      },
    });
    var a0 = aV.match.POS,
      aW = function (a9, a8) {
        return "\\" + (a8 - 0 + 1);
      };
    for (var a3 in aV.match) {
      aV.match[a3] = new RegExp(
        aV.match[a3].source + /(?![^\[]*\])(?![^\(]*\))/.source
      );
      aV.leftMatch[a3] = new RegExp(
        /(^(?:.|\r|\n)*?)/.source + aV.match[a3].source.replace(/\\(\d+)/g, aW)
      );
    }
    var aR = function (a9, a8) {
      a9 = Array.prototype.slice.call(a9, 0);
      if (a8) {
        a8.push.apply(a8, a9);
        return a8;
      }
      return a9;
    };
    try {
      Array.prototype.slice.call(aa.documentElement.childNodes, 0)[0].nodeType;
    } catch (a1) {
      aR = function (bc, bb) {
        var ba = 0,
          a9 = bb || [];
        if (aU.call(bc) === "[object Array]") {
          Array.prototype.push.apply(a9, bc);
        } else {
          if (typeof bc.length === "number") {
            for (var a8 = bc.length; ba < a8; ba++) {
              a9.push(bc[ba]);
            }
          } else {
            for (; bc[ba]; ba++) {
              a9.push(bc[ba]);
            }
          }
        }
        return a9;
      };
    }
    var aT, a2;
    if (aa.documentElement.compareDocumentPosition) {
      aT = function (a9, a8) {
        if (a9 === a8) {
          a5 = true;
          return 0;
        }
        if (!a9.compareDocumentPosition || !a8.compareDocumentPosition) {
          return a9.compareDocumentPosition ? -1 : 1;
        }
        return a9.compareDocumentPosition(a8) & 4 ? -1 : 1;
      };
    } else {
      aT = function (bg, bf) {
        var bd,
          a9,
          ba = [],
          a8 = [],
          bc = bg.parentNode,
          be = bf.parentNode,
          bh = bc;
        if (bg === bf) {
          a5 = true;
          return 0;
        } else {
          if (bc === be) {
            return a2(bg, bf);
          } else {
            if (!bc) {
              return -1;
            } else {
              if (!be) {
                return 1;
              }
            }
          }
        }
        while (bh) {
          ba.unshift(bh);
          bh = bh.parentNode;
        }
        bh = be;
        while (bh) {
          a8.unshift(bh);
          bh = bh.parentNode;
        }
        bd = ba.length;
        a9 = a8.length;
        for (var bb = 0; bb < bd && bb < a9; bb++) {
          if (ba[bb] !== a8[bb]) {
            return a2(ba[bb], a8[bb]);
          }
        }
        return bb === bd ? a2(bg, a8[bb], -1) : a2(ba[bb], bf, 1);
      };
      a2 = function (a9, a8, ba) {
        if (a9 === a8) {
          return ba;
        }
        var bb = a9.nextSibling;
        while (bb) {
          if (bb === a8) {
            return -1;
          }
          bb = bb.nextSibling;
        }
        return 1;
      };
    }
    aS.getText = function (a8) {
      var a9 = "",
        bb;
      for (var ba = 0; a8[ba]; ba++) {
        bb = a8[ba];
        if (bb.nodeType === 3 || bb.nodeType === 4) {
          a9 += bb.nodeValue;
        } else {
          if (bb.nodeType !== 8) {
            a9 += aS.getText(bb.childNodes);
          }
        }
      }
      return a9;
    };
    (function () {
      var a9 = aa.createElement("div"),
        ba = "script" + new Date().getTime(),
        a8 = aa.documentElement;
      a9.innerHTML = "<a name='" + ba + "'/>";
      a8.insertBefore(a9, a8.firstChild);
      if (aa.getElementById(ba)) {
        aV.find.ID = function (bc, bd, be) {
          if (typeof bd.getElementById !== "undefined" && !be) {
            var bb = bd.getElementById(bc[1]);
            return bb
              ? bb.id === bc[1] ||
                (typeof bb.getAttributeNode !== "undefined" &&
                  bb.getAttributeNode("id").nodeValue === bc[1])
                ? [bb]
                : A
              : [];
          }
        };
        aV.filter.ID = function (bd, bb) {
          var bc =
            typeof bd.getAttributeNode !== "undefined" &&
            bd.getAttributeNode("id");
          return bd.nodeType === 1 && bc && bc.nodeValue === bb;
        };
      }
      a8.removeChild(a9);
      a8 = a9 = null;
    })();
    (function () {
      var a8 = aa.createElement("div");
      a8.appendChild(aa.createComment(""));
      if (a8.getElementsByTagName("*").length > 0) {
        aV.find.TAG = function (a9, bd) {
          var bc = bd.getElementsByTagName(a9[1]);
          if (a9[1] === "*") {
            var bb = [];
            for (var ba = 0; bc[ba]; ba++) {
              if (bc[ba].nodeType === 1) {
                bb.push(bc[ba]);
              }
            }
            bc = bb;
          }
          return bc;
        };
      }
      a8.innerHTML = "<a href='#'></a>";
      if (
        a8.firstChild &&
        typeof a8.firstChild.getAttribute !== "undefined" &&
        a8.firstChild.getAttribute("href") !== "#"
      ) {
        aV.attrHandle.href = function (a9) {
          return a9.getAttribute("href", 2);
        };
      }
      a8 = null;
    })();
    if (aa.querySelectorAll) {
      (function () {
        var a8 = aS,
          bb = aa.createElement("div"),
          ba = "__sizzle__";
        bb.innerHTML = "<p class='TEST'></p>";
        if (bb.querySelectorAll && bb.querySelectorAll(".TEST").length === 0) {
          return;
        }
        aS = function (bg, bf, bc, be) {
          bf = bf || aa;
          bg = bg.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
          if (!be && !aS.isXML(bf)) {
            if (bf.nodeType === 9) {
              try {
                return aR(bf.querySelectorAll(bg), bc);
              } catch (bi) {}
            } else {
              if (bf.nodeType === 1 && bf.nodeName.toLowerCase() !== "object") {
                var bd = bf.getAttribute("id"),
                  bj = bd || ba;
                if (!bd) {
                  bf.setAttribute("id", bj);
                }
                try {
                  return aR(bf.querySelectorAll("#" + bj + " " + bg), bc);
                } catch (bh) {
                } finally {
                  if (!bd) {
                    bf.removeAttribute("id");
                  }
                }
              }
            }
          }
          return a8(bg, bf, bc, be);
        };
        for (var a9 in a8) {
          aS[a9] = a8[a9];
        }
        bb = null;
      })();
    }
    (function () {
      var a8 = aa.documentElement,
        ba =
          a8.matchesSelector ||
          a8.mozMatchesSelector ||
          a8.webkitMatchesSelector ||
          a8.msMatchesSelector,
        a9 = false;
      try {
        ba.call(aa.documentElement, "[test!='']:sizzle");
      } catch (bb) {
        a9 = true;
      }
      if (ba) {
        aS.matchesSelector = function (bc, be) {
          be = be.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
          if (!aS.isXML(bc)) {
            try {
              if (a9 || (!aV.match.PSEUDO.test(be) && !/!=/.test(be))) {
                return ba.call(bc, be);
              }
            } catch (bd) {}
          }
          return aS(be, null, null, [bc]).length > 0;
        };
      }
    })();
    (function () {
      var a8 = aa.createElement("div");
      a8.innerHTML = "<div class='test e'></div><div class='test'></div>";
      if (
        !a8.getElementsByClassName ||
        a8.getElementsByClassName("e").length === 0
      ) {
        return;
      }
      a8.lastChild.className = "e";
      if (a8.getElementsByClassName("e").length === 1) {
        return;
      }
      aV.order.splice(1, 0, "CLASS");
      aV.find.CLASS = function (a9, ba, bb) {
        if (typeof ba.getElementsByClassName !== "undefined" && !bb) {
          return ba.getElementsByClassName(a9[1]);
        }
      };
      a8 = null;
    })();
    function a4(a9, be, bd, bh, bf, bg) {
      for (var bb = 0, ba = bh.length; bb < ba; bb++) {
        var a8 = bh[bb];
        if (a8) {
          var bc = false;
          a8 = a8[a9];
          while (a8) {
            if (a8.sizcache === bd) {
              bc = bh[a8.sizset];
              break;
            }
            if (a8.nodeType === 1 && !bg) {
              a8.sizcache = bd;
              a8.sizset = bb;
            }
            if (a8.nodeName.toLowerCase() === be) {
              bc = a8;
              break;
            }
            a8 = a8[a9];
          }
          bh[bb] = bc;
        }
      }
    }
    function a7(a9, be, bd, bh, bf, bg) {
      for (var bb = 0, ba = bh.length; bb < ba; bb++) {
        var a8 = bh[bb];
        if (a8) {
          var bc = false;
          a8 = a8[a9];
          while (a8) {
            if (a8.sizcache === bd) {
              bc = bh[a8.sizset];
              break;
            }
            if (a8.nodeType === 1) {
              if (!bg) {
                a8.sizcache = bd;
                a8.sizset = bb;
              }
              if (typeof be !== "string") {
                if (a8 === be) {
                  bc = true;
                  break;
                }
              } else {
                if (aS.filter(be, [a8]).length > 0) {
                  bc = a8;
                  break;
                }
              }
            }
            a8 = a8[a9];
          }
          bh[bb] = bc;
        }
      }
    }
    if (aa.documentElement.contains) {
      aS.contains = function (a9, a8) {
        return a9 !== a8 && (a9.contains ? a9.contains(a8) : true);
      };
    } else {
      if (aa.documentElement.compareDocumentPosition) {
        aS.contains = function (a9, a8) {
          return !!(a9.compareDocumentPosition(a8) & 16);
        };
      } else {
        aS.contains = function () {
          return false;
        };
      }
    }
    aS.isXML = function (a8) {
      var a9 = (a8 ? a8.ownerDocument || a8 : 0).documentElement;
      return a9 ? a9.nodeName !== "HTML" : false;
    };
    var aX = function (a8, bf) {
      var bd,
        bb = [],
        bc = "",
        ba = bf.nodeType ? [bf] : bf;
      while ((bd = aV.match.PSEUDO.exec(a8))) {
        bc += bd[0];
        a8 = a8.replace(aV.match.PSEUDO, "");
      }
      a8 = aV.relative[a8] ? a8 + "*" : a8;
      for (var be = 0, a9 = ba.length; be < a9; be++) {
        aS(a8, ba[be], bb);
      }
      return aS.filter(bc, bb);
    };
    a.find = aS;
    a.expr = aS.selectors;
    a.expr[":"] = a.expr.filters;
    a.unique = aS.uniqueSort;
    a.text = aS.getText;
    a.isXMLDoc = aS.isXML;
    a.contains = aS.contains;
  })();
  var N = /Until$/,
    X = /^(?:parents|prevUntil|prevAll)/,
    aC = /,/,
    aO = /^.[^:#\[\.,]*$/,
    F = Array.prototype.slice,
    y = a.expr.match.POS;
  a.fn.extend({
    find: function (aR) {
      var aT = this.pushStack("", "find", aR),
        aW = 0;
      for (var aU = 0, aS = this.length; aU < aS; aU++) {
        aW = aT.length;
        a.find(aR, this[aU], aT);
        if (aU > 0) {
          for (var aX = aW; aX < aT.length; aX++) {
            for (var aV = 0; aV < aW; aV++) {
              if (aT[aV] === aT[aX]) {
                aT.splice(aX--, 1);
                break;
              }
            }
          }
        }
      }
      return aT;
    },
    has: function (aS) {
      var aR = a(aS);
      return this.filter(function () {
        for (var aU = 0, aT = aR.length; aU < aT; aU++) {
          if (a.contains(this, aR[aU])) {
            return true;
          }
        }
      });
    },
    not: function (aR) {
      return this.pushStack(ae(this, aR, false), "not", aR);
    },
    filter: function (aR) {
      return this.pushStack(ae(this, aR, true), "filter", aR);
    },
    is: function (aR) {
      return !!aR && a.filter(aR, this).length > 0;
    },
    closest: function (a1, aS) {
      var aY = [],
        aV,
        aT,
        a0 = this[0];
      if (a.isArray(a1)) {
        var aX,
          aU,
          aW = {},
          aR = 1;
        if (a0 && a1.length) {
          for (aV = 0, aT = a1.length; aV < aT; aV++) {
            aU = a1[aV];
            if (!aW[aU]) {
              aW[aU] = a.expr.match.POS.test(aU)
                ? a(aU, aS || this.context)
                : aU;
            }
          }
          while (a0 && a0.ownerDocument && a0 !== aS) {
            for (aU in aW) {
              aX = aW[aU];
              if (aX.jquery ? aX.index(a0) > -1 : a(a0).is(aX)) {
                aY.push({ selector: aU, elem: a0, level: aR });
              }
            }
            a0 = a0.parentNode;
            aR++;
          }
        }
        return aY;
      }
      var aZ = y.test(a1) ? a(a1, aS || this.context) : null;
      for (aV = 0, aT = this.length; aV < aT; aV++) {
        a0 = this[aV];
        while (a0) {
          if (aZ ? aZ.index(a0) > -1 : a.find.matchesSelector(a0, a1)) {
            aY.push(a0);
            break;
          } else {
            a0 = a0.parentNode;
            if (!a0 || !a0.ownerDocument || a0 === aS) {
              break;
            }
          }
        }
      }
      aY = aY.length > 1 ? a.unique(aY) : aY;
      return this.pushStack(aY, "closest", a1);
    },
    index: function (aR) {
      if (!aR || typeof aR === "string") {
        return a.inArray(this[0], aR ? a(aR) : this.parent().children());
      }
      return a.inArray(aR.jquery ? aR[0] : aR, this);
    },
    add: function (aR, aS) {
      var aU =
          typeof aR === "string" ? a(aR, aS || this.context) : a.makeArray(aR),
        aT = a.merge(this.get(), aU);
      return this.pushStack(u(aU[0]) || u(aT[0]) ? aT : a.unique(aT));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  });
  function u(aR) {
    return !aR || !aR.parentNode || aR.parentNode.nodeType === 11;
  }
  a.each(
    {
      parent: function (aS) {
        var aR = aS.parentNode;
        return aR && aR.nodeType !== 11 ? aR : null;
      },
      parents: function (aR) {
        return a.dir(aR, "parentNode");
      },
      parentsUntil: function (aS, aR, aT) {
        return a.dir(aS, "parentNode", aT);
      },
      next: function (aR) {
        return a.nth(aR, 2, "nextSibling");
      },
      prev: function (aR) {
        return a.nth(aR, 2, "previousSibling");
      },
      nextAll: function (aR) {
        return a.dir(aR, "nextSibling");
      },
      prevAll: function (aR) {
        return a.dir(aR, "previousSibling");
      },
      nextUntil: function (aS, aR, aT) {
        return a.dir(aS, "nextSibling", aT);
      },
      prevUntil: function (aS, aR, aT) {
        return a.dir(aS, "previousSibling", aT);
      },
      siblings: function (aR) {
        return a.sibling(aR.parentNode.firstChild, aR);
      },
      children: function (aR) {
        return a.sibling(aR.firstChild);
      },
      contents: function (aR) {
        return a.nodeName(aR, "iframe")
          ? aR.contentDocument || aR.contentWindow.document
          : a.makeArray(aR.childNodes);
      },
    },
    function (aR, aS) {
      a.fn[aR] = function (aV, aT) {
        var aU = a.map(this, aS, aV);
        if (!N.test(aR)) {
          aT = aV;
        }
        if (aT && typeof aT === "string") {
          aU = a.filter(aT, aU);
        }
        aU = this.length > 1 ? a.unique(aU) : aU;
        if ((this.length > 1 || aC.test(aT)) && X.test(aR)) {
          aU = aU.reverse();
        }
        return this.pushStack(aU, aR, F.call(arguments).join(","));
      };
    }
  );
  a.extend({
    filter: function (aT, aR, aS) {
      if (aS) {
        aT = ":not(" + aT + ")";
      }
      return aR.length === 1
        ? a.find.matchesSelector(aR[0], aT)
          ? [aR[0]]
          : []
        : a.find.matches(aT, aR);
    },
    dir: function (aT, aS, aV) {
      var aR = [],
        aU = aT[aS];
      while (
        aU &&
        aU.nodeType !== 9 &&
        (aV === A || aU.nodeType !== 1 || !a(aU).is(aV))
      ) {
        if (aU.nodeType === 1) {
          aR.push(aU);
        }
        aU = aU[aS];
      }
      return aR;
    },
    nth: function (aV, aR, aT, aU) {
      aR = aR || 1;
      var aS = 0;
      for (; aV; aV = aV[aT]) {
        if (aV.nodeType === 1 && ++aS === aR) {
          break;
        }
      }
      return aV;
    },
    sibling: function (aT, aS) {
      var aR = [];
      for (; aT; aT = aT.nextSibling) {
        if (aT.nodeType === 1 && aT !== aS) {
          aR.push(aT);
        }
      }
      return aR;
    },
  });
  function ae(aU, aT, aR) {
    if (a.isFunction(aT)) {
      return a.grep(aU, function (aW, aV) {
        var aX = !!aT.call(aW, aV, aW);
        return aX === aR;
      });
    } else {
      if (aT.nodeType) {
        return a.grep(aU, function (aW, aV) {
          return (aW === aT) === aR;
        });
      } else {
        if (typeof aT === "string") {
          var aS = a.grep(aU, function (aV) {
            return aV.nodeType === 1;
          });
          if (aO.test(aT)) {
            return a.filter(aT, aS, !aR);
          } else {
            aT = a.filter(aT, aS);
          }
        }
      }
    }
    return a.grep(aU, function (aW, aV) {
      return a.inArray(aW, aT) >= 0 === aR;
    });
  }
  var S = / jQuery\d+="(?:\d+|null)"/g,
    Y = /^\s+/,
    I =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    b = /<([\w:]+)/,
    q = /<tbody/i,
    L = /<|&#?\w+;/,
    E = /<(?:script|object|embed|option|style)/i,
    i = /checked\s*(?:[^=]|=\s*.checked.)/i,
    H = /\=([^="'>\s]+\/)>/g,
    ab = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    };
  ab.optgroup = ab.option;
  ab.tbody = ab.tfoot = ab.colgroup = ab.caption = ab.thead;
  ab.th = ab.td;
  if (!a.support.htmlSerialize) {
    ab._default = [1, "div<div>", "</div>"];
  }
  a.fn.extend({
    text: function (aR) {
      if (a.isFunction(aR)) {
        return this.each(function (aT) {
          var aS = a(this);
          aS.text(aR.call(this, aT, aS.text()));
        });
      }
      if (typeof aR !== "object" && aR !== A) {
        return this.empty().append(
          ((this[0] && this[0].ownerDocument) || aa).createTextNode(aR)
        );
      }
      return a.text(this);
    },
    wrapAll: function (aR) {
      if (a.isFunction(aR)) {
        return this.each(function (aT) {
          a(this).wrapAll(aR.call(this, aT));
        });
      }
      if (this[0]) {
        var aS = a(aR, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          aS.insertBefore(this[0]);
        }
        aS.map(function () {
          var aT = this;
          while (aT.firstChild && aT.firstChild.nodeType === 1) {
            aT = aT.firstChild;
          }
          return aT;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (aR) {
      if (a.isFunction(aR)) {
        return this.each(function (aS) {
          a(this).wrapInner(aR.call(this, aS));
        });
      }
      return this.each(function () {
        var aS = a(this),
          aT = aS.contents();
        if (aT.length) {
          aT.wrapAll(aR);
        } else {
          aS.append(aR);
        }
      });
    },
    wrap: function (aR) {
      return this.each(function () {
        a(this).wrapAll(aR);
      });
    },
    unwrap: function () {
      return this.parent()
        .each(function () {
          if (!a.nodeName(this, "body")) {
            a(this).replaceWith(this.childNodes);
          }
        })
        .end();
    },
    append: function () {
      return this.domManip(arguments, true, function (aR) {
        if (this.nodeType === 1) {
          this.appendChild(aR);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, true, function (aR) {
        if (this.nodeType === 1) {
          this.insertBefore(aR, this.firstChild);
        }
      });
    },
    before: function () {
      if (this[0] && this[0].parentNode) {
        return this.domManip(arguments, false, function (aS) {
          this.parentNode.insertBefore(aS, this);
        });
      } else {
        if (arguments.length) {
          var aR = a(arguments[0]);
          aR.push.apply(aR, this.toArray());
          return this.pushStack(aR, "before", arguments);
        }
      }
    },
    after: function () {
      if (this[0] && this[0].parentNode) {
        return this.domManip(arguments, false, function (aS) {
          this.parentNode.insertBefore(aS, this.nextSibling);
        });
      } else {
        if (arguments.length) {
          var aR = this.pushStack(this, "after", arguments);
          aR.push.apply(aR, a(arguments[0]).toArray());
          return aR;
        }
      }
    },
    remove: function (aR, aU) {
      for (var aS = 0, aT; (aT = this[aS]) != null; aS++) {
        if (!aR || a.filter(aR, [aT]).length) {
          if (!aU && aT.nodeType === 1) {
            a.cleanData(aT.getElementsByTagName("*"));
            a.cleanData([aT]);
          }
          if (aT.parentNode) {
            aT.parentNode.removeChild(aT);
          }
        }
      }
      return this;
    },
    empty: function () {
      for (var aR = 0, aS; (aS = this[aR]) != null; aR++) {
        if (aS.nodeType === 1) {
          a.cleanData(aS.getElementsByTagName("*"));
        }
        while (aS.firstChild) {
          aS.removeChild(aS.firstChild);
        }
      }
      return this;
    },
    clone: function (aS) {
      var aR = this.map(function () {
        if (!a.support.noCloneEvent && !a.isXMLDoc(this)) {
          var aU = this.outerHTML,
            aT = this.ownerDocument;
          if (!aU) {
            var aV = aT.createElement("div");
            aV.appendChild(this.cloneNode(true));
            aU = aV.innerHTML;
          }
          return a.clean(
            [aU.replace(S, "").replace(H, '="$1">').replace(Y, "")],
            aT
          )[0];
        } else {
          return this.cloneNode(true);
        }
      });
      if (aS === true) {
        m(this, aR);
        m(this.find("*"), aR.find("*"));
      }
      return aR;
    },
    html: function (aT) {
      if (aT === A) {
        return this[0] && this[0].nodeType === 1
          ? this[0].innerHTML.replace(S, "")
          : null;
      } else {
        if (
          typeof aT === "string" &&
          !E.test(aT) &&
          (a.support.leadingWhitespace || !Y.test(aT)) &&
          !ab[(b.exec(aT) || ["", ""])[1].toLowerCase()]
        ) {
          aT = aT.replace(I, "<$1></$2>");
          try {
            for (var aS = 0, aR = this.length; aS < aR; aS++) {
              if (this[aS].nodeType === 1) {
                a.cleanData(this[aS].getElementsByTagName("*"));
                this[aS].innerHTML = aT;
              }
            }
          } catch (aU) {
            this.empty().append(aT);
          }
        } else {
          if (a.isFunction(aT)) {
            this.each(function (aW) {
              var aV = a(this);
              aV.html(aT.call(this, aW, aV.html()));
            });
          } else {
            this.empty().append(aT);
          }
        }
      }
      return this;
    },
    replaceWith: function (aR) {
      if (this[0] && this[0].parentNode) {
        if (a.isFunction(aR)) {
          return this.each(function (aU) {
            var aT = a(this),
              aS = aT.html();
            aT.replaceWith(aR.call(this, aU, aS));
          });
        }
        if (typeof aR !== "string") {
          aR = a(aR).detach();
        }
        return this.each(function () {
          var aT = this.nextSibling,
            aS = this.parentNode;
          a(this).remove();
          if (aT) {
            a(aT).before(aR);
          } else {
            a(aS).append(aR);
          }
        });
      } else {
        return this.pushStack(
          a(a.isFunction(aR) ? aR() : aR),
          "replaceWith",
          aR
        );
      }
    },
    detach: function (aR) {
      return this.remove(aR, true);
    },
    domManip: function (aX, a1, a0) {
      var aU,
        aV,
        aW,
        aZ,
        aY = aX[0],
        aS = [];
      if (
        !a.support.checkClone &&
        arguments.length === 3 &&
        typeof aY === "string" &&
        i.test(aY)
      ) {
        return this.each(function () {
          a(this).domManip(aX, a1, a0, true);
        });
      }
      if (a.isFunction(aY)) {
        return this.each(function (a3) {
          var a2 = a(this);
          aX[0] = aY.call(this, a3, a1 ? a2.html() : A);
          a2.domManip(aX, a1, a0);
        });
      }
      if (this[0]) {
        aZ = aY && aY.parentNode;
        if (
          a.support.parentNode &&
          aZ &&
          aZ.nodeType === 11 &&
          aZ.childNodes.length === this.length
        ) {
          aU = { fragment: aZ };
        } else {
          aU = a.buildFragment(aX, this, aS);
        }
        aW = aU.fragment;
        if (aW.childNodes.length === 1) {
          aV = aW = aW.firstChild;
        } else {
          aV = aW.firstChild;
        }
        if (aV) {
          a1 = a1 && a.nodeName(aV, "tr");
          for (var aT = 0, aR = this.length; aT < aR; aT++) {
            a0.call(
              a1 ? aD(this[aT], aV) : this[aT],
              aT > 0 || aU.cacheable || this.length > 1
                ? aW.cloneNode(true)
                : aW
            );
          }
        }
        if (aS.length) {
          a.each(aS, aN);
        }
      }
      return this;
    },
  });
  function aD(aR, aS) {
    return a.nodeName(aR, "table")
      ? aR.getElementsByTagName("tbody")[0] ||
          aR.appendChild(aR.ownerDocument.createElement("tbody"))
      : aR;
  }
  function m(aT, aR) {
    var aS = 0;
    aR.each(function () {
      if (this.nodeName !== (aT[aS] && aT[aS].nodeName)) {
        return;
      }
      var aY = a.data(aT[aS++]),
        aX = a.data(this, aY),
        aU = aY && aY.events;
      if (aU) {
        delete aX.handle;
        aX.events = {};
        for (var aW in aU) {
          for (var aV in aU[aW]) {
            a.event.add(this, aW, aU[aW][aV], aU[aW][aV].data);
          }
        }
      }
    });
  }
  a.buildFragment = function (aW, aU, aS) {
    var aV,
      aR,
      aT,
      aX = aU && aU[0] ? aU[0].ownerDocument || aU[0] : aa;
    if (
      aW.length === 1 &&
      typeof aW[0] === "string" &&
      aW[0].length < 512 &&
      aX === aa &&
      !E.test(aW[0]) &&
      (a.support.checkClone || !i.test(aW[0]))
    ) {
      aR = true;
      aT = a.fragments[aW[0]];
      if (aT) {
        if (aT !== 1) {
          aV = aT;
        }
      }
    }
    if (!aV) {
      aV = aX.createDocumentFragment();
      a.clean(aW, aX, aV, aS);
    }
    if (aR) {
      a.fragments[aW[0]] = aT ? aV : 1;
    }
    return { fragment: aV, cacheable: aR };
  };
  a.fragments = {};
  a.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (aR, aS) {
      a.fn[aR] = function (aT) {
        var aW = [],
          aZ = a(aT),
          aY = this.length === 1 && this[0].parentNode;
        if (
          aY &&
          aY.nodeType === 11 &&
          aY.childNodes.length === 1 &&
          aZ.length === 1
        ) {
          aZ[aS](this[0]);
          return this;
        } else {
          for (var aX = 0, aU = aZ.length; aX < aU; aX++) {
            var aV = (aX > 0 ? this.clone(true) : this).get();
            a(aZ[aX])[aS](aV);
            aW = aW.concat(aV);
          }
          return this.pushStack(aW, aR, aZ.selector);
        }
      };
    }
  );
  a.extend({
    clean: function (aT, aV, a2, aX) {
      aV = aV || aa;
      if (typeof aV.createElement === "undefined") {
        aV = aV.ownerDocument || (aV[0] && aV[0].ownerDocument) || aa;
      }
      var a3 = [];
      for (var a1 = 0, aW; (aW = aT[a1]) != null; a1++) {
        if (typeof aW === "number") {
          aW += "";
        }
        if (!aW) {
          continue;
        }
        if (typeof aW === "string" && !L.test(aW)) {
          aW = aV.createTextNode(aW);
        } else {
          if (typeof aW === "string") {
            aW = aW.replace(I, "<$1></$2>");
            var a4 = (b.exec(aW) || ["", ""])[1].toLowerCase(),
              aU = ab[a4] || ab._default,
              a0 = aU[0],
              aS = aV.createElement("div");
            aS.innerHTML = aU[1] + aW + aU[2];
            while (a0--) {
              aS = aS.lastChild;
            }
            if (!a.support.tbody) {
              var aR = q.test(aW),
                aZ =
                  a4 === "table" && !aR
                    ? aS.firstChild && aS.firstChild.childNodes
                    : aU[1] === "<table>" && !aR
                    ? aS.childNodes
                    : [];
              for (var aY = aZ.length - 1; aY >= 0; --aY) {
                if (a.nodeName(aZ[aY], "tbody") && !aZ[aY].childNodes.length) {
                  aZ[aY].parentNode.removeChild(aZ[aY]);
                }
              }
            }
            if (!a.support.leadingWhitespace && Y.test(aW)) {
              aS.insertBefore(aV.createTextNode(Y.exec(aW)[0]), aS.firstChild);
            }
            aW = aS.childNodes;
          }
        }
        if (aW.nodeType) {
          a3.push(aW);
        } else {
          a3 = a.merge(a3, aW);
        }
      }
      if (a2) {
        for (a1 = 0; a3[a1]; a1++) {
          if (
            aX &&
            a.nodeName(a3[a1], "script") &&
            (!a3[a1].type || a3[a1].type.toLowerCase() === "text/javascript")
          ) {
            aX.push(
              a3[a1].parentNode ? a3[a1].parentNode.removeChild(a3[a1]) : a3[a1]
            );
          } else {
            if (a3[a1].nodeType === 1) {
              a3.splice.apply(
                a3,
                [a1 + 1, 0].concat(
                  a.makeArray(a3[a1].getElementsByTagName("script"))
                )
              );
            }
            a2.appendChild(a3[a1]);
          }
        }
      }
      return a3;
    },
    cleanData: function (aS) {
      var aV,
        aT,
        aR = a.cache,
        aY = a.event.special,
        aX = a.support.deleteExpando;
      for (var aW = 0, aU; (aU = aS[aW]) != null; aW++) {
        if (aU.nodeName && a.noData[aU.nodeName.toLowerCase()]) {
          continue;
        }
        aT = aU[a.expando];
        if (aT) {
          aV = aR[aT];
          if (aV && aV.events) {
            for (var aZ in aV.events) {
              if (aY[aZ]) {
                a.event.remove(aU, aZ);
              } else {
                a.removeEvent(aU, aZ, aV.handle);
              }
            }
          }
          if (aX) {
            delete aU[a.expando];
          } else {
            if (aU.removeAttribute) {
              aU.removeAttribute(a.expando);
            }
          }
          delete aR[aT];
        }
      }
    },
  });
  function aN(aR, aS) {
    if (aS.src) {
      a.ajax({ url: aS.src, async: false, dataType: "script" });
    } else {
      a.globalEval(aS.text || aS.textContent || aS.innerHTML || "");
    }
    if (aS.parentNode) {
      aS.parentNode.removeChild(aS);
    }
  }
  var T = /alpha\([^)]*\)/i,
    Z = /opacity=([^)]*)/,
    ar = /-([a-z])/gi,
    s = /([A-Z])/g,
    aF = /^-?\d+(?:px)?$/i,
    aM = /^-?\d/,
    aB = { position: "absolute", visibility: "hidden", display: "block" },
    V = ["Left", "Right"],
    ax = ["Top", "Bottom"],
    M,
    ah,
    aq,
    h = function (aR, aS) {
      return aS.toUpperCase();
    };
  a.fn.css = function (aR, aS) {
    if (arguments.length === 2 && aS === A) {
      return this;
    }
    return a.access(this, aR, aS, true, function (aU, aT, aV) {
      return aV !== A ? a.style(aU, aT, aV) : a.css(aU, aT);
    });
  };
  a.extend({
    cssHooks: {
      opacity: {
        get: function (aT, aS) {
          if (aS) {
            var aR = M(aT, "opacity", "opacity");
            return aR === "" ? "1" : aR;
          } else {
            return aT.style.opacity;
          }
        },
      },
    },
    cssNumber: {
      zIndex: true,
      fontWeight: true,
      opacity: true,
      zoom: true,
      lineHeight: true,
    },
    cssProps: { float: a.support.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (aT, aS, aY, aU) {
      if (!aT || aT.nodeType === 3 || aT.nodeType === 8 || !aT.style) {
        return;
      }
      var aX,
        aV = a.camelCase(aS),
        aR = aT.style,
        aZ = a.cssHooks[aV];
      aS = a.cssProps[aV] || aV;
      if (aY !== A) {
        if ((typeof aY === "number" && isNaN(aY)) || aY == null) {
          return;
        }
        if (typeof aY === "number" && !a.cssNumber[aV]) {
          aY += "px";
        }
        if (!aZ || !("set" in aZ) || (aY = aZ.set(aT, aY)) !== A) {
          try {
            aR[aS] = aY;
          } catch (aW) {}
        }
      } else {
        if (aZ && "get" in aZ && (aX = aZ.get(aT, false, aU)) !== A) {
          return aX;
        }
        return aR[aS];
      }
    },
    css: function (aW, aV, aS) {
      var aU,
        aT = a.camelCase(aV),
        aR = a.cssHooks[aT];
      aV = a.cssProps[aT] || aT;
      if (aR && "get" in aR && (aU = aR.get(aW, true, aS)) !== A) {
        return aU;
      } else {
        if (M) {
          return M(aW, aV, aT);
        }
      }
    },
    swap: function (aU, aT, aV) {
      var aR = {};
      for (var aS in aT) {
        aR[aS] = aU.style[aS];
        aU.style[aS] = aT[aS];
      }
      aV.call(aU);
      for (aS in aT) {
        aU.style[aS] = aR[aS];
      }
    },
    camelCase: function (aR) {
      return aR.replace(ar, h);
    },
  });
  a.curCSS = a.css;
  a.each(["height", "width"], function (aS, aR) {
    a.cssHooks[aR] = {
      get: function (aV, aU, aT) {
        var aW;
        if (aU) {
          if (aV.offsetWidth !== 0) {
            aW = k(aV, aR, aT);
          } else {
            a.swap(aV, aB, function () {
              aW = k(aV, aR, aT);
            });
          }
          if (aW <= 0) {
            aW = M(aV, aR, aR);
            if (aW === "0px" && aq) {
              aW = aq(aV, aR, aR);
            }
            if (aW != null) {
              return aW === "" || aW === "auto" ? "0px" : aW;
            }
          }
          if (aW < 0 || aW == null) {
            aW = aV.style[aR];
            return aW === "" || aW === "auto" ? "0px" : aW;
          }
          return typeof aW === "string" ? aW : aW + "px";
        }
      },
      set: function (aT, aU) {
        if (aF.test(aU)) {
          aU = parseFloat(aU);
          if (aU >= 0) {
            return aU + "px";
          }
        } else {
          return aU;
        }
      },
    };
  });
  if (!a.support.opacity) {
    a.cssHooks.opacity = {
      get: function (aS, aR) {
        return Z.test(
          (aR && aS.currentStyle ? aS.currentStyle.filter : aS.style.filter) ||
            ""
        )
          ? parseFloat(RegExp.$1) / 100 + ""
          : aR
          ? "1"
          : "";
      },
      set: function (aU, aV) {
        var aT = aU.style;
        aT.zoom = 1;
        var aR = a.isNaN(aV) ? "" : "alpha(opacity=" + aV * 100 + ")",
          aS = aT.filter || "";
        aT.filter = T.test(aS) ? aS.replace(T, aR) : aT.filter + " " + aR;
      },
    };
  }
  if (aa.defaultView && aa.defaultView.getComputedStyle) {
    ah = function (aW, aR, aU) {
      var aT, aV, aS;
      aU = aU.replace(s, "-$1").toLowerCase();
      if (!(aV = aW.ownerDocument.defaultView)) {
        return A;
      }
      if ((aS = aV.getComputedStyle(aW, null))) {
        aT = aS.getPropertyValue(aU);
        if (aT === "" && !a.contains(aW.ownerDocument.documentElement, aW)) {
          aT = a.style(aW, aU);
        }
      }
      return aT;
    };
  }
  if (aa.documentElement.currentStyle) {
    aq = function (aV, aT) {
      var aW,
        aR,
        aS = aV.currentStyle && aV.currentStyle[aT],
        aU = aV.style;
      if (!aF.test(aS) && aM.test(aS)) {
        aW = aU.left;
        aR = aV.runtimeStyle.left;
        aV.runtimeStyle.left = aV.currentStyle.left;
        aU.left = aT === "fontSize" ? "1em" : aS || 0;
        aS = aU.pixelLeft + "px";
        aU.left = aW;
        aV.runtimeStyle.left = aR;
      }
      return aS === "" ? "auto" : aS;
    };
  }
  M = ah || aq;
  function k(aT, aS, aR) {
    var aV = aS === "width" ? V : ax,
      aU = aS === "width" ? aT.offsetWidth : aT.offsetHeight;
    if (aR === "border") {
      return aU;
    }
    a.each(aV, function () {
      if (!aR) {
        aU -= parseFloat(a.css(aT, "padding" + this)) || 0;
      }
      if (aR === "margin") {
        aU += parseFloat(a.css(aT, "margin" + this)) || 0;
      } else {
        aU -= parseFloat(a.css(aT, "border" + this + "Width")) || 0;
      }
    });
    return aU;
  }
  if (a.expr && a.expr.filters) {
    a.expr.filters.hidden = function (aT) {
      var aS = aT.offsetWidth,
        aR = aT.offsetHeight;
      return (
        (aS === 0 && aR === 0) ||
        (!a.support.reliableHiddenOffsets &&
          (aT.style.display || a.css(aT, "display")) === "none")
      );
    };
    a.expr.filters.visible = function (aR) {
      return !a.expr.filters.hidden(aR);
    };
  }
  var ad = a.now(),
    aA = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    l = /^(?:select|textarea)/i,
    au =
      /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    ak = /^(?:GET|HEAD)$/,
    W = /\[\]$/,
    n = /\=\?(&|$)/,
    B = /\?/,
    aQ = /([?&])_=[^&]*/,
    z = /^(\w+:)?\/\/([^\/?#]+)/,
    e = /%20/g,
    aP = /#.*$/,
    t = a.fn.load;
  a.fn.extend({
    load: function (aT, aW, aX) {
      if (typeof aT !== "string" && t) {
        return t.apply(this, arguments);
      } else {
        if (!this.length) {
          return this;
        }
      }
      var aV = aT.indexOf(" ");
      if (aV >= 0) {
        var aR = aT.slice(aV, aT.length);
        aT = aT.slice(0, aV);
      }
      var aU = "GET";
      if (aW) {
        if (a.isFunction(aW)) {
          aX = aW;
          aW = null;
        } else {
          if (typeof aW === "object") {
            aW = a.param(aW, a.ajaxSettings.traditional);
            aU = "POST";
          }
        }
      }
      var aS = this;
      a.ajax({
        url: aT,
        type: aU,
        dataType: "html",
        data: aW,
        complete: function (aZ, aY) {
          if (aY === "success" || aY === "notmodified") {
            aS.html(
              aR
                ? a("<div>").append(aZ.responseText.replace(aA, "")).find(aR)
                : aZ.responseText
            );
          }
          if (aX) {
            aS.each(aX, [aZ.responseText, aY, aZ]);
          }
        },
      });
      return this;
    },
    serialize: function () {
      return a.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? a.makeArray(this.elements) : this;
      })
        .filter(function () {
          return (
            this.name &&
            !this.disabled &&
            (this.checked || l.test(this.nodeName) || au.test(this.type))
          );
        })
        .map(function (aR, aS) {
          var aT = a(this).val();
          return aT == null
            ? null
            : a.isArray(aT)
            ? a.map(aT, function (aV, aU) {
                return { name: aS.name, value: aV };
              })
            : { name: aS.name, value: aT };
        })
        .get();
    },
  });
  a.each(
    "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function (aR, aS) {
      a.fn[aS] = function (aT) {
        return this.bind(aS, aT);
      };
    }
  );
  a.extend({
    get: function (aR, aT, aU, aS) {
      if (a.isFunction(aT)) {
        aS = aS || aU;
        aU = aT;
        aT = null;
      }
      return a.ajax({
        type: "GET",
        url: aR,
        data: aT,
        success: aU,
        dataType: aS,
      });
    },
    getScript: function (aR, aS) {
      return a.get(aR, null, aS, "script");
    },
    getJSON: function (aR, aS, aT) {
      return a.get(aR, aS, aT, "json");
    },
    post: function (aR, aT, aU, aS) {
      if (a.isFunction(aT)) {
        aS = aS || aU;
        aU = aT;
        aT = {};
      }
      return a.ajax({
        type: "POST",
        url: aR,
        data: aT,
        success: aU,
        dataType: aS,
      });
    },
    ajaxSetup: function (aR) {
      a.extend(a.ajaxSettings, aR);
    },
    ajaxSettings: {
      url: location.href,
      global: true,
      type: "GET",
      contentType: "application/x-www-form-urlencoded",
      processData: true,
      async: true,
      xhr: function () {
        return new aE.XMLHttpRequest();
      },
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        script: "text/javascript, application/javascript",
        json: "application/json, text/javascript",
        text: "text/plain",
        _default: "*/*",
      },
    },
    ajax: function (a8) {
      var a1 = a.extend(true, {}, a.ajaxSettings, a8),
        bc,
        a7,
        bb,
        aT = a1.type.toUpperCase(),
        a4 = ak.test(aT);
      a1.url = a1.url.replace(aP, "");
      a1.context = a8 && a8.context != null ? a8.context : a1;
      if (a1.data && a1.processData && typeof a1.data !== "string") {
        a1.data = a.param(a1.data, a1.traditional);
      }
      if (a1.dataType === "jsonp") {
        if (aT === "GET") {
          if (!n.test(a1.url)) {
            a1.url +=
              (B.test(a1.url) ? "&" : "?") + (a1.jsonp || "callback") + "=?";
          }
        } else {
          if (!a1.data || !n.test(a1.data)) {
            a1.data =
              (a1.data ? a1.data + "&" : "") + (a1.jsonp || "callback") + "=?";
          }
        }
        a1.dataType = "json";
      }
      if (
        a1.dataType === "json" &&
        ((a1.data && n.test(a1.data)) || n.test(a1.url))
      ) {
        bc = a1.jsonpCallback || "jsonp" + ad++;
        if (a1.data) {
          a1.data = (a1.data + "").replace(n, "=" + bc + "$1");
        }
        a1.url = a1.url.replace(n, "=" + bc + "$1");
        a1.dataType = "script";
        var a5 = aE[bc];
        aE[bc] = function (be) {
          if (a.isFunction(a5)) {
            a5(be);
          } else {
            aE[bc] = A;
            try {
              delete aE[bc];
            } catch (bd) {}
          }
          bb = be;
          a.handleSuccess(a1, aX, a7, bb);
          a.handleComplete(a1, aX, a7, bb);
          if (aU) {
            aU.removeChild(a9);
          }
        };
      }
      if (a1.dataType === "script" && a1.cache === null) {
        a1.cache = false;
      }
      if (a1.cache === false && a4) {
        var aR = a.now();
        var ba = a1.url.replace(aQ, "$1_=" + aR);
        a1.url =
          ba + (ba === a1.url ? (B.test(a1.url) ? "&" : "?") + "_=" + aR : "");
      }
      if (a1.data && a4) {
        a1.url += (B.test(a1.url) ? "&" : "?") + a1.data;
      }
      if (a1.global && a.active++ === 0) {
        a.event.trigger("ajaxStart");
      }
      var a6 = z.exec(a1.url),
        aV =
          a6 &&
          ((a6[1] && a6[1].toLowerCase() !== location.protocol) ||
            a6[2].toLowerCase() !== location.host);
      if (a1.dataType === "script" && aT === "GET" && aV) {
        var aU = aa.getElementsByTagName("head")[0] || aa.documentElement;
        var a9 = aa.createElement("script");
        if (a1.scriptCharset) {
          a9.charset = a1.scriptCharset;
        }
        a9.src = a1.url;
        if (!bc) {
          var a2 = false;
          a9.onload = a9.onreadystatechange = function () {
            if (
              !a2 &&
              (!this.readyState ||
                this.readyState === "loaded" ||
                this.readyState === "complete")
            ) {
              a2 = true;
              a.handleSuccess(a1, aX, a7, bb);
              a.handleComplete(a1, aX, a7, bb);
              a9.onload = a9.onreadystatechange = null;
              if (aU && a9.parentNode) {
                aU.removeChild(a9);
              }
            }
          };
        }
        aU.insertBefore(a9, aU.firstChild);
        return A;
      }
      var aZ = false;
      var aX = a1.xhr();
      if (!aX) {
        return;
      }
      if (a1.username) {
        aX.open(aT, a1.url, a1.async, a1.username, a1.password);
      } else {
        aX.open(aT, a1.url, a1.async);
      }
      try {
        if ((a1.data != null && !a4) || (a8 && a8.contentType)) {
          aX.setRequestHeader("Content-Type", a1.contentType);
        }
        if (a1.ifModified) {
          if (a.lastModified[a1.url]) {
            aX.setRequestHeader("If-Modified-Since", a.lastModified[a1.url]);
          }
          if (a.etag[a1.url]) {
            aX.setRequestHeader("If-None-Match", a.etag[a1.url]);
          }
        }
        if (!aV) {
          aX.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        }
        aX.setRequestHeader(
          "Accept",
          a1.dataType && a1.accepts[a1.dataType]
            ? a1.accepts[a1.dataType] + ", */*; q=0.01"
            : a1.accepts._default
        );
      } catch (aY) {}
      if (a1.beforeSend && a1.beforeSend.call(a1.context, aX, a1) === false) {
        if (a1.global && a.active-- === 1) {
          a.event.trigger("ajaxStop");
        }
        aX.abort();
        return false;
      }
      if (a1.global) {
        a.triggerGlobal(a1, "ajaxSend", [aX, a1]);
      }
      var a0 = (aX.onreadystatechange = function (bd) {
        if (!aX || aX.readyState === 0 || bd === "abort") {
          if (!aZ) {
            a.handleComplete(a1, aX, a7, bb);
          }
          aZ = true;
          if (aX) {
            aX.onreadystatechange = a.noop;
          }
        } else {
          if (!aZ && aX && (aX.readyState === 4 || bd === "timeout")) {
            aZ = true;
            aX.onreadystatechange = a.noop;
            a7 =
              bd === "timeout"
                ? "timeout"
                : !a.httpSuccess(aX)
                ? "error"
                : a1.ifModified && a.httpNotModified(aX, a1.url)
                ? "notmodified"
                : "success";
            var be;
            if (a7 === "success") {
              try {
                bb = a.httpData(aX, a1.dataType, a1);
              } catch (bf) {
                a7 = "parsererror";
                be = bf;
              }
            }
            if (a7 === "success" || a7 === "notmodified") {
              if (!bc) {
                a.handleSuccess(a1, aX, a7, bb);
              }
            } else {
              a.handleError(a1, aX, a7, be);
            }
            if (!bc) {
              a.handleComplete(a1, aX, a7, bb);
            }
            if (bd === "timeout") {
              aX.abort();
            }
            if (a1.async) {
              aX = null;
            }
          }
        }
      });
      try {
        var aS = aX.abort;
        aX.abort = function () {
          if (aX) {
            Function.prototype.call.call(aS, aX);
          }
          a0("abort");
        };
      } catch (a3) {}
      if (a1.async && a1.timeout > 0) {
        setTimeout(function () {
          if (aX && !aZ) {
            a0("timeout");
          }
        }, a1.timeout);
      }
      try {
        aX.send(a4 || a1.data == null ? null : a1.data);
      } catch (aW) {
        a.handleError(a1, aX, null, aW);
        a.handleComplete(a1, aX, a7, bb);
      }
      if (!a1.async) {
        a0();
      }
      return aX;
    },
    param: function (aR, aT) {
      var aS = [],
        aV = function (aW, aX) {
          aX = a.isFunction(aX) ? aX() : aX;
          aS[aS.length] = encodeURIComponent(aW) + "=" + encodeURIComponent(aX);
        };
      if (aT === A) {
        aT = a.ajaxSettings.traditional;
      }
      if (a.isArray(aR) || aR.jquery) {
        a.each(aR, function () {
          aV(this.name, this.value);
        });
      } else {
        for (var aU in aR) {
          o(aU, aR[aU], aT, aV);
        }
      }
      return aS.join("&").replace(e, "+");
    },
  });
  function o(aS, aU, aR, aT) {
    if (a.isArray(aU) && aU.length) {
      a.each(aU, function (aW, aV) {
        if (aR || W.test(aS)) {
          aT(aS, aV);
        } else {
          o(
            aS +
              "[" +
              (typeof aV === "object" || a.isArray(aV) ? aW : "") +
              "]",
            aV,
            aR,
            aT
          );
        }
      });
    } else {
      if (!aR && aU != null && typeof aU === "object") {
        if (a.isEmptyObject(aU)) {
          aT(aS, "");
        } else {
          a.each(aU, function (aW, aV) {
            o(aS + "[" + aW + "]", aV, aR, aT);
          });
        }
      } else {
        aT(aS, aU);
      }
    }
  }
  a.extend({
    active: 0,
    lastModified: {},
    etag: {},
    handleError: function (aS, aU, aR, aT) {
      if (aS.error) {
        aS.error.call(aS.context, aU, aR, aT);
      }
      if (aS.global) {
        a.triggerGlobal(aS, "ajaxError", [aU, aS, aT]);
      }
    },
    handleSuccess: function (aS, aU, aR, aT) {
      if (aS.success) {
        aS.success.call(aS.context, aT, aR, aU);
      }
      if (aS.global) {
        a.triggerGlobal(aS, "ajaxSuccess", [aU, aS]);
      }
    },
    handleComplete: function (aS, aT, aR) {
      if (aS.complete) {
        aS.complete.call(aS.context, aT, aR);
      }
      if (aS.global) {
        a.triggerGlobal(aS, "ajaxComplete", [aT, aS]);
      }
      if (aS.global && a.active-- === 1) {
        a.event.trigger("ajaxStop");
      }
    },
    triggerGlobal: function (aT, aS, aR) {
      (aT.context && aT.context.url == null ? a(aT.context) : a.event).trigger(
        aS,
        aR
      );
    },
    httpSuccess: function (aS) {
      try {
        return (
          (!aS.status && location.protocol === "file:") ||
          (aS.status >= 200 && aS.status < 300) ||
          aS.status === 304 ||
          aS.status === 1223
        );
      } catch (aR) {}
      return false;
    },
    httpNotModified: function (aU, aR) {
      var aT = aU.getResponseHeader("Last-Modified"),
        aS = aU.getResponseHeader("Etag");
      if (aT) {
        a.lastModified[aR] = aT;
      }
      if (aS) {
        a.etag[aR] = aS;
      }
      return aU.status === 304;
    },
    httpData: function (aW, aU, aT) {
      var aS = aW.getResponseHeader("content-type") || "",
        aR = aU === "xml" || (!aU && aS.indexOf("xml") >= 0),
        aV = aR ? aW.responseXML : aW.responseText;
      if (aR && aV.documentElement.nodeName === "parsererror") {
        a.error("parsererror");
      }
      if (aT && aT.dataFilter) {
        aV = aT.dataFilter(aV, aU);
      }
      if (typeof aV === "string") {
        if (aU === "json" || (!aU && aS.indexOf("json") >= 0)) {
          aV = a.parseJSON(aV);
        } else {
          if (aU === "script" || (!aU && aS.indexOf("javascript") >= 0)) {
            a.globalEval(aV);
          }
        }
      }
      return aV;
    },
  });
  if (aE.ActiveXObject) {
    a.ajaxSettings.xhr = function () {
      if (aE.location.protocol !== "file:") {
        try {
          return new aE.XMLHttpRequest();
        } catch (aS) {}
      }
      try {
        return new aE.ActiveXObject("Microsoft.XMLHTTP");
      } catch (aR) {}
    };
  }
  a.support.ajax = !!a.ajaxSettings.xhr();
  var G = {},
    ac = /^(?:toggle|show|hide)$/,
    am = /^([+\-]=)?([\d+.\-]+)(.*)$/,
    ay,
    ag = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"],
    ];
  a.fn.extend({
    show: function (aU, aX, aW) {
      var aT, aV;
      if (aU || aU === 0) {
        return this.animate(aw("show", 3), aU, aX, aW);
      } else {
        for (var aS = 0, aR = this.length; aS < aR; aS++) {
          aT = this[aS];
          aV = aT.style.display;
          if (!a.data(aT, "olddisplay") && aV === "none") {
            aV = aT.style.display = "";
          }
          if (aV === "" && a.css(aT, "display") === "none") {
            a.data(aT, "olddisplay", r(aT.nodeName));
          }
        }
        for (aS = 0; aS < aR; aS++) {
          aT = this[aS];
          aV = aT.style.display;
          if (aV === "" || aV === "none") {
            aT.style.display = a.data(aT, "olddisplay") || "";
          }
        }
        return this;
      }
    },
    hide: function (aT, aW, aV) {
      if (aT || aT === 0) {
        return this.animate(aw("hide", 3), aT, aW, aV);
      } else {
        for (var aS = 0, aR = this.length; aS < aR; aS++) {
          var aU = a.css(this[aS], "display");
          if (aU !== "none") {
            a.data(this[aS], "olddisplay", aU);
          }
        }
        for (aS = 0; aS < aR; aS++) {
          this[aS].style.display = "none";
        }
        return this;
      }
    },
    _toggle: a.fn.toggle,
    toggle: function (aT, aS, aU) {
      var aR = typeof aT === "boolean";
      if (a.isFunction(aT) && a.isFunction(aS)) {
        this._toggle.apply(this, arguments);
      } else {
        if (aT == null || aR) {
          this.each(function () {
            var aV = aR ? aT : a(this).is(":hidden");
            a(this)[aV ? "show" : "hide"]();
          });
        } else {
          this.animate(aw("toggle", 3), aT, aS, aU);
        }
      }
      return this;
    },
    fadeTo: function (aR, aU, aT, aS) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: aU }, aR, aT, aS);
    },
    animate: function (aV, aS, aU, aT) {
      var aR = a.speed(aS, aU, aT);
      if (a.isEmptyObject(aV)) {
        return this.each(aR.complete);
      }
      return this[aR.queue === false ? "each" : "queue"](function () {
        var aY = a.extend({}, aR),
          a2,
          aZ = this.nodeType === 1,
          a0 = aZ && a(this).is(":hidden"),
          aW = this;
        for (a2 in aV) {
          var aX = a.camelCase(a2);
          if (a2 !== aX) {
            aV[aX] = aV[a2];
            delete aV[a2];
            a2 = aX;
          }
          if ((aV[a2] === "hide" && a0) || (aV[a2] === "show" && !a0)) {
            return aY.complete.call(this);
          }
          if (aZ && (a2 === "height" || a2 === "width")) {
            aY.overflow = [
              this.style.overflow,
              this.style.overflowX,
              this.style.overflowY,
            ];
            if (
              a.css(this, "display") === "inline" &&
              a.css(this, "float") === "none"
            ) {
              if (!a.support.inlineBlockNeedsLayout) {
                this.style.display = "inline-block";
              } else {
                var a1 = r(this.nodeName);
                if (a1 === "inline") {
                  this.style.display = "inline-block";
                } else {
                  this.style.display = "inline";
                  this.style.zoom = 1;
                }
              }
            }
          }
          if (a.isArray(aV[a2])) {
            (aY.specialEasing = aY.specialEasing || {})[a2] = aV[a2][1];
            aV[a2] = aV[a2][0];
          }
        }
        if (aY.overflow != null) {
          this.style.overflow = "hidden";
        }
        aY.curAnim = a.extend({}, aV);
        a.each(aV, function (a4, a8) {
          var a7 = new a.fx(aW, aY, a4);
          if (ac.test(a8)) {
            a7[a8 === "toggle" ? (a0 ? "show" : "hide") : a8](aV);
          } else {
            var a6 = am.exec(a8),
              a9 = a7.cur() || 0;
            if (a6) {
              var a3 = parseFloat(a6[2]),
                a5 = a6[3] || "px";
              if (a5 !== "px") {
                a.style(aW, a4, (a3 || 1) + a5);
                a9 = ((a3 || 1) / a7.cur()) * a9;
                a.style(aW, a4, a9 + a5);
              }
              if (a6[1]) {
                a3 = (a6[1] === "-=" ? -1 : 1) * a3 + a9;
              }
              a7.custom(a9, a3, a5);
            } else {
              a7.custom(a9, a8, "");
            }
          }
        });
        return true;
      });
    },
    stop: function (aS, aR) {
      var aT = a.timers;
      if (aS) {
        this.queue([]);
      }
      this.each(function () {
        for (var aU = aT.length - 1; aU >= 0; aU--) {
          if (aT[aU].elem === this) {
            if (aR) {
              aT[aU](true);
            }
            aT.splice(aU, 1);
          }
        }
      });
      if (!aR) {
        this.dequeue();
      }
      return this;
    },
  });
  function aw(aS, aR) {
    var aT = {};
    a.each(ag.concat.apply([], ag.slice(0, aR)), function () {
      aT[this] = aS;
    });
    return aT;
  }
  a.each(
    {
      slideDown: aw("show", 1),
      slideUp: aw("hide", 1),
      slideToggle: aw("toggle", 1),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" },
    },
    function (aR, aS) {
      a.fn[aR] = function (aT, aV, aU) {
        return this.animate(aS, aT, aV, aU);
      };
    }
  );
  a.extend({
    speed: function (aT, aU, aS) {
      var aR =
        aT && typeof aT === "object"
          ? a.extend({}, aT)
          : {
              complete: aS || (!aS && aU) || (a.isFunction(aT) && aT),
              duration: aT,
              easing: (aS && aU) || (aU && !a.isFunction(aU) && aU),
            };
      aR.duration = a.fx.off
        ? 0
        : typeof aR.duration === "number"
        ? aR.duration
        : aR.duration in a.fx.speeds
        ? a.fx.speeds[aR.duration]
        : a.fx.speeds._default;
      aR.old = aR.complete;
      aR.complete = function () {
        if (aR.queue !== false) {
          a(this).dequeue();
        }
        if (a.isFunction(aR.old)) {
          aR.old.call(this);
        }
      };
      return aR;
    },
    easing: {
      linear: function (aT, aU, aR, aS) {
        return aR + aS * aT;
      },
      swing: function (aT, aU, aR, aS) {
        return (-Math.cos(aT * Math.PI) / 2 + 0.5) * aS + aR;
      },
    },
    timers: [],
    fx: function (aS, aR, aT) {
      this.options = aR;
      this.elem = aS;
      this.prop = aT;
      if (!aR.orig) {
        aR.orig = {};
      }
    },
  });
  a.fx.prototype = {
    update: function () {
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      (a.fx.step[this.prop] || a.fx.step._default)(this);
    },
    cur: function () {
      if (
        this.elem[this.prop] != null &&
        (!this.elem.style || this.elem.style[this.prop] == null)
      ) {
        return this.elem[this.prop];
      }
      var aR = parseFloat(a.css(this.elem, this.prop));
      return aR && aR > -10000 ? aR : 0;
    },
    custom: function (aW, aV, aU) {
      var aR = this,
        aT = a.fx;
      this.startTime = a.now();
      this.start = aW;
      this.end = aV;
      this.unit = aU || this.unit || "px";
      this.now = this.start;
      this.pos = this.state = 0;
      function aS(aX) {
        return aR.step(aX);
      }
      aS.elem = this.elem;
      if (aS() && a.timers.push(aS) && !ay) {
        ay = setInterval(aT.tick, aT.interval);
      }
    },
    show: function () {
      this.options.orig[this.prop] = a.style(this.elem, this.prop);
      this.options.show = true;
      this.custom(
        this.prop === "width" || this.prop === "height" ? 1 : 0,
        this.cur()
      );
      a(this.elem).show();
    },
    hide: function () {
      this.options.orig[this.prop] = a.style(this.elem, this.prop);
      this.options.hide = true;
      this.custom(this.cur(), 0);
    },
    step: function (aU) {
      var aZ = a.now(),
        aV = true;
      if (aU || aZ >= this.options.duration + this.startTime) {
        this.now = this.end;
        this.pos = this.state = 1;
        this.update();
        this.options.curAnim[this.prop] = true;
        for (var aW in this.options.curAnim) {
          if (this.options.curAnim[aW] !== true) {
            aV = false;
          }
        }
        if (aV) {
          if (this.options.overflow != null && !a.support.shrinkWrapBlocks) {
            var aT = this.elem,
              a0 = this.options;
            a.each(["", "X", "Y"], function (a1, a2) {
              aT.style["overflow" + a2] = a0.overflow[a1];
            });
          }
          if (this.options.hide) {
            a(this.elem).hide();
          }
          if (this.options.hide || this.options.show) {
            for (var aR in this.options.curAnim) {
              a.style(this.elem, aR, this.options.orig[aR]);
            }
          }
          this.options.complete.call(this.elem);
        }
        return false;
      } else {
        var aS = aZ - this.startTime;
        this.state = aS / this.options.duration;
        var aX =
          this.options.specialEasing && this.options.specialEasing[this.prop];
        var aY = this.options.easing || (a.easing.swing ? "swing" : "linear");
        this.pos = a.easing[aX || aY](
          this.state,
          aS,
          0,
          1,
          this.options.duration
        );
        this.now = this.start + (this.end - this.start) * this.pos;
        this.update();
      }
      return true;
    },
  };
  a.extend(a.fx, {
    tick: function () {
      var aS = a.timers;
      for (var aR = 0; aR < aS.length; aR++) {
        if (!aS[aR]()) {
          aS.splice(aR--, 1);
        }
      }
      if (!aS.length) {
        a.fx.stop();
      }
    },
    interval: 13,
    stop: function () {
      clearInterval(ay);
      ay = null;
    },
    speeds: { slow: 600, fast: 200, _default: 400 },
    step: {
      opacity: function (aR) {
        a.style(aR.elem, "opacity", aR.now);
      },
      _default: function (aR) {
        if (aR.elem.style && aR.elem.style[aR.prop] != null) {
          aR.elem.style[aR.prop] =
            (aR.prop === "width" || aR.prop === "height"
              ? Math.max(0, aR.now)
              : aR.now) + aR.unit;
        } else {
          aR.elem[aR.prop] = aR.now;
        }
      },
    },
  });
  if (a.expr && a.expr.filters) {
    a.expr.filters.animated = function (aR) {
      return a.grep(a.timers, function (aS) {
        return aR === aS.elem;
      }).length;
    };
  }
  function r(aT) {
    if (!G[aT]) {
      var aR = a("<" + aT + ">").appendTo("body"),
        aS = aR.css("display");
      aR.remove();
      if (aS === "none" || aS === "") {
        aS = "block";
      }
      G[aT] = aS;
    }
    return G[aT];
  }
  var K = /^t(?:able|d|h)$/i,
    P = /^(?:body|html)$/i;
  if ("getBoundingClientRect" in aa.documentElement) {
    a.fn.offset = function (a4) {
      var aU = this[0],
        aX;
      if (a4) {
        return this.each(function (a5) {
          a.offset.setOffset(this, a4, a5);
        });
      }
      if (!aU || !aU.ownerDocument) {
        return null;
      }
      if (aU === aU.ownerDocument.body) {
        return a.offset.bodyOffset(aU);
      }
      try {
        aX = aU.getBoundingClientRect();
      } catch (a1) {}
      var a3 = aU.ownerDocument,
        aS = a3.documentElement;
      if (!aX || !a.contains(aS, aU)) {
        return aX || { top: 0, left: 0 };
      }
      var aY = a3.body,
        aZ = ai(a3),
        aW = aS.clientTop || aY.clientTop || 0,
        a0 = aS.clientLeft || aY.clientLeft || 0,
        aR =
          aZ.pageYOffset ||
          (a.support.boxModel && aS.scrollTop) ||
          aY.scrollTop,
        aV =
          aZ.pageXOffset ||
          (a.support.boxModel && aS.scrollLeft) ||
          aY.scrollLeft,
        a2 = aX.top + aR - aW,
        aT = aX.left + aV - a0;
      return { top: a2, left: aT };
    };
  } else {
    a.fn.offset = function (a2) {
      var aW = this[0];
      if (a2) {
        return this.each(function (a3) {
          a.offset.setOffset(this, a2, a3);
        });
      }
      if (!aW || !aW.ownerDocument) {
        return null;
      }
      if (aW === aW.ownerDocument.body) {
        return a.offset.bodyOffset(aW);
      }
      a.offset.initialize();
      var aZ,
        aT = aW.offsetParent,
        aS = aW,
        a1 = aW.ownerDocument,
        aU = a1.documentElement,
        aX = a1.body,
        aY = a1.defaultView,
        aR = aY ? aY.getComputedStyle(aW, null) : aW.currentStyle,
        a0 = aW.offsetTop,
        aV = aW.offsetLeft;
      while ((aW = aW.parentNode) && aW !== aX && aW !== aU) {
        if (a.offset.supportsFixedPosition && aR.position === "fixed") {
          break;
        }
        aZ = aY ? aY.getComputedStyle(aW, null) : aW.currentStyle;
        a0 -= aW.scrollTop;
        aV -= aW.scrollLeft;
        if (aW === aT) {
          a0 += aW.offsetTop;
          aV += aW.offsetLeft;
          if (
            a.offset.doesNotAddBorder &&
            !(a.offset.doesAddBorderForTableAndCells && K.test(aW.nodeName))
          ) {
            a0 += parseFloat(aZ.borderTopWidth) || 0;
            aV += parseFloat(aZ.borderLeftWidth) || 0;
          }
          aS = aT;
          aT = aW.offsetParent;
        }
        if (
          a.offset.subtractsBorderForOverflowNotVisible &&
          aZ.overflow !== "visible"
        ) {
          a0 += parseFloat(aZ.borderTopWidth) || 0;
          aV += parseFloat(aZ.borderLeftWidth) || 0;
        }
        aR = aZ;
      }
      if (aR.position === "relative" || aR.position === "static") {
        a0 += aX.offsetTop;
        aV += aX.offsetLeft;
      }
      if (a.offset.supportsFixedPosition && aR.position === "fixed") {
        a0 += Math.max(aU.scrollTop, aX.scrollTop);
        aV += Math.max(aU.scrollLeft, aX.scrollLeft);
      }
      return { top: a0, left: aV };
    };
  }
  a.offset = {
    initialize: function () {
      var aR = aa.body,
        aS = aa.createElement("div"),
        aV,
        aX,
        aW,
        aY,
        aT = parseFloat(a.css(aR, "marginTop")) || 0,
        aU =
          "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
      a.extend(aS.style, {
        position: "absolute",
        top: 0,
        left: 0,
        margin: 0,
        border: 0,
        width: "1px",
        height: "1px",
        visibility: "hidden",
      });
      aS.innerHTML = aU;
      aR.insertBefore(aS, aR.firstChild);
      aV = aS.firstChild;
      aX = aV.firstChild;
      aY = aV.nextSibling.firstChild.firstChild;
      this.doesNotAddBorder = aX.offsetTop !== 5;
      this.doesAddBorderForTableAndCells = aY.offsetTop === 5;
      aX.style.position = "fixed";
      aX.style.top = "20px";
      this.supportsFixedPosition = aX.offsetTop === 20 || aX.offsetTop === 15;
      aX.style.position = aX.style.top = "";
      aV.style.overflow = "hidden";
      aV.style.position = "relative";
      this.subtractsBorderForOverflowNotVisible = aX.offsetTop === -5;
      this.doesNotIncludeMarginInBodyOffset = aR.offsetTop !== aT;
      aR.removeChild(aS);
      aR = aS = aV = aX = aW = aY = null;
      a.offset.initialize = a.noop;
    },
    bodyOffset: function (aR) {
      var aT = aR.offsetTop,
        aS = aR.offsetLeft;
      a.offset.initialize();
      if (a.offset.doesNotIncludeMarginInBodyOffset) {
        aT += parseFloat(a.css(aR, "marginTop")) || 0;
        aS += parseFloat(a.css(aR, "marginLeft")) || 0;
      }
      return { top: aT, left: aS };
    },
    setOffset: function (aU, a3, aX) {
      var aY = a.css(aU, "position");
      if (aY === "static") {
        aU.style.position = "relative";
      }
      var aW = a(aU),
        aS = aW.offset(),
        aR = a.css(aU, "top"),
        a1 = a.css(aU, "left"),
        a2 = aY === "absolute" && a.inArray("auto", [aR, a1]) > -1,
        a0 = {},
        aZ = {},
        aT,
        aV;
      if (a2) {
        aZ = aW.position();
      }
      aT = a2 ? aZ.top : parseInt(aR, 10) || 0;
      aV = a2 ? aZ.left : parseInt(a1, 10) || 0;
      if (a.isFunction(a3)) {
        a3 = a3.call(aU, aX, aS);
      }
      if (a3.top != null) {
        a0.top = a3.top - aS.top + aT;
      }
      if (a3.left != null) {
        a0.left = a3.left - aS.left + aV;
      }
      if ("using" in a3) {
        a3.using.call(aU, a0);
      } else {
        aW.css(a0);
      }
    },
  };
  a.fn.extend({
    position: function () {
      if (!this[0]) {
        return null;
      }
      var aT = this[0],
        aS = this.offsetParent(),
        aU = this.offset(),
        aR = P.test(aS[0].nodeName) ? { top: 0, left: 0 } : aS.offset();
      aU.top -= parseFloat(a.css(aT, "marginTop")) || 0;
      aU.left -= parseFloat(a.css(aT, "marginLeft")) || 0;
      aR.top += parseFloat(a.css(aS[0], "borderTopWidth")) || 0;
      aR.left += parseFloat(a.css(aS[0], "borderLeftWidth")) || 0;
      return { top: aU.top - aR.top, left: aU.left - aR.left };
    },
    offsetParent: function () {
      return this.map(function () {
        var aR = this.offsetParent || aa.body;
        while (
          aR &&
          !P.test(aR.nodeName) &&
          a.css(aR, "position") === "static"
        ) {
          aR = aR.offsetParent;
        }
        return aR;
      });
    },
  });
  a.each(["Left", "Top"], function (aS, aR) {
    var aT = "scroll" + aR;
    a.fn[aT] = function (aW) {
      var aU = this[0],
        aV;
      if (!aU) {
        return null;
      }
      if (aW !== A) {
        return this.each(function () {
          aV = ai(this);
          if (aV) {
            aV.scrollTo(
              !aS ? aW : a(aV).scrollLeft(),
              aS ? aW : a(aV).scrollTop()
            );
          } else {
            this[aT] = aW;
          }
        });
      } else {
        aV = ai(aU);
        return aV
          ? "pageXOffset" in aV
            ? aV[aS ? "pageYOffset" : "pageXOffset"]
            : (a.support.boxModel && aV.document.documentElement[aT]) ||
              aV.document.body[aT]
          : aU[aT];
      }
    };
  });
  function ai(aR) {
    return a.isWindow(aR)
      ? aR
      : aR.nodeType === 9
      ? aR.defaultView || aR.parentWindow
      : false;
  }
  a.each(["Height", "Width"], function (aS, aR) {
    var aT = aR.toLowerCase();
    a.fn["inner" + aR] = function () {
      return this[0] ? parseFloat(a.css(this[0], aT, "padding")) : null;
    };
    a.fn["outer" + aR] = function (aU) {
      return this[0]
        ? parseFloat(a.css(this[0], aT, aU ? "margin" : "border"))
        : null;
    };
    a.fn[aT] = function (aV) {
      var aW = this[0];
      if (!aW) {
        return aV == null ? null : this;
      }
      if (a.isFunction(aV)) {
        return this.each(function (aZ) {
          var aY = a(this);
          aY[aT](aV.call(this, aZ, aY[aT]()));
        });
      }
      if (a.isWindow(aW)) {
        return (
          (aW.document.compatMode === "CSS1Compat" &&
            aW.document.documentElement["client" + aR]) ||
          aW.document.body["client" + aR]
        );
      } else {
        if (aW.nodeType === 9) {
          return Math.max(
            aW.documentElement["client" + aR],
            aW.body["scroll" + aR],
            aW.documentElement["scroll" + aR],
            aW.body["offset" + aR],
            aW.documentElement["offset" + aR]
          );
        } else {
          if (aV === A) {
            var aX = a.css(aW, aT),
              aU = parseFloat(aX);
            return a.isNaN(aU) ? aX : aU;
          } else {
            return this.css(aT, typeof aV === "string" ? aV : aV + "px");
          }
        }
      }
    };
  });
})(window);
/*
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 */
(function (c) {
  var a = (c.scrollTo = function (f, e, d) {
    c(window).scrollTo(f, e, d);
  });
  a.defaults = { axis: "xy", duration: parseFloat(c.fn.jquery) >= 1.3 ? 0 : 1 };
  a.window = function (d) {
    return c(window)._scrollable();
  };
  c.fn._scrollable = function () {
    return this.map(function () {
      var e = this,
        d =
          !e.nodeName ||
          c.inArray(e.nodeName.toLowerCase(), [
            "iframe",
            "#document",
            "html",
            "body",
          ]) != -1;
      if (!d) {
        return e;
      }
      var f = (e.contentWindow || e).document || e.ownerDocument || e;
      return c.browser.safari || f.compatMode == "BackCompat"
        ? f.body
        : f.documentElement;
    });
  };
  c.fn.scrollTo = function (f, e, d) {
    if (typeof e == "object") {
      d = e;
      e = 0;
    }
    if (typeof d == "function") {
      d = { onAfter: d };
    }
    if (f == "max") {
      f = 9000000000;
    }
    d = c.extend({}, a.defaults, d);
    e = e || d.speed || d.duration;
    d.queue = d.queue && d.axis.length > 1;
    if (d.queue) {
      e /= 2;
    }
    d.offset = b(d.offset);
    d.over = b(d.over);
    return this._scrollable()
      .each(function () {
        var l = this,
          j = c(l),
          k = f,
          i,
          g = {},
          m = j.is("html,body");
        switch (typeof k) {
          case "number":
          case "string":
            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(k)) {
              k = b(k);
              break;
            }
            k = c(k, this);
          case "object":
            if (k.is || k.style) {
              i = (k = c(k)).offset();
            }
        }
        c.each(d.axis.split(""), function (r, s) {
          var t = s == "x" ? "Left" : "Top",
            v = t.toLowerCase(),
            q = "scroll" + t,
            o = l[q],
            n = a.max(l, s);
          if (i) {
            g[q] = i[v] + (m ? 0 : o - j.offset()[v]);
            if (d.margin) {
              g[q] -= parseInt(k.css("margin" + t)) || 0;
              g[q] -= parseInt(k.css("border" + t + "Width")) || 0;
            }
            g[q] += d.offset[v] || 0;
            if (d.over[v]) {
              g[q] += k[s == "x" ? "width" : "height"]() * d.over[v];
            }
          } else {
            var u = k[v];
            g[q] =
              u.slice && u.slice(-1) == "%" ? (parseFloat(u) / 100) * n : u;
          }
          if (/^\d+$/.test(g[q])) {
            g[q] = g[q] <= 0 ? 0 : Math.min(g[q], n);
          }
          if (!r && d.queue) {
            if (o != g[q]) {
              h(d.onAfterFirst);
            }
            delete g[q];
          }
        });
        h(d.onAfter);
        function h(n) {
          j.animate(
            g,
            e,
            d.easing,
            n &&
              function () {
                n.call(this, f, d);
              }
          );
        }
      })
      .end();
  };
  a.max = function (j, i) {
    var h = i == "x" ? "Width" : "Height",
      e = "scroll" + h;
    if (!c(j).is("html,body")) {
      return j[e] - c(j)[h.toLowerCase()]();
    }
    var g = "client" + h,
      f = j.ownerDocument.documentElement,
      d = j.ownerDocument.body;
    return Math.max(f[e], d[e]) - Math.min(f[g], d[g]);
  };
  function b(d) {
    return typeof d == "object" ? d : { top: d, left: d };
  }
})(jQuery);
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.94 (20-DEC-2010)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.2.6 or later
 */
(function (i) {
  var l = "2.94";
  if (i.support == undefined) {
    i.support = { opacity: !i.browser.msie };
  }
  function a(r) {
    if (i.fn.cycle.debug) {
      f(r);
    }
  }
  function f() {
    if (window.console && window.console.log) {
      window.console.log(
        "[cycle] " + Array.prototype.join.call(arguments, " ")
      );
    }
  }
  i.fn.cycle = function (s, r) {
    var t = { s: this.selector, c: this.context };
    if (this.length === 0 && s != "stop") {
      if (!i.isReady && t.s) {
        f("DOM not ready, queuing slideshow");
        i(function () {
          i(t.s, t.c).cycle(s, r);
        });
        return this;
      }
      f(
        "terminating; zero elements found by selector" +
          (i.isReady ? "" : " (DOM not ready)")
      );
      return this;
    }
    return this.each(function () {
      var x = m(this, s, r);
      if (x === false) {
        return;
      }
      x.updateActivePagerLink =
        x.updateActivePagerLink || i.fn.cycle.updateActivePagerLink;
      if (this.cycleTimeout) {
        clearTimeout(this.cycleTimeout);
      }
      this.cycleTimeout = this.cyclePause = 0;
      var y = i(this);
      var z = x.slideExpr ? i(x.slideExpr, this) : y.children();
      var v = z.get();
      if (v.length < 2) {
        f("terminating; too few slides: " + v.length);
        return;
      }
      var u = k(y, z, v, x, t);
      if (u === false) {
        return;
      }
      var w = u.continuous
        ? 10
        : h(v[u.currSlide], v[u.nextSlide], u, !u.backwards);
      if (w) {
        w += u.delay || 0;
        if (w < 10) {
          w = 10;
        }
        a("first timeout: " + w);
        this.cycleTimeout = setTimeout(function () {
          e(v, u, 0, !x.backwards);
        }, w);
      }
    });
  };
  function m(r, u, s) {
    if (r.cycleStop == undefined) {
      r.cycleStop = 0;
    }
    if (u === undefined || u === null) {
      u = {};
    }
    if (u.constructor == String) {
      switch (u) {
        case "destroy":
        case "stop":
          var w = i(r).data("cycle.opts");
          if (!w) {
            return false;
          }
          r.cycleStop++;
          if (r.cycleTimeout) {
            clearTimeout(r.cycleTimeout);
          }
          r.cycleTimeout = 0;
          i(r).removeData("cycle.opts");
          if (u == "destroy") {
            q(w);
          }
          return false;
        case "toggle":
          r.cyclePause = r.cyclePause === 1 ? 0 : 1;
          v(r.cyclePause, s, r);
          return false;
        case "pause":
          r.cyclePause = 1;
          return false;
        case "resume":
          r.cyclePause = 0;
          v(false, s, r);
          return false;
        case "prev":
        case "next":
          var w = i(r).data("cycle.opts");
          if (!w) {
            f('options not found, "prev/next" ignored');
            return false;
          }
          i.fn.cycle[u](w);
          return false;
        default:
          u = { fx: u };
      }
      return u;
    } else {
      if (u.constructor == Number) {
        var t = u;
        u = i(r).data("cycle.opts");
        if (!u) {
          f("options not found, can not advance slide");
          return false;
        }
        if (t < 0 || t >= u.elements.length) {
          f("invalid slide index: " + t);
          return false;
        }
        u.nextSlide = t;
        if (r.cycleTimeout) {
          clearTimeout(r.cycleTimeout);
          r.cycleTimeout = 0;
        }
        if (typeof s == "string") {
          u.oneTimeFx = s;
        }
        e(u.elements, u, 1, t >= u.currSlide);
        return false;
      }
    }
    return u;
    function v(y, z, x) {
      if (!y && z === true) {
        var A = i(x).data("cycle.opts");
        if (!A) {
          f("options not found, can not resume");
          return false;
        }
        if (x.cycleTimeout) {
          clearTimeout(x.cycleTimeout);
          x.cycleTimeout = 0;
        }
        e(A.elements, A, 1, !A.backwards);
      }
    }
  }
  function b(r, s) {
    if (!i.support.opacity && s.cleartype && r.style.filter) {
      try {
        r.style.removeAttribute("filter");
      } catch (t) {}
    }
  }
  function q(r) {
    if (r.next) {
      i(r.next).unbind(r.prevNextEvent);
    }
    if (r.prev) {
      i(r.prev).unbind(r.prevNextEvent);
    }
    if (r.pager || r.pagerAnchorBuilder) {
      i.each(r.pagerAnchors || [], function () {
        this.unbind().remove();
      });
    }
    r.pagerAnchors = null;
    if (r.destroy) {
      r.destroy(r);
    }
  }
  function k(z, M, v, u, G) {
    var E = i.extend(
      {},
      i.fn.cycle.defaults,
      u || {},
      i.metadata ? z.metadata() : i.meta ? z.data() : {}
    );
    if (E.autostop) {
      E.countdown = E.autostopCount || v.length;
    }
    var s = z[0];
    z.data("cycle.opts", E);
    E.$cont = z;
    E.stopCount = s.cycleStop;
    E.elements = v;
    E.before = E.before ? [E.before] : [];
    E.after = E.after ? [E.after] : [];
    E.after.unshift(function () {
      E.busy = 0;
    });
    if (!i.support.opacity && E.cleartype) {
      E.after.push(function () {
        b(this, E);
      });
    }
    if (E.continuous) {
      E.after.push(function () {
        e(v, E, 0, !E.backwards);
      });
    }
    n(E);
    if (!i.support.opacity && E.cleartype && !E.cleartypeNoBg) {
      g(M);
    }
    if (z.css("position") == "static") {
      z.css("position", "relative");
    }
    if (E.width) {
      z.width(E.width);
    }
    if (E.height && E.height != "auto") {
      z.height(E.height);
    }
    if (E.startingSlide) {
      E.startingSlide = parseInt(E.startingSlide);
    } else {
      if (E.backwards) {
        E.startingSlide = v.length - 1;
      }
    }
    if (E.random) {
      E.randomMap = [];
      for (var K = 0; K < v.length; K++) {
        E.randomMap.push(K);
      }
      E.randomMap.sort(function (O, w) {
        return Math.random() - 0.5;
      });
      E.randomIndex = 1;
      E.startingSlide = E.randomMap[1];
    } else {
      if (E.startingSlide >= v.length) {
        E.startingSlide = 0;
      }
    }
    E.currSlide = E.startingSlide || 0;
    var y = E.startingSlide;
    M.css({ position: "absolute", top: 0, left: 0 })
      .hide()
      .each(function (w) {
        var O;
        if (E.backwards) {
          O = y ? (w <= y ? v.length + (w - y) : y - w) : v.length - w;
        } else {
          O = y ? (w >= y ? v.length - (w - y) : y - w) : v.length - w;
        }
        i(this).css("z-index", O);
      });
    i(v[y]).css("opacity", 1).show();
    b(v[y], E);
    if (E.fit && E.width) {
      M.width(E.width);
    }
    if (E.fit && E.height && E.height != "auto") {
      M.height(E.height);
    }
    var F = E.containerResize && !z.innerHeight();
    if (F) {
      var x = 0,
        C = 0;
      for (var I = 0; I < v.length; I++) {
        var r = i(v[I]),
          N = r[0],
          B = r.outerWidth(),
          L = r.outerHeight();
        if (!B) {
          B = N.offsetWidth || N.width || r.attr("width");
        }
        if (!L) {
          L = N.offsetHeight || N.height || r.attr("height");
        }
        x = B > x ? B : x;
        C = L > C ? L : C;
      }
      if (x > 0 && C > 0) {
        z.css({ width: x + "px", height: C + "px" });
      }
    }
    if (E.pause) {
      z.hover(
        function () {
          this.cyclePause++;
        },
        function () {
          this.cyclePause--;
        }
      );
    }
    if (c(E) === false) {
      return false;
    }
    var t = false;
    u.requeueAttempts = u.requeueAttempts || 0;
    M.each(function () {
      var Q = i(this);
      this.cycleH =
        E.fit && E.height
          ? E.height
          : Q.height() ||
            this.offsetHeight ||
            this.height ||
            Q.attr("height") ||
            0;
      this.cycleW =
        E.fit && E.width
          ? E.width
          : Q.width() || this.offsetWidth || this.width || Q.attr("width") || 0;
      if (Q.is("img")) {
        var O =
          i.browser.msie &&
          this.cycleW == 28 &&
          this.cycleH == 30 &&
          !this.complete;
        var R =
          i.browser.mozilla &&
          this.cycleW == 34 &&
          this.cycleH == 19 &&
          !this.complete;
        var P =
          i.browser.opera &&
          ((this.cycleW == 42 && this.cycleH == 19) ||
            (this.cycleW == 37 && this.cycleH == 17)) &&
          !this.complete;
        var w = this.cycleH == 0 && this.cycleW == 0 && !this.complete;
        if (O || R || P || w) {
          if (G.s && E.requeueOnImageNotLoaded && ++u.requeueAttempts < 100) {
            f(
              u.requeueAttempts,
              " - img slide not loaded, requeuing slideshow: ",
              this.src,
              this.cycleW,
              this.cycleH
            );
            setTimeout(function () {
              i(G.s, G.c).cycle(u);
            }, E.requeueTimeout);
            t = true;
            return false;
          } else {
            f(
              "could not determine size of image: " + this.src,
              this.cycleW,
              this.cycleH
            );
          }
        }
      }
      return true;
    });
    if (t) {
      return false;
    }
    E.cssBefore = E.cssBefore || {};
    E.animIn = E.animIn || {};
    E.animOut = E.animOut || {};
    M.not(":eq(" + y + ")").css(E.cssBefore);
    if (E.cssFirst) {
      i(M[y]).css(E.cssFirst);
    }
    if (E.timeout) {
      E.timeout = parseInt(E.timeout);
      if (E.speed.constructor == String) {
        E.speed = i.fx.speeds[E.speed] || parseInt(E.speed);
      }
      if (!E.sync) {
        E.speed = E.speed / 2;
      }
      var H = E.fx == "shuffle" ? 500 : 250;
      while (E.timeout - E.speed < H) {
        E.timeout += E.speed;
      }
    }
    if (E.easing) {
      E.easeIn = E.easeOut = E.easing;
    }
    if (!E.speedIn) {
      E.speedIn = E.speed;
    }
    if (!E.speedOut) {
      E.speedOut = E.speed;
    }
    E.slideCount = v.length;
    E.currSlide = E.lastSlide = y;
    if (E.random) {
      if (++E.randomIndex == v.length) {
        E.randomIndex = 0;
      }
      E.nextSlide = E.randomMap[E.randomIndex];
    } else {
      if (E.backwards) {
        E.nextSlide = E.startingSlide == 0 ? v.length - 1 : E.startingSlide - 1;
      } else {
        E.nextSlide = E.startingSlide >= v.length - 1 ? 0 : E.startingSlide + 1;
      }
    }
    if (!E.multiFx) {
      var J = i.fn.cycle.transitions[E.fx];
      if (i.isFunction(J)) {
        J(z, M, E);
      } else {
        if (E.fx != "custom" && !E.multiFx) {
          f("unknown transition: " + E.fx, "; slideshow terminating");
          return false;
        }
      }
    }
    var A = M[y];
    if (E.before.length) {
      E.before[0].apply(A, [A, A, E, true]);
    }
    if (E.after.length > 1) {
      E.after[1].apply(A, [A, A, E, true]);
    }
    if (E.next) {
      i(E.next).bind(E.prevNextEvent, function () {
        return o(E, 1);
      });
    }
    if (E.prev) {
      i(E.prev).bind(E.prevNextEvent, function () {
        return o(E, 0);
      });
    }
    if (E.pager || E.pagerAnchorBuilder) {
      d(v, E);
    }
    j(E, v);
    return E;
  }
  function n(r) {
    r.original = { before: [], after: [] };
    r.original.cssBefore = i.extend({}, r.cssBefore);
    r.original.cssAfter = i.extend({}, r.cssAfter);
    r.original.animIn = i.extend({}, r.animIn);
    r.original.animOut = i.extend({}, r.animOut);
    i.each(r.before, function () {
      r.original.before.push(this);
    });
    i.each(r.after, function () {
      r.original.after.push(this);
    });
  }
  function c(x) {
    var v,
      t,
      s = i.fn.cycle.transitions;
    if (x.fx.indexOf(",") > 0) {
      x.multiFx = true;
      x.fxs = x.fx.replace(/\s*/g, "").split(",");
      for (v = 0; v < x.fxs.length; v++) {
        var w = x.fxs[v];
        t = s[w];
        if (!t || !s.hasOwnProperty(w) || !i.isFunction(t)) {
          f("discarding unknown transition: ", w);
          x.fxs.splice(v, 1);
          v--;
        }
      }
      if (!x.fxs.length) {
        f("No valid transitions named; slideshow terminating.");
        return false;
      }
    } else {
      if (x.fx == "all") {
        x.multiFx = true;
        x.fxs = [];
        for (p in s) {
          t = s[p];
          if (s.hasOwnProperty(p) && i.isFunction(t)) {
            x.fxs.push(p);
          }
        }
      }
    }
    if (x.multiFx && x.randomizeEffects) {
      var u = Math.floor(Math.random() * 20) + 30;
      for (v = 0; v < u; v++) {
        var r = Math.floor(Math.random() * x.fxs.length);
        x.fxs.push(x.fxs.splice(r, 1)[0]);
      }
      a("randomized fx sequence: ", x.fxs);
    }
    return true;
  }
  function j(s, r) {
    s.addSlide = function (u, v) {
      var t = i(u),
        w = t[0];
      if (!s.autostopCount) {
        s.countdown++;
      }
      r[v ? "unshift" : "push"](w);
      if (s.els) {
        s.els[v ? "unshift" : "push"](w);
      }
      s.slideCount = r.length;
      t.css("position", "absolute");
      t[v ? "prependTo" : "appendTo"](s.$cont);
      if (v) {
        s.currSlide++;
        s.nextSlide++;
      }
      if (!i.support.opacity && s.cleartype && !s.cleartypeNoBg) {
        g(t);
      }
      if (s.fit && s.width) {
        t.width(s.width);
      }
      if (s.fit && s.height && s.height != "auto") {
        t.height(s.height);
      }
      w.cycleH = s.fit && s.height ? s.height : t.height();
      w.cycleW = s.fit && s.width ? s.width : t.width();
      t.css(s.cssBefore);
      if (s.pager || s.pagerAnchorBuilder) {
        i.fn.cycle.createPagerAnchor(r.length - 1, w, i(s.pager), r, s);
      }
      if (i.isFunction(s.onAddSlide)) {
        s.onAddSlide(t);
      } else {
        t.hide();
      }
    };
  }
  i.fn.cycle.resetState = function (s, r) {
    r = r || s.fx;
    s.before = [];
    s.after = [];
    s.cssBefore = i.extend({}, s.original.cssBefore);
    s.cssAfter = i.extend({}, s.original.cssAfter);
    s.animIn = i.extend({}, s.original.animIn);
    s.animOut = i.extend({}, s.original.animOut);
    s.fxFn = null;
    i.each(s.original.before, function () {
      s.before.push(this);
    });
    i.each(s.original.after, function () {
      s.after.push(this);
    });
    var t = i.fn.cycle.transitions[r];
    if (i.isFunction(t)) {
      t(s.$cont, i(s.elements), s);
    }
  };
  function e(y, r, x, A) {
    if (x && r.busy && r.manualTrump) {
      a("manualTrump in go(), stopping active transition");
      i(y).stop(true, true);
      r.busy = false;
    }
    if (r.busy) {
      a("transition active, ignoring new tx request");
      return;
    }
    var v = r.$cont[0],
      C = y[r.currSlide],
      B = y[r.nextSlide];
    if (v.cycleStop != r.stopCount || (v.cycleTimeout === 0 && !x)) {
      return;
    }
    if (
      !x &&
      !v.cyclePause &&
      !r.bounce &&
      ((r.autostop && --r.countdown <= 0) ||
        (r.nowrap && !r.random && r.nextSlide < r.currSlide))
    ) {
      if (r.end) {
        r.end(r);
      }
      return;
    }
    var z = false;
    if ((x || !v.cyclePause) && r.nextSlide != r.currSlide) {
      z = true;
      var w = r.fx;
      C.cycleH = C.cycleH || i(C).height();
      C.cycleW = C.cycleW || i(C).width();
      B.cycleH = B.cycleH || i(B).height();
      B.cycleW = B.cycleW || i(B).width();
      if (r.multiFx) {
        if (r.lastFx == undefined || ++r.lastFx >= r.fxs.length) {
          r.lastFx = 0;
        }
        w = r.fxs[r.lastFx];
        r.currFx = w;
      }
      if (r.oneTimeFx) {
        w = r.oneTimeFx;
        r.oneTimeFx = null;
      }
      i.fn.cycle.resetState(r, w);
      if (r.before.length) {
        i.each(r.before, function (E, F) {
          if (v.cycleStop != r.stopCount) {
            return;
          }
          F.apply(B, [C, B, r, A]);
        });
      }
      var t = function () {
        i.each(r.after, function (E, F) {
          if (v.cycleStop != r.stopCount) {
            return;
          }
          F.apply(B, [C, B, r, A]);
        });
      };
      a("tx firing; currSlide: " + r.currSlide + "; nextSlide: " + r.nextSlide);
      r.busy = 1;
      if (r.fxFn) {
        r.fxFn(C, B, r, t, A, x && r.fastOnEvent);
      } else {
        if (i.isFunction(i.fn.cycle[r.fx])) {
          i.fn.cycle[r.fx](C, B, r, t, A, x && r.fastOnEvent);
        } else {
          i.fn.cycle.custom(C, B, r, t, A, x && r.fastOnEvent);
        }
      }
    }
    if (z || r.nextSlide == r.currSlide) {
      r.lastSlide = r.currSlide;
      if (r.random) {
        r.currSlide = r.nextSlide;
        if (++r.randomIndex == y.length) {
          r.randomIndex = 0;
        }
        r.nextSlide = r.randomMap[r.randomIndex];
        if (r.nextSlide == r.currSlide) {
          r.nextSlide = r.currSlide == r.slideCount - 1 ? 0 : r.currSlide + 1;
        }
      } else {
        if (r.backwards) {
          var u = r.nextSlide - 1 < 0;
          if (u && r.bounce) {
            r.backwards = !r.backwards;
            r.nextSlide = 1;
            r.currSlide = 0;
          } else {
            r.nextSlide = u ? y.length - 1 : r.nextSlide - 1;
            r.currSlide = u ? 0 : r.nextSlide + 1;
          }
        } else {
          var u = r.nextSlide + 1 == y.length;
          if (u && r.bounce) {
            r.backwards = !r.backwards;
            r.nextSlide = y.length - 2;
            r.currSlide = y.length - 1;
          } else {
            r.nextSlide = u ? 0 : r.nextSlide + 1;
            r.currSlide = u ? y.length - 1 : r.nextSlide - 1;
          }
        }
      }
    }
    if (z && r.pager) {
      r.updateActivePagerLink(r.pager, r.currSlide, r.activePagerClass);
    }
    var s = 0;
    if (r.timeout && !r.continuous) {
      s = h(y[r.currSlide], y[r.nextSlide], r, A);
    } else {
      if (r.continuous && v.cyclePause) {
        s = 10;
      }
    }
    if (s > 0) {
      v.cycleTimeout = setTimeout(function () {
        e(y, r, 0, !r.backwards);
      }, s);
    }
  }
  i.fn.cycle.updateActivePagerLink = function (r, t, s) {
    i(r).each(function () {
      i(this).children().removeClass(s).eq(t).addClass(s);
    });
  };
  function h(w, u, v, s) {
    if (v.timeoutFn) {
      var r = v.timeoutFn.call(w, w, u, v, s);
      while (r - v.speed < 250) {
        r += v.speed;
      }
      a("calculated timeout: " + r + "; speed: " + v.speed);
      if (r !== false) {
        return r;
      }
    }
    return v.timeout;
  }
  i.fn.cycle.next = function (r) {
    o(r, 1);
  };
  i.fn.cycle.prev = function (r) {
    o(r, 0);
  };
  function o(u, t) {
    var x = t ? 1 : -1;
    var s = u.elements;
    var w = u.$cont[0],
      v = w.cycleTimeout;
    if (v) {
      clearTimeout(v);
      w.cycleTimeout = 0;
    }
    if (u.random && x < 0) {
      u.randomIndex--;
      if (--u.randomIndex == -2) {
        u.randomIndex = s.length - 2;
      } else {
        if (u.randomIndex == -1) {
          u.randomIndex = s.length - 1;
        }
      }
      u.nextSlide = u.randomMap[u.randomIndex];
    } else {
      if (u.random) {
        u.nextSlide = u.randomMap[u.randomIndex];
      } else {
        u.nextSlide = u.currSlide + x;
        if (u.nextSlide < 0) {
          if (u.nowrap) {
            return false;
          }
          u.nextSlide = s.length - 1;
        } else {
          if (u.nextSlide >= s.length) {
            if (u.nowrap) {
              return false;
            }
            u.nextSlide = 0;
          }
        }
      }
    }
    var r = u.onPrevNextEvent || u.prevNextClick;
    if (i.isFunction(r)) {
      r(x > 0, u.nextSlide, s[u.nextSlide]);
    }
    e(s, u, 1, t);
    return false;
  }
  function d(s, t) {
    var r = i(t.pager);
    i.each(s, function (u, v) {
      i.fn.cycle.createPagerAnchor(u, v, r, s, t);
    });
    t.updateActivePagerLink(t.pager, t.startingSlide, t.activePagerClass);
  }
  i.fn.cycle.createPagerAnchor = function (v, w, t, u, x) {
    var s;
    if (i.isFunction(x.pagerAnchorBuilder)) {
      s = x.pagerAnchorBuilder(v, w);
      a("pagerAnchorBuilder(" + v + ", el) returned: " + s);
    } else {
      s = '<a href="#">' + (v + 1) + "</a>";
    }
    if (!s) {
      return;
    }
    var y = i(s);
    if (y.parents("body").length === 0) {
      var r = [];
      if (t.length > 1) {
        t.each(function () {
          var z = y.clone(true);
          i(this).append(z);
          r.push(z[0]);
        });
        y = i(r);
      } else {
        y.appendTo(t);
      }
    }
    x.pagerAnchors = x.pagerAnchors || [];
    x.pagerAnchors.push(y);
    y.bind(x.pagerEvent, function (C) {
      C.preventDefault();
      x.nextSlide = v;
      var B = x.$cont[0],
        A = B.cycleTimeout;
      if (A) {
        clearTimeout(A);
        B.cycleTimeout = 0;
      }
      var z = x.onPagerEvent || x.pagerClick;
      if (i.isFunction(z)) {
        z(x.nextSlide, u[x.nextSlide]);
      }
      e(u, x, 1, x.currSlide < v);
    });
    if (!/^click/.test(x.pagerEvent) && !x.allowPagerClickBubble) {
      y.bind("click.cycle", function () {
        return false;
      });
    }
    if (x.pauseOnPagerHover) {
      y.hover(
        function () {
          x.$cont[0].cyclePause++;
        },
        function () {
          x.$cont[0].cyclePause--;
        }
      );
    }
  };
  i.fn.cycle.hopsFromLast = function (u, t) {
    var s,
      r = u.lastSlide,
      v = u.currSlide;
    if (t) {
      s = v > r ? v - r : u.slideCount - r;
    } else {
      s = v < r ? r - v : r + u.slideCount - v;
    }
    return s;
  };
  function g(t) {
    a("applying clearType background-color hack");
    function s(u) {
      u = parseInt(u).toString(16);
      return u.length < 2 ? "0" + u : u;
    }
    function r(x) {
      for (; x && x.nodeName.toLowerCase() != "html"; x = x.parentNode) {
        var u = i.css(x, "background-color");
        if (u.indexOf("rgb") >= 0) {
          var w = u.match(/\d+/g);
          return "#" + s(w[0]) + s(w[1]) + s(w[2]);
        }
        if (u && u != "transparent") {
          return u;
        }
      }
      return "#ffffff";
    }
    t.each(function () {
      i(this).css("background-color", r(this));
    });
  }
  i.fn.cycle.commonReset = function (x, u, v, s, t, r) {
    i(v.elements).not(x).hide();
    v.cssBefore.opacity = 1;
    v.cssBefore.display = "block";
    if (v.slideResize && s !== false && u.cycleW > 0) {
      v.cssBefore.width = u.cycleW;
    }
    if (v.slideResize && t !== false && u.cycleH > 0) {
      v.cssBefore.height = u.cycleH;
    }
    v.cssAfter = v.cssAfter || {};
    v.cssAfter.display = "none";
    i(x).css("zIndex", v.slideCount + (r === true ? 1 : 0));
    i(u).css("zIndex", v.slideCount + (r === true ? 0 : 1));
  };
  i.fn.cycle.custom = function (E, x, r, u, w, s) {
    var C = i(E),
      y = i(x);
    var t = r.speedIn,
      B = r.speedOut,
      v = r.easeIn,
      A = r.easeOut;
    y.css(r.cssBefore);
    if (s) {
      if (typeof s == "number") {
        t = B = s;
      } else {
        t = B = 1;
      }
      v = A = null;
    }
    var z = function () {
      y.animate(r.animIn, t, v, u);
    };
    C.animate(r.animOut, B, A, function () {
      if (r.cssAfter) {
        C.css(r.cssAfter);
      }
      if (!r.sync) {
        z();
      }
    });
    if (r.sync) {
      z();
    }
  };
  i.fn.cycle.transitions = {
    fade: function (s, t, r) {
      t.not(":eq(" + r.currSlide + ")").css("opacity", 0);
      r.before.push(function (w, u, v) {
        i.fn.cycle.commonReset(w, u, v);
        v.cssBefore.opacity = 0;
      });
      r.animIn = { opacity: 1 };
      r.animOut = { opacity: 0 };
      r.cssBefore = { top: 0, left: 0 };
    },
  };
  i.fn.cycle.ver = function () {
    return l;
  };
  i.fn.cycle.defaults = {
    fx: "fade",
    timeout: 4000,
    timeoutFn: null,
    continuous: 0,
    speed: 1000,
    speedIn: null,
    speedOut: null,
    next: null,
    prev: null,
    onPrevNextEvent: null,
    prevNextEvent: "click.cycle",
    pager: null,
    onPagerEvent: null,
    pagerEvent: "click.cycle",
    allowPagerClickBubble: false,
    pagerAnchorBuilder: null,
    before: null,
    after: null,
    end: null,
    easing: null,
    easeIn: null,
    easeOut: null,
    shuffle: null,
    animIn: null,
    animOut: null,
    cssBefore: null,
    cssAfter: null,
    fxFn: null,
    height: "auto",
    startingSlide: 0,
    sync: 1,
    random: 0,
    fit: 0,
    containerResize: 1,
    slideResize: 1,
    pause: 0,
    pauseOnPagerHover: 0,
    autostop: 0,
    autostopCount: 0,
    delay: 0,
    slideExpr: null,
    cleartype: !i.support.opacity,
    cleartypeNoBg: false,
    nowrap: 0,
    fastOnEvent: 0,
    randomizeEffects: 1,
    rev: 0,
    manualTrump: true,
    requeueOnImageNotLoaded: true,
    requeueTimeout: 250,
    activePagerClass: "activeSlide",
    updateActivePagerLink: null,
    backwards: false,
  };
})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function (a) {
  a.fn.cycle.transitions.none = function (c, d, b) {
    b.fxFn = function (g, e, f, h) {
      a(e).show();
      a(g).hide();
      h();
    };
  };
  a.fn.cycle.transitions.scrollHorz = function (c, d, b) {
    c.css("overflow", "hidden").width();
    b.before.push(function (h, f, g, e) {
      if (g.rev) {
        e = !e;
      }
      a.fn.cycle.commonReset(h, f, g);
      g.cssBefore.left = e ? f.cycleW - 1 : 1 - f.cycleW;
      g.animOut.left = e ? -h.cycleW : h.cycleW;
    });
    b.cssFirst = { left: 0 };
    b.cssBefore = { top: 0 };
    b.animIn = { left: 0 };
    b.animOut = { top: 0 };
  };
})(jQuery);
window.log = function () {
  log.history = log.history || [];
  log.history.push(arguments);
  if (this.console) {
    console.log(Array.prototype.slice.call(arguments));
  }
};
var D = {
  trackPageView: function (a) {
    try {
      _gaq.push(["_trackPageview", a]);
      log("_trackPageview", a);
    } catch (b) {}
  },
  trackEvent: function (h, d, b, f) {
    try {
      _gaq.push(["_trackEvent", h, d, b, f]);
      log("_trackEvent", h, d, b, f);
    } catch (g) {}
  },
  initStudyToc: function () {
    $("#studies nav ul:first-child").show();
    if ($("#studies nav ul").length <= 1) {
      return;
    }
    $("#studies nav")
      .wrap('<div class="studywrap" />')
      .before(
        '<a class="cycleprev">Prev</a><div id="snav" class="cyclenav"></div><a class="cyclenext">Next</a>'
      )
      .cycle({
        fx: "scrollHorz",
        speed: 800,
        timeout: 0,
        prev: "#studies .cycleprev",
        next: "#studies .cyclenext",
        pager: "#snav",
        fit: true,
        slideExpr: "ul",
      });
    $("#studies li")
      .css("cursor", "pointer")
      .bind("click", function () {
        var a = $("a:first", this).attr("href");
        D.loadStudy(a, true);
        return false;
      })
      .hover(
        function () {
          $("img", this).fadeTo(200, 1);
        },
        function () {
          $("img", this).fadeTo(300, 0.6);
        }
      );
    $("a.study").bind("click", function () {
      D.loadStudy($(this).attr("href"), true);
      return false;
    });
  },
  loadStudy: function (a, b) {
    D.trackPageView(a);
    $.ajax({
      data: { xhr: true },
      dataType: "json",
      cache: "false",
      url: a,
      success: function (d, c, e) {
        if (c === "success") {
          if (false && b && window.history && history.pushState) {
            log("doHistory", a);
            history.pushState({ study: a }, d.title, a);
          }
          log("Success", d, e, c);
          D.showStudy(d);
        } else {
          log("Err", e, c);
        }
      },
      error: function (e, c, d) {
        log("Err", e, c, d);
      },
    });
  },
  showStudy: function (c) {
    var b = $("#study_viewer"),
      a = "#study_viewer";
    if (b.length < 1) {
      if ($("#study").length > 0) {
        $("#study").wrap('<div id="study_viewer" />');
      } else {
        $("#studies h2").after(
          '<div id="study_viewer" style="display: none;"></div>'
        );
        a = "#studies";
        $("#study_viewer").after("<h2><span>View another project</span></h2>");
      }
      b = $("#study_viewer");
    } else {
      if ($("h2 + #study_viewer").length > 0) {
        a = "#studies";
      }
    }
    $(b)
      .html(c.body)
      .slideDown(500, function () {
        D.initGallery();
      });
    $(window).scrollTo(a, 500, { margin: true });
  },
  initGallery: function () {
    $("#study .gallery img:first-child").show();
    if ($("#study .gallery img").length <= 1) {
      return;
    }
    $("#study .gallery")
      .wrap('<div class="gallerywrap" />')
      .before(
        '<div id="gnav" class="cyclenav"></div><a class="cycleprev">Prev</a>'
      )
      .after('<a class="cyclenext">Next</a>')
      .cycle({
        fx: "scrollHorz",
        speed: 800,
        timeout: 0,
        prev: "#study .cycleprev",
        next: "#study .cyclenext",
        pager: "#gnav",
      });
    $("#study .gallery img")
      .css("cursor", "pointer")
      .bind("click", function () {
        $("#study .gallery").cycle("next");
      });
  },
  initNav: function () {
    $("#nav a:not([rel=home])").bind("click", function () {
      $(window).scrollTo("#" + $(this).attr("rel"), 500, { margin: true });
      return false;
    });
  },
};
$(document).bind("ready", function () {
  D.initStudyToc();
  D.initGallery();
  D.initNav();
  $(document).bind("keypress", function (a) {
    if (a.which === 103) {
      $("body").toggleClass("debug");
    }
  });
});

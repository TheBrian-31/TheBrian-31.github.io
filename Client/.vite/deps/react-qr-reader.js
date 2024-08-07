import {
  require_react
} from "./chunk-D3R7NK7K.js";
import {
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/.pnpm/react-qr-reader@3.0.0-beta-1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-qr-reader/dist/esm/index.js
var t = __toESM(require_react());
var import_react = __toESM(require_react());
var n;
var o;
var i = (n = function(t2, e2) {
  return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
    t3.__proto__ = e3;
  } || function(t3, e3) {
    for (var r2 in e3)
      e3.hasOwnProperty(r2) && (t3[r2] = e3[r2]);
  }, n(t2, e2);
}, function(t2, e2) {
  function r2() {
    this.constructor = t2;
  }
  n(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
});
var a = function(t2) {
  function e2(e3) {
    var r2, n2, o2, i2 = this.constructor, a2 = t2.call(this, e3) || this;
    return Object.defineProperty(a2, "name", { value: i2.name, enumerable: false, configurable: true }), r2 = a2, n2 = i2.prototype, (o2 = Object.setPrototypeOf) ? o2(r2, n2) : r2.__proto__ = n2, function(t3, e4) {
      void 0 === e4 && (e4 = t3.constructor);
      var r3 = Error.captureStackTrace;
      r3 && r3(t3, e4);
    }(a2), a2;
  }
  return i(e2, t2), e2;
}(Error);
var u = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var s = function(t2) {
  function e2(e3) {
    void 0 === e3 && (e3 = void 0);
    var r2 = t2.call(this, e3) || this;
    return r2.message = e3, r2;
  }
  return u(e2, t2), e2.prototype.getKind = function() {
    return this.constructor.kind;
  }, e2.kind = "Exception", e2;
}(a);
var c = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var f = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return c(e2, t2), e2.kind = "ArgumentException", e2;
}(s);
var h = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var l = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return h(e2, t2), e2.kind = "IllegalArgumentException", e2;
}(s);
var d = function() {
  function t2(t3) {
    if (this.binarizer = t3, null === t3)
      throw new l("Binarizer must be non-null.");
  }
  return t2.prototype.getWidth = function() {
    return this.binarizer.getWidth();
  }, t2.prototype.getHeight = function() {
    return this.binarizer.getHeight();
  }, t2.prototype.getBlackRow = function(t3, e2) {
    return this.binarizer.getBlackRow(t3, e2);
  }, t2.prototype.getBlackMatrix = function() {
    return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
  }, t2.prototype.isCropSupported = function() {
    return this.binarizer.getLuminanceSource().isCropSupported();
  }, t2.prototype.crop = function(e2, r2, n2, o2) {
    var i2 = this.binarizer.getLuminanceSource().crop(e2, r2, n2, o2);
    return new t2(this.binarizer.createBinarizer(i2));
  }, t2.prototype.isRotateSupported = function() {
    return this.binarizer.getLuminanceSource().isRotateSupported();
  }, t2.prototype.rotateCounterClockwise = function() {
    var e2 = this.binarizer.getLuminanceSource().rotateCounterClockwise();
    return new t2(this.binarizer.createBinarizer(e2));
  }, t2.prototype.rotateCounterClockwise45 = function() {
    var e2 = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
    return new t2(this.binarizer.createBinarizer(e2));
  }, t2.prototype.toString = function() {
    try {
      return this.getBlackMatrix().toString();
    } catch (t3) {
      return "";
    }
  }, t2;
}();
var p = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var g = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return p(e2, t2), e2.getChecksumInstance = function() {
    return new e2();
  }, e2.kind = "ChecksumException", e2;
}(s);
var y = function() {
  function t2(t3) {
    this.source = t3;
  }
  return t2.prototype.getLuminanceSource = function() {
    return this.source;
  }, t2.prototype.getWidth = function() {
    return this.source.getWidth();
  }, t2.prototype.getHeight = function() {
    return this.source.getHeight();
  }, t2;
}();
var w = function() {
  function t2() {
  }
  return t2.arraycopy = function(t3, e2, r2, n2, o2) {
    for (; o2--; )
      r2[n2++] = t3[e2++];
  }, t2.currentTimeMillis = function() {
    return Date.now();
  }, t2;
}();
var _ = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var v = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.kind = "IndexOutOfBoundsException", e2;
}(s);
var m = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var A = function(t2) {
  function e2(e3, r2) {
    void 0 === e3 && (e3 = void 0), void 0 === r2 && (r2 = void 0);
    var n2 = t2.call(this, r2) || this;
    return n2.index = e3, n2.message = r2, n2;
  }
  return m(e2, t2), e2.kind = "ArrayIndexOutOfBoundsException", e2;
}(v);
var E = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var C = function() {
  function t2() {
  }
  return t2.fill = function(t3, e2) {
    for (var r2 = 0, n2 = t3.length; r2 < n2; r2++)
      t3[r2] = e2;
  }, t2.fillWithin = function(e2, r2, n2, o2) {
    t2.rangeCheck(e2.length, r2, n2);
    for (var i2 = r2; i2 < n2; i2++)
      e2[i2] = o2;
  }, t2.rangeCheck = function(t3, e2, r2) {
    if (e2 > r2)
      throw new l("fromIndex(" + e2 + ") > toIndex(" + r2 + ")");
    if (e2 < 0)
      throw new A(e2);
    if (r2 > t3)
      throw new A(r2);
  }, t2.asList = function() {
    for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
      t3[e2] = arguments[e2];
    return t3;
  }, t2.create = function(t3, e2, r2) {
    return Array.from({ length: t3 }).map(function(t4) {
      return Array.from({ length: e2 }).fill(r2);
    });
  }, t2.createInt32Array = function(t3, e2, r2) {
    return Array.from({ length: t3 }).map(function(t4) {
      return Int32Array.from({ length: e2 }).fill(r2);
    });
  }, t2.equals = function(t3, e2) {
    if (!t3)
      return false;
    if (!e2)
      return false;
    if (!t3.length)
      return false;
    if (!e2.length)
      return false;
    if (t3.length !== e2.length)
      return false;
    for (var r2 = 0, n2 = t3.length; r2 < n2; r2++)
      if (t3[r2] !== e2[r2])
        return false;
    return true;
  }, t2.hashCode = function(t3) {
    var e2, r2;
    if (null === t3)
      return 0;
    var n2 = 1;
    try {
      for (var o2 = E(t3), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        n2 = 31 * n2 + i2.value;
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return n2;
  }, t2.fillUint8Array = function(t3, e2) {
    for (var r2 = 0; r2 !== t3.length; r2++)
      t3[r2] = e2;
  }, t2.copyOf = function(t3, e2) {
    return t3.slice(0, e2);
  }, t2.copyOfUint8Array = function(t3, e2) {
    if (t3.length <= e2) {
      var r2 = new Uint8Array(e2);
      return r2.set(t3), r2;
    }
    return t3.slice(0, e2);
  }, t2.copyOfRange = function(t3, e2, r2) {
    var n2 = r2 - e2, o2 = new Int32Array(n2);
    return w.arraycopy(t3, e2, o2, 0, n2), o2;
  }, t2.binarySearch = function(e2, r2, n2) {
    void 0 === n2 && (n2 = t2.numberComparator);
    for (var o2 = 0, i2 = e2.length - 1; o2 <= i2; ) {
      var a2 = i2 + o2 >> 1, u2 = n2(r2, e2[a2]);
      if (u2 > 0)
        o2 = a2 + 1;
      else {
        if (!(u2 < 0))
          return a2;
        i2 = a2 - 1;
      }
    }
    return -o2 - 1;
  }, t2.numberComparator = function(t3, e2) {
    return t3 - e2;
  }, t2;
}();
var I = function() {
  function t2() {
  }
  return t2.numberOfTrailingZeros = function(t3) {
    var e2;
    if (0 === t3)
      return 32;
    var r2 = 31;
    return 0 !== (e2 = t3 << 16) && (r2 -= 16, t3 = e2), 0 !== (e2 = t3 << 8) && (r2 -= 8, t3 = e2), 0 !== (e2 = t3 << 4) && (r2 -= 4, t3 = e2), 0 !== (e2 = t3 << 2) && (r2 -= 2, t3 = e2), r2 - (t3 << 1 >>> 31);
  }, t2.numberOfLeadingZeros = function(t3) {
    if (0 === t3)
      return 32;
    var e2 = 1;
    return t3 >>> 16 == 0 && (e2 += 16, t3 <<= 16), t3 >>> 24 == 0 && (e2 += 8, t3 <<= 8), t3 >>> 28 == 0 && (e2 += 4, t3 <<= 4), t3 >>> 30 == 0 && (e2 += 2, t3 <<= 2), e2 -= t3 >>> 31;
  }, t2.toHexString = function(t3) {
    return t3.toString(16);
  }, t2.toBinaryString = function(t3) {
    return String(parseInt(String(t3), 2));
  }, t2.bitCount = function(t3) {
    return t3 = (t3 = (858993459 & (t3 -= t3 >>> 1 & 1431655765)) + (t3 >>> 2 & 858993459)) + (t3 >>> 4) & 252645135, t3 += t3 >>> 8, 63 & (t3 += t3 >>> 16);
  }, t2.truncDivision = function(t3, e2) {
    return Math.trunc(t3 / e2);
  }, t2.parseInt = function(t3, e2) {
    return void 0 === e2 && (e2 = void 0), parseInt(t3, e2);
  }, t2.MIN_VALUE_32_BITS = -2147483648, t2.MAX_VALUE = Number.MAX_SAFE_INTEGER, t2;
}();
var S = function() {
  function t2(e2, r2) {
    void 0 === e2 ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = e2, this.bits = null == r2 ? t2.makeArray(e2) : r2);
  }
  return t2.prototype.getSize = function() {
    return this.size;
  }, t2.prototype.getSizeInBytes = function() {
    return Math.floor((this.size + 7) / 8);
  }, t2.prototype.ensureCapacity = function(e2) {
    if (e2 > 32 * this.bits.length) {
      var r2 = t2.makeArray(e2);
      w.arraycopy(this.bits, 0, r2, 0, this.bits.length), this.bits = r2;
    }
  }, t2.prototype.get = function(t3) {
    return 0 != (this.bits[Math.floor(t3 / 32)] & 1 << (31 & t3));
  }, t2.prototype.set = function(t3) {
    this.bits[Math.floor(t3 / 32)] |= 1 << (31 & t3);
  }, t2.prototype.flip = function(t3) {
    this.bits[Math.floor(t3 / 32)] ^= 1 << (31 & t3);
  }, t2.prototype.getNextSet = function(t3) {
    var e2 = this.size;
    if (t3 >= e2)
      return e2;
    var r2 = this.bits, n2 = Math.floor(t3 / 32), o2 = r2[n2];
    o2 &= ~((1 << (31 & t3)) - 1);
    for (var i2 = r2.length; 0 === o2; ) {
      if (++n2 === i2)
        return e2;
      o2 = r2[n2];
    }
    var a2 = 32 * n2 + I.numberOfTrailingZeros(o2);
    return a2 > e2 ? e2 : a2;
  }, t2.prototype.getNextUnset = function(t3) {
    var e2 = this.size;
    if (t3 >= e2)
      return e2;
    var r2 = this.bits, n2 = Math.floor(t3 / 32), o2 = ~r2[n2];
    o2 &= ~((1 << (31 & t3)) - 1);
    for (var i2 = r2.length; 0 === o2; ) {
      if (++n2 === i2)
        return e2;
      o2 = ~r2[n2];
    }
    var a2 = 32 * n2 + I.numberOfTrailingZeros(o2);
    return a2 > e2 ? e2 : a2;
  }, t2.prototype.setBulk = function(t3, e2) {
    this.bits[Math.floor(t3 / 32)] = e2;
  }, t2.prototype.setRange = function(t3, e2) {
    if (e2 < t3 || t3 < 0 || e2 > this.size)
      throw new l();
    if (e2 !== t3) {
      e2--;
      for (var r2 = Math.floor(t3 / 32), n2 = Math.floor(e2 / 32), o2 = this.bits, i2 = r2; i2 <= n2; i2++) {
        var a2 = (2 << (i2 < n2 ? 31 : 31 & e2)) - (1 << (i2 > r2 ? 0 : 31 & t3));
        o2[i2] |= a2;
      }
    }
  }, t2.prototype.clear = function() {
    for (var t3 = this.bits.length, e2 = this.bits, r2 = 0; r2 < t3; r2++)
      e2[r2] = 0;
  }, t2.prototype.isRange = function(t3, e2, r2) {
    if (e2 < t3 || t3 < 0 || e2 > this.size)
      throw new l();
    if (e2 === t3)
      return true;
    e2--;
    for (var n2 = Math.floor(t3 / 32), o2 = Math.floor(e2 / 32), i2 = this.bits, a2 = n2; a2 <= o2; a2++) {
      var u2 = (2 << (a2 < o2 ? 31 : 31 & e2)) - (1 << (a2 > n2 ? 0 : 31 & t3)) & 4294967295;
      if ((i2[a2] & u2) !== (r2 ? u2 : 0))
        return false;
    }
    return true;
  }, t2.prototype.appendBit = function(t3) {
    this.ensureCapacity(this.size + 1), t3 && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++;
  }, t2.prototype.appendBits = function(t3, e2) {
    if (e2 < 0 || e2 > 32)
      throw new l("Num bits must be between 0 and 32");
    this.ensureCapacity(this.size + e2);
    for (var r2 = e2; r2 > 0; r2--)
      this.appendBit(1 == (t3 >> r2 - 1 & 1));
  }, t2.prototype.appendBitArray = function(t3) {
    var e2 = t3.size;
    this.ensureCapacity(this.size + e2);
    for (var r2 = 0; r2 < e2; r2++)
      this.appendBit(t3.get(r2));
  }, t2.prototype.xor = function(t3) {
    if (this.size !== t3.size)
      throw new l("Sizes don't match");
    for (var e2 = this.bits, r2 = 0, n2 = e2.length; r2 < n2; r2++)
      e2[r2] ^= t3.bits[r2];
  }, t2.prototype.toBytes = function(t3, e2, r2, n2) {
    for (var o2 = 0; o2 < n2; o2++) {
      for (var i2 = 0, a2 = 0; a2 < 8; a2++)
        this.get(t3) && (i2 |= 1 << 7 - a2), t3++;
      e2[r2 + o2] = i2;
    }
  }, t2.prototype.getBitArray = function() {
    return this.bits;
  }, t2.prototype.reverse = function() {
    for (var t3 = new Int32Array(this.bits.length), e2 = Math.floor((this.size - 1) / 32), r2 = e2 + 1, n2 = this.bits, o2 = 0; o2 < r2; o2++) {
      var i2 = n2[o2];
      i2 = (i2 = (i2 = (i2 = (i2 = i2 >> 1 & 1431655765 | (1431655765 & i2) << 1) >> 2 & 858993459 | (858993459 & i2) << 2) >> 4 & 252645135 | (252645135 & i2) << 4) >> 8 & 16711935 | (16711935 & i2) << 8) >> 16 & 65535 | (65535 & i2) << 16, t3[e2 - o2] = i2;
    }
    if (this.size !== 32 * r2) {
      var a2 = 32 * r2 - this.size, u2 = t3[0] >>> a2;
      for (o2 = 1; o2 < r2; o2++) {
        var s2 = t3[o2];
        u2 |= s2 << 32 - a2, t3[o2 - 1] = u2, u2 = s2 >>> a2;
      }
      t3[r2 - 1] = u2;
    }
    this.bits = t3;
  }, t2.makeArray = function(t3) {
    return new Int32Array(Math.floor((t3 + 31) / 32));
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    return this.size === r2.size && C.equals(this.bits, r2.bits);
  }, t2.prototype.hashCode = function() {
    return 31 * this.size + C.hashCode(this.bits);
  }, t2.prototype.toString = function() {
    for (var t3 = "", e2 = 0, r2 = this.size; e2 < r2; e2++)
      0 == (7 & e2) && (t3 += " "), t3 += this.get(e2) ? "X" : ".";
    return t3;
  }, t2.prototype.clone = function() {
    return new t2(this.size, this.bits.slice());
  }, t2;
}();
!function(t2) {
  t2[t2.OTHER = 0] = "OTHER", t2[t2.PURE_BARCODE = 1] = "PURE_BARCODE", t2[t2.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", t2[t2.TRY_HARDER = 3] = "TRY_HARDER", t2[t2.CHARACTER_SET = 4] = "CHARACTER_SET", t2[t2.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", t2[t2.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", t2[t2.ASSUME_GS1 = 7] = "ASSUME_GS1", t2[t2.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", t2[t2.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", t2[t2.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS";
}(o || (o = {}));
var O;
var T = o;
var b = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var R = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return b(e2, t2), e2.getFormatInstance = function() {
    return new e2();
  }, e2.kind = "FormatException", e2;
}(s);
var N = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
!function(t2) {
  t2[t2.Cp437 = 0] = "Cp437", t2[t2.ISO8859_1 = 1] = "ISO8859_1", t2[t2.ISO8859_2 = 2] = "ISO8859_2", t2[t2.ISO8859_3 = 3] = "ISO8859_3", t2[t2.ISO8859_4 = 4] = "ISO8859_4", t2[t2.ISO8859_5 = 5] = "ISO8859_5", t2[t2.ISO8859_6 = 6] = "ISO8859_6", t2[t2.ISO8859_7 = 7] = "ISO8859_7", t2[t2.ISO8859_8 = 8] = "ISO8859_8", t2[t2.ISO8859_9 = 9] = "ISO8859_9", t2[t2.ISO8859_10 = 10] = "ISO8859_10", t2[t2.ISO8859_11 = 11] = "ISO8859_11", t2[t2.ISO8859_13 = 12] = "ISO8859_13", t2[t2.ISO8859_14 = 13] = "ISO8859_14", t2[t2.ISO8859_15 = 14] = "ISO8859_15", t2[t2.ISO8859_16 = 15] = "ISO8859_16", t2[t2.SJIS = 16] = "SJIS", t2[t2.Cp1250 = 17] = "Cp1250", t2[t2.Cp1251 = 18] = "Cp1251", t2[t2.Cp1252 = 19] = "Cp1252", t2[t2.Cp1256 = 20] = "Cp1256", t2[t2.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", t2[t2.UTF8 = 22] = "UTF8", t2[t2.ASCII = 23] = "ASCII", t2[t2.Big5 = 24] = "Big5", t2[t2.GB18030 = 25] = "GB18030", t2[t2.EUC_KR = 26] = "EUC_KR";
}(O || (O = {}));
var D;
var P = function() {
  function t2(e2, r2, n2) {
    for (var o2, i2, a2 = [], u2 = 3; u2 < arguments.length; u2++)
      a2[u2 - 3] = arguments[u2];
    this.valueIdentifier = e2, this.name = n2, this.values = "number" == typeof r2 ? Int32Array.from([r2]) : r2, this.otherEncodingNames = a2, t2.VALUE_IDENTIFIER_TO_ECI.set(e2, this), t2.NAME_TO_ECI.set(n2, this);
    for (var s2 = this.values, c2 = 0, f2 = s2.length; c2 !== f2; c2++) {
      var h2 = s2[c2];
      t2.VALUES_TO_ECI.set(h2, this);
    }
    try {
      for (var l2 = N(a2), d2 = l2.next(); !d2.done; d2 = l2.next()) {
        var p2 = d2.value;
        t2.NAME_TO_ECI.set(p2, this);
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
  }
  return t2.prototype.getValueIdentifier = function() {
    return this.valueIdentifier;
  }, t2.prototype.getName = function() {
    return this.name;
  }, t2.prototype.getValue = function() {
    return this.values[0];
  }, t2.getCharacterSetECIByValue = function(e2) {
    if (e2 < 0 || e2 >= 900)
      throw new R("incorect value");
    var r2 = t2.VALUES_TO_ECI.get(e2);
    if (void 0 === r2)
      throw new R("incorect value");
    return r2;
  }, t2.getCharacterSetECIByName = function(e2) {
    var r2 = t2.NAME_TO_ECI.get(e2);
    if (void 0 === r2)
      throw new R("incorect value");
    return r2;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    return this.getName() === r2.getName();
  }, t2.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map(), t2.VALUES_TO_ECI = /* @__PURE__ */ new Map(), t2.NAME_TO_ECI = /* @__PURE__ */ new Map(), t2.Cp437 = new t2(O.Cp437, Int32Array.from([0, 2]), "Cp437"), t2.ISO8859_1 = new t2(O.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), t2.ISO8859_2 = new t2(O.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), t2.ISO8859_3 = new t2(O.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), t2.ISO8859_4 = new t2(O.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), t2.ISO8859_5 = new t2(O.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), t2.ISO8859_6 = new t2(O.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), t2.ISO8859_7 = new t2(O.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), t2.ISO8859_8 = new t2(O.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), t2.ISO8859_9 = new t2(O.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), t2.ISO8859_10 = new t2(O.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), t2.ISO8859_11 = new t2(O.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), t2.ISO8859_13 = new t2(O.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), t2.ISO8859_14 = new t2(O.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), t2.ISO8859_15 = new t2(O.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), t2.ISO8859_16 = new t2(O.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), t2.SJIS = new t2(O.SJIS, 20, "SJIS", "Shift_JIS"), t2.Cp1250 = new t2(O.Cp1250, 21, "Cp1250", "windows-1250"), t2.Cp1251 = new t2(O.Cp1251, 22, "Cp1251", "windows-1251"), t2.Cp1252 = new t2(O.Cp1252, 23, "Cp1252", "windows-1252"), t2.Cp1256 = new t2(O.Cp1256, 24, "Cp1256", "windows-1256"), t2.UnicodeBigUnmarked = new t2(O.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), t2.UTF8 = new t2(O.UTF8, 26, "UTF8", "UTF-8"), t2.ASCII = new t2(O.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), t2.Big5 = new t2(O.Big5, 28, "Big5"), t2.GB18030 = new t2(O.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), t2.EUC_KR = new t2(O.EUC_KR, 30, "EUC_KR", "EUC-KR"), t2;
}();
var M = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var B = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return M(e2, t2), e2.kind = "UnsupportedOperationException", e2;
}(s);
var L = function() {
  function t2() {
  }
  return t2.decode = function(t3, e2) {
    var r2 = this.encodingName(e2);
    return this.customDecoder ? this.customDecoder(t3, r2) : "undefined" == typeof TextDecoder || this.shouldDecodeOnFallback(r2) ? this.decodeFallback(t3, r2) : new TextDecoder(r2).decode(t3);
  }, t2.shouldDecodeOnFallback = function(e2) {
    return !t2.isBrowser() && "ISO-8859-1" === e2;
  }, t2.encode = function(t3, e2) {
    var r2 = this.encodingName(e2);
    return this.customEncoder ? this.customEncoder(t3, r2) : "undefined" == typeof TextEncoder ? this.encodeFallback(t3) : new TextEncoder().encode(t3);
  }, t2.isBrowser = function() {
    return "undefined" != typeof window && "[object Window]" === {}.toString.call(window);
  }, t2.encodingName = function(t3) {
    return "string" == typeof t3 ? t3 : t3.getName();
  }, t2.encodingCharacterSet = function(t3) {
    return t3 instanceof P ? t3 : P.getCharacterSetECIByName(t3);
  }, t2.decodeFallback = function(e2, r2) {
    var n2 = this.encodingCharacterSet(r2);
    if (t2.isDecodeFallbackSupported(n2)) {
      for (var o2 = "", i2 = 0, a2 = e2.length; i2 < a2; i2++) {
        var u2 = e2[i2].toString(16);
        u2.length < 2 && (u2 = "0" + u2), o2 += "%" + u2;
      }
      return decodeURIComponent(o2);
    }
    if (n2.equals(P.UnicodeBigUnmarked))
      return String.fromCharCode.apply(null, new Uint16Array(e2.buffer));
    throw new B("Encoding " + this.encodingName(r2) + " not supported by fallback.");
  }, t2.isDecodeFallbackSupported = function(t3) {
    return t3.equals(P.UTF8) || t3.equals(P.ISO8859_1) || t3.equals(P.ASCII);
  }, t2.encodeFallback = function(t3) {
    for (var e2 = btoa(unescape(encodeURIComponent(t3))).split(""), r2 = [], n2 = 0; n2 < e2.length; n2++)
      r2.push(e2[n2].charCodeAt(0));
    return new Uint8Array(r2);
  }, t2;
}();
var F = function() {
  function t2() {
  }
  return t2.castAsNonUtf8Char = function(t3, e2) {
    void 0 === e2 && (e2 = null);
    var r2 = e2 ? e2.getName() : this.ISO88591;
    return L.decode(new Uint8Array([t3]), r2);
  }, t2.guessEncoding = function(e2, r2) {
    if (null != r2 && void 0 !== r2.get(T.CHARACTER_SET))
      return r2.get(T.CHARACTER_SET).toString();
    for (var n2 = e2.length, o2 = true, i2 = true, a2 = true, u2 = 0, s2 = 0, c2 = 0, f2 = 0, h2 = 0, l2 = 0, d2 = 0, p2 = 0, g2 = 0, y2 = 0, w2 = 0, _2 = e2.length > 3 && 239 === e2[0] && 187 === e2[1] && 191 === e2[2], v2 = 0; v2 < n2 && (o2 || i2 || a2); v2++) {
      var m2 = 255 & e2[v2];
      a2 && (u2 > 0 ? 0 == (128 & m2) ? a2 = false : u2-- : 0 != (128 & m2) && (0 == (64 & m2) ? a2 = false : (u2++, 0 == (32 & m2) ? s2++ : (u2++, 0 == (16 & m2) ? c2++ : (u2++, 0 == (8 & m2) ? f2++ : a2 = false))))), o2 && (m2 > 127 && m2 < 160 ? o2 = false : m2 > 159 && (m2 < 192 || 215 === m2 || 247 === m2) && w2++), i2 && (h2 > 0 ? m2 < 64 || 127 === m2 || m2 > 252 ? i2 = false : h2-- : 128 === m2 || 160 === m2 || m2 > 239 ? i2 = false : m2 > 160 && m2 < 224 ? (l2++, p2 = 0, ++d2 > g2 && (g2 = d2)) : m2 > 127 ? (h2++, d2 = 0, ++p2 > y2 && (y2 = p2)) : (d2 = 0, p2 = 0));
    }
    return a2 && u2 > 0 && (a2 = false), i2 && h2 > 0 && (i2 = false), a2 && (_2 || s2 + c2 + f2 > 0) ? t2.UTF8 : i2 && (t2.ASSUME_SHIFT_JIS || g2 >= 3 || y2 >= 3) ? t2.SHIFT_JIS : o2 && i2 ? 2 === g2 && 2 === l2 || 10 * w2 >= n2 ? t2.SHIFT_JIS : t2.ISO88591 : o2 ? t2.ISO88591 : i2 ? t2.SHIFT_JIS : a2 ? t2.UTF8 : t2.PLATFORM_DEFAULT_ENCODING;
  }, t2.format = function(t3) {
    for (var e2 = [], r2 = 1; r2 < arguments.length; r2++)
      e2[r2 - 1] = arguments[r2];
    var n2 = -1;
    function o2(t4, r3, o3, i3, a2, u2) {
      if ("%%" === t4)
        return "%";
      if (void 0 !== e2[++n2]) {
        t4 = i3 ? parseInt(i3.substr(1)) : void 0;
        var s2, c2 = a2 ? parseInt(a2.substr(1)) : void 0;
        switch (u2) {
          case "s":
            s2 = e2[n2];
            break;
          case "c":
            s2 = e2[n2][0];
            break;
          case "f":
            s2 = parseFloat(e2[n2]).toFixed(t4);
            break;
          case "p":
            s2 = parseFloat(e2[n2]).toPrecision(t4);
            break;
          case "e":
            s2 = parseFloat(e2[n2]).toExponential(t4);
            break;
          case "x":
            s2 = parseInt(e2[n2]).toString(c2 || 16);
            break;
          case "d":
            s2 = parseFloat(parseInt(e2[n2], c2 || 10).toPrecision(t4)).toFixed(0);
        }
        s2 = "object" == typeof s2 ? JSON.stringify(s2) : (+s2).toString(c2);
        for (var f2 = parseInt(o3), h2 = o3 && o3[0] + "" == "0" ? "0" : " "; s2.length < f2; )
          s2 = void 0 !== r3 ? s2 + h2 : h2 + s2;
        return s2;
      }
    }
    var i2 = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
    return t3.replace(i2, o2);
  }, t2.getBytes = function(t3, e2) {
    return L.encode(t3, e2);
  }, t2.getCharCode = function(t3, e2) {
    return void 0 === e2 && (e2 = 0), t3.charCodeAt(e2);
  }, t2.getCharAt = function(t3) {
    return String.fromCharCode(t3);
  }, t2.SHIFT_JIS = P.SJIS.getName(), t2.GB2312 = "GB2312", t2.ISO88591 = P.ISO8859_1.getName(), t2.EUC_JP = "EUC_JP", t2.UTF8 = P.UTF8.getName(), t2.PLATFORM_DEFAULT_ENCODING = t2.UTF8, t2.ASSUME_SHIFT_JIS = false, t2;
}();
var k = function() {
  function t2(t3) {
    void 0 === t3 && (t3 = ""), this.value = t3;
  }
  return t2.prototype.enableDecoding = function(t3) {
    return this.encoding = t3, this;
  }, t2.prototype.append = function(t3) {
    return "string" == typeof t3 ? this.value += t3.toString() : this.encoding ? this.value += F.castAsNonUtf8Char(t3, this.encoding) : this.value += String.fromCharCode(t3), this;
  }, t2.prototype.appendChars = function(t3, e2, r2) {
    for (var n2 = e2; e2 < e2 + r2; n2++)
      this.append(t3[n2]);
    return this;
  }, t2.prototype.length = function() {
    return this.value.length;
  }, t2.prototype.charAt = function(t3) {
    return this.value.charAt(t3);
  }, t2.prototype.deleteCharAt = function(t3) {
    this.value = this.value.substr(0, t3) + this.value.substring(t3 + 1);
  }, t2.prototype.setCharAt = function(t3, e2) {
    this.value = this.value.substr(0, t3) + e2 + this.value.substr(t3 + 1);
  }, t2.prototype.substring = function(t3, e2) {
    return this.value.substring(t3, e2);
  }, t2.prototype.setLengthToZero = function() {
    this.value = "";
  }, t2.prototype.toString = function() {
    return this.value;
  }, t2.prototype.insert = function(t3, e2) {
    this.value = this.value.substr(0, t3) + e2 + this.value.substr(t3 + e2.length);
  }, t2;
}();
var x = function() {
  function t2(t3, e2, r2, n2) {
    if (this.width = t3, this.height = e2, this.rowSize = r2, this.bits = n2, null == e2 && (e2 = t3), this.height = e2, t3 < 1 || e2 < 1)
      throw new l("Both dimensions must be greater than 0");
    null == r2 && (r2 = Math.floor((t3 + 31) / 32)), this.rowSize = r2, null == n2 && (this.bits = new Int32Array(this.rowSize * this.height));
  }
  return t2.parseFromBooleanArray = function(e2) {
    for (var r2 = e2.length, n2 = e2[0].length, o2 = new t2(n2, r2), i2 = 0; i2 < r2; i2++)
      for (var a2 = e2[i2], u2 = 0; u2 < n2; u2++)
        a2[u2] && o2.set(u2, i2);
    return o2;
  }, t2.parseFromString = function(e2, r2, n2) {
    if (null === e2)
      throw new l("stringRepresentation cannot be null");
    for (var o2 = new Array(e2.length), i2 = 0, a2 = 0, u2 = -1, s2 = 0, c2 = 0; c2 < e2.length; )
      if ("\n" === e2.charAt(c2) || "\r" === e2.charAt(c2)) {
        if (i2 > a2) {
          if (-1 === u2)
            u2 = i2 - a2;
          else if (i2 - a2 !== u2)
            throw new l("row lengths do not match");
          a2 = i2, s2++;
        }
        c2++;
      } else if (e2.substring(c2, c2 + r2.length) === r2)
        c2 += r2.length, o2[i2] = true, i2++;
      else {
        if (e2.substring(c2, c2 + n2.length) !== n2)
          throw new l("illegal character encountered: " + e2.substring(c2));
        c2 += n2.length, o2[i2] = false, i2++;
      }
    if (i2 > a2) {
      if (-1 === u2)
        u2 = i2 - a2;
      else if (i2 - a2 !== u2)
        throw new l("row lengths do not match");
      s2++;
    }
    for (var f2 = new t2(u2, s2), h2 = 0; h2 < i2; h2++)
      o2[h2] && f2.set(Math.floor(h2 % u2), Math.floor(h2 / u2));
    return f2;
  }, t2.prototype.get = function(t3, e2) {
    var r2 = e2 * this.rowSize + Math.floor(t3 / 32);
    return 0 != (this.bits[r2] >>> (31 & t3) & 1);
  }, t2.prototype.set = function(t3, e2) {
    var r2 = e2 * this.rowSize + Math.floor(t3 / 32);
    this.bits[r2] |= 1 << (31 & t3) & 4294967295;
  }, t2.prototype.unset = function(t3, e2) {
    var r2 = e2 * this.rowSize + Math.floor(t3 / 32);
    this.bits[r2] &= ~(1 << (31 & t3) & 4294967295);
  }, t2.prototype.flip = function(t3, e2) {
    var r2 = e2 * this.rowSize + Math.floor(t3 / 32);
    this.bits[r2] ^= 1 << (31 & t3) & 4294967295;
  }, t2.prototype.xor = function(t3) {
    if (this.width !== t3.getWidth() || this.height !== t3.getHeight() || this.rowSize !== t3.getRowSize())
      throw new l("input matrix dimensions do not match");
    for (var e2 = new S(Math.floor(this.width / 32) + 1), r2 = this.rowSize, n2 = this.bits, o2 = 0, i2 = this.height; o2 < i2; o2++)
      for (var a2 = o2 * r2, u2 = t3.getRow(o2, e2).getBitArray(), s2 = 0; s2 < r2; s2++)
        n2[a2 + s2] ^= u2[s2];
  }, t2.prototype.clear = function() {
    for (var t3 = this.bits, e2 = t3.length, r2 = 0; r2 < e2; r2++)
      t3[r2] = 0;
  }, t2.prototype.setRegion = function(t3, e2, r2, n2) {
    if (e2 < 0 || t3 < 0)
      throw new l("Left and top must be nonnegative");
    if (n2 < 1 || r2 < 1)
      throw new l("Height and width must be at least 1");
    var o2 = t3 + r2, i2 = e2 + n2;
    if (i2 > this.height || o2 > this.width)
      throw new l("The region must fit inside the matrix");
    for (var a2 = this.rowSize, u2 = this.bits, s2 = e2; s2 < i2; s2++)
      for (var c2 = s2 * a2, f2 = t3; f2 < o2; f2++)
        u2[c2 + Math.floor(f2 / 32)] |= 1 << (31 & f2) & 4294967295;
  }, t2.prototype.getRow = function(t3, e2) {
    null == e2 || e2.getSize() < this.width ? e2 = new S(this.width) : e2.clear();
    for (var r2 = this.rowSize, n2 = this.bits, o2 = t3 * r2, i2 = 0; i2 < r2; i2++)
      e2.setBulk(32 * i2, n2[o2 + i2]);
    return e2;
  }, t2.prototype.setRow = function(t3, e2) {
    w.arraycopy(e2.getBitArray(), 0, this.bits, t3 * this.rowSize, this.rowSize);
  }, t2.prototype.rotate180 = function() {
    for (var t3 = this.getWidth(), e2 = this.getHeight(), r2 = new S(t3), n2 = new S(t3), o2 = 0, i2 = Math.floor((e2 + 1) / 2); o2 < i2; o2++)
      r2 = this.getRow(o2, r2), n2 = this.getRow(e2 - 1 - o2, n2), r2.reverse(), n2.reverse(), this.setRow(o2, n2), this.setRow(e2 - 1 - o2, r2);
  }, t2.prototype.getEnclosingRectangle = function() {
    for (var t3 = this.width, e2 = this.height, r2 = this.rowSize, n2 = this.bits, o2 = t3, i2 = e2, a2 = -1, u2 = -1, s2 = 0; s2 < e2; s2++)
      for (var c2 = 0; c2 < r2; c2++) {
        var f2 = n2[s2 * r2 + c2];
        if (0 !== f2) {
          if (s2 < i2 && (i2 = s2), s2 > u2 && (u2 = s2), 32 * c2 < o2) {
            for (var h2 = 0; 0 == (f2 << 31 - h2 & 4294967295); )
              h2++;
            32 * c2 + h2 < o2 && (o2 = 32 * c2 + h2);
          }
          if (32 * c2 + 31 > a2) {
            for (h2 = 31; f2 >>> h2 == 0; )
              h2--;
            32 * c2 + h2 > a2 && (a2 = 32 * c2 + h2);
          }
        }
      }
    return a2 < o2 || u2 < i2 ? null : Int32Array.from([o2, i2, a2 - o2 + 1, u2 - i2 + 1]);
  }, t2.prototype.getTopLeftOnBit = function() {
    for (var t3 = this.rowSize, e2 = this.bits, r2 = 0; r2 < e2.length && 0 === e2[r2]; )
      r2++;
    if (r2 === e2.length)
      return null;
    for (var n2 = r2 / t3, o2 = r2 % t3 * 32, i2 = e2[r2], a2 = 0; 0 == (i2 << 31 - a2 & 4294967295); )
      a2++;
    return o2 += a2, Int32Array.from([o2, n2]);
  }, t2.prototype.getBottomRightOnBit = function() {
    for (var t3 = this.rowSize, e2 = this.bits, r2 = e2.length - 1; r2 >= 0 && 0 === e2[r2]; )
      r2--;
    if (r2 < 0)
      return null;
    for (var n2 = Math.floor(r2 / t3), o2 = 32 * Math.floor(r2 % t3), i2 = e2[r2], a2 = 31; i2 >>> a2 == 0; )
      a2--;
    return o2 += a2, Int32Array.from([o2, n2]);
  }, t2.prototype.getWidth = function() {
    return this.width;
  }, t2.prototype.getHeight = function() {
    return this.height;
  }, t2.prototype.getRowSize = function() {
    return this.rowSize;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    return this.width === r2.width && this.height === r2.height && this.rowSize === r2.rowSize && C.equals(this.bits, r2.bits);
  }, t2.prototype.hashCode = function() {
    var t3 = this.width;
    return t3 = 31 * (t3 = 31 * (t3 = 31 * (t3 = 31 * t3 + this.width) + this.height) + this.rowSize) + C.hashCode(this.bits);
  }, t2.prototype.toString = function(t3, e2, r2) {
    return void 0 === t3 && (t3 = "X "), void 0 === e2 && (e2 = "  "), void 0 === r2 && (r2 = "\n"), this.buildToString(t3, e2, r2);
  }, t2.prototype.buildToString = function(t3, e2, r2) {
    for (var n2 = new k(), o2 = 0, i2 = this.height; o2 < i2; o2++) {
      for (var a2 = 0, u2 = this.width; a2 < u2; a2++)
        n2.append(this.get(a2, o2) ? t3 : e2);
      n2.append(r2);
    }
    return n2.toString();
  }, t2.prototype.clone = function() {
    return new t2(this.width, this.height, this.rowSize, this.bits.slice());
  }, t2;
}();
var V = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var U = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return V(e2, t2), e2.getNotFoundInstance = function() {
    return new e2();
  }, e2.kind = "NotFoundException", e2;
}(s);
var H = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var G = function(t2) {
  function e2(r2) {
    var n2 = t2.call(this, r2) || this;
    return n2.luminances = e2.EMPTY, n2.buckets = new Int32Array(e2.LUMINANCE_BUCKETS), n2;
  }
  return H(e2, t2), e2.prototype.getBlackRow = function(t3, r2) {
    var n2 = this.getLuminanceSource(), o2 = n2.getWidth();
    null == r2 || r2.getSize() < o2 ? r2 = new S(o2) : r2.clear(), this.initArrays(o2);
    for (var i2 = n2.getRow(t3, this.luminances), a2 = this.buckets, u2 = 0; u2 < o2; u2++)
      a2[(255 & i2[u2]) >> e2.LUMINANCE_SHIFT]++;
    var s2 = e2.estimateBlackPoint(a2);
    if (o2 < 3)
      for (u2 = 0; u2 < o2; u2++)
        (255 & i2[u2]) < s2 && r2.set(u2);
    else {
      var c2 = 255 & i2[0], f2 = 255 & i2[1];
      for (u2 = 1; u2 < o2 - 1; u2++) {
        var h2 = 255 & i2[u2 + 1];
        (4 * f2 - c2 - h2) / 2 < s2 && r2.set(u2), c2 = f2, f2 = h2;
      }
    }
    return r2;
  }, e2.prototype.getBlackMatrix = function() {
    var t3 = this.getLuminanceSource(), r2 = t3.getWidth(), n2 = t3.getHeight(), o2 = new x(r2, n2);
    this.initArrays(r2);
    for (var i2 = this.buckets, a2 = 1; a2 < 5; a2++)
      for (var u2 = Math.floor(n2 * a2 / 5), s2 = t3.getRow(u2, this.luminances), c2 = Math.floor(4 * r2 / 5), f2 = Math.floor(r2 / 5); f2 < c2; f2++) {
        i2[(255 & s2[f2]) >> e2.LUMINANCE_SHIFT]++;
      }
    var h2 = e2.estimateBlackPoint(i2), l2 = t3.getMatrix();
    for (a2 = 0; a2 < n2; a2++) {
      var d2 = a2 * r2;
      for (f2 = 0; f2 < r2; f2++) {
        (255 & l2[d2 + f2]) < h2 && o2.set(f2, a2);
      }
    }
    return o2;
  }, e2.prototype.createBinarizer = function(t3) {
    return new e2(t3);
  }, e2.prototype.initArrays = function(t3) {
    this.luminances.length < t3 && (this.luminances = new Uint8ClampedArray(t3));
    for (var r2 = this.buckets, n2 = 0; n2 < e2.LUMINANCE_BUCKETS; n2++)
      r2[n2] = 0;
  }, e2.estimateBlackPoint = function(t3) {
    for (var r2 = t3.length, n2 = 0, o2 = 0, i2 = 0, a2 = 0; a2 < r2; a2++)
      t3[a2] > i2 && (o2 = a2, i2 = t3[a2]), t3[a2] > n2 && (n2 = t3[a2]);
    var u2 = 0, s2 = 0;
    for (a2 = 0; a2 < r2; a2++) {
      var c2 = a2 - o2;
      (d2 = t3[a2] * c2 * c2) > s2 && (u2 = a2, s2 = d2);
    }
    if (o2 > u2) {
      var f2 = o2;
      o2 = u2, u2 = f2;
    }
    if (u2 - o2 <= r2 / 16)
      throw new U();
    var h2 = u2 - 1, l2 = -1;
    for (a2 = u2 - 1; a2 > o2; a2--) {
      var d2, p2 = a2 - o2;
      (d2 = p2 * p2 * (u2 - a2) * (n2 - t3[a2])) > l2 && (h2 = a2, l2 = d2);
    }
    return h2 << e2.LUMINANCE_SHIFT;
  }, e2.LUMINANCE_BITS = 5, e2.LUMINANCE_SHIFT = 8 - e2.LUMINANCE_BITS, e2.LUMINANCE_BUCKETS = 1 << e2.LUMINANCE_BITS, e2.EMPTY = Uint8ClampedArray.from([0]), e2;
}(y);
var X = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var W = function(t2) {
  function e2(e3) {
    var r2 = t2.call(this, e3) || this;
    return r2.matrix = null, r2;
  }
  return X(e2, t2), e2.prototype.getBlackMatrix = function() {
    if (null !== this.matrix)
      return this.matrix;
    var r2 = this.getLuminanceSource(), n2 = r2.getWidth(), o2 = r2.getHeight();
    if (n2 >= e2.MINIMUM_DIMENSION && o2 >= e2.MINIMUM_DIMENSION) {
      var i2 = r2.getMatrix(), a2 = n2 >> e2.BLOCK_SIZE_POWER;
      0 != (n2 & e2.BLOCK_SIZE_MASK) && a2++;
      var u2 = o2 >> e2.BLOCK_SIZE_POWER;
      0 != (o2 & e2.BLOCK_SIZE_MASK) && u2++;
      var s2 = e2.calculateBlackPoints(i2, a2, u2, n2, o2), c2 = new x(n2, o2);
      e2.calculateThresholdForBlock(i2, a2, u2, n2, o2, s2, c2), this.matrix = c2;
    } else
      this.matrix = t2.prototype.getBlackMatrix.call(this);
    return this.matrix;
  }, e2.prototype.createBinarizer = function(t3) {
    return new e2(t3);
  }, e2.calculateThresholdForBlock = function(t3, r2, n2, o2, i2, a2, u2) {
    for (var s2 = i2 - e2.BLOCK_SIZE, c2 = o2 - e2.BLOCK_SIZE, f2 = 0; f2 < n2; f2++) {
      var h2 = f2 << e2.BLOCK_SIZE_POWER;
      h2 > s2 && (h2 = s2);
      for (var l2 = e2.cap(f2, 2, n2 - 3), d2 = 0; d2 < r2; d2++) {
        var p2 = d2 << e2.BLOCK_SIZE_POWER;
        p2 > c2 && (p2 = c2);
        for (var g2 = e2.cap(d2, 2, r2 - 3), y2 = 0, w2 = -2; w2 <= 2; w2++) {
          var _2 = a2[l2 + w2];
          y2 += _2[g2 - 2] + _2[g2 - 1] + _2[g2] + _2[g2 + 1] + _2[g2 + 2];
        }
        var v2 = y2 / 25;
        e2.thresholdBlock(t3, p2, h2, v2, o2, u2);
      }
    }
  }, e2.cap = function(t3, e3, r2) {
    return t3 < e3 ? e3 : t3 > r2 ? r2 : t3;
  }, e2.thresholdBlock = function(t3, r2, n2, o2, i2, a2) {
    for (var u2 = 0, s2 = n2 * i2 + r2; u2 < e2.BLOCK_SIZE; u2++, s2 += i2)
      for (var c2 = 0; c2 < e2.BLOCK_SIZE; c2++)
        (255 & t3[s2 + c2]) <= o2 && a2.set(r2 + c2, n2 + u2);
  }, e2.calculateBlackPoints = function(t3, r2, n2, o2, i2) {
    for (var a2 = i2 - e2.BLOCK_SIZE, u2 = o2 - e2.BLOCK_SIZE, s2 = new Array(n2), c2 = 0; c2 < n2; c2++) {
      s2[c2] = new Int32Array(r2);
      var f2 = c2 << e2.BLOCK_SIZE_POWER;
      f2 > a2 && (f2 = a2);
      for (var h2 = 0; h2 < r2; h2++) {
        var l2 = h2 << e2.BLOCK_SIZE_POWER;
        l2 > u2 && (l2 = u2);
        for (var d2 = 0, p2 = 255, g2 = 0, y2 = 0, w2 = f2 * o2 + l2; y2 < e2.BLOCK_SIZE; y2++, w2 += o2) {
          for (var _2 = 0; _2 < e2.BLOCK_SIZE; _2++) {
            var v2 = 255 & t3[w2 + _2];
            d2 += v2, v2 < p2 && (p2 = v2), v2 > g2 && (g2 = v2);
          }
          if (g2 - p2 > e2.MIN_DYNAMIC_RANGE)
            for (y2++, w2 += o2; y2 < e2.BLOCK_SIZE; y2++, w2 += o2)
              for (_2 = 0; _2 < e2.BLOCK_SIZE; _2++)
                d2 += 255 & t3[w2 + _2];
        }
        var m2 = d2 >> 2 * e2.BLOCK_SIZE_POWER;
        if (g2 - p2 <= e2.MIN_DYNAMIC_RANGE && (m2 = p2 / 2, c2 > 0 && h2 > 0)) {
          var A2 = (s2[c2 - 1][h2] + 2 * s2[c2][h2 - 1] + s2[c2 - 1][h2 - 1]) / 4;
          p2 < A2 && (m2 = A2);
        }
        s2[c2][h2] = m2;
      }
    }
    return s2;
  }, e2.BLOCK_SIZE_POWER = 3, e2.BLOCK_SIZE = 1 << e2.BLOCK_SIZE_POWER, e2.BLOCK_SIZE_MASK = e2.BLOCK_SIZE - 1, e2.MINIMUM_DIMENSION = 5 * e2.BLOCK_SIZE, e2.MIN_DYNAMIC_RANGE = 24, e2;
}(G);
var j = function() {
  function t2(t3, e2) {
    this.width = t3, this.height = e2;
  }
  return t2.prototype.getWidth = function() {
    return this.width;
  }, t2.prototype.getHeight = function() {
    return this.height;
  }, t2.prototype.isCropSupported = function() {
    return false;
  }, t2.prototype.crop = function(t3, e2, r2, n2) {
    throw new B("This luminance source does not support cropping.");
  }, t2.prototype.isRotateSupported = function() {
    return false;
  }, t2.prototype.rotateCounterClockwise = function() {
    throw new B("This luminance source does not support rotation by 90 degrees.");
  }, t2.prototype.rotateCounterClockwise45 = function() {
    throw new B("This luminance source does not support rotation by 45 degrees.");
  }, t2.prototype.toString = function() {
    for (var t3 = new Uint8ClampedArray(this.width), e2 = new k(), r2 = 0; r2 < this.height; r2++) {
      for (var n2 = this.getRow(r2, t3), o2 = 0; o2 < this.width; o2++) {
        var i2 = 255 & n2[o2], a2 = void 0;
        a2 = i2 < 64 ? "#" : i2 < 128 ? "+" : i2 < 192 ? "." : " ", e2.append(a2);
      }
      e2.append("\n");
    }
    return e2.toString();
  }, t2;
}();
var z = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Y = function(t2) {
  function e2(e3) {
    var r2 = t2.call(this, e3.getWidth(), e3.getHeight()) || this;
    return r2.delegate = e3, r2;
  }
  return z(e2, t2), e2.prototype.getRow = function(t3, e3) {
    for (var r2 = this.delegate.getRow(t3, e3), n2 = this.getWidth(), o2 = 0; o2 < n2; o2++)
      r2[o2] = 255 - (255 & r2[o2]);
    return r2;
  }, e2.prototype.getMatrix = function() {
    for (var t3 = this.delegate.getMatrix(), e3 = this.getWidth() * this.getHeight(), r2 = new Uint8ClampedArray(e3), n2 = 0; n2 < e3; n2++)
      r2[n2] = 255 - (255 & t3[n2]);
    return r2;
  }, e2.prototype.isCropSupported = function() {
    return this.delegate.isCropSupported();
  }, e2.prototype.crop = function(t3, r2, n2, o2) {
    return new e2(this.delegate.crop(t3, r2, n2, o2));
  }, e2.prototype.isRotateSupported = function() {
    return this.delegate.isRotateSupported();
  }, e2.prototype.invert = function() {
    return this.delegate;
  }, e2.prototype.rotateCounterClockwise = function() {
    return new e2(this.delegate.rotateCounterClockwise());
  }, e2.prototype.rotateCounterClockwise45 = function() {
    return new e2(this.delegate.rotateCounterClockwise45());
  }, e2;
}(j);
var Z = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var K = function(t2) {
  function e2(r2) {
    var n2 = t2.call(this, r2.width, r2.height) || this;
    return n2.canvas = r2, n2.tempCanvasElement = null, n2.buffer = e2.makeBufferFromCanvasImageData(r2), n2;
  }
  return Z(e2, t2), e2.makeBufferFromCanvasImageData = function(t3) {
    var r2 = t3.getContext("2d").getImageData(0, 0, t3.width, t3.height);
    return e2.toGrayscaleBuffer(r2.data, t3.width, t3.height);
  }, e2.toGrayscaleBuffer = function(t3, e3, r2) {
    for (var n2 = new Uint8ClampedArray(e3 * r2), o2 = 0, i2 = 0, a2 = t3.length; o2 < a2; o2 += 4, i2++) {
      var u2 = void 0;
      if (0 === t3[o2 + 3])
        u2 = 255;
      else
        u2 = 306 * t3[o2] + 601 * t3[o2 + 1] + 117 * t3[o2 + 2] + 512 >> 10;
      n2[i2] = u2;
    }
    return n2;
  }, e2.prototype.getRow = function(t3, e3) {
    if (t3 < 0 || t3 >= this.getHeight())
      throw new l("Requested row is outside the image: " + t3);
    var r2 = this.getWidth(), n2 = t3 * r2;
    return null === e3 ? e3 = this.buffer.slice(n2, n2 + r2) : (e3.length < r2 && (e3 = new Uint8ClampedArray(r2)), e3.set(this.buffer.slice(n2, n2 + r2))), e3;
  }, e2.prototype.getMatrix = function() {
    return this.buffer;
  }, e2.prototype.isCropSupported = function() {
    return true;
  }, e2.prototype.crop = function(e3, r2, n2, o2) {
    return t2.prototype.crop.call(this, e3, r2, n2, o2), this;
  }, e2.prototype.isRotateSupported = function() {
    return true;
  }, e2.prototype.rotateCounterClockwise = function() {
    return this.rotate(-90), this;
  }, e2.prototype.rotateCounterClockwise45 = function() {
    return this.rotate(-45), this;
  }, e2.prototype.getTempCanvasElement = function() {
    if (null === this.tempCanvasElement) {
      var t3 = this.canvas.ownerDocument.createElement("canvas");
      t3.width = this.canvas.width, t3.height = this.canvas.height, this.tempCanvasElement = t3;
    }
    return this.tempCanvasElement;
  }, e2.prototype.rotate = function(t3) {
    var r2 = this.getTempCanvasElement(), n2 = r2.getContext("2d"), o2 = t3 * e2.DEGREE_TO_RADIANS, i2 = this.canvas.width, a2 = this.canvas.height, u2 = Math.ceil(Math.abs(Math.cos(o2)) * i2 + Math.abs(Math.sin(o2)) * a2), s2 = Math.ceil(Math.abs(Math.sin(o2)) * i2 + Math.abs(Math.cos(o2)) * a2);
    return r2.width = u2, r2.height = s2, n2.translate(u2 / 2, s2 / 2), n2.rotate(o2), n2.drawImage(this.canvas, i2 / -2, a2 / -2), this.buffer = e2.makeBufferFromCanvasImageData(r2), this;
  }, e2.prototype.invert = function() {
    return new Y(this);
  }, e2.DEGREE_TO_RADIANS = Math.PI / 180, e2;
}(j);
var q = function() {
  function t2(t3, e2, r2) {
    this.deviceId = t3, this.label = e2, this.kind = "videoinput", this.groupId = r2 || void 0;
  }
  return t2.prototype.toJSON = function() {
    return { kind: this.kind, groupId: this.groupId, deviceId: this.deviceId, label: this.label };
  }, t2;
}();
var Q = function(t2, e2, r2, n2) {
  return new (r2 || (r2 = Promise))(function(o2, i2) {
    function a2(t3) {
      try {
        s2(n2.next(t3));
      } catch (t4) {
        i2(t4);
      }
    }
    function u2(t3) {
      try {
        s2(n2.throw(t3));
      } catch (t4) {
        i2(t4);
      }
    }
    function s2(t3) {
      var e3;
      t3.done ? o2(t3.value) : (e3 = t3.value, e3 instanceof r2 ? e3 : new r2(function(t4) {
        t4(e3);
      })).then(a2, u2);
    }
    s2((n2 = n2.apply(t2, e2 || [])).next());
  });
};
var J = function(t2, e2) {
  var r2, n2, o2, i2, a2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return i2 = { next: u2(0), throw: u2(1), return: u2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
    return this;
  }), i2;
  function u2(i3) {
    return function(u3) {
      return function(i4) {
        if (r2)
          throw new TypeError("Generator is already executing.");
        for (; a2; )
          try {
            if (r2 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
              return o2;
            switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
              case 0:
              case 1:
                o2 = i4;
                break;
              case 4:
                return a2.label++, { value: i4[1], done: false };
              case 5:
                a2.label++, n2 = i4[1], i4 = [0];
                continue;
              case 7:
                i4 = a2.ops.pop(), a2.trys.pop();
                continue;
              default:
                if (!(o2 = a2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                  a2 = 0;
                  continue;
                }
                if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                  a2.label = i4[1];
                  break;
                }
                if (6 === i4[0] && a2.label < o2[1]) {
                  a2.label = o2[1], o2 = i4;
                  break;
                }
                if (o2 && a2.label < o2[2]) {
                  a2.label = o2[2], a2.ops.push(i4);
                  break;
                }
                o2[2] && a2.ops.pop(), a2.trys.pop();
                continue;
            }
            i4 = e2.call(t2, a2);
          } catch (t3) {
            i4 = [6, t3], n2 = 0;
          } finally {
            r2 = o2 = 0;
          }
        if (5 & i4[0])
          throw i4[1];
        return { value: i4[0] ? i4[1] : void 0, done: true };
      }([i3, u3]);
    };
  }
};
var $ = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var tt = function() {
  function t2(t3, e2, r2) {
    void 0 === e2 && (e2 = 500), this.reader = t3, this.timeBetweenScansMillis = e2, this._hints = r2, this._stopContinuousDecode = false, this._stopAsyncDecode = false, this._timeBetweenDecodingAttempts = 0;
  }
  return Object.defineProperty(t2.prototype, "hasNavigator", { get: function() {
    return "undefined" != typeof navigator;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isMediaDevicesSuported", { get: function() {
    return this.hasNavigator && !!navigator.mediaDevices;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "canEnumerateDevices", { get: function() {
    return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices);
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "timeBetweenDecodingAttempts", { get: function() {
    return this._timeBetweenDecodingAttempts;
  }, set: function(t3) {
    this._timeBetweenDecodingAttempts = t3 < 0 ? 0 : t3;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "hints", { get: function() {
    return this._hints;
  }, set: function(t3) {
    this._hints = t3 || null;
  }, enumerable: false, configurable: true }), t2.prototype.listVideoInputDevices = function() {
    return Q(this, void 0, void 0, function() {
      var t3, e2, r2, n2, o2, i2, a2, u2, s2, c2, f2, h2;
      return J(this, function(l2) {
        switch (l2.label) {
          case 0:
            if (!this.hasNavigator)
              throw new Error("Can't enumerate devices, navigator is not present.");
            if (!this.canEnumerateDevices)
              throw new Error("Can't enumerate devices, method not supported.");
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 1:
            t3 = l2.sent(), e2 = [];
            try {
              for (r2 = $(t3), n2 = r2.next(); !n2.done; n2 = r2.next())
                o2 = n2.value, "videoinput" === (i2 = "video" === o2.kind ? "videoinput" : o2.kind) && (a2 = o2.deviceId || o2.id, u2 = o2.label || "Video device " + (e2.length + 1), s2 = o2.groupId, c2 = { deviceId: a2, label: u2, kind: i2, groupId: s2 }, e2.push(c2));
            } catch (t4) {
              f2 = { error: t4 };
            } finally {
              try {
                n2 && !n2.done && (h2 = r2.return) && h2.call(r2);
              } finally {
                if (f2)
                  throw f2.error;
              }
            }
            return [2, e2];
        }
      });
    });
  }, t2.prototype.getVideoInputDevices = function() {
    return Q(this, void 0, void 0, function() {
      return J(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            return [2, t3.sent().map(function(t4) {
              return new q(t4.deviceId, t4.label);
            })];
        }
      });
    });
  }, t2.prototype.findDeviceById = function(t3) {
    return Q(this, void 0, void 0, function() {
      var e2;
      return J(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            return (e2 = r2.sent()) ? [2, e2.find(function(e3) {
              return e3.deviceId === t3;
            })] : [2, null];
        }
      });
    });
  }, t2.prototype.decodeFromInputVideoDevice = function(t3, e2) {
    return Q(this, void 0, void 0, function() {
      return J(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.decodeOnceFromVideoDevice(t3, e2)];
          case 1:
            return [2, r2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromVideoDevice = function(t3, e2) {
    return Q(this, void 0, void 0, function() {
      var r2;
      return J(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.reset(), r2 = { video: t3 ? { deviceId: { exact: t3 } } : { facingMode: "environment" } }, [4, this.decodeOnceFromConstraints(r2, e2)];
          case 1:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromConstraints = function(t3, e2) {
    return Q(this, void 0, void 0, function() {
      var r2;
      return J(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t3)];
          case 1:
            return r2 = n2.sent(), [4, this.decodeOnceFromStream(r2, e2)];
          case 2:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromStream = function(t3, e2) {
    return Q(this, void 0, void 0, function() {
      var r2;
      return J(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.reset(), [4, this.attachStreamToVideo(t3, e2)];
          case 1:
            return r2 = n2.sent(), [4, this.decodeOnce(r2)];
          case 2:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromInputVideoDeviceContinuously = function(t3, e2, r2) {
    return Q(this, void 0, void 0, function() {
      return J(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.decodeFromVideoDevice(t3, e2, r2)];
          case 1:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromVideoDevice = function(t3, e2, r2) {
    return Q(this, void 0, void 0, function() {
      var n2;
      return J(this, function(o2) {
        switch (o2.label) {
          case 0:
            return n2 = { video: t3 ? { deviceId: { exact: t3 } } : { facingMode: "environment" } }, [4, this.decodeFromConstraints(n2, e2, r2)];
          case 1:
            return [2, o2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromConstraints = function(t3, e2, r2) {
    return Q(this, void 0, void 0, function() {
      var n2;
      return J(this, function(o2) {
        switch (o2.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t3)];
          case 1:
            return n2 = o2.sent(), [4, this.decodeFromStream(n2, e2, r2)];
          case 2:
            return [2, o2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromStream = function(t3, e2, r2) {
    return Q(this, void 0, void 0, function() {
      var n2;
      return J(this, function(o2) {
        switch (o2.label) {
          case 0:
            return this.reset(), [4, this.attachStreamToVideo(t3, e2)];
          case 1:
            return n2 = o2.sent(), [4, this.decodeContinuously(n2, r2)];
          case 2:
            return [2, o2.sent()];
        }
      });
    });
  }, t2.prototype.stopAsyncDecode = function() {
    this._stopAsyncDecode = true;
  }, t2.prototype.stopContinuousDecode = function() {
    this._stopContinuousDecode = true;
  }, t2.prototype.attachStreamToVideo = function(t3, e2) {
    return Q(this, void 0, void 0, function() {
      var r2;
      return J(this, function(n2) {
        switch (n2.label) {
          case 0:
            return r2 = this.prepareVideoElement(e2), this.addVideoSource(r2, t3), this.videoElement = r2, this.stream = t3, [4, this.playVideoOnLoadAsync(r2)];
          case 1:
            return n2.sent(), [2, r2];
        }
      });
    });
  }, t2.prototype.playVideoOnLoadAsync = function(t3) {
    var e2 = this;
    return new Promise(function(r2, n2) {
      return e2.playVideoOnLoad(t3, function() {
        return r2();
      });
    });
  }, t2.prototype.playVideoOnLoad = function(t3, e2) {
    var r2 = this;
    this.videoEndedListener = function() {
      return r2.stopStreams();
    }, this.videoCanPlayListener = function() {
      return r2.tryPlayVideo(t3);
    }, t3.addEventListener("ended", this.videoEndedListener), t3.addEventListener("canplay", this.videoCanPlayListener), t3.addEventListener("playing", e2), this.tryPlayVideo(t3);
  }, t2.prototype.isVideoPlaying = function(t3) {
    return t3.currentTime > 0 && !t3.paused && !t3.ended && t3.readyState > 2;
  }, t2.prototype.tryPlayVideo = function(t3) {
    return Q(this, void 0, void 0, function() {
      return J(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (this.isVideoPlaying(t3))
              return console.warn("Trying to play video that is already playing."), [2];
            e2.label = 1;
          case 1:
            return e2.trys.push([1, 3, , 4]), [4, t3.play()];
          case 2:
            return e2.sent(), [3, 4];
          case 3:
            return e2.sent(), console.warn("It was not possible to play the video."), [3, 4];
          case 4:
            return [2];
        }
      });
    });
  }, t2.prototype.getMediaElement = function(t3, e2) {
    var r2 = document.getElementById(t3);
    if (!r2)
      throw new f("element with id '" + t3 + "' not found");
    if (r2.nodeName.toLowerCase() !== e2.toLowerCase())
      throw new f("element with id '" + t3 + "' must be an " + e2 + " element");
    return r2;
  }, t2.prototype.decodeFromImage = function(t3, e2) {
    if (!t3 && !e2)
      throw new f("either imageElement with a src set or an url must be provided");
    return e2 && !t3 ? this.decodeFromImageUrl(e2) : this.decodeFromImageElement(t3);
  }, t2.prototype.decodeFromVideo = function(t3, e2) {
    if (!t3 && !e2)
      throw new f("Either an element with a src set or an URL must be provided");
    return e2 && !t3 ? this.decodeFromVideoUrl(e2) : this.decodeFromVideoElement(t3);
  }, t2.prototype.decodeFromVideoContinuously = function(t3, e2, r2) {
    if (void 0 === t3 && void 0 === e2)
      throw new f("Either an element with a src set or an URL must be provided");
    return e2 && !t3 ? this.decodeFromVideoUrlContinuously(e2, r2) : this.decodeFromVideoElementContinuously(t3, r2);
  }, t2.prototype.decodeFromImageElement = function(t3) {
    if (!t3)
      throw new f("An image element must be provided.");
    this.reset();
    var e2 = this.prepareImageElement(t3);
    return this.imageElement = e2, this.isImageLoaded(e2) ? this.decodeOnce(e2, false, true) : this._decodeOnLoadImage(e2);
  }, t2.prototype.decodeFromVideoElement = function(t3) {
    var e2 = this._decodeFromVideoElementSetup(t3);
    return this._decodeOnLoadVideo(e2);
  }, t2.prototype.decodeFromVideoElementContinuously = function(t3, e2) {
    var r2 = this._decodeFromVideoElementSetup(t3);
    return this._decodeOnLoadVideoContinuously(r2, e2);
  }, t2.prototype._decodeFromVideoElementSetup = function(t3) {
    if (!t3)
      throw new f("A video element must be provided.");
    this.reset();
    var e2 = this.prepareVideoElement(t3);
    return this.videoElement = e2, e2;
  }, t2.prototype.decodeFromImageUrl = function(t3) {
    if (!t3)
      throw new f("An URL must be provided.");
    this.reset();
    var e2 = this.prepareImageElement();
    this.imageElement = e2;
    var r2 = this._decodeOnLoadImage(e2);
    return e2.src = t3, r2;
  }, t2.prototype.decodeFromVideoUrl = function(t3) {
    if (!t3)
      throw new f("An URL must be provided.");
    this.reset();
    var e2 = this.prepareVideoElement(), r2 = this.decodeFromVideoElement(e2);
    return e2.src = t3, r2;
  }, t2.prototype.decodeFromVideoUrlContinuously = function(t3, e2) {
    if (!t3)
      throw new f("An URL must be provided.");
    this.reset();
    var r2 = this.prepareVideoElement(), n2 = this.decodeFromVideoElementContinuously(r2, e2);
    return r2.src = t3, n2;
  }, t2.prototype._decodeOnLoadImage = function(t3) {
    var e2 = this;
    return new Promise(function(r2, n2) {
      e2.imageLoadedListener = function() {
        return e2.decodeOnce(t3, false, true).then(r2, n2);
      }, t3.addEventListener("load", e2.imageLoadedListener);
    });
  }, t2.prototype._decodeOnLoadVideo = function(t3) {
    return Q(this, void 0, void 0, function() {
      return J(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(t3)];
          case 1:
            return e2.sent(), [4, this.decodeOnce(t3)];
          case 2:
            return [2, e2.sent()];
        }
      });
    });
  }, t2.prototype._decodeOnLoadVideoContinuously = function(t3, e2) {
    return Q(this, void 0, void 0, function() {
      return J(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(t3)];
          case 1:
            return r2.sent(), this.decodeContinuously(t3, e2), [2];
        }
      });
    });
  }, t2.prototype.isImageLoaded = function(t3) {
    return !!t3.complete && 0 !== t3.naturalWidth;
  }, t2.prototype.prepareImageElement = function(t3) {
    var e2;
    return void 0 === t3 && ((e2 = document.createElement("img")).width = 200, e2.height = 200), "string" == typeof t3 && (e2 = this.getMediaElement(t3, "img")), t3 instanceof HTMLImageElement && (e2 = t3), e2;
  }, t2.prototype.prepareVideoElement = function(t3) {
    var e2;
    return t3 || "undefined" == typeof document || ((e2 = document.createElement("video")).width = 200, e2.height = 200), "string" == typeof t3 && (e2 = this.getMediaElement(t3, "video")), t3 instanceof HTMLVideoElement && (e2 = t3), e2.setAttribute("autoplay", "true"), e2.setAttribute("muted", "true"), e2.setAttribute("playsinline", "true"), e2;
  }, t2.prototype.decodeOnce = function(t3, e2, r2) {
    var n2 = this;
    void 0 === e2 && (e2 = true), void 0 === r2 && (r2 = true), this._stopAsyncDecode = false;
    var o2 = function(i2, a2) {
      if (n2._stopAsyncDecode)
        return a2(new U("Video stream has ended before any code could be detected.")), void (n2._stopAsyncDecode = void 0);
      try {
        i2(n2.decode(t3));
      } catch (t4) {
        if (e2 && t4 instanceof U || (t4 instanceof g || t4 instanceof R) && r2)
          return setTimeout(o2, n2._timeBetweenDecodingAttempts, i2, a2);
        a2(t4);
      }
    };
    return new Promise(function(t4, e3) {
      return o2(t4, e3);
    });
  }, t2.prototype.decodeContinuously = function(t3, e2) {
    var r2 = this;
    this._stopContinuousDecode = false;
    var n2 = function() {
      if (r2._stopContinuousDecode)
        r2._stopContinuousDecode = void 0;
      else
        try {
          var o2 = r2.decode(t3);
          e2(o2, null), setTimeout(n2, r2.timeBetweenScansMillis);
        } catch (t4) {
          e2(null, t4), (t4 instanceof g || t4 instanceof R || t4 instanceof U) && setTimeout(n2, r2._timeBetweenDecodingAttempts);
        }
    };
    n2();
  }, t2.prototype.decode = function(t3) {
    var e2 = this.createBinaryBitmap(t3);
    return this.decodeBitmap(e2);
  }, t2.prototype.createBinaryBitmap = function(t3) {
    var e2 = this.getCaptureCanvasContext(t3);
    this.drawImageOnCanvas(e2, t3);
    var r2 = this.getCaptureCanvas(t3), n2 = new K(r2), o2 = new W(n2);
    return new d(o2);
  }, t2.prototype.getCaptureCanvasContext = function(t3) {
    if (!this.captureCanvasContext) {
      var e2 = this.getCaptureCanvas(t3).getContext("2d");
      this.captureCanvasContext = e2;
    }
    return this.captureCanvasContext;
  }, t2.prototype.getCaptureCanvas = function(t3) {
    if (!this.captureCanvas) {
      var e2 = this.createCaptureCanvas(t3);
      this.captureCanvas = e2;
    }
    return this.captureCanvas;
  }, t2.prototype.drawImageOnCanvas = function(t3, e2) {
    t3.drawImage(e2, 0, 0);
  }, t2.prototype.decodeBitmap = function(t3) {
    return this.reader.decode(t3, this._hints);
  }, t2.prototype.createCaptureCanvas = function(t3) {
    if ("undefined" == typeof document)
      return this._destroyCaptureCanvas(), null;
    var e2, r2, n2 = document.createElement("canvas");
    return void 0 !== t3 && (t3 instanceof HTMLVideoElement ? (e2 = t3.videoWidth, r2 = t3.videoHeight) : t3 instanceof HTMLImageElement && (e2 = t3.naturalWidth || t3.width, r2 = t3.naturalHeight || t3.height)), n2.style.width = e2 + "px", n2.style.height = r2 + "px", n2.width = e2, n2.height = r2, n2;
  }, t2.prototype.stopStreams = function() {
    this.stream && (this.stream.getVideoTracks().forEach(function(t3) {
      return t3.stop();
    }), this.stream = void 0), false === this._stopAsyncDecode && this.stopAsyncDecode(), false === this._stopContinuousDecode && this.stopContinuousDecode();
  }, t2.prototype.reset = function() {
    this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
  }, t2.prototype._destroyVideoElement = function() {
    this.videoElement && (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener("ended", this.videoEndedListener), void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0);
  }, t2.prototype._destroyImageElement = function() {
    this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0);
  }, t2.prototype._destroyCaptureCanvas = function() {
    this.captureCanvasContext = void 0, this.captureCanvas = void 0;
  }, t2.prototype.addVideoSource = function(t3, e2) {
    try {
      t3.srcObject = e2;
    } catch (r2) {
      t3.src = URL.createObjectURL(e2);
    }
  }, t2.prototype.cleanVideoSource = function(t3) {
    try {
      t3.srcObject = null;
    } catch (e2) {
      t3.src = "";
    }
    this.videoElement.removeAttribute("src");
  }, t2;
}();
var et = function() {
  function t2(t3, e2, r2, n2, o2, i2) {
    void 0 === r2 && (r2 = null == e2 ? 0 : 8 * e2.length), void 0 === i2 && (i2 = w.currentTimeMillis()), this.text = t3, this.rawBytes = e2, this.numBits = r2, this.resultPoints = n2, this.format = o2, this.timestamp = i2, this.text = t3, this.rawBytes = e2, this.numBits = null == r2 ? null == e2 ? 0 : 8 * e2.length : r2, this.resultPoints = n2, this.format = o2, this.resultMetadata = null, this.timestamp = null == i2 ? w.currentTimeMillis() : i2;
  }
  return t2.prototype.getText = function() {
    return this.text;
  }, t2.prototype.getRawBytes = function() {
    return this.rawBytes;
  }, t2.prototype.getNumBits = function() {
    return this.numBits;
  }, t2.prototype.getResultPoints = function() {
    return this.resultPoints;
  }, t2.prototype.getBarcodeFormat = function() {
    return this.format;
  }, t2.prototype.getResultMetadata = function() {
    return this.resultMetadata;
  }, t2.prototype.putMetadata = function(t3, e2) {
    null === this.resultMetadata && (this.resultMetadata = /* @__PURE__ */ new Map()), this.resultMetadata.set(t3, e2);
  }, t2.prototype.putAllMetadata = function(t3) {
    null !== t3 && (null === this.resultMetadata ? this.resultMetadata = t3 : this.resultMetadata = new Map(t3));
  }, t2.prototype.addResultPoints = function(t3) {
    var e2 = this.resultPoints;
    if (null === e2)
      this.resultPoints = t3;
    else if (null !== t3 && t3.length > 0) {
      var r2 = new Array(e2.length + t3.length);
      w.arraycopy(e2, 0, r2, 0, e2.length), w.arraycopy(t3, 0, r2, e2.length, t3.length), this.resultPoints = r2;
    }
  }, t2.prototype.getTimestamp = function() {
    return this.timestamp;
  }, t2.prototype.toString = function() {
    return this.text;
  }, t2;
}();
!function(t2) {
  t2[t2.AZTEC = 0] = "AZTEC", t2[t2.CODABAR = 1] = "CODABAR", t2[t2.CODE_39 = 2] = "CODE_39", t2[t2.CODE_93 = 3] = "CODE_93", t2[t2.CODE_128 = 4] = "CODE_128", t2[t2.DATA_MATRIX = 5] = "DATA_MATRIX", t2[t2.EAN_8 = 6] = "EAN_8", t2[t2.EAN_13 = 7] = "EAN_13", t2[t2.ITF = 8] = "ITF", t2[t2.MAXICODE = 9] = "MAXICODE", t2[t2.PDF_417 = 10] = "PDF_417", t2[t2.QR_CODE = 11] = "QR_CODE", t2[t2.RSS_14 = 12] = "RSS_14", t2[t2.RSS_EXPANDED = 13] = "RSS_EXPANDED", t2[t2.UPC_A = 14] = "UPC_A", t2[t2.UPC_E = 15] = "UPC_E", t2[t2.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
}(D || (D = {}));
var rt;
var nt = D;
!function(t2) {
  t2[t2.OTHER = 0] = "OTHER", t2[t2.ORIENTATION = 1] = "ORIENTATION", t2[t2.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", t2[t2.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", t2[t2.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", t2[t2.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", t2[t2.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", t2[t2.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", t2[t2.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", t2[t2.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", t2[t2.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY";
}(rt || (rt = {}));
var ot;
var it = rt;
var at = function() {
  function t2(t3, e2, r2, n2, o2, i2) {
    void 0 === o2 && (o2 = -1), void 0 === i2 && (i2 = -1), this.rawBytes = t3, this.text = e2, this.byteSegments = r2, this.ecLevel = n2, this.structuredAppendSequenceNumber = o2, this.structuredAppendParity = i2, this.numBits = null == t3 ? 0 : 8 * t3.length;
  }
  return t2.prototype.getRawBytes = function() {
    return this.rawBytes;
  }, t2.prototype.getNumBits = function() {
    return this.numBits;
  }, t2.prototype.setNumBits = function(t3) {
    this.numBits = t3;
  }, t2.prototype.getText = function() {
    return this.text;
  }, t2.prototype.getByteSegments = function() {
    return this.byteSegments;
  }, t2.prototype.getECLevel = function() {
    return this.ecLevel;
  }, t2.prototype.getErrorsCorrected = function() {
    return this.errorsCorrected;
  }, t2.prototype.setErrorsCorrected = function(t3) {
    this.errorsCorrected = t3;
  }, t2.prototype.getErasures = function() {
    return this.erasures;
  }, t2.prototype.setErasures = function(t3) {
    this.erasures = t3;
  }, t2.prototype.getOther = function() {
    return this.other;
  }, t2.prototype.setOther = function(t3) {
    this.other = t3;
  }, t2.prototype.hasStructuredAppend = function() {
    return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
  }, t2.prototype.getStructuredAppendParity = function() {
    return this.structuredAppendParity;
  }, t2.prototype.getStructuredAppendSequenceNumber = function() {
    return this.structuredAppendSequenceNumber;
  }, t2;
}();
var ut = function() {
  function t2() {
  }
  return t2.prototype.exp = function(t3) {
    return this.expTable[t3];
  }, t2.prototype.log = function(t3) {
    if (0 === t3)
      throw new l();
    return this.logTable[t3];
  }, t2.addOrSubtract = function(t3, e2) {
    return t3 ^ e2;
  }, t2;
}();
var st = function() {
  function t2(t3, e2) {
    if (0 === e2.length)
      throw new l();
    this.field = t3;
    var r2 = e2.length;
    if (r2 > 1 && 0 === e2[0]) {
      for (var n2 = 1; n2 < r2 && 0 === e2[n2]; )
        n2++;
      n2 === r2 ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r2 - n2), w.arraycopy(e2, n2, this.coefficients, 0, this.coefficients.length));
    } else
      this.coefficients = e2;
  }
  return t2.prototype.getCoefficients = function() {
    return this.coefficients;
  }, t2.prototype.getDegree = function() {
    return this.coefficients.length - 1;
  }, t2.prototype.isZero = function() {
    return 0 === this.coefficients[0];
  }, t2.prototype.getCoefficient = function(t3) {
    return this.coefficients[this.coefficients.length - 1 - t3];
  }, t2.prototype.evaluateAt = function(t3) {
    if (0 === t3)
      return this.getCoefficient(0);
    var e2, r2 = this.coefficients;
    if (1 === t3) {
      e2 = 0;
      for (var n2 = 0, o2 = r2.length; n2 !== o2; n2++) {
        var i2 = r2[n2];
        e2 = ut.addOrSubtract(e2, i2);
      }
      return e2;
    }
    e2 = r2[0];
    var a2 = r2.length, u2 = this.field;
    for (n2 = 1; n2 < a2; n2++)
      e2 = ut.addOrSubtract(u2.multiply(t3, e2), r2[n2]);
    return e2;
  }, t2.prototype.addOrSubtract = function(e2) {
    if (!this.field.equals(e2.field))
      throw new l("GenericGFPolys do not have same GenericGF field");
    if (this.isZero())
      return e2;
    if (e2.isZero())
      return this;
    var r2 = this.coefficients, n2 = e2.coefficients;
    if (r2.length > n2.length) {
      var o2 = r2;
      r2 = n2, n2 = o2;
    }
    var i2 = new Int32Array(n2.length), a2 = n2.length - r2.length;
    w.arraycopy(n2, 0, i2, 0, a2);
    for (var u2 = a2; u2 < n2.length; u2++)
      i2[u2] = ut.addOrSubtract(r2[u2 - a2], n2[u2]);
    return new t2(this.field, i2);
  }, t2.prototype.multiply = function(e2) {
    if (!this.field.equals(e2.field))
      throw new l("GenericGFPolys do not have same GenericGF field");
    if (this.isZero() || e2.isZero())
      return this.field.getZero();
    for (var r2 = this.coefficients, n2 = r2.length, o2 = e2.coefficients, i2 = o2.length, a2 = new Int32Array(n2 + i2 - 1), u2 = this.field, s2 = 0; s2 < n2; s2++)
      for (var c2 = r2[s2], f2 = 0; f2 < i2; f2++)
        a2[s2 + f2] = ut.addOrSubtract(a2[s2 + f2], u2.multiply(c2, o2[f2]));
    return new t2(u2, a2);
  }, t2.prototype.multiplyScalar = function(e2) {
    if (0 === e2)
      return this.field.getZero();
    if (1 === e2)
      return this;
    for (var r2 = this.coefficients.length, n2 = this.field, o2 = new Int32Array(r2), i2 = this.coefficients, a2 = 0; a2 < r2; a2++)
      o2[a2] = n2.multiply(i2[a2], e2);
    return new t2(n2, o2);
  }, t2.prototype.multiplyByMonomial = function(e2, r2) {
    if (e2 < 0)
      throw new l();
    if (0 === r2)
      return this.field.getZero();
    for (var n2 = this.coefficients, o2 = n2.length, i2 = new Int32Array(o2 + e2), a2 = this.field, u2 = 0; u2 < o2; u2++)
      i2[u2] = a2.multiply(n2[u2], r2);
    return new t2(a2, i2);
  }, t2.prototype.divide = function(t3) {
    if (!this.field.equals(t3.field))
      throw new l("GenericGFPolys do not have same GenericGF field");
    if (t3.isZero())
      throw new l("Divide by 0");
    for (var e2 = this.field, r2 = e2.getZero(), n2 = this, o2 = t3.getCoefficient(t3.getDegree()), i2 = e2.inverse(o2); n2.getDegree() >= t3.getDegree() && !n2.isZero(); ) {
      var a2 = n2.getDegree() - t3.getDegree(), u2 = e2.multiply(n2.getCoefficient(n2.getDegree()), i2), s2 = t3.multiplyByMonomial(a2, u2), c2 = e2.buildMonomial(a2, u2);
      r2 = r2.addOrSubtract(c2), n2 = n2.addOrSubtract(s2);
    }
    return [r2, n2];
  }, t2.prototype.toString = function() {
    for (var t3 = "", e2 = this.getDegree(); e2 >= 0; e2--) {
      var r2 = this.getCoefficient(e2);
      if (0 !== r2) {
        if (r2 < 0 ? (t3 += " - ", r2 = -r2) : t3.length > 0 && (t3 += " + "), 0 === e2 || 1 !== r2) {
          var n2 = this.field.log(r2);
          0 === n2 ? t3 += "1" : 1 === n2 ? t3 += "a" : (t3 += "a^", t3 += n2);
        }
        0 !== e2 && (1 === e2 ? t3 += "x" : (t3 += "x^", t3 += e2));
      }
    }
    return t3;
  }, t2;
}();
var ct = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ft = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return ct(e2, t2), e2.kind = "ArithmeticException", e2;
}(s);
var ht = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var lt = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this) || this;
    o2.primitive = e3, o2.size = r2, o2.generatorBase = n2;
    for (var i2 = new Int32Array(r2), a2 = 1, u2 = 0; u2 < r2; u2++)
      i2[u2] = a2, (a2 *= 2) >= r2 && (a2 ^= e3, a2 &= r2 - 1);
    o2.expTable = i2;
    var s2 = new Int32Array(r2);
    for (u2 = 0; u2 < r2 - 1; u2++)
      s2[i2[u2]] = u2;
    return o2.logTable = s2, o2.zero = new st(o2, Int32Array.from([0])), o2.one = new st(o2, Int32Array.from([1])), o2;
  }
  return ht(e2, t2), e2.prototype.getZero = function() {
    return this.zero;
  }, e2.prototype.getOne = function() {
    return this.one;
  }, e2.prototype.buildMonomial = function(t3, e3) {
    if (t3 < 0)
      throw new l();
    if (0 === e3)
      return this.zero;
    var r2 = new Int32Array(t3 + 1);
    return r2[0] = e3, new st(this, r2);
  }, e2.prototype.inverse = function(t3) {
    if (0 === t3)
      throw new ft();
    return this.expTable[this.size - this.logTable[t3] - 1];
  }, e2.prototype.multiply = function(t3, e3) {
    return 0 === t3 || 0 === e3 ? 0 : this.expTable[(this.logTable[t3] + this.logTable[e3]) % (this.size - 1)];
  }, e2.prototype.getSize = function() {
    return this.size;
  }, e2.prototype.getGeneratorBase = function() {
    return this.generatorBase;
  }, e2.prototype.toString = function() {
    return "GF(0x" + I.toHexString(this.primitive) + "," + this.size + ")";
  }, e2.prototype.equals = function(t3) {
    return t3 === this;
  }, e2.AZTEC_DATA_12 = new e2(4201, 4096, 1), e2.AZTEC_DATA_10 = new e2(1033, 1024, 1), e2.AZTEC_DATA_6 = new e2(67, 64, 1), e2.AZTEC_PARAM = new e2(19, 16, 1), e2.QR_CODE_FIELD_256 = new e2(285, 256, 0), e2.DATA_MATRIX_FIELD_256 = new e2(301, 256, 1), e2.AZTEC_DATA_8 = e2.DATA_MATRIX_FIELD_256, e2.MAXICODE_FIELD_64 = e2.AZTEC_DATA_6, e2;
}(ut);
var dt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var pt = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return dt(e2, t2), e2.kind = "ReedSolomonException", e2;
}(s);
var gt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var yt = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return gt(e2, t2), e2.kind = "IllegalStateException", e2;
}(s);
var wt = function() {
  function t2(t3) {
    this.field = t3;
  }
  return t2.prototype.decode = function(t3, e2) {
    for (var r2 = this.field, n2 = new st(r2, t3), o2 = new Int32Array(e2), i2 = true, a2 = 0; a2 < e2; a2++) {
      var u2 = n2.evaluateAt(r2.exp(a2 + r2.getGeneratorBase()));
      o2[o2.length - 1 - a2] = u2, 0 !== u2 && (i2 = false);
    }
    if (!i2) {
      var s2 = new st(r2, o2), c2 = this.runEuclideanAlgorithm(r2.buildMonomial(e2, 1), s2, e2), f2 = c2[0], h2 = c2[1], l2 = this.findErrorLocations(f2), d2 = this.findErrorMagnitudes(h2, l2);
      for (a2 = 0; a2 < l2.length; a2++) {
        var p2 = t3.length - 1 - r2.log(l2[a2]);
        if (p2 < 0)
          throw new pt("Bad error location");
        t3[p2] = lt.addOrSubtract(t3[p2], d2[a2]);
      }
    }
  }, t2.prototype.runEuclideanAlgorithm = function(t3, e2, r2) {
    if (t3.getDegree() < e2.getDegree()) {
      var n2 = t3;
      t3 = e2, e2 = n2;
    }
    for (var o2 = this.field, i2 = t3, a2 = e2, u2 = o2.getZero(), s2 = o2.getOne(); a2.getDegree() >= (r2 / 2 | 0); ) {
      var c2 = i2, f2 = u2;
      if (u2 = s2, (i2 = a2).isZero())
        throw new pt("r_{i-1} was zero");
      a2 = c2;
      for (var h2 = o2.getZero(), l2 = i2.getCoefficient(i2.getDegree()), d2 = o2.inverse(l2); a2.getDegree() >= i2.getDegree() && !a2.isZero(); ) {
        var p2 = a2.getDegree() - i2.getDegree(), g2 = o2.multiply(a2.getCoefficient(a2.getDegree()), d2);
        h2 = h2.addOrSubtract(o2.buildMonomial(p2, g2)), a2 = a2.addOrSubtract(i2.multiplyByMonomial(p2, g2));
      }
      if (s2 = h2.multiply(u2).addOrSubtract(f2), a2.getDegree() >= i2.getDegree())
        throw new yt("Division algorithm failed to reduce polynomial?");
    }
    var y2 = s2.getCoefficient(0);
    if (0 === y2)
      throw new pt("sigmaTilde(0) was zero");
    var w2 = o2.inverse(y2);
    return [s2.multiplyScalar(w2), a2.multiplyScalar(w2)];
  }, t2.prototype.findErrorLocations = function(t3) {
    var e2 = t3.getDegree();
    if (1 === e2)
      return Int32Array.from([t3.getCoefficient(1)]);
    for (var r2 = new Int32Array(e2), n2 = 0, o2 = this.field, i2 = 1; i2 < o2.getSize() && n2 < e2; i2++)
      0 === t3.evaluateAt(i2) && (r2[n2] = o2.inverse(i2), n2++);
    if (n2 !== e2)
      throw new pt("Error locator degree does not match number of roots");
    return r2;
  }, t2.prototype.findErrorMagnitudes = function(t3, e2) {
    for (var r2 = e2.length, n2 = new Int32Array(r2), o2 = this.field, i2 = 0; i2 < r2; i2++) {
      for (var a2 = o2.inverse(e2[i2]), u2 = 1, s2 = 0; s2 < r2; s2++)
        if (i2 !== s2) {
          var c2 = o2.multiply(e2[s2], a2), f2 = 0 == (1 & c2) ? 1 | c2 : -2 & c2;
          u2 = o2.multiply(u2, f2);
        }
      n2[i2] = o2.multiply(t3.evaluateAt(a2), o2.inverse(u2)), 0 !== o2.getGeneratorBase() && (n2[i2] = o2.multiply(n2[i2], a2));
    }
    return n2;
  }, t2;
}();
!function(t2) {
  t2[t2.UPPER = 0] = "UPPER", t2[t2.LOWER = 1] = "LOWER", t2[t2.MIXED = 2] = "MIXED", t2[t2.DIGIT = 3] = "DIGIT", t2[t2.PUNCT = 4] = "PUNCT", t2[t2.BINARY = 5] = "BINARY";
}(ot || (ot = {}));
var _t = function() {
  function t2() {
  }
  return t2.prototype.decode = function(e2) {
    this.ddata = e2;
    var r2 = e2.getBits(), n2 = this.extractBits(r2), o2 = this.correctBits(n2), i2 = t2.convertBoolArrayToByteArray(o2), a2 = t2.getEncodedData(o2), u2 = new at(i2, a2, null, null);
    return u2.setNumBits(o2.length), u2;
  }, t2.highLevelDecode = function(t3) {
    return this.getEncodedData(t3);
  }, t2.getEncodedData = function(e2) {
    for (var r2 = e2.length, n2 = ot.UPPER, o2 = ot.UPPER, i2 = "", a2 = 0; a2 < r2; )
      if (o2 === ot.BINARY) {
        if (r2 - a2 < 5)
          break;
        var u2 = t2.readCode(e2, a2, 5);
        if (a2 += 5, 0 === u2) {
          if (r2 - a2 < 11)
            break;
          u2 = t2.readCode(e2, a2, 11) + 31, a2 += 11;
        }
        for (var s2 = 0; s2 < u2; s2++) {
          if (r2 - a2 < 8) {
            a2 = r2;
            break;
          }
          var c2 = t2.readCode(e2, a2, 8);
          i2 += F.castAsNonUtf8Char(c2), a2 += 8;
        }
        o2 = n2;
      } else {
        var f2 = o2 === ot.DIGIT ? 4 : 5;
        if (r2 - a2 < f2)
          break;
        c2 = t2.readCode(e2, a2, f2);
        a2 += f2;
        var h2 = t2.getCharacter(o2, c2);
        h2.startsWith("CTRL_") ? (n2 = o2, o2 = t2.getTable(h2.charAt(5)), "L" === h2.charAt(6) && (n2 = o2)) : (i2 += h2, o2 = n2);
      }
    return i2;
  }, t2.getTable = function(t3) {
    switch (t3) {
      case "L":
        return ot.LOWER;
      case "P":
        return ot.PUNCT;
      case "M":
        return ot.MIXED;
      case "D":
        return ot.DIGIT;
      case "B":
        return ot.BINARY;
      default:
        return ot.UPPER;
    }
  }, t2.getCharacter = function(e2, r2) {
    switch (e2) {
      case ot.UPPER:
        return t2.UPPER_TABLE[r2];
      case ot.LOWER:
        return t2.LOWER_TABLE[r2];
      case ot.MIXED:
        return t2.MIXED_TABLE[r2];
      case ot.PUNCT:
        return t2.PUNCT_TABLE[r2];
      case ot.DIGIT:
        return t2.DIGIT_TABLE[r2];
      default:
        throw new yt("Bad table");
    }
  }, t2.prototype.correctBits = function(e2) {
    var r2, n2;
    this.ddata.getNbLayers() <= 2 ? (n2 = 6, r2 = lt.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (n2 = 8, r2 = lt.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (n2 = 10, r2 = lt.AZTEC_DATA_10) : (n2 = 12, r2 = lt.AZTEC_DATA_12);
    var o2 = this.ddata.getNbDatablocks(), i2 = e2.length / n2;
    if (i2 < o2)
      throw new R();
    for (var a2 = e2.length % n2, u2 = new Int32Array(i2), s2 = 0; s2 < i2; s2++, a2 += n2)
      u2[s2] = t2.readCode(e2, a2, n2);
    try {
      new wt(r2).decode(u2, i2 - o2);
    } catch (t3) {
      throw new R(t3);
    }
    var c2 = (1 << n2) - 1, f2 = 0;
    for (s2 = 0; s2 < o2; s2++) {
      if (0 === (d2 = u2[s2]) || d2 === c2)
        throw new R();
      1 !== d2 && d2 !== c2 - 1 || f2++;
    }
    var h2 = new Array(o2 * n2 - f2), l2 = 0;
    for (s2 = 0; s2 < o2; s2++) {
      var d2;
      if (1 === (d2 = u2[s2]) || d2 === c2 - 1)
        h2.fill(d2 > 1, l2, l2 + n2 - 1), l2 += n2 - 1;
      else
        for (var p2 = n2 - 1; p2 >= 0; --p2)
          h2[l2++] = 0 != (d2 & 1 << p2);
    }
    return h2;
  }, t2.prototype.extractBits = function(t3) {
    var e2 = this.ddata.isCompact(), r2 = this.ddata.getNbLayers(), n2 = (e2 ? 11 : 14) + 4 * r2, o2 = new Int32Array(n2), i2 = new Array(this.totalBitsInLayer(r2, e2));
    if (e2)
      for (var a2 = 0; a2 < o2.length; a2++)
        o2[a2] = a2;
    else {
      var u2 = n2 + 1 + 2 * I.truncDivision(I.truncDivision(n2, 2) - 1, 15), s2 = n2 / 2, c2 = I.truncDivision(u2, 2);
      for (a2 = 0; a2 < s2; a2++) {
        var f2 = a2 + I.truncDivision(a2, 15);
        o2[s2 - a2 - 1] = c2 - f2 - 1, o2[s2 + a2] = c2 + f2 + 1;
      }
    }
    a2 = 0;
    for (var h2 = 0; a2 < r2; a2++) {
      for (var l2 = 4 * (r2 - a2) + (e2 ? 9 : 12), d2 = 2 * a2, p2 = n2 - 1 - d2, g2 = 0; g2 < l2; g2++)
        for (var y2 = 2 * g2, w2 = 0; w2 < 2; w2++)
          i2[h2 + y2 + w2] = t3.get(o2[d2 + w2], o2[d2 + g2]), i2[h2 + 2 * l2 + y2 + w2] = t3.get(o2[d2 + g2], o2[p2 - w2]), i2[h2 + 4 * l2 + y2 + w2] = t3.get(o2[p2 - w2], o2[p2 - g2]), i2[h2 + 6 * l2 + y2 + w2] = t3.get(o2[p2 - g2], o2[d2 + w2]);
      h2 += 8 * l2;
    }
    return i2;
  }, t2.readCode = function(t3, e2, r2) {
    for (var n2 = 0, o2 = e2; o2 < e2 + r2; o2++)
      n2 <<= 1, t3[o2] && (n2 |= 1);
    return n2;
  }, t2.readByte = function(e2, r2) {
    var n2 = e2.length - r2;
    return n2 >= 8 ? t2.readCode(e2, r2, 8) : t2.readCode(e2, r2, n2) << 8 - n2;
  }, t2.convertBoolArrayToByteArray = function(e2) {
    for (var r2 = new Uint8Array((e2.length + 7) / 8), n2 = 0; n2 < r2.length; n2++)
      r2[n2] = t2.readByte(e2, 8 * n2);
    return r2;
  }, t2.prototype.totalBitsInLayer = function(t3, e2) {
    return ((e2 ? 88 : 112) + 16 * t3) * t3;
  }, t2.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"], t2.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"], t2.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "	", "\n", "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"], t2.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"], t2.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"], t2;
}();
var vt = function() {
  function t2() {
  }
  return t2.round = function(t3) {
    return NaN === t3 ? 0 : t3 <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t3 >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t3 + (t3 < 0 ? -0.5 : 0.5) | 0;
  }, t2.distance = function(t3, e2, r2, n2) {
    var o2 = t3 - r2, i2 = e2 - n2;
    return Math.sqrt(o2 * o2 + i2 * i2);
  }, t2.sum = function(t3) {
    for (var e2 = 0, r2 = 0, n2 = t3.length; r2 !== n2; r2++) {
      e2 += t3[r2];
    }
    return e2;
  }, t2;
}();
var mt = function() {
  function t2() {
  }
  return t2.floatToIntBits = function(t3) {
    return t3;
  }, t2.MAX_VALUE = Number.MAX_SAFE_INTEGER, t2;
}();
var At = function() {
  function t2(t3, e2) {
    this.x = t3, this.y = e2;
  }
  return t2.prototype.getX = function() {
    return this.x;
  }, t2.prototype.getY = function() {
    return this.y;
  }, t2.prototype.equals = function(e2) {
    if (e2 instanceof t2) {
      var r2 = e2;
      return this.x === r2.x && this.y === r2.y;
    }
    return false;
  }, t2.prototype.hashCode = function() {
    return 31 * mt.floatToIntBits(this.x) + mt.floatToIntBits(this.y);
  }, t2.prototype.toString = function() {
    return "(" + this.x + "," + this.y + ")";
  }, t2.orderBestPatterns = function(t3) {
    var e2, r2, n2, o2 = this.distance(t3[0], t3[1]), i2 = this.distance(t3[1], t3[2]), a2 = this.distance(t3[0], t3[2]);
    if (i2 >= o2 && i2 >= a2 ? (r2 = t3[0], e2 = t3[1], n2 = t3[2]) : a2 >= i2 && a2 >= o2 ? (r2 = t3[1], e2 = t3[0], n2 = t3[2]) : (r2 = t3[2], e2 = t3[0], n2 = t3[1]), this.crossProductZ(e2, r2, n2) < 0) {
      var u2 = e2;
      e2 = n2, n2 = u2;
    }
    t3[0] = e2, t3[1] = r2, t3[2] = n2;
  }, t2.distance = function(t3, e2) {
    return vt.distance(t3.x, t3.y, e2.x, e2.y);
  }, t2.crossProductZ = function(t3, e2, r2) {
    var n2 = e2.x, o2 = e2.y;
    return (r2.x - n2) * (t3.y - o2) - (r2.y - o2) * (t3.x - n2);
  }, t2;
}();
var Et = function() {
  function t2(t3, e2) {
    this.bits = t3, this.points = e2;
  }
  return t2.prototype.getBits = function() {
    return this.bits;
  }, t2.prototype.getPoints = function() {
    return this.points;
  }, t2;
}();
var Ct = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var It = function(t2) {
  function e2(e3, r2, n2, o2, i2) {
    var a2 = t2.call(this, e3, r2) || this;
    return a2.compact = n2, a2.nbDatablocks = o2, a2.nbLayers = i2, a2;
  }
  return Ct(e2, t2), e2.prototype.getNbLayers = function() {
    return this.nbLayers;
  }, e2.prototype.getNbDatablocks = function() {
    return this.nbDatablocks;
  }, e2.prototype.isCompact = function() {
    return this.compact;
  }, e2;
}(Et);
var St = function() {
  function t2(e2, r2, n2, o2) {
    this.image = e2, this.height = e2.getHeight(), this.width = e2.getWidth(), null == r2 && (r2 = t2.INIT_SIZE), null == n2 && (n2 = e2.getWidth() / 2 | 0), null == o2 && (o2 = e2.getHeight() / 2 | 0);
    var i2 = r2 / 2 | 0;
    if (this.leftInit = n2 - i2, this.rightInit = n2 + i2, this.upInit = o2 - i2, this.downInit = o2 + i2, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width)
      throw new U();
  }
  return t2.prototype.detect = function() {
    for (var t3 = this.leftInit, e2 = this.rightInit, r2 = this.upInit, n2 = this.downInit, o2 = false, i2 = true, a2 = false, u2 = false, s2 = false, c2 = false, f2 = false, h2 = this.width, l2 = this.height; i2; ) {
      i2 = false;
      for (var d2 = true; (d2 || !u2) && e2 < h2; )
        (d2 = this.containsBlackPoint(r2, n2, e2, false)) ? (e2++, i2 = true, u2 = true) : u2 || e2++;
      if (e2 >= h2) {
        o2 = true;
        break;
      }
      for (var p2 = true; (p2 || !s2) && n2 < l2; )
        (p2 = this.containsBlackPoint(t3, e2, n2, true)) ? (n2++, i2 = true, s2 = true) : s2 || n2++;
      if (n2 >= l2) {
        o2 = true;
        break;
      }
      for (var g2 = true; (g2 || !c2) && t3 >= 0; )
        (g2 = this.containsBlackPoint(r2, n2, t3, false)) ? (t3--, i2 = true, c2 = true) : c2 || t3--;
      if (t3 < 0) {
        o2 = true;
        break;
      }
      for (var y2 = true; (y2 || !f2) && r2 >= 0; )
        (y2 = this.containsBlackPoint(t3, e2, r2, true)) ? (r2--, i2 = true, f2 = true) : f2 || r2--;
      if (r2 < 0) {
        o2 = true;
        break;
      }
      i2 && (a2 = true);
    }
    if (!o2 && a2) {
      for (var w2 = e2 - t3, _2 = null, v2 = 1; null === _2 && v2 < w2; v2++)
        _2 = this.getBlackPointOnSegment(t3, n2 - v2, t3 + v2, n2);
      if (null == _2)
        throw new U();
      var m2 = null;
      for (v2 = 1; null === m2 && v2 < w2; v2++)
        m2 = this.getBlackPointOnSegment(t3, r2 + v2, t3 + v2, r2);
      if (null == m2)
        throw new U();
      var A2 = null;
      for (v2 = 1; null === A2 && v2 < w2; v2++)
        A2 = this.getBlackPointOnSegment(e2, r2 + v2, e2 - v2, r2);
      if (null == A2)
        throw new U();
      var E2 = null;
      for (v2 = 1; null === E2 && v2 < w2; v2++)
        E2 = this.getBlackPointOnSegment(e2, n2 - v2, e2 - v2, n2);
      if (null == E2)
        throw new U();
      return this.centerEdges(E2, _2, A2, m2);
    }
    throw new U();
  }, t2.prototype.getBlackPointOnSegment = function(t3, e2, r2, n2) {
    for (var o2 = vt.round(vt.distance(t3, e2, r2, n2)), i2 = (r2 - t3) / o2, a2 = (n2 - e2) / o2, u2 = this.image, s2 = 0; s2 < o2; s2++) {
      var c2 = vt.round(t3 + s2 * i2), f2 = vt.round(e2 + s2 * a2);
      if (u2.get(c2, f2))
        return new At(c2, f2);
    }
    return null;
  }, t2.prototype.centerEdges = function(e2, r2, n2, o2) {
    var i2 = e2.getX(), a2 = e2.getY(), u2 = r2.getX(), s2 = r2.getY(), c2 = n2.getX(), f2 = n2.getY(), h2 = o2.getX(), l2 = o2.getY(), d2 = t2.CORR;
    return i2 < this.width / 2 ? [new At(h2 - d2, l2 + d2), new At(u2 + d2, s2 + d2), new At(c2 - d2, f2 - d2), new At(i2 + d2, a2 - d2)] : [new At(h2 + d2, l2 + d2), new At(u2 + d2, s2 - d2), new At(c2 - d2, f2 + d2), new At(i2 - d2, a2 - d2)];
  }, t2.prototype.containsBlackPoint = function(t3, e2, r2, n2) {
    var o2 = this.image;
    if (n2) {
      for (var i2 = t3; i2 <= e2; i2++)
        if (o2.get(i2, r2))
          return true;
    } else
      for (var a2 = t3; a2 <= e2; a2++)
        if (o2.get(r2, a2))
          return true;
    return false;
  }, t2.INIT_SIZE = 10, t2.CORR = 1, t2;
}();
var Ot = function() {
  function t2() {
  }
  return t2.checkAndNudgePoints = function(t3, e2) {
    for (var r2 = t3.getWidth(), n2 = t3.getHeight(), o2 = true, i2 = 0; i2 < e2.length && o2; i2 += 2) {
      var a2 = Math.floor(e2[i2]), u2 = Math.floor(e2[i2 + 1]);
      if (a2 < -1 || a2 > r2 || u2 < -1 || u2 > n2)
        throw new U();
      o2 = false, -1 === a2 ? (e2[i2] = 0, o2 = true) : a2 === r2 && (e2[i2] = r2 - 1, o2 = true), -1 === u2 ? (e2[i2 + 1] = 0, o2 = true) : u2 === n2 && (e2[i2 + 1] = n2 - 1, o2 = true);
    }
    o2 = true;
    for (i2 = e2.length - 2; i2 >= 0 && o2; i2 -= 2) {
      a2 = Math.floor(e2[i2]), u2 = Math.floor(e2[i2 + 1]);
      if (a2 < -1 || a2 > r2 || u2 < -1 || u2 > n2)
        throw new U();
      o2 = false, -1 === a2 ? (e2[i2] = 0, o2 = true) : a2 === r2 && (e2[i2] = r2 - 1, o2 = true), -1 === u2 ? (e2[i2 + 1] = 0, o2 = true) : u2 === n2 && (e2[i2 + 1] = n2 - 1, o2 = true);
    }
  }, t2;
}();
var Tt = function() {
  function t2(t3, e2, r2, n2, o2, i2, a2, u2, s2) {
    this.a11 = t3, this.a21 = e2, this.a31 = r2, this.a12 = n2, this.a22 = o2, this.a32 = i2, this.a13 = a2, this.a23 = u2, this.a33 = s2;
  }
  return t2.quadrilateralToQuadrilateral = function(e2, r2, n2, o2, i2, a2, u2, s2, c2, f2, h2, l2, d2, p2, g2, y2) {
    var w2 = t2.quadrilateralToSquare(e2, r2, n2, o2, i2, a2, u2, s2);
    return t2.squareToQuadrilateral(c2, f2, h2, l2, d2, p2, g2, y2).times(w2);
  }, t2.prototype.transformPoints = function(t3) {
    for (var e2 = t3.length, r2 = this.a11, n2 = this.a12, o2 = this.a13, i2 = this.a21, a2 = this.a22, u2 = this.a23, s2 = this.a31, c2 = this.a32, f2 = this.a33, h2 = 0; h2 < e2; h2 += 2) {
      var l2 = t3[h2], d2 = t3[h2 + 1], p2 = o2 * l2 + u2 * d2 + f2;
      t3[h2] = (r2 * l2 + i2 * d2 + s2) / p2, t3[h2 + 1] = (n2 * l2 + a2 * d2 + c2) / p2;
    }
  }, t2.prototype.transformPointsWithValues = function(t3, e2) {
    for (var r2 = this.a11, n2 = this.a12, o2 = this.a13, i2 = this.a21, a2 = this.a22, u2 = this.a23, s2 = this.a31, c2 = this.a32, f2 = this.a33, h2 = t3.length, l2 = 0; l2 < h2; l2++) {
      var d2 = t3[l2], p2 = e2[l2], g2 = o2 * d2 + u2 * p2 + f2;
      t3[l2] = (r2 * d2 + i2 * p2 + s2) / g2, e2[l2] = (n2 * d2 + a2 * p2 + c2) / g2;
    }
  }, t2.squareToQuadrilateral = function(e2, r2, n2, o2, i2, a2, u2, s2) {
    var c2 = e2 - n2 + i2 - u2, f2 = r2 - o2 + a2 - s2;
    if (0 === c2 && 0 === f2)
      return new t2(n2 - e2, i2 - n2, e2, o2 - r2, a2 - o2, r2, 0, 0, 1);
    var h2 = n2 - i2, l2 = u2 - i2, d2 = o2 - a2, p2 = s2 - a2, g2 = h2 * p2 - l2 * d2, y2 = (c2 * p2 - l2 * f2) / g2, w2 = (h2 * f2 - c2 * d2) / g2;
    return new t2(n2 - e2 + y2 * n2, u2 - e2 + w2 * u2, e2, o2 - r2 + y2 * o2, s2 - r2 + w2 * s2, r2, y2, w2, 1);
  }, t2.quadrilateralToSquare = function(e2, r2, n2, o2, i2, a2, u2, s2) {
    return t2.squareToQuadrilateral(e2, r2, n2, o2, i2, a2, u2, s2).buildAdjoint();
  }, t2.prototype.buildAdjoint = function() {
    return new t2(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
  }, t2.prototype.times = function(e2) {
    return new t2(this.a11 * e2.a11 + this.a21 * e2.a12 + this.a31 * e2.a13, this.a11 * e2.a21 + this.a21 * e2.a22 + this.a31 * e2.a23, this.a11 * e2.a31 + this.a21 * e2.a32 + this.a31 * e2.a33, this.a12 * e2.a11 + this.a22 * e2.a12 + this.a32 * e2.a13, this.a12 * e2.a21 + this.a22 * e2.a22 + this.a32 * e2.a23, this.a12 * e2.a31 + this.a22 * e2.a32 + this.a32 * e2.a33, this.a13 * e2.a11 + this.a23 * e2.a12 + this.a33 * e2.a13, this.a13 * e2.a21 + this.a23 * e2.a22 + this.a33 * e2.a23, this.a13 * e2.a31 + this.a23 * e2.a32 + this.a33 * e2.a33);
  }, t2;
}();
var bt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Rt = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return bt(e2, t2), e2.prototype.sampleGrid = function(t3, e3, r2, n2, o2, i2, a2, u2, s2, c2, f2, h2, l2, d2, p2, g2, y2, w2, _2) {
    var v2 = Tt.quadrilateralToQuadrilateral(n2, o2, i2, a2, u2, s2, c2, f2, h2, l2, d2, p2, g2, y2, w2, _2);
    return this.sampleGridWithTransform(t3, e3, r2, v2);
  }, e2.prototype.sampleGridWithTransform = function(t3, e3, r2, n2) {
    if (e3 <= 0 || r2 <= 0)
      throw new U();
    for (var o2 = new x(e3, r2), i2 = new Float32Array(2 * e3), a2 = 0; a2 < r2; a2++) {
      for (var u2 = i2.length, s2 = a2 + 0.5, c2 = 0; c2 < u2; c2 += 2)
        i2[c2] = c2 / 2 + 0.5, i2[c2 + 1] = s2;
      n2.transformPoints(i2), Ot.checkAndNudgePoints(t3, i2);
      try {
        for (c2 = 0; c2 < u2; c2 += 2)
          t3.get(Math.floor(i2[c2]), Math.floor(i2[c2 + 1])) && o2.set(c2 / 2, a2);
      } catch (t4) {
        throw new U();
      }
    }
    return o2;
  }, e2;
}(Ot);
var Nt = function() {
  function t2() {
  }
  return t2.setGridSampler = function(e2) {
    t2.gridSampler = e2;
  }, t2.getInstance = function() {
    return t2.gridSampler;
  }, t2.gridSampler = new Rt(), t2;
}();
var Dt = function() {
  function t2(t3, e2) {
    this.x = t3, this.y = e2;
  }
  return t2.prototype.toResultPoint = function() {
    return new At(this.getX(), this.getY());
  }, t2.prototype.getX = function() {
    return this.x;
  }, t2.prototype.getY = function() {
    return this.y;
  }, t2;
}();
var Pt = function() {
  function t2(t3) {
    this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]), this.image = t3;
  }
  return t2.prototype.detect = function() {
    return this.detectMirror(false);
  }, t2.prototype.detectMirror = function(t3) {
    var e2 = this.getMatrixCenter(), r2 = this.getBullsEyeCorners(e2);
    if (t3) {
      var n2 = r2[0];
      r2[0] = r2[2], r2[2] = n2;
    }
    this.extractParameters(r2);
    var o2 = this.sampleGrid(this.image, r2[this.shift % 4], r2[(this.shift + 1) % 4], r2[(this.shift + 2) % 4], r2[(this.shift + 3) % 4]), i2 = this.getMatrixCornerPoints(r2);
    return new It(o2, i2, this.compact, this.nbDataBlocks, this.nbLayers);
  }, t2.prototype.extractParameters = function(t3) {
    if (!(this.isValidPoint(t3[0]) && this.isValidPoint(t3[1]) && this.isValidPoint(t3[2]) && this.isValidPoint(t3[3])))
      throw new U();
    var e2 = 2 * this.nbCenterLayers, r2 = new Int32Array([this.sampleLine(t3[0], t3[1], e2), this.sampleLine(t3[1], t3[2], e2), this.sampleLine(t3[2], t3[3], e2), this.sampleLine(t3[3], t3[0], e2)]);
    this.shift = this.getRotation(r2, e2);
    for (var n2 = 0, o2 = 0; o2 < 4; o2++) {
      var i2 = r2[(this.shift + o2) % 4];
      this.compact ? (n2 <<= 7, n2 += i2 >> 1 & 127) : (n2 <<= 10, n2 += (i2 >> 2 & 992) + (i2 >> 1 & 31));
    }
    var a2 = this.getCorrectedParameterData(n2, this.compact);
    this.compact ? (this.nbLayers = 1 + (a2 >> 6), this.nbDataBlocks = 1 + (63 & a2)) : (this.nbLayers = 1 + (a2 >> 11), this.nbDataBlocks = 1 + (2047 & a2));
  }, t2.prototype.getRotation = function(t3, e2) {
    var r2 = 0;
    t3.forEach(function(t4, n3, o2) {
      r2 = (r2 << 3) + ((t4 >> e2 - 2 << 1) + (1 & t4));
    }), r2 = ((1 & r2) << 11) + (r2 >> 1);
    for (var n2 = 0; n2 < 4; n2++)
      if (I.bitCount(r2 ^ this.EXPECTED_CORNER_BITS[n2]) <= 2)
        return n2;
    throw new U();
  }, t2.prototype.getCorrectedParameterData = function(t3, e2) {
    var r2, n2;
    e2 ? (r2 = 7, n2 = 2) : (r2 = 10, n2 = 4);
    for (var o2 = r2 - n2, i2 = new Int32Array(r2), a2 = r2 - 1; a2 >= 0; --a2)
      i2[a2] = 15 & t3, t3 >>= 4;
    try {
      new wt(lt.AZTEC_PARAM).decode(i2, o2);
    } catch (t4) {
      throw new U();
    }
    var u2 = 0;
    for (a2 = 0; a2 < n2; a2++)
      u2 = (u2 << 4) + i2[a2];
    return u2;
  }, t2.prototype.getBullsEyeCorners = function(t3) {
    var e2 = t3, r2 = t3, n2 = t3, o2 = t3, i2 = true;
    for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
      var a2 = this.getFirstDifferent(e2, i2, 1, -1), u2 = this.getFirstDifferent(r2, i2, 1, 1), s2 = this.getFirstDifferent(n2, i2, -1, 1), c2 = this.getFirstDifferent(o2, i2, -1, -1);
      if (this.nbCenterLayers > 2) {
        var f2 = this.distancePoint(c2, a2) * this.nbCenterLayers / (this.distancePoint(o2, e2) * (this.nbCenterLayers + 2));
        if (f2 < 0.75 || f2 > 1.25 || !this.isWhiteOrBlackRectangle(a2, u2, s2, c2))
          break;
      }
      e2 = a2, r2 = u2, n2 = s2, o2 = c2, i2 = !i2;
    }
    if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers)
      throw new U();
    this.compact = 5 === this.nbCenterLayers;
    var h2 = new At(e2.getX() + 0.5, e2.getY() - 0.5), l2 = new At(r2.getX() + 0.5, r2.getY() + 0.5), d2 = new At(n2.getX() - 0.5, n2.getY() + 0.5), p2 = new At(o2.getX() - 0.5, o2.getY() - 0.5);
    return this.expandSquare([h2, l2, d2, p2], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
  }, t2.prototype.getMatrixCenter = function() {
    var t3, e2, r2, n2;
    try {
      t3 = (s2 = new St(this.image).detect())[0], e2 = s2[1], r2 = s2[2], n2 = s2[3];
    } catch (a3) {
      var o2 = this.image.getWidth() / 2, i2 = this.image.getHeight() / 2;
      t3 = this.getFirstDifferent(new Dt(o2 + 7, i2 - 7), false, 1, -1).toResultPoint(), e2 = this.getFirstDifferent(new Dt(o2 + 7, i2 + 7), false, 1, 1).toResultPoint(), r2 = this.getFirstDifferent(new Dt(o2 - 7, i2 + 7), false, -1, 1).toResultPoint(), n2 = this.getFirstDifferent(new Dt(o2 - 7, i2 - 7), false, -1, -1).toResultPoint();
    }
    var a2 = vt.round((t3.getX() + n2.getX() + e2.getX() + r2.getX()) / 4), u2 = vt.round((t3.getY() + n2.getY() + e2.getY() + r2.getY()) / 4);
    try {
      var s2;
      t3 = (s2 = new St(this.image, 15, a2, u2).detect())[0], e2 = s2[1], r2 = s2[2], n2 = s2[3];
    } catch (o3) {
      t3 = this.getFirstDifferent(new Dt(a2 + 7, u2 - 7), false, 1, -1).toResultPoint(), e2 = this.getFirstDifferent(new Dt(a2 + 7, u2 + 7), false, 1, 1).toResultPoint(), r2 = this.getFirstDifferent(new Dt(a2 - 7, u2 + 7), false, -1, 1).toResultPoint(), n2 = this.getFirstDifferent(new Dt(a2 - 7, u2 - 7), false, -1, -1).toResultPoint();
    }
    return a2 = vt.round((t3.getX() + n2.getX() + e2.getX() + r2.getX()) / 4), u2 = vt.round((t3.getY() + n2.getY() + e2.getY() + r2.getY()) / 4), new Dt(a2, u2);
  }, t2.prototype.getMatrixCornerPoints = function(t3) {
    return this.expandSquare(t3, 2 * this.nbCenterLayers, this.getDimension());
  }, t2.prototype.sampleGrid = function(t3, e2, r2, n2, o2) {
    var i2 = Nt.getInstance(), a2 = this.getDimension(), u2 = a2 / 2 - this.nbCenterLayers, s2 = a2 / 2 + this.nbCenterLayers;
    return i2.sampleGrid(t3, a2, a2, u2, u2, s2, u2, s2, s2, u2, s2, e2.getX(), e2.getY(), r2.getX(), r2.getY(), n2.getX(), n2.getY(), o2.getX(), o2.getY());
  }, t2.prototype.sampleLine = function(t3, e2, r2) {
    for (var n2 = 0, o2 = this.distanceResultPoint(t3, e2), i2 = o2 / r2, a2 = t3.getX(), u2 = t3.getY(), s2 = i2 * (e2.getX() - t3.getX()) / o2, c2 = i2 * (e2.getY() - t3.getY()) / o2, f2 = 0; f2 < r2; f2++)
      this.image.get(vt.round(a2 + f2 * s2), vt.round(u2 + f2 * c2)) && (n2 |= 1 << r2 - f2 - 1);
    return n2;
  }, t2.prototype.isWhiteOrBlackRectangle = function(t3, e2, r2, n2) {
    t3 = new Dt(t3.getX() - 3, t3.getY() + 3), e2 = new Dt(e2.getX() - 3, e2.getY() - 3), r2 = new Dt(r2.getX() + 3, r2.getY() - 3), n2 = new Dt(n2.getX() + 3, n2.getY() + 3);
    var o2 = this.getColor(n2, t3);
    if (0 === o2)
      return false;
    var i2 = this.getColor(t3, e2);
    return i2 === o2 && ((i2 = this.getColor(e2, r2)) === o2 && (i2 = this.getColor(r2, n2)) === o2);
  }, t2.prototype.getColor = function(t3, e2) {
    for (var r2 = this.distancePoint(t3, e2), n2 = (e2.getX() - t3.getX()) / r2, o2 = (e2.getY() - t3.getY()) / r2, i2 = 0, a2 = t3.getX(), u2 = t3.getY(), s2 = this.image.get(t3.getX(), t3.getY()), c2 = Math.ceil(r2), f2 = 0; f2 < c2; f2++)
      a2 += n2, u2 += o2, this.image.get(vt.round(a2), vt.round(u2)) !== s2 && i2++;
    var h2 = i2 / r2;
    return h2 > 0.1 && h2 < 0.9 ? 0 : h2 <= 0.1 === s2 ? 1 : -1;
  }, t2.prototype.getFirstDifferent = function(t3, e2, r2, n2) {
    for (var o2 = t3.getX() + r2, i2 = t3.getY() + n2; this.isValid(o2, i2) && this.image.get(o2, i2) === e2; )
      o2 += r2, i2 += n2;
    for (o2 -= r2, i2 -= n2; this.isValid(o2, i2) && this.image.get(o2, i2) === e2; )
      o2 += r2;
    for (o2 -= r2; this.isValid(o2, i2) && this.image.get(o2, i2) === e2; )
      i2 += n2;
    return new Dt(o2, i2 -= n2);
  }, t2.prototype.expandSquare = function(t3, e2, r2) {
    var n2 = r2 / (2 * e2), o2 = t3[0].getX() - t3[2].getX(), i2 = t3[0].getY() - t3[2].getY(), a2 = (t3[0].getX() + t3[2].getX()) / 2, u2 = (t3[0].getY() + t3[2].getY()) / 2, s2 = new At(a2 + n2 * o2, u2 + n2 * i2), c2 = new At(a2 - n2 * o2, u2 - n2 * i2);
    return o2 = t3[1].getX() - t3[3].getX(), i2 = t3[1].getY() - t3[3].getY(), a2 = (t3[1].getX() + t3[3].getX()) / 2, u2 = (t3[1].getY() + t3[3].getY()) / 2, [s2, new At(a2 + n2 * o2, u2 + n2 * i2), c2, new At(a2 - n2 * o2, u2 - n2 * i2)];
  }, t2.prototype.isValid = function(t3, e2) {
    return t3 >= 0 && t3 < this.image.getWidth() && e2 > 0 && e2 < this.image.getHeight();
  }, t2.prototype.isValidPoint = function(t3) {
    var e2 = vt.round(t3.getX()), r2 = vt.round(t3.getY());
    return this.isValid(e2, r2);
  }, t2.prototype.distancePoint = function(t3, e2) {
    return vt.distance(t3.getX(), t3.getY(), e2.getX(), e2.getY());
  }, t2.prototype.distanceResultPoint = function(t3, e2) {
    return vt.distance(t3.getX(), t3.getY(), e2.getX(), e2.getY());
  }, t2.prototype.getDimension = function() {
    return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (I.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
  }, t2;
}();
var Mt = function() {
  function t2() {
  }
  return t2.prototype.decode = function(t3, e2) {
    void 0 === e2 && (e2 = null);
    var r2 = null, n2 = new Pt(t3.getBlackMatrix()), o2 = null, i2 = null;
    try {
      o2 = (a2 = n2.detectMirror(false)).getPoints(), this.reportFoundResultPoints(e2, o2), i2 = new _t().decode(a2);
    } catch (t4) {
      r2 = t4;
    }
    if (null == i2)
      try {
        var a2;
        o2 = (a2 = n2.detectMirror(true)).getPoints(), this.reportFoundResultPoints(e2, o2), i2 = new _t().decode(a2);
      } catch (t4) {
        if (null != r2)
          throw r2;
        throw t4;
      }
    var u2 = new et(i2.getText(), i2.getRawBytes(), i2.getNumBits(), o2, nt.AZTEC, w.currentTimeMillis()), s2 = i2.getByteSegments();
    null != s2 && u2.putMetadata(it.BYTE_SEGMENTS, s2);
    var c2 = i2.getECLevel();
    return null != c2 && u2.putMetadata(it.ERROR_CORRECTION_LEVEL, c2), u2;
  }, t2.prototype.reportFoundResultPoints = function(t3, e2) {
    if (null != t3) {
      var r2 = t3.get(T.NEED_RESULT_POINT_CALLBACK);
      null != r2 && e2.forEach(function(t4, e3, n2) {
        r2.foundPossibleResultPoint(t4);
      });
    }
  }, t2.prototype.reset = function() {
  }, t2;
}();
var Bt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new Mt(), e3) || this;
  }
  Bt(e2, t2);
}(tt);
var Lt = function() {
  function t2() {
  }
  return t2.prototype.decode = function(t3, e2) {
    try {
      return this.doDecode(t3, e2);
    } catch (c2) {
      if (e2 && true === e2.get(T.TRY_HARDER) && t3.isRotateSupported()) {
        var r2 = t3.rotateCounterClockwise(), n2 = this.doDecode(r2, e2), o2 = n2.getResultMetadata(), i2 = 270;
        null !== o2 && true === o2.get(it.ORIENTATION) && (i2 += o2.get(it.ORIENTATION) % 360), n2.putMetadata(it.ORIENTATION, i2);
        var a2 = n2.getResultPoints();
        if (null !== a2)
          for (var u2 = r2.getHeight(), s2 = 0; s2 < a2.length; s2++)
            a2[s2] = new At(u2 - a2[s2].getY() - 1, a2[s2].getX());
        return n2;
      }
      throw new U();
    }
  }, t2.prototype.reset = function() {
  }, t2.prototype.doDecode = function(t3, e2) {
    var r2, n2 = t3.getWidth(), o2 = t3.getHeight(), i2 = new S(n2), a2 = e2 && true === e2.get(T.TRY_HARDER), u2 = Math.max(1, o2 >> (a2 ? 8 : 5));
    r2 = a2 ? o2 : 15;
    for (var s2 = Math.trunc(o2 / 2), c2 = 0; c2 < r2; c2++) {
      var f2 = Math.trunc((c2 + 1) / 2), h2 = s2 + u2 * (0 == (1 & c2) ? f2 : -f2);
      if (h2 < 0 || h2 >= o2)
        break;
      try {
        i2 = t3.getBlackRow(h2, i2);
      } catch (t4) {
        continue;
      }
      for (var l2 = function(t4) {
        if (1 === t4 && (i2.reverse(), e2 && true === e2.get(T.NEED_RESULT_POINT_CALLBACK))) {
          var r3 = /* @__PURE__ */ new Map();
          e2.forEach(function(t5, e3) {
            return r3.set(e3, t5);
          }), r3.delete(T.NEED_RESULT_POINT_CALLBACK), e2 = r3;
        }
        try {
          var o3 = d2.decodeRow(h2, i2, e2);
          if (1 === t4) {
            o3.putMetadata(it.ORIENTATION, 180);
            var a3 = o3.getResultPoints();
            null !== a3 && (a3[0] = new At(n2 - a3[0].getX() - 1, a3[0].getY()), a3[1] = new At(n2 - a3[1].getX() - 1, a3[1].getY()));
          }
          return { value: o3 };
        } catch (t5) {
        }
      }, d2 = this, p2 = 0; p2 < 2; p2++) {
        var g2 = l2(p2);
        if ("object" == typeof g2)
          return g2.value;
      }
    }
    throw new U();
  }, t2.recordPattern = function(t3, e2, r2) {
    for (var n2 = r2.length, o2 = 0; o2 < n2; o2++)
      r2[o2] = 0;
    var i2 = t3.getSize();
    if (e2 >= i2)
      throw new U();
    for (var a2 = !t3.get(e2), u2 = 0, s2 = e2; s2 < i2; ) {
      if (t3.get(s2) !== a2)
        r2[u2]++;
      else {
        if (++u2 === n2)
          break;
        r2[u2] = 1, a2 = !a2;
      }
      s2++;
    }
    if (u2 !== n2 && (u2 !== n2 - 1 || s2 !== i2))
      throw new U();
  }, t2.recordPatternInReverse = function(e2, r2, n2) {
    for (var o2 = n2.length, i2 = e2.get(r2); r2 > 0 && o2 >= 0; )
      e2.get(--r2) !== i2 && (o2--, i2 = !i2);
    if (o2 >= 0)
      throw new U();
    t2.recordPattern(e2, r2 + 1, n2);
  }, t2.patternMatchVariance = function(t3, e2, r2) {
    for (var n2 = t3.length, o2 = 0, i2 = 0, a2 = 0; a2 < n2; a2++)
      o2 += t3[a2], i2 += e2[a2];
    if (o2 < i2)
      return Number.POSITIVE_INFINITY;
    var u2 = o2 / i2;
    r2 *= u2;
    for (var s2 = 0, c2 = 0; c2 < n2; c2++) {
      var f2 = t3[c2], h2 = e2[c2] * u2, l2 = f2 > h2 ? f2 - h2 : h2 - f2;
      if (l2 > r2)
        return Number.POSITIVE_INFINITY;
      s2 += l2;
    }
    return s2 / o2;
  }, t2;
}();
var Ft = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var kt = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Ft(e2, t2), e2.findStartPattern = function(t3) {
    for (var r2 = t3.getSize(), n2 = t3.getNextSet(0), o2 = 0, i2 = Int32Array.from([0, 0, 0, 0, 0, 0]), a2 = n2, u2 = false, s2 = n2; s2 < r2; s2++)
      if (t3.get(s2) !== u2)
        i2[o2]++;
      else {
        if (5 === o2) {
          for (var c2 = e2.MAX_AVG_VARIANCE, f2 = -1, h2 = e2.CODE_START_A; h2 <= e2.CODE_START_C; h2++) {
            var l2 = Lt.patternMatchVariance(i2, e2.CODE_PATTERNS[h2], e2.MAX_INDIVIDUAL_VARIANCE);
            l2 < c2 && (c2 = l2, f2 = h2);
          }
          if (f2 >= 0 && t3.isRange(Math.max(0, a2 - (s2 - a2) / 2), a2, false))
            return Int32Array.from([a2, s2, f2]);
          a2 += i2[0] + i2[1], (i2 = i2.slice(2, i2.length - 1))[o2 - 1] = 0, i2[o2] = 0, o2--;
        } else
          o2++;
        i2[o2] = 1, u2 = !u2;
      }
    throw new U();
  }, e2.decodeCode = function(t3, r2, n2) {
    Lt.recordPattern(t3, n2, r2);
    for (var o2 = e2.MAX_AVG_VARIANCE, i2 = -1, a2 = 0; a2 < e2.CODE_PATTERNS.length; a2++) {
      var u2 = e2.CODE_PATTERNS[a2], s2 = this.patternMatchVariance(r2, u2, e2.MAX_INDIVIDUAL_VARIANCE);
      s2 < o2 && (o2 = s2, i2 = a2);
    }
    if (i2 >= 0)
      return i2;
    throw new U();
  }, e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2 = n2 && true === n2.get(T.ASSUME_GS1), a2 = e2.findStartPattern(r2), u2 = a2[2], s2 = 0, c2 = new Uint8Array(20);
    switch (c2[s2++] = u2, u2) {
      case e2.CODE_START_A:
        o2 = e2.CODE_CODE_A;
        break;
      case e2.CODE_START_B:
        o2 = e2.CODE_CODE_B;
        break;
      case e2.CODE_START_C:
        o2 = e2.CODE_CODE_C;
        break;
      default:
        throw new R();
    }
    for (var f2 = false, h2 = false, l2 = "", d2 = a2[0], p2 = a2[1], y2 = Int32Array.from([0, 0, 0, 0, 0, 0]), w2 = 0, _2 = 0, v2 = u2, m2 = 0, A2 = true, E2 = false, C2 = false; !f2; ) {
      var I2 = h2;
      switch (h2 = false, w2 = _2, _2 = e2.decodeCode(r2, y2, p2), c2[s2++] = _2, _2 !== e2.CODE_STOP && (A2 = true), _2 !== e2.CODE_STOP && (v2 += ++m2 * _2), d2 = p2, p2 += y2.reduce(function(t4, e3) {
        return t4 + e3;
      }, 0), _2) {
        case e2.CODE_START_A:
        case e2.CODE_START_B:
        case e2.CODE_START_C:
          throw new R();
      }
      switch (o2) {
        case e2.CODE_CODE_A:
          if (_2 < 64)
            l2 += C2 === E2 ? String.fromCharCode(" ".charCodeAt(0) + _2) : String.fromCharCode(" ".charCodeAt(0) + _2 + 128), C2 = false;
          else if (_2 < 96)
            l2 += C2 === E2 ? String.fromCharCode(_2 - 64) : String.fromCharCode(_2 + 64), C2 = false;
          else
            switch (_2 !== e2.CODE_STOP && (A2 = false), _2) {
              case e2.CODE_FNC_1:
                i2 && (0 === l2.length ? l2 += "]C1" : l2 += String.fromCharCode(29));
                break;
              case e2.CODE_FNC_2:
              case e2.CODE_FNC_3:
                break;
              case e2.CODE_FNC_4_A:
                !E2 && C2 ? (E2 = true, C2 = false) : E2 && C2 ? (E2 = false, C2 = false) : C2 = true;
                break;
              case e2.CODE_SHIFT:
                h2 = true, o2 = e2.CODE_CODE_B;
                break;
              case e2.CODE_CODE_B:
                o2 = e2.CODE_CODE_B;
                break;
              case e2.CODE_CODE_C:
                o2 = e2.CODE_CODE_C;
                break;
              case e2.CODE_STOP:
                f2 = true;
            }
          break;
        case e2.CODE_CODE_B:
          if (_2 < 96)
            l2 += C2 === E2 ? String.fromCharCode(" ".charCodeAt(0) + _2) : String.fromCharCode(" ".charCodeAt(0) + _2 + 128), C2 = false;
          else
            switch (_2 !== e2.CODE_STOP && (A2 = false), _2) {
              case e2.CODE_FNC_1:
                i2 && (0 === l2.length ? l2 += "]C1" : l2 += String.fromCharCode(29));
                break;
              case e2.CODE_FNC_2:
              case e2.CODE_FNC_3:
                break;
              case e2.CODE_FNC_4_B:
                !E2 && C2 ? (E2 = true, C2 = false) : E2 && C2 ? (E2 = false, C2 = false) : C2 = true;
                break;
              case e2.CODE_SHIFT:
                h2 = true, o2 = e2.CODE_CODE_A;
                break;
              case e2.CODE_CODE_A:
                o2 = e2.CODE_CODE_A;
                break;
              case e2.CODE_CODE_C:
                o2 = e2.CODE_CODE_C;
                break;
              case e2.CODE_STOP:
                f2 = true;
            }
          break;
        case e2.CODE_CODE_C:
          if (_2 < 100)
            _2 < 10 && (l2 += "0"), l2 += _2;
          else
            switch (_2 !== e2.CODE_STOP && (A2 = false), _2) {
              case e2.CODE_FNC_1:
                i2 && (0 === l2.length ? l2 += "]C1" : l2 += String.fromCharCode(29));
                break;
              case e2.CODE_CODE_A:
                o2 = e2.CODE_CODE_A;
                break;
              case e2.CODE_CODE_B:
                o2 = e2.CODE_CODE_B;
                break;
              case e2.CODE_STOP:
                f2 = true;
            }
      }
      I2 && (o2 = o2 === e2.CODE_CODE_A ? e2.CODE_CODE_B : e2.CODE_CODE_A);
    }
    var S2 = p2 - d2;
    if (p2 = r2.getNextUnset(p2), !r2.isRange(p2, Math.min(r2.getSize(), p2 + (p2 - d2) / 2), false))
      throw new U();
    if ((v2 -= m2 * w2) % 103 !== w2)
      throw new g();
    var O2 = l2.length;
    if (0 === O2)
      throw new U();
    O2 > 0 && A2 && (l2 = o2 === e2.CODE_CODE_C ? l2.substring(0, O2 - 2) : l2.substring(0, O2 - 1));
    for (var b2 = (a2[1] + a2[0]) / 2, N2 = d2 + S2 / 2, D2 = c2.length, P2 = new Uint8Array(D2), M2 = 0; M2 < D2; M2++)
      P2[M2] = c2[M2];
    var B2 = [new At(b2, t3), new At(N2, t3)];
    return new et(l2, P2, 0, B2, nt.CODE_128, (/* @__PURE__ */ new Date()).getTime());
  }, e2.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])], e2.MAX_AVG_VARIANCE = 0.25, e2.MAX_INDIVIDUAL_VARIANCE = 0.7, e2.CODE_SHIFT = 98, e2.CODE_CODE_C = 99, e2.CODE_CODE_B = 100, e2.CODE_CODE_A = 101, e2.CODE_FNC_1 = 102, e2.CODE_FNC_2 = 97, e2.CODE_FNC_3 = 96, e2.CODE_FNC_4_A = 101, e2.CODE_FNC_4_B = 100, e2.CODE_START_A = 103, e2.CODE_START_B = 104, e2.CODE_START_C = 105, e2.CODE_STOP = 106, e2;
}(Lt);
var xt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Vt = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Ut = function(t2) {
  function e2(e3, r2) {
    void 0 === e3 && (e3 = false), void 0 === r2 && (r2 = false);
    var n2 = t2.call(this) || this;
    return n2.usingCheckDigit = e3, n2.extendedMode = r2, n2.decodeRowResult = "", n2.counters = new Int32Array(9), n2;
  }
  return xt(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2, a2, u2, s2 = this.counters;
    s2.fill(0), this.decodeRowResult = "";
    var c2, f2, h2 = e2.findAsteriskPattern(r2, s2), l2 = r2.getNextSet(h2[1]), d2 = r2.getSize();
    do {
      e2.recordPattern(r2, l2, s2);
      var p2 = e2.toNarrowWidePattern(s2);
      if (p2 < 0)
        throw new U();
      c2 = e2.patternToChar(p2), this.decodeRowResult += c2, f2 = l2;
      try {
        for (var y2 = (o2 = void 0, Vt(s2)), w2 = y2.next(); !w2.done; w2 = y2.next()) {
          l2 += w2.value;
        }
      } catch (t4) {
        o2 = { error: t4 };
      } finally {
        try {
          w2 && !w2.done && (i2 = y2.return) && i2.call(y2);
        } finally {
          if (o2)
            throw o2.error;
        }
      }
      l2 = r2.getNextSet(l2);
    } while ("*" !== c2);
    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
    var _2, v2 = 0;
    try {
      for (var m2 = Vt(s2), A2 = m2.next(); !A2.done; A2 = m2.next()) {
        v2 += A2.value;
      }
    } catch (t4) {
      a2 = { error: t4 };
    } finally {
      try {
        A2 && !A2.done && (u2 = m2.return) && u2.call(m2);
      } finally {
        if (a2)
          throw a2.error;
      }
    }
    if (l2 !== d2 && 2 * (l2 - f2 - v2) < v2)
      throw new U();
    if (this.usingCheckDigit) {
      for (var E2 = this.decodeRowResult.length - 1, C2 = 0, I2 = 0; I2 < E2; I2++)
        C2 += e2.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(I2));
      if (this.decodeRowResult.charAt(E2) !== e2.ALPHABET_STRING.charAt(C2 % 43))
        throw new g();
      this.decodeRowResult = this.decodeRowResult.substring(0, E2);
    }
    if (0 === this.decodeRowResult.length)
      throw new U();
    _2 = this.extendedMode ? e2.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
    var S2 = (h2[1] + h2[0]) / 2, O2 = f2 + v2 / 2;
    return new et(_2, null, 0, [new At(S2, t3), new At(O2, t3)], nt.CODE_39, (/* @__PURE__ */ new Date()).getTime());
  }, e2.findAsteriskPattern = function(t3, r2) {
    for (var n2 = t3.getSize(), o2 = t3.getNextSet(0), i2 = 0, a2 = o2, u2 = false, s2 = r2.length, c2 = o2; c2 < n2; c2++)
      if (t3.get(c2) !== u2)
        r2[i2]++;
      else {
        if (i2 === s2 - 1) {
          if (this.toNarrowWidePattern(r2) === e2.ASTERISK_ENCODING && t3.isRange(Math.max(0, a2 - Math.floor((c2 - a2) / 2)), a2, false))
            return [a2, c2];
          a2 += r2[0] + r2[1], r2.copyWithin(0, 2, 2 + i2 - 1), r2[i2 - 1] = 0, r2[i2] = 0, i2--;
        } else
          i2++;
        r2[i2] = 1, u2 = !u2;
      }
    throw new U();
  }, e2.toNarrowWidePattern = function(t3) {
    var e3, r2, n2, o2 = t3.length, i2 = 0;
    do {
      var a2 = 2147483647;
      try {
        for (var u2 = (e3 = void 0, Vt(t3)), s2 = u2.next(); !s2.done; s2 = u2.next()) {
          (l2 = s2.value) < a2 && l2 > i2 && (a2 = l2);
        }
      } catch (t4) {
        e3 = { error: t4 };
      } finally {
        try {
          s2 && !s2.done && (r2 = u2.return) && r2.call(u2);
        } finally {
          if (e3)
            throw e3.error;
        }
      }
      i2 = a2, n2 = 0;
      for (var c2 = 0, f2 = 0, h2 = 0; h2 < o2; h2++) {
        (l2 = t3[h2]) > i2 && (f2 |= 1 << o2 - 1 - h2, n2++, c2 += l2);
      }
      if (3 === n2) {
        for (h2 = 0; h2 < o2 && n2 > 0; h2++) {
          var l2;
          if ((l2 = t3[h2]) > i2 && (n2--, 2 * l2 >= c2))
            return -1;
        }
        return f2;
      }
    } while (n2 > 3);
    return -1;
  }, e2.patternToChar = function(t3) {
    for (var r2 = 0; r2 < e2.CHARACTER_ENCODINGS.length; r2++)
      if (e2.CHARACTER_ENCODINGS[r2] === t3)
        return e2.ALPHABET_STRING.charAt(r2);
    if (t3 === e2.ASTERISK_ENCODING)
      return "*";
    throw new U();
  }, e2.decodeExtended = function(t3) {
    for (var e3 = t3.length, r2 = "", n2 = 0; n2 < e3; n2++) {
      var o2 = t3.charAt(n2);
      if ("+" === o2 || "$" === o2 || "%" === o2 || "/" === o2) {
        var i2 = t3.charAt(n2 + 1), a2 = "\0";
        switch (o2) {
          case "+":
            if (!(i2 >= "A" && i2 <= "Z"))
              throw new R();
            a2 = String.fromCharCode(i2.charCodeAt(0) + 32);
            break;
          case "$":
            if (!(i2 >= "A" && i2 <= "Z"))
              throw new R();
            a2 = String.fromCharCode(i2.charCodeAt(0) - 64);
            break;
          case "%":
            if (i2 >= "A" && i2 <= "E")
              a2 = String.fromCharCode(i2.charCodeAt(0) - 38);
            else if (i2 >= "F" && i2 <= "J")
              a2 = String.fromCharCode(i2.charCodeAt(0) - 11);
            else if (i2 >= "K" && i2 <= "O")
              a2 = String.fromCharCode(i2.charCodeAt(0) + 16);
            else if (i2 >= "P" && i2 <= "T")
              a2 = String.fromCharCode(i2.charCodeAt(0) + 43);
            else if ("U" === i2)
              a2 = "\0";
            else if ("V" === i2)
              a2 = "@";
            else if ("W" === i2)
              a2 = "`";
            else {
              if ("X" !== i2 && "Y" !== i2 && "Z" !== i2)
                throw new R();
              a2 = "";
            }
            break;
          case "/":
            if (i2 >= "A" && i2 <= "O")
              a2 = String.fromCharCode(i2.charCodeAt(0) - 32);
            else {
              if ("Z" !== i2)
                throw new R();
              a2 = ":";
            }
        }
        r2 += a2, n2++;
      } else
        r2 += o2;
    }
    return r2;
  }, e2.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", e2.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], e2.ASTERISK_ENCODING = 148, e2;
}(Lt);
var Ht = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Gt = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Xt = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.narrowLineWidth = -1, e3;
  }
  return Ht(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2, a2 = this.decodeStart(r2), u2 = this.decodeEnd(r2), s2 = new k();
    e2.decodeMiddle(r2, a2[1], u2[0], s2);
    var c2 = s2.toString(), f2 = null;
    null != n2 && (f2 = n2.get(T.ALLOWED_LENGTHS)), null == f2 && (f2 = e2.DEFAULT_ALLOWED_LENGTHS);
    var h2 = c2.length, l2 = false, d2 = 0;
    try {
      for (var p2 = Gt(f2), g2 = p2.next(); !g2.done; g2 = p2.next()) {
        var y2 = g2.value;
        if (h2 === y2) {
          l2 = true;
          break;
        }
        y2 > d2 && (d2 = y2);
      }
    } catch (t4) {
      o2 = { error: t4 };
    } finally {
      try {
        g2 && !g2.done && (i2 = p2.return) && i2.call(p2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
    if (!l2 && h2 > d2 && (l2 = true), !l2)
      throw new R();
    var w2 = [new At(a2[1], t3), new At(u2[0], t3)];
    return new et(c2, null, 0, w2, nt.ITF, (/* @__PURE__ */ new Date()).getTime());
  }, e2.decodeMiddle = function(t3, r2, n2, o2) {
    var i2 = new Int32Array(10), a2 = new Int32Array(5), u2 = new Int32Array(5);
    for (i2.fill(0), a2.fill(0), u2.fill(0); r2 < n2; ) {
      Lt.recordPattern(t3, r2, i2);
      for (var s2 = 0; s2 < 5; s2++) {
        var c2 = 2 * s2;
        a2[s2] = i2[c2], u2[s2] = i2[c2 + 1];
      }
      var f2 = e2.decodeDigit(a2);
      o2.append(f2.toString()), f2 = this.decodeDigit(u2), o2.append(f2.toString()), i2.forEach(function(t4) {
        r2 += t4;
      });
    }
  }, e2.prototype.decodeStart = function(t3) {
    var r2 = e2.skipWhiteSpace(t3), n2 = e2.findGuardPattern(t3, r2, e2.START_PATTERN);
    return this.narrowLineWidth = (n2[1] - n2[0]) / 4, this.validateQuietZone(t3, n2[0]), n2;
  }, e2.prototype.validateQuietZone = function(t3, e3) {
    var r2 = 10 * this.narrowLineWidth;
    r2 = r2 < e3 ? r2 : e3;
    for (var n2 = e3 - 1; r2 > 0 && n2 >= 0 && !t3.get(n2); n2--)
      r2--;
    if (0 !== r2)
      throw new U();
  }, e2.skipWhiteSpace = function(t3) {
    var e3 = t3.getSize(), r2 = t3.getNextSet(0);
    if (r2 === e3)
      throw new U();
    return r2;
  }, e2.prototype.decodeEnd = function(t3) {
    t3.reverse();
    try {
      var r2 = e2.skipWhiteSpace(t3), n2 = void 0;
      try {
        n2 = e2.findGuardPattern(t3, r2, e2.END_PATTERN_REVERSED[0]);
      } catch (o3) {
        o3 instanceof U && (n2 = e2.findGuardPattern(t3, r2, e2.END_PATTERN_REVERSED[1]));
      }
      this.validateQuietZone(t3, n2[0]);
      var o2 = n2[0];
      return n2[0] = t3.getSize() - n2[1], n2[1] = t3.getSize() - o2, n2;
    } finally {
      t3.reverse();
    }
  }, e2.findGuardPattern = function(t3, r2, n2) {
    var o2 = n2.length, i2 = new Int32Array(o2), a2 = t3.getSize(), u2 = false, s2 = 0, c2 = r2;
    i2.fill(0);
    for (var f2 = r2; f2 < a2; f2++)
      if (t3.get(f2) !== u2)
        i2[s2]++;
      else {
        if (s2 === o2 - 1) {
          if (Lt.patternMatchVariance(i2, n2, e2.MAX_INDIVIDUAL_VARIANCE) < e2.MAX_AVG_VARIANCE)
            return [c2, f2];
          c2 += i2[0] + i2[1], w.arraycopy(i2, 2, i2, 0, s2 - 1), i2[s2 - 1] = 0, i2[s2] = 0, s2--;
        } else
          s2++;
        i2[s2] = 1, u2 = !u2;
      }
    throw new U();
  }, e2.decodeDigit = function(t3) {
    for (var r2 = e2.MAX_AVG_VARIANCE, n2 = -1, o2 = e2.PATTERNS.length, i2 = 0; i2 < o2; i2++) {
      var a2 = e2.PATTERNS[i2], u2 = Lt.patternMatchVariance(t3, a2, e2.MAX_INDIVIDUAL_VARIANCE);
      u2 < r2 ? (r2 = u2, n2 = i2) : u2 === r2 && (n2 = -1);
    }
    if (n2 >= 0)
      return n2 % 10;
    throw new U();
  }, e2.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])], e2.MAX_AVG_VARIANCE = 0.38, e2.MAX_INDIVIDUAL_VARIANCE = 0.5, e2.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], e2.START_PATTERN = Int32Array.from([1, 1, 1, 1]), e2.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])], e2;
}(Lt);
var Wt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var jt = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.decodeRowStringBuffer = "", e3;
  }
  return Wt(e2, t2), e2.findStartGuardPattern = function(t3) {
    for (var r2, n2 = false, o2 = 0, i2 = Int32Array.from([0, 0, 0]); !n2; ) {
      i2 = Int32Array.from([0, 0, 0]);
      var a2 = (r2 = e2.findGuardPattern(t3, o2, false, this.START_END_PATTERN, i2))[0], u2 = a2 - ((o2 = r2[1]) - a2);
      u2 >= 0 && (n2 = t3.isRange(u2, a2, false));
    }
    return r2;
  }, e2.checkChecksum = function(t3) {
    return e2.checkStandardUPCEANChecksum(t3);
  }, e2.checkStandardUPCEANChecksum = function(t3) {
    var r2 = t3.length;
    if (0 === r2)
      return false;
    var n2 = parseInt(t3.charAt(r2 - 1), 10);
    return e2.getStandardUPCEANChecksum(t3.substring(0, r2 - 1)) === n2;
  }, e2.getStandardUPCEANChecksum = function(t3) {
    for (var e3 = t3.length, r2 = 0, n2 = e3 - 1; n2 >= 0; n2 -= 2) {
      if ((o2 = t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o2 > 9)
        throw new R();
      r2 += o2;
    }
    r2 *= 3;
    for (n2 = e3 - 2; n2 >= 0; n2 -= 2) {
      var o2;
      if ((o2 = t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o2 > 9)
        throw new R();
      r2 += o2;
    }
    return (1e3 - r2) % 10;
  }, e2.decodeEnd = function(t3, r2) {
    return e2.findGuardPattern(t3, r2, false, e2.START_END_PATTERN, new Int32Array(e2.START_END_PATTERN.length).fill(0));
  }, e2.findGuardPatternWithoutCounters = function(t3, e3, r2, n2) {
    return this.findGuardPattern(t3, e3, r2, n2, new Int32Array(n2.length));
  }, e2.findGuardPattern = function(t3, r2, n2, o2, i2) {
    for (var a2 = t3.getSize(), u2 = 0, s2 = r2 = n2 ? t3.getNextUnset(r2) : t3.getNextSet(r2), c2 = o2.length, f2 = n2, h2 = r2; h2 < a2; h2++)
      if (t3.get(h2) !== f2)
        i2[u2]++;
      else {
        if (u2 === c2 - 1) {
          if (Lt.patternMatchVariance(i2, o2, e2.MAX_INDIVIDUAL_VARIANCE) < e2.MAX_AVG_VARIANCE)
            return Int32Array.from([s2, h2]);
          s2 += i2[0] + i2[1];
          for (var l2 = i2.slice(2, i2.length - 1), d2 = 0; d2 < u2 - 1; d2++)
            i2[d2] = l2[d2];
          i2[u2 - 1] = 0, i2[u2] = 0, u2--;
        } else
          u2++;
        i2[u2] = 1, f2 = !f2;
      }
    throw new U();
  }, e2.decodeDigit = function(t3, r2, n2, o2) {
    this.recordPattern(t3, n2, r2);
    for (var i2 = this.MAX_AVG_VARIANCE, a2 = -1, u2 = o2.length, s2 = 0; s2 < u2; s2++) {
      var c2 = o2[s2], f2 = Lt.patternMatchVariance(r2, c2, e2.MAX_INDIVIDUAL_VARIANCE);
      f2 < i2 && (i2 = f2, a2 = s2);
    }
    if (a2 >= 0)
      return a2;
    throw new U();
  }, e2.MAX_AVG_VARIANCE = 0.48, e2.MAX_INDIVIDUAL_VARIANCE = 0.7, e2.START_END_PATTERN = Int32Array.from([1, 1, 1]), e2.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), e2.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), e2.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])], e2;
}(Lt);
var zt = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Yt = function() {
  function t2() {
    this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
  }
  return t2.prototype.decodeRow = function(e2, r2, n2) {
    var o2 = this.decodeRowStringBuffer, i2 = this.decodeMiddle(r2, n2, o2), a2 = o2.toString(), u2 = t2.parseExtensionString(a2), s2 = [new At((n2[0] + n2[1]) / 2, e2), new At(i2, e2)], c2 = new et(a2, null, 0, s2, nt.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
    return null != u2 && c2.putAllMetadata(u2), c2;
  }, t2.prototype.decodeMiddle = function(e2, r2, n2) {
    var o2, i2, a2 = this.decodeMiddleCounters;
    a2[0] = 0, a2[1] = 0, a2[2] = 0, a2[3] = 0;
    for (var u2 = e2.getSize(), s2 = r2[1], c2 = 0, f2 = 0; f2 < 5 && s2 < u2; f2++) {
      var h2 = jt.decodeDigit(e2, a2, s2, jt.L_AND_G_PATTERNS);
      n2 += String.fromCharCode("0".charCodeAt(0) + h2 % 10);
      try {
        for (var l2 = (o2 = void 0, zt(a2)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
          s2 += d2.value;
        }
      } catch (t3) {
        o2 = { error: t3 };
      } finally {
        try {
          d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
        } finally {
          if (o2)
            throw o2.error;
        }
      }
      h2 >= 10 && (c2 |= 1 << 4 - f2), 4 !== f2 && (s2 = e2.getNextSet(s2), s2 = e2.getNextUnset(s2));
    }
    if (5 !== n2.length)
      throw new U();
    var p2 = this.determineCheckDigit(c2);
    if (t2.extensionChecksum(n2.toString()) !== p2)
      throw new U();
    return s2;
  }, t2.extensionChecksum = function(t3) {
    for (var e2 = t3.length, r2 = 0, n2 = e2 - 2; n2 >= 0; n2 -= 2)
      r2 += t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0);
    r2 *= 3;
    for (n2 = e2 - 1; n2 >= 0; n2 -= 2)
      r2 += t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0);
    return (r2 *= 3) % 10;
  }, t2.prototype.determineCheckDigit = function(t3) {
    for (var e2 = 0; e2 < 10; e2++)
      if (t3 === this.CHECK_DIGIT_ENCODINGS[e2])
        return e2;
    throw new U();
  }, t2.parseExtensionString = function(e2) {
    if (5 !== e2.length)
      return null;
    var r2 = t2.parseExtension5String(e2);
    return null == r2 ? null : /* @__PURE__ */ new Map([[it.SUGGESTED_PRICE, r2]]);
  }, t2.parseExtension5String = function(t3) {
    var e2;
    switch (t3.charAt(0)) {
      case "0":
        e2 = "£";
        break;
      case "5":
        e2 = "$";
        break;
      case "9":
        switch (t3) {
          case "90000":
            return null;
          case "99991":
            return "0.00";
          case "99990":
            return "Used";
        }
        e2 = "";
        break;
      default:
        e2 = "";
    }
    var r2 = parseInt(t3.substring(1)), n2 = r2 % 100;
    return e2 + (r2 / 100).toString() + "." + (n2 < 10 ? "0" + n2 : n2.toString());
  }, t2;
}();
var Zt = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Kt = function() {
  function t2() {
    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
  }
  return t2.prototype.decodeRow = function(e2, r2, n2) {
    var o2 = this.decodeRowStringBuffer, i2 = this.decodeMiddle(r2, n2, o2), a2 = o2.toString(), u2 = t2.parseExtensionString(a2), s2 = [new At((n2[0] + n2[1]) / 2, e2), new At(i2, e2)], c2 = new et(a2, null, 0, s2, nt.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
    return null != u2 && c2.putAllMetadata(u2), c2;
  }, t2.prototype.decodeMiddle = function(t3, e2, r2) {
    var n2, o2, i2 = this.decodeMiddleCounters;
    i2[0] = 0, i2[1] = 0, i2[2] = 0, i2[3] = 0;
    for (var a2 = t3.getSize(), u2 = e2[1], s2 = 0, c2 = 0; c2 < 2 && u2 < a2; c2++) {
      var f2 = jt.decodeDigit(t3, i2, u2, jt.L_AND_G_PATTERNS);
      r2 += String.fromCharCode("0".charCodeAt(0) + f2 % 10);
      try {
        for (var h2 = (n2 = void 0, Zt(i2)), l2 = h2.next(); !l2.done; l2 = h2.next()) {
          u2 += l2.value;
        }
      } catch (t4) {
        n2 = { error: t4 };
      } finally {
        try {
          l2 && !l2.done && (o2 = h2.return) && o2.call(h2);
        } finally {
          if (n2)
            throw n2.error;
        }
      }
      f2 >= 10 && (s2 |= 1 << 1 - c2), 1 !== c2 && (u2 = t3.getNextSet(u2), u2 = t3.getNextUnset(u2));
    }
    if (2 !== r2.length)
      throw new U();
    if (parseInt(r2.toString()) % 4 !== s2)
      throw new U();
    return u2;
  }, t2.parseExtensionString = function(t3) {
    return 2 !== t3.length ? null : /* @__PURE__ */ new Map([[it.ISSUE_NUMBER, parseInt(t3)]]);
  }, t2;
}();
var qt = function() {
  function t2() {
  }
  return t2.decodeRow = function(t3, e2, r2) {
    var n2 = jt.findGuardPattern(e2, r2, false, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
    try {
      return new Yt().decodeRow(t3, e2, n2);
    } catch (r3) {
      return new Kt().decodeRow(t3, e2, n2);
    }
  }, t2.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]), t2;
}();
var Qt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Jt = function(t2) {
  function e2() {
    var r2 = t2.call(this) || this;
    r2.decodeRowStringBuffer = "", e2.L_AND_G_PATTERNS = e2.L_PATTERNS.map(function(t3) {
      return Int32Array.from(t3);
    });
    for (var n2 = 10; n2 < 20; n2++) {
      for (var o2 = e2.L_PATTERNS[n2 - 10], i2 = new Int32Array(o2.length), a2 = 0; a2 < o2.length; a2++)
        i2[a2] = o2[o2.length - a2 - 1];
      e2.L_AND_G_PATTERNS[n2] = i2;
    }
    return r2;
  }
  return Qt(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2 = e2.findStartGuardPattern(r2), i2 = null == n2 ? null : n2.get(T.NEED_RESULT_POINT_CALLBACK);
    if (null != i2) {
      var a2 = new At((o2[0] + o2[1]) / 2, t3);
      i2.foundPossibleResultPoint(a2);
    }
    var u2 = this.decodeMiddle(r2, o2, this.decodeRowStringBuffer), s2 = u2.rowOffset, c2 = u2.resultString;
    if (null != i2) {
      var f2 = new At(s2, t3);
      i2.foundPossibleResultPoint(f2);
    }
    var h2 = e2.decodeEnd(r2, s2);
    if (null != i2) {
      var l2 = new At((h2[0] + h2[1]) / 2, t3);
      i2.foundPossibleResultPoint(l2);
    }
    var d2 = h2[1], p2 = d2 + (d2 - h2[0]);
    if (p2 >= r2.getSize() || !r2.isRange(d2, p2, false))
      throw new U();
    var y2 = c2.toString();
    if (y2.length < 8)
      throw new R();
    if (!e2.checkChecksum(y2))
      throw new g();
    var w2 = (o2[1] + o2[0]) / 2, _2 = (h2[1] + h2[0]) / 2, v2 = this.getBarcodeFormat(), m2 = [new At(w2, t3), new At(_2, t3)], A2 = new et(y2, null, 0, m2, v2, (/* @__PURE__ */ new Date()).getTime()), E2 = 0;
    try {
      var C2 = qt.decodeRow(t3, r2, h2[1]);
      A2.putMetadata(it.UPC_EAN_EXTENSION, C2.getText()), A2.putAllMetadata(C2.getResultMetadata()), A2.addResultPoints(C2.getResultPoints()), E2 = C2.getText().length;
    } catch (t4) {
    }
    var I2 = null == n2 ? null : n2.get(T.ALLOWED_EAN_EXTENSIONS);
    if (null != I2) {
      var S2 = false;
      for (var O2 in I2)
        if (E2.toString() === O2) {
          S2 = true;
          break;
        }
      if (!S2)
        throw new U();
    }
    return v2 === nt.EAN_13 || nt.UPC_A, A2;
  }, e2.checkChecksum = function(t3) {
    return e2.checkStandardUPCEANChecksum(t3);
  }, e2.checkStandardUPCEANChecksum = function(t3) {
    var r2 = t3.length;
    if (0 === r2)
      return false;
    var n2 = parseInt(t3.charAt(r2 - 1), 10);
    return e2.getStandardUPCEANChecksum(t3.substring(0, r2 - 1)) === n2;
  }, e2.getStandardUPCEANChecksum = function(t3) {
    for (var e3 = t3.length, r2 = 0, n2 = e3 - 1; n2 >= 0; n2 -= 2) {
      if ((o2 = t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o2 > 9)
        throw new R();
      r2 += o2;
    }
    r2 *= 3;
    for (n2 = e3 - 2; n2 >= 0; n2 -= 2) {
      var o2;
      if ((o2 = t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o2 > 9)
        throw new R();
      r2 += o2;
    }
    return (1e3 - r2) % 10;
  }, e2.decodeEnd = function(t3, r2) {
    return e2.findGuardPattern(t3, r2, false, e2.START_END_PATTERN, new Int32Array(e2.START_END_PATTERN.length).fill(0));
  }, e2;
}(jt);
var $t = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var te = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ee = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), e3;
  }
  return $t(e2, t2), e2.prototype.decodeMiddle = function(t3, r2, n2) {
    var o2, i2, a2, u2, s2 = this.decodeMiddleCounters;
    s2[0] = 0, s2[1] = 0, s2[2] = 0, s2[3] = 0;
    for (var c2 = t3.getSize(), f2 = r2[1], h2 = 0, l2 = 0; l2 < 6 && f2 < c2; l2++) {
      var d2 = Jt.decodeDigit(t3, s2, f2, Jt.L_AND_G_PATTERNS);
      n2 += String.fromCharCode("0".charCodeAt(0) + d2 % 10);
      try {
        for (var p2 = (o2 = void 0, te(s2)), g2 = p2.next(); !g2.done; g2 = p2.next()) {
          f2 += g2.value;
        }
      } catch (t4) {
        o2 = { error: t4 };
      } finally {
        try {
          g2 && !g2.done && (i2 = p2.return) && i2.call(p2);
        } finally {
          if (o2)
            throw o2.error;
        }
      }
      d2 >= 10 && (h2 |= 1 << 5 - l2);
    }
    n2 = e2.determineFirstDigit(n2, h2), f2 = Jt.findGuardPattern(t3, f2, true, Jt.MIDDLE_PATTERN, new Int32Array(Jt.MIDDLE_PATTERN.length).fill(0))[1];
    for (l2 = 0; l2 < 6 && f2 < c2; l2++) {
      d2 = Jt.decodeDigit(t3, s2, f2, Jt.L_PATTERNS);
      n2 += String.fromCharCode("0".charCodeAt(0) + d2);
      try {
        for (var y2 = (a2 = void 0, te(s2)), w2 = y2.next(); !w2.done; w2 = y2.next()) {
          f2 += w2.value;
        }
      } catch (t4) {
        a2 = { error: t4 };
      } finally {
        try {
          w2 && !w2.done && (u2 = y2.return) && u2.call(y2);
        } finally {
          if (a2)
            throw a2.error;
        }
      }
    }
    return { rowOffset: f2, resultString: n2 };
  }, e2.prototype.getBarcodeFormat = function() {
    return nt.EAN_13;
  }, e2.determineFirstDigit = function(t3, e3) {
    for (var r2 = 0; r2 < 10; r2++)
      if (e3 === this.FIRST_DIGIT_ENCODINGS[r2])
        return t3 = String.fromCharCode("0".charCodeAt(0) + r2) + t3;
    throw new U();
  }, e2.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], e2;
}(Jt);
var re = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ne = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var oe = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), e3;
  }
  return re(e2, t2), e2.prototype.decodeMiddle = function(t3, e3, r2) {
    var n2, o2, i2, a2, u2 = this.decodeMiddleCounters;
    u2[0] = 0, u2[1] = 0, u2[2] = 0, u2[3] = 0;
    for (var s2 = t3.getSize(), c2 = e3[1], f2 = 0; f2 < 4 && c2 < s2; f2++) {
      var h2 = Jt.decodeDigit(t3, u2, c2, Jt.L_PATTERNS);
      r2 += String.fromCharCode("0".charCodeAt(0) + h2);
      try {
        for (var l2 = (n2 = void 0, ne(u2)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
          c2 += d2.value;
        }
      } catch (t4) {
        n2 = { error: t4 };
      } finally {
        try {
          d2 && !d2.done && (o2 = l2.return) && o2.call(l2);
        } finally {
          if (n2)
            throw n2.error;
        }
      }
    }
    c2 = Jt.findGuardPattern(t3, c2, true, Jt.MIDDLE_PATTERN, new Int32Array(Jt.MIDDLE_PATTERN.length).fill(0))[1];
    for (f2 = 0; f2 < 4 && c2 < s2; f2++) {
      h2 = Jt.decodeDigit(t3, u2, c2, Jt.L_PATTERNS);
      r2 += String.fromCharCode("0".charCodeAt(0) + h2);
      try {
        for (var p2 = (i2 = void 0, ne(u2)), g2 = p2.next(); !g2.done; g2 = p2.next()) {
          c2 += g2.value;
        }
      } catch (t4) {
        i2 = { error: t4 };
      } finally {
        try {
          g2 && !g2.done && (a2 = p2.return) && a2.call(p2);
        } finally {
          if (i2)
            throw i2.error;
        }
      }
    }
    return { rowOffset: c2, resultString: r2 };
  }, e2.prototype.getBarcodeFormat = function() {
    return nt.EAN_8;
  }, e2;
}(Jt);
var ie = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ae = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.ean13Reader = new ee(), e3;
  }
  return ie(e2, t2), e2.prototype.getBarcodeFormat = function() {
    return nt.UPC_A;
  }, e2.prototype.decode = function(t3, e3) {
    return this.maybeReturnResult(this.ean13Reader.decode(t3));
  }, e2.prototype.decodeRow = function(t3, e3, r2) {
    return this.maybeReturnResult(this.ean13Reader.decodeRow(t3, e3, r2));
  }, e2.prototype.decodeMiddle = function(t3, e3, r2) {
    return this.ean13Reader.decodeMiddle(t3, e3, r2);
  }, e2.prototype.maybeReturnResult = function(t3) {
    var e3 = t3.getText();
    if ("0" === e3.charAt(0)) {
      var r2 = new et(e3.substring(1), null, null, t3.getResultPoints(), nt.UPC_A);
      return null != t3.getResultMetadata() && r2.putAllMetadata(t3.getResultMetadata()), r2;
    }
    throw new U();
  }, e2.prototype.reset = function() {
    this.ean13Reader.reset();
  }, e2;
}(Jt);
var ue = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var se = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ce = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeMiddleCounters = new Int32Array(4), e3;
  }
  return ue(e2, t2), e2.prototype.decodeMiddle = function(t3, r2, n2) {
    var o2, i2, a2 = this.decodeMiddleCounters.map(function(t4) {
      return t4;
    });
    a2[0] = 0, a2[1] = 0, a2[2] = 0, a2[3] = 0;
    for (var u2 = t3.getSize(), s2 = r2[1], c2 = 0, f2 = 0; f2 < 6 && s2 < u2; f2++) {
      var h2 = e2.decodeDigit(t3, a2, s2, e2.L_AND_G_PATTERNS);
      n2 += String.fromCharCode("0".charCodeAt(0) + h2 % 10);
      try {
        for (var l2 = (o2 = void 0, se(a2)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
          s2 += d2.value;
        }
      } catch (t4) {
        o2 = { error: t4 };
      } finally {
        try {
          d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
        } finally {
          if (o2)
            throw o2.error;
        }
      }
      h2 >= 10 && (c2 |= 1 << 5 - f2);
    }
    return e2.determineNumSysAndCheckDigit(new k(n2), c2), s2;
  }, e2.prototype.decodeEnd = function(t3, r2) {
    return e2.findGuardPatternWithoutCounters(t3, r2, true, e2.MIDDLE_END_PATTERN);
  }, e2.prototype.checkChecksum = function(t3) {
    return Jt.checkChecksum(e2.convertUPCEtoUPCA(t3));
  }, e2.determineNumSysAndCheckDigit = function(t3, e3) {
    for (var r2 = 0; r2 <= 1; r2++)
      for (var n2 = 0; n2 < 10; n2++)
        if (e3 === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r2][n2])
          return t3.insert(0, "0" + r2), void t3.append("0" + n2);
    throw U.getNotFoundInstance();
  }, e2.prototype.getBarcodeFormat = function() {
    return nt.UPC_E;
  }, e2.convertUPCEtoUPCA = function(t3) {
    var e3 = t3.slice(1, 7).split("").map(function(t4) {
      return t4.charCodeAt(0);
    }), r2 = new k();
    r2.append(t3.charAt(0));
    var n2 = e3[5];
    switch (n2) {
      case 0:
      case 1:
      case 2:
        r2.appendChars(e3, 0, 2), r2.append(n2), r2.append("0000"), r2.appendChars(e3, 2, 3);
        break;
      case 3:
        r2.appendChars(e3, 0, 3), r2.append("00000"), r2.appendChars(e3, 3, 2);
        break;
      case 4:
        r2.appendChars(e3, 0, 4), r2.append("00000"), r2.append(e3[4]);
        break;
      default:
        r2.appendChars(e3, 0, 5), r2.append("0000"), r2.append(n2);
    }
    return t3.length >= 8 && r2.append(t3.charAt(7)), r2.toString();
  }, e2.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), e2.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])], e2;
}(Jt);
var fe = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var he = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var le = function(t2) {
  function e2(e3) {
    var r2 = t2.call(this) || this, n2 = null == e3 ? null : e3.get(T.POSSIBLE_FORMATS), o2 = [];
    return null != n2 && (n2.indexOf(nt.EAN_13) > -1 ? o2.push(new ee()) : n2.indexOf(nt.UPC_A) > -1 && o2.push(new ae()), n2.indexOf(nt.EAN_8) > -1 && o2.push(new oe()), n2.indexOf(nt.UPC_E) > -1 && o2.push(new ce())), 0 === o2.length && (o2.push(new ee()), o2.push(new oe()), o2.push(new ce())), r2.readers = o2, r2;
  }
  return fe(e2, t2), e2.prototype.decodeRow = function(t3, e3, r2) {
    var n2, o2;
    try {
      for (var i2 = he(this.readers), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        var u2 = a2.value;
        try {
          var s2 = u2.decodeRow(t3, e3, r2), c2 = s2.getBarcodeFormat() === nt.EAN_13 && "0" === s2.getText().charAt(0), f2 = null == r2 ? null : r2.get(T.POSSIBLE_FORMATS), h2 = null == f2 || f2.includes(nt.UPC_A);
          if (c2 && h2) {
            var l2 = s2.getRawBytes(), d2 = new et(s2.getText().substring(1), l2, l2.length, s2.getResultPoints(), nt.UPC_A);
            return d2.putAllMetadata(s2.getResultMetadata()), d2;
          }
          return s2;
        } catch (t4) {
        }
      }
    } catch (t4) {
      n2 = { error: t4 };
    } finally {
      try {
        a2 && !a2.done && (o2 = i2.return) && o2.call(i2);
      } finally {
        if (n2)
          throw n2.error;
      }
    }
    throw new U();
  }, e2.prototype.reset = function() {
    var t3, e3;
    try {
      for (var r2 = he(this.readers), n2 = r2.next(); !n2.done; n2 = r2.next()) {
        n2.value.reset();
      }
    } catch (e4) {
      t3 = { error: e4 };
    } finally {
      try {
        n2 && !n2.done && (e3 = r2.return) && e3.call(r2);
      } finally {
        if (t3)
          throw t3.error;
      }
    }
  }, e2;
}(Lt);
var de = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var pe = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ge = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeFinderCounters = new Int32Array(4), e3.dataCharacterCounters = new Int32Array(8), e3.oddRoundingErrors = new Array(4), e3.evenRoundingErrors = new Array(4), e3.oddCounts = new Array(e3.dataCharacterCounters.length / 2), e3.evenCounts = new Array(e3.dataCharacterCounters.length / 2), e3;
  }
  return de(e2, t2), e2.prototype.getDecodeFinderCounters = function() {
    return this.decodeFinderCounters;
  }, e2.prototype.getDataCharacterCounters = function() {
    return this.dataCharacterCounters;
  }, e2.prototype.getOddRoundingErrors = function() {
    return this.oddRoundingErrors;
  }, e2.prototype.getEvenRoundingErrors = function() {
    return this.evenRoundingErrors;
  }, e2.prototype.getOddCounts = function() {
    return this.oddCounts;
  }, e2.prototype.getEvenCounts = function() {
    return this.evenCounts;
  }, e2.prototype.parseFinderValue = function(t3, r2) {
    for (var n2 = 0; n2 < r2.length; n2++)
      if (Lt.patternMatchVariance(t3, r2[n2], e2.MAX_INDIVIDUAL_VARIANCE) < e2.MAX_AVG_VARIANCE)
        return n2;
    throw new U();
  }, e2.count = function(t3) {
    return vt.sum(new Int32Array(t3));
  }, e2.increment = function(t3, e3) {
    for (var r2 = 0, n2 = e3[0], o2 = 1; o2 < t3.length; o2++)
      e3[o2] > n2 && (n2 = e3[o2], r2 = o2);
    t3[r2]++;
  }, e2.decrement = function(t3, e3) {
    for (var r2 = 0, n2 = e3[0], o2 = 1; o2 < t3.length; o2++)
      e3[o2] < n2 && (n2 = e3[o2], r2 = o2);
    t3[r2]--;
  }, e2.isFinderPattern = function(t3) {
    var r2, n2, o2 = t3[0] + t3[1], i2 = o2 / (o2 + t3[2] + t3[3]);
    if (i2 >= e2.MIN_FINDER_PATTERN_RATIO && i2 <= e2.MAX_FINDER_PATTERN_RATIO) {
      var a2 = Number.MAX_SAFE_INTEGER, u2 = Number.MIN_SAFE_INTEGER;
      try {
        for (var s2 = pe(t3), c2 = s2.next(); !c2.done; c2 = s2.next()) {
          var f2 = c2.value;
          f2 > u2 && (u2 = f2), f2 < a2 && (a2 = f2);
        }
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          c2 && !c2.done && (n2 = s2.return) && n2.call(s2);
        } finally {
          if (r2)
            throw r2.error;
        }
      }
      return u2 < 10 * a2;
    }
    return false;
  }, e2.MAX_AVG_VARIANCE = 0.2, e2.MAX_INDIVIDUAL_VARIANCE = 0.45, e2.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, e2.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, e2;
}(Lt);
var ye = function() {
  function t2(t3, e2) {
    this.value = t3, this.checksumPortion = e2;
  }
  return t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getChecksumPortion = function() {
    return this.checksumPortion;
  }, t2.prototype.toString = function() {
    return this.value + "(" + this.checksumPortion + ")";
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    return this.value === r2.value && this.checksumPortion === r2.checksumPortion;
  }, t2.prototype.hashCode = function() {
    return this.value ^ this.checksumPortion;
  }, t2;
}();
var we = function() {
  function t2(t3, e2, r2, n2, o2) {
    this.value = t3, this.startEnd = e2, this.value = t3, this.startEnd = e2, this.resultPoints = new Array(), this.resultPoints.push(new At(r2, o2)), this.resultPoints.push(new At(n2, o2));
  }
  return t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getStartEnd = function() {
    return this.startEnd;
  }, t2.prototype.getResultPoints = function() {
    return this.resultPoints;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    return this.value === r2.value;
  }, t2.prototype.hashCode = function() {
    return this.value;
  }, t2;
}();
var _e = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ve = function() {
  function t2() {
  }
  return t2.getRSSvalue = function(e2, r2, n2) {
    var o2, i2, a2 = 0;
    try {
      for (var u2 = _e(e2), s2 = u2.next(); !s2.done; s2 = u2.next()) {
        a2 += s2.value;
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        s2 && !s2.done && (i2 = u2.return) && i2.call(u2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
    for (var c2 = 0, f2 = 0, h2 = e2.length, l2 = 0; l2 < h2 - 1; l2++) {
      var d2 = void 0;
      for (d2 = 1, f2 |= 1 << l2; d2 < e2[l2]; d2++, f2 &= ~(1 << l2)) {
        var p2 = t2.combins(a2 - d2 - 1, h2 - l2 - 2);
        if (n2 && 0 === f2 && a2 - d2 - (h2 - l2 - 1) >= h2 - l2 - 1 && (p2 -= t2.combins(a2 - d2 - (h2 - l2), h2 - l2 - 2)), h2 - l2 - 1 > 1) {
          for (var g2 = 0, y2 = a2 - d2 - (h2 - l2 - 2); y2 > r2; y2--)
            g2 += t2.combins(a2 - d2 - y2 - 1, h2 - l2 - 3);
          p2 -= g2 * (h2 - 1 - l2);
        } else
          a2 - d2 > r2 && p2--;
        c2 += p2;
      }
      a2 -= d2;
    }
    return c2;
  }, t2.combins = function(t3, e2) {
    var r2, n2;
    t3 - e2 > e2 ? (n2 = e2, r2 = t3 - e2) : (n2 = t3 - e2, r2 = e2);
    for (var o2 = 1, i2 = 1, a2 = t3; a2 > r2; a2--)
      o2 *= a2, i2 <= n2 && (o2 /= i2, i2++);
    for (; i2 <= n2; )
      o2 /= i2, i2++;
    return o2;
  }, t2;
}();
var me = function() {
  function t2() {
  }
  return t2.buildBitArray = function(t3) {
    var e2 = 2 * t3.length - 1;
    null == t3[t3.length - 1].getRightChar() && (e2 -= 1);
    for (var r2 = new S(12 * e2), n2 = 0, o2 = t3[0].getRightChar().getValue(), i2 = 11; i2 >= 0; --i2)
      0 != (o2 & 1 << i2) && r2.set(n2), n2++;
    for (i2 = 1; i2 < t3.length; ++i2) {
      for (var a2 = t3[i2], u2 = a2.getLeftChar().getValue(), s2 = 11; s2 >= 0; --s2)
        0 != (u2 & 1 << s2) && r2.set(n2), n2++;
      if (null != a2.getRightChar()) {
        var c2 = a2.getRightChar().getValue();
        for (s2 = 11; s2 >= 0; --s2)
          0 != (c2 & 1 << s2) && r2.set(n2), n2++;
      }
    }
    return r2;
  }, t2;
}();
var Ae = function() {
  function t2(t3, e2) {
    e2 ? this.decodedInformation = null : (this.finished = t3, this.decodedInformation = e2);
  }
  return t2.prototype.getDecodedInformation = function() {
    return this.decodedInformation;
  }, t2.prototype.isFinished = function() {
    return this.finished;
  }, t2;
}();
var Ee = function() {
  function t2(t3) {
    this.newPosition = t3;
  }
  return t2.prototype.getNewPosition = function() {
    return this.newPosition;
  }, t2;
}();
var Ce = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ie = function(t2) {
  function e2(e3, r2) {
    var n2 = t2.call(this, e3) || this;
    return n2.value = r2, n2;
  }
  return Ce(e2, t2), e2.prototype.getValue = function() {
    return this.value;
  }, e2.prototype.isFNC1 = function() {
    return this.value === e2.FNC1;
  }, e2.FNC1 = "$", e2;
}(Ee);
var Se = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Oe = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3) || this;
    return n2 ? (o2.remaining = true, o2.remainingValue = o2.remainingValue) : (o2.remaining = false, o2.remainingValue = 0), o2.newString = r2, o2;
  }
  return Se(e2, t2), e2.prototype.getNewString = function() {
    return this.newString;
  }, e2.prototype.isRemaining = function() {
    return this.remaining;
  }, e2.prototype.getRemainingValue = function() {
    return this.remainingValue;
  }, e2;
}(Ee);
var Te = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var be = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3) || this;
    if (r2 < 0 || r2 > 10 || n2 < 0 || n2 > 10)
      throw new R();
    return o2.firstDigit = r2, o2.secondDigit = n2, o2;
  }
  return Te(e2, t2), e2.prototype.getFirstDigit = function() {
    return this.firstDigit;
  }, e2.prototype.getSecondDigit = function() {
    return this.secondDigit;
  }, e2.prototype.getValue = function() {
    return 10 * this.firstDigit + this.secondDigit;
  }, e2.prototype.isFirstDigitFNC1 = function() {
    return this.firstDigit === e2.FNC1;
  }, e2.prototype.isSecondDigitFNC1 = function() {
    return this.secondDigit === e2.FNC1;
  }, e2.prototype.isAnyFNC1 = function() {
    return this.firstDigit === e2.FNC1 || this.secondDigit === e2.FNC1;
  }, e2.FNC1 = 10, e2;
}(Ee);
var Re = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Ne = function() {
  function t2() {
  }
  return t2.parseFieldsInGeneralPurpose = function(e2) {
    var r2, n2, o2, i2, a2, u2, s2, c2;
    if (!e2)
      return null;
    if (e2.length < 2)
      throw new U();
    var f2 = e2.substring(0, 2);
    try {
      for (var h2 = Re(t2.TWO_DIGIT_DATA_LENGTH), l2 = h2.next(); !l2.done; l2 = h2.next()) {
        if ((A2 = l2.value)[0] === f2)
          return A2[1] === t2.VARIABLE_LENGTH ? t2.processVariableAI(2, A2[2], e2) : t2.processFixedAI(2, A2[1], e2);
      }
    } catch (t3) {
      r2 = { error: t3 };
    } finally {
      try {
        l2 && !l2.done && (n2 = h2.return) && n2.call(h2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
    if (e2.length < 3)
      throw new U();
    var d2 = e2.substring(0, 3);
    try {
      for (var p2 = Re(t2.THREE_DIGIT_DATA_LENGTH), g2 = p2.next(); !g2.done; g2 = p2.next()) {
        if ((A2 = g2.value)[0] === d2)
          return A2[1] === t2.VARIABLE_LENGTH ? t2.processVariableAI(3, A2[2], e2) : t2.processFixedAI(3, A2[1], e2);
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        g2 && !g2.done && (i2 = p2.return) && i2.call(p2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
    try {
      for (var y2 = Re(t2.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), w2 = y2.next(); !w2.done; w2 = y2.next()) {
        if ((A2 = w2.value)[0] === d2)
          return A2[1] === t2.VARIABLE_LENGTH ? t2.processVariableAI(4, A2[2], e2) : t2.processFixedAI(4, A2[1], e2);
      }
    } catch (t3) {
      a2 = { error: t3 };
    } finally {
      try {
        w2 && !w2.done && (u2 = y2.return) && u2.call(y2);
      } finally {
        if (a2)
          throw a2.error;
      }
    }
    if (e2.length < 4)
      throw new U();
    var _2 = e2.substring(0, 4);
    try {
      for (var v2 = Re(t2.FOUR_DIGIT_DATA_LENGTH), m2 = v2.next(); !m2.done; m2 = v2.next()) {
        var A2;
        if ((A2 = m2.value)[0] === _2)
          return A2[1] === t2.VARIABLE_LENGTH ? t2.processVariableAI(4, A2[2], e2) : t2.processFixedAI(4, A2[1], e2);
      }
    } catch (t3) {
      s2 = { error: t3 };
    } finally {
      try {
        m2 && !m2.done && (c2 = v2.return) && c2.call(v2);
      } finally {
        if (s2)
          throw s2.error;
      }
    }
    throw new U();
  }, t2.processFixedAI = function(e2, r2, n2) {
    if (n2.length < e2)
      throw new U();
    var o2 = n2.substring(0, e2);
    if (n2.length < e2 + r2)
      throw new U();
    var i2 = n2.substring(e2, e2 + r2), a2 = n2.substring(e2 + r2), u2 = "(" + o2 + ")" + i2, s2 = t2.parseFieldsInGeneralPurpose(a2);
    return null == s2 ? u2 : u2 + s2;
  }, t2.processVariableAI = function(e2, r2, n2) {
    var o2, i2 = n2.substring(0, e2);
    o2 = n2.length < e2 + r2 ? n2.length : e2 + r2;
    var a2 = n2.substring(e2, o2), u2 = n2.substring(o2), s2 = "(" + i2 + ")" + a2, c2 = t2.parseFieldsInGeneralPurpose(u2);
    return null == c2 ? s2 : s2 + c2;
  }, t2.VARIABLE_LENGTH = [], t2.TWO_DIGIT_DATA_LENGTH = [["00", 18], ["01", 14], ["02", 14], ["10", t2.VARIABLE_LENGTH, 20], ["11", 6], ["12", 6], ["13", 6], ["15", 6], ["17", 6], ["20", 2], ["21", t2.VARIABLE_LENGTH, 20], ["22", t2.VARIABLE_LENGTH, 29], ["30", t2.VARIABLE_LENGTH, 8], ["37", t2.VARIABLE_LENGTH, 8], ["90", t2.VARIABLE_LENGTH, 30], ["91", t2.VARIABLE_LENGTH, 30], ["92", t2.VARIABLE_LENGTH, 30], ["93", t2.VARIABLE_LENGTH, 30], ["94", t2.VARIABLE_LENGTH, 30], ["95", t2.VARIABLE_LENGTH, 30], ["96", t2.VARIABLE_LENGTH, 30], ["97", t2.VARIABLE_LENGTH, 3], ["98", t2.VARIABLE_LENGTH, 30], ["99", t2.VARIABLE_LENGTH, 30]], t2.THREE_DIGIT_DATA_LENGTH = [["240", t2.VARIABLE_LENGTH, 30], ["241", t2.VARIABLE_LENGTH, 30], ["242", t2.VARIABLE_LENGTH, 6], ["250", t2.VARIABLE_LENGTH, 30], ["251", t2.VARIABLE_LENGTH, 30], ["253", t2.VARIABLE_LENGTH, 17], ["254", t2.VARIABLE_LENGTH, 20], ["400", t2.VARIABLE_LENGTH, 30], ["401", t2.VARIABLE_LENGTH, 30], ["402", 17], ["403", t2.VARIABLE_LENGTH, 30], ["410", 13], ["411", 13], ["412", 13], ["413", 13], ["414", 13], ["420", t2.VARIABLE_LENGTH, 20], ["421", t2.VARIABLE_LENGTH, 15], ["422", 3], ["423", t2.VARIABLE_LENGTH, 15], ["424", 3], ["425", 3], ["426", 3]], t2.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [["310", 6], ["311", 6], ["312", 6], ["313", 6], ["314", 6], ["315", 6], ["316", 6], ["320", 6], ["321", 6], ["322", 6], ["323", 6], ["324", 6], ["325", 6], ["326", 6], ["327", 6], ["328", 6], ["329", 6], ["330", 6], ["331", 6], ["332", 6], ["333", 6], ["334", 6], ["335", 6], ["336", 6], ["340", 6], ["341", 6], ["342", 6], ["343", 6], ["344", 6], ["345", 6], ["346", 6], ["347", 6], ["348", 6], ["349", 6], ["350", 6], ["351", 6], ["352", 6], ["353", 6], ["354", 6], ["355", 6], ["356", 6], ["357", 6], ["360", 6], ["361", 6], ["362", 6], ["363", 6], ["364", 6], ["365", 6], ["366", 6], ["367", 6], ["368", 6], ["369", 6], ["390", t2.VARIABLE_LENGTH, 15], ["391", t2.VARIABLE_LENGTH, 18], ["392", t2.VARIABLE_LENGTH, 15], ["393", t2.VARIABLE_LENGTH, 18], ["703", t2.VARIABLE_LENGTH, 30]], t2.FOUR_DIGIT_DATA_LENGTH = [["7001", 13], ["7002", t2.VARIABLE_LENGTH, 30], ["7003", 10], ["8001", 14], ["8002", t2.VARIABLE_LENGTH, 20], ["8003", t2.VARIABLE_LENGTH, 30], ["8004", t2.VARIABLE_LENGTH, 30], ["8005", 6], ["8006", 18], ["8007", t2.VARIABLE_LENGTH, 30], ["8008", t2.VARIABLE_LENGTH, 12], ["8018", 18], ["8020", t2.VARIABLE_LENGTH, 25], ["8100", 6], ["8101", 10], ["8102", 2], ["8110", t2.VARIABLE_LENGTH, 70], ["8200", t2.VARIABLE_LENGTH, 70]], t2;
}();
var De = function() {
  function t2(t3) {
    this.buffer = new k(), this.information = t3;
  }
  return t2.prototype.decodeAllCodes = function(t3, e2) {
    for (var r2 = e2, n2 = null; ; ) {
      var o2 = this.decodeGeneralPurposeField(r2, n2), i2 = Ne.parseFieldsInGeneralPurpose(o2.getNewString());
      if (null != i2 && t3.append(i2), n2 = o2.isRemaining() ? "" + o2.getRemainingValue() : null, r2 === o2.getNewPosition())
        break;
      r2 = o2.getNewPosition();
    }
    return t3.toString();
  }, t2.prototype.isStillNumeric = function(t3) {
    if (t3 + 7 > this.information.getSize())
      return t3 + 4 <= this.information.getSize();
    for (var e2 = t3; e2 < t3 + 3; ++e2)
      if (this.information.get(e2))
        return true;
    return this.information.get(t3 + 3);
  }, t2.prototype.decodeNumeric = function(t3) {
    if (t3 + 7 > this.information.getSize()) {
      var e2 = this.extractNumericValueFromBitArray(t3, 4);
      return new be(this.information.getSize(), 0 === e2 ? be.FNC1 : e2 - 1, be.FNC1);
    }
    var r2 = this.extractNumericValueFromBitArray(t3, 7);
    return new be(t3 + 7, (r2 - 8) / 11, (r2 - 8) % 11);
  }, t2.prototype.extractNumericValueFromBitArray = function(e2, r2) {
    return t2.extractNumericValueFromBitArray(this.information, e2, r2);
  }, t2.extractNumericValueFromBitArray = function(t3, e2, r2) {
    for (var n2 = 0, o2 = 0; o2 < r2; ++o2)
      t3.get(e2 + o2) && (n2 |= 1 << r2 - o2 - 1);
    return n2;
  }, t2.prototype.decodeGeneralPurposeField = function(t3, e2) {
    this.buffer.setLengthToZero(), null != e2 && this.buffer.append(e2), this.current.setPosition(t3);
    var r2 = this.parseBlocks();
    return null != r2 && r2.isRemaining() ? new Oe(this.current.getPosition(), this.buffer.toString(), r2.getRemainingValue()) : new Oe(this.current.getPosition(), this.buffer.toString());
  }, t2.prototype.parseBlocks = function() {
    var t3, e2;
    do {
      var r2 = this.current.getPosition();
      if (t3 = this.current.isAlpha() ? (e2 = this.parseAlphaBlock()).isFinished() : this.current.isIsoIec646() ? (e2 = this.parseIsoIec646Block()).isFinished() : (e2 = this.parseNumericBlock()).isFinished(), !(r2 !== this.current.getPosition()) && !t3)
        break;
    } while (!t3);
    return e2.getDecodedInformation();
  }, t2.prototype.parseNumericBlock = function() {
    for (; this.isStillNumeric(this.current.getPosition()); ) {
      var t3 = this.decodeNumeric(this.current.getPosition());
      if (this.current.setPosition(t3.getNewPosition()), t3.isFirstDigitFNC1()) {
        var e2 = void 0;
        return e2 = t3.isSecondDigitFNC1() ? new Oe(this.current.getPosition(), this.buffer.toString()) : new Oe(this.current.getPosition(), this.buffer.toString(), t3.getSecondDigit()), new Ae(true, e2);
      }
      if (this.buffer.append(t3.getFirstDigit()), t3.isSecondDigitFNC1()) {
        e2 = new Oe(this.current.getPosition(), this.buffer.toString());
        return new Ae(true, e2);
      }
      this.buffer.append(t3.getSecondDigit());
    }
    return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Ae(false);
  }, t2.prototype.parseIsoIec646Block = function() {
    for (; this.isStillIsoIec646(this.current.getPosition()); ) {
      var t3 = this.decodeIsoIec646(this.current.getPosition());
      if (this.current.setPosition(t3.getNewPosition()), t3.isFNC1()) {
        var e2 = new Oe(this.current.getPosition(), this.buffer.toString());
        return new Ae(true, e2);
      }
      this.buffer.append(t3.getValue());
    }
    return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Ae(false);
  }, t2.prototype.parseAlphaBlock = function() {
    for (; this.isStillAlpha(this.current.getPosition()); ) {
      var t3 = this.decodeAlphanumeric(this.current.getPosition());
      if (this.current.setPosition(t3.getNewPosition()), t3.isFNC1()) {
        var e2 = new Oe(this.current.getPosition(), this.buffer.toString());
        return new Ae(true, e2);
      }
      this.buffer.append(t3.getValue());
    }
    return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Ae(false);
  }, t2.prototype.isStillIsoIec646 = function(t3) {
    if (t3 + 5 > this.information.getSize())
      return false;
    var e2 = this.extractNumericValueFromBitArray(t3, 5);
    if (e2 >= 5 && e2 < 16)
      return true;
    if (t3 + 7 > this.information.getSize())
      return false;
    var r2 = this.extractNumericValueFromBitArray(t3, 7);
    if (r2 >= 64 && r2 < 116)
      return true;
    if (t3 + 8 > this.information.getSize())
      return false;
    var n2 = this.extractNumericValueFromBitArray(t3, 8);
    return n2 >= 232 && n2 < 253;
  }, t2.prototype.decodeIsoIec646 = function(t3) {
    var e2 = this.extractNumericValueFromBitArray(t3, 5);
    if (15 === e2)
      return new Ie(t3 + 5, Ie.FNC1);
    if (e2 >= 5 && e2 < 15)
      return new Ie(t3 + 5, "0" + (e2 - 5));
    var r2, n2 = this.extractNumericValueFromBitArray(t3, 7);
    if (n2 >= 64 && n2 < 90)
      return new Ie(t3 + 7, "" + (n2 + 1));
    if (n2 >= 90 && n2 < 116)
      return new Ie(t3 + 7, "" + (n2 + 7));
    switch (this.extractNumericValueFromBitArray(t3, 8)) {
      case 232:
        r2 = "!";
        break;
      case 233:
        r2 = '"';
        break;
      case 234:
        r2 = "%";
        break;
      case 235:
        r2 = "&";
        break;
      case 236:
        r2 = "'";
        break;
      case 237:
        r2 = "(";
        break;
      case 238:
        r2 = ")";
        break;
      case 239:
        r2 = "*";
        break;
      case 240:
        r2 = "+";
        break;
      case 241:
        r2 = ",";
        break;
      case 242:
        r2 = "-";
        break;
      case 243:
        r2 = ".";
        break;
      case 244:
        r2 = "/";
        break;
      case 245:
        r2 = ":";
        break;
      case 246:
        r2 = ";";
        break;
      case 247:
        r2 = "<";
        break;
      case 248:
        r2 = "=";
        break;
      case 249:
        r2 = ">";
        break;
      case 250:
        r2 = "?";
        break;
      case 251:
        r2 = "_";
        break;
      case 252:
        r2 = " ";
        break;
      default:
        throw new R();
    }
    return new Ie(t3 + 8, r2);
  }, t2.prototype.isStillAlpha = function(t3) {
    if (t3 + 5 > this.information.getSize())
      return false;
    var e2 = this.extractNumericValueFromBitArray(t3, 5);
    if (e2 >= 5 && e2 < 16)
      return true;
    if (t3 + 6 > this.information.getSize())
      return false;
    var r2 = this.extractNumericValueFromBitArray(t3, 6);
    return r2 >= 16 && r2 < 63;
  }, t2.prototype.decodeAlphanumeric = function(t3) {
    var e2 = this.extractNumericValueFromBitArray(t3, 5);
    if (15 === e2)
      return new Ie(t3 + 5, Ie.FNC1);
    if (e2 >= 5 && e2 < 15)
      return new Ie(t3 + 5, "0" + (e2 - 5));
    var r2, n2 = this.extractNumericValueFromBitArray(t3, 6);
    if (n2 >= 32 && n2 < 58)
      return new Ie(t3 + 6, "" + (n2 + 33));
    switch (n2) {
      case 58:
        r2 = "*";
        break;
      case 59:
        r2 = ",";
        break;
      case 60:
        r2 = "-";
        break;
      case 61:
        r2 = ".";
        break;
      case 62:
        r2 = "/";
        break;
      default:
        throw new yt("Decoding invalid alphanumeric value: " + n2);
    }
    return new Ie(t3 + 6, r2);
  }, t2.prototype.isAlphaTo646ToAlphaLatch = function(t3) {
    if (t3 + 1 > this.information.getSize())
      return false;
    for (var e2 = 0; e2 < 5 && e2 + t3 < this.information.getSize(); ++e2)
      if (2 === e2) {
        if (!this.information.get(t3 + 2))
          return false;
      } else if (this.information.get(t3 + e2))
        return false;
    return true;
  }, t2.prototype.isAlphaOr646ToNumericLatch = function(t3) {
    if (t3 + 3 > this.information.getSize())
      return false;
    for (var e2 = t3; e2 < t3 + 3; ++e2)
      if (this.information.get(e2))
        return false;
    return true;
  }, t2.prototype.isNumericToAlphaNumericLatch = function(t3) {
    if (t3 + 1 > this.information.getSize())
      return false;
    for (var e2 = 0; e2 < 4 && e2 + t3 < this.information.getSize(); ++e2)
      if (this.information.get(t3 + e2))
        return false;
    return true;
  }, t2;
}();
var Pe = function() {
  function t2(t3) {
    this.information = t3, this.generalDecoder = new De(t3);
  }
  return t2.prototype.getInformation = function() {
    return this.information;
  }, t2.prototype.getGeneralDecoder = function() {
    return this.generalDecoder;
  }, t2;
}();
var Me = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Be = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return Me(e2, t2), e2.prototype.encodeCompressedGtin = function(t3, e3) {
    t3.append("(01)");
    var r2 = t3.length();
    t3.append("9"), this.encodeCompressedGtinWithoutAI(t3, e3, r2);
  }, e2.prototype.encodeCompressedGtinWithoutAI = function(t3, r2, n2) {
    for (var o2 = 0; o2 < 4; ++o2) {
      var i2 = this.getGeneralDecoder().extractNumericValueFromBitArray(r2 + 10 * o2, 10);
      i2 / 100 == 0 && t3.append("0"), i2 / 10 == 0 && t3.append("0"), t3.append(i2);
    }
    e2.appendCheckDigit(t3, n2);
  }, e2.appendCheckDigit = function(t3, e3) {
    for (var r2 = 0, n2 = 0; n2 < 13; n2++) {
      var o2 = t3.charAt(n2 + e3).charCodeAt(0) - "0".charCodeAt(0);
      r2 += 0 == (1 & n2) ? 3 * o2 : o2;
    }
    10 === (r2 = 10 - r2 % 10) && (r2 = 0), t3.append(r2);
  }, e2.GTIN_SIZE = 40, e2;
}(Pe);
var Le = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Fe = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return Le(e2, t2), e2.prototype.parseInformation = function() {
    var t3 = new k();
    t3.append("(01)");
    var r2 = t3.length(), n2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e2.HEADER_SIZE, 4);
    return t3.append(n2), this.encodeCompressedGtinWithoutAI(t3, e2.HEADER_SIZE + 4, r2), this.getGeneralDecoder().decodeAllCodes(t3, e2.HEADER_SIZE + 44);
  }, e2.HEADER_SIZE = 4, e2;
}(Be);
var ke = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var xe = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return ke(e2, t2), e2.prototype.parseInformation = function() {
    var t3 = new k();
    return this.getGeneralDecoder().decodeAllCodes(t3, e2.HEADER_SIZE);
  }, e2.HEADER_SIZE = 5, e2;
}(Pe);
var Ve = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ue = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return Ve(e2, t2), e2.prototype.encodeCompressedWeight = function(t3, e3, r2) {
    var n2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e3, r2);
    this.addWeightCode(t3, n2);
    for (var o2 = this.checkWeight(n2), i2 = 1e5, a2 = 0; a2 < 5; ++a2)
      o2 / i2 == 0 && t3.append("0"), i2 /= 10;
    t3.append(o2);
  }, e2;
}(Be);
var He = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ge = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return He(e2, t2), e2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() != e2.HEADER_SIZE + Ue.GTIN_SIZE + e2.WEIGHT_SIZE)
      throw new U();
    var t3 = new k();
    return this.encodeCompressedGtin(t3, e2.HEADER_SIZE), this.encodeCompressedWeight(t3, e2.HEADER_SIZE + Ue.GTIN_SIZE, e2.WEIGHT_SIZE), t3.toString();
  }, e2.HEADER_SIZE = 5, e2.WEIGHT_SIZE = 15, e2;
}(Ue);
var Xe = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var We = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return Xe(e2, t2), e2.prototype.addWeightCode = function(t3, e3) {
    t3.append("(3103)");
  }, e2.prototype.checkWeight = function(t3) {
    return t3;
  }, e2;
}(Ge);
var je = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ze = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return je(e2, t2), e2.prototype.addWeightCode = function(t3, e3) {
    e3 < 1e4 ? t3.append("(3202)") : t3.append("(3203)");
  }, e2.prototype.checkWeight = function(t3) {
    return t3 < 1e4 ? t3 : t3 - 1e4;
  }, e2;
}(Ge);
var Ye = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ze = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return Ye(e2, t2), e2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() < e2.HEADER_SIZE + Be.GTIN_SIZE)
      throw new U();
    var t3 = new k();
    this.encodeCompressedGtin(t3, e2.HEADER_SIZE);
    var r2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e2.HEADER_SIZE + Be.GTIN_SIZE, e2.LAST_DIGIT_SIZE);
    t3.append("(392"), t3.append(r2), t3.append(")");
    var n2 = this.getGeneralDecoder().decodeGeneralPurposeField(e2.HEADER_SIZE + Be.GTIN_SIZE + e2.LAST_DIGIT_SIZE, null);
    return t3.append(n2.getNewString()), t3.toString();
  }, e2.HEADER_SIZE = 8, e2.LAST_DIGIT_SIZE = 2, e2;
}(Be);
var Ke = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var qe = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return Ke(e2, t2), e2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() < e2.HEADER_SIZE + Be.GTIN_SIZE)
      throw new U();
    var t3 = new k();
    this.encodeCompressedGtin(t3, e2.HEADER_SIZE);
    var r2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e2.HEADER_SIZE + Be.GTIN_SIZE, e2.LAST_DIGIT_SIZE);
    t3.append("(393"), t3.append(r2), t3.append(")");
    var n2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e2.HEADER_SIZE + Be.GTIN_SIZE + e2.LAST_DIGIT_SIZE, e2.FIRST_THREE_DIGITS_SIZE);
    n2 / 100 == 0 && t3.append("0"), n2 / 10 == 0 && t3.append("0"), t3.append(n2);
    var o2 = this.getGeneralDecoder().decodeGeneralPurposeField(e2.HEADER_SIZE + Be.GTIN_SIZE + e2.LAST_DIGIT_SIZE + e2.FIRST_THREE_DIGITS_SIZE, null);
    return t3.append(o2.getNewString()), t3.toString();
  }, e2.HEADER_SIZE = 8, e2.LAST_DIGIT_SIZE = 2, e2.FIRST_THREE_DIGITS_SIZE = 10, e2;
}(Be);
var Qe = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Je = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3) || this;
    return o2.dateCode = n2, o2.firstAIdigits = r2, o2;
  }
  return Qe(e2, t2), e2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() != e2.HEADER_SIZE + e2.GTIN_SIZE + e2.WEIGHT_SIZE + e2.DATE_SIZE)
      throw new U();
    var t3 = new k();
    return this.encodeCompressedGtin(t3, e2.HEADER_SIZE), this.encodeCompressedWeight(t3, e2.HEADER_SIZE + e2.GTIN_SIZE, e2.WEIGHT_SIZE), this.encodeCompressedDate(t3, e2.HEADER_SIZE + e2.GTIN_SIZE + e2.WEIGHT_SIZE), t3.toString();
  }, e2.prototype.encodeCompressedDate = function(t3, r2) {
    var n2 = this.getGeneralDecoder().extractNumericValueFromBitArray(r2, e2.DATE_SIZE);
    if (38400 != n2) {
      t3.append("("), t3.append(this.dateCode), t3.append(")");
      var o2 = n2 % 32, i2 = (n2 /= 32) % 12 + 1, a2 = n2 /= 12;
      a2 / 10 == 0 && t3.append("0"), t3.append(a2), i2 / 10 == 0 && t3.append("0"), t3.append(i2), o2 / 10 == 0 && t3.append("0"), t3.append(o2);
    }
  }, e2.prototype.addWeightCode = function(t3, e3) {
    t3.append("("), t3.append(this.firstAIdigits), t3.append(e3 / 1e5), t3.append(")");
  }, e2.prototype.checkWeight = function(t3) {
    return t3 % 1e5;
  }, e2.HEADER_SIZE = 8, e2.WEIGHT_SIZE = 20, e2.DATE_SIZE = 16, e2;
}(Ue);
var $e = function() {
  function t2(t3, e2, r2, n2) {
    this.leftchar = t3, this.rightchar = e2, this.finderpattern = r2, this.maybeLast = n2;
  }
  return t2.prototype.mayBeLast = function() {
    return this.maybeLast;
  }, t2.prototype.getLeftChar = function() {
    return this.leftchar;
  }, t2.prototype.getRightChar = function() {
    return this.rightchar;
  }, t2.prototype.getFinderPattern = function() {
    return this.finderpattern;
  }, t2.prototype.mustBeLast = function() {
    return null == this.rightchar;
  }, t2.prototype.toString = function() {
    return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]";
  }, t2.equals = function(e2, r2) {
    return e2 instanceof t2 && (t2.equalsOrNull(e2.leftchar, r2.leftchar) && t2.equalsOrNull(e2.rightchar, r2.rightchar) && t2.equalsOrNull(e2.finderpattern, r2.finderpattern));
  }, t2.equalsOrNull = function(e2, r2) {
    return null === e2 ? null === r2 : t2.equals(e2, r2);
  }, t2.prototype.hashCode = function() {
    return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
  }, t2;
}();
var tr = function() {
  function t2(t3, e2, r2) {
    this.pairs = t3, this.rowNumber = e2, this.wasReversed = r2;
  }
  return t2.prototype.getPairs = function() {
    return this.pairs;
  }, t2.prototype.getRowNumber = function() {
    return this.rowNumber;
  }, t2.prototype.isReversed = function() {
    return this.wasReversed;
  }, t2.prototype.isEquivalent = function(t3) {
    return this.checkEqualitity(this, t3);
  }, t2.prototype.toString = function() {
    return "{ " + this.pairs + " }";
  }, t2.prototype.equals = function(e2, r2) {
    return e2 instanceof t2 && (this.checkEqualitity(e2, r2) && e2.wasReversed === r2.wasReversed);
  }, t2.prototype.checkEqualitity = function(t3, e2) {
    var r2;
    if (t3 && e2)
      return t3.forEach(function(t4, n2) {
        e2.forEach(function(e3) {
          t4.getLeftChar().getValue() === e3.getLeftChar().getValue() && t4.getRightChar().getValue() === e3.getRightChar().getValue() && t4.getFinderPatter().getValue() === e3.getFinderPatter().getValue() && (r2 = true);
        });
      }), r2;
  }, t2;
}();
var er = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var rr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var nr = function(t2) {
  function e2() {
    var r2 = null !== t2 && t2.apply(this, arguments) || this;
    return r2.pairs = new Array(e2.MAX_PAIRS), r2.rows = new Array(), r2.startEnd = [2], r2;
  }
  return er(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    this.pairs.length = 0, this.startFromEven = false;
    try {
      return e2.constructResult(this.decodeRow2pairs(t3, r2));
    } catch (t4) {
    }
    return this.pairs.length = 0, this.startFromEven = true, e2.constructResult(this.decodeRow2pairs(t3, r2));
  }, e2.prototype.reset = function() {
    this.pairs.length = 0, this.rows.length = 0;
  }, e2.prototype.decodeRow2pairs = function(t3, e3) {
    for (var r2, n2 = false; !n2; )
      try {
        this.pairs.push(this.retrieveNextPair(e3, this.pairs, t3));
      } catch (t4) {
        if (t4 instanceof U) {
          if (!this.pairs.length)
            throw new U();
          n2 = true;
        }
      }
    if (this.checkChecksum())
      return this.pairs;
    if (r2 = !!this.rows.length, this.storeRow(t3, false), r2) {
      var o2 = this.checkRowsBoolean(false);
      if (null != o2)
        return o2;
      if (null != (o2 = this.checkRowsBoolean(true)))
        return o2;
    }
    throw new U();
  }, e2.prototype.checkRowsBoolean = function(t3) {
    if (this.rows.length > 25)
      return this.rows.length = 0, null;
    this.pairs.length = 0, t3 && (this.rows = this.rows.reverse());
    var e3 = null;
    try {
      e3 = this.checkRows(new Array(), 0);
    } catch (t4) {
      console.log(t4);
    }
    return t3 && (this.rows = this.rows.reverse()), e3;
  }, e2.prototype.checkRows = function(t3, r2) {
    for (var n2, o2, i2 = r2; i2 < this.rows.length; i2++) {
      var a2 = this.rows[i2];
      this.pairs.length = 0;
      try {
        for (var u2 = (n2 = void 0, rr(t3)), s2 = u2.next(); !s2.done; s2 = u2.next()) {
          var c2 = s2.value;
          this.pairs.push(c2.getPairs());
        }
      } catch (t4) {
        n2 = { error: t4 };
      } finally {
        try {
          s2 && !s2.done && (o2 = u2.return) && o2.call(u2);
        } finally {
          if (n2)
            throw n2.error;
        }
      }
      if (this.pairs.push(a2.getPairs()), e2.isValidSequence(this.pairs)) {
        if (this.checkChecksum())
          return this.pairs;
        var f2 = new Array(t3);
        f2.push(a2);
        try {
          return this.checkRows(f2, i2 + 1);
        } catch (t4) {
          console.log(t4);
        }
      }
    }
    throw new U();
  }, e2.isValidSequence = function(t3) {
    var r2, n2;
    try {
      for (var o2 = rr(e2.FINDER_PATTERN_SEQUENCES), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        if (!(t3.length > a2.length)) {
          for (var u2 = true, s2 = 0; s2 < t3.length; s2++)
            if (t3[s2].getFinderPattern().getValue() != a2[s2]) {
              u2 = false;
              break;
            }
          if (u2)
            return true;
        }
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        i2 && !i2.done && (n2 = o2.return) && n2.call(o2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
    return false;
  }, e2.prototype.storeRow = function(t3, r2) {
    for (var n2 = 0, o2 = false, i2 = false; n2 < this.rows.length; ) {
      var a2 = this.rows[n2];
      if (a2.getRowNumber() > t3) {
        i2 = a2.isEquivalent(this.pairs);
        break;
      }
      o2 = a2.isEquivalent(this.pairs), n2++;
    }
    i2 || o2 || e2.isPartialRow(this.pairs, this.rows) || (this.rows.push(n2, new tr(this.pairs, t3, r2)), this.removePartialRows(this.pairs, this.rows));
  }, e2.prototype.removePartialRows = function(t3, e3) {
    var r2, n2, o2, i2, a2, u2;
    try {
      for (var s2 = rr(e3), c2 = s2.next(); !c2.done; c2 = s2.next()) {
        var f2 = c2.value;
        if (f2.getPairs().length !== t3.length) {
          try {
            for (var h2 = (o2 = void 0, rr(f2.getPairs())), l2 = h2.next(); !l2.done; l2 = h2.next()) {
              var d2 = l2.value, p2 = false;
              try {
                for (var g2 = (a2 = void 0, rr(t3)), y2 = g2.next(); !y2.done; y2 = g2.next()) {
                  var w2 = y2.value;
                  if ($e.equals(d2, w2)) {
                    p2 = true;
                    break;
                  }
                }
              } catch (t4) {
                a2 = { error: t4 };
              } finally {
                try {
                  y2 && !y2.done && (u2 = g2.return) && u2.call(g2);
                } finally {
                  if (a2)
                    throw a2.error;
                }
              }
              p2 || false;
            }
          } catch (t4) {
            o2 = { error: t4 };
          } finally {
            try {
              l2 && !l2.done && (i2 = h2.return) && i2.call(h2);
            } finally {
              if (o2)
                throw o2.error;
            }
          }
        }
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        c2 && !c2.done && (n2 = s2.return) && n2.call(s2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
  }, e2.isPartialRow = function(t3, e3) {
    var r2, n2, o2, i2, a2, u2;
    try {
      for (var s2 = rr(e3), c2 = s2.next(); !c2.done; c2 = s2.next()) {
        var f2 = c2.value, h2 = true;
        try {
          for (var l2 = (o2 = void 0, rr(t3)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
            var p2 = d2.value, g2 = false;
            try {
              for (var y2 = (a2 = void 0, rr(f2.getPairs())), w2 = y2.next(); !w2.done; w2 = y2.next()) {
                var _2 = w2.value;
                if (p2.equals(_2)) {
                  g2 = true;
                  break;
                }
              }
            } catch (t4) {
              a2 = { error: t4 };
            } finally {
              try {
                w2 && !w2.done && (u2 = y2.return) && u2.call(y2);
              } finally {
                if (a2)
                  throw a2.error;
              }
            }
            if (!g2) {
              h2 = false;
              break;
            }
          }
        } catch (t4) {
          o2 = { error: t4 };
        } finally {
          try {
            d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
          } finally {
            if (o2)
              throw o2.error;
          }
        }
        if (h2)
          return true;
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        c2 && !c2.done && (n2 = s2.return) && n2.call(s2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
    return false;
  }, e2.prototype.getRows = function() {
    return this.rows;
  }, e2.constructResult = function(t3) {
    var e3 = function(t4) {
      try {
        if (t4.get(1))
          return new Fe(t4);
        if (!t4.get(2))
          return new xe(t4);
        switch (De.extractNumericValueFromBitArray(t4, 1, 4)) {
          case 4:
            return new We(t4);
          case 5:
            return new ze(t4);
        }
        switch (De.extractNumericValueFromBitArray(t4, 1, 5)) {
          case 12:
            return new Ze(t4);
          case 13:
            return new qe(t4);
        }
        switch (De.extractNumericValueFromBitArray(t4, 1, 7)) {
          case 56:
            return new Je(t4, "310", "11");
          case 57:
            return new Je(t4, "320", "11");
          case 58:
            return new Je(t4, "310", "13");
          case 59:
            return new Je(t4, "320", "13");
          case 60:
            return new Je(t4, "310", "15");
          case 61:
            return new Je(t4, "320", "15");
          case 62:
            return new Je(t4, "310", "17");
          case 63:
            return new Je(t4, "320", "17");
        }
      } catch (e4) {
        throw console.log(e4), new yt("unknown decoder: " + t4);
      }
    }(me.buildBitArray(t3)).parseInformation(), r2 = t3[0].getFinderPattern().getResultPoints(), n2 = t3[t3.length - 1].getFinderPattern().getResultPoints(), o2 = [r2[0], r2[1], n2[0], n2[1]];
    return new et(e3, null, null, o2, nt.RSS_EXPANDED, null);
  }, e2.prototype.checkChecksum = function() {
    var t3 = this.pairs.get(0), e3 = t3.getLeftChar(), r2 = t3.getRightChar();
    if (null == r2)
      return false;
    for (var n2 = r2.getChecksumPortion(), o2 = 2, i2 = 1; i2 < this.pairs.size(); ++i2) {
      var a2 = this.pairs.get(i2);
      n2 += a2.getLeftChar().getChecksumPortion(), o2++;
      var u2 = a2.getRightChar();
      null != u2 && (n2 += u2.getChecksumPortion(), o2++);
    }
    return 211 * (o2 - 4) + (n2 %= 211) == e3.getValue();
  }, e2.getNextSecondBar = function(t3, e3) {
    var r2;
    return t3.get(e3) ? (r2 = t3.getNextUnset(e3), r2 = t3.getNextSet(r2)) : (r2 = t3.getNextSet(e3), r2 = t3.getNextUnset(r2)), r2;
  }, e2.prototype.retrieveNextPair = function(t3, r2, n2) {
    var o2, i2 = r2.length % 2 == 0;
    this.startFromEven && (i2 = !i2);
    var a2 = true, u2 = -1;
    do {
      this.findNextPair(t3, r2, u2), null == (o2 = this.parseFoundFinderPattern(t3, n2, i2)) ? u2 = e2.getNextSecondBar(t3, this.startEnd[0]) : a2 = false;
    } while (a2);
    var s2, c2 = this.decodeDataCharacter(t3, o2, i2, true);
    if (!this.isEmptyPair(r2) && r2[r2.length - 1].mustBeLast())
      throw new U();
    try {
      s2 = this.decodeDataCharacter(t3, o2, i2, false);
    } catch (t4) {
      s2 = null, console.log(t4);
    }
    return new $e(c2, s2, o2, true);
  }, e2.prototype.isEmptyPair = function(t3) {
    return 0 === t3.length;
  }, e2.prototype.findNextPair = function(t3, r2, n2) {
    var o2 = this.getDecodeFinderCounters();
    o2[0] = 0, o2[1] = 0, o2[2] = 0, o2[3] = 0;
    var i2, a2 = t3.getSize();
    if (n2 >= 0)
      i2 = n2;
    else if (this.isEmptyPair(r2))
      i2 = 0;
    else {
      i2 = r2[r2.length - 1].getFinderPattern().getStartEnd()[1];
    }
    var u2 = r2.length % 2 != 0;
    this.startFromEven && (u2 = !u2);
    for (var s2 = false; i2 < a2 && (s2 = !t3.get(i2)); )
      i2++;
    for (var c2 = 0, f2 = i2, h2 = i2; h2 < a2; h2++)
      if (t3.get(h2) != s2)
        o2[c2]++;
      else {
        if (3 == c2) {
          if (u2 && e2.reverseCounters(o2), e2.isFinderPattern(o2))
            return this.startEnd[0] = f2, void (this.startEnd[1] = h2);
          u2 && e2.reverseCounters(o2), f2 += o2[0] + o2[1], o2[0] = o2[2], o2[1] = o2[3], o2[2] = 0, o2[3] = 0, c2--;
        } else
          c2++;
        o2[c2] = 1, s2 = !s2;
      }
    throw new U();
  }, e2.reverseCounters = function(t3) {
    for (var e3 = t3.length, r2 = 0; r2 < e3 / 2; ++r2) {
      var n2 = t3[r2];
      t3[r2] = t3[e3 - r2 - 1], t3[e3 - r2 - 1] = n2;
    }
  }, e2.prototype.parseFoundFinderPattern = function(t3, r2, n2) {
    var o2, i2, a2;
    if (n2) {
      for (var u2 = this.startEnd[0] - 1; u2 >= 0 && !t3.get(u2); )
        u2--;
      u2++, o2 = this.startEnd[0] - u2, i2 = u2, a2 = this.startEnd[1];
    } else
      i2 = this.startEnd[0], o2 = (a2 = t3.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1];
    var s2, c2 = this.getDecodeFinderCounters();
    w.arraycopy(c2, 0, c2, 1, c2.length - 1), c2[0] = o2;
    try {
      s2 = this.parseFinderValue(c2, e2.FINDER_PATTERNS);
    } catch (t4) {
      return null;
    }
    return new we(s2, [i2, a2], i2, a2, r2);
  }, e2.prototype.decodeDataCharacter = function(t3, r2, n2, o2) {
    for (var i2 = this.getDataCharacterCounters(), a2 = 0; a2 < i2.length; a2++)
      i2[a2] = 0;
    if (o2)
      e2.recordPatternInReverse(t3, r2.getStartEnd()[0], i2);
    else {
      e2.recordPattern(t3, r2.getStartEnd()[1], i2);
      for (var u2 = 0, s2 = i2.length - 1; u2 < s2; u2++, s2--) {
        var c2 = i2[u2];
        i2[u2] = i2[s2], i2[s2] = c2;
      }
    }
    var f2 = vt.sum(new Int32Array(i2)) / 17, h2 = (r2.getStartEnd()[1] - r2.getStartEnd()[0]) / 15;
    if (Math.abs(f2 - h2) / h2 > 0.3)
      throw new U();
    var l2 = this.getOddCounts(), d2 = this.getEvenCounts(), p2 = this.getOddRoundingErrors(), g2 = this.getEvenRoundingErrors();
    for (u2 = 0; u2 < i2.length; u2++) {
      var y2 = 1 * i2[u2] / f2, w2 = y2 + 0.5;
      if (w2 < 1) {
        if (y2 < 0.3)
          throw new U();
        w2 = 1;
      } else if (w2 > 8) {
        if (y2 > 8.7)
          throw new U();
        w2 = 8;
      }
      var _2 = u2 / 2;
      0 == (1 & u2) ? (l2[_2] = w2, p2[_2] = y2 - w2) : (d2[_2] = w2, g2[_2] = y2 - w2);
    }
    this.adjustOddEvenCounts(17);
    var v2 = 4 * r2.getValue() + (n2 ? 0 : 2) + (o2 ? 0 : 1) - 1, m2 = 0, A2 = 0;
    for (u2 = l2.length - 1; u2 >= 0; u2--) {
      if (e2.isNotA1left(r2, n2, o2)) {
        var E2 = e2.WEIGHTS[v2][2 * u2];
        A2 += l2[u2] * E2;
      }
      m2 += l2[u2];
    }
    var C2 = 0;
    for (u2 = d2.length - 1; u2 >= 0; u2--)
      if (e2.isNotA1left(r2, n2, o2)) {
        E2 = e2.WEIGHTS[v2][2 * u2 + 1];
        C2 += d2[u2] * E2;
      }
    var I2 = A2 + C2;
    if (0 != (1 & m2) || m2 > 13 || m2 < 4)
      throw new U();
    var S2 = (13 - m2) / 2, O2 = e2.SYMBOL_WIDEST[S2], T2 = 9 - O2, b2 = ve.getRSSvalue(l2, O2, true), R2 = ve.getRSSvalue(d2, T2, false), N2 = e2.EVEN_TOTAL_SUBSET[S2], D2 = e2.GSUM[S2];
    return new ye(b2 * N2 + R2 + D2, I2);
  }, e2.isNotA1left = function(t3, e3, r2) {
    return !(0 == t3.getValue() && e3 && r2);
  }, e2.prototype.adjustOddEvenCounts = function(t3) {
    var r2 = vt.sum(new Int32Array(this.getOddCounts())), n2 = vt.sum(new Int32Array(this.getEvenCounts())), o2 = false, i2 = false;
    r2 > 13 ? i2 = true : r2 < 4 && (o2 = true);
    var a2 = false, u2 = false;
    n2 > 13 ? u2 = true : n2 < 4 && (a2 = true);
    var s2 = r2 + n2 - t3, c2 = 1 == (1 & r2), f2 = 0 == (1 & n2);
    if (1 == s2)
      if (c2) {
        if (f2)
          throw new U();
        i2 = true;
      } else {
        if (!f2)
          throw new U();
        u2 = true;
      }
    else if (-1 == s2)
      if (c2) {
        if (f2)
          throw new U();
        o2 = true;
      } else {
        if (!f2)
          throw new U();
        a2 = true;
      }
    else {
      if (0 != s2)
        throw new U();
      if (c2) {
        if (!f2)
          throw new U();
        r2 < n2 ? (o2 = true, u2 = true) : (i2 = true, a2 = true);
      } else if (f2)
        throw new U();
    }
    if (o2) {
      if (i2)
        throw new U();
      e2.increment(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (i2 && e2.decrement(this.getOddCounts(), this.getOddRoundingErrors()), a2) {
      if (u2)
        throw new U();
      e2.increment(this.getEvenCounts(), this.getOddRoundingErrors());
    }
    u2 && e2.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
  }, e2.SYMBOL_WIDEST = [7, 5, 4, 3, 1], e2.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], e2.GSUM = [0, 348, 1388, 2948, 3988], e2.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])], e2.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63], [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91], [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108], [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156], [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155], [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177], [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115], [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2], [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167], [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124], [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15], [45, 135, 194, 160, 58, 174, 100, 89]], e2.FINDER_PAT_A = 0, e2.FINDER_PAT_B = 1, e2.FINDER_PAT_C = 2, e2.FINDER_PAT_D = 3, e2.FINDER_PAT_E = 4, e2.FINDER_PAT_F = 5, e2.FINDER_PATTERN_SEQUENCES = [[e2.FINDER_PAT_A, e2.FINDER_PAT_A], [e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B], [e2.FINDER_PAT_A, e2.FINDER_PAT_C, e2.FINDER_PAT_B, e2.FINDER_PAT_D], [e2.FINDER_PAT_A, e2.FINDER_PAT_E, e2.FINDER_PAT_B, e2.FINDER_PAT_D, e2.FINDER_PAT_C], [e2.FINDER_PAT_A, e2.FINDER_PAT_E, e2.FINDER_PAT_B, e2.FINDER_PAT_D, e2.FINDER_PAT_D, e2.FINDER_PAT_F], [e2.FINDER_PAT_A, e2.FINDER_PAT_E, e2.FINDER_PAT_B, e2.FINDER_PAT_D, e2.FINDER_PAT_E, e2.FINDER_PAT_F, e2.FINDER_PAT_F], [e2.FINDER_PAT_A, e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B, e2.FINDER_PAT_C, e2.FINDER_PAT_C, e2.FINDER_PAT_D, e2.FINDER_PAT_D], [e2.FINDER_PAT_A, e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B, e2.FINDER_PAT_C, e2.FINDER_PAT_C, e2.FINDER_PAT_D, e2.FINDER_PAT_E, e2.FINDER_PAT_E], [e2.FINDER_PAT_A, e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B, e2.FINDER_PAT_C, e2.FINDER_PAT_C, e2.FINDER_PAT_D, e2.FINDER_PAT_E, e2.FINDER_PAT_F, e2.FINDER_PAT_F], [e2.FINDER_PAT_A, e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B, e2.FINDER_PAT_C, e2.FINDER_PAT_D, e2.FINDER_PAT_D, e2.FINDER_PAT_E, e2.FINDER_PAT_E, e2.FINDER_PAT_F, e2.FINDER_PAT_F]], e2.MAX_PAIRS = 11, e2;
}(ge);
var or = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ir = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3, r2) || this;
    return o2.count = 0, o2.finderPattern = n2, o2;
  }
  return or(e2, t2), e2.prototype.getFinderPattern = function() {
    return this.finderPattern;
  }, e2.prototype.getCount = function() {
    return this.count;
  }, e2.prototype.incrementCount = function() {
    this.count++;
  }, e2;
}(ye);
var ar = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ur = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var sr = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.possibleLeftPairs = [], e3.possibleRightPairs = [], e3;
  }
  return ar(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2, a2, u2, s2 = this.decodePair(r2, false, t3, n2);
    e2.addOrTally(this.possibleLeftPairs, s2), r2.reverse();
    var c2 = this.decodePair(r2, true, t3, n2);
    e2.addOrTally(this.possibleRightPairs, c2), r2.reverse();
    try {
      for (var f2 = ur(this.possibleLeftPairs), h2 = f2.next(); !h2.done; h2 = f2.next()) {
        var l2 = h2.value;
        if (l2.getCount() > 1)
          try {
            for (var d2 = (a2 = void 0, ur(this.possibleRightPairs)), p2 = d2.next(); !p2.done; p2 = d2.next()) {
              var g2 = p2.value;
              if (g2.getCount() > 1 && e2.checkChecksum(l2, g2))
                return e2.constructResult(l2, g2);
            }
          } catch (t4) {
            a2 = { error: t4 };
          } finally {
            try {
              p2 && !p2.done && (u2 = d2.return) && u2.call(d2);
            } finally {
              if (a2)
                throw a2.error;
            }
          }
      }
    } catch (t4) {
      o2 = { error: t4 };
    } finally {
      try {
        h2 && !h2.done && (i2 = f2.return) && i2.call(f2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
    throw new U();
  }, e2.addOrTally = function(t3, e3) {
    var r2, n2;
    if (null != e3) {
      var o2 = false;
      try {
        for (var i2 = ur(t3), a2 = i2.next(); !a2.done; a2 = i2.next()) {
          var u2 = a2.value;
          if (u2.getValue() === e3.getValue()) {
            u2.incrementCount(), o2 = true;
            break;
          }
        }
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          a2 && !a2.done && (n2 = i2.return) && n2.call(i2);
        } finally {
          if (r2)
            throw r2.error;
        }
      }
      o2 || t3.push(e3);
    }
  }, e2.prototype.reset = function() {
    this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0;
  }, e2.constructResult = function(t3, e3) {
    for (var r2 = 4537077 * t3.getValue() + e3.getValue(), n2 = new String(r2).toString(), o2 = new k(), i2 = 13 - n2.length; i2 > 0; i2--)
      o2.append("0");
    o2.append(n2);
    var a2 = 0;
    for (i2 = 0; i2 < 13; i2++) {
      var u2 = o2.charAt(i2).charCodeAt(0) - "0".charCodeAt(0);
      a2 += 0 == (1 & i2) ? 3 * u2 : u2;
    }
    10 === (a2 = 10 - a2 % 10) && (a2 = 0), o2.append(a2.toString());
    var s2 = t3.getFinderPattern().getResultPoints(), c2 = e3.getFinderPattern().getResultPoints();
    return new et(o2.toString(), null, 0, [s2[0], s2[1], c2[0], c2[1]], nt.RSS_14, (/* @__PURE__ */ new Date()).getTime());
  }, e2.checkChecksum = function(t3, e3) {
    var r2 = (t3.getChecksumPortion() + 16 * e3.getChecksumPortion()) % 79, n2 = 9 * t3.getFinderPattern().getValue() + e3.getFinderPattern().getValue();
    return n2 > 72 && n2--, n2 > 8 && n2--, r2 === n2;
  }, e2.prototype.decodePair = function(t3, e3, r2, n2) {
    try {
      var o2 = this.findFinderPattern(t3, e3), i2 = this.parseFoundFinderPattern(t3, r2, e3, o2), a2 = null == n2 ? null : n2.get(T.NEED_RESULT_POINT_CALLBACK);
      if (null != a2) {
        var u2 = (o2[0] + o2[1]) / 2;
        e3 && (u2 = t3.getSize() - 1 - u2), a2.foundPossibleResultPoint(new At(u2, r2));
      }
      var s2 = this.decodeDataCharacter(t3, i2, true), c2 = this.decodeDataCharacter(t3, i2, false);
      return new ir(1597 * s2.getValue() + c2.getValue(), s2.getChecksumPortion() + 4 * c2.getChecksumPortion(), i2);
    } catch (t4) {
      return null;
    }
  }, e2.prototype.decodeDataCharacter = function(t3, r2, n2) {
    for (var o2 = this.getDataCharacterCounters(), i2 = 0; i2 < o2.length; i2++)
      o2[i2] = 0;
    if (n2)
      Lt.recordPatternInReverse(t3, r2.getStartEnd()[0], o2);
    else {
      Lt.recordPattern(t3, r2.getStartEnd()[1] + 1, o2);
      for (var a2 = 0, u2 = o2.length - 1; a2 < u2; a2++, u2--) {
        var s2 = o2[a2];
        o2[a2] = o2[u2], o2[u2] = s2;
      }
    }
    var c2 = n2 ? 16 : 15, f2 = vt.sum(new Int32Array(o2)) / c2, h2 = this.getOddCounts(), l2 = this.getEvenCounts(), d2 = this.getOddRoundingErrors(), p2 = this.getEvenRoundingErrors();
    for (a2 = 0; a2 < o2.length; a2++) {
      var g2 = o2[a2] / f2, y2 = Math.floor(g2 + 0.5);
      y2 < 1 ? y2 = 1 : y2 > 8 && (y2 = 8);
      var w2 = Math.floor(a2 / 2);
      0 == (1 & a2) ? (h2[w2] = y2, d2[w2] = g2 - y2) : (l2[w2] = y2, p2[w2] = g2 - y2);
    }
    this.adjustOddEvenCounts(n2, c2);
    var _2 = 0, v2 = 0;
    for (a2 = h2.length - 1; a2 >= 0; a2--)
      v2 *= 9, v2 += h2[a2], _2 += h2[a2];
    var m2 = 0, A2 = 0;
    for (a2 = l2.length - 1; a2 >= 0; a2--)
      m2 *= 9, m2 += l2[a2], A2 += l2[a2];
    var E2 = v2 + 3 * m2;
    if (n2) {
      if (0 != (1 & _2) || _2 > 12 || _2 < 4)
        throw new U();
      var C2 = (12 - _2) / 2, I2 = 9 - (R2 = e2.OUTSIDE_ODD_WIDEST[C2]), S2 = ve.getRSSvalue(h2, R2, false), O2 = ve.getRSSvalue(l2, I2, true), T2 = e2.OUTSIDE_EVEN_TOTAL_SUBSET[C2], b2 = e2.OUTSIDE_GSUM[C2];
      return new ye(S2 * T2 + O2 + b2, E2);
    }
    if (0 != (1 & A2) || A2 > 10 || A2 < 4)
      throw new U();
    C2 = (10 - A2) / 2, I2 = 9 - (R2 = e2.INSIDE_ODD_WIDEST[C2]), S2 = ve.getRSSvalue(h2, R2, true), O2 = ve.getRSSvalue(l2, I2, false);
    var R2, N2 = e2.INSIDE_ODD_TOTAL_SUBSET[C2];
    b2 = e2.INSIDE_GSUM[C2];
    return new ye(O2 * N2 + S2 + b2, E2);
  }, e2.prototype.findFinderPattern = function(t3, e3) {
    var r2 = this.getDecodeFinderCounters();
    r2[0] = 0, r2[1] = 0, r2[2] = 0, r2[3] = 0;
    for (var n2 = t3.getSize(), o2 = false, i2 = 0; i2 < n2 && e3 !== (o2 = !t3.get(i2)); )
      i2++;
    for (var a2 = 0, u2 = i2, s2 = i2; s2 < n2; s2++)
      if (t3.get(s2) !== o2)
        r2[a2]++;
      else {
        if (3 === a2) {
          if (ge.isFinderPattern(r2))
            return [u2, s2];
          u2 += r2[0] + r2[1], r2[0] = r2[2], r2[1] = r2[3], r2[2] = 0, r2[3] = 0, a2--;
        } else
          a2++;
        r2[a2] = 1, o2 = !o2;
      }
    throw new U();
  }, e2.prototype.parseFoundFinderPattern = function(t3, r2, n2, o2) {
    for (var i2 = t3.get(o2[0]), a2 = o2[0] - 1; a2 >= 0 && i2 !== t3.get(a2); )
      a2--;
    a2++;
    var u2 = o2[0] - a2, s2 = this.getDecodeFinderCounters(), c2 = new Int32Array(s2.length);
    w.arraycopy(s2, 0, c2, 1, s2.length - 1), c2[0] = u2;
    var f2 = this.parseFinderValue(c2, e2.FINDER_PATTERNS), h2 = a2, l2 = o2[1];
    return n2 && (h2 = t3.getSize() - 1 - h2, l2 = t3.getSize() - 1 - l2), new we(f2, [a2, o2[1]], h2, l2, r2);
  }, e2.prototype.adjustOddEvenCounts = function(t3, e3) {
    var r2 = vt.sum(new Int32Array(this.getOddCounts())), n2 = vt.sum(new Int32Array(this.getEvenCounts())), o2 = false, i2 = false, a2 = false, u2 = false;
    t3 ? (r2 > 12 ? i2 = true : r2 < 4 && (o2 = true), n2 > 12 ? u2 = true : n2 < 4 && (a2 = true)) : (r2 > 11 ? i2 = true : r2 < 5 && (o2 = true), n2 > 10 ? u2 = true : n2 < 4 && (a2 = true));
    var s2 = r2 + n2 - e3, c2 = (1 & r2) == (t3 ? 1 : 0), f2 = 1 == (1 & n2);
    if (1 === s2)
      if (c2) {
        if (f2)
          throw new U();
        i2 = true;
      } else {
        if (!f2)
          throw new U();
        u2 = true;
      }
    else if (-1 === s2)
      if (c2) {
        if (f2)
          throw new U();
        o2 = true;
      } else {
        if (!f2)
          throw new U();
        a2 = true;
      }
    else {
      if (0 !== s2)
        throw new U();
      if (c2) {
        if (!f2)
          throw new U();
        r2 < n2 ? (o2 = true, u2 = true) : (i2 = true, a2 = true);
      } else if (f2)
        throw new U();
    }
    if (o2) {
      if (i2)
        throw new U();
      ge.increment(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (i2 && ge.decrement(this.getOddCounts(), this.getOddRoundingErrors()), a2) {
      if (u2)
        throw new U();
      ge.increment(this.getEvenCounts(), this.getOddRoundingErrors());
    }
    u2 && ge.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
  }, e2.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], e2.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], e2.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], e2.INSIDE_GSUM = [0, 336, 1036, 1516], e2.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], e2.INSIDE_ODD_WIDEST = [2, 4, 6, 8], e2.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])], e2;
}(ge);
var cr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var fr = function(t2) {
  function e2(e3) {
    var r2 = t2.call(this) || this;
    r2.readers = [];
    var n2 = e3 ? e3.get(T.POSSIBLE_FORMATS) : null, o2 = e3 && void 0 !== e3.get(T.ASSUME_CODE_39_CHECK_DIGIT);
    return n2 && ((n2.includes(nt.EAN_13) || n2.includes(nt.UPC_A) || n2.includes(nt.EAN_8) || n2.includes(nt.UPC_E)) && r2.readers.push(new le(e3)), n2.includes(nt.CODE_39) && r2.readers.push(new Ut(o2)), n2.includes(nt.CODE_128) && r2.readers.push(new kt()), n2.includes(nt.ITF) && r2.readers.push(new Xt()), n2.includes(nt.RSS_14) && r2.readers.push(new sr()), n2.includes(nt.RSS_EXPANDED) && (console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk."), r2.readers.push(new nr()))), 0 === r2.readers.length && (r2.readers.push(new le(e3)), r2.readers.push(new Ut()), r2.readers.push(new le(e3)), r2.readers.push(new kt()), r2.readers.push(new Xt()), r2.readers.push(new sr())), r2;
  }
  return cr(e2, t2), e2.prototype.decodeRow = function(t3, e3, r2) {
    for (var n2 = 0; n2 < this.readers.length; n2++)
      try {
        return this.readers[n2].decodeRow(t3, e3, r2);
      } catch (t4) {
      }
    throw new U();
  }, e2.prototype.reset = function() {
    this.readers.forEach(function(t3) {
      return t3.reset();
    });
  }, e2;
}(Lt);
var hr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new fr(r2), e3, r2) || this;
  }
  hr(e2, t2);
}(tt);
var lr;
var dr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var pr = function() {
  function t2(t3, e2, r2) {
    this.ecCodewords = t3, this.ecBlocks = [e2], r2 && this.ecBlocks.push(r2);
  }
  return t2.prototype.getECCodewords = function() {
    return this.ecCodewords;
  }, t2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  }, t2;
}();
var gr = function() {
  function t2(t3, e2) {
    this.count = t3, this.dataCodewords = e2;
  }
  return t2.prototype.getCount = function() {
    return this.count;
  }, t2.prototype.getDataCodewords = function() {
    return this.dataCodewords;
  }, t2;
}();
var yr = function() {
  function t2(t3, e2, r2, n2, o2, i2) {
    var a2, u2;
    this.versionNumber = t3, this.symbolSizeRows = e2, this.symbolSizeColumns = r2, this.dataRegionSizeRows = n2, this.dataRegionSizeColumns = o2, this.ecBlocks = i2;
    var s2 = 0, c2 = i2.getECCodewords(), f2 = i2.getECBlocks();
    try {
      for (var h2 = dr(f2), l2 = h2.next(); !l2.done; l2 = h2.next()) {
        var d2 = l2.value;
        s2 += d2.getCount() * (d2.getDataCodewords() + c2);
      }
    } catch (t4) {
      a2 = { error: t4 };
    } finally {
      try {
        l2 && !l2.done && (u2 = h2.return) && u2.call(h2);
      } finally {
        if (a2)
          throw a2.error;
      }
    }
    this.totalCodewords = s2;
  }
  return t2.prototype.getVersionNumber = function() {
    return this.versionNumber;
  }, t2.prototype.getSymbolSizeRows = function() {
    return this.symbolSizeRows;
  }, t2.prototype.getSymbolSizeColumns = function() {
    return this.symbolSizeColumns;
  }, t2.prototype.getDataRegionSizeRows = function() {
    return this.dataRegionSizeRows;
  }, t2.prototype.getDataRegionSizeColumns = function() {
    return this.dataRegionSizeColumns;
  }, t2.prototype.getTotalCodewords = function() {
    return this.totalCodewords;
  }, t2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  }, t2.getVersionForDimensions = function(e2, r2) {
    var n2, o2;
    if (0 != (1 & e2) || 0 != (1 & r2))
      throw new R();
    try {
      for (var i2 = dr(t2.VERSIONS), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        var u2 = a2.value;
        if (u2.symbolSizeRows === e2 && u2.symbolSizeColumns === r2)
          return u2;
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        a2 && !a2.done && (o2 = i2.return) && o2.call(i2);
      } finally {
        if (n2)
          throw n2.error;
      }
    }
    throw new R();
  }, t2.prototype.toString = function() {
    return "" + this.versionNumber;
  }, t2.buildVersions = function() {
    return [new t2(1, 10, 10, 8, 8, new pr(5, new gr(1, 3))), new t2(2, 12, 12, 10, 10, new pr(7, new gr(1, 5))), new t2(3, 14, 14, 12, 12, new pr(10, new gr(1, 8))), new t2(4, 16, 16, 14, 14, new pr(12, new gr(1, 12))), new t2(5, 18, 18, 16, 16, new pr(14, new gr(1, 18))), new t2(6, 20, 20, 18, 18, new pr(18, new gr(1, 22))), new t2(7, 22, 22, 20, 20, new pr(20, new gr(1, 30))), new t2(8, 24, 24, 22, 22, new pr(24, new gr(1, 36))), new t2(9, 26, 26, 24, 24, new pr(28, new gr(1, 44))), new t2(10, 32, 32, 14, 14, new pr(36, new gr(1, 62))), new t2(11, 36, 36, 16, 16, new pr(42, new gr(1, 86))), new t2(12, 40, 40, 18, 18, new pr(48, new gr(1, 114))), new t2(13, 44, 44, 20, 20, new pr(56, new gr(1, 144))), new t2(14, 48, 48, 22, 22, new pr(68, new gr(1, 174))), new t2(15, 52, 52, 24, 24, new pr(42, new gr(2, 102))), new t2(16, 64, 64, 14, 14, new pr(56, new gr(2, 140))), new t2(17, 72, 72, 16, 16, new pr(36, new gr(4, 92))), new t2(18, 80, 80, 18, 18, new pr(48, new gr(4, 114))), new t2(19, 88, 88, 20, 20, new pr(56, new gr(4, 144))), new t2(20, 96, 96, 22, 22, new pr(68, new gr(4, 174))), new t2(21, 104, 104, 24, 24, new pr(56, new gr(6, 136))), new t2(22, 120, 120, 18, 18, new pr(68, new gr(6, 175))), new t2(23, 132, 132, 20, 20, new pr(62, new gr(8, 163))), new t2(24, 144, 144, 22, 22, new pr(62, new gr(8, 156), new gr(2, 155))), new t2(25, 8, 18, 6, 16, new pr(7, new gr(1, 5))), new t2(26, 8, 32, 6, 14, new pr(11, new gr(1, 10))), new t2(27, 12, 26, 10, 24, new pr(14, new gr(1, 16))), new t2(28, 12, 36, 10, 16, new pr(18, new gr(1, 22))), new t2(29, 16, 36, 14, 16, new pr(24, new gr(1, 32))), new t2(30, 16, 48, 14, 22, new pr(28, new gr(1, 49)))];
  }, t2.VERSIONS = t2.buildVersions(), t2;
}();
var wr = function() {
  function t2(e2) {
    var r2 = e2.getHeight();
    if (r2 < 8 || r2 > 144 || 0 != (1 & r2))
      throw new R();
    this.version = t2.readVersion(e2), this.mappingBitMatrix = this.extractDataRegion(e2), this.readMappingMatrix = new x(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
  }
  return t2.prototype.getVersion = function() {
    return this.version;
  }, t2.readVersion = function(t3) {
    var e2 = t3.getHeight(), r2 = t3.getWidth();
    return yr.getVersionForDimensions(e2, r2);
  }, t2.prototype.readCodewords = function() {
    var t3 = new Int8Array(this.version.getTotalCodewords()), e2 = 0, r2 = 4, n2 = 0, o2 = this.mappingBitMatrix.getHeight(), i2 = this.mappingBitMatrix.getWidth(), a2 = false, u2 = false, s2 = false, c2 = false;
    do {
      if (r2 !== o2 || 0 !== n2 || a2)
        if (r2 !== o2 - 2 || 0 !== n2 || 0 == (3 & i2) || u2)
          if (r2 !== o2 + 4 || 2 !== n2 || 0 != (7 & i2) || s2)
            if (r2 !== o2 - 2 || 0 !== n2 || 4 != (7 & i2) || c2) {
              do {
                r2 < o2 && n2 >= 0 && !this.readMappingMatrix.get(n2, r2) && (t3[e2++] = 255 & this.readUtah(r2, n2, o2, i2)), r2 -= 2, n2 += 2;
              } while (r2 >= 0 && n2 < i2);
              r2 += 1, n2 += 3;
              do {
                r2 >= 0 && n2 < i2 && !this.readMappingMatrix.get(n2, r2) && (t3[e2++] = 255 & this.readUtah(r2, n2, o2, i2)), r2 += 2, n2 -= 2;
              } while (r2 < o2 && n2 >= 0);
              r2 += 3, n2 += 1;
            } else
              t3[e2++] = 255 & this.readCorner4(o2, i2), r2 -= 2, n2 += 2, c2 = true;
          else
            t3[e2++] = 255 & this.readCorner3(o2, i2), r2 -= 2, n2 += 2, s2 = true;
        else
          t3[e2++] = 255 & this.readCorner2(o2, i2), r2 -= 2, n2 += 2, u2 = true;
      else
        t3[e2++] = 255 & this.readCorner1(o2, i2), r2 -= 2, n2 += 2, a2 = true;
    } while (r2 < o2 || n2 < i2);
    if (e2 !== this.version.getTotalCodewords())
      throw new R();
    return t3;
  }, t2.prototype.readModule = function(t3, e2, r2, n2) {
    return t3 < 0 && (t3 += r2, e2 += 4 - (r2 + 4 & 7)), e2 < 0 && (e2 += n2, t3 += 4 - (n2 + 4 & 7)), this.readMappingMatrix.set(e2, t3), this.mappingBitMatrix.get(e2, t3);
  }, t2.prototype.readUtah = function(t3, e2, r2, n2) {
    var o2 = 0;
    return this.readModule(t3 - 2, e2 - 2, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3 - 2, e2 - 1, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3 - 1, e2 - 2, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3 - 1, e2 - 1, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3 - 1, e2, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3, e2 - 2, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3, e2 - 1, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3, e2, r2, n2) && (o2 |= 1), o2;
  }, t2.prototype.readCorner1 = function(t3, e2) {
    var r2 = 0;
    return this.readModule(t3 - 1, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(2, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(3, e2 - 1, t3, e2) && (r2 |= 1), r2;
  }, t2.prototype.readCorner2 = function(t3, e2) {
    var r2 = 0;
    return this.readModule(t3 - 3, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 2, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 4, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 3, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 1, t3, e2) && (r2 |= 1), r2;
  }, t2.prototype.readCorner3 = function(t3, e2) {
    var r2 = 0;
    return this.readModule(t3 - 1, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 3, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 3, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 1, t3, e2) && (r2 |= 1), r2;
  }, t2.prototype.readCorner4 = function(t3, e2) {
    var r2 = 0;
    return this.readModule(t3 - 3, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 2, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(2, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(3, e2 - 1, t3, e2) && (r2 |= 1), r2;
  }, t2.prototype.extractDataRegion = function(t3) {
    var e2 = this.version.getSymbolSizeRows(), r2 = this.version.getSymbolSizeColumns();
    if (t3.getHeight() !== e2)
      throw new l("Dimension of bitMatrix must match the version size");
    for (var n2 = this.version.getDataRegionSizeRows(), o2 = this.version.getDataRegionSizeColumns(), i2 = e2 / n2 | 0, a2 = r2 / o2 | 0, u2 = new x(a2 * o2, i2 * n2), s2 = 0; s2 < i2; ++s2)
      for (var c2 = s2 * n2, f2 = 0; f2 < a2; ++f2)
        for (var h2 = f2 * o2, d2 = 0; d2 < n2; ++d2)
          for (var p2 = s2 * (n2 + 2) + 1 + d2, g2 = c2 + d2, y2 = 0; y2 < o2; ++y2) {
            var w2 = f2 * (o2 + 2) + 1 + y2;
            if (t3.get(w2, p2)) {
              var _2 = h2 + y2;
              u2.set(_2, g2);
            }
          }
    return u2;
  }, t2;
}();
var _r = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var vr = function() {
  function t2(t3, e2) {
    this.numDataCodewords = t3, this.codewords = e2;
  }
  return t2.getDataBlocks = function(e2, r2) {
    var n2, o2, i2, a2, u2 = r2.getECBlocks(), s2 = 0, c2 = u2.getECBlocks();
    try {
      for (var f2 = _r(c2), h2 = f2.next(); !h2.done; h2 = f2.next()) {
        s2 += (w2 = h2.value).getCount();
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        h2 && !h2.done && (o2 = f2.return) && o2.call(f2);
      } finally {
        if (n2)
          throw n2.error;
      }
    }
    var d2 = new Array(s2), p2 = 0;
    try {
      for (var g2 = _r(c2), y2 = g2.next(); !y2.done; y2 = g2.next())
        for (var w2 = y2.value, _2 = 0; _2 < w2.getCount(); _2++) {
          var v2 = w2.getDataCodewords(), m2 = u2.getECCodewords() + v2;
          d2[p2++] = new t2(v2, new Uint8Array(m2));
        }
    } catch (t3) {
      i2 = { error: t3 };
    } finally {
      try {
        y2 && !y2.done && (a2 = g2.return) && a2.call(g2);
      } finally {
        if (i2)
          throw i2.error;
      }
    }
    var A2 = d2[0].codewords.length - u2.getECCodewords(), E2 = A2 - 1, C2 = 0;
    for (_2 = 0; _2 < E2; _2++)
      for (var I2 = 0; I2 < p2; I2++)
        d2[I2].codewords[_2] = e2[C2++];
    var S2 = 24 === r2.getVersionNumber(), O2 = S2 ? 8 : p2;
    for (I2 = 0; I2 < O2; I2++)
      d2[I2].codewords[A2 - 1] = e2[C2++];
    var T2 = d2[0].codewords.length;
    for (_2 = A2; _2 < T2; _2++)
      for (I2 = 0; I2 < p2; I2++) {
        var b2 = S2 ? (I2 + 8) % p2 : I2, R2 = S2 && b2 > 7 ? _2 - 1 : _2;
        d2[b2].codewords[R2] = e2[C2++];
      }
    if (C2 !== e2.length)
      throw new l();
    return d2;
  }, t2.prototype.getNumDataCodewords = function() {
    return this.numDataCodewords;
  }, t2.prototype.getCodewords = function() {
    return this.codewords;
  }, t2;
}();
var mr = function() {
  function t2(t3) {
    this.bytes = t3, this.byteOffset = 0, this.bitOffset = 0;
  }
  return t2.prototype.getBitOffset = function() {
    return this.bitOffset;
  }, t2.prototype.getByteOffset = function() {
    return this.byteOffset;
  }, t2.prototype.readBits = function(t3) {
    if (t3 < 1 || t3 > 32 || t3 > this.available())
      throw new l("" + t3);
    var e2 = 0, r2 = this.bitOffset, n2 = this.byteOffset, o2 = this.bytes;
    if (r2 > 0) {
      var i2 = 8 - r2, a2 = t3 < i2 ? t3 : i2, u2 = 255 >> 8 - a2 << (s2 = i2 - a2);
      e2 = (o2[n2] & u2) >> s2, t3 -= a2, 8 === (r2 += a2) && (r2 = 0, n2++);
    }
    if (t3 > 0) {
      for (; t3 >= 8; )
        e2 = e2 << 8 | 255 & o2[n2], n2++, t3 -= 8;
      if (t3 > 0) {
        var s2;
        u2 = 255 >> (s2 = 8 - t3) << s2;
        e2 = e2 << t3 | (o2[n2] & u2) >> s2, r2 += t3;
      }
    }
    return this.bitOffset = r2, this.byteOffset = n2, e2;
  }, t2.prototype.available = function() {
    return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
  }, t2;
}();
!function(t2) {
  t2[t2.PAD_ENCODE = 0] = "PAD_ENCODE", t2[t2.ASCII_ENCODE = 1] = "ASCII_ENCODE", t2[t2.C40_ENCODE = 2] = "C40_ENCODE", t2[t2.TEXT_ENCODE = 3] = "TEXT_ENCODE", t2[t2.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", t2[t2.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", t2[t2.BASE256_ENCODE = 6] = "BASE256_ENCODE";
}(lr || (lr = {}));
var Ar;
var Er = function() {
  function t2() {
  }
  return t2.decode = function(t3) {
    var e2 = new mr(t3), r2 = new k(), n2 = new k(), o2 = new Array(), i2 = lr.ASCII_ENCODE;
    do {
      if (i2 === lr.ASCII_ENCODE)
        i2 = this.decodeAsciiSegment(e2, r2, n2);
      else {
        switch (i2) {
          case lr.C40_ENCODE:
            this.decodeC40Segment(e2, r2);
            break;
          case lr.TEXT_ENCODE:
            this.decodeTextSegment(e2, r2);
            break;
          case lr.ANSIX12_ENCODE:
            this.decodeAnsiX12Segment(e2, r2);
            break;
          case lr.EDIFACT_ENCODE:
            this.decodeEdifactSegment(e2, r2);
            break;
          case lr.BASE256_ENCODE:
            this.decodeBase256Segment(e2, r2, o2);
            break;
          default:
            throw new R();
        }
        i2 = lr.ASCII_ENCODE;
      }
    } while (i2 !== lr.PAD_ENCODE && e2.available() > 0);
    return n2.length() > 0 && r2.append(n2.toString()), new at(t3, r2.toString(), 0 === o2.length ? null : o2, null);
  }, t2.decodeAsciiSegment = function(t3, e2, r2) {
    var n2 = false;
    do {
      var o2 = t3.readBits(8);
      if (0 === o2)
        throw new R();
      if (o2 <= 128)
        return n2 && (o2 += 128), e2.append(String.fromCharCode(o2 - 1)), lr.ASCII_ENCODE;
      if (129 === o2)
        return lr.PAD_ENCODE;
      if (o2 <= 229) {
        var i2 = o2 - 130;
        i2 < 10 && e2.append("0"), e2.append("" + i2);
      } else
        switch (o2) {
          case 230:
            return lr.C40_ENCODE;
          case 231:
            return lr.BASE256_ENCODE;
          case 232:
            e2.append(String.fromCharCode(29));
            break;
          case 233:
          case 234:
          case 241:
            break;
          case 235:
            n2 = true;
            break;
          case 236:
            e2.append("[)>05"), r2.insert(0, "");
            break;
          case 237:
            e2.append("[)>06"), r2.insert(0, "");
            break;
          case 238:
            return lr.ANSIX12_ENCODE;
          case 239:
            return lr.TEXT_ENCODE;
          case 240:
            return lr.EDIFACT_ENCODE;
          default:
            if (254 !== o2 || 0 !== t3.available())
              throw new R();
        }
    } while (t3.available() > 0);
    return lr.ASCII_ENCODE;
  }, t2.decodeC40Segment = function(t3, e2) {
    var r2 = false, n2 = [], o2 = 0;
    do {
      if (8 === t3.available())
        return;
      var i2 = t3.readBits(8);
      if (254 === i2)
        return;
      this.parseTwoBytes(i2, t3.readBits(8), n2);
      for (var a2 = 0; a2 < 3; a2++) {
        var u2 = n2[a2];
        switch (o2) {
          case 0:
            if (u2 < 3)
              o2 = u2 + 1;
            else {
              if (!(u2 < this.C40_BASIC_SET_CHARS.length))
                throw new R();
              var s2 = this.C40_BASIC_SET_CHARS[u2];
              r2 ? (e2.append(String.fromCharCode(s2.charCodeAt(0) + 128)), r2 = false) : e2.append(s2);
            }
            break;
          case 1:
            r2 ? (e2.append(String.fromCharCode(u2 + 128)), r2 = false) : e2.append(String.fromCharCode(u2)), o2 = 0;
            break;
          case 2:
            if (u2 < this.C40_SHIFT2_SET_CHARS.length) {
              s2 = this.C40_SHIFT2_SET_CHARS[u2];
              r2 ? (e2.append(String.fromCharCode(s2.charCodeAt(0) + 128)), r2 = false) : e2.append(s2);
            } else
              switch (u2) {
                case 27:
                  e2.append(String.fromCharCode(29));
                  break;
                case 30:
                  r2 = true;
                  break;
                default:
                  throw new R();
              }
            o2 = 0;
            break;
          case 3:
            r2 ? (e2.append(String.fromCharCode(u2 + 224)), r2 = false) : e2.append(String.fromCharCode(u2 + 96)), o2 = 0;
            break;
          default:
            throw new R();
        }
      }
    } while (t3.available() > 0);
  }, t2.decodeTextSegment = function(t3, e2) {
    var r2 = false, n2 = [], o2 = 0;
    do {
      if (8 === t3.available())
        return;
      var i2 = t3.readBits(8);
      if (254 === i2)
        return;
      this.parseTwoBytes(i2, t3.readBits(8), n2);
      for (var a2 = 0; a2 < 3; a2++) {
        var u2 = n2[a2];
        switch (o2) {
          case 0:
            if (u2 < 3)
              o2 = u2 + 1;
            else {
              if (!(u2 < this.TEXT_BASIC_SET_CHARS.length))
                throw new R();
              var s2 = this.TEXT_BASIC_SET_CHARS[u2];
              r2 ? (e2.append(String.fromCharCode(s2.charCodeAt(0) + 128)), r2 = false) : e2.append(s2);
            }
            break;
          case 1:
            r2 ? (e2.append(String.fromCharCode(u2 + 128)), r2 = false) : e2.append(String.fromCharCode(u2)), o2 = 0;
            break;
          case 2:
            if (u2 < this.TEXT_SHIFT2_SET_CHARS.length) {
              s2 = this.TEXT_SHIFT2_SET_CHARS[u2];
              r2 ? (e2.append(String.fromCharCode(s2.charCodeAt(0) + 128)), r2 = false) : e2.append(s2);
            } else
              switch (u2) {
                case 27:
                  e2.append(String.fromCharCode(29));
                  break;
                case 30:
                  r2 = true;
                  break;
                default:
                  throw new R();
              }
            o2 = 0;
            break;
          case 3:
            if (!(u2 < this.TEXT_SHIFT3_SET_CHARS.length))
              throw new R();
            s2 = this.TEXT_SHIFT3_SET_CHARS[u2];
            r2 ? (e2.append(String.fromCharCode(s2.charCodeAt(0) + 128)), r2 = false) : e2.append(s2), o2 = 0;
            break;
          default:
            throw new R();
        }
      }
    } while (t3.available() > 0);
  }, t2.decodeAnsiX12Segment = function(t3, e2) {
    var r2 = [];
    do {
      if (8 === t3.available())
        return;
      var n2 = t3.readBits(8);
      if (254 === n2)
        return;
      this.parseTwoBytes(n2, t3.readBits(8), r2);
      for (var o2 = 0; o2 < 3; o2++) {
        var i2 = r2[o2];
        switch (i2) {
          case 0:
            e2.append("\r");
            break;
          case 1:
            e2.append("*");
            break;
          case 2:
            e2.append(">");
            break;
          case 3:
            e2.append(" ");
            break;
          default:
            if (i2 < 14)
              e2.append(String.fromCharCode(i2 + 44));
            else {
              if (!(i2 < 40))
                throw new R();
              e2.append(String.fromCharCode(i2 + 51));
            }
        }
      }
    } while (t3.available() > 0);
  }, t2.parseTwoBytes = function(t3, e2, r2) {
    var n2 = (t3 << 8) + e2 - 1, o2 = Math.floor(n2 / 1600);
    r2[0] = o2, n2 -= 1600 * o2, o2 = Math.floor(n2 / 40), r2[1] = o2, r2[2] = n2 - 40 * o2;
  }, t2.decodeEdifactSegment = function(t3, e2) {
    do {
      if (t3.available() <= 16)
        return;
      for (var r2 = 0; r2 < 4; r2++) {
        var n2 = t3.readBits(6);
        if (31 === n2) {
          var o2 = 8 - t3.getBitOffset();
          return void (8 !== o2 && t3.readBits(o2));
        }
        0 == (32 & n2) && (n2 |= 64), e2.append(String.fromCharCode(n2));
      }
    } while (t3.available() > 0);
  }, t2.decodeBase256Segment = function(t3, e2, r2) {
    var n2, o2 = 1 + t3.getByteOffset(), i2 = this.unrandomize255State(t3.readBits(8), o2++);
    if ((n2 = 0 === i2 ? t3.available() / 8 | 0 : i2 < 250 ? i2 : 250 * (i2 - 249) + this.unrandomize255State(t3.readBits(8), o2++)) < 0)
      throw new R();
    for (var a2 = new Uint8Array(n2), u2 = 0; u2 < n2; u2++) {
      if (t3.available() < 8)
        throw new R();
      a2[u2] = this.unrandomize255State(t3.readBits(8), o2++);
    }
    r2.push(a2);
    try {
      e2.append(L.decode(a2, F.ISO88591));
    } catch (t4) {
      throw new yt("Platform does not support required encoding: " + t4.message);
    }
  }, t2.unrandomize255State = function(t3, e2) {
    var r2 = t3 - (149 * e2 % 255 + 1);
    return r2 >= 0 ? r2 : r2 + 256;
  }, t2.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], t2.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], t2.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], t2.TEXT_SHIFT2_SET_CHARS = t2.C40_SHIFT2_SET_CHARS, t2.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)], t2;
}();
var Cr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Ir = function() {
  function t2() {
    this.rsDecoder = new wt(lt.DATA_MATRIX_FIELD_256);
  }
  return t2.prototype.decode = function(t3) {
    var e2, r2, n2 = new wr(t3), o2 = n2.getVersion(), i2 = n2.readCodewords(), a2 = vr.getDataBlocks(i2, o2), u2 = 0;
    try {
      for (var s2 = Cr(a2), c2 = s2.next(); !c2.done; c2 = s2.next()) {
        u2 += c2.value.getNumDataCodewords();
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        c2 && !c2.done && (r2 = s2.return) && r2.call(s2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    for (var f2 = new Uint8Array(u2), h2 = a2.length, l2 = 0; l2 < h2; l2++) {
      var d2 = a2[l2], p2 = d2.getCodewords(), g2 = d2.getNumDataCodewords();
      this.correctErrors(p2, g2);
      for (var y2 = 0; y2 < g2; y2++)
        f2[y2 * h2 + l2] = p2[y2];
    }
    return Er.decode(f2);
  }, t2.prototype.correctErrors = function(t3, e2) {
    var r2 = new Int32Array(t3);
    try {
      this.rsDecoder.decode(r2, t3.length - e2);
    } catch (t4) {
      throw new g();
    }
    for (var n2 = 0; n2 < e2; n2++)
      t3[n2] = r2[n2];
  }, t2;
}();
var Sr = function() {
  function t2(t3) {
    this.image = t3, this.rectangleDetector = new St(this.image);
  }
  return t2.prototype.detect = function() {
    var e2 = this.rectangleDetector.detect(), r2 = this.detectSolid1(e2);
    if ((r2 = this.detectSolid2(r2))[3] = this.correctTopRight(r2), !r2[3])
      throw new U();
    var n2 = (r2 = this.shiftToModuleCenter(r2))[0], o2 = r2[1], i2 = r2[2], a2 = r2[3], u2 = this.transitionsBetween(n2, a2) + 1, s2 = this.transitionsBetween(i2, a2) + 1;
    1 == (1 & u2) && (u2 += 1), 1 == (1 & s2) && (s2 += 1), 4 * u2 < 7 * s2 && 4 * s2 < 7 * u2 && (u2 = s2 = Math.max(u2, s2));
    var c2 = t2.sampleGrid(this.image, n2, o2, i2, a2, u2, s2);
    return new Et(c2, [n2, o2, i2, a2]);
  }, t2.shiftPoint = function(t3, e2, r2) {
    var n2 = (e2.getX() - t3.getX()) / (r2 + 1), o2 = (e2.getY() - t3.getY()) / (r2 + 1);
    return new At(t3.getX() + n2, t3.getY() + o2);
  }, t2.moveAway = function(t3, e2, r2) {
    var n2 = t3.getX(), o2 = t3.getY();
    return n2 < e2 ? n2 -= 1 : n2 += 1, o2 < r2 ? o2 -= 1 : o2 += 1, new At(n2, o2);
  }, t2.prototype.detectSolid1 = function(t3) {
    var e2 = t3[0], r2 = t3[1], n2 = t3[3], o2 = t3[2], i2 = this.transitionsBetween(e2, r2), a2 = this.transitionsBetween(r2, n2), u2 = this.transitionsBetween(n2, o2), s2 = this.transitionsBetween(o2, e2), c2 = i2, f2 = [o2, e2, r2, n2];
    return c2 > a2 && (c2 = a2, f2[0] = e2, f2[1] = r2, f2[2] = n2, f2[3] = o2), c2 > u2 && (c2 = u2, f2[0] = r2, f2[1] = n2, f2[2] = o2, f2[3] = e2), c2 > s2 && (f2[0] = n2, f2[1] = o2, f2[2] = e2, f2[3] = r2), f2;
  }, t2.prototype.detectSolid2 = function(e2) {
    var r2 = e2[0], n2 = e2[1], o2 = e2[2], i2 = e2[3], a2 = this.transitionsBetween(r2, i2), u2 = t2.shiftPoint(n2, o2, 4 * (a2 + 1)), s2 = t2.shiftPoint(o2, n2, 4 * (a2 + 1));
    return this.transitionsBetween(u2, r2) < this.transitionsBetween(s2, i2) ? (e2[0] = r2, e2[1] = n2, e2[2] = o2, e2[3] = i2) : (e2[0] = n2, e2[1] = o2, e2[2] = i2, e2[3] = r2), e2;
  }, t2.prototype.correctTopRight = function(e2) {
    var r2 = e2[0], n2 = e2[1], o2 = e2[2], i2 = e2[3], a2 = this.transitionsBetween(r2, i2), u2 = this.transitionsBetween(n2, i2), s2 = t2.shiftPoint(r2, n2, 4 * (u2 + 1)), c2 = t2.shiftPoint(o2, n2, 4 * (a2 + 1));
    a2 = this.transitionsBetween(s2, i2), u2 = this.transitionsBetween(c2, i2);
    var f2 = new At(i2.getX() + (o2.getX() - n2.getX()) / (a2 + 1), i2.getY() + (o2.getY() - n2.getY()) / (a2 + 1)), h2 = new At(i2.getX() + (r2.getX() - n2.getX()) / (u2 + 1), i2.getY() + (r2.getY() - n2.getY()) / (u2 + 1));
    return this.isValid(f2) ? this.isValid(h2) ? this.transitionsBetween(s2, f2) + this.transitionsBetween(c2, f2) > this.transitionsBetween(s2, h2) + this.transitionsBetween(c2, h2) ? f2 : h2 : f2 : this.isValid(h2) ? h2 : null;
  }, t2.prototype.shiftToModuleCenter = function(e2) {
    var r2 = e2[0], n2 = e2[1], o2 = e2[2], i2 = e2[3], a2 = this.transitionsBetween(r2, i2) + 1, u2 = this.transitionsBetween(o2, i2) + 1, s2 = t2.shiftPoint(r2, n2, 4 * u2), c2 = t2.shiftPoint(o2, n2, 4 * a2);
    1 == (1 & (a2 = this.transitionsBetween(s2, i2) + 1)) && (a2 += 1), 1 == (1 & (u2 = this.transitionsBetween(c2, i2) + 1)) && (u2 += 1);
    var f2, h2, l2 = (r2.getX() + n2.getX() + o2.getX() + i2.getX()) / 4, d2 = (r2.getY() + n2.getY() + o2.getY() + i2.getY()) / 4;
    return r2 = t2.moveAway(r2, l2, d2), n2 = t2.moveAway(n2, l2, d2), o2 = t2.moveAway(o2, l2, d2), i2 = t2.moveAway(i2, l2, d2), s2 = t2.shiftPoint(r2, n2, 4 * u2), s2 = t2.shiftPoint(s2, i2, 4 * a2), f2 = t2.shiftPoint(n2, r2, 4 * u2), f2 = t2.shiftPoint(f2, o2, 4 * a2), c2 = t2.shiftPoint(o2, i2, 4 * u2), c2 = t2.shiftPoint(c2, n2, 4 * a2), h2 = t2.shiftPoint(i2, o2, 4 * u2), [s2, f2, c2, h2 = t2.shiftPoint(h2, r2, 4 * a2)];
  }, t2.prototype.isValid = function(t3) {
    return t3.getX() >= 0 && t3.getX() < this.image.getWidth() && t3.getY() > 0 && t3.getY() < this.image.getHeight();
  }, t2.sampleGrid = function(t3, e2, r2, n2, o2, i2, a2) {
    return Nt.getInstance().sampleGrid(t3, i2, a2, 0.5, 0.5, i2 - 0.5, 0.5, i2 - 0.5, a2 - 0.5, 0.5, a2 - 0.5, e2.getX(), e2.getY(), o2.getX(), o2.getY(), n2.getX(), n2.getY(), r2.getX(), r2.getY());
  }, t2.prototype.transitionsBetween = function(t3, e2) {
    var r2 = Math.trunc(t3.getX()), n2 = Math.trunc(t3.getY()), o2 = Math.trunc(e2.getX()), i2 = Math.trunc(e2.getY()), a2 = Math.abs(i2 - n2) > Math.abs(o2 - r2);
    if (a2) {
      var u2 = r2;
      r2 = n2, n2 = u2, u2 = o2, o2 = i2, i2 = u2;
    }
    for (var s2 = Math.abs(o2 - r2), c2 = Math.abs(i2 - n2), f2 = -s2 / 2, h2 = n2 < i2 ? 1 : -1, l2 = r2 < o2 ? 1 : -1, d2 = 0, p2 = this.image.get(a2 ? n2 : r2, a2 ? r2 : n2), g2 = r2, y2 = n2; g2 !== o2; g2 += l2) {
      var w2 = this.image.get(a2 ? y2 : g2, a2 ? g2 : y2);
      if (w2 !== p2 && (d2++, p2 = w2), (f2 += c2) > 0) {
        if (y2 === i2)
          break;
        y2 += h2, f2 -= s2;
      }
    }
    return d2;
  }, t2;
}();
var Or = function() {
  function t2() {
    this.decoder = new Ir();
  }
  return t2.prototype.decode = function(e2, r2) {
    var n2, o2;
    if (void 0 === r2 && (r2 = null), null != r2 && r2.has(T.PURE_BARCODE)) {
      var i2 = t2.extractPureBits(e2.getBlackMatrix());
      n2 = this.decoder.decode(i2), o2 = t2.NO_POINTS;
    } else {
      var a2 = new Sr(e2.getBlackMatrix()).detect();
      n2 = this.decoder.decode(a2.getBits()), o2 = a2.getPoints();
    }
    var u2 = n2.getRawBytes(), s2 = new et(n2.getText(), u2, 8 * u2.length, o2, nt.DATA_MATRIX, w.currentTimeMillis()), c2 = n2.getByteSegments();
    null != c2 && s2.putMetadata(it.BYTE_SEGMENTS, c2);
    var f2 = n2.getECLevel();
    return null != f2 && s2.putMetadata(it.ERROR_CORRECTION_LEVEL, f2), s2;
  }, t2.prototype.reset = function() {
  }, t2.extractPureBits = function(t3) {
    var e2 = t3.getTopLeftOnBit(), r2 = t3.getBottomRightOnBit();
    if (null == e2 || null == r2)
      throw new U();
    var n2 = this.moduleSize(e2, t3), o2 = e2[1], i2 = r2[1], a2 = e2[0], u2 = (r2[0] - a2 + 1) / n2, s2 = (i2 - o2 + 1) / n2;
    if (u2 <= 0 || s2 <= 0)
      throw new U();
    var c2 = n2 / 2;
    o2 += c2, a2 += c2;
    for (var f2 = new x(u2, s2), h2 = 0; h2 < s2; h2++)
      for (var l2 = o2 + h2 * n2, d2 = 0; d2 < u2; d2++)
        t3.get(a2 + d2 * n2, l2) && f2.set(d2, h2);
    return f2;
  }, t2.moduleSize = function(t3, e2) {
    for (var r2 = e2.getWidth(), n2 = t3[0], o2 = t3[1]; n2 < r2 && e2.get(n2, o2); )
      n2++;
    if (n2 === r2)
      throw new U();
    var i2 = n2 - t3[0];
    if (0 === i2)
      throw new U();
    return i2;
  }, t2.NO_POINTS = [], t2;
}();
var Tr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new Or(), e3) || this;
  }
  Tr(e2, t2);
}(tt), function(t2) {
  t2[t2.L = 0] = "L", t2[t2.M = 1] = "M", t2[t2.Q = 2] = "Q", t2[t2.H = 3] = "H";
}(Ar || (Ar = {}));
var br;
var Rr = function() {
  function t2(e2, r2, n2) {
    this.value = e2, this.stringValue = r2, this.bits = n2, t2.FOR_BITS.set(n2, this), t2.FOR_VALUE.set(e2, this);
  }
  return t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getBits = function() {
    return this.bits;
  }, t2.fromString = function(e2) {
    switch (e2) {
      case "L":
        return t2.L;
      case "M":
        return t2.M;
      case "Q":
        return t2.Q;
      case "H":
        return t2.H;
      default:
        throw new f(e2 + "not available");
    }
  }, t2.prototype.toString = function() {
    return this.stringValue;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    return this.value === r2.value;
  }, t2.forBits = function(e2) {
    if (e2 < 0 || e2 >= t2.FOR_BITS.size)
      throw new l();
    return t2.FOR_BITS.get(e2);
  }, t2.FOR_BITS = /* @__PURE__ */ new Map(), t2.FOR_VALUE = /* @__PURE__ */ new Map(), t2.L = new t2(Ar.L, "L", 1), t2.M = new t2(Ar.M, "M", 0), t2.Q = new t2(Ar.Q, "Q", 3), t2.H = new t2(Ar.H, "H", 2), t2;
}();
var Nr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Dr = function() {
  function t2(t3) {
    this.errorCorrectionLevel = Rr.forBits(t3 >> 3 & 3), this.dataMask = 7 & t3;
  }
  return t2.numBitsDiffering = function(t3, e2) {
    return I.bitCount(t3 ^ e2);
  }, t2.decodeFormatInformation = function(e2, r2) {
    var n2 = t2.doDecodeFormatInformation(e2, r2);
    return null !== n2 ? n2 : t2.doDecodeFormatInformation(e2 ^ t2.FORMAT_INFO_MASK_QR, r2 ^ t2.FORMAT_INFO_MASK_QR);
  }, t2.doDecodeFormatInformation = function(e2, r2) {
    var n2, o2, i2 = Number.MAX_SAFE_INTEGER, a2 = 0;
    try {
      for (var u2 = Nr(t2.FORMAT_INFO_DECODE_LOOKUP), s2 = u2.next(); !s2.done; s2 = u2.next()) {
        var c2 = s2.value, f2 = c2[0];
        if (f2 === e2 || f2 === r2)
          return new t2(c2[1]);
        var h2 = t2.numBitsDiffering(e2, f2);
        h2 < i2 && (a2 = c2[1], i2 = h2), e2 !== r2 && (h2 = t2.numBitsDiffering(r2, f2)) < i2 && (a2 = c2[1], i2 = h2);
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        s2 && !s2.done && (o2 = u2.return) && o2.call(u2);
      } finally {
        if (n2)
          throw n2.error;
      }
    }
    return i2 <= 3 ? new t2(a2) : null;
  }, t2.prototype.getErrorCorrectionLevel = function() {
    return this.errorCorrectionLevel;
  }, t2.prototype.getDataMask = function() {
    return this.dataMask;
  }, t2.prototype.hashCode = function() {
    return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    return this.errorCorrectionLevel === r2.errorCorrectionLevel && this.dataMask === r2.dataMask;
  }, t2.FORMAT_INFO_MASK_QR = 21522, t2.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])], t2;
}();
var Pr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Mr = function() {
  function t2(t3) {
    for (var e2 = [], r2 = 1; r2 < arguments.length; r2++)
      e2[r2 - 1] = arguments[r2];
    this.ecCodewordsPerBlock = t3, this.ecBlocks = e2;
  }
  return t2.prototype.getECCodewordsPerBlock = function() {
    return this.ecCodewordsPerBlock;
  }, t2.prototype.getNumBlocks = function() {
    var t3, e2, r2 = 0, n2 = this.ecBlocks;
    try {
      for (var o2 = Pr(n2), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        r2 += i2.value.getCount();
      }
    } catch (e3) {
      t3 = { error: e3 };
    } finally {
      try {
        i2 && !i2.done && (e2 = o2.return) && e2.call(o2);
      } finally {
        if (t3)
          throw t3.error;
      }
    }
    return r2;
  }, t2.prototype.getTotalECCodewords = function() {
    return this.ecCodewordsPerBlock * this.getNumBlocks();
  }, t2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  }, t2;
}();
var Br = function() {
  function t2(t3, e2) {
    this.count = t3, this.dataCodewords = e2;
  }
  return t2.prototype.getCount = function() {
    return this.count;
  }, t2.prototype.getDataCodewords = function() {
    return this.dataCodewords;
  }, t2;
}();
var Lr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Fr = function() {
  function t2(t3, e2) {
    for (var r2, n2, o2 = [], i2 = 2; i2 < arguments.length; i2++)
      o2[i2 - 2] = arguments[i2];
    this.versionNumber = t3, this.alignmentPatternCenters = e2, this.ecBlocks = o2;
    var a2 = 0, u2 = o2[0].getECCodewordsPerBlock(), s2 = o2[0].getECBlocks();
    try {
      for (var c2 = Lr(s2), f2 = c2.next(); !f2.done; f2 = c2.next()) {
        var h2 = f2.value;
        a2 += h2.getCount() * (h2.getDataCodewords() + u2);
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        f2 && !f2.done && (n2 = c2.return) && n2.call(c2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
    this.totalCodewords = a2;
  }
  return t2.prototype.getVersionNumber = function() {
    return this.versionNumber;
  }, t2.prototype.getAlignmentPatternCenters = function() {
    return this.alignmentPatternCenters;
  }, t2.prototype.getTotalCodewords = function() {
    return this.totalCodewords;
  }, t2.prototype.getDimensionForVersion = function() {
    return 17 + 4 * this.versionNumber;
  }, t2.prototype.getECBlocksForLevel = function(t3) {
    return this.ecBlocks[t3.getValue()];
  }, t2.getProvisionalVersionForDimension = function(t3) {
    if (t3 % 4 != 1)
      throw new R();
    try {
      return this.getVersionForNumber((t3 - 17) / 4);
    } catch (t4) {
      throw new R();
    }
  }, t2.getVersionForNumber = function(e2) {
    if (e2 < 1 || e2 > 40)
      throw new l();
    return t2.VERSIONS[e2 - 1];
  }, t2.decodeVersionInformation = function(e2) {
    for (var r2 = Number.MAX_SAFE_INTEGER, n2 = 0, o2 = 0; o2 < t2.VERSION_DECODE_INFO.length; o2++) {
      var i2 = t2.VERSION_DECODE_INFO[o2];
      if (i2 === e2)
        return t2.getVersionForNumber(o2 + 7);
      var a2 = Dr.numBitsDiffering(e2, i2);
      a2 < r2 && (n2 = o2 + 7, r2 = a2);
    }
    return r2 <= 3 ? t2.getVersionForNumber(n2) : null;
  }, t2.prototype.buildFunctionPattern = function() {
    var t3 = this.getDimensionForVersion(), e2 = new x(t3);
    e2.setRegion(0, 0, 9, 9), e2.setRegion(t3 - 8, 0, 8, 9), e2.setRegion(0, t3 - 8, 9, 8);
    for (var r2 = this.alignmentPatternCenters.length, n2 = 0; n2 < r2; n2++)
      for (var o2 = this.alignmentPatternCenters[n2] - 2, i2 = 0; i2 < r2; i2++)
        0 === n2 && (0 === i2 || i2 === r2 - 1) || n2 === r2 - 1 && 0 === i2 || e2.setRegion(this.alignmentPatternCenters[i2] - 2, o2, 5, 5);
    return e2.setRegion(6, 9, 1, t3 - 17), e2.setRegion(9, 6, t3 - 17, 1), this.versionNumber > 6 && (e2.setRegion(t3 - 11, 0, 3, 6), e2.setRegion(0, t3 - 11, 6, 3)), e2;
  }, t2.prototype.toString = function() {
    return "" + this.versionNumber;
  }, t2.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), t2.VERSIONS = [new t2(1, new Int32Array(0), new Mr(7, new Br(1, 19)), new Mr(10, new Br(1, 16)), new Mr(13, new Br(1, 13)), new Mr(17, new Br(1, 9))), new t2(2, Int32Array.from([6, 18]), new Mr(10, new Br(1, 34)), new Mr(16, new Br(1, 28)), new Mr(22, new Br(1, 22)), new Mr(28, new Br(1, 16))), new t2(3, Int32Array.from([6, 22]), new Mr(15, new Br(1, 55)), new Mr(26, new Br(1, 44)), new Mr(18, new Br(2, 17)), new Mr(22, new Br(2, 13))), new t2(4, Int32Array.from([6, 26]), new Mr(20, new Br(1, 80)), new Mr(18, new Br(2, 32)), new Mr(26, new Br(2, 24)), new Mr(16, new Br(4, 9))), new t2(5, Int32Array.from([6, 30]), new Mr(26, new Br(1, 108)), new Mr(24, new Br(2, 43)), new Mr(18, new Br(2, 15), new Br(2, 16)), new Mr(22, new Br(2, 11), new Br(2, 12))), new t2(6, Int32Array.from([6, 34]), new Mr(18, new Br(2, 68)), new Mr(16, new Br(4, 27)), new Mr(24, new Br(4, 19)), new Mr(28, new Br(4, 15))), new t2(7, Int32Array.from([6, 22, 38]), new Mr(20, new Br(2, 78)), new Mr(18, new Br(4, 31)), new Mr(18, new Br(2, 14), new Br(4, 15)), new Mr(26, new Br(4, 13), new Br(1, 14))), new t2(8, Int32Array.from([6, 24, 42]), new Mr(24, new Br(2, 97)), new Mr(22, new Br(2, 38), new Br(2, 39)), new Mr(22, new Br(4, 18), new Br(2, 19)), new Mr(26, new Br(4, 14), new Br(2, 15))), new t2(9, Int32Array.from([6, 26, 46]), new Mr(30, new Br(2, 116)), new Mr(22, new Br(3, 36), new Br(2, 37)), new Mr(20, new Br(4, 16), new Br(4, 17)), new Mr(24, new Br(4, 12), new Br(4, 13))), new t2(10, Int32Array.from([6, 28, 50]), new Mr(18, new Br(2, 68), new Br(2, 69)), new Mr(26, new Br(4, 43), new Br(1, 44)), new Mr(24, new Br(6, 19), new Br(2, 20)), new Mr(28, new Br(6, 15), new Br(2, 16))), new t2(11, Int32Array.from([6, 30, 54]), new Mr(20, new Br(4, 81)), new Mr(30, new Br(1, 50), new Br(4, 51)), new Mr(28, new Br(4, 22), new Br(4, 23)), new Mr(24, new Br(3, 12), new Br(8, 13))), new t2(12, Int32Array.from([6, 32, 58]), new Mr(24, new Br(2, 92), new Br(2, 93)), new Mr(22, new Br(6, 36), new Br(2, 37)), new Mr(26, new Br(4, 20), new Br(6, 21)), new Mr(28, new Br(7, 14), new Br(4, 15))), new t2(13, Int32Array.from([6, 34, 62]), new Mr(26, new Br(4, 107)), new Mr(22, new Br(8, 37), new Br(1, 38)), new Mr(24, new Br(8, 20), new Br(4, 21)), new Mr(22, new Br(12, 11), new Br(4, 12))), new t2(14, Int32Array.from([6, 26, 46, 66]), new Mr(30, new Br(3, 115), new Br(1, 116)), new Mr(24, new Br(4, 40), new Br(5, 41)), new Mr(20, new Br(11, 16), new Br(5, 17)), new Mr(24, new Br(11, 12), new Br(5, 13))), new t2(15, Int32Array.from([6, 26, 48, 70]), new Mr(22, new Br(5, 87), new Br(1, 88)), new Mr(24, new Br(5, 41), new Br(5, 42)), new Mr(30, new Br(5, 24), new Br(7, 25)), new Mr(24, new Br(11, 12), new Br(7, 13))), new t2(16, Int32Array.from([6, 26, 50, 74]), new Mr(24, new Br(5, 98), new Br(1, 99)), new Mr(28, new Br(7, 45), new Br(3, 46)), new Mr(24, new Br(15, 19), new Br(2, 20)), new Mr(30, new Br(3, 15), new Br(13, 16))), new t2(17, Int32Array.from([6, 30, 54, 78]), new Mr(28, new Br(1, 107), new Br(5, 108)), new Mr(28, new Br(10, 46), new Br(1, 47)), new Mr(28, new Br(1, 22), new Br(15, 23)), new Mr(28, new Br(2, 14), new Br(17, 15))), new t2(18, Int32Array.from([6, 30, 56, 82]), new Mr(30, new Br(5, 120), new Br(1, 121)), new Mr(26, new Br(9, 43), new Br(4, 44)), new Mr(28, new Br(17, 22), new Br(1, 23)), new Mr(28, new Br(2, 14), new Br(19, 15))), new t2(19, Int32Array.from([6, 30, 58, 86]), new Mr(28, new Br(3, 113), new Br(4, 114)), new Mr(26, new Br(3, 44), new Br(11, 45)), new Mr(26, new Br(17, 21), new Br(4, 22)), new Mr(26, new Br(9, 13), new Br(16, 14))), new t2(20, Int32Array.from([6, 34, 62, 90]), new Mr(28, new Br(3, 107), new Br(5, 108)), new Mr(26, new Br(3, 41), new Br(13, 42)), new Mr(30, new Br(15, 24), new Br(5, 25)), new Mr(28, new Br(15, 15), new Br(10, 16))), new t2(21, Int32Array.from([6, 28, 50, 72, 94]), new Mr(28, new Br(4, 116), new Br(4, 117)), new Mr(26, new Br(17, 42)), new Mr(28, new Br(17, 22), new Br(6, 23)), new Mr(30, new Br(19, 16), new Br(6, 17))), new t2(22, Int32Array.from([6, 26, 50, 74, 98]), new Mr(28, new Br(2, 111), new Br(7, 112)), new Mr(28, new Br(17, 46)), new Mr(30, new Br(7, 24), new Br(16, 25)), new Mr(24, new Br(34, 13))), new t2(23, Int32Array.from([6, 30, 54, 78, 102]), new Mr(30, new Br(4, 121), new Br(5, 122)), new Mr(28, new Br(4, 47), new Br(14, 48)), new Mr(30, new Br(11, 24), new Br(14, 25)), new Mr(30, new Br(16, 15), new Br(14, 16))), new t2(24, Int32Array.from([6, 28, 54, 80, 106]), new Mr(30, new Br(6, 117), new Br(4, 118)), new Mr(28, new Br(6, 45), new Br(14, 46)), new Mr(30, new Br(11, 24), new Br(16, 25)), new Mr(30, new Br(30, 16), new Br(2, 17))), new t2(25, Int32Array.from([6, 32, 58, 84, 110]), new Mr(26, new Br(8, 106), new Br(4, 107)), new Mr(28, new Br(8, 47), new Br(13, 48)), new Mr(30, new Br(7, 24), new Br(22, 25)), new Mr(30, new Br(22, 15), new Br(13, 16))), new t2(26, Int32Array.from([6, 30, 58, 86, 114]), new Mr(28, new Br(10, 114), new Br(2, 115)), new Mr(28, new Br(19, 46), new Br(4, 47)), new Mr(28, new Br(28, 22), new Br(6, 23)), new Mr(30, new Br(33, 16), new Br(4, 17))), new t2(27, Int32Array.from([6, 34, 62, 90, 118]), new Mr(30, new Br(8, 122), new Br(4, 123)), new Mr(28, new Br(22, 45), new Br(3, 46)), new Mr(30, new Br(8, 23), new Br(26, 24)), new Mr(30, new Br(12, 15), new Br(28, 16))), new t2(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new Mr(30, new Br(3, 117), new Br(10, 118)), new Mr(28, new Br(3, 45), new Br(23, 46)), new Mr(30, new Br(4, 24), new Br(31, 25)), new Mr(30, new Br(11, 15), new Br(31, 16))), new t2(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new Mr(30, new Br(7, 116), new Br(7, 117)), new Mr(28, new Br(21, 45), new Br(7, 46)), new Mr(30, new Br(1, 23), new Br(37, 24)), new Mr(30, new Br(19, 15), new Br(26, 16))), new t2(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new Mr(30, new Br(5, 115), new Br(10, 116)), new Mr(28, new Br(19, 47), new Br(10, 48)), new Mr(30, new Br(15, 24), new Br(25, 25)), new Mr(30, new Br(23, 15), new Br(25, 16))), new t2(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new Mr(30, new Br(13, 115), new Br(3, 116)), new Mr(28, new Br(2, 46), new Br(29, 47)), new Mr(30, new Br(42, 24), new Br(1, 25)), new Mr(30, new Br(23, 15), new Br(28, 16))), new t2(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new Mr(30, new Br(17, 115)), new Mr(28, new Br(10, 46), new Br(23, 47)), new Mr(30, new Br(10, 24), new Br(35, 25)), new Mr(30, new Br(19, 15), new Br(35, 16))), new t2(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new Mr(30, new Br(17, 115), new Br(1, 116)), new Mr(28, new Br(14, 46), new Br(21, 47)), new Mr(30, new Br(29, 24), new Br(19, 25)), new Mr(30, new Br(11, 15), new Br(46, 16))), new t2(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new Mr(30, new Br(13, 115), new Br(6, 116)), new Mr(28, new Br(14, 46), new Br(23, 47)), new Mr(30, new Br(44, 24), new Br(7, 25)), new Mr(30, new Br(59, 16), new Br(1, 17))), new t2(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new Mr(30, new Br(12, 121), new Br(7, 122)), new Mr(28, new Br(12, 47), new Br(26, 48)), new Mr(30, new Br(39, 24), new Br(14, 25)), new Mr(30, new Br(22, 15), new Br(41, 16))), new t2(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new Mr(30, new Br(6, 121), new Br(14, 122)), new Mr(28, new Br(6, 47), new Br(34, 48)), new Mr(30, new Br(46, 24), new Br(10, 25)), new Mr(30, new Br(2, 15), new Br(64, 16))), new t2(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new Mr(30, new Br(17, 122), new Br(4, 123)), new Mr(28, new Br(29, 46), new Br(14, 47)), new Mr(30, new Br(49, 24), new Br(10, 25)), new Mr(30, new Br(24, 15), new Br(46, 16))), new t2(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new Mr(30, new Br(4, 122), new Br(18, 123)), new Mr(28, new Br(13, 46), new Br(32, 47)), new Mr(30, new Br(48, 24), new Br(14, 25)), new Mr(30, new Br(42, 15), new Br(32, 16))), new t2(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new Mr(30, new Br(20, 117), new Br(4, 118)), new Mr(28, new Br(40, 47), new Br(7, 48)), new Mr(30, new Br(43, 24), new Br(22, 25)), new Mr(30, new Br(10, 15), new Br(67, 16))), new t2(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new Mr(30, new Br(19, 118), new Br(6, 119)), new Mr(28, new Br(18, 47), new Br(31, 48)), new Mr(30, new Br(34, 24), new Br(34, 25)), new Mr(30, new Br(20, 15), new Br(61, 16)))], t2;
}();
!function(t2) {
  t2[t2.DATA_MASK_000 = 0] = "DATA_MASK_000", t2[t2.DATA_MASK_001 = 1] = "DATA_MASK_001", t2[t2.DATA_MASK_010 = 2] = "DATA_MASK_010", t2[t2.DATA_MASK_011 = 3] = "DATA_MASK_011", t2[t2.DATA_MASK_100 = 4] = "DATA_MASK_100", t2[t2.DATA_MASK_101 = 5] = "DATA_MASK_101", t2[t2.DATA_MASK_110 = 6] = "DATA_MASK_110", t2[t2.DATA_MASK_111 = 7] = "DATA_MASK_111";
}(br || (br = {}));
var kr;
var xr = function() {
  function t2(t3, e2) {
    this.value = t3, this.isMasked = e2;
  }
  return t2.prototype.unmaskBitMatrix = function(t3, e2) {
    for (var r2 = 0; r2 < e2; r2++)
      for (var n2 = 0; n2 < e2; n2++)
        this.isMasked(r2, n2) && t3.flip(n2, r2);
  }, t2.values = /* @__PURE__ */ new Map([[br.DATA_MASK_000, new t2(br.DATA_MASK_000, function(t3, e2) {
    return 0 == (t3 + e2 & 1);
  })], [br.DATA_MASK_001, new t2(br.DATA_MASK_001, function(t3, e2) {
    return 0 == (1 & t3);
  })], [br.DATA_MASK_010, new t2(br.DATA_MASK_010, function(t3, e2) {
    return e2 % 3 == 0;
  })], [br.DATA_MASK_011, new t2(br.DATA_MASK_011, function(t3, e2) {
    return (t3 + e2) % 3 == 0;
  })], [br.DATA_MASK_100, new t2(br.DATA_MASK_100, function(t3, e2) {
    return 0 == (Math.floor(t3 / 2) + Math.floor(e2 / 3) & 1);
  })], [br.DATA_MASK_101, new t2(br.DATA_MASK_101, function(t3, e2) {
    return t3 * e2 % 6 == 0;
  })], [br.DATA_MASK_110, new t2(br.DATA_MASK_110, function(t3, e2) {
    return t3 * e2 % 6 < 3;
  })], [br.DATA_MASK_111, new t2(br.DATA_MASK_111, function(t3, e2) {
    return 0 == (t3 + e2 + t3 * e2 % 3 & 1);
  })]]), t2;
}();
var Vr = function() {
  function t2(t3) {
    var e2 = t3.getHeight();
    if (e2 < 21 || 1 != (3 & e2))
      throw new R();
    this.bitMatrix = t3;
  }
  return t2.prototype.readFormatInformation = function() {
    if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo)
      return this.parsedFormatInfo;
    for (var t3 = 0, e2 = 0; e2 < 6; e2++)
      t3 = this.copyBit(e2, 8, t3);
    t3 = this.copyBit(7, 8, t3), t3 = this.copyBit(8, 8, t3), t3 = this.copyBit(8, 7, t3);
    for (var r2 = 5; r2 >= 0; r2--)
      t3 = this.copyBit(8, r2, t3);
    var n2 = this.bitMatrix.getHeight(), o2 = 0, i2 = n2 - 7;
    for (r2 = n2 - 1; r2 >= i2; r2--)
      o2 = this.copyBit(8, r2, o2);
    for (e2 = n2 - 8; e2 < n2; e2++)
      o2 = this.copyBit(e2, 8, o2);
    if (this.parsedFormatInfo = Dr.decodeFormatInformation(t3, o2), null !== this.parsedFormatInfo)
      return this.parsedFormatInfo;
    throw new R();
  }, t2.prototype.readVersion = function() {
    if (null !== this.parsedVersion && void 0 !== this.parsedVersion)
      return this.parsedVersion;
    var t3 = this.bitMatrix.getHeight(), e2 = Math.floor((t3 - 17) / 4);
    if (e2 <= 6)
      return Fr.getVersionForNumber(e2);
    for (var r2 = 0, n2 = t3 - 11, o2 = 5; o2 >= 0; o2--)
      for (var i2 = t3 - 9; i2 >= n2; i2--)
        r2 = this.copyBit(i2, o2, r2);
    var a2 = Fr.decodeVersionInformation(r2);
    if (null !== a2 && a2.getDimensionForVersion() === t3)
      return this.parsedVersion = a2, a2;
    r2 = 0;
    for (i2 = 5; i2 >= 0; i2--)
      for (o2 = t3 - 9; o2 >= n2; o2--)
        r2 = this.copyBit(i2, o2, r2);
    if (null !== (a2 = Fr.decodeVersionInformation(r2)) && a2.getDimensionForVersion() === t3)
      return this.parsedVersion = a2, a2;
    throw new R();
  }, t2.prototype.copyBit = function(t3, e2, r2) {
    return (this.isMirror ? this.bitMatrix.get(e2, t3) : this.bitMatrix.get(t3, e2)) ? r2 << 1 | 1 : r2 << 1;
  }, t2.prototype.readCodewords = function() {
    var t3 = this.readFormatInformation(), e2 = this.readVersion(), r2 = xr.values.get(t3.getDataMask()), n2 = this.bitMatrix.getHeight();
    r2.unmaskBitMatrix(this.bitMatrix, n2);
    for (var o2 = e2.buildFunctionPattern(), i2 = true, a2 = new Uint8Array(e2.getTotalCodewords()), u2 = 0, s2 = 0, c2 = 0, f2 = n2 - 1; f2 > 0; f2 -= 2) {
      6 === f2 && f2--;
      for (var h2 = 0; h2 < n2; h2++)
        for (var l2 = i2 ? n2 - 1 - h2 : h2, d2 = 0; d2 < 2; d2++)
          o2.get(f2 - d2, l2) || (c2++, s2 <<= 1, this.bitMatrix.get(f2 - d2, l2) && (s2 |= 1), 8 === c2 && (a2[u2++] = s2, c2 = 0, s2 = 0));
      i2 = !i2;
    }
    if (u2 !== e2.getTotalCodewords())
      throw new R();
    return a2;
  }, t2.prototype.remask = function() {
    if (null !== this.parsedFormatInfo) {
      var t3 = xr.values[this.parsedFormatInfo.getDataMask()], e2 = this.bitMatrix.getHeight();
      t3.unmaskBitMatrix(this.bitMatrix, e2);
    }
  }, t2.prototype.setMirror = function(t3) {
    this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t3;
  }, t2.prototype.mirror = function() {
    for (var t3 = this.bitMatrix, e2 = 0, r2 = t3.getWidth(); e2 < r2; e2++)
      for (var n2 = e2 + 1, o2 = t3.getHeight(); n2 < o2; n2++)
        t3.get(e2, n2) !== t3.get(n2, e2) && (t3.flip(n2, e2), t3.flip(e2, n2));
  }, t2;
}();
var Ur = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Hr = function() {
  function t2(t3, e2) {
    this.numDataCodewords = t3, this.codewords = e2;
  }
  return t2.getDataBlocks = function(e2, r2, n2) {
    var o2, i2, a2, u2;
    if (e2.length !== r2.getTotalCodewords())
      throw new l();
    var s2 = r2.getECBlocksForLevel(n2), c2 = 0, f2 = s2.getECBlocks();
    try {
      for (var h2 = Ur(f2), d2 = h2.next(); !d2.done; d2 = h2.next()) {
        c2 += (_2 = d2.value).getCount();
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        d2 && !d2.done && (i2 = h2.return) && i2.call(h2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
    var p2 = new Array(c2), g2 = 0;
    try {
      for (var y2 = Ur(f2), w2 = y2.next(); !w2.done; w2 = y2.next())
        for (var _2 = w2.value, v2 = 0; v2 < _2.getCount(); v2++) {
          var m2 = _2.getDataCodewords(), A2 = s2.getECCodewordsPerBlock() + m2;
          p2[g2++] = new t2(m2, new Uint8Array(A2));
        }
    } catch (t3) {
      a2 = { error: t3 };
    } finally {
      try {
        w2 && !w2.done && (u2 = y2.return) && u2.call(y2);
      } finally {
        if (a2)
          throw a2.error;
      }
    }
    for (var E2 = p2[0].codewords.length, C2 = p2.length - 1; C2 >= 0; ) {
      if (p2[C2].codewords.length === E2)
        break;
      C2--;
    }
    C2++;
    var I2 = E2 - s2.getECCodewordsPerBlock(), S2 = 0;
    for (v2 = 0; v2 < I2; v2++)
      for (var O2 = 0; O2 < g2; O2++)
        p2[O2].codewords[v2] = e2[S2++];
    for (O2 = C2; O2 < g2; O2++)
      p2[O2].codewords[I2] = e2[S2++];
    var T2 = p2[0].codewords.length;
    for (v2 = I2; v2 < T2; v2++)
      for (O2 = 0; O2 < g2; O2++) {
        var b2 = O2 < C2 ? v2 : v2 + 1;
        p2[O2].codewords[b2] = e2[S2++];
      }
    return p2;
  }, t2.prototype.getNumDataCodewords = function() {
    return this.numDataCodewords;
  }, t2.prototype.getCodewords = function() {
    return this.codewords;
  }, t2;
}();
!function(t2) {
  t2[t2.TERMINATOR = 0] = "TERMINATOR", t2[t2.NUMERIC = 1] = "NUMERIC", t2[t2.ALPHANUMERIC = 2] = "ALPHANUMERIC", t2[t2.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", t2[t2.BYTE = 4] = "BYTE", t2[t2.ECI = 5] = "ECI", t2[t2.KANJI = 6] = "KANJI", t2[t2.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", t2[t2.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", t2[t2.HANZI = 9] = "HANZI";
}(kr || (kr = {}));
var Gr;
var Xr;
var Wr = function() {
  function t2(e2, r2, n2, o2) {
    this.value = e2, this.stringValue = r2, this.characterCountBitsForVersions = n2, this.bits = o2, t2.FOR_BITS.set(o2, this), t2.FOR_VALUE.set(e2, this);
  }
  return t2.forBits = function(e2) {
    var r2 = t2.FOR_BITS.get(e2);
    if (void 0 === r2)
      throw new l();
    return r2;
  }, t2.prototype.getCharacterCountBits = function(t3) {
    var e2, r2 = t3.getVersionNumber();
    return e2 = r2 <= 9 ? 0 : r2 <= 26 ? 1 : 2, this.characterCountBitsForVersions[e2];
  }, t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getBits = function() {
    return this.bits;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    return this.value === r2.value;
  }, t2.prototype.toString = function() {
    return this.stringValue;
  }, t2.FOR_BITS = /* @__PURE__ */ new Map(), t2.FOR_VALUE = /* @__PURE__ */ new Map(), t2.TERMINATOR = new t2(kr.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), t2.NUMERIC = new t2(kr.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), t2.ALPHANUMERIC = new t2(kr.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), t2.STRUCTURED_APPEND = new t2(kr.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), t2.BYTE = new t2(kr.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), t2.ECI = new t2(kr.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), t2.KANJI = new t2(kr.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), t2.FNC1_FIRST_POSITION = new t2(kr.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), t2.FNC1_SECOND_POSITION = new t2(kr.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), t2.HANZI = new t2(kr.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), t2;
}();
var jr = function() {
  function t2() {
  }
  return t2.decode = function(e2, r2, n2, o2) {
    var i2 = new mr(e2), a2 = new k(), u2 = new Array(), s2 = -1, c2 = -1;
    try {
      var f2 = null, h2 = false, l2 = void 0;
      do {
        if (i2.available() < 4)
          l2 = Wr.TERMINATOR;
        else {
          var d2 = i2.readBits(4);
          l2 = Wr.forBits(d2);
        }
        switch (l2) {
          case Wr.TERMINATOR:
            break;
          case Wr.FNC1_FIRST_POSITION:
          case Wr.FNC1_SECOND_POSITION:
            h2 = true;
            break;
          case Wr.STRUCTURED_APPEND:
            if (i2.available() < 16)
              throw new R();
            s2 = i2.readBits(8), c2 = i2.readBits(8);
            break;
          case Wr.ECI:
            var p2 = t2.parseECIValue(i2);
            if (null === (f2 = P.getCharacterSetECIByValue(p2)))
              throw new R();
            break;
          case Wr.HANZI:
            var g2 = i2.readBits(4), y2 = i2.readBits(l2.getCharacterCountBits(r2));
            g2 === t2.GB2312_SUBSET && t2.decodeHanziSegment(i2, a2, y2);
            break;
          default:
            var w2 = i2.readBits(l2.getCharacterCountBits(r2));
            switch (l2) {
              case Wr.NUMERIC:
                t2.decodeNumericSegment(i2, a2, w2);
                break;
              case Wr.ALPHANUMERIC:
                t2.decodeAlphanumericSegment(i2, a2, w2, h2);
                break;
              case Wr.BYTE:
                t2.decodeByteSegment(i2, a2, w2, f2, u2, o2);
                break;
              case Wr.KANJI:
                t2.decodeKanjiSegment(i2, a2, w2);
                break;
              default:
                throw new R();
            }
        }
      } while (l2 !== Wr.TERMINATOR);
    } catch (t3) {
      throw new R();
    }
    return new at(e2, a2.toString(), 0 === u2.length ? null : u2, null === n2 ? null : n2.toString(), s2, c2);
  }, t2.decodeHanziSegment = function(t3, e2, r2) {
    if (13 * r2 > t3.available())
      throw new R();
    for (var n2 = new Uint8Array(2 * r2), o2 = 0; r2 > 0; ) {
      var i2 = t3.readBits(13), a2 = i2 / 96 << 8 & 4294967295 | i2 % 96;
      a2 += a2 < 959 ? 41377 : 42657, n2[o2] = a2 >> 8 & 255, n2[o2 + 1] = 255 & a2, o2 += 2, r2--;
    }
    try {
      e2.append(L.decode(n2, F.GB2312));
    } catch (t4) {
      throw new R(t4);
    }
  }, t2.decodeKanjiSegment = function(t3, e2, r2) {
    if (13 * r2 > t3.available())
      throw new R();
    for (var n2 = new Uint8Array(2 * r2), o2 = 0; r2 > 0; ) {
      var i2 = t3.readBits(13), a2 = i2 / 192 << 8 & 4294967295 | i2 % 192;
      a2 += a2 < 7936 ? 33088 : 49472, n2[o2] = a2 >> 8, n2[o2 + 1] = a2, o2 += 2, r2--;
    }
    try {
      e2.append(L.decode(n2, F.SHIFT_JIS));
    } catch (t4) {
      throw new R(t4);
    }
  }, t2.decodeByteSegment = function(t3, e2, r2, n2, o2, i2) {
    if (8 * r2 > t3.available())
      throw new R();
    for (var a2, u2 = new Uint8Array(r2), s2 = 0; s2 < r2; s2++)
      u2[s2] = t3.readBits(8);
    a2 = null === n2 ? F.guessEncoding(u2, i2) : n2.getName();
    try {
      e2.append(L.decode(u2, a2));
    } catch (t4) {
      throw new R(t4);
    }
    o2.push(u2);
  }, t2.toAlphaNumericChar = function(e2) {
    if (e2 >= t2.ALPHANUMERIC_CHARS.length)
      throw new R();
    return t2.ALPHANUMERIC_CHARS[e2];
  }, t2.decodeAlphanumericSegment = function(e2, r2, n2, o2) {
    for (var i2 = r2.length(); n2 > 1; ) {
      if (e2.available() < 11)
        throw new R();
      var a2 = e2.readBits(11);
      r2.append(t2.toAlphaNumericChar(Math.floor(a2 / 45))), r2.append(t2.toAlphaNumericChar(a2 % 45)), n2 -= 2;
    }
    if (1 === n2) {
      if (e2.available() < 6)
        throw new R();
      r2.append(t2.toAlphaNumericChar(e2.readBits(6)));
    }
    if (o2)
      for (var u2 = i2; u2 < r2.length(); u2++)
        "%" === r2.charAt(u2) && (u2 < r2.length() - 1 && "%" === r2.charAt(u2 + 1) ? r2.deleteCharAt(u2 + 1) : r2.setCharAt(u2, String.fromCharCode(29)));
  }, t2.decodeNumericSegment = function(e2, r2, n2) {
    for (; n2 >= 3; ) {
      if (e2.available() < 10)
        throw new R();
      var o2 = e2.readBits(10);
      if (o2 >= 1e3)
        throw new R();
      r2.append(t2.toAlphaNumericChar(Math.floor(o2 / 100))), r2.append(t2.toAlphaNumericChar(Math.floor(o2 / 10) % 10)), r2.append(t2.toAlphaNumericChar(o2 % 10)), n2 -= 3;
    }
    if (2 === n2) {
      if (e2.available() < 7)
        throw new R();
      var i2 = e2.readBits(7);
      if (i2 >= 100)
        throw new R();
      r2.append(t2.toAlphaNumericChar(Math.floor(i2 / 10))), r2.append(t2.toAlphaNumericChar(i2 % 10));
    } else if (1 === n2) {
      if (e2.available() < 4)
        throw new R();
      var a2 = e2.readBits(4);
      if (a2 >= 10)
        throw new R();
      r2.append(t2.toAlphaNumericChar(a2));
    }
  }, t2.parseECIValue = function(t3) {
    var e2 = t3.readBits(8);
    if (0 == (128 & e2))
      return 127 & e2;
    if (128 == (192 & e2))
      return (63 & e2) << 8 & 4294967295 | t3.readBits(8);
    if (192 == (224 & e2))
      return (31 & e2) << 16 & 4294967295 | t3.readBits(16);
    throw new R();
  }, t2.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t2.GB2312_SUBSET = 1, t2;
}();
var zr = function() {
  function t2(t3) {
    this.mirrored = t3;
  }
  return t2.prototype.isMirrored = function() {
    return this.mirrored;
  }, t2.prototype.applyMirroredCorrection = function(t3) {
    if (this.mirrored && null !== t3 && !(t3.length < 3)) {
      var e2 = t3[0];
      t3[0] = t3[2], t3[2] = e2;
    }
  }, t2;
}();
var Yr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Zr = function() {
  function t2() {
    this.rsDecoder = new wt(lt.QR_CODE_FIELD_256);
  }
  return t2.prototype.decodeBooleanArray = function(t3, e2) {
    return this.decodeBitMatrix(x.parseFromBooleanArray(t3), e2);
  }, t2.prototype.decodeBitMatrix = function(t3, e2) {
    var r2 = new Vr(t3), n2 = null;
    try {
      return this.decodeBitMatrixParser(r2, e2);
    } catch (t4) {
      n2 = t4;
    }
    try {
      r2.remask(), r2.setMirror(true), r2.readVersion(), r2.readFormatInformation(), r2.mirror();
      var o2 = this.decodeBitMatrixParser(r2, e2);
      return o2.setOther(new zr(true)), o2;
    } catch (t4) {
      if (null !== n2)
        throw n2;
      throw t4;
    }
  }, t2.prototype.decodeBitMatrixParser = function(t3, e2) {
    var r2, n2, o2, i2, a2 = t3.readVersion(), u2 = t3.readFormatInformation().getErrorCorrectionLevel(), s2 = t3.readCodewords(), c2 = Hr.getDataBlocks(s2, a2, u2), f2 = 0;
    try {
      for (var h2 = Yr(c2), l2 = h2.next(); !l2.done; l2 = h2.next()) {
        f2 += (w2 = l2.value).getNumDataCodewords();
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        l2 && !l2.done && (n2 = h2.return) && n2.call(h2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
    var d2 = new Uint8Array(f2), p2 = 0;
    try {
      for (var g2 = Yr(c2), y2 = g2.next(); !y2.done; y2 = g2.next()) {
        var w2, _2 = (w2 = y2.value).getCodewords(), v2 = w2.getNumDataCodewords();
        this.correctErrors(_2, v2);
        for (var m2 = 0; m2 < v2; m2++)
          d2[p2++] = _2[m2];
      }
    } catch (t4) {
      o2 = { error: t4 };
    } finally {
      try {
        y2 && !y2.done && (i2 = g2.return) && i2.call(g2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
    return jr.decode(d2, a2, u2, e2);
  }, t2.prototype.correctErrors = function(t3, e2) {
    var r2 = new Int32Array(t3);
    try {
      this.rsDecoder.decode(r2, t3.length - e2);
    } catch (t4) {
      throw new g();
    }
    for (var n2 = 0; n2 < e2; n2++)
      t3[n2] = r2[n2];
  }, t2;
}();
var Kr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var qr = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3, r2) || this;
    return o2.estimatedModuleSize = n2, o2;
  }
  return Kr(e2, t2), e2.prototype.aboutEquals = function(t3, e3, r2) {
    if (Math.abs(e3 - this.getY()) <= t3 && Math.abs(r2 - this.getX()) <= t3) {
      var n2 = Math.abs(t3 - this.estimatedModuleSize);
      return n2 <= 1 || n2 <= this.estimatedModuleSize;
    }
    return false;
  }, e2.prototype.combineEstimate = function(t3, r2, n2) {
    return new e2((this.getX() + r2) / 2, (this.getY() + t3) / 2, (this.estimatedModuleSize + n2) / 2);
  }, e2;
}(At);
var Qr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Jr = function() {
  function t2(t3, e2, r2, n2, o2, i2, a2) {
    this.image = t3, this.startX = e2, this.startY = r2, this.width = n2, this.height = o2, this.moduleSize = i2, this.resultPointCallback = a2, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3);
  }
  return t2.prototype.find = function() {
    for (var t3 = this.startX, e2 = this.height, r2 = t3 + this.width, n2 = this.startY + e2 / 2, o2 = new Int32Array(3), i2 = this.image, a2 = 0; a2 < e2; a2++) {
      var u2 = n2 + (0 == (1 & a2) ? Math.floor((a2 + 1) / 2) : -Math.floor((a2 + 1) / 2));
      o2[0] = 0, o2[1] = 0, o2[2] = 0;
      for (var s2 = t3; s2 < r2 && !i2.get(s2, u2); )
        s2++;
      for (var c2 = 0; s2 < r2; ) {
        if (i2.get(s2, u2))
          if (1 === c2)
            o2[1]++;
          else if (2 === c2) {
            var f2;
            if (this.foundPatternCross(o2)) {
              if (null !== (f2 = this.handlePossibleCenter(o2, u2, s2)))
                return f2;
            }
            o2[0] = o2[2], o2[1] = 1, o2[2] = 0, c2 = 1;
          } else
            o2[++c2]++;
        else
          1 === c2 && c2++, o2[c2]++;
        s2++;
      }
      if (this.foundPatternCross(o2)) {
        if (null !== (f2 = this.handlePossibleCenter(o2, u2, r2)))
          return f2;
      }
    }
    if (0 !== this.possibleCenters.length)
      return this.possibleCenters[0];
    throw new U();
  }, t2.centerFromEnd = function(t3, e2) {
    return e2 - t3[2] - t3[1] / 2;
  }, t2.prototype.foundPatternCross = function(t3) {
    for (var e2 = this.moduleSize, r2 = e2 / 2, n2 = 0; n2 < 3; n2++)
      if (Math.abs(e2 - t3[n2]) >= r2)
        return false;
    return true;
  }, t2.prototype.crossCheckVertical = function(e2, r2, n2, o2) {
    var i2 = this.image, a2 = i2.getHeight(), u2 = this.crossCheckStateCount;
    u2[0] = 0, u2[1] = 0, u2[2] = 0;
    for (var s2 = e2; s2 >= 0 && i2.get(r2, s2) && u2[1] <= n2; )
      u2[1]++, s2--;
    if (s2 < 0 || u2[1] > n2)
      return NaN;
    for (; s2 >= 0 && !i2.get(r2, s2) && u2[0] <= n2; )
      u2[0]++, s2--;
    if (u2[0] > n2)
      return NaN;
    for (s2 = e2 + 1; s2 < a2 && i2.get(r2, s2) && u2[1] <= n2; )
      u2[1]++, s2++;
    if (s2 === a2 || u2[1] > n2)
      return NaN;
    for (; s2 < a2 && !i2.get(r2, s2) && u2[2] <= n2; )
      u2[2]++, s2++;
    if (u2[2] > n2)
      return NaN;
    var c2 = u2[0] + u2[1] + u2[2];
    return 5 * Math.abs(c2 - o2) >= 2 * o2 ? NaN : this.foundPatternCross(u2) ? t2.centerFromEnd(u2, s2) : NaN;
  }, t2.prototype.handlePossibleCenter = function(e2, r2, n2) {
    var o2, i2, a2 = e2[0] + e2[1] + e2[2], u2 = t2.centerFromEnd(e2, n2), s2 = this.crossCheckVertical(r2, u2, 2 * e2[1], a2);
    if (!isNaN(s2)) {
      var c2 = (e2[0] + e2[1] + e2[2]) / 3;
      try {
        for (var f2 = Qr(this.possibleCenters), h2 = f2.next(); !h2.done; h2 = f2.next()) {
          var l2 = h2.value;
          if (l2.aboutEquals(c2, s2, u2))
            return l2.combineEstimate(s2, u2, c2);
        }
      } catch (t3) {
        o2 = { error: t3 };
      } finally {
        try {
          h2 && !h2.done && (i2 = f2.return) && i2.call(f2);
        } finally {
          if (o2)
            throw o2.error;
        }
      }
      var d2 = new qr(u2, s2, c2);
      this.possibleCenters.push(d2), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(d2);
    }
    return null;
  }, t2;
}();
var $r = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var tn = function(t2) {
  function e2(e3, r2, n2, o2) {
    var i2 = t2.call(this, e3, r2) || this;
    return i2.estimatedModuleSize = n2, i2.count = o2, void 0 === o2 && (i2.count = 1), i2;
  }
  return $r(e2, t2), e2.prototype.getEstimatedModuleSize = function() {
    return this.estimatedModuleSize;
  }, e2.prototype.getCount = function() {
    return this.count;
  }, e2.prototype.aboutEquals = function(t3, e3, r2) {
    if (Math.abs(e3 - this.getY()) <= t3 && Math.abs(r2 - this.getX()) <= t3) {
      var n2 = Math.abs(t3 - this.estimatedModuleSize);
      return n2 <= 1 || n2 <= this.estimatedModuleSize;
    }
    return false;
  }, e2.prototype.combineEstimate = function(t3, r2, n2) {
    var o2 = this.count + 1;
    return new e2((this.count * this.getX() + r2) / o2, (this.count * this.getY() + t3) / o2, (this.count * this.estimatedModuleSize + n2) / o2, o2);
  }, e2;
}(At);
var en = function() {
  function t2(t3) {
    this.bottomLeft = t3[0], this.topLeft = t3[1], this.topRight = t3[2];
  }
  return t2.prototype.getBottomLeft = function() {
    return this.bottomLeft;
  }, t2.prototype.getTopLeft = function() {
    return this.topLeft;
  }, t2.prototype.getTopRight = function() {
    return this.topRight;
  }, t2;
}();
var rn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var nn = function() {
  function t2(t3, e2) {
    this.image = t3, this.resultPointCallback = e2, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = e2;
  }
  return t2.prototype.getImage = function() {
    return this.image;
  }, t2.prototype.getPossibleCenters = function() {
    return this.possibleCenters;
  }, t2.prototype.find = function(e2) {
    var r2 = null != e2 && void 0 !== e2.get(T.TRY_HARDER), n2 = null != e2 && void 0 !== e2.get(T.PURE_BARCODE), o2 = this.image, i2 = o2.getHeight(), a2 = o2.getWidth(), u2 = Math.floor(3 * i2 / (4 * t2.MAX_MODULES));
    (u2 < t2.MIN_SKIP || r2) && (u2 = t2.MIN_SKIP);
    for (var s2 = false, c2 = new Int32Array(5), f2 = u2 - 1; f2 < i2 && !s2; f2 += u2) {
      c2[0] = 0, c2[1] = 0, c2[2] = 0, c2[3] = 0, c2[4] = 0;
      for (var h2 = 0, l2 = 0; l2 < a2; l2++)
        if (o2.get(l2, f2))
          1 == (1 & h2) && h2++, c2[h2]++;
        else if (0 == (1 & h2))
          if (4 === h2)
            if (t2.foundPatternCross(c2)) {
              if (true !== this.handlePossibleCenter(c2, f2, l2, n2)) {
                c2[0] = c2[2], c2[1] = c2[3], c2[2] = c2[4], c2[3] = 1, c2[4] = 0, h2 = 3;
                continue;
              }
              if (u2 = 2, true === this.hasSkipped)
                s2 = this.haveMultiplyConfirmedCenters();
              else {
                var d2 = this.findRowSkip();
                d2 > c2[2] && (f2 += d2 - c2[2] - u2, l2 = a2 - 1);
              }
              h2 = 0, c2[0] = 0, c2[1] = 0, c2[2] = 0, c2[3] = 0, c2[4] = 0;
            } else
              c2[0] = c2[2], c2[1] = c2[3], c2[2] = c2[4], c2[3] = 1, c2[4] = 0, h2 = 3;
          else
            c2[++h2]++;
        else
          c2[h2]++;
      if (t2.foundPatternCross(c2))
        true === this.handlePossibleCenter(c2, f2, a2, n2) && (u2 = c2[0], this.hasSkipped && (s2 = this.haveMultiplyConfirmedCenters()));
    }
    var p2 = this.selectBestPatterns();
    return At.orderBestPatterns(p2), new en(p2);
  }, t2.centerFromEnd = function(t3, e2) {
    return e2 - t3[4] - t3[3] - t3[2] / 2;
  }, t2.foundPatternCross = function(t3) {
    for (var e2 = 0, r2 = 0; r2 < 5; r2++) {
      var n2 = t3[r2];
      if (0 === n2)
        return false;
      e2 += n2;
    }
    if (e2 < 7)
      return false;
    var o2 = e2 / 7, i2 = o2 / 2;
    return Math.abs(o2 - t3[0]) < i2 && Math.abs(o2 - t3[1]) < i2 && Math.abs(3 * o2 - t3[2]) < 3 * i2 && Math.abs(o2 - t3[3]) < i2 && Math.abs(o2 - t3[4]) < i2;
  }, t2.prototype.getCrossCheckStateCount = function() {
    var t3 = this.crossCheckStateCount;
    return t3[0] = 0, t3[1] = 0, t3[2] = 0, t3[3] = 0, t3[4] = 0, t3;
  }, t2.prototype.crossCheckDiagonal = function(e2, r2, n2, o2) {
    for (var i2 = this.getCrossCheckStateCount(), a2 = 0, u2 = this.image; e2 >= a2 && r2 >= a2 && u2.get(r2 - a2, e2 - a2); )
      i2[2]++, a2++;
    if (e2 < a2 || r2 < a2)
      return false;
    for (; e2 >= a2 && r2 >= a2 && !u2.get(r2 - a2, e2 - a2) && i2[1] <= n2; )
      i2[1]++, a2++;
    if (e2 < a2 || r2 < a2 || i2[1] > n2)
      return false;
    for (; e2 >= a2 && r2 >= a2 && u2.get(r2 - a2, e2 - a2) && i2[0] <= n2; )
      i2[0]++, a2++;
    if (i2[0] > n2)
      return false;
    var s2 = u2.getHeight(), c2 = u2.getWidth();
    for (a2 = 1; e2 + a2 < s2 && r2 + a2 < c2 && u2.get(r2 + a2, e2 + a2); )
      i2[2]++, a2++;
    if (e2 + a2 >= s2 || r2 + a2 >= c2)
      return false;
    for (; e2 + a2 < s2 && r2 + a2 < c2 && !u2.get(r2 + a2, e2 + a2) && i2[3] < n2; )
      i2[3]++, a2++;
    if (e2 + a2 >= s2 || r2 + a2 >= c2 || i2[3] >= n2)
      return false;
    for (; e2 + a2 < s2 && r2 + a2 < c2 && u2.get(r2 + a2, e2 + a2) && i2[4] < n2; )
      i2[4]++, a2++;
    if (i2[4] >= n2)
      return false;
    var f2 = i2[0] + i2[1] + i2[2] + i2[3] + i2[4];
    return Math.abs(f2 - o2) < 2 * o2 && t2.foundPatternCross(i2);
  }, t2.prototype.crossCheckVertical = function(e2, r2, n2, o2) {
    for (var i2 = this.image, a2 = i2.getHeight(), u2 = this.getCrossCheckStateCount(), s2 = e2; s2 >= 0 && i2.get(r2, s2); )
      u2[2]++, s2--;
    if (s2 < 0)
      return NaN;
    for (; s2 >= 0 && !i2.get(r2, s2) && u2[1] <= n2; )
      u2[1]++, s2--;
    if (s2 < 0 || u2[1] > n2)
      return NaN;
    for (; s2 >= 0 && i2.get(r2, s2) && u2[0] <= n2; )
      u2[0]++, s2--;
    if (u2[0] > n2)
      return NaN;
    for (s2 = e2 + 1; s2 < a2 && i2.get(r2, s2); )
      u2[2]++, s2++;
    if (s2 === a2)
      return NaN;
    for (; s2 < a2 && !i2.get(r2, s2) && u2[3] < n2; )
      u2[3]++, s2++;
    if (s2 === a2 || u2[3] >= n2)
      return NaN;
    for (; s2 < a2 && i2.get(r2, s2) && u2[4] < n2; )
      u2[4]++, s2++;
    if (u2[4] >= n2)
      return NaN;
    var c2 = u2[0] + u2[1] + u2[2] + u2[3] + u2[4];
    return 5 * Math.abs(c2 - o2) >= 2 * o2 ? NaN : t2.foundPatternCross(u2) ? t2.centerFromEnd(u2, s2) : NaN;
  }, t2.prototype.crossCheckHorizontal = function(e2, r2, n2, o2) {
    for (var i2 = this.image, a2 = i2.getWidth(), u2 = this.getCrossCheckStateCount(), s2 = e2; s2 >= 0 && i2.get(s2, r2); )
      u2[2]++, s2--;
    if (s2 < 0)
      return NaN;
    for (; s2 >= 0 && !i2.get(s2, r2) && u2[1] <= n2; )
      u2[1]++, s2--;
    if (s2 < 0 || u2[1] > n2)
      return NaN;
    for (; s2 >= 0 && i2.get(s2, r2) && u2[0] <= n2; )
      u2[0]++, s2--;
    if (u2[0] > n2)
      return NaN;
    for (s2 = e2 + 1; s2 < a2 && i2.get(s2, r2); )
      u2[2]++, s2++;
    if (s2 === a2)
      return NaN;
    for (; s2 < a2 && !i2.get(s2, r2) && u2[3] < n2; )
      u2[3]++, s2++;
    if (s2 === a2 || u2[3] >= n2)
      return NaN;
    for (; s2 < a2 && i2.get(s2, r2) && u2[4] < n2; )
      u2[4]++, s2++;
    if (u2[4] >= n2)
      return NaN;
    var c2 = u2[0] + u2[1] + u2[2] + u2[3] + u2[4];
    return 5 * Math.abs(c2 - o2) >= o2 ? NaN : t2.foundPatternCross(u2) ? t2.centerFromEnd(u2, s2) : NaN;
  }, t2.prototype.handlePossibleCenter = function(e2, r2, n2, o2) {
    var i2 = e2[0] + e2[1] + e2[2] + e2[3] + e2[4], a2 = t2.centerFromEnd(e2, n2), u2 = this.crossCheckVertical(r2, Math.floor(a2), e2[2], i2);
    if (!isNaN(u2) && (a2 = this.crossCheckHorizontal(Math.floor(a2), Math.floor(u2), e2[2], i2), !isNaN(a2) && (!o2 || this.crossCheckDiagonal(Math.floor(u2), Math.floor(a2), e2[2], i2)))) {
      for (var s2 = i2 / 7, c2 = false, f2 = this.possibleCenters, h2 = 0, l2 = f2.length; h2 < l2; h2++) {
        var d2 = f2[h2];
        if (d2.aboutEquals(s2, u2, a2)) {
          f2[h2] = d2.combineEstimate(u2, a2, s2), c2 = true;
          break;
        }
      }
      if (!c2) {
        var p2 = new tn(a2, u2, s2);
        f2.push(p2), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(p2);
      }
      return true;
    }
    return false;
  }, t2.prototype.findRowSkip = function() {
    var e2, r2;
    if (this.possibleCenters.length <= 1)
      return 0;
    var n2 = null;
    try {
      for (var o2 = rn(this.possibleCenters), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        if (a2.getCount() >= t2.CENTER_QUORUM) {
          if (null != n2)
            return this.hasSkipped = true, Math.floor((Math.abs(n2.getX() - a2.getX()) - Math.abs(n2.getY() - a2.getY())) / 2);
          n2 = a2;
        }
      }
    } catch (t3) {
      e2 = { error: t3 };
    } finally {
      try {
        i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return 0;
  }, t2.prototype.haveMultiplyConfirmedCenters = function() {
    var e2, r2, n2, o2, i2 = 0, a2 = 0, u2 = this.possibleCenters.length;
    try {
      for (var s2 = rn(this.possibleCenters), c2 = s2.next(); !c2.done; c2 = s2.next()) {
        (p2 = c2.value).getCount() >= t2.CENTER_QUORUM && (i2++, a2 += p2.getEstimatedModuleSize());
      }
    } catch (t3) {
      e2 = { error: t3 };
    } finally {
      try {
        c2 && !c2.done && (r2 = s2.return) && r2.call(s2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    if (i2 < 3)
      return false;
    var f2 = a2 / u2, h2 = 0;
    try {
      for (var l2 = rn(this.possibleCenters), d2 = l2.next(); !d2.done; d2 = l2.next()) {
        var p2 = d2.value;
        h2 += Math.abs(p2.getEstimatedModuleSize() - f2);
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        d2 && !d2.done && (o2 = l2.return) && o2.call(l2);
      } finally {
        if (n2)
          throw n2.error;
      }
    }
    return h2 <= 0.05 * a2;
  }, t2.prototype.selectBestPatterns = function() {
    var t3, e2, r2, n2, o2 = this.possibleCenters.length;
    if (o2 < 3)
      throw new U();
    var i2, a2 = this.possibleCenters;
    if (o2 > 3) {
      var u2 = 0, s2 = 0;
      try {
        for (var c2 = rn(this.possibleCenters), f2 = c2.next(); !f2.done; f2 = c2.next()) {
          var h2 = f2.value.getEstimatedModuleSize();
          u2 += h2, s2 += h2 * h2;
        }
      } catch (e3) {
        t3 = { error: e3 };
      } finally {
        try {
          f2 && !f2.done && (e2 = c2.return) && e2.call(c2);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      i2 = u2 / o2;
      var l2 = Math.sqrt(s2 / o2 - i2 * i2);
      a2.sort(function(t4, e3) {
        var r3 = Math.abs(e3.getEstimatedModuleSize() - i2), n3 = Math.abs(t4.getEstimatedModuleSize() - i2);
        return r3 < n3 ? -1 : r3 > n3 ? 1 : 0;
      });
      for (var d2 = Math.max(0.2 * i2, l2), p2 = 0; p2 < a2.length && a2.length > 3; p2++) {
        var g2 = a2[p2];
        Math.abs(g2.getEstimatedModuleSize() - i2) > d2 && (a2.splice(p2, 1), p2--);
      }
    }
    if (a2.length > 3) {
      u2 = 0;
      try {
        for (var y2 = rn(a2), w2 = y2.next(); !w2.done; w2 = y2.next()) {
          u2 += w2.value.getEstimatedModuleSize();
        }
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          w2 && !w2.done && (n2 = y2.return) && n2.call(y2);
        } finally {
          if (r2)
            throw r2.error;
        }
      }
      i2 = u2 / a2.length, a2.sort(function(t4, e3) {
        if (e3.getCount() === t4.getCount()) {
          var r3 = Math.abs(e3.getEstimatedModuleSize() - i2), n3 = Math.abs(t4.getEstimatedModuleSize() - i2);
          return r3 < n3 ? 1 : r3 > n3 ? -1 : 0;
        }
        return e3.getCount() - t4.getCount();
      }), a2.splice(3);
    }
    return [a2[0], a2[1], a2[2]];
  }, t2.CENTER_QUORUM = 2, t2.MIN_SKIP = 3, t2.MAX_MODULES = 57, t2;
}();
var on = function() {
  function t2(t3) {
    this.image = t3;
  }
  return t2.prototype.getImage = function() {
    return this.image;
  }, t2.prototype.getResultPointCallback = function() {
    return this.resultPointCallback;
  }, t2.prototype.detect = function(t3) {
    this.resultPointCallback = null == t3 ? null : t3.get(T.NEED_RESULT_POINT_CALLBACK);
    var e2 = new nn(this.image, this.resultPointCallback).find(t3);
    return this.processFinderPatternInfo(e2);
  }, t2.prototype.processFinderPatternInfo = function(e2) {
    var r2 = e2.getTopLeft(), n2 = e2.getTopRight(), o2 = e2.getBottomLeft(), i2 = this.calculateModuleSize(r2, n2, o2);
    if (i2 < 1)
      throw new U("No pattern found in proccess finder.");
    var a2 = t2.computeDimension(r2, n2, o2, i2), u2 = Fr.getProvisionalVersionForDimension(a2), s2 = u2.getDimensionForVersion() - 7, c2 = null;
    if (u2.getAlignmentPatternCenters().length > 0)
      for (var f2 = n2.getX() - r2.getX() + o2.getX(), h2 = n2.getY() - r2.getY() + o2.getY(), l2 = 1 - 3 / s2, d2 = Math.floor(r2.getX() + l2 * (f2 - r2.getX())), p2 = Math.floor(r2.getY() + l2 * (h2 - r2.getY())), g2 = 4; g2 <= 16; g2 <<= 1)
        try {
          c2 = this.findAlignmentInRegion(i2, d2, p2, g2);
          break;
        } catch (t3) {
          if (!(t3 instanceof U))
            throw t3;
        }
    var y2 = t2.createTransform(r2, n2, o2, c2, a2), w2 = t2.sampleGrid(this.image, y2, a2);
    return new Et(w2, null === c2 ? [o2, r2, n2] : [o2, r2, n2, c2]);
  }, t2.createTransform = function(t3, e2, r2, n2, o2) {
    var i2, a2, u2, s2, c2 = o2 - 3.5;
    return null !== n2 ? (i2 = n2.getX(), a2 = n2.getY(), s2 = u2 = c2 - 3) : (i2 = e2.getX() - t3.getX() + r2.getX(), a2 = e2.getY() - t3.getY() + r2.getY(), u2 = c2, s2 = c2), Tt.quadrilateralToQuadrilateral(3.5, 3.5, c2, 3.5, u2, s2, 3.5, c2, t3.getX(), t3.getY(), e2.getX(), e2.getY(), i2, a2, r2.getX(), r2.getY());
  }, t2.sampleGrid = function(t3, e2, r2) {
    return Nt.getInstance().sampleGridWithTransform(t3, r2, r2, e2);
  }, t2.computeDimension = function(t3, e2, r2, n2) {
    var o2 = vt.round(At.distance(t3, e2) / n2), i2 = vt.round(At.distance(t3, r2) / n2), a2 = Math.floor((o2 + i2) / 2) + 7;
    switch (3 & a2) {
      case 0:
        a2++;
        break;
      case 2:
        a2--;
        break;
      case 3:
        throw new U("Dimensions could be not found.");
    }
    return a2;
  }, t2.prototype.calculateModuleSize = function(t3, e2, r2) {
    return (this.calculateModuleSizeOneWay(t3, e2) + this.calculateModuleSizeOneWay(t3, r2)) / 2;
  }, t2.prototype.calculateModuleSizeOneWay = function(t3, e2) {
    var r2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t3.getX()), Math.floor(t3.getY()), Math.floor(e2.getX()), Math.floor(e2.getY())), n2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e2.getX()), Math.floor(e2.getY()), Math.floor(t3.getX()), Math.floor(t3.getY()));
    return isNaN(r2) ? n2 / 7 : isNaN(n2) ? r2 / 7 : (r2 + n2) / 14;
  }, t2.prototype.sizeOfBlackWhiteBlackRunBothWays = function(t3, e2, r2, n2) {
    var o2 = this.sizeOfBlackWhiteBlackRun(t3, e2, r2, n2), i2 = 1, a2 = t3 - (r2 - t3);
    a2 < 0 ? (i2 = t3 / (t3 - a2), a2 = 0) : a2 >= this.image.getWidth() && (i2 = (this.image.getWidth() - 1 - t3) / (a2 - t3), a2 = this.image.getWidth() - 1);
    var u2 = Math.floor(e2 - (n2 - e2) * i2);
    return i2 = 1, u2 < 0 ? (i2 = e2 / (e2 - u2), u2 = 0) : u2 >= this.image.getHeight() && (i2 = (this.image.getHeight() - 1 - e2) / (u2 - e2), u2 = this.image.getHeight() - 1), a2 = Math.floor(t3 + (a2 - t3) * i2), (o2 += this.sizeOfBlackWhiteBlackRun(t3, e2, a2, u2)) - 1;
  }, t2.prototype.sizeOfBlackWhiteBlackRun = function(t3, e2, r2, n2) {
    var o2 = Math.abs(n2 - e2) > Math.abs(r2 - t3);
    if (o2) {
      var i2 = t3;
      t3 = e2, e2 = i2, i2 = r2, r2 = n2, n2 = i2;
    }
    for (var a2 = Math.abs(r2 - t3), u2 = Math.abs(n2 - e2), s2 = -a2 / 2, c2 = t3 < r2 ? 1 : -1, f2 = e2 < n2 ? 1 : -1, h2 = 0, l2 = r2 + c2, d2 = t3, p2 = e2; d2 !== l2; d2 += c2) {
      var g2 = o2 ? p2 : d2, y2 = o2 ? d2 : p2;
      if (1 === h2 === this.image.get(g2, y2)) {
        if (2 === h2)
          return vt.distance(d2, p2, t3, e2);
        h2++;
      }
      if ((s2 += u2) > 0) {
        if (p2 === n2)
          break;
        p2 += f2, s2 -= a2;
      }
    }
    return 2 === h2 ? vt.distance(r2 + c2, n2, t3, e2) : NaN;
  }, t2.prototype.findAlignmentInRegion = function(t3, e2, r2, n2) {
    var o2 = Math.floor(n2 * t3), i2 = Math.max(0, e2 - o2), a2 = Math.min(this.image.getWidth() - 1, e2 + o2);
    if (a2 - i2 < 3 * t3)
      throw new U("Alignment top exceeds estimated module size.");
    var u2 = Math.max(0, r2 - o2), s2 = Math.min(this.image.getHeight() - 1, r2 + o2);
    if (s2 - u2 < 3 * t3)
      throw new U("Alignment bottom exceeds estimated module size.");
    return new Jr(this.image, i2, u2, a2 - i2, s2 - u2, t3, this.resultPointCallback).find();
  }, t2;
}();
var an = function() {
  function t2() {
    this.decoder = new Zr();
  }
  return t2.prototype.getDecoder = function() {
    return this.decoder;
  }, t2.prototype.decode = function(e2, r2) {
    var n2, o2;
    if (null != r2 && void 0 !== r2.get(T.PURE_BARCODE)) {
      var i2 = t2.extractPureBits(e2.getBlackMatrix());
      n2 = this.decoder.decodeBitMatrix(i2, r2), o2 = t2.NO_POINTS;
    } else {
      var a2 = new on(e2.getBlackMatrix()).detect(r2);
      n2 = this.decoder.decodeBitMatrix(a2.getBits(), r2), o2 = a2.getPoints();
    }
    n2.getOther() instanceof zr && n2.getOther().applyMirroredCorrection(o2);
    var u2 = new et(n2.getText(), n2.getRawBytes(), void 0, o2, nt.QR_CODE, void 0), s2 = n2.getByteSegments();
    null !== s2 && u2.putMetadata(it.BYTE_SEGMENTS, s2);
    var c2 = n2.getECLevel();
    return null !== c2 && u2.putMetadata(it.ERROR_CORRECTION_LEVEL, c2), n2.hasStructuredAppend() && (u2.putMetadata(it.STRUCTURED_APPEND_SEQUENCE, n2.getStructuredAppendSequenceNumber()), u2.putMetadata(it.STRUCTURED_APPEND_PARITY, n2.getStructuredAppendParity())), u2;
  }, t2.prototype.reset = function() {
  }, t2.extractPureBits = function(t3) {
    var e2 = t3.getTopLeftOnBit(), r2 = t3.getBottomRightOnBit();
    if (null === e2 || null === r2)
      throw new U();
    var n2 = this.moduleSize(e2, t3), o2 = e2[1], i2 = r2[1], a2 = e2[0], u2 = r2[0];
    if (a2 >= u2 || o2 >= i2)
      throw new U();
    if (i2 - o2 != u2 - a2 && (u2 = a2 + (i2 - o2)) >= t3.getWidth())
      throw new U();
    var s2 = Math.round((u2 - a2 + 1) / n2), c2 = Math.round((i2 - o2 + 1) / n2);
    if (s2 <= 0 || c2 <= 0)
      throw new U();
    if (c2 !== s2)
      throw new U();
    var f2 = Math.floor(n2 / 2);
    o2 += f2;
    var h2 = (a2 += f2) + Math.floor((s2 - 1) * n2) - u2;
    if (h2 > 0) {
      if (h2 > f2)
        throw new U();
      a2 -= h2;
    }
    var l2 = o2 + Math.floor((c2 - 1) * n2) - i2;
    if (l2 > 0) {
      if (l2 > f2)
        throw new U();
      o2 -= l2;
    }
    for (var d2 = new x(s2, c2), p2 = 0; p2 < c2; p2++)
      for (var g2 = o2 + Math.floor(p2 * n2), y2 = 0; y2 < s2; y2++)
        t3.get(a2 + Math.floor(y2 * n2), g2) && d2.set(y2, p2);
    return d2;
  }, t2.moduleSize = function(t3, e2) {
    for (var r2 = e2.getHeight(), n2 = e2.getWidth(), o2 = t3[0], i2 = t3[1], a2 = true, u2 = 0; o2 < n2 && i2 < r2; ) {
      if (a2 !== e2.get(o2, i2)) {
        if (5 == ++u2)
          break;
        a2 = !a2;
      }
      o2++, i2++;
    }
    if (o2 === n2 || i2 === r2)
      throw new U();
    return (o2 - t3[0]) / 7;
  }, t2.NO_POINTS = new Array(), t2;
}();
var un = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var sn = function() {
  function t2() {
  }
  return t2.prototype.PDF417Common = function() {
  }, t2.getBitCountSum = function(t3) {
    return vt.sum(t3);
  }, t2.toIntArray = function(e2) {
    var r2, n2;
    if (null == e2 || !e2.length)
      return t2.EMPTY_INT_ARRAY;
    var o2 = new Int32Array(e2.length), i2 = 0;
    try {
      for (var a2 = un(e2), u2 = a2.next(); !u2.done; u2 = a2.next()) {
        var s2 = u2.value;
        o2[i2++] = s2;
      }
    } catch (t3) {
      r2 = { error: t3 };
    } finally {
      try {
        u2 && !u2.done && (n2 = a2.return) && n2.call(a2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
    return o2;
  }, t2.getCodeword = function(e2) {
    var r2 = C.binarySearch(t2.SYMBOL_TABLE, 262143 & e2);
    return r2 < 0 ? -1 : (t2.CODEWORD_TABLE[r2] - 1) % t2.NUMBER_OF_CODEWORDS;
  }, t2.NUMBER_OF_CODEWORDS = 929, t2.MAX_CODEWORDS_IN_BARCODE = t2.NUMBER_OF_CODEWORDS - 1, t2.MIN_ROWS_IN_BARCODE = 3, t2.MAX_ROWS_IN_BARCODE = 90, t2.MODULES_IN_CODEWORD = 17, t2.MODULES_IN_STOP_PATTERN = 18, t2.BARS_IN_MODULE = 8, t2.EMPTY_INT_ARRAY = new Int32Array([]), t2.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]), t2.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]), t2;
}();
var cn = function() {
  function t2(t3, e2) {
    this.bits = t3, this.points = e2;
  }
  return t2.prototype.getBits = function() {
    return this.bits;
  }, t2.prototype.getPoints = function() {
    return this.points;
  }, t2;
}();
var fn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var hn = function() {
  function t2() {
  }
  return t2.detectMultiple = function(e2, r2, n2) {
    var o2 = e2.getBlackMatrix(), i2 = t2.detect(n2, o2);
    return i2.length || ((o2 = o2.clone()).rotate180(), i2 = t2.detect(n2, o2)), new cn(o2, i2);
  }, t2.detect = function(e2, r2) {
    for (var n2, o2, i2 = new Array(), a2 = 0, u2 = 0, s2 = false; a2 < r2.getHeight(); ) {
      var c2 = t2.findVertices(r2, a2, u2);
      if (null != c2[0] || null != c2[3]) {
        if (s2 = true, i2.push(c2), !e2)
          break;
        null != c2[2] ? (u2 = Math.trunc(c2[2].getX()), a2 = Math.trunc(c2[2].getY())) : (u2 = Math.trunc(c2[4].getX()), a2 = Math.trunc(c2[4].getY()));
      } else {
        if (!s2)
          break;
        s2 = false, u2 = 0;
        try {
          for (var f2 = (n2 = void 0, fn(i2)), h2 = f2.next(); !h2.done; h2 = f2.next()) {
            var l2 = h2.value;
            null != l2[1] && (a2 = Math.trunc(Math.max(a2, l2[1].getY()))), null != l2[3] && (a2 = Math.max(a2, Math.trunc(l2[3].getY())));
          }
        } catch (t3) {
          n2 = { error: t3 };
        } finally {
          try {
            h2 && !h2.done && (o2 = f2.return) && o2.call(f2);
          } finally {
            if (n2)
              throw n2.error;
          }
        }
        a2 += t2.ROW_STEP;
      }
    }
    return i2;
  }, t2.findVertices = function(e2, r2, n2) {
    var o2 = e2.getHeight(), i2 = e2.getWidth(), a2 = new Array(8);
    return t2.copyToResult(a2, t2.findRowsWithPattern(e2, o2, i2, r2, n2, t2.START_PATTERN), t2.INDEXES_START_PATTERN), null != a2[4] && (n2 = Math.trunc(a2[4].getX()), r2 = Math.trunc(a2[4].getY())), t2.copyToResult(a2, t2.findRowsWithPattern(e2, o2, i2, r2, n2, t2.STOP_PATTERN), t2.INDEXES_STOP_PATTERN), a2;
  }, t2.copyToResult = function(t3, e2, r2) {
    for (var n2 = 0; n2 < r2.length; n2++)
      t3[r2[n2]] = e2[n2];
  }, t2.findRowsWithPattern = function(e2, r2, n2, o2, i2, a2) {
    for (var u2 = new Array(4), s2 = false, c2 = new Int32Array(a2.length); o2 < r2; o2 += t2.ROW_STEP) {
      if (null != (d2 = t2.findGuardPattern(e2, i2, o2, n2, false, a2, c2))) {
        for (; o2 > 0; ) {
          if (null == (l2 = t2.findGuardPattern(e2, i2, --o2, n2, false, a2, c2))) {
            o2++;
            break;
          }
          d2 = l2;
        }
        u2[0] = new At(d2[0], o2), u2[1] = new At(d2[1], o2), s2 = true;
        break;
      }
    }
    var f2 = o2 + 1;
    if (s2) {
      for (var h2 = 0, l2 = Int32Array.from([Math.trunc(u2[0].getX()), Math.trunc(u2[1].getX())]); f2 < r2; f2++) {
        var d2;
        if (null != (d2 = t2.findGuardPattern(e2, l2[0], f2, n2, false, a2, c2)) && Math.abs(l2[0] - d2[0]) < t2.MAX_PATTERN_DRIFT && Math.abs(l2[1] - d2[1]) < t2.MAX_PATTERN_DRIFT)
          l2 = d2, h2 = 0;
        else {
          if (h2 > t2.SKIPPED_ROW_COUNT_MAX)
            break;
          h2++;
        }
      }
      f2 -= h2 + 1, u2[2] = new At(l2[0], f2), u2[3] = new At(l2[1], f2);
    }
    return f2 - o2 < t2.BARCODE_MIN_HEIGHT && C.fill(u2, null), u2;
  }, t2.findGuardPattern = function(e2, r2, n2, o2, i2, a2, u2) {
    C.fillWithin(u2, 0, u2.length, 0);
    for (var s2 = r2, c2 = 0; e2.get(s2, n2) && s2 > 0 && c2++ < t2.MAX_PIXEL_DRIFT; )
      s2--;
    for (var f2 = s2, h2 = 0, l2 = a2.length, d2 = i2; f2 < o2; f2++) {
      if (e2.get(f2, n2) !== d2)
        u2[h2]++;
      else {
        if (h2 === l2 - 1) {
          if (t2.patternMatchVariance(u2, a2, t2.MAX_INDIVIDUAL_VARIANCE) < t2.MAX_AVG_VARIANCE)
            return new Int32Array([s2, f2]);
          s2 += u2[0] + u2[1], w.arraycopy(u2, 2, u2, 0, h2 - 1), u2[h2 - 1] = 0, u2[h2] = 0, h2--;
        } else
          h2++;
        u2[h2] = 1, d2 = !d2;
      }
    }
    return h2 === l2 - 1 && t2.patternMatchVariance(u2, a2, t2.MAX_INDIVIDUAL_VARIANCE) < t2.MAX_AVG_VARIANCE ? new Int32Array([s2, f2 - 1]) : null;
  }, t2.patternMatchVariance = function(t3, e2, r2) {
    for (var n2 = t3.length, o2 = 0, i2 = 0, a2 = 0; a2 < n2; a2++)
      o2 += t3[a2], i2 += e2[a2];
    if (o2 < i2)
      return 1 / 0;
    var u2 = o2 / i2;
    r2 *= u2;
    for (var s2 = 0, c2 = 0; c2 < n2; c2++) {
      var f2 = t3[c2], h2 = e2[c2] * u2, l2 = f2 > h2 ? f2 - h2 : h2 - f2;
      if (l2 > r2)
        return 1 / 0;
      s2 += l2;
    }
    return s2 / o2;
  }, t2.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), t2.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), t2.MAX_AVG_VARIANCE = 0.42, t2.MAX_INDIVIDUAL_VARIANCE = 0.8, t2.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), t2.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), t2.MAX_PIXEL_DRIFT = 3, t2.MAX_PATTERN_DRIFT = 5, t2.SKIPPED_ROW_COUNT_MAX = 25, t2.ROW_STEP = 5, t2.BARCODE_MIN_HEIGHT = 10, t2;
}();
var ln = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var dn = function() {
  function t2(t3, e2) {
    if (0 === e2.length)
      throw new l();
    this.field = t3;
    var r2 = e2.length;
    if (r2 > 1 && 0 === e2[0]) {
      for (var n2 = 1; n2 < r2 && 0 === e2[n2]; )
        n2++;
      n2 === r2 ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r2 - n2), w.arraycopy(e2, n2, this.coefficients, 0, this.coefficients.length));
    } else
      this.coefficients = e2;
  }
  return t2.prototype.getCoefficients = function() {
    return this.coefficients;
  }, t2.prototype.getDegree = function() {
    return this.coefficients.length - 1;
  }, t2.prototype.isZero = function() {
    return 0 === this.coefficients[0];
  }, t2.prototype.getCoefficient = function(t3) {
    return this.coefficients[this.coefficients.length - 1 - t3];
  }, t2.prototype.evaluateAt = function(t3) {
    var e2, r2;
    if (0 === t3)
      return this.getCoefficient(0);
    if (1 === t3) {
      var n2 = 0;
      try {
        for (var o2 = ln(this.coefficients), i2 = o2.next(); !i2.done; i2 = o2.next()) {
          var a2 = i2.value;
          n2 = this.field.add(n2, a2);
        }
      } catch (t4) {
        e2 = { error: t4 };
      } finally {
        try {
          i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
        } finally {
          if (e2)
            throw e2.error;
        }
      }
      return n2;
    }
    for (var u2 = this.coefficients[0], s2 = this.coefficients.length, c2 = 1; c2 < s2; c2++)
      u2 = this.field.add(this.field.multiply(t3, u2), this.coefficients[c2]);
    return u2;
  }, t2.prototype.add = function(e2) {
    if (!this.field.equals(e2.field))
      throw new l("ModulusPolys do not have same ModulusGF field");
    if (this.isZero())
      return e2;
    if (e2.isZero())
      return this;
    var r2 = this.coefficients, n2 = e2.coefficients;
    if (r2.length > n2.length) {
      var o2 = r2;
      r2 = n2, n2 = o2;
    }
    var i2 = new Int32Array(n2.length), a2 = n2.length - r2.length;
    w.arraycopy(n2, 0, i2, 0, a2);
    for (var u2 = a2; u2 < n2.length; u2++)
      i2[u2] = this.field.add(r2[u2 - a2], n2[u2]);
    return new t2(this.field, i2);
  }, t2.prototype.subtract = function(t3) {
    if (!this.field.equals(t3.field))
      throw new l("ModulusPolys do not have same ModulusGF field");
    return t3.isZero() ? this : this.add(t3.negative());
  }, t2.prototype.multiply = function(e2) {
    return e2 instanceof t2 ? this.multiplyOther(e2) : this.multiplyScalar(e2);
  }, t2.prototype.multiplyOther = function(e2) {
    if (!this.field.equals(e2.field))
      throw new l("ModulusPolys do not have same ModulusGF field");
    if (this.isZero() || e2.isZero())
      return new t2(this.field, new Int32Array([0]));
    for (var r2 = this.coefficients, n2 = r2.length, o2 = e2.coefficients, i2 = o2.length, a2 = new Int32Array(n2 + i2 - 1), u2 = 0; u2 < n2; u2++)
      for (var s2 = r2[u2], c2 = 0; c2 < i2; c2++)
        a2[u2 + c2] = this.field.add(a2[u2 + c2], this.field.multiply(s2, o2[c2]));
    return new t2(this.field, a2);
  }, t2.prototype.negative = function() {
    for (var e2 = this.coefficients.length, r2 = new Int32Array(e2), n2 = 0; n2 < e2; n2++)
      r2[n2] = this.field.subtract(0, this.coefficients[n2]);
    return new t2(this.field, r2);
  }, t2.prototype.multiplyScalar = function(e2) {
    if (0 === e2)
      return new t2(this.field, new Int32Array([0]));
    if (1 === e2)
      return this;
    for (var r2 = this.coefficients.length, n2 = new Int32Array(r2), o2 = 0; o2 < r2; o2++)
      n2[o2] = this.field.multiply(this.coefficients[o2], e2);
    return new t2(this.field, n2);
  }, t2.prototype.multiplyByMonomial = function(e2, r2) {
    if (e2 < 0)
      throw new l();
    if (0 === r2)
      return new t2(this.field, new Int32Array([0]));
    for (var n2 = this.coefficients.length, o2 = new Int32Array(n2 + e2), i2 = 0; i2 < n2; i2++)
      o2[i2] = this.field.multiply(this.coefficients[i2], r2);
    return new t2(this.field, o2);
  }, t2.prototype.toString = function() {
    for (var t3 = new k(), e2 = this.getDegree(); e2 >= 0; e2--) {
      var r2 = this.getCoefficient(e2);
      0 !== r2 && (r2 < 0 ? (t3.append(" - "), r2 = -r2) : t3.length() > 0 && t3.append(" + "), 0 !== e2 && 1 === r2 || t3.append(r2), 0 !== e2 && (1 === e2 ? t3.append("x") : (t3.append("x^"), t3.append(e2))));
    }
    return t3.toString();
  }, t2;
}();
var pn = function() {
  function t2() {
  }
  return t2.prototype.add = function(t3, e2) {
    return (t3 + e2) % this.modulus;
  }, t2.prototype.subtract = function(t3, e2) {
    return (this.modulus + t3 - e2) % this.modulus;
  }, t2.prototype.exp = function(t3) {
    return this.expTable[t3];
  }, t2.prototype.log = function(t3) {
    if (0 === t3)
      throw new l();
    return this.logTable[t3];
  }, t2.prototype.inverse = function(t3) {
    if (0 === t3)
      throw new ft();
    return this.expTable[this.modulus - this.logTable[t3] - 1];
  }, t2.prototype.multiply = function(t3, e2) {
    return 0 === t3 || 0 === e2 ? 0 : this.expTable[(this.logTable[t3] + this.logTable[e2]) % (this.modulus - 1)];
  }, t2.prototype.getSize = function() {
    return this.modulus;
  }, t2.prototype.equals = function(t3) {
    return t3 === this;
  }, t2;
}();
var gn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var yn = function(t2) {
  function e2(e3, r2) {
    var n2 = t2.call(this) || this;
    n2.modulus = e3, n2.expTable = new Int32Array(e3), n2.logTable = new Int32Array(e3);
    for (var o2 = 1, i2 = 0; i2 < e3; i2++)
      n2.expTable[i2] = o2, o2 = o2 * r2 % e3;
    for (i2 = 0; i2 < e3 - 1; i2++)
      n2.logTable[n2.expTable[i2]] = i2;
    return n2.zero = new dn(n2, new Int32Array([0])), n2.one = new dn(n2, new Int32Array([1])), n2;
  }
  return gn(e2, t2), e2.prototype.getZero = function() {
    return this.zero;
  }, e2.prototype.getOne = function() {
    return this.one;
  }, e2.prototype.buildMonomial = function(t3, e3) {
    if (t3 < 0)
      throw new l();
    if (0 === e3)
      return this.zero;
    var r2 = new Int32Array(t3 + 1);
    return r2[0] = e3, new dn(this, r2);
  }, e2.PDF417_GF = new e2(sn.NUMBER_OF_CODEWORDS, 3), e2;
}(pn);
var wn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _n = function() {
  function t2() {
    this.field = yn.PDF417_GF;
  }
  return t2.prototype.decode = function(t3, e2, r2) {
    for (var n2, o2, i2 = new dn(this.field, t3), a2 = new Int32Array(e2), u2 = false, s2 = e2; s2 > 0; s2--) {
      var c2 = i2.evaluateAt(this.field.exp(s2));
      a2[e2 - s2] = c2, 0 !== c2 && (u2 = true);
    }
    if (!u2)
      return 0;
    var f2 = this.field.getOne();
    if (null != r2)
      try {
        for (var h2 = wn(r2), l2 = h2.next(); !l2.done; l2 = h2.next()) {
          var d2 = l2.value, p2 = this.field.exp(t3.length - 1 - d2), y2 = new dn(this.field, new Int32Array([this.field.subtract(0, p2), 1]));
          f2 = f2.multiply(y2);
        }
      } catch (t4) {
        n2 = { error: t4 };
      } finally {
        try {
          l2 && !l2.done && (o2 = h2.return) && o2.call(h2);
        } finally {
          if (n2)
            throw n2.error;
        }
      }
    var w2 = new dn(this.field, a2), _2 = this.runEuclideanAlgorithm(this.field.buildMonomial(e2, 1), w2, e2), v2 = _2[0], m2 = _2[1], A2 = this.findErrorLocations(v2), E2 = this.findErrorMagnitudes(m2, v2, A2);
    for (s2 = 0; s2 < A2.length; s2++) {
      var C2 = t3.length - 1 - this.field.log(A2[s2]);
      if (C2 < 0)
        throw g.getChecksumInstance();
      t3[C2] = this.field.subtract(t3[C2], E2[s2]);
    }
    return A2.length;
  }, t2.prototype.runEuclideanAlgorithm = function(t3, e2, r2) {
    if (t3.getDegree() < e2.getDegree()) {
      var n2 = t3;
      t3 = e2, e2 = n2;
    }
    for (var o2 = t3, i2 = e2, a2 = this.field.getZero(), u2 = this.field.getOne(); i2.getDegree() >= Math.round(r2 / 2); ) {
      var s2 = o2, c2 = a2;
      if (a2 = u2, (o2 = i2).isZero())
        throw g.getChecksumInstance();
      i2 = s2;
      for (var f2 = this.field.getZero(), h2 = o2.getCoefficient(o2.getDegree()), l2 = this.field.inverse(h2); i2.getDegree() >= o2.getDegree() && !i2.isZero(); ) {
        var d2 = i2.getDegree() - o2.getDegree(), p2 = this.field.multiply(i2.getCoefficient(i2.getDegree()), l2);
        f2 = f2.add(this.field.buildMonomial(d2, p2)), i2 = i2.subtract(o2.multiplyByMonomial(d2, p2));
      }
      u2 = f2.multiply(a2).subtract(c2).negative();
    }
    var y2 = u2.getCoefficient(0);
    if (0 === y2)
      throw g.getChecksumInstance();
    var w2 = this.field.inverse(y2);
    return [u2.multiply(w2), i2.multiply(w2)];
  }, t2.prototype.findErrorLocations = function(t3) {
    for (var e2 = t3.getDegree(), r2 = new Int32Array(e2), n2 = 0, o2 = 1; o2 < this.field.getSize() && n2 < e2; o2++)
      0 === t3.evaluateAt(o2) && (r2[n2] = this.field.inverse(o2), n2++);
    if (n2 !== e2)
      throw g.getChecksumInstance();
    return r2;
  }, t2.prototype.findErrorMagnitudes = function(t3, e2, r2) {
    for (var n2 = e2.getDegree(), o2 = new Int32Array(n2), i2 = 1; i2 <= n2; i2++)
      o2[n2 - i2] = this.field.multiply(i2, e2.getCoefficient(i2));
    var a2 = new dn(this.field, o2), u2 = r2.length, s2 = new Int32Array(u2);
    for (i2 = 0; i2 < u2; i2++) {
      var c2 = this.field.inverse(r2[i2]), f2 = this.field.subtract(0, t3.evaluateAt(c2)), h2 = this.field.inverse(a2.evaluateAt(c2));
      s2[i2] = this.field.multiply(f2, h2);
    }
    return s2;
  }, t2;
}();
var vn = function() {
  function t2(e2, r2, n2, o2, i2) {
    e2 instanceof t2 ? this.constructor_2(e2) : this.constructor_1(e2, r2, n2, o2, i2);
  }
  return t2.prototype.constructor_1 = function(t3, e2, r2, n2, o2) {
    var i2 = null == e2 || null == r2, a2 = null == n2 || null == o2;
    if (i2 && a2)
      throw new U();
    i2 ? (e2 = new At(0, n2.getY()), r2 = new At(0, o2.getY())) : a2 && (n2 = new At(t3.getWidth() - 1, e2.getY()), o2 = new At(t3.getWidth() - 1, r2.getY())), this.image = t3, this.topLeft = e2, this.bottomLeft = r2, this.topRight = n2, this.bottomRight = o2, this.minX = Math.trunc(Math.min(e2.getX(), r2.getX())), this.maxX = Math.trunc(Math.max(n2.getX(), o2.getX())), this.minY = Math.trunc(Math.min(e2.getY(), n2.getY())), this.maxY = Math.trunc(Math.max(r2.getY(), o2.getY()));
  }, t2.prototype.constructor_2 = function(t3) {
    this.image = t3.image, this.topLeft = t3.getTopLeft(), this.bottomLeft = t3.getBottomLeft(), this.topRight = t3.getTopRight(), this.bottomRight = t3.getBottomRight(), this.minX = t3.getMinX(), this.maxX = t3.getMaxX(), this.minY = t3.getMinY(), this.maxY = t3.getMaxY();
  }, t2.merge = function(e2, r2) {
    return null == e2 ? r2 : null == r2 ? e2 : new t2(e2.image, e2.topLeft, e2.bottomLeft, r2.topRight, r2.bottomRight);
  }, t2.prototype.addMissingRows = function(e2, r2, n2) {
    var o2 = this.topLeft, i2 = this.bottomLeft, a2 = this.topRight, u2 = this.bottomRight;
    if (e2 > 0) {
      var s2 = n2 ? this.topLeft : this.topRight, c2 = Math.trunc(s2.getY() - e2);
      c2 < 0 && (c2 = 0);
      var f2 = new At(s2.getX(), c2);
      n2 ? o2 = f2 : a2 = f2;
    }
    if (r2 > 0) {
      var h2 = n2 ? this.bottomLeft : this.bottomRight, l2 = Math.trunc(h2.getY() + r2);
      l2 >= this.image.getHeight() && (l2 = this.image.getHeight() - 1);
      var d2 = new At(h2.getX(), l2);
      n2 ? i2 = d2 : u2 = d2;
    }
    return new t2(this.image, o2, i2, a2, u2);
  }, t2.prototype.getMinX = function() {
    return this.minX;
  }, t2.prototype.getMaxX = function() {
    return this.maxX;
  }, t2.prototype.getMinY = function() {
    return this.minY;
  }, t2.prototype.getMaxY = function() {
    return this.maxY;
  }, t2.prototype.getTopLeft = function() {
    return this.topLeft;
  }, t2.prototype.getTopRight = function() {
    return this.topRight;
  }, t2.prototype.getBottomLeft = function() {
    return this.bottomLeft;
  }, t2.prototype.getBottomRight = function() {
    return this.bottomRight;
  }, t2;
}();
var mn = function() {
  function t2(t3, e2, r2, n2) {
    this.columnCount = t3, this.errorCorrectionLevel = n2, this.rowCountUpperPart = e2, this.rowCountLowerPart = r2, this.rowCount = e2 + r2;
  }
  return t2.prototype.getColumnCount = function() {
    return this.columnCount;
  }, t2.prototype.getErrorCorrectionLevel = function() {
    return this.errorCorrectionLevel;
  }, t2.prototype.getRowCount = function() {
    return this.rowCount;
  }, t2.prototype.getRowCountUpperPart = function() {
    return this.rowCountUpperPart;
  }, t2.prototype.getRowCountLowerPart = function() {
    return this.rowCountLowerPart;
  }, t2;
}();
var An = function() {
  function t2() {
    this.buffer = "";
  }
  return t2.form = function(t3, e2) {
    var r2 = -1;
    return t3.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function(t4, n2, o2, i2, a2, u2) {
      if ("%%" === t4)
        return "%";
      if (void 0 !== e2[++r2]) {
        t4 = i2 ? parseInt(i2.substr(1)) : void 0;
        var s2, c2 = a2 ? parseInt(a2.substr(1)) : void 0;
        switch (u2) {
          case "s":
            s2 = e2[r2];
            break;
          case "c":
            s2 = e2[r2][0];
            break;
          case "f":
            s2 = parseFloat(e2[r2]).toFixed(t4);
            break;
          case "p":
            s2 = parseFloat(e2[r2]).toPrecision(t4);
            break;
          case "e":
            s2 = parseFloat(e2[r2]).toExponential(t4);
            break;
          case "x":
            s2 = parseInt(e2[r2]).toString(c2 || 16);
            break;
          case "d":
            s2 = parseFloat(parseInt(e2[r2], c2 || 10).toPrecision(t4)).toFixed(0);
        }
        s2 = "object" == typeof s2 ? JSON.stringify(s2) : (+s2).toString(c2);
        for (var f2 = parseInt(o2), h2 = o2 && o2[0] + "" == "0" ? "0" : " "; s2.length < f2; )
          s2 = void 0 !== n2 ? s2 + h2 : h2 + s2;
        return s2;
      }
    });
  }, t2.prototype.format = function(e2) {
    for (var r2 = [], n2 = 1; n2 < arguments.length; n2++)
      r2[n2 - 1] = arguments[n2];
    this.buffer += t2.form(e2, r2);
  }, t2.prototype.toString = function() {
    return this.buffer;
  }, t2;
}();
var En = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Cn = function() {
  function t2(t3) {
    this.boundingBox = new vn(t3), this.codewords = new Array(t3.getMaxY() - t3.getMinY() + 1);
  }
  return t2.prototype.getCodewordNearby = function(e2) {
    var r2 = this.getCodeword(e2);
    if (null != r2)
      return r2;
    for (var n2 = 1; n2 < t2.MAX_NEARBY_DISTANCE; n2++) {
      var o2 = this.imageRowToCodewordIndex(e2) - n2;
      if (o2 >= 0 && null != (r2 = this.codewords[o2]))
        return r2;
      if ((o2 = this.imageRowToCodewordIndex(e2) + n2) < this.codewords.length && null != (r2 = this.codewords[o2]))
        return r2;
    }
    return null;
  }, t2.prototype.imageRowToCodewordIndex = function(t3) {
    return t3 - this.boundingBox.getMinY();
  }, t2.prototype.setCodeword = function(t3, e2) {
    this.codewords[this.imageRowToCodewordIndex(t3)] = e2;
  }, t2.prototype.getCodeword = function(t3) {
    return this.codewords[this.imageRowToCodewordIndex(t3)];
  }, t2.prototype.getBoundingBox = function() {
    return this.boundingBox;
  }, t2.prototype.getCodewords = function() {
    return this.codewords;
  }, t2.prototype.toString = function() {
    var t3, e2, r2 = new An(), n2 = 0;
    try {
      for (var o2 = En(this.codewords), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        null != a2 ? r2.format("%3d: %3d|%3d%n", n2++, a2.getRowNumber(), a2.getValue()) : r2.format("%3d:    |   %n", n2++);
      }
    } catch (e3) {
      t3 = { error: e3 };
    } finally {
      try {
        i2 && !i2.done && (e2 = o2.return) && e2.call(o2);
      } finally {
        if (t3)
          throw t3.error;
      }
    }
    return r2.toString();
  }, t2.MAX_NEARBY_DISTANCE = 5, t2;
}();
var In = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Sn = function(t2, e2) {
  var r2 = "function" == typeof Symbol && t2[Symbol.iterator];
  if (!r2)
    return t2;
  var n2, o2, i2 = r2.call(t2), a2 = [];
  try {
    for (; (void 0 === e2 || e2-- > 0) && !(n2 = i2.next()).done; )
      a2.push(n2.value);
  } catch (t3) {
    o2 = { error: t3 };
  } finally {
    try {
      n2 && !n2.done && (r2 = i2.return) && r2.call(i2);
    } finally {
      if (o2)
        throw o2.error;
    }
  }
  return a2;
};
var On = function() {
  function t2() {
    this.values = /* @__PURE__ */ new Map();
  }
  return t2.prototype.setValue = function(t3) {
    t3 = Math.trunc(t3);
    var e2 = this.values.get(t3);
    null == e2 && (e2 = 0), e2++, this.values.set(t3, e2);
  }, t2.prototype.getValue = function() {
    var t3, e2, r2 = -1, n2 = new Array(), o2 = function(t4, e3) {
      var o3 = function() {
        return t4;
      }, i3 = function() {
        return e3;
      };
      i3() > r2 ? (r2 = i3(), (n2 = []).push(o3())) : i3() === r2 && n2.push(o3());
    };
    try {
      for (var i2 = In(this.values.entries()), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        var u2 = Sn(a2.value, 2);
        o2(u2[0], u2[1]);
      }
    } catch (e3) {
      t3 = { error: e3 };
    } finally {
      try {
        a2 && !a2.done && (e2 = i2.return) && e2.call(i2);
      } finally {
        if (t3)
          throw t3.error;
      }
    }
    return sn.toIntArray(n2);
  }, t2.prototype.getConfidence = function(t3) {
    return this.values.get(t3);
  }, t2;
}();
var Tn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var bn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Rn = function(t2) {
  function e2(e3, r2) {
    var n2 = t2.call(this, e3) || this;
    return n2._isLeft = r2, n2;
  }
  return Tn(e2, t2), e2.prototype.setRowNumbers = function() {
    var t3, e3;
    try {
      for (var r2 = bn(this.getCodewords()), n2 = r2.next(); !n2.done; n2 = r2.next()) {
        var o2 = n2.value;
        null != o2 && o2.setRowNumberAsRowIndicatorColumn();
      }
    } catch (e4) {
      t3 = { error: e4 };
    } finally {
      try {
        n2 && !n2.done && (e3 = r2.return) && e3.call(r2);
      } finally {
        if (t3)
          throw t3.error;
      }
    }
  }, e2.prototype.adjustCompleteIndicatorColumnRowNumbers = function(t3) {
    var e3 = this.getCodewords();
    this.setRowNumbers(), this.removeIncorrectCodewords(e3, t3);
    for (var r2 = this.getBoundingBox(), n2 = this._isLeft ? r2.getTopLeft() : r2.getTopRight(), o2 = this._isLeft ? r2.getBottomLeft() : r2.getBottomRight(), i2 = this.imageRowToCodewordIndex(Math.trunc(n2.getY())), a2 = this.imageRowToCodewordIndex(Math.trunc(o2.getY())), u2 = -1, s2 = 1, c2 = 0, f2 = i2; f2 < a2; f2++)
      if (null != e3[f2]) {
        var h2 = e3[f2], l2 = h2.getRowNumber() - u2;
        if (0 === l2)
          c2++;
        else if (1 === l2)
          s2 = Math.max(s2, c2), c2 = 1, u2 = h2.getRowNumber();
        else if (l2 < 0 || h2.getRowNumber() >= t3.getRowCount() || l2 > f2)
          e3[f2] = null;
        else {
          for (var d2 = void 0, p2 = (d2 = s2 > 2 ? (s2 - 2) * l2 : l2) >= f2, g2 = 1; g2 <= d2 && !p2; g2++)
            p2 = null != e3[f2 - g2];
          p2 ? e3[f2] = null : (u2 = h2.getRowNumber(), c2 = 1);
        }
      }
  }, e2.prototype.getRowHeights = function() {
    var t3, e3, r2 = this.getBarcodeMetadata();
    if (null == r2)
      return null;
    this.adjustIncompleteIndicatorColumnRowNumbers(r2);
    var n2 = new Int32Array(r2.getRowCount());
    try {
      for (var o2 = bn(this.getCodewords()), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        if (null != a2) {
          var u2 = a2.getRowNumber();
          if (u2 >= n2.length)
            continue;
          n2[u2]++;
        }
      }
    } catch (e4) {
      t3 = { error: e4 };
    } finally {
      try {
        i2 && !i2.done && (e3 = o2.return) && e3.call(o2);
      } finally {
        if (t3)
          throw t3.error;
      }
    }
    return n2;
  }, e2.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(t3) {
    for (var e3 = this.getBoundingBox(), r2 = this._isLeft ? e3.getTopLeft() : e3.getTopRight(), n2 = this._isLeft ? e3.getBottomLeft() : e3.getBottomRight(), o2 = this.imageRowToCodewordIndex(Math.trunc(r2.getY())), i2 = this.imageRowToCodewordIndex(Math.trunc(n2.getY())), a2 = this.getCodewords(), u2 = -1, s2 = o2; s2 < i2; s2++)
      if (null != a2[s2]) {
        var c2 = a2[s2];
        c2.setRowNumberAsRowIndicatorColumn();
        var f2 = c2.getRowNumber() - u2;
        0 === f2 || (1 === f2 ? u2 = c2.getRowNumber() : c2.getRowNumber() >= t3.getRowCount() ? a2[s2] = null : u2 = c2.getRowNumber());
      }
  }, e2.prototype.getBarcodeMetadata = function() {
    var t3, e3, r2 = this.getCodewords(), n2 = new On(), o2 = new On(), i2 = new On(), a2 = new On();
    try {
      for (var u2 = bn(r2), s2 = u2.next(); !s2.done; s2 = u2.next()) {
        var c2 = s2.value;
        if (null != c2) {
          c2.setRowNumberAsRowIndicatorColumn();
          var f2 = c2.getValue() % 30, h2 = c2.getRowNumber();
          switch (this._isLeft || (h2 += 2), h2 % 3) {
            case 0:
              o2.setValue(3 * f2 + 1);
              break;
            case 1:
              a2.setValue(f2 / 3), i2.setValue(f2 % 3);
              break;
            case 2:
              n2.setValue(f2 + 1);
          }
        }
      }
    } catch (e4) {
      t3 = { error: e4 };
    } finally {
      try {
        s2 && !s2.done && (e3 = u2.return) && e3.call(u2);
      } finally {
        if (t3)
          throw t3.error;
      }
    }
    if (0 === n2.getValue().length || 0 === o2.getValue().length || 0 === i2.getValue().length || 0 === a2.getValue().length || n2.getValue()[0] < 1 || o2.getValue()[0] + i2.getValue()[0] < sn.MIN_ROWS_IN_BARCODE || o2.getValue()[0] + i2.getValue()[0] > sn.MAX_ROWS_IN_BARCODE)
      return null;
    var l2 = new mn(n2.getValue()[0], o2.getValue()[0], i2.getValue()[0], a2.getValue()[0]);
    return this.removeIncorrectCodewords(r2, l2), l2;
  }, e2.prototype.removeIncorrectCodewords = function(t3, e3) {
    for (var r2 = 0; r2 < t3.length; r2++) {
      var n2 = t3[r2];
      if (null != t3[r2]) {
        var o2 = n2.getValue() % 30, i2 = n2.getRowNumber();
        if (i2 > e3.getRowCount())
          t3[r2] = null;
        else
          switch (this._isLeft || (i2 += 2), i2 % 3) {
            case 0:
              3 * o2 + 1 !== e3.getRowCountUpperPart() && (t3[r2] = null);
              break;
            case 1:
              Math.trunc(o2 / 3) === e3.getErrorCorrectionLevel() && o2 % 3 === e3.getRowCountLowerPart() || (t3[r2] = null);
              break;
            case 2:
              o2 + 1 !== e3.getColumnCount() && (t3[r2] = null);
          }
      }
    }
  }, e2.prototype.isLeft = function() {
    return this._isLeft;
  }, e2.prototype.toString = function() {
    return "IsLeft: " + this._isLeft + "\n" + t2.prototype.toString.call(this);
  }, e2;
}(Cn);
var Nn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Dn = function() {
  function t2(t3, e2) {
    this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = t3, this.barcodeColumnCount = t3.getColumnCount(), this.boundingBox = e2, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
  }
  return t2.prototype.getDetectionResultColumns = function() {
    this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
    var t3, e2 = sn.MAX_CODEWORDS_IN_BARCODE;
    do {
      t3 = e2, e2 = this.adjustRowNumbersAndGetCount();
    } while (e2 > 0 && e2 < t3);
    return this.detectionResultColumns;
  }, t2.prototype.adjustIndicatorColumnRowNumbers = function(t3) {
    null != t3 && t3.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
  }, t2.prototype.adjustRowNumbersAndGetCount = function() {
    var t3 = this.adjustRowNumbersByRow();
    if (0 === t3)
      return 0;
    for (var e2 = 1; e2 < this.barcodeColumnCount + 1; e2++)
      for (var r2 = this.detectionResultColumns[e2].getCodewords(), n2 = 0; n2 < r2.length; n2++)
        null != r2[n2] && (r2[n2].hasValidRowNumber() || this.adjustRowNumbers(e2, n2, r2));
    return t3;
  }, t2.prototype.adjustRowNumbersByRow = function() {
    return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI();
  }, t2.prototype.adjustRowNumbersFromBothRI = function() {
    if (null != this.detectionResultColumns[0] && null != this.detectionResultColumns[this.barcodeColumnCount + 1]) {
      for (var t3 = this.detectionResultColumns[0].getCodewords(), e2 = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), r2 = 0; r2 < t3.length; r2++)
        if (null != t3[r2] && null != e2[r2] && t3[r2].getRowNumber() === e2[r2].getRowNumber())
          for (var n2 = 1; n2 <= this.barcodeColumnCount; n2++) {
            var o2 = this.detectionResultColumns[n2].getCodewords()[r2];
            null != o2 && (o2.setRowNumber(t3[r2].getRowNumber()), o2.hasValidRowNumber() || (this.detectionResultColumns[n2].getCodewords()[r2] = null));
          }
    }
  }, t2.prototype.adjustRowNumbersFromRRI = function() {
    if (null == this.detectionResultColumns[this.barcodeColumnCount + 1])
      return 0;
    for (var e2 = 0, r2 = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n2 = 0; n2 < r2.length; n2++)
      if (null != r2[n2])
        for (var o2 = r2[n2].getRowNumber(), i2 = 0, a2 = this.barcodeColumnCount + 1; a2 > 0 && i2 < this.ADJUST_ROW_NUMBER_SKIP; a2--) {
          var u2 = this.detectionResultColumns[a2].getCodewords()[n2];
          null != u2 && (i2 = t2.adjustRowNumberIfValid(o2, i2, u2), u2.hasValidRowNumber() || e2++);
        }
    return e2;
  }, t2.prototype.adjustRowNumbersFromLRI = function() {
    if (null == this.detectionResultColumns[0])
      return 0;
    for (var e2 = 0, r2 = this.detectionResultColumns[0].getCodewords(), n2 = 0; n2 < r2.length; n2++)
      if (null != r2[n2])
        for (var o2 = r2[n2].getRowNumber(), i2 = 0, a2 = 1; a2 < this.barcodeColumnCount + 1 && i2 < this.ADJUST_ROW_NUMBER_SKIP; a2++) {
          var u2 = this.detectionResultColumns[a2].getCodewords()[n2];
          null != u2 && (i2 = t2.adjustRowNumberIfValid(o2, i2, u2), u2.hasValidRowNumber() || e2++);
        }
    return e2;
  }, t2.adjustRowNumberIfValid = function(t3, e2, r2) {
    return null == r2 || r2.hasValidRowNumber() || (r2.isValidRowNumber(t3) ? (r2.setRowNumber(t3), e2 = 0) : ++e2), e2;
  }, t2.prototype.adjustRowNumbers = function(e2, r2, n2) {
    var o2, i2, a2 = n2[r2], u2 = this.detectionResultColumns[e2 - 1].getCodewords(), s2 = u2;
    null != this.detectionResultColumns[e2 + 1] && (s2 = this.detectionResultColumns[e2 + 1].getCodewords());
    var c2 = new Array(14);
    c2[2] = u2[r2], c2[3] = s2[r2], r2 > 0 && (c2[0] = n2[r2 - 1], c2[4] = u2[r2 - 1], c2[5] = s2[r2 - 1]), r2 > 1 && (c2[8] = n2[r2 - 2], c2[10] = u2[r2 - 2], c2[11] = s2[r2 - 2]), r2 < n2.length - 1 && (c2[1] = n2[r2 + 1], c2[6] = u2[r2 + 1], c2[7] = s2[r2 + 1]), r2 < n2.length - 2 && (c2[9] = n2[r2 + 2], c2[12] = u2[r2 + 2], c2[13] = s2[r2 + 2]);
    try {
      for (var f2 = Nn(c2), h2 = f2.next(); !h2.done; h2 = f2.next()) {
        var l2 = h2.value;
        if (t2.adjustRowNumber(a2, l2))
          return;
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        h2 && !h2.done && (i2 = f2.return) && i2.call(f2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
  }, t2.adjustRowNumber = function(t3, e2) {
    return null != e2 && (!(!e2.hasValidRowNumber() || e2.getBucket() !== t3.getBucket()) && (t3.setRowNumber(e2.getRowNumber()), true));
  }, t2.prototype.getBarcodeColumnCount = function() {
    return this.barcodeColumnCount;
  }, t2.prototype.getBarcodeRowCount = function() {
    return this.barcodeMetadata.getRowCount();
  }, t2.prototype.getBarcodeECLevel = function() {
    return this.barcodeMetadata.getErrorCorrectionLevel();
  }, t2.prototype.setBoundingBox = function(t3) {
    this.boundingBox = t3;
  }, t2.prototype.getBoundingBox = function() {
    return this.boundingBox;
  }, t2.prototype.setDetectionResultColumn = function(t3, e2) {
    this.detectionResultColumns[t3] = e2;
  }, t2.prototype.getDetectionResultColumn = function(t3) {
    return this.detectionResultColumns[t3];
  }, t2.prototype.toString = function() {
    var t3 = this.detectionResultColumns[0];
    null == t3 && (t3 = this.detectionResultColumns[this.barcodeColumnCount + 1]);
    for (var e2 = new An(), r2 = 0; r2 < t3.getCodewords().length; r2++) {
      e2.format("CW %3d:", r2);
      for (var n2 = 0; n2 < this.barcodeColumnCount + 2; n2++)
        if (null != this.detectionResultColumns[n2]) {
          var o2 = this.detectionResultColumns[n2].getCodewords()[r2];
          null != o2 ? e2.format(" %3d|%3d", o2.getRowNumber(), o2.getValue()) : e2.format("    |   ");
        } else
          e2.format("    |   ");
      e2.format("%n");
    }
    return e2.toString();
  }, t2;
}();
var Pn = function() {
  function t2(e2, r2, n2, o2) {
    this.rowNumber = t2.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(e2), this.endX = Math.trunc(r2), this.bucket = Math.trunc(n2), this.value = Math.trunc(o2);
  }
  return t2.prototype.hasValidRowNumber = function() {
    return this.isValidRowNumber(this.rowNumber);
  }, t2.prototype.isValidRowNumber = function(e2) {
    return e2 !== t2.BARCODE_ROW_UNKNOWN && this.bucket === e2 % 3 * 3;
  }, t2.prototype.setRowNumberAsRowIndicatorColumn = function() {
    this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3));
  }, t2.prototype.getWidth = function() {
    return this.endX - this.startX;
  }, t2.prototype.getStartX = function() {
    return this.startX;
  }, t2.prototype.getEndX = function() {
    return this.endX;
  }, t2.prototype.getBucket = function() {
    return this.bucket;
  }, t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getRowNumber = function() {
    return this.rowNumber;
  }, t2.prototype.setRowNumber = function(t3) {
    this.rowNumber = t3;
  }, t2.prototype.toString = function() {
    return this.rowNumber + "|" + this.value;
  }, t2.BARCODE_ROW_UNKNOWN = -1, t2;
}();
var Mn = function() {
  function t2() {
  }
  return t2.initialize = function() {
    for (var e2 = 0; e2 < sn.SYMBOL_TABLE.length; e2++)
      for (var r2 = sn.SYMBOL_TABLE[e2], n2 = 1 & r2, o2 = 0; o2 < sn.BARS_IN_MODULE; o2++) {
        for (var i2 = 0; (1 & r2) === n2; )
          i2 += 1, r2 >>= 1;
        n2 = 1 & r2, t2.RATIOS_TABLE[e2] || (t2.RATIOS_TABLE[e2] = new Array(sn.BARS_IN_MODULE)), t2.RATIOS_TABLE[e2][sn.BARS_IN_MODULE - o2 - 1] = Math.fround(i2 / sn.MODULES_IN_CODEWORD);
      }
    this.bSymbolTableReady = true;
  }, t2.getDecodedValue = function(e2) {
    var r2 = t2.getDecodedCodewordValue(t2.sampleBitCounts(e2));
    return -1 !== r2 ? r2 : t2.getClosestDecodedValue(e2);
  }, t2.sampleBitCounts = function(t3) {
    for (var e2 = vt.sum(t3), r2 = new Int32Array(sn.BARS_IN_MODULE), n2 = 0, o2 = 0, i2 = 0; i2 < sn.MODULES_IN_CODEWORD; i2++) {
      var a2 = e2 / (2 * sn.MODULES_IN_CODEWORD) + i2 * e2 / sn.MODULES_IN_CODEWORD;
      o2 + t3[n2] <= a2 && (o2 += t3[n2], n2++), r2[n2]++;
    }
    return r2;
  }, t2.getDecodedCodewordValue = function(e2) {
    var r2 = t2.getBitValue(e2);
    return -1 === sn.getCodeword(r2) ? -1 : r2;
  }, t2.getBitValue = function(t3) {
    for (var e2 = 0, r2 = 0; r2 < t3.length; r2++)
      for (var n2 = 0; n2 < t3[r2]; n2++)
        e2 = e2 << 1 | (r2 % 2 == 0 ? 1 : 0);
    return Math.trunc(e2);
  }, t2.getClosestDecodedValue = function(e2) {
    var r2 = vt.sum(e2), n2 = new Array(sn.BARS_IN_MODULE);
    if (r2 > 1)
      for (var o2 = 0; o2 < n2.length; o2++)
        n2[o2] = Math.fround(e2[o2] / r2);
    var i2 = mt.MAX_VALUE, a2 = -1;
    this.bSymbolTableReady || t2.initialize();
    for (var u2 = 0; u2 < t2.RATIOS_TABLE.length; u2++) {
      for (var s2 = 0, c2 = t2.RATIOS_TABLE[u2], f2 = 0; f2 < sn.BARS_IN_MODULE; f2++) {
        var h2 = Math.fround(c2[f2] - n2[f2]);
        if ((s2 += Math.fround(h2 * h2)) >= i2)
          break;
      }
      s2 < i2 && (i2 = s2, a2 = sn.SYMBOL_TABLE[u2]);
    }
    return a2;
  }, t2.bSymbolTableReady = false, t2.RATIOS_TABLE = new Array(sn.SYMBOL_TABLE.length).map(function(t3) {
    return new Array(sn.BARS_IN_MODULE);
  }), t2;
}();
var Bn = function() {
  function t2() {
    this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1;
  }
  return t2.prototype.getSegmentIndex = function() {
    return this.segmentIndex;
  }, t2.prototype.setSegmentIndex = function(t3) {
    this.segmentIndex = t3;
  }, t2.prototype.getFileId = function() {
    return this.fileId;
  }, t2.prototype.setFileId = function(t3) {
    this.fileId = t3;
  }, t2.prototype.getOptionalData = function() {
    return this.optionalData;
  }, t2.prototype.setOptionalData = function(t3) {
    this.optionalData = t3;
  }, t2.prototype.isLastSegment = function() {
    return this.lastSegment;
  }, t2.prototype.setLastSegment = function(t3) {
    this.lastSegment = t3;
  }, t2.prototype.getSegmentCount = function() {
    return this.segmentCount;
  }, t2.prototype.setSegmentCount = function(t3) {
    this.segmentCount = t3;
  }, t2.prototype.getSender = function() {
    return this.sender || null;
  }, t2.prototype.setSender = function(t3) {
    this.sender = t3;
  }, t2.prototype.getAddressee = function() {
    return this.addressee || null;
  }, t2.prototype.setAddressee = function(t3) {
    this.addressee = t3;
  }, t2.prototype.getFileName = function() {
    return this.fileName;
  }, t2.prototype.setFileName = function(t3) {
    this.fileName = t3;
  }, t2.prototype.getFileSize = function() {
    return this.fileSize;
  }, t2.prototype.setFileSize = function(t3) {
    this.fileSize = t3;
  }, t2.prototype.getChecksum = function() {
    return this.checksum;
  }, t2.prototype.setChecksum = function(t3) {
    this.checksum = t3;
  }, t2.prototype.getTimestamp = function() {
    return this.timestamp;
  }, t2.prototype.setTimestamp = function(t3) {
    this.timestamp = t3;
  }, t2;
}();
var Ln = function() {
  function t2() {
  }
  return t2.parseLong = function(t3, e2) {
    return void 0 === e2 && (e2 = void 0), parseInt(t3, e2);
  }, t2;
}();
var Fn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var kn = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Fn(e2, t2), e2.kind = "NullPointerException", e2;
}(s);
var xn = function() {
  function t2() {
  }
  return t2.prototype.writeBytes = function(t3) {
    this.writeBytesOffset(t3, 0, t3.length);
  }, t2.prototype.writeBytesOffset = function(t3, e2, r2) {
    if (null == t3)
      throw new kn();
    if (e2 < 0 || e2 > t3.length || r2 < 0 || e2 + r2 > t3.length || e2 + r2 < 0)
      throw new v();
    if (0 !== r2)
      for (var n2 = 0; n2 < r2; n2++)
        this.write(t3[e2 + n2]);
  }, t2.prototype.flush = function() {
  }, t2.prototype.close = function() {
  }, t2;
}();
var Vn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Un = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Vn(e2, t2), e2;
}(s);
var Hn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Gn = function(t2) {
  function e2(e3) {
    void 0 === e3 && (e3 = 32);
    var r2 = t2.call(this) || this;
    if (r2.count = 0, e3 < 0)
      throw new l("Negative initial size: " + e3);
    return r2.buf = new Uint8Array(e3), r2;
  }
  return Hn(e2, t2), e2.prototype.ensureCapacity = function(t3) {
    t3 - this.buf.length > 0 && this.grow(t3);
  }, e2.prototype.grow = function(t3) {
    var e3 = this.buf.length << 1;
    if (e3 - t3 < 0 && (e3 = t3), e3 < 0) {
      if (t3 < 0)
        throw new Un();
      e3 = I.MAX_VALUE;
    }
    this.buf = C.copyOfUint8Array(this.buf, e3);
  }, e2.prototype.write = function(t3) {
    this.ensureCapacity(this.count + 1), this.buf[this.count] = t3, this.count += 1;
  }, e2.prototype.writeBytesOffset = function(t3, e3, r2) {
    if (e3 < 0 || e3 > t3.length || r2 < 0 || e3 + r2 - t3.length > 0)
      throw new v();
    this.ensureCapacity(this.count + r2), w.arraycopy(t3, e3, this.buf, this.count, r2), this.count += r2;
  }, e2.prototype.writeTo = function(t3) {
    t3.writeBytesOffset(this.buf, 0, this.count);
  }, e2.prototype.reset = function() {
    this.count = 0;
  }, e2.prototype.toByteArray = function() {
    return C.copyOfUint8Array(this.buf, this.count);
  }, e2.prototype.size = function() {
    return this.count;
  }, e2.prototype.toString = function(t3) {
    return t3 ? "string" == typeof t3 ? this.toString_string(t3) : this.toString_number(t3) : this.toString_void();
  }, e2.prototype.toString_void = function() {
    return new String(this.buf).toString();
  }, e2.prototype.toString_string = function(t3) {
    return new String(this.buf).toString();
  }, e2.prototype.toString_number = function(t3) {
    return new String(this.buf).toString();
  }, e2.prototype.close = function() {
  }, e2;
}(xn);
function Xn() {
  if ("undefined" != typeof window)
    return window.BigInt || null;
  if ("undefined" != typeof global)
    return global.BigInt || null;
  if ("undefined" != typeof self)
    return self.BigInt || null;
  throw new Error("Can't search globals for BigInt!");
}
function Wn(t2) {
  if (void 0 === Xr && (Xr = Xn()), null === Xr)
    throw new Error("BigInt is not supported!");
  return Xr(t2);
}
!function(t2) {
  t2[t2.ALPHA = 0] = "ALPHA", t2[t2.LOWER = 1] = "LOWER", t2[t2.MIXED = 2] = "MIXED", t2[t2.PUNCT = 3] = "PUNCT", t2[t2.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", t2[t2.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
}(Gr || (Gr = {}));
var jn = function() {
  function t2() {
  }
  return t2.decode = function(e2, r2) {
    var n2 = new k(""), o2 = P.ISO8859_1;
    n2.enableDecoding(o2);
    for (var i2 = 1, a2 = e2[i2++], u2 = new Bn(); i2 < e2[0]; ) {
      switch (a2) {
        case t2.TEXT_COMPACTION_MODE_LATCH:
          i2 = t2.textCompaction(e2, i2, n2);
          break;
        case t2.BYTE_COMPACTION_MODE_LATCH:
        case t2.BYTE_COMPACTION_MODE_LATCH_6:
          i2 = t2.byteCompaction(a2, e2, o2, i2, n2);
          break;
        case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
          n2.append(e2[i2++]);
          break;
        case t2.NUMERIC_COMPACTION_MODE_LATCH:
          i2 = t2.numericCompaction(e2, i2, n2);
          break;
        case t2.ECI_CHARSET:
          P.getCharacterSetECIByValue(e2[i2++]);
          break;
        case t2.ECI_GENERAL_PURPOSE:
          i2 += 2;
          break;
        case t2.ECI_USER_DEFINED:
          i2++;
          break;
        case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          i2 = t2.decodeMacroBlock(e2, i2, u2);
          break;
        case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
        case t2.MACRO_PDF417_TERMINATOR:
          throw new R();
        default:
          i2--, i2 = t2.textCompaction(e2, i2, n2);
      }
      if (!(i2 < e2.length))
        throw R.getFormatInstance();
      a2 = e2[i2++];
    }
    if (0 === n2.length())
      throw R.getFormatInstance();
    var s2 = new at(null, n2.toString(), null, r2);
    return s2.setOther(u2), s2;
  }, t2.decodeMacroBlock = function(e2, r2, n2) {
    if (r2 + t2.NUMBER_OF_SEQUENCE_CODEWORDS > e2[0])
      throw R.getFormatInstance();
    for (var o2 = new Int32Array(t2.NUMBER_OF_SEQUENCE_CODEWORDS), i2 = 0; i2 < t2.NUMBER_OF_SEQUENCE_CODEWORDS; i2++, r2++)
      o2[i2] = e2[r2];
    n2.setSegmentIndex(I.parseInt(t2.decodeBase900toBase10(o2, t2.NUMBER_OF_SEQUENCE_CODEWORDS)));
    var a2 = new k();
    r2 = t2.textCompaction(e2, r2, a2), n2.setFileId(a2.toString());
    var u2 = -1;
    for (e2[r2] === t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (u2 = r2 + 1); r2 < e2[0]; )
      switch (e2[r2]) {
        case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          switch (e2[++r2]) {
            case t2.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
              var s2 = new k();
              r2 = t2.textCompaction(e2, r2 + 1, s2), n2.setFileName(s2.toString());
              break;
            case t2.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
              var c2 = new k();
              r2 = t2.textCompaction(e2, r2 + 1, c2), n2.setSender(c2.toString());
              break;
            case t2.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
              var f2 = new k();
              r2 = t2.textCompaction(e2, r2 + 1, f2), n2.setAddressee(f2.toString());
              break;
            case t2.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
              var h2 = new k();
              r2 = t2.numericCompaction(e2, r2 + 1, h2), n2.setSegmentCount(I.parseInt(h2.toString()));
              break;
            case t2.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
              var l2 = new k();
              r2 = t2.numericCompaction(e2, r2 + 1, l2), n2.setTimestamp(Ln.parseLong(l2.toString()));
              break;
            case t2.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
              var d2 = new k();
              r2 = t2.numericCompaction(e2, r2 + 1, d2), n2.setChecksum(I.parseInt(d2.toString()));
              break;
            case t2.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
              var p2 = new k();
              r2 = t2.numericCompaction(e2, r2 + 1, p2), n2.setFileSize(Ln.parseLong(p2.toString()));
              break;
            default:
              throw R.getFormatInstance();
          }
          break;
        case t2.MACRO_PDF417_TERMINATOR:
          r2++, n2.setLastSegment(true);
          break;
        default:
          throw R.getFormatInstance();
      }
    if (-1 !== u2) {
      var g2 = r2 - u2;
      n2.isLastSegment() && g2--, n2.setOptionalData(C.copyOfRange(e2, u2, u2 + g2));
    }
    return r2;
  }, t2.textCompaction = function(e2, r2, n2) {
    for (var o2 = new Int32Array(2 * (e2[0] - r2)), i2 = new Int32Array(2 * (e2[0] - r2)), a2 = 0, u2 = false; r2 < e2[0] && !u2; ) {
      var s2 = e2[r2++];
      if (s2 < t2.TEXT_COMPACTION_MODE_LATCH)
        o2[a2] = s2 / 30, o2[a2 + 1] = s2 % 30, a2 += 2;
      else
        switch (s2) {
          case t2.TEXT_COMPACTION_MODE_LATCH:
            o2[a2++] = t2.TEXT_COMPACTION_MODE_LATCH;
            break;
          case t2.BYTE_COMPACTION_MODE_LATCH:
          case t2.BYTE_COMPACTION_MODE_LATCH_6:
          case t2.NUMERIC_COMPACTION_MODE_LATCH:
          case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case t2.MACRO_PDF417_TERMINATOR:
            r2--, u2 = true;
            break;
          case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            o2[a2] = t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, s2 = e2[r2++], i2[a2] = s2, a2++;
        }
    }
    return t2.decodeTextCompaction(o2, i2, a2, n2), r2;
  }, t2.decodeTextCompaction = function(e2, r2, n2, o2) {
    for (var i2 = Gr.ALPHA, a2 = Gr.ALPHA, u2 = 0; u2 < n2; ) {
      var s2 = e2[u2], c2 = "";
      switch (i2) {
        case Gr.ALPHA:
          if (s2 < 26)
            c2 = String.fromCharCode(65 + s2);
          else
            switch (s2) {
              case 26:
                c2 = " ";
                break;
              case t2.LL:
                i2 = Gr.LOWER;
                break;
              case t2.ML:
                i2 = Gr.MIXED;
                break;
              case t2.PS:
                a2 = i2, i2 = Gr.PUNCT_SHIFT;
                break;
              case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o2.append(r2[u2]);
                break;
              case t2.TEXT_COMPACTION_MODE_LATCH:
                i2 = Gr.ALPHA;
            }
          break;
        case Gr.LOWER:
          if (s2 < 26)
            c2 = String.fromCharCode(97 + s2);
          else
            switch (s2) {
              case 26:
                c2 = " ";
                break;
              case t2.AS:
                a2 = i2, i2 = Gr.ALPHA_SHIFT;
                break;
              case t2.ML:
                i2 = Gr.MIXED;
                break;
              case t2.PS:
                a2 = i2, i2 = Gr.PUNCT_SHIFT;
                break;
              case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o2.append(r2[u2]);
                break;
              case t2.TEXT_COMPACTION_MODE_LATCH:
                i2 = Gr.ALPHA;
            }
          break;
        case Gr.MIXED:
          if (s2 < t2.PL)
            c2 = t2.MIXED_CHARS[s2];
          else
            switch (s2) {
              case t2.PL:
                i2 = Gr.PUNCT;
                break;
              case 26:
                c2 = " ";
                break;
              case t2.LL:
                i2 = Gr.LOWER;
                break;
              case t2.AL:
                i2 = Gr.ALPHA;
                break;
              case t2.PS:
                a2 = i2, i2 = Gr.PUNCT_SHIFT;
                break;
              case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o2.append(r2[u2]);
                break;
              case t2.TEXT_COMPACTION_MODE_LATCH:
                i2 = Gr.ALPHA;
            }
          break;
        case Gr.PUNCT:
          if (s2 < t2.PAL)
            c2 = t2.PUNCT_CHARS[s2];
          else
            switch (s2) {
              case t2.PAL:
                i2 = Gr.ALPHA;
                break;
              case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o2.append(r2[u2]);
                break;
              case t2.TEXT_COMPACTION_MODE_LATCH:
                i2 = Gr.ALPHA;
            }
          break;
        case Gr.ALPHA_SHIFT:
          if (i2 = a2, s2 < 26)
            c2 = String.fromCharCode(65 + s2);
          else
            switch (s2) {
              case 26:
                c2 = " ";
                break;
              case t2.TEXT_COMPACTION_MODE_LATCH:
                i2 = Gr.ALPHA;
            }
          break;
        case Gr.PUNCT_SHIFT:
          if (i2 = a2, s2 < t2.PAL)
            c2 = t2.PUNCT_CHARS[s2];
          else
            switch (s2) {
              case t2.PAL:
                i2 = Gr.ALPHA;
                break;
              case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o2.append(r2[u2]);
                break;
              case t2.TEXT_COMPACTION_MODE_LATCH:
                i2 = Gr.ALPHA;
            }
      }
      "" !== c2 && o2.append(c2), u2++;
    }
  }, t2.byteCompaction = function(e2, r2, n2, o2, i2) {
    var a2 = new Gn(), u2 = 0, s2 = 0, c2 = false;
    switch (e2) {
      case t2.BYTE_COMPACTION_MODE_LATCH:
        for (var f2 = new Int32Array(6), h2 = r2[o2++]; o2 < r2[0] && !c2; )
          switch (f2[u2++] = h2, s2 = 900 * s2 + h2, h2 = r2[o2++]) {
            case t2.TEXT_COMPACTION_MODE_LATCH:
            case t2.BYTE_COMPACTION_MODE_LATCH:
            case t2.NUMERIC_COMPACTION_MODE_LATCH:
            case t2.BYTE_COMPACTION_MODE_LATCH_6:
            case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case t2.MACRO_PDF417_TERMINATOR:
              o2--, c2 = true;
              break;
            default:
              if (u2 % 5 == 0 && u2 > 0) {
                for (var l2 = 0; l2 < 6; ++l2)
                  a2.write(Number(Wn(s2) >> Wn(8 * (5 - l2))));
                s2 = 0, u2 = 0;
              }
          }
        o2 === r2[0] && h2 < t2.TEXT_COMPACTION_MODE_LATCH && (f2[u2++] = h2);
        for (var d2 = 0; d2 < u2; d2++)
          a2.write(f2[d2]);
        break;
      case t2.BYTE_COMPACTION_MODE_LATCH_6:
        for (; o2 < r2[0] && !c2; ) {
          var p2 = r2[o2++];
          if (p2 < t2.TEXT_COMPACTION_MODE_LATCH)
            u2++, s2 = 900 * s2 + p2;
          else
            switch (p2) {
              case t2.TEXT_COMPACTION_MODE_LATCH:
              case t2.BYTE_COMPACTION_MODE_LATCH:
              case t2.NUMERIC_COMPACTION_MODE_LATCH:
              case t2.BYTE_COMPACTION_MODE_LATCH_6:
              case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case t2.MACRO_PDF417_TERMINATOR:
                o2--, c2 = true;
            }
          if (u2 % 5 == 0 && u2 > 0) {
            for (l2 = 0; l2 < 6; ++l2)
              a2.write(Number(Wn(s2) >> Wn(8 * (5 - l2))));
            s2 = 0, u2 = 0;
          }
        }
    }
    return i2.append(L.decode(a2.toByteArray(), n2)), o2;
  }, t2.numericCompaction = function(e2, r2, n2) {
    for (var o2 = 0, i2 = false, a2 = new Int32Array(t2.MAX_NUMERIC_CODEWORDS); r2 < e2[0] && !i2; ) {
      var u2 = e2[r2++];
      if (r2 === e2[0] && (i2 = true), u2 < t2.TEXT_COMPACTION_MODE_LATCH)
        a2[o2] = u2, o2++;
      else
        switch (u2) {
          case t2.TEXT_COMPACTION_MODE_LATCH:
          case t2.BYTE_COMPACTION_MODE_LATCH:
          case t2.BYTE_COMPACTION_MODE_LATCH_6:
          case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case t2.MACRO_PDF417_TERMINATOR:
            r2--, i2 = true;
        }
      (o2 % t2.MAX_NUMERIC_CODEWORDS == 0 || u2 === t2.NUMERIC_COMPACTION_MODE_LATCH || i2) && o2 > 0 && (n2.append(t2.decodeBase900toBase10(a2, o2)), o2 = 0);
    }
    return r2;
  }, t2.decodeBase900toBase10 = function(e2, r2) {
    for (var n2 = Wn(0), o2 = 0; o2 < r2; o2++)
      n2 += t2.EXP900[r2 - o2 - 1] * Wn(e2[o2]);
    var i2 = n2.toString();
    if ("1" !== i2.charAt(0))
      throw new R();
    return i2.substring(1);
  }, t2.TEXT_COMPACTION_MODE_LATCH = 900, t2.BYTE_COMPACTION_MODE_LATCH = 901, t2.NUMERIC_COMPACTION_MODE_LATCH = 902, t2.BYTE_COMPACTION_MODE_LATCH_6 = 924, t2.ECI_USER_DEFINED = 925, t2.ECI_GENERAL_PURPOSE = 926, t2.ECI_CHARSET = 927, t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, t2.MACRO_PDF417_TERMINATOR = 922, t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, t2.MAX_NUMERIC_CODEWORDS = 15, t2.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, t2.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, t2.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, t2.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, t2.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, t2.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, t2.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, t2.PL = 25, t2.LL = 27, t2.AS = 27, t2.ML = 28, t2.AL = 28, t2.PS = 29, t2.PAL = 29, t2.PUNCT_CHARS = ";<>@[\\]_`~!\r	,:\n-.$/\"|*()?{}'", t2.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^", t2.EXP900 = Xn() ? function() {
    var t3 = [];
    t3[0] = Wn(1);
    var e2 = Wn(900);
    t3[1] = e2;
    for (var r2 = 2; r2 < 16; r2++)
      t3[r2] = t3[r2 - 1] * e2;
    return t3;
  }() : [], t2.NUMBER_OF_SEQUENCE_CODEWORDS = 2, t2;
}();
var zn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Yn = function() {
  function t2() {
  }
  return t2.decode = function(e2, r2, n2, o2, i2, a2, u2) {
    for (var s2, c2 = new vn(e2, r2, n2, o2, i2), f2 = null, h2 = null, l2 = true; ; l2 = false) {
      if (null != r2 && (f2 = t2.getRowIndicatorColumn(e2, c2, r2, true, a2, u2)), null != o2 && (h2 = t2.getRowIndicatorColumn(e2, c2, o2, false, a2, u2)), null == (s2 = t2.merge(f2, h2)))
        throw U.getNotFoundInstance();
      var d2 = s2.getBoundingBox();
      if (!l2 || null == d2 || !(d2.getMinY() < c2.getMinY() || d2.getMaxY() > c2.getMaxY()))
        break;
      c2 = d2;
    }
    s2.setBoundingBox(c2);
    var p2 = s2.getBarcodeColumnCount() + 1;
    s2.setDetectionResultColumn(0, f2), s2.setDetectionResultColumn(p2, h2);
    for (var g2 = null != f2, y2 = 1; y2 <= p2; y2++) {
      var w2 = g2 ? y2 : p2 - y2;
      if (void 0 === s2.getDetectionResultColumn(w2)) {
        var _2 = void 0;
        _2 = 0 === w2 || w2 === p2 ? new Rn(c2, 0 === w2) : new Cn(c2), s2.setDetectionResultColumn(w2, _2);
        for (var v2 = -1, m2 = v2, A2 = c2.getMinY(); A2 <= c2.getMaxY(); A2++) {
          if ((v2 = t2.getStartColumn(s2, w2, A2, g2)) < 0 || v2 > c2.getMaxX()) {
            if (-1 === m2)
              continue;
            v2 = m2;
          }
          var E2 = t2.detectCodeword(e2, c2.getMinX(), c2.getMaxX(), g2, v2, A2, a2, u2);
          null != E2 && (_2.setCodeword(A2, E2), m2 = v2, a2 = Math.min(a2, E2.getWidth()), u2 = Math.max(u2, E2.getWidth()));
        }
      }
    }
    return t2.createDecoderResult(s2);
  }, t2.merge = function(e2, r2) {
    if (null == e2 && null == r2)
      return null;
    var n2 = t2.getBarcodeMetadata(e2, r2);
    if (null == n2)
      return null;
    var o2 = vn.merge(t2.adjustBoundingBox(e2), t2.adjustBoundingBox(r2));
    return new Dn(n2, o2);
  }, t2.adjustBoundingBox = function(e2) {
    var r2, n2;
    if (null == e2)
      return null;
    var o2 = e2.getRowHeights();
    if (null == o2)
      return null;
    var i2 = t2.getMax(o2), a2 = 0;
    try {
      for (var u2 = zn(o2), s2 = u2.next(); !s2.done; s2 = u2.next()) {
        var c2 = s2.value;
        if (a2 += i2 - c2, c2 > 0)
          break;
      }
    } catch (t3) {
      r2 = { error: t3 };
    } finally {
      try {
        s2 && !s2.done && (n2 = u2.return) && n2.call(u2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
    for (var f2 = e2.getCodewords(), h2 = 0; a2 > 0 && null == f2[h2]; h2++)
      a2--;
    var l2 = 0;
    for (h2 = o2.length - 1; h2 >= 0 && (l2 += i2 - o2[h2], !(o2[h2] > 0)); h2--)
      ;
    for (h2 = f2.length - 1; l2 > 0 && null == f2[h2]; h2--)
      l2--;
    return e2.getBoundingBox().addMissingRows(a2, l2, e2.isLeft());
  }, t2.getMax = function(t3) {
    var e2, r2, n2 = -1;
    try {
      for (var o2 = zn(t3), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        n2 = Math.max(n2, a2);
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return n2;
  }, t2.getBarcodeMetadata = function(t3, e2) {
    var r2, n2;
    return null == t3 || null == (r2 = t3.getBarcodeMetadata()) ? null == e2 ? null : e2.getBarcodeMetadata() : null == e2 || null == (n2 = e2.getBarcodeMetadata()) ? r2 : r2.getColumnCount() !== n2.getColumnCount() && r2.getErrorCorrectionLevel() !== n2.getErrorCorrectionLevel() && r2.getRowCount() !== n2.getRowCount() ? null : r2;
  }, t2.getRowIndicatorColumn = function(e2, r2, n2, o2, i2, a2) {
    for (var u2 = new Rn(r2, o2), s2 = 0; s2 < 2; s2++)
      for (var c2 = 0 === s2 ? 1 : -1, f2 = Math.trunc(Math.trunc(n2.getX())), h2 = Math.trunc(Math.trunc(n2.getY())); h2 <= r2.getMaxY() && h2 >= r2.getMinY(); h2 += c2) {
        var l2 = t2.detectCodeword(e2, 0, e2.getWidth(), o2, f2, h2, i2, a2);
        null != l2 && (u2.setCodeword(h2, l2), f2 = o2 ? l2.getStartX() : l2.getEndX());
      }
    return u2;
  }, t2.adjustCodewordCount = function(e2, r2) {
    var n2 = r2[0][1], o2 = n2.getValue(), i2 = e2.getBarcodeColumnCount() * e2.getBarcodeRowCount() - t2.getNumberOfECCodeWords(e2.getBarcodeECLevel());
    if (0 === o2.length) {
      if (i2 < 1 || i2 > sn.MAX_CODEWORDS_IN_BARCODE)
        throw U.getNotFoundInstance();
      n2.setValue(i2);
    } else
      o2[0] !== i2 && n2.setValue(i2);
  }, t2.createDecoderResult = function(e2) {
    var r2 = t2.createBarcodeMatrix(e2);
    t2.adjustCodewordCount(e2, r2);
    for (var n2 = new Array(), o2 = new Int32Array(e2.getBarcodeRowCount() * e2.getBarcodeColumnCount()), i2 = [], a2 = new Array(), u2 = 0; u2 < e2.getBarcodeRowCount(); u2++)
      for (var s2 = 0; s2 < e2.getBarcodeColumnCount(); s2++) {
        var c2 = r2[u2][s2 + 1].getValue(), f2 = u2 * e2.getBarcodeColumnCount() + s2;
        0 === c2.length ? n2.push(f2) : 1 === c2.length ? o2[f2] = c2[0] : (a2.push(f2), i2.push(c2));
      }
    for (var h2 = new Array(i2.length), l2 = 0; l2 < h2.length; l2++)
      h2[l2] = i2[l2];
    return t2.createDecoderResultFromAmbiguousValues(e2.getBarcodeECLevel(), o2, sn.toIntArray(n2), sn.toIntArray(a2), h2);
  }, t2.createDecoderResultFromAmbiguousValues = function(e2, r2, n2, o2, i2) {
    for (var a2 = new Int32Array(o2.length), u2 = 100; u2-- > 0; ) {
      for (var s2 = 0; s2 < a2.length; s2++)
        r2[o2[s2]] = i2[s2][a2[s2]];
      try {
        return t2.decodeCodewords(r2, e2, n2);
      } catch (t3) {
        if (!(t3 instanceof g))
          throw t3;
      }
      if (0 === a2.length)
        throw g.getChecksumInstance();
      for (s2 = 0; s2 < a2.length; s2++) {
        if (a2[s2] < i2[s2].length - 1) {
          a2[s2]++;
          break;
        }
        if (a2[s2] = 0, s2 === a2.length - 1)
          throw g.getChecksumInstance();
      }
    }
    throw g.getChecksumInstance();
  }, t2.createBarcodeMatrix = function(t3) {
    for (var e2, r2, n2, o2, i2 = Array.from({ length: t3.getBarcodeRowCount() }, function() {
      return new Array(t3.getBarcodeColumnCount() + 2);
    }), a2 = 0; a2 < i2.length; a2++)
      for (var u2 = 0; u2 < i2[a2].length; u2++)
        i2[a2][u2] = new On();
    var s2 = 0;
    try {
      for (var c2 = zn(t3.getDetectionResultColumns()), f2 = c2.next(); !f2.done; f2 = c2.next()) {
        var h2 = f2.value;
        if (null != h2)
          try {
            for (var l2 = (n2 = void 0, zn(h2.getCodewords())), d2 = l2.next(); !d2.done; d2 = l2.next()) {
              var p2 = d2.value;
              if (null != p2) {
                var g2 = p2.getRowNumber();
                if (g2 >= 0) {
                  if (g2 >= i2.length)
                    continue;
                  i2[g2][s2].setValue(p2.getValue());
                }
              }
            }
          } catch (t4) {
            n2 = { error: t4 };
          } finally {
            try {
              d2 && !d2.done && (o2 = l2.return) && o2.call(l2);
            } finally {
              if (n2)
                throw n2.error;
            }
          }
        s2++;
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        f2 && !f2.done && (r2 = c2.return) && r2.call(c2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return i2;
  }, t2.isValidBarcodeColumn = function(t3, e2) {
    return e2 >= 0 && e2 <= t3.getBarcodeColumnCount() + 1;
  }, t2.getStartColumn = function(e2, r2, n2, o2) {
    var i2, a2, u2 = o2 ? 1 : -1, s2 = null;
    if (t2.isValidBarcodeColumn(e2, r2 - u2) && (s2 = e2.getDetectionResultColumn(r2 - u2).getCodeword(n2)), null != s2)
      return o2 ? s2.getEndX() : s2.getStartX();
    if (null != (s2 = e2.getDetectionResultColumn(r2).getCodewordNearby(n2)))
      return o2 ? s2.getStartX() : s2.getEndX();
    if (t2.isValidBarcodeColumn(e2, r2 - u2) && (s2 = e2.getDetectionResultColumn(r2 - u2).getCodewordNearby(n2)), null != s2)
      return o2 ? s2.getEndX() : s2.getStartX();
    for (var c2 = 0; t2.isValidBarcodeColumn(e2, r2 - u2); ) {
      r2 -= u2;
      try {
        for (var f2 = (i2 = void 0, zn(e2.getDetectionResultColumn(r2).getCodewords())), h2 = f2.next(); !h2.done; h2 = f2.next()) {
          var l2 = h2.value;
          if (null != l2)
            return (o2 ? l2.getEndX() : l2.getStartX()) + u2 * c2 * (l2.getEndX() - l2.getStartX());
        }
      } catch (t3) {
        i2 = { error: t3 };
      } finally {
        try {
          h2 && !h2.done && (a2 = f2.return) && a2.call(f2);
        } finally {
          if (i2)
            throw i2.error;
        }
      }
      c2++;
    }
    return o2 ? e2.getBoundingBox().getMinX() : e2.getBoundingBox().getMaxX();
  }, t2.detectCodeword = function(e2, r2, n2, o2, i2, a2, u2, s2) {
    i2 = t2.adjustCodewordStartColumn(e2, r2, n2, o2, i2, a2);
    var c2, f2 = t2.getModuleBitCount(e2, r2, n2, o2, i2, a2);
    if (null == f2)
      return null;
    var h2 = vt.sum(f2);
    if (o2)
      c2 = i2 + h2;
    else {
      for (var l2 = 0; l2 < f2.length / 2; l2++) {
        var d2 = f2[l2];
        f2[l2] = f2[f2.length - 1 - l2], f2[f2.length - 1 - l2] = d2;
      }
      i2 = (c2 = i2) - h2;
    }
    if (!t2.checkCodewordSkew(h2, u2, s2))
      return null;
    var p2 = Mn.getDecodedValue(f2), g2 = sn.getCodeword(p2);
    return -1 === g2 ? null : new Pn(i2, c2, t2.getCodewordBucketNumber(p2), g2);
  }, t2.getModuleBitCount = function(t3, e2, r2, n2, o2, i2) {
    for (var a2 = o2, u2 = new Int32Array(8), s2 = 0, c2 = n2 ? 1 : -1, f2 = n2; (n2 ? a2 < r2 : a2 >= e2) && s2 < u2.length; )
      t3.get(a2, i2) === f2 ? (u2[s2]++, a2 += c2) : (s2++, f2 = !f2);
    return s2 === u2.length || a2 === (n2 ? r2 : e2) && s2 === u2.length - 1 ? u2 : null;
  }, t2.getNumberOfECCodeWords = function(t3) {
    return 2 << t3;
  }, t2.adjustCodewordStartColumn = function(e2, r2, n2, o2, i2, a2) {
    for (var u2 = i2, s2 = o2 ? -1 : 1, c2 = 0; c2 < 2; c2++) {
      for (; (o2 ? u2 >= r2 : u2 < n2) && o2 === e2.get(u2, a2); ) {
        if (Math.abs(i2 - u2) > t2.CODEWORD_SKEW_SIZE)
          return i2;
        u2 += s2;
      }
      s2 = -s2, o2 = !o2;
    }
    return u2;
  }, t2.checkCodewordSkew = function(e2, r2, n2) {
    return r2 - t2.CODEWORD_SKEW_SIZE <= e2 && e2 <= n2 + t2.CODEWORD_SKEW_SIZE;
  }, t2.decodeCodewords = function(e2, r2, n2) {
    if (0 === e2.length)
      throw R.getFormatInstance();
    var o2 = 1 << r2 + 1, i2 = t2.correctErrors(e2, n2, o2);
    t2.verifyCodewordCount(e2, o2);
    var a2 = jn.decode(e2, "" + r2);
    return a2.setErrorsCorrected(i2), a2.setErasures(n2.length), a2;
  }, t2.correctErrors = function(e2, r2, n2) {
    if (null != r2 && r2.length > n2 / 2 + t2.MAX_ERRORS || n2 < 0 || n2 > t2.MAX_EC_CODEWORDS)
      throw g.getChecksumInstance();
    return t2.errorCorrection.decode(e2, n2, r2);
  }, t2.verifyCodewordCount = function(t3, e2) {
    if (t3.length < 4)
      throw R.getFormatInstance();
    var r2 = t3[0];
    if (r2 > t3.length)
      throw R.getFormatInstance();
    if (0 === r2) {
      if (!(e2 < t3.length))
        throw R.getFormatInstance();
      t3[0] = t3.length - e2;
    }
  }, t2.getBitCountForCodeword = function(t3) {
    for (var e2 = new Int32Array(8), r2 = 0, n2 = e2.length - 1; !((1 & t3) !== r2 && (r2 = 1 & t3, --n2 < 0)); )
      e2[n2]++, t3 >>= 1;
    return e2;
  }, t2.getCodewordBucketNumber = function(t3) {
    return t3 instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t3) : this.getCodewordBucketNumber_number(t3);
  }, t2.getCodewordBucketNumber_number = function(e2) {
    return t2.getCodewordBucketNumber(t2.getBitCountForCodeword(e2));
  }, t2.getCodewordBucketNumber_Int32Array = function(t3) {
    return (t3[0] - t3[2] + t3[4] - t3[6] + 9) % 9;
  }, t2.toString = function(t3) {
    for (var e2 = new An(), r2 = 0; r2 < t3.length; r2++) {
      e2.format("Row %2d: ", r2);
      for (var n2 = 0; n2 < t3[r2].length; n2++) {
        var o2 = t3[r2][n2];
        0 === o2.getValue().length ? e2.format("        ", null) : e2.format("%4d(%2d)", o2.getValue()[0], o2.getConfidence(o2.getValue()[0]));
      }
      e2.format("%n");
    }
    return e2.toString();
  }, t2.CODEWORD_SKEW_SIZE = 2, t2.MAX_ERRORS = 3, t2.MAX_EC_CODEWORDS = 512, t2.errorCorrection = new _n(), t2;
}();
var Zn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Kn = function() {
  function t2() {
  }
  return t2.prototype.decode = function(e2, r2) {
    void 0 === r2 && (r2 = null);
    var n2 = t2.decode(e2, r2, false);
    if (null == n2 || 0 === n2.length || null == n2[0])
      throw U.getNotFoundInstance();
    return n2[0];
  }, t2.prototype.decodeMultiple = function(e2, r2) {
    void 0 === r2 && (r2 = null);
    try {
      return t2.decode(e2, r2, true);
    } catch (t3) {
      if (t3 instanceof R || t3 instanceof g)
        throw U.getNotFoundInstance();
      throw t3;
    }
  }, t2.decode = function(e2, r2, n2) {
    var o2, i2, a2 = new Array(), u2 = hn.detectMultiple(e2, r2, n2);
    try {
      for (var s2 = Zn(u2.getPoints()), c2 = s2.next(); !c2.done; c2 = s2.next()) {
        var f2 = c2.value, h2 = Yn.decode(u2.getBits(), f2[4], f2[5], f2[6], f2[7], t2.getMinCodewordWidth(f2), t2.getMaxCodewordWidth(f2)), l2 = new et(h2.getText(), h2.getRawBytes(), void 0, f2, nt.PDF_417);
        l2.putMetadata(it.ERROR_CORRECTION_LEVEL, h2.getECLevel());
        var d2 = h2.getOther();
        null != d2 && l2.putMetadata(it.PDF417_EXTRA_METADATA, d2), a2.push(l2);
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        c2 && !c2.done && (i2 = s2.return) && i2.call(s2);
      } finally {
        if (o2)
          throw o2.error;
      }
    }
    return a2.map(function(t3) {
      return t3;
    });
  }, t2.getMaxWidth = function(t3, e2) {
    return null == t3 || null == e2 ? 0 : Math.trunc(Math.abs(t3.getX() - e2.getX()));
  }, t2.getMinWidth = function(t3, e2) {
    return null == t3 || null == e2 ? I.MAX_VALUE : Math.trunc(Math.abs(t3.getX() - e2.getX()));
  }, t2.getMaxCodewordWidth = function(e2) {
    return Math.floor(Math.max(Math.max(t2.getMaxWidth(e2[0], e2[4]), t2.getMaxWidth(e2[6], e2[2]) * sn.MODULES_IN_CODEWORD / sn.MODULES_IN_STOP_PATTERN), Math.max(t2.getMaxWidth(e2[1], e2[5]), t2.getMaxWidth(e2[7], e2[3]) * sn.MODULES_IN_CODEWORD / sn.MODULES_IN_STOP_PATTERN)));
  }, t2.getMinCodewordWidth = function(e2) {
    return Math.floor(Math.min(Math.min(t2.getMinWidth(e2[0], e2[4]), t2.getMinWidth(e2[6], e2[2]) * sn.MODULES_IN_CODEWORD / sn.MODULES_IN_STOP_PATTERN), Math.min(t2.getMinWidth(e2[1], e2[5]), t2.getMinWidth(e2[7], e2[3]) * sn.MODULES_IN_CODEWORD / sn.MODULES_IN_STOP_PATTERN)));
  }, t2.prototype.reset = function() {
  }, t2;
}();
var qn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Qn = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return qn(e2, t2), e2.kind = "ReaderException", e2;
}(s);
var Jn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $n = function() {
  function t2() {
  }
  return t2.prototype.decode = function(t3, e2) {
    return this.setHints(e2), this.decodeInternal(t3);
  }, t2.prototype.decodeWithState = function(t3) {
    return null !== this.readers && void 0 !== this.readers || this.setHints(null), this.decodeInternal(t3);
  }, t2.prototype.setHints = function(t3) {
    this.hints = t3;
    var e2 = null != t3 && void 0 !== t3.get(T.TRY_HARDER), r2 = null == t3 ? null : t3.get(T.POSSIBLE_FORMATS), n2 = new Array();
    if (null != r2) {
      var o2 = r2.some(function(t4) {
        return t4 === nt.UPC_A || t4 === nt.UPC_E || t4 === nt.EAN_13 || t4 === nt.EAN_8 || t4 === nt.CODABAR || t4 === nt.CODE_39 || t4 === nt.CODE_93 || t4 === nt.CODE_128 || t4 === nt.ITF || t4 === nt.RSS_14 || t4 === nt.RSS_EXPANDED;
      });
      o2 && !e2 && n2.push(new fr(t3)), r2.includes(nt.QR_CODE) && n2.push(new an()), r2.includes(nt.DATA_MATRIX) && n2.push(new Or()), r2.includes(nt.AZTEC) && n2.push(new Mt()), r2.includes(nt.PDF_417) && n2.push(new Kn()), o2 && e2 && n2.push(new fr(t3));
    }
    0 === n2.length && (e2 || n2.push(new fr(t3)), n2.push(new an()), n2.push(new Or()), n2.push(new Mt()), n2.push(new Kn()), e2 && n2.push(new fr(t3))), this.readers = n2;
  }, t2.prototype.reset = function() {
    var t3, e2;
    if (null !== this.readers)
      try {
        for (var r2 = Jn(this.readers), n2 = r2.next(); !n2.done; n2 = r2.next()) {
          n2.value.reset();
        }
      } catch (e3) {
        t3 = { error: e3 };
      } finally {
        try {
          n2 && !n2.done && (e2 = r2.return) && e2.call(r2);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
  }, t2.prototype.decodeInternal = function(t3) {
    var e2, r2;
    if (null === this.readers)
      throw new Qn("No readers where selected, nothing can be read.");
    try {
      for (var n2 = Jn(this.readers), o2 = n2.next(); !o2.done; o2 = n2.next()) {
        var i2 = o2.value;
        try {
          return i2.decode(t3, this.hints);
        } catch (t4) {
          if (t4 instanceof Qn)
            continue;
        }
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        o2 && !o2.done && (r2 = n2.return) && r2.call(n2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    throw new U("No MultiFormat Readers were able to detect the code.");
  }, t2;
}();
var to = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    void 0 === e3 && (e3 = null), void 0 === r2 && (r2 = 500);
    var n2 = new $n();
    return n2.setHints(e3), t2.call(this, n2, r2) || this;
  }
  to(e2, t2), e2.prototype.decodeBitmap = function(t3) {
    return this.reader.decodeWithState(t3);
  };
}(tt);
var eo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new Kn(), e3) || this;
  }
  eo(e2, t2);
}(tt);
var ro;
var no = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new an(), e3) || this;
  }
  no(e2, t2);
}(tt), function(t2) {
  t2[t2.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", t2[t2.CHARACTER_SET = 1] = "CHARACTER_SET", t2[t2.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", t2[t2.MIN_SIZE = 3] = "MIN_SIZE", t2[t2.MAX_SIZE = 4] = "MAX_SIZE", t2[t2.MARGIN = 5] = "MARGIN", t2[t2.PDF417_COMPACT = 6] = "PDF417_COMPACT", t2[t2.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", t2[t2.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", t2[t2.AZTEC_LAYERS = 9] = "AZTEC_LAYERS", t2[t2.QR_VERSION = 10] = "QR_VERSION";
}(ro || (ro = {}));
var oo = ro;
var io = function() {
  function t2(t3) {
    this.field = t3, this.cachedGenerators = [], this.cachedGenerators.push(new st(t3, Int32Array.from([1])));
  }
  return t2.prototype.buildGenerator = function(t3) {
    var e2 = this.cachedGenerators;
    if (t3 >= e2.length)
      for (var r2 = e2[e2.length - 1], n2 = this.field, o2 = e2.length; o2 <= t3; o2++) {
        var i2 = r2.multiply(new st(n2, Int32Array.from([1, n2.exp(o2 - 1 + n2.getGeneratorBase())])));
        e2.push(i2), r2 = i2;
      }
    return e2[t3];
  }, t2.prototype.encode = function(t3, e2) {
    if (0 === e2)
      throw new l("No error correction bytes");
    var r2 = t3.length - e2;
    if (r2 <= 0)
      throw new l("No data bytes provided");
    var n2 = this.buildGenerator(e2), o2 = new Int32Array(r2);
    w.arraycopy(t3, 0, o2, 0, r2);
    for (var i2 = new st(this.field, o2), a2 = (i2 = i2.multiplyByMonomial(e2, 1)).divide(n2)[1].getCoefficients(), u2 = e2 - a2.length, s2 = 0; s2 < u2; s2++)
      t3[r2 + s2] = 0;
    w.arraycopy(a2, 0, t3, r2 + u2, a2.length);
  }, t2;
}();
var ao = function() {
  function t2() {
  }
  return t2.applyMaskPenaltyRule1 = function(e2) {
    return t2.applyMaskPenaltyRule1Internal(e2, true) + t2.applyMaskPenaltyRule1Internal(e2, false);
  }, t2.applyMaskPenaltyRule2 = function(e2) {
    for (var r2 = 0, n2 = e2.getArray(), o2 = e2.getWidth(), i2 = e2.getHeight(), a2 = 0; a2 < i2 - 1; a2++)
      for (var u2 = n2[a2], s2 = 0; s2 < o2 - 1; s2++) {
        var c2 = u2[s2];
        c2 === u2[s2 + 1] && c2 === n2[a2 + 1][s2] && c2 === n2[a2 + 1][s2 + 1] && r2++;
      }
    return t2.N2 * r2;
  }, t2.applyMaskPenaltyRule3 = function(e2) {
    for (var r2 = 0, n2 = e2.getArray(), o2 = e2.getWidth(), i2 = e2.getHeight(), a2 = 0; a2 < i2; a2++)
      for (var u2 = 0; u2 < o2; u2++) {
        var s2 = n2[a2];
        u2 + 6 < o2 && 1 === s2[u2] && 0 === s2[u2 + 1] && 1 === s2[u2 + 2] && 1 === s2[u2 + 3] && 1 === s2[u2 + 4] && 0 === s2[u2 + 5] && 1 === s2[u2 + 6] && (t2.isWhiteHorizontal(s2, u2 - 4, u2) || t2.isWhiteHorizontal(s2, u2 + 7, u2 + 11)) && r2++, a2 + 6 < i2 && 1 === n2[a2][u2] && 0 === n2[a2 + 1][u2] && 1 === n2[a2 + 2][u2] && 1 === n2[a2 + 3][u2] && 1 === n2[a2 + 4][u2] && 0 === n2[a2 + 5][u2] && 1 === n2[a2 + 6][u2] && (t2.isWhiteVertical(n2, u2, a2 - 4, a2) || t2.isWhiteVertical(n2, u2, a2 + 7, a2 + 11)) && r2++;
      }
    return r2 * t2.N3;
  }, t2.isWhiteHorizontal = function(t3, e2, r2) {
    e2 = Math.max(e2, 0), r2 = Math.min(r2, t3.length);
    for (var n2 = e2; n2 < r2; n2++)
      if (1 === t3[n2])
        return false;
    return true;
  }, t2.isWhiteVertical = function(t3, e2, r2, n2) {
    r2 = Math.max(r2, 0), n2 = Math.min(n2, t3.length);
    for (var o2 = r2; o2 < n2; o2++)
      if (1 === t3[o2][e2])
        return false;
    return true;
  }, t2.applyMaskPenaltyRule4 = function(e2) {
    for (var r2 = 0, n2 = e2.getArray(), o2 = e2.getWidth(), i2 = e2.getHeight(), a2 = 0; a2 < i2; a2++)
      for (var u2 = n2[a2], s2 = 0; s2 < o2; s2++)
        1 === u2[s2] && r2++;
    var c2 = e2.getHeight() * e2.getWidth();
    return Math.floor(10 * Math.abs(2 * r2 - c2) / c2) * t2.N4;
  }, t2.getDataMaskBit = function(t3, e2, r2) {
    var n2, o2;
    switch (t3) {
      case 0:
        n2 = r2 + e2 & 1;
        break;
      case 1:
        n2 = 1 & r2;
        break;
      case 2:
        n2 = e2 % 3;
        break;
      case 3:
        n2 = (r2 + e2) % 3;
        break;
      case 4:
        n2 = Math.floor(r2 / 2) + Math.floor(e2 / 3) & 1;
        break;
      case 5:
        n2 = (1 & (o2 = r2 * e2)) + o2 % 3;
        break;
      case 6:
        n2 = (1 & (o2 = r2 * e2)) + o2 % 3 & 1;
        break;
      case 7:
        n2 = (o2 = r2 * e2) % 3 + (r2 + e2 & 1) & 1;
        break;
      default:
        throw new l("Invalid mask pattern: " + t3);
    }
    return 0 === n2;
  }, t2.applyMaskPenaltyRule1Internal = function(e2, r2) {
    for (var n2 = 0, o2 = r2 ? e2.getHeight() : e2.getWidth(), i2 = r2 ? e2.getWidth() : e2.getHeight(), a2 = e2.getArray(), u2 = 0; u2 < o2; u2++) {
      for (var s2 = 0, c2 = -1, f2 = 0; f2 < i2; f2++) {
        var h2 = r2 ? a2[u2][f2] : a2[f2][u2];
        h2 === c2 ? s2++ : (s2 >= 5 && (n2 += t2.N1 + (s2 - 5)), s2 = 1, c2 = h2);
      }
      s2 >= 5 && (n2 += t2.N1 + (s2 - 5));
    }
    return n2;
  }, t2.N1 = 3, t2.N2 = 3, t2.N3 = 40, t2.N4 = 10, t2;
}();
var uo = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var so = function() {
  function t2(t3, e2) {
    this.width = t3, this.height = e2;
    for (var r2 = new Array(e2), n2 = 0; n2 !== e2; n2++)
      r2[n2] = new Uint8Array(t3);
    this.bytes = r2;
  }
  return t2.prototype.getHeight = function() {
    return this.height;
  }, t2.prototype.getWidth = function() {
    return this.width;
  }, t2.prototype.get = function(t3, e2) {
    return this.bytes[e2][t3];
  }, t2.prototype.getArray = function() {
    return this.bytes;
  }, t2.prototype.setNumber = function(t3, e2, r2) {
    this.bytes[e2][t3] = r2;
  }, t2.prototype.setBoolean = function(t3, e2, r2) {
    this.bytes[e2][t3] = r2 ? 1 : 0;
  }, t2.prototype.clear = function(t3) {
    var e2, r2;
    try {
      for (var n2 = uo(this.bytes), o2 = n2.next(); !o2.done; o2 = n2.next()) {
        var i2 = o2.value;
        C.fill(i2, t3);
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        o2 && !o2.done && (r2 = n2.return) && r2.call(n2);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2))
      return false;
    var r2 = e2;
    if (this.width !== r2.width)
      return false;
    if (this.height !== r2.height)
      return false;
    for (var n2 = 0, o2 = this.height; n2 < o2; ++n2)
      for (var i2 = this.bytes[n2], a2 = r2.bytes[n2], u2 = 0, s2 = this.width; u2 < s2; ++u2)
        if (i2[u2] !== a2[u2])
          return false;
    return true;
  }, t2.prototype.toString = function() {
    for (var t3 = new k(), e2 = 0, r2 = this.height; e2 < r2; ++e2) {
      for (var n2 = this.bytes[e2], o2 = 0, i2 = this.width; o2 < i2; ++o2)
        switch (n2[o2]) {
          case 0:
            t3.append(" 0");
            break;
          case 1:
            t3.append(" 1");
            break;
          default:
            t3.append("  ");
        }
      t3.append("\n");
    }
    return t3.toString();
  }, t2;
}();
var co = function() {
  function t2() {
    this.maskPattern = -1;
  }
  return t2.prototype.getMode = function() {
    return this.mode;
  }, t2.prototype.getECLevel = function() {
    return this.ecLevel;
  }, t2.prototype.getVersion = function() {
    return this.version;
  }, t2.prototype.getMaskPattern = function() {
    return this.maskPattern;
  }, t2.prototype.getMatrix = function() {
    return this.matrix;
  }, t2.prototype.toString = function() {
    var t3 = new k();
    return t3.append("<<\n"), t3.append(" mode: "), t3.append(this.mode ? this.mode.toString() : "null"), t3.append("\n ecLevel: "), t3.append(this.ecLevel ? this.ecLevel.toString() : "null"), t3.append("\n version: "), t3.append(this.version ? this.version.toString() : "null"), t3.append("\n maskPattern: "), t3.append(this.maskPattern.toString()), this.matrix ? (t3.append("\n matrix:\n"), t3.append(this.matrix.toString())) : t3.append("\n matrix: null\n"), t3.append(">>\n"), t3.toString();
  }, t2.prototype.setMode = function(t3) {
    this.mode = t3;
  }, t2.prototype.setECLevel = function(t3) {
    this.ecLevel = t3;
  }, t2.prototype.setVersion = function(t3) {
    this.version = t3;
  }, t2.prototype.setMaskPattern = function(t3) {
    this.maskPattern = t3;
  }, t2.prototype.setMatrix = function(t3) {
    this.matrix = t3;
  }, t2.isValidMaskPattern = function(e2) {
    return e2 >= 0 && e2 < t2.NUM_MASK_PATTERNS;
  }, t2.NUM_MASK_PATTERNS = 8, t2;
}();
var fo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ho = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return fo(e2, t2), e2.kind = "WriterException", e2;
}(s);
var lo = function() {
  function t2() {
  }
  return t2.clearMatrix = function(t3) {
    t3.clear(255);
  }, t2.buildMatrix = function(e2, r2, n2, o2, i2) {
    t2.clearMatrix(i2), t2.embedBasicPatterns(n2, i2), t2.embedTypeInfo(r2, o2, i2), t2.maybeEmbedVersionInfo(n2, i2), t2.embedDataBits(e2, o2, i2);
  }, t2.embedBasicPatterns = function(e2, r2) {
    t2.embedPositionDetectionPatternsAndSeparators(r2), t2.embedDarkDotAtLeftBottomCorner(r2), t2.maybeEmbedPositionAdjustmentPatterns(e2, r2), t2.embedTimingPatterns(r2);
  }, t2.embedTypeInfo = function(e2, r2, n2) {
    var o2 = new S();
    t2.makeTypeInfoBits(e2, r2, o2);
    for (var i2 = 0, a2 = o2.getSize(); i2 < a2; ++i2) {
      var u2 = o2.get(o2.getSize() - 1 - i2), s2 = t2.TYPE_INFO_COORDINATES[i2], c2 = s2[0], f2 = s2[1];
      if (n2.setBoolean(c2, f2, u2), i2 < 8) {
        var h2 = n2.getWidth() - i2 - 1, l2 = 8;
        n2.setBoolean(h2, l2, u2);
      } else {
        h2 = 8, l2 = n2.getHeight() - 7 + (i2 - 8);
        n2.setBoolean(h2, l2, u2);
      }
    }
  }, t2.maybeEmbedVersionInfo = function(e2, r2) {
    if (!(e2.getVersionNumber() < 7)) {
      var n2 = new S();
      t2.makeVersionInfoBits(e2, n2);
      for (var o2 = 17, i2 = 0; i2 < 6; ++i2)
        for (var a2 = 0; a2 < 3; ++a2) {
          var u2 = n2.get(o2);
          o2--, r2.setBoolean(i2, r2.getHeight() - 11 + a2, u2), r2.setBoolean(r2.getHeight() - 11 + a2, i2, u2);
        }
    }
  }, t2.embedDataBits = function(e2, r2, n2) {
    for (var o2 = 0, i2 = -1, a2 = n2.getWidth() - 1, u2 = n2.getHeight() - 1; a2 > 0; ) {
      for (6 === a2 && (a2 -= 1); u2 >= 0 && u2 < n2.getHeight(); ) {
        for (var s2 = 0; s2 < 2; ++s2) {
          var c2 = a2 - s2;
          if (t2.isEmpty(n2.get(c2, u2))) {
            var f2 = void 0;
            o2 < e2.getSize() ? (f2 = e2.get(o2), ++o2) : f2 = false, 255 !== r2 && ao.getDataMaskBit(r2, c2, u2) && (f2 = !f2), n2.setBoolean(c2, u2, f2);
          }
        }
        u2 += i2;
      }
      u2 += i2 = -i2, a2 -= 2;
    }
    if (o2 !== e2.getSize())
      throw new ho("Not all bits consumed: " + o2 + "/" + e2.getSize());
  }, t2.findMSBSet = function(t3) {
    return 32 - I.numberOfLeadingZeros(t3);
  }, t2.calculateBCHCode = function(e2, r2) {
    if (0 === r2)
      throw new l("0 polynomial");
    var n2 = t2.findMSBSet(r2);
    for (e2 <<= n2 - 1; t2.findMSBSet(e2) >= n2; )
      e2 ^= r2 << t2.findMSBSet(e2) - n2;
    return e2;
  }, t2.makeTypeInfoBits = function(e2, r2, n2) {
    if (!co.isValidMaskPattern(r2))
      throw new ho("Invalid mask pattern");
    var o2 = e2.getBits() << 3 | r2;
    n2.appendBits(o2, 5);
    var i2 = t2.calculateBCHCode(o2, t2.TYPE_INFO_POLY);
    n2.appendBits(i2, 10);
    var a2 = new S();
    if (a2.appendBits(t2.TYPE_INFO_MASK_PATTERN, 15), n2.xor(a2), 15 !== n2.getSize())
      throw new ho("should not happen but we got: " + n2.getSize());
  }, t2.makeVersionInfoBits = function(e2, r2) {
    r2.appendBits(e2.getVersionNumber(), 6);
    var n2 = t2.calculateBCHCode(e2.getVersionNumber(), t2.VERSION_INFO_POLY);
    if (r2.appendBits(n2, 12), 18 !== r2.getSize())
      throw new ho("should not happen but we got: " + r2.getSize());
  }, t2.isEmpty = function(t3) {
    return 255 === t3;
  }, t2.embedTimingPatterns = function(e2) {
    for (var r2 = 8; r2 < e2.getWidth() - 8; ++r2) {
      var n2 = (r2 + 1) % 2;
      t2.isEmpty(e2.get(r2, 6)) && e2.setNumber(r2, 6, n2), t2.isEmpty(e2.get(6, r2)) && e2.setNumber(6, r2, n2);
    }
  }, t2.embedDarkDotAtLeftBottomCorner = function(t3) {
    if (0 === t3.get(8, t3.getHeight() - 8))
      throw new ho();
    t3.setNumber(8, t3.getHeight() - 8, 1);
  }, t2.embedHorizontalSeparationPattern = function(e2, r2, n2) {
    for (var o2 = 0; o2 < 8; ++o2) {
      if (!t2.isEmpty(n2.get(e2 + o2, r2)))
        throw new ho();
      n2.setNumber(e2 + o2, r2, 0);
    }
  }, t2.embedVerticalSeparationPattern = function(e2, r2, n2) {
    for (var o2 = 0; o2 < 7; ++o2) {
      if (!t2.isEmpty(n2.get(e2, r2 + o2)))
        throw new ho();
      n2.setNumber(e2, r2 + o2, 0);
    }
  }, t2.embedPositionAdjustmentPattern = function(e2, r2, n2) {
    for (var o2 = 0; o2 < 5; ++o2)
      for (var i2 = t2.POSITION_ADJUSTMENT_PATTERN[o2], a2 = 0; a2 < 5; ++a2)
        n2.setNumber(e2 + a2, r2 + o2, i2[a2]);
  }, t2.embedPositionDetectionPattern = function(e2, r2, n2) {
    for (var o2 = 0; o2 < 7; ++o2)
      for (var i2 = t2.POSITION_DETECTION_PATTERN[o2], a2 = 0; a2 < 7; ++a2)
        n2.setNumber(e2 + a2, r2 + o2, i2[a2]);
  }, t2.embedPositionDetectionPatternsAndSeparators = function(e2) {
    var r2 = t2.POSITION_DETECTION_PATTERN[0].length;
    t2.embedPositionDetectionPattern(0, 0, e2), t2.embedPositionDetectionPattern(e2.getWidth() - r2, 0, e2), t2.embedPositionDetectionPattern(0, e2.getWidth() - r2, e2);
    t2.embedHorizontalSeparationPattern(0, 7, e2), t2.embedHorizontalSeparationPattern(e2.getWidth() - 8, 7, e2), t2.embedHorizontalSeparationPattern(0, e2.getWidth() - 8, e2);
    t2.embedVerticalSeparationPattern(7, 0, e2), t2.embedVerticalSeparationPattern(e2.getHeight() - 7 - 1, 0, e2), t2.embedVerticalSeparationPattern(7, e2.getHeight() - 7, e2);
  }, t2.maybeEmbedPositionAdjustmentPatterns = function(e2, r2) {
    if (!(e2.getVersionNumber() < 2))
      for (var n2 = e2.getVersionNumber() - 1, o2 = t2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n2], i2 = 0, a2 = o2.length; i2 !== a2; i2++) {
        var u2 = o2[i2];
        if (u2 >= 0)
          for (var s2 = 0; s2 !== a2; s2++) {
            var c2 = o2[s2];
            c2 >= 0 && t2.isEmpty(r2.get(c2, u2)) && t2.embedPositionAdjustmentPattern(c2 - 2, u2 - 2, r2);
          }
      }
  }, t2.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]), t2.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), t2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), t2.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]), t2.VERSION_INFO_POLY = 7973, t2.TYPE_INFO_POLY = 1335, t2.TYPE_INFO_MASK_PATTERN = 21522, t2;
}();
var po = function() {
  function t2(t3, e2) {
    this.dataBytes = t3, this.errorCorrectionBytes = e2;
  }
  return t2.prototype.getDataBytes = function() {
    return this.dataBytes;
  }, t2.prototype.getErrorCorrectionBytes = function() {
    return this.errorCorrectionBytes;
  }, t2;
}();
var go = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
!function() {
  function t2() {
  }
  t2.calculateMaskPenalty = function(t3) {
    return ao.applyMaskPenaltyRule1(t3) + ao.applyMaskPenaltyRule2(t3) + ao.applyMaskPenaltyRule3(t3) + ao.applyMaskPenaltyRule4(t3);
  }, t2.encode = function(e2, r2, n2) {
    void 0 === n2 && (n2 = null);
    var o2 = t2.DEFAULT_BYTE_MODE_ENCODING, i2 = null !== n2 && void 0 !== n2.get(oo.CHARACTER_SET);
    i2 && (o2 = n2.get(oo.CHARACTER_SET).toString());
    var a2 = this.chooseMode(e2, o2), u2 = new S();
    if (a2 === Wr.BYTE && (i2 || t2.DEFAULT_BYTE_MODE_ENCODING !== o2)) {
      var s2 = P.getCharacterSetECIByName(o2);
      void 0 !== s2 && this.appendECI(s2, u2);
    }
    this.appendModeInfo(a2, u2);
    var c2, f2 = new S();
    if (this.appendBytes(e2, a2, f2, o2), null !== n2 && void 0 !== n2.get(oo.QR_VERSION)) {
      var h2 = Number.parseInt(n2.get(oo.QR_VERSION).toString(), 10);
      c2 = Fr.getVersionForNumber(h2);
      var l2 = this.calculateBitsNeeded(a2, u2, f2, c2);
      if (!this.willFit(l2, c2, r2))
        throw new ho("Data too big for requested version");
    } else
      c2 = this.recommendVersion(r2, a2, u2, f2);
    var d2 = new S();
    d2.appendBitArray(u2);
    var p2 = a2 === Wr.BYTE ? f2.getSizeInBytes() : e2.length;
    this.appendLengthInfo(p2, c2, a2, d2), d2.appendBitArray(f2);
    var g2 = c2.getECBlocksForLevel(r2), y2 = c2.getTotalCodewords() - g2.getTotalECCodewords();
    this.terminateBits(y2, d2);
    var w2 = this.interleaveWithECBytes(d2, c2.getTotalCodewords(), y2, g2.getNumBlocks()), _2 = new co();
    _2.setECLevel(r2), _2.setMode(a2), _2.setVersion(c2);
    var v2 = c2.getDimensionForVersion(), m2 = new so(v2, v2), A2 = this.chooseMaskPattern(w2, r2, c2, m2);
    return _2.setMaskPattern(A2), lo.buildMatrix(w2, r2, c2, A2, m2), _2.setMatrix(m2), _2;
  }, t2.recommendVersion = function(t3, e2, r2, n2) {
    var o2 = this.calculateBitsNeeded(e2, r2, n2, Fr.getVersionForNumber(1)), i2 = this.chooseVersion(o2, t3), a2 = this.calculateBitsNeeded(e2, r2, n2, i2);
    return this.chooseVersion(a2, t3);
  }, t2.calculateBitsNeeded = function(t3, e2, r2, n2) {
    return e2.getSize() + t3.getCharacterCountBits(n2) + r2.getSize();
  }, t2.getAlphanumericCode = function(e2) {
    return e2 < t2.ALPHANUMERIC_TABLE.length ? t2.ALPHANUMERIC_TABLE[e2] : -1;
  }, t2.chooseMode = function(e2, r2) {
    if (void 0 === r2 && (r2 = null), P.SJIS.getName() === r2 && this.isOnlyDoubleByteKanji(e2))
      return Wr.KANJI;
    for (var n2 = false, o2 = false, i2 = 0, a2 = e2.length; i2 < a2; ++i2) {
      var u2 = e2.charAt(i2);
      if (t2.isDigit(u2))
        n2 = true;
      else {
        if (-1 === this.getAlphanumericCode(u2.charCodeAt(0)))
          return Wr.BYTE;
        o2 = true;
      }
    }
    return o2 ? Wr.ALPHANUMERIC : n2 ? Wr.NUMERIC : Wr.BYTE;
  }, t2.isOnlyDoubleByteKanji = function(t3) {
    var e2;
    try {
      e2 = L.encode(t3, P.SJIS);
    } catch (t4) {
      return false;
    }
    var r2 = e2.length;
    if (r2 % 2 != 0)
      return false;
    for (var n2 = 0; n2 < r2; n2 += 2) {
      var o2 = 255 & e2[n2];
      if ((o2 < 129 || o2 > 159) && (o2 < 224 || o2 > 235))
        return false;
    }
    return true;
  }, t2.chooseMaskPattern = function(t3, e2, r2, n2) {
    for (var o2 = Number.MAX_SAFE_INTEGER, i2 = -1, a2 = 0; a2 < co.NUM_MASK_PATTERNS; a2++) {
      lo.buildMatrix(t3, e2, r2, a2, n2);
      var u2 = this.calculateMaskPenalty(n2);
      u2 < o2 && (o2 = u2, i2 = a2);
    }
    return i2;
  }, t2.chooseVersion = function(e2, r2) {
    for (var n2 = 1; n2 <= 40; n2++) {
      var o2 = Fr.getVersionForNumber(n2);
      if (t2.willFit(e2, o2, r2))
        return o2;
    }
    throw new ho("Data too big");
  }, t2.willFit = function(t3, e2, r2) {
    return e2.getTotalCodewords() - e2.getECBlocksForLevel(r2).getTotalECCodewords() >= (t3 + 7) / 8;
  }, t2.terminateBits = function(t3, e2) {
    var r2 = 8 * t3;
    if (e2.getSize() > r2)
      throw new ho("data bits cannot fit in the QR Code" + e2.getSize() + " > " + r2);
    for (var n2 = 0; n2 < 4 && e2.getSize() < r2; ++n2)
      e2.appendBit(false);
    var o2 = 7 & e2.getSize();
    if (o2 > 0)
      for (n2 = o2; n2 < 8; n2++)
        e2.appendBit(false);
    var i2 = t3 - e2.getSizeInBytes();
    for (n2 = 0; n2 < i2; ++n2)
      e2.appendBits(0 == (1 & n2) ? 236 : 17, 8);
    if (e2.getSize() !== r2)
      throw new ho("Bits size does not equal capacity");
  }, t2.getNumDataBytesAndNumECBytesForBlockID = function(t3, e2, r2, n2, o2, i2) {
    if (n2 >= r2)
      throw new ho("Block ID too large");
    var a2 = t3 % r2, u2 = r2 - a2, s2 = Math.floor(t3 / r2), c2 = s2 + 1, f2 = Math.floor(e2 / r2), h2 = f2 + 1, l2 = s2 - f2, d2 = c2 - h2;
    if (l2 !== d2)
      throw new ho("EC bytes mismatch");
    if (r2 !== u2 + a2)
      throw new ho("RS blocks mismatch");
    if (t3 !== (f2 + l2) * u2 + (h2 + d2) * a2)
      throw new ho("Total bytes mismatch");
    n2 < u2 ? (o2[0] = f2, i2[0] = l2) : (o2[0] = h2, i2[0] = d2);
  }, t2.interleaveWithECBytes = function(e2, r2, n2, o2) {
    var i2, a2, u2, s2;
    if (e2.getSizeInBytes() !== n2)
      throw new ho("Number of bits and data bytes does not match");
    for (var c2 = 0, f2 = 0, h2 = 0, l2 = new Array(), d2 = 0; d2 < o2; ++d2) {
      var p2 = new Int32Array(1), g2 = new Int32Array(1);
      t2.getNumDataBytesAndNumECBytesForBlockID(r2, n2, o2, d2, p2, g2);
      var y2 = p2[0], w2 = new Uint8Array(y2);
      e2.toBytes(8 * c2, w2, 0, y2);
      var _2 = t2.generateECBytes(w2, g2[0]);
      l2.push(new po(w2, _2)), f2 = Math.max(f2, y2), h2 = Math.max(h2, _2.length), c2 += p2[0];
    }
    if (n2 !== c2)
      throw new ho("Data bytes does not match offset");
    var v2 = new S();
    for (d2 = 0; d2 < f2; ++d2)
      try {
        for (var m2 = (i2 = void 0, go(l2)), A2 = m2.next(); !A2.done; A2 = m2.next()) {
          d2 < (w2 = A2.value.getDataBytes()).length && v2.appendBits(w2[d2], 8);
        }
      } catch (t3) {
        i2 = { error: t3 };
      } finally {
        try {
          A2 && !A2.done && (a2 = m2.return) && a2.call(m2);
        } finally {
          if (i2)
            throw i2.error;
        }
      }
    for (d2 = 0; d2 < h2; ++d2)
      try {
        for (var E2 = (u2 = void 0, go(l2)), C2 = E2.next(); !C2.done; C2 = E2.next()) {
          d2 < (_2 = C2.value.getErrorCorrectionBytes()).length && v2.appendBits(_2[d2], 8);
        }
      } catch (t3) {
        u2 = { error: t3 };
      } finally {
        try {
          C2 && !C2.done && (s2 = E2.return) && s2.call(E2);
        } finally {
          if (u2)
            throw u2.error;
        }
      }
    if (r2 !== v2.getSizeInBytes())
      throw new ho("Interleaving error: " + r2 + " and " + v2.getSizeInBytes() + " differ.");
    return v2;
  }, t2.generateECBytes = function(t3, e2) {
    for (var r2 = t3.length, n2 = new Int32Array(r2 + e2), o2 = 0; o2 < r2; o2++)
      n2[o2] = 255 & t3[o2];
    new io(lt.QR_CODE_FIELD_256).encode(n2, e2);
    var i2 = new Uint8Array(e2);
    for (o2 = 0; o2 < e2; o2++)
      i2[o2] = n2[r2 + o2];
    return i2;
  }, t2.appendModeInfo = function(t3, e2) {
    e2.appendBits(t3.getBits(), 4);
  }, t2.appendLengthInfo = function(t3, e2, r2, n2) {
    var o2 = r2.getCharacterCountBits(e2);
    if (t3 >= 1 << o2)
      throw new ho(t3 + " is bigger than " + ((1 << o2) - 1));
    n2.appendBits(t3, o2);
  }, t2.appendBytes = function(e2, r2, n2, o2) {
    switch (r2) {
      case Wr.NUMERIC:
        t2.appendNumericBytes(e2, n2);
        break;
      case Wr.ALPHANUMERIC:
        t2.appendAlphanumericBytes(e2, n2);
        break;
      case Wr.BYTE:
        t2.append8BitBytes(e2, n2, o2);
        break;
      case Wr.KANJI:
        t2.appendKanjiBytes(e2, n2);
        break;
      default:
        throw new ho("Invalid mode: " + r2);
    }
  }, t2.getDigit = function(t3) {
    return t3.charCodeAt(0) - 48;
  }, t2.isDigit = function(e2) {
    var r2 = t2.getDigit(e2);
    return r2 >= 0 && r2 <= 9;
  }, t2.appendNumericBytes = function(e2, r2) {
    for (var n2 = e2.length, o2 = 0; o2 < n2; ) {
      var i2 = t2.getDigit(e2.charAt(o2));
      if (o2 + 2 < n2) {
        var a2 = t2.getDigit(e2.charAt(o2 + 1)), u2 = t2.getDigit(e2.charAt(o2 + 2));
        r2.appendBits(100 * i2 + 10 * a2 + u2, 10), o2 += 3;
      } else if (o2 + 1 < n2) {
        a2 = t2.getDigit(e2.charAt(o2 + 1));
        r2.appendBits(10 * i2 + a2, 7), o2 += 2;
      } else
        r2.appendBits(i2, 4), o2++;
    }
  }, t2.appendAlphanumericBytes = function(e2, r2) {
    for (var n2 = e2.length, o2 = 0; o2 < n2; ) {
      var i2 = t2.getAlphanumericCode(e2.charCodeAt(o2));
      if (-1 === i2)
        throw new ho();
      if (o2 + 1 < n2) {
        var a2 = t2.getAlphanumericCode(e2.charCodeAt(o2 + 1));
        if (-1 === a2)
          throw new ho();
        r2.appendBits(45 * i2 + a2, 11), o2 += 2;
      } else
        r2.appendBits(i2, 6), o2++;
    }
  }, t2.append8BitBytes = function(t3, e2, r2) {
    var n2;
    try {
      n2 = L.encode(t3, r2);
    } catch (t4) {
      throw new ho(t4);
    }
    for (var o2 = 0, i2 = n2.length; o2 !== i2; o2++) {
      var a2 = n2[o2];
      e2.appendBits(a2, 8);
    }
  }, t2.appendKanjiBytes = function(t3, e2) {
    var r2;
    try {
      r2 = L.encode(t3, P.SJIS);
    } catch (t4) {
      throw new ho(t4);
    }
    for (var n2 = r2.length, o2 = 0; o2 < n2; o2 += 2) {
      var i2 = (255 & r2[o2]) << 8 & 4294967295 | 255 & r2[o2 + 1], a2 = -1;
      if (i2 >= 33088 && i2 <= 40956 ? a2 = i2 - 33088 : i2 >= 57408 && i2 <= 60351 && (a2 = i2 - 49472), -1 === a2)
        throw new ho("Invalid byte sequence");
      var u2 = 192 * (a2 >> 8) + (255 & a2);
      e2.appendBits(u2, 13);
    }
  }, t2.appendECI = function(t3, e2) {
    e2.appendBits(Wr.ECI.getBits(), 4), e2.appendBits(t3.getValue(), 8);
  }, t2.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), t2.DEFAULT_BYTE_MODE_ENCODING = P.UTF8.getName();
}();
var yo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2, n2, o2, i2, a2, u2, s2) {
    var c2 = t2.call(this, a2, u2) || this;
    if (c2.yuvData = e3, c2.dataWidth = r2, c2.dataHeight = n2, c2.left = o2, c2.top = i2, o2 + a2 > r2 || i2 + u2 > n2)
      throw new l("Crop rectangle does not fit within image data.");
    return s2 && c2.reverseHorizontal(a2, u2), c2;
  }
  yo(e2, t2), e2.prototype.getRow = function(t3, e3) {
    if (t3 < 0 || t3 >= this.getHeight())
      throw new l("Requested row is outside the image: " + t3);
    var r2 = this.getWidth();
    (null == e3 || e3.length < r2) && (e3 = new Uint8ClampedArray(r2));
    var n2 = (t3 + this.top) * this.dataWidth + this.left;
    return w.arraycopy(this.yuvData, n2, e3, 0, r2), e3;
  }, e2.prototype.getMatrix = function() {
    var t3 = this.getWidth(), e3 = this.getHeight();
    if (t3 === this.dataWidth && e3 === this.dataHeight)
      return this.yuvData;
    var r2 = t3 * e3, n2 = new Uint8ClampedArray(r2), o2 = this.top * this.dataWidth + this.left;
    if (t3 === this.dataWidth)
      return w.arraycopy(this.yuvData, o2, n2, 0, r2), n2;
    for (var i2 = 0; i2 < e3; i2++) {
      var a2 = i2 * t3;
      w.arraycopy(this.yuvData, o2, n2, a2, t3), o2 += this.dataWidth;
    }
    return n2;
  }, e2.prototype.isCropSupported = function() {
    return true;
  }, e2.prototype.crop = function(t3, r2, n2, o2) {
    return new e2(this.yuvData, this.dataWidth, this.dataHeight, this.left + t3, this.top + r2, n2, o2, false);
  }, e2.prototype.renderThumbnail = function() {
    for (var t3 = this.getWidth() / e2.THUMBNAIL_SCALE_FACTOR, r2 = this.getHeight() / e2.THUMBNAIL_SCALE_FACTOR, n2 = new Int32Array(t3 * r2), o2 = this.yuvData, i2 = this.top * this.dataWidth + this.left, a2 = 0; a2 < r2; a2++) {
      for (var u2 = a2 * t3, s2 = 0; s2 < t3; s2++) {
        var c2 = 255 & o2[i2 + s2 * e2.THUMBNAIL_SCALE_FACTOR];
        n2[u2 + s2] = 4278190080 | 65793 * c2;
      }
      i2 += this.dataWidth * e2.THUMBNAIL_SCALE_FACTOR;
    }
    return n2;
  }, e2.prototype.getThumbnailWidth = function() {
    return this.getWidth() / e2.THUMBNAIL_SCALE_FACTOR;
  }, e2.prototype.getThumbnailHeight = function() {
    return this.getHeight() / e2.THUMBNAIL_SCALE_FACTOR;
  }, e2.prototype.reverseHorizontal = function(t3, e3) {
    for (var r2 = this.yuvData, n2 = 0, o2 = this.top * this.dataWidth + this.left; n2 < e3; n2++, o2 += this.dataWidth)
      for (var i2 = o2 + t3 / 2, a2 = o2, u2 = o2 + t3 - 1; a2 < i2; a2++, u2--) {
        var s2 = r2[a2];
        r2[a2] = r2[u2], r2[u2] = s2;
      }
  }, e2.prototype.invert = function() {
    return new Y(this);
  }, e2.THUMBNAIL_SCALE_FACTOR = 2;
}(j);
var wo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2, n2, o2, i2, a2, u2) {
    var s2 = t2.call(this, r2, n2) || this;
    if (s2.dataWidth = o2, s2.dataHeight = i2, s2.left = a2, s2.top = u2, 4 === e3.BYTES_PER_ELEMENT) {
      for (var c2 = r2 * n2, f2 = new Uint8ClampedArray(c2), h2 = 0; h2 < c2; h2++) {
        var d2 = e3[h2], p2 = d2 >> 16 & 255, g2 = d2 >> 7 & 510, y2 = 255 & d2;
        f2[h2] = (p2 + g2 + y2) / 4 & 255;
      }
      s2.luminances = f2;
    } else
      s2.luminances = e3;
    if (void 0 === o2 && (s2.dataWidth = r2), void 0 === i2 && (s2.dataHeight = n2), void 0 === a2 && (s2.left = 0), void 0 === u2 && (s2.top = 0), s2.left + r2 > s2.dataWidth || s2.top + n2 > s2.dataHeight)
      throw new l("Crop rectangle does not fit within image data.");
    return s2;
  }
  wo(e2, t2), e2.prototype.getRow = function(t3, e3) {
    if (t3 < 0 || t3 >= this.getHeight())
      throw new l("Requested row is outside the image: " + t3);
    var r2 = this.getWidth();
    (null == e3 || e3.length < r2) && (e3 = new Uint8ClampedArray(r2));
    var n2 = (t3 + this.top) * this.dataWidth + this.left;
    return w.arraycopy(this.luminances, n2, e3, 0, r2), e3;
  }, e2.prototype.getMatrix = function() {
    var t3 = this.getWidth(), e3 = this.getHeight();
    if (t3 === this.dataWidth && e3 === this.dataHeight)
      return this.luminances;
    var r2 = t3 * e3, n2 = new Uint8ClampedArray(r2), o2 = this.top * this.dataWidth + this.left;
    if (t3 === this.dataWidth)
      return w.arraycopy(this.luminances, o2, n2, 0, r2), n2;
    for (var i2 = 0; i2 < e3; i2++) {
      var a2 = i2 * t3;
      w.arraycopy(this.luminances, o2, n2, a2, t3), o2 += this.dataWidth;
    }
    return n2;
  }, e2.prototype.isCropSupported = function() {
    return true;
  }, e2.prototype.crop = function(t3, r2, n2, o2) {
    return new e2(this.luminances, n2, o2, this.dataWidth, this.dataHeight, this.left + t3, this.top + r2);
  }, e2.prototype.invert = function() {
    return new Y(this);
  };
}(j);
var _o = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  _o(e2, t2), e2.forName = function(t3) {
    return this.getCharacterSetECIByName(t3);
  };
}(P);
var vo = function() {
  function t2(t3) {
    this.previous = t3;
  }
  return t2.prototype.getPrevious = function() {
    return this.previous;
  }, t2;
}();
var mo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ao = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3) || this;
    return o2.value = r2, o2.bitCount = n2, o2;
  }
  return mo(e2, t2), e2.prototype.appendTo = function(t3, e3) {
    t3.appendBits(this.value, this.bitCount);
  }, e2.prototype.add = function(t3, r2) {
    return new e2(this, t3, r2);
  }, e2.prototype.addBinaryShift = function(t3, r2) {
    return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new e2(this, t3, r2);
  }, e2.prototype.toString = function() {
    var t3 = this.value & (1 << this.bitCount) - 1;
    return t3 |= 1 << this.bitCount, "<" + I.toBinaryString(t3 | 1 << this.bitCount).substring(1) + ">";
  }, e2;
}(vo);
var Eo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3, 0, 0) || this;
    return o2.binaryShiftStart = r2, o2.binaryShiftByteCount = n2, o2;
  }
  Eo(e2, t2), e2.prototype.appendTo = function(t3, e3) {
    for (var r2 = 0; r2 < this.binaryShiftByteCount; r2++)
      (0 === r2 || 31 === r2 && this.binaryShiftByteCount <= 62) && (t3.appendBits(31, 5), this.binaryShiftByteCount > 62 ? t3.appendBits(this.binaryShiftByteCount - 31, 16) : 0 === r2 ? t3.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t3.appendBits(this.binaryShiftByteCount - 31, 5)), t3.appendBits(e3[this.binaryShiftStart + r2], 8);
  }, e2.prototype.addBinaryShift = function(t3, r2) {
    return new e2(this, t3, r2);
  }, e2.prototype.toString = function() {
    return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
  };
}(Ao);
new Ao(null, 0, 0);
var Co = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
!function(t2) {
  var e2, r2;
  try {
    for (var n2 = Co(t2), o2 = n2.next(); !o2.done; o2 = n2.next()) {
      var i2 = o2.value;
      C.fill(i2, -1);
    }
  } catch (t3) {
    e2 = { error: t3 };
  } finally {
    try {
      o2 && !o2.done && (r2 = n2.return) && r2.call(n2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  t2[0][4] = 0, t2[1][4] = 0, t2[1][0] = 28, t2[3][4] = 0, t2[2][4] = 0, t2[2][0] = 15;
}(C.createInt32Array(6, 6)), function(t2) {
  var e2 = F.getCharCode(" "), r2 = F.getCharCode("."), n2 = F.getCharCode(",");
  t2[0][e2] = 1;
  for (var o2 = F.getCharCode("Z"), i2 = F.getCharCode("A"), a2 = i2; a2 <= o2; a2++)
    t2[0][a2] = a2 - i2 + 2;
  t2[1][e2] = 1;
  var u2 = F.getCharCode("z"), s2 = F.getCharCode("a");
  for (a2 = s2; a2 <= u2; a2++)
    t2[1][a2] = a2 - s2 + 2;
  t2[2][e2] = 1;
  var c2 = F.getCharCode("9"), f2 = F.getCharCode("0");
  for (a2 = f2; a2 <= c2; a2++)
    t2[2][a2] = a2 - f2 + 2;
  t2[2][n2] = 12, t2[2][r2] = 13;
  for (var h2 = ["\0", " ", "", "", "", "", "", "", "\x07", "\b", "	", "\n", "\v", "\f", "\r", "\x1B", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""], l2 = 0; l2 < h2.length; l2++)
    t2[3][F.getCharCode(h2[l2])] = l2;
  var d2 = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
  for (l2 = 0; l2 < d2.length; l2++)
    F.getCharCode(d2[l2]) > 0 && (t2[4][F.getCharCode(d2[l2])] = l2);
}(C.createInt32Array(5, 256));
var Io = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var So = function(t2) {
  function e2(r2) {
    var n2 = t2.call(this, r2.width, r2.height) || this;
    return n2.canvas = r2, n2.buffer = e2.makeBufferFromCanvasImageData(r2), n2;
  }
  return Io(e2, t2), e2.makeBufferFromCanvasImageData = function(t3) {
    var r2 = t3.getContext("2d");
    if (!r2)
      throw new Error("Couldn't get canvas context.");
    var n2 = r2.getImageData(0, 0, t3.width, t3.height);
    return e2.toGrayscaleBuffer(n2.data, t3.width, t3.height);
  }, e2.toGrayscaleBuffer = function(t3, e3, r2) {
    for (var n2 = new Uint8ClampedArray(e3 * r2), o2 = 0, i2 = 0, a2 = t3.length; o2 < a2; o2 += 4, i2++) {
      var u2 = void 0;
      if (0 === t3[o2 + 3])
        u2 = 255;
      else
        u2 = 306 * t3[o2] + 601 * t3[o2 + 1] + 117 * t3[o2 + 2] + 512 >> 10;
      n2[i2] = u2;
    }
    return n2;
  }, e2.prototype.getRow = function(t3, e3) {
    if (t3 < 0 || t3 >= this.getHeight())
      throw new l("Requested row is outside the image: " + t3);
    var r2 = this.getWidth(), n2 = t3 * r2;
    return null === e3 ? e3 = this.buffer.slice(n2, n2 + r2) : (e3.length < r2 && (e3 = new Uint8ClampedArray(r2)), e3.set(this.buffer.slice(n2, n2 + r2))), e3;
  }, e2.prototype.getMatrix = function() {
    return this.buffer;
  }, e2.prototype.isCropSupported = function() {
    return true;
  }, e2.prototype.crop = function(e3, r2, n2, o2) {
    return t2.prototype.crop.call(this, e3, r2, n2, o2), this;
  }, e2.prototype.isRotateSupported = function() {
    return true;
  }, e2.prototype.rotateCounterClockwise = function() {
    return this.rotate(-90), this;
  }, e2.prototype.rotateCounterClockwise45 = function() {
    return this.rotate(-45), this;
  }, e2.prototype.invert = function() {
    return new Y(this);
  }, e2.prototype.getTempCanvasElement = function() {
    if (null === this.tempCanvasElement) {
      var t3 = this.canvas.ownerDocument.createElement("canvas");
      t3.width = this.canvas.width, t3.height = this.canvas.height, this.tempCanvasElement = t3;
    }
    return this.tempCanvasElement;
  }, e2.prototype.rotate = function(t3) {
    var r2 = this.getTempCanvasElement();
    if (!r2)
      throw new Error("Could not create a Canvas element.");
    var n2 = t3 * e2.DEGREE_TO_RADIANS, o2 = this.canvas.width, i2 = this.canvas.height, a2 = Math.ceil(Math.abs(Math.cos(n2)) * o2 + Math.abs(Math.sin(n2)) * i2), u2 = Math.ceil(Math.abs(Math.sin(n2)) * o2 + Math.abs(Math.cos(n2)) * i2);
    r2.width = a2, r2.height = u2;
    var s2 = r2.getContext("2d");
    if (!s2)
      throw new Error("Could not create a Convas Context element.");
    return s2.translate(a2 / 2, u2 / 2), s2.rotate(n2), s2.drawImage(this.canvas, o2 / -2, i2 / -2), this.buffer = e2.makeBufferFromCanvasImageData(r2), this;
  }, e2.DEGREE_TO_RADIANS = Math.PI / 180, e2;
}(j);
function Oo() {
  return "undefined" != typeof navigator;
}
function To() {
  return !!(Oo() && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
}
var bo = function() {
  return bo = Object.assign || function(t2) {
    for (var e2, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
      for (var o2 in e2 = arguments[r2])
        Object.prototype.hasOwnProperty.call(e2, o2) && (t2[o2] = e2[o2]);
    return t2;
  }, bo.apply(this, arguments);
};
var Ro = function(t2, e2, r2, n2) {
  return new (r2 || (r2 = Promise))(function(o2, i2) {
    function a2(t3) {
      try {
        s2(n2.next(t3));
      } catch (t4) {
        i2(t4);
      }
    }
    function u2(t3) {
      try {
        s2(n2.throw(t3));
      } catch (t4) {
        i2(t4);
      }
    }
    function s2(t3) {
      var e3;
      t3.done ? o2(t3.value) : (e3 = t3.value, e3 instanceof r2 ? e3 : new r2(function(t4) {
        t4(e3);
      })).then(a2, u2);
    }
    s2((n2 = n2.apply(t2, e2 || [])).next());
  });
};
var No = function(t2, e2) {
  var r2, n2, o2, i2, a2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return i2 = { next: u2(0), throw: u2(1), return: u2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
    return this;
  }), i2;
  function u2(i3) {
    return function(u3) {
      return function(i4) {
        if (r2)
          throw new TypeError("Generator is already executing.");
        for (; a2; )
          try {
            if (r2 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
              return o2;
            switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
              case 0:
              case 1:
                o2 = i4;
                break;
              case 4:
                return a2.label++, { value: i4[1], done: false };
              case 5:
                a2.label++, n2 = i4[1], i4 = [0];
                continue;
              case 7:
                i4 = a2.ops.pop(), a2.trys.pop();
                continue;
              default:
                if (!(o2 = a2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                  a2 = 0;
                  continue;
                }
                if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                  a2.label = i4[1];
                  break;
                }
                if (6 === i4[0] && a2.label < o2[1]) {
                  a2.label = o2[1], o2 = i4;
                  break;
                }
                if (o2 && a2.label < o2[2]) {
                  a2.label = o2[2], a2.ops.push(i4);
                  break;
                }
                o2[2] && a2.ops.pop(), a2.trys.pop();
                continue;
            }
            i4 = e2.call(t2, a2);
          } catch (t3) {
            i4 = [6, t3], n2 = 0;
          } finally {
            r2 = o2 = 0;
          }
        if (5 & i4[0])
          throw i4[1];
        return { value: i4[0] ? i4[1] : void 0, done: true };
      }([i3, u3]);
    };
  }
};
var Do = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2)
    return r2.call(t2);
  if (t2 && "number" == typeof t2.length)
    return { next: function() {
      return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
    } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Po = { delayBetweenScanAttempts: 500, delayBetweenScanSuccess: 500, tryPlayVideoTimeout: 5e3 };
var Mo = function() {
  function t2(t3, e2, r2) {
    void 0 === e2 && (e2 = /* @__PURE__ */ new Map()), void 0 === r2 && (r2 = {}), this.reader = t3, this.hints = e2, this.options = bo(bo({}, Po), r2);
  }
  return Object.defineProperty(t2.prototype, "possibleFormats", { set: function(t3) {
    this.hints.set(T.POSSIBLE_FORMATS, t3);
  }, enumerable: false, configurable: true }), t2.addVideoSource = function(t3, e2) {
    try {
      t3.srcObject = e2;
    } catch (r2) {
      t3.src = URL.createObjectURL(e2);
    }
  }, t2.mediaStreamSetTorch = function(t3, e2) {
    return Ro(this, void 0, void 0, function() {
      return No(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, t3.applyConstraints({ advanced: [{ fillLightMode: e2 ? "flash" : "off", torch: !!e2 }] })];
          case 1:
            return r2.sent(), [2];
        }
      });
    });
  }, t2.mediaStreamIsTorchCompatible = function(e2) {
    var r2, n2, o2 = e2.getVideoTracks();
    try {
      for (var i2 = Do(o2), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        var u2 = a2.value;
        if (t2.mediaStreamIsTorchCompatibleTrack(u2))
          return true;
      }
    } catch (t3) {
      r2 = { error: t3 };
    } finally {
      try {
        a2 && !a2.done && (n2 = i2.return) && n2.call(i2);
      } finally {
        if (r2)
          throw r2.error;
      }
    }
    return false;
  }, t2.mediaStreamIsTorchCompatibleTrack = function(t3) {
    try {
      return "torch" in t3.getCapabilities();
    } catch (t4) {
      return console.error(t4), console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available."), false;
    }
  }, t2.isVideoPlaying = function(t3) {
    return t3.currentTime > 0 && !t3.paused && t3.readyState > 2;
  }, t2.getMediaElement = function(t3, e2) {
    var r2 = document.getElementById(t3);
    if (!r2)
      throw new f("element with id '" + t3 + "' not found");
    if (r2.nodeName.toLowerCase() !== e2.toLowerCase())
      throw new f("element with id '" + t3 + "' must be an " + e2 + " element");
    return r2;
  }, t2.createVideoElement = function(e2) {
    if (e2 instanceof HTMLVideoElement)
      return e2;
    if ("string" == typeof e2)
      return t2.getMediaElement(e2, "video");
    if (!e2 && "undefined" != typeof document) {
      var r2 = document.createElement("video");
      return r2.width = 200, r2.height = 200, r2;
    }
    throw new Error("Couldn't get videoElement from videoSource!");
  }, t2.prepareImageElement = function(e2) {
    if (e2 instanceof HTMLImageElement)
      return e2;
    if ("string" == typeof e2)
      return t2.getMediaElement(e2, "img");
    if (void 0 === e2) {
      var r2 = document.createElement("img");
      return r2.width = 200, r2.height = 200, r2;
    }
    throw new Error("Couldn't get imageElement from imageSource!");
  }, t2.prepareVideoElement = function(e2) {
    var r2 = t2.createVideoElement(e2);
    return r2.setAttribute("autoplay", "true"), r2.setAttribute("muted", "true"), r2.setAttribute("playsinline", "true"), r2;
  }, t2.isImageLoaded = function(t3) {
    return !!t3.complete && 0 !== t3.naturalWidth;
  }, t2.createBinaryBitmapFromCanvas = function(t3) {
    var e2 = new So(t3), r2 = new W(e2);
    return new d(r2);
  }, t2.drawImageOnCanvas = function(t3, e2) {
    t3.drawImage(e2, 0, 0);
  }, t2.getMediaElementDimensions = function(t3) {
    if (t3 instanceof HTMLVideoElement)
      return { height: t3.videoHeight, width: t3.videoWidth };
    if (t3 instanceof HTMLImageElement)
      return { height: t3.naturalHeight || t3.height, width: t3.naturalWidth || t3.width };
    throw new Error("Couldn't find the Source's dimentions!");
  }, t2.createCaptureCanvas = function(e2) {
    if (!e2)
      throw new f("Cannot create a capture canvas without a media element.");
    if ("undefined" == typeof document)
      throw new Error(`The page "Document" is undefined, make sure you're running in a browser.`);
    var r2 = document.createElement("canvas"), n2 = t2.getMediaElementDimensions(e2), o2 = n2.width, i2 = n2.height;
    return r2.style.width = o2 + "px", r2.style.height = i2 + "px", r2.width = o2, r2.height = i2, r2;
  }, t2.tryPlayVideo = function(e2) {
    return Ro(this, void 0, void 0, function() {
      var r2;
      return No(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (null == e2 ? void 0 : e2.ended)
              return console.error("Trying to play video that has ended."), [2, false];
            if (t2.isVideoPlaying(e2))
              return console.warn("Trying to play video that is already playing."), [2, true];
            n2.label = 1;
          case 1:
            return n2.trys.push([1, 3, , 4]), [4, e2.play()];
          case 2:
            return n2.sent(), [2, true];
          case 3:
            return r2 = n2.sent(), console.warn("It was not possible to play the video.", r2), [2, false];
          case 4:
            return [2];
        }
      });
    });
  }, t2.createCanvasFromMediaElement = function(e2) {
    var r2 = t2.createCaptureCanvas(e2), n2 = r2.getContext("2d");
    if (!n2)
      throw new Error("Couldn't find Canvas 2D Context.");
    return t2.drawImageOnCanvas(n2, e2), r2;
  }, t2.createBinaryBitmapFromMediaElem = function(e2) {
    var r2 = t2.createCanvasFromMediaElement(e2);
    return t2.createBinaryBitmapFromCanvas(r2);
  }, t2.destroyImageElement = function(t3) {
    t3.src = "", t3.removeAttribute("src"), t3 = void 0;
  }, t2.listVideoInputDevices = function() {
    return Ro(this, void 0, void 0, function() {
      var t3, e2, r2, n2, o2, i2, a2, u2, s2, c2, f2, h2;
      return No(this, function(l2) {
        switch (l2.label) {
          case 0:
            if (!Oo())
              throw new Error("Can't enumerate devices, navigator is not present.");
            if (!To())
              throw new Error("Can't enumerate devices, method not supported.");
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 1:
            t3 = l2.sent(), e2 = [];
            try {
              for (r2 = Do(t3), n2 = r2.next(); !n2.done; n2 = r2.next())
                o2 = n2.value, "videoinput" === (i2 = "video" === o2.kind ? "videoinput" : o2.kind) && (a2 = o2.deviceId || o2.id, u2 = o2.label || "Video device " + (e2.length + 1), s2 = o2.groupId, c2 = { deviceId: a2, label: u2, kind: i2, groupId: s2 }, e2.push(c2));
            } catch (t4) {
              f2 = { error: t4 };
            } finally {
              try {
                n2 && !n2.done && (h2 = r2.return) && h2.call(r2);
              } finally {
                if (f2)
                  throw f2.error;
              }
            }
            return [2, e2];
        }
      });
    });
  }, t2.findDeviceById = function(e2) {
    return Ro(this, void 0, void 0, function() {
      var r2;
      return No(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, t2.listVideoInputDevices()];
          case 1:
            return (r2 = n2.sent()) ? [2, r2.find(function(t3) {
              return t3.deviceId === e2;
            })] : [2];
        }
      });
    });
  }, t2.cleanVideoSource = function(t3) {
    if (t3) {
      try {
        t3.srcObject = null;
      } catch (e2) {
        t3.src = "";
      }
      t3 && t3.removeAttribute("src");
    }
  }, t2.playVideoOnLoadAsync = function(e2, r2) {
    return Ro(this, void 0, void 0, function() {
      return No(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, t2.tryPlayVideo(e2)];
          case 1:
            return n2.sent() ? [2, true] : [2, new Promise(function(n3, o2) {
              var i2 = setTimeout(function() {
                t2.isVideoPlaying(e2) || (o2(false), e2.removeEventListener("canplay", a2));
              }, r2), a2 = function() {
                t2.tryPlayVideo(e2).then(function(t3) {
                  clearTimeout(i2), e2.removeEventListener("canplay", a2), n3(t3);
                });
              };
              e2.addEventListener("canplay", a2);
            })];
        }
      });
    });
  }, t2.attachStreamToVideo = function(e2, r2, n2) {
    return void 0 === n2 && (n2 = 5e3), Ro(this, void 0, void 0, function() {
      var o2;
      return No(this, function(i2) {
        switch (i2.label) {
          case 0:
            return o2 = t2.prepareVideoElement(r2), t2.addVideoSource(o2, e2), [4, t2.playVideoOnLoadAsync(o2, n2)];
          case 1:
            return i2.sent(), [2, o2];
        }
      });
    });
  }, t2._waitImageLoad = function(e2) {
    return new Promise(function(r2, n2) {
      var o2 = setTimeout(function() {
        t2.isImageLoaded(e2) || (e2.removeEventListener("load", i2), n2());
      }, 1e4), i2 = function() {
        clearTimeout(o2), e2.removeEventListener("load", i2), r2();
      };
      e2.addEventListener("load", i2);
    });
  }, t2.checkCallbackFnOrThrow = function(t3) {
    if (!t3)
      throw new f("`callbackFn` is a required parameter, you cannot capture results without it.");
  }, t2.disposeMediaStream = function(t3) {
    t3.getVideoTracks().forEach(function(t4) {
      return t4.stop();
    }), t3 = void 0;
  }, t2.prototype.decode = function(e2) {
    var r2 = t2.createCanvasFromMediaElement(e2);
    return this.decodeFromCanvas(r2);
  }, t2.prototype.decodeBitmap = function(t3) {
    return this.reader.decode(t3, this.hints);
  }, t2.prototype.decodeFromCanvas = function(e2) {
    var r2 = t2.createBinaryBitmapFromCanvas(e2);
    return this.decodeBitmap(r2);
  }, t2.prototype.decodeFromImageElement = function(e2) {
    return Ro(this, void 0, void 0, function() {
      var r2;
      return No(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (!e2)
              throw new f("An image element must be provided.");
            return r2 = t2.prepareImageElement(e2), [4, this._decodeOnLoadImage(r2)];
          case 1:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromImageUrl = function(e2) {
    return Ro(this, void 0, void 0, function() {
      var r2;
      return No(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (!e2)
              throw new f("An URL must be provided.");
            (r2 = t2.prepareImageElement()).src = e2, n2.label = 1;
          case 1:
            return n2.trys.push([1, , 3, 4]), [4, this.decodeFromImageElement(r2)];
          case 2:
            return [2, n2.sent()];
          case 3:
            return t2.destroyImageElement(r2), [7];
          case 4:
            return [2];
        }
      });
    });
  }, t2.prototype.decodeFromConstraints = function(e2, r2, n2) {
    return Ro(this, void 0, void 0, function() {
      var o2, i2;
      return No(this, function(a2) {
        switch (a2.label) {
          case 0:
            return t2.checkCallbackFnOrThrow(n2), [4, navigator.mediaDevices.getUserMedia(e2)];
          case 1:
            o2 = a2.sent(), a2.label = 2;
          case 2:
            return a2.trys.push([2, 4, , 5]), [4, this.decodeFromStream(o2, r2, n2)];
          case 3:
            return [2, a2.sent()];
          case 4:
            throw i2 = a2.sent(), t2.disposeMediaStream(o2), i2;
          case 5:
            return [2];
        }
      });
    });
  }, t2.prototype.decodeFromStream = function(e2, r2, n2) {
    return Ro(this, void 0, void 0, function() {
      var o2, i2, a2, u2, s2, c2, f2, h2, l2, d2, p2 = this;
      return No(this, function(g2) {
        switch (g2.label) {
          case 0:
            return t2.checkCallbackFnOrThrow(n2), o2 = this.options.tryPlayVideoTimeout, [4, t2.attachStreamToVideo(e2, r2, o2)];
          case 1:
            return i2 = g2.sent(), a2 = function() {
              var t3, r3;
              try {
                for (var n3 = Do(e2.getVideoTracks()), o3 = n3.next(); !o3.done; o3 = n3.next()) {
                  o3.value.stop();
                }
              } catch (e3) {
                t3 = { error: e3 };
              } finally {
                try {
                  o3 && !o3.done && (r3 = n3.return) && r3.call(n3);
                } finally {
                  if (t3)
                    throw t3.error;
                }
              }
              e2 = void 0;
            }, u2 = function() {
              a2(), t2.cleanVideoSource(i2);
            }, s2 = this.scan(i2, n2, u2), c2 = e2.getVideoTracks(), f2 = bo(bo({}, s2), { stop: function() {
              s2.stop();
            }, streamVideoConstraintsApply: function(t3, e3) {
              return Ro(this, void 0, void 0, function() {
                var r3, n3, o3, i3, a3, u3;
                return No(this, function(s3) {
                  switch (s3.label) {
                    case 0:
                      r3 = e3 ? c2.filter(e3) : c2, s3.label = 1;
                    case 1:
                      s3.trys.push([1, 6, 7, 8]), n3 = Do(r3), o3 = n3.next(), s3.label = 2;
                    case 2:
                      return o3.done ? [3, 5] : [4, o3.value.applyConstraints(t3)];
                    case 3:
                      s3.sent(), s3.label = 4;
                    case 4:
                      return o3 = n3.next(), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return i3 = s3.sent(), a3 = { error: i3 }, [3, 8];
                    case 7:
                      try {
                        o3 && !o3.done && (u3 = n3.return) && u3.call(n3);
                      } finally {
                        if (a3)
                          throw a3.error;
                      }
                      return [7];
                    case 8:
                      return [2];
                  }
                });
              });
            }, streamVideoConstraintsGet: function(t3) {
              return c2.find(t3).getConstraints();
            }, streamVideoSettingsGet: function(t3) {
              return c2.find(t3).getSettings();
            }, streamVideoCapabilitiesGet: function(t3) {
              return c2.find(t3).getCapabilities();
            } }), t2.mediaStreamIsTorchCompatible(e2) && (h2 = null == c2 ? void 0 : c2.find(function(e3) {
              return t2.mediaStreamIsTorchCompatibleTrack(e3);
            }), l2 = function(e3) {
              return Ro(p2, void 0, void 0, function() {
                return No(this, function(r3) {
                  switch (r3.label) {
                    case 0:
                      return [4, t2.mediaStreamSetTorch(h2, e3)];
                    case 1:
                      return r3.sent(), [2];
                  }
                });
              });
            }, f2.switchTorch = l2, d2 = function() {
              s2.stop(), l2(false);
            }, f2.stop = d2), [2, f2];
        }
      });
    });
  }, t2.prototype.decodeFromVideoDevice = function(e2, r2, n2) {
    return Ro(this, void 0, void 0, function() {
      var o2;
      return No(this, function(i2) {
        switch (i2.label) {
          case 0:
            return t2.checkCallbackFnOrThrow(n2), o2 = { video: e2 ? { deviceId: { exact: e2 } } : { facingMode: "environment" } }, [4, this.decodeFromConstraints(o2, r2, n2)];
          case 1:
            return [2, i2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromVideoElement = function(e2, r2) {
    return Ro(this, void 0, void 0, function() {
      var n2, o2;
      return No(this, function(i2) {
        switch (i2.label) {
          case 0:
            if (t2.checkCallbackFnOrThrow(r2), !e2)
              throw new f("A video element must be provided.");
            return n2 = t2.prepareVideoElement(e2), o2 = this.options.tryPlayVideoTimeout, [4, t2.playVideoOnLoadAsync(n2, o2)];
          case 1:
            return i2.sent(), [2, this.scan(n2, r2)];
        }
      });
    });
  }, t2.prototype.decodeFromVideoUrl = function(e2, r2) {
    return Ro(this, void 0, void 0, function() {
      var n2, o2, i2;
      return No(this, function(a2) {
        switch (a2.label) {
          case 0:
            if (t2.checkCallbackFnOrThrow(r2), !e2)
              throw new f("An URL must be provided.");
            return (n2 = t2.prepareVideoElement()).src = e2, o2 = function() {
              t2.cleanVideoSource(n2);
            }, i2 = this.options.tryPlayVideoTimeout, [4, t2.playVideoOnLoadAsync(n2, i2)];
          case 1:
            return a2.sent(), [2, this.scan(n2, r2, o2)];
        }
      });
    });
  }, t2.prototype.decodeOnceFromConstraints = function(t3, e2) {
    return Ro(this, void 0, void 0, function() {
      var r2;
      return No(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t3)];
          case 1:
            return r2 = n2.sent(), [4, this.decodeOnceFromStream(r2, e2)];
          case 2:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromStream = function(e2, r2) {
    return Ro(this, void 0, void 0, function() {
      var n2, o2;
      return No(this, function(i2) {
        switch (i2.label) {
          case 0:
            return n2 = Boolean(r2), [4, t2.attachStreamToVideo(e2, r2)];
          case 1:
            o2 = i2.sent(), i2.label = 2;
          case 2:
            return i2.trys.push([2, , 4, 5]), [4, this.scanOneResult(o2)];
          case 3:
            return [2, i2.sent()];
          case 4:
            return n2 || t2.cleanVideoSource(o2), [7];
          case 5:
            return [2];
        }
      });
    });
  }, t2.prototype.decodeOnceFromVideoDevice = function(t3, e2) {
    return Ro(this, void 0, void 0, function() {
      var r2;
      return No(this, function(n2) {
        switch (n2.label) {
          case 0:
            return r2 = { video: t3 ? { deviceId: { exact: t3 } } : { facingMode: "environment" } }, [4, this.decodeOnceFromConstraints(r2, e2)];
          case 1:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromVideoElement = function(e2) {
    return Ro(this, void 0, void 0, function() {
      var r2, n2;
      return No(this, function(o2) {
        switch (o2.label) {
          case 0:
            if (!e2)
              throw new f("A video element must be provided.");
            return r2 = t2.prepareVideoElement(e2), n2 = this.options.tryPlayVideoTimeout, [4, t2.playVideoOnLoadAsync(r2, n2)];
          case 1:
            return o2.sent(), [4, this.scanOneResult(r2)];
          case 2:
            return [2, o2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromVideoUrl = function(e2) {
    return Ro(this, void 0, void 0, function() {
      var r2, n2;
      return No(this, function(o2) {
        switch (o2.label) {
          case 0:
            if (!e2)
              throw new f("An URL must be provided.");
            (r2 = t2.prepareVideoElement()).src = e2, n2 = this.decodeOnceFromVideoElement(r2), o2.label = 1;
          case 1:
            return o2.trys.push([1, , 3, 4]), [4, n2];
          case 2:
            return [2, o2.sent()];
          case 3:
            return t2.cleanVideoSource(r2), [7];
          case 4:
            return [2];
        }
      });
    });
  }, t2.prototype.scanOneResult = function(t3, e2, r2, n2) {
    var o2 = this;
    return void 0 === e2 && (e2 = true), void 0 === r2 && (r2 = true), void 0 === n2 && (n2 = true), new Promise(function(i2, a2) {
      o2.scan(t3, function(t4, o3, u2) {
        if (t4)
          return i2(t4), void u2.stop();
        if (o3) {
          if (o3 instanceof U && e2)
            return;
          if (o3 instanceof g && r2)
            return;
          if (o3 instanceof R && n2)
            return;
          u2.stop(), a2(o3);
        }
      });
    });
  }, t2.prototype.scan = function(e2, r2, n2) {
    var o2 = this;
    t2.checkCallbackFnOrThrow(r2);
    var i2 = t2.createCaptureCanvas(e2), a2 = i2.getContext("2d");
    if (!a2)
      throw new Error("Couldn't create canvas for visual element scan.");
    var u2, s2 = function() {
      a2 = void 0, i2 = void 0;
    }, c2 = false, f2 = { stop: function() {
      c2 = true, clearTimeout(u2), s2(), n2 && n2();
    } }, h2 = function() {
      if (!c2)
        try {
          t2.drawImageOnCanvas(a2, e2);
          var l2 = o2.decodeFromCanvas(i2);
          r2(l2, void 0, f2), u2 = setTimeout(h2, o2.options.delayBetweenScanSuccess);
        } catch (t3) {
          if (r2(void 0, t3, f2), t3 instanceof g || t3 instanceof R || t3 instanceof U)
            return void (u2 = setTimeout(h2, o2.options.delayBetweenScanAttempts));
          s2(), n2 && n2(t3);
        }
    };
    return h2(), f2;
  }, t2.prototype._decodeOnLoadImage = function(e2) {
    return Ro(this, void 0, void 0, function() {
      return No(this, function(r2) {
        switch (r2.label) {
          case 0:
            return t2.isImageLoaded(e2) ? [3, 2] : [4, t2._waitImageLoad(e2)];
          case 1:
            r2.sent(), r2.label = 2;
          case 2:
            return [2, this.decode(e2)];
        }
      });
    });
  }, t2;
}();
var Bo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    return t2.call(this, new Mt(), e3, r2) || this;
  }
  Bo(e2, t2);
}(Mo);
var Lo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    return t2.call(this, new fr(e3), e3, r2) || this;
  }
  Lo(e2, t2);
}(Mo);
var Fo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    return t2.call(this, new Or(), e3, r2) || this;
  }
  Fo(e2, t2);
}(Mo);
var ko = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    var n2 = this, o2 = new $n();
    return o2.setHints(e3), (n2 = t2.call(this, o2, e3, r2) || this).reader = o2, n2;
  }
  ko(e2, t2), Object.defineProperty(e2.prototype, "possibleFormats", { set: function(t3) {
    this.hints.set(T.POSSIBLE_FORMATS, t3), this.reader.setHints(this.hints);
  }, enumerable: false, configurable: true }), e2.prototype.decodeBitmap = function(t3) {
    return this.reader.decodeWithState(t3);
  }, e2.prototype.setHints = function(t3) {
    this.hints = t3, this.reader.setHints(this.hints);
  };
}(Mo);
var xo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    return t2.call(this, new Kn(), e3, r2) || this;
  }
  xo(e2, t2);
}(Mo);
var Vo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3)
        e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Uo = function(t2) {
  function e2(e3, r2) {
    return t2.call(this, new an(), e3, r2) || this;
  }
  return Vo(e2, t2), e2;
}(Mo);
var Ho = function(t2, e2, r2) {
  var n2 = typeof t2 === r2;
  return n2 || console.warn('[ReactQrReader]: Expected "'.concat(e2, '" to be a of type "').concat(r2, '".')), n2;
};
var Go = function(t2) {
  var n2 = t2.scanDelay, o2 = t2.constraints, i2 = t2.onResult, a2 = t2.videoId, u2 = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(function() {
    var t3 = new Uo(null, { delayBetweenScanAttempts: n2 });
    if (!function() {
      var t4 = "undefined" != typeof navigator && !!navigator.mediaDevices;
      return t4 || console.warn('[ReactQrReader]: MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"'), t4;
    }() && Ho(i2, "onResult", "function")) {
      i2(null, new Error('MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"'), t3);
    }
    return Ho(o2, "constraints", "object") && t3.decodeFromConstraints({ video: o2 }, a2, function(e2, r2) {
      Ho(i2, "onResult", "function") && i2(e2, r2, t3);
    }).then(function(t4) {
      return u2.current = t4;
    }).catch(function(e2) {
      Ho(i2, "onResult", "function") && i2(null, e2, t3);
    }), function() {
      var t4;
      null === (t4 = u2.current) || void 0 === t4 || t4.stop();
    };
  }, []);
};
var Xo = function() {
  return Xo = Object.assign || function(t2) {
    for (var e2, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
      for (var o2 in e2 = arguments[r2])
        Object.prototype.hasOwnProperty.call(e2, o2) && (t2[o2] = e2[o2]);
    return t2;
  }, Xo.apply(this, arguments);
};
var Wo = { container: { width: "100%", paddingTop: "100%", overflow: "hidden", position: "relative" }, video: { top: 0, left: 0, width: "100%", height: "100%", display: "block", overflow: "hidden", position: "absolute", transform: void 0 } };
var jo = function(e2) {
  var r2 = e2.videoContainerStyle, n2 = e2.containerStyle, o2 = e2.videoStyle, i2 = e2.constraints, a2 = e2.ViewFinder, u2 = e2.scanDelay, s2 = e2.className, c2 = e2.onResult, f2 = e2.videoId;
  return Go({ constraints: i2, scanDelay: u2, onResult: c2, videoId: f2 }), t.createElement("section", { className: s2, style: n2 }, t.createElement("div", { style: Xo(Xo({}, Wo.container), r2) }, !!a2 && t.createElement(a2, null), t.createElement("video", { muted: true, id: f2, style: Xo(Xo(Xo({}, Wo.video), o2), { transform: "user" === (null == i2 ? void 0 : i2.facingMode) && "scaleX(-1)" }) })));
};
jo.displayName = "QrReader", jo.defaultProps = { constraints: { facingMode: "user" }, videoId: "video", scanDelay: 500 };
export {
  jo as QrReader,
  Go as useQrReader
};
//# sourceMappingURL=react-qr-reader.js.map

var je = Object.defineProperty;
var qe = (e, n, a) => n in e ? je(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a;
var B = (e, n, a) => (qe(e, typeof n != "symbol" ? n + "" : n, a), a);
import { defineComponent as pe, reactive as Ge, computed as p, watch as Qe, openBlock as f, createElementBlock as D, normalizeClass as Y, unref as P, renderSlot as $, createElementVNode as M, createCommentVNode as q, Fragment as L, renderList as A, toDisplayString as I, mergeProps as Je, withModifiers as O, normalizeStyle as fe, createTextVNode as Ke } from "vue";
const U = () => Q(/* @__PURE__ */ new Date()), he = (e, n, a) => {
  switch (n) {
    case "year":
      return new Date(e.getFullYear(), 0);
    case "month":
      return new Date(e.getFullYear(), e.getMonth());
    case "week":
      return E(e, a);
    default:
      return e;
  }
}, De = (e, n) => {
  const a = Math.ceil((G(e, n) + 1) / 7);
  return [...Array(a)].map((i, d) => F(e, d * 7));
}, Xe = (e) => [...Array(7)].map((n, a) => F(e, a)), Ze = (e, n, a, i, d) => i === "week" ? De(n, a) : De(E(e, d), ye(e)), F = (e, n) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + n, e.getHours(), e.getMinutes(), e.getSeconds()), E = (e, n) => F(e, (n - e.getDay() - 7) % -7), xe = (e, n) => F(E(e, n), 7), ve = (e, n) => new Date(e.getFullYear(), e.getMonth() + n, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()), W = (e) => new Date(e.getFullYear(), e.getMonth()), ye = (e) => F(ve(W(e), 1), -1), _e = (e) => Math.ceil(e.getDate() / 7), et = (e, n, a) => new Date(e.getFullYear() + (n == "year" ? a : 0), e.getMonth() + (n == "month" ? a : 0), e.getDate() + (n == "week" ? a * 7 : 0)), ae = (e) => ("0" + String(e.getMonth() + 1)).slice(-2), ne = (e) => ("0" + String(e.getDate())).slice(-2), be = (e) => e.getFullYear() + "-" + ae(e), tt = (e) => be(e) + "-" + ne(e), at = (e) => ae(e) + "-" + ne(e), nt = (e, n, a) => {
  if (e.getHours() === 0 && e.getMinutes() === 0 && e.getSeconds() === 0)
    return "";
  if (!J()) {
    var i = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4;
    return new Date(e.getTime() - i).toISOString().slice(11, 16);
  }
  return e.toLocaleTimeString(n, a);
}, rt = (e, n, a, i) => {
  const d = e.getFullYear() === n.getFullYear(), c = Pe(e, n), k = !(a === "year") && !(a === "month");
  let m = [];
  return m.push(i[e.getMonth()]), k && (m.push(" "), m.push(e.getDate())), d || (m.push(k ? ", " : " "), m.push(e.getFullYear())), !c || !d ? (m.push(" – "), c || m.push(i[n.getMonth()]), k && m.push(" ")) : k && m.push(" – "), k ? (m.push(n.getDate()), m.push(", ")) : m.push(" "), m.push(n.getFullYear()), m.join("");
}, G = (e, n) => {
  const a = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()), i = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
  return (a - i) / 864e5;
}, st = (e, n) => !!e && !!n && G(e, n) === 0, ot = (e, n) => !!e && !!n && e.getTime() === n.getTime(), Pe = (e, n) => !!e && !!n && e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth(), it = (e) => W(e) < W(U()), lt = (e) => W(e) > W(U()), dt = (e) => Q(e) > U(), ut = (e) => Q(e) < U(), ct = (e) => e.getMonth() !== F(e, 7).getMonth(), gt = (e) => e.getMonth() !== F(e, 1).getMonth(), Me = (e) => {
  let n = [...Array(7)].map((a) => 0);
  return e.split(/\D/, 7).forEach((a, i) => n[i] = Number(a)), n[1]--, new Date(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
}, te = (e) => typeof e == "string" ? Me(e) : new Date(e), Q = (e) => {
  const n = new Date(e);
  return n.setHours(0, 0, 0, 0), n;
}, mt = (e) => e.substring(0, 2), J = () => typeof Intl < "u", ft = (e, n) => {
  if (!J())
    return [...Array(12)].map((i) => "");
  const a = new Intl.DateTimeFormat(e, { month: n });
  return [...Array(12)].map((i, d) => a.format(new Date(2017, d, 1)));
}, Dt = (e, n, a) => {
  if (!J())
    return [...Array(7)].map((d) => "");
  const i = new Intl.DateTimeFormat(e, { weekday: n });
  return [...Array(7)].map((d, c) => i.format(new Date(2017, 0, (c + 1 + a) % 7)));
}, pt = () => typeof navigator > "u" ? "unk" : (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language).toLowerCase(), ht = (e, n) => {
  const a = e.classes ? [...e.classes] : [];
  return n && a.push("isHovered"), {
    originalItem: e,
    startDate: te(e.startDate),
    // For an item without an end date, the end date is the start date
    endDate: te(e.endDate || e.startDate),
    classes: a,
    // Items without a title are untitled
    title: e.title || "Untitled",
    // An ID is *required*. Auto-generating leads to weird bugs because these are used as keys and passed in items
    id: e.id,
    // Pass the URL along
    url: e.url,
    // Use the item's title as the tooltip if the tooltip is undefined or null (but not if it is blank -- use blank to essentially disable tooltips)
    tooltip: e.tooltip ?? e.title
  };
}, vt = (e, n, a) => {
  const i = new Date(Math.max(e.getTime(), n.getTime())), d = new Date(i.getFullYear(), 0, 1), c = F(d, (11 - d.getDay()) % 7), C = he(c, "week", a), v = E(i, a);
  return 1 + Math.floor(G(C, v) / 7);
}, yt = (e, n) => {
  const a = e.getTime() - n.getTime();
  return Math.floor(a / (7 * 24 * 60 * 60 * 1e3)) + 1;
}, r = {
  addDays: F,
  addMonths: ve,
  beginningOfMonth: W,
  endOfMonth: ye,
  beginningOfPeriod: he,
  beginningOfWeek: E,
  dateOnly: Q,
  dayDiff: G,
  daysOfWeek: Xe,
  weeksOfMonth: Ze,
  endOfWeek: xe,
  formattedPeriod: rt,
  formattedTime: nt,
  fromIsoStringToLocalDate: Me,
  getDefaultBrowserLocale: pt,
  getFormattedMonthNames: ft,
  getFormattedWeekdayNames: Dt,
  incrementPeriod: et,
  instanceOfMonth: _e,
  isFutureMonth: lt,
  isInFuture: dt,
  isInPast: ut,
  isLastDayOfMonth: gt,
  isLastInstanceOfMonth: ct,
  isoMonthDay: at,
  isoYearMonth: be,
  isoYearMonthDay: tt,
  isPastMonth: it,
  isSameDate: st,
  isSameDateTime: ot,
  isSameMonth: Pe,
  languageCode: mt,
  normalizeItem: ht,
  paddedDay: ne,
  paddedMonth: ae,
  supportsIntl: J,
  today: U,
  toLocalDate: te,
  getISOWeekNumber: vt,
  getWeekNumberInPeriod: yt
};
class bt {
  constructor() {
    B(this, "currentDragItem");
    B(this, "dateSelectionOrigin");
    B(this, "currentHoveredItemId", "");
    B(this, "CalendarMath", r);
  }
}
const Pt = { class: "cv-header-days" }, Mt = {
  key: 0,
  class: "cv-weeknumber"
}, kt = ["aria-multiselectable"], Ot = {
  key: 0,
  class: "cv-monthheading-row"
}, It = { class: "cv-monthheading" }, Ct = {
  key: 0,
  class: "cv-weeknumber"
}, Ft = { class: "cv-weekdays" }, Tt = ["draggable", "onClick", "onDragstart", "onDrop", "onDragover", "onDragenter", "onDragleave"], Lt = { class: "cv-day-number" }, $t = ["draggable", "aria-grabbed", "title", "onDragstart", "onMouseenter", "onMouseleave", "onClick", "innerHTML"], St = ["draggable", "aria-grabbed", "title", "onDragstart", "onMouseenter", "onMouseleave", "onClick"], Rt = /* @__PURE__ */ pe({
  __name: "CalendarView",
  props: {
    showDate: { default: void 0 },
    displayPeriodUom: { default: "month" },
    displayPeriodCount: { default: 1 },
    displayWeekNumbers: { type: Boolean, default: !1 },
    locale: { default: void 0 },
    monthNameFormat: { default: "long" },
    weekdayNameFormat: { default: "short" },
    showTimes: { type: Boolean, default: !1 },
    timeFormatOptions: { default: () => ({}) },
    disablePast: { type: Boolean, default: !1 },
    disableFuture: { type: Boolean, default: !1 },
    enableDateSelection: { type: Boolean, default: !1 },
    selectionStart: { default: void 0 },
    selectionEnd: { default: void 0 },
    enableDragDrop: { type: Boolean, default: !1 },
    startingDayOfWeek: { default: 0 },
    items: { default: () => [] },
    dateClasses: { default: () => ({}) },
    itemTop: { default: "1.4em" },
    itemContentHeight: { default: "1.4em" },
    itemBorderHeight: { default: "2px" },
    periodChangedCallback: { type: Function, default: void 0 },
    currentPeriodLabel: { default: "" },
    currentPeriodLabelIcons: { default: "⇤-⇥" },
    doEmitItemMouseEvents: { type: Boolean, default: !1 },
    enableHtmlTitles: { type: Boolean, default: !0 }
  },
  emits: ["period-changed", "click-date", "click-item", "item-mouseenter", "item-mouseleave", "drag-start", "drag-over-date", "drag-enter-date", "drag-leave-date", "drop-on-date", "date-selection", "date-selection-start", "date-selection-finish"],
  setup(e, { emit: n }) {
    const a = e, i = n, d = Ge(new bt()), c = p(() => a.locale || r.getDefaultBrowserLocale()), C = p(() => a.showDate ? r.dateOnly(a.showDate) : r.today()), v = p(() => r.beginningOfPeriod(C.value, a.displayPeriodUom, a.startingDayOfWeek)), k = p(
      () => r.addDays(r.incrementPeriod(v.value, a.displayPeriodUom, a.displayPeriodCount), -1)
    ), m = p(() => r.beginningOfWeek(v.value, a.startingDayOfWeek)), K = p(() => r.endOfWeek(k.value, a.startingDayOfWeek)), ke = p(() => {
      const t = r.beginningOfMonth(r.addDays(m.value, 7)), s = Math.max(Math.floor(r.dayDiff(t, K.value) / 30), 1);
      return [...Array(s)].map((l, u) => r.addMonths(t, u));
    }), R = p(() => r.getFormattedMonthNames(c.value, a.monthNameFormat)), Oe = p(() => r.getFormattedWeekdayNames(c.value, a.weekdayNameFormat, a.startingDayOfWeek)), X = p(() => a.items ? a.items.map((t) => r.normalizeItem(t, t.id === d.currentHoveredItemId)) : []), Z = p(() => r.beginningOfPeriod(r.today(), a.displayPeriodUom, a.startingDayOfWeek)), Ie = p(
      () => r.addDays(r.incrementPeriod(Z.value, a.displayPeriodUom, a.displayPeriodCount), -1)
    ), Ce = p(() => r.formattedPeriod(v.value, k.value, a.displayPeriodUom, R.value)), Fe = p(() => {
      const t = Z.value, s = v.value;
      return a.currentPeriodLabel ? a.currentPeriodLabel === "icons" ? a.currentPeriodLabelIcons[Math.sign(t.getTime() - s.getTime()) + 1] : a.currentPeriodLabel : r.formattedPeriod(t, Ie.value, a.displayPeriodUom, R.value);
    }), Te = p(
      () => ({
        // Dates for UI navigation
        previousYear: S(-12),
        previousPeriod: S(-1),
        nextPeriod: S(1),
        previousFullPeriod: S(-a.displayPeriodCount),
        nextFullPeriod: S(a.displayPeriodCount),
        nextYear: S(12),
        currentPeriod: Z.value,
        currentPeriodLabel: Fe.value,
        // Dates for header display
        periodStart: v.value,
        periodEnd: k.value,
        // Extra information that could be useful to a custom header
        displayLocale: c.value,
        displayFirstDate: m.value,
        displayLastDate: K.value,
        monthNames: R.value,
        fixedItems: X.value,
        periodLabel: Ce.value
      })
    ), Le = p(() => ({
      periodStart: v,
      periodEnd: k,
      displayFirstDate: m,
      displayLastDate: K
    })), x = p(() => a.displayPeriodUom === "year");
    Qe(
      () => Le,
      (t) => {
        a.periodChangedCallback && (i("period-changed"), a.periodChangedCallback(t, "watch"));
      },
      { immediate: !0, deep: !0 }
    );
    const $e = (t, s) => {
      a.disablePast && r.isInPast(t) || a.disableFuture && r.isInFuture(t) || i("click-date", t, le(t, t), s);
    }, re = (t, s) => i("click-item", t, s), N = (t) => "dow" + (t + a.startingDayOfWeek) % 7, S = (t) => {
      const s = r.incrementPeriod(v.value, a.displayPeriodUom, t), l = r.incrementPeriod(s, a.displayPeriodUom, a.displayPeriodCount);
      return a.disablePast && l <= r.today() || a.disableFuture && s > r.today() ? null : s;
    }, se = (t, s) => {
      d.currentHoveredItemId = t.id, a.doEmitItemMouseEvents && i("item-mouseenter", t, s);
    }, oe = (t, s) => {
      d.currentHoveredItemId = "", a.doEmitItemMouseEvents && i("item-mouseleave", t, s);
    }, Se = (t, s) => {
      var u, h;
      if (!a.enableDateSelection)
        return !1;
      (u = s.dataTransfer) == null || u.setData("text", t.toString());
      let l = new Image();
      return l.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", (h = s.dataTransfer) == null || h.setDragImage(l, 10, 10), d.dateSelectionOrigin = t, i("date-selection-start", _(t), s), !0;
    }, ie = (t, s) => {
      var l;
      return a.enableDragDrop ? ((l = s.dataTransfer) == null || l.setData("text", t.id), d.currentDragItem = t, d.dateSelectionOrigin = void 0, i("drag-start", t, s), !0) : !1;
    }, _ = (t) => t <= d.dateSelectionOrigin ? [t, d.dateSelectionOrigin] : [d.dateSelectionOrigin, t], we = (t, s) => {
      a.enableDragDrop && i("drag-over-date", d.currentDragItem, t, s);
    }, Ye = (t, s) => {
      if (a.enableDateSelection && d.dateSelectionOrigin && i("date-selection", _(t), s), !a.enableDragDrop)
        return;
      i("drag-enter-date", d.currentDragItem, t, s), s.target.classList.add("draghover");
    }, Ae = (t, s) => {
      if (a.enableDateSelection && a.selectionStart || !a.enableDragDrop)
        return;
      i("drag-leave-date", d.currentDragItem, t, s), s.target.classList.remove("draghover");
    }, We = (t, s) => {
      if (a.enableDateSelection && d.dateSelectionOrigin) {
        i("date-selection-finish", _(t), s);
        return;
      }
      if (!a.enableDragDrop)
        return;
      i("drop-on-date", d.currentDragItem, t, s), s.target.classList.remove("draghover");
    }, Ne = (t, s) => t.startDate < s.startDate ? -1 : s.startDate < t.startDate ? 1 : t.endDate > s.endDate ? -1 : s.endDate > t.endDate ? 1 : t.id < s.id ? -1 : 1, le = (t, s) => X.value.filter((l) => l.endDate >= t && r.dateOnly(l.startDate) <= s, this).sort(Ne), He = (t) => !!X.value.find((s) => s.endDate >= t && r.dateOnly(s.startDate) <= t), de = (t) => !(!a.selectionStart || !a.selectionEnd || t < r.dateOnly(a.selectionStart) || t > r.dateOnly(a.selectionEnd)), ue = (t, s) => {
      const l = r.addDays(r.endOfWeek(t, a.startingDayOfWeek), -1), u = r.endOfMonth(s), h = x.value, w = h ? new Date(Math.max(s.getTime(), t.getTime())) : t, o = h ? new Date(Math.min(u.getTime(), r.addDays(t, 6).getTime())) : l, g = le(w, o), y = [], ee = [[], [], [], [], [], [], []];
      if (!g)
        return y;
      for (let z = 0; z < g.length; z++) {
        const b = Object.assign({}, g[z], {
          classes: [...g[z].classes],
          itemRow: 0
        }), ge = b.startDate < w, H = ge ? r.dayDiff(t, w) : r.dayDiff(t, b.startDate), Re = r.addDays(t, H), Ve = r.dayDiff(Re, b.endDate) + 1, ze = r.dayDiff(t, o) + 1 - H, me = Math.max(1, Math.min(ze, Ve));
        ge && b.classes.push("continued"), b.endDate > o && b.classes.push("toBeContinued"), r.isInPast(b.endDate) && b.classes.push("past"), b.originalItem.url && b.classes.push("hasUrl");
        for (let T = 0; T < 7; T++)
          if (T === H) {
            let j = 0;
            for (; ee[T][j]; )
              j++;
            b.itemRow = j, ee[T][j] = !0;
          } else
            T < H + me && (ee[T][b.itemRow] = !0);
        b.classes.push(`offset${H}`), b.classes.push(`span${me}`), y.push(b);
      }
      return y;
    }, Be = (t) => {
      const s = '<span class="startTime">' + r.formattedTime(t.startDate, c.value, a.timeFormatOptions) + "</span>";
      let l = "";
      return r.isSameDateTime(t.startDate, t.endDate) || (l = '<span class="endTime">' + r.formattedTime(t.endDate, c.value, a.timeFormatOptions) + "</span>"), s + l;
    }, ce = (t) => a.showTimes ? Be(t) + " " + t.title : t.title, V = (t) => {
      const s = t.itemRow, l = a.itemContentHeight, u = a.itemBorderHeight;
      return `calc(${a.itemTop} + ${s}*${l} + ${s}*${u})`;
    }, Ue = (t, s) => {
      const l = r.isSameMonth(t, s), u = x.value && !l;
      return {
        today: !u && r.isSameDate(t, r.today()),
        outsideOfMonth: !l,
        past: !u && r.isInPast(t),
        future: !u && r.isInFuture(t),
        last: !u && r.isLastDayOfMonth(t),
        lastInstance: !u && r.isLastInstanceOfMonth(t),
        hasItems: !u && He(t),
        selectionStart: !u && r.isSameDate(t, a.selectionStart),
        selectionEnd: !u && r.isSameDate(t, a.selectionEnd),
        [`d${r.isoYearMonthDay(t)}`]: !u,
        [`d${r.isoMonthDay(t)}`]: !u,
        [`d${r.paddedDay(t)}`]: !u,
        [`instance${r.instanceOfMonth(t)}`]: !u
      };
    }, Ee = (t, s) => {
      const l = r.isSameMonth(t, s);
      return x.value && !l ? { inert: !0 } : {
        "aria-grabbed": a.enableDateSelection ? de(t) : void 0,
        "aria-label": t.getDate().toString(),
        "aria-selected": de(t),
        "aria-dropeffect": a.enableDragDrop && d.currentDragItem ? "move" : a.enableDateSelection && d.dateSelectionOrigin ? "execute" : "none"
      };
    };
    return (t, s) => (f(), D("div", {
      "aria-label": "Calendar",
      class: Y([
        "cv-wrapper",
        `locale-${P(r).languageCode(c.value)}`,
        `locale-${c.value}`,
        `y${v.value.getFullYear()}`,
        `m${P(r).paddedMonth(v.value)}`,
        `period-${t.displayPeriodUom}`,
        `periodCount-${t.displayPeriodCount}`,
        {
          past: P(r).isPastMonth(v.value),
          future: P(r).isFutureMonth(v.value),
          noIntl: !P(r).supportsIntl
        }
      ])
    }, [
      $(t.$slots, "header", { headerProps: Te.value }),
      M("div", Pt, [
        t.displayWeekNumbers ? (f(), D("div", Mt)) : q("", !0),
        (f(!0), D(L, null, A(Oe.value, (l, u) => $(t.$slots, "day-header", {
          index: N(u),
          label: l
        }, () => [
          (f(), D("div", {
            key: N(u),
            class: Y([N(u), "cv-header-day"])
          }, I(l), 3))
        ])), 256))
      ]),
      M("div", {
        "aria-multiselectable": t.enableDateSelection,
        class: "cv-months"
      }, [
        (f(!0), D(L, null, A(ke.value, (l, u) => (f(), D("div", {
          key: `${u}-month`,
          class: Y(["cv-month", `month${u + 1}`, `ws${P(r).isoYearMonth(l)}`])
        }, [
          t.displayPeriodUom === "year" ? (f(), D("div", Ot, [
            M("h2", It, I(R.value[u]), 1)
          ])) : q("", !0),
          (f(!0), D(L, null, A(P(r).weeksOfMonth(l, v.value, k.value, t.displayPeriodUom, t.startingDayOfWeek), (h, w) => (f(), D("div", {
            key: `${w}-week`,
            class: Y(["cv-week", `week${w + 1}`, `ws${P(r).isoYearMonthDay(h)}`])
          }, [
            t.displayWeekNumbers ? (f(), D("div", Ct, [
              $(t.$slots, "week-number", {
                date: h,
                numberInYear: P(r).getISOWeekNumber(h, l, t.startingDayOfWeek),
                numberInPeriod: P(r).getWeekNumberInPeriod(h, m.value)
              }, () => [
                M("span", null, I(P(r).getISOWeekNumber(h, l, t.startingDayOfWeek)), 1)
              ])
            ])) : q("", !0),
            M("div", Ft, [
              (f(!0), D(L, null, A(P(r).daysOfWeek(h), (o, g) => (f(), D("div", Je({
                key: N(g),
                draggable: t.enableDateSelection,
                class: [
                  "cv-day",
                  N(g),
                  Ue(o, l),
                  ...t.dateClasses && t.dateClasses[P(r).isoYearMonthDay(o)] || []
                ]
              }, Ee(o, l), {
                onClick: (y) => $e(o, y),
                onDragstart: (y) => Se(o, y),
                onDrop: O((y) => We(o, y), ["prevent"]),
                onDragover: O((y) => we(o, y), ["prevent"]),
                onDragenter: O((y) => Ye(o, y), ["prevent"]),
                onDragleave: O((y) => Ae(o, y), ["prevent"])
              }), [
                t.displayPeriodUom !== "year" || P(r).isSameMonth(o, l) ? (f(), D(L, { key: 0 }, [
                  M("div", Lt, I(o.getDate()), 1),
                  $(t.$slots, "day-content", { day: o })
                ], 64)) : q("", !0)
              ], 16, Tt))), 128)),
              a.enableHtmlTitles ? (f(!0), D(L, { key: 0 }, A(ue(h, l), (o) => $(t.$slots, "item", {
                value: o,
                weekStartDate: h,
                top: V(o)
              }, () => [
                (f(), D("div", {
                  key: o.id,
                  draggable: t.enableDragDrop,
                  "aria-grabbed": t.enableDragDrop ? o == d.currentDragItem : void 0,
                  class: Y([o.classes, "cv-item"]),
                  title: o.tooltip || o.title,
                  style: fe(`top:${V(o)};${o.originalItem.style}`),
                  onDragstart: (g) => ie(o, g),
                  onMouseenter: (g) => se(o, g),
                  onMouseleave: (g) => oe(o, g),
                  onClick: O((g) => re(o, g), ["stop"]),
                  innerHTML: ce(o)
                }, null, 46, $t))
              ])), 256)) : (f(!0), D(L, { key: 1 }, A(ue(h, l), (o) => $(t.$slots, "item", {
                value: o,
                weekStartDate: h,
                top: V(o)
              }, () => [
                (f(), D("div", {
                  key: o.id,
                  draggable: t.enableDragDrop,
                  "aria-grabbed": t.enableDragDrop ? o == d.currentDragItem : void 0,
                  class: Y([o.classes, "cv-item"]),
                  title: o.tooltip || o.title,
                  style: fe(`top:${V(o)};${o.originalItem.style}`),
                  onDragstart: (g) => ie(o, g),
                  onMouseenter: (g) => se(o, g),
                  onMouseleave: (g) => oe(o, g),
                  onClick: O((g) => re(o, g), ["stop"])
                }, I(ce(o)), 47, St))
              ])), 256))
            ])
          ], 2))), 128))
        ], 2))), 128))
      ], 8, kt)
    ], 2));
  }
}), wt = { class: "cv-header" }, Yt = { class: "cv-header-nav" }, At = ["disabled"], Wt = ["disabled", "innerHTML"], Nt = ["disabled"], Ht = ["disabled"], Bt = { class: "periodLabel" }, Vt = /* @__PURE__ */ pe({
  __name: "CalendarViewHeader",
  props: {
    headerProps: {
      type: Object,
      required: !0
    },
    previousYearLabel: { type: String, default: "<<" },
    previousPeriodLabel: { type: String, default: "<" },
    nextPeriodLabel: { type: String, default: ">" },
    nextYearLabel: { type: String, default: ">>" }
  },
  emits: ["input"],
  setup(e, { emit: n }) {
    const a = n, i = (d) => a("input", d);
    return (d, c) => (f(), D("div", wt, [
      M("div", Yt, [
        M("button", {
          disabled: !e.headerProps.previousYear,
          class: "previousYear",
          "aria-label": "Previous Year",
          onClick: c[0] || (c[0] = O((C) => i(e.headerProps.previousYear), ["prevent"]))
        }, I(e.previousYearLabel), 9, At),
        M("button", {
          disabled: !e.headerProps.previousPeriod,
          class: "previousPeriod",
          "aria-label": "Previous Period",
          onClick: c[1] || (c[1] = O((C) => i(e.headerProps.previousPeriod), ["prevent"])),
          innerHTML: e.previousPeriodLabel
        }, null, 8, Wt),
        M("button", {
          class: "currentPeriod",
          "aria-label": "Current Period",
          onClick: c[2] || (c[2] = O((C) => i(e.headerProps.currentPeriod), ["prevent"]))
        }, I(e.headerProps.currentPeriodLabel), 1),
        M("button", {
          disabled: !e.headerProps.nextPeriod,
          class: "nextPeriod",
          "aria-label": "Next Period",
          onClick: c[3] || (c[3] = O((C) => i(e.headerProps.nextPeriod), ["prevent"]))
        }, I(e.nextPeriodLabel), 9, Nt),
        M("button", {
          disabled: !e.headerProps.nextYear,
          class: "nextYear",
          "aria-label": "Next Year",
          onClick: c[4] || (c[4] = O((C) => i(e.headerProps.nextYear), ["prevent"]))
        }, I(e.nextYearLabel), 9, Ht)
      ]),
      M("div", Bt, [
        $(d.$slots, "label", {}, () => [
          Ke(I(e.headerProps.periodLabel), 1)
        ])
      ])
    ]));
  }
});
export {
  r as CalendarMath,
  Rt as CalendarView,
  Vt as CalendarViewHeader
};

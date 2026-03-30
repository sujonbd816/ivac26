const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/mnd26uwv-BYCCyGzc.js", "assets/mnd26uwv-CV7sMzLS.js", "assets/mnd26uwv-qMUM8eVv.js", "assets/mnd26uwv-D462xa3E.js", "assets/mnd26uwv-CY66uo5Z.js", "assets/mnd26uwv-BCY7GOqj.js", "assets/mnd26uwv-DF8zGAdS.js", "assets/mnd26uwv-BDbKcF2r.js", "assets/mnd26uwv-c0g7rcyp.js", "assets/mnd26uwv-CUic9bId.js", "assets/mnd26uwv-BWQC_rxg.js", "assets/mnd26uwv-BWCdsh-p.js", "assets/mnd26uwv-C4NAkwWR.js", "assets/mnd26uwv-CDvOhvBs.js", "assets/mnd26uwv-CCrE87uS.js", "assets/mnd26uwv-r3hX8Zb0.js", "assets/mnd26uwv-CLdqcV7p.js", "assets/mnd26uwv-CUCyxHTa.js", "assets/mnd26uwv-BD1IwScu.js", "assets/mnd26uwv-DuUOWZD4.js", "assets/mnd26uwv-DlKTwYmW.js", "assets/mnd26uwv-D84qgYy9.js", "assets/mnd26uwv-DO95xw1G.js", "assets/mnd26uwv-CDSfMIdE.js", "assets/mnd26uwv-CvfQmd96.js", "assets/mnd26uwv-BnG51rWb.js", "assets/mnd26uwv-DW0q8GR8.js", "assets/mnd26uwv-Bic9aujL.js", "assets/mnd26uwv-QaLeIwJb.js", "assets/mnd26uwv-hLxbHcfV.js", "assets/mnd26uwv-E6mr9ZrS.js", "assets/mnd26uwv-BcPWN6LC.js", "assets/mnd26uwv-DTjcsOJ4.js", "assets/mnd26uwv-BkEb1jyZ.js", "assets/mnd26uwv-CpigsgIN.js", "assets/mnd26uwv-BfWgOwmi.js", "assets/mnd26uwv-etBkSpiQ.js", "assets/mnd26uwv-DTbrd8vO.js", "assets/mnd26uwv-C5i6Nz6U.js", "assets/mnd26uwv-CpZf-qqQ.js", "assets/mnd26uwv-DkyJEBxU.js", "assets/mnd26uwv-DfX-jPyY.js", "assets/mnd26uwv-wOqzymyW.js", "assets/mnd26uwv-D7GgB890.js", "assets/mnd26uwv-Cvg9GmtW.js"]))) => i.map(i => d[i]);
import {R as e, b as t, j as a, r as o, i as r} from "./mnd26uwv-CV7sMzLS.js"
import {V as n, R as s, A as i, C as l, T as d, D as c, P as u, a as m, b as p} from "./mnd26uwv-DF8zGAdS.js"
import {X as f} from "./mnd26uwv-D462xa3E.js"
import {u as g, a as h, b, Q as v, c as y} from "./mnd26uwv-BDbKcF2r.js"
import {a as x} from "./mnd26uwv-c0g7rcyp.js"
import {u as w, N as k, B as j, R as E, a as _} from "./mnd26uwv-CY66uo5Z.js"
!function() {
    const e = document.createElement("link").relList
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e)
        new MutationObserver(e => {
            for (const a of e)
                if ("childList" === a.type)
                    for (const e of a.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        ).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return
        e.ep = !0
        const t = function(e) {
            const t = {}
            return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e)
        fetch(e.href, t)
    }
}()
const N = {}
  , S = function(e, t, a) {
    let o = Promise.resolve()
    if (t && t.length > 0) {
        let e = function(e) {
            return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                status: "fulfilled",
                value: e
            }), e => ({
                status: "rejected",
                reason: e
            }))))
        }
        document.getElementsByTagName("link")
        const a = document.querySelector("meta[property=csp-nonce]")
          , r = a?.nonce || a?.getAttribute("nonce")
        o = e(t.map(e => {
            if ((e = function(e) {
                return "/" + e
            }(e))in N)
                return
            N[e] = !0
            const t = e.endsWith(".css")
              , a = t ? '[rel="stylesheet"]' : ""
            if (document.querySelector(`link[href="${e}"]${a}`))
                return
            const o = document.createElement("link")
            return o.rel = t ? "stylesheet" : "modulepreload",
            t || (o.as = "script"),
            o.crossOrigin = "",
            o.href = e,
            r && o.setAttribute("nonce", r),
            document.head.appendChild(o),
            t ? new Promise( (t, a) => {
                o.addEventListener("load", t),
                o.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${e}`)))
            }
            ) : void 0
        }
        ))
    }
    function r(e) {
        const t = new Event("vite:preloadError",{
            cancelable: !0
        })
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return o.then(t => {
        for (const e of t || [])
            "rejected" === e.status && r(e.reason)
        return e().catch(r)
    }
    )
}
  , I = Array(12).fill(0)
  , P = ({visible: t, className: a}) => e.createElement("div", {
    className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
    "data-visible": t
}, e.createElement("div", {
    className: "sonner-spinner"
}, I.map( (t, a) => e.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${a}`
}))))
  , z = e.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, e.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , A = e.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, e.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , T = e.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, e.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , O = e.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, e.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , C = e.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, e.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), e.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
let D = 1
const M = new class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            const t = this.subscribers.indexOf(e)
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t
            const {message: a, ...o} = e
              , r = "number" == typeof (null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : D++
              , n = this.toasts.find(e => e.id === r)
              , s = void 0 === e.dismissible || e.dismissible
            return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            n ? this.toasts = this.toasts.map(t => t.id === r ? (this.publish({
                ...t,
                ...e,
                id: r,
                title: a
            }),
            {
                ...t,
                ...e,
                id: r,
                dismissible: s,
                title: a
            }) : t) : this.addToast({
                title: a,
                ...o,
                dismissible: s,
                id: r
            }),
            r
        }
        ,
        this.dismiss = e => (e ? (this.dismissedToasts.add(e),
        requestAnimationFrame( () => this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })))) : this.toasts.forEach(e => {
            this.subscribers.forEach(t => t({
                id: e.id,
                dismiss: !0
            }))
        }
        ),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (t, a) => {
            if (!a)
                return
            let o
            void 0 !== a.loading && (o = this.create({
                ...a,
                promise: t,
                type: "loading",
                message: a.loading,
                description: "function" != typeof a.description ? a.description : void 0
            }))
            const r = Promise.resolve(t instanceof Function ? t() : t)
            let n, s = void 0 !== o
            const i = r.then(async t => {
                if (n = ["resolve", t],
                e.isValidElement(t))
                    s = !1,
                    this.create({
                        id: o,
                        type: "default",
                        message: t
                    })
                else if (L(t) && !t.ok) {
                    s = !1
                    const r = "function" == typeof a.error ? await a.error(`HTTP error! status: ${t.status}`) : a.error
                      , n = "function" == typeof a.description ? await a.description(`HTTP error! status: ${t.status}`) : a.description
                      , i = "object" != typeof r || e.isValidElement(r) ? {
                        message: r
                    } : r
                    this.create({
                        id: o,
                        type: "error",
                        description: n,
                        ...i
                    })
                } else if (t instanceof Error) {
                    s = !1
                    const r = "function" == typeof a.error ? await a.error(t) : a.error
                      , n = "function" == typeof a.description ? await a.description(t) : a.description
                      , i = "object" != typeof r || e.isValidElement(r) ? {
                        message: r
                    } : r
                    this.create({
                        id: o,
                        type: "error",
                        description: n,
                        ...i
                    })
                } else if (void 0 !== a.success) {
                    s = !1
                    const r = "function" == typeof a.success ? await a.success(t) : a.success
                      , n = "function" == typeof a.description ? await a.description(t) : a.description
                      , i = "object" != typeof r || e.isValidElement(r) ? {
                        message: r
                    } : r
                    this.create({
                        id: o,
                        type: "success",
                        description: n,
                        ...i
                    })
                }
            }
            ).catch(async t => {
                if (n = ["reject", t],
                void 0 !== a.error) {
                    s = !1
                    const r = "function" == typeof a.error ? await a.error(t) : a.error
                      , n = "function" == typeof a.description ? await a.description(t) : a.description
                      , i = "object" != typeof r || e.isValidElement(r) ? {
                        message: r
                    } : r
                    this.create({
                        id: o,
                        type: "error",
                        description: n,
                        ...i
                    })
                }
            }
            ).finally( () => {
                s && (this.dismiss(o),
                o = void 0),
                null == a.finally || a.finally.call(a)
            }
            )
              , l = () => new Promise( (e, t) => i.then( () => "reject" === n[0] ? t(n[1]) : e(n[1])).catch(t))
            return "string" != typeof o && "number" != typeof o ? {
                unwrap: l
            } : Object.assign(o, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            const a = (null == t ? void 0 : t.id) || D++
            return this.create({
                jsx: e(a),
                id: a,
                ...t
            }),
            a
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , L = e => e && "object" == typeof e && "ok"in e && "boolean" == typeof e.ok && "status"in e && "number" == typeof e.status
function R(e) {
    return void 0 !== e.label
}
Object.assign( (e, t) => {
    const a = (null == t ? void 0 : t.id) || D++
    return M.addToast({
        title: e,
        ...t,
        id: a
    }),
    a
}
, {
    success: M.success,
    info: M.info,
    warning: M.warning,
    error: M.error,
    custom: M.custom,
    message: M.message,
    promise: M.promise,
    dismiss: M.dismiss,
    loading: M.loading
}, {
    getHistory: () => M.toasts,
    getToasts: () => M.getActiveToasts()
}),
function(e) {
    if ("undefined" == typeof document)
        return
    let t = document.head || document.getElementsByTagName("head")[0]
      , a = document.createElement("style")
    a.type = "text/css",
    t.appendChild(a),
    a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
}("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}")
const V = 3
  , B = 14
function F(...e) {
    return e.filter(Boolean).join(" ")
}
const q = t => {
    var a, o, r, n, s, i, l, d, c
    const {invert: u, toast: m, unstyled: p, interacting: f, setHeights: g, visibleToasts: h, heights: b, index: v, toasts: y, expanded: x, removeToast: w, defaultRichColors: k, closeButton: j, style: E, cancelButtonStyle: _, actionButtonStyle: N, className: S="", descriptionClassName: I="", duration: D, position: M, gap: L, expandByDefault: V, classNames: B, icons: q, closeButtonAriaLabel: $="Close toast"} = t
      , [Y,K] = e.useState(null)
      , [U,G] = e.useState(null)
      , [H,W] = e.useState(!1)
      , [X,J] = e.useState(!1)
      , [Q,Z] = e.useState(!1)
      , [ee,te] = e.useState(!1)
      , [ae,oe] = e.useState(!1)
      , [re,ne] = e.useState(0)
      , [se,ie] = e.useState(0)
      , le = e.useRef(m.duration || D || 4e3)
      , de = e.useRef(null)
      , ce = e.useRef(null)
      , ue = 0 === v
      , me = v + 1 <= h
      , pe = m.type
      , fe = !1 !== m.dismissible
      , ge = m.className || ""
      , he = m.descriptionClassName || ""
      , be = e.useMemo( () => b.findIndex(e => e.toastId === m.id) || 0, [b, m.id])
      , ve = e.useMemo( () => {
        var e
        return null != (e = m.closeButton) ? e : j
    }
    , [m.closeButton, j])
      , ye = e.useMemo( () => m.duration || D || 4e3, [m.duration, D])
      , xe = e.useRef(0)
      , we = e.useRef(0)
      , ke = e.useRef(0)
      , je = e.useRef(null)
      , [Ee,_e] = M.split("-")
      , Ne = e.useMemo( () => b.reduce( (e, t, a) => a >= be ? e : e + t.height, 0), [b, be])
      , Se = ( () => {
        const [t,a] = e.useState(document.hidden)
        return e.useEffect( () => {
            const e = () => {
                a(document.hidden)
            }
            return document.addEventListener("visibilitychange", e),
            () => window.removeEventListener("visibilitychange", e)
        }
        , []),
        t
    }
    )()
      , Ie = m.invert || u
      , Pe = "loading" === pe
    we.current = e.useMemo( () => be * L + Ne, [be, Ne]),
    e.useEffect( () => {
        le.current = ye
    }
    , [ye]),
    e.useEffect( () => {
        W(!0)
    }
    , []),
    e.useEffect( () => {
        const e = ce.current
        if (e) {
            const t = e.getBoundingClientRect().height
            return ie(t),
            g(e => [{
                toastId: m.id,
                height: t,
                position: m.position
            }, ...e]),
            () => g(e => e.filter(e => e.toastId !== m.id))
        }
    }
    , [g, m.id]),
    e.useLayoutEffect( () => {
        if (!H)
            return
        const e = ce.current
          , t = e.style.height
        e.style.height = "auto"
        const a = e.getBoundingClientRect().height
        e.style.height = t,
        ie(a),
        g(e => e.find(e => e.toastId === m.id) ? e.map(e => e.toastId === m.id ? {
            ...e,
            height: a
        } : e) : [{
            toastId: m.id,
            height: a,
            position: m.position
        }, ...e])
    }
    , [H, m.title, m.description, g, m.id, m.jsx, m.action, m.cancel])
    const ze = e.useCallback( () => {
        J(!0),
        ne(we.current),
        g(e => e.filter(e => e.toastId !== m.id)),
        setTimeout( () => {
            w(m)
        }
        , 200)
    }
    , [m, w, g, we])
    e.useEffect( () => {
        if (m.promise && "loading" === pe || m.duration === 1 / 0 || "loading" === m.type)
            return
        let e
        return x || f || Se ? ( () => {
            if (ke.current < xe.current) {
                const e = (new Date).getTime() - xe.current
                le.current = le.current - e
            }
            ke.current = (new Date).getTime()
        }
        )() : le.current !== 1 / 0 && (xe.current = (new Date).getTime(),
        e = setTimeout( () => {
            null == m.onAutoClose || m.onAutoClose.call(m, m),
            ze()
        }
        , le.current)),
        () => clearTimeout(e)
    }
    , [x, f, m, pe, Se, ze]),
    e.useEffect( () => {
        m.delete && (ze(),
        null == m.onDismiss || m.onDismiss.call(m, m))
    }
    , [ze, m.delete])
    const Ae = m.icon || (null == q ? void 0 : q[pe]) || (e => {
        switch (e) {
        case "success":
            return z
        case "info":
            return T
        case "warning":
            return A
        case "error":
            return O
        default:
            return null
        }
    }
    )(pe)
    var Te, Oe, Ce, De
    return e.createElement("li", {
        tabIndex: 0,
        ref: ce,
        className: F(S, ge, null == B ? void 0 : B.toast, null == m || null == (a = m.classNames) ? void 0 : a.toast, null == B ? void 0 : B.default, null == B ? void 0 : B[pe], null == m || null == (o = m.classNames) ? void 0 : o[pe]),
        "data-sonner-toast": "",
        "data-rich-colors": null != (Te = m.richColors) ? Te : k,
        "data-styled": !Boolean(m.jsx || m.unstyled || p),
        "data-mounted": H,
        "data-promise": Boolean(m.promise),
        "data-swiped": ae,
        "data-removed": X,
        "data-visible": me,
        "data-y-position": Ee,
        "data-x-position": _e,
        "data-index": v,
        "data-front": ue,
        "data-swiping": Q,
        "data-dismissible": fe,
        "data-type": pe,
        "data-invert": Ie,
        "data-swipe-out": ee,
        "data-swipe-direction": U,
        "data-expanded": Boolean(x || V && H),
        "data-testid": m.testId,
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": y.length - v,
            "--offset": `${X ? re : we.current}px`,
            "--initial-height": V ? "auto" : `${se}px`,
            ...E,
            ...m.style
        },
        onDragEnd: () => {
            Z(!1),
            K(null),
            je.current = null
        }
        ,
        onPointerDown: e => {
            2 !== e.button && !Pe && fe && (de.current = new Date,
            ne(we.current),
            e.target.setPointerCapture(e.pointerId),
            "BUTTON" !== e.target.tagName && (Z(!0),
            je.current = {
                x: e.clientX,
                y: e.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var e, t, a
            if (ee || !fe)
                return
            je.current = null
            const o = Number((null == (e = ce.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , r = Number((null == (t = ce.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , n = (new Date).getTime() - (null == (a = de.current) ? void 0 : a.getTime())
              , s = "x" === Y ? o : r
              , i = Math.abs(s) / n
            if (Math.abs(s) >= 45 || i > .11)
                return ne(we.current),
                null == m.onDismiss || m.onDismiss.call(m, m),
                G("x" === Y ? o > 0 ? "right" : "left" : r > 0 ? "down" : "up"),
                ze(),
                void te(!0)
            var l, d
            null == (l = ce.current) || l.style.setProperty("--swipe-amount-x", "0px"),
            null == (d = ce.current) || d.style.setProperty("--swipe-amount-y", "0px"),
            oe(!1),
            Z(!1),
            K(null)
        }
        ,
        onPointerMove: e => {
            var a, o, r
            if (!je.current || !fe)
                return
            if ((null == (a = window.getSelection()) ? void 0 : a.toString().length) > 0)
                return
            const n = e.clientY - je.current.y
              , s = e.clientX - je.current.x
            var i
            const l = null != (i = t.swipeDirections) ? i : function(e) {
                const [t,a] = e.split("-")
                  , o = []
                return t && o.push(t),
                a && o.push(a),
                o
            }(M)
            !Y && (Math.abs(s) > 1 || Math.abs(n) > 1) && K(Math.abs(s) > Math.abs(n) ? "x" : "y")
            let d = {
                x: 0,
                y: 0
            }
            const c = e => 1 / (1.5 + Math.abs(e) / 20)
            if ("y" === Y) {
                if (l.includes("top") || l.includes("bottom"))
                    if (l.includes("top") && n < 0 || l.includes("bottom") && n > 0)
                        d.y = n
                    else {
                        const e = n * c(n)
                        d.y = Math.abs(e) < Math.abs(n) ? e : n
                    }
            } else if ("x" === Y && (l.includes("left") || l.includes("right")))
                if (l.includes("left") && s < 0 || l.includes("right") && s > 0)
                    d.x = s
                else {
                    const e = s * c(s)
                    d.x = Math.abs(e) < Math.abs(s) ? e : s
                }
            (Math.abs(d.x) > 0 || Math.abs(d.y) > 0) && oe(!0),
            null == (o = ce.current) || o.style.setProperty("--swipe-amount-x", `${d.x}px`),
            null == (r = ce.current) || r.style.setProperty("--swipe-amount-y", `${d.y}px`)
        }
    }, ve && !m.jsx && "loading" !== pe ? e.createElement("button", {
        "aria-label": $,
        "data-disabled": Pe,
        "data-close-button": !0,
        onClick: Pe || !fe ? () => {}
        : () => {
            ze(),
            null == m.onDismiss || m.onDismiss.call(m, m)
        }
        ,
        className: F(null == B ? void 0 : B.closeButton, null == m || null == (r = m.classNames) ? void 0 : r.closeButton)
    }, null != (Oe = null == q ? void 0 : q.close) ? Oe : C) : null, (pe || m.icon || m.promise) && null !== m.icon && (null !== (null == q ? void 0 : q[pe]) || m.icon) ? e.createElement("div", {
        "data-icon": "",
        className: F(null == B ? void 0 : B.icon, null == m || null == (n = m.classNames) ? void 0 : n.icon)
    }, m.promise || "loading" === m.type && !m.icon ? m.icon || ((null == q ? void 0 : q.loading) ? e.createElement("div", {
        className: F(null == B ? void 0 : B.loader, null == m || null == (De = m.classNames) ? void 0 : De.loader, "sonner-loader"),
        "data-visible": "loading" === pe
    }, q.loading) : e.createElement(P, {
        className: F(null == B ? void 0 : B.loader, null == m || null == (Ce = m.classNames) ? void 0 : Ce.loader),
        visible: "loading" === pe
    })) : null, "loading" !== m.type ? Ae : null) : null, e.createElement("div", {
        "data-content": "",
        className: F(null == B ? void 0 : B.content, null == m || null == (s = m.classNames) ? void 0 : s.content)
    }, e.createElement("div", {
        "data-title": "",
        className: F(null == B ? void 0 : B.title, null == m || null == (i = m.classNames) ? void 0 : i.title)
    }, m.jsx ? m.jsx : "function" == typeof m.title ? m.title() : m.title), m.description ? e.createElement("div", {
        "data-description": "",
        className: F(I, he, null == B ? void 0 : B.description, null == m || null == (l = m.classNames) ? void 0 : l.description)
    }, "function" == typeof m.description ? m.description() : m.description) : null), e.isValidElement(m.cancel) ? m.cancel : m.cancel && R(m.cancel) ? e.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: m.cancelButtonStyle || _,
        onClick: e => {
            R(m.cancel) && fe && (null == m.cancel.onClick || m.cancel.onClick.call(m.cancel, e),
            ze())
        }
        ,
        className: F(null == B ? void 0 : B.cancelButton, null == m || null == (d = m.classNames) ? void 0 : d.cancelButton)
    }, m.cancel.label) : null, e.isValidElement(m.action) ? m.action : m.action && R(m.action) ? e.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: m.actionButtonStyle || N,
        onClick: e => {
            R(m.action) && (null == m.action.onClick || m.action.onClick.call(m.action, e),
            e.defaultPrevented || ze())
        }
        ,
        className: F(null == B ? void 0 : B.actionButton, null == m || null == (c = m.classNames) ? void 0 : c.actionButton)
    }, m.action.label) : null)
}
function $() {
    if ("undefined" == typeof window)
        return "ltr"
    if ("undefined" == typeof document)
        return "ltr"
    const e = document.documentElement.getAttribute("dir")
    return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
}
function Y(e, t) {
    const a = {}
    return [e, t].forEach( (e, t) => {
        const o = 1 === t
          , r = o ? "--mobile-offset" : "--offset"
          , n = o ? "16px" : "24px"
        function s(e) {
            ["top", "right", "bottom", "left"].forEach(t => {
                a[`${r}-${t}`] = "number" == typeof e ? `${e}px` : e
            }
            )
        }
        "number" == typeof e || "string" == typeof e ? s(e) : "object" == typeof e ? ["top", "right", "bottom", "left"].forEach(t => {
            void 0 === e[t] ? a[`${r}-${t}`] = n : a[`${r}-${t}`] = "number" == typeof e[t] ? `${e[t]}px` : e[t]
        }
        ) : s(n)
    }
    ),
    a
}
const K = e.forwardRef(function(a, o) {
    const {id: r, invert: n, position: s="bottom-right", hotkey: i=["altKey", "KeyT"], expand: l, closeButton: d, className: c, offset: u, mobileOffset: m, theme: p="light", richColors: f, duration: g, style: h, visibleToasts: b=V, toastOptions: v, dir: y=$(), gap: x=B, icons: w, containerAriaLabel: k="Notifications"} = a
      , [j,E] = e.useState([])
      , _ = e.useMemo( () => r ? j.filter(e => e.toasterId === r) : j.filter(e => !e.toasterId), [j, r])
      , N = e.useMemo( () => Array.from(new Set([s].concat(_.filter(e => e.position).map(e => e.position)))), [_, s])
      , [S,I] = e.useState([])
      , [P,z] = e.useState(!1)
      , [A,T] = e.useState(!1)
      , [O,C] = e.useState("system" !== p ? p : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , D = e.useRef(null)
      , L = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , R = e.useRef(null)
      , F = e.useRef(!1)
      , K = e.useCallback(e => {
        E(t => {
            var a
            return (null == (a = t.find(t => t.id === e.id)) ? void 0 : a.delete) || M.dismiss(e.id),
            t.filter( ({id: t}) => t !== e.id)
        }
        )
    }
    , [])
    return e.useEffect( () => M.subscribe(e => {
        e.dismiss ? requestAnimationFrame( () => {
            E(t => t.map(t => t.id === e.id ? {
                ...t,
                delete: !0
            } : t))
        }
        ) : setTimeout( () => {
            t.flushSync( () => {
                E(t => {
                    const a = t.findIndex(t => t.id === e.id)
                    return -1 !== a ? [...t.slice(0, a), {
                        ...t[a],
                        ...e
                    }, ...t.slice(a + 1)] : [e, ...t]
                }
                )
            }
            )
        }
        )
    }
    ), [j]),
    e.useEffect( () => {
        if ("system" !== p)
            return void C(p)
        if ("system" === p && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? C("dark") : C("light")),
        "undefined" == typeof window)
            return
        const e = window.matchMedia("(prefers-color-scheme: dark)")
        try {
            e.addEventListener("change", ({matches: e}) => {
                C(e ? "dark" : "light")
            }
            )
        } catch (t) {
            e.addListener( ({matches: e}) => {
                try {
                    C(e ? "dark" : "light")
                } catch (t) {}
            }
            )
        }
    }
    , [p]),
    e.useEffect( () => {
        j.length <= 1 && z(!1)
    }
    , [j]),
    e.useEffect( () => {
        const e = e => {
            var t, a
            i.every(t => e[t] || e.code === t) && (z(!0),
            null == (a = D.current) || a.focus()),
            "Escape" !== e.code || document.activeElement !== D.current && !(null == (t = D.current) ? void 0 : t.contains(document.activeElement)) || z(!1)
        }
        return document.addEventListener("keydown", e),
        () => document.removeEventListener("keydown", e)
    }
    , [i]),
    e.useEffect( () => {
        if (D.current)
            return () => {
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null,
                F.current = !1)
            }
    }
    , [D.current]),
    e.createElement("section", {
        ref: o,
        "aria-label": `${k} ${L}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, N.map( (t, o) => {
        var r
        const [s,i] = t.split("-")
        return _.length ? e.createElement("ol", {
            key: t,
            dir: "auto" === y ? $() : y,
            tabIndex: -1,
            ref: D,
            className: c,
            "data-sonner-toaster": !0,
            "data-sonner-theme": O,
            "data-y-position": s,
            "data-x-position": i,
            style: {
                "--front-toast-height": `${(null == (r = S[0]) ? void 0 : r.height) || 0}px`,
                "--width": "356px",
                "--gap": `${x}px`,
                ...h,
                ...Y(u, m)
            },
            onBlur: e => {
                F.current && !e.currentTarget.contains(e.relatedTarget) && (F.current = !1,
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null))
            }
            ,
            onFocus: e => {
                e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || F.current || (F.current = !0,
                R.current = e.relatedTarget)
            }
            ,
            onMouseEnter: () => z(!0),
            onMouseMove: () => z(!0),
            onMouseLeave: () => {
                A || z(!1)
            }
            ,
            onDragEnd: () => z(!1),
            onPointerDown: e => {
                e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || T(!0)
            }
            ,
            onPointerUp: () => T(!1)
        }, _.filter(e => !e.position && 0 === o || e.position === t).map( (o, r) => {
            var s, i
            return e.createElement(q, {
                key: o.id,
                icons: w,
                index: r,
                toast: o,
                defaultRichColors: f,
                duration: null != (s = null == v ? void 0 : v.duration) ? s : g,
                className: null == v ? void 0 : v.className,
                descriptionClassName: null == v ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: b,
                closeButton: null != (i = null == v ? void 0 : v.closeButton) ? i : d,
                interacting: A,
                position: t,
                style: null == v ? void 0 : v.style,
                unstyled: null == v ? void 0 : v.unstyled,
                classNames: null == v ? void 0 : v.classNames,
                cancelButtonStyle: null == v ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: null == v ? void 0 : v.actionButtonStyle,
                closeButtonAriaLabel: null == v ? void 0 : v.closeButtonAriaLabel,
                removeToast: K,
                toasts: _.filter(e => e.position == o.position),
                heights: S.filter(e => e.position == o.position),
                setHeights: I,
                expandByDefault: l,
                gap: x,
                expanded: P,
                swipeDirections: a.swipeDirections
            })
        }
        )) : null
    }
    ))
})
  , U = ({...e}) => a.jsx(K, {
    className: "toaster group",
    toastOptions: {
        classNames: {
            toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
    },
    ...e
})
function G(e) {
    var t, a, o = ""
    if ("string" == typeof e || "number" == typeof e)
        o += e
    else if ("object" == typeof e)
        if (Array.isArray(e)) {
            var r = e.length
            for (t = 0; t < r; t++)
                e[t] && (a = G(e[t])) && (o && (o += " "),
                o += a)
        } else
            for (a in e)
                e[a] && (o && (o += " "),
                o += a)
    return o
}
function H() {
    for (var e, t, a = 0, o = "", r = arguments.length; a < r; a++)
        (e = arguments[a]) && (t = G(e)) && (o && (o += " "),
        o += t)
    return o
}
const W = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e
  , X = H
  , J = (e, t) => a => {
    var o
    if (null == (null == t ? void 0 : t.variants))
        return X(e, null == a ? void 0 : a.class, null == a ? void 0 : a.className)
    const {variants: r, defaultVariants: n} = t
      , s = Object.keys(r).map(e => {
        const t = null == a ? void 0 : a[e]
          , o = null == n ? void 0 : n[e]
        if (null === t)
            return null
        const s = W(t) || W(o)
        return r[e][s]
    }
    )
      , i = a && Object.entries(a).reduce( (e, t) => {
        let[a,o] = t
        return void 0 === o || (e[a] = o),
        e
    }
    , {})
      , l = null == t || null === (o = t.compoundVariants) || void 0 === o ? void 0 : o.reduce( (e, t) => {
        let {class: a, className: o, ...r} = t
        return Object.entries(r).every(e => {
            let[t,a] = e
            return Array.isArray(a) ? a.includes({
                ...n,
                ...i
            }[t]) : {
                ...n,
                ...i
            }[t] === a
        }
        ) ? [...e, a, o] : e
    }
    , [])
    return X(e, s, l, null == a ? void 0 : a.class, null == a ? void 0 : a.className)
}
  , Q = (e=new Map, t=null, a) => ({
    nextPart: e,
    validators: t,
    classGroupId: a
})
  , Z = "-"
  , ee = []
  , te = e => {
    const t = re(e)
      , {conflictingClassGroups: a, conflictingClassGroupModifiers: o} = e
    return {
        getClassGroupId: e => {
            if (e.startsWith("[") && e.endsWith("]"))
                return oe(e)
            const a = e.split(Z)
              , o = "" === a[0] && a.length > 1 ? 1 : 0
            return ae(a, o, t)
        }
        ,
        getConflictingClassGroupIds: (e, t) => {
            if (t) {
                const t = o[e]
                  , r = a[e]
                return t ? r ? ( (e, t) => {
                    const a = new Array(e.length + t.length)
                    for (let o = 0; o < e.length; o++)
                        a[o] = e[o]
                    for (let o = 0; o < t.length; o++)
                        a[e.length + o] = t[o]
                    return a
                }
                )(r, t) : t : r || ee
            }
            return a[e] || ee
        }
    }
}
  , ae = (e, t, a) => {
    if (0 === e.length - t)
        return a.classGroupId
    const o = e[t]
      , r = a.nextPart.get(o)
    if (r) {
        const a = ae(e, t + 1, r)
        if (a)
            return a
    }
    const n = a.validators
    if (null === n)
        return
    const s = 0 === t ? e.join(Z) : e.slice(t).join(Z)
      , i = n.length
    for (let l = 0; l < i; l++) {
        const e = n[l]
        if (e.validator(s))
            return e.classGroupId
    }
}
  , oe = e => -1 === e.slice(1, -1).indexOf(":") ? void 0 : ( () => {
    const t = e.slice(1, -1)
      , a = t.indexOf(":")
      , o = t.slice(0, a)
    return o ? "arbitrary.." + o : void 0
}
)()
  , re = e => {
    const {theme: t, classGroups: a} = e
    return ne(a, t)
}
  , ne = (e, t) => {
    const a = Q()
    for (const o in e) {
        const r = e[o]
        se(r, a, o, t)
    }
    return a
}
  , se = (e, t, a, o) => {
    const r = e.length
    for (let n = 0; n < r; n++) {
        const r = e[n]
        ie(r, t, a, o)
    }
}
  , ie = (e, t, a, o) => {
    "string" != typeof e ? "function" != typeof e ? ce(e, t, a, o) : de(e, t, a, o) : le(e, t, a)
}
  , le = (e, t, a) => {
    ("" === e ? t : ue(t, e)).classGroupId = a
}
  , de = (e, t, a, o) => {
    me(e) ? se(e(o), t, a, o) : (null === t.validators && (t.validators = []),
    t.validators.push(( (e, t) => ({
        classGroupId: e,
        validator: t
    }))(a, e)))
}
  , ce = (e, t, a, o) => {
    const r = Object.entries(e)
      , n = r.length
    for (let s = 0; s < n; s++) {
        const [e,n] = r[s]
        se(n, ue(t, e), a, o)
    }
}
  , ue = (e, t) => {
    let a = e
    const o = t.split(Z)
      , r = o.length
    for (let n = 0; n < r; n++) {
        const e = o[n]
        let t = a.nextPart.get(e)
        t || (t = Q(),
        a.nextPart.set(e, t)),
        a = t
    }
    return a
}
  , me = e => "isThemeGetter"in e && !0 === e.isThemeGetter
  , pe = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        }
    let t = 0
      , a = Object.create(null)
      , o = Object.create(null)
    const r = (r, n) => {
        a[r] = n,
        t++,
        t > e && (t = 0,
        o = a,
        a = Object.create(null))
    }
    return {
        get(e) {
            let t = a[e]
            return void 0 !== t ? t : void 0 !== (t = o[e]) ? (r(e, t),
            t) : void 0
        },
        set(e, t) {
            e in a ? a[e] = t : r(e, t)
        }
    }
}
  , fe = []
  , ge = (e, t, a, o, r) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: a,
    maybePostfixModifierPosition: o,
    isExternal: r
})
  , he = e => {
    const {prefix: t, experimentalParseClassName: a} = e
    let o = e => {
        const t = []
        let a, o = 0, r = 0, n = 0
        const s = e.length
        for (let c = 0; c < s; c++) {
            const s = e[c]
            if (0 === o && 0 === r) {
                if (":" === s) {
                    t.push(e.slice(n, c)),
                    n = c + 1
                    continue
                }
                if ("/" === s) {
                    a = c
                    continue
                }
            }
            "[" === s ? o++ : "]" === s ? o-- : "(" === s ? r++ : ")" === s && r--
        }
        const i = 0 === t.length ? e : e.slice(n)
        let l = i
          , d = !1
        return i.endsWith("!") ? (l = i.slice(0, -1),
        d = !0) : i.startsWith("!") && (l = i.slice(1),
        d = !0),
        ge(t, d, l, a && a > n ? a - n : void 0)
    }
    if (t) {
        const e = t + ":"
          , a = o
        o = t => t.startsWith(e) ? a(t.slice(e.length)) : ge(fe, !1, t, void 0, !0)
    }
    if (a) {
        const e = o
        o = t => a({
            className: t,
            parseClassName: e
        })
    }
    return o
}
  , be = e => {
    const t = new Map
    return e.orderSensitiveModifiers.forEach( (e, a) => {
        t.set(e, 1e6 + a)
    }
    ),
    e => {
        const a = []
        let o = []
        for (let r = 0; r < e.length; r++) {
            const n = e[r]
              , s = "[" === n[0]
              , i = t.has(n)
            s || i ? (o.length > 0 && (o.sort(),
            a.push(...o),
            o = []),
            a.push(n)) : o.push(n)
        }
        return o.length > 0 && (o.sort(),
        a.push(...o)),
        a
    }
}
  , ve = /\s+/
  , ye = e => {
    if ("string" == typeof e)
        return e
    let t, a = ""
    for (let o = 0; o < e.length; o++)
        e[o] && (t = ye(e[o])) && (a && (a += " "),
        a += t)
    return a
}
  , xe = []
  , we = e => {
    const t = t => t[e] || xe
    return t.isThemeGetter = !0,
    t
}
  , ke = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , je = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , Ee = /^\d+\/\d+$/
  , _e = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Ne = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Se = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Ie = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Pe = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , ze = e => Ee.test(e)
  , Ae = e => !!e && !Number.isNaN(Number(e))
  , Te = e => !!e && Number.isInteger(Number(e))
  , Oe = e => e.endsWith("%") && Ae(e.slice(0, -1))
  , Ce = e => _e.test(e)
  , De = () => !0
  , Me = e => Ne.test(e) && !Se.test(e)
  , Le = () => !1
  , Re = e => Ie.test(e)
  , Ve = e => Pe.test(e)
  , Be = e => !qe(e) && !He(e)
  , Fe = e => tt(e, nt, Le)
  , qe = e => ke.test(e)
  , $e = e => tt(e, st, Me)
  , Ye = e => tt(e, it, Ae)
  , Ke = e => tt(e, ot, Le)
  , Ue = e => tt(e, rt, Ve)
  , Ge = e => tt(e, dt, Re)
  , He = e => je.test(e)
  , We = e => at(e, st)
  , Xe = e => at(e, lt)
  , Je = e => at(e, ot)
  , Qe = e => at(e, nt)
  , Ze = e => at(e, rt)
  , et = e => at(e, dt, !0)
  , tt = (e, t, a) => {
    const o = ke.exec(e)
    return !!o && (o[1] ? t(o[1]) : a(o[2]))
}
  , at = (e, t, a=!1) => {
    const o = je.exec(e)
    return !!o && (o[1] ? t(o[1]) : a)
}
  , ot = e => "position" === e || "percentage" === e
  , rt = e => "image" === e || "url" === e
  , nt = e => "length" === e || "size" === e || "bg-size" === e
  , st = e => "length" === e
  , it = e => "number" === e
  , lt = e => "family-name" === e
  , dt = e => "shadow" === e
  , ct = ( (e, ...t) => {
    let a, o, r, n
    const s = e => {
        const t = o(e)
        if (t)
            return t
        const n = ( (e, t) => {
            const {parseClassName: a, getClassGroupId: o, getConflictingClassGroupIds: r, sortModifiers: n} = t
              , s = []
              , i = e.trim().split(ve)
            let l = ""
            for (let d = i.length - 1; d >= 0; d -= 1) {
                const e = i[d]
                  , {isExternal: t, modifiers: c, hasImportantModifier: u, baseClassName: m, maybePostfixModifierPosition: p} = a(e)
                if (t) {
                    l = e + (l.length > 0 ? " " + l : l)
                    continue
                }
                let f = !!p
                  , g = o(f ? m.substring(0, p) : m)
                if (!g) {
                    if (!f) {
                        l = e + (l.length > 0 ? " " + l : l)
                        continue
                    }
                    if (g = o(m),
                    !g) {
                        l = e + (l.length > 0 ? " " + l : l)
                        continue
                    }
                    f = !1
                }
                const h = 0 === c.length ? "" : 1 === c.length ? c[0] : n(c).join(":")
                  , b = u ? h + "!" : h
                  , v = b + g
                if (s.indexOf(v) > -1)
                    continue
                s.push(v)
                const y = r(g, f)
                for (let a = 0; a < y.length; ++a) {
                    const e = y[a]
                    s.push(b + e)
                }
                l = e + (l.length > 0 ? " " + l : l)
            }
            return l
        }
        )(e, a)
        return r(e, n),
        n
    }
    return n = i => {
        const l = t.reduce( (e, t) => t(e), e())
        return a = (e => ({
            cache: pe(e.cacheSize),
            parseClassName: he(e),
            sortModifiers: be(e),
            ...te(e)
        }))(l),
        o = a.cache.get,
        r = a.cache.set,
        n = s,
        s(i)
    }
    ,
    (...e) => n(( (...e) => {
        let t, a, o = 0, r = ""
        for (; o < e.length; )
            (t = e[o++]) && (a = ye(t)) && (r && (r += " "),
            r += a)
        return r
    }
    )(...e))
}
)( () => {
    const e = we("color")
      , t = we("font")
      , a = we("text")
      , o = we("font-weight")
      , r = we("tracking")
      , n = we("leading")
      , s = we("breakpoint")
      , i = we("container")
      , l = we("spacing")
      , d = we("radius")
      , c = we("shadow")
      , u = we("inset-shadow")
      , m = we("text-shadow")
      , p = we("drop-shadow")
      , f = we("blur")
      , g = we("perspective")
      , h = we("aspect")
      , b = we("ease")
      , v = we("animate")
      , y = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom", He, qe]
      , x = () => [He, qe, l]
      , w = () => [ze, "full", "auto", ...x()]
      , k = () => [Te, "none", "subgrid", He, qe]
      , j = () => ["auto", {
        span: ["full", Te, He, qe]
    }, Te, He, qe]
      , E = () => [Te, "auto", He, qe]
      , _ = () => ["auto", "min", "max", "fr", He, qe]
      , N = () => ["auto", ...x()]
      , S = () => [ze, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()]
      , I = () => [e, He, qe]
      , P = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom", Je, Ke, {
        position: [He, qe]
    }]
      , z = () => ["auto", "cover", "contain", Qe, Fe, {
        size: [He, qe]
    }]
      , A = () => [Oe, We, $e]
      , T = () => ["", "none", "full", d, He, qe]
      , O = () => ["", Ae, We, $e]
      , C = () => [Ae, Oe, Je, Ke]
      , D = () => ["", "none", f, He, qe]
      , M = () => ["none", Ae, He, qe]
      , L = () => ["none", Ae, He, qe]
      , R = () => [Ae, He, qe]
      , V = () => [ze, "full", ...x()]
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Ce],
            breakpoint: [Ce],
            color: [De],
            container: [Ce],
            "drop-shadow": [Ce],
            ease: ["in", "out", "in-out"],
            font: [Be],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Ce],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Ce],
            shadow: [Ce],
            spacing: ["px", Ae],
            text: [Ce],
            "text-shadow": [Ce],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", ze, qe, He, h]
            }],
            container: ["container"],
            columns: [{
                columns: [Ae, qe, He, i]
            }],
            "break-after": [{
                "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }],
            "break-before": [{
                "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: y()
            }],
            overflow: [{
                overflow: ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            "overflow-x": [{
                "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            "overflow-y": [{
                "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            overscroll: [{
                overscroll: ["auto", "contain", "none"]
            }],
            "overscroll-x": [{
                "overscroll-x": ["auto", "contain", "none"]
            }],
            "overscroll-y": [{
                "overscroll-y": ["auto", "contain", "none"]
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: w()
            }],
            "inset-x": [{
                "inset-x": w()
            }],
            "inset-y": [{
                "inset-y": w()
            }],
            start: [{
                start: w()
            }],
            end: [{
                end: w()
            }],
            top: [{
                top: w()
            }],
            right: [{
                right: w()
            }],
            bottom: [{
                bottom: w()
            }],
            left: [{
                left: w()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [Te, "auto", He, qe]
            }],
            basis: [{
                basis: [ze, "full", "auto", i, ...x()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [Ae, ze, "auto", "initial", "none", qe]
            }],
            grow: [{
                grow: ["", Ae, He, qe]
            }],
            shrink: [{
                shrink: ["", Ae, He, qe]
            }],
            order: [{
                order: [Te, "first", "last", "none", He, qe]
            }],
            "grid-cols": [{
                "grid-cols": k()
            }],
            "col-start-end": [{
                col: j()
            }],
            "col-start": [{
                "col-start": E()
            }],
            "col-end": [{
                "col-end": E()
            }],
            "grid-rows": [{
                "grid-rows": k()
            }],
            "row-start-end": [{
                row: j()
            }],
            "row-start": [{
                "row-start": E()
            }],
            "row-end": [{
                "row-end": E()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": _()
            }],
            "auto-rows": [{
                "auto-rows": _()
            }],
            gap: [{
                gap: x()
            }],
            "gap-x": [{
                "gap-x": x()
            }],
            "gap-y": [{
                "gap-y": x()
            }],
            "justify-content": [{
                justify: ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe", "normal"]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch", "center-safe", "end-safe", "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch", "center-safe", "end-safe"]
            }],
            "align-content": [{
                content: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "stretch", "center-safe", "end-safe", {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "center-safe", "end-safe", {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "stretch", "center-safe", "end-safe", "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch", "center-safe", "end-safe"]
            }],
            p: [{
                p: x()
            }],
            px: [{
                px: x()
            }],
            py: [{
                py: x()
            }],
            ps: [{
                ps: x()
            }],
            pe: [{
                pe: x()
            }],
            pt: [{
                pt: x()
            }],
            pr: [{
                pr: x()
            }],
            pb: [{
                pb: x()
            }],
            pl: [{
                pl: x()
            }],
            m: [{
                m: N()
            }],
            mx: [{
                mx: N()
            }],
            my: [{
                my: N()
            }],
            ms: [{
                ms: N()
            }],
            me: [{
                me: N()
            }],
            mt: [{
                mt: N()
            }],
            mr: [{
                mr: N()
            }],
            mb: [{
                mb: N()
            }],
            ml: [{
                ml: N()
            }],
            "space-x": [{
                "space-x": x()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": x()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: S()
            }],
            w: [{
                w: [i, "screen", ...S()]
            }],
            "min-w": [{
                "min-w": [i, "screen", "none", ...S()]
            }],
            "max-w": [{
                "max-w": [i, "screen", "none", "prose", {
                    screen: [s]
                }, ...S()]
            }],
            h: [{
                h: ["screen", "lh", ...S()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...S()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...S()]
            }],
            "font-size": [{
                text: ["base", a, We, $e]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [o, He, Ye]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Oe, qe]
            }],
            "font-family": [{
                font: [Xe, qe, t]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [r, He, qe]
            }],
            "line-clamp": [{
                "line-clamp": [Ae, "none", He, Ye]
            }],
            leading: [{
                leading: [n, ...x()]
            }],
            "list-image": [{
                "list-image": ["none", He, qe]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", He, qe]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: I()
            }],
            "text-color": [{
                text: I()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: ["solid", "dashed", "dotted", "double", "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [Ae, "from-font", "auto", He, $e]
            }],
            "text-decoration-color": [{
                decoration: I()
            }],
            "underline-offset": [{
                "underline-offset": [Ae, "auto", He, qe]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: x()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", He, qe]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", He, qe]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: P()
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "space", "round"]
                }]
            }],
            "bg-size": [{
                bg: z()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Te, He, qe],
                    radial: ["", He, qe],
                    conic: [Te, He, qe]
                }, Ze, Ue]
            }],
            "bg-color": [{
                bg: I()
            }],
            "gradient-from-pos": [{
                from: A()
            }],
            "gradient-via-pos": [{
                via: A()
            }],
            "gradient-to-pos": [{
                to: A()
            }],
            "gradient-from": [{
                from: I()
            }],
            "gradient-via": [{
                via: I()
            }],
            "gradient-to": [{
                to: I()
            }],
            rounded: [{
                rounded: T()
            }],
            "rounded-s": [{
                "rounded-s": T()
            }],
            "rounded-e": [{
                "rounded-e": T()
            }],
            "rounded-t": [{
                "rounded-t": T()
            }],
            "rounded-r": [{
                "rounded-r": T()
            }],
            "rounded-b": [{
                "rounded-b": T()
            }],
            "rounded-l": [{
                "rounded-l": T()
            }],
            "rounded-ss": [{
                "rounded-ss": T()
            }],
            "rounded-se": [{
                "rounded-se": T()
            }],
            "rounded-ee": [{
                "rounded-ee": T()
            }],
            "rounded-es": [{
                "rounded-es": T()
            }],
            "rounded-tl": [{
                "rounded-tl": T()
            }],
            "rounded-tr": [{
                "rounded-tr": T()
            }],
            "rounded-br": [{
                "rounded-br": T()
            }],
            "rounded-bl": [{
                "rounded-bl": T()
            }],
            "border-w": [{
                border: O()
            }],
            "border-w-x": [{
                "border-x": O()
            }],
            "border-w-y": [{
                "border-y": O()
            }],
            "border-w-s": [{
                "border-s": O()
            }],
            "border-w-e": [{
                "border-e": O()
            }],
            "border-w-t": [{
                "border-t": O()
            }],
            "border-w-r": [{
                "border-r": O()
            }],
            "border-w-b": [{
                "border-b": O()
            }],
            "border-w-l": [{
                "border-l": O()
            }],
            "divide-x": [{
                "divide-x": O()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": O()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: ["solid", "dashed", "dotted", "double", "hidden", "none"]
            }],
            "divide-style": [{
                divide: ["solid", "dashed", "dotted", "double", "hidden", "none"]
            }],
            "border-color": [{
                border: I()
            }],
            "border-color-x": [{
                "border-x": I()
            }],
            "border-color-y": [{
                "border-y": I()
            }],
            "border-color-s": [{
                "border-s": I()
            }],
            "border-color-e": [{
                "border-e": I()
            }],
            "border-color-t": [{
                "border-t": I()
            }],
            "border-color-r": [{
                "border-r": I()
            }],
            "border-color-b": [{
                "border-b": I()
            }],
            "border-color-l": [{
                "border-l": I()
            }],
            "divide-color": [{
                divide: I()
            }],
            "outline-style": [{
                outline: ["solid", "dashed", "dotted", "double", "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [Ae, He, qe]
            }],
            "outline-w": [{
                outline: ["", Ae, We, $e]
            }],
            "outline-color": [{
                outline: I()
            }],
            shadow: [{
                shadow: ["", "none", c, et, Ge]
            }],
            "shadow-color": [{
                shadow: I()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", u, et, Ge]
            }],
            "inset-shadow-color": [{
                "inset-shadow": I()
            }],
            "ring-w": [{
                ring: O()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: I()
            }],
            "ring-offset-w": [{
                "ring-offset": [Ae, $e]
            }],
            "ring-offset-color": [{
                "ring-offset": I()
            }],
            "inset-ring-w": [{
                "inset-ring": O()
            }],
            "inset-ring-color": [{
                "inset-ring": I()
            }],
            "text-shadow": [{
                "text-shadow": ["none", m, et, Ge]
            }],
            "text-shadow-color": [{
                "text-shadow": I()
            }],
            opacity: [{
                opacity: [Ae, He, qe]
            }],
            "mix-blend": [{
                "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [Ae]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": C()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": C()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": I()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": I()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": C()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": C()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": I()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": I()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": C()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": C()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": I()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": I()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": C()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": C()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": I()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": I()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": C()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": C()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": I()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": I()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": C()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": C()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": I()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": I()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": C()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": C()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": I()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": I()
            }],
            "mask-image-radial": [{
                "mask-radial": [He, qe]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": C()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": C()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": I()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": I()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [Ae]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": C()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": C()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": I()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": I()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: P()
            }],
            "mask-repeat": [{
                mask: ["no-repeat", {
                    repeat: ["", "x", "y", "space", "round"]
                }]
            }],
            "mask-size": [{
                mask: z()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", He, qe]
            }],
            filter: [{
                filter: ["", "none", He, qe]
            }],
            blur: [{
                blur: D()
            }],
            brightness: [{
                brightness: [Ae, He, qe]
            }],
            contrast: [{
                contrast: [Ae, He, qe]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", p, et, Ge]
            }],
            "drop-shadow-color": [{
                "drop-shadow": I()
            }],
            grayscale: [{
                grayscale: ["", Ae, He, qe]
            }],
            "hue-rotate": [{
                "hue-rotate": [Ae, He, qe]
            }],
            invert: [{
                invert: ["", Ae, He, qe]
            }],
            saturate: [{
                saturate: [Ae, He, qe]
            }],
            sepia: [{
                sepia: ["", Ae, He, qe]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", He, qe]
            }],
            "backdrop-blur": [{
                "backdrop-blur": D()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [Ae, He, qe]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [Ae, He, qe]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", Ae, He, qe]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [Ae, He, qe]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", Ae, He, qe]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [Ae, He, qe]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [Ae, He, qe]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", Ae, He, qe]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": x()
            }],
            "border-spacing-x": [{
                "border-spacing-x": x()
            }],
            "border-spacing-y": [{
                "border-spacing-y": x()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", He, qe]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [Ae, "initial", He, qe]
            }],
            ease: [{
                ease: ["linear", "initial", b, He, qe]
            }],
            delay: [{
                delay: [Ae, He, qe]
            }],
            animate: [{
                animate: ["none", v, He, qe]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [g, He, qe]
            }],
            "perspective-origin": [{
                "perspective-origin": y()
            }],
            rotate: [{
                rotate: M()
            }],
            "rotate-x": [{
                "rotate-x": M()
            }],
            "rotate-y": [{
                "rotate-y": M()
            }],
            "rotate-z": [{
                "rotate-z": M()
            }],
            scale: [{
                scale: L()
            }],
            "scale-x": [{
                "scale-x": L()
            }],
            "scale-y": [{
                "scale-y": L()
            }],
            "scale-z": [{
                "scale-z": L()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: R()
            }],
            "skew-x": [{
                "skew-x": R()
            }],
            "skew-y": [{
                "skew-y": R()
            }],
            transform: [{
                transform: [He, qe, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: y()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: V()
            }],
            "translate-x": [{
                "translate-x": V()
            }],
            "translate-y": [{
                "translate-y": V()
            }],
            "translate-z": [{
                "translate-z": V()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: I()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: I()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", He, qe]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": x()
            }],
            "scroll-mx": [{
                "scroll-mx": x()
            }],
            "scroll-my": [{
                "scroll-my": x()
            }],
            "scroll-ms": [{
                "scroll-ms": x()
            }],
            "scroll-me": [{
                "scroll-me": x()
            }],
            "scroll-mt": [{
                "scroll-mt": x()
            }],
            "scroll-mr": [{
                "scroll-mr": x()
            }],
            "scroll-mb": [{
                "scroll-mb": x()
            }],
            "scroll-ml": [{
                "scroll-ml": x()
            }],
            "scroll-p": [{
                "scroll-p": x()
            }],
            "scroll-px": [{
                "scroll-px": x()
            }],
            "scroll-py": [{
                "scroll-py": x()
            }],
            "scroll-ps": [{
                "scroll-ps": x()
            }],
            "scroll-pe": [{
                "scroll-pe": x()
            }],
            "scroll-pt": [{
                "scroll-pt": x()
            }],
            "scroll-pr": [{
                "scroll-pr": x()
            }],
            "scroll-pb": [{
                "scroll-pb": x()
            }],
            "scroll-pl": [{
                "scroll-pl": x()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", He, qe]
            }],
            fill: [{
                fill: ["none", ...I()]
            }],
            "stroke-w": [{
                stroke: [Ae, We, $e, Ye]
            }],
            stroke: [{
                stroke: ["none", ...I()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
)
function ut(...e) {
    return ct(H(e))
}
const mt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"
function pt(e, t) {
    let a = Math.imul(1540483477 ^ e, 1821285621 ^ t)
    return a ^= a >>> 13,
    a = Math.imul(a, 2246822507),
    a ^= a >>> 16,
    a >>> 0
}
function ft(e, t, a=3, o=20) {
    const r = Math.max(0, Math.min(a, e.length))
      , n = Math.max(0, e.length - r)
      , s = Math.max(0, Math.min(o, n))
    if (0 === s)
        return e
    const i = e.slice(0, r)
      , l = e.slice(r, r + s)
      , d = e.slice(r + s)
      , c = function(e, t) {
        let a = 2538058380 ^ 668265261 * e.length
        for (let s = 0; s < e.length; s++)
            a = pt(a, e.charCodeAt(s) ^ 73244475 * s)
        const o = []
        let r = 19088743 ^ a
          , n = pt(a, 2654435761)
        for (let s = 0; s < t; s++) {
            r = pt(r + 2654435761 * s, n ^ 2135587861 * s),
            n = pt(n ^ 2246822507 * s, r + 374761393)
            const e = pt(r, n ^ 668265261 * t)
            o.push(e % 64)
        }
        return o
    }(t, l.length)
      , u = t.length || 1
      , m = l.split("").map( (e, t) => {
        const a = mt.indexOf(e)
        if (-1 === a)
            return e
        const o = function(e, t, a) {
            let o = e + 31 * t + 17 * a
            return o = pt(o ^ 2146121005 * t, 2221713035 * e),
            o % 64
        }(c[t], t, u)
        return mt[(a + o + 64) % 64]
    }
    ).join("")
    return `${i}${m}${d}`
}
const gt = u
  , ht = o.forwardRef( ({className: e, ...t}, o) => a.jsx(n, {
    ref: o,
    className: ut("fixed top-4 right-4 z-100 flex max-h-screen max-w-[420px] flex-col items-end p-4 pointer-events-none", e),
    ...t
}))
ht.displayName = n.displayName
const bt = J("group pointer-events-auto relative flex w-full max-w-[343px] items-center gap-2 overflow-hidden rounded-2xl border p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full", {
    variants: {
        variant: {
            default: "border-[#22C55E] bg-[#F0FDF4]",
            success: "border-[#22C55E] bg-[#F0FDF4]",
            destructive: "border-[#EF4444] bg-[#FEF2F2]",
            info: "border-[#3B82F6] bg-[#EFF6FF]",
            warning: "border-[#FACC15] bg-[#FEFCE8]"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , vt = o.forwardRef( ({className: e, variant: t, ...o}, r) => a.jsx(s, {
    ref: r,
    className: ut(bt({
        variant: t
    }), e),
    ...o
}))
vt.displayName = s.displayName,
o.forwardRef( ({className: e, ...t}, o) => a.jsx(i, {
    ref: o,
    className: ut("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", e),
    ...t
})).displayName = i.displayName
const yt = o.forwardRef( ({className: e, ...t}, o) => a.jsx(l, {
    ref: o,
    className: ut("ml-auto shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none", e),
    "toast-close": "",
    ...t,
    children: a.jsx(f, {
        className: "h-4 w-4"
    })
}))
yt.displayName = l.displayName
const xt = o.forwardRef( ({className: e, ...t}, o) => a.jsx(d, {
    ref: o,
    className: ut("text-sm font-normal leading-none", e),
    ...t
}))
xt.displayName = d.displayName
const wt = o.forwardRef( ({className: e, ...t}, o) => a.jsx(c, {
    ref: o,
    className: ut("text-sm opacity-90", e),
    ...t
}))
wt.displayName = c.displayName
let kt = 0
const jt = new Map
  , Et = e => {
    if (jt.has(e))
        return
    const t = setTimeout( () => {
        jt.delete(e),
        It({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , 300)
    jt.set(e, t)
}
  , _t = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, 1)
        }
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(e => e.id === t.toast.id ? {
                ...e,
                ...t.toast
            } : e)
        }
    case "DISMISS_TOAST":
        {
            const {toastId: a} = t
            return a ? Et(a) : e.toasts.forEach(e => {
                Et(e.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(e => e.id === a || void 0 === a ? {
                    ...e,
                    open: !1
                } : e)
            }
        }
    case "REMOVE_TOAST":
        return void 0 === t.toastId ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(e => e.id !== t.toastId)
        }
    }
}
  , Nt = []
let St = {
    toasts: []
}
function It(e) {
    St = _t(St, e),
    Nt.forEach(e => {
        e(St)
    }
    )
}
function Pt({...e}) {
    const t = (kt = (kt + 1) % Number.MAX_SAFE_INTEGER,
    kt.toString())
      , a = () => It({
        type: "DISMISS_TOAST",
        toastId: t
    })
    return It({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: e => {
                e || a()
            }
        }
    }),
    {
        id: t,
        dismiss: a,
        update: e => It({
            type: "UPDATE_TOAST",
            toast: {
                ...e,
                id: t
            }
        })
    }
}
const zt = e => {
    switch (e) {
    case "success":
    default:
        return a.jsx("img", {
            src: "/assets/mnd26uwv-CFhTQmgf.png",
            alt: "Success",
            className: "w-6 h-6 shrink-0"
        })
    case "destructive":
        return a.jsx("img", {
            src: "/assets/mnd26uwv-BicXsPWX.png",
            alt: "Error",
            className: "w-6 h-6 shrink-0"
        })
    case "info":
        return a.jsx("img", {
            src: "/assets/mnd26uwv-C949DP8e.png",
            alt: "Info",
            className: "w-6 h-6 shrink-0"
        })
    case "warning":
        return a.jsx("img", {
            src: "/assets/mnd26uwv-JNYGcX9x.png",
            alt: "Warning",
            className: "w-6 h-6 shrink-0"
        })
    }
}
function At() {
    const {toasts: e} = function() {
        const [e,t] = o.useState(St)
        return o.useEffect( () => (Nt.push(t),
        () => {
            const e = Nt.indexOf(t)
            e > -1 && Nt.splice(e, 1)
        }
        ), [e]),
        {
            ...e,
            toast: Pt,
            dismiss: e => It({
                type: "DISMISS_TOAST",
                toastId: e
            })
        }
    }()
    return a.jsxs(gt, {
        duration: 2e3,
        children: [e.map(function({id: e, title: t, description: o, action: r, variant: n, ...s}) {
            const i = (e => {
                switch (e) {
                case "success":
                default:
                    return "text-[#064E3B]"
                case "destructive":
                    return "text-[#7F1D1D]"
                case "info":
                    return "text-[#1E3A8A]"
                case "warning":
                    return "text-[#713F12]"
                }
            }
            )(n)
            return a.jsxs(vt, {
                variant: n ?? void 0,
                ...s,
                children: [zt(n), a.jsxs("div", {
                    className: Tt("flex-1 flex flex-col gap-1", i),
                    children: [t && a.jsx(xt, {
                        className: Tt("font-outfit text-sm leading-none", i),
                        children: t
                    }), o && a.jsx(wt, {
                        className: Tt("font-outfit text-sm leading-none", i),
                        children: o
                    })]
                }), r, a.jsx(yt, {
                    className: i
                })]
            }, e)
        }), a.jsx(ht, {})]
    })
}
function Tt(...e) {
    return e.filter(Boolean).join(" ")
}
const Ot = p
o.forwardRef( ({className: e, sideOffset: t=4, ...o}, r) => a.jsx(m, {
    ref: r,
    sideOffset: t,
    className: ut("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...o
})).displayName = m.displayName
class Ct {
    static getEnvironment() {
        return "production"
    }
    static getBaseUrl() {
        return this.isProd() ? "https://iodp.ivacbd.com/iams/api/v1" : this.isUat() ? "https://iodp.ivacbd.com/iams/api/v1" : (this.isDev(),
        "https://iodp.ivacbd.com/iams/api/v1")
    }
    static getTurnstileSiteKey() {
        return this.isProd() ? "0x4AAAAAACghKkJHL1t7UkuZ" : (this.isUat() || this.isDev(),
        "0x4AAAAAACleJqVBVEM5hsPz")
    }
    static isDev() {
        return "development" === this.getEnvironment()
    }
    static isUat() {
        const e = this.getEnvironment()
        return "uat" === e || "staging" === e
    }
    static isProd() {
        return "production" === this.getEnvironment()
    }
}
const Dt = x.create({
    baseURL: Ct.getBaseUrl(),
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache"
    }
})
Dt.interceptors.request.use(e => {
    e.headers["Cache-Control"] = "no-cache, no-store, must-revalidate",
    e.headers.Pragma = "no-cache"
    const t = localStorage.getItem("auth-storage")
    if (t)
        try {
            const a = JSON.parse(t)
            a?.state?.token && (e.headers.Authorization = `Bearer ${a.state.token}`)
        } catch {}
    return e.data instanceof FormData && delete e.headers["Content-Type"],
    e
}
, e => Promise.reject(e)),
Dt.interceptors.response.use(e => e, e => (401 !== e.response?.status || e.config?.url?.includes("/auth/signin") || (localStorage.removeItem("auth-storage"),
window.location.href = "/signin"),
Promise.reject(e))),
Dt.interceptors.response.use(e => e, e => {
    const t = e.response?.data
      , a = {
        status: t?.statusCode ?? t?.status ?? e.response?.status,
        error: t?.message ?? t?.error ?? "Something went wrong",
        message: t?.message ?? t?.error,
        timestamp: t?.timestamp ?? t?.serverTime
    }
    return Promise.reject(a)
}
)
const Mt = async () => (await Dt.get("/high-commissions")).data
  , Lt = async e => (await Dt.post("/appointment/appointment-booking-config", e)).data
  , Rt = async () => (await Dt.post("/appointment/get-booking-config", {})).data
  , Vt = async () => (await Dt.get("/file/file-confirmation-and-slot-status")).data
  , Bt = async e => (await Dt.post("/slots/reserveSlot", e)).data
  , Ft = async () => (await Dt.get("/file/payment-amount")).data
  , qt = () => g({
    queryKey: ["high-commissions"],
    queryFn: Mt
})
  , $t = (e, t=!0) => g({
    queryKey: ["ivac-centers", e],
    queryFn: () => {
        if (!e)
            throw new Error("Mission ID is required")
        return (async e => (await Dt.get(`/ivac-centers/${e}`)).data)(e)
    }
    ,
    enabled: t && !!e
})
  , Yt = () => {
    const e = b()
    return h({
        mutationFn: Lt,
        onSuccess: () => {
            e.invalidateQueries({
                queryKey: ["file-confirmation-and-slot-status"]
            })
        }
    })
}
  , Kt = (e=!0) => g({
    queryKey: ["booking-config"],
    queryFn: Rt,
    enabled: e
})
  , Ut = (e=!0) => g({
    queryKey: ["file-confirmation-and-slot-status"],
    queryFn: Vt,
    enabled: e
})
  , Gt = () => h({
    mutationFn: Bt
})
  , Ht = ["notice", "mission", "file-upload"]
  , Wt = ["time-slot", "continue-payment"]
  , Xt = ({children: e, route: t}) => {
    const {data: o, isLoading: r, isError: n} = Ut(!0)
      , s = w()
    if (r)
        return a.jsx("div", {
            children: "Loading..."
        })
    if (n || !o?.data || !o.data)
        return a.jsx("div", {
            children: "Error loading status"
        })
    const {fileUploadConfirmed: i, slotOpen: l, paymentConfirm: d, uploadFile: c, uploadEnd: u} = o.data
    return (d ? "declaration" === t || "confirm-payment" === t : !c || u || i ? u && !i ? "declaration-not-allowed" === t : i && l ? Wt.includes(t) : i && !l ? "waiting" === t : "blocked" === t : Ht.includes(t)) ? a.jsx(a.Fragment, {
        children: e
    }) : a.jsx(k, {
        to: "/appointment/" + (d ? "declaration" : !c || u || i ? u && !i ? "declaration-not-allowed" : i && l ? "time-slot" : i && !l ? "waiting" : "blocked" : "notice"),
        replace: !0,
        state: {
            from: s
        }
    })
}
  , Jt = e => {
    let t
    const a = new Set
      , o = (e, o) => {
        const r = "function" == typeof e ? e(t) : e
        if (!Object.is(r, t)) {
            const e = t
            t = (null != o ? o : "object" != typeof r || null === r) ? r : Object.assign({}, t, r),
            a.forEach(a => a(t, e))
        }
    }
      , r = () => t
      , n = {
        setState: o,
        getState: r,
        getInitialState: () => s,
        subscribe: e => (a.add(e),
        () => a.delete(e))
    }
      , s = t = e(o, r, n)
    return n
}
  , Qt = e => e
  , Zt = t => {
    const a = (e => e ? Jt(e) : Jt)(t)
      , o = t => function(t, a=Qt) {
        const o = e.useSyncExternalStore(t.subscribe, e.useCallback( () => a(t.getState()), [t, a]), e.useCallback( () => a(t.getInitialState()), [t, a]))
        return e.useDebugValue(o),
        o
    }(a, t)
    return Object.assign(o, a),
    o
}
  , ea = e => e ? Zt(e) : Zt
  , ta = {
    phone: "",
    isPhoneVerfied: !1,
    email: "",
    isEmailVerified: !1,
    surname: "",
    dateOfBirth: "",
    phoneOTP: "",
    emailOTP: "",
    givenName: "",
    nid: null,
    passport: "",
    password: "",
    confirmPassword: "",
    consent: !1
}
  , aa = ea(e => ({
    currentStep: "verify-otp",
    signupData: ta,
    serverError: null,
    updateSignupData: t => e(e => ({
        signupData: {
            ...e.signupData,
            ...t
        }
    })),
    setServerError: t => e({
        serverError: t
    }),
    resetSignup: () => e({
        currentStep: "verify-otp",
        signupData: ta,
        serverError: null
    })
}))
  , oa = ({children: e, requiredStep: t}) => {
    const o = w()
      , r = aa(e => e.signupData)
      , n = () => !!(r.phone && r.email && r.isPhoneVerfied && r.isEmailVerified)
      , s = () => !!(n() && r.surname && r.givenName && r.dateOfBirth)
      , i = () => !!(s() && r.password && r.confirmPassword)
    let l = !1
    switch (t) {
    case "info":
        l = n()
        break
    case "password":
        l = s()
        break
    case "consent":
        l = i()
        break
    default:
        l = !1
    }
    if (!l) {
        const e = n() ? "password" !== t || s() ? "consent" !== t || i() ? "/signup" : "/signup/password" : "/signup/info" : "/signup"
        return a.jsx(k, {
            to: e,
            replace: !0,
            state: {
                from: o.pathname
            }
        })
    }
    return e
}
function ra(e, t) {
    let a
    try {
        a = e()
    } catch (o) {
        return
    }
    return {
        getItem: e => {
            var t
            const o = e => null === e ? null : JSON.parse(e, void 0)
              , r = null != (t = a.getItem(e)) ? t : null
            return r instanceof Promise ? r.then(o) : o(r)
        }
        ,
        setItem: (e, t) => a.setItem(e, JSON.stringify(t, void 0)),
        removeItem: e => a.removeItem(e)
    }
}
const na = e => t => {
    try {
        const a = e(t)
        return a instanceof Promise ? a : {
            then: e => na(e)(a),
            catch(e) {
                return this
            }
        }
    } catch (a) {
        return {
            then(e) {
                return this
            },
            catch: e => na(e)(a)
        }
    }
}
  , sa = (e, t) => (a, o, r) => {
    let n = {
        storage: ra( () => localStorage),
        partialize: e => e,
        version: 0,
        merge: (e, t) => ({
            ...t,
            ...e
        }),
        ...t
    }
      , s = !1
    const i = new Set
      , l = new Set
    let d = n.storage
    if (!d)
        return e( (...e) => {
            a(...e)
        }
        , o, r)
    const c = () => {
        const e = n.partialize({
            ...o()
        })
        return d.setItem(n.name, {
            state: e,
            version: n.version
        })
    }
      , u = r.setState
    r.setState = (e, t) => (u(e, t),
    c())
    const m = e( (...e) => (a(...e),
    c()), o, r)
    let p
    r.getInitialState = () => m
    const f = () => {
        var e, t
        if (!d)
            return
        s = !1,
        i.forEach(e => {
            var t
            return e(null != (t = o()) ? t : m)
        }
        )
        const r = (null == (t = n.onRehydrateStorage) ? void 0 : t.call(n, null != (e = o()) ? e : m)) || void 0
        return na(d.getItem.bind(d))(n.name).then(e => {
            if (e) {
                if ("number" != typeof e.version || e.version === n.version)
                    return [!1, e.state]
                if (n.migrate) {
                    const t = n.migrate(e.state, e.version)
                    return t instanceof Promise ? t.then(e => [!0, e]) : [!0, t]
                }
            }
            return [!1, void 0]
        }
        ).then(e => {
            var t
            const [r,s] = e
            if (p = n.merge(s, null != (t = o()) ? t : m),
            a(p, !0),
            r)
                return c()
        }
        ).then( () => {
            null == r || r(p, void 0),
            p = o(),
            s = !0,
            l.forEach(e => e(p))
        }
        ).catch(e => {
            null == r || r(void 0, e)
        }
        )
    }
    return r.persist = {
        setOptions: e => {
            n = {
                ...n,
                ...e
            },
            e.storage && (d = e.storage)
        }
        ,
        clearStorage: () => {
            null == d || d.removeItem(n.name)
        }
        ,
        getOptions: () => n,
        rehydrate: () => f(),
        hasHydrated: () => s,
        onHydrate: e => (i.add(e),
        () => {
            i.delete(e)
        }
        ),
        onFinishHydration: e => (l.add(e),
        () => {
            l.delete(e)
        }
        )
    },
    n.skipHydration || f(),
    p || m
}
  , ia = ea()(sa(e => ({
    token: null,
    userId: null,
    expiresAt: null,
    isAuthenticated: !1,
    isVerified: !1,
    requestId: null,
    phone: null,
    password: null,
    otpSentAt: null,
    setAuth: ({token: t, userId: a, expiresAt: o, requestId: r, phone: n, password: s, otpSentAt: i}) => e({
        token: t,
        userId: a,
        expiresAt: o,
        requestId: r,
        phone: n,
        isAuthenticated: !0,
        isVerified: !1,
        password: s,
        otpSentAt: i
    }),
    setVerified: () => e({
        isVerified: !0
    }),
    removePassword: () => e({
        password: null
    }),
    removeRequestId: () => e({
        requestId: null
    }),
    clearAuth: () => e( () => ({
        token: null,
        userId: null,
        expiresAt: null,
        isAuthenticated: !1,
        isVerified: !1,
        requestId: null,
        phone: null,
        password: null,
        otpSentAt: null
    }))
}), {
    name: "auth-storage"
}))
  , la = ({children: e}) => {
    const t = ia(e => e.token)
      , o = ia(e => e.requestId)
      , r = ia(e => e.isVerified)
      , n = ia(e => e.phone)
      , s = ia(e => e.password)
    return r ? a.jsx(k, {
        to: "/",
        replace: !0
    }) : t && o && n && s ? e : a.jsx(k, {
        to: "/signin",
        replace: !0
    })
}
  , da = async e => (await Dt.post("/auth/signin", e)).data
  , ca = async e => (await Dt.post("/otp/signupOtp", {
    phone: e,
    otpChannel: "PHONE"
})).data
  , ua = async ({phone: e, otp: t, requestId: a}) => {
    const o = await Dt.post("/otp/verifyOtp", {
        requestId: a,
        phone: e,
        code: t,
        otpChannel: "PHONE"
    })
    if (!o.data.data?.verified) {
        const e = o.data.data?.verificationStatus || o.data.message || "Phone OTP verification failed"
        throw new Error(e)
    }
    if (!o.data.successFlag) {
        const e = o.data.message || "Phone OTP verification failed"
        throw new Error(e)
    }
    return o.data
}
  , ma = async e => (await Dt.post("/otp/signupOtp", {
    email: e,
    otpChannel: "EMAIL"
})).data
  , pa = async ({email: e, otp: t, requestId: a}) => {
    const o = await Dt.post("/otp/verifyOtp", {
        requestId: a,
        email: e,
        code: t,
        otpChannel: "EMAIL"
    })
    if (!o.data.data?.verified) {
        const e = o.data.data?.verificationStatus || o.data.message || "Email OTP verification failed"
        throw new Error(e)
    }
    if (!o.data.successFlag) {
        const e = o.data.message || "Email OTP verification failed"
        throw new Error(e)
    }
    return o.data
}
  , fa = async e => {
    const t = await Dt.post("/auth/signup", e)
    if (!t.data.successFlag) {
        const e = t.data.message || "Signup failed"
        throw new Error(e)
    }
    return t.data
}
  , ga = async (e, t) => {
    const a = await Dt.post("/otp/verifySigninOtp", e, {
        headers: {
            Authorization: `Bearer ${t}`
        }
    })
    if (!a.data.data?.verified) {
        const e = a.data.data?.verificationStatus || a.data.message || "Login OTP verification failed"
        throw new Error(e)
    }
    if (!a.data.successFlag) {
        const e = a.data.message || "Login OTP verification failed"
        throw new Error(e)
    }
    return a.data
}
  , ha = async e => {
    const t = await Dt.post("/forgot-password/sendOtp", e)
    if (!t.data.successFlag) {
        const e = t.data.message || "Failed to send OTP"
        throw new Error(e)
    }
    return t.data
}
  , ba = async e => {
    const t = await Dt.post("/forgot-password/verifyOtp", e)
    if (!t.data.data?.verified) {
        const e = t.data.data?.verificationStatus || t.data.message || "OTP verification failed"
        throw new Error(e)
    }
    if (!t.data.successFlag) {
        const e = t.data.message || "OTP verification failed"
        throw new Error(e)
    }
    return t.data
}
  , va = async e => {
    const t = await Dt.post("/forgot-password", e)
    if (!t.data.successFlag) {
        const e = t.data.message || "Failed to change password"
        throw new Error(e)
    }
    return t.data
}
  , ya = () => {
    const e = ia(e => e.setAuth)
    return h({
        mutationFn: da,
        onSuccess: (t, a) => {
            t.data?.accessToken && t.data?.requestId && t.data?.userId && e({
                token: t.data.accessToken,
                userId: t.data.userId,
                expiresAt: t.data.expiresAt,
                requestId: t.data.requestId,
                phone: a.phone,
                password: a.password,
                otpSentAt: Date.now()
            })
        }
    })
}
  , xa = () => {
    const {token: e, isAuthenticated: t, isVerified: a, userId: o, clearAuth: r} = ia()
    return {
        token: e,
        isAuthenticatedAndVerified: t && a,
        userId: o,
        clearAuth: r
    }
}
  , wa = ({children: e}) => {
    const {isAuthenticatedAndVerified: t} = xa()
    return t ? e : a.jsx(k, {
        to: "/signin",
        replace: !0
    })
}
  , ka = ({children: e}) => {
    const {isAuthenticatedAndVerified: t} = xa()
    return t ? a.jsx(k, {
        to: "/",
        replace: !0
    }) : e
}
  , ja = o.lazy( () => S( () => import("./mnd26uwv-BYCCyGzc.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])))
  , Ea = o.lazy( () => S( () => import("./mnd26uwv-CUic9bId.js"), __vite__mapDeps([9, 1, 10, 2, 4, 3, 11, 12, 13, 14, 7, 6, 8])).then(e => ({
    default: e.SignupPage
})))
  , _a = o.lazy( () => S( () => import("./mnd26uwv-r3hX8Zb0.js"), __vite__mapDeps([15, 1, 10, 2, 4, 3, 12, 11, 16, 17, 6, 18, 7, 8])).then(e => ({
    default: e.InfoPage
})))
  , Na = o.lazy( () => S( () => import("./mnd26uwv-DuUOWZD4.js"), __vite__mapDeps([19, 1, 10, 2, 4, 3, 12, 11, 6, 7, 8])).then(e => ({
    default: e.PasswordPage
})))
  , Sa = o.lazy( () => S( () => import("./mnd26uwv-DlKTwYmW.js"), __vite__mapDeps([20, 1, 10, 2, 4, 3, 11, 14, 7, 6, 8])).then(e => ({
    default: e.ConsentPage
})))
  , Ia = o.lazy( () => S( () => import("./mnd26uwv-D84qgYy9.js"), __vite__mapDeps([21, 1, 10, 2, 4, 3, 12, 11, 7, 13, 22, 6, 8])).then(e => ({
    default: e.ForgetPasswordPage
})))
  , Pa = o.lazy( () => S( () => import("./mnd26uwv-CDSfMIdE.js"), __vite__mapDeps([23, 1, 2, 24, 7, 3, 4, 25, 5, 6, 8])).then(e => ({
    default: e.CheckPaymentStatusPage
})))
  , za = o.lazy( () => S( () => import("./mnd26uwv-DW0q8GR8.js"), __vite__mapDeps([26, 1, 10, 2, 4, 3, 12, 11, 22, 6, 7, 8])).then(e => ({
    default: e.SignInPage
})))
  , Aa = o.lazy( () => S( () => import("./mnd26uwv-Bic9aujL.js"), __vite__mapDeps([27, 1, 10, 2, 4, 3, 13, 11, 22, 7, 6, 8])).then(e => ({
    default: e.VerifyLoginPhoneOTPPage
})))
  , Ta = o.lazy( () => S( () => import("./mnd26uwv-QaLeIwJb.js"), __vite__mapDeps([28, 1, 25, 5, 2, 4, 3, 11, 6, 7, 8])))
  , Oa = o.lazy( () => S( () => import("./mnd26uwv-hLxbHcfV.js"), __vite__mapDeps([29, 1, 25, 5, 2, 4, 3, 11, 7, 30, 17, 6, 8])).then(e => ({
    default: e.UploadFilePageV2
})))
  , Ca = o.lazy( () => S( () => import("./mnd26uwv-BcPWN6LC.js"), __vite__mapDeps([31, 1, 25, 5, 2, 4, 3, 11, 30, 6, 7, 8])).then(e => ({
    default: e.AppointmentMissionPage
})))
  , Da = o.lazy( () => S( () => import("./mnd26uwv-DTjcsOJ4.js"), __vite__mapDeps([32, 1, 2, 25, 5, 4, 3, 6, 7, 8])))
  , Ma = o.lazy( () => S( () => import("./mnd26uwv-BkEb1jyZ.js"), __vite__mapDeps([33, 1, 25, 5, 2, 4, 3, 11, 22, 30, 6, 7, 8])))
  , La = o.lazy( () => S( () => import("./mnd26uwv-CpigsgIN.js"), __vite__mapDeps([34, 1, 25, 5, 2, 4, 3, 11, 24, 7, 30, 6, 8])))
  , Ra = o.lazy( () => S( () => import("./mnd26uwv-BfWgOwmi.js"), __vite__mapDeps([35, 1, 25, 5, 2, 4, 3, 6, 7, 8])))
  , Va = o.lazy( () => S( () => import("./mnd26uwv-etBkSpiQ.js"), __vite__mapDeps([36, 1, 25, 5, 2, 4, 3, 11, 6, 7, 8])))
  , Ba = o.lazy( () => S( () => import("./mnd26uwv-DTbrd8vO.js"), __vite__mapDeps([37, 1, 25, 5, 2, 4, 3, 6, 7, 8])).then(e => ({
    default: e.DeclarationNotAllowedPage
})))
  , Fa = o.lazy( () => S( () => import("./mnd26uwv-C5i6Nz6U.js"), __vite__mapDeps([38, 1, 25, 5, 2, 4, 3, 6, 7, 8])).then(e => ({
    default: e.BlockedPage
})))
  , qa = o.lazy( () => S( () => import("./mnd26uwv-CpZf-qqQ.js"), __vite__mapDeps([39, 1, 11, 3, 25, 5, 2, 4, 6, 7, 8])).then(e => ({
    default: e.PaymentFailPage
})))
  , $a = o.lazy( () => S( () => import("./mnd26uwv-DkyJEBxU.js"), __vite__mapDeps([40, 1, 11, 3, 25, 5, 2, 4, 6, 7, 8])).then(e => ({
    default: e.PaymentCancelPage
})))
  , Ya = o.lazy( () => S( () => import("./mnd26uwv-DfX-jPyY.js"), __vite__mapDeps([41, 1, 25, 5, 2, 4, 3, 42, 7, 6, 8])))
  , Ka = o.lazy( () => S( () => import("./mnd26uwv-D7GgB890.js"), __vite__mapDeps([43, 1, 25, 5, 2, 4, 3, 12, 11, 13, 16, 17, 6, 18, 42, 7, 8])))
  , Ua = o.lazy( () => S( () => import("./mnd26uwv-Cvg9GmtW.js"), __vite__mapDeps([44, 1, 4])))
  , Ga = new v({
    defaultOptions: {
        queries: {
            staleTime: 0,
            gcTime: 0,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !0,
            retry: !1
        },
        mutations: {
            gcTime: 0,
            retry: !1
        }
    }
})
  , Ha = () => (o.useEffect( () => {
    const e = e => e.preventDefault()
      , t = e => e.preventDefault()
      , a = e => {
        const t = e.key.toUpperCase()
          , a = "F12" === t
          , o = e.ctrlKey && e.shiftKey && ("I" === t || "J" === t || "C" === t || "K" === t) || e.metaKey && e.shiftKey && ("I" === t || "J" === t || "C" === t || "K" === t) || e.metaKey && e.altKey && ("I" === t || "C" === t)
          , r = e.ctrlKey && "U" === t || e.metaKey && "U" === t;
        (a || o || r) && e.preventDefault()
    }
    return document.addEventListener("contextmenu", e),
    document.addEventListener("copy", t),
    document.addEventListener("paste", t),
    document.addEventListener("cut", t),
    document.addEventListener("keydown", a),
    () => {
        document.removeEventListener("contextmenu", e),
        document.removeEventListener("copy", t),
        document.removeEventListener("paste", t),
        document.removeEventListener("cut", t),
        document.removeEventListener("keydown", a)
    }
}
, []),
a.jsx(y, {
    client: Ga,
    children: a.jsxs(Ot, {
        children: [a.jsx(At, {}), a.jsx(U, {}), a.jsx(j, {
            children: a.jsx(o.Suspense, {
                fallback: a.jsx("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: "Loading\u2026"
                }),
                children: a.jsxs(E, {
                    children: [a.jsx(_, {
                        path: "/",
                        element: a.jsx(ja, {})
                    }), a.jsx(_, {
                        path: "/signup",
                        element: a.jsx(ka, {
                            children: a.jsx(Ea, {})
                        })
                    }), a.jsx(_, {
                        path: "/signup/info",
                        element: a.jsx(ka, {
                            children: a.jsx(oa, {
                                requiredStep: "info",
                                children: a.jsx(_a, {})
                            })
                        })
                    }), a.jsx(_, {
                        path: "/signup/password",
                        element: a.jsx(ka, {
                            children: a.jsx(oa, {
                                requiredStep: "password",
                                children: a.jsx(Na, {})
                            })
                        })
                    }), a.jsx(_, {
                        path: "/signup/consent",
                        element: a.jsx(ka, {
                            children: a.jsx(oa, {
                                requiredStep: "consent",
                                children: a.jsx(Sa, {})
                            })
                        })
                    }), a.jsx(_, {
                        path: "/forget-password",
                        element: a.jsx(ka, {
                            children: a.jsx(Ia, {})
                        })
                    }), a.jsx(_, {
                        path: "/check-payment-status",
                        element: a.jsx(Pa, {})
                    }), a.jsx(_, {
                        path: "/signin",
                        element: a.jsx(ka, {
                            children: a.jsx(za, {})
                        })
                    }), a.jsx(_, {
                        path: "/verify-login-phone-otp",
                        element: a.jsx(la, {
                            children: a.jsx(Aa, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/notice",
                        element: a.jsx(Xt, {
                            route: "notice",
                            children: a.jsx(Ta, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/file-upload",
                        element: a.jsx(Xt, {
                            route: "file-upload",
                            children: a.jsx(Oa, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/mission",
                        element: a.jsx(Xt, {
                            route: "mission",
                            children: a.jsx(Ca, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/waiting",
                        element: a.jsx(Xt, {
                            route: "waiting",
                            children: a.jsx(Da, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/time-slot",
                        element: a.jsx(Xt, {
                            route: "time-slot",
                            children: a.jsx(Ma, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/continue-payment",
                        element: a.jsx(Xt, {
                            route: "continue-payment",
                            children: a.jsx(La, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/confirm-payment",
                        element: a.jsx(wa, {
                            children: a.jsx(Xt, {
                                route: "confirm-payment",
                                children: a.jsx(Ra, {})
                            })
                        })
                    }), a.jsx(_, {
                        path: "/appointment/declaration",
                        element: a.jsx(Xt, {
                            route: "declaration",
                            children: a.jsx(Va, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/declaration-not-allowed",
                        element: a.jsx(Xt, {
                            route: "declaration-not-allowed",
                            children: a.jsx(Ba, {})
                        })
                    }), a.jsx(_, {
                        path: "/appointment/blocked",
                        element: a.jsx(Xt, {
                            route: "blocked",
                            children: a.jsx(Fa, {})
                        })
                    }), a.jsx(_, {
                        path: "/payment/fail",
                        element: a.jsx(qa, {})
                    }), a.jsx(_, {
                        path: "/payment/cancel",
                        element: a.jsx($a, {})
                    }), a.jsx(_, {
                        path: "/profile",
                        element: a.jsx(wa, {
                            children: a.jsx(Ya, {})
                        })
                    }), a.jsx(_, {
                        path: "/profile/edit",
                        element: a.jsx(wa, {
                            children: a.jsx(Ka, {})
                        })
                    }), a.jsx(_, {
                        path: "*",
                        element: a.jsx(Ua, {})
                    })]
                })
            })
        })]
    })
}))
r.createRoot(document.getElementById("root")).render(a.jsx(Ha, {}))
export {sa as A, Ct as C, aa as a, ma as b, ca as c, ua as d, ea as e, va as f, ba as g, ha as h, ya as i, ia as j, ga as k, Dt as l, ut as m, Yt as n, qt as o, $t as p, Ut as q, Gt as r, fa as s, Pt as t, xa as u, pa as v, Kt as w, ft as x, Ft as y, J as z}

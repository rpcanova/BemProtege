(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5728: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(5841)
            }])
        },
        5841: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return V
                }
            });
            var t = a(5893),
                o = a(7294),
                r = a(9008),
                l = a.n(r);
            a(5675);
            var i = a(1664),
                c = a.n(i);
            let n = e => {
                let {
                    menus: s,
                    children: a
                } = e, [r, l] = (0, o.useState)(!1), [i, n] = (0, o.useState)(!1), [d, x] = (0, o.useState)(0), m = (0, o.useRef)(), p = () => {
                    x(window.innerWidth), window.innerWidth
                }, u = e => {
                    if (m.current.scrollTop = 0, l(e), e) {
                        var s;
                        window.location.hash = "responsive-menu", null === (s = document.querySelector("body")) || void 0 === s || s.classList.add("menu-responsive--body-block")
                    } else window.location.hash = ""
                };
                return (0, o.useEffect)(() => (window.addEventListener("resize", p), () => {
                    window.removeEventListener("resize", p)
                }), []), (0, o.useEffect)(() => {
                    if (!r && null !== document) {
                        var e;
                        null === (e = document.querySelector("body")) || void 0 === e || e.classList.remove("menu-responsive--body-block")
                    }
                }, [r]), (0, o.useEffect)(() => {
                    window.onhashchange = e => {
                        e.preventDefault(), location.hash || u(!1)
                    }
                }, []), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        className: "menu-responsive-wrapper-mobile",
                        children: [d < 1024 && (0, t.jsxs)("div", {
                            className: "flex justify-between px-3 py-3 items-center",
                            children: [(0, t.jsx)(c(), {
                                href: "/",
                                className: "flex",
                                children: (0, t.jsx)("img", {
                                    src: "/fazer-cotacao/logo.svg",
                                    alt: "Bem Protege Logo",
                                    className: "w-36 md:w-36 lg:w-48 h-auto"
                                })
                            }), (0, t.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    u(!0)
                                },
                                children: (0, t.jsx)("i", {
                                    className: "bi-list text-2xl"
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "menu-responsive-container",
                            children: (0, t.jsx)("div", {
                                ref: m,
                                className: "flex justify-center text-lg font-semibold text-center items-center menu-responsive ".concat(r ? "menu-responsive--open" : "menu-responsive--close"),
                                children: (0, t.jsxs)("nav", {
                                    className: "flex flex-col justify-between h-full py-10 space-y-6",
                                    children: [(0, t.jsx)("img", {
                                        src: "/logo.svg",
                                        alt: "Bem Protege Logo",
                                        className: "w-48 h-auto"
                                    }), (0, t.jsx)("ul", {
                                        className: "space-y-4",
                                        children: s && s.map(e => (0, t.jsx)("li", {
                                            children: (0, t.jsx)("a", {
                                                href: e.url,
                                                onClick: () => {
                                                    u(!1)
                                                },
                                                children: e.title
                                            })
                                        }, e.id))
                                    }), (0, t.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            u(!1)
                                        },
                                        className: "text-lg text-tbblue-500 hover:text-tbblue-100",
                                        children: "FECHAR MENU"
                                    })]
                                })
                            })
                        })]
                    }), (r || i) && d < 1024 && (0, t.jsx)("button", {
                        id: "js-menu-responsive__background",
                        type: "button",
                        className: "menu-responsive__background",
                        style: i ? {
                            opacity: ".1"
                        } : {
                            opacity: ".3"
                        },
                        onClick: () => {
                            u(!1)
                        },
                        children: "Fechar"
                    }), (0, t.jsx)("div", {
                        className: "menu-responsive-wrapper",
                        children: a
                    })]
                })
            };
            var d = a(7650),
                x = a(4925),
                m = a.n(x);
            let p = e => {
                    let {
                        type: s = "LINK",
                        color: a = "BLUE",
                        icon: o = "envelope",
                        isFull: r = !1,
                        children: l,
                        style: i = "",
                        url: c = "/",
                        size: n = "BIG",
                        title: d = "",
                        btAction: x
                    } = e;
                    return "BUTTON" === s || "SUBMIT" === s ? (0, t.jsxs)("button", {
                        onClick: () => "BUTTON" === s && x("MY_MODAL", d),
                        type: "SUBMIT" === s ? "submit" : "button",
                        className: "group transition rounded-xl space-x-2 items-center inline-flex\n				".concat("SMALL" === n ? "py-2 px-4" : "py-3 px-7", "\n				").concat(r ? "w-full" : "w-full md:w-auto", "\n				").concat("BLUE" === a ? "bg-tbblue-500 hover:bg-tbblue-100 text-white" : "bg-white hover:bg-white text-tbblue-500", "\n			justify-center ").concat(i),
                        children: [(0, t.jsx)("span", {
                            className: "".concat("SMALL" === n ? "text-md" : "text-xl", " text-md font-semibold"),
                            children: l
                        }), (0, t.jsx)("i", {
                            className: "bi-".concat(o, " ").concat("SMALL" === n ? "text-lg" : "text-xl", " text-md group-hover:ml-4 transition-all")
                        })]
                    }) : "LINK" === s || "LINK-CLEAN" === s ? (0, t.jsxs)(m(), {
                        offset: () => 100,
                        href: c,
                        className: "LINK" === s ? " transition rounded-xl space-x-2 items-center inline-flex  \n						".concat("SMALL" === n ? "py-2 px-4" : "py-3 px-7", "\n						").concat(r ? "w-full" : "w-full md:w-auto", "\n						  \n						  ").concat("BLUE" === a ? "bg-tbblue-500 hover:bg-tbblue-100 text-white" : "bg-white hover:bg-white text-tbblue-500", "\n						  \n						  group justify-center ").concat(i) : "text-tbblue-500 hover:text-tbblue-100 transition space-x-2 items-center inline-flex ".concat(r ? "w-full" : "w-full md:w-auto", " group justify-center ").concat(i),
                        children: [(0, t.jsx)("span", {
                            className: "".concat("SMALL" === n ? "text-md" : "text-xl", " font-semibold"),
                            children: l
                        }), (0, t.jsx)("i", {
                            className: "bi-".concat(o, " ").concat("SMALL" === n ? "text-lg" : "text-xl", " ").concat("LINK-CLEAN" === s ? "mt-1" : "mt-0", " text-md group-hover:ml-4 transition-all")
                        })]
                    }) : void 0
                },
                u = [{
                    id: 1,
                    title: "Planos",
                    url: "#protecao-veicular"
                }, {
                    id: 2,
                    title: "Benef\xedcios",
                    url: "#beneficios"
                }, {
                    id: 3,
                    title: "Bem Protege",
                    url: "#bem-protege"
                }, {
                    id: 4,
                    title: "Depoimentos",
                    url: "#depoimentos"
                }, {
                    id: 5,
                    title: "D\xfavidas",
                    url: "#duvidas-frequentes"
                }],
                g = e => {
                    let {
                        active: s,
                        openModal: a
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: " xl:max-w-full px-5 hidden lg:flex bg-white justify-between opacity-100 fixed w-full z-30 shadow-lg transition-all duration-200 ".concat(s ? "-top-32 " : "top-0 hidden"),
                        children: [(0, t.jsx)("div", {
                            className: "flex py-2 space-x-5",
                            children: (0, t.jsx)(c(), {
                                href: "/",
                                className: "flex",
                                children: (0, t.jsx)("img", {
                                    src: "/simulacao-protecao-veicular/logo.svg",
                                    alt: "Bem Protege Logo",
                                    className: "w-10 md:w-36 lg:w-48 h-auto"
                                })
                            })
                        }), (0, t.jsx)("nav", {
                            className: "flex items-center",
                            children: (0, t.jsxs)("ul", {
                                className: "flex items-center space-x-4 text-gray-500 ",
                                children: [u.map(e => (0, t.jsx)(m(), {
                                    offset: () => 10,
                                    href: e.url,
                                    children: (0, t.jsx)("li", {
                                        className: "text-md my-2 mx-2 rounded-lg text-gray-800 transition opacity-60 hover:opacity-100 ",
                                        children: e.title
                                    })
                                }, e.id)), (0, t.jsx)(p, {
                                    icon: "arrow-right",
                                    color: "BLUE",
                                    size: "SMALL",
                                    type: "BUTTON",
                                    btAction: a,
                                    children: "Fazer simula\xe7\xe3o"
                                })]
                            })
                        })]
                    })
                },
                h = e => {
                    let {
                        openModal: s
                    } = e, {
                        ref: a,
                        inView: o
                    } = (0, d.YD)({
                        initialInView: !0,
                        threshold: 0
                    });
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)(n, {
                            menus: u,
                            children: [(0, t.jsxs)("div", {
                                className: " px-3 md:px-5 flex bg-[#0082fe] justify-between opacity-100",
                                ref: a,
                                children: [(0, t.jsx)("div", {
                                    className: "flex py-4 space-x-5",
                                    children: (0, t.jsx)(c(), {
                                        href: "/",
                                        className: "flex",
                                        children: (0, t.jsx)("img", {
                                            src: "/simulacao-protecao-veicular/logo-off.svg",
                                            alt: "Bem Protege Logo",
                                            className: "w-10 md:w-36 lg:w-48 h-auto"
                                        })
                                    })
                                }), (0, t.jsx)("nav", {
                                    className: "flex items-center",
                                    children: (0, t.jsxs)("ul", {
                                        className: "flex items-center space-x-4 text-gray-500 ",
                                        children: [u.map(e => (0, t.jsx)(m(), {
                                            offset: () => 10,
                                            href: e.url,
                                            children: (0, t.jsx)("li", {
                                                className: "text-md my-2 mx-2 rounded-lg text-white transition opacity-60 hover:opacity-100 ",
                                                children: e.title
                                            })
                                        }, e.id)), (0, t.jsx)(p, {
                                            icon: "arrow-right",
                                            color: "BLUE",
                                            size: "SMALL",
                                            type: "BUTTON",
                                            btAction: s,
                                            children: "Fazer simula\xe7\xe3o"
                                        })]
                                    })
                                })]
                            }), (0, t.jsx)(g, {
                                active: o,
                                openModal: s
                            })]
                        })
                    })
                };
            a(1163);
            let j = e => {
                    let {
                        value: s = "",
                        isRequired: a = !1
                    } = e, t = !0, o = "";
                    return a && !s && (o = "Marque o checkbox obrigat\xf3rio", t = !1), {
                        hasPassed: t,
                        errorMessage: o
                    }
                },
                b = (e, s) => {
                    let {
                        value: a,
                        type: t,
                        maxLength: o = 100,
                        minLength: r = 0,
                        isEqual: l = !1,
                        isRequired: i = !1
                    } = e, c = !0, n = "", d = a;
                    d = (d = d.trim()).replace(/  +/g, " ");
                    let x = 0 === d.length;
                    if (i && (x && (n = "Campo obrigat\xf3rio", c = !1), "select" !== t && "radio" !== t && (d.length < r && (n = "Deve ter pelo menos ".concat(r, " caracteres"), c = !1), d.length > o && (n = "Deve ter pelo menos ".concat(o, " caracteres"), c = !1), "email" !== t || d.includes("@") || (n = "E-mail inv\xe1lido ", c = !1), !1 !== l))) {
                        let a = "";
                        s.forEach(s => {
                            s.name === e.isEqual && (a = s.value)
                        }), d !== a && (n = "Have to be equal to password input ".concat(l), c = !1)
                    }
                    return {
                        hasPassed: c,
                        errorMessage: n
                    }
                },
                f = (e, s) => {
                    let a = !0,
                        t = "";
                    return e.forEach(o => {
                        if (a) {
                            let r = {
                                hasPassed: !1,
                                errorMessage: ""
                            };
                            ("text" === o.type || "email" === o.type || "password" === o.type || "radio" === o.type || "select" === o.type || "textarea" === o.type) && (o.isEqual, r = b(o, e)), "checkbox" === o.type && (r = j(o)), r.hasPassed || (a = !1, t = r.errorMessage, s(e.map(e => e.name === o.name ? {
                                ...e,
                                error: r.errorMessage
                            } : {
                                ...e
                            })))
                        }
                    }), {
                        hasPassed: a,
                        errorMessage: t
                    }
                },
                v = e => {
                    let {
                        theme: s = "LIGHT"
                    } = e, [a, r] = (0, o.useState)([{
                        name: "name",
                        value: "",
                        error: "",
                        type: "text",
                        isRequired: !0,
                        maxLength: 50,
                        minLength: 3
                    }, {
                        name: "phone",
                        value: "",
                        error: "",
                        type: "text",
                        isRequired: !0,
                        maxLength: 15,
                        minLength: 15
                    }, {
                        name: "email",
                        value: "",
                        error: "",
                        type: "email",
                        isRequired: !0,
                        maxLength: 50,
                        minLength: 5
                    }]), l = () => {
                        window.location.href = "https://www.vendas.bemprotege.com.br/simulacao-protecao-veicular/formulario-enviado#sended"
                    }, i = () => {
                        let e = f(a, r),
                            s = e.hasPassed;
                        return s
                    }, c = (e, s) => {
                        let t = "checkbox" === e.target.type,
                            o = e.target.value;
                        ("email" === e.target.name || "password" === e.target.name || "passwordConfirm" === e.target.name || "phone" === e.target.name) && (o = (o = o.replace(/\s/g, "")).toLowerCase()), "PHONE" === s && (o = (o = (o = o.replace(/\D/g, "")).replace(/^(\d\d)(\d)/g, "($1) $2")).length > 13 ? o.replace(/(\d{5})(\d)/, "$1-$2") : o.replace(/(\d{4})(\d)/, "$1-$2")), "EMAIL" === s && (o = o.replace(/\s/g, "")), r(a.map(s => s.name === e.target.name ? {
                            ...s,
                            value: t ? e.target.checked : o,
                            error: ""
                        } : {
                            ...s
                        }))
                    }, n = e => {
                        e.preventDefault();
                        let s = i();
                        s && l()
                    };
                    return (0, t.jsxs)("form", {
                        className: "lg:my-4 lg:px-0",
                        onSubmit: n,
                        children: [(0, t.jsxs)("label", {
                            htmlFor: a[0].name,
                            className: "block mb-3",
                            children: [(0, t.jsx)("span", {
                                className: "block font-semibold mb-1 ".concat("LIGHT" === s ? "text-gray-700" : "text-white"),
                                children: "Nome *:"
                            }), (0, t.jsx)("input", {
                                type: a[0].type,
                                name: a[0].name,
                                id: a[0].name,
                                maxLength: a[0].maxLength,
                                value: a[0].value,
                                onChange: e => c(e),
                                className: "w-full py-2 px-2 rounded-md border  ".concat("LIGHT" === s ? "border-gray-400" : "border-transparent", " ring-tablue-500 outline-none ").concat(0 === a[0].error.length ? "border border-transparent" : "border border-red-600"),
                                placeholder: "Nome e sobrenome"
                            }), (0, t.jsx)("span", {
                                className: "text-red-800 text-xs block",
                                children: a[0].error
                            })]
                        }), (0, t.jsxs)("label", {
                            htmlFor: a[1].name,
                            className: "block mb-3",
                            children: [(0, t.jsx)("span", {
                                className: "block font-semibold mb-1 ".concat("LIGHT" === s ? "text-gray-700" : "text-white"),
                                children: "Whatsapp *:"
                            }), (0, t.jsx)("input", {
                                type: a[1].type,
                                name: a[1].name,
                                id: a[1].name,
                                maxLength: a[1].maxLength,
                                value: a[1].value,
                                onChange: e => c(e, "PHONE"),
                                className: "w-full py-2 px-2 rounded-md border  ".concat("LIGHT" === s ? "border-gray-400" : "border-transparent", " ring-tablue-500 outline-none ").concat(0 === a[0].error.length ? "border border-transparent" : "border border-red-600"),
                                placeholder: "(XX) XXXXX-XXXX"
                            }), (0, t.jsx)("span", {
                                className: "text-red-800 text-xs block",
                                children: a[1].error
                            })]
                        }), (0, t.jsxs)("label", {
                            htmlFor: a[2].name,
                            className: "block mb-3",
                            children: [(0, t.jsx)("span", {
                                className: "block font-semibold mb-1 ".concat("LIGHT" === s ? "text-gray-700" : "text-white"),
                                children: "E-mail *:"
                            }), (0, t.jsx)("input", {
                                type: a[2].type,
                                name: a[2].name,
                                id: a[2].name,
                                maxLength: a[2].maxLength,
                                value: a[2].value,
                                onChange: e => c(e, "EMAIL"),
                                className: "w-full py-2 px-2 rounded-md border  ".concat("LIGHT" === s ? "border-gray-400" : "border-transparent", " ring-tablue-500 outline-none ").concat(0 === a[0].error.length ? "border border-transparent" : "border border-red-600"),
                                placeholder: "meu@email.com.br"
                            }), (0, t.jsx)("span", {
                                className: "text-red-800 text-xs block",
                                children: a[2].error
                            })]
                        }), (0, t.jsx)(p, {
                            icon: "arrow-right",
                            color: "BLUE",
                            size: "SMALL",
                            isFull: !0,
                            type: "SUBMIT",
                            style: "mt-3",
                            children: "FAZER COTA\xc7\xc3O AGORA"
                        })]
                    })
                },
                N = e => {
                    let {
                        title: s,
                        hasIcon: a = !0
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "flex items-center space-x-4 mb-4",
                        children: [a && (0, t.jsx)("img", {
                            src: "/simulacao-protecao-veicular/icons/icon-head-dash-blue.svg",
                            alt: "Brazil mask",
                            className: "h-full"
                        }), (0, t.jsx)("h3", {
                            className: "text-md font-semibold text-gray-600",
                            children: s
                        })]
                    })
                },
                y = e => {
                    let {
                        children: s,
                        size: a = "H2",
                        color: o,
                        style: r = ""
                    } = e;
                    return "H1" === a ? (0, t.jsx)("h1", {
                        className: "text-2xl lg:text-3xl font-extrabold leading-tight mb-0 lg:mb-4 max-w-lg  ".concat(o ? "bg-gradient-to-r from-[#24D8FF] to-[#FFB545]  bg-clip-text text-transparent" : "headline", " ").concat(r),
                        children: s
                    }) : "H2" === a ? (0, t.jsx)("h2", {
                        className: "text-2xl lg:text-3xl font-bold headline mb-3  ".concat(r),
                        children: s
                    }) : "H3" === a ? (0, t.jsx)("h2", {
                        className: "text-xl lg:text-1xl font-bold headline mb-3  ".concat(r),
                        children: s
                    }) : void 0
                },
                w = e => {
                    let {
                        children: s,
                        column: a = 1,
                        gap: r = 5,
                        margin: l = 10,
                        snap: i = !1,
                        fluid: c = !1,
                        responsiveLimit: n = 700,
                        customClass: d,
                        customClassDesktop: x,
                        hasDots: m = !1,
                        id: p,
                        snapDirection: u = "start"
                    } = e, [g, h] = (0, o.useState)(1), [j, b] = (0, o.useState)(1), [f, v] = (0, o.useState)(0), N = s.length, y = (0, o.useRef)(), w = () => {
                        v(window.innerWidth)
                    }, A = () => {
                        if (m)
                            for (let e = 0; e < N; e++) y.current.scrollLeft >= (f - (2 * l - r)) * e / a - 30 && y.current.scrollLeft <= (f - (2 * l - r)) * e / a + 30 && h(() => e + 1)
                    };
                    return (0, o.useEffect)(() => (w(), window.addEventListener("resize", w), () => {
                        window.removeEventListener("resize", w)
                    }), []), f < n ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("div", {
                            ref: y,
                            onScroll: A,
                            id: p,
                            className: "".concat(d && d, "\n        grid-swipe\n        grid-swipe--default\n        grid-swipe-custom__column--").concat(a, "\n        grid-swipe-custom__margin--").concat(l, "\n        grid-swipe-custom__gap--").concat(r, "\n        grid-swipe--snap--").concat(u, "\n        ").concat(i && "grid-swipe--snap", "\n        ").concat(c && "grid-swipe--fluid"),
                            children: s
                        }), m && (0, t.jsx)(L, {
                            totalChildren: N,
                            column: a,
                            currentItem: g
                        })]
                    }) : (0, t.jsx)("div", {
                        className: "".concat(x && x),
                        children: s
                    })
                },
                A = e => {
                    let {
                        children: s,
                        customClass: a
                    } = e;
                    return (0, t.jsx)("div", {
                        className: "grid-item  ".concat(a && a),
                        children: s
                    })
                },
                L = e => {
                    let {
                        totalChildren: s,
                        column: a,
                        currentItem: o
                    } = e, r = s - (a - 1), l = [];
                    for (let e = 0; e < r; e++) l.push((0, t.jsx)("div", {
                        className: "grid-swipe--dots--item ".concat(e === o - 1 ? "grid-swipe--dots--item__active" : "grid-swipe--dots--item__idle")
                    }));
                    return (0, t.jsx)("div", {
                        className: "grid-swipe--dots",
                        children: l.map((e, s) => (0, t.jsx)("div", {
                            children: e
                        }, s))
                    })
                },
                E = e => {
                    let {
                        openModal: s
                    } = e;
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)("div", {
                            className: "bg-[url('/simulacao-protecao-veicular/background-main.svg')] bg-[#0081ff] bg-auto",
                            children: [(0, t.jsx)("img", {
                                src: "/simulacao-protecao-veicular/banner-gl.png",
                                className: "hidden",
                                alt: "banner gusttavo lima"
                            }), (0, t.jsx)("img", {
                                src: "/simulacao-protecao-veicular/background-main.svg",
                                className: "hidden",
                                alt: "background"
                            }), (0, t.jsxs)("div", {
                                className: "container max-w-6xl px-0 pb-0 lg:pb-0 lg:px-0 lg:flex justify-between lg:space-x-5 opacity-100 items-stretch",
                                children: [(0, t.jsx)("div", {
                                    className: "w-auto lg:w-2/3 xl:w-3/5 relative lg:my-0",
                                    children: (0, t.jsx)("div", {
                                        className: "h-[220px] md:h-[380px] lg:h-full overflow-hidden bg-[url('/simulacao-protecao-veicular/banner-gl.png')] bg-bottom bg-contain bg-no-repeat relative"
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "h-full w-auto lg:w-1/2 xl:w-2/5 pl-0 py-5 px-0 lg:px-0 flex flex-col bg-tablue-500 lg:bg-transparent",
                                    children: (0, t.jsxs)("div", {
                                        className: "lg:order-3 px-5 lg:px-0 flex flex-col",
                                        children: [(0, t.jsx)(y, {
                                            size: "H1",
                                            style: "text-white lg:order-1",
                                            children: "A SOLU\xc7\xc3O COMPLETA PARA PROTEGER SEU VE\xcdCULO"
                                        }), (0, t.jsx)("div", {
                                            className: "lg:order-3 my-5 lg:px-0 lg:my-0 lg:pb-20",
                                            children: (0, t.jsx)(v, {
                                                theme: "DARK"
                                            })
                                        }), (0, t.jsx)("p", {
                                            className: "text-white lg:order-2",
                                            children: "Prote\xe7\xe3o veicular para carros, motos, vans e caminh\xf5es. Cobertura em todo o territ\xf3rio nacional!"
                                        })]
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "lg:w-full lg:relative lg:container",
                                children: [(0, t.jsx)("div", {
                                    className: "",
                                    children: (0, t.jsxs)(w, {
                                        column: 2,
                                        snap: !0,
                                        hasDots: !0,
                                        gap: 10,
                                        margin: 20,
                                        id: "swipe-advantages",
                                        customClass: "relative",
                                        customClassDesktop: "lg:flex justify-between items-center space-x-3 z-10 py-2 px-3 lg:px-5 -mt-[72px] w-full bg-white rounded-xl ",
                                        children: [(0, t.jsx)(A, {
                                            customClass: "rounded-xl py-4 lg:py-6 px-3 lg:px-3 lg:flex lg:flex-col lg:space-y-2 lg:w-1/3 bg-white lg:bg-transparent text-center lg:text-left",
                                            children: (0, t.jsxs)("div", {
                                                className: "lg:flex lg:space-x-4 lg:items-center",
                                                children: [(0, t.jsx)("img", {
                                                    src: "/simulacao-protecao-veicular/icons/certificado.svg",
                                                    alt: "Dash blue",
                                                    className: "h-16 lg:h-16 w-12 lg:w-auto mx-auto"
                                                }), (0, t.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [(0, t.jsx)("p", {
                                                        className: "text-sm",
                                                        children: "Nota mais alta de avalia\xe7\xf5es no Reclame Aqui!"
                                                    }), (0, t.jsx)("h3", {
                                                        className: "font-bold",
                                                        children: "Nota 8.3 no Reclame Aqui"
                                                    })]
                                                })]
                                            })
                                        }), (0, t.jsx)(A, {
                                            customClass: "rounded-xl py-4 lg:py-6 px-3 lg:px-3 lg:flex lg:flex-col lg:space-y-2 lg:w-1/3 bg-white lg:bg-transparent text-center lg:text-left",
                                            children: (0, t.jsxs)("div", {
                                                className: "lg:flex lg:space-x-4 lg:items-center",
                                                children: [(0, t.jsx)("img", {
                                                    src: "/simulacao-protecao-veicular/icons/trofeu.svg",
                                                    alt: "Dash blue",
                                                    className: "h-16 lg:h-16 w-12 lg:w-auto mx-auto"
                                                }), (0, t.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [(0, t.jsx)("p", {
                                                        className: "text-sm",
                                                        children: "Cobertura em todo o territ\xf3rio nacional 24 horas por dia"
                                                    }), (0, t.jsx)("h3", {
                                                        className: "font-bold",
                                                        children: "Por telefone ou aplicativo"
                                                    })]
                                                })]
                                            })
                                        }), (0, t.jsx)(A, {
                                            customClass: "rounded-xl py-4 lg:py-6 px-3 lg:px-3 lg:flex lg:flex-col lg:space-y-2 lg:w-1/3 bg-white lg:bg-transparent text-center lg:text-left",
                                            children: (0, t.jsxs)("div", {
                                                className: "lg:flex lg:space-x-4 lg:items-center",
                                                children: [(0, t.jsx)("img", {
                                                    src: "/simulacao-protecao-veicular/icons/escudo.svg",
                                                    alt: "Dash blue",
                                                    className: "h-16 lg:h-16 w-12 lg:w-auto mx-auto"
                                                }), (0, t.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [(0, t.jsx)("p", {
                                                        className: "text-sm",
                                                        children: "Refer\xeancia no setor de prote\xe7\xe3o veicular"
                                                    }), (0, t.jsx)("h3", {
                                                        className: "font-bold",
                                                        children: "A partir de R$ 1,96 ao dia"
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "lg:h-full relative overflow-hidden bg-[url('/simulacao-protecao-veicular/banner.jpg')] bg-center bg-no-repeat bg-cover",
                                    children: (0, t.jsx)("img", {
                                        src: "/simulacao-protecao-veicular/sprite-rounded.svg",
                                        alt: "sprite rounded",
                                        className: "absolute bottom-0 left-0 "
                                    })
                                })]
                            })]
                        })
                    })
                };
            var C = a(7005);
            let S = e => {
                    let {
                        face: s,
                        name: a,
                        stars: o,
                        city: r,
                        message: l
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "flex m-5 w-56 lg:w-72 flex-col items-center pb-5 pt-16 space-y-3 bg-[#EFF4FA] rounded-2xl relative",
                        children: [(0, t.jsx)("img", {
                            src: "/simulacao-protecao-veicular/quote.svg",
                            alt: "Quote",
                            className: "w-10 h-auto absolute -top-4 -left-2 translate-x-6 opacity-80"
                        }), (0, t.jsx)("img", {
                            src: s,
                            alt: "Background image",
                            className: "w-28 rounded-full h-auto absolute -top-14 block"
                        }), (0, t.jsx)("h3", {
                            className: "font-bold text-lg",
                            children: a
                        }), (0, t.jsxs)("div", {
                            className: "flex space-x-1",
                            children: [(0, t.jsx)("i", {
                                className: "bi-star-fill text-yellow-500"
                            }), (0, t.jsx)("i", {
                                className: "bi-star-fill text-yellow-500"
                            }), (0, t.jsx)("i", {
                                className: "bi-star-fill text-yellow-500"
                            }), (0, t.jsx)("i", {
                                className: "bi-star-fill text-yellow-500"
                            }), (0, t.jsx)("i", {
                                className: "bi-star-fill text-yellow-500"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "px-4 text-center space-y-3",
                            children: [(0, t.jsx)("p", {
                                className: "text-md",
                                children: (0, t.jsx)("em", {
                                    children: l
                                })
                            }), (0, t.jsx)("p", {
                                className: "text-lg font-semibold text-gray-600",
                                children: r
                            })]
                        })]
                    })
                },
                B = e => {
                    let {
                        openModal: s
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "bg-white my-5 lg:my-10 opacity-100 overflow-hidden",
                        id: "depoimentos",
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col space-y-1 text-center my-8",
                            children: [(0, t.jsx)(y, {
                                style: "mx-auto",
                                children: "Depoimentos"
                            }), (0, t.jsx)("p", {
                                className: "",
                                children: "Nossos associados nos recomendam"
                            })]
                        }), (0, t.jsxs)(C.Z, {
                            speed: 40,
                            className: "h-full pt-5 lg:pt-10 overflow-hidden",
                            pauseOnHover: !0,
                            gradientWidth: 50,
                            children: [(0, t.jsx)(S, {
                                face: "/simulacao-protecao-veicular/testimonials/luiz_carlos.png",
                                name: "Luiz Carlos",
                                stars: 5,
                                city: "Belo Horizonte/MG",
                                message: "Dou 5 estrelas, pelo atendimento 0800 e do prestador, por\xe9m o hor\xe1rio previsto ultrapassou muito e muito mesmo do liberado no acompanhamento, como n\xe3o era uma emerg\xeancia e sim sinistro e estava em casa fiquei aguardando com paci\xeancia. Descobri que o prestador saiu de nova Igua\xe7u para Resende, para voltar para nova Igua\xe7u, se tivesse um prestador pr\xf3ximo n\xe3o demoraria tanto."
                            }), (0, t.jsx)(S, {
                                face: "/simulacao-protecao-veicular/testimonials/matheus_cirilo.png",
                                name: "Matheus Cirilo",
                                stars: 5,
                                city: "Curitiba/PR",
                                message: "Excelente Seguradora! J\xe1 utilizamos a mais de 3 anos, v\xe1rias vezes precisamos de guincho e de reparos e sempre fomos muito bem atendidos! Sempre com muita rapidez e efici\xeancia!"
                            }), (0, t.jsx)(S, {
                                face: "/simulacao-protecao-veicular/testimonials/beto_jesus.png",
                                name: "Beto Jesus",
                                stars: 5,
                                city: "Salvador/BA",
                                message: "\xd3timo eu liguei pra assist\xeancia 24 horas e solicitei um guincho as 6:27 da manh\xe3 as 7 horas chegou fui bem atendido e recomendo pra outras pessoas n\xe3o s\xf3 pelo guincho mas sim pela prote\xe7\xe3o veicular do meu carro vcs est\xe3o de parab\xe9ns"
                            }), (0, t.jsx)(S, {
                                face: "/simulacao-protecao-veicular/testimonials/isis_correa.png",
                                name: "Isis Correa",
                                stars: 5,
                                city: "Belo Horizonte/MG",
                                message: "Precisei de remo\xe7\xe3o por guincho recentemente e fomos atendidos muito bem, tanto pela equipe do atendimento quanto pelo guincheiro. Sempre que precisei tirar alguma d\xfavida foi muito f\xe1cil conseguir a informa\xe7\xe3o. Existem v\xe1rios canais de comunica\xe7\xe3o com a empresa, inclusive o pr\xf3prio consultor de vendas nos ajuda."
                            }), (0, t.jsx)(S, {
                                face: "/simulacao-protecao-veicular/testimonials/ney.png",
                                name: "Ney",
                                stars: 5,
                                city: "Belo Horizonte/MG",
                                message: "Gostei do atendimento, desde o tempo para falar com a atendente at\xe9 o tempo de resposta do reboque que chegou r\xe1pido, fez um bom transporte e finalizou o servi\xe7o com excel\xeancia. Parab\xe9ns a empresa do guincho e tamb\xe9m ao profissional Eduardo pelo atendimento."
                            }), (0, t.jsx)(S, {
                                face: "/simulacao-protecao-veicular/testimonials/claudemir.png",
                                name: "Claudemir",
                                stars: 5,
                                city: "S\xe3o Paulo/SP",
                                message: "At\xe9 o momento precisei somente de guincho por 2 vezes, e fui bem atendido e com pouca demora, final de semana e s\xf3 demorou 40 min, muito bom."
                            }), (0, t.jsx)(S, {
                                face: "/simulacao-protecao-veicular/testimonials/livia_mendes.png",
                                name: "L\xedvia Mendes",
                                stars: 5,
                                city: "Suzano/SP",
                                message: "S\xf3 tenho oque agradecer ,meu esposo sofreu um acidente onde o carro deu pt de imediato assionamos,apresentamos toda a documenta\xe7\xe3o necess\xe1ria at\xe9 mesmo porque meu esposo n\xe3o estava errado e depois de tudo enviado e conferido ,ap\xf3s a baixa do gravame porque meu carro ainda faltava algumas parcelas pra ser quitado,a bem protege pagou certinho o valor da tabela FIPE do meu carro."
                            })]
                        })]
                    })
                },
                O = e => {
                    let {
                        openModal: s
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: " ",
                        id: "benefits-all",
                        children: [(0, t.jsx)("div", {
                            className: "lg:container flex flex-col space-y-1 text-center my-8",
                            children: (0, t.jsx)(y, {
                                style: "mx-auto",
                                children: "Outros benef\xedcios"
                            })
                        }), (0, t.jsx)("div", {
                            className: "lg:container px-5 md:px-5 space-y-4 my-3 lg:my-16",
                            children: (0, t.jsxs)("div", {
                                className: "grid gap-5 md:gap-y-5 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ",
                                children: [(0, t.jsx)(P, {
                                    title: "Colis\xe3o e cobertura para terceiros",
                                    icon: "colisao-e-cobertura",
                                    description: "Com a nossa cobertura, voc\xea pode proteger seu ve\xedculo e o seu bolso"
                                }), (0, t.jsx)(P, {
                                    title: "Ve\xedculos de leil\xe3o",
                                    icon: "leilao",
                                    description: "As empresas de seguro veicular n\xe3o aceitam ve\xedculos de leil\xe3o, mas a BP sim!"
                                }), (0, t.jsx)(P, {
                                    title: "Carro reserva",
                                    icon: "carro",
                                    description: "Nossa cobertura de carro reserva garante sua mobilidade com as op\xe7\xf5es de 15 ou 30 dias"
                                }), (0, t.jsx)(P, {
                                    title: "Fen\xf4menos da natureza",
                                    icon: "natureza",
                                    description: "A BP deixa voc\xea protegido contra tempestades, chuvas de granizo, alagamentos e mais"
                                }), (0, t.jsx)(P, {
                                    title: "AP/APP Acidente pessoal",
                                    icon: "app",
                                    description: "Em caso de acidente com les\xe3o, fratura ou morte, a Bem Protege assegura o suporte para associados em at\xe9 R$ 10.000"
                                }), (0, t.jsx)(P, {
                                    title: "Retirada de ve\xedculo de buraco",
                                    icon: "buraco",
                                    description: "Se o seu ve\xedculo cair em um buraco, basta ligar para nossa assist\xeancia que faremos a retirada"
                                }), (0, t.jsx)(P, {
                                    title: "100% tabela FIPE",
                                    icon: "documento",
                                    description: "Trabalhamos com padr\xf5es da tabela FIPE para prestar um servi\xe7o justo. Nossa cobertura \xe9 de 100% da tabela FIPE"
                                }), (0, t.jsx)(P, {
                                    title: "Destombamento ap\xf3s acidente",
                                    icon: "carro-tombado",
                                    description: "Os tombamentos s\xe3o problemas graves, mas a BP n\xe3o te abandona nessa hora. Temos cobertura para destombamento de at\xe9 R$ 8.000"
                                }), (0, t.jsx)(P, {
                                    title: "Trocas de pneus",
                                    icon: "roda",
                                    description: "Evite acidentes, o BP Truck te assiste em casos de troca de pneus de caminh\xf5es, carretas e implementos."
                                }), (0, t.jsx)(P, {
                                    title: "Servi\xe7o de chaveiro",
                                    icon: "chave",
                                    description: "Nossa cobertura oferece servi\xe7o de chaveiro para uso reserva e problemas relacionados \xe0s travas das portas"
                                }), (0, t.jsx)(P, {
                                    title: "Hospedagem Emergencial",
                                    icon: "predio",
                                    description: "Em caso de acidentes, nossos associados contam com o benef\xedcio de hospedagem emergencial"
                                }), (0, t.jsx)(P, {
                                    title: "Cobertura para vidro, para-brisa e far\xf3is",
                                    icon: "parabrisa",
                                    description: "Voc\xea n\xe3o precisa mais se preocupar com os custos de reparos de vidros, para-brisas e far\xf3is. A BP cobre todos esses imprevistos!"
                                })]
                            })
                        })]
                    })
                },
                P = e => {
                    let {
                        title: s,
                        description: a,
                        icon: o = "icon-head-dash-blue"
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "p-5 lg:p-3 mb-0 lg:mb-5 md:p-0 lg:text-center flex space-y-3 justify-start lg:items-center flex-col rounded-lg bg-gray-100",
                        children: [(0, t.jsxs)("div", {
                            className: "flex lg:flex-col items-center space-x-2 lg:space-y-4",
                            children: [(0, t.jsx)("img", {
                                src: "/simulacao-protecao-veicular/icons/".concat(o, ".svg"),
                                alt: "Dash blue",
                                className: "h-16 lg:h-16 p-2 w-12 lg:w-auto"
                            }), (0, t.jsx)("h3", {
                                className: "text-lg lg:text-center font-semibold text-gray-800 ",
                                children: s
                            })]
                        }), (0, t.jsx)("div", {
                            className: "text-md lg:text-sm",
                            children: (0, t.jsx)("p", {
                                children: a
                            })
                        })]
                    })
                },
                M = e => {
                    let {
                        size: s,
                        status: a,
                        closeModal: r,
                        modal: l,
                        children: i
                    } = e, [c, n] = (0, o.useState)(!1), d = e => {
                        "Escape" === e.key && r(l)
                    };
                    return (0, o.useEffect)(() => {
                        if (a) return document.addEventListener("keyup", d, !1), () => {
                            document.removeEventListener("keyup", d, !1)
                        }
                    }, [s, l, a]), (0, o.useEffect)(() => {
                        let e = document.querySelectorAll(".modal-custom--close"),
                            s = document.querySelectorAll(".bhx-modal-custom"),
                            t = e => {
                                e.target.classList.contains("modal-custom--close") && n(!0)
                            },
                            o = s => {
                                s.target.classList.contains("modal-custom--close") && c && (e.forEach(e => {
                                    e.removeEventListener("mousedown", t, !1), e.removeEventListener("mouseup", o, !1)
                                }), r(l), n(!1))
                            };
                        a ? e.forEach(e => {
                            e.addEventListener("mousedown", t, !1), e.addEventListener("mouseup", o, !1)
                        }) : s.forEach(e => {
                            e.scrollTop = 0
                        })
                    }, [a, c]), (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("div", {
                            className: "bhx-modal-custom container-fluid ",
                            style: {
                                display: a ? "block" : "none"
                            },
                            children: (0, t.jsx)("div", {
                                id: "js-bhx-modal-custom__wrapper-".concat(l),
                                className: "modal-custom--close bhx-modal-custom__wrapper",
                                children: (0, t.jsx)("div", {
                                    className: "ani-modal-opening bhx-modal-custom__body rounded-none lg:rounded-3xl overflow-hidden bg-white ".concat("FULL" === s && "bhx-modal-custom__body--full"),
                                    children: i
                                })
                            })
                        })
                    })
                },
                q = e => {
                    let {
                        openModal: s,
                        style: a = ""
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: a,
                        children: [(0, t.jsx)("div", {
                            className: " bg-white",
                            children: (0, t.jsxs)("div", {
                                className: "lg:container px-5 lg:px-3 pb-8 lg:pb-14 md:px-5 md:flex justify-between items-center opacity-100 ",
                                children: [(0, t.jsx)("div", {
                                    className: "lg:order-1 lg:w-1/2 flex items-center justify-center",
                                    children: (0, t.jsx)("img", {
                                        src: "/simulacao-protecao-veicular/protecao.png",
                                        alt: "",
                                        className: ""
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "lg:order-2 lg:w-1/2 space-y-5 md:px-16 pt-5 md:pt-5 pb-5 md:pb-10 lg:mt-5",
                                    children: [(0, t.jsx)(N, {
                                        title: "PROTE\xc7\xc3O PARA TERCEIROS"
                                    }), (0, t.jsxs)(y, {
                                        children: ["Prote\xe7\xe3o para terceiros ", (0, t.jsx)("span", {
                                            children: "at\xe9 100 mil"
                                        })]
                                    }), (0, t.jsx)("p", {
                                        className: "text-md lg:text-xl",
                                        children: "Quer ficar despreocupado com custos inesperados e dar a si mesmo a tranquilidade que voc\xea merece? A nossa prote\xe7\xe3o para terceiros possui cobertura de at\xe9 100 mil reais!"
                                    }), (0, t.jsxs)("ul", {
                                        className: "text-left w-full space-y-1 mt-4",
                                        children: [(0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Conserto r\xe1pido"
                                            })]
                                        }), (0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Melhores oficinas"
                                            })]
                                        }), (0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Assist\xeancia por telefone e aplicativo"
                                            })]
                                        }), (0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "At\xe9 R$ 100.000"
                                            })]
                                        })]
                                    }), (0, t.jsx)(p, {
                                        icon: "arrow-right",
                                        color: "BLUE",
                                        size: "SMALL",
                                        type: "BUTTON",
                                        style: "mt-3",
                                        btAction: s,
                                        children: "FA\xc7A UMA COTA\xc7\xc3O AGORA"
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: " bg-[#EFF4FA]",
                            children: (0, t.jsxs)("div", {
                                className: "lg:container px-5 lg:px-3 py-8 lg:py-14 md:px-5 md:flex justify-between items-center opacity-100 ",
                                children: [(0, t.jsx)("div", {
                                    className: "lg:order-2 lg:w-1/2 flex items-center justify-center",
                                    children: (0, t.jsx)("img", {
                                        src: "/simulacao-protecao-veicular/assistencia.png",
                                        alt: "",
                                        className: ""
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "lg:order-1 lg:w-1/2 space-y-5 md:px-16 pt-5 md:pt-5 pb-5 md:pb-10 lg:mt-5",
                                    children: [(0, t.jsx)(N, {
                                        title: "ASSIST\xcaNCIA 24 HORAS"
                                    }), (0, t.jsxs)(y, {
                                        children: [(0, t.jsx)("span", {
                                            children: "Assist\xeancia 24h"
                                        }), " em todo o territ\xf3rio nacional"]
                                    }), (0, t.jsx)("p", {
                                        className: "text-md lg:text-xl",
                                        children: "Oferecemos uma assist\xeancia completa e dispon\xedvel 24 horas por dia, em todo o territ\xf3rio nacional. Isso significa que voc\xea pode contar com ajuda profissional e imediata em qualquer lugar do pa\xeds, n\xe3o importa a hora ou situa\xe7\xe3o."
                                    }), (0, t.jsxs)("ul", {
                                        className: "text-left w-full space-y-1 mt-4",
                                        children: [(0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Cobertura completa"
                                            })]
                                        }), (0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Atendimento humanizado"
                                            })]
                                        }), (0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Assist\xeancia r\xe1pida"
                                            })]
                                        })]
                                    }), (0, t.jsx)(p, {
                                        icon: "arrow-right",
                                        color: "BLUE",
                                        size: "SMALL",
                                        type: "BUTTON",
                                        style: "mt-3",
                                        btAction: s,
                                        children: "FA\xc7A UMA COTA\xc7\xc3O AGORA"
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: " bg-white",
                            children: (0, t.jsxs)("div", {
                                className: "lg:container px-5 lg:px-3 py-8 lg:py-14 md:px-5 md:flex justify-between items-center opacity-100 ",
                                children: [(0, t.jsx)("div", {
                                    className: "lg:order-1 lg:w-1/2 flex items-center justify-center",
                                    children: (0, t.jsx)("img", {
                                        src: "/simulacao-protecao-veicular/cadastro.png",
                                        alt: "",
                                        className: ""
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "lg:order-2 lg:w-1/2 space-y-5 md:px-16 pt-5 md:pt-5 pb-5 md:pb-10 lg:mt-5",
                                    children: [(0, t.jsx)(N, {
                                        title: "CADASTRO F\xc1CIL"
                                    }), (0, t.jsxs)(y, {
                                        children: ["Cadastro f\xe1cil, r\xe1pido e ", (0, t.jsx)("span", {
                                            children: "sem an\xe1lise de perfil"
                                        }), " do condutor"]
                                    }), (0, t.jsx)("p", {
                                        className: "text-md lg:text-xl",
                                        children: "N\xe3o levamos em considera\xe7\xe3o o hist\xf3rico do condutor para torn\xe1-lo um associado."
                                    }), (0, t.jsx)("p", {
                                        className: "text-md lg:text-xl",
                                        children: "Tudo \xe9 feito de forma pr\xe1tica e r\xe1pida, sem burocracia e enrola\xe7\xe3o!"
                                    }), (0, t.jsxs)("ul", {
                                        className: "text-left w-full space-y-1 mt-4",
                                        children: [(0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Sem an\xe1lise de perfil"
                                            })]
                                        }), (0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Sem an\xe1lise ao SPC/SERASA"
                                            })]
                                        }), (0, t.jsxs)("li", {
                                            className: "flex space-x-2 items-center justify-start w-full ",
                                            children: [(0, t.jsx)("i", {
                                                className: "bi-patch-check text-lg text-green-500"
                                            }), " ", (0, t.jsx)("span", {
                                                children: "Sem necessidade de carteira de habilita\xe7\xe3o"
                                            })]
                                        })]
                                    }), (0, t.jsx)(p, {
                                        icon: "arrow-right",
                                        color: "BLUE",
                                        size: "SMALL",
                                        type: "BUTTON",
                                        style: "mt-3",
                                        btAction: s,
                                        children: "FA\xc7A UMA COTA\xc7\xc3O AGORA"
                                    })]
                                })]
                            })
                        })]
                    })
                },
                F = e => {
                    let {
                        thumb: s = "",
                        title: a = "",
                        description: o = ""
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "bg-[#F3F3F3] rounded-2xl overflow-hidden",
                        children: [s && (0, t.jsx)("div", {
                            className: "overflow-hidden flex items-start",
                            children: (0, t.jsx)("img", {
                                src: s,
                                alt: "Brazil mask",
                                className: "w-full h-auto rounded-t-2xl"
                            })
                        }), (0, t.jsx)("div", {
                            className: "flex items-center",
                            children: (0, t.jsxs)("div", {
                                className: "px-3 md:px-5 py-3 md:py-6 items-center flex flex-col justify-center",
                                children: [(0, t.jsx)("h3", {
                                    className: "text-xl md:text-lg lg:text-md font-bold mb-3",
                                    children: a
                                }), (0, t.jsx)("p", {
                                    className: "text-md text-gray-600",
                                    children: o
                                })]
                            })
                        })]
                    })
                },
                T = e => {
                    let {
                        openModal: s,
                        hasAll: a = !1
                    } = e;
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)("div", {
                            className: "lg:container px-5 lg:px-0 py-5 lg:pt-10 opacity-100 text-center",
                            id: "beneficios",
                            children: [(0, t.jsxs)("div", {
                                className: " px-0 text-center",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex flex-col space-y-1 text-center lg:my-8",
                                    children: [(0, t.jsxs)(y, {
                                        style: "mx-auto max-w-xl",
                                        children: ["N\xe3o tenha imprevistos, tenha a ", (0, t.jsx)("span", {
                                            children: "prote\xe7\xe3o veicular"
                                        }), " da Bem Protege"]
                                    }), (0, t.jsx)("p", {
                                        className: "text-xl max-w-lg mx-auto ",
                                        children: "Temos uma cobertura completa para colis\xe3o, furto, roubo e muito mais!"
                                    }), (0, t.jsx)(p, {
                                        icon: "chevron-down",
                                        color: "BLUE",
                                        type: "LINK-CLEAN",
                                        style: "",
                                        url: "#benefits-all",
                                        children: "Confira todos os benef\xedcios"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: " grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-10 mt-12 md:px-0",
                                    children: [(0, t.jsx)(F, {
                                        thumb: "/simulacao-protecao-veicular/furto.jpg",
                                        title: "Furto e roubo",
                                        description: "Com a BP, voc\xea pode se sentir protegido em todo lugar, a qualquer momento"
                                    }), (0, t.jsx)(F, {
                                        thumb: "/simulacao-protecao-veicular/guincho.jpg",
                                        title: "Guincho ilimitado (sinistro)",
                                        description: "Voc\xea pode ter um servi\xe7o de at\xe9 1000km (somando a ida com a volta) em todo o territ\xf3rio nacional"
                                    }), (0, t.jsx)(F, {
                                        thumb: "/simulacao-protecao-veicular/assistencia.jpg",
                                        title: "Assist\xeancia 24 horas",
                                        description: "Nossa equipe conta com especialistas para atender voc\xea 24 horas por dia"
                                    }), (0, t.jsx)(F, {
                                        thumb: "/simulacao-protecao-veicular/pane.jpg",
                                        title: "Pane el\xe9trica e mec\xe2nica",
                                        description: "Evite estresse desnecess\xe1rio, escolha a BP e garanta sua tranquilidade"
                                    })]
                                }), a && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("div", {
                                        className: "px-3 md:px-0 lg:hidden",
                                        children: (0, t.jsx)(N, {
                                            title: "MAIS BENEF\xcdCIOS PARA SUA FROTA"
                                        })
                                    }), (0, t.jsxs)(w, {
                                        column: 2,
                                        snap: !0,
                                        gap: 15,
                                        margin: 15,
                                        id: "swipe-benefits",
                                        hasDots: !0,
                                        customClass: "",
                                        customClassDesktop: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full",
                                        children: [(0, t.jsx)(A, {
                                            customClass: " ",
                                            children: (0, t.jsx)(F, {
                                                title: "Cobertura parabrisa e vidros completos",
                                                description: "Troca de parabrisa, vidro, farol e retrovisores. O BP Truck cobre te assegura contra todos estes imprevistos."
                                            })
                                        }), (0, t.jsx)(A, {
                                            customClass: " ",
                                            children: (0, t.jsx)(F, {
                                                title: "Fen\xf4menos da natureza",
                                                description: "Seu caminh\xe3o estar\xe1 coberto contra tempestades, chuva de granizo, submers\xe3o por inunda\xe7\xe3o, alagamento de \xe1gua doce, raio e queda de \xe1rvore"
                                            })
                                        }), (0, t.jsx)(A, {
                                            customClass: " ",
                                            children: (0, t.jsx)(F, {
                                                title: "100% tabela FIPE",
                                                description: "A tabela FIPE \xe9 reconhecida por divulgar os pre\xe7os m\xe9dios de mercado de carros. Seguimos a tabela para poder oferecer um servi\xe7o justo"
                                            })
                                        }), (0, t.jsx)(A, {
                                            customClass: " ",
                                            children: (0, t.jsx)("div", {
                                                className: "bg-white rounded-2xl overflow-hidden",
                                                children: (0, t.jsxs)("div", {
                                                    className: "px-3 md:px-5 py-3 md:py-5 h-80 md:h-60 items-center flex flex-col justify-center space-y-8 ",
                                                    children: [(0, t.jsx)("p", {
                                                        className: "bg-gradient-to-r from-[#148EFF] to-[#1DD0A5] font-extrabold bg-clip-text text-transparent text-2xl inline-block",
                                                        children: "E muito mais benef\xedcios para voc\xea!"
                                                    }), (0, t.jsx)(p, {
                                                        icon: "arrow-right",
                                                        color: "BLUE",
                                                        size: "SMALL",
                                                        type: "LINK-CLEAN",
                                                        style: "",
                                                        url: "/beneficios-bp-truck",
                                                        children: "Veja os benef\xedcios"
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "px-3 md:px-0",
                                children: a && (0, t.jsx)(p, {
                                    icon: "arrow-right",
                                    color: "BLUE",
                                    size: "SMALL",
                                    type: "BUTTON",
                                    style: "my-10",
                                    btAction: s,
                                    children: "Cadastrar online"
                                })
                            })]
                        })
                    })
                },
                k = e => {
                    let {
                        openModal: s
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "px-5 py-5 lg:py-10 md:px-5 md:flex justify-between items-center opacity-100 bg-gradient-to-b from-gray-100",
                        id: "bem-protege",
                        children: [(0, t.jsx)("div", {
                            className: "lg:order-1 lg:w-1/2 flex md:px-10 justify-center items-center",
                            children: (0, t.jsx)("img", {
                                src: "/simulacao-protecao-veicular/brazil.png",
                                alt: "",
                                className: ""
                            })
                        }), (0, t.jsxs)("div", {
                            className: "lg:container lg:order-2 md:order-2 lg:w-1/2 space-y-5 md:px-10 pt-5 md:pt-10 pb-10 md:pb-10 ",
                            children: [(0, t.jsx)(N, {
                                title: "A MARCA QUE CONQUISTOU O BRASIL"
                            }), (0, t.jsxs)(y, {
                                children: ["A prote\xe7\xe3o veicular da Bem Protege atende ", (0, t.jsx)("span", {
                                    children: "carros"
                                }), ",", " ", (0, t.jsx)("span", {
                                    children: "motos"
                                }), ", ", (0, t.jsx)("span", {
                                    children: "vans"
                                }), " e", (0, t.jsx)("span", {
                                    children: "caminh\xf5es"
                                }), " em todos os cantos do pa\xeds."]
                            }), (0, t.jsx)("p", {
                                className: "text-xl",
                                children: "Oferecemos uma s\xe9rie de benef\xedcios para que voc\xea tenha tranquilidade onde estiver."
                            }), (0, t.jsxs)("div", {
                                className: "flex justify-right space-x-10 lg:space-x-16 py-5 lg:py-10 ",
                                children: [(0, t.jsx)(z, {
                                    title: "Presente em",
                                    data: "26",
                                    unit: "estados",
                                    complement: "e no Distrito Federal"
                                }), (0, t.jsx)(z, {
                                    title: "Mais de",
                                    data: "10",
                                    unit: "anos",
                                    complement: "de mercado"
                                })]
                            }), (0, t.jsx)(p, {
                                icon: "arrow-right",
                                color: "BLUE",
                                size: "SMALL",
                                type: "BUTTON",
                                style: "mt-3",
                                btAction: s,
                                children: "QUERO SER UM ASSOCIADO"
                            })]
                        })]
                    })
                },
                z = e => {
                    let {
                        title: s,
                        data: a,
                        unit: o,
                        complement: r
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "space-y-1 text-center lg:text-left",
                        children: [(0, t.jsx)("h3", {
                            className: "text-lg font-bold",
                            children: s
                        }), (0, t.jsxs)("h2", {
                            className: " bg-gradient-to-r from-[#E0AC24] to-[#F8D16C] text-transparent bg-clip-text",
                            children: [(0, t.jsx)("span", {
                                className: "text-7xl font-extrabold",
                                children: a
                            }), " ", (0, t.jsx)("span", {
                                className: "text-2xl font-bold",
                                children: o
                            })]
                        }), (0, t.jsx)("p", {
                            className: "text-md",
                            children: r
                        })]
                    })
                },
                R = e => {
                    let {
                        openModal: s,
                        style: a = ""
                    } = e;
                    return (0, t.jsx)("div", {
                        className: "mx-5 my-5 md:my-0 md:max-w-6xl md:mx-auto rounded-xl bg-blue-500 text-white overflow-hidden",
                        children: (0, t.jsxs)("div", {
                            className: "md:flex justify-center items-stretch opacity-100 text-center",
                            children: [(0, t.jsx)("div", {
                                className: "md:order-2 md:w-1/2 flex items-end justify-end relative",
                                children: (0, t.jsx)("div", {
                                    className: "h-[300px] md:h-full w-full bg-[url('/simulacao-protecao-veicular/banner-people.jpg')] bg-cover"
                                })
                            }), (0, t.jsxs)("div", {
                                className: "md:order-1 px-5 md:w-1/2 space-y-5 md:px-10 pt-5 md:pt-8 pb-5 md:pb-12",
                                children: [(0, t.jsx)(y, {
                                    style: "mx-auto",
                                    children: "Tenha a prote\xe7\xe3o que voc\xea e seu ve\xedculo merecem"
                                }), (0, t.jsx)("p", {
                                    className: "text-lg md:text-xl",
                                    children: (0, t.jsx)("strong", {
                                        children: "A Bem Protege possui uma cobertura completa para te proteger a qualquer hora, em qualquer lugar!"
                                    })
                                }), (0, t.jsx)(p, {
                                    icon: "arrow-right",
                                    color: "BLUE",
                                    size: "SMALL",
                                    type: "BUTTON",
                                    style: "mt-3",
                                    btAction: s,
                                    children: "SEJA UM ASSOCIADO BP"
                                })]
                            })]
                        })
                    })
                },
                U = () => {
                    let [e, s] = (0, o.useState)(1), a = e => {
                        console.log("handle faq", e), s(e)
                    };
                    return (0, t.jsxs)("div", {
                        className: "lg:container px-5 lg:px-0 pb-10",
                        id: "duvidas-frequentes",
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col space-y-1 text-center my-5 lg:my-16",
                            children: [(0, t.jsx)(y, {
                                style: "mx-auto",
                                children: "Perguntas frequentes"
                            }), (0, t.jsx)("p", {
                                className: "text-xl max-w-lg mx-auto ",
                                children: "BP PROTE\xc7\xc3O VEICULAR"
                            })]
                        }), (0, t.jsxs)("ul", {
                            className: " ",
                            children: [(0, t.jsx)(I, {
                                title: "O que \xe9 prote\xe7\xe3o veicular?",
                                id: 1,
                                currentFaq: e,
                                handleFaq: a,
                                children: 1 === e && (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("p", {
                                        children: "Prote\xe7\xe3o veicular \xe9 um servi\xe7o para prote\xe7\xe3o de ve\xedculos que funciona por meio de associa\xe7\xe3o entre propriet\xe1rios de ve\xedculos sob controle de uma organiza\xe7\xe3o que faz a gest\xe3o. Ao assinar o contrato, o propriet\xe1rio se torna um dos associados e passa, portanto, a fazer parte do sistema de rateio."
                                    })
                                })
                            }), (0, t.jsx)(I, {
                                title: "Como funcionam as associa\xe7\xf5es de prote\xe7\xe3o veicular?",
                                id: 2,
                                currentFaq: e,
                                handleFaq: a,
                                children: 2 === e && (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("p", {
                                        children: "As associa\xe7\xf5es de prote\xe7\xe3o veicular funcionam como um grupo de propriet\xe1rios de ve\xedculos que contribuem coletivamente todos os meses para garantir a prote\xe7\xe3o do grupo por meio de um rateio. Ao se tornar associado de um grupo ou uma associa\xe7\xe3o deste tipo voc\xea passa a fazer parte de um sistema de rateio."
                                    })
                                })
                            }), (0, t.jsx)(I, {
                                title: "Qual a diferen\xe7a entre seguro e prote\xe7\xe3o veicular?",
                                id: 3,
                                currentFaq: e,
                                handleFaq: a,
                                children: 3 === e && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("p", {
                                        children: "O seguro \xe9 realizado por empresas seguradoras, que t\xeam interesses econ\xf4micos privados, ao contr\xe1rio da prote\xe7\xe3o veicular que funciona por meio de associa\xe7\xe3o cooperativa sem fins lucrativos. Ou seja, pessoas se unem para dividir os custos e despesas da prote\xe7\xe3o dos ve\xedculos."
                                    }), (0, t.jsx)("p", {
                                        children: "Na prote\xe7\xe3o veicular, tamb\xe9m n\xe3o existe uma ap\xf3lice, a documenta\xe7\xe3o \xe9 substitu\xedda pelo contrato de associa\xe7\xe3o. O contrato de associa\xe7\xe3o \xe9 o documento legal que determina os direitos e deveres de ambas as partes."
                                    }), (0, t.jsx)("p", {
                                        children: "O contrato de associa\xe7\xe3o especifica como os servi\xe7os ser\xe3o prestados e os prazos de seu cumprimento, a fim de que voc\xea e seu patrim\xf4nio fiquem protegidos."
                                    })]
                                })
                            }), (0, t.jsx)(I, {
                                title: "Qual \xe9 a cobertura da prote\xe7\xe3o veicular?",
                                id: 4,
                                currentFaq: e,
                                handleFaq: a,
                                children: 4 === e && (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("p", {
                                        children: "Existem diversos tipos de coberturas no mercado de prote\xe7\xe3o veicular. A Cobertura da Bem Protege Prote\xe7\xe3o Veicular \xe9 - sem d\xfavidas - uma das mais completas do Brasil, incluindo prote\xe7\xe3o contra furto, roubo, colis\xe3o, inc\xeandio, assist\xeancia 24h com cobertura nacional, guincho ilimitado para sinistro, prote\xe7\xe3o de vidros e far\xf3is, prote\xe7\xe3o para terceiros e muito mais."
                                    })
                                })
                            }), (0, t.jsx)(I, {
                                title: "Prote\xe7\xe3o veicular \xe9 confi\xe1vel?",
                                id: 5,
                                currentFaq: e,
                                handleFaq: a,
                                children: 5 === e && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("p", {
                                        children: "Sim! A prote\xe7\xe3o veicular \xe9 completamente legal e confi\xe1vel. N\xe3o se trata de um seguro tradicional, e sim de um contrato que \xe9 feito por meio de associa\xe7\xe3o a um grupo de propriet\xe1rios de ve\xedculos e administrado por uma empresa."
                                    }), (0, t.jsx)("p", {
                                        children: "A prote\xe7\xe3o veicular \xe9 regida pelo C\xf3digo Civil Brasileiro, n\xe3o havendo nenhuma lei que pro\xedba a exist\xeancia de grupos de pessoas com a finalidade da Prote\xe7\xe3o Veicular. Apesar disso, \xe9 muito importante que voc\xea escolha uma associa\xe7\xe3o de prote\xe7\xe3o s\xe9ria e s\xf3lida no mercado."
                                    }), (0, t.jsx)("p", {
                                        children: "Al\xe9m disso, assim como em um seguro, \xe9 importante analisar quais as coberturas est\xe3o inclusas em seu contrato de prote\xe7\xe3o veicular, o que ele cobre e em quais regi\xf5es do Brasil."
                                    })]
                                })
                            }), (0, t.jsx)(I, {
                                title: "Quais as vantagens da prote\xe7\xe3o veicular?",
                                id: 6,
                                currentFaq: e,
                                handleFaq: a,
                                children: 6 === e && (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("p", {
                                        children: "A Prote\xe7\xe3o Veicular da Bem Protege cobre seus Associados em todo territ\xf3rio nacional, com assist\xeancia 24h. A cobertura inclui roubo ou furto, colis\xf5es, inc\xeandio, alagamento, indeniza\xe7\xe3o a terceiros, acidentes pessoais, carro reserva e muito mais."
                                    })
                                })
                            }), (0, t.jsx)(I, {
                                title: "Qual o procedimento em caso de acidente?",
                                id: 7,
                                currentFaq: e,
                                handleFaq: a,
                                children: 7 === e && (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("p", {
                                        children: "Se ocorrer algum sinistro ou outro tipo de ocorr\xeancia com o seu ve\xedculo, o indicado \xe9 que se entre em contato com a associa\xe7\xe3o o quanto antes p ara que seja providenciada a indeniza\xe7\xe3o ou reparo do ve\xedculo. \xc9 poss\xedvel informar uma ocorr\xeancia ou sinistro atrav\xe9s do site, aplicativo do celular, e-mail ou telefone."
                                    })
                                })
                            })]
                        })]
                    })
                },
                I = e => {
                    let {
                        children: s,
                        title: a,
                        id: o,
                        currentFaq: r,
                        handleFaq: l
                    } = e;
                    return (0, t.jsxs)("li", {
                        className: " border-t border-gray-300 ",
                        children: [(0, t.jsxs)("button", {
                            type: "button",
                            onClick: () => l(o),
                            className: "w-full flex justify-between text-lg lg:text-xl text-left pt-5 font-bold text-tbblue-500 ",
                            children: [(0, t.jsx)("span", {
                                children: a
                            }), (0, t.jsx)("div", {
                                className: "pb-10 lg:pb-5 text-content",
                                children: (0, t.jsx)("i", {
                                    className: "".concat(r === o ? "bi-dash-lg" : "bi-plus-lg", " text-2xl text-tbblue-500")
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: " transition-all text-content  ".concat(r === o ? "pb-8 h-auto" : "h-0"),
                            children: s
                        })]
                    })
                },
                _ = e => {
                    let {
                        openModal: s
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "bg-gray-100 ",
                        children: [(0, t.jsxs)("div", {
                            className: "lg:container px-5 lg:px-0 flex flex-col py-5 lg:py-12 text-center items-center mx-auto space-y-4",
                            children: [(0, t.jsx)("img", {
                                src: "/simulacao-protecao-veicular/logo.svg",
                                alt: "Brazil mask",
                                className: "w-72 h-auto mx-auto lg:mx-0"
                            }), (0, t.jsx)("h3", {
                                className: "text-3xl font-extrabold",
                                children: "Bem Protege"
                            }), (0, t.jsx)("p", {
                                className: "text-md",
                                children: "A marca que conquistou o Brasil. H\xe1 mais de 10 anos protegendo o seu patrim\xf4nio."
                            }), (0, t.jsx)("p", {
                                className: "text-sm",
                                children: (0, t.jsx)("strong", {
                                    children: "Rua Rio de Janeiro, 1279 - Bairro Lourdes Belo Horizonte/ MG CEP 30160-042"
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "lg:container px-5 lg:px-0 md:flex items-center justify-center space-x-6 ",
                            children: [(0, t.jsx)(p, {
                                icon: "arrow-right",
                                color: "BLUE",
                                size: "SMALL",
                                type: "BUTTON",
                                style: "shrink-0 h-[56px]",
                                btAction: s,
                                children: "CONTRATAR AGORA"
                            }), (0, t.jsx)("a", {
                                href: "https://apps.apple.com/br/app/bem-protege/id1437929647",
                                className: "bg-gray-100 rounded-xl border-2 border-transparent hover:border-tbblue-500 transition",
                                children: (0, t.jsx)("img", {
                                    src: "/simulacao-protecao-veicular/icons/icon-apple-store.jpg",
                                    alt: "Brazil mask",
                                    className: "w-48 h-auto rounded-xl mx-auto lg:mx-0"
                                })
                            }), (0, t.jsx)("a", {
                                href: "https://play.google.com/store/apps/details?id=br.com.hinovamobile.bemprotege&hl=pt_BR&gl=US",
                                className: "bg-gray-100 rounded-xl border-2 border-transparent hover:border-tbblue-500 transition ",
                                children: (0, t.jsx)("img", {
                                    src: "/simulacao-protecao-veicular/icons/icon-google-play.jpg",
                                    alt: "Brazil mask",
                                    className: "w-48 h-auto rounded-xl mx-auto lg:mx-0"
                                })
                            })]
                        }), (0, t.jsx)("nav", {
                            className: "my-5 lg:my-10",
                            children: (0, t.jsxs)("ul", {
                                className: "flex space-x-6 justify-center",
                                children: [(0, t.jsx)("li", {
                                    className: "font-bold text-gray-600 hover:text-gray-900",
                                    children: (0, t.jsxs)("a", {
                                        href: "https://www.facebook.com/bemprotegebrasil",
                                        children: [(0, t.jsx)("i", {
                                            className: "bi-facebook"
                                        }), " /bemprotegebrasil"]
                                    })
                                }), (0, t.jsx)("li", {
                                    className: "font-bold text-gray-600 hover:text-gray-900",
                                    children: (0, t.jsxs)("a", {
                                        href: "https://www.instagram.com/bemprotegebrasil",
                                        children: [(0, t.jsx)("i", {
                                            className: "bi-instagram"
                                        }), " /bemprotegebrasil"]
                                    })
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "py-4 lg:py-6 text-center text-xs bg-white",
                            children: (0, t.jsxs)("p", {
                                children: ["2023 - ", (0, t.jsx)("strong", {
                                    children: "Bem Protege"
                                }), " - Todos os direitos reservados"]
                            })
                        })]
                    })
                },
                D = e => {
                    let {
                        thumb: s = "",
                        title: a = "",
                        description: o = "",
                        list: r = [],
                        openModal: l
                    } = e;
                    return (0, t.jsx)("div", {
                        className: "bg-white rounded-2xl overflow-hidden",
                        children: (0, t.jsxs)("div", {
                            className: "m-3 lg:m-5 items-center flex flex-col justify-center",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-row items-center lg:flex-col ",
                                children: [s && (0, t.jsx)("div", {
                                    className: "overflow-hidden flex items-start h-[180px] flex items-center",
                                    children: (0, t.jsx)("img", {
                                        src: s,
                                        alt: "Rio",
                                        className: " w-auto rounded-t-2xl mb-5 "
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "w-1/2 lg:w-auto",
                                    children: [(0, t.jsxs)("p", {
                                        className: "flex items-center space-x-2 bg-blue-100 text-blue-900 text-xs px-4 py-1 rounded-2xl mb-1",
                                        children: [(0, t.jsx)("img", {
                                            src: "/simulacao-protecao-veicular/icons/icon-bp.svg",
                                            alt: "Brazil mask",
                                            className: "h-3"
                                        }), (0, t.jsx)("span", {
                                            children: "PROTE\xc7\xc3O VEICULAR BP"
                                        })]
                                    }), (0, t.jsx)("h3", {
                                        className: "text-xl md:text-lg lg:text-2xl font-bold mb-2 mt-2",
                                        children: a
                                    })]
                                })]
                            }), (0, t.jsxs)("ul", {
                                className: "text-left w-full space-y-1",
                                children: [r.map((e, s) => (0, t.jsxs)("li", {
                                    className: "flex space-x-2 items-center justify-start w-full",
                                    children: [(0, t.jsx)("i", {
                                        className: "bi-check text-xl text-green-500"
                                    }), (0, t.jsx)("span", {
                                        children: e
                                    })]
                                }, e)), (0, t.jsx)("li", {
                                    className: "pl-7 flex items-center justify-start w-full ",
                                    children: (0, t.jsx)("span", {
                                        children: "E mais!"
                                    })
                                })]
                            }), (0, t.jsx)(p, {
                                icon: "arrow-right",
                                color: "BLUE",
                                size: "SMALL",
                                type: "BUTTON",
                                style: "mt-6",
                                btAction: l,
                                title: a,
                                children: "FAZER COTA\xc7\xc3O"
                            }), (0, t.jsx)(p, {
                                icon: "chevron-down",
                                color: "BLUE",
                                size: "SMALL",
                                type: "LINK-CLEAN",
                                style: "mt-3",
                                url: "#beneficios",
                                children: "Ver detalhes"
                            })]
                        })
                    })
                },
                H = e => {
                    let {
                        openModal: s,
                        hasAll: a = !1
                    } = e;
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)("div", {
                            id: "protecao-veicular",
                            className: "px-5 lg:px-0 pt-5 pb-7 lg:py-20 bg-gray-200 opacity-100 text-center lg:-mt-16",
                            children: [(0, t.jsxs)("div", {
                                className: "lg:container text-center",
                                children: [(0, t.jsx)("div", {
                                    className: "flex flex-col space-y-1 text-center lg:my-8",
                                    children: (0, t.jsxs)(y, {
                                        style: "mx-auto",
                                        children: ["Prote\xe7\xe3o veicular para ", (0, t.jsx)("span", {
                                            children: "todos os perfis"
                                        })]
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-0 lg:px-3 mt-5 lg:mt-10 mb-0 md:px-0 mx-auto",
                                    children: [(0, t.jsx)(D, {
                                        thumb: "/simulacao-protecao-veicular/carro.jpg",
                                        title: "CARROS",
                                        description: "Panes no caminh\xe3o podem aumentar o risco de acidentes. Com o BP Truck seu ve\xedculo ter\xe1 sempre a assist\xeancia necess\xe1ria",
                                        list: ["Carros de passeio", "Carros de leil\xe3o", "Carros de aplicativo"],
                                        openModal: s
                                    }), (0, t.jsx)(D, {
                                        thumb: "/simulacao-protecao-veicular/moto.jpg",
                                        title: "MOTOS",
                                        description: "Panes no caminh\xe3o podem aumentar o risco de acidentes. Com o BP Truck seu ve\xedculo ter\xe1 sempre a assist\xeancia necess\xe1ria",
                                        list: ["Todas as cilindradas", "Motos de aplicativo", "Motos de delivery"],
                                        openModal: s
                                    }), (0, t.jsx)(D, {
                                        thumb: "/simulacao-protecao-veicular/utilitario.jpg",
                                        title: "UTILIT\xc1RIOS",
                                        description: "Panes no caminh\xe3o podem aumentar o risco de acidentes. Com o BP Truck seu ve\xedculo ter\xe1 sempre a assist\xeancia necess\xe1ria",
                                        list: ["SUV", "Caminhonetes", "Vans de carga"],
                                        openModal: s
                                    }), (0, t.jsx)(D, {
                                        thumb: "/simulacao-protecao-veicular/caminhao.jpg",
                                        title: "CAMINH\xd5ES",
                                        description: "Panes no caminh\xe3o podem aumentar o risco de acidentes. Com o BP Truck seu ve\xedculo ter\xe1 sempre a assist\xeancia necess\xe1ria",
                                        list: ["Cavalo mec\xe2cnico", "Agregados", "Implementos"],
                                        openModal: s
                                    })]
                                }), a && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("div", {
                                        className: "px-3 md:px-0 lg:hidden",
                                        children: (0, t.jsx)(N, {
                                            title: "MAIS BENEF\xcdCIOS PARA SUA FROTA"
                                        })
                                    }), (0, t.jsxs)(w, {
                                        column: 2,
                                        snap: !0,
                                        gap: 15,
                                        margin: 15,
                                        id: "swipe-benefits",
                                        hasDots: !0,
                                        customClass: "",
                                        customClassDesktop: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full",
                                        children: [(0, t.jsx)(A, {
                                            customClass: " ",
                                            children: (0, t.jsx)(D, {
                                                title: "Cobertura parabrisa e vidros completos",
                                                description: "Troca de parabrisa, vidro, farol e retrovisores. O BP Truck cobre te assegura contra todos estes imprevistos."
                                            })
                                        }), (0, t.jsx)(A, {
                                            customClass: " ",
                                            children: (0, t.jsx)(D, {
                                                title: "Fen\xf4menos da natureza",
                                                description: "Seu caminh\xe3o estar\xe1 coberto contra tempestades, chuva de granizo, submers\xe3o por inunda\xe7\xe3o, alagamento de \xe1gua doce, raio e queda de \xe1rvore"
                                            })
                                        }), (0, t.jsx)(A, {
                                            customClass: " ",
                                            children: (0, t.jsx)(D, {
                                                title: "100% tabela FIPE",
                                                description: "A tabela FIPE \xe9 reconhecida por divulgar os pre\xe7os m\xe9dios de mercado de carros. Seguimos a tabela para poder oferecer um servi\xe7o justo"
                                            })
                                        }), (0, t.jsx)(A, {
                                            customClass: " ",
                                            children: (0, t.jsx)("div", {
                                                className: "bg-white rounded-2xl overflow-hidden",
                                                children: (0, t.jsxs)("div", {
                                                    className: "px-3 md:px-5 py-3 md:py-5 h-80 md:h-60 items-center flex flex-col justify-center space-y-8 ",
                                                    children: [(0, t.jsx)("p", {
                                                        className: "bg-gradient-to-r from-[#148EFF] to-[#1DD0A5] font-extrabold bg-clip-text text-transparent text-2xl inline-block",
                                                        children: "E muito mais benef\xedcios para voc\xea!"
                                                    }), (0, t.jsx)(p, {
                                                        icon: "arrow-right",
                                                        color: "BLUE",
                                                        size: "SMALL",
                                                        type: "LINK-CLEAN",
                                                        style: "",
                                                        url: "/beneficios-bp-truck",
                                                        children: "Veja os benef\xedcios"
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "px-3 md:px-0",
                                children: a && (0, t.jsx)(p, {
                                    icon: "arrow-right",
                                    color: "BLUE",
                                    size: "SMALL",
                                    type: "BUTTON",
                                    style: "my-10",
                                    btAction: s,
                                    children: "Cadastrar online"
                                })
                            })]
                        })
                    })
                },
                G = e => {
                    let {
                        closeModal: s,
                        isPopup: a = !0,
                        title: o = "Ve\xedculos"
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: "lg:container h-screen lg:h-auto px-0 py-0 lg:py-0 lg:px-0 lg:flex justify-between overflow-hidden opacity-100 items-stretch bg-white bg-tablue-500 bg-[url('/background-main.jpg')]",
                        children: [(0, t.jsxs)("div", {
                            className: "lg:order-2 w-auto lg:w-3/5 relative lg:my-0 lg:rounded-none rounded-2xl overflow-hidden",
                            children: [a && (0, t.jsx)("button", {
                                type: "button",
                                onClick: () => s("MY_MODAL"),
                                className: "bg-white rounded-lg py-2 px-3 absolute top-5 right-5 z-20 opacity-80 hover:opacity-100 transition",
                                children: (0, t.jsx)("i", {
                                    className: "bi-x-lg text-lg"
                                })
                            }), (0, t.jsx)("div", {
                                className: "h-[300px] lg:h-full  relative overflow-hidden bg-[url('/simulacao-protecao-veicular/banner-gl.png')] bg-no-repeat bg-contain bg-bottom"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "lg:order-1 h-full w-auto lg:w-3/5 xl:w-2/5 px-5 lg:px-10 py-5 bg-white",
                            children: [(0, t.jsx)("div", {
                                className: " rounded-full w-14 h-14 lg:h-10 lg:w-10 flex justify-center items-center mx-auto -mt-12 lg:-mt-0 relative z-10 mb-10 lg:mb-0 bg-gray-100",
                                children: (0, t.jsx)("img", {
                                    src: "/simulacao-protecao-veicular/icons/icon-bp.svg",
                                    alt: "Dash blue",
                                    className: "h-6 lg:h-6 w-auto"
                                })
                            }), (0, t.jsxs)(y, {
                                style: "text-gray-800 text-center lg:text-left ",
                                size: "H3",
                                children: ["PROTE\xc7\xc3O VEICULAR PARA ", o]
                            }), (0, t.jsx)("p", {
                                className: "text-gray-800 lg:order-2",
                                children: "Preencha os campos abaixos para solicitar sua cota\xe7\xe3o."
                            }), (0, t.jsx)(v, {
                                theme: "LIGHT"
                            })]
                        })]
                    })
                };

            function V() {
                let [e, s] = (0, o.useState)({
                    MY_MODAL: {
                        status: !1,
                        title: ""
                    },
                    SECOND_MODAL: {
                        status: !1,
                        title: ""
                    }
                }), a = function(a) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    s({
                        ...e,
                        [a]: {
                            status: !0,
                            title: t
                        }
                    })
                }, r = a => {
                    let t = document.querySelector("body");
                    null !== t && (t.className = ""), s({
                        ...e,
                        [a]: {
                            status: !1
                        }
                    })
                };
                return (0, t.jsxs)("div", {
                    children: [(0, t.jsxs)(l(), {
                        children: [(0, t.jsx)("title", {
                            children: "Prote\xe7\xe3o Veicular Bem Protege - Carros, motos, utilit\xe1rios e caminh\xf5es"
                        }), (0, t.jsx)("meta", {
                            name: "description",
                            content: "Prote\xe7\xe3o Veicular Bem Protege - Carros, motos, utilit\xe1rios e caminh\xf5es"
                        }), (0, t.jsx)("link", {
                            rel: "icon",
                            href: "/simulacao-protecao-veicular/favicon.ico"
                        })]
                    }), (0, t.jsx)(M, {
                        status: e.MY_MODAL.status,
                        closeModal: r,
                        modal: "MY_MODAL",
                        children: (0, t.jsx)(G, {
                            closeModal: r,
                            title: e.MY_MODAL.title
                        })
                    }), (0, t.jsx)(M, {
                        status: e.SECOND_MODAL.status,
                        closeModal: r,
                        modal: "SECOND_MODAL",
                        children: (0, t.jsx)("p", {
                            children: "MEU MODAL 2"
                        })
                    }), (0, t.jsxs)("main", {
                        className: "",
                        children: [(0, t.jsx)(h, {
                            openModal: a
                        }), (0, t.jsx)(E, {
                            openModal: a
                        }), (0, t.jsx)(H, {
                            openModal: a
                        }), (0, t.jsx)(T, {}), (0, t.jsx)(q, {
                            style: "bg-white",
                            openModal: a
                        }), (0, t.jsx)(k, {
                            openModal: a
                        }), (0, t.jsx)("div", {
                            className: "bg-[url('/simulacao-protecao-veicular/pattern-cities-outline.svg')] h-12 lg:h-20 bg-cover"
                        }), (0, t.jsx)(B, {}), (0, t.jsx)(O, {}), (0, t.jsx)(R, {
                            style: "bg-gray-100 mt-20",
                            openModal: a
                        }), (0, t.jsx)(U, {}), (0, t.jsx)(_, {
                            openModal: a
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [338, 774, 888, 179], function() {
            return e(e.s = 5728)
        }), _N_E = e.O()
    }
]);
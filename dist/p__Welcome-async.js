((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__Welcome'],
{ "src/pages/Welcome.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
var _s1 = $RefreshSig$();
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */ const InfoCard = ({ title, href, index, desc })=>{
    _s();
    const { useToken } = _antd.theme;
    const { token } = useToken();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        style: {
            backgroundColor: token.colorBgContainer,
            boxShadow: token.boxShadow,
            borderRadius: '8px',
            fontSize: '14px',
            color: token.colorTextSecondary,
            lineHeight: '22px',
            padding: '16px 19px',
            minWidth: '220px',
            flex: 1
        },
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        style: {
                            width: 48,
                            height: 48,
                            lineHeight: '22px',
                            backgroundSize: '100%',
                            textAlign: 'center',
                            padding: '8px 16px 16px 12px',
                            color: '#FFF',
                            fontWeight: 'bold',
                            backgroundImage: "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')"
                        },
                        children: index
                    }, void 0, false, {
                        fileName: "src/pages/Welcome.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        style: {
                            fontSize: '16px',
                            color: token.colorText,
                            paddingBottom: 8
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "src/pages/Welcome.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Welcome.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    fontSize: '14px',
                    color: token.colorTextSecondary,
                    textAlign: 'justify',
                    lineHeight: '22px',
                    marginBottom: 8
                },
                children: desc
            }, void 0, false, {
                fileName: "src/pages/Welcome.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                href: href,
                target: "_blank",
                rel: "noreferrer",
                children: [
                    "了解更多 ",
                    '>'
                ]
            }, void 0, true, {
                fileName: "src/pages/Welcome.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Welcome.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_s(InfoCard, "CXYXngGSy/ueZ8bUn1vgrdGvaEo=", true);
_c = InfoCard;
const Welcome = ()=>{
    var _initialState_settings;
    _s1();
    const { token } = _antd.theme.useToken();
    const { initialState } = (0, _max.useModel)('@@initialState');
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
            style: {
                borderRadius: 8
            },
            styles: {
                body: {
                    backgroundImage: (initialState === null || initialState === void 0 ? void 0 : (_initialState_settings = initialState.settings) === null || _initialState_settings === void 0 ? void 0 : _initialState_settings.navTheme) === 'realDark' ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)' : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)'
                }
            },
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                style: {
                    backgroundPosition: '100% -30%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '274px auto',
                    backgroundImage: "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        style: {
                            fontSize: '20px',
                            color: token.colorTextHeading
                        },
                        children: "欢迎使用 淘小宝"
                    }, void 0, false, {
                        fileName: "src/pages/Welcome.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        style: {
                            fontSize: '14px',
                            color: token.colorTextSecondary,
                            lineHeight: '22px',
                            marginTop: 16,
                            marginBottom: 32,
                            width: '65%'
                        },
                        children: "淘小宝是一个购物平台，在淘小宝购物平台上，用户不仅可以享受到便捷的购物体验，还能发现各种优惠活动和精选商品。无论是日常生活用品还是高端电子产品，淘小宝都能满足您的需求，让您轻松愉快地完成每一次购物。"
                    }, void 0, false, {
                        fileName: "src/pages/Welcome.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(InfoCard, {
                                index: 1,
                                href: "https://umijs.org/docs/introduce/introduce",
                                title: "便捷的购物体验",
                                desc: "淘小宝平台提供了简洁直观的用户界面，使用户能够快速找到所需商品。无论是搜索功能还是分类导航，都经过精心设计，确保用户能够在最短的时间内完成购物操作。"
                            }, void 0, false, {
                                fileName: "src/pages/Welcome.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(InfoCard, {
                                index: 2,
                                title: "丰富的优惠活动",
                                href: "https://ant.design",
                                desc: "淘小宝定期推出各种优惠活动，如限时折扣、满减活动、会员专享优惠等，帮助用户节省购物成本。这些活动不仅提升了用户的购买欲望，还增加了平台的活跃度和用户黏性。"
                            }, void 0, false, {
                                fileName: "src/pages/Welcome.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(InfoCard, {
                                index: 3,
                                title: "多样化的商品选择",
                                href: "https://procomponents.ant.design",
                                desc: "淘小宝涵盖了从日常生活用品到高端电子产品的广泛商品种类，满足不同用户的需求。无论是家庭日常所需的食品、日用品，还是科技爱好者追求的最新电子产品，用户都能在淘小宝找到满意的选择。 "
                            }, void 0, false, {
                                fileName: "src/pages/Welcome.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Welcome.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Welcome.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/pages/Welcome.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Welcome.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
_s1(Welcome, "t4rumwICndEohNSyqYk3Pzlg18I=", false, function() {
    return [
        _antd.theme.useToken,
        _max.useModel
    ];
});
_c1 = Welcome;
var _default = Welcome;
var _c;
var _c1;
$RefreshReg$(_c, "InfoCard");
$RefreshReg$(_c1, "Welcome");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=p__Welcome-async.js.map
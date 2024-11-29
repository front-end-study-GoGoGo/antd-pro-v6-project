globalThis.makoModuleHotUpdate('src/.umi/plugin-layout/Layout.tsx', {
    modules: {
        "src/.umi/plugin-layout/Layout.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "default", {
                enumerable: true,
                get: function() {
                    return Component$$;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _max = __mako_require__("src/.umi/exports.ts");
            var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            "";
            var _Logo = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/.umi/plugin-layout/Logo.tsx"));
            var _Exception = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/.umi/plugin-layout/Exception.tsx"));
            var _rightRender = __mako_require__("src/.umi/plugin-layout/rightRender.tsx");
            var _pluginmodel = __mako_require__("src/.umi/plugin-model/index.tsx");
            var _pluginaccess = __mako_require__("src/.umi/plugin-access/index.tsx");
            var _pluginlocale = __mako_require__("src/.umi/plugin-locale/index.ts");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            var _s = $RefreshSig$();
            // 过滤出需要显示的路由, 这里的filterFn 指 不希望显示的层级
            const filterRoutes = (routes, filterFn)=>{
                if (routes.length === 0) return [];
                let newRoutes = [];
                for (const route of routes){
                    const newRoute = {
                        ...route
                    };
                    if (filterFn(route)) {
                        if (Array.isArray(newRoute.routes)) newRoutes.push(...filterRoutes(newRoute.routes, filterFn));
                    } else {
                        if (Array.isArray(newRoute.children)) {
                            newRoute.children = filterRoutes(newRoute.children, filterFn);
                            newRoute.routes = newRoute.children;
                        }
                        newRoutes.push(newRoute);
                    }
                }
                return newRoutes;
            };
            // 格式化路由 处理因 wrapper 导致的 菜单 path 不一致
            const mapRoutes = (routes)=>{
                if (routes.length === 0) return [];
                return routes.map((route)=>{
                    // 需要 copy 一份, 否则会污染原始数据
                    const newRoute = {
                        ...route
                    };
                    if (route.originPath) newRoute.path = route.originPath;
                    if (Array.isArray(route.routes)) newRoute.routes = mapRoutes(route.routes);
                    if (Array.isArray(route.children)) newRoute.children = mapRoutes(route.children);
                    return newRoute;
                });
            };
            function Component$$(props) {
                _s();
                const location = (0, _max.useLocation)();
                const navigate = (0, _max.useNavigate)();
                const { clientRoutes, pluginManager } = (0, _max.useAppData)();
                const initialInfo = _pluginmodel.useModel && (0, _pluginmodel.useModel)('@@initialState') || {
                    initialState: undefined,
                    loading: false,
                    setInitialState: null
                };
                const { initialState, loading, setInitialState } = initialInfo;
                const userConfig = {
                    "locale": true,
                    "navTheme": "light",
                    "colorPrimary": "#1890ff",
                    "layout": "mix",
                    "contentWidth": "Fluid",
                    "fixedHeader": false,
                    "fixSiderbar": true,
                    "colorWeak": false,
                    "title": "淘小宝",
                    "pwa": true,
                    "logo": "./public/logo.svg",
                    "iconfontUrl": "",
                    "token": {}
                };
                const { formatMessage } = (0, _pluginlocale.useIntl)();
                const runtimeConfig = pluginManager.applyPlugins({
                    key: 'layout',
                    type: 'modify',
                    initialValue: {
                        ...initialInfo
                    }
                });
                // 现在的 layout 及 wrapper 实现是通过父路由的形式实现的, 会导致路由数据多了冗余层级, proLayout 消费时, 无法正确展示菜单, 这里对冗余数据进行过滤操作
                const newRoutes = filterRoutes(clientRoutes.filter((route)=>route.id === 'ant-design-pro-layout'), (route)=>{
                    return !!route.isLayout && route.id !== 'ant-design-pro-layout' || !!route.isWrapper;
                });
                const [route] = (0, _pluginaccess.useAccessMarkedRoutes)(mapRoutes(newRoutes));
                const matchedRoute = (0, _react.useMemo)(()=>{
                    var _matchRoutes_pop, _matchRoutes_pop1, _matchRoutes;
                    return (_matchRoutes = (0, _max.matchRoutes)(route.children, location.pathname)) === null || _matchRoutes === void 0 ? void 0 : (_matchRoutes_pop1 = _matchRoutes.pop) === null || _matchRoutes_pop1 === void 0 ? void 0 : (_matchRoutes_pop = _matchRoutes_pop1.call(_matchRoutes)) === null || _matchRoutes_pop === void 0 ? void 0 : _matchRoutes_pop.route;
                }, [
                    location.pathname
                ]);
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProLayout, {
                    route: route,
                    location: location,
                    title: userConfig.title || 'ant-design-pro',
                    navTheme: "dark",
                    siderWidth: 256,
                    onMenuHeaderClick: (e)=>{
                        e.stopPropagation();
                        e.preventDefault();
                        navigate('/');
                    },
                    formatMessage: userConfig.formatMessage || formatMessage,
                    menu: {
                        locale: userConfig.locale
                    },
                    logo: _Logo.default,
                    menuItemRender: (menuItemProps, defaultDom)=>{
                        if (menuItemProps.isUrl || menuItemProps.children) return defaultDom;
                        if (menuItemProps.path && location.pathname !== menuItemProps.path) return(// handle wildcard route path, for example /slave/* from qiankun
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                            to: menuItemProps.path.replace('/*', ''),
                            target: menuItemProps.target,
                            children: defaultDom
                        }, void 0, false, {
                            fileName: "src/.umi/plugin-layout/Layout.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, void 0));
                        return defaultDom;
                    },
                    itemRender: (route, _, routes)=>{
                        const { breadcrumbName, title, path } = route;
                        const label = title || breadcrumbName;
                        const last = routes[routes.length - 1];
                        if (last) {
                            if (last.path === path || last.linkPath === path) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "src/.umi/plugin-layout/Layout.tsx",
                                lineNumber: 150,
                                columnNumber: 20
                            }, void 0);
                        }
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                            to: path,
                            children: label
                        }, void 0, false, {
                            fileName: "src/.umi/plugin-layout/Layout.tsx",
                            lineNumber: 153,
                            columnNumber: 16
                        }, void 0);
                    },
                    disableContentMargin: true,
                    fixSiderbar: true,
                    fixedHeader: true,
                    ...runtimeConfig,
                    rightContentRender: runtimeConfig.rightContentRender !== false && ((layoutProps)=>{
                        const dom = (0, _rightRender.getRightRenderContent)({
                            runtimeConfig,
                            loading,
                            initialState,
                            setInitialState
                        });
                        if (runtimeConfig.rightContentRender) return runtimeConfig.rightContentRender(layoutProps, dom, {
                            // BREAK CHANGE userConfig > runtimeConfig
                            userConfig,
                            runtimeConfig,
                            loading,
                            initialState,
                            setInitialState
                        });
                        return dom;
                    }),
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Exception.default, {
                        route: matchedRoute,
                        noFound: runtimeConfig === null || runtimeConfig === void 0 ? void 0 : runtimeConfig.noFound,
                        notFound: runtimeConfig === null || runtimeConfig === void 0 ? void 0 : runtimeConfig.notFound,
                        unAccessible: runtimeConfig === null || runtimeConfig === void 0 ? void 0 : runtimeConfig.unAccessible,
                        noAccessible: runtimeConfig === null || runtimeConfig === void 0 ? void 0 : runtimeConfig.noAccessible,
                        children: runtimeConfig.childrenRender ? runtimeConfig.childrenRender(/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Outlet, {}, void 0, false, {
                            fileName: "src/.umi/plugin-layout/Layout.tsx",
                            lineNumber: 190,
                            columnNumber: 42
                        }, this), props) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Outlet, {}, void 0, false, {
                            fileName: "src/.umi/plugin-layout/Layout.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/.umi/plugin-layout/Layout.tsx",
                        lineNumber: 182,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "src/.umi/plugin-layout/Layout.tsx",
                    lineNumber: 116,
                    columnNumber: 5
                }, this);
            }
            _s(Component$$, "pxyibY4jsmhKpD8b+fagMzVuQLM=", false, function() {
                return [
                    _max.useLocation,
                    _max.useNavigate,
                    _max.useAppData,
                    _pluginmodel.useModel,
                    _pluginlocale.useIntl,
                    _pluginaccess.useAccessMarkedRoutes
                ];
            });
            _c = Component$$;
            var _c;
            $RefreshReg$(_c, "Component$$");
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
        }
    }
}, function(runtime) {
    runtime._h = '11136712344441321826';
    runtime.updateEnsure2Map({
        "src/.umi/core/EmptyRoute.tsx": [
            "src/.umi/core/EmptyRoute.tsx"
        ],
        "src/.umi/plugin-layout/Layout.tsx": [
            "src/.umi/plugin-layout/Layout.tsx"
        ],
        "src/.umi/plugin-openapi/openapi.tsx": [
            "src/.umi/plugin-openapi/openapi.tsx",
            "vendors"
        ],
        "src/pages/404.tsx": [
            "p__404"
        ],
        "src/pages/TableList/index.tsx": [
            "p__TableList__index"
        ],
        "src/pages/User/Login/index.tsx": [
            "p__User__Login__index"
        ],
        "src/pages/Welcome.tsx": [
            "p__Welcome"
        ]
    });
    ;
});

//# sourceMappingURL=src__umi_plugin-layout_Layout_tsx-async.7285865080548141857.hot-update.js.map
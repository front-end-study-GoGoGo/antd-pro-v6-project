globalThis.makoModuleHotUpdate('p__User__Login__index', {
    modules: {
        "src/pages/User/Login/index.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ProFormCheckbox, {
                noStyle: true,
                name: "agreeTerms",
                children: [
                    "我已阅读并同意",
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                        onClick: ()=>setShowModal(true),
                        style: {
                            color: '#1890ff',
                            cursor: 'pointer'
                        },
                        children: "《用户隐私保护权限》"
                    }, void 0, false, {
                        fileName: "src/pages/User/Login/index.tsx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/User/Login/index.tsx",
                lineNumber: 1,
                columnNumber: 1
            }, this);
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
    runtime._h = '8251042462063582456';
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

//# sourceMappingURL=p__User__Login__index-async.12475080579538473006.hot-update.js.map
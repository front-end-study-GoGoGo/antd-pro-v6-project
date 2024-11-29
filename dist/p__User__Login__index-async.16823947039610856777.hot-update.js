globalThis.makoModuleHotUpdate('p__User__Login__index', {
    modules: {
        "src/pages/User/Login/index.tsx": function(module, exports, __mako_require__) {
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
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _api = __mako_require__("src/services/ant-design-pro/api.ts");
            var _login = __mako_require__("src/services/ant-design-pro/login.ts");
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            var _max = __mako_require__("src/.umi/exports.ts");
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
            var _react = _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
            var _reactdom = __mako_require__("node_modules/react-dom/index.js");
            var _defaultSettings = _interop_require_default._(__mako_require__("config/defaultSettings.ts"));
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
            var _s2 = $RefreshSig$();
            const useStyles = (0, _antdstyle.createStyles)(({ token })=>{
                return {
                    action: {
                        marginLeft: '8px',
                        color: 'rgba(0, 0, 0, 0.2)',
                        fontSize: '24px',
                        verticalAlign: 'middle',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        '&:hover': {
                            color: token.colorPrimaryActive
                        }
                    },
                    lang: {
                        width: 42,
                        height: 42,
                        lineHeight: '42px',
                        position: 'fixed',
                        right: 16,
                        borderRadius: token.borderRadius,
                        ':hover': {
                            backgroundColor: token.colorBgTextHover
                        }
                    },
                    container: {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        overflow: 'auto',
                        backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
                        backgroundSize: '100% 100%'
                    }
                };
            });
            const ActionIcons = ()=>{
                _s();
                const { styles } = useStyles();
                return (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                    children: [
                        (0, _jsxdevruntime.jsxDEV)(_icons.AlipayCircleOutlined, {
                            className: styles.action
                        }, "AlipayCircleOutlined", false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 66,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_icons.TaobaoCircleOutlined, {
                            className: styles.action
                        }, "TaobaoCircleOutlined", false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 67,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_icons.WeiboCircleOutlined, {
                            className: styles.action
                        }, "WeiboCircleOutlined", false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 68,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true);
            };
            _s(ActionIcons, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
                return [
                    useStyles
                ];
            });
            _c = ActionIcons;
            const Lang = ()=>{
                _s1();
                const { styles } = useStyles();
                return (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.lang,
                    "data-lang": true,
                    children: _max.SelectLang && (0, _jsxdevruntime.jsxDEV)(_max.SelectLang, {}, void 0, false, {
                        fileName: "src/pages/User/Login/index.tsx",
                        lineNumber: 78,
                        columnNumber: 22
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/User/Login/index.tsx",
                    lineNumber: 77,
                    columnNumber: 5
                }, this);
            };
            _s1(Lang, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
                return [
                    useStyles
                ];
            });
            _c1 = Lang;
            const LoginMessage = ({ content })=>{
                return (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
                    style: {
                        marginBottom: 24
                    },
                    message: content,
                    type: "error",
                    showIcon: true
                }, void 0, false, {
                    fileName: "src/pages/User/Login/index.tsx",
                    lineNumber: 87,
                    columnNumber: 5
                }, this);
            };
            _c2 = LoginMessage;
            const Login = ()=>{
                _s2();
                const [userLoginState, setUserLoginState] = (0, _react.useState)({});
                const [type, setType] = (0, _react.useState)('account');
                const { initialState, setInitialState } = (0, _max.useModel)('@@initialState');
                const { styles } = useStyles();
                const intl = (0, _max.useIntl)();
                const fetchUserInfo = async ()=>{
                    var _initialState_fetchUserInfo;
                    const userInfo = await (initialState === null || initialState === void 0 ? void 0 : (_initialState_fetchUserInfo = initialState.fetchUserInfo) === null || _initialState_fetchUserInfo === void 0 ? void 0 : _initialState_fetchUserInfo.call(initialState));
                    if (userInfo) (0, _reactdom.flushSync)(()=>{
                        setInitialState((s)=>({
                                ...s,
                                currentUser: userInfo
                            }));
                    });
                };
                const handleSubmit = async (values)=>{
                    try {
                        const msg = await (0, _api.login)({
                            ...values,
                            type
                        });
                        if (msg.status === 'ok') {
                            const defaultLoginSuccessMessage = intl.formatMessage({
                                id: 'pages.login.success',
                                defaultMessage: '登录成功！'
                            });
                            _antd.message.success(defaultLoginSuccessMessage);
                            await fetchUserInfo();
                            const urlParams = new URL(window.location.href).searchParams;
                            _max.history.push(urlParams.get('redirect') || '/');
                            return;
                        }
                        console.log(msg);
                        setUserLoginState(msg);
                    } catch (error) {
                        const defaultLoginFailureMessage = intl.formatMessage({
                            id: 'pages.login.failure',
                            defaultMessage: '登录失败，请重试！'
                        });
                        console.log(error);
                        _antd.message.error(defaultLoginFailureMessage);
                    }
                };
                const { status, type: loginType } = userLoginState;
                return (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.container,
                    children: [
                        (0, _jsxdevruntime.jsxDEV)(_max.Helmet, {
                            children: (0, _jsxdevruntime.jsxDEV)("title", {
                                children: [
                                    intl.formatMessage({
                                        id: 'menu.login',
                                        defaultMessage: '登录页'
                                    }),
                                    _defaultSettings.default.title && ` - ${_defaultSettings.default.title}`
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/User/Login/index.tsx",
                                lineNumber: 149,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 148,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(Lang, {}, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 157,
                            columnNumber: 7
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                flex: '1',
                                padding: '32px 0'
                            },
                            children: (0, _jsxdevruntime.jsxDEV)(_procomponents.LoginForm, {
                                contentStyle: {
                                    minWidth: 280,
                                    maxWidth: '75vw'
                                },
                                logo: (0, _jsxdevruntime.jsxDEV)("img", {
                                    alt: "logo",
                                    src: "/logo.svg"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, void 0),
                                title: "淘小宝",
                                subTitle: "淘小宝，品质生活从这里开始！",
                                initialValues: {
                                    autoLogin: true
                                },
                                onFinish: async (values)=>{
                                    await handleSubmit(values);
                                },
                                children: [
                                    (0, _jsxdevruntime.jsxDEV)(_antd.Tabs, {
                                        activeKey: type,
                                        onChange: setType,
                                        centered: true,
                                        items: [
                                            {
                                                key: 'account',
                                                label: intl.formatMessage({
                                                    id: 'pages.login.accountLogin.tab',
                                                    defaultMessage: '账户密码登录'
                                                })
                                            },
                                            {
                                                key: 'mobile',
                                                label: intl.formatMessage({
                                                    id: 'pages.login.phoneLogin.tab',
                                                    defaultMessage: '手机号登录'
                                                })
                                            }
                                        ]
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 187,
                                        columnNumber: 11
                                    }, this),
                                    status === 'error' && loginType === 'account' && (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                                        content: intl.formatMessage({
                                            id: 'pages.login.accountLogin.errorMessage',
                                            defaultMessage: '账户或密码错误(admin/ant.design)'
                                        })
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    type === 'account' && (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                        children: [
                                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                name: "username",
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 27
                                                    }, void 0)
                                                },
                                                placeholder: intl.formatMessage({
                                                    id: 'pages.login.username.placeholder',
                                                    defaultMessage: '用户名: admin or user'
                                                }),
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.username.required",
                                                            defaultMessage: "请输入用户名!"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText.Password, {
                                                name: "password",
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 27
                                                    }, void 0)
                                                },
                                                placeholder: intl.formatMessage({
                                                    id: 'pages.login.password.placeholder',
                                                    defaultMessage: '密码: ant.design'
                                                }),
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.password.required",
                                                            defaultMessage: "请输入密码！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    status === 'error' && loginType === 'mobile' && (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                                        content: "验证码错误"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 266,
                                        columnNumber: 60
                                    }, this),
                                    type === 'mobile' && (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                        children: [
                                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: (0, _jsxdevruntime.jsxDEV)(_icons.MobileOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 27
                                                    }, void 0)
                                                },
                                                name: "mobile",
                                                placeholder: intl.formatMessage({
                                                    id: 'pages.login.phoneNumber.placeholder',
                                                    defaultMessage: '手机号'
                                                }),
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.phoneNumber.required",
                                                            defaultMessage: "请输入手机号！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    },
                                                    {
                                                        pattern: /^1\d{10}$/,
                                                        message: (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.phoneNumber.invalid",
                                                            defaultMessage: "手机号格式错误！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormCaptcha, {
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 27
                                                    }, void 0)
                                                },
                                                captchaProps: {
                                                    size: 'large'
                                                },
                                                placeholder: intl.formatMessage({
                                                    id: 'pages.login.captcha.placeholder',
                                                    defaultMessage: '请输入验证码'
                                                }),
                                                captchaTextRender: (timing, count)=>{
                                                    if (timing) return `${count} ${intl.formatMessage({
                                                        id: 'pages.getCaptchaSecondText',
                                                        defaultMessage: '获取验证码'
                                                    })}`;
                                                    return intl.formatMessage({
                                                        id: 'pages.login.phoneLogin.getVerificationCode',
                                                        defaultMessage: '获取验证码'
                                                    });
                                                },
                                                name: "captcha",
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.captcha.required",
                                                            defaultMessage: "请输入验证码！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ],
                                                onGetCaptcha: async (phone)=>{
                                                    const result = await (0, _login.getFakeCaptcha)({
                                                        phone
                                                    });
                                                    if (!result) return;
                                                    _antd.message.success('获取验证码成功！验证码为：1234');
                                                }
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    (0, _jsxdevruntime.jsxDEV)("div", {
                                        style: {
                                            marginBottom: 24
                                        },
                                        children: [
                                            (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormCheckbox, {
                                                noStyle: true,
                                                name: "autoLogin",
                                                children: (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                    id: "pages.login.rememberMe",
                                                    defaultMessage: "自动登录"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Login/index.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 353,
                                                columnNumber: 13
                                            }, this),
                                            (0, _jsxdevruntime.jsxDEV)("a", {
                                                style: {
                                                    float: 'right'
                                                },
                                                children: (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                    id: "pages.login.forgotPassword",
                                                    defaultMessage: "忘记密码"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Login/index.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 356,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 348,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/User/Login/index.tsx",
                                lineNumber: 164,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 158,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/User/Login/index.tsx",
                    lineNumber: 147,
                    columnNumber: 5
                }, this);
            };
            _s2(Login, "jqfOl5boKYc1Elr3TIq2ksUGG8c=", false, function() {
                return [
                    _max.useModel,
                    useStyles,
                    _max.useIntl
                ];
            });
            _c3 = Login;
            var _default = Login;
            var _c;
            var _c1;
            var _c2;
            var _c3;
            $RefreshReg$(_c, "ActionIcons");
            $RefreshReg$(_c1, "Lang");
            $RefreshReg$(_c2, "LoginMessage");
            $RefreshReg$(_c3, "Login");
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
        "src/.umi/exports.ts": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            function _export(target, all) {
                for(var name in all)Object.defineProperty(target, name, {
                    enumerable: true,
                    get: all[name]
                });
            }
            __mako_require__.e(exports, {
                Access: function() {
                    return _pluginaccess.Access;
                },
                ApplyPluginsType: function() {
                    return _plugin.ApplyPluginsType;
                },
                FormattedDate: function() {
                    return _pluginlocale.FormattedDate;
                },
                FormattedDateParts: function() {
                    return _pluginlocale.FormattedDateParts;
                },
                FormattedDisplayName: function() {
                    return _pluginlocale.FormattedDisplayName;
                },
                FormattedHTMLMessage: function() {
                    return _pluginlocale.FormattedHTMLMessage;
                },
                FormattedList: function() {
                    return _pluginlocale.FormattedList;
                },
                FormattedMessage: function() {
                    return _pluginlocale.FormattedMessage;
                },
                FormattedNumber: function() {
                    return _pluginlocale.FormattedNumber;
                },
                FormattedNumberParts: function() {
                    return _pluginlocale.FormattedNumberParts;
                },
                FormattedPlural: function() {
                    return _pluginlocale.FormattedPlural;
                },
                FormattedRelativeTime: function() {
                    return _pluginlocale.FormattedRelativeTime;
                },
                FormattedTime: function() {
                    return _pluginlocale.FormattedTime;
                },
                FormattedTimeParts: function() {
                    return _pluginlocale.FormattedTimeParts;
                },
                Helmet: function() {
                    return _rendererreact.Helmet;
                },
                HelmetProvider: function() {
                    return _rendererreact.HelmetProvider;
                },
                IntlProvider: function() {
                    return _pluginlocale.IntlProvider;
                },
                Link: function() {
                    return _rendererreact.Link;
                },
                NavLink: function() {
                    return _rendererreact.NavLink;
                },
                Navigate: function() {
                    return _rendererreact.Navigate;
                },
                Outlet: function() {
                    return _rendererreact.Outlet;
                },
                PluginManager: function() {
                    return _plugin.PluginManager;
                },
                Provider: function() {
                    return _pluginmodel.Provider;
                },
                RawIntlProvider: function() {
                    return _pluginlocale.RawIntlProvider;
                },
                SelectLang: function() {
                    return _pluginlocale.SelectLang;
                },
                TestBrowser: function() {
                    return _testBrowser.TestBrowser;
                },
                UseRequestProvider: function() {
                    return _pluginrequest.UseRequestProvider;
                },
                __getRoot: function() {
                    return _rendererreact.__getRoot;
                },
                __useFetcher: function() {
                    return _rendererreact.__useFetcher;
                },
                addLocale: function() {
                    return _pluginlocale.addLocale;
                },
                createBrowserHistory: function() {
                    return _rendererreact.createBrowserHistory;
                },
                createHashHistory: function() {
                    return _rendererreact.createHashHistory;
                },
                createHistory: function() {
                    return _history.createHistory;
                },
                createMemoryHistory: function() {
                    return _rendererreact.createMemoryHistory;
                },
                createSearchParams: function() {
                    return _rendererreact.createSearchParams;
                },
                defineApp: function() {
                    return _defineApp.defineApp;
                },
                formatMessage: function() {
                    return _pluginlocale.formatMessage;
                },
                generatePath: function() {
                    return _rendererreact.generatePath;
                },
                getAllLocales: function() {
                    return _pluginlocale.getAllLocales;
                },
                getIntl: function() {
                    return _pluginlocale.getIntl;
                },
                getLocale: function() {
                    return _pluginlocale.getLocale;
                },
                getRequestInstance: function() {
                    return _pluginrequest.getRequestInstance;
                },
                history: function() {
                    return _history.history;
                },
                injectIntl: function() {
                    return _pluginlocale.injectIntl;
                },
                matchPath: function() {
                    return _rendererreact.matchPath;
                },
                matchRoutes: function() {
                    return _rendererreact.matchRoutes;
                },
                renderClient: function() {
                    return _rendererreact.renderClient;
                },
                request: function() {
                    return _pluginrequest.request;
                },
                resolvePath: function() {
                    return _rendererreact.resolvePath;
                },
                setLocale: function() {
                    return _pluginlocale.setLocale;
                },
                terminal: function() {
                    return _terminal.terminal;
                },
                useAccess: function() {
                    return _pluginaccess.useAccess;
                },
                useAccessMarkedRoutes: function() {
                    return _pluginaccess.useAccessMarkedRoutes;
                },
                useAppData: function() {
                    return _rendererreact.useAppData;
                },
                useClientLoaderData: function() {
                    return _rendererreact.useClientLoaderData;
                },
                useIntl: function() {
                    return _pluginlocale.useIntl;
                },
                useLoaderData: function() {
                    return _rendererreact.useLoaderData;
                },
                useLocation: function() {
                    return _rendererreact.useLocation;
                },
                useMatch: function() {
                    return _rendererreact.useMatch;
                },
                useModel: function() {
                    return _pluginmodel.useModel;
                },
                useNavigate: function() {
                    return _rendererreact.useNavigate;
                },
                useOutlet: function() {
                    return _rendererreact.useOutlet;
                },
                useOutletContext: function() {
                    return _rendererreact.useOutletContext;
                },
                useParams: function() {
                    return _rendererreact.useParams;
                },
                useRequest: function() {
                    return _pluginrequest.useRequest;
                },
                useResolvedPath: function() {
                    return _rendererreact.useResolvedPath;
                },
                useRouteData: function() {
                    return _rendererreact.useRouteData;
                },
                useRouteProps: function() {
                    return _rendererreact.useRouteProps;
                },
                useRoutes: function() {
                    return _rendererreact.useRoutes;
                },
                useSearchParams: function() {
                    return _rendererreact.useSearchParams;
                },
                useSelectedRoutes: function() {
                    return _rendererreact.useSelectedRoutes;
                },
                useServerInsertedHTML: function() {
                    return useServerInsertedHTML;
                },
                useServerLoaderData: function() {
                    return _rendererreact.useServerLoaderData;
                },
                withRouter: function() {
                    return _rendererreact.withRouter;
                }
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var _defineApp = __mako_require__("src/.umi/core/defineApp.ts");
            var _pluginaccess = __mako_require__("src/.umi/plugin-access/index.tsx");
            var _pluginlocale = __mako_require__("src/.umi/plugin-locale/index.ts");
            var _pluginmodel = __mako_require__("src/.umi/plugin-model/index.tsx");
            var _pluginrequest = __mako_require__("src/.umi/plugin-request/index.ts");
            _export_star._(__mako_require__("src/.umi/plugin-access/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-antd/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-layout/types.d.ts"), exports);
            _export_star._(__mako_require__("src/.umi/plugin-request/types.d.ts"), exports);
            var _rendererreact = __mako_require__("node_modules/@umijs/renderer-react/dist/index.js");
            var _plugin = __mako_require__("node_modules/umi/client/client/plugin.js");
            var _history = __mako_require__("src/.umi/core/history.ts");
            var _terminal = __mako_require__("src/.umi/core/terminal.ts");
            var _testBrowser = __mako_require__("src/.umi/testBrowser.tsx");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const useServerInsertedHTML = ()=>{};
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
        "node_modules/react/index.js": function(module, exports, __mako_require__) {
            'use strict';
            module.exports = __mako_require__("node_modules/react/cjs/react.development.js");
        },
        "node_modules/@ant-design/icons/es/index.js": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            function _export(target, all) {
                for(var name in all)Object.defineProperty(target, name, {
                    enumerable: true,
                    get: all[name]
                });
            }
            __mako_require__.e(exports, {
                IconProvider: function() {
                    return IconProvider;
                },
                createFromIconfontCN: function() {
                    return _IconFont.default;
                },
                default: function() {
                    return _Icon.default;
                }
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _Context = _interop_require_default._(__mako_require__("node_modules/@ant-design/icons/es/components/Context.js"));
            _export_star._(__mako_require__("node_modules/@ant-design/icons/es/icons/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js"), exports);
            var _IconFont = _interop_require_default._(__mako_require__("node_modules/@ant-design/icons/es/components/IconFont.js"));
            var _Icon = _interop_require_default._(__mako_require__("node_modules/@ant-design/icons/es/components/Icon.js"));
            var IconProvider = _Context.default.Provider;
        },
        "src/services/ant-design-pro/api.ts": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            function _export(target, all) {
                for(var name in all)Object.defineProperty(target, name, {
                    enumerable: true,
                    get: all[name]
                });
            }
            __mako_require__.e(exports, {
                addRule: function() {
                    return addRule;
                },
                currentUser: function() {
                    return currentUser;
                },
                getNotices: function() {
                    return getNotices;
                },
                login: function() {
                    return login;
                },
                outLogin: function() {
                    return outLogin;
                },
                removeRule: function() {
                    return removeRule;
                },
                rule: function() {
                    return rule;
                },
                updateRule: function() {
                    return updateRule;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var _max = __mako_require__("src/.umi/exports.ts");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            async function currentUser(options) {
                return (0, _max.request)('/api/currentUser', {
                    method: 'GET',
                    ...options || {}
                });
            }
            async function outLogin(options) {
                return (0, _max.request)('/api/login/outLogin', {
                    method: 'POST',
                    ...options || {}
                });
            }
            async function login(body, options) {
                return (0, _max.request)('/api/login/account', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: body,
                    ...options || {}
                });
            }
            async function getNotices(options) {
                return (0, _max.request)('/api/notices', {
                    method: 'GET',
                    ...options || {}
                });
            }
            async function rule(params, options) {
                return (0, _max.request)('/api/rule', {
                    method: 'GET',
                    params: {
                        ...params
                    },
                    ...options || {}
                });
            }
            async function updateRule(options) {
                return (0, _max.request)('/api/rule', {
                    method: 'POST',
                    data: {
                        method: 'update',
                        ...options || {}
                    }
                });
            }
            async function addRule(options) {
                return (0, _max.request)('/api/rule', {
                    method: 'POST',
                    data: {
                        method: 'post',
                        ...options || {}
                    }
                });
            }
            async function removeRule(options) {
                return (0, _max.request)('/api/rule', {
                    method: 'POST',
                    data: {
                        method: 'delete',
                        ...options || {}
                    }
                });
            }
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
        "src/services/ant-design-pro/login.ts": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "getFakeCaptcha", {
                enumerable: true,
                get: function() {
                    return getFakeCaptcha;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var _max = __mako_require__("src/.umi/exports.ts");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            async function getFakeCaptcha(params, options) {
                return (0, _max.request)('/api/login/captcha', {
                    method: 'GET',
                    params: {
                        ...params
                    },
                    ...options || {}
                });
            }
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
        "node_modules/@ant-design/pro-components/es/index.js": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            _export_star._(__mako_require__("node_modules/@ant-design/pro-card/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-descriptions/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-field/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-form/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-list/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-provider/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-skeleton/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-table/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-utils/es/index.js"), exports);
            _export_star._(__mako_require__("node_modules/@ant-design/pro-components/es/version.js"), exports);
        },
        "config/defaultSettings.ts": function(module, exports, __mako_require__) {
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
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const Settings = {
                navTheme: 'light',
                colorPrimary: '#1890ff',
                layout: 'mix',
                contentWidth: 'Fluid',
                fixedHeader: false,
                fixSiderbar: true,
                colorWeak: false,
                title: '淘小宝',
                pwa: true,
                logo: '/logo.svg',
                iconfontUrl: '',
                token: {
                }
            };
            var _default = Settings;
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
        "node_modules/antd-style/es/index.js": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            var _export_star = __mako_require__("@swc/helpers/_/_export_star");
            _export_star._(__mako_require__("node_modules/antd-style/es/factories/createStyles/types.js"), exports);
            _export_star._(__mako_require__("node_modules/antd-style/es/factories/createThemeProvider/type.js"), exports);
            _export_star._(__mako_require__("node_modules/antd-style/es/functions/index.js"), exports);
            _export_star._(__mako_require__("node_modules/antd-style/es/hooks/index.js"), exports);
            _export_star._(__mako_require__("node_modules/antd-style/es/types/index.js"), exports);
        },
        "node_modules/react-dom/index.js": function(module, exports, __mako_require__) {
            'use strict';
            function checkDCE() {
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') return;
                throw new Error('^_^');
            }
            module.exports = __mako_require__("node_modules/react-dom/cjs/react-dom.development.js");
        }
    }
}, function(runtime) {
    runtime._h = '8397313247989064004';
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

//# sourceMappingURL=p__User__Login__index-async.16823947039610856777.hot-update.js.map
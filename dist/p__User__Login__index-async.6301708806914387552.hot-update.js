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
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _api = __mako_require__("src/services/ant-design-pro/api.ts");
            var _login = __mako_require__("src/services/ant-design-pro/login.ts");
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
            var _max = __mako_require__("src/.umi/exports.ts");
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
            var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
            var _reactdom = __mako_require__("node_modules/react-dom/index.js");
            var _defaultSettings = /*#__PURE__*/ _interop_require_default._(__mako_require__("config/defaultSettings.ts"));
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
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.AlipayCircleOutlined, {
                            className: styles.action
                        }, "AlipayCircleOutlined", false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 66,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.TaobaoCircleOutlined, {
                            className: styles.action
                        }, "TaobaoCircleOutlined", false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 67,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WeiboCircleOutlined, {
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
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.lang,
                    "data-lang": true,
                    children: _max.SelectLang && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.SelectLang, {}, void 0, false, {
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
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
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
                const [showModal, setShowModal] = (0, _react.useState)(false);
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
                        // 登录
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
                        // 如果失败去设置用户错误信息
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
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.container,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Helmet, {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("title", {
                                children: [
                                    intl.formatMessage({
                                        id: 'menu.login',
                                        defaultMessage: '登录页'
                                    }),
                                    _defaultSettings.default.title && ` - ${_defaultSettings.default.title}`
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/User/Login/index.tsx",
                                lineNumber: 150,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 149,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Lang, {}, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 158,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                flex: '1',
                                padding: '32px 0'
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.LoginForm, {
                                contentStyle: {
                                    minWidth: 280,
                                    maxWidth: '75vw'
                                },
                                logo: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    alt: "logo",
                                    src: "/logo.svg"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, void 0),
                                title: "淘小宝",
                                subTitle: "淘小宝，品质生活从这里开始！",
                                initialValues: {
                                    autoLogin: true
                                },
                                // actions={[
                                //   <FormattedMessage
                                //     key="loginWith"
                                //     id="pages.login.loginWith"
                                //     defaultMessage="其他登录方式"
                                //   />,
                                //   <ActionIcons key="icons" />,
                                // ]}
                                onFinish: async (values)=>{
                                    await handleSubmit(values);
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tabs, {
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
                                        lineNumber: 188,
                                        columnNumber: 11
                                    }, this),
                                    status === 'error' && loginType === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                                        content: intl.formatMessage({
                                            id: 'pages.login.accountLogin.errorMessage',
                                            defaultMessage: '账户或密码错误(admin/ant.design)'
                                        })
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    type === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                name: "username",
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 224,
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
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.username.required",
                                                            defaultMessage: "请输入用户名!"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText.Password, {
                                                name: "password",
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 246,
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
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.password.required",
                                                            defaultMessage: "请输入密码！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    status === 'error' && loginType === 'mobile' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                                        content: "验证码错误"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 267,
                                        columnNumber: 60
                                    }, this),
                                    type === 'mobile' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.MobileOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 273,
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
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.phoneNumber.required",
                                                            defaultMessage: "请输入手机号！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    },
                                                    {
                                                        pattern: /^1\d{10}$/,
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.phoneNumber.invalid",
                                                            defaultMessage: "手机号格式错误！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormCaptcha, {
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 304,
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
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                            id: "pages.login.captcha.required",
                                                            defaultMessage: "请输入验证码！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 330,
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
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        style: {
                                            marginBottom: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormCheckbox, {
                                                noStyle: true,
                                                name: "autoLogin",
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                                    id: "pages.login.rememberMe",
                                                    defaultMessage: "自动登录"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Login/index.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 354,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                style: {
                                                    float: 'right'
                                                },
                                                children: '没有账号去注册->'
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 357,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 349,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormCheckbox, {
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
                                                lineNumber: 368,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 366,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/User/Login/index.tsx",
                                lineNumber: 165,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 159,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
                            title: "用户隐私保护权限",
                            visible: showModal,
                            onCancel: ()=>setShowModal(false),
                            footer: null,
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                                        children: "1. 引言"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 381,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: "欢迎使用淘小宝服务！我们非常重视您的隐私保护。本《用户隐私保护权限》（以下简称“本政策”）旨在帮助您了解我们如何收集、使用、存储和共享您的个人信息，以及您所享有的权利。"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 382,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                                        children: "2. 信息收集"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 384,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: "为了向您提供更好的服务，淘小宝可能会收集以下类型的个人信息："
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 385,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "基本注册信息"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：包括您的姓名、手机号码、电子邮箱地址等。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 387,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "账户信息"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：包括您的用户名、密码、头像等。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 388,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "交易信息"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：包括您的订单信息、支付信息、物流信息等。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 389,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "设备信息"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：包括您的设备型号、操作系统版本、IP地址、访问时间等。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 390,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "位置信息"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：如果您授权，我们会收集您的地理位置信息以提供更精准的服务。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 391,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 386,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                                        children: "3. 信息使用"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 394,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: "我们收集的个人信息将用于以下目的："
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 395,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "提供和改进服务"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：为您提供淘小宝的各项服务，包括但不限于商品购买、订单管理、客户服务等。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 397,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "安全保障"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：保障您的账户安全，防止欺诈行为。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 398,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "个性化推荐"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：根据您的浏览记录和购买历史，为您推荐更符合您兴趣的商品。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 399,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "营销推广"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：向您发送促销信息、活动通知等。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 400,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 396,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                                        children: "4. 信息共享"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 403,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: "我们不会将您的个人信息出售给第三方。但在以下情况下，我们可能会与第三方共享您的信息："
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 404,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "服务提供商"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：我们可能会与第三方服务提供商合作，为您提供某些服务，如支付处理、物流配送等。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 406,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "法律要求"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：在法律要求的情况下，我们可能会披露您的个人信息。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 407,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "合并、收购或资产转让"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：在涉及合并、收购或资产转让时，我们可能会将您的个人信息转移给新的所有者。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 408,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 405,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                                        children: "5. 信息安全"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 411,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: "我们采取合理的技术和组织措施，保护您的个人信息不被未经授权的访问、使用或泄露。这些措施包括但不限于："
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 412,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "数据加密"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：对敏感信息进行加密处理。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 414,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "访问控制"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：限制内部员工对个人信息的访问。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 415,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "安全审计"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：定期进行安全审计，发现并修复潜在的安全漏洞。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 416,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 413,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                                        children: "6. 您的权利"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 419,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: "您有权访问、更正、删除您的个人信息，以及撤回您的授权。具体操作方法如下："
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 420,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "访问和更正"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：您可以在淘小宝的个人中心查看和更正您的个人信息。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 422,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "删除"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：如果您希望删除您的个人信息，可以通过客服联系我们。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 423,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                        children: "撤回授权"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 17
                                                    }, this),
                                                    "：您可以在设置中撤回对我们收集和使用您个人信息的授权。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 424,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 421,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                                        children: "7. 未成年人保护"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 427,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: "我们非常重视未成年人的隐私保护。如果您未满18岁，请在监护人的陪同下使用我们的服务。"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 428,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                                        children: "8. 隐私政策的更新"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 430,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                        children: "我们可能会不定期更新本隐私政策。更新后的隐私政策将在淘小宝网站上公布，并自公布之日起生效。请您定期查阅最新的隐私政策。"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 431,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/User/Login/index.tsx",
                                lineNumber: 380,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 374,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/User/Login/index.tsx",
                    lineNumber: 148,
                    columnNumber: 5
                }, this);
            };
            _s2(Login, "RMUL6HPRamBugKLwLxF5HC7yeqA=", false, function() {
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
        }
    }
}, function(runtime) {
    runtime._h = '4547720671602171797';
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

//# sourceMappingURL=p__User__Login__index-async.6301708806914387552.hot-update.js.map
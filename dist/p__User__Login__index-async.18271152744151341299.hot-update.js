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
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            var _s = $RefreshSig$();
            const Login = ()=>{
                _s();
                const [userLoginState, setUserLoginState] = useState({});
                const [type, setType] = useState('account');
                const { initialState, setInitialState } = useModel('@@initialState');
                const { styles } = useStyles();
                const intl = useIntl();
                const [showModal, setShowModal] = useState(false);
                const fetchUserInfo = async ()=>{
                    var _initialState_fetchUserInfo;
                    const userInfo = await (initialState === null || initialState === void 0 ? void 0 : (_initialState_fetchUserInfo = initialState.fetchUserInfo) === null || _initialState_fetchUserInfo === void 0 ? void 0 : _initialState_fetchUserInfo.call(initialState));
                    if (userInfo) flushSync(()=>{
                        setInitialState((s)=>({
                                ...s,
                                currentUser: userInfo
                            }));
                    });
                };
                const handleSubmit = async (values)=>{
                    try {
                        // 登录
                        const msg = await login({
                            ...values,
                            type
                        });
                        if (msg.status === 'ok') {
                            const defaultLoginSuccessMessage = intl.formatMessage({
                                id: 'pages.login.success',
                                defaultMessage: '登录成功！'
                            });
                            message.success(defaultLoginSuccessMessage);
                            await fetchUserInfo();
                            const urlParams = new URL(window.location.href).searchParams;
                            history.push(urlParams.get('redirect') || '/');
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
                        message.error(defaultLoginFailureMessage);
                    }
                };
                const { status, type: loginType } = userLoginState;
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.container,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Helmet, {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("title", {
                                children: [
                                    intl.formatMessage({
                                        id: 'menu.login',
                                        defaultMessage: '登录页'
                                    }),
                                    Settings.title && ` - ${Settings.title}`
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/User/Login/index.tsx",
                                lineNumber: 55,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 54,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Lang, {}, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 63,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                flex: '1',
                                padding: '32px 0'
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginForm, {
                                contentStyle: {
                                    minWidth: 280,
                                    maxWidth: '75vw'
                                },
                                logo: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    alt: "logo",
                                    src: "/logo.svg"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 75,
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
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Tabs, {
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
                                        lineNumber: 85,
                                        columnNumber: 11
                                    }, this),
                                    status === 'error' && loginType === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                                        content: intl.formatMessage({
                                            id: 'pages.login.accountLogin.errorMessage',
                                            defaultMessage: '账户或密码错误(admin/ant.design)'
                                        })
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    type === 'account' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ProFormText, {
                                                name: "username",
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(UserOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 121,
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
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormattedMessage, {
                                                            id: "pages.login.username.required",
                                                            defaultMessage: "请输入用户名!"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ProFormText.Password, {
                                                name: "password",
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LockOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 143,
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
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormattedMessage, {
                                                            id: "pages.login.password.required",
                                                            defaultMessage: "请输入密码！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    status === 'error' && loginType === 'mobile' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                                        content: "验证码错误"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 164,
                                        columnNumber: 60
                                    }, this),
                                    type === 'mobile' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ProFormText, {
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(MobileOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 170,
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
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormattedMessage, {
                                                            id: "pages.login.phoneNumber.required",
                                                            defaultMessage: "请输入手机号！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    },
                                                    {
                                                        pattern: /^1\d{10}$/,
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormattedMessage, {
                                                            id: "pages.login.phoneNumber.invalid",
                                                            defaultMessage: "手机号格式错误！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ProFormCaptcha, {
                                                fieldProps: {
                                                    size: 'large',
                                                    prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LockOutlined, {}, void 0, false, {
                                                        fileName: "src/pages/User/Login/index.tsx",
                                                        lineNumber: 201,
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
                                                        message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormattedMessage, {
                                                            id: "pages.login.captcha.required",
                                                            defaultMessage: "请输入验证码！"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Login/index.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }
                                                ],
                                                onGetCaptcha: async (phone)=>{
                                                    const result = await getFakeCaptcha({
                                                        phone
                                                    });
                                                    if (!result) return;
                                                    message.success('获取验证码成功！验证码为：1234');
                                                }
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        style: {
                                            marginBottom: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ProFormCheckbox, {
                                                noStyle: true,
                                                name: "autoLogin",
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormattedMessage, {
                                                    id: "pages.login.rememberMe",
                                                    defaultMessage: "自动登录"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Login/index.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 251,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                style: {
                                                    float: 'right'
                                                },
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(FormattedMessage, {
                                                    id: "pages.login.forgotPassword",
                                                    defaultMessage: "忘记密码"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Login/index.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Login/index.tsx",
                                                lineNumber: 254,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 246,
                                        columnNumber: 11
                                    }, this),
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
                                                lineNumber: 264,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/User/Login/index.tsx",
                                        lineNumber: 262,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/User/Login/index.tsx",
                                lineNumber: 70,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 64,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
                            title: "用户隐私保护权限",
                            visible: showModal,
                            onCancel: ()=>setShowModal(false),
                            footer: null,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: "这里是用户隐私保护权限的内容。"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 276,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: "您可以在这里添加详细的条款和条件。"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Login/index.tsx",
                                    lineNumber: 277,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/User/Login/index.tsx",
                            lineNumber: 270,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/User/Login/index.tsx",
                    lineNumber: 53,
                    columnNumber: 5
                }, this);
            };
            _s(Login, "FUV/jWDMlYPbByQyxHlaOtzOiL8=", true);
            _c = Login;
            var _default = Login;
            var _c;
            $RefreshReg$(_c, "Login");
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
    runtime._h = '16823947039610856777';
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

//# sourceMappingURL=p__User__Login__index-async.18271152744151341299.hot-update.js.map
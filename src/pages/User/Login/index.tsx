import { Footer } from '@/components';
import { login } from '@/services/ant-design-pro/api';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, Helmet, history, SelectLang, useIntl, useModel } from '@umijs/max';
import { Alert, message, Modal, Tabs } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});

const ActionIcons = () => {
  const { styles } = useStyles();

  return (
    <>
      <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.action} />
      <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.action} />
      <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.action} />
    </>
  );
};

const Lang = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.lang} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const [showModal, setShowModal] = useState(false);
  const { styles } = useStyles();
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const msg = await login({ ...values, type });
      if (msg.status === 'ok') {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
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
        defaultMessage: '登录失败，请重试！',
      });
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.login',
            defaultMessage: '登录页',
          })}
          {Settings.title && ` - ${Settings.title}`}
        </title>
      </Helmet>
      <Lang />
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="淘小宝"
          subTitle={"淘小宝，品质生活从这里开始！"}
          initialValues={{
            autoLogin: true,
          }}
          // actions={[
          //   <FormattedMessage
          //     key="loginWith"
          //     id="pages.login.loginWith"
          //     defaultMessage="其他登录方式"
          //   />,
          //   <ActionIcons key="icons" />,
          // ]}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: intl.formatMessage({
                  id: 'pages.login.accountLogin.tab',
                  defaultMessage: '账户密码登录',
                }),
              },
              {
                key: 'mobile',
                label: intl.formatMessage({
                  id: 'pages.login.phoneLogin.tab',
                  defaultMessage: '手机号登录',
                }),
              },
            ]}
          />

          {status === 'error' && loginType === 'account' && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误(admin/ant.design)',
              })}
            />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                  defaultMessage: '用户名: admin or user',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.password.placeholder',
                  defaultMessage: '密码: ant.design',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}

          {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}
          {type === 'mobile' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined />,
                }}
                name="mobile"
                placeholder={intl.formatMessage({
                  id: 'pages.login.phoneNumber.placeholder',
                  defaultMessage: '手机号',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.phoneNumber.required"
                        defaultMessage="请输入手机号！"
                      />
                    ),
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: (
                      <FormattedMessage
                        id="pages.login.phoneNumber.invalid"
                        defaultMessage="手机号格式错误！"
                      />
                    ),
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.captcha.placeholder',
                  defaultMessage: '请输入验证码',
                })}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${intl.formatMessage({
                      id: 'pages.getCaptchaSecondText',
                      defaultMessage: '获取验证码',
                    })}`;
                  }
                  return intl.formatMessage({
                    id: 'pages.login.phoneLogin.getVerificationCode',
                    defaultMessage: '获取验证码',
                  });
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.captcha.required"
                        defaultMessage="请输入验证码！"
                      />
                    ),
                  },
                ]}
                onGetCaptcha={async (phone) => {
                  const result = await getFakeCaptcha({
                    phone,
                  });
                  if (!result) {
                    return;
                  }
                  message.success('获取验证码成功！验证码为：1234');
                }}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 4,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              {'没有账号去注册->'}
              {/* <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" /> */}
            </a>
          </div>
          <ProFormCheckbox name="agreeTerms">
            我已阅读并同意
            <a onClick={() => setShowModal(true)} style={{ color: '#1890ff', cursor: 'pointer' }}>
              《用户隐私保护权限》
            </a>
          </ProFormCheckbox>
        </LoginForm>
      </div>
      <Modal
        width={'80%'}
        title="用户隐私保护权限"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <div>
          <h2>1. 引言</h2>
          <p>欢迎使用淘小宝服务！我们非常重视您的隐私保护。本《用户隐私保护权限》（以下简称“本政策”）旨在帮助您了解我们如何收集、使用、存储和共享您的个人信息，以及您所享有的权利。</p>

          <h2>2. 信息收集</h2>
          <p>为了向您提供更好的服务，淘小宝可能会收集以下类型的个人信息：</p>
          <ul>
            <li><strong>基本注册信息</strong>：包括您的姓名、手机号码、电子邮箱地址等。</li>
            <li><strong>账户信息</strong>：包括您的用户名、密码、头像等。</li>
            <li><strong>交易信息</strong>：包括您的订单信息、支付信息、物流信息等。</li>
            <li><strong>设备信息</strong>：包括您的设备型号、操作系统版本、IP地址、访问时间等。</li>
            <li><strong>位置信息</strong>：如果您授权，我们会收集您的地理位置信息以提供更精准的服务。</li>
          </ul>

          <h2>3. 信息使用</h2>
          <p>我们收集的个人信息将用于以下目的：</p>
          <ul>
            <li><strong>提供和改进服务</strong>：为您提供淘小宝的各项服务，包括但不限于商品购买、订单管理、客户服务等。</li>
            <li><strong>安全保障</strong>：保障您的账户安全，防止欺诈行为。</li>
            <li><strong>个性化推荐</strong>：根据您的浏览记录和购买历史，为您推荐更符合您兴趣的商品。</li>
            <li><strong>营销推广</strong>：向您发送促销信息、活动通知等。</li>
          </ul>

          <h2>4. 信息共享</h2>
          <p>我们不会将您的个人信息出售给第三方。但在以下情况下，我们可能会与第三方共享您的信息：</p>
          <ul>
            <li><strong>服务提供商</strong>：我们可能会与第三方服务提供商合作，为您提供某些服务，如支付处理、物流配送等。</li>
            <li><strong>法律要求</strong>：在法律要求的情况下，我们可能会披露您的个人信息。</li>
            <li><strong>合并、收购或资产转让</strong>：在涉及合并、收购或资产转让时，我们可能会将您的个人信息转移给新的所有者。</li>
          </ul>

          <h2>5. 信息安全</h2>
          <p>我们采取合理的技术和组织措施，保护您的个人信息不被未经授权的访问、使用或泄露。这些措施包括但不限于：</p>
          <ul>
            <li><strong>数据加密</strong>：对敏感信息进行加密处理。</li>
            <li><strong>访问控制</strong>：限制内部员工对个人信息的访问。</li>
            <li><strong>安全审计</strong>：定期进行安全审计，发现并修复潜在的安全漏洞。</li>
          </ul>

          <h2>6. 您的权利</h2>
          <p>您有权访问、更正、删除您的个人信息，以及撤回您的授权。具体操作方法如下：</p>
          <ul>
            <li><strong>访问和更正</strong>：您可以在淘小宝的个人中心查看和更正您的个人信息。</li>
            <li><strong>删除</strong>：如果您希望删除您的个人信息，可以通过客服联系我们。</li>
            <li><strong>撤回授权</strong>：您可以在设置中撤回对我们收集和使用您个人信息的授权。</li>
          </ul>

          <h2>7. 未成年人保护</h2>
          <p>我们非常重视未成年人的隐私保护。如果您未满18岁，请在监护人的陪同下使用我们的服务。</p>

          <h2>8. 隐私政策的更新</h2>
          <p>我们可能会不定期更新本隐私政策。更新后的隐私政策将在淘小宝网站上公布，并自公布之日起生效。请您定期查阅最新的隐私政策。</p>
        </div>
      </Modal>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;

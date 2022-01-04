<template>
	<view class="x-login">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="login-in">
			<!-- logo -->
			<view class="login-icon">
			</view>
			<!-- login-form -->
			<view class="login-form">
				<u--form :model="form" :rules="rules" ref="form" errorType="none">
					<u-form-item prop="phone" ref="phone">
						<u--input v-model="form.phone" prefixIcon="account-fill"
							prefixIconStyle="font-size:40rpx;color: #bfbdbd" shape="circle" border="surround"
							fontSize="13" placeholder="请输入手机号码"></u--input>
					</u-form-item>
					<u-form-item prop="password" ref="password">
						<u--input v-model="form.password" prefixIcon="lock-fill"
							prefixIconStyle="font-size:40rpx;color: #bfbdbd" shape="circle" border="surround"
							fontSize="13" :password="true" placeholder="请输入密码"></u--input>
					</u-form-item>
					<u-form-item prop="code" ref="code">
						<u--input v-model="form.code" shape="circle" prefixIcon="../../static/dun2.png"
							prefixIconStyle="font-size:40rpx;color: #bfbdbd" border="surround" fontSize="13"
							placeholder="请输入验证码"></u--input>
						<!-- 验证码图片 -->
						<Captcha @captcha="captcha" />
					</u-form-item>
				</u--form>
			</view>
			<view class="btn">
				<u-button type="primary" shape="circle" color="#4387ea" text="登录" @click="submit"></u-button>
			</view>
			<view class="cantLogin df df-betw">
				<text @click="$Fn.toPage('../register/register')">没有账号？注册账号</text>
				<text @click="$Fn.toPage('../resetPsw/resetPsw',{name:'getBack'})">忘记密码?</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Captcha from '../../components/Captcha/Captcha.vue'
	export default {
		data() {
			return {
				form: {
					phone: '',
					password: '',
					code: ''
				},
				captchaVal: '',
				rules: { // 字段名称
					phone: [{
							required: true,
							message: '请输入手机号码',
							trigger: ['change', 'blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// uni.$u.test.mobile()就是返回true或者false的
								return uni.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: ['blur', 'change']
					}],
					code: [{
						validator: (rule, value, callback) => {
							return value === this.captchaVal
						},
						message: '验证码不正确',
						// 触发器可以同时用blur和change
						trigger: ['change', 'blur'],
					}, {
						type: 'string',
						required: true,
						len: 4,
						message: '请填写4位验证码',
						trigger: ['blur']
					}]
				}
			};
		},
		components: {
			Captcha
		},
		created() {
			uni.getStorage({
			    key: 'loginType',
			    success: function (res) {
			       uni.switchTab({
			       	url: '/pages/index/index'
			       });
			    }
			});
		},
		methods: {
			captcha(emit) {
				console.log(emit);
				this.captchaVal = emit;
			},
			submit() {
				this.$refs.form.validate().then(res => {
					uni.setStorage({
					    key: 'loginType',
					    data: 1,
					    success: function () {
					        uni.switchTab({
					        	url: '/pages/index/index'
					        });
					    }
					});
				}).catch(errors => {
					console.log(errors);
					uni.$u.toast(errors[0].message)
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.x-login {
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.login-in {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 80%;

			.login-icon {
				border-radius: 50rpx;
				width: 200rpx;
				height: 200rpx;
				background: url(../../static/logo.png) center/100% 100% no-repeat;
				margin: 0 auto 90rpx;
			}

			.login-form {
				/deep/.u-form-item__body {
					padding: 10rpx 0;
				}

				.u-input {
					background-color: #fff !important;
				}

				/deep/.u-input--radius {
					border: 1px solid #d9d9d9;

					.u-input__content__prefix-icon {
						margin-right: 30rpx;
					}
				}

				.Captcha {
					margin-left: 50rpx;
				}
			}

			.btn {
				margin: 40rpx 0 20rpx;
			}

			.cantLogin {
				color: #505050;
				margin: 0 30rpx;
			}
		}
	}
</style>

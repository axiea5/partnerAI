<template>
	<view class="x-register">
		<!-- logo -->
		<view class="register-icon">
		</view>
		<!-- form -->
		<u--form class="register-form" :model="form" :rules="rules" ref="form" errorType="none">
			<u-form-item prop="phone" ref="phone">
				<u--input v-model="form.phone" prefixIcon="account-fill"
					prefixIconStyle="font-size:40rpx;color: #bfbdbd" shape="circle" border="surround" fontSize="13"
					placeholder="请输入手机号码"></u--input>
			</u-form-item>
			<u-form-item>
				<u-icon name="../../static/pulldown.png" :label="form.mibao1" labelPos="left" labelColor="#000"
					labelSize="14" space="6" index="1" @click="selectQuest"></u-icon>
			</u-form-item>
			<u-form-item prop="quest1" ref="quest1">
				<u--input v-model="form.quest1" prefixIcon="../../static/dun2.png"
					prefixIconStyle="font-size:40rpx;color: #bfbdbd" shape="circle" border="surround" fontSize="13"
					placeholder="请输入密保问题1"></u--input>
			</u-form-item>
			<u-form-item>
				<u-icon name="../../static/pulldown.png" :label="form.mibao2" labelPos="left" labelColor="#000"
					labelSize="14" space="6" index="2" @click="selectQuest"></u-icon>
			</u-form-item>
			<u-form-item prop="quest2" ref="quest2">
				<u--input v-model="form.quest2" prefixIcon="../../static/dun2.png"
					prefixIconStyle="font-size:40rpx;color: #bfbdbd" shape="circle" border="surround" fontSize="13"
					placeholder="请输入密保问题2"></u--input>
			</u-form-item>
			<u-form-item prop="name" ref="name">
				<u--input v-model="form.name" prefixIcon="account-fill" prefixIconStyle="font-size:40rpx;color: #bfbdbd"
					shape="circle" border="surround" fontSize="13" placeholder="请输入真实姓名"></u--input>
			</u-form-item>
			<u-form-item prop="password" ref="password">
				<u--input v-model="form.password" prefixIcon="lock" prefixIconStyle="font-size:40rpx;color: #bfbdbd"
					shape="circle" border="surround" fontSize="13" placeholder="请输入密码"></u--input>
			</u-form-item>
			<u-form-item prop="password2" ref="password2">
				<u--input v-model="password2" prefixIcon="lock" prefixIconStyle="font-size:40rpx;color: #bfbdbd"
					shape="circle" border="surround" fontSize="13" placeholder="请再次输入密码"></u--input>
			</u-form-item>
			<u-form-item prop="pay" ref="pay">
				<u--input v-model="form.pay" prefixIcon="lock" prefixIconStyle="font-size:40rpx;color: #bfbdbd"
					shape="circle" border="surround" fontSize="13" placeholder="请设置支付密码"></u--input>
			</u-form-item>
			<u-form-item prop="invite" ref="invite">
				<!-- #ifndef APP-NVUE -->
				<u-input v-model="form.invite" prefixIcon="../../static/yaoqing.png"
					prefixIconStyle="font-size:40rpx;color: #bfbdbd" shape="circle" border="surround" fontSize="13"
					placeholder="好友邀请码(必填)">
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					<u--input v-model="form.invite" prefixIcon="../../static/yaoqing.png"
						prefixIconStyle="font-size:40rpx;color: #bfbdbd" shape="circle" border="surround" fontSize="13"
						placeholder="好友邀请码(必填)">
						<!-- #endif -->
						<template slot="suffix">
							<text class="underline">好友邀请码</text>
						</template>
						<!-- #ifndef APP-NVUE -->
				</u-input>
				<!-- #endif -->
				<!-- #ifdef APP-NVUE -->
				</u--input>
				<!-- #endif -->
			</u-form-item>
			<u-form-item>
				<u-checkbox-group>
					<u-checkbox :checked="checkboxVal" shape="circle"></u-checkbox>
					我已阅读并同意<text class="blue">《用户协议》</text>
				</u-checkbox-group>
			</u-form-item>
		</u--form>
		<!-- button -->
		<view class="btn">
			<u-button class="mb10" text="确认注册" type="primary" shape="circle" color="#4387ea" @click="submit"></u-button>
			<u-button text="已注册,去登录" plain type="primary" shape="circle" color="#4387ea"
				@click="$Fn.toPage('../login/login')"></u-button>
		</view>
		<!-- 下载 -->
		<view class="downApp">
			下载PartnerAI APP
		</view>
		<!-- 密保问题弹窗 -->
		<u-action-sheet :actions="alertList" :closeOnClickOverlay="true" :closeOnClickAction="true" :cancelText="'取消'"
			@close="mibaoShow=false" class="x-action" :show="mibaoShow" :round="5" @select="alertClick">
		</u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					phone: '',
					mibao1: '请选择密保问题1',
					quest1: '',
					mibao2: '请选择密保问题2',
					quest2: '',
					name: '',
					password: '',
					pay: '',
					invite: ''
				},
				password2: '',
				checkboxVal: true,
				mibaoShow: false,
				alertList: [{
					name: '我母亲的姓名'
				}, {
					name: '我父亲的姓名'
				}, {
					name: '我父亲的职业'
				}, {
					name: '我母亲的职业'
				}, {
					name: '我就读的第一所学校的名称'
				}, {
					name: '我的出生地是'
				}, {
					name: '我初中班主任的名字是'
				}, {
					name: '我最爱的人的名字'
				}],
				selectIndex: 1,
				rules: {
					phone: [{
							required: true,
							message: '请输入手机号码！',
							trigger: ['change', 'blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// uni.$u.test.mobile()就是返回true或者false的
								return uni.$u.test.mobile(value);
							},
							message: '手机号格式不合法！',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					],
					quest1: {
						required: true,
						message: '密保问题1答案不能为空！',
						trigger: ['blur', 'change']
					},
					quest2: {
						required: true,
						message: '密保问题2答案不能为空！',
						trigger: ['blur', 'change']
					},
					name: {
						required: true,
						message: '姓名不能为空！',
						trigger: ['blur', 'change']
					},
					password: [{
						required: true,
						message: '请输入密码！',
						trigger: ['blur', 'change']
					}, {
						min: 6,
						message: '密码长度不得小于6个字符！',
						trigger: ['change']
					}],
					password2: [{
							required: true,
							message: '两次输入密码不同！',
							// blur和change事件触发检验
							trigger: ['blur', 'change'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								return value === this.form.password
							},
							message: '两次输入密码不同！'
						}
					],
					pay: [{
						required: true,
						message: '请设置支付密码！',
						trigger: ['blur', 'change']
					}, {
						min: 6,
						message: '支付密码长度不得小于6个字符！',
						trigger: ['change']
					}],
					invite: {
						required: true,
						message: '好友邀请码不能为空！',
						trigger: ['blur', 'change']
					}
				}
			};
		},
		methods: {
			selectQuest(index) {
				console.log(index);
				this.mibaoShow = true
				this.selectIndex = index
			},
			alertClick(item) {
				if (item.name === this.form.mibao1 || item.name === this.form.mibao2) {
					uni.$u.toast('密保问题不能一致')
				} else {
					switch (Number(this.selectIndex)) {
						case 1:
							this.form.mibao1 = item.name
							break;
						case 2:
							this.form.mibao2 = item.name
							break;
					}
				}
			},
			submit() {
				this.$refs.form.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast(errors[0].message)
					console.log(errors);
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.x-register {
		padding: 50rpx;

		.register-icon {
			border-radius: 50rpx;
			width: 200rpx;
			height: 200rpx;
			background: url(../../static/logo.png) center/100% 100% no-repeat;
			margin: 0 auto 40rpx;
		}

		.register-form {
			/deep/.u-form-item__body {
				padding: 10rpx 0;
			}

			/deep/.u-input--radius {
				border: 1px solid #d9d9d9;

				.u-input__content__prefix-icon {
					margin-right: 30rpx;
				}
			}

			.underline {
				font-size: 26rpx;
				color: #bbb;
				text-decoration: underline;
			}

			.blue {
				color: rgb(0, 64, 152);
			}
		}

		.btn {
			margin: 40rpx 0 60rpx;

			.mb10 {
				margin-bottom: 20rpx;
			}
		}

		.downApp {
			text-align: center;
			color: #4387ea;
			text-decoration: underline;
		}
	}
</style>

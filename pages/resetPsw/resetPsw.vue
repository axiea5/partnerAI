<template>
	<view class="x-resetPsw">
		<view class="x-form">
			<u--form labelPosition="left" labelWidth="75" errorType="'none'" :model="form" :rules="rules" ref="form">
				<u-form-item label="手机号" v-if="getBack" prop="phone" borderBottom ref="phone">
					<u--input v-model="form.phone" border="none" fontSize="14" placeholder="输入您的手机号"></u--input>
				</u-form-item>
				<u-form-item label="密保问题" @click="show=true" borderBottom ref="quest">
					<u--input disabled disabledColor="#ffffff" fontSize="14" v-model="form.quest" border="none">
					</u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="密保答案" prop="answer" borderBottom ref="answer">
					<u--input v-model="form.answer" border="none" fontSize="14" placeholder="输入密保答案"></u--input>
				</u-form-item>
				<u-form-item label="新密码" prop="password" borderBottom ref="password">
					<u--input v-model="form.password" password border="none" fontSize="14" placeholder="输入您的新密码">
					</u--input>
				</u-form-item>
				<u-form-item label="确认" prop="password2" borderBottom ref="password2">
					<u--input v-model="form.password2" password border="none" fontSize="14" placeholder="请确认您的密码">
					</u--input>
				</u-form-item>
			</u--form>
		</view>

		<view class="x-btn">
			<u-button text="确认" color="linear-gradient(to bottom, #3f57bf, #2696e5)" @click="submit">
			</u-button>
		</view>

		<!-- 密保问题-点击弹窗 -->
		<u-action-sheet :actions="alertList" @close="show=false" :closeOnClickOverlay="true" :closeOnClickAction="true"
			:cancelText="'取消'" class="x-action" :show="show" :round="5" @select="alertClick"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				alertList: [{
					name: '我就读的第一所小学名称'
				}, {
					name: '我的初中班主任姓名'
				}],
				show: false,
				form: {
					phone: '',
					quest: '',
					answer: '',
					password: '',
					password2: ''
				},
				rules: {
					phone: {
						required: true,
						message: '手机号不能为空！',
						trigger: ['change', 'blur'],
					},
					answer: {
						required: true,
						message: '密保答案不能为空哦~',
						trigger: ['change', 'blur'],
					},
					password: {
						required: true,
						message: '密码不能为空哦~',
						trigger: ['change', 'blur'],
					},
					password2: [{
							required: true,
							message: '两次输入密码不一致~',
							// blur和change事件触发检验
							trigger: ['blur', 'change'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								return value === this.form.password
							},
							message: '两次输入密码不一致~'
						}
					]
				},
				getBack: false
			};
		},
		onLoad: function(option) {
			this.title = option.name
			if (option.name === 'login') {
				uni.setNavigationBarTitle({
					title: '修改登录密码'
				});
			} else if (option.name === 'pay') {
				uni.setNavigationBarTitle({
					title: '修改支付密码'
				});
			} else if (option.name === 'getBack') {
				uni.setNavigationBarTitle({
					title: '找回登录密码'
				});
				this.getBack = true
			}
			this.form.quest = '我就读的第一所小学名称'
		},
		methods: {
			alertClick(item) {
				console.log(item);
				this.form.quest = item.name
			},
			submit() {
				this.$refs.form.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast(errors[0].message)
					console.log(errors);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F8F8;
	}

	.x-resetPsw {
		.x-form {
			background-color: #fff;
			padding: 0 20rpx;
		}

		.x-btn {
			margin: 100rpx 30rpx 0;
		}
	}
</style>

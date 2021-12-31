<template>
	<view class="x-authorizeKey">
		<u-navbar class="navbar" :title="title" @rightClick="rightClick" @leftClick="leftClick" :rightText="'查看教程'">
		</u-navbar>
		<view class="authorizeKey-tag">
			<view class="tag-text">
				1，获取到{{ title }}的APIKey：用于同步持仓和交易数据
			</view>
			<view class="tag-text">
				2、输入或复制粘贴您的APIKey
			</view>
		</view>
		<view class="x-form">
			<u--form labelPosition="top" :model="form" errorType="none" :rules="rules" ref="form">
				<u-form-item label="API Key" labelWidth="auto" prop="api" borderBottom ref="api">
					<u--input v-model="form.api" border="none" fontSize="12" placeholder="输入或粘贴API Key"></u--input>
				</u-form-item>
				<u-form-item label="Secret Key" labelWidth="auto" prop="secret" borderBottom ref="secret">
					<u--input v-model="form.secret" border="none" fontSize="12" placeholder="输入或粘贴Secret Key">
					</u--input>
				</u-form-item>
				<u-form-item v-if="passphraseShow" label="Passphrase (密码)" labelWidth="auto" prop="passphrase"
					borderBottom ref="passphrase">
					<u--input v-model="form.Passphrase" border="none" fontSize="12" placeholder="输入或粘贴Passphrase (密码)">
					</u--input>
				</u-form-item>
			</u--form>
			<u-button class="btn" type="primary" text="导入" @click="submit" color="#4387ea"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				form: {
					api: '',
					secret: ''
				},
				passphraseShow: false,
				rules: {
					api: [{
						required: true,
						message: 'API Key不能为空',
						trigger: ['blur', 'change']
					}],
					secret: [{
						required: true,
						message: 'Secret Key不能为空',
						trigger: ['blur', 'change']
					}],
					passphrase: [{
						required: true,
						message: 'Passphrase (密码)不能为空',
						trigger: ['blur', 'change']
					}]
				}
			};
		},
		onLoad: function(option) {
			this.title = option.name
			if (option.name === 'OKEx') {
				this.passphraseShow = true
			}
		},
		methods: {
			leftClick() {
				uni.navigateBack({
					delta: 1
				})
			},
			rightClick() {

			},
			submit() {
				this.$refs.form.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast(errors[0].message)
				})
			}
		}
	}
</script>

<style lang="scss">
	.x-authorizeKey {
		.navbar {
			/deep/.u-navbar__content__title {
				font-weight: 700;
			}
		}

		.authorizeKey-tag {
			background-color: #f7f6fc;
			padding: 30rpx 0 20rpx;
			line-height: 1.5;
			width: 100%;

			.tag-text {
				font-size: 24rpx;
				transform: scale(0.8333) translateX(-20px);
				color: #888;

			}
		}

		.x-form {
			margin: 50rpx 30rpx 0;

			.btn {
				margin-top: 80rpx;
			}
		}
	}
</style>

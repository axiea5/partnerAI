<template>
	<view class="x-setting">
		<u-cell-group class="x-group group1">
			<u-cell v-for="item in list1" :isLink="true" :title="item.text"
				@click="$Fn.toPage(item.url,{name:item.name})">
			</u-cell>
		</u-cell-group>

		<u-cell-group class="x-group">
			<u-cell title="联系我们" :isLink="true" @click="$Fn.toPage('../contactUs/contactUs')"></u-cell>
			<u-cell title="软件版本" value="1.0.3"></u-cell>
			<u-cell title="清除缓存" :value="storageSize" @click="clearStorage"></u-cell>
		</u-cell-group>

		<view class="btn">
			<u-button type="primary" text="退出登录" @click="quit"></u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
					text: '修改登录密码',
					url: '../resetPsw/resetPsw',
					name: 'login'
				}, {
					text: '修改支付密码',
					url: '../resetPsw/resetPsw',
					name: 'pay'
				}, {
					text: '修改密保问题',
					url: '../securityQuestion/securityQuestion'
				}, {
					text: '开启身份验证',
					url: '../verificationKey/verificationKey'
				}],
				storageSize: ''
			}
		},
		onLoad() {
			this.getStorageSize();
		},
		methods: {
			getStorageSize: function() {
				let that = this;
				uni.getStorageInfo({
					success(res) {
						let size = res.currentSize;
						if (size < 1024) {
							that.storageSize = size + ' B';
						} else if (size / 1024 >= 1 && size / 1024 / 1024 < 1) {
							that.storageSize = Math.floor(size / 1024 * 100) / 100 + ' KB';
						} else if (size / 1024 / 1024 >= 1) {
							that.storageSize = Math.floor(size / 1024 / 1024 * 100) / 100 + ' M';
						}
					}
				})
			},
			clearStorage: function() {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '确定清除缓存吗?',
					success(res) {
						if (res.confirm) {
							uni.clearStorageSync();
							//重新获取并显示清除后的缓存大小
							that.getStorageSize();
							uni.showToast({
								title: '清除成功'
							})
						}
					}
				})
			},
			quit() {
				var that = this
				uni.removeStorage({
					key: 'loginType',
					success: function(res) {
						uni.navigateTo({
							url:'../login/login'
						})
					}
				});
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
	.x-setting {
		.x-group {
			padding: 0 30rpx;
			background-color: #ffffff;

			/deep/.u-cell-group__wrapper {
				.u-cell__value {
					color: #bbb;
				}
			}

		}

		.group1 {
			margin-bottom: 30rpx;
		}

		.btn {
			margin: 100rpx 30rpx;
		}
	}
</style>

<template>
	<view class="x-usdtAddressAdd">
		<view class="ipt-label">地址</view>
		<view class="ipt-item df">
			<u--input v-model="address" placeholder="输入或粘贴USDT(点卡链)地址" border="none" placeholderStyle="color:#5c6b8b">
			</u--input>
			<u-icon name="scan" size="20" @click="scan"></u-icon>
		</view>
		<view class="ipt-label">备注</view>
		<view class="ipt-item df">
			<u--input v-model="tips" placeholder="USDT(LC20) Address Name 1" border="none"
				placeholderStyle="color:#5c6b8b">
			</u--input>
		</view>
		<view class="add-btn">
			<u-button text="确定" color="#02d48f" @click="submit"></u-button>
		</view>
		<u-popup :show="popupShow" mode="bottom" @close="popupShow=false" :closeOnClickOverlay="true">
			<view class="popup-content">
				<view class="pop-head df df-betw">
					<text class="bold">安全验证</text>
					<text class="gray" @click="popupShow=false">取消</text>
				</view>
				<view class="pop-in">
					<text>176****5077</text>
					<view class="ipt-item df">
						<u--input v-model="code" placeholder="请输入验证码" border="none" placeholderStyle="color:#5c6b8b">
						</u--input>
						<view>
							<u-code :seconds="seconds" startText="发送" @end="end" @start="start" ref="uCode" @change="codeChange">
							</u-code>
							<u-button @tap="getCode" size="small" type="error" :plain="true">{{btnText}}</u-button>
						</view>
					</view>
					<u-button text="确定" color="linear-gradient(to right,#2decad,#17b580)" @click="submit2"></u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '',
				tips: '',
				popupShow: false,
				code: '',
				btnText: '',
				seconds: 60
			};
		},
		methods: {
			scan() {
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			submit() {
				if (uni.$u.test.isEmpty(this.address)) {
					uni.$u.toast('地址不能为空哦~')
				} else if (uni.$u.test.isEmpty(this.tips)) {
					uni.$u.toast('备注不能为空哦~')
				} else {
					this.popupShow = true
				}
			},
			codeChange(text) {
				this.btnText = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 500);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			start() {
				uni.$u.toast('倒计时开始');
			},
			submit2(){
				if(uni.$u.test.isEmpty(this.code)){
					uni.$u.toast('验证码不能为空哦~');
				}else if(!uni.$u.test.code(this.code)){
					uni.$u.toast('验证码长度不足哦~');
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F8F8;
	}

	.x-usdtAddressAdd {
		padding: 30rpx;

		.ipt-label {
			height: 70rpx;
			line-height: 70rpx;
			margin-top: 40rpx;
		}

		.ipt-item {
			border-bottom: 2rpx solid #ccc;
			padding-bottom: 10rpx;
		}

		.add-btn {
			position: fixed;
			bottom: 30rpx;
			left: 30rpx;
			right: 30rpx;
			box-sizing: border-box;
		}

		.popup-content {
			.pop-head {
				padding: 30rpx;
				border-bottom: 2rpx solid #ececec;

				.bold {
					font-size: 30rpx;
					font-weight: 700;
				}

				.gray {
					color: #666;
				}
			}

			.pop-in {
				padding: 60rpx 30rpx 30rpx;

				.ipt-item {
					border-bottom: 2rpx solid #ccc;
					margin-top: 24rpx;
					margin-bottom: 80rpx;
				}
			}
		}
	}
</style>

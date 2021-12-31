<template>
	<view class="x-withdraw">
		<view class="titile">
			USDT
		</view>
		<view class="withdraw-content">
			<view class="ipt-label">
				提币地址
			</view>
			<view class="ipt-item df">
				<u--input v-model="address" placeholder="输入或长按粘贴地址" border="none"
					placeholderStyle="font-weight:700;color:#5c6b8b" @change="iptChange"></u--input>
				<view class="df">
					<u-icon class="pad10" name="scan" size="20" :bold="true" @click="scan"></u-icon>
					<u-icon class="pad10" name="../../static/dizhibu.png" width="20" height="20" @click="$Fn.toPage('../usdtAddress/usdtAddress')"></u-icon>
				</view>
			</view>
			<view class="ipt-label">
				数量
			</view>
			<view class="ipt-item df">
				<u--input v-model="iptNum" type="number" placeholder="请输入提币数量" border="none"
					placeholderStyle="font-weight:700;color:#5c6b8b" @change="iptChange"></u--input>
				<view class="df">
					<text class="pad10">USDT</text>
					<u-line direction="col" color="#ccc" length="20"></u-line>
					<text class="pad10" @click="iptNum=total">全部</text>
				</view>
			</view>
			<view class="little">
				可用 {{total}} USDT
			</view>
			<view class="ipt-label">
				手续费
			</view>
			<view class="ipt-item df df-betw">
				<text>5</text>
				<text class="pad10">USDT</text>
			</view>
			<view class="ipt-label">
				支付密码
			</view>
			<view class="ipt-item df">
				<u--input v-model="pay" placeholder="请输入支付密码" border="none"
					placeholderStyle="font-weight:700;color:#5c6b8b" :password="true" @change="iptChange"></u--input>
			</view>
			<view class="little2">
				<text class="text-tips">
					最小提币数量为: 100USDT(TRC20)。为保障资金安全，当账户安全策略变更、密码修改、我们会对提币进行人工审核，请耐心等待工作人员电话或邮件联系
				</text>
			</view>

			<view class="ipt-label df df-betw">
				<text>到账数量</text>
				<text>{{gain}}USDT</text>
			</view>
			<view @click="submit">
				<u-button type="primary" text="提币" :disabled="disabled"></u-button>
			</view>
		</view>
		<u-modal :show="modalShow" title="你的usdt不足" :showCancelButton="true" @confirm="withdraw"
			@cancel="modalShow=false">
			<view class="slot-content">
				<view class="modal-content">是否前往充值?</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '',
				iptNum: '',
				pay: '',
				total: 0,
				disabled: true,
				modalShow: false
			};
		},
		computed: {
			gain() {
				return Number(this.iptNum) - 5 > 0 ? Number(this.iptNum) - 5 : 0
			}
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
			iptChange() {
				if ((!uni.$u.test.isEmpty(this.address)) && (Number(this.iptNum) >= 100) && (!uni.$u.test.isEmpty(this.pay))) {
					this.disabled = false
				} else {
					this.disabled = true
				}
			},
			submit() {
				console.log(11);
				if (uni.$u.test.isEmpty(this.address)) {
					uni.$u.toast('地址不能为空哦~')
				} else if (uni.$u.test.isEmpty(this.iptNum)) {
					uni.$u.toast('提币数量不能为空哦~')
				} else if (uni.$u.test.isEmpty(this.pay)) {
					uni.$u.toast('支付密码不能为空哦~')
				} else {
					if (this.iptNum > this.total) {
						this.modalShow = true
					} else {
						this.withdraw()
					}
				}
			},
			withdraw() {

			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F8F8;
	}

	.x-withdraw {
		.titile {
			font-weight: 700;
			background-color: #f6f5fa;
			margin: 30rpx 30rpx 0;
			padding: 30rpx;
		}

		.withdraw-content {
			margin: 0 30rpx;

			.ipt-label {
				line-height: 100rpx;
			}

			.ipt-item {
				margin-bottom: 40rpx;

				.pad10 {
					padding: 0 20rpx;
					font-weight: 700;
				}
			}

			.little {
				font-size: 24rpx;
				transform: scale(0.8333) translateX(-68rpx);
				color: #989898;
			}

			.little2 {
				margin-top: 40rpx;
				background-color: #f6f5fa;
				padding: 30rpx;

				.text-tips {
					color: #989898;
					transform: scale(0.8333) translateX(-66rpx);
					font-size: 24rpx;
				}
			}
		}

	}
</style>

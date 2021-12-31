<template>
	<view class="x-recharge">
		<view class="bg">
			<view class="sync df df-betw df-center">
				<text>USDT</text>
				<view class="sync-btn">同步USDT</view>
			</view>
			<view class="TRC20">
				TRC20
			</view>

			<view class="recharge-text df df-col df-center">
				<view class="qrcode">
				</view>
				<view class="text-btn">
					保存二维码至相册
				</view>
				<text class="gray">充币地址</text>
				<view>TQfKn8oiLq3rhZ6ofWEx5aXcHiZtf9oWAx</view>
				<view class="text-btn">
					复制地址
				</view>
			</view>
		</view>

		<view class="tips">
			请勿向上述地址充值任何非<text class="blue">TRC20_USDT</text>资产，否则资产将不可退回。
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F8F8;
	}

	.x-recharge {
		.bg {
			background-color: #f6f6fa;
			margin: 30rpx;
		}

		.sync {
			padding: 20rpx 30rpx 38rpx;
			font-weight: 600;

			.sync-btn {
				background-color: #0166eb;
				border-radius: 40rpx;
				color: #fff;
				padding: 10rpx 30rpx;
			}
		}

		.TRC20 {
			background-color: #0166eb;
			color: #fff;
			padding: 6rpx 30rpx;
			border-radius: 8rpx;
			margin-left: 52rpx;
			width: fit-content;
		}

		.recharge-text {
			margin: 90rpx 50rpx 0;

			.qrcode {
				width: 320rpx;
				height: 320rpx;
				border-radius: 10rpx;
				border: 2rpx solid #ccc;
			}

			.text-btn {
				background-color: #e8edf9;
				color: #4387ea;
				border: 2rpx solid #aecaf4;
				border-radius: 10rpx;
				padding: 20rpx 36rpx;
				margin: 44rpx 0;
			}

			.gray {
				color: #999;
				margin-bottom: 48rpx;
			}
		}
		.tips{
			margin: 20rpx 30rpx 0;
			.blue{
				color: #0166eb ;
			}
		}
	}
</style>

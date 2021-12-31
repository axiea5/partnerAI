<template>
	<view class="x-earnings">
		<view class="earnings-head df df-col df-center">
			<text>总收益(USDT)</text>
			<text class="num">0</text>
			<view class="orange-tag">
				OKEx合约/U本位
			</view>
			<view class="earnings-classify">
				<view class="df df-col df-center">
					<text>昨日累计收益</text>
					<text>(USDT)</text>
					<text>0</text>
				</view>
				<view class="df df-col df-center">
					<text>今日累计收益</text>
					<text>(USDT)</text>
					<text>0</text>
				</view>
				<view class="df df-col df-center">
					<text>本月累计收益</text>
					<text>(USDT)</text>
					<text>0</text>
				</view>
			</view>
		</view>
		<view class="earnings-detail">
			<view class="detail-head df df-center">
				<view class="blue"></view>
				<text>收益明细</text>
			</view>
			<view class="hasno">暂无数据</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.x-earnings {
		.earnings-head {
			padding: 60rpx 44rpx 50rpx;
			background-color: #1a77ec;
			color: #fff;

			.num {
				font-size: 46rpx;
				margin: 36rpx 0 18rpx;
			}

			.orange-tag {
				background-color: #fe8228;
				border-radius: 6rpx;
				padding: 6rpx 10rpx;
				margin-bottom: 36rpx;
				font-size: 24rpx;
				transform: scale(0.75);
			}

			.earnings-classify {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				width: 100%;
			}
		}

		.earnings-detail {
			padding: 20rpx 30rpx;

			.detail-head {
				.blue {
					width: 10rpx;
					height: 58rpx;
					background-color: #1a77ec;
					margin-right: 10rpx;
				}
			}

			.hasno {
				margin-top: 60rpx;
				text-align: center;
				color: #666;
			}
		}
	}
</style>

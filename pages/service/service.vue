<template>
	<view class="x-service">
		<view class="service-text">
			<view class="time">
				在线客服(09:00~22:00)
			</view>
			<view class="service-detail">
				所有常见问题都有相应的解决方案，请参考常见问题自主解决，如果常见问题无法解决您的问题在咨询客服，由于客服咨询量较大，请尽可能的描述清楚您的问题，以便快速解决
				如有疑问,请编辑短信发送至客服(客服电话点击下方“联系客服”按钮）
			</view>
			<view class="exclusive">
				微信专属客服：(bxe1321)
			</view>
		</view>

		<view class="btn">
			<u-button type="primary" text="联系客服"></u-button>
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

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.x-service {
		.service-text {
			background-color: #fff;
			padding: 30rpx;

			.service-detail {
				color: #8e8e8e;
				font-size: 24rpx;
				margin: 68rpx 0 40rpx;
			}

			.exclusive {
				font-size: 26rpx;
			}
		}

		.btn {
			margin: 76rpx 30rpx 0;
		}
	}
</style>

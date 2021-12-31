<template>
	<view class="x-contactUs">
		<view class="contactUs-center df df-col df-center">
			<text>点击二维码可保存到本地相册</text>
			<view class="qrcode">

			</view>
			<text>微信扫码添加平台专属客服或搜索添加：bxe1321</text>
		</view>
		<view class="contactUs-tips df df-col">
			<text>温馨提示：</text>
			<text>1,添加时请备注您的APPID：XXXXXX，未备注ID者一律无法通过申请</text>
			<text>2,添加时请备注您的APPID：XXXXXX，未备注ID者一律无法通过申请</text>
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
		background-color: #fff;
	}

	.x-contactUs {
		.contactUs-center {
			margin: 70rpx auto 160rpx;
			width: 410rpx;
			.qrcode {
				width: 280rpx;
				height: 280rpx;
				background-color: #e6e6e6;
				border-radius: 30rpx;
				margin: 54rpx 0 58rpx;
			}
		}
		.contactUs-tips{
			padding: 0 30rpx;
			line-height: 1.75;
		}
	}
</style>

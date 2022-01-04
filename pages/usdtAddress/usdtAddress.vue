<template>
	<view class="x-usdtAddress">
		<view class="empty">
			<image src="../../static/empty.png" mode="widthFix" style="width: 300rpx;"></image>
			<view class="empty-text">暂无记录</view>
		</view>
		<view class="add-btn">
			<u-button text="添加地址" color="#02d48f" @click="$Fn.toPage('../usdtAddressAdd/usdtAddressAdd')"></u-button>
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

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.x-usdtAddress {
		.empty {
			margin: 200rpx auto 0;
			width: 300rpx;

			.empty-text {
				margin-top: 38rpx;
				color: #999;
				text-align: center;
			}
		}

		.add-btn {
			padding: 0 30rpx;
			position: fixed;
			bottom: 30rpx;
			width: 100%;
			box-sizing: border-box;
		}
	}
</style>

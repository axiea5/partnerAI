<template>
	<view class="x-userInfo">
		<view class="head">
			<u-avatar :src="avatar" shape="circle" size="70"></u-avatar>
		</view>
		<u-cell-group class="x-group">
			<u-cell title="姓名" value="杨仔"></u-cell>
			<u-cell title="账号ID" value="16890"></u-cell>
			<u-cell title="级别" value="游客"></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.x-userInfo {
		.head {
			padding: 56rpx 0 100rpx;
			background-color: #fff;

			.u-avatar {
				margin: 0 auto;
			}
		}
		.x-group{
			background-color: #fff;
			padding:20rpx 30rpx;
			margin-top: 20rpx;
			/deep/.u-cell__value{
				color: #575e7b;
			}
		}
	}
</style>

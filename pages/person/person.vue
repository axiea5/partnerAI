<template>
	<view class="person">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- 头部 -->
		<!-- 未登录 -->
		<view v-if="!login" class="x-head df df-betw df-acenter">
			<view class="head-l df df-acenter">
				<u-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" shape="circle"
					size="40"></u-avatar>
				<text>您未登录，请先登录！</text>
			</view>
			<view class="head-r">
				<u-icon name="arrow-right" color="#c6c6c6" size="16"></u-icon>
			</view>
		</view>
		<!-- 已登陆 -->
		<view v-if="login" class="x-head df df-betw df-acenter" @click="$Fn.toPage('../userInfo/userInfo')">
			<view class="head-l df df-acenter">
				<u-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" shape="circle"
					size="40"></u-avatar>
				<text>杨仔</text>
				<view class="x-tag">
					<text class="tag-text">游客</text>
				</view>
			</view>
			<view class="head-r">
				<u-icon name="arrow-right" color="#c6c6c6" size="16"></u-icon>
			</view>
		</view>

		<!-- 收益 -->
		<view class="x-yield df df-betw">
			<view class="yield-l">
				<view>量化收益/USDT</view>
				<view class="number" v-show="numShow">0</view>
				<view class="number" v-show="!numShow">******</view>
				<view v-show="numShow">≈￥0 CNY</view>
				<view v-show="!numShow" class="block"> </view>
				<view class="f13">分润收益 0</view>
			</view>
			<view class="yield-r df df-betw df-col df-acenter">
				<u-icon name="eye-fill" color="#fff" size="18" v-show="numShow" @click="numShow=!numShow"></u-icon>
				<u-icon name="eye-off" color="#fff" size="18" v-show="!numShow" @click="numShow=!numShow"></u-icon>
				<view class="df df-betw df-col df-acenter" @click="turnPage">
					<image src="../../static/gonggao.png" style="width: 44rpx; height: 44rpx;" mode="aspectFit"></image>
					<text class="f10">公告</text>
				</view>
			</view>
		</view>

		<!-- 蓝色块 -->
		<view class="x-blue df">
			<view class="blue-item df df-col df-acenter" v-for="item in blueList" :key="item.text"
				@click="$Fn.toPage(item.url)">
				<image :src="item.icon" style="width: 60rpx; height: 46rpx;"></image>
				<text class="blue-text">{{item.text}}</text>
			</view>
		</view>

		<!-- 会员 -->
		<image src="../../static/vip.png" mode="widthFix" class="vip-item"></image>

		<!-- 列表 -->
		<u-cell-group class="x-group">
			<u-cell v-for="item in personList" :key="item.text" :isLink="true" :icon="item.icon" :title="item.text"
				@click="$Fn.toPage(item.url)">
			</u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: true,
				blueList: [{
					icon: '../../static/blue1.png',
					text: '财务管理',
					url: '../financial/financial'
				}, {
					icon: '../../static/blue2.png',
					text: 'API授权',
					url: '../authorize/authorize'
				}, {
					icon: '../../static/blue3.png',
					text: '我的收益',
					url: '../earnings/earnings'
				}],
				personList: [{
					icon: '../../static/person1.png',
					text: '我的团队',
					url: '../team/team'
				}, {
					icon: '../../static/person2.png',
					text: 'VIP会员',
					url: '../activeVip/activeVip'
				}, {
					icon: '../../static/person3.png',
					text: '邀请好友',
					url: '../share/share'
				}, {
					icon: '../../static/person4.png',
					text: '开通合约'
				}, {
					icon: '../../static/person5.png',
					text: '交易记录',
					url: '../tradingRecord/tradingRecord'
				}, {
					icon: '../../static/person6.png',
					text: '交易日志',
					url: '../dealLog/dealLog'
				}, {
					icon: '../../static/person7.png',
					text: '联系客服',
					url: '../service/service'
				}, {
					icon: '../../static/person8.png',
					text: '设置',
					url: '../setting/setting'
				}],
				numShow: true,
			};
		},
		methods: {
			turnPage() {
				uni.switchTab({
					url: '/pages/message/message'
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
	.person {
		background-color: #f8f8f8;
		padding: 28rpx 30rpx;

		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.x-head {
			display: flex;
			margin-bottom: 30rpx;

			.head-l {
				.u-avatar {
					margin-right: 20rpx;
				}

				.x-tag {
					background-color: #e2f5ff;
					width: 60rpx;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					margin-left: 20rpx;

					.tag-text {
						font-size: 24rpx;
						color: #408bf0;
						transform: scale(0.8333);
					}
				}
			}
		}

		.x-yield {
			border-radius: 10rpx;
			padding: 26rpx 18rpx;
			color: #fff;
			background: #408bf0 url('../../static/bg.png') top/100% 100%;

			.f13 {
				font-size: 26rpx;
				margin-top: 10rpx;
			}

			.yield-l {
				.number {
					font-size: 44rpx;
					font-weight: bold;
					margin-top: 10rpx;
				}

				.block {
					height: 38.4rpx;
				}
			}

			.yield-r {
				.f10 {
					margin-top: 10rpx;
				}
			}
		}

		.x-blue {
			margin: 42rpx 0 50rpx;

			.blue-item {
				width: 33.3%;

				.blue-text {
					color: #49659f;
					margin-top: 30rpx;
				}
			}
		}

		.vip-item {
			width: 100%;
			border-radius: 10rpx;
		}

		.x-group {
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;

			/deep/.u-cell-group__wrapper {
				.u-cell__body {
					padding: 20rpx 0;
				}

				.u-cell__left-icon-wrap {
					margin-right: 16rpx;
				}

				.u-cell--clickable {
					background-color: #fff;
				}
			}
		}
	}
</style>

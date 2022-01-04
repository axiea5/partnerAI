<template>
	<view class="x-financial">
		<u-tabs :list="navList" class="nav-tabs" @click="clickNav" :activeStyle="{fontWeight:700,fontSize:'28rpx'}"
			:inactiveStyle="{fontSize:'28rpx',color:'#999'}"></u-tabs>
		<!-- 充值 -->
		<view class="card" v-show="navIndex===0">
			<view class="card-in">
				<text>资产(USDT)</text>
				<view class="num">
					<text>0</text>
				</view>
				<view class="btn-list">
					<view class="btn-in" @click="$Fn.toPage('../recharge/recharge')">充币</view>
					<view class="btn-in" @click="$Fn.toPage('../withdraw/withdraw')">提币</view>
					<view class="btn-in" @click="$Fn.toPage('../financialTransition/financialTransition',{name:'兑换'})">兑换</view>
				</view>
			</view>
		</view>
		<!-- 点卡 -->
		<view class="card" v-show="navIndex===1">
			<view class="card-in">
				<text>总点卡数</text>
				<view class="num">
					<text>0+20</text>
					<text class="free">(赠送)</text>
				</view>
				<view class="btn-list">
					<view class="btn-in" @click="$Fn.toPage('../financialTransition/financialTransition',{name:'充币'})">充值</view>
				</view>
			</view>
		</view>

		<!-- 收益 -->
		<view class="card" v-show="navIndex===2">
			<view class="card-in card-in2 df df-betw df-center">
				<view class="df df-col in2-l">
					<view>
						<text>总收益(USDT)</text>
						<text class="num">0</text>
					</view>
					<view>
						<text>可划转(USDT)</text>
						<text class="num">0</text>
					</view>
				</view>
				<view class="btn-in2" @click="$Fn.toPage('../financialTransition/financialTransition',{name:'转换'})">划转</view>
			</view>
		</view>

		<view class="record">
			<view class="record-head df df-betw">
				<text>最近{{record}}记录</text>
				<u-icon name="../../static/record.png" height="18" width="18"
					@click="$Fn.toPage('../financialRecord/financialRecord',{name:navIndex})"></u-icon>
			</view>
			<u-line></u-line>
			<view class="record-detail">
				<view class="hasno">暂无数据</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					name: '充值'
				}, {
					name: '点卡'
				}, {
					name: '收益'
				}],
				navIndex: 0,
				record:'成交'
			}
		},
		methods: {
			clickNav(item) {
				console.log(item.index);
				this.navIndex = item.index
				if (item.index === 0) {
					this.record = '成交'
				} else if (item.index === 1) {
					this.record = '点卡'
				} else {
					this.record = '收益'
				}
			}
		}
	}
</script>
<style lang="scss">
	page {
		background-color: #F2F2F2;
	}
</style>
<style lang="scss" scoped>
	.x-financial {
		.nav-tabs {
			background-color: #fff;
		}

		.card {
			margin: 20rpx 0;
			background-color: #fff;
			padding: 30rpx;

			.card-in {
				padding: 30rpx;
				background-color: #2a7fee;
				border-radius: 16rpx;
				color: #fff;

				.num {
					font-size: 54rpx;
					margin: 46rpx 0 36rpx;

					.free {
						font-size: 24rpx;
					}
				}

				.btn-list {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-column-gap: 36rpx;

					.btn-in {
						text-align: center;
						padding: 10rpx 0;
						border: 2rpx solid #fff;
						border-radius: 6rpx;
					}
				}
			}

			.card-in2 {
				height: 315rpx;
				box-sizing: border-box;

				.in2-l {
					justify-content: space-around;
					height: 100%;

					.num {
						vertical-align: middle;
						margin-left: 20rpx;
					}
				}

				.btn-in2 {
					text-align: center;
					width: 186rpx;
					height: 62.4rpx;
					line-height: 62.4rpx;
					border: 2rpx solid #fff;
					border-radius: 6rpx;
				}
			}
		}

		.record {
			background-color: #fff;

			.record-head {
				padding: 30rpx;
			}

			.record-detail {
				min-height: 150rpx;

				.hasno {
					margin-top: 60rpx;
					text-align: center;
					color: #666;
				}
			}
		}
	}
</style>

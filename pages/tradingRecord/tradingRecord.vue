<template>
	<view class="x-tradingRecord">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- 顶部导航 -->
		<uni-nav-bar left-icon="back" class="nav-bar" title="交易记录" :border="false" @clickLeft="$Fn.turnoff"
			@clickRight="popupShow=true" backgroundColor="#fff">
			<view slot="right">
				<u-icon name="../../static/guolv.png"></u-icon>
			</view>
		</uni-nav-bar>
		<!-- 过滤弹出层 -->
		<u-popup :show="popupShow" mode="right" @close="popupShow=false" @open="getfilter">
			<view class="popup-content">
				<view class="content-head">筛选</view>
				<view class="content-in">
					<view class="content-title">交易所</view>
					<view class="surround">
						<u--input placeholder="请输入交易所" border :fontSize="14" v-model="bourse"></u--input>
					</view>
					<view class="content-title">定义时间</view>
					<view class="df df-acenter">
						<view @click="showTime=true;timeIndex=1" class="surround">
							<u--input placeholder="开始时间" disabled :fontSize="14" disabledColor="#ffffff" border
								v-model="startTime"></u--input>
						</view>
						<text class="split">至</text>
						<view @click="showTime=true;timeIndex=2" class="surround">
							<u--input placeholder="结束时间" disabled :fontSize="14" disabledColor="#ffffff"
								border="surround" v-model="endTime"></u--input>
						</view>
					</view>
					<u-datetime-picker ref="datetimePicker" :show="showTime" :value="time" :formatter="formatter"
						mode="date" closeOnClickOverlay @confirm="pickerConfirm" @cancel="pickerClose"
						@close="pickerClose"></u-datetime-picker>
				</view>
				<view class="content-bottom df">
					<view class="btn gray" @click="reset">
						重置
					</view>
					<view class="btn blue">
						确定
					</view>
				</view>
			</view>
		</u-popup>

		<!-- 标签栏 -->
		<u-tabs :list="navList" class="nav-tabs" @click="clickNav"
			:activeStyle="{color:'#4086f0',fontWeight:700,fontSize:'28rpx'}" :inactiveStyle="{fontSize:'28rpx'}"
			style="background-color: #FFFFFF;"></u-tabs>
			<!-- 内容 -->
			<view class="hasno">暂无数据</view>

			<!-- 底部 -->
			<view class="total df df-betw" style="background-color: #FFFFFF;">
				<text>合计盈利：<text class="green">0USDT</text></text>
				<text>交易0单</text>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					name: '全部'
				}, {
					name: '开仓'
				}, {
					name: '平仓'
				}],
				popupShow: false,
				bourse: '',
				startTime: '',
				endTime: '',
				time: Number(new Date()),
				timeIndex: 1,
				showTime: false
			}
		},
		methods: {
			getfilter() {

			},
			pickerClose() {
				this.showTime = false
			},
			pickerConfirm(e) {
				this.showTime = false
				switch (this.timeIndex) {
					case 1:
						this.startTime = uni.$u.timeFormat(e.value, 'yyyy-mm-dd')
						break;
					case 2:
						this.endTime = uni.$u.timeFormat(e.value, 'yyyy-mm-dd')
						break;
				}
			},
			reset() {
				this.bourse = ''
				this.startTime = ''
				this.endTime = ''
				this.time = Number(new Date())
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
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
	.x-tradingRecord {
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.nav-bar {
			/deep/.uni-nav-bar-text {
				font-size: 32rpx;
			}

			/deep/.uni-navbar__header-btns-right {
				padding-right: 0;
				width: 120rpx;
			}
		}

		.nav-tabs {
			background-color: #fff;
		}

		.hasno {
			margin-top: 60rpx;
			text-align: center;
			color: #666;
		}

		.popup-content {
			width: 80vw;

			.content-head {
				font-size: 32rpx;
				font-weight: bold;
				text-align: center;
				margin-top: 50rpx;
			}


			.content-in {
				padding: 0 30rpx;

				.content-title {
					margin: 42rpx 0;
				}

				.surround {
					border: 2rpx solid #e8e8e8;
				}

				.split {
					margin: 0 20rpx;
				}
			}

			.content-bottom {
				position: absolute;
				bottom: 0;
				width: 100%;

				.btn {
					flex: 1;
					text-align: center;
					padding: 30rpx 0;
				}

				.gray {
					background-color: #ededed;
				}

				.blue {
					background-color: #4388e9;
					color: #fff;
				}
			}
		}

		.total {
			position: absolute;
			bottom: 0;
			width: 100%;
			padding: 38rpx 30rpx 34rpx;
			box-sizing: border-box;
			background-color: #fff;

			.green {
				color: #3ebe93;
			}
		}
	}
</style>

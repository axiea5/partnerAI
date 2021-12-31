<template>
	<view class="x-deal">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- 头部 -->
		<view class="x-nav df df-betw df-center">
			<u-icon name="search" color="#000" size="20" class="search" @click="$Fn.toPage('../search/search')">
			</u-icon>
			<view class="headName df" @click="show=true">
				<text>{{headName}}</text>
				<u-icon name="arrow-down"></u-icon>
			</view>
			<view class="icon">
				<image src="../../static/bing.png" style="width: 36rpx;height: 36rpx;margin-right: 30rpx;"
					v-show="pieSHow"></image>
				<image src="../../static/setting.png" style="width: 36rpx;height: 36rpx;"></image>
			</view>
		</view>
		<!-- 头部中间点击弹窗 -->
		<u-action-sheet :actions="alertList" :closeOnClickOverlay="true" :closeOnClickAction="true" :cancelText="'取消'"
			@close="show=false" class="x-action" :show="show" :round="5" @select="alertClick"></u-action-sheet>
		<!-- 第一级标签选项 -->
		<u-tabs :list="tabs1" v-show="tabs1Show" @click="tabs1Active" :scrollable="false" lineColor="#fff"
			:activeStyle="{color:'#fff'}" :inactiveStyle="{color:'#fff'}" class="x-tabs1"></u-tabs>
		<!-- 第二级标签选项 -->
		<view class="x-tabs2 df">
			<view :class="index===active2?'tabs2-active tabs2-item':'tabs2-item'" v-for="(item,index) in tabs2"
				@click="tabs2Active(index)">
				{{item.name}}
			</view>
		</view>
		<!-- 第三级标签选项 -->
		<u-tabs :list="tabs3" @click="tabs3Active" :scrollable="false" lineColor="#4286E7"
			:activeStyle="{color:'#4286E7'}" class="x-tabs3">
		</u-tabs>

		<!-- 列表 -->
		<view class="x-detail">
			<u-radio-group v-model="radiovalue" placement="column" @change="groupChange">
				<view class="detail-item df" v-for="(item, index) in detailList" :key="index">
					<u-radio :customStyle="{margin: '0 20rpx 30rpx 0'}" :iconSize="22" @change="radioChange"></u-radio>
					<view class="df df-betw detail-text">
						<view class="detail-item-center-l df df-col">
							<view>
								{{item.name}}
							</view>
							<view>
								总数量：{{item.num}}
							</view>
						</view>
						<view class="detail-item-center-r">
							<view class="progress">
								<text>{{item.per}}%</text>
							</view>
							<!-- <u-line-progress :percentage="item.per" height="25"></u-line-progress> -->
							<text>预计盈利：0</text>
						</view>
					</view>
				</view>
			</u-radio-group>
		</view>

		<!-- 底部 -->
		<view class="x-footer clearfix">
			<text v-show="footerTitleShow">
				<text class="mr15">{{footerTitle}}网账户剩余 0</text>
				<text>USDT</text>
			</text>
			<text class="f10 fr c666">批量操作</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headName: '火币(现货)',
				tabs1: [{
					name: 'U本位'
				}, {
					name: '币本位'
				}, ],
				tabs2: [{
					name: '均价出'
				}],
				tabs3: [{
						name: '全部'
					},
					{
						name: '策略循环'
					},
					{
						name: '单次策略'
					},
					{
						name: '停止补单'
					}
				],
				show: false,
				alertList: [{
					name: '火币(现货)'
				}, {
					name: '币安(现货)'
				}, {
					name: '币安(U本合约)'
				}, {
					name: 'OKEx(U本合约)'
				}],
				active2: '',
				detailList: [{
					name: 'BTC/USDT',
					num: 0,
					per: 0,
					gain: 0
				}],
				radiovalue: false,
				footerTitle: '火币',
				footerTitleShow: true,
				tabs1Show: true,
				pieSHow: false
			};
		},
		methods: {
			alertClick(item) {
				console.log(item);
				this.show = false
				this.headName = item.name
				if (item.name === '火币(现货)') {
					this.footerTitleShow = true
					this.footerTitle = '火币'
					this.tabs1Show = true
					this.pieSHow = false
				} else if (item.name === '币安(现货)') {
					this.footerTitleShow = true
					this.footerTitle = '币安'
					this.tabs1Show = true
					this.pieSHow = false
				} else {
					this.footerTitleShow = false
					this.tabs1Show = false
					this.pieSHow = true
				}
			},
			tabs1Active(item) {
				console.log(item);
			},
			tabs2Active(index) {
				console.log(this.active2);
				this.active2 = index
			},
			groupChange(n) {
				console.log('groupChange', n);
			},
			radioChange(n) {
				console.log('radioChange', n);
			},
			tabs3Active(item) {
				console.log(item);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.x-deal {
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.x-tabs1 {
			background-color: #4286E7;

			/deep/.u-tabs__wrapper__nav__item__text {
				font-size: 28rpx;
			}
		}

		.x-nav {
			height: 96rpx;
			padding: 0 24rpx;

			.search {
				width: 102rpx;
			}
		}

		.x-tabs2 {
			background-color: #ccddfb;

			.tabs2-item {
				padding: 26rpx 58rpx;
			}

			.tabs2-active {
				color: #4286E7;
				font-weight: bold;
			}
		}

		.x-tabs3 {
			border-bottom: 2rpx solid #eee;

			/deep/.u-tabs__wrapper__nav__item__text {
				font-size: 28rpx;
			}
		}

		.x-detail {
			padding-bottom: 220rpx;

			.detail-item {
				padding: 29rpx 26rpx 0 20rpx;

				.detail-text {
					flex-grow: 1;
					border-bottom: 2rpx solid #eee;
					padding-bottom: 30rpx;
					font-size: 24rpx;
					color: #9a9a9a;
				}

				.detail-item-center-l {
					justify-content: space-around;
				}

				.detail-item-center-r {
					text-align: end;

					.progress {
						width: 180rpx;
						height: 50rpx;
						border-radius: 8rpx;
						background-color: #dfdfdf;
						color: #fff;
						line-height: 50rpx;
						text-align: center;
						margin-bottom: 10rpx;
					}
				}
			}
		}

		.x-footer {
			position: absolute;
			bottom: 0;
			height: 90rpx;
			width: 100%;
			background-color: #f3f2f8;
			padding: 0 40rpx;
			line-height: 90rpx;
			box-sizing: border-box;
		}

		.mr15 {
			margin-right: 30rpx;
		}

		.fr {
			float: right;
		}

		.c666 {
			color: #666;
		}

		.clearfix:after {
			content: "";
			display: block;
			clear: both;
		}
	}
</style>

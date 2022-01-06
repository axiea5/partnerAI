<template>
	<view class="x-dealDetail">
		<u-navbar title="详情" @rightClick="rightClick" @leftClick="$Fn.turnoff()" bgColor="transparent"
			:rightIcon="dealType===3?'list':dealType===4?'../../static/qian2.png':''" class="nav-bar" :border="true">
		</u-navbar>

		<view class="dealDetail-head">
			<view class="head-in">
				<view class="head-title df df-acenter">
					<text>{{dealTitle}}</text>
					<view class="tag-text">
						全仓
					</view>
				</view>
				<view class="head-box df df-jcenter">
					<view class="box-item df df-col df-acenter df-jcenter" v-for="item in dataList" :key="item.text">
						<view class="box-item-num">
							{{item.num}}
						</view>
						<view class="box-item-text">
							{{item.text}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- dealType===2 -->
		<view class="dealDetail-btn df df-betw" v-if="dealType===2">
			<view class="x-btn df df-acenter df-jcenter" v-for="item in btnList1" :key="item.text"
				:class="item.disabled&&'disabled-btn'">
				<u-icon :name="item.icon" height="18" width="18" :label="item.text" labelSize="15" labelColor="#fff">
				</u-icon>
			</view>
		</view>
		<!-- dealType===1/3 -->
		<view class="dealDetail-btn df df-betw" v-else>
			<view class="x-btn df df-acenter df-jcenter" v-for="item in btnList" :key="item.text"
				:class="item.disabled&&'disabled-btn'">
				<u-icon :name="item.icon" height="18" width="18" :label="item.text" labelSize="15" labelColor="#fff">
				</u-icon>
			</view>
		</view>


		<!-- dealType===1 -->
		<view class="dealDetail-cell" v-if="dealType===1">
			<!-- 首单金额(USDT) -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					首单金额(USDT)
				</view>
				<u--input placeholder="请输入" border="none" fontSize="14" inputAlign="right" v-model="firstP"></u--input>
			</view>
			<!-- 首单倍数 -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					首单倍数
				</view>
				<view class="df df-acenter">
					<u--input placeholder="请输入金额(USDT)" border="none" fontSize="14" inputAlign="right" v-model="firstM">
					</u--input>
					<text class="multiple">x</text>
				</view>
			</view>
			<!-- 策略 -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					策略
				</view>
				<view class="check-ipt" @click="tacticsShow=true">
					<u--input placeholder="请选择适合您的策略" :disabled="true" disabledColor="#fff" inputAlign="right"
						suffixIcon="arrow-right" border="none" fontSize="14" v-model="tactics"></u--input>
				</view>
			</view>
		</view>
		<!-- dealType===2 -->
		<view class="dealDetail-cell" v-if="dealType===2">
			<!-- 总建仓数量 -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					总建仓数量
				</view>
				<u--input placeholder="请输入" border="none" fontSize="14" inputAlign="right" v-model="creatNum">
				</u--input>
			</view>
			<!-- 策略 -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					策略
				</view>
				<view class="check-ipt" @click="tacticsShow=true">
					<u--input placeholder="请选择适合您的策略" :disabled="true" disabledColor="#fff" inputAlign="right"
						suffixIcon="arrow-right" border="none" fontSize="14" v-model="tactics"></u--input>
				</view>
			</view>
		</view>
		<!-- dealType===4 -->
		<view class="dealDetail-cell" v-if="dealType===3||dealType===4">
			<!-- 首单金额(USDT) -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					首单金额(USDT)
				</view>
				<u--input placeholder="请输入" border="none" fontSize="14" inputAlign="right" v-model="firstP"></u--input>
			</view>
			<!-- 最大持仓金额(USDT) -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					最大持仓金额(USDT)
				</view>
				<u--input placeholder="请输入金额(USDT)" border="none" fontSize="14" inputAlign="right" v-model="maxP">
				</u--input>
			</view>
			<!-- 首单倍数/杠杆倍数 -->
			<view class="cell-item df df-betw">
				<view class="df df-acenter item-two">
					<view class="cell-label">
						首单倍数
					</view>
					<view class="bg-gray">
						<u--input placeholder="请输入金额(USDT)" border="none" fontSize="14" inputAlign="right"
							v-model="firstM">
						</u--input>
					</view>
					<text class="multiple">x</text>
				</view>
				<view class="df df-acenter item-two">
					<view class="cell-label">
						杠杆倍数
					</view>
					<view class="bg-gray">
						<u--input placeholder="请输入金额(USDT)" border="none" fontSize="14" inputAlign="right"
							v-model="moreM">
						</u--input>
					</view>
					<text class="multiple">x</text>
				</view>
			</view>
			<!-- 策略 -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					策略
				</view>
				<view class="check-ipt" @click="tacticsShow=true">
					<u--input placeholder="请选择适合您的策略" :disabled="true" disabledColor="#fff" inputAlign="right"
						suffixIcon="arrow-right" border="none" fontSize="14" v-model="tactics"></u--input>
				</view>
			</view>
			<!-- 开仓方向 -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					开仓方向
				</view>
				<view class="u-page__tag-item" v-for="(item, index) in radiosList" :key="index">
					<u-tag :text="item.text" :plain="!item.checked" :name="index" @click="radioClick">
					</u-tag>
				</view>
			</view>
			<!-- 止损方式 -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					止损方式
				</view>
				<view class="check-ipt" @click="stopLosShow=true">
					<u--input placeholder="设置" :disabled="true" disabledColor="#fff" inputAlign="right"
						suffixIcon="arrow-right" border="none" fontSize="14" v-model="stopLos"></u--input>
				</view>
			</view>
			<!-- 开启对冲监测 -->
			<view class="cell-item df df-betw df-acenter">
				<view class="cell-label">
					开启对冲监测
				</view>
				<u-switch v-model="switchVal"></u-switch>
			</view>
		</view>

		<view class="dealDetail-btn">
			<u-button text="开始量化" color="linear-gradient(90deg,#418cf1,#0065eb)">
			</u-button>
		</view>

		<!-- 策略弹窗 -->
		<u-action-sheet :actions="tacticsList" :closeOnClickOverlay="true" :closeOnClickAction="true" :cancelText="'取消'"
			@close="tacticsShow=false" class="x-action" :show="tacticsShow" :round="5" @select="tacticsClick">
		</u-action-sheet>

		<!-- 止损方式弹窗 -->
		<u-popup :show="stopLosShow" class="stopLosPopup" :round="25" mode="center" :closeOnClickOverlay="true"
			@close="stopLosShow=false">
			<view class="stopLosPopup-content">
				<view class="popup-head">
					止损方式
				</view>
				<view class="popup-tags">
					<view class="u-page__tag-item" v-for="(item, index) in stopLosList" :key="index">
						<u-tag :text="item.text" :plain="!item.checked" :name="index" @click="stopLosListClick">
						</u-tag>
					</view>
				</view>
				<view class="dealDetail-cell">
					<view class="cell-item df df-betw df-acenter">
						<view class="cell-label">
							止损持仓金额
						</view>
						<u--input placeholder="请输入止损持仓金额" border="none" fontSize="14" inputAlign="right"
							v-model="stopForm.price"></u--input>
					</view>
					<view class="cell-item df df-betw df-acenter">
						<view class="cell-label">
							止损振幅
						</view>
						<u--input placeholder="请输入止损振幅" border="none" fontSize="14" inputAlign="right"
							v-model="stopForm.range"></u--input>
						<text class="gray">%</text>
					</view>
					<view class="cell-item df df-betw df-acenter">
						<view class="cell-label">
							止损开仓时间
						</view>
						<u--input placeholder="请输入止损开仓时间" border="none" fontSize="14" inputAlign="right"
							v-model="stopForm.time"></u--input>
						<text class="gray">分钟</text>
					</view>
					<view class="cell-item df df-betw df-acenter">
						<view class="cell-label">
							止损后停止循环
						</view>
						<u-switch v-model="stopForm.stopLoop"></u-switch>
					</view>
				</view>
				<view class="popup-btn" @click="stopLosShow=false">
					<u-button text="确定" color="linear-gradient(90deg,#418cf1,#0065eb)">
					</u-button>
				</view>
			</view>
		</u-popup>

		<!-- 导航栏弹窗 -->
		<u-action-sheet :actions="navList" :closeOnClickOverlay="true" :closeOnClickAction="true" :cancelText="'取消'"
			@close="navShow=false" class="x-action" :show="navShow" :round="5" @select="navShowClick">
		</u-action-sheet>

		<!-- 变换逐全仓模式弹窗 -->
		<u-popup :show="changeShow" class="stopLosPopup" :round="25" mode="center" :closeOnClickOverlay="true"
			@close="changeShow=false">
			<view class="stopLosPopup-content">
				<view class="popup-head">
					变换逐全仓模式
				</view>

				<view class="check-tags df df-betw">
					<view :class="changeIndex===1?'tag tag-active':'tag'" @click="changeTag(1)">
						全仓
					</view>
					<view :class="changeIndex===2?'tag tag-active':'tag'" @click="changeTag(2)">
						逐仓
					</view>
				</view>
				<view class="text-popup">
					· 调整保证金模式仅对当前合约生效。
				</view>
				<view class="text-popup">
					全仓保证金模式: 保证金资产相同的全仓仓位共享该资产的全仓保证金。在强平事件中，交易者可能会损失全部该保证金和该保证金资产下的所有全仓仓位。
				</view>
				<view class="text-popup">
					逐仓保证金模式: 一定数量保证金被分配到仓位上。如果仓位保证金亏损到低于维持保证金的水平，仓位将被强平。在逐仓模式下，您可以为这个仓位添加和减少保证金。
				</view>
				<view class="popup-btn" @click="changeShow=false">
					<u-button text="确定" color="linear-gradient(90deg,#418cf1,#0065eb)">
					</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dealTitle: '',
				dataList: [{
					text: '持仓金额',
					num: 0,
				}, {
					text: '持仓均价',
					num: 0,
				}, {
					text: '补仓单数',
					num: 0,
				}, {
					text: '持仓数量',
					num: 0,
				}, {
					text: '当前价格',
					num: 46319.05,
				}],
				btnList1: [{
					text: '继续策略循环',
					icon: '../../static/jixu.png'
				}, {
					text: '执行单次策略',
					icon: '../../static/danci.png'
				}, {
					text: '暂停策略循环',
					icon: '../../static/zanting.png'
				}, {
					text: '关闭策略',
					icon: '../../static/zanting.png',
					disabled: true
				}, {
					text: '我的收益',
					icon: '../../static/qian2.png'
				}, {
					text: '交易记录',
					icon: '../../static/rizhi2.png'
				}],
				btnList: [{
					text: '继续策略循环',
					icon: '../../static/jixu.png'
				}, {
					text: '执行单次策略',
					icon: '../../static/danci.png'
				}, {
					text: '暂停策略循环',
					icon: '../../static/zanting.png'
				}, {
					text: '清仓卖出',
					icon: '../../static/qingcang.png'
				}, {
					text: '关闭策略',
					icon: '../../static/zanting.png',
					disabled: true
				}, {
					text: '一键补仓',
					icon: '../../static/qingcang.png'
				}, {
					text: '我的收益',
					icon: '../../static/qian2.png'
				}, {
					text: '交易记录',
					icon: '../../static/rizhi2.png'
				}],
				creatNum: '',
				firstP: '',
				maxP: 0,
				firstM: 1,
				moreM: 20,
				tactics: '',
				radiosList: [{
						text: '指标趋势',
						checked: true
					},
					{
						text: '仅做多',
						checked: false
					},
					{
						text: '仅做空',
						checked: false
					}
				],
				stopLos: '',
				switchVal: true,
				tacticsShow: false,
				tacticsList: [{
					name: '保守策略'
				}, {
					name: '稳健策略'
				}, {
					name: '激进策略'
				}],
				stopLosShow: false,
				stopLosList: [{
					text: '不限',
					checked: true
				}, {
					text: '最新价格',
					checked: false
				}, {
					text: '标记价格',
					checked: false
				}],
				stopForm: {
					price: 0,
					range: 0,
					time: 0,
					stopLoop: false
				},
				dealType: 1,
				navList: [{
					name: '币安账户资金划转',
					key: 1
				}, {
					name: '变换逐全仓模式',
					key: 2
				}, {
					name: '调整逐仓保证金',
					key: 3
				}, {
					name: '币安合约U本账户',
					key: 4
				}],
				navShow: false,
				changeShow: false,
				changeIndex: 1
			};
		},
		onLoad: function(option) {
			this.dealTitle = option.name
			if (option.type === '1' || option.type === '2') {
				if (option.tab === '1') {
					this.dealType = 1
				} else {
					this.dealType = 2
				}
			} else if (option.type === '3') {
				this.dealType = 3
			} else {
				this.dealType = 4
			}
		},
		methods: {
			radioClick(name) {
				this.radiosList.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
			tacticsClick(item) {
				console.log(item);
				this.tactics = item.name
			},
			stopLosListClick(name) {
				this.stopLosList.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
			navShowClick(item) {
				console.log(item.key);
				if (item.key === 1) {
					this.$Fn.toPage('../financialTransition/financialTransition', {
						name: '资金划转'
					})
				} else if (item.key === 2) {
					this.changeShow = true
				} else if (item.key === 3) {
					this.$Fn.toPage('../adjustDeposit/adjustDeposit')
				} else {
					this.$Fn.toPage('../uAccount/uAccount', {
						type: 1
					})
				}
			},
			rightClick() {
				if (this.dealType === 3) {
					this.navShow = true
				} else if (this.dealType === 4) {
					this.$Fn.toPage('../uAccount/uAccount', {
						type: 2
					})
				}
			},
			changeTag(index) {
				this.changeIndex = index
			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #F8F8F8;
	}
</style>
<style lang="scss" scoped>
	.x-dealDetail {
		uni-view {
			line-height: 1;
		}

		.nav-bar {
			background: linear-gradient(90deg, rgb(65, 140, 241), rgb(0, 101, 235));

			/deep/.u-navbar__content {
				.u-navbar__content__title {
					color: #fff;
				}

				.u-icon {
					.u-icon__icon {
						color: #fff !important;
					}
				}
			}
		}

		.dealDetail-head {
			position: relative;

			&:before {
				content: '';
				position: absolute;
				top: 0;
				width: 100%;
				height: 260rpx;
				background: linear-gradient(90deg, rgb(65, 140, 241), rgb(0, 101, 235));
			}

			.head-in {
				position: relative;

				.head-title {
					color: #fff;
					font-size: 40rpx;
					font-weight: 700;
					width: fit-content;
					margin: 0 auto;
					padding: 20rpx 0;
					position: relative;

					.tag-text {
						background: #f0ad4e;
						border-radius: 8rpx;
						padding: 8rpx 12rpx;
						font-size: 24rpx;
						position: absolute;
						right: -82rpx;
					}
				}

				.head-box {
					background-color: #FFFFFF;
					margin: 0 30rpx;
					border-radius: 20rpx;
					flex-wrap: wrap;

					.box-item {
						width: 33.3%;
						position: relative;
						height: 140rpx;

						&:after {
							content: '';
							position: absolute;
							right: 0;
							top: 50%;
							width: 1rpx;
							height: 56rpx;
							transform: translateY(-50%);
							background-color: #ececec;
						}

						.box-item-num {
							color: #02d48f;
							font-size: 36rpx;
						}

						.box-item-text {
							margin-top: 20rpx;
							font-size: 26rpx;
							font-weight: 700;
						}

						&:nth-child(-n + 3) {
							border-bottom: 1rpx solid #ececec;
						}

						&:nth-child(3n):after {
							display: none;
						}

						&:last-child:after {
							display: none;
						}
					}



				}
			}
		}

		.dealDetail-btn {
			margin: 0 30rpx;
			flex-wrap: wrap;

			.x-btn {
				margin-top: 60rpx;
				background: linear-gradient(90deg, #418cf1, #0065eb);
				color: #FFFFFF;
				border-radius: 44rpx;
				width: 308rpx;
				height: 88rpx;
			}

			.disabled-btn {
				background: #dbe0de;
			}
		}

		.dealDetail-cell {
			background-color: #FFFFFF;
			margin: 30rpx;

			.cell-item {
				padding: 0 30rpx;
				border-bottom: 2rpx solid #F8F8F8;
				height: 100rpx;

				.cell-label {
					font-size: 32rpx;
					font-weight: 700;
					flex-shrink: 0;
				}

				.item-two {
					width: 48%;

					.bg-gray {
						background-color: #eee;
						margin-left: 20rpx;
						padding: 4rpx 20rpx;
					}
				}

				.multiple {
					font-size: 36rpx;
					color: #999;
					margin-left: 4rpx;
				}
			}
		}

		.stopLosPopup {
			/deep/.u-popup__content {
				padding: 60rpx 0;
				width: 86vw;
			}

			.stopLosPopup-content {
				.popup-head {
					font-size: 32rpx;
					font-weight: 700;
					color: #4387ea;
					text-align: center;
				}

				.popup-tags {
					display: flex;
					justify-content: space-around;
					margin: 50rpx 0 20rpx;
				}

				.dealDetail-cell {
					margin: 0 30rpx;

					.cell-item {
						padding: 0;

						.gray {
							color: #999;
							margin-left: 20rpx;
						}
					}
				}

				.popup-btn {
					margin: 80rpx 30rpx 0;
				}

				.check-tags {
					font-size: 30rpx;
					border-bottom: 2rpx solid #eee;
					padding: 50rpx 0 30rpx;
					margin: 0 30rpx;

					.tag {
						border: 2rpx solid #ddd;
						color: #999;
						border-radius: 8rpx;
						width: 48%;
						height: 80rpx;
						line-height: 80rpx;
						text-align: center;
					}

					.tag-active {
						color: #4387ea;
						font-weight: 700;
						border: 2rpx solid #4387ea;
						position: relative;
						box-sizing: border-box;

						&::before {
							content: '';
							display: block;
							width: 44rpx;
							height: 44rpx;
							background-color: #4387ea;
							position: absolute;
							right: -2rpx;
							bottom: -2rpx;
							z-index: 1;
							clip-path: polygon(100% 0, 0% 100%, 100% 100%);
						}

						&::after {
							content: '';
							display: block;
							width: 6rpx;
							height: 20rpx;
							border-right: #fff solid 3rpx;
							border-bottom: #fff solid 3rpx;
							transform: rotate(45deg);
							position: absolute;
							right: 6rpx;
							bottom: 2rpx;
							z-index: 2;
						}
					}
				}

				.text-popup {
					margin: 20rpx 30rpx 0;
					line-height: 1.5;
					color: #999999;
					font-size: 24rpx;
				}
			}
		}
	}
</style>

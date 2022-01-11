<template>
	<view class="x-financialRecord">
		<u-tabs v-if="tabShow" :list="tabList" @click="tabclick" :activeStyle="{color:'#4387ea'}"></u-tabs>
		<view class="date-pick" @click="picker">
			<u--input :value="iptDate" disabled fontSize="12" disabledColor="#fff" color="#999" :suffixIcon="selectIcon"
				:suffixIconStyle="{color: '#909399',fontSize:'28rpx'}">
			</u--input>
		</view>
		<u-datetime-picker :show="pickerShow" v-model="date" mode="year-month" :formatter="formatter"
			closeOnClickOverlay @confirm="pickerConfirm" @cancel="pickerClose" @close="pickerClose">
		</u-datetime-picker>

		<view class="hasno">暂无数据</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					name: '充币'
				}, {
					name: '转换'
				}],
				pickerShow: false,
				date: Number(new Date()),
				iptDate: '',
				selectIcon: 'arrow-down-fill',
				tabShow: true
			};
		},
		onLoad: function(option) {
			switch (option.name) {
				case '0':
					uni.setNavigationBarTitle({
						title: 'USDT明细'
					})
					this.tabShow = true
					break;
				case '1':
					uni.setNavigationBarTitle({
						title: '点卡明细'
					})
					this.tabShow = false
					break;
				case '2':
					uni.setNavigationBarTitle({
						title: '转换明细'
					})
					this.tabShow = false
					break;
			}
			// 初始化下拉框时间
			const newD = new Date()
			const year = newD.getFullYear()
			let month = newD.getMonth() + 1
			if (month.toString().length === 1) {
				month = '0' + month
			}
			this.iptDate = year + '-' + month
		},
		methods: {
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				return value
			},
			picker() {
				this.pickerShow = true
				this.selectIcon = 'arrow-up-fill'
			},
			pickerConfirm(e) {
				this.pickerShow = false
				this.selectIcon = 'arrow-down-fill'
				this.iptDate = uni.$u.timeFormat(e.value, 'yyyy-mm')
			},
			pickerClose() {
				this.pickerShow = false
				this.selectIcon = 'arrow-down-fill'
			},
			tabclick(){}
		}
	}
</script>
<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.x-financialRecord {
		.date-pick {
			margin: 20rpx 30rpx 0;
			width: 176rpx;
			background-color: #fff;

			.u-input {
				padding: 10rpx !important;
			}

			.u-button--disabled {
				background-color: #dbe0de !important;
				border-color: #dbe0de !important;
			}
		}

		.hasno {
			margin-top: 60rpx;
			text-align: center;
			color: #666;
		}
	}
</style>

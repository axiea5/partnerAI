<template>
	<view class="x-authorize">
		<u-gap height="10" bgColor="#f4f4f4"></u-gap>
		<u-cell-group class="x-cellList">
			<u-cell v-for="(item,index) in cellList" :key="index" class="x-cellItem" :title="item.title"
				:label="item.power?'':'未授权'" :isLink="false" :arrow="false" @click="$Fn.toPage(item.url,{name:item.title})">
				<u-icon slot="icon" size="40" :name="item.icon"></u-icon>
				<u-icon name="more-dot-fill" slot="right-icon" size="22"></u-icon>
			</u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cellList: [{
					title: '火币',
					power: false,
					icon: '../../static/huobi.png',
					url: '../authorizeKey/authorizeKey'
				}, {
					title: '币安',
					power: false,
					icon: '../../static/bian.png',
					url: '../authorizeKey/authorizeKey'
				}, {
					title: 'OKEx',
					power: false,
					icon: '../../static/oke.png',
					url: '../authorizeKey/authorizeKey'
				}]
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.x-authorize {
		.x-cellList {
			padding: 0 30rpx;
		}

		.x-cellItem {
			/deep/.u-cell__body__content {
				.u-cell__left-icon-wrap {
					margin-right: 20rpx;
				}

				.u-cell__label {
					color: red;
				}
			}

		}
	}
</style>

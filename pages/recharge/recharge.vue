<template>
	<view class="x-recharge">
		<view class="bg">
			<view class="sync df df-betw df-acenter">
				<text>USDT</text>
				<view class="sync-btn">同步USDT</view>
			</view>
			<view class="TRC20">
				TRC20
			</view>

			<view class="recharge-text df df-col df-acenter">
				<view class="qrcode">
				</view>
				<view class="text-btn" @click="copyQrcode">
					保存二维码至相册
				</view>
				<text class="gray">充币地址</text>
				<view>{{ address }}</view>
				<view class="text-btn" @click="copyAddress">
					复制地址
				</view>
			</view>
		</view>

		<view class="tips">
			请勿向上述地址充值任何非<text class="blue">TRC20_USDT</text>资产，否则资产将不可退回。
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: 'TQfKn8oiLq3rhZ6ofWEx5aXcHiZtf9oWAx'
			};
		},
		methods: {
			copyAddress() {
				uni.setClipboardData({
					data: this.address,
					success: function() {
						console.log('success');
					}
				});
			},
			copyQrcode() {
				var pages = getCurrentPages(); //获取当前页面信息
				console.log(pages)
				var page = pages[pages.length - 1];
				var bitmap = null;
				console.log(page)
				var currentWebview = page.$getAppWebview();
				bitmap = new plus.nativeObj.Bitmap('amway_img');
				// 将webview内容绘制到Bitmap对象中
				currentWebview.draw(bitmap, function() {
					// console.log('截屏绘制图片成功');
					//这里我将文件名用四位随机数拼接了，不然会出现当前图片替换上一张图片只能保存一张图片的问题
					let rand = Math.floor(Math.random() * 10000)
					let saveUrl = '_doc/' + rand + 'a.jpg'
					bitmap.save(saveUrl, {}, function(i) {
						// console.log('保存图片成功：' + JSON.stringify(i));
						uni.saveImageToPhotosAlbum({
							filePath: i.target,
							success: function() {
								// bitmap.clear(); //销毁Bitmap图片
								uni.showToast({
									title: '截图已保存',
									mask: false,
									duration: 1500
								});
							}
						});
					}, function(e) {
						alert('截图保存失败：' + JSON.stringify(e));
					});
				}, function(e) {
					alert('截屏绘制图片失败：' + JSON.stringify(e));
				});
			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.x-recharge {
		.bg {
			background-color: #f6f6fa;
			margin: 30rpx;
		}

		.sync {
			padding: 20rpx 30rpx 38rpx;
			font-weight: 600;

			.sync-btn {
				background-color: #0166eb;
				border-radius: 40rpx;
				color: #fff;
				padding: 10rpx 30rpx;
			}
		}

		.TRC20 {
			background-color: #0166eb;
			color: #fff;
			padding: 6rpx 30rpx;
			border-radius: 8rpx;
			margin-left: 52rpx;
			width: fit-content;
		}

		.recharge-text {
			margin: 90rpx 50rpx 0;

			.qrcode {
				width: 320rpx;
				height: 320rpx;
				border-radius: 10rpx;
				border: 2rpx solid #ccc;
			}

			.text-btn {
				background-color: #e8edf9;
				color: #4387ea;
				border: 2rpx solid #aecaf4;
				border-radius: 10rpx;
				padding: 20rpx 36rpx;
				margin: 44rpx 0;
			}

			.gray {
				color: #999;
				margin-bottom: 48rpx;
			}
		}

		.tips {
			margin: 20rpx 30rpx 0;

			.blue {
				color: #0166eb;
			}
		}
	}
</style>

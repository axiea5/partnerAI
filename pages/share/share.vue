<template>
	<view class="x-share" id="x-share">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="img">
			<u-icon name="arrow-left" color="#fff" size="20" :bold="true" top="15" @click="$Fn.turnoff"></u-icon>
		</view>
		<view class="share df df-center df-col">
			<text class="shareId">我的邀请码：EFA180</text>
			<view class="qrcode">
			</view>
			<text class="gray">扫描二维码下载APP</text>
			<u-button color="linear-gradient(to right, #e3bf8d,#e0a563)" class="custom-style" shape="circle"
				text="长按屏幕保存图片分享好友" @click="canvasImg"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			canvasImg() {
				console.log(111)
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
									title: '保存图片成功',
									mask: false,
									duration: 1500
								});
							}
						});
					}, function(e) {
						alert('保存图片失败：' + JSON.stringify(e));
					});
				}, function(e) {
					alert('截屏绘制图片失败：' + JSON.stringify(e));
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #13194e;
	}

	.x-share {
		position: relative;
		height: 100vh;
		width: 100vw;
		background: #12194b url(../../static/share-bg.jpg) center top/100% no-repeat;

		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.img {
			/deep/.u-icon__icon {
				left: 30rpx;
			}
		}

		.share {
			bottom: 50rpx;
			position: fixed;
			background: url(../../static/yqhy.png) top/100% no-repeat;
			padding-top: 80rpx;
			border-radius: 30rpx;
			width: 670rpx;
			left: 40rpx;

			.tag {
				height: 70rpx;
				position: absolute;
				left: 50%;
				top: -14rpx;
				transform: translateX(-50%);
			}

			.shareId {
				font-size: 24rpx;
				margin: 20rpx 0;
			}

			.qrcode {
				width: 200rpx;
				height: 200rpx;
				border-radius: 6rpx;
				border: 2rpx solid #ddd;
			}

			.gray {
				font-size: 24rpx;
				transform: scale(0.75);
				color: #999;
				margin: 16rpx 0 22rpx;
			}

			.custom-style {
				width: 400rpx;
				height: 60rpx;
				margin-bottom: 36rpx;

				/deep/.u-button__text {
					font-size: 24rpx !important;
				}
			}
		}
	}
</style>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uni.scss";
	@import "@/uni_modules/uview-ui/index.scss";

	page {
		font-size: 30rpx;
	}

	.df {
		display: flex;
	}

	.df-acenter {
		align-items: center;
	}
	.df-jcenter {
		justify-content: center;
	}

	.df-betw {
		justify-content: space-between;
	}

	.df-col {
		flex-direction: column;
	}

	.f10 {
		font-size: 24rpx;
		transform: scale(0.8333);
	}

	.x-group {
		/deep/.u-cell-group__wrapper {
			.u-cell__title-text {
				font-size: 30rpx;
			}

			>.u-line {
				display: none;
			}

			:last-child.u-cell {
				.u-line {
					display: none;
				}
			}
		}
	}

	.x-action {
		/deep/.u-popup__content {
			margin: 12rpx !important;

			.u-action-sheet {
				.u-gap {
					background-color: rgba(0, 0, 0, 0.5) !important;
				}

				.u-action-sheet__item-wrap {
					border-radius: 10rpx;

					.u-action-sheet__item-wrap__item {
						.u-action-sheet__item-wrap__item__name {
							font-size: 30rpx;
						}
					}
				}

				.u-action-sheet__cancel-text {
					font-size: 30rpx;
				}
			}
		}
	}

	.x-form {
		.u-form-item {
			/deep/.u-form-item__body__left__content__label {
				font-size: 30rpx;
			}
		}
	}
</style>

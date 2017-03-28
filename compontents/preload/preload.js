import Promise from './es6-promise.min';

class Preload {
	constructor(context){
		this.page = context;											//获取页面执行环境
		this.callback = {};												//加载完成后回调
		this.callbackErr = {};											//加载失败后回调

		this.flag = 0;													//当前加载的标识
		this.count = 0;													//加载总数
		this.imgInfo = {};												//返回加载图片信息


		this.page.data.imgLoadList = [];								//图片加载列表
		this.page._loadImg = this._loadImg.bind(this);					//在页面执行环境中绑定图片加载完成回调
		this.page._loadImgError = this._loadImgError.bind(this);		//在页面执行环境中绑定图片加载失败回调
	}

	//加载单张图片
	load(src, callback) {
		const _this = this;
		this.callback = this.callback || function(){};
		const imgLoadList = this.page.data.imgLoadList;

		


		return new Promise((resolve, reject) => {
			if(!src || _this.page.data.imgLoadList.includes(src)){
				reject('img is exist')
			}

			imgLoadList.push(src);

			_this.page.setData({
				imgLoadList: imgLoadList
			})
			_this.callback = resolve.bind(this);
			_this.callbackErr = reject.bind(this);
		})
	}

	//加载多张图片
	loadList(imgList, callback) {

		const _this = this;
		this.callback = callback || function(){};


		return new Promise((resolve, reject) => {
			if(!imgList) {
				reject('Loading failed')
			}

			//去重
			imgList = [...new Set(imgList)];
			imgList.forEach((item) => {
				_this.count++;
				_this.load(item);
			})
			_this.callback = resolve.bind(this);
			_this.callbackErr = reject.bind(this);

		})
	}



	_loadImg(e) {
		this.flag++;
		const src = e.currentTarget.dataset.src,
			  width = e.detail.width,
			  height = e.detail.height;
		this.imgInfo[e.currentTarget.dataset.src] = {width, height};

		if(this.flag >= this.count) {
			this.callback(this.imgInfo);
			this.imgInfo = {};
		}
	}

	_loadImgError(e) {
		this.callbackErr(e);
	}
}

export default Preload;
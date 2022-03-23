const getShareImage = require('@jlengstorf/get-share-image').default;

module.exports = {
  eleventyComputed: {
    shareImage: (data) => {

      const temp = getShareImage({
        
        cloudName: 'dri4qyetg',
        imagePublicID: 'borgateo-min',
        title: data.title,
        textColor: '333333',
        titleFont: 'Amiri',
        titleFontSize: 105,
        titleExtraConfig: 'w_800',
        textAreaWidth: 1000,
        textLeftOffset: 25,
        titleBottomOffset: -150,
        titleGravity: 'center',
      });
      return temp
    }
  }
};
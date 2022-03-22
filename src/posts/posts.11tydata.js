const getShareImage = require('@jlengstorf/get-share-image').default;

module.exports = {
  eleventyComputed: {
    shareImage: (data) => {

      const temp = getShareImage({
        title: data.title,
        tagline: "borgateo.com",
        cloudName: 'dri4qyetg',
        imagePublicID: 'borgateo',
        textColor: '333333',
        taglineColor: '777777',
        taglineFont: 'Poly',
        taglineExtraConfig: 'w_200',
        taglineFontSize: 35,
        taglineGravity: 'center',
        taglineTopOffset: 135,
        textAreaWidth: 1000,
        titleFont: 'Poly',
        titleFontSize: 115,
        titleExtraConfig: 'w_600',
        titleGravity: 'center',
        titleLeftOffset: 10,
        titleBottomOffset: -190,
      });
      return temp
    }
  }
};
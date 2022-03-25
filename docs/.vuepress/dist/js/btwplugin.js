window.onload = function() {
  themeDefaultContent = $(
    '#app > .theme-container>.page > .theme-default-content'
  );

  themeDefaultContent.attr('id', 'container');
  btw = new BTWPlugin();
  btw.init({
    id: 'container',
    blogId: '15005-1605711320163-146',
    name: 'dearlocation',
    qrcode: 'http://pic.yupoo.com/itclan/7c9fd976/bccf3846.jpg',
    keyword: '验证码',
  });
};

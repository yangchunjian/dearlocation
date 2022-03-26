window.onload = function() {
  themeDefaultContent = $(
    '#app > .theme-container>.page > .theme-default-content'
  );

  themeDefaultContent.attr('id', 'container');
  btw = new BTWPlugin();
  btw.init({
    id: 'container',
    blogId: '29399-1648261280064-485',
    name: '亲位网',
    qrcode: 'https://www.yangchunjian.com/docbook/imgs/qrcode_for_gh_8756901e5b12_344.jpg',
    keyword: '验证码',
  });
};

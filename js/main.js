document.addEventListener('DOMContentLoaded', function () {
  console.log('loaded');

  const rootElement = document.querySelector('#root');
  const sections = document.querySelectorAll('section');

  console.log(sections, rootElement);

  document.addEventListener('mousewheel', function (e) {
    console.log(e.wheelDelta);
  });
});

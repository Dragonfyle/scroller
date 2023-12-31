document.addEventListener('DOMContentLoaded', function () {
  //   const ROOT_ELEMENT = document.querySelector('#root');
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;
  let isThrottled = false;
  const QUARTER_SECOND = 250;

  document.addEventListener('wheel', (e) => handleScroll(e), {
    passive: false,
  });

  function jumpToSection(section) {
    sections[section].scrollIntoView(true, {
      behavior: 'smooth',
      block: 'start',
    });
  }

  function scroll(requestedSection, direction) {
    const NUMBER_OF_SECTIONS = sections.length - 1;
    const FIRST_SECTION = 0;

    if (
      isThrottled ||
      requestedSection > NUMBER_OF_SECTIONS ||
      requestedSection < FIRST_SECTION
    ) {
      return;
    }

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, QUARTER_SECOND);

    currentSectionIndex = currentSectionIndex + direction;

    jumpToSection(requestedSection);
  }

  function handleScroll(e) {
    const direction = e.wheelDeltaY < 0 ? 1 : -1;
    const requestedSection = currentSectionIndex + direction;
    console.log(requestedSection);
    e.preventDefault();
    scroll(requestedSection, direction);
  }
});

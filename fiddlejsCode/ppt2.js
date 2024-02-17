let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();
  let opts = {
    y: 2,
    w: '100%',
    h: 1.5,
    align: 'center',
    fontSize: 24,
    color: '000000',
    bold:true,
  };
  slide.addText(
    'The Necessity of Systems Thinking in Leadership',
    opts
  );
  pptx.writeFile();
}
let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Function to add a hollow circle with a number
function addNumberedCircle(slide, x, y) {
    // Add the hollow circle
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: 0.58,
        h: 0.58,
        line: { color: '0000ff', width: 1.5 }, // Sky blue border color and width
        fill: 'ffffff', // White fill color for a hollow circle
    });
}

// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();

    // Title
    let titleOpts = {
        x: '5%',
        y: '0.7%',
        w: '100%',
        h: 1.5,
        fontSize: 24,
        color: '000000',
        bold: true,
    };
    slide.addText('Indian History', titleOpts);

    // Pros Texts
    let opts3 = {
        x: '5%',
        y: '34%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('The history of India dates back to around 1990 BC, known as the Indus Valley Civilization, characterized by advanced urban planning and trade.', opts3);

    let opts5 = {
        x: '36%',
        y: '32%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('The Vedic period followed, marked by the composition of the Vedas and the emergence of early Hinduism.', opts5);

    let opts7 = {
        x: '67%',
        y: '32%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('In 327 BC, Alexander the Great invaded Northwestern India, leaving a lasting impact on Indian culture and history.', opts7);

    let opts4 = {
        x: '5%',
        y: '67.5%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('The Maurya Empire, established in 322 BC by Chandragupta Maurya, was a significant dynasty known for its expansion and governance.', opts4);

    let opts6 = {
        x: '36%',
        y: '67.5%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText("The Gupta Empire, from 320 to 550 AD, was a golden age of Indian civilization, marked by achievements in art, science, and mathematics.", opts6);

    let opts1 = {
        x: '67%',
        y: '65.5%',
        w: '25%',
        h: 1,
        fontSize: 12,
        color: '000000',
    };
    slide.addText('The history of India is rich and diverse, with various empires, cultures, and influences shaping the country over millennia.', opts1);

    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '15%',
        y: '25%',
    };
    addNumberedCircle(slide, '13.5%', '22%');
    // Add the first image to the slide
    slide.addImage(imageOpts);

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '45%',
        y: '25%',
    };
    addNumberedCircle(slide, '43.5%', '22%');
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '77%',
        y: '25%',
    };
    addNumberedCircle(slide, '75.5%', '22%');
    // Add the third image to the slide
    slide.addImage(imageOpts2);

    let imageOpts3 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '15%',
        y: '58.5%',
    };
    addNumberedCircle(slide, '13.5%', '55.5%');
    // Add the fourth image to the slide
    slide.addImage(imageOpts3);

    let imageOpts4 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '45%',
        y: '58.5%',
    };
    addNumberedCircle(slide, '43.5%', '55.5%');
    // Add the fifth image to the slide
    slide.addImage(imageOpts4);

    let imageOpts5 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '77%',
        y: '58.5%',
    };
    addNumberedCircle(slide, '75.5%', '55.5%');
    // Add the sixth image to the slide
    slide.addImage(imageOpts5);

    pptx.writeFile();
}
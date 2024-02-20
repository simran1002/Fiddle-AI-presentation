let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
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
        fontFace: 'League Spartans'
    };
    slide.addText('Indian History', titleOpts);

    // Pros Texts
    let opts3 = {
        x: '15%',
        y: '15%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("Kargil War between India and Pakistan took place." ,opts3);

    let opts5 = {
        x: '15%',
        y: '35%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("India's population crossed the 1 billion mark in 1999.", opts5);

    let opts4 = {
        x: '15%',
        y: '55%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("National Democratic Alliance (NDA) government came into power with Atal Bihari Vajpayee as Prime minister.", opts4);

    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '26%',
    };
    // Add the first image to the slide
    slide.addImage(imageOpts);
    addSolidCircle(slide, '12.5%', '27%', '0000ff'); // Add blue circle

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '46%',
    };
    // Add the second image to the slide
    slide.addImage(imageOpts1);
    addSolidCircle(slide, '12.5%', '47%', '722BB3'); // Add purple circle

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '66%',
    };
    // Add the third image to the slide
    slide.addImage(imageOpts2);
    addSolidCircle(slide, '12.5%', '67%', 'FFF12B'); // Add yellow circle

    pptx.writeFile();
};

// Function to add a solid circle with a specified color
function addSolidCircle(slide, x, y, color) {
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: 0.15,
        h: 0.15,
        fill: color, // Use the specified color
    });
}
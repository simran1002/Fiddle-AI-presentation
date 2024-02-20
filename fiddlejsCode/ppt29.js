let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Simple Slide
window.doDemo = function do7cells() {
    // Remove the redundant declaration of slide here
    let slide = pptx.addSlide();

    // Function to add a hollow circle with a number
    function addNumberedCircle(slide, x, y, color) {
        // Add the hollow circle
        slide.addShape(pptx.shapes.OVAL, {
            x: x,
            y: y,
            w: 0.7,
            h: 0.7,
            line: { color: color, width: 1.5 },
            fill: 'ffffff',
        });
    }


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
        x: '9%',
        y: '53%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        align: 'center',
        fontFace: 'Inter'
    };
    slide.addText('In 1999, India witnessed significant developments in technology and politics. The Kargil War with Pakistan and the establishment of the Kargil Vijay Diwas marked a crucial moment in Indian history.', opts3);

    let opts5 = {
        x: '38%',
        y: '51%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        align: 'center',
        fontFace: 'Inter'
    };
    slide.addText("The year 1999 saw the launch of the Indian Space Research Organization's (ISRO) first indigenously developed satellite, IRS-1C. This marked a milestone in India's space exploration journey.", opts5);

    let opts4 = {
        x: '68%',
        y: '53%',
        w: '25%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        align: 'center',
        fontFace: 'Inter'
    };
    slide.addText("In 1999, Atal Bihari Vajpayee served as the Prime Minister of India, leading the National Democratic Alliance government. His tenure was marked by both domestic and international challenges, shaping India's political landscape. ", opts4);


    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '20%',
        y: '29%',
    };
    addNumberedCircle(slide, '18%', '24.5%', '0000ff');
    // Add the first image to the slide
    slide.addImage(imageOpts);

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '48.5%',
        y: '29%',
    };
    addNumberedCircle(slide, '46.5%', '24.5%','722BB3');
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '78%',
        y: '29%',
    };
    addNumberedCircle(slide, '76%', '24.5%','FFF12B');
    // Add the third image to the slide
    slide.addImage(imageOpts2);


    // Text below the first image
    let opts = {
        x: '18.5%',
        y: '35%',
        w: '40%',
        h: 1,
        fontSize: 15,
        bold: true,
        color: '0000ff',
        fontFace: 'League Spartans'
    };
    slide.addText("1999", opts);

    // Text below the second image
    let opts11 = {
        x: '40.5%',
        y: '35%',
        w: '20%',
        h: 1,
        fontSize: 15,
        bold: true,
        color: '0000ff',
        align: 'center',
        fontFace: 'League Spartans'
    };
    slide.addText("Technological Advancements", opts11);

    // Text below the third image
    let opts2 = {
        x: '68%',
        y: '35%',
        w: '25%',
        h: 1,
        fontSize: 15,
        bold: true,
        color: '0000ff',
        align: 'center',
        fontFace: 'League Spartans'
    };
    slide.addText("Political Landscape", opts2);


    pptx.writeFile();
};
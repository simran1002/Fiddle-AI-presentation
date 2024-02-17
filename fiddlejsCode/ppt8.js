let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Function to add a solid circle of size 1
function addCircle(slide, x, y) {
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: 0.05,
        h: 0.05,
        fill: '000000', // You can change the color as needed
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

    // Pros
    let prosTitleOpts = {
        x: '10%',
        y: '20%',
        w: '45%',
        h: 1,
        fontSize: 20,
        color: '000000',
        bold: true,
    };
    slide.addText('Pros', prosTitleOpts);
    // Add circle before Pros title

    // Pros Texts
    let opts3 = {
        x: '8%',
        y: '35%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('The Indian Army continues to modernize its equipment and technology for enhanced defense capabilities.', opts3);
    addCircle(slide, '6%', '40%'); // Add circle before Pros text

    let opts5 = {
        x: '8%',
        y: '45%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('In 2023, the Indian Army achieved record recruitment numbers, strengthening its forces.', opts5);
    addCircle(slide, '6%', '52%'); // Add circle before Pros text

    let opts7 = {
        x: '8%',
        y: '55%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('The Indian Army has a rich history and tradition of valor and service to the nation.', opts7);
    addCircle(slide, '6%', '62%'); // Add circle before Pros text

    // Cons
    let consTitleOpts = {
        x: '56.5%',
        y: '20%',
        w: '45%',
        h: 1,
        fontSize: 20,
        color: '000000',
        bold: true,
    };
    slide.addText('Cons', consTitleOpts);
    // Add circle before Cons title

    let opts4 = {
        x: '55%',
        y: '35%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('Challenges such as border tensions and security threats persist in the region.', opts4);
    addCircle(slide, '53%', '42%'); // Add circle before Cons text

    let opts6 = {
        x: '55%',
        y: '45%',
        w: '35%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText("Budget constraints may limit the Indian Army's ability to implement all desired upgrades and expansions.", opts6);
    addCircle(slide, '53%', '50%'); // Add circle before Cons text

    // Line separating Pros and Cons
    slide.addShape(pptx.shapes.LINE, { x: '5%', y: '35%', w: '43%', h: 0, line: { color: '000000', width: 2 } });
    slide.addShape(pptx.shapes.LINE, { x: '53%', y: '35%', w: '43%', h: 0, line: { color: '000000', width: 2 } });

    // Image options
    let imageOpts = {
        path: 'https://cdn-icons-png.freepik.com/256/14441/14441011.png?ga=GA1.1.121843369.1708074947&semt=ais',
        h: 0.1,
        w: '3%',
        x: '6%',
        y: '28%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts);

    let imageOpts1 = {
        path: 'https://t3.ftcdn.net/jpg/01/43/11/20/360_F_143112044_gPXDDV55GTU8LQcX9GMbbP2Ss83ORMoy.webp',
        h: 0.1,
        w: '3%',
        x: '53%',
        y: '28%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts1);

    pptx.writeFile();
}
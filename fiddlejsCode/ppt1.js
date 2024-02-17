let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');

// Function to add a solid circle
function addCircle(slide, x, y, w, h, fill) {
    slide.addShape(pptx.shapes.OVAL, {
        x: x,
        y: y,
        w: w,
        h: h,
        fill: fill,
    });
}

// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();

    // Title
    let titleOpts = {
        x: '5%',
        y: '7%',
        w: '100%',
        h: 1.5,
        fontSize: 24,
        color: '000000',
        bold: true,
    };
    slide.addText('Indian History', titleOpts);

    // Pros
    let prosTitleOpts = {
        x: '5%',
        y: '25%',
        w: '100%',
        h: 1,
        fontSize: 20,
        color: '000000',
        bold: true,
    };
    slide.addText('Indian Army', prosTitleOpts);

    // Pros Texts with Bullet Points
    let opts3 = {
        x: '8%',
        y: '35%',
        w: '45%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('The Indian Army is the land-based and the largest component of the Indian Armed Forces.', opts3);
    addCircle(slide, '7%', '42%', 0.08, 0.08, '000000'); // Circle before Pros text

    let opts5 = {
        x: '8%',
        y: '45%',
        w: '45%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('It traces its roots back to the British Indian Army that existed before independence in 1947.', opts5);
    addCircle(slide, '7%', '52%', 0.08, 0.08, '000000'); // Circle before Pros text

    let opts2 = {
        x: '8%',
        y: '55%',
        w: '45%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('The Indian Army is the land-based branch and the largest component of the Indian Armed Forces.', opts2);
    addCircle(slide, '7%', '62%', 0.08, 0.08, '000000'); // Circle before Pros text

    let opts7 = {
        x: '8%',
        y: '65%',
        w: '45%',
        h: 1,
        fontSize: 11,
        color: '000000',
    };
    slide.addText('The Indian Army is the land-based branch and the largest component of the Armed Forces.', opts7);
    addCircle(slide, '7%', '72%', 0.08, 0.08, '000000'); // Circle before Pros text

    // Image options
    let imageOpts = {
        path: 'https://images.pexels.com/photos/4050356/pexels-photo-4050356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        h: 5.52,
        w: '30%',
        x: '63%',
        y: 0.05,
    };

    // Add the image to the slide
    slide.addImage(imageOpts);

    // Add circles along the edges of the image
    addCircle(slide, '60.9%', '45%', 0.4, 0.4, '643B9F'); // Top-left
    addCircle(slide, '91.6%', '10%', 0.25, 0.25, '643B9F'); // Top-right


    pptx.writeFile();
}
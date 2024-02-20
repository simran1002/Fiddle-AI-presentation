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
        x: '13.5%',
        y: '18%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText('Kargil War between India and Pakistan took place, leading to significant military conflict in the region.', opts3);

    let opts5 = {
        x: '13.5%',
        y: '38%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("Atal Bihari Vajpayee served as the Prime Minister of India during this period, implementing various economic and political reforms.", opts5);

    let opts4 = {
        x: '13.5%',
        y: '58%',
        w: '50%',
        h: 1.5,
        fontSize: 12,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("India's population reached approxiamately 1 billion people in 1999, marking a significant demographic milestone for the country.", opts4);


    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '29%',
    };
    // Add the first image to the slide
    slide.addImage(imageOpts);

    // Draw horizontal line connecting logos

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '49%',
    };
    // Add the second image to the slide
    slide.addImage(imageOpts1);

    let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6.5%',
        y: '69%',
    };
    // Add the third image to the slide
    slide.addImage(imageOpts2);


    pptx.writeFile();
};